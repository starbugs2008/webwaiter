(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./projects/jsonformlib/src/lib/Interface/index.ts":
/*!*********************************************************!*\
  !*** ./projects/jsonformlib/src/lib/Interface/index.ts ***!
  \*********************************************************/
/*! exports provided: FIELD_VALIDATION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FIELD_VALIDATION", function() { return FIELD_VALIDATION; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var FIELD_VALIDATION = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]("FIELD_VALIDATION");


/***/ }),

/***/ "./projects/jsonformlib/src/lib/components/actions/actions.component.css":
/*!*******************************************************************************!*\
  !*** ./projects/jsonformlib/src/lib/components/actions/actions.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./projects/jsonformlib/src/lib/components/actions/actions.component.html":
/*!********************************************************************************!*\
  !*** ./projects/jsonformlib/src/lib/components/actions/actions.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='row'>\n    <div *ngFor=\"let b of actions\" class=\"col-md-2\">\n        <div [ngSwitch]=\"b\">\n            <div *ngSwitchCase=\"'Reset'\">\n                <button type=\"button\" class=\"btn btn-default\">Reset</button>\n            </div>\n            <div *ngSwitchDefault>\n                <button (click)=\"btAction(b)\" class=\"btn btn-primary\" [id]='b.id' [disabled]= 'disabled(b)' >\n                    {{b.label}}\n                </button>\n            </div>\n        </div>\n    </div>\n\n</div>\n<!-- [disabled]=\"!valid\"  -->"

/***/ }),

/***/ "./projects/jsonformlib/src/lib/components/actions/actions.component.ts":
/*!******************************************************************************!*\
  !*** ./projects/jsonformlib/src/lib/components/actions/actions.component.ts ***!
  \******************************************************************************/
/*! exports provided: ActionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionsComponent", function() { return ActionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrxcore_actions_bt_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ngrxcore/actions/bt.actions */ "./projects/jsonformlib/src/lib/ngrxcore/actions/bt.actions.ts");
/* harmony import */ var _services_page_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/page.service */ "./projects/jsonformlib/src/lib/services/page.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ActionsComponent = /** @class */ (function () {
    function ActionsComponent(store, pageservice) {
        this.store = store;
        this.pageservice = pageservice;
        this.valid = true;
    }
    ActionsComponent.prototype.ngOnInit = function () { };
    ActionsComponent.prototype.btAction = function (event) {
        if (!event.id) {
            return;
        }
        this.store.dispatch(new _ngrxcore_actions_bt_actions__WEBPACK_IMPORTED_MODULE_2__["BTAction"]({
            action: event,
            model: this.pageservice.CurrentModel
        }));
    };
    ActionsComponent.prototype.disabled = function (action) {
        // if (!action.hideExpression) return true;
        // const x = this.valid && evalHidden(action.hideExpression) ? true : false;
        // return !x;
        return false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ActionsComponent.prototype, "actions", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ActionsComponent.prototype, "options", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ActionsComponent.prototype, "valid", void 0);
    ActionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "json-actions",
            template: __webpack_require__(/*! ./actions.component.html */ "./projects/jsonformlib/src/lib/components/actions/actions.component.html"),
            styles: [__webpack_require__(/*! ./actions.component.css */ "./projects/jsonformlib/src/lib/components/actions/actions.component.css")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"], _services_page_service__WEBPACK_IMPORTED_MODULE_3__["PageService"]])
    ], ActionsComponent);
    return ActionsComponent;
}());



/***/ }),

/***/ "./projects/jsonformlib/src/lib/components/case/case.component.html":
/*!**************************************************************************!*\
  !*** ./projects/jsonformlib/src/lib/components/case/case.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"defCase; then page; else nopage\">\r\n</ng-container>\r\n<ng-template #nopage>\r\n  <div>\r\n    page is not set up\r\n  </div>\r\n</ng-template>\r\n<ng-template #page>\r\n  <div *ngFor=\"let page of defCase.pages  let i = index\" [class]='page.className'>\r\n    <json-page [page]='page'></json-page>\r\n  </div>\r\n  <div [class]='defCase.groupClass'>\r\n    <div *ngFor=\"let page of defCase.group  let i = index\" [class]='page.className'>\r\n      <json-page [page]='page'></json-page>\r\n    </div>\r\n  </div>\r\n</ng-template>"

/***/ }),

/***/ "./projects/jsonformlib/src/lib/components/case/case.component.scss":
/*!**************************************************************************!*\
  !*** ./projects/jsonformlib/src/lib/components/case/case.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".panel {\n  margin: 10px; }\n\n.formborder {\n  border: 1px solid black;\n  margin: 5px; }\n\n.title {\n  flex: 1 1 auto;\n  text-align: center;\n  font-weight: 700;\n  font-size: 20px; }\n"

/***/ }),

/***/ "./projects/jsonformlib/src/lib/components/case/case.component.ts":
/*!************************************************************************!*\
  !*** ./projects/jsonformlib/src/lib/components/case/case.component.ts ***!
  \************************************************************************/
/*! exports provided: CaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaseComponent", function() { return CaseComponent; });
/* harmony import */ var _services_page_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/page.service */ "./projects/jsonformlib/src/lib/services/page.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CaseComponent = /** @class */ (function () {
    function CaseComponent(router, pageService) {
        var _this = this;
        this.router = router;
        this.pageService = pageService;
        this.actionLib = [];
        this.router.url.subscribe(function (url) {
            _this.pageService.CurrentPage = null;
            if (url.length > 1) {
                _this.pageService.LoadCase(url[0].path, url[1].path).subscribe(function (c) {
                    if (c[0]) {
                        _this.pageService.CurrentPage = {
                            defCase: c[0],
                            model: c[1],
                            src: "CaseComponent"
                        };
                    }
                });
            }
        });
    }
    Object.defineProperty(CaseComponent.prototype, "defCase", {
        get: function () {
            return this.pageService._currentPage
                ? this.pageService._currentPage.defCase
                : null;
        },
        enumerable: true,
        configurable: true
    });
    CaseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "json-case",
            template: __webpack_require__(/*! ./case.component.html */ "./projects/jsonformlib/src/lib/components/case/case.component.html"),
            styles: [__webpack_require__(/*! ./case.component.scss */ "./projects/jsonformlib/src/lib/components/case/case.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_page_service__WEBPACK_IMPORTED_MODULE_0__["PageService"]])
    ], CaseComponent);
    return CaseComponent;
}());



/***/ }),

/***/ "./projects/jsonformlib/src/lib/components/fieldtypes/FieldArray/MyFieldArray.fieldtype.html":
/*!***************************************************************************************************!*\
  !*** ./projects/jsonformlib/src/lib/components/fieldtypes/FieldArray/MyFieldArray.fieldtype.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [class]=\"field.fieldArray.fieldGroupClassName\">\r\n    <div *ngFor=\"let m of model ; let i = index;\" class=\"row\">\r\n        <div *ngFor=\"let group of field.fieldGroup[i].fieldGroup \">\r\n            {{m |json}}\r\n            <formly-group [model]=\"m\" [field]=\"group\" [options]=\"options\" [form]=\"formControl\">\r\n            </formly-group>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./projects/jsonformlib/src/lib/components/fieldtypes/FieldArray/MyFieldArray.fieldtype.scss":
/*!***************************************************************************************************!*\
  !*** ./projects/jsonformlib/src/lib/components/fieldtypes/FieldArray/MyFieldArray.fieldtype.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grid-container {\n  font-size: 12px;\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: 1fr 1fr;\n      grid-template-columns: 1fr 1fr; }\n"

/***/ }),

/***/ "./projects/jsonformlib/src/lib/components/fieldtypes/FieldArray/MyFieldArray.fieldtype.ts":
/*!*************************************************************************************************!*\
  !*** ./projects/jsonformlib/src/lib/components/fieldtypes/FieldArray/MyFieldArray.fieldtype.ts ***!
  \*************************************************************************************************/
/*! exports provided: MyFieldArrayFieldtype */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyFieldArrayFieldtype", function() { return MyFieldArrayFieldtype; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-formly/core */ "./node_modules/@ngx-formly/core/fesm5/ngx-formly-core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MyFieldArrayFieldtype = /** @class */ (function (_super) {
    __extends(MyFieldArrayFieldtype, _super);
    function MyFieldArrayFieldtype(builder, store) {
        var _this = _super.call(this, builder) || this;
        _this.store = store;
        return _this;
        // this.store.select(s => s.button).subscribe((c: BTState) => {
        //   switch (c.id) {
        //     case "myorder":
        //       c.model["Food"] = c.model.title;
        //       c.model["Qty"] = 1;
        //       this.add(this.model.length, c.model);
        //       break;
        //   }
        // });
    }
    MyFieldArrayFieldtype.prototype.ngOnChanges = function (change) {
        console.log(change);
    };
    MyFieldArrayFieldtype = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./MyFieldArray.fieldtype.html */ "./projects/jsonformlib/src/lib/components/fieldtypes/FieldArray/MyFieldArray.fieldtype.html"),
            styles: [__webpack_require__(/*! ./MyFieldArray.fieldtype.scss */ "./projects/jsonformlib/src/lib/components/fieldtypes/FieldArray/MyFieldArray.fieldtype.scss")]
        }),
        __metadata("design:paramtypes", [_ngx_formly_core__WEBPACK_IMPORTED_MODULE_1__["FormlyFormBuilder"], _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], MyFieldArrayFieldtype);
    return MyFieldArrayFieldtype;
}(_ngx_formly_core__WEBPACK_IMPORTED_MODULE_1__["FieldArrayType"]));



/***/ }),

/***/ "./projects/jsonformlib/src/lib/components/fieldtypes/code/code.fieldtype.html":
/*!*************************************************************************************!*\
  !*** ./projects/jsonformlib/src/lib/components/fieldtypes/code/code.fieldtype.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<pre><code>{{Code}}</code></pre>"

/***/ }),

/***/ "./projects/jsonformlib/src/lib/components/fieldtypes/code/code.fieldtype.scss":
/*!*************************************************************************************!*\
  !*** ./projects/jsonformlib/src/lib/components/fieldtypes/code/code.fieldtype.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./projects/jsonformlib/src/lib/components/fieldtypes/code/code.fieldtype.ts":
/*!***********************************************************************************!*\
  !*** ./projects/jsonformlib/src/lib/components/fieldtypes/code/code.fieldtype.ts ***!
  \***********************************************************************************/
/*! exports provided: CodeFieldType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeFieldType", function() { return CodeFieldType; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-formly/core */ "./node_modules/@ngx-formly/core/fesm5/ngx-formly-core.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var CodeFieldType = /** @class */ (function (_super) {
    __extends(CodeFieldType, _super);
    function CodeFieldType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(CodeFieldType.prototype, "Code", {
        get: function () {
            return JSON.stringify(this.field.templateOptions.label, null, 2);
        },
        enumerable: true,
        configurable: true
    });
    CodeFieldType = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./code.fieldtype.html */ "./projects/jsonformlib/src/lib/components/fieldtypes/code/code.fieldtype.html"),
            styles: [__webpack_require__(/*! ./code.fieldtype.scss */ "./projects/jsonformlib/src/lib/components/fieldtypes/code/code.fieldtype.scss")]
        })
    ], CodeFieldType);
    return CodeFieldType;
}(_ngx_formly_core__WEBPACK_IMPORTED_MODULE_1__["FieldType"]));



/***/ }),

/***/ "./projects/jsonformlib/src/lib/components/fieldtypes/expandable/expandable.fieldtype.html":
/*!*************************************************************************************************!*\
  !*** ./projects/jsonformlib/src/lib/components/fieldtypes/expandable/expandable.fieldtype.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<json-form [formData]='Value.header'></json-form>\r\n<div [@changeState]=\"currentState\">\r\n    <json-page [page]=\"Value.detail\"></json-page>\r\n</div>"

/***/ }),

/***/ "./projects/jsonformlib/src/lib/components/fieldtypes/expandable/expandable.fieldtype.scss":
/*!*************************************************************************************************!*\
  !*** ./projects/jsonformlib/src/lib/components/fieldtypes/expandable/expandable.fieldtype.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div label input {\n  margin-right: 100px; }\n\nbody {\n  font-family: sans-serif; }\n\n#ck-button {\n  margin: 4px;\n  background-color: #EFEFEF;\n  border-radius: 4px;\n  border: 1px solid #D0D0D0;\n  overflow: auto;\n  float: left; }\n\n#ck-button label {\n  float: left;\n  width: 2.0em; }\n\n#ck-button label span {\n  text-align: center;\n  padding: 3px 0px;\n  display: block; }\n\n#ck-button label input {\n  position: absolute;\n  top: -20px; }\n\n#ck-button input:checked + span {\n  background-color: #999;\n  color: #fff; }\n\n.myblock {\n  background-color: green;\n  width: 300px;\n  height: 250px;\n  border-radius: 5px;\n  margin: 5rem; }\n"

/***/ }),

/***/ "./projects/jsonformlib/src/lib/components/fieldtypes/expandable/expandable.fieldtype.ts":
/*!***********************************************************************************************!*\
  !*** ./projects/jsonformlib/src/lib/components/fieldtypes/expandable/expandable.fieldtype.ts ***!
  \***********************************************************************************************/
/*! exports provided: ExpandableFieldType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpandableFieldType", function() { return ExpandableFieldType; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-formly/core */ "./node_modules/@ngx-formly/core/fesm5/ngx-formly-core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ExpandableFieldType = /** @class */ (function (_super) {
    __extends(ExpandableFieldType, _super);
    function ExpandableFieldType() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.currentState = "hidden";
        return _this;
    }
    ExpandableFieldType.prototype.ngOnInit = function () { };
    ExpandableFieldType.prototype.mouseenter = function () {
        this.currentState = "show";
    };
    ExpandableFieldType.prototype.mouseleave = function () {
        this.currentState = "hidden";
    };
    Object.defineProperty(ExpandableFieldType.prototype, "Value", {
        get: function () {
            return this.field.defaultValue || {};
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])("mouseenter"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ExpandableFieldType.prototype, "mouseenter", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])("mouseleave"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ExpandableFieldType.prototype, "mouseleave", null);
    ExpandableFieldType = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./expandable.fieldtype.html */ "./projects/jsonformlib/src/lib/components/fieldtypes/expandable/expandable.fieldtype.html"),
            styles: [__webpack_require__(/*! ./expandable.fieldtype.scss */ "./projects/jsonformlib/src/lib/components/fieldtypes/expandable/expandable.fieldtype.scss")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])("changeState", [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])("show", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        display: "block",
                        transform: "scale(1)"
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])("hidden", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        display: "none",
                        transform: "scale(0)"
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])("*=>show", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])("100ms")),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])("*=>hidden", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])("0ms"))
                ])
            ]
        })
    ], ExpandableFieldType);
    return ExpandableFieldType;
}(_ngx_formly_core__WEBPACK_IMPORTED_MODULE_1__["FieldType"]));



/***/ }),

/***/ "./projects/jsonformlib/src/lib/components/fieldtypes/html/html.fieldtype.css":
/*!************************************************************************************!*\
  !*** ./projects/jsonformlib/src/lib/components/fieldtypes/html/html.fieldtype.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bold {\r\n  font-weight: bold;\r\n \r\n}\r\n.firstField{\r\n  margin-left: 25px;\r\n  margin-right: 15px;\r\n  width: 20%;\r\n}\r\n.background {\r\n  margin: 25px 0;\r\n}\r\nimg {\r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}"

/***/ }),

/***/ "./projects/jsonformlib/src/lib/components/fieldtypes/html/html.fieldtype.html":
/*!*************************************************************************************!*\
  !*** ./projects/jsonformlib/src/lib/components/fieldtypes/html/html.fieldtype.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  <div *ngFor=\"let row of model[field.key].Rows\" [class]=\" field.className\">\r\n    <div *ngFor=\"let cell of row\">\r\n      <span [ngClass]='cell.className'> {{cell.defaultValue}}</span><br/>\r\n      <img [src]=\"cell.image\"  width='30%' alt=\"Photo\"  *ngIf='cell.image'>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./projects/jsonformlib/src/lib/components/fieldtypes/html/html.fieldtype.ts":
/*!***********************************************************************************!*\
  !*** ./projects/jsonformlib/src/lib/components/fieldtypes/html/html.fieldtype.ts ***!
  \***********************************************************************************/
/*! exports provided: HtmlFieldType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HtmlFieldType", function() { return HtmlFieldType; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-formly/core */ "./node_modules/@ngx-formly/core/fesm5/ngx-formly-core.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var HtmlFieldType = /** @class */ (function (_super) {
    __extends(HtmlFieldType, _super);
    function HtmlFieldType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HtmlFieldType = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./html.fieldtype.html */ "./projects/jsonformlib/src/lib/components/fieldtypes/html/html.fieldtype.html"),
            styles: [__webpack_require__(/*! ./html.fieldtype.css */ "./projects/jsonformlib/src/lib/components/fieldtypes/html/html.fieldtype.css")]
        })
    ], HtmlFieldType);
    return HtmlFieldType;
}(_ngx_formly_core__WEBPACK_IMPORTED_MODULE_1__["FieldType"]));



/***/ }),

/***/ "./projects/jsonformlib/src/lib/components/fieldtypes/index.ts":
/*!*********************************************************************!*\
  !*** ./projects/jsonformlib/src/lib/components/fieldtypes/index.ts ***!
  \*********************************************************************/
/*! exports provided: field_types, FIELD_TYPES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "field_types", function() { return field_types; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FIELD_TYPES", function() { return FIELD_TYPES; });
/* harmony import */ var _html_html_fieldtype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./html/html.fieldtype */ "./projects/jsonformlib/src/lib/components/fieldtypes/html/html.fieldtype.ts");
/* harmony import */ var _repeat_repeat_fieldtype__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./repeat/repeat.fieldtype */ "./projects/jsonformlib/src/lib/components/fieldtypes/repeat/repeat.fieldtype.ts");
/* harmony import */ var _readonly_readonly_fieldtype__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./readonly/readonly.fieldtype */ "./projects/jsonformlib/src/lib/components/fieldtypes/readonly/readonly.fieldtype.ts");
/* harmony import */ var _menu_menu_fieldtype__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu/menu.fieldtype */ "./projects/jsonformlib/src/lib/components/fieldtypes/menu/menu.fieldtype.ts");
/* harmony import */ var _title_title_fieldtype__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./title/title.fieldtype */ "./projects/jsonformlib/src/lib/components/fieldtypes/title/title.fieldtype.ts");
/* harmony import */ var _expandable_expandable_fieldtype__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./expandable/expandable.fieldtype */ "./projects/jsonformlib/src/lib/components/fieldtypes/expandable/expandable.fieldtype.ts");
/* harmony import */ var _FieldArray_MyFieldArray_fieldtype__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FieldArray/MyFieldArray.fieldtype */ "./projects/jsonformlib/src/lib/components/fieldtypes/FieldArray/MyFieldArray.fieldtype.ts");
/* harmony import */ var _code_code_fieldtype__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./code/code.fieldtype */ "./projects/jsonformlib/src/lib/components/fieldtypes/code/code.fieldtype.ts");
/* harmony import */ var _table_table_fieldtype__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./table/table.fieldtype */ "./projects/jsonformlib/src/lib/components/fieldtypes/table/table.fieldtype.ts");









var field_types = [
    _html_html_fieldtype__WEBPACK_IMPORTED_MODULE_0__["HtmlFieldType"],
    _repeat_repeat_fieldtype__WEBPACK_IMPORTED_MODULE_1__["RepeatFieldType"],
    _expandable_expandable_fieldtype__WEBPACK_IMPORTED_MODULE_5__["ExpandableFieldType"],
    _readonly_readonly_fieldtype__WEBPACK_IMPORTED_MODULE_2__["ReadOnlyFieldType"],
    _title_title_fieldtype__WEBPACK_IMPORTED_MODULE_4__["TitleFieldType"],
    _menu_menu_fieldtype__WEBPACK_IMPORTED_MODULE_3__["MenuFieldType"],
    _FieldArray_MyFieldArray_fieldtype__WEBPACK_IMPORTED_MODULE_6__["MyFieldArrayFieldtype"],
    _code_code_fieldtype__WEBPACK_IMPORTED_MODULE_7__["CodeFieldType"],
    _table_table_fieldtype__WEBPACK_IMPORTED_MODULE_8__["TableFieldType"]
];
var FIELD_TYPES = [
    { name: "repeat", component: _repeat_repeat_fieldtype__WEBPACK_IMPORTED_MODULE_1__["RepeatFieldType"] },
    {
        name: "expandable",
        component: _expandable_expandable_fieldtype__WEBPACK_IMPORTED_MODULE_5__["ExpandableFieldType"]
    },
    {
        name: "FieldArray",
        component: _FieldArray_MyFieldArray_fieldtype__WEBPACK_IMPORTED_MODULE_6__["MyFieldArrayFieldtype"]
    },
    {
        name: "readonly",
        component: _readonly_readonly_fieldtype__WEBPACK_IMPORTED_MODULE_2__["ReadOnlyFieldType"]
    },
    {
        name: "html",
        component: _html_html_fieldtype__WEBPACK_IMPORTED_MODULE_0__["HtmlFieldType"]
    },
    {
        name: "info",
        component: _title_title_fieldtype__WEBPACK_IMPORTED_MODULE_4__["TitleFieldType"]
    },
    {
        name: "headline",
        component: _title_title_fieldtype__WEBPACK_IMPORTED_MODULE_4__["TitleFieldType"]
    },
    {
        name: "code",
        component: _code_code_fieldtype__WEBPACK_IMPORTED_MODULE_7__["CodeFieldType"]
    },
    {
        name: "table",
        component: _table_table_fieldtype__WEBPACK_IMPORTED_MODULE_8__["TableFieldType"]
    },
    {
        name: "menu",
        component: _menu_menu_fieldtype__WEBPACK_IMPORTED_MODULE_3__["MenuFieldType"]
    }
];


/***/ }),

/***/ "./projects/jsonformlib/src/lib/components/fieldtypes/menu/menu.fieldtype.css":
/*!************************************************************************************!*\
  !*** ./projects/jsonformlib/src/lib/components/fieldtypes/menu/menu.fieldtype.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".level1 {\r\n  padding-left: 10px;\r\n  font-weight: 500;\r\n  text-align: left;\r\n}\r\n.level0 {\r\n  padding-left: 2px;\r\n  font-weight: 700;\r\n  text-align: left;\r\n}\r\n.hidden {\r\n  display: none !important;\r\n}\r\n"

/***/ }),

/***/ "./projects/jsonformlib/src/lib/components/fieldtypes/menu/menu.fieldtype.html":
/*!*************************************************************************************!*\
  !*** ./projects/jsonformlib/src/lib/components/fieldtypes/menu/menu.fieldtype.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let link of this.service.Menus$ |async\">\r\n  <div mat-list-item>\r\n    <a [routerLink]=\"[link.path]\" routerLinkActive=\"active-link\" *ngIf='link'>\r\n      <span [class]='link.level' *ngIf='link'> {{link.label}} </span>\r\n    </a>\r\n    <i class=\"fas fa-edit\" (click)='onedit(link.path)' *ngIf=\"service.appIndex.FormBuilder\"></i>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./projects/jsonformlib/src/lib/components/fieldtypes/menu/menu.fieldtype.ts":
/*!***********************************************************************************!*\
  !*** ./projects/jsonformlib/src/lib/components/fieldtypes/menu/menu.fieldtype.ts ***!
  \***********************************************************************************/
/*! exports provided: MenuFieldType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuFieldType", function() { return MenuFieldType; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_appIndex_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/appIndex.service */ "./projects/jsonformlib/src/lib/services/appIndex.service.ts");
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-formly/core */ "./node_modules/@ngx-formly/core/fesm5/ngx-formly-core.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MenuFieldType = /** @class */ (function (_super) {
    __extends(MenuFieldType, _super);
    // editicon = faPen;
    function MenuFieldType(service, router) {
        var _this = _super.call(this) || this;
        _this.service = service;
        _this.router = router;
        return _this;
    }
    MenuFieldType.prototype.onedit = function (path) {
        this.router.navigate([this.service.appIndex.FormBuilder, path]);
    };
    Object.defineProperty(MenuFieldType.prototype, "Menu$", {
        get: function () {
            return this.service.Menus$;
        },
        enumerable: true,
        configurable: true
    });
    MenuFieldType = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "json-menu",
            template: __webpack_require__(/*! ./menu.fieldtype.html */ "./projects/jsonformlib/src/lib/components/fieldtypes/menu/menu.fieldtype.html"),
            styles: [__webpack_require__(/*! ./menu.fieldtype.css */ "./projects/jsonformlib/src/lib/components/fieldtypes/menu/menu.fieldtype.css")]
        }),
        __metadata("design:paramtypes", [_services_appIndex_service__WEBPACK_IMPORTED_MODULE_2__["AppIndexService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], MenuFieldType);
    return MenuFieldType;
}(_ngx_formly_core__WEBPACK_IMPORTED_MODULE_3__["FieldType"]));



/***/ }),

/***/ "./projects/jsonformlib/src/lib/components/fieldtypes/readonly/readonly.fieldtype.html":
/*!*********************************************************************************************!*\
  !*** ./projects/jsonformlib/src/lib/components/fieldtypes/readonly/readonly.fieldtype.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div [ngClass]=\"field.className\">\r\n    {{field.templateOptions.label}} {{model[field.key]}}\r\n</div>\r\n"

/***/ }),

/***/ "./projects/jsonformlib/src/lib/components/fieldtypes/readonly/readonly.fieldtype.scss":
/*!*********************************************************************************************!*\
  !*** ./projects/jsonformlib/src/lib/components/fieldtypes/readonly/readonly.fieldtype.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./projects/jsonformlib/src/lib/components/fieldtypes/readonly/readonly.fieldtype.ts":
/*!*******************************************************************************************!*\
  !*** ./projects/jsonformlib/src/lib/components/fieldtypes/readonly/readonly.fieldtype.ts ***!
  \*******************************************************************************************/
/*! exports provided: ReadOnlyFieldType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadOnlyFieldType", function() { return ReadOnlyFieldType; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-formly/core */ "./node_modules/@ngx-formly/core/fesm5/ngx-formly-core.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ReadOnlyFieldType = /** @class */ (function (_super) {
    __extends(ReadOnlyFieldType, _super);
    function ReadOnlyFieldType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ReadOnlyFieldType = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./readonly.fieldtype.html */ "./projects/jsonformlib/src/lib/components/fieldtypes/readonly/readonly.fieldtype.html"),
            styles: [__webpack_require__(/*! ./readonly.fieldtype.scss */ "./projects/jsonformlib/src/lib/components/fieldtypes/readonly/readonly.fieldtype.scss")]
        })
    ], ReadOnlyFieldType);
    return ReadOnlyFieldType;
}(_ngx_formly_core__WEBPACK_IMPORTED_MODULE_1__["FieldType"]));



/***/ }),

/***/ "./projects/jsonformlib/src/lib/components/fieldtypes/repeat/repeat.fieldtype.html":
/*!*****************************************************************************************!*\
  !*** ./projects/jsonformlib/src/lib/components/fieldtypes/repeat/repeat.fieldtype.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div *ngFor=\"let m of model ; let i = index;\" class=\"row\">\r\n        <div class=\"col-sm-11\">\r\n            <div *ngFor=\"let group of field.fieldGroup[i].fieldGroup \">\r\n                <formly-group [model]=\"m\" [field]=\"group\" [options]=\"options\" [form]=\"formControl\">\r\n                </formly-group>\r\n            </div>\r\n            <json-actions [actions]=' field.fieldGroup.actions'></json-actions>\r\n        </div>\r\n        <div class=\"col-sm-1\" *ngIf='!m.Keep'>\r\n            <button class=\"btn btn-danger\" type=\"button\" (click)=\"remove(i)\">x</button>\r\n        </div>\r\n    </div>\r\n</div>\r\n<hr />\r\n<div style=\"margin:30px 0;\">\r\n    <button class=\"btn btn-primary\" type=\"button\" (click)=\"add()\">+</button>\r\n</div>"

/***/ }),

/***/ "./projects/jsonformlib/src/lib/components/fieldtypes/repeat/repeat.fieldtype.ts":
/*!***************************************************************************************!*\
  !*** ./projects/jsonformlib/src/lib/components/fieldtypes/repeat/repeat.fieldtype.ts ***!
  \***************************************************************************************/
/*! exports provided: RepeatFieldType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepeatFieldType", function() { return RepeatFieldType; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-formly/core */ "./node_modules/@ngx-formly/core/fesm5/ngx-formly-core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RepeatFieldType = /** @class */ (function (_super) {
    __extends(RepeatFieldType, _super);
    function RepeatFieldType(builder, store) {
        var _this = _super.call(this, builder) || this;
        _this.store = store;
        _this.store.select(function (s) { return s.button; }).subscribe(function (c) {
            switch (c.id) {
                case "myorder":
                    c.model["Food"] = c.model.title;
                    c.model["Qty"] = 1;
                    _this.add(_this.model.length, c.model);
                    break;
            }
        });
        return _this;
    }
    RepeatFieldType.prototype.ngOnChanges = function (change) {
        console.log(change);
    };
    RepeatFieldType = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./repeat.fieldtype.html */ "./projects/jsonformlib/src/lib/components/fieldtypes/repeat/repeat.fieldtype.html")
        }),
        __metadata("design:paramtypes", [_ngx_formly_core__WEBPACK_IMPORTED_MODULE_1__["FormlyFormBuilder"], _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], RepeatFieldType);
    return RepeatFieldType;
}(_ngx_formly_core__WEBPACK_IMPORTED_MODULE_1__["FieldArrayType"]));



/***/ }),

/***/ "./projects/jsonformlib/src/lib/components/fieldtypes/table/table.fieldtype.html":
/*!***************************************************************************************!*\
  !*** ./projects/jsonformlib/src/lib/components/fieldtypes/table/table.fieldtype.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div *ngFor=\"let header of headers \" class=\"col-md-2\">\r\n       <div class='formtitle'> {{header}}</div>\r\n    </div>\r\n</div>\r\n\r\n<div *ngFor=\"let m of model ; let i = index;\" class=\"row\">\r\n    <div *ngFor=\"let header of headers\"class=\"col-md-2\">\r\n        {{m[header]}}\r\n    </div>\r\n    <json-actions [actions]=' field.fieldGroup.actions'></json-actions>\r\n</div>\r\n<hr />"

/***/ }),

/***/ "./projects/jsonformlib/src/lib/components/fieldtypes/table/table.fieldtype.ts":
/*!*************************************************************************************!*\
  !*** ./projects/jsonformlib/src/lib/components/fieldtypes/table/table.fieldtype.ts ***!
  \*************************************************************************************/
/*! exports provided: TableFieldType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableFieldType", function() { return TableFieldType; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-formly/core */ "./node_modules/@ngx-formly/core/fesm5/ngx-formly-core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TableFieldType = /** @class */ (function (_super) {
    __extends(TableFieldType, _super);
    function TableFieldType(builder, store) {
        var _this = _super.call(this, builder) || this;
        _this.store = store;
        _this.store.select(function (s) { return s.button; }).subscribe(function (c) {
            switch (c.id) {
                case "myorder":
                    c.model["Food"] = c.model.title;
                    c.model["Qty"] = 1;
                    _this.add(_this.model.length, c.model);
                    break;
            }
        });
        return _this;
    }
    TableFieldType.prototype.ngOnChanges = function (change) {
        console.log(change);
    };
    Object.defineProperty(TableFieldType.prototype, "headers", {
        get: function () {
            var x = this.field.fieldGroup[0];
            return x.Rows[0].map(function (c) { return c.label; });
        },
        enumerable: true,
        configurable: true
    });
    TableFieldType = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./table.fieldtype.html */ "./projects/jsonformlib/src/lib/components/fieldtypes/table/table.fieldtype.html")
        }),
        __metadata("design:paramtypes", [_ngx_formly_core__WEBPACK_IMPORTED_MODULE_1__["FormlyFormBuilder"], _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], TableFieldType);
    return TableFieldType;
}(_ngx_formly_core__WEBPACK_IMPORTED_MODULE_1__["FieldArrayType"]));



/***/ }),

/***/ "./projects/jsonformlib/src/lib/components/fieldtypes/title/title.fieldtype.css":
/*!**************************************************************************************!*\
  !*** ./projects/jsonformlib/src/lib/components/fieldtypes/title/title.fieldtype.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-toolbar {\r\n  flex: 1 1 auto;\r\n  justify-content: center;\r\n  font-weight: 700;\r\n  font-size: 24px;\r\n  font-family: \"Times New Roman\", Times, serif;\r\n}\r\n"

/***/ }),

/***/ "./projects/jsonformlib/src/lib/components/fieldtypes/title/title.fieldtype.html":
/*!***************************************************************************************!*\
  !*** ./projects/jsonformlib/src/lib/components/fieldtypes/title/title.fieldtype.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [class]='field.className'>{{field.templateOptions.label}}</div>"

/***/ }),

/***/ "./projects/jsonformlib/src/lib/components/fieldtypes/title/title.fieldtype.ts":
/*!*************************************************************************************!*\
  !*** ./projects/jsonformlib/src/lib/components/fieldtypes/title/title.fieldtype.ts ***!
  \*************************************************************************************/
/*! exports provided: TitleFieldType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleFieldType", function() { return TitleFieldType; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-formly/core */ "./node_modules/@ngx-formly/core/fesm5/ngx-formly-core.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var TitleFieldType = /** @class */ (function (_super) {
    __extends(TitleFieldType, _super);
    function TitleFieldType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TitleFieldType = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./title.fieldtype.html */ "./projects/jsonformlib/src/lib/components/fieldtypes/title/title.fieldtype.html"),
            styles: [__webpack_require__(/*! ./title.fieldtype.css */ "./projects/jsonformlib/src/lib/components/fieldtypes/title/title.fieldtype.css")]
        })
    ], TitleFieldType);
    return TitleFieldType;
}(_ngx_formly_core__WEBPACK_IMPORTED_MODULE_1__["FieldType"]));



/***/ }),

/***/ "./projects/jsonformlib/src/lib/components/index.ts":
/*!**********************************************************!*\
  !*** ./projects/jsonformlib/src/lib/components/index.ts ***!
  \**********************************************************/
/*! exports provided: components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
/* harmony import */ var _pages_page_form_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/page/form/form.component */ "./projects/jsonformlib/src/lib/components/pages/page/form/form.component.ts");
/* harmony import */ var _actions_actions_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions/actions.component */ "./projects/jsonformlib/src/lib/components/actions/actions.component.ts");
/* harmony import */ var _pages_page_tabs_section_tabs_section_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/page/tabs-section/tabs-section.component */ "./projects/jsonformlib/src/lib/components/pages/page/tabs-section/tabs-section.component.ts");
/* harmony import */ var _case_case_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./case/case.component */ "./projects/jsonformlib/src/lib/components/case/case.component.ts");
/* harmony import */ var _pages_page_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/page/page.component */ "./projects/jsonformlib/src/lib/components/pages/page/page.component.ts");
/* harmony import */ var _pages_pages_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/pages.component */ "./projects/jsonformlib/src/lib/components/pages/pages.component.ts");






var components = [
    _pages_page_form_form_component__WEBPACK_IMPORTED_MODULE_0__["FormComponent"],
    _actions_actions_component__WEBPACK_IMPORTED_MODULE_1__["ActionsComponent"],
    _pages_page_tabs_section_tabs_section_component__WEBPACK_IMPORTED_MODULE_2__["TabsSectionComponent"],
    _case_case_component__WEBPACK_IMPORTED_MODULE_3__["CaseComponent"],
    _pages_page_page_component__WEBPACK_IMPORTED_MODULE_4__["PageComponent"],
    _pages_pages_component__WEBPACK_IMPORTED_MODULE_5__["PagesComponent"],
];


/***/ }),

/***/ "./projects/jsonformlib/src/lib/components/pages/page/form/form.component.html":
/*!*************************************************************************************!*\
  !*** ./projects/jsonformlib/src/lib/components/pages/page/form/form.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf='display' [class]='className'>\r\n  <form [formGroup]=\"form\">\r\n    <formly-form [model]=\"model\" [fields]=\"fields\" [form]=\"form\"></formly-form>\r\n  <ng-content></ng-content>\r\n  <json-actions [actions]='formData.actions'></json-actions>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./projects/jsonformlib/src/lib/components/pages/page/form/form.component.scss":
/*!*************************************************************************************!*\
  !*** ./projects/jsonformlib/src/lib/components/pages/page/form/form.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form {\n  margin: 10px; }\n\ntextarea {\n  width: 100%; }\n\n.formboarder {\n  border: 1px solid #999999 !important;\n  margin: 5px 0; }\n\nb {\n  padding: 5px; }\n\n.level1 {\n  margin-left: 450px;\n  padding-left: 450px;\n  background-color: red;\n  font-weight: 100;\n  font-size: 8pt; }\n"

/***/ }),

/***/ "./projects/jsonformlib/src/lib/components/pages/page/form/form.component.ts":
/*!***********************************************************************************!*\
  !*** ./projects/jsonformlib/src/lib/components/pages/page/form/form.component.ts ***!
  \***********************************************************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services */ "./projects/jsonformlib/src/lib/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FormComponent = /** @class */ (function () {
    function FormComponent(formService, service) {
        this.formService = formService;
        this.service = service;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({});
        this.btclick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Object.defineProperty(FormComponent.prototype, "className", {
        get: function () {
            return this.formData.className || "formboarder";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormComponent.prototype, "display", {
        get: function () {
            return this.service.display(this.formData);
        },
        enumerable: true,
        configurable: true
    });
    FormComponent.prototype.ngOnChanges = function (change) {
        var _this = this;
        this.model = this.service.CurrentModel;
        if (this.formData) {
            this.formService
                .RowsMaptoFields(this.formData.Rows, this.model)
                .subscribe(function (fields) { return (_this.fields = fields); });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FormComponent.prototype, "formData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"])
    ], FormComponent.prototype, "form", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], FormComponent.prototype, "btclick", void 0);
    FormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "json-form",
            template: __webpack_require__(/*! ./form.component.html */ "./projects/jsonformlib/src/lib/components/pages/page/form/form.component.html"),
            styles: [__webpack_require__(/*! ./form.component.scss */ "./projects/jsonformlib/src/lib/components/pages/page/form/form.component.scss")]
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_2__["FormService"], _services__WEBPACK_IMPORTED_MODULE_2__["PageService"]])
    ], FormComponent);
    return FormComponent;
}());



/***/ }),

/***/ "./projects/jsonformlib/src/lib/components/pages/page/page.component.css":
/*!*******************************************************************************!*\
  !*** ./projects/jsonformlib/src/lib/components/pages/page/page.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./projects/jsonformlib/src/lib/components/pages/page/page.component.html":
/*!********************************************************************************!*\
  !*** ./projects/jsonformlib/src/lib/components/pages/page/page.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <div *ngIf=\"service.display(page)\">\r\n  <div [ngSwitch]=\"page.type\">\r\n    <div *ngSwitchCase=\"SupportTypes.pages\">\r\n      <json-pages [pages]='page'>\r\n      </json-pages>\r\n    </div>\r\n    <div *ngSwitchCase=\"SupportTypes.Form\">\r\n      <json-form [formData]='page'>\r\n      </json-form>\r\n    </div>\r\n    <div *ngSwitchCase=\"SupportTypes.tabgroup\">\r\n      <json-tabs-section [sections]='page.sections'></json-tabs-section>\r\n    </div>\r\n    <div *ngSwitchDefault>\r\n      <div class=\"alert alert-dange\">\r\n        The \"{{page.type}}\" is not supported\r\n      </div>\r\n      <div>It only supports <b>{{ElementTypes}} </b></div>\r\n      <br />\r\n      Page Define {{page | json}}\r\n    </div>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./projects/jsonformlib/src/lib/components/pages/page/page.component.ts":
/*!******************************************************************************!*\
  !*** ./projects/jsonformlib/src/lib/components/pages/page/page.component.ts ***!
  \******************************************************************************/
/*! exports provided: supports, PageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supports", function() { return supports; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageComponent", function() { return PageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services */ "./projects/jsonformlib/src/lib/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var supports = {
    Form: "form",
    tabgroup: "tabgroup",
    pages: "pages"
};
var PageComponent = /** @class */ (function () {
    function PageComponent(service) {
        this.service = service;
        this.SupportTypes = supports;
    }
    Object.defineProperty(PageComponent.prototype, "ElementTypes", {
        get: function () {
            var x = JSON.stringify(Object.values(this.SupportTypes));
            return x
                .replace(/"/g, "")
                .replace("[", "")
                .replace("]", "");
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PageComponent.prototype, "page", void 0);
    PageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "json-page",
            template: __webpack_require__(/*! ./page.component.html */ "./projects/jsonformlib/src/lib/components/pages/page/page.component.html"),
            styles: [__webpack_require__(/*! ./page.component.css */ "./projects/jsonformlib/src/lib/components/pages/page/page.component.css")]
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_1__["PageService"]])
    ], PageComponent);
    return PageComponent;
}());



/***/ }),

/***/ "./projects/jsonformlib/src/lib/components/pages/page/tabs-section/tabs-section.component.css":
/*!****************************************************************************************************!*\
  !*** ./projects/jsonformlib/src/lib/components/pages/page/tabs-section/tabs-section.component.css ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/deep/ .mat-tab-label{\r\n    color:white;\r\n    font-weight: 700;\r\n    background-color: #6b1c89;\r\n    font-size: 14px;\r\n    margin: 2px;\r\n}\r\n/deep/.mat-tab-label-active {\r\n    background-color:#17527c !important;\r\n} "

/***/ }),

/***/ "./projects/jsonformlib/src/lib/components/pages/page/tabs-section/tabs-section.component.html":
/*!*****************************************************************************************************!*\
  !*** ./projects/jsonformlib/src/lib/components/pages/page/tabs-section/tabs-section.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tab-group>\n    <mat-tab *ngFor=\"let section of sections; let index = index;\" [label]='section.title' class='tabColor'>\n         <json-pages [pages]='section'></json-pages> \n        <!-- <json-actions [actions]='section.actions'></json-actions> -->\n    </mat-tab>\n</mat-tab-group>"

/***/ }),

/***/ "./projects/jsonformlib/src/lib/components/pages/page/tabs-section/tabs-section.component.ts":
/*!***************************************************************************************************!*\
  !*** ./projects/jsonformlib/src/lib/components/pages/page/tabs-section/tabs-section.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: TabsSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsSectionComponent", function() { return TabsSectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TabsSectionComponent = /** @class */ (function () {
    function TabsSectionComponent() {
    }
    TabsSectionComponent.prototype.ngOnChanges = function () {
    };
    TabsSectionComponent.prototype.formAction = function (event) {
        console.log("eventcls:", event);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], TabsSectionComponent.prototype, "sections", void 0);
    TabsSectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "json-tabs-section",
            template: __webpack_require__(/*! ./tabs-section.component.html */ "./projects/jsonformlib/src/lib/components/pages/page/tabs-section/tabs-section.component.html"),
            styles: [__webpack_require__(/*! ./tabs-section.component.css */ "./projects/jsonformlib/src/lib/components/pages/page/tabs-section/tabs-section.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TabsSectionComponent);
    return TabsSectionComponent;
}());



/***/ }),

/***/ "./projects/jsonformlib/src/lib/components/pages/pages.component.css":
/*!***************************************************************************!*\
  !*** ./projects/jsonformlib/src/lib/components/pages/pages.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.bold {\r\n  font-weight: 800;\r\n}\r\n\r\n"

/***/ }),

/***/ "./projects/jsonformlib/src/lib/components/pages/pages.component.html":
/*!****************************************************************************!*\
  !*** ./projects/jsonformlib/src/lib/components/pages/pages.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let page of pages.pages  let i = index\" [class]='page.className'>\r\n <json-page [page]= 'page'></json-page>\r\n</div>\r\n\r\n<json-actions [actions]='pages.actions'></json-actions>"

/***/ }),

/***/ "./projects/jsonformlib/src/lib/components/pages/pages.component.ts":
/*!**************************************************************************!*\
  !*** ./projects/jsonformlib/src/lib/components/pages/pages.component.ts ***!
  \**************************************************************************/
/*! exports provided: PagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesComponent", function() { return PagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PagesComponent = /** @class */ (function () {
    function PagesComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PagesComponent.prototype, "pages", void 0);
    PagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "json-pages",
            template: __webpack_require__(/*! ./pages.component.html */ "./projects/jsonformlib/src/lib/components/pages/pages.component.html"),
            styles: [__webpack_require__(/*! ./pages.component.css */ "./projects/jsonformlib/src/lib/components/pages/pages.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PagesComponent);
    return PagesComponent;
}());



/***/ }),

/***/ "./projects/jsonformlib/src/lib/jsonform.module.ts":
/*!*********************************************************!*\
  !*** ./projects/jsonformlib/src/lib/jsonform.module.ts ***!
  \*********************************************************/
/*! exports provided: FIELD_TYPES, Lib_Components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lib_Components", function() { return Lib_Components; });
/* harmony import */ var _components_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/index */ "./projects/jsonformlib/src/lib/components/index.ts");
/* harmony import */ var _pipes_myJson_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pipes/myJson.pipe */ "./projects/jsonformlib/src/lib/pipes/myJson.pipe.ts");
/* harmony import */ var _pipes_pre_define_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pipes/pre-define.pipe */ "./projects/jsonformlib/src/lib/pipes/pre-define.pipe.ts");
/* harmony import */ var _pipes_dataformat_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pipes/dataformat.pipe */ "./projects/jsonformlib/src/lib/pipes/dataformat.pipe.ts");
/* harmony import */ var _components_fieldtypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/fieldtypes */ "./projects/jsonformlib/src/lib/components/fieldtypes/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FIELD_TYPES", function() { return _components_fieldtypes__WEBPACK_IMPORTED_MODULE_4__["FIELD_TYPES"]; });







var Lib_Components = _components_index__WEBPACK_IMPORTED_MODULE_0__["components"].concat([
    _pipes_myJson_pipe__WEBPACK_IMPORTED_MODULE_1__["MyJosnPipe"],
    _pipes_pre_define_pipe__WEBPACK_IMPORTED_MODULE_2__["PreDefinePipe"],
    _pipes_dataformat_pipe__WEBPACK_IMPORTED_MODULE_3__["DataformatPipe"]
], _components_fieldtypes__WEBPACK_IMPORTED_MODULE_4__["field_types"]);


/***/ }),

/***/ "./projects/jsonformlib/src/lib/ngrxcore/actions/bt.actions.ts":
/*!*********************************************************************!*\
  !*** ./projects/jsonformlib/src/lib/ngrxcore/actions/bt.actions.ts ***!
  \*********************************************************************/
/*! exports provided: BTActionTypes, BTActionData, BTAction, BTActionSuccess, BTActionFailure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BTActionTypes", function() { return BTActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BTActionData", function() { return BTActionData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BTAction", function() { return BTAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BTActionSuccess", function() { return BTActionSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BTActionFailure", function() { return BTActionFailure; });
var BTActionTypes;
(function (BTActionTypes) {
    BTActionTypes["Fired"] = "BTAction fired";
    BTActionTypes["Success"] = "BTAction Success";
    BTActionTypes["Failure"] = "BTAction Failure";
})(BTActionTypes || (BTActionTypes = {}));
var BTActionData = /** @class */ (function () {
    function BTActionData() {
    }
    return BTActionData;
}());

var BTAction = /** @class */ (function () {
    function BTAction(payload) {
        this.payload = payload;
        this.type = BTActionTypes.Fired;
    }
    return BTAction;
}());

var BTActionSuccess = /** @class */ (function () {
    function BTActionSuccess(payload) {
        this.payload = payload;
        this.type = BTActionTypes.Success;
    }
    return BTActionSuccess;
}());

var BTActionFailure = /** @class */ (function () {
    function BTActionFailure(payload) {
        this.payload = payload;
        this.type = BTActionTypes.Failure;
    }
    return BTActionFailure;
}());



/***/ }),

/***/ "./projects/jsonformlib/src/lib/ngrxcore/actions/page.actions.ts":
/*!***********************************************************************!*\
  !*** ./projects/jsonformlib/src/lib/ngrxcore/actions/page.actions.ts ***!
  \***********************************************************************/
/*! exports provided: PageActionTypes, PageAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageActionTypes", function() { return PageActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageAction", function() { return PageAction; });
var PageActionTypes;
(function (PageActionTypes) {
    PageActionTypes["ChangeFired"] = "Page Change Action fired";
})(PageActionTypes || (PageActionTypes = {}));
var PageAction = /** @class */ (function () {
    function PageAction(payload) {
        this.payload = payload;
        this.type = PageActionTypes.ChangeFired;
    }
    return PageAction;
}());



/***/ }),

/***/ "./projects/jsonformlib/src/lib/ngrxcore/effects/bt.effects.ts":
/*!*********************************************************************!*\
  !*** ./projects/jsonformlib/src/lib/ngrxcore/effects/bt.effects.ts ***!
  \*********************************************************************/
/*! exports provided: BTEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BTEffects", function() { return BTEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _actions_bt_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/bt.actions */ "./projects/jsonformlib/src/lib/ngrxcore/actions/bt.actions.ts");
/* harmony import */ var _services_bt_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/bt.service */ "./projects/jsonformlib/src/lib/ngrxcore/services/bt.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var BTEffects = /** @class */ (function () {
    function BTEffects(actions$, btService, router) {
        var _this = this;
        this.actions$ = actions$;
        this.btService = btService;
        this.router = router;
        this.btFired$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_bt_actions__WEBPACK_IMPORTED_MODULE_5__["BTActionTypes"].Fired), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (x) {
            console.log("map", x.payload);
            return x.payload;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["exhaustMap"])(function (action) {
            var xx = _this.btService.Fired(action).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
                return new _actions_bt_actions__WEBPACK_IMPORTED_MODULE_5__["BTActionSuccess"](data);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
                console.error(error);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _actions_bt_actions__WEBPACK_IMPORTED_MODULE_5__["BTActionFailure"](error));
            }));
            console.log("exhaustMap", action, xx);
            return xx;
        }));
        this.btFiredSuccess$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_bt_actions__WEBPACK_IMPORTED_MODULE_5__["BTActionTypes"].Success), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (action) {
            console.log("btFiredSuccess", action.payload);
            if (action.payload.url) {
                return _this.router.navigate([action.payload.url]);
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            console.error(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({ error: error });
        }));
        this.btFiredFailure$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_bt_actions__WEBPACK_IMPORTED_MODULE_5__["BTActionTypes"].Failure), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (error) {
            //  console.log(error.payload.url);
            return _this.router.navigate([error.payload.url]);
        }));
    }
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        __metadata("design:type", Object)
    ], BTEffects.prototype, "btFired$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])({ dispatch: false }),
        __metadata("design:type", Object)
    ], BTEffects.prototype, "btFiredSuccess$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])({ dispatch: false }),
        __metadata("design:type", Object)
    ], BTEffects.prototype, "btFiredFailure$", void 0);
    BTEffects = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"],
            _services_bt_service__WEBPACK_IMPORTED_MODULE_6__["BTService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], BTEffects);
    return BTEffects;
}());



/***/ }),

/***/ "./projects/jsonformlib/src/lib/ngrxcore/ngrxcore.module.ts":
/*!******************************************************************!*\
  !*** ./projects/jsonformlib/src/lib/ngrxcore/ngrxcore.module.ts ***!
  \******************************************************************/
/*! exports provided: NgRxCoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgRxCoreModule", function() { return NgRxCoreModule; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers */ "./projects/jsonformlib/src/lib/ngrxcore/reducers/index.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/router-store */ "./node_modules/@ngrx/router-store/fesm5/router-store.js");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm5/store-devtools.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _effects_bt_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./effects/bt.effects */ "./projects/jsonformlib/src/lib/ngrxcore/effects/bt.effects.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// import { reducer } from "./reducers/";

var NgRxCoreModule = /** @class */ (function () {
    function NgRxCoreModule() {
    }
    NgRxCoreModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
            imports: [
                /**
                 * StoreModule.forRoot is imported once in the root module, accepting a reducer
                 * function or object map of reducer functions. If passed an object of
                 * reducers, combineReducers will be run creating your application
                 * meta-reducer. This returns all providers for an @ngrx/store
                 * based application.
                 */
                _ngrx_store__WEBPACK_IMPORTED_MODULE_0__["StoreModule"].forRoot(_reducers__WEBPACK_IMPORTED_MODULE_1__["reducers"], { metaReducers: _reducers__WEBPACK_IMPORTED_MODULE_1__["metaReducers"] }),
                // StoreModule.forFeature("jsonformlib", reducer),
                /**
                 * @ngrx/router-store keeps router state up-to-date in the store.
                 */
                _ngrx_router_store__WEBPACK_IMPORTED_MODULE_3__["StoreRouterConnectingModule"].forRoot({
                    /*
                      They stateKey defines the name of the state used by the router-store reducer.
                      This matches the key defined in the map of reducers
                    */
                    stateKey: "router"
                }),
                /**
                 * Store devtools instrument the store retaining past versions of state
                 * and recalculating new states. This enables powerful time-travel
                 * debugging.
                 *
                 * To use the debugger, install the Redux Devtools extension for either
                 * Chrome or Firefox
                 *
                 * See: https://github.com/zalmoxisus/redux-devtools-extension
                 */
                _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_4__["StoreDevtoolsModule"].instrument({
                    name: "JSON Form Lib Store DevTools",
                    logOnly: true // ?? environment.production,
                }),
                /**
                 * EffectsModule.forRoot() is imported once in the root module and
                 * sets up the effects class to be initialized immediately when the
                 * application starts.
                 *
                 * See: https://github.com/ngrx/platform/blob/master/docs/effects/api.md#forroot
                 */
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["EffectsModule"].forRoot([]),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["EffectsModule"].forFeature([_effects_bt_effects__WEBPACK_IMPORTED_MODULE_6__["BTEffects"]])
                /**
                 * `provideDB` sets up @ngrx/db with the provided schema and makes the Database
                 * service available.
                 */
            ],
            providers: []
        }),
        __metadata("design:paramtypes", [])
    ], NgRxCoreModule);
    return NgRxCoreModule;
}());



/***/ }),

/***/ "./projects/jsonformlib/src/lib/ngrxcore/reducers/bt.reducer.ts":
/*!**********************************************************************!*\
  !*** ./projects/jsonformlib/src/lib/ngrxcore/reducers/bt.reducer.ts ***!
  \**********************************************************************/
/*! exports provided: initialState, btreducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "btreducer", function() { return btreducer; });
/* harmony import */ var _actions_bt_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/bt.actions */ "./projects/jsonformlib/src/lib/ngrxcore/actions/bt.actions.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var initialState = {
    id: null,
    error: null,
    pending: false
};
function btreducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _actions_bt_actions__WEBPACK_IMPORTED_MODULE_0__["BTActionTypes"].Fired: {
            var x = __assign({}, state, { id: action.payload.action.id, model: action.payload.model, error: null, pending: true });
            return x;
        }
        case _actions_bt_actions__WEBPACK_IMPORTED_MODULE_0__["BTActionTypes"].Success: {
            return __assign({}, state, { error: null, pending: false });
        }
        case _actions_bt_actions__WEBPACK_IMPORTED_MODULE_0__["BTActionTypes"].Failure: {
            return __assign({}, state, { error: action.payload, pending: false });
        }
        default: {
            return state;
        }
    }
}


/***/ }),

/***/ "./projects/jsonformlib/src/lib/ngrxcore/reducers/index.ts":
/*!*****************************************************************!*\
  !*** ./projects/jsonformlib/src/lib/ngrxcore/reducers/index.ts ***!
  \*****************************************************************/
/*! exports provided: btreducer, getButtonState, getButtonStateAsync, reducers, logger, metaReducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getButtonState", function() { return getButtonState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getButtonStateAsync", function() { return getButtonStateAsync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logger", function() { return logger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metaReducers", function() { return metaReducers; });
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/router-store */ "./node_modules/@ngrx/router-store/fesm5/router-store.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _bt_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bt.reducer */ "./projects/jsonformlib/src/lib/ngrxcore/reducers/bt.reducer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "btreducer", function() { return _bt_reducer__WEBPACK_IMPORTED_MODULE_2__["btreducer"]; });

/* harmony import */ var _page_reduce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page.reduce */ "./projects/jsonformlib/src/lib/ngrxcore/reducers/page.reduce.ts");





function getButtonState() {
    var featureSel = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createFeatureSelector"])("button");
    return Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(featureSel, function (state) { return state; });
}
function getButtonStateAsync(store) {
    return store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(getButtonState()));
}
/**
 * Our state is composed of a map of action reducer functions.
 * These reducer functions are called with each dispatched action
 * and the current or initial state and return a new immutable state.
 */
var reducers = {
    // layout: fromLayout.reducer,
    page: _page_reduce__WEBPACK_IMPORTED_MODULE_3__["pagereducer"],
    button: _bt_reducer__WEBPACK_IMPORTED_MODULE_2__["btreducer"],
    router: _ngrx_router_store__WEBPACK_IMPORTED_MODULE_0__["routerReducer"]
};
// console.log all actions
function logger(reducer) {
    return function (state, action) {
        // console.log('state', state);
        // console.log('action', action);
        return reducer(state, action);
    };
}
var metaReducers = false // environment.production
    ? undefined
    : [];


/***/ }),

/***/ "./projects/jsonformlib/src/lib/ngrxcore/reducers/page.reduce.ts":
/*!***********************************************************************!*\
  !*** ./projects/jsonformlib/src/lib/ngrxcore/reducers/page.reduce.ts ***!
  \***********************************************************************/
/*! exports provided: pagereducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pagereducer", function() { return pagereducer; });
/* harmony import */ var _actions_page_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../actions/page.actions */ "./projects/jsonformlib/src/lib/ngrxcore/actions/page.actions.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

function pagereducer(state, action) {
    switch (action.type) {
        case _actions_page_actions__WEBPACK_IMPORTED_MODULE_0__["PageActionTypes"].ChangeFired:
            var x = __assign({}, state, { payload: action.payload });
            return x;
        default:
            return state;
    }
}


/***/ }),

/***/ "./projects/jsonformlib/src/lib/ngrxcore/services/bt.service.ts":
/*!**********************************************************************!*\
  !*** ./projects/jsonformlib/src/lib/ngrxcore/services/bt.service.ts ***!
  \**********************************************************************/
/*! exports provided: BTService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BTService", function() { return BTService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");

var BTService = /** @class */ (function () {
    function BTService() {
    }
    BTService.prototype.Fired = function (action) {
        console.log("Wrong Fired:", action);
        switch (action.id) {
            case 'myorder':
                break;
            default:
                break;
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(action);
    };
    return BTService;
}());



/***/ }),

/***/ "./projects/jsonformlib/src/lib/pipes/dataformat.pipe.ts":
/*!***************************************************************!*\
  !*** ./projects/jsonformlib/src/lib/pipes/dataformat.pipe.ts ***!
  \***************************************************************/
/*! exports provided: DataformatPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataformatPipe", function() { return DataformatPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataformatPipe = /** @class */ (function () {
    function DataformatPipe(datepipe) {
        this.datepipe = datepipe;
    }
    DataformatPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (value[0].match(/Date/)) {
            return this.datepipe.transform(value[1], "yyyy-MM-dd");
        }
        return value;
    };
    DataformatPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: "dateformat"
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]])
    ], DataformatPipe);
    return DataformatPipe;
}());



/***/ }),

/***/ "./projects/jsonformlib/src/lib/pipes/myJson.pipe.ts":
/*!***********************************************************!*\
  !*** ./projects/jsonformlib/src/lib/pipes/myJson.pipe.ts ***!
  \***********************************************************/
/*! exports provided: MyJosnPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyJosnPipe", function() { return MyJosnPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MyJosnPipe = /** @class */ (function () {
    function MyJosnPipe() {
    }
    // tslint:disable-next-line:typedef
    MyJosnPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return this.Define(value);
    };
    MyJosnPipe.prototype.FindKeys = function (v) {
        return JSON.stringify(v, function (key, value) {
            if ([
                "model",
                "formControl",
                "id",
                "wrappers",
                "type",
                "className",
                "validators",
                "path",
                "focus",
                "required",
                "templateOptions",
                "fieldGroupClassName",
                "datakey",
                "dataKey",
                "_formlyKeyPath",
                "hideExpression",
                "defaultValue",
                "options",
                "data",
                "descirption",
                "tables",
                "actions",
                "hide",
                "fields",
                "title"
            ].find(function (c) { return c === key; })) {
                return;
            }
            return value;
        }, 4);
    };
    MyJosnPipe.prototype.Define = function (value) {
        // Demo: Circular reference
        // Note: cache should not be re-used by repeated calls to JSON.stringify.
        var cache = new Map();
        return JSON.stringify(value, 
        // tslint:disable-next-line:no-shadowed-variable
        function (key, value) {
            if (["model", "formControl", "id", "wrappers"].find(function (c) { return c === key; })) {
                return;
            }
            if (typeof value === "object" && value !== null) {
                if (cache.get(value)) {
                    // Circular reference found, discard key
                    // console.log("value:", value);
                    return;
                }
                // Store value in our map
                cache.set(value, true);
            }
            return value;
        }, 2);
    };
    MyJosnPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: "myjson"
        }),
        __metadata("design:paramtypes", [])
    ], MyJosnPipe);
    return MyJosnPipe;
}());



/***/ }),

/***/ "./projects/jsonformlib/src/lib/pipes/pre-define.pipe.ts":
/*!***************************************************************!*\
  !*** ./projects/jsonformlib/src/lib/pipes/pre-define.pipe.ts ***!
  \***************************************************************/
/*! exports provided: PreDefinePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreDefinePipe", function() { return PreDefinePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PreDefinePipe = /** @class */ (function () {
    function PreDefinePipe() {
    }
    PreDefinePipe.prototype.transform = function (value, args) {
        return null;
    };
    PreDefinePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'preDefine'
        })
    ], PreDefinePipe);
    return PreDefinePipe;
}());



/***/ }),

/***/ "./projects/jsonformlib/src/lib/services/appIndex.service.ts":
/*!*******************************************************************!*\
  !*** ./projects/jsonformlib/src/lib/services/appIndex.service.ts ***!
  \*******************************************************************/
/*! exports provided: AppIndexService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppIndexService", function() { return AppIndexService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppIndexService = /** @class */ (function () {
    function AppIndexService(http) {
        this.http = http;
        this.fieldpreDefineLib = [];
        this.fieldGroup = [];
    }
    AppIndexService.prototype.LoadIndex = function (indexPath) {
        var _this = this;
        if (!this.appIndex$) {
            this.appIndex$ = this.http.get(indexPath);
            this.appIndex$.subscribe(function (c) {
                _this.appIndex = c;
            });
        }
        return this.appIndex$;
    };
    Object.defineProperty(AppIndexService.prototype, "Menus$", {
        get: function () {
            var _this = this;
            var menu$ = this.appIndex ? Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.appIndex) : this.appIndex$;
            return menu$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (c) {
                var menu = [];
                var value = _this.CurrentUser
                    ? _this.CurrentUser.domain
                    : _this.appIndex.Resources.defaultDomin;
                value.forEach(function (cc) {
                    return menu.push.apply(menu, _this.appIndex.Resources[cc].map(function (ccc) { return ccc.menu; }));
                });
                return menu.filter(function (x) { return x; });
            }));
        },
        enumerable: true,
        configurable: true
    });
    AppIndexService.prototype.getFieldGroup = function (fg) {
        var x = this.fieldGroup
            ? this.fieldGroup.find(function (c) { return c.libId === fg.libId; })
            : null;
        x = x ? x[fg.libId] : null;
        if (fg.label && x) {
            x[0][0].label = fg.label;
        }
        console.log(x);
        return x;
    };
    AppIndexService.prototype.getPredefine = function (key) {
        return this.fieldpreDefineLib.find(function (c) { return c.key === key; });
    };
    Object.defineProperty(AppIndexService.prototype, "CurrentUser", {
        get: function () {
            try {
                return JSON.parse(localStorage.getItem("currentUser"));
            }
            catch (error) {
                return undefined;
            }
        },
        set: function (value) {
            if (!value) {
                localStorage.removeItem("currentUser");
            }
            else {
                localStorage.setItem("currentUser", JSON.stringify(value));
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppIndexService.prototype, "Libs$", {
        get: function () {
            var _this = this;
            if (this.Libs) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.Libs);
            }
            return this.appIndex$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (c) {
                if (c.Libs) {
                    var x = Object.keys(c.Libs).map(function (lib) { return _this.LoadLib(lib); });
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(x).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["combineAll"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (cc) {
                        _this.Libs = cc;
                        _this.fieldpreDefineLib = _this.getLib("fieldpreDefine");
                        _this.fieldGroup = _this.getLib("fieldGroup");
                        return cc;
                    }));
                }
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
            }));
        },
        enumerable: true,
        configurable: true
    });
    AppIndexService.prototype.LoadLib = function (key) {
        var _this = this;
        try {
            if (this.appIndex) {
                var uidef = this.appIndex.Libs ? this.appIndex.Libs[key] : null;
                if (uidef) {
                    if (uidef.length > 0) {
                        var x = uidef.path ? uidef.path : key;
                        var path_1 = this.appIndex.basepath.libpath + x;
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["forkJoin"])(uidef.map(function (cc) { return _this.http.get(path_1 + "/" + cc); })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (c) {
                            return { key: key, data: c };
                        }));
                    }
                }
            }
        }
        catch (error) {
            console.log(error);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])([]);
    };
    AppIndexService.prototype.getLib = function (key) {
        if (!this.Libs) {
            return undefined;
        }
        var x = this.Libs.filter(function (c) { return c.key === key; }).map(function (c) {
            return c.data.flat();
        })[0];
        console.log("getLib", key);
        return x;
    };
    AppIndexService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], AppIndexService);
    return AppIndexService;
}());



/***/ }),

/***/ "./projects/jsonformlib/src/lib/services/data.service.ts":
/*!***************************************************************!*\
  !*** ./projects/jsonformlib/src/lib/services/data.service.ts ***!
  \***************************************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
    }
    DataService.prototype.getall = function (url) {
        return this.http.get(url);
    };
    DataService.prototype.getbyid = function (url, id) {
        return this.http.get(url);
    };
    DataService.prototype.post = function (url, data) {
        return this.http.post(url, data);
    };
    DataService.prototype.put = function (url, data) {
        return this.http.put(url, data);
    };
    DataService.prototype.delete = function (url, data) {
        return this.http.put(url, data);
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./projects/jsonformlib/src/lib/services/field.service.ts":
/*!****************************************************************!*\
  !*** ./projects/jsonformlib/src/lib/services/field.service.ts ***!
  \****************************************************************/
/*! exports provided: FieldService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldService", function() { return FieldService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Interface */ "./projects/jsonformlib/src/lib/Interface/index.ts");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _appIndex_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./appIndex.service */ "./projects/jsonformlib/src/lib/services/appIndex.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var coldefs = {
    1: "col-sm-12",
    2: "col-sm-6",
    3: "col-sm-4",
    4: "col-sm-3",
    5: "col-sm-2",
    6: "col-sm-2"
};
function findRowCss(rowlen, cellClassName) {
    cellClassName = Object(util__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(cellClassName) ? "" : cellClassName;
    return cellClassName.indexOf("col") === -1
        ? cellClassName + " " + (coldefs[rowlen] || "col-sm-1")
        : cellClassName;
}
var FieldService = /** @class */ (function () {
    function FieldService(validation, indexservice) {
        this.indexservice = indexservice;
        this.validator = { validation: validation };
    }
    FieldService.prototype.Create = function (cell, rowLength) {
        try {
            if (cell.template) {
                return cell;
            }
            cell.key = cell.type === "info" ? cell.type : cell.key;
            var field = this.CreateFormlyField(cell);
            field.className = findRowCss(rowLength, cell.className);
            this.setupFieldByType(field);
            this.overwriteFields(field, cell);
            return field;
        }
        catch (error) {
            console.log("error", error);
        }
    };
    // check prefedine UI, if not return orginial cell definitation.
    FieldService.prototype.CreateFormlyField = function (field) {
        var predefine = this.indexservice.getPredefine(field.key);
        return predefine
            ? JSON.parse(JSON.stringify(predefine))
            : {
                key: field.key,
                type: field.type,
                templateOptions: {
                    label: field.label,
                    options: field.options,
                    inline: field.inline
                }
            };
    };
    FieldService.prototype.setupFieldByType = function (field) {
        field.type = field.type || "input";
        switch (field.type) {
            case "select":
                field.defaultValue = -1;
                break;
            case "date":
                field.type = "input";
                field.templateOptions.type = "date";
                break;
            case "checkbox":
                field.defaultValue = false;
                field.className = field.className + " text-left";
                break;
            case "textarea":
                field.templateOptions.rows = 6;
                field.templateOptions.cols = 80;
                break;
            case "radio":
                break;
            case "readonly":
                break;
            default:
                if (!field.templateOptions.label) {
                    field.templateOptions.label = field.key;
                }
                break;
        }
        return field;
    };
    FieldService.prototype.addValidaation = function (field) {
        if (field.templateOptions.required) {
            field.validation = {
                messages: {
                    required: "you need add $[field.templateOptions.label]"
                }
            };
        }
    };
    FieldService.prototype.overwriteFields = function (field, cell) {
        if (cell.key === null) {
            return;
        }
        field.templateOptions.label = cell.label || field.templateOptions.label;
        field.defaultValue = cell.defaultValue || field.defaultValue;
        field.hideExpression = field.hideExpression || cell.hideExpression;
        field.expressionProperties =
            cell.expressionProperties || field.expressionProperties;
        field.lifecycle = field.lifecycle || cell.lifecycle;
        if (cell.required === true) {
            field.templateOptions.required = true;
        }
        field.validators = this.validator;
    };
    FieldService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_Interface__WEBPACK_IMPORTED_MODULE_1__["FIELD_VALIDATION"])),
        __metadata("design:paramtypes", [Object, _appIndex_service__WEBPACK_IMPORTED_MODULE_3__["AppIndexService"]])
    ], FieldService);
    return FieldService;
}());



/***/ }),

/***/ "./projects/jsonformlib/src/lib/services/form.service.ts":
/*!***************************************************************!*\
  !*** ./projects/jsonformlib/src/lib/services/form.service.ts ***!
  \***************************************************************/
/*! exports provided: FormService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormService", function() { return FormService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _field_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./field.service */ "./projects/jsonformlib/src/lib/services/field.service.ts");
/* harmony import */ var _appIndex_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./appIndex.service */ "./projects/jsonformlib/src/lib/services/appIndex.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FormService = /** @class */ (function () {
    function FormService(fieldService, indexservice) {
        this.fieldService = fieldService;
        this.indexservice = indexservice;
    }
    FormService.prototype.RowsMaptoFields = function (Rows, model) {
        var _this = this;
        return this.indexservice.Libs$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function () {
            var result = _this.FillPage(Rows).map(function (fieldDef) {
                var xx = _this.processfiedDef(fieldDef);
                switch (xx.type) {
                    case "repeat":
                        model[xx.key] = xx.model;
                        break;
                    default:
                        break;
                }
                return xx;
            });
            return result;
        }, function (e) {
            console.log(e);
        }));
    };
    FormService.prototype.FillPage = function (Rows) {
        var _this = this;
        try {
            var result = Rows.map(function (fg) {
                if (fg) {
                    if (fg.libId) {
                        var x = _this.indexservice.getFieldGroup(fg);
                        return x;
                    }
                    else {
                        return [fg];
                    }
                }
            });
            result = result.flat();
            return result;
        }
        catch (error) {
            console.log("error", error, Rows);
        }
    };
    FormService.prototype.processfiedDef = function (fieldDef) {
        var _this = this;
        switch (fieldDef.type) {
            case "repeat":
            case "table":
                fieldDef.fieldArray.fieldGroup = fieldDef.fieldArray.Rows.map(function (c) {
                    return _this.processfiedDef(c);
                });
                return fieldDef;
            default:
                return {
                    fieldGroupClassName: fieldDef.fieldGroupClassName
                        ? fieldDef.fieldGroupClassName
                        : "row",
                    hideExpression: fieldDef.hideExpression,
                    fieldGroup: fieldDef.Rows
                        ? fieldDef.Rows.map(function (c) { return _this.processfiedDef(c); })
                        : this.processField(fieldDef)
                };
        }
    };
    FormService.prototype.CreateField = function (field, rowlength) {
        if (field.lifecycle) {
            field.lifecycle = this.addlifeCyle(field.lifecycle);
        }
        return this.fieldService.Create(field, rowlength);
    };
    FormService.prototype.processField = function (fieldDef) {
        var _this = this;
        try {
            var len_1 = fieldDef.length;
            if (!len_1) {
                return [this.CreateField(fieldDef, len_1)];
            }
            return fieldDef.map(function (f) { return _this.CreateField(f, len_1); });
        }
        catch (error) {
            console.error(error, fieldDef);
        }
    };
    FormService.prototype.addlifeCyle = function (cycle) {
        return {
            onInit: function (form, field) {
                try {
                    form
                        .get(cycle.depend_key)
                        .valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["takeUntil"])(new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["startWith"])(form.get(cycle.depend_key).value), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (fieldId) {
                        field.hide = fieldId !== cycle.value;
                    }))
                        .subscribe();
                }
                catch (_a) {
                    console.error(cycle.depend_key);
                }
            }
        };
    };
    FormService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_field_service__WEBPACK_IMPORTED_MODULE_3__["FieldService"],
            _appIndex_service__WEBPACK_IMPORTED_MODULE_4__["AppIndexService"]])
    ], FormService);
    return FormService;
}());



/***/ }),

/***/ "./projects/jsonformlib/src/lib/services/index.ts":
/*!********************************************************!*\
  !*** ./projects/jsonformlib/src/lib/services/index.ts ***!
  \********************************************************/
/*! exports provided: PageService, FormService, FieldService, AppIndexService, DataService, JSON_SERVICES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JSON_SERVICES", function() { return JSON_SERVICES; });
/* harmony import */ var _page_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page.service */ "./projects/jsonformlib/src/lib/services/page.service.ts");
/* harmony import */ var _form_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.service */ "./projects/jsonformlib/src/lib/services/form.service.ts");
/* harmony import */ var _field_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./field.service */ "./projects/jsonformlib/src/lib/services/field.service.ts");
/* harmony import */ var _appIndex_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./appIndex.service */ "./projects/jsonformlib/src/lib/services/appIndex.service.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data.service */ "./projects/jsonformlib/src/lib/services/data.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PageService", function() { return _page_service__WEBPACK_IMPORTED_MODULE_0__["PageService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormService", function() { return _form_service__WEBPACK_IMPORTED_MODULE_1__["FormService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FieldService", function() { return _field_service__WEBPACK_IMPORTED_MODULE_2__["FieldService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppIndexService", function() { return _appIndex_service__WEBPACK_IMPORTED_MODULE_3__["AppIndexService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return _data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]; });











var JSON_SERVICES = [
    _appIndex_service__WEBPACK_IMPORTED_MODULE_3__["AppIndexService"],
    _page_service__WEBPACK_IMPORTED_MODULE_0__["PageService"],
    _form_service__WEBPACK_IMPORTED_MODULE_1__["FormService"],
    _field_service__WEBPACK_IMPORTED_MODULE_2__["FieldService"],
    _data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]
];


/***/ }),

/***/ "./projects/jsonformlib/src/lib/services/page.service.ts":
/*!***************************************************************!*\
  !*** ./projects/jsonformlib/src/lib/services/page.service.ts ***!
  \***************************************************************/
/*! exports provided: PageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageService", function() { return PageService; });
/* harmony import */ var _ngrxcore_actions_page_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ngrxcore/actions/page.actions */ "./projects/jsonformlib/src/lib/ngrxcore/actions/page.actions.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _appIndex_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./appIndex.service */ "./projects/jsonformlib/src/lib/services/appIndex.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var defaultCase = {
    defCase: {
        title: " title",
        pages: [
            {
                type: "form",
                Rows: [
                    [
                        {
                            key: "key1",
                            label: "first"
                        }
                    ]
                ]
            }
        ]
    },
    model: {}
};
var PageService = /** @class */ (function () {
    function PageService(appIndex, http, store) {
        this.appIndex = appIndex;
        this.http = http;
        this.store = store;
        this.CurrentPage = null;
    }
    Object.defineProperty(PageService.prototype, "DefaultCase", {
        get: function () {
            var x = localStorage.getItem("page");
            return x ? JSON.parse(x) : defaultCase;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageService.prototype, "CurrentPage", {
        set: function (value) {
            this._currentPage = value || this.DefaultCase;
            this._currentPage.model = this._currentPage.model || {};
            if (value) {
                if (value.src === "CaseComponent") {
                    this.store.dispatch(new _ngrxcore_actions_page_actions__WEBPACK_IMPORTED_MODULE_0__["PageAction"](this._currentPage));
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageService.prototype, "CurrentModel", {
        get: function () {
            var x = this._currentPage ? this._currentPage.model : {};
            return x || {};
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageService.prototype, "_appIndex", {
        get: function () {
            return this.appIndex.appIndex;
        },
        enumerable: true,
        configurable: true
    });
    PageService.prototype.display = function (form) {
        if (!form) {
            return false;
        }
        return form.hideExpression
            ? !Function("model", "\n           return model? " + form.hideExpression + ": false; ")(this._currentPage.model)
            : true;
    };
    PageService.prototype.getPath = function (def, dom, type) {
        try {
            switch (type) {
                case "uiDefPath":
                    return this._appIndex.basepath.uipath + "/" + dom + "/" + def.paths.uiDefPath;
                case "iniapi":
                    return def.paths.iniapi
                        ? this._appIndex.basepath.datapath + "/" + dom + "/" + def.paths.iniapi
                        : null;
                default:
                    break;
            }
        }
        catch (e) {
            console.error(e);
        }
    };
    PageService.prototype.LoadCase = function (dom, caseID) {
        var _this = this;
        return this.appIndex.appIndex$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () {
            var x = _this._appIndex.Resources[dom].find(function (c) { return c.caseID === caseID; });
            if (!x) {
                var pagID_1 = "pagenotfound";
                if (caseID === "logout") {
                    pagID_1 = "login";
                    _this.appIndex.CurrentUser = null;
                }
                x = _this._appIndex.Resources[dom].find(function (c) { return c.caseID === pagID_1; });
            }
            return x;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (def) {
            if (def) {
                if (def.paths) {
                    var urls = [_this.getPath(def, dom, "uiDefPath")];
                    if (def.paths.iniapi) {
                        urls.push(_this.getPath(def, dom, "iniapi"));
                    }
                    var xx = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])(urls.map(function (url) { return _this.http.get(url); }));
                    return xx;
                }
                else {
                    console.error(def, "no paths fields defined");
                }
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([]);
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (c) {
            return c;
        }));
    };
    PageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
        // handle broadcasting page update
        ,
        __metadata("design:paramtypes", [_appIndex_service__WEBPACK_IMPORTED_MODULE_5__["AppIndexService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"]])
    ], PageService);
    return PageService;
}());



/***/ }),

/***/ "./projects/jsonformlib/src/lib/shared.module.ts":
/*!*******************************************************!*\
  !*** ./projects/jsonformlib/src/lib/shared.module.ts ***!
  \*******************************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrxcore_ngrxcore_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ngrxcore/ngrxcore.module */ "./projects/jsonformlib/src/lib/ngrxcore/ngrxcore.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [],
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatExpansionModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"],
                _ngrxcore_ngrxcore_module__WEBPACK_IMPORTED_MODULE_8__["NgRxCoreModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatListModule"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./projects/jsonformlib/src/public_api.ts":
/*!************************************************!*\
  !*** ./projects/jsonformlib/src/public_api.ts ***!
  \************************************************/
/*! exports provided: AppIndexService, DataService, SharedModule, MyJosnPipe, getButtonState, getButtonStateAsync, BTAction, BTActionFailure, BTActionSuccess, BTService, NgRxCoreModule, Lib_Components, FIELD_TYPES, JSON_SERVICES, FIELD_VALIDATION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_Interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/Interface */ "./projects/jsonformlib/src/lib/Interface/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FIELD_VALIDATION", function() { return _lib_Interface__WEBPACK_IMPORTED_MODULE_0__["FIELD_VALIDATION"]; });

/* harmony import */ var _lib_services_appIndex_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/services/appIndex.service */ "./projects/jsonformlib/src/lib/services/appIndex.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppIndexService", function() { return _lib_services_appIndex_service__WEBPACK_IMPORTED_MODULE_1__["AppIndexService"]; });

/* harmony import */ var _lib_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/services/data.service */ "./projects/jsonformlib/src/lib/services/data.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return _lib_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]; });

/* harmony import */ var _lib_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/shared.module */ "./projects/jsonformlib/src/lib/shared.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return _lib_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]; });

/* harmony import */ var _lib_pipes_myJson_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/pipes/myJson.pipe */ "./projects/jsonformlib/src/lib/pipes/myJson.pipe.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MyJosnPipe", function() { return _lib_pipes_myJson_pipe__WEBPACK_IMPORTED_MODULE_4__["MyJosnPipe"]; });

/* harmony import */ var _lib_ngrxcore_reducers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/ngrxcore/reducers */ "./projects/jsonformlib/src/lib/ngrxcore/reducers/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getButtonState", function() { return _lib_ngrxcore_reducers__WEBPACK_IMPORTED_MODULE_5__["getButtonState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getButtonStateAsync", function() { return _lib_ngrxcore_reducers__WEBPACK_IMPORTED_MODULE_5__["getButtonStateAsync"]; });

/* harmony import */ var _lib_ngrxcore_actions_bt_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/ngrxcore/actions/bt.actions */ "./projects/jsonformlib/src/lib/ngrxcore/actions/bt.actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BTAction", function() { return _lib_ngrxcore_actions_bt_actions__WEBPACK_IMPORTED_MODULE_6__["BTAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BTActionFailure", function() { return _lib_ngrxcore_actions_bt_actions__WEBPACK_IMPORTED_MODULE_6__["BTActionFailure"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BTActionSuccess", function() { return _lib_ngrxcore_actions_bt_actions__WEBPACK_IMPORTED_MODULE_6__["BTActionSuccess"]; });

/* harmony import */ var _lib_ngrxcore_services_bt_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/ngrxcore/services/bt.service */ "./projects/jsonformlib/src/lib/ngrxcore/services/bt.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BTService", function() { return _lib_ngrxcore_services_bt_service__WEBPACK_IMPORTED_MODULE_7__["BTService"]; });

/* harmony import */ var _lib_ngrxcore_ngrxcore_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib/ngrxcore/ngrxcore.module */ "./projects/jsonformlib/src/lib/ngrxcore/ngrxcore.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgRxCoreModule", function() { return _lib_ngrxcore_ngrxcore_module__WEBPACK_IMPORTED_MODULE_8__["NgRxCoreModule"]; });

/* harmony import */ var _lib_jsonform_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lib/jsonform.module */ "./projects/jsonformlib/src/lib/jsonform.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Lib_Components", function() { return _lib_jsonform_module__WEBPACK_IMPORTED_MODULE_9__["Lib_Components"]; });

/* harmony import */ var _lib_components_fieldtypes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./lib/components/fieldtypes */ "./projects/jsonformlib/src/lib/components/fieldtypes/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FIELD_TYPES", function() { return _lib_components_fieldtypes__WEBPACK_IMPORTED_MODULE_10__["FIELD_TYPES"]; });

/* harmony import */ var _lib_services__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./lib/services */ "./projects/jsonformlib/src/lib/services/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JSON_SERVICES", function() { return _lib_services__WEBPACK_IMPORTED_MODULE_11__["JSON_SERVICES"]; });


/*
 * Public API Surface of jsonformlib
 */














/***/ }),

/***/ "./restaurant/$$_lazy_route_resource lazy recursive":
/*!*****************************************************************!*\
  !*** ./restaurant/$$_lazy_route_resource lazy namespace object ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./restaurant/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./restaurant/app/Routes.ts":
/*!**********************************!*\
  !*** ./restaurant/app/Routes.ts ***!
  \**********************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var projects_jsonformlib_src_lib_components_case_case_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! projects/jsonformlib/src/lib/components/case/case.component */ "./projects/jsonformlib/src/lib/components/case/case.component.ts");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/auth-guard.service */ "./restaurant/app/services/auth-guard.service.ts");


var routes = [
    { path: '', redirectTo: 'public/fieldtypes', pathMatch: 'full' },
    { path: '**', redirectTo: 'public/fieldtypes', pathMatch: 'full' },
    { path: 'admin/:id', component: projects_jsonformlib_src_lib_components_case_case_component__WEBPACK_IMPORTED_MODULE_0__["CaseComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]] },
    { path: 'public/:id', component: projects_jsonformlib_src_lib_components_case_case_component__WEBPACK_IMPORTED_MODULE_0__["CaseComponent"] },
    { path: 'restaurant/:id', component: projects_jsonformlib_src_lib_components_case_case_component__WEBPACK_IMPORTED_MODULE_0__["CaseComponent"] }
];


/***/ }),

/***/ "./restaurant/app/app.component.css":
/*!******************************************!*\
  !*** ./restaurant/app/app.component.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./restaurant/app/app.component.html":
/*!*******************************************!*\
  !*** ./restaurant/app/app.component.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./restaurant/app/app.component.ts":
/*!*****************************************!*\
  !*** ./restaurant/app/app.component.ts ***!
  \*****************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var projects_jsonformlib_src_public_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! projects/jsonformlib/src/public_api */ "./projects/jsonformlib/src/public_api.ts");
/* harmony import */ var spa_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! spa/environments/environment */ "./spa/environments/environment.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/user.service */ "./restaurant/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(appIndex, userService) {
        this.appIndex = appIndex;
        this.userService = userService;
        this.booksList = [];
        appIndex.LoadIndex(spa_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].path)
            .subscribe();
    }
    AppComponent.prototype.ngOnInit = function () {
        // this.Index$.subscribe((index: any[]) => {
        //   this.booksList = [];
        //   index.forEach((book: any) => {
        //     book.user.get().then(data => {
        //       const userData = data.data();
        //       const shallowCopy = { ...book, ...userData };
        //       this.booksList.push(shallowCopy);
        //     });
        //   });
        // });
    };
    Object.defineProperty(AppComponent.prototype, "User", {
        get: function () {
            return this.appIndex.CurrentUser;
        },
        enumerable: true,
        configurable: true
    });
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./restaurant/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./restaurant/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [projects_jsonformlib_src_public_api__WEBPACK_IMPORTED_MODULE_1__["AppIndexService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./restaurant/app/app.module.ts":
/*!**************************************!*\
  !*** ./restaurant/app/app.module.ts ***!
  \**************************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ "./restaurant/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Routes */ "./restaurant/app/Routes.ts");
/* harmony import */ var projects_jsonformlib_src_public_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! projects/jsonformlib/src/public_api */ "./projects/jsonformlib/src/public_api.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../environments/environment */ "./restaurant/environments/environment.ts");
/* harmony import */ var _services_validation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/validation.service */ "./restaurant/app/services/validation.service.ts");
/* harmony import */ var _services_mybt_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/mybt.service */ "./restaurant/app/services/mybt.service.ts");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/auth-guard.service */ "./restaurant/app/services/auth-guard.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/user.service */ "./restaurant/app/services/user.service.ts");
/* harmony import */ var projects_jsonformlib_src_lib_Interface__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! projects/jsonformlib/src/lib/Interface */ "./projects/jsonformlib/src/lib/Interface/index.ts");
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-formly/core */ "./node_modules/@ngx-formly/core/fesm5/ngx-formly-core.js");
/* harmony import */ var _ngx_formly_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-formly/bootstrap */ "./node_modules/@ngx-formly/bootstrap/fesm5/ngx-formly-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: projects_jsonformlib_src_public_api__WEBPACK_IMPORTED_MODULE_4__["Lib_Components"].concat([
                _app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]
            ]),
            imports: [
                projects_jsonformlib_src_public_api__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_Routes__WEBPACK_IMPORTED_MODULE_3__["routes"], { useHash: true, enableTracing: false }),
                _ngx_formly_core__WEBPACK_IMPORTED_MODULE_11__["FormlyModule"],
                _ngx_formly_bootstrap__WEBPACK_IMPORTED_MODULE_12__["FormlyBootstrapModule"],
                _ngx_formly_core__WEBPACK_IMPORTED_MODULE_11__["FormlyModule"].forRoot(_services_validation_service__WEBPACK_IMPORTED_MODULE_6__["ValidationService"].CreateFormlyConfig({ types: projects_jsonformlib_src_public_api__WEBPACK_IMPORTED_MODULE_4__["FIELD_TYPES"] }))
            ],
            providers: projects_jsonformlib_src_public_api__WEBPACK_IMPORTED_MODULE_4__["JSON_SERVICES"].concat([
                _services_mybt_service__WEBPACK_IMPORTED_MODULE_7__["myBTService"].Service,
                _services_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"],
                _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"],
                {
                    provide: projects_jsonformlib_src_lib_Interface__WEBPACK_IMPORTED_MODULE_10__["FIELD_VALIDATION"], useValue: [_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].project]
                }
            ]),
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]]
        }),
        __metadata("design:paramtypes", [])
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./restaurant/app/services/auth-guard.service.ts":
/*!*******************************************************!*\
  !*** ./restaurant/app/services/auth-guard.service.ts ***!
  \*******************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./restaurant/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuard = /** @class */ (function () {
    function AuthGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return this.auth.user.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (user) { return !!user; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (loggedIn) {
            if (!loggedIn) {
                console.log('access denied');
                _this.router.navigate(['/login']);
            }
        }));
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./restaurant/app/services/auth.service.ts":
/*!*************************************************!*\
  !*** ./restaurant/app/services/auth.service.ts ***!
  \*************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AuthService = /** @class */ (function () {
    function AuthService() {
    }
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./restaurant/app/services/mybt.service.ts":
/*!*************************************************!*\
  !*** ./restaurant/app/services/mybt.service.ts ***!
  \*************************************************/
/*! exports provided: myBTService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "myBTService", function() { return myBTService; });
/* harmony import */ var projects_jsonformlib_src_lib_services_page_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! projects/jsonformlib/src/lib/services/page.service */ "./projects/jsonformlib/src/lib/services/page.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var projects_jsonformlib_src_lib_services_appIndex_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! projects/jsonformlib/src/lib/services/appIndex.service */ "./projects/jsonformlib/src/lib/services/appIndex.service.ts");
/* harmony import */ var projects_jsonformlib_src_lib_ngrxcore_services_bt_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! projects/jsonformlib/src/lib/ngrxcore/services/bt.service */ "./projects/jsonformlib/src/lib/ngrxcore/services/bt.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var myBTService = /** @class */ (function (_super) {
    __extends(myBTService, _super);
    function myBTService(appIndex, service) {
        var _this = _super.call(this) || this;
        _this.appIndex = appIndex;
        _this.service = service;
        return _this;
    }
    myBTService_1 = myBTService;
    myBTService.prototype.Fired = function (data) {
        console.log("myBTService Fired");
        var x = {};
        switch (data.action.id) {
            case 'myorder':
                console.log(this.service.CurrentModel);
                var sum_1 = 0;
                this.service.CurrentModel[data.action.id]
                    .forEach(function (c) {
                    sum_1 += c.Qty * c.price;
                });
                this.service._currentPage.model.total = sum_1;
                break;
            case "login":
                x = this.login(data);
                break;
            case "logout":
                x = this.logout(data);
                break;
            default:
                x = { model: data.model, url: data.action.redirect };
                break;
        }
        return x.url ? Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(x) : Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(data);
    };
    myBTService.prototype.SubmitReferral = function (data) {
        var x = data.model.referralSourceTypeId > 0;
        return x ? { url: data.action.redirect["success"] } : {};
    };
    myBTService.prototype.login = function (data) {
        var r = data.model.username === "test" ? "success" : "fail";
        if (r === "success") {
            this.appIndex.CurrentUser = {
                name: data.model.username,
                domain: ["eionline"]
            };
        }
        return { model: data.model.username, url: data.action.redirect[r] };
    };
    myBTService.prototype.ReferralProcess = function (data) {
        return { model: data.model, url: data.action.redirect[data.model.result] };
    };
    myBTService.prototype.logout = function (data) {
        this.appIndex.CurrentUser = undefined;
        return { url: data.action.redirect };
    };
    myBTService.Service = {
        provide: projects_jsonformlib_src_lib_ngrxcore_services_bt_service__WEBPACK_IMPORTED_MODULE_4__["BTService"],
        useClass: myBTService_1
    };
    myBTService = myBTService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [projects_jsonformlib_src_lib_services_appIndex_service__WEBPACK_IMPORTED_MODULE_3__["AppIndexService"],
            projects_jsonformlib_src_lib_services_page_service__WEBPACK_IMPORTED_MODULE_0__["PageService"]])
    ], myBTService);
    return myBTService;
    var myBTService_1;
}(projects_jsonformlib_src_lib_ngrxcore_services_bt_service__WEBPACK_IMPORTED_MODULE_4__["BTService"]));



/***/ }),

/***/ "./restaurant/app/services/user.service.ts":
/*!*************************************************!*\
  !*** ./restaurant/app/services/user.service.ts ***!
  \*************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UserService = /** @class */ (function () {
    function UserService() {
    }
    UserService.prototype.getReferenceUser = function () {
        return {};
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./restaurant/app/services/validation.service.ts":
/*!*******************************************************!*\
  !*** ./restaurant/app/services/validation.service.ts ***!
  \*******************************************************/
/*! exports provided: ValidationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationService", function() { return ValidationService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ "./restaurant/environments/environment.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

function PatternValidator(control, pattern) {
    return control.value && control.value.match(pattern);
}
function DifferenceInDays(firstDate, secondDate) {
    return Math.round((secondDate.getTime() - firstDate.getTime()) / (1000 * 60 * 60 * 24));
}
var ValidationService = /** @class */ (function () {
    function ValidationService() {
    }
    ValidationService.CreateFormlyConfig = function (value) {
        return __assign({}, ValidationService.projectConfig.valiationConfig, value);
    };
    ValidationService.getValidatorErrorMessage = function (code) {
        return ValidationService.ErrorValidateMessage[code];
    };
    ValidationService.eionlineValidator = function (control, field) {
        var x = false;
        switch (field.key) {
            case "DOB":
                x = true;
                if (control.value) {
                    var d = DifferenceInDays(new Date(control.value), new Date());
                    x = d < 1098;
                }
                break;
            case "username":
                x = control.value === "test";
                break;
            case "password":
                // {6,100}           - Assert password is between 6 and 100 characters
                // (?=.*[0-9])       - Assert a string has at least one number
                x = PatternValidator(control, /^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/);
                break;
            case "email":
                x = PatternValidator(control, /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/);
                break;
            case "creditCard":
                x = PatternValidator(control, /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/);
                break;
            default:
                return null;
        }
        return x ? null : { eionline: field.key };
    };
    ValidationService.projectConfig = {
        name: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].project,
        field_validation: [_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].project],
        valiationConfig: {
            validators: [
                { name: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].project, validation: ValidationService.eionlineValidator }
            ],
            validationMessages: [
                {
                    name: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].project,
                    message: ValidationService.getValidatorErrorMessage
                },
                { name: "required", message: "This field is required1" }
            ]
        }
    };
    ValidationService.ErrorValidateMessage = {};
    return ValidationService;
}());



/***/ }),

/***/ "./restaurant/environments/environment.ts":
/*!************************************************!*\
  !*** ./restaurant/environments/environment.ts ***!
  \************************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    path: "/assets/AppResources/index.json",
    project: "restaurant"
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./restaurant/main.ts":
/*!****************************!*\
  !*** ./restaurant/main.ts ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./restaurant/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./restaurant/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./spa/environments/environment.ts":
/*!*****************************************!*\
  !*** ./spa/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyClbO56bewOcN44T1AqtDLfdxdBEEi1r6M",
        authDomain: "jsonbasedspa.firebaseapp.com",
        databaseURL: "https://jsonbasedspa.firebaseio.com/",
        projectId: "jsonbasedspa",
        storageBucket: "jsonbasedspa.appspot.com",
        messagingSenderId: "935464933653"
    },
    path: "/assets/AppResources/index.json",
    project: "spa"
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 0:
/*!**********************************!*\
  !*** multi ./restaurant/main.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\dev\jsonform\restaurant\main.ts */"./restaurant/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map