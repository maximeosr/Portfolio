import type React from "react";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <section id="projects" style={styles.section}>
      <h2 style={styles.h2}>Projets Académiques</h2>
      <p style={styles.p}>
        Une sélection de projets académiques et personnels (Systèmes embarqués, IA , web). 
      </p>

      <div style={styles.grid}>
        {projects.map((p) => (
          <ProjectCard key={p.title} p={p} />
        ))}
      </div>
    </section>
  );
}

const styles: Record<string, React.CSSProperties> = {
  section: { padding: "44px 22px", maxWidth: 980, margin: "0 auto" },
  h2: { marginTop: 0, marginBottom: 10 },
  p: { color: "#333", marginTop: 0, lineHeight: 1.6, marginBottom: 14 },
  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 14 },
};
