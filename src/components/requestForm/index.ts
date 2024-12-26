// import { RS_ListarTipoUsuario } from '../../constants/ExternalServices';
const apiKey = "SL2oAzoElXZqTcXJTazgxYu2Phe2F0ek"

export const getIdentificationTypes = async () => {
  try {
    const response = await fetch(
      "https://api.cloud-qa.fonasa.cl/SolicitudesCiudadanas/ListarTipoIdentificacion",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "ApiKey": apiKey,
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
      "https://api.cloud-qa.fonasa.cl/SolicitudesCiudadanas/ListarTipoUsuario",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "ApiKey": apiKey,
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

export const getGenres = async () => {
  try {
    const response = await fetch(
      "https://api.cloud-qa.fonasa.cl/SolicitudesCiudadanas/ListarTipoUsuario",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "ApiKey": apiKey,
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

export const getCommunes = async () => {
  try {
    const response = await fetch(
      "https://api.cloud-qa.fonasa.cl/SolicitudesCiudadanas/ListarTipoUsuario",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "ApiKey": apiKey,
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

export const getRegions = async () => {
  try {
    const response = await fetch(
      "https://api.cloud-qa.fonasa.cl/SolicitudesCiudadanas/ListarTipoUsuario",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "ApiKey": apiKey,
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

export const getListApplicationRequirements = async () => {
  try {
    const response = await fetch(
      "https://api.cloud-qa.fonasa.cl/SolicitudesCiudadanas/ListarRequisitosSolicitud",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "ApiKey": apiKey,
        },
        body: JSON.stringify({idDetalleSolicitud: 1496})
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
      "https://api.cloud-qa.fonasa.cl/SolicitudesCiudadanas/CrearSolicitudCiudadana",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "ApiKey": apiKey,
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

