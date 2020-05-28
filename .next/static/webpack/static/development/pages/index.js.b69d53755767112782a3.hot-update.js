webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return home; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);







var _jsxFileName = "C:\\Users\\Bryan\\desktop\\Programming Projects\\02.1 Simple Count Down\\pages\\index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var home = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(home, _React$Component);

  var _super = _createSuper(home);

  function home(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, home);

    _this = _super.call(this, props);
    _this.state = {
      time: new Date().toLocaleTimeString(),
      hours: '00',
      mins: '00',
      secs: '00',
      timerStart: false,
      enableTimer: true,
      alarmStart: false,
      audio: function audio() {
        return new Audio('./alarm.mp3');
      },
      audio1: '',
      getHourArr: function getHourArr() {
        var arr = [];

        for (var i = 0; i < 100; i++) {
          arr.push(i);
        }

        return arr;
      },
      getMinSecArr: function getMinSecArr() {
        var arr = [];

        for (var i = 0; i < 60; i++) {
          arr.push(i);
        }

        return arr;
      }
    };
    _this.handleChange = _this.handleChange.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    _this.handleClick = _this.handleClick.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    _this.handleStartClick = _this.handleStartClick.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    _this.countDown = _this.countDown.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    _this.handleSetTimeClick = _this.handleSetTimeClick.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    _this.windowClick = _this.windowClick.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(home, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.localTime = setInterval(function () {
        _this2.setState({
          time: new Date().toLocaleTimeString()
        });
      }, 1000);
      this.timerTime = setInterval(this.countDown, 1000);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearInterval(this.localTime);
      clearInterval(this.timerTime);
    }
  }, {
    key: "todayDate",
    value: function todayDate() {
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, '0');
      var mm = String(today.getMonth()).padStart(2, '0');
      var yyyy = today.getFullYear();
      return mm + '/' + dd + '/' + yyyy;
    }
  }, {
    key: "handleChange",
    value: function handleChange(e) {
      var target = e.target;
      this.setState(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, target.name, target.value));
    }
  }, {
    key: "handleClick",
    value: function handleClick(e) {
      var target = e.target;
      this.setState(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, target.name, target.value.toString().padStart(2, 0)));
    }
  }, {
    key: "handleStartClick",
    value: function handleStartClick() {
      var button = document.getElementById('start-button');
      var hours = this.state.hours;
      var mins = this.state.mins;
      var secs = this.state.secs;

      if (this.state.timerStart === false) {
        if (this.state.enableTimer === false) {
          this.handleSetTimeClick();
        }

        this.setState({
          timerStart: true
        });
        this.setState({
          alarmStart: true
        });

        if (hours == 0 && mins == 0 && secs == 0) {
          this.setState({
            alarmStart: false
          });
        }

        button.style.background = '#A4242F';
        button.innerHTML = 'Stop';
      } else {
        this.setState({
          timerStart: false
        });
        button.style.background = '#00A676';
        button.innerHTML = 'Start';
      }
    }
  }, {
    key: "countDown",
    value: function countDown() {
      var hours = this.state.hours;
      var mins = this.state.mins;
      var secs = this.state.secs;
      var button = document.getElementById('start-button');

      if (this.state.timerStart == true && this.state.enableTimer === true) {
        if (secs != 0) {
          this.setState({
            secs: (+this.state.secs - 1).toString().padStart(2, 0)
          });
        } else if (mins != 0) {
          this.setState({
            mins: (+this.state.mins - 1).toString().padStart(2, 0)
          });
          this.setState({
            secs: '59'
          });
        } else if (hours != 0) {
          this.setState({
            hours: (+this.state.hours - 1).toString().padStart(2, 0)
          });
          this.setState({
            mins: '59'
          });
          this.setState({
            secs: '59'
          });
        } else if (this.state.alarmStart == true) {
          this.setState({
            audio1: this.state.audio()
          });
          this.setState({
            timerStart: false
          });
          this.state.audio1.play();
          window.navigator.vibrate(2000);
          button.style.background = '#00A676';
          button.innerHTML = 'Start';
        } else {
          button.style.background = '#00A676';
          button.innerHTML = 'Start';
          this.setState({
            timerStart: false
          });
        }
      }
    }
  }, {
    key: "handleSetTimeClick",
    value: function handleSetTimeClick() {
      var hour = document.getElementById('dial-hour');
      var mins = document.getElementById('dial-min');
      var secs = document.getElementById('dial-sec');
      var button = document.getElementById('start-button');
      var height = document.getElementById('display').offsetHeight;
      this.setState({
        timerStart: false
      });

      if (this.state.enableTimer === true) {
        this.setState({
          enableTimer: false
        });
        hour.style.height = (height * 0.2).toString() + 'px';
        mins.style.height = (height * 0.2).toString() + 'px';
        secs.style.height = (height * 0.2).toString() + 'px';
        button.style.background = '#00A676';
        button.innerHTML = 'Start';
      } else {
        this.setState({
          enableTimer: true
        });
        hour.style.height = '0';
        mins.style.height = '0';
        secs.style.height = '0';
      }
    }
  }, {
    key: "windowClick",
    value: function windowClick() {
      if (this.state.audio1 != '' && this.state.alarmStart == true) {
        this.setState({
          alarmStart: false
        });
        this.state.audio1.pause();
        window.navigator.vibrate(0);
      }
    }
  }, {
    key: "hoverColor",
    value: function hoverColor(e) {
      e.target.style.background = '#373337';
      e.target.style.color = 'white';
    }
  }, {
    key: "hoverOutColor",
    value: function hoverOutColor(e) {
      e.target.style.background = '#D8B39C';
      e.target.style.color = '#373337';
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var timeButton = {
        fontSize: '20px',
        width: '100%',
        background: '#D8B39C',
        outline: 'none'
      };
      var getNumHours = this.state.getHourArr().map(function (value, i) {
        return __jsx("button", {
          name: "hours",
          key: i + 'hours',
          style: timeButton,
          onMouseOver: _this3.hoverColor,
          onMouseOut: _this3.hoverOutColor,
          value: value,
          onClick: _this3.handleClick,
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 179,
            columnNumber: 67
          }
        }, value.toString().padStart(2, 0));
      });
      var getNumMin = this.state.getMinSecArr().map(function (value, i) {
        return __jsx("button", {
          name: "mins",
          key: i + 'mins',
          style: timeButton,
          onMouseOver: _this3.hoverColor,
          onMouseOut: _this3.hoverOutColor,
          value: value,
          onClick: _this3.handleClick,
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 180,
            columnNumber: 67
          }
        }, value.toString().padStart(2, 0));
      });
      var getNumSec = this.state.getMinSecArr().map(function (value, i) {
        return __jsx("button", {
          name: "secs",
          key: i + 'secs',
          style: timeButton,
          onMouseOver: _this3.hoverColor,
          onMouseOut: _this3.hoverOutColor,
          value: value,
          onClick: _this3.handleClick,
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 181,
            columnNumber: 67
          }
        }, value.toString().padStart(2, 0));
      });
      return __jsx("div", {
        onClick: this.windowClick,
        className: "jsx-579596132" + " " + 'container',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: "jsx-579596132" + " " + 'navbar',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185,
          columnNumber: 9
        }
      }, __jsx("h1", {
        id: "title",
        className: "jsx-579596132",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186,
          columnNumber: 11
        }
      }, "Simple Countdown Timer"), __jsx("div", {
        className: "jsx-579596132" + " " + 'flex-container-column',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187,
          columnNumber: 11
        }
      }, __jsx("h2", {
        className: "jsx-579596132" + " " + 'heading',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188,
          columnNumber: 15
        }
      }, "Today's Date: ", __jsx("u", {
        className: "jsx-579596132",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188,
          columnNumber: 55
        }
      }, this.todayDate())), __jsx("h2", {
        className: "jsx-579596132" + " " + 'heading',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189,
          columnNumber: 15
        }
      }, "Current Time: ", __jsx("u", {
        className: "jsx-579596132",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189,
          columnNumber: 55
        }
      }, this.state.time)))), __jsx("div", {
        id: "display",
        className: "jsx-579596132",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193,
          columnNumber: 9
        }
      }, __jsx("div", {
        id: "timer-wrapper",
        className: "jsx-579596132",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194,
          columnNumber: 11
        }
      }, __jsx("div", {
        id: "timer",
        className: "jsx-579596132",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "jsx-579596132" + " " + 'time-place-holders',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196,
          columnNumber: 15
        }
      }, __jsx("h1", {
        onClick: this.handleSetTimeClick,
        className: "jsx-579596132" + " " + 'time-display',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197,
          columnNumber: 17
        }
      }, this.state.hours, ":"), __jsx("div", {
        id: "dial-hour",
        className: "jsx-579596132" + " " + 'dial-wrapper1',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198,
          columnNumber: 17
        }
      }, getNumHours), __jsx("h1", {
        onClick: this.handleSetTimeClick,
        className: "jsx-579596132" + " " + 'description',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201,
          columnNumber: 17
        }
      }, "Hours")), __jsx("div", {
        className: "jsx-579596132" + " " + 'time-place-holders',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203,
          columnNumber: 15
        }
      }, __jsx("h1", {
        onClick: this.handleSetTimeClick,
        className: "jsx-579596132" + " " + 'time-display',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204,
          columnNumber: 17
        }
      }, this.state.mins, ":"), __jsx("div", {
        id: "dial-min",
        className: "jsx-579596132" + " " + 'dial-wrapper1',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205,
          columnNumber: 17
        }
      }, getNumMin), __jsx("h1", {
        onClick: this.handleSetTimeClick,
        className: "jsx-579596132" + " " + 'description',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208,
          columnNumber: 17
        }
      }, "Mins")), __jsx("div", {
        className: "jsx-579596132" + " " + 'time-place-holders',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210,
          columnNumber: 15
        }
      }, __jsx("h1", {
        onClick: this.handleSetTimeClick,
        className: "jsx-579596132" + " " + 'time-display',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211,
          columnNumber: 17
        }
      }, this.state.secs), __jsx("div", {
        id: "dial-sec",
        className: "jsx-579596132" + " " + 'dial-wrapper1',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212,
          columnNumber: 17
        }
      }, getNumSec), __jsx("h1", {
        onClick: this.handleSetTimeClick,
        className: "jsx-579596132" + " " + 'description',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215,
          columnNumber: 17
        }
      }, "Secs"))), __jsx("button", {
        id: "start-button",
        onClick: this.handleStartClick,
        className: "jsx-579596132",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218,
          columnNumber: 13
        }
      }, "Start")), __jsx("footer", {
        className: "jsx-579596132",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 220,
          columnNumber: 11
        }
      }, __jsx("p", {
        className: "jsx-579596132",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 221,
          columnNumber: 13
        }
      }, "\xA9 Bryan Wong | 2020"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "2746388847",
        __self: this
      }, ".container.jsx-579596132{min-height:calc(100vh - 18px);border:solid;}.navbar.jsx-579596132{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;min-height:10vh;padding-left:10px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:#373337;color:#D8B39C;border-bottom:3px solid #D8B39C;}#title.jsx-579596132{font-size:55px;}.flex-container-column.jsx-579596132{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:0 10px 0 10px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;jistify-content:center;margin-left:2%;border:solid;}.heading.jsx-579596132{font-weight:300;}#timer-wrapper.jsx-579596132{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;min-width:28%;position:absolute;bottom:33%;}#display.jsx-579596132{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;min-height:calc(90vh - 20px);-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:100%;background-image:radial-gradient( #F7F9F9 ,#E3E7D3,#849483);}#timer.jsx-579596132{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;text-align:center;min-width:33.33%;}.time-place-holders.jsx-579596132{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;text-align:center;}.dial-wrapper1.jsx-579596132{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;height:0px;overflow:auto;}.dial-wrapper1.jsx-579596132::-webkit-scrollbar{display:none;}#start-button.jsx-579596132{width:100%;font-size:25px;height:32px;background:#00A676;color:#F7F9F9;}h1.jsx-579596132:hover{cursor:pointer;}h1.jsx-579596132:focus{outline:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}h1.jsx-579596132{-webkit-user-select:all;-moz-user-select:all;-ms-user-select:all;-webkit-user-select:all;-moz-user-select:all;-ms-user-select:all;user-select:all;}footer.jsx-579596132{position:absolute;display:block;bottom:0;left:0;padding:5px 0 8px 5px;width:100%;z-index:1;background:#373337;color:#D8B39C;font-size:15px;border-top:3px solid #D8B39C;height:5%;}.time-display.jsx-579596132{height:90%;font-size:160px;font-weight:400;background-color:#373337;color:#D8B39C;}.description.jsx-579596132{background-color:#373337;color:#D8B39C;}button.jsx-579596132{outline:none;}button.jsx-579596132:focus{outline:none;}@media screen and (max-width:1000px){#title.jsx-579596132{font-size:42px;}.heading.jsx-579596132{font-size:18px;}.time-display.jsx-579596132{font-size:120px;}.description.jsx-579596132{font-size:25px;}#start-button.jsx-579596132{font-size:23px;}footer.jsx-579596132{font-size:13px;}}@media screen and (max-width:750px){#title.jsx-579596132{font-size:30px;}.heading.jsx-579596132{font-size:15px;}.flex-container-column.jsx-579596132{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.time-display.jsx-579596132{font-size:120px;}.description.jsx-579596132{font-size:25px;}#start-button.jsx-579596132{font-size:23px;}footer.jsx-579596132{font-size:13px;bottom:0;}}@media screen and (max-width:575px){footer.jsx-579596132{font-size:13px;bottom:-30px;}.navbar.jsx-579596132{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin:0;padding:0;}.flex-container-column.jsx-579596132{margin:0;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin:10px 0 10px 0;border:none;}}@media screen and (max-width:450px){.container.jsx-579596132{box-sizing:border-box;}#title.jsx-579596132{font-size:30px;}.heading.jsx-579596132{font-size:15px;}.time-display.jsx-579596132{font-size:90px;}.description.jsx-579596132{font-size:25px;}#start-button.jsx-579596132{font-size:23px;}}@media screen and (max-width:375px){#title.jsx-579596132{font-size:24px;}#display.jsx-579596132{min-height:100vh;}.time-display.jsx-579596132{font-size:60px;}.description.jsx-579596132{font-size:25px;}#start-button.jsx-579596132{font-size:20px;}footer.jsx-579596132{bottom:-102px;}#timer-wrapper.jsx-579596132{bottom:25%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQnJ5YW5cXGRlc2t0b3BcXFByb2dyYW1taW5nIFByb2plY3RzXFwwMi4xIFNpbXBsZSBDb3VudCBEb3duXFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ09vQixBQUcyQyxBQUtqQixBQVNFLEFBR0YsQUFTRyxBQUlILEFBT0EsQUFTQSxBQU1BLEFBS0EsQUFNQSxBQUdGLEFBT0ksQUFHRixBQUlXLEFBTU4sQUFjUCxBQU9jLEFBSVosQUFHRCxBQUlLLEFBR0EsQUFJQyxBQUdELEFBR0EsQUFHQSxBQUtBLEFBR0EsQUFHTyxBQUtOLEFBR0QsQUFHQSxBQUdBLEFBTUEsQUFJTyxBQUtiLEFBUWEsQUFHUCxBQUdBLEFBR0EsQUFHQSxBQUdBLEFBS0EsQUFHRSxBQUdGLEFBR0EsQUFHQSxBQUdELEFBR0gsU0E3Q1csRUE1R1QsQUFrQ0MsQUF3SGxCLEVBN0pBLEFBYW1CLEFBbUNuQixBQUdBLENBdUdFLENBM01GLEFBMkRBLEFBNkNFLEFBR0EsQUFPQSxBQUdBLEFBR0EsQUFLQSxBQUdBLEFBV0EsQUFHQSxBQUdXLEFBTUksQUFvQmYsQUFHQSxBQUdBLEFBR0EsQUFHQSxBQUtBLEFBTUEsQUFHQSxBQUdBLENBNUxGLEFBbUdFLEFBeUJBLENBdURBLENBdkhjLElBZ0dkLEVBdEdxQixBQWdGckIsQ0FyRGMsQ0F4Q0YsQ0FrQ0ksQ0FpRWhCLEVBdEthLEVBdUZKLE1BbkJVLENBd0NyQixFQXBCUyxFQXRGVCxBQW9HMkIsRUFyQkwsR0FRRSxTQXBCUixRQWFFLEdBcUJGLEVBYkgsQ0FwQmIsR0FqRWtCLEFBWU0sQUFhQSxBQU9PLEFBU1YsQUFNRyxBQUtBLElBd0ZHLEFBd0JkLEdBOUVELENBYVosS0FrRWMsQUFLVyxHQXpLTCxDQXNGQyxNQStFbkIsQ0E5RkYsS0F2Q3lCLEtBL0JKLEFBeUtMLEVBbkZBLFVBb0ZkLElBbkZlLGVBQ2MsSUFoRFgsR0FvQ3BCLE1BakV3QixBQWFSLEFBc0JJLEFBS1AsU0FWTSxFQVdILEdBM0JJLEVBZ0VSLEVBMUNaLElBbkNxQixHQXlDckIsQUFzRnVCLENBakd2QixBQWdEQSxNQWhFYSxXQUNiLE1BMUJxQixDQStCQSxrQkE5QkwsY0FDa0IsZ0NBQ2xDLENBU3lCLEdBK0h2QixvQkE5SGUsS0FtQk8sVUFsQlQsYUFDZix1REFrQmEsV0FDbUQsNERBQ2hFIiwiZmlsZSI6IkM6XFxVc2Vyc1xcQnJ5YW5cXGRlc2t0b3BcXFByb2dyYW1taW5nIFByb2plY3RzXFwwMi4xIFNpbXBsZSBDb3VudCBEb3duXFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgaG9tZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICB0aW1lOiBuZXcgRGF0ZSgpLnRvTG9jYWxlVGltZVN0cmluZygpLFxyXG4gICAgICBob3VyczogJzAwJyxcclxuICAgICAgbWluczogJzAwJyxcclxuICAgICAgc2VjczogJzAwJyxcclxuICAgICAgdGltZXJTdGFydDogZmFsc2UsXHJcbiAgICAgIGVuYWJsZVRpbWVyOiB0cnVlLFxyXG4gICAgICBhbGFybVN0YXJ0OiBmYWxzZSxcclxuICAgICAgYXVkaW86ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gbmV3IEF1ZGlvKCcuL2FsYXJtLm1wMycpXHJcbiAgICAgIH0sXHJcbiAgICAgIGF1ZGlvMTogJycsXHJcbiAgICAgIGdldEhvdXJBcnI6ICgpID0+IHtcclxuICAgICAgICBsZXQgYXJyID0gW107XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IDEwMDsgaSsrKXtcclxuICAgICAgICAgIGFyci5wdXNoKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYXJyXHJcbiAgICAgIH0sXHJcbiAgICAgIGdldE1pblNlY0FycjogKCkgPT4ge1xyXG4gICAgICAgIGxldCBhcnIgPSBbXTtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgNjA7IGkrKyl7XHJcbiAgICAgICAgICBhcnIucHVzaChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFyclxyXG4gICAgICB9LFxyXG4gICAgfTtcclxuXHJcblxyXG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5oYW5kbGVDbGljayA9IHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKTtcclxuICAgIHRoaXMuaGFuZGxlU3RhcnRDbGljayA9IHRoaXMuaGFuZGxlU3RhcnRDbGljay5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5jb3VudERvd24gPSB0aGlzLmNvdW50RG93bi5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5oYW5kbGVTZXRUaW1lQ2xpY2sgPSB0aGlzLmhhbmRsZVNldFRpbWVDbGljay5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy53aW5kb3dDbGljayA9IHRoaXMud2luZG93Q2xpY2suYmluZCh0aGlzKTtcclxuICAgIH07XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5sb2NhbFRpbWUgPSBzZXRJbnRlcnZhbCgoKSA9PiB7dGhpcy5zZXRTdGF0ZSh7IHRpbWU6IG5ldyBEYXRlKCkudG9Mb2NhbGVUaW1lU3RyaW5nKCl9KX0sIDEwMDApO1xyXG4gICAgdGhpcy50aW1lclRpbWUgPSBzZXRJbnRlcnZhbCh0aGlzLmNvdW50RG93biwgMTAwMCk7XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpe1xyXG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLmxvY2FsVGltZSlcclxuICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lclRpbWUpXHJcbiAgfVxyXG5cclxuICB0b2RheURhdGUoKXtcclxuICAgIGxldCB0b2RheSA9IG5ldyBEYXRlKCk7XHJcbiAgICBsZXQgZGQgPSBTdHJpbmcodG9kYXkuZ2V0RGF0ZSgpKS5wYWRTdGFydCgyLCcwJyk7XHJcbiAgICBsZXQgbW0gPSBTdHJpbmcodG9kYXkuZ2V0TW9udGgoKSkucGFkU3RhcnQoMiwnMCcpO1xyXG4gICAgbGV0IHl5eXkgPSB0b2RheS5nZXRGdWxsWWVhcigpO1xyXG4gICAgcmV0dXJuICBtbSArICcvJyArIGRkICsgJy8nICsgeXl5eTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVDaGFuZ2UoZSl7XHJcbiAgICBsZXQgdGFyZ2V0ID0gZS50YXJnZXQ7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtbdGFyZ2V0Lm5hbWVdIDogdGFyZ2V0LnZhbHVlfSk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlQ2xpY2soZSl7XHJcbiAgICBsZXQgdGFyZ2V0ID0gZS50YXJnZXQ7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtbdGFyZ2V0Lm5hbWVdIDogdGFyZ2V0LnZhbHVlLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwwKX0pXHJcbiAgfVxyXG5cclxuICBoYW5kbGVTdGFydENsaWNrKCl7XHJcbiAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXJ0LWJ1dHRvbicpO1xyXG4gICAgbGV0IGhvdXJzID0gdGhpcy5zdGF0ZS5ob3VycztcclxuICAgIGxldCBtaW5zID0gdGhpcy5zdGF0ZS5taW5zO1xyXG4gICAgbGV0IHNlY3MgPSB0aGlzLnN0YXRlLnNlY3M7XHJcblxyXG4gICAgaWYodGhpcy5zdGF0ZS50aW1lclN0YXJ0ID09PSBmYWxzZSl7XHJcbiAgICAgIGlmICh0aGlzLnN0YXRlLmVuYWJsZVRpbWVyID09PSBmYWxzZSl7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVTZXRUaW1lQ2xpY2soKVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe3RpbWVyU3RhcnQgOiB0cnVlfSk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2FsYXJtU3RhcnQgOiB0cnVlfSk7XHJcbiAgICAgIGlmIChob3VycyA9PSAwICYmIG1pbnM9PSAwICYmIHNlY3MgPT0gMCl7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YWxhcm1TdGFydCA6IGZhbHNlfSk7XHJcbiAgICAgIH1cclxuICAgICAgYnV0dG9uLnN0eWxlLmJhY2tncm91bmQgPSAnI0E0MjQyRic7XHJcbiAgICAgIGJ1dHRvbi5pbm5lckhUTUwgPSAnU3RvcCc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHt0aW1lclN0YXJ0IDogZmFsc2V9KVxyXG4gICAgICBidXR0b24uc3R5bGUuYmFja2dyb3VuZCA9ICcjMDBBNjc2JztcclxuICAgICAgYnV0dG9uLmlubmVySFRNTCA9ICdTdGFydCc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgY291bnREb3duICgpe1xyXG4gICAgbGV0IGhvdXJzID0gdGhpcy5zdGF0ZS5ob3VycztcclxuICAgIGxldCBtaW5zID0gdGhpcy5zdGF0ZS5taW5zO1xyXG4gICAgbGV0IHNlY3MgPSB0aGlzLnN0YXRlLnNlY3M7XHJcbiAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXJ0LWJ1dHRvbicpO1xyXG4gICAgXHJcblxyXG4gICAgaWYgKHRoaXMuc3RhdGUudGltZXJTdGFydCA9PSB0cnVlICYmIHRoaXMuc3RhdGUuZW5hYmxlVGltZXIgPT09IHRydWUpe1xyXG4gICAgICBpZiAoc2VjcyAhPSAwKXtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtzZWNzOiAoK3RoaXMuc3RhdGUuc2VjcyAtIDEpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwwKX0pXHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZiAobWlucyAhPSAwKXtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHttaW5zOiAoK3RoaXMuc3RhdGUubWlucyAtIDEpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwwKX0pXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2VjczogJzU5J30pXHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZiAoaG91cnMgIT0gMCApe1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2hvdXJzOiAoK3RoaXMuc3RhdGUuaG91cnMgLSAxKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsMCl9KVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe21pbnM6ICc1OSd9KVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3NlY3M6ICc1OSd9KVxyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYodGhpcy5zdGF0ZS5hbGFybVN0YXJ0ID09IHRydWUpe1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2F1ZGlvMSA6IHRoaXMuc3RhdGUuYXVkaW8oKX0pO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3RpbWVyU3RhcnQgOiBmYWxzZX0pO1xyXG4gICAgICAgIHRoaXMuc3RhdGUuYXVkaW8xLnBsYXkoKTtcclxuICAgICAgICB3aW5kb3cubmF2aWdhdG9yLnZpYnJhdGUoMjAwMCk7XHJcbiAgICAgICAgYnV0dG9uLnN0eWxlLmJhY2tncm91bmQgPSAnIzAwQTY3Nic7XHJcbiAgICAgICAgYnV0dG9uLmlubmVySFRNTCA9ICdTdGFydCc7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYnV0dG9uLnN0eWxlLmJhY2tncm91bmQgPSAnIzAwQTY3Nic7XHJcbiAgICAgICAgYnV0dG9uLmlubmVySFRNTCA9ICdTdGFydCc7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dGltZXJTdGFydCA6IGZhbHNlfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhhbmRsZVNldFRpbWVDbGljaygpe1xyXG4gICAgICBsZXQgaG91ciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaWFsLWhvdXInKTtcclxuICAgICAgbGV0IG1pbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlhbC1taW4nKTtcclxuICAgICAgbGV0IHNlY3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlhbC1zZWMnKTtcclxuICAgICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydC1idXR0b24nKTtcclxuICAgICAgbGV0IGhlaWdodCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXNwbGF5Jykub2Zmc2V0SGVpZ2h0O1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHt0aW1lclN0YXJ0OiBmYWxzZX0pXHJcblxyXG4gICAgaWYgKHRoaXMuc3RhdGUuZW5hYmxlVGltZXIgPT09IHRydWUpe1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtlbmFibGVUaW1lcjogZmFsc2V9KVxyXG4gICAgICBob3VyLnN0eWxlLmhlaWdodCA9IChoZWlnaHQqMC4yKS50b1N0cmluZygpKydweCc7XHJcbiAgICAgIG1pbnMuc3R5bGUuaGVpZ2h0ID0gKGhlaWdodCowLjIpLnRvU3RyaW5nKCkrJ3B4JztcclxuICAgICAgc2Vjcy5zdHlsZS5oZWlnaHQgPSAoaGVpZ2h0KjAuMikudG9TdHJpbmcoKSsncHgnO1xyXG4gICAgICBidXR0b24uc3R5bGUuYmFja2dyb3VuZCA9ICcjMDBBNjc2JztcclxuICAgICAgYnV0dG9uLmlubmVySFRNTCA9ICdTdGFydCc7XHJcbiAgICB9IGVsc2V7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2VuYWJsZVRpbWVyOiB0cnVlfSlcclxuICAgICAgaG91ci5zdHlsZS5oZWlnaHQgPSAnMCc7XHJcbiAgICAgIG1pbnMuc3R5bGUuaGVpZ2h0ID0gJzAnO1xyXG4gICAgICBzZWNzLnN0eWxlLmhlaWdodCA9ICcwJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHdpbmRvd0NsaWNrKCl7XHJcbiAgICBpZiAodGhpcy5zdGF0ZS5hdWRpbzEgIT0gJycgJiYgdGhpcy5zdGF0ZS5hbGFybVN0YXJ0ID09IHRydWUpe1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHthbGFybVN0YXJ0IDogZmFsc2V9KTtcclxuICAgICAgdGhpcy5zdGF0ZS5hdWRpbzEucGF1c2UoKTtcclxuICAgICAgd2luZG93Lm5hdmlnYXRvci52aWJyYXRlKDApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaG92ZXJDb2xvcihlKXtcclxuICAgIGUudGFyZ2V0LnN0eWxlLmJhY2tncm91bmQgPSAnIzM3MzMzNyc7XHJcbiAgICBlLnRhcmdldC5zdHlsZS5jb2xvciA9ICd3aGl0ZSc7XHJcbiAgfVxyXG5cclxuICBob3Zlck91dENvbG9yKGUpe1xyXG4gICAgZS50YXJnZXQuc3R5bGUuYmFja2dyb3VuZCA9ICcjRDhCMzlDJztcclxuICAgIGUudGFyZ2V0LnN0eWxlLmNvbG9yID0gJyMzNzMzMzcnO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCl7XHJcbiAgICBjb25zdCB0aW1lQnV0dG9uID0ge1xyXG4gICAgICBmb250U2l6ZTogJzIwcHgnLFxyXG4gICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICBiYWNrZ3JvdW5kOiAnI0Q4QjM5QycsXHJcbiAgICAgIG91dGxpbmU6ICdub25lJyxcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgZ2V0TnVtSG91cnMgPSB0aGlzLnN0YXRlLmdldEhvdXJBcnIoKS5tYXAoKHZhbHVlLCBpKSA9PiA8YnV0dG9uIG5hbWUgPSAnaG91cnMnIGtleSA9IHtpICsgJ2hvdXJzJ30gc3R5bGUgPSB7dGltZUJ1dHRvbn0gb25Nb3VzZU92ZXIgPSB7dGhpcy5ob3ZlckNvbG9yfSBvbk1vdXNlT3V0ID0ge3RoaXMuaG92ZXJPdXRDb2xvcn0gdmFsdWUgPSB7dmFsdWV9IG9uQ2xpY2sgPSB7dGhpcy5oYW5kbGVDbGlja30+e3ZhbHVlLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwwKX08L2J1dHRvbj4pO1xyXG4gICAgY29uc3QgZ2V0TnVtTWluID0gdGhpcy5zdGF0ZS5nZXRNaW5TZWNBcnIoKS5tYXAoKHZhbHVlLCBpKSA9PiA8YnV0dG9uIG5hbWUgPSAnbWlucycga2V5ID0ge2kgKyAnbWlucyd9IHN0eWxlID0ge3RpbWVCdXR0b259IG9uTW91c2VPdmVyID0ge3RoaXMuaG92ZXJDb2xvcn0gb25Nb3VzZU91dCA9IHt0aGlzLmhvdmVyT3V0Q29sb3J9IHZhbHVlID0ge3ZhbHVlfSBvbkNsaWNrID0ge3RoaXMuaGFuZGxlQ2xpY2t9Pnt2YWx1ZS50b1N0cmluZygpLnBhZFN0YXJ0KDIsMCl9PC9idXR0b24+KTtcclxuICAgIGNvbnN0IGdldE51bVNlYyA9IHRoaXMuc3RhdGUuZ2V0TWluU2VjQXJyKCkubWFwKCh2YWx1ZSwgaSkgPT4gPGJ1dHRvbiBuYW1lID0gJ3NlY3MnIGtleSA9IHtpICsgJ3NlY3MnfSBzdHlsZSA9IHt0aW1lQnV0dG9ufSBvbk1vdXNlT3ZlciA9IHt0aGlzLmhvdmVyQ29sb3J9IG9uTW91c2VPdXQgPSB7dGhpcy5ob3Zlck91dENvbG9yfSB2YWx1ZSA9IHt2YWx1ZX0gb25DbGljayA9IHt0aGlzLmhhbmRsZUNsaWNrfT57dmFsdWUudG9TdHJpbmcoKS5wYWRTdGFydCgyLDApfTwvYnV0dG9uPik7XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZSA9ICdjb250YWluZXInIG9uQ2xpY2sgPSB7dGhpcy53aW5kb3dDbGlja30+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWUgPSAnbmF2YmFyJz5cclxuICAgICAgICAgIDxoMSBpZCA9ICd0aXRsZSc+U2ltcGxlIENvdW50ZG93biBUaW1lcjwvaDE+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9ICdmbGV4LWNvbnRhaW5lci1jb2x1bW4nPlxyXG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWUgPSAnaGVhZGluZyc+VG9kYXkncyBEYXRlOiA8dT57dGhpcy50b2RheURhdGUoKX08L3U+PC9oMj5cclxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lID0gJ2hlYWRpbmcnPkN1cnJlbnQgVGltZTogPHU+e3RoaXMuc3RhdGUudGltZX08L3U+PC9oMj4gIFxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgaWQgPSAnZGlzcGxheSc+XHJcbiAgICAgICAgICA8ZGl2IGlkID0gJ3RpbWVyLXdyYXBwZXInPlxyXG4gICAgICAgICAgICA8ZGl2IGlkID0gJ3RpbWVyJz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9ICd0aW1lLXBsYWNlLWhvbGRlcnMnPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZSA9ICd0aW1lLWRpc3BsYXknIG9uQ2xpY2sgPSB7dGhpcy5oYW5kbGVTZXRUaW1lQ2xpY2t9Pnt0aGlzLnN0YXRlLmhvdXJzfTo8L2gxPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZCA9ICdkaWFsLWhvdXInIGNsYXNzTmFtZSA9ICdkaWFsLXdyYXBwZXIxJz5cclxuICAgICAgICAgICAgICAgICAgICB7Z2V0TnVtSG91cnN9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWUgPSAnZGVzY3JpcHRpb24nIG9uQ2xpY2sgPSB7dGhpcy5oYW5kbGVTZXRUaW1lQ2xpY2t9PkhvdXJzPC9oMT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9ICd0aW1lLXBsYWNlLWhvbGRlcnMnPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZSA9ICd0aW1lLWRpc3BsYXknIG9uQ2xpY2sgPSB7dGhpcy5oYW5kbGVTZXRUaW1lQ2xpY2t9Pnt0aGlzLnN0YXRlLm1pbnN9OjwvaDE+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkID0gJ2RpYWwtbWluJyBjbGFzc05hbWUgPSAnZGlhbC13cmFwcGVyMSc+XHJcbiAgICAgICAgICAgICAgICAgICAge2dldE51bU1pbn1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZSA9ICdkZXNjcmlwdGlvbicgb25DbGljayA9IHt0aGlzLmhhbmRsZVNldFRpbWVDbGlja30+TWluczwvaDE+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSAndGltZS1wbGFjZS1ob2xkZXJzJz5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWUgPSAndGltZS1kaXNwbGF5JyBvbkNsaWNrID0ge3RoaXMuaGFuZGxlU2V0VGltZUNsaWNrfT57dGhpcy5zdGF0ZS5zZWNzfTwvaDE+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkID0gJ2RpYWwtc2VjJyBjbGFzc05hbWUgPSAnZGlhbC13cmFwcGVyMSc+XHJcbiAgICAgICAgICAgICAgICAgICAge2dldE51bVNlY31cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZSA9ICdkZXNjcmlwdGlvbicgb25DbGljayA9IHt0aGlzLmhhbmRsZVNldFRpbWVDbGlja30+U2VjczwvaDE+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8YnV0dG9uIGlkID0gJ3N0YXJ0LWJ1dHRvbicgb25DbGljayA9IHt0aGlzLmhhbmRsZVN0YXJ0Q2xpY2t9PlN0YXJ0PC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxmb290ZXI+XHJcbiAgICAgICAgICAgIDxwPiZjb3B5OyBCcnlhbiBXb25nIHwgMjAyMDwvcD5cclxuICAgICAgICAgIDwvZm9vdGVyPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAuY29udGFpbmVye1xyXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gMThweCk7XHJcbiAgICAgICAgICAgIGJvcmRlcjogc29saWQ7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm5hdmJhcntcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgbWluLWhlaWdodDogMTB2aDtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMzczMzM3O1xyXG4gICAgICAgICAgICBjb2xvcjogI0Q4QjM5QztcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNEOEIzOUM7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAjdGl0bGV7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNTVweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5mbGV4LWNvbnRhaW5lci1jb2x1bW57XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMTBweCAwIDEwcHg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGppc3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMiU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogc29saWQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuaGVhZGluZ3tcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAjdGltZXItd3JhcHBlcntcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgbWluLXdpZHRoOiAyOCU7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgYm90dG9tOiAzMyU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAjZGlzcGxheXtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgbWluLWhlaWdodDogY2FsYyg5MHZoIC0gMjBweCk7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KCAjRjdGOUY5ICwgI0UzRTdEMywgIzg0OTQ4Myk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAjdGltZXJ7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgbWluLXdpZHRoOiAzMy4zMyU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAudGltZS1wbGFjZS1ob2xkZXJze1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuZGlhbC13cmFwcGVyMXtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgaGVpZ2h0OiAwcHg7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmRpYWwtd3JhcHBlcjE6Oi13ZWJraXQtc2Nyb2xsYmFye1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgI3N0YXJ0LWJ1dHRvbntcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDBBNjc2O1xyXG4gICAgICAgICAgICBjb2xvcjogI0Y3RjlGOTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGgxOmhvdmVye1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBoMTpmb2N1c3tcclxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBoMXtcclxuICAgICAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogYWxsOyAgLyogQ2hyb21lIDQ5KyAqL1xyXG4gICAgICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBhbGw7ICAgICAvKiBGaXJlZm94IDQzKyAqL1xyXG4gICAgICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IGFsbDsgICAgICAvKiBObyBzdXBwb3J0IHlldCAqL1xyXG4gICAgICAgICAgICB1c2VyLXNlbGVjdDogYWxsOyAgICAgICAgICAvKiBMaWtlbHkgZnV0dXJlICovICAgXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBmb290ZXJ7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgcGFkZGluZzogNXB4IDAgOHB4IDVweDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMzNzMzMzc7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjRDhCMzlDO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDNweCBzb2xpZCAjRDhCMzlDO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDUlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnRpbWUtZGlzcGxheXtcclxuICAgICAgICAgICAgaGVpZ2h0OiA5MCU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTYwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzNzMzMzc7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjRDhCMzlDO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmRlc2NyaXB0aW9ue1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzczMzM3O1xyXG4gICAgICAgICAgICBjb2xvcjogI0Q4QjM5QztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJ1dHRvbntcclxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJ1dHRvbjpmb2N1c3tcclxuICAgICAgICAgICAgb3V0bGluZTpub25lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KXtcclxuICAgICAgICAgICAgI3RpdGxle1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogNDJweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaGVhZGluZ3tcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC50aW1lLWRpc3BsYXl7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxMjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZGVzY3JpcHRpb257XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICNzdGFydC1idXR0b257XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyM3B4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvb3RlcntcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc1MHB4KXtcclxuICAgICAgICAgICAgI3RpdGxle1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaGVhZGluZ3tcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmZsZXgtY29udGFpbmVyLWNvbHVtbntcclxuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnRpbWUtZGlzcGxheXtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEyMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5kZXNjcmlwdGlvbntcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI3N0YXJ0LWJ1dHRvbntcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDIzcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9vdGVye1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KXtcclxuICAgICAgICAgICAgZm9vdGVye1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgICBib3R0b206IC0zMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5uYXZiYXJ7XHJcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZmxleC1jb250YWluZXItY29sdW1ue1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMTBweCAwIDEwcHggMDtcclxuICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ1MHB4KXtcclxuICAgICAgICAgICAgLmNvbnRhaW5lcntcclxuICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICN0aXRsZXtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmhlYWRpbmd7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC50aW1lLWRpc3BsYXl7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiA5MHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5kZXNjcmlwdGlvbntcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI3N0YXJ0LWJ1dHRvbntcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDIzcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3NXB4KXtcclxuICAgICAgICAgICAgI3RpdGxle1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjZGlzcGxheXtcclxuICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAudGltZS1kaXNwbGF5e1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogNjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZGVzY3JpcHRpb257XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICNzdGFydC1idXR0b257XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvb3RlcntcclxuICAgICAgICAgICAgICBib3R0b206IC0xMDJweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjdGltZXItd3JhcHBlcntcclxuICAgICAgICAgICAgICBib3R0b206IDI1JTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcblxyXG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgIGh0bWwsXHJcbiAgICAgIGJvZHkge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFNlZ29lIFVJLCBSb2JvdG8sXHJcbiAgICAgICAgICBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBGaXJhIFNhbnMsIERyb2lkIFNhbnMsIEhlbHZldGljYSBOZXVlLFxyXG4gICAgICAgICAgc2Fucy1zZXJpZjtcclxuICAgICAgfVxyXG4gICAgICAqe1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICB9XHJcbiAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufSAiXX0= */\n/*@ sourceURL=C:\\\\Users\\\\Bryan\\\\desktop\\\\Programming Projects\\\\02.1 Simple Count Down\\\\pages\\\\index.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "3161244322",
        __self: this
      }, "html,body{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto, Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue, sans-serif;}*{padding:0;margin:0;border:0;box-sizing:border-box;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQnJ5YW5cXGRlc2t0b3BcXFByb2dyYW1taW5nIFByb2plY3RzXFwwMi4xIFNpbXBsZSBDb3VudCBEb3duXFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbWMyQixBQU1xQixBQUdGLFVBQ0QsU0FDQSxTQUNhLHNCQUN4QixvRkFOQSIsImZpbGUiOiJDOlxcVXNlcnNcXEJyeWFuXFxkZXNrdG9wXFxQcm9ncmFtbWluZyBQcm9qZWN0c1xcMDIuMSBTaW1wbGUgQ291bnQgRG93blxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGhvbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpe1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgdGltZTogbmV3IERhdGUoKS50b0xvY2FsZVRpbWVTdHJpbmcoKSxcclxuICAgICAgaG91cnM6ICcwMCcsXHJcbiAgICAgIG1pbnM6ICcwMCcsXHJcbiAgICAgIHNlY3M6ICcwMCcsXHJcbiAgICAgIHRpbWVyU3RhcnQ6IGZhbHNlLFxyXG4gICAgICBlbmFibGVUaW1lcjogdHJ1ZSxcclxuICAgICAgYWxhcm1TdGFydDogZmFsc2UsXHJcbiAgICAgIGF1ZGlvOiAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBBdWRpbygnLi9hbGFybS5tcDMnKVxyXG4gICAgICB9LFxyXG4gICAgICBhdWRpbzE6ICcnLFxyXG4gICAgICBnZXRIb3VyQXJyOiAoKSA9PiB7XHJcbiAgICAgICAgbGV0IGFyciA9IFtdO1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCAxMDA7IGkrKyl7XHJcbiAgICAgICAgICBhcnIucHVzaChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFyclxyXG4gICAgICB9LFxyXG4gICAgICBnZXRNaW5TZWNBcnI6ICgpID0+IHtcclxuICAgICAgICBsZXQgYXJyID0gW107XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IDYwOyBpKyspe1xyXG4gICAgICAgICAgYXJyLnB1c2goaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhcnJcclxuICAgICAgfSxcclxuICAgIH07XHJcblxyXG5cclxuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuaGFuZGxlQ2xpY2sgPSB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmhhbmRsZVN0YXJ0Q2xpY2sgPSB0aGlzLmhhbmRsZVN0YXJ0Q2xpY2suYmluZCh0aGlzKTtcclxuICAgIHRoaXMuY291bnREb3duID0gdGhpcy5jb3VudERvd24uYmluZCh0aGlzKTtcclxuICAgIHRoaXMuaGFuZGxlU2V0VGltZUNsaWNrID0gdGhpcy5oYW5kbGVTZXRUaW1lQ2xpY2suYmluZCh0aGlzKTtcclxuICAgIHRoaXMud2luZG93Q2xpY2sgPSB0aGlzLndpbmRvd0NsaWNrLmJpbmQodGhpcyk7XHJcbiAgICB9O1xyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMubG9jYWxUaW1lID0gc2V0SW50ZXJ2YWwoKCkgPT4ge3RoaXMuc2V0U3RhdGUoeyB0aW1lOiBuZXcgRGF0ZSgpLnRvTG9jYWxlVGltZVN0cmluZygpfSl9LCAxMDAwKTtcclxuICAgIHRoaXMudGltZXJUaW1lID0gc2V0SW50ZXJ2YWwodGhpcy5jb3VudERvd24sIDEwMDApO1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50V2lsbFVubW91bnQoKXtcclxuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5sb2NhbFRpbWUpXHJcbiAgICBjbGVhckludGVydmFsKHRoaXMudGltZXJUaW1lKVxyXG4gIH1cclxuXHJcbiAgdG9kYXlEYXRlKCl7XHJcbiAgICBsZXQgdG9kYXkgPSBuZXcgRGF0ZSgpO1xyXG4gICAgbGV0IGRkID0gU3RyaW5nKHRvZGF5LmdldERhdGUoKSkucGFkU3RhcnQoMiwnMCcpO1xyXG4gICAgbGV0IG1tID0gU3RyaW5nKHRvZGF5LmdldE1vbnRoKCkpLnBhZFN0YXJ0KDIsJzAnKTtcclxuICAgIGxldCB5eXl5ID0gdG9kYXkuZ2V0RnVsbFllYXIoKTtcclxuICAgIHJldHVybiAgbW0gKyAnLycgKyBkZCArICcvJyArIHl5eXk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlQ2hhbmdlKGUpe1xyXG4gICAgbGV0IHRhcmdldCA9IGUudGFyZ2V0O1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7W3RhcmdldC5uYW1lXSA6IHRhcmdldC52YWx1ZX0pO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZUNsaWNrKGUpe1xyXG4gICAgbGV0IHRhcmdldCA9IGUudGFyZ2V0O1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7W3RhcmdldC5uYW1lXSA6IHRhcmdldC52YWx1ZS50b1N0cmluZygpLnBhZFN0YXJ0KDIsMCl9KVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlU3RhcnRDbGljaygpe1xyXG4gICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydC1idXR0b24nKTtcclxuICAgIGxldCBob3VycyA9IHRoaXMuc3RhdGUuaG91cnM7XHJcbiAgICBsZXQgbWlucyA9IHRoaXMuc3RhdGUubWlucztcclxuICAgIGxldCBzZWNzID0gdGhpcy5zdGF0ZS5zZWNzO1xyXG5cclxuICAgIGlmKHRoaXMuc3RhdGUudGltZXJTdGFydCA9PT0gZmFsc2Upe1xyXG4gICAgICBpZiAodGhpcy5zdGF0ZS5lbmFibGVUaW1lciA9PT0gZmFsc2Upe1xyXG4gICAgICAgIHRoaXMuaGFuZGxlU2V0VGltZUNsaWNrKClcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnNldFN0YXRlKHt0aW1lclN0YXJ0IDogdHJ1ZX0pO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHthbGFybVN0YXJ0IDogdHJ1ZX0pO1xyXG4gICAgICBpZiAoaG91cnMgPT0gMCAmJiBtaW5zPT0gMCAmJiBzZWNzID09IDApe1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2FsYXJtU3RhcnQgOiBmYWxzZX0pO1xyXG4gICAgICB9XHJcbiAgICAgIGJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kID0gJyNBNDI0MkYnO1xyXG4gICAgICBidXR0b24uaW5uZXJIVE1MID0gJ1N0b3AnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7dGltZXJTdGFydCA6IGZhbHNlfSlcclxuICAgICAgYnV0dG9uLnN0eWxlLmJhY2tncm91bmQgPSAnIzAwQTY3Nic7XHJcbiAgICAgIGJ1dHRvbi5pbm5lckhUTUwgPSAnU3RhcnQnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIGNvdW50RG93biAoKXtcclxuICAgIGxldCBob3VycyA9IHRoaXMuc3RhdGUuaG91cnM7XHJcbiAgICBsZXQgbWlucyA9IHRoaXMuc3RhdGUubWlucztcclxuICAgIGxldCBzZWNzID0gdGhpcy5zdGF0ZS5zZWNzO1xyXG4gICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydC1idXR0b24nKTtcclxuICAgIFxyXG5cclxuICAgIGlmICh0aGlzLnN0YXRlLnRpbWVyU3RhcnQgPT0gdHJ1ZSAmJiB0aGlzLnN0YXRlLmVuYWJsZVRpbWVyID09PSB0cnVlKXtcclxuICAgICAgaWYgKHNlY3MgIT0gMCl7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2VjczogKCt0aGlzLnN0YXRlLnNlY3MgLSAxKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsMCl9KVxyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKG1pbnMgIT0gMCl7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bWluczogKCt0aGlzLnN0YXRlLm1pbnMgLSAxKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsMCl9KVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3NlY3M6ICc1OSd9KVxyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKGhvdXJzICE9IDAgKXtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtob3VyczogKCt0aGlzLnN0YXRlLmhvdXJzIC0gMSkudG9TdHJpbmcoKS5wYWRTdGFydCgyLDApfSlcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHttaW5zOiAnNTknfSlcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtzZWNzOiAnNTknfSlcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmKHRoaXMuc3RhdGUuYWxhcm1TdGFydCA9PSB0cnVlKXtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHthdWRpbzEgOiB0aGlzLnN0YXRlLmF1ZGlvKCl9KTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHt0aW1lclN0YXJ0IDogZmFsc2V9KTtcclxuICAgICAgICB0aGlzLnN0YXRlLmF1ZGlvMS5wbGF5KCk7XHJcbiAgICAgICAgd2luZG93Lm5hdmlnYXRvci52aWJyYXRlKDIwMDApO1xyXG4gICAgICAgIGJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kID0gJyMwMEE2NzYnO1xyXG4gICAgICAgIGJ1dHRvbi5pbm5lckhUTUwgPSAnU3RhcnQnO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kID0gJyMwMEE2NzYnO1xyXG4gICAgICAgIGJ1dHRvbi5pbm5lckhUTUwgPSAnU3RhcnQnO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3RpbWVyU3RhcnQgOiBmYWxzZX0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoYW5kbGVTZXRUaW1lQ2xpY2soKXtcclxuICAgICAgbGV0IGhvdXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlhbC1ob3VyJyk7XHJcbiAgICAgIGxldCBtaW5zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RpYWwtbWluJyk7XHJcbiAgICAgIGxldCBzZWNzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RpYWwtc2VjJyk7XHJcbiAgICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnQtYnV0dG9uJyk7XHJcbiAgICAgIGxldCBoZWlnaHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlzcGxheScpLm9mZnNldEhlaWdodDtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7dGltZXJTdGFydDogZmFsc2V9KVxyXG5cclxuICAgIGlmICh0aGlzLnN0YXRlLmVuYWJsZVRpbWVyID09PSB0cnVlKXtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7ZW5hYmxlVGltZXI6IGZhbHNlfSlcclxuICAgICAgaG91ci5zdHlsZS5oZWlnaHQgPSAoaGVpZ2h0KjAuMikudG9TdHJpbmcoKSsncHgnO1xyXG4gICAgICBtaW5zLnN0eWxlLmhlaWdodCA9IChoZWlnaHQqMC4yKS50b1N0cmluZygpKydweCc7XHJcbiAgICAgIHNlY3Muc3R5bGUuaGVpZ2h0ID0gKGhlaWdodCowLjIpLnRvU3RyaW5nKCkrJ3B4JztcclxuICAgICAgYnV0dG9uLnN0eWxlLmJhY2tncm91bmQgPSAnIzAwQTY3Nic7XHJcbiAgICAgIGJ1dHRvbi5pbm5lckhUTUwgPSAnU3RhcnQnO1xyXG4gICAgfSBlbHNle1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtlbmFibGVUaW1lcjogdHJ1ZX0pXHJcbiAgICAgIGhvdXIuc3R5bGUuaGVpZ2h0ID0gJzAnO1xyXG4gICAgICBtaW5zLnN0eWxlLmhlaWdodCA9ICcwJztcclxuICAgICAgc2Vjcy5zdHlsZS5oZWlnaHQgPSAnMCc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB3aW5kb3dDbGljaygpe1xyXG4gICAgaWYgKHRoaXMuc3RhdGUuYXVkaW8xICE9ICcnICYmIHRoaXMuc3RhdGUuYWxhcm1TdGFydCA9PSB0cnVlKXtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7YWxhcm1TdGFydCA6IGZhbHNlfSk7XHJcbiAgICAgIHRoaXMuc3RhdGUuYXVkaW8xLnBhdXNlKCk7XHJcbiAgICAgIHdpbmRvdy5uYXZpZ2F0b3IudmlicmF0ZSgwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhvdmVyQ29sb3IoZSl7XHJcbiAgICBlLnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kID0gJyMzNzMzMzcnO1xyXG4gICAgZS50YXJnZXQuc3R5bGUuY29sb3IgPSAnd2hpdGUnO1xyXG4gIH1cclxuXHJcbiAgaG92ZXJPdXRDb2xvcihlKXtcclxuICAgIGUudGFyZ2V0LnN0eWxlLmJhY2tncm91bmQgPSAnI0Q4QjM5Qyc7XHJcbiAgICBlLnRhcmdldC5zdHlsZS5jb2xvciA9ICcjMzczMzM3JztcclxuICB9XHJcblxyXG4gIHJlbmRlcigpe1xyXG4gICAgY29uc3QgdGltZUJ1dHRvbiA9IHtcclxuICAgICAgZm9udFNpemU6ICcyMHB4JyxcclxuICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgYmFja2dyb3VuZDogJyNEOEIzOUMnLFxyXG4gICAgICBvdXRsaW5lOiAnbm9uZScsXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGdldE51bUhvdXJzID0gdGhpcy5zdGF0ZS5nZXRIb3VyQXJyKCkubWFwKCh2YWx1ZSwgaSkgPT4gPGJ1dHRvbiBuYW1lID0gJ2hvdXJzJyBrZXkgPSB7aSArICdob3Vycyd9IHN0eWxlID0ge3RpbWVCdXR0b259IG9uTW91c2VPdmVyID0ge3RoaXMuaG92ZXJDb2xvcn0gb25Nb3VzZU91dCA9IHt0aGlzLmhvdmVyT3V0Q29sb3J9IHZhbHVlID0ge3ZhbHVlfSBvbkNsaWNrID0ge3RoaXMuaGFuZGxlQ2xpY2t9Pnt2YWx1ZS50b1N0cmluZygpLnBhZFN0YXJ0KDIsMCl9PC9idXR0b24+KTtcclxuICAgIGNvbnN0IGdldE51bU1pbiA9IHRoaXMuc3RhdGUuZ2V0TWluU2VjQXJyKCkubWFwKCh2YWx1ZSwgaSkgPT4gPGJ1dHRvbiBuYW1lID0gJ21pbnMnIGtleSA9IHtpICsgJ21pbnMnfSBzdHlsZSA9IHt0aW1lQnV0dG9ufSBvbk1vdXNlT3ZlciA9IHt0aGlzLmhvdmVyQ29sb3J9IG9uTW91c2VPdXQgPSB7dGhpcy5ob3Zlck91dENvbG9yfSB2YWx1ZSA9IHt2YWx1ZX0gb25DbGljayA9IHt0aGlzLmhhbmRsZUNsaWNrfT57dmFsdWUudG9TdHJpbmcoKS5wYWRTdGFydCgyLDApfTwvYnV0dG9uPik7XHJcbiAgICBjb25zdCBnZXROdW1TZWMgPSB0aGlzLnN0YXRlLmdldE1pblNlY0FycigpLm1hcCgodmFsdWUsIGkpID0+IDxidXR0b24gbmFtZSA9ICdzZWNzJyBrZXkgPSB7aSArICdzZWNzJ30gc3R5bGUgPSB7dGltZUJ1dHRvbn0gb25Nb3VzZU92ZXIgPSB7dGhpcy5ob3ZlckNvbG9yfSBvbk1vdXNlT3V0ID0ge3RoaXMuaG92ZXJPdXRDb2xvcn0gdmFsdWUgPSB7dmFsdWV9IG9uQ2xpY2sgPSB7dGhpcy5oYW5kbGVDbGlja30+e3ZhbHVlLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwwKX08L2J1dHRvbj4pO1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgPGRpdiBjbGFzc05hbWUgPSAnY29udGFpbmVyJyBvbkNsaWNrID0ge3RoaXMud2luZG93Q2xpY2t9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lID0gJ25hdmJhcic+XHJcbiAgICAgICAgICA8aDEgaWQgPSAndGl0bGUnPlNpbXBsZSBDb3VudGRvd24gVGltZXI8L2gxPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSAnZmxleC1jb250YWluZXItY29sdW1uJz5cclxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lID0gJ2hlYWRpbmcnPlRvZGF5J3MgRGF0ZTogPHU+e3RoaXMudG9kYXlEYXRlKCl9PC91PjwvaDI+XHJcbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZSA9ICdoZWFkaW5nJz5DdXJyZW50IFRpbWU6IDx1Pnt0aGlzLnN0YXRlLnRpbWV9PC91PjwvaDI+ICBcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGlkID0gJ2Rpc3BsYXknPlxyXG4gICAgICAgICAgPGRpdiBpZCA9ICd0aW1lci13cmFwcGVyJz5cclxuICAgICAgICAgICAgPGRpdiBpZCA9ICd0aW1lcic+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSAndGltZS1wbGFjZS1ob2xkZXJzJz5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWUgPSAndGltZS1kaXNwbGF5JyBvbkNsaWNrID0ge3RoaXMuaGFuZGxlU2V0VGltZUNsaWNrfT57dGhpcy5zdGF0ZS5ob3Vyc306PC9oMT5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQgPSAnZGlhbC1ob3VyJyBjbGFzc05hbWUgPSAnZGlhbC13cmFwcGVyMSc+XHJcbiAgICAgICAgICAgICAgICAgICAge2dldE51bUhvdXJzfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lID0gJ2Rlc2NyaXB0aW9uJyBvbkNsaWNrID0ge3RoaXMuaGFuZGxlU2V0VGltZUNsaWNrfT5Ib3VyczwvaDE+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSAndGltZS1wbGFjZS1ob2xkZXJzJz5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWUgPSAndGltZS1kaXNwbGF5JyBvbkNsaWNrID0ge3RoaXMuaGFuZGxlU2V0VGltZUNsaWNrfT57dGhpcy5zdGF0ZS5taW5zfTo8L2gxPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZCA9ICdkaWFsLW1pbicgY2xhc3NOYW1lID0gJ2RpYWwtd3JhcHBlcjEnPlxyXG4gICAgICAgICAgICAgICAgICAgIHtnZXROdW1NaW59XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWUgPSAnZGVzY3JpcHRpb24nIG9uQ2xpY2sgPSB7dGhpcy5oYW5kbGVTZXRUaW1lQ2xpY2t9Pk1pbnM8L2gxPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gJ3RpbWUtcGxhY2UtaG9sZGVycyc+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lID0gJ3RpbWUtZGlzcGxheScgb25DbGljayA9IHt0aGlzLmhhbmRsZVNldFRpbWVDbGlja30+e3RoaXMuc3RhdGUuc2Vjc308L2gxPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZCA9ICdkaWFsLXNlYycgY2xhc3NOYW1lID0gJ2RpYWwtd3JhcHBlcjEnPlxyXG4gICAgICAgICAgICAgICAgICAgIHtnZXROdW1TZWN9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWUgPSAnZGVzY3JpcHRpb24nIG9uQ2xpY2sgPSB7dGhpcy5oYW5kbGVTZXRUaW1lQ2xpY2t9PlNlY3M8L2gxPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBpZCA9ICdzdGFydC1idXR0b24nIG9uQ2xpY2sgPSB7dGhpcy5oYW5kbGVTdGFydENsaWNrfT5TdGFydDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8Zm9vdGVyPlxyXG4gICAgICAgICAgICA8cD4mY29weTsgQnJ5YW4gV29uZyB8IDIwMjA8L3A+XHJcbiAgICAgICAgICA8L2Zvb3Rlcj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgLmNvbnRhaW5lcntcclxuICAgICAgICAgICAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDE4cHgpO1xyXG4gICAgICAgICAgICBib3JkZXI6IHNvbGlkO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5uYXZiYXJ7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwdmg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzM3MzMzNztcclxuICAgICAgICAgICAgY29sb3I6ICNEOEIzOUM7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjRDhCMzlDO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgI3RpdGxle1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDU1cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuZmxleC1jb250YWluZXItY29sdW1ue1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwIDEwcHggMCAxMHB4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBqaXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIlO1xyXG4gICAgICAgICAgICBib3JkZXI6IHNvbGlkO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmhlYWRpbmd7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgI3RpbWVyLXdyYXBwZXJ7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDogMjglO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMzMlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgI2Rpc3BsYXl7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IGNhbGMoOTB2aCAtIDIwcHgpO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudCggI0Y3RjlGOSAsICNFM0U3RDMsICM4NDk0ODMpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgI3RpbWVye1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDogMzMuMzMlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnRpbWUtcGxhY2UtaG9sZGVyc3tcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmRpYWwtd3JhcHBlcjF7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGhlaWdodDogMHB4O1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5kaWFsLXdyYXBwZXIxOjotd2Via2l0LXNjcm9sbGJhcntcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICNzdGFydC1idXR0b257XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzJweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzAwQTY3NjtcclxuICAgICAgICAgICAgY29sb3I6ICNGN0Y5Rjk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBoMTpob3ZlcntcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaDE6Zm9jdXN7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaDF7XHJcbiAgICAgICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IGFsbDsgIC8qIENocm9tZSA0OSsgKi9cclxuICAgICAgICAgICAgLW1vei11c2VyLXNlbGVjdDogYWxsOyAgICAgLyogRmlyZWZveCA0MysgKi9cclxuICAgICAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBhbGw7ICAgICAgLyogTm8gc3VwcG9ydCB5ZXQgKi9cclxuICAgICAgICAgICAgdXNlci1zZWxlY3Q6IGFsbDsgICAgICAgICAgLyogTGlrZWx5IGZ1dHVyZSAqLyAgIFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZm9vdGVye1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCAwIDhweCA1cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMzczMzM3O1xyXG4gICAgICAgICAgICBjb2xvcjogI0Q4QjM5QztcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICBib3JkZXItdG9wOiAzcHggc29saWQgI0Q4QjM5QztcclxuICAgICAgICAgICAgaGVpZ2h0OiA1JTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC50aW1lLWRpc3BsYXl7XHJcbiAgICAgICAgICAgIGhlaWdodDogOTAlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2MHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzczMzM3O1xyXG4gICAgICAgICAgICBjb2xvcjogI0Q4QjM5QztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5kZXNjcmlwdGlvbntcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM3MzMzNztcclxuICAgICAgICAgICAgY29sb3I6ICNEOEIzOUM7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBidXR0b257XHJcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBidXR0b246Zm9jdXN7XHJcbiAgICAgICAgICAgIG91dGxpbmU6bm9uZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCl7XHJcbiAgICAgICAgICAgICN0aXRsZXtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDQycHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmhlYWRpbmd7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAudGltZS1kaXNwbGF5e1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmRlc2NyaXB0aW9ue1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjc3RhcnQtYnV0dG9ue1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjNweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb290ZXJ7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NTBweCl7XHJcbiAgICAgICAgICAgICN0aXRsZXtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmhlYWRpbmd7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5mbGV4LWNvbnRhaW5lci1jb2x1bW57XHJcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC50aW1lLWRpc3BsYXl7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxMjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZGVzY3JpcHRpb257XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICNzdGFydC1idXR0b257XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyM3B4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvb3RlcntcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCl7XHJcbiAgICAgICAgICAgIGZvb3RlcntcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgICAgYm90dG9tOiAtMzBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubmF2YmFye1xyXG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmZsZXgtY29udGFpbmVyLWNvbHVtbntcclxuICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICBtYXJnaW46IDEwcHggMCAxMHB4IDA7XHJcbiAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NTBweCl7XHJcbiAgICAgICAgICAgIC5jb250YWluZXJ7XHJcbiAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjdGl0bGV7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5oZWFkaW5ne1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAudGltZS1kaXNwbGF5e1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogOTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZGVzY3JpcHRpb257XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICNzdGFydC1idXR0b257XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyM3B4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNzVweCl7XHJcbiAgICAgICAgICAgICN0aXRsZXtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI2Rpc3BsYXl7XHJcbiAgICAgICAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnRpbWUtZGlzcGxheXtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDYwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmRlc2NyaXB0aW9ue1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjc3RhcnQtYnV0dG9ue1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb290ZXJ7XHJcbiAgICAgICAgICAgICAgYm90dG9tOiAtMTAycHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI3RpbWVyLXdyYXBwZXJ7XHJcbiAgICAgICAgICAgICAgYm90dG9tOiAyNSU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG5cclxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICBodG1sLFxyXG4gICAgICBib2R5IHtcclxuICAgICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBTZWdvZSBVSSwgUm9ib3RvLFxyXG4gICAgICAgICAgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgRmlyYSBTYW5zLCBEcm9pZCBTYW5zLCBIZWx2ZXRpY2EgTmV1ZSxcclxuICAgICAgICAgIHNhbnMtc2VyaWY7XHJcbiAgICAgIH1cclxuICAgICAgKntcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBib3JkZXI6IDA7XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgfVxyXG4gICAgYH08L3N0eWxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn0gIl19 */\n/*@ sourceURL=C:\\\\Users\\\\Bryan\\\\desktop\\\\Programming Projects\\\\02.1 Simple Count Down\\\\pages\\\\index.js */"));
    }
  }]);

  return home;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);



;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJob21lIiwicHJvcHMiLCJzdGF0ZSIsInRpbWUiLCJEYXRlIiwidG9Mb2NhbGVUaW1lU3RyaW5nIiwiaG91cnMiLCJtaW5zIiwic2VjcyIsInRpbWVyU3RhcnQiLCJlbmFibGVUaW1lciIsImFsYXJtU3RhcnQiLCJhdWRpbyIsIkF1ZGlvIiwiYXVkaW8xIiwiZ2V0SG91ckFyciIsImFyciIsImkiLCJwdXNoIiwiZ2V0TWluU2VjQXJyIiwiaGFuZGxlQ2hhbmdlIiwiYmluZCIsImhhbmRsZUNsaWNrIiwiaGFuZGxlU3RhcnRDbGljayIsImNvdW50RG93biIsImhhbmRsZVNldFRpbWVDbGljayIsIndpbmRvd0NsaWNrIiwibG9jYWxUaW1lIiwic2V0SW50ZXJ2YWwiLCJzZXRTdGF0ZSIsInRpbWVyVGltZSIsImNsZWFySW50ZXJ2YWwiLCJ0b2RheSIsImRkIiwiU3RyaW5nIiwiZ2V0RGF0ZSIsInBhZFN0YXJ0IiwibW0iLCJnZXRNb250aCIsInl5eXkiLCJnZXRGdWxsWWVhciIsImUiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJ0b1N0cmluZyIsImJ1dHRvbiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzdHlsZSIsImJhY2tncm91bmQiLCJpbm5lckhUTUwiLCJwbGF5Iiwid2luZG93IiwibmF2aWdhdG9yIiwidmlicmF0ZSIsImhvdXIiLCJoZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJwYXVzZSIsImNvbG9yIiwidGltZUJ1dHRvbiIsImZvbnRTaXplIiwid2lkdGgiLCJvdXRsaW5lIiwiZ2V0TnVtSG91cnMiLCJtYXAiLCJob3ZlckNvbG9yIiwiaG92ZXJPdXRDb2xvciIsImdldE51bU1pbiIsImdldE51bVNlYyIsInRvZGF5RGF0ZSIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFDcUJB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LGVBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSzhELFNBREwsQ0FGRixFQUtFO0FBQThCLGVBQU8sRUFBSSxLQUFLN0Msa0JBQTlDO0FBQUEsMkNBQWdCLGFBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTEYsQ0FmRixDQURGLEVBd0JFO0FBQVEsVUFBRSxFQUFHLGNBQWI7QUFBNEIsZUFBTyxFQUFJLEtBQUtGLGdCQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBeEJGLENBREYsRUEyQkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtDQURGLENBM0JGLENBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaTVwQkFERjtBQTZSRDs7OztFQWxkK0JpRCw0Q0FBSyxDQUFDQyxTIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy5iNjlkNTM3NTU3NjcxMTI3ODJhMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGhvbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpe1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgdGltZTogbmV3IERhdGUoKS50b0xvY2FsZVRpbWVTdHJpbmcoKSxcclxuICAgICAgaG91cnM6ICcwMCcsXHJcbiAgICAgIG1pbnM6ICcwMCcsXHJcbiAgICAgIHNlY3M6ICcwMCcsXHJcbiAgICAgIHRpbWVyU3RhcnQ6IGZhbHNlLFxyXG4gICAgICBlbmFibGVUaW1lcjogdHJ1ZSxcclxuICAgICAgYWxhcm1TdGFydDogZmFsc2UsXHJcbiAgICAgIGF1ZGlvOiAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBBdWRpbygnLi9hbGFybS5tcDMnKVxyXG4gICAgICB9LFxyXG4gICAgICBhdWRpbzE6ICcnLFxyXG4gICAgICBnZXRIb3VyQXJyOiAoKSA9PiB7XHJcbiAgICAgICAgbGV0IGFyciA9IFtdO1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCAxMDA7IGkrKyl7XHJcbiAgICAgICAgICBhcnIucHVzaChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFyclxyXG4gICAgICB9LFxyXG4gICAgICBnZXRNaW5TZWNBcnI6ICgpID0+IHtcclxuICAgICAgICBsZXQgYXJyID0gW107XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IDYwOyBpKyspe1xyXG4gICAgICAgICAgYXJyLnB1c2goaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhcnJcclxuICAgICAgfSxcclxuICAgIH07XHJcblxyXG5cclxuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuaGFuZGxlQ2xpY2sgPSB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmhhbmRsZVN0YXJ0Q2xpY2sgPSB0aGlzLmhhbmRsZVN0YXJ0Q2xpY2suYmluZCh0aGlzKTtcclxuICAgIHRoaXMuY291bnREb3duID0gdGhpcy5jb3VudERvd24uYmluZCh0aGlzKTtcclxuICAgIHRoaXMuaGFuZGxlU2V0VGltZUNsaWNrID0gdGhpcy5oYW5kbGVTZXRUaW1lQ2xpY2suYmluZCh0aGlzKTtcclxuICAgIHRoaXMud2luZG93Q2xpY2sgPSB0aGlzLndpbmRvd0NsaWNrLmJpbmQodGhpcyk7XHJcbiAgICB9O1xyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMubG9jYWxUaW1lID0gc2V0SW50ZXJ2YWwoKCkgPT4ge3RoaXMuc2V0U3RhdGUoeyB0aW1lOiBuZXcgRGF0ZSgpLnRvTG9jYWxlVGltZVN0cmluZygpfSl9LCAxMDAwKTtcclxuICAgIHRoaXMudGltZXJUaW1lID0gc2V0SW50ZXJ2YWwodGhpcy5jb3VudERvd24sIDEwMDApO1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50V2lsbFVubW91bnQoKXtcclxuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5sb2NhbFRpbWUpXHJcbiAgICBjbGVhckludGVydmFsKHRoaXMudGltZXJUaW1lKVxyXG4gIH1cclxuXHJcbiAgdG9kYXlEYXRlKCl7XHJcbiAgICBsZXQgdG9kYXkgPSBuZXcgRGF0ZSgpO1xyXG4gICAgbGV0IGRkID0gU3RyaW5nKHRvZGF5LmdldERhdGUoKSkucGFkU3RhcnQoMiwnMCcpO1xyXG4gICAgbGV0IG1tID0gU3RyaW5nKHRvZGF5LmdldE1vbnRoKCkpLnBhZFN0YXJ0KDIsJzAnKTtcclxuICAgIGxldCB5eXl5ID0gdG9kYXkuZ2V0RnVsbFllYXIoKTtcclxuICAgIHJldHVybiAgbW0gKyAnLycgKyBkZCArICcvJyArIHl5eXk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlQ2hhbmdlKGUpe1xyXG4gICAgbGV0IHRhcmdldCA9IGUudGFyZ2V0O1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7W3RhcmdldC5uYW1lXSA6IHRhcmdldC52YWx1ZX0pO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZUNsaWNrKGUpe1xyXG4gICAgbGV0IHRhcmdldCA9IGUudGFyZ2V0O1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7W3RhcmdldC5uYW1lXSA6IHRhcmdldC52YWx1ZS50b1N0cmluZygpLnBhZFN0YXJ0KDIsMCl9KVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlU3RhcnRDbGljaygpe1xyXG4gICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydC1idXR0b24nKTtcclxuICAgIGxldCBob3VycyA9IHRoaXMuc3RhdGUuaG91cnM7XHJcbiAgICBsZXQgbWlucyA9IHRoaXMuc3RhdGUubWlucztcclxuICAgIGxldCBzZWNzID0gdGhpcy5zdGF0ZS5zZWNzO1xyXG5cclxuICAgIGlmKHRoaXMuc3RhdGUudGltZXJTdGFydCA9PT0gZmFsc2Upe1xyXG4gICAgICBpZiAodGhpcy5zdGF0ZS5lbmFibGVUaW1lciA9PT0gZmFsc2Upe1xyXG4gICAgICAgIHRoaXMuaGFuZGxlU2V0VGltZUNsaWNrKClcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnNldFN0YXRlKHt0aW1lclN0YXJ0IDogdHJ1ZX0pO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHthbGFybVN0YXJ0IDogdHJ1ZX0pO1xyXG4gICAgICBpZiAoaG91cnMgPT0gMCAmJiBtaW5zPT0gMCAmJiBzZWNzID09IDApe1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2FsYXJtU3RhcnQgOiBmYWxzZX0pO1xyXG4gICAgICB9XHJcbiAgICAgIGJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kID0gJyNBNDI0MkYnO1xyXG4gICAgICBidXR0b24uaW5uZXJIVE1MID0gJ1N0b3AnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7dGltZXJTdGFydCA6IGZhbHNlfSlcclxuICAgICAgYnV0dG9uLnN0eWxlLmJhY2tncm91bmQgPSAnIzAwQTY3Nic7XHJcbiAgICAgIGJ1dHRvbi5pbm5lckhUTUwgPSAnU3RhcnQnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIGNvdW50RG93biAoKXtcclxuICAgIGxldCBob3VycyA9IHRoaXMuc3RhdGUuaG91cnM7XHJcbiAgICBsZXQgbWlucyA9IHRoaXMuc3RhdGUubWlucztcclxuICAgIGxldCBzZWNzID0gdGhpcy5zdGF0ZS5zZWNzO1xyXG4gICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydC1idXR0b24nKTtcclxuICAgIFxyXG5cclxuICAgIGlmICh0aGlzLnN0YXRlLnRpbWVyU3RhcnQgPT0gdHJ1ZSAmJiB0aGlzLnN0YXRlLmVuYWJsZVRpbWVyID09PSB0cnVlKXtcclxuICAgICAgaWYgKHNlY3MgIT0gMCl7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2VjczogKCt0aGlzLnN0YXRlLnNlY3MgLSAxKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsMCl9KVxyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKG1pbnMgIT0gMCl7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bWluczogKCt0aGlzLnN0YXRlLm1pbnMgLSAxKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsMCl9KVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3NlY3M6ICc1OSd9KVxyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKGhvdXJzICE9IDAgKXtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtob3VyczogKCt0aGlzLnN0YXRlLmhvdXJzIC0gMSkudG9TdHJpbmcoKS5wYWRTdGFydCgyLDApfSlcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHttaW5zOiAnNTknfSlcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtzZWNzOiAnNTknfSlcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmKHRoaXMuc3RhdGUuYWxhcm1TdGFydCA9PSB0cnVlKXtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHthdWRpbzEgOiB0aGlzLnN0YXRlLmF1ZGlvKCl9KTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHt0aW1lclN0YXJ0IDogZmFsc2V9KTtcclxuICAgICAgICB0aGlzLnN0YXRlLmF1ZGlvMS5wbGF5KCk7XHJcbiAgICAgICAgd2luZG93Lm5hdmlnYXRvci52aWJyYXRlKDIwMDApO1xyXG4gICAgICAgIGJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kID0gJyMwMEE2NzYnO1xyXG4gICAgICAgIGJ1dHRvbi5pbm5lckhUTUwgPSAnU3RhcnQnO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kID0gJyMwMEE2NzYnO1xyXG4gICAgICAgIGJ1dHRvbi5pbm5lckhUTUwgPSAnU3RhcnQnO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3RpbWVyU3RhcnQgOiBmYWxzZX0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoYW5kbGVTZXRUaW1lQ2xpY2soKXtcclxuICAgICAgbGV0IGhvdXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlhbC1ob3VyJyk7XHJcbiAgICAgIGxldCBtaW5zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RpYWwtbWluJyk7XHJcbiAgICAgIGxldCBzZWNzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RpYWwtc2VjJyk7XHJcbiAgICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnQtYnV0dG9uJyk7XHJcbiAgICAgIGxldCBoZWlnaHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlzcGxheScpLm9mZnNldEhlaWdodDtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7dGltZXJTdGFydDogZmFsc2V9KVxyXG5cclxuICAgIGlmICh0aGlzLnN0YXRlLmVuYWJsZVRpbWVyID09PSB0cnVlKXtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7ZW5hYmxlVGltZXI6IGZhbHNlfSlcclxuICAgICAgaG91ci5zdHlsZS5oZWlnaHQgPSAoaGVpZ2h0KjAuMikudG9TdHJpbmcoKSsncHgnO1xyXG4gICAgICBtaW5zLnN0eWxlLmhlaWdodCA9IChoZWlnaHQqMC4yKS50b1N0cmluZygpKydweCc7XHJcbiAgICAgIHNlY3Muc3R5bGUuaGVpZ2h0ID0gKGhlaWdodCowLjIpLnRvU3RyaW5nKCkrJ3B4JztcclxuICAgICAgYnV0dG9uLnN0eWxlLmJhY2tncm91bmQgPSAnIzAwQTY3Nic7XHJcbiAgICAgIGJ1dHRvbi5pbm5lckhUTUwgPSAnU3RhcnQnO1xyXG4gICAgfSBlbHNle1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtlbmFibGVUaW1lcjogdHJ1ZX0pXHJcbiAgICAgIGhvdXIuc3R5bGUuaGVpZ2h0ID0gJzAnO1xyXG4gICAgICBtaW5zLnN0eWxlLmhlaWdodCA9ICcwJztcclxuICAgICAgc2Vjcy5zdHlsZS5oZWlnaHQgPSAnMCc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB3aW5kb3dDbGljaygpe1xyXG4gICAgaWYgKHRoaXMuc3RhdGUuYXVkaW8xICE9ICcnICYmIHRoaXMuc3RhdGUuYWxhcm1TdGFydCA9PSB0cnVlKXtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7YWxhcm1TdGFydCA6IGZhbHNlfSk7XHJcbiAgICAgIHRoaXMuc3RhdGUuYXVkaW8xLnBhdXNlKCk7XHJcbiAgICAgIHdpbmRvdy5uYXZpZ2F0b3IudmlicmF0ZSgwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhvdmVyQ29sb3IoZSl7XHJcbiAgICBlLnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kID0gJyMzNzMzMzcnO1xyXG4gICAgZS50YXJnZXQuc3R5bGUuY29sb3IgPSAnd2hpdGUnO1xyXG4gIH1cclxuXHJcbiAgaG92ZXJPdXRDb2xvcihlKXtcclxuICAgIGUudGFyZ2V0LnN0eWxlLmJhY2tncm91bmQgPSAnI0Q4QjM5Qyc7XHJcbiAgICBlLnRhcmdldC5zdHlsZS5jb2xvciA9ICcjMzczMzM3JztcclxuICB9XHJcblxyXG4gIHJlbmRlcigpe1xyXG4gICAgY29uc3QgdGltZUJ1dHRvbiA9IHtcclxuICAgICAgZm9udFNpemU6ICcyMHB4JyxcclxuICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgYmFja2dyb3VuZDogJyNEOEIzOUMnLFxyXG4gICAgICBvdXRsaW5lOiAnbm9uZScsXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGdldE51bUhvdXJzID0gdGhpcy5zdGF0ZS5nZXRIb3VyQXJyKCkubWFwKCh2YWx1ZSwgaSkgPT4gPGJ1dHRvbiBuYW1lID0gJ2hvdXJzJyBrZXkgPSB7aSArICdob3Vycyd9IHN0eWxlID0ge3RpbWVCdXR0b259IG9uTW91c2VPdmVyID0ge3RoaXMuaG92ZXJDb2xvcn0gb25Nb3VzZU91dCA9IHt0aGlzLmhvdmVyT3V0Q29sb3J9IHZhbHVlID0ge3ZhbHVlfSBvbkNsaWNrID0ge3RoaXMuaGFuZGxlQ2xpY2t9Pnt2YWx1ZS50b1N0cmluZygpLnBhZFN0YXJ0KDIsMCl9PC9idXR0b24+KTtcclxuICAgIGNvbnN0IGdldE51bU1pbiA9IHRoaXMuc3RhdGUuZ2V0TWluU2VjQXJyKCkubWFwKCh2YWx1ZSwgaSkgPT4gPGJ1dHRvbiBuYW1lID0gJ21pbnMnIGtleSA9IHtpICsgJ21pbnMnfSBzdHlsZSA9IHt0aW1lQnV0dG9ufSBvbk1vdXNlT3ZlciA9IHt0aGlzLmhvdmVyQ29sb3J9IG9uTW91c2VPdXQgPSB7dGhpcy5ob3Zlck91dENvbG9yfSB2YWx1ZSA9IHt2YWx1ZX0gb25DbGljayA9IHt0aGlzLmhhbmRsZUNsaWNrfT57dmFsdWUudG9TdHJpbmcoKS5wYWRTdGFydCgyLDApfTwvYnV0dG9uPik7XHJcbiAgICBjb25zdCBnZXROdW1TZWMgPSB0aGlzLnN0YXRlLmdldE1pblNlY0FycigpLm1hcCgodmFsdWUsIGkpID0+IDxidXR0b24gbmFtZSA9ICdzZWNzJyBrZXkgPSB7aSArICdzZWNzJ30gc3R5bGUgPSB7dGltZUJ1dHRvbn0gb25Nb3VzZU92ZXIgPSB7dGhpcy5ob3ZlckNvbG9yfSBvbk1vdXNlT3V0ID0ge3RoaXMuaG92ZXJPdXRDb2xvcn0gdmFsdWUgPSB7dmFsdWV9IG9uQ2xpY2sgPSB7dGhpcy5oYW5kbGVDbGlja30+e3ZhbHVlLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwwKX08L2J1dHRvbj4pO1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgPGRpdiBjbGFzc05hbWUgPSAnY29udGFpbmVyJyBvbkNsaWNrID0ge3RoaXMud2luZG93Q2xpY2t9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lID0gJ25hdmJhcic+XHJcbiAgICAgICAgICA8aDEgaWQgPSAndGl0bGUnPlNpbXBsZSBDb3VudGRvd24gVGltZXI8L2gxPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSAnZmxleC1jb250YWluZXItY29sdW1uJz5cclxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lID0gJ2hlYWRpbmcnPlRvZGF5J3MgRGF0ZTogPHU+e3RoaXMudG9kYXlEYXRlKCl9PC91PjwvaDI+XHJcbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZSA9ICdoZWFkaW5nJz5DdXJyZW50IFRpbWU6IDx1Pnt0aGlzLnN0YXRlLnRpbWV9PC91PjwvaDI+ICBcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGlkID0gJ2Rpc3BsYXknPlxyXG4gICAgICAgICAgPGRpdiBpZCA9ICd0aW1lci13cmFwcGVyJz5cclxuICAgICAgICAgICAgPGRpdiBpZCA9ICd0aW1lcic+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSAndGltZS1wbGFjZS1ob2xkZXJzJz5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWUgPSAndGltZS1kaXNwbGF5JyBvbkNsaWNrID0ge3RoaXMuaGFuZGxlU2V0VGltZUNsaWNrfT57dGhpcy5zdGF0ZS5ob3Vyc306PC9oMT5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQgPSAnZGlhbC1ob3VyJyBjbGFzc05hbWUgPSAnZGlhbC13cmFwcGVyMSc+XHJcbiAgICAgICAgICAgICAgICAgICAge2dldE51bUhvdXJzfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lID0gJ2Rlc2NyaXB0aW9uJyBvbkNsaWNrID0ge3RoaXMuaGFuZGxlU2V0VGltZUNsaWNrfT5Ib3VyczwvaDE+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSAndGltZS1wbGFjZS1ob2xkZXJzJz5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWUgPSAndGltZS1kaXNwbGF5JyBvbkNsaWNrID0ge3RoaXMuaGFuZGxlU2V0VGltZUNsaWNrfT57dGhpcy5zdGF0ZS5taW5zfTo8L2gxPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZCA9ICdkaWFsLW1pbicgY2xhc3NOYW1lID0gJ2RpYWwtd3JhcHBlcjEnPlxyXG4gICAgICAgICAgICAgICAgICAgIHtnZXROdW1NaW59XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWUgPSAnZGVzY3JpcHRpb24nIG9uQ2xpY2sgPSB7dGhpcy5oYW5kbGVTZXRUaW1lQ2xpY2t9Pk1pbnM8L2gxPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gJ3RpbWUtcGxhY2UtaG9sZGVycyc+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lID0gJ3RpbWUtZGlzcGxheScgb25DbGljayA9IHt0aGlzLmhhbmRsZVNldFRpbWVDbGlja30+e3RoaXMuc3RhdGUuc2Vjc308L2gxPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZCA9ICdkaWFsLXNlYycgY2xhc3NOYW1lID0gJ2RpYWwtd3JhcHBlcjEnPlxyXG4gICAgICAgICAgICAgICAgICAgIHtnZXROdW1TZWN9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWUgPSAnZGVzY3JpcHRpb24nIG9uQ2xpY2sgPSB7dGhpcy5oYW5kbGVTZXRUaW1lQ2xpY2t9PlNlY3M8L2gxPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBpZCA9ICdzdGFydC1idXR0b24nIG9uQ2xpY2sgPSB7dGhpcy5oYW5kbGVTdGFydENsaWNrfT5TdGFydDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8Zm9vdGVyPlxyXG4gICAgICAgICAgICA8cD4mY29weTsgQnJ5YW4gV29uZyB8IDIwMjA8L3A+XHJcbiAgICAgICAgICA8L2Zvb3Rlcj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgLmNvbnRhaW5lcntcclxuICAgICAgICAgICAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDE4cHgpO1xyXG4gICAgICAgICAgICBib3JkZXI6IHNvbGlkO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5uYXZiYXJ7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwdmg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzM3MzMzNztcclxuICAgICAgICAgICAgY29sb3I6ICNEOEIzOUM7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjRDhCMzlDO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgI3RpdGxle1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDU1cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuZmxleC1jb250YWluZXItY29sdW1ue1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwIDEwcHggMCAxMHB4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBqaXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIlO1xyXG4gICAgICAgICAgICBib3JkZXI6IHNvbGlkO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmhlYWRpbmd7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgI3RpbWVyLXdyYXBwZXJ7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDogMjglO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMzMlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgI2Rpc3BsYXl7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IGNhbGMoOTB2aCAtIDIwcHgpO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudCggI0Y3RjlGOSAsICNFM0U3RDMsICM4NDk0ODMpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgI3RpbWVye1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDogMzMuMzMlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnRpbWUtcGxhY2UtaG9sZGVyc3tcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmRpYWwtd3JhcHBlcjF7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGhlaWdodDogMHB4O1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5kaWFsLXdyYXBwZXIxOjotd2Via2l0LXNjcm9sbGJhcntcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICNzdGFydC1idXR0b257XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzJweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzAwQTY3NjtcclxuICAgICAgICAgICAgY29sb3I6ICNGN0Y5Rjk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBoMTpob3ZlcntcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaDE6Zm9jdXN7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaDF7XHJcbiAgICAgICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IGFsbDsgIC8qIENocm9tZSA0OSsgKi9cclxuICAgICAgICAgICAgLW1vei11c2VyLXNlbGVjdDogYWxsOyAgICAgLyogRmlyZWZveCA0MysgKi9cclxuICAgICAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBhbGw7ICAgICAgLyogTm8gc3VwcG9ydCB5ZXQgKi9cclxuICAgICAgICAgICAgdXNlci1zZWxlY3Q6IGFsbDsgICAgICAgICAgLyogTGlrZWx5IGZ1dHVyZSAqLyAgIFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZm9vdGVye1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCAwIDhweCA1cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMzczMzM3O1xyXG4gICAgICAgICAgICBjb2xvcjogI0Q4QjM5QztcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICBib3JkZXItdG9wOiAzcHggc29saWQgI0Q4QjM5QztcclxuICAgICAgICAgICAgaGVpZ2h0OiA1JTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC50aW1lLWRpc3BsYXl7XHJcbiAgICAgICAgICAgIGhlaWdodDogOTAlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2MHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzczMzM3O1xyXG4gICAgICAgICAgICBjb2xvcjogI0Q4QjM5QztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5kZXNjcmlwdGlvbntcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM3MzMzNztcclxuICAgICAgICAgICAgY29sb3I6ICNEOEIzOUM7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBidXR0b257XHJcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBidXR0b246Zm9jdXN7XHJcbiAgICAgICAgICAgIG91dGxpbmU6bm9uZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCl7XHJcbiAgICAgICAgICAgICN0aXRsZXtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDQycHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmhlYWRpbmd7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAudGltZS1kaXNwbGF5e1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmRlc2NyaXB0aW9ue1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjc3RhcnQtYnV0dG9ue1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjNweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb290ZXJ7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NTBweCl7XHJcbiAgICAgICAgICAgICN0aXRsZXtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmhlYWRpbmd7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5mbGV4LWNvbnRhaW5lci1jb2x1bW57XHJcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC50aW1lLWRpc3BsYXl7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxMjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZGVzY3JpcHRpb257XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICNzdGFydC1idXR0b257XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyM3B4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvb3RlcntcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCl7XHJcbiAgICAgICAgICAgIGZvb3RlcntcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgICAgYm90dG9tOiAtMzBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubmF2YmFye1xyXG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmZsZXgtY29udGFpbmVyLWNvbHVtbntcclxuICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICBtYXJnaW46IDEwcHggMCAxMHB4IDA7XHJcbiAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NTBweCl7XHJcbiAgICAgICAgICAgIC5jb250YWluZXJ7XHJcbiAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjdGl0bGV7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5oZWFkaW5ne1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAudGltZS1kaXNwbGF5e1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogOTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZGVzY3JpcHRpb257XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICNzdGFydC1idXR0b257XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyM3B4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNzVweCl7XHJcbiAgICAgICAgICAgICN0aXRsZXtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI2Rpc3BsYXl7XHJcbiAgICAgICAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnRpbWUtZGlzcGxheXtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDYwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmRlc2NyaXB0aW9ue1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjc3RhcnQtYnV0dG9ue1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb290ZXJ7XHJcbiAgICAgICAgICAgICAgYm90dG9tOiAtMTAycHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI3RpbWVyLXdyYXBwZXJ7XHJcbiAgICAgICAgICAgICAgYm90dG9tOiAyNSU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG5cclxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICBodG1sLFxyXG4gICAgICBib2R5IHtcclxuICAgICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBTZWdvZSBVSSwgUm9ib3RvLFxyXG4gICAgICAgICAgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgRmlyYSBTYW5zLCBEcm9pZCBTYW5zLCBIZWx2ZXRpY2EgTmV1ZSxcclxuICAgICAgICAgIHNhbnMtc2VyaWY7XHJcbiAgICAgIH1cclxuICAgICAgKntcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBib3JkZXI6IDA7XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgfVxyXG4gICAgYH08L3N0eWxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn0gIl0sInNvdXJjZVJvb3QiOiIifQ==