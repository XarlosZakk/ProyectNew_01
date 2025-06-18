export function Greeting({ title, name = "User" }) {
  return (
    <h1>
      {title}, dice {name}
    </h1>
  );
}

export function Usuario(props) {
  console.log(props);
  return (
    <div>
      <h1>{props.name}</h1>
      <p>Saldo: 💰{props.amount}</p>
      <p>Notas: 💬{props.points}</p>
      <p>Casado: {props.marrid ? "✅ Casado" : "⛔ Divorciado"}</p>
      <ul>
        <li>direccion: 🌇{props.address.direccion}</li>
        <li>ciudad: 🏙️{props.address.ciudad}</li>
        <li>noCasa: 🏠{props.address.noCasa}</li>
        <li>codePostal: 📮{props.address.codePostal}</li>
      </ul>
    </div>
  );
}

