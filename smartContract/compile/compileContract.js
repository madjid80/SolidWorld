var solc = require("solc");
var fs = require("fs").promises;

async function readContractFromSource(path, contractName) {
  return fs.readFile(path + contractName, "utf8");
}
async function compileContract() {
  console.log("...::: Start to compile kings of fool contract :::...");
  try {
    const contractInSol = await readContractFromSource(
      "./contract/",
      "kingsOfFool.sol"
    );
    const input = {
      language: "Solidity",
      sources: {
        "kingsOfFool.sol": {
          content: contractInSol,
        },
      },
      settings: {
        outputSelection: {
          "*": {
            "*": ["*"],
          },
        },
      },
    };
    const compiledContract = JSON.parse(solc.compile(JSON.stringify(input)));

    if (compiledContract.errors) {
      throw new Error(JSON.stringify(compiledContract.errors));
    }

    const outputFile = {
      abi: compiledContract.contracts["kingsOfFool.sol"].kingsOfFool.abi,
      bytecode:
        compiledContract.contracts["kingsOfFool.sol"].kingsOfFool.evm.bytecode
          .object,
    };
    await fs.writeFile(
      "./contract/kingsOfFool.json",
      JSON.stringify(outputFile, null, 2)
    );
    console.log("Contract compiled successfully");
    return outputFile;
  } catch (error) {
    console.log("Compiler finished with an Error");
    console.error(error.message);
  }
}
module.exports = compileContract;
