import React from "react";

const Banner = () => {
  return (
    <>
    <div className="container-fluid titulo-banner">

      <div className="container">
      <h3 className="  text-center mb-4">Ahórrate la Fila</h3>
            <p className="text-center fs-6">
              ¿No quieres esperar?, ¿Prefieres NO ir a una sucursal en forma
              presencial? <br /> Déjanos tus datos y nosotros te contactamos de vuelta,
              dentro del horario y día hábil de atención.
            </p>
      </div>
    </div>
      <div className="container my-4">
        {/* <div className="row">
          <div className="col ">
            <p className="m-0 p-3 text-center border">
              <span className="text-primary fw-bold">Recomendación:</span> Si
              tienes dudas sobre cómo realizar este servicio, consulta la
              pestaña{" "}
              <span className="text-primary fw-bold">"Instrucciones"</span>{" "}
              justo a la derecha.
            </p>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Banner;
