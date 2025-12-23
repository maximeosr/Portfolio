import type React from "react";
import type { Project } from "../data/projects";

export default function ProjectCard({ p }: { p: Project }) {
  return (
    <article style={styles.card}>
      <div style={styles.topRow}>
        <div>
          <h3 style={styles.title}>{p.title}</h3>
          {(p.subtitle || p.period) && (
            <p style={styles.meta}>
              {p.subtitle ? <span>{p.subtitle}</span> : null}
              {p.subtitle && p.period ? <span> • </span> : null}
              {p.period ? <span>{p.period}</span> : null}
            </p>
          )}
        </div>
      </div>

      <p style={styles.desc}>{p.description}</p>

      {p.highlights?.length ? (
        <ul style={styles.ul}>
          {p.highlights.map((h) => (
            <li key={h} style={styles.li}>
              {h}
            </li>
          ))}
        </ul>
      ) : null}

      <div style={styles.techWrap}>
        {p.tech.map((t) => (
          <span key={t} style={styles.badge}>
            {t}
          </span>
        ))}
      </div>

      <div style={styles.links}>
        {p.github && (
          <a href={p.github} target="_blank" rel="noreferrer" style={styles.a}>
            GitHub
          </a>
        )}
        {p.demo && (
          <a href={p.demo} target="_blank" rel="noreferrer" style={styles.a}>
            Démo
          </a>
        )}
      </div>
    </article>
  );
}
const styles: Record<string, React.CSSProperties> = {
    card: {
      border: "1px solid rgba(15,23,42,0.10)",
      borderRadius: 18,
      padding: 16,
      background: "rgba(255,255,255,0.85)",
      boxShadow: "0 10px 26px rgba(2,6,23,0.06)",
      transition: "transform 120ms ease, box-shadow 120ms ease",
    },
    topRow: { display: "flex", justifyContent: "space-between", gap: 12 },
    title: { margin: 0, marginBottom: 6, lineHeight: 1.25 },
    meta: { margin: 0, color: "#475569", fontSize: 13 },
    desc: { margin: "12px 0", color: "#334155", lineHeight: 1.6 },
    ul: { margin: "0 0 12px 18px", color: "#334155" },
    li: { marginBottom: 6 },
    techWrap: { display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 12 },
    badge: {
        background: "rgba(0,0,0,0.04)",
        border: "1px solid rgba(0,0,0,0.12)",
    },
      
    links: { display: "flex", gap: 12 },
    a: {
        color: "#111827",
        fontWeight: 900,
    },
};
