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
    name: "RUT",
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
    maxLength: 120
  },
  {
    name: "Nombre Razón Social",
    hasErrors: false,
    inputType: "Input",
    required: true,
    value: "",
    type: "string",
    maxLength: 120
  },
  {
    name: "Teléfono 1",
    hasErrors: false,
    inputType: "Input",
    required: true,
    value: "",
    type: "tel",
  },
  {
    name: "Nombre Fantasía",
    hasErrors: false,
    inputType: "Input",
    required: true,
    value: "",
    type: "string",
    maxLength: 120
  },
  {
    name: "Teléfono 2",
    hasErrors: false,
    inputType: "Input",
    required: false,
    value: "",
    type: "tel",
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
    name: "Teléfono fijo",
    hasErrors: false,
    inputType: "Input",
    required: false,
    value: "",
    type: "tel",
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
    name: "Email",
    hasErrors: false,
    inputType: "Input",
    required: true,
    value: "",
    type: "mail",
    maxLength: 70
  },
];

const providerFieldsSlice = createSlice({
  name: 'providerFields',
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

export const { changeInputValue, setDropdownList, setErrors } = providerFieldsSlice.actions;
export default providerFieldsSlice.reducer;
