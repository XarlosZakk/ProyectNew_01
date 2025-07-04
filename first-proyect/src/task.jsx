import "./Estilos/card.css";

export function TaskCard({ ready }) {
  return (
    <div className="estilosCarta">
      <h1> 📮 Mi primer Tarea</h1>
      <span
        style={
          ready
            ? { background: "green", padding: "5px", borderRadius: "5px" }
            : { background: "red", padding: "5px", borderRadius: "5px" }
        }
      >
        {ready ? "✅ tarea Realizazda" : "⛔ tarea pendiente"}
      </span>
    </div>
  );
}
