(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ShowPost.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ShowPost.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      post: {},
      users: [],
      likes: 0,
      comments: [],
      comment: ''
    };
  },
  methods: {
    postComment: function postComment(id) {
      var _this = this;

      axios.post('/api/auth/postCommentBlog', {
        comment: this.comment,
        user: JSON.parse(localStorage.getItem('user')),
        post_id: this.post.id
      }).then(function (res) {
        return console.log(res);
      });
      this.comment = "";
      axios.get("/api/auth/showPost/" + this.$route.params.id, {
        headers: {
          "X-CSRF-TOKEN": window.Laravel.csrfToken
        }
      }).then(function (res) {
        _this.post = res.data.post[0];
        _this.comments = res.data.comments;
        _this.users = res.data.users;
        _this.likes = res.data.likes.length;
      });
    }
  },
  created: function created() {
    var _this2 = this;

    console.log("Created");
    console.log(this.$route.params.id);
    axios.get("/api/auth/showPost/" + this.$route.params.id, {
      headers: {
        "X-CSRF-TOKEN": window.Laravel.csrfToken
      }
    }).then(function (res) {
      _this2.post = res.data.post[0];
      _this2.likes = res.data.likes.length;
      _this2.comments = res.data.comments;
      _this2.users = res.data.users;
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ShowPost.vue?vue&type=template&id=14865028&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ShowPost.vue?vue&type=template&id=14865028& ***!
  \***********************************************************************************************************************************************************************************************************/
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
    [
      _c(
        "v-card",
        { staticClass: "pl-5 pr-5 pt-3 pb-3", attrs: { "min-width": "100%" } },
        [
          _c("v-card-title", [_vm._v(_vm._s(_vm.post.title))]),
          _vm._v(" "),
          _c("p", { domProps: { innerHTML: _vm._s(_vm.post.body) } }),
          _vm._v(" "),
          _c("p", [_vm._v("Лайков: " + _vm._s(_vm.likes))]),
          _vm._v(" "),
          _c("hr"),
          _vm._v(" "),
          _c("h3", [_vm._v("Комментарии")]),
          _vm._v(" "),
          _vm._l(_vm.comments, function(comment, id) {
            return _c(
              "div",
              { key: id },
              [
                _c(
                  "v-alert",
                  { attrs: { text: "", color: "info" } },
                  [
                    _c("div", [_vm._v(_vm._s(comment.created_at))]),
                    _vm._v(" "),
                    _c("div", [_vm._v(_vm._s(comment.comment))]),
                    _vm._v(" "),
                    _c("v-divider", {
                      staticClass: "my-4 info",
                      staticStyle: { opacity: "0.22" }
                    }),
                    _vm._v(" "),
                    _c(
                      "v-row",
                      { attrs: { align: "center", "no-gutters": "" } },
                      [
                        _c("v-col", { staticClass: "grow" }, [
                          _vm._v(
                            "Пользователь: " +
                              _vm._s(_vm.users[id][0].last_name) +
                              " " +
                              _vm._s(_vm.users[id][0].name)
                          )
                        ])
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
          _c(
            "v-form",
            [
              _c("v-text-field", {
                attrs: {
                  label: "Оставить комментарий",
                  name: "title",
                  type: "text"
                },
                model: {
                  value: _vm.comment,
                  callback: function($$v) {
                    _vm.comment = $$v
                  },
                  expression: "comment"
                }
              }),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  staticClass: "white--text mb-12",
                  attrs: { color: "#0057B6" },
                  on: {
                    click: function($event) {
                      return _vm.postComment(_vm.comment.id)
                    }
                  }
                },
                [_vm._v("Отправить\n      ")]
              )
            ],
            1
          )
        ],
        2
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/ShowPost.vue":
/*!**********************************************!*\
  !*** ./resources/js/components/ShowPost.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ShowPost_vue_vue_type_template_id_14865028___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShowPost.vue?vue&type=template&id=14865028& */ "./resources/js/components/ShowPost.vue?vue&type=template&id=14865028&");
/* harmony import */ var _ShowPost_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShowPost.vue?vue&type=script&lang=js& */ "./resources/js/components/ShowPost.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ShowPost_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ShowPost_vue_vue_type_template_id_14865028___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ShowPost_vue_vue_type_template_id_14865028___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ShowPost.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ShowPost.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/components/ShowPost.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowPost_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ShowPost.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ShowPost.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowPost_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ShowPost.vue?vue&type=template&id=14865028&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/ShowPost.vue?vue&type=template&id=14865028& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowPost_vue_vue_type_template_id_14865028___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ShowPost.vue?vue&type=template&id=14865028& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ShowPost.vue?vue&type=template&id=14865028&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowPost_vue_vue_type_template_id_14865028___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowPost_vue_vue_type_template_id_14865028___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);