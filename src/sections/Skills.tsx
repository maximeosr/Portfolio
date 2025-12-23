import type React from "react";

const skills = {
  "Développement": ["Python", "C", "C++", "Java", "JavaScript", "TypeScript"],
  "Web": ["React", "HTML", "CSS", "Vite"],
  "IA": ["Machine Learning (bases)", "OpenCV"],
  "Systèmes": ["Raspberry Pi", "Capteurs", "Intégration"],
  "Outils & Méthodes": ["Git/GitHub/GitLab", "Jira", "Agile / Scrum", "VS Code"],
};

export default function Skills() {
  return (
    <section id="skills" style={styles.section}>
      <h2 style={styles.h2}>Compétences</h2>

      <div style={styles.grid}>
        {Object.entries(skills).map(([cat, items]) => (
          <div key={cat} style={styles.card}>
            <h3 style={styles.h3}>{cat}</h3>
            <div style={styles.wrap}>
              {items.map((s) => (
                <span key={s} style={styles.badge}>
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles: Record<string, React.CSSProperties> = {
  section: { padding: "44px 22px", maxWidth: 980, margin: "0 auto" },
  h2: { marginTop: 0, marginBottom: 12 },
  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 14 },
  card: { border: "1px solid #eee", borderRadius: 14, padding: 16, background: "white" },
  h3: { marginTop: 0, marginBottom: 10 },
  wrap: { display: "flex", flexWrap: "wrap", gap: 8 },
  badge: { border: "1px solid #ddd", borderRadius: 999, padding: "5px 10px", fontSize: 12 },
};
