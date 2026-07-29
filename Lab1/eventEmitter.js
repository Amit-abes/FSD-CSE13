import{EventEmitter} from "node:events";
const task = new EventEmitter();
const sayhi = (name) => {
  console.log(`welcome to ${name}`);
};
const start = () => {
    console.log("starting the task");
};

task.on("greet", sayhi);
task.on("greet", start);
task.on("greet", (name) => {
    console.log('')
task.emit("greet", "amit giri");