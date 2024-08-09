(self["webpackChunkwebpack"] = self["webpackChunkwebpack"] || []).push([["vendor"],{

/***/ "../src/Dlw.EpiBase.Web/node_modules/@delawarepro/web-components/src/base/dlw-webcomponent-base.js":
/*!*********************************************************************************************************!*\
  !*** ../src/Dlw.EpiBase.Web/node_modules/@delawarepro/web-components/src/base/dlw-webcomponent-base.js ***!
  \*********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DlwBaseWebComponent": function() { return /* binding */ DlwBaseWebComponent; }
/* harmony export */ });
/* harmony import */ var _utils_string_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/string-utils */ "../src/Dlw.EpiBase.Web/node_modules/@delawarepro/web-components/src/utils/string-utils.js");
/* harmony import */ var _utils_global_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/global-styles */ "../src/Dlw.EpiBase.Web/node_modules/@delawarepro/web-components/src/utils/global-styles.js");
var __classPrivateFieldGet = undefined && undefined.__classPrivateFieldGet || function (receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _DlwBaseWebComponent_componentInitializedState;


class DlwBaseWebComponent extends HTMLElement {
  /**
   * Constructor for internal checks (prevent DOM manipulation in the constructor)
   */
  constructor() {
    super();
    _DlwBaseWebComponent_componentInitializedState.set(this, "initialized");
    /**
     * renderRoot is the root on which you can query. Accessible via this.renderRoot in your component. */
    this.renderRoot = null;
    /**
     * config is a JSON object passed to the config attribute on the component
     */
    this.config = null;
    this.bindRenderRoot();
  }
  /**
   * If the component has a Declarative ShadowDOM attached, use it as the renderRoot.
   * In case there's no Declarative ShadowDOM, use the renderRoot as defined in this.createRenderRoot (null or shadowDom);
   */
  bindRenderRoot() {
    // If we don't have a Declarative ShadowDOM, add the result of the render method to the renderRoot
    if (!this.shadowRoot) {
      // Set the root on which we can query.
      this.renderRoot = this.createRenderRoot();
      const template = this.render();
      if (template) this.renderRoot.innerHTML = template;
    }
    // If it does exist, lets use the Declarative ShadowDOM
    else {
      this.renderRoot = this.shadowRoot;
    }
  }
  /**
   * Invoked every time the web component is connected to the DOM
   */
  connectedCallback() {
    // Convert param to JSON
    var json = this.getAttributeValue("config");
    if (json) {
      try {
        this.config = JSON.parse(json);
      } catch (e) {
        console.error("Invalid JSON passed to 'config' attribute");
        this.config = json;
      }
    }
    // Adopt global styles
    if (this.shadowRoot && this.getAttributeValue("adopt-global-styles") == "true") {
      (0,_utils_global_styles__WEBPACK_IMPORTED_MODULE_1__.addGlobalStylesToShadowRoot)(this.shadowRoot);
    }
    // Check if component should be initialized upon scrolling in view (loading=lazy)
    const loadLazy = this.getAttributeValue("loading") == "lazy";
    if (loadLazy) {
      const iObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !this.hasAttribute(__classPrivateFieldGet(this, _DlwBaseWebComponent_componentInitializedState, "f"))) {
            this.beforeInit();
          }
        });
      });
      iObserver.observe(this);
    } else {
      this.beforeInit();
    }
  }
  beforeInit() {
    this.init();
    this.setAttribute(__classPrivateFieldGet(this, _DlwBaseWebComponent_componentInitializedState, "f"), "");
  }
  /**
   * Init method to setup event listeners, fetch data, query the renderRoot, access assignedElements, ...
   */
  init() {}
  /**
   * Return the template of the component
   */
  render() {
    return null;
  }
  /**
   * Create the root in which we can query.
   * By default, we create a ShadowDom (open)
   * Override this method in case you want the light DOM. Therefore, use 'return this' (Similar to Lit)
   */
  createRenderRoot() {
    return this.attachShadow({
      mode: "open"
    });
  }
  /**
   * Get the value of an attribute, or get its default value in case there's no value
   * @param {string} name the name of the attribute
   * @param defaultValue default value of the attribute
   */
  getAttributeValue(name) {
    let defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    let value = this.getAttribute(name);
    if (value === undefined || value === "") {
      return true;
    } else if (value) {
      return value;
    }
    return defaultValue;
  }
  /**
   * Check if attribute exist or has an empty string or value true     *
   * @property {string} name - attribute name to be checked if false or true
   * @returns {boolean}
   */
  getBooleanAttributeValue(name) {
    let value = this.getAttribute(name);
    return value === undefined || value === "" || value === "true" ? true : false;
  }
  /**
   * Lifecycle method triggered after an attribute is added, removed or its value is changed
   * @param {string} property
   * @param {string} oldValue
   * @param {string} newValue
   */
  attributeChangedCallback(property, oldValue, newValue) {
    if (oldValue === newValue) return;
    const propName = (0,_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__.kebabCaseToCamelCase)(property);
    this[propName] = newValue;
    if (this.onAttributeChangedCallback) {
      this.onAttributeChangedCallback(propName);
    }
  }
  /**
   * Register the component
   * @param {string} name the name of your web components that will be used as custom element; eg. hello-world
   */
  static define(name) {
    window.customElements.define(name, this);
  }
}
_DlwBaseWebComponent_componentInitializedState = new WeakMap();

/***/ }),

/***/ "../src/Dlw.EpiBase.Web/node_modules/@delawarepro/web-components/src/dlw-count-up.js":
/*!*******************************************************************************************!*\
  !*** ../src/Dlw.EpiBase.Web/node_modules/@delawarepro/web-components/src/dlw-count-up.js ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DlwCountUp": function() { return /* binding */ DlwCountUp; }
/* harmony export */ });
/* harmony import */ var _base_dlw_webcomponent_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base/dlw-webcomponent-base */ "../src/Dlw.EpiBase.Web/node_modules/@delawarepro/web-components/src/base/dlw-webcomponent-base.js");
/* harmony import */ var countup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! countup.js */ "../src/Dlw.EpiBase.Web/node_modules/countup.js/dist/countUp.min.js");


class DlwCountUp extends _base_dlw_webcomponent_base__WEBPACK_IMPORTED_MODULE_0__.DlwBaseWebComponent {
  constructor() {
    super(...arguments);
    this.endValue = "endValue";
    this.startValue = "startValue";
    this.duration = "duration";
    this.grouping = "grouping";
    this.indianSeparators = "indianSeparators";
    this.easing = "easing";
    this.easingthreshold = "easingthreshold";
    this.easingThresholdAmount = "easingThresholdAmount";
    this.separator = "separator";
    this.amountDecimals = "amountDecimals";
    this.decimalSeparator = "decimalSeparator";
    this.intoview = "intoview";
    this.intoviewDelay = "intoviewDelay";
    this.intoviewOnce = "intoviewOnce";
  }
  //** Turn off ShadowDOM */
  createRenderRoot() {
    return this;
  }
  init() {
    //The endValue of the animation
    const endValue = parseInt(this.getValue(this.endValue, parseInt(this.innerText)));
    //The startValue of the animation
    const startValue = parseInt(this.getValue(this.startValue, 0));
    //The duration of the animation
    const duration = parseInt(this.getValue(this.duration, 2));
    //A bool for when you want to use groupings or not
    const grouping = JSON.parse(this.getValue(this.grouping, true));
    //Only applies if grouping is true
    const indianSeparators = JSON.parse(this.getValue(this.indianSeparators, false));
    //If you want easing or not
    const easing = JSON.parse(this.getValue(this.easing, true));
    //The treshold which to apply smooth easing for large numbers
    //Only applies if easing is true
    const smartEasingThreshold = parseInt(this.getValue(this.easingThreshold, 999));
    //The amount by which numbers above the smartEasingThreshold should be eased
    const smartEasingAmount = parseInt(this.getValue(this.easingThresholdAmount, 333));
    //The grouping separator character you want to use
    const separator = this.getValue(this.separator, ",");
    //The decimal separator character you want to use
    const decimalPlaces = parseInt(this.getValue(this.amountDecimals, 0));
    //The decimal separator character you want to use
    //Only applies if decimalPlaces is set
    const decimalSeparator = this.getValue(this.decimalSeparator, ".");
    //Start animation when is in the view
    const enableScrollSpy = JSON.parse(this.getValue(this.intoview, false));
    //Stat animation when in the view but with delay
    //Only applies if decimalPlaces is set
    const scrollSpyDelay = parseInt(this.getValue(this.intoviewDelay, "0"));
    //Repeat the animation when anomation is again in the view
    //Only applies if decimalPlaces is set
    const scrollSpyOnce = JSON.parse(this.getValue(this.intoviewOnce, true));
    const countUpOptions = {
      startVal: startValue,
      duration: duration,
      useGrouping: grouping,
      useIndianSeparators: indianSeparators,
      useEasing: easing,
      smartEasingThreshold: smartEasingThreshold,
      smartEasingAmount: smartEasingAmount,
      separator: separator,
      decimalPlaces: decimalPlaces,
      decimal: decimalSeparator,
      enableScrollSpy: enableScrollSpy,
      scrollSpyDelay: scrollSpyDelay,
      scrollSpyOnce: scrollSpyOnce
    };
    if (endValue) {
      var countUp = new countup_js__WEBPACK_IMPORTED_MODULE_1__.CountUp(this, endValue, countUpOptions);
      countUp.start();
    }
  }
  // TODO: review if this.getAttributeValue can be used + refactor
  getValue(attribute, defaultValue) {
    let returnValue;
    if (this.hasAttribute(attribute)) {
      if (this.getAttribute(attribute) === "") {
        returnValue = defaultValue;
      } else {
        returnValue = this.getAttribute(attribute);
      }
    } else {
      returnValue = defaultValue;
    }
    return returnValue;
  }
}
DlwCountUp.define("dlw-count-up");

/***/ }),

/***/ "../src/Dlw.EpiBase.Web/node_modules/@delawarepro/web-components/src/dlw-focus-trap.js":
/*!*********************************************************************************************!*\
  !*** ../src/Dlw.EpiBase.Web/node_modules/@delawarepro/web-components/src/dlw-focus-trap.js ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DlwFocusTrap": function() { return /* binding */ DlwFocusTrap; }
/* harmony export */ });
/* harmony import */ var _base_dlw_webcomponent_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base/dlw-webcomponent-base */ "../src/Dlw.EpiBase.Web/node_modules/@delawarepro/web-components/src/base/dlw-webcomponent-base.js");
/* harmony import */ var _utils_media_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/media-utils */ "../src/Dlw.EpiBase.Web/node_modules/@delawarepro/web-components/src/utils/media-utils.js");
/* harmony import */ var ally_js_src_query_focusable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ally.js/src/query/focusable */ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/query/focusable.js");




class DlwFocusTrap extends _base_dlw_webcomponent_base__WEBPACK_IMPORTED_MODULE_0__.DlwBaseWebComponent {
  //** Turn off ShadowDOM */
  createRenderRoot() {
    return this;
  }
  init() {
    const ignoreFocus = Array.from(this.querySelectorAll("[data-focus-trap-ignore]"));
    ignoreFocus.map(element => {
      const attributeValue = element.getAttribute("data-focus-trap-ignore");
      const mqIgnoreFocus = (0,_utils_media_utils__WEBPACK_IMPORTED_MODULE_1__.getMatchMedia)(element, element.getAttribute("data-focus-trap-ignore"));
      if (mqIgnoreFocus) {
        (0,_utils_media_utils__WEBPACK_IMPORTED_MODULE_1__.observeMediaQuery)(attributeValue, matches => {
          if (matches) {
            element.setAttribute("inert", true);
          } else {
            element.removeAttribute("inert");
          }
        }, document.window);
      } else {
        element.setAttribute("inert", true);
      }
    });
    const focusTrap = this.getAttribute("media");
    this.getAllFocusableEl();
    let mqFocusTrap = (0,_utils_media_utils__WEBPACK_IMPORTED_MODULE_1__.getMatchMedia)(this, focusTrap);
    if (mqFocusTrap) {
      (0,_utils_media_utils__WEBPACK_IMPORTED_MODULE_1__.observeMediaQuery)(focusTrap, matches => {
        if (matches) {
          this.addEventListener("keydown", this.listener);
        } else {
          this.removeEventListener("keydown", this.listener);
        }
      }, document.window);
    } else {
      this.addEventListener("keydown", this.listener);
    }
    let mObserver = new MutationObserver(entries => {
      entries.forEach(entry => {
        if (entry.oldValue !== null) {
          entry.target.querySelector('[slot = "trigger"]')?.focus();
        }
      });
      this.getAllFocusableEl();
    });
    mObserver.observe(document, {
      attributeFilter: ["open"],
      attributeOldValue: true,
      subtree: true
    });
  }
  getAllFocusableEl() {
    this.focusableEls = (0,ally_js_src_query_focusable__WEBPACK_IMPORTED_MODULE_2__["default"])({
      context: this,
      includeContext: true,
      strategy: "quick"
    });
  }
  listener(e) {
    this.getAllFocusableEl();
    var firstFocusableEl = this.focusableEls[0];
    var lastFocusableEl = this.focusableEls[this.focusableEls.length - 1];
    this.focusTrap(e, firstFocusableEl, lastFocusableEl);
  }
  focusTrap(e, firstFocusableEl, lastFocusableEl) {
    if (e.key === "Tab") {
      /* shift + tab */
      if (e.shiftKey) {
        if (document.activeElement === firstFocusableEl) {
          lastFocusableEl.focus();
          e.preventDefault();
        }
      } /* tab */else {
        if (document.activeElement === lastFocusableEl) {
          firstFocusableEl.focus();
          e.preventDefault();
        }
      }
    }
  }
}
DlwFocusTrap.define("dlw-focus-trap");

/***/ }),

/***/ "../src/Dlw.EpiBase.Web/node_modules/@delawarepro/web-components/src/dlw-intoview.js":
/*!*******************************************************************************************!*\
  !*** ../src/Dlw.EpiBase.Web/node_modules/@delawarepro/web-components/src/dlw-intoview.js ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DlwIntoview": function() { return /* binding */ DlwIntoview; }
/* harmony export */ });
/* harmony import */ var _base_dlw_webcomponent_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base/dlw-webcomponent-base */ "../src/Dlw.EpiBase.Web/node_modules/@delawarepro/web-components/src/base/dlw-webcomponent-base.js");

class DlwIntoview extends _base_dlw_webcomponent_base__WEBPACK_IMPORTED_MODULE_0__.DlwBaseWebComponent {
  constructor() {
    super(...arguments);
    // Get all the direct children for the Intoview
    this.intoviewItems = Array.from(this.children);
    // Get all options
    this.isChained = null;
    this.hasEffect = null;
    this.hasEffectReveal = null;
    this.delay = null;
    this.restart = null;
    this.threshold = this.getAttribute("threshold") ?? null;
    this.hasCustomChildren = null;
    this.hasIndex = null;
    this.indexedItems = null;
    // Observer
    this.observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: this.threshold ?? 0 // Percentage of visibility needed to execute function
    };

    this.defaultObserver = null;
    this.chainedObserver = null;
  }
  // TO DO:
  // ---------------------------------------------------------------------------------
  // - try to implement an "organic" delay, starting fast and getting slow at the end.
  //		eg: index + (index / 2) * delay / 3)
  // ---------------------------------------------------------------------------------
  //** Turn off ShadowDOM */
  createRenderRoot() {
    return this;
  }
  init() {
    this.defaultObserver = new IntersectionObserver(this.defaultObserveCallback.bind(this), this.observerOptions);
    this.chainedObserver = new IntersectionObserver(this.chainedObserveCallback(this.children), this.observerOptions);
    let mObserver = new MutationObserver(() => this.restartObserve());
    mObserver.observe(this, {
      attributeFilter: ["effect", "chained", "delay", "restart", "data-intoview-ignore", "threshold"],
      attributeOldValue: true,
      subtree: true
    });
    this.prepare();
  }
  prepare() {
    this.setAttributes();
    // Set default effect
    if (!this.hasEffect) this.setAttribute("effect", "default");
    this.indexedObserve();
    this.defaultObserve();
  }
  setAttributes() {
    // Get all options
    this.isChained = this.hasAttribute("chained") ?? null;
    this.hasEffect = this.hasAttribute("effect") ?? null;
    this.hasEffectReveal = this.getAttribute("effect") === "reveal" ?? null;
    this.restart = this.hasAttribute("restart") ?? null;
    this.delay = this.getAttribute("delay") || 200;
    this.targetId = this.getAttribute("target-id") || null;
    this.invert = this.hasAttribute("invert") ?? null;
    // Indexed Items
    this.hasCustomChildren = this.querySelectorAll("[data-intoview-child]");
    // Indexed Items
    this.hasIndex = this.querySelector("[data-intoview-index]") ? true : false;
    this.targetElement = this.targetId ? document.querySelector(`#${this.targetId}`) : null;
  }
  // Observe items when "data-intoview-index" attribute is not defined
  defaultObserve() {
    if (this.hasIndex) return;
    if (this.targetElement) {
      this.defaultObserver.observe(this.targetElement);
      this.firstElementChild.setAttribute("observe", "");
      return;
    }
    Array.from(this.hasCustomChildren.length > 0 ? this.hasCustomChildren : this.children).forEach(item => {
      if (item.dataset.intoviewIgnore !== undefined) return;
      item.setAttribute("observe", "");
      if (this.isChained || this.hasEffectReveal) {
        this.chainedObserver.observe(item);
      } else {
        this.defaultObserver.observe(item);
      }
    });
  }
  // Observe items with "data-intoview-index" attribute
  indexedObserve() {
    if (!this.hasIndex) return;
    // Indexed Items
    this.indexedItems = Array.from(this.querySelectorAll("[data-intoview-index]")).sort((a, b) => a.dataset.index - b.dataset.index);
    this.defaultObserver.observe(this);
    this.setAttribute("observe", "");
    this.indexedItems.forEach(item => {
      if (!item.dataset.intoviewEffect) item.dataset.intoviewEffect = "default";
    });
  }
  toggleIndexedItems(entry, index) {
    if (!this.hasIndex) return;
    this.indexedItems.map(item => {
      if (entry.isIntersecting) {
        this.indexedItems.map(item => {
          index = item.dataset.intoviewIndex;
          setTimeout(() => {
            item.dataset.intoviewShown = "";
          }, index * this.delay);
        });
      } else {
        if (!this.restart) return;
        delete item.dataset.intoviewShown;
      }
    });
  }
  toggleNoneIndexedItems(entry, index) {
    if (this.hasIndex) return;
    const elem = this.targetId ? this.firstElementChild : entry.target;
    if (entry.isIntersecting) {
      index++;
      // Show observed items that are in view
      setTimeout(() => {
        elem.toggleAttribute("shown", !this.invert);
      }, index * this.delay);
    } else {
      if (!this.restart) return;
      elem.toggleAttribute("shown", this.invert);
    }
  }
  defaultObserveCallback(entries, context) {
    entries.forEach(entry => {
      let index = -1; // this makes sure the first element it will be index = 0
      this.toggleIndexedItems(entry, index);
      this.toggleNoneIndexedItems(entry, index);
    });
  }
  chainedObserveCallback(targetSelector, chainedObserver) {
    let animatedItems = [];
    let chain = Promise.resolve();
    return entries => {
      entries.forEach(entry => {
        if (entry.target.dataset.intoviewIgnore !== undefined) return;
        if (entry.isIntersecting) {
          const elem = entry.target;
          if (!animatedItems.includes(elem)) {
            animatedItems.push(elem);
            chain = chain.then(() => this.show(elem));
          }
        }
        // This needs to be reviewed
        if (this.restart && !entry.isIntersecting) {
          entry.target.removeAttribute("shown");
          animatedItems = [];
        }
      });
    };
  }
  show(elem) {
    return new Promise((res, rej) => {
      setTimeout(() => {
        elem.setAttribute("shown", "");
        res();
      }, this.delay);
    });
  }
  restartObserve() {
    Array.from(this.children).forEach(item => {
      item.removeAttribute("observe");
      item.removeAttribute("shown");
      this.defaultObserver.unobserve(item);
      this.chainedObserver.unobserve(item);
    });
    this.prepare();
  }
}
DlwIntoview.define("dlw-intoview");

/***/ }),

/***/ "../src/Dlw.EpiBase.Web/node_modules/@delawarepro/web-components/src/dlw-lightgallery.js":
/*!***********************************************************************************************!*\
  !*** ../src/Dlw.EpiBase.Web/node_modules/@delawarepro/web-components/src/dlw-lightgallery.js ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DlwLightGallery": function() { return /* binding */ DlwLightGallery; }
/* harmony export */ });
/* harmony import */ var _base_dlw_webcomponent_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base/dlw-webcomponent-base */ "../src/Dlw.EpiBase.Web/node_modules/@delawarepro/web-components/src/base/dlw-webcomponent-base.js");

class DlwLightGallery extends _base_dlw_webcomponent_base__WEBPACK_IMPORTED_MODULE_0__.DlwBaseWebComponent {
  constructor() {
    super(...arguments);
    this.key = "14ec5f4a-5aa6-4aa5-b1f2-149cf9824030";
  }
  //** Turn off ShadowDOM */
  createRenderRoot() {
    return this;
  }
  init() {
    let mObserver = new MutationObserver(() => {
      this.buildLightGallery();
    });
    mObserver.observe(this, {
      attributeFilter: ["zoom", "medium-zoom", "video", "thumbnail", "custom-class", "params", "vimeo-player-params", "youtube-player-params"],
      attributeOldValue: true,
      subtree: true
    });
    this.setChildAttribute();
    this.buildLightGallery();
  }
  setChildAttribute() {
    this.querySelectorAll("[dlw-lightgallery-child]").forEach(element => {
      if (element.hasAttribute("disabled")) {
        element.setAttribute("tabindex", "-1");
      }
      if (element.tagName !== "A" && element.tagName !== "BUTTON") {
        element.setAttribute("role", "button");
        element.setAttribute("tabindex", "0");
      }
      element.setAttribute("aria-haspopup", "true");
    });
  }
  async buildLightGallery() {
    this.plugins = new Array();
    this.attrs = {
      lgZoom: super.getAttributeValue("zoom"),
      lgMediumZoom: super.getAttributeValue("medium-zoom"),
      lgVideo: super.getAttributeValue("video"),
      lgThumbnail: super.getAttributeValue("thumbnail"),
      customClass: super.getAttributeValue("custom-class"),
      params: super.getAttributeValue("params"),
      vimeoPlayerParams: super.getAttributeValue("vimeo-player-params"),
      vimeoPlayerParams: super.getAttributeValue("youtube-player-params")
    };
    this.defaultSettings = {
      licenseKey: this.key,
      plugins: this.plugins,
      selector: this.querySelectorAll("[dlw-lightgallery-child]:not([disabled])"),
      download: false,
      hideScrollbar: true
    };
    //Import individual modules
    if (this.attrs.lgThumbnail && !this.lgThumbnail) {
      Promise.all([__webpack_require__.e(/*! import() | thumbnail */ "thumbnail").then(__webpack_require__.bind(__webpack_require__, /*! lightgallery/plugins/thumbnail */ "../src/Dlw.EpiBase.Web/node_modules/lightgallery/plugins/thumbnail/lg-thumbnail.es5.js")), __webpack_require__.e(/*! import() */ "src_Dlw_EpiBase_Web_node_modules_lightgallery_css_lg-thumbnail_css").then(__webpack_require__.bind(__webpack_require__, /*! lightgallery/css/lg-thumbnail.css */ "../src/Dlw.EpiBase.Web/node_modules/lightgallery/css/lg-thumbnail.css"))]).then(_ref => {
        let [lgThumbnail] = _ref;
        this.plugins.push(lgThumbnail.default);
        this.defaultSettings = {
          ...this.defaultSettings,
          thumbnail: true
        };
      });
    }
    if (this.attrs.lgZoom && !this.lgZoom) {
      Promise.all([__webpack_require__.e(/*! import() | zoom */ "zoom").then(__webpack_require__.bind(__webpack_require__, /*! lightgallery/plugins/zoom */ "../src/Dlw.EpiBase.Web/node_modules/lightgallery/plugins/zoom/lg-zoom.es5.js")), __webpack_require__.e(/*! import() */ "src_Dlw_EpiBase_Web_node_modules_lightgallery_css_lg-zoom_css").then(__webpack_require__.bind(__webpack_require__, /*! lightgallery/css/lg-zoom.css */ "../src/Dlw.EpiBase.Web/node_modules/lightgallery/css/lg-zoom.css"))]).then(_ref2 => {
        let [lgZoom] = _ref2;
        this.plugins.push(lgZoom.default);
        this.defaultSettings = {
          ...this.defaultSettings,
          zoom: true
        };
      });
    }
    if (this.attrs.lgVideo && !this.lgVideo) {
      // ToDo js issues with loading player but it works
      Promise.all([__webpack_require__.e(/*! import() | VimeoPlayer */ "VimeoPlayer").then(__webpack_require__.bind(__webpack_require__, /*! @vimeo/player */ "../src/Dlw.EpiBase.Web/node_modules/@vimeo/player/dist/player.es.js")), __webpack_require__.e(/*! import() | video */ "video").then(__webpack_require__.bind(__webpack_require__, /*! lightgallery/plugins/video */ "../src/Dlw.EpiBase.Web/node_modules/lightgallery/plugins/video/lg-video.es5.js")), __webpack_require__.e(/*! import() */ "src_Dlw_EpiBase_Web_node_modules_lightgallery_css_lg-video_css").then(__webpack_require__.bind(__webpack_require__, /*! lightgallery/css/lg-video.css */ "../src/Dlw.EpiBase.Web/node_modules/lightgallery/css/lg-video.css"))]).then(_ref3 => {
        let [Player, lgVideo] = _ref3;
        this.plugins.push(lgVideo.default);
        this.defaultSettings = {
          ...this.defaultSettings,
          videojs: true,
          vimeoPlayerParams: this.attrs.vimeoPlayerParams ? JSON.parse(this.attrs.vimeoPlayerParams) : {},
          youTubePlayerParams: this.attrs.youTubePlayerParams ? JSON.parse(this.attrs.vimeoPlayerParams) : {}
        };
      });
      if (this.attrs.lgThumbnail) {
        this.vimeoThumbnail = await __webpack_require__.e(/*! import() | vimeoThumbnail */ "vimeoThumbnail").then(__webpack_require__.bind(__webpack_require__, /*! lightgallery/plugins/vimeoThumbnail */ "../src/Dlw.EpiBase.Web/node_modules/lightgallery/plugins/vimeoThumbnail/lg-vimeo-thumbnail.es5.js"));
        this.plugins.push(this.vimeoThumbnail.default);
      }
    }
    if (this.attrs.lgMediumZoom && !this.lgMediumZoom) {
      Promise.all([__webpack_require__.e(/*! import() | mediumZoom */ "mediumZoom").then(__webpack_require__.bind(__webpack_require__, /*! lightgallery/plugins/mediumZoom */ "../src/Dlw.EpiBase.Web/node_modules/lightgallery/plugins/mediumZoom/lg-medium-zoom.es5.js")), __webpack_require__.e(/*! import() */ "src_Dlw_EpiBase_Web_node_modules_lightgallery_css_lg-medium-zoom_css").then(__webpack_require__.bind(__webpack_require__, /*! lightgallery/css/lg-medium-zoom.css */ "../src/Dlw.EpiBase.Web/node_modules/lightgallery/css/lg-medium-zoom.css"))]).then(_ref4 => {
        let [lgMediumZoom] = _ref4;
        this.plugins.push(lgMediumZoom.default);
      });
    }
    if (typeof this.attrs.params == "string") {
      var params = JSON.parse(this.attrs.params);
      this.defaultSettings = {
        ...this.defaultSettings,
        ...(this.attrs.params ? params : {})
      };
    }
    if (this.attrs.customClass) {
      this.defaultSettings = {
        ...this.defaultSettings,
        addClass: this.attrs.customClass ? this.attrs.customClass : ""
      };
    }
    if (this.lightgalleryInstance) {
      this.lightgalleryInstance.destroy();
    }
    //Dynamically import Lightgallery
    Promise.all([__webpack_require__.e(/*! import() | lightgallery */ "lightgallery").then(__webpack_require__.bind(__webpack_require__, /*! lightgallery */ "../src/Dlw.EpiBase.Web/node_modules/lightgallery/lightgallery.es5.js")), Promise.all(/*! import() */[__webpack_require__.e("vendors-src_Dlw_EpiBase_Web_node_modules_lightgallery_css_lightgallery_css"), __webpack_require__.e("src_Dlw_EpiBase_Web_node_modules_lightgallery_css_lightgallery_css")]).then(__webpack_require__.bind(__webpack_require__, /*! lightgallery/css/lightgallery.css */ "../src/Dlw.EpiBase.Web/node_modules/lightgallery/css/lightgallery.css"))]).then(_ref5 => {
      let [LightGallery] = _ref5;
      this.lightgalleryInstance = new LightGallery.default(this, this.defaultSettings);
    });
  }
}
DlwLightGallery.define("dlw-lightgallery");

/***/ }),

/***/ "../src/Dlw.EpiBase.Web/node_modules/@delawarepro/web-components/src/dlw-reveal-utils.js":
/*!***********************************************************************************************!*\
  !*** ../src/Dlw.EpiBase.Web/node_modules/@delawarepro/web-components/src/dlw-reveal-utils.js ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DlwRevealUtils": function() { return /* binding */ DlwRevealUtils; },
/* harmony export */   "RevealUtilsForceState": function() { return /* binding */ RevealUtilsForceState; }
/* harmony export */ });
/* harmony import */ var _base_dlw_webcomponent_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base/dlw-webcomponent-base */ "../src/Dlw.EpiBase.Web/node_modules/@delawarepro/web-components/src/base/dlw-webcomponent-base.js");
/* harmony import */ var _utils_media_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/media-utils */ "../src/Dlw.EpiBase.Web/node_modules/@delawarepro/web-components/src/utils/media-utils.js");


// This is a heavily adapted version of details-utils by Zach Leat
// https://www.zachleat.com/web/details-utils/
// Todo
// - refactor use of handlers, quite verbose right now
// - better structure, make more readable
const attrs = {
  closeEsc: "close-esc",
  mouseEvents: "mouse-events",
  closeClickOutside: "close-click-outside",
  forceStateClose: "force-close",
  forceStateOpen: "force-open",
  forceStateRestore: "force-restore",
  toggleDocumentClass: "toggle-document-class",
  closeButton: "data-close-reveal",
  keepLastOpen: "mouse-events-keep-last"
};
class RevealUtilsForceState {
  constructor(element) {
    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    this.options = Object.assign({
      closeClickOutside: false,
      forceStateClose: false,
      forceStateOpen: false,
      closeEsc: false,
      mouseEvents: false,
      forceStateRestore: true
    }, options);
    this.reveal = element;
    this.trigger = element.querySelector(":scope > summary, :scope > [slot=trigger]");
    this.previousStates = {};
  }
  // warning: no error checking if the open/close media queries are configured wrong and overlap in weird ways
  init() {
    let openMatchMedia = (0,_utils_media_utils__WEBPACK_IMPORTED_MODULE_1__.getMatchMedia)(this.reveal, this.options.forceStateOpen);
    let closeMatchMedia = (0,_utils_media_utils__WEBPACK_IMPORTED_MODULE_1__.getMatchMedia)(this.reveal, this.options.forceStateClose);
    // When both force-close and force-open are valid, it toggles state
    if (openMatchMedia && openMatchMedia.matches && closeMatchMedia && closeMatchMedia.matches) {
      this.setState(!this.reveal.open);
    } else {
      if (openMatchMedia && openMatchMedia.matches) {
        this.setState(true);
      }
      if (closeMatchMedia && closeMatchMedia.matches) {
        this.setState(false);
      }
    }
    this.addListener(openMatchMedia, "for-open");
    this.addListener(closeMatchMedia, "for-close");
  }
  addListener(matchmedia, type) {
    if (!matchmedia || !("addListener" in matchmedia)) {
      return;
    }
    // Force stated based on force-open/force-close attribute value in a media query listener
    matchmedia.addListener(e => {
      if (e.matches) {
        this.previousStates[type] = this.reveal.open;
        if (this.reveal.open !== (type === "for-open")) {
          this.setState(type === "for-open");
        }
      } else {
        if (this.options.forceStateRestore && this.previousStates[type] !== undefined) {
          if (this.reveal.open !== this.previousStates[type]) {
            this.setState(this.previousStates[type]);
          }
        }
      }
    });
  }
  toggle() {
    let clickEvent = new MouseEvent("click", {
      view: window,
      bubbles: true,
      cancelable: true
    });
    this.trigger.dispatchEvent(clickEvent);
  }
  triggerClickToClose() {
    if (this.trigger) {
      setTimeout(() => {
        this.toggle();
      });
    }
  }
  setState(setOpen) {
    this.reveal.toggleAttribute("open", setOpen);
    if (this.options.toggleDocumentClass) {
      document.body.classList.toggle(this.options.toggleDocumentClass, setOpen);
    }
  }
}
class DlwRevealUtils extends _base_dlw_webcomponent_base__WEBPACK_IMPORTED_MODULE_0__.DlwBaseWebComponent {
  constructor() {
    super(...arguments);
    this.options = {};
    this.elements = [];
    this.closeOnEscHandlerCallback = undefined;
    this.mouseLeaveHandlerCallback = undefined;
    this.mouseEnterHandlerCallback = undefined;
    this.touchStartHandlerCallback = undefined;
    this.mouseUpHandlerCallback = undefined;
    this.touchendHandlerCallback = undefined;
    this.keyDownHandlerCallback = undefined;
    this.toggleHandlerCallback = undefined;
    this.closeRevealHandlerCallback = undefined;
    this.closeOnEscHandler = (e, elements) => {
      if (e.key === "Escape") {
        for (let element of elements) {
          if (element.open) {
            let fs = new RevealUtilsForceState(element, this.options);
            let mm = (0,_utils_media_utils__WEBPACK_IMPORTED_MODULE_1__.getMatchMedia)(element, this.options.closeEsc);
            // check nested open reveals and dialogs and don't close the current if they're open
            if (document.querySelectorAll("dialog[open]").length > 0 || element.closest("dialog[open]") || element.querySelectorAll("dlw-reveal[open]").length > 0 || element.querySelectorAll("details[open]").length > 0) {
              return;
            }
            if (!mm || mm && mm.matches) {
              fs.toggle();
            }
          }
        }
      }
    };
    this.mouseLeaveHandler = (e, elements) => {
      if (this.options.keepLastOpen) return;
      if (e.currentTarget.open) {
        let fs = new RevealUtilsForceState(e.currentTarget, this.options);
        let mm = (0,_utils_media_utils__WEBPACK_IMPORTED_MODULE_1__.getMatchMedia)(e.currentTarget, this.options.mouseEvents);
        if (!mm || mm && mm.matches) {
          fs.toggle();
        }
      }
    };
    this.mouseEnterHandler = (e, elements) => {
      if (!e.currentTarget.open) {
        if (this.options.keepLastOpen) {
          Array.from(elements).forEach(el => {
            el.open = false;
          });
        }
        let fs = new RevealUtilsForceState(e.currentTarget, this.options);
        let mm = (0,_utils_media_utils__WEBPACK_IMPORTED_MODULE_1__.getMatchMedia)(e.currentTarget, this.options.mouseEvents);
        if (!mm || mm && mm.matches) {
          fs.toggle();
        }
      }
    };
    this.touchStartHandler = (e, elements) => {
      if (!e.currentTarget.open) {
        let fs = new RevealUtilsForceState(e.currentTarget, this.options);
        let mm = (0,_utils_media_utils__WEBPACK_IMPORTED_MODULE_1__.getMatchMedia)(e.currentTarget, this.options.mouseEvents);
        if (!mm || mm && mm.matches) {
          e.preventDefault();
          fs.toggle();
        }
      }
    };
    this.mouseUpHandler = (e, elements) => {
      for (let element of elements) {
        this.onClickoutToClose(element, e);
      }
    };
    this.touchendHandler = (e, elements) => {
      for (let element of elements) {
        this.onClickoutToClose(element, e);
      }
    };
    this.keyDownHandler = (e, elements) => {
      if (e.key === "Enter" || e.code === "Space") {
        // enter, space
        for (let element of elements) {
          this.onClickoutToClose(element, e);
        }
      }
    };
  }
  functionCallOptions() {
    this.options = {
      closeClickOutside: this.getAttributeValue(attrs.closeClickOutside),
      closeEsc: this.getAttributeValue(attrs.closeEsc),
      mouseEvents: this.getAttributeValue(attrs.mouseEvents),
      forceStateClose: this.getAttributeValue(attrs.forceStateClose),
      forceStateOpen: this.getAttributeValue(attrs.forceStateOpen),
      forceStateRestore: this.getAttributeValue(attrs.forceStateRestore),
      toggleDocumentClass: this.getAttributeValue(attrs.toggleDocumentClass),
      closeButton: attrs.closeButton,
      keepLastOpen: this.getAttributeValue(attrs.keepLastOpen)
    };
  }
  //** Turn off ShadowDOM */
  createRenderRoot() {
    return this;
  }
  init() {
    if (!this.children.length) {
      return;
    }
    this.functionCallOptions();
    this.elements = Array.from(this.querySelectorAll(`:scope details, :scope dlw-reveal`)).filter(element => {
      return element.closest("dlw-reveal-utils") == this;
    });
    for (let element of this.elements) {
      // override initial state based on viewport (if needed)
      let fs = new RevealUtilsForceState(element, this.options);
      fs.init();
    }
    this.bindCloseOnEsc(this.elements);
    this.bindMouse(this.elements);
    this.bindClickoutToClose(this.elements);
    this.bindToggleDocumentClass(this.elements);
    this.bindCloseReveal(this.elements);
  }
  getAttributeValue(attribute) {
    if (this.hasAttribute(attribute)) {
      return this.getAttribute(attribute) != "" ? this.getAttribute(attribute) : true;
    }
    return false;
  }
  toggleHandler(e, element) {
    let openElements = [];
    if (element.open) {
      openElements = [element];
    } else {
      openElements = [];
    }
    document.body.classList.toggle(this.options.toggleDocumentClass, openElements.length > 0);
  }
  closeRevealHandler(event, elements) {
    let closeButton = event.target.closest(`[${attrs.closeButton}]`);
    elements.forEach(element => {
      if (!element.open) return;
      let fs = new RevealUtilsForceState(element, this.options);
      if (closeButton?.closest("dlw-reveal, details") === element) {
        fs.triggerClickToClose();
      }
    });
  }
  bindCloseOnEsc(elements) {
    if (!this.options.closeEsc) return;
    this.addCloseOnEscEvent(elements);
  }
  bindMouse(elements) {
    if (!this.options.mouseEvents) return;
    this.mouseLeaveHandlerCallback = e => this.mouseLeaveHandler(e, elements);
    this.mouseEnterHandlerCallback = e => this.mouseEnterHandler(e, elements);
    this.touchStartHandlerCallback = e => this.touchStartHandler(e, elements);
    elements.forEach(element => {
      this.addMouseEvents(element);
    });
  }
  bindClickoutToClose(elements) {
    if (!this.options.closeClickOutside) return;
    this.addClickoutToCloseEvent(elements);
  }
  bindToggleDocumentClass(elements) {
    if (!this.options.toggleDocumentClass) return;
    this.addToggleDocumentClassEvent(elements);
  }
  bindCloseReveal(elements) {
    this.closeRevealHandlerCallback = e => this.closeRevealHandler(e, elements);
    this.addEventListener("click", this.closeRevealHandlerCallback, false);
  }
  addCloseOnEscEvent(elements) {
    this.closeOnEscHandlerCallback = e => this.closeOnEscHandler(e, elements);
    document.documentElement.addEventListener("keydown", this.closeOnEscHandlerCallback, false);
  }
  removeCloseOnEscEvent() {
    document.documentElement.removeEventListener("keydown", this.closeOnEscHandlerCallback);
  }
  addMouseEvents(element) {
    element.addEventListener("mouseleave", this.mouseLeaveHandlerCallback, false);
    element.addEventListener("mouseenter", this.mouseEnterHandlerCallback, false);
    element.addEventListener("touchstart", this.touchStartHandlerCallback, false);
  }
  removeMouseEvent(element) {
    element.removeEventListener("mouseleave", this.mouseLeaveHandlerCallback);
    element.removeEventListener("mouseenter", this.mouseEnterHandlerCallback);
    element.removeEventListener("touchstart", this.touchStartHandlerCallback);
  }
  addClickoutToCloseEvent(elements) {
    this.mouseUpHandlerCallback = e => this.mouseUpHandler(e, elements);
    this.touchendHandlerCallback = e => this.touchendHandler(e, elements);
    this.keyDownHandlerCallback = e => this.keyDownHandler(e, elements);
    document.documentElement.addEventListener("mouseup", this.mouseUpHandlerCallback, false);
    document.documentElement.addEventListener("touchend", this.touchendHandlerCallback, false);
    this.addEventListener("keydown", this.keyDownHandlerCallback, false);
  }
  removeClickoutToCloseEvent() {
    document.documentElement.removeEventListener("mouseup", this.mouseUpHandlerCallback);
    document.documentElement.removeEventListener("touchend", this.touchendHandlerCallback);
    this.removeEventListener("keydown", this.keyDownHandlerCallback);
  }
  addToggleDocumentClassEvent(elements) {
    this.toggleHandlerCallback = [];
    elements.forEach(element => {
      const callback = e => this.toggleHandler(e, element);
      this.toggleHandlerCallback.push(callback);
      element.addEventListener("toggle", callback);
    });
  }
  removeToggleDocumentClassEvent(elements) {
    elements.forEach((element, index) => {
      element.removeEventListener("toggle", this.toggleHandlerCallback[index]);
    });
  }
  isChildOfParent(target, parent) {
    while (target && target.parentNode) {
      if (target.parentNode === parent) {
        return true;
      }
      target = target.parentNode;
    }
    return false;
  }
  onClickoutToClose(element, event) {
    let fs = new RevealUtilsForceState(element, this.options);
    let mm = (0,_utils_media_utils__WEBPACK_IMPORTED_MODULE_1__.getMatchMedia)(element, this.options.closeClickOutside);
    if (mm && !mm.matches) {
      // don’t close if has a media query but it doesn’t match current viewport size
      // useful for viewport navigation that must stay open (e.g. list of horizontal links)
      return;
    }
    if (!this.isChildOfParent(event.target, element) && element.open) {
      fs.triggerClickToClose(element);
    }
  }
  attributeChangedCallback(name, oldValue, newValue) {
    if (name === attrs.closeEsc) {
      newValue === "" ? this.addCloseOnEscEvent(this.elements) : this.removeCloseOnEscEvent();
    } else if (name === attrs.mouseEvents) {
      if (newValue === "") {
        this.functionCallOptions();
        this.bindMouse(this.elements);
      } else if (newValue === null) {
        this.elements.forEach(element => {
          this.functionCallOptions();
          this.removeMouseEvent(element);
        });
      }
    } else if (name === attrs.closeClickOutside) {
      if (newValue === "") {
        this.functionCallOptions();
        this.addClickoutToCloseEvent(this.elements);
      } else if (newValue === null) {
        this.functionCallOptions();
        this.removeClickoutToCloseEvent();
      }
    } else if (name === attrs.toggleDocumentClass) {
      newValue !== null ? this.addToggleDocumentClassEvent(this.elements) : this.removeToggleDocumentClassEvent(this.elements);
    }
  }
  static get observedAttributes() {
    return [attrs.closeEsc, attrs.mouseEvents, attrs.mouseEventsKeepLast, attrs.closeClickOutside, attrs.toggleDocumentClass];
  }
}
DlwRevealUtils.define("dlw-reveal-utils");

/***/ }),

/***/ "../src/Dlw.EpiBase.Web/node_modules/@delawarepro/web-components/src/dlw-reveal.js":
/*!*****************************************************************************************!*\
  !*** ../src/Dlw.EpiBase.Web/node_modules/@delawarepro/web-components/src/dlw-reveal.js ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DlwReveal": function() { return /* binding */ DlwReveal; }
/* harmony export */ });
/* harmony import */ var _base_dlw_webcomponent_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base/dlw-webcomponent-base */ "../src/Dlw.EpiBase.Web/node_modules/@delawarepro/web-components/src/base/dlw-webcomponent-base.js");
/* harmony import */ var _utils_id_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/id-utils */ "../src/Dlw.EpiBase.Web/node_modules/@delawarepro/web-components/src/utils/id-utils.js");
/// <dlw-reveal>
///     <button slot="trigger"></button>
///     <div slot="content"></div>
/// </dlw-reveal>
/// Reveal is an alternative to details/summary. It behaves exactly the same.
/// Detail/summary is not always a good fit, for accessibility reaons.
/// It toggles an aria-expanded on the trigger
/// The trigger itself links to the content with aria-controls via a unique id.
/// Just like details/summary, it bubbles a "toggle" event and toggles the open attribute.
/// Based on accessibility recommendations
/// https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/examples/disclosure-navigation/


const attrs = {
  open: "open"
};
class DlwReveal extends _base_dlw_webcomponent_base__WEBPACK_IMPORTED_MODULE_0__.DlwBaseWebComponent {
  constructor() {
    super();
  }
  init() {
    // Find the first child in the slot[name=trigger]
    let triggerSlot = this.renderRoot.querySelector("slot[name=trigger]");
    if (!triggerSlot) {
      console.log("No element was found for slot=trigger. Reveal cannot be set up.");
      return;
    }
    let triggerElements = triggerSlot.assignedElements();
    if (!triggerElements || !triggerElements[0]) return;
    this.trigger = triggerElements[0];
    // Add unique id to aria-controls attribute
    let id = (0,_utils_id_utils__WEBPACK_IMPORTED_MODULE_1__.GetUniqueId)();
    this.trigger?.setAttribute("aria-controls", "content-" + id);
    this.trigger?.setAttribute("aria-expanded", this.open);
    // Find the content panel in the slot[name=content]
    let contentSlot = this.renderRoot.querySelector("slot[name=content]");
    if (!contentSlot) {
      console.log("No element was found for slot=content. Trigger cannot be linked to content.");
      return;
    }
    let contentElements = contentSlot.assignedElements();
    if (!contentElements || !contentElements[0]) return;
    let content = contentElements[0];
    // Bind the id to this element
    content.id = "content-" + id;
    // Bind click event to the trigger
    this.trigger.addEventListener("click", e => this.toggle(e));
  }
  disconnectedCallback() {
    if (this.trigger) {
      this.trigger?.removeEventListener("click", e => this.toggle(e));
    }
  }
  attributeChangedCallback(name, oldValue, newValue) {
    if (name === attrs.open) {
      this.trigger?.setAttribute("aria-expanded", newValue !== null);
    }
  }
  render() {
    return `
            <style>
                :host ::slotted([slot=content]) {
                    display: none;
                }

                :host([open]) ::slotted([slot=content]) {
                    display: block;
                }
            </style>

            <slot name="trigger"></slot>
            <slot name="content"></slot>
        `;
  }
  toggle() {
    this.open = !this.open;
    // Dispatch event when clicking
    this.dispatchEvent(new CustomEvent("toggle", {
      bubbles: true,
      detail: {
        state: this.open
      }
    }));
  }
  get open() {
    return this.hasAttribute(attrs.open);
  }
  static get observedAttributes() {
    return [attrs.open];
  }
  set open(isOpen) {
    this.toggleAttribute(attrs.open, isOpen);
    this.trigger?.setAttribute("aria-expanded", isOpen.toString().toLowerCase());
  }
}
DlwReveal.define("dlw-reveal");

/***/ }),

/***/ "../src/Dlw.EpiBase.Web/node_modules/@delawarepro/web-components/src/utils/global-styles.js":
/*!**************************************************************************************************!*\
  !*** ../src/Dlw.EpiBase.Web/node_modules/@delawarepro/web-components/src/utils/global-styles.js ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addGlobalStylesToShadowRoot": function() { return /* binding */ addGlobalStylesToShadowRoot; },
/* harmony export */   "getGlobalStyleSheets": function() { return /* binding */ getGlobalStyleSheets; }
/* harmony export */ });
// Inspired by https://eisenbergeffect.medium.com/using-global-styles-in-shadow-dom-5b80e802e89d
// TODO: What with dynamically added stylesheets?
let globalSheets = null;
/**
 * Get all document's stylesheets on the same domain
 * @returns list of stylesheets
 */
function getGlobalStyleSheets() {
  if (globalSheets === null) {
    globalSheets = Array.from(document.styleSheets).map(x => {
      if (isSheetAccessible(x)) {
        const sheet = new CSSStyleSheet();
        const css = Array.from(x.cssRules).map(rule => rule.cssText).join(" ");
        sheet.replaceSync(css);
        return sheet;
      }
    }).filter(x => x != null);
  }
  return globalSheets;
}
/**
 * Is the stylesheet accessible. If not, return false.
 * Eg. If the sheet is not accessible, it cannot be used for adoptedStyleSheets
 * @param {CSSStyleSheet} sheet
 * @returns
 */
function isSheetAccessible(sheet) {
  return sheet.href && !sheet.href.startsWith(location.origin) ? false : true;
}
/**
 * Add the document's stylesheets to the adoptedStyleSheets for the shadowDOM
 * @param {ShadowRoot} shadowRoot */
function addGlobalStylesToShadowRoot(shadowRoot) {
  shadowRoot.adoptedStyleSheets.push(...getGlobalStyleSheets());
}

/***/ }),

/***/ "../src/Dlw.EpiBase.Web/node_modules/@delawarepro/web-components/src/utils/id-utils.js":
/*!*********************************************************************************************!*\
  !*** ../src/Dlw.EpiBase.Web/node_modules/@delawarepro/web-components/src/utils/id-utils.js ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetUniqueId": function() { return /* binding */ GetUniqueId; }
/* harmony export */ });
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nanoid */ "../src/Dlw.EpiBase.Web/node_modules/nanoid/index.browser.js");

const GetUniqueId = () => {
  // prefix is because nanoid can start with a number that is not allowed on id attribute
  return `dlw-${(0,nanoid__WEBPACK_IMPORTED_MODULE_0__.nanoid)(10)}-${Date.now()}-${Math.floor(Math.random() * 100)}`;
};

/***/ }),

/***/ "../src/Dlw.EpiBase.Web/node_modules/@delawarepro/web-components/src/utils/media-utils.js":
/*!************************************************************************************************!*\
  !*** ../src/Dlw.EpiBase.Web/node_modules/@delawarepro/web-components/src/utils/media-utils.js ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getMatchMedia": function() { return /* binding */ getMatchMedia; },
/* harmony export */   "observeMediaQuery": function() { return /* binding */ observeMediaQuery; }
/* harmony export */ });
/**
 *
 * @param {string} cssProperty
 * @param {Function} callback
 * @param {HTMLElement} mqScope
 */
function observeMediaQuery(cssProperty, callback, mqScope) {
  let scope = mqScope ?? document.documentElement;
  let mq = getComputedStyle(scope).getPropertyValue(cssProperty);
  let matchMedia = window.matchMedia(mq == "" ? cssProperty : mq);
  callback(matchMedia.matches);
  // Listen for changes
  if (typeof matchMedia.addEventListener !== "undefined") {
    matchMedia.addEventListener("change", () => callback(matchMedia.matches));
  }
  // Legacy browser fallback
  else {
    matchMedia.addListener(() => callback(matchMedia.matches));
  }
}
function getMatchMedia(element, attributeValue) {
  if (!element) return null;
  // If value is true, just return a matching matchMedia answer
  if (attributeValue && attributeValue === true) {
    return {
      matches: true
    };
  }
  // If value is a CSS Custom Property, then match against its value in CSS
  if (attributeValue && attributeValue.startsWith("--")) {
    let mq = window.getComputedStyle(element).getPropertyValue(attributeValue);
    return window.matchMedia(mq);
  }
  // Else we assume the value is an actual media query
  if (attributeValue && "matchMedia" in window) {
    return window.matchMedia(attributeValue);
  }
}

/***/ }),

/***/ "../src/Dlw.EpiBase.Web/node_modules/@delawarepro/web-components/src/utils/string-utils.js":
/*!*************************************************************************************************!*\
  !*** ../src/Dlw.EpiBase.Web/node_modules/@delawarepro/web-components/src/utils/string-utils.js ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getIdFromAnchor": function() { return /* binding */ getIdFromAnchor; },
/* harmony export */   "kebabCaseToCamelCase": function() { return /* binding */ kebabCaseToCamelCase; },
/* harmony export */   "stringIsNullOrEmpty": function() { return /* binding */ stringIsNullOrEmpty; },
/* harmony export */   "stringToJson": function() { return /* binding */ stringToJson; }
/* harmony export */ });
function stringIsNullOrEmpty(text) {
  // '==' so it covers undefined as well!
  return text == null || text === "";
}
function getIdFromAnchor(hash) {
  const index = hash.indexOf("#");
  if (index > -1) {
    return hash.substr(index + 1);
  }
  return hash;
}
function kebabCaseToCamelCase(kebabAttributeName) {
  const camelCaseName = kebabAttributeName.replace(/(-[a-z])/, g => {
    return g.replace("-", "").toUpperCase();
  });
  return camelCaseName;
}
function stringToJson(text) {
  if (stringIsNullOrEmpty(text)) return;
  if (typeof text === "Object") return text;
  // when the object string exist only of single quote replace it by double quotes
  const regexp = new RegExp(/^(\{')/, "g");
  text = regexp.test(text) ? text.replace(/(')/g, '"') : text;
  try {
    return JSON.parse(text);
  } catch (error) {
    console.log(error);
  }
}

/***/ }),

/***/ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/element/focus.svg-foreign-object-hack.js":
/*!************************************************************************************************!*\
  !*** ../src/Dlw.EpiBase.Web/node_modules/ally.js/src/element/focus.svg-foreign-object-hack.js ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }
/* harmony export */ });
function makeFocusableForeignObject() {
  const fragment = document.createElement('div');
  fragment.innerHTML = `<svg><foreignObject width="30" height="30">
      <input type="text"/>
  </foreignObject></svg>`;
  return fragment.firstChild.firstChild;
}
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(element) {
  // Edge13, Edge14: foreignObject focus hack
  // https://jsbin.com/kunehinugi/edit?html,js,output
  // https://jsbin.com/fajagi/3/edit?html,js,output
  const isSvgElement = element.ownerSVGElement || element.nodeName.toLowerCase() === 'svg';
  if (!isSvgElement) {
    return false;
  }
  // inject and focus an <input> element into the SVG element to receive focus
  const foreignObject = makeFocusableForeignObject();
  element.appendChild(foreignObject);
  const input = foreignObject.querySelector('input');
  input.focus();
  // upon disabling the activeElement, IE and Edge
  // will not shift focus to <body> like all the other
  // browsers, but instead find the first focusable
  // ancestor and shift focus to that
  input.disabled = true;
  // clean up
  element.removeChild(foreignObject);
  return true;
}

/***/ }),

/***/ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/get/parents.js":
/*!**********************************************************************!*\
  !*** ../src/Dlw.EpiBase.Web/node_modules/ally.js/src/get/parents.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }
/* harmony export */ });
/* harmony import */ var _util_context_to_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/context-to-element */ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/util/context-to-element.js");

// [elem, elem.parent, elem.parent.parent, …, html]
// will not contain the shadowRoot (DOCUMENT_FRAGMENT_NODE) and shadowHost
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  let {
    context
  } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  const list = [];
  let element = (0,_util_context_to_element__WEBPACK_IMPORTED_MODULE_0__["default"])({
    label: 'get/parents',
    context
  });
  while (element) {
    list.push(element);
    // IE does know support parentElement on SVGElement
    element = element.parentNode;
    if (element && element.nodeType !== Node.ELEMENT_NODE) {
      element = null;
    }
  }
  return list;
}

/***/ }),

/***/ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/is/disabled.js":
/*!**********************************************************************!*\
  !*** ../src/Dlw.EpiBase.Web/node_modules/ally.js/src/is/disabled.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }
/* harmony export */ });
/* harmony import */ var _util_context_to_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/context-to-element */ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/util/context-to-element.js");
/* harmony import */ var _get_parents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../get/parents */ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/get/parents.js");
/* harmony import */ var _native_disabled_supported__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./native-disabled-supported */ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/is/native-disabled-supported.js");
/* harmony import */ var _supports_supports__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../supports/supports */ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/supports.js");
// Determine if an element is disabled (i.e. not editable)




let supports;
function isDisabledFieldset(element) {
  const nodeName = element.nodeName.toLowerCase();
  return nodeName === 'fieldset' && element.disabled;
}
function isDisabledForm(element) {
  const nodeName = element.nodeName.toLowerCase();
  return nodeName === 'form' && element.disabled;
}
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(context) {
  if (!supports) {
    supports = (0,_supports_supports__WEBPACK_IMPORTED_MODULE_3__["default"])();
  }
  const element = (0,_util_context_to_element__WEBPACK_IMPORTED_MODULE_0__["default"])({
    label: 'is/disabled',
    context
  });
  if (element.hasAttribute('data-ally-disabled')) {
    // treat ally's element/disabled like the DOM native element.disabled
    return true;
  }
  if (!(0,_native_disabled_supported__WEBPACK_IMPORTED_MODULE_2__["default"])(element)) {
    // non-form elements do not support the disabled attribute
    return false;
  }
  if (element.disabled) {
    // the element itself is disabled
    return true;
  }
  const parents = (0,_get_parents__WEBPACK_IMPORTED_MODULE_1__["default"])({
    context: element
  });
  if (parents.some(isDisabledFieldset)) {
    // a parental <fieldset> is disabld and inherits the state onto this element
    return true;
  }
  if (!supports.focusFormDisabled && parents.some(isDisabledForm)) {
    // a parental <form> is disabld and inherits the state onto this element
    return true;
  }
  return false;
}

/***/ }),

/***/ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/is/focus-relevant.js":
/*!****************************************************************************!*\
  !*** ../src/Dlw.EpiBase.Web/node_modules/ally.js/src/is/focus-relevant.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _get_parents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../get/parents */ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/get/parents.js");
/* harmony import */ var _util_context_to_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/context-to-element */ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/util/context-to-element.js");
/* harmony import */ var _util_element_matches__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/element-matches */ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/util/element-matches.js");
/* harmony import */ var _util_tabindex_value__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/tabindex-value */ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/util/tabindex-value.js");
/* harmony import */ var _valid_tabindex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./valid-tabindex */ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/is/valid-tabindex.js");
/* harmony import */ var _is_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./is.util */ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/is/is.util.js");
/* harmony import */ var _supports_supports__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../supports/supports */ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/supports.js");
// determine if an element supports.can be focused by script regardless
// of the element actually being focusable at the time of execution
// i.e. <input disabled> is conisdered focus-relevant, but not focusable







let supports;
function isFocusRelevantRules() {
  let {
    context,
    except = {
      flexbox: false,
      scrollable: false,
      shadow: false
    }
  } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  if (!supports) {
    supports = (0,_supports_supports__WEBPACK_IMPORTED_MODULE_6__["default"])();
  }
  const element = (0,_util_context_to_element__WEBPACK_IMPORTED_MODULE_1__["default"])({
    label: 'is/focus-relevant',
    resolveDocument: true,
    context
  });
  if (!except.shadow && element.shadowRoot) {
    // a ShadowDOM host receives focus when the focus moves to its content
    return true;
  }
  const nodeName = element.nodeName.toLowerCase();
  if (nodeName === 'input' && element.type === 'hidden') {
    // input[type="hidden"] supports.cannot be focused
    return false;
  }
  if (nodeName === 'input' || nodeName === 'select' || nodeName === 'button' || nodeName === 'textarea') {
    return true;
  }
  if (nodeName === 'legend' && supports.focusRedirectLegend) {
    // specifics filtered in is/focusable
    return true;
  }
  if (nodeName === 'label') {
    // specifics filtered in is/focusable
    return true;
  }
  if (nodeName === 'area') {
    // specifics filtered in is/focusable
    return true;
  }
  if (nodeName === 'a' && element.hasAttribute('href')) {
    return true;
  }
  if (nodeName === 'object' && element.hasAttribute('usemap')) {
    // object[usemap] is not focusable in any browser
    return false;
  }
  if (nodeName === 'object') {
    const svgType = element.getAttribute('type');
    if (!supports.focusObjectSvg && svgType === 'image/svg+xml') {
      // object[type="image/svg+xml"] is not focusable in Internet Explorer
      return false;
    } else if (!supports.focusObjectSwf && svgType === 'application/x-shockwave-flash') {
      // object[type="application/x-shockwave-flash"] is not focusable in Internet Explorer 9
      return false;
    }
  }
  if (nodeName === 'iframe' || nodeName === 'object') {
    // browsing context containers
    return true;
  }
  if (nodeName === 'embed' || nodeName === 'keygen') {
    // embed is considered focus-relevant but not focusable
    // see https://github.com/medialize/ally.js/issues/82
    return true;
  }
  if (element.hasAttribute('contenteditable')) {
    // also see CSS property user-modify below
    return true;
  }
  if (nodeName === 'audio' && (supports.focusAudioWithoutControls || element.hasAttribute('controls'))) {
    return true;
  }
  if (nodeName === 'video' && (supports.focusVideoWithoutControls || element.hasAttribute('controls'))) {
    return true;
  }
  if (supports.focusSummary && nodeName === 'summary') {
    return true;
  }
  const validTabindex = (0,_valid_tabindex__WEBPACK_IMPORTED_MODULE_4__["default"])(element);
  if (nodeName === 'img' && element.hasAttribute('usemap')) {
    // Gecko, Trident and Edge do not allow an image with an image map and tabindex to be focused,
    // it appears the tabindex is overruled so focus is still forwarded to the <map>
    return validTabindex && supports.focusImgUsemapTabindex || supports.focusRedirectImgUsemap;
  }
  if (supports.focusTable && (nodeName === 'table' || nodeName === 'td')) {
    // IE10-11 supports.can focus <table> and <td>
    return true;
  }
  if (supports.focusFieldset && nodeName === 'fieldset') {
    // IE10-11 supports.can focus <fieldset>
    return true;
  }
  const isSvgElement = nodeName === 'svg';
  const isSvgContent = element.ownerSVGElement;
  const focusableAttribute = element.getAttribute('focusable');
  const tabindex = (0,_util_tabindex_value__WEBPACK_IMPORTED_MODULE_3__["default"])(element);
  if (nodeName === 'use' && tabindex !== null && !supports.focusSvgUseTabindex) {
    // <use> cannot be made focusable by adding a tabindex attribute anywhere but Blink and WebKit
    return false;
  }
  if (nodeName === 'foreignobject') {
    // <use> can only be made focusable in Blink and WebKit
    return tabindex !== null && supports.focusSvgForeignobjectTabindex;
  }
  if ((0,_util_element_matches__WEBPACK_IMPORTED_MODULE_2__["default"])(element, 'svg a') && element.hasAttribute('xlink:href')) {
    return true;
  }
  if ((isSvgElement || isSvgContent) && element.focus && !supports.focusSvgNegativeTabindexAttribute && tabindex < 0) {
    // Firefox 51 and 52 treat any natively tabbable SVG element with
    // tabindex="-1" as tabbable and everything else as inert
    // see https://bugzilla.mozilla.org/show_bug.cgi?id=1302340
    return false;
  }
  if (isSvgElement) {
    return validTabindex || supports.focusSvg || supports.focusSvgInIframe
    // Internet Explorer understands the focusable attribute introduced in SVG Tiny 1.2
    || Boolean(supports.focusSvgFocusableAttribute && focusableAttribute && focusableAttribute === 'true');
  }
  if (isSvgContent) {
    if (supports.focusSvgTabindexAttribute && validTabindex) {
      return true;
    }
    if (supports.focusSvgFocusableAttribute) {
      // Internet Explorer understands the focusable attribute introduced in SVG Tiny 1.2
      return focusableAttribute === 'true';
    }
  }
  // https://www.w3.org/TR/html5/editing.html#sequential-focus-navigation-and-the-tabindex-attribute
  if (validTabindex) {
    return true;
  }
  const style = window.getComputedStyle(element, null);
  if ((0,_is_util__WEBPACK_IMPORTED_MODULE_5__.isUserModifyWritable)(style)) {
    return true;
  }
  if (supports.focusImgIsmap && nodeName === 'img' && element.hasAttribute('ismap')) {
    // IE10-11 considers the <img> in <a href><img ismap> focusable
    // https://github.com/medialize/ally.js/issues/20
    const hasLinkParent = (0,_get_parents__WEBPACK_IMPORTED_MODULE_0__["default"])({
      context: element
    }).some(parent => parent.nodeName.toLowerCase() === 'a' && parent.hasAttribute('href'));
    if (hasLinkParent) {
      return true;
    }
  }
  // https://github.com/medialize/ally.js/issues/21
  if (!except.scrollable && supports.focusScrollContainer) {
    if (supports.focusScrollContainerWithoutOverflow) {
      // Internet Explorer does will consider the scrollable area focusable
      // if the element is a <div> or a <span> and it is in fact scrollable,
      // regardless of the CSS overflow property
      if ((0,_is_util__WEBPACK_IMPORTED_MODULE_5__.isScrollableContainer)(element, nodeName)) {
        return true;
      }
    } else if ((0,_is_util__WEBPACK_IMPORTED_MODULE_5__.hasCssOverflowScroll)(style)) {
      // Firefox requires proper overflow setting, IE does not necessarily
      // https://developer.mozilla.org/en-US/docs/Web/CSS/overflow
      return true;
    }
  }
  if (!except.flexbox && supports.focusFlexboxContainer && (0,_is_util__WEBPACK_IMPORTED_MODULE_5__.hasCssDisplayFlex)(style)) {
    // elements with display:flex are focusable in IE10-11
    return true;
  }
  const parent = element.parentElement;
  if (!except.scrollable && parent) {
    const parentNodeName = parent.nodeName.toLowerCase();
    const parentStyle = window.getComputedStyle(parent, null);
    if (supports.focusScrollBody && (0,_is_util__WEBPACK_IMPORTED_MODULE_5__.isScrollableContainer)(parent, nodeName, parentNodeName, parentStyle)) {
      // scrollable bodies are focusable Internet Explorer
      // https://github.com/medialize/ally.js/issues/21
      return true;
    }
    // Children of focusable elements with display:flex are focusable in IE10-11
    if (supports.focusChildrenOfFocusableFlexbox) {
      if ((0,_is_util__WEBPACK_IMPORTED_MODULE_5__.hasCssDisplayFlex)(parentStyle)) {
        return true;
      }
    }
  }
  // NOTE: elements marked as inert are not focusable,
  // but that property is not exposed to the DOM
  // https://www.w3.org/TR/html5/editing.html#inert
  return false;
}
// bind exceptions to an iterator callback
isFocusRelevantRules.except = function () {
  let except = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  const isFocusRelevant = function (context) {
    return isFocusRelevantRules({
      context,
      except
    });
  };
  isFocusRelevant.rules = isFocusRelevantRules;
  return isFocusRelevant;
};
// provide isFocusRelevant(context) as default iterator callback
const isFocusRelevant = isFocusRelevantRules.except({});
/* harmony default export */ __webpack_exports__["default"] = (isFocusRelevant);

/***/ }),

/***/ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/is/focusable.js":
/*!***********************************************************************!*\
  !*** ../src/Dlw.EpiBase.Web/node_modules/ally.js/src/is/focusable.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _focus_relevant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./focus-relevant */ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/is/focus-relevant.js");
/* harmony import */ var _valid_area__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./valid-area */ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/is/valid-area.js");
/* harmony import */ var _visible__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./visible */ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/is/visible.js");
/* harmony import */ var _disabled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./disabled */ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/is/disabled.js");
/* harmony import */ var _only_tabbable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./only-tabbable */ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/is/only-tabbable.js");
/* harmony import */ var _util_context_to_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/context-to-element */ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/util/context-to-element.js");
/* harmony import */ var _util_get_frame_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/get-frame-element */ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/util/get-frame-element.js");
/* harmony import */ var _util_tabindex_value__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../util/tabindex-value */ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/util/tabindex-value.js");
/* harmony import */ var _supports_supports__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../supports/supports */ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/supports.js");
// determine if an element can be focused
// https://www.w3.org/TR/html5/editing.html#focus-management
// NOTE: The following known issues exist:
//   Gecko: `svg a[xlink|href]` is not identified as focusable (because SVGElement.prototype.focus is missing)
//   Blink, WebKit: SVGElements that have been made focusable by adding a focus event listener are not identified as focusable









let supports;
function isOnlyFocusRelevant(element) {
  const nodeName = element.nodeName.toLowerCase();
  if (nodeName === 'embed' || nodeName === 'keygen') {
    // embed is considered focus-relevant but not focusable
    // see https://github.com/medialize/ally.js/issues/82
    return true;
  }
  const _tabindex = (0,_util_tabindex_value__WEBPACK_IMPORTED_MODULE_7__["default"])(element);
  if (element.shadowRoot && _tabindex === null) {
    // ShadowDOM host elements *may* receive focus
    // even though they are not considered focuable
    return true;
  }
  if (nodeName === 'label') {
    // <label tabindex="0"> is only tabbable in Firefox, not script-focusable
    // there's no way to make an element focusable other than by adding a tabindex,
    // and focus behavior of the label element seems hard-wired to ignore tabindex
    // in some browsers (like Gecko, Blink and WebKit)
    return !supports.focusLabelTabindex || _tabindex === null;
  }
  if (nodeName === 'legend') {
    return _tabindex === null;
  }
  if (supports.focusSvgFocusableAttribute && (element.ownerSVGElement || nodeName === 'svg')) {
    // Internet Explorer understands the focusable attribute introduced in SVG Tiny 1.2
    const focusableAttribute = element.getAttribute('focusable');
    return focusableAttribute && focusableAttribute === 'false';
  }
  if (nodeName === 'img' && element.hasAttribute('usemap')) {
    // Gecko, Trident and Edge do not allow an image with an image map and tabindex to be focused,
    // it appears the tabindex is overruled so focus is still forwarded to the <map>
    return _tabindex === null || !supports.focusImgUsemapTabindex;
  }
  if (nodeName === 'area') {
    // all <area>s are considered relevant,
    // but only the valid <area>s are focusable
    return !(0,_valid_area__WEBPACK_IMPORTED_MODULE_1__["default"])(element);
  }
  return false;
}
function isFocusableRules() {
  let {
    context,
    except = {
      disabled: false,
      visible: false,
      onlyTabbable: false
    }
  } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  if (!supports) {
    supports = (0,_supports_supports__WEBPACK_IMPORTED_MODULE_8__["default"])();
  }
  const _isOnlyTabbable = _only_tabbable__WEBPACK_IMPORTED_MODULE_4__["default"].rules.except({
    onlyFocusableBrowsingContext: true,
    visible: except.visible
  });
  const element = (0,_util_context_to_element__WEBPACK_IMPORTED_MODULE_5__["default"])({
    label: 'is/focusable',
    resolveDocument: true,
    context
  });
  const focusRelevant = _focus_relevant__WEBPACK_IMPORTED_MODULE_0__["default"].rules({
    context: element,
    except
  });
  if (!focusRelevant || isOnlyFocusRelevant(element)) {
    return false;
  }
  if (!except.disabled && (0,_disabled__WEBPACK_IMPORTED_MODULE_3__["default"])(element)) {
    return false;
  }
  if (!except.onlyTabbable && _isOnlyTabbable(element)) {
    // some elements may be keyboard focusable, but not script focusable
    return false;
  }
  // elements that are not rendered, cannot be focused
  if (!except.visible) {
    const visibilityOptions = {
      context: element,
      except: {}
    };
    if (supports.focusInHiddenIframe) {
      // WebKit and Blink can focus content in hidden <iframe> and <object>
      visibilityOptions.except.browsingContext = true;
    }
    if (supports.focusObjectSvgHidden) {
      // Blink allows focusing the object element, even if it has visibility: hidden;
      // @browser-issue Blink https://code.google.com/p/chromium/issues/detail?id=586191
      const nodeName = element.nodeName.toLowerCase();
      if (nodeName === 'object') {
        visibilityOptions.except.cssVisibility = true;
      }
    }
    if (!_visible__WEBPACK_IMPORTED_MODULE_2__["default"].rules(visibilityOptions)) {
      return false;
    }
  }
  const frameElement = (0,_util_get_frame_element__WEBPACK_IMPORTED_MODULE_6__["default"])(element);
  if (frameElement) {
    const _nodeName = frameElement.nodeName.toLowerCase();
    if (_nodeName === 'object' && !supports.focusInZeroDimensionObject) {
      if (!frameElement.offsetWidth || !frameElement.offsetHeight) {
        // WebKit can not focus content in <object> if it doesn't have dimensions
        return false;
      }
    }
  }
  const nodeName = element.nodeName.toLowerCase();
  if (nodeName === 'svg' && supports.focusSvgInIframe && !frameElement && element.getAttribute('tabindex') === null) {
    return false;
  }
  return true;
}
// bind exceptions to an iterator callback
isFocusableRules.except = function () {
  let except = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  const isFocusable = function (context) {
    return isFocusableRules({
      context,
      except
    });
  };
  isFocusable.rules = isFocusableRules;
  return isFocusable;
};
// provide isFocusRelevant(context) as default iterator callback
const isFocusable = isFocusableRules.except({});
/* harmony default export */ __webpack_exports__["default"] = (isFocusable);

/***/ }),

/***/ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/is/is.util.js":
/*!*********************************************************************!*\
  !*** ../src/Dlw.EpiBase.Web/node_modules/ally.js/src/is/is.util.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hasCssDisplayFlex": function() { return /* binding */ hasCssDisplayFlex; },
/* harmony export */   "hasCssOverflowScroll": function() { return /* binding */ hasCssOverflowScroll; },
/* harmony export */   "isScrollableContainer": function() { return /* binding */ isScrollableContainer; },
/* harmony export */   "isUserModifyWritable": function() { return /* binding */ isUserModifyWritable; }
/* harmony export */ });
// this is a shared utility file for focus-relevant.js and tabbable.js
// separate testing of this file's functions is not necessary,
// as they're implicitly tested by way of the consumers
function isUserModifyWritable(style) {
  // https://www.w3.org/TR/1999/WD-css3-userint-19990916#user-modify
  // https://github.com/medialize/ally.js/issues/17
  const userModify = style.webkitUserModify || '';
  return Boolean(userModify && userModify.indexOf('write') !== -1);
}
function hasCssOverflowScroll(style) {
  return [style.getPropertyValue('overflow'), style.getPropertyValue('overflow-x'), style.getPropertyValue('overflow-y')].some(overflow => overflow === 'auto' || overflow === 'scroll');
}
function hasCssDisplayFlex(style) {
  return style.display.indexOf('flex') > -1;
}
function isScrollableContainer(element, nodeName, parentNodeName, parentStyle) {
  if (nodeName !== 'div' && nodeName !== 'span') {
    // Internet Explorer advances scrollable containers and bodies to focusable
    // only if the scrollable container is <div> or <span> - this does *not*
    // happen for <section>, <article>, …
    return false;
  }
  if (parentNodeName && parentNodeName !== 'div' && parentNodeName !== 'span' && !hasCssOverflowScroll(parentStyle)) {
    return false;
  }
  return element.offsetHeight < element.scrollHeight || element.offsetWidth < element.scrollWidth;
}

/***/ }),

/***/ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/is/native-disabled-supported.js":
/*!***************************************************************************************!*\
  !*** ../src/Dlw.EpiBase.Web/node_modules/ally.js/src/is/native-disabled-supported.js ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }
/* harmony export */ });
/* harmony import */ var _util_context_to_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/context-to-element */ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/util/context-to-element.js");
/* harmony import */ var _supports_supports__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../supports/supports */ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/supports.js");
// Determine if an element supports the disabled attribute


let supports;
// https://www.w3.org/TR/html5/disabled-elements.html#concept-element-disabled
let disabledElementsPattern;
const disabledElements = {
  input: true,
  select: true,
  textarea: true,
  button: true,
  fieldset: true,
  form: true
};
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(context) {
  if (!supports) {
    supports = (0,_supports_supports__WEBPACK_IMPORTED_MODULE_1__["default"])();
    if (supports.focusFieldsetDisabled) {
      delete disabledElements.fieldset;
    }
    if (supports.focusFormDisabled) {
      delete disabledElements.form;
    }
    disabledElementsPattern = new RegExp('^(' + Object.keys(disabledElements).join('|') + ')$');
  }
  const element = (0,_util_context_to_element__WEBPACK_IMPORTED_MODULE_0__["default"])({
    label: 'is/native-disabled-supported',
    context
  });
  const nodeName = element.nodeName.toLowerCase();
  return Boolean(disabledElementsPattern.test(nodeName));
}

/***/ }),

/***/ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/is/only-tabbable.js":
/*!***************************************************************************!*\
  !*** ../src/Dlw.EpiBase.Web/node_modules/ally.js/src/is/only-tabbable.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _visible__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./visible */ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/is/visible.js");
/* harmony import */ var _util_context_to_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/context-to-element */ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/util/context-to-element.js");
/* harmony import */ var _util_get_frame_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/get-frame-element */ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/util/get-frame-element.js");
/* harmony import */ var _util_tabindex_value__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/tabindex-value */ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/util/tabindex-value.js");
/* harmony import */ var _util_platform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/platform */ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/util/platform.js");





function isOnlyTabbableRules() {
  let {
    context,
    except = {
      onlyFocusableBrowsingContext: false,
      visible: false
    }
  } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  const element = (0,_util_context_to_element__WEBPACK_IMPORTED_MODULE_1__["default"])({
    label: 'is/only-tabbable',
    resolveDocument: true,
    context
  });
  if (!except.visible && !(0,_visible__WEBPACK_IMPORTED_MODULE_0__["default"])(element)) {
    return false;
  }
  if (!except.onlyFocusableBrowsingContext && (_util_platform__WEBPACK_IMPORTED_MODULE_4__["default"].is.GECKO || _util_platform__WEBPACK_IMPORTED_MODULE_4__["default"].is.TRIDENT || _util_platform__WEBPACK_IMPORTED_MODULE_4__["default"].is.EDGE)) {
    const frameElement = (0,_util_get_frame_element__WEBPACK_IMPORTED_MODULE_2__["default"])(element);
    if (frameElement) {
      if ((0,_util_tabindex_value__WEBPACK_IMPORTED_MODULE_3__["default"])(frameElement) < 0) {
        // iframe[tabindex="-1"] and object[tabindex="-1"] inherit the
        // tabbable demotion onto elements of their browsing contexts
        return false;
      }
    }
  }
  const nodeName = element.nodeName.toLowerCase();
  const tabindex = (0,_util_tabindex_value__WEBPACK_IMPORTED_MODULE_3__["default"])(element);
  if (nodeName === 'label' && _util_platform__WEBPACK_IMPORTED_MODULE_4__["default"].is.GECKO) {
    // Firefox cannot focus, but tab to: label[tabindex=0]
    return tabindex !== null && tabindex >= 0;
  }
  // SVG Elements were keyboard focusable but not script focusable before Firefox 51.
  // Firefox 51 added the focus management DOM API (.focus and .blur) to SVGElement,
  // see https://bugzilla.mozilla.org/show_bug.cgi?id=778654
  if (_util_platform__WEBPACK_IMPORTED_MODULE_4__["default"].is.GECKO && element.ownerSVGElement && !element.focus) {
    if (nodeName === 'a' && element.hasAttribute('xlink:href')) {
      // any focusable child of <svg> cannot be focused, but tabbed to
      if (_util_platform__WEBPACK_IMPORTED_MODULE_4__["default"].is.GECKO) {
        return true;
      }
    }
  }
  return false;
}
// bind exceptions to an iterator callback
isOnlyTabbableRules.except = function () {
  let except = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  const isOnlyTabbable = function (context) {
    return isOnlyTabbableRules({
      context,
      except
    });
  };
  isOnlyTabbable.rules = isOnlyTabbableRules;
  return isOnlyTabbable;
};
// provide isOnlyTabbable(context) as default iterator callback
const isOnlyTabbable = isOnlyTabbableRules.except({});
/* harmony default export */ __webpack_exports__["default"] = (isOnlyTabbable);

/***/ }),

/***/ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/is/valid-area.js":
/*!************************************************************************!*\
  !*** ../src/Dlw.EpiBase.Web/node_modules/ally.js/src/is/valid-area.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }
/* harmony export */ });
/* harmony import */ var _util_context_to_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/context-to-element */ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/util/context-to-element.js");
/* harmony import */ var _visible__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./visible */ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/is/visible.js");
/* harmony import */ var _get_parents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../get/parents */ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/get/parents.js");
/* harmony import */ var _util_image_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/image-map */ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/util/image-map.js");
/* harmony import */ var _supports_supports__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../supports/supports */ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/supports.js");
// determine if an <area> element is being properly used by and <img> via a <map>





let supports;
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/map
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-usemap
// https://github.com/jquery/jquery-ui/blob/master/ui/core.js#L88-L107
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(context) {
  if (!supports) {
    supports = (0,_supports_supports__WEBPACK_IMPORTED_MODULE_4__["default"])();
  }
  const element = (0,_util_context_to_element__WEBPACK_IMPORTED_MODULE_0__["default"])({
    label: 'is/valid-area',
    context
  });
  const nodeName = element.nodeName.toLowerCase();
  if (nodeName !== 'area') {
    return false;
  }
  const hasTabindex = element.hasAttribute('tabindex');
  if (!supports.focusAreaTabindex && hasTabindex) {
    // Blink and WebKit do not consider <area tabindex="-1" href="#void"> focusable
    return false;
  }
  const img = (0,_util_image_map__WEBPACK_IMPORTED_MODULE_3__.getImageOfArea)(element);
  if (!img || !(0,_visible__WEBPACK_IMPORTED_MODULE_1__["default"])(img)) {
    return false;
  }
  // Firefox only allows fully loaded images to reference image maps
  // https://stereochro.me/ideas/detecting-broken-images-js
  if (!supports.focusBrokenImageMap && (!img.complete || !img.naturalHeight || img.offsetWidth <= 0 || img.offsetHeight <= 0)) {
    return false;
  }
  // Firefox supports.can focus area elements even if they don't have an href attribute
  if (!supports.focusAreaWithoutHref && !element.href) {
    // Internet explorer supports.can focus area elements without href if either
    // the area element or the image element has a tabindex attribute
    return supports.focusAreaTabindex && hasTabindex || supports.focusAreaImgTabindex && img.hasAttribute('tabindex');
  }
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-usemap
  const childOfInteractive = (0,_get_parents__WEBPACK_IMPORTED_MODULE_2__["default"])({
    context: img
  }).slice(1).some(function (_element) {
    const name = _element.nodeName.toLowerCase();
    return name === 'button' || name === 'a';
  });
  if (childOfInteractive) {
    return false;
  }
  return true;
}

/***/ }),

/***/ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/is/valid-tabindex.js":
/*!****************************************************************************!*\
  !*** ../src/Dlw.EpiBase.Web/node_modules/ally.js/src/is/valid-tabindex.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }
/* harmony export */ });
/* harmony import */ var _util_context_to_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/context-to-element */ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/util/context-to-element.js");
/* harmony import */ var _supports_supports__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../supports/supports */ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/supports.js");
// determine if an element's tabindex attribute has a valid value


let supports;
// https://www.w3.org/TR/html5/infrastructure.html#rules-for-parsing-integers
// NOTE: all browsers agree to allow trailing spaces as well
const validIntegerPatternNoTrailing = /^\s*(-|\+)?[0-9]+\s*$/;
const validIntegerPatternWithTrailing = /^\s*(-|\+)?[0-9]+.*$/;
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(context) {
  if (!supports) {
    supports = (0,_supports_supports__WEBPACK_IMPORTED_MODULE_1__["default"])();
  }
  const validIntegerPattern = supports.focusTabindexTrailingCharacters ? validIntegerPatternWithTrailing : validIntegerPatternNoTrailing;
  const element = (0,_util_context_to_element__WEBPACK_IMPORTED_MODULE_0__["default"])({
    label: 'is/valid-tabindex',
    resolveDocument: true,
    context
  });
  // Edge 14 has a capitalization problem on SVG elements,
  // see https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/9282058/
  const hasTabindex = element.hasAttribute('tabindex');
  const hasTabIndex = element.hasAttribute('tabIndex');
  if (!hasTabindex && !hasTabIndex) {
    return false;
  }
  // older Firefox and Internet Explorer don't support tabindex on SVG elements
  const isSvgElement = element.ownerSVGElement || element.nodeName.toLowerCase() === 'svg';
  if (isSvgElement && !supports.focusSvgTabindexAttribute) {
    return false;
  }
  // @browser-issue Gecko https://bugzilla.mozilla.org/show_bug.cgi?id=1128054
  if (supports.focusInvalidTabindex) {
    return true;
  }
  // an element matches the tabindex selector even if its value is invalid
  const tabindex = element.getAttribute(hasTabindex ? 'tabindex' : 'tabIndex');
  // IE11 parses tabindex="" as the value "-32768"
  // @browser-issue Trident https://connect.microsoft.com/IE/feedback/details/1072965
  if (tabindex === '-32768') {
    return false;
  }
  return Boolean(tabindex && validIntegerPattern.test(tabindex));
}

/***/ }),

/***/ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/is/visible.js":
/*!*********************************************************************!*\
  !*** ../src/Dlw.EpiBase.Web/node_modules/ally.js/src/is/visible.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util_array_find_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/array-find-index */ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/util/array-find-index.js");
/* harmony import */ var _get_parents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../get/parents */ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/get/parents.js");
/* harmony import */ var _util_context_to_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/context-to-element */ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/util/context-to-element.js");
/* harmony import */ var _util_get_frame_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/get-frame-element */ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/util/get-frame-element.js");
// determine if an element is rendered
// NOTE: that does not mean an element is visible in the viewport, see util/visible-area




// https://www.w3.org/TR/html5/rendering.html#being-rendered
// <area> is not rendered, but we *consider* it visible to simplfiy this function's usage
const notRenderedElementsPattern = /^(area)$/;
function computedStyle(element, property) {
  return window.getComputedStyle(element, null).getPropertyValue(property);
}
function notDisplayed(_path) {
  return _path.some(function (element) {
    // display:none is not visible (optimized away at layout)
    return computedStyle(element, 'display') === 'none';
  });
}
function notVisible(_path) {
  // https://github.com/jquery/jquery-ui/blob/master/ui/core.js#L109-L114
  // NOTE: a nested element can reverse visibility:hidden|collapse by explicitly setting visibility:visible
  // NOTE: visibility can be ["", "visible", "hidden", "collapse"]
  const hidden = (0,_util_array_find_index__WEBPACK_IMPORTED_MODULE_0__["default"])(_path, function (element) {
    const visibility = computedStyle(element, 'visibility');
    return visibility === 'hidden' || visibility === 'collapse';
  });
  if (hidden === -1) {
    // there is no hidden element
    return false;
  }
  const visible = (0,_util_array_find_index__WEBPACK_IMPORTED_MODULE_0__["default"])(_path, function (element) {
    return computedStyle(element, 'visibility') === 'visible';
  });
  if (visible === -1) {
    // there is no visible element (but a hidden element)
    return true;
  }
  if (hidden < visible) {
    // there is a hidden element and it's closer than the first visible element
    return true;
  }
  // there may be a hidden element, but the closest element is visible
  return false;
}
function collapsedParent(_path) {
  let offset = 1;
  if (_path[0].nodeName.toLowerCase() === 'summary') {
    offset = 2;
  }
  return _path.slice(offset).some(function (element) {
    // "content children" of a closed details element are not visible
    return element.nodeName.toLowerCase() === 'details' && element.open === false;
  });
}
function isVisibleRules() {
  let {
    context,
    except = {
      notRendered: false,
      cssDisplay: false,
      cssVisibility: false,
      detailsElement: false,
      browsingContext: false
    }
  } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  const element = (0,_util_context_to_element__WEBPACK_IMPORTED_MODULE_2__["default"])({
    label: 'is/visible',
    resolveDocument: true,
    context
  });
  const nodeName = element.nodeName.toLowerCase();
  if (!except.notRendered && notRenderedElementsPattern.test(nodeName)) {
    return true;
  }
  const _path = (0,_get_parents__WEBPACK_IMPORTED_MODULE_1__["default"])({
    context: element
  });
  // in Internet Explorer <audio> has a default display: none, where others have display: inline
  // but IE allows focusing <audio style="display:none">, but not <div display:none><audio>
  // this is irrelevant to other browsers, as the controls attribute is required to make <audio> focusable
  const isAudioWithoutControls = nodeName === 'audio' && !element.hasAttribute('controls');
  if (!except.cssDisplay && notDisplayed(isAudioWithoutControls ? _path.slice(1) : _path)) {
    return false;
  }
  if (!except.cssVisibility && notVisible(_path)) {
    return false;
  }
  if (!except.detailsElement && collapsedParent(_path)) {
    return false;
  }
  if (!except.browsingContext) {
    // elements within a browsing context are affected by the
    // browsing context host element's visibility and tabindex
    const frameElement = (0,_util_get_frame_element__WEBPACK_IMPORTED_MODULE_3__["default"])(element);
    const _isVisible = isVisibleRules.except(except);
    if (frameElement && !_isVisible(frameElement)) {
      return false;
    }
  }
  return true;
}
// bind exceptions to an iterator callback
isVisibleRules.except = function () {
  let except = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  const isVisible = function (context) {
    return isVisibleRules({
      context,
      except
    });
  };
  isVisible.rules = isVisibleRules;
  return isVisible;
};
// provide isVisible(context) as default iterator callback
const isVisible = isVisibleRules.except({});
/* harmony default export */ __webpack_exports__["default"] = (isVisible);

/***/ }),

/***/ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/query/focusable.js":
/*!**************************************************************************!*\
  !*** ../src/Dlw.EpiBase.Web/node_modules/ally.js/src/query/focusable.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }
/* harmony export */ });
/* harmony import */ var _util_context_to_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/context-to-element */ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/util/context-to-element.js");
/* harmony import */ var _focusable_strict__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./focusable.strict */ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/query/focusable.strict.js");
/* harmony import */ var _focusable_quick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./focusable.quick */ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/query/focusable.quick.js");
// https://www.w3.org/TR/html5/editing.html#focusable
// https://www.w3.org/WAI/PF/aria-practices/#keyboard



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  let {
    context,
    includeContext,
    includeOnlyTabbable,
    strategy = 'quick'
  } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  const element = (0,_util_context_to_element__WEBPACK_IMPORTED_MODULE_0__["default"])({
    label: 'query/focusable',
    resolveDocument: true,
    defaultToDocument: true,
    context
  });
  const options = {
    context: element,
    includeContext,
    includeOnlyTabbable,
    strategy
  };
  if (strategy === 'quick') {
    return (0,_focusable_quick__WEBPACK_IMPORTED_MODULE_2__["default"])(options);
  } else if (strategy === 'strict' || strategy === 'all') {
    return (0,_focusable_strict__WEBPACK_IMPORTED_MODULE_1__["default"])(options);
  }
  throw new TypeError('query/focusable requires option.strategy to be one of ["quick", "strict", "all"]');
}

/***/ }),

/***/ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/query/focusable.quick.js":
/*!********************************************************************************!*\
  !*** ../src/Dlw.EpiBase.Web/node_modules/ally.js/src/query/focusable.quick.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ queryFocusableQuick; }
/* harmony export */ });
/* harmony import */ var _selector_focusable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../selector/focusable */ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/selector/focusable.js");
/* harmony import */ var _is_focusable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../is/focusable */ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/is/focusable.js");
// https://www.w3.org/TR/html5/editing.html#focusable
// https://www.w3.org/WAI/PF/aria-practices/#keyboard


function queryFocusableQuick() {
  let {
    context,
    includeContext,
    includeOnlyTabbable
  } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  const _selector = (0,_selector_focusable__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const elements = context.querySelectorAll(_selector);
  // the selector potentially matches more than really is focusable
  const _isFocusable = _is_focusable__WEBPACK_IMPORTED_MODULE_1__["default"].rules.except({
    onlyTabbable: includeOnlyTabbable
  });
  const result = [].filter.call(elements, _isFocusable);
  // add context if requested and focusable
  if (includeContext && _isFocusable(context)) {
    result.unshift(context);
  }
  return result;
}

/***/ }),

/***/ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/query/focusable.strict.js":
/*!*********************************************************************************!*\
  !*** ../src/Dlw.EpiBase.Web/node_modules/ally.js/src/query/focusable.strict.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ queryFocusableStrict; }
/* harmony export */ });
/* harmony import */ var _is_focusable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../is/focusable */ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/is/focusable.js");
/* harmony import */ var _is_focus_relevant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../is/focus-relevant */ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/is/focus-relevant.js");
/* harmony import */ var _util_get_document__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/get-document */ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/util/get-document.js");
// https://www.w3.org/TR/html5/editing.html#focusable
// https://www.w3.org/WAI/PF/aria-practices/#keyboard



function createFilter(condition) {
  // see https://developer.mozilla.org/en-US/docs/Web/API/NodeFilter
  const filter = function (node) {
    if (node.shadowRoot) {
      // return ShadowRoot elements regardless of them being focusable,
      // so they can be walked recursively later
      return NodeFilter.FILTER_ACCEPT;
    }
    if (condition(node)) {
      // finds elements that could have been found by document.querySelectorAll()
      return NodeFilter.FILTER_ACCEPT;
    }
    return NodeFilter.FILTER_SKIP;
  };
  // IE requires a function, Browsers require {acceptNode: function}
  // see http://www.bennadel.com/blog/2607-finding-html-comment-nodes-in-the-dom-using-treewalker.htm
  filter.acceptNode = filter;
  return filter;
}
const PossiblyFocusableFilter = createFilter(_is_focus_relevant__WEBPACK_IMPORTED_MODULE_1__["default"]);
function queryFocusableStrict() {
  let {
    context,
    includeContext,
    includeOnlyTabbable,
    strategy
  } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  if (!context) {
    context = document.documentElement;
  }
  const _isFocusable = _is_focusable__WEBPACK_IMPORTED_MODULE_0__["default"].rules.except({
    onlyTabbable: includeOnlyTabbable
  });
  const _document = (0,_util_get_document__WEBPACK_IMPORTED_MODULE_2__["default"])(context);
  // see https://developer.mozilla.org/en-US/docs/Web/API/Document/createTreeWalker
  const walker = _document.createTreeWalker(
  // root element to start search in
  context,
  // element type filter
  NodeFilter.SHOW_ELEMENT,
  // custom NodeFilter filter
  strategy === 'all' ? PossiblyFocusableFilter : createFilter(_isFocusable),
  // deprecated, but IE requires it
  false);
  let list = [];
  while (walker.nextNode()) {
    if (walker.currentNode.shadowRoot) {
      if (_isFocusable(walker.currentNode)) {
        list.push(walker.currentNode);
      }
      list = list.concat(queryFocusableStrict({
        context: walker.currentNode.shadowRoot,
        includeOnlyTabbable,
        strategy
      }));
    } else {
      list.push(walker.currentNode);
    }
  }
  // add context if requested and focusable
  if (includeContext) {
    if (strategy === 'all') {
      if ((0,_is_focus_relevant__WEBPACK_IMPORTED_MODULE_1__["default"])(context)) {
        list.unshift(context);
      }
    } else if (_isFocusable(context)) {
      list.unshift(context);
    }
  }
  return list;
}

/***/ }),

/***/ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/selector/focusable.js":
/*!*****************************************************************************!*\
  !*** ../src/Dlw.EpiBase.Web/node_modules/ally.js/src/selector/focusable.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }
/* harmony export */ });
/* harmony import */ var _util_select_in_shadows__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/select-in-shadows */ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/util/select-in-shadows.js");
/* harmony import */ var _supports_supports__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../supports/supports */ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/supports.js");
// NOTE: this selector MUST *never* be used directly,
// always go through query/focusable or is/focusable.js
// there are too many edge cases that they could be covered in
// a simple CSS selector…


let supports;
let selector;
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  if (!supports) {
    supports = (0,_supports_supports__WEBPACK_IMPORTED_MODULE_1__["default"])();
  }
  if (typeof selector === 'string') {
    return selector;
  }
  // https://www.w3.org/TR/html5/editing.html#sequential-focus-navigation-and-the-tabindex-attribute
  selector = ''
  // IE11 supports.can focus <table> and <td>
  + (supports.focusTable ? 'table, td,' : '')
  // IE11 supports.can focus <fieldset>
  + (supports.focusFieldset ? 'fieldset,' : '')
  // Namespace problems of [xlink:href] explained in https://stackoverflow.com/a/23047888/515124
  // svg a[*|href] does not match in IE9, but since we're filtering
  // through is/focusable we can include all <a> from SVG
  + 'svg a,'
  // may behave as 'svg, svg *,' in chrome as *every* svg element with a focus event listener is focusable
  // navigational elements
  + 'a[href],'
  // validity determined by is/valid-area.js
  + 'area[href],'
  // validity determined by is/disabled.js
  + 'input, select, textarea, button,'
  // browsing context containers
  + 'iframe, object, embed,'
  // interactive content
  + 'keygen,' + (supports.focusAudioWithoutControls ? 'audio,' : 'audio[controls],') + (supports.focusVideoWithoutControls ? 'video,' : 'video[controls],') + (supports.focusSummary ? 'summary,' : '')
  // validity determined by is/valid-tabindex.js
  + '[tabindex],'
  // editing hosts
  + '[contenteditable]';
  // where ShadowDOM is supported, we also want the shadowed focusable elements (via ">>>" or "/deep/")
  selector = (0,_util_select_in_shadows__WEBPACK_IMPORTED_MODULE_0__["default"])(selector);
  return selector;
}

/***/ }),

/***/ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/css-shadow-piercing-deep-combinator.js":
/*!*******************************************************************************************************!*\
  !*** ../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/css-shadow-piercing-deep-combinator.js ***!
  \*******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  let combinator;
  // see https://dev.w3.org/csswg/css-scoping-1/#deep-combinator
  // https://bugzilla.mozilla.org/show_bug.cgi?id=1117572
  // https://code.google.com/p/chromium/issues/detail?id=446051
  try {
    document.querySelector('html >>> :first-child');
    combinator = '>>>';
  } catch (noArrowArrowArrow) {
    try {
      // old syntax supported at least up to Chrome 41
      // https://code.google.com/p/chromium/issues/detail?id=446051
      document.querySelector('html /deep/ :first-child');
      combinator = '/deep/';
    } catch (noDeep) {
      combinator = '';
    }
  }
  return combinator;
}

/***/ }),

/***/ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/detect-focus.js":
/*!********************************************************************************!*\
  !*** ../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/detect-focus.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }
/* harmony export */ });
/* harmony import */ var _util_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/platform */ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/util/platform.js");

function before() {
  const data = {
    // remember what had focus to restore after test
    activeElement: document.activeElement,
    // remember scroll positions to restore after test
    windowScrollTop: window.scrollTop,
    windowScrollLeft: window.scrollLeft,
    bodyScrollTop: document.body.scrollTop,
    bodyScrollLeft: document.body.scrollLeft
  };
  // wrap tests in an element hidden from screen readers to prevent them
  // from announcing focus, which can be quite irritating to the user
  const iframe = document.createElement('iframe');
  iframe.setAttribute('style', 'position:absolute; position:fixed; top:0; left:-2px; width:1px; height:1px; overflow:hidden;');
  iframe.setAttribute('aria-live', 'off');
  iframe.setAttribute('aria-busy', 'true');
  iframe.setAttribute('aria-hidden', 'true');
  document.body.appendChild(iframe);
  const _window = iframe.contentWindow;
  const _document = _window.document;
  _document.open();
  _document.close();
  const wrapper = _document.createElement('div');
  _document.body.appendChild(wrapper);
  data.iframe = iframe;
  data.wrapper = wrapper;
  data.window = _window;
  data.document = _document;
  return data;
}
// options.element:
//  {string} element name
//  {function} callback(wrapper, document) to generate an element
// options.mutate: (optional)
//  {function} callback(element, wrapper, document) to manipulate element prior to focus-test.
//             Can return DOMElement to define focus target (default: element)
// options.validate: (optional)
//  {function} callback(element, focusTarget, document) to manipulate test-result
function test(data, options) {
  // make sure we operate on a clean slate
  data.wrapper.innerHTML = '';
  // create dummy element to test focusability of
  const element = typeof options.element === 'string' ? data.document.createElement(options.element) : options.element(data.wrapper, data.document);
  // allow callback to further specify dummy element
  // and optionally define element to focus
  let focus = options.mutate && options.mutate(element, data.wrapper, data.document);
  if (!focus && focus !== false) {
    focus = element;
  }
  // element needs to be part of the DOM to be focusable
  !element.parentNode && data.wrapper.appendChild(element);
  // test if the element with invalid tabindex can be focused
  focus && focus.focus && focus.focus();
  // validate test's result
  return options.validate ? options.validate(element, focus, data.document) : data.document.activeElement === focus;
}
function after(data) {
  // restore focus to what it was before test and cleanup
  if (data.activeElement === document.body) {
    document.activeElement && document.activeElement.blur && document.activeElement.blur();
    if (_util_platform__WEBPACK_IMPORTED_MODULE_0__["default"].is.IE10) {
      // IE10 does not redirect focus to <body> when the activeElement is removed
      document.body.focus();
    }
  } else {
    data.activeElement && data.activeElement.focus && data.activeElement.focus();
  }
  document.body.removeChild(data.iframe);
  // restore scroll position
  window.scrollTop = data.windowScrollTop;
  window.scrollLeft = data.windowScrollLeft;
  document.body.scrollTop = data.bodyScrollTop;
  document.body.scrollLeft = data.bodyScrollLeft;
}
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(tests) {
  const data = before();
  const results = {};
  Object.keys(tests).map(function (key) {
    results[key] = test(data, tests[key]);
  });
  after(data);
  return results;
}

/***/ }),

/***/ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/focus-area-img-tabindex.js":
/*!*******************************************************************************************!*\
  !*** ../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/focus-area-img-tabindex.js ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _media_gif__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./media/gif */ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/media/gif.js");

// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-usemap
/* harmony default export */ __webpack_exports__["default"] = ({
  element: 'div',
  mutate: function (element) {
    element.innerHTML = '<map name="image-map-tabindex-test">' + '<area shape="rect" coords="63,19,144,45"></map>' + '<img usemap="#image-map-tabindex-test" tabindex="-1" alt="" src="' + _media_gif__WEBPACK_IMPORTED_MODULE_0__["default"] + '">';
    return element.querySelector('area');
  }
});

/***/ }),

/***/ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/focus-area-tabindex.js":
/*!***************************************************************************************!*\
  !*** ../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/focus-area-tabindex.js ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _media_gif__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./media/gif */ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/media/gif.js");
/* harmony import */ var _util_platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/platform */ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/util/platform.js");


// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-usemap
/* harmony default export */ __webpack_exports__["default"] = ({
  element: 'div',
  mutate: function (element) {
    element.innerHTML = '<map name="image-map-tabindex-test">' + '<area href="#void" tabindex="-1" shape="rect" coords="63,19,144,45"></map>' + '<img usemap="#image-map-tabindex-test" alt="" src="' + _media_gif__WEBPACK_IMPORTED_MODULE_0__["default"] + '">';
    return false;
  },
  validate: function (element, focusTarget, _document) {
    if (_util_platform__WEBPACK_IMPORTED_MODULE_1__["default"].is.GECKO) {
      // fixes https://github.com/medialize/ally.js/issues/35
      // Firefox loads the DataURI asynchronously, causing a false-negative
      return true;
    }
    const focus = element.querySelector('area');
    focus.focus();
    return _document.activeElement === focus;
  }
});

/***/ }),

/***/ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/focus-area-without-href.js":
/*!*******************************************************************************************!*\
  !*** ../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/focus-area-without-href.js ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _media_gif__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./media/gif */ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/media/gif.js");
/* harmony import */ var _util_platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/platform */ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/util/platform.js");


// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-usemap
/* harmony default export */ __webpack_exports__["default"] = ({
  element: 'div',
  mutate: function (element) {
    element.innerHTML = '<map name="image-map-area-href-test">' + '<area shape="rect" coords="63,19,144,45"></map>' + '<img usemap="#image-map-area-href-test" alt="" src="' + _media_gif__WEBPACK_IMPORTED_MODULE_0__["default"] + '">';
    return element.querySelector('area');
  },
  validate: function (element, focusTarget, _document) {
    if (_util_platform__WEBPACK_IMPORTED_MODULE_1__["default"].is.GECKO) {
      // fixes https://github.com/medialize/ally.js/issues/35
      // Firefox loads the DataURI asynchronously, causing a false-negative
      return true;
    }
    return _document.activeElement === focusTarget;
  }
});

/***/ }),

/***/ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/focus-audio-without-controls.js":
/*!************************************************************************************************!*\
  !*** ../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/focus-audio-without-controls.js ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _media_mp3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./media/mp3 */ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/media/mp3.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'can-focus-audio-without-controls',
  element: 'audio',
  mutate: function (element) {
    try {
      // invalid media file can trigger warning in console, data-uri to prevent HTTP request
      element.setAttribute('src', _media_mp3__WEBPACK_IMPORTED_MODULE_0__["default"]);
    } catch (e) {
      // IE9 may throw "Error: Not implemented"
    }
  }
});

/***/ }),

/***/ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/focus-broken-image-map.js":
/*!******************************************************************************************!*\
  !*** ../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/focus-broken-image-map.js ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _media_gif_invalid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./media/gif.invalid */ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/media/gif.invalid.js");

// NOTE: https://github.com/medialize/ally.js/issues/35
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-usemap
/* harmony default export */ __webpack_exports__["default"] = ({
  element: 'div',
  mutate: function (element) {
    element.innerHTML = '<map name="broken-image-map-test"><area href="#void" shape="rect" coords="63,19,144,45"></map>' + '<img usemap="#broken-image-map-test" alt="" src="' + _media_gif_invalid__WEBPACK_IMPORTED_MODULE_0__["default"] + '">';
    return element.querySelector('area');
  }
});

/***/ }),

/***/ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/focus-children-of-focusable-flexbox.js":
/*!*******************************************************************************************************!*\
  !*** ../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/focus-children-of-focusable-flexbox.js ***!
  \*******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Children of focusable elements with display:flex are focusable in IE10-11
/* harmony default export */ __webpack_exports__["default"] = ({
  element: 'div',
  mutate: function (element) {
    element.setAttribute('tabindex', '-1');
    element.setAttribute('style', 'display: -webkit-flex; display: -ms-flexbox; display: flex;');
    element.innerHTML = '<span style="display: block;">hello</span>';
    return element.querySelector('span');
  }
});

/***/ }),

/***/ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/focus-fieldset-disabled.js":
/*!*******************************************************************************************!*\
  !*** ../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/focus-fieldset-disabled.js ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// fieldset[tabindex=0][disabled] should not be focusable, but Blink and WebKit disagree
// @specification https://www.w3.org/TR/html5/disabled-elements.html#concept-element-disabled
// @browser-issue Chromium https://crbug.com/453847
// @browser-issue WebKit https://bugs.webkit.org/show_bug.cgi?id=141086
/* harmony default export */ __webpack_exports__["default"] = ({
  element: 'fieldset',
  mutate: function (element) {
    element.setAttribute('tabindex', 0);
    element.setAttribute('disabled', 'disabled');
  }
});

/***/ }),

/***/ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/focus-fieldset.js":
/*!**********************************************************************************!*\
  !*** ../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/focus-fieldset.js ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  element: 'fieldset',
  mutate: function (element) {
    element.innerHTML = '<legend>legend</legend><p>content</p>';
  }
});

/***/ }),

/***/ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/focus-flexbox-container.js":
/*!*******************************************************************************************!*\
  !*** ../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/focus-flexbox-container.js ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// elements with display:flex are focusable in IE10-11
/* harmony default export */ __webpack_exports__["default"] = ({
  element: 'span',
  mutate: function (element) {
    element.setAttribute('style', 'display: -webkit-flex; display: -ms-flexbox; display: flex;');
    element.innerHTML = '<span style="display: block;">hello</span>';
  }
});

/***/ }),

/***/ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/focus-form-disabled.js":
/*!***************************************************************************************!*\
  !*** ../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/focus-form-disabled.js ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// form[tabindex=0][disabled] should be focusable as the
// specification doesn't know the disabled attribute on the form element
// @specification https://www.w3.org/TR/html5/forms.html#the-form-element
/* harmony default export */ __webpack_exports__["default"] = ({
  element: 'form',
  mutate: function (element) {
    element.setAttribute('tabindex', 0);
    element.setAttribute('disabled', 'disabled');
  }
});

/***/ }),

/***/ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/focus-img-ismap.js":
/*!***********************************************************************************!*\
  !*** ../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/focus-img-ismap.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _media_gif__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./media/gif */ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/media/gif.js");

// NOTE: https://github.com/medialize/ally.js/issues/35
// fixes https://github.com/medialize/ally.js/issues/20
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-ismap
/* harmony default export */ __webpack_exports__["default"] = ({
  element: 'a',
  mutate: function (element) {
    element.href = '#void';
    element.innerHTML = '<img ismap src="' + _media_gif__WEBPACK_IMPORTED_MODULE_0__["default"] + '" alt="">';
    return element.querySelector('img');
  }
});

/***/ }),

/***/ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/focus-img-usemap-tabindex.js":
/*!*********************************************************************************************!*\
  !*** ../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/focus-img-usemap-tabindex.js ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _media_gif__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./media/gif */ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/media/gif.js");

// NOTE: https://github.com/medialize/ally.js/issues/35
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-usemap
/* harmony default export */ __webpack_exports__["default"] = ({
  element: 'div',
  mutate: function (element) {
    element.innerHTML = '<map name="image-map-tabindex-test"><area href="#void" shape="rect" coords="63,19,144,45"></map>' + '<img usemap="#image-map-tabindex-test" tabindex="-1" alt="" ' + 'src="' + _media_gif__WEBPACK_IMPORTED_MODULE_0__["default"] + '">';
    return element.querySelector('img');
  }
});

/***/ }),

/***/ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/focus-in-hidden-iframe.js":
/*!******************************************************************************************!*\
  !*** ../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/focus-in-hidden-iframe.js ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  element: function (wrapper, _document) {
    const iframe = _document.createElement('iframe');
    // iframe must be part of the DOM before accessing the contentWindow is possible
    wrapper.appendChild(iframe);
    // create the iframe's default document (<html><head></head><body></body></html>)
    const iframeDocument = iframe.contentWindow.document;
    iframeDocument.open();
    iframeDocument.close();
    return iframe;
  },
  mutate: function (iframe) {
    iframe.style.visibility = 'hidden';
    const iframeDocument = iframe.contentWindow.document;
    const input = iframeDocument.createElement('input');
    iframeDocument.body.appendChild(input);
    return input;
  },
  validate: function (iframe) {
    const iframeDocument = iframe.contentWindow.document;
    const focus = iframeDocument.querySelector('input');
    return iframeDocument.activeElement === focus;
  }
});

/***/ }),

/***/ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/focus-in-zero-dimension-object.js":
/*!**************************************************************************************************!*\
  !*** ../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/focus-in-zero-dimension-object.js ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }
/* harmony export */ });
/* harmony import */ var _util_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/platform */ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/util/platform.js");

const result = !_util_platform__WEBPACK_IMPORTED_MODULE_0__["default"].is.WEBKIT;
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  return result;
}

/***/ }),

/***/ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/focus-invalid-tabindex.js":
/*!******************************************************************************************!*\
  !*** ../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/focus-invalid-tabindex.js ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Firefox allows *any* value and treats invalid values like tabindex="-1"
// @browser-issue Gecko https://bugzilla.mozilla.org/show_bug.cgi?id=1128054
/* harmony default export */ __webpack_exports__["default"] = ({
  element: 'div',
  mutate: function (element) {
    element.setAttribute('tabindex', 'invalid-value');
  }
});

/***/ }),

/***/ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/focus-label-tabindex.js":
/*!****************************************************************************************!*\
  !*** ../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/focus-label-tabindex.js ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  element: 'label',
  mutate: function (element) {
    element.setAttribute('tabindex', '-1');
  },
  validate: function (element, focusTarget, _document) {
    // force layout in Chrome 49, otherwise the element won't be focusable
    /* eslint-disable no-unused-vars */
    const variableToPreventDeadCodeElimination = element.offsetHeight;
    /* eslint-enable no-unused-vars */
    element.focus();
    return _document.activeElement === element;
  }
});

/***/ }),

/***/ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/focus-object-svg-hidden.js":
/*!*******************************************************************************************!*\
  !*** ../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/focus-object-svg-hidden.js ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _media_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./media/svg */ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/media/svg.js");

// Note: IE10 on BrowserStack does not like this test
/* harmony default export */ __webpack_exports__["default"] = ({
  element: 'object',
  mutate: function (element) {
    element.setAttribute('type', 'image/svg+xml');
    element.setAttribute('data', _media_svg__WEBPACK_IMPORTED_MODULE_0__["default"]);
    element.setAttribute('width', '200');
    element.setAttribute('height', '50');
    element.style.visibility = 'hidden';
  }
});

/***/ }),

/***/ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/focus-object-svg.js":
/*!************************************************************************************!*\
  !*** ../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/focus-object-svg.js ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _media_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./media/svg */ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/media/svg.js");
/* harmony import */ var _util_platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/platform */ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/util/platform.js");


// Note: IE10 on BrowserStack does not like this test
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'can-focus-object-svg',
  element: 'object',
  mutate: function (element) {
    element.setAttribute('type', 'image/svg+xml');
    element.setAttribute('data', _media_svg__WEBPACK_IMPORTED_MODULE_0__["default"]);
    element.setAttribute('width', '200');
    element.setAttribute('height', '50');
  },
  validate: function (element, focusTarget, _document) {
    if (_util_platform__WEBPACK_IMPORTED_MODULE_1__["default"].is.GECKO) {
      // Firefox seems to be handling the object creation asynchronously and thereby produces a false negative test result.
      // Because we know Firefox is able to focus object elements referencing SVGs, we simply cheat by sniffing the user agent string
      return true;
    }
    return _document.activeElement === element;
  }
});

/***/ }),

/***/ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/focus-object-swf.js":
/*!************************************************************************************!*\
  !*** ../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/focus-object-swf.js ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }
/* harmony export */ });
/* harmony import */ var _util_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/platform */ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/util/platform.js");

// Every Environment except IE9 considers SWF objects focusable
const result = !_util_platform__WEBPACK_IMPORTED_MODULE_0__["default"].is.IE9;
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  return result;
}

/***/ }),

/***/ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/focus-redirect-img-usemap.js":
/*!*********************************************************************************************!*\
  !*** ../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/focus-redirect-img-usemap.js ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _media_gif__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./media/gif */ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/media/gif.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  element: 'div',
  mutate: function (element) {
    element.innerHTML = '<map name="focus-redirect-img-usemap"><area href="#void" shape="rect" coords="63,19,144,45"></map>' + '<img usemap="#focus-redirect-img-usemap" alt="" ' + 'src="' + _media_gif__WEBPACK_IMPORTED_MODULE_0__["default"] + '">';
    // focus the <img>, not the <div>
    return element.querySelector('img');
  },
  validate: function (element, focusTarget, _document) {
    const target = element.querySelector('area');
    return _document.activeElement === target;
  }
});

/***/ }),

/***/ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/focus-redirect-legend.js":
/*!*****************************************************************************************!*\
  !*** ../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/focus-redirect-legend.js ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// see https://jsbin.com/nenirisage/edit?html,js,console,output
/* harmony default export */ __webpack_exports__["default"] = ({
  element: 'fieldset',
  mutate: function (element) {
    element.innerHTML = '<legend>legend</legend><input tabindex="-1"><input tabindex="0">';
    // take care of focus in validate();
    return false;
  },
  validate: function (element, focusTarget, _document) {
    const focusable = element.querySelector('input[tabindex="-1"]');
    const tabbable = element.querySelector('input[tabindex="0"]');
    // Firefox requires this test to focus the <fieldset> first, while this is not necessary in
    // https://jsbin.com/nenirisage/edit?html,js,console,output
    element.focus();
    element.querySelector('legend').focus();
    return _document.activeElement === focusable && 'focusable' || _document.activeElement === tabbable && 'tabbable' || '';
  }
});

/***/ }),

/***/ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/focus-scroll-body.js":
/*!*************************************************************************************!*\
  !*** ../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/focus-scroll-body.js ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// https://github.com/medialize/ally.js/issues/21
/* harmony default export */ __webpack_exports__["default"] = ({
  element: 'div',
  mutate: function (element) {
    element.setAttribute('style', 'width: 100px; height: 50px; overflow: auto;');
    element.innerHTML = '<div style="width: 500px; height: 40px;">scrollable content</div>';
    return element.querySelector('div');
  }
});

/***/ }),

/***/ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/focus-scroll-container-without-overflow.js":
/*!***********************************************************************************************************!*\
  !*** ../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/focus-scroll-container-without-overflow.js ***!
  \***********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// https://github.com/medialize/ally.js/issues/21
/* harmony default export */ __webpack_exports__["default"] = ({
  element: 'div',
  mutate: function (element) {
    element.setAttribute('style', 'width: 100px; height: 50px;');
    element.innerHTML = '<div style="width: 500px; height: 40px;">scrollable content</div>';
  }
});

/***/ }),

/***/ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/focus-scroll-container.js":
/*!******************************************************************************************!*\
  !*** ../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/focus-scroll-container.js ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// https://github.com/medialize/ally.js/issues/21
/* harmony default export */ __webpack_exports__["default"] = ({
  element: 'div',
  mutate: function (element) {
    element.setAttribute('style', 'width: 100px; height: 50px; overflow: auto;');
    element.innerHTML = '<div style="width: 500px; height: 40px;">scrollable content</div>';
  }
});

/***/ }),

/***/ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/focus-summary.js":
/*!*********************************************************************************!*\
  !*** ../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/focus-summary.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  element: 'details',
  mutate: function (element) {
    element.innerHTML = '<summary>foo</summary><p>content</p>';
    return element.firstElementChild;
  }
});

/***/ }),

/***/ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/focus-svg-focusable-attribute.js":
/*!*************************************************************************************************!*\
  !*** ../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/focus-svg-focusable-attribute.js ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helper_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper/svg */ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/helper/svg.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  element: 'div',
  mutate: function (element) {
    element.innerHTML = (0,_helper_svg__WEBPACK_IMPORTED_MODULE_0__.generate)('<text focusable="true">a</text>');
    return element.querySelector('text');
  },
  validate: _helper_svg__WEBPACK_IMPORTED_MODULE_0__.validate
});

/***/ }),

/***/ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/focus-svg-foreignobject-tabindex.js":
/*!****************************************************************************************************!*\
  !*** ../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/focus-svg-foreignobject-tabindex.js ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helper_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper/svg */ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/helper/svg.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  element: 'div',
  mutate: function (element) {
    element.innerHTML = (0,_helper_svg__WEBPACK_IMPORTED_MODULE_0__.generate)('<foreignObject tabindex="-1"><input type="text" /></foreignObject>');
    // Safari 8's quersSelector() can't identify foreignObject, but getElementyByTagName() can
    return element.querySelector('foreignObject') || element.getElementsByTagName('foreignObject')[0];
  },
  validate: _helper_svg__WEBPACK_IMPORTED_MODULE_0__.validate
});

/***/ }),

/***/ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/focus-svg-in-iframe.js":
/*!***************************************************************************************!*\
  !*** ../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/focus-svg-in-iframe.js ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }
/* harmony export */ });
/* harmony import */ var _util_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/platform */ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/util/platform.js");

// Firefox seems to be handling the SVG-document-in-iframe creation asynchronously
// and thereby produces a false negative test result. Thus the test is pointless
// and we resort to UA sniffing once again.
// see http://jsbin.com/vunadohoko/1/edit?js,console,output
const result = Boolean(_util_platform__WEBPACK_IMPORTED_MODULE_0__["default"].is.GECKO && typeof SVGElement !== 'undefined' && SVGElement.prototype.focus);
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  return result;
}

/***/ }),

/***/ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/focus-svg-negative-tabindex-attribute.js":
/*!*********************************************************************************************************!*\
  !*** ../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/focus-svg-negative-tabindex-attribute.js ***!
  \*********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helper_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper/svg */ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/helper/svg.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  element: 'div',
  mutate: function (element) {
    element.innerHTML = (0,_helper_svg__WEBPACK_IMPORTED_MODULE_0__.generate)('<text tabindex="-1">a</text>');
    return element.querySelector('text');
  },
  validate: _helper_svg__WEBPACK_IMPORTED_MODULE_0__.validate
});

/***/ }),

/***/ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/focus-svg-tabindex-attribute.js":
/*!************************************************************************************************!*\
  !*** ../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/focus-svg-tabindex-attribute.js ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helper_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper/svg */ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/helper/svg.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  element: 'div',
  mutate: function (element) {
    element.innerHTML = (0,_helper_svg__WEBPACK_IMPORTED_MODULE_0__.generate)('<text tabindex="0">a</text>');
    return element.querySelector('text');
  },
  validate: _helper_svg__WEBPACK_IMPORTED_MODULE_0__.validate
});

/***/ }),

/***/ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/focus-svg-use-tabindex.js":
/*!******************************************************************************************!*\
  !*** ../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/focus-svg-use-tabindex.js ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helper_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper/svg */ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/helper/svg.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  element: 'div',
  mutate: function (element) {
    element.innerHTML = (0,_helper_svg__WEBPACK_IMPORTED_MODULE_0__.generate)(['<g id="ally-test-target"><a xlink:href="#void"><text>link</text></a></g>', '<use xlink:href="#ally-test-target" x="0" y="0" tabindex="-1" />'].join(''));
    return element.querySelector('use');
  },
  validate: _helper_svg__WEBPACK_IMPORTED_MODULE_0__.validate
});

/***/ }),

/***/ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/focus-svg.js":
/*!*****************************************************************************!*\
  !*** ../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/focus-svg.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helper_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper/svg */ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/helper/svg.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  element: 'div',
  mutate: function (element) {
    element.innerHTML = (0,_helper_svg__WEBPACK_IMPORTED_MODULE_0__.generate)('');
    return element.firstChild;
  },
  validate: _helper_svg__WEBPACK_IMPORTED_MODULE_0__.validate
});

/***/ }),

/***/ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/focus-tabindex-trailing-characters.js":
/*!******************************************************************************************************!*\
  !*** ../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/focus-tabindex-trailing-characters.js ***!
  \******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Firefox allows *any* value and treats invalid values like tabindex="-1"
// @browser-issue Gecko https://bugzilla.mozilla.org/show_bug.cgi?id=1128054
/* harmony default export */ __webpack_exports__["default"] = ({
  element: 'div',
  mutate: function (element) {
    element.setAttribute('tabindex', '3x');
  }
});

/***/ }),

/***/ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/focus-table.js":
/*!*******************************************************************************!*\
  !*** ../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/focus-table.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  element: 'table',
  mutate: function (element, wrapper, _document) {
    // IE9 has a problem replacing TBODY contents with innerHTML.
    // https://stackoverflow.com/a/8097055/515124
    // element.innerHTML = '<tr><td>cell</td></tr>';
    const fragment = _document.createDocumentFragment();
    fragment.innerHTML = '<tr><td>cell</td></tr>';
    element.appendChild(fragment);
  }
});

/***/ }),

/***/ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/focus-video-without-controls.js":
/*!************************************************************************************************!*\
  !*** ../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/focus-video-without-controls.js ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _media_mp4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./media/mp4 */ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/media/mp4.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  element: 'video',
  mutate: function (element) {
    try {
      // invalid media file can trigger warning in console, data-uri to prevent HTTP request
      element.setAttribute('src', _media_mp4__WEBPACK_IMPORTED_MODULE_0__["default"]);
    } catch (e) {
      // IE9 may throw "Error: Not implemented"
    }
  }
});

/***/ }),

/***/ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/helper/svg.js":
/*!******************************************************************************!*\
  !*** ../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/helper/svg.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "focus": function() { return /* binding */ focus; },
/* harmony export */   "generate": function() { return /* binding */ generate; },
/* harmony export */   "validate": function() { return /* binding */ validate; }
/* harmony export */ });
/* harmony import */ var _element_focus_svg_foreign_object_hack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../element/focus.svg-foreign-object-hack */ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/element/focus.svg-foreign-object-hack.js");

function generate(element) {
  return '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">' + element + '</svg>';
}
function focus(element) {
  if (element.focus) {
    return;
  }
  try {
    HTMLElement.prototype.focus.call(element);
  } catch (e) {
    (0,_element_focus_svg_foreign_object_hack__WEBPACK_IMPORTED_MODULE_0__["default"])(element);
  }
}
function validate(element, focusTarget, _document) {
  focus(focusTarget);
  return _document.activeElement === focusTarget;
}

/***/ }),

/***/ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/media/gif.invalid.js":
/*!*************************************************************************************!*\
  !*** ../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/media/gif.invalid.js ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ('data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ');

/***/ }),

/***/ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/media/gif.js":
/*!*****************************************************************************!*\
  !*** ../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/media/gif.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ('data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7');

/***/ }),

/***/ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/media/mp3.js":
/*!*****************************************************************************!*\
  !*** ../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/media/mp3.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _gif__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gif */ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/media/gif.js");
// export default 'data:audio/mp3;base64,audio-focus-test';

/* harmony default export */ __webpack_exports__["default"] = (_gif__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/media/mp4.js":
/*!*****************************************************************************!*\
  !*** ../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/media/mp4.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _gif__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gif */ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/media/gif.js");
// export default 'data:video/mp4;base64,video-focus-test';

/* harmony default export */ __webpack_exports__["default"] = (_gif__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/media/svg.js":
/*!*****************************************************************************!*\
  !*** ../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/media/svg.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtb' + 'G5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBpZD0ic3ZnIj48dGV4dCB4PSIxMCIgeT0iMjAiIGlkPSJ' + 'zdmctbGluay10ZXh0Ij50ZXh0PC90ZXh0Pjwvc3ZnPg==');

/***/ }),

/***/ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/supports-cache.js":
/*!**********************************************************************************!*\
  !*** ../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/supports-cache.js ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../version */ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/version.js");
/*
    Facility to cache test results in localStorage.

    USAGE:
      cache.get('key');
      cache.set('key', 'value');
 */

function readLocalStorage(key) {
  // allow reading from storage to retrieve previous support results
  // even while the document does not have focus
  let data;
  try {
    data = window.localStorage && window.localStorage.getItem(key);
    data = data ? JSON.parse(data) : {};
  } catch (e) {
    data = {};
  }
  return data;
}
function writeLocalStorage(key, value) {
  if (!document.hasFocus()) {
    // if the document does not have focus when tests are executed, focus() may
    // not be handled properly and events may not be dispatched immediately.
    // This can happen when a document is reloaded while Developer Tools have focus.
    try {
      window.localStorage && window.localStorage.removeItem(key);
    } catch (e) {
      // ignore
    }
    return;
  }
  try {
    window.localStorage && window.localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    // ignore
  }
}
const userAgent = typeof window !== 'undefined' && window.navigator.userAgent || '';
const cacheKey = 'ally-supports-cache';
let cache = readLocalStorage(cacheKey);
// update the cache if ally or the user agent changed (newer version, etc)
if (cache.userAgent !== userAgent || cache.version !== _version__WEBPACK_IMPORTED_MODULE_0__["default"]) {
  cache = {};
}
cache.userAgent = userAgent;
cache.version = _version__WEBPACK_IMPORTED_MODULE_0__["default"];
/* harmony default export */ __webpack_exports__["default"] = ({
  get: function () {
    return cache;
  },
  set: function (values) {
    Object.keys(values).forEach(function (key) {
      cache[key] = values[key];
    });
    cache.time = new Date().toISOString();
    writeLocalStorage(cacheKey, cache);
  }
});

/***/ }),

/***/ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/supports.js":
/*!****************************************************************************!*\
  !*** ../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/supports.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }
/* harmony export */ });
/* harmony import */ var _detect_focus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detect-focus */ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/detect-focus.js");
/* harmony import */ var _supports_cache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./supports-cache */ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/supports-cache.js");
/* harmony import */ var _css_shadow_piercing_deep_combinator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css-shadow-piercing-deep-combinator */ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/css-shadow-piercing-deep-combinator.js");
/* harmony import */ var _focus_area_img_tabindex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./focus-area-img-tabindex */ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/focus-area-img-tabindex.js");
/* harmony import */ var _focus_area_tabindex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./focus-area-tabindex */ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/focus-area-tabindex.js");
/* harmony import */ var _focus_area_without_href__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./focus-area-without-href */ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/focus-area-without-href.js");
/* harmony import */ var _focus_audio_without_controls__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./focus-audio-without-controls */ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/focus-audio-without-controls.js");
/* harmony import */ var _focus_broken_image_map__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./focus-broken-image-map */ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/focus-broken-image-map.js");
/* harmony import */ var _focus_children_of_focusable_flexbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./focus-children-of-focusable-flexbox */ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/focus-children-of-focusable-flexbox.js");
/* harmony import */ var _focus_fieldset_disabled__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./focus-fieldset-disabled */ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/focus-fieldset-disabled.js");
/* harmony import */ var _focus_fieldset__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./focus-fieldset */ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/focus-fieldset.js");
/* harmony import */ var _focus_flexbox_container__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./focus-flexbox-container */ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/focus-flexbox-container.js");
/* harmony import */ var _focus_form_disabled__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./focus-form-disabled */ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/focus-form-disabled.js");
/* harmony import */ var _focus_img_ismap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./focus-img-ismap */ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/focus-img-ismap.js");
/* harmony import */ var _focus_img_usemap_tabindex__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./focus-img-usemap-tabindex */ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/focus-img-usemap-tabindex.js");
/* harmony import */ var _focus_in_hidden_iframe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./focus-in-hidden-iframe */ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/focus-in-hidden-iframe.js");
/* harmony import */ var _focus_in_zero_dimension_object__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./focus-in-zero-dimension-object */ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/focus-in-zero-dimension-object.js");
/* harmony import */ var _focus_invalid_tabindex__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./focus-invalid-tabindex */ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/focus-invalid-tabindex.js");
/* harmony import */ var _focus_label_tabindex__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./focus-label-tabindex */ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/focus-label-tabindex.js");
/* harmony import */ var _focus_object_svg_hidden__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./focus-object-svg-hidden */ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/focus-object-svg-hidden.js");
/* harmony import */ var _focus_object_svg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./focus-object-svg */ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/focus-object-svg.js");
/* harmony import */ var _focus_object_swf__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./focus-object-swf */ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/focus-object-swf.js");
/* harmony import */ var _focus_redirect_img_usemap__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./focus-redirect-img-usemap */ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/focus-redirect-img-usemap.js");
/* harmony import */ var _focus_redirect_legend__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./focus-redirect-legend */ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/focus-redirect-legend.js");
/* harmony import */ var _focus_scroll_body__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./focus-scroll-body */ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/focus-scroll-body.js");
/* harmony import */ var _focus_scroll_container_without_overflow__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./focus-scroll-container-without-overflow */ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/focus-scroll-container-without-overflow.js");
/* harmony import */ var _focus_scroll_container__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./focus-scroll-container */ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/focus-scroll-container.js");
/* harmony import */ var _focus_summary__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./focus-summary */ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/focus-summary.js");
/* harmony import */ var _focus_svg_focusable_attribute__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./focus-svg-focusable-attribute */ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/focus-svg-focusable-attribute.js");
/* harmony import */ var _focus_svg_tabindex_attribute__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./focus-svg-tabindex-attribute */ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/focus-svg-tabindex-attribute.js");
/* harmony import */ var _focus_svg_negative_tabindex_attribute__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./focus-svg-negative-tabindex-attribute */ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/focus-svg-negative-tabindex-attribute.js");
/* harmony import */ var _focus_svg_use_tabindex__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./focus-svg-use-tabindex */ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/focus-svg-use-tabindex.js");
/* harmony import */ var _focus_svg_foreignobject_tabindex__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./focus-svg-foreignobject-tabindex */ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/focus-svg-foreignobject-tabindex.js");
/* harmony import */ var _focus_svg_in_iframe__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./focus-svg-in-iframe */ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/focus-svg-in-iframe.js");
/* harmony import */ var _focus_svg__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./focus-svg */ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/focus-svg.js");
/* harmony import */ var _focus_tabindex_trailing_characters__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./focus-tabindex-trailing-characters */ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/focus-tabindex-trailing-characters.js");
/* harmony import */ var _focus_table__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./focus-table */ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/focus-table.js");
/* harmony import */ var _focus_video_without_controls__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./focus-video-without-controls */ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/focus-video-without-controls.js");
/* harmony import */ var _tabsequence_area_at_img_position__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./tabsequence-area-at-img-position */ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/tabsequence-area-at-img-position.js");







































const testCallbacks = {
  cssShadowPiercingDeepCombinator: _css_shadow_piercing_deep_combinator__WEBPACK_IMPORTED_MODULE_2__["default"],
  focusInZeroDimensionObject: _focus_in_zero_dimension_object__WEBPACK_IMPORTED_MODULE_16__["default"],
  focusObjectSwf: _focus_object_swf__WEBPACK_IMPORTED_MODULE_21__["default"],
  focusSvgInIframe: _focus_svg_in_iframe__WEBPACK_IMPORTED_MODULE_33__["default"],
  tabsequenceAreaAtImgPosition: _tabsequence_area_at_img_position__WEBPACK_IMPORTED_MODULE_38__["default"]
};
const testDescriptions = {
  focusAreaImgTabindex: _focus_area_img_tabindex__WEBPACK_IMPORTED_MODULE_3__["default"],
  focusAreaTabindex: _focus_area_tabindex__WEBPACK_IMPORTED_MODULE_4__["default"],
  focusAreaWithoutHref: _focus_area_without_href__WEBPACK_IMPORTED_MODULE_5__["default"],
  focusAudioWithoutControls: _focus_audio_without_controls__WEBPACK_IMPORTED_MODULE_6__["default"],
  focusBrokenImageMap: _focus_broken_image_map__WEBPACK_IMPORTED_MODULE_7__["default"],
  focusChildrenOfFocusableFlexbox: _focus_children_of_focusable_flexbox__WEBPACK_IMPORTED_MODULE_8__["default"],
  focusFieldsetDisabled: _focus_fieldset_disabled__WEBPACK_IMPORTED_MODULE_9__["default"],
  focusFieldset: _focus_fieldset__WEBPACK_IMPORTED_MODULE_10__["default"],
  focusFlexboxContainer: _focus_flexbox_container__WEBPACK_IMPORTED_MODULE_11__["default"],
  focusFormDisabled: _focus_form_disabled__WEBPACK_IMPORTED_MODULE_12__["default"],
  focusImgIsmap: _focus_img_ismap__WEBPACK_IMPORTED_MODULE_13__["default"],
  focusImgUsemapTabindex: _focus_img_usemap_tabindex__WEBPACK_IMPORTED_MODULE_14__["default"],
  focusInHiddenIframe: _focus_in_hidden_iframe__WEBPACK_IMPORTED_MODULE_15__["default"],
  focusInvalidTabindex: _focus_invalid_tabindex__WEBPACK_IMPORTED_MODULE_17__["default"],
  focusLabelTabindex: _focus_label_tabindex__WEBPACK_IMPORTED_MODULE_18__["default"],
  focusObjectSvg: _focus_object_svg__WEBPACK_IMPORTED_MODULE_20__["default"],
  focusObjectSvgHidden: _focus_object_svg_hidden__WEBPACK_IMPORTED_MODULE_19__["default"],
  focusRedirectImgUsemap: _focus_redirect_img_usemap__WEBPACK_IMPORTED_MODULE_22__["default"],
  focusRedirectLegend: _focus_redirect_legend__WEBPACK_IMPORTED_MODULE_23__["default"],
  focusScrollBody: _focus_scroll_body__WEBPACK_IMPORTED_MODULE_24__["default"],
  focusScrollContainerWithoutOverflow: _focus_scroll_container_without_overflow__WEBPACK_IMPORTED_MODULE_25__["default"],
  focusScrollContainer: _focus_scroll_container__WEBPACK_IMPORTED_MODULE_26__["default"],
  focusSummary: _focus_summary__WEBPACK_IMPORTED_MODULE_27__["default"],
  focusSvgFocusableAttribute: _focus_svg_focusable_attribute__WEBPACK_IMPORTED_MODULE_28__["default"],
  focusSvgTabindexAttribute: _focus_svg_tabindex_attribute__WEBPACK_IMPORTED_MODULE_29__["default"],
  focusSvgNegativeTabindexAttribute: _focus_svg_negative_tabindex_attribute__WEBPACK_IMPORTED_MODULE_30__["default"],
  focusSvgUseTabindex: _focus_svg_use_tabindex__WEBPACK_IMPORTED_MODULE_31__["default"],
  focusSvgForeignobjectTabindex: _focus_svg_foreignobject_tabindex__WEBPACK_IMPORTED_MODULE_32__["default"],
  focusSvg: _focus_svg__WEBPACK_IMPORTED_MODULE_34__["default"],
  focusTabindexTrailingCharacters: _focus_tabindex_trailing_characters__WEBPACK_IMPORTED_MODULE_35__["default"],
  focusTable: _focus_table__WEBPACK_IMPORTED_MODULE_36__["default"],
  focusVideoWithoutControls: _focus_video_without_controls__WEBPACK_IMPORTED_MODULE_37__["default"]
};
function executeTests() {
  const results = (0,_detect_focus__WEBPACK_IMPORTED_MODULE_0__["default"])(testDescriptions);
  Object.keys(testCallbacks).forEach(function (key) {
    results[key] = testCallbacks[key]();
  });
  return results;
}
let supportsCache = null;
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  if (supportsCache) {
    return supportsCache;
  }
  supportsCache = _supports_cache__WEBPACK_IMPORTED_MODULE_1__["default"].get();
  if (!supportsCache.time) {
    _supports_cache__WEBPACK_IMPORTED_MODULE_1__["default"].set(executeTests());
    supportsCache = _supports_cache__WEBPACK_IMPORTED_MODULE_1__["default"].get();
  }
  return supportsCache;
}

/***/ }),

/***/ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/tabsequence-area-at-img-position.js":
/*!****************************************************************************************************!*\
  !*** ../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/tabsequence-area-at-img-position.js ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }
/* harmony export */ });
/* harmony import */ var _util_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/platform */ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/util/platform.js");

// https://jsbin.com/vafaba/3/edit?html,js,console,output
const result = _util_platform__WEBPACK_IMPORTED_MODULE_0__["default"].is.GECKO || _util_platform__WEBPACK_IMPORTED_MODULE_0__["default"].is.TRIDENT || _util_platform__WEBPACK_IMPORTED_MODULE_0__["default"].is.EDGE;
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  return result;
}

/***/ }),

/***/ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/util/array-find-index.js":
/*!********************************************************************************!*\
  !*** ../src/Dlw.EpiBase.Web/node_modules/ally.js/src/util/array-find-index.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ findIndex; }
/* harmony export */ });
function findIndex(array, callback) {
  // attempt to use native or polyfilled Array#findIndex first
  if (array.findIndex) {
    return array.findIndex(callback);
  }
  const length = array.length;
  // shortcut if the array is empty
  if (length === 0) {
    return -1;
  }
  // otherwise loop over array
  for (let i = 0; i < length; i++) {
    if (callback(array[i], i, array)) {
      return i;
    }
  }
  return -1;
}

/***/ }),

/***/ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/util/context-to-element.js":
/*!**********************************************************************************!*\
  !*** ../src/Dlw.EpiBase.Web/node_modules/ally.js/src/util/context-to-element.js ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }
/* harmony export */ });
/* harmony import */ var _util_node_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/node-array */ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/util/node-array.js");

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(_ref) {
  let {
    context,
    label = 'context-to-element',
    resolveDocument,
    defaultToDocument
  } = _ref;
  let element = (0,_util_node_array__WEBPACK_IMPORTED_MODULE_0__["default"])(context)[0];
  if (resolveDocument && element && element.nodeType === Node.DOCUMENT_NODE) {
    element = element.documentElement;
  }
  if (!element && defaultToDocument) {
    return document.documentElement;
  }
  if (!element) {
    throw new TypeError(label + ' requires valid options.context');
  }
  if (element.nodeType !== Node.ELEMENT_NODE && element.nodeType !== Node.DOCUMENT_FRAGMENT_NODE) {
    throw new TypeError(label + ' requires options.context to be an Element');
  }
  return element;
}

/***/ }),

/***/ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/util/element-matches.js":
/*!*******************************************************************************!*\
  !*** ../src/Dlw.EpiBase.Web/node_modules/ally.js/src/util/element-matches.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ elementMatches; }
/* harmony export */ });
// Element.prototype.matches may be available at a different name
// https://developer.mozilla.org/en/docs/Web/API/Element/matches
const names = ['matches', 'webkitMatchesSelector', 'mozMatchesSelector', 'msMatchesSelector'];
let name = null;
function findMethodName(element) {
  names.some(function (_name) {
    if (!element[_name]) {
      return false;
    }
    name = _name;
    return true;
  });
}
function elementMatches(element, selector) {
  if (!name) {
    findMethodName(element);
  }
  return element[name](selector);
}

/***/ }),

/***/ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/util/get-content-document.js":
/*!************************************************************************************!*\
  !*** ../src/Dlw.EpiBase.Web/node_modules/ally.js/src/util/get-content-document.js ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(node) {
  try {
    // works on <object> and <iframe>
    return node.contentDocument
    // works on <object> and <iframe>
    || node.contentWindow && node.contentWindow.document
    // works on <object> and <iframe> that contain SVG
    || node.getSVGDocument && node.getSVGDocument() || null;
  } catch (e) {
    // SecurityError: Failed to read the 'contentDocument' property from 'HTMLObjectElement'
    // also IE may throw member not found exception e.g. on <object type="image/png">
    return null;
  }
}

/***/ }),

/***/ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/util/get-document.js":
/*!****************************************************************************!*\
  !*** ../src/Dlw.EpiBase.Web/node_modules/ally.js/src/util/get-document.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(node) {
  if (!node) {
    return document;
  }
  if (node.nodeType === Node.DOCUMENT_NODE) {
    return node;
  }
  return node.ownerDocument || document;
}

/***/ }),

/***/ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/util/get-frame-element.js":
/*!*********************************************************************************!*\
  !*** ../src/Dlw.EpiBase.Web/node_modules/ally.js/src/util/get-frame-element.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ getFrameElement; }
/* harmony export */ });
/* harmony import */ var _get_content_document__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-content-document */ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/util/get-content-document.js");
/* harmony import */ var _get_window__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-window */ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/util/get-window.js");
/* harmony import */ var _select_in_shadows__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./select-in-shadows */ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/util/select-in-shadows.js");



let selector;
function findDocumentHostElement(_window) {
  if (!selector) {
    selector = (0,_select_in_shadows__WEBPACK_IMPORTED_MODULE_2__["default"])('object, iframe');
  }
  if (_window._frameElement !== undefined) {
    return _window._frameElement;
  }
  _window._frameElement = null;
  const potentialHosts = _window.parent.document.querySelectorAll(selector);
  [].some.call(potentialHosts, function (element) {
    const _document = (0,_get_content_document__WEBPACK_IMPORTED_MODULE_0__["default"])(element);
    if (_document !== _window.document) {
      return false;
    }
    _window._frameElement = element;
    return true;
  });
  return _window._frameElement;
}
function getFrameElement(element) {
  const _window = (0,_get_window__WEBPACK_IMPORTED_MODULE_1__["default"])(element);
  if (!_window.parent || _window.parent === _window) {
    // if there is no parent browsing context,
    // we're not going to get a frameElement either way
    return null;
  }
  try {
    // see https://developer.mozilla.org/en-US/docs/Web/API/Window/frameElement
    // does not work within <embed> anywhere, and not within in <object> in IE
    return _window.frameElement || findDocumentHostElement(_window);
  } catch (e) {
    return null;
  }
}

/***/ }),

/***/ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/util/get-window.js":
/*!**************************************************************************!*\
  !*** ../src/Dlw.EpiBase.Web/node_modules/ally.js/src/util/get-window.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }
/* harmony export */ });
/* harmony import */ var _get_document__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-document */ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/util/get-document.js");

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(node) {
  const _document = (0,_get_document__WEBPACK_IMPORTED_MODULE_0__["default"])(node);
  return _document.defaultView || window;
}

/***/ }),

/***/ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/util/image-map.js":
/*!*************************************************************************!*\
  !*** ../src/Dlw.EpiBase.Web/node_modules/ally.js/src/util/image-map.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getImageOfArea": function() { return /* binding */ getImageOfArea; },
/* harmony export */   "getMapByName": function() { return /* binding */ getMapByName; },
/* harmony export */   "getMapOfImage": function() { return /* binding */ getMapOfImage; }
/* harmony export */ });
/* harmony import */ var css_escape__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! css.escape */ "../src/Dlw.EpiBase.Web/node_modules/css.escape/css.escape.js");
/* harmony import */ var css_escape__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(css_escape__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_get_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/get-document */ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/util/get-document.js");


function getMapByName(name, _document) {
  // apparently getElementsByName() also considers id attribute in IE & opera
  // https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByName
  const map = _document.querySelector('map[name="' + css_escape__WEBPACK_IMPORTED_MODULE_0___default()(name) + '"]');
  return map || null;
}
function getMapOfImage(element) {
  const usemap = element.getAttribute('usemap');
  if (!usemap) {
    return null;
  }
  const _document = (0,_util_get_document__WEBPACK_IMPORTED_MODULE_1__["default"])(element);
  return getMapByName(usemap.slice(1), _document);
}
function getImageOfArea(element) {
  const map = element.parentElement;
  if (!map.name || map.nodeName.toLowerCase() !== 'map') {
    return null;
  }
  // NOTE: image maps can also be applied to <object> with image content,
  // but no browser supports this at the moment
  // HTML5 specifies HTMLMapElement.images to be an HTMLCollection of all
  // <img> and <object> referencing the <map> element, but no browser implements this
  //   https://www.w3.org/TR/html5/embedded-content-0.html#the-map-element
  //   https://developer.mozilla.org/en-US/docs/Web/API/HTMLMapElement
  // the image must be valid and loaded for the map to take effect
  const _document = (0,_util_get_document__WEBPACK_IMPORTED_MODULE_1__["default"])(element);
  return _document.querySelector('img[usemap="#' + css_escape__WEBPACK_IMPORTED_MODULE_0___default()(map.name) + '"]') || null;
}

/***/ }),

/***/ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/util/node-array.js":
/*!**************************************************************************!*\
  !*** ../src/Dlw.EpiBase.Web/node_modules/ally.js/src/util/node-array.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }
/* harmony export */ });
// input may be undefined, selector-tring, Node, NodeList, HTMLCollection, array of Nodes
// yes, to some extent this is a bad replica of jQuery's constructor function
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(input) {
  if (!input) {
    return [];
  }
  if (Array.isArray(input)) {
    return input;
  }
  // instanceof Node - does not work with iframes
  if (input.nodeType !== undefined) {
    return [input];
  }
  if (typeof input === 'string') {
    input = document.querySelectorAll(input);
  }
  if (input.length !== undefined) {
    return [].slice.call(input, 0);
  }
  throw new TypeError('unexpected input ' + String(input));
}

/***/ }),

/***/ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/util/platform.js":
/*!************************************************************************!*\
  !*** ../src/Dlw.EpiBase.Web/node_modules/ally.js/src/util/platform.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! platform */ "../src/Dlw.EpiBase.Web/node_modules/platform/platform.js");
/* harmony import */ var platform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(platform__WEBPACK_IMPORTED_MODULE_0__);
// sugar for https://github.com/bestiejs/platform.js
// make sure to ALWAYS reference the layout engine,
// even if it is not necessary for the condition,
// as this makes grepping for this stuff simpler

// deep clone of original platform
const platform = JSON.parse(JSON.stringify((platform__WEBPACK_IMPORTED_MODULE_0___default())));
// operating system
const os = platform.os.family || '';
const ANDROID = os === 'Android';
const WINDOWS = os.slice(0, 7) === 'Windows';
const OSX = os === 'OS X';
const IOS = os === 'iOS';
// layout
const BLINK = platform.layout === 'Blink';
const GECKO = platform.layout === 'Gecko';
const TRIDENT = platform.layout === 'Trident';
const EDGE = platform.layout === 'EdgeHTML';
const WEBKIT = platform.layout === 'WebKit';
// browser version (not layout engine version!)
const version = parseFloat(platform.version);
const majorVersion = Math.floor(version);
platform.majorVersion = majorVersion;
platform.is = {
  // operating system
  ANDROID,
  WINDOWS,
  OSX,
  IOS,
  // layout
  BLINK,
  GECKO,
  TRIDENT,
  EDGE,
  WEBKIT,
  // INTERNET EXPLORERS
  IE9: TRIDENT && majorVersion === 9,
  IE10: TRIDENT && majorVersion === 10,
  IE11: TRIDENT && majorVersion === 11
};
/* harmony default export */ __webpack_exports__["default"] = (platform);

/***/ }),

/***/ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/util/select-in-shadows.js":
/*!*********************************************************************************!*\
  !*** ../src/Dlw.EpiBase.Web/node_modules/ally.js/src/util/select-in-shadows.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }
/* harmony export */ });
/* harmony import */ var _supports_css_shadow_piercing_deep_combinator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../supports/css-shadow-piercing-deep-combinator */ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/supports/css-shadow-piercing-deep-combinator.js");
// convert a CSS selector so that it also pierces ShadowDOM
// takes ".a, #b" and turns it into ".a, #b, html >>> .a, html >>> #b"

let shadowPrefix;
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(selector) {
  if (typeof shadowPrefix !== 'string') {
    const operator = (0,_supports_css_shadow_piercing_deep_combinator__WEBPACK_IMPORTED_MODULE_0__["default"])();
    if (operator) {
      shadowPrefix = ', html ' + operator + ' ';
    }
  }
  if (!shadowPrefix) {
    return selector;
  }
  return selector + shadowPrefix + selector.replace(/\s*,\s*/g, ',').split(',').join(shadowPrefix);
}

/***/ }),

/***/ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/util/tabindex-value.js":
/*!******************************************************************************!*\
  !*** ../src/Dlw.EpiBase.Web/node_modules/ally.js/src/util/tabindex-value.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }
/* harmony export */ });
/* harmony import */ var _is_valid_tabindex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../is/valid-tabindex */ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/is/valid-tabindex.js");

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(element) {
  if (!(0,_is_valid_tabindex__WEBPACK_IMPORTED_MODULE_0__["default"])(element)) {
    return null;
  }
  // Edge 14 has a capitalization problem on SVG elements,
  // see https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/9282058/
  const hasTabindex = element.hasAttribute('tabindex');
  const attributeName = hasTabindex ? 'tabindex' : 'tabIndex';
  // @browser-issue Gecko https://bugzilla.mozilla.org/show_bug.cgi?id=1128054
  const tabindex = parseInt(element.getAttribute(attributeName), 10);
  return isNaN(tabindex) ? -1 : tabindex;
}

/***/ }),

/***/ "../src/Dlw.EpiBase.Web/node_modules/ally.js/src/version.js":
/*!******************************************************************!*\
  !*** ../src/Dlw.EpiBase.Web/node_modules/ally.js/src/version.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// this file is overwritten by `npm run build:pre`
const version = '1.4.1';
/* harmony default export */ __webpack_exports__["default"] = (version);

/***/ }),

/***/ "../src/Dlw.EpiBase.Web/node_modules/countup.js/dist/countUp.min.js":
/*!**************************************************************************!*\
  !*** ../src/Dlw.EpiBase.Web/node_modules/countup.js/dist/countUp.min.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CountUp": function() { return /* binding */ i; }
/* harmony export */ });
var t = function () {
    return t = Object.assign || function (t) {
      for (var i, n = 1, s = arguments.length; n < s; n++) for (var a in i = arguments[n]) Object.prototype.hasOwnProperty.call(i, a) && (t[a] = i[a]);
      return t;
    }, t.apply(this, arguments);
  },
  i = function () {
    function i(i, n, s) {
      var a = this;
      this.endVal = n, this.options = s, this.version = "2.8.0", this.defaults = {
        startVal: 0,
        decimalPlaces: 0,
        duration: 2,
        useEasing: !0,
        useGrouping: !0,
        useIndianSeparators: !1,
        smartEasingThreshold: 999,
        smartEasingAmount: 333,
        separator: ",",
        decimal: ".",
        prefix: "",
        suffix: "",
        enableScrollSpy: !1,
        scrollSpyDelay: 200,
        scrollSpyOnce: !1
      }, this.finalEndVal = null, this.useEasing = !0, this.countDown = !1, this.error = "", this.startVal = 0, this.paused = !0, this.once = !1, this.count = function (t) {
        a.startTime || (a.startTime = t);
        var i = t - a.startTime;
        a.remaining = a.duration - i, a.useEasing ? a.countDown ? a.frameVal = a.startVal - a.easingFn(i, 0, a.startVal - a.endVal, a.duration) : a.frameVal = a.easingFn(i, a.startVal, a.endVal - a.startVal, a.duration) : a.frameVal = a.startVal + (a.endVal - a.startVal) * (i / a.duration);
        var n = a.countDown ? a.frameVal < a.endVal : a.frameVal > a.endVal;
        a.frameVal = n ? a.endVal : a.frameVal, a.frameVal = Number(a.frameVal.toFixed(a.options.decimalPlaces)), a.printValue(a.frameVal), i < a.duration ? a.rAF = requestAnimationFrame(a.count) : null !== a.finalEndVal ? a.update(a.finalEndVal) : a.options.onCompleteCallback && a.options.onCompleteCallback();
      }, this.formatNumber = function (t) {
        var i,
          n,
          s,
          e,
          o = t < 0 ? "-" : "";
        i = Math.abs(t).toFixed(a.options.decimalPlaces);
        var r = (i += "").split(".");
        if (n = r[0], s = r.length > 1 ? a.options.decimal + r[1] : "", a.options.useGrouping) {
          e = "";
          for (var l = 3, h = 0, u = 0, p = n.length; u < p; ++u) a.options.useIndianSeparators && 4 === u && (l = 2, h = 1), 0 !== u && h % l == 0 && (e = a.options.separator + e), h++, e = n[p - u - 1] + e;
          n = e;
        }
        return a.options.numerals && a.options.numerals.length && (n = n.replace(/[0-9]/g, function (t) {
          return a.options.numerals[+t];
        }), s = s.replace(/[0-9]/g, function (t) {
          return a.options.numerals[+t];
        })), o + a.options.prefix + n + s + a.options.suffix;
      }, this.easeOutExpo = function (t, i, n, s) {
        return n * (1 - Math.pow(2, -10 * t / s)) * 1024 / 1023 + i;
      }, this.options = t(t({}, this.defaults), s), this.formattingFn = this.options.formattingFn ? this.options.formattingFn : this.formatNumber, this.easingFn = this.options.easingFn ? this.options.easingFn : this.easeOutExpo, this.startVal = this.validateValue(this.options.startVal), this.frameVal = this.startVal, this.endVal = this.validateValue(n), this.options.decimalPlaces = Math.max(this.options.decimalPlaces), this.resetDuration(), this.options.separator = String(this.options.separator), this.useEasing = this.options.useEasing, "" === this.options.separator && (this.options.useGrouping = !1), this.el = "string" == typeof i ? document.getElementById(i) : i, this.el ? this.printValue(this.startVal) : this.error = "[CountUp] target is null or undefined", "undefined" != typeof window && this.options.enableScrollSpy && (this.error ? console.error(this.error, i) : (window.onScrollFns = window.onScrollFns || [], window.onScrollFns.push(function () {
        return a.handleScroll(a);
      }), window.onscroll = function () {
        window.onScrollFns.forEach(function (t) {
          return t();
        });
      }, this.handleScroll(this)));
    }
    return i.prototype.handleScroll = function (t) {
      if (t && window && !t.once) {
        var i = window.innerHeight + window.scrollY,
          n = t.el.getBoundingClientRect(),
          s = n.top + window.pageYOffset,
          a = n.top + n.height + window.pageYOffset;
        a < i && a > window.scrollY && t.paused ? (t.paused = !1, setTimeout(function () {
          return t.start();
        }, t.options.scrollSpyDelay), t.options.scrollSpyOnce && (t.once = !0)) : (window.scrollY > a || s > i) && !t.paused && t.reset();
      }
    }, i.prototype.determineDirectionAndSmartEasing = function () {
      var t = this.finalEndVal ? this.finalEndVal : this.endVal;
      this.countDown = this.startVal > t;
      var i = t - this.startVal;
      if (Math.abs(i) > this.options.smartEasingThreshold && this.options.useEasing) {
        this.finalEndVal = t;
        var n = this.countDown ? 1 : -1;
        this.endVal = t + n * this.options.smartEasingAmount, this.duration = this.duration / 2;
      } else this.endVal = t, this.finalEndVal = null;
      null !== this.finalEndVal ? this.useEasing = !1 : this.useEasing = this.options.useEasing;
    }, i.prototype.start = function (t) {
      this.error || (this.options.onStartCallback && this.options.onStartCallback(), t && (this.options.onCompleteCallback = t), this.duration > 0 ? (this.determineDirectionAndSmartEasing(), this.paused = !1, this.rAF = requestAnimationFrame(this.count)) : this.printValue(this.endVal));
    }, i.prototype.pauseResume = function () {
      this.paused ? (this.startTime = null, this.duration = this.remaining, this.startVal = this.frameVal, this.determineDirectionAndSmartEasing(), this.rAF = requestAnimationFrame(this.count)) : cancelAnimationFrame(this.rAF), this.paused = !this.paused;
    }, i.prototype.reset = function () {
      cancelAnimationFrame(this.rAF), this.paused = !0, this.resetDuration(), this.startVal = this.validateValue(this.options.startVal), this.frameVal = this.startVal, this.printValue(this.startVal);
    }, i.prototype.update = function (t) {
      cancelAnimationFrame(this.rAF), this.startTime = null, this.endVal = this.validateValue(t), this.endVal !== this.frameVal && (this.startVal = this.frameVal, null == this.finalEndVal && this.resetDuration(), this.finalEndVal = null, this.determineDirectionAndSmartEasing(), this.rAF = requestAnimationFrame(this.count));
    }, i.prototype.printValue = function (t) {
      var i;
      if (this.el) {
        var n = this.formattingFn(t);
        if (null === (i = this.options.plugin) || void 0 === i ? void 0 : i.render) this.options.plugin.render(this.el, n);else if ("INPUT" === this.el.tagName) this.el.value = n;else "text" === this.el.tagName || "tspan" === this.el.tagName ? this.el.textContent = n : this.el.innerHTML = n;
      }
    }, i.prototype.ensureNumber = function (t) {
      return "number" == typeof t && !isNaN(t);
    }, i.prototype.validateValue = function (t) {
      var i = Number(t);
      return this.ensureNumber(i) ? i : (this.error = "[CountUp] invalid start or end value: ".concat(t), null);
    }, i.prototype.resetDuration = function () {
      this.startTime = null, this.duration = 1e3 * Number(this.options.duration), this.remaining = this.duration;
    }, i;
  }();


/***/ }),

/***/ "../src/Dlw.EpiBase.Web/node_modules/css.escape/css.escape.js":
/*!********************************************************************!*\
  !*** ../src/Dlw.EpiBase.Web/node_modules/css.escape/css.escape.js ***!
  \********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
;
(function (root, factory) {
  // https://github.com/umdjs/umd/blob/master/returnExports.js
  if (true) {
    // For Node.js.
    module.exports = factory(root);
  } else {}
})(typeof __webpack_require__.g != 'undefined' ? __webpack_require__.g : this, function (root) {
  if (root.CSS && root.CSS.escape) {
    return root.CSS.escape;
  }
  // https://drafts.csswg.org/cssom/#serialize-an-identifier
  var cssEscape = function (value) {
    if (arguments.length == 0) {
      throw new TypeError('`CSS.escape` requires an argument.');
    }
    var string = String(value);
    var length = string.length;
    var index = -1;
    var codeUnit;
    var result = '';
    var firstCodeUnit = string.charCodeAt(0);
    while (++index < length) {
      codeUnit = string.charCodeAt(index);
      // Note: there’s no need to special-case astral symbols, surrogate
      // pairs, or lone surrogates.
      // If the character is NULL (U+0000), then the REPLACEMENT CHARACTER
      // (U+FFFD).
      if (codeUnit == 0x0000) {
        result += '\uFFFD';
        continue;
      }
      if (
      // If the character is in the range [\1-\1F] (U+0001 to U+001F) or is
      // U+007F, […]
      codeUnit >= 0x0001 && codeUnit <= 0x001F || codeUnit == 0x007F ||
      // If the character is the first character and is in the range [0-9]
      // (U+0030 to U+0039), […]
      index == 0 && codeUnit >= 0x0030 && codeUnit <= 0x0039 ||
      // If the character is the second character and is in the range [0-9]
      // (U+0030 to U+0039) and the first character is a `-` (U+002D), […]
      index == 1 && codeUnit >= 0x0030 && codeUnit <= 0x0039 && firstCodeUnit == 0x002D) {
        // https://drafts.csswg.org/cssom/#escape-a-character-as-code-point
        result += '\\' + codeUnit.toString(16) + ' ';
        continue;
      }
      if (
      // If the character is the first character and is a `-` (U+002D), and
      // there is no second character, […]
      index == 0 && length == 1 && codeUnit == 0x002D) {
        result += '\\' + string.charAt(index);
        continue;
      }
      // If the character is not handled by one of the above rules and is
      // greater than or equal to U+0080, is `-` (U+002D) or `_` (U+005F), or
      // is in one of the ranges [0-9] (U+0030 to U+0039), [A-Z] (U+0041 to
      // U+005A), or [a-z] (U+0061 to U+007A), […]
      if (codeUnit >= 0x0080 || codeUnit == 0x002D || codeUnit == 0x005F || codeUnit >= 0x0030 && codeUnit <= 0x0039 || codeUnit >= 0x0041 && codeUnit <= 0x005A || codeUnit >= 0x0061 && codeUnit <= 0x007A) {
        // the character itself
        result += string.charAt(index);
        continue;
      }
      // Otherwise, the escaped character.
      // https://drafts.csswg.org/cssom/#escape-a-character
      result += '\\' + string.charAt(index);
    }
    return result;
  };
  if (!root.CSS) {
    root.CSS = {};
  }
  root.CSS.escape = cssEscape;
  return cssEscape;
});

/***/ }),

/***/ "../src/Dlw.EpiBase.Web/node_modules/platform/platform.js":
/*!****************************************************************!*\
  !*** ../src/Dlw.EpiBase.Web/node_modules/platform/platform.js ***!
  \****************************************************************/
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
var __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * Platform.js <https://mths.be/platform>
 * Copyright 2014-2016 Benjamin Tan <https://demoneaux.github.io/>
 * Copyright 2011-2013 John-David Dalton <http://allyoucanleet.com/>
 * Available under MIT license <https://mths.be/mit>
 */
;
(function () {
  'use strict';

  /** Used to determine if values are of the language type `Object`. */
  var objectTypes = {
    'function': true,
    'object': true
  };
  /** Used as a reference to the global object. */
  var root = objectTypes[typeof window] && window || this;
  /** Backup possible global object. */
  var oldRoot = root;
  /** Detect free variable `exports`. */
  var freeExports = objectTypes[typeof exports] && exports;
  /** Detect free variable `module`. */
  var freeModule = objectTypes["object"] && module && !module.nodeType && module;
  /** Detect free variable `global` from Node.js or Browserified code and use it as `root`. */
  var freeGlobal = freeExports && freeModule && typeof __webpack_require__.g == 'object' && __webpack_require__.g;
  if (freeGlobal && (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal || freeGlobal.self === freeGlobal)) {
    root = freeGlobal;
  }
  /**
   * Used as the maximum length of an array-like object.
   * See the [ES6 spec](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength)
   * for more details.
   */
  var maxSafeInteger = Math.pow(2, 53) - 1;
  /** Regular expression to detect Opera. */
  var reOpera = /\bOpera/;
  /** Possible global object. */
  var thisBinding = this;
  /** Used for native method references. */
  var objectProto = Object.prototype;
  /** Used to check for own properties of an object. */
  var hasOwnProperty = objectProto.hasOwnProperty;
  /** Used to resolve the internal `[[Class]]` of values. */
  var toString = objectProto.toString;
  /*--------------------------------------------------------------------------*/
  /**
   * Capitalizes a string value.
   *
   * @private
   * @param {string} string The string to capitalize.
   * @returns {string} The capitalized string.
   */
  function capitalize(string) {
    string = String(string);
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  /**
   * A utility function to clean up the OS name.
   *
   * @private
   * @param {string} os The OS name to clean up.
   * @param {string} [pattern] A `RegExp` pattern matching the OS name.
   * @param {string} [label] A label for the OS.
   */
  function cleanupOS(os, pattern, label) {
    // Platform tokens are defined at:
    // http://msdn.microsoft.com/en-us/library/ms537503(VS.85).aspx
    // http://web.archive.org/web/20081122053950/http://msdn.microsoft.com/en-us/library/ms537503(VS.85).aspx
    var data = {
      '10.0': '10',
      '6.4': '10 Technical Preview',
      '6.3': '8.1',
      '6.2': '8',
      '6.1': 'Server 2008 R2 / 7',
      '6.0': 'Server 2008 / Vista',
      '5.2': 'Server 2003 / XP 64-bit',
      '5.1': 'XP',
      '5.01': '2000 SP1',
      '5.0': '2000',
      '4.0': 'NT',
      '4.90': 'ME'
    };
    // Detect Windows version from platform tokens.
    if (pattern && label && /^Win/i.test(os) && !/^Windows Phone /i.test(os) && (data = data[/[\d.]+$/.exec(os)])) {
      os = 'Windows ' + data;
    }
    // Correct character case and cleanup string.
    os = String(os);
    if (pattern && label) {
      os = os.replace(RegExp(pattern, 'i'), label);
    }
    os = format(os.replace(/ ce$/i, ' CE').replace(/\bhpw/i, 'web').replace(/\bMacintosh\b/, 'Mac OS').replace(/_PowerPC\b/i, ' OS').replace(/\b(OS X) [^ \d]+/i, '$1').replace(/\bMac (OS X)\b/, '$1').replace(/\/(\d)/, ' $1').replace(/_/g, '.').replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, '').replace(/\bx86\.64\b/gi, 'x86_64').replace(/\b(Windows Phone) OS\b/, '$1').replace(/\b(Chrome OS \w+) [\d.]+\b/, '$1').split(' on ')[0]);
    return os;
  }
  /**
   * An iteration utility for arrays and objects.
   *
   * @private
   * @param {Array|Object} object The object to iterate over.
   * @param {Function} callback The function called per iteration.
   */
  function each(object, callback) {
    var index = -1,
      length = object ? object.length : 0;
    if (typeof length == 'number' && length > -1 && length <= maxSafeInteger) {
      while (++index < length) {
        callback(object[index], index, object);
      }
    } else {
      forOwn(object, callback);
    }
  }
  /**
   * Trim and conditionally capitalize string values.
   *
   * @private
   * @param {string} string The string to format.
   * @returns {string} The formatted string.
   */
  function format(string) {
    string = trim(string);
    return /^(?:webOS|i(?:OS|P))/.test(string) ? string : capitalize(string);
  }
  /**
   * Iterates over an object's own properties, executing the `callback` for each.
   *
   * @private
   * @param {Object} object The object to iterate over.
   * @param {Function} callback The function executed per own property.
   */
  function forOwn(object, callback) {
    for (var key in object) {
      if (hasOwnProperty.call(object, key)) {
        callback(object[key], key, object);
      }
    }
  }
  /**
   * Gets the internal `[[Class]]` of a value.
   *
   * @private
   * @param {*} value The value.
   * @returns {string} The `[[Class]]`.
   */
  function getClassOf(value) {
    return value == null ? capitalize(value) : toString.call(value).slice(8, -1);
  }
  /**
   * Host objects can return type values that are different from their actual
   * data type. The objects we are concerned with usually return non-primitive
   * types of "object", "function", or "unknown".
   *
   * @private
   * @param {*} object The owner of the property.
   * @param {string} property The property to check.
   * @returns {boolean} Returns `true` if the property value is a non-primitive, else `false`.
   */
  function isHostType(object, property) {
    var type = object != null ? typeof object[property] : 'number';
    return !/^(?:boolean|number|string|undefined)$/.test(type) && (type == 'object' ? !!object[property] : true);
  }
  /**
   * Prepares a string for use in a `RegExp` by making hyphens and spaces optional.
   *
   * @private
   * @param {string} string The string to qualify.
   * @returns {string} The qualified string.
   */
  function qualify(string) {
    return String(string).replace(/([ -])(?!$)/g, '$1?');
  }
  /**
   * A bare-bones `Array#reduce` like utility function.
   *
   * @private
   * @param {Array} array The array to iterate over.
   * @param {Function} callback The function called per iteration.
   * @returns {*} The accumulated result.
   */
  function reduce(array, callback) {
    var accumulator = null;
    each(array, function (value, index) {
      accumulator = callback(accumulator, value, index, array);
    });
    return accumulator;
  }
  /**
   * Removes leading and trailing whitespace from a string.
   *
   * @private
   * @param {string} string The string to trim.
   * @returns {string} The trimmed string.
   */
  function trim(string) {
    return String(string).replace(/^ +| +$/g, '');
  }
  /*--------------------------------------------------------------------------*/
  /**
   * Creates a new platform object.
   *
   * @memberOf platform
   * @param {Object|string} [ua=navigator.userAgent] The user agent string or
   *  context object.
   * @returns {Object} A platform object.
   */
  function parse(ua) {
    /** The environment context object. */
    var context = root;
    /** Used to flag when a custom context is provided. */
    var isCustomContext = ua && typeof ua == 'object' && getClassOf(ua) != 'String';
    // Juggle arguments.
    if (isCustomContext) {
      context = ua;
      ua = null;
    }
    /** Browser navigator object. */
    var nav = context.navigator || {};
    /** Browser user agent string. */
    var userAgent = nav.userAgent || '';
    ua || (ua = userAgent);
    /** Used to flag when `thisBinding` is the [ModuleScope]. */
    var isModuleScope = isCustomContext || thisBinding == oldRoot;
    /** Used to detect if browser is like Chrome. */
    var likeChrome = isCustomContext ? !!nav.likeChrome : /\bChrome\b/.test(ua) && !/internal|\n/i.test(toString.toString());
    /** Internal `[[Class]]` value shortcuts. */
    var objectClass = 'Object',
      airRuntimeClass = isCustomContext ? objectClass : 'ScriptBridgingProxyObject',
      enviroClass = isCustomContext ? objectClass : 'Environment',
      javaClass = isCustomContext && context.java ? 'JavaPackage' : getClassOf(context.java),
      phantomClass = isCustomContext ? objectClass : 'RuntimeObject';
    /** Detect Java environments. */
    var java = /\bJava/.test(javaClass) && context.java;
    /** Detect Rhino. */
    var rhino = java && getClassOf(context.environment) == enviroClass;
    /** A character to represent alpha. */
    var alpha = java ? 'a' : '\u03b1';
    /** A character to represent beta. */
    var beta = java ? 'b' : '\u03b2';
    /** Browser document object. */
    var doc = context.document || {};
    /**
     * Detect Opera browser (Presto-based).
     * http://www.howtocreate.co.uk/operaStuff/operaObject.html
     * http://dev.opera.com/articles/view/opera-mini-web-content-authoring-guidelines/#operamini
     */
    var opera = context.operamini || context.opera;
    /** Opera `[[Class]]`. */
    var operaClass = reOpera.test(operaClass = isCustomContext && opera ? opera['[[Class]]'] : getClassOf(opera)) ? operaClass : opera = null;
    /*------------------------------------------------------------------------*/
    /** Temporary variable used over the script's lifetime. */
    var data;
    /** The CPU architecture. */
    var arch = ua;
    /** Platform description array. */
    var description = [];
    /** Platform alpha/beta indicator. */
    var prerelease = null;
    /** A flag to indicate that environment features should be used to resolve the platform. */
    var useFeatures = ua == userAgent;
    /** The browser/environment version. */
    var version = useFeatures && opera && typeof opera.version == 'function' && opera.version();
    /** A flag to indicate if the OS ends with "/ Version" */
    var isSpecialCasedOS;
    /* Detectable layout engines (order is important). */
    var layout = getLayout([{
      'label': 'EdgeHTML',
      'pattern': 'Edge'
    }, 'Trident', {
      'label': 'WebKit',
      'pattern': 'AppleWebKit'
    }, 'iCab', 'Presto', 'NetFront', 'Tasman', 'KHTML', 'Gecko']);
    /* Detectable browser names (order is important). */
    var name = getName(['Adobe AIR', 'Arora', 'Avant Browser', 'Breach', 'Camino', 'Epiphany', 'Fennec', 'Flock', 'Galeon', 'GreenBrowser', 'iCab', 'Iceweasel', 'K-Meleon', 'Konqueror', 'Lunascape', 'Maxthon', {
      'label': 'Microsoft Edge',
      'pattern': 'Edge'
    }, 'Midori', 'Nook Browser', 'PaleMoon', 'PhantomJS', 'Raven', 'Rekonq', 'RockMelt', 'SeaMonkey', {
      'label': 'Silk',
      'pattern': '(?:Cloud9|Silk-Accelerated)'
    }, 'Sleipnir', 'SlimBrowser', {
      'label': 'SRWare Iron',
      'pattern': 'Iron'
    }, 'Sunrise', 'Swiftfox', 'WebPositive', 'Opera Mini', {
      'label': 'Opera Mini',
      'pattern': 'OPiOS'
    }, 'Opera', {
      'label': 'Opera',
      'pattern': 'OPR'
    }, 'Chrome', {
      'label': 'Chrome Mobile',
      'pattern': '(?:CriOS|CrMo)'
    }, {
      'label': 'Firefox',
      'pattern': '(?:Firefox|Minefield)'
    }, {
      'label': 'Firefox for iOS',
      'pattern': 'FxiOS'
    }, {
      'label': 'IE',
      'pattern': 'IEMobile'
    }, {
      'label': 'IE',
      'pattern': 'MSIE'
    }, 'Safari']);
    /* Detectable products (order is important). */
    var product = getProduct([{
      'label': 'BlackBerry',
      'pattern': 'BB10'
    }, 'BlackBerry', {
      'label': 'Galaxy S',
      'pattern': 'GT-I9000'
    }, {
      'label': 'Galaxy S2',
      'pattern': 'GT-I9100'
    }, {
      'label': 'Galaxy S3',
      'pattern': 'GT-I9300'
    }, {
      'label': 'Galaxy S4',
      'pattern': 'GT-I9500'
    }, 'Google TV', 'Lumia', 'iPad', 'iPod', 'iPhone', 'Kindle', {
      'label': 'Kindle Fire',
      'pattern': '(?:Cloud9|Silk-Accelerated)'
    }, 'Nexus', 'Nook', 'PlayBook', 'PlayStation 3', 'PlayStation 4', 'PlayStation Vita', 'TouchPad', 'Transformer', {
      'label': 'Wii U',
      'pattern': 'WiiU'
    }, 'Wii', 'Xbox One', {
      'label': 'Xbox 360',
      'pattern': 'Xbox'
    }, 'Xoom']);
    /* Detectable manufacturers. */
    var manufacturer = getManufacturer({
      'Apple': {
        'iPad': 1,
        'iPhone': 1,
        'iPod': 1
      },
      'Archos': {},
      'Amazon': {
        'Kindle': 1,
        'Kindle Fire': 1
      },
      'Asus': {
        'Transformer': 1
      },
      'Barnes & Noble': {
        'Nook': 1
      },
      'BlackBerry': {
        'PlayBook': 1
      },
      'Google': {
        'Google TV': 1,
        'Nexus': 1
      },
      'HP': {
        'TouchPad': 1
      },
      'HTC': {},
      'LG': {},
      'Microsoft': {
        'Xbox': 1,
        'Xbox One': 1
      },
      'Motorola': {
        'Xoom': 1
      },
      'Nintendo': {
        'Wii U': 1,
        'Wii': 1
      },
      'Nokia': {
        'Lumia': 1
      },
      'Samsung': {
        'Galaxy S': 1,
        'Galaxy S2': 1,
        'Galaxy S3': 1,
        'Galaxy S4': 1
      },
      'Sony': {
        'PlayStation 4': 1,
        'PlayStation 3': 1,
        'PlayStation Vita': 1
      }
    });
    /* Detectable operating systems (order is important). */
    var os = getOS(['Windows Phone', 'Android', 'CentOS', {
      'label': 'Chrome OS',
      'pattern': 'CrOS'
    }, 'Debian', 'Fedora', 'FreeBSD', 'Gentoo', 'Haiku', 'Kubuntu', 'Linux Mint', 'OpenBSD', 'Red Hat', 'SuSE', 'Ubuntu', 'Xubuntu', 'Cygwin', 'Symbian OS', 'hpwOS', 'webOS ', 'webOS', 'Tablet OS', 'Linux', 'Mac OS X', 'Macintosh', 'Mac', 'Windows 98;', 'Windows ']);
    /*------------------------------------------------------------------------*/
    /**
     * Picks the layout engine from an array of guesses.
     *
     * @private
     * @param {Array} guesses An array of guesses.
     * @returns {null|string} The detected layout engine.
     */
    function getLayout(guesses) {
      return reduce(guesses, function (result, guess) {
        return result || RegExp('\\b' + (guess.pattern || qualify(guess)) + '\\b', 'i').exec(ua) && (guess.label || guess);
      });
    }
    /**
     * Picks the manufacturer from an array of guesses.
     *
     * @private
     * @param {Array} guesses An object of guesses.
     * @returns {null|string} The detected manufacturer.
     */
    function getManufacturer(guesses) {
      return reduce(guesses, function (result, value, key) {
        // Lookup the manufacturer by product or scan the UA for the manufacturer.
        return result || (value[product] || value[/^[a-z]+(?: +[a-z]+\b)*/i.exec(product)] || RegExp('\\b' + qualify(key) + '(?:\\b|\\w*\\d)', 'i').exec(ua)) && key;
      });
    }
    /**
     * Picks the browser name from an array of guesses.
     *
     * @private
     * @param {Array} guesses An array of guesses.
     * @returns {null|string} The detected browser name.
     */
    function getName(guesses) {
      return reduce(guesses, function (result, guess) {
        return result || RegExp('\\b' + (guess.pattern || qualify(guess)) + '\\b', 'i').exec(ua) && (guess.label || guess);
      });
    }
    /**
     * Picks the OS name from an array of guesses.
     *
     * @private
     * @param {Array} guesses An array of guesses.
     * @returns {null|string} The detected OS name.
     */
    function getOS(guesses) {
      return reduce(guesses, function (result, guess) {
        var pattern = guess.pattern || qualify(guess);
        if (!result && (result = RegExp('\\b' + pattern + '(?:/[\\d.]+|[ \\w.]*)', 'i').exec(ua))) {
          result = cleanupOS(result, pattern, guess.label || guess);
        }
        return result;
      });
    }
    /**
     * Picks the product name from an array of guesses.
     *
     * @private
     * @param {Array} guesses An array of guesses.
     * @returns {null|string} The detected product name.
     */
    function getProduct(guesses) {
      return reduce(guesses, function (result, guess) {
        var pattern = guess.pattern || qualify(guess);
        if (!result && (result = RegExp('\\b' + pattern + ' *\\d+[.\\w_]*', 'i').exec(ua) || RegExp('\\b' + pattern + '(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)', 'i').exec(ua))) {
          // Split by forward slash and append product version if needed.
          if ((result = String(guess.label && !RegExp(pattern, 'i').test(guess.label) ? guess.label : result).split('/'))[1] && !/[\d.]+/.test(result[0])) {
            result[0] += ' ' + result[1];
          }
          // Correct character case and cleanup string.
          guess = guess.label || guess;
          result = format(result[0].replace(RegExp(pattern, 'i'), guess).replace(RegExp('; *(?:' + guess + '[_-])?', 'i'), ' ').replace(RegExp('(' + guess + ')[-_.]?(\\w)', 'i'), '$1 $2'));
        }
        return result;
      });
    }
    /**
     * Resolves the version using an array of UA patterns.
     *
     * @private
     * @param {Array} patterns An array of UA patterns.
     * @returns {null|string} The detected version.
     */
    function getVersion(patterns) {
      return reduce(patterns, function (result, pattern) {
        return result || (RegExp(pattern + '(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)', 'i').exec(ua) || 0)[1] || null;
      });
    }
    /**
     * Returns `platform.description` when the platform object is coerced to a string.
     *
     * @name toString
     * @memberOf platform
     * @returns {string} Returns `platform.description` if available, else an empty string.
     */
    function toStringPlatform() {
      return this.description || '';
    }
    /*------------------------------------------------------------------------*/
    // Convert layout to an array so we can add extra details.
    layout && (layout = [layout]);
    // Detect product names that contain their manufacturer's name.
    if (manufacturer && !product) {
      product = getProduct([manufacturer]);
    }
    // Clean up Google TV.
    if (data = /\bGoogle TV\b/.exec(product)) {
      product = data[0];
    }
    // Detect simulators.
    if (/\bSimulator\b/i.test(ua)) {
      product = (product ? product + ' ' : '') + 'Simulator';
    }
    // Detect Opera Mini 8+ running in Turbo/Uncompressed mode on iOS.
    if (name == 'Opera Mini' && /\bOPiOS\b/.test(ua)) {
      description.push('running in Turbo/Uncompressed mode');
    }
    // Detect IE Mobile 11.
    if (name == 'IE' && /\blike iPhone OS\b/.test(ua)) {
      data = parse(ua.replace(/like iPhone OS/, ''));
      manufacturer = data.manufacturer;
      product = data.product;
    }
    // Detect iOS.
    else if (/^iP/.test(product)) {
      name || (name = 'Safari');
      os = 'iOS' + ((data = / OS ([\d_]+)/i.exec(ua)) ? ' ' + data[1].replace(/_/g, '.') : '');
    }
    // Detect Kubuntu.
    else if (name == 'Konqueror' && !/buntu/i.test(os)) {
      os = 'Kubuntu';
    }
    // Detect Android browsers.
    else if (manufacturer && manufacturer != 'Google' && (/Chrome/.test(name) && !/\bMobile Safari\b/i.test(ua) || /\bVita\b/.test(product)) || /\bAndroid\b/.test(os) && /^Chrome/.test(name) && /\bVersion\//i.test(ua)) {
      name = 'Android Browser';
      os = /\bAndroid\b/.test(os) ? os : 'Android';
    }
    // Detect Silk desktop/accelerated modes.
    else if (name == 'Silk') {
      if (!/\bMobi/i.test(ua)) {
        os = 'Android';
        description.unshift('desktop mode');
      }
      if (/Accelerated *= *true/i.test(ua)) {
        description.unshift('accelerated');
      }
    }
    // Detect PaleMoon identifying as Firefox.
    else if (name == 'PaleMoon' && (data = /\bFirefox\/([\d.]+)\b/.exec(ua))) {
      description.push('identifying as Firefox ' + data[1]);
    }
    // Detect Firefox OS and products running Firefox.
    else if (name == 'Firefox' && (data = /\b(Mobile|Tablet|TV)\b/i.exec(ua))) {
      os || (os = 'Firefox OS');
      product || (product = data[1]);
    }
    // Detect false positives for Firefox/Safari.
    else if (!name || (data = !/\bMinefield\b/i.test(ua) && /\b(?:Firefox|Safari)\b/.exec(name))) {
      // Escape the `/` for Firefox 1.
      if (name && !product && /[\/,]|^[^(]+?\)/.test(ua.slice(ua.indexOf(data + '/') + 8))) {
        // Clear name of false positives.
        name = null;
      }
      // Reassign a generic name.
      if ((data = product || manufacturer || os) && (product || manufacturer || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(os))) {
        name = /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(os) ? os : data) + ' Browser';
      }
    }
    // Detect non-Opera (Presto-based) versions (order is important).
    if (!version) {
      version = getVersion(['(?:Cloud9|CriOS|CrMo|Edge|FxiOS|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|Silk(?!/[\\d.]+$))', 'Version', qualify(name), '(?:Firefox|Minefield|NetFront)']);
    }
    // Detect stubborn layout engines.
    if (data = layout == 'iCab' && parseFloat(version) > 3 && 'WebKit' || /\bOpera\b/.test(name) && (/\bOPR\b/.test(ua) ? 'Blink' : 'Presto') || /\b(?:Midori|Nook|Safari)\b/i.test(ua) && !/^(?:Trident|EdgeHTML)$/.test(layout) && 'WebKit' || !layout && /\bMSIE\b/i.test(ua) && (os == 'Mac OS' ? 'Tasman' : 'Trident') || layout == 'WebKit' && /\bPlayStation\b(?! Vita\b)/i.test(name) && 'NetFront') {
      layout = [data];
    }
    // Detect Windows Phone 7 desktop mode.
    if (name == 'IE' && (data = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(ua) || 0)[1])) {
      name += ' Mobile';
      os = 'Windows Phone ' + (/\+$/.test(data) ? data : data + '.x');
      description.unshift('desktop mode');
    }
    // Detect Windows Phone 8.x desktop mode.
    else if (/\bWPDesktop\b/i.test(ua)) {
      name = 'IE Mobile';
      os = 'Windows Phone 8.x';
      description.unshift('desktop mode');
      version || (version = (/\brv:([\d.]+)/.exec(ua) || 0)[1]);
    }
    // Detect IE 11.
    else if (name != 'IE' && layout == 'Trident' && (data = /\brv:([\d.]+)/.exec(ua))) {
      if (name) {
        description.push('identifying as ' + name + (version ? ' ' + version : ''));
      }
      name = 'IE';
      version = data[1];
    }
    // Leverage environment features.
    if (useFeatures) {
      // Detect server-side environments.
      // Rhino has a global function while others have a global object.
      if (isHostType(context, 'global')) {
        if (java) {
          data = java.lang.System;
          arch = data.getProperty('os.arch');
          os = os || data.getProperty('os.name') + ' ' + data.getProperty('os.version');
        }
        if (isModuleScope && isHostType(context, 'system') && (data = [context.system])[0]) {
          os || (os = data[0].os || null);
          try {
            data[1] = context.require('ringo/engine').version;
            version = data[1].join('.');
            name = 'RingoJS';
          } catch (e) {
            if (data[0].global.system == context.system) {
              name = 'Narwhal';
            }
          }
        } else if (typeof context.process == 'object' && !context.process.browser && (data = context.process)) {
          name = 'Node.js';
          arch = data.arch;
          os = data.platform;
          version = /[\d.]+/.exec(data.version)[0];
        } else if (rhino) {
          name = 'Rhino';
        }
      }
      // Detect Adobe AIR.
      else if (getClassOf(data = context.runtime) == airRuntimeClass) {
        name = 'Adobe AIR';
        os = data.flash.system.Capabilities.os;
      }
      // Detect PhantomJS.
      else if (getClassOf(data = context.phantom) == phantomClass) {
        name = 'PhantomJS';
        version = (data = data.version || null) && data.major + '.' + data.minor + '.' + data.patch;
      }
      // Detect IE compatibility modes.
      else if (typeof doc.documentMode == 'number' && (data = /\bTrident\/(\d+)/i.exec(ua))) {
        // We're in compatibility mode when the Trident version + 4 doesn't
        // equal the document mode.
        version = [version, doc.documentMode];
        if ((data = +data[1] + 4) != version[1]) {
          description.push('IE ' + version[1] + ' mode');
          layout && (layout[1] = '');
          version[1] = data;
        }
        version = name == 'IE' ? String(version[1].toFixed(1)) : version[0];
      }
      os = os && format(os);
    }
    // Detect prerelease phases.
    if (version && (data = /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(version) || /(?:alpha|beta)(?: ?\d)?/i.exec(ua + ';' + (useFeatures && nav.appMinorVersion)) || /\bMinefield\b/i.test(ua) && 'a')) {
      prerelease = /b/i.test(data) ? 'beta' : 'alpha';
      version = version.replace(RegExp(data + '\\+?$'), '') + (prerelease == 'beta' ? beta : alpha) + (/\d+\+?/.exec(data) || '');
    }
    // Detect Firefox Mobile.
    if (name == 'Fennec' || name == 'Firefox' && /\b(?:Android|Firefox OS)\b/.test(os)) {
      name = 'Firefox Mobile';
    }
    // Obscure Maxthon's unreliable version.
    else if (name == 'Maxthon' && version) {
      version = version.replace(/\.[\d.]+/, '.x');
    }
    // Detect Xbox 360 and Xbox One.
    else if (/\bXbox\b/i.test(product)) {
      os = null;
      if (product == 'Xbox 360' && /\bIEMobile\b/.test(ua)) {
        description.unshift('mobile mode');
      }
    }
    // Add mobile postfix.
    else if ((/^(?:Chrome|IE|Opera)$/.test(name) || name && !product && !/Browser|Mobi/.test(name)) && (os == 'Windows CE' || /Mobi/i.test(ua))) {
      name += ' Mobile';
    }
    // Detect IE platform preview.
    else if (name == 'IE' && useFeatures && context.external === null) {
      description.unshift('platform preview');
    }
    // Detect BlackBerry OS version.
    // http://docs.blackberry.com/en/developers/deliverables/18169/HTTP_headers_sent_by_BB_Browser_1234911_11.jsp
    else if ((/\bBlackBerry\b/.test(product) || /\bBB10\b/.test(ua)) && (data = (RegExp(product.replace(/ +/g, ' *') + '/([.\\d]+)', 'i').exec(ua) || 0)[1] || version)) {
      data = [data, /BB10/.test(ua)];
      os = (data[1] ? (product = null, manufacturer = 'BlackBerry') : 'Device Software') + ' ' + data[0];
      version = null;
    }
    // Detect Opera identifying/masking itself as another browser.
    // http://www.opera.com/support/kb/view/843/
    else if (this != forOwn && product != 'Wii' && (useFeatures && opera || /Opera/.test(name) && /\b(?:MSIE|Firefox)\b/i.test(ua) || name == 'Firefox' && /\bOS X (?:\d+\.){2,}/.test(os) || name == 'IE' && (os && !/^Win/.test(os) && version > 5.5 || /\bWindows XP\b/.test(os) && version > 8 || version == 8 && !/\bTrident\b/.test(ua))) && !reOpera.test(data = parse.call(forOwn, ua.replace(reOpera, '') + ';')) && data.name) {
      // When "identifying", the UA contains both Opera and the other browser's name.
      data = 'ing as ' + data.name + ((data = data.version) ? ' ' + data : '');
      if (reOpera.test(name)) {
        if (/\bIE\b/.test(data) && os == 'Mac OS') {
          os = null;
        }
        data = 'identify' + data;
      }
      // When "masking", the UA contains only the other browser's name.
      else {
        data = 'mask' + data;
        if (operaClass) {
          name = format(operaClass.replace(/([a-z])([A-Z])/g, '$1 $2'));
        } else {
          name = 'Opera';
        }
        if (/\bIE\b/.test(data)) {
          os = null;
        }
        if (!useFeatures) {
          version = null;
        }
      }
      layout = ['Presto'];
      description.push(data);
    }
    // Detect WebKit Nightly and approximate Chrome/Safari versions.
    if (data = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(ua) || 0)[1]) {
      // Correct build number for numeric comparison.
      // (e.g. "532.5" becomes "532.05")
      data = [parseFloat(data.replace(/\.(\d)$/, '.0$1')), data];
      // Nightly builds are postfixed with a "+".
      if (name == 'Safari' && data[1].slice(-1) == '+') {
        name = 'WebKit Nightly';
        prerelease = 'alpha';
        version = data[1].slice(0, -1);
      }
      // Clear incorrect browser versions.
      else if (version == data[1] || version == (data[2] = (/\bSafari\/([\d.]+\+?)/i.exec(ua) || 0)[1])) {
        version = null;
      }
      // Use the full Chrome version when available.
      data[1] = (/\bChrome\/([\d.]+)/i.exec(ua) || 0)[1];
      // Detect Blink layout engine.
      if (data[0] == 537.36 && data[2] == 537.36 && parseFloat(data[1]) >= 28 && layout == 'WebKit') {
        layout = ['Blink'];
      }
      // Detect JavaScriptCore.
      // http://stackoverflow.com/questions/6768474/how-can-i-detect-which-javascript-engine-v8-or-jsc-is-used-at-runtime-in-androi
      if (!useFeatures || !likeChrome && !data[1]) {
        layout && (layout[1] = 'like Safari');
        data = (data = data[0], data < 400 ? 1 : data < 500 ? 2 : data < 526 ? 3 : data < 533 ? 4 : data < 534 ? '4+' : data < 535 ? 5 : data < 537 ? 6 : data < 538 ? 7 : data < 601 ? 8 : '8');
      } else {
        layout && (layout[1] = 'like Chrome');
        data = data[1] || (data = data[0], data < 530 ? 1 : data < 532 ? 2 : data < 532.05 ? 3 : data < 533 ? 4 : data < 534.03 ? 5 : data < 534.07 ? 6 : data < 534.10 ? 7 : data < 534.13 ? 8 : data < 534.16 ? 9 : data < 534.24 ? 10 : data < 534.30 ? 11 : data < 535.01 ? 12 : data < 535.02 ? '13+' : data < 535.07 ? 15 : data < 535.11 ? 16 : data < 535.19 ? 17 : data < 536.05 ? 18 : data < 536.10 ? 19 : data < 537.01 ? 20 : data < 537.11 ? '21+' : data < 537.13 ? 23 : data < 537.18 ? 24 : data < 537.24 ? 25 : data < 537.36 ? 26 : layout != 'Blink' ? '27' : '28');
      }
      // Add the postfix of ".x" or "+" for approximate versions.
      layout && (layout[1] += ' ' + (data += typeof data == 'number' ? '.x' : /[.+]/.test(data) ? '' : '+'));
      // Obscure version for some Safari 1-2 releases.
      if (name == 'Safari' && (!version || parseInt(version) > 45)) {
        version = data;
      }
    }
    // Detect Opera desktop modes.
    if (name == 'Opera' && (data = /\bzbov|zvav$/.exec(os))) {
      name += ' ';
      description.unshift('desktop mode');
      if (data == 'zvav') {
        name += 'Mini';
        version = null;
      } else {
        name += 'Mobile';
      }
      os = os.replace(RegExp(' *' + data + '$'), '');
    }
    // Detect Chrome desktop mode.
    else if (name == 'Safari' && /\bChrome\b/.exec(layout && layout[1])) {
      description.unshift('desktop mode');
      name = 'Chrome Mobile';
      version = null;
      if (/\bOS X\b/.test(os)) {
        manufacturer = 'Apple';
        os = 'iOS 4.3+';
      } else {
        os = null;
      }
    }
    // Strip incorrect OS versions.
    if (version && version.indexOf(data = /[\d.]+$/.exec(os)) == 0 && ua.indexOf('/' + data + '-') > -1) {
      os = trim(os.replace(data, ''));
    }
    // Add layout engine.
    if (layout && !/\b(?:Avant|Nook)\b/.test(name) && (/Browser|Lunascape|Maxthon/.test(name) || name != 'Safari' && /^iOS/.test(os) && /\bSafari\b/.test(layout[1]) || /^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Sleipnir|Web)/.test(name) && layout[1])) {
      // Don't add layout details to description if they are falsey.
      (data = layout[layout.length - 1]) && description.push(data);
    }
    // Combine contextual information.
    if (description.length) {
      description = ['(' + description.join('; ') + ')'];
    }
    // Append manufacturer to description.
    if (manufacturer && product && product.indexOf(manufacturer) < 0) {
      description.push('on ' + manufacturer);
    }
    // Append product to description.
    if (product) {
      description.push((/^on /.test(description[description.length - 1]) ? '' : 'on ') + product);
    }
    // Parse the OS into an object.
    if (os) {
      data = / ([\d.+]+)$/.exec(os);
      isSpecialCasedOS = data && os.charAt(os.length - data[0].length - 1) == '/';
      os = {
        'architecture': 32,
        'family': data && !isSpecialCasedOS ? os.replace(data[0], '') : os,
        'version': data ? data[1] : null,
        'toString': function () {
          var version = this.version;
          return this.family + (version && !isSpecialCasedOS ? ' ' + version : '') + (this.architecture == 64 ? ' 64-bit' : '');
        }
      };
    }
    // Add browser/OS architecture.
    if ((data = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(arch)) && !/\bi686\b/i.test(arch)) {
      if (os) {
        os.architecture = 64;
        os.family = os.family.replace(RegExp(' *' + data), '');
      }
      if (name && (/\bWOW64\b/i.test(ua) || useFeatures && /\w(?:86|32)$/.test(nav.cpuClass || nav.platform) && !/\bWin64; x64\b/i.test(ua))) {
        description.unshift('32-bit');
      }
    }
    // Chrome 39 and above on OS X is always 64-bit.
    else if (os && /^OS X/.test(os.family) && name == 'Chrome' && parseFloat(version) >= 39) {
      os.architecture = 64;
    }
    ua || (ua = null);
    /*------------------------------------------------------------------------*/
    /**
     * The platform object.
     *
     * @name platform
     * @type Object
     */
    var platform = {};
    /**
     * The platform description.
     *
     * @memberOf platform
     * @type string|null
     */
    platform.description = ua;
    /**
     * The name of the browser's layout engine.
     *
     * @memberOf platform
     * @type string|null
     */
    platform.layout = layout && layout[0];
    /**
     * The name of the product's manufacturer.
     *
     * @memberOf platform
     * @type string|null
     */
    platform.manufacturer = manufacturer;
    /**
     * The name of the browser/environment.
     *
     * @memberOf platform
     * @type string|null
     */
    platform.name = name;
    /**
     * The alpha/beta release indicator.
     *
     * @memberOf platform
     * @type string|null
     */
    platform.prerelease = prerelease;
    /**
     * The name of the product hosting the browser.
     *
     * @memberOf platform
     * @type string|null
     */
    platform.product = product;
    /**
     * The browser's user agent string.
     *
     * @memberOf platform
     * @type string|null
     */
    platform.ua = ua;
    /**
     * The browser/environment version.
     *
     * @memberOf platform
     * @type string|null
     */
    platform.version = name && version;
    /**
     * The name of the operating system.
     *
     * @memberOf platform
     * @type Object
     */
    platform.os = os || {
      /**
       * The CPU architecture the OS is built for.
       *
       * @memberOf platform.os
       * @type number|null
       */
      'architecture': null,
      /**
       * The family of the OS.
       *
       * Common values include:
       * "Windows", "Windows Server 2008 R2 / 7", "Windows Server 2008 / Vista",
       * "Windows XP", "OS X", "Ubuntu", "Debian", "Fedora", "Red Hat", "SuSE",
       * "Android", "iOS" and "Windows Phone"
       *
       * @memberOf platform.os
       * @type string|null
       */
      'family': null,
      /**
       * The version of the OS.
       *
       * @memberOf platform.os
       * @type string|null
       */
      'version': null,
      /**
       * Returns the OS string.
       *
       * @memberOf platform.os
       * @returns {string} The OS string.
       */
      'toString': function () {
        return 'null';
      }
    };
    platform.parse = parse;
    platform.toString = toStringPlatform;
    if (platform.version) {
      description.unshift(version);
    }
    if (platform.name) {
      description.unshift(name);
    }
    if (os && name && !(os == String(os).split(' ')[0] && (os == name.split(' ')[0] || product))) {
      description.push(product ? '(' + os + ')' : 'on ' + os);
    }
    if (description.length) {
      platform.description = description.join(' ');
    }
    return platform;
  }
  /*--------------------------------------------------------------------------*/
  // Export platform.
  var platform = parse();
  // Some AMD build optimizers, like r.js, check for condition patterns like the following:
  if (true) {
    // Expose platform on the global object to prevent errors when platform is
    // loaded by a script tag in the presence of an AMD loader.
    // See http://requirejs.org/docs/errors.html#mismatch for more details.
    root.platform = platform;
    // Define as an anonymous module so platform can be aliased through path mapping.
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return platform;
    }).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }
  // Check for `exports` after `define` in case a build optimizer adds an `exports` object.
  else {}
}).call(this);

/***/ }),

/***/ "../src/Dlw.EpiBase.Web/node_modules/nanoid/index.browser.js":
/*!*******************************************************************!*\
  !*** ../src/Dlw.EpiBase.Web/node_modules/nanoid/index.browser.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "customAlphabet": function() { return /* binding */ customAlphabet; },
/* harmony export */   "customRandom": function() { return /* binding */ customRandom; },
/* harmony export */   "nanoid": function() { return /* binding */ nanoid; },
/* harmony export */   "random": function() { return /* binding */ random; },
/* harmony export */   "urlAlphabet": function() { return /* reexport safe */ _url_alphabet_index_js__WEBPACK_IMPORTED_MODULE_0__.urlAlphabet; }
/* harmony export */ });
/* harmony import */ var _url_alphabet_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./url-alphabet/index.js */ "../src/Dlw.EpiBase.Web/node_modules/nanoid/url-alphabet/index.js");


let random = bytes => crypto.getRandomValues(new Uint8Array(bytes));
let customRandom = (alphabet, defaultSize, getRandom) => {
  let mask = (2 << Math.log(alphabet.length - 1) / Math.LN2) - 1;
  let step = -~(1.6 * mask * defaultSize / alphabet.length);
  return function () {
    let size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultSize;
    let id = '';
    while (true) {
      let bytes = getRandom(step);
      let j = step;
      while (j--) {
        id += alphabet[bytes[j] & mask] || '';
        if (id.length === size) return id;
      }
    }
  };
};
let customAlphabet = function (alphabet) {
  let size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 21;
  return customRandom(alphabet, size, random);
};
let nanoid = function () {
  let size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 21;
  let id = '';
  let bytes = crypto.getRandomValues(new Uint8Array(size));
  while (size--) {
    id += _url_alphabet_index_js__WEBPACK_IMPORTED_MODULE_0__.urlAlphabet[bytes[size] & 63];
  }
  return id;
};

/***/ }),

/***/ "../src/Dlw.EpiBase.Web/node_modules/nanoid/url-alphabet/index.js":
/*!************************************************************************!*\
  !*** ../src/Dlw.EpiBase.Web/node_modules/nanoid/url-alphabet/index.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "urlAlphabet": function() { return /* binding */ urlAlphabet; }
/* harmony export */ });
const urlAlphabet = 'useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict';

/***/ })

}]);
//# sourceMappingURL=vendor.mjs.map