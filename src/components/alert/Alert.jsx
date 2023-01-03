import "./alert.scss";

const Alert = ({ msg, className }) => {
  return <small className={"alert " + className}> {msg}</small>;
};

export default Alert;
