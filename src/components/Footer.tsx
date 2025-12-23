export default function Footer() {
    const year = new Date().getFullYear();
    return (
      <footer style={styles.footer}>
        <p style={styles.p}>© {year} Maxime Osorio de Abreu — Portfolio</p>
      </footer>
    );
  }
  
  const styles: Record<string, React.CSSProperties> = {
    footer: { padding: "28px 22px", borderTop: "1px solid #eee", marginTop: 30 },
    p: { margin: 0, textAlign: "center", color: "#444" },
  };
  