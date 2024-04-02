const fs = require("fs");
const timeInitialized = Date.now();

fs.readFile("test-file2.txt", "utf-8", () => {
  console.log("-------------------------");
  console.log("From the readfile module.");
  //console.log("time: ", Date.now() - timeInitialized);
});

setImmediate(() => {
  console.log("From setImmediate");
  //console.log("time: ", Date.now() - timeInitialized);
  while (Date.now() - timeInitialized < 100) {
    //nothing
    // console.log(Date.now() - timeInitialized);
  }
});
console.log("This is the top level code");
setTimeout(() => {
  console.log("Form setTimeout.");
  //console.log("time: ", Date.now() - timeInitialized);
}, 1);

//
