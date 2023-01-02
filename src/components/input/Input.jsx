import "./input.scss";

export const Input = ({
  type,
  title,
  name,
  handleChange,
  id,
  value,
  placeholder,
  className,
  handleKey,
  handleBlur,
  testId,
}) => {
  return (
    <>
      <label htmlFor={id}></label>
      <input
        id={id}
        className={className}
        name={name}
        type={type}
        title={title}
        onChange={handleChange}
        value={value}
        placeholder={placeholder}
        onKeyDown={handleKey}
        onBlur={handleBlur}
        data-testid={testId}
        autoComplete="off"
        aria-label="input"
      ></input>
    </>
  );
};
