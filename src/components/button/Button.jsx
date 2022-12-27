import "./button.scss";

export const Button = ({ handleClick, text, type }) => {
  return (
    <button className="btn" onClick={handleClick} type={type}>
      {text}
    </button>
  );
};


