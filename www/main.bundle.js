webpackJsonp(["main"],{

/***/ "./src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_gendir lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<br>\n<div class=\"container\">\n  <flash-messages></flash-messages>\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");
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
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=C:/Users/Akhil/Desktop/11_FrAuDa_Pi_StudentEventPlatform-master/11_FrAuDa_Pi_StudentEventPlatform-master/src/app.component.js.map

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2__ = __webpack_require__("./node_modules/angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_firebase_service__ = __webpack_require__("./src/app/services/firebase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_search_service__ = __webpack_require__("./src/app/services/search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__ = __webpack_require__("./src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_products_products_component__ = __webpack_require__("./src/app/components/products/products.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_housing_housing_component__ = __webpack_require__("./src/app/components/housing/housing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_events_events_component__ = __webpack_require__("./src/app/components/events/events.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_gigs_gigs_component__ = __webpack_require__("./src/app/components/gigs/gigs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_navbar_navbar_component__ = __webpack_require__("./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_product_product_component__ = __webpack_require__("./src/app/components/product/product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_listing_listing_component__ = __webpack_require__("./src/app/components/listing/listing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_event_event_component__ = __webpack_require__("./src/app/components/event/event.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_gig_gig_component__ = __webpack_require__("./src/app/components/gig/gig.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_add_product_add_product_component__ = __webpack_require__("./src/app/components/add-product/add-product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_edit_product_edit_product_component__ = __webpack_require__("./src/app/components/edit-product/edit-product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_add_housing_add_housing_component__ = __webpack_require__("./src/app/components/add-housing/add-housing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_edit_housing_edit_housing_component__ = __webpack_require__("./src/app/components/edit-housing/edit-housing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_add_event_add_event_component__ = __webpack_require__("./src/app/components/add-event/add-event.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_edit_event_edit_event_component__ = __webpack_require__("./src/app/components/edit-event/edit-event.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_add_gig_add_gig_component__ = __webpack_require__("./src/app/components/add-gig/add-gig.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_edit_gig_edit_gig_component__ = __webpack_require__("./src/app/components/edit-gig/edit-gig.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_login_login_component__ = __webpack_require__("./src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_register_register_component__ = __webpack_require__("./src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_how_it_works_how_it_works_component__ = __webpack_require__("./src/app/components/how-it-works/how-it-works.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__components_profile_profile_component__ = __webpack_require__("./src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_edit_profile_edit_profile_component__ = __webpack_require__("./src/app/components/edit-profile/edit-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__components_search_search_component__ = __webpack_require__("./src/app/components/search/search.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



































var firebaseConfig = {
    apiKey: "AIzaSyAzwi29rBFn2Tzp4riCWaLRvpGNaafGDqE",
    authDomain: "dragonquad-32573.firebaseapp.com",
    databaseURL: "https://dragonquad-32573.firebaseio.com",
    projectId: "dragonquad-32573",
    storageBucket: "dragonquad-32573.appspot.com",
    messagingSenderId: "240943759488"
};
var firebaseAuthConfig = {
    provider: __WEBPACK_IMPORTED_MODULE_5_angularfire2__["e" /* AuthProviders */].Google,
    method: __WEBPACK_IMPORTED_MODULE_5_angularfire2__["d" /* AuthMethods */].Redirect
};
var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'products', component: __WEBPACK_IMPORTED_MODULE_11__components_products_products_component__["a" /* ProductsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_30__services_auth_service__["a" /* AuthService */]] },
    { path: 'product/:id', component: __WEBPACK_IMPORTED_MODULE_16__components_product_product_component__["a" /* ProductComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_30__services_auth_service__["a" /* AuthService */]] },
    { path: 'add-product', component: __WEBPACK_IMPORTED_MODULE_20__components_add_product_add_product_component__["a" /* AddProductComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_30__services_auth_service__["a" /* AuthService */]] },
    { path: 'edit-product/:id', component: __WEBPACK_IMPORTED_MODULE_21__components_edit_product_edit_product_component__["a" /* EditProductComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_30__services_auth_service__["a" /* AuthService */]] },
    { path: 'housing', component: __WEBPACK_IMPORTED_MODULE_12__components_housing_housing_component__["a" /* HousingComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_30__services_auth_service__["a" /* AuthService */]] },
    { path: 'listing/:id', component: __WEBPACK_IMPORTED_MODULE_17__components_listing_listing_component__["a" /* ListingComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_30__services_auth_service__["a" /* AuthService */]] },
    { path: 'add-housing', component: __WEBPACK_IMPORTED_MODULE_22__components_add_housing_add_housing_component__["a" /* AddHousingComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_30__services_auth_service__["a" /* AuthService */]] },
    { path: 'edit-housing/:id', component: __WEBPACK_IMPORTED_MODULE_23__components_edit_housing_edit_housing_component__["a" /* EditHousingComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_30__services_auth_service__["a" /* AuthService */]] },
    { path: 'events', component: __WEBPACK_IMPORTED_MODULE_13__components_events_events_component__["a" /* EventsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_30__services_auth_service__["a" /* AuthService */]] },
    { path: 'event/:id', component: __WEBPACK_IMPORTED_MODULE_18__components_event_event_component__["a" /* EventComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_30__services_auth_service__["a" /* AuthService */]] },
    { path: 'add-event', component: __WEBPACK_IMPORTED_MODULE_24__components_add_event_add_event_component__["a" /* AddEventComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_30__services_auth_service__["a" /* AuthService */]] },
    { path: 'edit-event/:id', component: __WEBPACK_IMPORTED_MODULE_25__components_edit_event_edit_event_component__["a" /* EditEventComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_30__services_auth_service__["a" /* AuthService */]] },
    { path: 'gigs', component: __WEBPACK_IMPORTED_MODULE_14__components_gigs_gigs_component__["a" /* GigsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_30__services_auth_service__["a" /* AuthService */]] },
    { path: 'gig/:id', component: __WEBPACK_IMPORTED_MODULE_19__components_gig_gig_component__["a" /* GigComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_30__services_auth_service__["a" /* AuthService */]] },
    { path: 'add-gig', component: __WEBPACK_IMPORTED_MODULE_26__components_add_gig_add_gig_component__["a" /* AddGigComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_30__services_auth_service__["a" /* AuthService */]] },
    { path: 'edit-gig/:id', component: __WEBPACK_IMPORTED_MODULE_27__components_edit_gig_edit_gig_component__["a" /* EditGigComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_30__services_auth_service__["a" /* AuthService */]] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_28__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_29__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'how-it-works', component: __WEBPACK_IMPORTED_MODULE_31__components_how_it_works_how_it_works_component__["a" /* HowItWorksComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_32__components_profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'search', component: __WEBPACK_IMPORTED_MODULE_34__components_search_search_component__["a" /* SearchComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_products_products_component__["a" /* ProductsComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_housing_housing_component__["a" /* HousingComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_events_events_component__["a" /* EventsComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_gigs_gigs_component__["a" /* GigsComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_product_product_component__["a" /* ProductComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_listing_listing_component__["a" /* ListingComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_event_event_component__["a" /* EventComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_gig_gig_component__["a" /* GigComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_add_product_add_product_component__["a" /* AddProductComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_edit_product_edit_product_component__["a" /* EditProductComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_add_housing_add_housing_component__["a" /* AddHousingComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_edit_housing_edit_housing_component__["a" /* EditHousingComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_add_event_add_event_component__["a" /* AddEventComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_edit_event_edit_event_component__["a" /* EditEventComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_add_gig_add_gig_component__["a" /* AddGigComponent */],
                __WEBPACK_IMPORTED_MODULE_27__components_edit_gig_edit_gig_component__["a" /* EditGigComponent */],
                __WEBPACK_IMPORTED_MODULE_28__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_29__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_31__components_how_it_works_how_it_works_component__["a" /* HowItWorksComponent */],
                __WEBPACK_IMPORTED_MODULE_32__components_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_33__components_edit_profile_edit_profile_component__["a" /* EditProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_34__components_search_search_component__["a" /* SearchComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_8_angular2_flash_messages__["FlashMessagesModule"],
                __WEBPACK_IMPORTED_MODULE_5_angularfire2__["c" /* AngularFireModule */].initializeApp(firebaseConfig, firebaseAuthConfig),
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */].forRoot(appRoutes)
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_6__services_firebase_service__["a" /* FirebaseService */], __WEBPACK_IMPORTED_MODULE_30__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_7__services_search_service__["a" /* SearchService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/Users/Akhil/Desktop/11_FrAuDa_Pi_StudentEventPlatform-master/11_FrAuDa_Pi_StudentEventPlatform-master/src/app.module.js.map

/***/ }),

/***/ "./src/app/components/add-event/add-event.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/add-event/add-event.component.html":
/***/ (function(module, exports) {

module.exports = "<a class=\"btn btn-secondary btn-sm\" [routerLink]=\"['/events']\" role=\"button\"><i class=\"fas fa-angle-left\"></i> Back</a>\n<br>\n<br>\n<h2 class=\"page-header\">Add Event</h2>\n<form (submit)=\"onAddSubmit()\">\n  <div class=\"form-group\">\n    <label>Title</label>\n    <input class=\"form-control\" type=\"text\" [(ngModel)]=\"title\" name=\"title\" required>\n  </div>\n  <div class=\"form-group\">\n    <label>Short Title</label>\n    <input class=\"form-control\" type=\"text\" [(ngModel)]=\"shortTitle\" name=\"shortTitle\" required>\n  </div>\n  <div class=\"form-group\">\n    <label>Description</label>\n      <textarea class=\"form-control\" rows=\"10\" [(ngModel)]=\"description\" name=\"description\" required></textarea>\n  </div>\n  <div class=\"form-group\">\n    <label>Listing Type</label>\n    <select class=\"form-control\" type=\"text\" [(ngModel)]=\"type\" name=\"type\" required>\n      <option value=\"Club\">Club Event</option>\n      <option value=\"Fraternity\">Fratnerity</option>\n      <option value=\"Sorority\">Sorority</option>\n    </select>\n  </div>\n  <div class=\"form-group\">\n    <label>Event Location</label>\n    <input class=\"form-control\" type=\"text\" [(ngModel)]=\"eventLocation\" name=\"eventLocation\" required>\n  </div>\n  <div class=\"form-group\">\n    <label>Date</label>\n    <input class=\"form-control\" type=\"date\" [(ngModel)]=\"date\" name=\"date\" required>\n  </div>\n  <div class=\"form-group\">\n    <i>Only JPEG and PNG files are accepted.</i>\n    <br>\n    <input id=\"image\" name=\"image\" accept=\"image/x-png,image/jpeg\" [(ngModel)]=\"image\" type=\"file\" required>\n  </div>\n  <div class=\"form-group\">\n    <label>Price</label>\n    <input class=\"form-control\" type=\"number\" step=\"0.01\" value='0.00' placeholder='0.00' [(ngModel)]=\"price\" name=\"price\" required>\n  </div>\n  <input type=\"submit\" value=\"Submit\" class=\"btn btn-success\">\n</form>\n"

/***/ }),

/***/ "./src/app/components/add-event/add-event.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddEventComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__ = __webpack_require__("./src/app/services/firebase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddEventComponent = (function () {
    function AddEventComponent(firebaseService, router) {
        this.firebaseService = firebaseService;
        this.router = router;
    }
    AddEventComponent.prototype.ngOnInit = function () {
    };
    AddEventComponent.prototype.onAddSubmit = function () {
        var event = {
            title: this.title,
            shortTitle: this.shortTitle,
            description: this.description,
            type: this.type,
            price: this.price,
            eventLocation: this.eventLocation,
            date: this.date
        };
        this.firebaseService.addEvent(event);
        this.router.navigate(['events']);
    };
    AddEventComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-event',
            template: __webpack_require__("./src/app/components/add-event/add-event.component.html"),
            styles: [__webpack_require__("./src/app/components/add-event/add-event.component.css")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], AddEventComponent);
    return AddEventComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/Akhil/Desktop/11_FrAuDa_Pi_StudentEventPlatform-master/11_FrAuDa_Pi_StudentEventPlatform-master/src/add-event.component.js.map

/***/ }),

/***/ "./src/app/components/add-gig/add-gig.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/add-gig/add-gig.component.html":
/***/ (function(module, exports) {

module.exports = "<a class=\"btn btn-secondary btn-sm\" [routerLink]=\"['/gigs']\" role=\"button\"><i class=\"fas fa-angle-left\"></i> Back</a>\n<br>\n<br>\n<h2 class=\"page-header\">Add Gig</h2>\n<form (submit)=\"onAddSubmit()\">\n  <div class=\"form-group\">\n    <label>Title</label>\n    <input class=\"form-control\" type=\"text\" [(ngModel)]=\"title\" name=\"title\" required>\n  </div>\n  <div class=\"form-group\">\n    <label>Title</label>\n    <input class=\"form-control\" type=\"text\" [(ngModel)]=\"shortTitle\" name=\"shortTitle\" required>\n  </div>\n  <div class=\"form-group\">\n    <label>Description</label>\n      <textarea class=\"form-control\" rows=\"10\" [(ngModel)]=\"description\" name=\"description\" required></textarea>\n  </div>\n  <div class=\"form-group\">\n    <label>Listing Type</label>\n    <select class=\"form-control\" type=\"text\" [(ngModel)]=\"type\" name=\"type\" required>\n      <option value=\"Requesting\">Requesting</option>\n      <option value=\"Offering\">Offering</option>\n    </select>\n  </div>\n  <div class=\"form-group\">\n    <i>Only JPEG and PNG files are accepted.</i>\n    <br>\n    <input id=\"image\" name=\"image\" accept=\"image/x-png,image/jpeg\" [(ngModel)]=\"image\" type=\"file\" required>\n  </div>\n  <div class=\"form-group\">\n    <label>Price (per hour)</label>\n    <input class=\"form-control\" type=\"number\" step=\"0.01\" value='0.00' placeholder='0.00' [(ngModel)]=\"price\" name=\"price\" required>\n  </div>\n  <div class=\"form-group\">\n    <label>Payments Accepted</label>\n    <select class=\"form-control\" type=\"text\" [(ngModel)]=\"payment\" name=\"payment\" required>\n      <option value=\"Cash\">Cash</option>\n      <option value=\"Cash & Payment App\">Cash &amp; Payment App</option>\n      <option value=\"Payment App\">Payment App</option>\n    </select>\n  </div>\n  <div class=\"form-group\">\n    <label>Location</label>\n    <input class=\"form-control\" type=\"text\" [(ngModel)]=\"location\" name=\"location\" required>\n  </div>\n  <input type=\"submit\" value=\"Submit\" class=\"btn btn-success\">\n</form>\n"

/***/ }),

/***/ "./src/app/components/add-gig/add-gig.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddGigComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__ = __webpack_require__("./src/app/services/firebase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddGigComponent = (function () {
    function AddGigComponent(firebaseService, router) {
        this.firebaseService = firebaseService;
        this.router = router;
    }
    AddGigComponent.prototype.ngOnInit = function () {
    };
    AddGigComponent.prototype.onAddSubmit = function () {
        var gig = {
            title: this.title,
            shortTitle: this.shortTitle,
            description: this.description,
            type: this.type,
            price: this.price,
            payment: this.payment,
            location: this.location
        };
        this.firebaseService.addGig(gig);
        this.router.navigate(['gigs']);
    };
    AddGigComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-gig',
            template: __webpack_require__("./src/app/components/add-gig/add-gig.component.html"),
            styles: [__webpack_require__("./src/app/components/add-gig/add-gig.component.css")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], AddGigComponent);
    return AddGigComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/Akhil/Desktop/11_FrAuDa_Pi_StudentEventPlatform-master/11_FrAuDa_Pi_StudentEventPlatform-master/src/add-gig.component.js.map

/***/ }),

/***/ "./src/app/components/add-housing/add-housing.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/add-housing/add-housing.component.html":
/***/ (function(module, exports) {

module.exports = "<a class=\"btn btn-secondary btn-sm\" [routerLink]=\"['/housing']\" role=\"button\"><i class=\"fas fa-angle-left\"></i> Back</a>\n<br>\n<br>\n<h2 class=\"page-header\">Add Housing</h2>\n<form (submit)=\"onAddSubmit()\">\n  <div class=\"form-group\">\n    <label>Address</label>\n    <input id=\"address\" class=\"form-control\" rows=\"2\" type=\"text\" [(ngModel)]=\"address\" name=\"address\" required>\n  </div>\n  <div class=\"form-group\">\n    <label>Short Title</label>\n    <input class=\"form-control\" type=\"text\" [(ngModel)]=\"shortTitle\" name=\"shortTitle\" required>\n  </div>\n  <div class=\"form-group\">\n    <label>Description</label>\n      <textarea class=\"form-control\" rows=\"10\" [(ngModel)]=\"description\" name=\"description\" required></textarea>\n  </div>\n  <div class=\"form-group\">\n    <label>Listing Type</label>\n    <select class=\"form-control\" type=\"text\" [(ngModel)]=\"type\" name=\"type\" required>\n      <option value=\"Apartment\">Apartment</option>\n      <option value=\"Condo\">Condo</option>\n      <option value=\"Sublet\">Sublet</option>\n    </select>\n  </div>\n  <div class=\"form-group\">\n    <label>Bedrooms</label>\n    <select class=\"form-control\" type=\"text\" [(ngModel)]=\"bedroom\" name=\"type\" required>\n      <option value=\"1\">1</option>\n      <option value=\"2\">2</option>\n      <option value=\"3\">3</option>\n      <option value=\"4\">4</option>\n      <option value=\"5\">5</option>\n      <option value=\"6\">6</option>\n      <option value=\"7\">7</option>\n      <option value=\"8\">8</option>\n      <option value=\"9\">9</option>      \n    </select>\n  </div>\n  <div class=\"form-group\">\n    <label>Bedrooms</label>\n    <select class=\"form-control\" type=\"text\" [(ngModel)]=\"bathroom\" name=\"type\" required>\n      <option value=\"1\">1</option>\n      <option value=\"2\">2</option>\n      <option value=\"3\">3</option>\n      <option value=\"4\">4</option>\n      <option value=\"5\">5</option>\n      <option value=\"6\">6</option>\n      <option value=\"7\">7</option>\n      <option value=\"8\">8</option>\n      <option value=\"9\">9</option>      \n    </select>\n  </div>\n  <div class=\"form-group\">\n    <label>Date Available</label>\n    <input class=\"form-control\" type=\"date\" [(ngModel)]=\"date\" name=\"date\" required>\n  </div>\n  <div class=\"form-group\">\n    <label>Square Feet</label>\n    <input class=\"form-control\" type=\"text\" [(ngModel)]=\"sqft\" name=\"title\">\n  </div>\n  <div class=\"form-group\">\n    <i>Only JPEG and PNG files are accepted.</i>\n    <br>\n    <input id=\"image\" name=\"image\" accept=\"image/x-png,image/jpeg\" [(ngModel)]=\"image\" type=\"file\" required>\n  </div>\n  <div class=\"form-group\">\n    <label>Price</label>\n    <input class=\"form-control\" type=\"number\" step=\"0.01\" value='0.00' placeholder='0.00' [(ngModel)]=\"price\" name=\"price\" required>\n  </div>\n  <input type=\"submit\" value=\"Submit\" class=\"btn btn-success\">\n</form>\n"

/***/ }),

/***/ "./src/app/components/add-housing/add-housing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddHousingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__ = __webpack_require__("./src/app/services/firebase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddHousingComponent = (function () {
    function AddHousingComponent(firebaseService, router) {
        this.firebaseService = firebaseService;
        this.router = router;
    }
    AddHousingComponent.prototype.ngOnInit = function () {
    };
    AddHousingComponent.prototype.onAddSubmit = function () {
        var listing = {
            shortTitle: this.shortTitle,
            description: this.description,
            type: this.type,
            price: this.price,
            address: this.address,
            date: this.date,
            bedroom: this.bedroom,
            bathroom: this.bathroom,
            sqft: this.sqft,
        };
        this.firebaseService.addListing(listing);
        this.router.navigate(['housing']);
    };
    AddHousingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-housing',
            template: __webpack_require__("./src/app/components/add-housing/add-housing.component.html"),
            styles: [__webpack_require__("./src/app/components/add-housing/add-housing.component.css")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], AddHousingComponent);
    return AddHousingComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/Akhil/Desktop/11_FrAuDa_Pi_StudentEventPlatform-master/11_FrAuDa_Pi_StudentEventPlatform-master/src/add-housing.component.js.map

/***/ }),

/***/ "./src/app/components/add-product/add-product.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/add-product/add-product.component.html":
/***/ (function(module, exports) {

module.exports = "<a class=\"btn btn-secondary btn-sm\" [routerLink]=\"['/products']\" role=\"button\"><i class=\"fas fa-angle-left\"></i> Back</a>\n<br>\n<br>\n<h2 class=\"page-header\">Add Product</h2>\n<form (submit)=\"onAddSubmit()\">\n  <div class=\"form-group\">\n    <label>Title</label>\n    <input class=\"form-control\" type=\"text\" [(ngModel)]=\"title\" name=\"title\" required>\n  </div>\n  <div class=\"form-group\">\n    <label>Listing Type</label>\n    <select class=\"form-control\" type=\"text\" [(ngModel)]=\"listingType\" name=\"listingType\" required>\n      <option value=\"Rent\">Rent</option>\n      <option value=\"Sell\">Sell</option>\n    </select>\n  </div>\n  <div class=\"form-group\">\n    <label>Short Title</label>\n    <input class=\"form-control\" type=\"text\" [(ngModel)]=\"shortTitle\" name=\"shortTitle\" required>\n  </div>\n  <div class=\"form-group\">\n    <label>Description</label>\n      <textarea class=\"form-control\" rows=\"10\" [(ngModel)]=\"description\" name=\"description\" required></textarea>\n  </div>\n  <div class=\"form-group\">\n    <label>Condition</label>\n    <select class=\"form-control\" type=\"text\" [(ngModel)]=\"condition\" name=\"condition\" required>\n      <option value=\"New\">New</option>\n      <option value=\"Refurbished\">Refurbished</option>\n      <option value=\"Used\">Used</option>\n      <option value=\"As Is\">As Is</option>\n    </select>\n  </div>\n  <div class=\"form-group\">\n    <label>Price</label>\n  <div class=\"input-group mb-3\">\n  <div class=\"input-group-prepend\"><span class=\"input-group-text\">$</span></div>\n  <input class=\"form-control\" type=\"number\" step=\"0.01\" value='0.00' placeholder='0.00' [(ngModel)]=\"price\" name=\"price\" required>\n  </div>\n  </div>\n  <div class=\"form-group\">\n    <label>Payments Accepted</label>\n    <select class=\"form-control\" type=\"text\" [(ngModel)]=\"payment\" name=\"payment\" required>\n      <option value=\"Cash\">Cash</option>\n      <option value=\"Cash & Payment App\">Cash &amp; Payment App</option>\n      <option value=\"Payment App\">Payment App</option>\n    </select>\n  </div>\n  <div class=\"form-group\">\n    <i>Only JPEG and PNG files are accepted.</i>\n    <br>\n    <input id=\"image\" name=\"image\" accept=\"image/x-png,image/jpeg\" [(ngModel)]=\"image\" type=\"file\" required>\n  </div>\n  <div class=\"form-group\">\n    <label>Location</label>\n    <input class=\"form-control\" type=\"text\" [(ngModel)]=\"userLocation\" name=\"userLocation\" required>\n  </div>\n  <input type=\"submit\" value=\"Submit\" class=\"btn btn-success\">\n</form>\n"

/***/ }),

/***/ "./src/app/components/add-product/add-product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__ = __webpack_require__("./src/app/services/firebase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddProductComponent = (function () {
    function AddProductComponent(firebaseService, router) {
        this.firebaseService = firebaseService;
        this.router = router;
    }
    AddProductComponent.prototype.ngOnInit = function () {
    };
    AddProductComponent.prototype.onAddSubmit = function () {
        var product = {
            title: this.title,
            listingType: this.listingType,
            shortTitle: this.shortTitle,
            description: this.description,
            condition: this.condition,
            price: this.price,
            payment: this.payment,
            userLocation: this.userLocation
        };
        this.firebaseService.addProduct(product);
        this.router.navigate(['products']);
    };
    AddProductComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-product',
            template: __webpack_require__("./src/app/components/add-product/add-product.component.html"),
            styles: [__webpack_require__("./src/app/components/add-product/add-product.component.css")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], AddProductComponent);
    return AddProductComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/Akhil/Desktop/11_FrAuDa_Pi_StudentEventPlatform-master/11_FrAuDa_Pi_StudentEventPlatform-master/src/add-product.component.js.map

/***/ }),

/***/ "./src/app/components/edit-event/edit-event.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/edit-event/edit-event.component.html":
/***/ (function(module, exports) {

module.exports = "<a class=\"btn btn-secondary btn-sm\" [routerLink]=\"['/events']\" role=\"button\"><i class=\"fas fa-angle-left\"></i> Back</a>\n<br>\n<br>\n<h2 class=\"page-header\">Edit Event</h2>\n<form (submit)=\"onEditSubmit()\">\n  <div class=\"form-group\">\n    <label>Title</label>\n    <input class=\"form-control\" type=\"text\" [(ngModel)]=\"title\" name=\"title\" required>\n  </div>\n  <div class=\"form-group\">\n    <label>Description</label>\n      <textarea class=\"form-control\" rows=\"10\" [(ngModel)]=\"description\" name=\"description\" required></textarea>\n  </div>\n  <div class=\"form-group\">\n    <label>Listing Type</label>\n    <select class=\"form-control\" type=\"text\" [(ngModel)]=\"type\" name=\"type\" required>\n      <option value=\"Rent\">Rent</option>\n      <option value=\"Sell\">Sell</option>\n    </select>\n  </div>\n  <div class=\"form-group\">\n    <label>Condition</label>\n    <select class=\"form-control\" type=\"text\" [(ngModel)]=\"condition\" name=\"condition\" required>\n      <option value=\"New\">New</option>\n      <option value=\"Refurbished\">Refurbished</option>\n      <option value=\"Used\">Used</option>\n      <option value=\"As Is\">As Is</option>\n    </select>\n  </div>\n  <div class=\"form-group\">\n    <label>Price</label>\n    <input class=\"form-control\" type=\"number\" step=\"0.01\" value='0.00' placeholder='0.00' [(ngModel)]=\"price\" name=\"price\" required>\n  </div>\n  <div class=\"form-group\">\n    <label>Payments Accepted</label>\n    <select class=\"form-control\" type=\"text\" [(ngModel)]=\"payment\" name=\"payment\" required>\n      <option value=\"Cash\">Cash</option>\n      <option value=\"Cash & Payment App\">Cash &amp; Payment App</option>\n      <option value=\"Payment App\">Payment App</option>\n    </select>\n  </div>\n  <input type=\"submit\" value=\"Submit\" class=\"btn btn-success\">\n</form>\n"

/***/ }),

/***/ "./src/app/components/edit-event/edit-event.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditEventComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__ = __webpack_require__("./src/app/services/firebase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditEventComponent = (function () {
    function EditEventComponent(firebaseService, router, route) {
        this.firebaseService = firebaseService;
        this.router = router;
        this.route = route;
    }
    EditEventComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.params['id'];
        this.firebaseService.getEventDetails(this.id).subscribe(function (event) {
            _this.title = event.title;
            _this.description = event.description;
            _this.type = event.type;
            _this.condition = event.condition;
            _this.price = event.price;
            _this.payment = event.payment;
        });
    };
    EditEventComponent.prototype.onEditSubmit = function () {
        var event = {
            title: this.title,
            description: this.description,
            type: this.type,
            condition: this.condition,
            price: this.price,
            payment: this.payment
        };
        this.firebaseService.updateEvent(this.id, event);
        this.router.navigate(['/events']);
    };
    EditEventComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edit-event',
            template: __webpack_require__("./src/app/components/edit-event/edit-event.component.html"),
            styles: [__webpack_require__("./src/app/components/edit-event/edit-event.component.css")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === 'function' && _c) || Object])
    ], EditEventComponent);
    return EditEventComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/Akhil/Desktop/11_FrAuDa_Pi_StudentEventPlatform-master/11_FrAuDa_Pi_StudentEventPlatform-master/src/edit-event.component.js.map

/***/ }),

/***/ "./src/app/components/edit-gig/edit-gig.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/edit-gig/edit-gig.component.html":
/***/ (function(module, exports) {

module.exports = "<a class=\"btn btn-secondary btn-sm\" [routerLink]=\"['/gigs']\" role=\"button\"><i class=\"fas fa-angle-left\"></i> Back</a>\n<br>\n<br>\n<h2 class=\"page-header\">Edit Gig</h2>\n<form (submit)=\"onEditSubmit()\">\n  <div class=\"form-group\">\n    <label>Title</label>\n    <input class=\"form-control\" type=\"text\" [(ngModel)]=\"title\" name=\"title\" required>\n  </div>\n  <div class=\"form-group\">\n    <label>Description</label>\n      <textarea class=\"form-control\" rows=\"10\" [(ngModel)]=\"description\" name=\"description\" required></textarea>\n  </div>\n  <div class=\"form-group\">\n    <label>Listing Type</label>\n    <select class=\"form-control\" type=\"text\" [(ngModel)]=\"type\" name=\"type\" required>\n      <option value=\"Rent\">Rent</option>\n      <option value=\"Sell\">Sell</option>\n    </select>\n  </div>\n  <div class=\"form-group\">\n    <label>Condition</label>\n    <select class=\"form-control\" type=\"text\" [(ngModel)]=\"condition\" name=\"condition\" required>\n      <option value=\"New\">New</option>\n      <option value=\"Refurbished\">Refurbished</option>\n      <option value=\"Used\">Used</option>\n      <option value=\"As Is\">As Is</option>\n    </select>\n  </div>\n  <div class=\"form-group\">\n    <label>Price</label>\n    <input class=\"form-control\" type=\"number\" step=\"0.01\" value='0.00' placeholder='0.00' [(ngModel)]=\"price\" name=\"price\" required>\n  </div>\n  <div class=\"form-group\">\n    <label>Payments Accepted</label>\n    <select class=\"form-control\" type=\"text\" [(ngModel)]=\"payment\" name=\"payment\" required>\n      <option value=\"Cash\">Cash</option>\n      <option value=\"Cash & Payment App\">Cash &amp; Payment App</option>\n      <option value=\"Payment App\">Payment App</option>\n    </select>\n  </div>\n  <input type=\"submit\" value=\"Submit\" class=\"btn btn-success\">\n</form>\n"

/***/ }),

/***/ "./src/app/components/edit-gig/edit-gig.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditGigComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__ = __webpack_require__("./src/app/services/firebase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditGigComponent = (function () {
    function EditGigComponent(firebaseService, router, route) {
        this.firebaseService = firebaseService;
        this.router = router;
        this.route = route;
    }
    EditGigComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.params['id'];
        this.firebaseService.getGigDetails(this.id).subscribe(function (gig) {
            _this.title = gig.title;
            _this.description = gig.description;
            _this.type = gig.type;
            _this.condition = gig.condition;
            _this.price = gig.price;
            _this.payment = gig.payment;
        });
    };
    EditGigComponent.prototype.onEditSubmit = function () {
        var gig = {
            title: this.title,
            description: this.description,
            type: this.type,
            condition: this.condition,
            price: this.price,
            payment: this.payment
        };
        this.firebaseService.updateGig(this.id, gig);
        this.router.navigate(['/gigs']);
    };
    EditGigComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edit-gig',
            template: __webpack_require__("./src/app/components/edit-gig/edit-gig.component.html"),
            styles: [__webpack_require__("./src/app/components/edit-gig/edit-gig.component.css")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === 'function' && _c) || Object])
    ], EditGigComponent);
    return EditGigComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/Akhil/Desktop/11_FrAuDa_Pi_StudentEventPlatform-master/11_FrAuDa_Pi_StudentEventPlatform-master/src/edit-gig.component.js.map

/***/ }),

/***/ "./src/app/components/edit-housing/edit-housing.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/edit-housing/edit-housing.component.html":
/***/ (function(module, exports) {

module.exports = "<a class=\"btn btn-secondary btn-sm\" [routerLink]=\"['/events']\" role=\"button\"><i class=\"fas fa-angle-left\"></i> Back</a>\n<br>\n<br>\n<h2 class=\"page-header\">Edit Event</h2>\n<form (submit)=\"onEditSubmit()\">\n  <div class=\"form-group\">\n    <label>Title</label>\n    <input class=\"form-control\" type=\"text\" [(ngModel)]=\"title\" name=\"title\" required>\n  </div>\n  <div class=\"form-group\">\n    <label>Description</label>\n      <textarea class=\"form-control\" rows=\"10\" [(ngModel)]=\"description\" name=\"description\" required></textarea>\n  </div>\n  <div class=\"form-group\">\n    <label>Listing Type</label>\n    <select class=\"form-control\" type=\"text\" [(ngModel)]=\"type\" name=\"type\" required>\n      <option value=\"Rent\">Rent</option>\n      <option value=\"Sell\">Sell</option>\n    </select>\n  </div>\n  <div class=\"form-group\">\n    <label>Condition</label>\n    <select class=\"form-control\" type=\"text\" [(ngModel)]=\"condition\" name=\"condition\" required>\n      <option value=\"New\">New</option>\n      <option value=\"Refurbished\">Refurbished</option>\n      <option value=\"Used\">Used</option>\n      <option value=\"As Is\">As Is</option>\n    </select>\n  </div>\n  <div class=\"form-group\">\n    <label>Price</label>\n    <input class=\"form-control\" type=\"number\" step=\"0.01\" value='0.00' placeholder='0.00' [(ngModel)]=\"price\" name=\"price\" required>\n  </div>\n  <div class=\"form-group\">\n    <label>Payments Accepted</label>\n    <select class=\"form-control\" type=\"text\" [(ngModel)]=\"payment\" name=\"payment\" required>\n      <option value=\"Cash\">Cash</option>\n      <option value=\"Cash & Payment App\">Cash &amp; Payment App</option>\n      <option value=\"Payment App\">Payment App</option>\n    </select>\n  </div>\n  <input type=\"submit\" value=\"Submit\" class=\"btn btn-success\">\n</form>\n"

/***/ }),

/***/ "./src/app/components/edit-housing/edit-housing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditHousingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__ = __webpack_require__("./src/app/services/firebase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditHousingComponent = (function () {
    function EditHousingComponent(firebaseService, router, route) {
        this.firebaseService = firebaseService;
        this.router = router;
        this.route = route;
    }
    EditHousingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.params['id'];
        this.firebaseService.getListingDetails(this.id).subscribe(function (listing) {
            _this.title = listing.title;
            _this.description = listing.description;
            _this.type = listing.type;
            _this.condition = listing.condition;
            _this.price = listing.price;
            _this.payment = listing.payment;
        });
    };
    EditHousingComponent.prototype.onEditSubmit = function () {
        var listing = {
            title: this.title,
            description: this.description,
            type: this.type,
            condition: this.condition,
            price: this.price,
            payment: this.payment
        };
        this.firebaseService.updateListing(this.id, listing);
        this.router.navigate(['/housing']);
    };
    EditHousingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edit-housing',
            template: __webpack_require__("./src/app/components/edit-housing/edit-housing.component.html"),
            styles: [__webpack_require__("./src/app/components/edit-housing/edit-housing.component.css")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === 'function' && _c) || Object])
    ], EditHousingComponent);
    return EditHousingComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/Akhil/Desktop/11_FrAuDa_Pi_StudentEventPlatform-master/11_FrAuDa_Pi_StudentEventPlatform-master/src/edit-housing.component.js.map

/***/ }),

/***/ "./src/app/components/edit-product/edit-product.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/edit-product/edit-product.component.html":
/***/ (function(module, exports) {

module.exports = "<a class=\"btn btn-secondary btn-sm\" [routerLink]=\"['/products']\" role=\"button\"><i class=\"fas fa-angle-left\"></i> Back</a>\n<br>\n<br>\n<h2 class=\"page-header\">Edit Product</h2>\n<form (submit)=\"onEditSubmit()\">\n  <div class=\"form-group\">\n    <label>Title</label>\n    <input class=\"form-control\" type=\"text\" [(ngModel)]=\"title\" name=\"title\" required>\n  </div>\n  <div class=\"form-group\">\n    <label>Listing Type</label>\n    <select class=\"form-control\" type=\"text\" [(ngModel)]=\"listingType\" name=\"listingType\" required>\n      <option value=\"Rent\">Rent</option>\n      <option value=\"Sell\">Sell</option>\n    </select>\n  </div>\n  <div class=\"form-group\">\n    <label>Short Title</label>\n    <input class=\"form-control\" type=\"text\" [(ngModel)]=\"shortTitle\" name=\"shortTitle\" required>\n  </div>\n  <div class=\"form-group\">\n    <label>Description</label>\n      <textarea class=\"form-control\" rows=\"10\" [(ngModel)]=\"description\" name=\"description\" required></textarea>\n  </div>\n  <div class=\"form-group\">\n    <label>Condition</label>\n    <select class=\"form-control\" type=\"text\" [(ngModel)]=\"condition\" name=\"condition\" required>\n      <option value=\"New\">New</option>\n      <option value=\"Refurbished\">Refurbished</option>\n      <option value=\"Used\">Used</option>\n      <option value=\"As Is\">As Is</option>\n    </select>\n  </div>\n  <div class=\"form-group\">\n    <label>Price</label>\n  <div class=\"input-group mb-3\">\n  <div class=\"input-group-prepend\"><span class=\"input-group-text\">$</span></div>\n  <input class=\"form-control\" type=\"number\" step=\"0.01\" value='0.00' placeholder='0.00' [(ngModel)]=\"price\" name=\"price\" required>\n  </div>\n  </div>\n  <div class=\"form-group\">\n    <label>Payments Accepted</label>\n    <select class=\"form-control\" type=\"text\" [(ngModel)]=\"payment\" name=\"payment\" required>\n      <option value=\"Cash\">Cash</option>\n      <option value=\"Cash & Payment App\">Cash &amp; Payment App</option>\n      <option value=\"Payment App\">Payment App</option>\n    </select>\n  </div>\n  <div class=\"form-group\">\n    <i>Only JPEG and PNG files are accepted.</i>\n    <br>\n    <input id=\"image\" name=\"image\" accept=\"image/x-png,image/jpeg\" [(ngModel)]=\"image\" type=\"file\" required>\n  </div>\n  <div class=\"form-group\">\n    <label>Location</label>\n    <input class=\"form-control\" type=\"text\" [(ngModel)]=\"userLocation\" name=\"userLocation\" required>\n  </div>\n  <input type=\"submit\" value=\"Submit\" class=\"btn btn-success\">\n</form>"

/***/ }),

/***/ "./src/app/components/edit-product/edit-product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__ = __webpack_require__("./src/app/services/firebase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditProductComponent = (function () {
    function EditProductComponent(firebaseService, router, route) {
        this.firebaseService = firebaseService;
        this.router = router;
        this.route = route;
    }
    EditProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.params['id'];
        this.firebaseService.getProductDetails(this.id).subscribe(function (product) {
            _this.title = product.title;
            _this.description = product.description;
            _this.type = product.type;
            _this.condition = product.condition;
            _this.price = product.price;
            _this.payment = product.payment;
        });
    };
    EditProductComponent.prototype.onEditSubmit = function () {
        var product = {
            title: this.title,
            description: this.description,
            type: this.type,
            condition: this.condition,
            price: this.price,
            payment: this.payment
        };
        this.firebaseService.updateProduct(this.id, product);
        this.router.navigate(['/products']);
    };
    EditProductComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edit-product',
            template: __webpack_require__("./src/app/components/edit-product/edit-product.component.html"),
            styles: [__webpack_require__("./src/app/components/edit-product/edit-product.component.css")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === 'function' && _c) || Object])
    ], EditProductComponent);
    return EditProductComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/Akhil/Desktop/11_FrAuDa_Pi_StudentEventPlatform-master/11_FrAuDa_Pi_StudentEventPlatform-master/src/edit-product.component.js.map

/***/ }),

/***/ "./src/app/components/edit-profile/edit-profile.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/edit-profile/edit-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  edit-profile works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/edit-profile/edit-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EditProfileComponent = (function () {
    function EditProfileComponent() {
    }
    EditProfileComponent.prototype.ngOnInit = function () {
    };
    EditProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edit-profile',
            template: __webpack_require__("./src/app/components/edit-profile/edit-profile.component.html"),
            styles: [__webpack_require__("./src/app/components/edit-profile/edit-profile.component.css")]
        }), 
        __metadata('design:paramtypes', [])
    ], EditProfileComponent);
    return EditProfileComponent;
}());
//# sourceMappingURL=C:/Users/Akhil/Desktop/11_FrAuDa_Pi_StudentEventPlatform-master/11_FrAuDa_Pi_StudentEventPlatform-master/src/edit-profile.component.js.map

/***/ }),

/***/ "./src/app/components/event/event.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/event/event.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"event\">\n    <a class=\"btn btn-secondary btn-sm\" [routerLink]=\"['/events']\" role=\"button\"><i class=\"fas fa-angle-left\"></i> Back</a>\n    <br>\n    <br>\n    <h2 class=\"page-header\">{{event.title}} <small>${{event.price}}</small></h2>\n    <h4 class=\"page-header\">{{event.shortTitle}}</h4>\n    <br>\n    <div class=\"row\">\n        <div class=\"col-md-4\">\n            <img style=\"width:100%\" class=\"thumbnail\" src=\"{{imageUrl}}\">\n        </div>\n        <div class=\"col-md-8\">\n            <ul class=\"list-group\">\n                <li class=\"list-group-item\"><strong>Price:</strong> ${{event.price}}</li>\n                <li class=\"list-group-item\"><strong>Date:</strong> {{event.date}}</li>\n                <li class=\"list-group-item\"><strong>Description:</strong> <br>\n                {{event.description}}</li>\n                <li class=\"list-group-item\"><strong>Location:</strong> {{event.eventLocation}}</li>\n                <li class=\"list-group-item\"><strong>Type:</strong> {{event.type}}</li>\n                <br>\n                <div><a class=\"btn btn-secondary btn-lg\" style=\"color:white;\" a href=\"mailto:{{event.email}}\">Contact {{event.organization}}</a></div>\n            </ul>\n        </div>\n    </div>\n    <br>\n    <br>\n    <a class=\"btn btn-outline-primary\" [routerLink]=\"['/edit-event/'+event.$key]\">Edit</a>\n    <a (click)=\"onDeleteClick()\" class=\"btn btn-outline-danger\">Delete</a>\n</div>\n"

/***/ }),

/***/ "./src/app/components/event/event.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__ = __webpack_require__("./src/app/services/firebase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__("./node_modules/firebase/firebase-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EventComponent = (function () {
    function EventComponent(firebaseService, router, route) {
        this.firebaseService = firebaseService;
        this.router = router;
        this.route = route;
    }
    EventComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Get ID
        this.id = this.route.snapshot.params['id'];
        this.firebaseService.getEventDetails(this.id).subscribe(function (event) {
            _this.event = event;
            var storageRef = __WEBPACK_IMPORTED_MODULE_3_firebase__["storage"]().ref();
            var spaceRef = storageRef.child(_this.event.path);
            storageRef.child(_this.event.path).getDownloadURL().then(function (url) {
                // Set image url
                _this.imageUrl = url;
            }).catch(function (error) {
                console.log(error);
            });
        });
    };
    EventComponent.prototype.onDeleteClick = function () {
        this.firebaseService.deleteEvent(this.id);
        this.router.navigate(['/events']);
    };
    EventComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-event',
            template: __webpack_require__("./src/app/components/event/event.component.html"),
            styles: [__webpack_require__("./src/app/components/event/event.component.css")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === 'function' && _c) || Object])
    ], EventComponent);
    return EventComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/Akhil/Desktop/11_FrAuDa_Pi_StudentEventPlatform-master/11_FrAuDa_Pi_StudentEventPlatform-master/src/event.component.js.map

/***/ }),

/***/ "./src/app/components/events/events.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/events/events.component.html":
/***/ (function(module, exports) {

module.exports = "<input type=\"text\" (keydown)=\"search($event)\" placeholder=\"Search events...\" class=\"form-control\">\n\n<div *ngIf=\"events?.length < 1\">\n<hr>\n    <p>No results found :/</p>\n</div>\n\n<div *ngFor=\"let event of events\" [routerLink]=\"[event.$key]\">\n    <div ng-repeat=\"event in events\">\n        <br>\n        <br>\n        <div class=\"media\">\n          <img data-src=\"holder.js/32x32?theme=thumb&amp;bg=007bff&amp;fg=007bff&amp;size=1\" alt=\"128x128\" class=\"mr-2 rounded\" src=\"https://firebasestorage.googleapis.com/v0/b/dragonquad-32573.appspot.com/o/eventImages%2F{{event.userId}}{{event.image}}?alt=media&token=086927bc-5ef4-4b9b-b9d2-d8c157725f43\" data-holder-rendered=\"true\" style=\"width: 256px; height: '100%';\">\n          <div class=\"media-body pb-3 mb-0\">\n            <div class=\"d-flex justify-content-between align-items-center w-100\">\n              <a [routerLink]=\"['/event/'+event.$key]\"><strong class=\"text\">{{event.title}}</strong></a>\n              <strong>${{event.price}}</strong>\n              </div>\n              <div class=\"d-flex justify-content-between align-items-center w-100\">\n                  <span>{{event.shortTitle}}</span>\n              </div>\n              <br>\n              <br>\n              <br>\n              <br>\n              <br>\n              <br>\n              <br>\n              <div>\n              <small class=\"text\"><i class=\"fas fa-location-arrow\"></i> {{event.eventLocation}}</small>\n            <br>\n              <small class=\"text\"><i class=\"fas fa-calendar-alt\"></i> {{event.date}}</small>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/events/events.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__ = __webpack_require__("./src/app/services/firebase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_search_service__ = __webpack_require__("./src/app/services/search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__("./node_modules/firebase/firebase-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EventsComponent = (function () {
    function EventsComponent(searchSvc, firebaseService, router, route) {
        this.searchSvc = searchSvc;
        this.firebaseService = firebaseService;
        this.router = router;
        this.route = route;
        this.startAt = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["b" /* Subject */]();
        this.endAt = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["b" /* Subject */]();
    }
    EventsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchSvc.getEvents(this.startAt, this.endAt)
            .subscribe(function (events) { return _this.events = events; });
        // Get ID
        this.id = this.route.snapshot.params['id'];
        this.firebaseService.getEvents(this.id).subscribe(function (events) {
            console.log(events);
            _this.events = events;
            var storageRef = __WEBPACK_IMPORTED_MODULE_5_firebase__["storage"]().ref();
            var spaceRef = storageRef.child(_this.events.path);
            storageRef.child(_this.events.path).getDownloadURL().then(function (url) {
                // Set image url
                _this.imageUrl = url;
            }).catch(function (error) {
                console.log(error);
            });
        });
    };
    EventsComponent.prototype.search = function ($event) {
        var q = $event.target.value;
        this.startAt.next(q);
        this.endAt.next(q + "\uf8ff");
    };
    EventsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-events',
            template: __webpack_require__("./src/app/components/events/events.component.html"),
            styles: [__webpack_require__("./src/app/components/events/events.component.css")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_search_service__["a" /* SearchService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_search_service__["a" /* SearchService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */]) === 'function' && _d) || Object])
    ], EventsComponent);
    return EventsComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=C:/Users/Akhil/Desktop/11_FrAuDa_Pi_StudentEventPlatform-master/11_FrAuDa_Pi_StudentEventPlatform-master/src/events.component.js.map

/***/ }),

/***/ "./src/app/components/gig/gig.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/gig/gig.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"gig\">\n    <a class=\"btn btn-secondary btn-sm\" [routerLink]=\"['/gigs']\" role=\"button\"><i class=\"fas fa-angle-left\"></i> Back</a>\n    <br>\n    <br>\n    <h2 class=\"page-header\">{{gig.title}} <small>${{gig.price}}</small></h2>\n    <h4 class=\"page-header\">{{gig.shortTitle}}</h4>\n    <br>\n    <div class=\"row\">\n        <div class=\"col-md-4\">\n            <img style=\"width:100%\" class=\"thumbnail\" src=\"{{imageUrl}}\">\n        </div>\n        <div class=\"col-md-8\">\n            <ul class=\"list-group\">\n                <li class=\"list-group-item\"><strong>Price per Hour:</strong> ${{gig.price}}</li>\n                <li class=\"list-group-item\"><strong>Description:</strong> <br>\n                {{gig.description}}</li>\n                <li class=\"list-group-item\"><strong>Location:</strong> {{gig.location}}</li>\n                <li class=\"list-group-item\"><strong>Type:</strong> {{gig.type}}</li>\n                <li class=\"list-group-item\"><strong>Payment Accepted:</strong> {{gig.payment}}</li>\n                <br>\n                <div><a class=\"btn btn-secondary btn-lg\" style=\"color:white;\" a href=\"mailto:{{gig.email}}\">Contact {{gig.seller}}</a></div>\n                <br>\n                <div><a class=\"btn btn-primary btn-sm\" style=\"color:white;\" href=\"https://m.me/{{gig.messenger}}\"><i class=\"fab fa-facebook-messenger\"></i> Connect with @{{gig.messenger}} on Facebook Messenger</a></div>\n            </ul>\n        </div>\n    </div>\n    <br>\n    <br>\n    <a class=\"btn btn-outline-primary\" [routerLink]=\"['/edit-gig/'+gig.$key]\">Edit</a>\n    <a (click)=\"onDeleteClick()\" class=\"btn btn-outline-danger\">Delete</a>\n</div>\n"

/***/ }),

/***/ "./src/app/components/gig/gig.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GigComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__ = __webpack_require__("./src/app/services/firebase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__("./node_modules/firebase/firebase-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GigComponent = (function () {
    function GigComponent(firebaseService, router, route) {
        this.firebaseService = firebaseService;
        this.router = router;
        this.route = route;
    }
    GigComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Get ID
        this.id = this.route.snapshot.params['id'];
        this.firebaseService.getGigDetails(this.id).subscribe(function (gig) {
            _this.gig = gig;
            var storageRef = __WEBPACK_IMPORTED_MODULE_3_firebase__["storage"]().ref();
            var spaceRef = storageRef.child(_this.gig.path);
            storageRef.child(_this.gig.path).getDownloadURL().then(function (url) {
                // Set image url
                _this.imageUrl = url;
            }).catch(function (error) {
                console.log(error);
            });
        });
    };
    GigComponent.prototype.onDeleteClick = function () {
        this.firebaseService.deleteGig(this.id);
        this.router.navigate(['/gigs']);
    };
    GigComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-gig',
            template: __webpack_require__("./src/app/components/gig/gig.component.html"),
            styles: [__webpack_require__("./src/app/components/gig/gig.component.css")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === 'function' && _c) || Object])
    ], GigComponent);
    return GigComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/Akhil/Desktop/11_FrAuDa_Pi_StudentEventPlatform-master/11_FrAuDa_Pi_StudentEventPlatform-master/src/gig.component.js.map

/***/ }),

/***/ "./src/app/components/gigs/gigs.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/gigs/gigs.component.html":
/***/ (function(module, exports) {

module.exports = "<input type=\"text\" (keydown)=\"search($event)\" placeholder=\"Search gigs...\" class=\"form-control\">\n\n<div *ngIf=\"gigs?.length < 1\">\n<hr>\n    <p>No results found :/</p>\n</div>\n\n<div *ngFor=\"let gig of gigs\" [routerLink]=\"[gig.$key]\">\n    <div ng-repeat=\"gig in gigs\">\n        <br>\n        <br>\n        <div class=\"media\">\n          <img data-src=\"holder.js/32x32?theme=thumb&amp;bg=007bff&amp;fg=007bff&amp;size=1\" alt=\"128x128\" class=\"mr-2 rounded\" src=\"https://firebasestorage.googleapis.com/v0/b/dragonquad-32573.appspot.com/o/gigImages%2F{{gig.userId}}{{gig.image}}?alt=media&token=086927bc-5ef4-4b9b-b9d2-d8c157725f43\" data-holder-rendered=\"true\" style=\"width: 256px; height: '100%';\">\n          <div class=\"media-body pb-3 mb-0\">\n            <div class=\"d-flex justify-content-between align-items-center w-100\">\n              <a [routerLink]=\"['/gig/'+gig.$key]\"><strong class=\"text\">{{gig.title}}</strong></a>\n              <strong>${{gig.price}}/hour</strong>\n              </div>\n              <div class=\"d-flex justify-content-between align-items-center w-100\">\n                  <span>{{gig.shortTitle}}</span>\n                  <span>{{gig.payment}}</span>\n              </div>\n              <br>\n              <br>\n              <br>\n              <br>\n              <br>\n              <div>\n              <small class=\"text\"><i class=\"fas fa-location-arrow\"></i> {{gig.location}}</small>\n            <br>\n              <small class=\"text\"><i class=\"fas fa-angle-double-right\"></i> {{gig.type}}</small>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/gigs/gigs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GigsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__ = __webpack_require__("./src/app/services/firebase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_search_service__ = __webpack_require__("./src/app/services/search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__("./node_modules/firebase/firebase-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GigsComponent = (function () {
    function GigsComponent(searchSvc, firebaseService, router, route) {
        this.searchSvc = searchSvc;
        this.firebaseService = firebaseService;
        this.router = router;
        this.route = route;
        this.startAt = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["b" /* Subject */]();
        this.endAt = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["b" /* Subject */]();
    }
    GigsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchSvc.getGigs(this.startAt, this.endAt)
            .subscribe(function (gigs) { return _this.gigs = gigs; });
        // Get ID
        this.id = this.route.snapshot.params['id'];
        this.firebaseService.getGigs(this.id).subscribe(function (gigs) {
            console.log(gigs);
            _this.gigs = gigs;
            var storageRef = __WEBPACK_IMPORTED_MODULE_5_firebase__["storage"]().ref();
            var spaceRef = storageRef.child(_this.gigs.path);
            storageRef.child(_this.gigs.path).getDownloadURL().then(function (url) {
                // Set image url
                _this.imageUrl = url;
            }).catch(function (error) {
                console.log(error);
            });
        });
    };
    GigsComponent.prototype.search = function ($event) {
        var q = $event.target.value;
        this.startAt.next(q);
        this.endAt.next(q + "\uf8ff");
    };
    GigsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-gigs',
            template: __webpack_require__("./src/app/components/gigs/gigs.component.html"),
            styles: [__webpack_require__("./src/app/components/gigs/gigs.component.css")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_search_service__["a" /* SearchService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_search_service__["a" /* SearchService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */]) === 'function' && _d) || Object])
    ], GigsComponent);
    return GigsComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=C:/Users/Akhil/Desktop/11_FrAuDa_Pi_StudentEventPlatform-master/11_FrAuDa_Pi_StudentEventPlatform-master/src/gigs.component.js.map

/***/ }),

/***/ "./src/app/components/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ".jumbotron {\n    background: url('cover.683bdf0f2fd7b63df383.jpg') no-repeat center;\n    background-size: 100%;\n    width: 100%;\n    height: 500px;\n    text-align: center;\n    -webkit-box-shadow: inset 500px 500px rgba(0, 0, 0, 0.60);\n            box-shadow: inset 500px 500px rgba(0, 0, 0, 0.60);\n}\n.text {\n    color: white;\n}"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\" align=\"center\">\n    <h1 class=\"text\">Student Event Platform</h1>\n    <h4 class=\"text\">Where Students Meet</h4>\n</div>"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__("./node_modules/angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = (function () {
    function HomeComponent(af, flashMessage) {
        this.af = af;
        this.flashMessage = flashMessage;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.login = function () {
        this.af.auth.login();
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/components/home/home.component.html"),
            styles: [__webpack_require__("./src/app/components/home/home.component.css")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2__["a" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angularfire2__["a" /* AngularFire */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/Akhil/Desktop/11_FrAuDa_Pi_StudentEventPlatform-master/11_FrAuDa_Pi_StudentEventPlatform-master/src/home.component.js.map

/***/ }),

/***/ "./src/app/components/housing/housing.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/housing/housing.component.html":
/***/ (function(module, exports) {

module.exports = "<input type=\"text\" (keydown)=\"search($event)\" placeholder=\"Search housing...\" class=\"form-control\">\n\n<div *ngIf=\"listings?.length < 1\">\n<hr>\n    <p>No results found :/</p>\n</div>\n\n<div *ngFor=\"let listing of listings\" [routerLink]=\"[listing.$key]\">\n    <div ng-repeat=\"listing in listings\">\n        <br>\n        <br>\n        <div class=\"media\">\n          <img data-src=\"holder.js/32x32?theme=thumb&amp;bg=007bff&amp;fg=007bff&amp;size=1\" alt=\"128x128\" class=\"mr-2 rounded\" src=\"https://firebasestorage.googleapis.com/v0/b/dragonquad-32573.appspot.com/o/housingImages%2F{{listing.userId}}{{listing.image}}?alt=media&token=086927bc-5ef4-4b9b-b9d2-d8c157725f43\" data-holder-rendered=\"true\" style=\"width: 256px; height: '100%';\">\n          <div class=\"media-body pb-3 mb-0\">\n            <div class=\"d-flex justify-content-between align-items-center w-100\">\n              <a [routerLink]=\"['/listing/'+listing.$key]\"><i class=\"fas fa-location-arrow\"></i> <strong class=\"text\">{{listing.address}}</strong></a>\n              <strong>${{listing.price}}<small class=\"text-muted\"> - month</small></strong>\n              </div>\n              <div class=\"d-flex justify-content-between align-items-center w-100\">\n                  <span>{{listing.shortTitle}}</span>\n                  <span>{{listing.payment}}</span>\n              </div>\n              <br>\n              <br>\n              <br>\n              <br>\n              <br>\n              <br>\n              <br>\n              <div>\n              <small class=\"text\"><i class=\"fas fa-angle-double-right\"></i> {{listing.type}}</small>\n            <br>\n              <small class=\"text\"><i class=\"fas fa-bath\"></i> {{listing.bathroom}}</small>\n            <br>\n              <small><i class=\"fas fa-bed\"></i> {{listing.bedroom}}</small>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/housing/housing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HousingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__ = __webpack_require__("./src/app/services/firebase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_search_service__ = __webpack_require__("./src/app/services/search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__("./node_modules/firebase/firebase-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HousingComponent = (function () {
    function HousingComponent(searchSvc, firebaseService, router, route) {
        this.searchSvc = searchSvc;
        this.firebaseService = firebaseService;
        this.router = router;
        this.route = route;
        this.startAt = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["b" /* Subject */]();
        this.endAt = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["b" /* Subject */]();
    }
    HousingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchSvc.getListings(this.startAt, this.endAt)
            .subscribe(function (listings) { return _this.listings = listings; });
        // Get ID
        this.id = this.route.snapshot.params['id'];
        this.firebaseService.getListings(this.id).subscribe(function (listings) {
            console.log(listings);
            _this.listings = listings;
            var storageRef = __WEBPACK_IMPORTED_MODULE_5_firebase__["storage"]().ref();
            var spaceRef = storageRef.child(_this.listings.path);
            storageRef.child(_this.listings.path).getDownloadURL().then(function (url) {
                // Set image url
                _this.imageUrl = url;
            }).catch(function (error) {
                console.log(error);
            });
        });
    };
    HousingComponent.prototype.search = function ($event) {
        var q = $event.target.value;
        this.startAt.next(q);
        this.endAt.next(q + "\uf8ff");
    };
    HousingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-housing',
            template: __webpack_require__("./src/app/components/housing/housing.component.html"),
            styles: [__webpack_require__("./src/app/components/housing/housing.component.css")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_search_service__["a" /* SearchService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_search_service__["a" /* SearchService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */]) === 'function' && _d) || Object])
    ], HousingComponent);
    return HousingComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=C:/Users/Akhil/Desktop/11_FrAuDa_Pi_StudentEventPlatform-master/11_FrAuDa_Pi_StudentEventPlatform-master/src/housing.component.js.map

/***/ }),

/***/ "./src/app/components/how-it-works/how-it-works.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/how-it-works/how-it-works.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <div align=\"center\">\n        <h2>For students to exchange Infomation and collaborate on one platform</h2>\n        <img src=\"/../../../assets/img/phila.jpg\" width=75%>\n        <br>\n        <br>\n        <p>This is a online platform made for students by students. It is built around the idea of \"Trust.\"</p>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/how-it-works/how-it-works.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HowItWorksComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HowItWorksComponent = (function () {
    function HowItWorksComponent() {
    }
    HowItWorksComponent.prototype.ngOnInit = function () {
    };
    HowItWorksComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-how-it-works',
            template: __webpack_require__("./src/app/components/how-it-works/how-it-works.component.html"),
            styles: [__webpack_require__("./src/app/components/how-it-works/how-it-works.component.css")]
        }), 
        __metadata('design:paramtypes', [])
    ], HowItWorksComponent);
    return HowItWorksComponent;
}());
//# sourceMappingURL=C:/Users/Akhil/Desktop/11_FrAuDa_Pi_StudentEventPlatform-master/11_FrAuDa_Pi_StudentEventPlatform-master/src/how-it-works.component.js.map

/***/ }),

/***/ "./src/app/components/listing/listing.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/listing/listing.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"listing\">\n    <a class=\"btn btn-secondary btn-sm\" [routerLink]=\"['/housing']\" role=\"button\"><i class=\"fas fa-angle-left\"></i> Back</a>\n    <br>\n    <br>\n    <h2 class=\"page-header\">{{listing.address}} &nbsp;&nbsp;<small>${{listing.price}}/month</small></h2>\n    <h4 class=\"page-header\">{{listing.shortTitle}}</h4>\n    <h4 class=\"page-header\">{{listing.address}}</h4>\n    <br>\n    <div class=\"row\">\n        <div class=\"col-md-4\">\n            <img style=\"width:100%\" class=\"thumbnail\" src=\"{{imageUrl}}\">\n        </div>\n        <div class=\"col-md-8\">\n            <ul class=\"list-group\">\n                <li class=\"list-group-item\"><strong>Type:</strong> {{listing.type}}</li>\n                <li class=\"list-group-item\"><strong>Price:</strong> ${{listing.price}}/month</li>\n                <li class=\"list-group-item\"><strong>Bedroom(s):</strong> {{listing.bedroom}}</li>\n                <li class=\"list-group-item\"><strong>Bathroom(s):</strong> {{listing.bathroom}}</li>\n                <li class=\"list-group-item\"><strong>Description:</strong> <br>\n            {{listing.description}}</li>\n                <li class=\"list-group-item\"><strong>Map:</strong> <iframe\n                                                                          width=\"600\"\n                                                                          height=\"450\"\n                                                                          frameborder=\"0\" style=\"border:0\"\n                                                                          [src]=\"trustedMapUrl\" allowfullscreen></iframe></li>\n                <li class=\"list-group-item\"><strong>Address:</strong> {{listing.address}}</li>\n                <li class=\"list-group-item\"><strong>Square Feet:</strong> {{listing.sqft}} sqft</li>\n                <li class=\"list-group-item\"><strong>Date Available:</strong> {{listing.date}} - YYYY/MM/DD</li>\n                <br>\n                <div><a class=\"btn btn-primary btn-sm\" style=\"color:white;\" href=\"https://m.me/{{listing.messenger}}\"><i class=\"fab fa-facebook-messenger\"></i> Connect with @{{listing.messenger}} on Facebook Messenger</a></div>\n            </ul>\n        </div>\n    </div>\n    <br>\n    <br>\n    <a class=\"btn btn-outline-primary\" [routerLink]=\"['/edit-listing/'+listing.$key]\">Edit</a>\n    <a (click)=\"onDeleteClick()\" class=\"btn btn-outline-danger\">Delete</a>\n</div>\n"

/***/ }),

/***/ "./src/app/components/listing/listing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__ = __webpack_require__("./src/app/services/firebase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__("./node_modules/firebase/firebase-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ListingComponent = (function () {
    function ListingComponent(firebaseService, router, route, db, sanitizer) {
        this.firebaseService = firebaseService;
        this.router = router;
        this.route = route;
        this.db = db;
        this.sanitizer = sanitizer;
        this.dangerousMapUrl = 'https://www.google.com/maps/embed/v1/place?key=AIzaSyB_JDiRjg-J7QDbQYpbRPForKegV_Qe7pc&q=' + '3121 Hamilton Ave. Philadelphia, PA 19104';
        this.trustedMapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.dangerousMapUrl);
    }
    ListingComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Get ID
        this.id = this.route.snapshot.params['id'];
        this.firebaseService.getListingDetails(this.id).subscribe(function (listing) {
            _this.listing = listing;
            var storageRef = __WEBPACK_IMPORTED_MODULE_5_firebase__["storage"]().ref();
            var spaceRef = storageRef.child(_this.listing.path);
            storageRef.child(_this.listing.path).getDownloadURL().then(function (url) {
                // Set image url
                _this.imageUrl = url;
            }).catch(function (error) {
                console.log(error);
            });
        });
    };
    ListingComponent.prototype.onDeleteClick = function () {
        this.firebaseService.deleteListing(this.id);
        this.router.navigate(['/housing']);
    };
    ListingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-listing',
            template: __webpack_require__("./src/app/components/listing/listing.component.html"),
            styles: [__webpack_require__("./src/app/components/listing/listing.component.css")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* DomSanitizer */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* DomSanitizer */]) === 'function' && _e) || Object])
    ], ListingComponent);
    return ListingComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=C:/Users/Akhil/Desktop/11_FrAuDa_Pi_StudentEventPlatform-master/11_FrAuDa_Pi_StudentEventPlatform-master/src/listing.component.js.map

/***/ }),

/***/ "./src/app/components/login/login.component.css":
/***/ (function(module, exports) {

module.exports = "input[type=\"text\"]:valid {\n    color: green;\n}\n\ninput[type=\"text\"]:invalid {\n    color: red;\n}\n\ninput[type=\"password\"]:valid {\n    color: green;\n}\n\ninput[type=\"password\"]:invalid {\n    color: red;\n}"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"form-container\">\n    <a class=\"btn btn-secondary btn-sm\" [routerLink]=\"['/']\" role=\"button\"><i class=\"fas fa-angle-left\"></i> Go Back</a>\n    <br>\n    <br>\n    <h2>Login</h2>\n    <span class=\"error\" *ngIf=\"error\"></span>\n    <br>\n    <form #formData='ngForm' (ngSubmit)=\"onSubmit(formData)\">\n        <input type=\"text\" placeholder=\"Email Address\" (ngModel)=\"email\" name=\"email\" class=\"form-control\" required>\n        <br>\n        <input type=\"password\" placeholder=\"Password\" (ngModel)=\"password\" name=\"password\" class=\"form-control\" required>\n        <br>\n        <button type=\"submit\" [disabled]=\"!formData.valid\" class=\"btn btn-success btn-sm\">Log In!</button>\n        <br>\n        <br>\n        <br>\n        <a class=\"btn btn-primary btn-sm\" [routerLink]=\"['/register']\">Don't have an account?</a>\n    </form>\n</div>"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__("./node_modules/angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(af, router, flashMessage) {
        var _this = this;
        this.af = af;
        this.router = router;
        this.flashMessage = flashMessage;
        this.af.auth.subscribe(function (auth) {
            if (auth) {
                _this.router.navigateByUrl('/home');
            }
        });
    }
    LoginComponent.prototype.onSubmit = function (formData) {
        var _this = this;
        if (formData.valid) {
            console.log(formData.value);
            this.af.auth.login({
                email: formData.value.email,
                password: formData.value.password
            }, {
                provider: __WEBPACK_IMPORTED_MODULE_1_angularfire2__["e" /* AuthProviders */].Password,
                method: __WEBPACK_IMPORTED_MODULE_1_angularfire2__["d" /* AuthMethods */].Password,
            }).then(function (success) {
                console.log(success);
                _this.flashMessage.show('Success! You are now logged in!', { cssClass: 'alert-success', timeout: 5000 });
                _this.router.navigate(['/']);
            }).catch(function (err) {
                console.log(err);
                _this.error = err;
            });
        }
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/components/login/login.component.html"),
            styles: [__webpack_require__("./src/app/components/login/login.component.css")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2__["a" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angularfire2__["a" /* AngularFire */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/Akhil/Desktop/11_FrAuDa_Pi_StudentEventPlatform-master/11_FrAuDa_Pi_StudentEventPlatform-master/src/login.component.js.map

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark\">\n    <a class=\"navbar-brand\" [routerLink]=\"['/']\">Student Event Platform</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarCollapse\" aria-controls=\"navbarCollapse\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n          <span class=\"navbar-toggler-icon\"></span>\n        </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarCollapse\">\n        <ul class=\"navbar-nav mr-auto\">\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" [routerLink]=\"['/']\">Home <span class=\"sr-only\">(current)</span></a>\n            </li>\n            <li class=\"nav-item\">\n                <a *ngIf=\"!(af.auth | async)\" class=\"nav-link\" [routerLink]=\"['/how-it-works']\">How It Works</a>\n            </li>\n            <li class=\"nav-item\">\n                <a *ngIf=\"(af.auth | async)\" class=\"nav-link\" [routerLink]=\"['/products']\">Products</a>\n            </li>\n            <li class=\"nav-item\">\n                <a *ngIf=\"(af.auth | async)\" class=\"nav-link\" [routerLink]=\"['/housing']\">Housing</a>\n            </li>\n            <li class=\"nav-item\">\n                <a *ngIf=\"(af.auth | async)\" class=\"nav-link\" [routerLink]=\"['/events']\">Events</a>\n            </li>\n            <li class=\"nav-item\">\n                <a *ngIf=\"(af.auth | async)\" class=\"nav-link\" [routerLink]=\"['/gigs']\">Gigs</a>\n            </li>\n        </ul>\n        <a *ngIf=\"(af.auth | async)\" class=\"btn btn-outline-success my-2 my-sm-0\" [routerLink]=\"['/add-product']\" role=\"button\">Add Product</a>\n        <a *ngIf=\"(af.auth | async)\" class=\"btn btn-outline-success my-2 my-sm-0\" [routerLink]=\"['/add-housing']\" role=\"button\">Add Housing</a>\n        <a *ngIf=\"(af.auth | async)\" class=\"btn btn-outline-success my-2 my-sm-0\" [routerLink]=\"['/add-event']\" role=\"button\">Add Event</a>\n        <a *ngIf=\"(af.auth | async)\" class=\"btn btn-outline-success my-2 my-sm-0\" [routerLink]=\"['/add-gig']\" role=\"button\">Add Gig</a>\n        <a *ngIf=\"!(af.auth | async)\" class=\"btn btn-outline-success my-2 my-sm-0\" [routerLink]=\"['/login']\" role=\"button\">Login</a>\n        <a *ngIf=\"(af.auth | async)\" class=\"btn btn-outline-success my-2 my-sm-0\" style=\"color:white;\" (click)=\"logout()\" role=\"button\">Logout</a>\n        <a *ngIf=\"!(af.auth | async)\" class=\"btn btn-outline-success my-2 my-sm-0\" [routerLink]=\"['/register']\" role=\"button\">Register</a>\n        <li class=\"nav-item\">\n            <a *ngIf=\"(af.auth | async)\" [routerLink]=\"['/profile']\" style=\"color:white;\" class=\"btn btn-outline-secondary\">\n                <img src=\"https://static1.squarespace.com/static/58fb0155d1758eec4bb612b0/t/5a662961f9619a1761ff4a30/1516644709050/Kevin+Wong+Potrait.jpg?format=300w\" width=24px class=\"profile-image\"> &nbsp;Profile</a>\n    </div>\n</nav>"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__("./node_modules/angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = (function () {
    function NavbarComponent(af, router, flashMessage) {
        this.af = af;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.login = function () {
        this.af.auth.login();
    };
    NavbarComponent.prototype.logout = function () {
        var _this = this;
        this.af.auth.logout().then(function (success) { _this.router.navigate(['/']); });
        this.flashMessage.show('Success! You are now logged out!', { cssClass: 'alert-success', timeout: 3000 });
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/components/navbar/navbar.component.css")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2__["a" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angularfire2__["a" /* AngularFire */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object])
    ], NavbarComponent);
    return NavbarComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/Akhil/Desktop/11_FrAuDa_Pi_StudentEventPlatform-master/11_FrAuDa_Pi_StudentEventPlatform-master/src/navbar.component.js.map

/***/ }),

/***/ "./src/app/components/product/product.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/product/product.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"product\">\n    <a class=\"btn btn-secondary btn-sm\" [routerLink]=\"['/products']\" role=\"button\"><i class=\"fas fa-angle-left\"></i> Back</a>\n    <br>\n    <br>\n    <h2 class=\"page-header\">{{product.title}} <small>${{product.price}}</small></h2>\n    <h4 class=\"page-header\">{{product.shortTitle}}</h4>\n    <br>\n    <div class=\"row\">\n        <div class=\"col-md-4\">\n            <img style=\"width:100%\" class=\"thumbnail\" src=\"{{imageUrl}}\">\n        </div>\n        <div class=\"col-md-8\">\n            <ul class=\"list-group\">\n                <li class=\"list-group-item\"><strong>Price:</strong> ${{product.price}}</li>\n                <li class=\"list-group-item\"><strong>Condition:</strong> {{product.condition}}</li>\n                <li class=\"list-group-item\"><strong>Description:</strong> <br>\n            {{product.description}}</li>\n                <li class=\"list-group-item\"><strong>Type:</strong> {{product.listingType}}</li>\n                <li class=\"list-group-item\"><strong>Price:</strong> {{product.price}}</li>\n                <li class=\"list-group-item\"><strong>Price:</strong> {{product.userLocation}}</li>\n                <li class=\"list-group-item\"><strong>Payment Accepted:</strong> {{product.payment}}</li>\n                <br>\n                <div><a class=\"btn btn-secondary btn-lg\" style=\"color:white;\" href=\"https://www.paypal.me/{{product.paypal}}/{{product.price}}\">Pay Now</a></div>\n                <br>\n                <div><a class=\"btn btn-primary btn-sm\" style=\"color:white;\" href=\"https://m.me/{{product.messenger}}\"><i class=\"fab fa-facebook-messenger\"></i> Connect with @{{product.messenger}} on Facebook Messenger</a></div>\n                \n            </ul>\n        </div>\n    </div>\n    <br>\n    <br>\n    <a class=\"btn btn-outline-primary\" [routerLink]=\"['/edit-product/'+product.$key]\">Edit</a>\n    <a (click)=\"onDeleteClick()\" class=\"btn btn-outline-danger\">Delete</a>\n</div>\n"

/***/ }),

/***/ "./src/app/components/product/product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__ = __webpack_require__("./src/app/services/firebase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__("./node_modules/firebase/firebase-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductComponent = (function () {
    function ProductComponent(firebaseService, router, route) {
        this.firebaseService = firebaseService;
        this.router = router;
        this.route = route;
    }
    ProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Get ID
        this.id = this.route.snapshot.params['id'];
        this.firebaseService.getProductDetails(this.id).subscribe(function (product) {
            _this.product = product;
            var storageRef = __WEBPACK_IMPORTED_MODULE_3_firebase__["storage"]().ref();
            var spaceRef = storageRef.child(_this.product.path);
            storageRef.child(_this.product.path).getDownloadURL().then(function (url) {
                // Set image url
                _this.imageUrl = url;
            }).catch(function (error) {
                console.log(error);
            });
        });
    };
    ProductComponent.prototype.onDeleteClick = function () {
        this.firebaseService.deleteProduct(this.id);
        this.router.navigate(['/products']);
    };
    ProductComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-product',
            template: __webpack_require__("./src/app/components/product/product.component.html"),
            styles: [__webpack_require__("./src/app/components/product/product.component.css")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === 'function' && _c) || Object])
    ], ProductComponent);
    return ProductComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/Akhil/Desktop/11_FrAuDa_Pi_StudentEventPlatform-master/11_FrAuDa_Pi_StudentEventPlatform-master/src/product.component.js.map

/***/ }),

/***/ "./src/app/components/products/products.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/products/products.component.html":
/***/ (function(module, exports) {

module.exports = "<input type=\"text\" (keydown)=\"search($event)\" placeholder=\"Search products...\" class=\"form-control\">\n\n<div *ngIf=\"products?.length < 1\">\n<hr>\n    <p>No results found :/</p>\n</div>\n\n<div *ngFor=\"let product of products\" [routerLink]=\"[product.$key]\">\n    <div ng-repeat=\"product in products\">\n        <br>\n        <br>\n        <div class=\"media\">\n          <img data-src=\"holder.js/32x32?theme=thumb&amp;bg=007bff&amp;fg=007bff&amp;size=1\" alt=\"128x128\" class=\"mr-2 rounded\" src=\"https://firebasestorage.googleapis.com/v0/b/dragonquad-32573.appspot.com/o/productImages%2F{{product.userId}}{{product.image}}?alt=media&token=086927bc-5ef4-4b9b-b9d2-d8c157725f43\" data-holder-rendered=\"true\" style=\"width: 256px; height: '100%';\">\n          <div class=\"media-body pb-3 mb-0\">\n            <div class=\"d-flex justify-content-between align-items-center w-100\">\n              <a [routerLink]=\"['/product/'+product.$key]\"><strong class=\"text\">{{product.title}}</strong></a>\n              <strong>${{product.price}}</strong>\n              </div>\n              <div class=\"d-flex justify-content-between align-items-center w-100\">\n                  <span>{{product.shortTitle}}</span>\n                  <span>{{product.payment}}</span>\n              </div>\n              <br>\n              <br>\n              <br>\n              <br>\n              <br>\n              <br>\n              <br>\n              <br>\n              <br>\n              <div>\n              <small class=\"text\"><i class=\"fas fa-location-arrow\"></i> {{product.userLocation}}</small>\n            <br>\n              <small><i class=\"fas fa-angle-double-right\"></i> {{product.listingType}}</small>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/products/products.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__ = __webpack_require__("./src/app/services/firebase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_search_service__ = __webpack_require__("./src/app/services/search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__("./node_modules/firebase/firebase-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProductsComponent = (function () {
    function ProductsComponent(searchSvc, firebaseService, router, route) {
        this.searchSvc = searchSvc;
        this.firebaseService = firebaseService;
        this.router = router;
        this.route = route;
        this.startAt = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["b" /* Subject */]();
        this.endAt = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["b" /* Subject */]();
    }
    ProductsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchSvc.getProducts(this.startAt, this.endAt)
            .subscribe(function (products) { return _this.products = products; });
        // Get ID
        this.id = this.route.snapshot.params['id'];
        this.firebaseService.getProducts(this.id).subscribe(function (products) {
            console.log(products);
            _this.products = products;
            var storageRef = __WEBPACK_IMPORTED_MODULE_5_firebase__["storage"]().ref();
            var spaceRef = storageRef.child(_this.products.path);
            storageRef.child(_this.products.path).getDownloadURL().then(function (url) {
                // Set image url
                _this.imageUrl = url;
            }).catch(function (error) {
                console.log(error);
            });
        });
    };
    ProductsComponent.prototype.search = function ($event) {
        var q = $event.target.value;
        this.startAt.next(q);
        this.endAt.next(q + "\uf8ff");
    };
    ProductsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-products',
            template: __webpack_require__("./src/app/components/products/products.component.html"),
            styles: [__webpack_require__("./src/app/components/products/products.component.css")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_search_service__["a" /* SearchService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_search_service__["a" /* SearchService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */]) === 'function' && _d) || Object])
    ], ProductsComponent);
    return ProductsComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=C:/Users/Akhil/Desktop/11_FrAuDa_Pi_StudentEventPlatform-master/11_FrAuDa_Pi_StudentEventPlatform-master/src/products.component.js.map

/***/ }),

/***/ "./src/app/components/profile/profile.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<i class=\"far fa-id-card\"></i> <strong>User UID:</strong> {{this.userId}}\n\n<h2>Kevin Wong</h2>\n    <div class=\"row\">\n        <div class=\"col-md-4\">\n            <img style=\"width:100%\" class=\"thumbnail\" src=\"https://static1.squarespace.com/static/58fb0155d1758eec4bb612b0/t/5a662961f9619a1761ff4a30/1516644709050/Kevin+Wong+Potrait.jpg?format=300w\">\n        </div>\n        <div class=\"col-md-8\">\n            <ul class=\"list-group\">\n                <li class=\"list-group-item\"><strong>Location:</strong> Philadelphia, PA</li>\n                <li class=\"list-group-item\"><strong>PayPal ID:</strong> KevinWong</li>\n                <li class=\"list-group-item\"><strong>Facebook Messenger:</strong> @dotKevinWong</li>\n            </ul>\n            <br>\n            <a class=\"btn btn-outline-primary\">Edit</a>\n        </div>\n    </div>\n<br>\n<h2>Your Listings: </h2>\n<div *ngFor=\"let product of products\" [routerLink]=\"[product.$key]\">\n<div ng-repeat=\"product in products\">\n    <div class=\"row\" ng-if=\"$even\">\n        <div class=\"col-md-4\">\n            <div class=\"card mb-4 box-shadow\">\n                <img class=\"card-img-top\" alt=\"Image Not Found\" style=\" height: 300px; width: 100%; object-fit: contain; display: block;\" src=\"https://firebasestorage.googleapis.com/v0/b/dragonquad-32573.appspot.com/o/productImages%2F{{product.userId}}{{product.image}}?alt=media&token=086927bc-5ef4-4b9b-b9d2-d8c157725f43\">\n                <div class=\"card-body\">\n                    <strong class=\"title\">{{product.title}}</strong>\n                    <br>\n                    <p class=\"card-text\">{{product.shortTitle}}</p>\n                    <div class=\"d-flex justify-content-between align-items-center\">\n                        <div><i class=\"fas fa-angle-double-right\"></i> {{product.listingType}}</div>\n                        <div>\n                            <strong class=\"text\">${{product.price}}</strong>     <small     class=\"text-muted\">- {{product.payment}}</small>\n                        </div>\n                    </div>\n                    <div class=\"d-flex justify-content-between align-items-center\">\n                        <div class=\"btn-group\">\n                            <button type=\"button\" class=\"btn btn-sm btn-primary\" [routerLink]=\"['/product/'+product.$key]\">View</button>\n                        </div>\n                    <div>\n                        <small class=\"text\"><i class=\"fas fa-location-arrow\"></i> {{product.userLocation}}</small>\n                    </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__ = __webpack_require__("./src/app/services/firebase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2__ = __webpack_require__("./node_modules/angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileComponent = (function () {
    function ProfileComponent(af, router, firebaseService, route) {
        var _this = this;
        this.af = af;
        this.router = router;
        this.firebaseService = firebaseService;
        this.route = route;
        this.af.auth.subscribe(function (user) {
            if (user)
                _this.userId = user.uid;
        });
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Get ID
        this.id = this.route.snapshot.params['id'];
        this.firebaseService.getProducts(this.id).subscribe(function (products) {
            console.log(products);
            _this.products = products;
        });
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__("./src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__("./src/app/components/profile/profile.component.css")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2__["a" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angularfire2__["a" /* AngularFire */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === 'function' && _d) || Object])
    ], ProfileComponent);
    return ProfileComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=C:/Users/Akhil/Desktop/11_FrAuDa_Pi_StudentEventPlatform-master/11_FrAuDa_Pi_StudentEventPlatform-master/src/profile.component.js.map

/***/ }),

/***/ "./src/app/components/register/register.component.css":
/***/ (function(module, exports) {

module.exports = "input[type=\"text\"]:valid {\n    color: green;\n}\n\ninput[type=\"text\"]:invalid {\n    color: red;\n}\n\ninput[type=\"password\"]:valid {\n    color: green;\n}\n\ninput[type=\"password\"]:invalid {\n    color: red;\n}"

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"form-container\">\n    <a class=\"btn btn-secondary btn-sm\" [routerLink]=\"['/login']\" role=\"button\"><i class=\"fas fa-angle-left\"></i> Go Back</a>\n    <br>\n    <br>\n    <h2>Register</h2>\n    <br>\n    <span class=\"error\" *ngIf=\"error\"></span>\n    <form #formData='ngForm' (ngSubmit)=\"onSubmit(formData)\">\n        <input type=\"text\" placeholder=\"Email Address\" (ngModel)=\"email\" name=\"email\" class=\"form-control\" pattern=\"[a-z0-9._%+-]+@drexel.edu\" required>\n        <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else. You must use a @drexel.edu e-mail address.</small>\n        <br>\n        <input type=\"password\" placeholder=\"Password\" (ngModel)=\"password\" name=\"password\" class=\"form-control\" pattern=\"(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}\" required>\n        <small id=\"passwordHelp\" class=\"form-text text-muted\">Your password must contain at least one number, one uppercase letter, and at least 8 or more characters.</small>\n        <br>\n        <i class=\"fas fa-check\" *ngIf=\"formData.valid\" color=\"green\"></i>&nbsp;<small *ngIf=\"formData.valid\">You can now sign up!</small>\n        <br>\n        <button type=\"submit\" [disabled]=\"!formData.valid\" class=\"btn btn-success btn-sm\"> Create Account</button>\n    </form>\n</div>"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__("./node_modules/angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = (function () {
    function RegisterComponent(af, router, flashMessage) {
        this.af = af;
        this.router = router;
        this.flashMessage = flashMessage;
        this.state = '';
    }
    RegisterComponent.prototype.onSubmit = function (formData) {
        var _this = this;
        if (formData.valid) {
            console.log(formData.value);
            this.af.auth.createUser({
                email: formData.value.email,
                password: formData.value.password
            }).then(function (success) {
                console.log(success);
                _this.flashMessage.show('Success! You have successfully created an account!', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/']);
            }).catch(function (err) {
                console.log(err);
                _this.flashMessage.show('Sorry! That e-mail is already in use.', { cssClass: 'alert-danger', timeout: 10000 });
                _this.error = err;
            });
        }
    };
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("./src/app/components/register/register.component.html"),
            styles: [__webpack_require__("./src/app/components/register/register.component.css")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2__["a" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angularfire2__["a" /* AngularFire */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/Akhil/Desktop/11_FrAuDa_Pi_StudentEventPlatform-master/11_FrAuDa_Pi_StudentEventPlatform-master/src/register.component.js.map

/***/ }),

/***/ "./src/app/components/search/search.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Product Search</h1>\n\n<input type=\"text\" (keydown)=\"search($event)\" placeholder=\"search products...\" class=\"input\">\n\n<div *ngFor=\"let product of products\">\n    <h4>{{product?.title}}</h4>\n    <p>\n        {{product?.description}}\n    </p>\n</div>\n\n<div *ngIf=\"products?.length < 1\">\n<hr>\n    <p>No results found :/</p>\n</div>"

/***/ }),

/***/ "./src/app/components/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_search_service__ = __webpack_require__("./src/app/services/search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchComponent = (function () {
    function SearchComponent(searchSvc, router, route) {
        this.searchSvc = searchSvc;
        this.router = router;
        this.route = route;
        this.startAt = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["b" /* Subject */]();
        this.endAt = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["b" /* Subject */]();
    }
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchSvc.getProducts(this.startAt, this.endAt)
            .subscribe(function (products) { return _this.products = products; });
    };
    SearchComponent.prototype.search = function ($event) {
        var q = $event.target.value;
        this.startAt.next(q);
        this.endAt.next(q + "\uf8ff");
    };
    SearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-search',
            template: __webpack_require__("./src/app/components/search/search.component.html"),
            styles: [__webpack_require__("./src/app/components/search/search.component.css")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_search_service__["a" /* SearchService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_search_service__["a" /* SearchService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === 'function' && _c) || Object])
    ], SearchComponent);
    return SearchComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/Akhil/Desktop/11_FrAuDa_Pi_StudentEventPlatform-master/11_FrAuDa_Pi_StudentEventPlatform-master/src/search.component.js.map

/***/ }),

/***/ "./src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2__ = __webpack_require__("./node_modules/angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_take__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/take.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AuthService = (function () {
    function AuthService(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthService.prototype.canActivate = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["a" /* Observable */].from(this.auth)
            .take(1)
            .map(function (state) { return !!state; })
            .do(function (authenticated) {
            if (!authenticated)
                _this.router.navigate(['/login']);
        });
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2__["b" /* AngularFireAuth */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angularfire2__["b" /* AngularFireAuth */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], AuthService);
    return AuthService;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/Akhil/Desktop/11_FrAuDa_Pi_StudentEventPlatform-master/11_FrAuDa_Pi_StudentEventPlatform-master/src/auth.service.js.map

/***/ }),

/***/ "./src/app/services/firebase.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2__ = __webpack_require__("./node_modules/angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__("./node_modules/firebase/firebase-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FirebaseService = (function () {
    function FirebaseService(af, db) {
        var _this = this;
        this.af = af;
        this.db = db;
        this.productFolder = 'productImages';
        this.housingFolder = 'housingImages';
        this.eventFolder = 'eventImages';
        this.gigFolder = 'gigImages';
        this.products = this.af.database.list('/products');
        this.listings = this.af.database.list('/listings');
        this.events = this.af.database.list('/events');
        this.gigs = this.af.database.list('/gigs');
        this.af.auth.subscribe(function (user) {
            if (user)
                _this.userId = user.uid;
        });
    }
    FirebaseService.prototype.getProducts = function (id) {
        return this.products;
    };
    FirebaseService.prototype.getListings = function (id) {
        return this.listings;
    };
    FirebaseService.prototype.getEvents = function (id) {
        return this.events;
    };
    FirebaseService.prototype.getGigs = function (id) {
        return this.gigs;
    };
    FirebaseService.prototype.getProductDetails = function (id) {
        this.product = this.af.database.object('/products/' + id);
        return this.product;
    };
    FirebaseService.prototype.getListingDetails = function (id) {
        this.listing = this.af.database.object('/listings/' + id);
        return this.listing;
    };
    FirebaseService.prototype.getEventDetails = function (id) {
        this.event = this.af.database.object('/events/' + id);
        return this.event;
    };
    FirebaseService.prototype.getGigDetails = function (id) {
        this.gig = this.af.database.object('/gigs/' + id);
        return this.gig;
    };
    FirebaseService.prototype.addProduct = function (product) {
        var _this = this;
        // Create root ref
        var storageRef = __WEBPACK_IMPORTED_MODULE_3_firebase__["storage"]().ref();
        var _loop_1 = function(selectedFile) {
            var path = "/" + this_1.productFolder + "/" + this_1.userId + selectedFile.name;
            var iRef = storageRef.child(path);
            iRef.put(selectedFile).then(function (snapshot) {
                product.image = selectedFile.name;
                product.path = path;
                product.userId = _this.userId;
                return _this.products.push(product);
            });
        };
        var this_1 = this;
        for (var _i = 0, _a = [document.getElementById('image').files[0]]; _i < _a.length; _i++) {
            var selectedFile = _a[_i];
            _loop_1(selectedFile);
        }
    };
    FirebaseService.prototype.addListing = function (listing) {
        var _this = this;
        // Create root ref
        var storageRef = __WEBPACK_IMPORTED_MODULE_3_firebase__["storage"]().ref();
        var _loop_2 = function(selectedFile) {
            var path = "/" + this_2.housingFolder + "/" + this_2.userId + selectedFile.name;
            var iRef = storageRef.child(path);
            iRef.put(selectedFile).then(function (snapshot) {
                listing.image = selectedFile.name;
                listing.path = path;
                listing.userId = _this.userId;
                return _this.listings.push(listing);
            });
        };
        var this_2 = this;
        for (var _i = 0, _a = [document.getElementById('image').files[0]]; _i < _a.length; _i++) {
            var selectedFile = _a[_i];
            _loop_2(selectedFile);
        }
    };
    FirebaseService.prototype.addEvent = function (event) {
        var _this = this;
        // Create root ref
        var storageRef = __WEBPACK_IMPORTED_MODULE_3_firebase__["storage"]().ref();
        var _loop_3 = function(selectedFile) {
            var path = "/" + this_3.eventFolder + "/" + this_3.userId + selectedFile.name;
            var iRef = storageRef.child(path);
            iRef.put(selectedFile).then(function (snapshot) {
                event.image = selectedFile.name;
                event.path = path;
                event.userId = _this.userId;
                return _this.events.push(event);
            });
        };
        var this_3 = this;
        for (var _i = 0, _a = [document.getElementById('image').files[0]]; _i < _a.length; _i++) {
            var selectedFile = _a[_i];
            _loop_3(selectedFile);
        }
    };
    FirebaseService.prototype.addGig = function (gig) {
        var _this = this;
        // Create root ref
        var storageRef = __WEBPACK_IMPORTED_MODULE_3_firebase__["storage"]().ref();
        var _loop_4 = function(selectedFile) {
            var path = "/" + this_4.gigFolder + "/" + this_4.userId + selectedFile.name;
            var iRef = storageRef.child(path);
            iRef.put(selectedFile).then(function (snapshot) {
                gig.image = selectedFile.name;
                gig.path = path;
                gig.userId = _this.userId;
                return _this.gigs.push(gig);
            });
        };
        var this_4 = this;
        for (var _i = 0, _a = [document.getElementById('image').files[0]]; _i < _a.length; _i++) {
            var selectedFile = _a[_i];
            _loop_4(selectedFile);
        }
    };
    FirebaseService.prototype.updateProduct = function (id, product) {
        return this.products.update(id, product);
    };
    FirebaseService.prototype.deleteProduct = function (id) {
        return this.products.remove(id);
    };
    FirebaseService.prototype.updateListing = function (id, listing) {
        return this.listings.update(id, listing);
    };
    FirebaseService.prototype.deleteListing = function (id) {
        return this.listings.remove(id);
    };
    FirebaseService.prototype.updateEvent = function (id, event) {
        return this.events.update(id, event);
    };
    FirebaseService.prototype.deleteEvent = function (id) {
        return this.events.remove(id);
    };
    FirebaseService.prototype.updateGig = function (id, gig) {
        return this.gigs.update(id, gig);
    };
    FirebaseService.prototype.deleteGig = function (id) {
        return this.gigs.remove(id);
    };
    FirebaseService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2__["a" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angularfire2__["a" /* AngularFire */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]) === 'function' && _b) || Object])
    ], FirebaseService);
    return FirebaseService;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/Akhil/Desktop/11_FrAuDa_Pi_StudentEventPlatform-master/11_FrAuDa_Pi_StudentEventPlatform-master/src/firebase.service.js.map

/***/ }),

/***/ "./src/app/services/search.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchService = (function () {
    function SearchService(db) {
        this.db = db;
    }
    SearchService.prototype.getProducts = function (start, end) {
        return this.db.list('/products', {
            query: {
                orderByChild: 'title',
                limitToFirst: 10,
                startAt: start,
                endAt: end
            }
        });
    };
    SearchService.prototype.getEvents = function (start, end) {
        return this.db.list('/events', {
            query: {
                orderByChild: 'shortTitle',
                limitToFirst: 10,
                startAt: start,
                endAt: end
            }
        });
    };
    SearchService.prototype.getListings = function (start, end) {
        return this.db.list('/listings', {
            query: {
                orderByChild: 'type',
                limitToFirst: 10,
                startAt: start,
                endAt: end
            }
        });
    };
    SearchService.prototype.getGigs = function (start, end) {
        return this.db.list('/gigs', {
            query: {
                orderByChild: 'title',
                limitToFirst: 10,
                startAt: start,
                endAt: end
            }
        });
    };
    SearchService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]) === 'function' && _a) || Object])
    ], SearchService);
    return SearchService;
    var _a;
}());
//# sourceMappingURL=C:/Users/Akhil/Desktop/11_FrAuDa_Pi_StudentEventPlatform-master/11_FrAuDa_Pi_StudentEventPlatform-master/src/search.service.js.map

/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyDuI8wI-9MvVltjy3O4vPcu2Z0lRzbtcck",
        authDomain: "student-form-filling-e877a.firebaseapp.com",
        databaseURL: "https://student-form-filling-e877a.firebaseio.com",
        projectId: "student-form-filling-e877a",
        storageBucket: "student-form-filling-e877a.appspot.com",
        messagingSenderId: "877402596931"
    }
};
//# sourceMappingURL=C:/Users/Akhil/Desktop/11_FrAuDa_Pi_StudentEventPlatform-master/11_FrAuDa_Pi_StudentEventPlatform-master/src/environment.js.map

/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("./src/app/app.module.ts");




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/Akhil/Desktop/11_FrAuDa_Pi_StudentEventPlatform-master/11_FrAuDa_Pi_StudentEventPlatform-master/src/main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map