import React from "react";
import ReactDom from "react-dom/client";
import {Greeting, Usuario} from './Greeting';
const root = ReactDom.createRoot(document.getElementById("root"));


root.render(
  <>
    <Greeting />
    <Usuario/>
  </>
);
