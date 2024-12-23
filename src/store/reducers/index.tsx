import { combineReducers } from "redux";
import applicantFieldsReducer from "./providerFieldsReducer";
import providerFieldsReducer from "./providerFieldsReducer";
import applicantFilesReducer from "./applicantFilesReducer";

const rootReducer = combineReducers({
  applicantFields: applicantFieldsReducer,
  providerFields: providerFieldsReducer,
  applicantFiles: applicantFilesReducer,
});

export default rootReducer;
