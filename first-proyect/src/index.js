import React from "react";
import ReactDom from "react-dom/client";
import { Greeting, Usuario } from "./Greeting";
import ProductModule, { Navbar } from "./productModule";

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
  <>
    <Usuario
      name="Carlos"
      amount={3000}
      marrid={true}
      points={[99, 33.3, 50.1]}
      address={{
        direccion: "calle 14 no24",
        ciudad: "Barcelona",
        noCasa: "cas-3423",
        codePostal: '090601'
      }}
    />
  </>
);
