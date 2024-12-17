import { useState } from "react";

const TramiteFinalizado = () => {
  const [correo] = useState("osvaldo143143@gmail.com");
  const [folio] = useState("876782867");

  return (
    <div>
      {/* Mensaje proceso completado */}
      <div className="mt-10">
        <div className="">
          <div className="alert-success py-5 border rounded shadow-xl">
            <h5 className="text-center mb-3">
              Su <span className="font-bold">solicitud</span> ha sido procesada
              con éxito
            </h5>
            <h5 className="text-center m-0">
              Bajo el folio <span className="font-bold">N° {folio}</span>
            </h5>
          </div>
          <p className="text-center py-5">
            Se le notificará a <span className="font-bold">{correo}</span>{" "}
            cuando se de respuesta a su solicitud, se sugiere revisar bandeja de
            spam o correos no deseado.
          </p>
        </div>
      </div>

      <div className="row justify-content-center mt-5">
        <div className="col text-center mb-4"></div>
      </div>
    </div>
  );
};

export default TramiteFinalizado;
