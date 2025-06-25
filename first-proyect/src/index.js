import React from "react";
import ReactDom from "react-dom/client";
import { Greeting, Usuario, CardPresent } from "./Greeting";
import ProductModule, { Navbar } from "./productModule";
import { Button } from "./Button";
import {TaskCard} from "./task"
import {Saludar} from './Accion'

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
  <>
  <TaskCard ready = {true}/>
  <Saludar />
  </>
);
