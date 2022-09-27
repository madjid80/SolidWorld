import kingOfFolls from "../contract/kingsOfFool.json";
import { AbiItem } from "web3-utils";
import Web3 from "web3";
async function callLastDepositOnContract(
  contractAddress: string,
  accountId: string
) {
  const web3 = new Web3(window.ethereum);
  const contract = new web3.eth.Contract(
    kingOfFolls.abi as AbiItem[],
    contractAddress
  );

  return contract.methods.getLastDeposit().call({ from: accountId });
}

export default callLastDepositOnContract;
