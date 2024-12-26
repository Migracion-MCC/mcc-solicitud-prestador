import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface GeneralData {
  loading: boolean;
}

const initialState: GeneralData = {
  loading: false
};

interface loadingPayload {
  loading: boolean;
}

const generalDataSlice = createSlice({
  name: 'generalData',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<loadingPayload>) => {
      const { loading } = action.payload;
      state.loading = loading
    },
  },
});

export const { setLoading } = generalDataSlice.actions;
export default generalDataSlice.reducer;
