/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tbox-sizing: border-box;\n\toutline: none;\n\tfont-family: Sen;\n}\n\n:root {\n\t--bg: rgb(34, 35, 39);\n\t--bg-alt: rgb(40, 42, 46);\n\t--bg-alt2: rgb(45, 48, 52);\n\t--bg-alt3: rgb(50, 54, 58);\n\t--text: rgb(240, 240, 240);\n\t--text-alt: rgb(200, 200, 200);\n\t--text-alt2: rgb(160, 160, 160);\n\t--radius: 25px;\n\t--close-shadow: 0 2px 6px rgba(0, 0, 0, 0.075), 0 8px 14px rgba(0, 0, 0, 0.1);\n\t--distant-shadow: 0 2px 6px rgba(0, 0, 0, 0.125), 0 12px 20px rgba(0, 0, 0, 0.175);\n\t--transition: color 0.25s, background-color 0.25s, border-color 0.25s, box-shadow 0.25s, transform 0.2s, opacity 0.25s;\n}\n\nbody {\n\tbackground-color: var(--bg);\n}\n\n.button {\n\tpadding: 10px 18px;\n\tcursor: pointer;\n\tfont-size: 16px;\n\tfont-weight: 700;\n\tcolor: var(--text-alt);\n\tbackground-color: var(--bg-alt2);\n\tbox-shadow: var(--close-shadow);\n\tborder-radius: var(--radius);\n\ttransition: var(--transition);\n}\n.button .material-icons-round {\n\tmargin-inline: -2px 8px;\n\tfont-size: 17px;\n\tvertical-align: sub;\n}\n.button:hover {\n\tcolor: var(--text);\n\tbackground-color: var(--bg-alt3);\n\tbox-shadow: var(--distant-shadow);\n}\n.button:active {\n\ttransform: scale(0.875);\n}\n\n.icon-button {\n\tcursor: pointer;\n\tcolor: var(--text-alt2);\n\tbackground-color: transparent;\n\tborder-radius: var(--radius);\n\ttransition: var(--transition);\n}\n.icon-button:hover {\n\tcolor: var(--text);\n\tbackground-color: var(--bg-alt);\n}\n.icon-button .material-icons-round {\n\tpadding: 8px;\n\tfont-size: 20px;\n\tvertical-align: initial;\n}\n\n#sidebar {\n\theight: 100vh;\n\twidth: 440px;\n\tposition: fixed;\n\ttop: 0;\n\tbackground-color: var(--bg-alt);\n\tbox-shadow: var(--distant-shadow);\n}\n#sidebar > span {\n\tmargin: 30px 45px 15px;\n\tdisplay: block;\n\tfont-size: 32px;\n\tfont-weight: 800;\n\tcolor: var(--text);\n}\n#sidebar > .container {\n\theight: calc(100% - 180px);\n\toverflow-x: hidden;\n\toverflow-y: auto;\n}\n#sidebar #projects {\n\twidth: 440px;\n\tpadding: 5px 35px 10px;\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tjustify-content: space-between;\n\tscrollbar-gutter: stable both-edges;\n}\n#sidebar #add-project {\n\tmargin-bottom: 35px;\n\tposition: fixed;\n\tbottom: 0;\n\tleft: 143.5px;\n}\n\n.project {\n\theight: 165px;\n\twidth: 165px;\n\tmargin: 10px;\n\tcursor: pointer;\n\tuser-select: none;\n}\n.project * {\n\ttransition: var(--transition);\n}\n.project .box {\n\theight: 100%;\n\twidth: 100%;\n\tpadding: 20px 26px;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-between;\n\tborder-radius: var(--radius);\n}\n.project:not(#project-form):hover .box {\n\tbackground-color: var(--bg-alt2);\n\tbox-shadow: var(--close-shadow);\n\ttransform: scale(1.05);\n}\n.project.selected .box {\n\tbackground-color: var(--bg-alt3);\n\tbox-shadow: var(--close-shadow);\n}\n.project:not(#project-form):active .box {\n\ttransform: scale(0.925);\n}\n.project.sortable-chosen .box {\n\tbackground-color: var(--bg-alt2);\n\tbox-shadow: var(--close-shadow);\n\ttransform: scale(0.925);\n}\n.project .container .name {\n\tmargin-bottom: 5px;\n\toverflow-wrap: anywhere;\n\tfont-size: 24px;\n\tfont-weight: 700;\n\tcolor: var(--text-alt);\n}\n.project:hover .container .name {\n\tcolor: var(--text);\n}\n.project .container .tasks {\n\tfont-size: 16px;\n\tcolor: var(--text-alt2);\n}\n.project:hover .container .tasks {\n\tcolor: var(--text-alt);\n}\n.project .buttons {\n\tmargin: -5px -10px;\n\tdisplay: flex;\n\tjustify-content: space-between;\n\topacity: 0;\n}\n.project:hover .buttons {\n\topacity: 1;\n}\n\n#project-form {\n\tdisplay: none;\n\tcursor: initial;\n}\n#project-form .box {\n\tbackground-color: var(--bg-alt2);\n\tbox-shadow: var(--close-shadow);\n}\n#project-form form {\n\theight: 100%;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-between;\n}\n#project-form form label {\n\tfont-size: 18px;\n\tfont-weight: 700;\n\tcolor: var(--text);\n}\n#project-form form input {\n\twidth: calc(100% + 10px);\n\tmargin: 5px -5px;\n\tpadding: 10px 12px;\n\tfont-size: 15px;\n\tcolor: var(--text-alt2);\n\tbackground-color: var(--bg-alt);\n\tborder-radius: 10px;\n}\n#project-form form input:focus {\n\tcolor: var(--text);\n}\n#project-form .buttons {\n\tmargin-block: 0;\n\tjustify-content: space-around;\n\topacity: 1;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;CACC,SAAS;CACT,UAAU;CACV,SAAS;CACT,sBAAsB;CACtB,aAAa;CACb,gBAAgB;AACjB;;AAEA;CACC,qBAAqB;CACrB,yBAAyB;CACzB,0BAA0B;CAC1B,0BAA0B;CAC1B,0BAA0B;CAC1B,8BAA8B;CAC9B,+BAA+B;CAC/B,cAAc;CACd,6EAA6E;CAC7E,kFAAkF;CAClF,sHAAsH;AACvH;;AAEA;CACC,2BAA2B;AAC5B;;AAEA;CACC,kBAAkB;CAClB,eAAe;CACf,eAAe;CACf,gBAAgB;CAChB,sBAAsB;CACtB,gCAAgC;CAChC,+BAA+B;CAC/B,4BAA4B;CAC5B,6BAA6B;AAC9B;AACA;CACC,uBAAuB;CACvB,eAAe;CACf,mBAAmB;AACpB;AACA;CACC,kBAAkB;CAClB,gCAAgC;CAChC,iCAAiC;AAClC;AACA;CACC,uBAAuB;AACxB;;AAEA;CACC,eAAe;CACf,uBAAuB;CACvB,6BAA6B;CAC7B,4BAA4B;CAC5B,6BAA6B;AAC9B;AACA;CACC,kBAAkB;CAClB,+BAA+B;AAChC;AACA;CACC,YAAY;CACZ,eAAe;CACf,uBAAuB;AACxB;;AAEA;CACC,aAAa;CACb,YAAY;CACZ,eAAe;CACf,MAAM;CACN,+BAA+B;CAC/B,iCAAiC;AAClC;AACA;CACC,sBAAsB;CACtB,cAAc;CACd,eAAe;CACf,gBAAgB;CAChB,kBAAkB;AACnB;AACA;CACC,0BAA0B;CAC1B,kBAAkB;CAClB,gBAAgB;AACjB;AACA;CACC,YAAY;CACZ,sBAAsB;CACtB,aAAa;CACb,eAAe;CACf,8BAA8B;CAC9B,mCAAmC;AACpC;AACA;CACC,mBAAmB;CACnB,eAAe;CACf,SAAS;CACT,aAAa;AACd;;AAEA;CACC,aAAa;CACb,YAAY;CACZ,YAAY;CACZ,eAAe;CACf,iBAAiB;AAClB;AACA;CACC,6BAA6B;AAC9B;AACA;CACC,YAAY;CACZ,WAAW;CACX,kBAAkB;CAClB,aAAa;CACb,sBAAsB;CACtB,8BAA8B;CAC9B,4BAA4B;AAC7B;AACA;CACC,gCAAgC;CAChC,+BAA+B;CAC/B,sBAAsB;AACvB;AACA;CACC,gCAAgC;CAChC,+BAA+B;AAChC;AACA;CACC,uBAAuB;AACxB;AACA;CACC,gCAAgC;CAChC,+BAA+B;CAC/B,uBAAuB;AACxB;AACA;CACC,kBAAkB;CAClB,uBAAuB;CACvB,eAAe;CACf,gBAAgB;CAChB,sBAAsB;AACvB;AACA;CACC,kBAAkB;AACnB;AACA;CACC,eAAe;CACf,uBAAuB;AACxB;AACA;CACC,sBAAsB;AACvB;AACA;CACC,kBAAkB;CAClB,aAAa;CACb,8BAA8B;CAC9B,UAAU;AACX;AACA;CACC,UAAU;AACX;;AAEA;CACC,aAAa;CACb,eAAe;AAChB;AACA;CACC,gCAAgC;CAChC,+BAA+B;AAChC;AACA;CACC,YAAY;CACZ,aAAa;CACb,sBAAsB;CACtB,8BAA8B;AAC/B;AACA;CACC,eAAe;CACf,gBAAgB;CAChB,kBAAkB;AACnB;AACA;CACC,wBAAwB;CACxB,gBAAgB;CAChB,kBAAkB;CAClB,eAAe;CACf,uBAAuB;CACvB,+BAA+B;CAC/B,mBAAmB;AACpB;AACA;CACC,kBAAkB;AACnB;AACA;CACC,eAAe;CACf,6BAA6B;CAC7B,UAAU;AACX","sourcesContent":["* {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tbox-sizing: border-box;\n\toutline: none;\n\tfont-family: Sen;\n}\n\n:root {\n\t--bg: rgb(34, 35, 39);\n\t--bg-alt: rgb(40, 42, 46);\n\t--bg-alt2: rgb(45, 48, 52);\n\t--bg-alt3: rgb(50, 54, 58);\n\t--text: rgb(240, 240, 240);\n\t--text-alt: rgb(200, 200, 200);\n\t--text-alt2: rgb(160, 160, 160);\n\t--radius: 25px;\n\t--close-shadow: 0 2px 6px rgba(0, 0, 0, 0.075), 0 8px 14px rgba(0, 0, 0, 0.1);\n\t--distant-shadow: 0 2px 6px rgba(0, 0, 0, 0.125), 0 12px 20px rgba(0, 0, 0, 0.175);\n\t--transition: color 0.25s, background-color 0.25s, border-color 0.25s, box-shadow 0.25s, transform 0.2s, opacity 0.25s;\n}\n\nbody {\n\tbackground-color: var(--bg);\n}\n\n.button {\n\tpadding: 10px 18px;\n\tcursor: pointer;\n\tfont-size: 16px;\n\tfont-weight: 700;\n\tcolor: var(--text-alt);\n\tbackground-color: var(--bg-alt2);\n\tbox-shadow: var(--close-shadow);\n\tborder-radius: var(--radius);\n\ttransition: var(--transition);\n}\n.button .material-icons-round {\n\tmargin-inline: -2px 8px;\n\tfont-size: 17px;\n\tvertical-align: sub;\n}\n.button:hover {\n\tcolor: var(--text);\n\tbackground-color: var(--bg-alt3);\n\tbox-shadow: var(--distant-shadow);\n}\n.button:active {\n\ttransform: scale(0.875);\n}\n\n.icon-button {\n\tcursor: pointer;\n\tcolor: var(--text-alt2);\n\tbackground-color: transparent;\n\tborder-radius: var(--radius);\n\ttransition: var(--transition);\n}\n.icon-button:hover {\n\tcolor: var(--text);\n\tbackground-color: var(--bg-alt);\n}\n.icon-button .material-icons-round {\n\tpadding: 8px;\n\tfont-size: 20px;\n\tvertical-align: initial;\n}\n\n#sidebar {\n\theight: 100vh;\n\twidth: 440px;\n\tposition: fixed;\n\ttop: 0;\n\tbackground-color: var(--bg-alt);\n\tbox-shadow: var(--distant-shadow);\n}\n#sidebar > span {\n\tmargin: 30px 45px 15px;\n\tdisplay: block;\n\tfont-size: 32px;\n\tfont-weight: 800;\n\tcolor: var(--text);\n}\n#sidebar > .container {\n\theight: calc(100% - 180px);\n\toverflow-x: hidden;\n\toverflow-y: auto;\n}\n#sidebar #projects {\n\twidth: 440px;\n\tpadding: 5px 35px 10px;\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tjustify-content: space-between;\n\tscrollbar-gutter: stable both-edges;\n}\n#sidebar #add-project {\n\tmargin-bottom: 35px;\n\tposition: fixed;\n\tbottom: 0;\n\tleft: 143.5px;\n}\n\n.project {\n\theight: 165px;\n\twidth: 165px;\n\tmargin: 10px;\n\tcursor: pointer;\n\tuser-select: none;\n}\n.project * {\n\ttransition: var(--transition);\n}\n.project .box {\n\theight: 100%;\n\twidth: 100%;\n\tpadding: 20px 26px;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-between;\n\tborder-radius: var(--radius);\n}\n.project:not(#project-form):hover .box {\n\tbackground-color: var(--bg-alt2);\n\tbox-shadow: var(--close-shadow);\n\ttransform: scale(1.05);\n}\n.project.selected .box {\n\tbackground-color: var(--bg-alt3);\n\tbox-shadow: var(--close-shadow);\n}\n.project:not(#project-form):active .box {\n\ttransform: scale(0.925);\n}\n.project.sortable-chosen .box {\n\tbackground-color: var(--bg-alt2);\n\tbox-shadow: var(--close-shadow);\n\ttransform: scale(0.925);\n}\n.project .container .name {\n\tmargin-bottom: 5px;\n\toverflow-wrap: anywhere;\n\tfont-size: 24px;\n\tfont-weight: 700;\n\tcolor: var(--text-alt);\n}\n.project:hover .container .name {\n\tcolor: var(--text);\n}\n.project .container .tasks {\n\tfont-size: 16px;\n\tcolor: var(--text-alt2);\n}\n.project:hover .container .tasks {\n\tcolor: var(--text-alt);\n}\n.project .buttons {\n\tmargin: -5px -10px;\n\tdisplay: flex;\n\tjustify-content: space-between;\n\topacity: 0;\n}\n.project:hover .buttons {\n\topacity: 1;\n}\n\n#project-form {\n\tdisplay: none;\n\tcursor: initial;\n}\n#project-form .box {\n\tbackground-color: var(--bg-alt2);\n\tbox-shadow: var(--close-shadow);\n}\n#project-form form {\n\theight: 100%;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-between;\n}\n#project-form form label {\n\tfont-size: 18px;\n\tfont-weight: 700;\n\tcolor: var(--text);\n}\n#project-form form input {\n\twidth: calc(100% + 10px);\n\tmargin: 5px -5px;\n\tpadding: 10px 12px;\n\tfont-size: 15px;\n\tcolor: var(--text-alt2);\n\tbackground-color: var(--bg-alt);\n\tborder-radius: 10px;\n}\n#project-form form input:focus {\n\tcolor: var(--text);\n}\n#project-form .buttons {\n\tmargin-block: 0;\n\tjustify-content: space-around;\n\topacity: 1;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/UI.js":
/*!*******************!*\
  !*** ./src/UI.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ "./src/project.js");
/* harmony import */ var _events_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events.js */ "./src/events.js");



class UI {
	static projects = document.querySelector('#projects');
	static projectForm = document.querySelector('#project-form');

	static loadHomePage() {
		UI.loadProjects();
		UI.setEventListeners();
	}

	static loadProjects() {
		UI.appendProject(new _project_js__WEBPACK_IMPORTED_MODULE_0__["default"]('All tasks'));
	}

	static setEventListeners() {
		const addProjectButton = document.querySelector('#add-project');
		const cancelProjectButton = document.querySelector('#project-form button[title="Cancel"]');
		addProjectButton.addEventListener('click', () => UI.showProjectForm());
		cancelProjectButton.addEventListener('click', () => UI.hideProjectForm());
		UI.projectForm.addEventListener('submit', _events_js__WEBPACK_IMPORTED_MODULE_1__["default"].addProject);
	}

	static createElement(tag, attributes, ...children) {
		const element = document.createElement(tag);
		for (const key in attributes) {
			element.setAttribute(key, attributes[key]);
		}
		for (const child of children) {
			if (!child) {
				continue;
			} else if (typeof child === 'string') {
				element.appendChild(document.createTextNode(child));
			} else {
				element.appendChild(child);
			}
		}
		return element;
	}

	static createIcon(icon, _class = '') {
		const iconElement = UI.createElement('span', { class: `material-icons-round ${_class}` }, icon);
		return iconElement;
	}

	static createButton(icon, _class = '', text = '') {
		const iconElement = icon ? UI.createIcon(icon) : null;
		const button = UI.createElement('button', { class: _class }, iconElement, text);
		if (!text) {
			button.title = _class[0].toUpperCase() + _class.substring(1);
			button.classList.add('icon-button');
		}
		return button;
	}

	static appendProject(project) {
		const createButtons = () => {
			const dragButton = UI.createButton('drag_indicator', 'drag');
			const editButton = UI.createButton('edit', 'edit');
			const deleteButton = UI.createButton('delete_forever', 'delete');
			const buttons = UI.createElement('div', { class: 'buttons' }, dragButton, editButton, deleteButton);
			return buttons;
		}
		const name = UI.createElement('p', { class: 'name' }, project.name);
		const tasks = UI.createElement('p', { class: 'tasks' }, `${project.tasks.length} tasks`);
		const container = UI.createElement('div', { class: 'container' }, name, tasks);
		const box = UI.createElement('div', { class: 'box' }, container, project.name === 'All tasks' ? null : createButtons())
		const projectElement = UI.createElement('div', { class: 'project' }, box);
		projectElement.id = project.name.replace(/\s/g, '-');
		UI.projects.appendChild(projectElement);
	}

	static showProjectForm(projectId = '') {
		if (projectId) {
			const project = document.querySelector(`#${projectId}`);
			UI.projects.insertBefore(UI.projectForm, project);
		} else {
			UI.projects.appendChild(UI.projectForm);
		}
		const form = UI.projectForm.querySelector('form');
		const formInput = UI.projectForm.querySelector('input');
		form.id = projectId;
		UI.projectForm.style.display = 'block';
		formInput.focus();
	}

	static hideProjectForm() {
		const form = UI.projectForm.querySelector('form');
		form.reset();
		UI.projectForm.style.display = 'none';
		UI.projects.insertBefore(UI.projectForm, UI.projects.firstElementChild);
	}
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UI);


/***/ }),

/***/ "./src/events.js":
/*!***********************!*\
  !*** ./src/events.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ "./src/project.js");
/* harmony import */ var _todoList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoList.js */ "./src/todoList.js");
/* harmony import */ var _UI_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UI.js */ "./src/UI.js");




class Events {
	static addProject(e) {
		e.preventDefault();
		const projectName = e.target[0].value.trim();
		if (!_todoList_js__WEBPACK_IMPORTED_MODULE_1__["default"].contains(projectName) && projectName !== 'All tasks') {
			const project = new _project_js__WEBPACK_IMPORTED_MODULE_0__["default"](projectName);
			_todoList_js__WEBPACK_IMPORTED_MODULE_1__["default"].addProject(project);
			_UI_js__WEBPACK_IMPORTED_MODULE_2__["default"].appendProject(project);
			_UI_js__WEBPACK_IMPORTED_MODULE_2__["default"].hideProjectForm();
		} else {
			alert(`Project "${projectName}" already exists.`);
		}
	}
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Events);


/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Project {
	#name;
	#tasks;

	constructor(name) {
		this.#name = name;
		this.#tasks = [];
	}

	get name() { return this.#name; }
	set name(name) { this.#name = name; }

	get tasks() { return this.#tasks; }
	set tasks(tasks) { this.#tasks = tasks; }

	contains(taskName) {
		return this.#tasks.some(task => task.name === taskName);
	}
	getTask(taskName) {
		return this.#tasks.find(task => task.name === taskName);
	}
	addTask(task) {
		if (!this.contains(task.name)) {
			this.#tasks.push(task);
		}
	}
	deleteTask(taskName) {
		this.#tasks = this.#tasks.filter(task => task.name !== taskName);
	}
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);


/***/ }),

/***/ "./src/todoList.js":
/*!*************************!*\
  !*** ./src/todoList.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class TodoList {
	static projects = [];

	static contains(projectName) {
		return TodoList.projects.some(project => project.name === projectName);
	}
	static getProject(projectName) {
		return TodoList.projects.find(project => project.name === projectName);
	}
	static addProject(project) {
		if (!TodoList.contains(project.name)) {
			TodoList.projects.push(project);
		}
	}
	static deleteProject(projectName) {
		TodoList.projects = TodoList.projects.filter(project => project.name !== projectName);
	}
	static getTotalTasks() {
		return TodoList.projects.reduce((total, project) => total + project.tasks.length, 0);
	}
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TodoList);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _UI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UI.js */ "./src/UI.js");



_UI_js__WEBPACK_IMPORTED_MODULE_1__["default"].loadHomePage();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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USxFQUFDOzs7Ozs7O1VDdEJ4QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05vQjtBQUNJOztBQUV4QiwyREFBZSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvVUkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kb0xpc3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGJvcmRlcjogMDtcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcdG91dGxpbmU6IG5vbmU7XFxuXFx0Zm9udC1mYW1pbHk6IFNlbjtcXG59XFxuXFxuOnJvb3Qge1xcblxcdC0tYmc6IHJnYigzNCwgMzUsIDM5KTtcXG5cXHQtLWJnLWFsdDogcmdiKDQwLCA0MiwgNDYpO1xcblxcdC0tYmctYWx0MjogcmdiKDQ1LCA0OCwgNTIpO1xcblxcdC0tYmctYWx0MzogcmdiKDUwLCA1NCwgNTgpO1xcblxcdC0tdGV4dDogcmdiKDI0MCwgMjQwLCAyNDApO1xcblxcdC0tdGV4dC1hbHQ6IHJnYigyMDAsIDIwMCwgMjAwKTtcXG5cXHQtLXRleHQtYWx0MjogcmdiKDE2MCwgMTYwLCAxNjApO1xcblxcdC0tcmFkaXVzOiAyNXB4O1xcblxcdC0tY2xvc2Utc2hhZG93OiAwIDJweCA2cHggcmdiYSgwLCAwLCAwLCAwLjA3NSksIDAgOHB4IDE0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcblxcdC0tZGlzdGFudC1zaGFkb3c6IDAgMnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTI1KSwgMCAxMnB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjE3NSk7XFxuXFx0LS10cmFuc2l0aW9uOiBjb2xvciAwLjI1cywgYmFja2dyb3VuZC1jb2xvciAwLjI1cywgYm9yZGVyLWNvbG9yIDAuMjVzLCBib3gtc2hhZG93IDAuMjVzLCB0cmFuc2Zvcm0gMC4ycywgb3BhY2l0eSAwLjI1cztcXG59XFxuXFxuYm9keSB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmcpO1xcbn1cXG5cXG4uYnV0dG9uIHtcXG5cXHRwYWRkaW5nOiAxMHB4IDE4cHg7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdGZvbnQtc2l6ZTogMTZweDtcXG5cXHRmb250LXdlaWdodDogNzAwO1xcblxcdGNvbG9yOiB2YXIoLS10ZXh0LWFsdCk7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctYWx0Mik7XFxuXFx0Ym94LXNoYWRvdzogdmFyKC0tY2xvc2Utc2hhZG93KTtcXG5cXHRib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMpO1xcblxcdHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xcbn1cXG4uYnV0dG9uIC5tYXRlcmlhbC1pY29ucy1yb3VuZCB7XFxuXFx0bWFyZ2luLWlubGluZTogLTJweCA4cHg7XFxuXFx0Zm9udC1zaXplOiAxN3B4O1xcblxcdHZlcnRpY2FsLWFsaWduOiBzdWI7XFxufVxcbi5idXR0b246aG92ZXIge1xcblxcdGNvbG9yOiB2YXIoLS10ZXh0KTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1hbHQzKTtcXG5cXHRib3gtc2hhZG93OiB2YXIoLS1kaXN0YW50LXNoYWRvdyk7XFxufVxcbi5idXR0b246YWN0aXZlIHtcXG5cXHR0cmFuc2Zvcm06IHNjYWxlKDAuODc1KTtcXG59XFxuXFxuLmljb24tYnV0dG9uIHtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0Y29sb3I6IHZhcigtLXRleHQtYWx0Mik7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuXFx0Ym9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzKTtcXG5cXHR0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcXG59XFxuLmljb24tYnV0dG9uOmhvdmVyIHtcXG5cXHRjb2xvcjogdmFyKC0tdGV4dCk7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctYWx0KTtcXG59XFxuLmljb24tYnV0dG9uIC5tYXRlcmlhbC1pY29ucy1yb3VuZCB7XFxuXFx0cGFkZGluZzogOHB4O1xcblxcdGZvbnQtc2l6ZTogMjBweDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogaW5pdGlhbDtcXG59XFxuXFxuI3NpZGViYXIge1xcblxcdGhlaWdodDogMTAwdmg7XFxuXFx0d2lkdGg6IDQ0MHB4O1xcblxcdHBvc2l0aW9uOiBmaXhlZDtcXG5cXHR0b3A6IDA7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctYWx0KTtcXG5cXHRib3gtc2hhZG93OiB2YXIoLS1kaXN0YW50LXNoYWRvdyk7XFxufVxcbiNzaWRlYmFyID4gc3BhbiB7XFxuXFx0bWFyZ2luOiAzMHB4IDQ1cHggMTVweDtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG5cXHRmb250LXNpemU6IDMycHg7XFxuXFx0Zm9udC13ZWlnaHQ6IDgwMDtcXG5cXHRjb2xvcjogdmFyKC0tdGV4dCk7XFxufVxcbiNzaWRlYmFyID4gLmNvbnRhaW5lciB7XFxuXFx0aGVpZ2h0OiBjYWxjKDEwMCUgLSAxODBweCk7XFxuXFx0b3ZlcmZsb3cteDogaGlkZGVuO1xcblxcdG92ZXJmbG93LXk6IGF1dG87XFxufVxcbiNzaWRlYmFyICNwcm9qZWN0cyB7XFxuXFx0d2lkdGg6IDQ0MHB4O1xcblxcdHBhZGRpbmc6IDVweCAzNXB4IDEwcHg7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LXdyYXA6IHdyYXA7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdHNjcm9sbGJhci1ndXR0ZXI6IHN0YWJsZSBib3RoLWVkZ2VzO1xcbn1cXG4jc2lkZWJhciAjYWRkLXByb2plY3Qge1xcblxcdG1hcmdpbi1ib3R0b206IDM1cHg7XFxuXFx0cG9zaXRpb246IGZpeGVkO1xcblxcdGJvdHRvbTogMDtcXG5cXHRsZWZ0OiAxNDMuNXB4O1xcbn1cXG5cXG4ucHJvamVjdCB7XFxuXFx0aGVpZ2h0OiAxNjVweDtcXG5cXHR3aWR0aDogMTY1cHg7XFxuXFx0bWFyZ2luOiAxMHB4O1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHR1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuLnByb2plY3QgKiB7XFxuXFx0dHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XFxufVxcbi5wcm9qZWN0IC5ib3gge1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRwYWRkaW5nOiAyMHB4IDI2cHg7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMpO1xcbn1cXG4ucHJvamVjdDpub3QoI3Byb2plY3QtZm9ybSk6aG92ZXIgLmJveCB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctYWx0Mik7XFxuXFx0Ym94LXNoYWRvdzogdmFyKC0tY2xvc2Utc2hhZG93KTtcXG5cXHR0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbn1cXG4ucHJvamVjdC5zZWxlY3RlZCAuYm94IHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1hbHQzKTtcXG5cXHRib3gtc2hhZG93OiB2YXIoLS1jbG9zZS1zaGFkb3cpO1xcbn1cXG4ucHJvamVjdDpub3QoI3Byb2plY3QtZm9ybSk6YWN0aXZlIC5ib3gge1xcblxcdHRyYW5zZm9ybTogc2NhbGUoMC45MjUpO1xcbn1cXG4ucHJvamVjdC5zb3J0YWJsZS1jaG9zZW4gLmJveCB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctYWx0Mik7XFxuXFx0Ym94LXNoYWRvdzogdmFyKC0tY2xvc2Utc2hhZG93KTtcXG5cXHR0cmFuc2Zvcm06IHNjYWxlKDAuOTI1KTtcXG59XFxuLnByb2plY3QgLmNvbnRhaW5lciAubmFtZSB7XFxuXFx0bWFyZ2luLWJvdHRvbTogNXB4O1xcblxcdG92ZXJmbG93LXdyYXA6IGFueXdoZXJlO1xcblxcdGZvbnQtc2l6ZTogMjRweDtcXG5cXHRmb250LXdlaWdodDogNzAwO1xcblxcdGNvbG9yOiB2YXIoLS10ZXh0LWFsdCk7XFxufVxcbi5wcm9qZWN0OmhvdmVyIC5jb250YWluZXIgLm5hbWUge1xcblxcdGNvbG9yOiB2YXIoLS10ZXh0KTtcXG59XFxuLnByb2plY3QgLmNvbnRhaW5lciAudGFza3Mge1xcblxcdGZvbnQtc2l6ZTogMTZweDtcXG5cXHRjb2xvcjogdmFyKC0tdGV4dC1hbHQyKTtcXG59XFxuLnByb2plY3Q6aG92ZXIgLmNvbnRhaW5lciAudGFza3Mge1xcblxcdGNvbG9yOiB2YXIoLS10ZXh0LWFsdCk7XFxufVxcbi5wcm9qZWN0IC5idXR0b25zIHtcXG5cXHRtYXJnaW46IC01cHggLTEwcHg7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0b3BhY2l0eTogMDtcXG59XFxuLnByb2plY3Q6aG92ZXIgLmJ1dHRvbnMge1xcblxcdG9wYWNpdHk6IDE7XFxufVxcblxcbiNwcm9qZWN0LWZvcm0ge1xcblxcdGRpc3BsYXk6IG5vbmU7XFxuXFx0Y3Vyc29yOiBpbml0aWFsO1xcbn1cXG4jcHJvamVjdC1mb3JtIC5ib3gge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWFsdDIpO1xcblxcdGJveC1zaGFkb3c6IHZhcigtLWNsb3NlLXNoYWRvdyk7XFxufVxcbiNwcm9qZWN0LWZvcm0gZm9ybSB7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbiNwcm9qZWN0LWZvcm0gZm9ybSBsYWJlbCB7XFxuXFx0Zm9udC1zaXplOiAxOHB4O1xcblxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxuXFx0Y29sb3I6IHZhcigtLXRleHQpO1xcbn1cXG4jcHJvamVjdC1mb3JtIGZvcm0gaW5wdXQge1xcblxcdHdpZHRoOiBjYWxjKDEwMCUgKyAxMHB4KTtcXG5cXHRtYXJnaW46IDVweCAtNXB4O1xcblxcdHBhZGRpbmc6IDEwcHggMTJweDtcXG5cXHRmb250LXNpemU6IDE1cHg7XFxuXFx0Y29sb3I6IHZhcigtLXRleHQtYWx0Mik7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctYWx0KTtcXG5cXHRib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG4jcHJvamVjdC1mb3JtIGZvcm0gaW5wdXQ6Zm9jdXMge1xcblxcdGNvbG9yOiB2YXIoLS10ZXh0KTtcXG59XFxuI3Byb2plY3QtZm9ybSAuYnV0dG9ucyB7XFxuXFx0bWFyZ2luLWJsb2NrOiAwO1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcblxcdG9wYWNpdHk6IDE7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Q0FDQyxTQUFTO0NBQ1QsVUFBVTtDQUNWLFNBQVM7Q0FDVCxzQkFBc0I7Q0FDdEIsYUFBYTtDQUNiLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLHFCQUFxQjtDQUNyQix5QkFBeUI7Q0FDekIsMEJBQTBCO0NBQzFCLDBCQUEwQjtDQUMxQiwwQkFBMEI7Q0FDMUIsOEJBQThCO0NBQzlCLCtCQUErQjtDQUMvQixjQUFjO0NBQ2QsNkVBQTZFO0NBQzdFLGtGQUFrRjtDQUNsRixzSEFBc0g7QUFDdkg7O0FBRUE7Q0FDQywyQkFBMkI7QUFDNUI7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsZUFBZTtDQUNmLGVBQWU7Q0FDZixnQkFBZ0I7Q0FDaEIsc0JBQXNCO0NBQ3RCLGdDQUFnQztDQUNoQywrQkFBK0I7Q0FDL0IsNEJBQTRCO0NBQzVCLDZCQUE2QjtBQUM5QjtBQUNBO0NBQ0MsdUJBQXVCO0NBQ3ZCLGVBQWU7Q0FDZixtQkFBbUI7QUFDcEI7QUFDQTtDQUNDLGtCQUFrQjtDQUNsQixnQ0FBZ0M7Q0FDaEMsaUNBQWlDO0FBQ2xDO0FBQ0E7Q0FDQyx1QkFBdUI7QUFDeEI7O0FBRUE7Q0FDQyxlQUFlO0NBQ2YsdUJBQXVCO0NBQ3ZCLDZCQUE2QjtDQUM3Qiw0QkFBNEI7Q0FDNUIsNkJBQTZCO0FBQzlCO0FBQ0E7Q0FDQyxrQkFBa0I7Q0FDbEIsK0JBQStCO0FBQ2hDO0FBQ0E7Q0FDQyxZQUFZO0NBQ1osZUFBZTtDQUNmLHVCQUF1QjtBQUN4Qjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixZQUFZO0NBQ1osZUFBZTtDQUNmLE1BQU07Q0FDTiwrQkFBK0I7Q0FDL0IsaUNBQWlDO0FBQ2xDO0FBQ0E7Q0FDQyxzQkFBc0I7Q0FDdEIsY0FBYztDQUNkLGVBQWU7Q0FDZixnQkFBZ0I7Q0FDaEIsa0JBQWtCO0FBQ25CO0FBQ0E7Q0FDQywwQkFBMEI7Q0FDMUIsa0JBQWtCO0NBQ2xCLGdCQUFnQjtBQUNqQjtBQUNBO0NBQ0MsWUFBWTtDQUNaLHNCQUFzQjtDQUN0QixhQUFhO0NBQ2IsZUFBZTtDQUNmLDhCQUE4QjtDQUM5QixtQ0FBbUM7QUFDcEM7QUFDQTtDQUNDLG1CQUFtQjtDQUNuQixlQUFlO0NBQ2YsU0FBUztDQUNULGFBQWE7QUFDZDs7QUFFQTtDQUNDLGFBQWE7Q0FDYixZQUFZO0NBQ1osWUFBWTtDQUNaLGVBQWU7Q0FDZixpQkFBaUI7QUFDbEI7QUFDQTtDQUNDLDZCQUE2QjtBQUM5QjtBQUNBO0NBQ0MsWUFBWTtDQUNaLFdBQVc7Q0FDWCxrQkFBa0I7Q0FDbEIsYUFBYTtDQUNiLHNCQUFzQjtDQUN0Qiw4QkFBOEI7Q0FDOUIsNEJBQTRCO0FBQzdCO0FBQ0E7Q0FDQyxnQ0FBZ0M7Q0FDaEMsK0JBQStCO0NBQy9CLHNCQUFzQjtBQUN2QjtBQUNBO0NBQ0MsZ0NBQWdDO0NBQ2hDLCtCQUErQjtBQUNoQztBQUNBO0NBQ0MsdUJBQXVCO0FBQ3hCO0FBQ0E7Q0FDQyxnQ0FBZ0M7Q0FDaEMsK0JBQStCO0NBQy9CLHVCQUF1QjtBQUN4QjtBQUNBO0NBQ0Msa0JBQWtCO0NBQ2xCLHVCQUF1QjtDQUN2QixlQUFlO0NBQ2YsZ0JBQWdCO0NBQ2hCLHNCQUFzQjtBQUN2QjtBQUNBO0NBQ0Msa0JBQWtCO0FBQ25CO0FBQ0E7Q0FDQyxlQUFlO0NBQ2YsdUJBQXVCO0FBQ3hCO0FBQ0E7Q0FDQyxzQkFBc0I7QUFDdkI7QUFDQTtDQUNDLGtCQUFrQjtDQUNsQixhQUFhO0NBQ2IsOEJBQThCO0NBQzlCLFVBQVU7QUFDWDtBQUNBO0NBQ0MsVUFBVTtBQUNYOztBQUVBO0NBQ0MsYUFBYTtDQUNiLGVBQWU7QUFDaEI7QUFDQTtDQUNDLGdDQUFnQztDQUNoQywrQkFBK0I7QUFDaEM7QUFDQTtDQUNDLFlBQVk7Q0FDWixhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLDhCQUE4QjtBQUMvQjtBQUNBO0NBQ0MsZUFBZTtDQUNmLGdCQUFnQjtDQUNoQixrQkFBa0I7QUFDbkI7QUFDQTtDQUNDLHdCQUF3QjtDQUN4QixnQkFBZ0I7Q0FDaEIsa0JBQWtCO0NBQ2xCLGVBQWU7Q0FDZix1QkFBdUI7Q0FDdkIsK0JBQStCO0NBQy9CLG1CQUFtQjtBQUNwQjtBQUNBO0NBQ0Msa0JBQWtCO0FBQ25CO0FBQ0E7Q0FDQyxlQUFlO0NBQ2YsNkJBQTZCO0NBQzdCLFVBQVU7QUFDWFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRib3JkZXI6IDA7XFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXHRvdXRsaW5lOiBub25lO1xcblxcdGZvbnQtZmFtaWx5OiBTZW47XFxufVxcblxcbjpyb290IHtcXG5cXHQtLWJnOiByZ2IoMzQsIDM1LCAzOSk7XFxuXFx0LS1iZy1hbHQ6IHJnYig0MCwgNDIsIDQ2KTtcXG5cXHQtLWJnLWFsdDI6IHJnYig0NSwgNDgsIDUyKTtcXG5cXHQtLWJnLWFsdDM6IHJnYig1MCwgNTQsIDU4KTtcXG5cXHQtLXRleHQ6IHJnYigyNDAsIDI0MCwgMjQwKTtcXG5cXHQtLXRleHQtYWx0OiByZ2IoMjAwLCAyMDAsIDIwMCk7XFxuXFx0LS10ZXh0LWFsdDI6IHJnYigxNjAsIDE2MCwgMTYwKTtcXG5cXHQtLXJhZGl1czogMjVweDtcXG5cXHQtLWNsb3NlLXNoYWRvdzogMCAycHggNnB4IHJnYmEoMCwgMCwgMCwgMC4wNzUpLCAwIDhweCAxNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG5cXHQtLWRpc3RhbnQtc2hhZG93OiAwIDJweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEyNSksIDAgMTJweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xNzUpO1xcblxcdC0tdHJhbnNpdGlvbjogY29sb3IgMC4yNXMsIGJhY2tncm91bmQtY29sb3IgMC4yNXMsIGJvcmRlci1jb2xvciAwLjI1cywgYm94LXNoYWRvdyAwLjI1cywgdHJhbnNmb3JtIDAuMnMsIG9wYWNpdHkgMC4yNXM7XFxufVxcblxcbmJvZHkge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnKTtcXG59XFxuXFxuLmJ1dHRvbiB7XFxuXFx0cGFkZGluZzogMTBweCAxOHB4O1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHRmb250LXNpemU6IDE2cHg7XFxuXFx0Zm9udC13ZWlnaHQ6IDcwMDtcXG5cXHRjb2xvcjogdmFyKC0tdGV4dC1hbHQpO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWFsdDIpO1xcblxcdGJveC1zaGFkb3c6IHZhcigtLWNsb3NlLXNoYWRvdyk7XFxuXFx0Ym9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzKTtcXG5cXHR0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcXG59XFxuLmJ1dHRvbiAubWF0ZXJpYWwtaWNvbnMtcm91bmQge1xcblxcdG1hcmdpbi1pbmxpbmU6IC0ycHggOHB4O1xcblxcdGZvbnQtc2l6ZTogMTdweDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogc3ViO1xcbn1cXG4uYnV0dG9uOmhvdmVyIHtcXG5cXHRjb2xvcjogdmFyKC0tdGV4dCk7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctYWx0Myk7XFxuXFx0Ym94LXNoYWRvdzogdmFyKC0tZGlzdGFudC1zaGFkb3cpO1xcbn1cXG4uYnV0dG9uOmFjdGl2ZSB7XFxuXFx0dHJhbnNmb3JtOiBzY2FsZSgwLjg3NSk7XFxufVxcblxcbi5pY29uLWJ1dHRvbiB7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdGNvbG9yOiB2YXIoLS10ZXh0LWFsdDIpO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcblxcdGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cyk7XFxuXFx0dHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XFxufVxcbi5pY29uLWJ1dHRvbjpob3ZlciB7XFxuXFx0Y29sb3I6IHZhcigtLXRleHQpO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWFsdCk7XFxufVxcbi5pY29uLWJ1dHRvbiAubWF0ZXJpYWwtaWNvbnMtcm91bmQge1xcblxcdHBhZGRpbmc6IDhweDtcXG5cXHRmb250LXNpemU6IDIwcHg7XFxuXFx0dmVydGljYWwtYWxpZ246IGluaXRpYWw7XFxufVxcblxcbiNzaWRlYmFyIHtcXG5cXHRoZWlnaHQ6IDEwMHZoO1xcblxcdHdpZHRoOiA0NDBweDtcXG5cXHRwb3NpdGlvbjogZml4ZWQ7XFxuXFx0dG9wOiAwO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWFsdCk7XFxuXFx0Ym94LXNoYWRvdzogdmFyKC0tZGlzdGFudC1zaGFkb3cpO1xcbn1cXG4jc2lkZWJhciA+IHNwYW4ge1xcblxcdG1hcmdpbjogMzBweCA0NXB4IDE1cHg7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxuXFx0Zm9udC1zaXplOiAzMnB4O1xcblxcdGZvbnQtd2VpZ2h0OiA4MDA7XFxuXFx0Y29sb3I6IHZhcigtLXRleHQpO1xcbn1cXG4jc2lkZWJhciA+IC5jb250YWluZXIge1xcblxcdGhlaWdodDogY2FsYygxMDAlIC0gMTgwcHgpO1xcblxcdG92ZXJmbG93LXg6IGhpZGRlbjtcXG5cXHRvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG4jc2lkZWJhciAjcHJvamVjdHMge1xcblxcdHdpZHRoOiA0NDBweDtcXG5cXHRwYWRkaW5nOiA1cHggMzVweCAxMHB4O1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC13cmFwOiB3cmFwO1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRzY3JvbGxiYXItZ3V0dGVyOiBzdGFibGUgYm90aC1lZGdlcztcXG59XFxuI3NpZGViYXIgI2FkZC1wcm9qZWN0IHtcXG5cXHRtYXJnaW4tYm90dG9tOiAzNXB4O1xcblxcdHBvc2l0aW9uOiBmaXhlZDtcXG5cXHRib3R0b206IDA7XFxuXFx0bGVmdDogMTQzLjVweDtcXG59XFxuXFxuLnByb2plY3Qge1xcblxcdGhlaWdodDogMTY1cHg7XFxuXFx0d2lkdGg6IDE2NXB4O1xcblxcdG1hcmdpbjogMTBweDtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0dXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcbi5wcm9qZWN0ICoge1xcblxcdHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xcbn1cXG4ucHJvamVjdCAuYm94IHtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0cGFkZGluZzogMjBweCAyNnB4O1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0Ym9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzKTtcXG59XFxuLnByb2plY3Q6bm90KCNwcm9qZWN0LWZvcm0pOmhvdmVyIC5ib3gge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWFsdDIpO1xcblxcdGJveC1zaGFkb3c6IHZhcigtLWNsb3NlLXNoYWRvdyk7XFxuXFx0dHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG59XFxuLnByb2plY3Quc2VsZWN0ZWQgLmJveCB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctYWx0Myk7XFxuXFx0Ym94LXNoYWRvdzogdmFyKC0tY2xvc2Utc2hhZG93KTtcXG59XFxuLnByb2plY3Q6bm90KCNwcm9qZWN0LWZvcm0pOmFjdGl2ZSAuYm94IHtcXG5cXHR0cmFuc2Zvcm06IHNjYWxlKDAuOTI1KTtcXG59XFxuLnByb2plY3Quc29ydGFibGUtY2hvc2VuIC5ib3gge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWFsdDIpO1xcblxcdGJveC1zaGFkb3c6IHZhcigtLWNsb3NlLXNoYWRvdyk7XFxuXFx0dHJhbnNmb3JtOiBzY2FsZSgwLjkyNSk7XFxufVxcbi5wcm9qZWN0IC5jb250YWluZXIgLm5hbWUge1xcblxcdG1hcmdpbi1ib3R0b206IDVweDtcXG5cXHRvdmVyZmxvdy13cmFwOiBhbnl3aGVyZTtcXG5cXHRmb250LXNpemU6IDI0cHg7XFxuXFx0Zm9udC13ZWlnaHQ6IDcwMDtcXG5cXHRjb2xvcjogdmFyKC0tdGV4dC1hbHQpO1xcbn1cXG4ucHJvamVjdDpob3ZlciAuY29udGFpbmVyIC5uYW1lIHtcXG5cXHRjb2xvcjogdmFyKC0tdGV4dCk7XFxufVxcbi5wcm9qZWN0IC5jb250YWluZXIgLnRhc2tzIHtcXG5cXHRmb250LXNpemU6IDE2cHg7XFxuXFx0Y29sb3I6IHZhcigtLXRleHQtYWx0Mik7XFxufVxcbi5wcm9qZWN0OmhvdmVyIC5jb250YWluZXIgLnRhc2tzIHtcXG5cXHRjb2xvcjogdmFyKC0tdGV4dC1hbHQpO1xcbn1cXG4ucHJvamVjdCAuYnV0dG9ucyB7XFxuXFx0bWFyZ2luOiAtNXB4IC0xMHB4O1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdG9wYWNpdHk6IDA7XFxufVxcbi5wcm9qZWN0OmhvdmVyIC5idXR0b25zIHtcXG5cXHRvcGFjaXR5OiAxO1xcbn1cXG5cXG4jcHJvamVjdC1mb3JtIHtcXG5cXHRkaXNwbGF5OiBub25lO1xcblxcdGN1cnNvcjogaW5pdGlhbDtcXG59XFxuI3Byb2plY3QtZm9ybSAuYm94IHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1hbHQyKTtcXG5cXHRib3gtc2hhZG93OiB2YXIoLS1jbG9zZS1zaGFkb3cpO1xcbn1cXG4jcHJvamVjdC1mb3JtIGZvcm0ge1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4jcHJvamVjdC1mb3JtIGZvcm0gbGFiZWwge1xcblxcdGZvbnQtc2l6ZTogMThweDtcXG5cXHRmb250LXdlaWdodDogNzAwO1xcblxcdGNvbG9yOiB2YXIoLS10ZXh0KTtcXG59XFxuI3Byb2plY3QtZm9ybSBmb3JtIGlucHV0IHtcXG5cXHR3aWR0aDogY2FsYygxMDAlICsgMTBweCk7XFxuXFx0bWFyZ2luOiA1cHggLTVweDtcXG5cXHRwYWRkaW5nOiAxMHB4IDEycHg7XFxuXFx0Zm9udC1zaXplOiAxNXB4O1xcblxcdGNvbG9yOiB2YXIoLS10ZXh0LWFsdDIpO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWFsdCk7XFxuXFx0Ym9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuI3Byb2plY3QtZm9ybSBmb3JtIGlucHV0OmZvY3VzIHtcXG5cXHRjb2xvcjogdmFyKC0tdGV4dCk7XFxufVxcbiNwcm9qZWN0LWZvcm0gLmJ1dHRvbnMge1xcblxcdG1hcmdpbi1ibG9jazogMDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG5cXHRvcGFjaXR5OiAxO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBQcm9qZWN0IGZyb20gJy4vcHJvamVjdC5qcyc7XG5pbXBvcnQgRXZlbnRzIGZyb20gJy4vZXZlbnRzLmpzJztcblxuY2xhc3MgVUkge1xuXHRzdGF0aWMgcHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdHMnKTtcblx0c3RhdGljIHByb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtZm9ybScpO1xuXG5cdHN0YXRpYyBsb2FkSG9tZVBhZ2UoKSB7XG5cdFx0VUkubG9hZFByb2plY3RzKCk7XG5cdFx0VUkuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcblx0fVxuXG5cdHN0YXRpYyBsb2FkUHJvamVjdHMoKSB7XG5cdFx0VUkuYXBwZW5kUHJvamVjdChuZXcgUHJvamVjdCgnQWxsIHRhc2tzJykpO1xuXHR9XG5cblx0c3RhdGljIHNldEV2ZW50TGlzdGVuZXJzKCkge1xuXHRcdGNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLXByb2plY3QnKTtcblx0XHRjb25zdCBjYW5jZWxQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtZm9ybSBidXR0b25bdGl0bGU9XCJDYW5jZWxcIl0nKTtcblx0XHRhZGRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gVUkuc2hvd1Byb2plY3RGb3JtKCkpO1xuXHRcdGNhbmNlbFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBVSS5oaWRlUHJvamVjdEZvcm0oKSk7XG5cdFx0VUkucHJvamVjdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgRXZlbnRzLmFkZFByb2plY3QpO1xuXHR9XG5cblx0c3RhdGljIGNyZWF0ZUVsZW1lbnQodGFnLCBhdHRyaWJ1dGVzLCAuLi5jaGlsZHJlbikge1xuXHRcdGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XG5cdFx0Zm9yIChjb25zdCBrZXkgaW4gYXR0cmlidXRlcykge1xuXHRcdFx0ZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuXHRcdH1cblx0XHRmb3IgKGNvbnN0IGNoaWxkIG9mIGNoaWxkcmVuKSB7XG5cdFx0XHRpZiAoIWNoaWxkKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fSBlbHNlIGlmICh0eXBlb2YgY2hpbGQgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdGVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY2hpbGQpKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGVsZW1lbnQuYXBwZW5kQ2hpbGQoY2hpbGQpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gZWxlbWVudDtcblx0fVxuXG5cdHN0YXRpYyBjcmVhdGVJY29uKGljb24sIF9jbGFzcyA9ICcnKSB7XG5cdFx0Y29uc3QgaWNvbkVsZW1lbnQgPSBVSS5jcmVhdGVFbGVtZW50KCdzcGFuJywgeyBjbGFzczogYG1hdGVyaWFsLWljb25zLXJvdW5kICR7X2NsYXNzfWAgfSwgaWNvbik7XG5cdFx0cmV0dXJuIGljb25FbGVtZW50O1xuXHR9XG5cblx0c3RhdGljIGNyZWF0ZUJ1dHRvbihpY29uLCBfY2xhc3MgPSAnJywgdGV4dCA9ICcnKSB7XG5cdFx0Y29uc3QgaWNvbkVsZW1lbnQgPSBpY29uID8gVUkuY3JlYXRlSWNvbihpY29uKSA6IG51bGw7XG5cdFx0Y29uc3QgYnV0dG9uID0gVUkuY3JlYXRlRWxlbWVudCgnYnV0dG9uJywgeyBjbGFzczogX2NsYXNzIH0sIGljb25FbGVtZW50LCB0ZXh0KTtcblx0XHRpZiAoIXRleHQpIHtcblx0XHRcdGJ1dHRvbi50aXRsZSA9IF9jbGFzc1swXS50b1VwcGVyQ2FzZSgpICsgX2NsYXNzLnN1YnN0cmluZygxKTtcblx0XHRcdGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdpY29uLWJ1dHRvbicpO1xuXHRcdH1cblx0XHRyZXR1cm4gYnV0dG9uO1xuXHR9XG5cblx0c3RhdGljIGFwcGVuZFByb2plY3QocHJvamVjdCkge1xuXHRcdGNvbnN0IGNyZWF0ZUJ1dHRvbnMgPSAoKSA9PiB7XG5cdFx0XHRjb25zdCBkcmFnQnV0dG9uID0gVUkuY3JlYXRlQnV0dG9uKCdkcmFnX2luZGljYXRvcicsICdkcmFnJyk7XG5cdFx0XHRjb25zdCBlZGl0QnV0dG9uID0gVUkuY3JlYXRlQnV0dG9uKCdlZGl0JywgJ2VkaXQnKTtcblx0XHRcdGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IFVJLmNyZWF0ZUJ1dHRvbignZGVsZXRlX2ZvcmV2ZXInLCAnZGVsZXRlJyk7XG5cdFx0XHRjb25zdCBidXR0b25zID0gVUkuY3JlYXRlRWxlbWVudCgnZGl2JywgeyBjbGFzczogJ2J1dHRvbnMnIH0sIGRyYWdCdXR0b24sIGVkaXRCdXR0b24sIGRlbGV0ZUJ1dHRvbik7XG5cdFx0XHRyZXR1cm4gYnV0dG9ucztcblx0XHR9XG5cdFx0Y29uc3QgbmFtZSA9IFVJLmNyZWF0ZUVsZW1lbnQoJ3AnLCB7IGNsYXNzOiAnbmFtZScgfSwgcHJvamVjdC5uYW1lKTtcblx0XHRjb25zdCB0YXNrcyA9IFVJLmNyZWF0ZUVsZW1lbnQoJ3AnLCB7IGNsYXNzOiAndGFza3MnIH0sIGAke3Byb2plY3QudGFza3MubGVuZ3RofSB0YXNrc2ApO1xuXHRcdGNvbnN0IGNvbnRhaW5lciA9IFVJLmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3M6ICdjb250YWluZXInIH0sIG5hbWUsIHRhc2tzKTtcblx0XHRjb25zdCBib3ggPSBVSS5jcmVhdGVFbGVtZW50KCdkaXYnLCB7IGNsYXNzOiAnYm94JyB9LCBjb250YWluZXIsIHByb2plY3QubmFtZSA9PT0gJ0FsbCB0YXNrcycgPyBudWxsIDogY3JlYXRlQnV0dG9ucygpKVxuXHRcdGNvbnN0IHByb2plY3RFbGVtZW50ID0gVUkuY3JlYXRlRWxlbWVudCgnZGl2JywgeyBjbGFzczogJ3Byb2plY3QnIH0sIGJveCk7XG5cdFx0cHJvamVjdEVsZW1lbnQuaWQgPSBwcm9qZWN0Lm5hbWUucmVwbGFjZSgvXFxzL2csICctJyk7XG5cdFx0VUkucHJvamVjdHMuYXBwZW5kQ2hpbGQocHJvamVjdEVsZW1lbnQpO1xuXHR9XG5cblx0c3RhdGljIHNob3dQcm9qZWN0Rm9ybShwcm9qZWN0SWQgPSAnJykge1xuXHRcdGlmIChwcm9qZWN0SWQpIHtcblx0XHRcdGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtwcm9qZWN0SWR9YCk7XG5cdFx0XHRVSS5wcm9qZWN0cy5pbnNlcnRCZWZvcmUoVUkucHJvamVjdEZvcm0sIHByb2plY3QpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRVSS5wcm9qZWN0cy5hcHBlbmRDaGlsZChVSS5wcm9qZWN0Rm9ybSk7XG5cdFx0fVxuXHRcdGNvbnN0IGZvcm0gPSBVSS5wcm9qZWN0Rm9ybS5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XG5cdFx0Y29uc3QgZm9ybUlucHV0ID0gVUkucHJvamVjdEZvcm0ucXVlcnlTZWxlY3RvcignaW5wdXQnKTtcblx0XHRmb3JtLmlkID0gcHJvamVjdElkO1xuXHRcdFVJLnByb2plY3RGb3JtLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXHRcdGZvcm1JbnB1dC5mb2N1cygpO1xuXHR9XG5cblx0c3RhdGljIGhpZGVQcm9qZWN0Rm9ybSgpIHtcblx0XHRjb25zdCBmb3JtID0gVUkucHJvamVjdEZvcm0ucXVlcnlTZWxlY3RvcignZm9ybScpO1xuXHRcdGZvcm0ucmVzZXQoKTtcblx0XHRVSS5wcm9qZWN0Rm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFVJLnByb2plY3RzLmluc2VydEJlZm9yZShVSS5wcm9qZWN0Rm9ybSwgVUkucHJvamVjdHMuZmlyc3RFbGVtZW50Q2hpbGQpO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFVJO1xuIiwiaW1wb3J0IFByb2plY3QgZnJvbSAnLi9wcm9qZWN0LmpzJztcbmltcG9ydCBUb2RvTGlzdCBmcm9tICcuL3RvZG9MaXN0LmpzJztcbmltcG9ydCBVSSBmcm9tICcuL1VJLmpzJztcblxuY2xhc3MgRXZlbnRzIHtcblx0c3RhdGljIGFkZFByb2plY3QoZSkge1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRjb25zdCBwcm9qZWN0TmFtZSA9IGUudGFyZ2V0WzBdLnZhbHVlLnRyaW0oKTtcblx0XHRpZiAoIVRvZG9MaXN0LmNvbnRhaW5zKHByb2plY3ROYW1lKSAmJiBwcm9qZWN0TmFtZSAhPT0gJ0FsbCB0YXNrcycpIHtcblx0XHRcdGNvbnN0IHByb2plY3QgPSBuZXcgUHJvamVjdChwcm9qZWN0TmFtZSk7XG5cdFx0XHRUb2RvTGlzdC5hZGRQcm9qZWN0KHByb2plY3QpO1xuXHRcdFx0VUkuYXBwZW5kUHJvamVjdChwcm9qZWN0KTtcblx0XHRcdFVJLmhpZGVQcm9qZWN0Rm9ybSgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRhbGVydChgUHJvamVjdCBcIiR7cHJvamVjdE5hbWV9XCIgYWxyZWFkeSBleGlzdHMuYCk7XG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50cztcbiIsImNsYXNzIFByb2plY3Qge1xuXHQjbmFtZTtcblx0I3Rhc2tzO1xuXG5cdGNvbnN0cnVjdG9yKG5hbWUpIHtcblx0XHR0aGlzLiNuYW1lID0gbmFtZTtcblx0XHR0aGlzLiN0YXNrcyA9IFtdO1xuXHR9XG5cblx0Z2V0IG5hbWUoKSB7IHJldHVybiB0aGlzLiNuYW1lOyB9XG5cdHNldCBuYW1lKG5hbWUpIHsgdGhpcy4jbmFtZSA9IG5hbWU7IH1cblxuXHRnZXQgdGFza3MoKSB7IHJldHVybiB0aGlzLiN0YXNrczsgfVxuXHRzZXQgdGFza3ModGFza3MpIHsgdGhpcy4jdGFza3MgPSB0YXNrczsgfVxuXG5cdGNvbnRhaW5zKHRhc2tOYW1lKSB7XG5cdFx0cmV0dXJuIHRoaXMuI3Rhc2tzLnNvbWUodGFzayA9PiB0YXNrLm5hbWUgPT09IHRhc2tOYW1lKTtcblx0fVxuXHRnZXRUYXNrKHRhc2tOYW1lKSB7XG5cdFx0cmV0dXJuIHRoaXMuI3Rhc2tzLmZpbmQodGFzayA9PiB0YXNrLm5hbWUgPT09IHRhc2tOYW1lKTtcblx0fVxuXHRhZGRUYXNrKHRhc2spIHtcblx0XHRpZiAoIXRoaXMuY29udGFpbnModGFzay5uYW1lKSkge1xuXHRcdFx0dGhpcy4jdGFza3MucHVzaCh0YXNrKTtcblx0XHR9XG5cdH1cblx0ZGVsZXRlVGFzayh0YXNrTmFtZSkge1xuXHRcdHRoaXMuI3Rhc2tzID0gdGhpcy4jdGFza3MuZmlsdGVyKHRhc2sgPT4gdGFzay5uYW1lICE9PSB0YXNrTmFtZSk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdDtcbiIsImNsYXNzIFRvZG9MaXN0IHtcblx0c3RhdGljIHByb2plY3RzID0gW107XG5cblx0c3RhdGljIGNvbnRhaW5zKHByb2plY3ROYW1lKSB7XG5cdFx0cmV0dXJuIFRvZG9MaXN0LnByb2plY3RzLnNvbWUocHJvamVjdCA9PiBwcm9qZWN0Lm5hbWUgPT09IHByb2plY3ROYW1lKTtcblx0fVxuXHRzdGF0aWMgZ2V0UHJvamVjdChwcm9qZWN0TmFtZSkge1xuXHRcdHJldHVybiBUb2RvTGlzdC5wcm9qZWN0cy5maW5kKHByb2plY3QgPT4gcHJvamVjdC5uYW1lID09PSBwcm9qZWN0TmFtZSk7XG5cdH1cblx0c3RhdGljIGFkZFByb2plY3QocHJvamVjdCkge1xuXHRcdGlmICghVG9kb0xpc3QuY29udGFpbnMocHJvamVjdC5uYW1lKSkge1xuXHRcdFx0VG9kb0xpc3QucHJvamVjdHMucHVzaChwcm9qZWN0KTtcblx0XHR9XG5cdH1cblx0c3RhdGljIGRlbGV0ZVByb2plY3QocHJvamVjdE5hbWUpIHtcblx0XHRUb2RvTGlzdC5wcm9qZWN0cyA9IFRvZG9MaXN0LnByb2plY3RzLmZpbHRlcihwcm9qZWN0ID0+IHByb2plY3QubmFtZSAhPT0gcHJvamVjdE5hbWUpO1xuXHR9XG5cdHN0YXRpYyBnZXRUb3RhbFRhc2tzKCkge1xuXHRcdHJldHVybiBUb2RvTGlzdC5wcm9qZWN0cy5yZWR1Y2UoKHRvdGFsLCBwcm9qZWN0KSA9PiB0b3RhbCArIHByb2plY3QudGFza3MubGVuZ3RoLCAwKTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBUb2RvTGlzdDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJ1xuaW1wb3J0IFVJIGZyb20gJy4vVUkuanMnXG5cblVJLmxvYWRIb21lUGFnZSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9