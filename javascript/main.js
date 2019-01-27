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
/******/ 	return __webpack_require__(__webpack_require__.s = "./javascript/src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./javascript/src/js/modules/fetch-games.js":
/*!**************************************************!*\
  !*** ./javascript/src/js/modules/fetch-games.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initFetchGames; });\nfunction initFetchGames() {\n  function createTeam(team) {\n    const element = document.createElement('div');\n    element.classList.add('game-team');\n    element.innerHTML = `<img src=\"${team.logo}\"><h4>${team.alternateName}</h4><span>${team.name}</span>`;\n    return element;\n  }\n\n  function createInfo(name, time) {\n    const element = document.createElement('div');\n    element.classList.add('game-info');\n    element.innerHTML = `<h3>${name}</h3><h5>${time}</h5>`;\n\n    return element;\n  }\n\n  function createGame(game) {\n    const element = document.createElement('li');\n    element.classList.add('games-element');\n    element.appendChild(createInfo(game.name, game.startDate.time.full));\n    element.appendChild(createTeam(game.teams.homeTeam));\n    element.appendChild(createTeam(game.teams.awayTeam));\n    return element;\n  }\n\n  async function fetchGames(url) {\n    try {\n      const gamesResponse = await fetch(url);\n      const gamesJSON = await gamesResponse.json();\n      const gamesList = document.querySelector('.games-list');\n      const currentTime = Math.round(new Date().getTime() / 1000) || 0;\n      gamesJSON.forEach((game) => {\n        if (game.startDate.timestamp > currentTime) {\n          const gameElement = createGame(game);\n          gamesList.appendChild(gameElement);\n        } else {\n          console.log('nao', game.startDate.timestamp, currentTime);\n        }\n      });\n    } catch (erro) {\n      console.log(erro);\n    }\n  }\n\n  fetchGames('http://localhost/apiGe.php');\n}\n\n\n//# sourceURL=webpack:///./javascript/src/js/modules/fetch-games.js?");

/***/ }),

/***/ "./javascript/src/js/script.js":
/*!*************************************!*\
  !*** ./javascript/src/js/script.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_fetch_games__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/fetch-games */ \"./javascript/src/js/modules/fetch-games.js\");\n\n\nObject(_modules_fetch_games__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n\n//# sourceURL=webpack:///./javascript/src/js/script.js?");

/***/ })

/******/ });