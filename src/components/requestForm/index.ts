import { RequirementFile } from "@/store/reducers/applicantFilesReducer";
import { config } from "@/config";
import { Field } from "@/store/reducers/applicantFieldsReducer";

export const getNamesByRut = async (rut: string) => {
  try {
    const response = await fetch(
      `${config.api.BASE_URL}/${config.api.services.GET_NAMES_BY_RUT}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "ApiKey": config.api.API_KEY,
        },
        body: JSON.stringify({
          "run": rut
        })
      }
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (err) {
    console.log(err);
  }
};

export const getIdentificationTypes = async () => {
  try {
    const response = await fetch(
      `${config.api.BASE_URL}/${config.api.services.GET_IDENTIFICATION_TYPES}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "ApiKey": config.api.API_KEY,
        },
        body: JSON.stringify({})
      }
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const result = await response.json();
    return result.listado ? result.listado : []
  } catch (err) {
    console.log(err);
  }
};

export const getCountries = async () => {
  try {
    const response = await fetch(
      `${config.api.BASE_URL}/${config.api.services.GET_COUNTRIES}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "ApiKey": config.api.API_KEY,
        },
        body: JSON.stringify({
          "headerRequest": {
            "userID": "",
            "rolID": "",
            "SucursalID": "",
            "fechaHora": ""
          },
          "bodyRequest": {
            "codigoTipoColeccion": 7,
            "codigoItemPadre": ""
          }
        })
      }
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const result = await response.json();
    return result.bodyResponse.coleccion.item ? result.bodyResponse.coleccion.item : []
  } catch (err) {
    console.log(err);
  }
};

export const getGenres = async () => {
  try {
    const response = await fetch(
      `${config.api.BASE_URL}/${config.api.services.GET_GENRES}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "ApiKey": config.api.API_KEY,
        },
        body: JSON.stringify({
          "headerRequest": {
            "userID": "",
            "rolID": "",
            "SucursalID": "",
            "fechaHora": ""
          },
          "bodyRequest": {
            "codigoTipoColeccion": 4,
            "codigoItemPadre": ""
          }
        })
      }
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const result = await response.json();
    console.log(result)
    return result.bodyResponse.coleccion.item ? result.bodyResponse.coleccion.item : []
  } catch (err) {
    console.log(err);
  }
};

export const getCommunes = async (regionId: string) => {
  try {
    const response = await fetch(
      `${config.api.BASE_URL}/${config.api.services.GET_COMMUNES}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "ApiKey": config.api.API_KEY,
        },
        body: JSON.stringify({

          "headerRequest": {
            "userID": "",
            "rolID": "",
            "SucursalID": "",
            "fechaHora": ""
          },
          "bodyRequest": {
            "codigoTipoColeccion": 103,
            "codigoItemPadre": regionId

          }
        })
      }
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const result = await response.json();
    return result.bodyResponse.coleccion.item ? result.bodyResponse.coleccion.item : []
  } catch (err) {
    console.log(err);
  }
};

export const getRegions = async () => {
  try {
    const response = await fetch(
      `${config.api.BASE_URL}/${config.api.services.GET_REGIONS}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "ApiKey": config.api.API_KEY,
        },
        body: JSON.stringify({
          "headerRequest": {
            "userID": "",
            "rolID": "",
            "SucursalID": "",
            "fechaHora": ""
          },
          "bodyRequest": {
            "codigoTipoColeccion": 101,
            "codigoItemPadre": ""
          }
        })
      }
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const result = await response.json();
    return result.bodyResponse.coleccion.item ? result.bodyResponse.coleccion.item : []
  } catch (err) {
    console.log(err);
  }
};

export const getListApplicationRequirements = async () => {
  try {
    const response = await fetch(
      `${config.api.BASE_URL}/${config.api.services.GET_APPLICATION_REQUIREMENTS}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "ApiKey": config.api.API_KEY,
        },
        body: JSON.stringify({ idDetalleSolicitud: 1496 })
      }
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const result = await response.json();
    return result.listado ? result.listado : []
  } catch (err) {
    console.log(err);
  }

};


export const postSendForm = async () => {
  try {
    const body = {

    }
    const response = await fetch(
      `${config.api.BASE_URL}/${config.api.services.POST_SEND_FORM}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "ApiKey": config.api.API_KEY,
        },
        body: JSON.stringify(body)
      }
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const result = await response.json();
    return result.listado ? result.listado : []
  } catch (err) {
    console.log(err);
  }

};

export const validateFormData = (applicantFields: Field[], providerFields: Field[]) => {
  let hasErrors = false;

  applicantFields.forEach((field: Field) => {
    if (field.required === true && field.value === "") {
      hasErrors = true;
    }
  });

  providerFields.forEach((field: Field) => {
    if (field.required === true && field.value === "") {
      hasErrors = true;
    }
  });

  return !hasErrors;
}


export const validateFormFiles = (applicantRequiredFiles: RequirementFile[]) => {
  return true;
  const expectedFiles = applicantRequiredFiles.filter(
    (file: RequirementFile) => file.obligarorio === 1
  );
  const currentFiles = applicantRequiredFiles.filter(
    (file: RequirementFile) => file.base64 != null
  );
  return expectedFiles.length === currentFiles.length;
};