import { Button, Alert } from "@mui/material";
import React, { useState } from "react";
import { setAccount } from "./accountSlice";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { getContractAddress } from "../contractInfo/contractSlice";
//TODO move it to interface page
declare global {
  interface Window {
    ethereum?: any; //TODO change it to MetaMaskInpageProvider
  }
}

function LoginByMetamask(props: any) {
  const [metaMaskError, setMetaMaskError] = useState("");
  const dispatch = useAppDispatch();
  const contractAddress = useAppSelector(getContractAddress);

  const onClickMetaMaskLogin = () => {
    if (window.ethereum) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((connectInfos: any) => {
          console.log(connectInfos);
          dispatch(setAccount(connectInfos[0]));
        })
        .catch(console.error);
    } else {
      setMetaMaskError("Please install Metamask extension in chrome!");
    }
  };

  return (
    <React.Fragment>
      <Button
        variant="contained"
        disabled={metaMaskError.length > 0 || contractAddress.length === 0}
        className={`${props.className ? props.className : ""}`}
        onClick={onClickMetaMaskLogin}
      >
        MetaMask
      </Button>
      {metaMaskError.length > 0 ? (
        <Alert severity="error">{metaMaskError}</Alert>
      ) : (
        <div></div>
      )}
    </React.Fragment>
  );
}
export default LoginByMetamask;
