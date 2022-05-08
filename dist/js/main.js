/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_regular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/regular */ \"./modules/regular.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/tabs */ \"./modules/tabs.js\");\n// запускает все модули\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"05.12.2022\");\r\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_regular__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\r\n  const menuBtn = document.querySelector(\".menu\");\r\n  const menu = document.querySelector(\"menu\");\r\n  const closeBtn = menu.querySelector(\".close-btn\");\r\n  const menuItems = menu.querySelectorAll(\"ul>li>a\");\r\n\r\n  const handlMenu = () => {\r\n    /* if (!menu.style.transform) {\r\n      menu.style.transform = \"translateX(0)\";\r\n    } else {\r\n      menu.style.transform = \"\"; //возвращается базовое состояние\r\n    } */\r\n\r\n    menu.classList.toggle(\"active-menu\");\r\n  };\r\n\r\n  menuBtn.addEventListener(\"click\", handlMenu);\r\n  closeBtn.addEventListener(\"click\", handlMenu);\r\n\r\n  menuItems.forEach((menuItem) =>\r\n    menuItem.addEventListener(\"click\", handlMenu)\r\n  );\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\r\n\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\r\n  const modal = document.querySelector(\".popup\");\r\n  const buttons = document.querySelectorAll(\".popup-btn\");\r\n  const modalContent = modal.querySelector(\".popup-content\");\r\n  const menuActive = document.querySelector(\"menu\");\r\n  const scrollBtn = document.querySelector(\"a\");\r\n  const body = document.querySelector(\"body\");\r\n  let countLeft = 0;\r\n  let idInterval;\r\n\r\n  const modalAnimate = () => {\r\n    countLeft++;\r\n    idInterval = requestAnimationFrame(modalAnimate);\r\n\r\n    if (countLeft < 39) {\r\n      modalContent.style.left = countLeft + \"%\";\r\n    } else {\r\n      cancelAnimationFrame(idInterval);\r\n    }\r\n  };\r\n\r\n  const toggleMenu = () => {\r\n    body.addEventListener(\"click\", (e) => {\r\n      if (e.target.closest(\".menu\")) {\r\n        menuActive.classList.add(\"active-menu\");\r\n      } else if (e.target.matches(\"menu a[href]\")) {\r\n        event.preventDefault();\r\n        const section = document.querySelector(e.target.getAttribute(\"href\"));\r\n        if (section) {\r\n          section.scrollIntoView({\r\n            behavior: \"smooth\",\r\n            block: \"start\",\r\n            inline: \"center\",\r\n          });\r\n        }\r\n      } else if (!e.target.classList.contains(\"active-menu\")) {\r\n        menuActive.classList.remove(\"active-menu\");\r\n      }\r\n    });\r\n  };\r\n\r\n  buttons.forEach((btn) => {\r\n    btn.addEventListener(\"click\", () => {\r\n      modal.style.display = \"block\";\r\n\r\n      if (document.documentElement.clientWidth >= 768) {\r\n        modalAnimate();\r\n      }\r\n    });\r\n  });\r\n\r\n  modal.addEventListener(\"click\", (e) => {\r\n    if (\r\n      !e.target.closest(\".popup-content\") ||\r\n      e.target.classList.contains(\"popup-close\")\r\n    ) {\r\n      modal.style.display = \"none\";\r\n    }\r\n  });\r\n\r\n  scrollBtn.addEventListener(\"click\", (event) => {\r\n    event.preventDefault();\r\n\r\n    const section = document.querySelector(scrollBtn.getAttribute(\"href\"));\r\n\r\n    if (section) {\r\n      section.scrollIntoView({\r\n        behavior: \"smooth\",\r\n        block: \"start\",\r\n        inline: \"center\",\r\n      });\r\n    }\r\n  });\r\n\r\n  toggleMenu();\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\r\n\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/regular.js":
/*!****************************!*\
  !*** ./modules/regular.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst regular = () => {\r\n  const regexpText = /[^а-яА-я- ]/;\r\n  const regexpEmail = /[^a-zA-Z0-9@-_\\.!~\\*']/;\r\n  const regexpTel = /[^\\d\\(\\)-]/;\r\n\r\n  const square = document.querySelector(\".calc-square\");\r\n  const count = document.querySelector(\".calc-count\");\r\n  const day = document.querySelector(\".calc-day\");\r\n\r\n  const form1Name = document.getElementById(\"form1-name\");\r\n  const form1Email = document.getElementById(\"form1-email\");\r\n  const form1Phone = document.getElementById(\"form1-phone\");\r\n\r\n  const form2Name = document.getElementById(\"form2-name\");\r\n  const form2Email = document.getElementById(\"form2-email\");\r\n  const form2Phone = document.getElementById(\"form2-phone\");\r\n  const form2Message = document.getElementById(\"form2-message\");\r\n\r\n  const form3Name = document.getElementById(\"form3-name\");\r\n  const form3Phone = document.getElementById(\"form3-phone\");\r\n  const form3Email = document.getElementById(\"form3-email\");\r\n\r\n  square.addEventListener(\"input\", (e) => {\r\n    e.target.value = e.target.value.replace(/[^\\d]/, \"\");\r\n  });\r\n  count.addEventListener(\"input\", (e) => {\r\n    e.target.value = e.target.value.replace(/[^\\d]/, \"\");\r\n  });\r\n  day.addEventListener(\"input\", (e) => {\r\n    e.target.value = e.target.value.replace(/[^\\d]/, \"\");\r\n  });\r\n\r\n  form1Name.addEventListener(\"input\", (e) => {\r\n    e.target.value = e.target.value.replace(regexpText, \"\");\r\n  });\r\n\r\n  form1Email.addEventListener(\"input\", (e) => {\r\n    e.target.value = e.target.value.replace(regexpEmail, \"\");\r\n  });\r\n\r\n  form1Phone.addEventListener(\"input\", (e) => {\r\n    e.target.value = e.target.value.replace(regexpTel, \"\");\r\n  });\r\n\r\n  form2Name.addEventListener(\"input\", (e) => {\r\n    e.target.value = e.target.value.replace(regexpText, \"\");\r\n  });\r\n\r\n  form2Message.addEventListener(\"input\", (e) => {\r\n    e.target.value = e.target.value.replace(regexpText, \"\");\r\n  });\r\n\r\n  form2Email.addEventListener(\"input\", (e) => {\r\n    e.target.value = e.target.value.replace(regexpEmail, \"\");\r\n  });\r\n\r\n  form2Phone.addEventListener(\"input\", (e) => {\r\n    e.target.value = e.target.value.replace(regexpTel, \"\");\r\n  });\r\n\r\n  form3Name.addEventListener(\"input\", (e) => {\r\n    e.target.value = e.target.value.replace(regexpText, \"\");\r\n  });\r\n\r\n  form3Phone.addEventListener(\"input\", (e) => {\r\n    e.target.value = e.target.value.replace(regexpTel, \"\");\r\n  });\r\n\r\n  form3Email.addEventListener(\"input\", (e) => {\r\n    e.target.value = e.target.value.replace(regexpEmail, \"\");\r\n  });\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (regular);\r\n\n\n//# sourceURL=webpack:///./modules/regular.js?");

/***/ }),

/***/ "./modules/tabs.js":
/*!*************************!*\
  !*** ./modules/tabs.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst tabs = () => {\r\n  const tabPanel = document.querySelector(\".service-header\");\r\n  const tabContent = document.querySelectorAll(\".service-tab\");\r\n  const tabs = document.querySelectorAll(\".service-header-tab\");\r\n\r\n  tabPanel.addEventListener(\"click\", (e) => {\r\n    if (e.target.closest(\".service-header-tab\")) {\r\n      const tabBtn = e.target.closest(\".service-header-tab\");\r\n      // всё что прокликивается \"сверху\" до нужного класса засчитывается\r\n      //если я кликаю именно по service-header-tab\r\n      tabs.forEach((tab, index) => {\r\n        if (tab === tabBtn) {\r\n          //  tabBtn вместо e.target т.к таргетом может быть спан\r\n          tab.classList.add(\"active\");\r\n          tabContent[index].classList.remove(\"d-none\");\r\n        } else {\r\n          tab.classList.remove(\"active\");\r\n          tabContent[index].classList.add(\"d-none\");\r\n        }\r\n      });\r\n    }\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\r\n\n\n//# sourceURL=webpack:///./modules/tabs.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadline) => {\r\n  const timerHours = document.getElementById(\"timer-hours\");\r\n  const timerMinutes = document.getElementById(\"timer-minutes\");\r\n  const timerSeconds = document.getElementById(\"timer-seconds\");\r\n  let timerDays;\r\n\r\n  const createDays = () => {\r\n    const days = document.createElement(\"span\");\r\n    const newColon = document.createElement(\"span\");\r\n    let timerList = document.querySelector(\".timer-numbers\");\r\n    let firstChild = timerList.firstElementChild;\r\n\r\n    days.id = \"timer-days\";\r\n    days.textContent = \"00\";\r\n    timerList.insertBefore(days, firstChild);\r\n\r\n    newColon.textContent = \" : \";\r\n    timerList.insertBefore(newColon, firstChild);\r\n\r\n    return days;\r\n  };\r\n\r\n  const getTimeRemaining = () => {\r\n    let dateStop = new Date(deadline).getTime();\r\n    let dateNow = new Date().getTime();\r\n\r\n    let timeRemaining = (dateStop - dateNow) / 1000;\r\n    let days = Math.floor(timeRemaining / 60 / 60 / 24);\r\n    let hours = Math.floor((timeRemaining / 60 / 60) % 24);\r\n    let minutes = Math.floor((timeRemaining / 60) % 60);\r\n    let seconds = Math.floor(timeRemaining % 60);\r\n\r\n    return { timeRemaining, days, hours, minutes, seconds };\r\n  };\r\n\r\n  const updataClock = () => {\r\n    let getTime = getTimeRemaining();\r\n\r\n    if (getTime.timeRemaining < 0) {\r\n      clearInterval(interval);\r\n      timerDays.textContent = \"00\";\r\n      timerHours.textContent = \"00\";\r\n      timerMinutes.textContent = \"00\";\r\n      timerSeconds.textContent = \"00\";\r\n      return;\r\n    }\r\n\r\n    const fDays = getTime.days < 10 ? \"0\" + getTime.days : getTime.days;\r\n    const fHours = getTime.hours < 10 ? \"0\" + getTime.hours : getTime.hours;\r\n    const fMinutes =\r\n      getTime.minutes < 10 ? \"0\" + getTime.minutes : getTime.minutes;\r\n    const fSeconds =\r\n      getTime.seconds < 10 ? \"0\" + getTime.seconds : getTime.seconds;\r\n\r\n    timerDays.textContent = fDays;\r\n    timerHours.textContent = fHours;\r\n    timerMinutes.textContent = fMinutes;\r\n    timerSeconds.textContent = fSeconds;\r\n  };\r\n\r\n  timerDays = createDays();\r\n\r\n  const interval = setInterval(updataClock, 1000);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\r\n\n\n//# sourceURL=webpack:///./modules/timer.js?");

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
/************************************************************************/
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;