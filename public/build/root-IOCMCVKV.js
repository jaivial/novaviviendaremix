import {
  NextUIProvider
} from "/build/_shared/chunk-TNMZ6TMB.js";
import "/build/_shared/chunk-Y6RJRNBS.js";
import {
  ScreenWidthContextProvider
} from "/build/_shared/chunk-SJLVGFL7.js";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "/build/_shared/chunk-MSSNAIN3.js";
import "/build/_shared/chunk-PLT55Z5M.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-F4KNNEUR.js";
import {
  createHotContext
} from "/build/_shared/chunk-W5YVNTNU.js";
import "/build/_shared/chunk-JR22VO6P.js";
import "/build/_shared/chunk-2Z2JGDFU.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/root.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/root.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/root.tsx"
  );
}
var links = () => [{
  rel: "preconnect",
  href: "https://fonts.googleapis.com"
}, {
  rel: "preconnect",
  href: "https://fonts.gstatic.com",
  crossOrigin: "anonymous"
}, {
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
}];
function Layout({
  children
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", { charSet: "utf-8" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Links, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 43,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", { style: {
      margin: 0,
      backgroundColor: "#000",
      height: "100%",
      overflowX: "hidden"
    }, className: "bg-black min-h-dvh", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ScreenWidthContextProvider, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NextUIProvider, { children: [
      children,
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ScrollRestoration, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 54,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Scripts, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 55,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 52,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/root.tsx",
      lineNumber: 51,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/root.tsx",
      lineNumber: 45,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("footer", { className: "bg-black text-gray-50 backdrop-blur-sm py-6 pt-24 absolute w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center md:text-left", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-white text-lg font-semibold", children: "Vivienda Nova" }, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 63,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-50 text-sm", children: [
          "\xA9 ",
          (/* @__PURE__ */ new Date()).getFullYear(),
          " Todos los derechos reservados."
        ] }, void 0, true, {
          fileName: "app/root.tsx",
          lineNumber: 64,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/root.tsx",
        lineNumber: 62,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex space-x-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "#", className: "text-gray-50 md:hover:text-slate-900 md:cursor-pointer md:hover:bg-gray-100 p-2 rounded-xl", children: "Pol\xEDtica de Privacidad" }, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 67,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "#", className: "text-gray-50 md:hover:text-slate-900 md:cursor-pointer md:hover:bg-gray-100 p-2 rounded-xl", children: "T\xE9rminos de Servicio" }, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 70,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "#", className: "text-gray-50 md:hover:text-slate-900 md:cursor-pointer md:hover:bg-gray-100 p-2 rounded-xl", children: "Contacto" }, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 73,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/root.tsx",
        lineNumber: 66,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 61,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/root.tsx",
      lineNumber: 60,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/root.tsx",
      lineNumber: 59,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.tsx",
    lineNumber: 38,
    columnNumber: 10
  }, this);
}
_c = Layout;
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
    fileName: "app/root.tsx",
    lineNumber: 84,
    columnNumber: 10
  }, this);
}
_c2 = App;
var _c;
var _c2;
$RefreshReg$(_c, "Layout");
$RefreshReg$(_c2, "App");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Layout,
  App as default,
  links
};
//# sourceMappingURL=/build/root-IOCMCVKV.js.map
