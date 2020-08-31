(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/annual-report/annual-report.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/annual-report/annual-report.component.ts ***!
  \**********************************************************/
/*! exports provided: AnnualReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnnualReportComponent", function() { return AnnualReportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _entrydata_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../entrydata.service */ "./src/app/entrydata.service.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function AnnualReportComponent_th_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](c_r29);
} }
function AnnualReportComponent_tr_12_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r32 = ctx.$implicit;
    const m_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", m_r30.categories[c_r32] ? m_r30.categories[c_r32].sum : 0, "\u5186 ");
} }
function AnnualReportComponent_tr_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, AnnualReportComponent_tr_12_td_3_Template, 2, 1, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const m_r30 = ctx.$implicit;
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", m_r30.month, "\u6708");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r27.categories);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", m_r30.sum, "\u5186");
} }
function AnnualReportComponent_td_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r34 = ctx.$implicit;
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r28.sumCategory(c_r34), "\u5186 ");
} }
class AnnualReportComponent {
    constructor(route, router, entrydata) {
        this.route = route;
        this.router = router;
        this.entrydata = entrydata;
        this.data = [];
        this.categories = [];
        this.year = route.data['year'] || new Date().getFullYear();
    }
    ngOnInit() {
        this.update();
    }
    update() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const data = [];
            this.categories = yield this.entrydata.getCategories();
            for (let i = 0; i < 12; i++) {
                data.push(yield this.entrydata.getMonthInfo(this.year, i + 1));
            }
            this.data = data;
        });
    }
    sumCategory(c) {
        return this.data.map(e => {
            return e.categories[c] ? e.categories[c].sum : 0;
        }).reduce((a, b) => a + b, 0);
    }
    sumAll() {
        return this.categories.map(c => this.sumCategory(c)).reduce((a, b) => a + b, 0);
    }
    showPrevYear() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.router.navigate(['/annual-report', --this.year]);
            this.update();
        });
    }
    showNextYear() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.router.navigate(['/annual-report', ++this.year]);
            this.update();
        });
    }
}
AnnualReportComponent.ɵfac = function AnnualReportComponent_Factory(t) { return new (t || AnnualReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_entrydata_service__WEBPACK_IMPORTED_MODULE_3__["EntrydataService"])); };
AnnualReportComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AnnualReportComponent, selectors: [["app-annual-report"]], inputs: { year: "year" }, decls: 19, vars: 5, consts: [[1, "buttons"], ["mat-button", "", 3, "click"], ["class", "header", 4, "ngFor", "ngForOf"], [1, "header"], [4, "ngFor", "ngForOf"], ["class", "header price", 4, "ngFor", "ngForOf"], [1, "header", "price"], ["class", "price", 4, "ngFor", "ngForOf"], [1, "price"]], template: function AnnualReportComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AnnualReportComponent_Template_button_click_1_listener() { return ctx.showPrevYear(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u6628\u5E74");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AnnualReportComponent_Template_button_click_3_listener() { return ctx.showNextYear(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\u6765\u5E74");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, AnnualReportComponent_th_9_Template, 2, 1, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "\u5408\u8A08");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, AnnualReportComponent_tr_12_Template, 6, 3, "tr", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "\u5408\u8A08");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, AnnualReportComponent_td_16_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.year, "\u5E74");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.sumAll(), "\u5186");
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], styles: ["table[_ngcontent-%COMP%] {\n  margin: 10px auto;\n}\ntable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  width: 25vw;\n  max-width: 200px;\n  height: 50px;\n  border-top: #222;\n  text-align: center;\n}\ntable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.price[_ngcontent-%COMP%] {\n  text-align: right;\n}\ntable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.header[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 1.1em;\n}\ntable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th.header[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 1.1em;\n}\n.buttons[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  margin: 10px;\n}\n.buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin: 0 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lMi95MjAxOS9zMTkxMDI5Ny9yZXBvcy9rYWtlaWJvLWZyb250L3NyYy9hcHAvYW5udWFsLXJlcG9ydC9hbm51YWwtcmVwb3J0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hbm51YWwtcmVwb3J0L2FubnVhbC1yZXBvcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtBQ0NKO0FERU07RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0FSO0FER007RUFDRSxpQkFBQTtBQ0RSO0FESU07RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0FDRlI7QURLTTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7QUNIUjtBRFNFO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsWUFBQTtBQ05KO0FEUUk7RUFDRSxhQUFBO0FDTk4iLCJmaWxlIjoic3JjL2FwcC9hbm51YWwtcmVwb3J0L2FubnVhbC1yZXBvcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XG4gIFxuICAgIHRyIHtcbiAgICAgIHRkIHtcbiAgICAgICAgd2lkdGg6IDI1dnc7XG4gICAgICAgIG1heC13aWR0aDogMjAwcHg7XG4gICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgYm9yZGVyLXRvcDogIzIyMjtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuICBcbiAgICAgIHRkLnByaWNlIHtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICB9XG4gIFxuICAgICAgdGQuaGVhZGVyIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4xZW07XG4gICAgICB9XG4gIFxuICAgICAgdGguaGVhZGVyIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4xZW07XG4gICAgICB9XG4gIFxuICAgIH1cbiAgfVxuXG4gIC5idXR0b25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbjogMTBweDtcbiAgXG4gICAgYnV0dG9uIHtcbiAgICAgIG1hcmdpbjogMCA1cHg7XG4gICAgfVxuICB9IiwidGFibGUge1xuICBtYXJnaW46IDEwcHggYXV0bztcbn1cbnRhYmxlIHRyIHRkIHtcbiAgd2lkdGg6IDI1dnc7XG4gIG1heC13aWR0aDogMjAwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgYm9yZGVyLXRvcDogIzIyMjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxudGFibGUgdHIgdGQucHJpY2Uge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbnRhYmxlIHRyIHRkLmhlYWRlciB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDEuMWVtO1xufVxudGFibGUgdHIgdGguaGVhZGVyIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMS4xZW07XG59XG5cbi5idXR0b25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiAxMHB4O1xufVxuLmJ1dHRvbnMgYnV0dG9uIHtcbiAgbWFyZ2luOiAwIDVweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AnnualReportComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-annual-report',
                templateUrl: './annual-report.component.html',
                styleUrls: ['./annual-report.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _entrydata_service__WEBPACK_IMPORTED_MODULE_3__["EntrydataService"] }]; }, { year: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _top_top_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./top/top.component */ "./src/app/top/top.component.ts");
/* harmony import */ var _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./calendar/calendar.component */ "./src/app/calendar/calendar.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/settings/settings.component.ts");
/* harmony import */ var _annual_report_annual_report_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./annual-report/annual-report.component */ "./src/app/annual-report/annual-report.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");











const routes = [
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
    },
    {
        path: 'register',
        component: _register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"]
    },
    {
        path: 'calendar/:year/:month',
        component: _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_5__["CalendarComponent"],
    },
    {
        path: 'calendar',
        component: _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_5__["CalendarComponent"],
    },
    {
        path: 'settings',
        component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_6__["SettingsComponent"],
    },
    {
        path: 'annual-report/:year',
        component: _annual_report_annual_report_component__WEBPACK_IMPORTED_MODULE_7__["AnnualReportComponent"],
    },
    {
        path: 'annual-report',
        component: _annual_report_annual_report_component__WEBPACK_IMPORTED_MODULE_7__["AnnualReportComponent"],
    },
    {
        path: '',
        component: _top_top_component__WEBPACK_IMPORTED_MODULE_4__["TopComponent"],
    },
    {
        path: '**',
        component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__["NotFoundComponent"],
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _input_data_input_data_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./input-data/input-data.component */ "./src/app/input-data/input-data.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _authenticator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authenticator.service */ "./src/app/authenticator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");












function AppComponent_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_button_10_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r41.openDialog(false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u8FFD\u52A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_a_17_Template(rf, ctx) { if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_a_17_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13); return _r36.toggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u30AB\u30EC\u30F3\u30C0\u30FC");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_a_18_Template(rf, ctx) { if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_a_18_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13); return _r36.toggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u8A2D\u5B9A");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_a_19_Template(rf, ctx) { if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_a_19_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13); return _r36.toggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u5E74\u9593");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_a_20_Template(rf, ctx) { if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_a_20_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r50); const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13); return _r36.toggle() && ctx_r49.authenticator.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u30ED\u30B0\u30A2\u30A6\u30C8");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AppComponent {
    constructor(dialog, authenticator, router) {
        this.dialog = dialog;
        this.authenticator = authenticator;
        this.router = router;
        this.title = 'kakeibo';
    }
    openDialog(exit = false) {
        const dialogRef = this.dialog.open(_input_data_input_data_component__WEBPACK_IMPORTED_MODULE_1__["InputDataComponent"], {
            width: '300px',
            data: {
                prevInputData: this.prevInputData,
                exit: exit
            }
        });
        dialogRef.afterClosed().subscribe(result => {
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 23, vars: 6, consts: [["color", "primary"], ["mat-icon-button", "", 3, "click"], ["mat-flat-button", "", "routerLink", "/", "color", "primary"], [1, "spacer"], ["id", "username"], ["mat-flat-button", "", 3, "click", 4, "ngIf"], [2, "grid-row", "2"], ["mode", "over", 2, "min-width", "200px", "max-width", "100vw"], ["snav", ""], ["mat-list-item", "", "routerLink", "/", 3, "click"], ["mat-list-item", "", "routerLink", "/calendar", 3, "click", 4, "ngIf"], ["mat-list-item", "", "routerLink", "/settings", 3, "click", 4, "ngIf"], ["mat-list-item", "", "routerLink", "/annual-report", 3, "click", 4, "ngIf"], ["mat-list-item", "", 3, "click", 4, "ngIf"], ["mat-flat-button", "", 3, "click"], ["mat-list-item", "", "routerLink", "/calendar", 3, "click"], ["mat-list-item", "", "routerLink", "/settings", 3, "click"], ["mat-list-item", "", "routerLink", "/annual-report", 3, "click"], ["mat-list-item", "", 3, "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51); const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13); return _r36.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u5BB6\u8A08\u7C3F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AppComponent_button_10_Template, 2, 0, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-sidenav-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-sidenav", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51); const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13); return _r36.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u30DB\u30FC\u30E0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, AppComponent_a_17_Template, 2, 0, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AppComponent_a_18_Template, 2, 0, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, AppComponent_a_19_Template, 2, 0, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, AppComponent_a_20_Template, 2, 0, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-sidenav-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.authenticator.userName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authenticator.sessionId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx.authenticator.sessionId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx.authenticator.sessionId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx.authenticator.sessionId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx.authenticator.sessionId);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenav"], _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatNavList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListItem"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavContent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]], styles: [".icon[_ngcontent-%COMP%] {\n  padding: 0 14px;\n}\n\n.spacer[_ngcontent-%COMP%] {\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n}\n\nmat-toolbar[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  height: 56px;\n  z-index: 1000;\n}\n\nmat-sidenav-container[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\nmat-sidenav-container[_ngcontent-%COMP%]   mat-sidenav-content[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\nmat-sidenav-container[_ngcontent-%COMP%]   mat-sidenav-content[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  align-self: center;\n}\n\n#username[_ngcontent-%COMP%] {\n  margin: 0 10px;\n}\n\n[_nghost-%COMP%] {\n  height: 100vh;\n  display: grid;\n  grid-template-rows: 56px auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lMi95MjAxOS9zMTkxMDI5Ny9yZXBvcy9rYWtlaWJvLWZyb250L3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtVQUFBLGNBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtBQ0NGOztBREdFO0VBQ0UsWUFBQTtBQ0RKOztBRE1JO0VBQ0Usa0JBQUE7QUNKTjs7QURTQTtFQUNFLGNBQUE7QUNORjs7QURTQTtFQUNFLGFBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7QUNORiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pY29uIHtcbiAgcGFkZGluZzogMCAxNHB4O1xufVxuXG4uc3BhY2VyIHtcbiAgZmxleDogMSAxIGF1dG87XG59XG5cbm1hdC10b29sYmFyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IDU2cHg7XG4gIHotaW5kZXg6IDEwMDA7XG59XG5cbm1hdC1zaWRlbmF2LWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbiAgXG4gIC8vICAgbWFyZ2luLXRvcDogNTZweDtcbiAgLy8gICBtaW4taGVpZ2h0OiBjYWxjKDEwMCUgLSA1NnB4KTtcbiAgbWF0LXNpZGVuYXYtY29udGVudCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIC8vIGRpc3BsYXk6IGZsZXg7XG4gICAgLy8gZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgICoge1xuICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIH1cbiAgfVxufVxuXG4jdXNlcm5hbWUge1xuICBtYXJnaW46IDAgMTBweDtcbn1cblxuOmhvc3Qge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDU2cHggYXV0bztcbiAgLy8gICBkaXNwbGF5OiBmbGV4O1xuICAvLyAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4iLCIuaWNvbiB7XG4gIHBhZGRpbmc6IDAgMTRweDtcbn1cblxuLnNwYWNlciB7XG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuXG5tYXQtdG9vbGJhciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiA1NnB4O1xuICB6LWluZGV4OiAxMDAwO1xufVxuXG5tYXQtc2lkZW5hdi1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5tYXQtc2lkZW5hdi1jb250YWluZXIgbWF0LXNpZGVuYXYtY29udGVudCB7XG4gIGhlaWdodDogMTAwJTtcbn1cbm1hdC1zaWRlbmF2LWNvbnRhaW5lciBtYXQtc2lkZW5hdi1jb250ZW50ICoge1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbiN1c2VybmFtZSB7XG4gIG1hcmdpbjogMCAxMHB4O1xufVxuXG46aG9zdCB7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogNTZweCBhdXRvO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }, { type: _authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./calendar/calendar.component */ "./src/app/calendar/calendar.component.ts");
/* harmony import */ var _input_data_input_data_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./input-data/input-data.component */ "./src/app/input-data/input-data.component.ts");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _authenticator_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./authenticator.service */ "./src/app/authenticator.service.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _entry_entry_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./entry/entry.component */ "./src/app/entry/entry.component.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _top_top_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./top/top.component */ "./src/app/top/top.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/settings/settings.component.ts");
/* harmony import */ var _annual_report_annual_report_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./annual-report/annual-report.component */ "./src/app/annual-report/annual-report.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/badge.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
/* harmony import */ var _category_settings_category_settings_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./category-settings/category-settings.component */ "./src/app/category-settings/category-settings.component.ts");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");






































class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _authenticator_service__WEBPACK_IMPORTED_MODULE_11__["AuthenticatorService"],
        {
            provide: _angular_common__WEBPACK_IMPORTED_MODULE_26__["LocationStrategy"],
            useClass: _angular_common__WEBPACK_IMPORTED_MODULE_26__["HashLocationStrategy"],
        }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatNativeDateModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_13__["MatSliderModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_15__["MatAutocompleteModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatTableModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_19__["MatChipsModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__["MatTooltipModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_21__["MatSnackBarModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__["MatIconModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_27__["MatToolbarModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_28__["MatSidenavModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_29__["MatListModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_33__["MatBadgeModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_34__["DragDropModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_36__["MatRadioModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_5__["CalendarComponent"],
        _input_data_input_data_component__WEBPACK_IMPORTED_MODULE_6__["InputDataComponent"],
        _entry_entry_component__WEBPACK_IMPORTED_MODULE_17__["EntryComponent"],
        _top_top_component__WEBPACK_IMPORTED_MODULE_23__["TopComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_24__["LoginComponent"],
        _register_register_component__WEBPACK_IMPORTED_MODULE_25__["RegisterComponent"],
        _settings_settings_component__WEBPACK_IMPORTED_MODULE_30__["SettingsComponent"],
        _annual_report_annual_report_component__WEBPACK_IMPORTED_MODULE_31__["AnnualReportComponent"],
        _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_32__["NotFoundComponent"],
        _category_settings_category_settings_component__WEBPACK_IMPORTED_MODULE_35__["CategorySettingsComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatNativeDateModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_13__["MatSliderModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_15__["MatAutocompleteModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatTableModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_19__["MatChipsModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__["MatTooltipModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_21__["MatSnackBarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__["MatIconModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_27__["MatToolbarModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_28__["MatSidenavModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_29__["MatListModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_33__["MatBadgeModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_34__["DragDropModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_36__["MatRadioModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_5__["CalendarComponent"],
                    _input_data_input_data_component__WEBPACK_IMPORTED_MODULE_6__["InputDataComponent"],
                    _entry_entry_component__WEBPACK_IMPORTED_MODULE_17__["EntryComponent"],
                    _top_top_component__WEBPACK_IMPORTED_MODULE_23__["TopComponent"],
                    _login_login_component__WEBPACK_IMPORTED_MODULE_24__["LoginComponent"],
                    _register_register_component__WEBPACK_IMPORTED_MODULE_25__["RegisterComponent"],
                    _settings_settings_component__WEBPACK_IMPORTED_MODULE_30__["SettingsComponent"],
                    _annual_report_annual_report_component__WEBPACK_IMPORTED_MODULE_31__["AnnualReportComponent"],
                    _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_32__["NotFoundComponent"],
                    _category_settings_category_settings_component__WEBPACK_IMPORTED_MODULE_35__["CategorySettingsComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatNativeDateModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_13__["MatSliderModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_15__["MatAutocompleteModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatTableModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_19__["MatChipsModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__["MatTooltipModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_21__["MatSnackBarModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__["MatIconModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_27__["MatToolbarModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_28__["MatSidenavModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_29__["MatListModule"],
                    _angular_material_badge__WEBPACK_IMPORTED_MODULE_33__["MatBadgeModule"],
                    _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_34__["DragDropModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_36__["MatRadioModule"],
                ],
                providers: [
                    _authenticator_service__WEBPACK_IMPORTED_MODULE_11__["AuthenticatorService"],
                    {
                        provide: _angular_common__WEBPACK_IMPORTED_MODULE_26__["LocationStrategy"],
                        useClass: _angular_common__WEBPACK_IMPORTED_MODULE_26__["HashLocationStrategy"],
                    }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/authenticator.service.ts":
/*!******************************************!*\
  !*** ./src/app/authenticator.service.ts ***!
  \******************************************/
/*! exports provided: AuthenticatorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticatorService", function() { return AuthenticatorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





class AuthenticatorService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.userName = localStorage.getItem('userName') || '';
        this.password = '';
        this.sessionId = localStorage.getItem('sessionId') || '';
        this.expiresOn = Number(localStorage.getItem('expiresOn') || 0);
        this.expiresOn = 0;
    }
    authed() {
        return !!this.sessionId;
    }
    updateSessionId() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return new Promise((res, rej) => {
                this.http.get('/api/v1/reflesh', {
                    params: {
                        userName: this.userName,
                        sessionId: this.sessionId,
                    },
                    observe: 'response'
                }).subscribe((response) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    console.log('aaa', response);
                    if (response.status == 200) {
                        this.sessionId = response.body['sessionId'];
                        localStorage.setItem('sessionId', this.sessionId);
                        this.expiresOn = Number(response.body['expiresOn']);
                        localStorage.setItem('expiresOn', String(this.expiresOn));
                        res();
                    }
                    else {
                        yield this.logout().catch(() => { });
                        this.router.navigate(['/login']);
                        rej();
                    }
                }), (error) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    yield this.logout().catch(() => { });
                    this.router.navigate(['/login']);
                    rej();
                }));
            });
        });
    }
    auth(_userName, _password) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const userName = _userName || this.userName;
            const password = _password || this.password;
            if (!(userName)) {
                this.router.navigate(['/login']);
                throw Error();
            }
            if (this.sessionId && this.expiresOn < new Date().getTime() + 1 * 60 * 1000) {
                yield this.updateSessionId().catch(() => {
                    throw Error();
                });
            }
            if (!this.authed()) {
                return new Promise((res, rej) => {
                    this.http.get('/api/v1/auth', {
                        params: {
                            userName: userName,
                            password: password
                        },
                        observe: 'response'
                    }).subscribe(response => {
                        if (response.status == 200) {
                            console.log('authed');
                            this.sessionId = response.body['sessionId'];
                            this.expiresOn = Number(response.body['expiresOn']);
                            this.userName = userName;
                            localStorage.setItem('sessionId', this.sessionId);
                            localStorage.setItem('expiresOn', String(this.expiresOn));
                            localStorage.setItem('userName', userName);
                            res();
                        }
                        else {
                            this.router.navigate(['/login']);
                            rej();
                        }
                    }, error => {
                        rej();
                    });
                });
            }
        });
    }
    logout() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            localStorage.removeItem('userName');
            localStorage.removeItem('sessionId');
            localStorage.removeItem('expiresOn');
            return new Promise((res, rej) => {
                this.http.get('/api/v1/logout', {
                    params: {
                        userName: this.userName,
                        sessionId: this.sessionId,
                    },
                    observe: 'response'
                }).subscribe(response => {
                    if (response.status == 200) {
                        this.sessionId = null;
                        this.userName = '';
                        this.router.navigate(['/login']);
                        res();
                    }
                    else {
                        rej();
                    }
                }, error => {
                    rej();
                });
            });
        });
    }
    httpRequest(method, url, body, params = {}) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            params['userName'] = this.userName;
            params['sessionId'] = this.sessionId;
            const param_list = [];
            for (const key in params) {
                if (params.hasOwnProperty(key)) {
                    param_list.push(`${key}=${params[key]}`);
                }
            }
            if (param_list.length) {
                url += `?${param_list.join('&')}`;
            }
            const options = {
                method: method,
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                },
                redirect: "follow",
                referrer: "no-referrer",
            };
            if (body)
                options['body'] = JSON.stringify(body);
            return fetch(url, options).then((response) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const text = yield response.text();
                return text && JSON.parse(text);
            }));
        });
    }
}
AuthenticatorService.ɵfac = function AuthenticatorService_Factory(t) { return new (t || AuthenticatorService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AuthenticatorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthenticatorService, factory: AuthenticatorService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthenticatorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/calendar/calendar.component.ts":
/*!************************************************!*\
  !*** ./src/app/calendar/calendar.component.ts ***!
  \************************************************/
/*! exports provided: CalendarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarComponent", function() { return CalendarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _input_data_input_data_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../input-data/input-data.component */ "./src/app/input-data/input-data.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _authenticator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../authenticator.service */ "./src/app/authenticator.service.ts");
/* harmony import */ var _entrydata_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../entrydata.service */ "./src/app/entrydata.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
/* harmony import */ var _entry_entry_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../entry/entry.component */ "./src/app/entry/entry.component.ts");














function CalendarComponent_th_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](category_r7);
} }
function CalendarComponent_tr_13_td_3_app_entry_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-entry", 11);
} if (rf & 2) {
    const entry_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("entry", entry_r12);
} }
function CalendarComponent_tr_13_td_3_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CalendarComponent_tr_13_td_3_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const category_r10 = ctx.$implicit; const obj_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r13.openDialogWithData(obj_r8.date, category_r10.category); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-chip-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CalendarComponent_tr_13_td_3_app_entry_2_Template, 1, 1, "app-entry", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", category_r10.entries);
} }
function CalendarComponent_tr_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CalendarComponent_tr_13_td_3_Template, 3, 1, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const obj_r8 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", obj_r8.date.getDate(), "\u65E5 (", ctx_r5.getDayOfWeek(obj_r8.date), ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", obj_r8.categories);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r5.sumDate(obj_r8.date.getDate()), "\u5186");
} }
function CalendarComponent_td_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r16 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r6.sumCategory(category_r16), "\u5186");
} }
class CalendarComponent {
    constructor(http, authenticator, entrydata, dialog, _snackBar, route, router) {
        this.http = http;
        this.authenticator = authenticator;
        this.entrydata = entrydata;
        this.dialog = dialog;
        this._snackBar = _snackBar;
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
        const self = this;
        this.route.paramMap.subscribe((params) => {
            self.year = Number(params.get('year'));
            self.month = Number(params.get('month'));
        });
        if (!(this.year && this.month)) {
            const now = new Date();
            this.year = now.getFullYear();
            this.month = now.getMonth() + 1;
        }
        this.authenticator.auth().then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.show();
        }));
    }
    incrementMonth() {
        if (this.month == 12) {
            this.month = 1;
            this.year++;
        }
        else {
            this.month++;
        }
    }
    decrementMonth() {
        if (this.month == 1) {
            this.month = 12;
            this.year--;
        }
        else {
            this.month--;
        }
    }
    showNextMonth() {
        this.incrementMonth();
        this.router.navigate(['/calendar', this.year, this.month]);
        this.show();
    }
    showPrevMonth() {
        this.decrementMonth();
        this.router.navigate(['/calendar', this.year, this.month]);
        this.show();
    }
    show() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.entrydata.update(this.year, this.month);
        });
    }
    sumDate(date) {
        let sum = 0;
        for (const category of this.entrydata.data[date - 1].categories) {
            for (const entry of category.entries) {
                sum += entry.price;
            }
        }
        return sum;
    }
    sumCategory(category) {
        return this.entrydata.data.map(e => e.categories.filter(e => e.category == category)
            .map(e => e.entries.map(e => e.price).reduce((a, b) => a + b, 0))
            .reduce((a, b) => a + b, 0)).reduce((a, b) => a + b, 0);
    }
    sumAll() {
        return this.entrydata.categories.map(c => this.sumCategory(c)).reduce((a, b) => a + b, 0);
    }
    getDayOfWeek(date) {
        return '日月火水木金土'[date.getDay()];
    }
    openDialogWithData(date, category) {
        const dialogRef = this.dialog.open(_input_data_input_data_component__WEBPACK_IMPORTED_MODULE_2__["InputDataComponent"], {
            width: '300px',
            data: {
                prevInputData: {
                    date: date.getTime(),
                    category: category
                },
                exit: true
            }
        });
        dialogRef.afterClosed().subscribe(result => {
        });
    }
    openSnackBar(message, action) {
        this._snackBar.open(message, action, {
            duration: 2000,
        });
    }
}
CalendarComponent.ɵfac = function CalendarComponent_Factory(t) { return new (t || CalendarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_authenticator_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticatorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_entrydata_service__WEBPACK_IMPORTED_MODULE_5__["EntrydataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"])); };
CalendarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CalendarComponent, selectors: [["app-calendar"]], inputs: { month: "month", year: "year" }, decls: 20, vars: 6, consts: [[1, "center"], [1, "buttons"], ["mat-button", "", 3, "click"], [1, "header"], ["class", "header", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], ["class", "price header", 4, "ngFor", "ngForOf"], [1, "price", "header"], ["class", "price", 3, "click", 4, "ngFor", "ngForOf"], [1, "price", 3, "click"], [3, "entry", 4, "ngFor", "ngForOf"], [3, "entry"]], template: function CalendarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CalendarComponent_Template_button_click_2_listener() { return ctx.showPrevMonth(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\u5148\u6708");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CalendarComponent_Template_button_click_4_listener() { return ctx.showNextMonth(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\u6765\u6708");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, CalendarComponent_th_10_Template, 2, 1, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "\u5408\u8A08");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, CalendarComponent_tr_13_Template, 6, 4, "tr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "\u5408\u8A08");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, CalendarComponent_td_17_Template, 2, 1, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx.year, "\u5E74 ", ctx.month, "\u6708");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.entrydata.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.entrydata.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.entrydata.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.sumAll(), "\u5186");
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__["MatChipList"], _entry_entry_component__WEBPACK_IMPORTED_MODULE_12__["EntryComponent"]], styles: [".center[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n\ntable[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  border-collapse: collapse;\n  border-spacing: 0px;\n}\n\ntable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  width: 25vw;\n  max-width: 200px;\n  min-width: 100px;\n  height: 50px;\n  border-top: #333 1px solid;\n  padding: 10px;\n  text-align: center;\n}\n\ntable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\ntable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 1.1em;\n}\n\ntable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\ntable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 1.1em;\n}\n\n.buttons[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  margin: 10px;\n}\n\n.buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin: 0 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lMi95MjAxOS9zMTkxMDI5Ny9yZXBvcy9rYWtlaWJvLWZyb250L3NyYy9hcHAvY2FsZW5kYXIvY2FsZW5kYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NhbGVuZGFyL2NhbGVuZGFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFSTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDQU47O0FERU07RUFDRSxpQkFBQTtBQ0FSOztBREdNO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtBQ0RSOztBRE1JO0VBQ0UsVUFBQTtBQ0pOOztBRE1NO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtBQ0pSOztBRFlBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsWUFBQTtBQ1RGOztBRFdFO0VBQ0UsYUFBQTtBQ1RKIiwiZmlsZSI6InNyYy9hcHAvY2FsZW5kYXIvY2FsZW5kYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudGVyIHtcbiAgbWFyZ2luOiAxMHB4O1xufVxuXG50YWJsZSB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBib3JkZXItc3BhY2luZzogMHB4O1xuXG4gIHRyIHtcbiAgICB0ZCB7XG4gICAgICB3aWR0aDogMjV2dztcbiAgICAgIG1heC13aWR0aDogMjAwcHg7XG4gICAgICBtaW4td2lkdGg6IDEwMHB4O1xuICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgYm9yZGVyLXRvcDogIzMzMyAxcHggc29saWQ7XG4gICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICAucHJpY2Uge1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgIH1cblxuICAgICAgLmhlYWRlciB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBmb250LXNpemU6IDEuMWVtO1xuICAgICAgfVxuXG4gICAgfVxuXG4gICAgdGgge1xuICAgICAgcGFkZGluZzogMDtcblxuICAgICAgLmhlYWRlciB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBmb250LXNpemU6IDEuMWVtO1xuICAgICAgfVxuICAgIH1cblxuICB9XG5cbn1cblxuLmJ1dHRvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IDEwcHg7XG5cbiAgYnV0dG9uIHtcbiAgICBtYXJnaW46IDAgNXB4O1xuICB9XG59XG4iLCIuY2VudGVyIHtcbiAgbWFyZ2luOiAxMHB4O1xufVxuXG50YWJsZSB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBib3JkZXItc3BhY2luZzogMHB4O1xufVxudGFibGUgdHIgdGQge1xuICB3aWR0aDogMjV2dztcbiAgbWF4LXdpZHRoOiAyMDBweDtcbiAgbWluLXdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXItdG9wOiAjMzMzIDFweCBzb2xpZDtcbiAgcGFkZGluZzogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxudGFibGUgdHIgdGQgLnByaWNlIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG50YWJsZSB0ciB0ZCAuaGVhZGVyIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMS4xZW07XG59XG50YWJsZSB0ciB0aCB7XG4gIHBhZGRpbmc6IDA7XG59XG50YWJsZSB0ciB0aCAuaGVhZGVyIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMS4xZW07XG59XG5cbi5idXR0b25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiAxMHB4O1xufVxuLmJ1dHRvbnMgYnV0dG9uIHtcbiAgbWFyZ2luOiAwIDVweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CalendarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-calendar',
                templateUrl: './calendar.component.html',
                styleUrls: ['./calendar.component.scss']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _authenticator_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticatorService"] }, { type: _entrydata_service__WEBPACK_IMPORTED_MODULE_5__["EntrydataService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }]; }, { month: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], year: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/category-settings/category-settings.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/category-settings/category-settings.component.ts ***!
  \******************************************************************/
/*! exports provided: CategorySettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategorySettingsComponent", function() { return CategorySettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");






class CategorySettingsComponent {
    constructor() {
        this.category = '';
    }
    ngOnInit() {
    }
    changeCategoryName() {
    }
}
CategorySettingsComponent.ɵfac = function CategorySettingsComponent_Factory(t) { return new (t || CategorySettingsComponent)(); };
CategorySettingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CategorySettingsComponent, selectors: [["app-category-settings"]], decls: 10, vars: 1, consts: [["matInput", "", 3, "ngModel", "ngModelChange"], ["color", "primary", "mat-raised-button", ""]], template: function CategorySettingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u5206\u985E\u540D\u5909\u66F4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u65B0\u3057\u3044\u540D\u524D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CategorySettingsComponent_Template_input_ngModelChange_6_listener($event) { return ctx.category = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u6C7A\u5B9A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.category);
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhdGVnb3J5LXNldHRpbmdzL2NhdGVnb3J5LXNldHRpbmdzLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategorySettingsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-category-settings',
                templateUrl: './category-settings.component.html',
                styleUrls: ['./category-settings.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/entry/entry.component.ts":
/*!******************************************!*\
  !*** ./src/app/entry/entry.component.ts ***!
  \******************************************/
/*! exports provided: EntryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntryComponent", function() { return EntryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _entrydata_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../entrydata.service */ "./src/app/entrydata.service.ts");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");









function EntryComponent_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EntryComponent_mat_icon_2_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r54); const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r53.remove(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class EntryComponent {
    constructor(http, entrydata) {
        this.http = http;
        this.entrydata = entrydata;
        this.createdByUserName = '';
        this.hover = false;
    }
    ngOnInit() {
    }
    onMouseEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.getCreatedByUserName();
        });
    }
    getCreatedByUserName() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.createdByUserName = this.createdByUserName || (yield this.http.get('/api/v1/username', {
                params: {
                    userId: String(this.entry.createdBy)
                }
            }).toPromise())['userName'];
        });
    }
    remove() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.entrydata.removeEntry(this.entry);
            const date = new Date(this.entry.date);
            this.entrydata.update(date.getFullYear(), date.getMonth() + 1);
        });
    }
}
EntryComponent.ɵfac = function EntryComponent_Factory(t) { return new (t || EntryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_entrydata_service__WEBPACK_IMPORTED_MODULE_3__["EntrydataService"])); };
EntryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: EntryComponent, selectors: [["app-entry"]], inputs: { entry: "entry" }, decls: 3, vars: 4, consts: [[3, "matTooltip", "mouseover", "mouseleave", "mouseenter"], ["matChipRemove", "", 3, "click", 4, "ngIf"], ["matChipRemove", "", 3, "click"]], template: function EntryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-chip", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseover", function EntryComponent_Template_mat_chip_mouseover_0_listener() { return ctx.hover = true; })("mouseleave", function EntryComponent_Template_mat_chip_mouseleave_0_listener() { return ctx.hover = false; })("mouseenter", function EntryComponent_Template_mat_chip_mouseenter_0_listener() { return ctx.getCreatedByUserName(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, EntryComponent_mat_icon_2_Template, 2, 0, "mat-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matTooltip", ctx.createdByUserName || ctx.entry.createdBy);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx.entry.title, " ", ctx.entry.price, "\u5186 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.hover);
    } }, directives: [_angular_material_chips__WEBPACK_IMPORTED_MODULE_4__["MatChip"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__["MatTooltip"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_4__["MatChipRemove"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VudHJ5L2VudHJ5LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EntryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-entry',
                templateUrl: './entry.component.html',
                styleUrls: ['./entry.component.scss']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _entrydata_service__WEBPACK_IMPORTED_MODULE_3__["EntrydataService"] }]; }, { entry: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/entrydata.service.ts":
/*!**************************************!*\
  !*** ./src/app/entrydata.service.ts ***!
  \**************************************/
/*! exports provided: EntrydataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntrydataService", function() { return EntrydataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _authenticator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authenticator.service */ "./src/app/authenticator.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





class EntrydataService {
    constructor(authenticator, http) {
        this.authenticator = authenticator;
        this.http = http;
        this.data = [];
        this.categories = [];
        this.year = new Date().getFullYear();
        this.month = new Date().getMonth() + 1;
        this.authenticator.auth().then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.categories = yield this.getCategories();
        }));
    }
    update(year, month) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.updateCalendar(year, month);
            this.updateMonthInfo();
        });
    }
    updateCalendar(year, month) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const entries = yield this.getEntries(year, month);
            const categories = this.categories = yield this.getCategories();
            const first_day = new Date(year, month - 1, 1);
            this.data = [];
            do {
                this.data.push({
                    date: new Date(first_day),
                    categories: categories.map(c => {
                        return {
                            category: c,
                            entries: entries.filter(e => e.category == c && new Date(e.date).getDate() == first_day.getDate())
                        };
                    })
                });
                first_day.setDate(first_day.getDate() + 1);
            } while (first_day.getDate() != 1);
        });
    }
    getCategories() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return (yield this.http.get('/api/v1/category', {
                params: {
                    userName: this.authenticator.userName,
                    sessionId: this.authenticator.sessionId,
                }
            }).toPromise())['categories'];
        });
    }
    getEntries(year, month) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return (yield this.http.get('/api/v1/entry', {
                params: {
                    userName: this.authenticator.userName,
                    sessionId: this.authenticator.sessionId,
                    year: String(year),
                    month: String(month),
                },
            }).toPromise());
        });
    }
    removeEntry(entry) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return (yield this.http.delete('/api/v1/entry', {
                params: {
                    userName: this.authenticator.userName,
                    sessionId: this.authenticator.sessionId,
                    id: String(entry.id)
                },
            }).toPromise());
        });
    }
    getUserName(userId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return (yield this.http.get('/api/v1/username', {
                params: {
                    userName: this.authenticator.userName,
                    sessionId: this.authenticator.sessionId,
                    userId: userId
                },
            }).toPromise());
        });
    }
    getMonthInfo(year, month) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this.authenticator.httpRequest('get', '/api/v1/month', null, {
                year: String(year),
                month: String(month)
            });
            return {
                average: Math.floor(res['avg']) || 0,
                sum: res['sum'] || 0,
                count: res['count'] || 0,
                month, year,
                categories: res['categories']
            };
        });
    }
    updateMonthInfo() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.authenticator.auth().then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.currentMonth = yield this.getMonthInfo(this.year, this.month);
                var prev_m, prev_y;
                if (this.month == 1) {
                    prev_y = this.year - 1;
                    prev_m = 12;
                }
                else {
                    prev_y = this.year;
                    prev_m = this.month - 1;
                }
                this.prevMonth = yield this.getMonthInfo(prev_y, prev_m);
            })).catch(() => { });
        });
    }
    postEntry(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.authenticator.httpRequest('post', '/api/v1/entry', data);
        });
    }
}
EntrydataService.ɵfac = function EntrydataService_Factory(t) { return new (t || EntrydataService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_authenticator_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticatorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
EntrydataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: EntrydataService, factory: EntrydataService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EntrydataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _authenticator_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticatorService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/input-data/input-data.component.ts":
/*!****************************************************!*\
  !*** ./src/app/input-data/input-data.component.ts ***!
  \****************************************************/
/*! exports provided: InputDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputDataComponent", function() { return InputDataComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _authenticator_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../authenticator.service */ "./src/app/authenticator.service.ts");
/* harmony import */ var _entrydata_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../entrydata.service */ "./src/app/entrydata.service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");



















function InputDataComponent_mat_option_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", option_r20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", option_r20, " ");
} }
class JapaneseDateAdapter extends _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["NativeDateAdapter"] {
    getDateNames() {
        return [...Array(31).keys()].map(e => String(e + 1));
    }
}
JapaneseDateAdapter.ɵfac = function JapaneseDateAdapter_Factory(t) { return ɵJapaneseDateAdapter_BaseFactory(t || JapaneseDateAdapter); };
JapaneseDateAdapter.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: JapaneseDateAdapter, factory: JapaneseDateAdapter.ɵfac });
const ɵJapaneseDateAdapter_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](JapaneseDateAdapter);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](JapaneseDateAdapter, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], null, null); })();
class InputDataComponent {
    constructor(http, authenticator, dateAdapter, dialogRef, data, entrydata, _snackBar) {
        this.http = http;
        this.authenticator = authenticator;
        this.dateAdapter = dateAdapter;
        this.dialogRef = dialogRef;
        this.data = data;
        this.entrydata = entrydata;
        this._snackBar = _snackBar;
        this.title = '';
        this.category = '';
        this.categories = [];
        this.exit = false;
        dateAdapter.setLocale('ja-JP');
        if (data) {
            if (data['prevInputData']) {
                this.date = new Date(data['prevInputData']['date']);
                this.category = data['prevInputData']['category'];
            }
            else {
                this.date = new Date();
            }
            this.exit = data['exit'];
        }
        else {
            this.date = new Date();
        }
    }
    ngOnInit() {
        this.entrydata.getCategories().then(data => {
            this.categories = data;
        });
    }
    submit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.entrydata.postEntry({
                date: this.date.getTime(),
                price: this.price,
                title: this.title,
                category: this.category,
            });
            this.price = undefined;
            this.title = '';
            yield this.entrydata.update(this.date.getFullYear(), this.date.getMonth() + 1);
            this.openSnackBar('登録しました', 'OK');
            if (this.exit)
                this.dialogRef.close();
        });
    }
    onNoClick() {
        this.dialogRef.close();
    }
    openSnackBar(message, action) {
        this._snackBar.open(message, action, {
            duration: 2000,
        });
    }
}
InputDataComponent.ɵfac = function InputDataComponent_Factory(t) { return new (t || InputDataComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_authenticator_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticatorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["DateAdapter"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_entrydata_service__WEBPACK_IMPORTED_MODULE_6__["EntrydataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"])); };
InputDataComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: InputDataComponent, selectors: [["app-input-data"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
                provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["DateAdapter"],
                useClass: JapaneseDateAdapter,
            }])], decls: 31, vars: 9, consts: [["matInput", "", 3, "matDatepicker", "ngModel", "ngModelChange"], ["matSuffix", "", 3, "for"], ["picker", ""], [1, ""], ["matInput", "", "type", "number", 3, "ngModel", "ngModelChange"], ["matInput", "", 3, "ngModel", "ngModelChange"], [1, "example-full-width"], ["type", "text", "placeholder", "\u5206\u985E", "matInput", "", 3, "ngModel", "matAutocomplete", "ngModelChange"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-button", "", "color", "primary", 3, "disabled", "click"], ["mat-button", "", 3, "click"], [3, "value"]], template: function InputDataComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u30C7\u30FC\u30BF\u8FFD\u52A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\u65E5\u4ED8");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function InputDataComponent_Template_input_ngModelChange_6_listener($event) { return ctx.date = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "mat-datepicker-toggle", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "mat-datepicker", null, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "\u91D1\u984D");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function InputDataComponent_Template_input_ngModelChange_14_listener($event) { return ctx.price = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "\u5546\u54C1\u540D");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function InputDataComponent_Template_input_ngModelChange_19_listener($event) { return ctx.title = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function InputDataComponent_Template_input_ngModelChange_22_listener($event) { return ctx.category = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "mat-autocomplete", null, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, InputDataComponent_mat_option_25_Template, 2, 2, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function InputDataComponent_Template_button_click_27_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "\u767B\u9332");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function InputDataComponent_Template_button_click_29_listener() { return ctx.onNoClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "\u7D42\u4E86");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](9);
        const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matDatepicker", _r17)("ngModel", ctx.date);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", _r17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.price);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.category)("matAutocomplete", _r18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !(ctx.date && ctx.price && ctx.title && ctx.category));
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepicker"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NumberValueAccessor"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__["MatAutocompleteTrigger"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatOption"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2lucHV0LWRhdGEvaW5wdXQtZGF0YS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](InputDataComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-input-data',
                templateUrl: './input-data.component.html',
                styleUrls: ['./input-data.component.scss'],
                providers: [{
                        provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["DateAdapter"],
                        useClass: JapaneseDateAdapter,
                    }]
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }, { type: _authenticator_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticatorService"] }, { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["DateAdapter"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]]
            }] }, { type: _entrydata_service__WEBPACK_IMPORTED_MODULE_6__["EntrydataService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"] }]; }, null); })();


/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _authenticator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../authenticator.service */ "./src/app/authenticator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");












function LoginComponent_mat_chip_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-chip", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u30ED\u30B0\u30A4\u30F3\u306B\u5931\u6557\u3057\u307E\u3057\u305F");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class LoginComponent {
    constructor(http, authenticator, router) {
        this.http = http;
        this.authenticator = authenticator;
        this.router = router;
        this.userName = '';
        this.password = '';
        this.failedToLogin = false;
    }
    ngOnInit() {
    }
    login() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.authenticator.auth(this.userName, this.password).then(() => {
                this.router.navigate(['/']);
            }).catch(() => {
                this.failedToLogin = true;
            });
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 23, vars: 4, consts: [[1, "center"], ["matInput", "", 3, "ngModel", "ngModelChange"], ["matInput", "", "type", "password", 3, "ngModel", "ngModelChange"], [2, "margin", "10px 0"], ["color", "accent", "selected", "", 4, "ngIf"], ["mat-dialog-actions", ""], ["mat-button", "", "color", "primary", 3, "disabled", "click"], [1, "or"], ["mat-button", "", "routerLink", "/register"], ["color", "accent", "selected", ""]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u30ED\u30B0\u30A4\u30F3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\u30E6\u30FC\u30B6\u30FC\u540D");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_7_listener($event) { return ctx.userName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "\u30D1\u30B9\u30EF\u30FC\u30C9");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_12_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-chip-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, LoginComponent_mat_chip_15_Template, 2, 0, "mat-chip", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_17_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "\u30ED\u30B0\u30A4\u30F3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "\u307E\u305F\u306F");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "\u30E6\u30FC\u30B6\u30FC\u767B\u9332");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.userName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.failedToLogin);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !(ctx.userName && ctx.password));
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_8__["MatChipList"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_8__["MatChip"]], styles: ["[_nghost-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n  width: 100vw;\n  height: 100%;\n}\n\n.center[_ngcontent-%COMP%] {\n  align-self: center;\n}\n\n[mat-dialog-actions][_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n}\n\n.or[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lMi95MjAxOS9zMTkxMDI5Ny9yZXBvcy9rYWtlaWJvLWZyb250L3NyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtBQ0NGOztBREVBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EscUJBQUE7VUFBQSx5QkFBQTtBQ0NGOztBREVBO0VBQ0ksV0FBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmNlbnRlciB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuW21hdC1kaWFsb2ctYWN0aW9uc10ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuXG4ub3J7XG4gICAgbWFyZ2luOiA1cHg7XG59XG5cbm1hdC1mb3JtLWZpZWxke1xuICAgIHdpZHRoOiAxMDAlO1xufSIsIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY2VudGVyIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG5bbWF0LWRpYWxvZy1hY3Rpb25zXSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbi5vciB7XG4gIG1hcmdpbjogNXB4O1xufVxuXG5tYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class NotFoundComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) { return new (t || NotFoundComponent)(); };
NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotFoundComponent, selectors: [["app-not-found"]], decls: 3, vars: 0, consts: [[1, "center"], ["id", "not-found-message"]], template: function NotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u30DA\u30FC\u30B8\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["#not-found-message[_ngcontent-%COMP%] {\n  font-size: xx-large;\n}\n\n[_nghost-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n  width: 100vw;\n  height: 100%;\n}\n\n.center[_ngcontent-%COMP%] {\n  align-self: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lMi95MjAxOS9zMTkxMDI5Ny9yZXBvcy9rYWtlaWJvLWZyb250L3NyYy9hcHAvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0FDQ0o7O0FEQ0E7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNFSjs7QURDRTtFQUNFLGtCQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9ub3QtZm91bmQvbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI25vdC1mb3VuZC1tZXNzYWdle1xuICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XG59XG46aG9zdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbiAgXG4gIC5jZW50ZXIge1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgfSIsIiNub3QtZm91bmQtbWVzc2FnZSB7XG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XG59XG5cbjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY2VudGVyIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-not-found',
                templateUrl: './not-found.component.html',
                styleUrls: ['./not-found.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _authenticator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../authenticator.service */ "./src/app/authenticator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");












function RegisterComponent_mat_chip_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-chip", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u30E6\u30FC\u30B6\u30FC\u767B\u9332\u306B\u5931\u6557\u3057\u307E\u3057\u305F");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RegisterComponent_mat_chip_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-chip", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u65E2\u306B\u4F7F\u308F\u308C\u3066\u3044\u308B\u30E6\u30FC\u30B6\u30FC\u540D\u3067\u3059");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RegisterComponent_mat_chip_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-chip", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u30D1\u30B9\u30EF\u30FC\u30C9\u306F8\u6587\u5B57\u4EE5\u4E0A\u3067\u3042\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class RegisterComponent {
    constructor(http, authenticator, router) {
        this.http = http;
        this.authenticator = authenticator;
        this.router = router;
        this.userName = '';
        this.userNameAvailability = true;
        this.password = '';
        this.passwordAvailability = true;
        this.failedToRegister = false;
    }
    ngOnInit() {
    }
    checkUserName() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.http.get('/api/v1/available/username', {
                params: {
                    userName: this.userName,
                }
            }).toPromise().then(res => {
                this.userNameAvailability = res && res['available'];
            });
        });
    }
    checkPassword() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.http.get('/api/v1/available/password', {
                params: {
                    password: this.password,
                }
            }).toPromise().then(res => {
                this.passwordAvailability = res && res['available'];
            });
        });
    }
    register() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return new Promise((res, rej) => {
                this.http.get('/api/v1/register', {
                    params: {
                        userName: this.userName,
                        password: this.password,
                    },
                    observe: 'response'
                }).subscribe((response) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    if (response.status == 200) {
                        yield this.login();
                        res();
                    }
                    else {
                        console.log('failed to register');
                        rej();
                    }
                }), (error) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    console.log('failed to register');
                    rej();
                }));
            });
        });
    }
    login() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.authenticator.auth(this.userName, this.password).then(() => {
                this.router.navigate(['/']);
            }).catch(() => {
                this.failedToRegister = true;
            });
        });
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 29, vars: 6, consts: [[1, "center"], ["color", "primary", 4, "ngIf"], ["matInput", "", 3, "ngModel", "ngModelChange", "input"], ["matInput", "", "type", "password", 3, "ngModel", "ngModelChange", "input"], ["mat-dialog-actions", ""], ["mat-button", "", "color", "primary", 3, "disabled", "click"], [1, "or"], ["mat-button", "", "routerLink", "/login"], ["color", "primary"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u30E6\u30FC\u30B6\u30FC\u767B\u9332");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-chip-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, RegisterComponent_mat_chip_5_Template, 2, 0, "mat-chip", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "\u30E6\u30FC\u30B6\u30FC\u540D");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_10_listener($event) { return ctx.userName = $event; })("input", function RegisterComponent_Template_input_input_10_listener() { return ctx.checkUserName(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-chip-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, RegisterComponent_mat_chip_13_Template, 2, 0, "mat-chip", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "\u30D1\u30B9\u30EF\u30FC\u30C9");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_18_listener($event) { return ctx.password = $event; })("input", function RegisterComponent_Template_input_input_18_listener() { return ctx.checkPassword(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "mat-chip-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, RegisterComponent_mat_chip_21_Template, 2, 0, "mat-chip", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_23_listener() { return ctx.register(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "\u767B\u9332");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "\u307E\u305F\u306F");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "\u30ED\u30B0\u30A4\u30F3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.failedToRegister);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.userName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.userNameAvailability);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.passwordAvailability);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !(ctx.userName && ctx.password && ctx.userNameAvailability && ctx.passwordAvailability));
    } }, directives: [_angular_material_chips__WEBPACK_IMPORTED_MODULE_5__["MatChipList"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_5__["MatChip"]], styles: ["[_nghost-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n  width: 100vw;\n  height: 100%;\n}\n\n.center[_ngcontent-%COMP%] {\n  align-self: center;\n}\n\n[mat-dialog-actions][_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n}\n\n.or[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lMi95MjAxOS9zMTkxMDI5Ny9yZXBvcy9rYWtlaWJvLWZyb250L3NyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtBQ0NGOztBREVBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EscUJBQUE7VUFBQSx5QkFBQTtBQ0NKOztBRENBO0VBQ0ksV0FBQTtBQ0VKOztBREFBO0VBQ0ksV0FBQTtBQ0dKIiwiZmlsZSI6InNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmNlbnRlciB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuW21hdC1kaWFsb2ctYWN0aW9uc10ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbi5vcntcbiAgICBtYXJnaW46IDVweDtcbn1cbm1hdC1mb3JtLWZpZWxke1xuICAgIHdpZHRoOiAxMDAlO1xufSIsIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY2VudGVyIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG5bbWF0LWRpYWxvZy1hY3Rpb25zXSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbi5vciB7XG4gIG1hcmdpbjogNXB4O1xufVxuXG5tYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-register',
                templateUrl: './register.component.html',
                styleUrls: ['./register.component.scss']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/settings/settings.component.ts":
/*!************************************************!*\
  !*** ./src/app/settings/settings.component.ts ***!
  \************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
/* harmony import */ var _category_settings_category_settings_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../category-settings/category-settings.component */ "./src/app/category-settings/category-settings.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _authenticator_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../authenticator.service */ "./src/app/authenticator.service.ts");
/* harmony import */ var _entrydata_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../entrydata.service */ "./src/app/entrydata.service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");














const _c0 = ["fileInput"];
function SettingsComponent_mat_list_item_15_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-list-item", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SettingsComponent_mat_list_item_15_Template_mat_list_item_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r25); const category_r23 = ctx.$implicit; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r24.openCategorySettings(category_r23); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", category_r23, " ");
} }
class SettingsComponent {
    constructor(http, authenticator, entrydata, _snackBar, dialog) {
        this.http = http;
        this.authenticator = authenticator;
        this.entrydata = entrydata;
        this._snackBar = _snackBar;
        this.dialog = dialog;
        this.categories = [];
        this.file = null;
    }
    ngOnInit() {
        this.entrydata.getCategories().then((data) => {
            this.categories = data;
        });
    }
    download(filename, data) {
        const link = document.createElement('a');
        const blob = new Blob([data], { type: 'text/plane' });
        const path = URL.createObjectURL(blob);
        if (link.download !== undefined) {
            link.download = filename;
            link.href = path;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
        else {
            window.open(location.origin + path, '_blank');
        }
    }
    readFile(file) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return new Promise((res, rej) => {
                const fr = new FileReader();
                fr.readAsText(file, 'utf-8');
                fr.onload = e => {
                    res(fr.result);
                };
                fr.onerror = e => {
                    rej();
                };
            });
        });
    }
    exportData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return new Promise((res, rej) => {
                this.http.get('/api/v1/entry/all', {
                    params: {
                        userName: this.authenticator.userName,
                        password: this.authenticator.password,
                    }
                }).subscribe((response) => {
                    this.download('export.json', JSON.stringify(response.map(e => {
                        return {
                            title: e.title,
                            price: e.price,
                            date: e.date,
                            category: e.category,
                            description: e.description,
                        };
                    })));
                    res();
                }, error => {
                    console.log('failed to download data');
                    rej();
                });
            });
        });
    }
    importData(file) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var entries;
            if (file.name.endsWith('.json')) {
                entries = JSON.parse(yield this.readFile(file));
            }
            else if (file.name.endsWith('.csv')) {
                const txt = yield this.readFile(file);
                entries = txt.split('\n').slice(1).map(e => {
                    const line = e.split(',');
                    return {
                        title: line[0],
                        price: line[1],
                        date: line[2],
                        category: line[3],
                        description: line[4],
                    };
                });
            }
            else {
                throw new Error();
            }
            for (const entry of entries) {
                const res = yield this.entrydata.postEntry(entry)
                    .then(() => true).catch(() => false);
                this.openSnackBar(res ?
                    'データをインポートしました' :
                    'インポートに失敗しました', 'OK');
            }
        });
    }
    onClickFileInputButton() {
        this.fileInput.nativeElement.click();
    }
    onChangeFileInput() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const files = this.fileInput.nativeElement.files;
            this.file = files[0];
            this.importData(this.file);
        });
    }
    openSnackBar(message, action) {
        this._snackBar.open(message, action, {
            duration: 2000,
        });
    }
    drop(event) {
        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["moveItemInArray"])(this.entrydata.categories, event.previousIndex, event.currentIndex);
    }
    openCategorySettings(category) {
        const dialogRef = this.dialog.open(_category_settings_category_settings_component__WEBPACK_IMPORTED_MODULE_3__["CategorySettingsComponent"], {
            width: '300px',
        });
        dialogRef.afterClosed().subscribe(result => { });
    }
}
SettingsComponent.ɵfac = function SettingsComponent_Factory(t) { return new (t || SettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_authenticator_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticatorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_entrydata_service__WEBPACK_IMPORTED_MODULE_6__["EntrydataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"])); };
SettingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SettingsComponent, selectors: [["app-settings"]], viewQuery: function SettingsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.fileInput = _t.first);
    } }, decls: 16, vars: 1, consts: [[1, "container"], [1, "button-row"], ["mat-raised-button", "", 3, "click"], ["type", "file", "accept", "application/json", 2, "display", "none", 3, "change"], ["fileInput", ""], ["cdkDropList", "", 1, "example-list", 3, "cdkDropListDropped"], ["class", "example-box", "cdkDrag", "", 3, "click", 4, "ngFor", "ngForOf"], ["cdkDrag", "", 1, "example-box", 3, "click"]], template: function SettingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u30C7\u30FC\u30BF");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SettingsComponent_Template_button_click_4_listener() { return ctx.exportData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\u30A8\u30AF\u30B9\u30DD\u30FC\u30C8");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "input", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function SettingsComponent_Template_input_change_7_listener() { return ctx.onChangeFileInput(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SettingsComponent_Template_button_click_9_listener() { return ctx.onClickFileInputButton(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " \u30A4\u30F3\u30DD\u30FC\u30C8 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "\u5206\u985E\u3092\u4E26\u3073\u66FF\u3048");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-list", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("cdkDropListDropped", function SettingsComponent_Template_mat_list_cdkDropListDropped_14_listener($event) { return ctx.drop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, SettingsComponent_mat_list_item_15_Template, 2, 1, "mat-list-item", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.entrydata.categories);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatList"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["CdkDropList"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListItem"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["CdkDrag"]], styles: [".button-row[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-right: 5px;\n}\n\n.container[_ngcontent-%COMP%] {\n  margin: 10px 20px;\n}\n\nmat-list-item[_ngcontent-%COMP%] {\n  cursor: move;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lMi95MjAxOS9zMTkxMDI5Ny9yZXBvcy9rYWtlaWJvLWZyb250L3NyYy9hcHAvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVFO0VBQ0UscUJBQUE7RUFDQSxpQkFBQTtBQ0RKOztBREtBO0VBQ0UsaUJBQUE7QUNGRjs7QURLQTtFQUNFLFlBQUE7QUNGRiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ1dHRvbi1yb3cge1xuXG4gICoge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgfVxufVxuXG4uY29udGFpbmVyIHtcbiAgbWFyZ2luOiAxMHB4IDIwcHg7XG59XG5cbm1hdC1saXN0LWl0ZW0ge1xuICBjdXJzb3I6IG1vdmU7XG59XG4iLCIuYnV0dG9uLXJvdyAqIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLmNvbnRhaW5lciB7XG4gIG1hcmdpbjogMTBweCAyMHB4O1xufVxuXG5tYXQtbGlzdC1pdGVtIHtcbiAgY3Vyc29yOiBtb3ZlO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SettingsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-settings',
                templateUrl: './settings.component.html',
                styleUrls: ['./settings.component.scss']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }, { type: _authenticator_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticatorService"] }, { type: _entrydata_service__WEBPACK_IMPORTED_MODULE_6__["EntrydataService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"] }]; }, { fileInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['fileInput']
        }] }); })();


/***/ }),

/***/ "./src/app/top/top.component.ts":
/*!**************************************!*\
  !*** ./src/app/top/top.component.ts ***!
  \**************************************/
/*! exports provided: TopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopComponent", function() { return TopComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _input_data_input_data_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../input-data/input-data.component */ "./src/app/input-data/input-data.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _authenticator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../authenticator.service */ "./src/app/authenticator.service.ts");
/* harmony import */ var _entrydata_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../entrydata.service */ "./src/app/entrydata.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");







class TopComponent {
    constructor(http, authenticator, entrydata, dialog) {
        this.http = http;
        this.authenticator = authenticator;
        this.entrydata = entrydata;
        this.dialog = dialog;
    }
    ngOnInit() {
        this.entrydata.updateMonthInfo();
    }
    openDialog() {
        const dialogRef = this.dialog.open(_input_data_input_data_component__WEBPACK_IMPORTED_MODULE_1__["InputDataComponent"], {
            width: '300px',
            data: { prevInputData: this.prevInputData }
        });
        dialogRef.afterClosed().subscribe(result => {
        });
    }
}
TopComponent.ɵfac = function TopComponent_Factory(t) { return new (t || TopComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_entrydata_service__WEBPACK_IMPORTED_MODULE_4__["EntrydataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"])); };
TopComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TopComponent, selectors: [["app-top"]], decls: 9, vars: 4, consts: [[1, "center"]], template: function TopComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u4ECA\u6708\u306E\u5408\u8A08/\u5E73\u5747");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u5148\u6708\u306E\u5408\u8A08/\u5E73\u5747");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.entrydata.currentMonth ? ctx.entrydata.currentMonth.sum + "\u5186" : "-", "\u30FB", ctx.entrydata.currentMonth ? ctx.entrydata.currentMonth.average + "\u5186" : "-", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.entrydata.prevMonth ? ctx.entrydata.prevMonth.sum + "\u5186" : "-", "\u30FB", ctx.entrydata.prevMonth ? ctx.entrydata.prevMonth.average + "\u5186" : "-", " ");
    } }, styles: ["[_nghost-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n  height: 100%;\n}\n\n.center[_ngcontent-%COMP%] {\n  align-self: center;\n}\n\nbutton#opendialog[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lMi95MjAxOS9zMTkxMDI5Ny9yZXBvcy9rYWtlaWJvLWZyb250L3NyYy9hcHAvdG9wL3RvcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdG9wL3RvcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvdG9wL3RvcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmNlbnRlciB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuYnV0dG9uI29wZW5kaWFsb2cge1xuICB3aWR0aDogMTAwJTtcbn1cbiIsIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmNlbnRlciB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuYnV0dG9uI29wZW5kaWFsb2cge1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TopComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-top',
                templateUrl: './top.component.html',
                styleUrls: ['./top.component.scss']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"] }, { type: _entrydata_service__WEBPACK_IMPORTED_MODULE_4__["EntrydataService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home2/y2019/s1910297/repos/kakeibo-front/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map