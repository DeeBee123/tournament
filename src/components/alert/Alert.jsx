import "./alert.scss";

const Alert = ({ msg, className, handleAlert }) => {
  return (
    <small className={"alert " + className} onClick={handleAlert}>
      {msg}
    </small>
  );
};

export default Alert;
