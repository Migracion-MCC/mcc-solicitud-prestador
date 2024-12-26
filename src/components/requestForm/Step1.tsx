import "../../App.css";
import PageTitle from "../pagetitle/PageTitle";
import Loader from "../loader/Loader";
import { fileToBase64, generateSecureuUUID } from "../../utils";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../store/store";
import { setLoading } from "../../store/reducers/generalDataReducer";
import {
  addFile,
  removeFile,
} from "../../store/reducers/applicantFilesReducer";
import { useEffect, useState } from "react";
import { getListApplicationRequirements } from ".";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { FaEye } from "react-icons/fa";

const Step1 = () => {
  const dispatch: AppDispatch = useDispatch();
  const { applicantFiles, generalData } = useSelector((state: RootState) => ({
    applicantFiles: state.applicantFiles,
    generalData: state.generalData,
  }));

  interface FormFile {
    base64: string;
    fileName: string;
    uuid: string;
  }

  interface Requirement {
    idRequisitos?: number;
    nombre?: string;
    tipo?: string;
    adjunto?: null;
    obligarorio?: number;
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setLoading({ loading: true }));
    const newFiles = event.target.files;
    if (newFiles) {
      Array.from(newFiles).forEach(async (file: File) => {
        dispatch(
          addFile({
            fileName: file.name,
            base64: await fileToBase64(file),
            uuid: generateSecureuUUID(),
          })
        );
      });
    }
    setTimeout(() => {
      dispatch(setLoading({ loading: false }));
    }, 1000);
  };

  const handleRemoveFile = (file: FormFile) => {
    dispatch(removeFile({ uuid: file.uuid }));
  };

  const [requirements, setRequirements] = useState([]);

  useEffect(() => {
    const getRequirementsList = async () => {
      dispatch(setLoading({ loading: true }));
      setRequirements(await getListApplicationRequirements());
      dispatch(setLoading({ loading: false }));
    };
    getRequirementsList();
  }, [dispatch]);

  return (
    <div>
      <PageTitle
        title={"Requisitos o Información Adicional"}
        body={
          "Por favor complete los requisitos o información adicional a la solicitud"
        }
      />
      <Loader show={generalData.loading} />

      <div className="grid lg:grid-cols-6 sm:grid-cols-1 p-7 border border-slate-400 rounded ">
        <div className="mt-3 col-span-1">
          <p className="text-left font-bold">
            Archivos obligatorios<span className="text-red-600">*</span>
          </p>
        </div>

        <div className="col-span-5">
          <Table className="table-fixed">
            <TableHeader>
              <TableRow className="bg-slate-200	border border-slate-400 rounded">
                <TableHead>Nombre</TableHead>
                <TableHead className="text-center">Acción</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {requirements
                .filter((item: Requirement) => {
                  return item.obligarorio == 1;
                })
                .map((item: Requirement, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium text-left text-base">
                      {item.nombre}
                      {item.obligarorio == 1 && (
                        <span className="font-bold text-red-500"> *</span>
                      )}
                    </TableCell>
                    <TableCell>
                      <div>
                        <input type="file" name="" id="" />
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </div>

        <div className="mt-3 relative">
          <div className="text-left font-bold">
            <span>Otros archivos </span>
            <AlertDialog>
              <AlertDialogTrigger className="absolute mt-1 ml-2">
                <FaEye className="size-5 " />
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Documentos opcionales</AlertDialogTitle>
                  <AlertDialogDescription>
                    <ul>
                      {requirements
                        .filter((item: Requirement) => item.obligarorio == 0)
                        .map((item: Requirement, index) => {
                          return (
                            <li key={index} className="text-xl mb-3">
                              {item.nombre}
                            </li>
                          );
                        })}
                    </ul>
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogAction>Aceptar</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>

        <div className="col-span-5 py-1 px-2">
          <div className="py-2 px-2 mt-3 border border-slate-400 rounded">
            <div className="">
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
          </div>

          {applicantFiles.length > 0 && (
            <Table className="table-auto w-full mt-5">
              <TableHeader>
                <TableRow className="bg-slate-200	border border-slate-400 rounded">
                  <TableHead>Nombre</TableHead>
                  <TableHead className="text-center">Acción</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {applicantFiles.map((file, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium text-left text-blue-600/75">
                      {file.fileName}
                    </TableCell>
                    <TableCell className="text-center">
                      <p
                        className=" text-red-600 text-xl"
                        onClick={() => {
                          handleRemoveFile(file);
                        }}
                      >
                        Eliminar
                      </p>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}

          <p className="text-left mt-5">
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
      </div>

      <div className="text-left  mx-auto m-5">
        <h1 className="font-bold text-red-500">* Datos obligatorios</h1>
      </div>
    </div>
  );
};

export default Step1;
