import {writeFile} from "fs/promises";

await writeFile("stud.txt", "name:amit giri");
console.log("File written ");
