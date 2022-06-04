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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_regular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/regular */ \"./modules/regular.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/tabs */ \"./modules/tabs.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/slider */ \"./modules/slider.js\");\n/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/calc */ \"./modules/calc.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/sendForm */ \"./modules/sendForm.js\");\n// запускает все модули\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"06.06.2022\");\r\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_regular__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n(0,_modules_calc__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(100);\r\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({\r\n  somElem: [\r\n    {\r\n      type: \"block\",\r\n      id: \"total\",\r\n    },\r\n  ],\r\n});\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/calc.js":
/*!*************************!*\
  !*** ./modules/calc.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./modules/helpers.js\");\n\r\n\r\nconst calc = (price = 100) => {\r\n  const calcBlock = document.querySelector(\".calc-block\");\r\n  const calcType = document.querySelector(\".calc-type\");\r\n  const calcSquare = document.querySelector(\".calc-square\");\r\n  const calcCount = document.querySelector(\".calc-count\");\r\n  const calcDay = document.querySelector(\".calc-day\");\r\n  const total = document.getElementById(\"total\");\r\n  let newTotalValue = 0;\r\n\r\n  const countCalc = () => {\r\n    function totalValueAnimate() {\r\n      if (newTotalValue < totalValue) {\r\n        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n          duration: 500,\r\n          timing(timeFraction) {\r\n            return timeFraction;\r\n          },\r\n          draw(progress) {\r\n            newTotalValue = totalValue * progress;\r\n            total.textContent = Math.round(newTotalValue);\r\n            /* console.log(newTotalValue);\r\n            console.log(totalValue); */\r\n          },\r\n        });\r\n      }\r\n      newTotalValue = 0;\r\n      total.textContent = totalValue;\r\n    }\r\n\r\n    const calcTypeValue = +calcType.options[calcType.selectedIndex].value;\r\n    const calcSquareValue = calcSquare.value;\r\n\r\n    let totalValue = 0;\r\n    let calcCountValue = 1;\r\n    let calcDayValue = 1;\r\n\r\n    if (calcCount.value > 1) {\r\n      calcCountValue += +calcCount.value / 10;\r\n    }\r\n\r\n    if (calcDay.value && calcDay.value < 5) {\r\n      calcDayValue = 2;\r\n    } else if (calcDay.value && calcDay.value < 10) {\r\n      calcDayValue = 1.5;\r\n    }\r\n\r\n    if (calcType.value && calcSquare.value) {\r\n      totalValue =\r\n        price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue;\r\n    } else {\r\n      totalValue = 0;\r\n    }\r\n\r\n    totalValueAnimate();\r\n  };\r\n\r\n  calcBlock.addEventListener(\"input\", (e) => {\r\n    if (\r\n      e.target === calcType ||\r\n      e.target === calcSquare ||\r\n      e.target === calcCount ||\r\n      e.target === calcDay\r\n    ) {\r\n      countCalc();\r\n    }\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);\r\n\n\n//# sourceURL=webpack:///./modules/calc.js?");

/***/ }),

/***/ "./modules/helpers.js":
/*!****************************!*\
  !*** ./modules/helpers.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"animate\": () => (/* binding */ animate)\n/* harmony export */ });\nconst animate = ({ timing, draw, duration }) => {\r\n  let start = performance.now();\r\n\r\n  requestAnimationFrame(function animate(time) {\r\n    // timeFraction изменяется от 0 до 1\r\n    let timeFraction = (time - start) / duration;\r\n    if (timeFraction > 1) timeFraction = 1;\r\n\r\n    // вычисление текущего состояния анимации\r\n    let progress = timing(timeFraction);\r\n\r\n    draw(progress); // отрисовать её\r\n\r\n    if (timeFraction < 1) {\r\n      requestAnimationFrame(animate);\r\n    }\r\n  });\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./modules/helpers.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./modules/helpers.js\");\n\r\n\r\nconst modal = () => {\r\n  const modal = document.querySelector(\".popup\");\r\n  const buttons = document.querySelectorAll(\".popup-btn\");\r\n  const modalContent = modal.querySelector(\".popup-content\");\r\n  const menuActive = document.querySelector(\"menu\");\r\n  const scrollBtn = document.querySelector(\"a\");\r\n  const body = document.querySelector(\"body\");\r\n  let countLeft = 0;\r\n\r\n  const toggleMenu = () => {\r\n    body.addEventListener(\"click\", (e) => {\r\n      if (e.target.closest(\".menu\")) {\r\n        menuActive.classList.add(\"active-menu\");\r\n        //console.log(e.target);\r\n      } else if (e.target.matches(\"menu [href]\")) {\r\n        event.preventDefault();\r\n        const section = document.querySelector(e.target.getAttribute(\"href\"));\r\n        if (section) {\r\n          section.scrollIntoView({\r\n            behavior: \"smooth\",\r\n            block: \"start\",\r\n            inline: \"center\",\r\n          });\r\n        }\r\n        //console.log(e.target);\r\n      } else if (\r\n        !e.target.classList.contains(\"active-menu\") &&\r\n        !e.target.matches(\"menu li\")\r\n      ) {\r\n        menuActive.classList.remove(\"active-menu\");\r\n        //console.log(e.target);\r\n      }\r\n    });\r\n  };\r\n\r\n  buttons.forEach((btn) => {\r\n    btn.addEventListener(\"click\", () => {\r\n      modal.style.display = \"block\";\r\n\r\n      /* if (document.documentElement.clientWidth >= 768) {\r\n        modalAnimate(countLeft, modalContent);\r\n      } */\r\n      if (document.documentElement.clientWidth >= 768) {\r\n        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n          duration: 200,\r\n          timing(timeFraction) {\r\n            return timeFraction;\r\n          },\r\n          draw(progress) {\r\n            modalContent.style.left = 39 * progress + \"%\";\r\n          },\r\n        });\r\n      }\r\n    });\r\n  });\r\n\r\n  modal.addEventListener(\"click\", (e) => {\r\n    if (\r\n      !e.target.closest(\".popup-content\") ||\r\n      e.target.classList.contains(\"popup-close\")\r\n    ) {\r\n      modal.style.display = \"none\";\r\n    }\r\n  });\r\n\r\n  scrollBtn.addEventListener(\"click\", (event) => {\r\n    event.preventDefault();\r\n\r\n    const section = document.querySelector(scrollBtn.getAttribute(\"href\"));\r\n\r\n    if (section) {\r\n      section.scrollIntoView({\r\n        behavior: \"smooth\",\r\n        block: \"start\",\r\n        inline: \"center\",\r\n      });\r\n    }\r\n  });\r\n\r\n  toggleMenu();\r\n  /* sendForm({ formId: \"form3\" }); */\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\r\n\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/regular.js":
/*!****************************!*\
  !*** ./modules/regular.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst regular = () => {\r\n  const regexpText = /[^а-яА-я- ]/;\r\n  const regexpEmail = /[^a-zA-Z0-9@-_\\.!~\\*']/;\r\n  const regexpTel = /[^\\d\\(\\)-]/;\r\n\r\n  const square = document.querySelector(\".calc-square\");\r\n  const count = document.querySelector(\".calc-count\");\r\n  const day = document.querySelector(\".calc-day\");\r\n\r\n  const form1Name = document.getElementById(\"form1-name\");\r\n  const form1Email = document.getElementById(\"form1-email\");\r\n  const form1Phone = document.getElementById(\"form1-phone\");\r\n\r\n  const form2Name = document.getElementById(\"form2-name\");\r\n  const form2Email = document.getElementById(\"form2-email\");\r\n  const form2Phone = document.getElementById(\"form2-phone\");\r\n  const form2Message = document.getElementById(\"form2-message\");\r\n\r\n  const form3Name = document.getElementById(\"form3-name\");\r\n  const form3Phone = document.getElementById(\"form3-phone\");\r\n  const form3Email = document.getElementById(\"form3-email\");\r\n\r\n  square.addEventListener(\"input\", (e) => {\r\n    e.target.value = e.target.value.replace(/[^\\d]/, \"\");\r\n  });\r\n  count.addEventListener(\"input\", (e) => {\r\n    e.target.value = e.target.value.replace(/[^\\d]/, \"\");\r\n  });\r\n  day.addEventListener(\"input\", (e) => {\r\n    e.target.value = e.target.value.replace(/[^\\d]/, \"\");\r\n  });\r\n\r\n  form1Name.addEventListener(\"input\", (e) => {\r\n    e.target.value = e.target.value.replace(regexpText, \"\");\r\n  });\r\n\r\n  form1Email.addEventListener(\"input\", (e) => {\r\n    e.target.value = e.target.value.replace(regexpEmail, \"\");\r\n  });\r\n\r\n  form1Phone.addEventListener(\"input\", (e) => {\r\n    e.target.value = e.target.value.replace(regexpTel, \"\");\r\n  });\r\n\r\n  form2Name.addEventListener(\"input\", (e) => {\r\n    e.target.value = e.target.value.replace(regexpText, \"\");\r\n  });\r\n\r\n  form2Message.addEventListener(\"input\", (e) => {\r\n    e.target.value = e.target.value.replace(regexpText, \"\");\r\n  });\r\n\r\n  form2Email.addEventListener(\"input\", (e) => {\r\n    e.target.value = e.target.value.replace(regexpEmail, \"\");\r\n  });\r\n\r\n  form2Phone.addEventListener(\"input\", (e) => {\r\n    e.target.value = e.target.value.replace(regexpTel, \"\");\r\n  });\r\n\r\n  form3Name.addEventListener(\"input\", (e) => {\r\n    e.target.value = e.target.value.replace(regexpText, \"\");\r\n  });\r\n\r\n  form3Phone.addEventListener(\"input\", (e) => {\r\n    e.target.value = e.target.value.replace(regexpTel, \"\");\r\n  });\r\n\r\n  form3Email.addEventListener(\"input\", (e) => {\r\n    e.target.value = e.target.value.replace(regexpEmail, \"\");\r\n  });\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (regular);\r\n\n\n//# sourceURL=webpack:///./modules/regular.js?");

/***/ }),

/***/ "./modules/sendForm.js":
/*!*****************************!*\
  !*** ./modules/sendForm.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst sendForm = ({ /* formId, */ somElem = [] }) => {\r\n  const forms = document.querySelectorAll(\"form\");\r\n  const statusBlock = document.createElement(\"div\");\r\n  const loadText = \"Загрузка...\";\r\n  const errorText = \"Ошибка...\";\r\n  const successText = \"Спасибо. С вами свяжутся.\";\r\n\r\n  const userPhone = document.querySelectorAll('input[name=\"user_phone\"]');\r\n  const userName = document.querySelectorAll('input[name=\"user_name\"]');\r\n  const userMessage = document.querySelectorAll('input[name=\"user_message\"]');\r\n  const userMail = document.querySelectorAll('input[name=\"user_email\"]');\r\n\r\n  let isValid;\r\n\r\n  const createAttr = () => {\r\n    userPhone.forEach((element) => {\r\n      element.setAttribute(\"data-reg\", \"^[\\\\d\\\\(\\\\)\\\\+-]*$\");\r\n      element.setAttribute(\"is-valid\", 0);\r\n    });\r\n\r\n    userName.forEach((element) => {\r\n      element.setAttribute(\"data-reg\", \"^([А-Яа-я]{1}[А-Яа-я ]{1,})$\");\r\n      element.setAttribute(\"is-valid\", 0);\r\n    });\r\n\r\n    userMessage.forEach((element) => {\r\n      element.setAttribute(\"data-reg\", \"^[А-Яа-я \\\\d\\\\.,]*$\");\r\n      element.setAttribute(\"is-valid\", 0);\r\n    });\r\n\r\n    userMail.forEach((element) => {\r\n      element.setAttribute(\r\n        \"data-reg\",\r\n        \"^(([\\\\d\\\\w]{1}[\\\\S]{0,})@([\\\\S]{1,}\\\\.){1,}[\\\\w]{2,})$\"\r\n      );\r\n      element.setAttribute(\"is-valid\", 0);\r\n    });\r\n  };\r\n\r\n  userPhone.forEach((element) => {\r\n    element.addEventListener(\"input\", (e) => {\r\n      validate(e.target);\r\n    });\r\n  });\r\n\r\n  userName.forEach((element) => {\r\n    element.addEventListener(\"input\", (e) => {\r\n      validate(e.target);\r\n    });\r\n  });\r\n\r\n  userMessage.forEach((element) => {\r\n    element.addEventListener(\"input\", (e) => {\r\n      validate(e.target);\r\n    });\r\n  });\r\n\r\n  userMail.forEach((element) => {\r\n    element.addEventListener(\"input\", (e) => {\r\n      validate(e.target);\r\n    });\r\n  });\r\n\r\n  const validate = (el) => {\r\n    const inputValue = el.value;\r\n    const inputReg = el.getAttribute(\"data-reg\");\r\n    const reg = new RegExp(inputReg);\r\n\r\n    if (reg.test(inputValue)) {\r\n      el.style.border = \"2px solid rgb(0, 196, 0)\";\r\n      el.setAttribute(\"is-valid\", 1);\r\n    } else {\r\n      el.style.border = \"2px solid rgb(255, 0, 0)\";\r\n      el.setAttribute(\"is-valid\", 0);\r\n    }\r\n\r\n    //console.log(inputValue, reg);\r\n  };\r\n\r\n  const sendData = async (data) => {\r\n    const res = await fetch(\"https://jsonplaceholder.typicode.com/posts\", {\r\n      method: \"POST\",\r\n      body: JSON.stringify(data),\r\n      headers: {\r\n        \"Content-Type\": \"application/json\",\r\n      },\r\n    });\r\n\r\n    return await res.json();\r\n  };\r\n\r\n  const submitForm = (elemForm) => {\r\n    const formElements = elemForm.querySelectorAll(\"input\");\r\n    const formData = new FormData(elemForm);\r\n    const formBody = {};\r\n\r\n    statusBlock.textContent = loadText;\r\n    elemForm.append(statusBlock);\r\n\r\n    if (elemForm.id == \"form3\") {\r\n      statusBlock.style.color = \"white\";\r\n    }\r\n\r\n    formData.forEach((val, key) => {\r\n      formBody[key] = val;\r\n    });\r\n\r\n    somElem.forEach((elem) => {\r\n      const element = document.getElementById(elem.id);\r\n\r\n      if (elem.type === \"block\") {\r\n        formBody[elem.id] = element.textContent;\r\n        console.log(\"данные\", formBody);\r\n      } else if (elem.type === \"input\") {\r\n        formBody[elem.id] = element.value;\r\n      }\r\n    });\r\n\r\n    console.log(isValid);\r\n\r\n    if (isValid === 1) {\r\n      sendData(formBody)\r\n        .then((data) => {\r\n          statusBlock.textContent = successText;\r\n\r\n          formElements.forEach((input) => {\r\n            input.value = \"\";\r\n            input.style.border = \"none\";\r\n          });\r\n        })\r\n        .catch((error) => {\r\n          statusBlock.textContent = errorText;\r\n        });\r\n    } else {\r\n      console.log(\"ошибка в поле\");\r\n      statusBlock.textContent = errorText;\r\n      (\"ERROR\");\r\n    }\r\n  };\r\n\r\n  forms.forEach((form) => {\r\n    try {\r\n      if (!form) {\r\n        throw new Error(\"Верните форму\");\r\n      }\r\n      form.addEventListener(\"submit\", (e) => {\r\n        e.preventDefault();\r\n        const allValid = [];\r\n        const inputs = form.querySelectorAll(\"input\");\r\n\r\n        inputs.forEach((el) => {\r\n          if (el.getAttribute(\"is-valid\")) {\r\n            allValid.push(el.getAttribute(\"is-valid\"));\r\n          }\r\n        });\r\n\r\n        for (let i = 0; i < allValid.length; i++) {\r\n          if (allValid[i] == 0) {\r\n            isValid = 0;\r\n            break;\r\n          } else {\r\n            isValid = 1;\r\n          }\r\n        }\r\n\r\n        submitForm(form);\r\n      });\r\n    } catch (error) {\r\n      console.log(error.message);\r\n    }\r\n  });\r\n\r\n  createAttr();\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\r\n\n\n//# sourceURL=webpack:///./modules/sendForm.js?");

/***/ }),

/***/ "./modules/slider.js":
/*!***************************!*\
  !*** ./modules/slider.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst slider = () => {\r\n  const sliderBlock = document.querySelector(\".portfolio-content\");\r\n  const slides = document.querySelectorAll(\".portfolio-item\");\r\n  const portfolioDots = document.querySelector(\".portfolio-dots\");\r\n  const timeInterval = 2000;\r\n  const newArrDots = [];\r\n\r\n  let currentSlide = 0;\r\n  let interval;\r\n  let dots;\r\n\r\n  const createDots = () => {\r\n    for (let i = 0; i < slides.length; i++) {\r\n      const newDot = document.createElement(\"li\");\r\n      newDot.classList.add(\"dot\");\r\n      newArrDots[i] = newDot;\r\n      portfolioDots.append(newArrDots[i]);\r\n    }\r\n    newArrDots[0].classList.add(\"dot-active\");\r\n    dots = document.querySelectorAll(\".dot\");\r\n  };\r\n\r\n  const prevSlide = (elems, index, srtClass) => {\r\n    elems[index].classList.remove(srtClass);\r\n  };\r\n\r\n  const nextSlide = (elems, index, srtClass) => {\r\n    elems[index].classList.add(srtClass);\r\n  };\r\n\r\n  const autoSlide = () => {\r\n    prevSlide(slides, currentSlide, \"portfolio-item-active\");\r\n    prevSlide(dots, currentSlide, \"dot-active\");\r\n    currentSlide++;\r\n\r\n    if (currentSlide >= slides.length) {\r\n      currentSlide = 0;\r\n    }\r\n\r\n    nextSlide(slides, currentSlide, \"portfolio-item-active\");\r\n    nextSlide(dots, currentSlide, \"dot-active\");\r\n  };\r\n\r\n  const startSlide = (timer = 1500) => {\r\n    interval = setInterval(autoSlide, timer);\r\n  };\r\n\r\n  const stoptSlide = () => {\r\n    clearInterval(interval);\r\n  };\r\n\r\n  sliderBlock.addEventListener(\"click\", (e) => {\r\n    e.preventDefault();\r\n\r\n    if (!e.target.matches(\".dot, .portfolio-btn\")) {\r\n      return;\r\n    }\r\n\r\n    prevSlide(slides, currentSlide, \"portfolio-item-active\");\r\n    prevSlide(dots, currentSlide, \"dot-active\");\r\n\r\n    if (e.target.matches(\"#arrow-right\")) {\r\n      currentSlide++;\r\n    } else if (e.target.matches(\"#arrow-left\")) {\r\n      currentSlide--;\r\n    } else if (e.target.classList.contains(\"dot\")) {\r\n      dots.forEach((dot, index) => {\r\n        if (e.target === dot) {\r\n          currentSlide = index;\r\n        }\r\n      });\r\n    }\r\n\r\n    if (currentSlide >= slides.length) {\r\n      currentSlide = 0;\r\n    }\r\n\r\n    if (currentSlide < 0) {\r\n      currentSlide = slides.length - 1;\r\n    }\r\n\r\n    nextSlide(slides, currentSlide, \"portfolio-item-active\");\r\n    nextSlide(dots, currentSlide, \"dot-active\");\r\n  });\r\n\r\n  sliderBlock.addEventListener(\r\n    \"mouseenter\",\r\n    (e) => {\r\n      if (e.target.matches(\".dot, .portfolio-btn\")) {\r\n        stoptSlide();\r\n      }\r\n    },\r\n    true\r\n  );\r\n\r\n  sliderBlock.addEventListener(\r\n    \"mouseleave\",\r\n    (e) => {\r\n      if (e.target.matches(\".dot, .portfolio-btn\")) {\r\n        startSlide(timeInterval);\r\n      }\r\n    },\r\n    true\r\n  );\r\n\r\n  createDots();\r\n  startSlide(timeInterval);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\r\n\n\n//# sourceURL=webpack:///./modules/slider.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadline) => {\r\n  const timerHours = document.getElementById(\"timer-hours\");\r\n  const timerMinutes = document.getElementById(\"timer-minutes\");\r\n  const timerSeconds = document.getElementById(\"timer-seconds\");\r\n\r\n  const getTimeRemaining = () => {\r\n    let dateStop = new Date(deadline).getTime();\r\n    let dateNow = new Date().getTime();\r\n\r\n    let timeRemaining = (dateStop - dateNow) / 1000;\r\n    let hours = Math.floor(timeRemaining / 60 / 60);\r\n    let minutes = Math.floor((timeRemaining / 60) % 60);\r\n    let seconds = Math.floor(timeRemaining % 60);\r\n\r\n    return { timeRemaining, hours, minutes, seconds };\r\n  };\r\n\r\n  const updataClock = () => {\r\n    let getTime = getTimeRemaining();\r\n\r\n    const fHours = getTime.hours < 10 ? \"0\" + getTime.hours : getTime.hours;\r\n    const fMinutes =\r\n      getTime.minutes < 10 ? \"0\" + getTime.minutes : getTime.minutes;\r\n    const fSeconds =\r\n      getTime.seconds < 10 ? \"0\" + getTime.seconds : getTime.seconds;\r\n\r\n    timerHours.textContent = fHours;\r\n    timerMinutes.textContent = fMinutes;\r\n    timerSeconds.textContent = fSeconds;\r\n\r\n    if (getTime.timeRemaining < 0) {\r\n      clearInterval(interval);\r\n      timerDays.textContent = \"00\";\r\n      timerHours.textContent = \"00\";\r\n      timerMinutes.textContent = \"00\";\r\n      timerSeconds.textContent = \"00\";\r\n    }\r\n  };\r\n\r\n  updataClock();\r\n  const interval = setInterval(updataClock, 1000);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\r\n\n\n//# sourceURL=webpack:///./modules/timer.js?");

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