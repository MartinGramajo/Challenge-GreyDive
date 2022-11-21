import React from "react";

export default function Preguntas({ pregunta, id }) {
  return (
    <div className="caja">
      <hr />
      <div className="py-2">
        {id === 0 ? (
          <h1 className="my-4"> Tarea: Inicial</h1>
        ) : (
          <h1 className="my-4"> Tarea: {id}</h1>
        )}

        <h2 className="my-2"> {pregunta.texto}</h2>
        {pregunta.respuesta === "respuesta verbal" ? null : (
          <h2>Respuesta: {pregunta.respuesta}</h2>
        )}

        <h3 className="color-texto-duracion mt-4">
          {" "}
          Duración de la tarea: {pregunta.tiempo}
        </h3>
      </div>
      <hr />
    </div>
  );
}
