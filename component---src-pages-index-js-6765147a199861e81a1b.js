(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{RXBc:function(e,t,r){"use strict";r.r(t);var n=r("q1tI"),a=r.n(n),o=r("vOnD"),i=r("boz2"),l=r("ma3e"),s=r("U0YC"),c=r.n(s),u=r("I/Ru"),p=r("0YEp"),h=r("wtQ5"),m=r("xlbW"),f=function(e){var t=e.title,r=void 0===t?"about":t,n=e.text,o=void 0===n?"":n;return a.a.createElement("div",null,a.a.createElement("h1",null,r),a.a.createElement("p",{dangerouslySetInnerHTML:{__html:o}}))},d=(r("f3/d"),function(e){var t=e.className,r=e.name;e.level;return a.a.createElement("div",{className:t},a.a.createElement("label",{htmlFor:r+"-bar"},r),a.a.createElement("div",{id:r+"-bar",className:"skill__bar"},a.a.createElement("div",{className:"skill__level"})))});d.displaName="SkillBar";var v=Object(o.default)(d).withConfig({displayName:"skill-bar",componentId:"sc-1tv82hj-0"})(["width:100%;.skill__bar{width:100%;height:10px;background-color:lightgrey;padding:1px;}.skill__level{background-color:#25303B;width:","%;height:8px;}"],(function(e){return e.level||0})),g=Object(o.default)((function(e){var t=e.className,r=e.title,n=void 0===r?"Skills":r,o=e.skills,i=void 0===o?[]:o;return a.a.createElement("div",{className:t},a.a.createElement("h1",null,n),i.map((function(e){return a.a.createElement(v,{key:e.name,name:e.name,level:e.level})})))})).withConfig({displayName:"skills",componentId:"sc-11il9ac-0"})(["width:100%;"]),y=r("+J2+"),w=r("o0o1"),E=r.n(w),b=(r("ls82"),r("u0/0")),x=r.n(b),_=Object(o.default)((function(e){var t=e.className;return a.a.createElement("div",{className:t},a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null))})).withConfig({displayName:"loader",componentId:"c3nj0n-0"})(["display:inline-block;position:relative;width:64px;height:64px;margin:0 auto;div{box-sizing:border-box;display:block;position:absolute;width:51px;height:51px;margin:6px;border:6px solid #25303B;border-radius:50%;animation:lds-ring 1.2s cubic-bezier(0.5,0,0.5,1) infinite;border-color:#25303B transparent transparent transparent;}div:nth-child(1){animation-delay:-0.45s;}div:nth-child(2){animation-delay:-0.3s;}div:nth-child(3){animation-delay:-0.15s;}@keyframes lds-ring{0%{transform:rotate(0deg);}100%{transform:rotate(360deg);}}"]);var k="https://api.github.com/users/"+c.a.githubUsername+"/repos?type=owner&sort=updated&per_page=5&page=1",N=function(e){var t,r;function n(t){var r;return(r=e.call(this,t)||this).state={repos:[],status:"loading"},r}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var o=n.prototype;return o.componentDidMount=function(){var e;return E.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E.a.awrap(x()(k));case 2:(e=t.sent).json&&e.json.length&&this.setState({repos:e.json,status:"ready"});case 4:case"end":return t.stop()}}),null,this)},o.render=function(){var e=this.state.status;return a.a.createElement("div",{className:this.props.className},a.a.createElement("h2",null,"Latest repositories on Github"),"loading"===e&&a.a.createElement("div",{className:"repositories__loader"},a.a.createElement(_,null)),"ready"===e&&this.state.repos&&a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"repositories__content"},this.state.repos.map((function(e){return a.a.createElement(a.a.Fragment,{key:e.name},a.a.createElement("div",{className:"repositories__repo"},a.a.createElement("a",{className:"repositories__repo-link",href:e.html_url},a.a.createElement("strong",null,e.name)),a.a.createElement("div",null,e.description),a.a.createElement("div",{className:"repositories__repo-date"},"Updated: ",new Date(e.updated_at).toUTCString()),a.a.createElement("div",{className:"repositories__repo-star"},"★ ",e.stargazers_count)),a.a.createElement("hr",null))})))))},n}(a.a.Component),j=Object(o.default)(N).withConfig({displayName:"repositories",componentId:"sc-8n2gji-0"})(["position:relative;.repositories__content{margin-bottom:40px;}.repositories__repo{position:relative;}.repositories__repo-link{text-decoration:none;color:#25303B;}.repositories__repo-date{color:#bbb;font-size:10px;}.repositories__repo-star{position:absolute;top:0;right:0;}.repositories__loader{display:flex;}hr{margin-top:16px;}"]);var L=o.default.hr.withConfig({displayName:"pages__Separator",componentId:"g1kolw-0"})(["margin-top:24px;margin-bottom:16px;"]),O=function(e){var t,r;function n(){return e.apply(this,arguments)||this}return r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,n.prototype.render=function(){"UA-000000000-1"===c.a.googleAnalyticsId&&console.error("WARNING: Please set a proper googleAnalyticsId. See https://analytics.google.com for details.");var e=c.a.siteTitle,t=c.a.keywords;return a.a.createElement(u.a,{location:this.props.location},a.a.createElement(h.a,{title:e,keywords:t}),a.a.createElement(p.a,{heroImg:c.a.siteCover,title:e}),a.a.createElement(m.a,{className:this.props.className},a.a.createElement(i.Container,{className:"page-content",fluid:!0},a.a.createElement(i.Row,null,a.a.createElement(i.Col,{xs:4,className:"avatar"},a.a.createElement("img",{className:"avatar__image",src:c.a.authorAvatar,alt:"user avatar"}),a.a.createElement("div",{className:"social"},c.a.social.github&&a.a.createElement("a",{className:"social-link github",href:c.a.social.github},a.a.createElement(l.b,{className:"social-icon",size:"32"})),c.a.social.linkedin&&a.a.createElement("a",{className:"social-link linkedin",href:c.a.social.linkedin},a.a.createElement(l.c,{className:"social-icon",size:"32"})),c.a.social.twitter&&a.a.createElement("a",{className:"social-link twitter",href:c.a.social.twitter},a.a.createElement(l.d,{className:"social-icon",size:"32"})),c.a.social.email&&a.a.createElement("a",{className:"social-link email",href:"mailto:"+c.a.social.email},a.a.createElement(l.a,{className:"social-icon",size:"32"}))))),a.a.createElement(i.Row,null,a.a.createElement(i.Col,{xs:4,sm:4},a.a.createElement(f,{title:"About",text:c.a.authorDescription})),a.a.createElement(i.Col,{xs:4,sm:4},a.a.createElement(g,{title:"Skills",skills:c.a.skills}))),a.a.createElement(L,null),a.a.createElement(y.a,{title:"Experience",what:c.a.jobs}),a.a.createElement(L,null),a.a.createElement(j,null))))},n}(a.a.Component);t.default=Object(o.default)(O).withConfig({displayName:"pages",componentId:"g1kolw-1"})([".page-content{max-width:100%;margin-bottom:40px;}.avatar{align-items:center;margin-bottom:24px;flex-direction:column;}.avatar__image{box-shadow:3px 3px 15px 0px rgba(0,0,0,0.75);max-width:200px;border-radius:100px;margin:0 auto 24px;}.social{margin-top:12px;margin-bottom:12px;}.social-link{padding:8px;color:#555;}a.social-link.twitter:hover{color:#1da1f2;}a.social-link.github:hover{color:#24292e;}a.social-link.linkedin:hover{color:#0077B5;}a.social-link.email:hover{color:#c23a2b;}"])},ls82:function(e,t,r){r("rGqo"),r("yt8O"),r("a1Th"),r("h7Nl"),r("VRzm"),r("Btvt"),r("/SS/"),r("f3/d"),r("8+KV"),r("hHhE"),r("rE2o"),r("ioFf");var n=function(e){"use strict";var t,r=Object.prototype,n=r.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag";function s(e,t,r,n){var a=t&&t.prototype instanceof d?t:d,o=Object.create(a.prototype),i=new L(n||[]);return o._invoke=function(e,t,r){var n=u;return function(a,o){if(n===h)throw new Error("Generator is already running");if(n===m){if("throw"===a)throw o;return I()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var l=k(i,r);if(l){if(l===f)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===u)throw n=m,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var s=c(e,t,r);if("normal"===s.type){if(n=r.done?m:p,s.arg===f)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=m,r.method="throw",r.arg=s.arg)}}}(e,r,i),o}function c(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(n){return{type:"throw",arg:n}}}e.wrap=s;var u="suspendedStart",p="suspendedYield",h="executing",m="completed",f={};function d(){}function v(){}function g(){}var y={};y[o]=function(){return this};var w=Object.getPrototypeOf,E=w&&w(w(O([])));E&&E!==r&&n.call(E,o)&&(y=E);var b=g.prototype=d.prototype=Object.create(y);function x(e){["next","throw","return"].forEach((function(t){e[t]=function(e){return this._invoke(t,e)}}))}function _(e){var t;this._invoke=function(r,a){function o(){return new Promise((function(t,o){!function t(r,a,o,i){var l=c(e[r],e,a);if("throw"!==l.type){var s=l.arg,u=s.value;return u&&"object"==typeof u&&n.call(u,"__await")?Promise.resolve(u.__await).then((function(e){t("next",e,o,i)}),(function(e){t("throw",e,o,i)})):Promise.resolve(u).then((function(e){s.value=e,o(s)}),(function(e){return t("throw",e,o,i)}))}i(l.arg)}(r,a,t,o)}))}return t=t?t.then(o,o):o()}}function k(e,r){var n=e.iterator[r.method];if(n===t){if(r.delegate=null,"throw"===r.method){if(e.iterator.return&&(r.method="return",r.arg=t,k(e,r),"throw"===r.method))return f;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var a=c(n,e.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,f;var o=a.arg;return o?o.done?(r[e.resultName]=o.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,f):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,f)}function N(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function L(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(N,this),this.reset(!0)}function O(e){if(e){var r=e[o];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,i=function r(){for(;++a<e.length;)if(n.call(e,a))return r.value=e[a],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}return{next:I}}function I(){return{value:t,done:!0}}return v.prototype=b.constructor=g,g.constructor=v,g[l]=v.displayName="GeneratorFunction",e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,g):(e.__proto__=g,l in e||(e[l]="GeneratorFunction")),e.prototype=Object.create(b),e},e.awrap=function(e){return{__await:e}},x(_.prototype),_.prototype[i]=function(){return this},e.AsyncIterator=_,e.async=function(t,r,n,a){var o=new _(s(t,r,n,a));return e.isGeneratorFunction(r)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},x(b),b[l]="Generator",b[o]=function(){return this},b.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=O,L.prototype={constructor:L,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(j),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function a(n,a){return l.type="throw",l.arg=e,r.next=n,a&&(r.method="next",r.arg=t),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],l=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var s=n.call(i,"catchLoc"),c=n.call(i,"finallyLoc");if(s&&c){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),j(r),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;j(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:O(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),f}},e}(e.exports);try{regeneratorRuntime=n}catch(a){Function("r","regeneratorRuntime = r")(n)}},o0o1:function(e,t,r){e.exports=r("ls82")},"u0/0":function(e,t,r){"use strict";r("VRzm"),r("Btvt"),r("91GP"),r("HAE/"),Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};t.default=function(e,t){return fetch(e,t).then((function(e){var t={};for(var r in e)"function"!=typeof e[r]&&(t[r]=e[r]);return e.status>=200&&e.status<300?new Promise((function(r,a){return e.json().then((function(e){return r(n({},t,{json:e}))}),(function(e){return a(n({},t,{error:e}))}))})):new Promise((function(r,a){return e.json().then((function(e){return a(n({},t,{json:e}))}),(function(e){return a(n({},t,{error:e}))}))}))}))}}}]);
//# sourceMappingURL=component---src-pages-index-js-6765147a199861e81a1b.js.map