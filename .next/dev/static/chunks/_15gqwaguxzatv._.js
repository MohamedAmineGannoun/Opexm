(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
(()=>{"use strict";return[
"[project]/node_modules/lucide-react/dist/esm/Icon.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Icon
]);
/**
 * @license lucide-react v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$mergeClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/shared/src/utils/mergeClasses.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$build$2f$buildLucideIconForReact$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/shared/src/build/buildLucideIconForReact.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$hasA11yProp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/shared/src/utils/hasA11yProp.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/context.mjs [app-client] (ecmascript)");
"use strict";
"use client";
;
;
;
;
;
const Icon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ color, size, width, height, strokeWidth, absoluteStrokeWidth, nonScalingStroke, className = "", children, iconNode = [], icon = {
    node: iconNode,
    aliases: [],
    size: 24
}, ...rest }, ref)=>{
    const { size: contextSize = 24, strokeWidth: contextStrokeWidth = 2, absoluteStrokeWidth: contextAbsoluteStrokeWidth = false, nonScalingStroke: contextNonScalingStroke = false, color: contextColor = "currentColor", className: contextClass = "" } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLucideContext"])() ?? {};
    const hasAccessibleProp = Boolean(children) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$hasA11yProp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasA11yProp"])(rest);
    const [name, svgAttributes, builtIconNode = []] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$build$2f$buildLucideIconForReact$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(icon, {
        color: color ?? contextColor,
        width: width ?? size ?? contextSize,
        height: height ?? size ?? contextSize,
        strokeWidth: strokeWidth ?? contextStrokeWidth,
        absoluteStrokeWidth: absoluteStrokeWidth ?? contextAbsoluteStrokeWidth,
        nonScalingStroke: nonScalingStroke ?? contextNonScalingStroke,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$mergeClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeClasses"])(contextClass, className),
        hasA11yProp: hasAccessibleProp,
        attributes: rest
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(name, {
        ref,
        ...svgAttributes
    }, [
        ...builtIconNode.map(([tag, attrs])=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(tag, attrs)),
        ...Array.isArray(children) ? children : [
            children
        ]
    ]);
});
;
}),
"[project]/node_modules/lucide-react/dist/esm/context.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LucideProvider",
    ()=>LucideProvider,
    "useLucideContext",
    ()=>useLucideContext
]);
/**
 * @license lucide-react v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"use strict";
"use client";
;
const LucideContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({});
function LucideProvider({ children, size, color, strokeWidth, absoluteStrokeWidth, nonScalingStroke, className }) {
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "LucideProvider.useMemo[value]": ()=>({
                size,
                color,
                strokeWidth,
                absoluteStrokeWidth,
                nonScalingStroke,
                className
            })
    }["LucideProvider.useMemo[value]"], [
        size,
        color,
        strokeWidth,
        absoluteStrokeWidth,
        nonScalingStroke,
        className
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(LucideContext.Provider, {
        value
    }, children);
}
const useLucideContext = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(LucideContext);
;
}),
"[project]/node_modules/lucide-react/dist/esm/createLucideIcon.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>createLucideIcon
]);
/**
 * @license lucide-react v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$toLucideIconData$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/shared/src/utils/toLucideIconData.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$toPascalCase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/shared/src/utils/toPascalCase.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/Icon.mjs [app-client] (ecmascript)");
;
;
;
;
function createLucideIcon(iconDataOrName, iconNode = [], aliases = []) {
    const iconData = typeof iconDataOrName === "string" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$toLucideIconData$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toLucideIconData"])(iconDataOrName, iconNode, aliases) : iconDataOrName;
    const Component = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            ref,
            icon: iconData,
            className,
            ...props
        }));
    if (iconData.name) {
        Component.displayName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$toPascalCase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toPascalCase"])(iconData.name);
    }
    return Component;
}
;
}),
"[project]/node_modules/lucide-react/dist/esm/icons/check.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconData",
    ()=>__iconData,
    "default",
    ()=>Check
]);
/**
 * @license lucide-react v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.mjs [app-client] (ecmascript)");
;
const __iconData = {
    name: "check",
    size: 24,
    node: [
        [
            "path",
            {
                d: "M20 6 9 17l-5-5",
                key: "1gmf2c"
            }
        ]
    ]
};
__iconData.node;
const Check = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__iconData);
;
}),
"[project]/node_modules/lucide-react/dist/esm/icons/check.mjs [app-client] (ecmascript) <export default as Check>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Check",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.mjs [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconData",
    ()=>__iconData,
    "default",
    ()=>ChevronDown
]);
/**
 * @license lucide-react v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.mjs [app-client] (ecmascript)");
;
const __iconData = {
    name: "chevron-down",
    size: 24,
    node: [
        [
            "path",
            {
                d: "m6 9 6 6 6-6",
                key: "qrunsl"
            }
        ]
    ]
};
__iconData.node;
const ChevronDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__iconData);
;
}),
"[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.mjs [app-client] (ecmascript) <export default as ChevronDown>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChevronDown",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.mjs [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/code-xml.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconData",
    ()=>__iconData,
    "default",
    ()=>CodeXml
]);
/**
 * @license lucide-react v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.mjs [app-client] (ecmascript)");
;
const __iconData = {
    name: "code-xml",
    size: 24,
    node: [
        [
            "path",
            {
                d: "m18 16 4-4-4-4",
                key: "1inbqp"
            }
        ],
        [
            "path",
            {
                d: "m6 8-4 4 4 4",
                key: "15zrgr"
            }
        ],
        [
            "path",
            {
                d: "m14.5 4-5 16",
                key: "e7oirm"
            }
        ]
    ],
    aliases: [
        "code-2"
    ]
};
__iconData.node;
const CodeXml = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__iconData);
;
}),
"[project]/node_modules/lucide-react/dist/esm/icons/code-xml.mjs [app-client] (ecmascript) <export default as Code2>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Code2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/code-xml.mjs [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/globe.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconData",
    ()=>__iconData,
    "default",
    ()=>Globe
]);
/**
 * @license lucide-react v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.mjs [app-client] (ecmascript)");
;
const __iconData = {
    name: "globe",
    size: 24,
    node: [
        [
            "circle",
            {
                cx: "12",
                cy: "12",
                r: "10",
                key: "1mglay"
            }
        ],
        [
            "path",
            {
                d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",
                key: "13o1zl"
            }
        ],
        [
            "path",
            {
                d: "M2 12h20",
                key: "9i4pu4"
            }
        ]
    ]
};
__iconData.node;
const Globe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__iconData);
;
}),
"[project]/node_modules/lucide-react/dist/esm/icons/globe.mjs [app-client] (ecmascript) <export default as Globe>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Globe",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.mjs [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/menu.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconData",
    ()=>__iconData,
    "default",
    ()=>Menu
]);
/**
 * @license lucide-react v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.mjs [app-client] (ecmascript)");
;
const __iconData = {
    name: "menu",
    size: 24,
    node: [
        [
            "path",
            {
                d: "M4 5h16",
                key: "1tepv9"
            }
        ],
        [
            "path",
            {
                d: "M4 12h16",
                key: "1lakjw"
            }
        ],
        [
            "path",
            {
                d: "M4 19h16",
                key: "1djgab"
            }
        ]
    ]
};
__iconData.node;
const Menu = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__iconData);
;
}),
"[project]/node_modules/lucide-react/dist/esm/icons/menu.mjs [app-client] (ecmascript) <export default as Menu>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Menu",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.mjs [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconData",
    ()=>__iconData,
    "default",
    ()=>X
]);
/**
 * @license lucide-react v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.mjs [app-client] (ecmascript)");
;
const __iconData = {
    name: "x",
    size: 24,
    node: [
        [
            "path",
            {
                d: "M18 6 6 18",
                key: "1bl5f8"
            }
        ],
        [
            "path",
            {
                d: "m6 6 12 12",
                key: "d8bk6v"
            }
        ]
    ]
};
__iconData.node;
const X = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__iconData);
;
}),
"[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "X",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/shared/src/build/buildLucideIconForReact.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>buildLucideIconForReact
]);
/**
 * @license lucide-react v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$build$2f$buildLucideIconNode$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/shared/src/build/buildLucideIconNode.mjs [app-client] (ecmascript)");
;
function buildLucideIconForReact(icon, params = {}) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$build$2f$buildLucideIconNode$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(icon, {
        ...params,
        attributeNames: {
            ...params.attributeNames,
            class: "className",
            "stroke-width": "strokeWidth",
            "stroke-linecap": "strokeLinecap",
            "stroke-linejoin": "strokeLinejoin",
            "vector-effect": "vectorEffect"
        }
    });
}
;
}),
"[project]/node_modules/lucide-react/dist/esm/shared/src/build/buildLucideIconNode.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>buildLucideIconNode
]);
/**
 * @license lucide-react v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$build$2f$defaultAttributes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/shared/src/build/defaultAttributes.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$mergeClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/shared/src/utils/mergeClasses.mjs [app-client] (ecmascript)");
;
;
function isDefined(value) {
    return value !== null && value !== void 0;
}
function buildLucideIconNode(icon, params = {}) {
    const attributeNames = params.attributeNames ?? {};
    const getAttributeName = (attributeName)=>attributeNames[attributeName] ?? attributeName;
    const viewBoxWidth = icon.size ?? icon.width ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$build$2f$defaultAttributes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]["width"];
    const viewBoxHeight = icon.size ?? icon.height ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$build$2f$defaultAttributes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]["height"];
    const aliasClassNames = icon.aliases?.filter((alias)=>typeof alias === "string" && alias.trim() !== "").map((alias)=>`lucide-${alias}`) ?? [];
    const iconClassNames = [
        ...icon.name ? [
            `lucide-${icon.name}`
        ] : [],
        ...aliasClassNames
    ];
    const classNamesFromClassName = params.className?.split(" ").filter(Boolean) ?? [];
    const className = params.includeDefaultClasses === false ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$mergeClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeClasses"])(...classNamesFromClassName) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$mergeClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeClasses"])("lucide", ...iconClassNames, ...classNamesFromClassName);
    const calculatedStrokeWidth = params.absoluteStrokeWidth ? Number(params.strokeWidth ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$build$2f$defaultAttributes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]["stroke-width"]) * Number(icon.size ?? icon.width ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$build$2f$defaultAttributes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]["width"]) / Number(params.size ?? params.width ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$build$2f$defaultAttributes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]["width"]) : params.strokeWidth ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$build$2f$defaultAttributes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]["stroke-width"];
    const attributes = {
        ...Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$build$2f$defaultAttributes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]).reduce((attrs, [attrName, value])=>{
            attrs[getAttributeName(attrName)] = value;
            return attrs;
        }, {}),
        ..."color" in params && params.color && {
            [getAttributeName("stroke")]: params.color
        },
        ..."size" in params && isDefined(params.size) && {
            [getAttributeName("width")]: params.size,
            [getAttributeName("height")]: params.size
        },
        ..."width" in params && isDefined(params.width) && {
            [getAttributeName("width")]: params.width
        },
        ..."height" in params && isDefined(params.height) && {
            [getAttributeName("height")]: params.height
        },
        [getAttributeName("stroke-width")]: calculatedStrokeWidth,
        ...className && {
            [getAttributeName("class")]: className
        },
        [getAttributeName("viewBox")]: `0 0 ${viewBoxWidth} ${viewBoxHeight}`,
        ...params.hasA11yProp === false ? {
            [getAttributeName("aria-hidden")]: "true"
        } : {},
        ..."attributes" in params && params.attributes
    };
    return [
        "svg",
        attributes,
        icon.node.map((child)=>{
            const [name, attrs, children] = child;
            const nextAttrs = params.nonScalingStroke ? {
                [getAttributeName("vector-effect")]: "non-scaling-stroke",
                ...attrs
            } : attrs;
            return children ? [
                name,
                nextAttrs,
                children
            ] : [
                name,
                nextAttrs
            ];
        })
    ];
}
;
}),
"[project]/node_modules/lucide-react/dist/esm/shared/src/build/defaultAttributes.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>defaultAttributes
]);
/**
 * @license lucide-react v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const defaultAttributes = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    "stroke-width": 2,
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
};
;
}),
"[project]/node_modules/lucide-react/dist/esm/shared/src/utils/hasA11yProp.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hasA11yProp",
    ()=>hasA11yProp
]);
/**
 * @license lucide-react v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const hasA11yProp = (props)=>{
    for(const prop in props){
        if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
            return true;
        }
    }
    return false;
};
;
}),
"[project]/node_modules/lucide-react/dist/esm/shared/src/utils/mergeClasses.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mergeClasses",
    ()=>mergeClasses
]);
/**
 * @license lucide-react v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const mergeClasses = (...classes)=>classes.filter((className, index, array)=>{
        return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
    }).join(" ").trim();
;
}),
"[project]/node_modules/lucide-react/dist/esm/shared/src/utils/toCamelCase.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "toCamelCase",
    ()=>toCamelCase
]);
/**
 * @license lucide-react v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const toCamelCase = (string)=>{
    let out = "";
    let upperNext = false;
    for (const ch of string){
        if (ch === "-" || ch === "_" || ch <= " ") {
            upperNext = out.length > 0;
            continue;
        }
        if (out.length === 0) {
            out += ch.toLowerCase();
        } else {
            out += upperNext ? ch.toUpperCase() : ch;
        }
        upperNext = false;
    }
    return out;
};
;
}),
"[project]/node_modules/lucide-react/dist/esm/shared/src/utils/toKebabCase.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "toKebabCase",
    ()=>toKebabCase
]);
/**
 * @license lucide-react v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const toKebabCase = (string)=>string?.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
;
}),
"[project]/node_modules/lucide-react/dist/esm/shared/src/utils/toLucideIconData.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "toLucideIconData",
    ()=>toLucideIconData
]);
/**
 * @license lucide-react v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$toKebabCase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/shared/src/utils/toKebabCase.mjs [app-client] (ecmascript)");
;
function toLucideIconData(iconName, iconNode, aliases = []) {
    if (iconNode == null) {
        throw new Error("[lucide]: iconNode is required when icon name is used");
    }
    return {
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$toKebabCase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toKebabCase"])(iconName),
        size: 24,
        node: iconNode,
        ...aliases.length > 0 ? {
            aliases
        } : {}
    };
}
;
}),
"[project]/node_modules/lucide-react/dist/esm/shared/src/utils/toPascalCase.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "toPascalCase",
    ()=>toPascalCase
]);
/**
 * @license lucide-react v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$toCamelCase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/shared/src/utils/toCamelCase.mjs [app-client] (ecmascript)");
;
const toPascalCase = (string)=>{
    const camelCase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$toCamelCase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toCamelCase"])(string);
    return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
;
}),
"[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    default: null,
    useLinkStatus: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    /**
 * A React component that extends the HTML `<a>` element to provide
 * [prefetching](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#2-prefetching)
 * and client-side navigation. This is the primary way to navigate between routes in Next.js.
 *
 * @remarks
 * - Prefetching is only enabled in production.
 *
 * @see https://nextjs.org/docs/app/api-reference/components/link
 */ default: function() {
        return LinkComponent;
    },
    useLinkStatus: function() {
        return useLinkStatus;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _formaturl = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/router/utils/format-url.js [app-client] (ecmascript)");
const _approutercontextsharedruntime = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)");
const _usemergedref = __turbopack_context__.r("[project]/node_modules/next/dist/client/use-merged-ref.js [app-client] (ecmascript)");
const _utils = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)");
const _addbasepath = __turbopack_context__.r("[project]/node_modules/next/dist/client/add-base-path.js [app-client] (ecmascript)");
const _routerreducertypes = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/router-reducer/router-reducer-types.js [app-client] (ecmascript)");
const _links = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/links.js [app-client] (ecmascript)");
const _islocalurl = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/router/utils/is-local-url.js [app-client] (ecmascript)");
const _types = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/segment-cache/types.js [app-client] (ecmascript)");
function isModifiedEvent(event) {
    const eventTarget = event.currentTarget;
    const target = eventTarget.getAttribute('target');
    return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
    event.nativeEvent && event.nativeEvent.which === 2;
}
function linkClicked(e, href, linkInstanceRef, replace, scroll, onNavigate, transitionTypes, prefetchIntent = 'none') {
    if (typeof window !== 'undefined') {
        const { nodeName } = e.currentTarget;
        // anchors inside an svg have a lowercase nodeName
        const isAnchorNodeName = nodeName.toUpperCase() === 'A';
        if (isAnchorNodeName && isModifiedEvent(e) || e.currentTarget.hasAttribute('download')) {
            // ignore click for browser’s default behavior
            return;
        }
        if (!(0, _islocalurl.isLocalURL)(href)) {
            if (replace) {
                // browser default behavior does not replace the history state
                // so we need to do it manually
                e.preventDefault();
                location.replace(href);
            }
            // ignore click for browser’s default behavior
            return;
        }
        e.preventDefault();
        if (onNavigate) {
            let isDefaultPrevented = false;
            onNavigate({
                preventDefault: ()=>{
                    isDefaultPrevented = true;
                }
            });
            if (isDefaultPrevented) {
                return;
            }
        }
        const { navigate } = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/navigator.js [app-client] (ecmascript)");
        navigate(href, replace ? 'replace' : 'push', scroll === false ? _routerreducertypes.ScrollBehavior.NoScroll : _routerreducertypes.ScrollBehavior.Default, linkInstanceRef.current, transitionTypes, prefetchIntent);
    }
}
function formatStringOrUrl(urlObjOrString) {
    if (typeof urlObjOrString === 'string') {
        return urlObjOrString;
    }
    return (0, _formaturl.formatUrl)(urlObjOrString);
}
function LinkComponent(props) {
    const [linkStatus, setOptimisticLinkStatus] = (0, _react.useOptimistic)(_links.IDLE_LINK_STATUS);
    let children;
    const linkInstanceRef = (0, _react.useRef)(null);
    const { href: hrefProp, as: asProp, children: childrenProp, prefetch: prefetchProp = null, passHref, replace, shallow, scroll, onClick, onMouseEnter: onMouseEnterProp, onTouchStart: onTouchStartProp, legacyBehavior = false, onNavigate, transitionTypes, ref: forwardedRef, unstable_dynamicOnHover, ...restProps } = props;
    children = childrenProp;
    if (legacyBehavior && (typeof children === 'string' || typeof children === 'number')) {
        children = /*#__PURE__*/ (0, _jsxruntime.jsx)("a", {
            children: children
        });
    }
    const router = _react.default.useContext(_approutercontextsharedruntime.AppRouterContext);
    const prefetchEnabled = prefetchProp !== false;
    const prefetchIntent = prefetchProp === false ? 'none' : prefetchProp === true ? 'full' : 'auto';
    const fetchStrategy = prefetchIntent !== 'none' ? getFetchStrategyFromPrefetchIntent(prefetchIntent) : _types.FetchStrategy.PPR;
    if ("TURBOPACK compile-time truthy", 1) {
        function createPropError(args) {
            return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (typeof window !== 'undefined' ? "\nOpen your browser's console to view the Component stack trace." : ''));
        }
        // TypeScript trick for type-guarding:
        const requiredPropsGuard = {
            href: true
        };
        const requiredProps = Object.keys(requiredPropsGuard);
        requiredProps.forEach((key)=>{
            if (key === 'href') {
                if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
                    throw createPropError({
                        key,
                        expected: '`string` or `object`',
                        actual: props[key] === null ? 'null' : typeof props[key]
                    });
                }
            } else {
                // TypeScript trick for type-guarding:
                const _ = key;
            }
        });
        // TypeScript trick for type-guarding:
        const optionalPropsGuard = {
            as: true,
            replace: true,
            scroll: true,
            shallow: true,
            passHref: true,
            prefetch: true,
            unstable_dynamicOnHover: true,
            onClick: true,
            onMouseEnter: true,
            onTouchStart: true,
            legacyBehavior: true,
            onNavigate: true,
            transitionTypes: true
        };
        const optionalProps = Object.keys(optionalPropsGuard);
        optionalProps.forEach((key)=>{
            const valType = typeof props[key];
            if (key === 'as') {
                if (props[key] && valType !== 'string' && valType !== 'object') {
                    throw createPropError({
                        key,
                        expected: '`string` or `object`',
                        actual: valType
                    });
                }
            } else if (key === 'onClick' || key === 'onMouseEnter' || key === 'onTouchStart' || key === 'onNavigate') {
                if (props[key] && valType !== 'function') {
                    throw createPropError({
                        key,
                        expected: '`function`',
                        actual: valType
                    });
                }
            } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'legacyBehavior' || key === 'unstable_dynamicOnHover') {
                if (props[key] != null && valType !== 'boolean') {
                    throw createPropError({
                        key,
                        expected: '`boolean`',
                        actual: valType
                    });
                }
            } else if (key === 'prefetch') {
                if (props[key] != null && valType !== 'boolean' && props[key] !== 'auto') {
                    throw createPropError({
                        key,
                        expected: '`boolean | "auto"`',
                        actual: valType
                    });
                }
            } else if (key === 'transitionTypes') {
                if (props[key] != null && !Array.isArray(props[key])) {
                    throw createPropError({
                        key,
                        expected: '`string[]`',
                        actual: valType
                    });
                }
            } else {
                // TypeScript trick for type-guarding:
                const _ = key;
            }
        });
    }
    const resolvedHref = asProp || hrefProp;
    const formattedHref = formatStringOrUrl(resolvedHref);
    if ("TURBOPACK compile-time truthy", 1) {
        const { warnOnce } = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/utils/warn-once.js [app-client] (ecmascript)");
        if (props.locale) {
            warnOnce('The `locale` prop is not supported in `next/link` while using the `app` router. Read more about app router internalization: https://nextjs.org/docs/app/building-your-application/routing/internationalization');
        }
        if (!asProp) {
            let href;
            if (typeof resolvedHref === 'string') {
                href = resolvedHref;
            } else if (typeof resolvedHref === 'object' && typeof resolvedHref.pathname === 'string') {
                href = resolvedHref.pathname;
            }
            if (href) {
                const hasDynamicSegment = href.split('/').some((segment)=>segment.startsWith('[') && segment.endsWith(']'));
                if (hasDynamicSegment) {
                    throw new Error(`Dynamic href \`${href}\` found in <Link> while using the \`/app\` router, this is not supported. Read more: https://nextjs.org/docs/messages/app-dir-dynamic-href`);
                }
            }
        }
    }
    // This will return the first child, if multiple are provided it will throw an error
    let child;
    if (legacyBehavior) {
        if (children?.$$typeof === Symbol.for('react.lazy')) {
            throw new Error(`\`<Link legacyBehavior>\` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's \`<a>\` tag.`);
        }
        if ("TURBOPACK compile-time truthy", 1) {
            if (onClick) {
                console.warn(`"onClick" was passed to <Link> with \`href\` of \`${formattedHref}\` but "legacyBehavior" was set. The legacy behavior requires onClick be set on the child of next/link`);
            }
            if (onMouseEnterProp) {
                console.warn(`"onMouseEnter" was passed to <Link> with \`href\` of \`${formattedHref}\` but "legacyBehavior" was set. The legacy behavior requires onMouseEnter be set on the child of next/link`);
            }
            try {
                child = _react.default.Children.only(children);
            } catch (err) {
                if (!children) {
                    throw new Error(`No children were passed to <Link> with \`href\` of \`${formattedHref}\` but one child is required https://nextjs.org/docs/messages/link-no-children`);
                }
                throw new Error(`Multiple children were passed to <Link> with \`href\` of \`${formattedHref}\` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children` + (typeof window !== 'undefined' ? " \nOpen your browser's console to view the Component stack trace." : ''));
            }
        } else //TURBOPACK unreachable
        ;
    } else {
        if ("TURBOPACK compile-time truthy", 1) {
            if (children?.type === 'a') {
                throw new Error('Invalid <Link> with <a> child. Please remove <a> or use <Link legacyBehavior>.\nLearn more: https://nextjs.org/docs/messages/invalid-new-link-with-extra-anchor');
            }
        }
    }
    const childRef = legacyBehavior ? child && typeof child === 'object' && child.ref : forwardedRef;
    // Capture the Owner Stack during render so dev-only warnings emitted later
    // at navigation time can be associated with the JSX that created
    // this <Link>.
    const ownerStack = ("TURBOPACK compile-time truthy", 1) ? _react.default.useMemo({
        "LinkComponent.useMemo": ()=>{
            // Only capture when a warning might actually need it. Otherwise leave
            // it `undefined` so consumers can detect the opt-out and degrade
            // gracefully.
            if (fetchStrategy === _types.FetchStrategy.Full) {
                return _react.default.captureOwnerStack();
            }
            return undefined;
        }
    }["LinkComponent.useMemo"], [
        fetchStrategy
    ]) : "TURBOPACK unreachable";
    // Use a callback ref to attach an IntersectionObserver to the anchor tag on
    // mount. In the future we will also use this to keep track of all the
    // currently mounted <Link> instances, e.g. so we can re-prefetch them after
    // a revalidation or refresh.
    const observeLinkVisibilityOnMount = _react.default.useCallback({
        "LinkComponent.useCallback[observeLinkVisibilityOnMount]": (element)=>{
            if (router !== null) {
                linkInstanceRef.current = (0, _links.mountLinkInstance)(element, formattedHref, router, fetchStrategy, prefetchEnabled, setOptimisticLinkStatus, ownerStack);
            }
            return ({
                "LinkComponent.useCallback[observeLinkVisibilityOnMount]": ()=>{
                    if (linkInstanceRef.current) {
                        (0, _links.unmountLinkForCurrentNavigation)(linkInstanceRef.current);
                        linkInstanceRef.current = null;
                    }
                    (0, _links.unmountPrefetchableInstance)(element);
                }
            })["LinkComponent.useCallback[observeLinkVisibilityOnMount]"];
        }
    }["LinkComponent.useCallback[observeLinkVisibilityOnMount]"], [
        prefetchEnabled,
        formattedHref,
        router,
        fetchStrategy,
        setOptimisticLinkStatus,
        ownerStack
    ]);
    const mergedRef = (0, _usemergedref.useMergedRef)(observeLinkVisibilityOnMount, childRef);
    const childProps = {
        ref: mergedRef,
        onClick (e) {
            if ("TURBOPACK compile-time truthy", 1) {
                if (!e) {
                    throw new Error(`Component rendered inside next/link has to pass click event to "onClick" prop.`);
                }
            }
            if (!legacyBehavior && typeof onClick === 'function') {
                onClick(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onClick === 'function') {
                child.props.onClick(e);
            }
            if (!router) {
                return;
            }
            if (e.defaultPrevented) {
                return;
            }
            linkClicked(e, formattedHref, linkInstanceRef, replace, scroll, onNavigate, transitionTypes, prefetchIntent);
        },
        onMouseEnter (e) {
            if (!legacyBehavior && typeof onMouseEnterProp === 'function') {
                onMouseEnterProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onMouseEnter === 'function') {
                child.props.onMouseEnter(e);
            }
            if (!router) {
                return;
            }
            if ("TURBOPACK compile-time truthy", 1) {
                return;
            }
            //TURBOPACK unreachable
            ;
            const upgradeToDynamicPrefetch = undefined;
        },
        onTouchStart: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : function onTouchStart(e) {
            if (!legacyBehavior && typeof onTouchStartProp === 'function') {
                onTouchStartProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onTouchStart === 'function') {
                child.props.onTouchStart(e);
            }
            if (!router) {
                return;
            }
            if (!prefetchEnabled) {
                return;
            }
            const upgradeToDynamicPrefetch = unstable_dynamicOnHover === true;
            (0, _links.onNavigationIntent)(e.currentTarget, upgradeToDynamicPrefetch);
        }
    };
    // If the url is absolute, we can bypass the logic to prepend the basePath.
    if ((0, _utils.isAbsoluteUrl)(formattedHref)) {
        childProps.href = formattedHref;
    } else if (!legacyBehavior || passHref || child.type === 'a' && !('href' in child.props)) {
        childProps.href = (0, _addbasepath.addBasePath)(formattedHref);
    }
    let link;
    if (legacyBehavior) {
        if ("TURBOPACK compile-time truthy", 1) {
            const { errorOnce } = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/utils/error-once.js [app-client] (ecmascript)");
            errorOnce('`legacyBehavior` is deprecated and will be removed in a future ' + 'release. A codemod is available to upgrade your components:\n\n' + 'npx @next/codemod@latest new-link .\n\n' + 'Learn more: https://nextjs.org/docs/app/building-your-application/upgrading/codemods#remove-a-tags-from-link-components');
        }
        link = /*#__PURE__*/ _react.default.cloneElement(child, childProps);
    } else {
        link = /*#__PURE__*/ (0, _jsxruntime.jsx)("a", {
            ...restProps,
            ...childProps,
            children: children
        });
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(LinkStatusContext.Provider, {
        value: linkStatus,
        children: link
    });
}
const LinkStatusContext = /*#__PURE__*/ (0, _react.createContext)(_links.IDLE_LINK_STATUS);
const useLinkStatus = ()=>{
    return (0, _react.useContext)(LinkStatusContext);
};
function getFetchStrategyFromPrefetchIntent(prefetchIntent) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (prefetchIntent === 'full') {
            return _types.FetchStrategy.Full;
        }
        // `"auto"`: the default mode, where we will prefetch partially if the link is in the viewport.
        prefetchIntent;
        return _types.FetchStrategy.PPR;
    } else //TURBOPACK unreachable
    ;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/node_modules/next/dist/client/use-merged-ref.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "useMergedRef", {
    enumerable: true,
    get: function() {
        return useMergedRef;
    }
});
const _react = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
function useMergedRef(refA, refB) {
    const cleanupA = (0, _react.useRef)(null);
    const cleanupB = (0, _react.useRef)(null);
    // NOTE: In theory, we could skip the wrapping if only one of the refs is non-null.
    // (this happens often if the user doesn't pass a ref to Link/Form/Image)
    // But this can cause us to leak a cleanup-ref into user code (previously via `<Link legacyBehavior>`),
    // and the user might pass that ref into ref-merging library that doesn't support cleanup refs
    // (because it hasn't been updated for React 19)
    // which can then cause things to blow up, because a cleanup-returning ref gets called with `null`.
    // So in practice, it's safer to be defensive and always wrap the ref, even on React 19.
    return (0, _react.useCallback)((current)=>{
        if (current === null) {
            const cleanupFnA = cleanupA.current;
            if (cleanupFnA) {
                cleanupA.current = null;
                cleanupFnA();
            }
            const cleanupFnB = cleanupB.current;
            if (cleanupFnB) {
                cleanupB.current = null;
                cleanupFnB();
            }
        } else {
            if (refA) {
                cleanupA.current = applyRef(refA, current);
            }
            if (refB) {
                cleanupB.current = applyRef(refB, current);
            }
        }
    }, [
        refA,
        refB
    ]);
}
function applyRef(refA, current) {
    if (typeof refA === 'function') {
        const cleanup = refA(current);
        if (typeof cleanup === 'function') {
            return cleanup;
        } else {
            return ()=>refA(null);
        }
    } else {
        refA.current = current;
        return ()=>{
            refA.current = null;
        };
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/node_modules/next/dist/shared/lib/router/utils/format-url.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
// Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    formatUrl: null,
    formatWithValidation: null,
    urlObjectKeys: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    formatUrl: function() {
        return formatUrl;
    },
    formatWithValidation: function() {
        return formatWithValidation;
    },
    urlObjectKeys: function() {
        return urlObjectKeys;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _querystring = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/router/utils/querystring.js [app-client] (ecmascript)"));
const slashedProtocols = /https?|ftp|gopher|file/;
function formatUrl(urlObj) {
    let { auth, hostname } = urlObj;
    let protocol = urlObj.protocol || '';
    let pathname = urlObj.pathname || '';
    let hash = urlObj.hash || '';
    let query = urlObj.query || '';
    let host = false;
    auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';
    if (urlObj.host) {
        host = auth + urlObj.host;
    } else if (hostname) {
        host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);
        if (urlObj.port) {
            host += ':' + urlObj.port;
        }
    }
    if (query && typeof query === 'object') {
        query = String(_querystring.urlQueryToSearchParams(query));
    }
    let search = urlObj.search || query && `?${query}` || '';
    if (protocol && !protocol.endsWith(':')) protocol += ':';
    if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
        host = '//' + (host || '');
        if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
    } else if (!host) {
        host = '';
    }
    if (hash && hash[0] !== '#') hash = '#' + hash;
    if (search && search[0] !== '?') search = '?' + search;
    pathname = pathname.replace(/[?#]/g, encodeURIComponent);
    search = search.replace('#', '%23');
    return `${protocol}${host}${pathname}${search}${hash}`;
}
const urlObjectKeys = [
    'auth',
    'hash',
    'host',
    'hostname',
    'href',
    'path',
    'pathname',
    'port',
    'protocol',
    'query',
    'search',
    'slashes'
];
function formatWithValidation(url) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (url !== null && typeof url === 'object') {
            Object.keys(url).forEach((key)=>{
                if (!urlObjectKeys.includes(key)) {
                    console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
                }
            });
        }
    }
    return formatUrl(url);
}
}),
"[project]/node_modules/next/dist/shared/lib/router/utils/is-local-url.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isLocalURL", {
    enumerable: true,
    get: function() {
        return isLocalURL;
    }
});
const _utils = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)");
const _hasbasepath = __turbopack_context__.r("[project]/node_modules/next/dist/client/has-base-path.js [app-client] (ecmascript)");
function isLocalURL(url) {
    // prevent a hydration mismatch on href for url with anchor refs
    if (!(0, _utils.isAbsoluteUrl)(url)) return true;
    try {
        // absolute urls can be local if they are on the same origin
        const locationOrigin = (0, _utils.getLocationOrigin)();
        const resolved = new URL(url, locationOrigin);
        return resolved.origin === locationOrigin && (0, _hasbasepath.hasBasePath)(resolved.pathname);
    } catch (_) {
        return false;
    }
}
}),
"[project]/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    DecodeError: null,
    MiddlewareNotFoundError: null,
    MissingStaticPage: null,
    NormalizeError: null,
    PageNotFoundError: null,
    SP: null,
    ST: null,
    WEB_VITALS: null,
    execOnce: null,
    getDisplayName: null,
    getLocationOrigin: null,
    getURL: null,
    isAbsoluteUrl: null,
    isResSent: null,
    loadGetInitialProps: null,
    normalizeRepeatedSlashes: null,
    stringifyError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    DecodeError: function() {
        return DecodeError;
    },
    MiddlewareNotFoundError: function() {
        return MiddlewareNotFoundError;
    },
    MissingStaticPage: function() {
        return MissingStaticPage;
    },
    NormalizeError: function() {
        return NormalizeError;
    },
    PageNotFoundError: function() {
        return PageNotFoundError;
    },
    SP: function() {
        return SP;
    },
    ST: function() {
        return ST;
    },
    WEB_VITALS: function() {
        return WEB_VITALS;
    },
    execOnce: function() {
        return execOnce;
    },
    getDisplayName: function() {
        return getDisplayName;
    },
    getLocationOrigin: function() {
        return getLocationOrigin;
    },
    getURL: function() {
        return getURL;
    },
    isAbsoluteUrl: function() {
        return isAbsoluteUrl;
    },
    isResSent: function() {
        return isResSent;
    },
    loadGetInitialProps: function() {
        return loadGetInitialProps;
    },
    normalizeRepeatedSlashes: function() {
        return normalizeRepeatedSlashes;
    },
    stringifyError: function() {
        return stringifyError;
    }
});
const WEB_VITALS = [
    'CLS',
    'FCP',
    'INP',
    'LCP',
    'TTFB'
];
function execOnce(fn) {
    let used = false;
    let result;
    return (...args)=>{
        if (!used) {
            used = true;
            result = fn(...args);
        }
        return result;
    };
}
// Scheme: https://tools.ietf.org/html/rfc3986#section-3.1
// Absolute URL: https://tools.ietf.org/html/rfc3986#section-4.3
const ABSOLUTE_URL_REGEX = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/;
const isAbsoluteUrl = (url)=>{
    // Fast path: an absolute URL must start with a letter (the scheme).
    // Check for a-z and A-Z without the cost of the regex.
    const c = url.charCodeAt(0);
    const isLetter = c >= 65 /* A */  && c <= 90 || c >= 97 /* a */  && c <= 122;
    /* z */ if (!isLetter) {
        return false;
    }
    return ABSOLUTE_URL_REGEX.test(url);
};
function getLocationOrigin() {
    const { protocol, hostname, port } = window.location;
    return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}
function getURL() {
    const { href } = window.location;
    const origin = getLocationOrigin();
    return href.substring(origin.length);
}
function getDisplayName(Component) {
    return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}
function isResSent(res) {
    return res.finished || res.headersSent;
}
function normalizeRepeatedSlashes(url) {
    const urlParts = url.split('?');
    const urlNoQuery = urlParts[0];
    return urlNoQuery // first we replace any non-encoded backslashes with forward
    // then normalize repeated forward slashes
    .replace(/\\/g, '/').replace(/\/\/+/g, '/') + (urlParts[1] ? `?${urlParts.slice(1).join('?')}` : '');
}
async function loadGetInitialProps(App, ctx) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (App.prototype?.getInitialProps) {
            const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.`;
            throw new Error(message);
        }
    }
    // when called from _app `ctx` is nested in `ctx`
    const res = ctx.res || ctx.ctx && ctx.ctx.res;
    if (!App.getInitialProps) {
        if (ctx.ctx && ctx.Component) {
            // @ts-ignore pageProps default
            return {
                pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
            };
        }
        return {};
    }
    const props = await App.getInitialProps(ctx);
    if (res && isResSent(res)) {
        return props;
    }
    if (!props) {
        const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
        throw new Error(message);
    }
    if ("TURBOPACK compile-time truthy", 1) {
        if (Object.keys(props).length === 0 && !ctx.ctx) {
            console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps`);
        }
    }
    return props;
}
const SP = typeof performance !== 'undefined';
const ST = SP && [
    'mark',
    'measure',
    'getEntriesByName'
].every((method)=>typeof performance[method] === 'function');
class DecodeError extends Error {
}
class NormalizeError extends Error {
}
class PageNotFoundError extends Error {
    constructor(page){
        super();
        this.code = 'ENOENT';
        this.name = 'PageNotFoundError';
        this.message = `Cannot find module for page: ${page}`;
    }
}
class MissingStaticPage extends Error {
    constructor(page, message){
        super();
        this.message = `Failed to load static file for page: ${page} ${message}`;
    }
}
class MiddlewareNotFoundError extends Error {
    constructor(){
        super();
        this.code = 'ENOENT';
        this.message = `Cannot find the middleware module`;
    }
}
function stringifyError(error) {
    return JSON.stringify({
        message: error.message,
        stack: error.stack
    });
}
}),
"[project]/node_modules/next/dist/shared/lib/utils/error-once.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "errorOnce", {
    enumerable: true,
    get: function() {
        return errorOnce;
    }
});
let errorOnce = (_)=>{};
if ("TURBOPACK compile-time truthy", 1) {
    const errors = new Set();
    errorOnce = (msg)=>{
        if (!errors.has(msg)) {
            console.error(msg);
        }
        errors.add(msg);
    };
}
}),
"[project]/src/components/site-header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SiteHeader",
    ()=>SiteHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.mjs [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.mjs [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/code-xml.mjs [app-client] (ecmascript) <export default as Code2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.mjs [app-client] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.mjs [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/i18n-config.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2d$dictionaries$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/i18n-dictionaries.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function SiteHeader({ locale }) {
    _s();
    const dict = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2d$dictionaries$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dictionaries"][locale];
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [langOpen, setLangOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const restOfPath = (()=>{
        const parts = pathname.split("/").filter(Boolean);
        if (parts.length === 0) return "";
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isLocale"])(parts[0])) parts.shift();
        return parts.length ? `/${parts.join("/")}` : "";
    })();
    const navLinks = [
        {
            href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localePath"])("/services", locale),
            label: dict.header.services
        },
        {
            href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localePath"])("/realisations", locale),
            label: dict.header.works
        },
        {
            href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localePath"])("/contact", locale),
            label: dict.header.contact
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "sticky top-0 z-50 border-b border-white/10 bg-[#081511]/80 backdrop-blur-md",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localePath"])("/", locale),
                        className: "flex items-center gap-2",
                        onClick: ()=>setOpen(false),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-green-600",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code2$3e$__["Code2"], {
                                    className: "h-5 w-5 text-white"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/site-header.tsx",
                                    lineNumber: 44,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/site-header.tsx",
                                lineNumber: 43,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-lg font-semibold tracking-tight",
                                children: [
                                    "Opexm",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-emerald-400",
                                        children: "."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/site-header.tsx",
                                        lineNumber: 47,
                                        columnNumber: 18
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/site-header.tsx",
                                lineNumber: 46,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/site-header.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                className: "hidden items-center gap-6 lg:flex",
                                children: [
                                    navLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: link.href,
                                            className: "text-sm font-medium text-slate-300 transition-colors hover:text-white",
                                            children: link.label
                                        }, link.href, false, {
                                            fileName: "[project]/src/components/site-header.tsx",
                                            lineNumber: 57,
                                            columnNumber: 15
                                        }, this)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localePath"])("/contact", locale),
                                        className: "rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-emerald-600/25 transition hover:bg-emerald-500",
                                        children: dict.header.startProject
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/site-header.tsx",
                                        lineNumber: 65,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/site-header.tsx",
                                lineNumber: 55,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setLangOpen((v)=>!v),
                                        className: "flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-2 text-xs font-medium text-slate-300 transition hover:border-white/25 hover:text-white",
                                        "aria-label": dict.header.switchLanguage,
                                        "aria-expanded": langOpen,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                                className: "h-3.5 w-3.5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/site-header.tsx",
                                                lineNumber: 82,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localeNames"][locale]
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/site-header.tsx",
                                                lineNumber: 83,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                className: `h-3 w-3 transition-transform ${langOpen ? "rotate-180" : ""}`
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/site-header.tsx",
                                                lineNumber: 84,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/site-header.tsx",
                                        lineNumber: 75,
                                        columnNumber: 13
                                    }, this),
                                    langOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                "aria-label": "close",
                                                className: "fixed inset-0 z-10 cursor-default",
                                                onClick: ()=>setLangOpen(false)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/site-header.tsx",
                                                lineNumber: 91,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "absolute end-0 z-20 mt-2 w-40 overflow-hidden rounded-xl border border-white/10 bg-[#141a30] shadow-xl",
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["locales"].map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localePath"])(restOfPath || "/", l),
                                                            onClick: ()=>setLangOpen(false),
                                                            className: `flex items-center justify-between px-4 py-2.5 text-sm transition hover:bg-white/5 ${l === locale ? "text-emerald-300" : "text-slate-300"}`,
                                                            children: [
                                                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localeNames"][l],
                                                                l === locale && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                    className: "h-4 w-4"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/site-header.tsx",
                                                                    lineNumber: 108,
                                                                    columnNumber: 42
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/site-header.tsx",
                                                            lineNumber: 100,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, l, false, {
                                                        fileName: "[project]/src/components/site-header.tsx",
                                                        lineNumber: 99,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/site-header.tsx",
                                                lineNumber: 97,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/site-header.tsx",
                                        lineNumber: 89,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/site-header.tsx",
                                lineNumber: 74,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setOpen((v)=>!v),
                                className: "flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-slate-300 lg:hidden",
                                "aria-label": open ? dict.header.closeMenu : dict.header.openMenu,
                                "aria-expanded": open,
                                children: open ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "h-5 w-5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/site-header.tsx",
                                    lineNumber: 125,
                                    columnNumber: 21
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                    className: "h-5 w-5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/site-header.tsx",
                                    lineNumber: 125,
                                    columnNumber: 49
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/site-header.tsx",
                                lineNumber: 118,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/site-header.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/site-header.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "border-t border-white/10 px-4 py-4 lg:hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "flex flex-col gap-1",
                    children: [
                        navLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: link.href,
                                    onClick: ()=>setOpen(false),
                                    className: "block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-300 hover:bg-white/5 hover:text-white",
                                    children: link.label
                                }, void 0, false, {
                                    fileName: "[project]/src/components/site-header.tsx",
                                    lineNumber: 136,
                                    columnNumber: 17
                                }, this)
                            }, link.href, false, {
                                fileName: "[project]/src/components/site-header.tsx",
                                lineNumber: 135,
                                columnNumber: 15
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: "pt-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localePath"])("/contact", locale),
                                onClick: ()=>setOpen(false),
                                className: "block rounded-full bg-emerald-600 px-5 py-2.5 text-center text-sm font-semibold text-white hover:bg-emerald-500",
                                children: dict.header.startProject
                            }, void 0, false, {
                                fileName: "[project]/src/components/site-header.tsx",
                                lineNumber: 146,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/site-header.tsx",
                            lineNumber: 145,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/site-header.tsx",
                    lineNumber: 133,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/site-header.tsx",
                lineNumber: 132,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/site-header.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
_s(SiteHeader, "OPSYAgtyVvuilZL6rW2tppzu+LA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = SiteHeader;
var _c;
__turbopack_context__.k.register(_c, "SiteHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/i18n-config.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defaultLocale",
    ()=>defaultLocale,
    "dirOf",
    ()=>dirOf,
    "isLocale",
    ()=>isLocale,
    "localeNames",
    ()=>localeNames,
    "localePath",
    ()=>localePath,
    "locales",
    ()=>locales
]);
const locales = [
    "fr",
    "en",
    "ar"
];
const defaultLocale = "fr";
const localeNames = {
    fr: "Français",
    en: "English",
    ar: "العربية"
};
function isLocale(value) {
    return locales.includes(value);
}
function dirOf(locale) {
    return locale === "ar" ? "rtl" : "ltr";
}
function localePath(path, locale) {
    const clean = path === "/" ? "" : path.startsWith("/") ? path : `/${path}`;
    return `/${locale}${clean}`;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/i18n-dictionaries.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "dictionaries",
    ()=>dictionaries
]);
const dictionaries = {
    fr: {
        meta: {
            title: "Opexm — Agence de développement web & mobile",
            description: "Opexm conçoit et développe des applications web et mobiles sur mesure : sites vitrines, e-commerce, plateformes SaaS, apps iOS & Android."
        },
        header: {
            services: "Services",
            works: "Réalisations",
            contact: "Contact",
            startProject: "Démarrer un projet",
            openMenu: "Ouvrir le menu",
            closeMenu: "Fermer le menu",
            switchLanguage: "Changer de langue"
        },
        footer: {
            tagline: "Agence de développement web et mobile. Nous transformons vos idées en produits digitaux qui durent.",
            services: "Services",
            navigation: "Navigation",
            contact: "Contact",
            madeWith: "Fait avec Next.js, Tailwind CSS et beaucoup de café.",
            rights: "Tous droits réservés.",
            webDev: "Développement web",
            mobileApps: "Applications mobiles",
            uiUx: "UI/UX Design",
            home: "Accueil"
        },
        shared: {
            more: "En savoir plus",
            allWorks: "Voir toutes les réalisations",
            chosen: "Le plus choisi",
            choosePlan: "Choisir cette offre",
            faq: "FAQ"
        },
        home: {
            badge: "Agence web & mobile · Tunisie",
            heroTitleStart: "Nous créons des",
            heroHighlight: "applications",
            heroTitleEnd: "que vos utilisateurs adorent",
            heroText: "Opexm conçoit et développe des sites web et des applications mobiles sur mesure. Design soigné, code moderne, livraisons par sprints : votre projet avance, vous gardez le contrôle.",
            heroCta: "Démarrer votre projet",
            heroSecondary: "Voir nos réalisations",
            servicesEta: "Nos services",
            servicesTitle: "Tout ce qu'il faut pour réussir en ligne",
            servicesText: "De la première maquette à la mise en production, nous couvrons l'ensemble du cycle de vie de votre produit digital.",
            methodEta: "Méthode",
            methodTitle: "Un processus clair, sans surprise",
            methodText: "Vous savez toujours où en est votre projet, ce qui arrive ensuite, et combien ça coûte.",
            worksEta: "Réalisations",
            worksTitle: "Des projets qui font la différence",
            worksText: "Quelques exemples de produits que nous avons conçus, développés et lancés avec nos clients.",
            quotesEta: "Témoignages",
            quotesTitle: "Ils nous ont fait confiance",
            stackEta: "Stack technique",
            stackTitle: "Des technologies modernes et éprouvées",
            pricingEta: "Tarifs",
            pricingTitle: "Des offres lisibles, adaptées à votre stade",
            pricingText: "Un budget cadré dès le départ. Pas de coûts cachés, pas de mauvaises surprises.",
            faqTitle: "Vos questions, nos réponses",
            contactTitle: "Un projet en tête ? Parlons-en.",
            contactText: "Réponse sous 24 h ouvrées, sans engagement.",
            contactCity: "Monastir, Tunisie",
            contactCta: "Lancer la conversation",
            ctaTitle: "Prêt à faire décoller votre projet ?",
            ctaText: "Racontez-nous votre idée. Nous revenons vers vous avec un plan d'action et une estimation claire, gratuitement.",
            ctaButton: "Demander un devis gratuit",
            stripMessage: "Un projet à garder en tête ?",
            stripButton: "Discutons-en"
        },
        servicesPage: {
            title: "Nos services",
            intro: "Quatre expertises complémentaires pour construire des produits digitaux complets, du design à l'infrastructure.",
            techEta: "Technologies",
            techTitle: "Notre boîte à outils",
            techText: "Nous choisissons la technologie adaptée à votre projet, pas l'inverse.",
            ctaTitle: "Besoin d'un service en particulier ?",
            ctaText: "Décrivez votre besoin, nous vous dirons honnêtement si nous sommes le bon partenaire — et sinon, qui contacter.",
            ctaButton: "Discuter de ce service"
        },
        worksPage: {
            title: "Nos réalisations",
            intro: "Des produits digitaux conçus avec nos clients, mesurés à l'impact réel qu'ils ont généré.",
            clientsEta: "Clients",
            clientsTitle: "Ce qu'ils en disent",
            ctaTitle: "Votre projet ici ?",
            ctaText: "Chaque case de cette grille a commencé par une conversation. La vôtre peut être la prochaine."
        },
        contactPage: {
            title: "Parlons de votre projet",
            intro: "Décrivez-nous votre idée en quelques lignes. Nous revenons vers vous avec une première analyse et un rendez-vous, gratuitement.",
            form: {
                name: "Nom complet *",
                namePlaceholder: "Marie Dupont",
                email: "Email *",
                emailPlaceholder: "marie@entreprise.com",
                company: "Société",
                companyPlaceholder: "Entreprise SAS",
                projectType: "Type de projet *",
                budget: "Budget envisagé",
                message: "Votre projet en quelques mots *",
                messagePlaceholder: "Ex. : nous voulons une app mobile pour que nos clients réservent nos prestations en ligne...",
                submit: "Envoyer ma demande",
                sending: "Envoi en cours...",
                privacy: "Vos données restent confidentielles et ne sont jamais partagées."
            },
            success: {
                title: "Message envoyé !",
                text: "Merci pour votre message. Notre équipe vous recontacte sous 24 h ouvrées pour planifier un premier échange.",
                again: "Envoyer un autre message"
            },
            aside: {
                title: "Contact direct",
                email: "Email",
                phone: "Téléphone",
                address: "Adresse",
                hours: "Horaires",
                freeTitle: "⚡ Premier échange gratuit",
                freeText: "30 minutes par téléphone ou visio pour cerner votre besoin. Vous repartez avec un avis honnête, même si nous ne travaillons pas ensemble."
            }
        },
        data: {
            services: [
                {
                    title: "Développement web",
                    tagline: "Sites vitrines, e-commerce et plateformes SaaS",
                    description: "Des applications web rapides, accessibles et scalables. Nous concevons des expériences qui chargent vite, référencent bien et convertissent vos visiteurs en clients.",
                    deliverables: [
                        "Site vitrine ou corporate",
                        "Boutique e-commerce",
                        "Application web & SaaS",
                        "Migration et refonte"
                    ]
                },
                {
                    title: "Applications mobiles",
                    tagline: "iOS et Android, natif ou cross-platform",
                    description: "Des applications mobiles pensées pour l'usage réel : fluides, élégantes et stables. De l'idée au store, nous accompagnons chaque étape du cycle de vie de votre app.",
                    deliverables: [
                        "Apps iOS & Android",
                        "MVP startup",
                        "Applications internes",
                        "Publication sur les stores"
                    ]
                },
                {
                    title: "UI/UX Design",
                    tagline: "Interfaces qui plaisent et fonctionnent",
                    description: "Un bon produit commence par une bonne expérience. Nous dessinons des interfaces claires, testées avec de vrais utilisateurs, et livrons des design systems réutilisables.",
                    deliverables: [
                        "Design system",
                        "Maquettes Figma",
                        "Audit UX",
                        "Prototypes interactifs"
                    ]
                },
                {
                    title: "Backend & Cloud",
                    tagline: "APIs robustes et infrastructures fiables",
                    description: "La partie immergée de l'iceberg : APIs sécurisées, bases de données bien modélisées, CI/CD et hébergement cloud. Tout ce qu'il faut pour grandir sans douleur.",
                    deliverables: [
                        "API REST & GraphQL",
                        "Architecture cloud",
                        "CI/CD & DevOps",
                        "Monitoring & sécurité"
                    ]
                }
            ],
            steps: [
                {
                    title: "Découverte",
                    description: "Un premier échange pour comprendre votre métier, vos utilisateurs et vos contraintes. Sans jargon, sans engagement."
                },
                {
                    title: "Conception",
                    description: "Wireframes, maquettes et stack technique validés ensemble. Vous savez exactement ce qui sera livré, et à quel prix."
                },
                {
                    title: "Développement",
                    description: "Sprints de deux semaines avec démos régulières. Vous voyez le produit avancer et pouvez ajuster le tir en continu."
                },
                {
                    title: "Lancement & suivi",
                    description: "Mise en production, formation de vos équipes et maintenance. Nous restons à vos côtés après la mise en ligne."
                }
            ],
            testimonials: [
                {
                    quote: "Opexm a compris notre métier en une semaine. L'app est sortie dans les délais, avec un niveau de finition qu'on n'avait jamais vu chez un prestataire.",
                    author: "Sarah Marchetti",
                    role: "CEO, PayFlow"
                },
                {
                    quote: "La refonte de notre e-commerce a doublé notre panier moyen en trois mois. Communication claire, itérations rapides, zéro surprise sur la facture.",
                    author: "Karim Belkacem",
                    role: "Fondateur, Marché Libre"
                },
                {
                    quote: "Ils ont remplacé un outil Excel monstrueux par une plateforme que toute l'équipe a adoptée en deux jours. Du travail d'orfèvre.",
                    author: "Claire Dubois",
                    role: "Directrice des opérations, MediTrack"
                }
            ],
            pricing: [
                {
                    name: "Site vitrine",
                    price: "à partir de 2 900 €",
                    description: "Pour exister en ligne avec un site rapide et soigné.",
                    features: [
                        "Design sur mesure (maquette incluse)",
                        "Jusqu'à 8 pages",
                        "SEO technique de base",
                        "Formulaire de contact",
                        "Mise en ligne & formation",
                        "3 mois de maintenance offerte"
                    ]
                },
                {
                    name: "Pack App",
                    price: "à partir de 14 900 €",
                    description: "Pour lancer votre application mobile ou votre SaaS.",
                    features: [
                        "Étude UX & maquettes",
                        "App iOS + Android ou web app",
                        "Backend & API inclus",
                        "Publication sur les stores",
                        "Analytics & suivi",
                        "6 mois de maintenance offerte"
                    ]
                },
                {
                    name: "Sur mesure",
                    price: "sur devis",
                    description: "Pour les projets ambitieux avec des exigences spécifiques.",
                    features: [
                        "Cadrage & ateliers de conception",
                        "Architecture dédiée",
                        "Intégrations existantes",
                        "Équipe dédiée au projet",
                        "SLA & support prioritaire",
                        "Évolution continue"
                    ]
                }
            ],
            faq: [
                {
                    question: "Combien coûte un site ou une application ?",
                    answer: "Un site vitrine démarre autour de 2 900 €, une application mobile au-delà de 14 900 €. Chaque projet étant unique, nous établissons un devis détaillé et sans surprise après un premier échange gratuit."
                },
                {
                    question: "Quels sont vos délais ?",
                    answer: "Comptez 3 à 6 semaines pour un site vitrine, et 2 à 4 mois pour une application mobile ou une plateforme web. Nous livrons par sprints, vous voyez le produit dès les premières semaines."
                },
                {
                    question: "Travaillez-vous avec des clients hors de Paris ?",
                    answer: "Oui, nous travaillons avec des clients dans toute la France et en Europe. Nos processus distancés (démos hebdomadaires, outil de gestion partagé) rendent la collaboration fluide, où que vous soyez."
                },
                {
                    question: "Que se passe-t-il après la mise en ligne ?",
                    answer: "Chaque projet inclut une période de garantie. Ensuite, nos offres de maintenance couvrent les mises à jour, la sécurité, les sauvegardes et les évolutions. Vous restez maître de votre produit."
                },
                {
                    question: "Code-sur-mesure ou no-code ?",
                    answer: "Nous développons sur mesure avec des technologies modernes (Next.js, React Native...). Cela garantit la performance, la propriété du code et l'absence de dépendance à une plateforme propriétaire. Pour les budgets serrés, nous savons aussi recommander une solution no-code adaptée."
                }
            ],
            projectTypes: [
                "Site web vitrine",
                "E-commerce",
                "Application mobile",
                "Plateforme web / SaaS",
                "Refonte / migration",
                "Autre"
            ],
            budgets: [
                "< 5 000 €",
                "5 000 – 15 000 €",
                "15 000 – 50 000 €",
                "> 50 000 €",
                "Je ne sais pas encore"
            ],
            projectsText: [
                {
                    category: "Fintech · App mobile",
                    description: "Application mobile de paiement entre particuliers avec authentification biométrique et suivi en temps réel des transactions.",
                    result: "120 000 téléchargements la première année"
                },
                {
                    category: "E-commerce · Web",
                    description: "Plateforme e-commerce de produits locaux avec moteur de recherche instantané, panier optimisé et tableau de bord vendeur.",
                    result: "+38 % de conversion après refonte"
                },
                {
                    category: "Santé · SaaS",
                    description: "SaaS de suivi de stocks pour pharmacies : alertes de péremption, commandes automatiques et conformité des données de santé.",
                    result: "97 % de réduction des ruptures de stock"
                },
                {
                    category: "Mobilité · App hybride",
                    description: "App de covoiturage dédiée aux campus universitaires : trajets quotidiens, réservation de places et messagerie intégrée.",
                    result: "45 000 trajets organisés en 8 mois"
                },
                {
                    category: "Artisanat · Vitrine",
                    description: "Site vitrine d'un atelier de céramique avec galerie immersive, prise de rendez-vous en ligne et vente de pièces uniques.",
                    result: "Book de commandes plein pendant 6 mois"
                },
                {
                    category: "Logistique · Plateforme B2B",
                    description: "Plateforme web de gestion de flotte de véhicules : suivi GPS temps réel, maintenance prédictive et rapports automatisés.",
                    result: "-30 % de coûts de maintenance flotte"
                }
            ],
            stats: [
                {
                    value: "30+",
                    label: "Projets livrés"
                },
                {
                    value: "12",
                    label: "Années d'expérience"
                },
                {
                    value: "98 %",
                    label: "Clients satisfaits"
                },
                {
                    value: "8",
                    label: "Experts passionnés"
                }
            ]
        }
    },
    en: {
        meta: {
            title: "Opexm — Web & Mobile Development Agency",
            description: "Opexm designs and builds custom web and mobile applications: showcase sites, e-commerce, SaaS platforms, iOS & Android apps."
        },
        header: {
            services: "Services",
            works: "Our work",
            contact: "Contact",
            startProject: "Start a project",
            openMenu: "Open menu",
            closeMenu: "Close menu",
            switchLanguage: "Switch language"
        },
        footer: {
            tagline: "Web and mobile development agency. We turn your ideas into digital products that last.",
            services: "Services",
            navigation: "Navigation",
            contact: "Contact",
            madeWith: "Built with Next.js, Tailwind CSS and a lot of coffee.",
            rights: "All rights reserved.",
            webDev: "Web development",
            mobileApps: "Mobile apps",
            uiUx: "UI/UX Design",
            home: "Home"
        },
        shared: {
            more: "Learn more",
            allWorks: "See all our work",
            chosen: "Most popular",
            choosePlan: "Choose this plan",
            faq: "FAQ"
        },
        home: {
            badge: "Web & Mobile Agency · Tunisia",
            heroTitleStart: "We build",
            heroHighlight: "applications",
            heroTitleEnd: "your users will love",
            heroText: "Opexm designs and develops custom websites and mobile apps. Polished design, modern code, sprint-based delivery: your project moves forward, you stay in control.",
            heroCta: "Start your project",
            heroSecondary: "See our work",
            servicesEta: "Our services",
            servicesTitle: "Everything you need to succeed online",
            servicesText: "From the first mockup to production, we cover the entire life cycle of your digital product.",
            methodEta: "Method",
            methodTitle: "A clear process, no surprises",
            methodText: "You always know where your project stands, what comes next, and how much it costs.",
            worksEta: "Our work",
            worksTitle: "Projects that make a difference",
            worksText: "A few examples of products we have designed, built and launched with our clients.",
            quotesEta: "Testimonials",
            quotesTitle: "They trusted us",
            stackEta: "Tech stack",
            stackTitle: "Modern, proven technologies",
            pricingEta: "Pricing",
            pricingTitle: "Clear offers, built for your stage",
            pricingText: "A budget set from day one. No hidden costs, no nasty surprises.",
            faqTitle: "Your questions, answered",
            contactTitle: "Got a project in mind? Let's talk.",
            contactText: "Reply within 24 business hours, no strings attached.",
            contactCity: "Monastir, Tunisia",
            contactCta: "Start the conversation",
            ctaTitle: "Ready to launch your project?",
            ctaText: "Tell us about your idea. We'll come back with an action plan and a clear estimate, for free.",
            ctaButton: "Request a free quote",
            stripMessage: "A project to keep in mind?",
            stripButton: "Let's discuss"
        },
        servicesPage: {
            title: "Our services",
            intro: "Four complementary areas of expertise to build complete digital products, from design to infrastructure.",
            techEta: "Technologies",
            techTitle: "Our toolbox",
            techText: "We pick the technology that fits your project, not the other way around.",
            ctaTitle: "Need a specific service?",
            ctaText: "Describe your need, and we'll honestly tell you whether we're the right partner — and if not, who to contact.",
            ctaButton: "Discuss this service"
        },
        worksPage: {
            title: "Our work",
            intro: "Digital products built with our clients, measured by the real impact they created.",
            clientsEta: "Clients",
            clientsTitle: "What they say",
            ctaTitle: "Your project here?",
            ctaText: "Every item in this grid started with a conversation. Yours could be next."
        },
        contactPage: {
            title: "Let's talk about your project",
            intro: "Describe your idea in a few lines. We'll get back to you with an initial analysis and a meeting, free of charge.",
            form: {
                name: "Full name *",
                namePlaceholder: "Jane Smith",
                email: "Email *",
                emailPlaceholder: "jane@company.com",
                company: "Company",
                companyPlaceholder: "Company Ltd",
                projectType: "Project type *",
                budget: "Estimated budget",
                message: "Your project in a few words *",
                messagePlaceholder: "e.g. we want a mobile app so our clients can book our services online...",
                submit: "Send my request",
                sending: "Sending...",
                privacy: "Your data stays confidential and is never shared."
            },
            success: {
                title: "Message sent!",
                text: "Thank you for your message. Our team will get back to you within 24 business hours to schedule an initial call.",
                again: "Send another message"
            },
            aside: {
                title: "Direct contact",
                email: "Email",
                phone: "Phone",
                address: "Address",
                hours: "Hours",
                freeTitle: "⚡ Free first call",
                freeText: "30 minutes by phone or video to understand your need. You'll leave with an honest opinion, even if we don't end up working together."
            }
        },
        data: {
            services: [
                {
                    title: "Web development",
                    tagline: "Showcase sites, e-commerce and SaaS platforms",
                    description: "Fast, accessible and scalable web applications. We design experiences that load quickly, rank well and turn your visitors into customers.",
                    deliverables: [
                        "Showcase or corporate site",
                        "E-commerce store",
                        "Web app & SaaS",
                        "Migration and redesign"
                    ]
                },
                {
                    title: "Mobile apps",
                    tagline: "iOS and Android, native or cross-platform",
                    description: "Mobile apps designed for real-world use: smooth, elegant and stable. From idea to the stores, we support every stage of your app's life cycle.",
                    deliverables: [
                        "iOS & Android apps",
                        "Startup MVP",
                        "Internal apps",
                        "Store publication"
                    ]
                },
                {
                    title: "UI/UX Design",
                    tagline: "Interfaces people love and use",
                    description: "A great product starts with a great experience. We design clear interfaces, tested with real users, and ship reusable design systems.",
                    deliverables: [
                        "Design system",
                        "Figma mockups",
                        "UX audit",
                        "Interactive prototypes"
                    ]
                },
                {
                    title: "Backend & Cloud",
                    tagline: "Robust APIs and reliable infrastructure",
                    description: "The submerged part of the iceberg: secure APIs, well-modeled databases, CI/CD and cloud hosting. Everything you need to grow painlessly.",
                    deliverables: [
                        "REST & GraphQL APIs",
                        "Cloud architecture",
                        "CI/CD & DevOps",
                        "Monitoring & security"
                    ]
                }
            ],
            steps: [
                {
                    title: "Discovery",
                    description: "A first conversation to understand your business, your users and your constraints. No jargon, no commitment."
                },
                {
                    title: "Design",
                    description: "Wireframes, mockups and tech stack validated together. You know exactly what will be delivered, and at what price."
                },
                {
                    title: "Development",
                    description: "Two-week sprints with regular demos. You see the product evolve and can adjust course continuously."
                },
                {
                    title: "Launch & support",
                    description: "Go-live, team training and maintenance. We stay by your side after launch."
                }
            ],
            testimonials: [
                {
                    quote: "Opexm understood our business in a week. The app shipped on time, with a level of polish we had never seen from a vendor.",
                    author: "Sarah Marchetti",
                    role: "CEO, PayFlow"
                },
                {
                    quote: "Our e-commerce redesign doubled our average cart in three months. Clear communication, fast iterations, zero billing surprises.",
                    author: "Karim Belkacem",
                    role: "Founder, Marché Libre"
                },
                {
                    quote: "They replaced a monstrous Excel tool with a platform the whole team adopted in two days. Master craftsmanship.",
                    author: "Claire Dubois",
                    role: "COO, MediTrack"
                }
            ],
            pricing: [
                {
                    name: "Showcase site",
                    price: "from €2,900",
                    description: "To exist online with a fast, polished website.",
                    features: [
                        "Custom design (mockups included)",
                        "Up to 8 pages",
                        "Basic technical SEO",
                        "Contact form",
                        "Launch & training",
                        "3 months of maintenance included"
                    ]
                },
                {
                    name: "App Pack",
                    price: "from €14,900",
                    description: "To launch your mobile app or SaaS.",
                    features: [
                        "UX research & mockups",
                        "iOS + Android app or web app",
                        "Backend & APIs included",
                        "Store publication",
                        "Analytics & tracking",
                        "6 months of maintenance included"
                    ]
                },
                {
                    name: "Custom",
                    price: "on quote",
                    description: "For ambitious projects with specific requirements.",
                    features: [
                        "Scoping & design workshops",
                        "Dedicated architecture",
                        "Existing integrations",
                        "Dedicated project team",
                        "SLA & priority support",
                        "Continuous evolution"
                    ]
                }
            ],
            faq: [
                {
                    question: "How much does a website or an app cost?",
                    answer: "A showcase site starts around €2,900, a mobile app beyond €14,900. Every project is unique, so we provide a detailed, no-surprise quote after a free first call."
                },
                {
                    question: "What are your timelines?",
                    answer: "Allow 3 to 6 weeks for a showcase site, and 2 to 4 months for a mobile app or web platform. We deliver in sprints, so you see the product from the first weeks."
                },
                {
                    question: "Do you work with clients outside Paris?",
                    answer: "Yes — we work with clients across France and Europe. Our remote processes (weekly demos, shared project tool) make collaboration smooth, wherever you are."
                },
                {
                    question: "What happens after launch?",
                    answer: "Every project includes a warranty period. After that, our maintenance plans cover updates, security, backups and evolutions. You stay in control of your product."
                },
                {
                    question: "Custom code or no-code?",
                    answer: "We build custom solutions with modern technologies (Next.js, React Native...). That guarantees performance, code ownership and freedom from proprietary platforms. On tight budgets, we can also recommend a suitable no-code solution."
                }
            ],
            projectTypes: [
                "Showcase website",
                "E-commerce",
                "Mobile app",
                "Web platform / SaaS",
                "Redesign / migration",
                "Other"
            ],
            budgets: [
                "< €5,000",
                "€5,000 – €15,000",
                "€15,000 – €50,000",
                "> €50,000",
                "Not sure yet"
            ],
            projectsText: [
                {
                    category: "Fintech · Mobile app",
                    description: "Peer-to-peer payment app with biometric authentication and real-time transaction tracking.",
                    result: "120,000 downloads in the first year"
                },
                {
                    category: "E-commerce · Web",
                    description: "E-commerce platform for local products with instant search, optimized cart and vendor dashboard.",
                    result: "+38% conversion after redesign"
                },
                {
                    category: "Healthcare · SaaS",
                    description: "Pharmacy inventory SaaS: expiry alerts, automatic ordering and healthcare data compliance.",
                    result: "97% fewer stock-outs"
                },
                {
                    category: "Mobility · Hybrid app",
                    description: "Carpooling app dedicated to university campuses: daily rides, seat booking and built-in messaging.",
                    result: "45,000 rides organized in 8 months"
                },
                {
                    category: "Craft · Showcase",
                    description: "Showcase site for a ceramics workshop with immersive gallery, online booking and unique pieces for sale.",
                    result: "Order book full for 6 months"
                },
                {
                    category: "Logistics · B2B platform",
                    description: "Web platform for vehicle fleet management: real-time GPS tracking, predictive maintenance and automated reports.",
                    result: "-30% fleet maintenance costs"
                }
            ],
            stats: [
                {
                    value: "30+",
                    label: "Projects delivered"
                },
                {
                    value: "12",
                    label: "Years of experience"
                },
                {
                    value: "98%",
                    label: "Satisfied clients"
                },
                {
                    value: "8",
                    label: "Passionate experts"
                }
            ]
        }
    },
    ar: {
        meta: {
            title: "أوبكسيم — وكالة تطوير الويب وتطبيقات الجوال",
            description: "تصمّم أوبكسيم وتبني تطبيقات ويب وجوال مخصصة: مواقع الشركات، المتاجر الإلكترونية، منصات SaaS، تطبيقات iOS و Android."
        },
        header: {
            services: "خدماتنا",
            works: "أعمالنا",
            contact: "اتصل بنا",
            startProject: "ابدأ مشروعك",
            openMenu: "فتح القائمة",
            closeMenu: "إغلاق القائمة",
            switchLanguage: "تغيير اللغة"
        },
        footer: {
            tagline: "وكالة تطوير ويب وجوال. نحوّل أفكارك إلى منتجات رقمية تدوم طويلاً.",
            services: "الخدمات",
            navigation: "التنقل",
            contact: "التواصل",
            madeWith: "مبني باستخدام Next.js و Tailwind CSS والكثير من القهوة.",
            rights: "جميع الحقوق محفوظة.",
            webDev: "تطوير الويب",
            mobileApps: "تطبيقات الجوال",
            uiUx: "تصميم الواجهات",
            home: "الرئيسية"
        },
        shared: {
            more: "اعرف المزيد",
            allWorks: "استعرض كل أعمالنا",
            chosen: "الأكثر طلباً",
            choosePlan: "اختر هذا العرض",
            faq: "الأسئلة الشائعة"
        },
        home: {
            badge: "وكالة ويب وجوال · تونس",
            heroTitleStart: "نصنع",
            heroHighlight: "تطبيقات",
            heroTitleEnd: "يعشقها المستخدمون",
            heroText: "تصمّم أوبكسيم وتبني مواقع ويب وتطبيقات جوال مخصصة. تصميم متقن، شيفرة عصرية، تسليم عبر دورات عمل: مشروعك يتقدم وأنت تحتفظ بالسيطرة.",
            heroCta: "ابدأ مشروعك",
            heroSecondary: "استعرض أعمالنا",
            servicesEta: "خدماتنا",
            servicesTitle: "كل ما تحتاجه للنجاح عبر الإنترنت",
            servicesText: "من أول نموذج تصميم حتى الإطلاق، نغطي دورة حياة منتجك الرقمي بالكامل.",
            methodEta: "منهجيتنا",
            methodTitle: "مسار واضح بلا مفاجآت",
            methodText: "تعرف دائماً أين وصل مشروعك، وما الذي يليه، وكم سيكلفك.",
            worksEta: "أعمالنا",
            worksTitle: "مشاريع تصنع الفرق",
            worksText: "نماذج من منتجات صممناها وطورناها وأطلقناها مع عملائنا.",
            quotesEta: "شهادات",
            quotesTitle: "عملاء وثقوا بنا",
            stackEta: "التقنيات",
            stackTitle: "تقنيات عصرية مُجرّبة",
            pricingEta: "الأسعار",
            pricingTitle: "عروض واضحة تناسب مرحلتك",
            pricingText: "ميزانية محددة منذ اليوم الأول. بلا تكاليف خفية ولا مفاجآت.",
            faqTitle: "أسئلتكم، إجاباتنا",
            contactTitle: "مشروع في بالك؟ لنحادث.",
            contactText: "نرد خلال 24 ساعة عمل، دون أي التزام.",
            contactCity: "باريس، فرنسا",
            contactCta: "ابدأ المحادثة",
            ctaTitle: "جاهز لإطلاق مشروعك؟",
            ctaText: "حدثنا عن فكرتك، وسنعود إليك بخطة عمل وتقدير واضح للمجانية.",
            ctaButton: "اطلب عرض سعر مجاني",
            stripMessage: "مشروع يدور في ذهنك؟",
            stripButton: "لنتحدث"
        },
        servicesPage: {
            title: "خدماتنا",
            intro: "أربع خبرات متكاملة لبناء منتجات رقمية كاملة، من التصميم إلى البنية التحتية.",
            techEta: "التقنيات",
            techTitle: "صندوق أدواتنا",
            techText: "نختار التقنية الملائمة لمشروعك، وليس العكس.",
            ctaTitle: "تحتاج خدمة محددة؟",
            ctaText: "صف لنا احتياجك، وسنخبرك بأمانة إن كنا الشريك المناسب — وإن لم نكن، فمن يجب أن تتصل به.",
            ctaButton: "دردش حول هذه الخدمة"
        },
        worksPage: {
            title: "أعمالنا",
            intro: "منتجات رقمية بُنيت مع عملائنا، وتقاس بالأثر الحقيقي الذي أحدثته.",
            clientsEta: "العملاء",
            clientsTitle: "ماذا يقولون",
            ctaTitle: "مشروعك هنا؟",
            ctaText: "كل خانة في هذه الشبكة بدأت بمحادثة. قد يكون مشروعك التالي."
        },
        contactPage: {
            title: "لنحادث عن مشروعك",
            intro: "صف فكرتك في بضعة أسطر. سنعود إليك بتحليل أولي وموعد، مجاناً.",
            form: {
                name: "الاسم الكامل *",
                namePlaceholder: "محمد العلي",
                email: "البريد الإلكتروني *",
                emailPlaceholder: "mohamed@company.com",
                company: "الشركة",
                companyPlaceholder: "شركة محدودة",
                projectType: "نوع المشروع *",
                budget: "الميزانية المتوقعة",
                message: "مشروعك في كلمات قليلة *",
                messagePlaceholder: "مثال: نريد تطبيق جوال ليتمكن عملاؤنا من حجز خدماتنا عبر الإنترنت...",
                submit: "أرسل طلبي",
                sending: "جارٍ الإرسال...",
                privacy: "بياناتك تبقى سرية ولا تُشارك أبداً."
            },
            success: {
                title: "تم إرسال الرسالة!",
                text: "شكراً لرسالتك. سيتواصل فريقنا معك خلال 24 ساعة عمل لتحديد مكالمة أولى.",
                again: "أرسل رسالة أخرى"
            },
            aside: {
                title: "تواصل مباشر",
                email: "البريد الإلكتروني",
                phone: "الهاتف",
                address: "العنوان",
                hours: "ساعات العمل",
                freeTitle: "⚡ مكالمة أولى مجانية",
                freeText: "30 دقيقة عبر الهاتف أو الفيديو لفهم احتياجك. ستخرج برأي صادق، حتى لو لم نعمل معاً."
            }
        },
        data: {
            services: [
                {
                    title: "تطوير الويب",
                    tagline: "مواقع الشركات، المتاجر الإلكترونية ومنصات SaaS",
                    description: "تطبيقات ويب سريعة ومتاحة وقابلة للتوسع. نصمم تجارب تُحمّل سريعاً، وتتصدر محركات البحث، وتحوّل زوارك إلى عملاء.",
                    deliverables: [
                        "موقع تعريفي أو مؤسسي",
                        "متجر إلكتروني",
                        "تطبيق ويب و SaaS",
                        "الترحيل وإعادة التصميم"
                    ]
                },
                {
                    title: "تطبيقات الجوال",
                    tagline: "iOS و Android، أصلي أو متعدد المنصات",
                    description: "تطبيقات جوال مصممة للاستخدام الواقعي: سلسة وأنيقة ومستقرة. من الفكرة حتى المتاجر، نرافقك في كل مرحلة من دورة حياة تطبيقك.",
                    deliverables: [
                        "تطبيقات iOS و Android",
                        "MVP للشركات الناشئة",
                        "تطبيقات داخلية",
                        "النشر على المتاجر"
                    ]
                },
                {
                    title: "تصميم الواجهات",
                    tagline: "واجهات محبوبة وفعالة",
                    description: "المنتج الجيد يبدأ بتجربة جيدة. نصمم واجهات واضحة، مختبرة مع مستخدمين حقيقيين، ونسلّم أنظمة تصميم قابلة لإعادة الاستخدام.",
                    deliverables: [
                        "نظام تصميم",
                        "نماذج Figma",
                        "تدقيق تجربة المستخدم",
                        "نماذج أولية تفاعلية"
                    ]
                },
                {
                    title: "الخوادم والسحابة",
                    tagline: "واجهات برمجية قوية وبنية تحتية موثوقة",
                    description: "الجزء الغائر من جبل الجليد: واجهات برمجية مؤمنة، قواعد بيانات نموذجية جيداً، CI/CD واستضافة سحابية. كل ما تحتاجه للنمو دون ألم.",
                    deliverables: [
                        "واجهات REST و GraphQL",
                        "بنية سحابية",
                        "CI/CD و DevOps",
                        "المراقبة والأمن"
                    ]
                }
            ],
            steps: [
                {
                    title: "الاستكشاف",
                    description: "محادثة أولى لفهم مجال عملك ومستخدميك وقيودك. بلا مصطلحات معقدة وبلا التزام."
                },
                {
                    title: "التصميم",
                    description: "نماذج أولية وتصاميم ومجموعة تقنية تعتمدها معنا. تعرف بدقة ما سيُسلَّم، وبأي سعر."
                },
                {
                    title: "التطوير",
                    description: "دورات عمل من أسبوعين مع عروض دورية. ترى المنتج يتقدم ويمكنك تعديل المسار باستمرار."
                },
                {
                    title: "الإطلاق والمتابعة",
                    description: "الإطلاق، تدريب فرقك، والصيانة. نبقى إلى جانبك بعد النشر."
                }
            ],
            testimonials: [
                {
                    quote: "فهمت أوبكسيم مجالنا في أسبوع واحد. خرج التطبيق في الموعد، بمستوى إتقان لم نره من أي مزود من قبل.",
                    author: "سارة ماركيتي",
                    role: "المديرة التنفيذية، PayFlow"
                },
                {
                    quote: "أعاد بناء متجرنا الإلكتروني مضاعفة سلة الشراء الوسطى في ثلاثة أشهر. تواصل واضح، تكرار سريع، صفر مفاجآت في الفواتير.",
                    author: "كريم بلقاسم",
                    role: "المؤسس، Marché Libre"
                },
                {
                    quote: "استبدلوا أداة Excel مرعبة بمنصة تبنّاها الفريق كله في يومين. عمل فنان.",
                    author: "كلير دوبوا",
                    role: "مديرة العمليات، MediTrack"
                }
            ],
            pricing: [
                {
                    name: "موقع تعريفي",
                    price: "ابتداءً من 2,900 €",
                    description: "لتتواجد عبر الإنترنت بموقع سريع ومصقول.",
                    features: [
                        "تصميم مخصص (تشمل النماذج)",
                        "حتى 8 صفحات",
                        "تحسين أساسي لمحركات البحث",
                        "نموذج اتصال",
                        "الإطلاق والتدريب",
                        "3 أشهر صيانة مجانية"
                    ]
                },
                {
                    name: "حزمة التطبيق",
                    price: "ابتداءً من 14,900 €",
                    description: "لإطلاق تطبيق جوال أو منصة SaaS.",
                    features: [
                        "دراسة تجربة المستخدم والنماذج",
                        "تطبيق iOS + Android أو تطبيق ويب",
                        "الخوادم والواجهات البرمجية مشمولة",
                        "النشر على المتاجر",
                        "التحليلات والمتابعة",
                        "6 أشهر صيانة مجانية"
                    ]
                },
                {
                    name: "مخصص",
                    price: "بعرض سعر",
                    description: "للمشاريع الطموحة بمتطلبات خاصة.",
                    features: [
                        "تحديد الإطار وورش التصميم",
                        "بنية مخصصة",
                        "التكامل مع الأنظمة القائمة",
                        "فريق مخصص للمشروع",
                        "اتفاقية مستوى خدمة ودعم ذو أولوية",
                        "تطور مستمر"
                    ]
                }
            ],
            faq: [
                {
                    question: "كم يكلف موقع أو تطبيق؟",
                    answer: "يبدأ الموقع التعريفي حوالي 2,900 €، وتتجاوز تطبيقات الجوال 14,900 €. كل مشروع فريد، لذا نعد عرض سعر مفصلاً وخالياً من المفاجآت بعد مكالمة أولى مجانية."
                },
                {
                    question: "ما هي آجال تنفيذكم؟",
                    answer: "احسب 3 إلى 6 أسابيع لموقع تعريفي، و2 إلى 4 أشهر لتطبيق جوال أو منصة ويب. نسلم عبر دورات عمل، فترى المنتج منذ الأسابيع الأولى."
                },
                {
                    question: "هل تعملون مع عملاء خارج باريس؟",
                    answer: "نعم، نعمل مع عملاء في كل فرنسا وأوروبا. عملياتنا عن بُعد (عروض أسبوعية، أداة إدارة مشتركة) تجعل التعاون سلساً أينما كنت."
                },
                {
                    question: "ماذا يحدث بعد الإطلاق؟",
                    answer: "كل مشروع يشمل فترة ضمان. بعدها تغطي عروض الصيانة لدينا التحديثات والأمن والنسخ الاحتياطية والتطورات. تبقى أنت سيّد منتجك."
                },
                {
                    question: "شيفرة مخصصة أم منصات جاهزة؟",
                    answer: "نطوّر شيفرة مخصصة بتقنيات عصرية (Next.js، React Native...). هذا يضمن الأداء وملكية الشيفرة والتحرر من المنصات المغلقة. وفي الميزانيات المحدودة نعرف أيضاً أن نوصي بحل جاهز مناسب."
                }
            ],
            projectTypes: [
                "موقع تعريفي",
                "متجر إلكتروني",
                "تطبيق جوال",
                "منصة ويب / SaaS",
                "إعادة تصميم / ترحيل",
                "أخرى"
            ],
            budgets: [
                "أقل من 5,000 €",
                "5,000 – 15,000 €",
                "15,000 – 50,000 €",
                "أكثر من 50,000 €",
                "لست متأكداً بعد"
            ],
            projectsText: [
                {
                    category: "تقنية مالية · تطبيق جوال",
                    description: "تطبيق جوال للدفع بين الأفراد مع مصادقة بيومترية ومتابعة المعاملات في الوقت الحقيقي.",
                    result: "120,000 تحميل في السنة الأولى"
                },
                {
                    category: "تجارة إلكترونية · ويب",
                    description: "منصة تجارة إلكترونية للمنتجات المحلية مع بحث فوري وسلة محسّنة ولوحة تحكم للبائع.",
                    result: "+38% معدل تحويل بعد إعادة التصميم"
                },
                {
                    category: "صحة · SaaS",
                    description: "نظام SaaS لتتبع المخزون في الصيدليات: تنبيهات انتهاء الصلاحية، طلبات آلية والالتزام ببيانات الصحة.",
                    result: "97% تقليص في نفايات المخزون"
                },
                {
                    category: "تنقل · تطبيق هجين",
                    description: "تطبيق مشاركة الركوب مخصص للجامعات: رحلات يومية، حجز مقاعد ورسائل مدمجة.",
                    result: "45,000 رحلة منظمة في 8 أشهر"
                },
                {
                    category: "حرف · موقع تعريفي",
                    description: "موقع تعريفي لورشة خزف مع معرض غامر وحجز مواعيد عبر الإنترنت وبيع قطع فريدة.",
                    result: "دفتر طلبات ممتلئ لمدة 6 أشهر"
                },
                {
                    category: "لوجستيك · منصة B2B",
                    description: "منصة ويب لإدارة أسطول المركبات: تتبع GPS حياً، صيانة تنبؤية وتقارير آلية.",
                    result: "-30% من تكاليف صيانة الأسطول"
                }
            ],
            stats: [
                {
                    value: "+60",
                    label: "مشروع منجز"
                },
                {
                    value: "12",
                    label: "سنة خبرة"
                },
                {
                    value: "98%",
                    label: "عملاء راضون"
                },
                {
                    value: "8",
                    label: "خبراء شغوفون"
                }
            ]
        }
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]})(),
"[project]/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_15gqwaguxzatv._.js.map