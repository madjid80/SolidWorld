import { Button, Alert } from "@mui/material";
import React from "react";
import { TextField } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { getContractAddress, setContractAddress } from "./contractSlice";

function ContractInfo(props: any) {
  const dispatch = useAppDispatch();
  const contractAddress = useAppSelector(getContractAddress);

  const onMessageHandleChange = (event: any) => {
    dispatch(setContractAddress(event.target.value.toString().toLowerCase()));
  };

  return (
    <React.Fragment>
      <div className="row contract-info">
        <p className="col-12">
          Please Enter KingOfFools Contract address on ropsten network:
        </p>
        <TextField
          id="standard-basic"
          label="Contract Address"
          variant="standard"
          onChange={onMessageHandleChange}
        />
      </div>
      {contractAddress.length == 0 ? (
        <Alert severity="error">
          Please enter valid contract address to continue
        </Alert>
      ) : (
        <div></div>
      )}
    </React.Fragment>
  );
}

export default ContractInfo;
