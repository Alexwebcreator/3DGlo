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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/tabs */ \"./modules/tabs.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/slider */ \"./modules/slider.js\");\n/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/calc */ \"./modules/calc.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/sendForm */ \"./modules/sendForm.js\");\n\r\n\r\n\r\n//import inputs from './modules/inputs';\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('30 january 2022');\r\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n//inputs();\r\n(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n(0,_modules_calc__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(100);\r\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({ \r\n  formId: 'form1',\r\n  someElem: [\r\n    {\r\n      type: 'block',\r\n      id: 'total'\r\n    }\r\n  ] \r\n});\r\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({\r\n  formId: \"form2\",\r\n  someElem: [\r\n    {\r\n      type: 'block',\r\n      id: 'total'\r\n    }\r\n  ] \r\n});\r\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({\r\n  formId: \"form3\",\r\n  someElem: [\r\n    {\r\n      type: 'block',\r\n      id: 'total'\r\n    }\r\n  ] \r\n});\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/calc.js":
/*!*************************!*\
  !*** ./modules/calc.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst calc = (price = 100) => {\r\n  const calcBlock = document.querySelector('.calc-block');\r\n  const calcType = document.querySelector('.calc-type');\r\n  const calcSquare = document.querySelector('.calc-square');\r\n  const calcCount = document.querySelector('.calc-count');\r\n  const calcDay = document.querySelector('.calc-day');\r\n  const total = document.getElementById('total');\r\n  \r\n  const countCalc = () => {\r\n    const calcTypeValue = +calcType.options[calcType.selectedIndex].value;\r\n    const calcSquareValue = calcSquare.value;\r\n\r\n    let totalValue = 0;\r\n    let calcCountValue = 1;\r\n    let calcDayValue = 1;\r\n\r\n    if (calcCount.value > 1) {\r\n      calcCountValue += +calcCount.value / 10;\r\n      console.log('more');\r\n    }\r\n\r\n    if (calcDay.value && calcDay.value < 5) {\r\n      calcDayValue = 2;\r\n    } else if (calcDay.value && calcDay.value < 10) {\r\n      calcDayValue = 1.5;\r\n    }\r\n\r\n    if (calcType.value && calcSquare.value) {\r\n      totalValue = price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue;\r\n    \r\n    } else {\r\n      totalValue = 0;\r\n    }\r\n    total.textContent = totalValue;\r\n\r\n    // const outNum = (num) => {\r\n    //   const time = 3000;\r\n    //   const step = 100;\r\n    //   let n = 0;\r\n    //   let t = Math.round(time/(num/step));\r\n    //   let interval = setInterval(() => {\r\n    //     n = n + step;\r\n    //     if (n == num) {\r\n    //       clearInterval(interval);\r\n    //     }\r\n    //   }, t);\r\n    //   total.textContent = n;\r\n    //   console.log(totalValue);\r\n    // };\r\n    // outNum(3000);\r\n  };\r\n\r\n  calcBlock.addEventListener('input', (e) => {\r\n\r\n    if (e.target === calcType || e.target === calcSquare || e.target === calcCount || e.target === calcDay) {\r\n      countCalc();\r\n    }\r\n    \r\n  });\r\n\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);\n\n//# sourceURL=webpack:///./modules/calc.js?");

/***/ }),

/***/ "./modules/helpers.js":
/*!****************************!*\
  !*** ./modules/helpers.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"animate\": () => (/* binding */ animate)\n/* harmony export */ });\nconst animate = ({timing, draw, duration}) => {\r\n\r\n  let start = performance.now();\r\n\r\n  requestAnimationFrame(function animate(time) {\r\n    // timeFraction изменяется от 0 до 1\r\n    let timeFraction = (time - start) / duration;\r\n    if (timeFraction > 1) timeFraction = 1;\r\n\r\n    // вычисление текущего состояния анимации\r\n    let progress = timing(timeFraction);\r\n\r\n    draw(progress); // отрисовать её\r\n\r\n    if (timeFraction < 1) {\r\n      requestAnimationFrame(animate);\r\n    }\r\n\r\n  });\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./modules/helpers.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./modules/helpers.js\");\n\r\n\r\nconst modal = () => {\r\n  const modal = document.querySelector('.popup');\r\n  const buttons = document.querySelectorAll('.popup-btn');\r\n\r\n  buttons.forEach((button) => {\r\n    button.addEventListener(\"click\", () => {\r\n      modal.style.display = \"block\";\r\n      if (screen.width > 768) {\r\n        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n          duration: 1000,\r\n          timing(timeFraction) {\r\n            return timeFraction;\r\n          },\r\n          draw(progress) {\r\n            modal.style.opacity = progress;\r\n          },\r\n        });\r\n      }\r\n    });\r\n  });\r\n\r\n  modal.addEventListener('click', (e) => {\r\n    if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {\r\n      if (screen.width > 768) {\r\n        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n          duration: 1000,\r\n          timing(timeFraction) {\r\n            return 1 - timeFraction;\r\n          },\r\n          draw(progress) {\r\n            modal.style.opacity = progress;\r\n          },\r\n        });\r\n        setTimeout(() => {\r\n          modal.style.display = \"none\";\r\n          modal.style.opacity = \"\";\r\n        }, 1100);\r\n      } else {\r\n        modal.style.display = \"none\";\r\n        modal.style.opacity = \"\";\r\n      }\r\n    }\r\n  });\r\n\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/sendForm.js":
/*!*****************************!*\
  !*** ./modules/sendForm.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst sendForm = ({ formId, someElem = [] }) => {\r\n  const form = document.getElementById(formId);\r\n  const statusBlock = document.createElement('div');\r\n  const loadText = 'Загрузка...';\r\n  const errorText = 'Ошибка...';\r\n  const successText = 'Спасибо! Наш менеджер с вами свяжется!';\r\n\r\n  const validate = (list) => {\r\n    const name = form.querySelector(\"[name=user_name]\");\r\n    const email = form.querySelector(\"[name=user_email]\");\r\n    const phone = form.querySelector(\"[name=user_phone]\");\r\n    const message = form.querySelector(\"[name=user_message]\");\r\n    let error = false;\r\n\r\n    const mes = (str, input) => {\r\n      const mes = document.createElement('div');\r\n      mes.classList.add('mes');\r\n      mes.textContent = str;\r\n      mes.style.fontSize = \"12px\";\r\n      mes.style.color = \"red\";\r\n      if (formId == \"form1\") {\r\n        mes.style.marginTop = \"-30px\";\r\n        if (screen.width < 768) {\r\n          mes.style.marginTop = \"0px\";\r\n          mes.style.alignItems = \"center\";\r\n        }\r\n      }\r\n      if (input == message) {\r\n        mes.style.marginBottom = \"15px\";\r\n      }\r\n      input.after(mes);\r\n      setTimeout(() => mes.remove(), 10000);\r\n    };\r\n\r\n    list.forEach((input) => {\r\n      switch (input) {\r\n        case name:\r\n          if (/[^а-я\\s\\-]+/gi.test(input.value)|| input.value.length < 2) {\r\n            error = true;\r\n            mes(\"Используйте только кириллицу!\", input);\r\n          }\r\n          break;\r\n        case email:\r\n          if (/[^\\w\\-\\_\\.\\!\\~\\*\\'@]+/gi.test(input.value) ||\r\n            !/[\\w\\-\\_\\!\\~\\*\\'\\.]+@([\\w]+\\.)+[\\w]+/gi.test(input.value)) {\r\n            error = true;\r\n            mes(\"Введите в формате name@domain.com\", input);\r\n          }\r\n          break;\r\n        case phone:\r\n          if (/[^\\d\\(\\)\\+\\-]+/g.test(input.value) || input.value.length < 11 || input.value.length > 17) {\r\n            error = true;\r\n            mes(\"Введите только + () - и цифры! От 11 до 17 символов!\", input);\r\n          }\r\n          break;\r\n        case message:\r\n          if (/[^а-я0-9\\s\\-\\.\\,\\!\\?\\:]+/gi.test(input.value)) {\r\n            error = true;\r\n            mes(\"Введите только кириллицу и знаки препинания!\", input);\r\n          }\r\n          break;  \r\n      }\r\n    });\r\n\r\n    return !error;\r\n\r\n  };\r\n\r\n  const sendData = (data) => {\r\n    return fetch('https://jsonplaceholder.typicode.com/posts', {\r\n      method: 'POST',\r\n      body: JSON.stringify(data),\r\n      headers: {\r\n        \"Content-Type\": \"application/json\"\r\n      }\r\n    }).then(res => res.json());\r\n  };\r\n\r\n  const submitForm = () => {\r\n    const formElements = form.querySelectorAll('input');\r\n    const formData = new FormData(form);\r\n    const formBody = {};\r\n\r\n    formData.forEach((val, key) => {\r\n      formBody[key] = val;\r\n    });\r\n\r\n    someElem.forEach(elem => {\r\n      const element = document.getElementById(elem.id);\r\n      if (elem.type === 'block' && element.textContent != 0) {\r\n        formBody[elem.id] = element.textContent;\r\n      } else if (elem.type === 'input' && element.value != 0) {\r\n        formBody[elem.id] = element.value;\r\n      }\r\n    });\r\n\r\n    if (validate(formElements)) {\r\n      const mess = document.querySelectorAll(\".mes\");\r\n      mess.forEach((mes) => {\r\n        mes.remove();\r\n      });\r\n      statusBlock.textContent = loadText;\r\n      form.append(statusBlock);\r\n      if (formId == \"form3\") {\r\n        statusBlock.style.color = \"white\";\r\n      }\r\n      sendData(formBody)\r\n        .then((data) => {\r\n          console.log(data);\r\n          statusBlock.textContent = successText;\r\n          setTimeout(() => statusBlock.remove(), 5000);\r\n\r\n          formElements.forEach(input => {\r\n            input.value = '';\r\n          });\r\n        })\r\n        .catch((error) => {\r\n          statusBlock.textContent = errorText;\r\n          form.append(statusBlock);\r\n          console.log(error.message);\r\n          setTimeout(() => statusBlock.remove(), 5000);\r\n        });\r\n    } else {\r\n      alert('Данные формы заполнены не верно!');\r\n    }\r\n  };\r\n\r\n  try {\r\n    if (!form) {\r\n      throw new Error('Верните форму на место, пожалуйста))');\r\n    }\r\n    form.addEventListener('submit', (event) => {\r\n      event.preventDefault();\r\n      submitForm();\r\n    });\r\n  } catch(error) {\r\n    console.log(error.message);\r\n  }\r\n\r\n  \r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n\n//# sourceURL=webpack:///./modules/sendForm.js?");

/***/ }),

/***/ "./modules/slider.js":
/*!***************************!*\
  !*** ./modules/slider.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst slider = () => {\r\n  const sliderBlock = document.querySelector('.portfolio-content');\r\n  const slides = document.querySelectorAll('.portfolio-item');\r\n  const dotsContainer = document.querySelector('.portfolio-dots');\r\n  let currentSlide = 0;\r\n  let interval; \r\n  const timeInterval = 2000;\r\n\r\n  const addDots = () => {\r\n    const newDot = document.createElement('li');\r\n    newDot.classList.add('dot');\r\n    slides.forEach((item, i) => {\r\n      item[i] = newDot.cloneNode(true);\r\n      dotsContainer.append(item[i]);\r\n    });\r\n    const dot = document.querySelectorAll('.dot');\r\n    dot[0].classList.add('dot-active');\r\n  };\r\n  addDots();\r\n\r\n  const dots = document.querySelectorAll('.dot');\r\n\r\n  const prevSlide = (elems, index, strClass) => {\r\n    elems[index].classList.remove(strClass);\r\n  };\r\n\r\n  const nextSlide = (elems, index, strClass) => {\r\n    elems[index].classList.add(strClass);\r\n  };  \r\n\r\n  const autoSlide = () => {\r\n    prevSlide(slides, currentSlide, 'portfolio-item-active');\r\n    prevSlide(dots, currentSlide, 'dot-active');\r\n    currentSlide++;\r\n\r\n    if (currentSlide >= slides.length) {\r\n      currentSlide = 0;\r\n    }\r\n    nextSlide(slides, currentSlide, 'portfolio-item-active');\r\n    nextSlide(dots, currentSlide, 'dot-active');\r\n  };\r\n\r\n  const startSlide = (timer = 1500) => {\r\n    interval = setInterval(autoSlide, timer);\r\n  };\r\n\r\n  const stopSlide = () => {\r\n    clearInterval(interval);\r\n  };\r\n\r\n  sliderBlock.addEventListener('click', (e) => {\r\n    e.preventDefault();\r\n\r\n    if(!e.target.matches('.dot, .portfolio-btn')) {\r\n      return;\r\n    }\r\n\r\n    prevSlide(slides, currentSlide, 'portfolio-item-active');\r\n    prevSlide(dots, currentSlide, 'dot-active');\r\n    \r\n    if (e.target.matches('#arrow-right')) {\r\n      currentSlide++;\r\n    } else if (e.target.matches('#arrow-left')) {\r\n      currentSlide--;\r\n    } else if (e.target.classList.contains('dot')) {\r\n      dots.forEach((dot, index) => {\r\n        if (e.target === dot) {\r\n          currentSlide = index;\r\n        }\r\n      });\r\n    }\r\n\r\n    if (currentSlide >= slides.length) {\r\n      currentSlide = 0;\r\n    } \r\n\r\n    if (currentSlide < 0) {\r\n      currentSlide = slides.length - 1;\r\n    } \r\n\r\n    nextSlide(slides, currentSlide, 'portfolio-item-active');\r\n    nextSlide(dots, currentSlide, 'dot-active');\r\n\r\n  });\r\n\r\n  sliderBlock.addEventListener('mouseenter', (e) => {\r\n    if (e.target.matches('.dot, .portfolio-btn')) {\r\n      stopSlide();\r\n    }\r\n  }, true);\r\n\r\n  sliderBlock.addEventListener('mouseleave', (e) => {\r\n    if(e.target.matches('.dot, .portfolio-btn')) {\r\n      startSlide(timeInterval);\r\n    }\r\n  }, true);\r\n\r\n  startSlide(timeInterval);\r\n\r\n  // console.log(sliderBlock);\r\n  // console.log(slides);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack:///./modules/slider.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadline) => {\r\n  const timerDays = document.getElementById('timer-days');\r\n  const timerHours = document.getElementById('timer-hours');\r\n  const timerMinutes = document.getElementById('timer-minutes');\r\n  const timerSeconds = document.getElementById('timer-seconds');\r\n\r\n  const getTimeRemaining = () => {\r\n    let dateStop = new Date(deadline).getTime();\r\n    let dateNow = new Date().getTime();\r\n    let timeRemaining = (dateStop - dateNow) / 1000;\r\n    let days = Math.floor(timeRemaining / 60 / 60 / 24);\r\n    let hours = Math.floor((timeRemaining / 60 / 60) % 24);\r\n    let minutes = Math.floor((timeRemaining / 60) % 60);\r\n    let seconds = Math.floor(timeRemaining % 60);\r\n    if (dateStop < dateNow) {\r\n      days = \"0\";\r\n      hours = \"0\";\r\n      minutes = \"0\";\r\n      seconds = \"0\";\r\n    }\r\n\r\n\r\n    return {timeRemaining, days, hours, minutes, seconds};\r\n    \r\n\r\n  };\r\n\r\n  const updateClock = () => {\r\n    let getTime = getTimeRemaining();\r\n    if (getTime.days < 10) {\r\n      timerDays.textContent = '0' + getTime.days;\r\n    } else {\r\n      timerDays.textContent = getTime.days;\r\n    }\r\n    if (getTime.hours < 10) {\r\n      timerHours.textContent = '0' + getTime.hours;\r\n    } else {\r\n      timerHours.textContent = getTime.hours;\r\n    }\r\n    if (getTime.minutes < 10) {\r\n      timerMinutes.textContent = '0' + getTime.minutes;\r\n    } else {\r\n      timerMinutes.textContent = getTime.minutes;\r\n    }\r\n    if (getTime.seconds < 10) {\r\n      timerSeconds.textContent = '0' + getTime.seconds;\r\n    } else {\r\n      timerSeconds.textContent = getTime.seconds;\r\n    }\r\n  \r\n    if(getTime.timeRemaining < 0) {\r\n      clearInterval(timerId);\r\n    }\r\n    \r\n  };\r\n\r\n  updateClock();\r\n  let timerId = setInterval(updateClock, 1000);\r\n\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n//# sourceURL=webpack:///./modules/timer.js?");

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