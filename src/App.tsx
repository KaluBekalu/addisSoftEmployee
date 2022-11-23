import React from "react";
import Button from "./containers/Button";
import Loading from "./containers/Loading";
import Employees from "./pages/Employees";
import { Provider } from "react-redux";
let App = () => (
  <div>
    <Employees />
  </div>
);
export default App;
