const { lineToArray } = require("../../utils");

async function calculateNumberOfIncreases(inputPath) {
  const input = (await lineToArray(inputPath)).map((x) => parseInt(x));

  return input.reduce(
    (numberOfIncreases, measure, idx) =>
      idx > 0 && measure > input[idx - 1]
        ? numberOfIncreases + 1
        : numberOfIncreases,
    0
  );
}

(async () => {
  console.log(await calculateNumberOfIncreases(`${__dirname}/../input.txt`));
})();
