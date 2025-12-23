import type React from "react";

export default function About() {
  return (
    <section id="about" style={styles.section}>
      <h2 style={styles.h2}>À propos de moi</h2>

      <p style={styles.p}>
        Je suis étudiant en 4ᵉ année à l’ESIEA, j'ai chosis la majeure SEA (Systèmes Embarqués et Autonomes)
        pour approfondir mes compétences en systèmes intelligents et en développement logiciel.
      </p>

      <p style={styles.p}>
        Pratiquant la musculation depuis 5 ans, j’ai développé une grande discipline et rigueur que j'applique constamment dans mon travail. 
        Curieux et motivé, j'aime relever des défis techniques, construire des solutions concrètes et travailler en équipe.
      </p>

      <p style={styles.p}>
        Je recherche un stage technique de 4 à 6 mois à partir d’avril 2026, dans un environnement
        stimulant où je pourrai mettre à profit mon savoir-faire et progresser sur des projets innovants.
      </p>
    </section>
  );
}

const styles: Record<string, React.CSSProperties> = {
  section: { padding: "44px 22px", maxWidth: 980, margin: "0 auto" },
  h2: { marginTop: 0, marginBottom: 12 },
  p: { color: "#333", lineHeight: 1.7, margin: "0 0 10px" },
};
