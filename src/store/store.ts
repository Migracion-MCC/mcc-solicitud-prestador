import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import providerFieldsReducer from './reducers/providerFieldsReducer'; // Reducer de ejemplo
import applicantFieldsReducer from './reducers/applicantFieldsReducer'; // Reducer de ejemplo
import applicantFilesReducer from './reducers/applicantFilesReducer';
import generalDataReducer from './reducers/generalDataReducer';

const rootReducer = combineReducers({
  applicantFields: applicantFieldsReducer,
  providerFields: providerFieldsReducer,
  applicantFiles: applicantFilesReducer,
  generalData: generalDataReducer,

});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export default store;

