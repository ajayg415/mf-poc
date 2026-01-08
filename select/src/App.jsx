import React from "react";

const App = (props) => {
  const { value, onChange, label, className, wrapperClassName, options = [] } =
    props;
  return (
    <div className={`select-container ${wrapperClassName ?? ""}`}>
      <label htmlFor="select">{label}</label>
      <select
        value={value}
        onChange={onChange}
        className={`select-class ${className ?? ""}`}
      >
        <option value="">Select One</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default App;
