import Web3 from "web3";
async function sendEthToContract(
  contractAddress: string,
  accountId: string,
  valueStr: string
) {
  console.log(contractAddress, accountId, valueStr);
  const web3 = new Web3(window.ethereum);

  var decimals = 18;
  var value = (Number(valueStr) * 10 ** decimals).toString();
  var amount = web3.utils.toBN(value);
  console.log(amount);
  await web3.eth.sendTransaction({
    to: contractAddress,
    from: accountId,
    value: amount,
  });
}

export default sendEthToContract;
