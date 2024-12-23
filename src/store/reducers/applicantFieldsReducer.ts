import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Field {
  name: string;
  hasErrors: boolean;
  inputType: string;
  required: boolean;
  list?: [];
  type: string;
  value: string;
  maxLength?: number;
}

interface UpdateFieldPayload {
  name: string;
  value: string;
}

interface setDropdownListPayload {
  name: string;
  value: [];
}

interface setErrorsPayload {
  name: string;
  value: boolean;
}

const initialState: Field[] = [
  {
    name: "Tipo identificacion",
    hasErrors: false,
    inputType: "Dropdown",
    required: true,
    list: [],
    value: "",
    type: "string",
  },
  {
    name: "Comuna",
    hasErrors: false,
    inputType: "Dropdown",
    required: true,
    list: [],
    value: "",
    type: "string",
  },
  {
    name: "RUN",
    hasErrors: false,
    inputType: "Input",
    required: true,
    value: "",
    type: "string",
    maxLength: 10
  },
  {
    name: "Dirección",
    hasErrors: false,
    inputType: "Input",
    required: true,
    value: "",
    type: "string",
    maxLength: 60
  },
  {
    name: "Nacionalidad",
    hasErrors: false,
    inputType: "Dropdown",
    required: true,
    list: [],
    value: "",
    type: "string",
  },
  {
    name: "Teléfono 1",
    hasErrors: false,
    inputType: "Input",
    required: true,
    value: "",
    type: "tel",
    maxLength: 9
  },
  {
    name: "Nombres",
    hasErrors: false,
    inputType: "Input",
    required: true,
    value: "",
    type: "string",
    maxLength: 40
  },
  {
    name: "Teléfono 2",
    hasErrors: false,
    inputType: "Input",
    required: false,
    value: "",
    type: "tel",
    maxLength: 9
  },
  {
    name: "Apellidos",
    hasErrors: false,
    inputType: "Input",
    required: true,
    value: "",
    type: "string",
    maxLength: 40
  },
  {
    name: "Teléfono Fijo",
    hasErrors: false,
    inputType: "Input",
    required: false,
    value: "",
    type: "tel",
    maxLength: 9
  },
  {
    name: "Genero",
    hasErrors: false,
    inputType: "Dropdown",
    required: true,
    list: [],
    value: "",
    type: "string",
  },
  {
    name: "Email",
    hasErrors: false,
    inputType: "Input",
    required: true,
    value: "",
    type: "string",
    maxLength: 70
  },
  {
    name: "Región",
    hasErrors: false,
    inputType: "Dropdown",
    required: true,
    list: [],
    value: "",
    type: "string",
  },
  {
    name: "Fecha Nacimiento",
    hasErrors: false,
    inputType: "Input",
    required: true,
    value: "",
    type: "date",
  },
];

const applicantFieldsSlice = createSlice({
  name: 'applicantFields',
  initialState,
  reducers: {
    changeInputValue: (state, action: PayloadAction<UpdateFieldPayload>) => {
      const { value, name } = action.payload;
      const field = state.find((field) => field.name === name);
      if (field) {
        field.value = value;
      }
    },
    setDropdownList: (state, action: PayloadAction<setDropdownListPayload>) => {
      const { name, value } = action.payload;
      const field = state.find((field) => field.name === name);
      if (field) {
        field.list = value;
      }
    },
    setErrors: (state, action: PayloadAction<setErrorsPayload>) => {
      const { name, value } = action.payload;
      const field = state.find((field) => field.name === name);
      if (field) {
        field.hasErrors = value;
      }
    }
  },

});

export const { changeInputValue, setDropdownList, setErrors } = applicantFieldsSlice.actions;
export default applicantFieldsSlice.reducer;
