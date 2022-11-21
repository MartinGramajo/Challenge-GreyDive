import React, { useContext } from "react";
import Form from "react-bootstrap/Form";
import { DarkModeContext } from "../context/DarkModeContext";
import nightmode from "../assets/nightmode.png";
import { Image } from "react-bootstrap";

export default function LightSwitch() {
  const { toggleDarkMode } = useContext(DarkModeContext);

  const handleClick = () => {
    toggleDarkMode();
  };

  return (
    <Form className="d-flex justify-content-end" >
      <Form.Check className="my-5" type="switch" id="custom-switch" onClick={handleClick} />
      <Image className="py-5 claro-oscuro" src={nightmode} alt="logo" fluid />
    </Form>
  );
}
