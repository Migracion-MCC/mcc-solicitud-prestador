const FormSelectInput = ({ field }) => {
  return (
    <select className={"border-2 p-1.5 rounded"}>
      <option value="">Seleccione una opcion</option>
      {field.list.map(() => {
        return <option value="">1</option>;
      })}
    </select>
  );
};

export default FormSelectInput;
