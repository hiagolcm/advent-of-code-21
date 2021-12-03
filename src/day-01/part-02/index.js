const { lineToArray } = require("../../utils");

async function calculateNumberOfIncreases(inputPath) {
  const input = (await lineToArray(inputPath)).map((x) => parseInt(x));

  let numberOfIncreases = 0;
  let previous;

  for (let i = 0; i < input.length - 2; i++) {
    const current = input[i] + input[i + 1] + input[i + 2];

    if (previous < current && i > 0) {
      numberOfIncreases++;
    }

    previous = current;
  }

  return numberOfIncreases;
}

(async () => {
  console.log(await calculateNumberOfIncreases(`${__dirname}/../input.txt`));
})();
