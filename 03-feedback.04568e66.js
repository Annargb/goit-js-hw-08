!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",r=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,l=/^0o[0-7]+$/i,u=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),m=Object.prototype.toString,v=Math.max,g=Math.min,b=function(){return d.Date.now()};function p(e,t,n){var o,r,a,f,l,u,c=0,s=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError(i);function p(t){var n=o,i=r;return o=r=void 0,c=t,f=e.apply(i,n)}function O(e){return c=e,l=setTimeout(j,t),s?p(e):f}function h(e){var n=e-u;return void 0===u||n>=t||n<0||d&&e-c>=a}function j(){var e=b();if(h(e))return w(e);l=setTimeout(j,function(e){var n=t-(e-u);return d?g(n,a-(e-c)):n}(e))}function w(e){return l=void 0,m&&o?p(e):(o=r=void 0,f)}function T(){var e=b(),n=h(e);if(o=arguments,r=this,u=e,n){if(void 0===l)return O(u);if(d)return l=setTimeout(j,t),p(u)}return void 0===l&&(l=setTimeout(j,t)),f}return t=S(t)||0,y(n)&&(s=!!n.leading,a=(d="maxWait"in n)?v(S(n.maxWait)||0,t):a,m="trailing"in n?!!n.trailing:m),T.cancel=function(){void 0!==l&&clearTimeout(l),c=0,o=u=r=l=void 0},T.flush=function(){return void 0===l?f:w(b())},T}function y(t){var n=void 0===t?"undefined":e(o)(t);return!!t&&("object"==n||"function"==n)}function S(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(o)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==m.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var i=f.test(t);return i||l.test(t)?u(t.slice(2),i?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError(i);return y(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),p(e,t,{leading:o,maxWait:t,trailing:r})};var O=document.querySelector(".feedback-form");O.addEventListener("input",e(t)((function(){var e=O.elements.email.value,t=O.elements.message.value,n={email:e,message:t};localStorage.setItem("feedback-form-state",JSON.stringify(n))})),500),O.addEventListener("submit",(function(e){if(e.preventDefault(),O.elements.email.value.length&&O.elements.message.value.length){var t=localStorage.getItem("feedback-form-state");O.reset(),console.log(JSON.parse(t))}else alert("All fields must be filled!");localStorage.removeItem("feedback-form-state")})),window.addEventListener("load",(function(){if(localStorage.getItem("feedback-form-state")){var e,t;O.elements.email.value=null!==(e=JSON.parse(localStorage.getItem("feedback-form-state")).email)&&void 0!==e?e:"",O.elements.message.value=null!==(t=JSON.parse(localStorage.getItem("feedback-form-state")).message)&&void 0!==t?t:""}}))}();
//# sourceMappingURL=03-feedback.04568e66.js.map
