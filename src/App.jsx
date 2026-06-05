import { useState } from "react";
import "./App.css";

const users = {
  admin: { password: "1234", company: "Gürmen Group", role: "Yönetici" },
  turkuvaz: { password: "1234", company: "Turkuvaz Medya", role: "Müşteri" },
};

const tables = {
  personel: {
    title: "Personel Yönetimi",
    desc: "Personel listesi, departman ve ölçü durumlarını takip edin.",
    headers: ["Ad Soyad", "Departman", "Lokasyon", "Durum"],
    rows: [
      ["Ahmet Yılmaz", "Mağaza", "İstanbul", "Ölçü bekleniyor"],
      ["Ayşe Demir", "Satış", "Ankara", "Üretimde"],
      ["Mehmet Kaya", "Operasyon", "İzmir", "Teslim edildi"],
      ["Zeynep Şahin", "Karşılama", "İstanbul", "Onay bekliyor"],
    ],
  },
  olculer: {
    title: "Ölçü Takibi",
    desc: "Personel ölçüleri ve beden bilgilerini görüntüleyin.",
    headers: ["Ad Soyad", "Beden", "Yaka", "Bel", "Boy"],
    rows: [
      ["Ahmet Yılmaz", "48", "41", "32", "82"],
      ["Ayşe Demir", "38", "36", "28", "76"],
      ["Mehmet Kaya", "52", "43", "34", "84"],
      ["Zeynep Şahin", "36", "35", "27", "74"],
    ],
  },
  siparisler: {
    title: "Sipariş Yönetimi",
    desc: "Siparişlerin üretim ve teslimat durumlarını takip edin.",
    headers: ["Sipariş No", "Firma", "Ürün", "Durum"],
    rows: [
      ["#1001", "Turkuvaz Medya", "Gömlek / Pantolon", "Hazırlanıyor"],
      ["#1002", "Acıbadem", "Ceket / Pantolon", "Üretimde"],
      ["#1003", "Develi", "Gömlek", "Teslim edildi"],
      ["#1004", "Mado", "Önlük / Gömlek", "Planlandı"],
    ],
  },
  teslimatlar: {
    title: "Teslimat Takibi",
    desc: "Kargo, mağaza teslimi ve teslim onaylarını takip edin.",
    headers: ["Personel", "Durum", "Kargo No", "Not"],
    rows: [
      ["Ahmet Yılmaz", "Beklemede", "-", "Mağaza teslim"],
      ["Ayşe Demir", "Kargoda", "TR123456", "Adres teslim"],
      ["Mehmet Kaya", "Teslim edildi", "TR987654", "İmza alındı"],
      ["Zeynep Şahin", "Hazırlanıyor", "-", "Toplu sevkiyat"],
    ],
  },
};

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [currentUser, setCurrentUser] = useState(null);
  const [screen, setScreen] = useState("dashboard");

  const login = () => {
    const user = users[username.toLowerCase()];
    if (user && user.password === password) {
      setCurrentUser({ username, ...user });
      setScreen("dashboard");
    } else {
      alert("Kullanıcı adı veya şifre hatalı");
    }
  };

  const logout = () => {
    setCurrentUser(null);
    setUsername("");
    setPassword("");
    setScreen("dashboard");
  };

  if (!currentUser) {
    return (
      <div className="page">
        <div className="login-card">
          <h1>Uniform360</h1>
          <p>Ölçüden teslimata,<br />kurumsal kıyafet süreci tek ekranda.</p>

          <input placeholder="Kullanıcı Adı" value={username} onChange={(e) => setUsername(e.target.value)} />
          <input type="password" placeholder="Şifre" value={password} onChange={(e) => setPassword(e.target.value)} />

          <button onClick={login}>Giriş Yap</button>

          <small>Demo: admin / 1234</small>
        </div>
      </div>
    );
  }

  const TableScreen = ({ type }) => {
    const t = tables[type];

    return (
      <div className="panel-card wide">
        <div className="topbar">
          <div>
            <h1>{t.title}</h1>
            <p>{t.desc}</p>
          </div>
          <button onClick={() => setScreen("dashboard")}>Ana Menü</button>
        </div>

        <table>
          <thead>
            <tr>{t.headers.map((h) => <th key={h}>{h}</th>)}</tr>
          </thead>
          <tbody>
            {t.rows.map((row, i) => (
              <tr key={i}>{row.map((cell, j) => <td key={j}>{cell}</td>)}</tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="app">
      <aside>
        <h2>Uniform360</h2>
        <p>{currentUser.company}</p>

        <button onClick={() => setScreen("dashboard")}>Dashboard</button>
        <button onClick={() => setScreen("personel")}>Personel</button>
        <button onClick={() => setScreen("olculer")}>Ölçüler</button>
        <button onClick={() => setScreen("siparisler")}>Siparişler</button>
        <button onClick={() => setScreen("teslimatlar")}>Teslimatlar</button>
        <button onClick={() => setScreen("firma")}>Firma Bilgileri</button>
        <button onClick={() => setScreen("raporlar")}>Raporlar</button>
        <button className="danger" onClick={logout}>Çıkış</button>
      </aside>

      <main>
        {screen === "dashboard" && (
          <div className="panel-card wide">
            <h1>Kurumsal Kıyafet Yönetim Paneli</h1>
            <p>Hoş geldiniz, {currentUser.company}</p>

            <div className="stats">
              <div><strong>4</strong><span>Aktif Firma</span></div>
              <div><strong>128</strong><span>Personel</span></div>
              <div><strong>43</strong><span>Ölçü Bekliyor</span></div>
              <div><strong>27</strong><span>Teslim Edildi</span></div>
            </div>

            <div className="quick">
              <button onClick={() => setScreen("personel")}>Personel Listesi</button>
              <button onClick={() => setScreen("olculer")}>Ölçü Takibi</button>
              <button onClick={() => setScreen("siparisler")}>Sipariş Durumu</button>
              <button onClick={() => setScreen("teslimatlar")}>Teslimatlar</button>
            </div>
          </div>
        )}

        {screen === "personel" && <TableScreen type="personel" />}
        {screen === "olculer" && <TableScreen type="olculer" />}
        {screen === "siparisler" && <TableScreen type="siparisler" />}
        {screen === "teslimatlar" && <TableScreen type="teslimatlar" />}

        {screen === "firma" && (
          <div className="panel-card wide">
            <h1>Firma Bilgileri</h1>
            <p>Firma: {currentUser.company}</p>
            <p>Yetki: {currentUser.role}</p>
            <p>Proje: Kurumsal kıyafet ve ölçü yönetimi</p>
          </div>
        )}

        {screen === "raporlar" && (
          <div className="panel-card wide">
            <h1>Raporlar</h1>
            <p>Yakında: Excel aktarımı, teslimat raporu ve ölçü eksik listesi.</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;