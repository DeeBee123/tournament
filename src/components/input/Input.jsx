import "./input.scss";

export const Input = ({ type, title, name, handleChange, id, value }) => {
  return (
    <>
      <label htmlFor={id}></label>
      <input
        id={id}
        name={name}
        type={type}
        title={title}
        onChange={handleChange}
        value={value}
      ></input>
    </>
  );
};


