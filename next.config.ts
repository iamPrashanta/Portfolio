import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

const nextConfig: NextConfig = {
  // Hide X-Powered-By header for security obscurity
  poweredByHeader: false,

  // Allow Next.js image optimizer to handle external images
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**" },
    ],
  },

  // Set strict HTTP security headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
          },
          {
            key: "X-Permitted-Cross-Domain-Policies",
            value: "none",
          },
          {
            // COOP isolates the browsing context from cross-origin windows
            key: "Cross-Origin-Opener-Policy",
            value: "same-origin-allow-popups",
          },
          {
            // Content Security Policy
            // Allows: self, Google Fonts, Google Analytics, Vercel Speed Insights
            // Blocks: inline scripts (except GA inline), unknown origins
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              // 'unsafe-eval' required by React dev mode for stack trace reconstruction — never used in production
              // Cloudflare Insights beacon is injected at CDN level — must be allowed
              `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""} https://www.googletagmanager.com https://www.google-analytics.com https://static.cloudflareinsights.com`,
              // 'unsafe-inline' required for Tailwind/CSS-in-JS styles
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com data:",
              // https: allows external logos on skill pages (official tech sites, CDNs)
              "img-src 'self' data: blob: https:",
              "connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://www.googletagmanager.com https://cloudflareinsights.com",
              "media-src 'self'",
              "object-src 'none'",
              // Allows popups to external links (GitHub, LinkedIn, official skill sites)
              "frame-src 'none'",
              "base-uri 'self'",
              "form-action 'self'",
              // Consistent with X-Frame-Options: SAMEORIGIN removed above
              "frame-ancestors 'none'",
              "upgrade-insecure-requests",
            ].join("; "),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
