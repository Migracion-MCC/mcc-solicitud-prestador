interface props {
  title: string;
  body: string;
}

const PageTitle = (props: props) => {
  const { title, body } = props;
  return (
    <>
      <div className="text-left  mx-auto m-5">
        <h1 className="text-3xl">{title}</h1>
        <p>{body}</p>
      </div>
    </>
  );
};

export default PageTitle;
