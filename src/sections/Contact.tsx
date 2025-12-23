import type React from "react";

export default function Contact() {
  return (
    <section id="contact" style={styles.section}>
      <h2 style={styles.h2}>Contact</h2>
      <p style={styles.p}>Tu peux me contacter ou retrouver mes profils ici :</p>

      <div style={styles.card}>
        <p style={styles.line}>
          <b>Email Pro:</b>{" "}
          <a href="mailto:osoriodeabreu@et.esiea.fr" style={styles.link}>
            osoriodeabreu@et.esiea.fr
          </a>
        </p>
        <p style={styles.line}>
          <b>Email Perso:</b>{" "}
          <a href="mailto:maximeosorio26@gmail.com" style={styles.link}>
            maximeosorio26@gmail.com
          </a>
        </p>

        <p style={styles.line}>
          <b>Téléphone : 07 67 92 10 80</b>
        </p>

        <p style={styles.line}>
          <b>LinkedIn :</b>{" "}
          <a
            href="https://www.linkedin.com/in/maxime-osorio-de-abreu-47367334b/"
            target="_blank"
            rel="noreferrer"
            style={styles.link}
          >
            linkedin.com/in/Maxime-OsoriodeAbreu
          </a>
        </p>

        {/* Optionnel */}
        <p style={styles.line}>
          <b>CV :</b>{" "}
          <a href="./OsoriodeAbreuMaxime.pdf" download style={styles.secondaryBtn}>
            Télécharger mon CV
          </a>


        </p>
      </div>
    </section>
  );
}

const styles: Record<string, React.CSSProperties> = {
  section: { padding: "44px 22px 70px", maxWidth: 980, margin: "0 auto" },
  h2: { marginTop: 0, marginBottom: 10 },
  p: { color: "#333", marginTop: 0, lineHeight: 1.6 },
  card: { border: "1px solid #eee", borderRadius: 14, padding: 16, background: "white" },
  line: { margin: "10px 0", color: "#222" },
  link: { fontWeight: 800, textDecoration: "none" },
};
