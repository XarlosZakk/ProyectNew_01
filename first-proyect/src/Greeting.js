export function Greeting({ title, name = "User" }) {
  return (
    <h1>
      {title}, dice {name}
    </h1>
  );
}

export function Usuario({ name, amount, marrid, points, address, llamar }) {
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

export function CardPresent() {
  return (
    <div>
      <h2>Tarjeta de Presentación</h2>
      <p>Nombre: Carlos</p>
      <p>Profesión: Desarrollador</p>
      <p>Ubicación: Barcelona</p>
      <p>Contacto: 123-456-7890</p>
      <ul>
        <li><a href="https://www.google.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        <li><a href="https://www.github.com" target="_blank" rel="noopener noreferrer">GitHub</a></li>
        <li><a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">Youtube</a></li>
        <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
        <li><a href="https://www.gitlab.com" target="_blank" rel="noopener noreferrer">GitLab</a></li>
      </ul>
      <span>© 2025 Carl's Dev. Todos los derechos reservados.</span>
    </div>
  );
}
