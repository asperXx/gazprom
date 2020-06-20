(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Shop.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Shop.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      goods: [],
      user: JSON.parse(localStorage.getItem('user')),
      mygoods: []
    };
  },
  created: function created() {
    var _this = this;

    axios.get('/api/auth/getGoods').then(function (res) {
      _this.goods = res.data.shop;
    });
    axios.get('/api/auth/getMyGoods/' + this.user.id).then(function (res) {
      _this.mygoods = res.data.goods;
    });
  },
  methods: {
    buy: function buy(id) {
      var _this2 = this;

      axios.post('/api/auth/buygood', {
        'user_id': this.user.id,
        'good_id': id
      });
      axios.get('/api/auth/getGoods').then(function (res) {
        _this2.goods = res.data.shop;
      });
      axios.get('/api/auth/getMyGoods/' + this.user.id).then(function (res) {
        _this2.mygoods = res.data.goods;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Shop.vue?vue&type=template&id=e1ea323e&":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Shop.vue?vue&type=template&id=e1ea323e& ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-container",
    { staticClass: "d-flex flex-column justify-start", attrs: { fluid: "" } },
    [
      _vm._l(_vm.goods, function(good) {
        return _c(
          "div",
          { key: good.id },
          [
            _c(
              "v-row",
              [
                _c(
                  "v-col",
                  {
                    staticClass: "d-flex justify-center align-center sm-col-12"
                  },
                  [
                    _c(
                      "v-card",
                      {
                        staticClass: "mt-5 pa-6",
                        attrs: { "max-width": "900" }
                      },
                      [
                        _c("div", [_vm._v(_vm._s(good.title))]),
                        _vm._v(" "),
                        _c("p", [_vm._v(_vm._s(good.description))]),
                        _vm._v(" "),
                        _c("p", [_vm._v("Цена: " + _vm._s(good.price))]),
                        _vm._v(" "),
                        _c(
                          "v-btn",
                          {
                            on: {
                              click: function($event) {
                                return _vm.buy(good.id)
                              }
                            }
                          },
                          [_vm._v("Купить")]
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              ],
              1
            )
          ],
          1
        )
      }),
      _vm._v(" "),
      _c("hr"),
      _vm._v(" "),
      _c("h3", [_vm._v("Мои товары")]),
      _vm._v(" "),
      _vm._l(_vm.mygoods, function(mygood) {
        return _c(
          "div",
          { key: mygood.id },
          [
            _c(
              "v-row",
              [
                _c(
                  "v-col",
                  {
                    staticClass: "d-flex justify-center align-center sm-col-12"
                  },
                  [
                    _c(
                      "v-card",
                      {
                        staticClass: "mt-5 pa-6",
                        attrs: { "max-width": "900" }
                      },
                      [
                        _c("div", [_vm._v(_vm._s(mygood.title))]),
                        _vm._v(" "),
                        _c("p", [_vm._v(_vm._s(mygood.description))]),
                        _vm._v(" "),
                        _c("p", [_vm._v("Цена: " + _vm._s(mygood.price))])
                      ]
                    )
                  ],
                  1
                )
              ],
              1
            )
          ],
          1
        )
      })
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Shop.vue":
/*!******************************************!*\
  !*** ./resources/js/components/Shop.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Shop_vue_vue_type_template_id_e1ea323e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Shop.vue?vue&type=template&id=e1ea323e& */ "./resources/js/components/Shop.vue?vue&type=template&id=e1ea323e&");
/* harmony import */ var _Shop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Shop.vue?vue&type=script&lang=js& */ "./resources/js/components/Shop.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Shop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Shop_vue_vue_type_template_id_e1ea323e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Shop_vue_vue_type_template_id_e1ea323e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */






_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCard"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VCol"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VContainer"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VRow"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Shop.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Shop.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/components/Shop.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Shop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Shop.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Shop.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Shop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Shop.vue?vue&type=template&id=e1ea323e&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/Shop.vue?vue&type=template&id=e1ea323e& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Shop_vue_vue_type_template_id_e1ea323e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Shop.vue?vue&type=template&id=e1ea323e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Shop.vue?vue&type=template&id=e1ea323e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Shop_vue_vue_type_template_id_e1ea323e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Shop_vue_vue_type_template_id_e1ea323e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);