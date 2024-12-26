import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FormFile {
  base64: string;
  fileName: string;
  uuid: string;
}

interface RemoveFilePayload {
  uuid: string
}

const initialState: FormFile[] = [];

const applicantFilesSlice = createSlice({
  name: 'applicantFiles',
  initialState,
  reducers: {
    addFile: (state, action: PayloadAction<FormFile>) => {
      const { base64, fileName, uuid } = action.payload;
      const newFile: FormFile = {
        base64: base64, fileName: fileName, uuid: uuid
      }
      state.push(newFile)
    },
    removeFile: (state, action: PayloadAction<RemoveFilePayload>) => {
      const { uuid } = action.payload;
      return state.filter((item: FormFile) => item.uuid !== uuid);
    },
  },
}); 

export const { addFile, removeFile } = applicantFilesSlice.actions;
export default applicantFilesSlice.reducer;
