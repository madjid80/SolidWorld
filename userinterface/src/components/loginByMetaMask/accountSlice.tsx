import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../redux/store";

export interface Account {
  accountId: string;
}
const initialState: Account = {
  accountId: "",
};
const AccountSlice = createSlice({
  name: "AccountSlice",
  initialState,
  reducers: {
    setAccount: (state: any, action: PayloadAction<string>) => {
      state.accountId = action.payload;
    },
  },
});

export const { setAccount } = AccountSlice.actions;
export const getAccountId = (state: RootState) => state.account.accountId;
export default AccountSlice;
