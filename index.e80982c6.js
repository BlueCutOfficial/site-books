!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},i=t.parcelRequire1ebe;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in r){let t=r[e];delete r[e];let i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}).register=function(e,t){r[e]=t},t.parcelRequire1ebe=i),i("04PCq").register(JSON.parse('{"cXmmO":"index.e80982c6.js","llCf6":"style.45ee1b85.css"}'));var s,l=i("btrQP");s=i("gO7AC").getBundleURL()+i("hliH2")("cXmmO","llCf6");var o=function(t){"use strict";function n(){var t;l.classCallCheck(this,n),(t=l.possibleConstructorReturn(this,l.getPrototypeOf(n).call(this))).wrapper=document.createElement("div"),t.wrapper.classList.add("question-number");var r=t.attachShadow({mode:"closed"});return r.innerHTML='\n      <link rel="stylesheet" href="https://unpkg.com/purecss@1.0.0/build/pure-min.css">\n      <link rel="stylesheet" type="text/css" href="'.concat(e(s),'">\n    '),r.appendChild(t.wrapper),t}return l.inherits(n,t),l.createClass(n,[{key:"attributeChangedCallback",value:function(){this.wrapper.innerHTML="\n      <p>\n        ".concat(this.getAttribute("question-index"),"/").concat(this.getAttribute("questions-length"),"\n      </p>\n    ")}}],[{key:"observedAttributes",get:function(){return["question-index","questions-length"]}}]),n}(l.wrapNativeSuper(HTMLElement));customElements.define("adr-question-number",o)}();
//# sourceMappingURL=index.e80982c6.js.map