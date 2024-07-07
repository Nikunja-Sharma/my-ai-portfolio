import { AIMessage, HumanMessage } from "@langchain/core/messages";
import {
  ChatPromptTemplate,
  MessagesPlaceholder,
} from "@langchain/core/prompts";
import { ChatOpenAI } from "@langchain/openai";
import {
  LangChainStream,
  StreamingTextResponse,
} from "ai";
// import { createStuffDocumentsChain } from "langchain/chains/combine_documents";

export async function POST(req) {
  try {
    const body = await req.json();
    const messages = body.messages;

    // const chatHistory = messages
    //   .slice(0, -1)
    //   .map((m) =>
    //     m.role === "user"
    //       ? new HumanMessage(m.content)
    //       : new AIMessage(m.content),
    //   );
// console.log("messages historyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy"+ messages)
const formattedMessages = messages.map(message => {
  const role = message.role === "user" ? "user" : "ai";
  return `${role}: ${message.content}`;
}).join("\n");

console.log("formattedMessages: \n" + formattedMessages);

console.log("formattedMessages: \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n" + formattedMessages);


    const currentMessageContent = messages[messages.length - 1].content;

    const { stream, handlers } = LangChainStream();

    const chatModel = new ChatOpenAI({
      modelName: "google/gemma-2-9b-it:free",
      streaming: true,
      callbacks: [handlers],
      // verbose: true,
      configuration: { baseURL: "https://openrouter.ai/api/v1" },
      temperature:0.0,
      openAIApiKey:"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"
      
    });
    // const prompt = ChatPromptTemplate.fromMessages([
    //   [
    //     "system",
    //     "You are a chatbot for a personal portfolio website. You impersonate the website's owner. " +
    //     "Answer the user's questions based on the below context. " +
    //     "Don't answer anything that is not available in context. " +
    //     "Whenever it makes sense, provide links to pages that contain more information about the topic from the given context. " +
    //     "Format your messages in markdown format. {context}\n\n",
    //   ],
    //   new MessagesPlaceholder("chat_history"),
    //   ["user", "{input}"],
    // ]);

    const prompt = ChatPromptTemplate.fromMessages([
      [
        "system",
        "You are a chatbot for a personal portfolio website. You impersonate the website's owner. " +
        "Answer the user's questions based on the below context. " +
        "Don't Provide anything that is not available in context. " +
        "Whenever it makes sense, provide links to pages that contain more information about the topic from the given context. " +
        `Format your messages in markdown format.Context: \n ## Home Page

        I'm Nikunja Sarma, a web developer from Assam, India. I specialize in Next.js, TypeScript, and Python AI development. Visit my [About](/about) page to learn more about me and ask the chatbot anything.
        
        ## About Page
        
        I'm Nikunja Sarma, a self-taught web developer with a BCA in Cloud Technology and Information Security from [Assam Downtown University](https://adtu.in). I work at [ZeroRisk Labs](https://www.zerorisklabs.com) and have interned at [TeachNook](https://teachnook.com/) and [Verzeo](https://learn.verzeo.in), gaining skills in Next.js, React.js, and AWS cloud services. I'm proficient in JavaScript, TypeScript, Python, C/C++, and various web technologies.
        
        ## Social Page
        
        Explore my social media channels , Connect with me on [Instagram](https://nikunja.online/instagram), [Twitter](https://nikunja.online/x), [GitHub](https://nikunja.online/github), and [LinkedIn](https://nikunja.online/linkedin).
        
        ## Privacy Policy
        
        My website showcases my work while respecting your privacy. I collect basic log data to improve website functionality and respond to inquiries. Your personal data is never sold or rented, and I maintain security measures to protect your information. For questions, contact me at [contactme@nikunja.online](mailto:contactme@nikunja.online).
        
         \n\n
         
         chathistory: ${formattedMessages}
         reply based on chat history
         `,
      ],
      ["human", "{word}"],
    ]);
    
    const chain = prompt.pipe(chatModel);
    
    chain.invoke({
      word: currentMessageContent,
    });
    
    // console.log(response);

    return new StreamingTextResponse(stream);
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
