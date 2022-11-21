import React from "react";

export default function Cliente({ cliente }) {
  return (
    <div>
      <h1 className="my-2 py-2"> Cliente: {cliente}</h1>
      <div>
        <h1>Test: Test de usabilidad en el sitio web</h1>

        {
          (cliente === "viamo") ? (<h1>Testeador: 1</h1>) : (<h1>Testeador: 2</h1> ) 
        }
        
      </div>
    </div>
  );
}
