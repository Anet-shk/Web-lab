/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url);

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }

  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }

  return url;
};

/***/ }),

/***/ "./Photo/1.jpg":
/*!*********************!*\
  !*** ./Photo/1.jpg ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0bac38a86dd46b9fed6d.jpg";

/***/ }),

/***/ "./Photo/2.jpeg":
/*!**********************!*\
  !*** ./Photo/2.jpeg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8047a8cffecef9dee4e4.jpeg";

/***/ }),

/***/ "./Photo/x-mark-close.svg":
/*!********************************!*\
  !*** ./Photo/x-mark-close.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3c99a89c49ce32f88a3b.svg";

/***/ }),

/***/ "./styles/index.css":
/*!**************************!*\
  !*** ./styles/index.css ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4e0bb5dbaec7a4cef225.css";

/***/ }),

/***/ "./scripts/index.js":
/*!**************************!*\
  !*** ./scripts/index.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2e9b7e261bcecd83a566.js";

/***/ }),

/***/ "./scripts/workWithUi.js":
/*!*******************************!*\
  !*** ./scripts/workWithUi.js ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7bf935b5d5c806eb5fbd.js";

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
/******/ 			// no module.id needed
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./index.html ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/html-loader/dist/runtime/getUrl.js */ "./node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./styles/index.css */ "./styles/index.css"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./scripts/index.js */ "./scripts/index.js"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./scripts/workWithUi.js */ "./scripts/workWithUi.js"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./Photo/1.jpg */ "./Photo/1.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./Photo/2.jpeg */ "./Photo/2.jpeg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./Photo/x-mark-close.svg */ "./Photo/x-mark-close.svg"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);
var ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);
var code = "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <title>Document</title>\n    <link rel=\"stylesheet\" href=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" />\n    <" + "script src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" type=\"module\" defer><" + "/script>\n    <" + "script src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" type=\"module\" defer><" + "/script>\n  </head>\n  <body>\n    <header>\n      <div class=\"topHeader\">\n        <h1 class=\"logo\">Teachinder</h1>\n        <input\n          class=\"searchInput\"\n          type=\"text\"\n          placeholder=\"Name, note or age to search\" />\n        <button class=\"searchButton\">Search</button>\n      </div>\n      <div class=\"bottomHeader\">\n        <nav>\n          <ul>\n            <li><a href=\"#teachers\"> Teachers </a></li>\n            <li><a href=\"#statistics\"> Statistics </a></li>\n            <li><a href=\"#favorites\"> Favorites </a></li>\n            <li><a href=\"#about\"> About </a></li>\n          </ul>\n        </nav>\n        <button class=\"addTeacherButton\">Add teacher</button>\n      </div>\n    </header>\n    <main>\n      <section class=\"topTeachersSection\">\n        <h2 id=\"teachers\" class=\"sectionHeaders\">Top Teachers</h2>\n        <ul>\n          <li class=\"teachersCard\">\n            <short-profile data-bgColor=\"blue\">\n              <span class=\"teacherCardPhoto\" slot=\"photo\"\n                ><div>\n                  <img\n                    alt=\"Photo\"\n                    title=\"profile picture\"\n                    src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" /></div\n              ></span>\n              <span class=\"teacherCardName\" slot=\"name\">Floor Jansen</span>\n              <span slot=\"details\" id=\"temporaryShortProfile\">Докладніше</span>\n            </short-profile>\n          </li>\n          <li class=\"teachersCard\">\n            <short-profile data-bgColor=\"blue\">\n              <span class=\"teacherCardPhoto\" slot=\"photo\"\n                ><div>\n                  <img\n                    alt=\"Photo\"\n                    title=\"profile picture\"\n                    src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" /></div\n              ></span>\n              <span class=\"teacherCardName\" slot=\"name\">Ihor Tkachuk</span>\n              <span slot=\"details\"><a href=\"google.com\">Докладніше</a></span>\n            </short-profile>\n          </li>\n        </ul>\n      </section>\n      <section class=\"statisticsSection\">\n        <h2 id=\"statistics\" class=\"sectionHeaders\">Statistics</h2>\n        <table>\n          <tr>\n            <td width=\"10px\" height=\"10px\">Ім'я</td>\n            <td width=\"10px\" height=\"10px\">Вік</td>\n            <td width=\"10px\" height=\"10px\">Стать</td>\n            <td width=\"10px\" height=\"10px\">Країна</td>\n          </tr>\n          <!-- <tr>\n                    <td width=\"10px\" height=\"10px\">0</td>\n                    <td width=\"10px\" height=\"10px\">gender</td>\n                    <td width=\"10px\" height=\"10px\">country</td>\n                </tr> -->\n        </table>\n      </section>\n      <section class=\"favoritesSection\">\n        <h2 id=\"favorites\" class=\"sectionHeaders\">Favorites</h2>\n        <ul>\n          <li class=\"teachersCard\">\n            <short-profile data-bgColor=\"blue\">\n              <span class=\"teacherCardPhoto\" slot=\"photo\"\n                ><div>\n                  <img\n                    alt=\"Photo\"\n                    title=\"profile picture\"\n                    src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" /></div\n              ></span>\n              <span class=\"teacherCardName\" slot=\"name\">Floor Jansen</span>\n              <span slot=\"details\"><a href=\"google.com\">Докладніше</a></span>\n            </short-profile>\n          </li>\n        </ul>\n      </section>\n      <h2 id=\"favorites\" class=\"sectionHeaders\"></h2>\n    </main>\n    <footer>\n      <p>\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A atque\n        facere, hic impedit itaque molestiae sit tempore? Ea in mollitia natus\n        rerum voluptates. Ea ex excepturi facere tempora. Aliquid asperiores hic\n        impedit iusto natus quaerat ratione sit? Culpa iusto optio voluptas\n        voluptate. Enim eveniet fugit lure malores molestiae, praesentium quia.\n      </p>\n      <p>\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam\n        eligendi illum in inventore ipsum odio officiis omnis quisquam sed\n        tempora?\n      </p>\n      <p>\n        Lorem Ipsum dolor sit amet, consectetur adipisicing elit. A atque esse\n        expedita id lusto mollitia, odit sint ullam veritatis vero?\n      </p>\n      <div class=\"footerNav\">\n        <ul>\n          <li><a href=\"#teachers\"> Teachers </a></li>\n          <li><a href=\"#statistics\"> Statistics </a></li>\n          <li><a href=\"#favorites\"> Favorites </a></li>\n          <li><a href=\"#about\"> About </a></li>\n        </ul>\n        <button class=\"addTeacherButton\">Add teacher</button>\n      </div>\n    </footer>\n\n    <!-- modal windows -->\n    <div id=\"darkCover\" class=\"disabledView\"></div>\n    <div id=\"addTeacher\" class=\"modalWindow disabledView addTeacher\">\n      <div class=\"formHeader\">\n        <div class=\"textFormHeader\">Add teacher</div>\n        <div class=\"closeBlockFormHeader\">\n          <img\n            src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\"\n            alt=\"close modal window\"\n            title=\"x-mark close icon\" />\n        </div>\n      </div>\n      <form>\n        <label for=\"name\">Повне ім’я:</label>\n        <input type=\"text\" id=\"name\" />\n        <span class=\"genderSpan\">\n          <label class=\"genderGeneral\">Стать</label>\n          <label for=\"woman\">Жінка</label>\n          <input type=\"radio\" id=\"woman\" name=\"gender\" />\n          <label for=\"man\">Чоловік</label>\n          <input type=\"radio\" id=\"man\" name=\"gender\" />\n        </span>\n        <span class=\"pairFlexSpan\">\n          <span class=\"fourElGroupSpan\">\n            <span class=\"pairGroupSpan\">\n              <label for=\"email\">Email:</label>\n              <input type=\"email\" id=\"email\" />\n            </span>\n            <span class=\"pairGroupSpan\">\n              <label for=\"tel\">Телефон:</label>\n              <input type=\"tel\" id=\"tel\" />\n            </span>\n          </span>\n          <span class=\"fourElGroupSpan\">\n            <span class=\"pairGroupSpan\">\n              <label for=\"country\">Країна:</label>\n              <input type=\"text\" id=\"country\" />\n            </span>\n            <span class=\"pairGroupSpan\">\n              <label for=\"town\">Місто:</label>\n              <input type=\"text\" id=\"town\" />\n            </span>\n          </span>\n        </span>\n        <label for=\"date\">Дата народження:</label>\n        <input type=\"date\" id=\"date\" />\n        <label for=\"fon\">Бажаний колір фону:</label>\n        <input type=\"color\" id=\"fon\" />\n        <label for=\"comment\">Коментар:</label>\n        <textarea id=\"comment\" name=\"w3review\" rows=\"4\" cols=\"50\"></textarea>\n        <input\n          type=\"submit\"\n          name=\"SubmitButton\"\n          id=\"submitButton\"\n          value=\"Add\" />\n      </form>\n    </div>\n\n    <div id=\"full-profile1\" class=\"modalWindow disabledView fullProfile\">\n      <div class=\"formHeader\">\n        <div class=\"textFormHeader\">Add teacher</div>\n        <div class=\"closeBlockFormHeader\">\n          <img\n            src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\"\n            alt=\"close modal window\"\n            title=\"x-mark close icon\" />\n        </div>\n      </div>\n      <full-profile data-bgColor=\"blue\">\n        <span slot=\"photo\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" /></span>\n        <span slot=\"name\">Floor Jansen</span>\n        <span slot=\"gender\">woman</span>\n        <span slot=\"old\">29</span>\n        <span slot=\"email\"\n          ><a href=\"floorjan@gmail.com\">floorjan@gmail.com</a></span\n        >\n        <span slot=\"tel\"><a href=\"tel:+380123456789\">+380123456789</a></span>\n        <span slot=\"country\">Ukraine</span>\n        <span slot=\"town\">Kyiv</span>\n        <span slot=\"comment\">Alright</span>\n        <span slot=\"map\"><a href=\"https://google.com\">google</a></span>\n      </full-profile>\n    </div>\n\n    <div id=\"full-profile2\" style=\"display: none\">\n      <full-profile data-bgColor=\"yellow\">\n        <span slot=\"photo\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" /></span>\n        <span slot=\"name\">Ihor Tkachuk</span>\n        <span slot=\"gender\">man</span>\n        <span slot=\"old\">32</span>\n        <span slot=\"email\">ihortkach@gmail.com</span>\n        <span slot=\"tel\"><a href=\"tel:+380123456789\">+380123456789</a></span>\n        <span slot=\"country\">Ukraine</span>\n        <span slot=\"town\">Kyiv</span>\n        <span slot=\"comment\">ok</span>\n        <span slot=\"map\"><a href=\"https://google.com\">google</a></span>\n      </full-profile>\n    </div>\n\n    <!-- template with scripts -->\n    <template id=\"shortProfileTemplate\">\n      <p>\n        <slot name=\"photo\"></slot>\n      </p>\n      <p>\n        <slot name=\"name\"></slot>\n      </p>\n      <p>\n        <slot name=\"details\"></slot>\n      </p>\n    </template>\n\n    <" + "script>\n      customElements.define(\n        'short-profile',\n        class extends HTMLElement {\n          constructor() {\n            super();\n\n            const shortProfileTemplate = document.getElementById(\n              'shortProfileTemplate'\n            );\n\n            const shortProfile = shortProfileTemplate.content;\n\n            const shadowRoot = this.attachShadow({ mode: 'open' }).appendChild(\n              shortProfile.cloneNode(true)\n            );\n          }\n        }\n      );\n    <" + "/script>\n\n    <template id=\"fullProfileTemplate\">\n      <style>\n        .firstP {\n          margin-top: 0px;\n          padding-top: 10px;\n        }\n        p {\n          margin: 10px 0px;\n        }\n        .map {\n          padding-left: 15px;\n          margin: 0px 0px 10px 0px;\n        }\n      </style>\n      <slot name=\"photo\"></slot>\n      <p class=\"firstP\"><slot name=\"name\"></slot></p>\n      <p><slot name=\"gender\"></slot></p>\n      <p><slot name=\"old\"></slot></p>\n      <p><slot name=\"email\"></slot></p>\n      <p><slot name=\"tel\"></slot></p>\n      <p><slot name=\"country\"></slot></p>\n      <p><slot name=\"town\"></slot></p>\n      <p><slot name=\"comment\"></slot></p>\n      <br />\n      <p class=\"map\"><slot name=\"map\"></slot></p>\n    </template>\n    <" + "script>\n      customElements.define(\n        'full-profile',\n        class extends HTMLElement {\n          // Наследование обеспечивает, что мы имеет свойства и методы по умолчанию встроенного HTML элемента\n\n          // Вызывается всякий раз, когда создается новый элемент\n          constructor() {\n            // Вызываем родительский конструктор, т.е конструктор для HTMLElement. Таким образом устанавливаются свойства базового HTML элемента.\n            super();\n\n            // Берет <template> и хранит его в переменной `warinng`\n            const fullProfileTemplate = document.getElementById(\n              'fullProfileTemplate'\n            );\n\n            // Хранит контент шаблона в переменной `mywarning`\n            const fullProfile = fullProfileTemplate.content;\n\n            const shadowRoot = this.attachShadow({ mode: 'open' }).appendChild(\n              fullProfile.cloneNode(true)\n            );\n          }\n        }\n      );\n    <" + "/script>\n  </body>\n</html>\n";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDekJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCQTtBQUN5RztBQUN6Ryx5Q0FBeUMsNkdBQXFDO0FBQzlFLHlDQUF5Qyw2R0FBcUM7QUFDOUUseUNBQXlDLHVIQUEwQztBQUNuRix5Q0FBeUMsbUdBQWdDO0FBQ3pFLHlDQUF5QyxxR0FBaUM7QUFDMUUseUNBQXlDLHlIQUEyQztBQUNwRjtBQUNBLHNDQUFzQyx1RkFBd0M7QUFDOUUsc0NBQXNDLHVGQUF3QztBQUM5RSxzQ0FBc0MsdUZBQXdDO0FBQzlFLHNDQUFzQyx1RkFBd0M7QUFDOUUsc0NBQXNDLHVGQUF3QztBQUM5RSxzQ0FBc0MsdUZBQXdDO0FBQzlFLHlrVEFBeWtULDJCQUEyQixzQkFBc0IsMkhBQTJILGtFQUFrRSx1REFBdUQsY0FBYywwRUFBMEUsYUFBYSxXQUFXLFVBQVUsbUdBQW1HLDRCQUE0Qiw4QkFBOEIsV0FBVyxhQUFhLDZCQUE2QixXQUFXLGdCQUFnQiwrQkFBK0IscUNBQXFDLFdBQVcsaW1CQUFpbUIsK01BQStNLHlLQUF5Syw4TEFBOEwsZ0lBQWdJLHVEQUF1RCxjQUFjLHlFQUF5RSxhQUFhLFdBQVcsVUFBVTtBQUMzdVg7QUFDQSxpRUFBZSxJQUFJLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sYWIzLy4vbm9kZV9tb2R1bGVzL2h0bWwtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vbGFiMy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9sYWIzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2xhYjMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2xhYjMvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9sYWIzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbGFiMy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2xhYjMvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vbGFiMy93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9sYWIzLy4vaW5kZXguaHRtbCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGUsIG5vLXBhcmFtLXJlYXNzaWduXG5cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICBpZiAob3B0aW9ucy5tYXliZU5lZWRRdW90ZXMgJiYgL1tcXHRcXG5cXGZcXHIgXCInPTw+YF0vLnRlc3QodXJsKSkge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyBmcm9tIFwiLi9ub2RlX21vZHVsZXMvaHRtbC1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vc3R5bGVzL2luZGV4LmNzc1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vc2NyaXB0cy9pbmRleC5qc1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vc2NyaXB0cy93b3JrV2l0aFVpLmpzXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi9QaG90by8xLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF80X19fID0gbmV3IFVSTChcIi4vUGhvdG8vMi5qcGVnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzVfX18gPSBuZXcgVVJMKFwiLi9QaG90by94LW1hcmstY2xvc2Uuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG4vLyBNb2R1bGVcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8wX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMF9fXyk7XG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzFfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzJfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF8yX19fKTtcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8zX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfM19fXyk7XG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzRfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzVfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF81X19fKTtcbnZhciBjb2RlID0gXCI8IURPQ1RZUEUgaHRtbD5cXG48aHRtbCBsYW5nPVxcXCJlblxcXCI+XFxuICA8aGVhZD5cXG4gICAgPG1ldGEgY2hhcnNldD1cXFwiVVRGLThcXFwiIC8+XFxuICAgIDxtZXRhIG5hbWU9XFxcInZpZXdwb3J0XFxcIiBjb250ZW50PVxcXCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXFxcIiAvPlxcbiAgICA8dGl0bGU+RG9jdW1lbnQ8L3RpdGxlPlxcbiAgICA8bGluayByZWw9XFxcInN0eWxlc2hlZXRcXFwiIGhyZWY9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMF9fXyArIFwiXFxcIiAvPlxcbiAgICA8XCIgKyBcInNjcmlwdCBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMV9fXyArIFwiXFxcIiB0eXBlPVxcXCJtb2R1bGVcXFwiIGRlZmVyPjxcIiArIFwiL3NjcmlwdD5cXG4gICAgPFwiICsgXCJzY3JpcHQgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzJfX18gKyBcIlxcXCIgdHlwZT1cXFwibW9kdWxlXFxcIiBkZWZlcj48XCIgKyBcIi9zY3JpcHQ+XFxuICA8L2hlYWQ+XFxuICA8Ym9keT5cXG4gICAgPGhlYWRlcj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJ0b3BIZWFkZXJcXFwiPlxcbiAgICAgICAgPGgxIGNsYXNzPVxcXCJsb2dvXFxcIj5UZWFjaGluZGVyPC9oMT5cXG4gICAgICAgIDxpbnB1dFxcbiAgICAgICAgICBjbGFzcz1cXFwic2VhcmNoSW5wdXRcXFwiXFxuICAgICAgICAgIHR5cGU9XFxcInRleHRcXFwiXFxuICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCJOYW1lLCBub3RlIG9yIGFnZSB0byBzZWFyY2hcXFwiIC8+XFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJzZWFyY2hCdXR0b25cXFwiPlNlYXJjaDwvYnV0dG9uPlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImJvdHRvbUhlYWRlclxcXCI+XFxuICAgICAgICA8bmF2PlxcbiAgICAgICAgICA8dWw+XFxuICAgICAgICAgICAgPGxpPjxhIGhyZWY9XFxcIiN0ZWFjaGVyc1xcXCI+IFRlYWNoZXJzIDwvYT48L2xpPlxcbiAgICAgICAgICAgIDxsaT48YSBocmVmPVxcXCIjc3RhdGlzdGljc1xcXCI+IFN0YXRpc3RpY3MgPC9hPjwvbGk+XFxuICAgICAgICAgICAgPGxpPjxhIGhyZWY9XFxcIiNmYXZvcml0ZXNcXFwiPiBGYXZvcml0ZXMgPC9hPjwvbGk+XFxuICAgICAgICAgICAgPGxpPjxhIGhyZWY9XFxcIiNhYm91dFxcXCI+IEFib3V0IDwvYT48L2xpPlxcbiAgICAgICAgICA8L3VsPlxcbiAgICAgICAgPC9uYXY+XFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJhZGRUZWFjaGVyQnV0dG9uXFxcIj5BZGQgdGVhY2hlcjwvYnV0dG9uPlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2hlYWRlcj5cXG4gICAgPG1haW4+XFxuICAgICAgPHNlY3Rpb24gY2xhc3M9XFxcInRvcFRlYWNoZXJzU2VjdGlvblxcXCI+XFxuICAgICAgICA8aDIgaWQ9XFxcInRlYWNoZXJzXFxcIiBjbGFzcz1cXFwic2VjdGlvbkhlYWRlcnNcXFwiPlRvcCBUZWFjaGVyczwvaDI+XFxuICAgICAgICA8dWw+XFxuICAgICAgICAgIDxsaSBjbGFzcz1cXFwidGVhY2hlcnNDYXJkXFxcIj5cXG4gICAgICAgICAgICA8c2hvcnQtcHJvZmlsZSBkYXRhLWJnQ29sb3I9XFxcImJsdWVcXFwiPlxcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcInRlYWNoZXJDYXJkUGhvdG9cXFwiIHNsb3Q9XFxcInBob3RvXFxcIlxcbiAgICAgICAgICAgICAgICA+PGRpdj5cXG4gICAgICAgICAgICAgICAgICA8aW1nXFxuICAgICAgICAgICAgICAgICAgICBhbHQ9XFxcIlBob3RvXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XFxcInByb2ZpbGUgcGljdHVyZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8zX19fICsgXCJcXFwiIC8+PC9kaXZcXG4gICAgICAgICAgICAgID48L3NwYW4+XFxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwidGVhY2hlckNhcmROYW1lXFxcIiBzbG90PVxcXCJuYW1lXFxcIj5GbG9vciBKYW5zZW48L3NwYW4+XFxuICAgICAgICAgICAgICA8c3BhbiBzbG90PVxcXCJkZXRhaWxzXFxcIiBpZD1cXFwidGVtcG9yYXJ5U2hvcnRQcm9maWxlXFxcIj7QlNC+0LrQu9Cw0LTQvdGW0YjQtTwvc3Bhbj5cXG4gICAgICAgICAgICA8L3Nob3J0LXByb2ZpbGU+XFxuICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgIDxsaSBjbGFzcz1cXFwidGVhY2hlcnNDYXJkXFxcIj5cXG4gICAgICAgICAgICA8c2hvcnQtcHJvZmlsZSBkYXRhLWJnQ29sb3I9XFxcImJsdWVcXFwiPlxcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcInRlYWNoZXJDYXJkUGhvdG9cXFwiIHNsb3Q9XFxcInBob3RvXFxcIlxcbiAgICAgICAgICAgICAgICA+PGRpdj5cXG4gICAgICAgICAgICAgICAgICA8aW1nXFxuICAgICAgICAgICAgICAgICAgICBhbHQ9XFxcIlBob3RvXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XFxcInByb2ZpbGUgcGljdHVyZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF80X19fICsgXCJcXFwiIC8+PC9kaXZcXG4gICAgICAgICAgICAgID48L3NwYW4+XFxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwidGVhY2hlckNhcmROYW1lXFxcIiBzbG90PVxcXCJuYW1lXFxcIj5JaG9yIFRrYWNodWs8L3NwYW4+XFxuICAgICAgICAgICAgICA8c3BhbiBzbG90PVxcXCJkZXRhaWxzXFxcIj48YSBocmVmPVxcXCJnb29nbGUuY29tXFxcIj7QlNC+0LrQu9Cw0LTQvdGW0YjQtTwvYT48L3NwYW4+XFxuICAgICAgICAgICAgPC9zaG9ydC1wcm9maWxlPlxcbiAgICAgICAgICA8L2xpPlxcbiAgICAgICAgPC91bD5cXG4gICAgICA8L3NlY3Rpb24+XFxuICAgICAgPHNlY3Rpb24gY2xhc3M9XFxcInN0YXRpc3RpY3NTZWN0aW9uXFxcIj5cXG4gICAgICAgIDxoMiBpZD1cXFwic3RhdGlzdGljc1xcXCIgY2xhc3M9XFxcInNlY3Rpb25IZWFkZXJzXFxcIj5TdGF0aXN0aWNzPC9oMj5cXG4gICAgICAgIDx0YWJsZT5cXG4gICAgICAgICAgPHRyPlxcbiAgICAgICAgICAgIDx0ZCB3aWR0aD1cXFwiMTBweFxcXCIgaGVpZ2h0PVxcXCIxMHB4XFxcIj7QhtC8J9GPPC90ZD5cXG4gICAgICAgICAgICA8dGQgd2lkdGg9XFxcIjEwcHhcXFwiIGhlaWdodD1cXFwiMTBweFxcXCI+0JLRltC6PC90ZD5cXG4gICAgICAgICAgICA8dGQgd2lkdGg9XFxcIjEwcHhcXFwiIGhlaWdodD1cXFwiMTBweFxcXCI+0KHRgtCw0YLRjDwvdGQ+XFxuICAgICAgICAgICAgPHRkIHdpZHRoPVxcXCIxMHB4XFxcIiBoZWlnaHQ9XFxcIjEwcHhcXFwiPtCa0YDQsNGX0L3QsDwvdGQ+XFxuICAgICAgICAgIDwvdHI+XFxuICAgICAgICAgIDwhLS0gPHRyPlxcbiAgICAgICAgICAgICAgICAgICAgPHRkIHdpZHRoPVxcXCIxMHB4XFxcIiBoZWlnaHQ9XFxcIjEwcHhcXFwiPjA8L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgPHRkIHdpZHRoPVxcXCIxMHB4XFxcIiBoZWlnaHQ9XFxcIjEwcHhcXFwiPmdlbmRlcjwvdGQ+XFxuICAgICAgICAgICAgICAgICAgICA8dGQgd2lkdGg9XFxcIjEwcHhcXFwiIGhlaWdodD1cXFwiMTBweFxcXCI+Y291bnRyeTwvdGQ+XFxuICAgICAgICAgICAgICAgIDwvdHI+IC0tPlxcbiAgICAgICAgPC90YWJsZT5cXG4gICAgICA8L3NlY3Rpb24+XFxuICAgICAgPHNlY3Rpb24gY2xhc3M9XFxcImZhdm9yaXRlc1NlY3Rpb25cXFwiPlxcbiAgICAgICAgPGgyIGlkPVxcXCJmYXZvcml0ZXNcXFwiIGNsYXNzPVxcXCJzZWN0aW9uSGVhZGVyc1xcXCI+RmF2b3JpdGVzPC9oMj5cXG4gICAgICAgIDx1bD5cXG4gICAgICAgICAgPGxpIGNsYXNzPVxcXCJ0ZWFjaGVyc0NhcmRcXFwiPlxcbiAgICAgICAgICAgIDxzaG9ydC1wcm9maWxlIGRhdGEtYmdDb2xvcj1cXFwiYmx1ZVxcXCI+XFxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwidGVhY2hlckNhcmRQaG90b1xcXCIgc2xvdD1cXFwicGhvdG9cXFwiXFxuICAgICAgICAgICAgICAgID48ZGl2PlxcbiAgICAgICAgICAgICAgICAgIDxpbWdcXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cXFwiUGhvdG9cXFwiXFxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cXFwicHJvZmlsZSBwaWN0dXJlXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzNfX18gKyBcIlxcXCIgLz48L2RpdlxcbiAgICAgICAgICAgICAgPjwvc3Bhbj5cXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJ0ZWFjaGVyQ2FyZE5hbWVcXFwiIHNsb3Q9XFxcIm5hbWVcXFwiPkZsb29yIEphbnNlbjwvc3Bhbj5cXG4gICAgICAgICAgICAgIDxzcGFuIHNsb3Q9XFxcImRldGFpbHNcXFwiPjxhIGhyZWY9XFxcImdvb2dsZS5jb21cXFwiPtCU0L7QutC70LDQtNC90ZbRiNC1PC9hPjwvc3Bhbj5cXG4gICAgICAgICAgICA8L3Nob3J0LXByb2ZpbGU+XFxuICAgICAgICAgIDwvbGk+XFxuICAgICAgICA8L3VsPlxcbiAgICAgIDwvc2VjdGlvbj5cXG4gICAgICA8aDIgaWQ9XFxcImZhdm9yaXRlc1xcXCIgY2xhc3M9XFxcInNlY3Rpb25IZWFkZXJzXFxcIj48L2gyPlxcbiAgICA8L21haW4+XFxuICAgIDxmb290ZXI+XFxuICAgICAgPHA+XFxuICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gQSBhdHF1ZVxcbiAgICAgICAgZmFjZXJlLCBoaWMgaW1wZWRpdCBpdGFxdWUgbW9sZXN0aWFlIHNpdCB0ZW1wb3JlPyBFYSBpbiBtb2xsaXRpYSBuYXR1c1xcbiAgICAgICAgcmVydW0gdm9sdXB0YXRlcy4gRWEgZXggZXhjZXB0dXJpIGZhY2VyZSB0ZW1wb3JhLiBBbGlxdWlkIGFzcGVyaW9yZXMgaGljXFxuICAgICAgICBpbXBlZGl0IGl1c3RvIG5hdHVzIHF1YWVyYXQgcmF0aW9uZSBzaXQ/IEN1bHBhIGl1c3RvIG9wdGlvIHZvbHVwdGFzXFxuICAgICAgICB2b2x1cHRhdGUuIEVuaW0gZXZlbmlldCBmdWdpdCBsdXJlIG1hbG9yZXMgbW9sZXN0aWFlLCBwcmFlc2VudGl1bSBxdWlhLlxcbiAgICAgIDwvcD5cXG4gICAgICA8cD5cXG4gICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBBbGlxdWFtXFxuICAgICAgICBlbGlnZW5kaSBpbGx1bSBpbiBpbnZlbnRvcmUgaXBzdW0gb2RpbyBvZmZpY2lpcyBvbW5pcyBxdWlzcXVhbSBzZWRcXG4gICAgICAgIHRlbXBvcmE/XFxuICAgICAgPC9wPlxcbiAgICAgIDxwPlxcbiAgICAgICAgTG9yZW0gSXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEEgYXRxdWUgZXNzZVxcbiAgICAgICAgZXhwZWRpdGEgaWQgbHVzdG8gbW9sbGl0aWEsIG9kaXQgc2ludCB1bGxhbSB2ZXJpdGF0aXMgdmVybz9cXG4gICAgICA8L3A+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiZm9vdGVyTmF2XFxcIj5cXG4gICAgICAgIDx1bD5cXG4gICAgICAgICAgPGxpPjxhIGhyZWY9XFxcIiN0ZWFjaGVyc1xcXCI+IFRlYWNoZXJzIDwvYT48L2xpPlxcbiAgICAgICAgICA8bGk+PGEgaHJlZj1cXFwiI3N0YXRpc3RpY3NcXFwiPiBTdGF0aXN0aWNzIDwvYT48L2xpPlxcbiAgICAgICAgICA8bGk+PGEgaHJlZj1cXFwiI2Zhdm9yaXRlc1xcXCI+IEZhdm9yaXRlcyA8L2E+PC9saT5cXG4gICAgICAgICAgPGxpPjxhIGhyZWY9XFxcIiNhYm91dFxcXCI+IEFib3V0IDwvYT48L2xpPlxcbiAgICAgICAgPC91bD5cXG4gICAgICAgIDxidXR0b24gY2xhc3M9XFxcImFkZFRlYWNoZXJCdXR0b25cXFwiPkFkZCB0ZWFjaGVyPC9idXR0b24+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZm9vdGVyPlxcblxcbiAgICA8IS0tIG1vZGFsIHdpbmRvd3MgLS0+XFxuICAgIDxkaXYgaWQ9XFxcImRhcmtDb3ZlclxcXCIgY2xhc3M9XFxcImRpc2FibGVkVmlld1xcXCI+PC9kaXY+XFxuICAgIDxkaXYgaWQ9XFxcImFkZFRlYWNoZXJcXFwiIGNsYXNzPVxcXCJtb2RhbFdpbmRvdyBkaXNhYmxlZFZpZXcgYWRkVGVhY2hlclxcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybUhlYWRlclxcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0ZXh0Rm9ybUhlYWRlclxcXCI+QWRkIHRlYWNoZXI8L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNsb3NlQmxvY2tGb3JtSGVhZGVyXFxcIj5cXG4gICAgICAgICAgPGltZ1xcbiAgICAgICAgICAgIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF81X19fICsgXCJcXFwiXFxuICAgICAgICAgICAgYWx0PVxcXCJjbG9zZSBtb2RhbCB3aW5kb3dcXFwiXFxuICAgICAgICAgICAgdGl0bGU9XFxcIngtbWFyayBjbG9zZSBpY29uXFxcIiAvPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPGZvcm0+XFxuICAgICAgICA8bGFiZWwgZm9yPVxcXCJuYW1lXFxcIj7Qn9C+0LLQvdC1INGW0LzigJnRjzo8L2xhYmVsPlxcbiAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGlkPVxcXCJuYW1lXFxcIiAvPlxcbiAgICAgICAgPHNwYW4gY2xhc3M9XFxcImdlbmRlclNwYW5cXFwiPlxcbiAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImdlbmRlckdlbmVyYWxcXFwiPtCh0YLQsNGC0Yw8L2xhYmVsPlxcbiAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJ3b21hblxcXCI+0JbRltC90LrQsDwvbGFiZWw+XFxuICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJyYWRpb1xcXCIgaWQ9XFxcIndvbWFuXFxcIiBuYW1lPVxcXCJnZW5kZXJcXFwiIC8+XFxuICAgICAgICAgIDxsYWJlbCBmb3I9XFxcIm1hblxcXCI+0KfQvtC70L7QstGW0Lo8L2xhYmVsPlxcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwicmFkaW9cXFwiIGlkPVxcXCJtYW5cXFwiIG5hbWU9XFxcImdlbmRlclxcXCIgLz5cXG4gICAgICAgIDwvc3Bhbj5cXG4gICAgICAgIDxzcGFuIGNsYXNzPVxcXCJwYWlyRmxleFNwYW5cXFwiPlxcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZm91ckVsR3JvdXBTcGFuXFxcIj5cXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwicGFpckdyb3VwU3BhblxcXCI+XFxuICAgICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJlbWFpbFxcXCI+RW1haWw6PC9sYWJlbD5cXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJlbWFpbFxcXCIgaWQ9XFxcImVtYWlsXFxcIiAvPlxcbiAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwicGFpckdyb3VwU3BhblxcXCI+XFxuICAgICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJ0ZWxcXFwiPtCi0LXQu9C10YTQvtC9OjwvbGFiZWw+XFxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGVsXFxcIiBpZD1cXFwidGVsXFxcIiAvPlxcbiAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgICAgPC9zcGFuPlxcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZm91ckVsR3JvdXBTcGFuXFxcIj5cXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwicGFpckdyb3VwU3BhblxcXCI+XFxuICAgICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJjb3VudHJ5XFxcIj7QmtGA0LDRl9C90LA6PC9sYWJlbD5cXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBpZD1cXFwiY291bnRyeVxcXCIgLz5cXG4gICAgICAgICAgICA8L3NwYW4+XFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcInBhaXJHcm91cFNwYW5cXFwiPlxcbiAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwidG93blxcXCI+0JzRltGB0YLQvjo8L2xhYmVsPlxcbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGlkPVxcXCJ0b3duXFxcIiAvPlxcbiAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgICAgPC9zcGFuPlxcbiAgICAgICAgPC9zcGFuPlxcbiAgICAgICAgPGxhYmVsIGZvcj1cXFwiZGF0ZVxcXCI+0JTQsNGC0LAg0L3QsNGA0L7QtNC20LXQvdC90Y86PC9sYWJlbD5cXG4gICAgICAgIDxpbnB1dCB0eXBlPVxcXCJkYXRlXFxcIiBpZD1cXFwiZGF0ZVxcXCIgLz5cXG4gICAgICAgIDxsYWJlbCBmb3I9XFxcImZvblxcXCI+0JHQsNC20LDQvdC40Lkg0LrQvtC70ZbRgCDRhNC+0L3Rgzo8L2xhYmVsPlxcbiAgICAgICAgPGlucHV0IHR5cGU9XFxcImNvbG9yXFxcIiBpZD1cXFwiZm9uXFxcIiAvPlxcbiAgICAgICAgPGxhYmVsIGZvcj1cXFwiY29tbWVudFxcXCI+0JrQvtC80LXQvdGC0LDRgDo8L2xhYmVsPlxcbiAgICAgICAgPHRleHRhcmVhIGlkPVxcXCJjb21tZW50XFxcIiBuYW1lPVxcXCJ3M3Jldmlld1xcXCIgcm93cz1cXFwiNFxcXCIgY29scz1cXFwiNTBcXFwiPjwvdGV4dGFyZWE+XFxuICAgICAgICA8aW5wdXRcXG4gICAgICAgICAgdHlwZT1cXFwic3VibWl0XFxcIlxcbiAgICAgICAgICBuYW1lPVxcXCJTdWJtaXRCdXR0b25cXFwiXFxuICAgICAgICAgIGlkPVxcXCJzdWJtaXRCdXR0b25cXFwiXFxuICAgICAgICAgIHZhbHVlPVxcXCJBZGRcXFwiIC8+XFxuICAgICAgPC9mb3JtPlxcbiAgICA8L2Rpdj5cXG5cXG4gICAgPGRpdiBpZD1cXFwiZnVsbC1wcm9maWxlMVxcXCIgY2xhc3M9XFxcIm1vZGFsV2luZG93IGRpc2FibGVkVmlldyBmdWxsUHJvZmlsZVxcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybUhlYWRlclxcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0ZXh0Rm9ybUhlYWRlclxcXCI+QWRkIHRlYWNoZXI8L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNsb3NlQmxvY2tGb3JtSGVhZGVyXFxcIj5cXG4gICAgICAgICAgPGltZ1xcbiAgICAgICAgICAgIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF81X19fICsgXCJcXFwiXFxuICAgICAgICAgICAgYWx0PVxcXCJjbG9zZSBtb2RhbCB3aW5kb3dcXFwiXFxuICAgICAgICAgICAgdGl0bGU9XFxcIngtbWFyayBjbG9zZSBpY29uXFxcIiAvPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPGZ1bGwtcHJvZmlsZSBkYXRhLWJnQ29sb3I9XFxcImJsdWVcXFwiPlxcbiAgICAgICAgPHNwYW4gc2xvdD1cXFwicGhvdG9cXFwiPjxpbWcgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzNfX18gKyBcIlxcXCIgLz48L3NwYW4+XFxuICAgICAgICA8c3BhbiBzbG90PVxcXCJuYW1lXFxcIj5GbG9vciBKYW5zZW48L3NwYW4+XFxuICAgICAgICA8c3BhbiBzbG90PVxcXCJnZW5kZXJcXFwiPndvbWFuPC9zcGFuPlxcbiAgICAgICAgPHNwYW4gc2xvdD1cXFwib2xkXFxcIj4yOTwvc3Bhbj5cXG4gICAgICAgIDxzcGFuIHNsb3Q9XFxcImVtYWlsXFxcIlxcbiAgICAgICAgICA+PGEgaHJlZj1cXFwiZmxvb3JqYW5AZ21haWwuY29tXFxcIj5mbG9vcmphbkBnbWFpbC5jb208L2E+PC9zcGFuXFxuICAgICAgICA+XFxuICAgICAgICA8c3BhbiBzbG90PVxcXCJ0ZWxcXFwiPjxhIGhyZWY9XFxcInRlbDorMzgwMTIzNDU2Nzg5XFxcIj4rMzgwMTIzNDU2Nzg5PC9hPjwvc3Bhbj5cXG4gICAgICAgIDxzcGFuIHNsb3Q9XFxcImNvdW50cnlcXFwiPlVrcmFpbmU8L3NwYW4+XFxuICAgICAgICA8c3BhbiBzbG90PVxcXCJ0b3duXFxcIj5LeWl2PC9zcGFuPlxcbiAgICAgICAgPHNwYW4gc2xvdD1cXFwiY29tbWVudFxcXCI+QWxyaWdodDwvc3Bhbj5cXG4gICAgICAgIDxzcGFuIHNsb3Q9XFxcIm1hcFxcXCI+PGEgaHJlZj1cXFwiaHR0cHM6Ly9nb29nbGUuY29tXFxcIj5nb29nbGU8L2E+PC9zcGFuPlxcbiAgICAgIDwvZnVsbC1wcm9maWxlPlxcbiAgICA8L2Rpdj5cXG5cXG4gICAgPGRpdiBpZD1cXFwiZnVsbC1wcm9maWxlMlxcXCIgc3R5bGU9XFxcImRpc3BsYXk6IG5vbmVcXFwiPlxcbiAgICAgIDxmdWxsLXByb2ZpbGUgZGF0YS1iZ0NvbG9yPVxcXCJ5ZWxsb3dcXFwiPlxcbiAgICAgICAgPHNwYW4gc2xvdD1cXFwicGhvdG9cXFwiPjxpbWcgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzRfX18gKyBcIlxcXCIgLz48L3NwYW4+XFxuICAgICAgICA8c3BhbiBzbG90PVxcXCJuYW1lXFxcIj5JaG9yIFRrYWNodWs8L3NwYW4+XFxuICAgICAgICA8c3BhbiBzbG90PVxcXCJnZW5kZXJcXFwiPm1hbjwvc3Bhbj5cXG4gICAgICAgIDxzcGFuIHNsb3Q9XFxcIm9sZFxcXCI+MzI8L3NwYW4+XFxuICAgICAgICA8c3BhbiBzbG90PVxcXCJlbWFpbFxcXCI+aWhvcnRrYWNoQGdtYWlsLmNvbTwvc3Bhbj5cXG4gICAgICAgIDxzcGFuIHNsb3Q9XFxcInRlbFxcXCI+PGEgaHJlZj1cXFwidGVsOiszODAxMjM0NTY3ODlcXFwiPiszODAxMjM0NTY3ODk8L2E+PC9zcGFuPlxcbiAgICAgICAgPHNwYW4gc2xvdD1cXFwiY291bnRyeVxcXCI+VWtyYWluZTwvc3Bhbj5cXG4gICAgICAgIDxzcGFuIHNsb3Q9XFxcInRvd25cXFwiPkt5aXY8L3NwYW4+XFxuICAgICAgICA8c3BhbiBzbG90PVxcXCJjb21tZW50XFxcIj5vazwvc3Bhbj5cXG4gICAgICAgIDxzcGFuIHNsb3Q9XFxcIm1hcFxcXCI+PGEgaHJlZj1cXFwiaHR0cHM6Ly9nb29nbGUuY29tXFxcIj5nb29nbGU8L2E+PC9zcGFuPlxcbiAgICAgIDwvZnVsbC1wcm9maWxlPlxcbiAgICA8L2Rpdj5cXG5cXG4gICAgPCEtLSB0ZW1wbGF0ZSB3aXRoIHNjcmlwdHMgLS0+XFxuICAgIDx0ZW1wbGF0ZSBpZD1cXFwic2hvcnRQcm9maWxlVGVtcGxhdGVcXFwiPlxcbiAgICAgIDxwPlxcbiAgICAgICAgPHNsb3QgbmFtZT1cXFwicGhvdG9cXFwiPjwvc2xvdD5cXG4gICAgICA8L3A+XFxuICAgICAgPHA+XFxuICAgICAgICA8c2xvdCBuYW1lPVxcXCJuYW1lXFxcIj48L3Nsb3Q+XFxuICAgICAgPC9wPlxcbiAgICAgIDxwPlxcbiAgICAgICAgPHNsb3QgbmFtZT1cXFwiZGV0YWlsc1xcXCI+PC9zbG90PlxcbiAgICAgIDwvcD5cXG4gICAgPC90ZW1wbGF0ZT5cXG5cXG4gICAgPFwiICsgXCJzY3JpcHQ+XFxuICAgICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKFxcbiAgICAgICAgJ3Nob3J0LXByb2ZpbGUnLFxcbiAgICAgICAgY2xhc3MgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XFxuICAgICAgICAgIGNvbnN0cnVjdG9yKCkge1xcbiAgICAgICAgICAgIHN1cGVyKCk7XFxuXFxuICAgICAgICAgICAgY29uc3Qgc2hvcnRQcm9maWxlVGVtcGxhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcXG4gICAgICAgICAgICAgICdzaG9ydFByb2ZpbGVUZW1wbGF0ZSdcXG4gICAgICAgICAgICApO1xcblxcbiAgICAgICAgICAgIGNvbnN0IHNob3J0UHJvZmlsZSA9IHNob3J0UHJvZmlsZVRlbXBsYXRlLmNvbnRlbnQ7XFxuXFxuICAgICAgICAgICAgY29uc3Qgc2hhZG93Um9vdCA9IHRoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogJ29wZW4nIH0pLmFwcGVuZENoaWxkKFxcbiAgICAgICAgICAgICAgc2hvcnRQcm9maWxlLmNsb25lTm9kZSh0cnVlKVxcbiAgICAgICAgICAgICk7XFxuICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICApO1xcbiAgICA8XCIgKyBcIi9zY3JpcHQ+XFxuXFxuICAgIDx0ZW1wbGF0ZSBpZD1cXFwiZnVsbFByb2ZpbGVUZW1wbGF0ZVxcXCI+XFxuICAgICAgPHN0eWxlPlxcbiAgICAgICAgLmZpcnN0UCB7XFxuICAgICAgICAgIG1hcmdpbi10b3A6IDBweDtcXG4gICAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XFxuICAgICAgICB9XFxuICAgICAgICBwIHtcXG4gICAgICAgICAgbWFyZ2luOiAxMHB4IDBweDtcXG4gICAgICAgIH1cXG4gICAgICAgIC5tYXAge1xcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XFxuICAgICAgICAgIG1hcmdpbjogMHB4IDBweCAxMHB4IDBweDtcXG4gICAgICAgIH1cXG4gICAgICA8L3N0eWxlPlxcbiAgICAgIDxzbG90IG5hbWU9XFxcInBob3RvXFxcIj48L3Nsb3Q+XFxuICAgICAgPHAgY2xhc3M9XFxcImZpcnN0UFxcXCI+PHNsb3QgbmFtZT1cXFwibmFtZVxcXCI+PC9zbG90PjwvcD5cXG4gICAgICA8cD48c2xvdCBuYW1lPVxcXCJnZW5kZXJcXFwiPjwvc2xvdD48L3A+XFxuICAgICAgPHA+PHNsb3QgbmFtZT1cXFwib2xkXFxcIj48L3Nsb3Q+PC9wPlxcbiAgICAgIDxwPjxzbG90IG5hbWU9XFxcImVtYWlsXFxcIj48L3Nsb3Q+PC9wPlxcbiAgICAgIDxwPjxzbG90IG5hbWU9XFxcInRlbFxcXCI+PC9zbG90PjwvcD5cXG4gICAgICA8cD48c2xvdCBuYW1lPVxcXCJjb3VudHJ5XFxcIj48L3Nsb3Q+PC9wPlxcbiAgICAgIDxwPjxzbG90IG5hbWU9XFxcInRvd25cXFwiPjwvc2xvdD48L3A+XFxuICAgICAgPHA+PHNsb3QgbmFtZT1cXFwiY29tbWVudFxcXCI+PC9zbG90PjwvcD5cXG4gICAgICA8YnIgLz5cXG4gICAgICA8cCBjbGFzcz1cXFwibWFwXFxcIj48c2xvdCBuYW1lPVxcXCJtYXBcXFwiPjwvc2xvdD48L3A+XFxuICAgIDwvdGVtcGxhdGU+XFxuICAgIDxcIiArIFwic2NyaXB0PlxcbiAgICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZShcXG4gICAgICAgICdmdWxsLXByb2ZpbGUnLFxcbiAgICAgICAgY2xhc3MgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XFxuICAgICAgICAgIC8vINCd0LDRgdC70LXQtNC+0LLQsNC90LjQtSDQvtCx0LXRgdC/0LXRh9C40LLQsNC10YIsINGH0YLQviDQvNGLINC40LzQtdC10YIg0YHQstC+0LnRgdGC0LLQsCDQuCDQvNC10YLQvtC00Ysg0L/QviDRg9C80L7Qu9GH0LDQvdC40Y4g0LLRgdGC0YDQvtC10L3QvdC+0LPQviBIVE1MINGN0LvQtdC80LXQvdGC0LBcXG5cXG4gICAgICAgICAgLy8g0JLRi9C30YvQstCw0LXRgtGB0Y8g0LLRgdGP0LrQuNC5INGA0LDQtywg0LrQvtCz0LTQsCDRgdC+0LfQtNCw0LXRgtGB0Y8g0L3QvtCy0YvQuSDRjdC70LXQvNC10L3RglxcbiAgICAgICAgICBjb25zdHJ1Y3RvcigpIHtcXG4gICAgICAgICAgICAvLyDQktGL0LfRi9Cy0LDQtdC8INGA0L7QtNC40YLQtdC70YzRgdC60LjQuSDQutC+0L3RgdGC0YDRg9C60YLQvtGALCDRgi7QtSDQutC+0L3RgdGC0YDRg9C60YLQvtGAINC00LvRjyBIVE1MRWxlbWVudC4g0KLQsNC60LjQvCDQvtCx0YDQsNC30L7QvCDRg9GB0YLQsNC90LDQstC70LjQstCw0Y7RgtGB0Y8g0YHQstC+0LnRgdGC0LLQsCDQsdCw0LfQvtCy0L7Qs9C+IEhUTUwg0Y3Qu9C10LzQtdC90YLQsC5cXG4gICAgICAgICAgICBzdXBlcigpO1xcblxcbiAgICAgICAgICAgIC8vINCR0LXRgNC10YIgPHRlbXBsYXRlPiDQuCDRhdGA0LDQvdC40YIg0LXQs9C+INCyINC/0LXRgNC10LzQtdC90L3QvtC5IGB3YXJpbm5nYFxcbiAgICAgICAgICAgIGNvbnN0IGZ1bGxQcm9maWxlVGVtcGxhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcXG4gICAgICAgICAgICAgICdmdWxsUHJvZmlsZVRlbXBsYXRlJ1xcbiAgICAgICAgICAgICk7XFxuXFxuICAgICAgICAgICAgLy8g0KXRgNCw0L3QuNGCINC60L7QvdGC0LXQvdGCINGI0LDQsdC70L7QvdCwINCyINC/0LXRgNC10LzQtdC90L3QvtC5IGBteXdhcm5pbmdgXFxuICAgICAgICAgICAgY29uc3QgZnVsbFByb2ZpbGUgPSBmdWxsUHJvZmlsZVRlbXBsYXRlLmNvbnRlbnQ7XFxuXFxuICAgICAgICAgICAgY29uc3Qgc2hhZG93Um9vdCA9IHRoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogJ29wZW4nIH0pLmFwcGVuZENoaWxkKFxcbiAgICAgICAgICAgICAgZnVsbFByb2ZpbGUuY2xvbmVOb2RlKHRydWUpXFxuICAgICAgICAgICAgKTtcXG4gICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICAgICk7XFxuICAgIDxcIiArIFwiL3NjcmlwdD5cXG4gIDwvYm9keT5cXG48L2h0bWw+XFxuXCI7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBjb2RlOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==