const readline = require("readline");
const fs = require("fs");

function lineToArray(filepath) {
  return new Promise((resolve) => {
    const readInterface = readline.createInterface({
      input: fs.createReadStream(filepath),
    });

    const result = [];

    readInterface.on("line", function (line) {
      result.push(line);
    });

    readInterface.on("close", () => {
        resolve(result)
    })
  });
}

module.exports = {
  lineToArray,
};
