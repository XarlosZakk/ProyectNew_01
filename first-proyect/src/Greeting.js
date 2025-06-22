export function Greeting({ title, name = "User" }) {
  return (
    <h1>
      {title}, dice {name}
    </h1>
  );
}

export function Usuario({name, amount, marrid, points, address, llamar}) {
  console.log(name, amount, marrid, points, address, llamar);
  return (
    <div>
      <h1>{name}</h1>
      <p>Saldo: 💰{amount}</p>
      <p>Notas: 💬{points}</p>
      <p>Casado: {marrid ? "✅ Casado" : "⛔ Divorciado"}</p>
      <ul>
        <li>direccion: 🌇{address.direccion}</li>
        <li>ciudad: 🏙️{address.ciudad}</li>
        <li>noCasa: 🏠{address.noCasa}</li>
        <li>codePostal: 📮{address.codePostal}</li>
      </ul>
      <button onClick={llamar}>Llamar</button>
    </div>
  );
}