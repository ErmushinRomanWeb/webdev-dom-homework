/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./appRender.js":
/*!**********************!*\
  !*** ./appRender.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   appRender: () => (/* binding */ appRender)\n/* harmony export */ });\n/* harmony import */ var _modules_autorisation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/autorisation.js */ \"./modules/autorisation.js\");\n/* harmony import */ var _modules_getFunction_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/getFunction.js */ \"./modules/getFunction.js\");\n/* harmony import */ var _modules_render_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/render.js */ \"./modules/render.js\");\n/* harmony import */ var _modules_variables_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/variables.js */ \"./modules/variables.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\"use strict\";\r\n\r\n//?Данная функция принимаетв себя переменную, которая = true or false и отрисовывает разметку внутри единственной разметки в HTML, для того, чтобы потом отрисовать туда следующую разметку\r\n// ?блок отвечает только за страницу с комментариями\r\nfunction appRender(isLogin, loader) {\r\n  (0,_modules_variables_js__WEBPACK_IMPORTED_MODULE_3__.newIsLoginForLike)(isLogin)\r\n  const app = document.querySelector('.app');//?Нашли единственный элемент в HTML\r\n  if (isLogin) {\r\n    //?Отрисовываем разметку >\r\n    app.innerHTML = `<div class=\"container\">\r\n        <ul id=\"comment-block\" class=\"comments\">\r\n          <!-- render -->\r\n        </ul>\r\n        <div id=\"addFormElement\" class=\"add-form\">\r\n          <!-- render -->\r\n        </div>\r\n      </div>`;\r\n    (0,_modules_getFunction_js__WEBPACK_IMPORTED_MODULE_1__.getFunction)(_modules_variables_js__WEBPACK_IMPORTED_MODULE_3__.commentators, loader);//?после того, как отрисовали разметку запускаем getFunction(смотри процесс в getFunction.js)\r\n    (0,_modules_render_js__WEBPACK_IMPORTED_MODULE_2__.commentsRender)(_modules_variables_js__WEBPACK_IMPORTED_MODULE_3__.commentators);\r\n  } else {\r\n    app.innerHTML = `<div class=\"container\">\r\n  <ul id=\"comment-block\" class=\"comments\">\r\n    <!-- render -->\r\n  </ul>\r\n  <div id=\"addFormElement\" class=\"add-form\">\r\n    войти в айти\r\n  </div>\r\n  <div class=\"start-form\">Для того, чтобы войти нажми ><span id=\"sign-in\" class=\"menu\">Войти</span></div>\r\n</div>`;\r\n    //?для того, чтобы перейти на форму авторизации надо найти sign-in и на него повесить обработчик событий\r\n    (0,_modules_getFunction_js__WEBPACK_IMPORTED_MODULE_1__.getFunction)(_modules_variables_js__WEBPACK_IMPORTED_MODULE_3__.commentators, loader);//?после того, как отрисовали разметку запускаем getFunction(смотри процесс в getFunction.js)\r\n    (0,_modules_render_js__WEBPACK_IMPORTED_MODULE_2__.commentsRender)(_modules_variables_js__WEBPACK_IMPORTED_MODULE_3__.commentators);//?render.js\r\n    //? autorisation()\r\n    const addForm = document.getElementById('addFormElement');//? данным действием мы убираем форму и вместо  нее ставим ссылку\r\n    console.log(addForm);\r\n    addForm.style.display = `none`;//?мы обращаемся к переменной addForm, и задаем ей дисплей нон, благодаря \r\n    const signIn = document.getElementById('sign-in');//?определяем, так как разметка отрисовалась\r\n    signIn.addEventListener('click', () => {\r\n      (0,_modules_autorisation_js__WEBPACK_IMPORTED_MODULE_0__.autorisation)()\r\n    })\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://webdev-dom-homework/./appRender.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _appRender_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appRender.js */ \"./appRender.js\");\n\r\n\r\n(0,_appRender_js__WEBPACK_IMPORTED_MODULE_0__.appRender)(false)\r\n\r\n\r\n//ПО СУТИ ТУТ МЫ ДЕЛИМ ПРОЕКТ НА 2 ГЛОБАЛЬНЫЕ ЧАСТИ, НА ФОРМЫ И НА КОММЕНТАРИИ\r\n\r\n//План на 15,08,2023\r\n//1. Объявить переменные внутри функций /ЕСТЬ\r\n\r\n// 2. Включить функцию авторизации\r\n// 2.1. Подключить функцию получения токена к формк\r\n//\n\n//# sourceURL=webpack://webdev-dom-homework/./index.js?");

/***/ }),

/***/ "./modules/api.js":
/*!************************!*\
  !*** ./modules/api.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getComments: () => (/* binding */ getComments),\n/* harmony export */   postComments: () => (/* binding */ postComments),\n/* harmony export */   postRegistration: () => (/* binding */ postRegistration),\n/* harmony export */   postlogin: () => (/* binding */ postlogin)\n/* harmony export */ });\n/* harmony import */ var _variables_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables.js */ \"./modules/variables.js\");\n\r\n\r\nfunction getComments() {\r\n    return fetch(_variables_js__WEBPACK_IMPORTED_MODULE_0__.baseUrl,\r\n        {\r\n            method: 'GET',\r\n        }).then((response) => {\r\n            if (response.status != 200) {\r\n                throw new Error('error')\r\n            } else {\r\n                return response.json();\r\n            }\r\n        })\r\n}\r\n\r\n//отвечает за добавление введенной нами информации на сервер, из этой информации потом получаются новые комментарии\r\nfunction postComments({ text }) {\r\n    console.log(_variables_js__WEBPACK_IMPORTED_MODULE_0__.token);\r\n    return fetch(_variables_js__WEBPACK_IMPORTED_MODULE_0__.baseUrl, {\r\n        method: 'POST',\r\n        headers: {\r\n            Authorization: `Bearer ${_variables_js__WEBPACK_IMPORTED_MODULE_0__.token}`\r\n        },\r\n        body: JSON.stringify({\r\n            text: text,\r\n            forceError: true,\r\n        })\r\n    }).then((response) => {\r\n        if (response.status === 400) {\r\n            throw new Error('< 2 sumb')\r\n        } else if (response.status === 500) {\r\n            throw new Error('server fall')\r\n        } else if (response.status === 401) {\r\n            throw new Error('unauthorized')\r\n        } else {\r\n            console.log(response);\r\n            return response.json();\r\n        }\r\n    })\r\n}\r\n//Это подключить к loginPage/loginProcess/ЕСТЬ\r\nfunction postlogin({ login, password }) {\r\n    return fetch (_variables_js__WEBPACK_IMPORTED_MODULE_0__.loginUrl, {\r\n        method: 'POST',\r\n        body: JSON.stringify({\r\n            login,\r\n            password,\r\n        })\r\n    }).then((response) => {\r\n        if (response.status === 201) {\r\n            return response.json()\r\n        } else if (response.status === 400) {\r\n            throw new Error('wrong login or password')} \r\n    })\r\n}\r\n\r\nfunction postRegistration({login, name, password }) {//функция будет принимать в себя логин, имя пользователя и пароль, вызывается в loginPage\r\n    return fetch (_variables_js__WEBPACK_IMPORTED_MODULE_0__.registrationUrl, {// сылка registrationUrl(variables) \r\n        method: 'POST', //меотод добавляет в массив с пользователями информацию, которая преедана в параметрах\r\n        body: JSON.stringify({\r\n            login,\r\n            name,\r\n            password,\r\n        })\r\n    }).then((response) => {\r\n        if (response.status === 201) {\r\n            return response.json()//возвращаем данные о зараегистрированном пользователе в формате JSON\r\n        } else if (response.status === 400) {\r\n            throw new Error('user already exists')\r\n        } else {\r\n            throw new Error('Error')\r\n        }\r\n    })\r\n}\n\n//# sourceURL=webpack://webdev-dom-homework/./modules/api.js?");

/***/ }),

/***/ "./modules/autorisation.js":
/*!*********************************!*\
  !*** ./modules/autorisation.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   autorisation: () => (/* binding */ autorisation)\n/* harmony export */ });\n/* harmony import */ var _appRender_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../appRender.js */ \"./appRender.js\");\n/* harmony import */ var _loginPage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loginPage.js */ \"./modules/loginPage.js\");\n/* harmony import */ var _variables_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./variables.js */ \"./modules/variables.js\");\n\r\n\r\n\r\n\r\n//этот блок у нас рендерит формы авторизации и регистрации\r\n//\r\n\r\nfunction autorisation() {\r\n  //это обращение к единственному элементу разметки в HTML\r\n  const app = document.querySelector('.app');  // тут меняем содержание элемента app на нашу форму авторизации, отрисовываем страницу\r\n  app.innerHTML = `<div class=\"container\"> \r\n    <div class=\"login-box\"> <!-- Авторизация -->\r\n        <h2 class=\"login-box__heading\">Форма входа</h2>\r\n        <input type=\"text\" id=\"loginInput\" placeholder=\"Ведите логин\" class=\"login-box__login\"> <br>\r\n        <input type=\"text\" id=\"passwordInput\" placeholder=\"Ведите пароль\" class=\"login-box__password\"> <br>\r\n        <button id=\"loginButton\" class=\"login-box__button\">Войти</button> <br>\r\n        <a href=\"#\" id=\"registrationLink\" class=\"login-box__link\">Зарегистрироваться</a>\r\n    </div>\r\n    </div>`;//эта разметка аоявляется(рендер) на странице потому, что элемент app уже есть и мы, с помощью innerHTML, меняем разметку,  ТАК И РАБОТАЕТ RENDER!!!!!!!!\r\n    console.log(app);\r\n    (0,_loginPage_js__WEBPACK_IMPORTED_MODULE_1__.loginProcess)();\r\n//В конце запускается loginProcess, которая запускается и ждет, пока пользователь не введет логин и пароль и нажмет кнопку(стмотри процесс в loginPage.js) \r\n//  процесс получения токена и присваивания его переменной - token, которая потом используется для получения доступа к написанию комментария.\r\n\r\n//далее, прямо в функции autorisation мы обращаемся к ссылке, которая должна переводить нас на форму регистрации >\r\n  const registrationLink = document.getElementById('registrationLink');\r\n  // добавляем обработчик события на эту ссылку, для того, чтобы при нажатии на эту ссылку у нас происходила отрисовка формы регистрации\r\n  registrationLink.addEventListener('click', (event) => {\r\n    // event.preventDefault();\r\n    app.innerHTML = `<div class=\"container\">\r\n        <div class=\"login-box\">\r\n          <!-- Регистрация -->\r\n          <h2 class=\"login-box__heading\">Форма регистрации</h2>\r\n          <input type=\"text\" id=\"regNameInput\" placeholder=\"Ведите имя\" class=\"login-box__name\" /> <br />\r\n          <input type=\"text\" id=\"regLoginInput\" placeholder=\"Придумайте логин\" class=\"login-box__login\" /> <br />\r\n          <input type=\"text\" id=\"regPasswordInput\" placeholder=\"Придумайте пароль\" class=\"login-box__password\" />\r\n          <br />\r\n          <button id=\"registerButton\" class=\"login-box__button\">\r\n            Зарегистрироваться\r\n          </button>\r\n          <br />\r\n          <a href=\"#\" id=\"loginLink\" class=\"login-box__link\">Войти</a>\r\n        </div>\r\n      </div>`;\r\n      (0,_loginPage_js__WEBPACK_IMPORTED_MODULE_1__.registrationProcess)();\r\n\r\n    const loginLink = document.getElementById('loginLink');\r\n    loginLink.addEventListener('click', event => {\r\n      // event.preventDefault();\r\n      autorisation()\r\n    })\r\n  })\r\n\r\n}\n\n//# sourceURL=webpack://webdev-dom-homework/./modules/autorisation.js?");

/***/ }),

/***/ "./modules/clickEventButton.js":
/*!*************************************!*\
  !*** ./modules/clickEventButton.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   clickEventButton: () => (/* binding */ clickEventButton)\n/* harmony export */ });\n/* harmony import */ var _postFunction_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./postFunction.js */ \"./modules/postFunction.js\");\n/* harmony import */ var _variables_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./variables.js */ \"./modules/variables.js\");\n\r\n\r\n\r\n//функция отвечает за добавление нового комментария посредством вызова в ней postFunction после обработки события - нажатие кнопки\r\nfunction clickEventButton() {\r\n  const formButtonElement = document.getElementById(\"form-button\");\r\n  const nameInputElement = document.getElementById(\"name-input\");\r\n  const textInputElement = document.getElementById(\"text-input\");// элементы отрисованы заранее в formRender функции\r\n  // \r\n  formButtonElement.addEventListener(\"click\", () => {//вешаем обработчик события \r\n    nameInputElement.classList.remove(\"error\");\r\n    if (nameInputElement.value === \"\") {\r\n      nameInputElement.classList.add(\"error\");//при отсутствии в полях ввода информации вешаем класс, который красит поля ввода\r\n      return;\r\n    }\r\n    textInputElement.classList.remove(\"error\");\r\n    if (textInputElement.value === \"\") {\r\n      textInputElement.classList.add(\"error\");\r\n      return;\r\n    }\r\n    (0,_postFunction_js__WEBPACK_IMPORTED_MODULE_0__.postFunction)(_variables_js__WEBPACK_IMPORTED_MODULE_1__.commentators, _variables_js__WEBPACK_IMPORTED_MODULE_1__.loader)//если поля ввода заполнены, то вызывается postFunction(смотри в postFunction.js)\r\n  });\r\n}\n\n//# sourceURL=webpack://webdev-dom-homework/./modules/clickEventButton.js?");

/***/ }),

/***/ "./modules/getFunction.js":
/*!********************************!*\
  !*** ./modules/getFunction.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getFunction: () => (/* binding */ getFunction)\n/* harmony export */ });\n/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render.js */ \"./modules/render.js\");\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.js */ \"./modules/api.js\");\n\r\n\r\n\r\n//Функция принимает в себя аргументы, массива и индикатора загрузки\r\nfunction getFunction(commentators, loader) {\r\n  loader = true;// Тут, пока страница не загрузилась, индикатор по умолчанию будет = false, и как только функция дошла до выполнения < этого кода индикатор = true появляется форма >\r\n  (0,_render_js__WEBPACK_IMPORTED_MODULE_0__.formRender)(loader);//Запустили formRender(смотри процесс в render.js )\r\n  (0,_api_js__WEBPACK_IMPORTED_MODULE_1__.getComments)().then((responseData) => {\r\n    console.log(responseData.comments);//getComments(api.js) вызвали ее и она нам вернула промис с объектом в котором сохраненные данные с комментариями с сервера в формате json\r\n    commentators = responseData.comments;// в аргумент, который явл. переменной массива, помещаем данные из объекта, которые внутри массива, внутри которого объекты с ключами, некоторы из которых и являются текстом комментария\r\n    (0,_render_js__WEBPACK_IMPORTED_MODULE_0__.commentsRender)(commentators);//запускаем commentsRender(render.js) в аргумент которой и идет наш массив с данными с сервера, это и отрисовывает наши комментарии\r\n    loader = false;\r\n    (0,_render_js__WEBPACK_IMPORTED_MODULE_0__.formRender)(loader);\r\n  }).catch((error) => {\r\n    console.warn(error)\r\n    // alert('Кажется у Вас пропал интернет');\r\n    if (error.message === 'NetworkError when attempting to fetch resource.') {\r\n      alert('Кажется, у Вас пропал интернет, обновите страницу позже.');\r\n    }\r\n    if (error.message === 'error') {\r\n      alert('Что то пошло не так, обновите страницу')\r\n    }\r\n  })\r\n}\n\n//# sourceURL=webpack://webdev-dom-homework/./modules/getFunction.js?");

/***/ }),

/***/ "./modules/likeFunctions.js":
/*!**********************************!*\
  !*** ./modules/likeFunctions.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   likeMaker: () => (/* binding */ likeMaker),\n/* harmony export */   newlikeColor: () => (/* binding */ newlikeColor)\n/* harmony export */ });\n/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render.js */ \"./modules/render.js\");\n/* harmony import */ var _variables_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./variables.js */ \"./modules/variables.js\");\n\r\n\r\n\r\nfunction likeMaker(commentators) {\r\n    // const commentBlockElement = document.getElementById(\"comment-block\")\r\n    const likeButtonElements = document.querySelectorAll('.like-button');\r\n\r\n    if (_variables_js__WEBPACK_IMPORTED_MODULE_1__.isLoginForLike) {\r\n        likeButtonElements.forEach((likeButtonElement) => {\r\n            likeButtonElement.addEventListener('click', (event) => {\r\n                event.stopPropagation()\r\n                const index = likeButtonElement.dataset.index\r\n                const like = commentators[index];\r\n                if (like.isLiked === false) {\r\n                    like.isLiked = true;\r\n                    like.likes += 1;\r\n                    (0,_render_js__WEBPACK_IMPORTED_MODULE_0__.commentsRender)(commentators)\r\n                } else {\r\n                    like.isLiked = false;\r\n                    like.likes -= 1;\r\n                    (0,_render_js__WEBPACK_IMPORTED_MODULE_0__.commentsRender)(commentators)\r\n                }\r\n            })\r\n        })\r\n    }\r\n}\r\n\r\n\r\nfunction newlikeColor(element) {\r\n    if (element) {\r\n        return 'like-button -active-like';\r\n    } else {\r\n        return 'like-button';\r\n    }\r\n}\n\n//# sourceURL=webpack://webdev-dom-homework/./modules/likeFunctions.js?");

/***/ }),

/***/ "./modules/loginPage.js":
/*!******************************!*\
  !*** ./modules/loginPage.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loginProcess: () => (/* binding */ loginProcess),\n/* harmony export */   registrationProcess: () => (/* binding */ registrationProcess)\n/* harmony export */ });\n/* harmony import */ var _appRender_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../appRender.js */ \"./appRender.js\");\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.js */ \"./modules/api.js\");\n/* harmony import */ var _variables_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./variables.js */ \"./modules/variables.js\");\n\r\n\r\n\r\n\r\n//Функция выполняет: 1. Переменные, 2. Полученин промиса из postLogin, 3. Получение токена, 4. Добавление токена в свойства объекта для подписи комментария\r\n//данная функция, при введенных в input логине и пароле, и нажатии кнопки вызывает функцию postLogin(смотри процесс в postFunction.js)\r\n//Здесь подключаю данню функцию к кнопке в форме\r\n//Это подключить к render/renderLoginForm/ЕСТЬ\r\nfunction loginProcess() {\r\n    const loginButtonElement = document.getElementById('loginButton');//рендер в appRender\r\n    const loginInputElement = document.getElementById('loginInput');\r\n    const passwordInputElement = document.getElementById('passwordInput');\r\n\r\n    loginButtonElement.addEventListener('click', () => {\r\n        (0,_api_js__WEBPACK_IMPORTED_MODULE_1__.postlogin)({//добавили в аргументы в postLogin то, что будет добавляться в postLogin (api.js)\r\n            login: loginInputElement.value,//аргумент\r\n            password: passwordInputElement.value,//аргумент\r\n            //postLogin возвращает promise в котором объект с user\r\n        }).then((responseData) => { //получили объект в котором содержатся данные о пользователе, включая ТОКЕН\r\n            console.log(responseData.user); \r\n            (0,_variables_js__WEBPACK_IMPORTED_MODULE_2__.newComName)(responseData.user.name)\r\n            return (0,_variables_js__WEBPACK_IMPORTED_MODULE_2__.newToken)(responseData.user.token);//Присвоили переменной token значение токена из объекта, полученного ранее\r\n        }).then(() => {\r\n            (0,_appRender_js__WEBPACK_IMPORTED_MODULE_0__.appRender)(true)//запустили функцию appRender(смотри процесс в appRender.js) c аргументом true\r\n        }) \r\n        .catch((error) => {\r\n            if (error.message === 'wrong login or password') {\r\n                alert('Вы ввели некорректный логин или пароль')\r\n            };\r\n        })\r\n    })\r\n}\r\n//Object { login: \"dsfsd\", password: \"sdfsdf\", name: \"dvsd\", … }\r\n//Функция выполняет: 1. Переменные, 2. получение промиса из postRegistration, 3. Добавление нового пользователя\r\nfunction registrationProcess() {\r\n    const registerButtonElement = document.getElementById('registerButton'); //переменные, отрисованы \r\n    const regNameInputElement = document.getElementById('regNameInput')\r\n    const regloginInputElement = document.getElementById('regLoginInput');\r\n    const regpasswordInputElement = document.getElementById('regPasswordInput');\r\n\r\n    registerButtonElement.addEventListener('click', () => {\r\n        (0,_api_js__WEBPACK_IMPORTED_MODULE_1__.postRegistration)({\r\n            login: regloginInputElement.value,\r\n            name: regNameInputElement.value,\r\n            password: regpasswordInputElement.value,\r\n        }).then((responseData) => {\r\n            (0,_variables_js__WEBPACK_IMPORTED_MODULE_2__.newComName)(responseData.user.name)//данным действием мы меняем значение переменной comName(variables.js) значение ключа, объекта user, которого мы только что зарегистрировали и далее используем его в formRender(render.js) для отрисовки этого в форме ввода комментария\r\n            return (0,_variables_js__WEBPACK_IMPORTED_MODULE_2__.newToken)(responseData.user.token)\r\n        }).then(() => {\r\n            (0,_appRender_js__WEBPACK_IMPORTED_MODULE_0__.appRender)(true)\r\n        }).catch((error) => {\r\n            if (error.message === 'user already exists') {\r\n                alert('Пользователь уже существует')\r\n            }\r\n        })\r\n    })\r\n}\n\n//# sourceURL=webpack://webdev-dom-homework/./modules/loginPage.js?");

/***/ }),

/***/ "./modules/postFunction.js":
/*!*********************************!*\
  !*** ./modules/postFunction.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   postFunction: () => (/* binding */ postFunction)\n/* harmony export */ });\n/* harmony import */ var _getFunction_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getFunction.js */ \"./modules/getFunction.js\");\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.js */ \"./modules/api.js\");\n\r\n\r\n//Функция отвечает за добавление новых комментариев \r\nfunction postFunction(commentators, loader) {\r\n    const nameInputElement = document.getElementById(\"name-input\");//отрендерены ранее\r\n    const textInputElement = document.getElementById(\"text-input\");\r\n    //вызываем postComments(api.js) \r\n    (0,_api_js__WEBPACK_IMPORTED_MODULE_1__.postComments)({ name: nameInputElement.value, text: textInputElement.value }).then((responseData) => {\r\n        commentators = responseData.comment;\r\n        (0,_getFunction_js__WEBPACK_IMPORTED_MODULE_0__.getFunction)(commentators, loader);\r\n    }).catch((error) => {\r\n        console.warn(error)\r\n        if (error.message === 'NetworkError when attempting to fetch resource.') {\r\n            alert('Кажется, у Вас пропал интернет, обновите страницу позже.')\r\n        };\r\n        if (error.message === '< 2 sumb') {\r\n            alert('Вы ввели слишком короткое имя либо комментарий');\r\n            nameInputElement.classList.add(\"error\");\r\n            textInputElement.classList.add('error');\r\n        };\r\n        if (error.message === 'server fall') {\r\n            alert('Сервер сломался, попробуй позже');\r\n            postFunction(commentators, loader)\r\n        };\r\n        if (error.message === 'unauthorized') {\r\n            alert('Вы не авторизовались')\r\n        }\r\n    });\r\n};\n\n//# sourceURL=webpack://webdev-dom-homework/./modules/postFunction.js?");

/***/ }),

/***/ "./modules/render.js":
/*!***************************!*\
  !*** ./modules/render.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   commentsRender: () => (/* binding */ commentsRender),\n/* harmony export */   formRender: () => (/* binding */ formRender)\n/* harmony export */ });\n/* harmony import */ var _likeFunctions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./likeFunctions.js */ \"./modules/likeFunctions.js\");\n/* harmony import */ var _replyToComments_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./replyToComments.js */ \"./modules/replyToComments.js\");\n/* harmony import */ var _clickEventButton_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clickEventButton.js */ \"./modules/clickEventButton.js\");\n/* harmony import */ var _variables_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./variables.js */ \"./modules/variables.js\");\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/index.js\");\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_4__);\n// import { timeFunction } from \"./timeFunction.js\"\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n//Функция отвечает за появление формы ввода комментария, принимает в себя аргумент - loader, который является индикатором загрузки\r\nfunction formRender(loader) {\r\n  const addForm = document.querySelector('.add-form');//add-form появляется в области видимости потому, что formRender запустилась внутри getFunction, которая запустилась внутри appRender, после того, как отрисовалась разметка, имеющая add-form\r\n  if (loader) {//аргумент, который является переменной loader(индикатор загрузки), которая по умолчанию равна false вызывает отрисовку окна загрузки, пока равен false(это период, пока getFunction не дойдет до выполнения кода loader = true, тем самым во время загрузки частей функции пользователь видит окно Loading) >\r\n    addForm.innerHTML = `<p>Loading...</p>`;\r\n  } else { // как только loader внутри getFunction = true мы рендерим в форму разметку\r\n    addForm.innerHTML = `<input \r\n        id=\"name-input\"\r\n        type=\"text\"\r\n        class=\"add-form-name\"\r\n        disabled\r\n        value = \"${_variables_js__WEBPACK_IMPORTED_MODULE_3__.comName}\"\r\n      />\r\n      <!--Сюда будет вводится ИМЯ-->\r\n      <textarea\r\n        id=\"text-input\"\r\n        type=\"textarea\"\r\n        class=\"add-form-text\"\r\n        placeholder=\"Введите ваш коментарий\" \r\n        rows=\"4\"\r\n      ></textarea>\r\n      <!--Сюда будет вводится ТЕКСТ-->\r\n      <div class=\"add-form-row\">\r\n        <button id=\"form-button\" class=\"add-form-button\">Написать</button>\r\n      </div>`;\r\n    (0,_clickEventButton_js__WEBPACK_IMPORTED_MODULE_2__.clickEventButton)();//В конце данной разметки мы вызываем clickEventButton(смотри процесс в clickEventButton.js)\r\n  }\r\n}\r\n\r\n//функция отрисовывает комментарии с данными с сервера, переменную с которыми принимает в аргумент\r\nfunction commentsRender(commentators) {\r\n  const commentBlockElement = document.getElementById(\"comment-block\");//блок в области видимости так как его трисовала ранее вызванная функция appRender\r\n  //в прееменную commentatorsHtml мы помещаем массив, который перебирается и его элементы изменяются с помощью метода map\r\n  const commentatorsHtml = commentators.map((commentator, index) => {//с помощью метода map(работает как ф-я, но является свойством объекта и вызывается через точку), внутри которого мы задаем анонимную функцию, которая принимает аргументы элемента массива(объект) и его номер в массиве\r\n    //Далее мы рендерим разметку комментария\r\n    console.log(commentator);\r\n    const createDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_4__.format)(new Date(commentator.date), 'YYYY-MM-DD HH.MM.SS'); \r\n    return `<li data-index=\"${index}\" class=\"comment\">\r\n            <div class=\"comment-header\">\r\n              <div>${commentator.author.name}</div>\r\n              <div>${createDate}</div>\r\n            </div>\r\n            <div class=\"comment-body\">\r\n              <div class=\"comment-text\">\r\n                ${commentator.text}\r\n              </div>\r\n            </div>\r\n            <div class=\"comment-footer\">\r\n              <div class=\"likes\">\r\n                <span class=\"likes-counter\">${commentator.likes}</span>\r\n                <button data-index=\"${index}\" class=\"${(0,_likeFunctions_js__WEBPACK_IMPORTED_MODULE_0__.newlikeColor)(commentator.isLiked)}\"></button>\r\n              </div>\r\n            </div>\r\n            </li>`\r\n  }).join('');\r\n  commentBlockElement.innerHTML = commentatorsHtml;//рендерим в ранее отрисованную разметку наш обработанный массив, внутри элементов которого мы поместили разметку HTML комментария, которая вместо каждого элемента массива дает нам его интерпритацию в ращзметке HTML\r\n  (0,_likeFunctions_js__WEBPACK_IMPORTED_MODULE_0__.likeMaker)(commentators);\r\n  (0,_replyToComments_js__WEBPACK_IMPORTED_MODULE_1__[\"replyТoСomment\"])(commentators);\r\n}\r\n\r\n//ЗАДАЧА!!!: Сделать рердер комментариев:\r\n//Последовательность рендеров:\r\n//1. Рендер комментариев + страница перехода на форму входа => кнопка вход => переход, делай переход через addEventListner\r\n//2. Страница входа, меняющаяся на страницу регистрации => ввод данных || ввод данных при регистрации => переход\r\n//3. Страница комментариев + форма ввода комментариев\r\n\r\n\r\n\n\n//# sourceURL=webpack://webdev-dom-homework/./modules/render.js?");

/***/ }),

/***/ "./modules/replyToComments.js":
/*!************************************!*\
  !*** ./modules/replyToComments.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"replyТoСomment\": () => (/* binding */ replyТoСomment)\n/* harmony export */ });\n\r\n\r\nfunction replyТoСomment(commentators) {\r\n    const commentElements = document.querySelectorAll('.comment');\r\n    commentElements.forEach((commentElement) => {\r\n        commentElement.addEventListener('click', () => {\r\n            const index = commentElement.dataset.index;\r\n            const person = commentators[index];\r\n            const textInputElement = document.getElementById(\"text-input\");\r\n            textInputElement.value = `> ${person.text} \\n \\n  ${person.author.name},`;\r\n        })\r\n    })\r\n}\n\n//# sourceURL=webpack://webdev-dom-homework/./modules/replyToComments.js?");

/***/ }),

/***/ "./modules/variables.js":
/*!******************************!*\
  !*** ./modules/variables.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   baseUrl: () => (/* binding */ baseUrl),\n/* harmony export */   comName: () => (/* binding */ comName),\n/* harmony export */   commentators: () => (/* binding */ commentators),\n/* harmony export */   isLoginForLike: () => (/* binding */ isLoginForLike),\n/* harmony export */   loader: () => (/* binding */ loader),\n/* harmony export */   loginUrl: () => (/* binding */ loginUrl),\n/* harmony export */   newComName: () => (/* binding */ newComName),\n/* harmony export */   newIsLoginForLike: () => (/* binding */ newIsLoginForLike),\n/* harmony export */   newToken: () => (/* binding */ newToken),\n/* harmony export */   registrationUrl: () => (/* binding */ registrationUrl),\n/* harmony export */   token: () => (/* binding */ token)\n/* harmony export */ });\nlet loader = false;\r\n\r\n//Задача: объявить переменные только в фонкциях, где используются\r\nlet commentators = [];\r\n\r\nconst baseUrl = 'https://wedev-api.sky.pro/api/v2/ErmushinRomnam6/comments';\r\n\r\nconst loginUrl = 'https://wedev-api.sky.pro/api/user/login';\r\n\r\nconst registrationUrl = 'https://wedev-api.sky.pro/api/user';\r\n\r\nlet token;\r\n\r\nfunction newToken(newToken) {\r\n    token = newToken\r\n}\r\n\r\nlet comName;\r\n\r\nfunction newComName(newName) {\r\n    comName = newName\r\n}\r\n\r\nlet isLoginForLike \r\n\r\nfunction newIsLoginForLike (newIsLoginForLike) {\r\n    isLoginForLike = newIsLoginForLike\r\n}\r\n\r\n\r\n\r\n// export function setVariables(oldVar, newVar) {\r\n//     return oldVar = newVar\r\n// }\r\n\r\n\r\n\n\n//# sourceURL=webpack://webdev-dom-homework/./modules/variables.js?");

/***/ }),

/***/ "./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds/index.js ***!
  \*****************************************************************************/
/***/ ((module) => {

eval("var MILLISECONDS_IN_MINUTE = 60000\n\n/**\n * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.\n * They usually appear for dates that denote time before the timezones were introduced\n * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891\n * and GMT+01:00:00 after that date)\n *\n * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,\n * which would lead to incorrect calculations.\n *\n * This function returns the timezone offset in milliseconds that takes seconds in account.\n */\nmodule.exports = function getTimezoneOffsetInMilliseconds (dirtyDate) {\n  var date = new Date(dirtyDate.getTime())\n  var baseTimezoneOffset = date.getTimezoneOffset()\n  date.setSeconds(0, 0)\n  var millisecondsPartOfTimezoneOffset = date.getTime() % MILLISECONDS_IN_MINUTE\n\n  return baseTimezoneOffset * MILLISECONDS_IN_MINUTE + millisecondsPartOfTimezoneOffset\n}\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/add_days/index.js":
/*!*************************************************!*\
  !*** ./node_modules/date-fns/add_days/index.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var parse = __webpack_require__(/*! ../parse/index.js */ \"./node_modules/date-fns/parse/index.js\")\n\n/**\n * @category Day Helpers\n * @summary Add the specified number of days to the given date.\n *\n * @description\n * Add the specified number of days to the given date.\n *\n * @param {Date|String|Number} date - the date to be changed\n * @param {Number} amount - the amount of days to be added\n * @returns {Date} the new date with the days added\n *\n * @example\n * // Add 10 days to 1 September 2014:\n * var result = addDays(new Date(2014, 8, 1), 10)\n * //=> Thu Sep 11 2014 00:00:00\n */\nfunction addDays (dirtyDate, dirtyAmount) {\n  var date = parse(dirtyDate)\n  var amount = Number(dirtyAmount)\n  date.setDate(date.getDate() + amount)\n  return date\n}\n\nmodule.exports = addDays\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/add_days/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/add_hours/index.js":
/*!**************************************************!*\
  !*** ./node_modules/date-fns/add_hours/index.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var addMilliseconds = __webpack_require__(/*! ../add_milliseconds/index.js */ \"./node_modules/date-fns/add_milliseconds/index.js\")\n\nvar MILLISECONDS_IN_HOUR = 3600000\n\n/**\n * @category Hour Helpers\n * @summary Add the specified number of hours to the given date.\n *\n * @description\n * Add the specified number of hours to the given date.\n *\n * @param {Date|String|Number} date - the date to be changed\n * @param {Number} amount - the amount of hours to be added\n * @returns {Date} the new date with the hours added\n *\n * @example\n * // Add 2 hours to 10 July 2014 23:00:00:\n * var result = addHours(new Date(2014, 6, 10, 23, 0), 2)\n * //=> Fri Jul 11 2014 01:00:00\n */\nfunction addHours (dirtyDate, dirtyAmount) {\n  var amount = Number(dirtyAmount)\n  return addMilliseconds(dirtyDate, amount * MILLISECONDS_IN_HOUR)\n}\n\nmodule.exports = addHours\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/add_hours/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/add_iso_years/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/add_iso_years/index.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var getISOYear = __webpack_require__(/*! ../get_iso_year/index.js */ \"./node_modules/date-fns/get_iso_year/index.js\")\nvar setISOYear = __webpack_require__(/*! ../set_iso_year/index.js */ \"./node_modules/date-fns/set_iso_year/index.js\")\n\n/**\n * @category ISO Week-Numbering Year Helpers\n * @summary Add the specified number of ISO week-numbering years to the given date.\n *\n * @description\n * Add the specified number of ISO week-numbering years to the given date.\n *\n * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date\n *\n * @param {Date|String|Number} date - the date to be changed\n * @param {Number} amount - the amount of ISO week-numbering years to be added\n * @returns {Date} the new date with the ISO week-numbering years added\n *\n * @example\n * // Add 5 ISO week-numbering years to 2 July 2010:\n * var result = addISOYears(new Date(2010, 6, 2), 5)\n * //=> Fri Jun 26 2015 00:00:00\n */\nfunction addISOYears (dirtyDate, dirtyAmount) {\n  var amount = Number(dirtyAmount)\n  return setISOYear(dirtyDate, getISOYear(dirtyDate) + amount)\n}\n\nmodule.exports = addISOYears\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/add_iso_years/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/add_milliseconds/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/add_milliseconds/index.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var parse = __webpack_require__(/*! ../parse/index.js */ \"./node_modules/date-fns/parse/index.js\")\n\n/**\n * @category Millisecond Helpers\n * @summary Add the specified number of milliseconds to the given date.\n *\n * @description\n * Add the specified number of milliseconds to the given date.\n *\n * @param {Date|String|Number} date - the date to be changed\n * @param {Number} amount - the amount of milliseconds to be added\n * @returns {Date} the new date with the milliseconds added\n *\n * @example\n * // Add 750 milliseconds to 10 July 2014 12:45:30.000:\n * var result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)\n * //=> Thu Jul 10 2014 12:45:30.750\n */\nfunction addMilliseconds (dirtyDate, dirtyAmount) {\n  var timestamp = parse(dirtyDate).getTime()\n  var amount = Number(dirtyAmount)\n  return new Date(timestamp + amount)\n}\n\nmodule.exports = addMilliseconds\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/add_milliseconds/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/add_minutes/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/add_minutes/index.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var addMilliseconds = __webpack_require__(/*! ../add_milliseconds/index.js */ \"./node_modules/date-fns/add_milliseconds/index.js\")\n\nvar MILLISECONDS_IN_MINUTE = 60000\n\n/**\n * @category Minute Helpers\n * @summary Add the specified number of minutes to the given date.\n *\n * @description\n * Add the specified number of minutes to the given date.\n *\n * @param {Date|String|Number} date - the date to be changed\n * @param {Number} amount - the amount of minutes to be added\n * @returns {Date} the new date with the minutes added\n *\n * @example\n * // Add 30 minutes to 10 July 2014 12:00:00:\n * var result = addMinutes(new Date(2014, 6, 10, 12, 0), 30)\n * //=> Thu Jul 10 2014 12:30:00\n */\nfunction addMinutes (dirtyDate, dirtyAmount) {\n  var amount = Number(dirtyAmount)\n  return addMilliseconds(dirtyDate, amount * MILLISECONDS_IN_MINUTE)\n}\n\nmodule.exports = addMinutes\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/add_minutes/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/add_months/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/add_months/index.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var parse = __webpack_require__(/*! ../parse/index.js */ \"./node_modules/date-fns/parse/index.js\")\nvar getDaysInMonth = __webpack_require__(/*! ../get_days_in_month/index.js */ \"./node_modules/date-fns/get_days_in_month/index.js\")\n\n/**\n * @category Month Helpers\n * @summary Add the specified number of months to the given date.\n *\n * @description\n * Add the specified number of months to the given date.\n *\n * @param {Date|String|Number} date - the date to be changed\n * @param {Number} amount - the amount of months to be added\n * @returns {Date} the new date with the months added\n *\n * @example\n * // Add 5 months to 1 September 2014:\n * var result = addMonths(new Date(2014, 8, 1), 5)\n * //=> Sun Feb 01 2015 00:00:00\n */\nfunction addMonths (dirtyDate, dirtyAmount) {\n  var date = parse(dirtyDate)\n  var amount = Number(dirtyAmount)\n  var desiredMonth = date.getMonth() + amount\n  var dateWithDesiredMonth = new Date(0)\n  dateWithDesiredMonth.setFullYear(date.getFullYear(), desiredMonth, 1)\n  dateWithDesiredMonth.setHours(0, 0, 0, 0)\n  var daysInMonth = getDaysInMonth(dateWithDesiredMonth)\n  // Set the last day of the new month\n  // if the original date was the last day of the longer month\n  date.setMonth(desiredMonth, Math.min(daysInMonth, date.getDate()))\n  return date\n}\n\nmodule.exports = addMonths\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/add_months/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/add_quarters/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/add_quarters/index.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var addMonths = __webpack_require__(/*! ../add_months/index.js */ \"./node_modules/date-fns/add_months/index.js\")\n\n/**\n * @category Quarter Helpers\n * @summary Add the specified number of year quarters to the given date.\n *\n * @description\n * Add the specified number of year quarters to the given date.\n *\n * @param {Date|String|Number} date - the date to be changed\n * @param {Number} amount - the amount of quarters to be added\n * @returns {Date} the new date with the quarters added\n *\n * @example\n * // Add 1 quarter to 1 September 2014:\n * var result = addQuarters(new Date(2014, 8, 1), 1)\n * //=> Mon Dec 01 2014 00:00:00\n */\nfunction addQuarters (dirtyDate, dirtyAmount) {\n  var amount = Number(dirtyAmount)\n  var months = amount * 3\n  return addMonths(dirtyDate, months)\n}\n\nmodule.exports = addQuarters\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/add_quarters/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/add_seconds/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/add_seconds/index.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var addMilliseconds = __webpack_require__(/*! ../add_milliseconds/index.js */ \"./node_modules/date-fns/add_milliseconds/index.js\")\n\n/**\n * @category Second Helpers\n * @summary Add the specified number of seconds to the given date.\n *\n * @description\n * Add the specified number of seconds to the given date.\n *\n * @param {Date|String|Number} date - the date to be changed\n * @param {Number} amount - the amount of seconds to be added\n * @returns {Date} the new date with the seconds added\n *\n * @example\n * // Add 30 seconds to 10 July 2014 12:45:00:\n * var result = addSeconds(new Date(2014, 6, 10, 12, 45, 0), 30)\n * //=> Thu Jul 10 2014 12:45:30\n */\nfunction addSeconds (dirtyDate, dirtyAmount) {\n  var amount = Number(dirtyAmount)\n  return addMilliseconds(dirtyDate, amount * 1000)\n}\n\nmodule.exports = addSeconds\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/add_seconds/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/add_weeks/index.js":
/*!**************************************************!*\
  !*** ./node_modules/date-fns/add_weeks/index.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var addDays = __webpack_require__(/*! ../add_days/index.js */ \"./node_modules/date-fns/add_days/index.js\")\n\n/**\n * @category Week Helpers\n * @summary Add the specified number of weeks to the given date.\n *\n * @description\n * Add the specified number of week to the given date.\n *\n * @param {Date|String|Number} date - the date to be changed\n * @param {Number} amount - the amount of weeks to be added\n * @returns {Date} the new date with the weeks added\n *\n * @example\n * // Add 4 weeks to 1 September 2014:\n * var result = addWeeks(new Date(2014, 8, 1), 4)\n * //=> Mon Sep 29 2014 00:00:00\n */\nfunction addWeeks (dirtyDate, dirtyAmount) {\n  var amount = Number(dirtyAmount)\n  var days = amount * 7\n  return addDays(dirtyDate, days)\n}\n\nmodule.exports = addWeeks\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/add_weeks/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/add_years/index.js":
/*!**************************************************!*\
  !*** ./node_modules/date-fns/add_years/index.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var addMonths = __webpack_require__(/*! ../add_months/index.js */ \"./node_modules/date-fns/add_months/index.js\")\n\n/**\n * @category Year Helpers\n * @summary Add the specified number of years to the given date.\n *\n * @description\n * Add the specified number of years to the given date.\n *\n * @param {Date|String|Number} date - the date to be changed\n * @param {Number} amount - the amount of years to be added\n * @returns {Date} the new date with the years added\n *\n * @example\n * // Add 5 years to 1 September 2014:\n * var result = addYears(new Date(2014, 8, 1), 5)\n * //=> Sun Sep 01 2019 00:00:00\n */\nfunction addYears (dirtyDate, dirtyAmount) {\n  var amount = Number(dirtyAmount)\n  return addMonths(dirtyDate, amount * 12)\n}\n\nmodule.exports = addYears\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/add_years/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/are_ranges_overlapping/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/are_ranges_overlapping/index.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var parse = __webpack_require__(/*! ../parse/index.js */ \"./node_modules/date-fns/parse/index.js\")\n\n/**\n * @category Range Helpers\n * @summary Is the given date range overlapping with another date range?\n *\n * @description\n * Is the given date range overlapping with another date range?\n *\n * @param {Date|String|Number} initialRangeStartDate - the start of the initial range\n * @param {Date|String|Number} initialRangeEndDate - the end of the initial range\n * @param {Date|String|Number} comparedRangeStartDate - the start of the range to compare it with\n * @param {Date|String|Number} comparedRangeEndDate - the end of the range to compare it with\n * @returns {Boolean} whether the date ranges are overlapping\n * @throws {Error} startDate of a date range cannot be after its endDate\n *\n * @example\n * // For overlapping date ranges:\n * areRangesOverlapping(\n *   new Date(2014, 0, 10), new Date(2014, 0, 20), new Date(2014, 0, 17), new Date(2014, 0, 21)\n * )\n * //=> true\n *\n * @example\n * // For non-overlapping date ranges:\n * areRangesOverlapping(\n *   new Date(2014, 0, 10), new Date(2014, 0, 20), new Date(2014, 0, 21), new Date(2014, 0, 22)\n * )\n * //=> false\n */\nfunction areRangesOverlapping (dirtyInitialRangeStartDate, dirtyInitialRangeEndDate, dirtyComparedRangeStartDate, dirtyComparedRangeEndDate) {\n  var initialStartTime = parse(dirtyInitialRangeStartDate).getTime()\n  var initialEndTime = parse(dirtyInitialRangeEndDate).getTime()\n  var comparedStartTime = parse(dirtyComparedRangeStartDate).getTime()\n  var comparedEndTime = parse(dirtyComparedRangeEndDate).getTime()\n\n  if (initialStartTime > initialEndTime || comparedStartTime > comparedEndTime) {\n    throw new Error('The start of the range cannot be after the end of the range')\n  }\n\n  return initialStartTime < comparedEndTime && comparedStartTime < initialEndTime\n}\n\nmodule.exports = areRangesOverlapping\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/are_ranges_overlapping/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/closest_index_to/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/closest_index_to/index.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var parse = __webpack_require__(/*! ../parse/index.js */ \"./node_modules/date-fns/parse/index.js\")\n\n/**\n * @category Common Helpers\n * @summary Return an index of the closest date from the array comparing to the given date.\n *\n * @description\n * Return an index of the closest date from the array comparing to the given date.\n *\n * @param {Date|String|Number} dateToCompare - the date to compare with\n * @param {Date[]|String[]|Number[]} datesArray - the array to search\n * @returns {Number} an index of the date closest to the given date\n * @throws {TypeError} the second argument must be an instance of Array\n *\n * @example\n * // Which date is closer to 6 September 2015?\n * var dateToCompare = new Date(2015, 8, 6)\n * var datesArray = [\n *   new Date(2015, 0, 1),\n *   new Date(2016, 0, 1),\n *   new Date(2017, 0, 1)\n * ]\n * var result = closestIndexTo(dateToCompare, datesArray)\n * //=> 1\n */\nfunction closestIndexTo (dirtyDateToCompare, dirtyDatesArray) {\n  if (!(dirtyDatesArray instanceof Array)) {\n    throw new TypeError(toString.call(dirtyDatesArray) + ' is not an instance of Array')\n  }\n\n  var dateToCompare = parse(dirtyDateToCompare)\n  var timeToCompare = dateToCompare.getTime()\n\n  var result\n  var minDistance\n\n  dirtyDatesArray.forEach(function (dirtyDate, index) {\n    var currentDate = parse(dirtyDate)\n    var distance = Math.abs(timeToCompare - currentDate.getTime())\n    if (result === undefined || distance < minDistance) {\n      result = index\n      minDistance = distance\n    }\n  })\n\n  return result\n}\n\nmodule.exports = closestIndexTo\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/closest_index_to/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/closest_to/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/closest_to/index.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var parse = __webpack_require__(/*! ../parse/index.js */ \"./node_modules/date-fns/parse/index.js\")\n\n/**\n * @category Common Helpers\n * @summary Return a date from the array closest to the given date.\n *\n * @description\n * Return a date from the array closest to the given date.\n *\n * @param {Date|String|Number} dateToCompare - the date to compare with\n * @param {Date[]|String[]|Number[]} datesArray - the array to search\n * @returns {Date} the date from the array closest to the given date\n * @throws {TypeError} the second argument must be an instance of Array\n *\n * @example\n * // Which date is closer to 6 September 2015: 1 January 2000 or 1 January 2030?\n * var dateToCompare = new Date(2015, 8, 6)\n * var result = closestTo(dateToCompare, [\n *   new Date(2000, 0, 1),\n *   new Date(2030, 0, 1)\n * ])\n * //=> Tue Jan 01 2030 00:00:00\n */\nfunction closestTo (dirtyDateToCompare, dirtyDatesArray) {\n  if (!(dirtyDatesArray instanceof Array)) {\n    throw new TypeError(toString.call(dirtyDatesArray) + ' is not an instance of Array')\n  }\n\n  var dateToCompare = parse(dirtyDateToCompare)\n  var timeToCompare = dateToCompare.getTime()\n\n  var result\n  var minDistance\n\n  dirtyDatesArray.forEach(function (dirtyDate) {\n    var currentDate = parse(dirtyDate)\n    var distance = Math.abs(timeToCompare - currentDate.getTime())\n    if (result === undefined || distance < minDistance) {\n      result = currentDate\n      minDistance = distance\n    }\n  })\n\n  return result\n}\n\nmodule.exports = closestTo\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/closest_to/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/compare_asc/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/compare_asc/index.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var parse = __webpack_require__(/*! ../parse/index.js */ \"./node_modules/date-fns/parse/index.js\")\n\n/**\n * @category Common Helpers\n * @summary Compare the two dates and return -1, 0 or 1.\n *\n * @description\n * Compare the two dates and return 1 if the first date is after the second,\n * -1 if the first date is before the second or 0 if dates are equal.\n *\n * @param {Date|String|Number} dateLeft - the first date to compare\n * @param {Date|String|Number} dateRight - the second date to compare\n * @returns {Number} the result of the comparison\n *\n * @example\n * // Compare 11 February 1987 and 10 July 1989:\n * var result = compareAsc(\n *   new Date(1987, 1, 11),\n *   new Date(1989, 6, 10)\n * )\n * //=> -1\n *\n * @example\n * // Sort the array of dates:\n * var result = [\n *   new Date(1995, 6, 2),\n *   new Date(1987, 1, 11),\n *   new Date(1989, 6, 10)\n * ].sort(compareAsc)\n * //=> [\n * //   Wed Feb 11 1987 00:00:00,\n * //   Mon Jul 10 1989 00:00:00,\n * //   Sun Jul 02 1995 00:00:00\n * // ]\n */\nfunction compareAsc (dirtyDateLeft, dirtyDateRight) {\n  var dateLeft = parse(dirtyDateLeft)\n  var timeLeft = dateLeft.getTime()\n  var dateRight = parse(dirtyDateRight)\n  var timeRight = dateRight.getTime()\n\n  if (timeLeft < timeRight) {\n    return -1\n  } else if (timeLeft > timeRight) {\n    return 1\n  } else {\n    return 0\n  }\n}\n\nmodule.exports = compareAsc\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/compare_asc/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/compare_desc/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/compare_desc/index.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var parse = __webpack_require__(/*! ../parse/index.js */ \"./node_modules/date-fns/parse/index.js\")\n\n/**\n * @category Common Helpers\n * @summary Compare the two dates reverse chronologically and return -1, 0 or 1.\n *\n * @description\n * Compare the two dates and return -1 if the first date is after the second,\n * 1 if the first date is before the second or 0 if dates are equal.\n *\n * @param {Date|String|Number} dateLeft - the first date to compare\n * @param {Date|String|Number} dateRight - the second date to compare\n * @returns {Number} the result of the comparison\n *\n * @example\n * // Compare 11 February 1987 and 10 July 1989 reverse chronologically:\n * var result = compareDesc(\n *   new Date(1987, 1, 11),\n *   new Date(1989, 6, 10)\n * )\n * //=> 1\n *\n * @example\n * // Sort the array of dates in reverse chronological order:\n * var result = [\n *   new Date(1995, 6, 2),\n *   new Date(1987, 1, 11),\n *   new Date(1989, 6, 10)\n * ].sort(compareDesc)\n * //=> [\n * //   Sun Jul 02 1995 00:00:00,\n * //   Mon Jul 10 1989 00:00:00,\n * //   Wed Feb 11 1987 00:00:00\n * // ]\n */\nfunction compareDesc (dirtyDateLeft, dirtyDateRight) {\n  var dateLeft = parse(dirtyDateLeft)\n  var timeLeft = dateLeft.getTime()\n  var dateRight = parse(dirtyDateRight)\n  var timeRight = dateRight.getTime()\n\n  if (timeLeft > timeRight) {\n    return -1\n  } else if (timeLeft < timeRight) {\n    return 1\n  } else {\n    return 0\n  }\n}\n\nmodule.exports = compareDesc\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/compare_desc/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/difference_in_calendar_days/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/difference_in_calendar_days/index.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var startOfDay = __webpack_require__(/*! ../start_of_day/index.js */ \"./node_modules/date-fns/start_of_day/index.js\")\n\nvar MILLISECONDS_IN_MINUTE = 60000\nvar MILLISECONDS_IN_DAY = 86400000\n\n/**\n * @category Day Helpers\n * @summary Get the number of calendar days between the given dates.\n *\n * @description\n * Get the number of calendar days between the given dates.\n *\n * @param {Date|String|Number} dateLeft - the later date\n * @param {Date|String|Number} dateRight - the earlier date\n * @returns {Number} the number of calendar days\n *\n * @example\n * // How many calendar days are between\n * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?\n * var result = differenceInCalendarDays(\n *   new Date(2012, 6, 2, 0, 0),\n *   new Date(2011, 6, 2, 23, 0)\n * )\n * //=> 366\n */\nfunction differenceInCalendarDays (dirtyDateLeft, dirtyDateRight) {\n  var startOfDayLeft = startOfDay(dirtyDateLeft)\n  var startOfDayRight = startOfDay(dirtyDateRight)\n\n  var timestampLeft = startOfDayLeft.getTime() -\n    startOfDayLeft.getTimezoneOffset() * MILLISECONDS_IN_MINUTE\n  var timestampRight = startOfDayRight.getTime() -\n    startOfDayRight.getTimezoneOffset() * MILLISECONDS_IN_MINUTE\n\n  // Round the number of days to the nearest integer\n  // because the number of milliseconds in a day is not constant\n  // (e.g. it's different in the day of the daylight saving time clock shift)\n  return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_DAY)\n}\n\nmodule.exports = differenceInCalendarDays\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/difference_in_calendar_days/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/difference_in_calendar_iso_weeks/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/date-fns/difference_in_calendar_iso_weeks/index.js ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var startOfISOWeek = __webpack_require__(/*! ../start_of_iso_week/index.js */ \"./node_modules/date-fns/start_of_iso_week/index.js\")\n\nvar MILLISECONDS_IN_MINUTE = 60000\nvar MILLISECONDS_IN_WEEK = 604800000\n\n/**\n * @category ISO Week Helpers\n * @summary Get the number of calendar ISO weeks between the given dates.\n *\n * @description\n * Get the number of calendar ISO weeks between the given dates.\n *\n * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date\n *\n * @param {Date|String|Number} dateLeft - the later date\n * @param {Date|String|Number} dateRight - the earlier date\n * @returns {Number} the number of calendar ISO weeks\n *\n * @example\n * // How many calendar ISO weeks are between 6 July 2014 and 21 July 2014?\n * var result = differenceInCalendarISOWeeks(\n *   new Date(2014, 6, 21),\n *   new Date(2014, 6, 6)\n * )\n * //=> 3\n */\nfunction differenceInCalendarISOWeeks (dirtyDateLeft, dirtyDateRight) {\n  var startOfISOWeekLeft = startOfISOWeek(dirtyDateLeft)\n  var startOfISOWeekRight = startOfISOWeek(dirtyDateRight)\n\n  var timestampLeft = startOfISOWeekLeft.getTime() -\n    startOfISOWeekLeft.getTimezoneOffset() * MILLISECONDS_IN_MINUTE\n  var timestampRight = startOfISOWeekRight.getTime() -\n    startOfISOWeekRight.getTimezoneOffset() * MILLISECONDS_IN_MINUTE\n\n  // Round the number of days to the nearest integer\n  // because the number of milliseconds in a week is not constant\n  // (e.g. it's different in the week of the daylight saving time clock shift)\n  return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_WEEK)\n}\n\nmodule.exports = differenceInCalendarISOWeeks\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/difference_in_calendar_iso_weeks/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/difference_in_calendar_iso_years/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/date-fns/difference_in_calendar_iso_years/index.js ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var getISOYear = __webpack_require__(/*! ../get_iso_year/index.js */ \"./node_modules/date-fns/get_iso_year/index.js\")\n\n/**\n * @category ISO Week-Numbering Year Helpers\n * @summary Get the number of calendar ISO week-numbering years between the given dates.\n *\n * @description\n * Get the number of calendar ISO week-numbering years between the given dates.\n *\n * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date\n *\n * @param {Date|String|Number} dateLeft - the later date\n * @param {Date|String|Number} dateRight - the earlier date\n * @returns {Number} the number of calendar ISO week-numbering years\n *\n * @example\n * // How many calendar ISO week-numbering years are 1 January 2010 and 1 January 2012?\n * var result = differenceInCalendarISOYears(\n *   new Date(2012, 0, 1),\n *   new Date(2010, 0, 1)\n * )\n * //=> 2\n */\nfunction differenceInCalendarISOYears (dirtyDateLeft, dirtyDateRight) {\n  return getISOYear(dirtyDateLeft) - getISOYear(dirtyDateRight)\n}\n\nmodule.exports = differenceInCalendarISOYears\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/difference_in_calendar_iso_years/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/difference_in_calendar_months/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/difference_in_calendar_months/index.js ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var parse = __webpack_require__(/*! ../parse/index.js */ \"./node_modules/date-fns/parse/index.js\")\n\n/**\n * @category Month Helpers\n * @summary Get the number of calendar months between the given dates.\n *\n * @description\n * Get the number of calendar months between the given dates.\n *\n * @param {Date|String|Number} dateLeft - the later date\n * @param {Date|String|Number} dateRight - the earlier date\n * @returns {Number} the number of calendar months\n *\n * @example\n * // How many calendar months are between 31 January 2014 and 1 September 2014?\n * var result = differenceInCalendarMonths(\n *   new Date(2014, 8, 1),\n *   new Date(2014, 0, 31)\n * )\n * //=> 8\n */\nfunction differenceInCalendarMonths (dirtyDateLeft, dirtyDateRight) {\n  var dateLeft = parse(dirtyDateLeft)\n  var dateRight = parse(dirtyDateRight)\n\n  var yearDiff = dateLeft.getFullYear() - dateRight.getFullYear()\n  var monthDiff = dateLeft.getMonth() - dateRight.getMonth()\n\n  return yearDiff * 12 + monthDiff\n}\n\nmodule.exports = differenceInCalendarMonths\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/difference_in_calendar_months/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/difference_in_calendar_quarters/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/difference_in_calendar_quarters/index.js ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var getQuarter = __webpack_require__(/*! ../get_quarter/index.js */ \"./node_modules/date-fns/get_quarter/index.js\")\nvar parse = __webpack_require__(/*! ../parse/index.js */ \"./node_modules/date-fns/parse/index.js\")\n\n/**\n * @category Quarter Helpers\n * @summary Get the number of calendar quarters between the given dates.\n *\n * @description\n * Get the number of calendar quarters between the given dates.\n *\n * @param {Date|String|Number} dateLeft - the later date\n * @param {Date|String|Number} dateRight - the earlier date\n * @returns {Number} the number of calendar quarters\n *\n * @example\n * // How many calendar quarters are between 31 December 2013 and 2 July 2014?\n * var result = differenceInCalendarQuarters(\n *   new Date(2014, 6, 2),\n *   new Date(2013, 11, 31)\n * )\n * //=> 3\n */\nfunction differenceInCalendarQuarters (dirtyDateLeft, dirtyDateRight) {\n  var dateLeft = parse(dirtyDateLeft)\n  var dateRight = parse(dirtyDateRight)\n\n  var yearDiff = dateLeft.getFullYear() - dateRight.getFullYear()\n  var quarterDiff = getQuarter(dateLeft) - getQuarter(dateRight)\n\n  return yearDiff * 4 + quarterDiff\n}\n\nmodule.exports = differenceInCalendarQuarters\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/difference_in_calendar_quarters/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/difference_in_calendar_weeks/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/difference_in_calendar_weeks/index.js ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var startOfWeek = __webpack_require__(/*! ../start_of_week/index.js */ \"./node_modules/date-fns/start_of_week/index.js\")\n\nvar MILLISECONDS_IN_MINUTE = 60000\nvar MILLISECONDS_IN_WEEK = 604800000\n\n/**\n * @category Week Helpers\n * @summary Get the number of calendar weeks between the given dates.\n *\n * @description\n * Get the number of calendar weeks between the given dates.\n *\n * @param {Date|String|Number} dateLeft - the later date\n * @param {Date|String|Number} dateRight - the earlier date\n * @param {Object} [options] - the object with options\n * @param {Number} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)\n * @returns {Number} the number of calendar weeks\n *\n * @example\n * // How many calendar weeks are between 5 July 2014 and 20 July 2014?\n * var result = differenceInCalendarWeeks(\n *   new Date(2014, 6, 20),\n *   new Date(2014, 6, 5)\n * )\n * //=> 3\n *\n * @example\n * // If the week starts on Monday,\n * // how many calendar weeks are between 5 July 2014 and 20 July 2014?\n * var result = differenceInCalendarWeeks(\n *   new Date(2014, 6, 20),\n *   new Date(2014, 6, 5),\n *   {weekStartsOn: 1}\n * )\n * //=> 2\n */\nfunction differenceInCalendarWeeks (dirtyDateLeft, dirtyDateRight, dirtyOptions) {\n  var startOfWeekLeft = startOfWeek(dirtyDateLeft, dirtyOptions)\n  var startOfWeekRight = startOfWeek(dirtyDateRight, dirtyOptions)\n\n  var timestampLeft = startOfWeekLeft.getTime() -\n    startOfWeekLeft.getTimezoneOffset() * MILLISECONDS_IN_MINUTE\n  var timestampRight = startOfWeekRight.getTime() -\n    startOfWeekRight.getTimezoneOffset() * MILLISECONDS_IN_MINUTE\n\n  // Round the number of days to the nearest integer\n  // because the number of milliseconds in a week is not constant\n  // (e.g. it's different in the week of the daylight saving time clock shift)\n  return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_WEEK)\n}\n\nmodule.exports = differenceInCalendarWeeks\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/difference_in_calendar_weeks/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/difference_in_calendar_years/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/difference_in_calendar_years/index.js ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var parse = __webpack_require__(/*! ../parse/index.js */ \"./node_modules/date-fns/parse/index.js\")\n\n/**\n * @category Year Helpers\n * @summary Get the number of calendar years between the given dates.\n *\n * @description\n * Get the number of calendar years between the given dates.\n *\n * @param {Date|String|Number} dateLeft - the later date\n * @param {Date|String|Number} dateRight - the earlier date\n * @returns {Number} the number of calendar years\n *\n * @example\n * // How many calendar years are between 31 December 2013 and 11 February 2015?\n * var result = differenceInCalendarYears(\n *   new Date(2015, 1, 11),\n *   new Date(2013, 11, 31)\n * )\n * //=> 2\n */\nfunction differenceInCalendarYears (dirtyDateLeft, dirtyDateRight) {\n  var dateLeft = parse(dirtyDateLeft)\n  var dateRight = parse(dirtyDateRight)\n\n  return dateLeft.getFullYear() - dateRight.getFullYear()\n}\n\nmodule.exports = differenceInCalendarYears\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/difference_in_calendar_years/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/difference_in_days/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/difference_in_days/index.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var parse = __webpack_require__(/*! ../parse/index.js */ \"./node_modules/date-fns/parse/index.js\")\nvar differenceInCalendarDays = __webpack_require__(/*! ../difference_in_calendar_days/index.js */ \"./node_modules/date-fns/difference_in_calendar_days/index.js\")\nvar compareAsc = __webpack_require__(/*! ../compare_asc/index.js */ \"./node_modules/date-fns/compare_asc/index.js\")\n\n/**\n * @category Day Helpers\n * @summary Get the number of full days between the given dates.\n *\n * @description\n * Get the number of full days between the given dates.\n *\n * @param {Date|String|Number} dateLeft - the later date\n * @param {Date|String|Number} dateRight - the earlier date\n * @returns {Number} the number of full days\n *\n * @example\n * // How many full days are between\n * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?\n * var result = differenceInDays(\n *   new Date(2012, 6, 2, 0, 0),\n *   new Date(2011, 6, 2, 23, 0)\n * )\n * //=> 365\n */\nfunction differenceInDays (dirtyDateLeft, dirtyDateRight) {\n  var dateLeft = parse(dirtyDateLeft)\n  var dateRight = parse(dirtyDateRight)\n\n  var sign = compareAsc(dateLeft, dateRight)\n  var difference = Math.abs(differenceInCalendarDays(dateLeft, dateRight))\n  dateLeft.setDate(dateLeft.getDate() - sign * difference)\n\n  // Math.abs(diff in full days - diff in calendar days) === 1 if last calendar day is not full\n  // If so, result must be decreased by 1 in absolute value\n  var isLastDayNotFull = compareAsc(dateLeft, dateRight) === -sign\n  return sign * (difference - isLastDayNotFull)\n}\n\nmodule.exports = differenceInDays\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/difference_in_days/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/difference_in_hours/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/difference_in_hours/index.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var differenceInMilliseconds = __webpack_require__(/*! ../difference_in_milliseconds/index.js */ \"./node_modules/date-fns/difference_in_milliseconds/index.js\")\n\nvar MILLISECONDS_IN_HOUR = 3600000\n\n/**\n * @category Hour Helpers\n * @summary Get the number of hours between the given dates.\n *\n * @description\n * Get the number of hours between the given dates.\n *\n * @param {Date|String|Number} dateLeft - the later date\n * @param {Date|String|Number} dateRight - the earlier date\n * @returns {Number} the number of hours\n *\n * @example\n * // How many hours are between 2 July 2014 06:50:00 and 2 July 2014 19:00:00?\n * var result = differenceInHours(\n *   new Date(2014, 6, 2, 19, 0),\n *   new Date(2014, 6, 2, 6, 50)\n * )\n * //=> 12\n */\nfunction differenceInHours (dirtyDateLeft, dirtyDateRight) {\n  var diff = differenceInMilliseconds(dirtyDateLeft, dirtyDateRight) / MILLISECONDS_IN_HOUR\n  return diff > 0 ? Math.floor(diff) : Math.ceil(diff)\n}\n\nmodule.exports = differenceInHours\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/difference_in_hours/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/difference_in_iso_years/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/difference_in_iso_years/index.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var parse = __webpack_require__(/*! ../parse/index.js */ \"./node_modules/date-fns/parse/index.js\")\nvar differenceInCalendarISOYears = __webpack_require__(/*! ../difference_in_calendar_iso_years/index.js */ \"./node_modules/date-fns/difference_in_calendar_iso_years/index.js\")\nvar compareAsc = __webpack_require__(/*! ../compare_asc/index.js */ \"./node_modules/date-fns/compare_asc/index.js\")\nvar subISOYears = __webpack_require__(/*! ../sub_iso_years/index.js */ \"./node_modules/date-fns/sub_iso_years/index.js\")\n\n/**\n * @category ISO Week-Numbering Year Helpers\n * @summary Get the number of full ISO week-numbering years between the given dates.\n *\n * @description\n * Get the number of full ISO week-numbering years between the given dates.\n *\n * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date\n *\n * @param {Date|String|Number} dateLeft - the later date\n * @param {Date|String|Number} dateRight - the earlier date\n * @returns {Number} the number of full ISO week-numbering years\n *\n * @example\n * // How many full ISO week-numbering years are between 1 January 2010 and 1 January 2012?\n * var result = differenceInISOYears(\n *   new Date(2012, 0, 1),\n *   new Date(2010, 0, 1)\n * )\n * //=> 1\n */\nfunction differenceInISOYears (dirtyDateLeft, dirtyDateRight) {\n  var dateLeft = parse(dirtyDateLeft)\n  var dateRight = parse(dirtyDateRight)\n\n  var sign = compareAsc(dateLeft, dateRight)\n  var difference = Math.abs(differenceInCalendarISOYears(dateLeft, dateRight))\n  dateLeft = subISOYears(dateLeft, sign * difference)\n\n  // Math.abs(diff in full ISO years - diff in calendar ISO years) === 1\n  // if last calendar ISO year is not full\n  // If so, result must be decreased by 1 in absolute value\n  var isLastISOYearNotFull = compareAsc(dateLeft, dateRight) === -sign\n  return sign * (difference - isLastISOYearNotFull)\n}\n\nmodule.exports = differenceInISOYears\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/difference_in_iso_years/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/difference_in_milliseconds/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/difference_in_milliseconds/index.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var parse = __webpack_require__(/*! ../parse/index.js */ \"./node_modules/date-fns/parse/index.js\")\n\n/**\n * @category Millisecond Helpers\n * @summary Get the number of milliseconds between the given dates.\n *\n * @description\n * Get the number of milliseconds between the given dates.\n *\n * @param {Date|String|Number} dateLeft - the later date\n * @param {Date|String|Number} dateRight - the earlier date\n * @returns {Number} the number of milliseconds\n *\n * @example\n * // How many milliseconds are between\n * // 2 July 2014 12:30:20.600 and 2 July 2014 12:30:21.700?\n * var result = differenceInMilliseconds(\n *   new Date(2014, 6, 2, 12, 30, 21, 700),\n *   new Date(2014, 6, 2, 12, 30, 20, 600)\n * )\n * //=> 1100\n */\nfunction differenceInMilliseconds (dirtyDateLeft, dirtyDateRight) {\n  var dateLeft = parse(dirtyDateLeft)\n  var dateRight = parse(dirtyDateRight)\n  return dateLeft.getTime() - dateRight.getTime()\n}\n\nmodule.exports = differenceInMilliseconds\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/difference_in_milliseconds/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/difference_in_minutes/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/difference_in_minutes/index.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var differenceInMilliseconds = __webpack_require__(/*! ../difference_in_milliseconds/index.js */ \"./node_modules/date-fns/difference_in_milliseconds/index.js\")\n\nvar MILLISECONDS_IN_MINUTE = 60000\n\n/**\n * @category Minute Helpers\n * @summary Get the number of minutes between the given dates.\n *\n * @description\n * Get the number of minutes between the given dates.\n *\n * @param {Date|String|Number} dateLeft - the later date\n * @param {Date|String|Number} dateRight - the earlier date\n * @returns {Number} the number of minutes\n *\n * @example\n * // How many minutes are between 2 July 2014 12:07:59 and 2 July 2014 12:20:00?\n * var result = differenceInMinutes(\n *   new Date(2014, 6, 2, 12, 20, 0),\n *   new Date(2014, 6, 2, 12, 7, 59)\n * )\n * //=> 12\n */\nfunction differenceInMinutes (dirtyDateLeft, dirtyDateRight) {\n  var diff = differenceInMilliseconds(dirtyDateLeft, dirtyDateRight) / MILLISECONDS_IN_MINUTE\n  return diff > 0 ? Math.floor(diff) : Math.ceil(diff)\n}\n\nmodule.exports = differenceInMinutes\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/difference_in_minutes/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/difference_in_months/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/difference_in_months/index.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var parse = __webpack_require__(/*! ../parse/index.js */ \"./node_modules/date-fns/parse/index.js\")\nvar differenceInCalendarMonths = __webpack_require__(/*! ../difference_in_calendar_months/index.js */ \"./node_modules/date-fns/difference_in_calendar_months/index.js\")\nvar compareAsc = __webpack_require__(/*! ../compare_asc/index.js */ \"./node_modules/date-fns/compare_asc/index.js\")\n\n/**\n * @category Month Helpers\n * @summary Get the number of full months between the given dates.\n *\n * @description\n * Get the number of full months between the given dates.\n *\n * @param {Date|String|Number} dateLeft - the later date\n * @param {Date|String|Number} dateRight - the earlier date\n * @returns {Number} the number of full months\n *\n * @example\n * // How many full months are between 31 January 2014 and 1 September 2014?\n * var result = differenceInMonths(\n *   new Date(2014, 8, 1),\n *   new Date(2014, 0, 31)\n * )\n * //=> 7\n */\nfunction differenceInMonths (dirtyDateLeft, dirtyDateRight) {\n  var dateLeft = parse(dirtyDateLeft)\n  var dateRight = parse(dirtyDateRight)\n\n  var sign = compareAsc(dateLeft, dateRight)\n  var difference = Math.abs(differenceInCalendarMonths(dateLeft, dateRight))\n  dateLeft.setMonth(dateLeft.getMonth() - sign * difference)\n\n  // Math.abs(diff in full months - diff in calendar months) === 1 if last calendar month is not full\n  // If so, result must be decreased by 1 in absolute value\n  var isLastMonthNotFull = compareAsc(dateLeft, dateRight) === -sign\n  return sign * (difference - isLastMonthNotFull)\n}\n\nmodule.exports = differenceInMonths\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/difference_in_months/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/difference_in_quarters/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/difference_in_quarters/index.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var differenceInMonths = __webpack_require__(/*! ../difference_in_months/index.js */ \"./node_modules/date-fns/difference_in_months/index.js\")\n\n/**\n * @category Quarter Helpers\n * @summary Get the number of full quarters between the given dates.\n *\n * @description\n * Get the number of full quarters between the given dates.\n *\n * @param {Date|String|Number} dateLeft - the later date\n * @param {Date|String|Number} dateRight - the earlier date\n * @returns {Number} the number of full quarters\n *\n * @example\n * // How many full quarters are between 31 December 2013 and 2 July 2014?\n * var result = differenceInQuarters(\n *   new Date(2014, 6, 2),\n *   new Date(2013, 11, 31)\n * )\n * //=> 2\n */\nfunction differenceInQuarters (dirtyDateLeft, dirtyDateRight) {\n  var diff = differenceInMonths(dirtyDateLeft, dirtyDateRight) / 3\n  return diff > 0 ? Math.floor(diff) : Math.ceil(diff)\n}\n\nmodule.exports = differenceInQuarters\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/difference_in_quarters/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/difference_in_seconds/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/difference_in_seconds/index.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var differenceInMilliseconds = __webpack_require__(/*! ../difference_in_milliseconds/index.js */ \"./node_modules/date-fns/difference_in_milliseconds/index.js\")\n\n/**\n * @category Second Helpers\n * @summary Get the number of seconds between the given dates.\n *\n * @description\n * Get the number of seconds between the given dates.\n *\n * @param {Date|String|Number} dateLeft - the later date\n * @param {Date|String|Number} dateRight - the earlier date\n * @returns {Number} the number of seconds\n *\n * @example\n * // How many seconds are between\n * // 2 July 2014 12:30:07.999 and 2 July 2014 12:30:20.000?\n * var result = differenceInSeconds(\n *   new Date(2014, 6, 2, 12, 30, 20, 0),\n *   new Date(2014, 6, 2, 12, 30, 7, 999)\n * )\n * //=> 12\n */\nfunction differenceInSeconds (dirtyDateLeft, dirtyDateRight) {\n  var diff = differenceInMilliseconds(dirtyDateLeft, dirtyDateRight) / 1000\n  return diff > 0 ? Math.floor(diff) : Math.ceil(diff)\n}\n\nmodule.exports = differenceInSeconds\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/difference_in_seconds/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/difference_in_weeks/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/difference_in_weeks/index.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var differenceInDays = __webpack_require__(/*! ../difference_in_days/index.js */ \"./node_modules/date-fns/difference_in_days/index.js\")\n\n/**\n * @category Week Helpers\n * @summary Get the number of full weeks between the given dates.\n *\n * @description\n * Get the number of full weeks between the given dates.\n *\n * @param {Date|String|Number} dateLeft - the later date\n * @param {Date|String|Number} dateRight - the earlier date\n * @returns {Number} the number of full weeks\n *\n * @example\n * // How many full weeks are between 5 July 2014 and 20 July 2014?\n * var result = differenceInWeeks(\n *   new Date(2014, 6, 20),\n *   new Date(2014, 6, 5)\n * )\n * //=> 2\n */\nfunction differenceInWeeks (dirtyDateLeft, dirtyDateRight) {\n  var diff = differenceInDays(dirtyDateLeft, dirtyDateRight) / 7\n  return diff > 0 ? Math.floor(diff) : Math.ceil(diff)\n}\n\nmodule.exports = differenceInWeeks\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/difference_in_weeks/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/difference_in_years/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/difference_in_years/index.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var parse = __webpack_require__(/*! ../parse/index.js */ \"./node_modules/date-fns/parse/index.js\")\nvar differenceInCalendarYears = __webpack_require__(/*! ../difference_in_calendar_years/index.js */ \"./node_modules/date-fns/difference_in_calendar_years/index.js\")\nvar compareAsc = __webpack_require__(/*! ../compare_asc/index.js */ \"./node_modules/date-fns/compare_asc/index.js\")\n\n/**\n * @category Year Helpers\n * @summary Get the number of full years between the given dates.\n *\n * @description\n * Get the number of full years between the given dates.\n *\n * @param {Date|String|Number} dateLeft - the later date\n * @param {Date|String|Number} dateRight - the earlier date\n * @returns {Number} the number of full years\n *\n * @example\n * // How many full years are between 31 December 2013 and 11 February 2015?\n * var result = differenceInYears(\n *   new Date(2015, 1, 11),\n *   new Date(2013, 11, 31)\n * )\n * //=> 1\n */\nfunction differenceInYears (dirtyDateLeft, dirtyDateRight) {\n  var dateLeft = parse(dirtyDateLeft)\n  var dateRight = parse(dirtyDateRight)\n\n  var sign = compareAsc(dateLeft, dateRight)\n  var difference = Math.abs(differenceInCalendarYears(dateLeft, dateRight))\n  dateLeft.setFullYear(dateLeft.getFullYear() - sign * difference)\n\n  // Math.abs(diff in full years - diff in calendar years) === 1 if last calendar year is not full\n  // If so, result must be decreased by 1 in absolute value\n  var isLastYearNotFull = compareAsc(dateLeft, dateRight) === -sign\n  return sign * (difference - isLastYearNotFull)\n}\n\nmodule.exports = differenceInYears\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/difference_in_years/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/distance_in_words/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/date-fns/distance_in_words/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var compareDesc = __webpack_require__(/*! ../compare_desc/index.js */ \"./node_modules/date-fns/compare_desc/index.js\")\nvar parse = __webpack_require__(/*! ../parse/index.js */ \"./node_modules/date-fns/parse/index.js\")\nvar differenceInSeconds = __webpack_require__(/*! ../difference_in_seconds/index.js */ \"./node_modules/date-fns/difference_in_seconds/index.js\")\nvar differenceInMonths = __webpack_require__(/*! ../difference_in_months/index.js */ \"./node_modules/date-fns/difference_in_months/index.js\")\nvar enLocale = __webpack_require__(/*! ../locale/en/index.js */ \"./node_modules/date-fns/locale/en/index.js\")\n\nvar MINUTES_IN_DAY = 1440\nvar MINUTES_IN_ALMOST_TWO_DAYS = 2520\nvar MINUTES_IN_MONTH = 43200\nvar MINUTES_IN_TWO_MONTHS = 86400\n\n/**\n * @category Common Helpers\n * @summary Return the distance between the given dates in words.\n *\n * @description\n * Return the distance between the given dates in words.\n *\n * | Distance between dates                                            | Result              |\n * |-------------------------------------------------------------------|---------------------|\n * | 0 ... 30 secs                                                     | less than a minute  |\n * | 30 secs ... 1 min 30 secs                                         | 1 minute            |\n * | 1 min 30 secs ... 44 mins 30 secs                                 | [2..44] minutes     |\n * | 44 mins ... 30 secs ... 89 mins 30 secs                           | about 1 hour        |\n * | 89 mins 30 secs ... 23 hrs 59 mins 30 secs                        | about [2..24] hours |\n * | 23 hrs 59 mins 30 secs ... 41 hrs 59 mins 30 secs                 | 1 day               |\n * | 41 hrs 59 mins 30 secs ... 29 days 23 hrs 59 mins 30 secs         | [2..30] days        |\n * | 29 days 23 hrs 59 mins 30 secs ... 44 days 23 hrs 59 mins 30 secs | about 1 month       |\n * | 44 days 23 hrs 59 mins 30 secs ... 59 days 23 hrs 59 mins 30 secs | about 2 months      |\n * | 59 days 23 hrs 59 mins 30 secs ... 1 yr                           | [2..12] months      |\n * | 1 yr ... 1 yr 3 months                                            | about 1 year        |\n * | 1 yr 3 months ... 1 yr 9 month s                                  | over 1 year         |\n * | 1 yr 9 months ... 2 yrs                                           | almost 2 years      |\n * | N yrs ... N yrs 3 months                                          | about N years       |\n * | N yrs 3 months ... N yrs 9 months                                 | over N years        |\n * | N yrs 9 months ... N+1 yrs                                        | almost N+1 years    |\n *\n * With `options.includeSeconds == true`:\n * | Distance between dates | Result               |\n * |------------------------|----------------------|\n * | 0 secs ... 5 secs      | less than 5 seconds  |\n * | 5 secs ... 10 secs     | less than 10 seconds |\n * | 10 secs ... 20 secs    | less than 20 seconds |\n * | 20 secs ... 40 secs    | half a minute        |\n * | 40 secs ... 60 secs    | less than a minute   |\n * | 60 secs ... 90 secs    | 1 minute             |\n *\n * @param {Date|String|Number} dateToCompare - the date to compare with\n * @param {Date|String|Number} date - the other date\n * @param {Object} [options] - the object with options\n * @param {Boolean} [options.includeSeconds=false] - distances less than a minute are more detailed\n * @param {Boolean} [options.addSuffix=false] - result indicates if the second date is earlier or later than the first\n * @param {Object} [options.locale=enLocale] - the locale object\n * @returns {String} the distance in words\n *\n * @example\n * // What is the distance between 2 July 2014 and 1 January 2015?\n * var result = distanceInWords(\n *   new Date(2014, 6, 2),\n *   new Date(2015, 0, 1)\n * )\n * //=> '6 months'\n *\n * @example\n * // What is the distance between 1 January 2015 00:00:15\n * // and 1 January 2015 00:00:00, including seconds?\n * var result = distanceInWords(\n *   new Date(2015, 0, 1, 0, 0, 15),\n *   new Date(2015, 0, 1, 0, 0, 0),\n *   {includeSeconds: true}\n * )\n * //=> 'less than 20 seconds'\n *\n * @example\n * // What is the distance from 1 January 2016\n * // to 1 January 2015, with a suffix?\n * var result = distanceInWords(\n *   new Date(2016, 0, 1),\n *   new Date(2015, 0, 1),\n *   {addSuffix: true}\n * )\n * //=> 'about 1 year ago'\n *\n * @example\n * // What is the distance between 1 August 2016 and 1 January 2015 in Esperanto?\n * var eoLocale = require('date-fns/locale/eo')\n * var result = distanceInWords(\n *   new Date(2016, 7, 1),\n *   new Date(2015, 0, 1),\n *   {locale: eoLocale}\n * )\n * //=> 'pli ol 1 jaro'\n */\nfunction distanceInWords (dirtyDateToCompare, dirtyDate, dirtyOptions) {\n  var options = dirtyOptions || {}\n\n  var comparison = compareDesc(dirtyDateToCompare, dirtyDate)\n\n  var locale = options.locale\n  var localize = enLocale.distanceInWords.localize\n  if (locale && locale.distanceInWords && locale.distanceInWords.localize) {\n    localize = locale.distanceInWords.localize\n  }\n\n  var localizeOptions = {\n    addSuffix: Boolean(options.addSuffix),\n    comparison: comparison\n  }\n\n  var dateLeft, dateRight\n  if (comparison > 0) {\n    dateLeft = parse(dirtyDateToCompare)\n    dateRight = parse(dirtyDate)\n  } else {\n    dateLeft = parse(dirtyDate)\n    dateRight = parse(dirtyDateToCompare)\n  }\n\n  var seconds = differenceInSeconds(dateRight, dateLeft)\n  var offset = dateRight.getTimezoneOffset() - dateLeft.getTimezoneOffset()\n  var minutes = Math.round(seconds / 60) - offset\n  var months\n\n  // 0 up to 2 mins\n  if (minutes < 2) {\n    if (options.includeSeconds) {\n      if (seconds < 5) {\n        return localize('lessThanXSeconds', 5, localizeOptions)\n      } else if (seconds < 10) {\n        return localize('lessThanXSeconds', 10, localizeOptions)\n      } else if (seconds < 20) {\n        return localize('lessThanXSeconds', 20, localizeOptions)\n      } else if (seconds < 40) {\n        return localize('halfAMinute', null, localizeOptions)\n      } else if (seconds < 60) {\n        return localize('lessThanXMinutes', 1, localizeOptions)\n      } else {\n        return localize('xMinutes', 1, localizeOptions)\n      }\n    } else {\n      if (minutes === 0) {\n        return localize('lessThanXMinutes', 1, localizeOptions)\n      } else {\n        return localize('xMinutes', minutes, localizeOptions)\n      }\n    }\n\n  // 2 mins up to 0.75 hrs\n  } else if (minutes < 45) {\n    return localize('xMinutes', minutes, localizeOptions)\n\n  // 0.75 hrs up to 1.5 hrs\n  } else if (minutes < 90) {\n    return localize('aboutXHours', 1, localizeOptions)\n\n  // 1.5 hrs up to 24 hrs\n  } else if (minutes < MINUTES_IN_DAY) {\n    var hours = Math.round(minutes / 60)\n    return localize('aboutXHours', hours, localizeOptions)\n\n  // 1 day up to 1.75 days\n  } else if (minutes < MINUTES_IN_ALMOST_TWO_DAYS) {\n    return localize('xDays', 1, localizeOptions)\n\n  // 1.75 days up to 30 days\n  } else if (minutes < MINUTES_IN_MONTH) {\n    var days = Math.round(minutes / MINUTES_IN_DAY)\n    return localize('xDays', days, localizeOptions)\n\n  // 1 month up to 2 months\n  } else if (minutes < MINUTES_IN_TWO_MONTHS) {\n    months = Math.round(minutes / MINUTES_IN_MONTH)\n    return localize('aboutXMonths', months, localizeOptions)\n  }\n\n  months = differenceInMonths(dateRight, dateLeft)\n\n  // 2 months up to 12 months\n  if (months < 12) {\n    var nearestMonth = Math.round(minutes / MINUTES_IN_MONTH)\n    return localize('xMonths', nearestMonth, localizeOptions)\n\n  // 1 year up to max Date\n  } else {\n    var monthsSinceStartOfYear = months % 12\n    var years = Math.floor(months / 12)\n\n    // N years up to 1 years 3 months\n    if (monthsSinceStartOfYear < 3) {\n      return localize('aboutXYears', years, localizeOptions)\n\n    // N years 3 months up to N years 9 months\n    } else if (monthsSinceStartOfYear < 9) {\n      return localize('overXYears', years, localizeOptions)\n\n    // N years 9 months up to N year 12 months\n    } else {\n      return localize('almostXYears', years + 1, localizeOptions)\n    }\n  }\n}\n\nmodule.exports = distanceInWords\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/distance_in_words/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/distance_in_words_strict/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/distance_in_words_strict/index.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var compareDesc = __webpack_require__(/*! ../compare_desc/index.js */ \"./node_modules/date-fns/compare_desc/index.js\")\nvar parse = __webpack_require__(/*! ../parse/index.js */ \"./node_modules/date-fns/parse/index.js\")\nvar differenceInSeconds = __webpack_require__(/*! ../difference_in_seconds/index.js */ \"./node_modules/date-fns/difference_in_seconds/index.js\")\nvar enLocale = __webpack_require__(/*! ../locale/en/index.js */ \"./node_modules/date-fns/locale/en/index.js\")\n\nvar MINUTES_IN_DAY = 1440\nvar MINUTES_IN_MONTH = 43200\nvar MINUTES_IN_YEAR = 525600\n\n/**\n * @category Common Helpers\n * @summary Return the distance between the given dates in words.\n *\n * @description\n * Return the distance between the given dates in words, using strict units.\n * This is like `distanceInWords`, but does not use helpers like 'almost', 'over',\n * 'less than' and the like.\n *\n * | Distance between dates | Result              |\n * |------------------------|---------------------|\n * | 0 ... 59 secs          | [0..59] seconds     |\n * | 1 ... 59 mins          | [1..59] minutes     |\n * | 1 ... 23 hrs           | [1..23] hours       |\n * | 1 ... 29 days          | [1..29] days        |\n * | 1 ... 11 months        | [1..11] months      |\n * | 1 ... N years          | [1..N]  years       |\n *\n * @param {Date|String|Number} dateToCompare - the date to compare with\n * @param {Date|String|Number} date - the other date\n * @param {Object} [options] - the object with options\n * @param {Boolean} [options.addSuffix=false] - result indicates if the second date is earlier or later than the first\n * @param {'s'|'m'|'h'|'d'|'M'|'Y'} [options.unit] - if specified, will force a unit\n * @param {'floor'|'ceil'|'round'} [options.partialMethod='floor'] - which way to round partial units\n * @param {Object} [options.locale=enLocale] - the locale object\n * @returns {String} the distance in words\n *\n * @example\n * // What is the distance between 2 July 2014 and 1 January 2015?\n * var result = distanceInWordsStrict(\n *   new Date(2014, 6, 2),\n *   new Date(2015, 0, 2)\n * )\n * //=> '6 months'\n *\n * @example\n * // What is the distance between 1 January 2015 00:00:15\n * // and 1 January 2015 00:00:00?\n * var result = distanceInWordsStrict(\n *   new Date(2015, 0, 1, 0, 0, 15),\n *   new Date(2015, 0, 1, 0, 0, 0),\n * )\n * //=> '15 seconds'\n *\n * @example\n * // What is the distance from 1 January 2016\n * // to 1 January 2015, with a suffix?\n * var result = distanceInWordsStrict(\n *   new Date(2016, 0, 1),\n *   new Date(2015, 0, 1),\n *   {addSuffix: true}\n * )\n * //=> '1 year ago'\n *\n * @example\n * // What is the distance from 1 January 2016\n * // to 1 January 2015, in minutes?\n * var result = distanceInWordsStrict(\n *   new Date(2016, 0, 1),\n *   new Date(2015, 0, 1),\n *   {unit: 'm'}\n * )\n * //=> '525600 minutes'\n *\n * @example\n * // What is the distance from 1 January 2016\n * // to 28 January 2015, in months, rounded up?\n * var result = distanceInWordsStrict(\n *   new Date(2015, 0, 28),\n *   new Date(2015, 0, 1),\n *   {unit: 'M', partialMethod: 'ceil'}\n * )\n * //=> '1 month'\n *\n * @example\n * // What is the distance between 1 August 2016 and 1 January 2015 in Esperanto?\n * var eoLocale = require('date-fns/locale/eo')\n * var result = distanceInWordsStrict(\n *   new Date(2016, 7, 1),\n *   new Date(2015, 0, 1),\n *   {locale: eoLocale}\n * )\n * //=> '1 jaro'\n */\nfunction distanceInWordsStrict (dirtyDateToCompare, dirtyDate, dirtyOptions) {\n  var options = dirtyOptions || {}\n\n  var comparison = compareDesc(dirtyDateToCompare, dirtyDate)\n\n  var locale = options.locale\n  var localize = enLocale.distanceInWords.localize\n  if (locale && locale.distanceInWords && locale.distanceInWords.localize) {\n    localize = locale.distanceInWords.localize\n  }\n\n  var localizeOptions = {\n    addSuffix: Boolean(options.addSuffix),\n    comparison: comparison\n  }\n\n  var dateLeft, dateRight\n  if (comparison > 0) {\n    dateLeft = parse(dirtyDateToCompare)\n    dateRight = parse(dirtyDate)\n  } else {\n    dateLeft = parse(dirtyDate)\n    dateRight = parse(dirtyDateToCompare)\n  }\n\n  var unit\n  var mathPartial = Math[options.partialMethod ? String(options.partialMethod) : 'floor']\n  var seconds = differenceInSeconds(dateRight, dateLeft)\n  var offset = dateRight.getTimezoneOffset() - dateLeft.getTimezoneOffset()\n  var minutes = mathPartial(seconds / 60) - offset\n  var hours, days, months, years\n\n  if (options.unit) {\n    unit = String(options.unit)\n  } else {\n    if (minutes < 1) {\n      unit = 's'\n    } else if (minutes < 60) {\n      unit = 'm'\n    } else if (minutes < MINUTES_IN_DAY) {\n      unit = 'h'\n    } else if (minutes < MINUTES_IN_MONTH) {\n      unit = 'd'\n    } else if (minutes < MINUTES_IN_YEAR) {\n      unit = 'M'\n    } else {\n      unit = 'Y'\n    }\n  }\n\n  // 0 up to 60 seconds\n  if (unit === 's') {\n    return localize('xSeconds', seconds, localizeOptions)\n\n  // 1 up to 60 mins\n  } else if (unit === 'm') {\n    return localize('xMinutes', minutes, localizeOptions)\n\n  // 1 up to 24 hours\n  } else if (unit === 'h') {\n    hours = mathPartial(minutes / 60)\n    return localize('xHours', hours, localizeOptions)\n\n  // 1 up to 30 days\n  } else if (unit === 'd') {\n    days = mathPartial(minutes / MINUTES_IN_DAY)\n    return localize('xDays', days, localizeOptions)\n\n  // 1 up to 12 months\n  } else if (unit === 'M') {\n    months = mathPartial(minutes / MINUTES_IN_MONTH)\n    return localize('xMonths', months, localizeOptions)\n\n  // 1 year up to max Date\n  } else if (unit === 'Y') {\n    years = mathPartial(minutes / MINUTES_IN_YEAR)\n    return localize('xYears', years, localizeOptions)\n  }\n\n  throw new Error('Unknown unit: ' + unit)\n}\n\nmodule.exports = distanceInWordsStrict\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/distance_in_words_strict/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/distance_in_words_to_now/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/distance_in_words_to_now/index.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var distanceInWords = __webpack_require__(/*! ../distance_in_words/index.js */ \"./node_modules/date-fns/distance_in_words/index.js\")\n\n/**\n * @category Common Helpers\n * @summary Return the distance between the given date and now in words.\n *\n * @description\n * Return the distance between the given date and now in words.\n *\n * | Distance to now                                                   | Result              |\n * |-------------------------------------------------------------------|---------------------|\n * | 0 ... 30 secs                                                     | less than a minute  |\n * | 30 secs ... 1 min 30 secs                                         | 1 minute            |\n * | 1 min 30 secs ... 44 mins 30 secs                                 | [2..44] minutes     |\n * | 44 mins ... 30 secs ... 89 mins 30 secs                           | about 1 hour        |\n * | 89 mins 30 secs ... 23 hrs 59 mins 30 secs                        | about [2..24] hours |\n * | 23 hrs 59 mins 30 secs ... 41 hrs 59 mins 30 secs                 | 1 day               |\n * | 41 hrs 59 mins 30 secs ... 29 days 23 hrs 59 mins 30 secs         | [2..30] days        |\n * | 29 days 23 hrs 59 mins 30 secs ... 44 days 23 hrs 59 mins 30 secs | about 1 month       |\n * | 44 days 23 hrs 59 mins 30 secs ... 59 days 23 hrs 59 mins 30 secs | about 2 months      |\n * | 59 days 23 hrs 59 mins 30 secs ... 1 yr                           | [2..12] months      |\n * | 1 yr ... 1 yr 3 months                                            | about 1 year        |\n * | 1 yr 3 months ... 1 yr 9 month s                                  | over 1 year         |\n * | 1 yr 9 months ... 2 yrs                                           | almost 2 years      |\n * | N yrs ... N yrs 3 months                                          | about N years       |\n * | N yrs 3 months ... N yrs 9 months                                 | over N years        |\n * | N yrs 9 months ... N+1 yrs                                        | almost N+1 years    |\n *\n * With `options.includeSeconds == true`:\n * | Distance to now     | Result               |\n * |---------------------|----------------------|\n * | 0 secs ... 5 secs   | less than 5 seconds  |\n * | 5 secs ... 10 secs  | less than 10 seconds |\n * | 10 secs ... 20 secs | less than 20 seconds |\n * | 20 secs ... 40 secs | half a minute        |\n * | 40 secs ... 60 secs | less than a minute   |\n * | 60 secs ... 90 secs | 1 minute             |\n *\n * @param {Date|String|Number} date - the given date\n * @param {Object} [options] - the object with options\n * @param {Boolean} [options.includeSeconds=false] - distances less than a minute are more detailed\n * @param {Boolean} [options.addSuffix=false] - result specifies if the second date is earlier or later than the first\n * @param {Object} [options.locale=enLocale] - the locale object\n * @returns {String} the distance in words\n *\n * @example\n * // If today is 1 January 2015, what is the distance to 2 July 2014?\n * var result = distanceInWordsToNow(\n *   new Date(2014, 6, 2)\n * )\n * //=> '6 months'\n *\n * @example\n * // If now is 1 January 2015 00:00:00,\n * // what is the distance to 1 January 2015 00:00:15, including seconds?\n * var result = distanceInWordsToNow(\n *   new Date(2015, 0, 1, 0, 0, 15),\n *   {includeSeconds: true}\n * )\n * //=> 'less than 20 seconds'\n *\n * @example\n * // If today is 1 January 2015,\n * // what is the distance to 1 January 2016, with a suffix?\n * var result = distanceInWordsToNow(\n *   new Date(2016, 0, 1),\n *   {addSuffix: true}\n * )\n * //=> 'in about 1 year'\n *\n * @example\n * // If today is 1 January 2015,\n * // what is the distance to 1 August 2016 in Esperanto?\n * var eoLocale = require('date-fns/locale/eo')\n * var result = distanceInWordsToNow(\n *   new Date(2016, 7, 1),\n *   {locale: eoLocale}\n * )\n * //=> 'pli ol 1 jaro'\n */\nfunction distanceInWordsToNow (dirtyDate, dirtyOptions) {\n  return distanceInWords(Date.now(), dirtyDate, dirtyOptions)\n}\n\nmodule.exports = distanceInWordsToNow\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/distance_in_words_to_now/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/each_day/index.js":
/*!*************************************************!*\
  !*** ./node_modules/date-fns/each_day/index.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var parse = __webpack_require__(/*! ../parse/index.js */ \"./node_modules/date-fns/parse/index.js\")\n\n/**\n * @category Day Helpers\n * @summary Return the array of dates within the specified range.\n *\n * @description\n * Return the array of dates within the specified range.\n *\n * @param {Date|String|Number} startDate - the first date\n * @param {Date|String|Number} endDate - the last date\n * @param {Number} [step=1] - the step between each day\n * @returns {Date[]} the array with starts of days from the day of startDate to the day of endDate\n * @throws {Error} startDate cannot be after endDate\n *\n * @example\n * // Each day between 6 October 2014 and 10 October 2014:\n * var result = eachDay(\n *   new Date(2014, 9, 6),\n *   new Date(2014, 9, 10)\n * )\n * //=> [\n * //   Mon Oct 06 2014 00:00:00,\n * //   Tue Oct 07 2014 00:00:00,\n * //   Wed Oct 08 2014 00:00:00,\n * //   Thu Oct 09 2014 00:00:00,\n * //   Fri Oct 10 2014 00:00:00\n * // ]\n */\nfunction eachDay (dirtyStartDate, dirtyEndDate, dirtyStep) {\n  var startDate = parse(dirtyStartDate)\n  var endDate = parse(dirtyEndDate)\n  var step = dirtyStep !== undefined ? dirtyStep : 1\n\n  var endTime = endDate.getTime()\n\n  if (startDate.getTime() > endTime) {\n    throw new Error('The first date cannot be after the second date')\n  }\n\n  var dates = []\n\n  var currentDate = startDate\n  currentDate.setHours(0, 0, 0, 0)\n\n  while (currentDate.getTime() <= endTime) {\n    dates.push(parse(currentDate))\n    currentDate.setDate(currentDate.getDate() + step)\n  }\n\n  return dates\n}\n\nmodule.exports = eachDay\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/each_day/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/end_of_day/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/end_of_day/index.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var parse = __webpack_require__(/*! ../parse/index.js */ \"./node_modules/date-fns/parse/index.js\")\n\n/**\n * @category Day Helpers\n * @summary Return the end of a day for the given date.\n *\n * @description\n * Return the end of a day for the given date.\n * The result will be in the local timezone.\n *\n * @param {Date|String|Number} date - the original date\n * @returns {Date} the end of a day\n *\n * @example\n * // The end of a day for 2 September 2014 11:55:00:\n * var result = endOfDay(new Date(2014, 8, 2, 11, 55, 0))\n * //=> Tue Sep 02 2014 23:59:59.999\n */\nfunction endOfDay (dirtyDate) {\n  var date = parse(dirtyDate)\n  date.setHours(23, 59, 59, 999)\n  return date\n}\n\nmodule.exports = endOfDay\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/end_of_day/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/end_of_hour/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/end_of_hour/index.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var parse = __webpack_require__(/*! ../parse/index.js */ \"./node_modules/date-fns/parse/index.js\")\n\n/**\n * @category Hour Helpers\n * @summary Return the end of an hour for the given date.\n *\n * @description\n * Return the end of an hour for the given date.\n * The result will be in the local timezone.\n *\n * @param {Date|String|Number} date - the original date\n * @returns {Date} the end of an hour\n *\n * @example\n * // The end of an hour for 2 September 2014 11:55:00:\n * var result = endOfHour(new Date(2014, 8, 2, 11, 55))\n * //=> Tue Sep 02 2014 11:59:59.999\n */\nfunction endOfHour (dirtyDate) {\n  var date = parse(dirtyDate)\n  date.setMinutes(59, 59, 999)\n  return date\n}\n\nmodule.exports = endOfHour\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/end_of_hour/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/end_of_iso_week/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/end_of_iso_week/index.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var endOfWeek = __webpack_require__(/*! ../end_of_week/index.js */ \"./node_modules/date-fns/end_of_week/index.js\")\n\n/**\n * @category ISO Week Helpers\n * @summary Return the end of an ISO week for the given date.\n *\n * @description\n * Return the end of an ISO week for the given date.\n * The result will be in the local timezone.\n *\n * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date\n *\n * @param {Date|String|Number} date - the original date\n * @returns {Date} the end of an ISO week\n *\n * @example\n * // The end of an ISO week for 2 September 2014 11:55:00:\n * var result = endOfISOWeek(new Date(2014, 8, 2, 11, 55, 0))\n * //=> Sun Sep 07 2014 23:59:59.999\n */\nfunction endOfISOWeek (dirtyDate) {\n  return endOfWeek(dirtyDate, {weekStartsOn: 1})\n}\n\nmodule.exports = endOfISOWeek\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/end_of_iso_week/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/end_of_iso_year/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/end_of_iso_year/index.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var getISOYear = __webpack_require__(/*! ../get_iso_year/index.js */ \"./node_modules/date-fns/get_iso_year/index.js\")\nvar startOfISOWeek = __webpack_require__(/*! ../start_of_iso_week/index.js */ \"./node_modules/date-fns/start_of_iso_week/index.js\")\n\n/**\n * @category ISO Week-Numbering Year Helpers\n * @summary Return the end of an ISO week-numbering year for the given date.\n *\n * @description\n * Return the end of an ISO week-numbering year,\n * which always starts 3 days before the year's first Thursday.\n * The result will be in the local timezone.\n *\n * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date\n *\n * @param {Date|String|Number} date - the original date\n * @returns {Date} the end of an ISO week-numbering year\n *\n * @example\n * // The end of an ISO week-numbering year for 2 July 2005:\n * var result = endOfISOYear(new Date(2005, 6, 2))\n * //=> Sun Jan 01 2006 23:59:59.999\n */\nfunction endOfISOYear (dirtyDate) {\n  var year = getISOYear(dirtyDate)\n  var fourthOfJanuaryOfNextYear = new Date(0)\n  fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4)\n  fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0)\n  var date = startOfISOWeek(fourthOfJanuaryOfNextYear)\n  date.setMilliseconds(date.getMilliseconds() - 1)\n  return date\n}\n\nmodule.exports = endOfISOYear\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/end_of_iso_year/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/end_of_minute/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/end_of_minute/index.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var parse = __webpack_require__(/*! ../parse/index.js */ \"./node_modules/date-fns/parse/index.js\")\n\n/**\n * @category Minute Helpers\n * @summary Return the end of a minute for the given date.\n *\n * @description\n * Return the end of a minute for the given date.\n * The result will be in the local timezone.\n *\n * @param {Date|String|Number} date - the original date\n * @returns {Date} the end of a minute\n *\n * @example\n * // The end of a minute for 1 December 2014 22:15:45.400:\n * var result = endOfMinute(new Date(2014, 11, 1, 22, 15, 45, 400))\n * //=> Mon Dec 01 2014 22:15:59.999\n */\nfunction endOfMinute (dirtyDate) {\n  var date = parse(dirtyDate)\n  date.setSeconds(59, 999)\n  return date\n}\n\nmodule.exports = endOfMinute\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/end_of_minute/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/end_of_month/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/end_of_month/index.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var parse = __webpack_require__(/*! ../parse/index.js */ \"./node_modules/date-fns/parse/index.js\")\n\n/**\n * @category Month Helpers\n * @summary Return the end of a month for the given date.\n *\n * @description\n * Return the end of a month for the given date.\n * The result will be in the local timezone.\n *\n * @param {Date|String|Number} date - the original date\n * @returns {Date} the end of a month\n *\n * @example\n * // The end of a month for 2 September 2014 11:55:00:\n * var result = endOfMonth(new Date(2014, 8, 2, 11, 55, 0))\n * //=> Tue Sep 30 2014 23:59:59.999\n */\nfunction endOfMonth (dirtyDate) {\n  var date = parse(dirtyDate)\n  var month = date.getMonth()\n  date.setFullYear(date.getFullYear(), month + 1, 0)\n  date.setHours(23, 59, 59, 999)\n  return date\n}\n\nmodule.exports = endOfMonth\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/end_of_month/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/end_of_quarter/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/end_of_quarter/index.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var parse = __webpack_require__(/*! ../parse/index.js */ \"./node_modules/date-fns/parse/index.js\")\n\n/**\n * @category Quarter Helpers\n * @summary Return the end of a year quarter for the given date.\n *\n * @description\n * Return the end of a year quarter for the given date.\n * The result will be in the local timezone.\n *\n * @param {Date|String|Number} date - the original date\n * @returns {Date} the end of a quarter\n *\n * @example\n * // The end of a quarter for 2 September 2014 11:55:00:\n * var result = endOfQuarter(new Date(2014, 8, 2, 11, 55, 0))\n * //=> Tue Sep 30 2014 23:59:59.999\n */\nfunction endOfQuarter (dirtyDate) {\n  var date = parse(dirtyDate)\n  var currentMonth = date.getMonth()\n  var month = currentMonth - currentMonth % 3 + 3\n  date.setMonth(month, 0)\n  date.setHours(23, 59, 59, 999)\n  return date\n}\n\nmodule.exports = endOfQuarter\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/end_of_quarter/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/end_of_second/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/end_of_second/index.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var parse = __webpack_require__(/*! ../parse/index.js */ \"./node_modules/date-fns/parse/index.js\")\n\n/**\n * @category Second Helpers\n * @summary Return the end of a second for the given date.\n *\n * @description\n * Return the end of a second for the given date.\n * The result will be in the local timezone.\n *\n * @param {Date|String|Number} date - the original date\n * @returns {Date} the end of a second\n *\n * @example\n * // The end of a second for 1 December 2014 22:15:45.400:\n * var result = endOfSecond(new Date(2014, 11, 1, 22, 15, 45, 400))\n * //=> Mon Dec 01 2014 22:15:45.999\n */\nfunction endOfSecond (dirtyDate) {\n  var date = parse(dirtyDate)\n  date.setMilliseconds(999)\n  return date\n}\n\nmodule.exports = endOfSecond\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/end_of_second/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/end_of_today/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/end_of_today/index.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var endOfDay = __webpack_require__(/*! ../end_of_day/index.js */ \"./node_modules/date-fns/end_of_day/index.js\")\n\n/**\n * @category Day Helpers\n * @summary Return the end of today.\n *\n * @description\n * Return the end of today.\n *\n * @returns {Date} the end of today\n *\n * @example\n * // If today is 6 October 2014:\n * var result = endOfToday()\n * //=> Mon Oct 6 2014 23:59:59.999\n */\nfunction endOfToday () {\n  return endOfDay(new Date())\n}\n\nmodule.exports = endOfToday\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/end_of_today/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/end_of_tomorrow/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/end_of_tomorrow/index.js ***!
  \********************************************************/
/***/ ((module) => {

eval("/**\n * @category Day Helpers\n * @summary Return the end of tomorrow.\n *\n * @description\n * Return the end of tomorrow.\n *\n * @returns {Date} the end of tomorrow\n *\n * @example\n * // If today is 6 October 2014:\n * var result = endOfTomorrow()\n * //=> Tue Oct 7 2014 23:59:59.999\n */\nfunction endOfTomorrow () {\n  var now = new Date()\n  var year = now.getFullYear()\n  var month = now.getMonth()\n  var day = now.getDate()\n\n  var date = new Date(0)\n  date.setFullYear(year, month, day + 1)\n  date.setHours(23, 59, 59, 999)\n  return date\n}\n\nmodule.exports = endOfTomorrow\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/end_of_tomorrow/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/end_of_week/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/end_of_week/index.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var parse = __webpack_require__(/*! ../parse/index.js */ \"./node_modules/date-fns/parse/index.js\")\n\n/**\n * @category Week Helpers\n * @summary Return the end of a week for the given date.\n *\n * @description\n * Return the end of a week for the given date.\n * The result will be in the local timezone.\n *\n * @param {Date|String|Number} date - the original date\n * @param {Object} [options] - the object with options\n * @param {Number} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)\n * @returns {Date} the end of a week\n *\n * @example\n * // The end of a week for 2 September 2014 11:55:00:\n * var result = endOfWeek(new Date(2014, 8, 2, 11, 55, 0))\n * //=> Sat Sep 06 2014 23:59:59.999\n *\n * @example\n * // If the week starts on Monday, the end of the week for 2 September 2014 11:55:00:\n * var result = endOfWeek(new Date(2014, 8, 2, 11, 55, 0), {weekStartsOn: 1})\n * //=> Sun Sep 07 2014 23:59:59.999\n */\nfunction endOfWeek (dirtyDate, dirtyOptions) {\n  var weekStartsOn = dirtyOptions ? (Number(dirtyOptions.weekStartsOn) || 0) : 0\n\n  var date = parse(dirtyDate)\n  var day = date.getDay()\n  var diff = (day < weekStartsOn ? -7 : 0) + 6 - (day - weekStartsOn)\n\n  date.setDate(date.getDate() + diff)\n  date.setHours(23, 59, 59, 999)\n  return date\n}\n\nmodule.exports = endOfWeek\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/end_of_week/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/end_of_year/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/end_of_year/index.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var parse = __webpack_require__(/*! ../parse/index.js */ \"./node_modules/date-fns/parse/index.js\")\n\n/**\n * @category Year Helpers\n * @summary Return the end of a year for the given date.\n *\n * @description\n * Return the end of a year for the given date.\n * The result will be in the local timezone.\n *\n * @param {Date|String|Number} date - the original date\n * @returns {Date} the end of a year\n *\n * @example\n * // The end of a year for 2 September 2014 11:55:00:\n * var result = endOfYear(new Date(2014, 8, 2, 11, 55, 00))\n * //=> Wed Dec 31 2014 23:59:59.999\n */\nfunction endOfYear (dirtyDate) {\n  var date = parse(dirtyDate)\n  var year = date.getFullYear()\n  date.setFullYear(year + 1, 0, 0)\n  date.setHours(23, 59, 59, 999)\n  return date\n}\n\nmodule.exports = endOfYear\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/end_of_year/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/end_of_yesterday/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/end_of_yesterday/index.js ***!
  \*********************************************************/
/***/ ((module) => {

eval("/**\n * @category Day Helpers\n * @summary Return the end of yesterday.\n *\n * @description\n * Return the end of yesterday.\n *\n * @returns {Date} the end of yesterday\n *\n * @example\n * // If today is 6 October 2014:\n * var result = endOfYesterday()\n * //=> Sun Oct 5 2014 23:59:59.999\n */\nfunction endOfYesterday () {\n  var now = new Date()\n  var year = now.getFullYear()\n  var month = now.getMonth()\n  var day = now.getDate()\n\n  var date = new Date(0)\n  date.setFullYear(year, month, day - 1)\n  date.setHours(23, 59, 59, 999)\n  return date\n}\n\nmodule.exports = endOfYesterday\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/end_of_yesterday/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/format/index.js":
/*!***********************************************!*\
  !*** ./node_modules/date-fns/format/index.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var getDayOfYear = __webpack_require__(/*! ../get_day_of_year/index.js */ \"./node_modules/date-fns/get_day_of_year/index.js\")\nvar getISOWeek = __webpack_require__(/*! ../get_iso_week/index.js */ \"./node_modules/date-fns/get_iso_week/index.js\")\nvar getISOYear = __webpack_require__(/*! ../get_iso_year/index.js */ \"./node_modules/date-fns/get_iso_year/index.js\")\nvar parse = __webpack_require__(/*! ../parse/index.js */ \"./node_modules/date-fns/parse/index.js\")\nvar isValid = __webpack_require__(/*! ../is_valid/index.js */ \"./node_modules/date-fns/is_valid/index.js\")\nvar enLocale = __webpack_require__(/*! ../locale/en/index.js */ \"./node_modules/date-fns/locale/en/index.js\")\n\n/**\n * @category Common Helpers\n * @summary Format the date.\n *\n * @description\n * Return the formatted date string in the given format.\n *\n * Accepted tokens:\n * | Unit                    | Token | Result examples                  |\n * |-------------------------|-------|----------------------------------|\n * | Month                   | M     | 1, 2, ..., 12                    |\n * |                         | Mo    | 1st, 2nd, ..., 12th              |\n * |                         | MM    | 01, 02, ..., 12                  |\n * |                         | MMM   | Jan, Feb, ..., Dec               |\n * |                         | MMMM  | January, February, ..., December |\n * | Quarter                 | Q     | 1, 2, 3, 4                       |\n * |                         | Qo    | 1st, 2nd, 3rd, 4th               |\n * | Day of month            | D     | 1, 2, ..., 31                    |\n * |                         | Do    | 1st, 2nd, ..., 31st              |\n * |                         | DD    | 01, 02, ..., 31                  |\n * | Day of year             | DDD   | 1, 2, ..., 366                   |\n * |                         | DDDo  | 1st, 2nd, ..., 366th             |\n * |                         | DDDD  | 001, 002, ..., 366               |\n * | Day of week             | d     | 0, 1, ..., 6                     |\n * |                         | do    | 0th, 1st, ..., 6th               |\n * |                         | dd    | Su, Mo, ..., Sa                  |\n * |                         | ddd   | Sun, Mon, ..., Sat               |\n * |                         | dddd  | Sunday, Monday, ..., Saturday    |\n * | Day of ISO week         | E     | 1, 2, ..., 7                     |\n * | ISO week                | W     | 1, 2, ..., 53                    |\n * |                         | Wo    | 1st, 2nd, ..., 53rd              |\n * |                         | WW    | 01, 02, ..., 53                  |\n * | Year                    | YY    | 00, 01, ..., 99                  |\n * |                         | YYYY  | 1900, 1901, ..., 2099            |\n * | ISO week-numbering year | GG    | 00, 01, ..., 99                  |\n * |                         | GGGG  | 1900, 1901, ..., 2099            |\n * | AM/PM                   | A     | AM, PM                           |\n * |                         | a     | am, pm                           |\n * |                         | aa    | a.m., p.m.                       |\n * | Hour                    | H     | 0, 1, ... 23                     |\n * |                         | HH    | 00, 01, ... 23                   |\n * |                         | h     | 1, 2, ..., 12                    |\n * |                         | hh    | 01, 02, ..., 12                  |\n * | Minute                  | m     | 0, 1, ..., 59                    |\n * |                         | mm    | 00, 01, ..., 59                  |\n * | Second                  | s     | 0, 1, ..., 59                    |\n * |                         | ss    | 00, 01, ..., 59                  |\n * | 1/10 of second          | S     | 0, 1, ..., 9                     |\n * | 1/100 of second         | SS    | 00, 01, ..., 99                  |\n * | Millisecond             | SSS   | 000, 001, ..., 999               |\n * | Timezone                | Z     | -01:00, +00:00, ... +12:00       |\n * |                         | ZZ    | -0100, +0000, ..., +1200         |\n * | Seconds timestamp       | X     | 512969520                        |\n * | Milliseconds timestamp  | x     | 512969520900                     |\n *\n * The characters wrapped in square brackets are escaped.\n *\n * The result may vary by locale.\n *\n * @param {Date|String|Number} date - the original date\n * @param {String} [format='YYYY-MM-DDTHH:mm:ss.SSSZ'] - the string of tokens\n * @param {Object} [options] - the object with options\n * @param {Object} [options.locale=enLocale] - the locale object\n * @returns {String} the formatted date string\n *\n * @example\n * // Represent 11 February 2014 in middle-endian format:\n * var result = format(\n *   new Date(2014, 1, 11),\n *   'MM/DD/YYYY'\n * )\n * //=> '02/11/2014'\n *\n * @example\n * // Represent 2 July 2014 in Esperanto:\n * var eoLocale = require('date-fns/locale/eo')\n * var result = format(\n *   new Date(2014, 6, 2),\n *   'Do [de] MMMM YYYY',\n *   {locale: eoLocale}\n * )\n * //=> '2-a de julio 2014'\n */\nfunction format (dirtyDate, dirtyFormatStr, dirtyOptions) {\n  var formatStr = dirtyFormatStr ? String(dirtyFormatStr) : 'YYYY-MM-DDTHH:mm:ss.SSSZ'\n  var options = dirtyOptions || {}\n\n  var locale = options.locale\n  var localeFormatters = enLocale.format.formatters\n  var formattingTokensRegExp = enLocale.format.formattingTokensRegExp\n  if (locale && locale.format && locale.format.formatters) {\n    localeFormatters = locale.format.formatters\n\n    if (locale.format.formattingTokensRegExp) {\n      formattingTokensRegExp = locale.format.formattingTokensRegExp\n    }\n  }\n\n  var date = parse(dirtyDate)\n\n  if (!isValid(date)) {\n    return 'Invalid Date'\n  }\n\n  var formatFn = buildFormatFn(formatStr, localeFormatters, formattingTokensRegExp)\n\n  return formatFn(date)\n}\n\nvar formatters = {\n  // Month: 1, 2, ..., 12\n  'M': function (date) {\n    return date.getMonth() + 1\n  },\n\n  // Month: 01, 02, ..., 12\n  'MM': function (date) {\n    return addLeadingZeros(date.getMonth() + 1, 2)\n  },\n\n  // Quarter: 1, 2, 3, 4\n  'Q': function (date) {\n    return Math.ceil((date.getMonth() + 1) / 3)\n  },\n\n  // Day of month: 1, 2, ..., 31\n  'D': function (date) {\n    return date.getDate()\n  },\n\n  // Day of month: 01, 02, ..., 31\n  'DD': function (date) {\n    return addLeadingZeros(date.getDate(), 2)\n  },\n\n  // Day of year: 1, 2, ..., 366\n  'DDD': function (date) {\n    return getDayOfYear(date)\n  },\n\n  // Day of year: 001, 002, ..., 366\n  'DDDD': function (date) {\n    return addLeadingZeros(getDayOfYear(date), 3)\n  },\n\n  // Day of week: 0, 1, ..., 6\n  'd': function (date) {\n    return date.getDay()\n  },\n\n  // Day of ISO week: 1, 2, ..., 7\n  'E': function (date) {\n    return date.getDay() || 7\n  },\n\n  // ISO week: 1, 2, ..., 53\n  'W': function (date) {\n    return getISOWeek(date)\n  },\n\n  // ISO week: 01, 02, ..., 53\n  'WW': function (date) {\n    return addLeadingZeros(getISOWeek(date), 2)\n  },\n\n  // Year: 00, 01, ..., 99\n  'YY': function (date) {\n    return addLeadingZeros(date.getFullYear(), 4).substr(2)\n  },\n\n  // Year: 1900, 1901, ..., 2099\n  'YYYY': function (date) {\n    return addLeadingZeros(date.getFullYear(), 4)\n  },\n\n  // ISO week-numbering year: 00, 01, ..., 99\n  'GG': function (date) {\n    return String(getISOYear(date)).substr(2)\n  },\n\n  // ISO week-numbering year: 1900, 1901, ..., 2099\n  'GGGG': function (date) {\n    return getISOYear(date)\n  },\n\n  // Hour: 0, 1, ... 23\n  'H': function (date) {\n    return date.getHours()\n  },\n\n  // Hour: 00, 01, ..., 23\n  'HH': function (date) {\n    return addLeadingZeros(date.getHours(), 2)\n  },\n\n  // Hour: 1, 2, ..., 12\n  'h': function (date) {\n    var hours = date.getHours()\n    if (hours === 0) {\n      return 12\n    } else if (hours > 12) {\n      return hours % 12\n    } else {\n      return hours\n    }\n  },\n\n  // Hour: 01, 02, ..., 12\n  'hh': function (date) {\n    return addLeadingZeros(formatters['h'](date), 2)\n  },\n\n  // Minute: 0, 1, ..., 59\n  'm': function (date) {\n    return date.getMinutes()\n  },\n\n  // Minute: 00, 01, ..., 59\n  'mm': function (date) {\n    return addLeadingZeros(date.getMinutes(), 2)\n  },\n\n  // Second: 0, 1, ..., 59\n  's': function (date) {\n    return date.getSeconds()\n  },\n\n  // Second: 00, 01, ..., 59\n  'ss': function (date) {\n    return addLeadingZeros(date.getSeconds(), 2)\n  },\n\n  // 1/10 of second: 0, 1, ..., 9\n  'S': function (date) {\n    return Math.floor(date.getMilliseconds() / 100)\n  },\n\n  // 1/100 of second: 00, 01, ..., 99\n  'SS': function (date) {\n    return addLeadingZeros(Math.floor(date.getMilliseconds() / 10), 2)\n  },\n\n  // Millisecond: 000, 001, ..., 999\n  'SSS': function (date) {\n    return addLeadingZeros(date.getMilliseconds(), 3)\n  },\n\n  // Timezone: -01:00, +00:00, ... +12:00\n  'Z': function (date) {\n    return formatTimezone(date.getTimezoneOffset(), ':')\n  },\n\n  // Timezone: -0100, +0000, ... +1200\n  'ZZ': function (date) {\n    return formatTimezone(date.getTimezoneOffset())\n  },\n\n  // Seconds timestamp: 512969520\n  'X': function (date) {\n    return Math.floor(date.getTime() / 1000)\n  },\n\n  // Milliseconds timestamp: 512969520900\n  'x': function (date) {\n    return date.getTime()\n  }\n}\n\nfunction buildFormatFn (formatStr, localeFormatters, formattingTokensRegExp) {\n  var array = formatStr.match(formattingTokensRegExp)\n  var length = array.length\n\n  var i\n  var formatter\n  for (i = 0; i < length; i++) {\n    formatter = localeFormatters[array[i]] || formatters[array[i]]\n    if (formatter) {\n      array[i] = formatter\n    } else {\n      array[i] = removeFormattingTokens(array[i])\n    }\n  }\n\n  return function (date) {\n    var output = ''\n    for (var i = 0; i < length; i++) {\n      if (array[i] instanceof Function) {\n        output += array[i](date, formatters)\n      } else {\n        output += array[i]\n      }\n    }\n    return output\n  }\n}\n\nfunction removeFormattingTokens (input) {\n  if (input.match(/\\[[\\s\\S]/)) {\n    return input.replace(/^\\[|]$/g, '')\n  }\n  return input.replace(/\\\\/g, '')\n}\n\nfunction formatTimezone (offset, delimeter) {\n  delimeter = delimeter || ''\n  var sign = offset > 0 ? '-' : '+'\n  var absOffset = Math.abs(offset)\n  var hours = Math.floor(absOffset / 60)\n  var minutes = absOffset % 60\n  return sign + addLeadingZeros(hours, 2) + delimeter + addLeadingZeros(minutes, 2)\n}\n\nfunction addLeadingZeros (number, targetLength) {\n  var output = Math.abs(number).toString()\n  while (output.length < targetLength) {\n    output = '0' + output\n  }\n  return output\n}\n\nmodule.exports = format\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/format/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/get_date/index.js":
/*!*************************************************!*\
  !*** ./node_modules/date-fns/get_date/index.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var parse = __webpack_require__(/*! ../parse/index.js */ \"./node_modules/date-fns/parse/index.js\")\n\n/**\n * @category Day Helpers\n * @summary Get the day of the month of the given date.\n *\n * @description\n * Get the day of the month of the given date.\n *\n * @param {Date|String|Number} date - the given date\n * @returns {Number} the day of month\n *\n * @example\n * // Which day of the month is 29 February 2012?\n * var result = getDate(new Date(2012, 1, 29))\n * //=> 29\n */\nfunction getDate (dirtyDate) {\n  var date = parse(dirtyDate)\n  var dayOfMonth = date.getDate()\n  return dayOfMonth\n}\n\nmodule.exports = getDate\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/get_date/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/get_day/index.js":
/*!************************************************!*\
  !*** ./node_modules/date-fns/get_day/index.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var parse = __webpack_require__(/*! ../parse/index.js */ \"./node_modules/date-fns/parse/index.js\")\n\n/**\n * @category Weekday Helpers\n * @summary Get the day of the week of the given date.\n *\n * @description\n * Get the day of the week of the given date.\n *\n * @param {Date|String|Number} date - the given date\n * @returns {Number} the day of week\n *\n * @example\n * // Which day of the week is 29 February 2012?\n * var result = getDay(new Date(2012, 1, 29))\n * //=> 3\n */\nfunction getDay (dirtyDate) {\n  var date = parse(dirtyDate)\n  var day = date.getDay()\n  return day\n}\n\nmodule.exports = getDay\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/get_day/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/get_day_of_year/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/get_day_of_year/index.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var parse = __webpack_require__(/*! ../parse/index.js */ \"./node_modules/date-fns/parse/index.js\")\nvar startOfYear = __webpack_require__(/*! ../start_of_year/index.js */ \"./node_modules/date-fns/start_of_year/index.js\")\nvar differenceInCalendarDays = __webpack_require__(/*! ../difference_in_calendar_days/index.js */ \"./node_modules/date-fns/difference_in_calendar_days/index.js\")\n\n/**\n * @category Day Helpers\n * @summary Get the day of the year of the given date.\n *\n * @description\n * Get the day of the year of the given date.\n *\n * @param {Date|String|Number} date - the given date\n * @returns {Number} the day of year\n *\n * @example\n * // Which day of the year is 2 July 2014?\n * var result = getDayOfYear(new Date(2014, 6, 2))\n * //=> 183\n */\nfunction getDayOfYear (dirtyDate) {\n  var date = parse(dirtyDate)\n  var diff = differenceInCalendarDays(date, startOfYear(date))\n  var dayOfYear = diff + 1\n  return dayOfYear\n}\n\nmodule.exports = getDayOfYear\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/get_day_of_year/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/get_days_in_month/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/date-fns/get_days_in_month/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var parse = __webpack_require__(/*! ../parse/index.js */ \"./node_modules/date-fns/parse/index.js\")\n\n/**\n * @category Month Helpers\n * @summary Get the number of days in a month of the given date.\n *\n * @description\n * Get the number of days in a month of the given date.\n *\n * @param {Date|String|Number} date - the given date\n * @returns {Number} the number of days in a month\n *\n * @example\n * // How many days are in February 2000?\n * var result = getDaysInMonth(new Date(2000, 1))\n * //=> 29\n */\nfunction getDaysInMonth (dirtyDate) {\n  var date = parse(dirtyDate)\n  var year = date.getFullYear()\n  var monthIndex = date.getMonth()\n  var lastDayOfMonth = new Date(0)\n  lastDayOfMonth.setFullYear(year, monthIndex + 1, 0)\n  lastDayOfMonth.setHours(0, 0, 0, 0)\n  return lastDayOfMonth.getDate()\n}\n\nmodule.exports = getDaysInMonth\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/get_days_in_month/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/get_days_in_year/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/get_days_in_year/index.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var isLeapYear = __webpack_require__(/*! ../is_leap_year/index.js */ \"./node_modules/date-fns/is_leap_year/index.js\")\n\n/**\n * @category Year Helpers\n * @summary Get the number of days in a year of the given date.\n *\n * @description\n * Get the number of days in a year of the given date.\n *\n * @param {Date|String|Number} date - the given date\n * @returns {Number} the number of days in a year\n *\n * @example\n * // How many days are in 2012?\n * var result = getDaysInYear(new Date(2012, 0, 1))\n * //=> 366\n */\nfunction getDaysInYear (dirtyDate) {\n  return isLeapYear(dirtyDate) ? 366 : 365\n}\n\nmodule.exports = getDaysInYear\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/get_days_in_year/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/get_hours/index.js":
/*!**************************************************!*\
  !*** ./node_modules/date-fns/get_hours/index.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var parse = __webpack_require__(/*! ../parse/index.js */ \"./node_modules/date-fns/parse/index.js\")\n\n/**\n * @category Hour Helpers\n * @summary Get the hours of the given date.\n *\n * @description\n * Get the hours of the given date.\n *\n * @param {Date|String|Number} date - the given date\n * @returns {Number} the hours\n *\n * @example\n * // Get the hours of 29 February 2012 11:45:00:\n * var result = getHours(new Date(2012, 1, 29, 11, 45))\n * //=> 11\n */\nfunction getHours (dirtyDate) {\n  var date = parse(dirtyDate)\n  var hours = date.getHours()\n  return hours\n}\n\nmodule.exports = getHours\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/get_hours/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/get_iso_day/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/get_iso_day/index.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var parse = __webpack_require__(/*! ../parse/index.js */ \"./node_modules/date-fns/parse/index.js\")\n\n/**\n * @category Weekday Helpers\n * @summary Get the day of the ISO week of the given date.\n *\n * @description\n * Get the day of the ISO week of the given date,\n * which is 7 for Sunday, 1 for Monday etc.\n *\n * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date\n *\n * @param {Date|String|Number} date - the given date\n * @returns {Number} the day of ISO week\n *\n * @example\n * // Which day of the ISO week is 26 February 2012?\n * var result = getISODay(new Date(2012, 1, 26))\n * //=> 7\n */\nfunction getISODay (dirtyDate) {\n  var date = parse(dirtyDate)\n  var day = date.getDay()\n\n  if (day === 0) {\n    day = 7\n  }\n\n  return day\n}\n\nmodule.exports = getISODay\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/get_iso_day/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/get_iso_week/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/get_iso_week/index.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var parse = __webpack_require__(/*! ../parse/index.js */ \"./node_modules/date-fns/parse/index.js\")\nvar startOfISOWeek = __webpack_require__(/*! ../start_of_iso_week/index.js */ \"./node_modules/date-fns/start_of_iso_week/index.js\")\nvar startOfISOYear = __webpack_require__(/*! ../start_of_iso_year/index.js */ \"./node_modules/date-fns/start_of_iso_year/index.js\")\n\nvar MILLISECONDS_IN_WEEK = 604800000\n\n/**\n * @category ISO Week Helpers\n * @summary Get the ISO week of the given date.\n *\n * @description\n * Get the ISO week of the given date.\n *\n * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date\n *\n * @param {Date|String|Number} date - the given date\n * @returns {Number} the ISO week\n *\n * @example\n * // Which week of the ISO-week numbering year is 2 January 2005?\n * var result = getISOWeek(new Date(2005, 0, 2))\n * //=> 53\n */\nfunction getISOWeek (dirtyDate) {\n  var date = parse(dirtyDate)\n  var diff = startOfISOWeek(date).getTime() - startOfISOYear(date).getTime()\n\n  // Round the number of days to the nearest integer\n  // because the number of milliseconds in a week is not constant\n  // (e.g. it's different in the week of the daylight saving time clock shift)\n  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1\n}\n\nmodule.exports = getISOWeek\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/get_iso_week/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/get_iso_weeks_in_year/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/get_iso_weeks_in_year/index.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var startOfISOYear = __webpack_require__(/*! ../start_of_iso_year/index.js */ \"./node_modules/date-fns/start_of_iso_year/index.js\")\nvar addWeeks = __webpack_require__(/*! ../add_weeks/index.js */ \"./node_modules/date-fns/add_weeks/index.js\")\n\nvar MILLISECONDS_IN_WEEK = 604800000\n\n/**\n * @category ISO Week-Numbering Year Helpers\n * @summary Get the number of weeks in an ISO week-numbering year of the given date.\n *\n * @description\n * Get the number of weeks in an ISO week-numbering year of the given date.\n *\n * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date\n *\n * @param {Date|String|Number} date - the given date\n * @returns {Number} the number of ISO weeks in a year\n *\n * @example\n * // How many weeks are in ISO week-numbering year 2015?\n * var result = getISOWeeksInYear(new Date(2015, 1, 11))\n * //=> 53\n */\nfunction getISOWeeksInYear (dirtyDate) {\n  var thisYear = startOfISOYear(dirtyDate)\n  var nextYear = startOfISOYear(addWeeks(thisYear, 60))\n  var diff = nextYear.valueOf() - thisYear.valueOf()\n  // Round the number of weeks to the nearest integer\n  // because the number of milliseconds in a week is not constant\n  // (e.g. it's different in the week of the daylight saving time clock shift)\n  return Math.round(diff / MILLISECONDS_IN_WEEK)\n}\n\nmodule.exports = getISOWeeksInYear\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/get_iso_weeks_in_year/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/get_iso_year/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/get_iso_year/index.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var parse = __webpack_require__(/*! ../parse/index.js */ \"./node_modules/date-fns/parse/index.js\")\nvar startOfISOWeek = __webpack_require__(/*! ../start_of_iso_week/index.js */ \"./node_modules/date-fns/start_of_iso_week/index.js\")\n\n/**\n * @category ISO Week-Numbering Year Helpers\n * @summary Get the ISO week-numbering year of the given date.\n *\n * @description\n * Get the ISO week-numbering year of the given date,\n * which always starts 3 days before the year's first Thursday.\n *\n * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date\n *\n * @param {Date|String|Number} date - the given date\n * @returns {Number} the ISO week-numbering year\n *\n * @example\n * // Which ISO-week numbering year is 2 January 2005?\n * var result = getISOYear(new Date(2005, 0, 2))\n * //=> 2004\n */\nfunction getISOYear (dirtyDate) {\n  var date = parse(dirtyDate)\n  var year = date.getFullYear()\n\n  var fourthOfJanuaryOfNextYear = new Date(0)\n  fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4)\n  fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0)\n  var startOfNextYear = startOfISOWeek(fourthOfJanuaryOfNextYear)\n\n  var fourthOfJanuaryOfThisYear = new Date(0)\n  fourthOfJanuaryOfThisYear.setFullYear(year, 0, 4)\n  fourthOfJanuaryOfThisYear.setHours(0, 0, 0, 0)\n  var startOfThisYear = startOfISOWeek(fourthOfJanuaryOfThisYear)\n\n  if (date.getTime() >= startOfNextYear.getTime()) {\n    return year + 1\n  } else if (date.getTime() >= startOfThisYear.getTime()) {\n    return year\n  } else {\n    return year - 1\n  }\n}\n\nmodule.exports = getISOYear\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/get_iso_year/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/get_milliseconds/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/get_milliseconds/index.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var parse = __webpack_require__(/*! ../parse/index.js */ \"./node_modules/date-fns/parse/index.js\")\n\n/**\n * @category Millisecond Helpers\n * @summary Get the milliseconds of the given date.\n *\n * @description\n * Get the milliseconds of the given date.\n *\n * @param {Date|String|Number} date - the given date\n * @returns {Number} the milliseconds\n *\n * @example\n * // Get the milliseconds of 29 February 2012 11:45:05.123:\n * var result = getMilliseconds(new Date(2012, 1, 29, 11, 45, 5, 123))\n * //=> 123\n */\nfunction getMilliseconds (dirtyDate) {\n  var date = parse(dirtyDate)\n  var milliseconds = date.getMilliseconds()\n  return milliseconds\n}\n\nmodule.exports = getMilliseconds\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/get_milliseconds/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/get_minutes/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/get_minutes/index.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var parse = __webpack_require__(/*! ../parse/index.js */ \"./node_modules/date-fns/parse/index.js\")\n\n/**\n * @category Minute Helpers\n * @summary Get the minutes of the given date.\n *\n * @description\n * Get the minutes of the given date.\n *\n * @param {Date|String|Number} date - the given date\n * @returns {Number} the minutes\n *\n * @example\n * // Get the minutes of 29 February 2012 11:45:05:\n * var result = getMinutes(new Date(2012, 1, 29, 11, 45, 5))\n * //=> 45\n */\nfunction getMinutes (dirtyDate) {\n  var date = parse(dirtyDate)\n  var minutes = date.getMinutes()\n  return minutes\n}\n\nmodule.exports = getMinutes\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/get_minutes/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/get_month/index.js":
/*!**************************************************!*\
  !*** ./node_modules/date-fns/get_month/index.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var parse = __webpack_require__(/*! ../parse/index.js */ \"./node_modules/date-fns/parse/index.js\")\n\n/**\n * @category Month Helpers\n * @summary Get the month of the given date.\n *\n * @description\n * Get the month of the given date.\n *\n * @param {Date|String|Number} date - the given date\n * @returns {Number} the month\n *\n * @example\n * // Which month is 29 February 2012?\n * var result = getMonth(new Date(2012, 1, 29))\n * //=> 1\n */\nfunction getMonth (dirtyDate) {\n  var date = parse(dirtyDate)\n  var month = date.getMonth()\n  return month\n}\n\nmodule.exports = getMonth\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/get_month/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/get_overlapping_days_in_ranges/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/get_overlapping_days_in_ranges/index.js ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var parse = __webpack_require__(/*! ../parse/index.js */ \"./node_modules/date-fns/parse/index.js\")\n\nvar MILLISECONDS_IN_DAY = 24 * 60 * 60 * 1000\n\n/**\n * @category Range Helpers\n * @summary Get the number of days that overlap in two date ranges\n *\n * @description\n * Get the number of days that overlap in two date ranges\n *\n * @param {Date|String|Number} initialRangeStartDate - the start of the initial range\n * @param {Date|String|Number} initialRangeEndDate - the end of the initial range\n * @param {Date|String|Number} comparedRangeStartDate - the start of the range to compare it with\n * @param {Date|String|Number} comparedRangeEndDate - the end of the range to compare it with\n * @returns {Number} the number of days that overlap in two date ranges\n * @throws {Error} startDate of a date range cannot be after its endDate\n *\n * @example\n * // For overlapping date ranges adds 1 for each started overlapping day:\n * getOverlappingDaysInRanges(\n *   new Date(2014, 0, 10), new Date(2014, 0, 20), new Date(2014, 0, 17), new Date(2014, 0, 21)\n * )\n * //=> 3\n *\n * @example\n * // For non-overlapping date ranges returns 0:\n * getOverlappingDaysInRanges(\n *   new Date(2014, 0, 10), new Date(2014, 0, 20), new Date(2014, 0, 21), new Date(2014, 0, 22)\n * )\n * //=> 0\n */\nfunction getOverlappingDaysInRanges (dirtyInitialRangeStartDate, dirtyInitialRangeEndDate, dirtyComparedRangeStartDate, dirtyComparedRangeEndDate) {\n  var initialStartTime = parse(dirtyInitialRangeStartDate).getTime()\n  var initialEndTime = parse(dirtyInitialRangeEndDate).getTime()\n  var comparedStartTime = parse(dirtyComparedRangeStartDate).getTime()\n  var comparedEndTime = parse(dirtyComparedRangeEndDate).getTime()\n\n  if (initialStartTime > initialEndTime || comparedStartTime > comparedEndTime) {\n    throw new Error('The start of the range cannot be after the end of the range')\n  }\n\n  var isOverlapping = initialStartTime < comparedEndTime && comparedStartTime < initialEndTime\n\n  if (!isOverlapping) {\n    return 0\n  }\n\n  var overlapStartDate = comparedStartTime < initialStartTime\n    ? initialStartTime\n    : comparedStartTime\n\n  var overlapEndDate = comparedEndTime > initialEndTime\n    ? initialEndTime\n    : comparedEndTime\n\n  var differenceInMs = overlapEndDate - overlapStartDate\n\n  return Math.ceil(differenceInMs / MILLISECONDS_IN_DAY)\n}\n\nmodule.exports = getOverlappingDaysInRanges\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/get_overlapping_days_in_ranges/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/get_quarter/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/get_quarter/index.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var parse = __webpack_require__(/*! ../parse/index.js */ \"./node_modules/date-fns/parse/index.js\")\n\n/**\n * @category Quarter Helpers\n * @summary Get the year quarter of the given date.\n *\n * @description\n * Get the year quarter of the given date.\n *\n * @param {Date|String|Number} date - the given date\n * @returns {Number} the quarter\n *\n * @example\n * // Which quarter is 2 July 2014?\n * var result = getQuarter(new Date(2014, 6, 2))\n * //=> 3\n */\nfunction getQuarter (dirtyDate) {\n  var date = parse(dirtyDate)\n  var quarter = Math.floor(date.getMonth() / 3) + 1\n  return quarter\n}\n\nmodule.exports = getQuarter\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/get_quarter/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/get_seconds/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/get_seconds/index.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var parse = __webpack_require__(/*! ../parse/index.js */ \"./node_modules/date-fns/parse/index.js\")\n\n/**\n * @category Second Helpers\n * @summary Get the seconds of the given date.\n *\n * @description\n * Get the seconds of the given date.\n *\n * @param {Date|String|Number} date - the given date\n * @returns {Number} the seconds\n *\n * @example\n * // Get the seconds of 29 February 2012 11:45:05.123:\n * var result = getSeconds(new Date(2012, 1, 29, 11, 45, 5, 123))\n * //=> 5\n */\nfunction getSeconds (dirtyDate) {\n  var date = parse(dirtyDate)\n  var seconds = date.getSeconds()\n  return seconds\n}\n\nmodule.exports = getSeconds\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/get_seconds/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/get_time/index.js":
/*!*************************************************!*\
  !*** ./node_modules/date-fns/get_time/index.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var parse = __webpack_require__(/*! ../parse/index.js */ \"./node_modules/date-fns/parse/index.js\")\n\n/**\n * @category Timestamp Helpers\n * @summary Get the milliseconds timestamp of the given date.\n *\n * @description\n * Get the milliseconds timestamp of the given date.\n *\n * @param {Date|String|Number} date - the given date\n * @returns {Number} the timestamp\n *\n * @example\n * // Get the timestamp of 29 February 2012 11:45:05.123:\n * var result = getTime(new Date(2012, 1, 29, 11, 45, 5, 123))\n * //=> 1330515905123\n */\nfunction getTime (dirtyDate) {\n  var date = parse(dirtyDate)\n  var timestamp = date.getTime()\n  return timestamp\n}\n\nmodule.exports = getTime\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/get_time/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/get_year/index.js":
/*!*************************************************!*\
  !*** ./node_modules/date-fns/get_year/index.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var parse = __webpack_require__(/*! ../parse/index.js */ \"./node_modules/date-fns/parse/index.js\")\n\n/**\n * @category Year Helpers\n * @summary Get the year of the given date.\n *\n * @description\n * Get the year of the given date.\n *\n * @param {Date|String|Number} date - the given date\n * @returns {Number} the year\n *\n * @example\n * // Which year is 2 July 2014?\n * var result = getYear(new Date(2014, 6, 2))\n * //=> 2014\n */\nfunction getYear (dirtyDate) {\n  var date = parse(dirtyDate)\n  var year = date.getFullYear()\n  return year\n}\n\nmodule.exports = getYear\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/get_year/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/index.js":
/*!****************************************!*\
  !*** ./node_modules/date-fns/index.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = {\n  addDays: __webpack_require__(/*! ./add_days/index.js */ \"./node_modules/date-fns/add_days/index.js\"),\n  addHours: __webpack_require__(/*! ./add_hours/index.js */ \"./node_modules/date-fns/add_hours/index.js\"),\n  addISOYears: __webpack_require__(/*! ./add_iso_years/index.js */ \"./node_modules/date-fns/add_iso_years/index.js\"),\n  addMilliseconds: __webpack_require__(/*! ./add_milliseconds/index.js */ \"./node_modules/date-fns/add_milliseconds/index.js\"),\n  addMinutes: __webpack_require__(/*! ./add_minutes/index.js */ \"./node_modules/date-fns/add_minutes/index.js\"),\n  addMonths: __webpack_require__(/*! ./add_months/index.js */ \"./node_modules/date-fns/add_months/index.js\"),\n  addQuarters: __webpack_require__(/*! ./add_quarters/index.js */ \"./node_modules/date-fns/add_quarters/index.js\"),\n  addSeconds: __webpack_require__(/*! ./add_seconds/index.js */ \"./node_modules/date-fns/add_seconds/index.js\"),\n  addWeeks: __webpack_require__(/*! ./add_weeks/index.js */ \"./node_modules/date-fns/add_weeks/index.js\"),\n  addYears: __webpack_require__(/*! ./add_years/index.js */ \"./node_modules/date-fns/add_years/index.js\"),\n  areRangesOverlapping: __webpack_require__(/*! ./are_ranges_overlapping/index.js */ \"./node_modules/date-fns/are_ranges_overlapping/index.js\"),\n  closestIndexTo: __webpack_require__(/*! ./closest_index_to/index.js */ \"./node_modules/date-fns/closest_index_to/index.js\"),\n  closestTo: __webpack_require__(/*! ./closest_to/index.js */ \"./node_modules/date-fns/closest_to/index.js\"),\n  compareAsc: __webpack_require__(/*! ./compare_asc/index.js */ \"./node_modules/date-fns/compare_asc/index.js\"),\n  compareDesc: __webpack_require__(/*! ./compare_desc/index.js */ \"./node_modules/date-fns/compare_desc/index.js\"),\n  differenceInCalendarDays: __webpack_require__(/*! ./difference_in_calendar_days/index.js */ \"./node_modules/date-fns/difference_in_calendar_days/index.js\"),\n  differenceInCalendarISOWeeks: __webpack_require__(/*! ./difference_in_calendar_iso_weeks/index.js */ \"./node_modules/date-fns/difference_in_calendar_iso_weeks/index.js\"),\n  differenceInCalendarISOYears: __webpack_require__(/*! ./difference_in_calendar_iso_years/index.js */ \"./node_modules/date-fns/difference_in_calendar_iso_years/index.js\"),\n  differenceInCalendarMonths: __webpack_require__(/*! ./difference_in_calendar_months/index.js */ \"./node_modules/date-fns/difference_in_calendar_months/index.js\"),\n  differenceInCalendarQuarters: __webpack_require__(/*! ./difference_in_calendar_quarters/index.js */ \"./node_modules/date-fns/difference_in_calendar_quarters/index.js\"),\n  differenceInCalendarWeeks: __webpack_require__(/*! ./difference_in_calendar_weeks/index.js */ \"./node_modules/date-fns/difference_in_calendar_weeks/index.js\"),\n  differenceInCalendarYears: __webpack_require__(/*! ./difference_in_calendar_years/index.js */ \"./node_modules/date-fns/difference_in_calendar_years/index.js\"),\n  differenceInDays: __webpack_require__(/*! ./difference_in_days/index.js */ \"./node_modules/date-fns/difference_in_days/index.js\"),\n  differenceInHours: __webpack_require__(/*! ./difference_in_hours/index.js */ \"./node_modules/date-fns/difference_in_hours/index.js\"),\n  differenceInISOYears: __webpack_require__(/*! ./difference_in_iso_years/index.js */ \"./node_modules/date-fns/difference_in_iso_years/index.js\"),\n  differenceInMilliseconds: __webpack_require__(/*! ./difference_in_milliseconds/index.js */ \"./node_modules/date-fns/difference_in_milliseconds/index.js\"),\n  differenceInMinutes: __webpack_require__(/*! ./difference_in_minutes/index.js */ \"./node_modules/date-fns/difference_in_minutes/index.js\"),\n  differenceInMonths: __webpack_require__(/*! ./difference_in_months/index.js */ \"./node_modules/date-fns/difference_in_months/index.js\"),\n  differenceInQuarters: __webpack_require__(/*! ./difference_in_quarters/index.js */ \"./node_modules/date-fns/difference_in_quarters/index.js\"),\n  differenceInSeconds: __webpack_require__(/*! ./difference_in_seconds/index.js */ \"./node_modules/date-fns/difference_in_seconds/index.js\"),\n  differenceInWeeks: __webpack_require__(/*! ./difference_in_weeks/index.js */ \"./node_modules/date-fns/difference_in_weeks/index.js\"),\n  differenceInYears: __webpack_require__(/*! ./difference_in_years/index.js */ \"./node_modules/date-fns/difference_in_years/index.js\"),\n  distanceInWords: __webpack_require__(/*! ./distance_in_words/index.js */ \"./node_modules/date-fns/distance_in_words/index.js\"),\n  distanceInWordsStrict: __webpack_require__(/*! ./distance_in_words_strict/index.js */ \"./node_modules/date-fns/distance_in_words_strict/index.js\"),\n  distanceInWordsToNow: __webpack_require__(/*! ./distance_in_words_to_now/index.js */ \"./node_modules/date-fns/distance_in_words_to_now/index.js\"),\n  eachDay: __webpack_require__(/*! ./each_day/index.js */ \"./node_modules/date-fns/each_day/index.js\"),\n  endOfDay: __webpack_require__(/*! ./end_of_day/index.js */ \"./node_modules/date-fns/end_of_day/index.js\"),\n  endOfHour: __webpack_require__(/*! ./end_of_hour/index.js */ \"./node_modules/date-fns/end_of_hour/index.js\"),\n  endOfISOWeek: __webpack_require__(/*! ./end_of_iso_week/index.js */ \"./node_modules/date-fns/end_of_iso_week/index.js\"),\n  endOfISOYear: __webpack_require__(/*! ./end_of_iso_year/index.js */ \"./node_modules/date-fns/end_of_iso_year/index.js\"),\n  endOfMinute: __webpack_require__(/*! ./end_of_minute/index.js */ \"./node_modules/date-fns/end_of_minute/index.js\"),\n  endOfMonth: __webpack_require__(/*! ./end_of_month/index.js */ \"./node_modules/date-fns/end_of_month/index.js\"),\n  endOfQuarter: __webpack_require__(/*! ./end_of_quarter/index.js */ \"./node_modules/date-fns/end_of_quarter/index.js\"),\n  endOfSecond: __webpack_require__(/*! ./end_of_second/index.js */ \"./node_modules/date-fns/end_of_second/index.js\"),\n  endOfToday: __webpack_require__(/*! ./end_of_today/index.js */ \"./node_modules/date-fns/end_of_today/index.js\"),\n  endOfTomorrow: __webpack_require__(/*! ./end_of_tomorrow/index.js */ \"./node_modules/date-fns/end_of_tomorrow/index.js\"),\n  endOfWeek: __webpack_require__(/*! ./end_of_week/index.js */ \"./node_modules/date-fns/end_of_week/index.js\"),\n  endOfYear: __webpack_require__(/*! ./end_of_year/index.js */ \"./node_modules/date-fns/end_of_year/index.js\"),\n  endOfYesterday: __webpack_require__(/*! ./end_of_yesterday/index.js */ \"./node_modules/date-fns/end_of_yesterday/index.js\"),\n  format: __webpack_require__(/*! ./format/index.js */ \"./node_modules/date-fns/format/index.js\"),\n  getDate: __webpack_require__(/*! ./get_date/index.js */ \"./node_modules/date-fns/get_date/index.js\"),\n  getDay: __webpack_require__(/*! ./get_day/index.js */ \"./node_modules/date-fns/get_day/index.js\"),\n  getDayOfYear: __webpack_require__(/*! ./get_day_of_year/index.js */ \"./node_modules/date-fns/get_day_of_year/index.js\"),\n  getDaysInMonth: __webpack_require__(/*! ./get_days_in_month/index.js */ \"./node_modules/date-fns/get_days_in_month/index.js\"),\n  getDaysInYear: __webpack_require__(/*! ./get_days_in_year/index.js */ \"./node_modules/date-fns/get_days_in_year/index.js\"),\n  getHours: __webpack_require__(/*! ./get_hours/index.js */ \"./node_modules/date-fns/get_hours/index.js\"),\n  getISODay: __webpack_require__(/*! ./get_iso_day/index.js */ \"./node_modules/date-fns/get_iso_day/index.js\"),\n  getISOWeek: __webpack_require__(/*! ./get_iso_week/index.js */ \"./node_modules/date-fns/get_iso_week/index.js\"),\n  getISOWeeksInYear: __webpack_require__(/*! ./get_iso_weeks_in_year/index.js */ \"./node_modules/date-fns/get_iso_weeks_in_year/index.js\"),\n  getISOYear: __webpack_require__(/*! ./get_iso_year/index.js */ \"./node_modules/date-fns/get_iso_year/index.js\"),\n  getMilliseconds: __webpack_require__(/*! ./get_milliseconds/index.js */ \"./node_modules/date-fns/get_milliseconds/index.js\"),\n  getMinutes: __webpack_require__(/*! ./get_minutes/index.js */ \"./node_modules/date-fns/get_minutes/index.js\"),\n  getMonth: __webpack_require__(/*! ./get_month/index.js */ \"./node_modules/date-fns/get_month/index.js\"),\n  getOverlappingDaysInRanges: __webpack_require__(/*! ./get_overlapping_days_in_ranges/index.js */ \"./node_modules/date-fns/get_overlapping_days_in_ranges/index.js\"),\n  getQuarter: __webpack_require__(/*! ./get_quarter/index.js */ \"./node_modules/date-fns/get_quarter/index.js\"),\n  getSeconds: __webpack_require__(/*! ./get_seconds/index.js */ \"./node_modules/date-fns/get_seconds/index.js\"),\n  getTime: __webpack_require__(/*! ./get_time/index.js */ \"./node_modules/date-fns/get_time/index.js\"),\n  getYear: __webpack_require__(/*! ./get_year/index.js */ \"./node_modules/date-fns/get_year/index.js\"),\n  isAfter: __webpack_require__(/*! ./is_after/index.js */ \"./node_modules/date-fns/is_after/index.js\"),\n  isBefore: __webpack_require__(/*! ./is_before/index.js */ \"./node_modules/date-fns/is_before/index.js\"),\n  isDate: __webpack_require__(/*! ./is_date/index.js */ \"./node_modules/date-fns/is_date/index.js\"),\n  isEqual: __webpack_require__(/*! ./is_equal/index.js */ \"./node_modules/date-fns/is_equal/index.js\"),\n  isFirstDayOfMonth: __webpack_require__(/*! ./is_first_day_of_month/index.js */ \"./node_modules/date-fns/is_first_day_of_month/index.js\"),\n  isFriday: __webpack_require__(/*! ./is_friday/index.js */ \"./node_modules/date-fns/is_friday/index.js\"),\n  isFuture: __webpack_require__(/*! ./is_future/index.js */ \"./node_modules/date-fns/is_future/index.js\"),\n  isLastDayOfMonth: __webpack_require__(/*! ./is_last_day_of_month/index.js */ \"./node_modules/date-fns/is_last_day_of_month/index.js\"),\n  isLeapYear: __webpack_require__(/*! ./is_leap_year/index.js */ \"./node_modules/date-fns/is_leap_year/index.js\"),\n  isMonday: __webpack_require__(/*! ./is_monday/index.js */ \"./node_modules/date-fns/is_monday/index.js\"),\n  isPast: __webpack_require__(/*! ./is_past/index.js */ \"./node_modules/date-fns/is_past/index.js\"),\n  isSameDay: __webpack_require__(/*! ./is_same_day/index.js */ \"./node_modules/date-fns/is_same_day/index.js\"),\n  isSameHour: __webpack_require__(/*! ./is_same_hour/index.js */ \"./node_modules/date-fns/is_same_hour/index.js\"),\n  isSameISOWeek: __webpack_require__(/*! ./is_same_iso_week/index.js */ \"./node_modules/date-fns/is_same_iso_week/index.js\"),\n  isSameISOYear: __webpack_require__(/*! ./is_same_iso_year/index.js */ \"./node_modules/date-fns/is_same_iso_year/index.js\"),\n  isSameMinute: __webpack_require__(/*! ./is_same_minute/index.js */ \"./node_modules/date-fns/is_same_minute/index.js\"),\n  isSameMonth: __webpack_require__(/*! ./is_same_month/index.js */ \"./node_modules/date-fns/is_same_month/index.js\"),\n  isSameQuarter: __webpack_require__(/*! ./is_same_quarter/index.js */ \"./node_modules/date-fns/is_same_quarter/index.js\"),\n  isSameSecond: __webpack_require__(/*! ./is_same_second/index.js */ \"./node_modules/date-fns/is_same_second/index.js\"),\n  isSameWeek: __webpack_require__(/*! ./is_same_week/index.js */ \"./node_modules/date-fns/is_same_week/index.js\"),\n  isSameYear: __webpack_require__(/*! ./is_same_year/index.js */ \"./node_modules/date-fns/is_same_year/index.js\"),\n  isSaturday: __webpack_require__(/*! ./is_saturday/index.js */ \"./node_modules/date-fns/is_saturday/index.js\"),\n  isSunday: __webpack_require__(/*! ./is_sunday/index.js */ \"./node_modules/date-fns/is_sunday/index.js\"),\n  isThisHour: __webpack_require__(/*! ./is_this_hour/index.js */ \"./node_modules/date-fns/is_this_hour/index.js\"),\n  isThisISOWeek: __webpack_require__(/*! ./is_this_iso_week/index.js */ \"./node_modules/date-fns/is_this_iso_week/index.js\"),\n  isThisISOYear: __webpack_require__(/*! ./is_this_iso_year/index.js */ \"./node_modules/date-fns/is_this_iso_year/index.js\"),\n  isThisMinute: __webpack_require__(/*! ./is_this_minute/index.js */ \"./node_modules/date-fns/is_this_minute/index.js\"),\n  isThisMonth: __webpack_require__(/*! ./is_this_month/index.js */ \"./node_modules/date-fns/is_this_month/index.js\"),\n  isThisQuarter: __webpack_require__(/*! ./is_this_quarter/index.js */ \"./node_modules/date-fns/is_this_quarter/index.js\"),\n  isThisSecond: __webpack_require__(/*! ./is_this_second/index.js */ \"./node_modules/date-fns/is_this_second/index.js\"),\n  isThisWeek: __webpack_require__(/*! ./is_this_week/index.js */ \"./node_modules/date-fns/is_this_week/index.js\"),\n  isThisYear: __webpack_require__(/*! ./is_this_year/index.js */ \"./node_modules/date-fns/is_this_year/index.js\"),\n  isThursday: __webpack_require__(/*! ./is_thursday/index.js */ \"./node_modules/date-fns/is_thursday/index.js\"),\n  isToday: __webpack_require__(/*! ./is_today/index.js */ \"./node_modules/date-fns/is_today/index.js\"),\n  isTomorrow: __webpack_require__(/*! ./is_tomorrow/index.js */ \"./node_modules/date-fns/is_tomorrow/index.js\"),\n  isTuesday: __webpack_require__(/*! ./is_tuesday/index.js */ \"./node_modules/date-fns/is_tuesday/index.js\"),\n  isValid: __webpack_require__(/*! ./is_valid/index.js */ \"./node_modules/date-fns/is_valid/index.js\"),\n  isWednesday: __webpack_require__(/*! ./is_wednesday/index.js */ \"./node_modules/date-fns/is_wednesday/index.js\"),\n  isWeekend: __webpack_require__(/*! ./is_weekend/index.js */ \"./node_modules/date-fns/is_weekend/index.js\"),\n  isWithinRange: __webpack_require__(/*! ./is_within_range/index.js */ \"./node_modules/date-fns/is_within_range/index.js\"),\n  isYesterday: __webpack_require__(/*! ./is_yesterday/index.js */ \"./node_modules/date-fns/is_yesterday/index.js\"),\n  lastDayOfISOWeek: __webpack_require__(/*! ./last_day_of_iso_week/index.js */ \"./node_modules/date-fns/last_day_of_iso_week/index.js\"),\n  lastDayOfISOYear: __webpack_require__(/*! ./last_day_of_iso_year/index.js */ \"./node_modules/date-fns/last_day_of_iso_year/index.js\"),\n  lastDayOfMonth: __webpack_require__(/*! ./last_day_of_month/index.js */ \"./node_modules/date-fns/last_day_of_month/index.js\"),\n  lastDayOfQuarter: __webpack_require__(/*! ./last_day_of_quarter/index.js */ \"./node_modules/date-fns/last_day_of_quarter/index.js\"),\n  lastDayOfWeek: __webpack_require__(/*! ./last_day_of_week/index.js */ \"./node_modules/date-fns/last_day_of_week/index.js\"),\n  lastDayOfYear: __webpack_require__(/*! ./last_day_of_year/index.js */ \"./node_modules/date-fns/last_day_of_year/index.js\"),\n  max: __webpack_require__(/*! ./max/index.js */ \"./node_modules/date-fns/max/index.js\"),\n  min: __webpack_require__(/*! ./min/index.js */ \"./node_modules/date-fns/min/index.js\"),\n  parse: __webpack_require__(/*! ./parse/index.js */ \"./node_modules/date-fns/parse/index.js\"),\n  setDate: __webpack_require__(/*! ./set_date/index.js */ \"./node_modules/date-fns/set_date/index.js\"),\n  setDay: __webpack_require__(/*! ./set_day/index.js */ \"./node_modules/date-fns/set_day/index.js\"),\n  setDayOfYear: __webpack_require__(/*! ./set_day_of_year/index.js */ \"./node_modules/date-fns/set_day_of_year/index.js\"),\n  setHours: __webpack_require__(/*! ./set_hours/index.js */ \"./node_modules/date-fns/set_hours/index.js\"),\n  setISODay: __webpack_require__(/*! ./set_iso_day/index.js */ \"./node_modules/date-fns/set_iso_day/index.js\"),\n  setISOWeek: __webpack_require__(/*! ./set_iso_week/index.js */ \"./node_modules/date-fns/set_iso_week/index.js\"),\n  setISOYear: __webpack_require__(/*! ./set_iso_year/index.js */ \"./node_modules/date-fns/set_iso_year/index.js\"),\n  setMilliseconds: __webpack_require__(/*! ./set_milliseconds/index.js */ \"./node_modules/date-fns/set_milliseconds/index.js\"),\n  setMinutes: __webpack_require__(/*! ./set_minutes/index.js */ \"./node_modules/date-fns/set_minutes/index.js\"),\n  setMonth: __webpack_require__(/*! ./set_month/index.js */ \"./node_modules/date-fns/set_month/index.js\"),\n  setQuarter: __webpack_require__(/*! ./set_quarter/index.js */ \"./node_modules/date-fns/set_quarter/index.js\"),\n  setSeconds: __webpack_require__(/*! ./set_seconds/index.js */ \"./node_modules/date-fns/set_seconds/index.js\"),\n  setYear: __webpack_require__(/*! ./set_year/index.js */ \"./node_modules/date-fns/set_year/index.js\"),\n  startOfDay: __webpack_require__(/*! ./start_of_day/index.js */ \"./node_modules/date-fns/start_of_day/index.js\"),\n  startOfHour: __webpack_require__(/*! ./start_of_hour/index.js */ \"./node_modules/date-fns/start_of_hour/index.js\"),\n  startOfISOWeek: __webpack_require__(/*! ./start_of_iso_week/index.js */ \"./node_modules/date-fns/start_of_iso_week/index.js\"),\n  startOfISOYear: __webpack_require__(/*! ./start_of_iso_year/index.js */ \"./node_modules/date-fns/start_of_iso_year/index.js\"),\n  startOfMinute: __webpack_require__(/*! ./start_of_minute/index.js */ \"./node_modules/date-fns/start_of_minute/index.js\"),\n  startOfMonth: __webpack_require__(/*! ./start_of_month/index.js */ \"./node_modules/date-fns/start_of_month/index.js\"),\n  startOfQuarter: __webpack_require__(/*! ./start_of_quarter/index.js */ \"./node_modules/date-fns/start_of_quarter/index.js\"),\n  startOfSecond: __webpack_require__(/*! ./start_of_second/index.js */ \"./node_modules/date-fns/start_of_second/index.js\"),\n  startOfToday: __webpack_require__(/*! ./start_of_today/index.js */ \"./node_modules/date-fns/start_of_today/index.js\"),\n  startOfTomorrow: __webpack_require__(/*! ./start_of_tomorrow/index.js */ \"./node_modules/date-fns/start_of_tomorrow/index.js\"),\n  startOfWeek: __webpack_require__(/*! ./start_of_week/index.js */ \"./node_modules/date-fns/start_of_week/index.js\"),\n  startOfYear: __webpack_require__(/*! ./start_of_year/index.js */ \"./node_modules/date-fns/start_of_year/index.js\"),\n  startOfYesterday: __webpack_require__(/*! ./start_of_yesterday/index.js */ \"./node_modules/date-fns/start_of_yesterday/index.js\"),\n  subDays: __webpack_require__(/*! ./sub_days/index.js */ \"./node_modules/date-fns/sub_days/index.js\"),\n  subHours: __webpack_require__(/*! ./sub_hours/index.js */ \"./node_modules/date-fns/sub_hours/index.js\"),\n  subISOYears: __webpack_require__(/*! ./sub_iso_years/index.js */ \"./node_modules/date-fns/sub_iso_years/index.js\"),\n  subMilliseconds: __webpack_require__(/*! ./sub_milliseconds/index.js */ \"./node_modules/date-fns/sub_milliseconds/index.js\"),\n  subMinutes: __webpack_require__(/*! ./sub_minutes/index.js */ \"./node_modules/date-fns/sub_minutes/index.js\"),\n  subMonths: __webpack_require__(/*! ./sub_months/index.js */ \"./node_modules/date-fns/sub_months/index.js\"),\n  subQuarters: __webpack_require__(/*! ./sub_quarters/index.js */ \"./node_modules/date-fns/sub_quarters/index.js\"),\n  subSeconds: __webpack_require__(/*! ./sub_seconds/index.js */ \"./node_modules/date-fns/sub_seconds/index.js\"),\n  subWeeks: __webpack_require__(/*! ./sub_weeks/index.js */ \"./node_modules/date-fns/sub_weeks/index.js\"),\n  subYears: __webpack_require__(/*! ./sub_years/index.js */ \"./node_modules/date-fns/sub_years/index.js\")\n}\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/is_after/index.js":
/*!*************************************************!*\
  !*** ./node_modules/date-fns/is_after/index.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var parse = __webpack_require__(/*! ../parse/index.js */ \"./node_modules/date-fns/parse/index.js\")\n\n/**\n * @category Common Helpers\n * @summary Is the first date after the second one?\n *\n * @description\n * Is the first date after the second one?\n *\n * @param {Date|String|Number} date - the date that should be after the other one to return true\n * @param {Date|String|Number} dateToCompare - the date to compare with\n * @returns {Boolean} the first date is after the second date\n *\n * @example\n * // Is 10 July 1989 after 11 February 1987?\n * var result = isAfter(new Date(1989, 6, 10), new Date(1987, 1, 11))\n * //=> true\n */\nfunction isAfter (dirtyDate, dirtyDateToCompare) {\n  var date = parse(dirtyDate)\n  var dateToCompare = parse(dirtyDateToCompare)\n  return date.getTime() > dateToCompare.getTime()\n}\n\nmodule.exports = isAfter\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/is_after/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/is_before/index.js":
/*!**************************************************!*\
  !*** ./node_modules/date-fns/is_before/index.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var parse = __webpack_require__(/*! ../parse/index.js */ \"./node_modules/date-fns/parse/index.js\")\n\n/**\n * @category Common Helpers\n * @summary Is the first date before the second one?\n *\n * @description\n * Is the first date before the second one?\n *\n * @param {Date|String|Number} date - the date that should be before the other one to return true\n * @param {Date|String|Number} dateToCompare - the date to compare with\n * @returns {Boolean} the first date is before the second date\n *\n * @example\n * // Is 10 July 1989 before 11 February 1987?\n * var result = isBefore(new Date(1989, 6, 10), new Date(1987, 1, 11))\n * //=> false\n */\nfunction isBefore (dirtyDate, dirtyDateToCompare) {\n  var date = parse(dirtyDate)\n  var dateToCompare = parse(dirtyDateToCompare)\n  return date.getTime() < dateToCompare.getTime()\n}\n\nmodule.exports = isBefore\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/is_before/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/is_date/index.js":
/*!************************************************!*\
  !*** ./node_modules/date-fns/is_date/index.js ***!
  \************************************************/
/***/ ((module) => {

eval("/**\n * @category Common Helpers\n * @summary Is the given argument an instance of Date?\n *\n * @description\n * Is the given argument an instance of Date?\n *\n * @param {*} argument - the argument to check\n * @returns {Boolean} the given argument is an instance of Date\n *\n * @example\n * // Is 'mayonnaise' a Date?\n * var result = isDate('mayonnaise')\n * //=> false\n */\nfunction isDate (argument) {\n  return argument instanceof Date\n}\n\nmodule.exports = isDate\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/is_date/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/is_equal/index.js":
/*!*************************************************!*\
  !*** ./node_modules/date-fns/is_equal/index.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var parse = __webpack_require__(/*! ../parse/index.js */ \"./node_modules/date-fns/parse/index.js\")\n\n/**\n * @category Common Helpers\n * @summary Are the given dates equal?\n *\n * @description\n * Are the given dates equal?\n *\n * @param {Date|String|Number} dateLeft - the first date to compare\n * @param {Date|String|Number} dateRight - the second date to compare\n * @returns {Boolean} the dates are equal\n *\n * @example\n * // Are 2 July 2014 06:30:45.000 and 2 July 2014 06:30:45.500 equal?\n * var result = isEqual(\n *   new Date(2014, 6, 2, 6, 30, 45, 0)\n *   new Date(2014, 6, 2, 6, 30, 45, 500)\n * )\n * //=> false\n */\nfunction isEqual (dirtyLeftDate, dirtyRightDate) {\n  var dateLeft = parse(dirtyLeftDate)\n  var dateRight = parse(dirtyRightDate)\n  return dateLeft.getTime() === dateRight.getTime()\n}\n\nmodule.exports = isEqual\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/is_equal/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/is_first_day_of_month/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/is_first_day_of_month/index.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var parse = __webpack_require__(/*! ../parse/index.js */ \"./node_modules/date-fns/parse/index.js\")\n\n/**\n * @category Month Helpers\n * @summary Is the given date the first day of a month?\n *\n * @description\n * Is the given date the first day of a month?\n *\n * @param {Date|String|Number} date - the date to check\n * @returns {Boolean} the date is the first day of a month\n *\n * @example\n * // Is 1 September 2014 the first day of a month?\n * var result = isFirstDayOfMonth(new Date(2014, 8, 1))\n * //=> true\n */\nfunction isFirstDayOfMonth (dirtyDate) {\n  return parse(dirtyDate).getDate() === 1\n}\n\nmodule.exports = isFirstDayOfMonth\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/is_first_day_of_month/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/is_friday/index.js":
/*!**************************************************!*\
  !*** ./node_modules/date-fns/is_friday/index.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var parse = __webpack_require__(/*! ../parse/index.js */ \"./node_modules/date-fns/parse/index.js\")\n\n/**\n * @category Weekday Helpers\n * @summary Is the given date Friday?\n *\n * @description\n * Is the given date Friday?\n *\n * @param {Date|String|Number} date - the date to check\n * @returns {Boolean} the date is Friday\n *\n * @example\n * // Is 26 September 2014 Friday?\n * var result = isFriday(new Date(2014, 8, 26))\n * //=> true\n */\nfunction isFriday (dirtyDate) {\n  return parse(dirtyDate).getDay() === 5\n}\n\nmodule.exports = isFriday\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/is_friday/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/is_future/index.js":
/*!**************************************************!*\
  !*** ./node_modules/date-fns/is_future/index.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var parse = __webpack_require__(/*! ../parse/index.js */ \"./node_modules/date-fns/parse/index.js\")\n\n/**\n * @category Common Helpers\n * @summary Is the given date in the future?\n *\n * @description\n * Is the given date in the future?\n *\n * @param {Date|String|Number} date - the date to check\n * @returns {Boolean} the date is in the future\n *\n * @example\n * // If today is 6 October 2014, is 31 December 2014 in the future?\n * var result = isFuture(new Date(2014, 11, 31))\n * //=> true\n */\nfunction isFuture (dirtyDate) {\n  return parse(dirtyDate).getTime() > new Date().getTime()\n}\n\nmodule.exports = isFuture\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/is_future/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/is_last_day_of_month/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/is_last_day_of_month/index.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var parse = __webpack_require__(/*! ../parse/index.js */ \"./node_modules/date-fns/parse/index.js\")\nvar endOfDay = __webpack_require__(/*! ../end_of_day/index.js */ \"./node_modules/date-fns/end_of_day/index.js\")\nvar endOfMonth = __webpack_require__(/*! ../end_of_month/index.js */ \"./node_modules/date-fns/end_of_month/index.js\")\n\n/**\n * @category Month Helpers\n * @summary Is the given date the last day of a month?\n *\n * @description\n * Is the given date the last day of a month?\n *\n * @param {Date|String|Number} date - the date to check\n * @returns {Boolean} the date is the last day of a month\n *\n * @example\n * // Is 28 February 2014 the last day of a month?\n * var result = isLastDayOfMonth(new Date(2014, 1, 28))\n * //=> true\n */\nfunction isLastDayOfMonth (dirtyDate) {\n  var date = parse(dirtyDate)\n  return endOfDay(date).getTime() === endOfMonth(date).getTime()\n}\n\nmodule.exports = isLastDayOfMonth\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/is_last_day_of_month/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/is_leap_year/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/is_leap_year/index.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var parse = __webpack_require__(/*! ../parse/index.js */ \"./node_modules/date-fns/parse/index.js\")\n\n/**\n * @category Year Helpers\n * @summary Is the given date in the leap year?\n *\n * @description\n * Is the given date in the leap year?\n *\n * @param {Date|String|Number} date - the date to check\n * @returns {Boolean} the date is in the leap year\n *\n * @example\n * // Is 1 September 2012 in the leap year?\n * var result = isLeapYear(new Date(2012, 8, 1))\n * //=> true\n */\nfunction isLeapYear (dirtyDate) {\n  var date = parse(dirtyDate)\n  var year = date.getFullYear()\n  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0\n}\n\nmodule.exports = isLeapYear\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/is_leap_year/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/is_monday/index.js":
/*!**************************************************!*\
  !*** ./node_modules/date-fns/is_monday/index.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var parse = __webpack_require__(/*! ../parse/index.js */ \"./node_modules/date-fns/parse/index.js\")\n\n/**\n * @category Weekday Helpers\n * @summary Is the given date Monday?\n *\n * @description\n * Is the given date Monday?\n *\n * @param {Date|String|Number} date - the date to check\n * @returns {Boolean} the date is Monday\n *\n * @example\n * // Is 22 September 2014 Monday?\n * var result = isMonday(new Date(2014, 8, 22))\n * //=> true\n */\nfunction isMonday (dirtyDate) {\n  return parse(dirtyDate).getDay() === 1\n}\n\nmodule.exports = isMonday\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/is_monday/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/is_past/index.js":
/*!************************************************!*\
  !*** ./node_modules/date-fns/is_past/index.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var parse = __webpack_require__(/*! ../parse/index.js */ \"./node_modules/date-fns/parse/index.js\")\n\n/**\n * @category Common Helpers\n * @summary Is the given date in the past?\n *\n * @description\n * Is the given date in the past?\n *\n * @param {Date|String|Number} date - the date to check\n * @returns {Boolean} the date is in the past\n *\n * @example\n * // If today is 6 October 2014, is 2 July 2014 in the past?\n * var result = isPast(new Date(2014, 6, 2))\n * //=> true\n */\nfunction isPast (dirtyDate) {\n  return parse(dirtyDate).getTime() < new Date().getTime()\n}\n\nmodule.exports = isPast\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/is_past/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/is_same_day/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/is_same_day/index.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var startOfDay = __webpack_require__(/*! ../start_of_day/index.js */ \"./node_modules/date-fns/start_of_day/index.js\")\n\n/**\n * @category Day Helpers\n * @summary Are the given dates in the same day?\n *\n * @description\n * Are the given dates in the same day?\n *\n * @param {Date|String|Number} dateLeft - the first date to check\n * @param {Date|String|Number} dateRight - the second date to check\n * @returns {Boolean} the dates are in the same day\n *\n * @example\n * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?\n * var result = isSameDay(\n *   new Date(2014, 8, 4, 6, 0),\n *   new Date(2014, 8, 4, 18, 0)\n * )\n * //=> true\n */\nfunction isSameDay (dirtyDateLeft, dirtyDateRight) {\n  var dateLeftStartOfDay = startOfDay(dirtyDateLeft)\n  var dateRightStartOfDay = startOfDay(dirtyDateRight)\n\n  return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime()\n}\n\nmodule.exports = isSameDay\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/is_same_day/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/is_same_hour/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/is_same_hour/index.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var startOfHour = __webpack_require__(/*! ../start_of_hour/index.js */ \"./node_modules/date-fns/start_of_hour/index.js\")\n\n/**\n * @category Hour Helpers\n * @summary Are the given dates in the same hour?\n *\n * @description\n * Are the given dates in the same hour?\n *\n * @param {Date|String|Number} dateLeft - the first date to check\n * @param {Date|String|Number} dateRight - the second date to check\n * @returns {Boolean} the dates are in the same hour\n *\n * @example\n * // Are 4 September 2014 06:00:00 and 4 September 06:30:00 in the same hour?\n * var result = isSameHour(\n *   new Date(2014, 8, 4, 6, 0),\n *   new Date(2014, 8, 4, 6, 30)\n * )\n * //=> true\n */\nfunction isSameHour (dirtyDateLeft, dirtyDateRight) {\n  var dateLeftStartOfHour = startOfHour(dirtyDateLeft)\n  var dateRightStartOfHour = startOfHour(dirtyDateRight)\n\n  return dateLeftStartOfHour.getTime() === dateRightStartOfHour.getTime()\n}\n\nmodule.exports = isSameHour\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/is_same_hour/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/is_same_iso_week/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/is_same_iso_week/index.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var isSameWeek = __webpack_require__(/*! ../is_same_week/index.js */ \"./node_modules/date-fns/is_same_week/index.js\")\n\n/**\n * @category ISO Week Helpers\n * @summary Are the given dates in the same ISO week?\n *\n * @description\n * Are the given dates in the same ISO week?\n *\n * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date\n *\n * @param {Date|String|Number} dateLeft - the first date to check\n * @param {Date|String|Number} dateRight - the second date to check\n * @returns {Boolean} the dates are in the same ISO week\n *\n * @example\n * // Are 1 September 2014 and 7 September 2014 in the same ISO week?\n * var result = isSameISOWeek(\n *   new Date(2014, 8, 1),\n *   new Date(2014, 8, 7)\n * )\n * //=> true\n */\nfunction isSameISOWeek (dirtyDateLeft, dirtyDateRight) {\n  return isSameWeek(dirtyDateLeft, dirtyDateRight, {weekStartsOn: 1})\n}\n\nmodule.exports = isSameISOWeek\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/is_same_iso_week/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/is_same_iso_year/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/is_same_iso_year/index.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var startOfISOYear = __webpack_require__(/*! ../start_of_iso_year/index.js */ \"./node_modules/date-fns/start_of_iso_year/index.js\")\n\n/**\n * @category ISO Week-Numbering Year Helpers\n * @summary Are the given dates in the same ISO week-numbering year?\n *\n * @description\n * Are the given dates in the same ISO week-numbering year?\n *\n * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date\n *\n * @param {Date|String|Number} dateLeft - the first date to check\n * @param {Date|String|Number} dateRight - the second date to check\n * @returns {Boolean} the dates are in the same ISO week-numbering year\n *\n * @example\n * // Are 29 December 2003 and 2 January 2005 in the same ISO week-numbering year?\n * var result = isSameISOYear(\n *   new Date(2003, 11, 29),\n *   new Date(2005, 0, 2)\n * )\n * //=> true\n */\nfunction isSameISOYear (dirtyDateLeft, dirtyDateRight) {\n  var dateLeftStartOfYear = startOfISOYear(dirtyDateLeft)\n  var dateRightStartOfYear = startOfISOYear(dirtyDateRight)\n\n  return dateLeftStartOfYear.getTime() === dateRightStartOfYear.getTime()\n}\n\nmodule.exports = isSameISOYear\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/is_same_iso_year/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/is_same_minute/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/is_same_minute/index.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var startOfMinute = __webpack_require__(/*! ../start_of_minute/index.js */ \"./node_modules/date-fns/start_of_minute/index.js\")\n\n/**\n * @category Minute Helpers\n * @summary Are the given dates in the same minute?\n *\n * @description\n * Are the given dates in the same minute?\n *\n * @param {Date|String|Number} dateLeft - the first date to check\n * @param {Date|String|Number} dateRight - the second date to check\n * @returns {Boolean} the dates are in the same minute\n *\n * @example\n * // Are 4 September 2014 06:30:00 and 4 September 2014 06:30:15\n * // in the same minute?\n * var result = isSameMinute(\n *   new Date(2014, 8, 4, 6, 30),\n *   new Date(2014, 8, 4, 6, 30, 15)\n * )\n * //=> true\n */\nfunction isSameMinute (dirtyDateLeft, dirtyDateRight) {\n  var dateLeftStartOfMinute = startOfMinute(dirtyDateLeft)\n  var dateRightStartOfMinute = startOfMinute(dirtyDateRight)\n\n  return dateLeftStartOfMinute.getTime() === dateRightStartOfMinute.getTime()\n}\n\nmodule.exports = isSameMinute\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/is_same_minute/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/is_same_month/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/is_same_month/index.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var parse = __webpack_require__(/*! ../parse/index.js */ \"./node_modules/date-fns/parse/index.js\")\n\n/**\n * @category Month Helpers\n * @summary Are the given dates in the same month?\n *\n * @description\n * Are the given dates in the same month?\n *\n * @param {Date|String|Number} dateLeft - the first date to check\n * @param {Date|String|Number} dateRight - the second date to check\n * @returns {Boolean} the dates are in the same month\n *\n * @example\n * // Are 2 September 2014 and 25 September 2014 in the same month?\n * var result = isSameMonth(\n *   new Date(2014, 8, 2),\n *   new Date(2014, 8, 25)\n * )\n * //=> true\n */\nfunction isSameMonth (dirtyDateLeft, dirtyDateRight) {\n  var dateLeft = parse(dirtyDateLeft)\n  var dateRight = parse(dirtyDateRight)\n  return dateLeft.getFullYear() === dateRight.getFullYear() &&\n    dateLeft.getMonth() === dateRight.getMonth()\n}\n\nmodule.exports = isSameMonth\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/is_same_month/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/is_same_quarter/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/is_same_quarter/index.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var startOfQuarter = __webpack_require__(/*! ../start_of_quarter/index.js */ \"./node_modules/date-fns/start_of_quarter/index.js\")\n\n/**\n * @category Quarter Helpers\n * @summary Are the given dates in the same year quarter?\n *\n * @description\n * Are the given dates in the same year quarter?\n *\n * @param {Date|String|Number} dateLeft - the first date to check\n * @param {Date|String|Number} dateRight - the second date to check\n * @returns {Boolean} the dates are in the same quarter\n *\n * @example\n * // Are 1 January 2014 and 8 March 2014 in the same quarter?\n * var result = isSameQuarter(\n *   new Date(2014, 0, 1),\n *   new Date(2014, 2, 8)\n * )\n * //=> true\n */\nfunction isSameQuarter (dirtyDateLeft, dirtyDateRight) {\n  var dateLeftStartOfQuarter = startOfQuarter(dirtyDateLeft)\n  var dateRightStartOfQuarter = startOfQuarter(dirtyDateRight)\n\n  return dateLeftStartOfQuarter.getTime() === dateRightStartOfQuarter.getTime()\n}\n\nmodule.exports = isSameQuarter\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/is_same_quarter/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/is_same_second/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/is_same_second/index.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var startOfSecond = __webpack_require__(/*! ../start_of_second/index.js */ \"./node_modules/date-fns/start_of_second/index.js\")\n\n/**\n * @category Second Helpers\n * @summary Are the given dates in the same second?\n *\n * @description\n * Are the given dates in the same second?\n *\n * @param {Date|String|Number} dateLeft - the first date to check\n * @param {Date|String|Number} dateRight - the second date to check\n * @returns {Boolean} the dates are in the same second\n *\n * @example\n * // Are 4 September 2014 06:30:15.000 and 4 September 2014 06:30.15.500\n * // in the same second?\n * var result = isSameSecond(\n *   new Date(2014, 8, 4, 6, 30, 15),\n *   new Date(2014, 8, 4, 6, 30, 15, 500)\n * )\n * //=> true\n */\nfunction isSameSecond (dirtyDateLeft, dirtyDateRight) {\n  var dateLeftStartOfSecond = startOfSecond(dirtyDateLeft)\n  var dateRightStartOfSecond = startOfSecond(dirtyDateRight)\n\n  return dateLeftStartOfSecond.getTime() === dateRightStartOfSecond.getTime()\n}\n\nmodule.exports = isSameSecond\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/is_same_second/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/is_same_week/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/is_same_week/index.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var startOfWeek = __webpack_require__(/*! ../start_of_week/index.js */ \"./node_modules/date-fns/start_of_week/index.js\")\n\n/**\n * @category Week Helpers\n * @summary Are the given dates in the same week?\n *\n * @description\n * Are the given dates in the same week?\n *\n * @param {Date|String|Number} dateLeft - the first date to check\n * @param {Date|String|Number} dateRight - the second date to check\n * @param {Object} [options] - the object with options\n * @param {Number} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)\n * @returns {Boolean} the dates are in the same week\n *\n * @example\n * // Are 31 August 2014 and 4 September 2014 in the same week?\n * var result = isSameWeek(\n *   new Date(2014, 7, 31),\n *   new Date(2014, 8, 4)\n * )\n * //=> true\n *\n * @example\n * // If week starts with Monday,\n * // are 31 August 2014 and 4 September 2014 in the same week?\n * var result = isSameWeek(\n *   new Date(2014, 7, 31),\n *   new Date(2014, 8, 4),\n *   {weekStartsOn: 1}\n * )\n * //=> false\n */\nfunction isSameWeek (dirtyDateLeft, dirtyDateRight, dirtyOptions) {\n  var dateLeftStartOfWeek = startOfWeek(dirtyDateLeft, dirtyOptions)\n  var dateRightStartOfWeek = startOfWeek(dirtyDateRight, dirtyOptions)\n\n  return dateLeftStartOfWeek.getTime() === dateRightStartOfWeek.getTime()\n}\n\nmodule.exports = isSameWeek\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/is_same_week/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/is_same_year/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/is_same_year/index.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var parse = __webpack_require__(/*! ../parse/index.js */ \"./node_modules/date-fns/parse/index.js\")\n\n/**\n * @category Year Helpers\n * @summary Are the given dates in the same year?\n *\n * @description\n * Are the given dates in the same year?\n *\n * @param {Date|String|Number} dateLeft - the first date to check\n * @param {Date|String|Number} dateRight - the second date to check\n * @returns {Boolean} the dates are in the same year\n *\n * @example\n * // Are 2 September 2014 and 25 September 2014 in the same year?\n * var result = isSameYear(\n *   new Date(2014, 8, 2),\n *   new Date(2014, 8, 25)\n * )\n * //=> true\n */\nfunction isSameYear (dirtyDateLeft, dirtyDateRight) {\n  var dateLeft = parse(dirtyDateLeft)\n  var dateRight = parse(dirtyDateRight)\n  return dateLeft.getFullYear() === dateRight.getFullYear()\n}\n\nmodule.exports = isSameYear\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/is_same_year/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/is_saturday/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/is_saturday/index.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var parse = __webpack_require__(/*! ../parse/index.js */ \"./node_modules/date-fns/parse/index.js\")\n\n/**\n * @category Weekday Helpers\n * @summary Is the given date Saturday?\n *\n * @description\n * Is the given date Saturday?\n *\n * @param {Date|String|Number} date - the date to check\n * @returns {Boolean} the date is Saturday\n *\n * @example\n * // Is 27 September 2014 Saturday?\n * var result = isSaturday(new Date(2014, 8, 27))\n * //=> true\n */\nfunction isSaturday (dirtyDate) {\n  return parse(dirtyDate).getDay() === 6\n}\n\nmodule.exports = isSaturday\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/is_saturday/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/is_sunday/index.js":
/*!**************************************************!*\
  !*** ./node_modules/date-fns/is_sunday/index.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var parse = __webpack_require__(/*! ../parse/index.js */ \"./node_modules/date-fns/parse/index.js\")\n\n/**\n * @category Weekday Helpers\n * @summary Is the given date Sunday?\n *\n * @description\n * Is the given date Sunday?\n *\n * @param {Date|String|Number} date - the date to check\n * @returns {Boolean} the date is Sunday\n *\n * @example\n * // Is 21 September 2014 Sunday?\n * var result = isSunday(new Date(2014, 8, 21))\n * //=> true\n */\nfunction isSunday (dirtyDate) {\n  return parse(dirtyDate).getDay() === 0\n}\n\nmodule.exports = isSunday\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/is_sunday/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/is_this_hour/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/is_this_hour/index.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var isSameHour = __webpack_require__(/*! ../is_same_hour/index.js */ \"./node_modules/date-fns/is_same_hour/index.js\")\n\n/**\n * @category Hour Helpers\n * @summary Is the given date in the same hour as the current date?\n *\n * @description\n * Is the given date in the same hour as the current date?\n *\n * @param {Date|String|Number} date - the date to check\n * @returns {Boolean} the date is in this hour\n *\n * @example\n * // If now is 25 September 2014 18:30:15.500,\n * // is 25 September 2014 18:00:00 in this hour?\n * var result = isThisHour(new Date(2014, 8, 25, 18))\n * //=> true\n */\nfunction isThisHour (dirtyDate) {\n  return isSameHour(new Date(), dirtyDate)\n}\n\nmodule.exports = isThisHour\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/is_this_hour/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/is_this_iso_week/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/is_this_iso_week/index.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var isSameISOWeek = __webpack_require__(/*! ../is_same_iso_week/index.js */ \"./node_modules/date-fns/is_same_iso_week/index.js\")\n\n/**\n * @category ISO Week Helpers\n * @summary Is the given date in the same ISO week as the current date?\n *\n * @description\n * Is the given date in the same ISO week as the current date?\n *\n * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date\n *\n * @param {Date|String|Number} date - the date to check\n * @returns {Boolean} the date is in this ISO week\n *\n * @example\n * // If today is 25 September 2014, is 22 September 2014 in this ISO week?\n * var result = isThisISOWeek(new Date(2014, 8, 22))\n * //=> true\n */\nfunction isThisISOWeek (dirtyDate) {\n  return isSameISOWeek(new Date(), dirtyDate)\n}\n\nmodule.exports = isThisISOWeek\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/is_this_iso_week/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/is_this_iso_year/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/is_this_iso_year/index.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var isSameISOYear = __webpack_require__(/*! ../is_same_iso_year/index.js */ \"./node_modules/date-fns/is_same_iso_year/index.js\")\n\n/**\n * @category ISO Week-Numbering Year Helpers\n * @summary Is the given date in the same ISO week-numbering year as the current date?\n *\n * @description\n * Is the given date in the same ISO week-numbering year as the current date?\n *\n * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date\n *\n * @param {Date|String|Number} date - the date to check\n * @returns {Boolean} the date is in this ISO week-numbering year\n *\n * @example\n * // If today is 25 September 2014,\n * // is 30 December 2013 in this ISO week-numbering year?\n * var result = isThisISOYear(new Date(2013, 11, 30))\n * //=> true\n */\nfunction isThisISOYear (dirtyDate) {\n  return isSameISOYear(new Date(), dirtyDate)\n}\n\nmodule.exports = isThisISOYear\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/is_this_iso_year/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/is_this_minute/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/is_this_minute/index.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var isSameMinute = __webpack_require__(/*! ../is_same_minute/index.js */ \"./node_modules/date-fns/is_same_minute/index.js\")\n\n/**\n * @category Minute Helpers\n * @summary Is the given date in the same minute as the current date?\n *\n * @description\n * Is the given date in the same minute as the current date?\n *\n * @param {Date|String|Number} date - the date to check\n * @returns {Boolean} the date is in this minute\n *\n * @example\n * // If now is 25 September 2014 18:30:15.500,\n * // is 25 September 2014 18:30:00 in this minute?\n * var result = isThisMinute(new Date(2014, 8, 25, 18, 30))\n * //=> true\n */\nfunction isThisMinute (dirtyDate) {\n  return isSameMinute(new Date(), dirtyDate)\n}\n\nmodule.exports = isThisMinute\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/is_this_minute/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/is_this_month/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/is_this_month/index.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var isSameMonth = __webpack_require__(/*! ../is_same_month/index.js */ \"./node_modules/date-fns/is_same_month/index.js\")\n\n/**\n * @category Month Helpers\n * @summary Is the given date in the same month as the current date?\n *\n * @description\n * Is the given date in the same month as the current date?\n *\n * @param {Date|String|Number} date - the date to check\n * @returns {Boolean} the date is in this month\n *\n * @example\n * // If today is 25 September 2014, is 15 September 2014 in this month?\n * var result = isThisMonth(new Date(2014, 8, 15))\n * //=> true\n */\nfunction isThisMonth (dirtyDate) {\n  return isSameMonth(new Date(), dirtyDate)\n}\n\nmodule.exports = isThisMonth\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/is_this_month/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/is_this_quarter/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/is_this_quarter/index.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var isSameQuarter = __webpack_require__(/*! ../is_same_quarter/index.js */ \"./node_modules/date-fns/is_same_quarter/index.js\")\n\n/**\n * @category Quarter Helpers\n * @summary Is the given date in the same quarter as the current date?\n *\n * @description\n * Is the given date in the same quarter as the current date?\n *\n * @param {Date|String|Number} date - the date to check\n * @returns {Boolean} the date is in this quarter\n *\n * @example\n * // If today is 25 September 2014, is 2 July 2014 in this quarter?\n * var result = isThisQuarter(new Date(2014, 6, 2))\n * //=> true\n */\nfunction isThisQuarter (dirtyDate) {\n  return isSameQuarter(new Date(), dirtyDate)\n}\n\nmodule.exports = isThisQuarter\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/is_this_quarter/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/is_this_second/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/is_this_second/index.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var isSameSecond = __webpack_require__(/*! ../is_same_second/index.js */ \"./node_modules/date-fns/is_same_second/index.js\")\n\n/**\n * @category Second Helpers\n * @summary Is the given date in the same second as the current date?\n *\n * @description\n * Is the given date in the same second as the current date?\n *\n * @param {Date|String|Number} date - the date to check\n * @returns {Boolean} the date is in this second\n *\n * @example\n * // If now is 25 September 2014 18:30:15.500,\n * // is 25 September 2014 18:30:15.000 in this second?\n * var result = isThisSecond(new Date(2014, 8, 25, 18, 30, 15))\n * //=> true\n */\nfunction isThisSecond (dirtyDate) {\n  return isSameSecond(new Date(), dirtyDate)\n}\n\nmodule.exports = isThisSecond\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/is_this_second/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/is_this_week/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/is_this_week/index.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var isSameWeek = __webpack_require__(/*! ../is_same_week/index.js */ \"./node_modules/date-fns/is_same_week/index.js\")\n\n/**\n * @category Week Helpers\n * @summary Is the given date in the same week as the current date?\n *\n * @description\n * Is the given date in the same week as the current date?\n *\n * @param {Date|String|Number} date - the date to check\n * @param {Object} [options] - the object with options\n * @param {Number} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)\n * @returns {Boolean} the date is in this week\n *\n * @example\n * // If today is 25 September 2014, is 21 September 2014 in this week?\n * var result = isThisWeek(new Date(2014, 8, 21))\n * //=> true\n *\n * @example\n * // If today is 25 September 2014 and week starts with Monday\n * // is 21 September 2014 in this week?\n * var result = isThisWeek(new Date(2014, 8, 21), {weekStartsOn: 1})\n * //=> false\n */\nfunction isThisWeek (dirtyDate, dirtyOptions) {\n  return isSameWeek(new Date(), dirtyDate, dirtyOptions)\n}\n\nmodule.exports = isThisWeek\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/is_this_week/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/is_this_year/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/is_this_year/index.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var isSameYear = __webpack_require__(/*! ../is_same_year/index.js */ \"./node_modules/date-fns/is_same_year/index.js\")\n\n/**\n * @category Year Helpers\n * @summary Is the given date in the same year as the current date?\n *\n * @description\n * Is the given date in the same year as the current date?\n *\n * @param {Date|String|Number} date - the date to check\n * @returns {Boolean} the date is in this year\n *\n * @example\n * // If today is 25 September 2014, is 2 July 2014 in this year?\n * var result = isThisYear(new Date(2014, 6, 2))\n * //=> true\n */\nfunction isThisYear (dirtyDate) {\n  return isSameYear(new Date(), dirtyDate)\n}\n\nmodule.exports = isThisYear\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/is_this_year/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/is_thursday/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/is_thursday/index.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var parse = __webpack_require__(/*! ../parse/index.js */ \"./node_modules/date-fns/parse/index.js\")\n\n/**\n * @category Weekday Helpers\n * @summary Is the given date Thursday?\n *\n * @description\n * Is the given date Thursday?\n *\n * @param {Date|String|Number} date - the date to check\n * @returns {Boolean} the date is Thursday\n *\n * @example\n * // Is 25 September 2014 Thursday?\n * var result = isThursday(new Date(2014, 8, 25))\n * //=> true\n */\nfunction isThursday (dirtyDate) {\n  return parse(dirtyDate).getDay() === 4\n}\n\nmodule.exports = isThursday\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/is_thursday/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/is_today/index.js":
/*!*************************************************!*\
  !*** ./node_modules/date-fns/is_today/index.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var startOfDay = __webpack_require__(/*! ../start_of_day/index.js */ \"./node_modules/date-fns/start_of_day/index.js\")\n\n/**\n * @category Day Helpers\n * @summary Is the given date today?\n *\n * @description\n * Is the given date today?\n *\n * @param {Date|String|Number} date - the date to check\n * @returns {Boolean} the date is today\n *\n * @example\n * // If today is 6 October 2014, is 6 October 14:00:00 today?\n * var result = isToday(new Date(2014, 9, 6, 14, 0))\n * //=> true\n */\nfunction isToday (dirtyDate) {\n  return startOfDay(dirtyDate).getTime() === startOfDay(new Date()).getTime()\n}\n\nmodule.exports = isToday\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/is_today/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/is_tomorrow/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/is_tomorrow/index.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var startOfDay = __webpack_require__(/*! ../start_of_day/index.js */ \"./node_modules/date-fns/start_of_day/index.js\")\n\n/**\n * @category Day Helpers\n * @summary Is the given date tomorrow?\n *\n * @description\n * Is the given date tomorrow?\n *\n * @param {Date|String|Number} date - the date to check\n * @returns {Boolean} the date is tomorrow\n *\n * @example\n * // If today is 6 October 2014, is 7 October 14:00:00 tomorrow?\n * var result = isTomorrow(new Date(2014, 9, 7, 14, 0))\n * //=> true\n */\nfunction isTomorrow (dirtyDate) {\n  var tomorrow = new Date()\n  tomorrow.setDate(tomorrow.getDate() + 1)\n  return startOfDay(dirtyDate).getTime() === startOfDay(tomorrow).getTime()\n}\n\nmodule.exports = isTomorrow\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/is_tomorrow/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/is_tuesday/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/is_tuesday/index.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var parse = __webpack_require__(/*! ../parse/index.js */ \"./node_modules/date-fns/parse/index.js\")\n\n/**\n * @category Weekday Helpers\n * @summary Is the given date Tuesday?\n *\n * @description\n * Is the given date Tuesday?\n *\n * @param {Date|String|Number} date - the date to check\n * @returns {Boolean} the date is Tuesday\n *\n * @example\n * // Is 23 September 2014 Tuesday?\n * var result = isTuesday(new Date(2014, 8, 23))\n * //=> true\n */\nfunction isTuesday (dirtyDate) {\n  return parse(dirtyDate).getDay() === 2\n}\n\nmodule.exports = isTuesday\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/is_tuesday/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/is_valid/index.js":
/*!*************************************************!*\
  !*** ./node_modules/date-fns/is_valid/index.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var isDate = __webpack_require__(/*! ../is_date/index.js */ \"./node_modules/date-fns/is_date/index.js\")\n\n/**\n * @category Common Helpers\n * @summary Is the given date valid?\n *\n * @description\n * Returns false if argument is Invalid Date and true otherwise.\n * Invalid Date is a Date, whose time value is NaN.\n *\n * Time value of Date: http://es5.github.io/#x15.9.1.1\n *\n * @param {Date} date - the date to check\n * @returns {Boolean} the date is valid\n * @throws {TypeError} argument must be an instance of Date\n *\n * @example\n * // For the valid date:\n * var result = isValid(new Date(2014, 1, 31))\n * //=> true\n *\n * @example\n * // For the invalid date:\n * var result = isValid(new Date(''))\n * //=> false\n */\nfunction isValid (dirtyDate) {\n  if (isDate(dirtyDate)) {\n    return !isNaN(dirtyDate)\n  } else {\n    throw new TypeError(toString.call(dirtyDate) + ' is not an instance of Date')\n  }\n}\n\nmodule.exports = isValid\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/is_valid/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/is_wednesday/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/is_wednesday/index.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var parse = __webpack_require__(/*! ../parse/index.js */ \"./node_modules/date-fns/parse/index.js\")\n\n/**\n * @category Weekday Helpers\n * @summary Is the given date Wednesday?\n *\n * @description\n * Is the given date Wednesday?\n *\n * @param {Date|String|Number} date - the date to check\n * @returns {Boolean} the date is Wednesday\n *\n * @example\n * // Is 24 September 2014 Wednesday?\n * var result = isWednesday(new Date(2014, 8, 24))\n * //=> true\n */\nfunction isWednesday (dirtyDate) {\n  return parse(dirtyDate).getDay() === 3\n}\n\nmodule.exports = isWednesday\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/is_wednesday/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/is_weekend/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/is_weekend/index.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var parse = __webpack_require__(/*! ../parse/index.js */ \"./node_modules/date-fns/parse/index.js\")\n\n/**\n * @category Weekday Helpers\n * @summary Does the given date fall on a weekend?\n *\n * @description\n * Does the given date fall on a weekend?\n *\n * @param {Date|String|Number} date - the date to check\n * @returns {Boolean} the date falls on a weekend\n *\n * @example\n * // Does 5 October 2014 fall on a weekend?\n * var result = isWeekend(new Date(2014, 9, 5))\n * //=> true\n */\nfunction isWeekend (dirtyDate) {\n  var date = parse(dirtyDate)\n  var day = date.getDay()\n  return day === 0 || day === 6\n}\n\nmodule.exports = isWeekend\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/is_weekend/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/is_within_range/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/is_within_range/index.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var parse = __webpack_require__(/*! ../parse/index.js */ \"./node_modules/date-fns/parse/index.js\")\n\n/**\n * @category Range Helpers\n * @summary Is the given date within the range?\n *\n * @description\n * Is the given date within the range?\n *\n * @param {Date|String|Number} date - the date to check\n * @param {Date|String|Number} startDate - the start of range\n * @param {Date|String|Number} endDate - the end of range\n * @returns {Boolean} the date is within the range\n * @throws {Error} startDate cannot be after endDate\n *\n * @example\n * // For the date within the range:\n * isWithinRange(\n *   new Date(2014, 0, 3), new Date(2014, 0, 1), new Date(2014, 0, 7)\n * )\n * //=> true\n *\n * @example\n * // For the date outside of the range:\n * isWithinRange(\n *   new Date(2014, 0, 10), new Date(2014, 0, 1), new Date(2014, 0, 7)\n * )\n * //=> false\n */\nfunction isWithinRange (dirtyDate, dirtyStartDate, dirtyEndDate) {\n  var time = parse(dirtyDate).getTime()\n  var startTime = parse(dirtyStartDate).getTime()\n  var endTime = parse(dirtyEndDate).getTime()\n\n  if (startTime > endTime) {\n    throw new Error('The start of the range cannot be after the end of the range')\n  }\n\n  return time >= startTime && time <= endTime\n}\n\nmodule.exports = isWithinRange\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/is_within_range/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/is_yesterday/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/is_yesterday/index.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var startOfDay = __webpack_require__(/*! ../start_of_day/index.js */ \"./node_modules/date-fns/start_of_day/index.js\")\n\n/**\n * @category Day Helpers\n * @summary Is the given date yesterday?\n *\n * @description\n * Is the given date yesterday?\n *\n * @param {Date|String|Number} date - the date to check\n * @returns {Boolean} the date is yesterday\n *\n * @example\n * // If today is 6 October 2014, is 5 October 14:00:00 yesterday?\n * var result = isYesterday(new Date(2014, 9, 5, 14, 0))\n * //=> true\n */\nfunction isYesterday (dirtyDate) {\n  var yesterday = new Date()\n  yesterday.setDate(yesterday.getDate() - 1)\n  return startOfDay(dirtyDate).getTime() === startOfDay(yesterday).getTime()\n}\n\nmodule.exports = isYesterday\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/is_yesterday/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/last_day_of_iso_week/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/last_day_of_iso_week/index.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var lastDayOfWeek = __webpack_require__(/*! ../last_day_of_week/index.js */ \"./node_modules/date-fns/last_day_of_week/index.js\")\n\n/**\n * @category ISO Week Helpers\n * @summary Return the last day of an ISO week for the given date.\n *\n * @description\n * Return the last day of an ISO week for the given date.\n * The result will be in the local timezone.\n *\n * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date\n *\n * @param {Date|String|Number} date - the original date\n * @returns {Date} the last day of an ISO week\n *\n * @example\n * // The last day of an ISO week for 2 September 2014 11:55:00:\n * var result = lastDayOfISOWeek(new Date(2014, 8, 2, 11, 55, 0))\n * //=> Sun Sep 07 2014 00:00:00\n */\nfunction lastDayOfISOWeek (dirtyDate) {\n  return lastDayOfWeek(dirtyDate, {weekStartsOn: 1})\n}\n\nmodule.exports = lastDayOfISOWeek\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/last_day_of_iso_week/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/last_day_of_iso_year/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/last_day_of_iso_year/index.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var getISOYear = __webpack_require__(/*! ../get_iso_year/index.js */ \"./node_modules/date-fns/get_iso_year/index.js\")\nvar startOfISOWeek = __webpack_require__(/*! ../start_of_iso_week/index.js */ \"./node_modules/date-fns/start_of_iso_week/index.js\")\n\n/**\n * @category ISO Week-Numbering Year Helpers\n * @summary Return the last day of an ISO week-numbering year for the given date.\n *\n * @description\n * Return the last day of an ISO week-numbering year,\n * which always starts 3 days before the year's first Thursday.\n * The result will be in the local timezone.\n *\n * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date\n *\n * @param {Date|String|Number} date - the original date\n * @returns {Date} the end of an ISO week-numbering year\n *\n * @example\n * // The last day of an ISO week-numbering year for 2 July 2005:\n * var result = lastDayOfISOYear(new Date(2005, 6, 2))\n * //=> Sun Jan 01 2006 00:00:00\n */\nfunction lastDayOfISOYear (dirtyDate) {\n  var year = getISOYear(dirtyDate)\n  var fourthOfJanuary = new Date(0)\n  fourthOfJanuary.setFullYear(year + 1, 0, 4)\n  fourthOfJanuary.setHours(0, 0, 0, 0)\n  var date = startOfISOWeek(fourthOfJanuary)\n  date.setDate(date.getDate() - 1)\n  return date\n}\n\nmodule.exports = lastDayOfISOYear\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/last_day_of_iso_year/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/last_day_of_month/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/date-fns/last_day_of_month/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var parse = __webpack_require__(/*! ../parse/index.js */ \"./node_modules/date-fns/parse/index.js\")\n\n/**\n * @category Month Helpers\n * @summary Return the last day of a month for the given date.\n *\n * @description\n * Return the last day of a month for the given date.\n * The result will be in the local timezone.\n *\n * @param {Date|String|Number} date - the original date\n * @returns {Date} the last day of a month\n *\n * @example\n * // The last day of a month for 2 September 2014 11:55:00:\n * var result = lastDayOfMonth(new Date(2014, 8, 2, 11, 55, 0))\n * //=> Tue Sep 30 2014 00:00:00\n */\nfunction lastDayOfMonth (dirtyDate) {\n  var date = parse(dirtyDate)\n  var month = date.getMonth()\n  date.setFullYear(date.getFullYear(), month + 1, 0)\n  date.setHours(0, 0, 0, 0)\n  return date\n}\n\nmodule.exports = lastDayOfMonth\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/last_day_of_month/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/last_day_of_quarter/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/last_day_of_quarter/index.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var parse = __webpack_require__(/*! ../parse/index.js */ \"./node_modules/date-fns/parse/index.js\")\n\n/**\n * @category Quarter Helpers\n * @summary Return the last day of a year quarter for the given date.\n *\n * @description\n * Return the last day of a year quarter for the given date.\n * The result will be in the local timezone.\n *\n * @param {Date|String|Number} date - the original date\n * @returns {Date} the last day of a quarter\n *\n * @example\n * // The last day of a quarter for 2 September 2014 11:55:00:\n * var result = lastDayOfQuarter(new Date(2014, 8, 2, 11, 55, 0))\n * //=> Tue Sep 30 2014 00:00:00\n */\nfunction lastDayOfQuarter (dirtyDate) {\n  var date = parse(dirtyDate)\n  var currentMonth = date.getMonth()\n  var month = currentMonth - currentMonth % 3 + 3\n  date.setMonth(month, 0)\n  date.setHours(0, 0, 0, 0)\n  return date\n}\n\nmodule.exports = lastDayOfQuarter\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/last_day_of_quarter/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/last_day_of_week/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/last_day_of_week/index.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var parse = __webpack_require__(/*! ../parse/index.js */ \"./node_modules/date-fns/parse/index.js\")\n\n/**\n * @category Week Helpers\n * @summary Return the last day of a week for the given date.\n *\n * @description\n * Return the last day of a week for the given date.\n * The result will be in the local timezone.\n *\n * @param {Date|String|Number} date - the original date\n * @param {Object} [options] - the object with options\n * @param {Number} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)\n * @returns {Date} the last day of a week\n *\n * @example\n * // The last day of a week for 2 September 2014 11:55:00:\n * var result = lastDayOfWeek(new Date(2014, 8, 2, 11, 55, 0))\n * //=> Sat Sep 06 2014 00:00:00\n *\n * @example\n * // If the week starts on Monday, the last day of the week for 2 September 2014 11:55:00:\n * var result = lastDayOfWeek(new Date(2014, 8, 2, 11, 55, 0), {weekStartsOn: 1})\n * //=> Sun Sep 07 2014 00:00:00\n */\nfunction lastDayOfWeek (dirtyDate, dirtyOptions) {\n  var weekStartsOn = dirtyOptions ? (Number(dirtyOptions.weekStartsOn) || 0) : 0\n\n  var date = parse(dirtyDate)\n  var day = date.getDay()\n  var diff = (day < weekStartsOn ? -7 : 0) + 6 - (day - weekStartsOn)\n\n  date.setHours(0, 0, 0, 0)\n  date.setDate(date.getDate() + diff)\n  return date\n}\n\nmodule.exports = lastDayOfWeek\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/last_day_of_week/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/last_day_of_year/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/last_day_of_year/index.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var parse = __webpack_require__(/*! ../parse/index.js */ \"./node_modules/date-fns/parse/index.js\")\n\n/**\n * @category Year Helpers\n * @summary Return the last day of a year for the given date.\n *\n * @description\n * Return the last day of a year for the given date.\n * The result will be in the local timezone.\n *\n * @param {Date|String|Number} date - the original date\n * @returns {Date} the last day of a year\n *\n * @example\n * // The last day of a year for 2 September 2014 11:55:00:\n * var result = lastDayOfYear(new Date(2014, 8, 2, 11, 55, 00))\n * //=> Wed Dec 31 2014 00:00:00\n */\nfunction lastDayOfYear (dirtyDate) {\n  var date = parse(dirtyDate)\n  var year = date.getFullYear()\n  date.setFullYear(year + 1, 0, 0)\n  date.setHours(0, 0, 0, 0)\n  return date\n}\n\nmodule.exports = lastDayOfYear\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/last_day_of_year/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/locale/_lib/build_formatting_tokens_reg_exp/index.js":
/*!************************************************************************************!*\
  !*** ./node_modules/date-fns/locale/_lib/build_formatting_tokens_reg_exp/index.js ***!
  \************************************************************************************/
/***/ ((module) => {

eval("var commonFormatterKeys = [\n  'M', 'MM', 'Q', 'D', 'DD', 'DDD', 'DDDD', 'd',\n  'E', 'W', 'WW', 'YY', 'YYYY', 'GG', 'GGGG',\n  'H', 'HH', 'h', 'hh', 'm', 'mm',\n  's', 'ss', 'S', 'SS', 'SSS',\n  'Z', 'ZZ', 'X', 'x'\n]\n\nfunction buildFormattingTokensRegExp (formatters) {\n  var formatterKeys = []\n  for (var key in formatters) {\n    if (formatters.hasOwnProperty(key)) {\n      formatterKeys.push(key)\n    }\n  }\n\n  var formattingTokens = commonFormatterKeys\n    .concat(formatterKeys)\n    .sort()\n    .reverse()\n  var formattingTokensRegExp = new RegExp(\n    '(\\\\[[^\\\\[]*\\\\])|(\\\\\\\\)?' + '(' + formattingTokens.join('|') + '|.)', 'g'\n  )\n\n  return formattingTokensRegExp\n}\n\nmodule.exports = buildFormattingTokensRegExp\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/locale/_lib/build_formatting_tokens_reg_exp/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/locale/en/build_distance_in_words_locale/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/date-fns/locale/en/build_distance_in_words_locale/index.js ***!
  \*********************************************************************************/
/***/ ((module) => {

eval("function buildDistanceInWordsLocale () {\n  var distanceInWordsLocale = {\n    lessThanXSeconds: {\n      one: 'less than a second',\n      other: 'less than {{count}} seconds'\n    },\n\n    xSeconds: {\n      one: '1 second',\n      other: '{{count}} seconds'\n    },\n\n    halfAMinute: 'half a minute',\n\n    lessThanXMinutes: {\n      one: 'less than a minute',\n      other: 'less than {{count}} minutes'\n    },\n\n    xMinutes: {\n      one: '1 minute',\n      other: '{{count}} minutes'\n    },\n\n    aboutXHours: {\n      one: 'about 1 hour',\n      other: 'about {{count}} hours'\n    },\n\n    xHours: {\n      one: '1 hour',\n      other: '{{count}} hours'\n    },\n\n    xDays: {\n      one: '1 day',\n      other: '{{count}} days'\n    },\n\n    aboutXMonths: {\n      one: 'about 1 month',\n      other: 'about {{count}} months'\n    },\n\n    xMonths: {\n      one: '1 month',\n      other: '{{count}} months'\n    },\n\n    aboutXYears: {\n      one: 'about 1 year',\n      other: 'about {{count}} years'\n    },\n\n    xYears: {\n      one: '1 year',\n      other: '{{count}} years'\n    },\n\n    overXYears: {\n      one: 'over 1 year',\n      other: 'over {{count}} years'\n    },\n\n    almostXYears: {\n      one: 'almost 1 year',\n      other: 'almost {{count}} years'\n    }\n  }\n\n  function localize (token, count, options) {\n    options = options || {}\n\n    var result\n    if (typeof distanceInWordsLocale[token] === 'string') {\n      result = distanceInWordsLocale[token]\n    } else if (count === 1) {\n      result = distanceInWordsLocale[token].one\n    } else {\n      result = distanceInWordsLocale[token].other.replace('{{count}}', count)\n    }\n\n    if (options.addSuffix) {\n      if (options.comparison > 0) {\n        return 'in ' + result\n      } else {\n        return result + ' ago'\n      }\n    }\n\n    return result\n  }\n\n  return {\n    localize: localize\n  }\n}\n\nmodule.exports = buildDistanceInWordsLocale\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/locale/en/build_distance_in_words_locale/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/locale/en/build_format_locale/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/locale/en/build_format_locale/index.js ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var buildFormattingTokensRegExp = __webpack_require__(/*! ../../_lib/build_formatting_tokens_reg_exp/index.js */ \"./node_modules/date-fns/locale/_lib/build_formatting_tokens_reg_exp/index.js\")\n\nfunction buildFormatLocale () {\n  // Note: in English, the names of days of the week and months are capitalized.\n  // If you are making a new locale based on this one, check if the same is true for the language you're working on.\n  // Generally, formatted dates should look like they are in the middle of a sentence,\n  // e.g. in Spanish language the weekdays and months should be in the lowercase.\n  var months3char = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']\n  var monthsFull = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']\n  var weekdays2char = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']\n  var weekdays3char = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']\n  var weekdaysFull = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']\n  var meridiemUppercase = ['AM', 'PM']\n  var meridiemLowercase = ['am', 'pm']\n  var meridiemFull = ['a.m.', 'p.m.']\n\n  var formatters = {\n    // Month: Jan, Feb, ..., Dec\n    'MMM': function (date) {\n      return months3char[date.getMonth()]\n    },\n\n    // Month: January, February, ..., December\n    'MMMM': function (date) {\n      return monthsFull[date.getMonth()]\n    },\n\n    // Day of week: Su, Mo, ..., Sa\n    'dd': function (date) {\n      return weekdays2char[date.getDay()]\n    },\n\n    // Day of week: Sun, Mon, ..., Sat\n    'ddd': function (date) {\n      return weekdays3char[date.getDay()]\n    },\n\n    // Day of week: Sunday, Monday, ..., Saturday\n    'dddd': function (date) {\n      return weekdaysFull[date.getDay()]\n    },\n\n    // AM, PM\n    'A': function (date) {\n      return (date.getHours() / 12) >= 1 ? meridiemUppercase[1] : meridiemUppercase[0]\n    },\n\n    // am, pm\n    'a': function (date) {\n      return (date.getHours() / 12) >= 1 ? meridiemLowercase[1] : meridiemLowercase[0]\n    },\n\n    // a.m., p.m.\n    'aa': function (date) {\n      return (date.getHours() / 12) >= 1 ? meridiemFull[1] : meridiemFull[0]\n    }\n  }\n\n  // Generate ordinal version of formatters: M -> Mo, D -> Do, etc.\n  var ordinalFormatters = ['M', 'D', 'DDD', 'd', 'Q', 'W']\n  ordinalFormatters.forEach(function (formatterToken) {\n    formatters[formatterToken + 'o'] = function (date, formatters) {\n      return ordinal(formatters[formatterToken](date))\n    }\n  })\n\n  return {\n    formatters: formatters,\n    formattingTokensRegExp: buildFormattingTokensRegExp(formatters)\n  }\n}\n\nfunction ordinal (number) {\n  var rem100 = number % 100\n  if (rem100 > 20 || rem100 < 10) {\n    switch (rem100 % 10) {\n      case 1:\n        return number + 'st'\n      case 2:\n        return number + 'nd'\n      case 3:\n        return number + 'rd'\n    }\n  }\n  return number + 'th'\n}\n\nmodule.exports = buildFormatLocale\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/locale/en/build_format_locale/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/locale/en/index.js":
/*!**************************************************!*\
  !*** ./node_modules/date-fns/locale/en/index.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var buildDistanceInWordsLocale = __webpack_require__(/*! ./build_distance_in_words_locale/index.js */ \"./node_modules/date-fns/locale/en/build_distance_in_words_locale/index.js\")\nvar buildFormatLocale = __webpack_require__(/*! ./build_format_locale/index.js */ \"./node_modules/date-fns/locale/en/build_format_locale/index.js\")\n\n/**\n * @category Locales\n * @summary English locale.\n */\nmodule.exports = {\n  distanceInWords: buildDistanceInWordsLocale(),\n  format: buildFormatLocale()\n}\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/locale/en/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/max/index.js":
/*!********************************************!*\
  !*** ./node_modules/date-fns/max/index.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var parse = __webpack_require__(/*! ../parse/index.js */ \"./node_modules/date-fns/parse/index.js\")\n\n/**\n * @category Common Helpers\n * @summary Return the latest of the given dates.\n *\n * @description\n * Return the latest of the given dates.\n *\n * @param {...(Date|String|Number)} dates - the dates to compare\n * @returns {Date} the latest of the dates\n *\n * @example\n * // Which of these dates is the latest?\n * var result = max(\n *   new Date(1989, 6, 10),\n *   new Date(1987, 1, 11),\n *   new Date(1995, 6, 2),\n *   new Date(1990, 0, 1)\n * )\n * //=> Sun Jul 02 1995 00:00:00\n */\nfunction max () {\n  var dirtyDates = Array.prototype.slice.call(arguments)\n  var dates = dirtyDates.map(function (dirtyDate) {\n    return parse(dirtyDate)\n  })\n  var latestTimestamp = Math.max.apply(null, dates)\n  return new Date(latestTimestamp)\n}\n\nmodule.exports = max\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/max/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/min/index.js":
/*!********************************************!*\
  !*** ./node_modules/date-fns/min/index.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var parse = __webpack_require__(/*! ../parse/index.js */ \"./node_modules/date-fns/parse/index.js\")\n\n/**\n * @category Common Helpers\n * @summary Return the earliest of the given dates.\n *\n * @description\n * Return the earliest of the given dates.\n *\n * @param {...(Date|String|Number)} dates - the dates to compare\n * @returns {Date} the earliest of the dates\n *\n * @example\n * // Which of these dates is the earliest?\n * var result = min(\n *   new Date(1989, 6, 10),\n *   new Date(1987, 1, 11),\n *   new Date(1995, 6, 2),\n *   new Date(1990, 0, 1)\n * )\n * //=> Wed Feb 11 1987 00:00:00\n */\nfunction min () {\n  var dirtyDates = Array.prototype.slice.call(arguments)\n  var dates = dirtyDates.map(function (dirtyDate) {\n    return parse(dirtyDate)\n  })\n  var earliestTimestamp = Math.min.apply(null, dates)\n  return new Date(earliestTimestamp)\n}\n\nmodule.exports = min\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/min/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/parse/index.js":
/*!**********************************************!*\
  !*** ./node_modules/date-fns/parse/index.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var getTimezoneOffsetInMilliseconds = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ \"./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds/index.js\")\nvar isDate = __webpack_require__(/*! ../is_date/index.js */ \"./node_modules/date-fns/is_date/index.js\")\n\nvar MILLISECONDS_IN_HOUR = 3600000\nvar MILLISECONDS_IN_MINUTE = 60000\nvar DEFAULT_ADDITIONAL_DIGITS = 2\n\nvar parseTokenDateTimeDelimeter = /[T ]/\nvar parseTokenPlainTime = /:/\n\n// year tokens\nvar parseTokenYY = /^(\\d{2})$/\nvar parseTokensYYY = [\n  /^([+-]\\d{2})$/, // 0 additional digits\n  /^([+-]\\d{3})$/, // 1 additional digit\n  /^([+-]\\d{4})$/ // 2 additional digits\n]\n\nvar parseTokenYYYY = /^(\\d{4})/\nvar parseTokensYYYYY = [\n  /^([+-]\\d{4})/, // 0 additional digits\n  /^([+-]\\d{5})/, // 1 additional digit\n  /^([+-]\\d{6})/ // 2 additional digits\n]\n\n// date tokens\nvar parseTokenMM = /^-(\\d{2})$/\nvar parseTokenDDD = /^-?(\\d{3})$/\nvar parseTokenMMDD = /^-?(\\d{2})-?(\\d{2})$/\nvar parseTokenWww = /^-?W(\\d{2})$/\nvar parseTokenWwwD = /^-?W(\\d{2})-?(\\d{1})$/\n\n// time tokens\nvar parseTokenHH = /^(\\d{2}([.,]\\d*)?)$/\nvar parseTokenHHMM = /^(\\d{2}):?(\\d{2}([.,]\\d*)?)$/\nvar parseTokenHHMMSS = /^(\\d{2}):?(\\d{2}):?(\\d{2}([.,]\\d*)?)$/\n\n// timezone tokens\nvar parseTokenTimezone = /([Z+-].*)$/\nvar parseTokenTimezoneZ = /^(Z)$/\nvar parseTokenTimezoneHH = /^([+-])(\\d{2})$/\nvar parseTokenTimezoneHHMM = /^([+-])(\\d{2}):?(\\d{2})$/\n\n/**\n * @category Common Helpers\n * @summary Convert the given argument to an instance of Date.\n *\n * @description\n * Convert the given argument to an instance of Date.\n *\n * If the argument is an instance of Date, the function returns its clone.\n *\n * If the argument is a number, it is treated as a timestamp.\n *\n * If an argument is a string, the function tries to parse it.\n * Function accepts complete ISO 8601 formats as well as partial implementations.\n * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601\n *\n * If all above fails, the function passes the given argument to Date constructor.\n *\n * @param {Date|String|Number} argument - the value to convert\n * @param {Object} [options] - the object with options\n * @param {0 | 1 | 2} [options.additionalDigits=2] - the additional number of digits in the extended year format\n * @returns {Date} the parsed date in the local time zone\n *\n * @example\n * // Convert string '2014-02-11T11:30:30' to date:\n * var result = parse('2014-02-11T11:30:30')\n * //=> Tue Feb 11 2014 11:30:30\n *\n * @example\n * // Parse string '+02014101',\n * // if the additional number of digits in the extended year format is 1:\n * var result = parse('+02014101', {additionalDigits: 1})\n * //=> Fri Apr 11 2014 00:00:00\n */\nfunction parse (argument, dirtyOptions) {\n  if (isDate(argument)) {\n    // Prevent the date to lose the milliseconds when passed to new Date() in IE10\n    return new Date(argument.getTime())\n  } else if (typeof argument !== 'string') {\n    return new Date(argument)\n  }\n\n  var options = dirtyOptions || {}\n  var additionalDigits = options.additionalDigits\n  if (additionalDigits == null) {\n    additionalDigits = DEFAULT_ADDITIONAL_DIGITS\n  } else {\n    additionalDigits = Number(additionalDigits)\n  }\n\n  var dateStrings = splitDateString(argument)\n\n  var parseYearResult = parseYear(dateStrings.date, additionalDigits)\n  var year = parseYearResult.year\n  var restDateString = parseYearResult.restDateString\n\n  var date = parseDate(restDateString, year)\n\n  if (date) {\n    var timestamp = date.getTime()\n    var time = 0\n    var offset\n\n    if (dateStrings.time) {\n      time = parseTime(dateStrings.time)\n    }\n\n    if (dateStrings.timezone) {\n      offset = parseTimezone(dateStrings.timezone) * MILLISECONDS_IN_MINUTE\n    } else {\n      var fullTime = timestamp + time\n      var fullTimeDate = new Date(fullTime)\n\n      offset = getTimezoneOffsetInMilliseconds(fullTimeDate)\n\n      // Adjust time when it's coming from DST\n      var fullTimeDateNextDay = new Date(fullTime)\n      fullTimeDateNextDay.setDate(fullTimeDate.getDate() + 1)\n      var offsetDiff =\n        getTimezoneOffsetInMilliseconds(fullTimeDateNextDay) -\n        getTimezoneOffsetInMilliseconds(fullTimeDate)\n      if (offsetDiff > 0) {\n        offset += offsetDiff\n      }\n    }\n\n    return new Date(timestamp + time + offset)\n  } else {\n    return new Date(argument)\n  }\n}\n\nfunction splitDateString (dateString) {\n  var dateStrings = {}\n  var array = dateString.split(parseTokenDateTimeDelimeter)\n  var timeString\n\n  if (parseTokenPlainTime.test(array[0])) {\n    dateStrings.date = null\n    timeString = array[0]\n  } else {\n    dateStrings.date = array[0]\n    timeString = array[1]\n  }\n\n  if (timeString) {\n    var token = parseTokenTimezone.exec(timeString)\n    if (token) {\n      dateStrings.time = timeString.replace(token[1], '')\n      dateStrings.timezone = token[1]\n    } else {\n      dateStrings.time = timeString\n    }\n  }\n\n  return dateStrings\n}\n\nfunction parseYear (dateString, additionalDigits) {\n  var parseTokenYYY = parseTokensYYY[additionalDigits]\n  var parseTokenYYYYY = parseTokensYYYYY[additionalDigits]\n\n  var token\n\n  // YYYY or ±YYYYY\n  token = parseTokenYYYY.exec(dateString) || parseTokenYYYYY.exec(dateString)\n  if (token) {\n    var yearString = token[1]\n    return {\n      year: parseInt(yearString, 10),\n      restDateString: dateString.slice(yearString.length)\n    }\n  }\n\n  // YY or ±YYY\n  token = parseTokenYY.exec(dateString) || parseTokenYYY.exec(dateString)\n  if (token) {\n    var centuryString = token[1]\n    return {\n      year: parseInt(centuryString, 10) * 100,\n      restDateString: dateString.slice(centuryString.length)\n    }\n  }\n\n  // Invalid ISO-formatted year\n  return {\n    year: null\n  }\n}\n\nfunction parseDate (dateString, year) {\n  // Invalid ISO-formatted year\n  if (year === null) {\n    return null\n  }\n\n  var token\n  var date\n  var month\n  var week\n\n  // YYYY\n  if (dateString.length === 0) {\n    date = new Date(0)\n    date.setUTCFullYear(year)\n    return date\n  }\n\n  // YYYY-MM\n  token = parseTokenMM.exec(dateString)\n  if (token) {\n    date = new Date(0)\n    month = parseInt(token[1], 10) - 1\n    date.setUTCFullYear(year, month)\n    return date\n  }\n\n  // YYYY-DDD or YYYYDDD\n  token = parseTokenDDD.exec(dateString)\n  if (token) {\n    date = new Date(0)\n    var dayOfYear = parseInt(token[1], 10)\n    date.setUTCFullYear(year, 0, dayOfYear)\n    return date\n  }\n\n  // YYYY-MM-DD or YYYYMMDD\n  token = parseTokenMMDD.exec(dateString)\n  if (token) {\n    date = new Date(0)\n    month = parseInt(token[1], 10) - 1\n    var day = parseInt(token[2], 10)\n    date.setUTCFullYear(year, month, day)\n    return date\n  }\n\n  // YYYY-Www or YYYYWww\n  token = parseTokenWww.exec(dateString)\n  if (token) {\n    week = parseInt(token[1], 10) - 1\n    return dayOfISOYear(year, week)\n  }\n\n  // YYYY-Www-D or YYYYWwwD\n  token = parseTokenWwwD.exec(dateString)\n  if (token) {\n    week = parseInt(token[1], 10) - 1\n    var dayOfWeek = parseInt(token[2], 10) - 1\n    return dayOfISOYear(year, week, dayOfWeek)\n  }\n\n  // Invalid ISO-formatted date\n  return null\n}\n\nfunction parseTime (timeString) {\n  var token\n  var hours\n  var minutes\n\n  // hh\n  token = parseTokenHH.exec(timeString)\n  if (token) {\n    hours = parseFloat(token[1].replace(',', '.'))\n    return (hours % 24) * MILLISECONDS_IN_HOUR\n  }\n\n  // hh:mm or hhmm\n  token = parseTokenHHMM.exec(timeString)\n  if (token) {\n    hours = parseInt(token[1], 10)\n    minutes = parseFloat(token[2].replace(',', '.'))\n    return (hours % 24) * MILLISECONDS_IN_HOUR +\n      minutes * MILLISECONDS_IN_MINUTE\n  }\n\n  // hh:mm:ss or hhmmss\n  token = parseTokenHHMMSS.exec(timeString)\n  if (token) {\n    hours = parseInt(token[1], 10)\n    minutes = parseInt(token[2], 10)\n    var seconds = parseFloat(token[3].replace(',', '.'))\n    return (hours % 24) * MILLISECONDS_IN_HOUR +\n      minutes * MILLISECONDS_IN_MINUTE +\n      seconds * 1000\n  }\n\n  // Invalid ISO-formatted time\n  return null\n}\n\nfunction parseTimezone (timezoneString) {\n  var token\n  var absoluteOffset\n\n  // Z\n  token = parseTokenTimezoneZ.exec(timezoneString)\n  if (token) {\n    return 0\n  }\n\n  // ±hh\n  token = parseTokenTimezoneHH.exec(timezoneString)\n  if (token) {\n    absoluteOffset = parseInt(token[2], 10) * 60\n    return (token[1] === '+') ? -absoluteOffset : absoluteOffset\n  }\n\n  // ±hh:mm or ±hhmm\n  token = parseTokenTimezoneHHMM.exec(timezoneString)\n  if (token) {\n    absoluteOffset = parseInt(token[2], 10) * 60 + parseInt(token[3], 10)\n    return (token[1] === '+') ? -absoluteOffset : absoluteOffset\n  }\n\n  return 0\n}\n\nfunction dayOfISOYear (isoYear, week, day) {\n  week = week || 0\n  day = day || 0\n  var date = new Date(0)\n  date.setUTCFullYear(isoYear, 0, 4)\n  var fourthOfJanuaryDay = date.getUTCDay() || 7\n  var diff = week * 7 + day + 1 - fourthOfJanuaryDay\n  date.setUTCDate(date.getUTCDate() + diff)\n  return date\n}\n\nmodule.exports = parse\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/parse/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/set_date/index.js":
/*!*************************************************!*\
  !*** ./node_modules/date-fns/set_date/index.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var parse = __webpack_require__(/*! ../parse/index.js */ \"./node_modules/date-fns/parse/index.js\")\n\n/**\n * @category Day Helpers\n * @summary Set the day of the month to the given date.\n *\n * @description\n * Set the day of the month to the given date.\n *\n * @param {Date|String|Number} date - the date to be changed\n * @param {Number} dayOfMonth - the day of the month of the new date\n * @returns {Date} the new date with the day of the month setted\n *\n * @example\n * // Set the 30th day of the month to 1 September 2014:\n * var result = setDate(new Date(2014, 8, 1), 30)\n * //=> Tue Sep 30 2014 00:00:00\n */\nfunction setDate (dirtyDate, dirtyDayOfMonth) {\n  var date = parse(dirtyDate)\n  var dayOfMonth = Number(dirtyDayOfMonth)\n  date.setDate(dayOfMonth)\n  return date\n}\n\nmodule.exports = setDate\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/set_date/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/set_day/index.js":
/*!************************************************!*\
  !*** ./node_modules/date-fns/set_day/index.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var parse = __webpack_require__(/*! ../parse/index.js */ \"./node_modules/date-fns/parse/index.js\")\nvar addDays = __webpack_require__(/*! ../add_days/index.js */ \"./node_modules/date-fns/add_days/index.js\")\n\n/**\n * @category Weekday Helpers\n * @summary Set the day of the week to the given date.\n *\n * @description\n * Set the day of the week to the given date.\n *\n * @param {Date|String|Number} date - the date to be changed\n * @param {Number} day - the day of the week of the new date\n * @param {Object} [options] - the object with options\n * @param {Number} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)\n * @returns {Date} the new date with the day of the week setted\n *\n * @example\n * // Set Sunday to 1 September 2014:\n * var result = setDay(new Date(2014, 8, 1), 0)\n * //=> Sun Aug 31 2014 00:00:00\n *\n * @example\n * // If week starts with Monday, set Sunday to 1 September 2014:\n * var result = setDay(new Date(2014, 8, 1), 0, {weekStartsOn: 1})\n * //=> Sun Sep 07 2014 00:00:00\n */\nfunction setDay (dirtyDate, dirtyDay, dirtyOptions) {\n  var weekStartsOn = dirtyOptions ? (Number(dirtyOptions.weekStartsOn) || 0) : 0\n  var date = parse(dirtyDate)\n  var day = Number(dirtyDay)\n  var currentDay = date.getDay()\n\n  var remainder = day % 7\n  var dayIndex = (remainder + 7) % 7\n\n  var diff = (dayIndex < weekStartsOn ? 7 : 0) + day - currentDay\n  return addDays(date, diff)\n}\n\nmodule.exports = setDay\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/set_day/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/set_day_of_year/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/set_day_of_year/index.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var parse = __webpack_require__(/*! ../parse/index.js */ \"./node_modules/date-fns/parse/index.js\")\n\n/**\n * @category Day Helpers\n * @summary Set the day of the year to the given date.\n *\n * @description\n * Set the day of the year to the given date.\n *\n * @param {Date|String|Number} date - the date to be changed\n * @param {Number} dayOfYear - the day of the year of the new date\n * @returns {Date} the new date with the day of the year setted\n *\n * @example\n * // Set the 2nd day of the year to 2 July 2014:\n * var result = setDayOfYear(new Date(2014, 6, 2), 2)\n * //=> Thu Jan 02 2014 00:00:00\n */\nfunction setDayOfYear (dirtyDate, dirtyDayOfYear) {\n  var date = parse(dirtyDate)\n  var dayOfYear = Number(dirtyDayOfYear)\n  date.setMonth(0)\n  date.setDate(dayOfYear)\n  return date\n}\n\nmodule.exports = setDayOfYear\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/set_day_of_year/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/set_hours/index.js":
/*!**************************************************!*\
  !*** ./node_modules/date-fns/set_hours/index.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var parse = __webpack_require__(/*! ../parse/index.js */ \"./node_modules/date-fns/parse/index.js\")\n\n/**\n * @category Hour Helpers\n * @summary Set the hours to the given date.\n *\n * @description\n * Set the hours to the given date.\n *\n * @param {Date|String|Number} date - the date to be changed\n * @param {Number} hours - the hours of the new date\n * @returns {Date} the new date with the hours setted\n *\n * @example\n * // Set 4 hours to 1 September 2014 11:30:00:\n * var result = setHours(new Date(2014, 8, 1, 11, 30), 4)\n * //=> Mon Sep 01 2014 04:30:00\n */\nfunction setHours (dirtyDate, dirtyHours) {\n  var date = parse(dirtyDate)\n  var hours = Number(dirtyHours)\n  date.setHours(hours)\n  return date\n}\n\nmodule.exports = setHours\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/set_hours/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/set_iso_day/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/set_iso_day/index.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var parse = __webpack_require__(/*! ../parse/index.js */ \"./node_modules/date-fns/parse/index.js\")\nvar addDays = __webpack_require__(/*! ../add_days/index.js */ \"./node_modules/date-fns/add_days/index.js\")\nvar getISODay = __webpack_require__(/*! ../get_iso_day/index.js */ \"./node_modules/date-fns/get_iso_day/index.js\")\n\n/**\n * @category Weekday Helpers\n * @summary Set the day of the ISO week to the given date.\n *\n * @description\n * Set the day of the ISO week to the given date.\n * ISO week starts with Monday.\n * 7 is the index of Sunday, 1 is the index of Monday etc.\n *\n * @param {Date|String|Number} date - the date to be changed\n * @param {Number} day - the day of the ISO week of the new date\n * @returns {Date} the new date with the day of the ISO week setted\n *\n * @example\n * // Set Sunday to 1 September 2014:\n * var result = setISODay(new Date(2014, 8, 1), 7)\n * //=> Sun Sep 07 2014 00:00:00\n */\nfunction setISODay (dirtyDate, dirtyDay) {\n  var date = parse(dirtyDate)\n  var day = Number(dirtyDay)\n  var currentDay = getISODay(date)\n  var diff = day - currentDay\n  return addDays(date, diff)\n}\n\nmodule.exports = setISODay\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/set_iso_day/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/set_iso_week/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/set_iso_week/index.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var parse = __webpack_require__(/*! ../parse/index.js */ \"./node_modules/date-fns/parse/index.js\")\nvar getISOWeek = __webpack_require__(/*! ../get_iso_week/index.js */ \"./node_modules/date-fns/get_iso_week/index.js\")\n\n/**\n * @category ISO Week Helpers\n * @summary Set the ISO week to the given date.\n *\n * @description\n * Set the ISO week to the given date, saving the weekday number.\n *\n * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date\n *\n * @param {Date|String|Number} date - the date to be changed\n * @param {Number} isoWeek - the ISO week of the new date\n * @returns {Date} the new date with the ISO week setted\n *\n * @example\n * // Set the 53rd ISO week to 7 August 2004:\n * var result = setISOWeek(new Date(2004, 7, 7), 53)\n * //=> Sat Jan 01 2005 00:00:00\n */\nfunction setISOWeek (dirtyDate, dirtyISOWeek) {\n  var date = parse(dirtyDate)\n  var isoWeek = Number(dirtyISOWeek)\n  var diff = getISOWeek(date) - isoWeek\n  date.setDate(date.getDate() - diff * 7)\n  return date\n}\n\nmodule.exports = setISOWeek\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/set_iso_week/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/set_iso_year/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/set_iso_year/index.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var parse = __webpack_require__(/*! ../parse/index.js */ \"./node_modules/date-fns/parse/index.js\")\nvar startOfISOYear = __webpack_require__(/*! ../start_of_iso_year/index.js */ \"./node_modules/date-fns/start_of_iso_year/index.js\")\nvar differenceInCalendarDays = __webpack_require__(/*! ../difference_in_calendar_days/index.js */ \"./node_modules/date-fns/difference_in_calendar_days/index.js\")\n\n/**\n * @category ISO Week-Numbering Year Helpers\n * @summary Set the ISO week-numbering year to the given date.\n *\n * @description\n * Set the ISO week-numbering year to the given date,\n * saving the week number and the weekday number.\n *\n * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date\n *\n * @param {Date|String|Number} date - the date to be changed\n * @param {Number} isoYear - the ISO week-numbering year of the new date\n * @returns {Date} the new date with the ISO week-numbering year setted\n *\n * @example\n * // Set ISO week-numbering year 2007 to 29 December 2008:\n * var result = setISOYear(new Date(2008, 11, 29), 2007)\n * //=> Mon Jan 01 2007 00:00:00\n */\nfunction setISOYear (dirtyDate, dirtyISOYear) {\n  var date = parse(dirtyDate)\n  var isoYear = Number(dirtyISOYear)\n  var diff = differenceInCalendarDays(date, startOfISOYear(date))\n  var fourthOfJanuary = new Date(0)\n  fourthOfJanuary.setFullYear(isoYear, 0, 4)\n  fourthOfJanuary.setHours(0, 0, 0, 0)\n  date = startOfISOYear(fourthOfJanuary)\n  date.setDate(date.getDate() + diff)\n  return date\n}\n\nmodule.exports = setISOYear\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/set_iso_year/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/set_milliseconds/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/set_milliseconds/index.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var parse = __webpack_require__(/*! ../parse/index.js */ \"./node_modules/date-fns/parse/index.js\")\n\n/**\n * @category Millisecond Helpers\n * @summary Set the milliseconds to the given date.\n *\n * @description\n * Set the milliseconds to the given date.\n *\n * @param {Date|String|Number} date - the date to be changed\n * @param {Number} milliseconds - the milliseconds of the new date\n * @returns {Date} the new date with the milliseconds setted\n *\n * @example\n * // Set 300 milliseconds to 1 September 2014 11:30:40.500:\n * var result = setMilliseconds(new Date(2014, 8, 1, 11, 30, 40, 500), 300)\n * //=> Mon Sep 01 2014 11:30:40.300\n */\nfunction setMilliseconds (dirtyDate, dirtyMilliseconds) {\n  var date = parse(dirtyDate)\n  var milliseconds = Number(dirtyMilliseconds)\n  date.setMilliseconds(milliseconds)\n  return date\n}\n\nmodule.exports = setMilliseconds\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/set_milliseconds/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/set_minutes/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/set_minutes/index.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var parse = __webpack_require__(/*! ../parse/index.js */ \"./node_modules/date-fns/parse/index.js\")\n\n/**\n * @category Minute Helpers\n * @summary Set the minutes to the given date.\n *\n * @description\n * Set the minutes to the given date.\n *\n * @param {Date|String|Number} date - the date to be changed\n * @param {Number} minutes - the minutes of the new date\n * @returns {Date} the new date with the minutes setted\n *\n * @example\n * // Set 45 minutes to 1 September 2014 11:30:40:\n * var result = setMinutes(new Date(2014, 8, 1, 11, 30, 40), 45)\n * //=> Mon Sep 01 2014 11:45:40\n */\nfunction setMinutes (dirtyDate, dirtyMinutes) {\n  var date = parse(dirtyDate)\n  var minutes = Number(dirtyMinutes)\n  date.setMinutes(minutes)\n  return date\n}\n\nmodule.exports = setMinutes\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/set_minutes/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/set_month/index.js":
/*!**************************************************!*\
  !*** ./node_modules/date-fns/set_month/index.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var parse = __webpack_require__(/*! ../parse/index.js */ \"./node_modules/date-fns/parse/index.js\")\nvar getDaysInMonth = __webpack_require__(/*! ../get_days_in_month/index.js */ \"./node_modules/date-fns/get_days_in_month/index.js\")\n\n/**\n * @category Month Helpers\n * @summary Set the month to the given date.\n *\n * @description\n * Set the month to the given date.\n *\n * @param {Date|String|Number} date - the date to be changed\n * @param {Number} month - the month of the new date\n * @returns {Date} the new date with the month setted\n *\n * @example\n * // Set February to 1 September 2014:\n * var result = setMonth(new Date(2014, 8, 1), 1)\n * //=> Sat Feb 01 2014 00:00:00\n */\nfunction setMonth (dirtyDate, dirtyMonth) {\n  var date = parse(dirtyDate)\n  var month = Number(dirtyMonth)\n  var year = date.getFullYear()\n  var day = date.getDate()\n\n  var dateWithDesiredMonth = new Date(0)\n  dateWithDesiredMonth.setFullYear(year, month, 15)\n  dateWithDesiredMonth.setHours(0, 0, 0, 0)\n  var daysInMonth = getDaysInMonth(dateWithDesiredMonth)\n  // Set the last day of the new month\n  // if the original date was the last day of the longer month\n  date.setMonth(month, Math.min(day, daysInMonth))\n  return date\n}\n\nmodule.exports = setMonth\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/set_month/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/set_quarter/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/set_quarter/index.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var parse = __webpack_require__(/*! ../parse/index.js */ \"./node_modules/date-fns/parse/index.js\")\nvar setMonth = __webpack_require__(/*! ../set_month/index.js */ \"./node_modules/date-fns/set_month/index.js\")\n\n/**\n * @category Quarter Helpers\n * @summary Set the year quarter to the given date.\n *\n * @description\n * Set the year quarter to the given date.\n *\n * @param {Date|String|Number} date - the date to be changed\n * @param {Number} quarter - the quarter of the new date\n * @returns {Date} the new date with the quarter setted\n *\n * @example\n * // Set the 2nd quarter to 2 July 2014:\n * var result = setQuarter(new Date(2014, 6, 2), 2)\n * //=> Wed Apr 02 2014 00:00:00\n */\nfunction setQuarter (dirtyDate, dirtyQuarter) {\n  var date = parse(dirtyDate)\n  var quarter = Number(dirtyQuarter)\n  var oldQuarter = Math.floor(date.getMonth() / 3) + 1\n  var diff = quarter - oldQuarter\n  return setMonth(date, date.getMonth() + diff * 3)\n}\n\nmodule.exports = setQuarter\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/set_quarter/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/set_seconds/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/set_seconds/index.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var parse = __webpack_require__(/*! ../parse/index.js */ \"./node_modules/date-fns/parse/index.js\")\n\n/**\n * @category Second Helpers\n * @summary Set the seconds to the given date.\n *\n * @description\n * Set the seconds to the given date.\n *\n * @param {Date|String|Number} date - the date to be changed\n * @param {Number} seconds - the seconds of the new date\n * @returns {Date} the new date with the seconds setted\n *\n * @example\n * // Set 45 seconds to 1 September 2014 11:30:40:\n * var result = setSeconds(new Date(2014, 8, 1, 11, 30, 40), 45)\n * //=> Mon Sep 01 2014 11:30:45\n */\nfunction setSeconds (dirtyDate, dirtySeconds) {\n  var date = parse(dirtyDate)\n  var seconds = Number(dirtySeconds)\n  date.setSeconds(seconds)\n  return date\n}\n\nmodule.exports = setSeconds\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/set_seconds/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/set_year/index.js":
/*!*************************************************!*\
  !*** ./node_modules/date-fns/set_year/index.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var parse = __webpack_require__(/*! ../parse/index.js */ \"./node_modules/date-fns/parse/index.js\")\n\n/**\n * @category Year Helpers\n * @summary Set the year to the given date.\n *\n * @description\n * Set the year to the given date.\n *\n * @param {Date|String|Number} date - the date to be changed\n * @param {Number} year - the year of the new date\n * @returns {Date} the new date with the year setted\n *\n * @example\n * // Set year 2013 to 1 September 2014:\n * var result = setYear(new Date(2014, 8, 1), 2013)\n * //=> Sun Sep 01 2013 00:00:00\n */\nfunction setYear (dirtyDate, dirtyYear) {\n  var date = parse(dirtyDate)\n  var year = Number(dirtyYear)\n  date.setFullYear(year)\n  return date\n}\n\nmodule.exports = setYear\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/set_year/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/start_of_day/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/start_of_day/index.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var parse = __webpack_require__(/*! ../parse/index.js */ \"./node_modules/date-fns/parse/index.js\")\n\n/**\n * @category Day Helpers\n * @summary Return the start of a day for the given date.\n *\n * @description\n * Return the start of a day for the given date.\n * The result will be in the local timezone.\n *\n * @param {Date|String|Number} date - the original date\n * @returns {Date} the start of a day\n *\n * @example\n * // The start of a day for 2 September 2014 11:55:00:\n * var result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))\n * //=> Tue Sep 02 2014 00:00:00\n */\nfunction startOfDay (dirtyDate) {\n  var date = parse(dirtyDate)\n  date.setHours(0, 0, 0, 0)\n  return date\n}\n\nmodule.exports = startOfDay\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/start_of_day/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/start_of_hour/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/start_of_hour/index.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var parse = __webpack_require__(/*! ../parse/index.js */ \"./node_modules/date-fns/parse/index.js\")\n\n/**\n * @category Hour Helpers\n * @summary Return the start of an hour for the given date.\n *\n * @description\n * Return the start of an hour for the given date.\n * The result will be in the local timezone.\n *\n * @param {Date|String|Number} date - the original date\n * @returns {Date} the start of an hour\n *\n * @example\n * // The start of an hour for 2 September 2014 11:55:00:\n * var result = startOfHour(new Date(2014, 8, 2, 11, 55))\n * //=> Tue Sep 02 2014 11:00:00\n */\nfunction startOfHour (dirtyDate) {\n  var date = parse(dirtyDate)\n  date.setMinutes(0, 0, 0)\n  return date\n}\n\nmodule.exports = startOfHour\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/start_of_hour/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/start_of_iso_week/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/date-fns/start_of_iso_week/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var startOfWeek = __webpack_require__(/*! ../start_of_week/index.js */ \"./node_modules/date-fns/start_of_week/index.js\")\n\n/**\n * @category ISO Week Helpers\n * @summary Return the start of an ISO week for the given date.\n *\n * @description\n * Return the start of an ISO week for the given date.\n * The result will be in the local timezone.\n *\n * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date\n *\n * @param {Date|String|Number} date - the original date\n * @returns {Date} the start of an ISO week\n *\n * @example\n * // The start of an ISO week for 2 September 2014 11:55:00:\n * var result = startOfISOWeek(new Date(2014, 8, 2, 11, 55, 0))\n * //=> Mon Sep 01 2014 00:00:00\n */\nfunction startOfISOWeek (dirtyDate) {\n  return startOfWeek(dirtyDate, {weekStartsOn: 1})\n}\n\nmodule.exports = startOfISOWeek\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/start_of_iso_week/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/start_of_iso_year/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/date-fns/start_of_iso_year/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var getISOYear = __webpack_require__(/*! ../get_iso_year/index.js */ \"./node_modules/date-fns/get_iso_year/index.js\")\nvar startOfISOWeek = __webpack_require__(/*! ../start_of_iso_week/index.js */ \"./node_modules/date-fns/start_of_iso_week/index.js\")\n\n/**\n * @category ISO Week-Numbering Year Helpers\n * @summary Return the start of an ISO week-numbering year for the given date.\n *\n * @description\n * Return the start of an ISO week-numbering year,\n * which always starts 3 days before the year's first Thursday.\n * The result will be in the local timezone.\n *\n * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date\n *\n * @param {Date|String|Number} date - the original date\n * @returns {Date} the start of an ISO year\n *\n * @example\n * // The start of an ISO week-numbering year for 2 July 2005:\n * var result = startOfISOYear(new Date(2005, 6, 2))\n * //=> Mon Jan 03 2005 00:00:00\n */\nfunction startOfISOYear (dirtyDate) {\n  var year = getISOYear(dirtyDate)\n  var fourthOfJanuary = new Date(0)\n  fourthOfJanuary.setFullYear(year, 0, 4)\n  fourthOfJanuary.setHours(0, 0, 0, 0)\n  var date = startOfISOWeek(fourthOfJanuary)\n  return date\n}\n\nmodule.exports = startOfISOYear\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/start_of_iso_year/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/start_of_minute/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/start_of_minute/index.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var parse = __webpack_require__(/*! ../parse/index.js */ \"./node_modules/date-fns/parse/index.js\")\n\n/**\n * @category Minute Helpers\n * @summary Return the start of a minute for the given date.\n *\n * @description\n * Return the start of a minute for the given date.\n * The result will be in the local timezone.\n *\n * @param {Date|String|Number} date - the original date\n * @returns {Date} the start of a minute\n *\n * @example\n * // The start of a minute for 1 December 2014 22:15:45.400:\n * var result = startOfMinute(new Date(2014, 11, 1, 22, 15, 45, 400))\n * //=> Mon Dec 01 2014 22:15:00\n */\nfunction startOfMinute (dirtyDate) {\n  var date = parse(dirtyDate)\n  date.setSeconds(0, 0)\n  return date\n}\n\nmodule.exports = startOfMinute\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/start_of_minute/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/start_of_month/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/start_of_month/index.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var parse = __webpack_require__(/*! ../parse/index.js */ \"./node_modules/date-fns/parse/index.js\")\n\n/**\n * @category Month Helpers\n * @summary Return the start of a month for the given date.\n *\n * @description\n * Return the start of a month for the given date.\n * The result will be in the local timezone.\n *\n * @param {Date|String|Number} date - the original date\n * @returns {Date} the start of a month\n *\n * @example\n * // The start of a month for 2 September 2014 11:55:00:\n * var result = startOfMonth(new Date(2014, 8, 2, 11, 55, 0))\n * //=> Mon Sep 01 2014 00:00:00\n */\nfunction startOfMonth (dirtyDate) {\n  var date = parse(dirtyDate)\n  date.setDate(1)\n  date.setHours(0, 0, 0, 0)\n  return date\n}\n\nmodule.exports = startOfMonth\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/start_of_month/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/start_of_quarter/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/start_of_quarter/index.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var parse = __webpack_require__(/*! ../parse/index.js */ \"./node_modules/date-fns/parse/index.js\")\n\n/**\n * @category Quarter Helpers\n * @summary Return the start of a year quarter for the given date.\n *\n * @description\n * Return the start of a year quarter for the given date.\n * The result will be in the local timezone.\n *\n * @param {Date|String|Number} date - the original date\n * @returns {Date} the start of a quarter\n *\n * @example\n * // The start of a quarter for 2 September 2014 11:55:00:\n * var result = startOfQuarter(new Date(2014, 8, 2, 11, 55, 0))\n * //=> Tue Jul 01 2014 00:00:00\n */\nfunction startOfQuarter (dirtyDate) {\n  var date = parse(dirtyDate)\n  var currentMonth = date.getMonth()\n  var month = currentMonth - currentMonth % 3\n  date.setMonth(month, 1)\n  date.setHours(0, 0, 0, 0)\n  return date\n}\n\nmodule.exports = startOfQuarter\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/start_of_quarter/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/start_of_second/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/start_of_second/index.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var parse = __webpack_require__(/*! ../parse/index.js */ \"./node_modules/date-fns/parse/index.js\")\n\n/**\n * @category Second Helpers\n * @summary Return the start of a second for the given date.\n *\n * @description\n * Return the start of a second for the given date.\n * The result will be in the local timezone.\n *\n * @param {Date|String|Number} date - the original date\n * @returns {Date} the start of a second\n *\n * @example\n * // The start of a second for 1 December 2014 22:15:45.400:\n * var result = startOfSecond(new Date(2014, 11, 1, 22, 15, 45, 400))\n * //=> Mon Dec 01 2014 22:15:45.000\n */\nfunction startOfSecond (dirtyDate) {\n  var date = parse(dirtyDate)\n  date.setMilliseconds(0)\n  return date\n}\n\nmodule.exports = startOfSecond\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/start_of_second/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/start_of_today/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/start_of_today/index.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var startOfDay = __webpack_require__(/*! ../start_of_day/index.js */ \"./node_modules/date-fns/start_of_day/index.js\")\n\n/**\n * @category Day Helpers\n * @summary Return the start of today.\n *\n * @description\n * Return the start of today.\n *\n * @returns {Date} the start of today\n *\n * @example\n * // If today is 6 October 2014:\n * var result = startOfToday()\n * //=> Mon Oct 6 2014 00:00:00\n */\nfunction startOfToday () {\n  return startOfDay(new Date())\n}\n\nmodule.exports = startOfToday\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/start_of_today/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/start_of_tomorrow/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/date-fns/start_of_tomorrow/index.js ***!
  \**********************************************************/
/***/ ((module) => {

eval("/**\n * @category Day Helpers\n * @summary Return the start of tomorrow.\n *\n * @description\n * Return the start of tomorrow.\n *\n * @returns {Date} the start of tomorrow\n *\n * @example\n * // If today is 6 October 2014:\n * var result = startOfTomorrow()\n * //=> Tue Oct 7 2014 00:00:00\n */\nfunction startOfTomorrow () {\n  var now = new Date()\n  var year = now.getFullYear()\n  var month = now.getMonth()\n  var day = now.getDate()\n\n  var date = new Date(0)\n  date.setFullYear(year, month, day + 1)\n  date.setHours(0, 0, 0, 0)\n  return date\n}\n\nmodule.exports = startOfTomorrow\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/start_of_tomorrow/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/start_of_week/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/start_of_week/index.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var parse = __webpack_require__(/*! ../parse/index.js */ \"./node_modules/date-fns/parse/index.js\")\n\n/**\n * @category Week Helpers\n * @summary Return the start of a week for the given date.\n *\n * @description\n * Return the start of a week for the given date.\n * The result will be in the local timezone.\n *\n * @param {Date|String|Number} date - the original date\n * @param {Object} [options] - the object with options\n * @param {Number} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)\n * @returns {Date} the start of a week\n *\n * @example\n * // The start of a week for 2 September 2014 11:55:00:\n * var result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))\n * //=> Sun Aug 31 2014 00:00:00\n *\n * @example\n * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:\n * var result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), {weekStartsOn: 1})\n * //=> Mon Sep 01 2014 00:00:00\n */\nfunction startOfWeek (dirtyDate, dirtyOptions) {\n  var weekStartsOn = dirtyOptions ? (Number(dirtyOptions.weekStartsOn) || 0) : 0\n\n  var date = parse(dirtyDate)\n  var day = date.getDay()\n  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn\n\n  date.setDate(date.getDate() - diff)\n  date.setHours(0, 0, 0, 0)\n  return date\n}\n\nmodule.exports = startOfWeek\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/start_of_week/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/start_of_year/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/start_of_year/index.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var parse = __webpack_require__(/*! ../parse/index.js */ \"./node_modules/date-fns/parse/index.js\")\n\n/**\n * @category Year Helpers\n * @summary Return the start of a year for the given date.\n *\n * @description\n * Return the start of a year for the given date.\n * The result will be in the local timezone.\n *\n * @param {Date|String|Number} date - the original date\n * @returns {Date} the start of a year\n *\n * @example\n * // The start of a year for 2 September 2014 11:55:00:\n * var result = startOfYear(new Date(2014, 8, 2, 11, 55, 00))\n * //=> Wed Jan 01 2014 00:00:00\n */\nfunction startOfYear (dirtyDate) {\n  var cleanDate = parse(dirtyDate)\n  var date = new Date(0)\n  date.setFullYear(cleanDate.getFullYear(), 0, 1)\n  date.setHours(0, 0, 0, 0)\n  return date\n}\n\nmodule.exports = startOfYear\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/start_of_year/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/start_of_yesterday/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/start_of_yesterday/index.js ***!
  \***********************************************************/
/***/ ((module) => {

eval("/**\n * @category Day Helpers\n * @summary Return the start of yesterday.\n *\n * @description\n * Return the start of yesterday.\n *\n * @returns {Date} the start of yesterday\n *\n * @example\n * // If today is 6 October 2014:\n * var result = startOfYesterday()\n * //=> Sun Oct 5 2014 00:00:00\n */\nfunction startOfYesterday () {\n  var now = new Date()\n  var year = now.getFullYear()\n  var month = now.getMonth()\n  var day = now.getDate()\n\n  var date = new Date(0)\n  date.setFullYear(year, month, day - 1)\n  date.setHours(0, 0, 0, 0)\n  return date\n}\n\nmodule.exports = startOfYesterday\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/start_of_yesterday/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/sub_days/index.js":
/*!*************************************************!*\
  !*** ./node_modules/date-fns/sub_days/index.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var addDays = __webpack_require__(/*! ../add_days/index.js */ \"./node_modules/date-fns/add_days/index.js\")\n\n/**\n * @category Day Helpers\n * @summary Subtract the specified number of days from the given date.\n *\n * @description\n * Subtract the specified number of days from the given date.\n *\n * @param {Date|String|Number} date - the date to be changed\n * @param {Number} amount - the amount of days to be subtracted\n * @returns {Date} the new date with the days subtracted\n *\n * @example\n * // Subtract 10 days from 1 September 2014:\n * var result = subDays(new Date(2014, 8, 1), 10)\n * //=> Fri Aug 22 2014 00:00:00\n */\nfunction subDays (dirtyDate, dirtyAmount) {\n  var amount = Number(dirtyAmount)\n  return addDays(dirtyDate, -amount)\n}\n\nmodule.exports = subDays\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/sub_days/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/sub_hours/index.js":
/*!**************************************************!*\
  !*** ./node_modules/date-fns/sub_hours/index.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var addHours = __webpack_require__(/*! ../add_hours/index.js */ \"./node_modules/date-fns/add_hours/index.js\")\n\n/**\n * @category Hour Helpers\n * @summary Subtract the specified number of hours from the given date.\n *\n * @description\n * Subtract the specified number of hours from the given date.\n *\n * @param {Date|String|Number} date - the date to be changed\n * @param {Number} amount - the amount of hours to be subtracted\n * @returns {Date} the new date with the hours subtracted\n *\n * @example\n * // Subtract 2 hours from 11 July 2014 01:00:00:\n * var result = subHours(new Date(2014, 6, 11, 1, 0), 2)\n * //=> Thu Jul 10 2014 23:00:00\n */\nfunction subHours (dirtyDate, dirtyAmount) {\n  var amount = Number(dirtyAmount)\n  return addHours(dirtyDate, -amount)\n}\n\nmodule.exports = subHours\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/sub_hours/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/sub_iso_years/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/sub_iso_years/index.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var addISOYears = __webpack_require__(/*! ../add_iso_years/index.js */ \"./node_modules/date-fns/add_iso_years/index.js\")\n\n/**\n * @category ISO Week-Numbering Year Helpers\n * @summary Subtract the specified number of ISO week-numbering years from the given date.\n *\n * @description\n * Subtract the specified number of ISO week-numbering years from the given date.\n *\n * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date\n *\n * @param {Date|String|Number} date - the date to be changed\n * @param {Number} amount - the amount of ISO week-numbering years to be subtracted\n * @returns {Date} the new date with the ISO week-numbering years subtracted\n *\n * @example\n * // Subtract 5 ISO week-numbering years from 1 September 2014:\n * var result = subISOYears(new Date(2014, 8, 1), 5)\n * //=> Mon Aug 31 2009 00:00:00\n */\nfunction subISOYears (dirtyDate, dirtyAmount) {\n  var amount = Number(dirtyAmount)\n  return addISOYears(dirtyDate, -amount)\n}\n\nmodule.exports = subISOYears\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/sub_iso_years/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/sub_milliseconds/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/sub_milliseconds/index.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var addMilliseconds = __webpack_require__(/*! ../add_milliseconds/index.js */ \"./node_modules/date-fns/add_milliseconds/index.js\")\n\n/**\n * @category Millisecond Helpers\n * @summary Subtract the specified number of milliseconds from the given date.\n *\n * @description\n * Subtract the specified number of milliseconds from the given date.\n *\n * @param {Date|String|Number} date - the date to be changed\n * @param {Number} amount - the amount of milliseconds to be subtracted\n * @returns {Date} the new date with the milliseconds subtracted\n *\n * @example\n * // Subtract 750 milliseconds from 10 July 2014 12:45:30.000:\n * var result = subMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)\n * //=> Thu Jul 10 2014 12:45:29.250\n */\nfunction subMilliseconds (dirtyDate, dirtyAmount) {\n  var amount = Number(dirtyAmount)\n  return addMilliseconds(dirtyDate, -amount)\n}\n\nmodule.exports = subMilliseconds\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/sub_milliseconds/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/sub_minutes/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/sub_minutes/index.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var addMinutes = __webpack_require__(/*! ../add_minutes/index.js */ \"./node_modules/date-fns/add_minutes/index.js\")\n\n/**\n * @category Minute Helpers\n * @summary Subtract the specified number of minutes from the given date.\n *\n * @description\n * Subtract the specified number of minutes from the given date.\n *\n * @param {Date|String|Number} date - the date to be changed\n * @param {Number} amount - the amount of minutes to be subtracted\n * @returns {Date} the new date with the mintues subtracted\n *\n * @example\n * // Subtract 30 minutes from 10 July 2014 12:00:00:\n * var result = subMinutes(new Date(2014, 6, 10, 12, 0), 30)\n * //=> Thu Jul 10 2014 11:30:00\n */\nfunction subMinutes (dirtyDate, dirtyAmount) {\n  var amount = Number(dirtyAmount)\n  return addMinutes(dirtyDate, -amount)\n}\n\nmodule.exports = subMinutes\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/sub_minutes/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/sub_months/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/sub_months/index.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var addMonths = __webpack_require__(/*! ../add_months/index.js */ \"./node_modules/date-fns/add_months/index.js\")\n\n/**\n * @category Month Helpers\n * @summary Subtract the specified number of months from the given date.\n *\n * @description\n * Subtract the specified number of months from the given date.\n *\n * @param {Date|String|Number} date - the date to be changed\n * @param {Number} amount - the amount of months to be subtracted\n * @returns {Date} the new date with the months subtracted\n *\n * @example\n * // Subtract 5 months from 1 February 2015:\n * var result = subMonths(new Date(2015, 1, 1), 5)\n * //=> Mon Sep 01 2014 00:00:00\n */\nfunction subMonths (dirtyDate, dirtyAmount) {\n  var amount = Number(dirtyAmount)\n  return addMonths(dirtyDate, -amount)\n}\n\nmodule.exports = subMonths\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/sub_months/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/sub_quarters/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/sub_quarters/index.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var addQuarters = __webpack_require__(/*! ../add_quarters/index.js */ \"./node_modules/date-fns/add_quarters/index.js\")\n\n/**\n * @category Quarter Helpers\n * @summary Subtract the specified number of year quarters from the given date.\n *\n * @description\n * Subtract the specified number of year quarters from the given date.\n *\n * @param {Date|String|Number} date - the date to be changed\n * @param {Number} amount - the amount of quarters to be subtracted\n * @returns {Date} the new date with the quarters subtracted\n *\n * @example\n * // Subtract 3 quarters from 1 September 2014:\n * var result = subQuarters(new Date(2014, 8, 1), 3)\n * //=> Sun Dec 01 2013 00:00:00\n */\nfunction subQuarters (dirtyDate, dirtyAmount) {\n  var amount = Number(dirtyAmount)\n  return addQuarters(dirtyDate, -amount)\n}\n\nmodule.exports = subQuarters\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/sub_quarters/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/sub_seconds/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/sub_seconds/index.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var addSeconds = __webpack_require__(/*! ../add_seconds/index.js */ \"./node_modules/date-fns/add_seconds/index.js\")\n\n/**\n * @category Second Helpers\n * @summary Subtract the specified number of seconds from the given date.\n *\n * @description\n * Subtract the specified number of seconds from the given date.\n *\n * @param {Date|String|Number} date - the date to be changed\n * @param {Number} amount - the amount of seconds to be subtracted\n * @returns {Date} the new date with the seconds subtracted\n *\n * @example\n * // Subtract 30 seconds from 10 July 2014 12:45:00:\n * var result = subSeconds(new Date(2014, 6, 10, 12, 45, 0), 30)\n * //=> Thu Jul 10 2014 12:44:30\n */\nfunction subSeconds (dirtyDate, dirtyAmount) {\n  var amount = Number(dirtyAmount)\n  return addSeconds(dirtyDate, -amount)\n}\n\nmodule.exports = subSeconds\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/sub_seconds/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/sub_weeks/index.js":
/*!**************************************************!*\
  !*** ./node_modules/date-fns/sub_weeks/index.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var addWeeks = __webpack_require__(/*! ../add_weeks/index.js */ \"./node_modules/date-fns/add_weeks/index.js\")\n\n/**\n * @category Week Helpers\n * @summary Subtract the specified number of weeks from the given date.\n *\n * @description\n * Subtract the specified number of weeks from the given date.\n *\n * @param {Date|String|Number} date - the date to be changed\n * @param {Number} amount - the amount of weeks to be subtracted\n * @returns {Date} the new date with the weeks subtracted\n *\n * @example\n * // Subtract 4 weeks from 1 September 2014:\n * var result = subWeeks(new Date(2014, 8, 1), 4)\n * //=> Mon Aug 04 2014 00:00:00\n */\nfunction subWeeks (dirtyDate, dirtyAmount) {\n  var amount = Number(dirtyAmount)\n  return addWeeks(dirtyDate, -amount)\n}\n\nmodule.exports = subWeeks\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/sub_weeks/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/sub_years/index.js":
/*!**************************************************!*\
  !*** ./node_modules/date-fns/sub_years/index.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var addYears = __webpack_require__(/*! ../add_years/index.js */ \"./node_modules/date-fns/add_years/index.js\")\n\n/**\n * @category Year Helpers\n * @summary Subtract the specified number of years from the given date.\n *\n * @description\n * Subtract the specified number of years from the given date.\n *\n * @param {Date|String|Number} date - the date to be changed\n * @param {Number} amount - the amount of years to be subtracted\n * @returns {Date} the new date with the years subtracted\n *\n * @example\n * // Subtract 5 years from 1 September 2014:\n * var result = subYears(new Date(2014, 8, 1), 5)\n * //=> Tue Sep 01 2009 00:00:00\n */\nfunction subYears (dirtyDate, dirtyAmount) {\n  var amount = Number(dirtyAmount)\n  return addYears(dirtyDate, -amount)\n}\n\nmodule.exports = subYears\n\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/sub_years/index.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;