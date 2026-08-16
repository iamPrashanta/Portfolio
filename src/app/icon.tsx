import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "black",
          color: "white",
        }}
      >
        <svg width="24" height="24" viewBox="0 0 120 120" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <rect x="24" y="24" width="20" height="72" rx="10" />
          <rect x="44" y="24" width="36" height="20" rx="10" />
          <rect x="76" y="24" width="20" height="48" rx="10" />
          <rect x="44" y="52" width="20" height="20" rx="10" />
          <circle cx="86" cy="86" r="10" />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
