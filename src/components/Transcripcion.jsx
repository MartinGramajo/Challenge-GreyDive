import React from "react";

export default function Transcripcion({ transcripcion = "" }) {
  const texto = transcripcion.split("<br>").map((element) => (
    <>
      {" "}
      {element}
      <br />
    </>
  ));

  return (
    <div className="py-5">
      <h1 className="py-4"> Transcripción</h1>
      <div className="scroll-response">
        <div className="scroll">
          <div className="py-2 container">{texto}</div>
        </div>
      </div>
    </div>
  );
}
