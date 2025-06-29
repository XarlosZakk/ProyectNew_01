import React from "react";
import ReactDom from "react-dom/client";
import { Greeting, Usuario, CardPresent } from "./Greeting";
import ProductModule, { Navbar } from "./productModule";
import { Button } from "./Button";
import { TaskCard } from "./task";
import { Saludar } from "./Accion";

const root = ReactDom.createRoot(document.getElementById("root"));

// metodo fuera del componente
const handleChange = (e) => {
  console.log(e.target.value);
};

root.render(
  <>
    <TaskCard ready={true} />
    <Saludar />
    <Button text="hello" />
    <input onChange={handleChange} />
    
    //!manejadores de eventos
    <form
      onSubmit={(e) => {
        e.preventDefault();
        alert("Formulario enviado");
      }}
    >
      <label htmlFor="name">Nombre:</label>
      <input type="text" id="name" name="name" />
      <br />
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" />
      <br />
      <button>Enviar</button>
    </form>
  </>
);
