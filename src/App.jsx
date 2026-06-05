import "./App.css";

function App() {
  return (
    <div className="page">
      <div className="login-card">
        <h1>Uniform360</h1>

        <p>
          Ölçüden teslimata,
          <br />
          kurumsal kıyafet süreci tek ekranda.
        </p>

        <input placeholder="Kullanıcı Adı" />

        <input
          type="password"
          placeholder="Şifre"
        />

        <button>Giriş Yap</button>
      </div>
    </div>
  );
}

export default App;