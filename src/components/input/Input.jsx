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
  info,
  handleBlur
}) => {


  return (
    <>
      <label htmlFor={id}></label>
      {info && <small>{info}</small>}
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
        onBlur={(key, e)=> handleBlur(key, e)}
      ></input>
    </>
  );
};
