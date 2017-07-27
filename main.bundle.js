webpackJsonp([1,4],{

/***/ 1025:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(786);


/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export AlertType */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Alert; });
var AlertType;
(function (AlertType) {
    AlertType[AlertType["failure"] = 0] = "failure";
    AlertType[AlertType["success"] = 1] = "success";
})(AlertType || (AlertType = {}));
var Alert = (function () {
    function Alert(title, msg, type) {
        this.type = AlertType.failure;
        this.title = '';
        this.msg = '';
        this.closable = true;
        this.title = title;
        this.msg = msg;
        if (type) {
            this.type = type;
        }
    }
    return Alert;
}());
//# sourceMappingURL=/home/ubuntu/capsulecd-web-v2/src/alert.js.map

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(483);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















// If you need to support the browsers/features below, uncomment the import
// and run `npm install import-name-here';
// Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html
// Needed for: IE9
// import 'classlist.js';
// Animations
// Needed for: All but Chrome and Firefox, Not supported in IE9
// import 'web-animations-js';
// Date, currency, decimal and percent pipes
// Needed for: All but Chrome, Firefox, Edge, IE11 and Safari 10
// import 'intl';
// NgClass on SVG elements
// Needed for: IE10, IE11
// import 'classlist.js';
//# sourceMappingURL=/home/ubuntu/capsulecd-web-v2/src/polyfills.js.map

/***/ }),

/***/ 569:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environments_environment__ = __webpack_require__(571);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppSettings; });

var AppSettings = (function () {
    function AppSettings() {
    }
    Object.defineProperty(AppSettings, "API_ENDPOINT", {
        get: function () { return 'https://api.capsulecd.com/' + __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].apiVersion; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppSettings, "DOCKER_IMAGES", {
        //
        // public static get API_VERSION(): string { return 'beta' }
        // public static get API_ENDPOINT(): string { return 'https://api.capsulecd.com/' + AppSettings.API_VERSION; }
        get: function () {
            return {
                'default': {
                    display: 'Custom',
                    image: 'analogj/capsulecd',
                    recommendedSecrets: []
                },
                'chef': {
                    display: 'Chef',
                    image: 'analogj/capsulecd:chef',
                    recommendedSecrets: ['CAPSULE_CHEF_SUPERMARKET_USERNAME', 'CAPSULE_CHEF_SUPERMARKET_KEY', 'CAPSULE_CHEF_SUPERMARKET_TYPE']
                },
                'golang': {
                    display: 'Golang',
                    image: 'analogj/capsulecd:golang',
                    recommendedSecrets: []
                },
                'node': {
                    display: 'Node',
                    image: 'analogj/capsulecd:node',
                    recommendedSecrets: ['CAPSULE_NPM_AUTH_TOKEN']
                },
                'python': {
                    display: 'Python',
                    image: 'analogj/capsulecd:python',
                    recommendedSecrets: ['CAPSULE_PYPI_USERNAME', 'CAPSULE_PYPI_PASSWORD']
                },
                'ruby': {
                    display: 'Ruby',
                    image: 'analogj/capsulecd:ruby',
                    recommendedSecrets: ['CAPSULE_RUBYGEMS_API_KEY']
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    return AppSettings;
}());
//# sourceMappingURL=/home/ubuntu/capsulecd-web-v2/src/app-settings.js.map

/***/ }),

/***/ 570:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_ReplaySubject__ = __webpack_require__(966);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_ReplaySubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_ReplaySubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CacheService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//Designed around http://stackoverflow.com/a/36413003/1157633
var CacheService = (function () {
    function CacheService() {
        this._cache = {};
    }
    CacheService.prototype.get = function (cacheKey) {
        return this._cache[cacheKey];
    };
    CacheService.prototype.put = function (cacheKey, observable) {
        var currentSubject = this.get(cacheKey);
        if (!currentSubject) {
            this._cache[cacheKey] = new __WEBPACK_IMPORTED_MODULE_0_rxjs_ReplaySubject__["ReplaySubject"](1);
            currentSubject = this._cache[cacheKey]; //if the current cacheKey doesn't exist in the cache, lets ensure that we create it.
        }
        observable.subscribe(function (data) { return currentSubject.next(data); }, function (error) { return currentSubject.error(error); }, function () { return currentSubject.complete(); });
        return currentSubject;
    };
    CacheService.prototype.delete = function (cacheKey) {
        delete this._cache[cacheKey];
    };
    CacheService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], CacheService);
    return CacheService;
}());
//# sourceMappingURL=/home/ubuntu/capsulecd-web-v2/src/cache.service.js.map

/***/ }),

/***/ 571:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false,
    apiVersion: 'beta'
};
//# sourceMappingURL=/home/ubuntu/capsulecd-web-v2/src/environment.js.map

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_jwt__ = __webpack_require__(572);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_settings__ = __webpack_require__(569);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_cache_service__ = __webpack_require__(570);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ApiService = (function () {
    function ApiService(authHttp, http, cacheService) {
        this.authHttp = authHttp;
        this.http = http;
        this.cacheService = cacheService;
    }
    //Helper functions
    ApiService.prototype.extractData = function (res) {
        var body = res.json();
        return body.data || {};
    };
    ApiService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_2__angular_http__["Response"]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return errMsg;
    };
    ApiService.prototype.cacheKey = function (method, url, query) {
        return '[' + method + ']' + url + '?' + (query || {}).toString();
    };
    // Unauthenticated functions
    ApiService.prototype.loggedIn = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_angular2_jwt__["tokenNotExpired"])();
    };
    ApiService.prototype.serviceType = function () {
        return localStorage.getItem('service_type');
    };
    ApiService.prototype.authConnect = function (serviceType) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].API_ENDPOINT + "/connect/" + serviceType)
            .map(this.extractData)
            .catch(this.handleError);
    };
    ApiService.prototype.authCallback = function (serviceType, queryParams) {
        var params = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["URLSearchParams"]();
        for (var key in queryParams) {
            var value = queryParams[key];
            params.set(key, value);
        }
        console.log(params);
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].API_ENDPOINT + "/callback/" + serviceType, {
            search: params
        })
            .map(this.extractData)
            .catch(this.handleError);
    };
    ApiService.prototype.fetchDockerImage = function (dockerImage) {
        var params = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["URLSearchParams"]();
        params.set('query', dockerImage);
        return this.http.get("//crossorigin.me/https://cloud.docker.com/v2/search/repositories/", {
            search: params
        })
            .map(function (res) {
            var body = res.json();
            return body.results || [];
        })
            .catch(this.handleError);
    };
    // Authenticated functions
    ApiService.prototype.getProjects = function () {
        var url = __WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].API_ENDPOINT + "/project";
        var cacheKey = this.cacheKey('GET', url);
        return this.cacheService.get(cacheKey) || this.cacheService.put(cacheKey, this.authHttp.get(url)
            .map(this.extractData)
            .catch(this.handleError));
    };
    ApiService.prototype.getProject = function (orgId, repoId) {
        var url = __WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].API_ENDPOINT + "/project/" + this.serviceType() + "/" + orgId + "/" + repoId;
        var cacheKey = this.cacheKey('GET', url);
        return this.cacheService.get(cacheKey) || this.cacheService.put(cacheKey, this.authHttp.get(url)
            .map(this.extractData)
            .catch(this.handleError));
    };
    ApiService.prototype.createProject = function (orgId, repoId) {
        return this.authHttp.post(__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].API_ENDPOINT + "/project/" + this.serviceType() + "/" + orgId + "/" + repoId, {})
            .map(this.extractData)
            .catch(this.handleError);
    };
    ApiService.prototype.editProject = function (orgId, repoId, payload) {
        return this.authHttp.put(__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].API_ENDPOINT + "/project/" + this.serviceType() + "/" + orgId + "/" + repoId, payload)
            .map(this.extractData)
            .catch(this.handleError);
    };
    ApiService.prototype.deleteProject = function (orgId, repoId) {
        return this.authHttp.delete(__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].API_ENDPOINT + "/project/" + this.serviceType() + "/" + orgId + "/" + repoId)
            .map(this.extractData)
            .catch(this.handleError);
    };
    ApiService.prototype.publishProject = function (orgId, repoId, prNumber, settings) {
        return this.authHttp.post(__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].API_ENDPOINT + "/publish/" + this.serviceType() + "/" + orgId + "/" + repoId + "/" + prNumber, settings || {})
            .map(this.extractData)
            .catch(this.handleError);
    };
    ApiService.prototype.getPublishLogs = function (orgId, repoId, prNumber, since) {
        var params = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["URLSearchParams"]();
        if (since) {
            params.set('since', since.toString());
        }
        return this.authHttp.get(__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].API_ENDPOINT + "/logs/" + this.serviceType() + "/" + orgId + "/" + repoId + "/" + prNumber, { search: params })
            .map(this.extractData)
            .catch(this.handleError);
    };
    ApiService.prototype.fetchOrgs = function (page) {
        var params = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["URLSearchParams"]();
        params.set('page', (page || 0).toString());
        var url = __WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].API_ENDPOINT + "/fetch/" + this.serviceType() + "/orgs";
        var cacheKey = this.cacheKey('GET', url, params);
        return this.cacheService.get(cacheKey) || this.cacheService.put(cacheKey, this.authHttp.get(url, { search: params })
            .map(this.extractData)
            .catch(this.handleError));
    };
    ApiService.prototype.fetchOrgRepos = function (orgId, page) {
        var params = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["URLSearchParams"]();
        params.set('page', (page || 0).toString());
        var url = __WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].API_ENDPOINT + "/fetch/" + this.serviceType() + "/orgs/" + orgId + "/repos";
        var cacheKey = this.cacheKey('GET', url, params);
        return this.cacheService.get(cacheKey) || this.cacheService.put(cacheKey, this.authHttp.get(url, { search: params })
            .map(this.extractData)
            .catch(this.handleError));
    };
    ApiService.prototype.fetchOrgRepoPullRequests = function (orgId, repoId, page) {
        var params = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["URLSearchParams"]();
        params.set('page', (page || 0).toString());
        var url = __WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].API_ENDPOINT + "/fetch/" + this.serviceType() + "/orgs/" + orgId + "/repos/" + repoId + "/pullrequests";
        var cacheKey = this.cacheKey('GET', url, params);
        return this.cacheService.get(cacheKey) || this.cacheService.put(cacheKey, this.authHttp.get(url, { search: params })
            .map(this.extractData)
            .catch(this.handleError));
    };
    ApiService.prototype.fetchOrgRepoPullRequest = function (orgId, repoId, prNumber) {
        var url = __WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].API_ENDPOINT + "/fetch/" + this.serviceType() + "/orgs/" + orgId + "/repos/" + repoId + "/pullrequests/" + prNumber;
        var cacheKey = this.cacheKey('GET', url);
        return this.cacheService.get(cacheKey) || this.cacheService.put(cacheKey, this.authHttp.get(url)
            .map(this.extractData)
            .catch(this.handleError));
    };
    ApiService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_jwt__["AuthHttp"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angular2_jwt__["AuthHttp"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_cache_service__["a" /* CacheService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_cache_service__["a" /* CacheService */]) === 'function' && _c) || Object])
    ], ApiService);
    return ApiService;
    var _a, _b, _c;
}());
//# sourceMappingURL=/home/ubuntu/capsulecd-web-v2/src/api.service.js.map

/***/ }),

/***/ 785:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 785;


/***/ }),

/***/ 786:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(872);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(571);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(903);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/home/ubuntu/capsulecd-web-v2/src/main.js.map

/***/ }),

/***/ 902:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rxjs_operators__ = __webpack_require__(914);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(viewContainerRef) {
        this.title = 'app works!';
        // You need this small hack in order to catch application root view container ref
        this.viewContainerRef = viewContainerRef;
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(956),
            styles: [__webpack_require__(947)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === 'function' && _a) || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());
//# sourceMappingURL=/home/ubuntu/capsulecd-web-v2/src/app.component.js.map

/***/ }),

/***/ 903:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(902);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__partials_footer_footer_component__ = __webpack_require__(909);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard_component__ = __webpack_require__(906);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__project_create_project_create_component__ = __webpack_require__(910);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__project_edit_project_edit_component__ = __webpack_require__(913);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__project_deploy_project_deploy_component__ = __webpack_require__(912);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__auth_connect_auth_connect_component__ = __webpack_require__(905);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__auth_callback_auth_callback_component__ = __webpack_require__(904);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_api_service__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_cache_service__ = __webpack_require__(570);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_auth_guard_service__ = __webpack_require__(915);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angular2_jwt__ = __webpack_require__(572);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angular2_moment__ = __webpack_require__(918);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_angular2_infinite_scroll__ = __webpack_require__(916);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_angular2_infinite_scroll___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_angular2_infinite_scroll__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__project_deploy_logs_project_deploy_logs_component__ = __webpack_require__(911);
/* unused harmony export getAuthHttp */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





















function getAuthHttp(http) {
    return new __WEBPACK_IMPORTED_MODULE_17_angular2_jwt__["AuthHttp"](new __WEBPACK_IMPORTED_MODULE_17_angular2_jwt__["AuthConfig"]({
        noJwtError: true,
        headerPrefix: 'JWT',
        tokenGetter: (function () { return localStorage.getItem('id_token'); }),
        globalHeaders: [{ 'Content-Type': 'application/json' }]
    }), http);
}
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__partials_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_9__project_create_project_create_component__["a" /* ProjectCreateComponent */],
                __WEBPACK_IMPORTED_MODULE_10__project_edit_project_edit_component__["a" /* ProjectEditComponent */],
                __WEBPACK_IMPORTED_MODULE_11__project_deploy_project_deploy_component__["a" /* ProjectDeployComponent */],
                __WEBPACK_IMPORTED_MODULE_12__auth_connect_auth_connect_component__["a" /* AuthConnectComponent */],
                __WEBPACK_IMPORTED_MODULE_13__auth_callback_auth_callback_component__["a" /* AuthCallbackComponent */],
                __WEBPACK_IMPORTED_MODULE_20__project_deploy_logs_project_deploy_logs_component__["a" /* ProjectDeployLogsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_18_angular2_moment__["MomentModule"],
                __WEBPACK_IMPORTED_MODULE_19_angular2_infinite_scroll__["InfiniteScrollModule"],
                __WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap__["a" /* Ng2BootstrapModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_7__angular_router__["a" /* RouterModule */].forRoot([
                    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_12__auth_connect_auth_connect_component__["a" /* AuthConnectComponent */] },
                    { path: 'auth/connect', component: __WEBPACK_IMPORTED_MODULE_12__auth_connect_auth_connect_component__["a" /* AuthConnectComponent */] },
                    { path: 'auth/callback/:serviceType', component: __WEBPACK_IMPORTED_MODULE_13__auth_callback_auth_callback_component__["a" /* AuthCallbackComponent */] },
                    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16__services_auth_guard_service__["a" /* AuthGuard */]] },
                    { path: 'project/create', component: __WEBPACK_IMPORTED_MODULE_9__project_create_project_create_component__["a" /* ProjectCreateComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16__services_auth_guard_service__["a" /* AuthGuard */]] },
                    { path: 'project/:serviceType/:orgId/:repoId/edit', component: __WEBPACK_IMPORTED_MODULE_10__project_edit_project_edit_component__["a" /* ProjectEditComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16__services_auth_guard_service__["a" /* AuthGuard */]] },
                    { path: 'project/:serviceType/:orgId/:repoId/pullrequests/:prNumber', component: __WEBPACK_IMPORTED_MODULE_11__project_deploy_project_deploy_component__["a" /* ProjectDeployComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16__services_auth_guard_service__["a" /* AuthGuard */]] },
                    { path: 'project/:serviceType/:orgId/:repoId/pullrequests/:prNumber/logs', component: __WEBPACK_IMPORTED_MODULE_20__project_deploy_logs_project_deploy_logs_component__["a" /* ProjectDeployLogsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16__services_auth_guard_service__["a" /* AuthGuard */]] },
                    { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
                    // { path: '**', component: PageNotFoundComponent }
                    { path: '**', redirectTo: 'login' }
                ])
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_14__services_api_service__["a" /* ApiService */],
                __WEBPACK_IMPORTED_MODULE_15__services_cache_service__["a" /* CacheService */],
                __WEBPACK_IMPORTED_MODULE_16__services_auth_guard_service__["a" /* AuthGuard */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_17_angular2_jwt__["AuthHttp"],
                    useFactory: getAuthHttp,
                    deps: [__WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"]]
                }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/home/ubuntu/capsulecd-web-v2/src/app.module.js.map

/***/ }),

/***/ 904:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_service__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_bootstrap__ = __webpack_require__(455);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthCallbackComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthCallbackComponent = (function () {
    function AuthCallbackComponent(apiService, router, activatedRoute) {
        this.apiService = apiService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.successfulCallback = true;
    }
    AuthCallbackComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.childModal.show();
        // process the query string for the code
        console.log('GETTING QUERY STRING PARAMS');
        console.log(this.activatedRoute.snapshot.params);
        console.log(this.activatedRoute.snapshot.queryParams);
        this.apiService.authCallback(this.activatedRoute.snapshot.params['serviceType'], this.activatedRoute.snapshot.queryParams)
            .subscribe(function (data) {
            console.log(data);
            localStorage.setItem('id_token', data.token); //set the JWT token
            localStorage.setItem('service_type', data.service_type);
            _this.router.navigate(['/dashboard']);
        }, function (error) { return console.log(error); });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('childModal'), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_ng2_bootstrap__["b" /* ModalDirective */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_ng2_bootstrap__["b" /* ModalDirective */]) === 'function' && _a) || Object)
    ], AuthCallbackComponent.prototype, "childModal", void 0);
    AuthCallbackComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-auth-callback',
            template: __webpack_require__(957),
            styles: [__webpack_require__(948)]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === 'function' && _d) || Object])
    ], AuthCallbackComponent);
    return AuthCallbackComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/home/ubuntu/capsulecd-web-v2/src/auth-callback.component.js.map

/***/ }),

/***/ 905:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_service__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_bootstrap__ = __webpack_require__(455);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthConnectComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthConnectComponent = (function () {
    function AuthConnectComponent(apiService) {
        this.apiService = apiService;
        this.loading = {
            github: false,
            bitbucket: false
        };
    }
    AuthConnectComponent.prototype.ngAfterViewInit = function () {
        this.childModal.show();
    };
    AuthConnectComponent.prototype.loginWith = function (serviceType) {
        var _this = this;
        console.log(serviceType);
        this.loading[serviceType] = true;
        this.apiService.authConnect(serviceType)
            .subscribe(function (data) {
            console.log(data);
            window.location.href = data.url;
        }, function (error) { return console.log(error); }, function () { return _this.loading[serviceType] = false; });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('childModal'), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_bootstrap__["b" /* ModalDirective */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_ng2_bootstrap__["b" /* ModalDirective */]) === 'function' && _a) || Object)
    ], AuthConnectComponent.prototype, "childModal", void 0);
    AuthConnectComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-auth-connect',
            template: __webpack_require__(958),
            styles: [__webpack_require__(949)]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */]) === 'function' && _b) || Object])
    ], AuthConnectComponent);
    return AuthConnectComponent;
    var _a, _b;
}());
//# sourceMappingURL=/home/ubuntu/capsulecd-web-v2/src/auth-connect.component.js.map

/***/ }),

/***/ 906:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_project__ = __webpack_require__(908);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_service__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_alert__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(67);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DashboardComponent = (function () {
    function DashboardComponent(apiService, router) {
        this.apiService = apiService;
        this.router = router;
        this.loading = {
            projects: true,
            pullrequests: {}
        };
        this.projects = [];
        this.selectedProject = new __WEBPACK_IMPORTED_MODULE_1__models_project__["a" /* Project */]();
        this.projectPullRequests = [];
        this.alerts = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiService.getProjects().subscribe(function (data) {
            console.log(data);
            _this.projects = data;
            if (_this.projects.length == 0) {
                _this.router.navigate(['/project/create']);
            }
            else {
                _this.selectedProject = _this.projects[0];
                _this.getProjectPullRequests();
            }
        }, function (error) { return _this.alerts.push(new __WEBPACK_IMPORTED_MODULE_3__models_alert__["a" /* Alert */]('Error retrieving projects', error.message)); }, function () { return _this.loading.projects = false; });
    };
    DashboardComponent.prototype.getProjectPullRequests = function () {
        var _this = this;
        this.loading.pullrequests[this.selectedProject.RepoId] = true;
        this.apiService.fetchOrgRepoPullRequests(this.selectedProject.OrgId, this.selectedProject.RepoId).subscribe(function (data) {
            console.log(data);
            _this.projectPullRequests = data;
        }, function (error) { return _this.alerts.push(new __WEBPACK_IMPORTED_MODULE_3__models_alert__["a" /* Alert */]('Error retrieving pull requests', error.message)); }, function () { return _this.loading.pullrequests[_this.selectedProject.RepoId] = false; });
    };
    DashboardComponent.prototype.closeAlert = function (i) {
        this.alerts.splice(i, 1);
    };
    DashboardComponent.prototype.showProject = function (project) {
        this.selectedProject = project;
        this.getProjectPullRequests();
    };
    DashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(959),
            styles: [__webpack_require__(950)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], DashboardComponent);
    return DashboardComponent;
    var _a, _b;
}());
//# sourceMappingURL=/home/ubuntu/capsulecd-web-v2/src/dashboard.component.js.map

/***/ }),

/***/ 907:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContainerState; });
var ContainerState = (function () {
    function ContainerState() {
        this.Status = 'pending';
        this.Running = true;
    }
    return ContainerState;
}());
//# sourceMappingURL=/home/ubuntu/capsulecd-web-v2/src/container-state.js.map

/***/ }),

/***/ 908:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Project; });
var Project = (function () {
    function Project() {
    }
    return Project;
}());
//# sourceMappingURL=/home/ubuntu/capsulecd-web-v2/src/project.js.map

/***/ }),

/***/ 909:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'capsule-footer',
            template: __webpack_require__(960),
            styles: [__webpack_require__(951)]
        }), 
        __metadata('design:paramtypes', [])
    ], FooterComponent);
    return FooterComponent;
}());
//# sourceMappingURL=/home/ubuntu/capsulecd-web-v2/src/footer.component.js.map

/***/ }),

/***/ 910:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_service__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_alert__ = __webpack_require__(150);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectCreateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProjectCreateComponent = (function () {
    function ProjectCreateComponent(apiService, router) {
        this.apiService = apiService;
        this.router = router;
        this.orgs = [];
        this.orgRepos = [];
        this.orgReposPage = 1;
        this.orgReposAll = false;
        this.selectedOrgIndex = 0;
        this.loading = {
            fetchOrgs: true,
            fetchOrgRepos: false,
            createProject: false
        };
        this.alerts = [];
    }
    ProjectCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiService.fetchOrgs()
            .subscribe(function (data) {
            console.log(data);
            _this.orgs = data;
            _this.selectedOrgIndex = 0;
            _this.fetchSelectedOrgRepos();
        }, function (error) { return _this.alerts.push(new __WEBPACK_IMPORTED_MODULE_3__models_alert__["a" /* Alert */]('Error retrieving organizations', error.message)); }, function () { return _this.loading.fetchOrgs = false; });
    };
    ProjectCreateComponent.prototype.closeAlert = function (i) {
        this.alerts.splice(i, 1);
    };
    ProjectCreateComponent.prototype.resetPagination = function () {
        this.orgReposPage = 1; //this is the starting page when retriving repos from the api
        this.orgReposAll = false; // this deterimes if all repos for the selected Org have been retrived from Github
        this.loading.fetchOrgRepos = false; //this specifies if there is currently a repo request in progress.
    };
    ProjectCreateComponent.prototype.fetchSelectedOrgRepos = function () {
        var _this = this;
        this.resetPagination();
        this.loading.fetchOrgRepos = true;
        this.apiService.fetchOrgRepos(this.orgs[this.selectedOrgIndex].login, this.orgReposPage)
            .subscribe(function (data) {
            console.log(data);
            _this.orgRepos = data;
        }, function (error) { return _this.alerts.push(new __WEBPACK_IMPORTED_MODULE_3__models_alert__["a" /* Alert */]('Error retrieving organization repositories', error.message)); }, function () { return _this.loading.fetchOrgRepos = false; });
    };
    ProjectCreateComponent.prototype.fetchSelectedOrgReposNextPage = function () {
        var _this = this;
        if (this.loading.fetchOrgRepos)
            return;
        if (this.orgReposAll)
            return;
        this.loading.fetchOrgRepos = true;
        this.orgReposPage += 1;
        this.apiService.fetchOrgRepos(this.orgs[this.selectedOrgIndex].login, this.orgReposPage)
            .subscribe(function (data) {
            console.log(data);
            if (data.length == 0) {
                _this.orgReposAll = true;
            }
            else {
                _this.orgRepos = _this.orgRepos.concat(data);
            }
        }, function (error) { return _this.alerts.push(new __WEBPACK_IMPORTED_MODULE_3__models_alert__["a" /* Alert */]('Error retrieving organization repositories', error.message)); }, function () { return _this.loading.fetchOrgRepos = false; });
    };
    ProjectCreateComponent.prototype.selectNextOrg = function (nextIndex) {
        this.selectedOrgIndex = (nextIndex % (this.orgs.length - 1));
        this.fetchSelectedOrgRepos();
    };
    ProjectCreateComponent.prototype.selectPrevOrg = function (prevIndex) {
        if (prevIndex < 0) {
            this.selectedOrgIndex = this.orgs.length - 1;
        }
        else {
            this.selectedOrgIndex = prevIndex;
        }
        this.fetchSelectedOrgRepos();
    };
    ProjectCreateComponent.prototype.createProject = function (orgId, repoId) {
        var _this = this;
        this.loading.createProject = true;
        this.apiService.createProject(orgId, repoId)
            .subscribe(function (data) {
            console.log(data);
            _this.router.navigate([("/project/" + _this.apiService.serviceType() + "/" + orgId + "/" + repoId + "/edit")]);
        }, function (error) { return _this.alerts.push(new __WEBPACK_IMPORTED_MODULE_3__models_alert__["a" /* Alert */]('Error creating new project', error.message)); }, function () { return _this.loading.createProject = false; });
    };
    ProjectCreateComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-project-create',
            template: __webpack_require__(961),
            styles: [__webpack_require__(952)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], ProjectCreateComponent);
    return ProjectCreateComponent;
    var _a, _b;
}());
//# sourceMappingURL=/home/ubuntu/capsulecd-web-v2/src/project-create.component.js.map

/***/ }),

/***/ 911:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_service__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_alert__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_TimerObservable__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_TimerObservable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_TimerObservable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_container_state__ = __webpack_require__(907);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectDeployLogsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProjectDeployLogsComponent = (function () {
    function ProjectDeployLogsComponent(apiService, activatedRoute) {
        this.apiService = apiService;
        this.activatedRoute = activatedRoute;
        this.projectData = {};
        this.pullRequest = {};
        this.logs = [];
        this.alerts = [];
        this.loading = {
            logs: true,
            project: true,
            pullRequest: true
        };
        this.firstRequest = true;
        this.containerState = new __WEBPACK_IMPORTED_MODULE_5__models_container_state__["a" /* ContainerState */]();
    }
    ProjectDeployLogsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.repoId = this.activatedRoute.snapshot.params['repoId'];
        this.orgId = this.activatedRoute.snapshot.params['orgId'];
        this.prNumber = this.activatedRoute.snapshot.params['prNumber'];
        var timer = __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_TimerObservable__["TimerObservable"].create(0, 3000); //start at 0ms and re-run every 3 seconds (3000ms)
        this.logSubscription = timer.subscribe(function (t) {
            _this.apiService.getPublishLogs(_this.orgId, _this.repoId, _this.prNumber, (_this.firstRequest ? 0 : Math.round(Date.now() / 1000))) //we need to send timestamp in milliseconds, not seconds.
                .subscribe(function (data) {
                _this.containerState = data.State;
                if (!data.Lines || data.Lines.length == 0) {
                    _this.logSubscription.unsubscribe();
                }
                else {
                    _this.logs = _this.logs.concat(data.Lines);
                }
            }, function (error) {
                _this.alerts.push(new __WEBPACK_IMPORTED_MODULE_3__models_alert__["a" /* Alert */]('Error retrieving project', error.message));
                _this.logSubscription.unsubscribe();
            }, function () {
                _this.loading.logs = false;
                _this.firstRequest = false;
            });
        });
        this.apiService.getProject(this.orgId, this.repoId)
            .subscribe(function (data) {
            console.log(data);
            _this.projectData = data.Settings || _this.projectData;
        }, function (error) { return _this.alerts.push(new __WEBPACK_IMPORTED_MODULE_3__models_alert__["a" /* Alert */]('Error retrieving project', error.message)); }, function () { return _this.loading.project = false; });
        this.apiService.fetchOrgRepoPullRequest(this.orgId, this.repoId, this.prNumber)
            .subscribe(function (data) {
            console.log(data);
            _this.pullRequest = data;
        }, function (error) { return _this.alerts.push(new __WEBPACK_IMPORTED_MODULE_3__models_alert__["a" /* Alert */]('Error retrieving pull request', error.message)); }, function () { return _this.loading.pullRequest = false; });
    };
    ProjectDeployLogsComponent.prototype.ngOnDestroy = function () {
        this.logSubscription.unsubscribe();
    };
    ProjectDeployLogsComponent.prototype.closeAlert = function (i) {
        this.alerts.splice(i, 1);
    };
    ProjectDeployLogsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-project-deploy-logs',
            template: __webpack_require__(962),
            styles: [__webpack_require__(953)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* ActivatedRoute */]) === 'function' && _b) || Object])
    ], ProjectDeployLogsComponent);
    return ProjectDeployLogsComponent;
    var _a, _b;
}());
//# sourceMappingURL=/home/ubuntu/capsulecd-web-v2/src/project-deploy-logs.component.js.map

/***/ }),

/***/ 912:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_service__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_alert__ = __webpack_require__(150);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectDeployComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProjectDeployComponent = (function () {
    function ProjectDeployComponent(apiService, router, activatedRoute) {
        this.apiService = apiService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.projectData = {};
        this.projectSecrets = {};
        this.pullRequest = {};
        this.alerts = [];
        this.loading = {
            project: true,
            pullRequest: true,
            createRelease: false
        };
        this.versionIncr = 'patch';
    }
    ProjectDeployComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.repoId = this.activatedRoute.snapshot.params['repoId'];
        this.orgId = this.activatedRoute.snapshot.params['orgId'];
        this.prNumber = this.activatedRoute.snapshot.params['prNumber'];
        this.apiService.getProject(this.orgId, this.repoId)
            .subscribe(function (data) {
            console.log(data);
            _this.projectData = data.Settings || _this.projectData;
            _this.projectSecrets = data.Secrets || _this.projectSecrets;
            _this.versionIncr = _this.projectData.versionIncr || _this.versionIncr;
        }, function (error) { return _this.alerts.push(new __WEBPACK_IMPORTED_MODULE_3__models_alert__["a" /* Alert */]('Error retrieving project', error.message)); }, function () { return _this.loading.project = false; });
        this.apiService.fetchOrgRepoPullRequest(this.orgId, this.repoId, this.prNumber)
            .subscribe(function (data) {
            console.log(data);
            _this.pullRequest = data;
        }, function (error) { return _this.alerts.push(new __WEBPACK_IMPORTED_MODULE_3__models_alert__["a" /* Alert */]('Error retrieving pull request', error.message)); }, function () { return _this.loading.pullRequest = false; });
    };
    ProjectDeployComponent.prototype.closeAlert = function (i) {
        this.alerts.splice(i, 1);
    };
    ProjectDeployComponent.prototype.createRelease = function () {
        var _this = this;
        //TODO: this function should also send version increment & custom changelog.
        this.loading.createRelease = true;
        this.apiService.publishProject(this.orgId, this.repoId, this.prNumber, { versionIncr: this.versionIncr })
            .subscribe(function (data) {
            _this.router.navigate([("/project/" + _this.apiService.serviceType() + "/" + _this.orgId + "/" + _this.repoId + "/pullrequests/" + _this.prNumber + "/logs")]);
        }, function (error) { return _this.alerts.push(new __WEBPACK_IMPORTED_MODULE_3__models_alert__["a" /* Alert */]('Error creating new release', error.message)); }, function () { return _this.loading.createRelease = false; });
    };
    ProjectDeployComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-project-deploy',
            template: __webpack_require__(963),
            styles: [__webpack_require__(954)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* ActivatedRoute */]) === 'function' && _c) || Object])
    ], ProjectDeployComponent);
    return ProjectDeployComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/home/ubuntu/capsulecd-web-v2/src/project-deploy.component.js.map

/***/ }),

/***/ 913:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_service__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_settings__ = __webpack_require__(569);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_alert__ = __webpack_require__(150);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProjectEditComponent = (function () {
    function ProjectEditComponent(apiService, activatedRoute) {
        this.apiService = apiService;
        this.activatedRoute = activatedRoute;
        this.projectData = {};
        this.projectSecrets = {};
        this.projectSecretsKeys = [];
        this.defaultSettings = __WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].DOCKER_IMAGES;
        this.defaultSettingsKeys = Object.keys(this.defaultSettings);
        this.secretName = '';
        this.secretValue = '';
        this.alerts = [];
        this.loading = {
            project: true,
            saveSettings: false,
            addSecret: false,
            queryDockerImages: false
        };
        this.dockerImagesNoResults = false;
    }
    ProjectEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.repoId = this.activatedRoute.snapshot.params['repoId'];
        this.orgId = this.activatedRoute.snapshot.params['orgId'];
        this.apiService.getProject(this.orgId, this.repoId)
            .subscribe(function (data) {
            console.log(data);
            _this.projectData = data.Settings || _this.projectData;
            _this.projectSecrets = data.Secrets || _this.projectSecrets;
            _this.projectSecretsKeys = Object.keys(_this.projectSecrets);
        }, function (error) { return _this.alerts.push(new __WEBPACK_IMPORTED_MODULE_5__models_alert__["a" /* Alert */]('Error retrieving project', error.message)); }, function () { return _this.loading.project = false; });
        this.dockerImagesDatasource = __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].create(function (observer) {
            // Runs on every search
            observer.next(_this.projectData.dockerImage);
        }).mergeMap(function (token) { return _this.apiService.fetchDockerImage(token); });
    };
    //TODO: add method to autocomplete docker image lookup
    //TODO: add help text with common secrets for each image/package type
    //TODO: add delete method for secrets.
    ProjectEditComponent.prototype.closeAlert = function (i) {
        this.alerts.splice(i, 1);
    };
    ProjectEditComponent.prototype.packageTypeChanged = function (e) {
        this.projectData.dockerImage = this.defaultSettings[this.projectData.packageType].image;
    };
    ProjectEditComponent.prototype.dockerImagesLoading = function (e) {
        this.loading.queryDockerImages = e;
    };
    ProjectEditComponent.prototype.dockerImagesNoResultsHandler = function (e) {
        this.dockerImagesNoResults = e;
    };
    ProjectEditComponent.prototype.saveSettings = function () {
        var _this = this;
        var payload = {
            "Settings": this.projectData
        };
        this.loading.saveSettings = true;
        this.apiService.editProject(this.orgId, this.repoId, payload)
            .subscribe(function (data) {
            console.log(data);
        }, function (error) { return _this.alerts.push(new __WEBPACK_IMPORTED_MODULE_5__models_alert__["a" /* Alert */]('Error updating project', error.message)); }, function () { return _this.loading.saveSettings = false; });
    };
    ProjectEditComponent.prototype.addSecret = function () {
        var _this = this;
        var payload = {
            "Secrets": {}
        };
        payload.Secrets[this.secretName] = this.secretValue;
        this.loading.addSecret = true;
        this.apiService.editProject(this.orgId, this.repoId, payload)
            .subscribe(function (data) {
            _this.projectSecrets[_this.secretName] = { last4: (_this.secretValue.length > 4) ? _this.secretValue.substr(_this.secretValue.length - 4) : _this.secretValue.substr(_this.secretValue.length - 2) };
            _this.projectSecretsKeys = Object.keys(_this.projectSecrets);
            _this.secretName = '';
            _this.secretValue = '';
        }, function (error) { return _this.alerts.push(new __WEBPACK_IMPORTED_MODULE_5__models_alert__["a" /* Alert */]('Error updating project secrets', error.message)); }, function () { return _this.loading.addSecret = false; });
    };
    ProjectEditComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-project-edit',
            template: __webpack_require__(964),
            styles: [__webpack_require__(955)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* ActivatedRoute */]) === 'function' && _b) || Object])
    ], ProjectEditComponent);
    return ProjectEditComponent;
    var _a, _b;
}());
//# sourceMappingURL=/home/ubuntu/capsulecd-web-v2/src/project-edit.component.js.map

/***/ }),

/***/ 914:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_throw__ = __webpack_require__(971);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch__ = __webpack_require__(973);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime__ = __webpack_require__(760);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__(976);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(761);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__ = __webpack_require__(977);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__ = __webpack_require__(980);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_observable_TimerObservable__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_observable_TimerObservable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_observable_TimerObservable__);
// import 'rxjs/Rx'; // adds ALL RxJS statics & operators to Observable








//# sourceMappingURL=/home/ubuntu/capsulecd-web-v2/src/rxjs-operators.js.map

/***/ }),

/***/ 915:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_service__ = __webpack_require__(69);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
// auth-guard.service.ts
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(apiService, router) {
        this.apiService = apiService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.apiService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__api_service__["a" /* ApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__api_service__["a" /* ApiService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a, _b;
}());
//# sourceMappingURL=/home/ubuntu/capsulecd-web-v2/src/auth-guard.service.js.map

/***/ }),

/***/ 925:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 589,
	"./af.js": 589,
	"./ar": 596,
	"./ar-dz": 590,
	"./ar-dz.js": 590,
	"./ar-kw": 591,
	"./ar-kw.js": 591,
	"./ar-ly": 592,
	"./ar-ly.js": 592,
	"./ar-ma": 593,
	"./ar-ma.js": 593,
	"./ar-sa": 594,
	"./ar-sa.js": 594,
	"./ar-tn": 595,
	"./ar-tn.js": 595,
	"./ar.js": 596,
	"./az": 597,
	"./az.js": 597,
	"./be": 598,
	"./be.js": 598,
	"./bg": 599,
	"./bg.js": 599,
	"./bn": 600,
	"./bn.js": 600,
	"./bo": 601,
	"./bo.js": 601,
	"./br": 602,
	"./br.js": 602,
	"./bs": 603,
	"./bs.js": 603,
	"./ca": 604,
	"./ca.js": 604,
	"./cs": 605,
	"./cs.js": 605,
	"./cv": 606,
	"./cv.js": 606,
	"./cy": 607,
	"./cy.js": 607,
	"./da": 608,
	"./da.js": 608,
	"./de": 611,
	"./de-at": 609,
	"./de-at.js": 609,
	"./de-ch": 610,
	"./de-ch.js": 610,
	"./de.js": 611,
	"./dv": 612,
	"./dv.js": 612,
	"./el": 613,
	"./el.js": 613,
	"./en-au": 614,
	"./en-au.js": 614,
	"./en-ca": 615,
	"./en-ca.js": 615,
	"./en-gb": 616,
	"./en-gb.js": 616,
	"./en-ie": 617,
	"./en-ie.js": 617,
	"./en-nz": 618,
	"./en-nz.js": 618,
	"./eo": 619,
	"./eo.js": 619,
	"./es": 621,
	"./es-do": 620,
	"./es-do.js": 620,
	"./es.js": 621,
	"./et": 622,
	"./et.js": 622,
	"./eu": 623,
	"./eu.js": 623,
	"./fa": 624,
	"./fa.js": 624,
	"./fi": 625,
	"./fi.js": 625,
	"./fo": 626,
	"./fo.js": 626,
	"./fr": 629,
	"./fr-ca": 627,
	"./fr-ca.js": 627,
	"./fr-ch": 628,
	"./fr-ch.js": 628,
	"./fr.js": 629,
	"./fy": 630,
	"./fy.js": 630,
	"./gd": 631,
	"./gd.js": 631,
	"./gl": 632,
	"./gl.js": 632,
	"./gom-latn": 633,
	"./gom-latn.js": 633,
	"./he": 634,
	"./he.js": 634,
	"./hi": 635,
	"./hi.js": 635,
	"./hr": 636,
	"./hr.js": 636,
	"./hu": 637,
	"./hu.js": 637,
	"./hy-am": 638,
	"./hy-am.js": 638,
	"./id": 639,
	"./id.js": 639,
	"./is": 640,
	"./is.js": 640,
	"./it": 641,
	"./it.js": 641,
	"./ja": 642,
	"./ja.js": 642,
	"./jv": 643,
	"./jv.js": 643,
	"./ka": 644,
	"./ka.js": 644,
	"./kk": 645,
	"./kk.js": 645,
	"./km": 646,
	"./km.js": 646,
	"./kn": 647,
	"./kn.js": 647,
	"./ko": 648,
	"./ko.js": 648,
	"./ky": 649,
	"./ky.js": 649,
	"./lb": 650,
	"./lb.js": 650,
	"./lo": 651,
	"./lo.js": 651,
	"./lt": 652,
	"./lt.js": 652,
	"./lv": 653,
	"./lv.js": 653,
	"./me": 654,
	"./me.js": 654,
	"./mi": 655,
	"./mi.js": 655,
	"./mk": 656,
	"./mk.js": 656,
	"./ml": 657,
	"./ml.js": 657,
	"./mr": 658,
	"./mr.js": 658,
	"./ms": 660,
	"./ms-my": 659,
	"./ms-my.js": 659,
	"./ms.js": 660,
	"./my": 661,
	"./my.js": 661,
	"./nb": 662,
	"./nb.js": 662,
	"./ne": 663,
	"./ne.js": 663,
	"./nl": 665,
	"./nl-be": 664,
	"./nl-be.js": 664,
	"./nl.js": 665,
	"./nn": 666,
	"./nn.js": 666,
	"./pa-in": 667,
	"./pa-in.js": 667,
	"./pl": 668,
	"./pl.js": 668,
	"./pt": 670,
	"./pt-br": 669,
	"./pt-br.js": 669,
	"./pt.js": 670,
	"./ro": 671,
	"./ro.js": 671,
	"./ru": 672,
	"./ru.js": 672,
	"./sd": 673,
	"./sd.js": 673,
	"./se": 674,
	"./se.js": 674,
	"./si": 675,
	"./si.js": 675,
	"./sk": 676,
	"./sk.js": 676,
	"./sl": 677,
	"./sl.js": 677,
	"./sq": 678,
	"./sq.js": 678,
	"./sr": 680,
	"./sr-cyrl": 679,
	"./sr-cyrl.js": 679,
	"./sr.js": 680,
	"./ss": 681,
	"./ss.js": 681,
	"./sv": 682,
	"./sv.js": 682,
	"./sw": 683,
	"./sw.js": 683,
	"./ta": 684,
	"./ta.js": 684,
	"./te": 685,
	"./te.js": 685,
	"./tet": 686,
	"./tet.js": 686,
	"./th": 687,
	"./th.js": 687,
	"./tl-ph": 688,
	"./tl-ph.js": 688,
	"./tlh": 689,
	"./tlh.js": 689,
	"./tr": 690,
	"./tr.js": 690,
	"./tzl": 691,
	"./tzl.js": 691,
	"./tzm": 693,
	"./tzm-latn": 692,
	"./tzm-latn.js": 692,
	"./tzm.js": 693,
	"./uk": 694,
	"./uk.js": 694,
	"./ur": 695,
	"./ur.js": 695,
	"./uz": 697,
	"./uz-latn": 696,
	"./uz-latn.js": 696,
	"./uz.js": 697,
	"./vi": 698,
	"./vi.js": 698,
	"./x-pseudo": 699,
	"./x-pseudo.js": 699,
	"./yo": 700,
	"./yo.js": 700,
	"./zh-cn": 701,
	"./zh-cn.js": 701,
	"./zh-hk": 702,
	"./zh-hk.js": 702,
	"./zh-tw": 703,
	"./zh-tw.js": 703
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 925;


/***/ }),

/***/ 947:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 948:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 949:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 950:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 951:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 952:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 953:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 954:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 955:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 956:
/***/ (function(module, exports) {

module.exports = "<!-- HEADER -->\n<header>\n    <a href=\"/\" id=\"logo\"><img src=\"assets/logo_white_medium.png\" alt=\"\"/><img class=\"act\" src=\"assets/logo_black_medium.png\" alt=\"\"/></a>\n    <div class=\"mob-icon\">\n        <span></span>\n    </div>\n    <nav>\n        <ul>\n            <li><a routerLink=\"/dashboard\" routerLinkActive=\"act\" class=\"scroll-to-link\">Dashboard</a></li>\n            <li><a routerLink=\"/project/create\" routerLinkActive=\"act\" class=\"scroll-to-link\">Add Project</a></li>\n        </ul>\n    </nav>\n</header>\n\n\n<div id=\"content-wrapper\">\n    <!-- Routed views go here -->\n    <router-outlet></router-outlet>\n\n</div>\n\n\n"

/***/ }),

/***/ 957:
/***/ (function(module, exports) {

module.exports = "<div class=\"full-page-bg-wrapper\">\n  <div class=\"full-page-bg\"></div>\n</div>\n<!-- Large modal -->\n\n<div bsModal #childModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-lg\">\n    <div class=\"modal-content\" style=\"border-radius:0px;\">\n\n      <div class=\"modal-body\" style=\"padding: 80px\">\n        <div class=\"page-tagline\">\n          <h2 class=\"title\" *ngIf=\"successfulCallback\">Success</h2>\n          <h2 class=\"title\" *ngIf=\"!successfulCallback\">Failure</h2>\n          <div class=\"description\">\n            You have successfully connected your account. Please wait while we redirect you.\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 958:
/***/ (function(module, exports) {

module.exports = "<div class=\"full-page-bg-wrapper\">\n  <div class=\"full-page-bg\"></div>\n</div>\n\n<!-- Large modal -->\n<div bsModal #childModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-lg\">\n    <div class=\"modal-content\" style=\"border-radius:0px;\">\n\n      <div class=\"modal-body\" style=\"padding: 80px\">\n        <div class=\"page-tagline\">\n          <h2 class=\"title\">Sign Into CapsuleCD</h2>\n          <div class=\"description\">\n            If you have already authorized either GitHub or Bitbucket on your CapsuleCD account, then you can click either button to sign in.\n          </div>\n        </div>\n\n        <div style=\"text-align: center; \">\n          <a class=\"button size-2 mr-40\" (click)=\"loginWith('github')\">\n            <span>Github</span>\n            <span *ngIf=\"loading.github\" class=\"glyphicon glyphicon-repeat ml-10 fast-right-spinner\"></span>\n          </a>\n          <a class=\"button size-2\" (click)=\"loginWith('bitbucket')\">\n            <span>Bitbucket</span>\n            <span *ngIf=\"loading.bitbucket\" class=\"glyphicon glyphicon-repeat ml-10 fast-right-spinner\"></span>\n          </a>\n\n        </div>\n\n\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 959:
/***/ (function(module, exports) {

module.exports = "<div class=\"blocks-container\">\n\n  <div class=\"block scroll-to-block\" data-id=\"benefits\">\n    <div class=\"container\">\n      <div class=\"row page-tagline\" style=\"margin-bottom: 0px;\">\n        <div class=\"col-md-6 col-md-offset-3 wow flipInX\" data-wow-delay=\"0.3s\">\n          <h2 class=\"title\">Dashboard</h2>\n          <div class=\"description\">CapsuleCD makes publishing new version of your library simple.\n\n            Select a project, choose a PR to base your new version off of and you're all done.</div>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-lg-10 col-lg-offset-1\">\n          <alert *ngFor=\"let alert of alerts;let i = index\" [type]=\"alert.type\" dismissible=\"true\" (close)=\"closeAlert(i)\">\n            <div class=\"title\">{{ alert?.title}}</div>\n            {{ alert?.msg }}\n          </alert>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-md-3\" style=\"margin-bottom: 50px;\">\n\n          <div class=\"widget-entry\">\n            <h3 class=\"widget-title\">All Projects <span *ngIf=\"loading.projects\" class=\"glyphicon glyphicon-repeat ml-10 fast-right-spinner\"></span>\n            </h3>\n            <div class=\"categories-wrapper\">\n              <span *ngFor=\"let project of projects\" class=\"entry\">\n                <a (click)=\"showProject(project)\" >\n                  <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>{{project.RepoId}}\n                  <span *ngIf=\"loading.pullrequests[project.RepoId]\" class=\"glyphicon glyphicon-repeat ml-10 fast-right-spinner\"></span>\n                </a>\n                <span class=\"number\" [routerLink]=\"['/project/' + selectedProject.ServiceType + '/' + selectedProject.OrgId + '/' + selectedProject.RepoId + '/edit' ]\"><span class=\"glyphicon glyphicon-cog\" aria-hidden=\"true\"></span></span>\n              </span>\n\n            </div>\n          </div>\n        </div>\n\n\n        <div class=\"col-md-9\">\n          <div class=\"typography-article\">\n            <h4>{{selectedProject.Id}} Pull Requests\n              <span *ngIf=\"loading.pullrequests[selectedProject.RepoId]\" class=\"glyphicon glyphicon-repeat ml-10 fast-right-spinner\"></span>\n            </h4>\n          </div>\n          <div class=\"clear\"></div>\n\n          <div class=\"row\" *ngFor=\"let pullRequest of projectPullRequests\">\n\n            <div class=\"pull-request-panel panel-default panel-horizontal typography-article\">\n              <div class=\"panel-heading text-center\" style=\"width:10em;\">\n                <h3 class=\"pr-number\"><a [href]=\"pullRequest.html_url\">#{{pullRequest.number}}</a></h3>\n                <span class=\"pr-date\">{{pullRequest.updated_at | amTimeAgo}}</span>\n                <hr />\n                <div class=\"pr-user\"><a [href]=\"pullRequest.user.html_url\">@{{pullRequest.user.login}}</a></div>\n              </div>\n\n              <div class=\"panel-body\">\n\n                <!--div class=\"col-xs-2 col-md-3 text-center age\">\n                    <img src=\"https://placeholdit.imgix.net/~text?txtsize=40&txt=John%20Doe&w=200&h=200\" class=\"img-circle img-responsive\" alt=\"\" />\n                </div-->\n                <div class=\"col-xs-12 col-md-12 section-box\">\n                  <h4>{{pullRequest.title}}</h4>\n                  <pre class=\"pr-body\">{{pullRequest.body || '...'}}</pre>\n\n                  <a *ngIf=\"selectedProject.Pending[pullRequest.number]\" class=\"button black size-3 pull-right mt-15\" [routerLink]=\"['/project/' + selectedProject.ServiceType + '/' + selectedProject.OrgId + '/' + selectedProject.RepoId + '/pullrequests/' + pullRequest.number + '/logs' ]\"><span>View Logs</span></a>\n                  <a class=\"button size-3 pull-right mt-15 mr-10\" [routerLink]=\"['/project/' + selectedProject.ServiceType + '/' + selectedProject.OrgId + '/' + selectedProject.RepoId + '/pullrequests/' + pullRequest.number ]\"><span>Create Release</span></a>\n\n                </div>\n\n              </div>\n            </div>\n\n          </div>\n\n\n\n          <div class=\"row\" *ngIf=\"projectPullRequests.length == 0\">\n\n            <div class=\"pull-request-panel panel-default panel-horizontal typography-article\">\n              <div class=\"panel-empty text-center\" style=\"width:10em;\">\n                <h3 class=\"pr-number\"><div>No Pull Requests Found</div></h3>\n                <p>Try selecting a different project</p>\n              </div>\n\n            </div>\n\n          </div>\n\n\n\n        </div>\n\n\n\n\n      </div>\n    </div>\n  </div>\n\n\n  <capsule-footer></capsule-footer>\n\n\n</div>"

/***/ }),

/***/ 960:
/***/ (function(module, exports) {

module.exports = "<!-- FOOTER -->\n<footer>\n\n  <div class=\"footer-bottom\">\n    <div class=\"footer-linck\">\n      <a href=\"http://www.capsulecd.com\">Home</a>\n      <a href=\"#\">Privacy Policy</a>\n      <a href=\"http://blog.thesparktree.com\">Blog</a>\n    </div>\n    <div class=\"media-icon\">\n      <a href=\"http://ca.linkedin.com/pub/jason-kulatunga/11/382/337\"><img src=\"assets/img/social-icons/linkedin.png\" alt=\"\"/></a>\n      <a href=\"#\"><img src=\"assets/img/social-icons/googleplus.png\" alt=\"\"/></a>\n      <a href=\"http://twitter.com/analogj\"><img src=\"assets/img/social-icons/twitter.png\" alt=\"\"/></a>\n    </div>\n    <div class=\"copy\">\n      <span>© 2016 All rights reserved. CapsuleCD</span>\n    </div>\n  </div>\n  <div class=\"back-to-top\"><i class=\"fa fa-chevron-up\"></i></div>\n</footer>"

/***/ }),

/***/ 961:
/***/ (function(module, exports) {

module.exports = "<div class=\"blocks-container\">\n\n  <div class=\"block standard scroll-to-block\" data-id=\"contact\">\n    <div class=\"container\">\n      <div class=\"row page-tagline\">\n        <div class=\"col-md-6 col-md-offset-3\">\n          <h2 class=\"title\">Create Project</h2>\n          <div class=\"description\">\n            Choose an organization that you are a member of, then choose a repo to add to CapsuleCD.\n\n            We'll watch it and keep track of all new PR's opened on your repo.\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-lg-10 col-lg-offset-1\">\n          <alert *ngFor=\"let alert of alerts;let i = index\" [type]=\"alert.type\" dismissible=\"true\" (close)=\"closeAlert(i)\">\n            <div class=\"title\">{{ alert?.title}}</div>\n            {{ alert?.msg }}\n          </alert>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-lg-offset-2 col-lg-8\">\n          <div class=\"blog-post style-3\">\n            <div class=\"row\">\n              <div class=\"col-md-12\" *ngIf=\"orgs.length >=1\">\n                <div class=\"data\">\n                  <div class=\"date\"><span>{{orgRepos.length}}</span> repos</div>\n                  <div class=\"text\">\n                    <div class=\"author-entry\">\n                      <a class=\"author-thumbnail\"><img alt=\"\" [src]=\"orgs[selectedOrgIndex].avatar_url\" class=\"img-circle\"></a>\n                      <a class=\"title ml-20 mt-10\">{{orgs[selectedOrgIndex].login}}</a>\n                      <div class=\"clear\"></div>\n                    </div>\n\n                    <div class=\"description\">{{ orgs[selectedOrgIndex].description || orgs[selectedOrgIndex].bio }}</div>\n\n                  </div>\n                  <div class=\"clear\"></div>\n                </div>\n                <div class=\"paginator\" *ngIf=\"orgs.length > 1\">\n                  <div>\n                    <a (click)=\"selectPrevOrg(selectedOrgIndex-1)\" class=\"arrow-button\"><span aria-hidden=\"true\" class=\"glyphicon glyphicon-chevron-left\"></span> Prev Account</a>\n                    <a (click)=\"selectNextOrg(selectedOrgIndex+1)\" class=\"arrow-button\">Next Account <span aria-hidden=\"true\" class=\"glyphicon glyphicon-chevron-right\"></span></a>\n                  </div>\n                  <div class=\"clear\"></div>\n                </div>\n              </div>\n\n\n            </div>\n          </div>\n\n\n        </div>\n      </div>\n\n\n      <div class=\"row\" *ngIf=\"orgRepos.length > 0\">\n        <div class=\"col-md-8 col-md-offset-2\">\n          <div class=\"typography-article\">\n            <div class=\"table-responsive repo-table\">\n              <table class=\"table\" infinite-scroll  (scrolled)=\"fetchSelectedOrgReposNextPage()\" [infiniteScrollDisabled]=\"loading.fetchOrgRepos ||  orgReposAll\">\n                <tr>\n                  <th>Name</th>\n                  <th>Updated At</th>\n                  <th>Action</th>\n                </tr>\n                <tr *ngFor=\"let repo of orgRepos\">\n                  <td>{{repo.name}} </td>\n                  <td>{{repo.updated_at| amTimeAgo}}</td>\n                  <td>\n                    <a class=\"button size-3 type-1\" (click)=\"createProject(orgs[selectedOrgIndex].login, repo.name)\"><span>Watch Project</span></a>\n                  </td>\n                </tr>\n\n              </table>\n            </div>\n          </div>\n        </div>\n      </div>\n\n\n    </div>\n  </div>\n\n  <!-- FOOTER -->\n  <capsule-footer></capsule-footer>\n\n\n\n</div>\n\n"

/***/ }),

/***/ 962:
/***/ (function(module, exports) {

module.exports = "<div class=\"blocks-container\">\n\n  <div class=\"block standard scroll-to-block\" data-id=\"contact\">\n    <div class=\"container\">\n      <div class=\"row page-tagline\">\n        <div class=\"col-md-6 col-md-offset-3\">\n          <h2 class=\"title\">Publish Logs</h2>\n          <div class=\"description\">\n            These logs help you track the status of your release, and provides the information necessary to determine why\n              your package was not published by Capsule.\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-lg-10 col-lg-offset-1\">\n          <alert *ngFor=\"let alert of alerts;let i = index\" [type]=\"alert.type\" dismissible=\"true\" (close)=\"closeAlert(i)\">\n            <div class=\"title\">{{ alert?.title}}</div>\n            {{ alert?.msg }}\n          </alert>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-md-offset-1 col-md-3\">\n          <div class=\"typography-article\">\n              <h3 class=\"widget-title\">Info</h3>\n              <ul class=\"list-style-3\">\n                  <li><span class=\"text-strong\">Repository:</span> {{orgId + '/' + repoId}}</li>\n                  <li><span class=\"text-strong\">Pull Request:</span> {{prNumber}}</li>\n                  <li><span class=\"text-strong\">Status:</span> {{containerState.Status}} <span *ngIf=\"!containerState.Running\">({{containerState.ExitCode}})</span></li>\n                  <li><span class=\"text-strong\">Started:</span> {{containerState.StartedAt}}</li>\n                  <li *ngIf=\"!containerState.Running\"><span class=\"text-strong\">Duration:</span> {{containerState.FinishedAt}} minutes</li>\n              </ul>\n          </div>\n        </div>\n        <!--<div class=\"col-md-6\">-->\n          <!--<div class=\"typography-article\">-->\n            <!--<h3 class=\"widget-title\">Commits</h3>-->\n            <!--<ul class=\"list-style-3\">-->\n              <!--<li>MP3, Ogg Vorbis or AAC can be used</li>-->\n              <!--<li>48 kHz sample rate</li>-->\n              <!--<li>16 bits per sample</li>-->\n              <!--<li>2 channels for stereo audio</li>-->\n              <!--<li>Audio bitrate 128-320Kbps</li>-->\n            <!--</ul>-->\n          <!--</div>-->\n        <!--</div>-->\n\n      </div>\n\n\n      <div class=\"row\">\n        <div class=\"col-lg-offset-1 col-lg-10\">\n\n            <!--http://codepen.io/simoami/pen/zstvo-->\n            <!--http://codepen.io/jamesduncombe/pen/QNMapK-->\n            <!--http://codepen.io/sthupukari/pen/VYjGpL-->\n            <!--http://codepen.io/mahdi/pen/rOqpBJ-->\n          <div class=\"terminal-window\">\n              <div class=\"term-header\">\n                  <div class=\"term-button green\"></div>\n                  <div class=\"term-button yellow\"></div>\n                  <div class=\"term-button red\"></div>\n                  <span *ngIf=\"containerState.Running\" class=\"glyphicon glyphicon-repeat mt-5 fast-right-spinner pull-right\"></span>\n\n              </div>\n              <section class=\"terminal\">\n                  <div class=\"history\">\n                    <div *ngFor=\"let log of logs\">\n                        <span [ngClass]=\"log.stream\">{{log.line}}</span>\n                    </div>\n                  </div>\n                  $&nbsp;<span class=\"prompt\"></span>\n                  <span class=\"typed-cursor\"></span>\n\n              </section>\n          </div>\n        </div>\n      </div>\n\n\n    </div>\n  </div>\n\n  <capsule-footer></capsule-footer>\n\n\n</div>"

/***/ }),

/***/ 963:
/***/ (function(module, exports) {

module.exports = "<div class=\"blocks-container\">\n\n  <div class=\"block standard scroll-to-block\" data-id=\"contact\">\n    <div class=\"container\">\n      <div class=\"row page-tagline\">\n        <div class=\"col-md-6 col-md-offset-3\">\n          <h2 class=\"title\">Publish</h2>\n          <div class=\"description\">\n          CapsuleCD makes it simple to publish new releases based off a Pull Request.\n            Just verify your project settings are correct, and select a SemVer segment to increment.\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-lg-10 col-lg-offset-1\">\n          <alert *ngFor=\"let alert of alerts;let i = index\" [type]=\"alert.type\" dismissible=\"true\" (close)=\"closeAlert(i)\">\n            <div class=\"title\">{{ alert?.title}}</div>\n            {{ alert?.msg }}\n          </alert>\n        </div>\n      </div>\n\n      <div class=\"row\">\n\n        <div class=\"col-md-8 col-md-offset-2 wow fadeInRight\" data-wow-delay=\"0.3s\">\n\n\n          <div class=\"typography-article\">\n            <h4>Project Info\n              <span *ngIf=\"loading.pullRequest || loading.project\" class=\"glyphicon glyphicon-repeat ml-10 fast-right-spinner\"></span>\n            </h4>\n            <form class=\"form-horizontal project-form mb-40\">\n              <fieldset>\n                <!-- Text input-->\n                <div class=\"form-group\">\n                  <label class=\"col-md-3 control-label\" for=\"projectName\">Project Name</label>\n                  <div class=\"col-md-9\">\n                    <input disabled id=\"projectName\" value=\"{{orgId + '/' + repoId}}\" name=\"textinput\" type=\"text\" class=\"form-control input-md\" required=\"\">\n                  </div>\n                </div>\n\n\n                <div class=\"form-group\">\n                  <label class=\"col-md-3 control-label\" for=\"prNumber\">PR Number</label>\n                  <div class=\"col-md-9\">\n                    <input disabled id=\"prNumber\" value=\"{{prNumber}}\" name=\"textinput\" type=\"text\" class=\"form-control input-md\" required=\"\">\n                  </div>\n                </div>\n\n                <div class=\"form-group\">\n                  <label class=\"col-md-3 control-label\" for=\"prTitle\">PR Title</label>\n                  <div class=\"col-md-9\">\n                    <input disabled id=\"prTitle\" value=\"{{pullRequest.title}}\" name=\"textinput\" type=\"text\" class=\"form-control input-md\" required=\"\">\n                  </div>\n                </div>\n\n                <div class=\"form-group\">\n                  <label class=\"col-md-3 control-label\" for=\"projectType\">Project Type</label>\n                  <div class=\"col-md-9\">\n                    <input disabled id=\"projectType\" value=\"{{projectData.packageType}}\" name=\"textinput\" type=\"text\" class=\"form-control input-md\" required=\"\">\n                  </div>\n                </div>\n\n\n                <div class=\"form-group\">\n                  <label class=\"col-md-3 control-label\" for=\"dockerImage\">Docker Image</label>\n                  <div class=\"col-md-9\">\n                    <input disabled id=\"dockerImage\" value=\"{{projectData.dockerImage}}\" name=\"textinput\" type=\"text\" class=\"form-control input-md\" required=\"\">\n                  </div>\n                </div>\n\n              </fieldset>\n            </form>\n\n          </div>\n\n\n          <div class=\"typography-article\">\n            <h4>Release Settings</h4>\n            <form class=\"form-horizontal project-form mb-40\" >\n              <fieldset>\n\n                <div class=\"form-group\">\n                  <label class=\"col-md-3 control-label\" for=\"versionIncr\">Version Increment</label>\n                  <div class=\"col-md-9\">\n\n                    <select [(ngModel)]=\"versionIncr\" id=\"versionIncr\" name=\"versionIncr\" class=\"form-control input-md\">\n                      <option value=\"major\">Major (1.x.x)</option>\n                      <option value=\"minor\">Minor (x.1.x)</option>\n                      <option value=\"patch\">Patch (x.x.1)</option>\n                    </select>\n\n                  </div>\n                </div>\n\n              </fieldset>\n            </form>\n          </div>\n\n          <div style=\"text-align: center;\">\n\n            <a class=\"button size-2\" (click)=\"createRelease()\">\n              <span>Create Release from Pull Request</span>\n              <span *ngIf=\"loading.createRelease || loading.project\" class=\"glyphicon glyphicon-repeat ml-10 fast-right-spinner\"></span>\n            </a>\n\n          </div>\n\n\n        </div>\n\n\n\n      </div>\n    </div>\n  </div>\n\n  <capsule-footer></capsule-footer>\n\n\n</div>"

/***/ }),

/***/ 964:
/***/ (function(module, exports) {

module.exports = "<div class=\"blocks-container\">\n\n  <div class=\"block standard scroll-to-block\" data-id=\"contact\">\n    <div class=\"container\">\n      <div class=\"row page-tagline\">\n        <div class=\"col-md-6 col-md-offset-3\">\n          <h2 class=\"title\">Edit {{orgId + '/' + repoId}}</h2>\n          <div class=\"description\">Update your project settings here, like library language, Docker container and secrets.\n          These settings will be used whenever you publish a new version of your library</div>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-lg-10 col-lg-offset-1\">\n          <alert *ngFor=\"let alert of alerts;let i = index\" [type]=\"alert.type\" dismissible=\"true\" (close)=\"closeAlert(i)\">\n            <div class=\"title\">{{ alert?.title}}</div>\n            {{ alert?.msg }}\n          </alert>\n        </div>\n      </div>\n\n\n      <div class=\"row\">\n        <div class=\"col-md-8 col-md-offset-2 wow fadeInRight\" data-wow-delay=\"0.3s\">\n          <div class=\"typography-article\">\n            <h4>Project Settings\n              <span *ngIf=\"loading.project\" class=\"glyphicon glyphicon-repeat ml-10 fast-right-spinner\"></span>\n            </h4>\n            <form class=\"form-horizontal project-form mb-40\">\n              <fieldset>\n\n                <div class=\"form-group\">\n                  <label class=\"col-md-3 control-label\" for=\"packageType\">Package Type</label>\n                  <div class=\"col-md-9\">\n\n                    <select [(ngModel)]=\"projectData.packageType\" (ngModelChange)=\"packageTypeChanged($event)\" id=\"packageType\" name=\"packageType\" class=\"form-control input-md\">\n                      <option *ngFor=\"let key of defaultSettingsKeys\" value=\"{{key}}\">{{defaultSettings[key].display}}</option>\n                    </select>\n                    <p class=\"help-block small\">Which type of package are you deploying using CapsuleCD?</p>\n\n                  </div>\n                </div>\n\n                <div class=\"form-group\">\n                  <label class=\"col-md-3 control-label\" for=\"versionIncr\">Version Increment</label>\n                  <div class=\"col-md-9\">\n\n                    <select [(ngModel)]=\"projectData.versionIncr\" id=\"versionIncr\" name=\"versionIncr\" class=\"form-control input-md\">\n                      <option value=\"major\">Major (1.x.x)</option>\n                      <option value=\"minor\">Minor (x.1.x)</option>\n                      <option value=\"patch\">Patch (x.x.1)</option>\n                    </select>\n                    <p class=\"help-block small\">Select which segment of the SemVer version you would like to bump with each release. This can be overriden when creating a new release</p>\n\n                  </div>\n                </div>\n\n                <div class=\"form-group\">\n                  <label class=\"col-md-3 control-label\" for=\"dockerImage\">Docker Image\n                  </label>\n                  <div class=\"col-md-9\">\n                    <div class=\"input-group typeahead-group\">\n\n                      <input [(ngModel)]=\"projectData.dockerImage\"\n                             [typeahead]=\"dockerImagesDatasource\"\n                             (typeaheadLoading)=\"dockerImagesLoading($event)\"\n                             (typeaheadNoResults)=\"dockerImagesNoResultsHandler($event)\"\n                             [typeaheadOptionsLimit]=\"7\"\n                             [typeaheadOptionField]=\"'repo_name'\"\n                             name=\"dockerImage\"\n                             id=\"dockerImage\"\n                             placeholder=\"Docker Image (eg. 'AnalogJ/capsulecd')\"\n                             type=\"text\"\n                             class=\"form-control input-md\">\n                      <span *ngIf=\"loading.queryDockerImages\" class=\"input-group-addon\">\n                        <span class=\"glyphicon glyphicon-repeat ml-10 fast-right-spinner\"></span>\n                      </span>\n                    </div>\n                    <div *ngIf=\"dockerImagesNoResults\">\n                      <i class=\"glyphicon glyphicon-remove\"></i> No Results Found\n                    </div>\n                    <p class=\"help-block small\">Select the docker image you would like to use when deploying your package. The default image should work in most cases</p>\n\n                  </div>\n                </div>\n\n                <div class=\"col-md-9 col-md-offset-3\">\n                  <a class=\"button type-1 size-3\" (click)=\"saveSettings()\">\n                    <span>Save Settings</span>\n                    <span *ngIf=\"loading.saveSettings\" class=\"glyphicon glyphicon-repeat ml-10 fast-right-spinner\"></span>\n                  </a>\n                </div>\n              </fieldset>\n            </form>\n\n          </div>\n\n\n          <div class=\"typography-article\">\n            <h4>Project Secrets\n              <span *ngIf=\"loading.project\" class=\"glyphicon glyphicon-repeat ml-10 fast-right-spinner\"></span>\n            </h4>\n            <p>Add environment variables to the project build. You can add sensitive data (e.g. NPM, RubyGems API keys) here, rather than placing them in the repository.\n            </p>\n            <p *ngIf=\"projectData.packageType && defaultSettings[projectData.packageType].recommendedSecrets.length\">\n              {{defaultSettings[projectData.packageType].display}} packages should have the following secrets configured:\n              <br/>\n              <span class=\"text-strong\">\n                {{defaultSettings[projectData.packageType].recommendedSecrets.join(', ')}}\n              </span>\n            </p>\n\n\n            <form class=\"form-horizontal project-form mb-40\" >\n              <fieldset>\n\n                <div class=\"form-group\">\n                  <label class=\"col-md-3 control-label\" for=\"secretName\">Secret Name</label>\n                  <div class=\"col-md-9\">\n                    <input [(ngModel)]=\"secretName\"  id=\"secretName\" name=\"textinput\" type=\"text\" class=\"form-control input-md\" required=\"\">\n                  </div>\n                </div>\n\n\n                <div class=\"form-group\">\n                  <label class=\"col-md-3 control-label\" for=\"secretValue\">Secret Value</label>\n                  <div class=\"col-md-9\">\n                    <input [(ngModel)]=\"secretValue\" id=\"secretValue\" name=\"textinput\" type=\"password\" class=\"form-control input-md\" required=\"\">\n                  </div>\n                </div>\n\n                <div class=\"col-md-9 col-md-offset-3\">\n                  <a class=\"button type-1 size-3\" (click)=\"addSecret()\">\n                    <span>Add Secret</span>\n                    <span *ngIf=\"loading.addSecret\" class=\"glyphicon glyphicon-repeat ml-10 fast-right-spinner\"></span>\n                  </a>\n                </div>\n\n              </fieldset>\n            </form>\n\n          </div>\n\n\n\n\n        </div>\n\n\n\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-8 col-md-offset-2\">\n          <div class=\"typography-article\">\n            <div class=\"table-responsive\">\n              <table class=\"table\">\n                <tr>\n                  <th>Secret Name</th>\n                  <th>Secret Value</th>\n                  <th></th>\n                </tr>\n                <tr *ngFor=\"let secretKey of projectSecretsKeys\">\n                  <td>{{secretKey}}</td>\n                  <td>*****{{projectSecrets[secretKey].last4}}</td>\n                  <td><span aria-hidden=\"true\" class=\"glyphicon glyphicon-trash\"></span></td>\n                </tr>\n\n              </table>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <capsule-footer></capsule-footer>\n\n\n\n</div>"

/***/ })

},[1025]);
//# sourceMappingURL=main.bundle.map