(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Proposal.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Proposal.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../store */ "./resources/js/store.js");
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
      depItems: ['IT-отдел', 'Бухгалтерия'],
      levelItems: ['Уровень отдела', 'Уровень филиала', 'Уровень региона'],
      isEdit: "false",
      editor: _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_0___default.a,
      editorConfig: {// The configuration of the editor.
      },
      prop: {
        title: '',
        body: '',
        user_id: '',
        dep: '',
        status: ''
      },
      getProps: {},
      user_id: '',
      isCreate: false,
      flames: JSON.parse(localStorage.getItem('user')).flames
    };
  },
  created: function created() {
    var _this = this;

    axios.get('/api/auth/getMyProps/', {
      headers: {
        'X-CSRF-TOKEN': window.Laravel.csrfToken
      }
    }).then(function (res) {
      _this.getProps = res.data.tickets;
      console.log(_this.getProps);
    });
  },
  methods: {
    create: function create() {
      var _this2 = this;

      if (this.prop.title != "" && this.prop.body != "" && this.prop.dep != "") {
        this.prop.user_id = JSON.parse(localStorage.getItem('user')).id;
        axios.post('/api/auth/createProp', this.prop, {
          headers: {
            'X-CSRF-TOKEN': window.Laravel.csrfToken
          }
        }).then(function (res) {
          _this2.prop.title = "";
          _this2.prop.body = "";
          axios.get('/api/auth/getMyProps/', {
            headers: {
              'X-CSRF-TOKEN': window.Laravel.csrfToken
            }
          }).then(function (res) {
            _this2.getProps = res.data.tickets;
          });
        });
      }
    },
    deleteProp: function deleteProp(id) {
      var _this3 = this;

      axios.get('/api/auth/deleteProp/' + id, {
        headers: {
          'X-CSRF-TOKEN': window.Laravel.csrfToken
        }
      }).then(function (res) {
        axios.get('/api/auth/getMyProps/', {
          headers: {
            'X-CSRF-TOKEN': window.Laravel.csrfToken
          }
        }).then(function (res) {
          _this3.getProps = res.data.tickets;
        });
      });
    },
    like: function like(id) {
      var _this4 = this;

      axios.post('/api/auth/propLike/', {
        'user_id': JSON.parse(localStorage.getItem('user')).id,
        'ticket_id': id
      }).then(function (res) {
        console.log(res.data.user[0]);
        var user = JSON.stringify(res.data.user[0]);
        localStorage.setItem('user', user);
        axios.get('/api/auth/getMyProps/', {
          headers: {
            'X-CSRF-TOKEN': window.Laravel.csrfToken
          }
        }).then(function (res) {
          _this4.getProps = res.data.tickets;
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Proposal.vue?vue&type=template&id=0936b75d&":
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Proposal.vue?vue&type=template&id=0936b75d& ***!
  \******************************************************************************************************************************************************************************************************************************************************************/
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
      !_vm.isCreate
        ? _c(
            "v-btn",
            {
              staticClass: "align-self-center",
              on: {
                click: function($event) {
                  _vm.isCreate = true
                }
              }
            },
            [_vm._v("Предложить")]
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.isCreate
        ? _c(
            "v-card",
            {
              staticClass: "d-flex flex-column pa-6 justify-space-between",
              attrs: { width: "97%" }
            },
            [
              _c("h2", [_vm._v("Сформировать предложение")]),
              _vm._v(" "),
              _c(
                "v-card-text",
                [
                  _c(
                    "v-form",
                    [
                      _c("v-text-field", {
                        attrs: {
                          label: "Решаемая проблема",
                          name: "title",
                          type: "text"
                        },
                        model: {
                          value: _vm.prop.title,
                          callback: function($$v) {
                            _vm.$set(_vm.prop, "title", $$v)
                          },
                          expression: "prop.title"
                        }
                      }),
                      _vm._v(" "),
                      _c("p", [_vm._v("Описание решения")]),
                      _vm._v(" "),
                      _c("ckeditor", {
                        attrs: { editor: _vm.editor, config: _vm.editorConfig },
                        model: {
                          value: _vm.prop.body,
                          callback: function($$v) {
                            _vm.$set(_vm.prop, "body", $$v)
                          },
                          expression: "prop.body"
                        }
                      }),
                      _vm._v(" "),
                      _c("v-select", {
                        attrs: {
                          items: _vm.depItems,
                          "error-messages": _vm.selectErrors,
                          label: "Отдел",
                          "prepend-inner-icon": "mdi-domain",
                          required: "",
                          disabled: _vm.disabled,
                          value: "IT"
                        },
                        model: {
                          value: _vm.prop.dep,
                          callback: function($$v) {
                            _vm.$set(_vm.prop, "dep", $$v)
                          },
                          expression: "prop.dep"
                        }
                      }),
                      _vm._v(" "),
                      _c("v-select", {
                        attrs: {
                          items: _vm.levelItems,
                          "error-messages": _vm.selectErrors,
                          label: "Уровень",
                          "prepend-inner-icon": "mdi-domain",
                          required: "",
                          disabled: _vm.disabled,
                          value: "IT"
                        },
                        model: {
                          value: _vm.prop.status,
                          callback: function($$v) {
                            _vm.$set(_vm.prop, "status", $$v)
                          },
                          expression: "prop.status"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-card-actions",
                [
                  _c("v-spacer"),
                  _vm._v(" "),
                  _vm.isEdit
                    ? _c(
                        "v-btn",
                        {
                          staticClass: "white--text",
                          attrs: { color: "#0057B6" },
                          on: {
                            click: function($event) {
                              _vm.isCreate = false
                            }
                          }
                        },
                        [_vm._v("Закрыть")]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  !_vm.isEdit
                    ? _c(
                        "v-btn",
                        {
                          staticClass: "white--text",
                          attrs: { color: "#0057B6", to: "/proposal" },
                          on: {
                            click: function($event) {
                              _vm.updatePost()
                              _vm.isCreate = false
                            }
                          }
                        },
                        [_vm._v("Изменить")]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.isEdit
                    ? _c(
                        "v-btn",
                        {
                          staticClass: "white--text",
                          attrs: { color: "#0057B6", to: "/proposal" },
                          on: {
                            click: function($event) {
                              _vm.create()
                              _vm.isCreate = false
                            }
                          }
                        },
                        [_vm._v("Создать")]
                      )
                    : _vm._e()
                ],
                1
              ),
              _vm._v(" "),
              _c("hr"),
              _vm._v(" "),
              _c("br")
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _vm._l(_vm.getProps, function(getProp) {
        return _c(
          "div",
          { key: getProp.id },
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
                        _c(
                          "div",
                          [
                            _c("h3", [_vm._v(_vm._s(getProp.title))]),
                            _vm._v(" "),
                            _c("p", [
                              _c("span", {
                                domProps: { innerHTML: _vm._s(getProp.body) }
                              })
                            ]),
                            _vm._v(" "),
                            _c("p", [
                              _c("span", [
                                _vm._v(
                                  "Отел: " + _vm._s(getProp.department) + " "
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c("p", [
                              _c("span", [
                                _vm._v(
                                  "Уровень: " + _vm._s(getProp.status) + " "
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c("p", [
                              _c("span", [
                                _vm._v(
                                  "Поддержали: " + _vm._s(getProp.flames) + " "
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c(
                              "v-card-actions",
                              {
                                staticClass:
                                  "d-flex flex-column justify-center align-center"
                              },
                              [
                                _c("v-spacer"),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  [
                                    _c(
                                      "v-row",
                                      {
                                        attrs: {
                                          justify: "center",
                                          align: "center"
                                        }
                                      },
                                      [
                                        _c(
                                          "v-col",
                                          {
                                            attrs: {
                                              cols: "12",
                                              sm: "4",
                                              xs: "4"
                                            }
                                          },
                                          [
                                            _c(
                                              "v-btn",
                                              {
                                                staticClass: "white--text ",
                                                attrs: { color: "#0057B6" },
                                                on: {
                                                  click: function($event) {
                                                    return _vm.deleteProp(
                                                      getProp.id
                                                    )
                                                  }
                                                }
                                              },
                                              [_vm._v("Удалить")]
                                            )
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "v-col",
                                          {
                                            attrs: {
                                              cols: "12",
                                              sm: "4",
                                              xs: "4"
                                            }
                                          },
                                          [
                                            _vm.flames > 0
                                              ? _c(
                                                  "div",
                                                  [
                                                    _c(
                                                      "v-btn",
                                                      {
                                                        staticClass:
                                                          "white--text ml-10",
                                                        attrs: {
                                                          color: "#0057B6"
                                                        },
                                                        on: {
                                                          click: function(
                                                            $event
                                                          ) {
                                                            return _vm.like(
                                                              getProp.id
                                                            )
                                                          }
                                                        }
                                                      },
                                                      [
                                                        _c("v-icon", [
                                                          _vm._v("fa-fire")
                                                        ])
                                                      ],
                                                      1
                                                    )
                                                  ],
                                                  1
                                                )
                                              : _vm._e()
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
                          ],
                          1
                        )
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

/***/ "./resources/js/components/Proposal.vue":
/*!**********************************************!*\
  !*** ./resources/js/components/Proposal.vue ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Proposal_vue_vue_type_template_id_0936b75d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Proposal.vue?vue&type=template&id=0936b75d& */ "./resources/js/components/Proposal.vue?vue&type=template&id=0936b75d&");
/* harmony import */ var _Proposal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Proposal.vue?vue&type=script&lang=js& */ "./resources/js/components/Proposal.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Proposal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Proposal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VForm */ "./node_modules/vuetify/lib/components/VForm/index.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");
/* harmony import */ var vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VSelect */ "./node_modules/vuetify/lib/components/VSelect/index.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Proposal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Proposal_vue_vue_type_template_id_0936b75d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Proposal_vue_vue_type_template_id_0936b75d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */













_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCard"],VCardActions: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardActions"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardText"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VCol"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VContainer"],VForm: vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_7__["VForm"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_8__["VIcon"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VRow"],VSelect: vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_9__["VSelect"],VSpacer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VSpacer"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_10__["VTextField"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Proposal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Proposal.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/components/Proposal.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Proposal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Proposal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Proposal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Proposal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Proposal.vue?vue&type=template&id=0936b75d&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/Proposal.vue?vue&type=template&id=0936b75d& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Proposal_vue_vue_type_template_id_0936b75d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Proposal.vue?vue&type=template&id=0936b75d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Proposal.vue?vue&type=template&id=0936b75d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Proposal_vue_vue_type_template_id_0936b75d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Proposal_vue_vue_type_template_id_0936b75d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);