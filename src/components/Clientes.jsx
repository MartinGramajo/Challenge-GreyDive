import React from 'react'
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Clientes() {
  return (
    <div className="container ">
    <div className="py-5 my-5">
      <div>
        {" "}
        <Nav.Link
          className="me-auto ms-4 my-2 py-4  border border-start-0 border-end-0 border-top-0 border-2"
          as={Link}
          to="/Cliente1"
        >
          <h1>Cliente 1</h1>
        </Nav.Link>
      </div>
      <div>
        {" "}
        <Nav.Link
          className="me-auto ms-4 mt-2 py-4  border border-start-0 border-end-0 border-top-0 border-2"
          as={Link}
          to="/Cliente2"
        >
          <h1>Cliente 2</h1>
        </Nav.Link>
      </div>
    </div>
  </div>
  )
}
