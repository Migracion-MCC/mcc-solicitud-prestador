import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FilePayload {
  file: File;
}
const initialState: File[] = [];

const applicantFilesSlice = createSlice({
  name: 'applicantFiles',
  initialState,
  reducers: {
    addFile: (state, action: PayloadAction<FilePayload>) => {
      console.log("llegas")
      const { file } = action.payload;
      state.push(file)
    },
  },

});

export const { addFile } = applicantFilesSlice.actions;
export default applicantFilesSlice.reducer;
