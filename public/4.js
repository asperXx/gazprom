(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ShareExperience.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ShareExperience.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
      post: {
        title: '',
        body: '',
        user_id: ''
      },
      getPosts: {
        title: '',
        body: '',
        user_id: ''
      },
      user_id: '',
      likes: {}
    };
  },
  created: function created() {
    var _this = this;

    this.user_id = JSON.parse(localStorage.getItem('user')).id;
    console.log("USer id " + this.user_id);
    axios.put('/api/auth/getMyPosts/' + this.user_id, {
      'user': this.user_id
    }, {
      headers: {
        'X-CSRF-TOKEN': window.Laravel.csrfToken
      }
    }).then(function (res) {
      _this.getPosts = res.data.posts;
      _this.likes = res.data.likes;
    });
  },
  methods: {
    checkLikes: function checkLikes(title) {
      for (var i = 0; i < this.likes.length; i++) {
        if (this.likes[i].post_id == title) {
          return false;
        }
      }

      return true;
    },
    create: function create() {
      var _this2 = this;

      this.post.user_id = JSON.parse(localStorage.getItem('user')).id;
      console.log(this.prop);
      axios.post('/api/auth/createPost', this.post, {
        headers: {
          'X-CSRF-TOKEN': window.Laravel.csrfToken
        }
      });
      then(function (res) {
        _this2.post.title = "";
        _this2.post.body = "";
      });
    },
    deletePost: function deletePost(title) {
      axios.get('/api/auth/deletePost/' + title, {
        headers: {
          'X-CSRF-TOKEN': window.Laravel.csrfToken
        }
      }).then(function (res) {
        console.log(res);
      });
    },
    editPost: function editPost(title) {},
    like: function like(title) {
      console.log(this.user_id);
      axios.post('/api/auth/like', {
        'user': this.user_id,
        'post': title
      }, {
        headers: {
          'X-CSRF-TOKEN': window.Laravel.csrfToken
        }
      }).then(function (res) {
        return console.log(res);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ShareExperience.vue?vue&type=template&id=2d7b0a8e&":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ShareExperience.vue?vue&type=template&id=2d7b0a8e& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
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
    "v-card",
    { staticClass: "pa-6", attrs: { width: "95%" } },
    [
      _c("h2", [_vm._v("Создать статью")]),
      _vm._v(" "),
      _c(
        "v-card-text",
        [
          _c(
            "v-form",
            [
              _c("v-text-field", {
                attrs: { label: "Название", name: "title", type: "text" },
                model: {
                  value: _vm.post.title,
                  callback: function($$v) {
                    _vm.$set(_vm.post, "title", $$v)
                  },
                  expression: "post.title"
                }
              }),
              _vm._v(" "),
              _c("v-textarea", {
                attrs: {
                  id: "body",
                  label: "Текст",
                  name: "body",
                  type: "text"
                },
                model: {
                  value: _vm.post.body,
                  callback: function($$v) {
                    _vm.$set(_vm.post, "body", $$v)
                  },
                  expression: "post.body"
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
          _c(
            "v-btn",
            {
              attrs: { color: "primary" },
              on: {
                click: _vm.create,
                keypress: function($event) {
                  if (
                    !$event.type.indexOf("key") &&
                    _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                  ) {
                    return null
                  }
                  return _vm.login($event)
                }
              }
            },
            [_vm._v("Создать")]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("hr"),
      _c("br"),
      _vm._v(" "),
      _c("h2", [_vm._v("Мои статьи")]),
      _vm._v(" "),
      _vm._l(_vm.getPosts, function(getPost, id) {
        return _c(
          "div",
          { key: getPost.id },
          [
            _c(
              "router-link",
              {
                attrs: {
                  to: { name: "showPost", params: { title: getPost.title } }
                }
              },
              [_c("h3", [_vm._v(" " + _vm._s(getPost.title))])]
            ),
            _vm._v(" "),
            _c("p", [_vm._v(_vm._s(getPost.body))]),
            _vm._v(" "),
            _c(
              "v-card-actions",
              [
                _c("v-spacer"),
                _vm._v(" "),
                getPost.user_id == _vm.user_id
                  ? _c(
                      "div",
                      [
                        _c(
                          "v-btn",
                          {
                            attrs: { color: "primary" },
                            on: {
                              click: function($event) {
                                return _vm.deletePost(getPost.title)
                              }
                            }
                          },
                          [_vm._v("Удалить")]
                        ),
                        _vm._v(" "),
                        _c(
                          "v-btn",
                          {
                            attrs: { color: "primary" },
                            on: {
                              click: function($event) {
                                return _vm.editPost(getPost.title)
                              }
                            }
                          },
                          [_vm._v("Изменить")]
                        )
                      ],
                      1
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.checkLikes(getPost.title)
                  ? _c(
                      "div",
                      [
                        _c(
                          "v-btn",
                          {
                            attrs: { color: "primary" },
                            on: {
                              click: function($event) {
                                return _vm.like(getPost.title)
                              }
                            }
                          },
                          [_vm._v("Лайк (xx)")]
                        )
                      ],
                      1
                    )
                  : _vm._e()
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

/***/ "./resources/js/components/ShareExperience.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/ShareExperience.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ShareExperience_vue_vue_type_template_id_2d7b0a8e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShareExperience.vue?vue&type=template&id=2d7b0a8e& */ "./resources/js/components/ShareExperience.vue?vue&type=template&id=2d7b0a8e&");
/* harmony import */ var _ShareExperience_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShareExperience.vue?vue&type=script&lang=js& */ "./resources/js/components/ShareExperience.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VForm */ "./node_modules/vuetify/lib/components/VForm/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/index.js");
/* harmony import */ var vuetify_lib_components_VTextarea__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VTextarea */ "./node_modules/vuetify/lib/components/VTextarea/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ShareExperience_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ShareExperience_vue_vue_type_template_id_2d7b0a8e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ShareExperience_vue_vue_type_template_id_2d7b0a8e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */









_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCard"],VCardActions: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardActions"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardText"],VForm: vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_6__["VForm"],VSpacer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VSpacer"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_8__["VTextField"],VTextarea: vuetify_lib_components_VTextarea__WEBPACK_IMPORTED_MODULE_9__["VTextarea"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ShareExperience.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ShareExperience.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/ShareExperience.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShareExperience_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ShareExperience.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ShareExperience.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShareExperience_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ShareExperience.vue?vue&type=template&id=2d7b0a8e&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/ShareExperience.vue?vue&type=template&id=2d7b0a8e& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShareExperience_vue_vue_type_template_id_2d7b0a8e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ShareExperience.vue?vue&type=template&id=2d7b0a8e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ShareExperience.vue?vue&type=template&id=2d7b0a8e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShareExperience_vue_vue_type_template_id_2d7b0a8e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShareExperience_vue_vue_type_template_id_2d7b0a8e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);