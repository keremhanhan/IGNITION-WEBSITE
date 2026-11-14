
import { BrowserRouter, Routes, Route, NavLink, Link } from "react-router-dom";
import "./App.css";

const navigation = [
  { label: "ANA SAYFA", path: "/" },
  { label: "OYUN", path: "/oyun" },
  { label: "HARİTALAR", path: "/haritalar" },
  { label: "HABERLER", path: "/haberler" },
  { label: "STÜDYO", path: "/stüdyo" },
];

function Header() {
  return (
    <header className="navbar">
      <Link to="/" className="brand">
        <span className="brand-mark">I</span>
        <span>IGNITION</span>
      </Link>

      <nav className="nav-links">
        {navigation.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === "/"}
            className={({ isActive }) => isActive ? "active" : ""}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>

      <span className="project-status">GELİŞTİRİLİYOR</span>
    </header>
  );
}

function Footer() {
  return (
    <footer>
      <div className="footer-main">
        <Link to="/" className="brand">
          <span className="brand-mark">I</span>
          <span>IGNITION</span>
        </Link>
        <p>FARKLI OLMAK TASARIMIMIZDA VAR.</p>
      </div>
      <div className="footer-bottom">
        <span>© 2026 VERSE MATE STUDIOS</span>
        <span>PC / GELİŞTİRİLME AŞAMASINDA</span>
      </div>
    </footer>
  );
}

function Home() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="eyebrow">VERSE MATE STUDIOS SUNAR</p>
        <h1>IGNITION<span>.</span></h1>
        <p className="hero-subtitle">5'E 5 TAKTİKSEL FPS DENEYİMİ</p>
        <p className="description">
          Takımını kur. Stratejini belirle. Mücadeleye katıl.
          IGNITION, rekabetçi FPS dünyasına yeni bir yaklaşım getiriyor.
        </p>
        <Link to="/oyun" className="primary-button">
          OYUNU KEŞFET <span>↗</span>
        </Link>
      </div>
      <div className="hero-bottom">
        <span>IGNITION PROJECT / 001</span>
        <span>DIFFERENT BY DESIGN</span>
      </div>
    </section>
  );
}

function Game() {
  return (
    <Page
      eyebrow="01 / OYUN"
      title={<>REKABETİN<br /><span>YENİ YÜZÜ.</span></>}
      description="IGNITION, Verse Mate Studios tarafından geliştirilen 5'e 5 taktiksel bir birinci şahıs nişancı oyunudur."
    />
  );
}

function Maps() {
  return (
    <Page
      eyebrow="02 / HARİTA VERİTABANI"
      title={<>SAHAYI<br /><span>KEŞFET.</span></>}
      description="IGNITION haritaları ve mücadele alanları burada tanıtılacak."
    />
  );
}

function News() {
  return (
    <Page
      eyebrow="03 / HABERLER"
      title={<>GELİŞİM<br /><span>GÜNLÜĞÜ.</span></>}
      description="IGNITION'ın geliştirme sürecinden haberler ve duyurular."
    />
  );
}

function Studio() {
  return (
    <Page
      eyebrow="04 / VERSE MATE STUDIOS"
      title={<>FARKLI<br /><span>OLMAK.</span></>}
      description="IGNITION'ın arkasındaki stüdyo: Verse Mate Studios."
    />
  );
}

function Page({ eyebrow, title, description }: {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
}) {
  return (
    <section className="content-page">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p className="description">{description}</p>
      <span className="page-note">IGNITION / DIFFERENT BY DESIGN</span>
    </section>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/oyun" element={<Game />} />
          <Route path="/haritalar" element={<Maps />} />
          <Route path="/haberler" element={<News />} />
          <Route path="/stüdyo" element={<Studio />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
