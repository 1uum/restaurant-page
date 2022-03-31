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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction buildContactDisplay() {\n    const contactDisplay = document.createElement(\"div\");\n    contactDisplay.classList.add(\"contactDisplay\");\n    contactDisplay.setAttribute(\"id\", \"contact\");\n    contactDisplay.appendChild(buildContactInfo());\n\n    return contactDisplay;\n}\n\nfunction buildContactInfo() {\n    const infoContainer = document.createElement(\"div\");\n    infoContainer.classList.add(\"infoContainer\");\n\n    const contactUs = document.createElement(\"h2\");\n    contactUs.textContent = \"Contact Us: \"\n    infoContainer.appendChild(contactUs);\n\n    const p1 = document.createElement(\"p\");\n    p1.textContent = \"You can find us in the streets of the world, specially if you are in Italy!\";\n    infoContainer.appendChild(p1);\n\n    const p2 = document.createElement (\"p\");\n    p2.textContent = \"You can find us in social media as: @Gelato_yourcountry\";\n    infoContainer.appendChild(p2);\n    \n    const p3 = document.createElement (\"p\");\n    p3.textContent = \"Or you can contact us via email! at: gelato@yourcountry.com\";\n    infoContainer.appendChild(p3);\n\n    return infoContainer;\n}\n\nfunction loadContactDisplay() {\n    const container = document.getElementById(\"container\");\n    container.appendChild(buildContactDisplay());\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContactDisplay);\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction buildHomeDisplay() {\n    const homeDisplay = document.createElement(\"div\");\n    homeDisplay.classList.add(\"homeDisplay\");\n    homeDisplay.setAttribute(\"id\", \"home\");\n    homeDisplay.textContent = \"Gelato is a frozen dessert of Italian origin. Artisanal gelato in Italy generally contains 6-10% butterfat, which is lower than other styles of frozen dessert. Gelato typically contains 70% less air and more flavoring than other kinds of frozen desserts, giving it a density and richness that distinguishes it from other ice creams.\"\n    return homeDisplay;\n}\n\nfunction loadHomeDisplay() {\n    const container = document.getElementById(\"container\");\n    container.appendChild(buildHomeDisplay());\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHomeDisplay);\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-page */ \"./src/main-page.js\");\n\n\n(0,_main_page__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/main-page.js":
/*!**************************!*\
  !*** ./src/main-page.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\nlet activePage = \"home\";\n\nfunction buildHeader() {\n    const header = document.createElement(\"header\");\n    header.classList.add(\"header\");\n\n    const name = document.createElement(\"name\");\n    name.classList.add(\"name\");\n    name.textContent = \"Gelato\";\n\n    header.appendChild(name);\n    header.appendChild(buildNavMenu());\n    return header;\n}\n\nfunction buildNavMenu(){\n    const navMenu = document.createElement(\"ul\");\n    navMenu.classList.add(\"navMenu\");\n\n    const home = document.createElement(\"li\");\n    home.textContent = \"Home\";\n    navMenu.appendChild(home);\n    \n    const menu = document.createElement(\"li\");\n    menu.textContent = \"Menu\";\n    navMenu.appendChild(menu);\n    \n    const contact = document.createElement(\"li\");\n    contact.textContent = \"Contact\";\n    navMenu.appendChild(contact);\n\n\n    home.addEventListener(\"click\", (e) =>{\n        loadPage(\"home\")\n    });\n    \n    menu.addEventListener(\"click\", (e) =>{\n        loadPage(\"menu\");\n    });\n    \n    contact.addEventListener(\"click\", (e) =>{\n        loadPage(\"contact\");\n    });\n    \n    return navMenu;\n}\n\nfunction buildContainer(){\n    const container = document.createElement(\"div\");\n    container.setAttribute(\"id\", \"container\");\n    return container;\n}\n\nfunction buildSignature(){\n    const signature = document.createElement(\"a\");\n    signature.classList.add(\"signature\");\n    signature.textContent = \"Made by /1uum\";\n    signature.href = \"https://github.com/1uum/restaurant-page\";\n    return signature;\n}\n\nfunction buildSite(){\n    const content = document.getElementById (\"content\");\n\n    content.appendChild(buildHeader());\n    content.appendChild(buildContainer());\n    content.appendChild(buildSignature());\n    (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n}\n\nfunction loadPage(newPage) {\n    if (newPage !== activePage){\n        removePage(activePage);\n        activePage = newPage;\n\n        if (newPage === \"home\"){\n            (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n        } else\n        if (newPage === \"menu\"){\n            (0,_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n        } else\n        if (newPage === \"contact\"){\n            (0,_contact__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n        }\n    }\n    return(activePage);\n}\n\nfunction removePage(activePage){\n    let child = document.getElementById(activePage);\n    container.removeChild(child);\n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buildSite);\n\n//# sourceURL=webpack://restaurant-page/./src/main-page.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction buildMenuDisplay() {\n    const menuDisplay = document.createElement(\"div\");\n    menuDisplay.classList.add(\"menuDisplay\");\n    menuDisplay.setAttribute(\"id\", \"menu\");\n    menuDisplay.appendChild(buildTradFlavors());\n    menuDisplay.appendChild(buildModFlavors());\n    return menuDisplay;\n}\n\nfunction buildTradFlavors(){\n    const tradFlavors = document.createElement(\"div\");\n    tradFlavors.classList.add(\"flavorsContainer\");\n\n    const flavorsTitle = document.createElement(\"h2\");\n    flavorsTitle.textContent = \"Traditional Flavors\";\n    tradFlavors.appendChild(flavorsTitle);\n\n    const flavors = document.createElement(\"ul\");\n\n    const vanilla = document.createElement(\"li\");\n    vanilla.textContent = \"Vanilla\";\n    flavors.appendChild (vanilla); \n    const chocolate = document.createElement(\"li\");\n    chocolate.textContent = \"Chocolate\";\n    flavors.appendChild (chocolate); \n    const hazelnut = document.createElement(\"li\"); \n    hazelnut.textContent = \"Hazelnut\";\n    flavors.appendChild (hazelnut); \n    const almond = document.createElement(\"li\"); \n    almond.textContent = \"Almond\";\n    flavors.appendChild (almond); \n    const pistachio = document.createElement(\"li\");\n    pistachio.textContent = \"Pistachio\";\n    flavors.appendChild (pistachio); \n    const cream = document.createElement(\"li\"); \n    cream.textContent = \"Cream\";\n    flavors.appendChild (cream); \n    const stracciatella = document.createElement(\"li\");\n    stracciatella.textContent = \"Stracciatella\";\n    flavors.appendChild (stracciatella); \n    \n    tradFlavors.appendChild(flavors);\n\n    return tradFlavors;\n    \n}\n\nfunction buildModFlavors(){\n    const modFlavors = document.createElement(\"div\");\n    modFlavors.classList.add(\"flavorsContainer\");\n\n    const flavorsTitle = document.createElement(\"h2\");\n    flavorsTitle.classList.add(\"flavors\");\n    flavorsTitle.textContent = \"Modern Flavors\";\n    modFlavors.appendChild(flavorsTitle);\n\n    const flavors = document.createElement(\"ul\");\n\n    const raspberry = document.createElement(\"li\");\n    raspberry.textContent = \"Raspberry\";\n    flavors.appendChild (raspberry); \n    const strawberry = document.createElement(\"li\");\n    strawberry.textContent = \"Strawberry\";\n    flavors.appendChild (strawberry); \n    const apple = document.createElement(\"li\"); \n    apple.textContent = \"Apple\";\n    flavors.appendChild (apple); \n    const lemon = document.createElement(\"li\"); \n    lemon.textContent = \"Lemon\";\n    flavors.appendChild (lemon); \n    const pineapple = document.createElement(\"li\");\n    pineapple.textContent = \"Pineapple\";\n    flavors.appendChild (pineapple); \n    const braspberry = document.createElement(\"li\"); \n    braspberry.textContent = \"Black Raspberry\";\n    flavors.appendChild (braspberry);\n    modFlavors.appendChild(flavors);\n\n    return modFlavors;\n    \n}\n\nfunction loadMenuDisplay() {\n    const container = document.getElementById(\"container\");\n    container.appendChild(buildMenuDisplay());\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenuDisplay);\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;