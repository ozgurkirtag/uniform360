import { useState } from "react";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    if (username === "admin" && password === "1234") {
      setLoggedIn(true);
    } else {
      alert("Kullanıcı adı veya şifre hatalı");
    }
  };

  if (loggedIn) {
    return (
      <div className="page">
        <div className="login-card">
          <h1>Uniform360</h1>

          <h2>Hoşgeldiniz</h2>

          <p>Kurumsal kıyafet yönetim paneli</p>

          <button>Personeller</button>
          <button>Ölçüler</button>
          <button>Siparişler</button>
          <button>Teslimatlar</button>
        </div>
      </div>
    );
  }

  return (
    <div className="page">
      <div className="login-card">
        <h1>Uniform360</h1>

        <p>
          Ölçüden teslimata,
          <br />
          kurumsal kıyafet süreci tek ekranda.
        </p>

        <input
          placeholder="Kullanıcı Adı"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Şifre"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>
          Giriş Yap
        </button>
      </div>
    </div>
  );
}

export default App;