import type React from "react";

export default function Navbar() {
  const links = [
    { label: "À propos", href: "#about" },
    { label: "Projets", href: "#projects" },
    { label: "Compétences", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header style={styles.header}>
      <div className="container" style={styles.inner}>
        <div style={styles.brand}>Maxime Osorio</div>
        <nav style={styles.nav}>
          {links.map((l) => (
            <a key={l.href} href={l.href} style={styles.link}>
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

const styles: Record<string, React.CSSProperties> = {
  header: {
    position: "sticky",
    top: 0,
    zIndex: 50,
    background: "rgba(255,255,255,0.65)",
    borderBottom: "1px solid rgba(15,23,42,0.08)",
    backdropFilter: "blur(12px)",
  },
  inner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "14px 0",
  },
  brand: { fontWeight: 900, letterSpacing: 0.2 },
  nav: { display: "flex", gap: 16, flexWrap: "wrap" },
  link: {
    textDecoration: "none",
    fontWeight: 700,
    padding: "8px 10px",
    borderRadius: 10,
    border: "1px solid transparent",
  },
};
