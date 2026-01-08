import React from "react";
import '../app.css';

const App = (props) => {
  const { label, onClick, className, wrapperClassName } = props;
  return (
    <div className={`button-container ${wrapperClassName ?? ''}`}>
      <button className={`button-class ${className ?? ''}`} onClick={onClick}>{label ?? 'Click Me'}</button>
    </div>
  );
};

export default App;
