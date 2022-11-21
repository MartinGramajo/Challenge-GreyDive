import "./App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import datos from './db.json';
import NavReact from "./components/NavReact";
import Home from "./pages/Home";
import { ClienteLink } from "./pages/ClienteLink ";
import Footer from "./components/Footer";
import { DarkModeContext } from "./context/DarkModeContext";
import { useContext } from "react";

function App() {

  /*Datos de la db.json*/
  const [dato1, dato2] = datos

  const { darkMode } = useContext(DarkModeContext)

  return (
    <div className={darkMode ? ' Container-dark' : 'Container-light '} style={{
      display: "flex",
      flexDirection: 'column',
      minHeight: "100vh"
    }}>
      <BrowserRouter>
        <NavReact />
        <Routes >
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Cliente1" element={<ClienteLink dato={dato1} />} />
          <Route exact path="/Cliente2" element={<ClienteLink dato={dato2} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
