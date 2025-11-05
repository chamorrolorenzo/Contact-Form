import { useState, useEffect } from "react";
import "./login.css";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checking, setChecking] = useState(false);
  const [userExists, setUserExists] = useState(false);

  useEffect(() => {
    if (email !== "" && password !== "") {
      const delay = setTimeout(() => {
        setChecking(true);
        fetch(`http://localhost:3001/users?email=${email}&password=${password}`)
          .then((response) => response.json())
          .then((users) => {
            if (users.length > 0) {
              setUserExists(true);
              alert(`¡Bienvenido ${email}!`);
              setEmail("");
              setPassword("");
            } else {
              setUserExists(false);
            }
          })
          .catch(() => {})
          .finally(() => setChecking(false));
      }, 500); // delay de 500ms

      return () => clearTimeout(delay); // limpia el timeout si el usuario sigue escribiendo
    }
  }, [email, password]);

  const handleRegister = () => {
    const newUser = { email, password };
    fetch("http://localhost:3001/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    })
      .then((response) => {
        if (response.ok) {
          alert("Registro correcto");
          setEmail("");
          setPassword("");
        } else {
          alert("Intente nuevamente");
        }
      })
      .catch(() => alert("Intente nuevamente"));
  };

  return (
    <div className="login">
      <h2>Acceso / Registro</h2>
      <form className="login-form" onSubmit={(e) => e.preventDefault()}>
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {!userExists && email !== "" && password !== "" && (
          <button type="button" onClick={handleRegister}>
            Crear cuenta
          </button>
        )}
      </form>
    </div>
  );
}
