function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},i=t.parcelRequire1ebe;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},t.parcelRequire1ebe=i),i("hqokU").register(JSON.parse('{"j47uw":"index.50416698.js","gbcXk":"style.74264d4a.css","hwmB9":"background.0a8f6521.jpg","cx3w5":"artwork-suzuha.22f78bed.jpg","aroW2":"artwork-ede.bf6f015e.png","ilpGW":"cover-renaissance-s4-1024.1780a789.png","6Vjqf":"artwork-statue-chateau-s4.e8f883b3.png","gR7QX":"artwork-lecture-s4.e6252b68.png","hbQGP":"utip.b81cceee.svg"}'));var a;a=new URL(i("hqokU").resolve("gbcXk"),import.meta.url).toString();var s;s=new URL(i("hqokU").resolve("hbQGP"),import.meta.url).toString();class o extends HTMLElement{async getImage(e){return import(`url:../assets/${e}`)}constructor(){super();var t=document.createElement("div");let n=e(s);t.innerHTML=`\n      <a class="pure-button pure-button--black primary-button"\n        target="_blank"\n        rel="noopener noreferrer"\n        href="${this.getAttribute("link")}"\n      >\n        <div class="inline">\n          <img alt="${this.getAttribute("imgalt")}"\n            src="${n}"\n            width="25px" \n            height="25px"\n          />\n        </div>\n        <div class="inline vertical-center">\n          <p>${this.getAttribute("content")}</p>\n        </div>\n      </a>\n    `;var r=this.attachShadow({mode:"closed"});r.innerHTML=`\n      <link rel="stylesheet" href="https://unpkg.com/purecss@1.0.0/build/pure-min.css">\n      <link rel="stylesheet" type="text/css" href="${e(a)}">\n    `,r.appendChild(t)}}customElements.define("adr-button-icon",o);
//# sourceMappingURL=index.50416698.js.map