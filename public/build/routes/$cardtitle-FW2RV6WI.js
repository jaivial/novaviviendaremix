import {
  Icon
} from "/build/_shared/chunk-X5BDPUXS.js";
import {
  useScreenWidth
} from "/build/_shared/chunk-SJLVGFL7.js";
import {
  Link,
  useLoaderData
} from "/build/_shared/chunk-MSSNAIN3.js";
import "/build/_shared/chunk-PLT55Z5M.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-F4KNNEUR.js";
import {
  createHotContext
} from "/build/_shared/chunk-W5YVNTNU.js";
import "/build/_shared/chunk-JR22VO6P.js";
import {
  require_react
} from "/build/_shared/chunk-2Z2JGDFU.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/contextproviders/DynamicServiciosPageProvider.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/contextproviders/DynamicServiciosPageProvider.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/contextproviders/DynamicServiciosPageProvider.tsx"
  );
  import.meta.hot.lastModified = "1732888096872.9883";
}
var DynamicServiciosPageContext = (0, import_react.createContext)(void 0);
var DynamicServiciosPageContextProvider = ({
  card,
  children
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DynamicServiciosPageContext.Provider, { value: card, children }, void 0, false, {
    fileName: "app/contextproviders/DynamicServiciosPageProvider.tsx",
    lineNumber: 35,
    columnNumber: 10
  }, this);
};
_c = DynamicServiciosPageContextProvider;
var useDynamicsServiciosPage = () => {
  _s();
  const context = (0, import_react.useContext)(DynamicServiciosPageContext);
  if (!context) {
    throw new Error("useDynamicServiciosPage must be used within DynamicServiiosPageContext.Provider");
  }
  return context;
};
_s(useDynamicsServiciosPage, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
$RefreshReg$(_c, "DynamicServiciosPageContextProvider");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/Nav.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Nav.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Nav.tsx"
  );
  import.meta.hot.lastModified = "1732889928748.0117";
}
var Nav = () => {
  _s2();
  const {
    screenWidth
  } = useScreenWidth();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("nav", { className: `fixed top-0 left-0 right-0 ${screenWidth < 450 ? "w-[95%] px-0 flex flex-row justify-center items-center" : "w-fit px-16"} mx-auto mt-3 rounded-xl py-auto z-[99] backdrop-blur-sm bg-gray-950 bg-opacity-50 flex flex-col justify-center items-center border-[0.9px] border-gray-400 border-opacity-50`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { className: "flex justify-center items-center w-fit px-8 mx-auto gap-8 text-gray-200 pt-4 text-sans font-medium pb-4 z-[99]", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "/", children: "Inicio" }, void 0, false, {
      fileName: "app/components/Nav.tsx",
      lineNumber: 33,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/Nav.tsx",
      lineNumber: 32,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "/about", children: "Precios" }, void 0, false, {
      fileName: "app/components/Nav.tsx",
      lineNumber: 36,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/Nav.tsx",
      lineNumber: 35,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "/contact", children: "Servicios" }, void 0, false, {
      fileName: "app/components/Nav.tsx",
      lineNumber: 39,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/Nav.tsx",
      lineNumber: 38,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Nav.tsx",
    lineNumber: 31,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Nav.tsx",
    lineNumber: 30,
    columnNumber: 10
  }, this);
};
_s2(Nav, "qNc2XciqomHr/tRhWGE/SuBdPsM=", false, function() {
  return [useScreenWidth];
});
_c2 = Nav;
var Nav_default = Nav;
var _c2;
$RefreshReg$(_c2, "Nav");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/ServiciosInfoSectionOne.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/ServiciosInfoSectionOne.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/ServiciosInfoSectionOne.tsx"
  );
  import.meta.hot.lastModified = "1732895857876.2937";
}
var ServiciosInfoSectionOne = ({
  card,
  screenWidth
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: `w-[95%] h-[500px] flex flex-row justify-center items-center relative mx-auto`, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "h-[15rem] w-[45rem] bg-blue-200 blur-[15rem] rounded-full absolute -top-[15rem]" }, void 0, false, {
      fileName: "app/components/ServiciosInfoSectionOne.tsx",
      lineNumber: 32,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: `${screenWidth < 830 ? "flex-col justify-center items-center gap-4 w-[95%]" : screenWidth < 1024 ? " flex-row items-center justify-between" : "w-full flex-row items-center justify-between"} max-w-[1024px] rounded-xl flex h-auto absolute bottom-[200px]`, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: `w-fit flex flex-row h-auto  ${screenWidth < 420 ? "flex-col justify-center items-center gap-6" : "flex-row justify-start items-start gap-10"}`, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "max-w-[6rem] max-h-[6rem] min-h-[6rem] min-w-[6rem] rounded-3xl bg-gradient-to-br from-slate-800 to bg-slate-900 border-[0.8px] border-slate-700 flex justify-center items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Icon, { icon: card.icon, className: "w-full h-auto text-white p-2" }, void 0, false, {
          fileName: "app/components/ServiciosInfoSectionOne.tsx",
          lineNumber: 38,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/components/ServiciosInfoSectionOne.tsx",
          lineNumber: 37,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: `h-auto w-full flex flex-col justify-start ${screenWidth < 420 ? "items-center" : "items-start"} gap-3`, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: `flex flex-col ${screenWidth < 420 ? "items-center w-[80%]" : "items-start w-fit"}`, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h3", { className: "text-white font-bold font-sans text-lg", children: card.title }, void 0, false, {
              fileName: "app/components/ServiciosInfoSectionOne.tsx",
              lineNumber: 42,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h4", { className: `text-gray-300 font-medium font-sans text-sm ${screenWidth < 420 ? "text-center w-full" : screenWidth < 1024 ? "w-[90%]" : "w-full"}`, children: card.description }, void 0, false, {
              fileName: "app/components/ServiciosInfoSectionOne.tsx",
              lineNumber: 43,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/ServiciosInfoSectionOne.tsx",
            lineNumber: 41,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex flex-row items-center gap-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex flex-row items-center gap-2", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Icon, { icon: "material-symbols-light:folder-open-sharp", className: "text-white text-lg" }, void 0, false, {
                fileName: "app/components/ServiciosInfoSectionOne.tsx",
                lineNumber: 47,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "text-white font-thin text-base", children: card.selectedTab }, void 0, false, {
                fileName: "app/components/ServiciosInfoSectionOne.tsx",
                lineNumber: 48,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/ServiciosInfoSectionOne.tsx",
              lineNumber: 46,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Icon, { icon: "fluent-mdl2:separator", className: "text-white text-2xl" }, void 0, false, {
              fileName: "app/components/ServiciosInfoSectionOne.tsx",
              lineNumber: 51,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/components/ServiciosInfoSectionOne.tsx",
              lineNumber: 50,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex flex-row items-center gap-2", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Icon, { icon: "mdi:clock", className: "text-white text-xl" }, void 0, false, {
                fileName: "app/components/ServiciosInfoSectionOne.tsx",
                lineNumber: 54,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "text-white font-thin text-base", children: card.readTime }, void 0, false, {
                fileName: "app/components/ServiciosInfoSectionOne.tsx",
                lineNumber: 55,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/ServiciosInfoSectionOne.tsx",
              lineNumber: 53,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/ServiciosInfoSectionOne.tsx",
            lineNumber: 45,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/ServiciosInfoSectionOne.tsx",
          lineNumber: 40,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/ServiciosInfoSectionOne.tsx",
        lineNumber: 36,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: `/precios`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("button", { className: "rounded-xl bg-slate-200 md:hover:bg-white md:hover:px-4 md:hover:py-3 font-medium text-base md:hover:text-lg border border-black px-3 py-2 text-black font-sans transition-all ease-soft-spring duration-[1000ms]", children: "Empezar ahora" }, void 0, false, {
        fileName: "app/components/ServiciosInfoSectionOne.tsx",
        lineNumber: 62,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/ServiciosInfoSectionOne.tsx",
        lineNumber: 61,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/ServiciosInfoSectionOne.tsx",
      lineNumber: 34,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/ServiciosInfoSectionOne.tsx",
    lineNumber: 30,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/ServiciosInfoSectionOne.tsx",
    lineNumber: 29,
    columnNumber: 10
  }, this);
};
_c3 = ServiciosInfoSectionOne;
var ServiciosInfoSectionOne_default = ServiciosInfoSectionOne;
var _c3;
$RefreshReg$(_c3, "ServiciosInfoSectionOne");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/ServiciosPageContainer.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/ServiciosPageContainer.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s3 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/ServiciosPageContainer.tsx"
  );
  import.meta.hot.lastModified = "1732894971243.606";
}
var ServiciosPageContainer = () => {
  _s3();
  const card = useDynamicsServiciosPage();
  const {
    screenWidth
  } = useScreenWidth();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "overflow-x-hidden", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Nav_default, {}, void 0, false, {
      fileName: "app/components/ServiciosPageContainer.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ServiciosInfoSectionOne_default, { card, screenWidth }, void 0, false, {
      fileName: "app/components/ServiciosPageContainer.tsx",
      lineNumber: 38,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/ServiciosPageContainer.tsx",
    lineNumber: 36,
    columnNumber: 10
  }, this);
};
_s3(ServiciosPageContainer, "bwspnyvGGftKj6c9mlUYt1ciOBk=", false, function() {
  return [useDynamicsServiciosPage, useScreenWidth];
});
_c4 = ServiciosPageContainer;
var ServiciosPageContainer_default = ServiciosPageContainer;
var _c4;
$RefreshReg$(_c4, "ServiciosPageContainer");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/$cardtitle.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/$cardtitle.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s4 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/$cardtitle.tsx"
  );
  import.meta.hot.lastModified = "1732889534120.6226";
}
var DynamicServiciosPage = () => {
  _s4();
  const card = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(DynamicServiciosPageContextProvider, { card, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(ServiciosPageContainer_default, {}, void 0, false, {
    fileName: "app/routes/$cardtitle.tsx",
    lineNumber: 47,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/$cardtitle.tsx",
    lineNumber: 46,
    columnNumber: 10
  }, this);
};
_s4(DynamicServiciosPage, "qZ/qu/SD/I/AC/EHBs0y+cK2/Bs=", false, function() {
  return [useLoaderData];
});
_c5 = DynamicServiciosPage;
var cardtitle_default = DynamicServiciosPage;
var _c5;
$RefreshReg$(_c5, "DynamicServiciosPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  cardtitle_default as default
};
//# sourceMappingURL=/build/routes/$cardtitle-FW2RV6WI.js.map
