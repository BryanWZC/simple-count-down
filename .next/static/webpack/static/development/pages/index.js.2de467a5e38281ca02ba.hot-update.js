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
    _this.handleClick = _this.handleClick.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    _this.handleStartClick = _this.handleStartClick.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    _this.countDown = _this.countDown.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    _this.handleSetTimeClick = _this.handleSetTimeClick.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    _this.windowClick = _this.windowClick.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(home, [{
    key: "componentDidMount",

    /*Re-renders current time and countdown values */
    value: function componentDidMount() {
      var _this2 = this;

      this.localTime = setInterval(function () {
        _this2.setState({
          time: new Date().toLocaleTimeString()
        });
      }, 1000);
      this.timerTime = setInterval(this.countDown, 1000);
    }
    /*Clear the intervals to prevent memory leaks*/

  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearInterval(this.localTime);
      clearInterval(this.timerTime);
    }
    /*Sets current time to be refreshed in componentdidMount*/

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
    key: "handleClick",

    /*Corresponds dial value to hours, mins and secs state values*/
    value: function handleClick(e) {
      var target = e.target;
      this.setState(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, target.name, target.value.toString().padStart(2, 0)));
    }
    /*Start and stop button for timer*/

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
    /*Changes the state values for hours, mins and secs*/

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
            audio1: new Audio('./alarm.mp3')
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
    /*Expands the display box upwards to show the dial options*/

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
    /*Silence alarm and vibration from timer reaching zero*/

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
    /*2 functions below add aestetics when choosing dial*/

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
            lineNumber: 180,
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
            lineNumber: 181,
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
            lineNumber: 182,
            columnNumber: 67
          }
        }, value.toString().padStart(2, 0));
      });
      return __jsx("div", {
        onClick: this.windowClick,
        className: "jsx-2420254493" + " " + 'container',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: "jsx-2420254493" + " " + 'navbar',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189,
          columnNumber: 9
        }
      }, __jsx("h1", {
        id: "title",
        className: "jsx-2420254493",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190,
          columnNumber: 11
        }
      }, "Simple Countdown Timer"), __jsx("div", {
        className: "jsx-2420254493" + " " + 'flex-container-column',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191,
          columnNumber: 11
        }
      }, __jsx("h2", {
        className: "jsx-2420254493" + " " + 'heading',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192,
          columnNumber: 15
        }
      }, "Today's Date: ", __jsx("u", {
        className: "jsx-2420254493",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192,
          columnNumber: 55
        }
      }, this.todayDate())), __jsx("h2", {
        className: "jsx-2420254493" + " " + 'heading',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193,
          columnNumber: 15
        }
      }, "Current Time: ", __jsx("u", {
        className: "jsx-2420254493",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193,
          columnNumber: 55
        }
      }, this.state.time)))), __jsx("div", {
        id: "display",
        className: "jsx-2420254493",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199,
          columnNumber: 9
        }
      }, __jsx("div", {
        id: "timer-wrapper",
        className: "jsx-2420254493",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200,
          columnNumber: 11
        }
      }, __jsx("div", {
        id: "timer",
        className: "jsx-2420254493",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "jsx-2420254493" + " " + 'time-place-holders',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202,
          columnNumber: 15
        }
      }, __jsx("h1", {
        onClick: this.handleSetTimeClick,
        className: "jsx-2420254493" + " " + 'time-display',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203,
          columnNumber: 17
        }
      }, this.state.hours, ":"), __jsx("div", {
        id: "dial-hour",
        className: "jsx-2420254493" + " " + 'dial-wrapper1',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204,
          columnNumber: 17
        }
      }, getNumHours), __jsx("h1", {
        onClick: this.handleSetTimeClick,
        className: "jsx-2420254493" + " " + 'description',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207,
          columnNumber: 17
        }
      }, "Hours")), __jsx("div", {
        className: "jsx-2420254493" + " " + 'time-place-holders',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209,
          columnNumber: 15
        }
      }, __jsx("h1", {
        onClick: this.handleSetTimeClick,
        className: "jsx-2420254493" + " " + 'time-display',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210,
          columnNumber: 17
        }
      }, this.state.mins, ":"), __jsx("div", {
        id: "dial-min",
        className: "jsx-2420254493" + " " + 'dial-wrapper1',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211,
          columnNumber: 17
        }
      }, getNumMin), __jsx("h1", {
        onClick: this.handleSetTimeClick,
        className: "jsx-2420254493" + " " + 'description',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214,
          columnNumber: 17
        }
      }, "Mins")), __jsx("div", {
        className: "jsx-2420254493" + " " + 'time-place-holders',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 216,
          columnNumber: 15
        }
      }, __jsx("h1", {
        onClick: this.handleSetTimeClick,
        className: "jsx-2420254493" + " " + 'time-display',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217,
          columnNumber: 17
        }
      }, this.state.secs), __jsx("div", {
        id: "dial-sec",
        className: "jsx-2420254493" + " " + 'dial-wrapper1',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218,
          columnNumber: 17
        }
      }, getNumSec), __jsx("h1", {
        onClick: this.handleSetTimeClick,
        className: "jsx-2420254493" + " " + 'description',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 221,
          columnNumber: 17
        }
      }, "Secs"))), __jsx("button", {
        id: "start-button",
        onClick: this.handleStartClick,
        className: "jsx-2420254493",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224,
          columnNumber: 13
        }
      }, "Start")), __jsx("footer", {
        className: "jsx-2420254493",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229,
          columnNumber: 11
        }
      }, __jsx("p", {
        className: "jsx-2420254493",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230,
          columnNumber: 13
        }
      }, "\xA9 Bryan Wong | 2020"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "2655728224",
        __self: this
      }, ".container.jsx-2420254493{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;box-sizing:border-box;height:100vh;}.navbar.jsx-2420254493{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;min-height:10vh;padding-left:10px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:#373337;color:#D8B39C;border-bottom:3px solid #D8B39C;-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;}#title.jsx-2420254493{font-size:55px;cursor:auto;}.flex-container-column.jsx-2420254493{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:0 10px 0 10px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;jistify-content:center;margin-left:2%;border:solid;}.heading.jsx-2420254493{font-weight:300;}#display.jsx-2420254493{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:100%;background-image:radial-gradient( #F7F9F9 ,#E3E7D3,#849483);-webkit-flex:1 0 auto;-ms-flex:1 0 auto;flex:1 0 auto;}#timer-wrapper.jsx-2420254493{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;min-width:28%;bottom:33%;position:absolute;bottom:33%;}#timer.jsx-2420254493{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;text-align:center;min-width:33.33%;}.time-place-holders.jsx-2420254493{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;text-align:center;}.time-display.jsx-2420254493{height:90%;font-size:160px;font-weight:400;background-color:#373337;color:#D8B39C;}.dial-wrapper1.jsx-2420254493{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;height:0px;overflow:auto;}.dial-wrapper1.jsx-2420254493::-webkit-scrollbar{display:none;}.description.jsx-2420254493{background-color:#373337;color:#D8B39C;}#start-button.jsx-2420254493{width:100%;font-size:25px;height:32px;background:#00A676;color:#F7F9F9;}h1.jsx-2420254493:hover{cursor:pointer;}h1.jsx-2420254493:focus{outline:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}h1.jsx-2420254493,h2.jsx-2420254493,p.jsx-2420254493{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}footer.jsx-2420254493{background:#373337;color:#D8B39C;border-top:3px solid #D8B39C;font-size:13px;width:100%;position:absolute;bottom:0;left:0;height:30px;}footer.jsx-2420254493 p.jsx-2420254493{padding:5px 0 8px 10px;}button.jsx-2420254493{outline:none;}button.jsx-2420254493:focus{outline:none;}@media screen and (max-width:1000px){#title.jsx-2420254493{font-size:42px;}.heading.jsx-2420254493{font-size:18px;}.time-display.jsx-2420254493{font-size:120px;}.description.jsx-2420254493{font-size:25px;}#start-button.jsx-2420254493{font-size:23px;}}@media screen and (max-width:750px){#title.jsx-2420254493{font-size:30px;}.heading.jsx-2420254493{font-size:15px;}.flex-container-column.jsx-2420254493{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.time-display.jsx-2420254493{font-size:120px;}.description.jsx-2420254493{font-size:25px;}#start-button.jsx-2420254493{font-size:23px;}footer.jsx-2420254493{font-size:13px;bottom:0;}}@media screen and (max-width:575px){footer.jsx-2420254493{font-size:13px;bottom:-30px;}.navbar.jsx-2420254493{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin:0;padding:0;}.flex-container-column.jsx-2420254493{margin:0;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin:10px 0 10px 0;border:none;}}@media screen and (max-width:450px){.container.jsx-2420254493{box-sizing:border-box;}#title.jsx-2420254493{font-size:30px;}.heading.jsx-2420254493{font-size:15px;}.time-display.jsx-2420254493{font-size:90px;}.description.jsx-2420254493{font-size:25px;}#start-button.jsx-2420254493{font-size:23px;}}@media screen and (max-width:375px){#title.jsx-2420254493{font-size:24px;}#display.jsx-2420254493{min-height:100vh;}.time-display.jsx-2420254493{font-size:60px;}.description.jsx-2420254493{font-size:25px;}#start-button.jsx-2420254493{font-size:20px;}footer.jsx-2420254493{bottom:-102px;}#timer-wrapper.jsx-2420254493{bottom:25%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQnJ5YW5cXGRlc2t0b3BcXFByb2dyYW1taW5nIFByb2plY3RzXFwwMi4xIFNpbXBsZSBDb3VudCBEb3duXFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeU9vQixBQU0wQixBQU9FLEFBVUksQUFJRixBQVNHLEFBR0wsQUFTQSxBQVNFLEFBTUEsQUFLRixBQU9FLEFBTUEsQUFHWSxBQUloQixBQVVFLEFBR0YsQUFJWSxBQU1OLEFBV0ssQUFHWCxBQUdELEFBT0csQUFHQSxBQUlDLEFBR0QsQUFHQSxBQUtFLEFBR0EsQUFHTyxBQUtOLEFBR0QsQUFHQSxBQUdBLEFBTUEsQUFJTyxBQUtiLEFBUWEsQUFHUCxBQUdBLEFBR0EsQUFHQSxBQUdBLEFBS0EsQUFHRSxBQUdGLEFBR0EsQUFHQSxBQUdELEFBR0gsU0E3Q1csRUF4SEosQUFvQkgsQUFrSm5CLEVBekpNLEFBb0JhLEFBd0JuQixBQUdBLENBdUdFLENBaE5nQixBQTJFbEIsQUFxQ0EsQUFHQSxBQU9BLEFBR0EsQUFLRSxBQUdBLEFBV0EsQUFHQSxBQUdXLEFBTUksQUFvQmYsQUFHQSxBQUdBLEFBR0EsQUFHQSxBQUtBLEFBTUEsQUFHQSxBQUdBLENBaE1FLEFBMEdKLEFBc0JFLENBdURBLEVBNUdjLEdBcUZkLENBMUVGLENBb0RFLENBMUZrQixBQXFCSSxDQWhCUixDQWpFWixBQTZDa0IsQ0ErR3BCLEtBcEU2QixLQXRCUixDQUxuQixJQWYyQixJQW9DUixVQWZMLEtBc0JELE1BMUNHLEFBb0NELEdBZmpCLEdBdEZzQixBQU9KLEFBY1EsQUFZRCxBQVNELEFBU0QsQUFNRyxBQVlBLEdBdUNmLENBNkNjLEFBd0JkLElBL0dULEtBZ0hVLEFBS1csQ0ExRUwsRUFyR0UsT0EyS3BCLENBbkZGLFFBY1csRUFyR1ksQUErS1AsT0F6RVAsS0EwRVAsRUF6RVksWUFDZCxTQTdEd0IsU0FuRFIsQUFxQlksQUFxQlYsQUFlTSxBQVlQLENBZ0NqQixRQWpEdUIsRUFrQkgsR0EzQkwsSUFlWCxHQXpCbUIsQ0FYRSxHQXNCSCxBQTJCaEIsQUFrRmlCLENBcEduQixpQkFSVyxNQXBDUSxLQVJDLEFBNkN0QixjQXBDZ0IsUUFSSCxNQVNxQixPQVJwQyx5QkFTa0IsQUFzQlEsQ0FYRyxHQW1JM0Isb0JBbEltQixlQUNGLGFBQ2YsRUFiRix3QkFzQmEsV0FDbUQsNERBQ2hELHNEQUNoQiIsImZpbGUiOiJDOlxcVXNlcnNcXEJyeWFuXFxkZXNrdG9wXFxQcm9ncmFtbWluZyBQcm9qZWN0c1xcMDIuMSBTaW1wbGUgQ291bnQgRG93blxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGhvbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpe1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgdGltZTogbmV3IERhdGUoKS50b0xvY2FsZVRpbWVTdHJpbmcoKSxcclxuICAgICAgaG91cnM6ICcwMCcsXHJcbiAgICAgIG1pbnM6ICcwMCcsXHJcbiAgICAgIHNlY3M6ICcwMCcsXHJcbiAgICAgIHRpbWVyU3RhcnQ6IGZhbHNlLFxyXG4gICAgICBlbmFibGVUaW1lcjogdHJ1ZSxcclxuICAgICAgYWxhcm1TdGFydDogZmFsc2UsXHJcbiAgICAgIGF1ZGlvOiAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBBdWRpbygnLi9hbGFybS5tcDMnKVxyXG4gICAgICB9LFxyXG4gICAgICBhdWRpbzE6ICcnLFxyXG4gICAgICBnZXRIb3VyQXJyOiAoKSA9PiB7XHJcbiAgICAgICAgbGV0IGFyciA9IFtdO1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCAxMDA7IGkrKyl7XHJcbiAgICAgICAgICBhcnIucHVzaChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFyclxyXG4gICAgICB9LFxyXG4gICAgICBnZXRNaW5TZWNBcnI6ICgpID0+IHtcclxuICAgICAgICBsZXQgYXJyID0gW107XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IDYwOyBpKyspe1xyXG4gICAgICAgICAgYXJyLnB1c2goaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhcnJcclxuICAgICAgfSxcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5oYW5kbGVDbGljayA9IHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKTtcclxuICAgIHRoaXMuaGFuZGxlU3RhcnRDbGljayA9IHRoaXMuaGFuZGxlU3RhcnRDbGljay5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5jb3VudERvd24gPSB0aGlzLmNvdW50RG93bi5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5oYW5kbGVTZXRUaW1lQ2xpY2sgPSB0aGlzLmhhbmRsZVNldFRpbWVDbGljay5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy53aW5kb3dDbGljayA9IHRoaXMud2luZG93Q2xpY2suYmluZCh0aGlzKTtcclxuICAgIH07XHJcblxyXG4gIC8qUmUtcmVuZGVycyBjdXJyZW50IHRpbWUgYW5kIGNvdW50ZG93biB2YWx1ZXMgKi9cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMubG9jYWxUaW1lID0gc2V0SW50ZXJ2YWwoKCkgPT4ge3RoaXMuc2V0U3RhdGUoeyB0aW1lOiBuZXcgRGF0ZSgpLnRvTG9jYWxlVGltZVN0cmluZygpfSl9LCAxMDAwKTtcclxuICAgIHRoaXMudGltZXJUaW1lID0gc2V0SW50ZXJ2YWwodGhpcy5jb3VudERvd24sIDEwMDApO1xyXG4gIH1cclxuXHJcbiAgLypDbGVhciB0aGUgaW50ZXJ2YWxzIHRvIHByZXZlbnQgbWVtb3J5IGxlYWtzKi9cclxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpe1xyXG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLmxvY2FsVGltZSlcclxuICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lclRpbWUpXHJcbiAgfVxyXG5cclxuICAvKlNldHMgY3VycmVudCB0aW1lIHRvIGJlIHJlZnJlc2hlZCBpbiBjb21wb25lbnRkaWRNb3VudCovXHJcbiAgdG9kYXlEYXRlKCl7XHJcbiAgICBsZXQgdG9kYXkgPSBuZXcgRGF0ZSgpO1xyXG4gICAgbGV0IGRkID0gU3RyaW5nKHRvZGF5LmdldERhdGUoKSkucGFkU3RhcnQoMiwnMCcpO1xyXG4gICAgbGV0IG1tID0gU3RyaW5nKHRvZGF5LmdldE1vbnRoKCkpLnBhZFN0YXJ0KDIsJzAnKTtcclxuICAgIGxldCB5eXl5ID0gdG9kYXkuZ2V0RnVsbFllYXIoKTtcclxuICAgIHJldHVybiAgbW0gKyAnLycgKyBkZCArICcvJyArIHl5eXk7XHJcbiAgfTtcclxuXHJcbiAgLypDb3JyZXNwb25kcyBkaWFsIHZhbHVlIHRvIGhvdXJzLCBtaW5zIGFuZCBzZWNzIHN0YXRlIHZhbHVlcyovXHJcbiAgaGFuZGxlQ2xpY2soZSl7XHJcbiAgICBsZXQgdGFyZ2V0ID0gZS50YXJnZXQ7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtbdGFyZ2V0Lm5hbWVdIDogdGFyZ2V0LnZhbHVlLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwwKX0pXHJcbiAgfVxyXG5cclxuICAvKlN0YXJ0IGFuZCBzdG9wIGJ1dHRvbiBmb3IgdGltZXIqL1xyXG4gIGhhbmRsZVN0YXJ0Q2xpY2soKXtcclxuICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnQtYnV0dG9uJyk7XHJcbiAgICBsZXQgaG91cnMgPSB0aGlzLnN0YXRlLmhvdXJzO1xyXG4gICAgbGV0IG1pbnMgPSB0aGlzLnN0YXRlLm1pbnM7XHJcbiAgICBsZXQgc2VjcyA9IHRoaXMuc3RhdGUuc2VjcztcclxuXHJcbiAgICBpZih0aGlzLnN0YXRlLnRpbWVyU3RhcnQgPT09IGZhbHNlKXtcclxuICAgICAgaWYgKHRoaXMuc3RhdGUuZW5hYmxlVGltZXIgPT09IGZhbHNlKXtcclxuICAgICAgICB0aGlzLmhhbmRsZVNldFRpbWVDbGljaygpXHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7dGltZXJTdGFydCA6IHRydWV9KTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7YWxhcm1TdGFydCA6IHRydWV9KTtcclxuICAgICAgaWYgKGhvdXJzID09IDAgJiYgbWlucz09IDAgJiYgc2VjcyA9PSAwKXtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHthbGFybVN0YXJ0IDogZmFsc2V9KTtcclxuICAgICAgfVxyXG4gICAgICBidXR0b24uc3R5bGUuYmFja2dyb3VuZCA9ICcjQTQyNDJGJztcclxuICAgICAgYnV0dG9uLmlubmVySFRNTCA9ICdTdG9wJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe3RpbWVyU3RhcnQgOiBmYWxzZX0pXHJcbiAgICAgIGJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kID0gJyMwMEE2NzYnO1xyXG4gICAgICBidXR0b24uaW5uZXJIVE1MID0gJ1N0YXJ0JztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qQ2hhbmdlcyB0aGUgc3RhdGUgdmFsdWVzIGZvciBob3VycywgbWlucyBhbmQgc2VjcyovXHJcbiAgY291bnREb3duICgpe1xyXG4gICAgbGV0IGhvdXJzID0gdGhpcy5zdGF0ZS5ob3VycztcclxuICAgIGxldCBtaW5zID0gdGhpcy5zdGF0ZS5taW5zO1xyXG4gICAgbGV0IHNlY3MgPSB0aGlzLnN0YXRlLnNlY3M7XHJcbiAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXJ0LWJ1dHRvbicpO1xyXG4gICAgXHJcblxyXG4gICAgaWYgKHRoaXMuc3RhdGUudGltZXJTdGFydCA9PSB0cnVlICYmIHRoaXMuc3RhdGUuZW5hYmxlVGltZXIgPT09IHRydWUpe1xyXG4gICAgICBpZiAoc2VjcyAhPSAwKXtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtzZWNzOiAoK3RoaXMuc3RhdGUuc2VjcyAtIDEpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwwKX0pXHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZiAobWlucyAhPSAwKXtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHttaW5zOiAoK3RoaXMuc3RhdGUubWlucyAtIDEpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwwKX0pXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2VjczogJzU5J30pXHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZiAoaG91cnMgIT0gMCApe1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2hvdXJzOiAoK3RoaXMuc3RhdGUuaG91cnMgLSAxKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsMCl9KVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe21pbnM6ICc1OSd9KVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3NlY3M6ICc1OSd9KVxyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYodGhpcy5zdGF0ZS5hbGFybVN0YXJ0ID09IHRydWUpe1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2F1ZGlvMSA6IG5ldyBBdWRpbygnLi9hbGFybS5tcDMnKX0pO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3RpbWVyU3RhcnQgOiBmYWxzZX0pO1xyXG4gICAgICAgIHRoaXMuc3RhdGUuYXVkaW8xLnBsYXkoKTtcclxuICAgICAgICB3aW5kb3cubmF2aWdhdG9yLnZpYnJhdGUoMjAwMCk7XHJcbiAgICAgICAgYnV0dG9uLnN0eWxlLmJhY2tncm91bmQgPSAnIzAwQTY3Nic7XHJcbiAgICAgICAgYnV0dG9uLmlubmVySFRNTCA9ICdTdGFydCc7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYnV0dG9uLnN0eWxlLmJhY2tncm91bmQgPSAnIzAwQTY3Nic7XHJcbiAgICAgICAgYnV0dG9uLmlubmVySFRNTCA9ICdTdGFydCc7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dGltZXJTdGFydCA6IGZhbHNlfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qRXhwYW5kcyB0aGUgZGlzcGxheSBib3ggdXB3YXJkcyB0byBzaG93IHRoZSBkaWFsIG9wdGlvbnMqL1xyXG4gIGhhbmRsZVNldFRpbWVDbGljaygpe1xyXG4gICAgICBsZXQgaG91ciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaWFsLWhvdXInKTtcclxuICAgICAgbGV0IG1pbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlhbC1taW4nKTtcclxuICAgICAgbGV0IHNlY3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlhbC1zZWMnKTtcclxuICAgICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydC1idXR0b24nKTtcclxuICAgICAgbGV0IGhlaWdodCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXNwbGF5Jykub2Zmc2V0SGVpZ2h0O1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHt0aW1lclN0YXJ0OiBmYWxzZX0pXHJcblxyXG4gICAgaWYgKHRoaXMuc3RhdGUuZW5hYmxlVGltZXIgPT09IHRydWUpe1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtlbmFibGVUaW1lcjogZmFsc2V9KVxyXG4gICAgICBob3VyLnN0eWxlLmhlaWdodCA9IChoZWlnaHQqMC4yKS50b1N0cmluZygpKydweCc7XHJcbiAgICAgIG1pbnMuc3R5bGUuaGVpZ2h0ID0gKGhlaWdodCowLjIpLnRvU3RyaW5nKCkrJ3B4JztcclxuICAgICAgc2Vjcy5zdHlsZS5oZWlnaHQgPSAoaGVpZ2h0KjAuMikudG9TdHJpbmcoKSsncHgnO1xyXG4gICAgICBidXR0b24uc3R5bGUuYmFja2dyb3VuZCA9ICcjMDBBNjc2JztcclxuICAgICAgYnV0dG9uLmlubmVySFRNTCA9ICdTdGFydCc7XHJcbiAgICB9IGVsc2V7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2VuYWJsZVRpbWVyOiB0cnVlfSlcclxuICAgICAgaG91ci5zdHlsZS5oZWlnaHQgPSAnMCc7XHJcbiAgICAgIG1pbnMuc3R5bGUuaGVpZ2h0ID0gJzAnO1xyXG4gICAgICBzZWNzLnN0eWxlLmhlaWdodCA9ICcwJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qU2lsZW5jZSBhbGFybSBhbmQgdmlicmF0aW9uIGZyb20gdGltZXIgcmVhY2hpbmcgemVybyovXHJcbiAgd2luZG93Q2xpY2soKXtcclxuICAgIGlmICh0aGlzLnN0YXRlLmF1ZGlvMSAhPSAnJyAmJiB0aGlzLnN0YXRlLmFsYXJtU3RhcnQgPT0gdHJ1ZSl7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2FsYXJtU3RhcnQgOiBmYWxzZX0pO1xyXG4gICAgICB0aGlzLnN0YXRlLmF1ZGlvMS5wYXVzZSgpO1xyXG4gICAgICB3aW5kb3cubmF2aWdhdG9yLnZpYnJhdGUoMCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKjIgZnVuY3Rpb25zIGJlbG93IGFkZCBhZXN0ZXRpY3Mgd2hlbiBjaG9vc2luZyBkaWFsKi9cclxuICBob3ZlckNvbG9yKGUpe1xyXG4gICAgZS50YXJnZXQuc3R5bGUuYmFja2dyb3VuZCA9ICcjMzczMzM3JztcclxuICAgIGUudGFyZ2V0LnN0eWxlLmNvbG9yID0gJ3doaXRlJztcclxuICB9XHJcblxyXG4gIGhvdmVyT3V0Q29sb3IoZSl7XHJcbiAgICBlLnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kID0gJyNEOEIzOUMnO1xyXG4gICAgZS50YXJnZXQuc3R5bGUuY29sb3IgPSAnIzM3MzMzNyc7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKXtcclxuICAgIGNvbnN0IHRpbWVCdXR0b24gPSB7XHJcbiAgICAgIGZvbnRTaXplOiAnMjBweCcsXHJcbiAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgIGJhY2tncm91bmQ6ICcjRDhCMzlDJyxcclxuICAgICAgb3V0bGluZTogJ25vbmUnLFxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBnZXROdW1Ib3VycyA9IHRoaXMuc3RhdGUuZ2V0SG91ckFycigpLm1hcCgodmFsdWUsIGkpID0+IDxidXR0b24gbmFtZSA9ICdob3Vycycga2V5ID0ge2kgKyAnaG91cnMnfSBzdHlsZSA9IHt0aW1lQnV0dG9ufSBvbk1vdXNlT3ZlciA9IHt0aGlzLmhvdmVyQ29sb3J9IG9uTW91c2VPdXQgPSB7dGhpcy5ob3Zlck91dENvbG9yfSB2YWx1ZSA9IHt2YWx1ZX0gb25DbGljayA9IHt0aGlzLmhhbmRsZUNsaWNrfT57dmFsdWUudG9TdHJpbmcoKS5wYWRTdGFydCgyLDApfTwvYnV0dG9uPik7XHJcbiAgICBjb25zdCBnZXROdW1NaW4gPSB0aGlzLnN0YXRlLmdldE1pblNlY0FycigpLm1hcCgodmFsdWUsIGkpID0+IDxidXR0b24gbmFtZSA9ICdtaW5zJyBrZXkgPSB7aSArICdtaW5zJ30gc3R5bGUgPSB7dGltZUJ1dHRvbn0gb25Nb3VzZU92ZXIgPSB7dGhpcy5ob3ZlckNvbG9yfSBvbk1vdXNlT3V0ID0ge3RoaXMuaG92ZXJPdXRDb2xvcn0gdmFsdWUgPSB7dmFsdWV9IG9uQ2xpY2sgPSB7dGhpcy5oYW5kbGVDbGlja30+e3ZhbHVlLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwwKX08L2J1dHRvbj4pO1xyXG4gICAgY29uc3QgZ2V0TnVtU2VjID0gdGhpcy5zdGF0ZS5nZXRNaW5TZWNBcnIoKS5tYXAoKHZhbHVlLCBpKSA9PiA8YnV0dG9uIG5hbWUgPSAnc2Vjcycga2V5ID0ge2kgKyAnc2Vjcyd9IHN0eWxlID0ge3RpbWVCdXR0b259IG9uTW91c2VPdmVyID0ge3RoaXMuaG92ZXJDb2xvcn0gb25Nb3VzZU91dCA9IHt0aGlzLmhvdmVyT3V0Q29sb3J9IHZhbHVlID0ge3ZhbHVlfSBvbkNsaWNrID0ge3RoaXMuaGFuZGxlQ2xpY2t9Pnt2YWx1ZS50b1N0cmluZygpLnBhZFN0YXJ0KDIsMCl9PC9idXR0b24+KTtcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lID0gJ2NvbnRhaW5lcicgb25DbGljayA9IHt0aGlzLndpbmRvd0NsaWNrfT5cclxuICAgICAgICBcclxuICAgICAgey8qKipOYXYgQmFyKioqL31cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWUgPSAnbmF2YmFyJz5cclxuICAgICAgICAgIDxoMSBpZCA9ICd0aXRsZSc+U2ltcGxlIENvdW50ZG93biBUaW1lcjwvaDE+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9ICdmbGV4LWNvbnRhaW5lci1jb2x1bW4nPlxyXG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWUgPSAnaGVhZGluZyc+VG9kYXkncyBEYXRlOiA8dT57dGhpcy50b2RheURhdGUoKX08L3U+PC9oMj5cclxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lID0gJ2hlYWRpbmcnPkN1cnJlbnQgVGltZTogPHU+e3RoaXMuc3RhdGUudGltZX08L3U+PC9oMj4gIFxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgIHsvKioqQ29udGVudCoqKi99XHJcblxyXG4gICAgICAgIDxkaXYgaWQgPSAnZGlzcGxheSc+XHJcbiAgICAgICAgICA8ZGl2IGlkID0gJ3RpbWVyLXdyYXBwZXInPlxyXG4gICAgICAgICAgICA8ZGl2IGlkID0gJ3RpbWVyJz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9ICd0aW1lLXBsYWNlLWhvbGRlcnMnPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZSA9ICd0aW1lLWRpc3BsYXknIG9uQ2xpY2sgPSB7dGhpcy5oYW5kbGVTZXRUaW1lQ2xpY2t9Pnt0aGlzLnN0YXRlLmhvdXJzfTo8L2gxPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZCA9ICdkaWFsLWhvdXInIGNsYXNzTmFtZSA9ICdkaWFsLXdyYXBwZXIxJz5cclxuICAgICAgICAgICAgICAgICAgICB7Z2V0TnVtSG91cnN9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWUgPSAnZGVzY3JpcHRpb24nIG9uQ2xpY2sgPSB7dGhpcy5oYW5kbGVTZXRUaW1lQ2xpY2t9PkhvdXJzPC9oMT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9ICd0aW1lLXBsYWNlLWhvbGRlcnMnPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZSA9ICd0aW1lLWRpc3BsYXknIG9uQ2xpY2sgPSB7dGhpcy5oYW5kbGVTZXRUaW1lQ2xpY2t9Pnt0aGlzLnN0YXRlLm1pbnN9OjwvaDE+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkID0gJ2RpYWwtbWluJyBjbGFzc05hbWUgPSAnZGlhbC13cmFwcGVyMSc+XHJcbiAgICAgICAgICAgICAgICAgICAge2dldE51bU1pbn1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZSA9ICdkZXNjcmlwdGlvbicgb25DbGljayA9IHt0aGlzLmhhbmRsZVNldFRpbWVDbGlja30+TWluczwvaDE+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSAndGltZS1wbGFjZS1ob2xkZXJzJz5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWUgPSAndGltZS1kaXNwbGF5JyBvbkNsaWNrID0ge3RoaXMuaGFuZGxlU2V0VGltZUNsaWNrfT57dGhpcy5zdGF0ZS5zZWNzfTwvaDE+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkID0gJ2RpYWwtc2VjJyBjbGFzc05hbWUgPSAnZGlhbC13cmFwcGVyMSc+XHJcbiAgICAgICAgICAgICAgICAgICAge2dldE51bVNlY31cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZSA9ICdkZXNjcmlwdGlvbicgb25DbGljayA9IHt0aGlzLmhhbmRsZVNldFRpbWVDbGlja30+U2VjczwvaDE+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8YnV0dG9uIGlkID0gJ3N0YXJ0LWJ1dHRvbicgb25DbGljayA9IHt0aGlzLmhhbmRsZVN0YXJ0Q2xpY2t9PlN0YXJ0PC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgey8qKipGb290ZXIqKiovfVxyXG5cclxuICAgICAgICAgIDxmb290ZXI+XHJcbiAgICAgICAgICAgIDxwPiZjb3B5OyBCcnlhbiBXb25nIHwgMjAyMDwvcD5cclxuICAgICAgICAgIDwvZm9vdGVyPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcblxyXG4gICAgICAgIC8qSWQgYW5kIENsYXNzIFN0eWxpbmcqL1xyXG5cclxuICAgICAgICAgIC5jb250YWluZXJ7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGZsZXg6IDAgMCBhdXRvO1xyXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgICAubmF2YmFye1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgbWluLWhlaWdodDogMTB2aDtcclxuICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMzczMzM3O1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjRDhCMzlDO1xyXG4gICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjRDhCMzlDO1xyXG4gICAgICAgICAgICAgIGZsZXg6IDAgMCBhdXRvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgI3RpdGxle1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA1NXB4O1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBhdXRvO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAuZmxleC1jb250YWluZXItY29sdW1ue1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDEwcHggMCAxMHB4O1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGppc3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIlO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBzb2xpZDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLmhlYWRpbmd7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI2Rpc3BsYXl7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KCAjRjdGOUY5ICwgI0UzRTdEMywgIzg0OTQ4Myk7XHJcbiAgICAgICAgICAgICAgZmxleDogMSAwIGF1dG87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI3RpbWVyLXdyYXBwZXJ7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgIG1pbi13aWR0aDogMjglO1xyXG4gICAgICAgICAgICAgIGJvdHRvbTogMzMlO1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICBib3R0b206IDMzJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICN0aW1lcntcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiAzMy4zMyU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC50aW1lLXBsYWNlLWhvbGRlcnN7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLnRpbWUtZGlzcGxheXtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogOTAlO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNjBweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzczMzM3O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNEOEIzOUM7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5kaWFsLXdyYXBwZXIxe1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDBweDtcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5kaWFsLXdyYXBwZXIxOjotd2Via2l0LXNjcm9sbGJhcntcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLmRlc2NyaXB0aW9ue1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM3MzMzNztcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjRDhCMzlDO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI3N0YXJ0LWJ1dHRvbntcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMEE2NzY7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICNGN0Y5Rjk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgIC8qR2VuZXJpYyBFbGVtZW50IFN0eWxpbmcqL1xyXG5cclxuICAgICAgICAgIGgxOmhvdmVye1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBoMTpmb2N1c3tcclxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBoMSwgaDIsIHB7XHJcbiAgICAgICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7ICAvKiBDaHJvbWUgNDkrICovXHJcbiAgICAgICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7ICAgICAvKiBGaXJlZm94IDQzKyAqL1xyXG4gICAgICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7ICAgICAgLyogTm8gc3VwcG9ydCB5ZXQgKi9cclxuICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7ICAgICAgICAgIC8qIExpa2VseSBmdXR1cmUgKi8gICBcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGZvb3RlcntcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzM3MzMzNztcclxuICAgICAgICAgICAgY29sb3I6ICNEOEIzOUM7XHJcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDNweCBzb2xpZCAjRDhCMzlDO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZm9vdGVyIHAge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHggMCA4cHggMTBweCA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBidXR0b257XHJcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBidXR0b246Zm9jdXN7XHJcbiAgICAgICAgICAgIG91dGxpbmU6bm9uZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAvKlJlc3BvbnNpdmUgV2ViIERlc2lnbiovXHJcblxyXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCl7XHJcbiAgICAgICAgICAjdGl0bGV7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNDJweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5oZWFkaW5ne1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnRpbWUtZGlzcGxheXtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMjBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5kZXNjcmlwdGlvbntcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgI3N0YXJ0LWJ1dHRvbntcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyM3B4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc1MHB4KXtcclxuICAgICAgICAgICAgI3RpdGxle1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaGVhZGluZ3tcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmZsZXgtY29udGFpbmVyLWNvbHVtbntcclxuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnRpbWUtZGlzcGxheXtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEyMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5kZXNjcmlwdGlvbntcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI3N0YXJ0LWJ1dHRvbntcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDIzcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9vdGVye1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KXtcclxuICAgICAgICAgICAgZm9vdGVye1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgICBib3R0b206IC0zMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5uYXZiYXJ7XHJcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZmxleC1jb250YWluZXItY29sdW1ue1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMTBweCAwIDEwcHggMDtcclxuICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ1MHB4KXtcclxuICAgICAgICAgICAgLmNvbnRhaW5lcntcclxuICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICN0aXRsZXtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmhlYWRpbmd7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC50aW1lLWRpc3BsYXl7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiA5MHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5kZXNjcmlwdGlvbntcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI3N0YXJ0LWJ1dHRvbntcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDIzcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3NXB4KXtcclxuICAgICAgICAgICAgI3RpdGxle1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjZGlzcGxheXtcclxuICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAudGltZS1kaXNwbGF5e1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogNjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZGVzY3JpcHRpb257XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICNzdGFydC1idXR0b257XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvb3RlcntcclxuICAgICAgICAgICAgICBib3R0b206IC0xMDJweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjdGltZXItd3JhcHBlcntcclxuICAgICAgICAgICAgICBib3R0b206IDI1JTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcblxyXG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgIGh0bWwsXHJcbiAgICAgIGJvZHkge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFNlZ29lIFVJLCBSb2JvdG8sXHJcbiAgICAgICAgICBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBGaXJhIFNhbnMsIERyb2lkIFNhbnMsIEhlbHZldGljYSBOZXVlLFxyXG4gICAgICAgICAgc2Fucy1zZXJpZjtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIH1cclxuICAgICAgKntcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBib3JkZXI6IDA7XHJcbiAgICAgICAgXHJcbiAgICAgIH1cclxuICAgIGB9PC9zdHlsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59ICJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\Bryan\\\\desktop\\\\Programming Projects\\\\02.1 Simple Count Down\\\\pages\\\\index.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "3185257940",
        __self: this
      }, "html,body{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto, Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue, sans-serif;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}*{padding:0;margin:0;border:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQnJ5YW5cXGRlc2t0b3BcXFByb2dyYW1taW5nIFByb2plY3RzXFwwMi4xIFNpbXBsZSBDb3VudCBEb3duXFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdWQyQixBQU1xQixBQUtGLFVBQ0QsU0FDQSxTQUVYLDBHQVJlLDBFQUNTLDhFQUN4QiIsImZpbGUiOiJDOlxcVXNlcnNcXEJyeWFuXFxkZXNrdG9wXFxQcm9ncmFtbWluZyBQcm9qZWN0c1xcMDIuMSBTaW1wbGUgQ291bnQgRG93blxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGhvbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpe1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgdGltZTogbmV3IERhdGUoKS50b0xvY2FsZVRpbWVTdHJpbmcoKSxcclxuICAgICAgaG91cnM6ICcwMCcsXHJcbiAgICAgIG1pbnM6ICcwMCcsXHJcbiAgICAgIHNlY3M6ICcwMCcsXHJcbiAgICAgIHRpbWVyU3RhcnQ6IGZhbHNlLFxyXG4gICAgICBlbmFibGVUaW1lcjogdHJ1ZSxcclxuICAgICAgYWxhcm1TdGFydDogZmFsc2UsXHJcbiAgICAgIGF1ZGlvOiAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBBdWRpbygnLi9hbGFybS5tcDMnKVxyXG4gICAgICB9LFxyXG4gICAgICBhdWRpbzE6ICcnLFxyXG4gICAgICBnZXRIb3VyQXJyOiAoKSA9PiB7XHJcbiAgICAgICAgbGV0IGFyciA9IFtdO1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCAxMDA7IGkrKyl7XHJcbiAgICAgICAgICBhcnIucHVzaChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFyclxyXG4gICAgICB9LFxyXG4gICAgICBnZXRNaW5TZWNBcnI6ICgpID0+IHtcclxuICAgICAgICBsZXQgYXJyID0gW107XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IDYwOyBpKyspe1xyXG4gICAgICAgICAgYXJyLnB1c2goaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhcnJcclxuICAgICAgfSxcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5oYW5kbGVDbGljayA9IHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKTtcclxuICAgIHRoaXMuaGFuZGxlU3RhcnRDbGljayA9IHRoaXMuaGFuZGxlU3RhcnRDbGljay5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5jb3VudERvd24gPSB0aGlzLmNvdW50RG93bi5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5oYW5kbGVTZXRUaW1lQ2xpY2sgPSB0aGlzLmhhbmRsZVNldFRpbWVDbGljay5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy53aW5kb3dDbGljayA9IHRoaXMud2luZG93Q2xpY2suYmluZCh0aGlzKTtcclxuICAgIH07XHJcblxyXG4gIC8qUmUtcmVuZGVycyBjdXJyZW50IHRpbWUgYW5kIGNvdW50ZG93biB2YWx1ZXMgKi9cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMubG9jYWxUaW1lID0gc2V0SW50ZXJ2YWwoKCkgPT4ge3RoaXMuc2V0U3RhdGUoeyB0aW1lOiBuZXcgRGF0ZSgpLnRvTG9jYWxlVGltZVN0cmluZygpfSl9LCAxMDAwKTtcclxuICAgIHRoaXMudGltZXJUaW1lID0gc2V0SW50ZXJ2YWwodGhpcy5jb3VudERvd24sIDEwMDApO1xyXG4gIH1cclxuXHJcbiAgLypDbGVhciB0aGUgaW50ZXJ2YWxzIHRvIHByZXZlbnQgbWVtb3J5IGxlYWtzKi9cclxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpe1xyXG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLmxvY2FsVGltZSlcclxuICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lclRpbWUpXHJcbiAgfVxyXG5cclxuICAvKlNldHMgY3VycmVudCB0aW1lIHRvIGJlIHJlZnJlc2hlZCBpbiBjb21wb25lbnRkaWRNb3VudCovXHJcbiAgdG9kYXlEYXRlKCl7XHJcbiAgICBsZXQgdG9kYXkgPSBuZXcgRGF0ZSgpO1xyXG4gICAgbGV0IGRkID0gU3RyaW5nKHRvZGF5LmdldERhdGUoKSkucGFkU3RhcnQoMiwnMCcpO1xyXG4gICAgbGV0IG1tID0gU3RyaW5nKHRvZGF5LmdldE1vbnRoKCkpLnBhZFN0YXJ0KDIsJzAnKTtcclxuICAgIGxldCB5eXl5ID0gdG9kYXkuZ2V0RnVsbFllYXIoKTtcclxuICAgIHJldHVybiAgbW0gKyAnLycgKyBkZCArICcvJyArIHl5eXk7XHJcbiAgfTtcclxuXHJcbiAgLypDb3JyZXNwb25kcyBkaWFsIHZhbHVlIHRvIGhvdXJzLCBtaW5zIGFuZCBzZWNzIHN0YXRlIHZhbHVlcyovXHJcbiAgaGFuZGxlQ2xpY2soZSl7XHJcbiAgICBsZXQgdGFyZ2V0ID0gZS50YXJnZXQ7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtbdGFyZ2V0Lm5hbWVdIDogdGFyZ2V0LnZhbHVlLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwwKX0pXHJcbiAgfVxyXG5cclxuICAvKlN0YXJ0IGFuZCBzdG9wIGJ1dHRvbiBmb3IgdGltZXIqL1xyXG4gIGhhbmRsZVN0YXJ0Q2xpY2soKXtcclxuICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnQtYnV0dG9uJyk7XHJcbiAgICBsZXQgaG91cnMgPSB0aGlzLnN0YXRlLmhvdXJzO1xyXG4gICAgbGV0IG1pbnMgPSB0aGlzLnN0YXRlLm1pbnM7XHJcbiAgICBsZXQgc2VjcyA9IHRoaXMuc3RhdGUuc2VjcztcclxuXHJcbiAgICBpZih0aGlzLnN0YXRlLnRpbWVyU3RhcnQgPT09IGZhbHNlKXtcclxuICAgICAgaWYgKHRoaXMuc3RhdGUuZW5hYmxlVGltZXIgPT09IGZhbHNlKXtcclxuICAgICAgICB0aGlzLmhhbmRsZVNldFRpbWVDbGljaygpXHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7dGltZXJTdGFydCA6IHRydWV9KTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7YWxhcm1TdGFydCA6IHRydWV9KTtcclxuICAgICAgaWYgKGhvdXJzID09IDAgJiYgbWlucz09IDAgJiYgc2VjcyA9PSAwKXtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHthbGFybVN0YXJ0IDogZmFsc2V9KTtcclxuICAgICAgfVxyXG4gICAgICBidXR0b24uc3R5bGUuYmFja2dyb3VuZCA9ICcjQTQyNDJGJztcclxuICAgICAgYnV0dG9uLmlubmVySFRNTCA9ICdTdG9wJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe3RpbWVyU3RhcnQgOiBmYWxzZX0pXHJcbiAgICAgIGJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kID0gJyMwMEE2NzYnO1xyXG4gICAgICBidXR0b24uaW5uZXJIVE1MID0gJ1N0YXJ0JztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qQ2hhbmdlcyB0aGUgc3RhdGUgdmFsdWVzIGZvciBob3VycywgbWlucyBhbmQgc2VjcyovXHJcbiAgY291bnREb3duICgpe1xyXG4gICAgbGV0IGhvdXJzID0gdGhpcy5zdGF0ZS5ob3VycztcclxuICAgIGxldCBtaW5zID0gdGhpcy5zdGF0ZS5taW5zO1xyXG4gICAgbGV0IHNlY3MgPSB0aGlzLnN0YXRlLnNlY3M7XHJcbiAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXJ0LWJ1dHRvbicpO1xyXG4gICAgXHJcblxyXG4gICAgaWYgKHRoaXMuc3RhdGUudGltZXJTdGFydCA9PSB0cnVlICYmIHRoaXMuc3RhdGUuZW5hYmxlVGltZXIgPT09IHRydWUpe1xyXG4gICAgICBpZiAoc2VjcyAhPSAwKXtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtzZWNzOiAoK3RoaXMuc3RhdGUuc2VjcyAtIDEpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwwKX0pXHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZiAobWlucyAhPSAwKXtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHttaW5zOiAoK3RoaXMuc3RhdGUubWlucyAtIDEpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwwKX0pXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2VjczogJzU5J30pXHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZiAoaG91cnMgIT0gMCApe1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2hvdXJzOiAoK3RoaXMuc3RhdGUuaG91cnMgLSAxKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsMCl9KVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe21pbnM6ICc1OSd9KVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3NlY3M6ICc1OSd9KVxyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYodGhpcy5zdGF0ZS5hbGFybVN0YXJ0ID09IHRydWUpe1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2F1ZGlvMSA6IG5ldyBBdWRpbygnLi9hbGFybS5tcDMnKX0pO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3RpbWVyU3RhcnQgOiBmYWxzZX0pO1xyXG4gICAgICAgIHRoaXMuc3RhdGUuYXVkaW8xLnBsYXkoKTtcclxuICAgICAgICB3aW5kb3cubmF2aWdhdG9yLnZpYnJhdGUoMjAwMCk7XHJcbiAgICAgICAgYnV0dG9uLnN0eWxlLmJhY2tncm91bmQgPSAnIzAwQTY3Nic7XHJcbiAgICAgICAgYnV0dG9uLmlubmVySFRNTCA9ICdTdGFydCc7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYnV0dG9uLnN0eWxlLmJhY2tncm91bmQgPSAnIzAwQTY3Nic7XHJcbiAgICAgICAgYnV0dG9uLmlubmVySFRNTCA9ICdTdGFydCc7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dGltZXJTdGFydCA6IGZhbHNlfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qRXhwYW5kcyB0aGUgZGlzcGxheSBib3ggdXB3YXJkcyB0byBzaG93IHRoZSBkaWFsIG9wdGlvbnMqL1xyXG4gIGhhbmRsZVNldFRpbWVDbGljaygpe1xyXG4gICAgICBsZXQgaG91ciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaWFsLWhvdXInKTtcclxuICAgICAgbGV0IG1pbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlhbC1taW4nKTtcclxuICAgICAgbGV0IHNlY3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlhbC1zZWMnKTtcclxuICAgICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydC1idXR0b24nKTtcclxuICAgICAgbGV0IGhlaWdodCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXNwbGF5Jykub2Zmc2V0SGVpZ2h0O1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHt0aW1lclN0YXJ0OiBmYWxzZX0pXHJcblxyXG4gICAgaWYgKHRoaXMuc3RhdGUuZW5hYmxlVGltZXIgPT09IHRydWUpe1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtlbmFibGVUaW1lcjogZmFsc2V9KVxyXG4gICAgICBob3VyLnN0eWxlLmhlaWdodCA9IChoZWlnaHQqMC4yKS50b1N0cmluZygpKydweCc7XHJcbiAgICAgIG1pbnMuc3R5bGUuaGVpZ2h0ID0gKGhlaWdodCowLjIpLnRvU3RyaW5nKCkrJ3B4JztcclxuICAgICAgc2Vjcy5zdHlsZS5oZWlnaHQgPSAoaGVpZ2h0KjAuMikudG9TdHJpbmcoKSsncHgnO1xyXG4gICAgICBidXR0b24uc3R5bGUuYmFja2dyb3VuZCA9ICcjMDBBNjc2JztcclxuICAgICAgYnV0dG9uLmlubmVySFRNTCA9ICdTdGFydCc7XHJcbiAgICB9IGVsc2V7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2VuYWJsZVRpbWVyOiB0cnVlfSlcclxuICAgICAgaG91ci5zdHlsZS5oZWlnaHQgPSAnMCc7XHJcbiAgICAgIG1pbnMuc3R5bGUuaGVpZ2h0ID0gJzAnO1xyXG4gICAgICBzZWNzLnN0eWxlLmhlaWdodCA9ICcwJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qU2lsZW5jZSBhbGFybSBhbmQgdmlicmF0aW9uIGZyb20gdGltZXIgcmVhY2hpbmcgemVybyovXHJcbiAgd2luZG93Q2xpY2soKXtcclxuICAgIGlmICh0aGlzLnN0YXRlLmF1ZGlvMSAhPSAnJyAmJiB0aGlzLnN0YXRlLmFsYXJtU3RhcnQgPT0gdHJ1ZSl7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2FsYXJtU3RhcnQgOiBmYWxzZX0pO1xyXG4gICAgICB0aGlzLnN0YXRlLmF1ZGlvMS5wYXVzZSgpO1xyXG4gICAgICB3aW5kb3cubmF2aWdhdG9yLnZpYnJhdGUoMCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKjIgZnVuY3Rpb25zIGJlbG93IGFkZCBhZXN0ZXRpY3Mgd2hlbiBjaG9vc2luZyBkaWFsKi9cclxuICBob3ZlckNvbG9yKGUpe1xyXG4gICAgZS50YXJnZXQuc3R5bGUuYmFja2dyb3VuZCA9ICcjMzczMzM3JztcclxuICAgIGUudGFyZ2V0LnN0eWxlLmNvbG9yID0gJ3doaXRlJztcclxuICB9XHJcblxyXG4gIGhvdmVyT3V0Q29sb3IoZSl7XHJcbiAgICBlLnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kID0gJyNEOEIzOUMnO1xyXG4gICAgZS50YXJnZXQuc3R5bGUuY29sb3IgPSAnIzM3MzMzNyc7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKXtcclxuICAgIGNvbnN0IHRpbWVCdXR0b24gPSB7XHJcbiAgICAgIGZvbnRTaXplOiAnMjBweCcsXHJcbiAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgIGJhY2tncm91bmQ6ICcjRDhCMzlDJyxcclxuICAgICAgb3V0bGluZTogJ25vbmUnLFxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBnZXROdW1Ib3VycyA9IHRoaXMuc3RhdGUuZ2V0SG91ckFycigpLm1hcCgodmFsdWUsIGkpID0+IDxidXR0b24gbmFtZSA9ICdob3Vycycga2V5ID0ge2kgKyAnaG91cnMnfSBzdHlsZSA9IHt0aW1lQnV0dG9ufSBvbk1vdXNlT3ZlciA9IHt0aGlzLmhvdmVyQ29sb3J9IG9uTW91c2VPdXQgPSB7dGhpcy5ob3Zlck91dENvbG9yfSB2YWx1ZSA9IHt2YWx1ZX0gb25DbGljayA9IHt0aGlzLmhhbmRsZUNsaWNrfT57dmFsdWUudG9TdHJpbmcoKS5wYWRTdGFydCgyLDApfTwvYnV0dG9uPik7XHJcbiAgICBjb25zdCBnZXROdW1NaW4gPSB0aGlzLnN0YXRlLmdldE1pblNlY0FycigpLm1hcCgodmFsdWUsIGkpID0+IDxidXR0b24gbmFtZSA9ICdtaW5zJyBrZXkgPSB7aSArICdtaW5zJ30gc3R5bGUgPSB7dGltZUJ1dHRvbn0gb25Nb3VzZU92ZXIgPSB7dGhpcy5ob3ZlckNvbG9yfSBvbk1vdXNlT3V0ID0ge3RoaXMuaG92ZXJPdXRDb2xvcn0gdmFsdWUgPSB7dmFsdWV9IG9uQ2xpY2sgPSB7dGhpcy5oYW5kbGVDbGlja30+e3ZhbHVlLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwwKX08L2J1dHRvbj4pO1xyXG4gICAgY29uc3QgZ2V0TnVtU2VjID0gdGhpcy5zdGF0ZS5nZXRNaW5TZWNBcnIoKS5tYXAoKHZhbHVlLCBpKSA9PiA8YnV0dG9uIG5hbWUgPSAnc2Vjcycga2V5ID0ge2kgKyAnc2Vjcyd9IHN0eWxlID0ge3RpbWVCdXR0b259IG9uTW91c2VPdmVyID0ge3RoaXMuaG92ZXJDb2xvcn0gb25Nb3VzZU91dCA9IHt0aGlzLmhvdmVyT3V0Q29sb3J9IHZhbHVlID0ge3ZhbHVlfSBvbkNsaWNrID0ge3RoaXMuaGFuZGxlQ2xpY2t9Pnt2YWx1ZS50b1N0cmluZygpLnBhZFN0YXJ0KDIsMCl9PC9idXR0b24+KTtcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lID0gJ2NvbnRhaW5lcicgb25DbGljayA9IHt0aGlzLndpbmRvd0NsaWNrfT5cclxuICAgICAgICBcclxuICAgICAgey8qKipOYXYgQmFyKioqL31cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWUgPSAnbmF2YmFyJz5cclxuICAgICAgICAgIDxoMSBpZCA9ICd0aXRsZSc+U2ltcGxlIENvdW50ZG93biBUaW1lcjwvaDE+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9ICdmbGV4LWNvbnRhaW5lci1jb2x1bW4nPlxyXG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWUgPSAnaGVhZGluZyc+VG9kYXkncyBEYXRlOiA8dT57dGhpcy50b2RheURhdGUoKX08L3U+PC9oMj5cclxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lID0gJ2hlYWRpbmcnPkN1cnJlbnQgVGltZTogPHU+e3RoaXMuc3RhdGUudGltZX08L3U+PC9oMj4gIFxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgIHsvKioqQ29udGVudCoqKi99XHJcblxyXG4gICAgICAgIDxkaXYgaWQgPSAnZGlzcGxheSc+XHJcbiAgICAgICAgICA8ZGl2IGlkID0gJ3RpbWVyLXdyYXBwZXInPlxyXG4gICAgICAgICAgICA8ZGl2IGlkID0gJ3RpbWVyJz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9ICd0aW1lLXBsYWNlLWhvbGRlcnMnPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZSA9ICd0aW1lLWRpc3BsYXknIG9uQ2xpY2sgPSB7dGhpcy5oYW5kbGVTZXRUaW1lQ2xpY2t9Pnt0aGlzLnN0YXRlLmhvdXJzfTo8L2gxPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZCA9ICdkaWFsLWhvdXInIGNsYXNzTmFtZSA9ICdkaWFsLXdyYXBwZXIxJz5cclxuICAgICAgICAgICAgICAgICAgICB7Z2V0TnVtSG91cnN9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWUgPSAnZGVzY3JpcHRpb24nIG9uQ2xpY2sgPSB7dGhpcy5oYW5kbGVTZXRUaW1lQ2xpY2t9PkhvdXJzPC9oMT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9ICd0aW1lLXBsYWNlLWhvbGRlcnMnPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZSA9ICd0aW1lLWRpc3BsYXknIG9uQ2xpY2sgPSB7dGhpcy5oYW5kbGVTZXRUaW1lQ2xpY2t9Pnt0aGlzLnN0YXRlLm1pbnN9OjwvaDE+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkID0gJ2RpYWwtbWluJyBjbGFzc05hbWUgPSAnZGlhbC13cmFwcGVyMSc+XHJcbiAgICAgICAgICAgICAgICAgICAge2dldE51bU1pbn1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZSA9ICdkZXNjcmlwdGlvbicgb25DbGljayA9IHt0aGlzLmhhbmRsZVNldFRpbWVDbGlja30+TWluczwvaDE+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSAndGltZS1wbGFjZS1ob2xkZXJzJz5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWUgPSAndGltZS1kaXNwbGF5JyBvbkNsaWNrID0ge3RoaXMuaGFuZGxlU2V0VGltZUNsaWNrfT57dGhpcy5zdGF0ZS5zZWNzfTwvaDE+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkID0gJ2RpYWwtc2VjJyBjbGFzc05hbWUgPSAnZGlhbC13cmFwcGVyMSc+XHJcbiAgICAgICAgICAgICAgICAgICAge2dldE51bVNlY31cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZSA9ICdkZXNjcmlwdGlvbicgb25DbGljayA9IHt0aGlzLmhhbmRsZVNldFRpbWVDbGlja30+U2VjczwvaDE+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8YnV0dG9uIGlkID0gJ3N0YXJ0LWJ1dHRvbicgb25DbGljayA9IHt0aGlzLmhhbmRsZVN0YXJ0Q2xpY2t9PlN0YXJ0PC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgey8qKipGb290ZXIqKiovfVxyXG5cclxuICAgICAgICAgIDxmb290ZXI+XHJcbiAgICAgICAgICAgIDxwPiZjb3B5OyBCcnlhbiBXb25nIHwgMjAyMDwvcD5cclxuICAgICAgICAgIDwvZm9vdGVyPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcblxyXG4gICAgICAgIC8qSWQgYW5kIENsYXNzIFN0eWxpbmcqL1xyXG5cclxuICAgICAgICAgIC5jb250YWluZXJ7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGZsZXg6IDAgMCBhdXRvO1xyXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgICAubmF2YmFye1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgbWluLWhlaWdodDogMTB2aDtcclxuICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMzczMzM3O1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjRDhCMzlDO1xyXG4gICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjRDhCMzlDO1xyXG4gICAgICAgICAgICAgIGZsZXg6IDAgMCBhdXRvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgI3RpdGxle1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA1NXB4O1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBhdXRvO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAuZmxleC1jb250YWluZXItY29sdW1ue1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDEwcHggMCAxMHB4O1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGppc3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIlO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBzb2xpZDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLmhlYWRpbmd7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI2Rpc3BsYXl7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KCAjRjdGOUY5ICwgI0UzRTdEMywgIzg0OTQ4Myk7XHJcbiAgICAgICAgICAgICAgZmxleDogMSAwIGF1dG87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI3RpbWVyLXdyYXBwZXJ7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgIG1pbi13aWR0aDogMjglO1xyXG4gICAgICAgICAgICAgIGJvdHRvbTogMzMlO1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICBib3R0b206IDMzJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICN0aW1lcntcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiAzMy4zMyU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC50aW1lLXBsYWNlLWhvbGRlcnN7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLnRpbWUtZGlzcGxheXtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogOTAlO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNjBweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzczMzM3O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNEOEIzOUM7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5kaWFsLXdyYXBwZXIxe1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDBweDtcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5kaWFsLXdyYXBwZXIxOjotd2Via2l0LXNjcm9sbGJhcntcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLmRlc2NyaXB0aW9ue1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM3MzMzNztcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjRDhCMzlDO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI3N0YXJ0LWJ1dHRvbntcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMEE2NzY7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICNGN0Y5Rjk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgIC8qR2VuZXJpYyBFbGVtZW50IFN0eWxpbmcqL1xyXG5cclxuICAgICAgICAgIGgxOmhvdmVye1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBoMTpmb2N1c3tcclxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBoMSwgaDIsIHB7XHJcbiAgICAgICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7ICAvKiBDaHJvbWUgNDkrICovXHJcbiAgICAgICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7ICAgICAvKiBGaXJlZm94IDQzKyAqL1xyXG4gICAgICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7ICAgICAgLyogTm8gc3VwcG9ydCB5ZXQgKi9cclxuICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7ICAgICAgICAgIC8qIExpa2VseSBmdXR1cmUgKi8gICBcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGZvb3RlcntcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzM3MzMzNztcclxuICAgICAgICAgICAgY29sb3I6ICNEOEIzOUM7XHJcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDNweCBzb2xpZCAjRDhCMzlDO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZm9vdGVyIHAge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHggMCA4cHggMTBweCA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBidXR0b257XHJcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBidXR0b246Zm9jdXN7XHJcbiAgICAgICAgICAgIG91dGxpbmU6bm9uZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAvKlJlc3BvbnNpdmUgV2ViIERlc2lnbiovXHJcblxyXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCl7XHJcbiAgICAgICAgICAjdGl0bGV7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNDJweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5oZWFkaW5ne1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnRpbWUtZGlzcGxheXtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMjBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5kZXNjcmlwdGlvbntcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgI3N0YXJ0LWJ1dHRvbntcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyM3B4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc1MHB4KXtcclxuICAgICAgICAgICAgI3RpdGxle1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaGVhZGluZ3tcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmZsZXgtY29udGFpbmVyLWNvbHVtbntcclxuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnRpbWUtZGlzcGxheXtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEyMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5kZXNjcmlwdGlvbntcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI3N0YXJ0LWJ1dHRvbntcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDIzcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9vdGVye1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KXtcclxuICAgICAgICAgICAgZm9vdGVye1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgICBib3R0b206IC0zMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5uYXZiYXJ7XHJcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZmxleC1jb250YWluZXItY29sdW1ue1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMTBweCAwIDEwcHggMDtcclxuICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ1MHB4KXtcclxuICAgICAgICAgICAgLmNvbnRhaW5lcntcclxuICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICN0aXRsZXtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmhlYWRpbmd7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC50aW1lLWRpc3BsYXl7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiA5MHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5kZXNjcmlwdGlvbntcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI3N0YXJ0LWJ1dHRvbntcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDIzcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3NXB4KXtcclxuICAgICAgICAgICAgI3RpdGxle1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjZGlzcGxheXtcclxuICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAudGltZS1kaXNwbGF5e1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogNjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZGVzY3JpcHRpb257XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICNzdGFydC1idXR0b257XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvb3RlcntcclxuICAgICAgICAgICAgICBib3R0b206IC0xMDJweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjdGltZXItd3JhcHBlcntcclxuICAgICAgICAgICAgICBib3R0b206IDI1JTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcblxyXG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgIGh0bWwsXHJcbiAgICAgIGJvZHkge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFNlZ29lIFVJLCBSb2JvdG8sXHJcbiAgICAgICAgICBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBGaXJhIFNhbnMsIERyb2lkIFNhbnMsIEhlbHZldGljYSBOZXVlLFxyXG4gICAgICAgICAgc2Fucy1zZXJpZjtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIH1cclxuICAgICAgKntcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBib3JkZXI6IDA7XHJcbiAgICAgICAgXHJcbiAgICAgIH1cclxuICAgIGB9PC9zdHlsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59ICJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\Bryan\\\\desktop\\\\Programming Projects\\\\02.1 Simple Count Down\\\\pages\\\\index.js */"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJob21lIiwicHJvcHMiLCJzdGF0ZSIsInRpbWUiLCJEYXRlIiwidG9Mb2NhbGVUaW1lU3RyaW5nIiwiaG91cnMiLCJtaW5zIiwic2VjcyIsInRpbWVyU3RhcnQiLCJlbmFibGVUaW1lciIsImFsYXJtU3RhcnQiLCJhdWRpbyIsIkF1ZGlvIiwiYXVkaW8xIiwiZ2V0SG91ckFyciIsImFyciIsImkiLCJwdXNoIiwiZ2V0TWluU2VjQXJyIiwiaGFuZGxlQ2xpY2siLCJiaW5kIiwiaGFuZGxlU3RhcnRDbGljayIsImNvdW50RG93biIsImhhbmRsZVNldFRpbWVDbGljayIsIndpbmRvd0NsaWNrIiwibG9jYWxUaW1lIiwic2V0SW50ZXJ2YWwiLCJzZXRTdGF0ZSIsInRpbWVyVGltZSIsImNsZWFySW50ZXJ2YWwiLCJ0b2RheSIsImRkIiwiU3RyaW5nIiwiZ2V0RGF0ZSIsInBhZFN0YXJ0IiwibW0iLCJnZXRNb250aCIsInl5eXkiLCJnZXRGdWxsWWVhciIsImUiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJ0b1N0cmluZyIsImJ1dHRvbiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzdHlsZSIsImJhY2tncm91bmQiLCJpbm5lckhUTUwiLCJwbGF5Iiwid2luZG93IiwibmF2aWdhdG9yIiwidmlicmF0ZSIsImhvdXIiLCJoZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJwYXVzZSIsImNvbG9yIiwidGltZUJ1dHRvbiIsImZvbnRTaXplIiwid2lkdGgiLCJvdXRsaW5lIiwiZ2V0TnVtSG91cnMiLCJtYXAiLCJob3ZlckNvbG9yIiwiaG92ZXJPdXRDb2xvciIsImdldE51bU1pbiIsImdldE51bVNlYyIsInRvZGF5RGF0ZSIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFDcUJBLEk7Ozs7O0FBQ25CLGdC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QTtBQUFBLGdCQUxGLENBZkYsQ0FERixFQXdCRTtBQUFRLFVBQUUsRUFBRyxjQUFiO0FBQTRCLGVBQU8sRUFBSSxLQUFLRixnQkFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXhCRixDQURGLEVBOEJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQ0FERixDQTlCRixDQWRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHV3c0JBREY7QUFrVEQ7Ozs7RUF4ZStCaUQsNENBQUssQ0FBQ0MsUyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuMmRlNDY3YTVlMzgyODFjYTAyYmEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBob21lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIHRpbWU6IG5ldyBEYXRlKCkudG9Mb2NhbGVUaW1lU3RyaW5nKCksXHJcbiAgICAgIGhvdXJzOiAnMDAnLFxyXG4gICAgICBtaW5zOiAnMDAnLFxyXG4gICAgICBzZWNzOiAnMDAnLFxyXG4gICAgICB0aW1lclN0YXJ0OiBmYWxzZSxcclxuICAgICAgZW5hYmxlVGltZXI6IHRydWUsXHJcbiAgICAgIGFsYXJtU3RhcnQ6IGZhbHNlLFxyXG4gICAgICBhdWRpbzogKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgQXVkaW8oJy4vYWxhcm0ubXAzJylcclxuICAgICAgfSxcclxuICAgICAgYXVkaW8xOiAnJyxcclxuICAgICAgZ2V0SG91ckFycjogKCkgPT4ge1xyXG4gICAgICAgIGxldCBhcnIgPSBbXTtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgMTAwOyBpKyspe1xyXG4gICAgICAgICAgYXJyLnB1c2goaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhcnJcclxuICAgICAgfSxcclxuICAgICAgZ2V0TWluU2VjQXJyOiAoKSA9PiB7XHJcbiAgICAgICAgbGV0IGFyciA9IFtdO1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCA2MDsgaSsrKXtcclxuICAgICAgICAgIGFyci5wdXNoKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYXJyXHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuaGFuZGxlQ2xpY2sgPSB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmhhbmRsZVN0YXJ0Q2xpY2sgPSB0aGlzLmhhbmRsZVN0YXJ0Q2xpY2suYmluZCh0aGlzKTtcclxuICAgIHRoaXMuY291bnREb3duID0gdGhpcy5jb3VudERvd24uYmluZCh0aGlzKTtcclxuICAgIHRoaXMuaGFuZGxlU2V0VGltZUNsaWNrID0gdGhpcy5oYW5kbGVTZXRUaW1lQ2xpY2suYmluZCh0aGlzKTtcclxuICAgIHRoaXMud2luZG93Q2xpY2sgPSB0aGlzLndpbmRvd0NsaWNrLmJpbmQodGhpcyk7XHJcbiAgICB9O1xyXG5cclxuICAvKlJlLXJlbmRlcnMgY3VycmVudCB0aW1lIGFuZCBjb3VudGRvd24gdmFsdWVzICovXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB0aGlzLmxvY2FsVGltZSA9IHNldEludGVydmFsKCgpID0+IHt0aGlzLnNldFN0YXRlKHsgdGltZTogbmV3IERhdGUoKS50b0xvY2FsZVRpbWVTdHJpbmcoKX0pfSwgMTAwMCk7XHJcbiAgICB0aGlzLnRpbWVyVGltZSA9IHNldEludGVydmFsKHRoaXMuY291bnREb3duLCAxMDAwKTtcclxuICB9XHJcblxyXG4gIC8qQ2xlYXIgdGhlIGludGVydmFscyB0byBwcmV2ZW50IG1lbW9yeSBsZWFrcyovXHJcbiAgY29tcG9uZW50V2lsbFVubW91bnQoKXtcclxuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5sb2NhbFRpbWUpXHJcbiAgICBjbGVhckludGVydmFsKHRoaXMudGltZXJUaW1lKVxyXG4gIH1cclxuXHJcbiAgLypTZXRzIGN1cnJlbnQgdGltZSB0byBiZSByZWZyZXNoZWQgaW4gY29tcG9uZW50ZGlkTW91bnQqL1xyXG4gIHRvZGF5RGF0ZSgpe1xyXG4gICAgbGV0IHRvZGF5ID0gbmV3IERhdGUoKTtcclxuICAgIGxldCBkZCA9IFN0cmluZyh0b2RheS5nZXREYXRlKCkpLnBhZFN0YXJ0KDIsJzAnKTtcclxuICAgIGxldCBtbSA9IFN0cmluZyh0b2RheS5nZXRNb250aCgpKS5wYWRTdGFydCgyLCcwJyk7XHJcbiAgICBsZXQgeXl5eSA9IHRvZGF5LmdldEZ1bGxZZWFyKCk7XHJcbiAgICByZXR1cm4gIG1tICsgJy8nICsgZGQgKyAnLycgKyB5eXl5O1xyXG4gIH07XHJcblxyXG4gIC8qQ29ycmVzcG9uZHMgZGlhbCB2YWx1ZSB0byBob3VycywgbWlucyBhbmQgc2VjcyBzdGF0ZSB2YWx1ZXMqL1xyXG4gIGhhbmRsZUNsaWNrKGUpe1xyXG4gICAgbGV0IHRhcmdldCA9IGUudGFyZ2V0O1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7W3RhcmdldC5uYW1lXSA6IHRhcmdldC52YWx1ZS50b1N0cmluZygpLnBhZFN0YXJ0KDIsMCl9KVxyXG4gIH1cclxuXHJcbiAgLypTdGFydCBhbmQgc3RvcCBidXR0b24gZm9yIHRpbWVyKi9cclxuICBoYW5kbGVTdGFydENsaWNrKCl7XHJcbiAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXJ0LWJ1dHRvbicpO1xyXG4gICAgbGV0IGhvdXJzID0gdGhpcy5zdGF0ZS5ob3VycztcclxuICAgIGxldCBtaW5zID0gdGhpcy5zdGF0ZS5taW5zO1xyXG4gICAgbGV0IHNlY3MgPSB0aGlzLnN0YXRlLnNlY3M7XHJcblxyXG4gICAgaWYodGhpcy5zdGF0ZS50aW1lclN0YXJ0ID09PSBmYWxzZSl7XHJcbiAgICAgIGlmICh0aGlzLnN0YXRlLmVuYWJsZVRpbWVyID09PSBmYWxzZSl7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVTZXRUaW1lQ2xpY2soKVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe3RpbWVyU3RhcnQgOiB0cnVlfSk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2FsYXJtU3RhcnQgOiB0cnVlfSk7XHJcbiAgICAgIGlmIChob3VycyA9PSAwICYmIG1pbnM9PSAwICYmIHNlY3MgPT0gMCl7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YWxhcm1TdGFydCA6IGZhbHNlfSk7XHJcbiAgICAgIH1cclxuICAgICAgYnV0dG9uLnN0eWxlLmJhY2tncm91bmQgPSAnI0E0MjQyRic7XHJcbiAgICAgIGJ1dHRvbi5pbm5lckhUTUwgPSAnU3RvcCc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHt0aW1lclN0YXJ0IDogZmFsc2V9KVxyXG4gICAgICBidXR0b24uc3R5bGUuYmFja2dyb3VuZCA9ICcjMDBBNjc2JztcclxuICAgICAgYnV0dG9uLmlubmVySFRNTCA9ICdTdGFydCc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKkNoYW5nZXMgdGhlIHN0YXRlIHZhbHVlcyBmb3IgaG91cnMsIG1pbnMgYW5kIHNlY3MqL1xyXG4gIGNvdW50RG93biAoKXtcclxuICAgIGxldCBob3VycyA9IHRoaXMuc3RhdGUuaG91cnM7XHJcbiAgICBsZXQgbWlucyA9IHRoaXMuc3RhdGUubWlucztcclxuICAgIGxldCBzZWNzID0gdGhpcy5zdGF0ZS5zZWNzO1xyXG4gICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydC1idXR0b24nKTtcclxuICAgIFxyXG5cclxuICAgIGlmICh0aGlzLnN0YXRlLnRpbWVyU3RhcnQgPT0gdHJ1ZSAmJiB0aGlzLnN0YXRlLmVuYWJsZVRpbWVyID09PSB0cnVlKXtcclxuICAgICAgaWYgKHNlY3MgIT0gMCl7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2VjczogKCt0aGlzLnN0YXRlLnNlY3MgLSAxKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsMCl9KVxyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKG1pbnMgIT0gMCl7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bWluczogKCt0aGlzLnN0YXRlLm1pbnMgLSAxKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsMCl9KVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3NlY3M6ICc1OSd9KVxyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKGhvdXJzICE9IDAgKXtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtob3VyczogKCt0aGlzLnN0YXRlLmhvdXJzIC0gMSkudG9TdHJpbmcoKS5wYWRTdGFydCgyLDApfSlcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHttaW5zOiAnNTknfSlcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtzZWNzOiAnNTknfSlcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmKHRoaXMuc3RhdGUuYWxhcm1TdGFydCA9PSB0cnVlKXtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHthdWRpbzEgOiBuZXcgQXVkaW8oJy4vYWxhcm0ubXAzJyl9KTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHt0aW1lclN0YXJ0IDogZmFsc2V9KTtcclxuICAgICAgICB0aGlzLnN0YXRlLmF1ZGlvMS5wbGF5KCk7XHJcbiAgICAgICAgd2luZG93Lm5hdmlnYXRvci52aWJyYXRlKDIwMDApO1xyXG4gICAgICAgIGJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kID0gJyMwMEE2NzYnO1xyXG4gICAgICAgIGJ1dHRvbi5pbm5lckhUTUwgPSAnU3RhcnQnO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kID0gJyMwMEE2NzYnO1xyXG4gICAgICAgIGJ1dHRvbi5pbm5lckhUTUwgPSAnU3RhcnQnO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3RpbWVyU3RhcnQgOiBmYWxzZX0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKkV4cGFuZHMgdGhlIGRpc3BsYXkgYm94IHVwd2FyZHMgdG8gc2hvdyB0aGUgZGlhbCBvcHRpb25zKi9cclxuICBoYW5kbGVTZXRUaW1lQ2xpY2soKXtcclxuICAgICAgbGV0IGhvdXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlhbC1ob3VyJyk7XHJcbiAgICAgIGxldCBtaW5zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RpYWwtbWluJyk7XHJcbiAgICAgIGxldCBzZWNzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RpYWwtc2VjJyk7XHJcbiAgICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnQtYnV0dG9uJyk7XHJcbiAgICAgIGxldCBoZWlnaHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlzcGxheScpLm9mZnNldEhlaWdodDtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7dGltZXJTdGFydDogZmFsc2V9KVxyXG5cclxuICAgIGlmICh0aGlzLnN0YXRlLmVuYWJsZVRpbWVyID09PSB0cnVlKXtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7ZW5hYmxlVGltZXI6IGZhbHNlfSlcclxuICAgICAgaG91ci5zdHlsZS5oZWlnaHQgPSAoaGVpZ2h0KjAuMikudG9TdHJpbmcoKSsncHgnO1xyXG4gICAgICBtaW5zLnN0eWxlLmhlaWdodCA9IChoZWlnaHQqMC4yKS50b1N0cmluZygpKydweCc7XHJcbiAgICAgIHNlY3Muc3R5bGUuaGVpZ2h0ID0gKGhlaWdodCowLjIpLnRvU3RyaW5nKCkrJ3B4JztcclxuICAgICAgYnV0dG9uLnN0eWxlLmJhY2tncm91bmQgPSAnIzAwQTY3Nic7XHJcbiAgICAgIGJ1dHRvbi5pbm5lckhUTUwgPSAnU3RhcnQnO1xyXG4gICAgfSBlbHNle1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtlbmFibGVUaW1lcjogdHJ1ZX0pXHJcbiAgICAgIGhvdXIuc3R5bGUuaGVpZ2h0ID0gJzAnO1xyXG4gICAgICBtaW5zLnN0eWxlLmhlaWdodCA9ICcwJztcclxuICAgICAgc2Vjcy5zdHlsZS5oZWlnaHQgPSAnMCc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKlNpbGVuY2UgYWxhcm0gYW5kIHZpYnJhdGlvbiBmcm9tIHRpbWVyIHJlYWNoaW5nIHplcm8qL1xyXG4gIHdpbmRvd0NsaWNrKCl7XHJcbiAgICBpZiAodGhpcy5zdGF0ZS5hdWRpbzEgIT0gJycgJiYgdGhpcy5zdGF0ZS5hbGFybVN0YXJ0ID09IHRydWUpe1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHthbGFybVN0YXJ0IDogZmFsc2V9KTtcclxuICAgICAgdGhpcy5zdGF0ZS5hdWRpbzEucGF1c2UoKTtcclxuICAgICAgd2luZG93Lm5hdmlnYXRvci52aWJyYXRlKDApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoyIGZ1bmN0aW9ucyBiZWxvdyBhZGQgYWVzdGV0aWNzIHdoZW4gY2hvb3NpbmcgZGlhbCovXHJcbiAgaG92ZXJDb2xvcihlKXtcclxuICAgIGUudGFyZ2V0LnN0eWxlLmJhY2tncm91bmQgPSAnIzM3MzMzNyc7XHJcbiAgICBlLnRhcmdldC5zdHlsZS5jb2xvciA9ICd3aGl0ZSc7XHJcbiAgfVxyXG5cclxuICBob3Zlck91dENvbG9yKGUpe1xyXG4gICAgZS50YXJnZXQuc3R5bGUuYmFja2dyb3VuZCA9ICcjRDhCMzlDJztcclxuICAgIGUudGFyZ2V0LnN0eWxlLmNvbG9yID0gJyMzNzMzMzcnO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCl7XHJcbiAgICBjb25zdCB0aW1lQnV0dG9uID0ge1xyXG4gICAgICBmb250U2l6ZTogJzIwcHgnLFxyXG4gICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICBiYWNrZ3JvdW5kOiAnI0Q4QjM5QycsXHJcbiAgICAgIG91dGxpbmU6ICdub25lJyxcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgZ2V0TnVtSG91cnMgPSB0aGlzLnN0YXRlLmdldEhvdXJBcnIoKS5tYXAoKHZhbHVlLCBpKSA9PiA8YnV0dG9uIG5hbWUgPSAnaG91cnMnIGtleSA9IHtpICsgJ2hvdXJzJ30gc3R5bGUgPSB7dGltZUJ1dHRvbn0gb25Nb3VzZU92ZXIgPSB7dGhpcy5ob3ZlckNvbG9yfSBvbk1vdXNlT3V0ID0ge3RoaXMuaG92ZXJPdXRDb2xvcn0gdmFsdWUgPSB7dmFsdWV9IG9uQ2xpY2sgPSB7dGhpcy5oYW5kbGVDbGlja30+e3ZhbHVlLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwwKX08L2J1dHRvbj4pO1xyXG4gICAgY29uc3QgZ2V0TnVtTWluID0gdGhpcy5zdGF0ZS5nZXRNaW5TZWNBcnIoKS5tYXAoKHZhbHVlLCBpKSA9PiA8YnV0dG9uIG5hbWUgPSAnbWlucycga2V5ID0ge2kgKyAnbWlucyd9IHN0eWxlID0ge3RpbWVCdXR0b259IG9uTW91c2VPdmVyID0ge3RoaXMuaG92ZXJDb2xvcn0gb25Nb3VzZU91dCA9IHt0aGlzLmhvdmVyT3V0Q29sb3J9IHZhbHVlID0ge3ZhbHVlfSBvbkNsaWNrID0ge3RoaXMuaGFuZGxlQ2xpY2t9Pnt2YWx1ZS50b1N0cmluZygpLnBhZFN0YXJ0KDIsMCl9PC9idXR0b24+KTtcclxuICAgIGNvbnN0IGdldE51bVNlYyA9IHRoaXMuc3RhdGUuZ2V0TWluU2VjQXJyKCkubWFwKCh2YWx1ZSwgaSkgPT4gPGJ1dHRvbiBuYW1lID0gJ3NlY3MnIGtleSA9IHtpICsgJ3NlY3MnfSBzdHlsZSA9IHt0aW1lQnV0dG9ufSBvbk1vdXNlT3ZlciA9IHt0aGlzLmhvdmVyQ29sb3J9IG9uTW91c2VPdXQgPSB7dGhpcy5ob3Zlck91dENvbG9yfSB2YWx1ZSA9IHt2YWx1ZX0gb25DbGljayA9IHt0aGlzLmhhbmRsZUNsaWNrfT57dmFsdWUudG9TdHJpbmcoKS5wYWRTdGFydCgyLDApfTwvYnV0dG9uPik7XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZSA9ICdjb250YWluZXInIG9uQ2xpY2sgPSB7dGhpcy53aW5kb3dDbGlja30+XHJcbiAgICAgICAgXHJcbiAgICAgIHsvKioqTmF2IEJhcioqKi99XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lID0gJ25hdmJhcic+XHJcbiAgICAgICAgICA8aDEgaWQgPSAndGl0bGUnPlNpbXBsZSBDb3VudGRvd24gVGltZXI8L2gxPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSAnZmxleC1jb250YWluZXItY29sdW1uJz5cclxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lID0gJ2hlYWRpbmcnPlRvZGF5J3MgRGF0ZTogPHU+e3RoaXMudG9kYXlEYXRlKCl9PC91PjwvaDI+XHJcbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZSA9ICdoZWFkaW5nJz5DdXJyZW50IFRpbWU6IDx1Pnt0aGlzLnN0YXRlLnRpbWV9PC91PjwvaDI+ICBcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICB7LyoqKkNvbnRlbnQqKiovfVxyXG5cclxuICAgICAgICA8ZGl2IGlkID0gJ2Rpc3BsYXknPlxyXG4gICAgICAgICAgPGRpdiBpZCA9ICd0aW1lci13cmFwcGVyJz5cclxuICAgICAgICAgICAgPGRpdiBpZCA9ICd0aW1lcic+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSAndGltZS1wbGFjZS1ob2xkZXJzJz5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWUgPSAndGltZS1kaXNwbGF5JyBvbkNsaWNrID0ge3RoaXMuaGFuZGxlU2V0VGltZUNsaWNrfT57dGhpcy5zdGF0ZS5ob3Vyc306PC9oMT5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQgPSAnZGlhbC1ob3VyJyBjbGFzc05hbWUgPSAnZGlhbC13cmFwcGVyMSc+XHJcbiAgICAgICAgICAgICAgICAgICAge2dldE51bUhvdXJzfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lID0gJ2Rlc2NyaXB0aW9uJyBvbkNsaWNrID0ge3RoaXMuaGFuZGxlU2V0VGltZUNsaWNrfT5Ib3VyczwvaDE+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSAndGltZS1wbGFjZS1ob2xkZXJzJz5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWUgPSAndGltZS1kaXNwbGF5JyBvbkNsaWNrID0ge3RoaXMuaGFuZGxlU2V0VGltZUNsaWNrfT57dGhpcy5zdGF0ZS5taW5zfTo8L2gxPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZCA9ICdkaWFsLW1pbicgY2xhc3NOYW1lID0gJ2RpYWwtd3JhcHBlcjEnPlxyXG4gICAgICAgICAgICAgICAgICAgIHtnZXROdW1NaW59XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWUgPSAnZGVzY3JpcHRpb24nIG9uQ2xpY2sgPSB7dGhpcy5oYW5kbGVTZXRUaW1lQ2xpY2t9Pk1pbnM8L2gxPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gJ3RpbWUtcGxhY2UtaG9sZGVycyc+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lID0gJ3RpbWUtZGlzcGxheScgb25DbGljayA9IHt0aGlzLmhhbmRsZVNldFRpbWVDbGlja30+e3RoaXMuc3RhdGUuc2Vjc308L2gxPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZCA9ICdkaWFsLXNlYycgY2xhc3NOYW1lID0gJ2RpYWwtd3JhcHBlcjEnPlxyXG4gICAgICAgICAgICAgICAgICAgIHtnZXROdW1TZWN9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWUgPSAnZGVzY3JpcHRpb24nIG9uQ2xpY2sgPSB7dGhpcy5oYW5kbGVTZXRUaW1lQ2xpY2t9PlNlY3M8L2gxPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBpZCA9ICdzdGFydC1idXR0b24nIG9uQ2xpY2sgPSB7dGhpcy5oYW5kbGVTdGFydENsaWNrfT5TdGFydDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIHsvKioqRm9vdGVyKioqL31cclxuXHJcbiAgICAgICAgICA8Zm9vdGVyPlxyXG4gICAgICAgICAgICA8cD4mY29weTsgQnJ5YW4gV29uZyB8IDIwMjA8L3A+XHJcbiAgICAgICAgICA8L2Zvb3Rlcj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG5cclxuICAgICAgICAvKklkIGFuZCBDbGFzcyBTdHlsaW5nKi9cclxuXHJcbiAgICAgICAgICAuY29udGFpbmVye1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBmbGV4OiAwIDAgYXV0bztcclxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm5hdmJhcntcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwdmg7XHJcbiAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzM3MzMzNztcclxuICAgICAgICAgICAgICBjb2xvcjogI0Q4QjM5QztcclxuICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgI0Q4QjM5QztcclxuICAgICAgICAgICAgICBmbGV4OiAwIDAgYXV0bztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICN0aXRsZXtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNTVweDtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogYXV0bztcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLmZsZXgtY29udGFpbmVyLWNvbHVtbntcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCAxMHB4IDAgMTBweDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBqaXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyJTtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogc29saWQ7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5oZWFkaW5ne1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICNkaXNwbGF5e1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudCggI0Y3RjlGOSAsICNFM0U3RDMsICM4NDk0ODMpO1xyXG4gICAgICAgICAgICAgIGZsZXg6IDEgMCBhdXRvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICN0aW1lci13cmFwcGVye1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICBtaW4td2lkdGg6IDI4JTtcclxuICAgICAgICAgICAgICBib3R0b206IDMzJTtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgYm90dG9tOiAzMyU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAgICAgICAjdGltZXJ7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMzMuMzMlO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAudGltZS1wbGFjZS1ob2xkZXJze1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC50aW1lLWRpc3BsYXl7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDkwJTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTYwcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM3MzMzNztcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjRDhCMzlDO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAuZGlhbC13cmFwcGVyMXtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAwcHg7XHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAuZGlhbC13cmFwcGVyMTo6LXdlYmtpdC1zY3JvbGxiYXJ7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5kZXNjcmlwdGlvbntcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzNzMzMzc7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI0Q4QjM5QztcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICNzdGFydC1idXR0b257XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMzJweDtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDBBNjc2O1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjRjdGOUY5O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAvKkdlbmVyaWMgRWxlbWVudCBTdHlsaW5nKi9cclxuXHJcbiAgICAgICAgICBoMTpob3ZlcntcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaDE6Zm9jdXN7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaDEsIGgyLCBwe1xyXG4gICAgICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lOyAgLyogQ2hyb21lIDQ5KyAqL1xyXG4gICAgICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lOyAgICAgLyogRmlyZWZveCA0MysgKi9cclxuICAgICAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lOyAgICAgIC8qIE5vIHN1cHBvcnQgeWV0ICovXHJcbiAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lOyAgICAgICAgICAvKiBMaWtlbHkgZnV0dXJlICovICAgXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBmb290ZXJ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMzNzMzMzc7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjRDhCMzlDO1xyXG4gICAgICAgICAgICBib3JkZXItdG9wOiAzcHggc29saWQgI0Q4QjM5QztcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGZvb3RlciBwIHtcclxuICAgICAgICAgICAgcGFkZGluZzogNXB4IDAgOHB4IDEwcHggO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnV0dG9ue1xyXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnV0dG9uOmZvY3Vze1xyXG4gICAgICAgICAgICBvdXRsaW5lOm5vbmU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgLypSZXNwb25zaXZlIFdlYiBEZXNpZ24qL1xyXG5cclxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpe1xyXG4gICAgICAgICAgI3RpdGxle1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDQycHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuaGVhZGluZ3tcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC50aW1lLWRpc3BsYXl7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTIwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuZGVzY3JpcHRpb257XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICNzdGFydC1idXR0b257XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjNweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NTBweCl7XHJcbiAgICAgICAgICAgICN0aXRsZXtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmhlYWRpbmd7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5mbGV4LWNvbnRhaW5lci1jb2x1bW57XHJcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC50aW1lLWRpc3BsYXl7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxMjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZGVzY3JpcHRpb257XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICNzdGFydC1idXR0b257XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyM3B4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvb3RlcntcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCl7XHJcbiAgICAgICAgICAgIGZvb3RlcntcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgICAgYm90dG9tOiAtMzBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubmF2YmFye1xyXG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmZsZXgtY29udGFpbmVyLWNvbHVtbntcclxuICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICBtYXJnaW46IDEwcHggMCAxMHB4IDA7XHJcbiAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NTBweCl7XHJcbiAgICAgICAgICAgIC5jb250YWluZXJ7XHJcbiAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjdGl0bGV7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5oZWFkaW5ne1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAudGltZS1kaXNwbGF5e1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogOTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZGVzY3JpcHRpb257XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICNzdGFydC1idXR0b257XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyM3B4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNzVweCl7XHJcbiAgICAgICAgICAgICN0aXRsZXtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI2Rpc3BsYXl7XHJcbiAgICAgICAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnRpbWUtZGlzcGxheXtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDYwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmRlc2NyaXB0aW9ue1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjc3RhcnQtYnV0dG9ue1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb290ZXJ7XHJcbiAgICAgICAgICAgICAgYm90dG9tOiAtMTAycHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI3RpbWVyLXdyYXBwZXJ7XHJcbiAgICAgICAgICAgICAgYm90dG9tOiAyNSU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG5cclxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICBodG1sLFxyXG4gICAgICBib2R5IHtcclxuICAgICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBTZWdvZSBVSSwgUm9ib3RvLFxyXG4gICAgICAgICAgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgRmlyYSBTYW5zLCBEcm9pZCBTYW5zLCBIZWx2ZXRpY2EgTmV1ZSxcclxuICAgICAgICAgIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICB9XHJcbiAgICAgICp7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgIFxyXG4gICAgICB9XHJcbiAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufSAiXSwic291cmNlUm9vdCI6IiJ9