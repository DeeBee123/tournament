import "./warning.scss";

const Warning = ({ errorMsg, className }) => {
  return <small className={"error " + className}> {errorMsg}</small>;
};

export default Warning;
