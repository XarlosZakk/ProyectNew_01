import { Component } from "react";
import './Estilos/acciones.css'

export class Saludar extends Component {
  render() {
    return (
      <div className="container">
        <h1>Hola Mundo</h1>
        <button
          onClick={() => {
            console.log("Hola Mundo");
            alert("Me llamaste tu?");
          }}
        >
          Saludar
        </button>
      </div>
    );
  }
}
