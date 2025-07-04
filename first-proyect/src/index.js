import React from "react";
import ReactDom from "react-dom/client";
import { Greeting, Usuario, CardPresent } from "./Greeting";
import ProductModule, { Navbar } from "./productModule";
import { Button } from "./Button";
import { TaskCard } from "./task";
import { Saludar } from "./Accion";
import {Navegacion} from "./Navegacion";
import {Posts} from "./Posts"

const root = ReactDom.createRoot(document.getElementById("root"));

// metodo fuera del componente
const handleChange = (e) => {
  console.log(e.target.value);
};

root.render(
  <>
  <Posts/>
  <Navegacion/>
  </>
);
