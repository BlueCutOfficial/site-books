function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},s=t.parcelRequire1ebe;null==s&&((s=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var s={id:e,exports:{}};return r[e]=s,t.call(s.exports,s,s.exports),s.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequire1ebe=s),s("hqokU").register(JSON.parse('{"ikyZY":"index.796baccb.js","gbcXk":"style.fa563be8.css","hwmB9":"background.761bc37b.jpg","cx3w5":"artwork-suzuha.583b2d51.jpg","aroW2":"artwork-ede.54057cad.png","ilpGW":"cover-renaissance-s4-1024.6b8555ec.png","6Vjqf":"artwork-statue-chateau-s4.d48a5537.png","gR7QX":"artwork-lecture-s4.7439fb69.png"}'));var i;i=new URL(s("hqokU").resolve("gbcXk"),import.meta.url).toString();class a extends HTMLElement{static get observedAttributes(){return["question-index","questions-length"]}attributeChangedCallback(){this.wrapper.innerHTML=`\n      <p>\n        ${this.getAttribute("question-index")}/${this.getAttribute("questions-length")}\n      </p>\n    `}constructor(){super(),this.wrapper=document.createElement("div"),this.wrapper.classList.add("question-number");var t=this.attachShadow({mode:"closed"});t.innerHTML=`\n      <link rel="stylesheet" href="https://unpkg.com/purecss@1.0.0/build/pure-min.css">\n      <link rel="stylesheet" type="text/css" href="${e(i)}">\n    `,t.appendChild(this.wrapper)}}customElements.define("adr-question-number",a);
//# sourceMappingURL=index.796baccb.js.map
