import React from "react";
import Cliente from "../components/Cliente";
import FlechaATop from "../components/FlechaATop";
import Tareas from "../components/Tareas";
import Transcripcion from "../components/Transcripcion";
import { Video } from "../components/Video";

export const ClienteLink = ({ dato, id }) => {
  const { cliente, linkVideo, transcripcion, escenario, preguntas } = dato;

  return (
    <div className="py-2 container" >
      <FlechaATop />
      <Cliente cliente={cliente} id={id} />
      <Video linkVideo={linkVideo} />
      <Transcripcion transcripcion={transcripcion}  id={id}/>
      <Tareas escenario={escenario} preguntas={preguntas} id={id}/>
    </div>
  );
};
