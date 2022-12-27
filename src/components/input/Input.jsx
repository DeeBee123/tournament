import "./input.scss";

export const Input = ({ type, title, name, handleChange, id, value, placeholder }) => {
  return (
    <>
      <label htmlFor={id}></label>
      <input
        id={id}
        className="input"
        name={name}
        type={type}
        title={title}
        onChange={handleChange}
        value={value}
        placeholder={placeholder}
      ></input>
    </>
  );
};


