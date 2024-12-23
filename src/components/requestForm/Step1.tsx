import { useState } from "react";
import PageTitle from "../PageTitle";
import "../../App.css";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../store/store";
import { addFile } from "../../store/reducers/applicantFilesReducer";

const Step1 = () => {
  const dispatch: AppDispatch = useDispatch();
  const applicantFiles = useSelector(
    (state: RootState) => state.applicantFiles
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newFiles = event.target.files;

    if (newFiles) {
      Array.from(newFiles).forEach((file: File) => {
        dispatch(addFile({ file: file }));
      });
    }
  };

  const handleRemoveFile = (file: File) => {
    setFiles(files.filter((item) => item !== file));
  };

  return (
    <div>
      <PageTitle
        title={"Requisitos o Información Adicional"}
        body={
          "Por favor complete los requisitos o información adicional a la solicitud"
        }
      />

      <div className="grid lg:grid-cols-3 sm:grid-cols-1 p-7 border border-slate-400 rounded ">
        <div className=""></div>
        <div className="col-span-2 py-2 px-2 border border-slate-400 rounded ">
          <p className="text-left font-bold">
            Por favor adjunte los siguientes archivos
            {applicantFiles.length}
          </p>
          <ul className="text-left">
            <li>Formulario N°1 "Solicitud De Inscripción" (Obligatorio)</li>
            <li>Formulario N°2 "Tarifas Días Camas - Pabellones"</li>
            <li>Formulario N° 1e: Anexo 7 Mle (Ley 20.818) (Obligatorio)</li>
            <li>Convenio Único De Inscripción (Obligatorio)</li>
            <li>Copia Patente Comercial Municipal (Obligatorio)</li>
            <li>Copia Cédulas De Identidad Planta Profesional (Obligatorio)</li>
            <li>Copia Resoluciones Sanitarias Vigentes</li>
            <li>Copia Legalizada Ante Notario De Contrato Con Tercero</li>
            <li>
              Copia De Convenio Con Plataforma Certificada Para Teleconsulta Y/O
              Telerehabilitación
            </li>
            <li>Copia Documentos Legales De Sociedad (Obligatorio)</li>
            <li>
              Copia Simple Cédula De Identidad De El O Los Representantes
              Legales De La Entidad (Obligatorio)
            </li>
            <li>Copia Simple Del Rut De La Sociedad (Sii) (Obligatorio)</li>
            <li>
              Copia Simple De Cédula De Identidad De Cada Socios (Obligatorio)
            </li>
          </ul>
        </div>

        <div className="mt-3 ">
          <p className="text-left font-bold">
            Subir archivos<span className="text-red-600">*</span>
          </p>
        </div>

        <div className="col-span-2">
          <div className="py-2 px-2 mt-3 border border-slate-400 rounded border-b-red-600 border-b-2">
            <input
              type="file"
              name=""
              id="file-upload"
              className="w-full"
              multiple
              value={""}
              onChange={handleChange}
            />
          </div>
          <p className="text-left">
            <p className="font-bold text-gray-500">
              Si el nombre del archivo cuenta con caracteres especiales no
              permitidos, los mismos serán reemplazados para evitar problemas en
              la carga de archivos.
            </p>
            <p className="font-bold text-gray-500">
              Formatos permitidos:{" "}
              <span className="font-normal">
                ..pdf,.doc,.docx,.jpg,.jpeg,.png
              </span>
            </p>
            <p className="font-bold text-gray-500">Peso máx. permitido 20MB</p>
          </p>
        </div>

        <div className="mt-3 "></div>
        <div className="col-span-2 py-1 px-2 mt-3">
          <div className="text-left">
            {applicantFiles.map((file: File, index: number) => {
              return (
                <div className="grid grid-cols-3 py-1" key={index}>
                  <p className="text-left col-span-2 text-blue-600/75">
                    {file.name}
                  </p>
                  <p
                    className="text-right text-red-600 text-2xl"
                    onClick={() => {
                      handleRemoveFile(file);
                    }}
                  >
                    x
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="text-left  mx-auto m-5">
        <h1 className="font-bold text-red-500">* Datos obligatorios</h1>
      </div>
    </div>
  );
};

export default Step1;
