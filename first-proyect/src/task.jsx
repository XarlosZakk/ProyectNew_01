export function TaskCard() {
  const estilosCarta = {
    background: "lightblue",
    padding: "20px",
    borderRadius: "10px",
    border: "2px solid blue",
    boxShadow: "0px 0px 10px black",
  };

  const estilosTitulo = {
    color: "blue",
    fontSize: "24px",
    textAlign: "center",
  };

  const estilosParrafo = {
    color: "darkblue",
    fontSize: "18px",
    lineHeight: "1.5",
  };

  return (
    <div style={estilosCarta}>
      <h1 style={estilosTitulo}>Mi primer Tarea</h1>
      <p style={estilosParrafo}>
        tarea realizada Lorem ipsum dolor, sit amet consectetur adipisicing
        elit. Iusto, animi! Quaerat odio incidunt iste cumque dolorum illum
        placeat iusto quod, ipsa, aperiam fuga quas, beatae eveniet optio quasi?
        Ab, magni!
      </p>
    </div>
  );
}
