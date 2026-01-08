import React, { lazy, Suspense, useState } from "react";
import '../app.css';

const RemoteButton = lazy(() => import("buttonApp/Button"));
const RemoteSelect = lazy(() => import("selectApp/Select"));

const App = () => {
  const [value, setValue] = useState("");
  const options = ["Hyderabad", "Bangalore", "Chennai", "Mumbai", "Delhi", "Kolkata", "Pune"];

  return (
    <div className="mfe-app">
      <h1>Microfrontend Application</h1>
      <p>This is the Select microfrontend application.</p>

      <Suspense fallback={<div>Loading Select...</div>}>
        <RemoteSelect
          className="remote-select"
          wrapperClassName="remote-select-wrapper"
          value={value}
          onChange={opt=> setValue(opt.target.value)}
          label={"Choose an option:"}
          options={options}
        />
      </Suspense>

      <Suspense fallback={<div>Loading Button...</div>}>
        <RemoteButton
          label="Submit"
          onClick={() => alert("Submit Succesfully!")}
          className="remote-button"
          wrapperClassName="remote-button-wrapper"
        />
      </Suspense>
    </div>
  );
};
export default App;
