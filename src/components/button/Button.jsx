import "./button.scss";

export const Button = ({ handleClick, text, type, testId }) => {
  return (
    <button
      className="btn"
      onClick={handleClick}
      type={type}
      data-testid={testId}
    >
      {text}
    </button>
  );
};
