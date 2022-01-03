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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_inputs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/inputs */ \"./modules/inputs.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/tabs */ \"./modules/tabs.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('07 january 2022');\r\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_inputs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/inputs.js":
/*!***************************!*\
  !*** ./modules/inputs.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst inputs = () => {\r\n  const square = document.querySelector('.calc-square');\r\n  const count = document.querySelector('.calc-count');\r\n  const day = document.querySelector('.calc-day');\r\n  const names = document.querySelectorAll('.form-name');\r\n  const topName = document.getElementById('form2-name');\r\n  const message = document.getElementById('form2-message');\r\n  const email = document.querySelectorAll('.form-email');\r\n  const phone = document.querySelectorAll('.form-phone');\r\n\r\n\r\n  const isNumber = (e) => {\r\n    e.target.value = e.target.value.replace(/\\D+/, \"\");\r\n  };\r\n\r\n  square.addEventListener('input', isNumber);\r\n  count.addEventListener('input', isNumber);\r\n  day.addEventListener('input', isNumber);\r\n\r\n  const isCyryl = (n) => {\r\n    n.target.value = n.target.value.replace(/[^а-я\\s\\-]/gi, \"\");\r\n    console.log('hello');\r\n  };\r\n\r\n  topName.addEventListener('input', isCyryl);\r\n  names.forEach((item) =>\r\n    item.addEventListener(\"input\", isCyryl)\r\n  );\r\n  message.addEventListener('input', isCyryl);\r\n  \r\n  const isEmail = (s) => {\r\n    s.target.value = s.target.value.replace(/[^\\w\\-\\_\\.\\!\\~\\*\\'@]/gi, \"\");\r\n  };\r\n\r\n  email.forEach((mail) =>\r\n    mail.addEventListener(\"input\", isEmail)\r\n  );\r\n\r\n  const isPhone = (m) => {\r\n    m.target.value = m.target.value.replace(/[^\\d\\-\\(\\)]/gi, \"\");\r\n  };\r\n\r\n  phone.forEach((tel) =>\r\n    tel.addEventListener(\"input\", isPhone)\r\n  );\r\n\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (inputs);\n\n//# sourceURL=webpack:///./modules/inputs.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\r\n  const menu = document.querySelector('menu');\r\n  const body = document.querySelector('body');\r\n  \r\n  body.addEventListener('click', (e) => {\r\n    let target = e.target;\r\n    let its_menu = target == menu || menu.contains(target);\r\n    let menu_is_active = menu.classList.contains('active-menu');\r\n    if (e.target.closest('.menu') || e.target.classList.contains('close-btn') || its_menu) {\r\n      menu.classList.toggle('active-menu');\r\n    } else if (!its_menu && menu_is_active) {\r\n      menu.classList.toggle('active-menu');\r\n    }\r\n    \r\n  });\r\n\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\r\n  const modal = document.querySelector('.popup');\r\n  const buttons = document.querySelectorAll('.popup-btn');\r\n  let count = 0;\r\n  let idAnimationOpen;\r\n  let idAnimationClose;\r\n\r\n  const animationOpen = () => {\r\n    count += 0.05;\r\n\r\n    idAnimationOpen = requestAnimationFrame(animationOpen);\r\n    if (count < 1) {\r\n      modal.style.opacity = count;\r\n    } else {\r\n      modal.style.opacity = 1;\r\n      cancelAnimationFrame(idAnimationOpen);\r\n    }\r\n  };\r\n\r\n  const animationClose = () => {\r\n    count -= 0.05;\r\n\r\n    idAnimationClose = requestAnimationFrame(animationClose);\r\n    if (count > 0) {\r\n      modal.style.opacity = count;\r\n    } else {\r\n      modal.style.opacity = \"\";\r\n      modal.style.display = \"none\";\r\n      cancelAnimationFrame(idAnimationClose);\r\n    }\r\n  };\r\n\r\n  buttons.forEach((button) => {\r\n    button.addEventListener(\"click\", () => {\r\n      modal.style.display = \"block\";\r\n      if (screen.width > 768) {\r\n        animationOpen();\r\n      }\r\n    });\r\n  });\r\n\r\n  modal.addEventListener('click', (e) => {\r\n    if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {\r\n      if (screen.width > 768) {\r\n        animationClose();\r\n      } else {\r\n        modal.style.display = \"none\";\r\n      }\r\n    }\r\n  });\r\n\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/tabs.js":
/*!*************************!*\
  !*** ./modules/tabs.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst tabs = () => {\r\n  const tabPanel = document.querySelector('.service-header');\r\n  const tabs = document.querySelectorAll('.service-header-tab');\r\n  const tabContent = document.querySelectorAll('.service-tab');\r\n\r\n  tabPanel.addEventListener('click', (e) => {\r\n    if (e.target.closest('.service-header-tab')) {\r\n      const tabBtn = e.target.closest('.service-header-tab');\r\n      tabs.forEach((tab, index) => {\r\n        if (tab === tabBtn) {\r\n          tab.classList.add('active');\r\n          tabContent[index].classList.remove('d-none');\r\n        } else {\r\n          tab.classList.remove('active');\r\n          tabContent[index].classList.add('d-none');\r\n        }\r\n      });\r\n    }\r\n    \r\n  });\r\n\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\n\n//# sourceURL=webpack:///./modules/tabs.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadline) => {\r\n  const timerDays = document.getElementById('timer-days');\r\n  const timerHours = document.getElementById('timer-hours');\r\n  const timerMinutes = document.getElementById('timer-minutes');\r\n  const timerSeconds = document.getElementById('timer-seconds');\r\n\r\n  const getTimeRemaining = () => {\r\n    let dateStop = new Date(deadline).getTime();\r\n    let dateNow = new Date().getTime();\r\n    let timeRemaining = (dateStop - dateNow) / 1000;\r\n    let days = Math.floor(timeRemaining / 60 / 60 / 24);\r\n    let hours = Math.floor((timeRemaining / 60 / 60) % 24);\r\n    let minutes = Math.floor((timeRemaining / 60) % 60);\r\n    let seconds = Math.floor(timeRemaining % 60);\r\n    if (dateStop < dateNow) {\r\n      days = \"0\";\r\n      hours = \"0\";\r\n      minutes = \"0\";\r\n      seconds = \"0\";\r\n    }\r\n\r\n\r\n    return {timeRemaining, days, hours, minutes, seconds};\r\n    \r\n\r\n  };\r\n\r\n  const updateClock = () => {\r\n    let getTime = getTimeRemaining();\r\n    if (getTime.days < 10) {\r\n      timerDays.textContent = '0' + getTime.days;\r\n    } else {\r\n      timerDays.textContent = getTime.days;\r\n    }\r\n    if (getTime.hours < 10) {\r\n      timerHours.textContent = '0' + getTime.hours;\r\n    } else {\r\n      timerHours.textContent = getTime.hours;\r\n    }\r\n    if (getTime.minutes < 10) {\r\n      timerMinutes.textContent = '0' + getTime.minutes;\r\n    } else {\r\n      timerMinutes.textContent = getTime.minutes;\r\n    }\r\n    if (getTime.seconds < 10) {\r\n      timerSeconds.textContent = '0' + getTime.seconds;\r\n    } else {\r\n      timerSeconds.textContent = getTime.seconds;\r\n    }\r\n  \r\n    if(getTime.timeRemaining < 0) {\r\n      clearInterval(timerId);\r\n    }\r\n    \r\n  };\r\n\r\n  let timerId = setInterval(updateClock, 1000);\r\n\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n//# sourceURL=webpack:///./modules/timer.js?");

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