import "./warning.scss";

const Warning = ({ errorMsg }) => {
  return <small className="error"> {errorMsg}</small>;
};

export default Warning;
