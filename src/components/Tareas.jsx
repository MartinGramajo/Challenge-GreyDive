import React from "react";
import Preguntas from "./Preguntas";

export default function Tareas({ escenario, preguntas }) {
  return (
    <div>
      <div className="my-5 ">
        <h1 className="my-4">Tareas</h1>
        <h2 className="my-4 ">Escenario: {escenario}</h2>
        <div>
        {preguntas.map((pregunta, id) => (
          <Preguntas pregunta={pregunta} id={id} />
        ))}
        </div>
      </div>
    </div>
  );
}
