import { NextRequest, NextResponse } from "next/server";

// ---------------------------------------------------------------------------
// Blocked user agents — scrapers, exploit scanners, and malicious bots
// ---------------------------------------------------------------------------
const BLOCKED_UA_PATTERNS = [
  /sqlmap/i,
  /nikto/i,
  /nessus/i,
  /masscan/i,
  /zgrab/i,
  /nuclei/i,
  /curl\/7\.[0-4]/i, // very old curl versions used by scanners
  /python-requests\/2\.[0-1]/i, // very old requests lib
  /Go-http-client\/1\.0/i,
  /libwww-perl/i,
  /havij/i,
  /acunetix/i,
  /nmap/i,
  /dirbuster/i,
  /w3af/i,
  /openvas/i,
  /grabber/i,
  /wfuzz/i,
  /commix/i,
];

// ---------------------------------------------------------------------------
// Blocked path patterns — directory traversal, config probing, shell access
// ---------------------------------------------------------------------------
const BLOCKED_PATH_PATTERNS = [
  /\.\.\//,                         // directory traversal
  /\.\.%2[fF]/,                     // encoded traversal
  /%2e%2e%2f/i,                     // double-encoded traversal
  /\/etc\/passwd/i,
  /\/etc\/shadow/i,
  /\/proc\/self/i,
  /\.env(\.|$)/i,                   // .env file probing
  /\.git\//i,                       // git repo probing
  /\.svn\//i,
  /\/wp-admin/i,                    // WordPress probing
  /\/wp-login/i,
  /\/phpmyadmin/i,
  /\/adminer/i,
  /\/xmlrpc\.php/i,
  /\/shell\.php/i,
  /\/cmd\.php/i,
  /\/eval-stdin\.php/i,
  /\/config\.php/i,
  /\/(web|app)\.config$/i,
  /\/web\.xml/i,
  /\/composer\.(json|lock)/i,
  /\/package\.json/i,
  /\/yarn\.lock/i,
  /\/dockerfile/i,
  /\/docker-compose/i,
  /\/(\.ssh|\.aws|\.kube)\//i,
  /\/backup/i,
  /\.(bak|old|orig|save|swp)$/i,
  /<script/i,                        // XSS in URL
  /javascript:/i,
  /vbscript:/i,
  /data:text\/html/i,
  /\bUNION\b.*\bSELECT\b/i,         // SQL injection
  /\bDROP\b.*\bTABLE\b/i,
  /\bEXEC\b.*\bsp_/i,
];

export function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  const fullPath = pathname + search;
  const ua = request.headers.get("user-agent");

  // Block empty/missing user agent (most automated scanners omit it)
  if (!ua || ua.trim().length === 0) {
    return new NextResponse("Forbidden", { status: 403 });
  }

  // Block malicious user agents
  if (BLOCKED_UA_PATTERNS.some((pattern) => pattern.test(ua))) {
    return new NextResponse("Forbidden", { status: 403 });
  }

  // Block path traversal and malicious path patterns
  if (BLOCKED_PATH_PATTERNS.some((pattern) => pattern.test(fullPath))) {
    return new NextResponse("Forbidden", { status: 403 });
  }

  return NextResponse.next();
}

export const config = {
  // Run on all routes EXCEPT Next.js internals and static files
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|icon|apple-icon|robots.txt|sitemap.xml).*)",
  ],
};
