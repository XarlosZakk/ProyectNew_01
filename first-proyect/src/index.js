import React from "react";
import ReactDom from "react-dom/client";
import {Greeting, Usuario} from './Greeting';
import ProductModule, {Navbar} from './productModule';

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
  <>
    <Greeting title='hello' />
    <Greeting title='hola react' />
    <Greeting title='hello js' />
    <Greeting title='javascript good' />
    <Greeting title='fast es la honda' />
  </>
);
