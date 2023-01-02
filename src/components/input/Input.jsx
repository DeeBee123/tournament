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
  pattern,
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
        onBlur={(key, e) => handleBlur(key, e)}
        data-testid={testId}
        autoComplete="off"
        aria-label="input"
        pattern={pattern}
      ></input>
    </>
  );
};
