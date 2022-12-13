import { useEffect, useState } from "react";

export default function EjemploUseEffect(props: any) {
  const [clicks, setClicks] = useState(0);
  const [fecha, setFecha] = useState(new Date());

  useEffect(() => {
    console.log("useEffect del click");
    document.title = `${clicks} veces`;

    return () => {
      //Se ejecuta al destruir el componente
      console.log("el componente se va a destruir");
    };
  }, [clicks]);

  useEffect(() => {
    console.log("useEffect del interval");
    const intervalId = setInterval(() => {
      setFecha(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  });

  useEffect(() => {
    console.log("Voy a ejecutarme una vez");
  }, []);

  return (
    <>
      <button onClick={() => setClicks(clicks + 1)}>
        Me has cliqueado {clicks} veces
      </button>

      <div>{fecha.toString()}</div>
    </>
  );
}
