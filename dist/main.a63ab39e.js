parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"epB2":[function(require,module,exports) {
!function(){var e=document.querySelector(".toggle--btn"),t=document.querySelector(".main__nav__list"),r=window.matchMedia("(max-width: 679px)");console.log(r);var o=Array.from(document.querySelectorAll(".planet--btn")),n=o[0],l=o[o.length-1];console.log(n),console.log(l),r.matches&&(document.addEventListener("keydown",function(e){("Tab"===e.key||9===e.keyCode)&&(e.shiftKey?document.activeElement===n&&(l.focus(),e.preventDefault()):document.activeElement===l&&(n.focus(),e.preventDefault()))}),n.focus()),console.log(e),e.addEventListener("click",function(){console.log("button clicked"),t.classList.toggle("modal__hide"),document.body.classList.toggle("modal__scroll")});var a=document.querySelector(".tabbed"),i=a.querySelector("ul"),c=i.querySelectorAll("a"),u=a.querySelectorAll('[id^="section"]'),d=function(e,t){t.focus(),t.removeAttribute("tabindex"),t.setAttribute("aria-selected","true"),e.removeAttribute("aria-selected"),e.setAttribute("tabindex","-1");var r=Array.prototype.indexOf.call(c,t),o=Array.prototype.indexOf.call(c,e);u[o].hidden=!0,u[r].hidden=!1};i.setAttribute("role","tablist"),Array.prototype.forEach.call(c,function(e,t){e.setAttribute("role","tab"),e.setAttribute("id","tab"+(t+1)),e.setAttribute("tabindex","-1"),e.parentNode.setAttribute("role","presentation"),e.addEventListener("click",function(e){e.preventDefault();var t=i.querySelector("[aria-selected]");e.currentTarget!==t&&d(t,e.currentTarget)}),e.addEventListener("keydown",function(e){var r=Array.prototype.indexOf.call(c,e.currentTarget),o=37===e.which?r-1:39===e.which?r+1:40===e.which?"down":null;null!==o&&(e.preventDefault(),"down"===o?u[t].focus():c[o]&&d(e.currentTarget,c[o]))})}),Array.prototype.forEach.call(u,function(e,t){e.setAttribute("role","tabpanel"),e.setAttribute("tabindex","-1");e.getAttribute("id");e.setAttribute("aria-labelledby",c[t].id),e.hidden=!0}),c[0].removeAttribute("tabindex"),c[0].setAttribute("aria-selected","true"),u[0].hidden=!1}();
},{}]},{},["epB2"], null)
//# sourceMappingURL=/main.a63ab39e.js.map