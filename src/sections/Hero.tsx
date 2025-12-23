import type React from "react";

export default function Hero() {
  return (
    <section style={{ padding: "54px 0 18px" }}>
      <div className="container">
        <div className="sectionCard" style={styles.card}>
          <p style={styles.kicker}>Portfolio</p>

          <h1 style={styles.h1}>
          Maxime <span style={styles.accent}>Osorio de Abreu</span>
          </h1>

          <p style={styles.subtitle}>
            Étudiant ingénieur — objectif : stage  technique (4 mois) à partir d’avril 2026.
          </p>

          <div style={styles.ctaRow}>
            <a href="#projects" style={styles.primaryBtn}>
              Voir mes projets
            </a>
            <a href="./CV_OsoriodeAbreuMaxime.pdf" download style={styles.secondaryBtn}>
                Télécharger mon CV
            </a>

            <a href="#contact" style={styles.ghostBtn}>
              Me contacter
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

const styles: Record<string, React.CSSProperties> = {
  card: { padding: "34px 26px" },
  kicker: { fontWeight: 900, letterSpacing: 1, margin: 0, opacity: 0.7 },
  h1: { fontSize: 52, margin: "10px 0 6px", lineHeight: 1.05 },
  accent: {
    color: "#1f2937", // gris anthracite
    fontWeight: 900,
  },
  subtitle: { margin: 0, maxWidth: 820, fontSize: 18, color: "#334155" },
  ctaRow: { display: "flex", gap: 12, marginTop: 18, flexWrap: "wrap" },
  primaryBtn: {
    background: "#111827",
    color: "white",
    padding: "10px 14px",
    borderRadius: 12,
    textDecoration: "none",
    fontWeight: 900,
    boxShadow: "0 10px 24px rgba(0,0,0,0.18)",
  },
  secondaryBtn: {
    background: "white",
    border: "1px solid rgba(15,23,42,0.14)",
    color: "#0f172a",
    padding: "10px 14px",
    borderRadius: 12,
    textDecoration: "none",
    fontWeight: 900,
  },
  ghostBtn: {
    background: "transparent",
    border: "1px solid rgba(15,23,42,0.10)",
    color: "#0f172a",
    padding: "10px 14px",
    borderRadius: 12,
    textDecoration: "none",
    fontWeight: 900,
  },
};
