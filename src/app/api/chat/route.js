// import { getVectorStore } from "@/lib/astradb";
import { AIMessage, BaseMessageFields, HumanMessage } from "@langchain/core/messages";
import {
  ChatPromptTemplate,
  MessagesPlaceholder,
  PromptTemplate,
} from "@langchain/core/prompts";
import { ChatOpenAI } from "@langchain/openai";

import {
  LangChainStream,
  StreamingTextResponse,
  Message as VercelChatMessage,
} from "ai";

import { createStuffDocumentsChain } from "langchain/chains/combine_documents";
import { createHistoryAwareRetriever } from "langchain/chains/history_aware_retriever";
import { createRetrievalChain } from "langchain/chains/retrieval";
import { DirectoryLoader } from "langchain/document_loaders/fs/directory";
import { TextLoader } from "langchain/document_loaders/fs/text";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { MemoryVectorStore } from "langchain/vectorstores/memory";



import dotenv from "dotenv";
import { HuggingFaceInferenceEmbeddings } from "@langchain/community/embeddings/hf";
import clsx from "clsx";
import { JSONLoader } from "langchain/document_loaders/fs/json";


export async function POST(req) {
  try {
    const body = await req.json();
    const messages = body.messages;

    const chatHistory = messages
      .slice(0, -1)
      .map((m) =>
        m.role === "user"
          ? new HumanMessage(m.content)
          : new AIMessage(m.content),
      );

    const currentMessageContent = messages[messages.length - 1].content;

    // const cache = new UpstashRedisCache({
    //   client: Redis.fromEnv(),
    // });

    const { stream, handlers } = LangChainStream();

    const chatModel = new ChatOpenAI({
      modelName: "google/gemma-2-9b-it:free",
      streaming: true,
      callbacks: [handlers],
      verbose: true,
      configuration: { baseURL: "https://openrouter.ai/api/v1" },
      // cache,
    });

    const rephrasingModel = new ChatOpenAI({
      modelName: "google/gemma-2-9b-it:free",
      verbose: true,
      // cache,
      configuration: { baseURL: "https://openrouter.ai/api/v1" },
    },);



    const loader = new DirectoryLoader(
      "scripts/output",
      {
        ".json": (path) => new JSONLoader(path),

      }
    );

    
    const docs = await loader.load();
    // console.log(docs)
    const splitter = RecursiveCharacterTextSplitter.fromLanguage("html");

      // Instantiate Embeddings function
  const embeddings = new HuggingFaceInferenceEmbeddings({
    apiKey: process.env.HUGGINGFACE_API_KEY,
    model: "sentence-transformers/all-MiniLM-L6-v2",
  });
  const splitDocs = await splitter.splitDocuments(docs);
console.log("Created");
splitDocs.forEach((doc, index) => {
  console.log( doc);
});
  // Create Vector Store
    const vectorstore = await MemoryVectorStore.fromDocuments(splitDocs, embeddings);
    console.log("Vector Store Created");
  // console.log(vectorstore)
   // Create a retriever from vector store
   const retriever = vectorstore.asRetriever({ k: 5 }); // Increase 'k' for more context
   console.log("Retriever ");
  //  console.log(retriever)
  // console.log(retriever)

    const rephrasePrompt = ChatPromptTemplate.fromMessages([
      new MessagesPlaceholder("chat_history"),
      ["user", "{input}"],
      [
        "user",
        "Given the above conversation, generate a search query to look up in order to get information relevant to the current question. " +
          "Don't leave out any relevant keywords. Only return the query and no other text.",
      ],
    ]);
console.log("rephrasePrompt")

// const historyAwareRetrieverChain = await createHistoryAwareRetriever({
//   llm: rephrasingModel,
//   retriever,
//   rephrasePrompt,
// });
console.log("historyAwareRetrieverChain")

const prompt = ChatPromptTemplate.fromMessages([
  [
      "system",
      "You are a chatbot for a personal portfolio website. You impersonate the website's owner. " +
      "Answer the user's questions based on the below context. " +
      "Dont answer anything that not avalable in context" +
      "Whenever it makes sense, provide links to pages that contain more information about the topic from the given context. " +
      "Format your messages in markdown format.\n\n" +
      "Context:\n{context}",
  ],
  new MessagesPlaceholder("chat_history"),
  ["user", "{input}"],
]);
console.log("prompt")

const combineDocsChain = await createStuffDocumentsChain({
  llm: chatModel,
  prompt,
  
});
    console.log("combineDocsChain")
    
    
    // const retrievalChain = await createRetrievalChain({
    //   combineDocsChain,
    //   retriever: retriever,
    // });
    console.log("retrievalChain")
    const conversationChain = await createRetrievalChain({
      combineDocsChain,
      retriever
    });

    conversationChain.invoke({
      chat_history: chatHistory,
      input: currentMessageContent,
    });

    console.log("retrievalChain")

    return new StreamingTextResponse(stream);
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}