!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},i=t.parcelRequire1ebe;null==i&&((i=function(e){if(e in r)return r[e].exports;if(e in n){let t=n[e];delete n[e];let i={id:e,exports:{}};return r[e]=i,t.call(i.exports,i,i.exports),i.exports}var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}).register=function(e,t){n[e]=t},t.parcelRequire1ebe=i),i("04PCq").register(JSON.parse('{"5qAh4":"index.c8d5feb7.js","llCf6":"style.45ee1b85.css","awJyC":"Suzuha-extrait.8d01e52d.pdf","fyi15":"enfant-des-esprits-extrait.91d89b09.pdf"}'));var a,l=i("btrQP");a=i("gO7AC").getBundleURL()+i("hliH2")("5qAh4","llCf6");var s;s=i("gO7AC").getBundleURL()+i("hliH2")("5qAh4","awJyC");var u;u=i("gO7AC").getBundleURL()+i("hliH2")("5qAh4","fyi15");var o=function(t){"use strict";function r(){var t;l.classCallCheck(this,r),t=l.possibleConstructorReturn(this,l.getPrototypeOf(r).call(this));var n=document.createElement("div"),i=document.createElement("a");i.setAttribute("class","pure-button pure-button--black"),i.setAttribute("target","_blank"),i.setAttribute("download",t.getAttribute("file"));var s=t.getBookUrl(t.getAttribute("file"));i.setAttribute("href",s),i.textContent="Lire un extrait",n.appendChild(i);var u=t.attachShadow({mode:"closed"});return u.innerHTML='\n      <link rel="stylesheet" href="https://unpkg.com/purecss@1.0.0/build/pure-min.css">\n      <link rel="stylesheet" type="text/css" href="'.concat(e(a),'">\n    '),u.appendChild(n),t}return l.inherits(r,t),l.createClass(r,[{key:"getBookUrl",value:function(t){switch(t){case"suzuha-extrait.pdf":return e(s);case"enfant-des-esprits-extrait.pdf":return e(u)}}}]),r}(l.wrapNativeSuper(HTMLElement));customElements.define("adr-extract-button",o)}();
//# sourceMappingURL=index.c8d5feb7.js.map