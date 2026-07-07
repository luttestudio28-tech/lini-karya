import { ImageResponse } from "next/og";

// Branded Open Graph image, generated at build time.
// Replaces the previously-referenced (and missing) /og-image.jpg.
export const alt = "Lini Karya — Studio Arsitektur Digital & Jasa Website Bandung";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0a0a0a",
          color: "#fafafa",
          padding: "80px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 22,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#ff5c00",
            fontWeight: 700,
          }}
        >
          <span>Lini Karya Studio</span>
          <span style={{ color: "#71717a" }}>Bandung, Indonesia</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 104,
              fontWeight: 800,
              lineHeight: 1,
              letterSpacing: -4,
              textTransform: "uppercase",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>Solusi Web</span>
            <span style={{ color: "#ff5c00" }}>Bisnis Anda</span>
            <span style={{ color: "#71717a" }}>Naik Level</span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: 26,
            color: "#a1a1aa",
          }}
        >
          <span style={{ maxWidth: 720 }}>
            Studio arsitektur digital & jasa pembuatan website untuk UMKM Indonesia.
          </span>
          <span style={{ color: "#fafafa", fontWeight: 700 }}>linikarya.com</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
