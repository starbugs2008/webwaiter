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

/***/ "./projects/jsonformlib/src/lib/components/FormOrginazer/group/group.component.css":
/*!*****************************************************************************************!*\
  !*** ./projects/jsonformlib/src/lib/components/FormOrginazer/group/group.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grid-container {\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: 1fr 120px ;\r\n        grid-template-columns: 1fr 120px ;\r\n    padding: 10px;\r\n  }\r\n  .grid-item {\r\n    background-color: rgba(255, 255, 255, 0.8);\r\n    border: 1px solid rgba(0, 0, 0, 0.8);\r\n    padding: 20px;\r\n    font-size: 30px;\r\n    text-align: center;\r\n  }"

/***/ }),

/***/ "./projects/jsonformlib/src/lib/components/FormOrginazer/group/group.component.html":
/*!******************************************************************************************!*\
  !*** ./projects/jsonformlib/src/lib/components/FormOrginazer/group/group.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"grid-container\">\n  <div *ngFor=\"let page of group  let i = index\" [class]='page.className'>\n    <json-page [page]='page'></json-page>\n  </div>\n</div>\n<br/>\n"

/***/ }),

/***/ "./projects/jsonformlib/src/lib/components/FormOrginazer/group/group.component.ts":
/*!****************************************************************************************!*\
  !*** ./projects/jsonformlib/src/lib/components/FormOrginazer/group/group.component.ts ***!
  \****************************************************************************************/
/*! exports provided: GroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupComponent", function() { return GroupComponent; });
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

var GroupComponent = /** @class */ (function () {
    function GroupComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], GroupComponent.prototype, "group", void 0);
    GroupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "json-group",
            template: __webpack_require__(/*! ./group.component.html */ "./projects/jsonformlib/src/lib/components/FormOrginazer/group/group.component.html"),
            styles: [__webpack_require__(/*! ./group.component.css */ "./projects/jsonformlib/src/lib/components/FormOrginazer/group/group.component.css")]
        })
    ], GroupComponent);
    return GroupComponent;
}());



/***/ }),

/***/ "./projects/jsonformlib/src/lib/components/FormOrginazer/pages/page/form/form.component.html":
/*!***************************************************************************************************!*\
  !*** ./projects/jsonformlib/src/lib/components/FormOrginazer/pages/page/form/form.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf='display' [class]='className'>\r\n  <form [formGroup]=\"form\">\r\n    <formly-form [model]=\"model\" [fields]=\"fields\" [form]=\"form\"></formly-form>\r\n  <ng-content></ng-content>\r\n  <json-actions [actions]='formData.actions'></json-actions>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./projects/jsonformlib/src/lib/components/FormOrginazer/pages/page/form/form.component.scss":
/*!***************************************************************************************************!*\
  !*** ./projects/jsonformlib/src/lib/components/FormOrginazer/pages/page/form/form.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form {\n  margin: 10px; }\n\ntextarea {\n  width: 100%; }\n\n.formboarder {\n  border: 1px solid #999999 !important;\n  margin: 5px 0; }\n\nb {\n  padding: 5px; }\n\n.level1 {\n  margin-left: 450px;\n  padding-left: 450px;\n  background-color: red;\n  font-weight: 100;\n  font-size: 8pt; }\n"

/***/ }),

/***/ "./projects/jsonformlib/src/lib/components/FormOrginazer/pages/page/form/form.component.ts":
/*!*************************************************************************************************!*\
  !*** ./projects/jsonformlib/src/lib/components/FormOrginazer/pages/page/form/form.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../services */ "./projects/jsonformlib/src/lib/services/index.ts");
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
    function FormComponent(formService, appIndex, service) {
        this.formService = formService;
        this.appIndex = appIndex;
        this.service = service;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({});
        this.btclick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Object.defineProperty(FormComponent.prototype, "className", {
        get: function () {
            return this.formData.className || 'formboarder';
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
    FormComponent.prototype.sampleformcontrol = function () {
        var _this = this;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(0, 10000)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(3))
            .subscribe(function (val) {
            var x = _this.fields ? _this.fields[0] : {};
            x = x.fieldGroup || [];
            x.forEach(function (element) {
                console.log(element.key, "required=", element.templateOptions.required);
                if (element.formControl) {
                    console.log("valid =", element.formControl.valid);
                }
            });
        });
    };
    FormComponent.prototype.ngOnChanges = function (change) {
        var _this = this;
        this.model = this.service.CurrentModel;
        if (this.formData) {
            if (this.appIndex.Libs$) {
                this.appIndex.Libs$.subscribe(function (c) {
                    _this.appIndex.Libs = c;
                    _this.fields = _this.formService.RowsMaptoFields(_this.formData.Rows, _this.model, _this.appIndex.getLib("fieldGroup"), _this.appIndex.getLib("fieldpreDefine"));
                }, function (e) {
                    console.log(e);
                });
            }
            else {
                this.fields = this.formService.RowsMaptoFields(this.formData.Rows, this.model, null, null);
            }
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
            template: __webpack_require__(/*! ./form.component.html */ "./projects/jsonformlib/src/lib/components/FormOrginazer/pages/page/form/form.component.html"),
            styles: [__webpack_require__(/*! ./form.component.scss */ "./projects/jsonformlib/src/lib/components/FormOrginazer/pages/page/form/form.component.scss")]
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_4__["FormService"],
            _services__WEBPACK_IMPORTED_MODULE_4__["AppIndexService"],
            _services__WEBPACK_IMPORTED_MODULE_4__["PageService"]])
    ], FormComponent);
    return FormComponent;
}());



/***/ }),

/***/ "./projects/jsonformlib/src/lib/components/FormOrginazer/pages/page/page.component.css":
/*!*********************************************************************************************!*\
  !*** ./projects/jsonformlib/src/lib/components/FormOrginazer/pages/page/page.component.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./projects/jsonformlib/src/lib/components/FormOrginazer/pages/page/page.component.html":
/*!**********************************************************************************************!*\
  !*** ./projects/jsonformlib/src/lib/components/FormOrginazer/pages/page/page.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span *ngIf=\"service.display(page)\">\r\n  <div [ngSwitch]=\"page.type\">\r\n    <div *ngSwitchCase=\"SupportTypes.pages\">\r\n      <json-pages [pages]='page'>\r\n      </json-pages>\r\n    </div>\r\n    <div *ngSwitchCase=\"SupportTypes.Form\">\r\n      <json-form [formData]='page'>\r\n      </json-form>\r\n    </div>\r\n    <div *ngSwitchCase=\"SupportTypes.tabgroup\">\r\n      <json-tabs-section [sections]='page.sections'></json-tabs-section>\r\n    </div>\r\n    <div *ngSwitchDefault>\r\n      <div class=\"alert alert-dange\">\r\n        The \"{{page.type}}\" is not supported\r\n      </div>\r\n      <div>It only supports <b>{{ElementTypes}} </b></div>\r\n      <br />\r\n      Page Define {{page | json}}\r\n    </div>\r\n  </div>\r\n\r\n</span>"

/***/ }),

/***/ "./projects/jsonformlib/src/lib/components/FormOrginazer/pages/page/page.component.ts":
/*!********************************************************************************************!*\
  !*** ./projects/jsonformlib/src/lib/components/FormOrginazer/pages/page/page.component.ts ***!
  \********************************************************************************************/
/*! exports provided: supports, PageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supports", function() { return supports; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageComponent", function() { return PageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services */ "./projects/jsonformlib/src/lib/services/index.ts");
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
            template: __webpack_require__(/*! ./page.component.html */ "./projects/jsonformlib/src/lib/components/FormOrginazer/pages/page/page.component.html"),
            styles: [__webpack_require__(/*! ./page.component.css */ "./projects/jsonformlib/src/lib/components/FormOrginazer/pages/page/page.component.css")]
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_1__["PageService"]])
    ], PageComponent);
    return PageComponent;
}());



/***/ }),

/***/ "./projects/jsonformlib/src/lib/components/FormOrginazer/pages/page/tabs-section/tabs-section.component.css":
/*!******************************************************************************************************************!*\
  !*** ./projects/jsonformlib/src/lib/components/FormOrginazer/pages/page/tabs-section/tabs-section.component.css ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/deep/ .mat-tab-label{\r\n    color:white;\r\n    font-weight: 700;\r\n    background-color: #6b1c89;\r\n    font-size: 14px;\r\n    margin: 2px;\r\n}\r\n/deep/.mat-tab-label-active {\r\n    background-color:#17527c !important;\r\n} "

/***/ }),

/***/ "./projects/jsonformlib/src/lib/components/FormOrginazer/pages/page/tabs-section/tabs-section.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./projects/jsonformlib/src/lib/components/FormOrginazer/pages/page/tabs-section/tabs-section.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tab-group>\n    <mat-tab *ngFor=\"let section of sections; let index = index;\" [label]='section.title' class='tabColor'>\n         <json-pages [pages]='section'></json-pages> \n        <!-- <json-actions [actions]='section.actions'></json-actions> -->\n    </mat-tab>\n</mat-tab-group>"

/***/ }),

/***/ "./projects/jsonformlib/src/lib/components/FormOrginazer/pages/page/tabs-section/tabs-section.component.ts":
/*!*****************************************************************************************************************!*\
  !*** ./projects/jsonformlib/src/lib/components/FormOrginazer/pages/page/tabs-section/tabs-section.component.ts ***!
  \*****************************************************************************************************************/
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
            template: __webpack_require__(/*! ./tabs-section.component.html */ "./projects/jsonformlib/src/lib/components/FormOrginazer/pages/page/tabs-section/tabs-section.component.html"),
            styles: [__webpack_require__(/*! ./tabs-section.component.css */ "./projects/jsonformlib/src/lib/components/FormOrginazer/pages/page/tabs-section/tabs-section.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TabsSectionComponent);
    return TabsSectionComponent;
}());



/***/ }),

/***/ "./projects/jsonformlib/src/lib/components/FormOrginazer/pages/pages.component.css":
/*!*****************************************************************************************!*\
  !*** ./projects/jsonformlib/src/lib/components/FormOrginazer/pages/pages.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.bold {\r\n  font-weight: 800;\r\n}\r\n\r\n"

/***/ }),

/***/ "./projects/jsonformlib/src/lib/components/FormOrginazer/pages/pages.component.html":
/*!******************************************************************************************!*\
  !*** ./projects/jsonformlib/src/lib/components/FormOrginazer/pages/pages.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let page of pages.pages  let i = index\" [class]='page.className'>\r\n <json-page [page]= 'page'></json-page>\r\n</div>\r\n\r\n<json-actions [actions]='pages.actions'></json-actions>"

/***/ }),

/***/ "./projects/jsonformlib/src/lib/components/FormOrginazer/pages/pages.component.ts":
/*!****************************************************************************************!*\
  !*** ./projects/jsonformlib/src/lib/components/FormOrginazer/pages/pages.component.ts ***!
  \****************************************************************************************/
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
        __metadata("design:type", Array)
    ], PagesComponent.prototype, "pages", void 0);
    PagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "json-pages",
            template: __webpack_require__(/*! ./pages.component.html */ "./projects/jsonformlib/src/lib/components/FormOrginazer/pages/pages.component.html"),
            styles: [__webpack_require__(/*! ./pages.component.css */ "./projects/jsonformlib/src/lib/components/FormOrginazer/pages/pages.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PagesComponent);
    return PagesComponent;
}());



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

module.exports = "\r\n<ng-container *ngIf=\"defCase; then page; else nopage\">\r\n</ng-container>\r\n<ng-template #nopage>\r\n  <div>\r\n    page is not set up\r\n  </div>\r\n</ng-template>\r\n<ng-template #page>\r\n   <json-pages [pages]='defCase'></json-pages>\r\n   <json-group [group]='defCase.group'></json-group>\r\n</ng-template> "

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
                    _this.pageService.CurrentPage = {
                        defCase: c[0],
                        model: c[1],
                        src: "CaseComponent"
                    };
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
/* harmony import */ var _mattable_mattable_fieldtype__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mattable/mattable.fieldtype */ "./projects/jsonformlib/src/lib/components/fieldtypes/mattable/mattable.fieldtype.ts");
/* harmony import */ var _expandable_expandable_fieldtype__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./expandable/expandable.fieldtype */ "./projects/jsonformlib/src/lib/components/fieldtypes/expandable/expandable.fieldtype.ts");







var field_types = [
    _html_html_fieldtype__WEBPACK_IMPORTED_MODULE_0__["HtmlFieldType"],
    _repeat_repeat_fieldtype__WEBPACK_IMPORTED_MODULE_1__["RepeatFieldType"],
    _expandable_expandable_fieldtype__WEBPACK_IMPORTED_MODULE_6__["ExpandableFieldType"],
    _readonly_readonly_fieldtype__WEBPACK_IMPORTED_MODULE_2__["ReadOnlyFieldType"],
    _title_title_fieldtype__WEBPACK_IMPORTED_MODULE_4__["TitleFieldType"],
    _menu_menu_fieldtype__WEBPACK_IMPORTED_MODULE_3__["MenuFieldType"],
    _mattable_mattable_fieldtype__WEBPACK_IMPORTED_MODULE_5__["MattableFieldType"]
];
var FIELD_TYPES = [
    { name: "repeat", component: _repeat_repeat_fieldtype__WEBPACK_IMPORTED_MODULE_1__["RepeatFieldType"] },
    {
        name: "expandable",
        component: _expandable_expandable_fieldtype__WEBPACK_IMPORTED_MODULE_6__["ExpandableFieldType"]
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
    }
];


/***/ }),

/***/ "./projects/jsonformlib/src/lib/components/fieldtypes/mattable/mattable.fieldtype.html":
/*!*********************************************************************************************!*\
  !*** ./projects/jsonformlib/src/lib/components/fieldtypes/mattable/mattable.fieldtype.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf='data'>\n  <table mat-table #table [dataSource]=\"dataSource\">\n    <ng-container *ngFor='let head of columnsDef' [matColumnDef]=\"head\">\n      <mat-header-cell *matHeaderCellDef> {{head}} </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\">\n        <span [ngSwitch]=\"headtype(head)\">\n          <p *ngSwitchCase=\"'action'\">\n            <button class=\"btn btn-primary\">{{head}}</button>\n          </p>\n          <p *ngSwitchDefault>\n            {{element[head]}}\n          </p>\n        </span>\n      </mat-cell>\n    </ng-container>\n    <mat-header-row *matHeaderRowDef=\"columnsDef\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: columnsDef;\" \n    (click)=\"selectRow(row) \"\n    [style.background]=\"highlightedRows.indexOf(row) != -1 ? 'lightblue' : ''\"></mat-row>\n  </table>\n  <ng-container *ngFor='let a of actions'>\n    <button class=\"btn btn-primary\">{{a}}</button>\n  </ng-container>\n</div>"

/***/ }),

/***/ "./projects/jsonformlib/src/lib/components/fieldtypes/mattable/mattable.fieldtype.scss":
/*!*********************************************************************************************!*\
  !*** ./projects/jsonformlib/src/lib/components/fieldtypes/mattable/mattable.fieldtype.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-row {\n  min-height: 65px; }\n  .mat-row.selected {\n    background: #dddddd; }\n  .code {\n  margin: 10px; }\n  .example-container {\n  margin: 40px;\n  background: beige; }\n  table {\n  width: 100%; }\n  .mat-row:hover {\n  background-color: lightgray; }\n"

/***/ }),

/***/ "./projects/jsonformlib/src/lib/components/fieldtypes/mattable/mattable.fieldtype.ts":
/*!*******************************************************************************************!*\
  !*** ./projects/jsonformlib/src/lib/components/fieldtypes/mattable/mattable.fieldtype.ts ***!
  \*******************************************************************************************/
/*! exports provided: MattableFieldType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MattableFieldType", function() { return MattableFieldType; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _services_page_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/page.service */ "./projects/jsonformlib/src/lib/services/page.service.ts");
/* harmony import */ var _ngrxcore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ngrxcore */ "./projects/jsonformlib/src/lib/ngrxcore/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MattableFieldType = /** @class */ (function () {
    function MattableFieldType(store, service) {
        this.store = store;
        this.service = service;
        this.highlightedRows = [];
    }
    MattableFieldType.prototype.ngOnChanges = function (changes) {
        this.model = this.service.CurrentModel;
        var x = this.model[this.data.id];
        if (x) {
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](x);
        }
    };
    MattableFieldType.prototype.headtype = function (label) {
        var x = this.data.columns.find(function (c) { return c.label === label; }).type;
        return x;
    };
    Object.defineProperty(MattableFieldType.prototype, "columnsDef", {
        get: function () {
            return this.data ? this.data.columns.map(function (c) { return c.label; }) : [];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MattableFieldType.prototype, "actions", {
        get: function () {
            return this.data ? this.data.actions : [];
        },
        enumerable: true,
        configurable: true
    });
    MattableFieldType.prototype.selectRow = function (row) {
        var action = null;
        if (this.data.redirect) {
            action = new _ngrxcore__WEBPACK_IMPORTED_MODULE_4__["BTAction"]({
                action: { id: this.data.id, redirect: this.data.redirect },
                model: row
            });
            this.store.dispatch(action);
        }
        switch (this.data.selected) {
            case "single":
                this.highlightedRows[0] = row;
                break;
            default:
                if (this.highlightedRows.indexOf(row) === -1) {
                    this.highlightedRows.push(row);
                }
                else {
                    // this.highlightedRows.slice()
                }
                break;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MattableFieldType.prototype, "data", void 0);
    MattableFieldType = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./mattable.fieldtype.html */ "./projects/jsonformlib/src/lib/components/fieldtypes/mattable/mattable.fieldtype.html"),
            styles: [__webpack_require__(/*! ./mattable.fieldtype.scss */ "./projects/jsonformlib/src/lib/components/fieldtypes/mattable/mattable.fieldtype.scss")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"], _services_page_service__WEBPACK_IMPORTED_MODULE_3__["PageService"]])
    ], MattableFieldType);
    return MattableFieldType;
}());



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

module.exports = "<div *ngFor=\"let link of this.service.Menus$ |async\">\n  <div mat-list-item>\n    <a [routerLink]=\"[link.path]\" routerLinkActive=\"active-link\" *ngIf='link'>\n      <span [class]='link.level' *ngIf='link'> {{link.label}} </span>\n    </a>\n    <i class=\"fas fa-edit\" (click)='onedit(link.path)' *ngIf=\"service.appIndex.FormBuilder\"></i>\n  </div>\n</div>"

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

module.exports = "<div [ngSwitch]=\"field.type\">\n    <div *ngSwitchCase=\"'headline'\">\n      <mat-toolbar>{{field.templateOptions.label}}</mat-toolbar>\n    </div>\n    <div *ngSwitchDefault >\n    {{field.templateOptions.label}}\n    </div>\n  </div>"

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
/* harmony import */ var _FormOrginazer_pages_page_form_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormOrginazer/pages/page/form/form.component */ "./projects/jsonformlib/src/lib/components/FormOrginazer/pages/page/form/form.component.ts");
/* harmony import */ var _actions_actions_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions/actions.component */ "./projects/jsonformlib/src/lib/components/actions/actions.component.ts");
/* harmony import */ var _FormOrginazer_pages_page_tabs_section_tabs_section_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FormOrginazer/pages/page/tabs-section/tabs-section.component */ "./projects/jsonformlib/src/lib/components/FormOrginazer/pages/page/tabs-section/tabs-section.component.ts");
/* harmony import */ var _case_case_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./case/case.component */ "./projects/jsonformlib/src/lib/components/case/case.component.ts");
/* harmony import */ var _FormOrginazer_pages_page_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FormOrginazer/pages/page/page.component */ "./projects/jsonformlib/src/lib/components/FormOrginazer/pages/page/page.component.ts");
/* harmony import */ var _FormOrginazer_pages_pages_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FormOrginazer/pages/pages.component */ "./projects/jsonformlib/src/lib/components/FormOrginazer/pages/pages.component.ts");
/* harmony import */ var _FormOrginazer_group_group_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FormOrginazer/group/group.component */ "./projects/jsonformlib/src/lib/components/FormOrginazer/group/group.component.ts");







var components = [
    _FormOrginazer_pages_page_form_form_component__WEBPACK_IMPORTED_MODULE_0__["FormComponent"],
    _actions_actions_component__WEBPACK_IMPORTED_MODULE_1__["ActionsComponent"],
    _FormOrginazer_pages_page_tabs_section_tabs_section_component__WEBPACK_IMPORTED_MODULE_2__["TabsSectionComponent"],
    _case_case_component__WEBPACK_IMPORTED_MODULE_3__["CaseComponent"],
    _FormOrginazer_pages_page_page_component__WEBPACK_IMPORTED_MODULE_4__["PageComponent"],
    _FormOrginazer_pages_pages_component__WEBPACK_IMPORTED_MODULE_5__["PagesComponent"],
    _FormOrginazer_group_group_component__WEBPACK_IMPORTED_MODULE_6__["GroupComponent"]
];


/***/ }),

/***/ "./projects/jsonformlib/src/lib/jsonform.module.ts":
/*!*********************************************************!*\
  !*** ./projects/jsonformlib/src/lib/jsonform.module.ts ***!
  \*********************************************************/
/*! exports provided: JSONFormModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JSONFormModule", function() { return JSONFormModule; });
/* harmony import */ var _components_fieldtypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/fieldtypes */ "./projects/jsonformlib/src/lib/components/fieldtypes/index.ts");
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-formly/core */ "./node_modules/@ngx-formly/core/fesm5/ngx-formly-core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services */ "./projects/jsonformlib/src/lib/services/index.ts");
/* harmony import */ var _Interface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Interface */ "./projects/jsonformlib/src/lib/Interface/index.ts");




var JSONFormModule = /** @class */ (function () {
    function JSONFormModule() {
    }
    JSONFormModule.forRoot = function (config) {
        if (config === void 0) { config = {}; }
        config.project["types"] = _components_fieldtypes__WEBPACK_IMPORTED_MODULE_0__["FIELD_TYPES"];
        var a = _ngx_formly_core__WEBPACK_IMPORTED_MODULE_1__["FormlyModule"].forRoot(config.project);
        return {
            ngModule: a.ngModule,
            providers: _services__WEBPACK_IMPORTED_MODULE_2__["services"].concat(a.providers, [
                {
                    provide: _Interface__WEBPACK_IMPORTED_MODULE_3__["FIELD_VALIDATION"],
                    useValue: config.field_validation
                }
            ])
        };
    };
    return JSONFormModule;
}());



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
/* harmony import */ var _services_BT_Service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/BT.Service */ "./projects/jsonformlib/src/lib/ngrxcore/services/BT.Service.ts");
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
            _services_BT_Service__WEBPACK_IMPORTED_MODULE_6__["BTService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], BTEffects);
    return BTEffects;
}());



/***/ }),

/***/ "./projects/jsonformlib/src/lib/ngrxcore/index.ts":
/*!********************************************************!*\
  !*** ./projects/jsonformlib/src/lib/ngrxcore/index.ts ***!
  \********************************************************/
/*! exports provided: BTAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_bt_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions/bt.actions */ "./projects/jsonformlib/src/lib/ngrxcore/actions/bt.actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BTAction", function() { return _actions_bt_actions__WEBPACK_IMPORTED_MODULE_0__["BTAction"]; });




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

/***/ "./projects/jsonformlib/src/lib/ngrxcore/services/BT.Service.ts":
/*!**********************************************************************!*\
  !*** ./projects/jsonformlib/src/lib/ngrxcore/services/BT.Service.ts ***!
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
        var x = this.Libs.filter(function (c) { return c.key === key; }).map(function (c) { return c.data; })[0];
        return x ? x[0] : undefined;
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
    function FieldService(validation) {
        this.validator = { validation: validation };
    }
    FieldService.prototype.Create = function (cell, rowLength, lib) {
        try {
            if (cell.template) {
                return cell;
            }
            cell.key = cell.type === "info" ? cell.type : cell.key;
            var field = this.CreateFormlyField(cell, lib);
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
    FieldService.prototype.CreateFormlyField = function (field, lib) {
        var predefine = lib ? lib.find(function (c) { return c.key === field.key; }) : undefined;
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
        __metadata("design:paramtypes", [Object])
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
    function FormService(fieldService) {
        this.fieldService = fieldService;
    }
    FormService.prototype.FillPage = function (Rows, uiLib) {
        if (!Rows) {
            return undefined;
        }
        var result = [];
        try {
            Rows.forEach(function (fg) {
                var r = fg;
                if (fg) {
                    if (r.libId) {
                        var x = uiLib ? uiLib[r.libId] : null;
                        result = x ? result.concat(x) : result;
                    }
                    else {
                        result.push(r);
                    }
                }
            });
            return result;
        }
        catch (error) {
            console.log("error", error, Rows);
        }
    };
    FormService.prototype.RowsMaptoFields = function (Rows, model, fieldGroupLib, fieldPredifine) {
        var _this = this;
        if (Rows) {
            var result = this.FillPage(Rows, fieldGroupLib).map(function (fieldDef) {
                var xx = _this.processfiedDef(fieldDef, fieldPredifine);
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
        }
    };
    FormService.prototype.processfiedDef = function (fieldDef, lib) {
        var _this = this;
        switch (fieldDef.type) {
            case "repeat":
                fieldDef.fieldArray.fieldGroup = fieldDef.fieldArray.Rows.map(function (c) {
                    return _this.processfiedDef(c, lib);
                });
                return fieldDef;
            default:
                return {
                    fieldGroupClassName: fieldDef.fieldGroupClassName
                        ? fieldDef.fieldGroupClassName
                        : "row",
                    hideExpression: fieldDef.hideExpression,
                    fieldGroup: fieldDef.Rows
                        ? fieldDef.Rows.map(function (c) { return _this.processfiedDef(c, lib); })
                        : this.processField(fieldDef, lib)
                };
        }
    };
    FormService.prototype.CreateField = function (field, rowlength, lib) {
        if (field.lifecycle) {
            field.lifecycle = this.addlifeCyle(field.lifecycle);
        }
        return this.fieldService.Create(field, rowlength, lib);
    };
    FormService.prototype.processField = function (fieldDef, lib) {
        var _this = this;
        try {
            var len_1 = fieldDef.length;
            if (!len_1) {
                return [this.CreateField(fieldDef, len_1, lib)];
            }
            return fieldDef.map(function (f) { return _this.CreateField(f, len_1, lib); });
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
        __metadata("design:paramtypes", [_field_service__WEBPACK_IMPORTED_MODULE_3__["FieldService"]])
    ], FormService);
    return FormService;
}());



/***/ }),

/***/ "./projects/jsonformlib/src/lib/services/index.ts":
/*!********************************************************!*\
  !*** ./projects/jsonformlib/src/lib/services/index.ts ***!
  \********************************************************/
/*! exports provided: PageService, FormService, FieldService, AppIndexService, DataService, services */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "services", function() { return services; });
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











var services = [
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
/*! exports provided: Lib_Components, SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lib_Components", function() { return Lib_Components; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ngx_formly_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-formly/bootstrap */ "./node_modules/@ngx-formly/bootstrap/fesm5/ngx-formly-bootstrap.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrxcore_ngrxcore_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ngrxcore/ngrxcore.module */ "./projects/jsonformlib/src/lib/ngrxcore/ngrxcore.module.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components */ "./projects/jsonformlib/src/lib/components/index.ts");
/* harmony import */ var _pipes_myJson_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pipes/myJson.pipe */ "./projects/jsonformlib/src/lib/pipes/myJson.pipe.ts");
/* harmony import */ var _pipes_pre_define_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pipes/pre-define.pipe */ "./projects/jsonformlib/src/lib/pipes/pre-define.pipe.ts");
/* harmony import */ var _pipes_dataformat_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pipes/dataformat.pipe */ "./projects/jsonformlib/src/lib/pipes/dataformat.pipe.ts");
/* harmony import */ var _components_fieldtypes__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/fieldtypes */ "./projects/jsonformlib/src/lib/components/fieldtypes/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var Lib_Components = _components__WEBPACK_IMPORTED_MODULE_10__["components"].concat([
    _pipes_myJson_pipe__WEBPACK_IMPORTED_MODULE_11__["MyJosnPipe"],
    _pipes_pre_define_pipe__WEBPACK_IMPORTED_MODULE_12__["PreDefinePipe"],
    _pipes_dataformat_pipe__WEBPACK_IMPORTED_MODULE_13__["DataformatPipe"]
], _components_fieldtypes__WEBPACK_IMPORTED_MODULE_14__["field_types"]);
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
                _ngx_formly_bootstrap__WEBPACK_IMPORTED_MODULE_5__["FormlyBootstrapModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatExpansionModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"],
                _ngrxcore_ngrxcore_module__WEBPACK_IMPORTED_MODULE_9__["NgRxCoreModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatListModule"]
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
/*! exports provided: AppIndexService, DataService, SharedModule, Lib_Components, JSONFormModule, MyJosnPipe, getButtonState, getButtonStateAsync, BTAction, BTActionFailure, BTActionSuccess, BTService, NgRxCoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_services_appIndex_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/services/appIndex.service */ "./projects/jsonformlib/src/lib/services/appIndex.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppIndexService", function() { return _lib_services_appIndex_service__WEBPACK_IMPORTED_MODULE_0__["AppIndexService"]; });

/* harmony import */ var _lib_services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/services/data.service */ "./projects/jsonformlib/src/lib/services/data.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return _lib_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]; });

/* harmony import */ var _lib_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/shared.module */ "./projects/jsonformlib/src/lib/shared.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return _lib_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Lib_Components", function() { return _lib_shared_module__WEBPACK_IMPORTED_MODULE_2__["Lib_Components"]; });

/* harmony import */ var _lib_jsonform_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/jsonform.module */ "./projects/jsonformlib/src/lib/jsonform.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JSONFormModule", function() { return _lib_jsonform_module__WEBPACK_IMPORTED_MODULE_3__["JSONFormModule"]; });

/* harmony import */ var _lib_pipes_myJson_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/pipes/myJson.pipe */ "./projects/jsonformlib/src/lib/pipes/myJson.pipe.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MyJosnPipe", function() { return _lib_pipes_myJson_pipe__WEBPACK_IMPORTED_MODULE_4__["MyJosnPipe"]; });

/* harmony import */ var _lib_ngrxcore_reducers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/ngrxcore/reducers */ "./projects/jsonformlib/src/lib/ngrxcore/reducers/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getButtonState", function() { return _lib_ngrxcore_reducers__WEBPACK_IMPORTED_MODULE_5__["getButtonState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getButtonStateAsync", function() { return _lib_ngrxcore_reducers__WEBPACK_IMPORTED_MODULE_5__["getButtonStateAsync"]; });

/* harmony import */ var _lib_ngrxcore_actions_bt_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/ngrxcore/actions/bt.actions */ "./projects/jsonformlib/src/lib/ngrxcore/actions/bt.actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BTAction", function() { return _lib_ngrxcore_actions_bt_actions__WEBPACK_IMPORTED_MODULE_6__["BTAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BTActionFailure", function() { return _lib_ngrxcore_actions_bt_actions__WEBPACK_IMPORTED_MODULE_6__["BTActionFailure"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BTActionSuccess", function() { return _lib_ngrxcore_actions_bt_actions__WEBPACK_IMPORTED_MODULE_6__["BTActionSuccess"]; });

/* harmony import */ var _lib_ngrxcore_services_BT_Service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/ngrxcore/services/BT.Service */ "./projects/jsonformlib/src/lib/ngrxcore/services/BT.Service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BTService", function() { return _lib_ngrxcore_services_BT_Service__WEBPACK_IMPORTED_MODULE_7__["BTService"]; });

/* harmony import */ var _lib_ngrxcore_ngrxcore_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib/ngrxcore/ngrxcore.module */ "./projects/jsonformlib/src/lib/ngrxcore/ngrxcore.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgRxCoreModule", function() { return _lib_ngrxcore_ngrxcore_module__WEBPACK_IMPORTED_MODULE_8__["NgRxCoreModule"]; });

/*
 * Public API Surface of jsonformlib
 */











/***/ }),

/***/ "./spa/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./spa/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./spa/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./spa/app/Routes.ts":
/*!***************************!*\
  !*** ./spa/app/Routes.ts ***!
  \***************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _components_demo_demo_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/demo/demo.component */ "./spa/app/components/demo/demo.component.ts");
/* harmony import */ var _components_formbuilder_formbuilder_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/formbuilder/formbuilder.component */ "./spa/app/components/formbuilder/formbuilder.component.ts");
/* harmony import */ var projects_jsonformlib_src_lib_components_case_case_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/jsonformlib/src/lib/components/case/case.component */ "./projects/jsonformlib/src/lib/components/case/case.component.ts");



var routes = [
    { path: '', component: _components_demo_demo_component__WEBPACK_IMPORTED_MODULE_0__["DemoComponent"] },
    { path: 'case/:id', component: _components_formbuilder_formbuilder_component__WEBPACK_IMPORTED_MODULE_1__["FormbuilderComponent"] },
    { path: 'forms/:id', component: _components_formbuilder_formbuilder_component__WEBPACK_IMPORTED_MODULE_1__["FormbuilderComponent"] },
    { path: 'public/:id', component: _components_formbuilder_formbuilder_component__WEBPACK_IMPORTED_MODULE_1__["FormbuilderComponent"] },
    { path: 'restaurant/:id', component: _components_formbuilder_formbuilder_component__WEBPACK_IMPORTED_MODULE_1__["FormbuilderComponent"] },
    { path: 'view/:id', component: projects_jsonformlib_src_lib_components_case_case_component__WEBPACK_IMPORTED_MODULE_2__["CaseComponent"] },
    {
        path: 'Formbuilder', component: _components_formbuilder_formbuilder_component__WEBPACK_IMPORTED_MODULE_1__["FormbuilderComponent"]
    }
];


/***/ }),

/***/ "./spa/app/app.component.css":
/*!***********************************!*\
  !*** ./spa/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./spa/app/app.component.html":
/*!************************************!*\
  !*** ./spa/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./spa/app/app.component.ts":
/*!**********************************!*\
  !*** ./spa/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _services_datastore_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/datastore.service */ "./spa/app/services/datastore.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var projects_jsonformlib_src_public_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/jsonformlib/src/public_api */ "./projects/jsonformlib/src/public_api.ts");
/* harmony import */ var spa_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! spa/environments/environment */ "./spa/environments/environment.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/user.service */ "./spa/app/services/user.service.ts");
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
    function AppComponent(appIndex, userService, datastore) {
        this.appIndex = appIndex;
        this.userService = userService;
        this.datastore = datastore;
        this.booksList = [];
        // const userRef = this.userService.getReferenceUser().ref;
        // this.Index$ = this.datastore.getIndex().valueChanges();
        appIndex.LoadIndex(spa_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].path)
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./spa/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./spa/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [projects_jsonformlib_src_public_api__WEBPACK_IMPORTED_MODULE_2__["AppIndexService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _services_datastore_service__WEBPACK_IMPORTED_MODULE_0__["DataStoreService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./spa/app/app.module.ts":
/*!*******************************!*\
  !*** ./spa/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _services_datastore_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/datastore.service */ "./spa/app/services/datastore.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/auth.service */ "./spa/app/services/auth.service.ts");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./spa/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Routes */ "./spa/app/Routes.ts");
/* harmony import */ var _components_demo_demo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/demo/demo.component */ "./spa/app/components/demo/demo.component.ts");
/* harmony import */ var _components_jsoneditor_jsoneditor_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/jsoneditor/jsoneditor.component */ "./spa/app/components/jsoneditor/jsoneditor.component.ts");
/* harmony import */ var _components_formbuilder_formbuilder_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/formbuilder/formbuilder.component */ "./spa/app/components/formbuilder/formbuilder.component.ts");
/* harmony import */ var projects_jsonformlib_src_public_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! projects/jsonformlib/src/public_api */ "./projects/jsonformlib/src/public_api.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../environments/environment */ "./spa/environments/environment.ts");
/* harmony import */ var _services_validation_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/validation.service */ "./spa/app/services/validation.service.ts");
/* harmony import */ var _services_mybt_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/mybt.service */ "./spa/app/services/mybt.service.ts");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/auth-guard.service */ "./spa/app/services/auth-guard.service.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/user.service */ "./spa/app/services/user.service.ts");
/* harmony import */ var projects_jsonformlib_src_lib_jsonform_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! projects/jsonformlib/src/lib/jsonform.module */ "./projects/jsonformlib/src/lib/jsonform.module.ts");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_jsoneditor_jsoneditor_component__WEBPACK_IMPORTED_MODULE_8__["JsonEditorComponent"],
                _components_demo_demo_component__WEBPACK_IMPORTED_MODULE_7__["DemoComponent"],
                _components_formbuilder_formbuilder_component__WEBPACK_IMPORTED_MODULE_9__["FormbuilderComponent"]
            ].concat(projects_jsonformlib_src_public_api__WEBPACK_IMPORTED_MODULE_10__["Lib_Components"]),
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(_Routes__WEBPACK_IMPORTED_MODULE_6__["routes"], { useHash: true, enableTracing: false }),
                projects_jsonformlib_src_public_api__WEBPACK_IMPORTED_MODULE_10__["SharedModule"],
                projects_jsonformlib_src_lib_jsonform_module__WEBPACK_IMPORTED_MODULE_18__["JSONFormModule"].forRoot(_services_validation_service__WEBPACK_IMPORTED_MODULE_12__["ValidationService"].project),
                angularfire2__WEBPACK_IMPORTED_MODULE_2__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].firebase),
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_14__["AngularFireAuthModule"],
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_16__["AngularFirestoreModule"].enablePersistence(),
            ],
            providers: [
                // BTService
                _services_mybt_service__WEBPACK_IMPORTED_MODULE_13__["myBTService"].Service,
                _services_datastore_service__WEBPACK_IMPORTED_MODULE_0__["DataStoreService"],
                _services_user_service__WEBPACK_IMPORTED_MODULE_17__["UserService"],
                _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_15__["AuthGuard"],
                _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }),
        __metadata("design:paramtypes", [])
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./spa/app/components/demo/demo.component.css":
/*!****************************************************!*\
  !*** ./spa/app/components/demo/demo.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./spa/app/components/demo/demo.component.html":
/*!*****************************************************!*\
  !*** ./spa/app/components/demo/demo.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Build your application easy, clear and agile</h1>\r\n<div class=\"row\">\r\n  <div class=\"col-sm-4\">\r\n    <div class=\"well\">\r\n      <p>Start your cloud form app from powerful agile form builder</p>\r\n    </div>\r\n    <div class=\"well\">\r\n      <p>Modifty your design and see instant result</p>\r\n    </div>\r\n    <div class=\"well\">\r\n      <p>Host your form in cloud and contact us for fullstack development</p>\r\n    </div>\r\n    <div class=\"well\">\r\n      <p>For large enterprise system, easy use it for start and verify your design. contact us to integrity with your\r\n        backend\r\n        api </p>\r\n    </div>\r\n    <div class=\"well\">\r\n      <p>Flexible host options with google angular base application </p>\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"col-sm-4\">\r\n\r\n    <h3>Sample forms:</h3>\r\n    <json-menu></json-menu>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./spa/app/components/demo/demo.component.ts":
/*!***************************************************!*\
  !*** ./spa/app/components/demo/demo.component.ts ***!
  \***************************************************/
/*! exports provided: DemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoComponent", function() { return DemoComponent; });
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

var DemoComponent = /** @class */ (function () {
    function DemoComponent() {
    }
    DemoComponent.prototype.ngOnInit = function () {
    };
    DemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-demo',
            template: __webpack_require__(/*! ./demo.component.html */ "./spa/app/components/demo/demo.component.html"),
            styles: [__webpack_require__(/*! ./demo.component.css */ "./spa/app/components/demo/demo.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DemoComponent);
    return DemoComponent;
}());



/***/ }),

/***/ "./spa/app/components/formbuilder/formbuilder.component.css":
/*!******************************************************************!*\
  !*** ./spa/app/components/formbuilder/formbuilder.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#preivew {\r\n  padding: 4px;\r\n  box-shadow:1px 1px grey, -0.4em 0 0.4em grey;\r\n}\r\n.flex {\r\n  display: flex;\r\n}\r\n/* Create two equal columns that sits next to each other */\r\n.flex1 {\r\n  flex: 50%;\r\n  padding: 30px;\r\n}\r\n"

/***/ }),

/***/ "./spa/app/components/formbuilder/formbuilder.component.html":
/*!*******************************************************************!*\
  !*** ./spa/app/components/formbuilder/formbuilder.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "toggle <a data-toggle=\"collapse\" href=\"#preivew\" role=\"button\" aria-expanded=\"false\" aria-controls=\"preivew\">\n    <b> preivew</b>\n</a>\n<a data-toggle=\"collapse\" href=\"#editors\" role=\"button\" aria-expanded=\"true\" aria-controls=\"editors\">\n    <b> editor </b>\n</a>\n<div class='flex'>\n    <div id='preivew' class='collapse in flex1'>\n        <json-case #preview></json-case>\n    </div>\n    <div id='editors' class='collapse in flex1'>\n        <json-editor></json-editor>\n    </div>\n</div>"

/***/ }),

/***/ "./spa/app/components/formbuilder/formbuilder.component.ts":
/*!*****************************************************************!*\
  !*** ./spa/app/components/formbuilder/formbuilder.component.ts ***!
  \*****************************************************************/
/*! exports provided: FormbuilderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormbuilderComponent", function() { return FormbuilderComponent; });
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

var FormbuilderComponent = /** @class */ (function () {
    function FormbuilderComponent() {
    }
    FormbuilderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-formbuilder",
            template: __webpack_require__(/*! ./formbuilder.component.html */ "./spa/app/components/formbuilder/formbuilder.component.html"),
            styles: [__webpack_require__(/*! ./formbuilder.component.css */ "./spa/app/components/formbuilder/formbuilder.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FormbuilderComponent);
    return FormbuilderComponent;
}());



/***/ }),

/***/ "./spa/app/components/jsoneditor/JsonEditorOptions.ts":
/*!************************************************************!*\
  !*** ./spa/app/components/jsoneditor/JsonEditorOptions.ts ***!
  \************************************************************/
/*! exports provided: JsonEditorOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonEditorOptions", function() { return JsonEditorOptions; });
var JsonEditorOptions = /** @class */ (function () {
    function JsonEditorOptions() {
        this.escapeUnicode = false;
        this.sortObjectKeys = false;
        this.history = true;
        this.mode = "tree";
        this.search = true;
        this.indentation = 2;
    }
    return JsonEditorOptions;
}());



/***/ }),

/***/ "./spa/app/components/jsoneditor/jsondeitor.component.html":
/*!*****************************************************************!*\
  !*** ./spa/app/components/jsoneditor/jsondeitor.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-4\">\r\n        <label for=\"file-upload\" class=\"custom-file-upload btn btn-primary\">\r\n            Load a JSON UI Design\r\n        </label>\r\n        <input id=\"file-upload\" type=\"file\" (change)='LoadFile($event)' />\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n        <button (click)='SaveFile()' class=\" btn btn-primary\">Save Design</button>\r\n    </div>\r\n</div>\r\n\r\n<div id=\"jsoneditor\" #jsoneditor></div>\r\n<code>{{model |json}}</code>"

/***/ }),

/***/ "./spa/app/components/jsoneditor/jsoneditor.component.scss":
/*!*****************************************************************!*\
  !*** ./spa/app/components/jsoneditor/jsoneditor.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#jsoneditor {\n  height: 800px;\n  /* Should be removed. Only for demonstration */ }\n\ninput[type=\"file\"] {\n  display: none; }\n\n.custom-file-upload {\n  border: 1px solid #ccc;\n  display: inline-block;\n  padding: 6px 12px;\n  cursor: pointer; }\n"

/***/ }),

/***/ "./spa/app/components/jsoneditor/jsoneditor.component.ts":
/*!***************************************************************!*\
  !*** ./spa/app/components/jsoneditor/jsoneditor.component.ts ***!
  \***************************************************************/
/*! exports provided: JsonEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonEditorComponent", function() { return JsonEditorComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jsoneditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jsoneditor */ "./node_modules/jsoneditor/index.js");
/* harmony import */ var jsoneditor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsoneditor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _JsonEditorOptions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./JsonEditorOptions */ "./spa/app/components/jsoneditor/JsonEditorOptions.ts");
/* harmony import */ var projects_jsonformlib_src_public_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! projects/jsonformlib/src/public_api */ "./projects/jsonformlib/src/public_api.ts");
/* harmony import */ var projects_jsonformlib_src_lib_services_page_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! projects/jsonformlib/src/lib/services/page.service */ "./projects/jsonformlib/src/lib/services/page.service.ts");
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







var JsonEditorComponent = /** @class */ (function () {
    function JsonEditorComponent(jsonPipe, pageService, store) {
        this.jsonPipe = jsonPipe;
        this.pageService = pageService;
        this.store = store;
        this._data = {};
    }
    Object.defineProperty(JsonEditorComponent.prototype, "model", {
        get: function () {
            return this._data ? this._data['model'] : { "title": "placeholder" };
        },
        enumerable: true,
        configurable: true
    });
    JsonEditorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.editor = new jsoneditor__WEBPACK_IMPORTED_MODULE_2__(this.josneditor.nativeElement, this.setupOption(), this._data);
        this.store.select(function (s) { return s.page; })
            .subscribe(function (a) {
            if (_this.pageService._currentPage) {
                _this.contents = _this.pageService._currentPage.defCase;
            }
        });
    };
    Object.defineProperty(JsonEditorComponent.prototype, "keys", {
        get: function () {
            if (!this.contents) {
                return undefined;
            }
            var keys = this.jsonPipe.FindKeys(this.contents);
            return keys;
        },
        enumerable: true,
        configurable: true
    });
    JsonEditorComponent.prototype.setupOption = function () {
        var _this = this;
        var option = new _JsonEditorOptions__WEBPACK_IMPORTED_MODULE_3__["JsonEditorOptions"]();
        option.modes = ['code', 'tree']; // allowed modes 'form', 'text', 'tree', 'view'
        option.mode = "code";
        option.onChange = function () {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["timer"])(1000).subscribe(function () {
                _this.pageService.CurrentPage = { defCase: _this.editor.get(), model: null, src: 'JsonEditorComponent' };
            });
            Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["timer"])(30000).subscribe(function () {
                localStorage.setItem('page', JSON.stringify(_this.pageService._currentPage));
            });
        };
        option.onModeChange = function (newMode, oldMode) {
            option.mode = newMode;
            switch (option.mode) {
                case "tree":
                    _this.editor.expandAll();
                    option.onEditable = function (node) {
                        switch (node.field) {
                            case "label":
                                return true;
                            case "title":
                                return true;
                            case "level":
                                return true;
                            default:
                                return false;
                        }
                    };
                    break;
                default:
                    option.onEditable = null;
                    break;
            }
            console.log('Mode switched from', oldMode, 'to', newMode, option.onEditable);
        };
        return option;
    };
    JsonEditorComponent.prototype.AutoSave = function () {
    };
    JsonEditorComponent.prototype.SaveFile = function () {
        var pom = document.createElement("a");
        var text = JSON.stringify(this.editor.get());
        pom.download = this.filename;
        var blob = new Blob([text], { type: "application/json" });
        pom.href = URL.createObjectURL(blob);
        pom.textContent = "Download " + this.filename;
        if (document.createEvent) {
            var event_1 = document.createEvent("MouseEvents");
            event_1.initEvent("click", true, true);
            pom.dispatchEvent(event_1);
        }
        else {
            pom.click();
        }
    };
    JsonEditorComponent.prototype.LoadFile = function (event) {
        var _this = this;
        this.filename = event.target.files[0].name;
        var reader = new FileReader();
        reader.onload = function (e) {
            try {
                _this.contents = JSON.parse(e.target["result"]);
            }
            catch (error) {
                console.log("error:", error);
            }
        };
        reader.readAsText(event.target.files[0]);
    };
    Object.defineProperty(JsonEditorComponent.prototype, "contents", {
        set: function (value) {
            try {
                value = value ? value : {};
                this.editor.set(value);
                this.pageService.CurrentPage = { defCase: value, model: null, src: 'JsonEditorComponent' };
                if (this.editor.options.JsonEditorMode === 'tree') {
                    this.editor.expandAll();
                }
            }
            catch (error) {
                console.log(error, value);
            }
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("jsoneditor"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], JsonEditorComponent.prototype, "josneditor", void 0);
    JsonEditorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: "json-editor",
            template: __webpack_require__(/*! ./jsondeitor.component.html */ "./spa/app/components/jsoneditor/jsondeitor.component.html"),
            styles: [__webpack_require__(/*! ./jsoneditor.component.scss */ "./spa/app/components/jsoneditor/jsoneditor.component.scss")],
            providers: [projects_jsonformlib_src_public_api__WEBPACK_IMPORTED_MODULE_4__["MyJosnPipe"]]
        }),
        __metadata("design:paramtypes", [projects_jsonformlib_src_public_api__WEBPACK_IMPORTED_MODULE_4__["MyJosnPipe"],
            projects_jsonformlib_src_lib_services_page_service__WEBPACK_IMPORTED_MODULE_5__["PageService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"]])
    ], JsonEditorComponent);
    return JsonEditorComponent;
}());



/***/ }),

/***/ "./spa/app/services/auth-guard.service.ts":
/*!************************************************!*\
  !*** ./spa/app/services/auth-guard.service.ts ***!
  \************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./spa/app/services/auth.service.ts");
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

/***/ "./spa/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./spa/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AuthService = /** @class */ (function () {
    function AuthService(afAuth, afs, router) {
        var _this = this;
        this.afAuth = afAuth;
        this.afs = afs;
        this.router = router;
        //// Get auth data, then get firestore user document || null
        this.user = this.afAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (user) {
            if (user) {
                return _this.afs.doc("users/" + user.uid).valueChanges();
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(null);
            }
        }));
    }
    AuthService.prototype.googleLogin = function () {
        var provider = new firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"].GoogleAuthProvider();
        return this.oAuthLogin(provider);
    };
    AuthService.prototype.oAuthLogin = function (provider) {
        var _this = this;
        return this.afAuth.auth.signInWithPopup(provider)
            .then(function (credential) {
            _this.updateUserData(credential.user);
        });
    };
    AuthService.prototype.updateUserData = function (user) {
        // Sets user data to firestore on login
        var userRef = this.afs.doc("users/" + user.uid);
        var data = {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL
        };
        return userRef.set(data, { merge: true });
    };
    AuthService.prototype.signOut = function () {
        var _this = this;
        this.afAuth.auth.signOut().then(function () {
            _this.router.navigate(['/']);
        });
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./spa/app/services/datastore.service.ts":
/*!***********************************************!*\
  !*** ./spa/app/services/datastore.service.ts ***!
  \***********************************************/
/*! exports provided: DataStoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataStoreService", function() { return DataStoreService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../environments/environment */ "./spa/environments/environment.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.service */ "./spa/app/services/user.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var projects_jsonformlib_src_public_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! projects/jsonformlib/src/public_api */ "./projects/jsonformlib/src/public_api.ts");
/* harmony import */ var projects_jsonformlib_src_lib_services_page_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! projects/jsonformlib/src/lib/services/page.service */ "./projects/jsonformlib/src/lib/services/page.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var collection_name = 'items';
var DataStoreService = /** @class */ (function () {
    /**
     * @constructor DataStoreService
     * @param {AngularFirestore} afs
     * @param {UserService} userService
     */
    function DataStoreService(afs, userService, index, pageservice, http) {
        this.afs = afs;
        this.userService = userService;
        this.index = index;
        this.pageservice = pageservice;
        this.http = http;
        this.Collection = this.afs.collection(collection_name);
    }
    /**
     * create void function
     * Add a new data to bookings collection.
     * @param {any} data
     * @memberof DataStoreService
     */
    DataStoreService.prototype.create = function (data) {
        // Persist a document id
        var id = this.afs.createId();
        data.id = id;
        this.Collection.add(data);
    };
    DataStoreService.prototype.UploadAssets = function () {
        var _this = this;
        var def = this.index.appIndex.basepath;
        this.afs.collection(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].project).doc('index').set(this.index.appIndex);
        Object.entries(this.index.appIndex.Resources).forEach(function (resource, index) {
            var dom = resource[0];
            var url = null;
            if (dom !== 'defaultDomin') {
                Object.values(resource[1]).forEach(function (v) {
                    if (v)
                        url = _this.pageservice.getPath(v, dom, "uiDefPath");
                    if (url) {
                        _this.http.get(url).subscribe(function (c) {
                            _this.afs.collection(dom).doc(c.caseID).set(c).catch(function (e) {
                                console.log(c.caseID, e);
                            });
                        });
                    }
                });
            }
        });
    };
    DataStoreService.prototype.getIndex = function () {
        return this.afs.collection(collection_name, function (ref) { return ref; });
    };
    DataStoreService.prototype.setIndex = function (index) {
        index.id = "demo";
        this.afs.collection("index").doc('demo').set(index).then(function (c) { return console.log(c); });
        //this.afs.collection('index').add(index);
    };
    /**
     * getByUserRef function
     * Get bunch of books by userRef
     * @param {any} userRef
     * @returns {AngularFirestoreCollection<any>} booksCollection
     * @memberof DataStoreService
     */
    DataStoreService.prototype.getByUserRef = function (userRef) {
        return this.Collection = this.afs.collection(collection_name, function (ref) { return ref.where('user', '==', userRef); });
    };
    /**
     * getByFilters void function.
     * Get books collections by filter params
     * @param {string} size
     * @param {string} category
     * @param {string} author
     * @param {number} minPrice
     * @param {number} maxPrice
     * @memberof DataStoreService
     */
    DataStoreService.prototype.getByFilters = function (size, category, author, minPrice, maxPrice) {
        return this.Collection = this.afs.collection(collection_name, function (ref) {
            // Compose a query using multiple .where() methods
            return ref
                .where('size', '==', size)
                .where('category', '==', category)
                .where('author', '==', author)
                .where('price', '>', minPrice)
                .where('price', '<', maxPrice);
        });
    };
    DataStoreService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        __metadata("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"], _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            projects_jsonformlib_src_public_api__WEBPACK_IMPORTED_MODULE_5__["AppIndexService"],
            projects_jsonformlib_src_lib_services_page_service__WEBPACK_IMPORTED_MODULE_6__["PageService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], DataStoreService);
    return DataStoreService;
}());



/***/ }),

/***/ "./spa/app/services/mybt.service.ts":
/*!******************************************!*\
  !*** ./spa/app/services/mybt.service.ts ***!
  \******************************************/
/*! exports provided: myBTService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "myBTService", function() { return myBTService; });
/* harmony import */ var projects_jsonformlib_src_lib_services_page_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! projects/jsonformlib/src/lib/services/page.service */ "./projects/jsonformlib/src/lib/services/page.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var projects_jsonformlib_src_lib_services_appIndex_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! projects/jsonformlib/src/lib/services/appIndex.service */ "./projects/jsonformlib/src/lib/services/appIndex.service.ts");
/* harmony import */ var projects_jsonformlib_src_lib_ngrxcore_services_BT_Service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! projects/jsonformlib/src/lib/ngrxcore/services/BT.Service */ "./projects/jsonformlib/src/lib/ngrxcore/services/BT.Service.ts");
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
        provide: projects_jsonformlib_src_lib_ngrxcore_services_BT_Service__WEBPACK_IMPORTED_MODULE_4__["BTService"],
        useClass: myBTService_1
    };
    myBTService = myBTService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [projects_jsonformlib_src_lib_services_appIndex_service__WEBPACK_IMPORTED_MODULE_3__["AppIndexService"],
            projects_jsonformlib_src_lib_services_page_service__WEBPACK_IMPORTED_MODULE_0__["PageService"]])
    ], myBTService);
    return myBTService;
    var myBTService_1;
}(projects_jsonformlib_src_lib_ngrxcore_services_BT_Service__WEBPACK_IMPORTED_MODULE_4__["BTService"]));



/***/ }),

/***/ "./spa/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./spa/app/services/user.service.ts ***!
  \******************************************/
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

/***/ "./spa/app/services/validation.service.ts":
/*!************************************************!*\
  !*** ./spa/app/services/validation.service.ts ***!
  \************************************************/
/*! exports provided: ValidationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationService", function() { return ValidationService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ "./spa/environments/environment.ts");

function PatternValidator(control, pattern) {
    return control.value && control.value.match(pattern);
}
function DifferenceInDays(firstDate, secondDate) {
    return Math.round((secondDate.getTime() - firstDate.getTime()) / (1000 * 60 * 60 * 24));
}
var ValidationService = /** @class */ (function () {
    function ValidationService() {
    }
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
    ValidationService.project = {
        field_validation: [_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].project],
        project: {
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

/***/ "./spa/main.ts":
/*!*********************!*\
  !*** ./spa/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./spa/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./spa/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./spa/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\dev\jsonform\spa\main.ts */"./spa/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map