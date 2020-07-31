function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAboutAboutComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\n\n  <h1> Developed By </h1>\n  <p>\n     Joybrata Pal\n     <br>\n     <br>\n     <br>\n     Sudipta Sen\n     <br>\n     <br>\n     <br>\n     Mainak Ghosh\n  </p>\n\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-drawer-container class=\"sideNavBar-container\">\n  <mat-drawer mode=\"side\" opened class=\"sideNavbar\">\n    <app-nav-bar></app-nav-bar>\n  </mat-drawer>\n  <mat-drawer-content class=\"main-Content\"><router-outlet></router-outlet></mat-drawer-content>\n</mat-drawer-container>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/art-view/art-view.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/art-view/art-view.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppArtViewArtViewComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"art-view-container\">\n  <div *ngFor=\"let artist of artist_data\">\n    <div *ngFor=\"let art of artist.art\">\n      <div *ngIf=\"art.art_name == art_name\">\n        <div class=\"art-view-container-header\">\n            <span (click)=\"onSelectArtist(artist)\">{{artist.artist_name}}</span>/{{art.art_name}}\n        </div>\n        <img [src]=\"art.pic_url\" [alt]=\"art.art_name\">\n        <div class=\"art-view-container-title\">About</div>\n        <div class=\"art-view-container-about\">{{art.about_pic}}</div>\n      </div>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/artist-list-container/artist-list-container.component.html":
  /*!******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/artist-list-container/artist-list-container.component.html ***!
    \******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppArtistListContainerArtistListContainerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"list-view\">\n  <ul *ngFor=\"let artist of filterItemsOfType(serKey)\">\n    <li (click)=\"onSelectArtist(artist)\">{{artist.artist_name}}</li>\n  </ul>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/artist-view/artist-view.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/artist-view/artist-view.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppArtistViewArtistViewComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"artist-view-container\">\n  <ul *ngFor=\"let artist of artist_data\">\n    <li *ngIf=\"artist.artist_name == artist_name\" class=\"artist-view-container-heading\">{{artist.artist_name}}</li>\n\n    <div class=\"artist-view-container-title\" *ngIf=\"artist.artist_name == artist_name\">About</div>\n    <li *ngIf=\"artist.artist_name == artist_name\" class=\"artist-view-container-bio\">{{artist.bio}}</li>\n\n    <div class=\"artist-view-container-title\" *ngIf=\"artist.artist_name == artist_name\">Art works</div>\n\n    <div class=\"thumbnail-container\">\n      <ul *ngFor=\"let art of artist.art\" style=\"padding-left: 0%\">\n        <div *ngIf=\"artist.artist_name == artist_name\" class=\"thumbnail\" (click)=\"onSelectArt(art)\">\n            <img *ngIf=\"artist.artist_name == artist_name\" [src]=\"art.pic_url\" [alt]=\"art.art_name\"  height=300px>\n            <li *ngIf=\"artist.artist_name == artist_name\">{{art.art_name}}</li>\n        </div>\n      </ul>\n    </div>\n\n  </ul>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/artists/artists.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/artists/artists.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppArtistsArtistsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"artists-container\">\n  <p class=\"heading\">Artists</p>\n  <ul>\n    <li *ngFor='let key of 26 | alphabets'>\n      <a id={{key}} [routerLink]=\"\" (click)=\"selectKey(key)\" [class.selected]=\"key == ser\">{{key}}</a>\n    </li>\n  </ul>\n  <div class=\"\">\n    <app-artist-list-container [serKey]= \"ser\"></app-artist-list-container>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"thumbnail-container\">\n  <ul *ngFor=\"let artist of artist_data\" style=\"padding-left: 0%\">\n    <div *ngFor=\"let art of artist.art\" class=\"thumbnail\" (click)=\"onSelectArt(art)\">\n        <img [src]=\"art.pic_url\" [alt]=\"art.art_name\"  height=300px>\n        <li>{{art.art_name}}</li>\n    </div>\n  </ul>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/nav-bar/nav-bar.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nav-bar/nav-bar.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNavBarNavBarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"nav-bar-header\">\n  <br>\n  <a [routerLink]=\"['/']\" routerLinkActive=\"router-link-active\" (click)=\"selectedFunction(1)\" >Art Space</a>\n  <br>\n</div>\n<div class=\"nav-bar-menu\">\n  <br><br><br><br><br><br><br><br><br><br>\n  <ul>\n    <li [class.selected]=\"homeSelected\"><a [routerLink]=\"['/']\" routerLinkActive=\"router-link-active\" (click)=\"selectedFunction(1)\" >Home</a></li>\n    <br>\n    <li [class.selected]=\"artistsSelected\"><a [routerLink]=\"['/artists']\" routerLinkActive=\"router-link-active\" (click)=\"selectedFunction(2)\" >Artists</a></li>\n    <br>\n    <li [class.selected]=\"aboutSelected\"><a [routerLink]=\"['/about']\" routerLinkActive=\"router-link-active\" (click)=\"selectedFunction(3)\" >About</a></li>\n  </ul>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/about/about.component.scss":
  /*!********************************************!*\
    !*** ./src/app/about/about.component.scss ***!
    \********************************************/

  /*! exports provided: default */

  /***/
  function srcAppAboutAboutComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "div {\n  margin-top: 100px;\n  margin-left: 73px;\n}\ndiv p {\n  font-size: 20px;\n  margin-top: 68px;\n  margin-left: 73px;\n  margin-right: 30px;\n}\ndiv h1 {\n  font-size: 28px;\n  margin-top: 60px;\n  margin-left: 30px;\n  margin-right: 30px;\n  padding-left: 5px;\n  color: #565656;\n  border-left: 5px solid red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvRDpcXFByb2plY3RcXGFuZ3VsYXJcXFVuaXZlcnNpdHlfUHJvamVjdFxcQXJ0U3BhY2Uvc3JjXFxhcHBcXGFib3V0XFxhYm91dC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSxpQkFBQTtFQUNBLGlCQUFBO0FDQUY7QURFRTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNBTjtBRElFO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLDBCQUFBO0FDRk4iLCJmaWxlIjoic3JjL2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdiB7XHJcblxyXG4gIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA3M3B4O1xyXG5cclxuICBwIHtcclxuICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICBtYXJnaW4tdG9wOiA2OHB4O1xyXG4gICAgICBtYXJnaW4tbGVmdDogNzNweDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG5cclxuICB9XHJcblxyXG4gIGgxIHtcclxuICAgICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgICBtYXJnaW4tdG9wOiA2MHB4O1xyXG4gICAgICBtYXJnaW4tbGVmdDogMzBweDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgICAgY29sb3I6ICM1NjU2NTY7XHJcbiAgICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgcmVkO1xyXG4gIH1cclxufVxyXG4iLCJkaXYge1xuICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgbWFyZ2luLWxlZnQ6IDczcHg7XG59XG5kaXYgcCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luLXRvcDogNjhweDtcbiAgbWFyZ2luLWxlZnQ6IDczcHg7XG4gIG1hcmdpbi1yaWdodDogMzBweDtcbn1cbmRpdiBoMSB7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgbWFyZ2luLXRvcDogNjBweDtcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gIG1hcmdpbi1yaWdodDogMzBweDtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIGNvbG9yOiAjNTY1NjU2O1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHJlZDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/about/about.component.ts":
  /*!******************************************!*\
    !*** ./src/app/about/about.component.ts ***!
    \******************************************/

  /*! exports provided: AboutComponent */

  /***/
  function srcAppAboutAboutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
      return AboutComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AboutComponent =
    /*#__PURE__*/
    function () {
      function AboutComponent(router) {
        _classCallCheck(this, AboutComponent);

        this.router = router;
      }

      _createClass(AboutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log(this.router.url);
        }
      }]);

      return AboutComponent;
    }();

    AboutComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-about',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./about.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./about.component.scss */
      "./src/app/about/about.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], AboutComponent);
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _artists_artists_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./artists/artists.component */
    "./src/app/artists/artists.component.ts");
    /* harmony import */


    var _about_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./about/about.component */
    "./src/app/about/about.component.ts");
    /* harmony import */


    var _artist_view_artist_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./artist-view/artist-view.component */
    "./src/app/artist-view/artist-view.component.ts");
    /* harmony import */


    var _art_view_art_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./art-view/art-view.component */
    "./src/app/art-view/art-view.component.ts");

    var routes = [{
      path: '',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }, {
      path: 'artists',
      component: _artists_artists_component__WEBPACK_IMPORTED_MODULE_4__["ArtistsComponent"]
    }, {
      path: 'about',
      component: _about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"]
    }, {
      path: 'artistView/:id',
      component: _artist_view_artist_view_component__WEBPACK_IMPORTED_MODULE_6__["ArtistViewComponent"]
    }, {
      path: 'artView/:id',
      component: _art_view_art_view_component__WEBPACK_IMPORTED_MODULE_7__["ArtViewComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".sideNavBar-container {\n  width: 100%;\n  height: 100%;\n}\n.sideNavBar-container .sideNavbar {\n  width: 250px;\n  background-color: #F2F2F2;\n}\n.sideNavBar-container .main-Content {\n  background-color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXFByb2plY3RcXGFuZ3VsYXJcXFVuaXZlcnNpdHlfUHJvamVjdFxcQXJ0U3BhY2Uvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNDRjtBRENFO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0FDQ0o7QURFRTtFQUNFLHVCQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lkZU5hdkJhci1jb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuXHJcbiAgLnNpZGVOYXZiYXIge1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0YyRjJGMjtcclxuICB9XHJcblxyXG4gIC5tYWluLUNvbnRlbnR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbn1cclxuIiwiLnNpZGVOYXZCYXItY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5zaWRlTmF2QmFyLWNvbnRhaW5lciAuc2lkZU5hdmJhciB7XG4gIHdpZHRoOiAyNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YyRjJGMjtcbn1cbi5zaWRlTmF2QmFyLWNvbnRhaW5lciAubWFpbi1Db250ZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'ArtSpace';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _artists_artists_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./artists/artists.component */
    "./src/app/artists/artists.component.ts");
    /* harmony import */


    var _about_about_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./about/about.component */
    "./src/app/about/about.component.ts");
    /* harmony import */


    var _material_material_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./material/material.module */
    "./src/app/material/material.module.ts");
    /* harmony import */


    var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./nav-bar/nav-bar.component */
    "./src/app/nav-bar/nav-bar.component.ts");
    /* harmony import */


    var _artist_list_container_artist_list_container_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./artist-list-container/artist-list-container.component */
    "./src/app/artist-list-container/artist-list-container.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _artist_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./artist.service */
    "./src/app/artist.service.ts");
    /* harmony import */


    var _artist_view_artist_view_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./artist-view/artist-view.component */
    "./src/app/artist-view/artist-view.component.ts");
    /* harmony import */


    var _art_view_art_view_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./art-view/art-view.component */
    "./src/app/art-view/art-view.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], _artists_artists_component__WEBPACK_IMPORTED_MODULE_7__["ArtistsComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"], _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_10__["NavBarComponent"], _artists_artists_component__WEBPACK_IMPORTED_MODULE_7__["Alphabets"], _artist_list_container_artist_list_container_component__WEBPACK_IMPORTED_MODULE_11__["ArtistListContainerComponent"], _artist_view_artist_view_component__WEBPACK_IMPORTED_MODULE_14__["ArtistViewComponent"], _art_view_art_view_component__WEBPACK_IMPORTED_MODULE_15__["ArtViewComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_9__["MaterialModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"]],
      providers: [_artist_service__WEBPACK_IMPORTED_MODULE_13__["ArtistService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/art-view/art-view.component.scss":
  /*!**************************************************!*\
    !*** ./src/app/art-view/art-view.component.scss ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppArtViewArtViewComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".art-view-container {\n  margin-top: 80px;\n  margin-left: 66px;\n  margin-right: 25px;\n  color: #565656;\n  font-family: calibri;\n}\n.art-view-container .art-view-container-header {\n  font-size: 35px;\n  font-weight: 600;\n}\n.art-view-container .art-view-container-header span {\n  cursor: pointer;\n}\n.art-view-container img {\n  margin-top: 50px;\n  height: 500px;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n.art-view-container .art-view-container-title {\n  margin-top: 2.4em;\n  padding-left: 5px;\n  font-size: 28px;\n  font-weight: 500;\n  border-left: 5px solid red;\n}\n.art-view-container .art-view-container-about {\n  margin-top: 10px;\n  padding-left: 5px;\n  font-size: 26px;\n  font-weight: 400;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXJ0LXZpZXcvRDpcXFByb2plY3RcXGFuZ3VsYXJcXFVuaXZlcnNpdHlfUHJvamVjdFxcQXJ0U3BhY2Uvc3JjXFxhcHBcXGFydC12aWV3XFxhcnQtdmlldy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXJ0LXZpZXcvYXJ0LXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7QUNDRjtBRENFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FDQ0o7QURBSTtFQUNFLGVBQUE7QUNFTjtBRENFO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNDSjtBRENFO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0FDQ0o7QURDRTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2FydC12aWV3L2FydC12aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFydC12aWV3LWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luLXRvcDogODBweDtcclxuICBtYXJnaW4tbGVmdDogNjZweDtcclxuICBtYXJnaW4tcmlnaHQ6IDI1cHg7XHJcbiAgY29sb3I6ICM1NjU2NTY7XHJcbiAgZm9udC1mYW1pbHk6IGNhbGlicmk7XHJcblxyXG4gIC5hcnQtdmlldy1jb250YWluZXItaGVhZGVye1xyXG4gICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHNwYW4ge1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGltZyB7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MDBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgfVxyXG4gIC5hcnQtdmlldy1jb250YWluZXItdGl0bGUge1xyXG4gICAgbWFyZ2luLXRvcDogMi40ZW07XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHJlZDtcclxuICB9XHJcbiAgLmFydC12aWV3LWNvbnRhaW5lci1hYm91dHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgfVxyXG59XHJcbiIsIi5hcnQtdmlldy1jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiA4MHB4O1xuICBtYXJnaW4tbGVmdDogNjZweDtcbiAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xuICBjb2xvcjogIzU2NTY1NjtcbiAgZm9udC1mYW1pbHk6IGNhbGlicmk7XG59XG4uYXJ0LXZpZXctY29udGFpbmVyIC5hcnQtdmlldy1jb250YWluZXItaGVhZGVyIHtcbiAgZm9udC1zaXplOiAzNXB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLmFydC12aWV3LWNvbnRhaW5lciAuYXJ0LXZpZXctY29udGFpbmVyLWhlYWRlciBzcGFuIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmFydC12aWV3LWNvbnRhaW5lciBpbWcge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBoZWlnaHQ6IDUwMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cbi5hcnQtdmlldy1jb250YWluZXIgLmFydC12aWV3LWNvbnRhaW5lci10aXRsZSB7XG4gIG1hcmdpbi10b3A6IDIuNGVtO1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHJlZDtcbn1cbi5hcnQtdmlldy1jb250YWluZXIgLmFydC12aWV3LWNvbnRhaW5lci1hYm91dCB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICBmb250LXNpemU6IDI2cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/art-view/art-view.component.ts":
  /*!************************************************!*\
    !*** ./src/app/art-view/art-view.component.ts ***!
    \************************************************/

  /*! exports provided: ArtViewComponent */

  /***/
  function srcAppArtViewArtViewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArtViewComponent", function () {
      return ArtViewComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _artist_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../artist.service */
    "./src/app/artist.service.ts");

    var ArtViewComponent =
    /*#__PURE__*/
    function () {
      function ArtViewComponent(_artistService, router, next) {
        _classCallCheck(this, ArtViewComponent);

        this._artistService = _artistService;
        this.router = router;
        this.next = next;
        this.artist_data = [];
      }

      _createClass(ArtViewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this._artistService.getArtists().subscribe(function (data) {
            return _this.artist_data = data;
          });

          var artName = this.router.snapshot.paramMap.get('id');
          this.art_name = artName;
        }
      }, {
        key: "onSelectArtist",
        value: function onSelectArtist(artist) {
          this.next.navigate(['/artistView', artist.artist_name]);
        }
      }]);

      return ArtViewComponent;
    }();

    ArtViewComponent.ctorParameters = function () {
      return [{
        type: _artist_service__WEBPACK_IMPORTED_MODULE_3__["ArtistService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    ArtViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-art-view',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./art-view.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/art-view/art-view.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./art-view.component.scss */
      "./src/app/art-view/art-view.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_artist_service__WEBPACK_IMPORTED_MODULE_3__["ArtistService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], ArtViewComponent);
    /***/
  },

  /***/
  "./src/app/artist-list-container/artist-list-container.component.scss":
  /*!****************************************************************************!*\
    !*** ./src/app/artist-list-container/artist-list-container.component.scss ***!
    \****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppArtistListContainerArtistListContainerComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".list-view {\n  margin-top: 50px;\n}\n.list-view ul {\n  list-style: none;\n}\n.list-view ul li {\n  padding-left: 14px;\n  padding-right: 14px;\n  font-size: 22px;\n  font-weight: 100;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXJ0aXN0LWxpc3QtY29udGFpbmVyL0Q6XFxQcm9qZWN0XFxhbmd1bGFyXFxVbml2ZXJzaXR5X1Byb2plY3RcXEFydFNwYWNlL3NyY1xcYXBwXFxhcnRpc3QtbGlzdC1jb250YWluZXJcXGFydGlzdC1saXN0LWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXJ0aXN0LWxpc3QtY29udGFpbmVyL2FydGlzdC1saXN0LWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FDQ0Y7QURBRTtFQUNFLGdCQUFBO0FDRUo7QURESTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDR04iLCJmaWxlIjoic3JjL2FwcC9hcnRpc3QtbGlzdC1jb250YWluZXIvYXJ0aXN0LWxpc3QtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxpc3QtdmlldyB7XHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxuICB1bCB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgbGl7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMTRweDtcclxuICAgICAgcGFkZGluZy1yaWdodDogMTRweDtcclxuICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi5saXN0LXZpZXcge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuLmxpc3QtdmlldyB1bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG4ubGlzdC12aWV3IHVsIGxpIHtcbiAgcGFkZGluZy1sZWZ0OiAxNHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNHB4O1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/artist-list-container/artist-list-container.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/artist-list-container/artist-list-container.component.ts ***!
    \**************************************************************************/

  /*! exports provided: ArtistListContainerComponent */

  /***/
  function srcAppArtistListContainerArtistListContainerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArtistListContainerComponent", function () {
      return ArtistListContainerComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _artist_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../artist.service */
    "./src/app/artist.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var ArtistListContainerComponent =
    /*#__PURE__*/
    function () {
      function ArtistListContainerComponent(_artistService, router) {
        _classCallCheck(this, ArtistListContainerComponent);

        this._artistService = _artistService;
        this.router = router;
        this.artist_data = [];
      }

      _createClass(ArtistListContainerComponent, [{
        key: "filterItemsOfType",
        value: function filterItemsOfType(serKey) {
          return this.artist_data.filter(function (x) {
            return x.artist_name.startsWith(serKey);
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this._artistService.getArtists().subscribe(function (data) {
            return _this2.artist_data = data;
          });
        }
      }, {
        key: "onSelectArtist",
        value: function onSelectArtist(artist) {
          this.router.navigate(['/artistView', artist.artist_name]);
        }
      }]);

      return ArtistListContainerComponent;
    }();

    ArtistListContainerComponent.ctorParameters = function () {
      return [{
        type: _artist_service__WEBPACK_IMPORTED_MODULE_2__["ArtistService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], ArtistListContainerComponent.prototype, "serKey", void 0);
    ArtistListContainerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-artist-list-container',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./artist-list-container.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/artist-list-container/artist-list-container.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./artist-list-container.component.scss */
      "./src/app/artist-list-container/artist-list-container.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_artist_service__WEBPACK_IMPORTED_MODULE_2__["ArtistService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])], ArtistListContainerComponent);
    /***/
  },

  /***/
  "./src/app/artist-view/artist-view.component.scss":
  /*!********************************************************!*\
    !*** ./src/app/artist-view/artist-view.component.scss ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppArtistViewArtistViewComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".artist-view-container {\n  margin-top: 80px;\n  margin-left: 25px;\n  margin-right: 25px;\n  color: #565656;\n  font-family: calibri;\n}\n.artist-view-container ul {\n  list-style: none;\n}\n.artist-view-container ul li.artist-view-container-heading {\n  font-size: 35px;\n  font-weight: 600;\n}\n.artist-view-container ul .artist-view-container-title {\n  margin-top: 2.4em;\n  padding-left: 5px;\n  font-size: 28px;\n  font-weight: 500;\n  border-left: 5px solid red;\n}\n.artist-view-container ul .artist-view-container-bio {\n  margin-top: 10px;\n  padding-left: 5px;\n  font-size: 26px;\n  font-weight: 400;\n}\n.artist-view-container ul .thumbnail-container {\n  margin-top: 10px;\n}\n.artist-view-container ul .thumbnail-container .thumbnail {\n  float: left;\n  height: 385px;\n  width: 240px;\n  overflow: hidden;\n  margin-right: 70px;\n  cursor: pointer;\n  transition: 0.2s ease-out all;\n}\n.artist-view-container ul .thumbnail-container .thumbnail img {\n  margin-left: 50%;\n  transform: translateX(-50%);\n}\n.artist-view-container ul .thumbnail-container .thumbnail li {\n  font-family: Century-Gothic;\n  text-align: center;\n  font-size: 20px;\n  font-weight: 0;\n}\n.artist-view-container ul .thumbnail-container .thumbnail:hover {\n  transform: scale(1.05);\n  position: relative;\n  z-index: 100;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXJ0aXN0LXZpZXcvRDpcXFByb2plY3RcXGFuZ3VsYXJcXFVuaXZlcnNpdHlfUHJvamVjdFxcQXJ0U3BhY2Uvc3JjXFxhcHBcXGFydGlzdC12aWV3XFxhcnRpc3Qtdmlldy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXJ0aXN0LXZpZXcvYXJ0aXN0LXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7QUNDRjtBREFFO0VBQ0UsZ0JBQUE7QUNFSjtBREFJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FDRU47QURDSTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtBQ0NOO0FERUk7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDQU47QURHSTtFQUNFLGdCQUFBO0FDRE47QURHTTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7QUNEUjtBREdRO0VBQ0UsZ0JBQUE7RUFDQSwyQkFBQTtBQ0RWO0FER1E7RUFDRSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNEVjtBRElNO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNGUiIsImZpbGUiOiJzcmMvYXBwL2FydGlzdC12aWV3L2FydGlzdC12aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFydGlzdC12aWV3LWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luLXRvcDogODBweDtcclxuICBtYXJnaW4tbGVmdDogMjVweDtcclxuICBtYXJnaW4tcmlnaHQ6IDI1cHg7XHJcbiAgY29sb3I6ICM1NjU2NTY7XHJcbiAgZm9udC1mYW1pbHk6IGNhbGlicmk7XHJcbiAgdWwge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuXHJcbiAgICBsaS5hcnRpc3Qtdmlldy1jb250YWluZXItaGVhZGluZyB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIH1cclxuXHJcbiAgICAuYXJ0aXN0LXZpZXctY29udGFpbmVyLXRpdGxlIHtcclxuICAgICAgbWFyZ2luLXRvcDogMi40ZW07XHJcbiAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgcmVkO1xyXG4gICAgfVxyXG5cclxuICAgIC5hcnRpc3Qtdmlldy1jb250YWluZXItYmlve1xyXG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgICAgZm9udC1zaXplOiAyNnB4O1xyXG4gICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgfVxyXG5cclxuICAgIC50aHVtYm5haWwtY29udGFpbmVyIHtcclxuICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuXHJcbiAgICAgIC50aHVtYm5haWwge1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIGhlaWdodDogMzg1cHg7XHJcbiAgICAgICAgd2lkdGg6IDI0MHB4O1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA3MHB4O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB0cmFuc2l0aW9uOjAuMnMgZWFzZS1vdXQgYWxsO1xyXG5cclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDUwJTtcclxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGkge1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IENlbnR1cnktR290aGljO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC50aHVtYm5haWw6aG92ZXIge1xyXG4gICAgICAgIHRyYW5zZm9ybTpzY2FsZSgxLjA1KTtcclxuICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgICAgICB6LWluZGV4OjEwMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIuYXJ0aXN0LXZpZXctY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogODBweDtcbiAgbWFyZ2luLWxlZnQ6IDI1cHg7XG4gIG1hcmdpbi1yaWdodDogMjVweDtcbiAgY29sb3I6ICM1NjU2NTY7XG4gIGZvbnQtZmFtaWx5OiBjYWxpYnJpO1xufVxuLmFydGlzdC12aWV3LWNvbnRhaW5lciB1bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG4uYXJ0aXN0LXZpZXctY29udGFpbmVyIHVsIGxpLmFydGlzdC12aWV3LWNvbnRhaW5lci1oZWFkaW5nIHtcbiAgZm9udC1zaXplOiAzNXB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLmFydGlzdC12aWV3LWNvbnRhaW5lciB1bCAuYXJ0aXN0LXZpZXctY29udGFpbmVyLXRpdGxlIHtcbiAgbWFyZ2luLXRvcDogMi40ZW07XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICBmb250LXNpemU6IDI4cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgcmVkO1xufVxuLmFydGlzdC12aWV3LWNvbnRhaW5lciB1bCAuYXJ0aXN0LXZpZXctY29udGFpbmVyLWJpbyB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICBmb250LXNpemU6IDI2cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG4uYXJ0aXN0LXZpZXctY29udGFpbmVyIHVsIC50aHVtYm5haWwtY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5hcnRpc3Qtdmlldy1jb250YWluZXIgdWwgLnRodW1ibmFpbC1jb250YWluZXIgLnRodW1ibmFpbCB7XG4gIGZsb2F0OiBsZWZ0O1xuICBoZWlnaHQ6IDM4NXB4O1xuICB3aWR0aDogMjQwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbi1yaWdodDogNzBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2Utb3V0IGFsbDtcbn1cbi5hcnRpc3Qtdmlldy1jb250YWluZXIgdWwgLnRodW1ibmFpbC1jb250YWluZXIgLnRodW1ibmFpbCBpbWcge1xuICBtYXJnaW4tbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG59XG4uYXJ0aXN0LXZpZXctY29udGFpbmVyIHVsIC50aHVtYm5haWwtY29udGFpbmVyIC50aHVtYm5haWwgbGkge1xuICBmb250LWZhbWlseTogQ2VudHVyeS1Hb3RoaWM7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogMDtcbn1cbi5hcnRpc3Qtdmlldy1jb250YWluZXIgdWwgLnRodW1ibmFpbC1jb250YWluZXIgLnRodW1ibmFpbDpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTAwO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/artist-view/artist-view.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/artist-view/artist-view.component.ts ***!
    \******************************************************/

  /*! exports provided: ArtistViewComponent */

  /***/
  function srcAppArtistViewArtistViewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArtistViewComponent", function () {
      return ArtistViewComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _artist_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../artist.service */
    "./src/app/artist.service.ts");

    var ArtistViewComponent =
    /*#__PURE__*/
    function () {
      function ArtistViewComponent(_artistService, route, nextRouter) {
        _classCallCheck(this, ArtistViewComponent);

        this._artistService = _artistService;
        this.route = route;
        this.nextRouter = nextRouter;
        this.artist_data = [];
      }

      _createClass(ArtistViewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this._artistService.getArtists().subscribe(function (data) {
            return _this3.artist_data = data;
          });

          var artistName = this.route.snapshot.paramMap.get('id');
          this.artist_name = artistName;
        }
      }, {
        key: "onSelectArt",
        value: function onSelectArt(art) {
          this.nextRouter.navigate(['/artView', art.art_name]);
        }
      }]);

      return ArtistViewComponent;
    }();

    ArtistViewComponent.ctorParameters = function () {
      return [{
        type: _artist_service__WEBPACK_IMPORTED_MODULE_3__["ArtistService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    ArtistViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-artist-view',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./artist-view.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/artist-view/artist-view.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./artist-view.component.scss */
      "./src/app/artist-view/artist-view.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_artist_service__WEBPACK_IMPORTED_MODULE_3__["ArtistService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], ArtistViewComponent);
    /***/
  },

  /***/
  "./src/app/artist.service.ts":
  /*!***********************************!*\
    !*** ./src/app/artist.service.ts ***!
    \***********************************/

  /*! exports provided: ArtistService */

  /***/
  function srcAppArtistServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArtistService", function () {
      return ArtistService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var ArtistService =
    /*#__PURE__*/
    function () {
      function ArtistService(http) {
        _classCallCheck(this, ArtistService);

        this.http = http;
        this._url = "/assets/database/database.json";
      }

      _createClass(ArtistService, [{
        key: "getArtists",
        value: function getArtists() {
          return this.http.get(this._url);
        }
      }]);

      return ArtistService;
    }();

    ArtistService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    ArtistService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], ArtistService);
    /***/
  },

  /***/
  "./src/app/artists/artists.component.scss":
  /*!************************************************!*\
    !*** ./src/app/artists/artists.component.scss ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppArtistsArtistsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".artists-container {\n  margin-top: 68px;\n  margin-left: 73px;\n  color: #565656;\n}\n.artists-container .heading {\n  font-family: calibri;\n  font-size: 35px;\n  font-weight: 600;\n}\n.artists-container ul li {\n  display: inline;\n  padding-left: 9px;\n  padding-right: 9px;\n  font-size: 25px;\n  font-weight: 500;\n}\n.artists-container ul li a {\n  text-decoration: none;\n  color: #565656;\n  padding-left: 5px;\n  padding-right: 5px;\n}\n.selected {\n  border-bottom: 3px solid red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXJ0aXN0cy9EOlxcUHJvamVjdFxcYW5ndWxhclxcVW5pdmVyc2l0eV9Qcm9qZWN0XFxBcnRTcGFjZS9zcmNcXGFwcFxcYXJ0aXN0c1xcYXJ0aXN0cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXJ0aXN0cy9hcnRpc3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNBRjtBRENFO0VBQ0Usb0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRElJO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFFQSxlQUFBO0VBQ0EsZ0JBQUE7QUNITjtBREtNO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDRixrQkFBQTtBQ0hOO0FEU0E7RUFDRSw0QkFBQTtBQ05GIiwiZmlsZSI6InNyYy9hcHAvYXJ0aXN0cy9hcnRpc3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5hcnRpc3RzLWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luLXRvcDogNjhweDtcclxuICBtYXJnaW4tbGVmdDogNzNweDtcclxuICBjb2xvcjogIzU2NTY1NjtcclxuICAuaGVhZGluZyB7XHJcbiAgICBmb250LWZhbWlseTogY2FsaWJyaTtcclxuICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgfVxyXG5cclxuICB1bHtcclxuXHJcbiAgICBsaSB7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgICAgcGFkZGluZy1sZWZ0OiA5cHg7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDlweDtcclxuXHJcbiAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuXHJcbiAgICAgIGEge1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBjb2xvcjogIzU2NTY1NjtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uc2VsZWN0ZWQge1xyXG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCByZWQ7XHJcbn1cclxuIiwiLmFydGlzdHMtY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogNjhweDtcbiAgbWFyZ2luLWxlZnQ6IDczcHg7XG4gIGNvbG9yOiAjNTY1NjU2O1xufVxuLmFydGlzdHMtY29udGFpbmVyIC5oZWFkaW5nIHtcbiAgZm9udC1mYW1pbHk6IGNhbGlicmk7XG4gIGZvbnQtc2l6ZTogMzVweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5hcnRpc3RzLWNvbnRhaW5lciB1bCBsaSB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgcGFkZGluZy1sZWZ0OiA5cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDlweDtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLmFydGlzdHMtY29udGFpbmVyIHVsIGxpIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjNTY1NjU2O1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xufVxuXG4uc2VsZWN0ZWQge1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgcmVkO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/artists/artists.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/artists/artists.component.ts ***!
    \**********************************************/

  /*! exports provided: ArtistsComponent, Alphabets */

  /***/
  function srcAppArtistsArtistsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArtistsComponent", function () {
      return ArtistsComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Alphabets", function () {
      return Alphabets;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ArtistsComponent =
    /*#__PURE__*/
    function () {
      function ArtistsComponent() {
        _classCallCheck(this, ArtistsComponent);

        this.key = '';
        this.ser = 'A';
      }

      _createClass(ArtistsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "selectKey",
        value: function selectKey(key) {
          this.ser = key;
          console.log(this.ser);
        }
      }]);

      return ArtistsComponent;
    }();

    ArtistsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-artists',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./artists.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/artists/artists.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./artists.component.scss */
      "./src/app/artists/artists.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], ArtistsComponent);

    var Alphabets =
    /*#__PURE__*/
    function () {
      function Alphabets() {
        _classCallCheck(this, Alphabets);
      }

      _createClass(Alphabets, [{
        key: "transform",
        value: function transform(value, args) {
          var res = [];

          for (var i = 0; i < value; i++) {
            res.push(String.fromCharCode(i + 65));
          }

          return res;
        }
      }]);

      return Alphabets;
    }();

    Alphabets = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'alphabets'
    })], Alphabets);
    /***/
  },

  /***/
  "./src/app/home/home.component.scss":
  /*!******************************************!*\
    !*** ./src/app/home/home.component.scss ***!
    \******************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".thumbnail-container {\n  margin-top: 50px;\n  margin-left: 50px;\n}\n.thumbnail-container ul {\n  list-style: none;\n}\n.thumbnail-container .thumbnail {\n  float: left;\n  height: 385px;\n  width: 240px;\n  overflow: hidden;\n  margin-right: 70px;\n  cursor: pointer;\n  transition: 0.2s ease-out all;\n}\n.thumbnail-container .thumbnail img {\n  margin-left: 50%;\n  transform: translateX(-50%);\n}\n.thumbnail-container .thumbnail li {\n  font-family: Century-Gothic;\n  text-align: center;\n  font-size: 20px;\n  font-weight: 0;\n}\n.thumbnail-container .thumbnail:hover {\n  transform: scale(1.05);\n  position: relative;\n  z-index: 100;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9EOlxcUHJvamVjdFxcYW5ndWxhclxcVW5pdmVyc2l0eV9Qcm9qZWN0XFxBcnRTcGFjZS9zcmNcXGFwcFxcaG9tZVxcaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQ0NGO0FEQ0U7RUFDRSxnQkFBQTtBQ0NKO0FERUU7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0FDQUo7QURFSTtFQUNFLGdCQUFBO0VBQ0EsMkJBQUE7QUNBTjtBRElJO0VBQ0UsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDRk47QURNRTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDSkoiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGh1bWJuYWlsLWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxuICBtYXJnaW4tbGVmdDogNTBweDtcclxuXHJcbiAgdWwge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICB9XHJcblxyXG4gIC50aHVtYm5haWwge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBoZWlnaHQ6IDM4NXB4O1xyXG4gICAgd2lkdGg6IDI0MHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG1hcmdpbi1yaWdodDogNzBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246MC4ycyBlYXNlLW91dCBhbGw7XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDUwJTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBsaSB7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBDZW50dXJ5LUdvdGhpYztcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnRodW1ibmFpbDpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06c2NhbGUoMS4wNSk7XHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6MTAwO1xyXG4gIH1cclxufVxyXG4iLCIudGh1bWJuYWlsLWNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xufVxuLnRodW1ibmFpbC1jb250YWluZXIgdWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuLnRodW1ibmFpbC1jb250YWluZXIgLnRodW1ibmFpbCB7XG4gIGZsb2F0OiBsZWZ0O1xuICBoZWlnaHQ6IDM4NXB4O1xuICB3aWR0aDogMjQwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbi1yaWdodDogNzBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2Utb3V0IGFsbDtcbn1cbi50aHVtYm5haWwtY29udGFpbmVyIC50aHVtYm5haWwgaW1nIHtcbiAgbWFyZ2luLWxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xufVxuLnRodW1ibmFpbC1jb250YWluZXIgLnRodW1ibmFpbCBsaSB7XG4gIGZvbnQtZmFtaWx5OiBDZW50dXJ5LUdvdGhpYztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiAwO1xufVxuLnRodW1ibmFpbC1jb250YWluZXIgLnRodW1ibmFpbDpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTAwO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _artist_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../artist.service */
    "./src/app/artist.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent(_artistService, nextRouter) {
        _classCallCheck(this, HomeComponent);

        this._artistService = _artistService;
        this.nextRouter = nextRouter;
        this.artist_data = [];
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this._artistService.getArtists().subscribe(function (data) {
            return _this4.artist_data = data;
          });
        }
      }, {
        key: "onSelectArt",
        value: function onSelectArt(art) {
          this.nextRouter.navigate(['/artView', art.art_name]);
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ctorParameters = function () {
      return [{
        type: _artist_service__WEBPACK_IMPORTED_MODULE_2__["ArtistService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.scss */
      "./src/app/home/home.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_artist_service__WEBPACK_IMPORTED_MODULE_2__["ArtistService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])], HomeComponent);
    /***/
  },

  /***/
  "./src/app/material/material.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/material/material.module.ts ***!
    \*********************************************/

  /*! exports provided: MaterialModule */

  /***/
  function srcAppMaterialMaterialModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MaterialModule", function () {
      return MaterialModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var MaterialComponents = [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"]];

    var MaterialModule = function MaterialModule() {
      _classCallCheck(this, MaterialModule);
    };

    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [MaterialComponents],
      exports: [MaterialComponents]
    })], MaterialModule);
    /***/
  },

  /***/
  "./src/app/nav-bar/nav-bar.component.scss":
  /*!************************************************!*\
    !*** ./src/app/nav-bar/nav-bar.component.scss ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNavBarNavBarComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@import url(\"https://fonts.googleapis.com/css?family=Merienda:400,700&display=swap\");\n@font-face {\n  font-family: Century-Gothic-Bold;\n  src: url('CenturyGothicBold.ttf');\n}\n.nav-bar-header {\n  font-family: \"Merienda\", cursive;\n  font-size: 40px;\n  text-align: center;\n}\n.nav-bar-header a {\n  text-decoration: none;\n  color: #B6150C;\n  font-weight: 1000;\n}\n.nav-bar-menu {\n  display: table;\n  display: table-cell;\n  vertical-align: middle;\n  text-align: center;\n}\n.nav-bar-menu ul li {\n  list-style: none;\n  padding: 10px;\n}\n.nav-bar-menu ul li a {\n  text-decoration: none;\n  font-size: 23px;\n  color: #565656;\n}\n.selected {\n  border-left: 5px solid red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2LWJhci9EOlxcUHJvamVjdFxcYW5ndWxhclxcVW5pdmVyc2l0eV9Qcm9qZWN0XFxBcnRTcGFjZS9zcmNcXGFwcFxcbmF2LWJhclxcbmF2LWJhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtRLG9GQUFBO0FBTFI7RUFDRSxnQ0FBQTtFQUNBLGlDQUFBO0FDRUY7QURHQTtFQUNFLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDREY7QURFRTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtFQUVBLGlCQUFBO0FDREo7QURLQTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUNGRjtBRElJO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0FDRk47QURLTTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNIUjtBRFNBO0VBQ0UsMEJBQUE7QUNORiIsImZpbGUiOiJzcmMvYXBwL25hdi1iYXIvbmF2LWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiBDZW50dXJ5LUdvdGhpYy1Cb2xkO1xyXG4gIHNyYzogdXJsKEQ6XFxQcm9qZWN0XFxhbmd1bGFyXFxVbml2ZXJzaXR5X1Byb2plY3RcXGdhbGxlcnlcXGZvbnRzXFxDZW50dXJ5R290aGljQm9sZC50dGYpO1xyXG59XHJcblxyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1lcmllbmRhOjQwMCw3MDAmZGlzcGxheT1zd2FwJyk7XHJcblxyXG4ubmF2LWJhci1oZWFkZXJ7XHJcbiAgZm9udC1mYW1pbHk6ICdNZXJpZW5kYScsIGN1cnNpdmU7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBhIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiAjQjYxNTBDO1xyXG4gICAgLy8gY29sb3I6ICM1NjU2NTY7XHJcbiAgICBmb250LXdlaWdodDogMTAwMDtcclxuICB9XHJcbn1cclxuXHJcbi5uYXYtYmFyLW1lbnUge1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdWx7XHJcbiAgICBsaXtcclxuICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgcGFkZGluZzogMTBweDtcclxuXHJcbiAgICAgIC8vYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCByZWQ7XHJcbiAgICAgIGF7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjNweDtcclxuICAgICAgICBjb2xvcjogIzU2NTY1NjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnNlbGVjdGVkIHtcclxuICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHJlZDtcclxufVxyXG4iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1NZXJpZW5kYTo0MDAsNzAwJmRpc3BsYXk9c3dhcFwiKTtcbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogQ2VudHVyeS1Hb3RoaWMtQm9sZDtcbiAgc3JjOiB1cmwoRDpcXFByb2plY3RcXGFuZ3VsYXJcXFVuaXZlcnNpdHlfUHJvamVjdFxcZ2FsbGVyeVxcZm9udHNcXENlbnR1cnlHb3RoaWNCb2xkLnR0Zik7XG59XG4ubmF2LWJhci1oZWFkZXIge1xuICBmb250LWZhbWlseTogXCJNZXJpZW5kYVwiLCBjdXJzaXZlO1xuICBmb250LXNpemU6IDQwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5uYXYtYmFyLWhlYWRlciBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogI0I2MTUwQztcbiAgZm9udC13ZWlnaHQ6IDEwMDA7XG59XG5cbi5uYXYtYmFyLW1lbnUge1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLm5hdi1iYXItbWVudSB1bCBsaSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4ubmF2LWJhci1tZW51IHVsIGxpIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtc2l6ZTogMjNweDtcbiAgY29sb3I6ICM1NjU2NTY7XG59XG5cbi5zZWxlY3RlZCB7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgcmVkO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/nav-bar/nav-bar.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/nav-bar/nav-bar.component.ts ***!
    \**********************************************/

  /*! exports provided: NavBarComponent */

  /***/
  function srcAppNavBarNavBarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavBarComponent", function () {
      return NavBarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var NavBarComponent =
    /*#__PURE__*/
    function () {
      function NavBarComponent(router) {
        _classCallCheck(this, NavBarComponent);

        this.router = router;
        this.homeSelected = true;
        this.artistsSelected = false;
        this.aboutSelected = false;
      }

      _createClass(NavBarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "selectedFunction",
        value: function selectedFunction(x) {
          this.homeSelected = false;
          this.artistsSelected = false;
          this.aboutSelected = false;
          console.log('clicked');
          console.log(x);
          console.log(this.router.url);

          switch (x) {
            case 1:
              {
                this.homeSelected = true;
                break;
              }

            case 2:
              {
                this.artistsSelected = true;
                break;
              }

            case 3:
              {
                this.aboutSelected = true;
                break;
              }

            default:
              {
                console.log('Default Case selected in switch case');
              }
          }
        }
      }]);

      return NavBarComponent;
    }();

    NavBarComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    NavBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-nav-bar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./nav-bar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/nav-bar/nav-bar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./nav-bar.component.scss */
      "./src/app/nav-bar/nav-bar.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], NavBarComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\Project\angular\University_Project\ArtSpace\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map