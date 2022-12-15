import React, { useState } from "react";
import Abuelo from "./Abuelo";
import "./App.css";
import ContenidoDinamico from "./contenidoDinamico";
import EjemploUseEffect from "./EjemploUseEffect";
import ErrorBoundary from "./ErrorBoundary";
import FormularioTexto from "./FormularioTexto";
import MostrarTexto from "./MostrarTexto";
import ValorContext from "./ValorContext";

function App() {
  const [texto, setTexto] = useState("Felipe");
  const [checked, setChecked] = useState(true);
  // const imagenURL =
  //   "https://blog.wildix.com/wp-content/uploads/2020/06/react-logo.jpg";

  // const manejarClick = () => console.log("click");

  const manejarKeyUp = (textoInput: string) => {
    console.log(textoInput);
    setTexto(textoInput);
  };

  // const parteIntermedia = <EjemploReloj />;

  // const estilo = {
  //   backgroundColor: "red",
  //   width: "50px",
  //   height: "50px",
  //   marginLeft: "1rem",
  // };

  // const parteInferior = <div style={estilo}> </div>;

  const calificaciones = [
    { nombre: "Felipe", calificacion: 75 },
    { nombre: "Claudia", calificacion: -1 },
    { nombre: "Roberto", calificacion: 95 },
  ];

  return (
    <>
      <h1 className="rojo">Hola mundo!</h1>

      {calificaciones.map((cal) => (
        <ErrorBoundary key={cal.nombre}>
          <ContenidoDinamico {...cal} />
        </ErrorBoundary>
      ))}

      {/* <ValorContext.Provider value={texto}>
        <Abuelo />
      </ValorContext.Provider>

      <div>
        <input
          type="checkbox"
          onChange={(e) => setChecked(e.currentTarget.checked)}
          checked={checked}
        />{" "}
        Mostrar componente useEffect
      </div>

      {checked ? <EjemploUseEffect /> : null} */}

      <button
        onMouseEnter={() => console.log("entrando")}
        onClick={() => console.log("click desde el botón")}
      >
        Clickeame
      </button>
      <br />
      <br />
      <FormularioTexto manejarKeyUp={(e: string) => manejarKeyUp(e)} />
      <MostrarTexto texto={texto} />
      <br />
      <br />
    </>
  );
}

export default App;
