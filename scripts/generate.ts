import * as dotenv from "dotenv";
dotenv.config({ path: ".env.local" });
// Configure dotenv before other imports
import fs from "fs";
import path from "path";
import { DocumentInterface } from "@langchain/core/documents";
import { DirectoryLoader } from "langchain/document_loaders/fs/directory";
import { TextLoader } from "langchain/document_loaders/fs/text";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";

async function generateEmbeddings() {
  const loader = new DirectoryLoader(
    "src/app/",
    {
      ".tsx": (path) => new TextLoader(path),
    },
    true
  );

  const docs = (await loader.load())
    .filter((doc) => {
      const source = doc.metadata.source;
      const excludedFiles = ["route.js", "favicon.ico", "globals.css"];
      return !excludedFiles.some((file) => source.endsWith(file));
    })
    .filter((doc) => doc.metadata.source.endsWith("page.tsx"))
    .map((doc): DocumentInterface => {
      const url =
        doc.metadata.source
          .replace(/\\/g, "/")
          .split("/src/app")[1]
          .split("/page.")[0] || "/";

      const pageContentTrimmed = doc.pageContent
        .replace(/^import.*$/gm, "") // Remove all import statements
        .replace(/ className=(["']).*?\1| className={.*?}/g, "") // Remove all className props
        .replace(/^\s*[\r]/gm, "") // remove empty lines
        .trim();

      return {
        pageContent: pageContentTrimmed,
        metadata: { url },
      };
    });

  const splitter = RecursiveCharacterTextSplitter.fromLanguage("html");

  const splitDocs = await splitter.splitDocuments(docs);

  const outputDir = path.join(__dirname, "output");
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
  }

  splitDocs.forEach((doc, index) => {
    const outputPath = path.join(outputDir, `document_${index + 1}.json`);
    fs.writeFileSync(outputPath, JSON.stringify(doc, null, 2));
  });

  console.log(docs);
}

generateEmbeddings().catch((err) => {
  console.error(err);
});
