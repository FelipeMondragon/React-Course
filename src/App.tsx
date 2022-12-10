import React, { useState } from "react";
import "./App.css";
import EjemploReloj from "./EjemploReloj";
import MostrarTexto from "./MostrarTexto";
import ProyectarContenido2 from "./ProyectarContenido2";

function App() {
  const [texto, setTexto] = useState("Felipe");
  const [checked, setChecked] = useState(false);
  const imagenURL =
    "https://blog.wildix.com/wp-content/uploads/2020/06/react-logo.jpg";

  const manejarClick = () => console.log("click");

  const manejarKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.value);
    setTexto(e.currentTarget.value);
  };

  const parteIntermedia = <EjemploReloj />;

  const estilo = {
    backgroundColor: "red",
    width: "50px",
    height: "50px",
    marginLeft: "1rem",
  };

  const parteInferior = <div style={estilo}> </div>;

  return (
    <>
      <h1 className="rojo">Hola mundo!</h1>

      <ProyectarContenido2
        parteSuperior={<span>Este es un mensaje del componente padre</span>}
        parteIntermedia={parteIntermedia}
        parteInferior={parteInferior}
      />
      <button
        onMouseEnter={() => console.log("entrando")}
        onClick={() => console.log("click desde el botón")}
      >
        Clickeame
      </button>
      <br />
      <br />
      <input type="text" onKeyUp={(e) => manejarKeyUp(e)} />
      <MostrarTexto texto={texto} />
      <br />
      <br />

      <div>
        <input
          type="checkbox"
          onChange={(e) => setChecked(e.currentTarget.checked)}
          checked={checked}
        />{" "}
        Este es un checkbox
      </div>
    </>
  );
}

export default App;
