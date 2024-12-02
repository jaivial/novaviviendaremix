import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-F4KNNEUR.js";
import {
  createHotContext
} from "/build/_shared/chunk-W5YVNTNU.js";
import {
  require_react
} from "/build/_shared/chunk-2Z2JGDFU.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/ScreenWidthProvider.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/ScreenWidthProvider.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/ScreenWidthProvider.tsx"
  );
  import.meta.hot.lastModified = "1732638222127.3867";
}
var ScreenWidthContext = (0, import_react.createContext)(void 0);
var ScreenWidthContextProvider = ({
  children
}) => {
  _s();
  const [screenWidth, setScreenWidth] = (0, import_react.useState)(0);
  (0, import_react.useEffect)(() => {
    if (typeof window === void 0)
      return;
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    setScreenWidth(window.innerWidth);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ScreenWidthContext.Provider, { value: {
    screenWidth
  }, children }, void 0, false, {
    fileName: "app/ScreenWidthProvider.tsx",
    lineNumber: 56,
    columnNumber: 10
  }, this);
};
_s(ScreenWidthContextProvider, "p7mA4Om2cHpiZ8viGIkF1WDmDDM=");
_c = ScreenWidthContextProvider;
var useScreenWidth = () => {
  _s2();
  const context = (0, import_react.useContext)(ScreenWidthContext);
  if (!context) {
    throw new Error("useScreenWidth must be used within a ScreenWidthContext Provider");
  }
  return context;
};
_s2(useScreenWidth, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
$RefreshReg$(_c, "ScreenWidthContextProvider");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  ScreenWidthContextProvider,
  useScreenWidth
};
//# sourceMappingURL=/build/_shared/chunk-SJLVGFL7.js.map
