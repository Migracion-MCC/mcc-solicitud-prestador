import PageTitle from "../PageTitle";
import "../../App.css";
import { useState } from "react";

const Step1 = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [fileName, setFileName] = useState("Sin archivos seleccionados");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newFiles = event.target.files;

    if (newFiles) {
      setFiles(Array.from(newFiles));
      setFileName(`${newFiles.length} Archivos seleccionados`)
    }
  };

  const handleRemoveFile = (file: File) => {
    setFiles(files.filter((item) => item !== file));
    const newLength = files.length;
    setFileName(`${newLength-1} Archivos seleccionados`)
  };

  return (
    <div className="mx-36">
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
        <div className="col-span-2 py-2 px-2 mt-3 border border-slate-400 rounded">
          <label htmlFor="file-upload" className="custom-file-upload">
            {fileName}
          </label>
          <input
            type="file"
            name=""
            id="file-upload"
            className="w-full"
            multiple
            onChange={handleChange}
          />
        </div>

        <div className="mt-3 "></div>
        <div className="col-span-2 py-1 px-2 mt-3">
          <div className="text-left">
            {files.map((file, index) => {
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
