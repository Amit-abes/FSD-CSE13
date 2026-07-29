import { writeFile } from "fs/promises";

await writeFile("stud.txt", "name:amit giri");
console.log("File written ");

const writeData = (fname,content) => {

};
const readData = (fname) => {
const data = await readFile(fname, "utf-8");
console.log('file content');
console.log(data);
};  
await writeData("happy.txt", "I am very happy
    
    
    
    \
    ");   
await readData("happy.txt");

