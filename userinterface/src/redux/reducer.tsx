import { combineReducers } from "redux";
import ContractSlice from "../components/contractInfo/contractSlice";
import AccountSlice from "../components/loginByMetaMask/accountSlice";

const rootReducer = combineReducers({
  account: AccountSlice.reducer,
  contract: ContractSlice.reducer,
});

export default rootReducer;
