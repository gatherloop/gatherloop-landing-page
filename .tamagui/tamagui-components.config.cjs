var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/@tamagui/adapt/dist/cjs/Adapt.js
var require_Adapt = __commonJS({
  "node_modules/@tamagui/adapt/dist/cjs/Adapt.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var Adapt_exports = {};
    __export2(Adapt_exports, {
      Adapt: () => Adapt2,
      AdaptContents: () => AdaptContents,
      AdaptParentContext: () => AdaptParentContext,
      useAdaptParent: () => useAdaptParent2
    });
    module2.exports = __toCommonJS2(Adapt_exports);
    var import_jsx_runtime13 = require("react/jsx-runtime");
    var import_core30 = require("@tamagui/core-node");
    var import_react13 = require("react");
    var AdaptParentContext = (0, import_react13.createContext)(null);
    var AdaptContents = /* @__PURE__ */ __name((props) => {
      const context = (0, import_react13.useContext)(AdaptParentContext);
      if (!(context == null ? void 0 : context.Contents)) {
        throw new Error("Adapt not supported by this component");
      }
      return (0, import_react13.createElement)(context.Contents, props);
    }, "AdaptContents");
    AdaptContents["shouldForwardSpace"] = true;
    var useAdaptParent2 = /* @__PURE__ */ __name(({
      Contents
    }) => {
      const [when, setWhen] = (0, import_react13.useState)(null);
      const AdaptProvider = (0, import_react13.useMemo)(() => {
        const context = {
          Contents,
          setWhen
        };
        function AdaptProviderView(props) {
          return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(AdaptParentContext.Provider, { value: context, children: props.children });
        }
        __name(AdaptProviderView, "AdaptProviderView");
        return AdaptProviderView;
      }, [Contents]);
      return {
        AdaptProvider,
        when
      };
    }, "useAdaptParent");
    var Adapt2 = (0, import_core30.withStaticProperties)(
      /* @__PURE__ */ __name(function Adapt22({ platform: platform2, when, children }) {
        const context = (0, import_react13.useContext)(AdaptParentContext);
        let enabled = !platform2;
        if (platform2 === "touch")
          enabled = import_core30.isTouchable;
        if (platform2 === "native")
          enabled = !import_core30.isWeb;
        if (platform2 === "web")
          enabled = import_core30.isWeb;
        (0, import_core30.useIsomorphicLayoutEffect)(() => {
          if (!enabled)
            return;
          context == null ? void 0 : context.setWhen(when || enabled);
        }, [when, context, enabled]);
        if (!enabled) {
          return null;
        }
        return children;
      }, "Adapt2"),
      {
        Contents: AdaptContents
      }
    );
  }
});

// node_modules/@tamagui/adapt/dist/cjs/index.js
var require_cjs = __commonJS({
  "node_modules/@tamagui/adapt/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_Adapt(), module2.exports);
  }
});

// node_modules/@tamagui/compose-refs/dist/cjs/compose-refs.js
var require_compose_refs = __commonJS({
  "node_modules/@tamagui/compose-refs/dist/cjs/compose-refs.js"(exports, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      // If the importer is in node compatibility mode or this is not an ESM
      // file that has been converted to a CommonJS file using a Babel-
      // compatible transform (i.e. "__esModule" has not been set), then set
      // "default" to the CommonJS "module.exports" for node compatibility.
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var compose_refs_exports = {};
    __export2(compose_refs_exports, {
      composeRefs: () => composeRefs2,
      useComposedRefs: () => useComposedRefs2
    });
    module2.exports = __toCommonJS2(compose_refs_exports);
    var React13 = __toESM2(require("react"));
    function setRef2(ref, value) {
      if (typeof ref === "function") {
        ref(value);
      } else if (ref) {
        ;
        ref.current = value;
      }
    }
    __name(setRef2, "setRef");
    function composeRefs2(...refs) {
      return (node) => refs.forEach((ref) => setRef2(ref, node));
    }
    __name(composeRefs2, "composeRefs");
    function useComposedRefs2(...refs) {
      return React13.useCallback(composeRefs2(...refs), refs);
    }
    __name(useComposedRefs2, "useComposedRefs");
  }
});

// node_modules/@tamagui/compose-refs/dist/cjs/index.js
var require_cjs2 = __commonJS({
  "node_modules/@tamagui/compose-refs/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_compose_refs(), module2.exports);
  }
});

// node_modules/@tamagui/create-context/dist/cjs/create-context.js
var require_create_context = __commonJS({
  "node_modules/@tamagui/create-context/dist/cjs/create-context.js"(exports, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      // If the importer is in node compatibility mode or this is not an ESM
      // file that has been converted to a CommonJS file using a Babel-
      // compatible transform (i.e. "__esModule" has not been set), then set
      // "default" to the CommonJS "module.exports" for node compatibility.
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var create_context_exports = {};
    __export2(create_context_exports, {
      createContext: () => createContext4,
      createContextScope: () => createContextScope4
    });
    module2.exports = __toCommonJS2(create_context_exports);
    var import_jsx_runtime13 = require("react/jsx-runtime");
    var React13 = __toESM2(require("react"));
    function createContext4(rootComponentName, defaultContext) {
      const Context = React13.createContext(defaultContext);
      function Provider(props) {
        const { children, ...context } = props;
        const value = React13.useMemo(() => context, Object.values(context));
        return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Context.Provider, { value, children });
      }
      __name(Provider, "Provider");
      function useContext3(consumerName) {
        const context = React13.useContext(Context);
        if (context)
          return context;
        if (defaultContext !== void 0)
          return defaultContext;
        throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
      }
      __name(useContext3, "useContext");
      Provider.displayName = `${rootComponentName}Provider`;
      return [Provider, useContext3];
    }
    __name(createContext4, "createContext");
    function createContextScope4(scopeName, createContextScopeDeps = []) {
      let defaultContexts = [];
      function createContext22(rootComponentName, defaultContext) {
        const BaseContext = React13.createContext(defaultContext);
        const index3 = defaultContexts.length;
        defaultContexts = [...defaultContexts, defaultContext];
        function Provider(props) {
          const { scope, children, ...context } = props;
          const Context = (scope == null ? void 0 : scope[scopeName][index3]) || BaseContext;
          const value = React13.useMemo(
            () => context,
            Object.values(context)
          );
          return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Context.Provider, { value, children });
        }
        __name(Provider, "Provider");
        function useContext3(consumerName, scope, options) {
          const Context = (scope == null ? void 0 : scope[scopeName][index3]) || BaseContext;
          const context = React13.useContext(Context);
          if (context)
            return context;
          if (defaultContext !== void 0)
            return defaultContext;
          const missingContextMessage = `\`${consumerName}\` must be used within \`${rootComponentName}\``;
          if (options == null ? void 0 : options.fallback) {
            if ((options == null ? void 0 : options.warn) !== false) {
              console.warn(missingContextMessage);
            }
            return options.fallback;
          } else {
            throw new Error(missingContextMessage);
          }
        }
        __name(useContext3, "useContext");
        Provider.displayName = `${rootComponentName}Provider`;
        return [Provider, useContext3];
      }
      __name(createContext22, "createContext2");
      const createScope = /* @__PURE__ */ __name(() => {
        const scopeContexts = defaultContexts.map((defaultContext) => {
          return React13.createContext(defaultContext);
        });
        return /* @__PURE__ */ __name(function useScope(scope) {
          const contexts = (scope == null ? void 0 : scope[scopeName]) || scopeContexts;
          return React13.useMemo(
            () => ({ [`__scope${scopeName}`]: { ...scope, [scopeName]: contexts } }),
            [scope, contexts]
          );
        }, "useScope");
      }, "createScope");
      createScope.scopeName = scopeName;
      return [
        createContext22,
        composeContextScopes(createScope, ...createContextScopeDeps)
      ];
    }
    __name(createContextScope4, "createContextScope");
    function composeContextScopes(...scopes) {
      const baseScope = scopes[0];
      if (scopes.length === 1)
        return baseScope;
      const createScope = /* @__PURE__ */ __name(() => {
        const scopeHooks = scopes.map((createScope2) => ({
          useScope: createScope2(),
          scopeName: createScope2.scopeName
        }));
        return /* @__PURE__ */ __name(function useComposedScopes(overrideScopes) {
          const nextScopes = scopeHooks.reduce((nextScopes2, { useScope, scopeName }) => {
            const scopeProps = useScope(overrideScopes);
            const currentScope = scopeProps[`__scope${scopeName}`];
            return { ...nextScopes2, ...currentScope };
          }, {});
          return React13.useMemo(
            () => ({ [`__scope${baseScope.scopeName}`]: nextScopes }),
            [nextScopes]
          );
        }, "useComposedScopes");
      }, "createScope");
      createScope.scopeName = baseScope.scopeName;
      return createScope;
    }
    __name(composeContextScopes, "composeContextScopes");
  }
});

// node_modules/@tamagui/create-context/dist/cjs/index.js
var require_cjs3 = __commonJS({
  "node_modules/@tamagui/create-context/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_create_context(), module2.exports);
  }
});

// node_modules/@tamagui/animate-presence/dist/cjs/LayoutGroupContext.js
var require_LayoutGroupContext = __commonJS({
  "node_modules/@tamagui/animate-presence/dist/cjs/LayoutGroupContext.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var LayoutGroupContext_exports = {};
    __export2(LayoutGroupContext_exports, {
      LayoutGroupContext: () => LayoutGroupContext
    });
    module2.exports = __toCommonJS2(LayoutGroupContext_exports);
    var import_react13 = require("react");
    var LayoutGroupContext = (0, import_react13.createContext)({});
  }
});

// node_modules/@tamagui/use-presence/dist/cjs/PresenceContext.js
var require_PresenceContext = __commonJS({
  "node_modules/@tamagui/use-presence/dist/cjs/PresenceContext.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var PresenceContext_exports = {};
    __export2(PresenceContext_exports, {
      PresenceContext: () => PresenceContext
    });
    module2.exports = __toCommonJS2(PresenceContext_exports);
    var import_react13 = require("react");
    var PresenceContext = (0, import_react13.createContext)(null);
  }
});

// node_modules/@tamagui/use-presence/dist/cjs/usePresence.js
var require_usePresence = __commonJS({
  "node_modules/@tamagui/use-presence/dist/cjs/usePresence.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var usePresence_exports = {};
    __export2(usePresence_exports, {
      isPresent: () => isPresent,
      useIsPresent: () => useIsPresent,
      usePresence: () => usePresence
    });
    module2.exports = __toCommonJS2(usePresence_exports);
    var import_react13 = require("react");
    var import_PresenceContext = require_PresenceContext();
    function usePresence() {
      const context = (0, import_react13.useContext)(import_PresenceContext.PresenceContext);
      if (!context) {
        return [true, null, context];
      }
      const { isPresent: isPresent2, onExitComplete, register } = context;
      const id = (0, import_react13.useId)() || "";
      (0, import_react13.useEffect)(() => register(id), [id, register]);
      const safeToRemove = /* @__PURE__ */ __name(() => onExitComplete == null ? void 0 : onExitComplete(id), "safeToRemove");
      return !isPresent2 && onExitComplete ? [false, safeToRemove, context] : [true, void 0, context];
    }
    __name(usePresence, "usePresence");
    function useIsPresent() {
      return isPresent((0, import_react13.useContext)(import_PresenceContext.PresenceContext));
    }
    __name(useIsPresent, "useIsPresent");
    function isPresent(context) {
      return context === null ? true : context.isPresent;
    }
    __name(isPresent, "isPresent");
  }
});

// node_modules/@tamagui/use-presence/dist/cjs/index.js
var require_cjs4 = __commonJS({
  "node_modules/@tamagui/use-presence/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_PresenceContext(), module2.exports);
    __reExport2(src_exports, require_usePresence(), module2.exports);
  }
});

// node_modules/@tamagui/animate-presence/dist/cjs/PresenceChild.js
var require_PresenceChild = __commonJS({
  "node_modules/@tamagui/animate-presence/dist/cjs/PresenceChild.js"(exports, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      // If the importer is in node compatibility mode or this is not an ESM
      // file that has been converted to a CommonJS file using a Babel-
      // compatible transform (i.e. "__esModule" has not been set), then set
      // "default" to the CommonJS "module.exports" for node compatibility.
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var PresenceChild_exports = {};
    __export2(PresenceChild_exports, {
      PresenceChild: () => PresenceChild
    });
    module2.exports = __toCommonJS2(PresenceChild_exports);
    var import_jsx_runtime13 = require("react/jsx-runtime");
    var import_use_presence = require_cjs4();
    var React13 = __toESM2(require("react"));
    var import_react13 = require("react");
    var PresenceChild = /* @__PURE__ */ __name(({
      children,
      initial,
      isPresent,
      onExitComplete,
      exitVariant,
      enterVariant,
      presenceAffectsLayout
    }) => {
      const presenceChildren = React13.useMemo(newChildrenMap, []);
      const id = (0, import_react13.useId)() || "";
      const context = React13.useMemo(
        () => {
          return {
            id,
            initial,
            isPresent,
            exitVariant,
            enterVariant,
            onExitComplete: (id2) => {
              presenceChildren.set(id2, true);
              for (const isComplete of presenceChildren.values()) {
                if (!isComplete) {
                  return;
                }
              }
              onExitComplete == null ? void 0 : onExitComplete();
            },
            register: (id2) => {
              presenceChildren.set(id2, false);
              return () => presenceChildren.delete(id2);
            }
          };
        },
        /**
         * If the presence of a child affects the layout of the components around it,
         * we want to make a new context value to ensure they get re-rendered
         * so they can detect that layout change.
         */
        // eslint-disable-next-line react-hooks/exhaustive-deps
        presenceAffectsLayout ? void 0 : [isPresent, exitVariant, enterVariant]
      );
      React13.useMemo(() => {
        presenceChildren.forEach((_, key) => presenceChildren.set(key, false));
      }, [isPresent]);
      React13.useEffect(() => {
        !(isPresent || presenceChildren.size) && (onExitComplete == null ? void 0 : onExitComplete());
      }, [isPresent]);
      return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_use_presence.PresenceContext.Provider, { value: context, children });
    }, "PresenceChild");
    function newChildrenMap() {
      return /* @__PURE__ */ new Map();
    }
    __name(newChildrenMap, "newChildrenMap");
  }
});

// node_modules/@tamagui/animate-presence/dist/cjs/AnimatePresence.js
var require_AnimatePresence = __commonJS({
  "node_modules/@tamagui/animate-presence/dist/cjs/AnimatePresence.js"(exports, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      // If the importer is in node compatibility mode or this is not an ESM
      // file that has been converted to a CommonJS file using a Babel-
      // compatible transform (i.e. "__esModule" has not been set), then set
      // "default" to the CommonJS "module.exports" for node compatibility.
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var AnimatePresence_exports = {};
    __export2(AnimatePresence_exports, {
      AnimatePresence: () => AnimatePresence2
    });
    module2.exports = __toCommonJS2(AnimatePresence_exports);
    var import_jsx_runtime13 = require("react/jsx-runtime");
    var import_core30 = require("@tamagui/core-node");
    var import_react13 = __toESM2(require("react"));
    var import_LayoutGroupContext = require_LayoutGroupContext();
    var import_PresenceChild = require_PresenceChild();
    var getChildKey = /* @__PURE__ */ __name((child) => child.key || "", "getChildKey");
    var isDev = process.env.NODE_ENV !== "production";
    function updateChildLookup(children, allChildren) {
      const seenChildren = isDev ? /* @__PURE__ */ new Set() : null;
      children.forEach((child) => {
        const key = getChildKey(child);
        if (isDev && seenChildren && seenChildren.has(key)) {
          console.warn(
            `Children of AnimatePresence require unique keys. "${key}" is a duplicate.`
          );
          seenChildren.add(key);
        }
        allChildren.set(key, child);
      });
    }
    __name(updateChildLookup, "updateChildLookup");
    function onlyElements(children) {
      const filtered = [];
      import_react13.Children.forEach(children, (child, index3) => {
        if ((0, import_react13.isValidElement)(child)) {
          if (!child.key) {
            if (process.env.NODE_ENV === "development") {
              console.warn(
                "No key given to AnimatePresence child, assigning index as key"
              );
            }
            filtered.push(
              import_react13.default.cloneElement(child, {
                key: index3
              })
            );
          } else {
            filtered.push(child);
          }
        }
      });
      return filtered;
    }
    __name(onlyElements, "onlyElements");
    var AnimatePresence2 = /* @__PURE__ */ __name(({
      children,
      enterVariant,
      exitVariant,
      initial = true,
      onExitComplete,
      exitBeforeEnter,
      presenceAffectsLayout = true
    }) => {
      let forceRender = (0, import_core30.useForceUpdate)();
      const isClientMounted = (0, import_core30.useDidFinishSSR)();
      const forceRenderLayoutGroup = (0, import_react13.useContext)(import_LayoutGroupContext.LayoutGroupContext).forceRender;
      if (forceRenderLayoutGroup)
        forceRender = forceRenderLayoutGroup;
      const isMounted = (0, import_react13.useRef)(false);
      const filteredChildren = onlyElements(children);
      let childrenToRender = filteredChildren;
      const exiting = /* @__PURE__ */ new Set();
      const presentChildren = (0, import_react13.useRef)(childrenToRender);
      const allChildren = (0, import_react13.useRef)(/* @__PURE__ */ new Map()).current;
      const isInitialRender = (0, import_react13.useRef)(true);
      (0, import_react13.useEffect)(() => {
        isMounted.current = true;
        return () => {
          isMounted.current = false;
          isInitialRender.current = true;
          allChildren.clear();
          exiting.clear();
        };
      }, []);
      (0, import_core30.useIsomorphicLayoutEffect)(() => {
        isInitialRender.current = false;
        updateChildLookup(filteredChildren, allChildren);
        presentChildren.current = childrenToRender;
      });
      const hasWarned = process.env.NODE_ENV === "development" ? (0, import_react13.useRef)(false) : null;
      if (isInitialRender.current) {
        return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_jsx_runtime13.Fragment, { children: childrenToRender.map((child) => /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
          import_PresenceChild.PresenceChild,
          {
            isPresent: Boolean(isClientMounted ? true : isMounted.current),
            exitVariant,
            enterVariant,
            initial: initial ? void 0 : false,
            presenceAffectsLayout,
            children: child
          },
          getChildKey(child)
        )) });
      }
      childrenToRender = [...childrenToRender];
      const presentKeys = presentChildren.current.map(getChildKey);
      const targetKeys = filteredChildren.map(getChildKey);
      const numPresent = presentKeys.length;
      for (let i = 0; i < numPresent; i++) {
        const key = presentKeys[i];
        if (targetKeys.indexOf(key) === -1) {
          exiting.add(key);
        }
      }
      if (exitBeforeEnter && exiting.size) {
        childrenToRender = [];
      }
      exiting.forEach((key) => {
        if (targetKeys.indexOf(key) !== -1)
          return;
        const child = allChildren.get(key);
        if (!child)
          return;
        const insertionIndex = presentKeys.indexOf(key);
        childrenToRender.splice(
          insertionIndex,
          0,
          /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
            import_PresenceChild.PresenceChild,
            {
              isPresent: false,
              onExitComplete: () => {
                allChildren.delete(key);
                exiting.delete(key);
                const removeIndex = presentChildren.current.findIndex(
                  (presentChild) => presentChild.key === key
                );
                presentChildren.current.splice(removeIndex, 1);
                if (!exiting.size) {
                  presentChildren.current = filteredChildren;
                  if (isMounted.current === false)
                    return;
                  forceRender();
                  onExitComplete == null ? void 0 : onExitComplete();
                }
              },
              exitVariant,
              enterVariant,
              presenceAffectsLayout,
              children: child
            },
            getChildKey(child)
          )
        );
      });
      childrenToRender = childrenToRender.map((child) => {
        const key = child.key;
        return exiting.has(key) ? child : /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
          import_PresenceChild.PresenceChild,
          {
            isPresent: true,
            exitVariant,
            enterVariant,
            presenceAffectsLayout,
            children: child
          },
          getChildKey(child)
        );
      });
      if (process.env.NODE_ENV === "development") {
        const shouldWarn = exitBeforeEnter && childrenToRender.length > 1;
        if (shouldWarn && hasWarned && !hasWarned.current) {
          hasWarned.current = true;
          console.log(
            `You're attempting to animate multiple children within AnimatePresence, but its exitBeforeEnter prop is set to true. This can lead to odd visual behaviour.`
          );
        }
      }
      return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_jsx_runtime13.Fragment, { children: exiting.size ? childrenToRender : childrenToRender.map((child) => (0, import_react13.cloneElement)(child)) });
    }, "AnimatePresence");
    AnimatePresence2.displayName = "AnimatePresence";
  }
});

// node_modules/@tamagui/animate-presence/dist/cjs/index.js
var require_cjs5 = __commonJS({
  "node_modules/@tamagui/animate-presence/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_AnimatePresence(), module2.exports);
    __reExport2(src_exports, require_cjs4(), module2.exports);
  }
});

// node_modules/aria-hidden/dist/es5/index.js
var require_es5 = __commonJS({
  "node_modules/aria-hidden/dist/es5/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.suppressOthers = exports.supportsInert = exports.inertOthers = exports.hideOthers = void 0;
    var getDefaultParent = /* @__PURE__ */ __name(function(originalTarget) {
      if (typeof document === "undefined") {
        return null;
      }
      var sampleTarget = Array.isArray(originalTarget) ? originalTarget[0] : originalTarget;
      return sampleTarget.ownerDocument.body;
    }, "getDefaultParent");
    var counterMap = /* @__PURE__ */ new WeakMap();
    var uncontrolledNodes = /* @__PURE__ */ new WeakMap();
    var markerMap = {};
    var lockCount = 0;
    var unwrapHost = /* @__PURE__ */ __name(function(node) {
      return node && (node.host || unwrapHost(node.parentNode));
    }, "unwrapHost");
    var correctTargets = /* @__PURE__ */ __name(function(parent, targets) {
      return targets.map(function(target) {
        if (parent.contains(target)) {
          return target;
        }
        var correctedTarget = unwrapHost(target);
        if (correctedTarget && parent.contains(correctedTarget)) {
          return correctedTarget;
        }
        console.error("aria-hidden", target, "in not contained inside", parent, ". Doing nothing");
        return null;
      }).filter(function(x) {
        return Boolean(x);
      });
    }, "correctTargets");
    var applyAttributeToOthers = /* @__PURE__ */ __name(function(originalTarget, parentNode, markerName, controlAttribute) {
      var targets = correctTargets(parentNode, Array.isArray(originalTarget) ? originalTarget : [originalTarget]);
      if (!markerMap[markerName]) {
        markerMap[markerName] = /* @__PURE__ */ new WeakMap();
      }
      var markerCounter = markerMap[markerName];
      var hiddenNodes = [];
      var elementsToKeep = /* @__PURE__ */ new Set();
      var elementsToStop = new Set(targets);
      var keep = /* @__PURE__ */ __name(function(el) {
        if (!el || elementsToKeep.has(el)) {
          return;
        }
        elementsToKeep.add(el);
        keep(el.parentNode);
      }, "keep");
      targets.forEach(keep);
      var deep = /* @__PURE__ */ __name(function(parent) {
        if (!parent || elementsToStop.has(parent)) {
          return;
        }
        Array.prototype.forEach.call(parent.children, function(node) {
          if (elementsToKeep.has(node)) {
            deep(node);
          } else {
            var attr = node.getAttribute(controlAttribute);
            var alreadyHidden = attr !== null && attr !== "false";
            var counterValue = (counterMap.get(node) || 0) + 1;
            var markerValue = (markerCounter.get(node) || 0) + 1;
            counterMap.set(node, counterValue);
            markerCounter.set(node, markerValue);
            hiddenNodes.push(node);
            if (counterValue === 1 && alreadyHidden) {
              uncontrolledNodes.set(node, true);
            }
            if (markerValue === 1) {
              node.setAttribute(markerName, "true");
            }
            if (!alreadyHidden) {
              node.setAttribute(controlAttribute, "true");
            }
          }
        });
      }, "deep");
      deep(parentNode);
      elementsToKeep.clear();
      lockCount++;
      return function() {
        hiddenNodes.forEach(function(node) {
          var counterValue = counterMap.get(node) - 1;
          var markerValue = markerCounter.get(node) - 1;
          counterMap.set(node, counterValue);
          markerCounter.set(node, markerValue);
          if (!counterValue) {
            if (!uncontrolledNodes.has(node)) {
              node.removeAttribute(controlAttribute);
            }
            uncontrolledNodes.delete(node);
          }
          if (!markerValue) {
            node.removeAttribute(markerName);
          }
        });
        lockCount--;
        if (!lockCount) {
          counterMap = /* @__PURE__ */ new WeakMap();
          counterMap = /* @__PURE__ */ new WeakMap();
          uncontrolledNodes = /* @__PURE__ */ new WeakMap();
          markerMap = {};
        }
      };
    }, "applyAttributeToOthers");
    var hideOthers4 = /* @__PURE__ */ __name(function(originalTarget, parentNode, markerName) {
      if (markerName === void 0) {
        markerName = "data-aria-hidden";
      }
      var targets = Array.from(Array.isArray(originalTarget) ? originalTarget : [originalTarget]);
      var activeParentNode = parentNode || getDefaultParent(originalTarget);
      if (!activeParentNode) {
        return function() {
          return null;
        };
      }
      targets.push.apply(targets, Array.from(activeParentNode.querySelectorAll("[aria-live]")));
      return applyAttributeToOthers(targets, activeParentNode, markerName, "aria-hidden");
    }, "hideOthers");
    exports.hideOthers = hideOthers4;
    var inertOthers = /* @__PURE__ */ __name(function(originalTarget, parentNode, markerName) {
      if (markerName === void 0) {
        markerName = "data-inert-ed";
      }
      var activeParentNode = parentNode || getDefaultParent(originalTarget);
      if (!activeParentNode) {
        return function() {
          return null;
        };
      }
      return applyAttributeToOthers(originalTarget, activeParentNode, markerName, "inert");
    }, "inertOthers");
    exports.inertOthers = inertOthers;
    var supportsInert = /* @__PURE__ */ __name(function() {
      return typeof HTMLElement !== "undefined" && HTMLElement.prototype.hasOwnProperty("inert");
    }, "supportsInert");
    exports.supportsInert = supportsInert;
    var suppressOthers = /* @__PURE__ */ __name(function(originalTarget, parentNode, markerName) {
      if (markerName === void 0) {
        markerName = "data-suppressed";
      }
      return ((0, exports.supportsInert)() ? exports.inertOthers : exports.hideOthers)(originalTarget, parentNode, markerName);
    }, "suppressOthers");
    exports.suppressOthers = suppressOthers;
  }
});

// node_modules/@tamagui/aria-hidden/dist/cjs/AriaHidden.js
var require_AriaHidden = __commonJS({
  "node_modules/@tamagui/aria-hidden/dist/cjs/AriaHidden.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var AriaHidden_exports = {};
    __export2(AriaHidden_exports, {
      hideOthers: () => import_aria_hidden3.hideOthers
    });
    module2.exports = __toCommonJS2(AriaHidden_exports);
    var import_aria_hidden3 = require_es5();
  }
});

// node_modules/@tamagui/aria-hidden/dist/cjs/index.js
var require_cjs6 = __commonJS({
  "node_modules/@tamagui/aria-hidden/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_AriaHidden(), module2.exports);
  }
});

// node_modules/@radix-ui/react-use-callback-ref/dist/index.js
var require_dist = __commonJS({
  "node_modules/@radix-ui/react-use-callback-ref/dist/index.js"(exports) {
    var e;
    var r;
    var t = (e = {}, r = require("react"), Object.keys(r).forEach(function(t2) {
      "default" !== t2 && "__esModule" !== t2 && Object.defineProperty(e, t2, { enumerable: true, get: function() {
        return r[t2];
      } });
    }), e);
    exports.useCallbackRef = function(e2) {
      const r2 = t.useRef(e2);
      return t.useEffect(() => {
        r2.current = e2;
      }), t.useMemo(() => (...e3) => {
        var t2;
        return null === (t2 = r2.current) || void 0 === t2 ? void 0 : t2.call(r2, ...e3);
      }, []);
    };
  }
});

// node_modules/@radix-ui/react-use-escape-keydown/dist/index.js
var require_dist2 = __commonJS({
  "node_modules/@radix-ui/react-use-escape-keydown/dist/index.js"(exports) {
    var e;
    var t;
    var n = require_dist().useCallbackRef;
    var r = (e = {}, t = require("react"), Object.keys(t).forEach(function(n2) {
      "default" !== n2 && "__esModule" !== n2 && Object.defineProperty(e, n2, { enumerable: true, get: function() {
        return t[n2];
      } });
    }), e);
    exports.useEscapeKeydown = function(e2) {
      const t2 = n(e2);
      r.useEffect(() => {
        const e3 = /* @__PURE__ */ __name((e4) => {
          "Escape" === e4.key && t2(e4);
        }, "e");
        return document.addEventListener("keydown", e3), () => document.removeEventListener("keydown", e3);
      }, [t2]);
    };
  }
});

// node_modules/@tamagui/use-event/dist/cjs/useGet.js
var require_useGet = __commonJS({
  "node_modules/@tamagui/use-event/dist/cjs/useGet.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var useGet_exports = {};
    __export2(useGet_exports, {
      useGet: () => useGet4
    });
    module2.exports = __toCommonJS2(useGet_exports);
    var import_react13 = require("react");
    var isWeb8 = process.env.TAMAGUI_TARGET === "web";
    var isClient3 = typeof window !== "undefined";
    var useIsomorphicLayoutEffect3 = !isWeb8 || isClient3 ? import_react13.useLayoutEffect : import_react13.useEffect;
    function useGet4(currentValue, initialValue, forwardToFunction) {
      const curRef = (0, import_react13.useRef)(initialValue ?? currentValue);
      useIsomorphicLayoutEffect3(() => {
        curRef.current = currentValue;
      });
      return (0, import_react13.useCallback)(
        forwardToFunction ? (...args) => {
          var _a;
          return (_a = curRef.current) == null ? void 0 : _a.apply(null, args);
        } : () => curRef.current,
        []
      );
    }
    __name(useGet4, "useGet");
  }
});

// node_modules/@tamagui/use-event/dist/cjs/useEvent.js
var require_useEvent = __commonJS({
  "node_modules/@tamagui/use-event/dist/cjs/useEvent.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var useEvent_exports = {};
    __export2(useEvent_exports, {
      useEvent: () => useEvent4
    });
    module2.exports = __toCommonJS2(useEvent_exports);
    var import_useGet2 = require_useGet();
    function useEvent4(callback) {
      return (0, import_useGet2.useGet)(callback, defaultValue2, true);
    }
    __name(useEvent4, "useEvent");
    var defaultValue2 = /* @__PURE__ */ __name(() => {
      throw new Error("Cannot call an event handler while rendering.");
    }, "defaultValue");
  }
});

// node_modules/@tamagui/use-event/dist/cjs/index.js
var require_cjs7 = __commonJS({
  "node_modules/@tamagui/use-event/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_useEvent(), module2.exports);
    __reExport2(src_exports, require_useGet(), module2.exports);
  }
});

// node_modules/@tamagui/dismissable/dist/cjs/Dismissable.js
var require_Dismissable = __commonJS({
  "node_modules/@tamagui/dismissable/dist/cjs/Dismissable.js"(exports, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      // If the importer is in node compatibility mode or this is not an ESM
      // file that has been converted to a CommonJS file using a Babel-
      // compatible transform (i.e. "__esModule" has not been set), then set
      // "default" to the CommonJS "module.exports" for node compatibility.
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var Dismissable_exports = {};
    __export2(Dismissable_exports, {
      Dismissable: () => Dismissable2,
      DismissableBranch: () => DismissableBranch
    });
    module2.exports = __toCommonJS2(Dismissable_exports);
    var import_jsx_runtime13 = require("react/jsx-runtime");
    var import_react_use_escape_keydown = require_dist2();
    var import_compose_refs3 = require_cjs2();
    var import_core30 = require("@tamagui/core-node");
    var import_use_event2 = require_cjs7();
    var React13 = __toESM2(require("react"));
    var ReactDOM2 = __toESM2(require("react-dom"));
    function dispatchDiscreteCustomEvent(target, event) {
      if (target)
        ReactDOM2.flushSync(() => target.dispatchEvent(event));
    }
    __name(dispatchDiscreteCustomEvent, "dispatchDiscreteCustomEvent");
    var DISMISSABLE_LAYER_NAME = "Dismissable";
    var CONTEXT_UPDATE = "dismissable.update";
    var POINTER_DOWN_OUTSIDE = "dismissable.pointerDownOutside";
    var FOCUS_OUTSIDE = "dismissable.focusOutside";
    var originalBodyPointerEvents;
    var DismissableContext = React13.createContext({
      layers: /* @__PURE__ */ new Set(),
      layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
      branches: /* @__PURE__ */ new Set()
    });
    var Dismissable2 = React13.forwardRef(
      (props, forwardedRef) => {
        const {
          disableOutsidePointerEvents = false,
          forceUnmount,
          onEscapeKeyDown,
          onPointerDownOutside,
          onFocusOutside,
          onInteractOutside,
          onDismiss,
          ...layerProps
        } = props;
        const context = React13.useContext(DismissableContext);
        const [node, setNode] = React13.useState(null);
        const [, force] = React13.useState({});
        const composedRefs = (0, import_compose_refs3.useComposedRefs)(forwardedRef, (node2) => setNode(node2));
        const layers = Array.from(context.layers);
        const [highestLayerWithOutsidePointerEventsDisabled] = [
          ...context.layersWithOutsidePointerEventsDisabled
        ].slice(-1);
        const highestLayerWithOutsidePointerEventsDisabledIndex = layers.indexOf(
          highestLayerWithOutsidePointerEventsDisabled
        );
        const index3 = node ? layers.indexOf(node) : -1;
        const isBodyPointerEventsDisabled = context.layersWithOutsidePointerEventsDisabled.size > 0;
        const isPointerEventsEnabled = index3 >= highestLayerWithOutsidePointerEventsDisabledIndex;
        const pointerDownOutside = usePointerDownOutside((event) => {
          const target = event.target;
          const isPointerDownOnBranch = [...context.branches].some(
            (branch) => branch.contains(target)
          );
          if (!isPointerEventsEnabled || isPointerDownOnBranch)
            return;
          onPointerDownOutside == null ? void 0 : onPointerDownOutside(event);
          onInteractOutside == null ? void 0 : onInteractOutside(event);
          if (!event.defaultPrevented)
            onDismiss == null ? void 0 : onDismiss();
        });
        const focusOutside = useFocusOutside((event) => {
          const target = event.target;
          const isFocusInBranch = [...context.branches].some(
            (branch) => branch.contains(target)
          );
          if (isFocusInBranch)
            return;
          onFocusOutside == null ? void 0 : onFocusOutside(event);
          onInteractOutside == null ? void 0 : onInteractOutside(event);
          if (!event.defaultPrevented)
            onDismiss == null ? void 0 : onDismiss();
        });
        (0, import_react_use_escape_keydown.useEscapeKeydown)((event) => {
          const isHighestLayer = index3 === context.layers.size - 1;
          if (!isHighestLayer)
            return;
          onEscapeKeyDown == null ? void 0 : onEscapeKeyDown(event);
          if (!event.defaultPrevented && onDismiss) {
            event.preventDefault();
            onDismiss();
          }
        });
        React13.useEffect(() => {
          if (!node)
            return;
          if (disableOutsidePointerEvents) {
            if (context.layersWithOutsidePointerEventsDisabled.size === 0) {
              originalBodyPointerEvents = document.body.style.pointerEvents;
              document.body.style.pointerEvents = "none";
            }
            context.layersWithOutsidePointerEventsDisabled.add(node);
          }
          context.layers.add(node);
          dispatchUpdate();
          return () => {
            if (disableOutsidePointerEvents && context.layersWithOutsidePointerEventsDisabled.size === 1) {
              document.body.style.pointerEvents = originalBodyPointerEvents;
            }
          };
        }, [node, disableOutsidePointerEvents, context]);
        React13.useEffect(() => {
          if (forceUnmount)
            return;
          return () => {
            if (!node)
              return;
            context.layers.delete(node);
            context.layersWithOutsidePointerEventsDisabled.delete(node);
            dispatchUpdate();
          };
        }, [node, context, forceUnmount]);
        React13.useEffect(() => {
          const handleUpdate = /* @__PURE__ */ __name(() => {
            force({});
          }, "handleUpdate");
          document.addEventListener(CONTEXT_UPDATE, handleUpdate);
          return () => document.removeEventListener(CONTEXT_UPDATE, handleUpdate);
        }, []);
        return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
          "div",
          {
            ...layerProps,
            ref: composedRefs,
            style: {
              display: "contents",
              pointerEvents: isBodyPointerEventsDisabled ? isPointerEventsEnabled ? "auto" : "none" : void 0,
              // @ts-ignore
              ...props.style
            },
            onFocusCapture: (0, import_core30.composeEventHandlers)(
              // @ts-ignore
              props.onFocusCapture,
              focusOutside.onFocusCapture
            ),
            onBlurCapture: (0, import_core30.composeEventHandlers)(
              // @ts-ignore
              props.onBlurCapture,
              focusOutside.onBlurCapture
            ),
            onPointerDownCapture: (0, import_core30.composeEventHandlers)(
              // @ts-ignore
              props.onPointerDownCapture,
              pointerDownOutside.onPointerDownCapture
            )
          }
        );
      }
    );
    Dismissable2.displayName = DISMISSABLE_LAYER_NAME;
    var BRANCH_NAME = "DismissableBranch";
    var DismissableBranch = React13.forwardRef(
      (props, forwardedRef) => {
        const context = React13.useContext(DismissableContext);
        const ref = React13.useRef(null);
        const composedRefs = (0, import_compose_refs3.useComposedRefs)(forwardedRef, ref);
        React13.useEffect(() => {
          const node = ref.current;
          if (node) {
            context.branches.add(node);
            return () => {
              context.branches.delete(node);
            };
          }
        }, [context.branches]);
        return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { style: { display: "contents" }, ...props, ref: composedRefs });
      }
    );
    DismissableBranch.displayName = BRANCH_NAME;
    function usePointerDownOutside(onPointerDownOutside) {
      const handlePointerDownOutside = (0, import_use_event2.useEvent)(onPointerDownOutside);
      const isPointerInsideReactTreeRef = React13.useRef(false);
      const handleClickRef = React13.useRef(() => {
      });
      React13.useEffect(() => {
        const handlePointerDown = /* @__PURE__ */ __name((event) => {
          if (event.target && !isPointerInsideReactTreeRef.current) {
            let handleAndDispatchPointerDownOutsideEvent2 = /* @__PURE__ */ __name(function() {
              handleAndDispatchCustomEvent(
                POINTER_DOWN_OUTSIDE,
                handlePointerDownOutside,
                eventDetail,
                { discrete: true }
              );
            }, "handleAndDispatchPointerDownOutsideEvent2");
            var handleAndDispatchPointerDownOutsideEvent = handleAndDispatchPointerDownOutsideEvent2;
            const eventDetail = { originalEvent: event };
            if (event.pointerType === "touch") {
              document.removeEventListener("click", handleClickRef.current);
              handleClickRef.current = handleAndDispatchPointerDownOutsideEvent2;
              document.addEventListener("click", handleClickRef.current, { once: true });
            } else {
              handleAndDispatchPointerDownOutsideEvent2();
            }
          }
          isPointerInsideReactTreeRef.current = false;
        }, "handlePointerDown");
        const timerId = setTimeout(() => {
          document.addEventListener("pointerdown", handlePointerDown);
        }, 0);
        return () => {
          window.clearTimeout(timerId);
          document.removeEventListener("pointerdown", handlePointerDown);
          document.removeEventListener("click", handleClickRef.current);
        };
      }, [handlePointerDownOutside]);
      return {
        // ensures we check React component tree (not just DOM tree)
        onPointerDownCapture: () => isPointerInsideReactTreeRef.current = true
      };
    }
    __name(usePointerDownOutside, "usePointerDownOutside");
    function useFocusOutside(onFocusOutside) {
      const handleFocusOutside = (0, import_use_event2.useEvent)(onFocusOutside);
      const isFocusInsideReactTreeRef = React13.useRef(false);
      React13.useEffect(() => {
        const handleFocus = /* @__PURE__ */ __name((event) => {
          if (event.target && !isFocusInsideReactTreeRef.current) {
            const eventDetail = { originalEvent: event };
            handleAndDispatchCustomEvent(FOCUS_OUTSIDE, handleFocusOutside, eventDetail, {
              discrete: false
            });
          }
        }, "handleFocus");
        document.addEventListener("focusin", handleFocus);
        return () => document.removeEventListener("focusin", handleFocus);
      }, [handleFocusOutside]);
      return {
        onFocusCapture: () => isFocusInsideReactTreeRef.current = true,
        onBlurCapture: () => isFocusInsideReactTreeRef.current = false
      };
    }
    __name(useFocusOutside, "useFocusOutside");
    function dispatchUpdate() {
      const event = new CustomEvent(CONTEXT_UPDATE);
      document.dispatchEvent(event);
    }
    __name(dispatchUpdate, "dispatchUpdate");
    function handleAndDispatchCustomEvent(name, handler, detail, { discrete }) {
      const target = detail.originalEvent.target;
      const event = new CustomEvent(name, { bubbles: false, cancelable: true, detail });
      if (handler)
        target.addEventListener(name, handler, { once: true });
      if (discrete) {
        dispatchDiscreteCustomEvent(target, event);
      } else {
        target.dispatchEvent(event);
      }
    }
    __name(handleAndDispatchCustomEvent, "handleAndDispatchCustomEvent");
  }
});

// node_modules/@tamagui/dismissable/dist/cjs/index.js
var require_cjs8 = __commonJS({
  "node_modules/@tamagui/dismissable/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_Dismissable(), module2.exports);
  }
});

// node_modules/@tamagui/focus-scope/dist/cjs/FocusScope.js
var require_FocusScope = __commonJS({
  "node_modules/@tamagui/focus-scope/dist/cjs/FocusScope.js"(exports, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      // If the importer is in node compatibility mode or this is not an ESM
      // file that has been converted to a CommonJS file using a Babel-
      // compatible transform (i.e. "__esModule" has not been set), then set
      // "default" to the CommonJS "module.exports" for node compatibility.
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var FocusScope_exports = {};
    __export2(FocusScope_exports, {
      FocusScope: () => FocusScope2
    });
    module2.exports = __toCommonJS2(FocusScope_exports);
    var import_compose_refs3 = require_cjs2();
    var import_use_event2 = require_cjs7();
    var React13 = __toESM2(require("react"));
    var AUTOFOCUS_ON_MOUNT = "focusScope.autoFocusOnMount";
    var AUTOFOCUS_ON_UNMOUNT = "focusScope.autoFocusOnUnmount";
    var EVENT_OPTIONS = { bubbles: false, cancelable: true };
    var FOCUS_SCOPE_NAME = "FocusScope";
    var FocusScope2 = React13.forwardRef(
      (props, forwardedRef) => {
        const {
          loop = false,
          trapped = false,
          onMountAutoFocus: onMountAutoFocusProp,
          onUnmountAutoFocus: onUnmountAutoFocusProp,
          children,
          forceUnmount,
          ...scopeProps
        } = props;
        const [container, setContainer] = React13.useState(null);
        const onMountAutoFocus = (0, import_use_event2.useEvent)(onMountAutoFocusProp);
        const onUnmountAutoFocus = (0, import_use_event2.useEvent)(onUnmountAutoFocusProp);
        const lastFocusedElementRef = React13.useRef(null);
        const composedRefs = (0, import_compose_refs3.useComposedRefs)(forwardedRef, (node) => setContainer(node));
        const focusScope = React13.useRef({
          paused: false,
          pause() {
            this.paused = true;
          },
          resume() {
            this.paused = false;
          }
        }).current;
        React13.useEffect(() => {
          if (!trapped)
            return;
          function handleFocusIn(event) {
            if (focusScope.paused || !container)
              return;
            const target = event.target;
            if (container.contains(target)) {
              lastFocusedElementRef.current = target;
            } else {
              focus(lastFocusedElementRef.current, { select: true });
            }
          }
          __name(handleFocusIn, "handleFocusIn");
          function handleFocusOut(event) {
            if (focusScope.paused || !container)
              return;
            if (!container.contains(event.relatedTarget)) {
              focus(lastFocusedElementRef.current, { select: true });
            }
          }
          __name(handleFocusOut, "handleFocusOut");
          document.addEventListener("focusin", handleFocusIn);
          document.addEventListener("focusout", handleFocusOut);
          return () => {
            document.removeEventListener("focusin", handleFocusIn);
            document.removeEventListener("focusout", handleFocusOut);
          };
        }, [trapped, forceUnmount, container, focusScope.paused]);
        React13.useEffect(() => {
          if (!container)
            return;
          if (forceUnmount)
            return;
          focusScopesStack.add(focusScope);
          const previouslyFocusedElement = document.activeElement;
          const hasFocusedCandidate = container.contains(previouslyFocusedElement);
          if (!hasFocusedCandidate) {
            const mountEvent = new CustomEvent(AUTOFOCUS_ON_MOUNT, EVENT_OPTIONS);
            container.addEventListener(AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
            container.dispatchEvent(mountEvent);
            if (!mountEvent.defaultPrevented) {
              focusFirst(removeLinks(getTabbableCandidates(container)), { select: true });
              if (document.activeElement === previouslyFocusedElement) {
                focus(container);
              }
            }
          }
          return () => {
            container.removeEventListener(AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
            const unmountEvent = new CustomEvent(AUTOFOCUS_ON_UNMOUNT, EVENT_OPTIONS);
            container.addEventListener(AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
            container.dispatchEvent(unmountEvent);
            if (!unmountEvent.defaultPrevented) {
              focus(previouslyFocusedElement ?? document.body, { select: true });
            }
            container.removeEventListener(AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
            focusScopesStack.remove(focusScope);
          };
        }, [container, forceUnmount, onMountAutoFocus, onUnmountAutoFocus, focusScope]);
        const handleKeyDown = React13.useCallback(
          (event) => {
            if (!(loop || trapped))
              return;
            if (focusScope.paused)
              return;
            const isTabKey = event.key === "Tab" && !event.altKey && !event.ctrlKey && !event.metaKey;
            const focusedElement = document.activeElement;
            if (isTabKey && focusedElement) {
              const container2 = event.currentTarget;
              const [first, last] = getTabbableEdges(container2);
              const hasTabbableElementsInside = first && last;
              if (!hasTabbableElementsInside) {
                if (focusedElement === container2)
                  event.preventDefault();
              } else {
                if (!event.shiftKey && focusedElement === last) {
                  event.preventDefault();
                  if (loop)
                    focus(first, { select: true });
                } else if (event.shiftKey && focusedElement === first) {
                  event.preventDefault();
                  if (loop)
                    focus(last, { select: true });
                }
              }
            }
          },
          [loop, trapped, focusScope.paused]
        );
        const child = React13.Children.only(children);
        return React13.cloneElement(child, {
          tabIndex: -1,
          ...scopeProps,
          ref: composedRefs,
          onKeyDown: handleKeyDown
        });
      }
    );
    FocusScope2.displayName = FOCUS_SCOPE_NAME;
    function focusFirst(candidates, { select = false } = {}) {
      const previouslyFocusedElement = document.activeElement;
      for (const candidate of candidates) {
        focus(candidate, { select });
        if (document.activeElement !== previouslyFocusedElement)
          return;
      }
    }
    __name(focusFirst, "focusFirst");
    function getTabbableEdges(container) {
      const candidates = getTabbableCandidates(container);
      const first = findVisible(candidates, container);
      const last = findVisible(candidates.reverse(), container);
      return [first, last];
    }
    __name(getTabbableEdges, "getTabbableEdges");
    function getTabbableCandidates(container) {
      const nodes = [];
      const walker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, {
        acceptNode: (node) => {
          const isHiddenInput = node.tagName === "INPUT" && node.type === "hidden";
          if (node.disabled || node.hidden || isHiddenInput)
            return NodeFilter.FILTER_SKIP;
          return node.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
        }
      });
      while (walker.nextNode())
        nodes.push(walker.currentNode);
      return nodes;
    }
    __name(getTabbableCandidates, "getTabbableCandidates");
    function findVisible(elements, container) {
      for (const element of elements) {
        if (!isHidden(element, { upTo: container }))
          return element;
      }
    }
    __name(findVisible, "findVisible");
    function isHidden(node, { upTo }) {
      if (getComputedStyle(node).visibility === "hidden")
        return true;
      while (node) {
        if (upTo !== void 0 && node === upTo)
          return false;
        if (getComputedStyle(node).display === "none")
          return true;
        node = node.parentElement;
      }
      return false;
    }
    __name(isHidden, "isHidden");
    function isSelectableInput(element) {
      return element instanceof HTMLInputElement && "select" in element;
    }
    __name(isSelectableInput, "isSelectableInput");
    function focus(element, { select = false } = {}) {
      if (element == null ? void 0 : element.focus) {
        const previouslyFocusedElement = document.activeElement;
        element.focus({ preventScroll: true });
        if (element !== previouslyFocusedElement && isSelectableInput(element) && select)
          element.select();
      }
    }
    __name(focus, "focus");
    var focusScopesStack = createFocusScopesStack();
    function createFocusScopesStack() {
      let stack = [];
      return {
        add(focusScope) {
          const activeFocusScope = stack[0];
          if (focusScope !== activeFocusScope) {
            activeFocusScope == null ? void 0 : activeFocusScope.pause();
          }
          stack = arrayRemove(stack, focusScope);
          stack.unshift(focusScope);
        },
        remove(focusScope) {
          var _a;
          stack = arrayRemove(stack, focusScope);
          (_a = stack[0]) == null ? void 0 : _a.resume();
        }
      };
    }
    __name(createFocusScopesStack, "createFocusScopesStack");
    function arrayRemove(array, item) {
      const updatedArray = [...array];
      const index3 = updatedArray.indexOf(item);
      if (index3 !== -1) {
        updatedArray.splice(index3, 1);
      }
      return updatedArray;
    }
    __name(arrayRemove, "arrayRemove");
    function removeLinks(items) {
      return items.filter((item) => item.tagName !== "A");
    }
    __name(removeLinks, "removeLinks");
  }
});

// node_modules/@tamagui/focus-scope/dist/cjs/index.js
var require_cjs9 = __commonJS({
  "node_modules/@tamagui/focus-scope/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_FocusScope(), module2.exports);
  }
});

// node_modules/@tamagui/polyfill-dev/index.js
var require_polyfill_dev = __commonJS({
  "node_modules/@tamagui/polyfill-dev/index.js"() {
    if (typeof globalThis["__DEV__"] === "undefined") {
      globalThis["__DEV__"] = process.env.NODE_ENV === "development";
    }
  }
});

// node_modules/@tamagui/stacks/dist/cjs/getElevation.js
var require_getElevation = __commonJS({
  "node_modules/@tamagui/stacks/dist/cjs/getElevation.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var getElevation_exports = {};
    __export2(getElevation_exports, {
      getElevation: () => getElevation2,
      getSizedElevation: () => getSizedElevation2
    });
    module2.exports = __toCommonJS2(getElevation_exports);
    var import_core30 = require("@tamagui/core-node");
    var getElevation2 = /* @__PURE__ */ __name((size2, extras) => {
      if (!size2)
        return;
      const { tokens } = extras;
      const token = tokens.size[size2];
      const sizeNum = (0, import_core30.isVariable)(token) ? +token.val : size2;
      return getSizedElevation2(sizeNum, extras);
    }, "getElevation");
    var getSizedElevation2 = /* @__PURE__ */ __name((val, { theme, tokens }) => {
      let num = 0;
      if (val === true) {
        const val2 = (0, import_core30.getVariableValue)(tokens.size["true"]);
        if (typeof val2 === "number") {
          num = val2;
        } else {
          num = 10;
        }
      } else {
        num = +val;
      }
      if (process.env.NODE_ENV === "development") {
        if (num !== null && isNaN(num)) {
          console.warn("NaN shadow", num, val);
        }
      }
      const [height, shadowRadius] = [Math.round(num / 4 + 1), Math.round(num / 2 + 2)];
      const shadow = {
        shadowColor: theme.shadowColor,
        shadowRadius,
        shadowOffset: { height, width: 0 }
      };
      return shadow;
    }, "getSizedElevation");
  }
});

// node_modules/@tamagui/stacks/dist/cjs/Stacks.js
var require_Stacks = __commonJS({
  "node_modules/@tamagui/stacks/dist/cjs/Stacks.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var Stacks_exports = {};
    __export2(Stacks_exports, {
      XStack: () => XStack2,
      YStack: () => YStack2,
      ZStack: () => ZStack2
    });
    module2.exports = __toCommonJS2(Stacks_exports);
    var import_core30 = require("@tamagui/core-node");
    var import_getElevation3 = require_getElevation();
    var fullscreenStyle2 = {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0
    };
    var variants2 = {
      fullscreen: {
        true: fullscreenStyle2
      },
      elevation: {
        "...size": import_getElevation3.getElevation
      }
    };
    var YStack2 = (0, import_core30.styled)(import_core30.Stack, {
      flexDirection: "column",
      name: "YStack",
      variants: variants2
    });
    var XStack2 = (0, import_core30.styled)(import_core30.Stack, {
      flexDirection: "row",
      name: "XStack",
      variants: variants2
    });
    var ZStack2 = (0, import_core30.styled)(
      YStack2,
      {
        name: "ZStack",
        position: "relative"
      },
      {
        neverFlatten: true,
        isZStack: true
      }
    );
  }
});

// node_modules/@tamagui/get-size/dist/cjs/index.js
var require_cjs10 = __commonJS({
  "node_modules/@tamagui/get-size/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    __export2(src_exports, {
      getSize: () => getSize,
      stepTokenUpOrDown: () => stepTokenUpOrDown2
    });
    module2.exports = __toCommonJS2(src_exports);
    var import_core30 = require("@tamagui/core-node");
    var getSize = /* @__PURE__ */ __name((size2, shift2 = 0, bounds = [0]) => {
      return stepTokenUpOrDown2("size", size2, shift2, bounds);
    }, "getSize");
    var stepTokenUpOrDown2 = /* @__PURE__ */ __name((type, name = "$true", shift2 = 0, bounds = [0]) => {
      const tokens = (0, import_core30.getTokens)({ prefixed: true })[type];
      const keysOrdered = import_core30.tokensKeysOrdered.get(tokens) || Object.keys(tokens);
      const min3 = bounds[0] ?? 0;
      const max3 = bounds[1] ?? keysOrdered.length - 1;
      const currentIndex = keysOrdered.indexOf(name);
      if (name === "$true") {
        shift2 += shift2 === 0 ? 0 : shift2 > 0 ? 1 : -1;
      }
      const index3 = Math.min(max3, Math.max(min3, currentIndex + shift2));
      const key = keysOrdered[index3];
      return tokens[key] || tokens["$true"];
    }, "stepTokenUpOrDown");
  }
});

// node_modules/@tamagui/get-button-sized/dist/cjs/index.js
var require_cjs11 = __commonJS({
  "node_modules/@tamagui/get-button-sized/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    __export2(src_exports, {
      getButtonSized: () => getButtonSized5
    });
    module2.exports = __toCommonJS2(src_exports);
    var import_get_size2 = require_cjs10();
    var getButtonSized5 = /* @__PURE__ */ __name((val, { tokens }) => {
      if (typeof val === "number") {
        return {
          paddingHorizontal: val * 0.25,
          height: val,
          borderRadius: val * 0.2
        };
      }
      const ySize = (0, import_get_size2.getSize)(val, 0);
      const xSize = (0, import_get_size2.stepTokenUpOrDown)("space", val);
      const radiusToken = tokens.radius[val] ?? tokens.radius["$true"];
      return {
        paddingHorizontal: xSize,
        height: ySize,
        borderRadius: radiusToken
      };
    }, "getButtonSized");
  }
});

// node_modules/@tamagui/stacks/dist/cjs/variants.js
var require_variants = __commonJS({
  "node_modules/@tamagui/stacks/dist/cjs/variants.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var variants_exports = {};
    __export2(variants_exports, {
      bordered: () => bordered2,
      circular: () => circular2,
      elevate: () => elevate2,
      focusTheme: () => focusTheme2,
      hoverTheme: () => hoverTheme2,
      padded: () => padded2,
      pressTheme: () => pressTheme2,
      radiused: () => radiused2
    });
    module2.exports = __toCommonJS2(variants_exports);
    var import_getElevation3 = require_getElevation();
    var elevate2 = {
      true: (_, extras) => {
        return (0, import_getElevation3.getElevation)(extras.props["size"], extras);
      }
    };
    var bordered2 = /* @__PURE__ */ __name((val, { props }) => {
      return {
        // TODO size it with size in '...size'
        borderWidth: typeof val === "number" ? val : 1,
        borderColor: "$borderColor",
        ...props.hoverTheme && {
          hoverStyle: {
            borderColor: "$borderColorHover"
          }
        },
        ...props.pressTheme && {
          pressStyle: {
            borderColor: "$borderColorPress"
          }
        },
        ...props.focusTheme && {
          focusStyle: {
            borderColor: "$borderColorFocus"
          }
        }
      };
    }, "bordered");
    var padded2 = {
      true: (_, extras) => {
        const { tokens, props } = extras;
        return {
          padding: tokens.space[props.size] || tokens.space["$true"]
        };
      }
    };
    var radiused2 = {
      true: (_, extras) => {
        const { tokens, props } = extras;
        return {
          borderRadius: tokens.radius[props.size] || tokens.radius["$true"]
        };
      }
    };
    var circular2 = {
      true: (_, { props, tokens }) => {
        const size2 = tokens.size[props.size];
        return {
          width: size2,
          height: size2,
          maxWidth: size2,
          maxHeight: size2,
          minWidth: size2,
          minHeight: size2,
          borderRadius: 1e5,
          padding: 0
        };
      }
    };
    var hoverTheme2 = {
      true: {
        hoverStyle: {
          backgroundColor: "$backgroundHover",
          borderColor: "$borderColorHover"
        }
      },
      false: {}
    };
    var pressTheme2 = {
      true: {
        cursor: "pointer",
        pressStyle: {
          backgroundColor: "$backgroundPress",
          borderColor: "$borderColorPress"
        }
      },
      false: {}
    };
    var focusTheme2 = {
      true: {
        focusStyle: {
          backgroundColor: "$backgroundFocus",
          borderColor: "$borderColorFocus"
        }
      },
      false: {}
    };
  }
});

// node_modules/@tamagui/stacks/dist/cjs/SizableStack.js
var require_SizableStack = __commonJS({
  "node_modules/@tamagui/stacks/dist/cjs/SizableStack.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var SizableStack_exports = {};
    __export2(SizableStack_exports, {
      SizableStack: () => SizableStack2
    });
    module2.exports = __toCommonJS2(SizableStack_exports);
    var import_core30 = require("@tamagui/core-node");
    var import_get_button_sized5 = require_cjs11();
    var import_Stacks3 = require_Stacks();
    var import_variants3 = require_variants();
    var SizableStack2 = (0, import_core30.styled)(import_Stacks3.YStack, {
      name: "SizableStack",
      backgroundColor: "$background",
      flexDirection: "row",
      flexShrink: 1,
      variants: {
        hoverTheme: import_variants3.hoverTheme,
        pressTheme: import_variants3.pressTheme,
        focusTheme: import_variants3.focusTheme,
        circular: import_variants3.circular,
        elevate: import_variants3.elevate,
        bordered: import_variants3.bordered,
        size: {
          "...size": import_get_button_sized5.getButtonSized
        }
      }
    });
  }
});

// node_modules/@tamagui/stacks/dist/cjs/ThemeableStack.js
var require_ThemeableStack = __commonJS({
  "node_modules/@tamagui/stacks/dist/cjs/ThemeableStack.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var ThemeableStack_exports = {};
    __export2(ThemeableStack_exports, {
      ThemeableStack: () => ThemeableStack2
    });
    module2.exports = __toCommonJS2(ThemeableStack_exports);
    var import_core30 = require("@tamagui/core-node");
    var import_Stacks3 = require_Stacks();
    var import_variants3 = require_variants();
    var chromelessStyle2 = {
      backgroundColor: "transparent",
      borderColor: "transparent",
      shadowColor: "transparent"
    };
    var ThemeableStack2 = (0, import_core30.styled)(import_Stacks3.YStack, {
      name: "SizableStack",
      variants: {
        backgrounded: {
          true: {
            backgroundColor: "$background"
          }
        },
        radiused: import_variants3.radiused,
        hoverTheme: import_variants3.hoverTheme,
        pressTheme: import_variants3.pressTheme,
        focusTheme: import_variants3.focusTheme,
        circular: import_variants3.circular,
        padded: import_variants3.padded,
        elevate: import_variants3.elevate,
        bordered: import_variants3.bordered,
        transparent: {
          true: {
            backgroundColor: "transparent"
          }
        },
        chromeless: {
          true: chromelessStyle2,
          all: {
            ...chromelessStyle2,
            hoverStyle: chromelessStyle2,
            pressStyle: chromelessStyle2,
            focusStyle: chromelessStyle2
          }
        }
      }
    });
  }
});

// node_modules/@tamagui/stacks/dist/cjs/index.js
var require_cjs12 = __commonJS({
  "node_modules/@tamagui/stacks/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_Stacks(), module2.exports);
    __reExport2(src_exports, require_SizableStack(), module2.exports);
    __reExport2(src_exports, require_ThemeableStack(), module2.exports);
  }
});

// node_modules/@tamagui/portal/dist/cjs/Portal.js
var require_Portal = __commonJS({
  "node_modules/@tamagui/portal/dist/cjs/Portal.js"(exports, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      // If the importer is in node compatibility mode or this is not an ESM
      // file that has been converted to a CommonJS file using a Babel-
      // compatible transform (i.e. "__esModule" has not been set), then set
      // "default" to the CommonJS "module.exports" for node compatibility.
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var Portal_exports = {};
    __export2(Portal_exports, {
      Portal: () => Portal
    });
    module2.exports = __toCommonJS2(Portal_exports);
    var import_jsx_runtime13 = require("react/jsx-runtime");
    var import_polyfill_dev = require_polyfill_dev();
    var import_core30 = require("@tamagui/core-node");
    var import_stacks9 = require_cjs12();
    var React13 = __toESM2(require("react"));
    var import_react_dom4 = require("react-dom");
    var Portal = /* @__PURE__ */ __name(({ host = ((_a) => (_a = globalThis.document) == null ? void 0 : _a.body)(), ...props }) => {
      const contents = /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
        import_stacks9.YStack,
        {
          contain: "strict",
          fullscreen: true,
          position: import_core30.isWeb ? "fixed" : "absolute",
          maxWidth: import_core30.isWeb ? "100vw" : "100%",
          maxHeight: import_core30.isWeb ? "100vh" : "100%",
          pointerEvents: "none",
          ...props
        }
      );
      const [hostElement, setHostElement] = React13.useState(null);
      (0, import_core30.useIsomorphicLayoutEffect)(() => {
        setHostElement(host);
      }, [host]);
      if (hostElement) {
        return (0, import_react_dom4.createPortal)(contents, hostElement);
      }
      return null;
    }, "Portal");
  }
});

// node_modules/@tamagui/portal/dist/cjs/PortalProps.js
var require_PortalProps = __commonJS({
  "node_modules/@tamagui/portal/dist/cjs/PortalProps.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var PortalProps_exports = {};
    module2.exports = __toCommonJS2(PortalProps_exports);
  }
});

// node_modules/@tamagui/portal/dist/cjs/GorhomPortal.js
var require_GorhomPortal = __commonJS({
  "node_modules/@tamagui/portal/dist/cjs/GorhomPortal.js"(exports, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      // If the importer is in node compatibility mode or this is not an ESM
      // file that has been converted to a CommonJS file using a Babel-
      // compatible transform (i.e. "__esModule" has not been set), then set
      // "default" to the CommonJS "module.exports" for node compatibility.
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var GorhomPortal_exports = {};
    __export2(GorhomPortal_exports, {
      ACTIONS: () => ACTIONS,
      INITIAL_STATE: () => INITIAL_STATE,
      PortalHost: () => PortalHost2,
      PortalItem: () => PortalItem2,
      PortalProvider: () => PortalProvider3,
      usePortal: () => usePortal
    });
    module2.exports = __toCommonJS2(GorhomPortal_exports);
    var import_jsx_runtime13 = require("react/jsx-runtime");
    var import_core30 = require("@tamagui/core-node");
    var import_react13 = __toESM2(require("react"));
    var ACTIONS = /* @__PURE__ */ ((ACTIONS2) => {
      ACTIONS2[ACTIONS2["REGISTER_HOST"] = 0] = "REGISTER_HOST";
      ACTIONS2[ACTIONS2["DEREGISTER_HOST"] = 1] = "DEREGISTER_HOST";
      ACTIONS2[ACTIONS2["ADD_UPDATE_PORTAL"] = 2] = "ADD_UPDATE_PORTAL";
      ACTIONS2[ACTIONS2["REMOVE_PORTAL"] = 3] = "REMOVE_PORTAL";
      return ACTIONS2;
    })(ACTIONS || {});
    var INITIAL_STATE = {};
    var registerHost = /* @__PURE__ */ __name((state, hostName) => {
      if (!(hostName in state)) {
        state[hostName] = [];
      }
      return state;
    }, "registerHost");
    var deregisterHost = /* @__PURE__ */ __name((state, hostName) => {
      delete state[hostName];
      return state;
    }, "deregisterHost");
    var addUpdatePortal = /* @__PURE__ */ __name((state, hostName, portalName, node) => {
      if (!(hostName in state)) {
        state = registerHost(state, hostName);
      }
      const index3 = state[hostName].findIndex((item) => item.name === portalName);
      if (index3 !== -1) {
        state[hostName][index3].node = node;
      } else {
        state[hostName].push({
          name: portalName,
          node
        });
      }
      return state;
    }, "addUpdatePortal");
    var removePortal = /* @__PURE__ */ __name((state, hostName, portalName) => {
      if (!(hostName in state)) {
        console.log(
          `Failed to remove portal '${portalName}', '${hostName}' was not registered!`
        );
        return state;
      }
      const index3 = state[hostName].findIndex((item) => item.name === portalName);
      if (index3 !== -1)
        state[hostName].splice(index3, 1);
      return state;
    }, "removePortal");
    var reducer = /* @__PURE__ */ __name((state, action) => {
      const { type } = action;
      switch (type) {
        case 0:
          return registerHost({ ...state }, action.hostName);
        case 1:
          return deregisterHost({ ...state }, action.hostName);
        case 2:
          return addUpdatePortal(
            { ...state },
            action.hostName,
            action.portalName,
            action.node
          );
        case 3:
          return removePortal(
            { ...state },
            action.hostName,
            action.portalName
          );
        default:
          return state;
      }
    }, "reducer");
    var PortalStateContext = (0, import_react13.createContext)(null);
    var PortalDispatchContext = (0, import_react13.createContext)(null);
    var usePortalState = /* @__PURE__ */ __name((hostName) => {
      const state = (0, import_react13.useContext)(PortalStateContext);
      if (state === null) {
        throw new Error(
          "'PortalStateContext' cannot be null, please add 'PortalProvider' to the root component."
        );
      }
      return state[hostName] || [];
    }, "usePortalState");
    var usePortal = /* @__PURE__ */ __name((hostName = "root") => {
      const dispatch = (0, import_react13.useContext)(PortalDispatchContext);
      if (dispatch === null) {
        throw new Error(
          "'PortalDispatchContext' cannot be null, please add 'PortalProvider' to the root component."
        );
      }
      const registerHost2 = (0, import_react13.useCallback)(() => {
        dispatch({
          type: 0,
          hostName
        });
      }, []);
      const deregisterHost2 = (0, import_react13.useCallback)(() => {
        dispatch({
          type: 1,
          hostName
        });
      }, []);
      const addUpdatePortal2 = (0, import_react13.useCallback)((name, node) => {
        dispatch({
          type: 2,
          hostName,
          portalName: name,
          node
        });
      }, []);
      const removePortal2 = (0, import_react13.useCallback)((name) => {
        dispatch({
          type: 3,
          hostName,
          portalName: name
        });
      }, []);
      return {
        registerHost: registerHost2,
        deregisterHost: deregisterHost2,
        addPortal: addUpdatePortal2,
        updatePortal: addUpdatePortal2,
        removePortal: removePortal2
      };
    }, "usePortal");
    var PortalProviderComponent = /* @__PURE__ */ __name(({
      rootHostName = "root",
      shouldAddRootHost = true,
      children
    }) => {
      const [state, dispatch] = (0, import_react13.useReducer)(reducer, INITIAL_STATE);
      const transitionDispatch = (0, import_react13.useMemo)(() => {
        const next = /* @__PURE__ */ __name((value) => {
          (0, import_react13.startTransition)(() => {
            dispatch(value);
          });
        }, "next");
        return next;
      }, [dispatch]);
      return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(PortalDispatchContext.Provider, { value: transitionDispatch, children: /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(PortalStateContext.Provider, { value: state, children: [
        children,
        shouldAddRootHost && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(PortalHost2, { name: rootHostName })
      ] }) });
    }, "PortalProviderComponent");
    var PortalProvider3 = (0, import_react13.memo)(PortalProviderComponent);
    PortalProvider3.displayName = "PortalProvider";
    var PortalHostComponent = /* @__PURE__ */ __name((props) => {
      const { name, forwardProps } = props;
      const isServer2 = !(0, import_core30.useDidFinishSSR)();
      const state = usePortalState(name);
      const { registerHost: registerHost2, deregisterHost: deregisterHost2 } = usePortal(props.name);
      (0, import_react13.useEffect)(() => {
        if (isServer2)
          return;
        registerHost2();
        return () => {
          deregisterHost2();
        };
      }, [isServer2]);
      if (forwardProps) {
        return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_jsx_runtime13.Fragment, { children: state.map((item) => {
          let next = item.node;
          if (forwardProps) {
            return import_react13.default.Children.map(next, (child) => {
              return import_react13.default.isValidElement(child) ? import_react13.default.cloneElement(child, { key: child.key, ...forwardProps }) : child;
            });
          }
          return next;
        }) });
      }
      return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_jsx_runtime13.Fragment, { children: state.map((item) => item.node) });
    }, "PortalHostComponent");
    var PortalHost2 = (0, import_react13.memo)(PortalHostComponent);
    PortalHost2.displayName = "PortalHost";
    var PortalComponent = /* @__PURE__ */ __name((props) => {
      const {
        name: _providedName,
        hostName,
        handleOnMount: _providedHandleOnMount,
        handleOnUnmount: _providedHandleOnUnmount,
        handleOnUpdate: _providedHandleOnUpdate,
        children
      } = props;
      const { addPortal: addUpdatePortal2, removePortal: removePortal2 } = usePortal(hostName);
      const id = (0, import_react13.useId)();
      const name = _providedName || id;
      const handleOnMount = (0, import_core30.useEvent)(() => {
        if (_providedHandleOnMount) {
          _providedHandleOnMount(() => addUpdatePortal2(name, children));
        } else {
          addUpdatePortal2(name, children);
        }
      });
      const handleOnUnmount = (0, import_core30.useEvent)(() => {
        if (_providedHandleOnUnmount) {
          _providedHandleOnUnmount(() => removePortal2(name));
        } else {
          removePortal2(name);
        }
      });
      const handleOnUpdate = (0, import_core30.useEvent)(() => {
        if (_providedHandleOnUpdate) {
          _providedHandleOnUpdate(() => addUpdatePortal2(name, children));
        } else {
          addUpdatePortal2(name, children);
        }
      });
      (0, import_core30.useIsomorphicLayoutEffect)(() => {
        handleOnMount();
        return () => {
          handleOnUnmount();
        };
      }, []);
      (0, import_react13.useEffect)(() => {
        handleOnUpdate();
      }, [children]);
      return null;
    }, "PortalComponent");
    var PortalItem2 = (0, import_react13.memo)(PortalComponent);
    PortalItem2.displayName = "Portal";
  }
});

// node_modules/@tamagui/portal/dist/cjs/index.js
var require_cjs13 = __commonJS({
  "node_modules/@tamagui/portal/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_Portal(), module2.exports);
    __reExport2(src_exports, require_PortalProps(), module2.exports);
    __reExport2(src_exports, require_GorhomPortal(), module2.exports);
  }
});

// node_modules/tslib/tslib.es6.js
var tslib_es6_exports = {};
__export(tslib_es6_exports, {
  __assign: () => __assign,
  __asyncDelegator: () => __asyncDelegator,
  __asyncGenerator: () => __asyncGenerator,
  __asyncValues: () => __asyncValues,
  __await: () => __await,
  __awaiter: () => __awaiter,
  __classPrivateFieldGet: () => __classPrivateFieldGet,
  __classPrivateFieldIn: () => __classPrivateFieldIn,
  __classPrivateFieldSet: () => __classPrivateFieldSet,
  __createBinding: () => __createBinding,
  __decorate: () => __decorate,
  __exportStar: () => __exportStar,
  __extends: () => __extends,
  __generator: () => __generator,
  __importDefault: () => __importDefault,
  __importStar: () => __importStar,
  __makeTemplateObject: () => __makeTemplateObject,
  __metadata: () => __metadata,
  __param: () => __param,
  __read: () => __read,
  __rest: () => __rest,
  __spread: () => __spread,
  __spreadArray: () => __spreadArray,
  __spreadArrays: () => __spreadArrays,
  __values: () => __values
});
function __extends(d, b) {
  if (typeof b !== "function" && b !== null)
    throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() {
    this.constructor = d;
  }
  __name(__, "__");
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
function __rest(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
}
function __decorate(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
  return function(target, key) {
    decorator(target, key, paramIndex);
  };
}
function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
    return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  __name(adopt, "adopt");
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    __name(fulfilled, "fulfilled");
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    __name(rejected, "rejected");
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    __name(step, "step");
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() {
    if (t[0] & 1)
      throw t[1];
    return t[1];
  }, trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v) {
      return step([n, v]);
    };
  }
  __name(verb, "verb");
  function step(op) {
    if (f)
      throw new TypeError("Generator is already executing.");
    while (g && (g = 0, op[0] && (_ = 0)), _)
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
          return t;
        if (y = 0, t)
          op = [op[0] & 2, t.value];
        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;
          case 4:
            _.label++;
            return { value: op[1], done: false };
          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;
          case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;
          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }
            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            if (t[2])
              _.ops.pop();
            _.trys.pop();
            continue;
        }
        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    if (op[0] & 5)
      throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
  __name(step, "step");
}
function __exportStar(m, o) {
  for (var p in m)
    if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
      __createBinding(o, m, p);
}
function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m)
    return m.call(o);
  if (o && typeof o.length === "number")
    return {
      next: function() {
        if (o && i >= o.length)
          o = void 0;
        return { value: o && o[i++], done: !o };
      }
    };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m)
    return o;
  var i = m.call(o), r, ar = [], e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
      ar.push(r.value);
  } catch (error) {
    e = { error };
  } finally {
    try {
      if (r && !r.done && (m = i["return"]))
        m.call(i);
    } finally {
      if (e)
        throw e.error;
    }
  }
  return ar;
}
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++)
    ar = ar.concat(__read(arguments[i]));
  return ar;
}
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++)
    s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++)
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
      r[k] = a[j];
  return r;
}
function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2)
    for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
        if (!ar)
          ar = Array.prototype.slice.call(from, 0, i);
        ar[i] = from[i];
      }
    }
  return to.concat(ar || Array.prototype.slice.call(from));
}
function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []), i, q = [];
  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function verb(n) {
    if (g[n])
      i[n] = function(v) {
        return new Promise(function(a, b) {
          q.push([n, v, a, b]) > 1 || resume(n, v);
        });
      };
  }
  __name(verb, "verb");
  function resume(n, v) {
    try {
      step(g[n](v));
    } catch (e) {
      settle(q[0][3], e);
    }
  }
  __name(resume, "resume");
  function step(r) {
    r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
  }
  __name(step, "step");
  function fulfill(value) {
    resume("next", value);
  }
  __name(fulfill, "fulfill");
  function reject(value) {
    resume("throw", value);
  }
  __name(reject, "reject");
  function settle(f, v) {
    if (f(v), q.shift(), q.length)
      resume(q[0][0], q[0][1]);
  }
  __name(settle, "settle");
}
function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function(e) {
    throw e;
  }), verb("return"), i[Symbol.iterator] = function() {
    return this;
  }, i;
  function verb(n, f) {
    i[n] = o[n] ? function(v) {
      return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v;
    } : f;
  }
  __name(verb, "verb");
}
function __asyncValues(o) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator], i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
    return this;
  }, i);
  function verb(n) {
    i[n] = o[n] && function(v) {
      return new Promise(function(resolve, reject) {
        v = o[n](v), settle(resolve, reject, v.done, v.value);
      });
    };
  }
  __name(verb, "verb");
  function settle(resolve, reject, d, v) {
    Promise.resolve(v).then(function(v2) {
      resolve({ value: v2, done: d });
    }, reject);
  }
  __name(settle, "settle");
}
function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", { value: raw });
  } else {
    cooked.raw = raw;
  }
  return cooked;
}
function __importStar(mod) {
  if (mod && mod.__esModule)
    return mod;
  var result = {};
  if (mod != null) {
    for (var k in mod)
      if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
        __createBinding(result, mod, k);
  }
  __setModuleDefault(result, mod);
  return result;
}
function __importDefault(mod) {
  return mod && mod.__esModule ? mod : { default: mod };
}
function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (kind === "m")
    throw new TypeError("Private method is not writable");
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
function __classPrivateFieldIn(state, receiver) {
  if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function")
    throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof state === "function" ? receiver === state : state.has(receiver);
}
var extendStatics, __assign, __createBinding, __setModuleDefault;
var init_tslib_es6 = __esm({
  "node_modules/tslib/tslib.es6.js"() {
    extendStatics = /* @__PURE__ */ __name(function(d, b) {
      extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
        d2.__proto__ = b2;
      } || function(d2, b2) {
        for (var p in b2)
          if (Object.prototype.hasOwnProperty.call(b2, p))
            d2[p] = b2[p];
      };
      return extendStatics(d, b);
    }, "extendStatics");
    __name(__extends, "__extends");
    __assign = /* @__PURE__ */ __name(function() {
      __assign = Object.assign || /* @__PURE__ */ __name(function __assign2(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      }, "__assign");
      return __assign.apply(this, arguments);
    }, "__assign");
    __name(__rest, "__rest");
    __name(__decorate, "__decorate");
    __name(__param, "__param");
    __name(__metadata, "__metadata");
    __name(__awaiter, "__awaiter");
    __name(__generator, "__generator");
    __createBinding = Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    };
    __name(__exportStar, "__exportStar");
    __name(__values, "__values");
    __name(__read, "__read");
    __name(__spread, "__spread");
    __name(__spreadArrays, "__spreadArrays");
    __name(__spreadArray, "__spreadArray");
    __name(__await, "__await");
    __name(__asyncGenerator, "__asyncGenerator");
    __name(__asyncDelegator, "__asyncDelegator");
    __name(__asyncValues, "__asyncValues");
    __name(__makeTemplateObject, "__makeTemplateObject");
    __setModuleDefault = Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    };
    __name(__importStar, "__importStar");
    __name(__importDefault, "__importDefault");
    __name(__classPrivateFieldGet, "__classPrivateFieldGet");
    __name(__classPrivateFieldSet, "__classPrivateFieldSet");
    __name(__classPrivateFieldIn, "__classPrivateFieldIn");
  }
});

// node_modules/react-remove-scroll-bar/dist/es5/constants.js
var require_constants = __commonJS({
  "node_modules/react-remove-scroll-bar/dist/es5/constants.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.removedBarSizeVariable = exports.noScrollbarsClassName = exports.fullWidthClassName = exports.zeroRightClassName = void 0;
    exports.zeroRightClassName = "right-scroll-bar-position";
    exports.fullWidthClassName = "width-before-scroll-bar";
    exports.noScrollbarsClassName = "with-scroll-bars-hidden";
    exports.removedBarSizeVariable = "--removed-body-scroll-bar-size";
  }
});

// node_modules/use-callback-ref/dist/es5/assignRef.js
var require_assignRef = __commonJS({
  "node_modules/use-callback-ref/dist/es5/assignRef.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.assignRef = void 0;
    function assignRef(ref, value) {
      if (typeof ref === "function") {
        ref(value);
      } else if (ref) {
        ref.current = value;
      }
      return ref;
    }
    __name(assignRef, "assignRef");
    exports.assignRef = assignRef;
  }
});

// node_modules/use-callback-ref/dist/es5/useRef.js
var require_useRef = __commonJS({
  "node_modules/use-callback-ref/dist/es5/useRef.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useCallbackRef = void 0;
    var react_1 = require("react");
    function useCallbackRef(initialValue, callback) {
      var ref = (0, react_1.useState)(function() {
        return {
          // value
          value: initialValue,
          // last callback
          callback,
          // "memoized" public interface
          facade: {
            get current() {
              return ref.value;
            },
            set current(value) {
              var last = ref.value;
              if (last !== value) {
                ref.value = value;
                ref.callback(value, last);
              }
            }
          }
        };
      })[0];
      ref.callback = callback;
      return ref.facade;
    }
    __name(useCallbackRef, "useCallbackRef");
    exports.useCallbackRef = useCallbackRef;
  }
});

// node_modules/use-callback-ref/dist/es5/createRef.js
var require_createRef = __commonJS({
  "node_modules/use-callback-ref/dist/es5/createRef.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createCallbackRef = void 0;
    function createCallbackRef(callback) {
      var current = null;
      return {
        get current() {
          return current;
        },
        set current(value) {
          var last = current;
          if (last !== value) {
            current = value;
            callback(value, last);
          }
        }
      };
    }
    __name(createCallbackRef, "createCallbackRef");
    exports.createCallbackRef = createCallbackRef;
  }
});

// node_modules/use-callback-ref/dist/es5/mergeRef.js
var require_mergeRef = __commonJS({
  "node_modules/use-callback-ref/dist/es5/mergeRef.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.mergeRefs = void 0;
    var assignRef_1 = require_assignRef();
    var createRef_1 = require_createRef();
    function mergeRefs(refs) {
      return (0, createRef_1.createCallbackRef)(function(newValue) {
        return refs.forEach(function(ref) {
          return (0, assignRef_1.assignRef)(ref, newValue);
        });
      });
    }
    __name(mergeRefs, "mergeRefs");
    exports.mergeRefs = mergeRefs;
  }
});

// node_modules/use-callback-ref/dist/es5/useMergeRef.js
var require_useMergeRef = __commonJS({
  "node_modules/use-callback-ref/dist/es5/useMergeRef.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useMergeRefs = void 0;
    var assignRef_1 = require_assignRef();
    var useRef_1 = require_useRef();
    function useMergeRefs2(refs, defaultValue2) {
      return (0, useRef_1.useCallbackRef)(defaultValue2 || null, function(newValue) {
        return refs.forEach(function(ref) {
          return (0, assignRef_1.assignRef)(ref, newValue);
        });
      });
    }
    __name(useMergeRefs2, "useMergeRefs");
    exports.useMergeRefs = useMergeRefs2;
  }
});

// node_modules/use-callback-ref/dist/es5/useTransformRef.js
var require_useTransformRef = __commonJS({
  "node_modules/use-callback-ref/dist/es5/useTransformRef.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useTransformRef = void 0;
    var assignRef_1 = require_assignRef();
    var useRef_1 = require_useRef();
    function useTransformRef(ref, transformer) {
      return (0, useRef_1.useCallbackRef)(null, function(value) {
        return (0, assignRef_1.assignRef)(ref, transformer(value));
      });
    }
    __name(useTransformRef, "useTransformRef");
    exports.useTransformRef = useTransformRef;
  }
});

// node_modules/use-callback-ref/dist/es5/transformRef.js
var require_transformRef = __commonJS({
  "node_modules/use-callback-ref/dist/es5/transformRef.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformRef = void 0;
    var assignRef_1 = require_assignRef();
    var createRef_1 = require_createRef();
    function transformRef(ref, transformer) {
      return (0, createRef_1.createCallbackRef)(function(value) {
        return (0, assignRef_1.assignRef)(ref, transformer(value));
      });
    }
    __name(transformRef, "transformRef");
    exports.transformRef = transformRef;
  }
});

// node_modules/use-callback-ref/dist/es5/refToCallback.js
var require_refToCallback = __commonJS({
  "node_modules/use-callback-ref/dist/es5/refToCallback.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useRefToCallback = exports.refToCallback = void 0;
    function refToCallback(ref) {
      return function(newValue) {
        if (typeof ref === "function") {
          ref(newValue);
        } else if (ref) {
          ref.current = newValue;
        }
      };
    }
    __name(refToCallback, "refToCallback");
    exports.refToCallback = refToCallback;
    var nullCallback = /* @__PURE__ */ __name(function() {
      return null;
    }, "nullCallback");
    var weakMem = /* @__PURE__ */ new WeakMap();
    var weakMemoize = /* @__PURE__ */ __name(function(ref) {
      var usedRef = ref || nullCallback;
      var storedRef = weakMem.get(usedRef);
      if (storedRef) {
        return storedRef;
      }
      var cb = refToCallback(usedRef);
      weakMem.set(usedRef, cb);
      return cb;
    }, "weakMemoize");
    function useRefToCallback(ref) {
      return weakMemoize(ref);
    }
    __name(useRefToCallback, "useRefToCallback");
    exports.useRefToCallback = useRefToCallback;
  }
});

// node_modules/use-callback-ref/dist/es5/index.js
var require_es52 = __commonJS({
  "node_modules/use-callback-ref/dist/es5/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useRefToCallback = exports.refToCallback = exports.transformRef = exports.useTransformRef = exports.useMergeRefs = exports.mergeRefs = exports.createCallbackRef = exports.useCallbackRef = exports.assignRef = void 0;
    var assignRef_1 = require_assignRef();
    Object.defineProperty(exports, "assignRef", { enumerable: true, get: function() {
      return assignRef_1.assignRef;
    } });
    var useRef_1 = require_useRef();
    Object.defineProperty(exports, "useCallbackRef", { enumerable: true, get: function() {
      return useRef_1.useCallbackRef;
    } });
    var createRef_1 = require_createRef();
    Object.defineProperty(exports, "createCallbackRef", { enumerable: true, get: function() {
      return createRef_1.createCallbackRef;
    } });
    var mergeRef_1 = require_mergeRef();
    Object.defineProperty(exports, "mergeRefs", { enumerable: true, get: function() {
      return mergeRef_1.mergeRefs;
    } });
    var useMergeRef_1 = require_useMergeRef();
    Object.defineProperty(exports, "useMergeRefs", { enumerable: true, get: function() {
      return useMergeRef_1.useMergeRefs;
    } });
    var useTransformRef_1 = require_useTransformRef();
    Object.defineProperty(exports, "useTransformRef", { enumerable: true, get: function() {
      return useTransformRef_1.useTransformRef;
    } });
    var transformRef_1 = require_transformRef();
    Object.defineProperty(exports, "transformRef", { enumerable: true, get: function() {
      return transformRef_1.transformRef;
    } });
    var refToCallback_1 = require_refToCallback();
    Object.defineProperty(exports, "refToCallback", { enumerable: true, get: function() {
      return refToCallback_1.refToCallback;
    } });
    Object.defineProperty(exports, "useRefToCallback", { enumerable: true, get: function() {
      return refToCallback_1.useRefToCallback;
    } });
  }
});

// node_modules/detect-node-es/es5/node.js
var require_node = __commonJS({
  "node_modules/detect-node-es/es5/node.js"(exports, module2) {
    module2.exports.isNode = Object.prototype.toString.call(typeof process !== "undefined" ? process : 0) === "[object process]";
  }
});

// node_modules/use-sidecar/dist/es5/env.js
var require_env = __commonJS({
  "node_modules/use-sidecar/dist/es5/env.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.env = void 0;
    var detect_node_es_1 = require_node();
    exports.env = {
      isNode: detect_node_es_1.isNode,
      forceCache: false
    };
  }
});

// node_modules/use-sidecar/dist/es5/hook.js
var require_hook = __commonJS({
  "node_modules/use-sidecar/dist/es5/hook.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useSidecar = void 0;
    var react_1 = require("react");
    var env_1 = require_env();
    var cache = /* @__PURE__ */ new WeakMap();
    var NO_OPTIONS = {};
    function useSidecar(importer, effect) {
      var options = effect && effect.options || NO_OPTIONS;
      if (env_1.env.isNode && !options.ssr) {
        return [null, null];
      }
      return useRealSidecar(importer, effect);
    }
    __name(useSidecar, "useSidecar");
    exports.useSidecar = useSidecar;
    function useRealSidecar(importer, effect) {
      var options = effect && effect.options || NO_OPTIONS;
      var couldUseCache = env_1.env.forceCache || env_1.env.isNode && !!options.ssr || !options.async;
      var _a = (0, react_1.useState)(couldUseCache ? function() {
        return cache.get(importer);
      } : void 0), Car = _a[0], setCar = _a[1];
      var _b = (0, react_1.useState)(null), error = _b[0], setError = _b[1];
      (0, react_1.useEffect)(function() {
        if (!Car) {
          importer().then(function(car) {
            var resolved = effect ? effect.read() : car.default || car;
            if (!resolved) {
              console.error("Sidecar error: with importer", importer);
              var error_1;
              if (effect) {
                console.error("Sidecar error: with medium", effect);
                error_1 = new Error("Sidecar medium was not found");
              } else {
                error_1 = new Error("Sidecar was not found in exports");
              }
              setError(function() {
                return error_1;
              });
              throw error_1;
            }
            cache.set(importer, resolved);
            setCar(function() {
              return resolved;
            });
          }, function(e) {
            return setError(function() {
              return e;
            });
          });
        }
      }, []);
      return [Car, error];
    }
    __name(useRealSidecar, "useRealSidecar");
  }
});

// node_modules/use-sidecar/dist/es5/hoc.js
var require_hoc = __commonJS({
  "node_modules/use-sidecar/dist/es5/hoc.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.sidecar = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var React13 = tslib_1.__importStar(require("react"));
    var hook_1 = require_hook();
    function sidecar(importer, errorComponent) {
      var ErrorCase = /* @__PURE__ */ __name(function() {
        return errorComponent;
      }, "ErrorCase");
      return /* @__PURE__ */ __name(function Sidecar(props) {
        var _a = (0, hook_1.useSidecar)(importer, props.sideCar), Car = _a[0], error = _a[1];
        if (error && errorComponent) {
          return ErrorCase;
        }
        return Car ? React13.createElement(Car, tslib_1.__assign({}, props)) : null;
      }, "Sidecar");
    }
    __name(sidecar, "sidecar");
    exports.sidecar = sidecar;
  }
});

// node_modules/use-sidecar/dist/es5/config.js
var require_config = __commonJS({
  "node_modules/use-sidecar/dist/es5/config.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.setConfig = exports.config = void 0;
    exports.config = {
      onError: function(e) {
        return console.error(e);
      }
    };
    var setConfig = /* @__PURE__ */ __name(function(conf) {
      Object.assign(exports.config, conf);
    }, "setConfig");
    exports.setConfig = setConfig;
  }
});

// node_modules/use-sidecar/dist/es5/medium.js
var require_medium = __commonJS({
  "node_modules/use-sidecar/dist/es5/medium.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createSidecarMedium = exports.createMedium = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    function ItoI(a) {
      return a;
    }
    __name(ItoI, "ItoI");
    function innerCreateMedium(defaults, middleware) {
      if (middleware === void 0) {
        middleware = ItoI;
      }
      var buffer = [];
      var assigned = false;
      var medium = {
        read: function() {
          if (assigned) {
            throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
          }
          if (buffer.length) {
            return buffer[buffer.length - 1];
          }
          return defaults;
        },
        useMedium: function(data) {
          var item = middleware(data, assigned);
          buffer.push(item);
          return function() {
            buffer = buffer.filter(function(x) {
              return x !== item;
            });
          };
        },
        assignSyncMedium: function(cb) {
          assigned = true;
          while (buffer.length) {
            var cbs = buffer;
            buffer = [];
            cbs.forEach(cb);
          }
          buffer = {
            push: function(x) {
              return cb(x);
            },
            filter: function() {
              return buffer;
            }
          };
        },
        assignMedium: function(cb) {
          assigned = true;
          var pendingQueue = [];
          if (buffer.length) {
            var cbs = buffer;
            buffer = [];
            cbs.forEach(cb);
            pendingQueue = buffer;
          }
          var executeQueue = /* @__PURE__ */ __name(function() {
            var cbs2 = pendingQueue;
            pendingQueue = [];
            cbs2.forEach(cb);
          }, "executeQueue");
          var cycle = /* @__PURE__ */ __name(function() {
            return Promise.resolve().then(executeQueue);
          }, "cycle");
          cycle();
          buffer = {
            push: function(x) {
              pendingQueue.push(x);
              cycle();
            },
            filter: function(filter) {
              pendingQueue = pendingQueue.filter(filter);
              return buffer;
            }
          };
        }
      };
      return medium;
    }
    __name(innerCreateMedium, "innerCreateMedium");
    function createMedium(defaults, middleware) {
      if (middleware === void 0) {
        middleware = ItoI;
      }
      return innerCreateMedium(defaults, middleware);
    }
    __name(createMedium, "createMedium");
    exports.createMedium = createMedium;
    function createSidecarMedium(options) {
      if (options === void 0) {
        options = {};
      }
      var medium = innerCreateMedium(null);
      medium.options = tslib_1.__assign({ async: true, ssr: false }, options);
      return medium;
    }
    __name(createSidecarMedium, "createSidecarMedium");
    exports.createSidecarMedium = createSidecarMedium;
  }
});

// node_modules/use-sidecar/dist/es5/renderProp.js
var require_renderProp = __commonJS({
  "node_modules/use-sidecar/dist/es5/renderProp.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.renderCar = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var React13 = tslib_1.__importStar(require("react"));
    var react_1 = require("react");
    function renderCar(WrappedComponent, defaults) {
      function State(_a) {
        var stateRef = _a.stateRef, props = _a.props;
        var renderTarget = (0, react_1.useCallback)(/* @__PURE__ */ __name(function SideTarget() {
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }
          (0, react_1.useLayoutEffect)(function() {
            stateRef.current(args);
          });
          return null;
        }, "SideTarget"), []);
        return React13.createElement(WrappedComponent, tslib_1.__assign({}, props, { children: renderTarget }));
      }
      __name(State, "State");
      var Children2 = React13.memo(function(_a) {
        var stateRef = _a.stateRef, defaultState = _a.defaultState, children = _a.children;
        var _b = (0, react_1.useState)(defaultState.current), state = _b[0], setState = _b[1];
        (0, react_1.useEffect)(function() {
          stateRef.current = setState;
        }, []);
        return children.apply(void 0, state);
      }, function() {
        return true;
      });
      return /* @__PURE__ */ __name(function Combiner(props) {
        var defaultState = React13.useRef(defaults(props));
        var ref = React13.useRef(function(state) {
          return defaultState.current = state;
        });
        return React13.createElement(
          React13.Fragment,
          null,
          React13.createElement(State, { stateRef: ref, props }),
          React13.createElement(Children2, { stateRef: ref, defaultState, children: props.children })
        );
      }, "Combiner");
    }
    __name(renderCar, "renderCar");
    exports.renderCar = renderCar;
  }
});

// node_modules/use-sidecar/dist/es5/exports.js
var require_exports = __commonJS({
  "node_modules/use-sidecar/dist/es5/exports.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.exportSidecar = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var React13 = tslib_1.__importStar(require("react"));
    var SideCar = /* @__PURE__ */ __name(function(_a) {
      var sideCar = _a.sideCar, rest = tslib_1.__rest(_a, ["sideCar"]);
      if (!sideCar) {
        throw new Error("Sidecar: please provide `sideCar` property to import the right car");
      }
      var Target = sideCar.read();
      if (!Target) {
        throw new Error("Sidecar medium not found");
      }
      return React13.createElement(Target, tslib_1.__assign({}, rest));
    }, "SideCar");
    SideCar.isSideCarExport = true;
    function exportSidecar(medium, exported) {
      medium.useMedium(exported);
      return SideCar;
    }
    __name(exportSidecar, "exportSidecar");
    exports.exportSidecar = exportSidecar;
  }
});

// node_modules/use-sidecar/dist/es5/index.js
var require_es53 = __commonJS({
  "node_modules/use-sidecar/dist/es5/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.exportSidecar = exports.renderCar = exports.createSidecarMedium = exports.createMedium = exports.setConfig = exports.useSidecar = exports.sidecar = void 0;
    var hoc_1 = require_hoc();
    Object.defineProperty(exports, "sidecar", { enumerable: true, get: function() {
      return hoc_1.sidecar;
    } });
    var hook_1 = require_hook();
    Object.defineProperty(exports, "useSidecar", { enumerable: true, get: function() {
      return hook_1.useSidecar;
    } });
    var config_1 = require_config();
    Object.defineProperty(exports, "setConfig", { enumerable: true, get: function() {
      return config_1.setConfig;
    } });
    var medium_1 = require_medium();
    Object.defineProperty(exports, "createMedium", { enumerable: true, get: function() {
      return medium_1.createMedium;
    } });
    Object.defineProperty(exports, "createSidecarMedium", { enumerable: true, get: function() {
      return medium_1.createSidecarMedium;
    } });
    var renderProp_1 = require_renderProp();
    Object.defineProperty(exports, "renderCar", { enumerable: true, get: function() {
      return renderProp_1.renderCar;
    } });
    var exports_1 = require_exports();
    Object.defineProperty(exports, "exportSidecar", { enumerable: true, get: function() {
      return exports_1.exportSidecar;
    } });
  }
});

// node_modules/react-remove-scroll/dist/es5/medium.js
var require_medium2 = __commonJS({
  "node_modules/react-remove-scroll/dist/es5/medium.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.effectCar = void 0;
    var use_sidecar_1 = require_es53();
    exports.effectCar = (0, use_sidecar_1.createSidecarMedium)();
  }
});

// node_modules/react-remove-scroll/dist/es5/UI.js
var require_UI = __commonJS({
  "node_modules/react-remove-scroll/dist/es5/UI.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.RemoveScroll = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var React13 = tslib_1.__importStar(require("react"));
    var constants_1 = require_constants();
    var use_callback_ref_1 = require_es52();
    var medium_1 = require_medium2();
    var nothing = /* @__PURE__ */ __name(function() {
      return;
    }, "nothing");
    var RemoveScroll2 = React13.forwardRef(function(props, parentRef) {
      var ref = React13.useRef(null);
      var _a = React13.useState({
        onScrollCapture: nothing,
        onWheelCapture: nothing,
        onTouchMoveCapture: nothing
      }), callbacks = _a[0], setCallbacks = _a[1];
      var forwardProps = props.forwardProps, children = props.children, className = props.className, removeScrollBar = props.removeScrollBar, enabled = props.enabled, shards = props.shards, sideCar = props.sideCar, noIsolation = props.noIsolation, inert = props.inert, allowPinchZoom = props.allowPinchZoom, _b = props.as, Container = _b === void 0 ? "div" : _b, rest = tslib_1.__rest(props, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]);
      var SideCar = sideCar;
      var containerRef = (0, use_callback_ref_1.useMergeRefs)([ref, parentRef]);
      var containerProps = tslib_1.__assign(tslib_1.__assign({}, rest), callbacks);
      return React13.createElement(
        React13.Fragment,
        null,
        enabled && React13.createElement(SideCar, { sideCar: medium_1.effectCar, removeScrollBar, shards, noIsolation, inert, setCallbacks, allowPinchZoom: !!allowPinchZoom, lockRef: ref }),
        forwardProps ? React13.cloneElement(React13.Children.only(children), tslib_1.__assign(tslib_1.__assign({}, containerProps), { ref: containerRef })) : React13.createElement(Container, tslib_1.__assign({}, containerProps, { className, ref: containerRef }), children)
      );
    });
    exports.RemoveScroll = RemoveScroll2;
    RemoveScroll2.defaultProps = {
      enabled: true,
      removeScrollBar: true,
      inert: false
    };
    RemoveScroll2.classNames = {
      fullWidth: constants_1.fullWidthClassName,
      zeroRight: constants_1.zeroRightClassName
    };
  }
});

// node_modules/get-nonce/dist/es5/index.js
var require_es54 = __commonJS({
  "node_modules/get-nonce/dist/es5/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var currentNonce;
    exports.setNonce = function(nonce) {
      currentNonce = nonce;
    };
    exports.getNonce = function() {
      if (currentNonce) {
        return currentNonce;
      }
      if (typeof __webpack_nonce__ !== "undefined") {
        return __webpack_nonce__;
      }
      return void 0;
    };
  }
});

// node_modules/react-style-singleton/dist/es5/singleton.js
var require_singleton = __commonJS({
  "node_modules/react-style-singleton/dist/es5/singleton.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.stylesheetSingleton = void 0;
    var get_nonce_1 = require_es54();
    function makeStyleTag() {
      if (!document)
        return null;
      var tag = document.createElement("style");
      tag.type = "text/css";
      var nonce = (0, get_nonce_1.getNonce)();
      if (nonce) {
        tag.setAttribute("nonce", nonce);
      }
      return tag;
    }
    __name(makeStyleTag, "makeStyleTag");
    function injectStyles(tag, css) {
      if (tag.styleSheet) {
        tag.styleSheet.cssText = css;
      } else {
        tag.appendChild(document.createTextNode(css));
      }
    }
    __name(injectStyles, "injectStyles");
    function insertStyleTag(tag) {
      var head = document.head || document.getElementsByTagName("head")[0];
      head.appendChild(tag);
    }
    __name(insertStyleTag, "insertStyleTag");
    var stylesheetSingleton = /* @__PURE__ */ __name(function() {
      var counter = 0;
      var stylesheet = null;
      return {
        add: function(style) {
          if (counter == 0) {
            if (stylesheet = makeStyleTag()) {
              injectStyles(stylesheet, style);
              insertStyleTag(stylesheet);
            }
          }
          counter++;
        },
        remove: function() {
          counter--;
          if (!counter && stylesheet) {
            stylesheet.parentNode && stylesheet.parentNode.removeChild(stylesheet);
            stylesheet = null;
          }
        }
      };
    }, "stylesheetSingleton");
    exports.stylesheetSingleton = stylesheetSingleton;
  }
});

// node_modules/react-style-singleton/dist/es5/hook.js
var require_hook2 = __commonJS({
  "node_modules/react-style-singleton/dist/es5/hook.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.styleHookSingleton = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var React13 = tslib_1.__importStar(require("react"));
    var singleton_1 = require_singleton();
    var styleHookSingleton = /* @__PURE__ */ __name(function() {
      var sheet = (0, singleton_1.stylesheetSingleton)();
      return function(styles, isDynamic) {
        React13.useEffect(function() {
          sheet.add(styles);
          return function() {
            sheet.remove();
          };
        }, [styles && isDynamic]);
      };
    }, "styleHookSingleton");
    exports.styleHookSingleton = styleHookSingleton;
  }
});

// node_modules/react-style-singleton/dist/es5/component.js
var require_component = __commonJS({
  "node_modules/react-style-singleton/dist/es5/component.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.styleSingleton = void 0;
    var hook_1 = require_hook2();
    var styleSingleton = /* @__PURE__ */ __name(function() {
      var useStyle2 = (0, hook_1.styleHookSingleton)();
      var Sheet = /* @__PURE__ */ __name(function(_a) {
        var styles = _a.styles, dynamic = _a.dynamic;
        useStyle2(styles, dynamic);
        return null;
      }, "Sheet");
      return Sheet;
    }, "styleSingleton");
    exports.styleSingleton = styleSingleton;
  }
});

// node_modules/react-style-singleton/dist/es5/index.js
var require_es55 = __commonJS({
  "node_modules/react-style-singleton/dist/es5/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.styleHookSingleton = exports.stylesheetSingleton = exports.styleSingleton = void 0;
    var component_1 = require_component();
    Object.defineProperty(exports, "styleSingleton", { enumerable: true, get: function() {
      return component_1.styleSingleton;
    } });
    var singleton_1 = require_singleton();
    Object.defineProperty(exports, "stylesheetSingleton", { enumerable: true, get: function() {
      return singleton_1.stylesheetSingleton;
    } });
    var hook_1 = require_hook2();
    Object.defineProperty(exports, "styleHookSingleton", { enumerable: true, get: function() {
      return hook_1.styleHookSingleton;
    } });
  }
});

// node_modules/react-remove-scroll-bar/dist/es5/utils.js
var require_utils = __commonJS({
  "node_modules/react-remove-scroll-bar/dist/es5/utils.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getGapWidth = exports.zeroGap = void 0;
    exports.zeroGap = {
      left: 0,
      top: 0,
      right: 0,
      gap: 0
    };
    var parse = /* @__PURE__ */ __name(function(x) {
      return parseInt(x || "", 10) || 0;
    }, "parse");
    var getOffset = /* @__PURE__ */ __name(function(gapMode) {
      var cs = window.getComputedStyle(document.body);
      var left = cs[gapMode === "padding" ? "paddingLeft" : "marginLeft"];
      var top = cs[gapMode === "padding" ? "paddingTop" : "marginTop"];
      var right = cs[gapMode === "padding" ? "paddingRight" : "marginRight"];
      return [parse(left), parse(top), parse(right)];
    }, "getOffset");
    var getGapWidth = /* @__PURE__ */ __name(function(gapMode) {
      if (gapMode === void 0) {
        gapMode = "margin";
      }
      if (typeof window === "undefined") {
        return exports.zeroGap;
      }
      var offsets = getOffset(gapMode);
      var documentWidth = document.documentElement.clientWidth;
      var windowWidth = window.innerWidth;
      return {
        left: offsets[0],
        top: offsets[1],
        right: offsets[2],
        gap: Math.max(0, windowWidth - documentWidth + offsets[2] - offsets[0])
      };
    }, "getGapWidth");
    exports.getGapWidth = getGapWidth;
  }
});

// node_modules/react-remove-scroll-bar/dist/es5/component.js
var require_component2 = __commonJS({
  "node_modules/react-remove-scroll-bar/dist/es5/component.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.RemoveScrollBar = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var React13 = tslib_1.__importStar(require("react"));
    var react_style_singleton_1 = require_es55();
    var constants_1 = require_constants();
    var utils_1 = require_utils();
    var Style = (0, react_style_singleton_1.styleSingleton)();
    var getStyles = /* @__PURE__ */ __name(function(_a, allowRelative, gapMode, important) {
      var left = _a.left, top = _a.top, right = _a.right, gap = _a.gap;
      if (gapMode === void 0) {
        gapMode = "margin";
      }
      return "\n  .".concat(constants_1.noScrollbarsClassName, " {\n   overflow: hidden ").concat(important, ";\n   padding-right: ").concat(gap, "px ").concat(important, ";\n  }\n  body {\n    overflow: hidden ").concat(important, ";\n    overscroll-behavior: contain;\n    ").concat([
        allowRelative && "position: relative ".concat(important, ";"),
        gapMode === "margin" && "\n    padding-left: ".concat(left, "px;\n    padding-top: ").concat(top, "px;\n    padding-right: ").concat(right, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(gap, "px ").concat(important, ";\n    "),
        gapMode === "padding" && "padding-right: ".concat(gap, "px ").concat(important, ";")
      ].filter(Boolean).join(""), "\n  }\n  \n  .").concat(constants_1.zeroRightClassName, " {\n    right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(constants_1.fullWidthClassName, " {\n    margin-right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(constants_1.zeroRightClassName, " .").concat(constants_1.zeroRightClassName, " {\n    right: 0 ").concat(important, ";\n  }\n  \n  .").concat(constants_1.fullWidthClassName, " .").concat(constants_1.fullWidthClassName, " {\n    margin-right: 0 ").concat(important, ";\n  }\n  \n  body {\n    ").concat(constants_1.removedBarSizeVariable, ": ").concat(gap, "px;\n  }\n");
    }, "getStyles");
    var RemoveScrollBar = /* @__PURE__ */ __name(function(props) {
      var noRelative = props.noRelative, noImportant = props.noImportant, _a = props.gapMode, gapMode = _a === void 0 ? "margin" : _a;
      var gap = React13.useMemo(function() {
        return (0, utils_1.getGapWidth)(gapMode);
      }, [gapMode]);
      return React13.createElement(Style, { styles: getStyles(gap, !noRelative, gapMode, !noImportant ? "!important" : "") });
    }, "RemoveScrollBar");
    exports.RemoveScrollBar = RemoveScrollBar;
  }
});

// node_modules/react-remove-scroll-bar/dist/es5/index.js
var require_es56 = __commonJS({
  "node_modules/react-remove-scroll-bar/dist/es5/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getGapWidth = exports.removedBarSizeVariable = exports.noScrollbarsClassName = exports.fullWidthClassName = exports.zeroRightClassName = exports.RemoveScrollBar = void 0;
    var component_1 = require_component2();
    Object.defineProperty(exports, "RemoveScrollBar", { enumerable: true, get: function() {
      return component_1.RemoveScrollBar;
    } });
    var constants_1 = require_constants();
    Object.defineProperty(exports, "zeroRightClassName", { enumerable: true, get: function() {
      return constants_1.zeroRightClassName;
    } });
    Object.defineProperty(exports, "fullWidthClassName", { enumerable: true, get: function() {
      return constants_1.fullWidthClassName;
    } });
    Object.defineProperty(exports, "noScrollbarsClassName", { enumerable: true, get: function() {
      return constants_1.noScrollbarsClassName;
    } });
    Object.defineProperty(exports, "removedBarSizeVariable", { enumerable: true, get: function() {
      return constants_1.removedBarSizeVariable;
    } });
    var utils_1 = require_utils();
    Object.defineProperty(exports, "getGapWidth", { enumerable: true, get: function() {
      return utils_1.getGapWidth;
    } });
  }
});

// node_modules/react-remove-scroll/dist/es5/aggresiveCapture.js
var require_aggresiveCapture = __commonJS({
  "node_modules/react-remove-scroll/dist/es5/aggresiveCapture.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.nonPassive = void 0;
    var passiveSupported = false;
    if (typeof window !== "undefined") {
      try {
        options = Object.defineProperty({}, "passive", {
          get: function() {
            passiveSupported = true;
            return true;
          }
        });
        window.addEventListener("test", options, options);
        window.removeEventListener("test", options, options);
      } catch (err) {
        passiveSupported = false;
      }
    }
    var options;
    exports.nonPassive = passiveSupported ? { passive: false } : false;
  }
});

// node_modules/react-remove-scroll/dist/es5/handleScroll.js
var require_handleScroll = __commonJS({
  "node_modules/react-remove-scroll/dist/es5/handleScroll.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.handleScroll = exports.locationCouldBeScrolled = void 0;
    var alwaysContainsScroll = /* @__PURE__ */ __name(function(node) {
      return node.tagName === "TEXTAREA";
    }, "alwaysContainsScroll");
    var elementCanBeScrolled = /* @__PURE__ */ __name(function(node, overflow) {
      var styles = window.getComputedStyle(node);
      return (
        // not-not-scrollable
        styles[overflow] !== "hidden" && // contains scroll inside self
        !(styles.overflowY === styles.overflowX && !alwaysContainsScroll(node) && styles[overflow] === "visible")
      );
    }, "elementCanBeScrolled");
    var elementCouldBeVScrolled = /* @__PURE__ */ __name(function(node) {
      return elementCanBeScrolled(node, "overflowY");
    }, "elementCouldBeVScrolled");
    var elementCouldBeHScrolled = /* @__PURE__ */ __name(function(node) {
      return elementCanBeScrolled(node, "overflowX");
    }, "elementCouldBeHScrolled");
    var locationCouldBeScrolled = /* @__PURE__ */ __name(function(axis, node) {
      var current = node;
      do {
        if (typeof ShadowRoot !== "undefined" && current instanceof ShadowRoot) {
          current = current.host;
        }
        var isScrollable = elementCouldBeScrolled(axis, current);
        if (isScrollable) {
          var _a = getScrollVariables(axis, current), s = _a[1], d = _a[2];
          if (s > d) {
            return true;
          }
        }
        current = current.parentNode;
      } while (current && current !== document.body);
      return false;
    }, "locationCouldBeScrolled");
    exports.locationCouldBeScrolled = locationCouldBeScrolled;
    var getVScrollVariables = /* @__PURE__ */ __name(function(_a) {
      var scrollTop = _a.scrollTop, scrollHeight = _a.scrollHeight, clientHeight = _a.clientHeight;
      return [
        scrollTop,
        scrollHeight,
        clientHeight
      ];
    }, "getVScrollVariables");
    var getHScrollVariables = /* @__PURE__ */ __name(function(_a) {
      var scrollLeft = _a.scrollLeft, scrollWidth = _a.scrollWidth, clientWidth = _a.clientWidth;
      return [
        scrollLeft,
        scrollWidth,
        clientWidth
      ];
    }, "getHScrollVariables");
    var elementCouldBeScrolled = /* @__PURE__ */ __name(function(axis, node) {
      return axis === "v" ? elementCouldBeVScrolled(node) : elementCouldBeHScrolled(node);
    }, "elementCouldBeScrolled");
    var getScrollVariables = /* @__PURE__ */ __name(function(axis, node) {
      return axis === "v" ? getVScrollVariables(node) : getHScrollVariables(node);
    }, "getScrollVariables");
    var getDirectionFactor = /* @__PURE__ */ __name(function(axis, direction) {
      return axis === "h" && direction === "rtl" ? -1 : 1;
    }, "getDirectionFactor");
    var handleScroll = /* @__PURE__ */ __name(function(axis, endTarget, event, sourceDelta, noOverscroll) {
      var directionFactor = getDirectionFactor(axis, window.getComputedStyle(endTarget).direction);
      var delta = directionFactor * sourceDelta;
      var target = event.target;
      var targetInLock = endTarget.contains(target);
      var shouldCancelScroll = false;
      var isDeltaPositive = delta > 0;
      var availableScroll = 0;
      var availableScrollTop = 0;
      do {
        var _a = getScrollVariables(axis, target), position = _a[0], scroll_1 = _a[1], capacity = _a[2];
        var elementScroll = scroll_1 - capacity - directionFactor * position;
        if (position || elementScroll) {
          if (elementCouldBeScrolled(axis, target)) {
            availableScroll += elementScroll;
            availableScrollTop += position;
          }
        }
        target = target.parentNode;
      } while (
        // portaled content
        !targetInLock && target !== document.body || // self content
        targetInLock && (endTarget.contains(target) || endTarget === target)
      );
      if (isDeltaPositive && (noOverscroll && availableScroll === 0 || !noOverscroll && delta > availableScroll)) {
        shouldCancelScroll = true;
      } else if (!isDeltaPositive && (noOverscroll && availableScrollTop === 0 || !noOverscroll && -delta > availableScrollTop)) {
        shouldCancelScroll = true;
      }
      return shouldCancelScroll;
    }, "handleScroll");
    exports.handleScroll = handleScroll;
  }
});

// node_modules/react-remove-scroll/dist/es5/SideEffect.js
var require_SideEffect = __commonJS({
  "node_modules/react-remove-scroll/dist/es5/SideEffect.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.RemoveScrollSideCar = exports.getDeltaXY = exports.getTouchXY = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var React13 = tslib_1.__importStar(require("react"));
    var react_remove_scroll_bar_1 = require_es56();
    var react_style_singleton_1 = require_es55();
    var aggresiveCapture_1 = require_aggresiveCapture();
    var handleScroll_1 = require_handleScroll();
    var getTouchXY = /* @__PURE__ */ __name(function(event) {
      return "changedTouches" in event ? [event.changedTouches[0].clientX, event.changedTouches[0].clientY] : [0, 0];
    }, "getTouchXY");
    exports.getTouchXY = getTouchXY;
    var getDeltaXY = /* @__PURE__ */ __name(function(event) {
      return [event.deltaX, event.deltaY];
    }, "getDeltaXY");
    exports.getDeltaXY = getDeltaXY;
    var extractRef = /* @__PURE__ */ __name(function(ref) {
      return ref && "current" in ref ? ref.current : ref;
    }, "extractRef");
    var deltaCompare = /* @__PURE__ */ __name(function(x, y) {
      return x[0] === y[0] && x[1] === y[1];
    }, "deltaCompare");
    var generateStyle = /* @__PURE__ */ __name(function(id) {
      return "\n  .block-interactivity-".concat(id, " {pointer-events: none;}\n  .allow-interactivity-").concat(id, " {pointer-events: all;}\n");
    }, "generateStyle");
    var idCounter = 0;
    var lockStack = [];
    function RemoveScrollSideCar(props) {
      var shouldPreventQueue = React13.useRef([]);
      var touchStartRef = React13.useRef([0, 0]);
      var activeAxis = React13.useRef();
      var id = React13.useState(idCounter++)[0];
      var Style = React13.useState(function() {
        return (0, react_style_singleton_1.styleSingleton)();
      })[0];
      var lastProps = React13.useRef(props);
      React13.useEffect(function() {
        lastProps.current = props;
      }, [props]);
      React13.useEffect(function() {
        if (props.inert) {
          document.body.classList.add("block-interactivity-".concat(id));
          var allow_1 = tslib_1.__spreadArray([props.lockRef.current], (props.shards || []).map(extractRef), true).filter(Boolean);
          allow_1.forEach(function(el) {
            return el.classList.add("allow-interactivity-".concat(id));
          });
          return function() {
            document.body.classList.remove("block-interactivity-".concat(id));
            allow_1.forEach(function(el) {
              return el.classList.remove("allow-interactivity-".concat(id));
            });
          };
        }
        return;
      }, [props.inert, props.lockRef.current, props.shards]);
      var shouldCancelEvent = React13.useCallback(function(event, parent) {
        if ("touches" in event && event.touches.length === 2) {
          return !lastProps.current.allowPinchZoom;
        }
        var touch = (0, exports.getTouchXY)(event);
        var touchStart = touchStartRef.current;
        var deltaX = "deltaX" in event ? event.deltaX : touchStart[0] - touch[0];
        var deltaY = "deltaY" in event ? event.deltaY : touchStart[1] - touch[1];
        var currentAxis;
        var target = event.target;
        var moveDirection = Math.abs(deltaX) > Math.abs(deltaY) ? "h" : "v";
        if ("touches" in event && moveDirection === "h" && target.type === "range") {
          return false;
        }
        var canBeScrolledInMainDirection = (0, handleScroll_1.locationCouldBeScrolled)(moveDirection, target);
        if (!canBeScrolledInMainDirection) {
          return true;
        }
        if (canBeScrolledInMainDirection) {
          currentAxis = moveDirection;
        } else {
          currentAxis = moveDirection === "v" ? "h" : "v";
          canBeScrolledInMainDirection = (0, handleScroll_1.locationCouldBeScrolled)(moveDirection, target);
        }
        if (!canBeScrolledInMainDirection) {
          return false;
        }
        if (!activeAxis.current && "changedTouches" in event && (deltaX || deltaY)) {
          activeAxis.current = currentAxis;
        }
        if (!currentAxis) {
          return true;
        }
        var cancelingAxis = activeAxis.current || currentAxis;
        return (0, handleScroll_1.handleScroll)(cancelingAxis, parent, event, cancelingAxis === "h" ? deltaX : deltaY, true);
      }, []);
      var shouldPrevent = React13.useCallback(function(_event) {
        var event = _event;
        if (!lockStack.length || lockStack[lockStack.length - 1] !== Style) {
          return;
        }
        var delta = "deltaY" in event ? (0, exports.getDeltaXY)(event) : (0, exports.getTouchXY)(event);
        var sourceEvent = shouldPreventQueue.current.filter(function(e) {
          return e.name === event.type && e.target === event.target && deltaCompare(e.delta, delta);
        })[0];
        if (sourceEvent && sourceEvent.should) {
          if (event.cancelable) {
            event.preventDefault();
          }
          return;
        }
        if (!sourceEvent) {
          var shardNodes = (lastProps.current.shards || []).map(extractRef).filter(Boolean).filter(function(node) {
            return node.contains(event.target);
          });
          var shouldStop = shardNodes.length > 0 ? shouldCancelEvent(event, shardNodes[0]) : !lastProps.current.noIsolation;
          if (shouldStop) {
            if (event.cancelable) {
              event.preventDefault();
            }
          }
        }
      }, []);
      var shouldCancel = React13.useCallback(function(name, delta, target, should) {
        var event = { name, delta, target, should };
        shouldPreventQueue.current.push(event);
        setTimeout(function() {
          shouldPreventQueue.current = shouldPreventQueue.current.filter(function(e) {
            return e !== event;
          });
        }, 1);
      }, []);
      var scrollTouchStart = React13.useCallback(function(event) {
        touchStartRef.current = (0, exports.getTouchXY)(event);
        activeAxis.current = void 0;
      }, []);
      var scrollWheel = React13.useCallback(function(event) {
        shouldCancel(event.type, (0, exports.getDeltaXY)(event), event.target, shouldCancelEvent(event, props.lockRef.current));
      }, []);
      var scrollTouchMove = React13.useCallback(function(event) {
        shouldCancel(event.type, (0, exports.getTouchXY)(event), event.target, shouldCancelEvent(event, props.lockRef.current));
      }, []);
      React13.useEffect(function() {
        lockStack.push(Style);
        props.setCallbacks({
          onScrollCapture: scrollWheel,
          onWheelCapture: scrollWheel,
          onTouchMoveCapture: scrollTouchMove
        });
        document.addEventListener("wheel", shouldPrevent, aggresiveCapture_1.nonPassive);
        document.addEventListener("touchmove", shouldPrevent, aggresiveCapture_1.nonPassive);
        document.addEventListener("touchstart", scrollTouchStart, aggresiveCapture_1.nonPassive);
        return function() {
          lockStack = lockStack.filter(function(inst) {
            return inst !== Style;
          });
          document.removeEventListener("wheel", shouldPrevent, aggresiveCapture_1.nonPassive);
          document.removeEventListener("touchmove", shouldPrevent, aggresiveCapture_1.nonPassive);
          document.removeEventListener("touchstart", scrollTouchStart, aggresiveCapture_1.nonPassive);
        };
      }, []);
      var removeScrollBar = props.removeScrollBar, inert = props.inert;
      return React13.createElement(
        React13.Fragment,
        null,
        inert ? React13.createElement(Style, { styles: generateStyle(id) }) : null,
        removeScrollBar ? React13.createElement(react_remove_scroll_bar_1.RemoveScrollBar, { gapMode: "margin" }) : null
      );
    }
    __name(RemoveScrollSideCar, "RemoveScrollSideCar");
    exports.RemoveScrollSideCar = RemoveScrollSideCar;
  }
});

// node_modules/react-remove-scroll/dist/es5/sidecar.js
var require_sidecar = __commonJS({
  "node_modules/react-remove-scroll/dist/es5/sidecar.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var use_sidecar_1 = require_es53();
    var SideEffect_1 = require_SideEffect();
    var medium_1 = require_medium2();
    exports.default = (0, use_sidecar_1.exportSidecar)(medium_1.effectCar, SideEffect_1.RemoveScrollSideCar);
  }
});

// node_modules/react-remove-scroll/dist/es5/Combination.js
var require_Combination = __commonJS({
  "node_modules/react-remove-scroll/dist/es5/Combination.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var React13 = tslib_1.__importStar(require("react"));
    var UI_1 = require_UI();
    var sidecar_1 = tslib_1.__importDefault(require_sidecar());
    var ReactRemoveScroll = React13.forwardRef(function(props, ref) {
      return React13.createElement(UI_1.RemoveScroll, tslib_1.__assign({}, props, { ref, sideCar: sidecar_1.default }));
    });
    ReactRemoveScroll.classNames = UI_1.RemoveScroll.classNames;
    exports.default = ReactRemoveScroll;
  }
});

// node_modules/react-remove-scroll/dist/es5/index.js
var require_es57 = __commonJS({
  "node_modules/react-remove-scroll/dist/es5/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.RemoveScroll = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var Combination_1 = tslib_1.__importDefault(require_Combination());
    exports.RemoveScroll = Combination_1.default;
  }
});

// node_modules/@tamagui/remove-scroll/dist/cjs/RemoveScroll.js
var require_RemoveScroll = __commonJS({
  "node_modules/@tamagui/remove-scroll/dist/cjs/RemoveScroll.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var RemoveScroll_exports = {};
    __export2(RemoveScroll_exports, {
      RemoveScroll: () => RemoveScroll2
    });
    module2.exports = __toCommonJS2(RemoveScroll_exports);
    var import_jsx_runtime13 = require("react/jsx-runtime");
    var import_react_remove_scroll = require_es57();
    var RemoveScroll2 = /* @__PURE__ */ __name((props) => {
      if (!props.children)
        return null;
      return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_react_remove_scroll.RemoveScroll, { ...props });
    }, "RemoveScroll");
    RemoveScroll2.classNames = import_react_remove_scroll.RemoveScroll.classNames;
  }
});

// node_modules/@tamagui/remove-scroll/dist/cjs/index.js
var require_cjs14 = __commonJS({
  "node_modules/@tamagui/remove-scroll/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_RemoveScroll(), module2.exports);
  }
});

// node_modules/@tamagui/use-constant/dist/cjs/index.js
var require_cjs15 = __commonJS({
  "node_modules/@tamagui/use-constant/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    __export2(src_exports, {
      useConstant: () => useConstant
    });
    module2.exports = __toCommonJS2(src_exports);
    var import_react13 = require("react");
    function useConstant(fn) {
      if (typeof document === "undefined") {
        return (0, import_react13.useMemo)(() => fn(), []);
      }
      const ref = (0, import_react13.useRef)();
      if (!ref.current) {
        ref.current = { v: fn() };
      }
      return ref.current.v;
    }
    __name(useConstant, "useConstant");
  }
});

// node_modules/@tamagui/use-controllable-state/dist/cjs/useControllableState.js
var require_useControllableState = __commonJS({
  "node_modules/@tamagui/use-controllable-state/dist/cjs/useControllableState.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var useControllableState_exports = {};
    __export2(useControllableState_exports, {
      useControllableState: () => useControllableState2
    });
    module2.exports = __toCommonJS2(useControllableState_exports);
    var import_use_event2 = require_cjs7();
    var import_react13 = require("react");
    var emptyCallbackFn2 = /* @__PURE__ */ __name((_) => _(), "emptyCallbackFn");
    function useControllableState2({
      prop,
      defaultProp,
      onChange,
      strategy = "prop-wins",
      preventUpdate,
      transition
    }) {
      const [state, setState] = (0, import_react13.useState)(prop ?? defaultProp);
      const previous = (0, import_react13.useRef)(state);
      const propWins = strategy === "prop-wins" && prop !== void 0;
      const value = propWins ? prop : state;
      const onChangeCb = (0, import_use_event2.useEvent)(onChange || idFn4);
      const transitionFn = transition ? import_react13.startTransition : emptyCallbackFn2;
      (0, import_react13.useEffect)(() => {
        if (prop === void 0)
          return;
        previous.current = prop;
        transitionFn(() => {
          setState(prop);
        });
      }, [prop]);
      (0, import_react13.useEffect)(() => {
        if (propWins)
          return;
        if (state !== previous.current) {
          previous.current = state;
          onChangeCb(state);
        }
      }, [onChangeCb, state, propWins]);
      const setter = (0, import_use_event2.useEvent)((next) => {
        if (preventUpdate)
          return;
        if (propWins) {
          const nextValue = typeof next === "function" ? next(previous.current) : next;
          onChangeCb(nextValue);
        } else {
          transitionFn(() => {
            setState(next);
          });
        }
      });
      return [value, setter];
    }
    __name(useControllableState2, "useControllableState");
    var idFn4 = /* @__PURE__ */ __name(() => {
    }, "idFn");
  }
});

// node_modules/@tamagui/use-controllable-state/dist/cjs/index.js
var require_cjs16 = __commonJS({
  "node_modules/@tamagui/use-controllable-state/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_useControllableState(), module2.exports);
  }
});

// node_modules/@tamagui/sheet/dist/cjs/constants.js
var require_constants2 = __commonJS({
  "node_modules/@tamagui/sheet/dist/cjs/constants.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var constants_exports = {};
    __export2(constants_exports, {
      SHEET_HANDLE_NAME: () => SHEET_HANDLE_NAME,
      SHEET_NAME: () => SHEET_NAME,
      constants: () => constants
    });
    module2.exports = __toCommonJS2(constants_exports);
    var constants = {};
    var SHEET_NAME = "Sheet";
    var SHEET_HANDLE_NAME = "SheetHandle";
  }
});

// node_modules/@tamagui/sheet/dist/cjs/SheetContext.js
var require_SheetContext = __commonJS({
  "node_modules/@tamagui/sheet/dist/cjs/SheetContext.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var SheetContext_exports = {};
    __export2(SheetContext_exports, {
      SheetProvider: () => SheetProvider,
      createSheetContext: () => createSheetContext,
      createSheetScope: () => createSheetScope2,
      useSheetContext: () => useSheetContext
    });
    module2.exports = __toCommonJS2(SheetContext_exports);
    var import_create_context5 = require_cjs3();
    var import_constants = require_constants2();
    var [createSheetContext, createSheetScope2] = (0, import_create_context5.createContextScope)(import_constants.SHEET_NAME);
    var [SheetProvider, useSheetContext] = createSheetContext(
      import_constants.SHEET_NAME,
      {}
    );
  }
});

// node_modules/@tamagui/scroll-view/dist/cjs/ScrollView.js
var require_ScrollView = __commonJS({
  "node_modules/@tamagui/scroll-view/dist/cjs/ScrollView.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var ScrollView_exports = {};
    __export2(ScrollView_exports, {
      ScrollView: () => ScrollView2
    });
    module2.exports = __toCommonJS2(ScrollView_exports);
    var import_core30 = require("@tamagui/core-node");
    var import_core210 = require("@tamagui/core-node");
    var import_react_native6 = require("react-native-web-lite");
    (0, import_core210.setupReactNative)({
      ScrollView: import_react_native6.ScrollView
    });
    var ScrollView2 = (0, import_core30.styled)(
      import_react_native6.ScrollView,
      {
        name: "ScrollView",
        scrollEnabled: true
      },
      {
        isReactNative: true
      }
    );
  }
});

// node_modules/@tamagui/scroll-view/dist/cjs/index.js
var require_cjs17 = __commonJS({
  "node_modules/@tamagui/scroll-view/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_ScrollView(), module2.exports);
  }
});

// node_modules/@tamagui/sheet/dist/cjs/SheetScrollView.js
var require_SheetScrollView = __commonJS({
  "node_modules/@tamagui/sheet/dist/cjs/SheetScrollView.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var SheetScrollView_exports = {};
    __export2(SheetScrollView_exports, {
      SheetScrollView: () => SheetScrollView
    });
    module2.exports = __toCommonJS2(SheetScrollView_exports);
    var import_jsx_runtime13 = require("react/jsx-runtime");
    var import_core30 = require("@tamagui/core-node");
    var import_scroll_view = require_cjs17();
    var import_react13 = require("react");
    var import_SheetContext = require_SheetContext();
    var SHEET_SCROLL_VIEW_NAME = "SheetScrollView";
    var SheetScrollView = (0, import_react13.forwardRef)(
      ({ __scopeSheet, children, ...props }, ref) => {
        const { scrollBridge, position, snapPoints, frameSize, open } = (0, import_SheetContext.useSheetContext)(
          SHEET_SCROLL_VIEW_NAME,
          __scopeSheet
        );
        const scrollRef = (0, import_react13.useRef)(null);
        const percentOpened = snapPoints[position] ?? 0;
        const [percentToPadBottom, setPercentToPadBottom] = (0, import_react13.useState)(0);
        const next = 100 - percentOpened;
        if (open && next !== percentToPadBottom) {
          setPercentToPadBottom(next);
        }
        const state = (0, import_react13.useRef)({
          lastPageY: 0,
          dragAt: 0,
          dys: [],
          // store a few recent dys to get velocity on release
          isScrolling: false,
          isDragging: false
        });
        const release = /* @__PURE__ */ __name(() => {
          if (!state.current.isDragging) {
            return;
          }
          state.current.isDragging = false;
          scrollBridge.scrollStartY = -1;
          state.current.isScrolling = false;
          let vy = 0;
          if (state.current.dys.length) {
            const recentDys = state.current.dys.slice(-10);
            const dist = recentDys.length ? recentDys.reduce((a, b) => a + b, 0) : 0;
            const avgDy = dist / recentDys.length;
            vy = avgDy * 0.04;
          }
          state.current.dys = [];
          scrollBridge.release({
            dragAt: state.current.dragAt,
            vy
          });
        }, "release");
        return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(
          import_scroll_view.ScrollView,
          {
            ref: (0, import_core30.composeRefs)(scrollRef, ref),
            flex: 1,
            scrollEventThrottle: 8,
            onScroll: (e) => {
              const { y } = e.nativeEvent.contentOffset;
              scrollBridge.y = y;
              if (y > 0) {
                scrollBridge.scrollStartY = -1;
              }
            },
            onStartShouldSetResponder: () => {
              scrollBridge.scrollStartY = -1;
              state.current.isDragging = true;
              return true;
            },
            onMoveShouldSetResponder: () => false,
            onResponderRelease: release,
            className: "_ovs-contain",
            ...props,
            children: [
              (0, import_react13.useMemo)(() => children, [children]),
              /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_core30.Stack, { height: percentToPadBottom / 100 * frameSize, width: 0 })
            ]
          }
        );
      }
    );
  }
});

// node_modules/@tamagui/sheet/dist/cjs/Sheet.js
var require_Sheet = __commonJS({
  "node_modules/@tamagui/sheet/dist/cjs/Sheet.js"(exports, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      // If the importer is in node compatibility mode or this is not an ESM
      // file that has been converted to a CommonJS file using a Babel-
      // compatible transform (i.e. "__esModule" has not been set), then set
      // "default" to the CommonJS "module.exports" for node compatibility.
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var Sheet_exports = {};
    __export2(Sheet_exports, {
      ControlledSheet: () => ControlledSheet2,
      Sheet: () => Sheet,
      SheetController: () => SheetController2,
      SheetFrame: () => SheetFrame,
      SheetFrameFrame: () => SheetFrameFrame,
      SheetHandle: () => SheetHandle,
      SheetHandleFrame: () => SheetHandleFrame,
      SheetOverlay: () => SheetOverlay,
      SheetOverlayFrame: () => SheetOverlayFrame,
      createSheetScope: () => import_SheetContext2.createSheetScope
    });
    module2.exports = __toCommonJS2(Sheet_exports);
    var import_jsx_runtime13 = require("react/jsx-runtime");
    var import_adapt2 = require_cjs();
    var import_compose_refs3 = require_cjs2();
    var import_core30 = require("@tamagui/core-node");
    var import_portal3 = require_cjs13();
    var import_remove_scroll2 = require_cjs14();
    var import_stacks9 = require_cjs12();
    var import_use_constant = require_cjs15();
    var import_use_controllable_state2 = require_cjs16();
    var import_react13 = __toESM2(require("react"));
    var import_react_native6 = require("react-native-web-lite");
    var import_constants = require_constants2();
    var import_SheetContext = require_SheetContext();
    var import_SheetScrollView = require_SheetScrollView();
    var import_SheetContext2 = require_SheetContext();
    var SheetHandleFrame = (0, import_core30.styled)(import_stacks9.XStack, {
      name: import_constants.SHEET_HANDLE_NAME,
      height: 10,
      borderRadius: 100,
      backgroundColor: "$background",
      zIndex: 10,
      marginHorizontal: "35%",
      marginBottom: "$2",
      opacity: 0.5,
      hoverStyle: {
        opacity: 0.7
      },
      variants: {
        open: {
          true: {
            pointerEvents: "auto"
          },
          false: {
            opacity: 0,
            pointerEvents: "none"
          }
        }
      }
    });
    var SheetHandle = SheetHandleFrame.extractable(
      ({ __scopeSheet, ...props }) => {
        const context = (0, import_SheetContext.useSheetContext)(import_constants.SHEET_HANDLE_NAME, __scopeSheet);
        return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
          SheetHandleFrame,
          {
            onPress: () => {
              const max3 = context.snapPoints.length + (context.dismissOnSnapToBottom ? -1 : 0);
              const nextPos = (context.position + 1) % max3;
              context.setPosition(nextPos);
            },
            open: context.open,
            ...props
          }
        );
      }
    );
    var SHEET_OVERLAY_NAME = "SheetOverlay";
    var SheetOverlayFrame = (0, import_core30.styled)(import_stacks9.YStack, {
      name: SHEET_OVERLAY_NAME,
      backgroundColor: "$color10",
      fullscreen: true,
      opacity: 0.5,
      zIndex: 0,
      variants: {
        closed: {
          true: {
            opacity: 0,
            pointerEvents: "none"
          },
          false: {
            pointerEvents: "auto"
          }
        }
      }
    });
    var SheetOverlay = SheetOverlayFrame.extractable(
      ({ __scopeSheet, ...props }) => {
        const context = (0, import_SheetContext.useSheetContext)(SHEET_OVERLAY_NAME, __scopeSheet);
        return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
          SheetOverlayFrame,
          {
            closed: !context.open || context.hidden,
            ...props,
            onPress: (0, import_core30.mergeEvent)(
              props.onPress,
              context.dismissOnOverlayPress ? () => {
                context.setOpen(false);
              } : void 0
            )
          }
        );
      }
    );
    var selectionStyleSheet = import_core30.isClient ? document.createElement("style") : null;
    if (selectionStyleSheet) {
      document.head.appendChild(selectionStyleSheet);
    }
    var SheetFrameFrame = (0, import_core30.styled)(import_stacks9.YStack, {
      name: import_constants.SHEET_NAME,
      flex: 1,
      backgroundColor: "$background",
      borderTopLeftRadius: "$true",
      borderTopRightRadius: "$true",
      width: "100%",
      maxHeight: "100%",
      overflow: "hidden",
      pointerEvents: "auto"
    });
    var SheetFrame = SheetFrameFrame.extractable(
      (0, import_react13.forwardRef)(
        ({ __scopeSheet, ...props }, forwardedRef) => {
          const context = (0, import_SheetContext.useSheetContext)(import_constants.SHEET_NAME, __scopeSheet);
          const composedContentRef = (0, import_compose_refs3.useComposedRefs)(forwardedRef, context.contentRef);
          return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(SheetFrameFrame, { ref: composedContentRef, ...props });
        }
      )
    );
    var HIDDEN_SIZE = 1e4;
    var sheetComponents = {
      Handle: SheetHandle,
      Frame: SheetFrame,
      Overlay: SheetOverlay,
      ScrollView: import_SheetScrollView.SheetScrollView
    };
    var ParentSheetContext = (0, import_react13.createContext)({
      zIndex: 40
    });
    var useSheetContoller = /* @__PURE__ */ __name(() => {
      const controller = (0, import_react13.useContext)(SheetControllerContext);
      const isHidden = controller == null ? void 0 : controller.hidden;
      const isShowingNonSheet = isHidden && (controller == null ? void 0 : controller.open);
      return {
        controller,
        isHidden,
        isShowingNonSheet
      };
    }, "useSheetContoller");
    var Sheet = (0, import_core30.withStaticProperties)(
      (0, import_react13.forwardRef)(/* @__PURE__ */ __name(function Sheet2(props, ref) {
        const hydrated = (0, import_core30.useDidFinishSSR)();
        const { isShowingNonSheet } = useSheetContoller();
        if (isShowingNonSheet || !hydrated) {
          return null;
        }
        return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(SheetImplementation, { ref, ...props });
      }, "Sheet2")),
      sheetComponents
    );
    var SheetImplementation = (0, import_core30.themeable)(
      (0, import_react13.forwardRef)(/* @__PURE__ */ __name(function SheetImplementation2(props, ref) {
        const parentSheet = (0, import_react13.useContext)(ParentSheetContext);
        const { isHidden, controller } = useSheetContoller();
        const {
          __scopeSheet,
          snapPoints: snapPointsProp = [80],
          open: openProp,
          defaultOpen,
          children: childrenProp,
          position: positionProp,
          onPositionChange,
          onOpenChange,
          defaultPosition,
          dismissOnOverlayPress = true,
          animationConfig,
          dismissOnSnapToBottom = false,
          forceRemoveScrollEnabled = null,
          disableDrag: disableDragProp,
          modal = false,
          zIndex = parentSheet.zIndex + 1,
          portalProps
        } = props;
        if (process.env.NODE_ENV === "development") {
          if (snapPointsProp.some((p) => p < 0 || p > 100)) {
            console.warn(
              "\u26A0\uFE0F Invalid snapPoint given, snapPoints must be between 0 and 100, equal to percent height of frame"
            );
          }
        }
        const driver = (0, import_core30.getAnimationDriver)();
        if (!driver) {
          throw new Error("Must set animations in tamagui.config.ts");
        }
        const disableDrag = disableDragProp ?? (controller == null ? void 0 : controller.disableDrag);
        const themeName = (0, import_core30.useThemeName)();
        const contentRef = import_react13.default.useRef(null);
        const scrollBridge = (0, import_use_constant.useConstant)(() => ({
          enabled: false,
          y: 0,
          paneY: 0,
          paneMinY: 0,
          scrollStartY: -1,
          drag: () => {
          },
          release: () => {
          },
          scrollLock: false
        }));
        const onOpenChangeInternal = /* @__PURE__ */ __name((val) => {
          var _a;
          (_a = controller == null ? void 0 : controller.onOpenChange) == null ? void 0 : _a.call(controller, val);
          onOpenChange == null ? void 0 : onOpenChange(val);
        }, "onOpenChangeInternal");
        const [open, setOpen] = (0, import_use_controllable_state2.useControllableState)({
          prop: (controller == null ? void 0 : controller.open) ?? openProp,
          defaultProp: true,
          onChange: onOpenChangeInternal,
          strategy: "most-recent-wins",
          transition: true
        });
        const [frameSize, setFrameSize] = (0, import_react13.useState)(0);
        const snapPoints = (0, import_react13.useMemo)(
          () => dismissOnSnapToBottom ? [...snapPointsProp, 0] : snapPointsProp,
          // eslint-disable-next-line react-hooks/exhaustive-deps
          [JSON.stringify(snapPointsProp), dismissOnSnapToBottom]
        );
        const [position_, setPosition_] = (0, import_use_controllable_state2.useControllableState)({
          prop: positionProp,
          defaultProp: defaultPosition || (open ? 0 : -1),
          onChange: onPositionChange,
          strategy: "most-recent-wins",
          transition: true
        });
        const position = open === false ? -1 : position_;
        if (open && dismissOnSnapToBottom && position === snapPoints.length - 1) {
          setPosition_(0);
        }
        const setPosition = (0, import_react13.useCallback)(
          (next) => {
            if (dismissOnSnapToBottom && next === snapPoints.length - 1) {
              setOpen(false);
            } else {
              setPosition_(next);
            }
          },
          [dismissOnSnapToBottom, snapPoints.length, setPosition_, setOpen]
        );
        const { useAnimatedNumber, useAnimatedNumberReaction, useAnimatedNumberStyle } = driver;
        const animatedNumber = useAnimatedNumber(HIDDEN_SIZE);
        const at = (0, import_react13.useRef)(0);
        useAnimatedNumberReaction(animatedNumber, (value) => {
          at.current = value;
          scrollBridge.paneY = value;
        });
        const [isResizing, setIsResizing] = (0, import_react13.useState)(true);
        (0, import_core30.useIsomorphicLayoutEffect)(() => {
          if (!isResizing) {
            setIsResizing(true);
          }
        }, [modal]);
        function stopSpring() {
          animatedNumber.stop();
          if (scrollBridge.onFinishAnimate) {
            scrollBridge.onFinishAnimate();
            scrollBridge.onFinishAnimate = void 0;
          }
        }
        __name(stopSpring, "stopSpring");
        const shouldSetPositionOpen = open && position < 0;
        (0, import_react13.useEffect)(() => {
          if (shouldSetPositionOpen) {
            setPosition(0);
          }
        }, [setPosition, shouldSetPositionOpen]);
        const positions = (0, import_react13.useMemo)(
          () => snapPoints.map((point) => getPercentSize(point, frameSize)),
          [frameSize, snapPoints]
        );
        const [opacity, setOpacity] = (0, import_react13.useState)(open ? 1 : 0);
        if (open && opacity === 0) {
          setOpacity(1);
        }
        (0, import_react13.useEffect)(() => {
          if (!open) {
            const tm = setTimeout(() => {
              setOpacity(0);
            }, 400);
            return () => {
              clearTimeout(tm);
            };
          }
        }, [open]);
        const animateTo = (0, import_core30.useEvent)((position2) => {
          const current = animatedNumber.getValue();
          if (isHidden && open)
            return;
          if (!current)
            return;
          if (frameSize === 0)
            return;
          const hiddenValue = frameSize === 0 ? HIDDEN_SIZE : frameSize;
          const toValue = isHidden || position2 === -1 ? hiddenValue : positions[position2];
          if (at.current === toValue)
            return;
          stopSpring();
          if (isHidden || isResizing) {
            if (isResizing) {
              setIsResizing(false);
            }
            animatedNumber.setValue(toValue, {
              type: "timing",
              duration: 0
            });
            at.current = toValue;
            return;
          }
          const overshootClamping = at.current === HIDDEN_SIZE;
          animatedNumber.setValue(toValue, {
            ...animationConfig,
            type: "spring",
            overshootClamping
          });
        });
        (0, import_core30.useIsomorphicLayoutEffect)(() => {
          animateTo(position);
        }, [isHidden, frameSize, position, animateTo]);
        const [isShowingInnerSheet, setIsShowingInnerSheet] = (0, import_react13.useState)(false);
        const shouldHideParentSheet = !import_core30.isWeb && modal && isShowingInnerSheet;
        const parentSheetContext = (0, import_react13.useContext)(SheetInsideSheetContext);
        const onInnerSheet = (0, import_react13.useCallback)((hasChild) => {
          setIsShowingInnerSheet(hasChild);
        }, []);
        const panResponder = (0, import_react13.useMemo)(
          () => {
            if (disableDrag)
              return;
            if (!frameSize)
              return;
            if (isShowingInnerSheet)
              return;
            const minY = positions[0];
            scrollBridge.paneMinY = minY;
            let startY = at.current;
            function makeUnselectable(val) {
              if (!selectionStyleSheet)
                return;
              if (!val) {
                selectionStyleSheet.innerText = "";
              } else {
                selectionStyleSheet.innerText = ":root * { user-select: none !important; -webkit-user-select: none !important; }";
              }
            }
            __name(makeUnselectable, "makeUnselectable");
            const release = /* @__PURE__ */ __name(({ vy, dragAt }) => {
              isExternalDrag = false;
              previouslyScrolling = false;
              makeUnselectable(false);
              const at2 = dragAt + startY;
              const end = at2 + frameSize * vy * 0.2;
              let closestPoint = 0;
              let dist = Infinity;
              for (let i = 0; i < positions.length; i++) {
                const position2 = positions[i];
                const curDist = end > position2 ? end - position2 : position2 - end;
                if (curDist < dist) {
                  dist = curDist;
                  closestPoint = i;
                }
              }
              setPosition(closestPoint);
              animateTo(closestPoint);
            }, "release");
            const finish = /* @__PURE__ */ __name((_e, state) => {
              release({
                vy: state.vy,
                dragAt: state.dy
              });
            }, "finish");
            let previouslyScrolling = false;
            const onMoveShouldSet = /* @__PURE__ */ __name((_e, { dy }) => {
              const isScrolled = scrollBridge.y !== 0;
              const isDraggingUp = dy < 0;
              const isNearTop = scrollBridge.paneY - 5 <= scrollBridge.paneMinY;
              if (isScrolled) {
                previouslyScrolling = true;
                return false;
              }
              if (isNearTop) {
                if (!isScrolled && isDraggingUp) {
                  return false;
                }
              }
              return Math.abs(dy) > 5;
            }, "onMoveShouldSet");
            const grant = /* @__PURE__ */ __name(() => {
              makeUnselectable(true);
              stopSpring();
              startY = at.current;
            }, "grant");
            let isExternalDrag = false;
            scrollBridge.drag = (dy) => {
              if (!isExternalDrag) {
                isExternalDrag = true;
                grant();
              }
              const to = dy + startY;
              animatedNumber.setValue(resisted(to, minY), { type: "direct" });
            };
            scrollBridge.release = release;
            return import_react_native6.PanResponder.create({
              onMoveShouldSetPanResponder: onMoveShouldSet,
              onPanResponderGrant: grant,
              onPanResponderMove: (_e, { dy }) => {
                const toFull = dy + startY;
                const to = resisted(toFull, minY);
                animatedNumber.setValue(to, { type: "direct" });
              },
              onPanResponderEnd: finish,
              onPanResponderTerminate: finish,
              onPanResponderRelease: finish
            });
          },
          // eslint-disable-next-line react-hooks/exhaustive-deps
          [disableDrag, isShowingInnerSheet, animateTo, frameSize, positions, setPosition]
        );
        let handleComponent = null;
        let overlayComponent = null;
        let frameComponent = null;
        import_react13.default.Children.forEach(childrenProp, (child) => {
          var _a, _b;
          if ((0, import_react13.isValidElement)(child)) {
            const name = (_b = (_a = child.type) == null ? void 0 : _a["staticConfig"]) == null ? void 0 : _b.componentName;
            switch (name) {
              case "SheetHandle":
                handleComponent = child;
                break;
              case "Sheet":
                frameComponent = child;
                break;
              case "SheetOverlay":
                overlayComponent = child;
                break;
              default:
                console.warn("Warning: passed invalid child to Sheet", child);
            }
          }
        });
        const animatedStyle = useAnimatedNumberStyle(animatedNumber, (val) => {
          const translateY = frameSize === 0 ? HIDDEN_SIZE : val;
          return {
            transform: [{ translateY }]
          };
        });
        const AnimatedView = driver["NumberView"] ?? driver.View;
        (0, import_core30.useIsomorphicLayoutEffect)(() => {
          if (!(parentSheetContext && open))
            return;
          parentSheetContext(true);
          return () => {
            parentSheetContext(false);
          };
        }, [parentSheetContext, open]);
        const nextParentContext = (0, import_react13.useMemo)(
          () => ({
            zIndex
          }),
          [zIndex]
        );
        const handleLayout = (0, import_react13.useCallback)((e) => {
          var _a;
          let next = (_a = e.nativeEvent) == null ? void 0 : _a.layout.height;
          if (import_core30.isWeb && import_core30.isTouchable && !open) {
            next += 100;
          }
          if (!next)
            return;
          setFrameSize((prev) => {
            const isBigChange = Math.abs(prev - next) > 20;
            setIsResizing(isBigChange);
            return next;
          });
        }, []);
        const removeScrollEnabled = forceRemoveScrollEnabled ?? (open && modal);
        const contents = /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(ParentSheetContext.Provider, { value: nextParentContext, children: /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(
          import_SheetContext.SheetProvider,
          {
            modal,
            contentRef,
            frameSize,
            dismissOnOverlayPress,
            dismissOnSnapToBottom,
            open,
            hidden: !!isHidden,
            scope: __scopeSheet,
            position,
            snapPoints,
            setPosition,
            setOpen,
            scrollBridge,
            children: [
              isResizing || shouldHideParentSheet ? null : overlayComponent,
              /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(
                AnimatedView,
                {
                  ref,
                  ...panResponder == null ? void 0 : panResponder.panHandlers,
                  onLayout: handleLayout,
                  pointerEvents: open && !shouldHideParentSheet ? "auto" : "none",
                  style: [
                    {
                      position: "absolute",
                      zIndex,
                      width: "100%",
                      height: "100%",
                      opacity
                    },
                    animatedStyle
                  ],
                  children: [
                    handleComponent,
                    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
                      import_remove_scroll2.RemoveScroll,
                      {
                        forwardProps: true,
                        enabled: removeScrollEnabled,
                        allowPinchZoom: true,
                        shards: [contentRef],
                        removeScrollBar: false,
                        children: isResizing ? /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_jsx_runtime13.Fragment, {}) : frameComponent
                      }
                    )
                  ]
                }
              )
            ]
          }
        ) });
        const adaptContext = (0, import_react13.useContext)(import_adapt2.AdaptParentContext);
        if (modal) {
          const modalContents = /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_portal3.Portal, { zIndex, ...portalProps, children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_core30.Theme, { forceClassName: true, name: themeName, children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_adapt2.AdaptParentContext.Provider, { value: adaptContext, children: contents }) }) });
          if (import_core30.isWeb) {
            return modalContents;
          }
          return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(SheetInsideSheetContext.Provider, { value: onInnerSheet, children: modalContents });
        }
        return contents;
      }, "SheetImplementation2")),
      { componentName: "Sheet" }
    );
    var SheetInsideSheetContext = (0, import_react13.createContext)(null);
    var ControlledSheet2 = Sheet;
    function getPercentSize(point, frameSize) {
      if (!frameSize)
        return 0;
      if (point === void 0) {
        console.warn("No snapPoint");
        return 0;
      }
      const pct = point / 100;
      const next = Math.round(frameSize - pct * frameSize);
      return next;
    }
    __name(getPercentSize, "getPercentSize");
    function resisted(y, minY, maxOverflow = 25) {
      if (y < minY) {
        const past = minY - y;
        const pctPast = Math.min(maxOverflow, past) / maxOverflow;
        const diminishBy = 1.1 - Math.pow(0.1, pctPast);
        const extra = -diminishBy * maxOverflow;
        return minY + extra;
      }
      return y;
    }
    __name(resisted, "resisted");
    var SheetControllerContext = (0, import_react13.createContext)(null);
    var SheetController2 = /* @__PURE__ */ __name(({
      children,
      onOpenChange: onOpenChangeProp,
      ...value
    }) => {
      const onOpenChange = (0, import_core30.useEvent)(onOpenChangeProp);
      const memoValue = (0, import_react13.useMemo)(
        () => ({
          open: value.open,
          hidden: value.hidden,
          disableDrag: value.disableDrag,
          onOpenChange
        }),
        [onOpenChange, value.open, value.hidden, value.disableDrag]
      );
      return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(SheetControllerContext.Provider, { value: memoValue, children });
    }, "SheetController");
  }
});

// node_modules/@tamagui/sheet/dist/cjs/index.js
var require_cjs18 = __commonJS({
  "node_modules/@tamagui/sheet/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_Sheet(), module2.exports);
  }
});

// node_modules/@tamagui/get-font-sized/dist/cjs/index.js
var require_cjs19 = __commonJS({
  "node_modules/@tamagui/get-font-sized/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    __export2(src_exports, {
      getFontSized: () => getFontSized4
    });
    module2.exports = __toCommonJS2(src_exports);
    var import_core30 = require("@tamagui/core-node");
    var getFontSized4 = /* @__PURE__ */ __name((sizeTokenIn = "$true", { fonts, props }) => {
      var _a, _b, _c;
      const family = (0, import_core30.getVariableValue)(props.fontFamily) || "$body";
      const font = fonts[family] || fonts["$body"];
      if (!font) {
        if (process.env.NODE_ENV === "development") {
          console.warn("\u26A0\uFE0F no font found", {
            family,
            fontTokens: Object.keys(fonts),
            sizeTokenIn
          });
        }
        return {};
      }
      const fontFamily = font.family;
      const sizeToken = sizeTokenIn === "$true" ? getDefaultSizeToken(font) : sizeTokenIn;
      const fontSize = props.fontSize || font.size[sizeToken];
      const lineHeight = props.lineHeight || font.lineHeight[sizeToken];
      const fontWeight = props.fontWeight || font.weight[sizeToken];
      const letterSpacing = props.letterSpacing || font.letterSpacing[sizeToken];
      const fontStyle = props.fontStyle || ((_a = font.style) == null ? void 0 : _a[sizeToken]);
      const textTransform = props.textTransform || ((_b = font.transform) == null ? void 0 : _b[sizeToken]);
      const color = props.color || ((_c = font.color) == null ? void 0 : _c[sizeToken]);
      const style = {
        color,
        fontStyle,
        textTransform,
        fontFamily,
        fontWeight,
        letterSpacing,
        fontSize,
        lineHeight
      };
      if (process.env.NODE_ENV === "development") {
        if (props["debug"]) {
          console.groupCollapsed("  \u{1F539} getFontSized", sizeTokenIn, sizeToken);
          console.log({ style, props, font });
          console.groupEnd();
        }
      }
      return style;
    }, "getFontSized");
    var cache = /* @__PURE__ */ new WeakMap();
    function getDefaultSizeToken(font) {
      if (typeof font === "object" && cache.has(font)) {
        return cache.get(font);
      }
      const sizeTokens = "$true" in font.size ? font.size : (0, import_core30.getTokens)().size;
      const sizeDefault = sizeTokens["$true"];
      const sizeDefaultSpecific = sizeDefault ? Object.keys(sizeTokens).find(
        (x) => x !== "$true" && sizeTokens[x]["val"] === sizeDefault["val"]
      ) : null;
      if (!sizeDefault || !sizeDefaultSpecific) {
        if (process.env.NODE_ENV === "development") {
          console.warn(`No default size is set in your tokens for the "true" key, fonts will be inconsistent.

      Fix this by having consistent tokens across fonts and sizes and setting a true key for your size tokens, or
      set true keys for all your font tokens: "size", "lineHeight", "fontStyle", etc.`);
        }
        return Object.keys(font.size)[3];
      }
      cache.set(font, sizeDefaultSpecific);
      return sizeDefaultSpecific;
    }
    __name(getDefaultSizeToken, "getDefaultSizeToken");
  }
});

// node_modules/@tamagui/text/dist/cjs/SizableText.js
var require_SizableText = __commonJS({
  "node_modules/@tamagui/text/dist/cjs/SizableText.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var SizableText_exports = {};
    __export2(SizableText_exports, {
      SizableText: () => SizableText2
    });
    module2.exports = __toCommonJS2(SizableText_exports);
    var import_core30 = require("@tamagui/core-node");
    var import_get_font_sized4 = require_cjs19();
    var SizableText2 = (0, import_core30.styled)(import_core30.Text, {
      name: "SizableText",
      fontFamily: "$body",
      variants: {
        size: import_get_font_sized4.getFontSized
      },
      defaultVariants: {
        size: "$true"
      }
    });
  }
});

// node_modules/@tamagui/text/dist/cjs/Paragraph.js
var require_Paragraph = __commonJS({
  "node_modules/@tamagui/text/dist/cjs/Paragraph.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var Paragraph_exports = {};
    __export2(Paragraph_exports, {
      Paragraph: () => Paragraph2
    });
    module2.exports = __toCommonJS2(Paragraph_exports);
    var import_core30 = require("@tamagui/core-node");
    var import_SizableText2 = require_SizableText();
    var Paragraph2 = (0, import_core30.styled)(import_SizableText2.SizableText, {
      name: "Paragraph",
      tag: "p",
      userSelect: "auto",
      color: "$color",
      size: "$true"
    });
  }
});

// node_modules/@tamagui/text/dist/cjs/Headings.js
var require_Headings = __commonJS({
  "node_modules/@tamagui/text/dist/cjs/Headings.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var Headings_exports = {};
    __export2(Headings_exports, {
      H1: () => H12,
      H2: () => H22,
      H3: () => H32,
      H4: () => H42,
      H5: () => H52,
      H6: () => H62,
      Heading: () => Heading2
    });
    module2.exports = __toCommonJS2(Headings_exports);
    var import_core30 = require("@tamagui/core-node");
    var import_Paragraph2 = require_Paragraph();
    var Heading2 = (0, import_core30.styled)(import_Paragraph2.Paragraph, {
      tag: "span",
      name: "Heading",
      accessibilityRole: "header",
      fontFamily: "$heading",
      size: "$8",
      margin: 0
    });
    var H12 = (0, import_core30.styled)(Heading2, {
      name: "H1",
      tag: "h1",
      size: "$10"
    });
    var H22 = (0, import_core30.styled)(Heading2, {
      name: "H2",
      tag: "h2",
      size: "$9"
    });
    var H32 = (0, import_core30.styled)(Heading2, {
      name: "H3",
      tag: "h3",
      size: "$8"
    });
    var H42 = (0, import_core30.styled)(Heading2, {
      name: "H4",
      tag: "h4",
      size: "$7"
    });
    var H52 = (0, import_core30.styled)(Heading2, {
      name: "H5",
      tag: "h5",
      size: "$6"
    });
    var H62 = (0, import_core30.styled)(Heading2, {
      name: "H6",
      tag: "h6",
      size: "$5"
    });
  }
});

// node_modules/@tamagui/text/dist/cjs/wrapChildrenInText.js
var require_wrapChildrenInText = __commonJS({
  "node_modules/@tamagui/text/dist/cjs/wrapChildrenInText.js"(exports, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      // If the importer is in node compatibility mode or this is not an ESM
      // file that has been converted to a CommonJS file using a Babel-
      // compatible transform (i.e. "__esModule" has not been set), then set
      // "default" to the CommonJS "module.exports" for node compatibility.
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var wrapChildrenInText_exports = {};
    __export2(wrapChildrenInText_exports, {
      wrapChildrenInText: () => wrapChildrenInText2
    });
    module2.exports = __toCommonJS2(wrapChildrenInText_exports);
    var import_jsx_runtime13 = require("react/jsx-runtime");
    var import_react13 = __toESM2(require("react"));
    function wrapChildrenInText2(TextComponent, propsIn, extraProps) {
      const {
        children,
        textProps,
        size: size2,
        noTextWrap,
        color,
        fontFamily,
        fontSize,
        fontWeight,
        letterSpacing,
        textAlign
      } = propsIn;
      if (noTextWrap || !children) {
        return [children];
      }
      const allChildren = import_react13.default.Children.toArray(children);
      const nextChildren = [];
      let lastIsString = false;
      const props = {
        ...extraProps
      };
      if (color)
        props.color = color;
      if (fontFamily)
        props.fontFamily = fontFamily;
      if (fontSize)
        props.fontSize = fontSize;
      if (fontWeight)
        props.fontWeight = fontWeight;
      if (letterSpacing)
        props.letterSpacing = letterSpacing;
      if (textAlign)
        props.textAlign = textAlign;
      if (size2)
        props.size = size2;
      function concatStringChildren() {
        if (!lastIsString)
          return;
        const index3 = nextChildren.length - 1;
        const childrenStrings = nextChildren[index3];
        nextChildren[index3] = /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(TextComponent, { ...props, ...textProps, children: childrenStrings }, index3);
      }
      __name(concatStringChildren, "concatStringChildren");
      for (const child of allChildren) {
        const last = nextChildren[nextChildren.length - 1];
        const isString = typeof child === "string";
        if (isString) {
          if (lastIsString) {
            last.push(child);
          } else {
            nextChildren.push([child]);
          }
        } else {
          concatStringChildren();
          nextChildren.push(child);
        }
        lastIsString = isString;
      }
      concatStringChildren();
      return nextChildren;
    }
    __name(wrapChildrenInText2, "wrapChildrenInText");
  }
});

// node_modules/@tamagui/text/dist/cjs/types.js
var require_types = __commonJS({
  "node_modules/@tamagui/text/dist/cjs/types.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var types_exports = {};
    module2.exports = __toCommonJS2(types_exports);
  }
});

// node_modules/@tamagui/text/dist/cjs/index.js
var require_cjs20 = __commonJS({
  "node_modules/@tamagui/text/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_SizableText(), module2.exports);
    __reExport2(src_exports, require_Paragraph(), module2.exports);
    __reExport2(src_exports, require_Headings(), module2.exports);
    __reExport2(src_exports, require_wrapChildrenInText(), module2.exports);
    __reExport2(src_exports, require_types(), module2.exports);
  }
});

// node_modules/@tamagui/dialog/dist/cjs/Dialog.js
var require_Dialog = __commonJS({
  "node_modules/@tamagui/dialog/dist/cjs/Dialog.js"(exports, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      // If the importer is in node compatibility mode or this is not an ESM
      // file that has been converted to a CommonJS file using a Babel-
      // compatible transform (i.e. "__esModule" has not been set), then set
      // "default" to the CommonJS "module.exports" for node compatibility.
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var Dialog_exports = {};
    __export2(Dialog_exports, {
      Dialog: () => Dialog3,
      DialogClose: () => DialogClose2,
      DialogContent: () => DialogContent2,
      DialogDescription: () => DialogDescription2,
      DialogOverlay: () => DialogOverlay2,
      DialogPortal: () => DialogPortal2,
      DialogPortalFrame: () => DialogPortalFrame2,
      DialogSheetContents: () => DialogSheetContents2,
      DialogTitle: () => DialogTitle2,
      DialogTrigger: () => DialogTrigger2,
      DialogWarningProvider: () => DialogWarningProvider2,
      createDialogScope: () => createDialogScope2
    });
    module2.exports = __toCommonJS2(Dialog_exports);
    var import_jsx_runtime13 = require("react/jsx-runtime");
    var import_adapt2 = require_cjs();
    var import_animate_presence2 = require_cjs5();
    var import_aria_hidden3 = require_cjs6();
    var import_compose_refs3 = require_cjs2();
    var import_core30 = require("@tamagui/core-node");
    var import_create_context5 = require_cjs3();
    var import_dismissable2 = require_cjs8();
    var import_focus_scope2 = require_cjs9();
    var import_portal3 = require_cjs13();
    var import_remove_scroll2 = require_cjs14();
    var import_sheet2 = require_cjs18();
    var import_stacks9 = require_cjs12();
    var import_text5 = require_cjs20();
    var import_use_controllable_state2 = require_cjs16();
    var React13 = __toESM2(require("react"));
    var DIALOG_NAME2 = "Dialog";
    var [createDialogContext2, createDialogScope2] = (0, import_create_context5.createContextScope)(DIALOG_NAME2);
    var [DialogProvider2, useDialogContext2] = createDialogContext2(DIALOG_NAME2);
    var TRIGGER_NAME3 = "DialogTrigger";
    var DialogTriggerFrame2 = (0, import_core30.styled)(import_stacks9.YStack, {
      name: TRIGGER_NAME3
    });
    var DialogTrigger2 = React13.forwardRef(
      (props, forwardedRef) => {
        const { __scopeDialog, ...triggerProps } = props;
        const context = useDialogContext2(TRIGGER_NAME3, __scopeDialog);
        const composedTriggerRef = (0, import_compose_refs3.useComposedRefs)(forwardedRef, context.triggerRef);
        return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
          DialogTriggerFrame2,
          {
            tag: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": context.open,
            "aria-controls": context.contentId,
            "data-state": getState2(context.open),
            ...triggerProps,
            ref: composedTriggerRef,
            onPress: (0, import_core30.composeEventHandlers)(props.onPress, context.onOpenToggle)
          }
        );
      }
    );
    DialogTrigger2.displayName = TRIGGER_NAME3;
    var PORTAL_NAME2 = "DialogPortal";
    var [PortalProvider3, usePortalContext3] = createDialogContext2(
      PORTAL_NAME2,
      {
        forceMount: void 0
      }
    );
    var DialogPortalFrame2 = (0, import_core30.styled)(import_stacks9.YStack, {
      alignItems: "center",
      justifyContent: "center",
      fullscreen: true,
      zIndex: 100,
      ...import_core30.isWeb && {
        maxHeight: "100vh",
        position: "fixed"
      }
    });
    var DialogPortalItem2 = /* @__PURE__ */ __name((props) => {
      const themeName = (0, import_core30.useThemeName)();
      const context = useDialogContext2(PORTAL_NAME2, props.__scopeDialog);
      return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_portal3.PortalItem, { hostName: props.hostName, children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(DialogPortalItemContent2, { ...props, themeName, context }) });
    }, "DialogPortalItem");
    function DialogPortalItemContent2(props) {
      const {
        __scopeDialog,
        children,
        context,
        themeName,
        space,
        spaceDirection,
        separator
      } = props;
      let childrenSpaced = children;
      if (space || separator) {
        childrenSpaced = (0, import_core30.spacedChildren)({
          children,
          separator,
          space,
          direction: spaceDirection
        });
      }
      return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(DialogProvider2, { scope: __scopeDialog, ...context, children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_core30.Theme, { name: themeName, children: childrenSpaced }) });
    }
    __name(DialogPortalItemContent2, "DialogPortalItemContent");
    var DialogPortal2 = /* @__PURE__ */ __name((props) => {
      const { __scopeDialog, forceMount, children, ...frameProps } = props;
      const context = useDialogContext2(PORTAL_NAME2, __scopeDialog);
      const isShowing = forceMount || context.open;
      const [isFullyHidden, setIsFullyHidden] = React13.useState(!isShowing);
      if (isShowing && isFullyHidden) {
        setIsFullyHidden(false);
      }
      const contents = /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
        import_animate_presence2.AnimatePresence,
        {
          onExitComplete: () => {
            setIsFullyHidden(true);
          },
          children: isShowing ? children : null
        }
      );
      const isSheet = useShowDialogSheet2(context);
      if (isSheet) {
        return children;
      }
      if (context.modal) {
        if (isFullyHidden) {
          return null;
        }
        return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(DialogPortalItem2, { __scopeDialog, children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(PortalProvider3, { scope: __scopeDialog, forceMount, children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(DialogPortalFrame2, { pointerEvents: isShowing ? "auto" : "none", ...frameProps, children: contents }) }) });
      }
      return contents;
    }, "DialogPortal");
    DialogPortal2.displayName = PORTAL_NAME2;
    var OVERLAY_NAME2 = "DialogOverlay";
    var DialogOverlayFrame2 = (0, import_core30.styled)(import_stacks9.ThemeableStack, {
      name: OVERLAY_NAME2,
      backgrounded: true,
      fullscreen: true
    });
    var DialogOverlay2 = React13.forwardRef(
      ({ __scopeDialog, ...props }, forwardedRef) => {
        const portalContext = usePortalContext3(OVERLAY_NAME2, __scopeDialog);
        const { forceMount = portalContext.forceMount, ...overlayProps } = props;
        const context = useDialogContext2(OVERLAY_NAME2, __scopeDialog);
        const showSheet = useShowDialogSheet2(context);
        if (!forceMount) {
          if (!context.modal || showSheet) {
            return null;
          }
        }
        return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(DialogOverlayImpl2, { context, ...overlayProps, ref: forwardedRef });
      }
    );
    DialogOverlay2.displayName = OVERLAY_NAME2;
    var DialogOverlayImpl2 = React13.forwardRef(
      (props, forwardedRef) => {
        const { context, ...overlayProps } = props;
        return (
          // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
          // ie. when `Overlay` and `Content` are siblings
          /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
            DialogOverlayFrame2,
            {
              "data-state": getState2(context.open),
              pointerEvents: context.open ? "auto" : "none",
              ...overlayProps,
              ref: forwardedRef
            }
          )
        );
      }
    );
    var CONTENT_NAME2 = "DialogContent";
    var DialogContentFrame2 = (0, import_core30.styled)(import_stacks9.ThemeableStack, {
      name: CONTENT_NAME2,
      tag: "dialog",
      position: "relative",
      backgrounded: true,
      padded: true,
      radiused: true,
      elevate: true,
      variants: {
        size: {
          "...size": (val, extras) => {
            return {};
          }
        }
      },
      defaultVariants: {
        size: "$true"
      }
    });
    var DialogContent2 = DialogContentFrame2.extractable(
      React13.forwardRef(
        ({ __scopeDialog, ...props }, forwardedRef) => {
          const portalContext = usePortalContext3(CONTENT_NAME2, __scopeDialog);
          const { forceMount = portalContext.forceMount, ...contentProps } = props;
          const context = useDialogContext2(CONTENT_NAME2, __scopeDialog);
          const contents = context.modal ? /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(DialogContentModal2, { context, ...contentProps, ref: forwardedRef }) : /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(DialogContentNonModal2, { context, ...contentProps, ref: forwardedRef });
          if (!import_core30.isWeb) {
            return contents;
          }
          return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
            import_remove_scroll2.RemoveScroll,
            {
              forwardProps: true,
              enabled: context.open,
              allowPinchZoom: context.allowPinchZoom,
              shards: [context.contentRef],
              removeScrollBar: false,
              children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "_dsp_contents", children: contents })
            }
          );
        }
      )
    );
    DialogContent2.displayName = CONTENT_NAME2;
    var DialogContentModal2 = React13.forwardRef(
      ({ children, context, ...props }, forwardedRef) => {
        const contentRef = React13.useRef(null);
        const composedRefs = (0, import_compose_refs3.useComposedRefs)(forwardedRef, context.contentRef, contentRef);
        if (import_core30.isWeb) {
          React13.useEffect(() => {
            if (!context.open)
              return;
            const content = contentRef.current;
            if (content)
              return (0, import_aria_hidden3.hideOthers)(content);
          }, [context.open]);
        }
        return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
          DialogContentImpl2,
          {
            ...props,
            context,
            ref: composedRefs,
            disableOutsidePointerEvents: true,
            onCloseAutoFocus: (0, import_core30.composeEventHandlers)(props.onCloseAutoFocus, (event) => {
              var _a;
              event.preventDefault();
              (_a = context.triggerRef.current) == null ? void 0 : _a.focus();
            }),
            onPointerDownOutside: (0, import_core30.composeEventHandlers)(
              props.onPointerDownOutside,
              (event) => {
                const originalEvent = event["detail"].originalEvent;
                const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
                const isRightClick = originalEvent.button === 2 || ctrlLeftClick;
                if (isRightClick)
                  event.preventDefault();
              }
            ),
            onFocusOutside: (0, import_core30.composeEventHandlers)(
              props.onFocusOutside,
              (event) => event.preventDefault()
            ),
            children
          }
        );
      }
    );
    var DialogContentNonModal2 = React13.forwardRef(
      (props, forwardedRef) => {
        const hasInteractedOutsideRef = React13.useRef(false);
        return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
          DialogContentImpl2,
          {
            ...props,
            ref: forwardedRef,
            trapFocus: false,
            disableOutsidePointerEvents: false,
            onCloseAutoFocus: (event) => {
              var _a, _b;
              (_a = props.onCloseAutoFocus) == null ? void 0 : _a.call(props, event);
              if (!event.defaultPrevented) {
                if (!hasInteractedOutsideRef.current) {
                  (_b = props.context.triggerRef.current) == null ? void 0 : _b.focus();
                }
                event.preventDefault();
              }
              hasInteractedOutsideRef.current = false;
            },
            onInteractOutside: (event) => {
              var _a;
              (_a = props.onInteractOutside) == null ? void 0 : _a.call(props, event);
              if (!event.defaultPrevented)
                hasInteractedOutsideRef.current = true;
              const target = event.target;
              const trigger = props.context.triggerRef.current;
              if (!(trigger instanceof HTMLElement))
                return;
              const targetIsTrigger = trigger.contains(target);
              if (targetIsTrigger)
                event.preventDefault();
            }
          }
        );
      }
    );
    var DialogContentImpl2 = React13.forwardRef(
      (props, forwardedRef) => {
        const {
          __scopeDialog,
          trapFocus,
          onOpenAutoFocus,
          onCloseAutoFocus,
          disableOutsidePointerEvents,
          onEscapeKeyDown,
          onPointerDownOutside,
          onFocusOutside,
          onInteractOutside,
          context,
          ...contentProps
        } = props;
        const contentRef = React13.useRef(null);
        const composedRefs = (0, import_compose_refs3.useComposedRefs)(forwardedRef, contentRef);
        const showSheet = useShowDialogSheet2(context);
        const contents = /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
          DialogContentFrame2,
          {
            id: context.contentId,
            "aria-describedby": context.descriptionId,
            "aria-labelledby": context.titleId,
            "data-state": getState2(context.open),
            ...contentProps
          }
        );
        if (showSheet) {
          return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(DialogPortalItem2, { hostName: getSheetContentsName2(context), children: contentProps.children });
        }
        if (!import_core30.isWeb) {
          return contents;
        }
        return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(import_jsx_runtime13.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
            import_focus_scope2.FocusScope,
            {
              loop: true,
              trapped: trapFocus,
              onMountAutoFocus: onOpenAutoFocus,
              forceUnmount: !context.open,
              onUnmountAutoFocus: onCloseAutoFocus,
              children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
                import_dismissable2.Dismissable,
                {
                  disableOutsidePointerEvents: context.open && disableOutsidePointerEvents,
                  forceUnmount: !context.open,
                  onEscapeKeyDown,
                  onPointerDownOutside,
                  onFocusOutside,
                  onInteractOutside,
                  ref: composedRefs,
                  onDismiss: () => context.onOpenChange(false),
                  children: contents
                }
              )
            }
          ),
          process.env.NODE_ENV === "development" && /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(import_jsx_runtime13.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(TitleWarning2, { titleId: context.titleId }),
            /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
              DescriptionWarning2,
              {
                contentRef,
                descriptionId: context.descriptionId
              }
            )
          ] })
        ] });
      }
    );
    var TITLE_NAME2 = "DialogTitle";
    var DialogTitleFrame2 = (0, import_core30.styled)(import_text5.H2, {
      name: TITLE_NAME2
    });
    var DialogTitle2 = React13.forwardRef(
      (props, forwardedRef) => {
        const { __scopeDialog, ...titleProps } = props;
        const context = useDialogContext2(TITLE_NAME2, __scopeDialog);
        return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(DialogTitleFrame2, { id: context.titleId, ...titleProps, ref: forwardedRef });
      }
    );
    DialogTitle2.displayName = TITLE_NAME2;
    var DialogDescriptionFrame2 = (0, import_core30.styled)(import_text5.Paragraph, {
      name: "DialogDescription"
    });
    var DESCRIPTION_NAME2 = "DialogDescription";
    var DialogDescription2 = React13.forwardRef(
      (props, forwardedRef) => {
        const { __scopeDialog, ...descriptionProps } = props;
        const context = useDialogContext2(DESCRIPTION_NAME2, __scopeDialog);
        return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
          DialogDescriptionFrame2,
          {
            id: context.descriptionId,
            ...descriptionProps,
            ref: forwardedRef
          }
        );
      }
    );
    DialogDescription2.displayName = DESCRIPTION_NAME2;
    var CLOSE_NAME2 = "DialogClose";
    var DialogClose2 = React13.forwardRef(
      (props, forwardedRef) => {
        const { __scopeDialog, displayWhenAdapted, ...closeProps } = props;
        const context = useDialogContext2(CLOSE_NAME2, __scopeDialog, {
          warn: false,
          fallback: {}
        });
        const isSheet = useShowDialogSheet2(context);
        if (isSheet && !displayWhenAdapted) {
          return null;
        }
        return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
          import_stacks9.YStack,
          {
            tag: "button",
            accessibilityLabel: "Dialog Close",
            ...closeProps,
            ref: forwardedRef,
            onPress: (0, import_core30.composeEventHandlers)(
              props.onPress,
              () => context.onOpenChange(false)
            )
          }
        );
      }
    );
    DialogClose2.displayName = CLOSE_NAME2;
    function getState2(open) {
      return open ? "open" : "closed";
    }
    __name(getState2, "getState");
    var TITLE_WARNING_NAME2 = "DialogTitleWarning";
    var [DialogWarningProvider2, useWarningContext2] = (0, import_create_context5.createContext)(TITLE_WARNING_NAME2, {
      contentName: CONTENT_NAME2,
      titleName: TITLE_NAME2,
      docsSlug: "dialog"
    });
    var TitleWarning2 = /* @__PURE__ */ __name(({ titleId }) => {
      if (process.env.NODE_ENV === "development") {
        const titleWarningContext = useWarningContext2(TITLE_WARNING_NAME2);
        const MESSAGE = `\`${titleWarningContext.contentName}\` requires a \`${titleWarningContext.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${titleWarningContext.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${titleWarningContext.docsSlug}`;
        React13.useEffect(() => {
          if (!import_core30.isWeb)
            return;
          if (titleId) {
            const hasTitle = document.getElementById(titleId);
            if (!hasTitle) {
              console.warn(MESSAGE);
            }
          }
        }, [MESSAGE, titleId]);
      }
      return null;
    }, "TitleWarning");
    var DESCRIPTION_WARNING_NAME2 = "DialogDescriptionWarning";
    var DescriptionWarning2 = /* @__PURE__ */ __name(({
      contentRef,
      descriptionId
    }) => {
      if (process.env.NODE_ENV === "development") {
        const descriptionWarningContext = useWarningContext2(DESCRIPTION_WARNING_NAME2);
        const MESSAGE = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${descriptionWarningContext.contentName}}.`;
        React13.useEffect(() => {
          if (!import_core30.isWeb)
            return;
          const contentNode = contentRef.current;
          if (!(contentNode instanceof HTMLElement)) {
            return;
          }
          const describedById = contentNode.getAttribute("aria-describedby");
          if (descriptionId && describedById) {
            const hasDescription = document.getElementById(descriptionId);
            if (!hasDescription) {
              console.warn(MESSAGE);
            }
          }
        }, [MESSAGE, contentRef, descriptionId]);
      }
      return null;
    }, "DescriptionWarning");
    var Dialog3 = (0, import_core30.withStaticProperties)(
      React13.forwardRef(/* @__PURE__ */ __name(function Dialog22(props, ref) {
        const {
          __scopeDialog,
          children,
          open: openProp,
          defaultOpen = false,
          onOpenChange,
          modal = true,
          allowPinchZoom = false
        } = props;
        const scopeId = (0, import_core30.useId)();
        const contentId = (0, import_core30.useId)();
        const titleId = (0, import_core30.useId)();
        const descriptionId = (0, import_core30.useId)();
        const scopeKey = __scopeDialog ? Object.keys(__scopeDialog)[0] : scopeId;
        const sheetContentsName = getSheetContentsName2({ scopeKey, contentId });
        const triggerRef = React13.useRef(null);
        const contentRef = React13.useRef(null);
        const [open, setOpen] = (0, import_use_controllable_state2.useControllableState)({
          prop: openProp,
          defaultProp: defaultOpen,
          onChange: onOpenChange
        });
        const onOpenToggle = React13.useCallback(
          () => setOpen((prevOpen) => !prevOpen),
          [setOpen]
        );
        const context = {
          scope: __scopeDialog,
          scopeKey,
          triggerRef,
          contentRef,
          contentId,
          titleId,
          descriptionId,
          open,
          onOpenChange: setOpen,
          onOpenToggle,
          modal,
          allowPinchZoom
        };
        const { when, AdaptProvider } = (0, import_adapt2.useAdaptParent)({
          Contents: React13.useCallback(
            (props2) => {
              return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_portal3.PortalHost, { forwardProps: props2, name: sheetContentsName });
            },
            [sheetContentsName]
          )
        });
        React13.useImperativeHandle(
          ref,
          () => ({
            open: setOpen
          }),
          [setOpen]
        );
        return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(AdaptProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(DialogProvider2, { ...context, sheetBreakpoint: when, children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(DialogSheetController2, { onOpenChange: setOpen, __scopeDialog, children }) }) });
      }, "Dialog2")),
      {
        Trigger: DialogTrigger2,
        Portal: DialogPortal2,
        Overlay: DialogOverlay2,
        Content: DialogContent2,
        Title: DialogTitle2,
        Description: DialogDescription2,
        Close: DialogClose2,
        Sheet: import_sheet2.ControlledSheet,
        Adapt: import_adapt2.Adapt
      }
    );
    var SHEET_CONTENTS_NAME2 = "DialogSheetContents";
    var DialogSheetContents2 = /* @__PURE__ */ __name(({
      name,
      ...props
    }) => {
      return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_portal3.PortalHost, { forwardProps: props, name });
    }, "DialogSheetContents");
    DialogSheetContents2.displayName = SHEET_CONTENTS_NAME2;
    var getSheetContentsName2 = /* @__PURE__ */ __name(({
      scopeKey,
      contentId
    }) => `${scopeKey || contentId}SheetContents`, "getSheetContentsName");
    var DialogSheetController2 = /* @__PURE__ */ __name((props) => {
      const context = useDialogContext2("DialogSheetController", props.__scopeDialog);
      const showSheet = useShowDialogSheet2(context);
      const breakpointActive = useSheetBreakpointActive2(context);
      const getShowSheet = (0, import_core30.useGet)(showSheet);
      return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
        import_sheet2.SheetController,
        {
          onOpenChange: (val) => {
            if (getShowSheet()) {
              props.onOpenChange(val);
            }
          },
          open: context.open,
          hidden: breakpointActive === false,
          children: props.children
        }
      );
    }, "DialogSheetController");
    var useSheetBreakpointActive2 = /* @__PURE__ */ __name((context) => {
      const media = (0, import_core30.useMedia)();
      if (!context.sheetBreakpoint)
        return false;
      if (context.sheetBreakpoint === true)
        return true;
      return media[context.sheetBreakpoint];
    }, "useSheetBreakpointActive");
    var useShowDialogSheet2 = /* @__PURE__ */ __name((context) => {
      const breakpointActive = useSheetBreakpointActive2(context);
      return context.open === false ? false : breakpointActive;
    }, "useShowDialogSheet");
  }
});

// node_modules/@tamagui/dialog/dist/cjs/index.js
var require_cjs21 = __commonJS({
  "node_modules/@tamagui/dialog/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_Dialog(), module2.exports);
  }
});

// node_modules/@tamagui/alert-dialog/dist/cjs/AlertDialog.js
var require_AlertDialog = __commonJS({
  "node_modules/@tamagui/alert-dialog/dist/cjs/AlertDialog.js"(exports, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      // If the importer is in node compatibility mode or this is not an ESM
      // file that has been converted to a CommonJS file using a Babel-
      // compatible transform (i.e. "__esModule" has not been set), then set
      // "default" to the CommonJS "module.exports" for node compatibility.
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var AlertDialog_exports = {};
    __export2(AlertDialog_exports, {
      AlertDialog: () => AlertDialog,
      AlertDialogAction: () => AlertDialogAction,
      AlertDialogCancel: () => AlertDialogCancel,
      AlertDialogContent: () => AlertDialogContent,
      AlertDialogDescription: () => AlertDialogDescription,
      AlertDialogOverlay: () => AlertDialogOverlay,
      AlertDialogPortal: () => AlertDialogPortal,
      AlertDialogTitle: () => AlertDialogTitle,
      AlertDialogTrigger: () => AlertDialogTrigger,
      createAlertDialogScope: () => createAlertDialogScope
    });
    module2.exports = __toCommonJS2(AlertDialog_exports);
    var import_jsx_runtime13 = require("react/jsx-runtime");
    var import_compose_refs3 = require_cjs2();
    var import_core30 = require("@tamagui/core-node");
    var import_create_context5 = require_cjs3();
    var import_dialog = require_cjs21();
    var import_stacks9 = require_cjs12();
    var import_use_controllable_state2 = require_cjs16();
    var React13 = __toESM2(require("react"));
    var import_react_native6 = require("react-native-web-lite");
    var ROOT_NAME = "AlertDialog";
    var [createAlertDialogContext, createAlertDialogScope] = (0, import_create_context5.createContextScope)(ROOT_NAME, [
      import_dialog.createDialogScope
    ]);
    var useDialogScope = (0, import_dialog.createDialogScope)();
    var TRIGGER_NAME3 = "AlertDialogTrigger";
    var NativeAlertDialogTriggerFrame = (0, import_core30.styled)(import_stacks9.YStack, {
      name: "DialogTrigger"
    });
    var AlertDialogTrigger = React13.forwardRef(
      (props, forwardedRef) => {
        if (props["__native"]) {
          const { __native, onPress, __onPress, ...rest } = props;
          return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
            NativeAlertDialogTriggerFrame,
            {
              ...rest,
              onPress: (0, import_core30.composeEventHandlers)(onPress, __onPress)
            }
          );
        }
        const { __scopeAlertDialog, ...triggerProps } = props;
        const dialogScope = useDialogScope(__scopeAlertDialog);
        return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_dialog.DialogTrigger, { ...dialogScope, ...triggerProps, ref: forwardedRef });
      }
    );
    AlertDialogTrigger.displayName = TRIGGER_NAME3;
    var PORTAL_NAME2 = "AlertDialogPortal";
    var AlertDialogPortal = /* @__PURE__ */ __name((props) => {
      const { __scopeAlertDialog, ...portalProps } = props;
      const dialogScope = useDialogScope(__scopeAlertDialog);
      return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_dialog.DialogPortal, { ...dialogScope, ...portalProps });
    }, "AlertDialogPortal");
    AlertDialogPortal.displayName = PORTAL_NAME2;
    var OVERLAY_NAME2 = "AlertDialogOverlay";
    var AlertDialogOverlay = React13.forwardRef(
      (props, forwardedRef) => {
        const { __scopeAlertDialog, ...overlayProps } = props;
        const dialogScope = useDialogScope(__scopeAlertDialog);
        return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_dialog.DialogOverlay, { ...dialogScope, ...overlayProps, ref: forwardedRef });
      }
    );
    AlertDialogOverlay.displayName = OVERLAY_NAME2;
    var CONTENT_NAME2 = "AlertDialogContent";
    var [AlertDialogContentProvider, useAlertDialogContentContext] = createAlertDialogContext(CONTENT_NAME2);
    var AlertDialogContent = React13.forwardRef(
      (props, forwardedRef) => {
        const { __scopeAlertDialog, children, ...contentProps } = props;
        const dialogScope = useDialogScope(__scopeAlertDialog);
        const contentRef = React13.useRef(null);
        const composedRefs = (0, import_compose_refs3.useComposedRefs)(forwardedRef, contentRef);
        const cancelRef = React13.useRef(null);
        return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
          import_dialog.DialogWarningProvider,
          {
            contentName: CONTENT_NAME2,
            titleName: TITLE_NAME2,
            docsSlug: "alert-dialog",
            children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(AlertDialogContentProvider, { scope: __scopeAlertDialog, cancelRef, children: /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(
              import_dialog.DialogContent,
              {
                role: "alertdialog",
                ...dialogScope,
                ...contentProps,
                ref: composedRefs,
                onOpenAutoFocus: (0, import_core30.composeEventHandlers)(
                  contentProps.onOpenAutoFocus,
                  (event) => {
                    var _a;
                    event.preventDefault();
                    if (import_core30.isWeb) {
                      (_a = cancelRef.current) == null ? void 0 : _a.focus({ preventScroll: true });
                    }
                  }
                ),
                onPointerDownOutside: (event) => event.preventDefault(),
                onInteractOutside: (event) => event.preventDefault(),
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_core30.Slottable, { children }),
                  process.env.NODE_ENV === "development" && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(DescriptionWarning2, { contentRef })
                ]
              }
            ) })
          }
        );
      }
    );
    AlertDialogContent.displayName = CONTENT_NAME2;
    var TITLE_NAME2 = "AlertDialogTitle";
    var AlertDialogTitle = React13.forwardRef(
      (props, forwardedRef) => {
        const { __scopeAlertDialog, ...titleProps } = props;
        const dialogScope = useDialogScope(__scopeAlertDialog);
        return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_dialog.DialogTitle, { ...dialogScope, ...titleProps, ref: forwardedRef });
      }
    );
    AlertDialogTitle.displayName = TITLE_NAME2;
    var DESCRIPTION_NAME2 = "AlertDialogDescription";
    var AlertDialogDescription = React13.forwardRef((props, forwardedRef) => {
      const { __scopeAlertDialog, ...descriptionProps } = props;
      const dialogScope = useDialogScope(__scopeAlertDialog);
      return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_dialog.DialogDescription, { ...dialogScope, ...descriptionProps, ref: forwardedRef });
    });
    AlertDialogDescription.displayName = DESCRIPTION_NAME2;
    var ACTION_NAME = "AlertDialogAction";
    var AlertDialogAction = React13.forwardRef(
      (props, forwardedRef) => {
        const { __scopeAlertDialog, ...actionProps } = props;
        const dialogScope = useDialogScope(__scopeAlertDialog);
        return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_dialog.DialogClose, { ...dialogScope, ...actionProps, ref: forwardedRef });
      }
    );
    AlertDialogAction.displayName = ACTION_NAME;
    var CANCEL_NAME = "AlertDialogCancel";
    var AlertDialogCancel = React13.forwardRef(
      (props, forwardedRef) => {
        const { __scopeAlertDialog, ...cancelProps } = props;
        const { cancelRef } = useAlertDialogContentContext(CANCEL_NAME, __scopeAlertDialog);
        const dialogScope = useDialogScope(__scopeAlertDialog);
        const ref = (0, import_compose_refs3.useComposedRefs)(forwardedRef, cancelRef);
        return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_dialog.DialogClose, { ...dialogScope, ...cancelProps, ref });
      }
    );
    AlertDialogCancel.displayName = CANCEL_NAME;
    var DescriptionWarning2 = /* @__PURE__ */ __name(({ contentRef }) => {
      if (process.env.NODE_ENV === "development") {
        React13.useEffect(() => {
          var _a;
          if (!import_core30.isWeb)
            return;
          const hasDescription = document.getElementById(
            // @ts-ignore
            // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
            (_a = contentRef.current) == null ? void 0 : _a.getAttribute("aria-describedby")
          );
          if (!hasDescription) {
            console.warn(`\`${CONTENT_NAME2}\` requires a description for the component to be accessible for screen reader users.
  
        You can add a description to the \`${CONTENT_NAME2}\` by passing a \`${DESCRIPTION_NAME2}\` component as a child, which also benefits sighted users by adding visible context to the dialog.
        
        Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${CONTENT_NAME2}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.
        
        For more information, see https://tamagui.dev/docs/components/alert-dialog`);
          }
        }, [contentRef]);
      }
      return null;
    }, "DescriptionWarning");
    var AlertDialogInner = /* @__PURE__ */ __name((props) => {
      const { __scopeAlertDialog, native, ...alertDialogProps } = props;
      const dialogScope = useDialogScope(__scopeAlertDialog);
      if (process.env.TAMAGUI_TARGET === "native") {
        const [open, setOpen] = (0, import_use_controllable_state2.useControllableState)({
          prop: props.open,
          defaultProp: props.defaultOpen || false,
          onChange: props.onOpenChange,
          transition: true
        });
        let triggerElement = null;
        let title = "";
        let description = "";
        const buttons = [];
        forEachChildDeep(React13.Children.toArray(props.children), (child) => {
          if (!React13.isValidElement(child))
            return false;
          const name = (0, import_core30.isTamaguiElement)(child) ? child.type.staticConfig.componentName : child.type["displayName"];
          switch (name) {
            case TRIGGER_NAME3: {
              triggerElement = React13.cloneElement(child, {
                __native: true
              });
              return false;
            }
            case TITLE_NAME2: {
              title = getStringChildren(child);
              return false;
            }
            case DESCRIPTION_NAME2: {
              description = getStringChildren(child);
              return false;
            }
            case ACTION_NAME:
            case CANCEL_NAME: {
              const style = name === ACTION_NAME ? "default" : "cancel";
              const text = getStringChildren(child);
              const onPress = /* @__PURE__ */ __name(() => {
                var _a;
                const childProps = child.props;
                (_a = childProps == null ? void 0 : childProps.onPress) == null ? void 0 : _a.call(childProps, { native: true });
                setOpen(false);
              }, "onPress");
              buttons.push({
                style,
                text,
                // @ts-ignore
                onPress
              });
              return false;
            }
            default: {
              return true;
            }
          }
        });
        (0, import_core30.useIsomorphicLayoutEffect)(() => {
          if (!open || !native)
            return;
          if (title || description) {
            import_react_native6.Alert.alert(title, description, buttons);
          }
        }, [native, open]);
        if (native) {
          return React13.cloneElement(triggerElement, {
            __onPress: () => {
              setOpen(true);
            }
          });
        }
      }
      return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_dialog.Dialog, { ...dialogScope, ...alertDialogProps, modal: true });
    }, "AlertDialogInner");
    function forEachChildDeep(children, onChild) {
      for (const child of children) {
        if (!React13.isValidElement(child))
          continue;
        if (!onChild(child))
          continue;
        if (child.props.children) {
          forEachChildDeep(React13.Children.toArray(child.props.children), onChild);
        }
      }
    }
    __name(forEachChildDeep, "forEachChildDeep");
    function getStringChildren(child) {
      let string = "";
      forEachChildDeep(React13.Children.toArray(child), (child2) => {
        if (typeof child2.props.children === "string") {
          string = child2.props.children;
          return false;
        }
        return true;
      });
      return string;
    }
    __name(getStringChildren, "getStringChildren");
    var AlertDialog = (0, import_core30.withStaticProperties)(AlertDialogInner, {
      Trigger: AlertDialogTrigger,
      Portal: AlertDialogPortal,
      Overlay: AlertDialogOverlay,
      Content: AlertDialogContent,
      Action: AlertDialogAction,
      Cancel: AlertDialogCancel,
      Title: AlertDialogTitle,
      Description: AlertDialogDescription
    });
    AlertDialog.displayName = ROOT_NAME;
  }
});

// node_modules/@tamagui/alert-dialog/dist/cjs/index.js
var require_cjs22 = __commonJS({
  "node_modules/@tamagui/alert-dialog/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_AlertDialog(), module2.exports);
  }
});

// node_modules/@tamagui/image/dist/cjs/Image.js
var require_Image = __commonJS({
  "node_modules/@tamagui/image/dist/cjs/Image.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var Image_exports = {};
    __export2(Image_exports, {
      Image: () => Image2
    });
    module2.exports = __toCommonJS2(Image_exports);
    var import_jsx_runtime13 = require("react/jsx-runtime");
    var import_core30 = require("@tamagui/core-node");
    var import_react_native6 = require("react-native-web-lite");
    (0, import_core30.setupReactNative)({
      Image: import_react_native6.Image
    });
    var StyledImage = (0, import_core30.styled)(import_react_native6.Image, {
      name: "Image",
      position: "relative",
      source: { uri: "" },
      zIndex: 1
    });
    var Image2 = StyledImage.extractable((inProps) => {
      const props = (0, import_core30.useMediaPropsActive)(inProps);
      const { src, ...rest } = props;
      const source = typeof src === "string" ? { uri: src, ...import_core30.isWeb && { width: props.width, height: props.height } } : src;
      return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(StyledImage, { source, ...rest });
    });
  }
});

// node_modules/@tamagui/image/dist/cjs/index.js
var require_cjs23 = __commonJS({
  "node_modules/@tamagui/image/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_Image(), module2.exports);
  }
});

// node_modules/@tamagui/shapes/dist/cjs/getShapeSize.js
var require_getShapeSize = __commonJS({
  "node_modules/@tamagui/shapes/dist/cjs/getShapeSize.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var getShapeSize_exports = {};
    __export2(getShapeSize_exports, {
      getShapeSize: () => getShapeSize2
    });
    module2.exports = __toCommonJS2(getShapeSize_exports);
    var getShapeSize2 = /* @__PURE__ */ __name((size2, { tokens }) => {
      const width = tokens.size[size2] ?? size2;
      const height = tokens.size[size2] ?? size2;
      return {
        width,
        height,
        minWidth: width,
        maxWidth: width,
        maxHeight: height,
        minHeight: height
      };
    }, "getShapeSize");
  }
});

// node_modules/@tamagui/shapes/dist/cjs/Square.js
var require_Square = __commonJS({
  "node_modules/@tamagui/shapes/dist/cjs/Square.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var Square_exports = {};
    __export2(Square_exports, {
      Square: () => Square2
    });
    module2.exports = __toCommonJS2(Square_exports);
    var import_core30 = require("@tamagui/core-node");
    var import_stacks9 = require_cjs12();
    var import_getShapeSize = require_getShapeSize();
    var Square2 = (0, import_core30.styled)(import_stacks9.ThemeableStack, {
      name: "Square",
      alignItems: "center",
      justifyContent: "center",
      variants: {
        circular: {
          true: {
            borderRadius: 1e5
          }
        },
        size: {
          "...size": import_getShapeSize.getShapeSize
        }
      }
    });
  }
});

// node_modules/@tamagui/shapes/dist/cjs/Circle.js
var require_Circle = __commonJS({
  "node_modules/@tamagui/shapes/dist/cjs/Circle.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var Circle_exports = {};
    __export2(Circle_exports, {
      Circle: () => Circle
    });
    module2.exports = __toCommonJS2(Circle_exports);
    var import_core30 = require("@tamagui/core-node");
    var import_Square = require_Square();
    var Circle = (0, import_core30.styled)(import_Square.Square, {
      name: "Circle",
      circular: true
    });
  }
});

// node_modules/@tamagui/shapes/dist/cjs/index.js
var require_cjs24 = __commonJS({
  "node_modules/@tamagui/shapes/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_Square(), module2.exports);
    __reExport2(src_exports, require_Circle(), module2.exports);
    __reExport2(src_exports, require_getShapeSize(), module2.exports);
  }
});

// node_modules/@tamagui/font-size/dist/cjs/getFontSize.js
var require_getFontSize = __commonJS({
  "node_modules/@tamagui/font-size/dist/cjs/getFontSize.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var getFontSize_exports = {};
    __export2(getFontSize_exports, {
      getFontSize: () => getFontSize2,
      getFontSizeToken: () => getFontSizeToken,
      getFontSizeVariable: () => getFontSizeVariable
    });
    module2.exports = __toCommonJS2(getFontSize_exports);
    var import_core30 = require("@tamagui/core-node");
    var getFontSize2 = /* @__PURE__ */ __name((inSize, opts) => {
      const res = getFontSizeVariable(inSize, opts);
      if ((0, import_core30.isVariable)(res)) {
        return +res.val;
      }
      return res ? +res : 16;
    }, "getFontSize");
    var getFontSizeVariable = /* @__PURE__ */ __name((inSize, opts) => {
      const token = getFontSizeToken(inSize, opts);
      if (!token) {
        return inSize;
      }
      const conf = (0, import_core30.getConfig)();
      return conf.fontsParsed[(opts == null ? void 0 : opts.font) || "$body"].size[token];
    }, "getFontSizeVariable");
    var getFontSizeToken = /* @__PURE__ */ __name((inSize, opts) => {
      if (typeof inSize === "number") {
        return null;
      }
      const relativeSize = (opts == null ? void 0 : opts.relativeSize) || 0;
      const conf = (0, import_core30.getConfig)();
      const fontSize = conf.fontsParsed[(opts == null ? void 0 : opts.font) || "$body"].size;
      const size2 = inSize || ("$true" in fontSize ? "$true" : "$4");
      const sizeTokens = Object.keys(fontSize);
      let foundIndex = sizeTokens.indexOf(size2);
      if (foundIndex === -1) {
        if (size2.endsWith(".5")) {
          foundIndex = sizeTokens.indexOf(size2.replace(".5", ""));
        }
      }
      if (process.env.NODE_ENV === "development") {
        if (foundIndex === -1) {
          console.warn("No font size found", size2, opts, "in size tokens", sizeTokens);
        }
      }
      const tokenIndex = Math.min(
        Math.max(0, foundIndex + relativeSize),
        sizeTokens.length - 1
      );
      return sizeTokens[tokenIndex] ?? size2;
    }, "getFontSizeToken");
  }
});

// node_modules/@tamagui/font-size/dist/cjs/index.js
var require_cjs25 = __commonJS({
  "node_modules/@tamagui/font-size/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_getFontSize(), module2.exports);
  }
});

// node_modules/@tamagui/helpers/dist/cjs/clamp.js
var require_clamp = __commonJS({
  "node_modules/@tamagui/helpers/dist/cjs/clamp.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var clamp_exports = {};
    __export2(clamp_exports, {
      clamp: () => clamp
    });
    module2.exports = __toCommonJS2(clamp_exports);
    function clamp(value, [min3, max3]) {
      return Math.min(max3, Math.max(min3, value));
    }
    __name(clamp, "clamp");
  }
});

// node_modules/@tamagui/helpers/dist/cjs/composeEventHandlers.js
var require_composeEventHandlers = __commonJS({
  "node_modules/@tamagui/helpers/dist/cjs/composeEventHandlers.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var composeEventHandlers_exports = {};
    __export2(composeEventHandlers_exports, {
      composeEventHandlers: () => composeEventHandlers3
    });
    module2.exports = __toCommonJS2(composeEventHandlers_exports);
    function composeEventHandlers3(og, next, { checkDefaultPrevented = true } = {}) {
      if (!og || !next) {
        return next || og;
      }
      return /* @__PURE__ */ __name(function composedEventHandler(event) {
        og == null ? void 0 : og(event);
        if (!event || !(checkDefaultPrevented && "defaultPrevented" in event) || // @ts-ignore
        "defaultPrevented" in event && !event.defaultPrevented) {
          return next == null ? void 0 : next(event);
        }
      }, "composedEventHandler");
    }
    __name(composeEventHandlers3, "composeEventHandlers");
  }
});

// node_modules/@tamagui/helpers/dist/cjs/concatClassName.js
var require_concatClassName = __commonJS({
  "node_modules/@tamagui/helpers/dist/cjs/concatClassName.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var concatClassName_exports = {};
    __export2(concatClassName_exports, {
      concatClassName: () => concatClassName
    });
    module2.exports = __toCommonJS2(concatClassName_exports);
    function concatClassName(_cn) {
      const args = arguments;
      const usedPrefixes = [];
      let final = "";
      const len = args.length;
      let propObjects = null;
      for (let x = len; x >= 0; x--) {
        const cns = args[x];
        if (!cns)
          continue;
        if (!Array.isArray(cns) && typeof cns !== "string") {
          propObjects = propObjects || [];
          propObjects.push(cns);
          continue;
        }
        const names = Array.isArray(cns) ? cns : cns.split(" ");
        const numNames = names.length;
        for (let i = numNames - 1; i >= 0; i--) {
          const name = names[i];
          if (!name || name === " ")
            continue;
          if (name[0] !== "_") {
            final = name + " " + final;
            continue;
          }
          const splitIndex = name.indexOf("-");
          if (splitIndex < 1) {
            final = name + " " + final;
            continue;
          }
          const nextChar = name[splitIndex + 1];
          const isMediaQuery = nextChar === "_";
          const styleKey = name.slice(1, name.lastIndexOf("-"));
          const mediaKey = isMediaQuery ? name.slice(splitIndex + 2, splitIndex + 7) : null;
          const uid = mediaKey ? styleKey + mediaKey : styleKey;
          if (usedPrefixes.indexOf(uid) > -1) {
            continue;
          }
          usedPrefixes.push(uid);
          const propName = styleKey;
          if (propName && propObjects) {
            if (propObjects.some((po) => {
              if (mediaKey) {
                const propKey = pseudoInvert[mediaKey];
                return po && po[propKey] && propName in po[propKey] && po[propKey] !== null;
              }
              const res = po && propName in po && po[propName] !== null;
              return res;
            })) {
              continue;
            }
          }
          final = name + " " + final;
        }
      }
      return final;
    }
    __name(concatClassName, "concatClassName");
    var pseudoInvert = {
      hover: "hoverStyle",
      focus: "focusStyle",
      press: "pressStyle"
    };
  }
});

// node_modules/@tamagui/helpers/dist/cjs/validStyleProps.js
var require_validStyleProps = __commonJS({
  "node_modules/@tamagui/helpers/dist/cjs/validStyleProps.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var validStyleProps_exports = {};
    __export2(validStyleProps_exports, {
      stylePropsAll: () => stylePropsAll,
      stylePropsText: () => stylePropsText,
      stylePropsTextOnly: () => stylePropsTextOnly,
      stylePropsTransform: () => stylePropsTransform,
      stylePropsView: () => stylePropsView,
      validPseudoKeys: () => validPseudoKeys,
      validStyles: () => validStyles,
      validStylesOnBaseProps: () => validStylesOnBaseProps
    });
    module2.exports = __toCommonJS2(validStyleProps_exports);
    var stylePropsTransform = Object.freeze({
      x: true,
      y: true,
      scale: true,
      perspective: true,
      scaleX: true,
      scaleY: true,
      skewX: true,
      skewY: true,
      matrix: true,
      rotate: true,
      rotateY: true,
      rotateX: true,
      rotateZ: true
    });
    var validStylesOnBaseProps = Object.freeze({
      placeholderTextColor: true
    });
    var stylePropsView = Object.freeze({
      backfaceVisibility: true,
      backgroundColor: true,
      borderBottomColor: true,
      borderBottomStyle: true,
      borderTopStyle: true,
      borderLeftStyle: true,
      borderRightStyle: true,
      borderBottomEndRadius: true,
      borderBottomLeftRadius: true,
      borderBottomRightRadius: true,
      borderBottomStartRadius: true,
      borderBottomWidth: true,
      borderColor: true,
      borderEndColor: true,
      borderLeftColor: true,
      borderLeftWidth: true,
      borderRadius: true,
      borderRightColor: true,
      borderRightWidth: true,
      borderStartColor: true,
      borderStyle: true,
      borderTopColor: true,
      borderTopEndRadius: true,
      borderTopLeftRadius: true,
      borderTopRightRadius: true,
      borderTopStartRadius: true,
      borderTopWidth: true,
      borderWidth: true,
      opacity: true,
      transform: true,
      alignContent: true,
      alignItems: true,
      alignSelf: true,
      aspectRatio: true,
      borderEndWidth: true,
      borderStartWidth: true,
      bottom: true,
      display: true,
      end: true,
      flex: true,
      flexBasis: true,
      flexDirection: true,
      flexGrow: true,
      flexShrink: true,
      flexWrap: true,
      gap: true,
      gapColumn: true,
      gapRow: true,
      height: true,
      justifyContent: true,
      left: true,
      margin: true,
      marginBottom: true,
      marginEnd: true,
      marginHorizontal: true,
      marginLeft: true,
      marginRight: true,
      marginStart: true,
      marginTop: true,
      marginVertical: true,
      maxHeight: true,
      maxWidth: true,
      minHeight: true,
      minWidth: true,
      overflow: true,
      padding: true,
      paddingBottom: true,
      paddingEnd: true,
      paddingHorizontal: true,
      paddingLeft: true,
      paddingRight: true,
      paddingStart: true,
      paddingTop: true,
      paddingVertical: true,
      position: true,
      right: true,
      start: true,
      top: true,
      width: true,
      zIndex: true,
      direction: true,
      shadowColor: true,
      shadowOffset: true,
      shadowOpacity: true,
      shadowRadius: true,
      ...validStylesOnBaseProps,
      ...stylePropsTransform,
      // allow a few web only ones
      ...process.env.TAMAGUI_TARGET === "web" && {
        overflowX: true,
        overflowY: true,
        userSelect: true,
        cursor: true,
        contain: true,
        pointerEvents: true,
        boxSizing: true,
        boxShadow: true,
        outlineColor: true,
        outlineStyle: true,
        outlineOffset: true,
        outlineWidth: true
      }
    });
    var stylePropsTextOnly = Object.freeze({
      color: true,
      fontFamily: true,
      fontSize: true,
      fontStyle: true,
      fontWeight: true,
      letterSpacing: true,
      lineHeight: true,
      textAlign: true,
      textDecorationLine: true,
      textDecorationStyle: true,
      textDecorationColor: true,
      textShadowColor: true,
      textShadowOffset: true,
      textShadowRadius: true,
      textTransform: true,
      // allow some web only ones
      ...process.env.TAMAGUI_TARGET === "web" && {
        whiteSpace: true,
        wordWrap: true,
        textOverflow: true,
        textDecorationDistance: true,
        userSelect: true,
        selectable: true,
        cursor: true,
        WebkitLineClamp: true,
        WebkitBoxOrient: true
      }
    });
    var stylePropsText = Object.freeze({
      ...stylePropsView,
      ...stylePropsTextOnly
    });
    var stylePropsAll = stylePropsText;
    var validPseudoKeys = Object.freeze({
      enterStyle: true,
      exitStyle: true,
      hoverStyle: true,
      pressStyle: true,
      focusStyle: true
    });
    var validStyles = Object.freeze({
      ...validPseudoKeys,
      ...stylePropsView
    });
  }
});

// node_modules/@tamagui/helpers/dist/cjs/types.js
var require_types2 = __commonJS({
  "node_modules/@tamagui/helpers/dist/cjs/types.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var types_exports = {};
    module2.exports = __toCommonJS2(types_exports);
  }
});

// node_modules/@tamagui/simple-hash/dist/cjs/index.js
var require_cjs26 = __commonJS({
  "node_modules/@tamagui/simple-hash/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    __export2(src_exports, {
      isValidCSSCharCode: () => isValidCSSCharCode,
      simpleHash: () => simpleHash
    });
    module2.exports = __toCommonJS2(src_exports);
    var simpleHash = /* @__PURE__ */ __name((str, hashMin = 10) => {
      let hash = 0;
      let valids = "";
      const len = str.length;
      for (let i = 0; i < len; i++) {
        const char = str.charCodeAt(i);
        if (isValidCSSCharCode(char) && len <= hashMin) {
          valids += str[i];
        } else {
          hash = (hash << 5) - hash + char;
          hash &= hash;
        }
      }
      return valids + (hash ? new Uint32Array([hash])[0].toString(36) : "");
    }, "simpleHash");
    function isValidCSSCharCode(code) {
      return (
        // A-Z
        code >= 65 && code <= 90 || // a-z
        code >= 97 && code <= 122 || // _
        code === 95 || // -
        code === 45 || // 0-9
        code >= 48 && code <= 57
      );
    }
    __name(isValidCSSCharCode, "isValidCSSCharCode");
  }
});

// node_modules/@tamagui/helpers/dist/cjs/index.js
var require_cjs27 = __commonJS({
  "node_modules/@tamagui/helpers/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_clamp(), module2.exports);
    __reExport2(src_exports, require_composeEventHandlers(), module2.exports);
    __reExport2(src_exports, require_concatClassName(), module2.exports);
    __reExport2(src_exports, require_validStyleProps(), module2.exports);
    __reExport2(src_exports, require_types2(), module2.exports);
    __reExport2(src_exports, require_cjs26(), module2.exports);
  }
});

// node_modules/@tamagui/helpers-tamagui/dist/cjs/prevent.js
var require_prevent = __commonJS({
  "node_modules/@tamagui/helpers-tamagui/dist/cjs/prevent.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var prevent_exports = {};
    __export2(prevent_exports, {
      prevent: () => prevent
    });
    module2.exports = __toCommonJS2(prevent_exports);
    var prevent = /* @__PURE__ */ __name((e) => [e.preventDefault(), e.stopPropagation()], "prevent");
  }
});

// node_modules/@tamagui/helpers-tamagui/dist/cjs/getSpace.js
var require_getSpace = __commonJS({
  "node_modules/@tamagui/helpers-tamagui/dist/cjs/getSpace.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var getSpace_exports = {};
    __export2(getSpace_exports, {
      getSpace: () => getSpace
    });
    module2.exports = __toCommonJS2(getSpace_exports);
    var import_core30 = require("@tamagui/core-node");
    var getSpace = /* @__PURE__ */ __name((token, sizeUpOrDownBy = 0) => {
      const spaces = (0, import_core30.getTokens)().space;
      const spaceNames = Object.keys(spaces);
      const key = spaceNames[Math.max(0, spaceNames.indexOf(String(token || "$true")) + sizeUpOrDownBy)];
      return spaces[key] || spaces["$true"];
    }, "getSpace");
  }
});

// node_modules/@tamagui/helpers-tamagui/dist/cjs/useCurrentColor.js
var require_useCurrentColor = __commonJS({
  "node_modules/@tamagui/helpers-tamagui/dist/cjs/useCurrentColor.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var useCurrentColor_exports = {};
    __export2(useCurrentColor_exports, {
      useCurrentColor: () => useCurrentColor
    });
    module2.exports = __toCommonJS2(useCurrentColor_exports);
    var import_core30 = require("@tamagui/core-node");
    var useCurrentColor = /* @__PURE__ */ __name((colorProp) => {
      const theme = (0, import_core30.useTheme)();
      return (0, import_core30.variableToString)(theme[colorProp] || colorProp || theme.color);
    }, "useCurrentColor");
  }
});

// node_modules/@tamagui/helpers-tamagui/dist/cjs/useGetThemedIcon.js
var require_useGetThemedIcon = __commonJS({
  "node_modules/@tamagui/helpers-tamagui/dist/cjs/useGetThemedIcon.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var useGetThemedIcon_exports = {};
    __export2(useGetThemedIcon_exports, {
      useGetThemedIcon: () => useGetThemedIcon2
    });
    module2.exports = __toCommonJS2(useGetThemedIcon_exports);
    var import_react13 = require("react");
    var import_useCurrentColor = require_useCurrentColor();
    var useGetThemedIcon2 = /* @__PURE__ */ __name((props) => {
      const color = (0, import_useCurrentColor.useCurrentColor)(props.color);
      return (el) => {
        if (!el)
          return el;
        if ((0, import_react13.isValidElement)(el)) {
          return (0, import_react13.cloneElement)(el, {
            ...props,
            // @ts-expect-error
            ...el.props
          });
        }
        return (0, import_react13.createElement)(el, props);
      };
    }, "useGetThemedIcon");
  }
});

// node_modules/@tamagui/helpers-tamagui/dist/cjs/index.js
var require_cjs28 = __commonJS({
  "node_modules/@tamagui/helpers-tamagui/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_cjs27(), module2.exports);
    __reExport2(src_exports, require_prevent(), module2.exports);
    __reExport2(src_exports, require_getSpace(), module2.exports);
    __reExport2(src_exports, require_useCurrentColor(), module2.exports);
    __reExport2(src_exports, require_useGetThemedIcon(), module2.exports);
  }
});

// node_modules/@tamagui/focusable/dist/cjs/registerFocusable.js
var require_registerFocusable = __commonJS({
  "node_modules/@tamagui/focusable/dist/cjs/registerFocusable.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var registerFocusable_exports = {};
    __export2(registerFocusable_exports, {
      focusFocusable: () => focusFocusable2,
      registerFocusable: () => registerFocusable,
      unregisterFocusable: () => unregisterFocusable
    });
    module2.exports = __toCommonJS2(registerFocusable_exports);
    var registerFocusable = /* @__PURE__ */ __name((id, input) => () => {
    }, "registerFocusable");
    var unregisterFocusable = /* @__PURE__ */ __name((id) => {
    }, "unregisterFocusable");
    var focusFocusable2 = /* @__PURE__ */ __name((id) => {
    }, "focusFocusable");
  }
});

// node_modules/@tamagui/focusable/dist/cjs/focusableInputHOC.js
var require_focusableInputHOC = __commonJS({
  "node_modules/@tamagui/focusable/dist/cjs/focusableInputHOC.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var focusableInputHOC_exports = {};
    __export2(focusableInputHOC_exports, {
      focusableInputHOC: () => focusableInputHOC3
    });
    module2.exports = __toCommonJS2(focusableInputHOC_exports);
    var import_jsx_runtime13 = require("react/jsx-runtime");
    var import_compose_refs3 = require_cjs2();
    var import_core30 = require("@tamagui/core-node");
    var import_react13 = require("react");
    var import_registerFocusable = require_registerFocusable();
    function focusableInputHOC3(Component) {
      const component = Component.extractable(
        (0, import_react13.forwardRef)(
          (props, ref) => {
            const isInput = (0, import_core30.isTamaguiComponent)(Component) && Component.staticConfig.isInput;
            const inputValue = (0, import_react13.useRef)(props.value || props.defaultValue || "");
            const unregisterFocusable = (0, import_react13.useRef)();
            const inputRef = (0, import_react13.useCallback)(
              (input) => {
                var _a;
                if (!props.id)
                  return;
                if (!input)
                  return;
                (_a = unregisterFocusable.current) == null ? void 0 : _a.call(unregisterFocusable);
                unregisterFocusable.current = (0, import_registerFocusable.registerFocusable)(props.id, {
                  focus: input.focus,
                  ...isInput && {
                    // react-native doesn't support programmatic .select()
                    focusAndSelect() {
                      input.focus();
                      if (input.setSelection && typeof inputValue.current === "string") {
                        input.setSelection(0, inputValue.current.length);
                      }
                    }
                  }
                });
              },
              [isInput, props.id]
            );
            const combinedRefs = (0, import_compose_refs3.composeRefs)(ref, inputRef);
            (0, import_react13.useEffect)(() => {
              return () => {
                var _a;
                (_a = unregisterFocusable.current) == null ? void 0 : _a.call(unregisterFocusable);
              };
            }, []);
            const onChangeText = (0, import_core30.useEvent)((value) => {
              var _a;
              inputValue.current = value;
              (_a = props.onChangeText) == null ? void 0 : _a.call(props, value);
            });
            const finalProps = isInput ? {
              ...props,
              onChangeText
            } : props;
            return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Component, { ref: combinedRefs, ...finalProps });
          }
        )
      );
      return component;
    }
    __name(focusableInputHOC3, "focusableInputHOC");
  }
});

// node_modules/@tamagui/focusable/dist/cjs/focusable.js
var require_focusable = __commonJS({
  "node_modules/@tamagui/focusable/dist/cjs/focusable.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var focusable_exports = {};
    module2.exports = __toCommonJS2(focusable_exports);
  }
});

// node_modules/@tamagui/focusable/dist/cjs/index.js
var require_cjs29 = __commonJS({
  "node_modules/@tamagui/focusable/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_registerFocusable(), module2.exports);
    __reExport2(src_exports, require_focusableInputHOC(), module2.exports);
    __reExport2(src_exports, require_focusable(), module2.exports);
  }
});

// node_modules/@tamagui/list-item/dist/cjs/ListItem.js
var require_ListItem = __commonJS({
  "node_modules/@tamagui/list-item/dist/cjs/ListItem.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var ListItem_exports = {};
    __export2(ListItem_exports, {
      ListItem: () => ListItem,
      ListItemFrame: () => ListItemFrame,
      ListItemSubtitle: () => ListItemSubtitle,
      ListItemText: () => ListItemText,
      ListItemTitle: () => ListItemTitle,
      listItemStaticConfig: () => listItemStaticConfig,
      useListItem: () => useListItem
    });
    module2.exports = __toCommonJS2(ListItem_exports);
    var import_jsx_runtime13 = require("react/jsx-runtime");
    var import_core30 = require("@tamagui/core-node");
    var import_font_size2 = require_cjs25();
    var import_helpers_tamagui2 = require_cjs28();
    var import_stacks9 = require_cjs12();
    var import_text5 = require_cjs20();
    var import_react13 = require("react");
    var NAME3 = "ListItem";
    var ListItemFrame = (0, import_core30.styled)(import_stacks9.ThemeableStack, {
      name: NAME3,
      tag: "li",
      variants: {
        unstyled: {
          false: {
            size: "$true",
            alignItems: "center",
            flexWrap: "nowrap",
            width: "100%",
            borderColor: "$borderColor",
            maxWidth: "100%",
            overflow: "hidden",
            flexDirection: "row"
          }
        },
        size: {
          "...size": (val, { tokens }) => {
            return {
              minHeight: tokens.size[val],
              paddingHorizontal: tokens.space[val],
              paddingVertical: (0, import_helpers_tamagui2.getSpace)(val, -2)
            };
          }
        },
        active: {
          true: {
            hoverStyle: {
              backgroundColor: "$background"
            }
          }
        },
        disabled: {
          true: {
            opacity: 0.5,
            // TODO breaking types
            pointerEvents: "none"
          }
        }
      },
      defaultVariants: {
        unstyled: false
      }
    });
    var ListItemText = (0, import_core30.styled)(import_text5.SizableText, {
      name: "ListItemText",
      color: "$color",
      userSelect: "none",
      flexGrow: 1,
      flexShrink: 1,
      ellipse: true,
      cursor: "default"
    });
    var ListItemSubtitle = (0, import_core30.styled)(ListItemText, {
      name: "ListItemSubtitle",
      color: "$colorPress",
      marginTop: "$-2",
      opacity: 0.65,
      maxWidth: "100%",
      size: "$3"
    });
    var ListItemTitle = (0, import_core30.styled)(ListItemText, {
      name: "ListItemTitle"
    });
    var useListItem = /* @__PURE__ */ __name((props, {
      Text: Text5 = ListItemText,
      Subtitle = ListItemSubtitle,
      Title = ListItemTitle
    } = { Text: ListItemText, Subtitle: ListItemSubtitle, Title: ListItemTitle }) => {
      const {
        children,
        icon,
        iconAfter,
        noTextWrap,
        theme: themeName,
        space,
        spaceFlex,
        scaleIcon = 1,
        scaleSpace = 1,
        subTitle,
        // text props
        color,
        fontWeight,
        letterSpacing,
        fontSize,
        fontFamily,
        textAlign,
        textProps,
        title,
        ...rest
      } = props;
      const mediaActiveProps = (0, import_core30.useMediaPropsActive)(props);
      const size2 = mediaActiveProps.size || "$true";
      const subtitleSize = `$${+String(size2).replace("$", "") - 1}`;
      const iconSize = (0, import_font_size2.getFontSize)(size2) * scaleIcon;
      const getThemedIcon = (0, import_helpers_tamagui2.useGetThemedIcon)({ size: iconSize, color });
      const [themedIcon, themedIconAfter] = [icon, iconAfter].map(getThemedIcon);
      const spaceSize = (0, import_core30.getVariableValue)((0, import_core30.getTokens)().space[mediaActiveProps.space] ?? iconSize) * scaleSpace;
      const contents = (0, import_text5.wrapChildrenInText)(Text5, mediaActiveProps);
      return {
        props: {
          fontFamily,
          ...rest,
          children: /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(import_jsx_runtime13.Fragment, { children: [
            themedIcon ? /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(import_jsx_runtime13.Fragment, { children: [
              themedIcon,
              /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_core30.Spacer, { size: spaceSize })
            ] }) : null,
            title || subTitle ? /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(import_stacks9.YStack, { flex: 1, children: [
              noTextWrap === "all" ? title : /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Title, { size: size2, children: title }),
              subTitle ? /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(import_jsx_runtime13.Fragment, { children: [
                /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_core30.Spacer, { flex: true, size: spaceSize * 0.333 }),
                typeof subTitle === "string" && noTextWrap !== "all" ? (
                  // TODO can use theme but we need to standardize to alt themes
                  // or standardize on subtle colors in themes
                  /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Subtitle, { size: subtitleSize, children: subTitle })
                ) : subTitle
              ] }) : null,
              contents
            ] }) : contents,
            themedIconAfter ? /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(import_jsx_runtime13.Fragment, { children: [
              /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_core30.Spacer, { size: spaceSize }),
              themedIconAfter
            ] }) : null
          ] })
        }
      };
    }, "useListItem");
    var ListItemComponent = (0, import_react13.forwardRef)((props, ref) => {
      const { props: listItemProps } = useListItem(props);
      return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(ListItemFrame, { ref, justifyContent: "space-between", ...listItemProps });
    });
    var listItemStaticConfig = {
      inlineProps: /* @__PURE__ */ new Set([
        // text props go here (can't really optimize them, but we never fully extract listItem anyway)
        "color",
        "fontWeight",
        "fontSize",
        "fontFamily",
        "letterSpacing",
        "textAlign"
      ])
    };
    var ListItem = (0, import_core30.withStaticProperties)(
      ListItemFrame.extractable(
        (0, import_core30.themeable)(ListItemComponent, { componentName: NAME3 }),
        listItemStaticConfig
      ),
      {
        Text: ListItemText,
        Subtitle: ListItemSubtitle
      }
    );
  }
});

// node_modules/@tamagui/list-item/dist/cjs/index.js
var require_cjs30 = __commonJS({
  "node_modules/@tamagui/list-item/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_ListItem(), module2.exports);
  }
});

// node_modules/@floating-ui/core/dist/floating-ui.core.mjs
function getAlignment(placement) {
  return placement.split("-")[1];
}
function getLengthFromAxis(axis) {
  return axis === "y" ? "height" : "width";
}
function getSide(placement) {
  return placement.split("-")[0];
}
function getMainAxisFromPlacement(placement) {
  return ["top", "bottom"].includes(getSide(placement)) ? "x" : "y";
}
function computeCoordsFromPlacement(_ref, placement, rtl) {
  let {
    reference,
    floating
  } = _ref;
  const commonX = reference.x + reference.width / 2 - floating.width / 2;
  const commonY = reference.y + reference.height / 2 - floating.height / 2;
  const mainAxis = getMainAxisFromPlacement(placement);
  const length = getLengthFromAxis(mainAxis);
  const commonAlign = reference[length] / 2 - floating[length] / 2;
  const side = getSide(placement);
  const isVertical = mainAxis === "x";
  let coords;
  switch (side) {
    case "top":
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;
    case "bottom":
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case "right":
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case "left":
      coords = {
        x: reference.x - floating.width,
        y: commonY
      };
      break;
    default:
      coords = {
        x: reference.x,
        y: reference.y
      };
  }
  switch (getAlignment(placement)) {
    case "start":
      coords[mainAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
      break;
    case "end":
      coords[mainAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
      break;
  }
  return coords;
}
function expandPaddingObject(padding) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...padding
  };
}
function getSideObjectFromPadding(padding) {
  return typeof padding !== "number" ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}
function rectToClientRect(rect) {
  return {
    ...rect,
    top: rect.y,
    left: rect.x,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  };
}
async function detectOverflow(state, options) {
  var _await$platform$isEle;
  if (options === void 0) {
    options = {};
  }
  const {
    x,
    y,
    platform: platform2,
    rects,
    elements,
    strategy
  } = state;
  const {
    boundary = "clippingAncestors",
    rootBoundary = "viewport",
    elementContext = "floating",
    altBoundary = false,
    padding = 0
  } = options;
  const paddingObject = getSideObjectFromPadding(padding);
  const altContext = elementContext === "floating" ? "reference" : "floating";
  const element = elements[altBoundary ? altContext : elementContext];
  const clippingClientRect = rectToClientRect(await platform2.getClippingRect({
    element: ((_await$platform$isEle = await (platform2.isElement == null ? void 0 : platform2.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || await (platform2.getDocumentElement == null ? void 0 : platform2.getDocumentElement(elements.floating)),
    boundary,
    rootBoundary,
    strategy
  }));
  const rect = elementContext === "floating" ? {
    ...rects.floating,
    x,
    y
  } : rects.reference;
  const offsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(elements.floating));
  const offsetScale = await (platform2.isElement == null ? void 0 : platform2.isElement(offsetParent)) ? await (platform2.getScale == null ? void 0 : platform2.getScale(offsetParent)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  };
  const elementClientRect = rectToClientRect(platform2.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform2.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect,
    offsetParent,
    strategy
  }) : rect);
  if (process.env.NODE_ENV !== "production")
    ;
  return {
    top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
    bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
    left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
    right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
  };
}
function within(min$1, value, max$1) {
  return max(min$1, min(value, max$1));
}
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, (side) => oppositeSideMap[side]);
}
function getAlignmentSides(placement, rects, rtl) {
  if (rtl === void 0) {
    rtl = false;
  }
  const alignment = getAlignment(placement);
  const mainAxis = getMainAxisFromPlacement(placement);
  const length = getLengthFromAxis(mainAxis);
  let mainAlignmentSide = mainAxis === "x" ? alignment === (rtl ? "end" : "start") ? "right" : "left" : alignment === "start" ? "bottom" : "top";
  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }
  return {
    main: mainAlignmentSide,
    cross: getOppositePlacement(mainAlignmentSide)
  };
}
function getOppositeAlignmentPlacement(placement) {
  return placement.replace(/start|end/g, (alignment) => oppositeAlignmentMap[alignment]);
}
function getPlacementList(alignment, autoAlignment, allowedPlacements) {
  const allowedPlacementsSortedByAlignment = alignment ? [...allowedPlacements.filter((placement) => getAlignment(placement) === alignment), ...allowedPlacements.filter((placement) => getAlignment(placement) !== alignment)] : allowedPlacements.filter((placement) => getSide(placement) === placement);
  return allowedPlacementsSortedByAlignment.filter((placement) => {
    if (alignment) {
      return getAlignment(placement) === alignment || (autoAlignment ? getOppositeAlignmentPlacement(placement) !== placement : false);
    }
    return true;
  });
}
function getExpandedPlacements(placement) {
  const oppositePlacement = getOppositePlacement(placement);
  return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
}
function getSideList(side, isStart, rtl) {
  const lr = ["left", "right"];
  const rl = ["right", "left"];
  const tb = ["top", "bottom"];
  const bt = ["bottom", "top"];
  switch (side) {
    case "top":
    case "bottom":
      if (rtl)
        return isStart ? rl : lr;
      return isStart ? lr : rl;
    case "left":
    case "right":
      return isStart ? tb : bt;
    default:
      return [];
  }
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
  const alignment = getAlignment(placement);
  let list = getSideList(getSide(placement), direction === "start", rtl);
  if (alignment) {
    list = list.map((side) => side + "-" + alignment);
    if (flipAlignment) {
      list = list.concat(list.map(getOppositeAlignmentPlacement));
    }
  }
  return list;
}
function getSideOffsets(overflow, rect) {
  return {
    top: overflow.top - rect.height,
    right: overflow.right - rect.width,
    bottom: overflow.bottom - rect.height,
    left: overflow.left - rect.width
  };
}
function isAnySideFullyClipped(overflow) {
  return sides.some((side) => overflow[side] >= 0);
}
async function convertValueToCoords(state, value) {
  const {
    placement,
    platform: platform2,
    elements
  } = state;
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
  const side = getSide(placement);
  const alignment = getAlignment(placement);
  const isVertical = getMainAxisFromPlacement(placement) === "x";
  const mainAxisMulti = ["left", "top"].includes(side) ? -1 : 1;
  const crossAxisMulti = rtl && isVertical ? -1 : 1;
  const rawValue = typeof value === "function" ? value(state) : value;
  let {
    mainAxis,
    crossAxis,
    alignmentAxis
  } = typeof rawValue === "number" ? {
    mainAxis: rawValue,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...rawValue
  };
  if (alignment && typeof alignmentAxis === "number") {
    crossAxis = alignment === "end" ? alignmentAxis * -1 : alignmentAxis;
  }
  return isVertical ? {
    x: crossAxis * crossAxisMulti,
    y: mainAxis * mainAxisMulti
  } : {
    x: mainAxis * mainAxisMulti,
    y: crossAxis * crossAxisMulti
  };
}
function getCrossAxis(axis) {
  return axis === "x" ? "y" : "x";
}
var computePosition, min, max, arrow, sides, allPlacements, oppositeSideMap, oppositeAlignmentMap, autoPlacement, flip, hide, inline, offset, shift, limitShift, size;
var init_floating_ui_core = __esm({
  "node_modules/@floating-ui/core/dist/floating-ui.core.mjs"() {
    __name(getAlignment, "getAlignment");
    __name(getLengthFromAxis, "getLengthFromAxis");
    __name(getSide, "getSide");
    __name(getMainAxisFromPlacement, "getMainAxisFromPlacement");
    __name(computeCoordsFromPlacement, "computeCoordsFromPlacement");
    computePosition = /* @__PURE__ */ __name(async (reference, floating, config) => {
      const {
        placement = "bottom",
        strategy = "absolute",
        middleware = [],
        platform: platform2
      } = config;
      const validMiddleware = middleware.filter(Boolean);
      const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(floating));
      if (process.env.NODE_ENV !== "production") {
        if (platform2 == null) {
          console.error(["Floating UI: `platform` property was not passed to config. If you", "want to use Floating UI on the web, install @floating-ui/dom", "instead of the /core package. Otherwise, you can create your own", "`platform`: https://floating-ui.com/docs/platform"].join(" "));
        }
        if (validMiddleware.filter((_ref) => {
          let {
            name
          } = _ref;
          return name === "autoPlacement" || name === "flip";
        }).length > 1) {
          throw new Error(["Floating UI: duplicate `flip` and/or `autoPlacement` middleware", "detected. This will lead to an infinite loop. Ensure only one of", "either has been passed to the `middleware` array."].join(" "));
        }
        if (!reference || !floating) {
          console.error(["Floating UI: The reference and/or floating element was not defined", "when `computePosition()` was called. Ensure that both elements have", "been created and can be measured."].join(" "));
        }
      }
      let rects = await platform2.getElementRects({
        reference,
        floating,
        strategy
      });
      let {
        x,
        y
      } = computeCoordsFromPlacement(rects, placement, rtl);
      let statefulPlacement = placement;
      let middlewareData = {};
      let resetCount = 0;
      for (let i = 0; i < validMiddleware.length; i++) {
        const {
          name,
          fn
        } = validMiddleware[i];
        const {
          x: nextX,
          y: nextY,
          data,
          reset
        } = await fn({
          x,
          y,
          initialPlacement: placement,
          placement: statefulPlacement,
          strategy,
          middlewareData,
          rects,
          platform: platform2,
          elements: {
            reference,
            floating
          }
        });
        x = nextX != null ? nextX : x;
        y = nextY != null ? nextY : y;
        middlewareData = {
          ...middlewareData,
          [name]: {
            ...middlewareData[name],
            ...data
          }
        };
        if (process.env.NODE_ENV !== "production") {
          if (resetCount > 50) {
            console.warn(["Floating UI: The middleware lifecycle appears to be running in an", "infinite loop. This is usually caused by a `reset` continually", "being returned without a break condition."].join(" "));
          }
        }
        if (reset && resetCount <= 50) {
          resetCount++;
          if (typeof reset === "object") {
            if (reset.placement) {
              statefulPlacement = reset.placement;
            }
            if (reset.rects) {
              rects = reset.rects === true ? await platform2.getElementRects({
                reference,
                floating,
                strategy
              }) : reset.rects;
            }
            ({
              x,
              y
            } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
          }
          i = -1;
          continue;
        }
      }
      return {
        x,
        y,
        placement: statefulPlacement,
        strategy,
        middlewareData
      };
    }, "computePosition");
    __name(expandPaddingObject, "expandPaddingObject");
    __name(getSideObjectFromPadding, "getSideObjectFromPadding");
    __name(rectToClientRect, "rectToClientRect");
    __name(detectOverflow, "detectOverflow");
    min = Math.min;
    max = Math.max;
    __name(within, "within");
    arrow = /* @__PURE__ */ __name((options) => ({
      name: "arrow",
      options,
      async fn(state) {
        const {
          element,
          padding = 0
        } = options || {};
        const {
          x,
          y,
          placement,
          rects,
          platform: platform2
        } = state;
        if (element == null) {
          if (process.env.NODE_ENV !== "production") {
            console.warn("Floating UI: No `element` was passed to the `arrow` middleware.");
          }
          return {};
        }
        const paddingObject = getSideObjectFromPadding(padding);
        const coords = {
          x,
          y
        };
        const axis = getMainAxisFromPlacement(placement);
        const length = getLengthFromAxis(axis);
        const arrowDimensions = await platform2.getDimensions(element);
        const minProp = axis === "y" ? "top" : "left";
        const maxProp = axis === "y" ? "bottom" : "right";
        const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
        const startDiff = coords[axis] - rects.reference[axis];
        const arrowOffsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(element));
        let clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
        if (clientSize === 0) {
          clientSize = rects.floating[length];
        }
        const centerToReference = endDiff / 2 - startDiff / 2;
        const min3 = paddingObject[minProp];
        const max3 = clientSize - arrowDimensions[length] - paddingObject[maxProp];
        const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
        const offset2 = within(min3, center, max3);
        const shouldAddOffset = getAlignment(placement) != null && center != offset2 && rects.reference[length] / 2 - (center < min3 ? paddingObject[minProp] : paddingObject[maxProp]) - arrowDimensions[length] / 2 < 0;
        const alignmentOffset = shouldAddOffset ? center < min3 ? min3 - center : max3 - center : 0;
        return {
          [axis]: coords[axis] - alignmentOffset,
          data: {
            [axis]: offset2,
            centerOffset: center - offset2
          }
        };
      }
    }), "arrow");
    sides = ["top", "right", "bottom", "left"];
    allPlacements = /* @__PURE__ */ sides.reduce((acc, side) => acc.concat(side, side + "-start", side + "-end"), []);
    oppositeSideMap = {
      left: "right",
      right: "left",
      bottom: "top",
      top: "bottom"
    };
    __name(getOppositePlacement, "getOppositePlacement");
    __name(getAlignmentSides, "getAlignmentSides");
    oppositeAlignmentMap = {
      start: "end",
      end: "start"
    };
    __name(getOppositeAlignmentPlacement, "getOppositeAlignmentPlacement");
    __name(getPlacementList, "getPlacementList");
    autoPlacement = /* @__PURE__ */ __name(function(options) {
      if (options === void 0) {
        options = {};
      }
      return {
        name: "autoPlacement",
        options,
        async fn(state) {
          var _middlewareData$autoP, _middlewareData$autoP2, _placementsThatFitOnE;
          const {
            rects,
            middlewareData,
            placement,
            platform: platform2,
            elements
          } = state;
          const {
            crossAxis = false,
            alignment,
            allowedPlacements = allPlacements,
            autoAlignment = true,
            ...detectOverflowOptions
          } = options;
          const placements = alignment !== void 0 || allowedPlacements === allPlacements ? getPlacementList(alignment || null, autoAlignment, allowedPlacements) : allowedPlacements;
          const overflow = await detectOverflow(state, detectOverflowOptions);
          const currentIndex = ((_middlewareData$autoP = middlewareData.autoPlacement) == null ? void 0 : _middlewareData$autoP.index) || 0;
          const currentPlacement = placements[currentIndex];
          if (currentPlacement == null) {
            return {};
          }
          const {
            main,
            cross
          } = getAlignmentSides(currentPlacement, rects, await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating)));
          if (placement !== currentPlacement) {
            return {
              reset: {
                placement: placements[0]
              }
            };
          }
          const currentOverflows = [overflow[getSide(currentPlacement)], overflow[main], overflow[cross]];
          const allOverflows = [...((_middlewareData$autoP2 = middlewareData.autoPlacement) == null ? void 0 : _middlewareData$autoP2.overflows) || [], {
            placement: currentPlacement,
            overflows: currentOverflows
          }];
          const nextPlacement = placements[currentIndex + 1];
          if (nextPlacement) {
            return {
              data: {
                index: currentIndex + 1,
                overflows: allOverflows
              },
              reset: {
                placement: nextPlacement
              }
            };
          }
          const placementsSortedByMostSpace = allOverflows.map((d) => {
            const alignment2 = getAlignment(d.placement);
            return [d.placement, alignment2 && crossAxis ? (
              // Check along the mainAxis and main crossAxis side.
              d.overflows.slice(0, 2).reduce((acc, v) => acc + v, 0)
            ) : (
              // Check only the mainAxis.
              d.overflows[0]
            ), d.overflows];
          }).sort((a, b) => a[1] - b[1]);
          const placementsThatFitOnEachSide = placementsSortedByMostSpace.filter((d) => d[2].slice(
            0,
            // Aligned placements should not check their opposite crossAxis
            // side.
            getAlignment(d[0]) ? 2 : 3
          ).every((v) => v <= 0));
          const resetPlacement = ((_placementsThatFitOnE = placementsThatFitOnEachSide[0]) == null ? void 0 : _placementsThatFitOnE[0]) || placementsSortedByMostSpace[0][0];
          if (resetPlacement !== placement) {
            return {
              data: {
                index: currentIndex + 1,
                overflows: allOverflows
              },
              reset: {
                placement: resetPlacement
              }
            };
          }
          return {};
        }
      };
    }, "autoPlacement");
    __name(getExpandedPlacements, "getExpandedPlacements");
    __name(getSideList, "getSideList");
    __name(getOppositeAxisPlacements, "getOppositeAxisPlacements");
    flip = /* @__PURE__ */ __name(function(options) {
      if (options === void 0) {
        options = {};
      }
      return {
        name: "flip",
        options,
        async fn(state) {
          var _middlewareData$flip;
          const {
            placement,
            middlewareData,
            rects,
            initialPlacement,
            platform: platform2,
            elements
          } = state;
          const {
            mainAxis: checkMainAxis = true,
            crossAxis: checkCrossAxis = true,
            fallbackPlacements: specifiedFallbackPlacements,
            fallbackStrategy = "bestFit",
            fallbackAxisSideDirection = "none",
            flipAlignment = true,
            ...detectOverflowOptions
          } = options;
          const side = getSide(placement);
          const isBasePlacement = getSide(initialPlacement) === initialPlacement;
          const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
          const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
          if (!specifiedFallbackPlacements && fallbackAxisSideDirection !== "none") {
            fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
          }
          const placements = [initialPlacement, ...fallbackPlacements];
          const overflow = await detectOverflow(state, detectOverflowOptions);
          const overflows = [];
          let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
          if (checkMainAxis) {
            overflows.push(overflow[side]);
          }
          if (checkCrossAxis) {
            const {
              main,
              cross
            } = getAlignmentSides(placement, rects, rtl);
            overflows.push(overflow[main], overflow[cross]);
          }
          overflowsData = [...overflowsData, {
            placement,
            overflows
          }];
          if (!overflows.every((side2) => side2 <= 0)) {
            var _middlewareData$flip2, _overflowsData$filter;
            const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
            const nextPlacement = placements[nextIndex];
            if (nextPlacement) {
              return {
                data: {
                  index: nextIndex,
                  overflows: overflowsData
                },
                reset: {
                  placement: nextPlacement
                }
              };
            }
            let resetPlacement = (_overflowsData$filter = overflowsData.filter((d) => d.overflows[0] <= 0).sort((a, b) => a.overflows[1] - b.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;
            if (!resetPlacement) {
              switch (fallbackStrategy) {
                case "bestFit": {
                  var _overflowsData$map$so;
                  const placement2 = (_overflowsData$map$so = overflowsData.map((d) => [d.placement, d.overflows.filter((overflow2) => overflow2 > 0).reduce((acc, overflow2) => acc + overflow2, 0)]).sort((a, b) => a[1] - b[1])[0]) == null ? void 0 : _overflowsData$map$so[0];
                  if (placement2) {
                    resetPlacement = placement2;
                  }
                  break;
                }
                case "initialPlacement":
                  resetPlacement = initialPlacement;
                  break;
              }
            }
            if (placement !== resetPlacement) {
              return {
                reset: {
                  placement: resetPlacement
                }
              };
            }
          }
          return {};
        }
      };
    }, "flip");
    __name(getSideOffsets, "getSideOffsets");
    __name(isAnySideFullyClipped, "isAnySideFullyClipped");
    hide = /* @__PURE__ */ __name(function(options) {
      if (options === void 0) {
        options = {};
      }
      return {
        name: "hide",
        options,
        async fn(state) {
          const {
            strategy = "referenceHidden",
            ...detectOverflowOptions
          } = options;
          const {
            rects
          } = state;
          switch (strategy) {
            case "referenceHidden": {
              const overflow = await detectOverflow(state, {
                ...detectOverflowOptions,
                elementContext: "reference"
              });
              const offsets = getSideOffsets(overflow, rects.reference);
              return {
                data: {
                  referenceHiddenOffsets: offsets,
                  referenceHidden: isAnySideFullyClipped(offsets)
                }
              };
            }
            case "escaped": {
              const overflow = await detectOverflow(state, {
                ...detectOverflowOptions,
                altBoundary: true
              });
              const offsets = getSideOffsets(overflow, rects.floating);
              return {
                data: {
                  escapedOffsets: offsets,
                  escaped: isAnySideFullyClipped(offsets)
                }
              };
            }
            default: {
              return {};
            }
          }
        }
      };
    }, "hide");
    inline = /* @__PURE__ */ __name(function(options) {
      if (options === void 0) {
        options = {};
      }
      return {
        name: "inline",
        options,
        async fn(state) {
          const {
            placement,
            elements,
            rects,
            platform: platform2,
            strategy
          } = state;
          const {
            padding = 2,
            x,
            y
          } = options;
          const fallback = rectToClientRect(platform2.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform2.convertOffsetParentRelativeRectToViewportRelativeRect({
            rect: rects.reference,
            offsetParent: await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(elements.floating)),
            strategy
          }) : rects.reference);
          const clientRects = await (platform2.getClientRects == null ? void 0 : platform2.getClientRects(elements.reference)) || [];
          const paddingObject = getSideObjectFromPadding(padding);
          function getBoundingClientRect2() {
            if (clientRects.length === 2 && clientRects[0].left > clientRects[1].right && x != null && y != null) {
              return clientRects.find((rect) => x > rect.left - paddingObject.left && x < rect.right + paddingObject.right && y > rect.top - paddingObject.top && y < rect.bottom + paddingObject.bottom) || fallback;
            }
            if (clientRects.length >= 2) {
              if (getMainAxisFromPlacement(placement) === "x") {
                const firstRect = clientRects[0];
                const lastRect = clientRects[clientRects.length - 1];
                const isTop = getSide(placement) === "top";
                const top2 = firstRect.top;
                const bottom2 = lastRect.bottom;
                const left2 = isTop ? firstRect.left : lastRect.left;
                const right2 = isTop ? firstRect.right : lastRect.right;
                const width2 = right2 - left2;
                const height2 = bottom2 - top2;
                return {
                  top: top2,
                  bottom: bottom2,
                  left: left2,
                  right: right2,
                  width: width2,
                  height: height2,
                  x: left2,
                  y: top2
                };
              }
              const isLeftSide = getSide(placement) === "left";
              const maxRight = max(...clientRects.map((rect) => rect.right));
              const minLeft = min(...clientRects.map((rect) => rect.left));
              const measureRects = clientRects.filter((rect) => isLeftSide ? rect.left === minLeft : rect.right === maxRight);
              const top = measureRects[0].top;
              const bottom = measureRects[measureRects.length - 1].bottom;
              const left = minLeft;
              const right = maxRight;
              const width = right - left;
              const height = bottom - top;
              return {
                top,
                bottom,
                left,
                right,
                width,
                height,
                x: left,
                y: top
              };
            }
            return fallback;
          }
          __name(getBoundingClientRect2, "getBoundingClientRect");
          const resetRects = await platform2.getElementRects({
            reference: {
              getBoundingClientRect: getBoundingClientRect2
            },
            floating: elements.floating,
            strategy
          });
          if (rects.reference.x !== resetRects.reference.x || rects.reference.y !== resetRects.reference.y || rects.reference.width !== resetRects.reference.width || rects.reference.height !== resetRects.reference.height) {
            return {
              reset: {
                rects: resetRects
              }
            };
          }
          return {};
        }
      };
    }, "inline");
    __name(convertValueToCoords, "convertValueToCoords");
    offset = /* @__PURE__ */ __name(function(value) {
      if (value === void 0) {
        value = 0;
      }
      return {
        name: "offset",
        options: value,
        async fn(state) {
          const {
            x,
            y
          } = state;
          const diffCoords = await convertValueToCoords(state, value);
          return {
            x: x + diffCoords.x,
            y: y + diffCoords.y,
            data: diffCoords
          };
        }
      };
    }, "offset");
    __name(getCrossAxis, "getCrossAxis");
    shift = /* @__PURE__ */ __name(function(options) {
      if (options === void 0) {
        options = {};
      }
      return {
        name: "shift",
        options,
        async fn(state) {
          const {
            x,
            y,
            placement
          } = state;
          const {
            mainAxis: checkMainAxis = true,
            crossAxis: checkCrossAxis = false,
            limiter = {
              fn: (_ref) => {
                let {
                  x: x2,
                  y: y2
                } = _ref;
                return {
                  x: x2,
                  y: y2
                };
              }
            },
            ...detectOverflowOptions
          } = options;
          const coords = {
            x,
            y
          };
          const overflow = await detectOverflow(state, detectOverflowOptions);
          const mainAxis = getMainAxisFromPlacement(getSide(placement));
          const crossAxis = getCrossAxis(mainAxis);
          let mainAxisCoord = coords[mainAxis];
          let crossAxisCoord = coords[crossAxis];
          if (checkMainAxis) {
            const minSide = mainAxis === "y" ? "top" : "left";
            const maxSide = mainAxis === "y" ? "bottom" : "right";
            const min3 = mainAxisCoord + overflow[minSide];
            const max3 = mainAxisCoord - overflow[maxSide];
            mainAxisCoord = within(min3, mainAxisCoord, max3);
          }
          if (checkCrossAxis) {
            const minSide = crossAxis === "y" ? "top" : "left";
            const maxSide = crossAxis === "y" ? "bottom" : "right";
            const min3 = crossAxisCoord + overflow[minSide];
            const max3 = crossAxisCoord - overflow[maxSide];
            crossAxisCoord = within(min3, crossAxisCoord, max3);
          }
          const limitedCoords = limiter.fn({
            ...state,
            [mainAxis]: mainAxisCoord,
            [crossAxis]: crossAxisCoord
          });
          return {
            ...limitedCoords,
            data: {
              x: limitedCoords.x - x,
              y: limitedCoords.y - y
            }
          };
        }
      };
    }, "shift");
    limitShift = /* @__PURE__ */ __name(function(options) {
      if (options === void 0) {
        options = {};
      }
      return {
        options,
        fn(state) {
          const {
            x,
            y,
            placement,
            rects,
            middlewareData
          } = state;
          const {
            offset: offset2 = 0,
            mainAxis: checkMainAxis = true,
            crossAxis: checkCrossAxis = true
          } = options;
          const coords = {
            x,
            y
          };
          const mainAxis = getMainAxisFromPlacement(placement);
          const crossAxis = getCrossAxis(mainAxis);
          let mainAxisCoord = coords[mainAxis];
          let crossAxisCoord = coords[crossAxis];
          const rawOffset = typeof offset2 === "function" ? offset2(state) : offset2;
          const computedOffset = typeof rawOffset === "number" ? {
            mainAxis: rawOffset,
            crossAxis: 0
          } : {
            mainAxis: 0,
            crossAxis: 0,
            ...rawOffset
          };
          if (checkMainAxis) {
            const len = mainAxis === "y" ? "height" : "width";
            const limitMin = rects.reference[mainAxis] - rects.floating[len] + computedOffset.mainAxis;
            const limitMax = rects.reference[mainAxis] + rects.reference[len] - computedOffset.mainAxis;
            if (mainAxisCoord < limitMin) {
              mainAxisCoord = limitMin;
            } else if (mainAxisCoord > limitMax) {
              mainAxisCoord = limitMax;
            }
          }
          if (checkCrossAxis) {
            var _middlewareData$offse, _middlewareData$offse2;
            const len = mainAxis === "y" ? "width" : "height";
            const isOriginSide = ["top", "left"].includes(getSide(placement));
            const limitMin = rects.reference[crossAxis] - rects.floating[len] + (isOriginSide ? ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse[crossAxis]) || 0 : 0) + (isOriginSide ? 0 : computedOffset.crossAxis);
            const limitMax = rects.reference[crossAxis] + rects.reference[len] + (isOriginSide ? 0 : ((_middlewareData$offse2 = middlewareData.offset) == null ? void 0 : _middlewareData$offse2[crossAxis]) || 0) - (isOriginSide ? computedOffset.crossAxis : 0);
            if (crossAxisCoord < limitMin) {
              crossAxisCoord = limitMin;
            } else if (crossAxisCoord > limitMax) {
              crossAxisCoord = limitMax;
            }
          }
          return {
            [mainAxis]: mainAxisCoord,
            [crossAxis]: crossAxisCoord
          };
        }
      };
    }, "limitShift");
    size = /* @__PURE__ */ __name(function(options) {
      if (options === void 0) {
        options = {};
      }
      return {
        name: "size",
        options,
        async fn(state) {
          const {
            placement,
            rects,
            platform: platform2,
            elements
          } = state;
          const {
            apply = /* @__PURE__ */ __name(() => {
            }, "apply"),
            ...detectOverflowOptions
          } = options;
          const overflow = await detectOverflow(state, detectOverflowOptions);
          const side = getSide(placement);
          const alignment = getAlignment(placement);
          const axis = getMainAxisFromPlacement(placement);
          const isXAxis = axis === "x";
          const {
            width,
            height
          } = rects.floating;
          let heightSide;
          let widthSide;
          if (side === "top" || side === "bottom") {
            heightSide = side;
            widthSide = alignment === (await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating)) ? "start" : "end") ? "left" : "right";
          } else {
            widthSide = side;
            heightSide = alignment === "end" ? "top" : "bottom";
          }
          const overflowAvailableHeight = height - overflow[heightSide];
          const overflowAvailableWidth = width - overflow[widthSide];
          let availableHeight = overflowAvailableHeight;
          let availableWidth = overflowAvailableWidth;
          if (isXAxis) {
            availableWidth = min(
              // Maximum clipping viewport width
              width - overflow.right - overflow.left,
              overflowAvailableWidth
            );
          } else {
            availableHeight = min(
              // Maximum clipping viewport height
              height - overflow.bottom - overflow.top,
              overflowAvailableHeight
            );
          }
          if (!state.middlewareData.shift && !alignment) {
            const xMin = max(overflow.left, 0);
            const xMax = max(overflow.right, 0);
            const yMin = max(overflow.top, 0);
            const yMax = max(overflow.bottom, 0);
            if (isXAxis) {
              availableWidth = width - 2 * (xMin !== 0 || xMax !== 0 ? xMin + xMax : max(overflow.left, overflow.right));
            } else {
              availableHeight = height - 2 * (yMin !== 0 || yMax !== 0 ? yMin + yMax : max(overflow.top, overflow.bottom));
            }
          }
          await apply({
            ...state,
            availableWidth,
            availableHeight
          });
          const nextDimensions = await platform2.getDimensions(elements.floating);
          if (width !== nextDimensions.width || height !== nextDimensions.height) {
            return {
              reset: {
                rects: true
              }
            };
          }
          return {};
        }
      };
    }, "size");
  }
});

// node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
function getWindow(node) {
  var _node$ownerDocument;
  return ((_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function getComputedStyle$1(element) {
  return getWindow(element).getComputedStyle(element);
}
function getCssDimensions(element) {
  const css = getComputedStyle$1(element);
  let width = parseFloat(css.width);
  let height = parseFloat(css.height);
  const offsetWidth = element.offsetWidth;
  const offsetHeight = element.offsetHeight;
  const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
  if (shouldFallback) {
    width = offsetWidth;
    height = offsetHeight;
  }
  return {
    width,
    height,
    fallback: shouldFallback
  };
}
function getNodeName(node) {
  return isNode(node) ? (node.nodeName || "").toLowerCase() : "";
}
function getUAString() {
  if (uaString) {
    return uaString;
  }
  const uaData = navigator.userAgentData;
  if (uaData && Array.isArray(uaData.brands)) {
    uaString = uaData.brands.map((item) => item.brand + "/" + item.version).join(" ");
    return uaString;
  }
  return navigator.userAgent;
}
function isHTMLElement(value) {
  return value instanceof getWindow(value).HTMLElement;
}
function isElement(value) {
  return value instanceof getWindow(value).Element;
}
function isNode(value) {
  return value instanceof getWindow(value).Node;
}
function isShadowRoot(node) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  const OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}
function isOverflowElement(element) {
  const {
    overflow,
    overflowX,
    overflowY,
    display
  } = getComputedStyle$1(element);
  return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !["inline", "contents"].includes(display);
}
function isTableElement(element) {
  return ["table", "td", "th"].includes(getNodeName(element));
}
function isContainingBlock(element) {
  const isFirefox = /firefox/i.test(getUAString());
  const css = getComputedStyle$1(element);
  const backdropFilter = css.backdropFilter || css.WebkitBackdropFilter;
  return css.transform !== "none" || css.perspective !== "none" || (backdropFilter ? backdropFilter !== "none" : false) || isFirefox && css.willChange === "filter" || isFirefox && (css.filter ? css.filter !== "none" : false) || ["transform", "perspective"].some((value) => css.willChange.includes(value)) || ["paint", "layout", "strict", "content"].some((value) => {
    const contain = css.contain;
    return contain != null ? contain.includes(value) : false;
  });
}
function isClientRectVisualViewportBased() {
  return /^((?!chrome|android).)*safari/i.test(getUAString());
}
function isLastTraversableNode(node) {
  return ["html", "body", "#document"].includes(getNodeName(node));
}
function unwrapElement(element) {
  return !isElement(element) ? element.contextElement : element;
}
function getScale(element) {
  const domElement = unwrapElement(element);
  if (!isHTMLElement(domElement)) {
    return FALLBACK_SCALE;
  }
  const rect = domElement.getBoundingClientRect();
  const {
    width,
    height,
    fallback
  } = getCssDimensions(domElement);
  let x = (fallback ? round(rect.width) : rect.width) / width;
  let y = (fallback ? round(rect.height) : rect.height) / height;
  if (!x || !Number.isFinite(x)) {
    x = 1;
  }
  if (!y || !Number.isFinite(y)) {
    y = 1;
  }
  return {
    x,
    y
  };
}
function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
  var _win$visualViewport, _win$visualViewport2;
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  const clientRect = element.getBoundingClientRect();
  const domElement = unwrapElement(element);
  let scale = FALLBACK_SCALE;
  if (includeScale) {
    if (offsetParent) {
      if (isElement(offsetParent)) {
        scale = getScale(offsetParent);
      }
    } else {
      scale = getScale(element);
    }
  }
  const win = domElement ? getWindow(domElement) : window;
  const addVisualOffsets = isClientRectVisualViewportBased() && isFixedStrategy;
  let x = (clientRect.left + (addVisualOffsets ? ((_win$visualViewport = win.visualViewport) == null ? void 0 : _win$visualViewport.offsetLeft) || 0 : 0)) / scale.x;
  let y = (clientRect.top + (addVisualOffsets ? ((_win$visualViewport2 = win.visualViewport) == null ? void 0 : _win$visualViewport2.offsetTop) || 0 : 0)) / scale.y;
  let width = clientRect.width / scale.x;
  let height = clientRect.height / scale.y;
  if (domElement) {
    const win2 = getWindow(domElement);
    const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
    let currentIFrame = win2.frameElement;
    while (currentIFrame && offsetParent && offsetWin !== win2) {
      const iframeScale = getScale(currentIFrame);
      const iframeRect = currentIFrame.getBoundingClientRect();
      const css = getComputedStyle(currentIFrame);
      iframeRect.x += (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
      iframeRect.y += (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
      x *= iframeScale.x;
      y *= iframeScale.y;
      width *= iframeScale.x;
      height *= iframeScale.y;
      x += iframeRect.x;
      y += iframeRect.y;
      currentIFrame = getWindow(currentIFrame).frameElement;
    }
  }
  return {
    width,
    height,
    top: y,
    right: x + width,
    bottom: y + height,
    left: x,
    x,
    y
  };
}
function getDocumentElement(node) {
  return ((isNode(node) ? node.ownerDocument : node.document) || window.document).documentElement;
}
function getNodeScroll(element) {
  if (isElement(element)) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }
  return {
    scrollLeft: element.pageXOffset,
    scrollTop: element.pageYOffset
  };
}
function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  let {
    rect,
    offsetParent,
    strategy
  } = _ref;
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  if (offsetParent === documentElement) {
    return rect;
  }
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  let scale = {
    x: 1,
    y: 1
  };
  const offsets = {
    x: 0,
    y: 0
  };
  if (isOffsetParentAnElement || !isOffsetParentAnElement && strategy !== "fixed") {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent);
      scale = getScale(offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  return {
    width: rect.width * scale.x,
    height: rect.height * scale.y,
    x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x,
    y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y
  };
}
function getWindowScrollBarX(element) {
  return getBoundingClientRect(getDocumentElement(element)).left + getNodeScroll(element).scrollLeft;
}
function getDocumentRect(element) {
  const html = getDocumentElement(element);
  const scroll = getNodeScroll(element);
  const body = element.ownerDocument.body;
  const width = max2(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
  const height = max2(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
  let x = -scroll.scrollLeft + getWindowScrollBarX(element);
  const y = -scroll.scrollTop;
  if (getComputedStyle$1(body).direction === "rtl") {
    x += max2(html.clientWidth, body.clientWidth) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}
function getParentNode(node) {
  if (getNodeName(node) === "html") {
    return node;
  }
  const result = (
    // Step into the shadow DOM of the parent of a slotted node.
    node.assignedSlot || // DOM Element detected.
    node.parentNode || // ShadowRoot detected.
    isShadowRoot(node) && node.host || // Fallback.
    getDocumentElement(node)
  );
  return isShadowRoot(result) ? result.host : result;
}
function getNearestOverflowAncestor(node) {
  const parentNode = getParentNode(node);
  if (isLastTraversableNode(parentNode)) {
    return parentNode.ownerDocument.body;
  }
  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }
  return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list) {
  var _node$ownerDocument;
  if (list === void 0) {
    list = [];
  }
  const scrollableAncestor = getNearestOverflowAncestor(node);
  const isBody = scrollableAncestor === ((_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.body);
  const win = getWindow(scrollableAncestor);
  if (isBody) {
    return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : []);
  }
  return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor));
}
function getViewportRect(element, strategy) {
  const win = getWindow(element);
  const html = getDocumentElement(element);
  const visualViewport = win.visualViewport;
  let width = html.clientWidth;
  let height = html.clientHeight;
  let x = 0;
  let y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    const visualViewportBased = isClientRectVisualViewportBased();
    if (!visualViewportBased || visualViewportBased && strategy === "fixed") {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x,
    y
  };
}
function getInnerBoundingClientRect(element, strategy) {
  const clientRect = getBoundingClientRect(element, true, strategy === "fixed");
  const top = clientRect.top + element.clientTop;
  const left = clientRect.left + element.clientLeft;
  const scale = isHTMLElement(element) ? getScale(element) : {
    x: 1,
    y: 1
  };
  const width = element.clientWidth * scale.x;
  const height = element.clientHeight * scale.y;
  const x = left * scale.x;
  const y = top * scale.y;
  return {
    width,
    height,
    x,
    y
  };
}
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
  let rect;
  if (clippingAncestor === "viewport") {
    rect = getViewportRect(element, strategy);
  } else if (clippingAncestor === "document") {
    rect = getDocumentRect(getDocumentElement(element));
  } else if (isElement(clippingAncestor)) {
    rect = getInnerBoundingClientRect(clippingAncestor, strategy);
  } else {
    const mutableRect = {
      ...clippingAncestor
    };
    if (isClientRectVisualViewportBased()) {
      var _win$visualViewport, _win$visualViewport2;
      const win = getWindow(element);
      mutableRect.x -= ((_win$visualViewport = win.visualViewport) == null ? void 0 : _win$visualViewport.offsetLeft) || 0;
      mutableRect.y -= ((_win$visualViewport2 = win.visualViewport) == null ? void 0 : _win$visualViewport2.offsetTop) || 0;
    }
    rect = mutableRect;
  }
  return rectToClientRect(rect);
}
function getClippingElementAncestors(element, cache) {
  const cachedResult = cache.get(element);
  if (cachedResult) {
    return cachedResult;
  }
  let result = getOverflowAncestors(element).filter((el) => isElement(el) && getNodeName(el) !== "body");
  let currentContainingBlockComputedStyle = null;
  const elementIsFixed = getComputedStyle$1(element).position === "fixed";
  let currentNode = elementIsFixed ? getParentNode(element) : element;
  while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
    const computedStyle = getComputedStyle$1(currentNode);
    const containingBlock = isContainingBlock(currentNode);
    const shouldIgnoreCurrentNode = computedStyle.position === "fixed";
    if (shouldIgnoreCurrentNode) {
      currentContainingBlockComputedStyle = null;
    } else {
      const shouldDropCurrentNode = elementIsFixed ? !containingBlock && !currentContainingBlockComputedStyle : !containingBlock && computedStyle.position === "static" && !!currentContainingBlockComputedStyle && ["absolute", "fixed"].includes(currentContainingBlockComputedStyle.position);
      if (shouldDropCurrentNode) {
        result = result.filter((ancestor) => ancestor !== currentNode);
      } else {
        currentContainingBlockComputedStyle = computedStyle;
      }
    }
    currentNode = getParentNode(currentNode);
  }
  cache.set(element, result);
  return result;
}
function getClippingRect(_ref) {
  let {
    element,
    boundary,
    rootBoundary,
    strategy
  } = _ref;
  const elementClippingAncestors = boundary === "clippingAncestors" ? getClippingElementAncestors(element, this._c) : [].concat(boundary);
  const clippingAncestors = [...elementClippingAncestors, rootBoundary];
  const firstClippingAncestor = clippingAncestors[0];
  const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
    const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
    accRect.top = max2(rect.top, accRect.top);
    accRect.right = min2(rect.right, accRect.right);
    accRect.bottom = min2(rect.bottom, accRect.bottom);
    accRect.left = max2(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
  return {
    width: clippingRect.right - clippingRect.left,
    height: clippingRect.bottom - clippingRect.top,
    x: clippingRect.left,
    y: clippingRect.top
  };
}
function getDimensions(element) {
  if (isHTMLElement(element)) {
    return getCssDimensions(element);
  }
  return element.getBoundingClientRect();
}
function getTrueOffsetParent(element, polyfill) {
  if (!isHTMLElement(element) || getComputedStyle$1(element).position === "fixed") {
    return null;
  }
  if (polyfill) {
    return polyfill(element);
  }
  return element.offsetParent;
}
function getContainingBlock(element) {
  let currentNode = getParentNode(element);
  while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    } else {
      currentNode = getParentNode(currentNode);
    }
  }
  return null;
}
function getOffsetParent(element, polyfill) {
  const window2 = getWindow(element);
  let offsetParent = getTrueOffsetParent(element, polyfill);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle$1(offsetParent).position === "static") {
    offsetParent = getTrueOffsetParent(offsetParent, polyfill);
  }
  if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle$1(offsetParent).position === "static" && !isContainingBlock(offsetParent))) {
    return window2;
  }
  return offsetParent || getContainingBlock(element) || window2;
}
function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  const rect = getBoundingClientRect(element, true, strategy === "fixed", offsetParent);
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = {
    x: 0,
    y: 0
  };
  if (isOffsetParentAnElement || !isOffsetParentAnElement && strategy !== "fixed") {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent, true);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}
function autoUpdate(reference, floating, update, options) {
  if (options === void 0) {
    options = {};
  }
  const {
    ancestorScroll: _ancestorScroll = true,
    ancestorResize = true,
    elementResize = true,
    animationFrame = false
  } = options;
  const ancestorScroll = _ancestorScroll && !animationFrame;
  const ancestors = ancestorScroll || ancestorResize ? [...isElement(reference) ? getOverflowAncestors(reference) : reference.contextElement ? getOverflowAncestors(reference.contextElement) : [], ...getOverflowAncestors(floating)] : [];
  ancestors.forEach((ancestor) => {
    ancestorScroll && ancestor.addEventListener("scroll", update, {
      passive: true
    });
    ancestorResize && ancestor.addEventListener("resize", update);
  });
  let observer = null;
  if (elementResize) {
    let initialUpdate = true;
    observer = new ResizeObserver(() => {
      if (!initialUpdate) {
        update();
      }
      initialUpdate = false;
    });
    isElement(reference) && !animationFrame && observer.observe(reference);
    if (!isElement(reference) && reference.contextElement && !animationFrame) {
      observer.observe(reference.contextElement);
    }
    observer.observe(floating);
  }
  let frameId;
  let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
  if (animationFrame) {
    frameLoop();
  }
  function frameLoop() {
    const nextRefRect = getBoundingClientRect(reference);
    if (prevRefRect && (nextRefRect.x !== prevRefRect.x || nextRefRect.y !== prevRefRect.y || nextRefRect.width !== prevRefRect.width || nextRefRect.height !== prevRefRect.height)) {
      update();
    }
    prevRefRect = nextRefRect;
    frameId = requestAnimationFrame(frameLoop);
  }
  __name(frameLoop, "frameLoop");
  update();
  return () => {
    var _observer;
    ancestors.forEach((ancestor) => {
      ancestorScroll && ancestor.removeEventListener("scroll", update);
      ancestorResize && ancestor.removeEventListener("resize", update);
    });
    (_observer = observer) == null ? void 0 : _observer.disconnect();
    observer = null;
    if (animationFrame) {
      cancelAnimationFrame(frameId);
    }
  };
}
var min2, max2, round, uaString, FALLBACK_SCALE, platform, computePosition2;
var init_floating_ui_dom = __esm({
  "node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs"() {
    init_floating_ui_core();
    init_floating_ui_core();
    __name(getWindow, "getWindow");
    __name(getComputedStyle$1, "getComputedStyle$1");
    min2 = Math.min;
    max2 = Math.max;
    round = Math.round;
    __name(getCssDimensions, "getCssDimensions");
    __name(getNodeName, "getNodeName");
    __name(getUAString, "getUAString");
    __name(isHTMLElement, "isHTMLElement");
    __name(isElement, "isElement");
    __name(isNode, "isNode");
    __name(isShadowRoot, "isShadowRoot");
    __name(isOverflowElement, "isOverflowElement");
    __name(isTableElement, "isTableElement");
    __name(isContainingBlock, "isContainingBlock");
    __name(isClientRectVisualViewportBased, "isClientRectVisualViewportBased");
    __name(isLastTraversableNode, "isLastTraversableNode");
    __name(unwrapElement, "unwrapElement");
    FALLBACK_SCALE = {
      x: 1,
      y: 1
    };
    __name(getScale, "getScale");
    __name(getBoundingClientRect, "getBoundingClientRect");
    __name(getDocumentElement, "getDocumentElement");
    __name(getNodeScroll, "getNodeScroll");
    __name(convertOffsetParentRelativeRectToViewportRelativeRect, "convertOffsetParentRelativeRectToViewportRelativeRect");
    __name(getWindowScrollBarX, "getWindowScrollBarX");
    __name(getDocumentRect, "getDocumentRect");
    __name(getParentNode, "getParentNode");
    __name(getNearestOverflowAncestor, "getNearestOverflowAncestor");
    __name(getOverflowAncestors, "getOverflowAncestors");
    __name(getViewportRect, "getViewportRect");
    __name(getInnerBoundingClientRect, "getInnerBoundingClientRect");
    __name(getClientRectFromClippingAncestor, "getClientRectFromClippingAncestor");
    __name(getClippingElementAncestors, "getClippingElementAncestors");
    __name(getClippingRect, "getClippingRect");
    __name(getDimensions, "getDimensions");
    __name(getTrueOffsetParent, "getTrueOffsetParent");
    __name(getContainingBlock, "getContainingBlock");
    __name(getOffsetParent, "getOffsetParent");
    __name(getRectRelativeToOffsetParent, "getRectRelativeToOffsetParent");
    platform = {
      getClippingRect,
      convertOffsetParentRelativeRectToViewportRelativeRect,
      isElement,
      getDimensions,
      getOffsetParent,
      getDocumentElement,
      getScale,
      async getElementRects(_ref) {
        let {
          reference,
          floating,
          strategy
        } = _ref;
        const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
        const getDimensionsFn = this.getDimensions;
        return {
          reference: getRectRelativeToOffsetParent(reference, await getOffsetParentFn(floating), strategy),
          floating: {
            x: 0,
            y: 0,
            ...await getDimensionsFn(floating)
          }
        };
      },
      getClientRects: (element) => Array.from(element.getClientRects()),
      isRTL: (element) => getComputedStyle$1(element).direction === "rtl"
    };
    __name(autoUpdate, "autoUpdate");
    computePosition2 = /* @__PURE__ */ __name((reference, floating, options) => {
      const cache = /* @__PURE__ */ new Map();
      const mergedOptions = {
        platform,
        ...options
      };
      const platformWithCache = {
        ...mergedOptions.platform,
        _c: cache
      };
      return computePosition(reference, floating, {
        ...mergedOptions,
        platform: platformWithCache
      });
    }, "computePosition");
  }
});

// node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.esm.js
var floating_ui_react_dom_esm_exports = {};
__export(floating_ui_react_dom_esm_exports, {
  arrow: () => arrow2,
  autoPlacement: () => autoPlacement,
  autoUpdate: () => autoUpdate,
  computePosition: () => computePosition2,
  detectOverflow: () => detectOverflow,
  flip: () => flip,
  getOverflowAncestors: () => getOverflowAncestors,
  hide: () => hide,
  inline: () => inline,
  limitShift: () => limitShift,
  offset: () => offset,
  platform: () => platform,
  shift: () => shift,
  size: () => size,
  useFloating: () => useFloating2
});
function deepEqual(a, b) {
  if (a === b) {
    return true;
  }
  if (typeof a !== typeof b) {
    return false;
  }
  if (typeof a === "function" && a.toString() === b.toString()) {
    return true;
  }
  let length, i, keys;
  if (a && b && typeof a == "object") {
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length)
        return false;
      for (i = length; i-- !== 0; ) {
        if (!deepEqual(a[i], b[i])) {
          return false;
        }
      }
      return true;
    }
    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) {
      return false;
    }
    for (i = length; i-- !== 0; ) {
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) {
        return false;
      }
    }
    for (i = length; i-- !== 0; ) {
      const key = keys[i];
      if (key === "_owner" && a.$$typeof) {
        continue;
      }
      if (!deepEqual(a[key], b[key])) {
        return false;
      }
    }
    return true;
  }
  return a !== a && b !== b;
}
function useLatestRef(value) {
  const ref = React8.useRef(value);
  index(() => {
    ref.current = value;
  });
  return ref;
}
function useFloating2(options) {
  if (options === void 0) {
    options = {};
  }
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform: platform2,
    whileElementsMounted,
    open
  } = options;
  const [data, setData] = React8.useState({
    x: null,
    y: null,
    strategy,
    placement,
    middlewareData: {},
    isPositioned: false
  });
  const [latestMiddleware, setLatestMiddleware] = React8.useState(middleware);
  if (!deepEqual(latestMiddleware, middleware)) {
    setLatestMiddleware(middleware);
  }
  const referenceRef = React8.useRef(null);
  const floatingRef = React8.useRef(null);
  const dataRef = React8.useRef(data);
  const whileElementsMountedRef = useLatestRef(whileElementsMounted);
  const platformRef = useLatestRef(platform2);
  const [reference, _setReference] = React8.useState(null);
  const [floating, _setFloating] = React8.useState(null);
  const setReference = React8.useCallback((node) => {
    if (referenceRef.current !== node) {
      referenceRef.current = node;
      _setReference(node);
    }
  }, []);
  const setFloating = React8.useCallback((node) => {
    if (floatingRef.current !== node) {
      floatingRef.current = node;
      _setFloating(node);
    }
  }, []);
  const update = React8.useCallback(() => {
    if (!referenceRef.current || !floatingRef.current) {
      return;
    }
    const config = {
      placement,
      strategy,
      middleware: latestMiddleware
    };
    if (platformRef.current) {
      config.platform = platformRef.current;
    }
    computePosition2(referenceRef.current, floatingRef.current, config).then((data2) => {
      const fullData = {
        ...data2,
        isPositioned: true
      };
      if (isMountedRef.current && !deepEqual(dataRef.current, fullData)) {
        dataRef.current = fullData;
        ReactDOM.flushSync(() => {
          setData(fullData);
        });
      }
    });
  }, [latestMiddleware, placement, strategy, platformRef]);
  index(() => {
    if (open === false && dataRef.current.isPositioned) {
      dataRef.current.isPositioned = false;
      setData((data2) => ({
        ...data2,
        isPositioned: false
      }));
    }
  }, [open]);
  const isMountedRef = React8.useRef(false);
  index(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);
  index(() => {
    if (reference && floating) {
      if (whileElementsMountedRef.current) {
        return whileElementsMountedRef.current(reference, floating, update);
      } else {
        update();
      }
    }
  }, [reference, floating, update, whileElementsMountedRef]);
  const refs = React8.useMemo(() => ({
    reference: referenceRef,
    floating: floatingRef,
    setReference,
    setFloating
  }), [setReference, setFloating]);
  const elements = React8.useMemo(() => ({
    reference,
    floating
  }), [reference, floating]);
  return React8.useMemo(() => ({
    ...data,
    update,
    refs,
    elements,
    reference: setReference,
    floating: setFloating
  }), [data, update, refs, elements, setReference, setFloating]);
}
var React8, import_react7, ReactDOM, arrow2, index;
var init_floating_ui_react_dom_esm = __esm({
  "node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.esm.js"() {
    init_floating_ui_dom();
    init_floating_ui_dom();
    React8 = __toESM(require("react"));
    import_react7 = require("react");
    ReactDOM = __toESM(require("react-dom"));
    arrow2 = /* @__PURE__ */ __name((options) => {
      const {
        element,
        padding
      } = options;
      function isRef(value) {
        return Object.prototype.hasOwnProperty.call(value, "current");
      }
      __name(isRef, "isRef");
      return {
        name: "arrow",
        options,
        fn(args) {
          if (isRef(element)) {
            if (element.current != null) {
              return arrow({
                element: element.current,
                padding
              }).fn(args);
            }
            return {};
          } else if (element) {
            return arrow({
              element,
              padding
            }).fn(args);
          }
          return {};
        }
      };
    }, "arrow");
    index = typeof document !== "undefined" ? import_react7.useLayoutEffect : import_react7.useEffect;
    __name(deepEqual, "deepEqual");
    __name(useLatestRef, "useLatestRef");
    __name(useFloating2, "useFloating");
  }
});

// node_modules/@tamagui/floating/dist/cjs/Floating.js
var require_Floating = __commonJS({
  "node_modules/@tamagui/floating/dist/cjs/Floating.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var Floating_exports = {};
    module2.exports = __toCommonJS2(Floating_exports);
    __reExport2(Floating_exports, (init_floating_ui_react_dom_esm(), __toCommonJS(floating_ui_react_dom_esm_exports)), module2.exports);
  }
});

// node_modules/@tamagui/floating/dist/cjs/useFloating.js
var require_useFloating = __commonJS({
  "node_modules/@tamagui/floating/dist/cjs/useFloating.js"(exports, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      // If the importer is in node compatibility mode or this is not an ESM
      // file that has been converted to a CommonJS file using a Babel-
      // compatible transform (i.e. "__esModule" has not been set), then set
      // "default" to the CommonJS "module.exports" for node compatibility.
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var useFloating_exports = {};
    __export2(useFloating_exports, {
      FloatingOverrideContext: () => FloatingOverrideContext2,
      useFloating: () => useFloating4
    });
    module2.exports = __toCommonJS2(useFloating_exports);
    var import_react13 = require("react");
    var Floating = __toESM2(require_Floating());
    var FloatingOverrideContext2 = (0, import_react13.createContext)(null);
    var useFloating4 = /* @__PURE__ */ __name((props) => {
      var _a;
      const context = (0, import_react13.useContext)(FloatingOverrideContext2);
      return (_a = context || Floating.useFloating) == null ? void 0 : _a(props);
    }, "useFloating");
  }
});

// node_modules/@tamagui/floating/dist/cjs/index.js
var require_cjs31 = __commonJS({
  "node_modules/@tamagui/floating/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    __export2(src_exports, {
      FloatingOverrideContext: () => import_useFloating.FloatingOverrideContext,
      useFloating: () => import_useFloating.useFloating
    });
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_Floating(), module2.exports);
    var import_useFloating = require_useFloating();
  }
});

// node_modules/@tamagui/popper/dist/cjs/Popper.js
var require_Popper = __commonJS({
  "node_modules/@tamagui/popper/dist/cjs/Popper.js"(exports, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      // If the importer is in node compatibility mode or this is not an ESM
      // file that has been converted to a CommonJS file using a Babel-
      // compatible transform (i.e. "__esModule" has not been set), then set
      // "default" to the CommonJS "module.exports" for node compatibility.
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var Popper_exports = {};
    __export2(Popper_exports, {
      Popper: () => Popper,
      PopperAnchor: () => PopperAnchor,
      PopperArrow: () => PopperArrow,
      PopperContent: () => PopperContent,
      PopperProvider: () => PopperProvider,
      createPopperScope: () => createPopperScope,
      usePopperContext: () => usePopperContext
    });
    module2.exports = __toCommonJS2(Popper_exports);
    var import_jsx_runtime13 = require("react/jsx-runtime");
    var import_compose_refs3 = require_cjs2();
    var import_core30 = require("@tamagui/core-node");
    var import_create_context5 = require_cjs3();
    var import_floating = require_cjs31();
    var import_get_size2 = require_cjs10();
    var import_stacks9 = require_cjs12();
    var React13 = __toESM2(require("react"));
    var import_react_native6 = require("react-native-web-lite");
    var POPPER_NAME = "Popper";
    var [createPopperContext, createScope] = (0, import_create_context5.createContextScope)(POPPER_NAME);
    var createPopperScope = createScope;
    var [PopperProvider, usePopperContext] = createPopperContext(POPPER_NAME);
    var Popper = /* @__PURE__ */ __name((props) => {
      const {
        __scopePopper,
        children,
        size: size2,
        strategy = "absolute",
        placement = "bottom",
        stayInFrame,
        allowFlip
      } = props;
      const [isMounted, setIsMounted] = React13.useState(false);
      (0, import_core30.useIsomorphicLayoutEffect)(() => {
        setIsMounted(true);
      }, []);
      const anchorRef = React13.useRef();
      const [arrowEl, setArrow] = React13.useState(null);
      const [arrowSize, setArrowSize] = React13.useState(0);
      const arrowRef = React13.useRef();
      const floating = (0, import_floating.useFloating)({
        strategy,
        placement,
        sameScrollView: false,
        // this only takes effect on native
        middleware: [
          stayInFrame ? (0, import_floating.shift)(typeof stayInFrame === "boolean" ? {} : stayInFrame) : null,
          allowFlip ? (0, import_floating.flip)(typeof allowFlip === "boolean" ? {} : allowFlip) : null,
          arrowEl ? (0, import_floating.arrow)({ element: arrowEl }) : null,
          arrowSize ? (0, import_floating.offset)(arrowSize) : null
        ].filter(Boolean)
      });
      const { refs, middlewareData } = floating;
      const composedArrowRefs = (0, import_compose_refs3.useComposedRefs)(arrowRef, setArrow);
      (0, import_core30.useIsomorphicLayoutEffect)(() => {
        floating.reference(anchorRef.current);
      }, [anchorRef]);
      if (import_core30.isWeb) {
        React13.useEffect(() => {
          if (!(refs.reference.current && refs.floating.current)) {
            return;
          }
          return (0, import_floating.autoUpdate)(refs.reference.current, refs.floating.current, floating.update);
        }, [floating.update, refs.floating, refs.reference]);
      } else {
        const dimensions = (0, import_react_native6.useWindowDimensions)();
        const [keyboardOpen, setKeyboardOpen] = React13.useState(false);
        React13.useEffect(() => {
          const showSubscription = import_react_native6.Keyboard.addListener("keyboardDidShow", () => {
            setKeyboardOpen(true);
          });
          const hideSubscription = import_react_native6.Keyboard.addListener("keyboardDidHide", () => {
            setKeyboardOpen(false);
          });
          return () => {
            showSubscription.remove();
            hideSubscription.remove();
          };
        }, []);
        (0, import_core30.useIsomorphicLayoutEffect)(() => {
          floating.update();
        }, [dimensions, keyboardOpen]);
      }
      return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
        PopperProvider,
        {
          scope: __scopePopper,
          anchorRef,
          size: size2,
          arrowRef: composedArrowRefs,
          arrowStyle: middlewareData.arrow,
          onArrowSize: setArrowSize,
          isMounted,
          ...floating,
          children
        }
      );
    }, "Popper");
    Popper.displayName = POPPER_NAME;
    var ANCHOR_NAME = "PopperAnchor";
    var PopperAnchor = React13.forwardRef(
      (props, forwardedRef) => {
        const { __scopePopper, virtualRef, ...anchorProps } = props;
        const { anchorRef, getReferenceProps } = usePopperContext(ANCHOR_NAME, __scopePopper);
        const ref = React13.useRef(null);
        const composedRefs = (0, import_compose_refs3.useComposedRefs)(forwardedRef, ref, anchorRef);
        if (virtualRef) {
          return null;
        }
        const stackProps = {
          ref: composedRefs,
          ...anchorProps
        };
        return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_stacks9.YStack, { ...getReferenceProps ? getReferenceProps(stackProps) : stackProps });
      }
    );
    PopperAnchor.displayName = ANCHOR_NAME;
    var CONTENT_NAME2 = "PopperContent";
    var PopperContentFrame = (0, import_core30.styled)(import_stacks9.ThemeableStack, {
      name: "PopperContent",
      backgroundColor: "$background",
      alignItems: "center",
      radiused: true,
      variants: {
        size: {
          "...size": (val, { tokens }) => {
            return {
              padding: tokens.space[val],
              borderRadius: tokens.radius[val]
            };
          }
        }
      },
      defaultVariants: {
        size: "$true"
      }
    });
    var PopperContent = PopperContentFrame.extractable(
      React13.forwardRef(
        (props, forwardedRef) => {
          const { __scopePopper, ...contentProps } = props;
          const { strategy, placement, floating, x, y, getFloatingProps, size: size2, isMounted } = usePopperContext(CONTENT_NAME2, __scopePopper);
          const contentRefs = (0, import_compose_refs3.useComposedRefs)(floating, forwardedRef);
          const contents = React13.useMemo(() => {
            return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
              PopperContentFrame,
              {
                "data-placement": placement,
                "data-strategy": strategy,
                size: contentProps.size || size2,
                ...contentProps
              },
              "popper-content-frame"
            );
          }, [placement, strategy, props]);
          if (!isMounted) {
            return null;
          }
          const frameProps = {
            ref: contentRefs,
            x: x || 0,
            y: y || 0,
            position: strategy
          };
          return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
            import_stacks9.YStack,
            {
              animateOnly: ["transform"],
              ...getFloatingProps ? getFloatingProps(frameProps) : frameProps,
              children: contents
            }
          );
        }
      )
    );
    PopperContent.displayName = CONTENT_NAME2;
    var ARROW_NAME = "PopperArrow";
    var PopperArrowFrame = (0, import_core30.styled)(import_stacks9.YStack, {
      name: "PopperArrow",
      borderColor: "$borderColor",
      backgroundColor: "$background",
      position: "relative"
    });
    var PopperArrowOuterFrame = (0, import_core30.styled)(import_stacks9.YStack, {
      name: "PopperArrowOuter",
      position: "absolute",
      zIndex: -1,
      pointerEvents: "none",
      overflow: "hidden",
      alignItems: "center",
      justifyContent: "center"
    });
    var opposites = {
      top: "bottom",
      right: "left",
      bottom: "top",
      left: "right"
    };
    var PopperArrow = PopperArrowFrame.extractable(
      React13.forwardRef(/* @__PURE__ */ __name(function PopperArrow2(props, forwardedRef) {
        var _a, _b;
        const {
          __scopePopper,
          offset: offset2,
          size: sizeProp,
          borderWidth = 0,
          ...arrowProps
        } = props;
        const context = usePopperContext(ARROW_NAME, __scopePopper);
        const sizeVal = sizeProp ?? context.size;
        const sizeValResolved = (0, import_core30.getVariableValue)((0, import_get_size2.stepTokenUpOrDown)("space", sizeVal, -2, [2]));
        const size2 = +sizeValResolved;
        const { placement } = context;
        const refs = (0, import_compose_refs3.useComposedRefs)(context.arrowRef, forwardedRef);
        const x = ((_a = context.arrowStyle) == null ? void 0 : _a.x) || 0;
        const y = ((_b = context.arrowStyle) == null ? void 0 : _b.y) || 0;
        const primaryPlacement = placement ? placement.split("-")[0] : "top";
        const arrowStyle = { x, y, width: size2, height: size2 };
        const innerArrowStyle = {};
        const isVertical = primaryPlacement === "bottom" || primaryPlacement === "top";
        if (primaryPlacement) {
          arrowStyle[isVertical ? "width" : "height"] = size2 * 2;
          const oppSide = opposites[primaryPlacement];
          if (oppSide) {
            arrowStyle[oppSide] = -size2;
            innerArrowStyle[oppSide] = size2 / 2;
          }
          if (oppSide === "top" || oppSide === "bottom") {
            arrowStyle.left = 0;
          }
          if (oppSide === "left" || oppSide === "right") {
            arrowStyle.top = 0;
          }
        }
        (0, import_core30.useIsomorphicLayoutEffect)(() => {
          var _a2;
          (_a2 = context.onArrowSize) == null ? void 0 : _a2.call(context, size2);
        }, [size2, context.onArrowSize]);
        return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(PopperArrowOuterFrame, { ref: refs, ...arrowStyle, children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
          PopperArrowFrame,
          {
            width: size2,
            height: size2,
            ...arrowProps,
            ...innerArrowStyle,
            rotate: "45deg",
            ...primaryPlacement === "bottom" && {
              borderBottomWidth: borderWidth,
              borderRightWidth: borderWidth
            },
            ...primaryPlacement === "top" && {
              borderTopWidth: borderWidth,
              borderLeftWidth: borderWidth
            },
            ...primaryPlacement === "right" && {
              borderTopWidth: borderWidth,
              borderRightWidth: borderWidth
            },
            ...primaryPlacement === "left" && {
              borderBottomWidth: borderWidth,
              borderLeftWidth: borderWidth
            }
          }
        ) });
      }, "PopperArrow2"))
    );
    PopperArrow.displayName = ARROW_NAME;
  }
});

// node_modules/@tamagui/popper/dist/cjs/index.js
var require_cjs32 = __commonJS({
  "node_modules/@tamagui/popper/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_Popper(), module2.exports);
  }
});

// node_modules/tabbable/dist/index.js
var require_dist3 = __commonJS({
  "node_modules/tabbable/dist/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var candidateSelectors = ["input:not([inert])", "select:not([inert])", "textarea:not([inert])", "a[href]:not([inert])", "button:not([inert])", "[tabindex]:not(slot):not([inert])", "audio[controls]:not([inert])", "video[controls]:not([inert])", '[contenteditable]:not([contenteditable="false"]):not([inert])', "details>summary:first-of-type:not([inert])", "details:not([inert])"];
    var candidateSelector = /* @__PURE__ */ candidateSelectors.join(",");
    var NoElement = typeof Element === "undefined";
    var matches = NoElement ? function() {
    } : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
    var getRootNode = !NoElement && Element.prototype.getRootNode ? function(element) {
      var _element$getRootNode;
      return element === null || element === void 0 ? void 0 : (_element$getRootNode = element.getRootNode) === null || _element$getRootNode === void 0 ? void 0 : _element$getRootNode.call(element);
    } : function(element) {
      return element === null || element === void 0 ? void 0 : element.ownerDocument;
    };
    var isInert = /* @__PURE__ */ __name(function isInert2(node, lookUp) {
      var _node$getAttribute;
      if (lookUp === void 0) {
        lookUp = true;
      }
      var inertAtt = node === null || node === void 0 ? void 0 : (_node$getAttribute = node.getAttribute) === null || _node$getAttribute === void 0 ? void 0 : _node$getAttribute.call(node, "inert");
      var inert = inertAtt === "" || inertAtt === "true";
      var result = inert || lookUp && node && isInert2(node.parentNode);
      return result;
    }, "isInert");
    var isContentEditable = /* @__PURE__ */ __name(function isContentEditable2(node) {
      var _node$getAttribute2;
      var attValue = node === null || node === void 0 ? void 0 : (_node$getAttribute2 = node.getAttribute) === null || _node$getAttribute2 === void 0 ? void 0 : _node$getAttribute2.call(node, "contenteditable");
      return attValue === "" || attValue === "true";
    }, "isContentEditable");
    var getCandidates = /* @__PURE__ */ __name(function getCandidates2(el, includeContainer, filter) {
      if (isInert(el)) {
        return [];
      }
      var candidates = Array.prototype.slice.apply(el.querySelectorAll(candidateSelector));
      if (includeContainer && matches.call(el, candidateSelector)) {
        candidates.unshift(el);
      }
      candidates = candidates.filter(filter);
      return candidates;
    }, "getCandidates");
    var getCandidatesIteratively = /* @__PURE__ */ __name(function getCandidatesIteratively2(elements, includeContainer, options) {
      var candidates = [];
      var elementsToCheck = Array.from(elements);
      while (elementsToCheck.length) {
        var element = elementsToCheck.shift();
        if (isInert(element, false)) {
          continue;
        }
        if (element.tagName === "SLOT") {
          var assigned = element.assignedElements();
          var content = assigned.length ? assigned : element.children;
          var nestedCandidates = getCandidatesIteratively2(content, true, options);
          if (options.flatten) {
            candidates.push.apply(candidates, nestedCandidates);
          } else {
            candidates.push({
              scopeParent: element,
              candidates: nestedCandidates
            });
          }
        } else {
          var validCandidate = matches.call(element, candidateSelector);
          if (validCandidate && options.filter(element) && (includeContainer || !elements.includes(element))) {
            candidates.push(element);
          }
          var shadowRoot = element.shadowRoot || // check for an undisclosed shadow
          typeof options.getShadowRoot === "function" && options.getShadowRoot(element);
          var validShadowRoot = !isInert(shadowRoot, false) && (!options.shadowRootFilter || options.shadowRootFilter(element));
          if (shadowRoot && validShadowRoot) {
            var _nestedCandidates = getCandidatesIteratively2(shadowRoot === true ? element.children : shadowRoot.children, true, options);
            if (options.flatten) {
              candidates.push.apply(candidates, _nestedCandidates);
            } else {
              candidates.push({
                scopeParent: element,
                candidates: _nestedCandidates
              });
            }
          } else {
            elementsToCheck.unshift.apply(elementsToCheck, element.children);
          }
        }
      }
      return candidates;
    }, "getCandidatesIteratively");
    var getTabindex = /* @__PURE__ */ __name(function getTabindex2(node, isScope) {
      if (node.tabIndex < 0) {
        if ((isScope || /^(AUDIO|VIDEO|DETAILS)$/.test(node.tagName) || isContentEditable(node)) && isNaN(parseInt(node.getAttribute("tabindex"), 10))) {
          return 0;
        }
      }
      return node.tabIndex;
    }, "getTabindex");
    var sortOrderedTabbables = /* @__PURE__ */ __name(function sortOrderedTabbables2(a, b) {
      return a.tabIndex === b.tabIndex ? a.documentOrder - b.documentOrder : a.tabIndex - b.tabIndex;
    }, "sortOrderedTabbables");
    var isInput = /* @__PURE__ */ __name(function isInput2(node) {
      return node.tagName === "INPUT";
    }, "isInput");
    var isHiddenInput = /* @__PURE__ */ __name(function isHiddenInput2(node) {
      return isInput(node) && node.type === "hidden";
    }, "isHiddenInput");
    var isDetailsWithSummary = /* @__PURE__ */ __name(function isDetailsWithSummary2(node) {
      var r = node.tagName === "DETAILS" && Array.prototype.slice.apply(node.children).some(function(child) {
        return child.tagName === "SUMMARY";
      });
      return r;
    }, "isDetailsWithSummary");
    var getCheckedRadio = /* @__PURE__ */ __name(function getCheckedRadio2(nodes, form) {
      for (var i = 0; i < nodes.length; i++) {
        if (nodes[i].checked && nodes[i].form === form) {
          return nodes[i];
        }
      }
    }, "getCheckedRadio");
    var isTabbableRadio = /* @__PURE__ */ __name(function isTabbableRadio2(node) {
      if (!node.name) {
        return true;
      }
      var radioScope = node.form || getRootNode(node);
      var queryRadios = /* @__PURE__ */ __name(function queryRadios2(name) {
        return radioScope.querySelectorAll('input[type="radio"][name="' + name + '"]');
      }, "queryRadios");
      var radioSet;
      if (typeof window !== "undefined" && typeof window.CSS !== "undefined" && typeof window.CSS.escape === "function") {
        radioSet = queryRadios(window.CSS.escape(node.name));
      } else {
        try {
          radioSet = queryRadios(node.name);
        } catch (err) {
          console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", err.message);
          return false;
        }
      }
      var checked = getCheckedRadio(radioSet, node.form);
      return !checked || checked === node;
    }, "isTabbableRadio");
    var isRadio = /* @__PURE__ */ __name(function isRadio2(node) {
      return isInput(node) && node.type === "radio";
    }, "isRadio");
    var isNonTabbableRadio = /* @__PURE__ */ __name(function isNonTabbableRadio2(node) {
      return isRadio(node) && !isTabbableRadio(node);
    }, "isNonTabbableRadio");
    var isNodeAttached = /* @__PURE__ */ __name(function isNodeAttached2(node) {
      var _nodeRoot;
      var nodeRoot = node && getRootNode(node);
      var nodeRootHost = (_nodeRoot = nodeRoot) === null || _nodeRoot === void 0 ? void 0 : _nodeRoot.host;
      var attached = false;
      if (nodeRoot && nodeRoot !== node) {
        var _nodeRootHost, _nodeRootHost$ownerDo, _node$ownerDocument;
        attached = !!((_nodeRootHost = nodeRootHost) !== null && _nodeRootHost !== void 0 && (_nodeRootHost$ownerDo = _nodeRootHost.ownerDocument) !== null && _nodeRootHost$ownerDo !== void 0 && _nodeRootHost$ownerDo.contains(nodeRootHost) || node !== null && node !== void 0 && (_node$ownerDocument = node.ownerDocument) !== null && _node$ownerDocument !== void 0 && _node$ownerDocument.contains(node));
        while (!attached && nodeRootHost) {
          var _nodeRoot2, _nodeRootHost2, _nodeRootHost2$ownerD;
          nodeRoot = getRootNode(nodeRootHost);
          nodeRootHost = (_nodeRoot2 = nodeRoot) === null || _nodeRoot2 === void 0 ? void 0 : _nodeRoot2.host;
          attached = !!((_nodeRootHost2 = nodeRootHost) !== null && _nodeRootHost2 !== void 0 && (_nodeRootHost2$ownerD = _nodeRootHost2.ownerDocument) !== null && _nodeRootHost2$ownerD !== void 0 && _nodeRootHost2$ownerD.contains(nodeRootHost));
        }
      }
      return attached;
    }, "isNodeAttached");
    var isZeroArea = /* @__PURE__ */ __name(function isZeroArea2(node) {
      var _node$getBoundingClie = node.getBoundingClientRect(), width = _node$getBoundingClie.width, height = _node$getBoundingClie.height;
      return width === 0 && height === 0;
    }, "isZeroArea");
    var isHidden = /* @__PURE__ */ __name(function isHidden2(node, _ref) {
      var displayCheck = _ref.displayCheck, getShadowRoot = _ref.getShadowRoot;
      if (getComputedStyle(node).visibility === "hidden") {
        return true;
      }
      var isDirectSummary = matches.call(node, "details>summary:first-of-type");
      var nodeUnderDetails = isDirectSummary ? node.parentElement : node;
      if (matches.call(nodeUnderDetails, "details:not([open]) *")) {
        return true;
      }
      if (!displayCheck || displayCheck === "full" || displayCheck === "legacy-full") {
        if (typeof getShadowRoot === "function") {
          var originalNode = node;
          while (node) {
            var parentElement = node.parentElement;
            var rootNode = getRootNode(node);
            if (parentElement && !parentElement.shadowRoot && getShadowRoot(parentElement) === true) {
              return isZeroArea(node);
            } else if (node.assignedSlot) {
              node = node.assignedSlot;
            } else if (!parentElement && rootNode !== node.ownerDocument) {
              node = rootNode.host;
            } else {
              node = parentElement;
            }
          }
          node = originalNode;
        }
        if (isNodeAttached(node)) {
          return !node.getClientRects().length;
        }
        if (displayCheck !== "legacy-full") {
          return true;
        }
      } else if (displayCheck === "non-zero-area") {
        return isZeroArea(node);
      }
      return false;
    }, "isHidden");
    var isDisabledFromFieldset = /* @__PURE__ */ __name(function isDisabledFromFieldset2(node) {
      if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(node.tagName)) {
        var parentNode = node.parentElement;
        while (parentNode) {
          if (parentNode.tagName === "FIELDSET" && parentNode.disabled) {
            for (var i = 0; i < parentNode.children.length; i++) {
              var child = parentNode.children.item(i);
              if (child.tagName === "LEGEND") {
                return matches.call(parentNode, "fieldset[disabled] *") ? true : !child.contains(node);
              }
            }
            return true;
          }
          parentNode = parentNode.parentElement;
        }
      }
      return false;
    }, "isDisabledFromFieldset");
    var isNodeMatchingSelectorFocusable = /* @__PURE__ */ __name(function isNodeMatchingSelectorFocusable2(options, node) {
      if (node.disabled || // we must do an inert look up to filter out any elements inside an inert ancestor
      //  because we're limited in the type of selectors we can use in JSDom (see related
      //  note related to `candidateSelectors`)
      isInert(node) || isHiddenInput(node) || isHidden(node, options) || // For a details element with a summary, the summary element gets the focus
      isDetailsWithSummary(node) || isDisabledFromFieldset(node)) {
        return false;
      }
      return true;
    }, "isNodeMatchingSelectorFocusable");
    var isNodeMatchingSelectorTabbable = /* @__PURE__ */ __name(function isNodeMatchingSelectorTabbable2(options, node) {
      if (isNonTabbableRadio(node) || getTabindex(node) < 0 || !isNodeMatchingSelectorFocusable(options, node)) {
        return false;
      }
      return true;
    }, "isNodeMatchingSelectorTabbable");
    var isValidShadowRootTabbable = /* @__PURE__ */ __name(function isValidShadowRootTabbable2(shadowHostNode) {
      var tabIndex = parseInt(shadowHostNode.getAttribute("tabindex"), 10);
      if (isNaN(tabIndex) || tabIndex >= 0) {
        return true;
      }
      return false;
    }, "isValidShadowRootTabbable");
    var sortByOrder = /* @__PURE__ */ __name(function sortByOrder2(candidates) {
      var regularTabbables = [];
      var orderedTabbables = [];
      candidates.forEach(function(item, i) {
        var isScope = !!item.scopeParent;
        var element = isScope ? item.scopeParent : item;
        var candidateTabindex = getTabindex(element, isScope);
        var elements = isScope ? sortByOrder2(item.candidates) : element;
        if (candidateTabindex === 0) {
          isScope ? regularTabbables.push.apply(regularTabbables, elements) : regularTabbables.push(element);
        } else {
          orderedTabbables.push({
            documentOrder: i,
            tabIndex: candidateTabindex,
            item,
            isScope,
            content: elements
          });
        }
      });
      return orderedTabbables.sort(sortOrderedTabbables).reduce(function(acc, sortable) {
        sortable.isScope ? acc.push.apply(acc, sortable.content) : acc.push(sortable.content);
        return acc;
      }, []).concat(regularTabbables);
    }, "sortByOrder");
    var tabbable2 = /* @__PURE__ */ __name(function tabbable3(el, options) {
      options = options || {};
      var candidates;
      if (options.getShadowRoot) {
        candidates = getCandidatesIteratively([el], options.includeContainer, {
          filter: isNodeMatchingSelectorTabbable.bind(null, options),
          flatten: false,
          getShadowRoot: options.getShadowRoot,
          shadowRootFilter: isValidShadowRootTabbable
        });
      } else {
        candidates = getCandidates(el, options.includeContainer, isNodeMatchingSelectorTabbable.bind(null, options));
      }
      return sortByOrder(candidates);
    }, "tabbable");
    var focusable = /* @__PURE__ */ __name(function focusable2(el, options) {
      options = options || {};
      var candidates;
      if (options.getShadowRoot) {
        candidates = getCandidatesIteratively([el], options.includeContainer, {
          filter: isNodeMatchingSelectorFocusable.bind(null, options),
          flatten: true,
          getShadowRoot: options.getShadowRoot
        });
      } else {
        candidates = getCandidates(el, options.includeContainer, isNodeMatchingSelectorFocusable.bind(null, options));
      }
      return candidates;
    }, "focusable");
    var isTabbable = /* @__PURE__ */ __name(function isTabbable2(node, options) {
      options = options || {};
      if (!node) {
        throw new Error("No node provided");
      }
      if (matches.call(node, candidateSelector) === false) {
        return false;
      }
      return isNodeMatchingSelectorTabbable(options, node);
    }, "isTabbable");
    var focusableCandidateSelector = /* @__PURE__ */ candidateSelectors.concat("iframe").join(",");
    var isFocusable = /* @__PURE__ */ __name(function isFocusable2(node, options) {
      options = options || {};
      if (!node) {
        throw new Error("No node provided");
      }
      if (matches.call(node, focusableCandidateSelector) === false) {
        return false;
      }
      return isNodeMatchingSelectorFocusable(options, node);
    }, "isFocusable");
    exports.focusable = focusable;
    exports.isFocusable = isFocusable;
    exports.isTabbable = isTabbable;
    exports.tabbable = tabbable2;
  }
});

// node_modules/@floating-ui/react/dist/floating-ui.react.esm.js
var floating_ui_react_esm_exports = {};
__export(floating_ui_react_esm_exports, {
  FloatingDelayGroup: () => FloatingDelayGroup,
  FloatingFocusManager: () => FloatingFocusManager,
  FloatingNode: () => FloatingNode,
  FloatingOverlay: () => FloatingOverlay,
  FloatingPortal: () => FloatingPortal,
  FloatingTree: () => FloatingTree,
  arrow: () => arrow2,
  autoPlacement: () => autoPlacement,
  autoUpdate: () => autoUpdate,
  computePosition: () => computePosition2,
  detectOverflow: () => detectOverflow,
  flip: () => flip,
  getOverflowAncestors: () => getOverflowAncestors,
  hide: () => hide,
  inline: () => inline,
  inner: () => inner,
  limitShift: () => limitShift,
  offset: () => offset,
  platform: () => platform,
  safePolygon: () => safePolygon,
  shift: () => shift,
  size: () => size,
  useClick: () => useClick,
  useDelayGroup: () => useDelayGroup,
  useDelayGroupContext: () => useDelayGroupContext,
  useDismiss: () => useDismiss,
  useFloating: () => useFloating3,
  useFloatingNodeId: () => useFloatingNodeId,
  useFloatingParentNodeId: () => useFloatingParentNodeId,
  useFloatingPortalNode: () => useFloatingPortalNode,
  useFloatingTree: () => useFloatingTree,
  useFocus: () => useFocus,
  useHover: () => useHover,
  useId: () => useId3,
  useInnerOffset: () => useInnerOffset,
  useInteractions: () => useInteractions,
  useListNavigation: () => useListNavigation,
  useMergeRefs: () => useMergeRefs,
  useRole: () => useRole,
  useTransitionStatus: () => useTransitionStatus,
  useTransitionStyles: () => useTransitionStyles,
  useTypeahead: () => useTypeahead
});
function useFloatingId() {
  const [id, setId] = React9.useState(() => serverHandoffComplete ? genId() : void 0);
  index2(() => {
    if (id == null) {
      setId(genId());
    }
  }, []);
  React9.useEffect(() => {
    if (!serverHandoffComplete) {
      serverHandoffComplete = true;
    }
  }, []);
  return id;
}
function createPubSub() {
  const map = /* @__PURE__ */ new Map();
  return {
    emit(event, data) {
      var _map$get;
      (_map$get = map.get(event)) == null ? void 0 : _map$get.forEach((handler) => handler(data));
    },
    on(event, listener) {
      map.set(event, [...map.get(event) || [], listener]);
    },
    off(event, listener) {
      map.set(event, (map.get(event) || []).filter((l) => l !== listener));
    }
  };
}
function getDocument(node) {
  return (node == null ? void 0 : node.ownerDocument) || document;
}
function getPlatform() {
  const uaData = navigator.userAgentData;
  if (uaData != null && uaData.platform) {
    return uaData.platform;
  }
  return navigator.platform;
}
function getUserAgent() {
  const uaData = navigator.userAgentData;
  if (uaData && Array.isArray(uaData.brands)) {
    return uaData.brands.map((_ref) => {
      let {
        brand,
        version
      } = _ref;
      return brand + "/" + version;
    }).join(" ");
  }
  return navigator.userAgent;
}
function getWindow2(value) {
  return getDocument(value).defaultView || window;
}
function isElement2(value) {
  return value ? value instanceof getWindow2(value).Element : false;
}
function isHTMLElement2(value) {
  return value ? value instanceof getWindow2(value).HTMLElement : false;
}
function isShadowRoot2(node) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  const OwnElement = getWindow2(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}
function isVirtualClick(event) {
  if (event.mozInputSource === 0 && event.isTrusted) {
    return true;
  }
  const androidRe = /Android/i;
  if ((androidRe.test(getPlatform()) || androidRe.test(getUserAgent())) && event.pointerType) {
    return event.type === "click" && event.buttons === 1;
  }
  return event.detail === 0 && !event.pointerType;
}
function isVirtualPointerEvent(event) {
  return event.width === 0 && event.height === 0 || event.width === 1 && event.height === 1 && event.pressure === 0 && event.detail === 0 && event.pointerType !== "mouse" || // iOS VoiceOver returns 0.333• for width/height.
  event.width < 1 && event.height < 1 && event.pressure === 0 && event.detail === 0;
}
function isSafari() {
  return /apple/i.test(navigator.vendor);
}
function isMac() {
  return getPlatform().toLowerCase().startsWith("mac") && !navigator.maxTouchPoints;
}
function isMouseLikePointerType(pointerType, strict) {
  const values = ["mouse", "pen"];
  if (!strict) {
    values.push("", void 0);
  }
  return values.includes(pointerType);
}
function useLatestRef2(value) {
  const ref = (0, import_react8.useRef)(value);
  index2(() => {
    ref.current = value;
  });
  return ref;
}
function getDelay(value, prop, pointerType) {
  if (pointerType && !isMouseLikePointerType(pointerType)) {
    return 0;
  }
  if (typeof value === "number") {
    return value;
  }
  return value == null ? void 0 : value[prop];
}
function _extends() {
  _extends = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function activeElement$1(doc) {
  let activeElement2 = doc.activeElement;
  while (((_activeElement = activeElement2) == null ? void 0 : (_activeElement$shadow = _activeElement.shadowRoot) == null ? void 0 : _activeElement$shadow.activeElement) != null) {
    var _activeElement, _activeElement$shadow;
    activeElement2 = activeElement2.shadowRoot.activeElement;
  }
  return activeElement2;
}
function contains(parent, child) {
  if (!parent || !child) {
    return false;
  }
  const rootNode = child.getRootNode && child.getRootNode();
  if (parent.contains(child)) {
    return true;
  } else if (rootNode && isShadowRoot2(rootNode)) {
    let next = child;
    do {
      if (next && parent === next) {
        return true;
      }
      next = next.parentNode || next.host;
    } while (next);
  }
  return false;
}
function enqueueFocus(el, options) {
  if (options === void 0) {
    options = {};
  }
  const {
    preventScroll = false,
    cancelPrevious = true,
    sync = false
  } = options;
  cancelPrevious && cancelAnimationFrame(rafId);
  const exec = /* @__PURE__ */ __name(() => el == null ? void 0 : el.focus({
    preventScroll
  }), "exec");
  if (sync) {
    exec();
  } else {
    rafId = requestAnimationFrame(exec);
  }
}
function getAncestors(nodes, id) {
  var _nodes$find;
  let allAncestors = [];
  let currentParentId = (_nodes$find = nodes.find((node) => node.id === id)) == null ? void 0 : _nodes$find.parentId;
  while (currentParentId) {
    const currentNode = nodes.find((node) => node.id === currentParentId);
    currentParentId = currentNode == null ? void 0 : currentNode.parentId;
    if (currentNode) {
      allAncestors = allAncestors.concat(currentNode);
    }
  }
  return allAncestors;
}
function getChildren(nodes, id) {
  let allChildren = nodes.filter((node) => {
    var _node$context;
    return node.parentId === id && ((_node$context = node.context) == null ? void 0 : _node$context.open);
  }) || [];
  let currentChildren = allChildren;
  while (currentChildren.length) {
    currentChildren = nodes.filter((node) => {
      var _currentChildren;
      return (_currentChildren = currentChildren) == null ? void 0 : _currentChildren.some((n) => {
        var _node$context2;
        return node.parentId === n.id && ((_node$context2 = node.context) == null ? void 0 : _node$context2.open);
      });
    }) || [];
    allChildren = allChildren.concat(currentChildren);
  }
  return allChildren;
}
function getTarget(event) {
  if ("composedPath" in event) {
    return event.composedPath()[0];
  }
  return event.target;
}
function isTypeableElement(element) {
  return isHTMLElement2(element) && element.matches(TYPEABLE_SELECTOR);
}
function stopEvent(event) {
  event.preventDefault();
  event.stopPropagation();
}
function getTabbableIn(container, direction) {
  const allTabbable = (0, import_tabbable.tabbable)(container, getTabbableOptions());
  if (direction === "prev") {
    allTabbable.reverse();
  }
  const activeIndex = allTabbable.indexOf(activeElement$1(getDocument(container)));
  const nextTabbableElements = allTabbable.slice(activeIndex + 1);
  return nextTabbableElements[0];
}
function getNextTabbable() {
  return getTabbableIn(document.body, "next");
}
function getPreviousTabbable() {
  return getTabbableIn(document.body, "prev");
}
function isOutsideEvent(event, container) {
  const containerElement = container || event.currentTarget;
  const relatedTarget = event.relatedTarget;
  return !relatedTarget || !contains(containerElement, relatedTarget);
}
function disableFocusInside(container) {
  const tabbableElements = (0, import_tabbable.tabbable)(container, getTabbableOptions());
  tabbableElements.forEach((element) => {
    element.dataset.tabindex = element.getAttribute("tabindex") || "";
    element.setAttribute("tabindex", "-1");
  });
}
function enableFocusInside(container) {
  const elements = container.querySelectorAll("[data-tabindex]");
  elements.forEach((element) => {
    const tabindex = element.dataset.tabindex;
    delete element.dataset.tabindex;
    if (tabindex) {
      element.setAttribute("tabindex", tabindex);
    } else {
      element.removeAttribute("tabindex");
    }
  });
}
function useEvent2(callback) {
  const ref = React9.useRef(() => {
    if (process.env.NODE_ENV !== "production") {
      throw new Error("Cannot call an event handler while rendering.");
    }
  });
  useSafeInsertionEffect(() => {
    ref.current = callback;
  });
  return React9.useCallback(function() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return ref.current == null ? void 0 : ref.current(...args);
  }, []);
}
function setActiveElementOnTab(event) {
  if (event.key === "Tab") {
    activeElement = event.target;
    clearTimeout(timeoutId);
  }
}
function isTabFocus(event) {
  const result = activeElement === event.relatedTarget;
  activeElement = event.relatedTarget;
  clearTimeout(timeoutId);
  return result;
}
function FloatingFocusManager(_ref) {
  let {
    context,
    children,
    order = ["content"],
    guards = true,
    initialFocus = 0,
    returnFocus = true,
    modal = true,
    visuallyHiddenDismiss = false,
    closeOnFocusOut = true
  } = _ref;
  const {
    refs,
    nodeId,
    onOpenChange,
    events,
    dataRef,
    elements: {
      domReference,
      floating
    }
  } = context;
  const orderRef = useLatestRef2(order);
  const tree = useFloatingTree();
  const portalContext = usePortalContext2();
  const [tabbableContentLength, setTabbableContentLength] = React9.useState(null);
  const ignoreInitialFocus = typeof initialFocus === "number" && initialFocus < 0;
  const startDismissButtonRef = React9.useRef(null);
  const endDismissButtonRef = React9.useRef(null);
  const preventReturnFocusRef = React9.useRef(false);
  const previouslyFocusedElementRef = React9.useRef(null);
  const isPointerDownRef = React9.useRef(false);
  const isInsidePortal = portalContext != null;
  const isTypeableCombobox = domReference && domReference.getAttribute("role") === "combobox" && isTypeableElement(domReference);
  const getTabbableContent = React9.useCallback(function(container) {
    if (container === void 0) {
      container = floating;
    }
    return container ? (0, import_tabbable.tabbable)(container, getTabbableOptions()) : [];
  }, [floating]);
  const getTabbableElements = React9.useCallback((container) => {
    const content = getTabbableContent(container);
    return orderRef.current.map((type) => {
      if (domReference && type === "reference") {
        return domReference;
      }
      if (floating && type === "floating") {
        return floating;
      }
      return content;
    }).filter(Boolean).flat();
  }, [domReference, floating, orderRef, getTabbableContent]);
  React9.useEffect(() => {
    if (!modal) {
      return;
    }
    function onKeyDown(event) {
      if (event.key === "Tab") {
        if (getTabbableContent().length === 0 && !isTypeableCombobox) {
          stopEvent(event);
        }
        const els = getTabbableElements();
        const target = getTarget(event);
        if (orderRef.current[0] === "reference" && target === domReference) {
          stopEvent(event);
          if (event.shiftKey) {
            enqueueFocus(els[els.length - 1]);
          } else {
            enqueueFocus(els[1]);
          }
        }
        if (orderRef.current[1] === "floating" && target === floating && event.shiftKey) {
          stopEvent(event);
          enqueueFocus(els[0]);
        }
      }
    }
    __name(onKeyDown, "onKeyDown");
    const doc = getDocument(floating);
    doc.addEventListener("keydown", onKeyDown);
    return () => {
      doc.removeEventListener("keydown", onKeyDown);
    };
  }, [domReference, floating, modal, orderRef, refs, isTypeableCombobox, getTabbableContent, getTabbableElements]);
  React9.useEffect(() => {
    if (!closeOnFocusOut) {
      return;
    }
    function handlePointerDown() {
      isPointerDownRef.current = true;
      setTimeout(() => {
        isPointerDownRef.current = false;
      });
    }
    __name(handlePointerDown, "handlePointerDown");
    function handleFocusOutside(event) {
      const relatedTarget = event.relatedTarget;
      const movedToUnrelatedNode = !(contains(domReference, relatedTarget) || contains(floating, relatedTarget) || contains(relatedTarget, floating) || contains(portalContext == null ? void 0 : portalContext.portalNode, relatedTarget) || relatedTarget != null && relatedTarget.hasAttribute("data-floating-ui-focus-guard") || tree && (getChildren(tree.nodesRef.current, nodeId).find((node) => {
        var _node$context, _node$context2;
        return contains((_node$context = node.context) == null ? void 0 : _node$context.elements.floating, relatedTarget) || contains((_node$context2 = node.context) == null ? void 0 : _node$context2.elements.domReference, relatedTarget);
      }) || getAncestors(tree.nodesRef.current, nodeId).find((node) => {
        var _node$context3, _node$context4;
        return ((_node$context3 = node.context) == null ? void 0 : _node$context3.elements.floating) === relatedTarget || ((_node$context4 = node.context) == null ? void 0 : _node$context4.elements.domReference) === relatedTarget;
      })));
      if (relatedTarget && movedToUnrelatedNode && !isPointerDownRef.current && // Fix React 18 Strict Mode returnFocus due to double rendering.
      relatedTarget !== previouslyFocusedElementRef.current) {
        preventReturnFocusRef.current = true;
        setTimeout(() => onOpenChange(false));
      }
    }
    __name(handleFocusOutside, "handleFocusOutside");
    if (floating && isHTMLElement2(domReference)) {
      domReference.addEventListener("focusout", handleFocusOutside);
      domReference.addEventListener("pointerdown", handlePointerDown);
      !modal && floating.addEventListener("focusout", handleFocusOutside);
      return () => {
        domReference.removeEventListener("focusout", handleFocusOutside);
        domReference.removeEventListener("pointerdown", handlePointerDown);
        !modal && floating.removeEventListener("focusout", handleFocusOutside);
      };
    }
  }, [domReference, floating, modal, nodeId, tree, portalContext, onOpenChange, closeOnFocusOut]);
  React9.useEffect(() => {
    var _portalContext$portal;
    const portalNodes = Array.from((portalContext == null ? void 0 : (_portalContext$portal = portalContext.portalNode) == null ? void 0 : _portalContext$portal.querySelectorAll("[data-floating-ui-portal]")) || []);
    function getDismissButtons() {
      return [startDismissButtonRef.current, endDismissButtonRef.current].filter(Boolean);
    }
    __name(getDismissButtons, "getDismissButtons");
    if (floating && modal) {
      const insideNodes = [floating, ...portalNodes, ...getDismissButtons()];
      const cleanup = (0, import_aria_hidden2.hideOthers)(orderRef.current.includes("reference") || isTypeableCombobox ? insideNodes.concat(domReference || []) : insideNodes);
      return () => {
        cleanup();
      };
    }
  }, [domReference, floating, modal, orderRef, portalContext, isTypeableCombobox]);
  React9.useEffect(() => {
    if (modal && !guards && floating) {
      const tabIndexValues = [];
      const options = getTabbableOptions();
      const allTabbable = (0, import_tabbable.tabbable)(getDocument(floating).body, options);
      const floatingTabbable = getTabbableElements();
      const elements = allTabbable.filter((el) => !floatingTabbable.includes(el));
      elements.forEach((el, i) => {
        tabIndexValues[i] = el.getAttribute("tabindex");
        el.setAttribute("tabindex", "-1");
      });
      return () => {
        elements.forEach((el, i) => {
          const value = tabIndexValues[i];
          if (value == null) {
            el.removeAttribute("tabindex");
          } else {
            el.setAttribute("tabindex", value);
          }
        });
      };
    }
  }, [floating, modal, guards, getTabbableElements]);
  index2(() => {
    if (!floating)
      return;
    const doc = getDocument(floating);
    let returnFocusValue = returnFocus;
    let preventReturnFocusScroll = false;
    const previouslyFocusedElement = activeElement$1(doc);
    const contextData = dataRef.current;
    previouslyFocusedElementRef.current = previouslyFocusedElement;
    const focusableElements = getTabbableElements(floating);
    const elToFocus = (typeof initialFocus === "number" ? focusableElements[initialFocus] : initialFocus.current) || floating;
    !ignoreInitialFocus && enqueueFocus(elToFocus, {
      preventScroll: elToFocus === floating
    });
    function onDismiss(payload) {
      if (payload.type === "escapeKey" && refs.domReference.current) {
        previouslyFocusedElementRef.current = refs.domReference.current;
      }
      if (["referencePress", "escapeKey"].includes(payload.type)) {
        return;
      }
      const returnFocus2 = payload.data.returnFocus;
      if (typeof returnFocus2 === "object") {
        returnFocusValue = true;
        preventReturnFocusScroll = returnFocus2.preventScroll;
      } else {
        returnFocusValue = returnFocus2;
      }
    }
    __name(onDismiss, "onDismiss");
    events.on("dismiss", onDismiss);
    return () => {
      events.off("dismiss", onDismiss);
      if (contains(floating, activeElement$1(doc)) && refs.domReference.current) {
        previouslyFocusedElementRef.current = refs.domReference.current;
      }
      if (returnFocusValue && isHTMLElement2(previouslyFocusedElementRef.current) && !preventReturnFocusRef.current) {
        if (!refs.domReference.current || isPointerDownRef.current) {
          enqueueFocus(previouslyFocusedElementRef.current, {
            // When dismissing nested floating elements, by the time the rAF has
            // executed, the menus will all have been unmounted. When they try
            // to get focused, the calls get ignored — leaving the root
            // reference focused as desired.
            cancelPrevious: false,
            preventScroll: preventReturnFocusScroll
          });
        } else {
          var _previouslyFocusedEle;
          contextData.__syncReturnFocus = true;
          (_previouslyFocusedEle = previouslyFocusedElementRef.current) == null ? void 0 : _previouslyFocusedEle.focus({
            preventScroll: preventReturnFocusScroll
          });
          setTimeout(() => {
            delete contextData.__syncReturnFocus;
          });
        }
      }
    };
  }, [floating, getTabbableElements, initialFocus, returnFocus, dataRef, refs, events, ignoreInitialFocus]);
  index2(() => {
    if (!portalContext)
      return;
    portalContext.setFocusManagerState({
      ...context,
      modal,
      closeOnFocusOut
      // Not concerned about the <RT> generic type.
    });
    return () => {
      portalContext.setFocusManagerState(null);
    };
  }, [portalContext, modal, closeOnFocusOut, context]);
  index2(() => {
    if (ignoreInitialFocus || !floating)
      return;
    function setState() {
      setTabbableContentLength(getTabbableContent().length);
    }
    __name(setState, "setState");
    setState();
    if (typeof MutationObserver === "function") {
      const observer = new MutationObserver(setState);
      observer.observe(floating, {
        childList: true,
        subtree: true
      });
      return () => {
        observer.disconnect();
      };
    }
  }, [floating, getTabbableContent, ignoreInitialFocus, refs]);
  const shouldRenderGuards = guards && (isInsidePortal || modal) && !isTypeableCombobox;
  function renderDismissButton(location) {
    return visuallyHiddenDismiss && modal ? /* @__PURE__ */ React9.createElement(VisuallyHiddenDismiss, {
      ref: location === "start" ? startDismissButtonRef : endDismissButtonRef,
      onClick: () => onOpenChange(false)
    }, typeof visuallyHiddenDismiss === "string" ? visuallyHiddenDismiss : "Dismiss") : null;
  }
  __name(renderDismissButton, "renderDismissButton");
  return /* @__PURE__ */ React9.createElement(React9.Fragment, null, shouldRenderGuards && /* @__PURE__ */ React9.createElement(FocusGuard, {
    "data-type": "inside",
    ref: portalContext == null ? void 0 : portalContext.beforeInsideRef,
    onFocus: (event) => {
      if (modal) {
        const els = getTabbableElements();
        enqueueFocus(order[0] === "reference" ? els[0] : els[els.length - 1]);
      } else if (portalContext != null && portalContext.preserveTabOrder && portalContext.portalNode) {
        preventReturnFocusRef.current = false;
        if (isOutsideEvent(event, portalContext.portalNode)) {
          const nextTabbable = getNextTabbable() || domReference;
          nextTabbable == null ? void 0 : nextTabbable.focus();
        } else {
          var _portalContext$before;
          (_portalContext$before = portalContext.beforeOutsideRef.current) == null ? void 0 : _portalContext$before.focus();
        }
      }
    }
  }), isTypeableCombobox ? null : renderDismissButton("start"), /* @__PURE__ */ React9.cloneElement(children, tabbableContentLength === 0 || order.includes("floating") ? {
    tabIndex: 0
  } : {}), renderDismissButton("end"), shouldRenderGuards && /* @__PURE__ */ React9.createElement(FocusGuard, {
    "data-type": "inside",
    ref: portalContext == null ? void 0 : portalContext.afterInsideRef,
    onFocus: (event) => {
      if (modal) {
        enqueueFocus(getTabbableElements()[0]);
      } else if (portalContext != null && portalContext.preserveTabOrder && portalContext.portalNode) {
        preventReturnFocusRef.current = true;
        if (isOutsideEvent(event, portalContext.portalNode)) {
          const prevTabbable = getPreviousTabbable() || domReference;
          prevTabbable == null ? void 0 : prevTabbable.focus();
        } else {
          var _portalContext$afterO;
          (_portalContext$afterO = portalContext.afterOutsideRef.current) == null ? void 0 : _portalContext$afterO.focus();
        }
      }
    }
  }));
}
function isButtonTarget(event) {
  return isHTMLElement2(event.target) && event.target.tagName === "BUTTON";
}
function isSpaceIgnored(element) {
  return isTypeableElement(element);
}
function isEventTargetWithin(event, node) {
  if (node == null) {
    return false;
  }
  if ("composedPath" in event) {
    return event.composedPath().includes(node);
  }
  const e = event;
  return e.target != null && node.contains(e.target);
}
function isDifferentRow(index3, cols, prevRow) {
  return Math.floor(index3 / cols) !== prevRow;
}
function isIndexOutOfBounds(listRef, index3) {
  return index3 < 0 || index3 >= listRef.current.length;
}
function findNonDisabledIndex(listRef, _temp) {
  let {
    startingIndex = -1,
    decrement = false,
    disabledIndices,
    amount = 1
  } = _temp === void 0 ? {} : _temp;
  const list = listRef.current;
  let index3 = startingIndex;
  do {
    var _list$index, _list$index2;
    index3 = index3 + (decrement ? -amount : amount);
  } while (index3 >= 0 && index3 <= list.length - 1 && (disabledIndices ? disabledIndices.includes(index3) : list[index3] == null || ((_list$index = list[index3]) == null ? void 0 : _list$index.hasAttribute("disabled")) || ((_list$index2 = list[index3]) == null ? void 0 : _list$index2.getAttribute("aria-disabled")) === "true"));
  return index3;
}
function doSwitch(orientation, vertical, horizontal) {
  switch (orientation) {
    case "vertical":
      return vertical;
    case "horizontal":
      return horizontal;
    default:
      return vertical || horizontal;
  }
}
function isMainOrientationKey(key, orientation) {
  const vertical = key === ARROW_UP || key === ARROW_DOWN;
  const horizontal = key === ARROW_LEFT || key === ARROW_RIGHT;
  return doSwitch(orientation, vertical, horizontal);
}
function isMainOrientationToEndKey(key, orientation, rtl) {
  const vertical = key === ARROW_DOWN;
  const horizontal = rtl ? key === ARROW_LEFT : key === ARROW_RIGHT;
  return doSwitch(orientation, vertical, horizontal) || key === "Enter" || key == " " || key === "";
}
function isCrossOrientationOpenKey(key, orientation, rtl) {
  const vertical = rtl ? key === ARROW_LEFT : key === ARROW_RIGHT;
  const horizontal = key === ARROW_DOWN;
  return doSwitch(orientation, vertical, horizontal);
}
function isCrossOrientationCloseKey(key, orientation, rtl) {
  const vertical = rtl ? key === ARROW_RIGHT : key === ARROW_LEFT;
  const horizontal = key === ARROW_UP;
  return doSwitch(orientation, vertical, horizontal);
}
function getMinIndex(listRef, disabledIndices) {
  return findNonDisabledIndex(listRef, {
    disabledIndices
  });
}
function getMaxIndex(listRef, disabledIndices) {
  return findNonDisabledIndex(listRef, {
    decrement: true,
    startingIndex: listRef.current.length,
    disabledIndices
  });
}
function useMergeRefs(refs) {
  return React9.useMemo(() => {
    if (refs.every((ref) => ref == null)) {
      return null;
    }
    return (value) => {
      refs.forEach((ref) => {
        if (typeof ref === "function") {
          ref(value);
        } else if (ref != null) {
          ref.current = value;
        }
      });
    };
  }, refs);
}
function useDelayUnmount(open, durationMs) {
  const [isMounted, setIsMounted] = React9.useState(open);
  if (open && !isMounted) {
    setIsMounted(true);
  }
  React9.useEffect(() => {
    if (!open) {
      const timeout = setTimeout(() => setIsMounted(false), durationMs);
      return () => clearTimeout(timeout);
    }
  }, [open, durationMs]);
  return isMounted;
}
function useTransitionStatus(_ref, _temp) {
  let {
    open,
    elements: {
      floating
    }
  } = _ref;
  let {
    duration = 250
  } = _temp === void 0 ? {} : _temp;
  const isNumberDuration = typeof duration === "number";
  const closeDuration = (isNumberDuration ? duration : duration.close) || 0;
  const [initiated, setInitiated] = React9.useState(false);
  const [status, setStatus] = React9.useState("unmounted");
  const isMounted = useDelayUnmount(open, closeDuration);
  index2(() => {
    if (initiated && !isMounted) {
      setStatus("unmounted");
    }
  }, [initiated, isMounted]);
  index2(() => {
    if (!floating)
      return;
    if (open) {
      setStatus("initial");
      const frame = requestAnimationFrame(() => {
        setStatus("open");
      });
      return () => {
        cancelAnimationFrame(frame);
      };
    } else {
      setInitiated(true);
      setStatus("close");
    }
  }, [open, floating]);
  return {
    isMounted,
    status
  };
}
function useTransitionStyles(context, _temp2) {
  let {
    initial: unstable_initial = {
      opacity: 0
    },
    open: unstable_open,
    close: unstable_close,
    common: unstable_common,
    duration = 250
  } = _temp2 === void 0 ? {} : _temp2;
  const placement = context.placement;
  const side = placement.split("-")[0];
  const [styles, setStyles] = React9.useState({});
  const {
    isMounted,
    status
  } = useTransitionStatus(context, {
    duration
  });
  const initialRef = useLatestRef2(unstable_initial);
  const openRef = useLatestRef2(unstable_open);
  const closeRef = useLatestRef2(unstable_close);
  const commonRef = useLatestRef2(unstable_common);
  const isNumberDuration = typeof duration === "number";
  const openDuration = (isNumberDuration ? duration : duration.open) || 0;
  const closeDuration = (isNumberDuration ? duration : duration.close) || 0;
  index2(() => {
    const fnArgs = {
      side,
      placement
    };
    const initial = initialRef.current;
    const close = closeRef.current;
    const open = openRef.current;
    const common = commonRef.current;
    const initialStyles = typeof initial === "function" ? initial(fnArgs) : initial;
    const closeStyles = typeof close === "function" ? close(fnArgs) : close;
    const commonStyles = typeof common === "function" ? common(fnArgs) : common;
    const openStyles = (typeof open === "function" ? open(fnArgs) : open) || Object.keys(initialStyles).reduce((acc, key) => {
      acc[key] = "";
      return acc;
    }, {});
    if (status === "initial" || status === "unmounted") {
      setStyles((styles2) => ({
        transitionProperty: styles2.transitionProperty,
        ...commonStyles,
        ...initialStyles
      }));
    }
    if (status === "open") {
      setStyles({
        transitionProperty: Object.keys(openStyles).map(camelCaseToKebabCase).join(","),
        transitionDuration: openDuration + "ms",
        ...commonStyles,
        ...openStyles
      });
    }
    if (status === "close") {
      const styles2 = closeStyles || initialStyles;
      setStyles({
        transitionProperty: Object.keys(styles2).map(camelCaseToKebabCase).join(","),
        transitionDuration: closeDuration + "ms",
        ...commonStyles,
        ...styles2
      });
    }
  }, [side, placement, closeDuration, closeRef, initialRef, openRef, commonRef, openDuration, status]);
  return {
    isMounted,
    styles
  };
}
function getArgsWithCustomFloatingHeight(state, height) {
  return {
    ...state,
    rects: {
      ...state.rects,
      floating: {
        ...state.rects.floating,
        height
      }
    }
  };
}
function isPointInPolygon(point, polygon) {
  const [x, y] = point;
  let isInside2 = false;
  const length = polygon.length;
  for (let i = 0, j = length - 1; i < length; j = i++) {
    const [xi, yi] = polygon[i] || [0, 0];
    const [xj, yj] = polygon[j] || [0, 0];
    const intersect = yi >= y !== yj >= y && x <= (xj - xi) * (y - yi) / (yj - yi) + xi;
    if (intersect) {
      isInside2 = !isInside2;
    }
  }
  return isInside2;
}
function isInside(point, rect) {
  return point[0] >= rect.x && point[0] <= rect.x + rect.width && point[1] >= rect.y && point[1] <= rect.y + rect.height;
}
function safePolygon(_temp) {
  let {
    restMs = 0,
    buffer = 0.5,
    blockPointerEvents = false
  } = _temp === void 0 ? {} : _temp;
  let timeoutId2;
  let isInsideRect = false;
  let hasLanded = false;
  const fn = /* @__PURE__ */ __name((_ref) => {
    let {
      x,
      y,
      placement,
      elements,
      onClose,
      nodeId,
      tree
    } = _ref;
    return /* @__PURE__ */ __name(function onMouseMove(event) {
      function close() {
        clearTimeout(timeoutId2);
        onClose();
      }
      __name(close, "close");
      clearTimeout(timeoutId2);
      if (!elements.domReference || !elements.floating || placement == null || x == null || y == null) {
        return;
      }
      const {
        clientX,
        clientY
      } = event;
      const clientPoint = [clientX, clientY];
      const target = getTarget(event);
      const isLeave = event.type === "mouseleave";
      const isOverFloatingEl = contains(elements.floating, target);
      const isOverReferenceEl = contains(elements.domReference, target);
      const refRect = elements.domReference.getBoundingClientRect();
      const rect = elements.floating.getBoundingClientRect();
      const side = placement.split("-")[0];
      const cursorLeaveFromRight = x > rect.right - rect.width / 2;
      const cursorLeaveFromBottom = y > rect.bottom - rect.height / 2;
      const isOverReferenceRect = isInside(clientPoint, refRect);
      if (isOverFloatingEl) {
        hasLanded = true;
        if (!isLeave) {
          return;
        }
      }
      if (isOverReferenceEl) {
        hasLanded = false;
      }
      if (isOverReferenceEl && !isLeave) {
        hasLanded = true;
        return;
      }
      if (isLeave && isElement2(event.relatedTarget) && contains(elements.floating, event.relatedTarget)) {
        return;
      }
      if (tree && getChildren(tree.nodesRef.current, nodeId).some((_ref2) => {
        let {
          context
        } = _ref2;
        return context == null ? void 0 : context.open;
      })) {
        return;
      }
      if (side === "top" && y >= refRect.bottom - 1 || side === "bottom" && y <= refRect.top + 1 || side === "left" && x >= refRect.right - 1 || side === "right" && x <= refRect.left + 1) {
        return close();
      }
      let rectPoly = [];
      switch (side) {
        case "top":
          rectPoly = [[rect.left, refRect.top + 1], [rect.left, rect.bottom - 1], [rect.right, rect.bottom - 1], [rect.right, refRect.top + 1]];
          isInsideRect = clientX >= rect.left && clientX <= rect.right && clientY >= rect.top && clientY <= refRect.top + 1;
          break;
        case "bottom":
          rectPoly = [[rect.left, rect.top + 1], [rect.left, refRect.bottom - 1], [rect.right, refRect.bottom - 1], [rect.right, rect.top + 1]];
          isInsideRect = clientX >= rect.left && clientX <= rect.right && clientY >= refRect.bottom - 1 && clientY <= rect.bottom;
          break;
        case "left":
          rectPoly = [[rect.right - 1, rect.bottom], [rect.right - 1, rect.top], [refRect.left + 1, rect.top], [refRect.left + 1, rect.bottom]];
          isInsideRect = clientX >= rect.left && clientX <= refRect.left + 1 && clientY >= rect.top && clientY <= rect.bottom;
          break;
        case "right":
          rectPoly = [[refRect.right - 1, rect.bottom], [refRect.right - 1, rect.top], [rect.left + 1, rect.top], [rect.left + 1, rect.bottom]];
          isInsideRect = clientX >= refRect.right - 1 && clientX <= rect.right && clientY >= rect.top && clientY <= rect.bottom;
          break;
      }
      function getPolygon(_ref3) {
        let [x2, y2] = _ref3;
        const isFloatingWider = rect.width > refRect.width;
        const isFloatingTaller = rect.height > refRect.height;
        switch (side) {
          case "top": {
            const cursorPointOne = [isFloatingWider ? x2 + buffer / 2 : cursorLeaveFromRight ? x2 + buffer * 4 : x2 - buffer * 4, y2 + buffer + 1];
            const cursorPointTwo = [isFloatingWider ? x2 - buffer / 2 : cursorLeaveFromRight ? x2 + buffer * 4 : x2 - buffer * 4, y2 + buffer + 1];
            const commonPoints = [[rect.left, cursorLeaveFromRight ? rect.bottom - buffer : isFloatingWider ? rect.bottom - buffer : rect.top], [rect.right, cursorLeaveFromRight ? isFloatingWider ? rect.bottom - buffer : rect.top : rect.bottom - buffer]];
            return [cursorPointOne, cursorPointTwo, ...commonPoints];
          }
          case "bottom": {
            const cursorPointOne = [isFloatingWider ? x2 + buffer / 2 : cursorLeaveFromRight ? x2 + buffer * 4 : x2 - buffer * 4, y2 - buffer];
            const cursorPointTwo = [isFloatingWider ? x2 - buffer / 2 : cursorLeaveFromRight ? x2 + buffer * 4 : x2 - buffer * 4, y2 - buffer];
            const commonPoints = [[rect.left, cursorLeaveFromRight ? rect.top + buffer : isFloatingWider ? rect.top + buffer : rect.bottom], [rect.right, cursorLeaveFromRight ? isFloatingWider ? rect.top + buffer : rect.bottom : rect.top + buffer]];
            return [cursorPointOne, cursorPointTwo, ...commonPoints];
          }
          case "left": {
            const cursorPointOne = [x2 + buffer + 1, isFloatingTaller ? y2 + buffer / 2 : cursorLeaveFromBottom ? y2 + buffer * 4 : y2 - buffer * 4];
            const cursorPointTwo = [x2 + buffer + 1, isFloatingTaller ? y2 - buffer / 2 : cursorLeaveFromBottom ? y2 + buffer * 4 : y2 - buffer * 4];
            const commonPoints = [[cursorLeaveFromBottom ? rect.right - buffer : isFloatingTaller ? rect.right - buffer : rect.left, rect.top], [cursorLeaveFromBottom ? isFloatingTaller ? rect.right - buffer : rect.left : rect.right - buffer, rect.bottom]];
            return [...commonPoints, cursorPointOne, cursorPointTwo];
          }
          case "right": {
            const cursorPointOne = [x2 - buffer, isFloatingTaller ? y2 + buffer / 2 : cursorLeaveFromBottom ? y2 + buffer * 4 : y2 - buffer * 4];
            const cursorPointTwo = [x2 - buffer, isFloatingTaller ? y2 - buffer / 2 : cursorLeaveFromBottom ? y2 + buffer * 4 : y2 - buffer * 4];
            const commonPoints = [[cursorLeaveFromBottom ? rect.left + buffer : isFloatingTaller ? rect.left + buffer : rect.right, rect.top], [cursorLeaveFromBottom ? isFloatingTaller ? rect.left + buffer : rect.right : rect.left + buffer, rect.bottom]];
            return [cursorPointOne, cursorPointTwo, ...commonPoints];
          }
        }
      }
      __name(getPolygon, "getPolygon");
      const poly = isInsideRect ? rectPoly : getPolygon([x, y]);
      if (isInsideRect) {
        return;
      } else if (hasLanded && !isOverReferenceRect) {
        return close();
      }
      if (!isPointInPolygon([clientX, clientY], poly)) {
        close();
      } else if (restMs && !hasLanded) {
        timeoutId2 = setTimeout(close, restMs);
      }
    }, "onMouseMove");
  }, "fn");
  fn.__options = {
    blockPointerEvents
  };
  return fn;
}
function useFloating3(options) {
  if (options === void 0) {
    options = {};
  }
  const {
    open = false,
    onOpenChange: unstable_onOpenChange,
    nodeId
  } = options;
  const position = useFloating2(options);
  const tree = useFloatingTree();
  const domReferenceRef = React9.useRef(null);
  const dataRef = React9.useRef({});
  const events = React9.useState(() => createPubSub())[0];
  const [domReference, setDomReference] = React9.useState(null);
  const setPositionReference = React9.useCallback((node) => {
    const positionReference = isElement2(node) ? {
      getBoundingClientRect: () => node.getBoundingClientRect(),
      contextElement: node
    } : node;
    position.refs.setReference(positionReference);
  }, [position.refs]);
  const setReference = React9.useCallback((node) => {
    if (isElement2(node) || node === null) {
      domReferenceRef.current = node;
      setDomReference(node);
    }
    if (isElement2(position.refs.reference.current) || position.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
    // `null` to support `positionReference` + an unstable `reference`
    // callback ref.
    node !== null && !isElement2(node)) {
      position.refs.setReference(node);
    }
  }, [position.refs]);
  const refs = React9.useMemo(() => ({
    ...position.refs,
    setReference,
    setPositionReference,
    domReference: domReferenceRef
  }), [position.refs, setReference, setPositionReference]);
  const elements = React9.useMemo(() => ({
    ...position.elements,
    domReference
  }), [position.elements, domReference]);
  const onOpenChange = useEvent2(unstable_onOpenChange);
  const context = React9.useMemo(() => ({
    ...position,
    refs,
    elements,
    dataRef,
    nodeId,
    events,
    open,
    onOpenChange
  }), [position, nodeId, events, open, onOpenChange, refs, elements]);
  index2(() => {
    const node = tree == null ? void 0 : tree.nodesRef.current.find((node2) => node2.id === nodeId);
    if (node) {
      node.context = context;
    }
  });
  return React9.useMemo(() => ({
    ...position,
    context,
    refs,
    reference: setReference,
    positionReference: setPositionReference
  }), [position, refs, context, setReference, setPositionReference]);
}
function mergeProps(userProps, propsList, elementKey) {
  const map = /* @__PURE__ */ new Map();
  return {
    ...elementKey === "floating" && {
      tabIndex: -1
    },
    ...userProps,
    ...propsList.map((value) => value ? value[elementKey] : null).concat(userProps).reduce((acc, props) => {
      if (!props) {
        return acc;
      }
      Object.entries(props).forEach((_ref) => {
        let [key, value] = _ref;
        if (key.indexOf("on") === 0) {
          if (!map.has(key)) {
            map.set(key, []);
          }
          if (typeof value === "function") {
            var _map$get;
            (_map$get = map.get(key)) == null ? void 0 : _map$get.push(value);
            acc[key] = function() {
              var _map$get2;
              for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
              }
              (_map$get2 = map.get(key)) == null ? void 0 : _map$get2.forEach((fn) => fn(...args));
            };
          }
        } else {
          acc[key] = value;
        }
      });
      return acc;
    }, {})
  };
}
var React9, import_react8, import_aria_hidden2, import_tabbable, import_react_dom, index2, serverHandoffComplete, count, genId, useReactId, useId3, FloatingNodeContext, FloatingTreeContext, useFloatingParentNodeId, useFloatingTree, useFloatingNodeId, FloatingNode, FloatingTree, safePolygonIdentifier, useHover, FloatingDelayGroupContext, useDelayGroupContext, FloatingDelayGroup, useDelayGroup, rafId, TYPEABLE_SELECTOR, getTabbableOptions, useInsertionEffect, useSafeInsertionEffect, HIDDEN_STYLES, activeElement, timeoutId, FocusGuard, PortalContext, useFloatingPortalNode, FloatingPortal, usePortalContext2, VisuallyHiddenDismiss, identifier, FloatingOverlay, useClick, bubbleHandlerKeys, captureHandlerKeys, normalizeBubblesProp, useDismiss, useFocus, isPreventScrollSupported, ARROW_UP, ARROW_DOWN, ARROW_LEFT, ARROW_RIGHT, useListNavigation, useRole, camelCaseToKebabCase, useTypeahead, inner, useInnerOffset, useInteractions;
var init_floating_ui_react_esm = __esm({
  "node_modules/@floating-ui/react/dist/floating-ui.react.esm.js"() {
    React9 = __toESM(require("react"));
    import_react8 = require("react");
    import_aria_hidden2 = __toESM(require_es5());
    import_tabbable = __toESM(require_dist3());
    import_react_dom = require("react-dom");
    init_floating_ui_react_dom_esm();
    init_floating_ui_react_dom_esm();
    index2 = typeof document !== "undefined" ? import_react8.useLayoutEffect : import_react8.useEffect;
    serverHandoffComplete = false;
    count = 0;
    genId = /* @__PURE__ */ __name(() => "floating-ui-" + count++, "genId");
    __name(useFloatingId, "useFloatingId");
    useReactId = React9[/* @__PURE__ */ "useId".toString()];
    useId3 = useReactId || useFloatingId;
    __name(createPubSub, "createPubSub");
    FloatingNodeContext = /* @__PURE__ */ React9.createContext(null);
    FloatingTreeContext = /* @__PURE__ */ React9.createContext(null);
    useFloatingParentNodeId = /* @__PURE__ */ __name(() => {
      var _React$useContext;
      return ((_React$useContext = React9.useContext(FloatingNodeContext)) == null ? void 0 : _React$useContext.id) || null;
    }, "useFloatingParentNodeId");
    useFloatingTree = /* @__PURE__ */ __name(() => React9.useContext(FloatingTreeContext), "useFloatingTree");
    useFloatingNodeId = /* @__PURE__ */ __name((customParentId) => {
      const id = useId3();
      const tree = useFloatingTree();
      const reactParentId = useFloatingParentNodeId();
      const parentId = customParentId || reactParentId;
      index2(() => {
        const node = {
          id,
          parentId
        };
        tree == null ? void 0 : tree.addNode(node);
        return () => {
          tree == null ? void 0 : tree.removeNode(node);
        };
      }, [tree, id, parentId]);
      return id;
    }, "useFloatingNodeId");
    FloatingNode = /* @__PURE__ */ __name((_ref) => {
      let {
        children,
        id
      } = _ref;
      const parentId = useFloatingParentNodeId();
      return /* @__PURE__ */ React9.createElement(FloatingNodeContext.Provider, {
        value: React9.useMemo(() => ({
          id,
          parentId
        }), [id, parentId])
      }, children);
    }, "FloatingNode");
    FloatingTree = /* @__PURE__ */ __name((_ref2) => {
      let {
        children
      } = _ref2;
      const nodesRef = React9.useRef([]);
      const addNode = React9.useCallback((node) => {
        nodesRef.current = [...nodesRef.current, node];
      }, []);
      const removeNode = React9.useCallback((node) => {
        nodesRef.current = nodesRef.current.filter((n) => n !== node);
      }, []);
      const events = React9.useState(() => createPubSub())[0];
      return /* @__PURE__ */ React9.createElement(FloatingTreeContext.Provider, {
        value: React9.useMemo(() => ({
          nodesRef,
          addNode,
          removeNode,
          events
        }), [nodesRef, addNode, removeNode, events])
      }, children);
    }, "FloatingTree");
    __name(getDocument, "getDocument");
    __name(getPlatform, "getPlatform");
    __name(getUserAgent, "getUserAgent");
    __name(getWindow2, "getWindow");
    __name(isElement2, "isElement");
    __name(isHTMLElement2, "isHTMLElement");
    __name(isShadowRoot2, "isShadowRoot");
    __name(isVirtualClick, "isVirtualClick");
    __name(isVirtualPointerEvent, "isVirtualPointerEvent");
    __name(isSafari, "isSafari");
    __name(isMac, "isMac");
    __name(isMouseLikePointerType, "isMouseLikePointerType");
    __name(useLatestRef2, "useLatestRef");
    safePolygonIdentifier = "data-floating-ui-safe-polygon";
    __name(getDelay, "getDelay");
    useHover = /* @__PURE__ */ __name(function(context, _temp) {
      let {
        enabled = true,
        delay = 0,
        handleClose = null,
        mouseOnly = false,
        restMs = 0,
        move = true
      } = _temp === void 0 ? {} : _temp;
      const {
        open,
        onOpenChange,
        dataRef,
        events,
        elements: {
          domReference,
          floating
        },
        refs
      } = context;
      const tree = useFloatingTree();
      const parentId = useFloatingParentNodeId();
      const handleCloseRef = useLatestRef2(handleClose);
      const delayRef = useLatestRef2(delay);
      const pointerTypeRef = React9.useRef();
      const timeoutRef = React9.useRef();
      const handlerRef = React9.useRef();
      const restTimeoutRef = React9.useRef();
      const blockMouseMoveRef = React9.useRef(true);
      const performedPointerEventsMutationRef = React9.useRef(false);
      const unbindMouseMoveRef = React9.useRef(() => {
      });
      const isHoverOpen = React9.useCallback(() => {
        var _dataRef$current$open;
        const type = (_dataRef$current$open = dataRef.current.openEvent) == null ? void 0 : _dataRef$current$open.type;
        return (type == null ? void 0 : type.includes("mouse")) && type !== "mousedown";
      }, [dataRef]);
      React9.useEffect(() => {
        if (!enabled) {
          return;
        }
        function onDismiss() {
          clearTimeout(timeoutRef.current);
          clearTimeout(restTimeoutRef.current);
          blockMouseMoveRef.current = true;
        }
        __name(onDismiss, "onDismiss");
        events.on("dismiss", onDismiss);
        return () => {
          events.off("dismiss", onDismiss);
        };
      }, [enabled, events]);
      React9.useEffect(() => {
        if (!enabled || !handleCloseRef.current || !open) {
          return;
        }
        function onLeave() {
          if (isHoverOpen()) {
            onOpenChange(false);
          }
        }
        __name(onLeave, "onLeave");
        const html = getDocument(floating).documentElement;
        html.addEventListener("mouseleave", onLeave);
        return () => {
          html.removeEventListener("mouseleave", onLeave);
        };
      }, [floating, open, onOpenChange, enabled, handleCloseRef, dataRef, isHoverOpen]);
      const closeWithDelay = React9.useCallback(function(runElseBranch) {
        if (runElseBranch === void 0) {
          runElseBranch = true;
        }
        const closeDelay = getDelay(delayRef.current, "close", pointerTypeRef.current);
        if (closeDelay && !handlerRef.current) {
          clearTimeout(timeoutRef.current);
          timeoutRef.current = setTimeout(() => onOpenChange(false), closeDelay);
        } else if (runElseBranch) {
          clearTimeout(timeoutRef.current);
          onOpenChange(false);
        }
      }, [delayRef, onOpenChange]);
      const cleanupMouseMoveHandler = React9.useCallback(() => {
        unbindMouseMoveRef.current();
        handlerRef.current = void 0;
      }, []);
      const clearPointerEvents = React9.useCallback(() => {
        if (performedPointerEventsMutationRef.current) {
          const body = getDocument(refs.floating.current).body;
          body.style.pointerEvents = "";
          body.removeAttribute(safePolygonIdentifier);
          performedPointerEventsMutationRef.current = false;
        }
      }, [refs]);
      React9.useEffect(() => {
        if (!enabled) {
          return;
        }
        function isClickLikeOpenEvent() {
          return dataRef.current.openEvent ? ["click", "mousedown"].includes(dataRef.current.openEvent.type) : false;
        }
        __name(isClickLikeOpenEvent, "isClickLikeOpenEvent");
        function onMouseEnter(event) {
          clearTimeout(timeoutRef.current);
          blockMouseMoveRef.current = false;
          if (mouseOnly && !isMouseLikePointerType(pointerTypeRef.current) || restMs > 0 && getDelay(delayRef.current, "open") === 0) {
            return;
          }
          dataRef.current.openEvent = event;
          const openDelay = getDelay(delayRef.current, "open", pointerTypeRef.current);
          if (openDelay) {
            timeoutRef.current = setTimeout(() => {
              onOpenChange(true);
            }, openDelay);
          } else {
            onOpenChange(true);
          }
        }
        __name(onMouseEnter, "onMouseEnter");
        function onMouseLeave(event) {
          if (isClickLikeOpenEvent()) {
            return;
          }
          unbindMouseMoveRef.current();
          const doc = getDocument(floating);
          clearTimeout(restTimeoutRef.current);
          if (handleCloseRef.current) {
            if (!open) {
              clearTimeout(timeoutRef.current);
            }
            handlerRef.current = handleCloseRef.current({
              ...context,
              tree,
              x: event.clientX,
              y: event.clientY,
              onClose() {
                clearPointerEvents();
                cleanupMouseMoveHandler();
                closeWithDelay();
              }
            });
            const handler = handlerRef.current;
            doc.addEventListener("mousemove", handler);
            unbindMouseMoveRef.current = () => {
              doc.removeEventListener("mousemove", handler);
            };
            return;
          }
          closeWithDelay();
        }
        __name(onMouseLeave, "onMouseLeave");
        function onScrollMouseLeave(event) {
          if (isClickLikeOpenEvent()) {
            return;
          }
          handleCloseRef.current == null ? void 0 : handleCloseRef.current({
            ...context,
            tree,
            x: event.clientX,
            y: event.clientY,
            onClose() {
              clearPointerEvents();
              cleanupMouseMoveHandler();
              closeWithDelay();
            }
          })(event);
        }
        __name(onScrollMouseLeave, "onScrollMouseLeave");
        if (isElement2(domReference)) {
          const ref = domReference;
          open && ref.addEventListener("mouseleave", onScrollMouseLeave);
          floating == null ? void 0 : floating.addEventListener("mouseleave", onScrollMouseLeave);
          move && ref.addEventListener("mousemove", onMouseEnter, {
            once: true
          });
          ref.addEventListener("mouseenter", onMouseEnter);
          ref.addEventListener("mouseleave", onMouseLeave);
          return () => {
            open && ref.removeEventListener("mouseleave", onScrollMouseLeave);
            floating == null ? void 0 : floating.removeEventListener("mouseleave", onScrollMouseLeave);
            move && ref.removeEventListener("mousemove", onMouseEnter);
            ref.removeEventListener("mouseenter", onMouseEnter);
            ref.removeEventListener("mouseleave", onMouseLeave);
          };
        }
      }, [domReference, floating, enabled, context, mouseOnly, restMs, move, closeWithDelay, cleanupMouseMoveHandler, clearPointerEvents, onOpenChange, open, tree, delayRef, handleCloseRef, dataRef]);
      index2(() => {
        var _handleCloseRef$curre;
        if (!enabled) {
          return;
        }
        if (open && (_handleCloseRef$curre = handleCloseRef.current) != null && _handleCloseRef$curre.__options.blockPointerEvents && isHoverOpen()) {
          const body = getDocument(floating).body;
          body.setAttribute(safePolygonIdentifier, "");
          body.style.pointerEvents = "none";
          performedPointerEventsMutationRef.current = true;
          if (isElement2(domReference) && floating) {
            var _tree$nodesRef$curren, _tree$nodesRef$curren2;
            const ref = domReference;
            const parentFloating = tree == null ? void 0 : (_tree$nodesRef$curren = tree.nodesRef.current.find((node) => node.id === parentId)) == null ? void 0 : (_tree$nodesRef$curren2 = _tree$nodesRef$curren.context) == null ? void 0 : _tree$nodesRef$curren2.elements.floating;
            if (parentFloating) {
              parentFloating.style.pointerEvents = "";
            }
            ref.style.pointerEvents = "auto";
            floating.style.pointerEvents = "auto";
            return () => {
              ref.style.pointerEvents = "";
              floating.style.pointerEvents = "";
            };
          }
        }
      }, [enabled, open, parentId, floating, domReference, tree, handleCloseRef, dataRef, isHoverOpen]);
      index2(() => {
        if (!open) {
          pointerTypeRef.current = void 0;
          cleanupMouseMoveHandler();
          clearPointerEvents();
        }
      }, [open, cleanupMouseMoveHandler, clearPointerEvents]);
      React9.useEffect(() => {
        return () => {
          cleanupMouseMoveHandler();
          clearTimeout(timeoutRef.current);
          clearTimeout(restTimeoutRef.current);
          clearPointerEvents();
        };
      }, [enabled, cleanupMouseMoveHandler, clearPointerEvents]);
      return React9.useMemo(() => {
        if (!enabled) {
          return {};
        }
        function setPointerRef(event) {
          pointerTypeRef.current = event.pointerType;
        }
        __name(setPointerRef, "setPointerRef");
        return {
          reference: {
            onPointerDown: setPointerRef,
            onPointerEnter: setPointerRef,
            onMouseMove() {
              if (open || restMs === 0) {
                return;
              }
              clearTimeout(restTimeoutRef.current);
              restTimeoutRef.current = setTimeout(() => {
                if (!blockMouseMoveRef.current) {
                  onOpenChange(true);
                }
              }, restMs);
            }
          },
          floating: {
            onMouseEnter() {
              clearTimeout(timeoutRef.current);
            },
            onMouseLeave() {
              events.emit("dismiss", {
                type: "mouseLeave",
                data: {
                  returnFocus: false
                }
              });
              closeWithDelay(false);
            }
          }
        };
      }, [events, enabled, restMs, open, onOpenChange, closeWithDelay]);
    }, "useHover");
    FloatingDelayGroupContext = /* @__PURE__ */ React9.createContext({
      delay: 0,
      initialDelay: 0,
      timeoutMs: 0,
      currentId: null,
      setCurrentId: () => {
      },
      setState: () => {
      },
      isInstantPhase: false
    });
    useDelayGroupContext = /* @__PURE__ */ __name(() => React9.useContext(FloatingDelayGroupContext), "useDelayGroupContext");
    FloatingDelayGroup = /* @__PURE__ */ __name((_ref) => {
      let {
        children,
        delay,
        timeoutMs = 0
      } = _ref;
      const [state, setState] = React9.useReducer((prev, next) => ({
        ...prev,
        ...next
      }), {
        delay,
        timeoutMs,
        initialDelay: delay,
        currentId: null,
        isInstantPhase: false
      });
      const initialCurrentIdRef = React9.useRef(null);
      const setCurrentId = React9.useCallback((currentId) => {
        setState({
          currentId
        });
      }, []);
      index2(() => {
        if (state.currentId) {
          if (initialCurrentIdRef.current === null) {
            initialCurrentIdRef.current = state.currentId;
          } else {
            setState({
              isInstantPhase: true
            });
          }
        } else {
          setState({
            isInstantPhase: false
          });
          initialCurrentIdRef.current = null;
        }
      }, [state.currentId]);
      return /* @__PURE__ */ React9.createElement(FloatingDelayGroupContext.Provider, {
        value: React9.useMemo(() => ({
          ...state,
          setState,
          setCurrentId
        }), [state, setState, setCurrentId])
      }, children);
    }, "FloatingDelayGroup");
    useDelayGroup = /* @__PURE__ */ __name((_ref2, _ref3) => {
      let {
        open,
        onOpenChange
      } = _ref2;
      let {
        id
      } = _ref3;
      const {
        currentId,
        setCurrentId,
        initialDelay,
        setState,
        timeoutMs
      } = useDelayGroupContext();
      React9.useEffect(() => {
        if (currentId) {
          setState({
            delay: {
              open: 1,
              close: getDelay(initialDelay, "close")
            }
          });
          if (currentId !== id) {
            onOpenChange(false);
          }
        }
      }, [id, onOpenChange, setState, currentId, initialDelay]);
      React9.useEffect(() => {
        function unset() {
          onOpenChange(false);
          setState({
            delay: initialDelay,
            currentId: null
          });
        }
        __name(unset, "unset");
        if (!open && currentId === id) {
          if (timeoutMs) {
            const timeout = window.setTimeout(unset, timeoutMs);
            return () => {
              clearTimeout(timeout);
            };
          } else {
            unset();
          }
        }
      }, [open, setState, currentId, id, onOpenChange, initialDelay, timeoutMs]);
      React9.useEffect(() => {
        if (open) {
          setCurrentId(id);
        }
      }, [open, setCurrentId, id]);
    }, "useDelayGroup");
    __name(_extends, "_extends");
    __name(activeElement$1, "activeElement$1");
    __name(contains, "contains");
    rafId = 0;
    __name(enqueueFocus, "enqueueFocus");
    __name(getAncestors, "getAncestors");
    __name(getChildren, "getChildren");
    __name(getTarget, "getTarget");
    TYPEABLE_SELECTOR = "input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";
    __name(isTypeableElement, "isTypeableElement");
    __name(stopEvent, "stopEvent");
    getTabbableOptions = /* @__PURE__ */ __name(() => ({
      getShadowRoot: true,
      displayCheck: (
        // JSDOM does not support the `tabbable` library. To solve this we can
        // check if `ResizeObserver` is a real function (not polyfilled), which
        // determines if the current environment is JSDOM-like.
        typeof ResizeObserver === "function" && ResizeObserver.toString().includes("[native code]") ? "full" : "none"
      )
    }), "getTabbableOptions");
    __name(getTabbableIn, "getTabbableIn");
    __name(getNextTabbable, "getNextTabbable");
    __name(getPreviousTabbable, "getPreviousTabbable");
    __name(isOutsideEvent, "isOutsideEvent");
    __name(disableFocusInside, "disableFocusInside");
    __name(enableFocusInside, "enableFocusInside");
    useInsertionEffect = React9[/* @__PURE__ */ "useInsertionEffect".toString()];
    useSafeInsertionEffect = useInsertionEffect || ((fn) => fn());
    __name(useEvent2, "useEvent");
    HIDDEN_STYLES = {
      border: 0,
      clip: "rect(0 0 0 0)",
      height: "1px",
      margin: "-1px",
      overflow: "hidden",
      padding: 0,
      position: "fixed",
      whiteSpace: "nowrap",
      width: "1px",
      top: 0,
      left: 0
    };
    __name(setActiveElementOnTab, "setActiveElementOnTab");
    __name(isTabFocus, "isTabFocus");
    FocusGuard = /* @__PURE__ */ React9.forwardRef(/* @__PURE__ */ __name(function FocusGuard2(props, ref) {
      const onFocus = useEvent2(props.onFocus);
      const [role, setRole] = React9.useState();
      index2(() => {
        if (isSafari()) {
          setRole("button");
        }
        document.addEventListener("keydown", setActiveElementOnTab);
        return () => {
          document.removeEventListener("keydown", setActiveElementOnTab);
        };
      }, []);
      return /* @__PURE__ */ React9.createElement("span", _extends({}, props, {
        ref,
        tabIndex: 0,
        role,
        "aria-hidden": role ? void 0 : true,
        "data-floating-ui-focus-guard": "",
        style: HIDDEN_STYLES,
        onFocus: (event) => {
          if (isSafari() && isMac() && !isTabFocus(event)) {
            event.persist();
            timeoutId = window.setTimeout(() => {
              onFocus(event);
            }, 50);
          } else {
            onFocus(event);
          }
        }
      }));
    }, "FocusGuard"));
    PortalContext = /* @__PURE__ */ React9.createContext(null);
    useFloatingPortalNode = /* @__PURE__ */ __name(function(_temp) {
      let {
        id,
        enabled = true
      } = _temp === void 0 ? {} : _temp;
      const [portalEl, setPortalEl] = React9.useState(null);
      const uniqueId = useId3();
      const portalContext = usePortalContext2();
      index2(() => {
        if (!enabled) {
          return;
        }
        const rootNode = id ? document.getElementById(id) : null;
        if (rootNode) {
          rootNode.setAttribute("data-floating-ui-portal", "");
          setPortalEl(rootNode);
        } else {
          const newPortalEl = document.createElement("div");
          if (id !== "") {
            newPortalEl.id = id || uniqueId;
          }
          newPortalEl.setAttribute("data-floating-ui-portal", "");
          setPortalEl(newPortalEl);
          const container = (portalContext == null ? void 0 : portalContext.portalNode) || document.body;
          container.appendChild(newPortalEl);
          return () => {
            container.removeChild(newPortalEl);
          };
        }
      }, [id, portalContext, uniqueId, enabled]);
      return portalEl;
    }, "useFloatingPortalNode");
    FloatingPortal = /* @__PURE__ */ __name((_ref) => {
      let {
        children,
        id,
        root = null,
        preserveTabOrder = true
      } = _ref;
      const portalNode = useFloatingPortalNode({
        id,
        enabled: !root
      });
      const [focusManagerState, setFocusManagerState] = React9.useState(null);
      const beforeOutsideRef = React9.useRef(null);
      const afterOutsideRef = React9.useRef(null);
      const beforeInsideRef = React9.useRef(null);
      const afterInsideRef = React9.useRef(null);
      const shouldRenderGuards = (
        // The FocusManager and therefore floating element are currently open/
        // rendered.
        !!focusManagerState && // Guards are only for non-modal focus management.
        !focusManagerState.modal && !!(root || portalNode) && preserveTabOrder
      );
      React9.useEffect(() => {
        if (!portalNode || !preserveTabOrder || focusManagerState != null && focusManagerState.modal) {
          return;
        }
        function onFocus(event) {
          if (portalNode && isOutsideEvent(event)) {
            const focusing = event.type === "focusin";
            const manageFocus = focusing ? enableFocusInside : disableFocusInside;
            manageFocus(portalNode);
          }
        }
        __name(onFocus, "onFocus");
        portalNode.addEventListener("focusin", onFocus, true);
        portalNode.addEventListener("focusout", onFocus, true);
        return () => {
          portalNode.removeEventListener("focusin", onFocus, true);
          portalNode.removeEventListener("focusout", onFocus, true);
        };
      }, [portalNode, preserveTabOrder, focusManagerState == null ? void 0 : focusManagerState.modal]);
      return /* @__PURE__ */ React9.createElement(PortalContext.Provider, {
        value: React9.useMemo(() => ({
          preserveTabOrder,
          beforeOutsideRef,
          afterOutsideRef,
          beforeInsideRef,
          afterInsideRef,
          portalNode,
          setFocusManagerState
        }), [preserveTabOrder, portalNode])
      }, shouldRenderGuards && portalNode && /* @__PURE__ */ React9.createElement(FocusGuard, {
        "data-type": "outside",
        ref: beforeOutsideRef,
        onFocus: (event) => {
          if (isOutsideEvent(event, portalNode)) {
            var _beforeInsideRef$curr;
            (_beforeInsideRef$curr = beforeInsideRef.current) == null ? void 0 : _beforeInsideRef$curr.focus();
          } else {
            const prevTabbable = getPreviousTabbable() || (focusManagerState == null ? void 0 : focusManagerState.refs.domReference.current);
            prevTabbable == null ? void 0 : prevTabbable.focus();
          }
        }
      }), shouldRenderGuards && portalNode && /* @__PURE__ */ React9.createElement("span", {
        "aria-owns": portalNode.id,
        style: HIDDEN_STYLES
      }), root ? /* @__PURE__ */ (0, import_react_dom.createPortal)(children, root) : portalNode ? /* @__PURE__ */ (0, import_react_dom.createPortal)(children, portalNode) : null, shouldRenderGuards && portalNode && /* @__PURE__ */ React9.createElement(FocusGuard, {
        "data-type": "outside",
        ref: afterOutsideRef,
        onFocus: (event) => {
          if (isOutsideEvent(event, portalNode)) {
            var _afterInsideRef$curre;
            (_afterInsideRef$curre = afterInsideRef.current) == null ? void 0 : _afterInsideRef$curre.focus();
          } else {
            const nextTabbable = getNextTabbable() || (focusManagerState == null ? void 0 : focusManagerState.refs.domReference.current);
            nextTabbable == null ? void 0 : nextTabbable.focus();
            (focusManagerState == null ? void 0 : focusManagerState.closeOnFocusOut) && (focusManagerState == null ? void 0 : focusManagerState.onOpenChange(false));
          }
        }
      }));
    }, "FloatingPortal");
    usePortalContext2 = /* @__PURE__ */ __name(() => React9.useContext(PortalContext), "usePortalContext");
    VisuallyHiddenDismiss = /* @__PURE__ */ React9.forwardRef(/* @__PURE__ */ __name(function VisuallyHiddenDismiss2(props, ref) {
      return /* @__PURE__ */ React9.createElement("button", _extends({}, props, {
        type: "button",
        ref,
        tabIndex: -1,
        style: HIDDEN_STYLES
      }));
    }, "VisuallyHiddenDismiss"));
    __name(FloatingFocusManager, "FloatingFocusManager");
    identifier = "data-floating-ui-scroll-lock";
    FloatingOverlay = /* @__PURE__ */ React9.forwardRef(/* @__PURE__ */ __name(function FloatingOverlay2(_ref, ref) {
      let {
        lockScroll = false,
        ...rest
      } = _ref;
      index2(() => {
        var _window$visualViewpor, _window$visualViewpor2;
        if (!lockScroll) {
          return;
        }
        const alreadyLocked = document.body.hasAttribute(identifier);
        if (alreadyLocked) {
          return;
        }
        document.body.setAttribute(identifier, "");
        const scrollbarX = Math.round(document.documentElement.getBoundingClientRect().left) + document.documentElement.scrollLeft;
        const paddingProp = scrollbarX ? "paddingLeft" : "paddingRight";
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
        if (!/iP(hone|ad|od)|iOS/.test(getPlatform())) {
          Object.assign(document.body.style, {
            overflow: "hidden",
            [paddingProp]: scrollbarWidth + "px"
          });
          return () => {
            document.body.removeAttribute(identifier);
            Object.assign(document.body.style, {
              overflow: "",
              [paddingProp]: ""
            });
          };
        }
        const offsetLeft = ((_window$visualViewpor = window.visualViewport) == null ? void 0 : _window$visualViewpor.offsetLeft) || 0;
        const offsetTop = ((_window$visualViewpor2 = window.visualViewport) == null ? void 0 : _window$visualViewpor2.offsetTop) || 0;
        const scrollX = window.pageXOffset;
        const scrollY = window.pageYOffset;
        Object.assign(document.body.style, {
          position: "fixed",
          overflow: "hidden",
          top: -(scrollY - Math.floor(offsetTop)) + "px",
          left: -(scrollX - Math.floor(offsetLeft)) + "px",
          right: "0",
          [paddingProp]: scrollbarWidth + "px"
        });
        return () => {
          Object.assign(document.body.style, {
            position: "",
            overflow: "",
            top: "",
            left: "",
            right: "",
            [paddingProp]: ""
          });
          document.body.removeAttribute(identifier);
          window.scrollTo(scrollX, scrollY);
        };
      }, [lockScroll]);
      return /* @__PURE__ */ React9.createElement("div", _extends({
        ref
      }, rest, {
        style: {
          position: "fixed",
          overflow: "auto",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          ...rest.style
        }
      }));
    }, "FloatingOverlay"));
    __name(isButtonTarget, "isButtonTarget");
    __name(isSpaceIgnored, "isSpaceIgnored");
    useClick = /* @__PURE__ */ __name(function(_ref, _temp) {
      let {
        open,
        onOpenChange,
        dataRef,
        elements: {
          domReference
        }
      } = _ref;
      let {
        enabled = true,
        event: eventOption = "click",
        toggle = true,
        ignoreMouse = false,
        keyboardHandlers = true
      } = _temp === void 0 ? {} : _temp;
      const pointerTypeRef = React9.useRef();
      return React9.useMemo(() => {
        if (!enabled) {
          return {};
        }
        return {
          reference: {
            onPointerDown(event) {
              pointerTypeRef.current = event.pointerType;
            },
            onMouseDown(event) {
              if (event.button !== 0) {
                return;
              }
              if (isMouseLikePointerType(pointerTypeRef.current, true) && ignoreMouse) {
                return;
              }
              if (eventOption === "click") {
                return;
              }
              if (open) {
                if (toggle && (dataRef.current.openEvent ? dataRef.current.openEvent.type === "mousedown" : true)) {
                  onOpenChange(false);
                }
              } else {
                event.preventDefault();
                onOpenChange(true);
              }
              dataRef.current.openEvent = event.nativeEvent;
            },
            onClick(event) {
              if (dataRef.current.__syncReturnFocus) {
                return;
              }
              if (eventOption === "mousedown" && pointerTypeRef.current) {
                pointerTypeRef.current = void 0;
                return;
              }
              if (isMouseLikePointerType(pointerTypeRef.current, true) && ignoreMouse) {
                return;
              }
              if (open) {
                if (toggle && (dataRef.current.openEvent ? dataRef.current.openEvent.type === "click" : true)) {
                  onOpenChange(false);
                }
              } else {
                onOpenChange(true);
              }
              dataRef.current.openEvent = event.nativeEvent;
            },
            onKeyDown(event) {
              pointerTypeRef.current = void 0;
              if (!keyboardHandlers) {
                return;
              }
              if (isButtonTarget(event)) {
                return;
              }
              if (event.key === " " && !isSpaceIgnored(domReference)) {
                event.preventDefault();
              }
              if (event.key === "Enter") {
                if (open) {
                  if (toggle) {
                    onOpenChange(false);
                  }
                } else {
                  onOpenChange(true);
                }
              }
            },
            onKeyUp(event) {
              if (!keyboardHandlers) {
                return;
              }
              if (isButtonTarget(event) || isSpaceIgnored(domReference)) {
                return;
              }
              if (event.key === " ") {
                if (open) {
                  if (toggle) {
                    onOpenChange(false);
                  }
                } else {
                  onOpenChange(true);
                }
              }
            }
          }
        };
      }, [enabled, dataRef, eventOption, ignoreMouse, keyboardHandlers, domReference, toggle, open, onOpenChange]);
    }, "useClick");
    __name(isEventTargetWithin, "isEventTargetWithin");
    bubbleHandlerKeys = {
      pointerdown: "onPointerDown",
      mousedown: "onMouseDown",
      click: "onClick"
    };
    captureHandlerKeys = {
      pointerdown: "onPointerDownCapture",
      mousedown: "onMouseDownCapture",
      click: "onClickCapture"
    };
    normalizeBubblesProp = /* @__PURE__ */ __name(function(bubbles) {
      var _bubbles$escapeKey, _bubbles$outsidePress;
      if (bubbles === void 0) {
        bubbles = true;
      }
      return {
        escapeKeyBubbles: typeof bubbles === "boolean" ? bubbles : (_bubbles$escapeKey = bubbles.escapeKey) != null ? _bubbles$escapeKey : true,
        outsidePressBubbles: typeof bubbles === "boolean" ? bubbles : (_bubbles$outsidePress = bubbles.outsidePress) != null ? _bubbles$outsidePress : true
      };
    }, "normalizeBubblesProp");
    useDismiss = /* @__PURE__ */ __name(function(_ref, _temp) {
      let {
        open,
        onOpenChange,
        events,
        nodeId,
        elements: {
          reference,
          domReference,
          floating
        },
        dataRef
      } = _ref;
      let {
        enabled = true,
        escapeKey = true,
        outsidePress: unstable_outsidePress = true,
        outsidePressEvent = "pointerdown",
        referencePress = false,
        referencePressEvent = "pointerdown",
        ancestorScroll = false,
        bubbles = true
      } = _temp === void 0 ? {} : _temp;
      const tree = useFloatingTree();
      const nested = useFloatingParentNodeId() != null;
      const outsidePressFn = useEvent2(typeof unstable_outsidePress === "function" ? unstable_outsidePress : () => false);
      const outsidePress = typeof unstable_outsidePress === "function" ? outsidePressFn : unstable_outsidePress;
      const insideReactTreeRef = React9.useRef(false);
      const {
        escapeKeyBubbles,
        outsidePressBubbles
      } = normalizeBubblesProp(bubbles);
      React9.useEffect(() => {
        if (!open || !enabled) {
          return;
        }
        dataRef.current.__escapeKeyBubbles = escapeKeyBubbles;
        dataRef.current.__outsidePressBubbles = outsidePressBubbles;
        function onKeyDown(event) {
          if (event.key === "Escape") {
            const children = tree ? getChildren(tree.nodesRef.current, nodeId) : [];
            if (children.length > 0) {
              let shouldDismiss = true;
              children.forEach((child) => {
                var _child$context;
                if ((_child$context = child.context) != null && _child$context.open && !child.context.dataRef.current.__escapeKeyBubbles) {
                  shouldDismiss = false;
                  return;
                }
              });
              if (!shouldDismiss) {
                return;
              }
            }
            events.emit("dismiss", {
              type: "escapeKey",
              data: {
                returnFocus: {
                  preventScroll: false
                }
              }
            });
            onOpenChange(false);
          }
        }
        __name(onKeyDown, "onKeyDown");
        function onOutsidePress(event) {
          const insideReactTree = insideReactTreeRef.current;
          insideReactTreeRef.current = false;
          if (insideReactTree) {
            return;
          }
          if (typeof outsidePress === "function" && !outsidePress(event)) {
            return;
          }
          const target = getTarget(event);
          if (isHTMLElement2(target) && floating) {
            const win = floating.ownerDocument.defaultView || window;
            const canScrollX = target.scrollWidth > target.clientWidth;
            const canScrollY = target.scrollHeight > target.clientHeight;
            let xCond = canScrollY && event.offsetX > target.clientWidth;
            if (canScrollY) {
              const isRTL = win.getComputedStyle(target).direction === "rtl";
              if (isRTL) {
                xCond = event.offsetX <= target.offsetWidth - target.clientWidth;
              }
            }
            if (xCond || canScrollX && event.offsetY > target.clientHeight) {
              return;
            }
          }
          const targetIsInsideChildren = tree && getChildren(tree.nodesRef.current, nodeId).some((node) => {
            var _node$context;
            return isEventTargetWithin(event, (_node$context = node.context) == null ? void 0 : _node$context.elements.floating);
          });
          if (isEventTargetWithin(event, floating) || isEventTargetWithin(event, domReference) || targetIsInsideChildren) {
            return;
          }
          const children = tree ? getChildren(tree.nodesRef.current, nodeId) : [];
          if (children.length > 0) {
            let shouldDismiss = true;
            children.forEach((child) => {
              var _child$context2;
              if ((_child$context2 = child.context) != null && _child$context2.open && !child.context.dataRef.current.__outsidePressBubbles) {
                shouldDismiss = false;
                return;
              }
            });
            if (!shouldDismiss) {
              return;
            }
          }
          events.emit("dismiss", {
            type: "outsidePress",
            data: {
              returnFocus: nested ? {
                preventScroll: true
              } : isVirtualClick(event) || isVirtualPointerEvent(event)
            }
          });
          onOpenChange(false);
        }
        __name(onOutsidePress, "onOutsidePress");
        function onScroll() {
          onOpenChange(false);
        }
        __name(onScroll, "onScroll");
        const doc = getDocument(floating);
        escapeKey && doc.addEventListener("keydown", onKeyDown);
        outsidePress && doc.addEventListener(outsidePressEvent, onOutsidePress);
        let ancestors = [];
        if (ancestorScroll) {
          if (isElement2(domReference)) {
            ancestors = getOverflowAncestors(domReference);
          }
          if (isElement2(floating)) {
            ancestors = ancestors.concat(getOverflowAncestors(floating));
          }
          if (!isElement2(reference) && reference && reference.contextElement) {
            ancestors = ancestors.concat(getOverflowAncestors(reference.contextElement));
          }
        }
        ancestors = ancestors.filter((ancestor) => {
          var _doc$defaultView;
          return ancestor !== ((_doc$defaultView = doc.defaultView) == null ? void 0 : _doc$defaultView.visualViewport);
        });
        ancestors.forEach((ancestor) => {
          ancestor.addEventListener("scroll", onScroll, {
            passive: true
          });
        });
        return () => {
          escapeKey && doc.removeEventListener("keydown", onKeyDown);
          outsidePress && doc.removeEventListener(outsidePressEvent, onOutsidePress);
          ancestors.forEach((ancestor) => {
            ancestor.removeEventListener("scroll", onScroll);
          });
        };
      }, [dataRef, floating, domReference, reference, escapeKey, outsidePress, outsidePressEvent, events, tree, nodeId, open, onOpenChange, ancestorScroll, enabled, escapeKeyBubbles, outsidePressBubbles, nested]);
      React9.useEffect(() => {
        insideReactTreeRef.current = false;
      }, [outsidePress, outsidePressEvent]);
      return React9.useMemo(() => {
        if (!enabled) {
          return {};
        }
        return {
          reference: {
            [bubbleHandlerKeys[referencePressEvent]]: () => {
              if (referencePress) {
                events.emit("dismiss", {
                  type: "referencePress",
                  data: {
                    returnFocus: false
                  }
                });
                onOpenChange(false);
              }
            }
          },
          floating: {
            [captureHandlerKeys[outsidePressEvent]]: () => {
              insideReactTreeRef.current = true;
            }
          }
        };
      }, [enabled, events, referencePress, outsidePressEvent, referencePressEvent, onOpenChange]);
    }, "useDismiss");
    useFocus = /* @__PURE__ */ __name(function(_ref, _temp) {
      let {
        open,
        onOpenChange,
        dataRef,
        events,
        refs,
        elements: {
          floating,
          domReference
        }
      } = _ref;
      let {
        enabled = true,
        keyboardOnly = true
      } = _temp === void 0 ? {} : _temp;
      const pointerTypeRef = React9.useRef("");
      const blockFocusRef = React9.useRef(false);
      const timeoutRef = React9.useRef();
      React9.useEffect(() => {
        if (!enabled) {
          return;
        }
        const doc = getDocument(floating);
        const win = doc.defaultView || window;
        function onBlur() {
          if (!open && isHTMLElement2(domReference) && domReference === activeElement$1(getDocument(domReference))) {
            blockFocusRef.current = true;
          }
        }
        __name(onBlur, "onBlur");
        win.addEventListener("blur", onBlur);
        return () => {
          win.removeEventListener("blur", onBlur);
        };
      }, [floating, domReference, open, enabled]);
      React9.useEffect(() => {
        if (!enabled) {
          return;
        }
        function onDismiss(payload) {
          if (payload.type === "referencePress" || payload.type === "escapeKey") {
            blockFocusRef.current = true;
          }
        }
        __name(onDismiss, "onDismiss");
        events.on("dismiss", onDismiss);
        return () => {
          events.off("dismiss", onDismiss);
        };
      }, [events, enabled]);
      React9.useEffect(() => {
        return () => {
          clearTimeout(timeoutRef.current);
        };
      }, []);
      return React9.useMemo(() => {
        if (!enabled) {
          return {};
        }
        return {
          reference: {
            onPointerDown(_ref2) {
              let {
                pointerType
              } = _ref2;
              pointerTypeRef.current = pointerType;
              blockFocusRef.current = !!(pointerType && keyboardOnly);
            },
            onMouseLeave() {
              blockFocusRef.current = false;
            },
            onFocus(event) {
              var _dataRef$current$open;
              if (blockFocusRef.current) {
                return;
              }
              if (event.type === "focus" && ((_dataRef$current$open = dataRef.current.openEvent) == null ? void 0 : _dataRef$current$open.type) === "mousedown" && dataRef.current.openEvent && isEventTargetWithin(dataRef.current.openEvent, domReference)) {
                return;
              }
              dataRef.current.openEvent = event.nativeEvent;
              onOpenChange(true);
            },
            onBlur(event) {
              blockFocusRef.current = false;
              const relatedTarget = event.relatedTarget;
              const movedToFocusGuard = isElement2(relatedTarget) && relatedTarget.hasAttribute("data-floating-ui-focus-guard") && relatedTarget.getAttribute("data-type") === "outside";
              timeoutRef.current = setTimeout(() => {
                if (contains(refs.floating.current, relatedTarget) || contains(domReference, relatedTarget) || movedToFocusGuard) {
                  return;
                }
                onOpenChange(false);
              });
            }
          }
        };
      }, [enabled, keyboardOnly, domReference, refs, dataRef, onOpenChange]);
    }, "useFocus");
    isPreventScrollSupported = false;
    ARROW_UP = "ArrowUp";
    ARROW_DOWN = "ArrowDown";
    ARROW_LEFT = "ArrowLeft";
    ARROW_RIGHT = "ArrowRight";
    __name(isDifferentRow, "isDifferentRow");
    __name(isIndexOutOfBounds, "isIndexOutOfBounds");
    __name(findNonDisabledIndex, "findNonDisabledIndex");
    __name(doSwitch, "doSwitch");
    __name(isMainOrientationKey, "isMainOrientationKey");
    __name(isMainOrientationToEndKey, "isMainOrientationToEndKey");
    __name(isCrossOrientationOpenKey, "isCrossOrientationOpenKey");
    __name(isCrossOrientationCloseKey, "isCrossOrientationCloseKey");
    __name(getMinIndex, "getMinIndex");
    __name(getMaxIndex, "getMaxIndex");
    useListNavigation = /* @__PURE__ */ __name(function(_ref, _temp2) {
      let {
        open,
        onOpenChange,
        refs,
        elements: {
          domReference
        }
      } = _ref;
      let {
        listRef,
        activeIndex,
        onNavigate: unstable_onNavigate = /* @__PURE__ */ __name(() => {
        }, "unstable_onNavigate"),
        enabled = true,
        selectedIndex = null,
        allowEscape = false,
        loop = false,
        nested = false,
        rtl = false,
        virtual = false,
        focusItemOnOpen = "auto",
        focusItemOnHover = true,
        openOnArrowKeyDown = true,
        disabledIndices = void 0,
        orientation = "vertical",
        cols = 1,
        scrollItemIntoView = true
      } = _temp2 === void 0 ? {
        listRef: {
          current: []
        },
        activeIndex: null,
        onNavigate: () => {
        }
      } : _temp2;
      if (process.env.NODE_ENV !== "production") {
        if (allowEscape) {
          if (!loop) {
            console.warn(["Floating UI: `useListNavigation` looping must be enabled to allow", "escaping."].join(" "));
          }
          if (!virtual) {
            console.warn(["Floating UI: `useListNavigation` must be virtual to allow", "escaping."].join(" "));
          }
        }
        if (orientation === "vertical" && cols > 1) {
          console.warn(["Floating UI: In grid list navigation mode (`cols` > 1), the", '`orientation` should be either "horizontal" or "both".'].join(" "));
        }
      }
      const parentId = useFloatingParentNodeId();
      const tree = useFloatingTree();
      const onNavigate = useEvent2(unstable_onNavigate);
      const focusItemOnOpenRef = React9.useRef(focusItemOnOpen);
      const indexRef = React9.useRef(selectedIndex != null ? selectedIndex : -1);
      const keyRef = React9.useRef(null);
      const isPointerModalityRef = React9.useRef(true);
      const previousOnNavigateRef = React9.useRef(onNavigate);
      const previousOpenRef = React9.useRef(open);
      const forceSyncFocus = React9.useRef(false);
      const forceScrollIntoViewRef = React9.useRef(false);
      const disabledIndicesRef = useLatestRef2(disabledIndices);
      const latestOpenRef = useLatestRef2(open);
      const scrollItemIntoViewRef = useLatestRef2(scrollItemIntoView);
      const [activeId, setActiveId] = React9.useState();
      const focusItem = React9.useCallback(function(listRef2, indexRef2, forceScrollIntoView) {
        if (forceScrollIntoView === void 0) {
          forceScrollIntoView = false;
        }
        const item2 = listRef2.current[indexRef2.current];
        if (virtual) {
          setActiveId(item2 == null ? void 0 : item2.id);
        } else {
          enqueueFocus(item2, {
            preventScroll: true,
            // Mac Safari does not move the virtual cursor unless the focus call
            // is sync. However, for the very first focus call, we need to wait
            // for the position to be ready in order to prevent unwanted
            // scrolling. This means the virtual cursor will not move to the first
            // item when first opening the floating element, but will on
            // subsequent calls. `preventScroll` is supported in modern Safari,
            // so we can use that instead.
            // iOS Safari must be async or the first item will not be focused.
            sync: isMac() && isSafari() ? isPreventScrollSupported || forceSyncFocus.current : false
          });
        }
        requestAnimationFrame(() => {
          const scrollIntoViewOptions = scrollItemIntoViewRef.current;
          const shouldScrollIntoView = scrollIntoViewOptions && item2 && (forceScrollIntoView || !isPointerModalityRef.current);
          if (shouldScrollIntoView) {
            item2.scrollIntoView == null ? void 0 : item2.scrollIntoView(typeof scrollIntoViewOptions === "boolean" ? {
              block: "nearest",
              inline: "nearest"
            } : scrollIntoViewOptions);
          }
        });
      }, [virtual, scrollItemIntoViewRef]);
      index2(() => {
        document.createElement("div").focus({
          get preventScroll() {
            isPreventScrollSupported = true;
            return false;
          }
        });
      }, []);
      index2(() => {
        if (!enabled) {
          return;
        }
        if (open) {
          if (focusItemOnOpenRef.current && selectedIndex != null) {
            forceScrollIntoViewRef.current = true;
            onNavigate(selectedIndex);
          }
        } else if (previousOpenRef.current) {
          indexRef.current = -1;
          previousOnNavigateRef.current(null);
        }
      }, [enabled, open, selectedIndex, onNavigate]);
      index2(() => {
        if (!enabled) {
          return;
        }
        if (open) {
          if (activeIndex == null) {
            forceSyncFocus.current = false;
            if (selectedIndex != null) {
              return;
            }
            if (previousOpenRef.current) {
              indexRef.current = -1;
              focusItem(listRef, indexRef);
            }
            if (!previousOpenRef.current && focusItemOnOpenRef.current && (keyRef.current != null || focusItemOnOpenRef.current === true && keyRef.current == null)) {
              indexRef.current = keyRef.current == null || isMainOrientationToEndKey(keyRef.current, orientation, rtl) || nested ? getMinIndex(listRef, disabledIndicesRef.current) : getMaxIndex(listRef, disabledIndicesRef.current);
              onNavigate(indexRef.current);
            }
          } else if (!isIndexOutOfBounds(listRef, activeIndex)) {
            indexRef.current = activeIndex;
            focusItem(listRef, indexRef, forceScrollIntoViewRef.current);
            forceScrollIntoViewRef.current = false;
          }
        }
      }, [enabled, open, activeIndex, selectedIndex, nested, listRef, orientation, rtl, onNavigate, focusItem, disabledIndicesRef]);
      index2(() => {
        if (!enabled) {
          return;
        }
        if (previousOpenRef.current && !open) {
          var _tree$nodesRef$curren, _tree$nodesRef$curren2;
          const parentFloating = tree == null ? void 0 : (_tree$nodesRef$curren = tree.nodesRef.current.find((node) => node.id === parentId)) == null ? void 0 : (_tree$nodesRef$curren2 = _tree$nodesRef$curren.context) == null ? void 0 : _tree$nodesRef$curren2.elements.floating;
          if (parentFloating && !contains(parentFloating, activeElement$1(getDocument(parentFloating)))) {
            parentFloating.focus({
              preventScroll: true
            });
          }
        }
      }, [enabled, open, tree, parentId]);
      index2(() => {
        keyRef.current = null;
        previousOnNavigateRef.current = onNavigate;
        previousOpenRef.current = open;
      });
      const hasActiveIndex = activeIndex != null;
      const item = React9.useMemo(() => {
        function syncCurrentTarget(currentTarget) {
          if (!open)
            return;
          const index3 = listRef.current.indexOf(currentTarget);
          if (index3 !== -1) {
            onNavigate(index3);
          }
        }
        __name(syncCurrentTarget, "syncCurrentTarget");
        const props = {
          onFocus(_ref2) {
            let {
              currentTarget
            } = _ref2;
            syncCurrentTarget(currentTarget);
          },
          onClick: (_ref3) => {
            let {
              currentTarget
            } = _ref3;
            return currentTarget.focus({
              preventScroll: true
            });
          },
          // Safari
          ...focusItemOnHover && {
            onMouseMove(_ref4) {
              let {
                currentTarget
              } = _ref4;
              syncCurrentTarget(currentTarget);
            },
            onPointerLeave() {
              if (!isPointerModalityRef.current) {
                return;
              }
              indexRef.current = -1;
              focusItem(listRef, indexRef);
              (0, import_react_dom.flushSync)(() => onNavigate(null));
              if (!virtual) {
                var _refs$floating$curren;
                (_refs$floating$curren = refs.floating.current) == null ? void 0 : _refs$floating$curren.focus({
                  preventScroll: true
                });
              }
            }
          }
        };
        return props;
      }, [open, refs, focusItem, focusItemOnHover, listRef, onNavigate, virtual]);
      return React9.useMemo(() => {
        if (!enabled) {
          return {};
        }
        const disabledIndices2 = disabledIndicesRef.current;
        function onKeyDown(event) {
          isPointerModalityRef.current = false;
          forceSyncFocus.current = true;
          if (!latestOpenRef.current && event.currentTarget === refs.floating.current) {
            return;
          }
          if (nested && isCrossOrientationCloseKey(event.key, orientation, rtl)) {
            stopEvent(event);
            onOpenChange(false);
            if (isHTMLElement2(domReference)) {
              domReference.focus();
            }
            return;
          }
          const currentIndex = indexRef.current;
          const minIndex = getMinIndex(listRef, disabledIndices2);
          const maxIndex = getMaxIndex(listRef, disabledIndices2);
          if (event.key === "Home") {
            indexRef.current = minIndex;
            onNavigate(indexRef.current);
          }
          if (event.key === "End") {
            indexRef.current = maxIndex;
            onNavigate(indexRef.current);
          }
          if (cols > 1) {
            const prevIndex = indexRef.current;
            if (event.key === ARROW_UP) {
              stopEvent(event);
              if (prevIndex === -1) {
                indexRef.current = maxIndex;
              } else {
                indexRef.current = findNonDisabledIndex(listRef, {
                  startingIndex: prevIndex,
                  amount: cols,
                  decrement: true,
                  disabledIndices: disabledIndices2
                });
                if (loop && (prevIndex - cols < minIndex || indexRef.current < 0)) {
                  const col = prevIndex % cols;
                  const maxCol = maxIndex % cols;
                  const offset2 = maxIndex - (maxCol - col);
                  if (maxCol === col) {
                    indexRef.current = maxIndex;
                  } else {
                    indexRef.current = maxCol > col ? offset2 : offset2 - cols;
                  }
                }
              }
              if (isIndexOutOfBounds(listRef, indexRef.current)) {
                indexRef.current = prevIndex;
              }
              onNavigate(indexRef.current);
            }
            if (event.key === ARROW_DOWN) {
              stopEvent(event);
              if (prevIndex === -1) {
                indexRef.current = minIndex;
              } else {
                indexRef.current = findNonDisabledIndex(listRef, {
                  startingIndex: prevIndex,
                  amount: cols,
                  disabledIndices: disabledIndices2
                });
                if (loop && prevIndex + cols > maxIndex) {
                  indexRef.current = findNonDisabledIndex(listRef, {
                    startingIndex: prevIndex % cols - cols,
                    amount: cols,
                    disabledIndices: disabledIndices2
                  });
                }
              }
              if (isIndexOutOfBounds(listRef, indexRef.current)) {
                indexRef.current = prevIndex;
              }
              onNavigate(indexRef.current);
            }
            if (orientation === "both") {
              const prevRow = Math.floor(prevIndex / cols);
              if (event.key === ARROW_RIGHT) {
                stopEvent(event);
                if (prevIndex % cols !== cols - 1) {
                  indexRef.current = findNonDisabledIndex(listRef, {
                    startingIndex: prevIndex,
                    disabledIndices: disabledIndices2
                  });
                  if (loop && isDifferentRow(indexRef.current, cols, prevRow)) {
                    indexRef.current = findNonDisabledIndex(listRef, {
                      startingIndex: prevIndex - prevIndex % cols - 1,
                      disabledIndices: disabledIndices2
                    });
                  }
                } else if (loop) {
                  indexRef.current = findNonDisabledIndex(listRef, {
                    startingIndex: prevIndex - prevIndex % cols - 1,
                    disabledIndices: disabledIndices2
                  });
                }
                if (isDifferentRow(indexRef.current, cols, prevRow)) {
                  indexRef.current = prevIndex;
                }
              }
              if (event.key === ARROW_LEFT) {
                stopEvent(event);
                if (prevIndex % cols !== 0) {
                  indexRef.current = findNonDisabledIndex(listRef, {
                    startingIndex: prevIndex,
                    disabledIndices: disabledIndices2,
                    decrement: true
                  });
                  if (loop && isDifferentRow(indexRef.current, cols, prevRow)) {
                    indexRef.current = findNonDisabledIndex(listRef, {
                      startingIndex: prevIndex + (cols - prevIndex % cols),
                      decrement: true,
                      disabledIndices: disabledIndices2
                    });
                  }
                } else if (loop) {
                  indexRef.current = findNonDisabledIndex(listRef, {
                    startingIndex: prevIndex + (cols - prevIndex % cols),
                    decrement: true,
                    disabledIndices: disabledIndices2
                  });
                }
                if (isDifferentRow(indexRef.current, cols, prevRow)) {
                  indexRef.current = prevIndex;
                }
              }
              const lastRow = Math.floor(maxIndex / cols) === prevRow;
              if (isIndexOutOfBounds(listRef, indexRef.current)) {
                if (loop && lastRow) {
                  indexRef.current = event.key === ARROW_LEFT ? maxIndex : findNonDisabledIndex(listRef, {
                    startingIndex: prevIndex - prevIndex % cols - 1,
                    disabledIndices: disabledIndices2
                  });
                } else {
                  indexRef.current = prevIndex;
                }
              }
              onNavigate(indexRef.current);
              return;
            }
          }
          if (isMainOrientationKey(event.key, orientation)) {
            stopEvent(event);
            if (open && !virtual && activeElement$1(event.currentTarget.ownerDocument) === event.currentTarget) {
              indexRef.current = isMainOrientationToEndKey(event.key, orientation, rtl) ? minIndex : maxIndex;
              onNavigate(indexRef.current);
              return;
            }
            if (isMainOrientationToEndKey(event.key, orientation, rtl)) {
              if (loop) {
                indexRef.current = currentIndex >= maxIndex ? allowEscape && currentIndex !== listRef.current.length ? -1 : minIndex : findNonDisabledIndex(listRef, {
                  startingIndex: currentIndex,
                  disabledIndices: disabledIndices2
                });
              } else {
                indexRef.current = Math.min(maxIndex, findNonDisabledIndex(listRef, {
                  startingIndex: currentIndex,
                  disabledIndices: disabledIndices2
                }));
              }
            } else {
              if (loop) {
                indexRef.current = currentIndex <= minIndex ? allowEscape && currentIndex !== -1 ? listRef.current.length : maxIndex : findNonDisabledIndex(listRef, {
                  startingIndex: currentIndex,
                  decrement: true,
                  disabledIndices: disabledIndices2
                });
              } else {
                indexRef.current = Math.max(minIndex, findNonDisabledIndex(listRef, {
                  startingIndex: currentIndex,
                  decrement: true,
                  disabledIndices: disabledIndices2
                }));
              }
            }
            if (isIndexOutOfBounds(listRef, indexRef.current)) {
              onNavigate(null);
            } else {
              onNavigate(indexRef.current);
            }
          }
        }
        __name(onKeyDown, "onKeyDown");
        function checkVirtualMouse(event) {
          if (focusItemOnOpen === "auto" && isVirtualClick(event.nativeEvent)) {
            focusItemOnOpenRef.current = true;
          }
        }
        __name(checkVirtualMouse, "checkVirtualMouse");
        function checkVirtualPointer(event) {
          focusItemOnOpenRef.current = focusItemOnOpen;
          if (focusItemOnOpen === "auto" && isVirtualPointerEvent(event.nativeEvent)) {
            focusItemOnOpenRef.current = true;
          }
        }
        __name(checkVirtualPointer, "checkVirtualPointer");
        const ariaActiveDescendantProp = virtual && open && hasActiveIndex && {
          "aria-activedescendant": activeId
        };
        return {
          reference: {
            ...ariaActiveDescendantProp,
            onKeyDown(event) {
              isPointerModalityRef.current = false;
              const isArrowKey = event.key.indexOf("Arrow") === 0;
              if (virtual && open) {
                return onKeyDown(event);
              }
              if (!open && !openOnArrowKeyDown && isArrowKey) {
                return;
              }
              const isNavigationKey = isArrowKey || event.key === "Enter" || event.key === " " || event.key === "";
              if (isNavigationKey) {
                keyRef.current = event.key;
              }
              if (nested) {
                if (isCrossOrientationOpenKey(event.key, orientation, rtl)) {
                  stopEvent(event);
                  if (open) {
                    indexRef.current = getMinIndex(listRef, disabledIndices2);
                    onNavigate(indexRef.current);
                  } else {
                    onOpenChange(true);
                  }
                }
                return;
              }
              if (isMainOrientationKey(event.key, orientation)) {
                if (selectedIndex != null) {
                  indexRef.current = selectedIndex;
                }
                stopEvent(event);
                if (!open && openOnArrowKeyDown) {
                  onOpenChange(true);
                } else {
                  onKeyDown(event);
                }
                if (open) {
                  onNavigate(indexRef.current);
                }
              }
            },
            onFocus() {
              if (open) {
                onNavigate(null);
              }
            },
            onPointerDown: checkVirtualPointer,
            onMouseDown: checkVirtualMouse,
            onClick: checkVirtualMouse
          },
          floating: {
            "aria-orientation": orientation === "both" ? void 0 : orientation,
            ...ariaActiveDescendantProp,
            onKeyDown,
            onPointerMove() {
              isPointerModalityRef.current = true;
            }
          },
          item
        };
      }, [domReference, refs, activeId, disabledIndicesRef, latestOpenRef, listRef, enabled, orientation, rtl, virtual, open, hasActiveIndex, nested, selectedIndex, openOnArrowKeyDown, allowEscape, cols, loop, focusItemOnOpen, onNavigate, onOpenChange, item]);
    }, "useListNavigation");
    __name(useMergeRefs, "useMergeRefs");
    useRole = /* @__PURE__ */ __name(function(_ref, _temp) {
      let {
        open
      } = _ref;
      let {
        enabled = true,
        role = "dialog"
      } = _temp === void 0 ? {} : _temp;
      const rootId = useId3();
      const referenceId = useId3();
      return React9.useMemo(() => {
        const floatingProps = {
          id: rootId,
          role
        };
        if (!enabled) {
          return {};
        }
        if (role === "tooltip") {
          return {
            reference: {
              "aria-describedby": open ? rootId : void 0
            },
            floating: floatingProps
          };
        }
        return {
          reference: {
            "aria-expanded": open ? "true" : "false",
            "aria-haspopup": role === "alertdialog" ? "dialog" : role,
            "aria-controls": open ? rootId : void 0,
            ...role === "listbox" && {
              role: "combobox"
            },
            ...role === "menu" && {
              id: referenceId
            }
          },
          floating: {
            ...floatingProps,
            ...role === "menu" && {
              "aria-labelledby": referenceId
            }
          }
        };
      }, [enabled, role, open, rootId, referenceId]);
    }, "useRole");
    camelCaseToKebabCase = /* @__PURE__ */ __name((str) => str.replace(/[A-Z]+(?![a-z])|[A-Z]/g, ($, ofs) => (ofs ? "-" : "") + $.toLowerCase()), "camelCaseToKebabCase");
    __name(useDelayUnmount, "useDelayUnmount");
    __name(useTransitionStatus, "useTransitionStatus");
    __name(useTransitionStyles, "useTransitionStyles");
    useTypeahead = /* @__PURE__ */ __name(function(_ref, _temp) {
      var _ref2;
      let {
        open,
        dataRef,
        refs
      } = _ref;
      let {
        listRef,
        activeIndex,
        onMatch: unstable_onMatch = /* @__PURE__ */ __name(() => {
        }, "unstable_onMatch"),
        enabled = true,
        findMatch = null,
        resetMs = 1e3,
        ignoreKeys = [],
        selectedIndex = null
      } = _temp === void 0 ? {
        listRef: {
          current: []
        },
        activeIndex: null
      } : _temp;
      const timeoutIdRef = React9.useRef();
      const stringRef = React9.useRef("");
      const prevIndexRef = React9.useRef((_ref2 = selectedIndex != null ? selectedIndex : activeIndex) != null ? _ref2 : -1);
      const matchIndexRef = React9.useRef(null);
      const onMatch = useEvent2(unstable_onMatch);
      const findMatchRef = useLatestRef2(findMatch);
      const ignoreKeysRef = useLatestRef2(ignoreKeys);
      index2(() => {
        if (open) {
          clearTimeout(timeoutIdRef.current);
          matchIndexRef.current = null;
          stringRef.current = "";
        }
      }, [open]);
      index2(() => {
        if (open && stringRef.current === "") {
          var _ref3;
          prevIndexRef.current = (_ref3 = selectedIndex != null ? selectedIndex : activeIndex) != null ? _ref3 : -1;
        }
      }, [open, selectedIndex, activeIndex]);
      return React9.useMemo(() => {
        if (!enabled) {
          return {};
        }
        function onKeyDown(event) {
          var _refs$floating$curren;
          const target = getTarget(event.nativeEvent);
          if (isElement2(target) && (activeElement$1(getDocument(target)) !== event.currentTarget ? (_refs$floating$curren = refs.floating.current) != null && _refs$floating$curren.contains(target) ? target.closest('[role="dialog"],[role="menu"],[role="listbox"],[role="tree"],[role="grid"]') !== event.currentTarget : false : !event.currentTarget.contains(target))) {
            return;
          }
          if (stringRef.current.length > 0 && stringRef.current[0] !== " ") {
            dataRef.current.typing = true;
            if (event.key === " ") {
              stopEvent(event);
            }
          }
          const listContent = listRef.current;
          if (listContent == null || ignoreKeysRef.current.includes(event.key) || // Character key.
          event.key.length !== 1 || // Modifier key.
          event.ctrlKey || event.metaKey || event.altKey) {
            return;
          }
          const allowRapidSuccessionOfFirstLetter = listContent.every((text) => {
            var _text$, _text$2;
            return text ? ((_text$ = text[0]) == null ? void 0 : _text$.toLocaleLowerCase()) !== ((_text$2 = text[1]) == null ? void 0 : _text$2.toLocaleLowerCase()) : true;
          });
          if (allowRapidSuccessionOfFirstLetter && stringRef.current === event.key) {
            stringRef.current = "";
            prevIndexRef.current = matchIndexRef.current;
          }
          stringRef.current += event.key;
          clearTimeout(timeoutIdRef.current);
          timeoutIdRef.current = setTimeout(() => {
            stringRef.current = "";
            prevIndexRef.current = matchIndexRef.current;
            dataRef.current.typing = false;
          }, resetMs);
          const prevIndex = prevIndexRef.current;
          const orderedList = [...listContent.slice((prevIndex || 0) + 1), ...listContent.slice(0, (prevIndex || 0) + 1)];
          const str = findMatchRef.current ? findMatchRef.current(orderedList, stringRef.current) : orderedList.find((text) => (text == null ? void 0 : text.toLocaleLowerCase().indexOf(stringRef.current.toLocaleLowerCase())) === 0);
          const index3 = str ? listContent.indexOf(str) : -1;
          if (index3 !== -1) {
            onMatch(index3);
            matchIndexRef.current = index3;
          }
        }
        __name(onKeyDown, "onKeyDown");
        return {
          reference: {
            onKeyDown
          },
          floating: {
            onKeyDown
          }
        };
      }, [enabled, dataRef, listRef, resetMs, ignoreKeysRef, findMatchRef, onMatch, refs]);
    }, "useTypeahead");
    __name(getArgsWithCustomFloatingHeight, "getArgsWithCustomFloatingHeight");
    inner = /* @__PURE__ */ __name((props) => ({
      name: "inner",
      options: props,
      async fn(state) {
        const {
          listRef,
          overflowRef,
          onFallbackChange,
          offset: innerOffset = 0,
          index: index3 = 0,
          minItemsVisible = 4,
          referenceOverflowThreshold = 0,
          scrollRef,
          ...detectOverflowOptions
        } = props;
        const {
          rects,
          elements: {
            floating
          }
        } = state;
        const item = listRef.current[index3];
        if (process.env.NODE_ENV !== "production") {
          if (!state.placement.startsWith("bottom")) {
            console.warn(['Floating UI: `placement` side must be "bottom" when using the', "`inner` middleware."].join(" "));
          }
        }
        if (!item) {
          return {};
        }
        const nextArgs = {
          ...state,
          ...await offset(-item.offsetTop - rects.reference.height / 2 - item.offsetHeight / 2 - innerOffset).fn(state)
        };
        const el = (scrollRef == null ? void 0 : scrollRef.current) || floating;
        const overflow = await detectOverflow(getArgsWithCustomFloatingHeight(nextArgs, el.scrollHeight), detectOverflowOptions);
        const refOverflow = await detectOverflow(nextArgs, {
          ...detectOverflowOptions,
          elementContext: "reference"
        });
        const diffY = Math.max(0, overflow.top);
        const nextY = nextArgs.y + diffY;
        const maxHeight = Math.max(0, el.scrollHeight - diffY - Math.max(0, overflow.bottom));
        el.style.maxHeight = maxHeight + "px";
        el.scrollTop = diffY;
        if (onFallbackChange) {
          if (el.offsetHeight < item.offsetHeight * Math.min(minItemsVisible, listRef.current.length - 1) - 1 || refOverflow.top >= -referenceOverflowThreshold || refOverflow.bottom >= -referenceOverflowThreshold) {
            (0, import_react_dom.flushSync)(() => onFallbackChange(true));
          } else {
            (0, import_react_dom.flushSync)(() => onFallbackChange(false));
          }
        }
        if (overflowRef) {
          overflowRef.current = await detectOverflow(getArgsWithCustomFloatingHeight({
            ...nextArgs,
            y: nextY
          }, el.offsetHeight), detectOverflowOptions);
        }
        return {
          y: nextY
        };
      }
    }), "inner");
    useInnerOffset = /* @__PURE__ */ __name((_ref, _ref2) => {
      let {
        open,
        elements
      } = _ref;
      let {
        enabled = true,
        overflowRef,
        scrollRef,
        onChange: unstable_onChange
      } = _ref2;
      const onChange = useEvent2(unstable_onChange);
      const controlledScrollingRef = React9.useRef(false);
      const prevScrollTopRef = React9.useRef(null);
      const initialOverflowRef = React9.useRef(null);
      React9.useEffect(() => {
        if (!enabled) {
          return;
        }
        function onWheel(e) {
          if (e.ctrlKey || !el || overflowRef.current == null) {
            return;
          }
          const dY = e.deltaY;
          const isAtTop = overflowRef.current.top >= -0.5;
          const isAtBottom = overflowRef.current.bottom >= -0.5;
          const remainingScroll = el.scrollHeight - el.clientHeight;
          const sign = dY < 0 ? -1 : 1;
          const method = dY < 0 ? "max" : "min";
          if (el.scrollHeight <= el.clientHeight) {
            return;
          }
          if (!isAtTop && dY > 0 || !isAtBottom && dY < 0) {
            e.preventDefault();
            (0, import_react_dom.flushSync)(() => {
              onChange((d) => d + Math[method](dY, remainingScroll * sign));
            });
          } else if (/firefox/i.test(getUserAgent())) {
            el.scrollTop += dY;
          }
        }
        __name(onWheel, "onWheel");
        const el = (scrollRef == null ? void 0 : scrollRef.current) || elements.floating;
        if (open && el) {
          el.addEventListener("wheel", onWheel);
          requestAnimationFrame(() => {
            prevScrollTopRef.current = el.scrollTop;
            if (overflowRef.current != null) {
              initialOverflowRef.current = {
                ...overflowRef.current
              };
            }
          });
          return () => {
            prevScrollTopRef.current = null;
            initialOverflowRef.current = null;
            el.removeEventListener("wheel", onWheel);
          };
        }
      }, [enabled, open, elements.floating, overflowRef, scrollRef, onChange]);
      return React9.useMemo(() => {
        if (!enabled) {
          return {};
        }
        return {
          floating: {
            onKeyDown() {
              controlledScrollingRef.current = true;
            },
            onWheel() {
              controlledScrollingRef.current = false;
            },
            onPointerMove() {
              controlledScrollingRef.current = false;
            },
            onScroll() {
              const el = (scrollRef == null ? void 0 : scrollRef.current) || elements.floating;
              if (!overflowRef.current || !el || !controlledScrollingRef.current) {
                return;
              }
              if (prevScrollTopRef.current !== null) {
                const scrollDiff = el.scrollTop - prevScrollTopRef.current;
                if (overflowRef.current.bottom < -0.5 && scrollDiff < -1 || overflowRef.current.top < -0.5 && scrollDiff > 1) {
                  (0, import_react_dom.flushSync)(() => onChange((d) => d + scrollDiff));
                }
              }
              requestAnimationFrame(() => {
                prevScrollTopRef.current = el.scrollTop;
              });
            }
          }
        };
      }, [enabled, overflowRef, elements.floating, scrollRef, onChange]);
    }, "useInnerOffset");
    __name(isPointInPolygon, "isPointInPolygon");
    __name(isInside, "isInside");
    __name(safePolygon, "safePolygon");
    __name(useFloating3, "useFloating");
    __name(mergeProps, "mergeProps");
    useInteractions = /* @__PURE__ */ __name(function(propsList) {
      if (propsList === void 0) {
        propsList = [];
      }
      const deps = propsList;
      const getReferenceProps = React9.useCallback(
        (userProps) => mergeProps(userProps, propsList, "reference"),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        deps
      );
      const getFloatingProps = React9.useCallback(
        (userProps) => mergeProps(userProps, propsList, "floating"),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        deps
      );
      const getItemProps = React9.useCallback(
        (userProps) => mergeProps(userProps, propsList, "item"),
        // Granularly check for `item` changes, because the `getItemProps` getter
        // should be as referentially stable as possible since it may be passed as
        // a prop to many components. All `item` key values must therefore be
        // memoized.
        // eslint-disable-next-line react-hooks/exhaustive-deps
        propsList.map((key) => key == null ? void 0 : key.item)
      );
      return React9.useMemo(() => ({
        getReferenceProps,
        getFloatingProps,
        getItemProps
      }), [getReferenceProps, getFloatingProps, getItemProps]);
    }, "useInteractions");
  }
});

// node_modules/@tamagui/popover/dist/cjs/useFloatingContext.js
var require_useFloatingContext = __commonJS({
  "node_modules/@tamagui/popover/dist/cjs/useFloatingContext.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var useFloatingContext_exports = {};
    __export2(useFloatingContext_exports, {
      useFloatingContext: () => useFloatingContext
    });
    module2.exports = __toCommonJS2(useFloatingContext_exports);
    var import_react13 = (init_floating_ui_react_esm(), __toCommonJS(floating_ui_react_esm_exports));
    var import_react22 = require("react");
    var useFloatingContext = /* @__PURE__ */ __name(({ open, setOpen, breakpointActive }) => (0, import_react22.useCallback)(
      (props) => {
        const floating = (0, import_react13.useFloating)({
          ...props,
          open,
          onOpenChange: setOpen
        });
        const { getReferenceProps, getFloatingProps } = (0, import_react13.useInteractions)([
          // useFocus(floating.context, {
          //   enabled: !breakpointActive,
          //   keyboardOnly: true,
          // }),
          (0, import_react13.useRole)(floating.context, { role: "dialog" }),
          (0, import_react13.useDismiss)(floating.context, {
            enabled: !breakpointActive
          })
        ]);
        return {
          ...floating,
          getReferenceProps,
          getFloatingProps
        };
      },
      [open, setOpen, breakpointActive]
    ), "useFloatingContext");
  }
});

// node_modules/@tamagui/popover/dist/cjs/Popover.js
var require_Popover = __commonJS({
  "node_modules/@tamagui/popover/dist/cjs/Popover.js"(exports, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      // If the importer is in node compatibility mode or this is not an ESM
      // file that has been converted to a CommonJS file using a Babel-
      // compatible transform (i.e. "__esModule" has not been set), then set
      // "default" to the CommonJS "module.exports" for node compatibility.
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var Popover_exports = {};
    __export2(Popover_exports, {
      Popover: () => Popover,
      PopoverAnchor: () => PopoverAnchor,
      PopoverArrow: () => PopoverArrow,
      PopoverClose: () => PopoverClose,
      PopoverContent: () => PopoverContent,
      PopoverTrigger: () => PopoverTrigger,
      __PopoverProviderInternal: () => __PopoverProviderInternal,
      createPopoverScope: () => createPopoverScope,
      usePopoverScope: () => usePopoverScope
    });
    module2.exports = __toCommonJS2(Popover_exports);
    var import_jsx_runtime13 = require("react/jsx-runtime");
    var import_polyfill_dev = require_polyfill_dev();
    var import_adapt2 = require_cjs();
    var import_animate_presence2 = require_cjs5();
    var import_aria_hidden3 = require_cjs6();
    var import_compose_refs3 = require_cjs2();
    var import_core30 = require("@tamagui/core-node");
    var import_create_context5 = require_cjs3();
    var import_floating = require_cjs31();
    var import_focus_scope2 = require_cjs9();
    var import_popper = require_cjs32();
    var import_portal3 = require_cjs13();
    var import_remove_scroll2 = require_cjs14();
    var import_sheet2 = require_cjs18();
    var import_stacks9 = require_cjs12();
    var import_use_controllable_state2 = require_cjs16();
    var React13 = __toESM2(require("react"));
    var import_react_native6 = require("react-native-web-lite");
    var import_useFloatingContext = require_useFloatingContext();
    var POPOVER_NAME = "Popover";
    var [createPopoverContext, createPopoverScopeInternal] = (0, import_create_context5.createContextScope)(
      POPOVER_NAME,
      [import_popper.createPopperScope]
    );
    var usePopoverScope = (0, import_popper.createPopperScope)();
    var createPopoverScope = createPopoverScopeInternal;
    var [PopoverProviderInternal, usePopoverInternalContext] = createPopoverContext(POPOVER_NAME);
    var __PopoverProviderInternal = PopoverProviderInternal;
    var ANCHOR_NAME = "PopoverAnchor";
    var PopoverAnchor = React13.forwardRef(
      (props, forwardedRef) => {
        const { __scopePopover, ...anchorProps } = props;
        const context = usePopoverInternalContext(ANCHOR_NAME, __scopePopover);
        const popperScope = usePopoverScope(__scopePopover);
        const { onCustomAnchorAdd, onCustomAnchorRemove } = context;
        React13.useEffect(() => {
          onCustomAnchorAdd();
          return () => onCustomAnchorRemove();
        }, [onCustomAnchorAdd, onCustomAnchorRemove]);
        return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_popper.PopperAnchor, { ...popperScope, ...anchorProps, ref: forwardedRef });
      }
    );
    PopoverAnchor.displayName = ANCHOR_NAME;
    var TRIGGER_NAME3 = "PopoverTrigger";
    var PopoverTrigger = React13.forwardRef((props, forwardedRef) => {
      const { __scopePopover, ...triggerProps } = props;
      const context = usePopoverInternalContext(TRIGGER_NAME3, __scopePopover);
      const popperScope = usePopoverScope(__scopePopover);
      const composedTriggerRef = (0, import_compose_refs3.useComposedRefs)(forwardedRef, context.triggerRef);
      const trigger = /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
        import_stacks9.YStack,
        {
          "aria-haspopup": "dialog",
          "aria-expanded": context.open,
          "data-state": getState2(context.open),
          ...triggerProps,
          ref: composedTriggerRef,
          onPress: (0, import_core30.composeEventHandlers)(props.onPress, context.onOpenToggle)
        }
      );
      return context.hasCustomAnchor ? trigger : /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_popper.PopperAnchor, { asChild: true, ...popperScope, children: trigger });
    });
    PopoverTrigger.displayName = TRIGGER_NAME3;
    var CONTENT_NAME2 = "PopoverContent";
    var PopoverContent = React13.forwardRef((props, forwardedRef) => {
      const {
        allowPinchZoom,
        trapFocus,
        disableRemoveScroll = true,
        zIndex,
        ...contentModalProps
      } = props;
      const context = usePopoverInternalContext(CONTENT_NAME2, props.__scopePopover);
      const contentRef = React13.useRef(null);
      const composedRefs = (0, import_compose_refs3.useComposedRefs)(forwardedRef, contentRef);
      const isRightClickOutsideRef = React13.useRef(false);
      React13.useEffect(() => {
        if (!context.open)
          return;
        const content = contentRef.current;
        if (content)
          return (0, import_aria_hidden3.hideOthers)(content);
      }, [context.open]);
      return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(PopoverContentPortal, { zIndex, children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
        PopoverContentImpl,
        {
          ...contentModalProps,
          disableRemoveScroll,
          ref: composedRefs,
          trapFocus: trapFocus ?? context.open,
          disableOutsidePointerEvents: true,
          onCloseAutoFocus: (0, import_core30.composeEventHandlers)(props.onCloseAutoFocus, (event) => {
            var _a;
            event.preventDefault();
            if (!isRightClickOutsideRef.current)
              (_a = context.triggerRef.current) == null ? void 0 : _a.focus();
          }),
          onPointerDownOutside: (0, import_core30.composeEventHandlers)(
            props.onPointerDownOutside,
            (event) => {
              const originalEvent = event.detail.originalEvent;
              const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
              const isRightClick = originalEvent.button === 2 || ctrlLeftClick;
              isRightClickOutsideRef.current = isRightClick;
            },
            { checkDefaultPrevented: false }
          ),
          onFocusOutside: (0, import_core30.composeEventHandlers)(
            props.onFocusOutside,
            (event) => event.preventDefault(),
            { checkDefaultPrevented: false }
          )
        }
      ) });
    });
    function PopoverContentPortal(props) {
      const themeName = (0, import_core30.useThemeName)();
      const context = usePopoverInternalContext(CONTENT_NAME2, props.__scopePopover);
      let contents = props.children;
      if (import_react_native6.Platform.OS === "android") {
        const popperContext = (0, import_popper.usePopperContext)(CONTENT_NAME2, context.popperScope);
        contents = /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_popper.PopperProvider, { ...popperContext, scope: context.popperScope, children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(PopoverProviderInternal, { scope: props.__scopePopover, ...context, children: props.children }) });
      }
      const zIndex = props.zIndex ?? 1e3;
      return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_portal3.Portal, { zIndex, children: /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(import_core30.Theme, { forceClassName: true, name: themeName, children: [
        !!context.open && !context.breakpointActive && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
          import_stacks9.YStack,
          {
            fullscreen: true,
            onPress: (0, import_core30.composeEventHandlers)(props.onPress, context.onOpenToggle)
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_core30.Stack, { zIndex: zIndex + 1, children: contents })
      ] }) });
    }
    __name(PopoverContentPortal, "PopoverContentPortal");
    var PopoverContentImpl = React13.forwardRef((props, forwardedRef) => {
      const {
        __scopePopover,
        trapFocus,
        onOpenAutoFocus,
        onCloseAutoFocus,
        disableOutsidePointerEvents,
        onEscapeKeyDown,
        onPointerDownOutside,
        onFocusOutside,
        onInteractOutside,
        children,
        disableRemoveScroll,
        ...contentProps
      } = props;
      const popperScope = usePopoverScope(__scopePopover);
      const context = usePopoverInternalContext(CONTENT_NAME2, popperScope.__scopePopover);
      if (context.breakpointActive) {
        const childrenWithoutScrollView = React13.Children.toArray(children).map((child) => {
          if (React13.isValidElement(child)) {
            if (child.type === PopoverScrollView) {
              return child.props.children;
            }
          }
          return child;
        });
        return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_portal3.PortalItem, { hostName: `${context.scopeKey}PopoverContents`, children: childrenWithoutScrollView });
      }
      return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_animate_presence2.AnimatePresence, { children: !!context.open && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
        import_popper.PopperContent,
        {
          "data-state": getState2(context.open),
          id: context.contentId,
          pointerEvents: "auto",
          ref: forwardedRef,
          ...popperScope,
          ...contentProps,
          children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
            import_remove_scroll2.RemoveScroll,
            {
              enabled: disableRemoveScroll ? false : context.open,
              allowPinchZoom: true,
              removeScrollBar: false,
              style: {
                display: "contents"
              },
              children: trapFocus === false ? children : /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
                import_focus_scope2.FocusScope,
                {
                  loop: true,
                  trapped: trapFocus ?? context.open,
                  onMountAutoFocus: onOpenAutoFocus,
                  onUnmountAutoFocus: onCloseAutoFocus,
                  children: import_core30.isWeb ? /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { style: { display: "contents" }, children }) : children
                }
              )
            }
          )
        },
        context.contentId
      ) });
    });
    var CLOSE_NAME2 = "PopoverClose";
    var PopoverClose = React13.forwardRef(
      (props, forwardedRef) => {
        const { __scopePopover, ...closeProps } = props;
        const context = usePopoverInternalContext(CLOSE_NAME2, __scopePopover);
        return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
          import_stacks9.YStack,
          {
            ...closeProps,
            ref: forwardedRef,
            onPress: (0, import_core30.composeEventHandlers)(
              props.onPress,
              () => context.onOpenChange(false)
            )
          }
        );
      }
    );
    PopoverClose.displayName = CLOSE_NAME2;
    var ARROW_NAME = "PopoverArrow";
    var PopoverArrow = React13.forwardRef(
      (props, forwardedRef) => {
        const { __scopePopover, ...arrowProps } = props;
        const popperScope = usePopoverScope(__scopePopover);
        return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_popper.PopperArrow, { ...popperScope, ...arrowProps, ref: forwardedRef });
      }
    );
    PopoverArrow.displayName = ARROW_NAME;
    var PopoverScrollView = React13.forwardRef((props, ref) => {
      return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_react_native6.ScrollView, { ref, ...props });
    });
    var Popover = (0, import_core30.withStaticProperties)(
      (props) => {
        const {
          __scopePopover,
          children,
          open: openProp,
          defaultOpen,
          onOpenChange,
          ...restProps
        } = props;
        const internalId = (0, import_core30.useId)();
        const id = __scopePopover ? Object.keys(__scopePopover)[0] : internalId;
        const { when, AdaptProvider } = (0, import_adapt2.useAdaptParent)({
          Contents: React13.useCallback(() => {
            return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_portal3.PortalHost, { name: `${id}PopoverContents` });
          }, [])
        });
        const sheetBreakpoint = when;
        const popperScope = usePopoverScope(__scopePopover);
        const triggerRef = React13.useRef(null);
        const [hasCustomAnchor, setHasCustomAnchor] = React13.useState(false);
        const [open, setOpen] = (0, import_use_controllable_state2.useControllableState)({
          prop: openProp,
          defaultProp: defaultOpen || false,
          onChange: onOpenChange,
          transition: true
        });
        const breakpointActive = useSheetBreakpointActive2(sheetBreakpoint);
        const floatingContext = (0, import_useFloatingContext.useFloatingContext)({ open, setOpen, breakpointActive });
        const popoverContext = {
          scope: __scopePopover,
          scopeKey: id,
          popperScope: popperScope.__scopePopper,
          sheetBreakpoint,
          contentId: (0, import_core30.useId)(),
          triggerRef,
          open,
          breakpointActive,
          onOpenChange: setOpen,
          onOpenToggle: (0, import_core30.useEvent)(() => {
            if (open && breakpointActive) {
              return;
            }
            setOpen(!open);
          }),
          hasCustomAnchor,
          onCustomAnchorAdd: React13.useCallback(() => setHasCustomAnchor(true), []),
          onCustomAnchorRemove: React13.useCallback(() => setHasCustomAnchor(false), [])
        };
        const contents = /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_popper.Popper, { ...popperScope, stayInFrame: true, ...restProps, children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(PopoverProviderInternal, { ...popoverContext, children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(PopoverSheetController, { onOpenChange: setOpen, __scopePopover, children }) }) });
        return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(AdaptProvider, { children: import_core30.isWeb ? /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_floating.FloatingOverrideContext.Provider, { value: floatingContext, children: contents }) : contents });
      },
      {
        Anchor: PopoverAnchor,
        Arrow: PopoverArrow,
        Trigger: PopoverTrigger,
        Content: PopoverContent,
        Close: PopoverClose,
        Adapt: import_adapt2.Adapt,
        ScrollView: PopoverScrollView,
        Sheet: import_sheet2.ControlledSheet
      }
    );
    Popover.displayName = POPOVER_NAME;
    function getState2(open) {
      return open ? "open" : "closed";
    }
    __name(getState2, "getState");
    var PopoverSheetController = /* @__PURE__ */ __name((props) => {
      const context = usePopoverInternalContext(
        "PopoverSheetController",
        props.__scopePopover
      );
      const showSheet = useShowPopoverSheet(context);
      const breakpointActive = context.breakpointActive;
      const getShowSheet = (0, import_core30.useGet)(showSheet);
      return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
        import_sheet2.SheetController,
        {
          onOpenChange: (val) => {
            if (getShowSheet()) {
              props.onOpenChange(val);
            }
          },
          open: context.open,
          hidden: breakpointActive === false,
          children: props.children
        }
      );
    }, "PopoverSheetController");
    var useSheetBreakpointActive2 = /* @__PURE__ */ __name((breakpoint) => {
      const media = (0, import_core30.useMedia)();
      if (typeof breakpoint === "boolean" || !breakpoint) {
        return !!breakpoint;
      }
      return media[breakpoint];
    }, "useSheetBreakpointActive");
    var useShowPopoverSheet = /* @__PURE__ */ __name((context) => {
      const breakpointActive = useSheetBreakpointActive2(context.sheetBreakpoint);
      return context.open === false ? false : breakpointActive;
    }, "useShowPopoverSheet");
  }
});

// node_modules/@tamagui/popover/dist/cjs/index.js
var require_cjs33 = __commonJS({
  "node_modules/@tamagui/popover/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_Popover(), module2.exports);
    __reExport2(src_exports, require_useFloatingContext(), module2.exports);
  }
});

// node_modules/@tamagui/progress/dist/cjs/Progress.js
var require_Progress = __commonJS({
  "node_modules/@tamagui/progress/dist/cjs/Progress.js"(exports, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      // If the importer is in node compatibility mode or this is not an ESM
      // file that has been converted to a CommonJS file using a Babel-
      // compatible transform (i.e. "__esModule" has not been set), then set
      // "default" to the CommonJS "module.exports" for node compatibility.
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var Progress_exports = {};
    __export2(Progress_exports, {
      Progress: () => Progress,
      ProgressFrame: () => ProgressFrame,
      ProgressIndicator: () => ProgressIndicator,
      ProgressIndicatorFrame: () => ProgressIndicatorFrame,
      createProgressScope: () => createProgressScope
    });
    module2.exports = __toCommonJS2(Progress_exports);
    var import_jsx_runtime13 = require("react/jsx-runtime");
    var import_core30 = require("@tamagui/core-node");
    var import_create_context5 = require_cjs3();
    var import_get_size2 = require_cjs10();
    var import_stacks9 = require_cjs12();
    var React13 = __toESM2(require("react"));
    var PROGRESS_NAME = "Progress";
    var [createProgressContext, createProgressScope] = (0, import_create_context5.createContextScope)(PROGRESS_NAME);
    var [ProgressProvider, useProgressContext] = createProgressContext(PROGRESS_NAME);
    var INDICATOR_NAME = "ProgressIndicator";
    var ProgressIndicatorFrame = (0, import_core30.styled)(import_stacks9.ThemeableStack, {
      name: INDICATOR_NAME,
      height: "100%",
      width: "100%",
      backgrounded: true
    });
    var ProgressIndicator = ProgressIndicatorFrame.extractable(
      React13.forwardRef(
        (props, forwardedRef) => {
          const { __scopeProgress, ...indicatorProps } = props;
          const context = useProgressContext(INDICATOR_NAME, __scopeProgress);
          const pct = context.max - (context.value ?? 0);
          const x = -context.width * (pct / 100);
          return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
            ProgressIndicatorFrame,
            {
              "data-state": getProgressState(context.value, context.max),
              "data-value": context.value ?? void 0,
              "data-max": context.max,
              x,
              width: context.width,
              ...indicatorProps,
              ref: forwardedRef
            }
          );
        }
      )
    );
    ProgressIndicator.displayName = INDICATOR_NAME;
    function defaultGetValueLabel(value, max3) {
      return `${Math.round(value / max3 * 100)}%`;
    }
    __name(defaultGetValueLabel, "defaultGetValueLabel");
    function getProgressState(value, maxValue) {
      return value == null ? "indeterminate" : value === maxValue ? "complete" : "loading";
    }
    __name(getProgressState, "getProgressState");
    function isNumber(value) {
      return typeof value === "number";
    }
    __name(isNumber, "isNumber");
    function isValidMaxNumber(max3) {
      return isNumber(max3) && !isNaN(max3) && max3 > 0;
    }
    __name(isValidMaxNumber, "isValidMaxNumber");
    function isValidValueNumber(value, max3) {
      return isNumber(value) && !isNaN(value) && value <= max3 && value >= 0;
    }
    __name(isValidValueNumber, "isValidValueNumber");
    function getInvalidMaxError(propValue, componentName) {
      return `Invalid prop \`max\` of value \`${propValue}\` supplied to \`${componentName}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${DEFAULT_MAX}\`.`;
    }
    __name(getInvalidMaxError, "getInvalidMaxError");
    function getInvalidValueError(propValue, componentName) {
      return `Invalid prop \`value\` of value \`${propValue}\` supplied to \`${componentName}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${DEFAULT_MAX} if no \`max\` prop is set)
  - \`null\` if the progress is indeterminate.

Defaulting to \`null\`.`;
    }
    __name(getInvalidValueError, "getInvalidValueError");
    var DEFAULT_MAX = 100;
    var ProgressFrame = (0, import_core30.styled)(import_stacks9.ThemeableStack, {
      name: PROGRESS_NAME,
      borderRadius: 1e5,
      overflow: "hidden",
      backgrounded: true,
      variants: {
        size: {
          "...size": (val) => {
            const size2 = Math.round((0, import_core30.getVariableValue)((0, import_get_size2.getSize)(val)) * 0.25);
            return {
              height: size2,
              minWidth: (0, import_core30.getVariableValue)(size2) * 20,
              width: "100%"
            };
          }
        }
      }
    });
    var Progress = (0, import_core30.withStaticProperties)(
      ProgressFrame.extractable(
        React13.forwardRef(
          (props, forwardedRef) => {
            const {
              __scopeProgress,
              value: valueProp,
              max: maxProp,
              getValueLabel = defaultGetValueLabel,
              size: size2 = "$true",
              ...progressProps
            } = props;
            const max3 = isValidMaxNumber(maxProp) ? maxProp : DEFAULT_MAX;
            const value = isValidValueNumber(valueProp, max3) ? valueProp : null;
            const valueLabel = isNumber(value) ? getValueLabel(value, max3) : void 0;
            const [width, setWidth] = React13.useState(0);
            return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(ProgressProvider, { scope: __scopeProgress, value, max: max3, width, children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
              ProgressFrame,
              {
                size: size2,
                "aria-valuemax": max3,
                "aria-valuemin": 0,
                "aria-valuenow": isNumber(value) ? value : void 0,
                "aria-valuetext": valueLabel,
                role: "progressbar",
                "data-state": getProgressState(value, max3),
                "data-value": value ?? void 0,
                "data-max": max3,
                ...progressProps,
                onLayout: (e) => {
                  var _a;
                  setWidth(e.nativeEvent.layout.width);
                  (_a = progressProps.onLayout) == null ? void 0 : _a.call(progressProps, e);
                },
                ref: forwardedRef
              }
            ) });
          }
        )
      ),
      {
        Indicator: ProgressIndicator
      }
    );
    Progress.displayName = PROGRESS_NAME;
    Progress.propTypes = {
      max(props, propName, componentName) {
        const propValue = props[propName];
        const strVal = String(propValue);
        if (propValue && !isValidMaxNumber(propValue)) {
          return new Error(getInvalidMaxError(strVal, componentName));
        }
        return null;
      },
      value(props, propName, componentName) {
        const valueProp = props[propName];
        const strVal = String(valueProp);
        const max3 = isValidMaxNumber(props.max) ? props.max : DEFAULT_MAX;
        if (valueProp != null && !isValidValueNumber(valueProp, max3)) {
          return new Error(getInvalidValueError(strVal, componentName));
        }
        return null;
      }
    };
  }
});

// node_modules/@tamagui/progress/dist/cjs/index.js
var require_cjs34 = __commonJS({
  "node_modules/@tamagui/progress/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_Progress(), module2.exports);
  }
});

// node_modules/@radix-ui/react-use-previous/dist/index.js
var require_dist4 = __commonJS({
  "node_modules/@radix-ui/react-use-previous/dist/index.js"(exports) {
    var e;
    var r;
    var u = (e = {}, r = require("react"), Object.keys(r).forEach(function(u2) {
      "default" !== u2 && "__esModule" !== u2 && Object.defineProperty(e, u2, { enumerable: true, get: function() {
        return r[u2];
      } });
    }), e);
    exports.usePrevious = function(e2) {
      const r2 = u.useRef({ value: e2, previous: e2 });
      return u.useMemo(() => (r2.current.value !== e2 && (r2.current.previous = r2.current.value, r2.current.value = e2), r2.current.previous), [e2]);
    };
  }
});

// node_modules/@tamagui/label/dist/cjs/Label.js
var require_Label = __commonJS({
  "node_modules/@tamagui/label/dist/cjs/Label.js"(exports, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      // If the importer is in node compatibility mode or this is not an ESM
      // file that has been converted to a CommonJS file using a Babel-
      // compatible transform (i.e. "__esModule" has not been set), then set
      // "default" to the CommonJS "module.exports" for node compatibility.
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var Label_exports = {};
    __export2(Label_exports, {
      Label: () => Label2,
      LabelFrame: () => LabelFrame2,
      useLabelContext: () => useLabelContext2
    });
    module2.exports = __toCommonJS2(Label_exports);
    var import_jsx_runtime13 = require("react/jsx-runtime");
    var import_compose_refs3 = require_cjs2();
    var import_core30 = require("@tamagui/core-node");
    var import_create_context5 = require_cjs3();
    var import_focusable4 = require_cjs29();
    var import_get_button_sized5 = require_cjs11();
    var import_get_font_sized4 = require_cjs19();
    var import_text5 = require_cjs20();
    var React13 = __toESM2(require("react"));
    var NAME3 = "Label";
    var [LabelProvider2, useLabelContextImpl2] = (0, import_create_context5.createContext)(NAME3, {
      id: void 0,
      controlRef: { current: null }
    });
    var LabelFrame2 = (0, import_core30.styled)(import_text5.SizableText, {
      name: "Label",
      tag: "label",
      size: "$true",
      backgroundColor: "transparent",
      display: "flex",
      alignItems: "center",
      userSelect: "none",
      cursor: "default",
      pressStyle: {
        color: "$colorPress"
      },
      variants: {
        size: {
          "...size": (val, extras) => {
            const buttonStyle = (0, import_get_button_sized5.getButtonSized)(val, extras);
            return {
              ...(0, import_get_font_sized4.getFontSized)(val, extras),
              height: buttonStyle.height,
              lineHeight: buttonStyle.height
            };
          }
        }
      }
    });
    var LabelComponent2 = React13.forwardRef(
      (props, forwardedRef) => {
        const { htmlFor, id: idProp, ...labelProps } = props;
        const controlRef = React13.useRef(null);
        const ref = React13.useRef(null);
        const composedRefs = (0, import_compose_refs3.useComposedRefs)(forwardedRef, ref);
        const backupId = (0, import_core30.useId)();
        const id = idProp ?? backupId;
        if (import_core30.isWeb) {
          React13.useEffect(() => {
            if (htmlFor) {
              const element = document.getElementById(htmlFor);
              const label = ref.current;
              if (label && element) {
                const getAriaLabel = /* @__PURE__ */ __name(() => element.getAttribute("aria-labelledby"), "getAriaLabel");
                const ariaLabelledBy = [id, getAriaLabel()].filter(Boolean).join(" ");
                element.setAttribute("aria-labelledby", ariaLabelledBy);
                controlRef.current = element;
                return () => {
                  var _a;
                  if (!id)
                    return;
                  const ariaLabelledBy2 = (_a = getAriaLabel()) == null ? void 0 : _a.replace(id, "");
                  if (ariaLabelledBy2 === "") {
                    element.removeAttribute("aria-labelledby");
                  } else if (ariaLabelledBy2) {
                    element.setAttribute("aria-labelledby", ariaLabelledBy2);
                  }
                };
              }
            }
          }, [id, htmlFor]);
        }
        return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(LabelProvider2, { id, controlRef, children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
          LabelFrame2,
          {
            role: "label",
            id,
            htmlFor,
            ...labelProps,
            ref: composedRefs,
            onMouseDown: (event) => {
              var _a;
              (_a = props.onMouseDown) == null ? void 0 : _a.call(props, event);
              if (!event.defaultPrevented && event.detail > 1) {
                event.preventDefault();
              }
            },
            onPress: (event) => {
              var _a;
              (_a = props.onPress) == null ? void 0 : _a.call(props, event);
              if (import_core30.isWeb) {
                if (htmlFor || !controlRef.current || event.defaultPrevented)
                  return;
                const isClickingControl = controlRef.current.contains(
                  event.target
                );
                const isUserClick = event.isTrusted === true;
                if (!isClickingControl && isUserClick) {
                  controlRef.current.click();
                  controlRef.current.focus();
                }
              } else {
                if (props.htmlFor) {
                  (0, import_focusable4.focusFocusable)(props.htmlFor);
                }
              }
            }
          }
        ) });
      }
    );
    LabelComponent2.displayName = NAME3;
    var Label2 = LabelFrame2.extractable((0, import_core30.themeable)(LabelComponent2), {
      neverFlatten: true
    });
    var useLabelContext2 = /* @__PURE__ */ __name((element) => {
      const context = useLabelContextImpl2("LabelConsumer");
      const { controlRef } = context;
      React13.useEffect(() => {
        if (element)
          controlRef.current = element;
      }, [element, controlRef]);
      return context.id;
    }, "useLabelContext");
  }
});

// node_modules/@tamagui/label/dist/cjs/index.js
var require_cjs35 = __commonJS({
  "node_modules/@tamagui/label/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_Label(), module2.exports);
  }
});

// node_modules/@tamagui/radio-group/dist/cjs/RadioGroup.js
var require_RadioGroup = __commonJS({
  "node_modules/@tamagui/radio-group/dist/cjs/RadioGroup.js"(exports, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      // If the importer is in node compatibility mode or this is not an ESM
      // file that has been converted to a CommonJS file using a Babel-
      // compatible transform (i.e. "__esModule" has not been set), then set
      // "default" to the CommonJS "module.exports" for node compatibility.
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var RadioGroup_exports = {};
    __export2(RadioGroup_exports, {
      RadioGroup: () => RadioGroup,
      createRadioGroupScope: () => createRadioGroupScope
    });
    module2.exports = __toCommonJS2(RadioGroup_exports);
    var import_jsx_runtime13 = require("react/jsx-runtime");
    var import_react_use_previous = require_dist4();
    var import_core30 = require("@tamagui/core-node");
    var import_create_context5 = require_cjs3();
    var import_focusable4 = require_cjs29();
    var import_get_size2 = require_cjs10();
    var import_label = require_cjs35();
    var import_stacks9 = require_cjs12();
    var import_use_controllable_state2 = require_cjs16();
    var React13 = __toESM2(require("react"));
    var RADIO_GROUP_NAME = "RadioGroup";
    var ARROW_KEYS = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
    var [createRadioGroupContext, createRadioGroupScope] = (0, import_create_context5.createContextScope)(RADIO_GROUP_NAME);
    var [RadioGroupProvider, useRadioGroupContext] = createRadioGroupContext(RADIO_GROUP_NAME);
    var getState2 = /* @__PURE__ */ __name((checked) => {
      return checked ? "checked" : "unchecked";
    }, "getState");
    var RADIO_GROUP_INDICATOR_NAME = "RadioGroupIndicator";
    var RadioIndicatorFrame = (0, import_core30.styled)(import_stacks9.ThemeableStack, {
      name: RADIO_GROUP_INDICATOR_NAME,
      pointerEvents: "none",
      variants: {
        unstyled: {
          false: {
            w: "40%",
            h: "40%",
            br: 1e3,
            backgroundColor: "$color"
          }
        }
      },
      defaultVariants: {
        unstyled: false
      }
    });
    var RadioIndicator = RadioIndicatorFrame.extractable(
      React13.forwardRef(
        (props, forwardedRef) => {
          const { __scopeRadioGroupItem, forceMount, disabled, ...indicatorProps } = props;
          const { checked } = useRadioGroupItemContext(
            RADIO_GROUP_INDICATOR_NAME,
            __scopeRadioGroupItem
          );
          if (forceMount || checked) {
            return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
              RadioIndicatorFrame,
              {
                theme: "active",
                "data-state": getState2(checked),
                "data-disabled": disabled ? "" : void 0,
                ...indicatorProps,
                ref: forwardedRef
              }
            );
          }
          return null;
        }
      )
    );
    RadioIndicator.displayName = RADIO_GROUP_INDICATOR_NAME;
    var RADIO_GROUP_ITEM_NAME = "RadioGroupItem";
    var [RadioGroupItemProvider, useRadioGroupItemContext] = createRadioGroupContext(RADIO_GROUP_NAME);
    var RadioGroupItemFrame = (0, import_core30.styled)(import_stacks9.ThemeableStack, {
      name: RADIO_GROUP_ITEM_NAME,
      tag: "button",
      variants: {
        unstyled: {
          false: {
            size: "$true",
            borderRadius: 1e3,
            backgroundColor: "$background",
            alignItems: "center",
            justifyContent: "center",
            borderWidth: 1,
            borderColor: "$borderColor",
            hoverStyle: {
              borderColor: "$borderColorHover"
            },
            focusStyle: {
              borderColor: "$borderColorFocus"
            }
          }
        },
        size: {
          "...size": (value, { props }) => {
            const size2 = Math.floor(
              (0, import_core30.getVariableValue)((0, import_get_size2.getSize)(value)) * (props["scaleSize"] ?? 0.5)
            );
            return {
              width: size2,
              height: size2
            };
          }
        }
      },
      defaultVariants: {
        unstyled: false
      }
    });
    var RadioGroupItem = RadioGroupItemFrame.extractable(
      React13.forwardRef(
        (props, forwardedRef) => {
          const {
            __scopeRadioGroup,
            value,
            labelledBy: ariaLabelledby,
            disabled: itemDisabled,
            ...itemProps
          } = props;
          const {
            value: groupValue,
            disabled,
            required,
            onChange,
            name,
            native,
            accentColor
          } = useRadioGroupContext(RADIO_GROUP_ITEM_NAME, __scopeRadioGroup);
          const [button, setButton] = React13.useState(null);
          const hasConsumerStoppedPropagationRef = React13.useRef(false);
          const ref = React13.useRef(null);
          const composedRefs = (0, import_core30.useComposedRefs)(forwardedRef, (node) => setButton(node), ref);
          const isArrowKeyPressedRef = React13.useRef(false);
          const isFormControl = import_core30.isWeb ? button ? Boolean(button.closest("form")) : true : false;
          const checked = groupValue === value;
          const labelId = (0, import_label.useLabelContext)(button);
          const labelledBy = ariaLabelledby || labelId;
          React13.useEffect(() => {
            if (import_core30.isWeb) {
              const handleKeyDown = /* @__PURE__ */ __name((event) => {
                if (ARROW_KEYS.includes(event.key)) {
                  isArrowKeyPressedRef.current = true;
                }
              }, "handleKeyDown");
              const handleKeyUp = /* @__PURE__ */ __name(() => isArrowKeyPressedRef.current = false, "handleKeyUp");
              document.addEventListener("keydown", handleKeyDown);
              document.addEventListener("keyup", handleKeyUp);
              return () => {
                document.removeEventListener("keydown", handleKeyDown);
                document.removeEventListener("keyup", handleKeyUp);
              };
            }
          }, []);
          if (process.env.TAMAGUI_TARGET === "native") {
            React13.useEffect(() => {
              if (!props.id)
                return;
              return (0, import_focusable4.registerFocusable)(props.id, {
                focusAndSelect: () => {
                  onChange == null ? void 0 : onChange(value);
                },
                focus: () => {
                }
              });
            }, [props.id, value]);
          }
          const isDisabled = disabled || itemDisabled;
          return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(RadioGroupItemProvider, { checked, scope: __scopeRadioGroup, children: import_core30.isWeb && native ? /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
            BubbleInput,
            {
              control: button,
              bubbles: !hasConsumerStoppedPropagationRef.current,
              name,
              value,
              checked,
              required,
              disabled: isDisabled,
              id: props.id,
              accentColor
            }
          ) : /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(import_jsx_runtime13.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
              RadioGroupItemFrame,
              {
                "data-state": getState2(checked),
                "data-disabled": isDisabled ? "" : void 0,
                role: "radio",
                "aria-labelledby": labelledBy,
                "aria-checked": checked,
                "aria-required": required,
                disabled: isDisabled,
                ref: composedRefs,
                ...import_core30.isWeb && {
                  type: "button",
                  value
                },
                ...itemProps,
                onPress: (0, import_core30.composeEventHandlers)(props.onPress, (event) => {
                  if (!checked) {
                    onChange == null ? void 0 : onChange(value);
                  }
                  if (isFormControl) {
                    hasConsumerStoppedPropagationRef.current = event.isPropagationStopped();
                    if (!hasConsumerStoppedPropagationRef.current)
                      event.stopPropagation();
                  }
                }),
                ...import_core30.isWeb && {
                  onKeyDown: (0, import_core30.composeEventHandlers)(
                    props.onKeyDown,
                    (event) => {
                      if (event.key === "Enter")
                        event.preventDefault();
                    }
                  ),
                  onFocus: (0, import_core30.composeEventHandlers)(itemProps.onFocus, () => {
                    var _a;
                    if (isArrowKeyPressedRef.current)
                      (_a = ref.current) == null ? void 0 : _a.click();
                  })
                }
              }
            ),
            isFormControl && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
              BubbleInput,
              {
                isHidden: true,
                control: button,
                bubbles: !hasConsumerStoppedPropagationRef.current,
                name,
                value,
                checked,
                required,
                disabled: isDisabled
              }
            )
          ] }) });
        }
      )
    );
    var BubbleInput = /* @__PURE__ */ __name((props) => {
      const { checked, bubbles = true, control, isHidden, accentColor, ...inputProps } = props;
      const ref = React13.useRef(null);
      const prevChecked = (0, import_react_use_previous.usePrevious)(checked);
      React13.useEffect(() => {
        const input = ref.current;
        const inputProto = window.HTMLInputElement.prototype;
        const descriptor = Object.getOwnPropertyDescriptor(
          inputProto,
          "checked"
        );
        const setChecked = descriptor.set;
        if (prevChecked !== checked && setChecked) {
          const event = new Event("click", { bubbles });
          setChecked.call(input, checked);
          input.dispatchEvent(event);
        }
      }, [prevChecked, checked, bubbles]);
      return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
        "input",
        {
          type: "radio",
          defaultChecked: checked,
          ...inputProps,
          tabIndex: -1,
          ref,
          "aria-hidden": isHidden,
          style: {
            ...isHidden ? {
              // ...controlSize,
              position: "absolute",
              pointerEvents: "none",
              opacity: 0,
              margin: 0
            } : {
              appearance: "auto",
              accentColor
            },
            ...props.style
          }
        }
      );
    }, "BubbleInput");
    var RadioGroupFrame = (0, import_core30.styled)(import_stacks9.ThemeableStack, {
      name: RADIO_GROUP_NAME,
      variants: {
        orientation: {
          horizontal: {
            flexDirection: "row",
            spaceDirection: "horizontal"
          },
          vertical: {
            flexDirection: "column",
            spaceDirection: "vertical"
          }
        }
      }
    });
    var RadioGroup = (0, import_core30.withStaticProperties)(
      RadioGroupFrame.extractable(
        React13.forwardRef(
          (props, forwardedRef) => {
            const {
              __scopeRadioGroup,
              value: valueProp,
              defaultValue: defaultValue2,
              onValueChange,
              disabled = false,
              required = false,
              name,
              orientation,
              native,
              accentColor,
              ...radioGroupProps
            } = props;
            const [value, setValue] = (0, import_use_controllable_state2.useControllableState)({
              prop: valueProp,
              defaultProp: defaultValue2,
              onChange: onValueChange
            });
            return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
              RadioGroupProvider,
              {
                scope: __scopeRadioGroup,
                value,
                required,
                onChange: setValue,
                disabled,
                name,
                native,
                accentColor,
                children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
                  RadioGroupFrame,
                  {
                    "aria-valuetext": value,
                    role: "radiogroup",
                    "aria-orientation": orientation,
                    ref: forwardedRef,
                    orientation,
                    "data-disabled": disabled ? "" : void 0,
                    ...radioGroupProps
                  }
                )
              }
            );
          }
        )
      ),
      {
        Indicator: RadioIndicator,
        Item: RadioGroupItem
      }
    );
    RadioGroup.displayName = RADIO_GROUP_NAME;
  }
});

// node_modules/@tamagui/radio-group/dist/cjs/index.js
var require_cjs36 = __commonJS({
  "node_modules/@tamagui/radio-group/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_RadioGroup(), module2.exports);
  }
});

// node_modules/@tamagui/separator/dist/cjs/Separator.js
var require_Separator = __commonJS({
  "node_modules/@tamagui/separator/dist/cjs/Separator.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var Separator_exports = {};
    __export2(Separator_exports, {
      Separator: () => Separator
    });
    module2.exports = __toCommonJS2(Separator_exports);
    var import_core30 = require("@tamagui/core-node");
    var Separator = (0, import_core30.styled)(import_core30.Stack, {
      name: "Separator",
      borderColor: "$borderColor",
      flexShrink: 0,
      borderWidth: 0,
      flex: 1,
      height: 0,
      maxHeight: 0,
      borderBottomWidth: 1,
      y: -0.5,
      variants: {
        vertical: {
          true: {
            y: 0,
            x: -0.5,
            height: import_core30.isWeb ? "initial" : "auto",
            // maxHeight auto WILL BE passed to style attribute, but for some reason not used?
            // almost seems like a react or browser bug, but for now `initial` works
            // also, it doesn't happen for `height`, but for consistency using the same values
            maxHeight: import_core30.isWeb ? "initial" : "auto",
            width: 0,
            maxWidth: 0,
            borderBottomWidth: 0,
            borderRightWidth: 1
          }
        }
      }
    });
  }
});

// node_modules/@tamagui/separator/dist/cjs/index.js
var require_cjs37 = __commonJS({
  "node_modules/@tamagui/separator/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_Separator(), module2.exports);
  }
});

// node_modules/@tamagui/select/dist/cjs/constants.js
var require_constants3 = __commonJS({
  "node_modules/@tamagui/select/dist/cjs/constants.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var constants_exports = {};
    __export2(constants_exports, {
      FALLBACK_THRESHOLD: () => FALLBACK_THRESHOLD,
      MIN_HEIGHT: () => MIN_HEIGHT,
      SCROLL_ARROW_THRESHOLD: () => SCROLL_ARROW_THRESHOLD,
      SCROLL_ARROW_VELOCITY: () => SCROLL_ARROW_VELOCITY,
      SELECT_NAME: () => SELECT_NAME,
      VIEWPORT_NAME: () => VIEWPORT_NAME,
      WINDOW_PADDING: () => WINDOW_PADDING
    });
    module2.exports = __toCommonJS2(constants_exports);
    var SELECT_NAME = "Select";
    var WINDOW_PADDING = 8;
    var SCROLL_ARROW_VELOCITY = 8;
    var SCROLL_ARROW_THRESHOLD = 8;
    var MIN_HEIGHT = 80;
    var FALLBACK_THRESHOLD = 16;
    var VIEWPORT_NAME = "SelectViewport";
  }
});

// node_modules/@tamagui/select/dist/cjs/context.js
var require_context = __commonJS({
  "node_modules/@tamagui/select/dist/cjs/context.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var context_exports = {};
    __export2(context_exports, {
      ForwardSelectContext: () => ForwardSelectContext,
      SelectProvider: () => SelectProvider,
      createSelectContext: () => createSelectContext,
      createSelectScope: () => createSelectScope,
      useSelectContext: () => useSelectContext
    });
    module2.exports = __toCommonJS2(context_exports);
    var import_jsx_runtime13 = require("react/jsx-runtime");
    var import_create_context5 = require_cjs3();
    var import_constants = require_constants3();
    var [createSelectContext, createSelectScope] = (0, import_create_context5.createContextScope)(import_constants.SELECT_NAME);
    var [SelectProvider, useSelectContext] = createSelectContext(import_constants.SELECT_NAME);
    var ForwardSelectContext = /* @__PURE__ */ __name((props) => {
      return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(SelectProvider, { isInSheet: true, scope: props.__scopeSelect, ...props.context, children: props.children });
    }, "ForwardSelectContext");
  }
});

// node_modules/@tamagui/select/dist/cjs/useSelectBreakpointActive.js
var require_useSelectBreakpointActive = __commonJS({
  "node_modules/@tamagui/select/dist/cjs/useSelectBreakpointActive.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var useSelectBreakpointActive_exports = {};
    __export2(useSelectBreakpointActive_exports, {
      useSelectBreakpointActive: () => useSelectBreakpointActive,
      useShowSelectSheet: () => useShowSelectSheet
    });
    module2.exports = __toCommonJS2(useSelectBreakpointActive_exports);
    var import_core30 = require("@tamagui/core-node");
    var useSelectBreakpointActive = /* @__PURE__ */ __name((sheetBreakpoint) => {
      const media = (0, import_core30.useMedia)();
      if (!sheetBreakpoint)
        return false;
      if (sheetBreakpoint === true)
        return true;
      return sheetBreakpoint ? media[sheetBreakpoint] : false;
    }, "useSelectBreakpointActive");
    var useShowSelectSheet = /* @__PURE__ */ __name((context) => {
      const breakpointActive = useSelectBreakpointActive(context.sheetBreakpoint);
      return context.open === false ? false : breakpointActive;
    }, "useShowSelectSheet");
  }
});

// node_modules/@tamagui/select/dist/cjs/SelectContent.js
var require_SelectContent = __commonJS({
  "node_modules/@tamagui/select/dist/cjs/SelectContent.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var SelectContent_exports = {};
    __export2(SelectContent_exports, {
      SelectContent: () => SelectContent
    });
    module2.exports = __toCommonJS2(SelectContent_exports);
    var import_jsx_runtime13 = require("react/jsx-runtime");
    var import_react13 = (init_floating_ui_react_esm(), __toCommonJS(floating_ui_react_esm_exports));
    var import_core30 = require("@tamagui/core-node");
    var import_dismissable2 = require_cjs8();
    var import_focus_scope2 = require_cjs9();
    var import_context = require_context();
    var import_useSelectBreakpointActive = require_useSelectBreakpointActive();
    var CONTENT_NAME2 = "SelectContent";
    var SelectContent = /* @__PURE__ */ __name(({
      children,
      __scopeSelect,
      zIndex = 1e3,
      ...focusScopeProps
    }) => {
      const context = (0, import_context.useSelectContext)(CONTENT_NAME2, __scopeSelect);
      const themeName = (0, import_core30.useThemeName)();
      const showSheet = (0, import_useSelectBreakpointActive.useShowSelectSheet)(context);
      const contents = /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_core30.Theme, { forceClassName: true, name: themeName, children });
      const touch = (0, import_core30.useIsTouchDevice)();
      if (showSheet) {
        if (!context.open) {
          return null;
        }
        return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_jsx_runtime13.Fragment, { children: contents });
      }
      return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_react13.FloatingPortal, { children: context.open ? /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_react13.FloatingOverlay, { style: { zIndex }, lockScroll: !touch, children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_focus_scope2.FocusScope, { loop: true, trapped: true, ...focusScopeProps, children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_dismissable2.Dismissable, { children: contents }) }) }) : /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { style: { display: "none" }, children: contents }) });
    }, "SelectContent");
  }
});

// node_modules/@tamagui/select/dist/cjs/SelectImpl.js
var require_SelectImpl = __commonJS({
  "node_modules/@tamagui/select/dist/cjs/SelectImpl.js"(exports, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      // If the importer is in node compatibility mode or this is not an ESM
      // file that has been converted to a CommonJS file using a Babel-
      // compatible transform (i.e. "__esModule" has not been set), then set
      // "default" to the CommonJS "module.exports" for node compatibility.
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var SelectImpl_exports = {};
    __export2(SelectImpl_exports, {
      SelectInlineImpl: () => SelectInlineImpl
    });
    module2.exports = __toCommonJS2(SelectImpl_exports);
    var import_jsx_runtime13 = require("react/jsx-runtime");
    var import_react13 = (init_floating_ui_react_esm(), __toCommonJS(floating_ui_react_esm_exports));
    var import_core30 = require("@tamagui/core-node");
    var React13 = __toESM2(require("react"));
    var import_react_dom4 = require("react-dom");
    var import_constants = require_constants3();
    var import_context = require_context();
    var SelectInlineImpl = /* @__PURE__ */ __name((props) => {
      const {
        __scopeSelect,
        children,
        open = false,
        selectedIndexRef,
        listContentRef
      } = props;
      const selectContext = (0, import_context.useSelectContext)("SelectSheetImpl", __scopeSelect);
      const {
        setActiveIndex,
        setOpen,
        setSelectedIndex,
        selectedIndex,
        activeIndex,
        forceUpdate
      } = selectContext;
      const [scrollTop, setScrollTop] = React13.useState(0);
      const touch = (0, import_core30.useIsTouchDevice)();
      const listItemsRef = React13.useRef([]);
      const overflowRef = React13.useRef(null);
      const upArrowRef = React13.useRef(null);
      const downArrowRef = React13.useRef(null);
      const allowSelectRef = React13.useRef(false);
      const allowMouseUpRef = React13.useRef(true);
      const selectTimeoutRef = React13.useRef();
      const state = React13.useRef({
        isMouseOutside: false
      });
      const [controlledScrolling, setControlledScrolling] = React13.useState(false);
      const [fallback, setFallback] = React13.useState(false);
      const [innerOffset, setInnerOffset] = React13.useState(0);
      const [blockSelection, setBlockSelection] = React13.useState(false);
      const floatingStyle = React13.useRef({});
      React13.useEffect(() => {
        const frame = requestAnimationFrame(() => {
          if (!open) {
            setScrollTop(0);
            setFallback(false);
            setActiveIndex(null);
            setControlledScrolling(false);
          }
        });
        return () => {
          cancelAnimationFrame(frame);
        };
      }, [open, setActiveIndex]);
      if (import_core30.isWeb && import_core30.isClient) {
        React13.useEffect(() => {
          if (!open)
            return;
          const mouseUp = /* @__PURE__ */ __name((e) => {
            if (state.current.isMouseOutside) {
              setOpen(false);
            }
          }, "mouseUp");
          document.addEventListener("mouseup", mouseUp);
          return () => {
            document.removeEventListener("mouseup", mouseUp);
          };
        }, [open]);
      }
      const updateFloatingSize = (0, import_react13.size)({
        apply({
          availableHeight,
          rects: {
            reference: { width }
          }
        }) {
          floatingStyle.current = {
            width,
            maxHeight: availableHeight
          };
        },
        padding: import_constants.WINDOW_PADDING
      });
      const { x, y, reference, floating, strategy, context, refs } = (0, import_react13.useFloating)({
        open,
        onOpenChange: setOpen,
        whileElementsMounted: import_react13.autoUpdate,
        placement: "bottom-start",
        middleware: fallback ? [
          (0, import_react13.offset)(5),
          ...[
            touch ? (0, import_react13.shift)({ crossAxis: true, padding: import_constants.WINDOW_PADDING }) : (0, import_react13.flip)({ padding: import_constants.WINDOW_PADDING })
          ],
          updateFloatingSize
        ] : [
          (0, import_react13.inner)({
            listRef: listItemsRef,
            overflowRef,
            index: selectedIndex,
            offset: innerOffset,
            onFallbackChange: setFallback,
            padding: 10,
            minItemsVisible: touch ? 10 : 4,
            referenceOverflowThreshold: 20
          }),
          updateFloatingSize
        ]
      });
      const floatingRef = refs.floating;
      const showUpArrow = open && scrollTop > import_constants.SCROLL_ARROW_THRESHOLD;
      const showDownArrow = open && floatingRef.current && scrollTop < floatingRef.current.scrollHeight - floatingRef.current.clientHeight - import_constants.SCROLL_ARROW_THRESHOLD;
      const interactions = (0, import_react13.useInteractions)([
        (0, import_react13.useClick)(context, { event: "mousedown" }),
        (0, import_react13.useDismiss)(context, { outsidePress: true }),
        (0, import_react13.useRole)(context, { role: "listbox" }),
        (0, import_react13.useInnerOffset)(context, {
          enabled: !fallback,
          onChange: setInnerOffset,
          overflowRef
        }),
        (0, import_react13.useListNavigation)(context, {
          listRef: listItemsRef,
          activeIndex,
          selectedIndex,
          onNavigate: setActiveIndex
        }),
        (0, import_react13.useTypeahead)(context, {
          listRef: listContentRef,
          onMatch: open ? setActiveIndex : setSelectedIndex,
          selectedIndex,
          activeIndex
        })
      ]);
      const interactionsContext = React13.useMemo(() => {
        return {
          ...interactions,
          getReferenceProps() {
            return interactions.getReferenceProps({
              ref: reference,
              className: "SelectTrigger",
              onKeyDown(event) {
                if (event.key === "Enter" || event.key === " " && !context.dataRef.current.typing) {
                  event.preventDefault();
                  setOpen(true);
                }
              }
            });
          },
          getFloatingProps(props2) {
            return interactions.getFloatingProps({
              ref: floating,
              className: "Select",
              ...props2,
              style: {
                position: strategy,
                top: y ?? "",
                left: x ?? "",
                outline: 0,
                scrollbarWidth: "none",
                ...floatingStyle.current,
                ...props2 == null ? void 0 : props2.style
              },
              onPointerEnter() {
                setControlledScrolling(false);
                state.current.isMouseOutside = false;
              },
              onPointerLeave() {
                state.current.isMouseOutside = true;
              },
              onPointerMove() {
                state.current.isMouseOutside = false;
                setControlledScrolling(false);
              },
              onKeyDown() {
                setControlledScrolling(true);
              },
              onContextMenu(e) {
                e.preventDefault();
              },
              onScroll(event) {
                (0, import_react_dom4.flushSync)(() => setScrollTop(event.currentTarget.scrollTop));
              }
            });
          }
        };
      }, [floating, y, x, interactions]);
      (0, import_core30.useIsomorphicLayoutEffect)(() => {
        if (open) {
          selectTimeoutRef.current = setTimeout(() => {
            allowSelectRef.current = true;
          }, 300);
          return () => {
            clearTimeout(selectTimeoutRef.current);
          };
        } else {
          allowSelectRef.current = false;
          allowMouseUpRef.current = true;
          setInnerOffset(0);
          setFallback(false);
          setBlockSelection(false);
        }
      }, [open]);
      (0, import_core30.useIsomorphicLayoutEffect)(() => {
        function onPointerDown(e) {
          var _a, _b, _c;
          const target = e.target;
          if (!(((_a = refs.floating.current) == null ? void 0 : _a.contains(target)) || ((_b = upArrowRef.current) == null ? void 0 : _b.contains(target)) || ((_c = downArrowRef.current) == null ? void 0 : _c.contains(target)))) {
            setOpen(false);
            setControlledScrolling(false);
          }
        }
        __name(onPointerDown, "onPointerDown");
        if (open) {
          document.addEventListener("pointerdown", onPointerDown);
          return () => {
            document.removeEventListener("pointerdown", onPointerDown);
          };
        }
      }, [open, refs, setOpen]);
      (0, import_core30.useIsomorphicLayoutEffect)(() => {
        var _a, _b;
        if (open && controlledScrolling) {
          if (activeIndex != null) {
            (_a = listItemsRef.current[activeIndex]) == null ? void 0 : _a.scrollIntoView({ block: "nearest" });
          }
        }
        setScrollTop(((_b = refs.floating.current) == null ? void 0 : _b.scrollTop) ?? 0);
      }, [open, refs, controlledScrolling, activeIndex]);
      (0, import_core30.useIsomorphicLayoutEffect)(() => {
        var _a;
        if (open && fallback) {
          if (selectedIndex != null) {
            (_a = listItemsRef.current[selectedIndex]) == null ? void 0 : _a.scrollIntoView({ block: "nearest" });
          }
        }
      }, [open, fallback, selectedIndex]);
      (0, import_core30.useIsomorphicLayoutEffect)(() => {
        if (refs.floating.current && fallback) {
          refs.floating.current.style.maxHeight = "";
        }
      }, [refs, fallback]);
      return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
        import_context.SelectProvider,
        {
          scope: __scopeSelect,
          ...selectContext,
          setScrollTop,
          setInnerOffset,
          floatingRef,
          setValueAtIndex: (index3, value) => {
            listContentRef.current[index3] = value;
          },
          fallback,
          interactions: interactionsContext,
          floatingContext: context,
          activeIndex,
          canScrollDown: !!showDownArrow,
          canScrollUp: !!showUpArrow,
          controlledScrolling,
          dataRef: context.dataRef,
          listRef: listItemsRef,
          blockSelection,
          allowMouseUpRef,
          upArrowRef,
          downArrowRef,
          selectTimeoutRef,
          allowSelectRef,
          children
        }
      );
    }, "SelectInlineImpl");
    var userAgent = typeof navigator !== "undefined" && navigator.userAgent || "";
  }
});

// node_modules/@tamagui/select/dist/cjs/SelectScrollButton.js
var require_SelectScrollButton = __commonJS({
  "node_modules/@tamagui/select/dist/cjs/SelectScrollButton.js"(exports, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      // If the importer is in node compatibility mode or this is not an ESM
      // file that has been converted to a CommonJS file using a Babel-
      // compatible transform (i.e. "__esModule" has not been set), then set
      // "default" to the CommonJS "module.exports" for node compatibility.
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var SelectScrollButton_exports = {};
    __export2(SelectScrollButton_exports, {
      SelectScrollDownButton: () => SelectScrollDownButton,
      SelectScrollUpButton: () => SelectScrollUpButton
    });
    module2.exports = __toCommonJS2(SelectScrollButton_exports);
    var import_jsx_runtime13 = require("react/jsx-runtime");
    var import_react13 = (init_floating_ui_react_esm(), __toCommonJS(floating_ui_react_esm_exports));
    var import_compose_refs3 = require_cjs2();
    var import_core30 = require("@tamagui/core-node");
    var import_stacks9 = require_cjs12();
    var React13 = __toESM2(require("react"));
    var import_react_dom4 = require("react-dom");
    var import_context = require_context();
    var SCROLL_UP_BUTTON_NAME = "SelectScrollUpButton";
    var SelectScrollUpButton = React13.forwardRef((props, forwardedRef) => {
      return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
        SelectScrollButtonImpl,
        {
          componentName: SCROLL_UP_BUTTON_NAME,
          ...props,
          dir: "up",
          ref: forwardedRef
        }
      );
    });
    SelectScrollUpButton.displayName = SCROLL_UP_BUTTON_NAME;
    var SCROLL_DOWN_BUTTON_NAME = "SelectScrollDownButton";
    var SelectScrollDownButton = React13.forwardRef((props, forwardedRef) => {
      return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
        SelectScrollButtonImpl,
        {
          componentName: SCROLL_DOWN_BUTTON_NAME,
          ...props,
          dir: "down",
          ref: forwardedRef
        }
      );
    });
    SelectScrollDownButton.displayName = SCROLL_DOWN_BUTTON_NAME;
    var SelectScrollButtonImpl = React13.memo(
      React13.forwardRef(
        (props, forwardedRef) => {
          var _a;
          const { __scopeSelect, dir, componentName, ...scrollIndicatorProps } = props;
          const {
            floatingRef,
            forceUpdate,
            open,
            fallback,
            setScrollTop,
            setInnerOffset,
            ...context
          } = (0, import_context.useSelectContext)(componentName, __scopeSelect);
          const [element, setElement] = React13.useState(null);
          const statusRef = React13.useRef("idle");
          const isVisible = context[dir === "down" ? "canScrollDown" : "canScrollUp"];
          const frameRef = React13.useRef();
          const { x, y, reference, floating, strategy, update, refs } = (0, import_react13.useFloating)({
            open: open && isVisible,
            strategy: "fixed",
            placement: dir === "up" ? "top" : "bottom",
            middleware: [(0, import_react13.offset)(({ rects }) => -rects.floating.height)],
            whileElementsMounted: (...args) => (0, import_react13.autoUpdate)(...args, { animationFrame: true })
          });
          const composedRef = (0, import_compose_refs3.useComposedRefs)(forwardedRef, floating);
          if (floatingRef) {
            if (open) {
              if (element !== floatingRef.current) {
                setElement(floatingRef.current);
                reference(floatingRef.current);
                requestAnimationFrame(update);
              }
            } else {
              cancelAnimationFrame(frameRef.current);
            }
          }
          (0, import_core30.useIsomorphicLayoutEffect)(() => {
            return () => {
              cancelAnimationFrame(frameRef.current);
            };
          }, []);
          if (!(isVisible && floatingRef)) {
            return null;
          }
          const onScroll = /* @__PURE__ */ __name((amount) => {
            console.log("on scroll?");
            if (fallback) {
              if (refs.floating.current) {
                refs.floating.current.scrollTop -= amount;
                (0, import_react_dom4.flushSync)(() => {
                  var _a2;
                  return setScrollTop(((_a2 = refs.floating.current) == null ? void 0 : _a2.scrollTop) ?? 0);
                });
              }
            } else {
              (0, import_react_dom4.flushSync)(() => setInnerOffset((value) => value - amount));
            }
          }, "onScroll");
          return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
            import_stacks9.YStack,
            {
              ref: composedRef,
              componentName,
              "aria-hidden": true,
              ...scrollIndicatorProps,
              zIndex: 1e3,
              position: strategy,
              left: x || 0,
              top: y || 0,
              width: `calc(${(((_a = floatingRef == null ? void 0 : floatingRef.current) == null ? void 0 : _a.offsetWidth) ?? 0) - 2}px)`,
              onPointerEnter: () => {
                statusRef.current = "active";
                let prevNow = Date.now();
                function frame() {
                  if (element) {
                    const currentNow = Date.now();
                    const msElapsed = currentNow - prevNow;
                    prevNow = currentNow;
                    const pixelsToScroll = msElapsed / 2;
                    const remainingPixels = dir === "up" ? element.scrollTop : element.scrollHeight - element.clientHeight - element.scrollTop;
                    const scrollRemaining = dir === "up" ? element.scrollTop - pixelsToScroll > 0 : element.scrollTop + pixelsToScroll < element.scrollHeight - element.clientHeight;
                    onScroll(
                      dir === "up" ? Math.min(pixelsToScroll, remainingPixels) : Math.max(-pixelsToScroll, -remainingPixels)
                    );
                    if (scrollRemaining) {
                      frameRef.current = requestAnimationFrame(frame);
                    }
                  }
                }
                __name(frame, "frame");
                cancelAnimationFrame(frameRef.current);
                frameRef.current = requestAnimationFrame(frame);
              },
              onPointerLeave: () => {
                statusRef.current = "idle";
                cancelAnimationFrame(frameRef.current);
              }
            }
          );
        }
      )
    );
  }
});

// node_modules/@tamagui/select/dist/cjs/SelectViewport.js
var require_SelectViewport = __commonJS({
  "node_modules/@tamagui/select/dist/cjs/SelectViewport.js"(exports, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      // If the importer is in node compatibility mode or this is not an ESM
      // file that has been converted to a CommonJS file using a Babel-
      // compatible transform (i.e. "__esModule" has not been set), then set
      // "default" to the CommonJS "module.exports" for node compatibility.
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var SelectViewport_exports = {};
    __export2(SelectViewport_exports, {
      SelectViewport: () => SelectViewport,
      SelectViewportFrame: () => SelectViewportFrame
    });
    module2.exports = __toCommonJS2(SelectViewport_exports);
    var import_jsx_runtime13 = require("react/jsx-runtime");
    var import_react13 = (init_floating_ui_react_esm(), __toCommonJS(floating_ui_react_esm_exports));
    var import_core30 = require("@tamagui/core-node");
    var import_core210 = require("@tamagui/core-node");
    var import_portal3 = require_cjs13();
    var import_stacks9 = require_cjs12();
    var React13 = __toESM2(require("react"));
    var import_constants = require_constants3();
    var import_context = require_context();
    var import_useSelectBreakpointActive = require_useSelectBreakpointActive();
    var SelectViewportFrame = (0, import_core210.styled)(import_stacks9.ThemeableStack, {
      name: import_constants.VIEWPORT_NAME,
      backgroundColor: "$background",
      elevate: true,
      bordered: true,
      userSelect: "none",
      outlineWidth: 0,
      variants: {
        size: {
          "...size": (val, { tokens }) => {
            return {
              borderRadius: tokens.radius[val] ?? val
            };
          }
        }
      },
      defaultVariants: {
        size: "$2"
      }
    });
    var SelectViewport = React13.forwardRef(
      (props, forwardedRef) => {
        const { __scopeSelect, children, disableScroll, ...viewportProps } = props;
        const context = (0, import_context.useSelectContext)(import_constants.VIEWPORT_NAME, __scopeSelect);
        const breakpointActive = (0, import_useSelectBreakpointActive.useSelectBreakpointActive)(context.sheetBreakpoint);
        if (breakpointActive || !import_core30.isWeb) {
          return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_portal3.PortalItem, { hostName: `${context.scopeKey}SheetContents`, children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_context.ForwardSelectContext, { context, children }) });
        }
        if (!context.floatingContext) {
          return null;
        }
        if (!context.open) {
          return children;
        }
        const {
          style: { scrollbarWidth, listStyleType, overflow, ...restStyle },
          ...floatingProps
        } = context.interactions.getFloatingProps();
        return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(import_jsx_runtime13.Fragment, { children: [
          !disableScroll && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
            "style",
            {
              dangerouslySetInnerHTML: {
                __html: selectViewportCSS
              }
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_react13.FloatingFocusManager, { context: context.floatingContext, children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
            SelectViewportFrame,
            {
              size: context.size,
              role: "presentation",
              ...viewportProps,
              ref: forwardedRef,
              ...floatingProps,
              ...restStyle,
              overflow: disableScroll ? void 0 : overflow ?? "scroll",
              children
            }
          ) })
        ] });
      }
    );
    SelectViewport.displayName = import_constants.VIEWPORT_NAME;
    var selectViewportCSS = `
.is_SelectViewport {
  scrollbar-width: none;
  -webkit-overflow-scrolling: touch;
  overscroll-behavior: contain;
}

.is_SelectViewport::-webkit-scrollbar{
  display:none
}
`;
  }
});

// node_modules/@tamagui/select/dist/cjs/Select.js
var require_Select = __commonJS({
  "node_modules/@tamagui/select/dist/cjs/Select.js"(exports, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      // If the importer is in node compatibility mode or this is not an ESM
      // file that has been converted to a CommonJS file using a Babel-
      // compatible transform (i.e. "__esModule" has not been set), then set
      // "default" to the CommonJS "module.exports" for node compatibility.
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var Select_exports = {};
    __export2(Select_exports, {
      Select: () => Select,
      SelectGroupFrame: () => SelectGroupFrame,
      SelectIcon: () => SelectIcon,
      SelectItem: () => SelectItem,
      SelectItemTextFrame: () => SelectItemTextFrame,
      SelectSeparator: () => SelectSeparator,
      SelectTrigger: () => SelectTrigger
    });
    module2.exports = __toCommonJS2(Select_exports);
    var import_jsx_runtime13 = require("react/jsx-runtime");
    var import_adapt2 = require_cjs();
    var import_compose_refs3 = require_cjs2();
    var import_core30 = require("@tamagui/core-node");
    var import_core210 = require("@tamagui/core-node");
    var import_core32 = require("@tamagui/core-node");
    var import_list_item = require_cjs30();
    var import_portal3 = require_cjs13();
    var import_separator = require_cjs37();
    var import_sheet2 = require_cjs18();
    var import_stacks9 = require_cjs12();
    var import_text5 = require_cjs20();
    var import_use_controllable_state2 = require_cjs16();
    var React13 = __toESM2(require("react"));
    var import_constants = require_constants3();
    var import_context = require_context();
    var import_SelectContent = require_SelectContent();
    var import_SelectImpl = require_SelectImpl();
    var import_SelectScrollButton = require_SelectScrollButton();
    var import_SelectViewport = require_SelectViewport();
    var import_useSelectBreakpointActive = require_useSelectBreakpointActive();
    var TRIGGER_NAME3 = "SelectTrigger";
    var SelectTrigger = React13.forwardRef(
      (props, forwardedRef) => {
        const {
          __scopeSelect,
          disabled = false,
          // @ts-ignore
          "aria-labelledby": ariaLabelledby,
          ...triggerProps
        } = props;
        const context = (0, import_context.useSelectContext)(TRIGGER_NAME3, __scopeSelect);
        const labelledBy = ariaLabelledby;
        return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
          import_list_item.ListItem,
          {
            componentName: TRIGGER_NAME3,
            backgrounded: true,
            radiused: true,
            hoverTheme: true,
            pressTheme: true,
            focusTheme: true,
            focusable: true,
            borderWidth: 1,
            size: context.size,
            "aria-expanded": context.open,
            "aria-autocomplete": "none",
            "aria-labelledby": labelledBy,
            dir: context.dir,
            disabled,
            "data-disabled": disabled ? "" : void 0,
            ...triggerProps,
            ref: forwardedRef,
            ...process.env.TAMAGUI_TARGET === "web" && context.interactions ? context.interactions.getReferenceProps() : {
              onPress() {
                context.setOpen(!context.open);
              }
            }
          }
        );
      }
    );
    SelectTrigger.displayName = TRIGGER_NAME3;
    var VALUE_NAME = "SelectValue";
    var SelectValueFrame = (0, import_core210.styled)(import_text5.Paragraph, {
      name: VALUE_NAME,
      userSelect: "none"
    });
    var SelectValue = SelectValueFrame.extractable(
      React13.forwardRef(
        ({
          __scopeSelect,
          children: childrenProp,
          placeholder
        }, forwardedRef) => {
          const context = (0, import_context.useSelectContext)(VALUE_NAME, __scopeSelect);
          const { onValueNodeHasChildrenChange } = context;
          const composedRefs = (0, import_compose_refs3.useComposedRefs)(forwardedRef, context.onValueNodeChange);
          const children = childrenProp ?? context.selectedItem;
          const hasChildren = !!children;
          const selectValueChildren = context.value === void 0 && placeholder !== void 0 ? placeholder : children;
          (0, import_core210.useIsomorphicLayoutEffect)(() => {
            onValueNodeHasChildrenChange(hasChildren);
          }, [onValueNodeHasChildrenChange, hasChildren]);
          return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
            SelectValueFrame,
            {
              size: context.size,
              ref: composedRefs,
              pointerEvents: "none",
              children: selectValueChildren
            }
          );
        }
      )
    );
    SelectValue.displayName = VALUE_NAME;
    var SelectIcon = (0, import_core210.styled)(import_stacks9.XStack, {
      name: "SelectIcon",
      // @ts-ignore
      "aria-hidden": true,
      children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_text5.Paragraph, { children: "\u25BC" })
    });
    var ITEM_NAME = "SelectItem";
    var [SelectItemContextProvider, useSelectItemContext] = (0, import_context.createSelectContext)(ITEM_NAME);
    var SelectItem = React13.forwardRef(
      (props, forwardedRef) => {
        const {
          __scopeSelect,
          value,
          disabled = false,
          textValue: textValueProp,
          index: index3,
          ...itemProps
        } = props;
        const context = (0, import_context.useSelectContext)(ITEM_NAME, __scopeSelect);
        const isSelected = context.value === value;
        const textId = (0, import_core32.useId)();
        const {
          selectedIndex,
          setSelectedIndex,
          listRef,
          open,
          setOpen,
          onChange,
          setActiveIndex,
          allowMouseUpRef,
          allowSelectRef,
          setValueAtIndex,
          selectTimeoutRef,
          dataRef
        } = context;
        const composedRefs = (0, import_compose_refs3.useComposedRefs)(forwardedRef, (node) => {
          if (!import_core30.isWeb)
            return;
          if (node instanceof HTMLElement) {
            if (listRef) {
              listRef.current[index3] = node;
            }
          }
        });
        React13.useEffect(() => {
          setValueAtIndex(index3, value);
        }, [index3, setValueAtIndex, value]);
        function handleSelect() {
          setSelectedIndex(index3);
          onChange(value);
          setOpen(false);
        }
        __name(handleSelect, "handleSelect");
        const selectItemProps = context.interactions ? context.interactions.getItemProps({
          onTouchStart() {
            allowSelectRef.current = true;
            allowMouseUpRef.current = false;
          },
          onKeyDown(event) {
            if (event.key === "Enter" || event.key === " " && !(dataRef == null ? void 0 : dataRef.current.typing)) {
              event.preventDefault();
              handleSelect();
            } else {
              allowSelectRef.current = true;
            }
          },
          onClick() {
            if (allowSelectRef.current) {
              setSelectedIndex(index3);
              setOpen(false);
            }
          },
          onMouseUp() {
            if (!allowMouseUpRef.current) {
              return;
            }
            if (allowSelectRef.current) {
              handleSelect();
            }
            clearTimeout(selectTimeoutRef.current);
            selectTimeoutRef.current = setTimeout(() => {
              allowSelectRef.current = true;
            });
          }
        }) : {
          onPress: handleSelect
        };
        return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
          SelectItemContextProvider,
          {
            scope: __scopeSelect,
            value,
            textId: textId || "",
            isSelected,
            children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
              import_list_item.ListItem,
              {
                tag: "div",
                backgrounded: true,
                pressTheme: true,
                hoverTheme: true,
                cursor: "default",
                outlineWidth: 0,
                componentName: ITEM_NAME,
                ref: composedRefs,
                "aria-labelledby": textId,
                "aria-selected": isSelected,
                "data-state": isSelected ? "active" : "inactive",
                "aria-disabled": disabled || void 0,
                "data-disabled": disabled ? "" : void 0,
                tabIndex: disabled ? void 0 : -1,
                size: context.size,
                focusStyle: {
                  backgroundColor: "$backgroundHover"
                },
                ...itemProps,
                ...selectItemProps
              }
            )
          }
        );
      }
    );
    SelectItem.displayName = ITEM_NAME;
    var ITEM_TEXT_NAME = "SelectItemText";
    var SelectItemTextFrame = (0, import_core210.styled)(import_text5.SizableText, {
      name: ITEM_TEXT_NAME,
      userSelect: "none"
    });
    var SelectItemText = React13.forwardRef(
      (props, forwardedRef) => {
        const { __scopeSelect, className, ...itemTextProps } = props;
        const context = (0, import_context.useSelectContext)(ITEM_TEXT_NAME, __scopeSelect);
        const itemContext = useSelectItemContext(ITEM_TEXT_NAME, __scopeSelect);
        const ref = React13.useRef(null);
        const composedRefs = (0, import_compose_refs3.useComposedRefs)(forwardedRef, ref);
        const isSelected = Boolean(itemContext.isSelected && context.valueNode);
        const contents = React13.useMemo(
          () => /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
            SelectItemTextFrame,
            {
              className,
              size: context.size,
              id: itemContext.textId,
              ...itemTextProps,
              ref: composedRefs
            }
          ),
          // eslint-disable-next-line react-hooks/exhaustive-deps
          [props, context.size, className, itemContext.textId]
        );
        (0, import_core210.useIsomorphicLayoutEffect)(() => {
          if (isSelected) {
            context.setSelectedItem(contents);
          }
        }, [isSelected, contents]);
        return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_jsx_runtime13.Fragment, { children: contents });
      }
    );
    SelectItemText.displayName = ITEM_TEXT_NAME;
    var ITEM_INDICATOR_NAME = "SelectItemIndicator";
    var SelectItemIndicatorFrame = (0, import_core210.styled)(import_stacks9.XStack, {
      name: ITEM_TEXT_NAME
    });
    var SelectItemIndicator = React13.forwardRef(
      (props, forwardedRef) => {
        const { __scopeSelect, ...itemIndicatorProps } = props;
        const itemContext = useSelectItemContext(ITEM_INDICATOR_NAME, __scopeSelect);
        return itemContext.isSelected ? /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(SelectItemIndicatorFrame, { "aria-hidden": true, ...itemIndicatorProps, ref: forwardedRef }) : null;
      }
    );
    SelectItemIndicator.displayName = ITEM_INDICATOR_NAME;
    var GROUP_NAME = "SelectGroup";
    var [SelectGroupContextProvider, useSelectGroupContext] = (0, import_context.createSelectContext)(GROUP_NAME);
    var SelectGroupFrame = (0, import_core210.styled)(import_stacks9.YStack, {
      name: GROUP_NAME,
      width: "100%"
    });
    var SelectGroup = React13.forwardRef(
      (props, forwardedRef) => {
        const { __scopeSelect, ...groupProps } = props;
        const groupId = (0, import_core32.useId)();
        return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(SelectGroupContextProvider, { scope: __scopeSelect, id: groupId || "", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
          SelectGroupFrame,
          {
            role: "group",
            "aria-labelledby": groupId,
            ...groupProps,
            ref: forwardedRef
          }
        ) });
      }
    );
    SelectGroup.displayName = GROUP_NAME;
    var LABEL_NAME = "SelectLabel";
    var SelectLabel = React13.forwardRef(
      (props, forwardedRef) => {
        const { __scopeSelect, ...labelProps } = props;
        const context = (0, import_context.useSelectContext)(LABEL_NAME, __scopeSelect);
        const groupContext = useSelectGroupContext(LABEL_NAME, __scopeSelect);
        return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
          import_list_item.ListItem,
          {
            tag: "div",
            componentName: LABEL_NAME,
            fontWeight: "800",
            id: groupContext.id,
            size: context.size,
            ...labelProps,
            ref: forwardedRef
          }
        );
      }
    );
    SelectLabel.displayName = LABEL_NAME;
    var SelectSeparator = (0, import_core210.styled)(import_separator.Separator, {
      name: "SelectSeparator"
    });
    var SelectSheetController = /* @__PURE__ */ __name((props) => {
      const context = (0, import_context.useSelectContext)("SelectSheetController", props.__scopeSelect);
      const showSheet = (0, import_useSelectBreakpointActive.useShowSelectSheet)(context);
      const breakpointActive = (0, import_useSelectBreakpointActive.useSelectBreakpointActive)(context.sheetBreakpoint);
      const getShowSheet = (0, import_core210.useGet)(showSheet);
      return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
        import_sheet2.SheetController,
        {
          onOpenChange: (val) => {
            if (getShowSheet()) {
              props.onOpenChange(val);
            }
          },
          open: context.open,
          hidden: breakpointActive === false,
          children: props.children
        }
      );
    }, "SelectSheetController");
    var SelectSheetImpl = /* @__PURE__ */ __name((props) => {
      return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_jsx_runtime13.Fragment, { children: props.children });
    }, "SelectSheetImpl");
    var Select = (0, import_core210.withStaticProperties)(
      (props) => {
        const {
          __scopeSelect,
          children,
          open: openProp,
          defaultOpen,
          onOpenChange,
          value: valueProp,
          defaultValue: defaultValue2,
          onValueChange,
          size: sizeProp = "$true",
          dir
        } = props;
        const id = (0, import_core32.useId)();
        const scopeKey = __scopeSelect ? Object.keys(__scopeSelect)[0] ?? id : id;
        const { when, AdaptProvider } = (0, import_adapt2.useAdaptParent)({
          Contents: React13.useCallback(
            () => /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_portal3.PortalHost, { name: `${scopeKey}SheetContents` }),
            [scopeKey]
          )
        });
        const sheetBreakpoint = when;
        const isSheet = (0, import_useSelectBreakpointActive.useSelectBreakpointActive)(sheetBreakpoint);
        const SelectImpl = isSheet || !import_core30.isWeb ? SelectSheetImpl : import_SelectImpl.SelectInlineImpl;
        const forceUpdate = React13.useReducer(() => ({}), {})[1];
        const [selectedItem, setSelectedItem] = React13.useState(null);
        const [open, setOpen] = (0, import_use_controllable_state2.useControllableState)({
          prop: openProp,
          defaultProp: defaultOpen || false,
          onChange: onOpenChange,
          strategy: "most-recent-wins"
        });
        const [value, setValue] = (0, import_use_controllable_state2.useControllableState)({
          prop: valueProp,
          defaultProp: defaultValue2 || "",
          onChange: onValueChange,
          strategy: "most-recent-wins",
          transition: true
        });
        const [activeIndex, setActiveIndex] = React13.useState(0);
        const selectedIndexRef = React13.useRef(null);
        const activeIndexRef = React13.useRef(null);
        const listContentRef = React13.useRef([]);
        const [selectedIndex, setSelectedIndex] = React13.useState(0);
        const [valueNode, setValueNode] = React13.useState(null);
        const [valueNodeHasChildren, setValueNodeHasChildren] = React13.useState(false);
        (0, import_core210.useIsomorphicLayoutEffect)(() => {
          selectedIndexRef.current = selectedIndex;
          activeIndexRef.current = activeIndex;
        });
        return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(AdaptProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
          import_context.SelectProvider,
          {
            dir,
            blockSelection: false,
            size: sizeProp,
            fallback: false,
            selectedItem,
            setSelectedItem,
            forceUpdate,
            valueNode,
            onValueNodeChange: setValueNode,
            onValueNodeHasChildrenChange: setValueNodeHasChildren,
            valueNodeHasChildren,
            scopeKey,
            sheetBreakpoint,
            scope: __scopeSelect,
            setValueAtIndex: (index3, value2) => {
              listContentRef.current[index3] = value2;
            },
            activeIndex,
            onChange: setValue,
            selectedIndex,
            setActiveIndex,
            setOpen,
            setSelectedIndex,
            value,
            open,
            children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(SelectSheetController, { onOpenChange: setOpen, __scopeSelect, children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
              SelectImpl,
              {
                activeIndexRef,
                listContentRef,
                selectedIndexRef,
                ...props,
                open,
                value,
                children
              }
            ) })
          }
        ) });
      },
      {
        Adapt: import_adapt2.Adapt,
        Content: import_SelectContent.SelectContent,
        Group: SelectGroup,
        Icon: SelectIcon,
        Item: SelectItem,
        ItemIndicator: SelectItemIndicator,
        ItemText: SelectItemText,
        Label: SelectLabel,
        ScrollDownButton: import_SelectScrollButton.SelectScrollDownButton,
        ScrollUpButton: import_SelectScrollButton.SelectScrollUpButton,
        Trigger: SelectTrigger,
        Value: SelectValue,
        Viewport: import_SelectViewport.SelectViewport,
        Sheet: import_sheet2.ControlledSheet
      }
    );
    Select.displayName = import_constants.SELECT_NAME;
  }
});

// node_modules/@tamagui/select/dist/cjs/index.js
var require_cjs38 = __commonJS({
  "node_modules/@tamagui/select/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_Select(), module2.exports);
    __reExport2(src_exports, require_context(), module2.exports);
  }
});

// node_modules/@tamagui/use-direction/dist/cjs/useDirection.js
var require_useDirection = __commonJS({
  "node_modules/@tamagui/use-direction/dist/cjs/useDirection.js"(exports, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      // If the importer is in node compatibility mode or this is not an ESM
      // file that has been converted to a CommonJS file using a Babel-
      // compatible transform (i.e. "__esModule" has not been set), then set
      // "default" to the CommonJS "module.exports" for node compatibility.
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var useDirection_exports = {};
    __export2(useDirection_exports, {
      DirectionProvider: () => DirectionProvider,
      Provider: () => Provider,
      useDirection: () => useDirection
    });
    module2.exports = __toCommonJS2(useDirection_exports);
    var import_jsx_runtime13 = require("react/jsx-runtime");
    var React13 = __toESM2(require("react"));
    var DirectionContext = React13.createContext(void 0);
    var DirectionProvider = /* @__PURE__ */ __name((props) => {
      const { dir, children } = props;
      return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(DirectionContext.Provider, { value: dir, children });
    }, "DirectionProvider");
    function useDirection(localDir) {
      const globalDir = React13.useContext(DirectionContext);
      return localDir || globalDir || "ltr";
    }
    __name(useDirection, "useDirection");
    var Provider = DirectionProvider;
  }
});

// node_modules/@tamagui/use-direction/dist/cjs/index.js
var require_cjs39 = __commonJS({
  "node_modules/@tamagui/use-direction/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_useDirection(), module2.exports);
  }
});

// node_modules/@tamagui/slider/dist/cjs/constants.js
var require_constants4 = __commonJS({
  "node_modules/@tamagui/slider/dist/cjs/constants.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var constants_exports = {};
    __export2(constants_exports, {
      ARROW_KEYS: () => ARROW_KEYS,
      BACK_KEYS: () => BACK_KEYS,
      PAGE_KEYS: () => PAGE_KEYS,
      SLIDER_NAME: () => SLIDER_NAME,
      SliderOrientationProvider: () => SliderOrientationProvider,
      SliderProvider: () => SliderProvider,
      createSliderContext: () => createSliderContext,
      createSliderScope: () => createSliderScope,
      useSliderContext: () => useSliderContext,
      useSliderOrientationContext: () => useSliderOrientationContext
    });
    module2.exports = __toCommonJS2(constants_exports);
    var import_create_context5 = require_cjs3();
    var SLIDER_NAME = "Slider";
    var [createSliderContext, createSliderScope] = (0, import_create_context5.createContextScope)(SLIDER_NAME);
    var [SliderProvider, useSliderContext] = createSliderContext(SLIDER_NAME);
    var [SliderOrientationProvider, useSliderOrientationContext] = createSliderContext(SLIDER_NAME, {
      startEdge: "left",
      endEdge: "right",
      sizeProp: "width",
      size: 0,
      direction: 1
    });
    var PAGE_KEYS = ["PageUp", "PageDown"];
    var ARROW_KEYS = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
    var BACK_KEYS = {
      ltr: ["ArrowDown", "Home", "ArrowLeft", "PageDown"],
      rtl: ["ArrowDown", "Home", "ArrowRight", "PageDown"]
    };
  }
});

// node_modules/@tamagui/slider/dist/cjs/helpers.js
var require_helpers = __commonJS({
  "node_modules/@tamagui/slider/dist/cjs/helpers.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var helpers_exports = {};
    __export2(helpers_exports, {
      convertValueToPercentage: () => convertValueToPercentage,
      getClosestValueIndex: () => getClosestValueIndex,
      getDecimalCount: () => getDecimalCount,
      getLabel: () => getLabel,
      getNextSortedValues: () => getNextSortedValues,
      getThumbInBoundsOffset: () => getThumbInBoundsOffset,
      hasMinStepsBetweenValues: () => hasMinStepsBetweenValues,
      linearScale: () => linearScale,
      roundValue: () => roundValue
    });
    module2.exports = __toCommonJS2(helpers_exports);
    function getNextSortedValues(prevValues = [], nextValue, atIndex) {
      const nextValues = [...prevValues];
      nextValues[atIndex] = nextValue;
      return nextValues.sort((a, b) => a - b);
    }
    __name(getNextSortedValues, "getNextSortedValues");
    function convertValueToPercentage(value, min3, max3) {
      const maxSteps = max3 - min3;
      const percentPerStep = 100 / maxSteps;
      return percentPerStep * (value - min3);
    }
    __name(convertValueToPercentage, "convertValueToPercentage");
    function getLabel(index3, totalValues) {
      if (totalValues > 2) {
        return `Value ${index3 + 1} of ${totalValues}`;
      } else if (totalValues === 2) {
        return ["Minimum", "Maximum"][index3];
      } else {
        return void 0;
      }
    }
    __name(getLabel, "getLabel");
    function getClosestValueIndex(values, nextValue) {
      if (values.length === 1)
        return 0;
      const distances = values.map((value) => Math.abs(value - nextValue));
      const closestDistance = Math.min(...distances);
      return distances.indexOf(closestDistance);
    }
    __name(getClosestValueIndex, "getClosestValueIndex");
    function getThumbInBoundsOffset(width, left, direction) {
      const halfWidth = width / 2;
      const halfPercent = 50;
      const offset2 = linearScale([0, halfPercent], [0, halfWidth]);
      return (halfWidth - offset2(left) * direction) * direction;
    }
    __name(getThumbInBoundsOffset, "getThumbInBoundsOffset");
    function getStepsBetweenValues(values) {
      return values.slice(0, -1).map((value, index3) => values[index3 + 1] - value);
    }
    __name(getStepsBetweenValues, "getStepsBetweenValues");
    function hasMinStepsBetweenValues(values, minStepsBetweenValues) {
      if (minStepsBetweenValues > 0) {
        const stepsBetweenValues = getStepsBetweenValues(values);
        const actualMinStepsBetweenValues = Math.min(...stepsBetweenValues);
        return actualMinStepsBetweenValues >= minStepsBetweenValues;
      }
      return true;
    }
    __name(hasMinStepsBetweenValues, "hasMinStepsBetweenValues");
    function linearScale(input, output) {
      return (value) => {
        if (input[0] === input[1] || output[0] === output[1])
          return output[0];
        const ratio = (output[1] - output[0]) / (input[1] - input[0]);
        return output[0] + ratio * (value - input[0]);
      };
    }
    __name(linearScale, "linearScale");
    function getDecimalCount(value) {
      return (String(value).split(".")[1] || "").length;
    }
    __name(getDecimalCount, "getDecimalCount");
    function roundValue(value, decimalCount) {
      const rounder = Math.pow(10, decimalCount);
      return Math.round(value * rounder) / rounder;
    }
    __name(roundValue, "roundValue");
  }
});

// node_modules/@tamagui/slider/dist/cjs/SliderImpl.js
var require_SliderImpl = __commonJS({
  "node_modules/@tamagui/slider/dist/cjs/SliderImpl.js"(exports, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      // If the importer is in node compatibility mode or this is not an ESM
      // file that has been converted to a CommonJS file using a Babel-
      // compatible transform (i.e. "__esModule" has not been set), then set
      // "default" to the CommonJS "module.exports" for node compatibility.
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var SliderImpl_exports = {};
    __export2(SliderImpl_exports, {
      DirectionalYStack: () => DirectionalYStack2,
      SliderFrame: () => SliderFrame2,
      SliderImpl: () => SliderImpl
    });
    module2.exports = __toCommonJS2(SliderImpl_exports);
    var import_jsx_runtime13 = require("react/jsx-runtime");
    var import_core30 = require("@tamagui/core-node");
    var import_get_size2 = require_cjs10();
    var import_stacks9 = require_cjs12();
    var React13 = __toESM2(require("react"));
    var import_constants = require_constants4();
    var DirectionalYStack2 = (0, import_core30.styled)(import_stacks9.YStack, {
      variants: {
        orientation: {
          horizontal: {},
          vertical: {}
        }
      }
    });
    var SliderFrame2 = (0, import_core30.styled)(DirectionalYStack2, {
      position: "relative",
      variants: {
        size: (val, extras) => {
          const orientation = extras.props.orientation;
          const size2 = Math.round((0, import_core30.getVariableValue)((0, import_get_size2.getSize)(val)) / 6);
          if (orientation === "horizontal") {
            return {
              height: size2,
              borderRadius: size2,
              justifyContent: "center"
            };
          }
          return {
            width: size2,
            borderRadius: size2,
            alignItems: "center"
          };
        }
      }
    });
    var SliderImpl = React13.forwardRef(
      (props, forwardedRef) => {
        const {
          __scopeSlider,
          onSlideStart,
          onSlideMove,
          onSlideEnd,
          onHomeKeyDown,
          onEndKeyDown,
          onStepKeyDown,
          ...sliderProps
        } = props;
        const context = (0, import_constants.useSliderContext)(import_constants.SLIDER_NAME, __scopeSlider);
        return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
          SliderFrame2,
          {
            size: "$4",
            ...sliderProps,
            "data-orientation": sliderProps.orientation,
            ref: forwardedRef,
            ...import_core30.isWeb && {
              onKeyDown: (event) => {
                if (event.key === "Home") {
                  onHomeKeyDown(event);
                  event.preventDefault();
                } else if (event.key === "End") {
                  onEndKeyDown(event);
                  event.preventDefault();
                } else if (import_constants.PAGE_KEYS.concat(import_constants.ARROW_KEYS).includes(event.key)) {
                  onStepKeyDown(event);
                  event.preventDefault();
                }
              }
            },
            onMoveShouldSetResponderCapture: () => true,
            onScrollShouldSetResponder: () => true,
            onScrollShouldSetResponderCapture: () => true,
            onMoveShouldSetResponder: () => true,
            onStartShouldSetResponder: () => true,
            onResponderTerminationRequest: () => {
              return false;
            },
            onResponderGrant: (0, import_core30.composeEventHandlers)(props.onResponderGrant, (event) => {
              const target = event.target;
              const isStartingOnThumb = context.thumbs.has(target);
              if (import_core30.isWeb && target instanceof HTMLElement) {
                if (context.thumbs.has(target)) {
                  target.focus();
                }
              }
              onSlideStart(event, isStartingOnThumb ? "thumb" : "track");
            }),
            onResponderMove: (0, import_core30.composeEventHandlers)(props.onResponderMove, (event) => {
              event.stopPropagation();
              onSlideMove(event);
            }),
            onResponderRelease: (0, import_core30.composeEventHandlers)(props.onResponderRelease, (event) => {
              onSlideEnd(event);
            })
          }
        );
      }
    );
  }
});

// node_modules/@tamagui/slider/dist/cjs/Slider.js
var require_Slider = __commonJS({
  "node_modules/@tamagui/slider/dist/cjs/Slider.js"(exports, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      // If the importer is in node compatibility mode or this is not an ESM
      // file that has been converted to a CommonJS file using a Babel-
      // compatible transform (i.e. "__esModule" has not been set), then set
      // "default" to the CommonJS "module.exports" for node compatibility.
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var Slider_exports = {};
    __export2(Slider_exports, {
      Range: () => Range,
      Slider: () => Slider,
      SliderThumb: () => SliderThumb,
      SliderThumbFrame: () => SliderThumbFrame,
      SliderTrack: () => SliderTrack,
      SliderTrackActive: () => SliderTrackActive,
      SliderTrackActiveFrame: () => SliderTrackActiveFrame,
      SliderTrackFrame: () => SliderTrackFrame,
      Thumb: () => Thumb,
      Track: () => Track
    });
    module2.exports = __toCommonJS2(Slider_exports);
    var import_jsx_runtime13 = require("react/jsx-runtime");
    var import_compose_refs3 = require_cjs2();
    var import_core30 = require("@tamagui/core-node");
    var import_get_size2 = require_cjs10();
    var import_helpers = require_cjs27();
    var import_stacks9 = require_cjs12();
    var import_use_controllable_state2 = require_cjs16();
    var import_use_direction = require_cjs39();
    var React13 = __toESM2(require("react"));
    var import_constants = require_constants4();
    var import_helpers2 = require_helpers();
    var import_SliderImpl = require_SliderImpl();
    var SliderHorizontal = React13.forwardRef(
      (props, forwardedRef) => {
        const { min: min3, max: max3, dir, onSlideStart, onSlideMove, onStepKeyDown, ...sliderProps } = props;
        const direction = (0, import_use_direction.useDirection)(dir);
        const isDirectionLTR = direction === "ltr";
        const sliderRef = React13.useRef(null);
        const [state, setState] = React13.useState(() => ({ size: 0, offset: 0 }));
        function getValueFromPointer(pointerPosition) {
          const input = [0, state.size];
          const output = isDirectionLTR ? [min3, max3] : [max3, min3];
          const value = (0, import_helpers2.linearScale)(input, output);
          return value(pointerPosition);
        }
        __name(getValueFromPointer, "getValueFromPointer");
        return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
          import_constants.SliderOrientationProvider,
          {
            scope: props.__scopeSlider,
            startEdge: isDirectionLTR ? "left" : "right",
            endEdge: isDirectionLTR ? "right" : "left",
            direction: isDirectionLTR ? 1 : -1,
            sizeProp: "width",
            size: state.size,
            children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
              import_SliderImpl.SliderImpl,
              {
                ref: (0, import_compose_refs3.composeRefs)(forwardedRef, sliderRef),
                dir: direction,
                ...sliderProps,
                orientation: "horizontal",
                onLayout: () => {
                  var _a;
                  (_a = sliderRef.current) == null ? void 0 : _a.measure((_x, _y, width, _height, pageX, _pageY) => {
                    setState({
                      size: width,
                      offset: pageX
                    });
                  });
                },
                onSlideStart: (event, target) => {
                  const value = getValueFromPointer(event.nativeEvent.locationX);
                  if (value) {
                    onSlideStart == null ? void 0 : onSlideStart(value, target);
                  }
                },
                onSlideMove: (event) => {
                  const value = getValueFromPointer(event.nativeEvent.pageX - state.offset);
                  if (value) {
                    onSlideMove == null ? void 0 : onSlideMove(value);
                  }
                },
                onSlideEnd: () => {
                },
                onStepKeyDown: (event) => {
                  const isBackKey = import_constants.BACK_KEYS[direction].includes(event.key);
                  onStepKeyDown == null ? void 0 : onStepKeyDown({ event, direction: isBackKey ? -1 : 1 });
                }
              }
            )
          }
        );
      }
    );
    var SliderVertical = React13.forwardRef(
      (props, forwardedRef) => {
        const { min: min3, max: max3, onSlideStart, onSlideMove, onStepKeyDown, ...sliderProps } = props;
        const [state, setState] = React13.useState(() => ({ size: 0, offset: 0 }));
        const sliderRef = React13.useRef(null);
        function getValueFromPointer(pointerPosition) {
          const input = [0, state.size];
          const output = [max3, min3];
          const value = (0, import_helpers2.linearScale)(input, output);
          return value(pointerPosition);
        }
        __name(getValueFromPointer, "getValueFromPointer");
        return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
          import_constants.SliderOrientationProvider,
          {
            scope: props.__scopeSlider,
            startEdge: "bottom",
            endEdge: "top",
            sizeProp: "height",
            size: state.size,
            direction: 1,
            children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
              import_SliderImpl.SliderImpl,
              {
                ref: (0, import_compose_refs3.composeRefs)(forwardedRef, sliderRef),
                ...sliderProps,
                orientation: "vertical",
                onLayout: ({ nativeEvent: { layout } }) => {
                  var _a;
                  (_a = sliderRef.current) == null ? void 0 : _a.measure((_x, _y, _width, height, _pageX, pageY) => {
                    setState({
                      size: height,
                      offset: pageY
                    });
                  });
                },
                onSlideStart: (event, target) => {
                  const value = getValueFromPointer(event.nativeEvent.locationY);
                  if (value) {
                    onSlideStart == null ? void 0 : onSlideStart(value, target);
                  }
                },
                onSlideMove: (event) => {
                  const value = getValueFromPointer(event.nativeEvent.pageY - state.offset);
                  if (value) {
                    onSlideMove == null ? void 0 : onSlideMove(value);
                  }
                },
                onSlideEnd: () => {
                },
                onStepKeyDown: (event) => {
                  const isBackKey = import_constants.BACK_KEYS.ltr.includes(event.key);
                  onStepKeyDown == null ? void 0 : onStepKeyDown({ event, direction: isBackKey ? -1 : 1 });
                }
              }
            )
          }
        );
      }
    );
    var TRACK_NAME = "SliderTrack";
    var SliderTrackFrame = (0, import_core30.styled)(import_SliderImpl.SliderFrame, {
      name: "SliderTrack",
      height: "100%",
      width: "100%",
      backgroundColor: "$background",
      position: "relative",
      borderRadius: 1e5,
      overflow: "hidden"
    });
    var SliderTrack = React13.forwardRef(
      (props, forwardedRef) => {
        const { __scopeSlider, ...trackProps } = props;
        const context = (0, import_constants.useSliderContext)(TRACK_NAME, __scopeSlider);
        return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
          SliderTrackFrame,
          {
            "data-disabled": context.disabled ? "" : void 0,
            "data-orientation": context.orientation,
            orientation: context.orientation,
            size: context.size,
            ...trackProps,
            ref: forwardedRef
          }
        );
      }
    );
    SliderTrack.displayName = TRACK_NAME;
    var RANGE_NAME = "SliderTrackActive";
    var SliderTrackActiveFrame = (0, import_core30.styled)(import_SliderImpl.SliderFrame, {
      name: "SliderTrackActive",
      backgroundColor: "$background",
      position: "absolute"
    });
    var SliderTrackActive = React13.forwardRef(
      (props, forwardedRef) => {
        const { __scopeSlider, ...rangeProps } = props;
        const context = (0, import_constants.useSliderContext)(RANGE_NAME, __scopeSlider);
        const orientation = (0, import_constants.useSliderOrientationContext)(RANGE_NAME, __scopeSlider);
        const ref = React13.useRef(null);
        const composedRefs = (0, import_compose_refs3.useComposedRefs)(forwardedRef, ref);
        const valuesCount = context.values.length;
        const percentages = context.values.map(
          (value) => (0, import_helpers2.convertValueToPercentage)(value, context.min, context.max)
        );
        const offsetStart = valuesCount > 1 ? Math.min(...percentages) : 0;
        const offsetEnd = 100 - Math.max(...percentages);
        return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
          SliderTrackActiveFrame,
          {
            orientation: context.orientation,
            "data-orientation": context.orientation,
            "data-disabled": context.disabled ? "" : void 0,
            size: context.size,
            ...rangeProps,
            ref: composedRefs,
            ...{
              [orientation.startEdge]: `${offsetStart}%`,
              [orientation.endEdge]: `${offsetEnd}%`
            },
            ...orientation.sizeProp === "width" ? {
              height: "100%"
            } : {
              left: 0,
              right: 0
            }
          }
        );
      }
    );
    SliderTrackActive.displayName = RANGE_NAME;
    var THUMB_NAME = "SliderThumb";
    var getThumbSize = /* @__PURE__ */ __name((val) => {
      const size2 = typeof val === "number" ? val : (0, import_get_size2.getSize)(val, -1);
      return {
        width: size2,
        height: size2,
        minWidth: size2,
        minHeight: size2
      };
    }, "getThumbSize");
    var SliderThumbFrame = (0, import_core30.styled)(import_stacks9.ThemeableStack, {
      name: "SliderThumb",
      position: "absolute",
      bordered: 2,
      borderWidth: 2,
      backgrounded: true,
      pressTheme: import_core30.isWeb,
      focusTheme: import_core30.isWeb,
      hoverTheme: import_core30.isWeb,
      variants: {
        size: {
          "...size": getThumbSize
        }
      }
    });
    var SliderThumb = React13.forwardRef(
      (props, forwardedRef) => {
        const { __scopeSlider, index: index3, size: sizeProp, ...thumbProps } = props;
        const context = (0, import_constants.useSliderContext)(THUMB_NAME, __scopeSlider);
        const orientation = (0, import_constants.useSliderOrientationContext)(THUMB_NAME, __scopeSlider);
        const [thumb, setThumb] = React13.useState(null);
        const composedRefs = (0, import_compose_refs3.useComposedRefs)(forwardedRef, (node) => setThumb(node));
        const value = context.values[index3];
        const percent = value === void 0 ? 0 : (0, import_helpers2.convertValueToPercentage)(value, context.min, context.max);
        const label = (0, import_helpers2.getLabel)(index3, context.values.length);
        const sizeIn = sizeProp ?? context.size ?? "$true";
        const [size2, setSize] = React13.useState(() => {
          const estimatedSize = (0, import_core30.getVariableValue)(getThumbSize(sizeIn).width);
          return estimatedSize;
        });
        const thumbInBoundsOffset = size2 ? (0, import_helpers2.getThumbInBoundsOffset)(size2, percent, orientation.direction) : 0;
        React13.useEffect(() => {
          if (thumb) {
            context.thumbs.add(thumb);
            return () => {
              context.thumbs.delete(thumb);
            };
          }
        }, [thumb, context.thumbs]);
        return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
          SliderThumbFrame,
          {
            ref: composedRefs,
            role: "slider",
            "aria-label": props["aria-label"] || label,
            "aria-valuemin": context.min,
            "aria-valuenow": value,
            "aria-valuemax": context.max,
            "aria-orientation": context.orientation,
            "data-orientation": context.orientation,
            "data-disabled": context.disabled ? "" : void 0,
            tabIndex: context.disabled ? void 0 : 0,
            animateOnly: ["transform", "left", "right", "top", "bottom"],
            ...thumbProps,
            ...context.orientation === "horizontal" ? {
              x: thumbInBoundsOffset - size2 / 2,
              y: -size2 / 2,
              top: "50%",
              ...size2 === 0 && {
                top: "auto",
                bottom: "auto"
              }
            } : {
              x: -size2 / 2,
              y: size2 / 2,
              left: "50%",
              ...size2 === 0 && {
                left: "auto",
                right: "auto"
              }
            },
            ...{
              [orientation.startEdge]: `${percent}%`
            },
            size: sizeIn,
            onLayout: (e) => {
              setSize(e.nativeEvent.layout[orientation.sizeProp]);
            },
            onFocus: (0, import_helpers.composeEventHandlers)(props.onFocus, () => {
              context.valueIndexToChangeRef.current = index3;
            })
          }
        );
      }
    );
    SliderThumb.displayName = THUMB_NAME;
    var Slider = (0, import_core30.withStaticProperties)(
      React13.forwardRef((props, forwardedRef) => {
        const {
          name,
          min: min3 = 0,
          max: max3 = 100,
          step = 1,
          orientation = "horizontal",
          disabled = false,
          minStepsBetweenThumbs = 0,
          defaultValue: defaultValue2 = [min3],
          value,
          onValueChange = /* @__PURE__ */ __name(() => {
          }, "onValueChange"),
          size: sizeProp,
          ...sliderProps
        } = props;
        const sliderRef = React13.useRef(null);
        const composedRefs = (0, import_compose_refs3.useComposedRefs)(sliderRef, forwardedRef);
        const thumbRefs = React13.useRef(/* @__PURE__ */ new Set());
        const valueIndexToChangeRef = React13.useRef(0);
        const isHorizontal = orientation === "horizontal";
        const [values = [], setValues] = (0, import_use_controllable_state2.useControllableState)({
          prop: value,
          defaultProp: defaultValue2,
          transition: true,
          onChange: (value2) => {
            var _a;
            if (import_core30.isWeb) {
              const thumbs = [...thumbRefs.current];
              (_a = thumbs[valueIndexToChangeRef.current]) == null ? void 0 : _a.focus();
            }
            onValueChange(value2);
          }
        });
        if (import_core30.isWeb) {
          React13.useEffect(() => {
            const node = sliderRef.current;
            if (!node)
              return;
            const preventDefault = /* @__PURE__ */ __name((e) => {
              e.preventDefault();
            }, "preventDefault");
            node.addEventListener("touchstart", preventDefault);
            return () => {
              node.removeEventListener("touchstart", preventDefault);
            };
          }, []);
        }
        function handleSlideMove(value2) {
          updateValues(value2, valueIndexToChangeRef.current);
        }
        __name(handleSlideMove, "handleSlideMove");
        function updateValues(value2, atIndex) {
          const decimalCount = (0, import_helpers2.getDecimalCount)(step);
          const snapToStep = (0, import_helpers2.roundValue)(
            Math.round((value2 - min3) / step) * step + min3,
            decimalCount
          );
          const nextValue = (0, import_helpers.clamp)(snapToStep, [min3, max3]);
          setValues((prevValues = []) => {
            const nextValues = (0, import_helpers2.getNextSortedValues)(prevValues, nextValue, atIndex);
            if ((0, import_helpers2.hasMinStepsBetweenValues)(nextValues, minStepsBetweenThumbs * step)) {
              valueIndexToChangeRef.current = nextValues.indexOf(nextValue);
              return String(nextValues) === String(prevValues) ? prevValues : nextValues;
            } else {
              return prevValues;
            }
          });
        }
        __name(updateValues, "updateValues");
        const SliderOriented = isHorizontal ? SliderHorizontal : SliderVertical;
        return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
          import_constants.SliderProvider,
          {
            scope: props.__scopeSlider,
            disabled,
            min: min3,
            max: max3,
            valueIndexToChangeRef,
            thumbs: thumbRefs.current,
            values,
            orientation,
            size: sizeProp,
            children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
              SliderOriented,
              {
                "aria-disabled": disabled,
                "data-disabled": disabled ? "" : void 0,
                ...sliderProps,
                ref: composedRefs,
                min: min3,
                max: max3,
                onSlideStart: disabled ? void 0 : (value2, target) => {
                  if (target !== "thumb") {
                    const closestIndex = (0, import_helpers2.getClosestValueIndex)(values, value2);
                    updateValues(value2, closestIndex);
                  }
                },
                onSlideMove: disabled ? void 0 : handleSlideMove,
                onHomeKeyDown: () => !disabled && updateValues(min3, 0),
                onEndKeyDown: () => !disabled && updateValues(max3, values.length - 1),
                onStepKeyDown: ({ event, direction: stepDirection }) => {
                  if (!disabled) {
                    const isPageKey = import_constants.PAGE_KEYS.includes(event.key);
                    const isSkipKey = isPageKey || event.shiftKey && import_constants.ARROW_KEYS.includes(event.key);
                    const multiplier = isSkipKey ? 10 : 1;
                    const atIndex = valueIndexToChangeRef.current;
                    const value2 = values[atIndex];
                    const stepInDirection = step * multiplier * stepDirection;
                    updateValues(value2 + stepInDirection, atIndex);
                  }
                }
              }
            )
          }
        );
      }),
      {
        Track: SliderTrack,
        TrackActive: SliderTrackActive,
        Thumb: SliderThumb
      }
    );
    Slider.displayName = import_constants.SLIDER_NAME;
    var Track = SliderTrack;
    var Range = SliderTrackActive;
    var Thumb = SliderThumb;
  }
});

// node_modules/@tamagui/slider/dist/cjs/index.js
var require_cjs40 = __commonJS({
  "node_modules/@tamagui/slider/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    __export2(src_exports, {
      DirectionalYStack: () => import_SliderImpl.DirectionalYStack,
      SliderFrame: () => import_SliderImpl.SliderFrame
    });
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_Slider(), module2.exports);
    var import_SliderImpl = require_SliderImpl();
  }
});

// node_modules/@tamagui/switch/dist/cjs/Switch.js
var require_Switch = __commonJS({
  "node_modules/@tamagui/switch/dist/cjs/Switch.js"(exports, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      // If the importer is in node compatibility mode or this is not an ESM
      // file that has been converted to a CommonJS file using a Babel-
      // compatible transform (i.e. "__esModule" has not been set), then set
      // "default" to the CommonJS "module.exports" for node compatibility.
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var Switch_exports = {};
    __export2(Switch_exports, {
      Switch: () => Switch,
      SwitchFrame: () => SwitchFrame,
      SwitchThumb: () => SwitchThumb,
      SwitchThumbFrame: () => SwitchThumbFrame,
      createSwitchScope: () => createSwitchScope
    });
    module2.exports = __toCommonJS2(Switch_exports);
    var import_jsx_runtime13 = require("react/jsx-runtime");
    var import_react_use_previous = require_dist4();
    var import_compose_refs3 = require_cjs2();
    var import_core30 = require("@tamagui/core-node");
    var import_create_context5 = require_cjs3();
    var import_focusable4 = require_cjs29();
    var import_get_size2 = require_cjs10();
    var import_label = require_cjs35();
    var import_stacks9 = require_cjs12();
    var import_use_controllable_state2 = require_cjs16();
    var React13 = __toESM2(require("react"));
    var SWITCH_NAME = "Switch";
    var getSwitchHeight = /* @__PURE__ */ __name((val) => Math.round((0, import_core30.getVariableValue)((0, import_get_size2.getSize)(val)) * 0.65), "getSwitchHeight");
    var getSwitchWidth = /* @__PURE__ */ __name((val) => getSwitchHeight(val) * 2, "getSwitchWidth");
    var scopeContexts = (0, import_create_context5.createContextScope)(SWITCH_NAME);
    var [createSwitchContext] = scopeContexts;
    var createSwitchScope = scopeContexts[1];
    var [SwitchProvider, useSwitchContext] = createSwitchContext(SWITCH_NAME);
    var THUMB_NAME = "SwitchThumb";
    var SwitchThumbFrame = (0, import_core30.styled)(import_stacks9.ThemeableStack, {
      name: "SwitchThumb",
      backgroundColor: "$background",
      borderRadius: 1e3,
      variants: {
        size: {
          "...size": (val) => {
            const size2 = getSwitchHeight(val);
            return {
              height: size2,
              width: size2
            };
          }
        }
      },
      defaultVariants: {
        size: "$true"
      }
    });
    var SwitchThumb = SwitchThumbFrame.extractable(
      React13.forwardRef(
        (props, forwardedRef) => {
          const { __scopeSwitch, ...thumbProps } = props;
          const { size: size2, disabled, checked } = useSwitchContext(THUMB_NAME, __scopeSwitch);
          return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
            SwitchThumbFrame,
            {
              size: size2,
              "data-state": getState2(checked),
              "data-disabled": disabled ? "" : void 0,
              ...thumbProps,
              x: checked ? (0, import_core30.getVariableValue)(getSwitchWidth(size2)) - (0, import_core30.getVariableValue)(getSwitchHeight(size2)) : 0,
              ref: forwardedRef
            }
          );
        }
      )
    );
    SwitchThumb.displayName = THUMB_NAME;
    var SwitchFrame = (0, import_core30.styled)(import_stacks9.XStack, {
      name: "Switch",
      tag: "button",
      borderRadius: 1e3,
      borderWidth: 2,
      borderColor: "transparent",
      backgroundColor: "$background",
      focusStyle: {
        borderColor: "$borderColorFocus"
      },
      variants: {
        size: {
          "...size": (val) => {
            const height = getSwitchHeight(val) + 4;
            const width = getSwitchWidth(val) + 4;
            return {
              height,
              minHeight: height,
              width
            };
          }
        }
      },
      defaultVariants: {
        size: "$true"
      }
    });
    var Switch = (0, import_core30.withStaticProperties)(
      SwitchFrame.extractable(
        React13.forwardRef(
          (props, forwardedRef) => {
            const {
              __scopeSwitch,
              labeledBy: ariaLabelledby,
              name,
              checked: checkedProp,
              defaultChecked,
              required,
              disabled,
              value = "on",
              onCheckedChange,
              size: size2 = "$true",
              ...switchProps
            } = props;
            const [button, setButton] = React13.useState(null);
            const composedRefs = (0, import_compose_refs3.useComposedRefs)(
              forwardedRef,
              (node) => setButton(node)
            );
            const labelId = (0, import_label.useLabelContext)(button);
            const labelledBy = ariaLabelledby || labelId;
            const hasConsumerStoppedPropagationRef = React13.useRef(false);
            const isFormControl = import_core30.isWeb ? button ? Boolean(button.closest("form")) : true : false;
            const [checked = false, setChecked] = (0, import_use_controllable_state2.useControllableState)({
              prop: checkedProp,
              defaultProp: defaultChecked || false,
              onChange: onCheckedChange,
              transition: true
            });
            if (!import_core30.isWeb) {
              React13.useEffect(() => {
                if (!props.id)
                  return;
                return (0, import_focusable4.registerFocusable)(props.id, {
                  focus: () => {
                    setChecked((x) => !x);
                  }
                });
              }, [props.id, setChecked]);
            }
            return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(
              SwitchProvider,
              {
                scope: __scopeSwitch,
                checked,
                disabled,
                size: size2,
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
                    SwitchFrame,
                    {
                      size: size2,
                      role: "switch",
                      "aria-checked": checked,
                      "aria-labelledby": labelledBy,
                      "aria-required": required,
                      "data-state": getState2(checked),
                      "data-disabled": disabled ? "" : void 0,
                      disabled,
                      theme: checked ? "active" : null,
                      themeShallow: true,
                      tabIndex: disabled ? void 0 : 0,
                      value,
                      ...switchProps,
                      ref: composedRefs,
                      onPress: (event) => {
                        var _a;
                        (_a = props.onPress) == null ? void 0 : _a.call(props, event);
                        setChecked((prevChecked) => !prevChecked);
                        if (import_core30.isWeb && isFormControl) {
                          hasConsumerStoppedPropagationRef.current = event.isPropagationStopped();
                          if (!hasConsumerStoppedPropagationRef.current)
                            event.stopPropagation();
                        }
                      }
                    }
                  ),
                  import_core30.isWeb && isFormControl && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
                    BubbleInput,
                    {
                      control: button,
                      bubbles: !hasConsumerStoppedPropagationRef.current,
                      name,
                      value,
                      checked,
                      required,
                      disabled,
                      style: { transform: "translateX(-100%)" }
                    }
                  )
                ]
              }
            );
          }
        )
      ),
      {
        Thumb: SwitchThumb
      }
    );
    var BubbleInput = /* @__PURE__ */ __name((props) => {
      const { control, checked, bubbles = true, ...inputProps } = props;
      const ref = React13.useRef(null);
      const prevChecked = (0, import_react_use_previous.usePrevious)(checked);
      React13.useEffect(() => {
        const input = ref.current;
        const inputProto = window.HTMLInputElement.prototype;
        const descriptor = Object.getOwnPropertyDescriptor(
          inputProto,
          "checked"
        );
        const setChecked = descriptor.set;
        if (prevChecked !== checked && setChecked) {
          const event = new Event("click", { bubbles });
          setChecked.call(input, checked);
          input.dispatchEvent(event);
        }
      }, [prevChecked, checked, bubbles]);
      return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
        "input",
        {
          type: "checkbox",
          "aria-hidden": true,
          defaultChecked: checked,
          ...inputProps,
          tabIndex: -1,
          ref,
          style: {
            ...props.style,
            // ...controlSize,
            position: "absolute",
            pointerEvents: "none",
            opacity: 0,
            margin: 0
          }
        }
      );
    }, "BubbleInput");
    function getState2(checked) {
      return checked ? "checked" : "unchecked";
    }
    __name(getState2, "getState");
  }
});

// node_modules/@tamagui/switch/dist/cjs/index.js
var require_cjs41 = __commonJS({
  "node_modules/@tamagui/switch/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_Switch(), module2.exports);
  }
});

// node_modules/@tamagui/tooltip/dist/cjs/Tooltip.js
var require_Tooltip = __commonJS({
  "node_modules/@tamagui/tooltip/dist/cjs/Tooltip.js"(exports, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      // If the importer is in node compatibility mode or this is not an ESM
      // file that has been converted to a CommonJS file using a Babel-
      // compatible transform (i.e. "__esModule" has not been set), then set
      // "default" to the CommonJS "module.exports" for node compatibility.
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var Tooltip_exports = {};
    __export2(Tooltip_exports, {
      Tooltip: () => Tooltip,
      TooltipGroup: () => TooltipGroup
    });
    module2.exports = __toCommonJS2(Tooltip_exports);
    var import_jsx_runtime13 = require("react/jsx-runtime");
    var import_polyfill_dev = require_polyfill_dev();
    var import_react13 = (init_floating_ui_react_esm(), __toCommonJS(floating_ui_react_esm_exports));
    var import_core30 = require("@tamagui/core-node");
    var import_floating = require_cjs31();
    var import_get_size2 = require_cjs10();
    var import_popover = require_cjs33();
    var import_popper = require_cjs32();
    var React13 = __toESM2(require("react"));
    var TooltipContent = React13.forwardRef(
      ({ __scopePopover, ...props }, ref) => {
        const popperScope = (0, import_popover.usePopoverScope)(__scopePopover);
        const popper = (0, import_popper.usePopperContext)("PopperContent", popperScope["__scopePopper"]);
        const padding = props.size || popper.size || (0, import_get_size2.stepTokenUpOrDown)("size", "$true", -2);
        return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
          import_popover.PopoverContent,
          {
            componentName: "TooltipContent",
            disableRemoveScroll: true,
            trapFocus: false,
            padding,
            pointerEvents: "none",
            ref,
            ...props
          }
        );
      }
    );
    var TooltipArrow = React13.forwardRef((props, ref) => {
      return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_popover.PopoverArrow, { componentName: "TooltipArrow", ref, ...props });
    });
    var TooltipGroup = /* @__PURE__ */ __name(({ children, delay }) => {
      return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_react13.FloatingDelayGroup, { delay: React13.useMemo(() => delay, [JSON.stringify(delay)]), children });
    }, "TooltipGroup");
    var Tooltip = (0, import_core30.withStaticProperties)(
      (props) => {
        const {
          __scopePopover,
          children,
          delay: delayProp,
          restMs = typeof delayProp === "undefined" ? 500 : typeof delayProp === "number" ? delayProp : 0,
          onOpenChange: onOpenChangeProp,
          focus,
          ...restProps
        } = props;
        const popperScope = (0, import_popover.usePopoverScope)(__scopePopover);
        const triggerRef = React13.useRef(null);
        const [hasCustomAnchor, setHasCustomAnchor] = React13.useState(false);
        const { delay: delayGroup, setCurrentId } = (0, import_react13.useDelayGroupContext)();
        const delay = delayProp ?? delayGroup;
        const [open, setOpen] = React13.useState(false);
        const id = props.groupId;
        const onOpenChange = (0, import_core30.useEvent)((open2) => {
          setOpen(open2);
          if (open2) {
            setCurrentId(id);
          }
          onOpenChangeProp == null ? void 0 : onOpenChangeProp(open2);
        });
        const useFloatingFn = /* @__PURE__ */ __name((props2) => {
          const floating = (0, import_react13.useFloating)({
            ...props2,
            open,
            onOpenChange
          });
          const { getReferenceProps, getFloatingProps } = (0, import_react13.useInteractions)([
            (0, import_react13.useHover)(floating.context, { delay, restMs }),
            (0, import_react13.useFocus)(floating.context, focus),
            (0, import_react13.useRole)(floating.context, { role: "tooltip" }),
            (0, import_react13.useDismiss)(floating.context),
            (0, import_react13.useDelayGroup)(floating.context, { id })
          ]);
          return {
            ...floating,
            getReferenceProps,
            getFloatingProps
          };
        }, "useFloatingFn");
        const useFloatingContext = React13.useCallback(useFloatingFn, [id, delay, open]);
        const onCustomAnchorAdd = React13.useCallback(() => setHasCustomAnchor(true), []);
        const onCustomAnchorRemove = React13.useCallback(() => setHasCustomAnchor(false), []);
        const contentId = (0, import_core30.useId)();
        const twoSmallerKey = (0, import_get_size2.stepTokenUpOrDown)("size", "$true", -2).key;
        const size2 = `$${twoSmallerKey}`;
        return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_floating.FloatingOverrideContext.Provider, { value: useFloatingContext, children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_popper.Popper, { size: size2, ...popperScope, ...restProps, children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
          import_popover.__PopoverProviderInternal,
          {
            scope: __scopePopover,
            popperScope: popperScope.__scopePopper,
            contentId,
            triggerRef,
            sheetBreakpoint: false,
            scopeKey: "",
            open,
            onOpenChange: setOpen,
            onOpenToggle: voidFn,
            hasCustomAnchor,
            onCustomAnchorAdd,
            onCustomAnchorRemove,
            children
          }
        ) }) });
      },
      {
        Anchor: import_popover.PopoverAnchor,
        Arrow: TooltipArrow,
        Content: TooltipContent,
        Trigger: import_popover.PopoverTrigger
      }
    );
    Tooltip.displayName = "Tooltip";
    var voidFn = /* @__PURE__ */ __name(() => {
    }, "voidFn");
  }
});

// node_modules/@tamagui/tooltip/dist/cjs/TooltipSimple.js
var require_TooltipSimple = __commonJS({
  "node_modules/@tamagui/tooltip/dist/cjs/TooltipSimple.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var TooltipSimple_exports = {};
    __export2(TooltipSimple_exports, {
      TooltipSimple: () => TooltipSimple
    });
    module2.exports = __toCommonJS2(TooltipSimple_exports);
    var import_jsx_runtime13 = require("react/jsx-runtime");
    var import_react13 = (init_floating_ui_react_esm(), __toCommonJS(floating_ui_react_esm_exports));
    var import_core30 = require("@tamagui/core-node");
    var import_text5 = require_cjs20();
    var import_Tooltip = require_Tooltip();
    var TooltipSimple = /* @__PURE__ */ __name(({
      label,
      children,
      contentProps,
      ...tooltipProps
    }) => {
      let context;
      try {
        context = (0, import_react13.useDelayGroupContext)();
      } catch {
      }
      const contents = /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(import_Tooltip.Tooltip, { ...tooltipProps, children: [
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_Tooltip.Tooltip.Trigger, { asChild: true, children }),
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_core30.Theme, { inverse: true, children: /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(
          import_Tooltip.Tooltip.Content,
          {
            zIndex: 1e6,
            enterStyle: { x: 0, y: -8, opacity: 0, scale: 0.93 },
            exitStyle: { x: 0, y: -8, opacity: 0, scale: 0.93 },
            x: 0,
            scale: 1,
            y: 0,
            elevation: "$1",
            opacity: 1,
            animation: [
              "quick",
              {
                opacity: {
                  overshootClamping: true
                }
              }
            ],
            ...contentProps,
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_Tooltip.Tooltip.Arrow, {}),
              /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_text5.Paragraph, { size: "$2", lineHeight: "$0", children: label })
            ]
          }
        ) })
      ] });
      if (!context) {
        return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_Tooltip.TooltipGroup, { delay: defaultTooltipDelay, children: contents });
      }
      return contents;
    }, "TooltipSimple");
    var defaultTooltipDelay = { open: 3e3, close: 100 };
  }
});

// node_modules/@tamagui/tooltip/dist/cjs/index.js
var require_cjs42 = __commonJS({
  "node_modules/@tamagui/tooltip/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_Tooltip(), module2.exports);
    __reExport2(src_exports, require_TooltipSimple(), module2.exports);
  }
});

// node_modules/@tamagui/use-debounce/dist/cjs/index.js
var require_cjs43 = __commonJS({
  "node_modules/@tamagui/use-debounce/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    __export2(src_exports, {
      debounce: () => debounce,
      useDebounce: () => useDebounce,
      useDebounceValue: () => useDebounceValue
    });
    module2.exports = __toCommonJS2(src_exports);
    var import_react13 = require("react");
    function debounce(func, wait, leading) {
      let timeout;
      let isCancelled = false;
      function debounced() {
        isCancelled = false;
        const context = this;
        const args = arguments;
        if (leading && !timeout) {
          func.apply(context, args);
        }
        clearTimeout(timeout);
        timeout = setTimeout(function() {
          timeout = null;
          if (!(leading || isCancelled)) {
            func.apply(context, args);
          }
          isCancelled = false;
        }, wait);
      }
      __name(debounced, "debounced");
      debounced.cancel = () => {
        isCancelled = true;
      };
      return debounced;
    }
    __name(debounce, "debounce");
    var defaultOpts = { leading: false };
    function useDebounce(fn, wait, options = defaultOpts, mountArgs = []) {
      const dbEffect = (0, import_react13.useRef)(null);
      (0, import_react13.useEffect)(() => {
        return () => {
          var _a;
          (_a = dbEffect.current) == null ? void 0 : _a.cancel();
        };
      }, []);
      return (0, import_react13.useMemo)(() => {
        dbEffect.current = debounce(fn, wait, options.leading);
        return dbEffect.current;
      }, [options.leading, ...mountArgs]);
    }
    __name(useDebounce, "useDebounce");
    function useDebounceValue(val, amt = 0) {
      const [state, setState] = (0, import_react13.useState)(val);
      (0, import_react13.useEffect)(() => {
        const tm = setTimeout(() => {
          setState((prev) => {
            if (prev === val)
              return prev;
            return val;
          });
        }, amt);
        return () => {
          clearTimeout(tm);
        };
      }, [val]);
      return state;
    }
    __name(useDebounceValue, "useDebounceValue");
  }
});

// node_modules/@tamagui/constants/dist/cjs/constants.js
var require_constants5 = __commonJS({
  "node_modules/@tamagui/constants/dist/cjs/constants.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var constants_exports = {};
    __export2(constants_exports, {
      isChrome: () => isChrome2,
      isClient: () => isClient3,
      isRSC: () => isRSC3,
      isServer: () => isServer2,
      isTouchable: () => isTouchable2,
      isWeb: () => isWeb8,
      isWebTouchable: () => isWebTouchable2,
      isWindowDefined: () => isWindowDefined,
      useIsomorphicLayoutEffect: () => useIsomorphicLayoutEffect3
    });
    module2.exports = __toCommonJS2(constants_exports);
    var import_react13 = require("react");
    var import_meta = {};
    var isWeb8 = process.env.TAMAGUI_TARGET === "web";
    var isWindowDefined = typeof window !== "undefined";
    var isServer2 = isWeb8 && !isWindowDefined;
    var isClient3 = isWeb8 && isWindowDefined;
    var isRSC3 = process.env.ENABLE_RSC ? (
      // note this is statically analyzed so no funny business, just access it without optional chaining
      // @ts-ignore
      import_meta.env ? (
        // @ts-ignore
        import_meta.env.SSR
      ) : false
    ) : false;
    var idFn4 = /* @__PURE__ */ __name(() => {
    }, "idFn");
    var useIsomorphicLayoutEffect3 = isRSC3 ? idFn4 : isServer2 ? import_react13.useEffect : import_react13.useLayoutEffect;
    var isChrome2 = typeof navigator !== "undefined" && /Chrome/.test(navigator.userAgent || "");
    var isWebTouchable2 = isClient3 && ("ontouchstart" in window || navigator.maxTouchPoints > 0);
    var isTouchable2 = !isWeb8 || isWebTouchable2;
    if (process.env.NODE_ENV === "development") {
      if (!process.env.TAMAGUI_TARGET) {
        console.warn(`Must set TAMAGUI_TARGET to "web" or "native"`);
      } else if (isClient3 && process.env.TAMAGUI_TARGET !== "web" && process.env.TAMAGUI_IGNORE_TARGET !== "1") {
        console.warn(
          `Must set TAMAGUI_TARGET to "web" for web apps - if you have window defined outside of the browser, set TAMAGUI_IGNORE_TARGET=1 to hide this`
        );
      }
    }
  }
});

// node_modules/@tamagui/use-window-dimensions/dist/cjs/index.js
var require_cjs44 = __commonJS({
  "node_modules/@tamagui/use-window-dimensions/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    __export2(src_exports, {
      useWindowDimensions: () => useWindowDimensions
    });
    module2.exports = __toCommonJS2(src_exports);
    var import_constants = require_constants5();
    var import_react13 = require("react");
    var import_react_native6 = require("react-native-web-lite");
    var initialValue = {
      fontScale: 1,
      height: 800,
      width: 600,
      scale: 1
    };
    function useWindowDimensions() {
      const current = (0, import_react_native6.useWindowDimensions)();
      if (process.env.TAMAGUI_TARGET != "web")
        return current;
      const [state, setState] = (0, import_react13.useState)(initialValue);
      (0, import_constants.useIsomorphicLayoutEffect)(() => {
        setState(current);
      }, [current.height, current.width, current.fontScale, current.scale]);
      return state;
    }
    __name(useWindowDimensions, "useWindowDimensions");
  }
});

// node_modules/@tamagui/visually-hidden/dist/cjs/VisuallyHidden.js
var require_VisuallyHidden = __commonJS({
  "node_modules/@tamagui/visually-hidden/dist/cjs/VisuallyHidden.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var VisuallyHidden_exports = {};
    __export2(VisuallyHidden_exports, {
      VisuallyHidden: () => VisuallyHidden
    });
    module2.exports = __toCommonJS2(VisuallyHidden_exports);
    var import_core30 = require("@tamagui/core-node");
    var VisuallyHidden = (0, import_core30.styled)(import_core30.Stack, {
      position: "absolute",
      width: 1,
      height: 1,
      margin: -1,
      zIndex: -1e4,
      overflow: "hidden",
      opacity: 1e-8,
      pointerEvents: "none",
      variants: {
        preserveDimensions: {
          true: {
            position: "relative",
            width: "auto",
            height: "auto"
          }
        },
        visible: {
          true: {
            position: "relative",
            width: "auto",
            height: "auto",
            margin: 0,
            zIndex: 1,
            overflow: "visible",
            opacity: 1,
            pointerEvents: "auto"
          }
        }
      }
    });
    VisuallyHidden["isVisuallyHidden"] = true;
  }
});

// node_modules/@tamagui/visually-hidden/dist/cjs/index.js
var require_cjs45 = __commonJS({
  "node_modules/@tamagui/visually-hidden/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_VisuallyHidden(), module2.exports);
  }
});

// node_modules/@tamagui/checkbox/dist/cjs/Checkbox.js
var require_Checkbox = __commonJS({
  "node_modules/@tamagui/checkbox/dist/cjs/Checkbox.js"(exports, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      // If the importer is in node compatibility mode or this is not an ESM
      // file that has been converted to a CommonJS file using a Babel-
      // compatible transform (i.e. "__esModule" has not been set), then set
      // "default" to the CommonJS "module.exports" for node compatibility.
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var Checkbox_exports = {};
    __export2(Checkbox_exports, {
      BubbleInput: () => BubbleInput,
      Checkbox: () => Checkbox,
      CheckboxFrame: () => CheckboxFrame,
      createCheckboxScope: () => createCheckboxScope,
      getState: () => getState2,
      isIndeterminate: () => isIndeterminate
    });
    module2.exports = __toCommonJS2(Checkbox_exports);
    var import_jsx_runtime13 = require("react/jsx-runtime");
    var import_react_use_previous = require_dist4();
    var import_core30 = require("@tamagui/core-node");
    var import_create_context5 = require_cjs3();
    var import_focusable4 = require_cjs29();
    var import_font_size2 = require_cjs25();
    var import_get_size2 = require_cjs10();
    var import_helpers_tamagui2 = require_cjs28();
    var import_label = require_cjs35();
    var import_stacks9 = require_cjs12();
    var import_use_controllable_state2 = require_cjs16();
    var React13 = __toESM2(require("react"));
    function isIndeterminate(checked) {
      return checked === "indeterminate";
    }
    __name(isIndeterminate, "isIndeterminate");
    function getState2(checked) {
      return isIndeterminate(checked) ? "indeterminate" : checked ? "checked" : "unchecked";
    }
    __name(getState2, "getState");
    var BubbleInput = /* @__PURE__ */ __name((props) => {
      const { checked, bubbles = true, control, isHidden, ...inputProps } = props;
      const ref = React13.useRef(null);
      const prevChecked = (0, import_react_use_previous.usePrevious)(checked);
      React13.useEffect(() => {
        const input = ref.current;
        const inputProto = window.HTMLInputElement.prototype;
        const descriptor = Object.getOwnPropertyDescriptor(
          inputProto,
          "checked"
        );
        const setChecked = descriptor.set;
        if (prevChecked !== checked && setChecked) {
          const event = new Event("click", { bubbles });
          input.indeterminate = isIndeterminate(checked);
          setChecked.call(input, isIndeterminate(checked) ? false : checked);
          input.dispatchEvent(event);
        }
      }, [prevChecked, checked, bubbles]);
      return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
        "input",
        {
          type: "checkbox",
          defaultChecked: isIndeterminate(checked) ? false : checked,
          ...inputProps,
          tabIndex: -1,
          ref,
          "aria-hidden": isHidden,
          style: {
            ...isHidden ? {
              // ...controlSize,
              position: "absolute",
              pointerEvents: "none",
              opacity: 0,
              margin: 0
            } : {
              appearance: "auto",
              accentColor: "var(--color6)"
            },
            ...props.style
          }
        }
      );
    }, "BubbleInput");
    var INDICATOR_NAME = "CheckboxIndicator";
    var CheckboxIndicatorFrame = (0, import_core30.styled)(import_stacks9.ThemeableStack, {
      name: INDICATOR_NAME
    });
    var CheckboxIndicator = CheckboxIndicatorFrame.extractable(
      React13.forwardRef(
        (props, forwardedRef) => {
          const {
            __scopeCheckbox,
            children: childrenProp,
            forceMount,
            disablePassStyles,
            ...indicatorProps
          } = props;
          const context = useCheckboxContext(INDICATOR_NAME, __scopeCheckbox);
          const iconSize = (typeof context.size === "number" ? context.size * 0.65 : (0, import_font_size2.getFontSize)(context.size)) * context.scaleIcon;
          const theme = (0, import_core30.useTheme)();
          const getThemedIcon = (0, import_helpers_tamagui2.useGetThemedIcon)({ size: iconSize, color: theme.color });
          const childrens = React13.Children.toArray(childrenProp);
          const children = childrens.map((child) => {
            if (disablePassStyles || !React13.isValidElement(child)) {
              return child;
            }
            return getThemedIcon(child);
          });
          if (forceMount || isIndeterminate(context.state) || context.state === true)
            return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
              CheckboxIndicatorFrame,
              {
                theme: "active",
                "data-state": getState2(context.state),
                "data-disabled": context.disabled ? "" : void 0,
                pointerEvents: "none",
                ...indicatorProps,
                ref: forwardedRef,
                children
              }
            );
          return null;
        }
      )
    );
    CheckboxIndicator.displayName = INDICATOR_NAME;
    var CHECKBOX_NAME = "Checkbox";
    var CheckboxFrame = (0, import_core30.styled)(import_stacks9.ThemeableStack, {
      name: CHECKBOX_NAME,
      tag: "button",
      variants: {
        unstyled: {
          false: {
            size: "$true",
            backgroundColor: "$background",
            alignItems: "center",
            justifyContent: "center",
            pressTheme: true,
            focusable: true,
            borderWidth: 1,
            borderColor: "$borderColor",
            hoverStyle: {
              borderColor: "$borderColorHover"
            },
            focusStyle: {
              borderColor: "$borderColorFocus"
            }
          }
        },
        size: {
          "...size": (val, { tokens }) => {
            const radiusToken = (0, import_core30.getVariableValue)((0, import_get_size2.getSize)(val)) / 8;
            return {
              borderRadius: radiusToken
            };
          }
        }
      },
      defaultVariants: {
        unstyled: false
      }
    });
    var [createCheckboxContext, createCheckboxScope] = (0, import_create_context5.createContextScope)(CHECKBOX_NAME);
    var [CheckboxProvider, useCheckboxContext] = createCheckboxContext(CHECKBOX_NAME);
    var Checkbox = (0, import_core30.withStaticProperties)(
      CheckboxFrame.extractable(
        React13.forwardRef(
          (props, forwardedRef) => {
            const {
              __scopeCheckbox,
              labelledBy: ariaLabelledby,
              name,
              checked: checkedProp,
              defaultChecked,
              required,
              scaleIcon = 1,
              scaleSize = 0.45,
              sizeAdjust = 0,
              disabled,
              value = "on",
              onCheckedChange,
              native,
              ...checkboxProps
            } = props;
            const [button, setButton] = React13.useState(null);
            const composedRefs = (0, import_core30.useComposedRefs)(forwardedRef, (node) => setButton(node));
            const hasConsumerStoppedPropagationRef = React13.useRef(false);
            const propsActive = (0, import_core30.useMediaPropsActive)(props);
            const isFormControl = import_core30.isWeb ? button ? Boolean(button.closest("form")) : true : false;
            const [checked = false, setChecked] = (0, import_use_controllable_state2.useControllableState)({
              prop: checkedProp,
              defaultProp: defaultChecked,
              onChange: onCheckedChange
            });
            const adjustedSize = (0, import_core30.getVariableValue)(
              (0, import_get_size2.stepTokenUpOrDown)("size", propsActive.size, sizeAdjust)
            );
            const size2 = scaleSize ? Math.round(adjustedSize * scaleSize) : adjustedSize;
            const labelId = (0, import_label.useLabelContext)(button);
            const labelledBy = ariaLabelledby || labelId;
            if (process.env.TAMAGUI_TARGET === "native") {
              React13.useEffect(() => {
                if (!props.id)
                  return;
                return (0, import_focusable4.registerFocusable)(props.id, {
                  focusAndSelect: () => {
                    setChecked((x) => !x);
                  },
                  focus: () => {
                  }
                });
              }, [props.id, setChecked]);
            }
            return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
              CheckboxProvider,
              {
                scope: __scopeCheckbox,
                state: checked,
                disabled,
                size: size2,
                scaleIcon,
                children: import_core30.isWeb && native ? /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
                  BubbleInput,
                  {
                    control: button,
                    bubbles: !hasConsumerStoppedPropagationRef.current,
                    name,
                    value,
                    checked,
                    required,
                    disabled,
                    id: props.id
                  }
                ) : /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(import_jsx_runtime13.Fragment, { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
                    CheckboxFrame,
                    {
                      width: size2,
                      height: size2,
                      theme: checked ? "active" : null,
                      tag: "button",
                      role: "checkbox",
                      "aria-labelledby": labelledBy,
                      "aria-checked": isIndeterminate(checked) ? "mixed" : checked,
                      "aria-required": required,
                      "data-state": getState2(checked),
                      "data-disabled": disabled ? "" : void 0,
                      disabled,
                      ...checkboxProps,
                      ref: composedRefs,
                      ...import_core30.isWeb && {
                        type: "button",
                        value,
                        onKeyDown: (0, import_core30.composeEventHandlers)(
                          props.onKeyDown,
                          (event) => {
                            if (event.key === "Enter")
                              event.preventDefault();
                          }
                        )
                      },
                      onPress: (0, import_core30.composeEventHandlers)(props.onPress, (event) => {
                        setChecked(
                          (prevChecked) => isIndeterminate(prevChecked) ? true : !prevChecked
                        );
                        if (isFormControl) {
                          hasConsumerStoppedPropagationRef.current = event.isPropagationStopped();
                          if (!hasConsumerStoppedPropagationRef.current)
                            event.stopPropagation();
                        }
                      })
                    }
                  ),
                  import_core30.isWeb && isFormControl ? /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
                    BubbleInput,
                    {
                      isHidden: true,
                      control: button,
                      bubbles: !hasConsumerStoppedPropagationRef.current,
                      name,
                      value,
                      checked,
                      required,
                      disabled
                    }
                  ) : null
                ] })
              }
            );
          }
        )
      ),
      {
        Indicator: CheckboxIndicator
      }
    );
    Checkbox.displayName = CHECKBOX_NAME;
  }
});

// node_modules/@tamagui/checkbox/dist/cjs/index.js
var require_cjs46 = __commonJS({
  "node_modules/@tamagui/checkbox/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_Checkbox(), module2.exports);
  }
});

// node_modules/tamagui/dist/esm/index.mjs
var esm_exports = {};
__export(esm_exports, {
  Anchor: () => Anchor,
  Article: () => Article,
  Aside: () => Aside,
  Avatar: () => Avatar,
  AvatarFallback: () => AvatarFallback,
  AvatarFallbackFrame: () => AvatarFallbackFrame,
  AvatarFrame: () => AvatarFrame,
  AvatarImage: () => AvatarImage,
  Button: () => Button2,
  ButtonFrame: () => ButtonFrame,
  ButtonText: () => ButtonText,
  Card: () => Card,
  CardBackground: () => CardBackground,
  CardFooter: () => CardFooter,
  CardFrame: () => CardFrame,
  CardHeader: () => CardHeader,
  Dialog: () => Dialog,
  DialogClose: () => DialogClose,
  DialogContent: () => DialogContent,
  DialogDescription: () => DialogDescription,
  DialogOverlay: () => DialogOverlay,
  DialogPortal: () => DialogPortal,
  DialogPortalFrame: () => DialogPortalFrame,
  DialogSheetContents: () => DialogSheetContents,
  DialogTitle: () => DialogTitle,
  DialogTrigger: () => DialogTrigger,
  DialogWarningProvider: () => DialogWarningProvider,
  EnsureFlexed: () => EnsureFlexed,
  Fieldset: () => Fieldset,
  FontLanguage: () => import_core29.FontLanguage,
  Footer: () => Footer,
  Form: () => Form,
  FormFrame: () => FormFrame,
  FormProvider: () => FormProvider,
  FormTrigger: () => FormTrigger,
  Grid: () => Grid,
  GroupFrame: () => GroupFrame,
  H1: () => H1,
  H2: () => H2,
  H3: () => H3,
  H4: () => H4,
  H5: () => H5,
  H6: () => H6,
  Header: () => Header,
  Heading: () => Heading,
  Input: () => Input,
  InputFrame: () => InputFrame,
  Label: () => Label,
  LabelFrame: () => LabelFrame,
  LinearGradient: () => LinearGradient,
  Main: () => Main,
  Nav: () => Nav,
  Paragraph: () => Paragraph,
  Section: () => Section,
  SizableStack: () => SizableStack,
  SizableText: () => SizableText,
  Spacer: () => import_core29.Spacer,
  Spinner: () => Spinner,
  Stack: () => import_core29.Stack,
  TamaguiProvider: () => TamaguiProvider,
  Text: () => import_core29.Text,
  TextAncestorContext: () => import_core29.TextAncestorContext,
  TextArea: () => TextArea,
  TextAreaFrame: () => TextAreaFrame,
  Theme: () => import_core29.Theme,
  ThemeableStack: () => ThemeableStack,
  Unspaced: () => import_core29.Unspaced,
  XGroup: () => XGroup,
  XStack: () => XStack,
  YGroup: () => YGroup,
  YStack: () => YStack,
  ZStack: () => ZStack,
  addTheme: () => import_core29.addTheme,
  buttonStaticConfig: () => buttonStaticConfig,
  composeRefs: () => composeRefs,
  createAvatarScope: () => createAvatarScope,
  createComponent: () => import_core29.createComponent,
  createDialogScope: () => createDialogScope,
  createFont: () => import_core29.createFont,
  createShorthands: () => import_core29.createShorthands,
  createTamagui: () => createTamagui,
  createTheme: () => import_core29.createTheme,
  createTokens: () => import_core29.createTokens,
  createVariable: () => import_core29.createVariable,
  getAnimationDriver: () => import_core29.getAnimationDriver,
  getConfig: () => import_core29.getConfig,
  getMedia: () => import_core29.getMedia,
  getStylesAtomic: () => import_core29.getStylesAtomic,
  getThemes: () => import_core29.getThemes,
  getTokens: () => import_core29.getTokens,
  getVariable: () => import_core29.getVariable,
  getVariableName: () => import_core29.getVariableName,
  getVariableValue: () => import_core29.getVariableValue,
  idFn: () => idFn,
  insertFont: () => import_core29.insertFont,
  isChrome: () => import_core29.isChrome,
  isClient: () => import_core29.isClient,
  isServer: () => import_core29.isServer,
  isServerSide: () => isServerSide,
  isTamaguiComponent: () => import_core29.isTamaguiComponent,
  isTamaguiElement: () => import_core29.isTamaguiElement,
  isTouchable: () => import_core29.isTouchable,
  isVariable: () => import_core29.isVariable,
  isWeb: () => import_core29.isWeb,
  isWebTouchable: () => import_core29.isWebTouchable,
  matchMedia: () => import_core29.matchMedia,
  mediaObjectToString: () => import_core29.mediaObjectToString,
  mediaQueryConfig: () => import_core29.mediaQueryConfig,
  mediaState: () => import_core29.mediaState,
  spacedChildren: () => import_core29.spacedChildren,
  styled: () => import_core29.styled,
  themeable: () => import_core29.themeable,
  updateTheme: () => import_core29.updateTheme,
  useButton: () => useButton,
  useComposedRefs: () => useComposedRefs,
  useControllableState: () => useControllableState,
  useDidFinishSSR: () => import_core29.useDidFinishSSR,
  useEvent: () => import_core29.useEvent,
  useForceUpdate: () => useForceUpdate,
  useFormContext: () => useFormContext,
  useGet: () => import_core29.useGet,
  useIsTouchDevice: () => import_core29.useIsTouchDevice,
  useIsomorphicLayoutEffect: () => import_core29.useIsomorphicLayoutEffect,
  useLabelContext: () => useLabelContext,
  useMedia: () => import_core29.useMedia,
  useSafeRef: () => import_core29.useSafeRef,
  useStyle: () => import_core29.useStyle,
  useTheme: () => import_core29.useTheme,
  useThemeName: () => import_core29.useThemeName,
  variableToString: () => import_core29.variableToString,
  withStaticProperties: () => import_core29.withStaticProperties,
  wrapChildrenInText: () => wrapChildrenInText
});
module.exports = __toCommonJS(esm_exports);

// node_modules/tamagui/dist/esm/setup.js
var import_core = require("@tamagui/core-node");
var React = __toESM(require("react"));
var import_react_native = require("react-native-web-lite");
globalThis.React = React;
(0, import_core.setupReactNative)({
  View: import_react_native.View,
  Text: import_react_native.Text
});
if (typeof requestAnimationFrame === "undefined") {
  globalThis["requestAnimationFrame"] = setImmediate;
}
var cancelAnimationFrame2 = globalThis.cancelAnimationFrame;
global.cancelAnimationFrame = (x) => {
  try {
    cancelAnimationFrame2(x);
  } catch {
  }
};
var idFn = /* @__PURE__ */ __name(() => {
}, "idFn");

// node_modules/tamagui/dist/esm/index.mjs
__reExport(esm_exports, __toESM(require_cjs(), 1), module.exports);
__reExport(esm_exports, __toESM(require_cjs22(), 1), module.exports);
__reExport(esm_exports, __toESM(require_cjs5(), 1), module.exports);

// node_modules/@tamagui/avatar/dist/esm/Avatar.js
var import_jsx_runtime = require("react/jsx-runtime");
var import_core6 = require("@tamagui/core-node");
var import_create_context = __toESM(require_cjs3());
var import_image = __toESM(require_cjs23());
var import_shapes = __toESM(require_cjs24());

// node_modules/@tamagui/stacks/dist/esm/Stacks.js
var import_core3 = require("@tamagui/core-node");

// node_modules/@tamagui/stacks/dist/esm/getElevation.js
var import_core2 = require("@tamagui/core-node");
var getElevation = /* @__PURE__ */ __name((size2, extras) => {
  if (!size2)
    return;
  const { tokens } = extras;
  const token = tokens.size[size2];
  const sizeNum = (0, import_core2.isVariable)(token) ? +token.val : size2;
  return getSizedElevation(sizeNum, extras);
}, "getElevation");
var getSizedElevation = /* @__PURE__ */ __name((val, { theme, tokens }) => {
  let num = 0;
  if (val === true) {
    const val2 = (0, import_core2.getVariableValue)(tokens.size["true"]);
    if (typeof val2 === "number") {
      num = val2;
    } else {
      num = 10;
    }
  } else {
    num = +val;
  }
  if (process.env.NODE_ENV === "development") {
    if (num !== null && isNaN(num)) {
      console.warn("NaN shadow", num, val);
    }
  }
  const [height, shadowRadius] = [Math.round(num / 4 + 1), Math.round(num / 2 + 2)];
  const shadow = {
    shadowColor: theme.shadowColor,
    shadowRadius,
    shadowOffset: { height, width: 0 }
  };
  return shadow;
}, "getSizedElevation");

// node_modules/@tamagui/stacks/dist/esm/Stacks.js
var fullscreenStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0
};
var variants = {
  fullscreen: {
    true: fullscreenStyle
  },
  elevation: {
    "...size": getElevation
  }
};
var YStack = (0, import_core3.styled)(import_core3.Stack, {
  flexDirection: "column",
  name: "YStack",
  variants
});
var XStack = (0, import_core3.styled)(import_core3.Stack, {
  flexDirection: "row",
  name: "XStack",
  variants
});
var ZStack = (0, import_core3.styled)(
  YStack,
  {
    name: "ZStack",
    position: "relative"
  },
  {
    neverFlatten: true,
    isZStack: true
  }
);

// node_modules/@tamagui/stacks/dist/esm/SizableStack.js
var import_core4 = require("@tamagui/core-node");
var import_get_button_sized = __toESM(require_cjs11());

// node_modules/@tamagui/stacks/dist/esm/variants.js
var elevate = {
  true: (_, extras) => {
    return getElevation(extras.props["size"], extras);
  }
};
var bordered = /* @__PURE__ */ __name((val, { props }) => {
  return {
    // TODO size it with size in '...size'
    borderWidth: typeof val === "number" ? val : 1,
    borderColor: "$borderColor",
    ...props.hoverTheme && {
      hoverStyle: {
        borderColor: "$borderColorHover"
      }
    },
    ...props.pressTheme && {
      pressStyle: {
        borderColor: "$borderColorPress"
      }
    },
    ...props.focusTheme && {
      focusStyle: {
        borderColor: "$borderColorFocus"
      }
    }
  };
}, "bordered");
var padded = {
  true: (_, extras) => {
    const { tokens, props } = extras;
    return {
      padding: tokens.space[props.size] || tokens.space["$true"]
    };
  }
};
var radiused = {
  true: (_, extras) => {
    const { tokens, props } = extras;
    return {
      borderRadius: tokens.radius[props.size] || tokens.radius["$true"]
    };
  }
};
var circular = {
  true: (_, { props, tokens }) => {
    const size2 = tokens.size[props.size];
    return {
      width: size2,
      height: size2,
      maxWidth: size2,
      maxHeight: size2,
      minWidth: size2,
      minHeight: size2,
      borderRadius: 1e5,
      padding: 0
    };
  }
};
var hoverTheme = {
  true: {
    hoverStyle: {
      backgroundColor: "$backgroundHover",
      borderColor: "$borderColorHover"
    }
  },
  false: {}
};
var pressTheme = {
  true: {
    cursor: "pointer",
    pressStyle: {
      backgroundColor: "$backgroundPress",
      borderColor: "$borderColorPress"
    }
  },
  false: {}
};
var focusTheme = {
  true: {
    focusStyle: {
      backgroundColor: "$backgroundFocus",
      borderColor: "$borderColorFocus"
    }
  },
  false: {}
};

// node_modules/@tamagui/stacks/dist/esm/SizableStack.js
var SizableStack = (0, import_core4.styled)(YStack, {
  name: "SizableStack",
  backgroundColor: "$background",
  flexDirection: "row",
  flexShrink: 1,
  variants: {
    hoverTheme,
    pressTheme,
    focusTheme,
    circular,
    elevate,
    bordered,
    size: {
      "...size": import_get_button_sized.getButtonSized
    }
  }
});

// node_modules/@tamagui/stacks/dist/esm/ThemeableStack.js
var import_core5 = require("@tamagui/core-node");
var chromelessStyle = {
  backgroundColor: "transparent",
  borderColor: "transparent",
  shadowColor: "transparent"
};
var ThemeableStack = (0, import_core5.styled)(YStack, {
  name: "SizableStack",
  variants: {
    backgrounded: {
      true: {
        backgroundColor: "$background"
      }
    },
    radiused,
    hoverTheme,
    pressTheme,
    focusTheme,
    circular,
    padded,
    elevate,
    bordered,
    transparent: {
      true: {
        backgroundColor: "transparent"
      }
    },
    chromeless: {
      true: chromelessStyle,
      all: {
        ...chromelessStyle,
        hoverStyle: chromelessStyle,
        pressStyle: chromelessStyle,
        focusStyle: chromelessStyle
      }
    }
  }
});

// node_modules/@tamagui/avatar/dist/esm/Avatar.js
var React2 = __toESM(require("react"));
var AVATAR_NAME = "Avatar";
var [createAvatarContext, createAvatarScope] = (0, import_create_context.createContextScope)(AVATAR_NAME);
var [AvatarProvider, useAvatarContext] = createAvatarContext(AVATAR_NAME);
var IMAGE_NAME = "AvatarImage";
var AvatarImage = React2.forwardRef(
  (props, forwardedRef) => {
    var _a;
    const { __scopeAvatar, src, onLoadingStatusChange = /* @__PURE__ */ __name(() => {
    }, "onLoadingStatusChange"), ...imageProps } = props;
    const context = useAvatarContext(IMAGE_NAME, __scopeAvatar);
    const [status, setStatus] = React2.useState("idle");
    const extras = (0, import_core6.getVariantExtras)(props);
    const shapeSize = (0, import_core6.getVariableValue)(
      (_a = (0, import_shapes.getShapeSize)(context.size, extras)) == null ? void 0 : _a.width
    );
    React2.useEffect(() => {
      setStatus("idle");
    }, [JSON.stringify(src)]);
    React2.useEffect(() => {
      onLoadingStatusChange(status);
      context.onImageLoadingStatusChange(status);
    }, [status]);
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(YStack, { fullscreen: true, zIndex: 1, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      import_image.Image,
      {
        fullscreen: true,
        ...typeof shapeSize === "number" && !isNaN(shapeSize) && {
          width: shapeSize,
          height: shapeSize
        },
        ...imageProps,
        ref: forwardedRef,
        src,
        onError: () => {
          setStatus("error");
        },
        onLoad: () => {
          setStatus("loaded");
        }
      }
    ) });
  }
);
AvatarImage.displayName = IMAGE_NAME;
var FALLBACK_NAME = "AvatarFallback";
var AvatarFallbackFrame = (0, import_core6.styled)(YStack, {
  name: FALLBACK_NAME,
  position: "absolute",
  fullscreen: true,
  zIndex: 0
});
var AvatarFallback = AvatarFallbackFrame.extractable(
  React2.forwardRef(
    (props, forwardedRef) => {
      const { __scopeAvatar, delayMs, ...fallbackProps } = props;
      const context = useAvatarContext(FALLBACK_NAME, __scopeAvatar);
      const [canRender, setCanRender] = React2.useState(delayMs === void 0);
      React2.useEffect(() => {
        if (delayMs !== void 0) {
          const timerId = setTimeout(() => setCanRender(true), delayMs);
          return () => clearTimeout(timerId);
        }
      }, [delayMs]);
      return canRender && context.imageLoadingStatus !== "loaded" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarFallbackFrame, { ...fallbackProps, ref: forwardedRef }) : null;
    }
  )
);
AvatarFallback.displayName = FALLBACK_NAME;
var AvatarFrame = (0, import_core6.styled)(import_shapes.Square, {
  name: AVATAR_NAME,
  position: "relative",
  overflow: "hidden"
});
var Avatar = (0, import_core6.withStaticProperties)(
  React2.forwardRef(
    (props, forwardedRef) => {
      const { __scopeAvatar, size: size2 = "$true", ...avatarProps } = props;
      const [imageLoadingStatus, setImageLoadingStatus] = React2.useState("idle");
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        AvatarProvider,
        {
          size: size2,
          scope: __scopeAvatar,
          imageLoadingStatus,
          onImageLoadingStatusChange: setImageLoadingStatus,
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarFrame, { size: size2, ...avatarProps, ref: forwardedRef })
        }
      );
    }
  ),
  {
    Image: AvatarImage,
    Fallback: AvatarFallback
  }
);
Avatar.displayName = AVATAR_NAME;

// node_modules/@tamagui/button/dist/esm/Button.js
var import_jsx_runtime3 = require("react/jsx-runtime");
var import_core10 = require("@tamagui/core-node");
var import_font_size = __toESM(require_cjs25());
var import_get_button_sized2 = __toESM(require_cjs11());
var import_helpers_tamagui = __toESM(require_cjs28());

// node_modules/@tamagui/text/dist/esm/SizableText.js
var import_core7 = require("@tamagui/core-node");
var import_get_font_sized = __toESM(require_cjs19());
var SizableText = (0, import_core7.styled)(import_core7.Text, {
  name: "SizableText",
  fontFamily: "$body",
  variants: {
    size: import_get_font_sized.getFontSized
  },
  defaultVariants: {
    size: "$true"
  }
});

// node_modules/@tamagui/text/dist/esm/Paragraph.js
var import_core8 = require("@tamagui/core-node");
var Paragraph = (0, import_core8.styled)(SizableText, {
  name: "Paragraph",
  tag: "p",
  userSelect: "auto",
  color: "$color",
  size: "$true"
});

// node_modules/@tamagui/text/dist/esm/Headings.js
var import_core9 = require("@tamagui/core-node");
var Heading = (0, import_core9.styled)(Paragraph, {
  tag: "span",
  name: "Heading",
  accessibilityRole: "header",
  fontFamily: "$heading",
  size: "$8",
  margin: 0
});
var H1 = (0, import_core9.styled)(Heading, {
  name: "H1",
  tag: "h1",
  size: "$10"
});
var H2 = (0, import_core9.styled)(Heading, {
  name: "H2",
  tag: "h2",
  size: "$9"
});
var H3 = (0, import_core9.styled)(Heading, {
  name: "H3",
  tag: "h3",
  size: "$8"
});
var H4 = (0, import_core9.styled)(Heading, {
  name: "H4",
  tag: "h4",
  size: "$7"
});
var H5 = (0, import_core9.styled)(Heading, {
  name: "H5",
  tag: "h5",
  size: "$6"
});
var H6 = (0, import_core9.styled)(Heading, {
  name: "H6",
  tag: "h6",
  size: "$5"
});

// node_modules/@tamagui/text/dist/esm/wrapChildrenInText.js
var import_jsx_runtime2 = require("react/jsx-runtime");
var import_react = __toESM(require("react"));
function wrapChildrenInText(TextComponent, propsIn, extraProps) {
  const {
    children,
    textProps,
    size: size2,
    noTextWrap,
    color,
    fontFamily,
    fontSize,
    fontWeight,
    letterSpacing,
    textAlign
  } = propsIn;
  if (noTextWrap || !children) {
    return [children];
  }
  const allChildren = import_react.default.Children.toArray(children);
  const nextChildren = [];
  let lastIsString = false;
  const props = {
    ...extraProps
  };
  if (color)
    props.color = color;
  if (fontFamily)
    props.fontFamily = fontFamily;
  if (fontSize)
    props.fontSize = fontSize;
  if (fontWeight)
    props.fontWeight = fontWeight;
  if (letterSpacing)
    props.letterSpacing = letterSpacing;
  if (textAlign)
    props.textAlign = textAlign;
  if (size2)
    props.size = size2;
  function concatStringChildren() {
    if (!lastIsString)
      return;
    const index3 = nextChildren.length - 1;
    const childrenStrings = nextChildren[index3];
    nextChildren[index3] = /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(TextComponent, { ...props, ...textProps, children: childrenStrings }, index3);
  }
  __name(concatStringChildren, "concatStringChildren");
  for (const child of allChildren) {
    const last = nextChildren[nextChildren.length - 1];
    const isString = typeof child === "string";
    if (isString) {
      if (lastIsString) {
        last.push(child);
      } else {
        nextChildren.push([child]);
      }
    } else {
      concatStringChildren();
      nextChildren.push(child);
    }
    lastIsString = isString;
  }
  concatStringChildren();
  return nextChildren;
}
__name(wrapChildrenInText, "wrapChildrenInText");

// node_modules/@tamagui/button/dist/esm/Button.js
var import_react2 = require("react");
var NAME = "Button";
var ButtonFrame = (0, import_core10.styled)(ThemeableStack, {
  name: NAME,
  tag: "button",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "nowrap",
  flexDirection: "row",
  cursor: "pointer",
  variants: {
    defaultStyle: {
      true: {
        focusable: true,
        hoverTheme: true,
        pressTheme: true,
        backgrounded: true,
        borderWidth: 1,
        borderColor: "transparent",
        pressStyle: {
          borderColor: "transparent"
        },
        hoverStyle: {
          borderColor: "transparent"
        },
        focusStyle: {
          borderColor: "$borderColorFocus"
        }
      }
    },
    size: {
      "...size": import_get_button_sized2.getButtonSized
    },
    active: {
      true: {
        hoverStyle: {
          backgroundColor: "$background"
        }
      }
    },
    disabled: {
      true: {
        pointerEvents: "none"
      }
    }
  },
  defaultVariants: {
    size: "$true"
  }
});
var ButtonText = (0, import_core10.styled)(SizableText, {
  name: "ButtonText",
  userSelect: "none",
  cursor: "pointer",
  // flexGrow 1 leads to inconsistent native style where text pushes to start of view
  flexGrow: 0,
  flexShrink: 1,
  ellipse: true,
  variants: {
    defaultStyle: {
      true: {
        color: "$color"
      }
    }
  }
});
var ButtonComponent = (0, import_react2.forwardRef)(/* @__PURE__ */ __name(function Button(props, ref) {
  const {
    props: { unstyled, ...buttonProps }
  } = useButton(props);
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(ButtonFrame, { defaultStyle: !unstyled, ...buttonProps, ref });
}, "Button"));
var buttonStaticConfig = {
  inlineProps: /* @__PURE__ */ new Set([
    // text props go here (can't really optimize them, but we never fully extract button anyway)
    // may be able to remove this entirely, as the compiler / runtime have gotten better
    "color",
    "fontWeight",
    "fontSize",
    "fontFamily",
    "letterSpacing",
    "textAlign",
    "unstyled"
  ])
};
var Button2 = ButtonFrame.extractable(
  (0, import_core10.themeable)(ButtonComponent, ButtonFrame.staticConfig),
  buttonStaticConfig
);
function useButton(propsIn, { Text: Text5 = ButtonText } = { Text: ButtonText }) {
  const {
    children,
    icon,
    iconAfter,
    noTextWrap,
    theme: themeName,
    space,
    spaceFlex,
    scaleIcon = 1,
    scaleSpace = 0.66,
    separator,
    // text props
    color,
    fontWeight,
    letterSpacing,
    fontSize,
    fontFamily,
    textAlign,
    textProps,
    ...rest
  } = propsIn;
  const isNested = import_core10.isRSC ? false : (0, import_react2.useContext)(import_core10.ButtonNestingContext);
  const propsActive = (0, import_core10.useMediaPropsActive)(propsIn);
  const size2 = propsActive.size || "$true";
  const iconSize = (typeof size2 === "number" ? size2 * 0.5 : (0, import_font_size.getFontSize)(size2)) * scaleIcon;
  const getThemedIcon = (0, import_helpers_tamagui.useGetThemedIcon)({ size: iconSize, color });
  const [themedIcon, themedIconAfter] = [icon, iconAfter].map(getThemedIcon);
  const spaceSize = propsActive.space ?? (0, import_core10.getVariableValue)(iconSize) * scaleSpace;
  const contents = wrapChildrenInText(
    Text5,
    propsActive,
    Text5 === ButtonText ? {
      defaultStyle: !propsIn.unstyled
    } : void 0
  );
  const inner2 = (0, import_core10.spacedChildren)({
    // a bit arbitrary but scaling to font size is necessary so long as button does
    space: spaceSize,
    spaceFlex,
    separator,
    direction: propsActive.flexDirection === "column" || propsActive.flexDirection === "column-reverse" ? "vertical" : "horizontal",
    children: [themedIcon, ...contents, themedIconAfter]
  });
  const tag = isNested ? "span" : (
    // defaults to <a /> when accessibilityRole = link
    // see https://github.com/tamagui/tamagui/issues/505
    propsIn.accessibilityRole === "link" ? "a" : void 0
  );
  const props = {
    ...propsActive.disabled && {
      // in rnw - false still has keyboard tabIndex, undefined = not actually focusable
      focusable: void 0,
      // even with tabIndex unset, it will keep focusStyle on web so disable it here
      focusStyle: {
        borderColor: "$background"
      }
    },
    tag,
    ...rest,
    children: import_core10.isRSC ? inner2 : /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_core10.ButtonNestingContext.Provider, { value: true, children: inner2 })
  };
  return {
    spaceSize,
    isNested,
    props
  };
}
__name(useButton, "useButton");

// node_modules/@tamagui/card/dist/esm/Card.js
var import_jsx_runtime4 = require("react/jsx-runtime");
var import_core11 = require("@tamagui/core-node");
var import_react3 = __toESM(require("react"));
var CardFrame = (0, import_core11.styled)(ThemeableStack, {
  name: "Card",
  backgroundColor: "$background",
  position: "relative",
  overflow: "hidden",
  variants: {
    size: {
      "...size": (val, { tokens }) => {
        return {
          borderRadius: tokens.radius[val] ?? val
        };
      }
    }
  },
  defaultVariants: {
    size: "$true"
  }
});
var CardHeader = (0, import_core11.styled)(ThemeableStack, {
  name: "CardHeader",
  zIndex: 10,
  backgroundColor: "transparent",
  marginBottom: "auto",
  variants: {
    size: {
      "...size": (val, { tokens }) => {
        return {
          padding: tokens.space[val] ?? val
        };
      }
    }
  }
});
var CardFooter = (0, import_core11.styled)(CardHeader, {
  name: "CardFooter",
  zIndex: 5,
  flexDirection: "row",
  marginTop: "auto",
  marginBottom: 0
});
var CardBackground = (0, import_core11.styled)(ThemeableStack, {
  name: "CardBackground",
  zIndex: 0,
  fullscreen: true,
  overflow: "hidden",
  pointerEvents: "none",
  padding: 0
});
var Card = (0, import_core11.withStaticProperties)(
  CardFrame.extractable(
    (0, import_react3.forwardRef)(
      ({ size: size2, __scopeCard, children, ...props }, ref) => {
        return (
          // <CardProvider scope={__scopeCard} size={size}>
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(CardFrame, { ref, ...props, children: import_react3.default.Children.map(children, (child) => {
            if ((0, import_core11.isTamaguiElement)(child) && !child.props.size) {
              return (0, import_react3.cloneElement)(child, {
                size: size2
              });
            }
            return child;
          }) })
        );
      }
    )
  ),
  {
    Header: CardHeader,
    Footer: CardFooter,
    Background: CardBackground
  }
);

// node_modules/@tamagui/compose-refs/dist/esm/compose-refs.js
var React5 = __toESM(require("react"));
function setRef(ref, value) {
  if (typeof ref === "function") {
    ref(value);
  } else if (ref) {
    ;
    ref.current = value;
  }
}
__name(setRef, "setRef");
function composeRefs(...refs) {
  return (node) => refs.forEach((ref) => setRef(ref, node));
}
__name(composeRefs, "composeRefs");
function useComposedRefs(...refs) {
  return React5.useCallback(composeRefs(...refs), refs);
}
__name(useComposedRefs, "useComposedRefs");

// node_modules/tamagui/dist/esm/index.mjs
__reExport(esm_exports, __toESM(require_cjs3(), 1), module.exports);

// node_modules/@tamagui/dialog/dist/esm/Dialog.js
var import_jsx_runtime5 = require("react/jsx-runtime");
var import_adapt = __toESM(require_cjs());
var import_animate_presence = __toESM(require_cjs5());
var import_aria_hidden = __toESM(require_cjs6());
var import_core12 = require("@tamagui/core-node");
var import_create_context2 = __toESM(require_cjs3());
var import_dismissable = __toESM(require_cjs8());
var import_focus_scope = __toESM(require_cjs9());
var import_portal = __toESM(require_cjs13());
var import_remove_scroll = __toESM(require_cjs14());
var import_sheet = __toESM(require_cjs18());

// node_modules/@tamagui/use-event/dist/esm/useGet.js
var import_react4 = require("react");
var isWeb = process.env.TAMAGUI_TARGET === "web";
var isClient = typeof window !== "undefined";
var useIsomorphicLayoutEffect = !isWeb || isClient ? import_react4.useLayoutEffect : import_react4.useEffect;
function useGet(currentValue, initialValue, forwardToFunction) {
  const curRef = (0, import_react4.useRef)(initialValue ?? currentValue);
  useIsomorphicLayoutEffect(() => {
    curRef.current = currentValue;
  });
  return (0, import_react4.useCallback)(
    forwardToFunction ? (...args) => {
      var _a;
      return (_a = curRef.current) == null ? void 0 : _a.apply(null, args);
    } : () => curRef.current,
    []
  );
}
__name(useGet, "useGet");

// node_modules/@tamagui/use-event/dist/esm/useEvent.js
function useEvent(callback) {
  return useGet(callback, defaultValue, true);
}
__name(useEvent, "useEvent");
var defaultValue = /* @__PURE__ */ __name(() => {
  throw new Error("Cannot call an event handler while rendering.");
}, "defaultValue");

// node_modules/@tamagui/use-controllable-state/dist/esm/useControllableState.js
var import_react5 = require("react");
var emptyCallbackFn = /* @__PURE__ */ __name((_) => _(), "emptyCallbackFn");
function useControllableState({
  prop,
  defaultProp,
  onChange,
  strategy = "prop-wins",
  preventUpdate,
  transition
}) {
  const [state, setState] = (0, import_react5.useState)(prop ?? defaultProp);
  const previous = (0, import_react5.useRef)(state);
  const propWins = strategy === "prop-wins" && prop !== void 0;
  const value = propWins ? prop : state;
  const onChangeCb = useEvent(onChange || idFn2);
  const transitionFn = transition ? import_react5.startTransition : emptyCallbackFn;
  (0, import_react5.useEffect)(() => {
    if (prop === void 0)
      return;
    previous.current = prop;
    transitionFn(() => {
      setState(prop);
    });
  }, [prop]);
  (0, import_react5.useEffect)(() => {
    if (propWins)
      return;
    if (state !== previous.current) {
      previous.current = state;
      onChangeCb(state);
    }
  }, [onChangeCb, state, propWins]);
  const setter = useEvent((next) => {
    if (preventUpdate)
      return;
    if (propWins) {
      const nextValue = typeof next === "function" ? next(previous.current) : next;
      onChangeCb(nextValue);
    } else {
      transitionFn(() => {
        setState(next);
      });
    }
  });
  return [value, setter];
}
__name(useControllableState, "useControllableState");
var idFn2 = /* @__PURE__ */ __name(() => {
}, "idFn");

// node_modules/@tamagui/dialog/dist/esm/Dialog.js
var React6 = __toESM(require("react"));
var DIALOG_NAME = "Dialog";
var [createDialogContext, createDialogScope] = (0, import_create_context2.createContextScope)(DIALOG_NAME);
var [DialogProvider, useDialogContext] = createDialogContext(DIALOG_NAME);
var TRIGGER_NAME = "DialogTrigger";
var DialogTriggerFrame = (0, import_core12.styled)(YStack, {
  name: TRIGGER_NAME
});
var DialogTrigger = React6.forwardRef(
  (props, forwardedRef) => {
    const { __scopeDialog, ...triggerProps } = props;
    const context = useDialogContext(TRIGGER_NAME, __scopeDialog);
    const composedTriggerRef = useComposedRefs(forwardedRef, context.triggerRef);
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
      DialogTriggerFrame,
      {
        tag: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": context.open,
        "aria-controls": context.contentId,
        "data-state": getState(context.open),
        ...triggerProps,
        ref: composedTriggerRef,
        onPress: (0, import_core12.composeEventHandlers)(props.onPress, context.onOpenToggle)
      }
    );
  }
);
DialogTrigger.displayName = TRIGGER_NAME;
var PORTAL_NAME = "DialogPortal";
var [PortalProvider, usePortalContext] = createDialogContext(
  PORTAL_NAME,
  {
    forceMount: void 0
  }
);
var DialogPortalFrame = (0, import_core12.styled)(YStack, {
  alignItems: "center",
  justifyContent: "center",
  fullscreen: true,
  zIndex: 100,
  ...import_core12.isWeb && {
    maxHeight: "100vh",
    position: "fixed"
  }
});
var DialogPortalItem = /* @__PURE__ */ __name((props) => {
  const themeName = (0, import_core12.useThemeName)();
  const context = useDialogContext(PORTAL_NAME, props.__scopeDialog);
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_portal.PortalItem, { hostName: props.hostName, children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(DialogPortalItemContent, { ...props, themeName, context }) });
}, "DialogPortalItem");
function DialogPortalItemContent(props) {
  const {
    __scopeDialog,
    children,
    context,
    themeName,
    space,
    spaceDirection,
    separator
  } = props;
  let childrenSpaced = children;
  if (space || separator) {
    childrenSpaced = (0, import_core12.spacedChildren)({
      children,
      separator,
      space,
      direction: spaceDirection
    });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(DialogProvider, { scope: __scopeDialog, ...context, children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_core12.Theme, { name: themeName, children: childrenSpaced }) });
}
__name(DialogPortalItemContent, "DialogPortalItemContent");
var DialogPortal = /* @__PURE__ */ __name((props) => {
  const { __scopeDialog, forceMount, children, ...frameProps } = props;
  const context = useDialogContext(PORTAL_NAME, __scopeDialog);
  const isShowing = forceMount || context.open;
  const [isFullyHidden, setIsFullyHidden] = React6.useState(!isShowing);
  if (isShowing && isFullyHidden) {
    setIsFullyHidden(false);
  }
  const contents = /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
    import_animate_presence.AnimatePresence,
    {
      onExitComplete: () => {
        setIsFullyHidden(true);
      },
      children: isShowing ? children : null
    }
  );
  const isSheet = useShowDialogSheet(context);
  if (isSheet) {
    return children;
  }
  if (context.modal) {
    if (isFullyHidden) {
      return null;
    }
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(DialogPortalItem, { __scopeDialog, children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(PortalProvider, { scope: __scopeDialog, forceMount, children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(DialogPortalFrame, { pointerEvents: isShowing ? "auto" : "none", ...frameProps, children: contents }) }) });
  }
  return contents;
}, "DialogPortal");
DialogPortal.displayName = PORTAL_NAME;
var OVERLAY_NAME = "DialogOverlay";
var DialogOverlayFrame = (0, import_core12.styled)(ThemeableStack, {
  name: OVERLAY_NAME,
  backgrounded: true,
  fullscreen: true
});
var DialogOverlay = React6.forwardRef(
  ({ __scopeDialog, ...props }, forwardedRef) => {
    const portalContext = usePortalContext(OVERLAY_NAME, __scopeDialog);
    const { forceMount = portalContext.forceMount, ...overlayProps } = props;
    const context = useDialogContext(OVERLAY_NAME, __scopeDialog);
    const showSheet = useShowDialogSheet(context);
    if (!forceMount) {
      if (!context.modal || showSheet) {
        return null;
      }
    }
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(DialogOverlayImpl, { context, ...overlayProps, ref: forwardedRef });
  }
);
DialogOverlay.displayName = OVERLAY_NAME;
var DialogOverlayImpl = React6.forwardRef(
  (props, forwardedRef) => {
    const { context, ...overlayProps } = props;
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
        DialogOverlayFrame,
        {
          "data-state": getState(context.open),
          pointerEvents: context.open ? "auto" : "none",
          ...overlayProps,
          ref: forwardedRef
        }
      )
    );
  }
);
var CONTENT_NAME = "DialogContent";
var DialogContentFrame = (0, import_core12.styled)(ThemeableStack, {
  name: CONTENT_NAME,
  tag: "dialog",
  position: "relative",
  backgrounded: true,
  padded: true,
  radiused: true,
  elevate: true,
  variants: {
    size: {
      "...size": (val, extras) => {
        return {};
      }
    }
  },
  defaultVariants: {
    size: "$true"
  }
});
var DialogContent = DialogContentFrame.extractable(
  React6.forwardRef(
    ({ __scopeDialog, ...props }, forwardedRef) => {
      const portalContext = usePortalContext(CONTENT_NAME, __scopeDialog);
      const { forceMount = portalContext.forceMount, ...contentProps } = props;
      const context = useDialogContext(CONTENT_NAME, __scopeDialog);
      const contents = context.modal ? /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(DialogContentModal, { context, ...contentProps, ref: forwardedRef }) : /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(DialogContentNonModal, { context, ...contentProps, ref: forwardedRef });
      if (!import_core12.isWeb) {
        return contents;
      }
      return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
        import_remove_scroll.RemoveScroll,
        {
          forwardProps: true,
          enabled: context.open,
          allowPinchZoom: context.allowPinchZoom,
          shards: [context.contentRef],
          removeScrollBar: false,
          children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "_dsp_contents", children: contents })
        }
      );
    }
  )
);
DialogContent.displayName = CONTENT_NAME;
var DialogContentModal = React6.forwardRef(
  ({ children, context, ...props }, forwardedRef) => {
    const contentRef = React6.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, context.contentRef, contentRef);
    if (import_core12.isWeb) {
      React6.useEffect(() => {
        if (!context.open)
          return;
        const content = contentRef.current;
        if (content)
          return (0, import_aria_hidden.hideOthers)(content);
      }, [context.open]);
    }
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
      DialogContentImpl,
      {
        ...props,
        context,
        ref: composedRefs,
        disableOutsidePointerEvents: true,
        onCloseAutoFocus: (0, import_core12.composeEventHandlers)(props.onCloseAutoFocus, (event) => {
          var _a;
          event.preventDefault();
          (_a = context.triggerRef.current) == null ? void 0 : _a.focus();
        }),
        onPointerDownOutside: (0, import_core12.composeEventHandlers)(
          props.onPointerDownOutside,
          (event) => {
            const originalEvent = event["detail"].originalEvent;
            const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
            const isRightClick = originalEvent.button === 2 || ctrlLeftClick;
            if (isRightClick)
              event.preventDefault();
          }
        ),
        onFocusOutside: (0, import_core12.composeEventHandlers)(
          props.onFocusOutside,
          (event) => event.preventDefault()
        ),
        children
      }
    );
  }
);
var DialogContentNonModal = React6.forwardRef(
  (props, forwardedRef) => {
    const hasInteractedOutsideRef = React6.useRef(false);
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
      DialogContentImpl,
      {
        ...props,
        ref: forwardedRef,
        trapFocus: false,
        disableOutsidePointerEvents: false,
        onCloseAutoFocus: (event) => {
          var _a, _b;
          (_a = props.onCloseAutoFocus) == null ? void 0 : _a.call(props, event);
          if (!event.defaultPrevented) {
            if (!hasInteractedOutsideRef.current) {
              (_b = props.context.triggerRef.current) == null ? void 0 : _b.focus();
            }
            event.preventDefault();
          }
          hasInteractedOutsideRef.current = false;
        },
        onInteractOutside: (event) => {
          var _a;
          (_a = props.onInteractOutside) == null ? void 0 : _a.call(props, event);
          if (!event.defaultPrevented)
            hasInteractedOutsideRef.current = true;
          const target = event.target;
          const trigger = props.context.triggerRef.current;
          if (!(trigger instanceof HTMLElement))
            return;
          const targetIsTrigger = trigger.contains(target);
          if (targetIsTrigger)
            event.preventDefault();
        }
      }
    );
  }
);
var DialogContentImpl = React6.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeDialog,
      trapFocus,
      onOpenAutoFocus,
      onCloseAutoFocus,
      disableOutsidePointerEvents,
      onEscapeKeyDown,
      onPointerDownOutside,
      onFocusOutside,
      onInteractOutside,
      context,
      ...contentProps
    } = props;
    const contentRef = React6.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, contentRef);
    const showSheet = useShowDialogSheet(context);
    const contents = /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
      DialogContentFrame,
      {
        id: context.contentId,
        "aria-describedby": context.descriptionId,
        "aria-labelledby": context.titleId,
        "data-state": getState(context.open),
        ...contentProps
      }
    );
    if (showSheet) {
      return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(DialogPortalItem, { hostName: getSheetContentsName(context), children: contentProps.children });
    }
    if (!import_core12.isWeb) {
      return contents;
    }
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(import_jsx_runtime5.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
        import_focus_scope.FocusScope,
        {
          loop: true,
          trapped: trapFocus,
          onMountAutoFocus: onOpenAutoFocus,
          forceUnmount: !context.open,
          onUnmountAutoFocus: onCloseAutoFocus,
          children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
            import_dismissable.Dismissable,
            {
              disableOutsidePointerEvents: context.open && disableOutsidePointerEvents,
              forceUnmount: !context.open,
              onEscapeKeyDown,
              onPointerDownOutside,
              onFocusOutside,
              onInteractOutside,
              ref: composedRefs,
              onDismiss: () => context.onOpenChange(false),
              children: contents
            }
          )
        }
      ),
      process.env.NODE_ENV === "development" && /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(import_jsx_runtime5.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(TitleWarning, { titleId: context.titleId }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
          DescriptionWarning,
          {
            contentRef,
            descriptionId: context.descriptionId
          }
        )
      ] })
    ] });
  }
);
var TITLE_NAME = "DialogTitle";
var DialogTitleFrame = (0, import_core12.styled)(H2, {
  name: TITLE_NAME
});
var DialogTitle = React6.forwardRef(
  (props, forwardedRef) => {
    const { __scopeDialog, ...titleProps } = props;
    const context = useDialogContext(TITLE_NAME, __scopeDialog);
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(DialogTitleFrame, { id: context.titleId, ...titleProps, ref: forwardedRef });
  }
);
DialogTitle.displayName = TITLE_NAME;
var DialogDescriptionFrame = (0, import_core12.styled)(Paragraph, {
  name: "DialogDescription"
});
var DESCRIPTION_NAME = "DialogDescription";
var DialogDescription = React6.forwardRef(
  (props, forwardedRef) => {
    const { __scopeDialog, ...descriptionProps } = props;
    const context = useDialogContext(DESCRIPTION_NAME, __scopeDialog);
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
      DialogDescriptionFrame,
      {
        id: context.descriptionId,
        ...descriptionProps,
        ref: forwardedRef
      }
    );
  }
);
DialogDescription.displayName = DESCRIPTION_NAME;
var CLOSE_NAME = "DialogClose";
var DialogClose = React6.forwardRef(
  (props, forwardedRef) => {
    const { __scopeDialog, displayWhenAdapted, ...closeProps } = props;
    const context = useDialogContext(CLOSE_NAME, __scopeDialog, {
      warn: false,
      fallback: {}
    });
    const isSheet = useShowDialogSheet(context);
    if (isSheet && !displayWhenAdapted) {
      return null;
    }
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
      YStack,
      {
        tag: "button",
        accessibilityLabel: "Dialog Close",
        ...closeProps,
        ref: forwardedRef,
        onPress: (0, import_core12.composeEventHandlers)(
          props.onPress,
          () => context.onOpenChange(false)
        )
      }
    );
  }
);
DialogClose.displayName = CLOSE_NAME;
function getState(open) {
  return open ? "open" : "closed";
}
__name(getState, "getState");
var TITLE_WARNING_NAME = "DialogTitleWarning";
var [DialogWarningProvider, useWarningContext] = (0, import_create_context2.createContext)(TITLE_WARNING_NAME, {
  contentName: CONTENT_NAME,
  titleName: TITLE_NAME,
  docsSlug: "dialog"
});
var TitleWarning = /* @__PURE__ */ __name(({ titleId }) => {
  if (process.env.NODE_ENV === "development") {
    const titleWarningContext = useWarningContext(TITLE_WARNING_NAME);
    const MESSAGE = `\`${titleWarningContext.contentName}\` requires a \`${titleWarningContext.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${titleWarningContext.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${titleWarningContext.docsSlug}`;
    React6.useEffect(() => {
      if (!import_core12.isWeb)
        return;
      if (titleId) {
        const hasTitle = document.getElementById(titleId);
        if (!hasTitle) {
          console.warn(MESSAGE);
        }
      }
    }, [MESSAGE, titleId]);
  }
  return null;
}, "TitleWarning");
var DESCRIPTION_WARNING_NAME = "DialogDescriptionWarning";
var DescriptionWarning = /* @__PURE__ */ __name(({
  contentRef,
  descriptionId
}) => {
  if (process.env.NODE_ENV === "development") {
    const descriptionWarningContext = useWarningContext(DESCRIPTION_WARNING_NAME);
    const MESSAGE = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${descriptionWarningContext.contentName}}.`;
    React6.useEffect(() => {
      if (!import_core12.isWeb)
        return;
      const contentNode = contentRef.current;
      if (!(contentNode instanceof HTMLElement)) {
        return;
      }
      const describedById = contentNode.getAttribute("aria-describedby");
      if (descriptionId && describedById) {
        const hasDescription = document.getElementById(descriptionId);
        if (!hasDescription) {
          console.warn(MESSAGE);
        }
      }
    }, [MESSAGE, contentRef, descriptionId]);
  }
  return null;
}, "DescriptionWarning");
var Dialog = (0, import_core12.withStaticProperties)(
  React6.forwardRef(/* @__PURE__ */ __name(function Dialog2(props, ref) {
    const {
      __scopeDialog,
      children,
      open: openProp,
      defaultOpen = false,
      onOpenChange,
      modal = true,
      allowPinchZoom = false
    } = props;
    const scopeId = (0, import_core12.useId)();
    const contentId = (0, import_core12.useId)();
    const titleId = (0, import_core12.useId)();
    const descriptionId = (0, import_core12.useId)();
    const scopeKey = __scopeDialog ? Object.keys(__scopeDialog)[0] : scopeId;
    const sheetContentsName = getSheetContentsName({ scopeKey, contentId });
    const triggerRef = React6.useRef(null);
    const contentRef = React6.useRef(null);
    const [open, setOpen] = useControllableState({
      prop: openProp,
      defaultProp: defaultOpen,
      onChange: onOpenChange
    });
    const onOpenToggle = React6.useCallback(
      () => setOpen((prevOpen) => !prevOpen),
      [setOpen]
    );
    const context = {
      scope: __scopeDialog,
      scopeKey,
      triggerRef,
      contentRef,
      contentId,
      titleId,
      descriptionId,
      open,
      onOpenChange: setOpen,
      onOpenToggle,
      modal,
      allowPinchZoom
    };
    const { when, AdaptProvider } = (0, import_adapt.useAdaptParent)({
      Contents: React6.useCallback(
        (props2) => {
          return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_portal.PortalHost, { forwardProps: props2, name: sheetContentsName });
        },
        [sheetContentsName]
      )
    });
    React6.useImperativeHandle(
      ref,
      () => ({
        open: setOpen
      }),
      [setOpen]
    );
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(AdaptProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(DialogProvider, { ...context, sheetBreakpoint: when, children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(DialogSheetController, { onOpenChange: setOpen, __scopeDialog, children }) }) });
  }, "Dialog2")),
  {
    Trigger: DialogTrigger,
    Portal: DialogPortal,
    Overlay: DialogOverlay,
    Content: DialogContent,
    Title: DialogTitle,
    Description: DialogDescription,
    Close: DialogClose,
    Sheet: import_sheet.ControlledSheet,
    Adapt: import_adapt.Adapt
  }
);
var SHEET_CONTENTS_NAME = "DialogSheetContents";
var DialogSheetContents = /* @__PURE__ */ __name(({
  name,
  ...props
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_portal.PortalHost, { forwardProps: props, name });
}, "DialogSheetContents");
DialogSheetContents.displayName = SHEET_CONTENTS_NAME;
var getSheetContentsName = /* @__PURE__ */ __name(({
  scopeKey,
  contentId
}) => `${scopeKey || contentId}SheetContents`, "getSheetContentsName");
var DialogSheetController = /* @__PURE__ */ __name((props) => {
  const context = useDialogContext("DialogSheetController", props.__scopeDialog);
  const showSheet = useShowDialogSheet(context);
  const breakpointActive = useSheetBreakpointActive(context);
  const getShowSheet = (0, import_core12.useGet)(showSheet);
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
    import_sheet.SheetController,
    {
      onOpenChange: (val) => {
        if (getShowSheet()) {
          props.onOpenChange(val);
        }
      },
      open: context.open,
      hidden: breakpointActive === false,
      children: props.children
    }
  );
}, "DialogSheetController");
var useSheetBreakpointActive = /* @__PURE__ */ __name((context) => {
  const media = (0, import_core12.useMedia)();
  if (!context.sheetBreakpoint)
    return false;
  if (context.sheetBreakpoint === true)
    return true;
  return media[context.sheetBreakpoint];
}, "useSheetBreakpointActive");
var useShowDialogSheet = /* @__PURE__ */ __name((context) => {
  const breakpointActive = useSheetBreakpointActive(context);
  return context.open === false ? false : breakpointActive;
}, "useShowDialogSheet");

// node_modules/tamagui/dist/esm/index.mjs
__reExport(esm_exports, __toESM(require_cjs25(), 1), module.exports);

// node_modules/@tamagui/form/dist/esm/Form.js
var import_jsx_runtime6 = require("react/jsx-runtime");
var import_core13 = require("@tamagui/core-node");
var import_create_context3 = __toESM(require_cjs3());
var import_react6 = require("react");
var FORM_NAME = "Form";
var FormFrame = (0, import_core13.styled)(import_core13.Stack, {
  name: FORM_NAME,
  tag: "form"
});
var [createFormContext] = (0, import_create_context3.createContextScope)(FORM_NAME);
var [FormProvider, useFormContext] = createFormContext(FORM_NAME);
var TRIGGER_NAME2 = "FormTrigger";
var FormTriggerFrame = (0, import_core13.styled)(import_core13.Stack, {
  name: TRIGGER_NAME2
});
var FormTrigger = FormTriggerFrame.extractable(
  (0, import_react6.forwardRef)(
    (props, forwardedRef) => {
      const { __scopeForm, children, ...triggerProps } = props;
      const context = useFormContext(TRIGGER_NAME2, __scopeForm);
      return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
        FormTriggerFrame,
        {
          tag: "button",
          ...triggerProps,
          children: triggerProps.asChild ? (0, import_react6.cloneElement)(children, { disabled: triggerProps.disabled }) : children,
          ref: forwardedRef,
          onPress: (0, import_core13.composeEventHandlers)(props.onPress, context.onSubmit)
        }
      );
    }
  )
);
function FormComponent({
  onSubmit,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(FormProvider, { scope: props.__scopeForm, onSubmit, children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(FormFrame, { ...props, onSubmit: (e) => e.preventDefault() }) });
}
__name(FormComponent, "FormComponent");
var Form = (0, import_core13.withStaticProperties)(FormFrame.extractable(FormComponent), {
  Trigger: FormTrigger
});

// node_modules/tamagui/dist/esm/index.mjs
__reExport(esm_exports, __toESM(require_cjs28(), 1), module.exports);
__reExport(esm_exports, __toESM(require_cjs23(), 1), module.exports);

// node_modules/@tamagui/label/dist/esm/Label.js
var import_jsx_runtime7 = require("react/jsx-runtime");
var import_core14 = require("@tamagui/core-node");
var import_create_context4 = __toESM(require_cjs3());
var import_focusable = __toESM(require_cjs29());
var import_get_button_sized3 = __toESM(require_cjs11());
var import_get_font_sized2 = __toESM(require_cjs19());
var React7 = __toESM(require("react"));
var NAME2 = "Label";
var [LabelProvider, useLabelContextImpl] = (0, import_create_context4.createContext)(NAME2, {
  id: void 0,
  controlRef: { current: null }
});
var LabelFrame = (0, import_core14.styled)(SizableText, {
  name: "Label",
  tag: "label",
  size: "$true",
  backgroundColor: "transparent",
  display: "flex",
  alignItems: "center",
  userSelect: "none",
  cursor: "default",
  pressStyle: {
    color: "$colorPress"
  },
  variants: {
    size: {
      "...size": (val, extras) => {
        const buttonStyle = (0, import_get_button_sized3.getButtonSized)(val, extras);
        return {
          ...(0, import_get_font_sized2.getFontSized)(val, extras),
          height: buttonStyle.height,
          lineHeight: buttonStyle.height
        };
      }
    }
  }
});
var LabelComponent = React7.forwardRef(
  (props, forwardedRef) => {
    const { htmlFor, id: idProp, ...labelProps } = props;
    const controlRef = React7.useRef(null);
    const ref = React7.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, ref);
    const backupId = (0, import_core14.useId)();
    const id = idProp ?? backupId;
    if (import_core14.isWeb) {
      React7.useEffect(() => {
        if (htmlFor) {
          const element = document.getElementById(htmlFor);
          const label = ref.current;
          if (label && element) {
            const getAriaLabel = /* @__PURE__ */ __name(() => element.getAttribute("aria-labelledby"), "getAriaLabel");
            const ariaLabelledBy = [id, getAriaLabel()].filter(Boolean).join(" ");
            element.setAttribute("aria-labelledby", ariaLabelledBy);
            controlRef.current = element;
            return () => {
              var _a;
              if (!id)
                return;
              const ariaLabelledBy2 = (_a = getAriaLabel()) == null ? void 0 : _a.replace(id, "");
              if (ariaLabelledBy2 === "") {
                element.removeAttribute("aria-labelledby");
              } else if (ariaLabelledBy2) {
                element.setAttribute("aria-labelledby", ariaLabelledBy2);
              }
            };
          }
        }
      }, [id, htmlFor]);
    }
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(LabelProvider, { id, controlRef, children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
      LabelFrame,
      {
        role: "label",
        id,
        htmlFor,
        ...labelProps,
        ref: composedRefs,
        onMouseDown: (event) => {
          var _a;
          (_a = props.onMouseDown) == null ? void 0 : _a.call(props, event);
          if (!event.defaultPrevented && event.detail > 1) {
            event.preventDefault();
          }
        },
        onPress: (event) => {
          var _a;
          (_a = props.onPress) == null ? void 0 : _a.call(props, event);
          if (import_core14.isWeb) {
            if (htmlFor || !controlRef.current || event.defaultPrevented)
              return;
            const isClickingControl = controlRef.current.contains(
              event.target
            );
            const isUserClick = event.isTrusted === true;
            if (!isClickingControl && isUserClick) {
              controlRef.current.click();
              controlRef.current.focus();
            }
          } else {
            if (props.htmlFor) {
              (0, import_focusable.focusFocusable)(props.htmlFor);
            }
          }
        }
      }
    ) });
  }
);
LabelComponent.displayName = NAME2;
var Label = LabelFrame.extractable((0, import_core14.themeable)(LabelComponent), {
  neverFlatten: true
});
var useLabelContext = /* @__PURE__ */ __name((element) => {
  const context = useLabelContextImpl("LabelConsumer");
  const { controlRef } = context;
  React7.useEffect(() => {
    if (element)
      controlRef.current = element;
  }, [element, controlRef]);
  return context.id;
}, "useLabelContext");

// node_modules/tamagui/dist/esm/index.mjs
__reExport(esm_exports, __toESM(require_cjs30(), 1), module.exports);
__reExport(esm_exports, __toESM(require_cjs33(), 1), module.exports);
__reExport(esm_exports, __toESM(require_cjs32(), 1), module.exports);
__reExport(esm_exports, __toESM(require_cjs13(), 1), module.exports);
__reExport(esm_exports, __toESM(require_cjs34(), 1), module.exports);
__reExport(esm_exports, __toESM(require_cjs36(), 1), module.exports);
__reExport(esm_exports, __toESM(require_cjs17(), 1), module.exports);
__reExport(esm_exports, __toESM(require_cjs38(), 1), module.exports);
__reExport(esm_exports, __toESM(require_cjs37(), 1), module.exports);
__reExport(esm_exports, __toESM(require_cjs24(), 1), module.exports);
__reExport(esm_exports, __toESM(require_cjs18(), 1), module.exports);
__reExport(esm_exports, __toESM(require_cjs40(), 1), module.exports);
__reExport(esm_exports, __toESM(require_cjs41(), 1), module.exports);
__reExport(esm_exports, __toESM(require_cjs42(), 1), module.exports);
__reExport(esm_exports, __toESM(require_cjs43(), 1), module.exports);

// node_modules/@tamagui/use-force-update/dist/esm/index.mjs
var import_react9 = require("react");
var isServerSide = process.env.TAMAGUI_TARGET === "web" && typeof window === "undefined";
var idFn3 = /* @__PURE__ */ __name(() => {
}, "idFn");
function useForceUpdate() {
  return isServerSide ? idFn3 : (0, import_react9.useReducer)((x) => x + 1, 0)[1];
}
__name(useForceUpdate, "useForceUpdate");

// node_modules/tamagui/dist/esm/index.mjs
__reExport(esm_exports, __toESM(require_cjs44(), 1), module.exports);
__reExport(esm_exports, __toESM(require_cjs45(), 1), module.exports);
__reExport(esm_exports, __toESM(require_cjs46(), 1), module.exports);

// node_modules/tamagui/dist/esm/createTamagui.js
var import_core17 = require("@tamagui/core-node");
var createTamagui = process.env.NODE_ENV !== "development" ? import_core17.createTamagui : (conf) => {
  const sizeTokenKeys = [
    "$0",
    "$1",
    "$2",
    "$3",
    "$4",
    "$5",
    "$6",
    "$7",
    "$8",
    "$9",
    "$10",
    "$true"
  ];
  const hasKeys = /* @__PURE__ */ __name((expectedKeys, obj) => {
    return expectedKeys.every((k) => typeof obj[k] !== "undefined");
  }, "hasKeys");
  const tamaguiConfig = (0, import_core17.createTamagui)(conf);
  for (const name of ["size", "space"]) {
    const tokenSet = tamaguiConfig.tokensParsed[name];
    if (!tokenSet) {
      throw new Error(
        `Expected tokens for "${name}" in ${Object.keys(
          tamaguiConfig.tokensParsed
        ).join(", ")}`
      );
    }
    if (!hasKeys(sizeTokenKeys, tokenSet)) {
      throw new Error(`
createTamagui() missing definition for expected tokens.${name}:

Received: ${Object.keys(tokenSet).join(", ")}

Expected: ${sizeTokenKeys.join(", ")}

`);
    }
  }
  const expected = Object.keys(tamaguiConfig.tokensParsed.size);
  for (const name of ["radius", "zIndex"]) {
    const tokenSet = tamaguiConfig.tokensParsed[name];
    const received = Object.keys(tokenSet);
    const hasSomeOverlap = received.some((rk) => expected.includes(rk));
    if (!hasSomeOverlap) {
      throw new Error(`
createTamagui() invalid tokens.${name}:

Received: ${received.join(", ")}

Expected a subset of: ${expected.join(", ")}

`);
    }
  }
  return tamaguiConfig;
};

// node_modules/tamagui/dist/esm/views/TamaguiProvider.js
var import_jsx_runtime8 = require("react/jsx-runtime");
var import_core18 = require("@tamagui/core-node");
var import_portal2 = __toESM(require_cjs13());
var TamaguiProvider = import_core18.isRSC ? import_core18.TamaguiProvider : ({ children, ...props }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_core18.TamaguiProvider, { ...props, children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_portal2.PortalProvider, { shouldAddRootHost: true, children }) });
};

// node_modules/tamagui/dist/esm/views/Anchor.js
var import_jsx_runtime9 = require("react/jsx-runtime");
var import_core19 = require("@tamagui/core-node");
var import_react10 = require("react");
var import_react_native2 = require("react-native-web-lite");
var AnchorFrame = (0, import_core19.styled)(SizableText, {
  name: "Anchor",
  tag: "a",
  accessibilityRole: "link"
});
var Anchor = AnchorFrame.extractable(
  (0, import_react10.forwardRef)(({ href, target, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
      AnchorFrame,
      {
        ...props,
        ...import_core19.isWeb ? {
          href,
          target
        } : {
          onPress: (event) => {
            var _a;
            (_a = props.onPress) == null ? void 0 : _a.call(props, event);
            if (href !== void 0) {
              import_react_native2.Linking.openURL(href);
            }
          }
        },
        ref
      }
    );
  })
);

// node_modules/tamagui/dist/esm/views/EnsureFlexed.js
var import_core20 = require("@tamagui/core-node");
var EnsureFlexed = (0, import_core20.styled)(import_core20.Text, {
  opacity: 0,
  lineHeight: 0,
  height: 0,
  display: "flex",
  fontSize: 200,
  children: "wwwwwwwwwwwwwwwwwww",
  hoverStyle: {
    backgroundColor: "red"
  },
  pointerEvents: "none"
});
EnsureFlexed["isVisuallyHidden"] = true;

// node_modules/tamagui/dist/esm/views/Fieldset.js
var import_core21 = require("@tamagui/core-node");
var Fieldset = (0, import_core21.styled)(YStack, {
  name: "Fieldset",
  tag: "fieldset",
  variants: {
    horizontal: {
      true: {
        flexDirection: "row",
        alignItems: "center"
      }
    }
  }
});

// node_modules/tamagui/dist/esm/views/Grid.js
var import_jsx_runtime10 = require("react/jsx-runtime");
var import_core22 = require("@tamagui/core-node");
var import_react11 = __toESM(require("react"));
function Grid({ children, columns, itemMinWidth = 200, gap }) {
  if (import_core22.isWeb) {
    return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
      "div",
      {
        style: {
          gap,
          display: "grid",
          justifyContent: "stretch",
          // gridTemplateRows: 'repeat(4, 1fr)',
          gridTemplateColumns: `repeat( auto-fit, minmax(${itemMinWidth}px, 1fr) )`
          // gridTemplateColumns: '1fr 1fr',
        },
        children
      }
    );
  }
  const childrenList = import_react11.default.Children.toArray(children);
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(XStack, { alignItems: "center", justifyContent: "center", flexWrap: "wrap", children: childrenList.map((child, i) => {
    if (!child) {
      return null;
    }
    return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
      XStack,
      {
        flex: 1,
        minWidth: itemMinWidth,
        marginRight: gap,
        marginBottom: gap,
        children: child
      },
      i
    );
  }) });
}
__name(Grid, "Grid");

// node_modules/tamagui/dist/esm/views/Input.js
var import_core24 = require("@tamagui/core-node");
var import_focusable2 = __toESM(require_cjs29());
var import_react_native3 = require("react-native-web-lite");

// node_modules/tamagui/dist/esm/helpers/inputHelpers.js
var import_core23 = require("@tamagui/core-node");
var import_get_button_sized4 = __toESM(require_cjs11());
var import_get_font_sized3 = __toESM(require_cjs19());
var import_get_size = __toESM(require_cjs10());
var inputSizeVariant = /* @__PURE__ */ __name((val = "$true", extras) => {
  if (extras.props.multiline || extras.props.numberOfLines > 1) {
    return textAreaSizeVariant(val, extras);
  }
  const buttonStyles = (0, import_get_button_sized4.getButtonSized)(val, extras);
  const paddingHorizontal = (0, import_get_size.stepTokenUpOrDown)("space", val, -1, [2]);
  const fontStyle = (0, import_get_font_sized3.getFontSized)(val, extras);
  if (!import_core23.isWeb && fontStyle) {
    delete fontStyle["lineHeight"];
  }
  return {
    ...fontStyle,
    ...buttonStyles,
    paddingHorizontal
  };
}, "inputSizeVariant");
var textAreaSizeVariant = /* @__PURE__ */ __name((val = "$true", extras) => {
  const { props } = extras;
  const buttonStyles = (0, import_get_button_sized4.getButtonSized)(val, extras);
  const fontStyle = (0, import_get_font_sized3.getFontSized)(val, extras);
  const height = props.numberOfLines ? (props.numberOfLines || 1) * (0, import_core23.getVariableValue)(fontStyle.lineHeight) : "auto";
  const paddingVertical = (0, import_get_size.stepTokenUpOrDown)("space", val, -2, [2]);
  const paddingHorizontal = (0, import_get_size.stepTokenUpOrDown)("space", val, -1, [2]);
  return {
    ...buttonStyles,
    ...fontStyle,
    paddingVertical,
    paddingHorizontal,
    height
  };
}, "textAreaSizeVariant");

// node_modules/tamagui/dist/esm/views/Input.js
(0, import_core24.setupReactNative)({
  TextInput: import_react_native3.TextInput
});
var InputFrame = (0, import_core24.styled)(
  import_react_native3.TextInput,
  {
    name: "Input",
    fontFamily: "$body",
    borderWidth: 1,
    outlineWidth: 0,
    color: "$color",
    focusable: true,
    borderColor: "$borderColor",
    backgroundColor: "$background",
    placeholderTextColor: "$placeholderColor",
    // this fixes a flex bug where it overflows container
    minWidth: 0,
    hoverStyle: {
      borderColor: "$borderColorHover"
    },
    focusStyle: {
      borderColor: "$borderColorFocus",
      borderWidth: 2,
      marginHorizontal: -1
    },
    variants: {
      size: {
        "...size": inputSizeVariant
      }
    },
    defaultVariants: {
      size: "$true"
    }
  },
  {
    isInput: true
  }
);
var Input = (0, import_focusable2.focusableInputHOC)(InputFrame);

// node_modules/tamagui/dist/esm/views/Group.js
var import_jsx_runtime11 = require("react/jsx-runtime");
var import_core25 = require("@tamagui/core-node");
var import_react12 = __toESM(require("react"));
var import_react_native4 = require("react-native-web-lite");
var GroupFrame = (0, import_core25.styled)(ThemeableStack, {
  name: "GroupFrame",
  backgroundColor: "$background",
  y: 0,
  variants: {
    size: (val, { tokens }) => {
      const borderRadius = tokens.radius[val] ?? val ?? tokens.radius["$true"];
      return {
        borderRadius
      };
    }
  },
  defaultVariants: {
    size: "$true"
  }
});
function createGroup(verticalDefault) {
  return (0, import_react12.forwardRef)((props, ref) => {
    const activeProps = (0, import_core25.useMediaPropsActive)(props);
    const {
      children: childrenProp,
      space,
      size: size2 = "$true",
      spaceDirection,
      separator,
      scrollable,
      vertical = verticalDefault,
      disabled: disabledProp,
      disablePassBorderRadius: disablePassBorderRadiusProp,
      borderRadius,
      ...restProps
    } = (0, import_core25.getExpandedShorthands)(activeProps);
    const radius = borderRadius ?? (size2 ? (0, import_core25.getVariableValue)((0, import_core25.getTokens)().radius[size2]) - 1 : void 0);
    const hasRadius = radius !== void 0;
    const disablePassBorderRadius = disablePassBorderRadiusProp ?? !hasRadius;
    const childrens = import_react12.Children.toArray(childrenProp);
    const children = childrens.map((child, i) => {
      if (!(0, import_react12.isValidElement)(child))
        return child;
      const disabled = child.props.disabled ?? disabledProp;
      const isFirst = i === 0;
      const isLast = i === childrens.length - 1;
      const radiusStyles = disablePassBorderRadius ? null : {
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        ...hasRadius && {
          ...isFirst && !vertical && {
            borderTopLeftRadius: radius,
            borderBottomLeftRadius: radius
          },
          ...isFirst && vertical && {
            borderTopLeftRadius: radius,
            borderTopRightRadius: radius
          },
          ...isLast && !vertical && {
            borderTopRightRadius: radius,
            borderBottomRightRadius: radius
          },
          ...isLast && vertical && {
            borderBottomLeftRadius: radius,
            borderBottomRightRadius: radius
          }
        }
      };
      const props2 = {
        disabled,
        ...(0, import_core25.isTamaguiElement)(child) ? radiusStyles : { style: radiusStyles }
      };
      return cloneElementWithPropOrder(child, props2);
    });
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
      GroupFrame,
      {
        ref,
        size: size2,
        flexDirection: !vertical ? "row" : "column",
        borderRadius,
        ...restProps,
        children: wrapScroll(
          activeProps,
          (0, import_core25.spacedChildren)({
            direction: spaceDirection,
            separator,
            space,
            children
          })
        )
      }
    );
  });
}
__name(createGroup, "createGroup");
var YGroup = createGroup(true);
var XGroup = createGroup(false);
var wrapScroll = /* @__PURE__ */ __name(({ scrollable, vertical, showScrollIndicator = false }, children) => {
  if (scrollable)
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
      import_react_native4.ScrollView,
      {
        ...vertical && {
          showsVerticalScrollIndicator: showScrollIndicator
        },
        ...!vertical && {
          horizontal: true,
          showsHorizontalScrollIndicator: showScrollIndicator
        },
        children
      }
    );
  return children;
}, "wrapScroll");
var cloneElementWithPropOrder = /* @__PURE__ */ __name((child, props) => {
  const next = (0, import_core25.mergeProps)(child.props, props, false, (0, import_core25.getConfig)().shorthands)[0];
  return import_react12.default.cloneElement({ ...child, props: null }, next);
}, "cloneElementWithPropOrder");

// node_modules/tamagui/dist/esm/views/Layouts.js
var import_core26 = require("@tamagui/core-node");
var Section = (0, import_core26.styled)(import_core26.Stack, {
  name: "Section",
  tag: "section",
  flexDirection: "column",
  accessibilityRole: "summary"
});
var Article = (0, import_core26.styled)(import_core26.Stack, {
  name: "Article",
  tag: "article",
  flexDirection: "column"
});
var Main = (0, import_core26.styled)(import_core26.Stack, {
  name: "Main",
  tag: "main",
  flexDirection: "column"
});
var Header = (0, import_core26.styled)(import_core26.Stack, {
  name: "Header",
  tag: "header",
  accessibilityRole: "header",
  flexDirection: "column"
});
var Aside = (0, import_core26.styled)(import_core26.Stack, {
  name: "Aside",
  tag: "aside",
  flexDirection: "column"
  // accessibilityRole: 'complementary',
});
var Footer = (0, import_core26.styled)(import_core26.Stack, {
  name: "Footer",
  tag: "footer",
  flexDirection: "column"
  // accessibilityRole: 'contentinfo',
});
var Nav = (0, import_core26.styled)(import_core26.Stack, {
  name: "Nav",
  tag: "nav",
  flexDirection: "column"
  // accessibilityRole: 'navigation',
});

// node_modules/tamagui/dist/esm/views/Spinner.js
var import_jsx_runtime12 = require("react/jsx-runtime");
var import_core27 = require("@tamagui/core-node");
var React12 = __toESM(require("react"));
var import_react_native5 = require("react-native-web-lite");
var Spinner = YStack.extractable(
  (0, import_core27.themeable)(
    React12.forwardRef((props, ref) => {
      const { size: size2, color: colorProp, ...stackProps } = props;
      const theme = (0, import_core27.useTheme)();
      let color = colorProp;
      if (color && color[0] === "$") {
        color = (0, import_core27.variableToString)(theme[color]);
      }
      return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(YStack, { ref, ...stackProps, children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_react_native5.ActivityIndicator, { size: size2, color }) });
    }),
    {
      componentName: "Spinner"
    }
  )
);

// node_modules/tamagui/dist/esm/views/TextArea.js
var import_core28 = require("@tamagui/core-node");
var import_focusable3 = __toESM(require_cjs29());
var TextAreaFrame = (0, import_core28.styled)(InputFrame, {
  name: "TextArea",
  multiline: true,
  numberOfLines: 4,
  height: "auto",
  variants: {
    size: {
      "...size": textAreaSizeVariant
    }
  },
  defaultVariants: {
    size: "$true"
  }
});
var TextArea = (0, import_focusable3.focusableInputHOC)(TextAreaFrame);

// node_modules/tamagui/dist/esm/index.mjs
var import_core29 = require("@tamagui/core-node");
function LinearGradient(props) {
  if (process.env.NODE_ENV === "development") {
    console.warn(`LinearGradient has been moved to tamagui/linear-gradient as of 1.1`);
  }
  return null;
}
__name(LinearGradient, "LinearGradient");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Anchor,
  Article,
  Aside,
  Avatar,
  AvatarFallback,
  AvatarFallbackFrame,
  AvatarFrame,
  AvatarImage,
  Button,
  ButtonFrame,
  ButtonText,
  Card,
  CardBackground,
  CardFooter,
  CardFrame,
  CardHeader,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogPortal,
  DialogPortalFrame,
  DialogSheetContents,
  DialogTitle,
  DialogTrigger,
  DialogWarningProvider,
  EnsureFlexed,
  Fieldset,
  FontLanguage,
  Footer,
  Form,
  FormFrame,
  FormProvider,
  FormTrigger,
  Grid,
  GroupFrame,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Header,
  Heading,
  Input,
  InputFrame,
  Label,
  LabelFrame,
  LinearGradient,
  Main,
  Nav,
  Paragraph,
  Section,
  SizableStack,
  SizableText,
  Spacer,
  Spinner,
  Stack,
  TamaguiProvider,
  Text,
  TextAncestorContext,
  TextArea,
  TextAreaFrame,
  Theme,
  ThemeableStack,
  Unspaced,
  XGroup,
  XStack,
  YGroup,
  YStack,
  ZStack,
  addTheme,
  buttonStaticConfig,
  composeRefs,
  createAvatarScope,
  createComponent,
  createDialogScope,
  createFont,
  createShorthands,
  createTamagui,
  createTheme,
  createTokens,
  createVariable,
  getAnimationDriver,
  getConfig,
  getMedia,
  getStylesAtomic,
  getThemes,
  getTokens,
  getVariable,
  getVariableName,
  getVariableValue,
  idFn,
  insertFont,
  isChrome,
  isClient,
  isServer,
  isServerSide,
  isTamaguiComponent,
  isTamaguiElement,
  isTouchable,
  isVariable,
  isWeb,
  isWebTouchable,
  matchMedia,
  mediaObjectToString,
  mediaQueryConfig,
  mediaState,
  spacedChildren,
  styled,
  themeable,
  updateTheme,
  useButton,
  useComposedRefs,
  useControllableState,
  useDidFinishSSR,
  useEvent,
  useForceUpdate,
  useFormContext,
  useGet,
  useIsTouchDevice,
  useIsomorphicLayoutEffect,
  useLabelContext,
  useMedia,
  useSafeRef,
  useStyle,
  useTheme,
  useThemeName,
  variableToString,
  withStaticProperties,
  wrapChildrenInText
});
/*! Bundled license information:

tabbable/dist/index.js:
  (*!
  * tabbable 6.1.1
  * @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
  *)
*/
