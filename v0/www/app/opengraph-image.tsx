import { ImageResponse } from "next/og"

export const alt =
  "Ricardo Jorge, AI Product Engineer focused on product engineering, AI systems, and data visualisation"

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = "image/png"

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background: "#f8f8f5",
          color: "#171717",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            opacity: 0.38,
            backgroundImage:
              "linear-gradient(#deded8 1px, transparent 1px), linear-gradient(90deg, #deded8 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 28,
            display: "flex",
            border: "1px solid #cecec7",
          }}
        />

        <div
          style={{
            position: "relative",
            width: "100%",
            padding: "60px 68px 58px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: 17,
              letterSpacing: 3,
              textTransform: "uppercase",
              color: "#66665f",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                style={{
                  width: 10,
                  height: 10,
                  marginRight: 13,
                  display: "flex",
                  borderRadius: "50%",
                  background: "#171717",
                }}
              />
              Curriculum Vitae
            </div>
            <div style={{ display: "flex" }}>Lisbon · Portugal</div>
          </div>

          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  display: "flex",
                  fontSize: 82,
                  lineHeight: 1,
                  letterSpacing: -4,
                  fontWeight: 600,
                }}
              >
                Ricardo Jorge
              </div>
              <div
                style={{
                  display: "flex",
                  marginTop: 22,
                  fontSize: 36,
                  lineHeight: 1.2,
                  letterSpacing: -1.2,
                  color: "#5f5f59",
                }}
              >
                AI Product Engineer
              </div>
            </div>

            <div
              style={{
                width: 132,
                height: 132,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid #bdbdb5",
                borderRadius: 66,
                background: "rgba(248, 248, 245, 0.82)",
                fontSize: 32,
                letterSpacing: -1,
              }}
            >
              RJ
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingTop: 24,
              borderTop: "1px solid #bdbdb5",
              fontSize: 18,
              color: "#55554f",
            }}
          >
            <div style={{ display: "flex", letterSpacing: 0.2 }}>
              Product engineering · AI systems · Data visualisation
            </div>
            <div
              style={{
                display: "flex",
                padding: "10px 16px",
                border: "1px solid #bdbdb5",
                borderRadius: 999,
                background: "rgba(248, 248, 245, 0.86)",
                fontSize: 16,
                letterSpacing: 1.2,
              }}
            >
              cv.rj11.io
            </div>
          </div>
        </div>
      </div>
    ),
    size
  )
}
