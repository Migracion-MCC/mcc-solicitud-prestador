const FormInput = ({ fieldName }) => {
  return (
    <input
      type="text"
      className={"border-2 p-1.5 rounded"}
      placeholder={fieldName}
    />
  );
};

export default FormInput;
