function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0f172a",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial",
      }}
    >
      <div
        style={{
          background: "#1e293b",
          padding: "40px",
          borderRadius: "20px",
          width: "400px",
          textAlign: "center",
        }}
      >
        <h1>Uniform360</h1>

        <p>
          Ölçüden teslimata,
          <br />
          kurumsal kıyafet süreci tek ekranda.
        </p>

        <input
          placeholder="Kullanıcı Adı"
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "20px",
          }}
        />

        <input
          type="password"
          placeholder="Şifre"
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "10px",
          }}
        />

        <button
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "20px",
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "10px",
          }}
        >
          Giriş Yap
        </button>
      </div>
    </div>
  );
}

export default App;