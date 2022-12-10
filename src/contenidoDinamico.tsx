export default function ContenidoDinamico(props: any) {
  // Ej 1: Operador ternario
  //   return (
  //     <div>
  //       {props.mostrarMensajeSecreto ? <span>Mensaje secreto: 42</span> : null}
  //     </div>
  //   );

  // Ej 2 : If
  if (props.calificacion > 90) {
    return (
      <div>
        <h3>Excelente calificación</h3>
      </div>
    );
  } else if (props.calificacion >= 80 && props.calificacion <= 90) {
    return (
      <div>
        <h3>Muy bien hecho</h3>
      </div>
    );
  } else {
    return (
      <div>
        <h3>lol...</h3>
      </div>
    );
  }
}
