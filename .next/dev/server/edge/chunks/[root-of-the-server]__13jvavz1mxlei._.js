(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push(["chunks/[root-of-the-server]__13jvavz1mxlei._.js",
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}),
"[externals]/node:buffer [external] (node:buffer, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}),
"[project]/src/middleware.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "config",
    ()=>config,
    "middleware",
    ()=>middleware
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/api/server.js [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/web/spec-extension/response.js [middleware-edge] (ecmascript)");
;
const locales = [
    "fr",
    "en",
    "ar"
];
const defaultLocale = "fr";
function getLocaleFromRequest(request) {
    const cookieLocale = request.cookies.get("NEXT_LOCALE")?.value.toLowerCase();
    if (cookieLocale && locales.includes(cookieLocale)) return cookieLocale;
    const accept = request.headers.get("accept-language") ?? "";
    for (const part of accept.split(",")){
        const tag = part.split(";")[0]?.trim().toLowerCase() ?? "";
        const base = tag.split("-")[0];
        if (base && locales.includes(base)) return base;
    }
    return defaultLocale;
}
function middleware(request) {
    const { pathname } = request.nextUrl;
    // Fichiers internes / assets : ne pas rediriger.
    if (pathname.startsWith("/_next") || pathname.startsWith("/api") || pathname.includes(".") // fichiers (favicon, images...)
    ) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next();
    }
    const pathnameLocale = pathname.split("/")[1];
    if (locales.includes(pathnameLocale)) {
        const response = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next();
        response.cookies.set("NEXT_LOCALE", pathnameLocale, {
            path: "/",
            maxAge: 60 * 60 * 24 * 365,
            sameSite: "lax"
        });
        return response;
    }
    const locale = getLocaleFromRequest(request);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL(`/${locale}${pathname === "/" ? "" : pathname}`, request.url));
}
const config = {
    matcher: [
        "/((?!_next|api|.*\\..*).*)"
    ]
};
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__13jvavz1mxlei._.js.map