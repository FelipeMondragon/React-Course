import React from "react";
import "./App.css";

function App() {
  let texto = "";
  const imagenURL =
    "https://blog.wildix.com/wp-content/uploads/2020/06/react-logo.jpg";

  const manejarClick = () => console.log("click");

  const manejarKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.value);
    texto = e.currentTarget.value;
  };

  return (
    <>
      <h1 className="rojo">Hola mundo!</h1>
      <button
        onMouseEnter={() => console.log("entrando")}
        onClick={() => console.log("click desde el botón")}
      >
        Clickeame
      </button>
      <br />
      <br />
      <input type="text" onKeyUp={(e) => manejarKeyUp(e)} />
      <div> {texto} </div>
      <br />
      <br />
      <img alt="logo react" src={imagenURL} />
      <div>
        <input type="checkbox" checked={true} /> Este es un checkbox
      </div>
    </>
  );
}

export default App;
