export default function Home() {
  return (
    <main
      style={{
        backgroundColor: "#0A14CC",
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "clamp(24px, 5vw, 64px)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "700px" }}>
        <h1
          style={{
            fontFamily: "var(--font-tiny5)",
            fontSize: "clamp(36px, 6vw, 80px)",
            color: "#ffffff",
            lineHeight: 1,
            letterSpacing: "0.02em",
          }}
        >
          Granular Labs
        </h1>
        <p
          style={{
            fontFamily: "var(--font-kode-mono)",
            fontSize: "clamp(11px, 1.2vw, 15px)",
            color: "#ffffff",
            lineHeight: 1.6,
            opacity: 0.9,
          }}
        >
          We are building a modular, high speed semiconductor package
          <br />
          that unlocks terabytes/second of memory bandwidth outside the datacenter.
        </p>
      </div>

      <div>
        <a
          href="mailto:hello@granularlabs.com"
          style={{
            fontFamily: "var(--font-kode-mono)",
            fontSize: "clamp(11px, 1.1vw, 14px)",
            color: "#ffffff",
            textDecoration: "none",
            letterSpacing: "0.12em",
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          CONTACT US →
        </a>
      </div>

      <div
        style={{
          position: "absolute",
          right: "clamp(24px, 5vw, 64px)",
          bottom: "-0.25em",
          fontFamily: "var(--font-tiny5)",
          fontSize: "clamp(280px, 45vw, 600px)",
          color: "rgba(255,255,255,0.85)",
          lineHeight: 1,
          userSelect: "none",
        }}
      >
        G
      </div>
    </main>
  );
}
