interface field {
  index: number;
  name: string;
}

interface props {
  fields: Array<field>;
}

const FormSelectInput = (props: props) => {
  const fields = props.fields;
  return (
    <select className={"border-2 p-1.5 rounded"}>
      <option value="">Seleccione una opcion</option>
      {fields.map(() => {
        return <option value="">1</option>;
      })}
    </select>
  );
};

export default FormSelectInput;
