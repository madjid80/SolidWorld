import { Divider } from "@mui/material";
import { getAccountId } from "../../components/loginByMetaMask/accountSlice";
import { useAppSelector } from "../../hooks";
import { Navigate } from "react-router-dom";
import LoginByMetamask from "../../components/loginByMetaMask/loginByMetamask";
import ContractInfo from "../../components/contractInfo/contractInfo";

function LoginPage(props: any) {
  const account = useAppSelector(getAccountId);

  if (account) {
    return <Navigate to="/home" />;
  }
  return (
    <div className="login-page container">
      <div className="login-page__title row justify-content-center">
        <p className="col-6">Welcome to the App!</p>
      </div>
      <ContractInfo />
      <div className="login-page__login-by-key row justify-content-center"></div>
      <Divider />
      <div className="login-page__login-choice-separator row justify-content-center">
        <p className="col-3">Or connect to your wallet by: </p>
      </div>
      <div className="login-page__login-by-metamask row justify-content-center">
        <LoginByMetamask> </LoginByMetamask>
      </div>
    </div>
  );
}
export default LoginPage;
