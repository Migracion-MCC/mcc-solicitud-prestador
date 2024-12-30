import { combineReducers } from "redux";
import applicantFieldsReducer from "./providerFieldsReducer";
import providerFieldsReducer from "./providerFieldsReducer";
import applicantFilesReducer from "./applicantFilesReducer";
import generalDataReducer from "./generalDataReducer";

const rootReducer = combineReducers({
  applicantFields: applicantFieldsReducer,
  providerFields: providerFieldsReducer,
  applicantFiles: applicantFilesReducer,
  generalData: generalDataReducer,
});

export default rootReducer;
