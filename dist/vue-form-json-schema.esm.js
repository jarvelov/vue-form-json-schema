module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/webpack/buildin/global.js":
/*!*************************************************!*\
  !*** ../node_modules/webpack/buildin/global.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./constants/index.js":
/*!****************************!*\
  !*** ./constants/index.js ***!
  \****************************/
/*! exports provided: VFJS_EVENT_FIELD_STATE_UPDATE, VFJS_EVENT_FIELD_MODEL_VALIDATE, VFJS_EVENT_FIELD_MODEL_UPDATE, VFJS_EVENT_FIELD_MODEL_CLEAR_HIDDEN, VFJS_EVENT_MODEL_UPDATE, VFJS_EVENT_MODEL_UPDATED, VFJS_EVENT_MODEL_VALIDATE, VFJS_EVENT_STATE_UPDATE, VFJS_EVENT_STATE_UPDATED, VFJS_EVENT_UI_FIELDS_UPDATE, VFJS_EXTERNAL_EVENT_CHANGE, VFJS_EXTERNAL_EVENT_STATE_CHANGE, VFJS_EXTERNAL_EVENT_VALIDATED */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VFJS_EVENT_FIELD_STATE_UPDATE", function() { return VFJS_EVENT_FIELD_STATE_UPDATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VFJS_EVENT_FIELD_MODEL_VALIDATE", function() { return VFJS_EVENT_FIELD_MODEL_VALIDATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VFJS_EVENT_FIELD_MODEL_UPDATE", function() { return VFJS_EVENT_FIELD_MODEL_UPDATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VFJS_EVENT_FIELD_MODEL_CLEAR_HIDDEN", function() { return VFJS_EVENT_FIELD_MODEL_CLEAR_HIDDEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VFJS_EVENT_MODEL_UPDATE", function() { return VFJS_EVENT_MODEL_UPDATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VFJS_EVENT_MODEL_UPDATED", function() { return VFJS_EVENT_MODEL_UPDATED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VFJS_EVENT_MODEL_VALIDATE", function() { return VFJS_EVENT_MODEL_VALIDATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VFJS_EVENT_STATE_UPDATE", function() { return VFJS_EVENT_STATE_UPDATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VFJS_EVENT_STATE_UPDATED", function() { return VFJS_EVENT_STATE_UPDATED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VFJS_EVENT_UI_FIELDS_UPDATE", function() { return VFJS_EVENT_UI_FIELDS_UPDATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VFJS_EXTERNAL_EVENT_CHANGE", function() { return VFJS_EXTERNAL_EVENT_CHANGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VFJS_EXTERNAL_EVENT_STATE_CHANGE", function() { return VFJS_EXTERNAL_EVENT_STATE_CHANGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VFJS_EXTERNAL_EVENT_VALIDATED", function() { return VFJS_EXTERNAL_EVENT_VALIDATED; });
var VFJS_EVENT_FIELD_STATE_UPDATE = 'VFJS_EVENT_FIELD_STATE_UPDATE';
var VFJS_EVENT_FIELD_MODEL_VALIDATE = 'VFJS_EVENT_FIELD_MODEL_VALIDATE';
var VFJS_EVENT_FIELD_MODEL_UPDATE = 'VFJS_EVENT_FIELD_MODEL_UPDATE';
var VFJS_EVENT_FIELD_MODEL_CLEAR_HIDDEN = 'VFJS_EVENT_FIELD_MODEL_CLEAR_HIDDEN';
var VFJS_EVENT_MODEL_UPDATE = 'VFJS_EVENT_MODEL_UPDATE';
var VFJS_EVENT_MODEL_UPDATED = 'VFJS_EVENT_MODEL_UPDATED';
var VFJS_EVENT_MODEL_VALIDATE = 'VFJS_EVENT_MODEL_VALIDATE';
var VFJS_EVENT_STATE_UPDATE = 'VFJS_EVENT_STATE_UPDATE';
var VFJS_EVENT_STATE_UPDATED = 'VFJS_EVENT_STATE_UPDATED';
var VFJS_EVENT_UI_FIELDS_UPDATE = 'VFJS_EVENT_UI_FIELDS_UPDATE';
var VFJS_EXTERNAL_EVENT_CHANGE = 'change';
var VFJS_EXTERNAL_EVENT_STATE_CHANGE = 'state-change';
var VFJS_EXTERNAL_EVENT_VALIDATED = 'validated';

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! exports provided: vfjsField, vfjsFieldMixin, vfjsGlobal, vfjsGlobalMixin, vfjsPlugin, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vfjs_field_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vfjs-field-component */ "./vfjs-field-component/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "vfjsField", function() { return _vfjs_field_component__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _vfjs_field_mixin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vfjs-field-mixin */ "./vfjs-field-mixin/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "vfjsFieldMixin", function() { return _vfjs_field_mixin__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _vfjs_global_mixin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vfjs-global-mixin */ "./vfjs-global-mixin/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "vfjsGlobalMixin", function() { return _vfjs_global_mixin__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _vfjs_global_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vfjs-global-component */ "./vfjs-global-component/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "vfjsGlobal", function() { return _vfjs_global_component__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _plugin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./plugin */ "./plugin.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "vfjsPlugin", function() { return _plugin__WEBPACK_IMPORTED_MODULE_4__["default"]; });







/* harmony default export */ __webpack_exports__["default"] = (_vfjs_global_component__WEBPACK_IMPORTED_MODULE_3__["default"]);

/***/ }),

/***/ "./plugin.js":
/*!*******************!*\
  !*** ./plugin.js ***!
  \*******************/
/*! exports provided: install, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "install", function() { return install; });
/* harmony import */ var _vfjs_global_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vfjs-global-component */ "./vfjs-global-component/index.js");
 // Declare install function executed by Vue.use()

function install(Vue) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    component: 'vue-form-json-schema'
  };

  if (!install.installed) {
    install.installed = true;
    Vue.component(options.component, _vfjs_global_component__WEBPACK_IMPORTED_MODULE_0__["default"]);
  }
} // Create module definition for Vue.use()

var plugin = {
  install: install
}; // Auto-install when vue is found (eg. in browser via <script> tag)

var GlobalVue = null;

if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}

if (GlobalVue) {
  GlobalVue.use(plugin);
}

/* harmony default export */ __webpack_exports__["default"] = (plugin);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./vfjs-field-component/index.js":
/*!***************************************!*\
  !*** ./vfjs-field-component/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vfjs_field_mixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vfjs-field-mixin */ "./vfjs-field-mixin/index.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var VueFormJsonSchemaFieldComponent = {
  name: 'vue-form-json-schema-field-component',
  mixins: [_vfjs_field_mixin__WEBPACK_IMPORTED_MODULE_0__["default"]],
  render: function render() {
    return this.$createElement(this.vfjsComponent, _objectSpread({}, this.getVfjsAttributes()), this.$slots.default);
  }
};
/* harmony default export */ __webpack_exports__["default"] = (VueFormJsonSchemaFieldComponent);

/***/ }),

/***/ "./vfjs-field-mixin/computed.js":
/*!**************************************!*\
  !*** ./vfjs-field-mixin/computed.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
 // Elements which supports the 'value' attribute

var attrsValueElements = ['input', 'option', 'textarea']; // Elements which should have its DOM property 'value' updated

var domPropsValueElements = ['input', 'textarea']; // Elements which should have its DOM property 'checked' updated

var domPropsCheckedElements = ['checkbox', 'radio']; // Elements which has their value within the tags

var innerHTMLElements = ['textarea']; // Elements which supports the 'required' attribute

var requiredElements = ['input', 'select', 'textarea'];
var computed = {
  vfjsComputedFieldHasErrors: function vfjsComputedFieldHasErrors() {
    return this.vfjsFieldState.vfjsFieldErrors && this.vfjsFieldState.vfjsFieldErrors.length > 0;
  },
  vfjsComputedShowFieldErrors: function vfjsComputedShowFieldErrors() {
    return this.vfjsFieldState.vfjsFieldDirty && this.vfjsFieldState.vfjsFieldBlur || this.vfjsOptions.showValidationErrors;
  },
  vfjsComputedFieldErrorOptions: function vfjsComputedFieldErrorOptions() {
    return this.vfjsComputedShowFieldErrors && this.vfjsComputedFieldHasErrors ? this.vfjsFieldErrorOptions : {};
  },
  vfjsComputedFieldAttrs: function vfjsComputedFieldAttrs() {
    var attrs = {// id: this.vfjsFieldId, // This is very useful when debugging to see when nodes are updated
    };

    if (requiredElements.indexOf(this.vfjsComponent) !== -1) {
      attrs.required = this.vfjsFieldRequired;
    }

    if (attrsValueElements.indexOf(this.vfjsComponent) !== -1) {
      attrs.value = this.vfjsFieldModel || this.vfjsFieldOptions.attrs && this.vfjsFieldOptions.attrs.value;
    }

    return attrs;
  },
  vfjsComputedFieldDomProps: function vfjsComputedFieldDomProps() {
    var domProps = {};

    if (innerHTMLElements.indexOf(this.vfjsComponent) !== -1) {
      domProps.innerHTML = this.vfjsFieldModel || this.vfjsFieldOptions.domProps && this.vfjsFieldOptions.domProps.innerHTML;
    }

    if (domPropsValueElements.indexOf(this.vfjsComponent) !== -1) {
      domProps.value = this.vfjsFieldModel || this.vfjsFieldOptions.domProps && this.vfjsFieldOptions.domProps.value;
    }

    if (domPropsCheckedElements.indexOf(this.vfjsComponent) !== -1) {
      domProps.checked = this.vfjsFieldModel || this.vfjsFieldOptions.domProps && this.vfjsFieldOptions.domProps.checked;
    }

    return domProps;
  },
  vfjsComputedFieldOptions: function vfjsComputedFieldOptions() {
    return {
      attrs: this.vfjsComputedFieldAttrs,
      domProps: this.vfjsComputedFieldDomProps,
      key: this.vfjsFieldOptions.key || this.vfjsFieldId
    };
  },
  vfjsComputedMergedFieldOptions: function vfjsComputedMergedFieldOptions() {
    return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["merge"])({}, this.vfjsDefaultOptions, this.vfjsComputedFieldErrorOptions, this.vfjsComputedFieldOptions);
  }
};
/* harmony default export */ __webpack_exports__["default"] = (computed);

/***/ }),

/***/ "./vfjs-field-mixin/index.js":
/*!***********************************!*\
  !*** ./vfjs-field-mixin/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _computed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./computed */ "./vfjs-field-mixin/computed.js");
/* harmony import */ var _methods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./methods */ "./vfjs-field-mixin/methods/index.js");
/* harmony import */ var _props__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./props */ "./vfjs-field-mixin/props.js");



var vfjsFieldMixin = {
  computed: _computed__WEBPACK_IMPORTED_MODULE_0__["default"],
  props: _props__WEBPACK_IMPORTED_MODULE_2__["default"],
  methods: _methods__WEBPACK_IMPORTED_MODULE_1__["default"],
  mounted: function mounted() {
    this.vfjsFieldHelperAddListener(this.$el, 'blur');
  },
  beforeDestroy: function beforeDestroy() {
    this.vfjsFieldHelperRemoveListener(this.$el, 'blur');
  }
};
/* harmony default export */ __webpack_exports__["default"] = (vfjsFieldMixin);

/***/ }),

/***/ "./vfjs-field-mixin/methods/getters.js":
/*!*********************************************!*\
  !*** ./vfjs-field-mixin/methods/getters.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


var getters = {
  getVfjsAttributes: function getVfjsAttributes() {
    return this.getVfjsFieldAttributes(this.vfjsFieldOptions, this.vfjsComputedMergedFieldOptions);
  },
  getVfjsFieldAttributes: function getVfjsFieldAttributes() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        optionsClass = _ref.class,
        optionsOn = _ref.on,
        optionsNativeOn = _ref.nativeOn,
        options = _objectWithoutProperties(_ref, ["class", "on", "nativeOn"]);

    var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        defaultOptionsClass = _ref2.class,
        defaultOn = _ref2.on,
        defaultNativeOn = _ref2.nativeOn,
        defaultOptions = _objectWithoutProperties(_ref2, ["class", "on", "nativeOn"]);

    if (!options) {
      return {};
    }

    var classFormatted = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["merge"])({}, this.vfjsFieldHelperFormatClasses(optionsClass), this.vfjsFieldHelperFormatClasses(defaultOptionsClass));
    var onFormatted = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["merge"])(this.vfjsFieldHelperFormatEvents(optionsOn), this.vfjsFieldHelperFormatEvents(defaultOn));
    var nativeOnFormatted = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["merge"])(this.vfjsFieldHelperFormatEvents(optionsNativeOn), this.vfjsFieldHelperFormatEvents(defaultNativeOn));
    var computedOptions = {
      class: classFormatted,
      on: onFormatted,
      nativeOn: nativeOnFormatted
    };
    var defaultProps = Object.assign({}, {
      props: this.$options.propsData
    });
    var fieldOptionsAsProps = {
      props: options
    };
    var valueProp = {
      props: _defineProperty({}, this.vfjsFieldValueProp, this.vfjsFieldModel)
    };
    var allAttributes = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["merge"])({}, defaultProps, defaultOptions, fieldOptionsAsProps, options, computedOptions, valueProp);
    return allAttributes;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (getters);

/***/ }),

/***/ "./vfjs-field-mixin/methods/helpers.js":
/*!*********************************************!*\
  !*** ./vfjs-field-mixin/methods/helpers.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants */ "./constants/index.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var helpers = {
  vfjsFieldHelperAddListener: function vfjsFieldHelperAddListener(el, event) {
    el.addEventListener(event, this.vfjsFieldHelperStateEventHandler);
  },
  vfjsFieldHelperRemoveListener: function vfjsFieldHelperRemoveListener(el, event) {
    el.removeEventListener(event, this.vfjsFieldHelperStateEventHandler);
  },
  vfjsFieldHelperStateEventHandler: function vfjsFieldHelperStateEventHandler(event) {
    if (event && event.type === 'blur') {
      var initialBlur = this.vfjsFieldState.vfjsFieldBlur;
      this.setVfjsFieldState(_objectSpread({}, this.vfjsFieldState, {
        vfjsFieldBlur: true
      }));

      if (!initialBlur) {
        this.vfjsBus.emit(_constants__WEBPACK_IMPORTED_MODULE_0__["VFJS_EVENT_UI_FIELDS_UPDATE"]);
      }
    }
  },
  vfjsFieldHelperFormatEvents: function vfjsFieldHelperFormatEvents(events) {
    if (!events) {
      return {};
    }

    var eventsObj = events;

    if (Array.isArray(events)) {
      eventsObj = events.reduce(function (obj, event) {
        return _objectSpread({}, obj, _defineProperty({}, event, true));
      }, {});
    } else if (typeof events === 'string') {
      eventsObj = _defineProperty({}, events, true);
    }

    return this.vfjsFieldHelperFormatEventsReducer(eventsObj);
  },
  vfjsFieldHelperFormatClasses: function vfjsFieldHelperFormatClasses(classes) {
    if (!classes) {
      return {};
    }

    if (typeof classes === 'string') {
      return _defineProperty({}, classes, true);
    }

    if (Array.isArray(classes)) {
      return classes.reduce(function (classesObj, key) {
        return _objectSpread({}, classesObj, _defineProperty({}, key, true));
      }, {});
    }

    if (typeof classes === 'string') {
      if (classes.indexOf(',') !== -1) {
        return classes.split(',');
      }

      if (classes.indexOf(' ') !== -1) {
        return classes.split(' ');
      }
    }

    return classes;
  },
  vfjsFieldHelperEventHandler: function vfjsFieldHelperEventHandler(key, cb) {
    var _this = this;

    return function (data) {
      if (typeof cb === 'function') {
        return _this.setVfjsFieldModel(cb(data));
      }

      if (data instanceof Event) {
        if (data.target && data.target.value) {
          return _this.setVfjsFieldModel(data.target.value);
        }

        return _this.setVfjsFieldModel(undefined);
      }

      return _this.setVfjsFieldModel(data);
    };
  },
  vfjsFieldHelperFormatEventsReducer: function vfjsFieldHelperFormatEventsReducer() {
    var _this2 = this;

    var events = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return Object.keys(events).reduce(function (formattedEvents, key) {
      return _objectSpread({}, formattedEvents, _defineProperty({}, key, _this2.vfjsFieldHelperEventHandler(key, events[key])));
    }, {});
  }
};
/* harmony default export */ __webpack_exports__["default"] = (helpers);

/***/ }),

/***/ "./vfjs-field-mixin/methods/index.js":
/*!*******************************************!*\
  !*** ./vfjs-field-mixin/methods/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getters */ "./vfjs-field-mixin/methods/getters.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ "./vfjs-field-mixin/methods/helpers.js");
/* harmony import */ var _setters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./setters */ "./vfjs-field-mixin/methods/setters.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var methods = _objectSpread({}, _getters__WEBPACK_IMPORTED_MODULE_0__["default"], _helpers__WEBPACK_IMPORTED_MODULE_1__["default"], _setters__WEBPACK_IMPORTED_MODULE_2__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (methods);

/***/ }),

/***/ "./vfjs-field-mixin/methods/setters.js":
/*!*********************************************!*\
  !*** ./vfjs-field-mixin/methods/setters.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants */ "./constants/index.js");

var setters = {
  setState: function setState(value) {
    this.setVfjsFieldState(value);
  },
  setModel: function setModel(value) {
    this.setVfjsFieldModel(value);
  },
  setVfjsFieldState: function setVfjsFieldState(value, key) {
    this.vfjsBus.emit(_constants__WEBPACK_IMPORTED_MODULE_0__["VFJS_EVENT_FIELD_STATE_UPDATE"], {
      key: key || this.vfjsFieldModelKey,
      value: value
    });
  },
  setVfjsFieldModel: function setVfjsFieldModel(value, key) {
    this.vfjsBus.emit(_constants__WEBPACK_IMPORTED_MODULE_0__["VFJS_EVENT_FIELD_MODEL_UPDATE"], {
      key: key || this.vfjsFieldModelKey,
      value: value
    });
  }
};
/* harmony default export */ __webpack_exports__["default"] = (setters);

/***/ }),

/***/ "./vfjs-field-mixin/props.js":
/*!***********************************!*\
  !*** ./vfjs-field-mixin/props.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var props = {
  vfjsBus: {
    type: Object,
    required: true
  },
  vfjsChildren: {
    type: Array,
    default: function _default() {
      return [];
    }
  },
  vfjsChildrenUiSchema: {
    type: Array,
    default: function _default() {
      return [];
    }
  },
  vfjsComponent: {
    type: [String, Object]
  },
  vfjsFieldErrorHandler: {
    type: Boolean
  },
  vfjsFieldErrorOptions: {
    type: Object
  },
  vfjsFieldErrors: {
    type: Array
  },
  vfjsFieldId: {
    type: String,
    required: true
  },
  vfjsFieldModel: {
    type: null
  },
  vfjsFieldModelKey: {
    type: [String, Boolean],
    required: true
  },
  vfjsFieldOptions: {
    type: Object,
    required: true
  },
  vfjsFieldRequired: {
    type: Boolean,
    required: true
  },
  vfjsFieldSchema: {
    type: Object,
    required: true
  },
  vfjsFieldSchemas: {
    type: Object
  },
  vfjsFieldState: {
    type: Object,
    required: true
  },
  vfjsFieldTag: {
    type: String,
    default: 'div'
  },
  vfjsFieldUiSchema: {
    type: Object,
    required: true
  },
  vfjsFieldValueProp: {
    type: String
  },
  vfjsOptions: {
    type: Object,
    required: true
  },
  vfjsModel: {
    type: Object,
    required: true
  },
  vfjsState: {
    type: Object,
    required: true
  }
};
/* harmony default export */ __webpack_exports__["default"] = (props);

/***/ }),

/***/ "./vfjs-global-component/index.js":
/*!****************************************!*\
  !*** ./vfjs-global-component/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vfjs_global_mixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vfjs-global-mixin */ "./vfjs-global-mixin/index.js");

var VueFormJsonSchema = {
  name: 'vue-form-json-schema',
  mixins: [_vfjs_global_mixin__WEBPACK_IMPORTED_MODULE_0__["default"]],
  render: function render() {
    return this.$createElement(this.tag, this.vfjsFields);
  }
};
/* harmony default export */ __webpack_exports__["default"] = (VueFormJsonSchema);

/***/ }),

/***/ "./vfjs-global-mixin/computed.js":
/*!***************************************!*\
  !*** ./vfjs-global-mixin/computed.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var computed = {
  vfjsSchemaValid: function vfjsSchemaValid() {
    return this.vfjsSchema.every(this.isVfjsFieldSchemaValid);
  },
  vfjsModelValid: function vfjsModelValid() {
    return this.vfjsSchema.every(this.isVfjsFieldModelValid);
  }
};
/* harmony default export */ __webpack_exports__["default"] = (computed);

/***/ }),

/***/ "./vfjs-global-mixin/data.js":
/*!***********************************!*\
  !*** ./vfjs-global-mixin/data.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./constants/index.js");


var data = function data() {
  return {
    vfjsBus: {},
    vfjsEvents: [_constants__WEBPACK_IMPORTED_MODULE_0__["VFJS_EVENT_FIELD_MODEL_CLEAR_HIDDEN"], _constants__WEBPACK_IMPORTED_MODULE_0__["VFJS_EVENT_FIELD_MODEL_UPDATE"], _constants__WEBPACK_IMPORTED_MODULE_0__["VFJS_EVENT_FIELD_MODEL_VALIDATE"], _constants__WEBPACK_IMPORTED_MODULE_0__["VFJS_EVENT_FIELD_STATE_UPDATE"], _constants__WEBPACK_IMPORTED_MODULE_0__["VFJS_EVENT_MODEL_UPDATE"], _constants__WEBPACK_IMPORTED_MODULE_0__["VFJS_EVENT_MODEL_UPDATED"], _constants__WEBPACK_IMPORTED_MODULE_0__["VFJS_EVENT_MODEL_VALIDATE"], _constants__WEBPACK_IMPORTED_MODULE_0__["VFJS_EVENT_STATE_UPDATE"], _constants__WEBPACK_IMPORTED_MODULE_0__["VFJS_EVENT_STATE_UPDATED"], _constants__WEBPACK_IMPORTED_MODULE_0__["VFJS_EVENT_UI_FIELDS_UPDATE"]],
    vfjsFields: [],
    vfjsFieldsActive: [],
    vfjsFieldsRequired: [],
    vfjsModel: {},
    vfjsOptions: {
      allowInvalidModel: true,
      ajv: {
        keywords: {},
        locale: null,
        options: {
          allErrors: true
        }
      },
      castToSchemaType: false,
      showValidationErrors: false,
      validate: true,
      validateOnLoad: true,
      validateOnChange: true,
      valueProp: 'value'
    },
    vfjsSchema: {},
    vfjsState: {},
    vfjsUiSchema: []
  };
};

/* harmony default export */ __webpack_exports__["default"] = (data);

/***/ }),

/***/ "./vfjs-global-mixin/index.js":
/*!************************************!*\
  !*** ./vfjs-global-mixin/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _computed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./computed */ "./vfjs-global-mixin/computed.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data */ "./vfjs-global-mixin/data.js");
/* harmony import */ var _methods__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./methods */ "./vfjs-global-mixin/methods/index.js");
/* harmony import */ var _props__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./props */ "./vfjs-global-mixin/props.js");
/* harmony import */ var _watch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./watch */ "./vfjs-global-mixin/watch.js");





var vfjsGlobalMixin = {
  created: function created() {
    this.vfjsInitialize();
  },
  beforeDestroy: function beforeDestroy() {
    this.vfjsDestroy();
  },
  computed: _computed__WEBPACK_IMPORTED_MODULE_0__["default"],
  data: _data__WEBPACK_IMPORTED_MODULE_1__["default"],
  props: _props__WEBPACK_IMPORTED_MODULE_3__["default"],
  methods: _methods__WEBPACK_IMPORTED_MODULE_2__["default"],
  watch: _watch__WEBPACK_IMPORTED_MODULE_4__["default"]
};
/* harmony default export */ __webpack_exports__["default"] = (vfjsGlobalMixin);

/***/ }),

/***/ "./vfjs-global-mixin/methods/index.js":
/*!********************************************!*\
  !*** ./vfjs-global-mixin/methods/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vfjs_bus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vfjs-bus */ "./vfjs-global-mixin/methods/vfjs-bus/index.js");
/* harmony import */ var _vfjs_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vfjs-helpers */ "./vfjs-global-mixin/methods/vfjs-helpers/index.js");
/* harmony import */ var _vfjs_lifecycle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vfjs-lifecycle */ "./vfjs-global-mixin/methods/vfjs-lifecycle/index.js");
/* harmony import */ var _vfjs_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vfjs-model */ "./vfjs-global-mixin/methods/vfjs-model/index.js");
/* harmony import */ var _vfjs_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vfjs-state */ "./vfjs-global-mixin/methods/vfjs-state/index.js");
/* harmony import */ var _vfjs_schema__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vfjs-schema */ "./vfjs-global-mixin/methods/vfjs-schema/index.js");
/* harmony import */ var _vfjs_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vfjs-ui */ "./vfjs-global-mixin/methods/vfjs-ui/index.js");
/* harmony import */ var _vfjs_validation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./vfjs-validation */ "./vfjs-global-mixin/methods/vfjs-validation/index.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










var vfjsMethods = _objectSpread({}, _vfjs_bus__WEBPACK_IMPORTED_MODULE_0__["default"], _vfjs_lifecycle__WEBPACK_IMPORTED_MODULE_2__["default"], _vfjs_helpers__WEBPACK_IMPORTED_MODULE_1__["default"], _vfjs_model__WEBPACK_IMPORTED_MODULE_3__["default"], _vfjs_schema__WEBPACK_IMPORTED_MODULE_5__["default"], _vfjs_state__WEBPACK_IMPORTED_MODULE_4__["default"], _vfjs_ui__WEBPACK_IMPORTED_MODULE_6__["default"], _vfjs_validation__WEBPACK_IMPORTED_MODULE_7__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (vfjsMethods);

/***/ }),

/***/ "./vfjs-global-mixin/methods/vfjs-bus/index.js":
/*!*****************************************************!*\
  !*** ./vfjs-global-mixin/methods/vfjs-bus/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var minibus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! minibus */ "minibus");
/* harmony import */ var minibus__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(minibus__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../constants */ "./constants/index.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var vfjsBus = {
  addVfjsListener: function addVfjsListener(event, callback) {
    this.vfjsBus.on(event, function (value) {
      return callback(event, value);
    });
  },
  addVfjsListeners: function addVfjsListeners() {
    var _this = this;

    var events = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var callback = arguments.length > 1 ? arguments[1] : undefined;
    events.forEach(function (event) {
      return _this.addVfjsListener(event, callback);
    });
  },
  removeVfjsListener: function removeVfjsListener(event) {
    this.vfjsBus.off(event);
  },
  removeVfjsListeners: function removeVfjsListeners() {
    var events = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    events.forEach(this.removeVfjsListener);
  },
  removeVfjsListenersAll: function removeVfjsListenersAll() {
    this.vfjsBus.off();
  },
  vfjsBusEventHandler: function vfjsBusEventHandler(event, payload) {
    var _this2 = this,
        _eventActions;

    var eventActions = (_eventActions = {}, _defineProperty(_eventActions, _constants__WEBPACK_IMPORTED_MODULE_2__["VFJS_EVENT_FIELD_MODEL_CLEAR_HIDDEN"], function () {
      var allModels = _this2.vfjsHelperGetFieldsWithClearOnHide(_this2.uiSchema);

      var activeModels = _this2.vfjsHelperGetFieldsWithClearOnHide(_this2.vfjsFieldsActive);

      var inactiveModels = Object.keys(allModels).reduce(function (models, key) {
        if (!(key in activeModels)) {
          // eslint-disable-next-line no-param-reassign
          models[key] = allModels[key];
        }

        return models;
      }, {});
      Object.keys(inactiveModels).forEach(function (key) {
        var clearModels = inactiveModels[key];

        if (Array.isArray(clearModels)) {
          clearModels.forEach(function (clearModel) {
            var newModel = _this2.vfjsHelperApplyFieldModel(typeof clearModel === 'string' ? clearModel : key, undefined);

            _this2.setVfjsModel(newModel, true);
          });
        } else {
          var newModel = _this2.vfjsHelperApplyFieldModel(typeof clearModels === 'string' ? clearModels : key, undefined);

          _this2.setVfjsModel(newModel, true);
        }
      });
    }), _defineProperty(_eventActions, _constants__WEBPACK_IMPORTED_MODULE_2__["VFJS_EVENT_FIELD_MODEL_VALIDATE"], function (_ref) {
      var key = _ref.key,
          value = _ref.value,
          _cb = _ref.cb;

      var vfjsModel = _this2.vfjsHelperApplyFieldModel(key, value);

      _this2.vfjsBus.emit(_constants__WEBPACK_IMPORTED_MODULE_2__["VFJS_EVENT_MODEL_VALIDATE"], {
        vfjsModel: vfjsModel,
        cb: function cb() {
          var model = {};
          Object(lodash__WEBPACK_IMPORTED_MODULE_1__["set"])(model, key, value);
          var schema = {
            type: 'object',
            required: _this2.vfjsHelperFieldIsRequired(key) ? [key] : [],
            properties: _defineProperty({}, key, _this2.getVfjsSchema(key) || {})
          };

          var errors = _this2.getVfjsValidationErrors(model, schema);

          if (_cb && typeof _cb === 'function') {
            _cb(errors);
          }
        }
      });
    }), _defineProperty(_eventActions, _constants__WEBPACK_IMPORTED_MODULE_2__["VFJS_EVENT_FIELD_MODEL_UPDATE"], function (_ref2) {
      var key = _ref2.key,
          originalValue = _ref2.value,
          _cb2 = _ref2.cb;
      var value = originalValue;
      var _this2$vfjsOptions$ca = _this2.vfjsOptions.castToSchemaType,
          castToSchemaType = _this2$vfjsOptions$ca === void 0 ? false : _this2$vfjsOptions$ca;

      if (castToSchemaType) {
        // Cast model to the type specified in its schema
        value = _this2.vfjsHelperCastValueToSchemaType(key, value);
      }

      _this2.vfjsBus.emit(_constants__WEBPACK_IMPORTED_MODULE_2__["VFJS_EVENT_FIELD_MODEL_VALIDATE"], {
        key: key,
        value: value,
        cb: function cb(errors) {
          var vfjsFieldModel = _this2.getVfjsFieldModel(key);

          var newFieldState = Object.assign({}, _this2.getVfjsFieldState(key), {
            vfjsFieldDirty: !Object(lodash__WEBPACK_IMPORTED_MODULE_1__["isEqual"])(vfjsFieldModel, value),
            vfjsFieldErrors: errors
          });

          _this2.setVfjsFieldState(newFieldState, key);

          if (!errors || errors && errors.length === 0 || _this2.vfjsOptions.allowInvalidModel) {
            var newModel = _this2.vfjsHelperApplyFieldModel(key, value);

            _this2.setVfjsModel(newModel);
          }

          if (_cb2 && typeof _cb2 === 'function') {
            _cb2(errors);
          }
        }
      });
    }), _defineProperty(_eventActions, _constants__WEBPACK_IMPORTED_MODULE_2__["VFJS_EVENT_FIELD_STATE_UPDATE"], function (_ref3) {
      var key = _ref3.key,
          value = _ref3.value,
          cb = _ref3.cb;

      _this2.vfjsBus.emit(_constants__WEBPACK_IMPORTED_MODULE_2__["VFJS_EVENT_STATE_UPDATE"], {
        key: key,
        value: value,
        cb: cb
      });
    }), _defineProperty(_eventActions, _constants__WEBPACK_IMPORTED_MODULE_2__["VFJS_EVENT_MODEL_VALIDATE"], function (_ref4) {
      var vfjsModel = _ref4.vfjsModel,
          _cb3 = _ref4.cb;

      var vfjsErrors = _this2.getVfjsValidationErrors(vfjsModel);

      _this2.vfjsBus.emit(_constants__WEBPACK_IMPORTED_MODULE_2__["VFJS_EVENT_STATE_UPDATE"], {
        key: 'vfjsErrors',
        value: vfjsErrors,
        cb: function cb() {
          var vfjsState = _this2.getVfjsState();

          _this2.$emit(_constants__WEBPACK_IMPORTED_MODULE_2__["VFJS_EXTERNAL_EVENT_VALIDATED"], vfjsState.vfjsErrors.length === 0);

          if (_cb3 && typeof _cb3 === 'function') {
            _cb3(vfjsErrors);
          }
        }
      });
    }), _defineProperty(_eventActions, _constants__WEBPACK_IMPORTED_MODULE_2__["VFJS_EVENT_UI_FIELDS_UPDATE"], function () {
      _this2.setVfjsUiFieldsActive();
    }), _defineProperty(_eventActions, _constants__WEBPACK_IMPORTED_MODULE_2__["VFJS_EVENT_MODEL_UPDATED"], function () {
      _this2.vfjsBus.emit(_constants__WEBPACK_IMPORTED_MODULE_2__["VFJS_EVENT_UI_FIELDS_UPDATE"]); // Clear hidden fields


      _this2.vfjsBus.emit(_constants__WEBPACK_IMPORTED_MODULE_2__["VFJS_EVENT_FIELD_MODEL_CLEAR_HIDDEN"]);

      _this2.$emit(_constants__WEBPACK_IMPORTED_MODULE_2__["VFJS_EXTERNAL_EVENT_CHANGE"], _this2.getVfjsModel());
    }), _defineProperty(_eventActions, _constants__WEBPACK_IMPORTED_MODULE_2__["VFJS_EVENT_STATE_UPDATE"], function (_ref5) {
      var key = _ref5.key,
          value = _ref5.value,
          cb = _ref5.cb;
      var newVfjsState = Object.assign({}, _this2.getVfjsState(), _defineProperty({}, key, value));

      _this2.setVfjsState(newVfjsState);

      if (cb && typeof cb === 'function') {
        cb();
      }
    }), _defineProperty(_eventActions, _constants__WEBPACK_IMPORTED_MODULE_2__["VFJS_EVENT_STATE_UPDATED"], function (cb) {
      var vfjsState = _objectSpread({
        vfjsErrors: [],
        vfjsFieldsActive: _this2.vfjsFieldsActive,
        vfjsFieldsActiveModels: _this2.vfjsFieldsActiveModels
      }, _this2.getVfjsState());

      _this2.$emit(_constants__WEBPACK_IMPORTED_MODULE_2__["VFJS_EXTERNAL_EVENT_STATE_CHANGE"], vfjsState);

      if (cb && typeof cb === 'function') {
        cb();
      }
    }), _eventActions);

    if (event && event in eventActions) {
      eventActions[event](payload);
    }
  },
  vfjsBusInitialize: function vfjsBusInitialize() {
    this.vfjsBus = minibus__WEBPACK_IMPORTED_MODULE_0___default.a.create();
  }
};
/* harmony default export */ __webpack_exports__["default"] = (vfjsBus);

/***/ }),

/***/ "./vfjs-global-mixin/methods/vfjs-helpers/index.js":
/*!*********************************************************!*\
  !*** ./vfjs-global-mixin/methods/vfjs-helpers/index.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vfjs_field_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../vfjs-field-component */ "./vfjs-field-component/index.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var vfjsHelpers = {
  vfjsHelperCreateField: function vfjsHelperCreateField(vfjsFieldUiSchema) {
    var vfjsFieldId = vfjsFieldUiSchema.id,
        _vfjsFieldUiSchema$ch = vfjsFieldUiSchema.children,
        children = _vfjsFieldUiSchema$ch === void 0 ? [] : _vfjsFieldUiSchema$ch,
        component = vfjsFieldUiSchema.component,
        vfjsFieldErrorHandler = vfjsFieldUiSchema.errorHandler,
        _vfjsFieldUiSchema$er = vfjsFieldUiSchema.errorOptions,
        vfjsFieldErrorOptions = _vfjsFieldUiSchema$er === void 0 ? {} : _vfjsFieldUiSchema$er,
        _vfjsFieldUiSchema$fi = vfjsFieldUiSchema.fieldOptions,
        vfjsFieldOptions = _vfjsFieldUiSchema$fi === void 0 ? {} : _vfjsFieldUiSchema$fi,
        _vfjsFieldUiSchema$mo = vfjsFieldUiSchema.model,
        vfjsFieldModelKey = _vfjsFieldUiSchema$mo === void 0 ? '' : _vfjsFieldUiSchema$mo,
        _vfjsFieldUiSchema$re = vfjsFieldUiSchema.required,
        vfjsFieldRequired = _vfjsFieldUiSchema$re === void 0 ? false : _vfjsFieldUiSchema$re,
        _vfjsFieldUiSchema$va = vfjsFieldUiSchema.valueProp,
        vfjsFieldValueProp = _vfjsFieldUiSchema$va === void 0 ? this.vfjsOptions.valueProp : _vfjsFieldUiSchema$va;
    var vfjsFieldSchema = this.getVfjsFieldSchema(vfjsFieldModelKey) || {};
    var vfjsFieldSchemas = this.schemas;
    var vfjsFieldModel = this.getVfjsFieldModel(vfjsFieldModelKey);
    var vfjsFieldState = this.getVfjsFieldState(vfjsFieldModelKey) || {};
    var vfjsModel = this.getVfjsModel();
    var vfjsState = this.getVfjsState(); // Get field errors

    var _vfjsFieldState$vfjsF = vfjsFieldState.vfjsFieldErrors,
        vfjsFieldErrors = _vfjsFieldState$vfjsF === void 0 ? [] : _vfjsFieldState$vfjsF; // If this field is an errorHandler we pass the errors as the children
    // but only if the error handler does not have children of its own or
    // domProps.innerHTML is set

    var domProps = vfjsFieldOptions.domProps;
    var generateErrorsAsChildren = vfjsFieldErrorHandler && vfjsFieldErrors.length > 0 && (!domProps || !domProps.innerHTML) && children.length === 0;
    var vfjsChildren = generateErrorsAsChildren ? this.vfjsHelperGetErrors(vfjsFieldErrors, vfjsFieldId) : children.map(this.vfjsHelperCreateField);

    var props = _objectSpread({}, vfjsFieldOptions, {
      vfjsBus: this.vfjsBus,
      vfjsChildren: vfjsChildren,
      vfjsChildrenUiSchema: children,
      vfjsFieldErrorHandler: vfjsFieldErrorHandler,
      vfjsFieldErrorOptions: vfjsFieldErrorOptions,
      vfjsFieldErrors: vfjsFieldErrors,
      vfjsFieldId: vfjsFieldId,
      vfjsFieldModel: vfjsFieldModel,
      vfjsFieldModelKey: vfjsFieldModelKey,
      vfjsFieldOptions: vfjsFieldOptions,
      vfjsFieldRequired: vfjsFieldRequired,
      vfjsFieldSchema: vfjsFieldSchema,
      vfjsFieldSchemas: vfjsFieldSchemas,
      vfjsFieldState: vfjsFieldState,
      vfjsFieldUiSchema: vfjsFieldUiSchema,
      vfjsFieldValueProp: vfjsFieldValueProp,
      vfjsOptions: this.vfjsOptions,
      vfjsModel: vfjsModel,
      vfjsState: vfjsState
    });

    return this.vfjsHelperCreateComponent({
      children: vfjsChildren,
      component: component,
      props: props
    });
  },
  vfjsHelperGetErrors: function vfjsHelperGetErrors() {
    var _this = this;

    var errors = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var id = arguments.length > 1 ? arguments[1] : undefined;
    return errors.map(function (error, index) {
      return _this.vfjsHelperCreateField({
        id: "".concat(id, "-error-").concat(index),
        component: 'div',
        fieldOptions: {
          class: ['vfjs-error', 'vfjs-default-error-handler'],
          domProps: {
            innerHTML: error.message
          }
        }
      });
    });
  },
  vfjsHelperHashString: function vfjsHelperHashString(string) {
    var binary = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 62;
    var integer = 0;

    for (var i = 0; i < string.length; i++) {
      var char = string.charCodeAt(i);
      integer = integer * 33 ^ char; // eslint-disable-line no-bitwise
    } // Convert int to unsigned to get a positive number


    integer >>>= 0; // eslint-disable-line no-bitwise

    var chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var array = []; // Create an alphanumeric hash of unsigned int

    while (integer >= binary) {
      var _char = integer % binary;

      array.push(chars[_char]);
      integer = Math.floor(integer / binary);
    }

    return array.join('');
  },
  vfjsHelperCreateComponent: function vfjsHelperCreateComponent(_ref) {
    var _ref$children = _ref.children,
        children = _ref$children === void 0 ? [] : _ref$children,
        component = _ref.component,
        props = _ref.props;
    // If the component matches one of the local components
    // passed in with the `components` prop
    var localComponent = this.vfjsComponents[component];

    if (!props.vfjsFieldModelKey) {
      return this.$createElement(localComponent || component, _objectSpread({
        key: props.vfjsFieldId
      }, props.vfjsFieldOptions), children);
    }

    return this.$createElement(_vfjs_field_component__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: "".concat(props.vfjsFieldId, "-wrapper"),
      props: _objectSpread({}, props, {
        vfjsComponent: localComponent || component
      })
    }, children);
  },
  vfjsHelperApplyFieldModel: function vfjsHelperApplyFieldModel(key, value) {
    var newVfjsModel = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["cloneDeep"])(this.getVfjsModel());
    Object(lodash__WEBPACK_IMPORTED_MODULE_0__["set"])(newVfjsModel, key, value);
    return newVfjsModel;
  },
  // The level param helps us to differentiate further between fields.
  // As the same field configuration may be present throughout the ui schema
  // and thus have the same hash.
  //
  // We mediate this by providing the depth level as a second param
  // which will make the hash unique for every field
  vfjsHelperGenerateField: function vfjsHelperGenerateField(field) {
    var _this2 = this;

    var level = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    if (!field) {
      return false;
    }

    var _field$children = field.children,
        children = _field$children === void 0 ? [] : _field$children,
        fieldWithoutChildren = _objectWithoutProperties(field, ["children"]);

    var objString = JSON.stringify({
      fieldWithoutChildren: fieldWithoutChildren,
      level: level
    });
    var id = this.vfjsHelperHashString(objString);
    return _objectSpread({}, field, {
      id: id,
      children: children.map(function (child, i) {
        return _this2.vfjsHelperGenerateField(child, (i + 1) * (level + 1));
      })
    });
  },
  vfjsHelperChildArrayMapper: function vfjsHelperChildArrayMapper(_ref2, parentModel, index) {
    var model = _ref2.model,
        _ref2$children = _ref2.children,
        children = _ref2$children === void 0 ? [] : _ref2$children,
        child = _objectWithoutProperties(_ref2, ["model", "children"]);

    return _objectSpread({}, child, {
      model: this.vfjsHelperGetChildArrayModelAtIndex(model, parentModel, index),
      children: this.vfjsHelperChildArrayReducerMapper(parentModel, children, index)
    });
  },
  vfjsHelperChildArrayReducerMapper: function vfjsHelperChildArrayReducerMapper(model) {
    var _this3 = this;

    var children = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var index = arguments.length > 2 ? arguments[2] : undefined;
    return children.reduce(function (allChildren, child) {
      return [].concat(_toConsumableArray(allChildren), [_this3.vfjsHelperChildArrayMapper(child, model, index)]);
    }, []);
  },
  vfjsHelperGetChildArrayModelAtIndex: function vfjsHelperGetChildArrayModelAtIndex(model, parentModel, index) {
    var relativeModel = this.vfjsHelperGetRelativeModel(model, parentModel);
    return relativeModel ? "".concat(parentModel, ".").concat(index, ".").concat(relativeModel) : model;
  },
  vfjsHelperGetRelativeModel: function vfjsHelperGetRelativeModel(model, parentModel) {
    return model ? String(model).substr(parentModel.length + 1) : model;
  },
  vfjsHelperGetParentModel: function vfjsHelperGetParentModel(model) {
    var parentIndex = String(model).lastIndexOf('.');
    return String(model).substr(0, parentIndex);
  },
  vfjsHelperFieldIsRequired: function vfjsHelperFieldIsRequired(model) {
    if (model) {
      var parentModel = this.vfjsHelperGetParentModel(model);

      if (parentModel) {
        return this.vfjsFieldsRequired.indexOf(parentModel) !== -1;
      }

      return this.vfjsFieldsRequired.indexOf(model) !== -1;
    }

    return false;
  },
  vfjsHelperFieldIsArray: function vfjsHelperFieldIsArray(key) {
    if (!key) {
      return false;
    }

    var schema = this.getVfjsFieldSchema(key);
    return schema ? Array.isArray(schema.items) : false;
  },
  vfjsHelperGetFieldsWithClearOnHide: function vfjsHelperGetFieldsWithClearOnHide() {
    var _this4 = this;

    var fields = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    return fields.reduce(function (models, _ref3) {
      var _ref3$children = _ref3.children,
          children = _ref3$children === void 0 ? [] : _ref3$children,
          _ref3$displayOptions = _ref3.displayOptions,
          displayOptions = _ref3$displayOptions === void 0 ? {} : _ref3$displayOptions,
          model = _ref3.model;

      if (displayOptions.clearOnHide) {
        if (model) {
          // eslint-disable-next-line no-param-reassign
          models[model] = displayOptions.clearOnHide;
        } else if (!model && typeof displayOptions.clearOnHide === 'string') {
          // eslint-disable-next-line no-param-reassign
          models[displayOptions.clearOnHide] = displayOptions.clearOnHide;
        }
      }

      return _objectSpread({}, models, _this4.vfjsHelperGetFieldsWithClearOnHide(children));
    }, {});
  },
  vfjsHelperCastValueToSchemaType: function vfjsHelperCastValueToSchemaType(key, value) {
    if (typeof value !== 'undefined') {
      var _this$getVfjsSchema = this.getVfjsSchema(key),
          type = _this$getVfjsSchema.type; // Convert to a numeric value


      if (type === 'number') {
        return Number(value);
      }

      if (type === 'integer') {
        return parseInt(value);
      } // Convert to a boolean value


      if (type === 'boolean' && (value === 'true' || value === 'false')) {
        return value === 'true';
      }
    }

    return value;
  },
  getVfjsFieldsModels: function getVfjsFieldsModels(fields) {
    var _this5 = this;

    return fields.reduce(function (models, _ref4) {
      var _ref4$children = _ref4.children,
          children = _ref4$children === void 0 ? [] : _ref4$children,
          model = _ref4.model;
      return [].concat(_toConsumableArray(models), _toConsumableArray(model && models.indexOf(model) === -1 ? [model] : []), _toConsumableArray(_this5.getVfjsFieldsModels(children)));
    }, []);
  }
};
/* harmony default export */ __webpack_exports__["default"] = (vfjsHelpers);

/***/ }),

/***/ "./vfjs-global-mixin/methods/vfjs-lifecycle/index.js":
/*!***********************************************************!*\
  !*** ./vfjs-global-mixin/methods/vfjs-lifecycle/index.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var vfjsLifecycle = {
  vfjsDestroy: function vfjsDestroy() {
    var _this = this;

    this.vfjsEvents.forEach(function (event) {
      return _this.removeVfjsListener(event);
    });
  },
  vfjsInitialize: function vfjsInitialize() {
    // Set the JSON schema
    this.setVfjsSchema(this.schema); // Set up options

    this.vfjsOptions = _objectSpread({}, this.vfjsOptions, this.options); // Set up the local components

    this.vfjsComponents = this.components; // Set up the plugin's internal bus

    this.vfjsBusInitialize(); // Register events in vfjsEvents to vfjsBusEventHandler

    this.addVfjsListeners(this.vfjsEvents, this.vfjsBusEventHandler); // Set the model from props

    this.setVfjsModel(this.model, true); // Set up validation

    this.vfjsValidationInitialize(); // Set up ui schema

    this.setVfjsUiSchema(this.uiSchema); // Check and set active fields (visible)

    this.setVfjsUiFieldsActive();
  }
};
/* harmony default export */ __webpack_exports__["default"] = (vfjsLifecycle);

/***/ }),

/***/ "./vfjs-global-mixin/methods/vfjs-model/getters.js":
/*!*********************************************************!*\
  !*** ./vfjs-global-mixin/methods/vfjs-model/getters.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

var vfjsModelGetters = {
  getVfjsFieldModel: function getVfjsFieldModel(key) {
    if (key) {
      return this.getVfjsModel(key);
    }

    return this.vfjsFieldModelKey ? this.getVfjsModel(this.vfjsFieldModelKey) : null;
  },
  getVfjsModel: function getVfjsModel(key) {
    if (!key || key === true) {
      return this.vfjsModel;
    }

    return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(this.vfjsModel, key);
  }
};
/* harmony default export */ __webpack_exports__["default"] = (vfjsModelGetters);

/***/ }),

/***/ "./vfjs-global-mixin/methods/vfjs-model/index.js":
/*!*******************************************************!*\
  !*** ./vfjs-global-mixin/methods/vfjs-model/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getters */ "./vfjs-global-mixin/methods/vfjs-model/getters.js");
/* harmony import */ var _setters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setters */ "./vfjs-global-mixin/methods/vfjs-model/setters.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var vfjsModel = _objectSpread({}, _getters__WEBPACK_IMPORTED_MODULE_0__["default"], _setters__WEBPACK_IMPORTED_MODULE_1__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (vfjsModel);

/***/ }),

/***/ "./vfjs-global-mixin/methods/vfjs-model/setters.js":
/*!*********************************************************!*\
  !*** ./vfjs-global-mixin/methods/vfjs-model/setters.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../constants */ "./constants/index.js");


var vfjsModelSetters = {
  setVfjsFieldModel: function setVfjsFieldModel(value, key) {
    this.vfjsBus.emit(_constants__WEBPACK_IMPORTED_MODULE_1__["VFJS_EVENT_FIELD_MODEL_UPDATE"], {
      key: key || this.vfjsFieldModelKey,
      value: value
    });
  },
  setVfjsModel: function setVfjsModel(model) {
    var silent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    if (!Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isEqual"])(model, this.vfjsModel)) {
      this.vfjsModel = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["cloneDeep"])(model);

      if (!silent) {
        this.vfjsBus.emit(_constants__WEBPACK_IMPORTED_MODULE_1__["VFJS_EVENT_MODEL_UPDATED"], this.getVfjsModel());
      }
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (vfjsModelSetters);

/***/ }),

/***/ "./vfjs-global-mixin/methods/vfjs-schema/getters.js":
/*!**********************************************************!*\
  !*** ./vfjs-global-mixin/methods/vfjs-schema/getters.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

var vfjsSchemaGetters = {
  getVfjsFieldSchema: function getVfjsFieldSchema(key) {
    if (key) {
      return this.getVfjsSchema(key);
    }

    return this.vfjsFieldModelKey ? this.getVfjsSchema(this.vfjsFieldModelKey) : null;
  },
  getVfjsSchema: function getVfjsSchema(key) {
    if (key) {
      return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(this.vfjsSchema.properties, key) || this.getVfjsSchemaFallback(key);
    }

    return this.vfjsSchema;
  },
  getVfjsSchemaPath: function getVfjsSchemaPath(path, key) {
    var vfjsSchema = this.getVfjsSchema();

    if (!path) {
      if (vfjsSchema.items) {
        return this.getVfjsSchemaPath('items');
      }

      return "properties.".concat(key);
    }

    var schema = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(vfjsSchema, path);

    if (schema) {
      if (schema.items instanceof Array) {
        // FIXME: The same schema is used regardless of item's index in the array
        // This limitation is due to that schema prop must be an object and can not be an array
        var arrayPath = this.getVfjsSchemaPath("".concat(path, ".items"));
        return this.getVfjsSchemaPath("".concat(arrayPath, ".0"));
      } else if (schema.properties instanceof Object) {
        return this.getVfjsSchemaPath("".concat(path, ".properties"));
      }
    }

    if (!key) {
      return path;
    }

    return "".concat(path, ".").concat(key);
  },
  getVfjsSchemaFallback: function getVfjsSchemaFallback(key) {
    var keys = String(key).split('.');
    var schema = keys.reduce(this.getVfjsSchemaPath, '');
    return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(this.getVfjsSchema(), schema);
  }
};
/* harmony default export */ __webpack_exports__["default"] = (vfjsSchemaGetters);

/***/ }),

/***/ "./vfjs-global-mixin/methods/vfjs-schema/index.js":
/*!********************************************************!*\
  !*** ./vfjs-global-mixin/methods/vfjs-schema/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getters */ "./vfjs-global-mixin/methods/vfjs-schema/getters.js");
/* harmony import */ var _setters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setters */ "./vfjs-global-mixin/methods/vfjs-schema/setters.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var vfjsSchema = _objectSpread({}, _getters__WEBPACK_IMPORTED_MODULE_0__["default"], _setters__WEBPACK_IMPORTED_MODULE_1__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (vfjsSchema);

/***/ }),

/***/ "./vfjs-global-mixin/methods/vfjs-schema/setters.js":
/*!**********************************************************!*\
  !*** ./vfjs-global-mixin/methods/vfjs-schema/setters.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

var vfjsSchemaSetters = {
  setVfjsSchema: function setVfjsSchema(value) {
    if (!Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isEqual"])(value, this.vfjsSchema)) {
      this.vfjsSchema = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["cloneDeep"])(value);
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (vfjsSchemaSetters);

/***/ }),

/***/ "./vfjs-global-mixin/methods/vfjs-state/getters.js":
/*!*********************************************************!*\
  !*** ./vfjs-global-mixin/methods/vfjs-state/getters.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

var vfjsStateGetters = {
  getVfjsState: function getVfjsState(key) {
    if (key) {
      return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(this.vfjsState, key);
    }

    return this.vfjsState;
  },
  getVfjsFieldState: function getVfjsFieldState(key) {
    if (key) {
      return this.getVfjsState(key);
    }

    return this.vfjsFieldModelKey ? this.getVfjsState(this.vfjsFieldModelKey) : null;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (vfjsStateGetters);

/***/ }),

/***/ "./vfjs-global-mixin/methods/vfjs-state/index.js":
/*!*******************************************************!*\
  !*** ./vfjs-global-mixin/methods/vfjs-state/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getters */ "./vfjs-global-mixin/methods/vfjs-state/getters.js");
/* harmony import */ var _setters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setters */ "./vfjs-global-mixin/methods/vfjs-state/setters.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var vfjsState = _objectSpread({}, _getters__WEBPACK_IMPORTED_MODULE_0__["default"], _setters__WEBPACK_IMPORTED_MODULE_1__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (vfjsState);

/***/ }),

/***/ "./vfjs-global-mixin/methods/vfjs-state/setters.js":
/*!*********************************************************!*\
  !*** ./vfjs-global-mixin/methods/vfjs-state/setters.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../constants */ "./constants/index.js");


var vfjsStateSetters = {
  setVfjsFieldState: function setVfjsFieldState(value, key) {
    this.vfjsBus.emit(_constants__WEBPACK_IMPORTED_MODULE_1__["VFJS_EVENT_FIELD_STATE_UPDATE"], {
      key: key || this.vfjsFieldModelKey,
      value: value
    });
  },
  setVfjsState: function setVfjsState(state) {
    var _this = this;

    if (!Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isEqual"])(state, this.vfjsState)) {
      this.vfjsState = Object.assign({}, this.getVfjsState(), state);
      this.vfjsBus.emit(_constants__WEBPACK_IMPORTED_MODULE_1__["VFJS_EVENT_STATE_UPDATED"], function () {
        _this.setVfjsFields();
      });
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (vfjsStateSetters);

/***/ }),

/***/ "./vfjs-global-mixin/methods/vfjs-ui/getters.js":
/*!******************************************************!*\
  !*** ./vfjs-global-mixin/methods/vfjs-ui/getters.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }


var vfjsUiGetters = {
  getVfjsFields: function getVfjsFields() {
    var _this = this;

    var fields = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    return fields.reduce(function (vfjsFields, field) {
      return [].concat(_toConsumableArray(vfjsFields), [_this.vfjsHelperCreateField(field)]);
    }, []);
  },
  getVfjsUiFieldVisible: function getVfjsUiFieldVisible(field) {
    if (field.errorHandler) {
      if (!this.vfjsOptions.showValidationErrors) {
        var state = this.getVfjsFieldState(field.model);

        if (!state || state && (!state.vfjsFieldBlur || !state.vfjsFieldDirty)) {
          return false;
        }
      }

      var _value = this.getVfjsFieldModel(field.model);

      var _schema = this.getVfjsFieldSchema(field.model);

      this.ajv.validate(_schema, _value);

      var _oldErrors = this.ajv.errors ? this.ajv.errors : []; // Only continue if the errorHandlers field model has errors


      if (_oldErrors.length === 0) {
        return false;
      }
    } // If field does not have any displayOptions it should be visible


    if (!field.displayOptions) {
      return true;
    } // Get model and schema


    var _field$displayOptions = field.displayOptions,
        model = _field$displayOptions.model,
        _field$displayOptions2 = _field$displayOptions.schema,
        schema = _field$displayOptions2 === void 0 ? {} : _field$displayOptions2; // Get the field's model value
    // It will fall back to the full model if model is undefined

    var value = typeof model === 'undefined' ? this.getVfjsModel() : this.getVfjsFieldModel(model); // Validate and check if we got any errors
    // const errors = model
    //   ? this.getVfjsValidationErrors(value, schema)
    //   : this.getVfjsModelValidationErrors(model, value, schema);
    // TODO: There's something wrong with the evaluation done in getVfjsValidationErrors
    // Temporarily revert back to old behaviour with validating in this function

    this.ajv.validate(schema, value);
    var oldErrors = this.ajv.errors ? this.ajv.errors : [];
    return oldErrors.length === 0;
  },
  getVfjsUiFieldArrayChildrenActive: function getVfjsUiFieldArrayChildrenActive(model, children) {
    var _this2 = this;

    var vfjsFieldModel = this.getVfjsFieldModel(model) || [];
    return vfjsFieldModel.map(function (v, i) {
      return _this2.vfjsHelperChildArrayReducerMapper(model, children, i);
    }).map(this.getVfjsUiFieldsActive);
  },
  getVfjsUiField: function getVfjsUiField(_ref) {
    var _ref$children = _ref.children,
        children = _ref$children === void 0 ? [] : _ref$children,
        model = _ref.model,
        field = _objectWithoutProperties(_ref, ["children", "model"]);

    if (this.getVfjsUiFieldVisible(_objectSpread({}, field, {
      model: model
    }))) {
      var isArray = this.vfjsHelperFieldIsArray(model);
      var required = this.vfjsHelperFieldIsRequired(model);

      if (isArray) {
        return _objectSpread({}, field, {
          model: model,
          required: required,
          children: this.getVfjsUiFieldArrayChildrenActive(model, children)
        });
      }

      return _objectSpread({}, field, {
        model: model,
        required: required,
        children: this.getVfjsUiFieldsActive(children)
      });
    }

    return false;
  },
  getVfjsUiFieldsActive: function getVfjsUiFieldsActive(fields) {
    var _this3 = this;

    return fields.reduce(function (newFields, field, index) {
      if (field) {
        var newField = _this3.getVfjsUiField(field);

        if (newField) {
          newFields.push(newField);
        }
      }

      return newFields;
    }, []);
  },
  getVfjsFieldUiSchema: function getVfjsFieldUiSchema(key) {
    return this.getVfjsUiSchema(key);
  },
  getVfjsUiSchema: function getVfjsUiSchema(key) {
    if (key) {
      return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(this.vfjsUiSchema, key);
    }

    return this.vfjsUiSchema;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (vfjsUiGetters);

/***/ }),

/***/ "./vfjs-global-mixin/methods/vfjs-ui/index.js":
/*!****************************************************!*\
  !*** ./vfjs-global-mixin/methods/vfjs-ui/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getters */ "./vfjs-global-mixin/methods/vfjs-ui/getters.js");
/* harmony import */ var _setters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setters */ "./vfjs-global-mixin/methods/vfjs-ui/setters.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var vfjsUi = _objectSpread({}, _getters__WEBPACK_IMPORTED_MODULE_0__["default"], _setters__WEBPACK_IMPORTED_MODULE_1__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (vfjsUi);

/***/ }),

/***/ "./vfjs-global-mixin/methods/vfjs-ui/setters.js":
/*!******************************************************!*\
  !*** ./vfjs-global-mixin/methods/vfjs-ui/setters.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../constants */ "./constants/index.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }



var vfjsUiSetters = {
  setVfjsUiSchema: function setVfjsUiSchema() {
    var _this = this;

    var uiSchema = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var newVfjsUiSchema = uiSchema.reduce(function (fields, field, index) {
      return [].concat(_toConsumableArray(fields), [_this.vfjsHelperGenerateField(field, index)]);
    }, []);

    if (!Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isEqual"])(newVfjsUiSchema, this.vfjsUiSchema)) {
      this.vfjsUiSchema = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["cloneDeep"])(newVfjsUiSchema);
      this.setVfjsUiFieldsActive();
    }
  },
  setVfjsUiFieldsActive: function setVfjsUiFieldsActive() {
    var _this2 = this;

    this.vfjsFieldsActive = this.getVfjsUiFieldsActive(this.vfjsUiSchema);
    this.vfjsFieldsActiveModels = this.getVfjsFieldsModels(this.vfjsFieldsActive);
    this.vfjsBus.emit(_constants__WEBPACK_IMPORTED_MODULE_1__["VFJS_EVENT_STATE_UPDATED"], function () {
      _this2.setVfjsFields();
    });
  },
  setVfjsFields: function setVfjsFields() {
    this.vfjsFields = this.getVfjsFields(this.vfjsFieldsActive);
  }
};
/* harmony default export */ __webpack_exports__["default"] = (vfjsUiSetters);

/***/ }),

/***/ "./vfjs-global-mixin/methods/vfjs-validation/getters.js":
/*!**************************************************************!*\
  !*** ./vfjs-global-mixin/methods/vfjs-validation/getters.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }


var vfjsValidationGetters = {
  /** getVfjsPropertiesRequired
    @function
    @description Get all errors of type required
    @param [errors] array
    @return
      An array of the properties in the errors array
      were the error property 'keyword' was 'required'.
  */
  getVfjsPropertiesRequired: function getVfjsPropertiesRequired(errors) {
    if (!errors) {
      return [];
    }

    return errors.reduce(function (required, error) {
      if (error.keyword === 'required') {
        if (error.params && error.params.missingProperty) {
          var key = error.params.missingProperty;
          var parent = String(error.dataPath).substr(1);
          var propertyPath = parent ? "".concat(parent, ".").concat(key) : key;

          if (required.indexOf(propertyPath) === -1) {
            required.push(propertyPath);
          }
        }
      }

      return required;
    }, []);
  },
  getVfjsChildPropertiesRequired: function getVfjsChildPropertiesRequired() {
    var _this = this;

    var parentFields = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var excludeProperties = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var uniqueProperties = parentFields.filter(function (property) {
      return excludeProperties.indexOf(property) === -1;
    });
    return uniqueProperties.reduce(function (properties, property) {
      // Add current property to array
      properties.push(property); // Validate schema with this property being an empty object

      var value = {};
      Object(lodash__WEBPACK_IMPORTED_MODULE_0__["set"])(value, property, {});

      _this.ajv.validate(_this.getVfjsSchema(), value);

      var propertiesRequired = _this.getVfjsPropertiesRequired(_this.ajv.errors); // If there were required properties below this property (i.e. this property is an object)


      if (propertiesRequired.length > 0) {
        var excludePropertiesChildren = [].concat(_toConsumableArray(excludeProperties), _toConsumableArray(uniqueProperties));

        var childFieldsRequired = _this.getVfjsChildPropertiesRequired(propertiesRequired, excludePropertiesChildren);

        properties.push.apply(properties, _toConsumableArray(childFieldsRequired));
      }

      return properties;
    }, []);
  },
  getVfjsFieldModelValid: function getVfjsFieldModelValid(key, value) {
    var errors = this.getVfjsFieldModelValidationErrors(key, value);
    return errors.length === 0;
  },
  getVfjsFieldModelValidationErrors: function getVfjsFieldModelValidationErrors(key, value) {
    return this.getVfjsValidationErrors(value, this.getVfjsSchema(key));
  },
  getVfjsModelValidationErrorsLocalized: function getVfjsModelValidationErrorsLocalized() {
    var _this$vfjsOptions$ajv = this.vfjsOptions.ajv,
        ajv = _this$vfjsOptions$ajv === void 0 ? {} : _this$vfjsOptions$ajv;
    var locale = ajv.locale;

    if (typeof locale === 'function') {
      locale(this.ajv.errors);
    }
  },
  getVfjsValid: function getVfjsValid() {
    var errors = this.getVfjsValidationErrors();
    return errors.length === 0;
  },
  getVfjsValidationErrors: function getVfjsValidationErrors(model, schema) {
    var ajvSchema = schema || this.getVfjsSchema();
    var ajvModel = model || this.getVfjsModel();
    var valid = this.ajv.validate(ajvSchema, ajvModel);
    this.getVfjsModelValidationErrorsLocalized();
    return !valid ? this.ajv.errors : [];
  }
};
/* harmony default export */ __webpack_exports__["default"] = (vfjsValidationGetters);

/***/ }),

/***/ "./vfjs-global-mixin/methods/vfjs-validation/index.js":
/*!************************************************************!*\
  !*** ./vfjs-global-mixin/methods/vfjs-validation/index.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ajv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ajv */ "ajv");
/* harmony import */ var ajv__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ajv__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _getters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getters */ "./vfjs-global-mixin/methods/vfjs-validation/getters.js");
/* harmony import */ var _setters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./setters */ "./vfjs-global-mixin/methods/vfjs-validation/setters.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../constants */ "./constants/index.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var vfjsValidation = _objectSpread({
  vfjsValidationInitialize: function vfjsValidationInitialize() {
    var _this = this;

    var _this$vfjsOptions$ajv = this.vfjsOptions.ajv,
        ajv = _this$vfjsOptions$ajv === void 0 ? {} : _this$vfjsOptions$ajv;
    var _ajv$options = ajv.options,
        options = _ajv$options === void 0 ? {} : _ajv$options,
        _ajv$keywords = ajv.keywords,
        keywords = _ajv$keywords === void 0 ? {} : _ajv$keywords; // Set up Ajv

    this.ajv = new ajv__WEBPACK_IMPORTED_MODULE_0___default.a(_objectSpread({}, options, {
      // The `allErrors` option is required for validation to work
      allErrors: true
    })); // Allow Ajv to be extended by other functions
    // such as ajv-merge-patch, ajv-async etc.

    Object.keys(keywords).forEach(function (key) {
      if (typeof keywords[key] === 'function') {
        keywords[key](_this.ajv);
      }
    }); // Add custom keywords

    Object.keys(keywords).forEach(function (key) {
      _this.ajv.addKeyword(key, keywords[key]);
    }); // Add additional schemas

    Object.keys(this.schemas).forEach(function (key) {
      _this.ajv.addSchema(_this.schemas[key], key);
    }); // TODO: Move this to a method so we can call it when the schema/ui-schema/model is updated
    // This is somewhat of a hack...
    //
    // To find out if a property is required
    // we get the schema and use an empty object
    // as the data, with allErrors option in Ajv
    // we can get all the required properties
    // and check if the model key is found in the errors

    this.ajv.validate(this.getVfjsSchema(), {});

    if (this.ajv.errors) {
      var propertiesRequired = this.getVfjsPropertiesRequired(this.ajv.errors);
      this.vfjsFieldsRequired = this.getVfjsChildPropertiesRequired(propertiesRequired);
    } // Check if validation is enabled and set to run on load


    if (this.vfjsOptions.validate && this.vfjsOptions.validateOnLoad) {
      this.vfjsBus.emit(_constants__WEBPACK_IMPORTED_MODULE_3__["VFJS_EVENT_MODEL_VALIDATE"], {
        vfjsModel: this.getVfjsModel()
      });
    }
  }
}, _getters__WEBPACK_IMPORTED_MODULE_1__["default"], _setters__WEBPACK_IMPORTED_MODULE_2__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (vfjsValidation);

/***/ }),

/***/ "./vfjs-global-mixin/methods/vfjs-validation/setters.js":
/*!**************************************************************!*\
  !*** ./vfjs-global-mixin/methods/vfjs-validation/setters.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../constants */ "./constants/index.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var vfjsValidationSetters = {
  setVfjsValidationErrors: function setVfjsValidationErrors() {
    var _this = this;

    this.vfjsBus.emit(_constants__WEBPACK_IMPORTED_MODULE_0__["VFJS_EVENT_MODEL_VALIDATE"], {
      vfjsModel: this.getVfjsModel(),
      cb: function cb() {
        var validateRequired = function validateRequired(key) {
          return new Promise(function (resolve, reject) {
            _this.vfjsBus.emit(_constants__WEBPACK_IMPORTED_MODULE_0__["VFJS_EVENT_FIELD_MODEL_VALIDATE"], {
              key: key,
              value: _this.getVfjsFieldModel(key),
              cb: function cb(vfjsFieldErrors) {
                var fieldState = _this.getVfjsFieldState(key);

                _this.vfjsBus.emit(_constants__WEBPACK_IMPORTED_MODULE_0__["VFJS_EVENT_FIELD_STATE_UPDATE"], {
                  key: key,
                  value: _objectSpread({}, fieldState, {
                    vfjsFieldErrors: vfjsFieldErrors
                  }),
                  cb: function cb() {
                    resolve();
                  }
                });
              }
            });
          });
        };

        var operations = _this.vfjsFieldsRequired.map(validateRequired);

        return Promise.all(operations).then(function () {
          return _this.vfjsBus.emit(_constants__WEBPACK_IMPORTED_MODULE_0__["VFJS_EVENT_UI_FIELDS_UPDATE"]);
        });
      }
    });
  }
};
/* harmony default export */ __webpack_exports__["default"] = (vfjsValidationSetters);

/***/ }),

/***/ "./vfjs-global-mixin/props.js":
/*!************************************!*\
  !*** ./vfjs-global-mixin/props.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var props = {
  components: {
    type: Object,
    default: function _default() {
      return {};
    }
  },
  model: {
    type: Object,
    default: function _default() {
      return {};
    }
  },
  schema: {
    type: Object,
    required: true,
    default: function _default() {
      return {};
    }
  },
  schemas: {
    type: Object,
    default: function _default() {
      return {};
    }
  },
  options: {
    type: Object,
    default: function _default() {
      return {};
    }
  },
  tag: {
    type: String,
    default: 'div'
  },
  uiSchema: {
    type: Array,
    required: true,
    default: function _default() {
      return {};
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (props);

/***/ }),

/***/ "./vfjs-global-mixin/watch.js":
/*!************************************!*\
  !*** ./vfjs-global-mixin/watch.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

var watch = {
  components: function components(value) {
    this.vfjsComponents = Object.assign({}, value);
  },
  model: function model(value) {
    this.setVfjsModel(value);
  },
  schema: function schema(value) {
    this.setVfjsSchema(value);
  },
  uiSchema: function uiSchema(value) {
    this.setVfjsUiSchema(value);
  },
  options: function options(value) {
    this.vfjsOptions = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["merge"])({}, this.vfjsOptions, value);

    if (this.vfjsOptions.showValidationErrors) {
      this.setVfjsValidationErrors();
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (watch);

/***/ }),

/***/ "ajv":
/*!**********************!*\
  !*** external "ajv" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ajv");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "minibus":
/*!**************************!*\
  !*** external "minibus" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("minibus");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy93ZWJwYWNrL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL2NvbnN0YW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wbHVnaW4uanMiLCJ3ZWJwYWNrOi8vLy4vdmZqcy1maWVsZC1jb21wb25lbnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vdmZqcy1maWVsZC1taXhpbi9jb21wdXRlZC5qcyIsIndlYnBhY2s6Ly8vLi92ZmpzLWZpZWxkLW1peGluL2luZGV4LmpzIiwid2VicGFjazovLy8uL3ZmanMtZmllbGQtbWl4aW4vbWV0aG9kcy9nZXR0ZXJzLmpzIiwid2VicGFjazovLy8uL3ZmanMtZmllbGQtbWl4aW4vbWV0aG9kcy9oZWxwZXJzLmpzIiwid2VicGFjazovLy8uL3ZmanMtZmllbGQtbWl4aW4vbWV0aG9kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi92ZmpzLWZpZWxkLW1peGluL21ldGhvZHMvc2V0dGVycy5qcyIsIndlYnBhY2s6Ly8vLi92ZmpzLWZpZWxkLW1peGluL3Byb3BzLmpzIiwid2VicGFjazovLy8uL3ZmanMtZ2xvYmFsLWNvbXBvbmVudC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi92ZmpzLWdsb2JhbC1taXhpbi9jb21wdXRlZC5qcyIsIndlYnBhY2s6Ly8vLi92ZmpzLWdsb2JhbC1taXhpbi9kYXRhLmpzIiwid2VicGFjazovLy8uL3ZmanMtZ2xvYmFsLW1peGluL2luZGV4LmpzIiwid2VicGFjazovLy8uL3ZmanMtZ2xvYmFsLW1peGluL21ldGhvZHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vdmZqcy1nbG9iYWwtbWl4aW4vbWV0aG9kcy92ZmpzLWJ1cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi92ZmpzLWdsb2JhbC1taXhpbi9tZXRob2RzL3ZmanMtaGVscGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi92ZmpzLWdsb2JhbC1taXhpbi9tZXRob2RzL3ZmanMtbGlmZWN5Y2xlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3ZmanMtZ2xvYmFsLW1peGluL21ldGhvZHMvdmZqcy1tb2RlbC9nZXR0ZXJzLmpzIiwid2VicGFjazovLy8uL3ZmanMtZ2xvYmFsLW1peGluL21ldGhvZHMvdmZqcy1tb2RlbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi92ZmpzLWdsb2JhbC1taXhpbi9tZXRob2RzL3ZmanMtbW9kZWwvc2V0dGVycy5qcyIsIndlYnBhY2s6Ly8vLi92ZmpzLWdsb2JhbC1taXhpbi9tZXRob2RzL3ZmanMtc2NoZW1hL2dldHRlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vdmZqcy1nbG9iYWwtbWl4aW4vbWV0aG9kcy92ZmpzLXNjaGVtYS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi92ZmpzLWdsb2JhbC1taXhpbi9tZXRob2RzL3ZmanMtc2NoZW1hL3NldHRlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vdmZqcy1nbG9iYWwtbWl4aW4vbWV0aG9kcy92ZmpzLXN0YXRlL2dldHRlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vdmZqcy1nbG9iYWwtbWl4aW4vbWV0aG9kcy92ZmpzLXN0YXRlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3ZmanMtZ2xvYmFsLW1peGluL21ldGhvZHMvdmZqcy1zdGF0ZS9zZXR0ZXJzLmpzIiwid2VicGFjazovLy8uL3ZmanMtZ2xvYmFsLW1peGluL21ldGhvZHMvdmZqcy11aS9nZXR0ZXJzLmpzIiwid2VicGFjazovLy8uL3ZmanMtZ2xvYmFsLW1peGluL21ldGhvZHMvdmZqcy11aS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi92ZmpzLWdsb2JhbC1taXhpbi9tZXRob2RzL3ZmanMtdWkvc2V0dGVycy5qcyIsIndlYnBhY2s6Ly8vLi92ZmpzLWdsb2JhbC1taXhpbi9tZXRob2RzL3ZmanMtdmFsaWRhdGlvbi9nZXR0ZXJzLmpzIiwid2VicGFjazovLy8uL3ZmanMtZ2xvYmFsLW1peGluL21ldGhvZHMvdmZqcy12YWxpZGF0aW9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL3ZmanMtZ2xvYmFsLW1peGluL21ldGhvZHMvdmZqcy12YWxpZGF0aW9uL3NldHRlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vdmZqcy1nbG9iYWwtbWl4aW4vcHJvcHMuanMiLCJ3ZWJwYWNrOi8vLy4vdmZqcy1nbG9iYWwtbWl4aW4vd2F0Y2guanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYWp2XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibG9kYXNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibWluaWJ1c1wiIl0sIm5hbWVzIjpbIlZGSlNfRVZFTlRfRklFTERfU1RBVEVfVVBEQVRFIiwiVkZKU19FVkVOVF9GSUVMRF9NT0RFTF9WQUxJREFURSIsIlZGSlNfRVZFTlRfRklFTERfTU9ERUxfVVBEQVRFIiwiVkZKU19FVkVOVF9GSUVMRF9NT0RFTF9DTEVBUl9ISURERU4iLCJWRkpTX0VWRU5UX01PREVMX1VQREFURSIsIlZGSlNfRVZFTlRfTU9ERUxfVVBEQVRFRCIsIlZGSlNfRVZFTlRfTU9ERUxfVkFMSURBVEUiLCJWRkpTX0VWRU5UX1NUQVRFX1VQREFURSIsIlZGSlNfRVZFTlRfU1RBVEVfVVBEQVRFRCIsIlZGSlNfRVZFTlRfVUlfRklFTERTX1VQREFURSIsIlZGSlNfRVhURVJOQUxfRVZFTlRfQ0hBTkdFIiwiVkZKU19FWFRFUk5BTF9FVkVOVF9TVEFURV9DSEFOR0UiLCJWRkpTX0VYVEVSTkFMX0VWRU5UX1ZBTElEQVRFRCIsInZmanNHbG9iYWwiLCJpbnN0YWxsIiwiVnVlIiwib3B0aW9ucyIsImNvbXBvbmVudCIsImluc3RhbGxlZCIsInZmanNHbG9iYWxDb21wb25lbnQiLCJwbHVnaW4iLCJHbG9iYWxWdWUiLCJ3aW5kb3ciLCJnbG9iYWwiLCJ1c2UiLCJWdWVGb3JtSnNvblNjaGVtYUZpZWxkQ29tcG9uZW50IiwibmFtZSIsIm1peGlucyIsInZmanNGaWVsZE1peGluIiwicmVuZGVyIiwiJGNyZWF0ZUVsZW1lbnQiLCJ2ZmpzQ29tcG9uZW50IiwiZ2V0VmZqc0F0dHJpYnV0ZXMiLCIkc2xvdHMiLCJkZWZhdWx0IiwiYXR0cnNWYWx1ZUVsZW1lbnRzIiwiZG9tUHJvcHNWYWx1ZUVsZW1lbnRzIiwiZG9tUHJvcHNDaGVja2VkRWxlbWVudHMiLCJpbm5lckhUTUxFbGVtZW50cyIsInJlcXVpcmVkRWxlbWVudHMiLCJjb21wdXRlZCIsInZmanNDb21wdXRlZEZpZWxkSGFzRXJyb3JzIiwidmZqc0ZpZWxkU3RhdGUiLCJ2ZmpzRmllbGRFcnJvcnMiLCJsZW5ndGgiLCJ2ZmpzQ29tcHV0ZWRTaG93RmllbGRFcnJvcnMiLCJ2ZmpzRmllbGREaXJ0eSIsInZmanNGaWVsZEJsdXIiLCJ2ZmpzT3B0aW9ucyIsInNob3dWYWxpZGF0aW9uRXJyb3JzIiwidmZqc0NvbXB1dGVkRmllbGRFcnJvck9wdGlvbnMiLCJ2ZmpzRmllbGRFcnJvck9wdGlvbnMiLCJ2ZmpzQ29tcHV0ZWRGaWVsZEF0dHJzIiwiYXR0cnMiLCJpbmRleE9mIiwicmVxdWlyZWQiLCJ2ZmpzRmllbGRSZXF1aXJlZCIsInZhbHVlIiwidmZqc0ZpZWxkTW9kZWwiLCJ2ZmpzRmllbGRPcHRpb25zIiwidmZqc0NvbXB1dGVkRmllbGREb21Qcm9wcyIsImRvbVByb3BzIiwiaW5uZXJIVE1MIiwiY2hlY2tlZCIsInZmanNDb21wdXRlZEZpZWxkT3B0aW9ucyIsImtleSIsInZmanNGaWVsZElkIiwidmZqc0NvbXB1dGVkTWVyZ2VkRmllbGRPcHRpb25zIiwibWVyZ2UiLCJ2ZmpzRGVmYXVsdE9wdGlvbnMiLCJwcm9wcyIsIm1ldGhvZHMiLCJtb3VudGVkIiwidmZqc0ZpZWxkSGVscGVyQWRkTGlzdGVuZXIiLCIkZWwiLCJiZWZvcmVEZXN0cm95IiwidmZqc0ZpZWxkSGVscGVyUmVtb3ZlTGlzdGVuZXIiLCJnZXR0ZXJzIiwiZ2V0VmZqc0ZpZWxkQXR0cmlidXRlcyIsIm9wdGlvbnNDbGFzcyIsImNsYXNzIiwib3B0aW9uc09uIiwib24iLCJvcHRpb25zTmF0aXZlT24iLCJuYXRpdmVPbiIsImRlZmF1bHRPcHRpb25zQ2xhc3MiLCJkZWZhdWx0T24iLCJkZWZhdWx0TmF0aXZlT24iLCJkZWZhdWx0T3B0aW9ucyIsImNsYXNzRm9ybWF0dGVkIiwidmZqc0ZpZWxkSGVscGVyRm9ybWF0Q2xhc3NlcyIsIm9uRm9ybWF0dGVkIiwidmZqc0ZpZWxkSGVscGVyRm9ybWF0RXZlbnRzIiwibmF0aXZlT25Gb3JtYXR0ZWQiLCJjb21wdXRlZE9wdGlvbnMiLCJkZWZhdWx0UHJvcHMiLCJPYmplY3QiLCJhc3NpZ24iLCIkb3B0aW9ucyIsInByb3BzRGF0YSIsImZpZWxkT3B0aW9uc0FzUHJvcHMiLCJ2YWx1ZVByb3AiLCJ2ZmpzRmllbGRWYWx1ZVByb3AiLCJhbGxBdHRyaWJ1dGVzIiwiaGVscGVycyIsImVsIiwiZXZlbnQiLCJhZGRFdmVudExpc3RlbmVyIiwidmZqc0ZpZWxkSGVscGVyU3RhdGVFdmVudEhhbmRsZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwidHlwZSIsImluaXRpYWxCbHVyIiwic2V0VmZqc0ZpZWxkU3RhdGUiLCJ2ZmpzQnVzIiwiZW1pdCIsImV2ZW50cyIsImV2ZW50c09iaiIsIkFycmF5IiwiaXNBcnJheSIsInJlZHVjZSIsIm9iaiIsInZmanNGaWVsZEhlbHBlckZvcm1hdEV2ZW50c1JlZHVjZXIiLCJjbGFzc2VzIiwiY2xhc3Nlc09iaiIsInNwbGl0IiwidmZqc0ZpZWxkSGVscGVyRXZlbnRIYW5kbGVyIiwiY2IiLCJkYXRhIiwic2V0VmZqc0ZpZWxkTW9kZWwiLCJFdmVudCIsInRhcmdldCIsInVuZGVmaW5lZCIsImtleXMiLCJmb3JtYXR0ZWRFdmVudHMiLCJzZXR0ZXJzIiwic2V0U3RhdGUiLCJzZXRNb2RlbCIsInZmanNGaWVsZE1vZGVsS2V5IiwidmZqc0NoaWxkcmVuIiwidmZqc0NoaWxkcmVuVWlTY2hlbWEiLCJTdHJpbmciLCJ2ZmpzRmllbGRFcnJvckhhbmRsZXIiLCJCb29sZWFuIiwidmZqc0ZpZWxkU2NoZW1hIiwidmZqc0ZpZWxkU2NoZW1hcyIsInZmanNGaWVsZFRhZyIsInZmanNGaWVsZFVpU2NoZW1hIiwidmZqc01vZGVsIiwidmZqc1N0YXRlIiwiVnVlRm9ybUpzb25TY2hlbWEiLCJ2ZmpzR2xvYmFsTWl4aW4iLCJ0YWciLCJ2ZmpzRmllbGRzIiwidmZqc1NjaGVtYVZhbGlkIiwidmZqc1NjaGVtYSIsImV2ZXJ5IiwiaXNWZmpzRmllbGRTY2hlbWFWYWxpZCIsInZmanNNb2RlbFZhbGlkIiwiaXNWZmpzRmllbGRNb2RlbFZhbGlkIiwidmZqc0V2ZW50cyIsInZmanNGaWVsZHNBY3RpdmUiLCJ2ZmpzRmllbGRzUmVxdWlyZWQiLCJhbGxvd0ludmFsaWRNb2RlbCIsImFqdiIsImtleXdvcmRzIiwibG9jYWxlIiwiYWxsRXJyb3JzIiwiY2FzdFRvU2NoZW1hVHlwZSIsInZhbGlkYXRlIiwidmFsaWRhdGVPbkxvYWQiLCJ2YWxpZGF0ZU9uQ2hhbmdlIiwidmZqc1VpU2NoZW1hIiwiY3JlYXRlZCIsInZmanNJbml0aWFsaXplIiwidmZqc0Rlc3Ryb3kiLCJ3YXRjaCIsInZmanNNZXRob2RzIiwidmZqc0xpZmVjeWNsZSIsInZmanNIZWxwZXJzIiwidmZqc1VpIiwidmZqc1ZhbGlkYXRpb24iLCJhZGRWZmpzTGlzdGVuZXIiLCJjYWxsYmFjayIsImFkZFZmanNMaXN0ZW5lcnMiLCJmb3JFYWNoIiwicmVtb3ZlVmZqc0xpc3RlbmVyIiwib2ZmIiwicmVtb3ZlVmZqc0xpc3RlbmVycyIsInJlbW92ZVZmanNMaXN0ZW5lcnNBbGwiLCJ2ZmpzQnVzRXZlbnRIYW5kbGVyIiwicGF5bG9hZCIsImV2ZW50QWN0aW9ucyIsImFsbE1vZGVscyIsInZmanNIZWxwZXJHZXRGaWVsZHNXaXRoQ2xlYXJPbkhpZGUiLCJ1aVNjaGVtYSIsImFjdGl2ZU1vZGVscyIsImluYWN0aXZlTW9kZWxzIiwibW9kZWxzIiwiY2xlYXJNb2RlbHMiLCJjbGVhck1vZGVsIiwibmV3TW9kZWwiLCJ2ZmpzSGVscGVyQXBwbHlGaWVsZE1vZGVsIiwic2V0VmZqc01vZGVsIiwibW9kZWwiLCJzZXQiLCJzY2hlbWEiLCJ2ZmpzSGVscGVyRmllbGRJc1JlcXVpcmVkIiwicHJvcGVydGllcyIsImdldFZmanNTY2hlbWEiLCJlcnJvcnMiLCJnZXRWZmpzVmFsaWRhdGlvbkVycm9ycyIsIm9yaWdpbmFsVmFsdWUiLCJ2ZmpzSGVscGVyQ2FzdFZhbHVlVG9TY2hlbWFUeXBlIiwiZ2V0VmZqc0ZpZWxkTW9kZWwiLCJuZXdGaWVsZFN0YXRlIiwiZ2V0VmZqc0ZpZWxkU3RhdGUiLCJpc0VxdWFsIiwidmZqc0Vycm9ycyIsImdldFZmanNTdGF0ZSIsIiRlbWl0Iiwic2V0VmZqc1VpRmllbGRzQWN0aXZlIiwiZ2V0VmZqc01vZGVsIiwibmV3VmZqc1N0YXRlIiwic2V0VmZqc1N0YXRlIiwidmZqc0ZpZWxkc0FjdGl2ZU1vZGVscyIsInZmanNCdXNJbml0aWFsaXplIiwiTWluaWJ1cyIsImNyZWF0ZSIsInZmanNIZWxwZXJDcmVhdGVGaWVsZCIsImlkIiwiY2hpbGRyZW4iLCJlcnJvckhhbmRsZXIiLCJlcnJvck9wdGlvbnMiLCJmaWVsZE9wdGlvbnMiLCJnZXRWZmpzRmllbGRTY2hlbWEiLCJzY2hlbWFzIiwiZ2VuZXJhdGVFcnJvcnNBc0NoaWxkcmVuIiwidmZqc0hlbHBlckdldEVycm9ycyIsIm1hcCIsInZmanNIZWxwZXJDcmVhdGVDb21wb25lbnQiLCJlcnJvciIsImluZGV4IiwibWVzc2FnZSIsInZmanNIZWxwZXJIYXNoU3RyaW5nIiwic3RyaW5nIiwiYmluYXJ5IiwiaW50ZWdlciIsImkiLCJjaGFyIiwiY2hhckNvZGVBdCIsImNoYXJzIiwiYXJyYXkiLCJwdXNoIiwiTWF0aCIsImZsb29yIiwiam9pbiIsImxvY2FsQ29tcG9uZW50IiwidmZqc0NvbXBvbmVudHMiLCJ2ZmpzRmllbGRDb21wb25lbnQiLCJuZXdWZmpzTW9kZWwiLCJjbG9uZURlZXAiLCJ2ZmpzSGVscGVyR2VuZXJhdGVGaWVsZCIsImZpZWxkIiwibGV2ZWwiLCJmaWVsZFdpdGhvdXRDaGlsZHJlbiIsIm9ialN0cmluZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJjaGlsZCIsInZmanNIZWxwZXJDaGlsZEFycmF5TWFwcGVyIiwicGFyZW50TW9kZWwiLCJ2ZmpzSGVscGVyR2V0Q2hpbGRBcnJheU1vZGVsQXRJbmRleCIsInZmanNIZWxwZXJDaGlsZEFycmF5UmVkdWNlck1hcHBlciIsImFsbENoaWxkcmVuIiwicmVsYXRpdmVNb2RlbCIsInZmanNIZWxwZXJHZXRSZWxhdGl2ZU1vZGVsIiwic3Vic3RyIiwidmZqc0hlbHBlckdldFBhcmVudE1vZGVsIiwicGFyZW50SW5kZXgiLCJsYXN0SW5kZXhPZiIsInZmanNIZWxwZXJGaWVsZElzQXJyYXkiLCJpdGVtcyIsImZpZWxkcyIsImRpc3BsYXlPcHRpb25zIiwiY2xlYXJPbkhpZGUiLCJOdW1iZXIiLCJwYXJzZUludCIsImdldFZmanNGaWVsZHNNb2RlbHMiLCJzZXRWZmpzU2NoZW1hIiwiY29tcG9uZW50cyIsInZmanNWYWxpZGF0aW9uSW5pdGlhbGl6ZSIsInNldFZmanNVaVNjaGVtYSIsInZmanNNb2RlbEdldHRlcnMiLCJnZXQiLCJ2ZmpzTW9kZWxTZXR0ZXJzIiwic2lsZW50IiwidmZqc1NjaGVtYUdldHRlcnMiLCJnZXRWZmpzU2NoZW1hRmFsbGJhY2siLCJnZXRWZmpzU2NoZW1hUGF0aCIsInBhdGgiLCJhcnJheVBhdGgiLCJ2ZmpzU2NoZW1hU2V0dGVycyIsInZmanNTdGF0ZUdldHRlcnMiLCJ2ZmpzU3RhdGVTZXR0ZXJzIiwic3RhdGUiLCJzZXRWZmpzRmllbGRzIiwidmZqc1VpR2V0dGVycyIsImdldFZmanNGaWVsZHMiLCJnZXRWZmpzVWlGaWVsZFZpc2libGUiLCJvbGRFcnJvcnMiLCJnZXRWZmpzVWlGaWVsZEFycmF5Q2hpbGRyZW5BY3RpdmUiLCJ2IiwiZ2V0VmZqc1VpRmllbGRzQWN0aXZlIiwiZ2V0VmZqc1VpRmllbGQiLCJuZXdGaWVsZHMiLCJuZXdGaWVsZCIsImdldFZmanNGaWVsZFVpU2NoZW1hIiwiZ2V0VmZqc1VpU2NoZW1hIiwidmZqc1VpU2V0dGVycyIsIm5ld1ZmanNVaVNjaGVtYSIsInZmanNWYWxpZGF0aW9uR2V0dGVycyIsImdldFZmanNQcm9wZXJ0aWVzUmVxdWlyZWQiLCJrZXl3b3JkIiwicGFyYW1zIiwibWlzc2luZ1Byb3BlcnR5IiwicGFyZW50IiwiZGF0YVBhdGgiLCJwcm9wZXJ0eVBhdGgiLCJnZXRWZmpzQ2hpbGRQcm9wZXJ0aWVzUmVxdWlyZWQiLCJwYXJlbnRGaWVsZHMiLCJleGNsdWRlUHJvcGVydGllcyIsInVuaXF1ZVByb3BlcnRpZXMiLCJmaWx0ZXIiLCJwcm9wZXJ0eSIsInByb3BlcnRpZXNSZXF1aXJlZCIsImV4Y2x1ZGVQcm9wZXJ0aWVzQ2hpbGRyZW4iLCJjaGlsZEZpZWxkc1JlcXVpcmVkIiwiZ2V0VmZqc0ZpZWxkTW9kZWxWYWxpZCIsImdldFZmanNGaWVsZE1vZGVsVmFsaWRhdGlvbkVycm9ycyIsImdldFZmanNNb2RlbFZhbGlkYXRpb25FcnJvcnNMb2NhbGl6ZWQiLCJnZXRWZmpzVmFsaWQiLCJhanZTY2hlbWEiLCJhanZNb2RlbCIsInZhbGlkIiwiQWp2IiwiYWRkS2V5d29yZCIsImFkZFNjaGVtYSIsInZmanNWYWxpZGF0aW9uU2V0dGVycyIsInNldFZmanNWYWxpZGF0aW9uRXJyb3JzIiwidmFsaWRhdGVSZXF1aXJlZCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiZmllbGRTdGF0ZSIsIm9wZXJhdGlvbnMiLCJhbGwiLCJ0aGVuIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7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QUFDaEIsU0FBS3dNLGNBQUwsR0FBc0JqSyxNQUFNLENBQUNDLE1BQVAsQ0FBYyxFQUFkLEVBQWtCeEMsS0FBbEIsQ0FBdEI7QUFDRCxHQUhXO0FBSVprSixPQUpZLGlCQUlObEosS0FKTSxFQUlDO0FBQ1gsU0FBS2lKLFlBQUwsQ0FBa0JqSixLQUFsQjtBQUNELEdBTlc7QUFPWm9KLFFBUFksa0JBT0xwSixLQVBLLEVBT0U7QUFDWixTQUFLdU8sYUFBTCxDQUFtQnZPLEtBQW5CO0FBQ0QsR0FUVztBQVVaeUksVUFWWSxvQkFVSHpJLEtBVkcsRUFVSTtBQUNkLFNBQUswTyxlQUFMLENBQXFCMU8sS0FBckI7QUFDRCxHQVpXO0FBYVp6QyxTQWJZLG1CQWFKeUMsS0FiSSxFQWFHO0FBQ2IsU0FBS1QsV0FBTCxHQUFtQm9CLG9EQUFLLENBQUMsRUFBRCxFQUFLLEtBQUtwQixXQUFWLEVBQXVCUyxLQUF2QixDQUF4Qjs7QUFFQSxRQUFJLEtBQUtULFdBQUwsQ0FBaUJDLG9CQUFyQixFQUEyQztBQUN6QyxXQUFLMlMsdUJBQUw7QUFDRDtBQUNGO0FBbkJXLENBQWQ7QUFzQmU3SyxvRUFBZixFOzs7Ozs7Ozs7OztBQ3hCQSxnQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxvQyIsImZpbGUiOiJ2dWUtZm9ybS1qc29uLXNjaGVtYS5lc20uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2luZGV4LmpzXCIpO1xuIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwiZXhwb3J0IGNvbnN0IFZGSlNfRVZFTlRfRklFTERfU1RBVEVfVVBEQVRFID0gJ1ZGSlNfRVZFTlRfRklFTERfU1RBVEVfVVBEQVRFJztcbmV4cG9ydCBjb25zdCBWRkpTX0VWRU5UX0ZJRUxEX01PREVMX1ZBTElEQVRFID0gJ1ZGSlNfRVZFTlRfRklFTERfTU9ERUxfVkFMSURBVEUnO1xuZXhwb3J0IGNvbnN0IFZGSlNfRVZFTlRfRklFTERfTU9ERUxfVVBEQVRFID0gJ1ZGSlNfRVZFTlRfRklFTERfTU9ERUxfVVBEQVRFJztcbmV4cG9ydCBjb25zdCBWRkpTX0VWRU5UX0ZJRUxEX01PREVMX0NMRUFSX0hJRERFTiA9ICdWRkpTX0VWRU5UX0ZJRUxEX01PREVMX0NMRUFSX0hJRERFTic7XG5leHBvcnQgY29uc3QgVkZKU19FVkVOVF9NT0RFTF9VUERBVEUgPSAnVkZKU19FVkVOVF9NT0RFTF9VUERBVEUnO1xuZXhwb3J0IGNvbnN0IFZGSlNfRVZFTlRfTU9ERUxfVVBEQVRFRCA9ICdWRkpTX0VWRU5UX01PREVMX1VQREFURUQnO1xuZXhwb3J0IGNvbnN0IFZGSlNfRVZFTlRfTU9ERUxfVkFMSURBVEUgPSAnVkZKU19FVkVOVF9NT0RFTF9WQUxJREFURSc7XG5leHBvcnQgY29uc3QgVkZKU19FVkVOVF9TVEFURV9VUERBVEUgPSAnVkZKU19FVkVOVF9TVEFURV9VUERBVEUnO1xuZXhwb3J0IGNvbnN0IFZGSlNfRVZFTlRfU1RBVEVfVVBEQVRFRCA9ICdWRkpTX0VWRU5UX1NUQVRFX1VQREFURUQnO1xuZXhwb3J0IGNvbnN0IFZGSlNfRVZFTlRfVUlfRklFTERTX1VQREFURSA9ICdWRkpTX0VWRU5UX1VJX0ZJRUxEU19VUERBVEUnO1xuZXhwb3J0IGNvbnN0IFZGSlNfRVhURVJOQUxfRVZFTlRfQ0hBTkdFID0gJ2NoYW5nZSc7XG5leHBvcnQgY29uc3QgVkZKU19FWFRFUk5BTF9FVkVOVF9TVEFURV9DSEFOR0UgPSAnc3RhdGUtY2hhbmdlJztcbmV4cG9ydCBjb25zdCBWRkpTX0VYVEVSTkFMX0VWRU5UX1ZBTElEQVRFRCA9ICd2YWxpZGF0ZWQnO1xuIiwiaW1wb3J0IHZmanNGaWVsZCBmcm9tICcuL3ZmanMtZmllbGQtY29tcG9uZW50JztcbmltcG9ydCB2ZmpzRmllbGRNaXhpbiBmcm9tICcuL3ZmanMtZmllbGQtbWl4aW4nO1xuaW1wb3J0IHZmanNHbG9iYWxNaXhpbiBmcm9tICcuL3ZmanMtZ2xvYmFsLW1peGluJztcbmltcG9ydCB2ZmpzR2xvYmFsIGZyb20gJy4vdmZqcy1nbG9iYWwtY29tcG9uZW50JztcbmltcG9ydCB2ZmpzUGx1Z2luIGZyb20gJy4vcGx1Z2luJztcblxuZXhwb3J0IHtcbiAgdmZqc0ZpZWxkLFxuICB2ZmpzRmllbGRNaXhpbixcbiAgdmZqc0dsb2JhbCxcbiAgdmZqc0dsb2JhbE1peGluLFxuICB2ZmpzUGx1Z2luLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgdmZqc0dsb2JhbDtcbiIsImltcG9ydCB2ZmpzR2xvYmFsQ29tcG9uZW50IGZyb20gJy4vdmZqcy1nbG9iYWwtY29tcG9uZW50JztcblxuLy8gRGVjbGFyZSBpbnN0YWxsIGZ1bmN0aW9uIGV4ZWN1dGVkIGJ5IFZ1ZS51c2UoKVxuZXhwb3J0IGZ1bmN0aW9uIGluc3RhbGwoXG4gIFZ1ZSxcbiAgb3B0aW9ucyA9IHtcbiAgICBjb21wb25lbnQ6ICd2dWUtZm9ybS1qc29uLXNjaGVtYScsXG4gIH0sXG4pIHtcbiAgaWYgKCFpbnN0YWxsLmluc3RhbGxlZCkge1xuICAgIGluc3RhbGwuaW5zdGFsbGVkID0gdHJ1ZTtcbiAgICBWdWUuY29tcG9uZW50KG9wdGlvbnMuY29tcG9uZW50LCB2ZmpzR2xvYmFsQ29tcG9uZW50KTtcbiAgfVxufVxuXG4vLyBDcmVhdGUgbW9kdWxlIGRlZmluaXRpb24gZm9yIFZ1ZS51c2UoKVxuY29uc3QgcGx1Z2luID0ge1xuICBpbnN0YWxsLFxufTtcblxuLy8gQXV0by1pbnN0YWxsIHdoZW4gdnVlIGlzIGZvdW5kIChlZy4gaW4gYnJvd3NlciB2aWEgPHNjcmlwdD4gdGFnKVxubGV0IEdsb2JhbFZ1ZSA9IG51bGw7XG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgR2xvYmFsVnVlID0gd2luZG93LlZ1ZTtcbn0gZWxzZSBpZiAodHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgR2xvYmFsVnVlID0gZ2xvYmFsLlZ1ZTtcbn1cblxuaWYgKEdsb2JhbFZ1ZSkge1xuICBHbG9iYWxWdWUudXNlKHBsdWdpbik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHBsdWdpbjtcbiIsImltcG9ydCB2ZmpzRmllbGRNaXhpbiBmcm9tICcuLi92ZmpzLWZpZWxkLW1peGluJztcblxuY29uc3QgVnVlRm9ybUpzb25TY2hlbWFGaWVsZENvbXBvbmVudCA9IHtcbiAgbmFtZTogJ3Z1ZS1mb3JtLWpzb24tc2NoZW1hLWZpZWxkLWNvbXBvbmVudCcsXG4gIG1peGluczogW3ZmanNGaWVsZE1peGluXSxcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KFxuICAgICAgdGhpcy52ZmpzQ29tcG9uZW50LFxuICAgICAge1xuICAgICAgICAuLi50aGlzLmdldFZmanNBdHRyaWJ1dGVzKCksXG4gICAgICB9LFxuICAgICAgdGhpcy4kc2xvdHMuZGVmYXVsdCxcbiAgICApO1xuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgVnVlRm9ybUpzb25TY2hlbWFGaWVsZENvbXBvbmVudDtcbiIsImltcG9ydCB7IG1lcmdlIH0gZnJvbSAnbG9kYXNoJztcblxuLy8gRWxlbWVudHMgd2hpY2ggc3VwcG9ydHMgdGhlICd2YWx1ZScgYXR0cmlidXRlXG5jb25zdCBhdHRyc1ZhbHVlRWxlbWVudHMgPSBbJ2lucHV0JywgJ29wdGlvbicsICd0ZXh0YXJlYSddO1xuXG4vLyBFbGVtZW50cyB3aGljaCBzaG91bGQgaGF2ZSBpdHMgRE9NIHByb3BlcnR5ICd2YWx1ZScgdXBkYXRlZFxuY29uc3QgZG9tUHJvcHNWYWx1ZUVsZW1lbnRzID0gWydpbnB1dCcsICd0ZXh0YXJlYSddO1xuXG4vLyBFbGVtZW50cyB3aGljaCBzaG91bGQgaGF2ZSBpdHMgRE9NIHByb3BlcnR5ICdjaGVja2VkJyB1cGRhdGVkXG5jb25zdCBkb21Qcm9wc0NoZWNrZWRFbGVtZW50cyA9IFsnY2hlY2tib3gnLCAncmFkaW8nXTtcblxuLy8gRWxlbWVudHMgd2hpY2ggaGFzIHRoZWlyIHZhbHVlIHdpdGhpbiB0aGUgdGFnc1xuY29uc3QgaW5uZXJIVE1MRWxlbWVudHMgPSBbJ3RleHRhcmVhJ107XG5cbi8vIEVsZW1lbnRzIHdoaWNoIHN1cHBvcnRzIHRoZSAncmVxdWlyZWQnIGF0dHJpYnV0ZVxuY29uc3QgcmVxdWlyZWRFbGVtZW50cyA9IFsnaW5wdXQnLCAnc2VsZWN0JywgJ3RleHRhcmVhJ107XG5cbmNvbnN0IGNvbXB1dGVkID0ge1xuICB2ZmpzQ29tcHV0ZWRGaWVsZEhhc0Vycm9ycygpIHtcbiAgICByZXR1cm4gdGhpcy52ZmpzRmllbGRTdGF0ZS52ZmpzRmllbGRFcnJvcnMgJiYgdGhpcy52ZmpzRmllbGRTdGF0ZS52ZmpzRmllbGRFcnJvcnMubGVuZ3RoID4gMDtcbiAgfSxcbiAgdmZqc0NvbXB1dGVkU2hvd0ZpZWxkRXJyb3JzKCkge1xuICAgIHJldHVybiAoXG4gICAgICAodGhpcy52ZmpzRmllbGRTdGF0ZS52ZmpzRmllbGREaXJ0eSAmJiB0aGlzLnZmanNGaWVsZFN0YXRlLnZmanNGaWVsZEJsdXIpXG4gICAgICB8fCB0aGlzLnZmanNPcHRpb25zLnNob3dWYWxpZGF0aW9uRXJyb3JzXG4gICAgKTtcbiAgfSxcbiAgdmZqc0NvbXB1dGVkRmllbGRFcnJvck9wdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMudmZqc0NvbXB1dGVkU2hvd0ZpZWxkRXJyb3JzICYmIHRoaXMudmZqc0NvbXB1dGVkRmllbGRIYXNFcnJvcnNcbiAgICAgID8gdGhpcy52ZmpzRmllbGRFcnJvck9wdGlvbnNcbiAgICAgIDoge307XG4gIH0sXG4gIHZmanNDb21wdXRlZEZpZWxkQXR0cnMoKSB7XG4gICAgY29uc3QgYXR0cnMgPSB7XG4gICAgICAvLyBpZDogdGhpcy52ZmpzRmllbGRJZCwgLy8gVGhpcyBpcyB2ZXJ5IHVzZWZ1bCB3aGVuIGRlYnVnZ2luZyB0byBzZWUgd2hlbiBub2RlcyBhcmUgdXBkYXRlZFxuICAgIH07XG5cbiAgICBpZiAocmVxdWlyZWRFbGVtZW50cy5pbmRleE9mKHRoaXMudmZqc0NvbXBvbmVudCkgIT09IC0xKSB7XG4gICAgICBhdHRycy5yZXF1aXJlZCA9IHRoaXMudmZqc0ZpZWxkUmVxdWlyZWQ7XG4gICAgfVxuXG4gICAgaWYgKGF0dHJzVmFsdWVFbGVtZW50cy5pbmRleE9mKHRoaXMudmZqc0NvbXBvbmVudCkgIT09IC0xKSB7XG4gICAgICBhdHRycy52YWx1ZSA9IHRoaXMudmZqc0ZpZWxkTW9kZWwgfHwgKHRoaXMudmZqc0ZpZWxkT3B0aW9ucy5hdHRycyAmJiB0aGlzLnZmanNGaWVsZE9wdGlvbnMuYXR0cnMudmFsdWUpO1xuICAgIH1cblxuICAgIHJldHVybiBhdHRycztcbiAgfSxcbiAgdmZqc0NvbXB1dGVkRmllbGREb21Qcm9wcygpIHtcbiAgICBjb25zdCBkb21Qcm9wcyA9IHt9O1xuXG4gICAgaWYgKGlubmVySFRNTEVsZW1lbnRzLmluZGV4T2YodGhpcy52ZmpzQ29tcG9uZW50KSAhPT0gLTEpIHtcbiAgICAgIGRvbVByb3BzLmlubmVySFRNTCA9IHRoaXMudmZqc0ZpZWxkTW9kZWxcbiAgICAgICAgfHwgKHRoaXMudmZqc0ZpZWxkT3B0aW9ucy5kb21Qcm9wcyAmJiB0aGlzLnZmanNGaWVsZE9wdGlvbnMuZG9tUHJvcHMuaW5uZXJIVE1MKTtcbiAgICB9XG5cbiAgICBpZiAoZG9tUHJvcHNWYWx1ZUVsZW1lbnRzLmluZGV4T2YodGhpcy52ZmpzQ29tcG9uZW50KSAhPT0gLTEpIHtcbiAgICAgIGRvbVByb3BzLnZhbHVlID0gdGhpcy52ZmpzRmllbGRNb2RlbFxuICAgICAgICB8fCAodGhpcy52ZmpzRmllbGRPcHRpb25zLmRvbVByb3BzICYmIHRoaXMudmZqc0ZpZWxkT3B0aW9ucy5kb21Qcm9wcy52YWx1ZSk7XG4gICAgfVxuXG4gICAgaWYgKGRvbVByb3BzQ2hlY2tlZEVsZW1lbnRzLmluZGV4T2YodGhpcy52ZmpzQ29tcG9uZW50KSAhPT0gLTEpIHtcbiAgICAgIGRvbVByb3BzLmNoZWNrZWQgPSB0aGlzLnZmanNGaWVsZE1vZGVsXG4gICAgICAgIHx8ICh0aGlzLnZmanNGaWVsZE9wdGlvbnMuZG9tUHJvcHMgJiYgdGhpcy52ZmpzRmllbGRPcHRpb25zLmRvbVByb3BzLmNoZWNrZWQpO1xuICAgIH1cblxuICAgIHJldHVybiBkb21Qcm9wcztcbiAgfSxcbiAgdmZqc0NvbXB1dGVkRmllbGRPcHRpb25zKCkge1xuICAgIHJldHVybiB7XG4gICAgICBhdHRyczogdGhpcy52ZmpzQ29tcHV0ZWRGaWVsZEF0dHJzLFxuICAgICAgZG9tUHJvcHM6IHRoaXMudmZqc0NvbXB1dGVkRmllbGREb21Qcm9wcyxcbiAgICAgIGtleTogdGhpcy52ZmpzRmllbGRPcHRpb25zLmtleSB8fCB0aGlzLnZmanNGaWVsZElkLFxuICAgIH07XG4gIH0sXG4gIHZmanNDb21wdXRlZE1lcmdlZEZpZWxkT3B0aW9ucygpIHtcbiAgICByZXR1cm4gbWVyZ2UoXG4gICAgICB7fSxcbiAgICAgIHRoaXMudmZqc0RlZmF1bHRPcHRpb25zLFxuICAgICAgdGhpcy52ZmpzQ29tcHV0ZWRGaWVsZEVycm9yT3B0aW9ucyxcbiAgICAgIHRoaXMudmZqc0NvbXB1dGVkRmllbGRPcHRpb25zLFxuICAgICk7XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb21wdXRlZDtcbiIsImltcG9ydCBjb21wdXRlZCBmcm9tICcuL2NvbXB1dGVkJztcbmltcG9ydCBtZXRob2RzIGZyb20gJy4vbWV0aG9kcyc7XG5pbXBvcnQgcHJvcHMgZnJvbSAnLi9wcm9wcyc7XG5cbmNvbnN0IHZmanNGaWVsZE1peGluID0ge1xuICBjb21wdXRlZCxcbiAgcHJvcHMsXG4gIG1ldGhvZHMsXG4gIG1vdW50ZWQoKSB7XG4gICAgdGhpcy52ZmpzRmllbGRIZWxwZXJBZGRMaXN0ZW5lcih0aGlzLiRlbCwgJ2JsdXInKTtcbiAgfSxcbiAgYmVmb3JlRGVzdHJveSgpIHtcbiAgICB0aGlzLnZmanNGaWVsZEhlbHBlclJlbW92ZUxpc3RlbmVyKHRoaXMuJGVsLCAnYmx1cicpO1xuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgdmZqc0ZpZWxkTWl4aW47XG4iLCJpbXBvcnQgeyBtZXJnZSB9IGZyb20gJ2xvZGFzaCc7XG5cbmNvbnN0IGdldHRlcnMgPSB7XG4gIGdldFZmanNBdHRyaWJ1dGVzKCkge1xuICAgIHJldHVybiB0aGlzLmdldFZmanNGaWVsZEF0dHJpYnV0ZXModGhpcy52ZmpzRmllbGRPcHRpb25zLCB0aGlzLnZmanNDb21wdXRlZE1lcmdlZEZpZWxkT3B0aW9ucyk7XG4gIH0sXG4gIGdldFZmanNGaWVsZEF0dHJpYnV0ZXMoXG4gICAge1xuICAgICAgY2xhc3M6IG9wdGlvbnNDbGFzcywgb246IG9wdGlvbnNPbiwgbmF0aXZlT246IG9wdGlvbnNOYXRpdmVPbiwgLi4ub3B0aW9uc1xuICAgIH0gPSB7fSxcbiAgICB7XG4gICAgICBjbGFzczogZGVmYXVsdE9wdGlvbnNDbGFzcyxcbiAgICAgIG9uOiBkZWZhdWx0T24sXG4gICAgICBuYXRpdmVPbjogZGVmYXVsdE5hdGl2ZU9uLFxuICAgICAgLi4uZGVmYXVsdE9wdGlvbnNcbiAgICB9ID0ge30sXG4gICkge1xuICAgIGlmICghb3B0aW9ucykge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cblxuICAgIGNvbnN0IGNsYXNzRm9ybWF0dGVkID0gbWVyZ2UoXG4gICAgICB7fSxcbiAgICAgIHRoaXMudmZqc0ZpZWxkSGVscGVyRm9ybWF0Q2xhc3NlcyhvcHRpb25zQ2xhc3MpLFxuICAgICAgdGhpcy52ZmpzRmllbGRIZWxwZXJGb3JtYXRDbGFzc2VzKGRlZmF1bHRPcHRpb25zQ2xhc3MpLFxuICAgICk7XG5cbiAgICBjb25zdCBvbkZvcm1hdHRlZCA9IG1lcmdlKFxuICAgICAgdGhpcy52ZmpzRmllbGRIZWxwZXJGb3JtYXRFdmVudHMob3B0aW9uc09uKSxcbiAgICAgIHRoaXMudmZqc0ZpZWxkSGVscGVyRm9ybWF0RXZlbnRzKGRlZmF1bHRPbiksXG4gICAgKTtcblxuICAgIGNvbnN0IG5hdGl2ZU9uRm9ybWF0dGVkID0gbWVyZ2UoXG4gICAgICB0aGlzLnZmanNGaWVsZEhlbHBlckZvcm1hdEV2ZW50cyhvcHRpb25zTmF0aXZlT24pLFxuICAgICAgdGhpcy52ZmpzRmllbGRIZWxwZXJGb3JtYXRFdmVudHMoZGVmYXVsdE5hdGl2ZU9uKSxcbiAgICApO1xuXG4gICAgY29uc3QgY29tcHV0ZWRPcHRpb25zID0ge1xuICAgICAgY2xhc3M6IGNsYXNzRm9ybWF0dGVkLFxuICAgICAgb246IG9uRm9ybWF0dGVkLFxuICAgICAgbmF0aXZlT246IG5hdGl2ZU9uRm9ybWF0dGVkLFxuICAgIH07XG5cbiAgICBjb25zdCBkZWZhdWx0UHJvcHMgPSBPYmplY3QuYXNzaWduKFxuICAgICAge30sXG4gICAgICB7XG4gICAgICAgIHByb3BzOiB0aGlzLiRvcHRpb25zLnByb3BzRGF0YSxcbiAgICAgIH0sXG4gICAgKTtcblxuICAgIGNvbnN0IGZpZWxkT3B0aW9uc0FzUHJvcHMgPSB7IHByb3BzOiBvcHRpb25zIH07XG5cbiAgICBjb25zdCB2YWx1ZVByb3AgPSB7XG4gICAgICBwcm9wczoge1xuICAgICAgICBbdGhpcy52ZmpzRmllbGRWYWx1ZVByb3BdOiB0aGlzLnZmanNGaWVsZE1vZGVsLFxuICAgICAgfSxcbiAgICB9O1xuXG4gICAgY29uc3QgYWxsQXR0cmlidXRlcyA9IG1lcmdlKFxuICAgICAge30sXG4gICAgICBkZWZhdWx0UHJvcHMsXG4gICAgICBkZWZhdWx0T3B0aW9ucyxcbiAgICAgIGZpZWxkT3B0aW9uc0FzUHJvcHMsXG4gICAgICBvcHRpb25zLFxuICAgICAgY29tcHV0ZWRPcHRpb25zLFxuICAgICAgdmFsdWVQcm9wLFxuICAgICk7XG5cbiAgICByZXR1cm4gYWxsQXR0cmlidXRlcztcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldHRlcnM7XG4iLCJpbXBvcnQgeyBWRkpTX0VWRU5UX1VJX0ZJRUxEU19VUERBVEUgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xuXG5jb25zdCBoZWxwZXJzID0ge1xuICB2ZmpzRmllbGRIZWxwZXJBZGRMaXN0ZW5lcihlbCwgZXZlbnQpIHtcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCB0aGlzLnZmanNGaWVsZEhlbHBlclN0YXRlRXZlbnRIYW5kbGVyKTtcbiAgfSxcbiAgdmZqc0ZpZWxkSGVscGVyUmVtb3ZlTGlzdGVuZXIoZWwsIGV2ZW50KSB7XG4gICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgdGhpcy52ZmpzRmllbGRIZWxwZXJTdGF0ZUV2ZW50SGFuZGxlcik7XG4gIH0sXG4gIHZmanNGaWVsZEhlbHBlclN0YXRlRXZlbnRIYW5kbGVyKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50ICYmIGV2ZW50LnR5cGUgPT09ICdibHVyJykge1xuICAgICAgY29uc3QgaW5pdGlhbEJsdXIgPSB0aGlzLnZmanNGaWVsZFN0YXRlLnZmanNGaWVsZEJsdXI7XG4gICAgICB0aGlzLnNldFZmanNGaWVsZFN0YXRlKHtcbiAgICAgICAgLi4udGhpcy52ZmpzRmllbGRTdGF0ZSxcbiAgICAgICAgdmZqc0ZpZWxkQmx1cjogdHJ1ZSxcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoIWluaXRpYWxCbHVyKSB7XG4gICAgICAgIHRoaXMudmZqc0J1cy5lbWl0KFZGSlNfRVZFTlRfVUlfRklFTERTX1VQREFURSk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICB2ZmpzRmllbGRIZWxwZXJGb3JtYXRFdmVudHMoZXZlbnRzKSB7XG4gICAgaWYgKCFldmVudHMpIHtcbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICBsZXQgZXZlbnRzT2JqID0gZXZlbnRzO1xuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZXZlbnRzKSkge1xuICAgICAgZXZlbnRzT2JqID0gZXZlbnRzLnJlZHVjZSgob2JqLCBldmVudCkgPT4gKHsgLi4ub2JqLCBbZXZlbnRdOiB0cnVlIH0pLCB7fSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZXZlbnRzID09PSAnc3RyaW5nJykge1xuICAgICAgZXZlbnRzT2JqID0geyBbZXZlbnRzXTogdHJ1ZSB9O1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnZmanNGaWVsZEhlbHBlckZvcm1hdEV2ZW50c1JlZHVjZXIoZXZlbnRzT2JqKTtcbiAgfSxcbiAgdmZqc0ZpZWxkSGVscGVyRm9ybWF0Q2xhc3NlcyhjbGFzc2VzKSB7XG4gICAgaWYgKCFjbGFzc2VzKSB7XG4gICAgICByZXR1cm4ge307XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjbGFzc2VzID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgW2NsYXNzZXNdOiB0cnVlLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheShjbGFzc2VzKSkge1xuICAgICAgcmV0dXJuIGNsYXNzZXMucmVkdWNlKFxuICAgICAgICAoY2xhc3Nlc09iaiwga2V5KSA9PiAoe1xuICAgICAgICAgIC4uLmNsYXNzZXNPYmosXG4gICAgICAgICAgW2tleV06IHRydWUsXG4gICAgICAgIH0pLFxuICAgICAgICB7fSxcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjbGFzc2VzID09PSAnc3RyaW5nJykge1xuICAgICAgaWYgKGNsYXNzZXMuaW5kZXhPZignLCcpICE9PSAtMSkge1xuICAgICAgICByZXR1cm4gY2xhc3Nlcy5zcGxpdCgnLCcpO1xuICAgICAgfVxuXG4gICAgICBpZiAoY2xhc3Nlcy5pbmRleE9mKCcgJykgIT09IC0xKSB7XG4gICAgICAgIHJldHVybiBjbGFzc2VzLnNwbGl0KCcgJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNsYXNzZXM7XG4gIH0sXG4gIHZmanNGaWVsZEhlbHBlckV2ZW50SGFuZGxlcihrZXksIGNiKSB7XG4gICAgcmV0dXJuIChkYXRhKSA9PiB7XG4gICAgICBpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldFZmanNGaWVsZE1vZGVsKGNiKGRhdGEpKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGRhdGEgaW5zdGFuY2VvZiBFdmVudCkge1xuICAgICAgICBpZiAoZGF0YS50YXJnZXQgJiYgZGF0YS50YXJnZXQudmFsdWUpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5zZXRWZmpzRmllbGRNb2RlbChkYXRhLnRhcmdldC52YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5zZXRWZmpzRmllbGRNb2RlbCh1bmRlZmluZWQpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5zZXRWZmpzRmllbGRNb2RlbChkYXRhKTtcbiAgICB9O1xuICB9LFxuICB2ZmpzRmllbGRIZWxwZXJGb3JtYXRFdmVudHNSZWR1Y2VyKGV2ZW50cyA9IHt9KSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGV2ZW50cykucmVkdWNlKFxuICAgICAgKGZvcm1hdHRlZEV2ZW50cywga2V5KSA9PiAoe1xuICAgICAgICAuLi5mb3JtYXR0ZWRFdmVudHMsXG4gICAgICAgIFtrZXldOiB0aGlzLnZmanNGaWVsZEhlbHBlckV2ZW50SGFuZGxlcihrZXksIGV2ZW50c1trZXldKSxcbiAgICAgIH0pLFxuICAgICAge30sXG4gICAgKTtcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGhlbHBlcnM7XG4iLCJpbXBvcnQgZ2V0dGVycyBmcm9tICcuL2dldHRlcnMnO1xuaW1wb3J0IGhlbHBlcnMgZnJvbSAnLi9oZWxwZXJzJztcbmltcG9ydCBzZXR0ZXJzIGZyb20gJy4vc2V0dGVycyc7XG5cbmNvbnN0IG1ldGhvZHMgPSB7XG4gIC4uLmdldHRlcnMsXG4gIC4uLmhlbHBlcnMsXG4gIC4uLnNldHRlcnMsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBtZXRob2RzO1xuIiwiaW1wb3J0IHtcbiAgVkZKU19FVkVOVF9GSUVMRF9NT0RFTF9VUERBVEUsXG4gIFZGSlNfRVZFTlRfRklFTERfU1RBVEVfVVBEQVRFLFxufSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xuXG5jb25zdCBzZXR0ZXJzID0ge1xuICBzZXRTdGF0ZSh2YWx1ZSkge1xuICAgIHRoaXMuc2V0VmZqc0ZpZWxkU3RhdGUodmFsdWUpO1xuICB9LFxuICBzZXRNb2RlbCh2YWx1ZSkge1xuICAgIHRoaXMuc2V0VmZqc0ZpZWxkTW9kZWwodmFsdWUpO1xuICB9LFxuICBzZXRWZmpzRmllbGRTdGF0ZSh2YWx1ZSwga2V5KSB7XG4gICAgdGhpcy52ZmpzQnVzLmVtaXQoVkZKU19FVkVOVF9GSUVMRF9TVEFURV9VUERBVEUsIHtcbiAgICAgIGtleToga2V5IHx8IHRoaXMudmZqc0ZpZWxkTW9kZWxLZXksXG4gICAgICB2YWx1ZSxcbiAgICB9KTtcbiAgfSxcbiAgc2V0VmZqc0ZpZWxkTW9kZWwodmFsdWUsIGtleSkge1xuICAgIHRoaXMudmZqc0J1cy5lbWl0KFZGSlNfRVZFTlRfRklFTERfTU9ERUxfVVBEQVRFLCB7XG4gICAgICBrZXk6IGtleSB8fCB0aGlzLnZmanNGaWVsZE1vZGVsS2V5LFxuICAgICAgdmFsdWUsXG4gICAgfSk7XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBzZXR0ZXJzO1xuIiwiY29uc3QgcHJvcHMgPSB7XG4gIHZmanNCdXM6IHtcbiAgICB0eXBlOiBPYmplY3QsXG4gICAgcmVxdWlyZWQ6IHRydWUsXG4gIH0sXG4gIHZmanNDaGlsZHJlbjoge1xuICAgIHR5cGU6IEFycmF5LFxuICAgIGRlZmF1bHQ6ICgpID0+IFtdLFxuICB9LFxuICB2ZmpzQ2hpbGRyZW5VaVNjaGVtYToge1xuICAgIHR5cGU6IEFycmF5LFxuICAgIGRlZmF1bHQ6ICgpID0+IFtdLFxuICB9LFxuICB2ZmpzQ29tcG9uZW50OiB7XG4gICAgdHlwZTogW1N0cmluZywgT2JqZWN0XSxcbiAgfSxcbiAgdmZqc0ZpZWxkRXJyb3JIYW5kbGVyOiB7XG4gICAgdHlwZTogQm9vbGVhbixcbiAgfSxcbiAgdmZqc0ZpZWxkRXJyb3JPcHRpb25zOiB7XG4gICAgdHlwZTogT2JqZWN0LFxuICB9LFxuICB2ZmpzRmllbGRFcnJvcnM6IHtcbiAgICB0eXBlOiBBcnJheSxcbiAgfSxcbiAgdmZqc0ZpZWxkSWQ6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgcmVxdWlyZWQ6IHRydWUsXG4gIH0sXG4gIHZmanNGaWVsZE1vZGVsOiB7XG4gICAgdHlwZTogbnVsbCxcbiAgfSxcbiAgdmZqc0ZpZWxkTW9kZWxLZXk6IHtcbiAgICB0eXBlOiBbU3RyaW5nLCBCb29sZWFuXSxcbiAgICByZXF1aXJlZDogdHJ1ZSxcbiAgfSxcbiAgdmZqc0ZpZWxkT3B0aW9uczoge1xuICAgIHR5cGU6IE9iamVjdCxcbiAgICByZXF1aXJlZDogdHJ1ZSxcbiAgfSxcbiAgdmZqc0ZpZWxkUmVxdWlyZWQ6IHtcbiAgICB0eXBlOiBCb29sZWFuLFxuICAgIHJlcXVpcmVkOiB0cnVlLFxuICB9LFxuICB2ZmpzRmllbGRTY2hlbWE6IHtcbiAgICB0eXBlOiBPYmplY3QsXG4gICAgcmVxdWlyZWQ6IHRydWUsXG4gIH0sXG4gIHZmanNGaWVsZFNjaGVtYXM6IHtcbiAgICB0eXBlOiBPYmplY3QsXG4gIH0sXG4gIHZmanNGaWVsZFN0YXRlOiB7XG4gICAgdHlwZTogT2JqZWN0LFxuICAgIHJlcXVpcmVkOiB0cnVlLFxuICB9LFxuICB2ZmpzRmllbGRUYWc6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgZGVmYXVsdDogJ2RpdicsXG4gIH0sXG4gIHZmanNGaWVsZFVpU2NoZW1hOiB7XG4gICAgdHlwZTogT2JqZWN0LFxuICAgIHJlcXVpcmVkOiB0cnVlLFxuICB9LFxuICB2ZmpzRmllbGRWYWx1ZVByb3A6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gIH0sXG4gIHZmanNPcHRpb25zOiB7XG4gICAgdHlwZTogT2JqZWN0LFxuICAgIHJlcXVpcmVkOiB0cnVlLFxuICB9LFxuICB2ZmpzTW9kZWw6IHtcbiAgICB0eXBlOiBPYmplY3QsXG4gICAgcmVxdWlyZWQ6IHRydWUsXG4gIH0sXG4gIHZmanNTdGF0ZToge1xuICAgIHR5cGU6IE9iamVjdCxcbiAgICByZXF1aXJlZDogdHJ1ZSxcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHByb3BzO1xuIiwiaW1wb3J0IHZmanNHbG9iYWxNaXhpbiBmcm9tICcuLi92ZmpzLWdsb2JhbC1taXhpbic7XG5cbmNvbnN0IFZ1ZUZvcm1Kc29uU2NoZW1hID0ge1xuICBuYW1lOiAndnVlLWZvcm0tanNvbi1zY2hlbWEnLFxuICBtaXhpbnM6IFt2ZmpzR2xvYmFsTWl4aW5dLFxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQodGhpcy50YWcsIHRoaXMudmZqc0ZpZWxkcyk7XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBWdWVGb3JtSnNvblNjaGVtYTtcbiIsImNvbnN0IGNvbXB1dGVkID0ge1xuICB2ZmpzU2NoZW1hVmFsaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMudmZqc1NjaGVtYS5ldmVyeSh0aGlzLmlzVmZqc0ZpZWxkU2NoZW1hVmFsaWQpO1xuICB9LFxuICB2ZmpzTW9kZWxWYWxpZCgpIHtcbiAgICByZXR1cm4gdGhpcy52ZmpzU2NoZW1hLmV2ZXJ5KHRoaXMuaXNWZmpzRmllbGRNb2RlbFZhbGlkKTtcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbXB1dGVkO1xuIiwiaW1wb3J0IHtcbiAgVkZKU19FVkVOVF9GSUVMRF9NT0RFTF9DTEVBUl9ISURERU4sXG4gIFZGSlNfRVZFTlRfRklFTERfTU9ERUxfVVBEQVRFLFxuICBWRkpTX0VWRU5UX0ZJRUxEX01PREVMX1ZBTElEQVRFLFxuICBWRkpTX0VWRU5UX0ZJRUxEX1NUQVRFX1VQREFURSxcbiAgVkZKU19FVkVOVF9NT0RFTF9VUERBVEUsXG4gIFZGSlNfRVZFTlRfTU9ERUxfVVBEQVRFRCxcbiAgVkZKU19FVkVOVF9NT0RFTF9WQUxJREFURSxcbiAgVkZKU19FVkVOVF9TVEFURV9VUERBVEUsXG4gIFZGSlNfRVZFTlRfU1RBVEVfVVBEQVRFRCxcbiAgVkZKU19FVkVOVF9VSV9GSUVMRFNfVVBEQVRFLFxufSBmcm9tICcuLi9jb25zdGFudHMnO1xuXG5jb25zdCBkYXRhID0gKCkgPT4gKHtcbiAgdmZqc0J1czoge30sXG4gIHZmanNFdmVudHM6IFtcbiAgICBWRkpTX0VWRU5UX0ZJRUxEX01PREVMX0NMRUFSX0hJRERFTixcbiAgICBWRkpTX0VWRU5UX0ZJRUxEX01PREVMX1VQREFURSxcbiAgICBWRkpTX0VWRU5UX0ZJRUxEX01PREVMX1ZBTElEQVRFLFxuICAgIFZGSlNfRVZFTlRfRklFTERfU1RBVEVfVVBEQVRFLFxuICAgIFZGSlNfRVZFTlRfTU9ERUxfVVBEQVRFLFxuICAgIFZGSlNfRVZFTlRfTU9ERUxfVVBEQVRFRCxcbiAgICBWRkpTX0VWRU5UX01PREVMX1ZBTElEQVRFLFxuICAgIFZGSlNfRVZFTlRfU1RBVEVfVVBEQVRFLFxuICAgIFZGSlNfRVZFTlRfU1RBVEVfVVBEQVRFRCxcbiAgICBWRkpTX0VWRU5UX1VJX0ZJRUxEU19VUERBVEUsXG4gIF0sXG4gIHZmanNGaWVsZHM6IFtdLFxuICB2ZmpzRmllbGRzQWN0aXZlOiBbXSxcbiAgdmZqc0ZpZWxkc1JlcXVpcmVkOiBbXSxcbiAgdmZqc01vZGVsOiB7fSxcbiAgdmZqc09wdGlvbnM6IHtcbiAgICBhbGxvd0ludmFsaWRNb2RlbDogdHJ1ZSxcbiAgICBhanY6IHtcbiAgICAgIGtleXdvcmRzOiB7fSxcbiAgICAgIGxvY2FsZTogbnVsbCxcbiAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgYWxsRXJyb3JzOiB0cnVlLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGNhc3RUb1NjaGVtYVR5cGU6IGZhbHNlLFxuICAgIHNob3dWYWxpZGF0aW9uRXJyb3JzOiBmYWxzZSxcbiAgICB2YWxpZGF0ZTogdHJ1ZSxcbiAgICB2YWxpZGF0ZU9uTG9hZDogdHJ1ZSxcbiAgICB2YWxpZGF0ZU9uQ2hhbmdlOiB0cnVlLFxuICAgIHZhbHVlUHJvcDogJ3ZhbHVlJyxcbiAgfSxcbiAgdmZqc1NjaGVtYToge30sXG4gIHZmanNTdGF0ZToge30sXG4gIHZmanNVaVNjaGVtYTogW10sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgZGF0YTtcbiIsImltcG9ydCBjb21wdXRlZCBmcm9tICcuL2NvbXB1dGVkJztcbmltcG9ydCBkYXRhIGZyb20gJy4vZGF0YSc7XG5pbXBvcnQgbWV0aG9kcyBmcm9tICcuL21ldGhvZHMnO1xuaW1wb3J0IHByb3BzIGZyb20gJy4vcHJvcHMnO1xuaW1wb3J0IHdhdGNoIGZyb20gJy4vd2F0Y2gnO1xuXG5jb25zdCB2ZmpzR2xvYmFsTWl4aW4gPSB7XG4gIGNyZWF0ZWQoKSB7XG4gICAgdGhpcy52ZmpzSW5pdGlhbGl6ZSgpO1xuICB9LFxuICBiZWZvcmVEZXN0cm95KCkge1xuICAgIHRoaXMudmZqc0Rlc3Ryb3koKTtcbiAgfSxcbiAgY29tcHV0ZWQsXG4gIGRhdGEsXG4gIHByb3BzLFxuICBtZXRob2RzLFxuICB3YXRjaCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHZmanNHbG9iYWxNaXhpbjtcbiIsImltcG9ydCB2ZmpzQnVzIGZyb20gJy4vdmZqcy1idXMnO1xuaW1wb3J0IHZmanNIZWxwZXJzIGZyb20gJy4vdmZqcy1oZWxwZXJzJztcbmltcG9ydCB2ZmpzTGlmZWN5Y2xlIGZyb20gJy4vdmZqcy1saWZlY3ljbGUnO1xuaW1wb3J0IHZmanNNb2RlbCBmcm9tICcuL3ZmanMtbW9kZWwnO1xuaW1wb3J0IHZmanNTdGF0ZSBmcm9tICcuL3ZmanMtc3RhdGUnO1xuaW1wb3J0IHZmanNTY2hlbWEgZnJvbSAnLi92ZmpzLXNjaGVtYSc7XG5pbXBvcnQgdmZqc1VpIGZyb20gJy4vdmZqcy11aSc7XG5pbXBvcnQgdmZqc1ZhbGlkYXRpb24gZnJvbSAnLi92ZmpzLXZhbGlkYXRpb24nO1xuXG5jb25zdCB2ZmpzTWV0aG9kcyA9IHtcbiAgLi4udmZqc0J1cyxcbiAgLi4udmZqc0xpZmVjeWNsZSxcbiAgLi4udmZqc0hlbHBlcnMsXG4gIC4uLnZmanNNb2RlbCxcbiAgLi4udmZqc1NjaGVtYSxcbiAgLi4udmZqc1N0YXRlLFxuICAuLi52ZmpzVWksXG4gIC4uLnZmanNWYWxpZGF0aW9uLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgdmZqc01ldGhvZHM7XG4iLCJpbXBvcnQgTWluaWJ1cyBmcm9tICdtaW5pYnVzJztcbmltcG9ydCB7IGlzRXF1YWwsIHNldCB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQge1xuICBWRkpTX0VWRU5UX0ZJRUxEX01PREVMX0NMRUFSX0hJRERFTixcbiAgVkZKU19FVkVOVF9GSUVMRF9NT0RFTF9VUERBVEUsXG4gIFZGSlNfRVZFTlRfRklFTERfTU9ERUxfVkFMSURBVEUsXG4gIFZGSlNfRVZFTlRfRklFTERfU1RBVEVfVVBEQVRFLFxuICBWRkpTX0VWRU5UX01PREVMX1VQREFURUQsXG4gIFZGSlNfRVZFTlRfTU9ERUxfVkFMSURBVEUsXG4gIFZGSlNfRVZFTlRfU1RBVEVfVVBEQVRFLFxuICBWRkpTX0VWRU5UX1NUQVRFX1VQREFURUQsXG4gIFZGSlNfRVZFTlRfVUlfRklFTERTX1VQREFURSxcbiAgVkZKU19FWFRFUk5BTF9FVkVOVF9DSEFOR0UsXG4gIFZGSlNfRVhURVJOQUxfRVZFTlRfU1RBVEVfQ0hBTkdFLFxuICBWRkpTX0VYVEVSTkFMX0VWRU5UX1ZBTElEQVRFRCxcbn0gZnJvbSAnLi4vLi4vLi4vY29uc3RhbnRzJztcblxuY29uc3QgdmZqc0J1cyA9IHtcbiAgYWRkVmZqc0xpc3RlbmVyKGV2ZW50LCBjYWxsYmFjaykge1xuICAgIHRoaXMudmZqc0J1cy5vbihldmVudCwgdmFsdWUgPT4gY2FsbGJhY2soZXZlbnQsIHZhbHVlKSk7XG4gIH0sXG4gIGFkZFZmanNMaXN0ZW5lcnMoZXZlbnRzID0gW10sIGNhbGxiYWNrKSB7XG4gICAgZXZlbnRzLmZvckVhY2goZXZlbnQgPT4gdGhpcy5hZGRWZmpzTGlzdGVuZXIoZXZlbnQsIGNhbGxiYWNrKSk7XG4gIH0sXG4gIHJlbW92ZVZmanNMaXN0ZW5lcihldmVudCkge1xuICAgIHRoaXMudmZqc0J1cy5vZmYoZXZlbnQpO1xuICB9LFxuICByZW1vdmVWZmpzTGlzdGVuZXJzKGV2ZW50cyA9IFtdKSB7XG4gICAgZXZlbnRzLmZvckVhY2godGhpcy5yZW1vdmVWZmpzTGlzdGVuZXIpO1xuICB9LFxuICByZW1vdmVWZmpzTGlzdGVuZXJzQWxsKCkge1xuICAgIHRoaXMudmZqc0J1cy5vZmYoKTtcbiAgfSxcbiAgdmZqc0J1c0V2ZW50SGFuZGxlcihldmVudCwgcGF5bG9hZCkge1xuICAgIGNvbnN0IGV2ZW50QWN0aW9ucyA9IHtcbiAgICAgIFtWRkpTX0VWRU5UX0ZJRUxEX01PREVMX0NMRUFSX0hJRERFTl06ICgpID0+IHtcbiAgICAgICAgY29uc3QgYWxsTW9kZWxzID0gdGhpcy52ZmpzSGVscGVyR2V0RmllbGRzV2l0aENsZWFyT25IaWRlKHRoaXMudWlTY2hlbWEpO1xuICAgICAgICBjb25zdCBhY3RpdmVNb2RlbHMgPSB0aGlzLnZmanNIZWxwZXJHZXRGaWVsZHNXaXRoQ2xlYXJPbkhpZGUodGhpcy52ZmpzRmllbGRzQWN0aXZlKTtcblxuICAgICAgICBjb25zdCBpbmFjdGl2ZU1vZGVscyA9IE9iamVjdC5rZXlzKGFsbE1vZGVscykucmVkdWNlKChtb2RlbHMsIGtleSkgPT4ge1xuICAgICAgICAgIGlmICghKGtleSBpbiBhY3RpdmVNb2RlbHMpKSB7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgICAgICAgIG1vZGVsc1trZXldID0gYWxsTW9kZWxzW2tleV07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIG1vZGVscztcbiAgICAgICAgfSwge30pO1xuXG4gICAgICAgIE9iamVjdC5rZXlzKGluYWN0aXZlTW9kZWxzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICBjb25zdCBjbGVhck1vZGVscyA9IGluYWN0aXZlTW9kZWxzW2tleV07XG4gICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY2xlYXJNb2RlbHMpKSB7XG4gICAgICAgICAgICBjbGVhck1vZGVscy5mb3JFYWNoKChjbGVhck1vZGVsKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IG5ld01vZGVsID0gdGhpcy52ZmpzSGVscGVyQXBwbHlGaWVsZE1vZGVsKFxuICAgICAgICAgICAgICAgIHR5cGVvZiBjbGVhck1vZGVsID09PSAnc3RyaW5nJyA/IGNsZWFyTW9kZWwgOiBrZXksXG4gICAgICAgICAgICAgICAgdW5kZWZpbmVkLFxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB0aGlzLnNldFZmanNNb2RlbChuZXdNb2RlbCwgdHJ1ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgbmV3TW9kZWwgPSB0aGlzLnZmanNIZWxwZXJBcHBseUZpZWxkTW9kZWwoXG4gICAgICAgICAgICAgIHR5cGVvZiBjbGVhck1vZGVscyA9PT0gJ3N0cmluZycgPyBjbGVhck1vZGVscyA6IGtleSxcbiAgICAgICAgICAgICAgdW5kZWZpbmVkLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHRoaXMuc2V0VmZqc01vZGVsKG5ld01vZGVsLCB0cnVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIFtWRkpTX0VWRU5UX0ZJRUxEX01PREVMX1ZBTElEQVRFXTogKHsga2V5LCB2YWx1ZSwgY2IgfSkgPT4ge1xuICAgICAgICBjb25zdCB2ZmpzTW9kZWwgPSB0aGlzLnZmanNIZWxwZXJBcHBseUZpZWxkTW9kZWwoa2V5LCB2YWx1ZSk7XG5cbiAgICAgICAgdGhpcy52ZmpzQnVzLmVtaXQoVkZKU19FVkVOVF9NT0RFTF9WQUxJREFURSwge1xuICAgICAgICAgIHZmanNNb2RlbCxcbiAgICAgICAgICBjYjogKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbW9kZWwgPSB7fTtcbiAgICAgICAgICAgIHNldChtb2RlbCwga2V5LCB2YWx1ZSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHNjaGVtYSA9IHtcbiAgICAgICAgICAgICAgdHlwZTogJ29iamVjdCcsXG4gICAgICAgICAgICAgIHJlcXVpcmVkOiB0aGlzLnZmanNIZWxwZXJGaWVsZElzUmVxdWlyZWQoa2V5KSA/IFtrZXldIDogW10sXG4gICAgICAgICAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgICAgICAgICBba2V5XTogdGhpcy5nZXRWZmpzU2NoZW1hKGtleSkgfHwge30sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBjb25zdCBlcnJvcnMgPSB0aGlzLmdldFZmanNWYWxpZGF0aW9uRXJyb3JzKG1vZGVsLCBzY2hlbWEpO1xuXG4gICAgICAgICAgICBpZiAoY2IgJiYgdHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgIGNiKGVycm9ycyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgW1ZGSlNfRVZFTlRfRklFTERfTU9ERUxfVVBEQVRFXTogKHsga2V5LCB2YWx1ZTogb3JpZ2luYWxWYWx1ZSwgY2IgfSkgPT4ge1xuICAgICAgICBsZXQgdmFsdWUgPSBvcmlnaW5hbFZhbHVlO1xuXG4gICAgICAgIGNvbnN0IHsgY2FzdFRvU2NoZW1hVHlwZSA9IGZhbHNlIH0gPSB0aGlzLnZmanNPcHRpb25zO1xuICAgICAgICBpZiAoY2FzdFRvU2NoZW1hVHlwZSkge1xuICAgICAgICAgIC8vIENhc3QgbW9kZWwgdG8gdGhlIHR5cGUgc3BlY2lmaWVkIGluIGl0cyBzY2hlbWFcbiAgICAgICAgICB2YWx1ZSA9IHRoaXMudmZqc0hlbHBlckNhc3RWYWx1ZVRvU2NoZW1hVHlwZShrZXksIHZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudmZqc0J1cy5lbWl0KFZGSlNfRVZFTlRfRklFTERfTU9ERUxfVkFMSURBVEUsIHtcbiAgICAgICAgICBrZXksXG4gICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgY2I6IChlcnJvcnMpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZmanNGaWVsZE1vZGVsID0gdGhpcy5nZXRWZmpzRmllbGRNb2RlbChrZXkpO1xuICAgICAgICAgICAgY29uc3QgbmV3RmllbGRTdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuZ2V0VmZqc0ZpZWxkU3RhdGUoa2V5KSwge1xuICAgICAgICAgICAgICB2ZmpzRmllbGREaXJ0eTogIWlzRXF1YWwodmZqc0ZpZWxkTW9kZWwsIHZhbHVlKSxcbiAgICAgICAgICAgICAgdmZqc0ZpZWxkRXJyb3JzOiBlcnJvcnMsXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdGhpcy5zZXRWZmpzRmllbGRTdGF0ZShuZXdGaWVsZFN0YXRlLCBrZXkpO1xuXG4gICAgICAgICAgICBpZiAoIWVycm9ycyB8fCAoZXJyb3JzICYmIGVycm9ycy5sZW5ndGggPT09IDApIHx8IHRoaXMudmZqc09wdGlvbnMuYWxsb3dJbnZhbGlkTW9kZWwpIHtcbiAgICAgICAgICAgICAgY29uc3QgbmV3TW9kZWwgPSB0aGlzLnZmanNIZWxwZXJBcHBseUZpZWxkTW9kZWwoa2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICAgIHRoaXMuc2V0VmZqc01vZGVsKG5ld01vZGVsKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGNiICYmIHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICBjYihlcnJvcnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIFtWRkpTX0VWRU5UX0ZJRUxEX1NUQVRFX1VQREFURV06ICh7IGtleSwgdmFsdWUsIGNiIH0pID0+IHtcbiAgICAgICAgdGhpcy52ZmpzQnVzLmVtaXQoVkZKU19FVkVOVF9TVEFURV9VUERBVEUsIHtcbiAgICAgICAgICBrZXksXG4gICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgY2IsXG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIFtWRkpTX0VWRU5UX01PREVMX1ZBTElEQVRFXTogKHsgdmZqc01vZGVsLCBjYiB9KSA9PiB7XG4gICAgICAgIGNvbnN0IHZmanNFcnJvcnMgPSB0aGlzLmdldFZmanNWYWxpZGF0aW9uRXJyb3JzKHZmanNNb2RlbCk7XG5cbiAgICAgICAgdGhpcy52ZmpzQnVzLmVtaXQoVkZKU19FVkVOVF9TVEFURV9VUERBVEUsIHtcbiAgICAgICAgICBrZXk6ICd2ZmpzRXJyb3JzJyxcbiAgICAgICAgICB2YWx1ZTogdmZqc0Vycm9ycyxcbiAgICAgICAgICBjYjogKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmZqc1N0YXRlID0gdGhpcy5nZXRWZmpzU3RhdGUoKTtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoVkZKU19FWFRFUk5BTF9FVkVOVF9WQUxJREFURUQsIHZmanNTdGF0ZS52ZmpzRXJyb3JzLmxlbmd0aCA9PT0gMCk7XG5cbiAgICAgICAgICAgIGlmIChjYiAmJiB0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgY2IodmZqc0Vycm9ycyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgW1ZGSlNfRVZFTlRfVUlfRklFTERTX1VQREFURV06ICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRWZmpzVWlGaWVsZHNBY3RpdmUoKTtcblxuICAgICAgfSxcbiAgICAgIFtWRkpTX0VWRU5UX01PREVMX1VQREFURURdOiAoKSA9PiB7XG4gICAgICAgIHRoaXMudmZqc0J1cy5lbWl0KFZGSlNfRVZFTlRfVUlfRklFTERTX1VQREFURSk7XG5cbiAgICAgICAgLy8gQ2xlYXIgaGlkZGVuIGZpZWxkc1xuICAgICAgICB0aGlzLnZmanNCdXMuZW1pdChWRkpTX0VWRU5UX0ZJRUxEX01PREVMX0NMRUFSX0hJRERFTik7XG5cbiAgICAgICAgdGhpcy4kZW1pdChWRkpTX0VYVEVSTkFMX0VWRU5UX0NIQU5HRSwgdGhpcy5nZXRWZmpzTW9kZWwoKSk7XG4gICAgICB9LFxuICAgICAgW1ZGSlNfRVZFTlRfU1RBVEVfVVBEQVRFXTogKHsga2V5LCB2YWx1ZSwgY2IgfSkgPT4ge1xuICAgICAgICBjb25zdCBuZXdWZmpzU3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmdldFZmanNTdGF0ZSgpLCB7XG4gICAgICAgICAgW2tleV06IHZhbHVlLFxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnNldFZmanNTdGF0ZShuZXdWZmpzU3RhdGUpO1xuXG4gICAgICAgIGlmIChjYiAmJiB0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBjYigpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgW1ZGSlNfRVZFTlRfU1RBVEVfVVBEQVRFRF06IChjYikgPT4ge1xuICAgICAgICBjb25zdCB2ZmpzU3RhdGUgPSB7XG4gICAgICAgICAgdmZqc0Vycm9yczogW10sXG4gICAgICAgICAgdmZqc0ZpZWxkc0FjdGl2ZTogdGhpcy52ZmpzRmllbGRzQWN0aXZlLFxuICAgICAgICAgIHZmanNGaWVsZHNBY3RpdmVNb2RlbHM6IHRoaXMudmZqc0ZpZWxkc0FjdGl2ZU1vZGVscyxcbiAgICAgICAgICAuLi50aGlzLmdldFZmanNTdGF0ZSgpLFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuJGVtaXQoVkZKU19FWFRFUk5BTF9FVkVOVF9TVEFURV9DSEFOR0UsIHZmanNTdGF0ZSk7XG5cbiAgICAgICAgaWYgKGNiICYmIHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGNiKCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfTtcblxuICAgIGlmIChldmVudCAmJiBldmVudCBpbiBldmVudEFjdGlvbnMpIHtcbiAgICAgIGV2ZW50QWN0aW9uc1tldmVudF0ocGF5bG9hZCk7XG4gICAgfVxuICB9LFxuICB2ZmpzQnVzSW5pdGlhbGl6ZSgpIHtcbiAgICB0aGlzLnZmanNCdXMgPSBNaW5pYnVzLmNyZWF0ZSgpO1xuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgdmZqc0J1cztcbiIsImltcG9ydCB7IHNldCwgY2xvbmVEZWVwIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB2ZmpzRmllbGRDb21wb25lbnQgZnJvbSAnLi4vLi4vLi4vdmZqcy1maWVsZC1jb21wb25lbnQnO1xuXG5jb25zdCB2ZmpzSGVscGVycyA9IHtcbiAgdmZqc0hlbHBlckNyZWF0ZUZpZWxkKHZmanNGaWVsZFVpU2NoZW1hKSB7XG4gICAgY29uc3Qge1xuICAgICAgaWQ6IHZmanNGaWVsZElkLFxuICAgICAgY2hpbGRyZW4gPSBbXSxcbiAgICAgIGNvbXBvbmVudCxcbiAgICAgIGVycm9ySGFuZGxlcjogdmZqc0ZpZWxkRXJyb3JIYW5kbGVyLFxuICAgICAgZXJyb3JPcHRpb25zOiB2ZmpzRmllbGRFcnJvck9wdGlvbnMgPSB7fSxcbiAgICAgIGZpZWxkT3B0aW9uczogdmZqc0ZpZWxkT3B0aW9ucyA9IHt9LFxuICAgICAgbW9kZWw6IHZmanNGaWVsZE1vZGVsS2V5ID0gJycsXG4gICAgICByZXF1aXJlZDogdmZqc0ZpZWxkUmVxdWlyZWQgPSBmYWxzZSxcbiAgICAgIHZhbHVlUHJvcDogdmZqc0ZpZWxkVmFsdWVQcm9wID0gdGhpcy52ZmpzT3B0aW9ucy52YWx1ZVByb3AsXG4gICAgfSA9IHZmanNGaWVsZFVpU2NoZW1hO1xuXG4gICAgY29uc3QgdmZqc0ZpZWxkU2NoZW1hID0gdGhpcy5nZXRWZmpzRmllbGRTY2hlbWEodmZqc0ZpZWxkTW9kZWxLZXkpIHx8IHt9O1xuICAgIGNvbnN0IHZmanNGaWVsZFNjaGVtYXMgPSB0aGlzLnNjaGVtYXM7XG4gICAgY29uc3QgdmZqc0ZpZWxkTW9kZWwgPSB0aGlzLmdldFZmanNGaWVsZE1vZGVsKHZmanNGaWVsZE1vZGVsS2V5KTtcbiAgICBjb25zdCB2ZmpzRmllbGRTdGF0ZSA9IHRoaXMuZ2V0VmZqc0ZpZWxkU3RhdGUodmZqc0ZpZWxkTW9kZWxLZXkpIHx8IHt9O1xuICAgIGNvbnN0IHZmanNNb2RlbCA9IHRoaXMuZ2V0VmZqc01vZGVsKCk7XG4gICAgY29uc3QgdmZqc1N0YXRlID0gdGhpcy5nZXRWZmpzU3RhdGUoKTtcblxuICAgIC8vIEdldCBmaWVsZCBlcnJvcnNcbiAgICBjb25zdCB7IHZmanNGaWVsZEVycm9ycyA9IFtdIH0gPSB2ZmpzRmllbGRTdGF0ZTtcblxuICAgIC8vIElmIHRoaXMgZmllbGQgaXMgYW4gZXJyb3JIYW5kbGVyIHdlIHBhc3MgdGhlIGVycm9ycyBhcyB0aGUgY2hpbGRyZW5cbiAgICAvLyBidXQgb25seSBpZiB0aGUgZXJyb3IgaGFuZGxlciBkb2VzIG5vdCBoYXZlIGNoaWxkcmVuIG9mIGl0cyBvd24gb3JcbiAgICAvLyBkb21Qcm9wcy5pbm5lckhUTUwgaXMgc2V0XG4gICAgY29uc3QgeyBkb21Qcm9wcyB9ID0gdmZqc0ZpZWxkT3B0aW9ucztcbiAgICBjb25zdCBnZW5lcmF0ZUVycm9yc0FzQ2hpbGRyZW4gPSB2ZmpzRmllbGRFcnJvckhhbmRsZXJcbiAgICAgICYmIHZmanNGaWVsZEVycm9ycy5sZW5ndGggPiAwXG4gICAgICAmJiAoIWRvbVByb3BzIHx8ICFkb21Qcm9wcy5pbm5lckhUTUwpXG4gICAgICAmJiBjaGlsZHJlbi5sZW5ndGggPT09IDA7XG5cbiAgICBjb25zdCB2ZmpzQ2hpbGRyZW4gPSBnZW5lcmF0ZUVycm9yc0FzQ2hpbGRyZW5cbiAgICAgID8gdGhpcy52ZmpzSGVscGVyR2V0RXJyb3JzKHZmanNGaWVsZEVycm9ycywgdmZqc0ZpZWxkSWQpXG4gICAgICA6IGNoaWxkcmVuLm1hcCh0aGlzLnZmanNIZWxwZXJDcmVhdGVGaWVsZCk7XG5cbiAgICBjb25zdCBwcm9wcyA9IHtcbiAgICAgIC4uLnZmanNGaWVsZE9wdGlvbnMsXG4gICAgICB2ZmpzQnVzOiB0aGlzLnZmanNCdXMsXG4gICAgICB2ZmpzQ2hpbGRyZW4sXG4gICAgICB2ZmpzQ2hpbGRyZW5VaVNjaGVtYTogY2hpbGRyZW4sXG4gICAgICB2ZmpzRmllbGRFcnJvckhhbmRsZXIsXG4gICAgICB2ZmpzRmllbGRFcnJvck9wdGlvbnMsXG4gICAgICB2ZmpzRmllbGRFcnJvcnMsXG4gICAgICB2ZmpzRmllbGRJZCxcbiAgICAgIHZmanNGaWVsZE1vZGVsLFxuICAgICAgdmZqc0ZpZWxkTW9kZWxLZXksXG4gICAgICB2ZmpzRmllbGRPcHRpb25zLFxuICAgICAgdmZqc0ZpZWxkUmVxdWlyZWQsXG4gICAgICB2ZmpzRmllbGRTY2hlbWEsXG4gICAgICB2ZmpzRmllbGRTY2hlbWFzLFxuICAgICAgdmZqc0ZpZWxkU3RhdGUsXG4gICAgICB2ZmpzRmllbGRVaVNjaGVtYSxcbiAgICAgIHZmanNGaWVsZFZhbHVlUHJvcCxcbiAgICAgIHZmanNPcHRpb25zOiB0aGlzLnZmanNPcHRpb25zLFxuICAgICAgdmZqc01vZGVsLFxuICAgICAgdmZqc1N0YXRlLFxuICAgIH07XG5cbiAgICByZXR1cm4gdGhpcy52ZmpzSGVscGVyQ3JlYXRlQ29tcG9uZW50KHtcbiAgICAgIGNoaWxkcmVuOiB2ZmpzQ2hpbGRyZW4sXG4gICAgICBjb21wb25lbnQsXG4gICAgICBwcm9wcyxcbiAgICB9KTtcbiAgfSxcbiAgdmZqc0hlbHBlckdldEVycm9ycyhlcnJvcnMgPSBbXSwgaWQpIHtcbiAgICByZXR1cm4gZXJyb3JzLm1hcCgoZXJyb3IsIGluZGV4KSA9PiB0aGlzLnZmanNIZWxwZXJDcmVhdGVGaWVsZCh7XG4gICAgICBpZDogYCR7aWR9LWVycm9yLSR7aW5kZXh9YCxcbiAgICAgIGNvbXBvbmVudDogJ2RpdicsXG4gICAgICBmaWVsZE9wdGlvbnM6IHtcbiAgICAgICAgY2xhc3M6IFsndmZqcy1lcnJvcicsICd2ZmpzLWRlZmF1bHQtZXJyb3ItaGFuZGxlciddLFxuICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgIGlubmVySFRNTDogZXJyb3IubWVzc2FnZSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSkpO1xuICB9LFxuICB2ZmpzSGVscGVySGFzaFN0cmluZyhzdHJpbmcsIGJpbmFyeSA9IDYyKSB7XG4gICAgbGV0IGludGVnZXIgPSAwO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHJpbmcubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGNoYXIgPSBzdHJpbmcuY2hhckNvZGVBdChpKTtcbiAgICAgIGludGVnZXIgPSAoaW50ZWdlciAqIDMzKSBeIGNoYXI7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tYml0d2lzZVxuICAgIH1cblxuICAgIC8vIENvbnZlcnQgaW50IHRvIHVuc2lnbmVkIHRvIGdldCBhIHBvc2l0aXZlIG51bWJlclxuICAgIGludGVnZXIgPj4+PSAwOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWJpdHdpc2VcblxuICAgIGNvbnN0IGNoYXJzID0gJzAxMjM0NTY3ODlhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ekFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaJztcbiAgICBjb25zdCBhcnJheSA9IFtdO1xuXG4gICAgLy8gQ3JlYXRlIGFuIGFscGhhbnVtZXJpYyBoYXNoIG9mIHVuc2lnbmVkIGludFxuICAgIHdoaWxlIChpbnRlZ2VyID49IGJpbmFyeSkge1xuICAgICAgY29uc3QgY2hhciA9IGludGVnZXIgJSBiaW5hcnk7XG4gICAgICBhcnJheS5wdXNoKGNoYXJzW2NoYXJdKTtcbiAgICAgIGludGVnZXIgPSBNYXRoLmZsb29yKGludGVnZXIgLyBiaW5hcnkpO1xuICAgIH1cblxuICAgIHJldHVybiBhcnJheS5qb2luKCcnKTtcbiAgfSxcbiAgdmZqc0hlbHBlckNyZWF0ZUNvbXBvbmVudCh7IGNoaWxkcmVuID0gW10sIGNvbXBvbmVudCwgcHJvcHMgfSkge1xuICAgIC8vIElmIHRoZSBjb21wb25lbnQgbWF0Y2hlcyBvbmUgb2YgdGhlIGxvY2FsIGNvbXBvbmVudHNcbiAgICAvLyBwYXNzZWQgaW4gd2l0aCB0aGUgYGNvbXBvbmVudHNgIHByb3BcbiAgICBjb25zdCBsb2NhbENvbXBvbmVudCA9IHRoaXMudmZqc0NvbXBvbmVudHNbY29tcG9uZW50XTtcblxuICAgIGlmICghcHJvcHMudmZqc0ZpZWxkTW9kZWxLZXkpIHtcbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KFxuICAgICAgICBsb2NhbENvbXBvbmVudCB8fCBjb21wb25lbnQsXG4gICAgICAgIHtcbiAgICAgICAgICBrZXk6IHByb3BzLnZmanNGaWVsZElkLFxuICAgICAgICAgIC4uLnByb3BzLnZmanNGaWVsZE9wdGlvbnMsXG4gICAgICAgIH0sXG4gICAgICAgIGNoaWxkcmVuLFxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudChcbiAgICAgIHZmanNGaWVsZENvbXBvbmVudCxcbiAgICAgIHtcbiAgICAgICAga2V5OiBgJHtwcm9wcy52ZmpzRmllbGRJZH0td3JhcHBlcmAsXG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgLi4ucHJvcHMsXG4gICAgICAgICAgdmZqc0NvbXBvbmVudDogbG9jYWxDb21wb25lbnQgfHwgY29tcG9uZW50LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGNoaWxkcmVuLFxuICAgICk7XG4gIH0sXG4gIHZmanNIZWxwZXJBcHBseUZpZWxkTW9kZWwoa2V5LCB2YWx1ZSkge1xuICAgIGNvbnN0IG5ld1ZmanNNb2RlbCA9IGNsb25lRGVlcCh0aGlzLmdldFZmanNNb2RlbCgpKTtcbiAgICBzZXQobmV3VmZqc01vZGVsLCBrZXksIHZhbHVlKTtcbiAgICByZXR1cm4gbmV3VmZqc01vZGVsO1xuICB9LFxuICAvLyBUaGUgbGV2ZWwgcGFyYW0gaGVscHMgdXMgdG8gZGlmZmVyZW50aWF0ZSBmdXJ0aGVyIGJldHdlZW4gZmllbGRzLlxuICAvLyBBcyB0aGUgc2FtZSBmaWVsZCBjb25maWd1cmF0aW9uIG1heSBiZSBwcmVzZW50IHRocm91Z2hvdXQgdGhlIHVpIHNjaGVtYVxuICAvLyBhbmQgdGh1cyBoYXZlIHRoZSBzYW1lIGhhc2guXG4gIC8vXG4gIC8vIFdlIG1lZGlhdGUgdGhpcyBieSBwcm92aWRpbmcgdGhlIGRlcHRoIGxldmVsIGFzIGEgc2Vjb25kIHBhcmFtXG4gIC8vIHdoaWNoIHdpbGwgbWFrZSB0aGUgaGFzaCB1bmlxdWUgZm9yIGV2ZXJ5IGZpZWxkXG4gIHZmanNIZWxwZXJHZW5lcmF0ZUZpZWxkKGZpZWxkLCBsZXZlbCA9IDApIHtcbiAgICBpZiAoIWZpZWxkKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3QgeyBjaGlsZHJlbiA9IFtdLCAuLi5maWVsZFdpdGhvdXRDaGlsZHJlbiB9ID0gZmllbGQ7XG4gICAgY29uc3Qgb2JqU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoeyBmaWVsZFdpdGhvdXRDaGlsZHJlbiwgbGV2ZWwgfSk7XG4gICAgY29uc3QgaWQgPSB0aGlzLnZmanNIZWxwZXJIYXNoU3RyaW5nKG9ialN0cmluZyk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgLi4uZmllbGQsXG4gICAgICBpZCxcbiAgICAgIGNoaWxkcmVuOiBjaGlsZHJlbi5tYXAoKGNoaWxkLCBpKSA9PiB0aGlzLnZmanNIZWxwZXJHZW5lcmF0ZUZpZWxkKGNoaWxkLCAoaSArIDEpICogKGxldmVsICsgMSkpKSxcbiAgICB9O1xuICB9LFxuICB2ZmpzSGVscGVyQ2hpbGRBcnJheU1hcHBlcih7IG1vZGVsLCBjaGlsZHJlbiA9IFtdLCAuLi5jaGlsZCB9LCBwYXJlbnRNb2RlbCwgaW5kZXgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4uY2hpbGQsXG4gICAgICBtb2RlbDogdGhpcy52ZmpzSGVscGVyR2V0Q2hpbGRBcnJheU1vZGVsQXRJbmRleChtb2RlbCwgcGFyZW50TW9kZWwsIGluZGV4KSxcbiAgICAgIGNoaWxkcmVuOiB0aGlzLnZmanNIZWxwZXJDaGlsZEFycmF5UmVkdWNlck1hcHBlcihwYXJlbnRNb2RlbCwgY2hpbGRyZW4sIGluZGV4KSxcbiAgICB9O1xuICB9LFxuICB2ZmpzSGVscGVyQ2hpbGRBcnJheVJlZHVjZXJNYXBwZXIobW9kZWwsIGNoaWxkcmVuID0gW10sIGluZGV4KSB7XG4gICAgcmV0dXJuIGNoaWxkcmVuLnJlZHVjZShcbiAgICAgIChhbGxDaGlsZHJlbiwgY2hpbGQpID0+IFtcbiAgICAgICAgLi4uYWxsQ2hpbGRyZW4sXG4gICAgICAgIHRoaXMudmZqc0hlbHBlckNoaWxkQXJyYXlNYXBwZXIoY2hpbGQsIG1vZGVsLCBpbmRleCksXG4gICAgICBdLFxuICAgICAgW10sXG4gICAgKTtcbiAgfSxcbiAgdmZqc0hlbHBlckdldENoaWxkQXJyYXlNb2RlbEF0SW5kZXgobW9kZWwsIHBhcmVudE1vZGVsLCBpbmRleCkge1xuICAgIGNvbnN0IHJlbGF0aXZlTW9kZWwgPSB0aGlzLnZmanNIZWxwZXJHZXRSZWxhdGl2ZU1vZGVsKG1vZGVsLCBwYXJlbnRNb2RlbCk7XG4gICAgcmV0dXJuIHJlbGF0aXZlTW9kZWwgPyBgJHtwYXJlbnRNb2RlbH0uJHtpbmRleH0uJHtyZWxhdGl2ZU1vZGVsfWAgOiBtb2RlbDtcbiAgfSxcbiAgdmZqc0hlbHBlckdldFJlbGF0aXZlTW9kZWwobW9kZWwsIHBhcmVudE1vZGVsKSB7XG4gICAgcmV0dXJuIG1vZGVsID8gU3RyaW5nKG1vZGVsKS5zdWJzdHIocGFyZW50TW9kZWwubGVuZ3RoICsgMSkgOiBtb2RlbDtcbiAgfSxcbiAgdmZqc0hlbHBlckdldFBhcmVudE1vZGVsKG1vZGVsKSB7XG4gICAgY29uc3QgcGFyZW50SW5kZXggPSBTdHJpbmcobW9kZWwpLmxhc3RJbmRleE9mKCcuJyk7XG4gICAgcmV0dXJuIFN0cmluZyhtb2RlbCkuc3Vic3RyKDAsIHBhcmVudEluZGV4KTtcbiAgfSxcbiAgdmZqc0hlbHBlckZpZWxkSXNSZXF1aXJlZChtb2RlbCkge1xuICAgIGlmIChtb2RlbCkge1xuICAgICAgY29uc3QgcGFyZW50TW9kZWwgPSB0aGlzLnZmanNIZWxwZXJHZXRQYXJlbnRNb2RlbChtb2RlbCk7XG4gICAgICBpZiAocGFyZW50TW9kZWwpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmZqc0ZpZWxkc1JlcXVpcmVkLmluZGV4T2YocGFyZW50TW9kZWwpICE9PSAtMTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMudmZqc0ZpZWxkc1JlcXVpcmVkLmluZGV4T2YobW9kZWwpICE9PSAtMTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH0sXG4gIHZmanNIZWxwZXJGaWVsZElzQXJyYXkoa2V5KSB7XG4gICAgaWYgKCFrZXkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCBzY2hlbWEgPSB0aGlzLmdldFZmanNGaWVsZFNjaGVtYShrZXkpO1xuICAgIHJldHVybiBzY2hlbWEgPyBBcnJheS5pc0FycmF5KHNjaGVtYS5pdGVtcykgOiBmYWxzZTtcbiAgfSxcbiAgdmZqc0hlbHBlckdldEZpZWxkc1dpdGhDbGVhck9uSGlkZShmaWVsZHMgPSBbXSkge1xuICAgIHJldHVybiBmaWVsZHMucmVkdWNlKChtb2RlbHMsIHsgY2hpbGRyZW4gPSBbXSwgZGlzcGxheU9wdGlvbnMgPSB7fSwgbW9kZWwgfSkgPT4ge1xuICAgICAgaWYgKGRpc3BsYXlPcHRpb25zLmNsZWFyT25IaWRlKSB7XG4gICAgICAgIGlmIChtb2RlbCkge1xuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgICAgIG1vZGVsc1ttb2RlbF0gPSBkaXNwbGF5T3B0aW9ucy5jbGVhck9uSGlkZTtcbiAgICAgICAgfSBlbHNlIGlmICghbW9kZWwgJiYgdHlwZW9mIGRpc3BsYXlPcHRpb25zLmNsZWFyT25IaWRlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgICAgIG1vZGVsc1tkaXNwbGF5T3B0aW9ucy5jbGVhck9uSGlkZV0gPSBkaXNwbGF5T3B0aW9ucy5jbGVhck9uSGlkZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5tb2RlbHMsXG4gICAgICAgIC4uLnRoaXMudmZqc0hlbHBlckdldEZpZWxkc1dpdGhDbGVhck9uSGlkZShjaGlsZHJlbiksXG4gICAgICB9O1xuICAgIH0sIHt9KTtcbiAgfSxcbiAgdmZqc0hlbHBlckNhc3RWYWx1ZVRvU2NoZW1hVHlwZShrZXksIHZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnN0IHsgdHlwZSB9ID0gdGhpcy5nZXRWZmpzU2NoZW1hKGtleSk7XG5cbiAgICAgIC8vIENvbnZlcnQgdG8gYSBudW1lcmljIHZhbHVlXG4gICAgICBpZiAodHlwZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgcmV0dXJuIE51bWJlcih2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlID09PSAnaW50ZWdlcicpIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgLy8gQ29udmVydCB0byBhIGJvb2xlYW4gdmFsdWVcbiAgICAgIGlmICh0eXBlID09PSAnYm9vbGVhbicgJiYgKHZhbHVlID09PSAndHJ1ZScgfHwgdmFsdWUgPT09ICdmYWxzZScpKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZSA9PT0gJ3RydWUnO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfSxcbiAgZ2V0VmZqc0ZpZWxkc01vZGVscyhmaWVsZHMpIHtcbiAgICByZXR1cm4gZmllbGRzLnJlZHVjZShcbiAgICAgIChtb2RlbHMsIHsgY2hpbGRyZW4gPSBbXSwgbW9kZWwgfSkgPT4gW1xuICAgICAgICAuLi5tb2RlbHMsXG4gICAgICAgIC4uLihtb2RlbCAmJiBtb2RlbHMuaW5kZXhPZihtb2RlbCkgPT09IC0xID8gW21vZGVsXSA6IFtdKSxcbiAgICAgICAgLi4udGhpcy5nZXRWZmpzRmllbGRzTW9kZWxzKGNoaWxkcmVuKSxcbiAgICAgIF0sXG4gICAgICBbXSxcbiAgICApO1xuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgdmZqc0hlbHBlcnM7XG4iLCJjb25zdCB2ZmpzTGlmZWN5Y2xlID0ge1xuICB2ZmpzRGVzdHJveSgpIHtcbiAgICB0aGlzLnZmanNFdmVudHMuZm9yRWFjaChldmVudCA9PiB0aGlzLnJlbW92ZVZmanNMaXN0ZW5lcihldmVudCkpO1xuICB9LFxuICB2ZmpzSW5pdGlhbGl6ZSgpIHtcbiAgICAvLyBTZXQgdGhlIEpTT04gc2NoZW1hXG4gICAgdGhpcy5zZXRWZmpzU2NoZW1hKHRoaXMuc2NoZW1hKTtcblxuICAgIC8vIFNldCB1cCBvcHRpb25zXG4gICAgdGhpcy52ZmpzT3B0aW9ucyA9IHtcbiAgICAgIC4uLnRoaXMudmZqc09wdGlvbnMsXG4gICAgICAuLi50aGlzLm9wdGlvbnMsXG4gICAgfTtcblxuICAgIC8vIFNldCB1cCB0aGUgbG9jYWwgY29tcG9uZW50c1xuICAgIHRoaXMudmZqc0NvbXBvbmVudHMgPSB0aGlzLmNvbXBvbmVudHM7XG5cbiAgICAvLyBTZXQgdXAgdGhlIHBsdWdpbidzIGludGVybmFsIGJ1c1xuICAgIHRoaXMudmZqc0J1c0luaXRpYWxpemUoKTtcblxuICAgIC8vIFJlZ2lzdGVyIGV2ZW50cyBpbiB2ZmpzRXZlbnRzIHRvIHZmanNCdXNFdmVudEhhbmRsZXJcbiAgICB0aGlzLmFkZFZmanNMaXN0ZW5lcnModGhpcy52ZmpzRXZlbnRzLCB0aGlzLnZmanNCdXNFdmVudEhhbmRsZXIpO1xuXG4gICAgLy8gU2V0IHRoZSBtb2RlbCBmcm9tIHByb3BzXG4gICAgdGhpcy5zZXRWZmpzTW9kZWwodGhpcy5tb2RlbCwgdHJ1ZSk7XG5cbiAgICAvLyBTZXQgdXAgdmFsaWRhdGlvblxuICAgIHRoaXMudmZqc1ZhbGlkYXRpb25Jbml0aWFsaXplKCk7XG5cbiAgICAvLyBTZXQgdXAgdWkgc2NoZW1hXG4gICAgdGhpcy5zZXRWZmpzVWlTY2hlbWEodGhpcy51aVNjaGVtYSk7XG5cbiAgICAvLyBDaGVjayBhbmQgc2V0IGFjdGl2ZSBmaWVsZHMgKHZpc2libGUpXG4gICAgdGhpcy5zZXRWZmpzVWlGaWVsZHNBY3RpdmUoKTtcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHZmanNMaWZlY3ljbGU7XG4iLCJpbXBvcnQgeyBnZXQgfSBmcm9tICdsb2Rhc2gnO1xuXG5jb25zdCB2ZmpzTW9kZWxHZXR0ZXJzID0ge1xuICBnZXRWZmpzRmllbGRNb2RlbChrZXkpIHtcbiAgICBpZiAoa2V5KSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRWZmpzTW9kZWwoa2V5KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy52ZmpzRmllbGRNb2RlbEtleVxuICAgICAgPyB0aGlzLmdldFZmanNNb2RlbCh0aGlzLnZmanNGaWVsZE1vZGVsS2V5KVxuICAgICAgOiBudWxsO1xuICB9LFxuICBnZXRWZmpzTW9kZWwoa2V5KSB7XG4gICAgaWYgKCFrZXkgfHwga2V5ID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gdGhpcy52ZmpzTW9kZWw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGdldCh0aGlzLnZmanNNb2RlbCwga2V5KTtcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHZmanNNb2RlbEdldHRlcnM7XG4iLCJpbXBvcnQgZ2V0dGVycyBmcm9tICcuL2dldHRlcnMnO1xuaW1wb3J0IHNldHRlcnMgZnJvbSAnLi9zZXR0ZXJzJztcblxuY29uc3QgdmZqc01vZGVsID0ge1xuICAuLi5nZXR0ZXJzLFxuICAuLi5zZXR0ZXJzLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgdmZqc01vZGVsO1xuIiwiaW1wb3J0IHsgY2xvbmVEZWVwLCBpc0VxdWFsIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7XG4gIFZGSlNfRVZFTlRfRklFTERfTU9ERUxfVVBEQVRFLFxuICBWRkpTX0VWRU5UX01PREVMX1VQREFURUQsXG59IGZyb20gJy4uLy4uLy4uL2NvbnN0YW50cyc7XG5cbmNvbnN0IHZmanNNb2RlbFNldHRlcnMgPSB7XG4gIHNldFZmanNGaWVsZE1vZGVsKHZhbHVlLCBrZXkpIHtcbiAgICB0aGlzLnZmanNCdXMuZW1pdChWRkpTX0VWRU5UX0ZJRUxEX01PREVMX1VQREFURSwge1xuICAgICAga2V5OiBrZXkgfHwgdGhpcy52ZmpzRmllbGRNb2RlbEtleSxcbiAgICAgIHZhbHVlLFxuICAgIH0pO1xuICB9LFxuICBzZXRWZmpzTW9kZWwobW9kZWwsIHNpbGVudCA9IGZhbHNlKSB7XG4gICAgaWYgKCFpc0VxdWFsKG1vZGVsLCB0aGlzLnZmanNNb2RlbCkpIHtcbiAgICAgIHRoaXMudmZqc01vZGVsID0gY2xvbmVEZWVwKG1vZGVsKTtcblxuICAgICAgaWYgKCFzaWxlbnQpIHtcbiAgICAgICAgdGhpcy52ZmpzQnVzLmVtaXQoVkZKU19FVkVOVF9NT0RFTF9VUERBVEVELCB0aGlzLmdldFZmanNNb2RlbCgpKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCB2ZmpzTW9kZWxTZXR0ZXJzO1xuIiwiaW1wb3J0IHsgZ2V0IH0gZnJvbSAnbG9kYXNoJztcblxuY29uc3QgdmZqc1NjaGVtYUdldHRlcnMgPSB7XG4gIGdldFZmanNGaWVsZFNjaGVtYShrZXkpIHtcbiAgICBpZiAoa2V5KSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRWZmpzU2NoZW1hKGtleSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMudmZqc0ZpZWxkTW9kZWxLZXlcbiAgICAgID8gdGhpcy5nZXRWZmpzU2NoZW1hKHRoaXMudmZqc0ZpZWxkTW9kZWxLZXkpXG4gICAgICA6IG51bGw7XG4gIH0sXG4gIGdldFZmanNTY2hlbWEoa2V5KSB7XG4gICAgaWYgKGtleSkge1xuICAgICAgcmV0dXJuIGdldCh0aGlzLnZmanNTY2hlbWEucHJvcGVydGllcywga2V5KSB8fCB0aGlzLmdldFZmanNTY2hlbWFGYWxsYmFjayhrZXkpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnZmanNTY2hlbWE7XG4gIH0sXG4gIGdldFZmanNTY2hlbWFQYXRoKHBhdGgsIGtleSkge1xuICAgIGNvbnN0IHZmanNTY2hlbWEgPSB0aGlzLmdldFZmanNTY2hlbWEoKTtcblxuICAgIGlmICghcGF0aCkge1xuICAgICAgaWYgKHZmanNTY2hlbWEuaXRlbXMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VmZqc1NjaGVtYVBhdGgoJ2l0ZW1zJyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBgcHJvcGVydGllcy4ke2tleX1gO1xuICAgIH1cblxuICAgIGNvbnN0IHNjaGVtYSA9IGdldCh2ZmpzU2NoZW1hLCBwYXRoKTtcbiAgICBpZiAoc2NoZW1hKSB7XG4gICAgICBpZiAoc2NoZW1hLml0ZW1zIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgLy8gRklYTUU6IFRoZSBzYW1lIHNjaGVtYSBpcyB1c2VkIHJlZ2FyZGxlc3Mgb2YgaXRlbSdzIGluZGV4IGluIHRoZSBhcnJheVxuICAgICAgICAvLyBUaGlzIGxpbWl0YXRpb24gaXMgZHVlIHRvIHRoYXQgc2NoZW1hIHByb3AgbXVzdCBiZSBhbiBvYmplY3QgYW5kIGNhbiBub3QgYmUgYW4gYXJyYXlcblxuICAgICAgICBjb25zdCBhcnJheVBhdGggPSB0aGlzLmdldFZmanNTY2hlbWFQYXRoKGAke3BhdGh9Lml0ZW1zYCk7XG4gICAgICAgIHJldHVybiB0aGlzLmdldFZmanNTY2hlbWFQYXRoKGAke2FycmF5UGF0aH0uMGApO1xuICAgICAgfSBlbHNlIGlmIChzY2hlbWEucHJvcGVydGllcyBpbnN0YW5jZW9mIE9iamVjdCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRWZmpzU2NoZW1hUGF0aChgJHtwYXRofS5wcm9wZXJ0aWVzYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFrZXkpIHtcbiAgICAgIHJldHVybiBwYXRoO1xuICAgIH1cblxuICAgIHJldHVybiBgJHtwYXRofS4ke2tleX1gO1xuICB9LFxuICBnZXRWZmpzU2NoZW1hRmFsbGJhY2soa2V5KSB7XG4gICAgY29uc3Qga2V5cyA9IFN0cmluZyhrZXkpLnNwbGl0KCcuJyk7XG4gICAgY29uc3Qgc2NoZW1hID0ga2V5cy5yZWR1Y2UodGhpcy5nZXRWZmpzU2NoZW1hUGF0aCwgJycpO1xuICAgIHJldHVybiBnZXQodGhpcy5nZXRWZmpzU2NoZW1hKCksIHNjaGVtYSk7XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCB2ZmpzU2NoZW1hR2V0dGVycztcbiIsImltcG9ydCBnZXR0ZXJzIGZyb20gJy4vZ2V0dGVycyc7XG5pbXBvcnQgc2V0dGVycyBmcm9tICcuL3NldHRlcnMnO1xuXG5jb25zdCB2ZmpzU2NoZW1hID0ge1xuICAuLi5nZXR0ZXJzLFxuICAuLi5zZXR0ZXJzLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgdmZqc1NjaGVtYTtcbiIsImltcG9ydCB7IGNsb25lRGVlcCwgaXNFcXVhbCB9IGZyb20gJ2xvZGFzaCc7XG5cbmNvbnN0IHZmanNTY2hlbWFTZXR0ZXJzID0ge1xuICBzZXRWZmpzU2NoZW1hKHZhbHVlKSB7XG4gICAgaWYgKCFpc0VxdWFsKHZhbHVlLCB0aGlzLnZmanNTY2hlbWEpKSB7XG4gICAgICB0aGlzLnZmanNTY2hlbWEgPSBjbG9uZURlZXAodmFsdWUpO1xuICAgIH1cbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHZmanNTY2hlbWFTZXR0ZXJzO1xuIiwiaW1wb3J0IHsgZ2V0IH0gZnJvbSAnbG9kYXNoJztcblxuY29uc3QgdmZqc1N0YXRlR2V0dGVycyA9IHtcbiAgZ2V0VmZqc1N0YXRlKGtleSkge1xuICAgIGlmIChrZXkpIHtcbiAgICAgIHJldHVybiBnZXQodGhpcy52ZmpzU3RhdGUsIGtleSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMudmZqc1N0YXRlO1xuICB9LFxuICBnZXRWZmpzRmllbGRTdGF0ZShrZXkpIHtcbiAgICBpZiAoa2V5KSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRWZmpzU3RhdGUoa2V5KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy52ZmpzRmllbGRNb2RlbEtleVxuICAgICAgPyB0aGlzLmdldFZmanNTdGF0ZSh0aGlzLnZmanNGaWVsZE1vZGVsS2V5KVxuICAgICAgOiBudWxsO1xuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgdmZqc1N0YXRlR2V0dGVycztcbiIsImltcG9ydCBnZXR0ZXJzIGZyb20gJy4vZ2V0dGVycyc7XG5pbXBvcnQgc2V0dGVycyBmcm9tICcuL3NldHRlcnMnO1xuXG5jb25zdCB2ZmpzU3RhdGUgPSB7XG4gIC4uLmdldHRlcnMsXG4gIC4uLnNldHRlcnMsXG59O1xuXG5leHBvcnQgZGVmYXVsdCB2ZmpzU3RhdGU7XG4iLCJpbXBvcnQgeyBpc0VxdWFsIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7XG4gIFZGSlNfRVZFTlRfRklFTERfU1RBVEVfVVBEQVRFLFxuICBWRkpTX0VWRU5UX1NUQVRFX1VQREFURUQsXG59IGZyb20gJy4uLy4uLy4uL2NvbnN0YW50cyc7XG5cbmNvbnN0IHZmanNTdGF0ZVNldHRlcnMgPSB7XG4gIHNldFZmanNGaWVsZFN0YXRlKHZhbHVlLCBrZXkpIHtcbiAgICB0aGlzLnZmanNCdXMuZW1pdChWRkpTX0VWRU5UX0ZJRUxEX1NUQVRFX1VQREFURSwge1xuICAgICAga2V5OiBrZXkgfHwgdGhpcy52ZmpzRmllbGRNb2RlbEtleSxcbiAgICAgIHZhbHVlLFxuICAgIH0pO1xuICB9LFxuICBzZXRWZmpzU3RhdGUoc3RhdGUpIHtcbiAgICBpZiAoIWlzRXF1YWwoc3RhdGUsIHRoaXMudmZqc1N0YXRlKSkge1xuICAgICAgdGhpcy52ZmpzU3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmdldFZmanNTdGF0ZSgpLCBzdGF0ZSk7XG4gICAgICB0aGlzLnZmanNCdXMuZW1pdChWRkpTX0VWRU5UX1NUQVRFX1VQREFURUQsICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRWZmpzRmllbGRzKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCB2ZmpzU3RhdGVTZXR0ZXJzO1xuIiwiaW1wb3J0IHsgZ2V0IH0gZnJvbSAnbG9kYXNoJztcblxuY29uc3QgdmZqc1VpR2V0dGVycyA9IHtcbiAgZ2V0VmZqc0ZpZWxkcyhmaWVsZHMgPSBbXSkge1xuICAgIHJldHVybiBmaWVsZHMucmVkdWNlKFxuICAgICAgKHZmanNGaWVsZHMsIGZpZWxkKSA9PiBbLi4udmZqc0ZpZWxkcywgdGhpcy52ZmpzSGVscGVyQ3JlYXRlRmllbGQoZmllbGQpXSxcbiAgICAgIFtdLFxuICAgICk7XG4gIH0sXG4gIGdldFZmanNVaUZpZWxkVmlzaWJsZShmaWVsZCkge1xuICAgIGlmIChmaWVsZC5lcnJvckhhbmRsZXIpIHtcbiAgICAgIGlmICghdGhpcy52ZmpzT3B0aW9ucy5zaG93VmFsaWRhdGlvbkVycm9ycykge1xuICAgICAgICBjb25zdCBzdGF0ZSA9IHRoaXMuZ2V0VmZqc0ZpZWxkU3RhdGUoZmllbGQubW9kZWwpO1xuICAgICAgICBpZiAoIXN0YXRlIHx8IChzdGF0ZSAmJiAoIXN0YXRlLnZmanNGaWVsZEJsdXIgfHwgIXN0YXRlLnZmanNGaWVsZERpcnR5KSkpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZmanNGaWVsZE1vZGVsKGZpZWxkLm1vZGVsKTtcbiAgICAgIGNvbnN0IHNjaGVtYSA9IHRoaXMuZ2V0VmZqc0ZpZWxkU2NoZW1hKGZpZWxkLm1vZGVsKTtcblxuICAgICAgdGhpcy5hanYudmFsaWRhdGUoc2NoZW1hLCB2YWx1ZSk7XG4gICAgICBjb25zdCBvbGRFcnJvcnMgPSB0aGlzLmFqdi5lcnJvcnMgPyB0aGlzLmFqdi5lcnJvcnMgOiBbXTtcblxuICAgICAgLy8gT25seSBjb250aW51ZSBpZiB0aGUgZXJyb3JIYW5kbGVycyBmaWVsZCBtb2RlbCBoYXMgZXJyb3JzXG4gICAgICBpZiAob2xkRXJyb3JzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSWYgZmllbGQgZG9lcyBub3QgaGF2ZSBhbnkgZGlzcGxheU9wdGlvbnMgaXQgc2hvdWxkIGJlIHZpc2libGVcbiAgICBpZiAoIWZpZWxkLmRpc3BsYXlPcHRpb25zKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBHZXQgbW9kZWwgYW5kIHNjaGVtYVxuICAgIGNvbnN0IHsgbW9kZWwsIHNjaGVtYSA9IHt9IH0gPSBmaWVsZC5kaXNwbGF5T3B0aW9ucztcblxuICAgIC8vIEdldCB0aGUgZmllbGQncyBtb2RlbCB2YWx1ZVxuICAgIC8vIEl0IHdpbGwgZmFsbCBiYWNrIHRvIHRoZSBmdWxsIG1vZGVsIGlmIG1vZGVsIGlzIHVuZGVmaW5lZFxuICAgIGNvbnN0IHZhbHVlID0gdHlwZW9mIG1vZGVsID09PSAndW5kZWZpbmVkJyA/IHRoaXMuZ2V0VmZqc01vZGVsKCkgOiB0aGlzLmdldFZmanNGaWVsZE1vZGVsKG1vZGVsKTtcblxuICAgIC8vIFZhbGlkYXRlIGFuZCBjaGVjayBpZiB3ZSBnb3QgYW55IGVycm9yc1xuICAgIC8vIGNvbnN0IGVycm9ycyA9IG1vZGVsXG4gICAgLy8gICA/IHRoaXMuZ2V0VmZqc1ZhbGlkYXRpb25FcnJvcnModmFsdWUsIHNjaGVtYSlcbiAgICAvLyAgIDogdGhpcy5nZXRWZmpzTW9kZWxWYWxpZGF0aW9uRXJyb3JzKG1vZGVsLCB2YWx1ZSwgc2NoZW1hKTtcblxuICAgIC8vIFRPRE86IFRoZXJlJ3Mgc29tZXRoaW5nIHdyb25nIHdpdGggdGhlIGV2YWx1YXRpb24gZG9uZSBpbiBnZXRWZmpzVmFsaWRhdGlvbkVycm9yc1xuICAgIC8vIFRlbXBvcmFyaWx5IHJldmVydCBiYWNrIHRvIG9sZCBiZWhhdmlvdXIgd2l0aCB2YWxpZGF0aW5nIGluIHRoaXMgZnVuY3Rpb25cbiAgICB0aGlzLmFqdi52YWxpZGF0ZShzY2hlbWEsIHZhbHVlKTtcbiAgICBjb25zdCBvbGRFcnJvcnMgPSB0aGlzLmFqdi5lcnJvcnMgPyB0aGlzLmFqdi5lcnJvcnMgOiBbXTtcblxuICAgIHJldHVybiBvbGRFcnJvcnMubGVuZ3RoID09PSAwO1xuICB9LFxuICBnZXRWZmpzVWlGaWVsZEFycmF5Q2hpbGRyZW5BY3RpdmUobW9kZWwsIGNoaWxkcmVuKSB7XG4gICAgY29uc3QgdmZqc0ZpZWxkTW9kZWwgPSB0aGlzLmdldFZmanNGaWVsZE1vZGVsKG1vZGVsKSB8fCBbXTtcblxuICAgIHJldHVybiB2ZmpzRmllbGRNb2RlbFxuICAgICAgLm1hcCgodiwgaSkgPT4gdGhpcy52ZmpzSGVscGVyQ2hpbGRBcnJheVJlZHVjZXJNYXBwZXIobW9kZWwsIGNoaWxkcmVuLCBpKSlcbiAgICAgIC5tYXAodGhpcy5nZXRWZmpzVWlGaWVsZHNBY3RpdmUpO1xuICB9LFxuICBnZXRWZmpzVWlGaWVsZCh7IGNoaWxkcmVuID0gW10sIG1vZGVsLCAuLi5maWVsZCB9KSB7XG4gICAgaWYgKHRoaXMuZ2V0VmZqc1VpRmllbGRWaXNpYmxlKHsgLi4uZmllbGQsIG1vZGVsIH0pKSB7XG4gICAgICBjb25zdCBpc0FycmF5ID0gdGhpcy52ZmpzSGVscGVyRmllbGRJc0FycmF5KG1vZGVsKTtcbiAgICAgIGNvbnN0IHJlcXVpcmVkID0gdGhpcy52ZmpzSGVscGVyRmllbGRJc1JlcXVpcmVkKG1vZGVsKTtcblxuICAgICAgaWYgKGlzQXJyYXkpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi5maWVsZCxcbiAgICAgICAgICBtb2RlbCxcbiAgICAgICAgICByZXF1aXJlZCxcbiAgICAgICAgICBjaGlsZHJlbjogdGhpcy5nZXRWZmpzVWlGaWVsZEFycmF5Q2hpbGRyZW5BY3RpdmUobW9kZWwsIGNoaWxkcmVuKSxcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uZmllbGQsXG4gICAgICAgIG1vZGVsLFxuICAgICAgICByZXF1aXJlZCxcbiAgICAgICAgY2hpbGRyZW46IHRoaXMuZ2V0VmZqc1VpRmllbGRzQWN0aXZlKGNoaWxkcmVuKSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9LFxuICBnZXRWZmpzVWlGaWVsZHNBY3RpdmUoZmllbGRzKSB7XG4gICAgcmV0dXJuIGZpZWxkcy5yZWR1Y2UoKG5ld0ZpZWxkcywgZmllbGQsIGluZGV4KSA9PiB7XG4gICAgICBpZiAoZmllbGQpIHtcbiAgICAgICAgY29uc3QgbmV3RmllbGQgPSB0aGlzLmdldFZmanNVaUZpZWxkKGZpZWxkKTtcbiAgICAgICAgaWYgKG5ld0ZpZWxkKSB7XG4gICAgICAgICAgbmV3RmllbGRzLnB1c2gobmV3RmllbGQpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXdGaWVsZHM7XG4gICAgfSwgW10pO1xuICB9LFxuICBnZXRWZmpzRmllbGRVaVNjaGVtYShrZXkpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRWZmpzVWlTY2hlbWEoa2V5KTtcbiAgfSxcbiAgZ2V0VmZqc1VpU2NoZW1hKGtleSkge1xuICAgIGlmIChrZXkpIHtcbiAgICAgIHJldHVybiBnZXQodGhpcy52ZmpzVWlTY2hlbWEsIGtleSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMudmZqc1VpU2NoZW1hO1xuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgdmZqc1VpR2V0dGVycztcbiIsImltcG9ydCBnZXR0ZXJzIGZyb20gJy4vZ2V0dGVycyc7XG5pbXBvcnQgc2V0dGVycyBmcm9tICcuL3NldHRlcnMnO1xuXG5jb25zdCB2ZmpzVWkgPSB7XG4gIC4uLmdldHRlcnMsXG4gIC4uLnNldHRlcnMsXG59O1xuXG5leHBvcnQgZGVmYXVsdCB2ZmpzVWk7XG4iLCJpbXBvcnQgeyBjbG9uZURlZXAsIGlzRXF1YWwgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgVkZKU19FVkVOVF9TVEFURV9VUERBVEVEIH0gZnJvbSAnLi4vLi4vLi4vY29uc3RhbnRzJztcblxuY29uc3QgdmZqc1VpU2V0dGVycyA9IHtcbiAgc2V0VmZqc1VpU2NoZW1hKHVpU2NoZW1hID0gW10pIHtcbiAgICBjb25zdCBuZXdWZmpzVWlTY2hlbWEgPSB1aVNjaGVtYS5yZWR1Y2UoXG4gICAgICAoZmllbGRzLCBmaWVsZCwgaW5kZXgpID0+IFsuLi5maWVsZHMsIHRoaXMudmZqc0hlbHBlckdlbmVyYXRlRmllbGQoZmllbGQsIGluZGV4KV0sXG4gICAgICBbXSxcbiAgICApO1xuXG4gICAgaWYgKCFpc0VxdWFsKG5ld1ZmanNVaVNjaGVtYSwgdGhpcy52ZmpzVWlTY2hlbWEpKSB7XG4gICAgICB0aGlzLnZmanNVaVNjaGVtYSA9IGNsb25lRGVlcChuZXdWZmpzVWlTY2hlbWEpO1xuICAgICAgdGhpcy5zZXRWZmpzVWlGaWVsZHNBY3RpdmUoKTtcbiAgICB9XG4gIH0sXG4gIHNldFZmanNVaUZpZWxkc0FjdGl2ZSgpIHtcbiAgICB0aGlzLnZmanNGaWVsZHNBY3RpdmUgPSB0aGlzLmdldFZmanNVaUZpZWxkc0FjdGl2ZSh0aGlzLnZmanNVaVNjaGVtYSk7XG4gICAgdGhpcy52ZmpzRmllbGRzQWN0aXZlTW9kZWxzID0gdGhpcy5nZXRWZmpzRmllbGRzTW9kZWxzKHRoaXMudmZqc0ZpZWxkc0FjdGl2ZSk7XG5cbiAgICB0aGlzLnZmanNCdXMuZW1pdChWRkpTX0VWRU5UX1NUQVRFX1VQREFURUQsICgpID0+IHtcbiAgICAgIHRoaXMuc2V0VmZqc0ZpZWxkcygpO1xuICAgIH0pO1xuICB9LFxuICBzZXRWZmpzRmllbGRzKCkge1xuICAgIHRoaXMudmZqc0ZpZWxkcyA9IHRoaXMuZ2V0VmZqc0ZpZWxkcyh0aGlzLnZmanNGaWVsZHNBY3RpdmUpO1xuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgdmZqc1VpU2V0dGVycztcbiIsImltcG9ydCB7IHNldCB9IGZyb20gJ2xvZGFzaCc7XG5cbmNvbnN0IHZmanNWYWxpZGF0aW9uR2V0dGVycyA9IHtcbiAgLyoqIGdldFZmanNQcm9wZXJ0aWVzUmVxdWlyZWRcbiAgICBAZnVuY3Rpb25cbiAgICBAZGVzY3JpcHRpb24gR2V0IGFsbCBlcnJvcnMgb2YgdHlwZSByZXF1aXJlZFxuICAgIEBwYXJhbSBbZXJyb3JzXSBhcnJheVxuICAgIEByZXR1cm5cbiAgICAgIEFuIGFycmF5IG9mIHRoZSBwcm9wZXJ0aWVzIGluIHRoZSBlcnJvcnMgYXJyYXlcbiAgICAgIHdlcmUgdGhlIGVycm9yIHByb3BlcnR5ICdrZXl3b3JkJyB3YXMgJ3JlcXVpcmVkJy5cbiAgKi9cbiAgZ2V0VmZqc1Byb3BlcnRpZXNSZXF1aXJlZChlcnJvcnMpIHtcbiAgICBpZiAoIWVycm9ycykge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIHJldHVybiBlcnJvcnMucmVkdWNlKChyZXF1aXJlZCwgZXJyb3IpID0+IHtcbiAgICAgIGlmIChlcnJvci5rZXl3b3JkID09PSAncmVxdWlyZWQnKSB7XG4gICAgICAgIGlmIChlcnJvci5wYXJhbXMgJiYgZXJyb3IucGFyYW1zLm1pc3NpbmdQcm9wZXJ0eSkge1xuICAgICAgICAgIGNvbnN0IGtleSA9IGVycm9yLnBhcmFtcy5taXNzaW5nUHJvcGVydHk7XG4gICAgICAgICAgY29uc3QgcGFyZW50ID0gU3RyaW5nKGVycm9yLmRhdGFQYXRoKS5zdWJzdHIoMSk7XG4gICAgICAgICAgY29uc3QgcHJvcGVydHlQYXRoID0gcGFyZW50ID8gYCR7cGFyZW50fS4ke2tleX1gIDoga2V5O1xuXG4gICAgICAgICAgaWYgKHJlcXVpcmVkLmluZGV4T2YocHJvcGVydHlQYXRoKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIHJlcXVpcmVkLnB1c2gocHJvcGVydHlQYXRoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlcXVpcmVkO1xuICAgIH0sIFtdKTtcbiAgfSxcbiAgZ2V0VmZqc0NoaWxkUHJvcGVydGllc1JlcXVpcmVkKHBhcmVudEZpZWxkcyA9IFtdLCBleGNsdWRlUHJvcGVydGllcyA9IFtdKSB7XG4gICAgY29uc3QgdW5pcXVlUHJvcGVydGllcyA9IHBhcmVudEZpZWxkcy5maWx0ZXIocHJvcGVydHkgPT4gZXhjbHVkZVByb3BlcnRpZXMuaW5kZXhPZihwcm9wZXJ0eSkgPT09IC0xKTtcblxuICAgIHJldHVybiB1bmlxdWVQcm9wZXJ0aWVzLnJlZHVjZSgocHJvcGVydGllcywgcHJvcGVydHkpID0+IHtcbiAgICAgIC8vIEFkZCBjdXJyZW50IHByb3BlcnR5IHRvIGFycmF5XG4gICAgICBwcm9wZXJ0aWVzLnB1c2gocHJvcGVydHkpO1xuXG4gICAgICAvLyBWYWxpZGF0ZSBzY2hlbWEgd2l0aCB0aGlzIHByb3BlcnR5IGJlaW5nIGFuIGVtcHR5IG9iamVjdFxuICAgICAgY29uc3QgdmFsdWUgPSB7fTtcbiAgICAgIHNldCh2YWx1ZSwgcHJvcGVydHksIHt9KTtcbiAgICAgIHRoaXMuYWp2LnZhbGlkYXRlKHRoaXMuZ2V0VmZqc1NjaGVtYSgpLCB2YWx1ZSk7XG4gICAgICBjb25zdCBwcm9wZXJ0aWVzUmVxdWlyZWQgPSB0aGlzLmdldFZmanNQcm9wZXJ0aWVzUmVxdWlyZWQodGhpcy5hanYuZXJyb3JzKTtcblxuICAgICAgLy8gSWYgdGhlcmUgd2VyZSByZXF1aXJlZCBwcm9wZXJ0aWVzIGJlbG93IHRoaXMgcHJvcGVydHkgKGkuZS4gdGhpcyBwcm9wZXJ0eSBpcyBhbiBvYmplY3QpXG4gICAgICBpZiAocHJvcGVydGllc1JlcXVpcmVkLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3QgZXhjbHVkZVByb3BlcnRpZXNDaGlsZHJlbiA9IFsuLi5leGNsdWRlUHJvcGVydGllcywgLi4udW5pcXVlUHJvcGVydGllc107XG5cbiAgICAgICAgY29uc3QgY2hpbGRGaWVsZHNSZXF1aXJlZCA9IHRoaXMuZ2V0VmZqc0NoaWxkUHJvcGVydGllc1JlcXVpcmVkKFxuICAgICAgICAgIHByb3BlcnRpZXNSZXF1aXJlZCxcbiAgICAgICAgICBleGNsdWRlUHJvcGVydGllc0NoaWxkcmVuLFxuICAgICAgICApO1xuXG4gICAgICAgIHByb3BlcnRpZXMucHVzaCguLi5jaGlsZEZpZWxkc1JlcXVpcmVkKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByb3BlcnRpZXM7XG4gICAgfSwgW10pO1xuICB9LFxuICBnZXRWZmpzRmllbGRNb2RlbFZhbGlkKGtleSwgdmFsdWUpIHtcbiAgICBjb25zdCBlcnJvcnMgPSB0aGlzLmdldFZmanNGaWVsZE1vZGVsVmFsaWRhdGlvbkVycm9ycyhrZXksIHZhbHVlKTtcbiAgICByZXR1cm4gZXJyb3JzLmxlbmd0aCA9PT0gMDtcbiAgfSxcbiAgZ2V0VmZqc0ZpZWxkTW9kZWxWYWxpZGF0aW9uRXJyb3JzKGtleSwgdmFsdWUpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRWZmpzVmFsaWRhdGlvbkVycm9ycyh2YWx1ZSwgdGhpcy5nZXRWZmpzU2NoZW1hKGtleSkpO1xuICB9LFxuICBnZXRWZmpzTW9kZWxWYWxpZGF0aW9uRXJyb3JzTG9jYWxpemVkKCkge1xuICAgIGNvbnN0IHsgYWp2ID0ge30gfSA9IHRoaXMudmZqc09wdGlvbnM7XG4gICAgY29uc3QgeyBsb2NhbGUgfSA9IGFqdjtcblxuICAgIGlmICh0eXBlb2YgbG9jYWxlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBsb2NhbGUodGhpcy5hanYuZXJyb3JzKTtcbiAgICB9XG4gIH0sXG4gIGdldFZmanNWYWxpZCgpIHtcbiAgICBjb25zdCBlcnJvcnMgPSB0aGlzLmdldFZmanNWYWxpZGF0aW9uRXJyb3JzKCk7XG4gICAgcmV0dXJuIGVycm9ycy5sZW5ndGggPT09IDA7XG4gIH0sXG4gIGdldFZmanNWYWxpZGF0aW9uRXJyb3JzKG1vZGVsLCBzY2hlbWEpIHtcbiAgICBjb25zdCBhanZTY2hlbWEgPSBzY2hlbWEgfHwgdGhpcy5nZXRWZmpzU2NoZW1hKCk7XG4gICAgY29uc3QgYWp2TW9kZWwgPSBtb2RlbCB8fCB0aGlzLmdldFZmanNNb2RlbCgpO1xuXG4gICAgY29uc3QgdmFsaWQgPSB0aGlzLmFqdi52YWxpZGF0ZShhanZTY2hlbWEsIGFqdk1vZGVsKTtcbiAgICB0aGlzLmdldFZmanNNb2RlbFZhbGlkYXRpb25FcnJvcnNMb2NhbGl6ZWQoKTtcbiAgICByZXR1cm4gIXZhbGlkID8gdGhpcy5hanYuZXJyb3JzIDogW107XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCB2ZmpzVmFsaWRhdGlvbkdldHRlcnM7XG4iLCJpbXBvcnQgQWp2IGZyb20gJ2Fqdic7XG5pbXBvcnQgZ2V0dGVycyBmcm9tICcuL2dldHRlcnMnO1xuaW1wb3J0IHNldHRlcnMgZnJvbSAnLi9zZXR0ZXJzJztcbmltcG9ydCB7IFZGSlNfRVZFTlRfTU9ERUxfVkFMSURBVEUgfSBmcm9tICcuLi8uLi8uLi9jb25zdGFudHMnO1xuXG5jb25zdCB2ZmpzVmFsaWRhdGlvbiA9IHtcbiAgdmZqc1ZhbGlkYXRpb25Jbml0aWFsaXplKCkge1xuICAgIGNvbnN0IHsgYWp2ID0ge30gfSA9IHRoaXMudmZqc09wdGlvbnM7XG4gICAgY29uc3QgeyBvcHRpb25zID0ge30sIGtleXdvcmRzID0ge30gfSA9IGFqdjtcblxuICAgIC8vIFNldCB1cCBBanZcbiAgICB0aGlzLmFqdiA9IG5ldyBBanYoe1xuICAgICAgLi4ub3B0aW9ucyxcbiAgICAgIC8vIFRoZSBgYWxsRXJyb3JzYCBvcHRpb24gaXMgcmVxdWlyZWQgZm9yIHZhbGlkYXRpb24gdG8gd29ya1xuICAgICAgYWxsRXJyb3JzOiB0cnVlLFxuICAgIH0pO1xuXG4gICAgLy8gQWxsb3cgQWp2IHRvIGJlIGV4dGVuZGVkIGJ5IG90aGVyIGZ1bmN0aW9uc1xuICAgIC8vIHN1Y2ggYXMgYWp2LW1lcmdlLXBhdGNoLCBhanYtYXN5bmMgZXRjLlxuICAgIE9iamVjdC5rZXlzKGtleXdvcmRzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGlmICh0eXBlb2Yga2V5d29yZHNba2V5XSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBrZXl3b3Jkc1trZXldKHRoaXMuYWp2KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIEFkZCBjdXN0b20ga2V5d29yZHNcbiAgICBPYmplY3Qua2V5cyhrZXl3b3JkcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICB0aGlzLmFqdi5hZGRLZXl3b3JkKGtleSwga2V5d29yZHNba2V5XSk7XG4gICAgfSk7XG5cbiAgICAvLyBBZGQgYWRkaXRpb25hbCBzY2hlbWFzXG4gICAgT2JqZWN0LmtleXModGhpcy5zY2hlbWFzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIHRoaXMuYWp2LmFkZFNjaGVtYSh0aGlzLnNjaGVtYXNba2V5XSwga2V5KTtcbiAgICB9KTtcblxuICAgIC8vIFRPRE86IE1vdmUgdGhpcyB0byBhIG1ldGhvZCBzbyB3ZSBjYW4gY2FsbCBpdCB3aGVuIHRoZSBzY2hlbWEvdWktc2NoZW1hL21vZGVsIGlzIHVwZGF0ZWRcblxuICAgIC8vIFRoaXMgaXMgc29tZXdoYXQgb2YgYSBoYWNrLi4uXG4gICAgLy9cbiAgICAvLyBUbyBmaW5kIG91dCBpZiBhIHByb3BlcnR5IGlzIHJlcXVpcmVkXG4gICAgLy8gd2UgZ2V0IHRoZSBzY2hlbWEgYW5kIHVzZSBhbiBlbXB0eSBvYmplY3RcbiAgICAvLyBhcyB0aGUgZGF0YSwgd2l0aCBhbGxFcnJvcnMgb3B0aW9uIGluIEFqdlxuICAgIC8vIHdlIGNhbiBnZXQgYWxsIHRoZSByZXF1aXJlZCBwcm9wZXJ0aWVzXG4gICAgLy8gYW5kIGNoZWNrIGlmIHRoZSBtb2RlbCBrZXkgaXMgZm91bmQgaW4gdGhlIGVycm9yc1xuICAgIHRoaXMuYWp2LnZhbGlkYXRlKHRoaXMuZ2V0VmZqc1NjaGVtYSgpLCB7fSk7XG5cbiAgICBpZiAodGhpcy5hanYuZXJyb3JzKSB7XG4gICAgICBjb25zdCBwcm9wZXJ0aWVzUmVxdWlyZWQgPSB0aGlzLmdldFZmanNQcm9wZXJ0aWVzUmVxdWlyZWQodGhpcy5hanYuZXJyb3JzKTtcbiAgICAgIHRoaXMudmZqc0ZpZWxkc1JlcXVpcmVkID0gdGhpcy5nZXRWZmpzQ2hpbGRQcm9wZXJ0aWVzUmVxdWlyZWQocHJvcGVydGllc1JlcXVpcmVkKTtcbiAgICB9XG5cbiAgICAvLyBDaGVjayBpZiB2YWxpZGF0aW9uIGlzIGVuYWJsZWQgYW5kIHNldCB0byBydW4gb24gbG9hZFxuICAgIGlmICh0aGlzLnZmanNPcHRpb25zLnZhbGlkYXRlICYmIHRoaXMudmZqc09wdGlvbnMudmFsaWRhdGVPbkxvYWQpIHtcbiAgICAgIHRoaXMudmZqc0J1cy5lbWl0KFZGSlNfRVZFTlRfTU9ERUxfVkFMSURBVEUsIHsgdmZqc01vZGVsOiB0aGlzLmdldFZmanNNb2RlbCgpIH0pO1xuICAgIH1cbiAgfSxcbiAgLi4uZ2V0dGVycyxcbiAgLi4uc2V0dGVycyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHZmanNWYWxpZGF0aW9uO1xuIiwiaW1wb3J0IHtcbiAgVkZKU19FVkVOVF9GSUVMRF9NT0RFTF9WQUxJREFURSxcbiAgVkZKU19FVkVOVF9GSUVMRF9TVEFURV9VUERBVEUsXG4gIFZGSlNfRVZFTlRfTU9ERUxfVkFMSURBVEUsXG4gIFZGSlNfRVZFTlRfVUlfRklFTERTX1VQREFURSxcbn0gZnJvbSAnLi4vLi4vLi4vY29uc3RhbnRzJztcblxuY29uc3QgdmZqc1ZhbGlkYXRpb25TZXR0ZXJzID0ge1xuICBzZXRWZmpzVmFsaWRhdGlvbkVycm9ycygpIHtcbiAgICB0aGlzLnZmanNCdXMuZW1pdChWRkpTX0VWRU5UX01PREVMX1ZBTElEQVRFLCB7XG4gICAgICB2ZmpzTW9kZWw6IHRoaXMuZ2V0VmZqc01vZGVsKCksXG4gICAgICBjYjogKCkgPT4ge1xuICAgICAgICBjb25zdCB2YWxpZGF0ZVJlcXVpcmVkID0ga2V5ID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICB0aGlzLnZmanNCdXMuZW1pdChWRkpTX0VWRU5UX0ZJRUxEX01PREVMX1ZBTElEQVRFLCB7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICB2YWx1ZTogdGhpcy5nZXRWZmpzRmllbGRNb2RlbChrZXkpLFxuICAgICAgICAgICAgY2I6ICh2ZmpzRmllbGRFcnJvcnMpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgZmllbGRTdGF0ZSA9IHRoaXMuZ2V0VmZqc0ZpZWxkU3RhdGUoa2V5KTtcbiAgICAgICAgICAgICAgdGhpcy52ZmpzQnVzLmVtaXQoVkZKU19FVkVOVF9GSUVMRF9TVEFURV9VUERBVEUsIHtcbiAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgICAgICAgIC4uLmZpZWxkU3RhdGUsXG4gICAgICAgICAgICAgICAgICB2ZmpzRmllbGRFcnJvcnMsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBjYjogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3Qgb3BlcmF0aW9ucyA9IHRoaXMudmZqc0ZpZWxkc1JlcXVpcmVkLm1hcCh2YWxpZGF0ZVJlcXVpcmVkKTtcbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKG9wZXJhdGlvbnMpLnRoZW4oKCkgPT4gdGhpcy52ZmpzQnVzLmVtaXQoVkZKU19FVkVOVF9VSV9GSUVMRFNfVVBEQVRFKSk7XG4gICAgICB9LFxuICAgIH0pO1xuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgdmZqc1ZhbGlkYXRpb25TZXR0ZXJzO1xuIiwiY29uc3QgcHJvcHMgPSB7XG4gIGNvbXBvbmVudHM6IHtcbiAgICB0eXBlOiBPYmplY3QsXG4gICAgZGVmYXVsdDogKCkgPT4gKHt9KSxcbiAgfSxcbiAgbW9kZWw6IHtcbiAgICB0eXBlOiBPYmplY3QsXG4gICAgZGVmYXVsdDogKCkgPT4gKHt9KSxcbiAgfSxcbiAgc2NoZW1hOiB7XG4gICAgdHlwZTogT2JqZWN0LFxuICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIGRlZmF1bHQ6ICgpID0+ICh7fSksXG4gIH0sXG4gIHNjaGVtYXM6IHtcbiAgICB0eXBlOiBPYmplY3QsXG4gICAgZGVmYXVsdDogKCkgPT4gKHt9KSxcbiAgfSxcbiAgb3B0aW9uczoge1xuICAgIHR5cGU6IE9iamVjdCxcbiAgICBkZWZhdWx0OiAoKSA9PiAoe30pLFxuICB9LFxuICB0YWc6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgZGVmYXVsdDogJ2RpdicsXG4gIH0sXG4gIHVpU2NoZW1hOiB7XG4gICAgdHlwZTogQXJyYXksXG4gICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgZGVmYXVsdDogKCkgPT4gKHt9KSxcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHByb3BzO1xuIiwiaW1wb3J0IHsgbWVyZ2UgfSBmcm9tICdsb2Rhc2gnO1xuXG5jb25zdCB3YXRjaCA9IHtcbiAgY29tcG9uZW50cyh2YWx1ZSkge1xuICAgIHRoaXMudmZqc0NvbXBvbmVudHMgPSBPYmplY3QuYXNzaWduKHt9LCB2YWx1ZSk7XG4gIH0sXG4gIG1vZGVsKHZhbHVlKSB7XG4gICAgdGhpcy5zZXRWZmpzTW9kZWwodmFsdWUpO1xuICB9LFxuICBzY2hlbWEodmFsdWUpIHtcbiAgICB0aGlzLnNldFZmanNTY2hlbWEodmFsdWUpO1xuICB9LFxuICB1aVNjaGVtYSh2YWx1ZSkge1xuICAgIHRoaXMuc2V0VmZqc1VpU2NoZW1hKHZhbHVlKTtcbiAgfSxcbiAgb3B0aW9ucyh2YWx1ZSkge1xuICAgIHRoaXMudmZqc09wdGlvbnMgPSBtZXJnZSh7fSwgdGhpcy52ZmpzT3B0aW9ucywgdmFsdWUpO1xuXG4gICAgaWYgKHRoaXMudmZqc09wdGlvbnMuc2hvd1ZhbGlkYXRpb25FcnJvcnMpIHtcbiAgICAgIHRoaXMuc2V0VmZqc1ZhbGlkYXRpb25FcnJvcnMoKTtcbiAgICB9XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCB3YXRjaDtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFqdlwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsb2Rhc2hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibWluaWJ1c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9