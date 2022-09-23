import React from "react";
import Texto from "./Texto.js";
import Input from "./Input.js";
import "./style.css";

export default function App() {
  return (
    <div>
      <Input>
        <Texto texto ="Olá mundo"></Texto>
      </Input>
    </div>
  );
}
