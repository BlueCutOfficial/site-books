function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},i=n.parcelRequire1ebe;null==i&&((i=function(e){if(e in r)return r[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},n.parcelRequire1ebe=i),i.register("hqokU",(function(t,n){var r,o;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return o}),(function(e){return o=e}));var i={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)i[t[n]]=e[t[n]]},o=function(e){var t=i[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),i("hqokU").register(JSON.parse('{"2lmrm":"index.5b0a9650.js","gbcXk":"style.74264d4a.css","hwmB9":"background.0a8f6521.jpg","cx3w5":"artwork-suzuha.22f78bed.jpg","aroW2":"artwork-ede.bf6f015e.png","ilpGW":"cover-renaissance-s4-1024.1780a789.png","6Vjqf":"artwork-statue-chateau-s4.e8f883b3.png","gR7QX":"artwork-lecture-s4.e6252b68.png"}'));var s;s=new URL(i("hqokU").resolve("gbcXk"),import.meta.url).toString();class l extends HTMLElement{constructor(){super();var e=document.createElement("div");e.classList.add("book-links"),e.innerHTML="",this.getAttribute("book-link")&&(e.innerHTML+=`\n        <adr-shop-button\n          link=${this.getAttribute("book-link")}\n          title="Commander le livre"\n        ></adr-shop-button>\n      `),this.getAttribute("ebook-link")&&(e.innerHTML+=`\n        <adr-shop-button\n          link=${this.getAttribute("ebook-link")}\n          title="Télécharger l'e-book"\n        ></adr-shop-button>\n      `),this.getAttribute("file")&&(e.innerHTML+=`\n      <adr-extract-button\n        file=${this.getAttribute("file")}\n      ></adr-extract-button>\n      `);var n=this.attachShadow({mode:"closed"});n.innerHTML=`\n      <link rel="stylesheet" href="https://unpkg.com/purecss@1.0.0/build/pure-min.css">\n      <link rel="stylesheet" type="text/css" href="${t(s)}">\n    `,n.appendChild(e)}}customElements.define("adr-book-links",l);
//# sourceMappingURL=index.5b0a9650.js.map
