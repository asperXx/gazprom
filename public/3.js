(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Proposal.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Proposal.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../store */ "./resources/js/store.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
    var _ref;

    return _ref = {
      depItems: ['IT-отдел', 'Бухгалтерия'],
      levelItems: ['Уровень отдела', 'Уровень филиала', 'Уровень региона'],
      items: ['По возрастанию', 'По убыванию'],
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
      flames: JSON.parse(localStorage.getItem('user')).flames,
      openWindow: {}
    }, _defineProperty(_ref, "items", [{
      'id': '1',
      'title': 'Blablabla',
      'desc': 'Et exercitation nisi laboris ea proident eu proident quis deserunt. Minim culpa fugiat voluptate elit nostrud duis culpa non anim. Consectetur pariatur do qui eiusmod non nulla anim exercitation voluptate eu cillum.',
      'comments': 24,
      'likes': 16,
      "pic": "https://img2.freepng.ru/20180920/yko/kisspng-computer-icons-portable-network-graphics-avatar-ic-5ba3c66df14d32.3051789815374598219884.jpg",
      "name": "Просто Сережа",
      'clicked': false,
      'color': '#0057B6',
      'full_desc': 'Tempor voluptate commodo elit enim sit. Nisi deserunt adipisicing laborum ut in qui nulla cupidatat do Lorem non do voluptate officia. Do duis do quis irure adipisicing minim minim ipsum. Occaecat dolor do nostrud exercitation tempor veniam consectetur proident aliqua aliquip pariatur.',
      'img': 'https://www.sostav.ru/images/news/2019/09/01/a2pzjhck.jpg'
    }, {
      'id': '2',
      'title': 'Blablabla',
      'desc': 'Et exercitation nisi laboris ea proident eu proident quis deserunt. Minim culpa fugiat voluptate elit nostrud duis culpa non anim. Consectetur pariatur do qui eiusmod non nulla anim exercitation voluptate eu cillum.',
      'comments': 24,
      'likes': 16,
      "pic": "https://img2.freepng.ru/20180920/yko/kisspng-computer-icons-portable-network-graphics-avatar-ic-5ba3c66df14d32.3051789815374598219884.jpg",
      "name": "Просто Сережа",
      'clicked': true,
      'color': '#65CC7B',
      'full_desc': 'Tempor voluptate commodo elit enim sit. Nisi deserunt adipisicing laborum ut in qui nulla cupidatat do Lorem non do voluptate officia. Do duis do quis irure adipisicing minim minim ipsum. Occaecat dolor do nostrud exercitation tempor veniam consectetur proident aliqua aliquip pariatur.',
      'img': 'https://www.sostav.ru/images/news/2019/09/01/a2pzjhck.jpg'
    }, {
      'id': '3',
      'title': 'Blablabla',
      'desc': 'Et exercitation nisi laboris ea proident eu proident quis deserunt. Minim culpa fugiat voluptate elit nostrud duis culpa non anim. Consectetur pariatur do qui eiusmod non nulla anim exercitation voluptate eu cillum.',
      'comments': 24,
      'likes': 16,
      "pic": "https://img2.freepng.ru/20180920/yko/kisspng-computer-icons-portable-network-graphics-avatar-ic-5ba3c66df14d32.3051789815374598219884.jpg",
      "name": "Просто Сережа",
      'clicked': false,
      'color': '#F5984E',
      'full_desc': 'Tempor voluptate commodo elit enim sit. Nisi deserunt adipisicing laborum ut in qui nulla cupidatat do Lorem non do voluptate officia. Do duis do quis irure adipisicing minim minim ipsum. Occaecat dolor do nostrud exercitation tempor veniam consectetur proident aliqua aliquip pariatur.',
      'img': 'https://www.sostav.ru/images/news/2019/09/01/a2pzjhck.jpg'
    }, {
      'id': '4',
      'title': 'Blablabla',
      'desc': 'Et exercitation nisi laboris ea proident eu proident quis deserunt. Minim culpa fugiat voluptate elit nostrud duis culpa non anim. Consectetur pariatur do qui eiusmod non nulla anim exercitation voluptate eu cillum.',
      'comments': 24,
      'likes': 16,
      "pic": "https://img2.freepng.ru/20180920/yko/kisspng-computer-icons-portable-network-graphics-avatar-ic-5ba3c66df14d32.3051789815374598219884.jpg",
      "name": "Просто Сережа",
      'clicked': true,
      'color': '#0057B6',
      'full_desc': 'Tempor voluptate commodo elit enim sit. Nisi deserunt adipisicing laborum ut in qui nulla cupidatat do Lorem non do voluptate officia. Do duis do quis irure adipisicing minim minim ipsum. Occaecat dolor do nostrud exercitation tempor veniam consectetur proident aliqua aliquip pariatur.',
      'img': 'https://www.sostav.ru/images/news/2019/09/01/a2pzjhck.jpg'
    }, {
      'id': '5',
      'title': 'Blablabla',
      'desc': 'Et exercitation nisi laboris ea proident eu proident quis deserunt. Minim culpa fugiat voluptate elit nostrud duis culpa non anim. Consectetur pariatur do qui eiusmod non nulla anim exercitation voluptate eu cillum.',
      'comments': 24,
      'likes': 16,
      "pic": "https://img2.freepng.ru/20180920/yko/kisspng-computer-icons-portable-network-graphics-avatar-ic-5ba3c66df14d32.3051789815374598219884.jpg",
      "name": "Просто Сережа",
      'clicked': false,
      'color': '#0D356C',
      'full_desc': 'Tempor voluptate commodo elit enim sit. Nisi deserunt adipisicing laborum ut in qui nulla cupidatat do Lorem non do voluptate officia. Do duis do quis irure adipisicing minim minim ipsum. Occaecat dolor do nostrud exercitation tempor veniam consectetur proident aliqua aliquip pariatur.',
      'img': 'https://www.sostav.ru/images/news/2019/09/01/a2pzjhck.jpg'
    }, {
      'id': '6',
      'title': 'Blablabla',
      'desc': 'Et exercitation nisi laboris ea proident eu proident quis deserunt. Minim culpa fugiat voluptate elit nostrud duis culpa non anim. Consectetur pariatur do qui eiusmod non nulla anim exercitation voluptate eu cillum.',
      'comments': 24,
      'likes': 16,
      "pic": "https://img2.freepng.ru/20180920/yko/kisspng-computer-icons-portable-network-graphics-avatar-ic-5ba3c66df14d32.3051789815374598219884.jpg",
      "name": "Просто Сережа",
      'clicked': true,
      'color': '#F5984E',
      'full_desc': 'Tempor voluptate commodo elit enim sit. Nisi deserunt adipisicing laborum ut in qui nulla cupidatat do Lorem non do voluptate officia. Do duis do quis irure adipisicing minim minim ipsum. Occaecat dolor do nostrud exercitation tempor veniam consectetur proident aliqua aliquip pariatur.',
      'img': 'https://www.sostav.ru/images/news/2019/09/01/a2pzjhck.jpg'
    }, {
      'id': '7',
      'title': 'Blablabla',
      'desc': 'Et exercitation nisi laboris ea proident eu proident quis deserunt. Minim culpa fugiat voluptate elit nostrud duis culpa non anim. Consectetur pariatur do qui eiusmod non nulla anim exercitation voluptate eu cillum.',
      'comments': 24,
      'likes': 16,
      "pic": "https://img2.freepng.ru/20180920/yko/kisspng-computer-icons-portable-network-graphics-avatar-ic-5ba3c66df14d32.3051789815374598219884.jpg",
      "name": "Просто Сережа",
      'clicked': false,
      'color': '#0D356C',
      'full_desc': 'Tempor voluptate commodo elit enim sit. Nisi deserunt adipisicing laborum ut in qui nulla cupidatat do Lorem non do voluptate officia. Do duis do quis irure adipisicing minim minim ipsum. Occaecat dolor do nostrud exercitation tempor veniam consectetur proident aliqua aliquip pariatur.',
      'img': 'https://www.sostav.ru/images/news/2019/09/01/a2pzjhck.jpg'
    }, {
      'id': '8',
      'title': 'Blablabla',
      'desc': 'Et exercitation nisi laboris ea proident eu proident quis deserunt. Minim culpa fugiat voluptate elit nostrud duis culpa non anim. Consectetur pariatur do qui eiusmod non nulla anim exercitation voluptate eu cillum.',
      'comments': 24,
      'likes': 16,
      "pic": "https://img2.freepng.ru/20180920/yko/kisspng-computer-icons-portable-network-graphics-avatar-ic-5ba3c66df14d32.3051789815374598219884.jpg",
      "name": "Просто Сережа",
      'clicked': true,
      'color': '#F5984E',
      'full_desc': 'Tempor voluptate commodo elit enim sit. Nisi deserunt adipisicing laborum ut in qui nulla cupidatat do Lorem non do voluptate officia. Do duis do quis irure adipisicing minim minim ipsum. Occaecat dolor do nostrud exercitation tempor veniam consectetur proident aliqua aliquip pariatur.',
      'img': 'https://www.sostav.ru/images/news/2019/09/01/a2pzjhck.jpg'
    }, {
      'id': '9',
      'title': 'Blablabla',
      'desc': 'Et exercitation nisi laboris ea proident eu proident quis deserunt. Minim culpa fugiat voluptate elit nostrud duis culpa non anim. Consectetur pariatur do qui eiusmod non nulla anim exercitation voluptate eu cillum.',
      'comments': 24,
      'likes': 16,
      "pic": "https://img2.freepng.ru/20180920/yko/kisspng-computer-icons-portable-network-graphics-avatar-ic-5ba3c66df14d32.3051789815374598219884.jpg",
      "name": "Просто Сережа",
      'clicked': false,
      'color': '#0057B6',
      'full_desc': 'Tempor voluptate commodo elit enim sit. Nisi deserunt adipisicing laborum ut in qui nulla cupidatat do Lorem non do voluptate officia. Do duis do quis irure adipisicing minim minim ipsum. Occaecat dolor do nostrud exercitation tempor veniam consectetur proident aliqua aliquip pariatur.',
      'img': 'https://www.sostav.ru/images/news/2019/09/01/a2pzjhck.jpg'
    }, {
      'id': '10',
      'title': 'Blablabla',
      'desc': 'Et exercitation nisi laboris ea proident eu proident quis deserunt. Minim culpa fugiat voluptate elit nostrud duis culpa non anim. Consectetur pariatur do qui eiusmod non nulla anim exercitation voluptate eu cillum.',
      'comments': 24,
      'likes': 16,
      "pic": "https://img2.freepng.ru/20180920/yko/kisspng-computer-icons-portable-network-graphics-avatar-ic-5ba3c66df14d32.3051789815374598219884.jpg",
      "name": "Просто Сережа",
      'clicked': true,
      'color': '#65CC7B',
      'full_desc': 'Tempor voluptate commodo elit enim sit. Nisi deserunt adipisicing laborum ut in qui nulla cupidatat do Lorem non do voluptate officia. Do duis do quis irure adipisicing minim minim ipsum. Occaecat dolor do nostrud exercitation tempor veniam consectetur proident aliqua aliquip pariatur.',
      'img': 'https://www.sostav.ru/images/news/2019/09/01/a2pzjhck.jpg'
    }, {
      'id': '11',
      'title': 'Blablabla',
      'desc': 'Et exercitation nisi laboris ea proident eu proident quis deserunt. Minim culpa fugiat voluptate elit nostrud duis culpa non anim. Consectetur pariatur do qui eiusmod non nulla anim exercitation voluptate eu cillum.',
      'comments': 24,
      'likes': 16,
      "pic": "https://img2.freepng.ru/20180920/yko/kisspng-computer-icons-portable-network-graphics-avatar-ic-5ba3c66df14d32.3051789815374598219884.jpg",
      "name": "Просто Сережа",
      'clicked': false,
      'color': '#0D356C',
      'full_desc': 'Tempor voluptate commodo elit enim sit. Nisi deserunt adipisicing laborum ut in qui nulla cupidatat do Lorem non do voluptate officia. Do duis do quis irure adipisicing minim minim ipsum. Occaecat dolor do nostrud exercitation tempor veniam consectetur proident aliqua aliquip pariatur.',
      'img': 'https://www.sostav.ru/images/news/2019/09/01/a2pzjhck.jpg'
    }, {
      'id': '12',
      'title': 'Blablabla',
      'desc': 'Et exercitation nisi laboris ea proident eu proident quis deserunt. Minim culpa fugiat voluptate elit nostrud duis culpa non anim. Consectetur pariatur do qui eiusmod non nulla anim exercitation voluptate eu cillum.',
      'comments': 24,
      'likes': 16,
      "pic": "https://img2.freepng.ru/20180920/yko/kisspng-computer-icons-portable-network-graphics-avatar-ic-5ba3c66df14d32.3051789815374598219884.jpg",
      "name": "Просто Сережа",
      'clicked': true,
      'color': '#0057B6',
      'full_desc': 'Tempor voluptate commodo elit enim sit. Nisi deserunt adipisicing laborum ut in qui nulla cupidatat do Lorem non do voluptate officia. Do duis do quis irure adipisicing minim minim ipsum. Occaecat dolor do nostrud exercitation tempor veniam consectetur proident aliqua aliquip pariatur.',
      'img': 'https://www.sostav.ru/images/news/2019/09/01/a2pzjhck.jpg'
    }]), _defineProperty(_ref, "colors", ['primary', 'purple', 'deep-purple', 'cyan', 'green', 'orange', '#0057B6', '#0D356C']), _ref;
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
    ggwp: function ggwp(id) {
      if (this.openWindow[id] == "openWind") {
        return this.openWindow = {};
      }

      this.openWindow = {};
      var len = Object.keys(this.items).length;

      for (var i = 0; i < len; i++) {
        this.openWindow[this.items[i].id] = 'nonfloat';
      }

      var elem = this.items.find(function (item) {
        return item.id == id;
      }); //Я не придумал как убрать элемент из массива, но придумал как встаить его вперед
      //я все равно молодец (с) Антоша

      this.items.unshift(elem);
      this.openWindow[id] = "openWind";
    },
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

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Proposal.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Proposal.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.hide {display: none; text-align: center;}\n.hide p {text-align: justify;}\n.talk_btn {text-decoration: none !important; color: #fff !important; margin-top: 20px;}\n.row_wrap {position: relative; overflow: hidden; margin-right: -15px;}\n.card_wrap {position: relative; box-sizing: border-box; padding-right: 15px; width: 50%; margin-bottom: 15px; float: left;}\n.card {height: 250px; color: #fff !important;\n}\n.card p {color: #fff;}\n.actions {position: absolute; width: 100%; left: 0; bottom: 0; padding: 16px; box-sizing: border-box;}\n.nonfloat {float: right;}\n.openWind.card_wrap { width: 100%; height: auto;}\n.openWind.card_wrap .card { padding-bottom: 70px !important; height: auto;\n}\n.openWind .hide {display: block;}\n@media (max-width: 670px) {\n.card_wrap {width: 100%; float: none;}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Proposal.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Proposal.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Proposal.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Proposal.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Proposal.vue?vue&type=template&id=0936b75d&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Proposal.vue?vue&type=template&id=0936b75d& ***!
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
    { staticClass: "d-flex flex-column justify-start", attrs: { fluid: "" } },
    [
      !_vm.isCreate
        ? _c(
            "v-btn",
            {
              staticClass: "align-self-center mb-5",
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
      _c("div", [
        _c(
          "div",
          { staticClass: "row_wrap" },
          _vm._l(_vm.items, function(item, id) {
            return _c(
              "div",
              {
                key: id,
                staticClass: "card_wrap",
                class: _vm.openWindow[item.id]
              },
              [
                _c(
                  "v-card",
                  {
                    staticClass: "pa-3 card ",
                    attrs: { rounded: "20px", color: item.color },
                    on: {
                      click: function($event) {
                        return _vm.ggwp(item.id)
                      }
                    }
                  },
                  [
                    _c("v-card-title", [
                      _c("h3", [_vm._v(_vm._s(item.title))])
                    ]),
                    _vm._v(" "),
                    _c("v-card-text", [
                      _c("p", [_vm._v(_vm._s(item.desc))]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "hide" },
                        [
                          _c("p", [_vm._v(_vm._s(item.full_desc))]),
                          _vm._v(" "),
                          _c("v-img", { attrs: { src: item.img } }),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              staticClass: "talk_btn",
                              attrs: { color: "#2157F4", href: "#" }
                            },
                            [_vm._v("Обсудить")]
                          )
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "v-card-actions",
                      { staticClass: "actions", attrs: { align: "center" } },
                      [
                        _c("v-avatar", { staticClass: "mr-3" }, [
                          _c("img", {
                            attrs: { src: item.pic, alt: item.name }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", [_vm._v(_vm._s(item.name))]),
                        _vm._v(" "),
                        _c("v-spacer"),
                        _vm._v(" "),
                        _c(
                          "label",
                          { staticClass: "mr-3 mb-0" },
                          [
                            _c(
                              "v-btn",
                              { attrs: { icon: "" } },
                              [
                                _c("v-icon", { attrs: { color: "#fff" } }, [
                                  _vm._v("mdi-message-outline")
                                ])
                              ],
                              1
                            ),
                            _vm._v(
                              "\n              " +
                                _vm._s(item.comments) +
                                "\n            "
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "label",
                          { staticClass: "mb-0" },
                          [
                            _c(
                              "v-btn",
                              { attrs: { icon: "" } },
                              [
                                item.clicked
                                  ? _c("v-icon", { attrs: { color: "red" } }, [
                                      _vm._v("mdi-fire")
                                    ])
                                  : _c("v-icon", { attrs: { color: "#fff" } }, [
                                      _vm._v("mdi-fire")
                                    ])
                              ],
                              1
                            ),
                            _vm._v(
                              "\n              " +
                                _vm._s(item.likes) +
                                "\n            "
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
          0
        )
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Proposal.vue":
/*!**********************************************!*\
  !*** ./resources/js/components/Proposal.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Proposal_vue_vue_type_template_id_0936b75d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Proposal.vue?vue&type=template&id=0936b75d& */ "./resources/js/components/Proposal.vue?vue&type=template&id=0936b75d&");
/* harmony import */ var _Proposal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Proposal.vue?vue&type=script&lang=js& */ "./resources/js/components/Proposal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Proposal_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Proposal.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/Proposal.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Proposal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Proposal_vue_vue_type_template_id_0936b75d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Proposal_vue_vue_type_template_id_0936b75d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Proposal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Proposal.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/components/Proposal.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Proposal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Proposal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Proposal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Proposal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Proposal.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/Proposal.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Proposal_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Proposal.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Proposal.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Proposal_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Proposal_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Proposal_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Proposal_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Proposal_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/Proposal.vue?vue&type=template&id=0936b75d&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/Proposal.vue?vue&type=template&id=0936b75d& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Proposal_vue_vue_type_template_id_0936b75d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Proposal.vue?vue&type=template&id=0936b75d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Proposal.vue?vue&type=template&id=0936b75d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Proposal_vue_vue_type_template_id_0936b75d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Proposal_vue_vue_type_template_id_0936b75d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);