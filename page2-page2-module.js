(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page2-page2-module"],{

/***/ "./src/app/page2/page2-list/page2-list.component.html":
/*!************************************************************!*\
  !*** ./src/app/page2/page2-list/page2-list.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12\">\r\n    page2-list works!\r\n</div>\r\n<div class=\"ui-g-12\">\r\n  <div>\r\n  <button class=\"button\" (click)=predict()>Predict</button>\r\n  </div>\r\n</div>\r\n<div class=\"ui-g-12\">\r\n  {{predictedNumber}}\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/page2/page2-list/page2-list.component.scss":
/*!************************************************************!*\
  !*** ./src/app/page2/page2-list/page2-list.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ui-g-12 {\n  height: 50px;\n  line-height: 50px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZTIvcGFnZTItbGlzdC9EOlxcUHJvamVjdHNcXHRoaXMtYXBwLWEvc3JjXFxhcHBcXHBhZ2UyXFxwYWdlMi1saXN0XFxwYWdlMi1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBWTtFQUNaLGtCQUFpQixFQUNwQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2UyL3BhZ2UyLWxpc3QvcGFnZTItbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51aS1nLTEyIHtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/page2/page2-list/page2-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/page2/page2-list/page2-list.component.ts ***!
  \**********************************************************/
/*! exports provided: Page2ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page2ListComponent", function() { return Page2ListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _page2_list_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page2-list.service */ "./src/app/page2/page2-list/page2-list.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Page2ListComponent = /** @class */ (function () {
    function Page2ListComponent(service) {
        this.service = service;
    }
    Page2ListComponent.prototype.ngOnInit = function () {
    };
    Page2ListComponent.prototype.predict = function () {
        console.log(this.service.getData());
    };
    Page2ListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page2-list',
            template: __webpack_require__(/*! ./page2-list.component.html */ "./src/app/page2/page2-list/page2-list.component.html"),
            styles: [__webpack_require__(/*! ./page2-list.component.scss */ "./src/app/page2/page2-list/page2-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_page2_list_service__WEBPACK_IMPORTED_MODULE_1__["Page2Service"]])
    ], Page2ListComponent);
    return Page2ListComponent;
}());



/***/ }),

/***/ "./src/app/page2/page2-list/page2-list.service.ts":
/*!********************************************************!*\
  !*** ./src/app/page2/page2-list/page2-list.service.ts ***!
  \********************************************************/
/*! exports provided: Page2Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page2Service", function() { return Page2Service; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Page2Service = /** @class */ (function () {
    function Page2Service(http) {
        this.http = http;
        this.PROJECT_TOKEN = 'tOo_FF8Rqazv';
        this.API_KEY = 'tAo4bVJHMm8E';
        this.url = 'https://www.parsehub.com/api/v2/projects/tOo_FF8Rqazv/last_ready_run/data';
    }
    Page2Service.prototype.getData = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        headers.append('Access-Control-Allow-Credentials', 'true');
        headers.append('Authorization', this.API_KEY);
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        params.append('api_key', this.API_KEY);
        params.append('format', 'json');
        return this.http.get(this.url, { headers: headers, params: params }).subscribe(function (res) {
            console.log(res);
        });
    };
    Page2Service = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], Page2Service);
    return Page2Service;
}());



/***/ }),

/***/ "./src/app/page2/page2-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/page2/page2-routing.module.ts ***!
  \***********************************************/
/*! exports provided: Page2RoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page2RoutingModule", function() { return Page2RoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _page2_list_page2_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page2-list/page2-list.component */ "./src/app/page2/page2-list/page2-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _page2_list_page2_list_component__WEBPACK_IMPORTED_MODULE_2__["Page2ListComponent"]
    }
];
var Page2RoutingModule = /** @class */ (function () {
    function Page2RoutingModule() {
    }
    Page2RoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], Page2RoutingModule);
    return Page2RoutingModule;
}());



/***/ }),

/***/ "./src/app/page2/page2.module.ts":
/*!***************************************!*\
  !*** ./src/app/page2/page2.module.ts ***!
  \***************************************/
/*! exports provided: Page2Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page2Module", function() { return Page2Module; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _page2_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page2-routing.module */ "./src/app/page2/page2-routing.module.ts");
/* harmony import */ var _page2_list_page2_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page2-list/page2-list.component */ "./src/app/page2/page2-list/page2-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var Page2Module = /** @class */ (function () {
    function Page2Module() {
    }
    Page2Module = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_page2_list_page2_list_component__WEBPACK_IMPORTED_MODULE_3__["Page2ListComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _page2_routing_module__WEBPACK_IMPORTED_MODULE_2__["Page2RoutingModule"]
            ]
        })
    ], Page2Module);
    return Page2Module;
}());



/***/ })

}]);
//# sourceMappingURL=page2-page2-module.js.map