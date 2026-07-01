import { ImageResponse } from "next/og";

export const alt = "TalentOS — El sistema operativo de tu talento";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Imagen para compartir (WhatsApp, LinkedIn, X) con la identidad de marca.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0D1F4E",
          padding: "72px",
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        {/* Glows de marca */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(55% 60% at 18% 0%, rgba(27,79,220,0.55), transparent 60%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(40% 55% at 95% 100%, rgba(232,80,58,0.28), transparent 60%)",
          }}
        />

        {/* Marca */}
        <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
          <div
            style={{
              width: "52px",
              height: "52px",
              borderRadius: "16px",
              background: "#E8503A",
            }}
          />
          <div style={{ fontSize: "34px", color: "#fff", fontWeight: 700 }}>
            TalentOS
          </div>
        </div>

        {/* Titular */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: "82px",
              lineHeight: 1.04,
              color: "#ffffff",
              fontWeight: 800,
              letterSpacing: "-2px",
            }}
          >
            El sistema operativo
          </div>
          <div style={{ display: "flex", fontSize: "82px", fontWeight: 800, letterSpacing: "-2px" }}>
            <span style={{ color: "#ffffff" }}>de tu&nbsp;</span>
            <span style={{ color: "#E8503A" }}>talento.</span>
          </div>
          <div
            style={{
              marginTop: "30px",
              fontSize: "30px",
              color: "rgba(255,255,255,0.82)",
            }}
          >
            Headhunting · Gestión del Desempeño · Desarrollo Humano
          </div>
        </div>

        {/* Pie */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "24px",
            color: "rgba(255,255,255,0.6)",
          }}
        >
          <div>talentos.work</div>
          <div>Guadalajara · todo México · habilitado por IA</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
