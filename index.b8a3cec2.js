function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},a=t.parcelRequire1ebe;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var a={id:e,exports:{}};return r[e]=a,t.call(a.exports,a,a.exports),a.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){n[e]=t},t.parcelRequire1ebe=a),a("hqokU").register(JSON.parse('{"7B1bM":"index.b8a3cec2.js","gbcXk":"style.e5948fae.css","hwmB9":"background.0a8f6521.jpg","cx3w5":"artwork-suzuha.22f78bed.jpg","aroW2":"artwork-ede.bf6f015e.png","ilpGW":"cover-renaissance-s4-1024.1780a789.png","6Vjqf":"artwork-statue-chateau-s4.e8f883b3.png","gR7QX":"artwork-lecture-s4.e6252b68.png","bd9Tp":"Suzuha-extrait.8d01e52d.pdf","dT5y6":"enfant-des-esprits-extrait.91d89b09.pdf"}'));var s;s=new URL(a("hqokU").resolve("gbcXk"),import.meta.url).toString();var o;o=new URL(a("hqokU").resolve("bd9Tp"),import.meta.url).toString();var i;i=new URL(a("hqokU").resolve("dT5y6"),import.meta.url).toString();class d extends HTMLElement{getBookUrl(t){switch(t){case"suzuha-extrait.pdf":return e(o);case"enfant-des-esprits-extrait.pdf":return e(i)}}constructor(){super();var t=document.createElement("div"),r=document.createElement("a");r.setAttribute("class","pure-button pure-button--black"),r.setAttribute("target","_blank"),r.setAttribute("download",this.getAttribute("file"));let n=this.getBookUrl(this.getAttribute("file"));r.setAttribute("href",n),r.textContent="Lire un extrait",t.appendChild(r);var a=this.attachShadow({mode:"closed"});a.innerHTML=`\n      <link rel="stylesheet" href="https://unpkg.com/purecss@1.0.0/build/pure-min.css">\n      <link rel="stylesheet" type="text/css" href="${e(s)}">\n    `,a.appendChild(t)}}customElements.define("adr-extract-button",d);
//# sourceMappingURL=index.b8a3cec2.js.map
