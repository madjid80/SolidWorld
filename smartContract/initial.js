const compileContract = require("./compile/compileContract");
const { InfuraProvider } = require("@ethersproject/providers");
const { Wallet } = require("@ethersproject/wallet");
const { ContractFactory } = require("@ethersproject/contracts");
async function getSigner(key, privateKey) {
  const provider = new InfuraProvider("ropsten", key);
  return new Wallet(privateKey, provider);
}
async function main() {
  console.log("...::: King of fool contract deployment started :::... ");
  try {
    const contractInterface = await compileContract();
    const infuraKey = process.env.INFURA_KEY;
    if (!infuraKey || infuraKey.length == 0) {
      throw new Error(
        "Please set your infura key via INFURA_KEY env variable."
      );
    }
    const privateKey =
      process.env.PRIVATE_KEY ??
      "e061f0fb5630d193a2350157485bbcb8c059d3ff5b471249b40a13cba8ac11b0";
    if (privateKey.length == 0) {
      throw new Error(
        "Please set your private key via PRIVATE_KEY env variable."
      );
    }
    const signer = await getSigner(infuraKey, privateKey);
    const contractFactory = new ContractFactory(
      contractInterface.abi,
      contractInterface.bytecode,
      signer
    );
    const contract = await contractFactory.deploy();
    console.log(`Contract address: ${contract.address}`);
    console.log(`Hash: ${contract.deployTransaction.hash}`);
    console.log(`Waiting for ETH nodes for deployment...`);
    await contract.deployTransaction.wait();
    console.log(
      `Contract deployed on https://ropsten.etherscan.io/address/${contract.address.toLowerCase()}`
    );
  } catch (error) {
    console.error(error.message);
  }
}

main();
