const { readFile, readFileSync } = require("fs");
const { buffer } = require("stream/consumers");

readFile("./content.md", "utf8", (err, content) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(content);
});

let result = readFileSync("./content.md", "utf8");

console.log(result);

var buff1 = Buffer.alloc(10);
buff1.write("welcome to buffer");
console.log(buff1);
