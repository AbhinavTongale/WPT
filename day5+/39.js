import { readFile } from "node:fs/promises";

async function main() {
   console.log("read file demo");

  let filePath = "D:\\Cdac\\WPT\\Day3\\3.html";

  let output = await readFile(filePath, {encoding: "utf8"});

  console.log(output);
}

main();