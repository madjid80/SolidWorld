import { getAccountId } from "../../components/loginByMetaMask/accountSlice";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { Navigate } from "react-router-dom";
import SendMoneyBtn from "../../components/sendMoney/sendMoney";
import callLastDepositOnContract from "../../services/getLastDeposit";
import {
  getContractAddress,
  getLastDeposit,
  setLastDeposit,
} from "../../components/contractInfo/contractSlice";
import Web3 from "web3";

function HomePage(props: any) {
  const account = useAppSelector(getAccountId);
  const dispatch = useAppDispatch();
  const contractAddress = useAppSelector(getContractAddress);
  const lastDeposit = useAppSelector(getLastDeposit);
  callLastDepositOnContract(contractAddress, account).then((value) =>
    dispatch(setLastDeposit(Web3.utils.fromWei(value, "ether")))
  );

  if (!account) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="container homepage">
      <div className="row justify-content-center">
        <p className="col-6 homepage__account">Your account is {account}</p>
      </div>
      <div className="row justify-content-center">
        <p className="col-6 homepage__question">
          Do you want to send {1.5 * Number(lastDeposit) ?? 0} ETH to King of
          foolish contract?
        </p>
      </div>
      <div className="row justify-content-center">
        <SendMoneyBtn></SendMoneyBtn>
      </div>
    </div>
  );
}
export default HomePage;
