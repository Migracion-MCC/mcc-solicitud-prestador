export const config = {
    api: {
        BASE_URL: import.meta.env.VITE_APP_BASE_URL,
        API_KEY: import.meta.env.VITE_API_KEY,
        services: {
            GET_NAMES_BY_RUT: "SolicitudesCiudadanas/ConsultaNombres",
            GET_IDENTIFICATION_TYPES: "SolicitudesCiudadanas/ListarTipoIdentificacion",
            GET_COUNTRIES: "SolicitudesCiudadanas/Colecciones",
            GET_GENRES: "SolicitudesCiudadanas/Colecciones",
            GET_COMMUNES: "SolicitudesCiudadanas/Colecciones",
            GET_REGIONS: "SolicitudesCiudadanas/Colecciones",
            GET_APPLICATION_REQUIREMENTS: "SolicitudesCiudadanas/ListarRequisitosSolicitud",
            POST_SEND_FORM: "SolicitudesCiudadanas/CrearSolicitudCiudadana"
        }
    },

}