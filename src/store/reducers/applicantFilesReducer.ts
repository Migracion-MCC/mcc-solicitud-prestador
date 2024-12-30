import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface OptionalFile {
  base64: string;
  fileName: string;
  uuid: string;
}

export interface RequirementFile {
  idRequisitos?: number;
  nombre: string;
  tipo?: string;
  adjunto?: null;
  obligarorio?: number;
  base64?: string;
}

interface InitialState {
  applicantOptionalFiles: OptionalFile[];
  applicantRequiredFiles: RequirementFile[];
}

interface SetRequiredFilesPayload {
  applicantRequiredFiles: RequirementFile[];
}

interface EditRequiredFilePayload {
  name: string;
  base64: string;
}

interface RemoveFilePayload {
  uuid: string;
}

const initialState: InitialState = {
  applicantOptionalFiles: [],
  applicantRequiredFiles: [],
};

const applicantFilesSlice = createSlice({
  name: 'applicantFiles',
  initialState,
  reducers: {
    addOptionalFile: (state, action: PayloadAction<OptionalFile>) => {
      state.applicantOptionalFiles.push(action.payload);
    },
    setRequiredFiles: (state, action: PayloadAction<SetRequiredFilesPayload>) => {
      state.applicantRequiredFiles = action.payload.applicantRequiredFiles;
    },
    addRequiredFile: (state, action: PayloadAction<RequirementFile>) => {
      state.applicantRequiredFiles.push(action.payload);
    },
    editRequiredFile: (state, action: PayloadAction<EditRequiredFilePayload>) => {
      state.applicantRequiredFiles = state.applicantRequiredFiles.map(
        (item: RequirementFile) =>
          item.nombre === action.payload.name
            ? { ...item, base64: action.payload.base64 }
            : item
      );
    },
    removeOptionalFile: (state, action: PayloadAction<RemoveFilePayload>) => {
      state.applicantOptionalFiles = state.applicantOptionalFiles.filter(
        (item: OptionalFile) => item.uuid !== action.payload.uuid
      );
    },
    removeRequiredFile: (state, action: PayloadAction<RemoveFilePayload>) => {
      state.applicantRequiredFiles = state.applicantRequiredFiles.filter(
        (item: RequirementFile) => item.nombre !== action.payload.uuid
      );
    },
  },
});

export const {
  addOptionalFile,
  addRequiredFile,
  removeOptionalFile,
  removeRequiredFile,
  setRequiredFiles,
  editRequiredFile
} = applicantFilesSlice.actions;

export default applicantFilesSlice.reducer;
