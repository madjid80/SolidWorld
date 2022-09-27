import { Button, Alert } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../hooks";
import sendEthToContract from "../../services/sendMoney";
import {
  getContractAddress,
  getLastDeposit,
  getSentMoney,
  setSentMoney,
} from "../contractInfo/contractSlice";
import { getAccountId } from "../loginByMetaMask/accountSlice";

function SendMoneyBtn(props: any) {
  const lastDeposit = useAppSelector(getLastDeposit);
  console.log(lastDeposit);
  const account = useAppSelector(getAccountId);
  const contractAddress = useAppSelector(getContractAddress);
  const isMoneySent = useAppSelector(getSentMoney);
  const dispatch = useAppDispatch();

  const onClickSendMoney = () => {
    const moneyToSend = Number(lastDeposit) * 1.5;
    dispatch(setSentMoney(true));
    sendEthToContract(
      contractAddress,
      account,
      moneyToSend ? moneyToSend.toString() : "0.1"
    ).then(() => {
      dispatch(setSentMoney(false));
    });
  };
  return (
    <Button
      variant="contained"
      disabled={isMoneySent}
      className={`${props.className ? props.className : ""}`}
      onClick={onClickSendMoney}
    >
      Send Money
    </Button>
  );
}
export default SendMoneyBtn;
