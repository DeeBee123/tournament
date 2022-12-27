import "./button.scss";

export const Button = ({ handleClick, text, type }) => {
  return (
    <button onClick={handleClick} type={type}>
      {text}
    </button>
  );
};


