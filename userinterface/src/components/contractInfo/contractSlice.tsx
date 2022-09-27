import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../redux/store";

export interface Contract {
  address: string;
  lastDeposit: string;
  sentMoney: boolean;
}
const initialState: Contract = {
  address: "",
  lastDeposit: "0",
  sentMoney: false,
};
const ContractSlice = createSlice({
  name: "ContractSlice",
  initialState,
  reducers: {
    setContractAddress: (state: any, action: PayloadAction<string>) => {
      state.address = action.payload;
    },
    setLastDeposit: (state: any, action: PayloadAction<string>) => {
      state.lastDeposit = action.payload;
    },
    setSentMoney: (state: any, action: PayloadAction<boolean>) => {
      state.setSentMoney = action.payload;
    },
  },
});

export const { setContractAddress, setLastDeposit, setSentMoney } =
  ContractSlice.actions;
export const getContractAddress = (state: RootState) => state.contract.address;
export const getLastDeposit = (state: RootState) => state.contract.lastDeposit;
export const getSentMoney = (state: RootState) => state.contract.sentMoney;
export default ContractSlice;
