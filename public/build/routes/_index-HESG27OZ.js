import {
  $03deb23ff14920c4$export$4eaf04e54aa8eed6,
  $18f2051aff69b9bf$export$43bb16f9c6d9e3f7,
  $2f04cbc44ee30ce0$export$53a0910f038337bd,
  $2f04cbc44ee30ce0$export$c826860796309d1b,
  $313b98861ee5dd6c$export$d6875122194c7b44,
  $3ef42575df84b30b$export$9d1611c77c2fe928,
  $431fbd86ca7dc216$export$b204af158042fbac,
  $431fbd86ca7dc216$export$f21a1ffae260145a,
  $458b0a5536c1a7cf$export$40bfa8c7b0832715,
  $65484d02dcb7eb3e$export$457c3d6518dd4c6f,
  $6a7db85432448f7f$export$29bf1b5f2c56cf63,
  $6a7db85432448f7f$export$60278871457622de,
  $7215afc6de606d6b$export$de79e2c695e052f3,
  $8ae05eaa5c114e9c$export$7f54fc3180508a52,
  $bbed8b41f857bcc0$export$24490316f764c430,
  $bdb11010cef70236$export$f680877a34711e37,
  $c87311424ea30a05$export$9ac100e40613ea10,
  $c87311424ea30a05$export$e1865c3bedcd822b,
  $c87311424ea30a05$export$fedb369cb70207f1,
  $e7801be82b4b2a53$export$4debdb1a3f0fa79e,
  $e9faafb641e167db$export$90fc3a17d93f704c,
  $ea8dcbcb9ea1b556$export$7e924b3091a3bd18,
  $ea8dcbcb9ea1b556$export$95185d699e05d4d7,
  $ea8dcbcb9ea1b556$export$9a302a45f65d0572,
  $ef06256079686ba0$export$f8aeda7b10753fa1,
  $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c,
  $ff5963eb1fccf552$export$e08e3b67e392101e,
  LayoutGroup,
  LazyMotion,
  domMax,
  filterDOMProps,
  forwardRef,
  m,
  mapPropsVariants,
  useDOMRef,
  useProviderContext
} from "/build/_shared/chunk-TNMZ6TMB.js";
import {
  require_jsx_runtime
} from "/build/_shared/chunk-Y6RJRNBS.js";
import {
  Icon,
  cardsInfo
} from "/build/_shared/chunk-X5BDPUXS.js";
import {
  useScreenWidth
} from "/build/_shared/chunk-SJLVGFL7.js";
import {
  Link
} from "/build/_shared/chunk-MSSNAIN3.js";
import {
  require_react_dom
} from "/build/_shared/chunk-PLT55Z5M.js";
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

// app/routes/_index.tsx
var import_react33 = __toESM(require_react(), 1);

// app/components/ServiciosList.tsx
var import_react27 = __toESM(require_react(), 1);

// node_modules/@nextui-org/shared-utils/dist/chunk-MCFSCOSB.mjs
var dataAttr = (condition) => condition ? "true" : void 0;

// node_modules/@nextui-org/shared-utils/dist/chunk-6BQDBGF4.mjs
function toVal(mix) {
  var k, y2, str = "";
  if (typeof mix === "string" || typeof mix === "number") {
    str += mix;
  } else if (typeof mix === "object") {
    if (Array.isArray(mix)) {
      for (k = 0; k < mix.length; k++) {
        if (mix[k]) {
          if (y2 = toVal(mix[k])) {
            str && (str += " ");
            str += y2;
          }
        }
      }
    } else {
      for (k in mix) {
        if (mix[k]) {
          str && (str += " ");
          str += k;
        }
      }
    }
  }
  return str;
}
function clsx(...args) {
  var i2 = 0, tmp, x2, str = "";
  while (i2 < args.length) {
    if (tmp = args[i2++]) {
      if (x2 = toVal(tmp)) {
        str && (str += " ");
        str += x2;
      }
    }
  }
  return str;
}

// node_modules/@nextui-org/shared-utils/dist/chunk-SOU6N57Y.mjs
function objectToDeps(obj) {
  if (!obj || typeof obj !== "object") {
    return "";
  }
  try {
    return JSON.stringify(obj);
  } catch (e2) {
    return "";
  }
}

// node_modules/@swc/helpers/esm/_check_private_redeclaration.js
function _check_private_redeclaration(obj, privateCollection) {
  if (privateCollection.has(obj)) {
    throw new TypeError("Cannot initialize the same private elements twice on an object");
  }
}

// node_modules/@swc/helpers/esm/_class_private_field_init.js
function _class_private_field_init(obj, privateMap, value) {
  _check_private_redeclaration(obj, privateMap);
  privateMap.set(obj, value);
}

// node_modules/@react-aria/interactions/dist/textSelection.mjs
var $14c0b72509d70225$var$state = "default";
var $14c0b72509d70225$var$savedUserSelect = "";
var $14c0b72509d70225$var$modifiedElementMap = /* @__PURE__ */ new WeakMap();
function $14c0b72509d70225$export$16a4697467175487(target) {
  if ((0, $c87311424ea30a05$export$fedb369cb70207f1)()) {
    if ($14c0b72509d70225$var$state === "default") {
      const documentObject = (0, $431fbd86ca7dc216$export$b204af158042fbac)(target);
      $14c0b72509d70225$var$savedUserSelect = documentObject.documentElement.style.webkitUserSelect;
      documentObject.documentElement.style.webkitUserSelect = "none";
    }
    $14c0b72509d70225$var$state = "disabled";
  } else if (target instanceof HTMLElement || target instanceof SVGElement) {
    $14c0b72509d70225$var$modifiedElementMap.set(target, target.style.userSelect);
    target.style.userSelect = "none";
  }
}
function $14c0b72509d70225$export$b0d6fa1ab32e3295(target) {
  if ((0, $c87311424ea30a05$export$fedb369cb70207f1)()) {
    if ($14c0b72509d70225$var$state !== "disabled")
      return;
    $14c0b72509d70225$var$state = "restoring";
    setTimeout(() => {
      (0, $bbed8b41f857bcc0$export$24490316f764c430)(() => {
        if ($14c0b72509d70225$var$state === "restoring") {
          const documentObject = (0, $431fbd86ca7dc216$export$b204af158042fbac)(target);
          if (documentObject.documentElement.style.webkitUserSelect === "none")
            documentObject.documentElement.style.webkitUserSelect = $14c0b72509d70225$var$savedUserSelect || "";
          $14c0b72509d70225$var$savedUserSelect = "";
          $14c0b72509d70225$var$state = "default";
        }
      });
    }, 300);
  } else if (target instanceof HTMLElement || target instanceof SVGElement) {
    if (target && $14c0b72509d70225$var$modifiedElementMap.has(target)) {
      let targetOldUserSelect = $14c0b72509d70225$var$modifiedElementMap.get(target);
      if (target.style.userSelect === "none")
        target.style.userSelect = targetOldUserSelect;
      if (target.getAttribute("style") === "")
        target.removeAttribute("style");
      $14c0b72509d70225$var$modifiedElementMap.delete(target);
    }
  }
}

// node_modules/@react-aria/interactions/dist/context.mjs
var import_react = __toESM(require_react(), 1);
var $ae1eeba8b9eafd08$export$5165eccb35aaadb5 = (0, import_react.default).createContext({
  register: () => {
  }
});
$ae1eeba8b9eafd08$export$5165eccb35aaadb5.displayName = "PressResponderContext";

// node_modules/@swc/helpers/esm/_class_apply_descriptor_get.js
function _class_apply_descriptor_get(receiver, descriptor) {
  if (descriptor.get)
    return descriptor.get.call(receiver);
  return descriptor.value;
}

// node_modules/@swc/helpers/esm/_class_extract_field_descriptor.js
function _class_extract_field_descriptor(receiver, privateMap, action) {
  if (!privateMap.has(receiver))
    throw new TypeError("attempted to " + action + " private field on non-instance");
  return privateMap.get(receiver);
}

// node_modules/@swc/helpers/esm/_class_private_field_get.js
function _class_private_field_get(receiver, privateMap) {
  var descriptor = _class_extract_field_descriptor(receiver, privateMap, "get");
  return _class_apply_descriptor_get(receiver, descriptor);
}

// node_modules/@swc/helpers/esm/_class_apply_descriptor_set.js
function _class_apply_descriptor_set(receiver, descriptor, value) {
  if (descriptor.set)
    descriptor.set.call(receiver, value);
  else {
    if (!descriptor.writable) {
      throw new TypeError("attempted to set read only private field");
    }
    descriptor.value = value;
  }
}

// node_modules/@swc/helpers/esm/_class_private_field_set.js
function _class_private_field_set(receiver, privateMap, value) {
  var descriptor = _class_extract_field_descriptor(receiver, privateMap, "set");
  _class_apply_descriptor_set(receiver, descriptor, value);
  return value;
}

// node_modules/@react-aria/interactions/dist/usePress.mjs
var import_react2 = __toESM(require_react(), 1);
function $f6c31cce2adf654f$var$usePressResponderContext(props) {
  let context = (0, import_react2.useContext)((0, $ae1eeba8b9eafd08$export$5165eccb35aaadb5));
  if (context) {
    let { register, ...contextProps } = context;
    props = (0, $3ef42575df84b30b$export$9d1611c77c2fe928)(contextProps, props);
    register();
  }
  (0, $e7801be82b4b2a53$export$4debdb1a3f0fa79e)(context, props.ref);
  return props;
}
var $f6c31cce2adf654f$var$_shouldStopPropagation = /* @__PURE__ */ new WeakMap();
var $f6c31cce2adf654f$var$PressEvent = class {
  continuePropagation() {
    (0, _class_private_field_set)(this, $f6c31cce2adf654f$var$_shouldStopPropagation, false);
  }
  get shouldStopPropagation() {
    return (0, _class_private_field_get)(this, $f6c31cce2adf654f$var$_shouldStopPropagation);
  }
  constructor(type, pointerType, originalEvent) {
    (0, _class_private_field_init)(this, $f6c31cce2adf654f$var$_shouldStopPropagation, {
      writable: true,
      value: void 0
    });
    (0, _class_private_field_set)(this, $f6c31cce2adf654f$var$_shouldStopPropagation, true);
    this.type = type;
    this.pointerType = pointerType;
    this.target = originalEvent.currentTarget;
    this.shiftKey = originalEvent.shiftKey;
    this.metaKey = originalEvent.metaKey;
    this.ctrlKey = originalEvent.ctrlKey;
    this.altKey = originalEvent.altKey;
  }
};
var $f6c31cce2adf654f$var$LINK_CLICKED = Symbol("linkClicked");
function $f6c31cce2adf654f$export$45712eceda6fad21(props) {
  let {
    onPress,
    onPressChange,
    onPressStart,
    onPressEnd,
    onPressUp,
    isDisabled,
    isPressed: isPressedProp,
    preventFocusOnPress,
    shouldCancelOnPointerExit,
    allowTextSelectionOnPress,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ref: _2,
    ...domProps
  } = $f6c31cce2adf654f$var$usePressResponderContext(props);
  let [isPressed, setPressed] = (0, import_react2.useState)(false);
  let ref = (0, import_react2.useRef)({
    isPressed: false,
    ignoreEmulatedMouseEvents: false,
    ignoreClickAfterPress: false,
    didFirePressStart: false,
    isTriggeringEvent: false,
    activePointerId: null,
    target: null,
    isOverTarget: false,
    pointerType: null
  });
  let { addGlobalListener, removeAllGlobalListeners } = (0, $03deb23ff14920c4$export$4eaf04e54aa8eed6)();
  let triggerPressStart = (0, $8ae05eaa5c114e9c$export$7f54fc3180508a52)((originalEvent, pointerType) => {
    let state = ref.current;
    if (isDisabled || state.didFirePressStart)
      return false;
    let shouldStopPropagation = true;
    state.isTriggeringEvent = true;
    if (onPressStart) {
      let event = new $f6c31cce2adf654f$var$PressEvent("pressstart", pointerType, originalEvent);
      onPressStart(event);
      shouldStopPropagation = event.shouldStopPropagation;
    }
    if (onPressChange)
      onPressChange(true);
    state.isTriggeringEvent = false;
    state.didFirePressStart = true;
    setPressed(true);
    return shouldStopPropagation;
  });
  let triggerPressEnd = (0, $8ae05eaa5c114e9c$export$7f54fc3180508a52)((originalEvent, pointerType, wasPressed = true) => {
    let state = ref.current;
    if (!state.didFirePressStart)
      return false;
    state.ignoreClickAfterPress = true;
    state.didFirePressStart = false;
    state.isTriggeringEvent = true;
    let shouldStopPropagation = true;
    if (onPressEnd) {
      let event = new $f6c31cce2adf654f$var$PressEvent("pressend", pointerType, originalEvent);
      onPressEnd(event);
      shouldStopPropagation = event.shouldStopPropagation;
    }
    if (onPressChange)
      onPressChange(false);
    setPressed(false);
    if (onPress && wasPressed && !isDisabled) {
      let event = new $f6c31cce2adf654f$var$PressEvent("press", pointerType, originalEvent);
      onPress(event);
      shouldStopPropagation && (shouldStopPropagation = event.shouldStopPropagation);
    }
    state.isTriggeringEvent = false;
    return shouldStopPropagation;
  });
  let triggerPressUp = (0, $8ae05eaa5c114e9c$export$7f54fc3180508a52)((originalEvent, pointerType) => {
    let state = ref.current;
    if (isDisabled)
      return false;
    if (onPressUp) {
      state.isTriggeringEvent = true;
      let event = new $f6c31cce2adf654f$var$PressEvent("pressup", pointerType, originalEvent);
      onPressUp(event);
      state.isTriggeringEvent = false;
      return event.shouldStopPropagation;
    }
    return true;
  });
  let cancel = (0, $8ae05eaa5c114e9c$export$7f54fc3180508a52)((e2) => {
    let state = ref.current;
    if (state.isPressed && state.target) {
      if (state.isOverTarget && state.pointerType != null)
        triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e2), state.pointerType, false);
      state.isPressed = false;
      state.isOverTarget = false;
      state.activePointerId = null;
      state.pointerType = null;
      removeAllGlobalListeners();
      if (!allowTextSelectionOnPress)
        (0, $14c0b72509d70225$export$b0d6fa1ab32e3295)(state.target);
    }
  });
  let cancelOnPointerExit = (0, $8ae05eaa5c114e9c$export$7f54fc3180508a52)((e2) => {
    if (shouldCancelOnPointerExit)
      cancel(e2);
  });
  let pressProps = (0, import_react2.useMemo)(() => {
    let state = ref.current;
    let pressProps2 = {
      onKeyDown(e2) {
        if ($f6c31cce2adf654f$var$isValidKeyboardEvent(e2.nativeEvent, e2.currentTarget) && e2.currentTarget.contains(e2.target)) {
          var _state_metaKeyEvents;
          if ($f6c31cce2adf654f$var$shouldPreventDefaultKeyboard(e2.target, e2.key))
            e2.preventDefault();
          let shouldStopPropagation = true;
          if (!state.isPressed && !e2.repeat) {
            state.target = e2.currentTarget;
            state.isPressed = true;
            shouldStopPropagation = triggerPressStart(e2, "keyboard");
            let originalTarget = e2.currentTarget;
            let pressUp = (e3) => {
              if ($f6c31cce2adf654f$var$isValidKeyboardEvent(e3, originalTarget) && !e3.repeat && originalTarget.contains(e3.target) && state.target)
                triggerPressUp($f6c31cce2adf654f$var$createEvent(state.target, e3), "keyboard");
            };
            addGlobalListener((0, $431fbd86ca7dc216$export$b204af158042fbac)(e2.currentTarget), "keyup", (0, $ff5963eb1fccf552$export$e08e3b67e392101e)(pressUp, onKeyUp), true);
          }
          if (shouldStopPropagation)
            e2.stopPropagation();
          if (e2.metaKey && (0, $c87311424ea30a05$export$9ac100e40613ea10)())
            (_state_metaKeyEvents = state.metaKeyEvents) === null || _state_metaKeyEvents === void 0 ? void 0 : _state_metaKeyEvents.set(e2.key, e2.nativeEvent);
        } else if (e2.key === "Meta")
          state.metaKeyEvents = /* @__PURE__ */ new Map();
      },
      onClick(e2) {
        if (e2 && !e2.currentTarget.contains(e2.target))
          return;
        if (e2 && e2.button === 0 && !state.isTriggeringEvent && !(0, $ea8dcbcb9ea1b556$export$95185d699e05d4d7).isOpening) {
          let shouldStopPropagation = true;
          if (isDisabled)
            e2.preventDefault();
          if (!state.ignoreClickAfterPress && !state.ignoreEmulatedMouseEvents && !state.isPressed && (state.pointerType === "virtual" || (0, $6a7db85432448f7f$export$60278871457622de)(e2.nativeEvent))) {
            if (!isDisabled && !preventFocusOnPress)
              (0, $7215afc6de606d6b$export$de79e2c695e052f3)(e2.currentTarget);
            let stopPressStart = triggerPressStart(e2, "virtual");
            let stopPressUp = triggerPressUp(e2, "virtual");
            let stopPressEnd = triggerPressEnd(e2, "virtual");
            shouldStopPropagation = stopPressStart && stopPressUp && stopPressEnd;
          }
          state.ignoreEmulatedMouseEvents = false;
          state.ignoreClickAfterPress = false;
          if (shouldStopPropagation)
            e2.stopPropagation();
        }
      }
    };
    let onKeyUp = (e2) => {
      var _state_metaKeyEvents;
      if (state.isPressed && state.target && $f6c31cce2adf654f$var$isValidKeyboardEvent(e2, state.target)) {
        var _state_metaKeyEvents1;
        if ($f6c31cce2adf654f$var$shouldPreventDefaultKeyboard(e2.target, e2.key))
          e2.preventDefault();
        let target = e2.target;
        triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e2), "keyboard", state.target.contains(target));
        removeAllGlobalListeners();
        if (e2.key !== "Enter" && $f6c31cce2adf654f$var$isHTMLAnchorLink(state.target) && state.target.contains(target) && !e2[$f6c31cce2adf654f$var$LINK_CLICKED]) {
          e2[$f6c31cce2adf654f$var$LINK_CLICKED] = true;
          (0, $ea8dcbcb9ea1b556$export$95185d699e05d4d7)(state.target, e2, false);
        }
        state.isPressed = false;
        (_state_metaKeyEvents1 = state.metaKeyEvents) === null || _state_metaKeyEvents1 === void 0 ? void 0 : _state_metaKeyEvents1.delete(e2.key);
      } else if (e2.key === "Meta" && ((_state_metaKeyEvents = state.metaKeyEvents) === null || _state_metaKeyEvents === void 0 ? void 0 : _state_metaKeyEvents.size)) {
        var _state_target;
        let events = state.metaKeyEvents;
        state.metaKeyEvents = void 0;
        for (let event of events.values())
          (_state_target = state.target) === null || _state_target === void 0 ? void 0 : _state_target.dispatchEvent(new KeyboardEvent("keyup", event));
      }
    };
    if (typeof PointerEvent !== "undefined") {
      pressProps2.onPointerDown = (e2) => {
        if (e2.button !== 0 || !e2.currentTarget.contains(e2.target))
          return;
        if ((0, $6a7db85432448f7f$export$29bf1b5f2c56cf63)(e2.nativeEvent)) {
          state.pointerType = "virtual";
          return;
        }
        if ($f6c31cce2adf654f$var$shouldPreventDefault(e2.currentTarget))
          e2.preventDefault();
        state.pointerType = e2.pointerType;
        let shouldStopPropagation = true;
        if (!state.isPressed) {
          state.isPressed = true;
          state.isOverTarget = true;
          state.activePointerId = e2.pointerId;
          state.target = e2.currentTarget;
          if (!isDisabled && !preventFocusOnPress)
            (0, $7215afc6de606d6b$export$de79e2c695e052f3)(e2.currentTarget);
          if (!allowTextSelectionOnPress)
            (0, $14c0b72509d70225$export$16a4697467175487)(state.target);
          shouldStopPropagation = triggerPressStart(e2, state.pointerType);
          addGlobalListener((0, $431fbd86ca7dc216$export$b204af158042fbac)(e2.currentTarget), "pointermove", onPointerMove, false);
          addGlobalListener((0, $431fbd86ca7dc216$export$b204af158042fbac)(e2.currentTarget), "pointerup", onPointerUp, false);
          addGlobalListener((0, $431fbd86ca7dc216$export$b204af158042fbac)(e2.currentTarget), "pointercancel", onPointerCancel, false);
        }
        if (shouldStopPropagation)
          e2.stopPropagation();
      };
      pressProps2.onMouseDown = (e2) => {
        if (!e2.currentTarget.contains(e2.target))
          return;
        if (e2.button === 0) {
          if ($f6c31cce2adf654f$var$shouldPreventDefault(e2.currentTarget))
            e2.preventDefault();
          e2.stopPropagation();
        }
      };
      pressProps2.onPointerUp = (e2) => {
        if (!e2.currentTarget.contains(e2.target) || state.pointerType === "virtual")
          return;
        if (e2.button === 0 && $f6c31cce2adf654f$var$isOverTarget(e2, e2.currentTarget))
          triggerPressUp(e2, state.pointerType || e2.pointerType);
      };
      let onPointerMove = (e2) => {
        if (e2.pointerId !== state.activePointerId)
          return;
        if (state.target && $f6c31cce2adf654f$var$isOverTarget(e2, state.target)) {
          if (!state.isOverTarget && state.pointerType != null) {
            state.isOverTarget = true;
            triggerPressStart($f6c31cce2adf654f$var$createEvent(state.target, e2), state.pointerType);
          }
        } else if (state.target && state.isOverTarget && state.pointerType != null) {
          state.isOverTarget = false;
          triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e2), state.pointerType, false);
          cancelOnPointerExit(e2);
        }
      };
      let onPointerUp = (e2) => {
        if (e2.pointerId === state.activePointerId && state.isPressed && e2.button === 0 && state.target) {
          if ($f6c31cce2adf654f$var$isOverTarget(e2, state.target) && state.pointerType != null)
            triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e2), state.pointerType);
          else if (state.isOverTarget && state.pointerType != null)
            triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e2), state.pointerType, false);
          state.isPressed = false;
          state.isOverTarget = false;
          state.activePointerId = null;
          state.pointerType = null;
          removeAllGlobalListeners();
          if (!allowTextSelectionOnPress)
            (0, $14c0b72509d70225$export$b0d6fa1ab32e3295)(state.target);
        }
      };
      let onPointerCancel = (e2) => {
        cancel(e2);
      };
      pressProps2.onDragStart = (e2) => {
        if (!e2.currentTarget.contains(e2.target))
          return;
        cancel(e2);
      };
    } else {
      pressProps2.onMouseDown = (e2) => {
        if (e2.button !== 0 || !e2.currentTarget.contains(e2.target))
          return;
        if ($f6c31cce2adf654f$var$shouldPreventDefault(e2.currentTarget))
          e2.preventDefault();
        if (state.ignoreEmulatedMouseEvents) {
          e2.stopPropagation();
          return;
        }
        state.isPressed = true;
        state.isOverTarget = true;
        state.target = e2.currentTarget;
        state.pointerType = (0, $6a7db85432448f7f$export$60278871457622de)(e2.nativeEvent) ? "virtual" : "mouse";
        if (!isDisabled && !preventFocusOnPress)
          (0, $7215afc6de606d6b$export$de79e2c695e052f3)(e2.currentTarget);
        let shouldStopPropagation = triggerPressStart(e2, state.pointerType);
        if (shouldStopPropagation)
          e2.stopPropagation();
        addGlobalListener((0, $431fbd86ca7dc216$export$b204af158042fbac)(e2.currentTarget), "mouseup", onMouseUp, false);
      };
      pressProps2.onMouseEnter = (e2) => {
        if (!e2.currentTarget.contains(e2.target))
          return;
        let shouldStopPropagation = true;
        if (state.isPressed && !state.ignoreEmulatedMouseEvents && state.pointerType != null) {
          state.isOverTarget = true;
          shouldStopPropagation = triggerPressStart(e2, state.pointerType);
        }
        if (shouldStopPropagation)
          e2.stopPropagation();
      };
      pressProps2.onMouseLeave = (e2) => {
        if (!e2.currentTarget.contains(e2.target))
          return;
        let shouldStopPropagation = true;
        if (state.isPressed && !state.ignoreEmulatedMouseEvents && state.pointerType != null) {
          state.isOverTarget = false;
          shouldStopPropagation = triggerPressEnd(e2, state.pointerType, false);
          cancelOnPointerExit(e2);
        }
        if (shouldStopPropagation)
          e2.stopPropagation();
      };
      pressProps2.onMouseUp = (e2) => {
        if (!e2.currentTarget.contains(e2.target))
          return;
        if (!state.ignoreEmulatedMouseEvents && e2.button === 0)
          triggerPressUp(e2, state.pointerType || "mouse");
      };
      let onMouseUp = (e2) => {
        if (e2.button !== 0)
          return;
        state.isPressed = false;
        removeAllGlobalListeners();
        if (state.ignoreEmulatedMouseEvents) {
          state.ignoreEmulatedMouseEvents = false;
          return;
        }
        if (state.target && $f6c31cce2adf654f$var$isOverTarget(e2, state.target) && state.pointerType != null)
          triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e2), state.pointerType);
        else if (state.target && state.isOverTarget && state.pointerType != null)
          triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e2), state.pointerType, false);
        state.isOverTarget = false;
      };
      pressProps2.onTouchStart = (e2) => {
        if (!e2.currentTarget.contains(e2.target))
          return;
        let touch = $f6c31cce2adf654f$var$getTouchFromEvent(e2.nativeEvent);
        if (!touch)
          return;
        state.activePointerId = touch.identifier;
        state.ignoreEmulatedMouseEvents = true;
        state.isOverTarget = true;
        state.isPressed = true;
        state.target = e2.currentTarget;
        state.pointerType = "touch";
        if (!isDisabled && !preventFocusOnPress)
          (0, $7215afc6de606d6b$export$de79e2c695e052f3)(e2.currentTarget);
        if (!allowTextSelectionOnPress)
          (0, $14c0b72509d70225$export$16a4697467175487)(state.target);
        let shouldStopPropagation = triggerPressStart(e2, state.pointerType);
        if (shouldStopPropagation)
          e2.stopPropagation();
        addGlobalListener((0, $431fbd86ca7dc216$export$f21a1ffae260145a)(e2.currentTarget), "scroll", onScroll, true);
      };
      pressProps2.onTouchMove = (e2) => {
        if (!e2.currentTarget.contains(e2.target))
          return;
        if (!state.isPressed) {
          e2.stopPropagation();
          return;
        }
        let touch = $f6c31cce2adf654f$var$getTouchById(e2.nativeEvent, state.activePointerId);
        let shouldStopPropagation = true;
        if (touch && $f6c31cce2adf654f$var$isOverTarget(touch, e2.currentTarget)) {
          if (!state.isOverTarget && state.pointerType != null) {
            state.isOverTarget = true;
            shouldStopPropagation = triggerPressStart(e2, state.pointerType);
          }
        } else if (state.isOverTarget && state.pointerType != null) {
          state.isOverTarget = false;
          shouldStopPropagation = triggerPressEnd(e2, state.pointerType, false);
          cancelOnPointerExit(e2);
        }
        if (shouldStopPropagation)
          e2.stopPropagation();
      };
      pressProps2.onTouchEnd = (e2) => {
        if (!e2.currentTarget.contains(e2.target))
          return;
        if (!state.isPressed) {
          e2.stopPropagation();
          return;
        }
        let touch = $f6c31cce2adf654f$var$getTouchById(e2.nativeEvent, state.activePointerId);
        let shouldStopPropagation = true;
        if (touch && $f6c31cce2adf654f$var$isOverTarget(touch, e2.currentTarget) && state.pointerType != null) {
          triggerPressUp(e2, state.pointerType);
          shouldStopPropagation = triggerPressEnd(e2, state.pointerType);
        } else if (state.isOverTarget && state.pointerType != null)
          shouldStopPropagation = triggerPressEnd(e2, state.pointerType, false);
        if (shouldStopPropagation)
          e2.stopPropagation();
        state.isPressed = false;
        state.activePointerId = null;
        state.isOverTarget = false;
        state.ignoreEmulatedMouseEvents = true;
        if (state.target && !allowTextSelectionOnPress)
          (0, $14c0b72509d70225$export$b0d6fa1ab32e3295)(state.target);
        removeAllGlobalListeners();
      };
      pressProps2.onTouchCancel = (e2) => {
        if (!e2.currentTarget.contains(e2.target))
          return;
        e2.stopPropagation();
        if (state.isPressed)
          cancel(e2);
      };
      let onScroll = (e2) => {
        if (state.isPressed && e2.target.contains(state.target))
          cancel({
            currentTarget: state.target,
            shiftKey: false,
            ctrlKey: false,
            metaKey: false,
            altKey: false
          });
      };
      pressProps2.onDragStart = (e2) => {
        if (!e2.currentTarget.contains(e2.target))
          return;
        cancel(e2);
      };
    }
    return pressProps2;
  }, [
    addGlobalListener,
    isDisabled,
    preventFocusOnPress,
    removeAllGlobalListeners,
    allowTextSelectionOnPress,
    cancel,
    cancelOnPointerExit,
    triggerPressEnd,
    triggerPressStart,
    triggerPressUp
  ]);
  (0, import_react2.useEffect)(() => {
    return () => {
      var _ref_current_target;
      if (!allowTextSelectionOnPress)
        (0, $14c0b72509d70225$export$b0d6fa1ab32e3295)((_ref_current_target = ref.current.target) !== null && _ref_current_target !== void 0 ? _ref_current_target : void 0);
    };
  }, [
    allowTextSelectionOnPress
  ]);
  return {
    isPressed: isPressedProp || isPressed,
    pressProps: (0, $3ef42575df84b30b$export$9d1611c77c2fe928)(domProps, pressProps)
  };
}
function $f6c31cce2adf654f$var$isHTMLAnchorLink(target) {
  return target.tagName === "A" && target.hasAttribute("href");
}
function $f6c31cce2adf654f$var$isValidKeyboardEvent(event, currentTarget) {
  const { key, code } = event;
  const element = currentTarget;
  const role = element.getAttribute("role");
  return (key === "Enter" || key === " " || key === "Spacebar" || code === "Space") && !(element instanceof (0, $431fbd86ca7dc216$export$f21a1ffae260145a)(element).HTMLInputElement && !$f6c31cce2adf654f$var$isValidInputKey(element, key) || element instanceof (0, $431fbd86ca7dc216$export$f21a1ffae260145a)(element).HTMLTextAreaElement || element.isContentEditable) && // Links should only trigger with Enter key
  !((role === "link" || !role && $f6c31cce2adf654f$var$isHTMLAnchorLink(element)) && key !== "Enter");
}
function $f6c31cce2adf654f$var$getTouchFromEvent(event) {
  const { targetTouches } = event;
  if (targetTouches.length > 0)
    return targetTouches[0];
  return null;
}
function $f6c31cce2adf654f$var$getTouchById(event, pointerId) {
  const changedTouches = event.changedTouches;
  for (let i2 = 0; i2 < changedTouches.length; i2++) {
    const touch = changedTouches[i2];
    if (touch.identifier === pointerId)
      return touch;
  }
  return null;
}
function $f6c31cce2adf654f$var$createEvent(target, e2) {
  return {
    currentTarget: target,
    shiftKey: e2.shiftKey,
    ctrlKey: e2.ctrlKey,
    metaKey: e2.metaKey,
    altKey: e2.altKey
  };
}
function $f6c31cce2adf654f$var$getPointClientRect(point) {
  let offsetX = 0;
  let offsetY = 0;
  if (point.width !== void 0)
    offsetX = point.width / 2;
  else if (point.radiusX !== void 0)
    offsetX = point.radiusX;
  if (point.height !== void 0)
    offsetY = point.height / 2;
  else if (point.radiusY !== void 0)
    offsetY = point.radiusY;
  return {
    top: point.clientY - offsetY,
    right: point.clientX + offsetX,
    bottom: point.clientY + offsetY,
    left: point.clientX - offsetX
  };
}
function $f6c31cce2adf654f$var$areRectanglesOverlapping(a2, b) {
  if (a2.left > b.right || b.left > a2.right)
    return false;
  if (a2.top > b.bottom || b.top > a2.bottom)
    return false;
  return true;
}
function $f6c31cce2adf654f$var$isOverTarget(point, target) {
  let rect = target.getBoundingClientRect();
  let pointRect = $f6c31cce2adf654f$var$getPointClientRect(point);
  return $f6c31cce2adf654f$var$areRectanglesOverlapping(rect, pointRect);
}
function $f6c31cce2adf654f$var$shouldPreventDefault(target) {
  return !(target instanceof HTMLElement) || !target.hasAttribute("draggable");
}
function $f6c31cce2adf654f$var$shouldPreventDefaultKeyboard(target, key) {
  if (target instanceof HTMLInputElement)
    return !$f6c31cce2adf654f$var$isValidInputKey(target, key);
  if (target instanceof HTMLButtonElement)
    return target.type !== "submit" && target.type !== "reset";
  if ($f6c31cce2adf654f$var$isHTMLAnchorLink(target))
    return false;
  return true;
}
var $f6c31cce2adf654f$var$nonTextInputTypes = /* @__PURE__ */ new Set([
  "checkbox",
  "radio",
  "range",
  "color",
  "file",
  "image",
  "button",
  "submit",
  "reset"
]);
function $f6c31cce2adf654f$var$isValidInputKey(target, key) {
  return target.type === "checkbox" || target.type === "radio" ? key === " " : $f6c31cce2adf654f$var$nonTextInputTypes.has(target.type);
}

// node_modules/@react-aria/interactions/dist/utils.mjs
var import_react3 = __toESM(require_react(), 1);
var $8a9cb279dc87e130$export$905e7fc544a71f36 = class {
  isDefaultPrevented() {
    return this.nativeEvent.defaultPrevented;
  }
  preventDefault() {
    this.defaultPrevented = true;
    this.nativeEvent.preventDefault();
  }
  stopPropagation() {
    this.nativeEvent.stopPropagation();
    this.isPropagationStopped = () => true;
  }
  isPropagationStopped() {
    return false;
  }
  persist() {
  }
  constructor(type, nativeEvent) {
    this.nativeEvent = nativeEvent;
    this.target = nativeEvent.target;
    this.currentTarget = nativeEvent.currentTarget;
    this.relatedTarget = nativeEvent.relatedTarget;
    this.bubbles = nativeEvent.bubbles;
    this.cancelable = nativeEvent.cancelable;
    this.defaultPrevented = nativeEvent.defaultPrevented;
    this.eventPhase = nativeEvent.eventPhase;
    this.isTrusted = nativeEvent.isTrusted;
    this.timeStamp = nativeEvent.timeStamp;
    this.type = type;
  }
};
function $8a9cb279dc87e130$export$715c682d09d639cc(onBlur) {
  let stateRef = (0, import_react3.useRef)({
    isFocused: false,
    observer: null
  });
  (0, $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c)(() => {
    const state = stateRef.current;
    return () => {
      if (state.observer) {
        state.observer.disconnect();
        state.observer = null;
      }
    };
  }, []);
  let dispatchBlur = (0, $8ae05eaa5c114e9c$export$7f54fc3180508a52)((e2) => {
    onBlur === null || onBlur === void 0 ? void 0 : onBlur(e2);
  });
  return (0, import_react3.useCallback)((e2) => {
    if (e2.target instanceof HTMLButtonElement || e2.target instanceof HTMLInputElement || e2.target instanceof HTMLTextAreaElement || e2.target instanceof HTMLSelectElement) {
      stateRef.current.isFocused = true;
      let target = e2.target;
      let onBlurHandler = (e3) => {
        stateRef.current.isFocused = false;
        if (target.disabled)
          dispatchBlur(new $8a9cb279dc87e130$export$905e7fc544a71f36("blur", e3));
        if (stateRef.current.observer) {
          stateRef.current.observer.disconnect();
          stateRef.current.observer = null;
        }
      };
      target.addEventListener("focusout", onBlurHandler, {
        once: true
      });
      stateRef.current.observer = new MutationObserver(() => {
        if (stateRef.current.isFocused && target.disabled) {
          var _stateRef_current_observer;
          (_stateRef_current_observer = stateRef.current.observer) === null || _stateRef_current_observer === void 0 ? void 0 : _stateRef_current_observer.disconnect();
          let relatedTargetEl = target === document.activeElement ? null : document.activeElement;
          target.dispatchEvent(new FocusEvent("blur", {
            relatedTarget: relatedTargetEl
          }));
          target.dispatchEvent(new FocusEvent("focusout", {
            bubbles: true,
            relatedTarget: relatedTargetEl
          }));
        }
      });
      stateRef.current.observer.observe(target, {
        attributes: true,
        attributeFilter: [
          "disabled"
        ]
      });
    }
  }, [
    dispatchBlur
  ]);
}

// node_modules/@react-aria/interactions/dist/useFocus.mjs
var import_react4 = __toESM(require_react(), 1);
function $a1ea59d68270f0dd$export$f8168d8dd8fd66e6(props) {
  let { isDisabled, onFocus: onFocusProp, onBlur: onBlurProp, onFocusChange } = props;
  const onBlur = (0, import_react4.useCallback)((e2) => {
    if (e2.target === e2.currentTarget) {
      if (onBlurProp)
        onBlurProp(e2);
      if (onFocusChange)
        onFocusChange(false);
      return true;
    }
  }, [
    onBlurProp,
    onFocusChange
  ]);
  const onSyntheticFocus = (0, $8a9cb279dc87e130$export$715c682d09d639cc)(onBlur);
  const onFocus = (0, import_react4.useCallback)((e2) => {
    const ownerDocument = (0, $431fbd86ca7dc216$export$b204af158042fbac)(e2.target);
    if (e2.target === e2.currentTarget && ownerDocument.activeElement === e2.target) {
      if (onFocusProp)
        onFocusProp(e2);
      if (onFocusChange)
        onFocusChange(true);
      onSyntheticFocus(e2);
    }
  }, [
    onFocusChange,
    onFocusProp,
    onSyntheticFocus
  ]);
  return {
    focusProps: {
      onFocus: !isDisabled && (onFocusProp || onFocusChange || onBlurProp) ? onFocus : void 0,
      onBlur: !isDisabled && (onBlurProp || onFocusChange) ? onBlur : void 0
    }
  };
}

// node_modules/@react-aria/interactions/dist/useFocusVisible.mjs
var import_react5 = __toESM(require_react(), 1);
var $507fabe10e71c6fb$var$currentModality = null;
var $507fabe10e71c6fb$var$changeHandlers = /* @__PURE__ */ new Set();
var $507fabe10e71c6fb$export$d90243b58daecda7 = /* @__PURE__ */ new Map();
var $507fabe10e71c6fb$var$hasEventBeforeFocus = false;
var $507fabe10e71c6fb$var$hasBlurredWindowRecently = false;
var $507fabe10e71c6fb$var$FOCUS_VISIBLE_INPUT_KEYS = {
  Tab: true,
  Escape: true
};
function $507fabe10e71c6fb$var$triggerChangeHandlers(modality, e2) {
  for (let handler of $507fabe10e71c6fb$var$changeHandlers)
    handler(modality, e2);
}
function $507fabe10e71c6fb$var$isValidKey(e2) {
  return !(e2.metaKey || !(0, $c87311424ea30a05$export$9ac100e40613ea10)() && e2.altKey || e2.ctrlKey || e2.key === "Control" || e2.key === "Shift" || e2.key === "Meta");
}
function $507fabe10e71c6fb$var$handleKeyboardEvent(e2) {
  $507fabe10e71c6fb$var$hasEventBeforeFocus = true;
  if ($507fabe10e71c6fb$var$isValidKey(e2)) {
    $507fabe10e71c6fb$var$currentModality = "keyboard";
    $507fabe10e71c6fb$var$triggerChangeHandlers("keyboard", e2);
  }
}
function $507fabe10e71c6fb$var$handlePointerEvent(e2) {
  $507fabe10e71c6fb$var$currentModality = "pointer";
  if (e2.type === "mousedown" || e2.type === "pointerdown") {
    $507fabe10e71c6fb$var$hasEventBeforeFocus = true;
    $507fabe10e71c6fb$var$triggerChangeHandlers("pointer", e2);
  }
}
function $507fabe10e71c6fb$var$handleClickEvent(e2) {
  if ((0, $6a7db85432448f7f$export$60278871457622de)(e2)) {
    $507fabe10e71c6fb$var$hasEventBeforeFocus = true;
    $507fabe10e71c6fb$var$currentModality = "virtual";
  }
}
function $507fabe10e71c6fb$var$handleFocusEvent(e2) {
  if (e2.target === window || e2.target === document)
    return;
  if (!$507fabe10e71c6fb$var$hasEventBeforeFocus && !$507fabe10e71c6fb$var$hasBlurredWindowRecently) {
    $507fabe10e71c6fb$var$currentModality = "virtual";
    $507fabe10e71c6fb$var$triggerChangeHandlers("virtual", e2);
  }
  $507fabe10e71c6fb$var$hasEventBeforeFocus = false;
  $507fabe10e71c6fb$var$hasBlurredWindowRecently = false;
}
function $507fabe10e71c6fb$var$handleWindowBlur() {
  $507fabe10e71c6fb$var$hasEventBeforeFocus = false;
  $507fabe10e71c6fb$var$hasBlurredWindowRecently = true;
}
function $507fabe10e71c6fb$var$setupGlobalFocusEvents(element) {
  if (typeof window === "undefined" || $507fabe10e71c6fb$export$d90243b58daecda7.get((0, $431fbd86ca7dc216$export$f21a1ffae260145a)(element)))
    return;
  const windowObject = (0, $431fbd86ca7dc216$export$f21a1ffae260145a)(element);
  const documentObject = (0, $431fbd86ca7dc216$export$b204af158042fbac)(element);
  let focus = windowObject.HTMLElement.prototype.focus;
  windowObject.HTMLElement.prototype.focus = function() {
    $507fabe10e71c6fb$var$hasEventBeforeFocus = true;
    focus.apply(this, arguments);
  };
  documentObject.addEventListener("keydown", $507fabe10e71c6fb$var$handleKeyboardEvent, true);
  documentObject.addEventListener("keyup", $507fabe10e71c6fb$var$handleKeyboardEvent, true);
  documentObject.addEventListener("click", $507fabe10e71c6fb$var$handleClickEvent, true);
  windowObject.addEventListener("focus", $507fabe10e71c6fb$var$handleFocusEvent, true);
  windowObject.addEventListener("blur", $507fabe10e71c6fb$var$handleWindowBlur, false);
  if (typeof PointerEvent !== "undefined") {
    documentObject.addEventListener("pointerdown", $507fabe10e71c6fb$var$handlePointerEvent, true);
    documentObject.addEventListener("pointermove", $507fabe10e71c6fb$var$handlePointerEvent, true);
    documentObject.addEventListener("pointerup", $507fabe10e71c6fb$var$handlePointerEvent, true);
  } else {
    documentObject.addEventListener("mousedown", $507fabe10e71c6fb$var$handlePointerEvent, true);
    documentObject.addEventListener("mousemove", $507fabe10e71c6fb$var$handlePointerEvent, true);
    documentObject.addEventListener("mouseup", $507fabe10e71c6fb$var$handlePointerEvent, true);
  }
  windowObject.addEventListener("beforeunload", () => {
    $507fabe10e71c6fb$var$tearDownWindowFocusTracking(element);
  }, {
    once: true
  });
  $507fabe10e71c6fb$export$d90243b58daecda7.set(windowObject, {
    focus
  });
}
var $507fabe10e71c6fb$var$tearDownWindowFocusTracking = (element, loadListener) => {
  const windowObject = (0, $431fbd86ca7dc216$export$f21a1ffae260145a)(element);
  const documentObject = (0, $431fbd86ca7dc216$export$b204af158042fbac)(element);
  if (loadListener)
    documentObject.removeEventListener("DOMContentLoaded", loadListener);
  if (!$507fabe10e71c6fb$export$d90243b58daecda7.has(windowObject))
    return;
  windowObject.HTMLElement.prototype.focus = $507fabe10e71c6fb$export$d90243b58daecda7.get(windowObject).focus;
  documentObject.removeEventListener("keydown", $507fabe10e71c6fb$var$handleKeyboardEvent, true);
  documentObject.removeEventListener("keyup", $507fabe10e71c6fb$var$handleKeyboardEvent, true);
  documentObject.removeEventListener("click", $507fabe10e71c6fb$var$handleClickEvent, true);
  windowObject.removeEventListener("focus", $507fabe10e71c6fb$var$handleFocusEvent, true);
  windowObject.removeEventListener("blur", $507fabe10e71c6fb$var$handleWindowBlur, false);
  if (typeof PointerEvent !== "undefined") {
    documentObject.removeEventListener("pointerdown", $507fabe10e71c6fb$var$handlePointerEvent, true);
    documentObject.removeEventListener("pointermove", $507fabe10e71c6fb$var$handlePointerEvent, true);
    documentObject.removeEventListener("pointerup", $507fabe10e71c6fb$var$handlePointerEvent, true);
  } else {
    documentObject.removeEventListener("mousedown", $507fabe10e71c6fb$var$handlePointerEvent, true);
    documentObject.removeEventListener("mousemove", $507fabe10e71c6fb$var$handlePointerEvent, true);
    documentObject.removeEventListener("mouseup", $507fabe10e71c6fb$var$handlePointerEvent, true);
  }
  $507fabe10e71c6fb$export$d90243b58daecda7.delete(windowObject);
};
function $507fabe10e71c6fb$export$2f1888112f558a7d(element) {
  const documentObject = (0, $431fbd86ca7dc216$export$b204af158042fbac)(element);
  let loadListener;
  if (documentObject.readyState !== "loading")
    $507fabe10e71c6fb$var$setupGlobalFocusEvents(element);
  else {
    loadListener = () => {
      $507fabe10e71c6fb$var$setupGlobalFocusEvents(element);
    };
    documentObject.addEventListener("DOMContentLoaded", loadListener);
  }
  return () => $507fabe10e71c6fb$var$tearDownWindowFocusTracking(element, loadListener);
}
if (typeof document !== "undefined")
  $507fabe10e71c6fb$export$2f1888112f558a7d();
function $507fabe10e71c6fb$export$b9b3dfddab17db27() {
  return $507fabe10e71c6fb$var$currentModality !== "pointer";
}
function $507fabe10e71c6fb$export$630ff653c5ada6a9() {
  return $507fabe10e71c6fb$var$currentModality;
}
var $507fabe10e71c6fb$var$nonTextInputTypes = /* @__PURE__ */ new Set([
  "checkbox",
  "radio",
  "range",
  "color",
  "file",
  "image",
  "button",
  "submit",
  "reset"
]);
function $507fabe10e71c6fb$var$isKeyboardFocusEvent(isTextInput, modality, e2) {
  var _e_target;
  const IHTMLInputElement = typeof window !== "undefined" ? (0, $431fbd86ca7dc216$export$f21a1ffae260145a)(e2 === null || e2 === void 0 ? void 0 : e2.target).HTMLInputElement : HTMLInputElement;
  const IHTMLTextAreaElement = typeof window !== "undefined" ? (0, $431fbd86ca7dc216$export$f21a1ffae260145a)(e2 === null || e2 === void 0 ? void 0 : e2.target).HTMLTextAreaElement : HTMLTextAreaElement;
  const IHTMLElement = typeof window !== "undefined" ? (0, $431fbd86ca7dc216$export$f21a1ffae260145a)(e2 === null || e2 === void 0 ? void 0 : e2.target).HTMLElement : HTMLElement;
  const IKeyboardEvent = typeof window !== "undefined" ? (0, $431fbd86ca7dc216$export$f21a1ffae260145a)(e2 === null || e2 === void 0 ? void 0 : e2.target).KeyboardEvent : KeyboardEvent;
  isTextInput = isTextInput || (e2 === null || e2 === void 0 ? void 0 : e2.target) instanceof IHTMLInputElement && !$507fabe10e71c6fb$var$nonTextInputTypes.has(e2 === null || e2 === void 0 ? void 0 : (_e_target = e2.target) === null || _e_target === void 0 ? void 0 : _e_target.type) || (e2 === null || e2 === void 0 ? void 0 : e2.target) instanceof IHTMLTextAreaElement || (e2 === null || e2 === void 0 ? void 0 : e2.target) instanceof IHTMLElement && (e2 === null || e2 === void 0 ? void 0 : e2.target.isContentEditable);
  return !(isTextInput && modality === "keyboard" && e2 instanceof IKeyboardEvent && !$507fabe10e71c6fb$var$FOCUS_VISIBLE_INPUT_KEYS[e2.key]);
}
function $507fabe10e71c6fb$export$ec71b4b83ac08ec3(fn, deps, opts) {
  $507fabe10e71c6fb$var$setupGlobalFocusEvents();
  (0, import_react5.useEffect)(() => {
    let handler = (modality, e2) => {
      if (!$507fabe10e71c6fb$var$isKeyboardFocusEvent(!!(opts === null || opts === void 0 ? void 0 : opts.isTextInput), modality, e2))
        return;
      fn($507fabe10e71c6fb$export$b9b3dfddab17db27());
    };
    $507fabe10e71c6fb$var$changeHandlers.add(handler);
    return () => {
      $507fabe10e71c6fb$var$changeHandlers.delete(handler);
    };
  }, deps);
}

// node_modules/@react-aria/interactions/dist/useFocusWithin.mjs
var import_react6 = __toESM(require_react(), 1);
function $9ab94262bd0047c7$export$420e68273165f4ec(props) {
  let { isDisabled, onBlurWithin, onFocusWithin, onFocusWithinChange } = props;
  let state = (0, import_react6.useRef)({
    isFocusWithin: false
  });
  let onBlur = (0, import_react6.useCallback)((e2) => {
    if (state.current.isFocusWithin && !e2.currentTarget.contains(e2.relatedTarget)) {
      state.current.isFocusWithin = false;
      if (onBlurWithin)
        onBlurWithin(e2);
      if (onFocusWithinChange)
        onFocusWithinChange(false);
    }
  }, [
    onBlurWithin,
    onFocusWithinChange,
    state
  ]);
  let onSyntheticFocus = (0, $8a9cb279dc87e130$export$715c682d09d639cc)(onBlur);
  let onFocus = (0, import_react6.useCallback)((e2) => {
    if (!state.current.isFocusWithin && document.activeElement === e2.target) {
      if (onFocusWithin)
        onFocusWithin(e2);
      if (onFocusWithinChange)
        onFocusWithinChange(true);
      state.current.isFocusWithin = true;
      onSyntheticFocus(e2);
    }
  }, [
    onFocusWithin,
    onFocusWithinChange,
    onSyntheticFocus
  ]);
  if (isDisabled)
    return {
      focusWithinProps: {
        // These should not have been null, that would conflict in mergeProps
        onFocus: void 0,
        onBlur: void 0
      }
    };
  return {
    focusWithinProps: {
      onFocus,
      onBlur
    }
  };
}

// node_modules/@react-aria/interactions/dist/useHover.mjs
var import_react7 = __toESM(require_react(), 1);
var $6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents = false;
var $6179b936705e76d3$var$hoverCount = 0;
function $6179b936705e76d3$var$setGlobalIgnoreEmulatedMouseEvents() {
  $6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents = true;
  setTimeout(() => {
    $6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents = false;
  }, 50);
}
function $6179b936705e76d3$var$handleGlobalPointerEvent(e2) {
  if (e2.pointerType === "touch")
    $6179b936705e76d3$var$setGlobalIgnoreEmulatedMouseEvents();
}
function $6179b936705e76d3$var$setupGlobalTouchEvents() {
  if (typeof document === "undefined")
    return;
  if (typeof PointerEvent !== "undefined")
    document.addEventListener("pointerup", $6179b936705e76d3$var$handleGlobalPointerEvent);
  else
    document.addEventListener("touchend", $6179b936705e76d3$var$setGlobalIgnoreEmulatedMouseEvents);
  $6179b936705e76d3$var$hoverCount++;
  return () => {
    $6179b936705e76d3$var$hoverCount--;
    if ($6179b936705e76d3$var$hoverCount > 0)
      return;
    if (typeof PointerEvent !== "undefined")
      document.removeEventListener("pointerup", $6179b936705e76d3$var$handleGlobalPointerEvent);
    else
      document.removeEventListener("touchend", $6179b936705e76d3$var$setGlobalIgnoreEmulatedMouseEvents);
  };
}
function $6179b936705e76d3$export$ae780daf29e6d456(props) {
  let { onHoverStart, onHoverChange, onHoverEnd, isDisabled } = props;
  let [isHovered, setHovered] = (0, import_react7.useState)(false);
  let state = (0, import_react7.useRef)({
    isHovered: false,
    ignoreEmulatedMouseEvents: false,
    pointerType: "",
    target: null
  }).current;
  (0, import_react7.useEffect)($6179b936705e76d3$var$setupGlobalTouchEvents, []);
  let { hoverProps, triggerHoverEnd } = (0, import_react7.useMemo)(() => {
    let triggerHoverStart = (event, pointerType) => {
      state.pointerType = pointerType;
      if (isDisabled || pointerType === "touch" || state.isHovered || !event.currentTarget.contains(event.target))
        return;
      state.isHovered = true;
      let target = event.currentTarget;
      state.target = target;
      if (onHoverStart)
        onHoverStart({
          type: "hoverstart",
          target,
          pointerType
        });
      if (onHoverChange)
        onHoverChange(true);
      setHovered(true);
    };
    let triggerHoverEnd2 = (event, pointerType) => {
      state.pointerType = "";
      state.target = null;
      if (pointerType === "touch" || !state.isHovered)
        return;
      state.isHovered = false;
      let target = event.currentTarget;
      if (onHoverEnd)
        onHoverEnd({
          type: "hoverend",
          target,
          pointerType
        });
      if (onHoverChange)
        onHoverChange(false);
      setHovered(false);
    };
    let hoverProps2 = {};
    if (typeof PointerEvent !== "undefined") {
      hoverProps2.onPointerEnter = (e2) => {
        if ($6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents && e2.pointerType === "mouse")
          return;
        triggerHoverStart(e2, e2.pointerType);
      };
      hoverProps2.onPointerLeave = (e2) => {
        if (!isDisabled && e2.currentTarget.contains(e2.target))
          triggerHoverEnd2(e2, e2.pointerType);
      };
    } else {
      hoverProps2.onTouchStart = () => {
        state.ignoreEmulatedMouseEvents = true;
      };
      hoverProps2.onMouseEnter = (e2) => {
        if (!state.ignoreEmulatedMouseEvents && !$6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents)
          triggerHoverStart(e2, "mouse");
        state.ignoreEmulatedMouseEvents = false;
      };
      hoverProps2.onMouseLeave = (e2) => {
        if (!isDisabled && e2.currentTarget.contains(e2.target))
          triggerHoverEnd2(e2, "mouse");
      };
    }
    return {
      hoverProps: hoverProps2,
      triggerHoverEnd: triggerHoverEnd2
    };
  }, [
    onHoverStart,
    onHoverChange,
    onHoverEnd,
    isDisabled,
    state
  ]);
  (0, import_react7.useEffect)(() => {
    if (isDisabled)
      triggerHoverEnd({
        currentTarget: state.target
      }, state.pointerType);
  }, [
    isDisabled
  ]);
  return {
    hoverProps,
    isHovered
  };
}

// node_modules/@react-aria/interactions/dist/useLongPress.mjs
var import_react8 = __toESM(require_react(), 1);
var $8a26561d2877236e$var$DEFAULT_THRESHOLD = 500;
function $8a26561d2877236e$export$c24ed0104d07eab9(props) {
  let { isDisabled, onLongPressStart, onLongPressEnd, onLongPress, threshold = $8a26561d2877236e$var$DEFAULT_THRESHOLD, accessibilityDescription } = props;
  const timeRef = (0, import_react8.useRef)();
  let { addGlobalListener, removeGlobalListener } = (0, $03deb23ff14920c4$export$4eaf04e54aa8eed6)();
  let { pressProps } = (0, $f6c31cce2adf654f$export$45712eceda6fad21)({
    isDisabled,
    onPressStart(e2) {
      e2.continuePropagation();
      if (e2.pointerType === "mouse" || e2.pointerType === "touch") {
        if (onLongPressStart)
          onLongPressStart({
            ...e2,
            type: "longpressstart"
          });
        timeRef.current = setTimeout(() => {
          e2.target.dispatchEvent(new PointerEvent("pointercancel", {
            bubbles: true
          }));
          if (onLongPress)
            onLongPress({
              ...e2,
              type: "longpress"
            });
          timeRef.current = void 0;
        }, threshold);
        if (e2.pointerType === "touch") {
          let onContextMenu = (e3) => {
            e3.preventDefault();
          };
          addGlobalListener(e2.target, "contextmenu", onContextMenu, {
            once: true
          });
          addGlobalListener(window, "pointerup", () => {
            setTimeout(() => {
              removeGlobalListener(e2.target, "contextmenu", onContextMenu);
            }, 30);
          }, {
            once: true
          });
        }
      }
    },
    onPressEnd(e2) {
      if (timeRef.current)
        clearTimeout(timeRef.current);
      if (onLongPressEnd && (e2.pointerType === "mouse" || e2.pointerType === "touch"))
        onLongPressEnd({
          ...e2,
          type: "longpressend"
        });
    }
  });
  let descriptionProps = (0, $ef06256079686ba0$export$f8aeda7b10753fa1)(onLongPress && !isDisabled ? accessibilityDescription : void 0);
  return {
    longPressProps: (0, $3ef42575df84b30b$export$9d1611c77c2fe928)(pressProps, descriptionProps)
  };
}

// node_modules/@react-aria/focus/dist/focusSafely.mjs
function $6a99195332edec8b$export$80f3e147d781571c(element) {
  const ownerDocument = (0, $431fbd86ca7dc216$export$b204af158042fbac)(element);
  if ((0, $507fabe10e71c6fb$export$630ff653c5ada6a9)() === "virtual") {
    let lastFocusedElement = ownerDocument.activeElement;
    (0, $bbed8b41f857bcc0$export$24490316f764c430)(() => {
      if (ownerDocument.activeElement === lastFocusedElement && element.isConnected)
        (0, $7215afc6de606d6b$export$de79e2c695e052f3)(element);
    });
  } else
    (0, $7215afc6de606d6b$export$de79e2c695e052f3)(element);
}

// node_modules/@react-aria/focus/dist/isElementVisible.mjs
function $645f2e67b85a24c9$var$isStyleVisible(element) {
  const windowObject = (0, $431fbd86ca7dc216$export$f21a1ffae260145a)(element);
  if (!(element instanceof windowObject.HTMLElement) && !(element instanceof windowObject.SVGElement))
    return false;
  let { display, visibility } = element.style;
  let isVisible = display !== "none" && visibility !== "hidden" && visibility !== "collapse";
  if (isVisible) {
    const { getComputedStyle: getComputedStyle2 } = element.ownerDocument.defaultView;
    let { display: computedDisplay, visibility: computedVisibility } = getComputedStyle2(element);
    isVisible = computedDisplay !== "none" && computedVisibility !== "hidden" && computedVisibility !== "collapse";
  }
  return isVisible;
}
function $645f2e67b85a24c9$var$isAttributeVisible(element, childElement) {
  return !element.hasAttribute("hidden") && // Ignore HiddenSelect when tree walking.
  !element.hasAttribute("data-react-aria-prevent-focus") && (element.nodeName === "DETAILS" && childElement && childElement.nodeName !== "SUMMARY" ? element.hasAttribute("open") : true);
}
function $645f2e67b85a24c9$export$e989c0fffaa6b27a(element, childElement) {
  return element.nodeName !== "#comment" && $645f2e67b85a24c9$var$isStyleVisible(element) && $645f2e67b85a24c9$var$isAttributeVisible(element, childElement) && (!element.parentElement || $645f2e67b85a24c9$export$e989c0fffaa6b27a(element.parentElement, element));
}

// node_modules/@react-aria/focus/dist/FocusScope.mjs
var import_react9 = __toESM(require_react(), 1);
var $9bf71ea28793e738$var$focusableElements = [
  "input:not([disabled]):not([type=hidden])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  "button:not([disabled])",
  "a[href]",
  "area[href]",
  "summary",
  "iframe",
  "object",
  "embed",
  "audio[controls]",
  "video[controls]",
  "[contenteditable]"
];
var $9bf71ea28793e738$var$FOCUSABLE_ELEMENT_SELECTOR = $9bf71ea28793e738$var$focusableElements.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";
$9bf71ea28793e738$var$focusableElements.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
var $9bf71ea28793e738$var$TABBABLE_ELEMENT_SELECTOR = $9bf71ea28793e738$var$focusableElements.join(':not([hidden]):not([tabindex="-1"]),');
function $9bf71ea28793e738$var$isElementInScope(element, scope) {
  if (!element)
    return false;
  if (!scope)
    return false;
  return scope.some((node) => node.contains(element));
}
function $9bf71ea28793e738$export$2d6ec8fc375ceafa(root, opts, scope) {
  let selector = (opts === null || opts === void 0 ? void 0 : opts.tabbable) ? $9bf71ea28793e738$var$TABBABLE_ELEMENT_SELECTOR : $9bf71ea28793e738$var$FOCUSABLE_ELEMENT_SELECTOR;
  let walker = (0, $431fbd86ca7dc216$export$b204af158042fbac)(root).createTreeWalker(root, NodeFilter.SHOW_ELEMENT, {
    acceptNode(node) {
      var _opts_from;
      if (opts === null || opts === void 0 ? void 0 : (_opts_from = opts.from) === null || _opts_from === void 0 ? void 0 : _opts_from.contains(node))
        return NodeFilter.FILTER_REJECT;
      if (node.matches(selector) && (0, $645f2e67b85a24c9$export$e989c0fffaa6b27a)(node) && (!scope || $9bf71ea28793e738$var$isElementInScope(node, scope)) && (!(opts === null || opts === void 0 ? void 0 : opts.accept) || opts.accept(node)))
        return NodeFilter.FILTER_ACCEPT;
      return NodeFilter.FILTER_SKIP;
    }
  });
  if (opts === null || opts === void 0 ? void 0 : opts.from)
    walker.currentNode = opts.from;
  return walker;
}
var $9bf71ea28793e738$var$Tree = class {
  get size() {
    return this.fastMap.size;
  }
  getTreeNode(data) {
    return this.fastMap.get(data);
  }
  addTreeNode(scopeRef, parent, nodeToRestore) {
    let parentNode = this.fastMap.get(parent !== null && parent !== void 0 ? parent : null);
    if (!parentNode)
      return;
    let node = new $9bf71ea28793e738$var$TreeNode({
      scopeRef
    });
    parentNode.addChild(node);
    node.parent = parentNode;
    this.fastMap.set(scopeRef, node);
    if (nodeToRestore)
      node.nodeToRestore = nodeToRestore;
  }
  addNode(node) {
    this.fastMap.set(node.scopeRef, node);
  }
  removeTreeNode(scopeRef) {
    if (scopeRef === null)
      return;
    let node = this.fastMap.get(scopeRef);
    if (!node)
      return;
    let parentNode = node.parent;
    for (let current of this.traverse())
      if (current !== node && node.nodeToRestore && current.nodeToRestore && node.scopeRef && node.scopeRef.current && $9bf71ea28793e738$var$isElementInScope(current.nodeToRestore, node.scopeRef.current))
        current.nodeToRestore = node.nodeToRestore;
    let children = node.children;
    if (parentNode) {
      parentNode.removeChild(node);
      if (children.size > 0)
        children.forEach((child) => parentNode && parentNode.addChild(child));
    }
    this.fastMap.delete(node.scopeRef);
  }
  // Pre Order Depth First
  *traverse(node = this.root) {
    if (node.scopeRef != null)
      yield node;
    if (node.children.size > 0)
      for (let child of node.children)
        yield* this.traverse(child);
  }
  clone() {
    var _node_parent;
    let newTree = new $9bf71ea28793e738$var$Tree();
    var _node_parent_scopeRef;
    for (let node of this.traverse())
      newTree.addTreeNode(node.scopeRef, (_node_parent_scopeRef = (_node_parent = node.parent) === null || _node_parent === void 0 ? void 0 : _node_parent.scopeRef) !== null && _node_parent_scopeRef !== void 0 ? _node_parent_scopeRef : null, node.nodeToRestore);
    return newTree;
  }
  constructor() {
    this.fastMap = /* @__PURE__ */ new Map();
    this.root = new $9bf71ea28793e738$var$TreeNode({
      scopeRef: null
    });
    this.fastMap.set(null, this.root);
  }
};
var $9bf71ea28793e738$var$TreeNode = class {
  addChild(node) {
    this.children.add(node);
    node.parent = this;
  }
  removeChild(node) {
    this.children.delete(node);
    node.parent = void 0;
  }
  constructor(props) {
    this.children = /* @__PURE__ */ new Set();
    this.contain = false;
    this.scopeRef = props.scopeRef;
  }
};
var $9bf71ea28793e738$export$d06fae2ee68b101e = new $9bf71ea28793e738$var$Tree();

// node_modules/@react-aria/focus/dist/useFocusRing.mjs
var import_react10 = __toESM(require_react(), 1);
function $f7dceffc5ad7768b$export$4e328f61c538687f(props = {}) {
  let { autoFocus = false, isTextInput, within } = props;
  let state = (0, import_react10.useRef)({
    isFocused: false,
    isFocusVisible: autoFocus || (0, $507fabe10e71c6fb$export$b9b3dfddab17db27)()
  });
  let [isFocused, setFocused] = (0, import_react10.useState)(false);
  let [isFocusVisibleState, setFocusVisible] = (0, import_react10.useState)(() => state.current.isFocused && state.current.isFocusVisible);
  let updateState = (0, import_react10.useCallback)(() => setFocusVisible(state.current.isFocused && state.current.isFocusVisible), []);
  let onFocusChange = (0, import_react10.useCallback)((isFocused2) => {
    state.current.isFocused = isFocused2;
    setFocused(isFocused2);
    updateState();
  }, [
    updateState
  ]);
  (0, $507fabe10e71c6fb$export$ec71b4b83ac08ec3)((isFocusVisible) => {
    state.current.isFocusVisible = isFocusVisible;
    updateState();
  }, [], {
    isTextInput
  });
  let { focusProps } = (0, $a1ea59d68270f0dd$export$f8168d8dd8fd66e6)({
    isDisabled: within,
    onFocusChange
  });
  let { focusWithinProps } = (0, $9ab94262bd0047c7$export$420e68273165f4ec)({
    isDisabled: !within,
    onFocusWithinChange: onFocusChange
  });
  return {
    isFocused,
    isFocusVisible: isFocusVisibleState,
    focusProps: within ? focusWithinProps : focusProps
  };
}

// node_modules/@react-aria/focus/dist/useHasTabbableChild.mjs
var import_react11 = __toESM(require_react(), 1);
function $83013635b024ae3d$export$eac1895992b9f3d6(ref, options) {
  let isDisabled = options === null || options === void 0 ? void 0 : options.isDisabled;
  let [hasTabbableChild, setHasTabbableChild] = (0, import_react11.useState)(false);
  (0, $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c)(() => {
    if ((ref === null || ref === void 0 ? void 0 : ref.current) && !isDisabled) {
      let update = () => {
        if (ref.current) {
          let walker = (0, $9bf71ea28793e738$export$2d6ec8fc375ceafa)(ref.current, {
            tabbable: true
          });
          setHasTabbableChild(!!walker.nextNode());
        }
      };
      update();
      let observer = new MutationObserver(update);
      observer.observe(ref.current, {
        subtree: true,
        childList: true,
        attributes: true,
        attributeFilter: [
          "tabIndex",
          "disabled"
        ]
      });
      return () => {
        observer.disconnect();
      };
    }
  });
  return isDisabled ? false : hasTabbableChild;
}

// node_modules/@nextui-org/theme/dist/chunk-BZCSOIUI.mjs
var solid = {
  default: "bg-default text-default-foreground",
  primary: "bg-primary text-primary-foreground",
  secondary: "bg-secondary text-secondary-foreground",
  success: "bg-success text-success-foreground",
  warning: "bg-warning text-warning-foreground",
  danger: "bg-danger text-danger-foreground",
  foreground: "bg-foreground text-background"
};
var shadow = {
  default: "shadow-lg shadow-default/50 bg-default text-default-foreground",
  primary: "shadow-lg shadow-primary/40 bg-primary text-primary-foreground",
  secondary: "shadow-lg shadow-secondary/40 bg-secondary text-secondary-foreground",
  success: "shadow-lg shadow-success/40 bg-success text-success-foreground",
  warning: "shadow-lg shadow-warning/40 bg-warning text-warning-foreground",
  danger: "shadow-lg shadow-danger/40 bg-danger text-danger-foreground",
  foreground: "shadow-lg shadow-foreground/40 bg-foreground text-background"
};
var bordered = {
  default: "bg-transparent border-default text-foreground",
  primary: "bg-transparent border-primary text-primary",
  secondary: "bg-transparent border-secondary text-secondary",
  success: "bg-transparent border-success text-success",
  warning: "bg-transparent border-warning text-warning",
  danger: "bg-transparent border-danger text-danger",
  foreground: "bg-transparent border-foreground text-foreground"
};
var flat = {
  default: "bg-default/40 text-default-700",
  primary: "bg-primary/20 text-primary-700",
  secondary: "bg-secondary/20 text-secondary-700",
  success: "bg-success/20 text-success-800 dark:text-success",
  warning: "bg-warning/20 text-warning-800 dark:text-warning",
  danger: "bg-danger/20 text-danger-800 dark:text-danger-500",
  foreground: "bg-foreground/10 text-foreground"
};
var faded = {
  default: "border-default bg-default-100 text-default-foreground",
  primary: "border-default bg-default-100 text-primary",
  secondary: "border-default bg-default-100 text-secondary",
  success: "border-default bg-default-100 text-success",
  warning: "border-default bg-default-100 text-warning",
  danger: "border-default bg-default-100 text-danger",
  foreground: "border-default bg-default-100 text-foreground"
};
var light = {
  default: "bg-transparent text-default-foreground",
  primary: "bg-transparent text-primary",
  secondary: "bg-transparent text-secondary",
  success: "bg-transparent text-success",
  warning: "bg-transparent text-warning",
  danger: "bg-transparent text-danger",
  foreground: "bg-transparent text-foreground"
};
var ghost = {
  default: "border-default text-default-foreground",
  primary: "border-primary text-primary",
  secondary: "border-secondary text-secondary",
  success: "border-success text-success",
  warning: "border-warning text-warning",
  danger: "border-danger text-danger",
  foreground: "border-foreground text-foreground hover:!bg-foreground"
};
var colorVariants = {
  solid,
  shadow,
  bordered,
  flat,
  faded,
  light,
  ghost
};

// node_modules/@nextui-org/theme/dist/chunk-BYWORP66.mjs
var COMMON_UNITS = ["small", "medium", "large"];
var twMergeConfig = {
  theme: {
    opacity: ["disabled"],
    spacing: ["divider"],
    borderWidth: COMMON_UNITS,
    borderRadius: COMMON_UNITS
  },
  classGroups: {
    shadow: [{ shadow: COMMON_UNITS }],
    "font-size": [{ text: ["tiny", ...COMMON_UNITS] }],
    "bg-image": ["bg-stripe-gradient"]
  }
};

// node_modules/tailwind-variants/dist/chunk-JXBJZR5A.js
var l = (e2) => typeof e2 == "boolean" ? `${e2}` : e2 === 0 ? "0" : e2;
var u = (e2) => !e2 || typeof e2 != "object" || Object.keys(e2).length === 0;
var x = (e2, o3) => JSON.stringify(e2) === JSON.stringify(o3);
function i(e2, o3) {
  e2.forEach(function(r2) {
    Array.isArray(r2) ? i(r2, o3) : o3.push(r2);
  });
}
function y(e2) {
  let o3 = [];
  return i(e2, o3), o3;
}
var a = (...e2) => y(e2).filter(Boolean);
var p = (e2, o3) => {
  let r2 = {}, c = Object.keys(e2), f = Object.keys(o3);
  for (let t3 of c)
    if (f.includes(t3)) {
      let s = e2[t3], n2 = o3[t3];
      typeof s == "object" && typeof n2 == "object" ? r2[t3] = p(s, n2) : Array.isArray(s) || Array.isArray(n2) ? r2[t3] = a(n2, s) : r2[t3] = n2 + " " + s;
    } else
      r2[t3] = e2[t3];
  for (let t3 of f)
    c.includes(t3) || (r2[t3] = o3[t3]);
  return r2;
};
var g = (e2) => !e2 || typeof e2 != "string" ? e2 : e2.replace(/\s+/g, " ").trim();

// node_modules/tailwind-merge/dist/lib/tw-join.mjs
function twJoin() {
  var index = 0;
  var argument;
  var resolvedValue;
  var string = "";
  while (index < arguments.length) {
    if (argument = arguments[index++]) {
      if (resolvedValue = toValue(argument)) {
        string && (string += " ");
        string += resolvedValue;
      }
    }
  }
  return string;
}
function toValue(mix) {
  if (typeof mix === "string") {
    return mix;
  }
  var resolvedValue;
  var string = "";
  for (var k = 0; k < mix.length; k++) {
    if (mix[k]) {
      if (resolvedValue = toValue(mix[k])) {
        string && (string += " ");
        string += resolvedValue;
      }
    }
  }
  return string;
}

// node_modules/tailwind-merge/dist/lib/class-utils.mjs
var CLASS_PART_SEPARATOR = "-";
function createClassUtils(config) {
  var classMap = createClassMap(config);
  var conflictingClassGroups = config.conflictingClassGroups, _config$conflictingCl = config.conflictingClassGroupModifiers, conflictingClassGroupModifiers = _config$conflictingCl === void 0 ? {} : _config$conflictingCl;
  function getClassGroupId(className) {
    var classParts = className.split(CLASS_PART_SEPARATOR);
    if (classParts[0] === "" && classParts.length !== 1) {
      classParts.shift();
    }
    return getGroupRecursive(classParts, classMap) || getGroupIdForArbitraryProperty(className);
  }
  function getConflictingClassGroupIds(classGroupId, hasPostfixModifier) {
    var conflicts = conflictingClassGroups[classGroupId] || [];
    if (hasPostfixModifier && conflictingClassGroupModifiers[classGroupId]) {
      return [].concat(conflicts, conflictingClassGroupModifiers[classGroupId]);
    }
    return conflicts;
  }
  return {
    getClassGroupId,
    getConflictingClassGroupIds
  };
}
function getGroupRecursive(classParts, classPartObject) {
  if (classParts.length === 0) {
    return classPartObject.classGroupId;
  }
  var currentClassPart = classParts[0];
  var nextClassPartObject = classPartObject.nextPart.get(currentClassPart);
  var classGroupFromNextClassPart = nextClassPartObject ? getGroupRecursive(classParts.slice(1), nextClassPartObject) : void 0;
  if (classGroupFromNextClassPart) {
    return classGroupFromNextClassPart;
  }
  if (classPartObject.validators.length === 0) {
    return void 0;
  }
  var classRest = classParts.join(CLASS_PART_SEPARATOR);
  return classPartObject.validators.find(function(_ref) {
    var validator = _ref.validator;
    return validator(classRest);
  })?.classGroupId;
}
var arbitraryPropertyRegex = /^\[(.+)\]$/;
function getGroupIdForArbitraryProperty(className) {
  if (arbitraryPropertyRegex.test(className)) {
    var arbitraryPropertyClassName = arbitraryPropertyRegex.exec(className)[1];
    var property = arbitraryPropertyClassName?.substring(0, arbitraryPropertyClassName.indexOf(":"));
    if (property) {
      return "arbitrary.." + property;
    }
  }
}
function createClassMap(config) {
  var theme = config.theme, prefix = config.prefix;
  var classMap = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  var prefixedClassGroupEntries = getPrefixedClassGroupEntries(Object.entries(config.classGroups), prefix);
  prefixedClassGroupEntries.forEach(function(_ref2) {
    var classGroupId = _ref2[0], classGroup = _ref2[1];
    processClassesRecursively(classGroup, classMap, classGroupId, theme);
  });
  return classMap;
}
function processClassesRecursively(classGroup, classPartObject, classGroupId, theme) {
  classGroup.forEach(function(classDefinition) {
    if (typeof classDefinition === "string") {
      var classPartObjectToEdit = classDefinition === "" ? classPartObject : getPart(classPartObject, classDefinition);
      classPartObjectToEdit.classGroupId = classGroupId;
      return;
    }
    if (typeof classDefinition === "function") {
      if (isThemeGetter(classDefinition)) {
        processClassesRecursively(classDefinition(theme), classPartObject, classGroupId, theme);
        return;
      }
      classPartObject.validators.push({
        validator: classDefinition,
        classGroupId
      });
      return;
    }
    Object.entries(classDefinition).forEach(function(_ref3) {
      var key = _ref3[0], classGroup2 = _ref3[1];
      processClassesRecursively(classGroup2, getPart(classPartObject, key), classGroupId, theme);
    });
  });
}
function getPart(classPartObject, path) {
  var currentClassPartObject = classPartObject;
  path.split(CLASS_PART_SEPARATOR).forEach(function(pathPart) {
    if (!currentClassPartObject.nextPart.has(pathPart)) {
      currentClassPartObject.nextPart.set(pathPart, {
        nextPart: /* @__PURE__ */ new Map(),
        validators: []
      });
    }
    currentClassPartObject = currentClassPartObject.nextPart.get(pathPart);
  });
  return currentClassPartObject;
}
function isThemeGetter(func) {
  return func.isThemeGetter;
}
function getPrefixedClassGroupEntries(classGroupEntries, prefix) {
  if (!prefix) {
    return classGroupEntries;
  }
  return classGroupEntries.map(function(_ref4) {
    var classGroupId = _ref4[0], classGroup = _ref4[1];
    var prefixedClassGroup = classGroup.map(function(classDefinition) {
      if (typeof classDefinition === "string") {
        return prefix + classDefinition;
      }
      if (typeof classDefinition === "object") {
        return Object.fromEntries(Object.entries(classDefinition).map(function(_ref5) {
          var key = _ref5[0], value = _ref5[1];
          return [prefix + key, value];
        }));
      }
      return classDefinition;
    });
    return [classGroupId, prefixedClassGroup];
  });
}

// node_modules/tailwind-merge/dist/lib/lru-cache.mjs
function createLruCache(maxCacheSize) {
  if (maxCacheSize < 1) {
    return {
      get: function get() {
        return void 0;
      },
      set: function set() {
      }
    };
  }
  var cacheSize = 0;
  var cache = /* @__PURE__ */ new Map();
  var previousCache = /* @__PURE__ */ new Map();
  function update(key, value) {
    cache.set(key, value);
    cacheSize++;
    if (cacheSize > maxCacheSize) {
      cacheSize = 0;
      previousCache = cache;
      cache = /* @__PURE__ */ new Map();
    }
  }
  return {
    get: function get(key) {
      var value = cache.get(key);
      if (value !== void 0) {
        return value;
      }
      if ((value = previousCache.get(key)) !== void 0) {
        update(key, value);
        return value;
      }
    },
    set: function set(key, value) {
      if (cache.has(key)) {
        cache.set(key, value);
      } else {
        update(key, value);
      }
    }
  };
}

// node_modules/tailwind-merge/dist/lib/modifier-utils.mjs
var IMPORTANT_MODIFIER = "!";
function createSplitModifiers(config) {
  var separator = config.separator || ":";
  var isSeparatorSingleCharacter = separator.length === 1;
  var firstSeparatorCharacter = separator[0];
  var separatorLength = separator.length;
  return function splitModifiers(className) {
    var modifiers = [];
    var bracketDepth = 0;
    var modifierStart = 0;
    var postfixModifierPosition;
    for (var index = 0; index < className.length; index++) {
      var currentCharacter = className[index];
      if (bracketDepth === 0) {
        if (currentCharacter === firstSeparatorCharacter && (isSeparatorSingleCharacter || className.slice(index, index + separatorLength) === separator)) {
          modifiers.push(className.slice(modifierStart, index));
          modifierStart = index + separatorLength;
          continue;
        }
        if (currentCharacter === "/") {
          postfixModifierPosition = index;
          continue;
        }
      }
      if (currentCharacter === "[") {
        bracketDepth++;
      } else if (currentCharacter === "]") {
        bracketDepth--;
      }
    }
    var baseClassNameWithImportantModifier = modifiers.length === 0 ? className : className.substring(modifierStart);
    var hasImportantModifier = baseClassNameWithImportantModifier.startsWith(IMPORTANT_MODIFIER);
    var baseClassName = hasImportantModifier ? baseClassNameWithImportantModifier.substring(1) : baseClassNameWithImportantModifier;
    var maybePostfixModifierPosition = postfixModifierPosition && postfixModifierPosition > modifierStart ? postfixModifierPosition - modifierStart : void 0;
    return {
      modifiers,
      hasImportantModifier,
      baseClassName,
      maybePostfixModifierPosition
    };
  };
}
function sortModifiers(modifiers) {
  if (modifiers.length <= 1) {
    return modifiers;
  }
  var sortedModifiers = [];
  var unsortedModifiers = [];
  modifiers.forEach(function(modifier) {
    var isArbitraryVariant = modifier[0] === "[";
    if (isArbitraryVariant) {
      sortedModifiers.push.apply(sortedModifiers, unsortedModifiers.sort().concat([modifier]));
      unsortedModifiers = [];
    } else {
      unsortedModifiers.push(modifier);
    }
  });
  sortedModifiers.push.apply(sortedModifiers, unsortedModifiers.sort());
  return sortedModifiers;
}

// node_modules/tailwind-merge/dist/lib/config-utils.mjs
function createConfigUtils(config) {
  return {
    cache: createLruCache(config.cacheSize),
    splitModifiers: createSplitModifiers(config),
    ...createClassUtils(config)
  };
}

// node_modules/tailwind-merge/dist/lib/merge-classlist.mjs
var SPLIT_CLASSES_REGEX = /\s+/;
function mergeClassList(classList, configUtils) {
  var splitModifiers = configUtils.splitModifiers, getClassGroupId = configUtils.getClassGroupId, getConflictingClassGroupIds = configUtils.getConflictingClassGroupIds;
  var classGroupsInConflict = /* @__PURE__ */ new Set();
  return classList.trim().split(SPLIT_CLASSES_REGEX).map(function(originalClassName) {
    var _splitModifiers = splitModifiers(originalClassName), modifiers = _splitModifiers.modifiers, hasImportantModifier = _splitModifiers.hasImportantModifier, baseClassName = _splitModifiers.baseClassName, maybePostfixModifierPosition = _splitModifiers.maybePostfixModifierPosition;
    var classGroupId = getClassGroupId(maybePostfixModifierPosition ? baseClassName.substring(0, maybePostfixModifierPosition) : baseClassName);
    var hasPostfixModifier = Boolean(maybePostfixModifierPosition);
    if (!classGroupId) {
      if (!maybePostfixModifierPosition) {
        return {
          isTailwindClass: false,
          originalClassName
        };
      }
      classGroupId = getClassGroupId(baseClassName);
      if (!classGroupId) {
        return {
          isTailwindClass: false,
          originalClassName
        };
      }
      hasPostfixModifier = false;
    }
    var variantModifier = sortModifiers(modifiers).join(":");
    var modifierId = hasImportantModifier ? variantModifier + IMPORTANT_MODIFIER : variantModifier;
    return {
      isTailwindClass: true,
      modifierId,
      classGroupId,
      originalClassName,
      hasPostfixModifier
    };
  }).reverse().filter(function(parsed) {
    if (!parsed.isTailwindClass) {
      return true;
    }
    var modifierId = parsed.modifierId, classGroupId = parsed.classGroupId, hasPostfixModifier = parsed.hasPostfixModifier;
    var classId = modifierId + classGroupId;
    if (classGroupsInConflict.has(classId)) {
      return false;
    }
    classGroupsInConflict.add(classId);
    getConflictingClassGroupIds(classGroupId, hasPostfixModifier).forEach(function(group) {
      return classGroupsInConflict.add(modifierId + group);
    });
    return true;
  }).reverse().map(function(parsed) {
    return parsed.originalClassName;
  }).join(" ");
}

// node_modules/tailwind-merge/dist/lib/create-tailwind-merge.mjs
function createTailwindMerge() {
  for (var _len = arguments.length, createConfig = new Array(_len), _key = 0; _key < _len; _key++) {
    createConfig[_key] = arguments[_key];
  }
  var configUtils;
  var cacheGet;
  var cacheSet;
  var functionToCall = initTailwindMerge;
  function initTailwindMerge(classList) {
    var firstCreateConfig = createConfig[0], restCreateConfig = createConfig.slice(1);
    var config = restCreateConfig.reduce(function(previousConfig, createConfigCurrent) {
      return createConfigCurrent(previousConfig);
    }, firstCreateConfig());
    configUtils = createConfigUtils(config);
    cacheGet = configUtils.cache.get;
    cacheSet = configUtils.cache.set;
    functionToCall = tailwindMerge;
    return tailwindMerge(classList);
  }
  function tailwindMerge(classList) {
    var cachedResult = cacheGet(classList);
    if (cachedResult) {
      return cachedResult;
    }
    var result = mergeClassList(classList, configUtils);
    cacheSet(classList, result);
    return result;
  }
  return function callTailwindMerge() {
    return functionToCall(twJoin.apply(null, arguments));
  };
}

// node_modules/tailwind-merge/dist/lib/from-theme.mjs
function fromTheme(key) {
  var themeGetter = function themeGetter2(theme) {
    return theme[key] || [];
  };
  themeGetter.isThemeGetter = true;
  return themeGetter;
}

// node_modules/tailwind-merge/dist/lib/validators.mjs
var arbitraryValueRegex = /^\[(?:([a-z-]+):)?(.+)\]$/i;
var fractionRegex = /^\d+\/\d+$/;
var stringLengths = /* @__PURE__ */ new Set(["px", "full", "screen"]);
var tshirtUnitRegex = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/;
var lengthUnitRegex = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/;
var shadowRegex = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function isLength(value) {
  return isNumber(value) || stringLengths.has(value) || fractionRegex.test(value) || isArbitraryLength(value);
}
function isArbitraryLength(value) {
  return getIsArbitraryValue(value, "length", isLengthOnly);
}
function isArbitrarySize(value) {
  return getIsArbitraryValue(value, "size", isNever);
}
function isArbitraryPosition(value) {
  return getIsArbitraryValue(value, "position", isNever);
}
function isArbitraryUrl(value) {
  return getIsArbitraryValue(value, "url", isUrl);
}
function isArbitraryNumber(value) {
  return getIsArbitraryValue(value, "number", isNumber);
}
function isNumber(value) {
  return !Number.isNaN(Number(value));
}
function isPercent(value) {
  return value.endsWith("%") && isNumber(value.slice(0, -1));
}
function isInteger(value) {
  return isIntegerOnly(value) || getIsArbitraryValue(value, "number", isIntegerOnly);
}
function isArbitraryValue(value) {
  return arbitraryValueRegex.test(value);
}
function isAny() {
  return true;
}
function isTshirtSize(value) {
  return tshirtUnitRegex.test(value);
}
function isArbitraryShadow(value) {
  return getIsArbitraryValue(value, "", isShadow);
}
function getIsArbitraryValue(value, label, testValue) {
  var result = arbitraryValueRegex.exec(value);
  if (result) {
    if (result[1]) {
      return result[1] === label;
    }
    return testValue(result[2]);
  }
  return false;
}
function isLengthOnly(value) {
  return lengthUnitRegex.test(value);
}
function isNever() {
  return false;
}
function isUrl(value) {
  return value.startsWith("url(");
}
function isIntegerOnly(value) {
  return Number.isInteger(Number(value));
}
function isShadow(value) {
  return shadowRegex.test(value);
}

// node_modules/tailwind-merge/dist/lib/default-config.mjs
function getDefaultConfig() {
  var colors = fromTheme("colors");
  var spacing = fromTheme("spacing");
  var blur = fromTheme("blur");
  var brightness = fromTheme("brightness");
  var borderColor = fromTheme("borderColor");
  var borderRadius = fromTheme("borderRadius");
  var borderSpacing = fromTheme("borderSpacing");
  var borderWidth = fromTheme("borderWidth");
  var contrast = fromTheme("contrast");
  var grayscale = fromTheme("grayscale");
  var hueRotate = fromTheme("hueRotate");
  var invert = fromTheme("invert");
  var gap = fromTheme("gap");
  var gradientColorStops = fromTheme("gradientColorStops");
  var gradientColorStopPositions = fromTheme("gradientColorStopPositions");
  var inset = fromTheme("inset");
  var margin = fromTheme("margin");
  var opacity = fromTheme("opacity");
  var padding = fromTheme("padding");
  var saturate = fromTheme("saturate");
  var scale = fromTheme("scale");
  var sepia = fromTheme("sepia");
  var skew = fromTheme("skew");
  var space = fromTheme("space");
  var translate = fromTheme("translate");
  var getOverscroll = function getOverscroll2() {
    return ["auto", "contain", "none"];
  };
  var getOverflow = function getOverflow2() {
    return ["auto", "hidden", "clip", "visible", "scroll"];
  };
  var getSpacingWithAutoAndArbitrary = function getSpacingWithAutoAndArbitrary2() {
    return ["auto", isArbitraryValue, spacing];
  };
  var getSpacingWithArbitrary = function getSpacingWithArbitrary2() {
    return [isArbitraryValue, spacing];
  };
  var getLengthWithEmpty = function getLengthWithEmpty2() {
    return ["", isLength];
  };
  var getNumberWithAutoAndArbitrary = function getNumberWithAutoAndArbitrary2() {
    return ["auto", isNumber, isArbitraryValue];
  };
  var getPositions = function getPositions2() {
    return ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"];
  };
  var getLineStyles = function getLineStyles2() {
    return ["solid", "dashed", "dotted", "double", "none"];
  };
  var getBlendModes = function getBlendModes2() {
    return ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"];
  };
  var getAlign = function getAlign2() {
    return ["start", "end", "center", "between", "around", "evenly", "stretch"];
  };
  var getZeroAndEmpty = function getZeroAndEmpty2() {
    return ["", "0", isArbitraryValue];
  };
  var getBreaks = function getBreaks2() {
    return ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
  };
  var getNumber = function getNumber2() {
    return [isNumber, isArbitraryNumber];
  };
  var getNumberAndArbitrary = function getNumberAndArbitrary2() {
    return [isNumber, isArbitraryValue];
  };
  return {
    cacheSize: 500,
    theme: {
      colors: [isAny],
      spacing: [isLength],
      blur: ["none", "", isTshirtSize, isArbitraryValue],
      brightness: getNumber(),
      borderColor: [colors],
      borderRadius: ["none", "", "full", isTshirtSize, isArbitraryValue],
      borderSpacing: getSpacingWithArbitrary(),
      borderWidth: getLengthWithEmpty(),
      contrast: getNumber(),
      grayscale: getZeroAndEmpty(),
      hueRotate: getNumberAndArbitrary(),
      invert: getZeroAndEmpty(),
      gap: getSpacingWithArbitrary(),
      gradientColorStops: [colors],
      gradientColorStopPositions: [isPercent, isArbitraryLength],
      inset: getSpacingWithAutoAndArbitrary(),
      margin: getSpacingWithAutoAndArbitrary(),
      opacity: getNumber(),
      padding: getSpacingWithArbitrary(),
      saturate: getNumber(),
      scale: getNumber(),
      sepia: getZeroAndEmpty(),
      skew: getNumberAndArbitrary(),
      space: getSpacingWithArbitrary(),
      translate: getSpacingWithArbitrary()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", isArbitraryValue]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [isTshirtSize]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": getBreaks()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": getBreaks()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      "float": [{
        "float": ["right", "left", "none"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [].concat(getPositions(), [isArbitraryValue])
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: getOverflow()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": getOverflow()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": getOverflow()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: getOverscroll()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": getOverscroll()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": getOverscroll()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [inset]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [inset]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [inset]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [inset]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [inset]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [inset]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [inset]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [inset]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [inset]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", isInteger]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: getSpacingWithAutoAndArbitrary()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", isArbitraryValue]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: getZeroAndEmpty()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: getZeroAndEmpty()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", isInteger]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [isAny]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", isInteger]
        }, isArbitraryValue]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": getNumberWithAutoAndArbitrary()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": getNumberWithAutoAndArbitrary()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [isAny]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [isInteger]
        }, isArbitraryValue]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": getNumberWithAutoAndArbitrary()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": getNumberWithAutoAndArbitrary()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", isArbitraryValue]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", isArbitraryValue]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [gap]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [gap]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [gap]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal"].concat(getAlign())
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal"].concat(getAlign(), ["baseline"])
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [].concat(getAlign(), ["baseline"])
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [padding]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [padding]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [padding]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [padding]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [padding]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [padding]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [padding]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [padding]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [padding]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [margin]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [margin]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [margin]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [margin]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [margin]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [margin]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [margin]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [margin]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [margin]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [space]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [space]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", isArbitraryValue, spacing]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": ["min", "max", "fit", isArbitraryValue, isLength]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": ["0", "none", "full", "min", "max", "fit", "prose", {
          screen: [isTshirtSize]
        }, isTshirtSize, isArbitraryValue]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [isArbitraryValue, spacing, "auto", "min", "max", "fit"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["min", "max", "fit", isArbitraryValue, isLength]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [isArbitraryValue, spacing, "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", isTshirtSize, isArbitraryLength]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", isArbitraryNumber]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [isAny]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", isArbitraryValue]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", isNumber, isArbitraryNumber]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", isArbitraryValue, isLength]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", isArbitraryValue]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", isArbitraryValue]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [colors]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [opacity]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [colors]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [opacity]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [].concat(getLineStyles(), ["wavy"])
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", isLength]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", isArbitraryValue, isLength]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [colors]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: getSpacingWithArbitrary()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", isArbitraryValue]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      "break": [{
        "break": ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", isArbitraryValue]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [opacity]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [].concat(getPositions(), [isArbitraryPosition])
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", isArbitrarySize]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, isArbitraryUrl]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [colors]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [gradientColorStopPositions]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [gradientColorStopPositions]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [gradientColorStopPositions]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [gradientColorStops]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [gradientColorStops]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [gradientColorStops]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [borderRadius]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [borderRadius]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [borderRadius]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [borderRadius]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [borderRadius]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [borderRadius]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [borderRadius]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [borderRadius]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [borderRadius]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [borderRadius]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [borderRadius]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [borderRadius]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [borderRadius]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [borderRadius]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [borderRadius]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [borderWidth]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [borderWidth]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [borderWidth]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [borderWidth]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [borderWidth]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [borderWidth]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [borderWidth]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [borderWidth]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [borderWidth]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [opacity]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [].concat(getLineStyles(), ["hidden"])
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [borderWidth]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [borderWidth]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [opacity]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: getLineStyles()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [borderColor]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [borderColor]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [borderColor]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [borderColor]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [borderColor]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [borderColor]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [borderColor]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [borderColor]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [""].concat(getLineStyles())
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [isArbitraryValue, isLength]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [isLength]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [colors]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: getLengthWithEmpty()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [colors]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [opacity]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [isLength]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [colors]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", isTshirtSize, isArbitraryShadow]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [isAny]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [opacity]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": getBlendModes()
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": getBlendModes()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [blur]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [brightness]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [contrast]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", isTshirtSize, isArbitraryValue]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [grayscale]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [hueRotate]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [invert]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [saturate]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [sepia]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [blur]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [brightness]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [contrast]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [grayscale]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [hueRotate]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [invert]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [opacity]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [saturate]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [sepia]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [borderSpacing]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [borderSpacing]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [borderSpacing]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", isArbitraryValue]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: getNumberAndArbitrary()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", isArbitraryValue]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: getNumberAndArbitrary()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", isArbitraryValue]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [scale]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [scale]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [scale]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [isInteger, isArbitraryValue]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [translate]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [translate]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [skew]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [skew]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", isArbitraryValue]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", colors]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: ["appearance-none"],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", isArbitraryValue]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [colors]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "pinch-zoom", "manipulation", {
          pan: ["x", "left", "right", "y", "up", "down"]
        }]
      }],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", isArbitraryValue]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [colors, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [isLength, isArbitraryNumber]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [colors, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}

// node_modules/tailwind-merge/dist/lib/merge-configs.mjs
function mergeConfigs(baseConfig, configExtension) {
  for (var key in configExtension) {
    mergePropertyRecursively(baseConfig, key, configExtension[key]);
  }
  return baseConfig;
}
var hasOwnProperty = Object.prototype.hasOwnProperty;
var overrideTypes = /* @__PURE__ */ new Set(["string", "number", "boolean"]);
function mergePropertyRecursively(baseObject, mergeKey, mergeValue) {
  if (!hasOwnProperty.call(baseObject, mergeKey) || overrideTypes.has(typeof mergeValue) || mergeValue === null) {
    baseObject[mergeKey] = mergeValue;
    return;
  }
  if (Array.isArray(mergeValue) && Array.isArray(baseObject[mergeKey])) {
    baseObject[mergeKey] = baseObject[mergeKey].concat(mergeValue);
    return;
  }
  if (typeof mergeValue === "object" && typeof baseObject[mergeKey] === "object") {
    if (baseObject[mergeKey] === null) {
      baseObject[mergeKey] = mergeValue;
      return;
    }
    for (var nextKey in mergeValue) {
      mergePropertyRecursively(baseObject[mergeKey], nextKey, mergeValue[nextKey]);
    }
  }
}

// node_modules/tailwind-merge/dist/lib/extend-tailwind-merge.mjs
function extendTailwindMerge(configExtension) {
  for (var _len = arguments.length, createConfig = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    createConfig[_key - 1] = arguments[_key];
  }
  return typeof configExtension === "function" ? createTailwindMerge.apply(void 0, [getDefaultConfig, configExtension].concat(createConfig)) : createTailwindMerge.apply(void 0, [function() {
    return mergeConfigs(getDefaultConfig(), configExtension);
  }].concat(createConfig));
}

// node_modules/tailwind-merge/dist/lib/tw-merge.mjs
var twMerge = /* @__PURE__ */ createTailwindMerge(getDefaultConfig);

// node_modules/tailwind-variants/dist/index.js
var se = { twMerge: true, twMergeConfig: {}, responsiveVariants: false };
var _ = (s) => s || void 0;
var N = (...s) => _(y(s).filter(Boolean).join(" "));
var q = null;
var M = {};
var F = false;
var w = (...s) => (b$1) => b$1.twMerge ? ((!q || F) && (F = false, q = u(M) ? twMerge : extendTailwindMerge(M)), _(q(N(s)))) : N(s);
var Z = (s, b) => {
  for (let e2 in b)
    s.hasOwnProperty(e2) ? s[e2] = N(s[e2], b[e2]) : s[e2] = b[e2];
  return s;
};
var ie = (s, b$1) => {
  let { extend: e2 = null, slots: j = {}, variants: U = {}, compoundVariants: C = [], compoundSlots: V = [], defaultVariants: W = {} } = s, m2 = { ...se, ...b$1 }, S = e2 != null && e2.base ? N(e2.base, s == null ? void 0 : s.base) : s == null ? void 0 : s.base, g$1 = e2 != null && e2.variants && !u(e2.variants) ? p(U, e2.variants) : U, A = e2 != null && e2.defaultVariants && !u(e2.defaultVariants) ? { ...e2.defaultVariants, ...W } : W;
  !u(m2.twMergeConfig) && !x(m2.twMergeConfig, M) && (F = true, M = m2.twMergeConfig);
  let O = u(e2 == null ? void 0 : e2.slots), $ = u(j) ? {} : { base: N(s == null ? void 0 : s.base, O && (e2 == null ? void 0 : e2.base)), ...j }, h$1 = O ? $ : Z({ ...e2 == null ? void 0 : e2.slots }, u($) ? { base: s == null ? void 0 : s.base } : $), v = (l3) => {
    if (u(g$1) && u(j) && O)
      return w(S, l3 == null ? void 0 : l3.class, l3 == null ? void 0 : l3.className)(m2);
    if (C && !Array.isArray(C))
      throw new TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof C}`);
    if (V && !Array.isArray(V))
      throw new TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof V}`);
    let K = (t3, n2, a2 = [], i2) => {
      let r2 = a2;
      if (typeof n2 == "string")
        r2 = r2.concat(g(n2).split(" ").map((c) => `${t3}:${c}`));
      else if (Array.isArray(n2))
        r2 = r2.concat(n2.reduce((c, f) => c.concat(`${t3}:${f}`), []));
      else if (typeof n2 == "object" && typeof i2 == "string") {
        for (let c in n2)
          if (n2.hasOwnProperty(c) && c === i2) {
            let f = n2[c];
            if (f && typeof f == "string") {
              let o3 = g(f);
              r2[i2] ? r2[i2] = r2[i2].concat(o3.split(" ").map((u2) => `${t3}:${u2}`)) : r2[i2] = o3.split(" ").map((u2) => `${t3}:${u2}`);
            } else
              Array.isArray(f) && f.length > 0 && (r2[i2] = f.reduce((o3, u2) => o3.concat(`${t3}:${u2}`), []));
          }
      }
      return r2;
    }, z = (t3, n2 = g$1, a$1 = null, i2 = null) => {
      var J;
      let r2 = n2[t3];
      if (!r2 || u(r2))
        return null;
      let c = (J = i2 == null ? void 0 : i2[t3]) != null ? J : l3 == null ? void 0 : l3[t3];
      if (c === null)
        return null;
      let f = l(c), o3 = Array.isArray(m2.responsiveVariants) && m2.responsiveVariants.length > 0 || m2.responsiveVariants === true, u2 = A == null ? void 0 : A[t3], d = [];
      if (typeof f == "object" && o3)
        for (let [k, L] of Object.entries(f)) {
          let ae = r2[L];
          if (k === "initial") {
            u2 = L;
            continue;
          }
          Array.isArray(m2.responsiveVariants) && !m2.responsiveVariants.includes(k) || (d = K(k, ae, d, a$1));
        }
      let T = r2[f] || r2[l(u2)];
      return typeof d == "object" && typeof a$1 == "string" && d[a$1] ? Z(d, T) : d.length > 0 ? (d.push(T), d) : T;
    }, P = () => g$1 ? Object.keys(g$1).map((t3) => z(t3, g$1)) : null, p2 = (t3, n2) => {
      if (!g$1 || typeof g$1 != "object")
        return null;
      let a2 = new Array();
      for (let i2 in g$1) {
        let r2 = z(i2, g$1, t3, n2), c = t3 === "base" && typeof r2 == "string" ? r2 : r2 && r2[t3];
        c && (a2[a2.length] = c);
      }
      return a2;
    }, D = {};
    for (let t3 in l3)
      l3[t3] !== void 0 && (D[t3] = l3[t3]);
    let G = (t3, n2) => {
      var i2;
      let a2 = typeof (l3 == null ? void 0 : l3[t3]) == "object" ? { [t3]: (i2 = l3[t3]) == null ? void 0 : i2.initial } : {};
      return { ...A, ...D, ...a2, ...n2 };
    }, H = (t3 = [], n2) => {
      let a2 = [];
      for (let { class: i2, className: r2, ...c } of t3) {
        let f = true;
        for (let [o3, u2] of Object.entries(c)) {
          let d = G(o3, n2);
          if (Array.isArray(u2)) {
            if (!u2.includes(d[o3])) {
              f = false;
              break;
            }
          } else if (d[o3] !== u2) {
            f = false;
            break;
          }
        }
        f && (i2 && a2.push(i2), r2 && a2.push(r2));
      }
      return a2;
    }, I = (t3) => {
      let n2 = H(C, t3), a2 = H(e2 == null ? void 0 : e2.compoundVariants, t3);
      return a(a2, n2);
    }, ee = (t3) => {
      let n2 = I(t3);
      if (!Array.isArray(n2))
        return n2;
      let a2 = {};
      for (let i2 of n2)
        if (typeof i2 == "string" && (a2.base = w(a2.base, i2)(m2)), typeof i2 == "object")
          for (let [r2, c] of Object.entries(i2))
            a2[r2] = w(a2[r2], c)(m2);
      return a2;
    }, te = (t3) => {
      if (V.length < 1)
        return null;
      let n2 = {};
      for (let { slots: a2 = [], class: i2, className: r2, ...c } of V) {
        if (!u(c)) {
          let f = true;
          for (let o3 of Object.keys(c)) {
            let u2 = G(o3, t3)[o3];
            if (u2 === void 0 || (Array.isArray(c[o3]) ? !c[o3].includes(u2) : c[o3] !== u2)) {
              f = false;
              break;
            }
          }
          if (!f)
            continue;
        }
        for (let f of a2)
          n2[f] = n2[f] || [], n2[f].push([i2, r2]);
      }
      return n2;
    };
    if (!u(j) || !O) {
      let t3 = {};
      if (typeof h$1 == "object" && !u(h$1))
        for (let n2 of Object.keys(h$1))
          t3[n2] = (a2) => {
            var i2, r2;
            return w(h$1[n2], p2(n2, a2), ((i2 = ee(a2)) != null ? i2 : [])[n2], ((r2 = te(a2)) != null ? r2 : [])[n2], a2 == null ? void 0 : a2.class, a2 == null ? void 0 : a2.className)(m2);
          };
      return t3;
    }
    return w(S, P(), I(), l3 == null ? void 0 : l3.class, l3 == null ? void 0 : l3.className)(m2);
  }, x2 = () => {
    if (!(!g$1 || typeof g$1 != "object"))
      return Object.keys(g$1);
  };
  return v.variantKeys = x2(), v.extend = e2, v.base = S, v.slots = h$1, v.variants = g$1, v.defaultVariants = A, v.compoundSlots = V, v.compoundVariants = C, v;
};

// node_modules/@nextui-org/theme/dist/chunk-N2KXC5ZE.mjs
var tv = (options, config) => {
  var _a, _b, _c7;
  return ie(options, {
    ...config,
    twMerge: (_a = config == null ? void 0 : config.twMerge) != null ? _a : true,
    twMergeConfig: {
      ...config == null ? void 0 : config.twMergeConfig,
      theme: {
        ...(_b = config == null ? void 0 : config.twMergeConfig) == null ? void 0 : _b.theme,
        ...twMergeConfig.theme
      },
      classGroups: {
        ...(_c7 = config == null ? void 0 : config.twMergeConfig) == null ? void 0 : _c7.classGroups,
        ...twMergeConfig.classGroups
      }
    }
  });
};

// node_modules/@nextui-org/theme/dist/chunk-XHQUSKIE.mjs
var dataFocusVisibleClasses = [
  "outline-none",
  "data-[focus-visible=true]:z-10",
  "data-[focus-visible=true]:outline-2",
  "data-[focus-visible=true]:outline-focus",
  "data-[focus-visible=true]:outline-offset-2"
];

// node_modules/@nextui-org/theme/dist/chunk-42JWJWWX.mjs
var tabs = tv({
  slots: {
    base: "inline-flex",
    tabList: [
      "flex",
      "p-1",
      "h-fit",
      "gap-2",
      "items-center",
      "flex-nowrap",
      "overflow-x-scroll",
      "scrollbar-hide",
      "bg-default-100"
    ],
    tab: [
      "z-0",
      "w-full",
      "px-3",
      "py-1",
      "flex",
      "group",
      "relative",
      "justify-center",
      "items-center",
      "outline-none",
      "cursor-pointer",
      "transition-opacity",
      "tap-highlight-transparent",
      "data-[disabled=true]:cursor-not-allowed",
      "data-[disabled=true]:opacity-30",
      "data-[hover-unselected=true]:opacity-disabled",
      ...dataFocusVisibleClasses
    ],
    tabContent: [
      "relative",
      "z-10",
      "text-inherit",
      "whitespace-nowrap",
      "transition-colors",
      "text-default-500",
      "group-data-[selected=true]:text-foreground"
    ],
    cursor: ["absolute", "z-0", "bg-white"],
    panel: [
      "py-3",
      "px-1",
      "outline-none",
      "data-[inert=true]:hidden",
      ...dataFocusVisibleClasses
    ],
    wrapper: []
  },
  variants: {
    variant: {
      solid: {
        cursor: "inset-0"
      },
      light: {
        tabList: "bg-transparent dark:bg-transparent",
        cursor: "inset-0"
      },
      underlined: {
        tabList: "bg-transparent dark:bg-transparent",
        cursor: "h-[2px] w-[80%] bottom-0 shadow-[0_1px_0px_0_rgba(0,0,0,0.05)]"
      },
      bordered: {
        tabList: "bg-transparent dark:bg-transparent border-medium border-default-200 shadow-sm",
        cursor: "inset-0"
      }
    },
    color: {
      default: {},
      primary: {},
      secondary: {},
      success: {},
      warning: {},
      danger: {}
    },
    size: {
      sm: {
        tabList: "rounded-medium",
        tab: "h-7 text-tiny rounded-small",
        cursor: "rounded-small"
      },
      md: {
        tabList: "rounded-medium",
        tab: "h-8 text-small rounded-small",
        cursor: "rounded-small"
      },
      lg: {
        tabList: "rounded-large",
        tab: "h-9 text-medium rounded-medium",
        cursor: "rounded-medium"
      }
    },
    radius: {
      none: {
        tabList: "rounded-none",
        tab: "rounded-none",
        cursor: "rounded-none"
      },
      sm: {
        tabList: "rounded-medium",
        tab: "rounded-small",
        cursor: "rounded-small"
      },
      md: {
        tabList: "rounded-medium",
        tab: "rounded-small",
        cursor: "rounded-small"
      },
      lg: {
        tabList: "rounded-large",
        tab: "rounded-medium",
        cursor: "rounded-medium"
      },
      full: {
        tabList: "rounded-full",
        tab: "rounded-full",
        cursor: "rounded-full"
      }
    },
    fullWidth: {
      true: {
        base: "w-full",
        tabList: "w-full"
      }
    },
    isDisabled: {
      true: {
        tabList: "opacity-disabled pointer-events-none"
      }
    },
    disableAnimation: {
      true: {
        tab: "transition-none",
        tabContent: "transition-none"
      }
    },
    placement: {
      top: {},
      start: {
        tabList: "flex-col",
        panel: "py-0 px-3",
        wrapper: "flex"
      },
      end: {
        tabList: "flex-col",
        panel: "py-0 px-3",
        wrapper: "flex flex-row-reverse"
      },
      bottom: {
        wrapper: "flex flex-col-reverse"
      }
    }
  },
  defaultVariants: {
    color: "default",
    variant: "solid",
    size: "md",
    fullWidth: false,
    isDisabled: false
  },
  compoundVariants: [
    {
      variant: ["solid", "bordered", "light"],
      color: "default",
      class: {
        cursor: ["bg-background", "dark:bg-default", "shadow-small"],
        tabContent: "group-data-[selected=true]:text-default-foreground"
      }
    },
    {
      variant: ["solid", "bordered", "light"],
      color: "primary",
      class: {
        cursor: colorVariants.solid.primary,
        tabContent: "group-data-[selected=true]:text-primary-foreground"
      }
    },
    {
      variant: ["solid", "bordered", "light"],
      color: "secondary",
      class: {
        cursor: colorVariants.solid.secondary,
        tabContent: "group-data-[selected=true]:text-secondary-foreground"
      }
    },
    {
      variant: ["solid", "bordered", "light"],
      color: "success",
      class: {
        cursor: colorVariants.solid.success,
        tabContent: "group-data-[selected=true]:text-success-foreground"
      }
    },
    {
      variant: ["solid", "bordered", "light"],
      color: "warning",
      class: {
        cursor: colorVariants.solid.warning,
        tabContent: "group-data-[selected=true]:text-warning-foreground"
      }
    },
    {
      variant: ["solid", "bordered", "light"],
      color: "danger",
      class: {
        cursor: colorVariants.solid.danger,
        tabContent: "group-data-[selected=true]:text-danger-foreground"
      }
    },
    {
      variant: "underlined",
      color: "default",
      class: {
        cursor: "bg-foreground",
        tabContent: "group-data-[selected=true]:text-foreground"
      }
    },
    {
      variant: "underlined",
      color: "primary",
      class: {
        cursor: "bg-primary",
        tabContent: "group-data-[selected=true]:text-primary"
      }
    },
    {
      variant: "underlined",
      color: "secondary",
      class: {
        cursor: "bg-secondary",
        tabContent: "group-data-[selected=true]:text-secondary"
      }
    },
    {
      variant: "underlined",
      color: "success",
      class: {
        cursor: "bg-success",
        tabContent: "group-data-[selected=true]:text-success"
      }
    },
    {
      variant: "underlined",
      color: "warning",
      class: {
        cursor: "bg-warning",
        tabContent: "group-data-[selected=true]:text-warning"
      }
    },
    {
      variant: "underlined",
      color: "danger",
      class: {
        cursor: "bg-danger",
        tabContent: "group-data-[selected=true]:text-danger"
      }
    },
    {
      disableAnimation: true,
      variant: "underlined",
      class: {
        tab: [
          "after:content-['']",
          "after:absolute",
          "after:bottom-0",
          "after:h-[2px]",
          "after:w-[80%]",
          "after:opacity-0",
          "after:shadow-[0_1px_0px_0_rgba(0,0,0,0.05)]",
          "data-[selected=true]:after:opacity-100"
        ]
      }
    },
    {
      disableAnimation: true,
      color: "default",
      variant: ["solid", "bordered", "light"],
      class: {
        tab: "data-[selected=true]:bg-default data-[selected=true]:text-default-foreground"
      }
    },
    {
      disableAnimation: true,
      color: "primary",
      variant: ["solid", "bordered", "light"],
      class: {
        tab: "data-[selected=true]:bg-primary data-[selected=true]:text-primary-foreground"
      }
    },
    {
      disableAnimation: true,
      color: "secondary",
      variant: ["solid", "bordered", "light"],
      class: {
        tab: "data-[selected=true]:bg-secondary data-[selected=true]:text-secondary-foreground"
      }
    },
    {
      disableAnimation: true,
      color: "success",
      variant: ["solid", "bordered", "light"],
      class: {
        tab: "data-[selected=true]:bg-success data-[selected=true]:text-success-foreground"
      }
    },
    {
      disableAnimation: true,
      color: "warning",
      variant: ["solid", "bordered", "light"],
      class: {
        tab: "data-[selected=true]:bg-warning data-[selected=true]:text-warning-foreground"
      }
    },
    {
      disableAnimation: true,
      color: "danger",
      variant: ["solid", "bordered", "light"],
      class: {
        tab: "data-[selected=true]:bg-danger data-[selected=true]:text-danger-foreground"
      }
    },
    {
      disableAnimation: true,
      color: "default",
      variant: "underlined",
      class: {
        tab: "data-[selected=true]:after:bg-foreground"
      }
    },
    {
      disableAnimation: true,
      color: "primary",
      variant: "underlined",
      class: {
        tab: "data-[selected=true]:after:bg-primary"
      }
    },
    {
      disableAnimation: true,
      color: "secondary",
      variant: "underlined",
      class: {
        tab: "data-[selected=true]:after:bg-secondary"
      }
    },
    {
      disableAnimation: true,
      color: "success",
      variant: "underlined",
      class: {
        tab: "data-[selected=true]:after:bg-success"
      }
    },
    {
      disableAnimation: true,
      color: "warning",
      variant: "underlined",
      class: {
        tab: "data-[selected=true]:after:bg-warning"
      }
    },
    {
      disableAnimation: true,
      color: "danger",
      variant: "underlined",
      class: {
        tab: "data-[selected=true]:after:bg-danger"
      }
    }
  ],
  compoundSlots: [
    {
      variant: "underlined",
      slots: ["tab", "tabList", "cursor"],
      class: ["rounded-none"]
    }
  ]
});

// node_modules/@react-aria/selection/dist/utils.mjs
function $feb5ffebff200149$export$d3e3bd3e26688c04(e2) {
  return (0, $c87311424ea30a05$export$e1865c3bedcd822b)() ? e2.altKey : e2.ctrlKey;
}
function $feb5ffebff200149$export$16792effe837dba3(e2) {
  if ((0, $c87311424ea30a05$export$9ac100e40613ea10)())
    return e2.metaKey;
  return e2.ctrlKey;
}

// node_modules/@react-aria/selection/dist/useTypeSelect.mjs
var import_react12 = __toESM(require_react(), 1);
var $fb3050f43d946246$var$TYPEAHEAD_DEBOUNCE_WAIT_MS = 1e3;
function $fb3050f43d946246$export$e32c88dfddc6e1d8(options) {
  let { keyboardDelegate, selectionManager, onTypeSelect } = options;
  let state = (0, import_react12.useRef)({
    search: "",
    timeout: null
  }).current;
  let onKeyDown = (e2) => {
    let character = $fb3050f43d946246$var$getStringForKey(e2.key);
    if (!character || e2.ctrlKey || e2.metaKey || !e2.currentTarget.contains(e2.target))
      return;
    if (character === " " && state.search.trim().length > 0) {
      e2.preventDefault();
      if (!("continuePropagation" in e2))
        e2.stopPropagation();
    }
    state.search += character;
    let key = keyboardDelegate.getKeyForSearch(state.search, selectionManager.focusedKey);
    if (key == null)
      key = keyboardDelegate.getKeyForSearch(state.search);
    if (key != null) {
      selectionManager.setFocusedKey(key);
      if (onTypeSelect)
        onTypeSelect(key);
    }
    clearTimeout(state.timeout);
    state.timeout = setTimeout(() => {
      state.search = "";
    }, $fb3050f43d946246$var$TYPEAHEAD_DEBOUNCE_WAIT_MS);
  };
  return {
    typeSelectProps: {
      // Using a capturing listener to catch the keydown event before
      // other hooks in order to handle the Spacebar event.
      onKeyDownCapture: keyboardDelegate.getKeyForSearch ? onKeyDown : null
    }
  };
}
function $fb3050f43d946246$var$getStringForKey(key) {
  if (key.length === 1 || !/^[A-Z]/i.test(key))
    return key;
  return "";
}

// node_modules/@react-aria/selection/dist/useSelectableCollection.mjs
var import_react_dom = __toESM(require_react_dom(), 1);
var import_react13 = __toESM(require_react(), 1);
function $ae20dd8cbca75726$export$d6daf82dcd84e87c(options) {
  let { selectionManager: manager, keyboardDelegate: delegate, ref, autoFocus = false, shouldFocusWrap = false, disallowEmptySelection = false, disallowSelectAll = false, selectOnFocus = manager.selectionBehavior === "replace", disallowTypeAhead = false, shouldUseVirtualFocus, allowsTabNavigation = false, isVirtualized, scrollRef = ref, linkBehavior = "action" } = options;
  let { direction } = (0, $18f2051aff69b9bf$export$43bb16f9c6d9e3f7)();
  let router = (0, $ea8dcbcb9ea1b556$export$9a302a45f65d0572)();
  let onKeyDown = (e2) => {
    if (e2.altKey && e2.key === "Tab")
      e2.preventDefault();
    if (!ref.current.contains(e2.target))
      return;
    const navigateToKey = (key, childFocus) => {
      if (key != null) {
        if (manager.isLink(key) && linkBehavior === "selection" && selectOnFocus && !(0, $feb5ffebff200149$export$d3e3bd3e26688c04)(e2)) {
          (0, import_react_dom.flushSync)(() => {
            manager.setFocusedKey(key, childFocus);
          });
          let item = scrollRef.current.querySelector(`[data-key="${CSS.escape(key.toString())}"]`);
          let itemProps = manager.getItemProps(key);
          router.open(item, e2, itemProps.href, itemProps.routerOptions);
          return;
        }
        manager.setFocusedKey(key, childFocus);
        if (manager.isLink(key) && linkBehavior === "override")
          return;
        if (e2.shiftKey && manager.selectionMode === "multiple")
          manager.extendSelection(key);
        else if (selectOnFocus && !(0, $feb5ffebff200149$export$d3e3bd3e26688c04)(e2))
          manager.replaceSelection(key);
      }
    };
    switch (e2.key) {
      case "ArrowDown":
        if (delegate.getKeyBelow) {
          var _delegate_getFirstKey, _delegate_getFirstKey1;
          e2.preventDefault();
          let nextKey = manager.focusedKey != null ? delegate.getKeyBelow(manager.focusedKey) : (_delegate_getFirstKey = delegate.getFirstKey) === null || _delegate_getFirstKey === void 0 ? void 0 : _delegate_getFirstKey.call(delegate);
          if (nextKey == null && shouldFocusWrap)
            nextKey = (_delegate_getFirstKey1 = delegate.getFirstKey) === null || _delegate_getFirstKey1 === void 0 ? void 0 : _delegate_getFirstKey1.call(delegate, manager.focusedKey);
          navigateToKey(nextKey);
        }
        break;
      case "ArrowUp":
        if (delegate.getKeyAbove) {
          var _delegate_getLastKey, _delegate_getLastKey1;
          e2.preventDefault();
          let nextKey = manager.focusedKey != null ? delegate.getKeyAbove(manager.focusedKey) : (_delegate_getLastKey = delegate.getLastKey) === null || _delegate_getLastKey === void 0 ? void 0 : _delegate_getLastKey.call(delegate);
          if (nextKey == null && shouldFocusWrap)
            nextKey = (_delegate_getLastKey1 = delegate.getLastKey) === null || _delegate_getLastKey1 === void 0 ? void 0 : _delegate_getLastKey1.call(delegate, manager.focusedKey);
          navigateToKey(nextKey);
        }
        break;
      case "ArrowLeft":
        if (delegate.getKeyLeftOf) {
          var _delegate_getFirstKey2, _delegate_getLastKey2;
          e2.preventDefault();
          let nextKey = delegate.getKeyLeftOf(manager.focusedKey);
          if (nextKey == null && shouldFocusWrap)
            nextKey = direction === "rtl" ? (_delegate_getFirstKey2 = delegate.getFirstKey) === null || _delegate_getFirstKey2 === void 0 ? void 0 : _delegate_getFirstKey2.call(delegate, manager.focusedKey) : (_delegate_getLastKey2 = delegate.getLastKey) === null || _delegate_getLastKey2 === void 0 ? void 0 : _delegate_getLastKey2.call(delegate, manager.focusedKey);
          navigateToKey(nextKey, direction === "rtl" ? "first" : "last");
        }
        break;
      case "ArrowRight":
        if (delegate.getKeyRightOf) {
          var _delegate_getLastKey3, _delegate_getFirstKey3;
          e2.preventDefault();
          let nextKey = delegate.getKeyRightOf(manager.focusedKey);
          if (nextKey == null && shouldFocusWrap)
            nextKey = direction === "rtl" ? (_delegate_getLastKey3 = delegate.getLastKey) === null || _delegate_getLastKey3 === void 0 ? void 0 : _delegate_getLastKey3.call(delegate, manager.focusedKey) : (_delegate_getFirstKey3 = delegate.getFirstKey) === null || _delegate_getFirstKey3 === void 0 ? void 0 : _delegate_getFirstKey3.call(delegate, manager.focusedKey);
          navigateToKey(nextKey, direction === "rtl" ? "last" : "first");
        }
        break;
      case "Home":
        if (delegate.getFirstKey) {
          e2.preventDefault();
          let firstKey = delegate.getFirstKey(manager.focusedKey, (0, $feb5ffebff200149$export$16792effe837dba3)(e2));
          manager.setFocusedKey(firstKey);
          if ((0, $feb5ffebff200149$export$16792effe837dba3)(e2) && e2.shiftKey && manager.selectionMode === "multiple")
            manager.extendSelection(firstKey);
          else if (selectOnFocus)
            manager.replaceSelection(firstKey);
        }
        break;
      case "End":
        if (delegate.getLastKey) {
          e2.preventDefault();
          let lastKey = delegate.getLastKey(manager.focusedKey, (0, $feb5ffebff200149$export$16792effe837dba3)(e2));
          manager.setFocusedKey(lastKey);
          if ((0, $feb5ffebff200149$export$16792effe837dba3)(e2) && e2.shiftKey && manager.selectionMode === "multiple")
            manager.extendSelection(lastKey);
          else if (selectOnFocus)
            manager.replaceSelection(lastKey);
        }
        break;
      case "PageDown":
        if (delegate.getKeyPageBelow) {
          e2.preventDefault();
          let nextKey = delegate.getKeyPageBelow(manager.focusedKey);
          navigateToKey(nextKey);
        }
        break;
      case "PageUp":
        if (delegate.getKeyPageAbove) {
          e2.preventDefault();
          let nextKey = delegate.getKeyPageAbove(manager.focusedKey);
          navigateToKey(nextKey);
        }
        break;
      case "a":
        if ((0, $feb5ffebff200149$export$16792effe837dba3)(e2) && manager.selectionMode === "multiple" && disallowSelectAll !== true) {
          e2.preventDefault();
          manager.selectAll();
        }
        break;
      case "Escape":
        if (!disallowEmptySelection && manager.selectedKeys.size !== 0) {
          e2.stopPropagation();
          e2.preventDefault();
          manager.clearSelection();
        }
        break;
      case "Tab":
        if (!allowsTabNavigation) {
          if (e2.shiftKey)
            ref.current.focus();
          else {
            let walker = (0, $9bf71ea28793e738$export$2d6ec8fc375ceafa)(ref.current, {
              tabbable: true
            });
            let next;
            let last;
            do {
              last = walker.lastChild();
              if (last)
                next = last;
            } while (last);
            if (next && !next.contains(document.activeElement))
              (0, $7215afc6de606d6b$export$de79e2c695e052f3)(next);
          }
          break;
        }
    }
  };
  let scrollPos = (0, import_react13.useRef)({
    top: 0,
    left: 0
  });
  (0, $e9faafb641e167db$export$90fc3a17d93f704c)(scrollRef, "scroll", isVirtualized ? null : () => {
    scrollPos.current = {
      top: scrollRef.current.scrollTop,
      left: scrollRef.current.scrollLeft
    };
  });
  let onFocus = (e2) => {
    if (manager.isFocused) {
      if (!e2.currentTarget.contains(e2.target))
        manager.setFocused(false);
      return;
    }
    if (!e2.currentTarget.contains(e2.target))
      return;
    manager.setFocused(true);
    if (manager.focusedKey == null) {
      let navigateToFirstKey = (key) => {
        if (key != null) {
          manager.setFocusedKey(key);
          if (selectOnFocus)
            manager.replaceSelection(key);
        }
      };
      let relatedTarget = e2.relatedTarget;
      var _manager_lastSelectedKey, _manager_firstSelectedKey;
      if (relatedTarget && e2.currentTarget.compareDocumentPosition(relatedTarget) & Node.DOCUMENT_POSITION_FOLLOWING)
        navigateToFirstKey((_manager_lastSelectedKey = manager.lastSelectedKey) !== null && _manager_lastSelectedKey !== void 0 ? _manager_lastSelectedKey : delegate.getLastKey());
      else
        navigateToFirstKey((_manager_firstSelectedKey = manager.firstSelectedKey) !== null && _manager_firstSelectedKey !== void 0 ? _manager_firstSelectedKey : delegate.getFirstKey());
    } else if (!isVirtualized) {
      scrollRef.current.scrollTop = scrollPos.current.top;
      scrollRef.current.scrollLeft = scrollPos.current.left;
    }
    if (!isVirtualized && manager.focusedKey != null) {
      let element = scrollRef.current.querySelector(`[data-key="${CSS.escape(manager.focusedKey.toString())}"]`);
      if (element) {
        if (!element.contains(document.activeElement))
          (0, $7215afc6de606d6b$export$de79e2c695e052f3)(element);
        let modality = (0, $507fabe10e71c6fb$export$630ff653c5ada6a9)();
        if (modality === "keyboard")
          (0, $2f04cbc44ee30ce0$export$c826860796309d1b)(element, {
            containingElement: ref.current
          });
      }
    }
  };
  let onBlur = (e2) => {
    if (!e2.currentTarget.contains(e2.relatedTarget))
      manager.setFocused(false);
  };
  const autoFocusRef = (0, import_react13.useRef)(autoFocus);
  (0, import_react13.useEffect)(() => {
    if (autoFocusRef.current) {
      let focusedKey = null;
      if (autoFocus === "first")
        focusedKey = delegate.getFirstKey();
      if (autoFocus === "last")
        focusedKey = delegate.getLastKey();
      let selectedKeys = manager.selectedKeys;
      if (selectedKeys.size) {
        for (let key of selectedKeys)
          if (manager.canSelectItem(key)) {
            focusedKey = key;
            break;
          }
      }
      manager.setFocused(true);
      manager.setFocusedKey(focusedKey);
      if (focusedKey == null && !shouldUseVirtualFocus)
        (0, $6a99195332edec8b$export$80f3e147d781571c)(ref.current);
    }
  }, []);
  let lastFocusedKey = (0, import_react13.useRef)(manager.focusedKey);
  (0, import_react13.useEffect)(() => {
    let modality = (0, $507fabe10e71c6fb$export$630ff653c5ada6a9)();
    if (manager.isFocused && manager.focusedKey != null && (scrollRef === null || scrollRef === void 0 ? void 0 : scrollRef.current)) {
      let element = scrollRef.current.querySelector(`[data-key="${CSS.escape(manager.focusedKey.toString())}"]`);
      if (element && (modality === "keyboard" || autoFocusRef.current)) {
        if (!isVirtualized)
          (0, $2f04cbc44ee30ce0$export$53a0910f038337bd)(scrollRef.current, element);
        if (modality !== "virtual")
          (0, $2f04cbc44ee30ce0$export$c826860796309d1b)(element, {
            containingElement: ref.current
          });
      }
    }
    if (manager.isFocused && manager.focusedKey == null && lastFocusedKey.current != null)
      (0, $6a99195332edec8b$export$80f3e147d781571c)(ref.current);
    lastFocusedKey.current = manager.focusedKey;
    autoFocusRef.current = false;
  }, [
    isVirtualized,
    scrollRef,
    manager.focusedKey,
    manager.isFocused,
    ref
  ]);
  let handlers = {
    onKeyDown,
    onFocus,
    onBlur,
    onMouseDown(e2) {
      if (scrollRef.current === e2.target)
        e2.preventDefault();
    }
  };
  let { typeSelectProps } = (0, $fb3050f43d946246$export$e32c88dfddc6e1d8)({
    keyboardDelegate: delegate,
    selectionManager: manager
  });
  if (!disallowTypeAhead)
    handlers = (0, $3ef42575df84b30b$export$9d1611c77c2fe928)(typeSelectProps, handlers);
  let tabIndex;
  if (!shouldUseVirtualFocus)
    tabIndex = manager.focusedKey == null ? 0 : -1;
  return {
    collectionProps: {
      ...handlers,
      tabIndex
    }
  };
}

// node_modules/@react-aria/selection/dist/useSelectableItem.mjs
var import_react14 = __toESM(require_react(), 1);
function $880e95eb8b93ba9a$export$ecf600387e221c37(options) {
  let { selectionManager: manager, key, ref, shouldSelectOnPressUp, shouldUseVirtualFocus, focus, isDisabled, onAction, allowsDifferentPressOrigin, linkBehavior = "action" } = options;
  let router = (0, $ea8dcbcb9ea1b556$export$9a302a45f65d0572)();
  let onSelect = (e2) => {
    if (e2.pointerType === "keyboard" && (0, $feb5ffebff200149$export$d3e3bd3e26688c04)(e2))
      manager.toggleSelection(key);
    else {
      if (manager.selectionMode === "none")
        return;
      if (manager.isLink(key)) {
        if (linkBehavior === "selection") {
          let itemProps2 = manager.getItemProps(key);
          router.open(ref.current, e2, itemProps2.href, itemProps2.routerOptions);
          manager.setSelectedKeys(manager.selectedKeys);
          return;
        } else if (linkBehavior === "override" || linkBehavior === "none")
          return;
      }
      if (manager.selectionMode === "single") {
        if (manager.isSelected(key) && !manager.disallowEmptySelection)
          manager.toggleSelection(key);
        else
          manager.replaceSelection(key);
      } else if (e2 && e2.shiftKey)
        manager.extendSelection(key);
      else if (manager.selectionBehavior === "toggle" || e2 && ((0, $feb5ffebff200149$export$16792effe837dba3)(e2) || e2.pointerType === "touch" || e2.pointerType === "virtual"))
        manager.toggleSelection(key);
      else
        manager.replaceSelection(key);
    }
  };
  (0, import_react14.useEffect)(() => {
    let isFocused = key === manager.focusedKey;
    if (isFocused && manager.isFocused && !shouldUseVirtualFocus) {
      if (focus)
        focus();
      else if (document.activeElement !== ref.current)
        (0, $6a99195332edec8b$export$80f3e147d781571c)(ref.current);
    }
  }, [
    ref,
    key,
    manager.focusedKey,
    manager.childFocusStrategy,
    manager.isFocused,
    shouldUseVirtualFocus
  ]);
  isDisabled = isDisabled || manager.isDisabled(key);
  let itemProps = {};
  if (!shouldUseVirtualFocus && !isDisabled)
    itemProps = {
      tabIndex: key === manager.focusedKey ? 0 : -1,
      onFocus(e2) {
        if (e2.target === ref.current)
          manager.setFocusedKey(key);
      }
    };
  else if (isDisabled)
    itemProps.onMouseDown = (e2) => {
      e2.preventDefault();
    };
  let isLinkOverride = manager.isLink(key) && linkBehavior === "override";
  let hasLinkAction = manager.isLink(key) && linkBehavior !== "selection" && linkBehavior !== "none";
  let allowsSelection = !isDisabled && manager.canSelectItem(key) && !isLinkOverride;
  let allowsActions = (onAction || hasLinkAction) && !isDisabled;
  let hasPrimaryAction = allowsActions && (manager.selectionBehavior === "replace" ? !allowsSelection : !allowsSelection || manager.isEmpty);
  let hasSecondaryAction = allowsActions && allowsSelection && manager.selectionBehavior === "replace";
  let hasAction = hasPrimaryAction || hasSecondaryAction;
  let modality = (0, import_react14.useRef)(null);
  let longPressEnabled = hasAction && allowsSelection;
  let longPressEnabledOnPressStart = (0, import_react14.useRef)(false);
  let hadPrimaryActionOnPressStart = (0, import_react14.useRef)(false);
  let performAction = (e2) => {
    if (onAction)
      onAction();
    if (hasLinkAction) {
      let itemProps2 = manager.getItemProps(key);
      router.open(ref.current, e2, itemProps2.href, itemProps2.routerOptions);
    }
  };
  let itemPressProps = {};
  if (shouldSelectOnPressUp) {
    itemPressProps.onPressStart = (e2) => {
      modality.current = e2.pointerType;
      longPressEnabledOnPressStart.current = longPressEnabled;
      if (e2.pointerType === "keyboard" && (!hasAction || $880e95eb8b93ba9a$var$isSelectionKey()))
        onSelect(e2);
    };
    if (!allowsDifferentPressOrigin)
      itemPressProps.onPress = (e2) => {
        if (hasPrimaryAction || hasSecondaryAction && e2.pointerType !== "mouse") {
          if (e2.pointerType === "keyboard" && !$880e95eb8b93ba9a$var$isActionKey())
            return;
          performAction(e2);
        } else if (e2.pointerType !== "keyboard" && allowsSelection)
          onSelect(e2);
      };
    else {
      itemPressProps.onPressUp = hasPrimaryAction ? null : (e2) => {
        if (e2.pointerType !== "keyboard" && allowsSelection)
          onSelect(e2);
      };
      itemPressProps.onPress = hasPrimaryAction ? performAction : null;
    }
  } else {
    itemPressProps.onPressStart = (e2) => {
      modality.current = e2.pointerType;
      longPressEnabledOnPressStart.current = longPressEnabled;
      hadPrimaryActionOnPressStart.current = hasPrimaryAction;
      if (allowsSelection && (e2.pointerType === "mouse" && !hasPrimaryAction || e2.pointerType === "keyboard" && (!allowsActions || $880e95eb8b93ba9a$var$isSelectionKey())))
        onSelect(e2);
    };
    itemPressProps.onPress = (e2) => {
      if (e2.pointerType === "touch" || e2.pointerType === "pen" || e2.pointerType === "virtual" || e2.pointerType === "keyboard" && hasAction && $880e95eb8b93ba9a$var$isActionKey() || e2.pointerType === "mouse" && hadPrimaryActionOnPressStart.current) {
        if (hasAction)
          performAction(e2);
        else if (allowsSelection)
          onSelect(e2);
      }
    };
  }
  itemProps["data-key"] = key;
  itemPressProps.preventFocusOnPress = shouldUseVirtualFocus;
  let { pressProps, isPressed } = (0, $f6c31cce2adf654f$export$45712eceda6fad21)(itemPressProps);
  let onDoubleClick = hasSecondaryAction ? (e2) => {
    if (modality.current === "mouse") {
      e2.stopPropagation();
      e2.preventDefault();
      performAction(e2);
    }
  } : void 0;
  let { longPressProps } = (0, $8a26561d2877236e$export$c24ed0104d07eab9)({
    isDisabled: !longPressEnabled,
    onLongPress(e2) {
      if (e2.pointerType === "touch") {
        onSelect(e2);
        manager.setSelectionBehavior("toggle");
      }
    }
  });
  let onDragStartCapture = (e2) => {
    if (modality.current === "touch" && longPressEnabledOnPressStart.current)
      e2.preventDefault();
  };
  let onClick = manager.isLink(key) ? (e2) => {
    if (!(0, $ea8dcbcb9ea1b556$export$95185d699e05d4d7).isOpening)
      e2.preventDefault();
  } : void 0;
  return {
    itemProps: (0, $3ef42575df84b30b$export$9d1611c77c2fe928)(itemProps, allowsSelection || hasPrimaryAction ? pressProps : {}, longPressEnabled ? longPressProps : {}, {
      onDoubleClick,
      onDragStartCapture,
      onClick
    }),
    isPressed,
    isSelected: manager.isSelected(key),
    isFocused: manager.isFocused && manager.focusedKey === key,
    isDisabled,
    allowsSelection,
    hasAction
  };
}
function $880e95eb8b93ba9a$var$isActionKey() {
  let event = window.event;
  return (event === null || event === void 0 ? void 0 : event.key) === "Enter";
}
function $880e95eb8b93ba9a$var$isSelectionKey() {
  let event = window.event;
  return (event === null || event === void 0 ? void 0 : event.key) === " " || (event === null || event === void 0 ? void 0 : event.code) === "Space";
}

// node_modules/@react-stately/selection/dist/Selection.mjs
var $e40ea825a81a3709$export$52baac22726c72bf = class extends Set {
  constructor(keys, anchorKey, currentKey) {
    super(keys);
    if (keys instanceof $e40ea825a81a3709$export$52baac22726c72bf) {
      this.anchorKey = anchorKey !== null && anchorKey !== void 0 ? anchorKey : keys.anchorKey;
      this.currentKey = currentKey !== null && currentKey !== void 0 ? currentKey : keys.currentKey;
    } else {
      this.anchorKey = anchorKey !== null && anchorKey !== void 0 ? anchorKey : null;
      this.currentKey = currentKey !== null && currentKey !== void 0 ? currentKey : null;
    }
  }
};

// node_modules/@react-stately/selection/node_modules/@react-stately/utils/dist/useControlledState.mjs
var import_react15 = __toESM(require_react(), 1);
function $458b0a5536c1a7cf$export$40bfa8c7b08327152(value, defaultValue, onChange) {
  let [stateValue, setStateValue] = (0, import_react15.useState)(value || defaultValue);
  let isControlledRef = (0, import_react15.useRef)(value !== void 0);
  let isControlled = value !== void 0;
  (0, import_react15.useEffect)(() => {
    let wasControlled = isControlledRef.current;
    if (wasControlled !== isControlled)
      console.warn(`WARN: A component changed from ${wasControlled ? "controlled" : "uncontrolled"} to ${isControlled ? "controlled" : "uncontrolled"}.`);
    isControlledRef.current = isControlled;
  }, [
    isControlled
  ]);
  let currentValue = isControlled ? value : stateValue;
  let setValue = (0, import_react15.useCallback)((value2, ...args) => {
    let onChangeCaller = (value3, ...onChangeArgs) => {
      if (onChange) {
        if (!Object.is(currentValue, value3))
          onChange(value3, ...onChangeArgs);
      }
      if (!isControlled)
        currentValue = value3;
    };
    if (typeof value2 === "function") {
      console.warn("We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320");
      let updateFunction = (oldValue, ...functionArgs) => {
        let interceptedValue = value2(isControlled ? currentValue : oldValue, ...functionArgs);
        onChangeCaller(interceptedValue, ...args);
        if (!isControlled)
          return interceptedValue;
        return oldValue;
      };
      setStateValue(updateFunction);
    } else {
      if (!isControlled)
        setStateValue(value2);
      onChangeCaller(value2, ...args);
    }
  }, [
    isControlled,
    currentValue,
    onChange
  ]);
  return [
    currentValue,
    setValue
  ];
}

// node_modules/@react-stately/selection/dist/useMultipleSelectionState.mjs
var import_react16 = __toESM(require_react(), 1);
function $7af3f5b51489e0b5$var$equalSets(setA, setB) {
  if (setA.size !== setB.size)
    return false;
  for (let item of setA) {
    if (!setB.has(item))
      return false;
  }
  return true;
}
function $7af3f5b51489e0b5$export$253fe78d46329472(props) {
  let { selectionMode = "none", disallowEmptySelection = false, allowDuplicateSelectionEvents, selectionBehavior: selectionBehaviorProp = "toggle", disabledBehavior = "all" } = props;
  let isFocusedRef = (0, import_react16.useRef)(false);
  let [, setFocused] = (0, import_react16.useState)(false);
  let focusedKeyRef = (0, import_react16.useRef)(null);
  let childFocusStrategyRef = (0, import_react16.useRef)(null);
  let [, setFocusedKey] = (0, import_react16.useState)(null);
  let selectedKeysProp = (0, import_react16.useMemo)(() => $7af3f5b51489e0b5$var$convertSelection(props.selectedKeys), [
    props.selectedKeys
  ]);
  let defaultSelectedKeys = (0, import_react16.useMemo)(() => $7af3f5b51489e0b5$var$convertSelection(props.defaultSelectedKeys, new (0, $e40ea825a81a3709$export$52baac22726c72bf)()), [
    props.defaultSelectedKeys
  ]);
  let [selectedKeys, setSelectedKeys] = (0, $458b0a5536c1a7cf$export$40bfa8c7b08327152)(selectedKeysProp, defaultSelectedKeys, props.onSelectionChange);
  let disabledKeysProp = (0, import_react16.useMemo)(() => props.disabledKeys ? new Set(props.disabledKeys) : /* @__PURE__ */ new Set(), [
    props.disabledKeys
  ]);
  let [selectionBehavior, setSelectionBehavior] = (0, import_react16.useState)(selectionBehaviorProp);
  if (selectionBehaviorProp === "replace" && selectionBehavior === "toggle" && typeof selectedKeys === "object" && selectedKeys.size === 0)
    setSelectionBehavior("replace");
  let lastSelectionBehavior = (0, import_react16.useRef)(selectionBehaviorProp);
  (0, import_react16.useEffect)(() => {
    if (selectionBehaviorProp !== lastSelectionBehavior.current) {
      setSelectionBehavior(selectionBehaviorProp);
      lastSelectionBehavior.current = selectionBehaviorProp;
    }
  }, [
    selectionBehaviorProp
  ]);
  return {
    selectionMode,
    disallowEmptySelection,
    selectionBehavior,
    setSelectionBehavior,
    get isFocused() {
      return isFocusedRef.current;
    },
    setFocused(f) {
      isFocusedRef.current = f;
      setFocused(f);
    },
    get focusedKey() {
      return focusedKeyRef.current;
    },
    get childFocusStrategy() {
      return childFocusStrategyRef.current;
    },
    setFocusedKey(k, childFocusStrategy = "first") {
      focusedKeyRef.current = k;
      childFocusStrategyRef.current = childFocusStrategy;
      setFocusedKey(k);
    },
    selectedKeys,
    setSelectedKeys(keys) {
      if (allowDuplicateSelectionEvents || !$7af3f5b51489e0b5$var$equalSets(keys, selectedKeys))
        setSelectedKeys(keys);
    },
    disabledKeys: disabledKeysProp,
    disabledBehavior
  };
}
function $7af3f5b51489e0b5$var$convertSelection(selection, defaultValue) {
  if (!selection)
    return defaultValue;
  return selection === "all" ? "all" : new (0, $e40ea825a81a3709$export$52baac22726c72bf)(selection);
}

// node_modules/@react-stately/selection/node_modules/@react-stately/collections/dist/getChildNodes.mjs
function $c5a24bc478652b5f$export$1005530eda016c13(node, collection) {
  if (typeof collection.getChildren === "function")
    return collection.getChildren(node.key);
  return node.childNodes;
}
function $c5a24bc478652b5f$export$fbdeaa6a76694f71(iterable) {
  return $c5a24bc478652b5f$export$5f3398f8733f90e2(iterable, 0);
}
function $c5a24bc478652b5f$export$5f3398f8733f90e2(iterable, index) {
  if (index < 0)
    return void 0;
  let i2 = 0;
  for (let item of iterable) {
    if (i2 === index)
      return item;
    i2++;
  }
}
function $c5a24bc478652b5f$export$8c434b3a7a4dad6(collection, a2, b) {
  if (a2.parentKey === b.parentKey)
    return a2.index - b.index;
  let aAncestors = [
    ...$c5a24bc478652b5f$var$getAncestors(collection, a2),
    a2
  ];
  let bAncestors = [
    ...$c5a24bc478652b5f$var$getAncestors(collection, b),
    b
  ];
  let firstNonMatchingAncestor = aAncestors.slice(0, bAncestors.length).findIndex((a3, i2) => a3 !== bAncestors[i2]);
  if (firstNonMatchingAncestor !== -1) {
    a2 = aAncestors[firstNonMatchingAncestor];
    b = bAncestors[firstNonMatchingAncestor];
    return a2.index - b.index;
  }
  if (aAncestors.findIndex((node) => node === b) >= 0)
    return 1;
  else if (bAncestors.findIndex((node) => node === a2) >= 0)
    return -1;
  return -1;
}
function $c5a24bc478652b5f$var$getAncestors(collection, node) {
  let parents = [];
  let currNode = node;
  while ((currNode === null || currNode === void 0 ? void 0 : currNode.parentKey) != null) {
    currNode = collection.getItem(currNode.parentKey);
    if (currNode)
      parents.unshift(currNode);
  }
  return parents;
}

// node_modules/@react-stately/selection/dist/SelectionManager.mjs
var $d496c0a20b6e58ec$export$6c8a5aaad13c9852 = class {
  /**
  * The type of selection that is allowed in the collection.
  */
  get selectionMode() {
    return this.state.selectionMode;
  }
  /**
  * Whether the collection allows empty selection.
  */
  get disallowEmptySelection() {
    return this.state.disallowEmptySelection;
  }
  /**
  * The selection behavior for the collection.
  */
  get selectionBehavior() {
    return this.state.selectionBehavior;
  }
  /**
  * Sets the selection behavior for the collection.
  */
  setSelectionBehavior(selectionBehavior) {
    this.state.setSelectionBehavior(selectionBehavior);
  }
  /**
  * Whether the collection is currently focused.
  */
  get isFocused() {
    return this.state.isFocused;
  }
  /**
  * Sets whether the collection is focused.
  */
  setFocused(isFocused) {
    this.state.setFocused(isFocused);
  }
  /**
  * The current focused key in the collection.
  */
  get focusedKey() {
    return this.state.focusedKey;
  }
  /** Whether the first or last child of the focused key should receive focus. */
  get childFocusStrategy() {
    return this.state.childFocusStrategy;
  }
  /**
  * Sets the focused key.
  */
  setFocusedKey(key, childFocusStrategy) {
    if (key == null || this.collection.getItem(key))
      this.state.setFocusedKey(key, childFocusStrategy);
  }
  /**
  * The currently selected keys in the collection.
  */
  get selectedKeys() {
    return this.state.selectedKeys === "all" ? new Set(this.getSelectAllKeys()) : this.state.selectedKeys;
  }
  /**
  * The raw selection value for the collection.
  * Either 'all' for select all, or a set of keys.
  */
  get rawSelection() {
    return this.state.selectedKeys;
  }
  /**
  * Returns whether a key is selected.
  */
  isSelected(key) {
    if (this.state.selectionMode === "none")
      return false;
    let mappedKey = this.getKey(key);
    if (mappedKey == null)
      return false;
    return this.state.selectedKeys === "all" ? this.canSelectItem(mappedKey) : this.state.selectedKeys.has(mappedKey);
  }
  /**
  * Whether the selection is empty.
  */
  get isEmpty() {
    return this.state.selectedKeys !== "all" && this.state.selectedKeys.size === 0;
  }
  /**
  * Whether all items in the collection are selected.
  */
  get isSelectAll() {
    if (this.isEmpty)
      return false;
    if (this.state.selectedKeys === "all")
      return true;
    if (this._isSelectAll != null)
      return this._isSelectAll;
    let allKeys = this.getSelectAllKeys();
    let selectedKeys = this.state.selectedKeys;
    this._isSelectAll = allKeys.every((k) => selectedKeys.has(k));
    return this._isSelectAll;
  }
  get firstSelectedKey() {
    let first = null;
    for (let key of this.state.selectedKeys) {
      let item = this.collection.getItem(key);
      if (!first || item && (0, $c5a24bc478652b5f$export$8c434b3a7a4dad6)(this.collection, item, first) < 0)
        first = item;
    }
    var _first_key;
    return (_first_key = first === null || first === void 0 ? void 0 : first.key) !== null && _first_key !== void 0 ? _first_key : null;
  }
  get lastSelectedKey() {
    let last = null;
    for (let key of this.state.selectedKeys) {
      let item = this.collection.getItem(key);
      if (!last || item && (0, $c5a24bc478652b5f$export$8c434b3a7a4dad6)(this.collection, item, last) > 0)
        last = item;
    }
    var _last_key;
    return (_last_key = last === null || last === void 0 ? void 0 : last.key) !== null && _last_key !== void 0 ? _last_key : null;
  }
  get disabledKeys() {
    return this.state.disabledKeys;
  }
  get disabledBehavior() {
    return this.state.disabledBehavior;
  }
  /**
  * Extends the selection to the given key.
  */
  extendSelection(toKey) {
    if (this.selectionMode === "none")
      return;
    if (this.selectionMode === "single") {
      this.replaceSelection(toKey);
      return;
    }
    let mappedToKey = this.getKey(toKey);
    if (mappedToKey == null)
      return;
    let selection;
    if (this.state.selectedKeys === "all")
      selection = new (0, $e40ea825a81a3709$export$52baac22726c72bf)([
        mappedToKey
      ], mappedToKey, mappedToKey);
    else {
      let selectedKeys = this.state.selectedKeys;
      var _selectedKeys_anchorKey;
      let anchorKey = (_selectedKeys_anchorKey = selectedKeys.anchorKey) !== null && _selectedKeys_anchorKey !== void 0 ? _selectedKeys_anchorKey : mappedToKey;
      selection = new (0, $e40ea825a81a3709$export$52baac22726c72bf)(selectedKeys, anchorKey, mappedToKey);
      var _selectedKeys_currentKey;
      for (let key of this.getKeyRange(anchorKey, (_selectedKeys_currentKey = selectedKeys.currentKey) !== null && _selectedKeys_currentKey !== void 0 ? _selectedKeys_currentKey : mappedToKey))
        selection.delete(key);
      for (let key of this.getKeyRange(mappedToKey, anchorKey))
        if (this.canSelectItem(key))
          selection.add(key);
    }
    this.state.setSelectedKeys(selection);
  }
  getKeyRange(from, to) {
    let fromItem = this.collection.getItem(from);
    let toItem = this.collection.getItem(to);
    if (fromItem && toItem) {
      if ((0, $c5a24bc478652b5f$export$8c434b3a7a4dad6)(this.collection, fromItem, toItem) <= 0)
        return this.getKeyRangeInternal(from, to);
      return this.getKeyRangeInternal(to, from);
    }
    return [];
  }
  getKeyRangeInternal(from, to) {
    var _this_layoutDelegate;
    if ((_this_layoutDelegate = this.layoutDelegate) === null || _this_layoutDelegate === void 0 ? void 0 : _this_layoutDelegate.getKeyRange)
      return this.layoutDelegate.getKeyRange(from, to);
    let keys = [];
    let key = from;
    while (key != null) {
      let item = this.collection.getItem(key);
      if (item && (item.type === "item" || item.type === "cell" && this.allowsCellSelection))
        keys.push(key);
      if (key === to)
        return keys;
      key = this.collection.getKeyAfter(key);
    }
    return [];
  }
  getKey(key) {
    let item = this.collection.getItem(key);
    if (!item)
      return key;
    if (item.type === "cell" && this.allowsCellSelection)
      return key;
    while (item && item.type !== "item" && item.parentKey != null)
      item = this.collection.getItem(item.parentKey);
    if (!item || item.type !== "item")
      return null;
    return item.key;
  }
  /**
  * Toggles whether the given key is selected.
  */
  toggleSelection(key) {
    if (this.selectionMode === "none")
      return;
    if (this.selectionMode === "single" && !this.isSelected(key)) {
      this.replaceSelection(key);
      return;
    }
    let mappedKey = this.getKey(key);
    if (mappedKey == null)
      return;
    let keys = new (0, $e40ea825a81a3709$export$52baac22726c72bf)(this.state.selectedKeys === "all" ? this.getSelectAllKeys() : this.state.selectedKeys);
    if (keys.has(mappedKey))
      keys.delete(mappedKey);
    else if (this.canSelectItem(mappedKey)) {
      keys.add(mappedKey);
      keys.anchorKey = mappedKey;
      keys.currentKey = mappedKey;
    }
    if (this.disallowEmptySelection && keys.size === 0)
      return;
    this.state.setSelectedKeys(keys);
  }
  /**
  * Replaces the selection with only the given key.
  */
  replaceSelection(key) {
    if (this.selectionMode === "none")
      return;
    let mappedKey = this.getKey(key);
    if (mappedKey == null)
      return;
    let selection = this.canSelectItem(mappedKey) ? new (0, $e40ea825a81a3709$export$52baac22726c72bf)([
      mappedKey
    ], mappedKey, mappedKey) : new (0, $e40ea825a81a3709$export$52baac22726c72bf)();
    this.state.setSelectedKeys(selection);
  }
  /**
  * Replaces the selection with the given keys.
  */
  setSelectedKeys(keys) {
    if (this.selectionMode === "none")
      return;
    let selection = new (0, $e40ea825a81a3709$export$52baac22726c72bf)();
    for (let key of keys) {
      let mappedKey = this.getKey(key);
      if (mappedKey != null) {
        selection.add(mappedKey);
        if (this.selectionMode === "single")
          break;
      }
    }
    this.state.setSelectedKeys(selection);
  }
  getSelectAllKeys() {
    let keys = [];
    let addKeys = (key) => {
      while (key != null) {
        if (this.canSelectItem(key)) {
          var _getFirstItem;
          let item = this.collection.getItem(key);
          if ((item === null || item === void 0 ? void 0 : item.type) === "item")
            keys.push(key);
          var _getFirstItem_key;
          if ((item === null || item === void 0 ? void 0 : item.hasChildNodes) && (this.allowsCellSelection || item.type !== "item"))
            addKeys((_getFirstItem_key = (_getFirstItem = (0, $c5a24bc478652b5f$export$fbdeaa6a76694f71)((0, $c5a24bc478652b5f$export$1005530eda016c13)(item, this.collection))) === null || _getFirstItem === void 0 ? void 0 : _getFirstItem.key) !== null && _getFirstItem_key !== void 0 ? _getFirstItem_key : null);
        }
        key = this.collection.getKeyAfter(key);
      }
    };
    addKeys(this.collection.getFirstKey());
    return keys;
  }
  /**
  * Selects all items in the collection.
  */
  selectAll() {
    if (!this.isSelectAll && this.selectionMode === "multiple")
      this.state.setSelectedKeys("all");
  }
  /**
  * Removes all keys from the selection.
  */
  clearSelection() {
    if (!this.disallowEmptySelection && (this.state.selectedKeys === "all" || this.state.selectedKeys.size > 0))
      this.state.setSelectedKeys(new (0, $e40ea825a81a3709$export$52baac22726c72bf)());
  }
  /**
  * Toggles between select all and an empty selection.
  */
  toggleSelectAll() {
    if (this.isSelectAll)
      this.clearSelection();
    else
      this.selectAll();
  }
  select(key, e2) {
    if (this.selectionMode === "none")
      return;
    if (this.selectionMode === "single") {
      if (this.isSelected(key) && !this.disallowEmptySelection)
        this.toggleSelection(key);
      else
        this.replaceSelection(key);
    } else if (this.selectionBehavior === "toggle" || e2 && (e2.pointerType === "touch" || e2.pointerType === "virtual"))
      this.toggleSelection(key);
    else
      this.replaceSelection(key);
  }
  /**
  * Returns whether the current selection is equal to the given selection.
  */
  isSelectionEqual(selection) {
    if (selection === this.state.selectedKeys)
      return true;
    let selectedKeys = this.selectedKeys;
    if (selection.size !== selectedKeys.size)
      return false;
    for (let key of selection) {
      if (!selectedKeys.has(key))
        return false;
    }
    for (let key of selectedKeys) {
      if (!selection.has(key))
        return false;
    }
    return true;
  }
  canSelectItem(key) {
    var _item_props;
    if (this.state.selectionMode === "none" || this.state.disabledKeys.has(key))
      return false;
    let item = this.collection.getItem(key);
    if (!item || (item === null || item === void 0 ? void 0 : (_item_props = item.props) === null || _item_props === void 0 ? void 0 : _item_props.isDisabled) || item.type === "cell" && !this.allowsCellSelection)
      return false;
    return true;
  }
  isDisabled(key) {
    var _this_collection_getItem_props, _this_collection_getItem;
    return this.state.disabledBehavior === "all" && (this.state.disabledKeys.has(key) || !!((_this_collection_getItem = this.collection.getItem(key)) === null || _this_collection_getItem === void 0 ? void 0 : (_this_collection_getItem_props = _this_collection_getItem.props) === null || _this_collection_getItem_props === void 0 ? void 0 : _this_collection_getItem_props.isDisabled));
  }
  isLink(key) {
    var _this_collection_getItem_props, _this_collection_getItem;
    return !!((_this_collection_getItem = this.collection.getItem(key)) === null || _this_collection_getItem === void 0 ? void 0 : (_this_collection_getItem_props = _this_collection_getItem.props) === null || _this_collection_getItem_props === void 0 ? void 0 : _this_collection_getItem_props.href);
  }
  getItemProps(key) {
    var _this_collection_getItem;
    return (_this_collection_getItem = this.collection.getItem(key)) === null || _this_collection_getItem === void 0 ? void 0 : _this_collection_getItem.props;
  }
  constructor(collection, state, options) {
    this.collection = collection;
    this.state = state;
    var _options_allowsCellSelection;
    this.allowsCellSelection = (_options_allowsCellSelection = options === null || options === void 0 ? void 0 : options.allowsCellSelection) !== null && _options_allowsCellSelection !== void 0 ? _options_allowsCellSelection : false;
    this._isSelectAll = null;
    this.layoutDelegate = (options === null || options === void 0 ? void 0 : options.layoutDelegate) || null;
  }
};

// node_modules/@react-stately/collections/dist/Item.mjs
var import_react17 = __toESM(require_react(), 1);
function $c1d7fb2ec91bae71$var$Item(props) {
  return null;
}
$c1d7fb2ec91bae71$var$Item.getCollectionNode = function* getCollectionNode(props, context) {
  let { childItems, title, children } = props;
  let rendered = props.title || props.children;
  let textValue = props.textValue || (typeof rendered === "string" ? rendered : "") || props["aria-label"] || "";
  if (!textValue && !(context === null || context === void 0 ? void 0 : context.suppressTextValueWarning))
    console.warn("<Item> with non-plain text contents is unsupported by type to select for accessibility. Please add a `textValue` prop.");
  yield {
    type: "item",
    props,
    rendered,
    textValue,
    "aria-label": props["aria-label"],
    hasChildNodes: $c1d7fb2ec91bae71$var$hasChildItems(props),
    *childNodes() {
      if (childItems)
        for (let child of childItems)
          yield {
            type: "item",
            value: child
          };
      else if (title) {
        let items = [];
        (0, import_react17.default).Children.forEach(children, (child) => {
          items.push({
            type: "item",
            element: child
          });
        });
        yield* items;
      }
    }
  };
};
function $c1d7fb2ec91bae71$var$hasChildItems(props) {
  if (props.hasChildItems != null)
    return props.hasChildItems;
  if (props.childItems)
    return true;
  if (props.title && (0, import_react17.default).Children.count(props.children) > 0)
    return true;
  return false;
}
var $c1d7fb2ec91bae71$export$6d08773d2e66f8f2 = $c1d7fb2ec91bae71$var$Item;

// node_modules/@react-stately/collections/dist/CollectionBuilder.mjs
var import_react18 = __toESM(require_react(), 1);
var $eb2240fc39a57fa5$export$bf788dd355e3a401 = class {
  build(props, context) {
    this.context = context;
    return $eb2240fc39a57fa5$var$iterable(() => this.iterateCollection(props));
  }
  *iterateCollection(props) {
    let { children, items } = props;
    if (typeof children === "function") {
      if (!items)
        throw new Error("props.children was a function but props.items is missing");
      for (let item of props.items)
        yield* this.getFullNode({
          value: item
        }, {
          renderer: children
        });
    } else {
      let items2 = [];
      (0, import_react18.default).Children.forEach(children, (child) => {
        items2.push(child);
      });
      let index = 0;
      for (let item of items2) {
        let nodes = this.getFullNode({
          element: item,
          index
        }, {});
        for (let node of nodes) {
          index++;
          yield node;
        }
      }
    }
  }
  getKey(item, partialNode, state, parentKey) {
    if (item.key != null)
      return item.key;
    if (partialNode.type === "cell" && partialNode.key != null)
      return `${parentKey}${partialNode.key}`;
    let v = partialNode.value;
    if (v != null) {
      var _v_key;
      let key = (_v_key = v.key) !== null && _v_key !== void 0 ? _v_key : v.id;
      if (key == null)
        throw new Error("No key found for item");
      return key;
    }
    return parentKey ? `${parentKey}.${partialNode.index}` : `$.${partialNode.index}`;
  }
  getChildState(state, partialNode) {
    return {
      renderer: partialNode.renderer || state.renderer
    };
  }
  *getFullNode(partialNode, state, parentKey, parentNode) {
    let element = partialNode.element;
    if (!element && partialNode.value && state && state.renderer) {
      let cached = this.cache.get(partialNode.value);
      if (cached && (!cached.shouldInvalidate || !cached.shouldInvalidate(this.context))) {
        cached.index = partialNode.index;
        cached.parentKey = parentNode ? parentNode.key : null;
        yield cached;
        return;
      }
      element = state.renderer(partialNode.value);
    }
    if ((0, import_react18.default).isValidElement(element)) {
      let type = element.type;
      if (typeof type !== "function" && typeof type.getCollectionNode !== "function") {
        let name = typeof element.type === "function" ? element.type.name : element.type;
        throw new Error(`Unknown element <${name}> in collection.`);
      }
      let childNodes = type.getCollectionNode(element.props, this.context);
      let index = partialNode.index;
      let result = childNodes.next();
      while (!result.done && result.value) {
        let childNode = result.value;
        partialNode.index = index;
        let nodeKey = childNode.key;
        if (!nodeKey)
          nodeKey = childNode.element ? null : this.getKey(element, partialNode, state, parentKey);
        let nodes = this.getFullNode({
          ...childNode,
          key: nodeKey,
          index,
          wrapper: $eb2240fc39a57fa5$var$compose(partialNode.wrapper, childNode.wrapper)
        }, this.getChildState(state, childNode), parentKey ? `${parentKey}${element.key}` : element.key, parentNode);
        let children = [
          ...nodes
        ];
        for (let node2 of children) {
          node2.value = childNode.value || partialNode.value;
          if (node2.value)
            this.cache.set(node2.value, node2);
          if (partialNode.type && node2.type !== partialNode.type)
            throw new Error(`Unsupported type <${$eb2240fc39a57fa5$var$capitalize(node2.type)}> in <${$eb2240fc39a57fa5$var$capitalize(parentNode.type)}>. Only <${$eb2240fc39a57fa5$var$capitalize(partialNode.type)}> is supported.`);
          index++;
          yield node2;
        }
        result = childNodes.next(children);
      }
      return;
    }
    if (partialNode.key == null)
      return;
    let builder = this;
    let node = {
      type: partialNode.type,
      props: partialNode.props,
      key: partialNode.key,
      parentKey: parentNode ? parentNode.key : null,
      value: partialNode.value,
      level: parentNode ? parentNode.level + 1 : 0,
      index: partialNode.index,
      rendered: partialNode.rendered,
      textValue: partialNode.textValue,
      "aria-label": partialNode["aria-label"],
      wrapper: partialNode.wrapper,
      shouldInvalidate: partialNode.shouldInvalidate,
      hasChildNodes: partialNode.hasChildNodes,
      childNodes: $eb2240fc39a57fa5$var$iterable(function* () {
        if (!partialNode.hasChildNodes)
          return;
        let index = 0;
        for (let child of partialNode.childNodes()) {
          if (child.key != null)
            child.key = `${node.key}${child.key}`;
          child.index = index;
          let nodes = builder.getFullNode(child, builder.getChildState(state, child), node.key, node);
          for (let node2 of nodes) {
            index++;
            yield node2;
          }
        }
      })
    };
    yield node;
  }
  constructor() {
    this.cache = /* @__PURE__ */ new WeakMap();
  }
};
function $eb2240fc39a57fa5$var$iterable(iterator) {
  let cache = [];
  let iterable = null;
  return {
    *[Symbol.iterator]() {
      for (let item of cache)
        yield item;
      if (!iterable)
        iterable = iterator();
      for (let item of iterable) {
        cache.push(item);
        yield item;
      }
    }
  };
}
function $eb2240fc39a57fa5$var$compose(outer, inner) {
  if (outer && inner)
    return (element) => outer(inner(element));
  if (outer)
    return outer;
  if (inner)
    return inner;
}
function $eb2240fc39a57fa5$var$capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}

// node_modules/@react-stately/collections/dist/useCollection.mjs
var import_react19 = __toESM(require_react(), 1);
function $7613b1592d41b092$export$6cd28814d92fa9c9(props, factory, context) {
  let builder = (0, import_react19.useMemo)(() => new (0, $eb2240fc39a57fa5$export$bf788dd355e3a401)(), []);
  let { children, items, collection } = props;
  let result = (0, import_react19.useMemo)(() => {
    if (collection)
      return collection;
    let nodes = builder.build({
      children,
      items
    }, context);
    return factory(nodes);
  }, [
    builder,
    children,
    items,
    collection,
    context,
    factory
  ]);
  return result;
}

// node_modules/@nextui-org/aria-utils/dist/chunk-3MION23H.mjs
"use client";

// node_modules/@nextui-org/aria-utils/dist/index.mjs
"use client";

// node_modules/compute-scroll-into-view/dist/index.js
var t = (t3) => "object" == typeof t3 && null != t3 && 1 === t3.nodeType;
var e = (t3, e2) => (!e2 || "hidden" !== t3) && ("visible" !== t3 && "clip" !== t3);
var n = (t3, n2) => {
  if (t3.clientHeight < t3.scrollHeight || t3.clientWidth < t3.scrollWidth) {
    const o3 = getComputedStyle(t3, null);
    return e(o3.overflowY, n2) || e(o3.overflowX, n2) || ((t4) => {
      const e2 = ((t5) => {
        if (!t5.ownerDocument || !t5.ownerDocument.defaultView)
          return null;
        try {
          return t5.ownerDocument.defaultView.frameElement;
        } catch (t6) {
          return null;
        }
      })(t4);
      return !!e2 && (e2.clientHeight < t4.scrollHeight || e2.clientWidth < t4.scrollWidth);
    })(t3);
  }
  return false;
};
var o = (t3, e2, n2, o3, l3, r2, i2, s) => r2 < t3 && i2 > e2 || r2 > t3 && i2 < e2 ? 0 : r2 <= t3 && s <= n2 || i2 >= e2 && s >= n2 ? r2 - t3 - o3 : i2 > e2 && s < n2 || r2 < t3 && s > n2 ? i2 - e2 + l3 : 0;
var l2 = (t3) => {
  const e2 = t3.parentElement;
  return null == e2 ? t3.getRootNode().host || null : e2;
};
var r = (e2, r2) => {
  var i2, s, d, h;
  if ("undefined" == typeof document)
    return [];
  const { scrollMode: c, block: f, inline: u2, boundary: a2, skipOverflowHiddenElements: g2 } = r2, p2 = "function" == typeof a2 ? a2 : (t3) => t3 !== a2;
  if (!t(e2))
    throw new TypeError("Invalid target");
  const m2 = document.scrollingElement || document.documentElement, w2 = [];
  let W = e2;
  for (; t(W) && p2(W); ) {
    if (W = l2(W), W === m2) {
      w2.push(W);
      break;
    }
    null != W && W === document.body && n(W) && !n(document.documentElement) || null != W && n(W, g2) && w2.push(W);
  }
  const b = null != (s = null == (i2 = window.visualViewport) ? void 0 : i2.width) ? s : innerWidth, H = null != (h = null == (d = window.visualViewport) ? void 0 : d.height) ? h : innerHeight, { scrollX: y2, scrollY: M2 } = window, { height: v, width: E, top: x2, right: C, bottom: I, left: R } = e2.getBoundingClientRect(), { top: T, right: B, bottom: F2, left: V } = ((t3) => {
    const e3 = window.getComputedStyle(t3);
    return { top: parseFloat(e3.scrollMarginTop) || 0, right: parseFloat(e3.scrollMarginRight) || 0, bottom: parseFloat(e3.scrollMarginBottom) || 0, left: parseFloat(e3.scrollMarginLeft) || 0 };
  })(e2);
  let k = "start" === f || "nearest" === f ? x2 - T : "end" === f ? I + F2 : x2 + v / 2 - T + F2, D = "center" === u2 ? R + E / 2 - V + B : "end" === u2 ? C + B : R - V;
  const L = [];
  for (let t3 = 0; t3 < w2.length; t3++) {
    const e3 = w2[t3], { height: n2, width: l3, top: r3, right: i3, bottom: s2, left: d2 } = e3.getBoundingClientRect();
    if ("if-needed" === c && x2 >= 0 && R >= 0 && I <= H && C <= b && x2 >= r3 && I <= s2 && R >= d2 && C <= i3)
      return L;
    const h2 = getComputedStyle(e3), a3 = parseInt(h2.borderLeftWidth, 10), g3 = parseInt(h2.borderTopWidth, 10), p3 = parseInt(h2.borderRightWidth, 10), W2 = parseInt(h2.borderBottomWidth, 10);
    let T2 = 0, B2 = 0;
    const F3 = "offsetWidth" in e3 ? e3.offsetWidth - e3.clientWidth - a3 - p3 : 0, V2 = "offsetHeight" in e3 ? e3.offsetHeight - e3.clientHeight - g3 - W2 : 0, S = "offsetWidth" in e3 ? 0 === e3.offsetWidth ? 0 : l3 / e3.offsetWidth : 0, X = "offsetHeight" in e3 ? 0 === e3.offsetHeight ? 0 : n2 / e3.offsetHeight : 0;
    if (m2 === e3)
      T2 = "start" === f ? k : "end" === f ? k - H : "nearest" === f ? o(M2, M2 + H, H, g3, W2, M2 + k, M2 + k + v, v) : k - H / 2, B2 = "start" === u2 ? D : "center" === u2 ? D - b / 2 : "end" === u2 ? D - b : o(y2, y2 + b, b, a3, p3, y2 + D, y2 + D + E, E), T2 = Math.max(0, T2 + M2), B2 = Math.max(0, B2 + y2);
    else {
      T2 = "start" === f ? k - r3 - g3 : "end" === f ? k - s2 + W2 + V2 : "nearest" === f ? o(r3, s2, n2, g3, W2 + V2, k, k + v, v) : k - (r3 + n2 / 2) + V2 / 2, B2 = "start" === u2 ? D - d2 - a3 : "center" === u2 ? D - (d2 + l3 / 2) + F3 / 2 : "end" === u2 ? D - i3 + p3 + F3 : o(d2, i3, l3, a3, p3 + F3, D, D + E, E);
      const { scrollLeft: t4, scrollTop: h3 } = e3;
      T2 = 0 === X ? 0 : Math.max(0, Math.min(h3 + T2 / X, e3.scrollHeight - n2 / X + V2)), B2 = 0 === S ? 0 : Math.max(0, Math.min(t4 + B2 / S, e3.scrollWidth - l3 / S + F3)), k += h3 - T2, D += t4 - B2;
    }
    L.push({ el: e3, top: T2, left: B2 });
  }
  return L;
};

// node_modules/scroll-into-view-if-needed/dist/index.js
var o2 = (e2) => false === e2 ? { block: "end", inline: "nearest" } : ((e3) => e3 === Object(e3) && 0 !== Object.keys(e3).length)(e2) ? e2 : { block: "start", inline: "nearest" };
function t2(t3, n2) {
  if (!t3.isConnected || !((e2) => {
    let o3 = e2;
    for (; o3 && o3.parentNode; ) {
      if (o3.parentNode === document)
        return true;
      o3 = o3.parentNode instanceof ShadowRoot ? o3.parentNode.host : o3.parentNode;
    }
    return false;
  })(t3))
    return;
  if (((e2) => "object" == typeof e2 && "function" == typeof e2.behavior)(n2))
    return n2.behavior(r(t3, n2));
  const r2 = "boolean" == typeof n2 || null == n2 ? void 0 : n2.behavior;
  for (const { el: i2, top: a2, left: l3 } of r(t3, o2(n2)))
    i2.scroll({ top: a2, left: l3, behavior: r2 });
}

// node_modules/@nextui-org/use-is-mounted/dist/index.mjs
var import_react20 = __toESM(require_react(), 1);
function useIsMounted(props = {}) {
  const { rerender = false, delay = 0 } = props;
  const isMountedRef = (0, import_react20.useRef)(false);
  const [isMounted, setIsMounted] = (0, import_react20.useState)(false);
  (0, import_react20.useEffect)(() => {
    isMountedRef.current = true;
    let timer = null;
    if (rerender) {
      if (delay > 0) {
        timer = setTimeout(() => {
          setIsMounted(true);
        }, delay);
      } else {
        setIsMounted(true);
      }
    }
    return () => {
      isMountedRef.current = false;
      if (rerender) {
        setIsMounted(false);
      }
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [rerender]);
  return [(0, import_react20.useCallback)(() => isMountedRef.current, []), isMounted];
}

// node_modules/@react-aria/tabs/dist/utils.mjs
var $99b62ae3ff97ec45$export$c5f62239608282b6 = /* @__PURE__ */ new WeakMap();
function $99b62ae3ff97ec45$export$567fc7097e064344(state, key, role) {
  if (typeof key === "string")
    key = key.replace(/\s+/g, "");
  let baseId = $99b62ae3ff97ec45$export$c5f62239608282b6.get(state);
  return `${baseId}-${role}-${key}`;
}

// node_modules/@react-aria/tabs/dist/useTab.mjs
function $0175d55c2a017ebc$export$fdf4756d5b8ef90a(props, state, ref) {
  let { key, isDisabled: propsDisabled, shouldSelectOnPressUp } = props;
  let { selectionManager: manager, selectedKey } = state;
  let isSelected = key === selectedKey;
  let isDisabled = propsDisabled || state.isDisabled || state.selectionManager.isDisabled(key);
  let { itemProps, isPressed } = (0, $880e95eb8b93ba9a$export$ecf600387e221c37)({
    selectionManager: manager,
    key,
    ref,
    isDisabled,
    shouldSelectOnPressUp,
    linkBehavior: "selection"
  });
  let tabId = (0, $99b62ae3ff97ec45$export$567fc7097e064344)(state, key, "tab");
  let tabPanelId = (0, $99b62ae3ff97ec45$export$567fc7097e064344)(state, key, "tabpanel");
  let { tabIndex } = itemProps;
  let item = state.collection.getItem(key);
  let domProps = (0, $65484d02dcb7eb3e$export$457c3d6518dd4c6f)(item === null || item === void 0 ? void 0 : item.props, {
    labelable: true
  });
  delete domProps.id;
  let linkProps = (0, $ea8dcbcb9ea1b556$export$7e924b3091a3bd18)(item === null || item === void 0 ? void 0 : item.props);
  return {
    tabProps: (0, $3ef42575df84b30b$export$9d1611c77c2fe928)(domProps, linkProps, itemProps, {
      id: tabId,
      "aria-selected": isSelected,
      "aria-disabled": isDisabled || void 0,
      "aria-controls": isSelected ? tabPanelId : void 0,
      tabIndex: isDisabled ? void 0 : tabIndex,
      role: "tab"
    }),
    isSelected,
    isDisabled,
    isPressed
  };
}

// node_modules/@react-aria/tabs/dist/useTabPanel.mjs
function $34bce698202e07cb$export$fae0121b5afe572d(props, state, ref) {
  let tabIndex = (0, $83013635b024ae3d$export$eac1895992b9f3d6)(ref) ? void 0 : 0;
  var _props_id;
  const id = (0, $99b62ae3ff97ec45$export$567fc7097e064344)(state, (_props_id = props.id) !== null && _props_id !== void 0 ? _props_id : state === null || state === void 0 ? void 0 : state.selectedKey, "tabpanel");
  const tabPanelProps = (0, $313b98861ee5dd6c$export$d6875122194c7b44)({
    ...props,
    id,
    "aria-labelledby": (0, $99b62ae3ff97ec45$export$567fc7097e064344)(state, state === null || state === void 0 ? void 0 : state.selectedKey, "tab")
  });
  return {
    tabPanelProps: (0, $3ef42575df84b30b$export$9d1611c77c2fe928)(tabPanelProps, {
      tabIndex,
      role: "tabpanel",
      "aria-describedby": props["aria-describedby"],
      "aria-details": props["aria-details"]
    })
  };
}

// node_modules/@react-aria/tabs/dist/TabsKeyboardDelegate.mjs
var $bfc6f2d60b8a4c40$export$15010ca3c1abe90b = class {
  getKeyLeftOf(key) {
    if (this.flipDirection)
      return this.getNextKey(key);
    return this.getPreviousKey(key);
  }
  getKeyRightOf(key) {
    if (this.flipDirection)
      return this.getPreviousKey(key);
    return this.getNextKey(key);
  }
  getKeyAbove(key) {
    return this.getPreviousKey(key);
  }
  getKeyBelow(key) {
    return this.getNextKey(key);
  }
  isDisabled(key) {
    var _this_collection_getItem_props, _this_collection_getItem;
    return this.disabledKeys.has(key) || !!((_this_collection_getItem = this.collection.getItem(key)) === null || _this_collection_getItem === void 0 ? void 0 : (_this_collection_getItem_props = _this_collection_getItem.props) === null || _this_collection_getItem_props === void 0 ? void 0 : _this_collection_getItem_props.isDisabled);
  }
  getFirstKey() {
    let key = this.collection.getFirstKey();
    if (key != null && this.isDisabled(key))
      key = this.getNextKey(key);
    return key;
  }
  getLastKey() {
    let key = this.collection.getLastKey();
    if (key != null && this.isDisabled(key))
      key = this.getPreviousKey(key);
    return key;
  }
  getNextKey(key) {
    do {
      key = this.collection.getKeyAfter(key);
      if (key == null)
        key = this.collection.getFirstKey();
    } while (this.isDisabled(key));
    return key;
  }
  getPreviousKey(key) {
    do {
      key = this.collection.getKeyBefore(key);
      if (key == null)
        key = this.collection.getLastKey();
    } while (this.isDisabled(key));
    return key;
  }
  constructor(collection, direction, orientation, disabledKeys = /* @__PURE__ */ new Set()) {
    this.collection = collection;
    this.flipDirection = direction === "rtl" && orientation === "horizontal";
    this.disabledKeys = disabledKeys;
  }
};

// node_modules/@react-aria/tabs/dist/useTabList.mjs
var import_react21 = __toESM(require_react(), 1);
function $58d314389b21fa3f$export$773e389e644c5874(props, state, ref) {
  let { orientation = "horizontal", keyboardActivation = "automatic" } = props;
  let { collection, selectionManager: manager, disabledKeys } = state;
  let { direction } = (0, $18f2051aff69b9bf$export$43bb16f9c6d9e3f7)();
  let delegate = (0, import_react21.useMemo)(() => new (0, $bfc6f2d60b8a4c40$export$15010ca3c1abe90b)(collection, direction, orientation, disabledKeys), [
    collection,
    disabledKeys,
    orientation,
    direction
  ]);
  let { collectionProps } = (0, $ae20dd8cbca75726$export$d6daf82dcd84e87c)({
    ref,
    selectionManager: manager,
    keyboardDelegate: delegate,
    selectOnFocus: keyboardActivation === "automatic",
    disallowEmptySelection: true,
    scrollRef: ref,
    linkBehavior: "selection"
  });
  let tabsId = (0, $bdb11010cef70236$export$f680877a34711e37)();
  (0, $99b62ae3ff97ec45$export$c5f62239608282b6).set(state, tabsId);
  let tabListLabelProps = (0, $313b98861ee5dd6c$export$d6875122194c7b44)({
    ...props,
    id: tabsId
  });
  return {
    tabListProps: {
      ...(0, $3ef42575df84b30b$export$9d1611c77c2fe928)(collectionProps, tabListLabelProps),
      role: "tablist",
      "aria-orientation": orientation,
      tabIndex: void 0
    }
  };
}

// node_modules/@nextui-org/tabs/dist/chunk-MGHLJVLI.mjs
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
"use client";
var TabPanel = forwardRef((props, ref) => {
  var _a, _b;
  const { as, tabKey, destroyInactiveTabPanel, state, className, slots, classNames, ...otherProps } = props;
  const Component = as || "div";
  const domRef = useDOMRef(ref);
  const { tabPanelProps } = $34bce698202e07cb$export$fae0121b5afe572d({ ...props, id: String(tabKey) }, state, domRef);
  const { focusProps, isFocused, isFocusVisible } = $f7dceffc5ad7768b$export$4e328f61c538687f();
  const selectedItem = state.selectedItem;
  const content = state.collection.getItem(tabKey).props.children;
  const tabPanelStyles = clsx(classNames == null ? void 0 : classNames.panel, className, (_a = selectedItem == null ? void 0 : selectedItem.props) == null ? void 0 : _a.className);
  const isSelected = tabKey === (selectedItem == null ? void 0 : selectedItem.key);
  if (!content || !isSelected && destroyInactiveTabPanel) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    Component,
    {
      ref: domRef,
      "data-focus": isFocused,
      "data-focus-visible": isFocusVisible,
      "data-inert": !isSelected ? "true" : void 0,
      inert: !isSelected ? "true" : void 0,
      ...isSelected && $3ef42575df84b30b$export$9d1611c77c2fe928(tabPanelProps, focusProps, otherProps),
      className: (_b = slots.panel) == null ? void 0 : _b.call(slots, { class: tabPanelStyles }),
      "data-slot": "panel",
      children: content
    }
  );
});
TabPanel.displayName = "NextUI.TabPanel";
var tab_panel_default = TabPanel;

// node_modules/@nextui-org/tabs/dist/chunk-JXBG24BW.mjs
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
"use client";
var Tab = forwardRef((props, ref) => {
  var _a;
  const {
    className,
    as,
    item,
    state,
    classNames,
    isDisabled: isDisabledProp,
    listRef,
    slots,
    motionProps,
    disableAnimation,
    disableCursorAnimation,
    shouldSelectOnPressUp,
    onClick,
    ...otherProps
  } = props;
  const { key } = item;
  const domRef = useDOMRef(ref);
  const Component = as || (props.href ? "a" : "button");
  const shouldFilterDOMProps = typeof Component === "string";
  const {
    tabProps,
    isSelected,
    isDisabled: isDisabledItem,
    isPressed
  } = $0175d55c2a017ebc$export$fdf4756d5b8ef90a({ key, isDisabled: isDisabledProp, shouldSelectOnPressUp }, state, domRef);
  if (props.children == null) {
    delete tabProps["aria-controls"];
  }
  const isDisabled = isDisabledProp || isDisabledItem;
  const { focusProps, isFocused, isFocusVisible } = $f7dceffc5ad7768b$export$4e328f61c538687f();
  const { hoverProps, isHovered } = $6179b936705e76d3$export$ae780daf29e6d456({
    isDisabled
  });
  const tabStyles = clsx(classNames == null ? void 0 : classNames.tab, className);
  const [, isMounted] = useIsMounted({
    rerender: true
  });
  const handleClick = () => {
    $ff5963eb1fccf552$export$e08e3b67e392101e(onClick, tabProps.onClick);
    if (!(domRef == null ? void 0 : domRef.current) || !(listRef == null ? void 0 : listRef.current))
      return;
    t2(domRef.current, {
      scrollMode: "if-needed",
      behavior: "smooth",
      block: "end",
      inline: "end",
      boundary: listRef == null ? void 0 : listRef.current
    });
  };
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
    Component,
    {
      ref: domRef,
      "data-disabled": dataAttr(isDisabledItem),
      "data-focus": dataAttr(isFocused),
      "data-focus-visible": dataAttr(isFocusVisible),
      "data-hover": dataAttr(isHovered),
      "data-hover-unselected": dataAttr((isHovered || isPressed) && !isSelected),
      "data-pressed": dataAttr(isPressed),
      "data-selected": dataAttr(isSelected),
      "data-slot": "tab",
      ...$3ef42575df84b30b$export$9d1611c77c2fe928(
        tabProps,
        !isDisabled ? {
          ...focusProps,
          ...hoverProps
        } : {},
        filterDOMProps(otherProps, {
          enabled: shouldFilterDOMProps,
          omitPropNames: /* @__PURE__ */ new Set(["title"])
        }),
        { onClick: handleClick }
      ),
      className: (_a = slots.tab) == null ? void 0 : _a.call(slots, { class: tabStyles }),
      title: otherProps == null ? void 0 : otherProps.titleValue,
      type: Component === "button" ? "button" : void 0,
      children: [
        isSelected && !disableAnimation && !disableCursorAnimation && isMounted ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(LazyMotion, { features: domMax, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          m.span,
          {
            className: slots.cursor({ class: classNames == null ? void 0 : classNames.cursor }),
            "data-slot": "cursor",
            layoutDependency: false,
            layoutId: "cursor",
            transition: {
              type: "spring",
              bounce: 0.15,
              duration: 0.5
            },
            ...motionProps
          }
        ) }) : null,
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          "div",
          {
            className: slots.tabContent({
              class: classNames == null ? void 0 : classNames.tabContent
            }),
            "data-slot": "tabContent",
            children: item.rendered
          }
        )
      ]
    }
  );
});
Tab.displayName = "NextUI.Tab";
var tab_default = Tab;

// node_modules/@nextui-org/tabs/dist/chunk-73H64UCB.mjs
var import_react25 = __toESM(require_react(), 1);

// node_modules/@react-stately/list/dist/ListCollection.mjs
var $a02d57049d202695$export$d085fb9e920b5ca7 = class {
  *[Symbol.iterator]() {
    yield* this.iterable;
  }
  get size() {
    return this.keyMap.size;
  }
  getKeys() {
    return this.keyMap.keys();
  }
  getKeyBefore(key) {
    let node = this.keyMap.get(key);
    return node ? node.prevKey : null;
  }
  getKeyAfter(key) {
    let node = this.keyMap.get(key);
    return node ? node.nextKey : null;
  }
  getFirstKey() {
    return this.firstKey;
  }
  getLastKey() {
    return this.lastKey;
  }
  getItem(key) {
    return this.keyMap.get(key);
  }
  at(idx) {
    const keys = [
      ...this.getKeys()
    ];
    return this.getItem(keys[idx]);
  }
  getChildren(key) {
    let node = this.keyMap.get(key);
    return (node === null || node === void 0 ? void 0 : node.childNodes) || [];
  }
  constructor(nodes) {
    this.keyMap = /* @__PURE__ */ new Map();
    this.iterable = nodes;
    let visit = (node) => {
      this.keyMap.set(node.key, node);
      if (node.childNodes && node.type === "section")
        for (let child of node.childNodes)
          visit(child);
    };
    for (let node of nodes)
      visit(node);
    let last;
    let index = 0;
    for (let [key, node] of this.keyMap) {
      if (last) {
        last.nextKey = key;
        node.prevKey = last.key;
      } else {
        this.firstKey = key;
        node.prevKey = void 0;
      }
      if (node.type === "item")
        node.index = index++;
      last = node;
      last.nextKey = void 0;
    }
    this.lastKey = last === null || last === void 0 ? void 0 : last.key;
  }
};

// node_modules/@react-stately/list/dist/useListState.mjs
var import_react22 = __toESM(require_react(), 1);
function $e72dd72e1c76a225$export$2f645645f7bca764(props) {
  let { filter } = props;
  let selectionState = (0, $7af3f5b51489e0b5$export$253fe78d46329472)(props);
  let disabledKeys = (0, import_react22.useMemo)(() => props.disabledKeys ? new Set(props.disabledKeys) : /* @__PURE__ */ new Set(), [
    props.disabledKeys
  ]);
  let factory = (0, import_react22.useCallback)((nodes) => filter ? new (0, $a02d57049d202695$export$d085fb9e920b5ca7)(filter(nodes)) : new (0, $a02d57049d202695$export$d085fb9e920b5ca7)(nodes), [
    filter
  ]);
  let context = (0, import_react22.useMemo)(() => ({
    suppressTextValueWarning: props.suppressTextValueWarning
  }), [
    props.suppressTextValueWarning
  ]);
  let collection = (0, $7613b1592d41b092$export$6cd28814d92fa9c9)(props, factory, context);
  let selectionManager = (0, import_react22.useMemo)(() => new (0, $d496c0a20b6e58ec$export$6c8a5aaad13c9852)(collection, selectionState), [
    collection,
    selectionState
  ]);
  const cachedCollection = (0, import_react22.useRef)(null);
  (0, import_react22.useEffect)(() => {
    if (selectionState.focusedKey != null && !collection.getItem(selectionState.focusedKey)) {
      const startItem = cachedCollection.current.getItem(selectionState.focusedKey);
      const cachedItemNodes = [
        ...cachedCollection.current.getKeys()
      ].map((key) => {
        const itemNode = cachedCollection.current.getItem(key);
        return itemNode.type === "item" ? itemNode : null;
      }).filter((node) => node !== null);
      const itemNodes = [
        ...collection.getKeys()
      ].map((key) => {
        const itemNode = collection.getItem(key);
        return itemNode.type === "item" ? itemNode : null;
      }).filter((node) => node !== null);
      const diff = cachedItemNodes.length - itemNodes.length;
      let index = Math.min(diff > 1 ? Math.max(startItem.index - diff + 1, 0) : startItem.index, itemNodes.length - 1);
      let newNode;
      while (index >= 0) {
        if (!selectionManager.isDisabled(itemNodes[index].key)) {
          newNode = itemNodes[index];
          break;
        }
        if (index < itemNodes.length - 1)
          index++;
        else {
          if (index > startItem.index)
            index = startItem.index;
          index--;
        }
      }
      selectionState.setFocusedKey(newNode ? newNode.key : null);
    }
    cachedCollection.current = collection;
  }, [
    collection,
    selectionManager,
    selectionState,
    selectionState.focusedKey
  ]);
  return {
    collection,
    disabledKeys,
    selectionManager
  };
}

// node_modules/@react-stately/list/dist/useSingleSelectListState.mjs
var import_react23 = __toESM(require_react(), 1);
function $a0d645289fe9b86b$export$e7f05e985daf4b5f(props) {
  var _props_defaultSelectedKey;
  let [selectedKey, setSelectedKey] = (0, $458b0a5536c1a7cf$export$40bfa8c7b0832715)(props.selectedKey, (_props_defaultSelectedKey = props.defaultSelectedKey) !== null && _props_defaultSelectedKey !== void 0 ? _props_defaultSelectedKey : null, props.onSelectionChange);
  let selectedKeys = (0, import_react23.useMemo)(() => selectedKey != null ? [
    selectedKey
  ] : [], [
    selectedKey
  ]);
  let { collection, disabledKeys, selectionManager } = (0, $e72dd72e1c76a225$export$2f645645f7bca764)({
    ...props,
    selectionMode: "single",
    disallowEmptySelection: true,
    allowDuplicateSelectionEvents: true,
    selectedKeys,
    onSelectionChange: (keys) => {
      var _keys_values_next_value;
      let key = (_keys_values_next_value = keys.values().next().value) !== null && _keys_values_next_value !== void 0 ? _keys_values_next_value : null;
      if (key === selectedKey && props.onSelectionChange)
        props.onSelectionChange(key);
      setSelectedKey(key);
    }
  });
  let selectedItem = selectedKey != null ? collection.getItem(selectedKey) : null;
  return {
    collection,
    disabledKeys,
    selectionManager,
    selectedKey,
    setSelectedKey,
    selectedItem
  };
}

// node_modules/@react-stately/tabs/dist/useTabListState.mjs
var import_react24 = __toESM(require_react(), 1);
function $76f919a04c5a7d14$export$4ba071daf4e486(props) {
  var _props_defaultSelectedKey;
  let state = (0, $a0d645289fe9b86b$export$e7f05e985daf4b5f)({
    ...props,
    suppressTextValueWarning: true,
    defaultSelectedKey: (_props_defaultSelectedKey = props.defaultSelectedKey) !== null && _props_defaultSelectedKey !== void 0 ? _props_defaultSelectedKey : $76f919a04c5a7d14$var$findDefaultSelectedKey(props.collection, props.disabledKeys ? new Set(props.disabledKeys) : /* @__PURE__ */ new Set())
  });
  let { selectionManager, collection, selectedKey: currentSelectedKey } = state;
  let lastSelectedKey = (0, import_react24.useRef)(currentSelectedKey);
  (0, import_react24.useEffect)(() => {
    let selectedKey = currentSelectedKey;
    if (selectionManager.isEmpty || !collection.getItem(selectedKey)) {
      selectedKey = $76f919a04c5a7d14$var$findDefaultSelectedKey(collection, state.disabledKeys);
      if (selectedKey != null)
        selectionManager.setSelectedKeys([
          selectedKey
        ]);
    }
    if (selectedKey != null && selectionManager.focusedKey == null || !selectionManager.isFocused && selectedKey !== lastSelectedKey.current)
      selectionManager.setFocusedKey(selectedKey);
    lastSelectedKey.current = selectedKey;
  });
  return {
    ...state,
    isDisabled: props.isDisabled || false
  };
}
function $76f919a04c5a7d14$var$findDefaultSelectedKey(collection, disabledKeys) {
  let selectedKey = null;
  if (collection) {
    selectedKey = collection.getFirstKey();
    while (disabledKeys.has(selectedKey) && selectedKey !== collection.getLastKey())
      selectedKey = collection.getKeyAfter(selectedKey);
    if (disabledKeys.has(selectedKey) && selectedKey === collection.getLastKey())
      selectedKey = collection.getFirstKey();
  }
  return selectedKey;
}

// node_modules/@nextui-org/tabs/dist/chunk-73H64UCB.mjs
"use client";
function useTabs(originalProps) {
  var _a, _b, _c7;
  const globalContext = useProviderContext();
  const [props, variantProps] = mapPropsVariants(originalProps, tabs.variantKeys);
  const {
    ref,
    as,
    className,
    classNames,
    children,
    disableCursorAnimation,
    motionProps,
    isVertical = false,
    shouldSelectOnPressUp = true,
    destroyInactiveTabPanel = true,
    ...otherProps
  } = props;
  const Component = as || "div";
  const shouldFilterDOMProps = typeof Component === "string";
  const domRef = useDOMRef(ref);
  const disableAnimation = (_b = (_a = originalProps == null ? void 0 : originalProps.disableAnimation) != null ? _a : globalContext == null ? void 0 : globalContext.disableAnimation) != null ? _b : false;
  const state = $76f919a04c5a7d14$export$4ba071daf4e486({
    children,
    ...otherProps
  });
  const { tabListProps } = $58d314389b21fa3f$export$773e389e644c5874(otherProps, state, domRef);
  const slots = (0, import_react25.useMemo)(
    () => tabs({
      ...variantProps,
      className,
      disableAnimation,
      ...isVertical ? { placement: "start" } : {}
    }),
    [objectToDeps(variantProps), className, disableAnimation, isVertical]
  );
  const baseStyles = clsx(classNames == null ? void 0 : classNames.base, className);
  const values = (0, import_react25.useMemo)(
    () => ({
      state,
      slots,
      classNames,
      motionProps,
      disableAnimation,
      listRef: domRef,
      shouldSelectOnPressUp,
      disableCursorAnimation,
      isDisabled: originalProps == null ? void 0 : originalProps.isDisabled
    }),
    [
      state,
      slots,
      domRef,
      motionProps,
      disableAnimation,
      disableCursorAnimation,
      shouldSelectOnPressUp,
      originalProps == null ? void 0 : originalProps.isDisabled,
      classNames
    ]
  );
  const getBaseProps = (0, import_react25.useCallback)(
    (props2) => ({
      "data-slot": "base",
      className: slots.base({ class: clsx(baseStyles, props2 == null ? void 0 : props2.className) }),
      ...$3ef42575df84b30b$export$9d1611c77c2fe928(
        filterDOMProps(otherProps, {
          enabled: shouldFilterDOMProps
        }),
        props2
      )
    }),
    [baseStyles, otherProps, slots]
  );
  const placement = (_c7 = variantProps.placement) != null ? _c7 : isVertical ? "start" : "top";
  const getWrapperProps = (0, import_react25.useCallback)(
    (props2) => ({
      "data-slot": "tabWrapper",
      className: slots.wrapper({ class: clsx(classNames == null ? void 0 : classNames.wrapper, props2 == null ? void 0 : props2.className) }),
      "data-placement": placement,
      "data-vertical": isVertical || placement === "start" || placement === "end" ? "vertical" : "horizontal"
    }),
    [classNames, slots, placement, isVertical]
  );
  const getTabListProps = (0, import_react25.useCallback)(
    (props2) => ({
      ref: domRef,
      "data-slot": "tabList",
      className: slots.tabList({ class: clsx(classNames == null ? void 0 : classNames.tabList, props2 == null ? void 0 : props2.className) }),
      ...$3ef42575df84b30b$export$9d1611c77c2fe928(tabListProps, props2)
    }),
    [domRef, tabListProps, classNames, slots]
  );
  return {
    Component,
    domRef,
    state,
    values,
    destroyInactiveTabPanel,
    getBaseProps,
    getTabListProps,
    getWrapperProps
  };
}

// node_modules/@nextui-org/tabs/dist/chunk-25S546L6.mjs
var import_react26 = __toESM(require_react(), 1);
var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);
"use client";
function Tabs(props, ref) {
  const {
    Component,
    values,
    state,
    destroyInactiveTabPanel,
    getBaseProps,
    getTabListProps,
    getWrapperProps
  } = useTabs({
    ...props,
    ref
  });
  const layoutId = (0, import_react26.useId)();
  const layoutGroupEnabled = !props.disableAnimation && !props.disableCursorAnimation;
  const tabsProps = {
    state,
    listRef: values.listRef,
    slots: values.slots,
    classNames: values.classNames,
    isDisabled: values.isDisabled,
    motionProps: values.motionProps,
    disableAnimation: values.disableAnimation,
    shouldSelectOnPressUp: values.shouldSelectOnPressUp,
    disableCursorAnimation: values.disableCursorAnimation
  };
  const tabs2 = [...state.collection].map((item) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(tab_default, { item, ...tabsProps, ...item.props }, item.key));
  const renderTabs = /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_jsx_runtime3.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { ...getBaseProps(), children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Component, { ...getTabListProps(), children: layoutGroupEnabled ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(LayoutGroup, { id: layoutId, children: tabs2 }) : tabs2 }) }),
    [...state.collection].map((item) => {
      return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
        tab_panel_default,
        {
          classNames: values.classNames,
          destroyInactiveTabPanel,
          slots: values.slots,
          state: values.state,
          tabKey: item.key
        },
        item.key
      );
    })
  ] });
  if ("placement" in props || "isVertical" in props) {
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { ...getWrapperProps(), children: renderTabs });
  }
  return renderTabs;
}
var tabs_default = forwardRef(Tabs);
Tabs.displayName = "NextUI.Tabs";

// node_modules/@nextui-org/tabs/dist/chunk-FXLYF44B.mjs
"use client";
var TabItemBase = $c1d7fb2ec91bae71$export$6d08773d2e66f8f2;
var tab_item_base_default = TabItemBase;

// node_modules/@nextui-org/tabs/dist/index.mjs
"use client";

// app/components/ServiciosList.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/ServiciosList.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/ServiciosList.tsx"
  );
  import.meta.hot.lastModified = "1732889417884.9512";
}
var buttonsLabels = [{
  label: "Productividad"
}, {
  label: "Gesti\xF3n"
}, {
  label: "Geolocalizaci\xF3n"
}, {
  label: "Clientes"
}, {
  label: "Inmuebles"
}];
var ServiciosList = () => {
  _s();
  const [selectedTab, setSelectedTab] = (0, import_react27.useState)("Productividad");
  const [hoveredCardId, setHoveredCardId] = (0, import_react27.useState)(null);
  const [opacityArray, setOpacityArray] = (0, import_react27.useState)([]);
  const {
    screenWidth
  } = useScreenWidth();
  (0, import_react27.useEffect)(() => {
    setOpacityArray([]);
    const matchingCards = cardsInfo.filter((card) => card.selectedTab === selectedTab);
    const addCardsWithDelay = async () => {
      for (let i2 = 0; i2 < matchingCards.length; i2++) {
        await new Promise((resolve) => setTimeout(resolve, 300));
        setOpacityArray((prev) => [...prev, matchingCards[i2].id]);
      }
    };
    addCardsWithDelay();
  }, [selectedTab, cardsInfo]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `w-full flex flex-col justify-center items-center z-[10] pb-20 overflow-x-hidden mt-20`, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `w-[95%] h-auto flex ${screenWidth < 1350 ? "flex-col gap-6" : "flex-row"} justify-between items-center`, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `${screenWidth < 1350 ? "w-[95%]" : "w-1/2"} flex-row items-center justify-center`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `h-fit w-fit flex flex-col justify-center ${screenWidth < 1350 ? "items-center" : "items-start"}  mx-auto gap-3`, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: `text-white font-sans font-bold ${screenWidth < 400 ? "text-3xl" : "text-4xl"} ${screenWidth < 1350 ? "text-center" : screenWidth < 1350 ? "text-center" : ""}`, children: "Una funci\xF3n para cada necesidad" }, void 0, false, {
          fileName: "app/components/ServiciosList.tsx",
          lineNumber: 86,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: `text-gray-300 font-sans font-bold ${screenWidth < 400 ? "text-2xl" : "text-3xl"} ${screenWidth < 1350 ? "text-center" : ""}`, children: "Todas las soluciones que necesitas en una aplicaci\xF3n" }, void 0, false, {
          fileName: "app/components/ServiciosList.tsx",
          lineNumber: 87,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/ServiciosList.tsx",
        lineNumber: 85,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/ServiciosList.tsx",
        lineNumber: 84,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `w-1/2 z-[90] flex flex-row items-end justify-center`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(tabs_default, { isVertical: screenWidth < 601 ? true : false, variant: "bordered", size: "lg", selectedKey: String(selectedTab), onSelectionChange: (key) => setSelectedTab(String(key)), children: buttonsLabels.map((buttons) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(tab_item_base_default, { title: buttons.label, className: "text-red-500" }, buttons.label, false, {
        fileName: "app/components/ServiciosList.tsx",
        lineNumber: 93,
        columnNumber: 43
      }, this)) }, void 0, false, {
        fileName: "app/components/ServiciosList.tsx",
        lineNumber: 92,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/ServiciosList.tsx",
        lineNumber: 91,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/ServiciosList.tsx",
      lineNumber: 83,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative w-full h-auto", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-gradient-to-r from-black to bg-transparent absolute top-0 left-0 w-[30%] h-full z-[60] pointer-events-none" }, void 0, false, {
        fileName: "app/components/ServiciosList.tsx",
        lineNumber: 99,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-gradient-to-l from-black to bg-transparent absolute top-0 right-0 w-[30%] h-full z-[60] pointer-events-none" }, void 0, false, {
        fileName: "app/components/ServiciosList.tsx",
        lineNumber: 101,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `${screenWidth < 600 ? "pl-[5rem]" : screenWidth < 700 ? "pl-[8rem]" : screenWidth < 1350 ? "pl-[12rem]" : "pl-[20rem]"} pr-[30rem] flex flex-row gap-20 mt-12 overflow-scroll max-w-[100%] relative`, children: cardsInfo.map((card) => card.selectedTab === selectedTab && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `${card.title}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `transition-all ease-in-out duration-[2000ms] h-[700px]  ${screenWidth < 480 ? "min-w-[350px] max-w-[350px]" : "min-w-[450px] max-w-[450px]"} ${opacityArray.includes(card.id) ? "opacity-100" : "opacity-0"} ${hoveredCardId === card.id ? card.bgColorHover : card.bgColor} flex flex-col justify-center items-center rounded-3xl border-[0.5px] border-gray-400 border-opacity-70 p-6 bg-opacity-30 backdrop-blur-md md:hover:cursor-pointer z-[50]`, style: {
        ...hoveredCardId === card.id ? Styles.mouseIn : Styles.mouseOut
        // Smooth transition effect
      }, onMouseEnter: () => setHoveredCardId(card.id), onMouseLeave: () => setHoveredCardId(null), children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-row w-[98%] justify-between items-center mb-6 z-[50]", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-row w-full justify-start items-center gap-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-1 bg-opacity-0 rounded-2xl relative shadow-md", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-black p-2 rounded-2xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `border-2 ${card.borderColor} p-2 rounded-xl`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { icon: card.icon, className: "text-[2.5rem] text-white" }, void 0, false, {
              fileName: "app/components/ServiciosList.tsx",
              lineNumber: 114,
              columnNumber: 33
            }, this) }, void 0, false, {
              fileName: "app/components/ServiciosList.tsx",
              lineNumber: 113,
              columnNumber: 31
            }, this) }, void 0, false, {
              fileName: "app/components/ServiciosList.tsx",
              lineNumber: 112,
              columnNumber: 29
            }, this) }, void 0, false, {
              fileName: "app/components/ServiciosList.tsx",
              lineNumber: 111,
              columnNumber: 27
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-gray-100 font-sans font-medium text-2xl", children: card.title }, void 0, false, {
              fileName: "app/components/ServiciosList.tsx",
              lineNumber: 119,
              columnNumber: 27
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/ServiciosList.tsx",
            lineNumber: 110,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-3 border-2 rounded-xl bg-gradient-to-b from-slate-950 to-slate-700 opacity-50 md:hover:bg-gradient-to-t md:hover:from-slate-300 md:hover:to-white md:hover:border-white md:hover:text-black text-white transition-all ease-in-out duration-500", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { icon: "oui:arrow-right", className: "text-2xl" }, void 0, false, {
            fileName: "app/components/ServiciosList.tsx",
            lineNumber: 122,
            columnNumber: 27
          }, this) }, void 0, false, {
            fileName: "app/components/ServiciosList.tsx",
            lineNumber: 121,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/ServiciosList.tsx",
          lineNumber: 109,
          columnNumber: 23
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-[95%] mb-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-100 text-align", children: card.description }, void 0, false, {
          fileName: "app/components/ServiciosList.tsx",
          lineNumber: 126,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/components/ServiciosList.tsx",
          lineNumber: 125,
          columnNumber: 23
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-[95%] h-[1px] bg-gray-600 mb-8" }, void 0, false, {
          fileName: "app/components/ServiciosList.tsx",
          lineNumber: 128,
          columnNumber: 23
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-[98%] h-full bg-red-300 rounded-3xl bg-cover bg-no-repeat bg-left mx-8", style: {
          backgroundImage: `url(${card.image})`
        } }, void 0, false, {
          fileName: "app/components/ServiciosList.tsx",
          lineNumber: 129,
          columnNumber: 23
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/ServiciosList.tsx",
        lineNumber: 105,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/components/ServiciosList.tsx",
        lineNumber: 104,
        columnNumber: 19
      }, this) }, void 0, false, {
        fileName: "app/components/ServiciosList.tsx",
        lineNumber: 103,
        columnNumber: 70
      }, this)) }, void 0, false, {
        fileName: "app/components/ServiciosList.tsx",
        lineNumber: 102,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/ServiciosList.tsx",
      lineNumber: 97,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/ServiciosList.tsx",
    lineNumber: 82,
    columnNumber: 10
  }, this);
};
_s(ServiciosList, "UUlz3V88OgY+0Ox5EEP50g4qa78=", false, function() {
  return [useScreenWidth];
});
_c = ServiciosList;
var ServiciosList_default = ServiciosList;
var Styles = {
  mouseIn: {
    transform: "rotate3d(0.9, -0.9, 0.1, 25deg)"
  },
  mouseOut: {
    transform: "rotate3d(0, 0, 0, 0)"
  }
};
var _c;
$RefreshReg$(_c, "ServiciosList");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/styles/index.css?url
var styles_default = "/build/_assets/index-CRVXJ7EK.css?url";

// app/components/IndexComponent2.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/IndexComponent2.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/IndexComponent2.tsx"
  );
  import.meta.hot.lastModified = "1732638222127.7905";
}
var IndexComponents2 = () => {
  _s2();
  const {
    screenWidth
  } = useScreenWidth();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: `w-full flex flex-col justify-center items-center h-auto py-12 relative pb-20 overflow-x-hidden overflow-y-clip`, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { className: `font-sans font-bold text-gray-50 text-center ${screenWidth < 400 ? "text-3xl" : "text-4xl"} mb-4`, children: "Todos tus clientes." }, void 0, false, {
      fileName: "app/components/IndexComponent2.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { className: `text-gray-300 font-sans ${screenWidth < 400 ? "text-2xl" : "text-3xl"} font-bold text-center mb-6`, children: "En una \xFAnica herramienta." }, void 0, false, {
      fileName: "app/components/IndexComponent2.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "relative w-full h-auto flex flex-row justify-center items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "absolute bg-gradient-to-b from-transparent to-black top-0 left-0 w-full h-full z-[30]" }, void 0, false, {
        fileName: "app/components/IndexComponent2.tsx",
        lineNumber: 35,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: `bg-slate-500 bg-opacity-30 backdrop-blur-lg h-auto ${screenWidth < 1080 ? "w-[95%]" : "w-full"} max-w-[1024px] rounded-xl border border-white border-opacity-50 p-2 relative z-[10]`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "rounded-lg w-full h-full bg-black border border-white border-opacity-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("video", { autoPlay: true, loop: true, muted: true, playsInline: true, className: "rounded-lg w-full h-full object-cover", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("source", { src: "/clientesindex2.webm", type: "video/webm" }, void 0, false, {
          fileName: "app/components/IndexComponent2.tsx",
          lineNumber: 41,
          columnNumber: 15
        }, this),
        "Tu navegador no soporta este formato de v\xEDdeo."
      ] }, void 0, true, {
        fileName: "app/components/IndexComponent2.tsx",
        lineNumber: 40,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/IndexComponent2.tsx",
        lineNumber: 39,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/IndexComponent2.tsx",
        lineNumber: 38,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/IndexComponent2.tsx",
      lineNumber: 33,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: `w-full h-auto flex flex-col items-center justify-center relative overflow-x-scroll overflow-y-visible`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: `flex flex-wrap flex-row max-w-[1024px]  ${screenWidth < 900 ? "items-center justify-center" : "items-start justify-between"} mt-2 z-[40] gap-10 relative ${screenWidth < 1080 ? "w-[90%]" : "w-full"}`, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: `${screenWidth < 700 ? "w-[95%]" : screenWidth < 900 ? "w-[90%]" : "w-[30%]"} h-auto`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: `${screenWidth < 900 ? "text-base text-center" : " text-start text-lg"} font-sans font-medium text-gray-400`, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("strong", { className: "text-white", children: "Gestiona todos tus clientes." }, void 0, false, {
          fileName: "app/components/IndexComponent2.tsx",
          lineNumber: 59,
          columnNumber: 15
        }, this),
        " Visualiza, filtra, ordena y busca con rapidez para optimizar tu trabajo."
      ] }, void 0, true, {
        fileName: "app/components/IndexComponent2.tsx",
        lineNumber: 58,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/IndexComponent2.tsx",
        lineNumber: 57,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: `${screenWidth < 700 ? "w-[95%]" : screenWidth < 900 ? "w-[90%]" : "w-[30%]"} h-auto`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: `${screenWidth < 900 ? "text-base text-center" : " text-start text-lg"} font-sans font-medium text-gray-400`, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("strong", { className: "text-white", children: "Crea nuevos clientes." }, void 0, false, {
          fileName: "app/components/IndexComponent2.tsx",
          lineNumber: 64,
          columnNumber: 15
        }, this),
        " Con tan solo un click a\xF1ade clientes a tu cartera y asigna inmuebles de tu base de datos a cada registro."
      ] }, void 0, true, {
        fileName: "app/components/IndexComponent2.tsx",
        lineNumber: 63,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/IndexComponent2.tsx",
        lineNumber: 62,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: `${screenWidth < 700 ? "w-[95%]" : screenWidth < 900 ? "w-[90%]" : "w-[30%]"} h-auto`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: `${screenWidth < 900 ? "text-base text-center" : " text-start text-lg"} font-sans font-medium text-gray-400`, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("strong", { className: "text-white", children: "Ordena tus clientes." }, void 0, false, {
          fileName: "app/components/IndexComponent2.tsx",
          lineNumber: 69,
          columnNumber: 15
        }, this),
        " Ordena los datos y mejora el rendimiento de tu trabajo."
      ] }, void 0, true, {
        fileName: "app/components/IndexComponent2.tsx",
        lineNumber: 68,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/IndexComponent2.tsx",
        lineNumber: 67,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/IndexComponent2.tsx",
      lineNumber: 56,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/IndexComponent2.tsx",
      lineNumber: 48,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/IndexComponent2.tsx",
    lineNumber: 30,
    columnNumber: 10
  }, this);
};
_s2(IndexComponents2, "qNc2XciqomHr/tRhWGE/SuBdPsM=", false, function() {
  return [useScreenWidth];
});
_c2 = IndexComponents2;
var IndexComponent2_default = IndexComponents2;
var _c2;
$RefreshReg$(_c2, "IndexComponents2");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/IndexComponent3.tsx
var import_react30 = __toESM(require_react(), 1);
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/IndexComponent3.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s3 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/IndexComponent3.tsx"
  );
  import.meta.hot.lastModified = "1732638222128.103";
}
var IndexComponent3 = () => {
  _s3();
  const {
    screenWidth
  } = useScreenWidth();
  const sectionRef = (0, import_react30.useRef)(null);
  const [isImgVisible, setIsImgVisible] = (0, import_react30.useState)(false);
  const [isH2Visible, setIsH2Visible] = (0, import_react30.useState)(false);
  const [isH3Visible, setIsH3Visible] = (0, import_react30.useState)(false);
  const [isPVisible, setIsPVisible] = (0, import_react30.useState)(false);
  (0, import_react30.useEffect)(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsH2Visible(true);
          setIsH3Visible(true);
          setIsImgVisible(true);
          setIsPVisible(true);
        } else {
          setIsH2Visible(false);
          setIsH3Visible(false);
          setIsImgVisible(false);
          setIsPVisible(false);
        }
      });
    }, {
      threshold: 0.5
    });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: `max-w-[1100px]  ${screenWidth < 1100 ? "w-[95%]" : "w-full"} h-auto flex ${screenWidth < 900 ? "flex-col pt-10" : "flex-row pt-30"} justify-center items-center mx-auto relative`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { ref: sectionRef, className: `w-full h-auto flex ${screenWidth < 900 ? "flex-col items-center" : "flex-row items-start"} justify-center`, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: `h-auto flex flex-col justify-center items-center ${screenWidth < 900 ? "relative w-full" : "w-2/3"} ${isImgVisible ? "opacity-100" : "opacity-0"} transition-opacity ease-in-out duration-[1500ms]`, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: "/iphonerocks2.png", alt: "Vivienda Nova CRM inmobiliarias. Organiza tareas, todo app, calendario de tareas, objetivos diarios.", className: "w-auto h-auto" }, void 0, false, {
        fileName: "app/components/IndexComponent3.tsx",
        lineNumber: 67,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: `absolute bg-black mx-auto h-[100px] ${screenWidth < 900 ? "w-full" : "w-[110%]"} z-[30] ${screenWidth < 380 ? "-bottom-[5.5rem] blur-[1rem]" : screenWidth < 420 ? "-bottom-[5rem] blur-[1rem]" : screenWidth < 500 ? "-bottom-[4.5rem] blur-[1rem]" : screenWidth < 650 ? "-bottom-[4.5rem] blur-[1rem]" : screenWidth < 700 ? "-bottom-[4.5rem] blur-[1rem]" : screenWidth < 900 ? "-bottom-[5rem] blur-[1rem]" : "-bottom-[3rem] blur-[1rem]"}` }, void 0, false, {
        fileName: "app/components/IndexComponent3.tsx",
        lineNumber: 68,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/IndexComponent3.tsx",
      lineNumber: 66,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: `${screenWidth < 900 ? "w-full justify-center items-center mt-8" : "w-1/3 justify-center"} h-fit flex flex-col justify-start gap-0 items-start z-[40]`, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h2", { className: `transition-opacity ease-in-out duration-[1500ms] text-gray-50 font-sans font-bold ${isH2Visible ? "opacity-100" : "opacity-0"} ${screenWidth < 600 ? "text-center text-3xl pt-4" : "text-4xl"}`, children: "Organiza tus tareas." }, void 0, false, {
        fileName: "app/components/IndexComponent3.tsx",
        lineNumber: 72,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h3", { className: `transition-opacity ease-in-out duration-[1500ms] text-gray-300 mt-4 font-sans font-bold ${isH3Visible ? "opacity-100" : "opacity-0"} ${screenWidth < 600 ? "text-center text-2xl px-3" : "text-3xl"}`, children: "Controla el tiempo, alcanza tus objetivos." }, void 0, false, {
        fileName: "app/components/IndexComponent3.tsx",
        lineNumber: 73,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: `transition-opacity ease-in-out duration-[1500ms] ${isPVisible ? "opacity-100" : "opacity-0"} ${screenWidth < 900 ? "text-base text-center w-[80%]" : " text-start text-lg w-full"} mt-8 font-sans font-medium text-gray-400`, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("strong", { className: "text-white", children: "Asigna tareas." }, void 0, false, {
          fileName: "app/components/IndexComponent3.tsx",
          lineNumber: 75,
          columnNumber: 13
        }, this),
        " Gestiona la actividad y objetivos diarios y de tus asesores inmobiliarios con el calendario de tareas integrado."
      ] }, void 0, true, {
        fileName: "app/components/IndexComponent3.tsx",
        lineNumber: 74,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/IndexComponent3.tsx",
      lineNumber: 71,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/IndexComponent3.tsx",
    lineNumber: 64,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/IndexComponent3.tsx",
    lineNumber: 63,
    columnNumber: 10
  }, this);
};
_s3(IndexComponent3, "/8EvEb9zmxswI7neWIG9LKBduUY=", false, function() {
  return [useScreenWidth];
});
_c3 = IndexComponent3;
var IndexComponent3_default = IndexComponent3;
var _c3;
$RefreshReg$(_c3, "IndexComponent3");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/IndexComponent4.tsx
var import_react31 = __toESM(require_react(), 1);
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/IndexComponent4.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s4 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/IndexComponent4.tsx"
  );
  import.meta.hot.lastModified = "1732638222128.4004";
}
var IndexComponent4 = () => {
  _s4();
  const {
    screenWidth
  } = useScreenWidth();
  const sectionRef = (0, import_react31.useRef)(null);
  const [isImgVisible, setIsImgVisible] = (0, import_react31.useState)(false);
  const [isH2Visible, setIsH2Visible] = (0, import_react31.useState)(false);
  const [isH3Visible, setIsH3Visible] = (0, import_react31.useState)(false);
  const [isPVisible, setIsPVisible] = (0, import_react31.useState)(false);
  (0, import_react31.useEffect)(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsH2Visible(true);
          setIsH3Visible(true);
          setIsImgVisible(true);
          setIsPVisible(true);
        } else {
          setIsH2Visible(false);
          setIsH3Visible(false);
          setIsImgVisible(false);
          setIsPVisible(false);
        }
      });
    }, {
      threshold: 0.7
    });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { ref: sectionRef, className: `max-w-[1100px]  ${screenWidth < 1100 ? "w-[95%]" : "w-full"} h-auto flex ${screenWidth < 900 ? "pt-20" : "pt-40"} flex-col justify-center items-center mx-auto relative overflow-x-hidden overflow-y-clip`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { ref: sectionRef, className: `w-full h-auto flex flex-col justify-center items-center`, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "w-full h-auto z-[40]", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h2", { className: `font-sans font-bold text-gray-50 text-center ${screenWidth < 400 ? "text-3xl" : "text-4xl"} mb-4 ${isH2Visible ? "opacity-100" : "opacity-0"} transition-opacity ease-in-out duration-[1500ms]`, children: "Organiza por zonas." }, void 0, false, {
        fileName: "app/components/IndexComponent4.tsx",
        lineNumber: 66,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h3", { className: `text-gray-300 font-sans ${screenWidth < 400 ? "text-2xl" : "text-3xl"} font-bold text-center mb-6 ${isH3Visible ? "opacity-100" : "opacity-0"} transition-opacity ease-in-out duration-[1500ms]`, children: "Crea \xE1reas en el mapa y asigna inmuebles autom\xE1ticamente." }, void 0, false, {
        fileName: "app/components/IndexComponent4.tsx",
        lineNumber: 67,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: `${screenWidth < 650 ? "text-base w-[80%]" : screenWidth < 900 ? "text-base w-[60%]" : " text-lg w-[60%]"}  mx-auto font-sans font-medium text-gray-400 text-center ${isPVisible ? "opacity-100" : "opacity-0"} transition-opacity ease-in-out duration-[1500ms]`, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("strong", { className: "text-white", children: "Dibuja zonas." }, void 0, false, {
          fileName: "app/components/IndexComponent4.tsx",
          lineNumber: 70,
          columnNumber: 13
        }, this),
        " En cada zona se asignar\xE1n autom\xE1ticamente el nombre de la zona y el responsable elegidos mediante geolocalizaci\xF3n de coordenadas."
      ] }, void 0, true, {
        fileName: "app/components/IndexComponent4.tsx",
        lineNumber: 69,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/IndexComponent4.tsx",
      lineNumber: 65,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "relative w-full h-auto flex flex-row justify-center items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "absolute bg-gradient-to-b from-transparent to-black top-0 left-0 w-full h-full z-[30]" }, void 0, false, {
        fileName: "app/components/IndexComponent4.tsx",
        lineNumber: 75,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: `bg-slate-500 bg-opacity-30 flex flex-col justify-center items-center backdrop-blur-lg h-auto ${isImgVisible ? "opacity-100" : "opacity-0"} transition-opacity ease-in-out duration-[1500ms]  ${screenWidth < 1080 ? "w-[95%]" : "w-full"} max-w-[1024px] rounded-xl border border-white border-opacity-50 mt-10 p-2 relative z-[10]`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "rounded-lg w-full h-full bg-black border border-white border-opacity-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("video", { autoPlay: true, loop: true, muted: true, playsInline: true, className: "rounded-lg", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("source", { src: "/indexcomponent4.webm", type: "video/webm" }, void 0, false, {
          fileName: "app/components/IndexComponent4.tsx",
          lineNumber: 81,
          columnNumber: 17
        }, this),
        "Tu navegador no soporta este formato de v\xEDdeo."
      ] }, void 0, true, {
        fileName: "app/components/IndexComponent4.tsx",
        lineNumber: 80,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/IndexComponent4.tsx",
        lineNumber: 79,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/IndexComponent4.tsx",
        lineNumber: 78,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/IndexComponent4.tsx",
      lineNumber: 73,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/IndexComponent4.tsx",
    lineNumber: 64,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/IndexComponent4.tsx",
    lineNumber: 63,
    columnNumber: 10
  }, this);
};
_s4(IndexComponent4, "/8EvEb9zmxswI7neWIG9LKBduUY=", false, function() {
  return [useScreenWidth];
});
_c4 = IndexComponent4;
var IndexComponent4_default = IndexComponent4;
var _c4;
$RefreshReg$(_c4, "IndexComponent4");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/IndexComponent5.tsx
var import_react32 = __toESM(require_react(), 1);
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/IndexComponent5.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s5 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/IndexComponent5.tsx"
  );
  import.meta.hot.lastModified = "1732638222128.7715";
}
var IndexComponent5 = () => {
  _s5();
  const {
    screenWidth
  } = useScreenWidth();
  const sectionRef = (0, import_react32.useRef)(null);
  const leftCard = (0, import_react32.useRef)(null);
  const rightCard = (0, import_react32.useRef)(null);
  const centerCard = (0, import_react32.useRef)(null);
  const [cardRightVisible, setCardRightVisible] = (0, import_react32.useState)(false);
  const [cardLeftVisible, setCardLeftVisible] = (0, import_react32.useState)(false);
  const [cardCenterVisible, setCardCenterVisible] = (0, import_react32.useState)(false);
  (0, import_react32.useEffect)(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCardLeftVisible(true);
        } else {
          setCardLeftVisible(false);
        }
      });
    }, {
      threshold: 0.4
    });
    if (leftCard.current) {
      observer.observe(leftCard.current);
    }
    return () => {
      if (leftCard.current) {
        observer.unobserve(leftCard.current);
      }
    };
  }, []);
  (0, import_react32.useEffect)(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCardRightVisible(true);
        } else {
          setCardRightVisible(false);
        }
      });
    }, {
      threshold: 0.4
    });
    if (rightCard.current) {
      observer.observe(rightCard.current);
    }
    return () => {
      if (rightCard.current) {
        observer.unobserve(rightCard.current);
      }
    };
  }, []);
  (0, import_react32.useEffect)(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCardCenterVisible(true);
        } else {
          setCardCenterVisible(false);
        }
      });
    }, {
      threshold: 0.4
    });
    if (centerCard.current) {
      observer.observe(centerCard.current);
    }
    return () => {
      if (centerCard.current) {
        observer.unobserve(centerCard.current);
      }
    };
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { ref: sectionRef, className: `max-w-[1100px]  ${screenWidth < 450 ? "w-[95%] px-6" : screenWidth < 1100 ? "w-[95%] px-10" : "w-full px-10"} h-auto flex ${screenWidth < 900 ? "mt-20" : "mt-40"} flex-col justify-center items-center mx-auto relative overflow-x-hidden overflow-y-clip  py-16`, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "w-full mx-auto", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h2", { className: `font-sans font-bold text-gray-50 text-center ${screenWidth < 400 ? "text-3xl" : "text-4xl"} mb-4 transition-opacity ease-in-out duration-[1500ms]`, children: "Empieza ya." }, void 0, false, {
        fileName: "app/components/IndexComponent5.tsx",
        lineNumber: 125,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h3", { className: `text-gray-300 font-sans ${screenWidth < 400 ? "text-2xl" : "text-3xl"} font-bold text-center mb-6 transition-opacity ease-in-out duration-[1500ms]`, children: "Haz que tus ventas suban gracias al trabajo organizado." }, void 0, false, {
        fileName: "app/components/IndexComponent5.tsx",
        lineNumber: 126,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/IndexComponent5.tsx",
      lineNumber: 124,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: `flex ${screenWidth < 900 ? "flex-col gap-24" : "flex-row"} justify-center items-center mx-auto relative overflow-x-visible overflow-y-clip py-16 w-full`, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { ref: leftCard, className: `${cardLeftVisible && screenWidth < 900 ? "w-full border px-4 delay-100 duration-[1000ms] max-w-[400px]" : !cardLeftVisible && screenWidth < 900 ? "w-0 border-none opacity-0 duration-[1000ms] max-w-[400px]" : cardLeftVisible && screenWidth >= 900 ? "w-1/3 border border-r-0 rounded-tr-none rounded-br-none px-8" : !cardLeftVisible && screenWidth >= 900 ? "w-0 border-none px-8 duration-[1000ms]" : ""}  py-6 transition-all ease-in-out rounded-3xl border-slate-100 border-opacity-30 h-[700px] flex flex-col justify-start items-center`, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "w-full min-h-[250px] border-b border-slate-100 border-opacity-25 flex flex-col justify-around items-start", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: `${cardLeftVisible && screenWidth < 900 ? "opacity-100 delay-[300ms] duration-[1500ms] flex flex-col justify-center items-center w-full" : cardLeftVisible && screenWidth >= 900 ? "opacity-100 delay-[1000ms] duration-[1500ms]" : "opacity-0 delay-0 duration-0"} transition-opacity ease-in-out`, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h4", { className: `text-slate-50 font-sans text-xl font-semibold`, children: "DEMO Vivienda Nova" }, void 0, false, {
              fileName: "app/components/IndexComponent5.tsx",
              lineNumber: 133,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h4", { className: `text-gray-400 font-sans text-xl font-semibold`, children: "Gratis, 1 mes" }, void 0, false, {
              fileName: "app/components/IndexComponent5.tsx",
              lineNumber: 134,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/IndexComponent5.tsx",
            lineNumber: 132,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: `flex flex-col h-auto w-full items-center gap-0 pb-10 ${cardLeftVisible && screenWidth < 900 ? "opacity-100 delay-[300ms] duration-[1500ms] justify-center" : cardLeftVisible && screenWidth >= 900 ? "opacity-100 delay-[500ms] duration-[1500ms] justify-start" : "opacity-0 delay-0 duration-0"} transition-opacity ease-in-out`, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: `flex flex-row h-auto w-full items-center gap-4 ${cardLeftVisible && screenWidth < 900 ? "justify-center" : cardLeftVisible && screenWidth >= 900 ? "justify-start" : ""}`, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h2", { className: "text-[4rem] font-bold font-sans text-white", children: "0\u20AC" }, void 0, false, {
                fileName: "app/components/IndexComponent5.tsx",
                lineNumber: 138,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h4", { className: "text-slate-50 font-sans text-xl font-normal", children: "/ mes" }, void 0, false, {
                fileName: "app/components/IndexComponent5.tsx",
                lineNumber: 139,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/IndexComponent5.tsx",
              lineNumber: 137,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "text-xs font-light text-slate-100 opacity-30", children: "* Facturaci\xF3n autom\xE1tica del plan Medium al siguiente mes." }, void 0, false, {
              fileName: "app/components/IndexComponent5.tsx",
              lineNumber: 141,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/IndexComponent5.tsx",
            lineNumber: 136,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/IndexComponent5.tsx",
          lineNumber: 131,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: `h-full flex flex-col justify-start mx-auto items-start mt-10 gap-4 ${cardLeftVisible && screenWidth < 450 ? "w-[95%]" : cardLeftVisible && screenWidth < 900 ? "w-[75%]" : cardLeftVisible && screenWidth >= 900 ? "w-full" : ""}`, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: `flex flex-row items-center justify-start gap-2 ${cardLeftVisible && screenWidth < 900 ? "opacity-100 delay-[300ms] duration-[1500ms]" : cardLeftVisible && screenWidth >= 900 ? "opacity-100 delay-[1000ms] duration-[1500ms]" : "opacity-0 delay-0 duration-0"} transition-opacity ease-in-out`, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Icon, { icon: "mdi:tick-circle-outline", className: "text-slate-50 min-h-[20px] min-w-[20px]" }, void 0, false, {
              fileName: "app/components/IndexComponent5.tsx",
              lineNumber: 146,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "font-sans text-slate-50 text-sm", children: "CRM personalizado para tu empresa." }, void 0, false, {
              fileName: "app/components/IndexComponent5.tsx",
              lineNumber: 147,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/IndexComponent5.tsx",
            lineNumber: 145,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: `flex flex-row items-center justify-start gap-2 ${cardLeftVisible && screenWidth < 900 ? "opacity-100 delay-[300ms] duration-[1500ms]" : cardLeftVisible && screenWidth >= 900 ? "opacity-100 delay-[1000ms] duration-[1500ms]" : "opacity-0 delay-0 duration-0"} transition-opacity ease-in-out`, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Icon, { icon: "mdi:tick-circle-outline", className: "text-slate-50 min-h-[20px] min-w-[20px]" }, void 0, false, {
              fileName: "app/components/IndexComponent5.tsx",
              lineNumber: 150,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "font-sans text-slate-50 text-sm", children: "Base de datos hasta 15 inmuebles." }, void 0, false, {
              fileName: "app/components/IndexComponent5.tsx",
              lineNumber: 151,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/IndexComponent5.tsx",
            lineNumber: 149,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: `flex w-full flex-row items-center justify-start gap-2 ${cardLeftVisible && screenWidth < 900 ? "opacity-100 delay-[300ms] duration-[1500ms]" : cardLeftVisible && screenWidth >= 900 ? "opacity-100 delay-[1000ms] duration-[1500ms]" : "opacity-0 delay-0 duration-0"} transition-opacity ease-in-out`, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Icon, { icon: "mdi:tick-circle-outline", className: "text-slate-50 min-h-[20px] min-w-[20px]" }, void 0, false, {
              fileName: "app/components/IndexComponent5.tsx",
              lineNumber: 154,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "font-sans text-slate-50 text-sm", children: "Registro de 1 usuario administrador." }, void 0, false, {
              fileName: "app/components/IndexComponent5.tsx",
              lineNumber: 155,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/IndexComponent5.tsx",
            lineNumber: 153,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: `flex flex-row items-center justify-start gap-2 ${cardLeftVisible && screenWidth < 900 ? "opacity-100 delay-[300ms] duration-[1500ms]" : cardLeftVisible && screenWidth >= 900 ? "opacity-100 delay-[1000ms] duration-[1500ms]" : "opacity-0 delay-0 duration-0"} transition-opacity ease-in-out`, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Icon, { icon: "mdi:tick-circle-outline", className: "text-slate-50 min-h-[20px] min-w-[20px]" }, void 0, false, {
              fileName: "app/components/IndexComponent5.tsx",
              lineNumber: 158,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "font-sans text-slate-50 text-sm", children: "Geolocalizaci\xF3n de 1 \xE1rea en el mapa." }, void 0, false, {
              fileName: "app/components/IndexComponent5.tsx",
              lineNumber: 159,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/IndexComponent5.tsx",
            lineNumber: 157,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/IndexComponent5.tsx",
          lineNumber: 144,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: `w-full flex flex-row justify-center items-center ${cardLeftVisible && screenWidth < 900 ? "opacity-100 delay-[300ms] duration-[1500ms]" : cardLeftVisible && screenWidth >= 900 ? "opacity-100 delay-[1000ms] duration-[1500ms]" : "opacity-0 delay-0 duration-0"} transition-opacity ease-in-out`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("button", { className: "py-2 px-4 bg-slate-200 text-black font-sans font-semibold rounded-xl md:hover:bg-white", children: "Prueba gratuita" }, void 0, false, {
          fileName: "app/components/IndexComponent5.tsx",
          lineNumber: 163,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/components/IndexComponent5.tsx",
          lineNumber: 162,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/IndexComponent5.tsx",
        lineNumber: 130,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { ref: centerCard, className: `rounded-3xl border border-slate-100 py-6 border-opacity-30 ${cardCenterVisible && screenWidth < 900 ? "w-full h-[700px] duration-[1000ms] opacity-100 px-4 max-w-[400px]" : !cardCenterVisible && screenWidth < 900 ? "w-0 h-[700px] max-w-[400px] opacity-0 duration-[500ms]" : cardCenterVisible && screenWidth >= 900 ? "w-[40%] h-[800px] px-8 duration-[1500ms]" : !cardCenterVisible && screenWidth >= 900 ? "w-[100%] h-[950px] px-8 duration-[1500ms]" : ""} transition-all ease-in-out relative bg-black bg-opacity-100 z-[30] flex flex-col justify-start items-center`, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "w-full min-h-[220px] border-b border-slate-100 border-opacity-25 flex flex-col justify-around items-start", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: `${cardCenterVisible && screenWidth < 900 ? "opacity-100 delay-[300ms] duration-[1500ms] justify-center items-center w-full flex-row-reverse gap-2" : cardCenterVisible && screenWidth >= 900 ? "opacity-100 delay-[1000ms] duration-[1500ms] items-center justify-between flex-row" : "opacity-0 delay-0 duration-0"} transition-opacity ease-in-out w-full flex`, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: `flex flex-col justify-start items-start ${screenWidth < 365 && cardCenterVisible ? "w-full" : screenWidth < 900 && cardCenterVisible ? "w-fit" : screenWidth >= 900 && cardCenterVisible ? "w-full" : ""}`, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h4", { className: `text-slate-50 font-sans text-xl font-semibold`, children: "Plan PRO" }, void 0, false, {
                fileName: "app/components/IndexComponent5.tsx",
                lineNumber: 172,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h4", { className: `text-gray-400 font-sans text-base font-semibold`, children: "Agencias profesionales." }, void 0, false, {
                fileName: "app/components/IndexComponent5.tsx",
                lineNumber: 173,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/IndexComponent5.tsx",
              lineNumber: 171,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Icon, { icon: "bitcoin-icons:verify-outline", className: `text-blue-400 ${screenWidth < 365 ? "h-[5rem] w-[5rem]" : "h-[5rem] w-[5rem] -mr-[10px] "}` }, void 0, false, {
              fileName: "app/components/IndexComponent5.tsx",
              lineNumber: 175,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/IndexComponent5.tsx",
            lineNumber: 170,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: `flex flex-col h-auto w-full items-center gap-0 pb-10 ${cardCenterVisible && screenWidth < 900 ? "opacity-100 delay-[300ms] duration-[1500ms] justify-center" : cardCenterVisible && screenWidth >= 900 ? "opacity-100 delay-[500ms] duration-[1500ms] justify-start" : "opacity-0 delay-0 duration-0"} transition-opacity ease-in-out`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: `flex flex-row h-auto w-full justify-start items-center gap-4 ${cardCenterVisible && screenWidth < 900 ? "justify-center" : cardCenterVisible && screenWidth >= 900 ? "justify-start" : ""}`, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h2", { className: "text-[4rem] font-bold font-sans text-white", children: "54\u20AC" }, void 0, false, {
              fileName: "app/components/IndexComponent5.tsx",
              lineNumber: 179,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h4", { className: "text-slate-50 font-sans text-xl font-normal", children: "/ mes" }, void 0, false, {
              fileName: "app/components/IndexComponent5.tsx",
              lineNumber: 180,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/IndexComponent5.tsx",
            lineNumber: 178,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/components/IndexComponent5.tsx",
            lineNumber: 177,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/IndexComponent5.tsx",
          lineNumber: 169,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: `h-full flex flex-col justify-start items-start mt-10 gap-4 ${cardCenterVisible && screenWidth < 450 ? "w-[95%]" : cardCenterVisible && screenWidth < 900 ? "w-[75%]" : cardCenterVisible && screenWidth >= 900 ? "w-full" : ""}`, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: `flex flex-row items-center justify-start gap-2 ${cardCenterVisible && screenWidth < 900 ? "opacity-100 delay-[300ms] duration-[1500ms]" : cardCenterVisible && screenWidth >= 900 ? "opacity-100 delay-[1000ms] duration-[1500ms]" : "opacity-0 delay-0 duration-0"} transition-opacity ease-in-out`, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Icon, { icon: "mdi:tick-circle-outline", className: "text-slate-50 min-h-[20px] min-w-[20px]" }, void 0, false, {
              fileName: "app/components/IndexComponent5.tsx",
              lineNumber: 186,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "font-sans text-slate-50 text-sm", children: "CRM personalizado para tu empresa." }, void 0, false, {
              fileName: "app/components/IndexComponent5.tsx",
              lineNumber: 187,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/IndexComponent5.tsx",
            lineNumber: 185,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: `flex flex-row items-center justify-start gap-2 ${cardCenterVisible && screenWidth < 900 ? "opacity-100 delay-[300ms] duration-[1500ms]" : cardCenterVisible && screenWidth >= 900 ? "opacity-100 delay-[1000ms] duration-[1500ms]" : "opacity-0 delay-0 duration-0"} transition-opacity ease-in-out`, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Icon, { icon: "mdi:tick-circle-outline", className: "text-slate-50 min-h-[20px] min-w-[20px]" }, void 0, false, {
              fileName: "app/components/IndexComponent5.tsx",
              lineNumber: 190,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "font-sans text-slate-50 text-sm", children: "Base de datos hasta 10.000 inmuebles." }, void 0, false, {
              fileName: "app/components/IndexComponent5.tsx",
              lineNumber: 191,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/IndexComponent5.tsx",
            lineNumber: 189,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: `flex w-full flex-row items-center justify-start gap-2 ${cardCenterVisible && screenWidth < 900 ? "opacity-100 delay-[300ms] duration-[1500ms]" : cardCenterVisible && screenWidth >= 900 ? "opacity-100 delay-[1000ms] duration-[1500ms]" : "opacity-0 delay-0 duration-0"} transition-opacity ease-in-out`, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Icon, { icon: "mdi:tick-circle-outline", className: "text-slate-50 min-h-[20px] min-w-[20px]" }, void 0, false, {
              fileName: "app/components/IndexComponent5.tsx",
              lineNumber: 194,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "font-sans text-slate-50 text-sm", children: "Registro de 15 usuarios y 3 administradores." }, void 0, false, {
              fileName: "app/components/IndexComponent5.tsx",
              lineNumber: 195,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/IndexComponent5.tsx",
            lineNumber: 193,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: `flex flex-row items-center justify-start gap-2 ${cardCenterVisible && screenWidth < 900 ? "opacity-100 delay-[300ms] duration-[1500ms]" : cardCenterVisible && screenWidth >= 900 ? "opacity-100 delay-[1000ms] duration-[1500ms]" : "opacity-0 delay-0 duration-0"} transition-opacity ease-in-out`, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Icon, { icon: "mdi:tick-circle-outline", className: "text-slate-50 min-h-[20px] min-w-[20px]" }, void 0, false, {
              fileName: "app/components/IndexComponent5.tsx",
              lineNumber: 198,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "font-sans text-slate-50 text-sm", children: "Geolocalizaci\xF3n de 15 \xE1reas en el mapa." }, void 0, false, {
              fileName: "app/components/IndexComponent5.tsx",
              lineNumber: 199,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/IndexComponent5.tsx",
            lineNumber: 197,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: `flex flex-row items-center justify-start gap-2 ${cardCenterVisible && screenWidth < 900 ? "opacity-100 delay-[300ms] duration-[1500ms]" : cardCenterVisible && screenWidth >= 900 ? "opacity-100 delay-[1000ms] duration-[1500ms]" : "opacity-0 delay-0 duration-0"} transition-opacity ease-in-out`, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Icon, { icon: "mdi:tick-circle-outline", className: "text-slate-50 min-h-[20px] min-w-[20px]" }, void 0, false, {
              fileName: "app/components/IndexComponent5.tsx",
              lineNumber: 202,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "font-sans text-slate-50 text-sm", children: "Calendario de tareas y estad\xEDsticas de objetivos." }, void 0, false, {
              fileName: "app/components/IndexComponent5.tsx",
              lineNumber: 203,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/IndexComponent5.tsx",
            lineNumber: 201,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: `flex flex-row items-center justify-start gap-2 ${cardCenterVisible && screenWidth < 900 ? "opacity-100 delay-[300ms] duration-[1500ms]" : cardCenterVisible && screenWidth >= 900 ? "opacity-100 delay-[1000ms] duration-[1500ms]" : "opacity-0 delay-0 duration-0"} transition-opacity ease-in-out`, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Icon, { icon: "mdi:tick-circle-outline", className: "text-slate-50 min-h-[20px] min-w-[20px]" }, void 0, false, {
              fileName: "app/components/IndexComponent5.tsx",
              lineNumber: 206,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "font-sans text-slate-50 text-sm", children: "Cartera de clientes hasta 200 clientes." }, void 0, false, {
              fileName: "app/components/IndexComponent5.tsx",
              lineNumber: 207,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/IndexComponent5.tsx",
            lineNumber: 205,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: `flex flex-row items-center justify-start gap-2 ${cardCenterVisible && screenWidth < 900 ? "opacity-100 delay-[300ms] duration-[1500ms]" : cardCenterVisible && screenWidth >= 900 ? "opacity-100 delay-[1000ms] duration-[1500ms]" : "opacity-0 delay-0 duration-0"} transition-opacity ease-in-out`, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Icon, { icon: "mdi:tick-circle-outline", className: "text-slate-50 min-h-[20px] min-w-[20px]" }, void 0, false, {
              fileName: "app/components/IndexComponent5.tsx",
              lineNumber: 210,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "font-sans text-slate-50 text-sm", children: "Copia de seguridad semanal." }, void 0, false, {
              fileName: "app/components/IndexComponent5.tsx",
              lineNumber: 211,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/IndexComponent5.tsx",
            lineNumber: 209,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: `flex flex-row items-center justify-start gap-2 ${cardCenterVisible && screenWidth < 900 ? "opacity-100 delay-[300ms] duration-[1500ms]" : cardCenterVisible && screenWidth >= 900 ? "opacity-100 delay-[1000ms] duration-[1500ms]" : "opacity-0 delay-0 duration-0"} transition-opacity ease-in-out`, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Icon, { icon: "mdi:tick-circle-outline", className: "text-slate-50 min-h-[20px] min-w-[20px]" }, void 0, false, {
              fileName: "app/components/IndexComponent5.tsx",
              lineNumber: 214,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "font-sans text-slate-50 text-sm", children: "Soporte y asistencia via e-mail." }, void 0, false, {
              fileName: "app/components/IndexComponent5.tsx",
              lineNumber: 215,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/IndexComponent5.tsx",
            lineNumber: 213,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/IndexComponent5.tsx",
          lineNumber: 184,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: `w-full flex flex-row justify-center items-center ${cardCenterVisible ? "opacity-100 delay-[1000ms] duration-[1500ms]" : "opacity-0 delay-0 duration-0"} transition-opacity ease-in-out`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("button", { className: "py-2 px-4 bg-slate-200 text-black font-sans font-semibold rounded-xl md:hover:bg-white", children: "Elegir PRO" }, void 0, false, {
          fileName: "app/components/IndexComponent5.tsx",
          lineNumber: 219,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/components/IndexComponent5.tsx",
          lineNumber: 218,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/IndexComponent5.tsx",
        lineNumber: 168,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { ref: rightCard, className: `${cardRightVisible && screenWidth < 900 ? "w-full border px-4 delay-100 duration-[1000ms] max-w-[400px]" : !cardRightVisible && screenWidth < 900 ? "w-0 border-none opacity-0 duration-[1000ms] max-w-[400px]" : cardRightVisible && screenWidth >= 900 ? "w-1/3 border border-l-0 rounded-tl-none rounded-bl-none px-8" : !cardRightVisible && screenWidth >= 900 ? "w-0 border-none px-8 duration-[1000ms]" : ""}  py-6 transition-all ease-in-out rounded-3xl border-slate-100 border-opacity-30 h-[700px] flex flex-col justify-start items-center`, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "w-full min-h-[250px] border-b border-slate-100 border-opacity-25 flex flex-col justify-around items-start", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: `${cardRightVisible && screenWidth < 365 ? "opacity-100 delay-[300ms] duration-[1500ms] flex-row-reverse justify-center gap-0" : cardRightVisible && screenWidth < 900 ? "opacity-100 delay-[300ms] duration-[1500ms] flex-row-reverse justify-center gap-5" : cardRightVisible && screenWidth >= 900 ? "opacity-100 delay-[1000ms] duration-[1500ms] flex-row justify-between" : "opacity-0 delay-0 duration-0"} transition-opacity ease-in-out flex items-center w-full`, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: `flex flex-col justify-start items-start ${screenWidth < 365 && cardCenterVisible ? "w-full" : screenWidth < 900 && cardCenterVisible ? "w-fit" : screenWidth >= 900 && cardCenterVisible ? "w-full" : ""}`, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h4", { className: `text-slate-50 font-sans text-xl font-semibold`, children: "Plan MEDIUM" }, void 0, false, {
                fileName: "app/components/IndexComponent5.tsx",
                lineNumber: 228,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h4", { className: `text-gray-400 font-sans text-base font-semibold`, children: "Para empresas peque\xF1as" }, void 0, false, {
                fileName: "app/components/IndexComponent5.tsx",
                lineNumber: 229,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/IndexComponent5.tsx",
              lineNumber: 227,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: ` ${screenWidth >= 365 ? "-mr-[20px]" : ""}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Icon, { icon: "bitcoin-icons:verify-outline", className: "text-slate-400 h-[4rem] w-[4rem]" }, void 0, false, {
              fileName: "app/components/IndexComponent5.tsx",
              lineNumber: 232,
              columnNumber: 17
            }, this) }, void 0, false, {
              fileName: "app/components/IndexComponent5.tsx",
              lineNumber: 231,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/IndexComponent5.tsx",
            lineNumber: 226,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: `flex flex-col h-auto w-full items-center gap-0 pb-10 ${cardRightVisible && screenWidth < 900 ? "opacity-100 delay-[300ms] duration-[1500ms] justify-center" : cardRightVisible && screenWidth >= 900 ? "opacity-100 delay-[500ms] duration-[1500ms] justify-start" : "opacity-0 delay-0 duration-0"} transition-opacity ease-in-out`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: `flex flex-row h-auto w-full justify-start items-center gap-4 ${cardRightVisible && screenWidth < 900 ? "justify-center" : cardRightVisible && screenWidth >= 900 ? "justify-start" : ""}`, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h2", { className: "text-[4rem] font-bold font-sans text-white", children: "24\u20AC" }, void 0, false, {
              fileName: "app/components/IndexComponent5.tsx",
              lineNumber: 237,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h4", { className: "text-slate-50 font-sans text-xl font-normal", children: "/ mes" }, void 0, false, {
              fileName: "app/components/IndexComponent5.tsx",
              lineNumber: 238,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/IndexComponent5.tsx",
            lineNumber: 236,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/components/IndexComponent5.tsx",
            lineNumber: 235,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/IndexComponent5.tsx",
          lineNumber: 225,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: `h-full flex flex-col justify-start items-start mt-10 gap-4 ${cardRightVisible && screenWidth < 450 ? "w-[95%]" : cardRightVisible && screenWidth < 900 ? "w-[75%]" : cardRightVisible && screenWidth >= 900 ? "w-full" : ""}`, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: `flex flex-row items-center justify-start gap-2 ${cardRightVisible && screenWidth < 900 ? "opacity-100 delay-[300ms] duration-[1500ms]" : cardRightVisible && screenWidth >= 900 ? "opacity-100 delay-[1000ms] duration-[1500ms]" : "opacity-0 delay-0 duration-0"} transition-opacity ease-in-out`, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Icon, { icon: "mdi:tick-circle-outline", className: "text-slate-50 min-h-[20px] min-w-[20px]" }, void 0, false, {
              fileName: "app/components/IndexComponent5.tsx",
              lineNumber: 244,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "font-sans text-slate-50 text-sm", children: "CRM personalizado para tu empresa." }, void 0, false, {
              fileName: "app/components/IndexComponent5.tsx",
              lineNumber: 245,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/IndexComponent5.tsx",
            lineNumber: 243,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: `flex flex-row items-center justify-start gap-2 ${cardRightVisible && screenWidth < 900 ? "opacity-100 delay-[300ms] duration-[1500ms]" : cardRightVisible && screenWidth >= 900 ? "opacity-100 delay-[1000ms] duration-[1500ms]" : "opacity-0 delay-0 duration-0"} transition-opacity ease-in-out`, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Icon, { icon: "mdi:tick-circle-outline", className: "text-slate-50 min-h-[20px] min-w-[20px]" }, void 0, false, {
              fileName: "app/components/IndexComponent5.tsx",
              lineNumber: 248,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "font-sans text-slate-50 text-sm", children: "Base de datos hasta 300 inmuebles." }, void 0, false, {
              fileName: "app/components/IndexComponent5.tsx",
              lineNumber: 249,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/IndexComponent5.tsx",
            lineNumber: 247,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: `flex w-full flex-row items-center justify-start gap-2 ${cardRightVisible && screenWidth < 900 ? "opacity-100 delay-[300ms] duration-[1500ms]" : cardRightVisible && screenWidth >= 900 ? "opacity-100 delay-[1000ms] duration-[1500ms]" : "opacity-0 delay-0 duration-0"} transition-opacity ease-in-out`, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Icon, { icon: "mdi:tick-circle-outline", className: "text-slate-50 min-h-[20px] min-w-[20px]" }, void 0, false, {
              fileName: "app/components/IndexComponent5.tsx",
              lineNumber: 252,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "font-sans text-slate-50 text-sm", children: "Registro de 3 usuarios y 1 administrador." }, void 0, false, {
              fileName: "app/components/IndexComponent5.tsx",
              lineNumber: 253,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/IndexComponent5.tsx",
            lineNumber: 251,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: `flex flex-row items-center justify-start gap-2 ${cardRightVisible && screenWidth < 900 ? "opacity-100 delay-[300ms] duration-[1500ms]" : cardRightVisible && screenWidth >= 900 ? "opacity-100 delay-[1000ms] duration-[1500ms]" : "opacity-0 delay-0 duration-0"} transition-opacity ease-in-out`, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Icon, { icon: "mdi:tick-circle-outline", className: "text-slate-50 min-h-[20px] min-w-[20px]" }, void 0, false, {
              fileName: "app/components/IndexComponent5.tsx",
              lineNumber: 256,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "font-sans text-slate-50 text-sm", children: "Geolocalizaci\xF3n de 2 \xE1reas en el mapa." }, void 0, false, {
              fileName: "app/components/IndexComponent5.tsx",
              lineNumber: 257,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/IndexComponent5.tsx",
            lineNumber: 255,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: `flex flex-row items-center justify-start gap-2 ${cardRightVisible && screenWidth < 900 ? "opacity-100 delay-[300ms] duration-[1500ms]" : cardRightVisible && screenWidth >= 900 ? "opacity-100 delay-[1000ms] duration-[1500ms]" : "opacity-0 delay-0 duration-0"} transition-opacity ease-in-out`, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Icon, { icon: "mdi:tick-circle-outline", className: "text-slate-50 min-h-[20px] min-w-[20px]" }, void 0, false, {
              fileName: "app/components/IndexComponent5.tsx",
              lineNumber: 260,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "font-sans text-slate-50 text-sm", children: "Calendario de tareas y estad\xEDsticas de objetivos." }, void 0, false, {
              fileName: "app/components/IndexComponent5.tsx",
              lineNumber: 261,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/IndexComponent5.tsx",
            lineNumber: 259,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/IndexComponent5.tsx",
          lineNumber: 242,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: `w-full flex flex-row justify-center items-center ${cardRightVisible && screenWidth < 900 ? "opacity-100 delay-[300ms] duration-[1500ms]" : cardRightVisible && screenWidth >= 900 ? "opacity-100 delay-[1000ms] duration-[1500ms]" : "opacity-0 delay-0 duration-0"} transition-opacity ease-in-out`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("button", { className: "py-2 px-4 bg-slate-200 text-black font-sans font-semibold rounded-xl md:hover:bg-white", children: "Prueba gratuita" }, void 0, false, {
          fileName: "app/components/IndexComponent5.tsx",
          lineNumber: 265,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/components/IndexComponent5.tsx",
          lineNumber: 264,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/IndexComponent5.tsx",
        lineNumber: 224,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { style: {
        filter: "blur(20px)",
        WebkitFilter: "blur(20px)",
        // For Safari
        transform: "translateZ(0) translate(-50%, -50%)"
      }, className: `${cardCenterVisible && screenWidth < 900 ? "opacity-100 w-[100%] duration-[1000ms] max-h-[720px] max-w-[420px]" : !cardCenterVisible && screenWidth < 900 ? "opacity-0 w-0 duration-[500ms]" : cardCenterVisible && screenWidth >= 900 ? "w-[36%] opacity-100 duration-[1500ms]" : !cardCenterVisible && screenWidth >= 900 ? "opacity-0 w-[80%] duration-[0ms]" : "opacity-0 w-full duration-0"} transition-all ease-in-out h-[800px] bg-blue-300 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 rounded-xl z-[10]` }, void 0, false, {
        fileName: "app/components/IndexComponent5.tsx",
        lineNumber: 269,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/IndexComponent5.tsx",
      lineNumber: 128,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "w-fit h-auto flex flex-row items-center justify-center group hover:border-slate-100 border border-black rounded-xl py-2 px-3 hover:cursor-pointer transition-all ease-in-out duration-[600ms]", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Icon, { icon: "material-symbols-light:cards-star", className: "text-slate-100 w-[2.5rem] h-[2.5rem] mr-2 group-hover:text-white group-hover:cursor-pointer" }, void 0, false, {
        fileName: "app/components/IndexComponent5.tsx",
        lineNumber: 277,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "text-slate-100 font-sans text-sm font-medium group-hover:text-white group-hover:cursor-pointer", children: "Comparar planes" }, void 0, false, {
        fileName: "app/components/IndexComponent5.tsx",
        lineNumber: 278,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Icon, { icon: "si:arrow-right-duotone", className: "text-slate-100 w-[2rem] h-[2rem] group-hover:text-white group-hover:cursor-pointer" }, void 0, false, {
        fileName: "app/components/IndexComponent5.tsx",
        lineNumber: 279,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/IndexComponent5.tsx",
      lineNumber: 276,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/IndexComponent5.tsx",
    lineNumber: 123,
    columnNumber: 10
  }, this);
};
_s5(IndexComponent5, "r48cp/5NkIUH61JNvYHkQuJeXcg=", false, function() {
  return [useScreenWidth];
});
_c5 = IndexComponent5;
var IndexComponent5_default = IndexComponent5;
var _c5;
$RefreshReg$(_c5, "IndexComponent5");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/_index.tsx
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s6 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_index.tsx"
  );
}
var links = () => [{
  rel: "stylesheet",
  href: styles_default
}];
var meta = () => {
  return [{
    title: "Nova Vivienda"
  }, {
    name: "description",
    content: "Bienvenido a Nova Vivienda"
  }, {
    name: "viewport",
    content: "width=device-width, initial-scale=1"
  }, {
    name: "keywords",
    content: "Nova Vivienda, CRM inmobiliario, gesti\xF3n inmobiliaria, software inmobiliario, inmobiliaria en Valencia, CRM para inmobiliarias, gesti\xF3n de propiedades, sistema de CRM, software para inmobiliarias, herramientas para inmobiliarias, gesti\xF3n de clientes, agencia inmobiliaria, venta de propiedades, alquiler de propiedades, CRM para ventas, software de gesti\xF3n inmobiliaria, bienes ra\xEDces en Valencia, administraci\xF3n de propiedades, propiedades en venta, propiedades en alquiler, software de bienes ra\xEDces, Valencia inmobiliaria, administraci\xF3n inmobiliaria, captaci\xF3n de propiedades, CRM para agentes inmobiliarios, gesti\xF3n de leads inmobiliarios, marketing inmobiliario, CRM para ventas inmobiliarias, alquiler de inmuebles, venta de inmuebles, administraci\xF3n de alquileres, automatizaci\xF3n inmobiliaria, CRM de bienes ra\xEDces, marketing digital para inmobiliarias, captaci\xF3n de clientes inmobiliarios, gesti\xF3n de contactos inmobiliarios, CRM para empresas inmobiliarias, propiedades en Valencia, CRM con integraci\xF3n de WhatsApp, seguimiento de clientes inmobiliarios, plataforma inmobiliaria, gesti\xF3n de viviendas, software para gesti\xF3n de inmuebles, inmobiliarias en Valencia, asesor\xEDa inmobiliaria, CRM con gesti\xF3n de clientes, administraci\xF3n de inmuebles, sistema de gesti\xF3n inmobiliaria, CRM para alquileres, tecnolog\xEDa inmobiliaria, software de administraci\xF3n inmobiliaria"
  }];
};
var Index = () => {
  _s6();
  (0, import_react33.useEffect)(() => {
    window.scrollTo(0, 0);
  }, []);
  const [viewportHeight, setViewportHeight] = (0, import_react33.useState)(typeof window !== "undefined" ? window.innerHeight : 0);
  const [isH2Visible, setIsH2Visible] = (0, import_react33.useState)(false);
  const [isH3Visible, setIsH3Visible] = (0, import_react33.useState)(false);
  const [isH2Visible2, setIsH2Visible2] = (0, import_react33.useState)(false);
  const [isH3Visible2, setIsH3Visible2] = (0, import_react33.useState)(false);
  const [isVideoContainerVisible, setIsVideoContainerVisible] = (0, import_react33.useState)(false);
  const [isVideoContainerVisible2, setIsVideoContainerVisible2] = (0, import_react33.useState)(false);
  const sectionRef = (0, import_react33.useRef)(null);
  const sectionRef2 = (0, import_react33.useRef)(null);
  const layer1Ref = (0, import_react33.useRef)(null);
  const layer2Ref = (0, import_react33.useRef)(null);
  const layer3Ref = (0, import_react33.useRef)(null);
  const navRef = (0, import_react33.useRef)(null);
  const [scrollY, setScrollY] = (0, import_react33.useState)(0);
  const {
    screenWidth
  } = useScreenWidth();
  (0, import_react33.useEffect)(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsH2Visible(true);
          setIsH3Visible(true);
          setIsVideoContainerVisible(true);
        } else {
          setIsH2Visible(false);
          setIsH3Visible(false);
          setIsVideoContainerVisible(false);
        }
      });
    }, {
      threshold: 0.5
    });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  (0, import_react33.useEffect)(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsH2Visible2(true);
          setIsH3Visible2(true);
          setIsVideoContainerVisible2(true);
        } else {
          setIsH2Visible2(false);
          setIsH3Visible2(false);
          setIsVideoContainerVisible2(false);
        }
      });
    }, {
      threshold: 0.5
    });
    if (sectionRef2.current) {
      observer.observe(sectionRef2.current);
    }
    return () => {
      if (sectionRef2.current) {
        observer.unobserve(sectionRef2.current);
      }
    };
  }, []);
  (0, import_react33.useEffect)(() => {
    if (typeof window === "undefined")
      return;
    const handleResize = () => setViewportHeight(window.innerHeight);
    window.addEventListener("resize", handleResize);
    setViewportHeight(window.innerHeight);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  (0, import_react33.useEffect)(() => {
    let lastScrollY = window.scrollY;
    setScrollY(lastScrollY);
    let ticking = false;
    if (layer2Ref.current) {
      if (lastScrollY >= 0 && lastScrollY < 260) {
        layer2Ref.current.style.position = "relative";
        layer2Ref.current.style.transform = `translateY(${lastScrollY * -3}px)`;
      }
    }
    if (layer1Ref.current) {
      layer1Ref.current.style.transform = `translateY(${lastScrollY * 3}px)`;
    }
    if (layer2Ref.current) {
      if (lastScrollY >= 0 && lastScrollY < 260) {
        layer2Ref.current.style.opacity = 0;
        layer2Ref.current.style.transition = `opacity 0.6s ease-in-out`;
        layer2Ref.current.style.top = "780px";
        layer2Ref.current.style.transform = "translateY(0px)";
        layer2Ref.current.style.position = "fixed";
        layer2Ref.current.style.transform = `translateY(${lastScrollY * -3}px)`;
        layer2Ref.current.style.opacity = 1;
        layer2Ref.current.style.transition = `opacity 0.6s ease-in-out`;
      } else if (lastScrollY >= 260 && lastScrollY < 840) {
        layer2Ref.current.style.opacity = 1;
        layer2Ref.current.style.transition = `opacity 0.6s ease-in-out`;
      } else if (lastScrollY >= 840) {
        layer2Ref.current.style.opacity = 0;
        layer2Ref.current.style.transition = `opacity 0.6s ease-in-out`;
      }
    }
    if (layer3Ref.current) {
      layer3Ref.current.style.opacity = lastScrollY >= 320 && lastScrollY < 755 ? 1 : 0;
      layer3Ref.current.style.transition = `opacity 0.3s ease-in-out`;
    }
    if (navRef.current) {
      navRef.current.style.opacity = lastScrollY >= 260 ? 1 : 0;
      navRef.current.style.transition = `opacity 1s ease-in-out`;
    }
    const handleScroll = () => {
      lastScrollY = window.scrollY;
      setScrollY(lastScrollY);
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (layer1Ref.current) {
            layer1Ref.current.style.transform = `translateY(${lastScrollY * 3}px)`;
          }
          if (layer2Ref.current) {
            if (lastScrollY >= 0 && lastScrollY < 260) {
              layer2Ref.current.style.opacity = 0;
              layer2Ref.current.style.transition = `opacity 0.6s ease-in-out`;
              layer2Ref.current.style.top = "780px";
              layer2Ref.current.style.transform = "translateY(0px)";
              layer2Ref.current.style.position = "fixed";
              layer2Ref.current.style.transform = `translateY(${lastScrollY * -3}px)`;
              layer2Ref.current.style.opacity = 1;
              layer2Ref.current.style.transition = `opacity 0.6s ease-in-out`;
            } else if (lastScrollY > 260 && lastScrollY < 840) {
              layer2Ref.current.style.opacity = 1;
              layer2Ref.current.style.transition = `opacity 0.6s ease-in-out`;
            } else if (lastScrollY >= 840) {
              layer2Ref.current.style.opacity = 0;
              layer2Ref.current.style.transition = `opacity 0.6s ease-in-out`;
            }
          }
          if (layer3Ref.current) {
            layer3Ref.current.style.opacity = lastScrollY >= 320 && lastScrollY < 755 ? 1 : 0;
            layer3Ref.current.style.transition = `opacity 0.3s ease-in-out`;
          }
          if (navRef.current) {
            navRef.current.style.opacity = lastScrollY >= 260 ? 1 : 0;
            navRef.current.style.transition = `opacity 1s ease-in-out`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const [scrollTop, setScrollTop] = (0, import_react33.useState)(0);
  (0, import_react33.useEffect)(() => {
    const updateScrollPosition = () => {
      setScrollTop(window.scrollY || document.documentElement.scrollTop);
    };
    updateScrollPosition();
    window.addEventListener("scroll", updateScrollPosition);
    return () => {
      window.removeEventListener("scroll", updateScrollPosition);
    };
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { style: {
      backgroundImage: "url('/blackbg4edit2.jpg')",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      position: "relative",
      overflow: "hidden",
      width: "100%",
      height: "1700px"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("nav", { ref: navRef, className: `fixed top-0 left-0 right-0 ${screenWidth < 450 ? "w-[95%] px-0 flex flex-row justify-center items-center" : "w-fit px-16"} mx-auto mt-3 rounded-xl py-auto z-[99] backdrop-blur-sm bg-gray-950 bg-opacity-50 opacity-0 flex flex-col justify-center items-center border-[0.9px] border-gray-400 border-opacity-50`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("ul", { className: "flex justify-center items-center w-fit px-8 mx-auto gap-8 text-gray-200 pt-4 text-sans font-medium pb-4 z-[99]", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("a", { href: "/", children: "Inicio" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 253,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 252,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("a", { href: "/about", children: "Precios" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 256,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 255,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("a", { href: "/contact", children: "Servicios" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 259,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 258,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 251,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 250,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "fixed top-0 left-0 z-50", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "opacity-0", children: [
          "scrolling: ",
          scrollY
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 264,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "opacity-0", children: [
          "screenWidth: ",
          screenWidth
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 265,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "opacity-0", children: [
          "scrollTop: ",
          scrollTop
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 266,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 263,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { ref: layer1Ref, className: `layer1 z-10`, style: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        transform: "translateY(0px)",
        // Initial transform to avoid bouncing
        transition: "transform 0.1s ease-out",
        // Optional smoothness in movement
        ...screenWidth < 1300 ? {
          display: "flex",
          flexDirection: "column",
          justifyContent: "end",
          alignItems: "center"
        } : {}
      }, children: screenWidth < 450 ? /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("img", { src: "/background2.png", alt: "Background", style: {
        height: "auto",
        margin: "0",
        ...screenWidth < 300 ? {
          maxWidth: "145%",
          width: "145%",
          transform: "translateX(-30px)"
        } : screenWidth < 330 ? {
          maxWidth: "140%",
          width: "140%",
          transform: "translateX(-20px)"
        } : screenWidth < 350 ? {
          maxWidth: "135%",
          width: "135%",
          transform: "translateX(-20px)"
        } : screenWidth < 370 ? {
          maxWidth: "130%",
          width: "130%",
          transform: "translateX(-20px)"
        } : screenWidth < 385 ? {
          maxWidth: "130%",
          width: "130%",
          transform: "translateX(-20px)"
        } : screenWidth < 400 ? {
          maxWidth: "120%",
          width: "120%",
          transform: "translateX(-20px)"
        } : screenWidth < 450 ? {
          maxWidth: "150%",
          width: "150%",
          transform: "translateX(-20px)"
        } : {
          maxWidth: "180%",
          width: "180%"
        }
      } }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 286,
        columnNumber: 32
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("img", { src: "/background.png", alt: "Background", style: {
        transition: "transform 0.5s ease-in-out",
        height: "auto",
        margin: "0",
        ...screenWidth < 550 ? {
          maxWidth: "200%",
          width: "200%",
          transform: "translateX(-30px)"
        } : screenWidth < 650 ? {
          maxWidth: "180%",
          width: "180%"
        } : screenWidth < 750 ? {
          maxWidth: "160%",
          width: "160%"
        } : screenWidth < 930 ? {
          maxWidth: "140%",
          width: "140%"
        } : {
          maxWidth: "100%",
          width: "100%"
        }
      } }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 321,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 268,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h1", { ref: layer2Ref, className: `font-bold p-0 mx-auto w-full text-center drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] justify-center items-center ${screenWidth < 330 ? "text-[2.5rem]" : screenWidth < 380 ? "text-[3rem]" : screenWidth < 435 ? "text-[3.5rem]" : screenWidth < 489 ? "text-[4rem]" : screenWidth < 540 ? "text-[4.5rem]" : screenWidth < 595 ? "text-[5rem]" : screenWidth < 650 ? "text-[5.5rem]" : screenWidth < 810 ? "text-[6rem]" : screenWidth < 810 ? "text-[7rem]" : screenWidth < 860 ? "text-[7.5rem]" : screenWidth < 1070 ? "text-[8rem]" : screenWidth < 1290 ? "text-[10rem]" : screenWidth < 1490 ? "text-[12rem]" : screenWidth < 1600 ? "text-[14rem]" : "text-[15rem]"}`, style: {
        background: "linear-gradient(170deg, #f9fafb, #e5e7eb, #9ca3af, #6b7280)",
        color: "transparent",
        WebkitBackgroundClip: "text",
        transition: "all 0.5s ease-in-out",
        opacity: 1,
        textAlign: "center",
        marginTop: screenWidth < 330 ? "120px" : screenWidth < 380 ? "100px" : screenWidth < 435 ? "80px" : screenWidth < 1290 ? "50px" : "0"
      }, children: "Vivienda Nova" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 345,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { ref: layer3Ref, className: `fixed left-[50%] translate-x-[-50%] z-[0]  opacity-0 ${screenWidth < 435 ? "w-[90%] top-[63%] translate-y-[-50%]" : screenWidth < 450 ? "w-[90%] top-[63%] translate-y-[-50%]" : screenWidth < 500 ? "w-[90%] top-[63%] translate-y-[-50%]" : screenWidth < 600 ? "w-[95%] top-[50%] translate-y-[-50%]" : screenWidth < 760 ? "w-[95%] top-[250px]" : screenWidth < 800 ? "top-[250px] w-[740px] " : "top-[330px] w-[780px]"}`, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h2", { className: `font-sans text-gray-50 font-semibold ${screenWidth < 430 ? "text-2xl" : "text-3xl"} text-center z-[5]`, children: "Una nueva forma de vender" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 360,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("img", { src: `${screenWidth < 500 ? "/iphone15v1.png" : "/imacMockup.png"}`, alt: "imacMockup", style: {
          height: "auto",
          margin: "0 auto",
          ...screenWidth < 360 && viewportHeight < 705 ? {
            width: "75%",
            marginBottom: "30px"
          } : screenWidth < 390 && viewportHeight < 705 ? {
            width: "70%",
            marginBottom: "30px"
          } : screenWidth < 430 && viewportHeight < 705 ? {
            width: "65%",
            marginBottom: "30px"
          } : screenWidth < 500 && viewportHeight < 705 ? {
            width: "52%"
          } : screenWidth < 360 && viewportHeight < 755 ? {
            width: "75%",
            marginBottom: "50px"
          } : screenWidth < 390 && viewportHeight < 755 ? {
            width: "75%",
            marginBottom: "50px"
          } : screenWidth < 430 && viewportHeight < 755 ? {
            width: "75%",
            marginBottom: "50px"
          } : screenWidth < 500 && viewportHeight < 755 ? {
            width: "58%",
            marginBottom: "50px"
          } : screenWidth < 360 && viewportHeight < 780 ? {
            width: "80%",
            marginBottom: "60px"
          } : screenWidth < 390 && viewportHeight < 780 ? {
            width: "80%",
            marginBottom: "60px"
          } : screenWidth < 430 && viewportHeight < 780 ? {
            width: "76%",
            marginBottom: "60px"
          } : screenWidth < 500 && viewportHeight < 780 ? {
            width: "65%",
            marginBottom: "60px"
          } : screenWidth < 360 && viewportHeight < 810 ? {
            width: "85%",
            marginBottom: "80px"
          } : screenWidth < 390 && viewportHeight < 810 ? {
            width: "85%",
            marginBottom: "80px"
          } : screenWidth < 430 && viewportHeight < 810 ? {
            width: "80%",
            marginBottom: "65px"
          } : screenWidth < 500 && viewportHeight < 810 ? {
            width: "68%",
            marginBottom: "50px"
          } : screenWidth < 360 && viewportHeight >= 810 ? {
            width: "85%",
            marginBottom: "100px"
          } : screenWidth < 390 && viewportHeight >= 810 ? {
            width: "85%",
            marginBottom: "100px"
          } : screenWidth < 430 && viewportHeight >= 810 ? {
            width: "70%",
            marginBottom: "100px"
          } : screenWidth < 500 && viewportHeight >= 810 ? {
            width: "70%",
            marginBottom: "100px"
          } : {
            width: "100%"
          }
        } }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 361,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 358,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 239,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { ref: sectionRef, className: `bg-black h-auto flex flex-col justify-start items-center gap-1 indexinfocontainer1 pb-20 transition-opacity duration-[1500ms] ease-in-out`, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h2", { className: `${isH2Visible ? "opacity-100" : "opacity-0"} transition-opacity duration-[1500ms] ease-in-out text-gray-50 font-sans ${screenWidth < 400 ? "text-3xl" : "text-4xl"} font-bold text-center`, children: "Controla tus inmuebles." }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 432,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h3", { className: `${isH3Visible ? "opacity-70" : "opacity-0"} transition-opacity duration-[1500ms] ease-in-out text-gray-300 font-sans ${screenWidth < 400 ? "text-2xl" : "text-3xl"} font-bold text-center`, children: "Visualiza los datos." }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 433,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: `bg-gray-700 h-auto relative z-10 ${screenWidth < 1280 ? "w-[95%]" : " w-[1200px]"} rounded-3xl border border-gray-800 bg-opacity-0 mt-4 ${isVideoContainerVisible ? "opacity-100" : "opacity-0"} transition-opacity duration-[1500ms] ease-in-out`, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "relative z-[10] w-full h-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("video", { autoPlay: true, loop: true, muted: true, playsInline: true, className: "w-full z-10 h-full object-cover p-2 rounded-3xl opacity-100", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("source", { src: "/video1.webm", type: "video/webm", className: "border border-gray-600 " }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 437,
            columnNumber: 15
          }, this),
          "Your browser does not support the video tag."
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 436,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 435,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "absolute top-1/2 left-1/2 w-[103%] h-[103%] bg-white opacity-30 rounded-3xl blur-2xl transform -translate-x-1/2 -translate-y-1/2 z-0" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 441,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 434,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: `${isVideoContainerVisible ? "opacity-100" : "opacity-0"} transition-opacity duration-[1500ms] ease-in-out text-gray-400 font-sans font-medium pt-4 ${screenWidth < 400 ? "text-lg" : "text-xl"}  ${screenWidth <= 1e3 ? "w-[90%]" : screenWidth <= 1500 ? "w-1/2" : "w-1/3"} text-center`, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("strong", { className: "text-white", children: "Busca tus inmuebles." }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 444,
          columnNumber: 11
        }, this),
        " Filtra las propiedades y analiza qu\xE9 est\xE1 ocurriendo en tu estrategia de venta."
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 443,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 431,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { ref: sectionRef2, className: `h-auto flex flex-col justify-start items-center gap-1 indexinfocontainer1 ${screenWidth < 600 ? "pb-8" : "pb-20"} transition-opacity duration-[1500ms] ease-in-out`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: `h-auto relative z-10 ${screenWidth < 1280 ? "w-[95%]" : "w-[95%]"} rounded-3xl ${isVideoContainerVisible2 ? "opacity-100" : "opacity-0"} transition-opacity duration-[1500ms] ease-in-out flex ${screenWidth < 600 ? "flex-col-reverse justify-center items-center mt-0" : "flex-row justify-between mt-10"} `, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: `h-auto flex flex-col justify-center items-center ${screenWidth < 600 ? "w-full" : "w-1/2"} gap-4`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: `h-fit flex flex-col justify-center gap-4 ${screenWidth < 600 ? "items-center" : "items-start"}`, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h2", { className: `${isH2Visible2 ? "opacity-100" : "opacity-0"} transition-opacity duration-[1500ms] ease-in-out text-gray-50 font-sans font-bold ${screenWidth < 600 ? "text-center text-3xl pt-4" : "text-4xl"}`, children: "No es c\xF3mo vendes." }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 453,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h3", { className: `${isH3Visible2 ? "opacity-70" : "opacity-0"} transition-opacity duration-[1500ms] ease-in-out text-gray-300 font-sans font-bold ${screenWidth < 600 ? "text-center text-2xl px-3" : "text-3xl"}`, children: "Es c\xF3mo organizas tu estrategia." }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 454,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("button", { className: `${isH3Visible2 ? "opacity-100" : "opacity-0"} transition-opacity duration-[1500ms] ease-in-out text-gray-950 bg-gray-100 p-2 px-3 font-sans text-lg font-medium rounded-xl`, children: "Empieza ya" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 455,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 452,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 451,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: `relative z-[10] h-full ${screenWidth < 600 ? "w-full" : "w-1/2"}`, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "absolute top-1/2 left-1/2 w-[103%] h-[103%] bg-white opacity-30 rounded-3xl blur-2xl transform -translate-x-1/2 -translate-y-1/2 z-0" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 459,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "relative z-[10]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("video", { autoPlay: true, loop: true, muted: true, playsInline: true, className: "w-full z-10 h-full object-cover p-2 rounded-3xl opacity-100", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("source", { src: "/video2.webm", type: "video/webm", className: "border border-gray-600 " }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 462,
            columnNumber: 17
          }, this),
          "Your browser does not support the video tag."
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 461,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 460,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 458,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 450,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 449,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(ServiciosList_default, {}, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 469,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(IndexComponent2_default, {}, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 470,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(IndexComponent3_default, {}, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 471,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(IndexComponent4_default, {}, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 472,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(IndexComponent5_default, {}, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 473,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 238,
    columnNumber: 10
  }, this);
};
_s6(Index, "ye6HcdW/yolZ5ilomXJGluUpTF8=", false, function() {
  return [useScreenWidth];
});
_c6 = Index;
var index_default = Index;
var _c6;
$RefreshReg$(_c6, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  index_default as default,
  links,
  meta
};
//# sourceMappingURL=/build/routes/_index-HESG27OZ.js.map
