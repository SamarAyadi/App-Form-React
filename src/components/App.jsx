import React from "react";
import Form from "./Form";

var userIsRegistered = false;

// Condition ? do it when true : false

function App() {
  return (
    <div className="container">
      <Form isRegistered={userIsRegistered} />
    </div>
  );
}

export default App;
