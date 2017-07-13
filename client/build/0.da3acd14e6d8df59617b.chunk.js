webpackJsonp([0],{"./app/components/Explanation/Box.js":function(e,n,t){"use strict";function o(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function a(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function r(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}function i(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var s=t("./node_modules/react/react.js"),l=t.n(s),p=t("./node_modules/styled-components/dist/styled-components.es.js"),c=t("./node_modules/react-intl/lib/index.es.js"),u=(t("./app/components/Explanation/messages.js"),t("./app/components/Img/index.js")),d=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(n,t,o,a){var r=n&&n.defaultProps,i=arguments.length-3;if(t||0===i||(t={}),t&&r)for(var s in r)void 0===t[s]&&(t[s]=r[s]);else t||(t=r||{});if(1===i)t.children=a;else if(i>1){for(var l=Array(i),p=0;p<i;p++)l[p]=arguments[p+3];t.children=l}return{$$typeof:e,type:n,key:void 0===o?null:""+o,ref:null,props:t,_owner:null}}}(),m=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}(),f=i(["\n  margin: 0 auto;\n  background-color: #ffffff;\n  text-align: center;\n  font-size: 1.9rem;\n  .title {\n    color: ","\n  }\n  .message {\n    color: ","\n    padding: 0 0.3rem;\n  }\n\n  @media all and (max-width: 2000px) { /* screen size until 1200px */\n    img {\n      height: 20rem;\n    }\n  }\n  @media all and (max-width: 1000px) { /* screen size until 1000px */\n    img {\n      height: 15rem;\n    }\n  }\n  @media all and (max-width: 450px) { /* screen size until 500px */\n    img {\n      height: 11rem;\n    }\n    .message {\n      font-size: 1.5rem;\n    }\n  }\n"],["\n  margin: 0 auto;\n  background-color: #ffffff;\n  text-align: center;\n  font-size: 1.9rem;\n  .title {\n    color: ","\n  }\n  .message {\n    color: ","\n    padding: 0 0.3rem;\n  }\n\n  @media all and (max-width: 2000px) { /* screen size until 1200px */\n    img {\n      height: 20rem;\n    }\n  }\n  @media all and (max-width: 1000px) { /* screen size until 1000px */\n    img {\n      height: 15rem;\n    }\n  }\n  @media all and (max-width: 450px) { /* screen size until 500px */\n    img {\n      height: 11rem;\n    }\n    .message {\n      font-size: 1.5rem;\n    }\n  }\n"]),g=p.a.div(f,function(e){return e.theme.main_red},function(e){return e.theme.main_blue}),h=function(e){function n(e){o(this,n);var r=a(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return r.messages=t.i(c.d)({title:{id:e.component.id+"_title",defaultMessage:e.component.title},text:{id:e.component.id+"_text",defaultMessage:e.component.text}}),r}return r(n,e),m(n,[{key:"render",value:function(){return d(g,{className:"col-sm-12 col-md-4"},void 0,d(u.a,{src:this.props.component.img,alt:""}),d("p",{className:"title"},void 0,d("strong",{},void 0,l.a.createElement(c.c,this.messages.title))),d("p",{className:"message"},void 0,l.a.createElement(c.c,this.messages.text)))}}]),n}(l.a.Component);n.a=h},"./app/components/Explanation/components.js":function(e,n,t){"use strict";var o=t("./app/components/Explanation/envelope.jpg"),a=t.n(o),r=t("./app/components/Explanation/map.jpg"),i=t.n(r),s=t("./app/components/Explanation/stamp.jpg"),l=t.n(s),p=[{id:"choose",title:"Choose your postcard",text:"Select an issue that matters to you.",img:a.a},{id:"find",title:"Find your representative",text:"Choose from your representatives.",img:i.a},{id:"send",title:"Send the message",text:"Skip the post office. We send the postcard for you!",img:l.a}];n.a=p},"./app/components/Explanation/envelope.jpg":function(e,n,t){e.exports=t.p+"4ef49fc87ac88682cccb27679215bfd8.jpg"},"./app/components/Explanation/index.js":function(e,n,t){"use strict";function o(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function a(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function r(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}var i=t("./node_modules/react/react.js"),s=t.n(i),l=(t("./node_modules/react-intl/lib/index.es.js"),t("./app/components/Explanation/messages.js"),t("./app/components/Explanation/components.js")),p=t("./app/components/Explanation/Box.js"),c=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(n,t,o,a){var r=n&&n.defaultProps,i=arguments.length-3;if(t||0===i||(t={}),t&&r)for(var s in r)void 0===t[s]&&(t[s]=r[s]);else t||(t=r||{});if(1===i)t.children=a;else if(i>1){for(var l=Array(i),p=0;p<i;p++)l[p]=arguments[p+3];t.children=l}return{$$typeof:e,type:n,key:void 0===o?null:""+o,ref:null,props:t,_owner:null}}}(),u=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}(),d=function(e){function n(){return o(this,n),a(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return r(n,e),u(n,[{key:"render",value:function(){return c("div",{className:"row bottom-row"},void 0,l.a.map(function(e){return c(p.a,{component:e},e.id)}))}}]),n}(s.a.Component);n.a=d},"./app/components/Explanation/map.jpg":function(e,n,t){e.exports=t.p+"b92c2751ad51facb5b12e3241acb89f0.jpg"},"./app/components/Explanation/messages.js":function(e,n,t){"use strict";var o=t("./node_modules/react-intl/lib/index.es.js"),a={};t("./app/components/Explanation/components.js").a.forEach(function(e){a[e.id+"_message"]={id:"app.components.Explanation."+e.id,defaultMessage:""+e.text}});t.i(o.d)({header:{id:"app.components.Explanation.header",defaultMessage:"This is the Explanation component !"}})},"./app/components/Explanation/stamp.jpg":function(e,n,t){e.exports=t.p+"d87c6e9fe291774afe54d657ada645c3.jpg"},"./app/components/Logo/index.js":function(e,n,t){"use strict";function o(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function a(e){return c("div",{},void 0,c(d,{large:e.large},void 0,e.large&&m))}var r=t("./node_modules/react/react.js"),i=(t.n(r),t("./app/components/Img/index.js"),t("./app/components/Logo/logo.jpg")),s=t.n(i),l=t("./node_modules/styled-components/dist/styled-components.es.js"),p=t("./app/components/LogoText/index.js"),c=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(n,t,o,a){var r=n&&n.defaultProps,i=arguments.length-3;if(t||0===i||(t={}),t&&r)for(var s in r)void 0===t[s]&&(t[s]=r[s]);else t||(t=r||{});if(1===i)t.children=a;else if(i>1){for(var l=Array(i),p=0;p<i;p++)l[p]=arguments[p+3];t.children=l}return{$$typeof:e,type:n,key:void 0===o?null:""+o,ref:null,props:t,_owner:null}}}(),u=o(["\n  background-image: url(",");\n  background-size: contain;\n  background-repeat: no-repeat;\n  width: ","%\n  padding-top: 25%;\n  padding-bottom: 0%;\n  margin: auto;\n  display: block;\n  background-color: #ffffff;\n"],["\n  background-image: url(",");\n  background-size: contain;\n  background-repeat: no-repeat;\n  width: ","%\n  padding-top: 25%;\n  padding-bottom: 0%;\n  margin: auto;\n  display: block;\n  background-color: #ffffff;\n"]),d=l.a.div(u,s.a,function(e){return e.large?85:65}),m=c(p.a,{});n.a=a},"./app/components/Logo/logo.jpg":function(e,n,t){e.exports=t.p+"eec9296d82758b6452f4ef35faf5355f.jpg"},"./app/components/LogoText/index.js":function(e,n,t){"use strict";function o(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function a(){return c(d,{className:"row"},void 0,c("div",{className:"col-sm-12"},void 0,c("strong",{},void 0,c("em",{},void 0,i.a.createElement(l.c,p.a.logoText)))))}var r=t("./node_modules/react/react.js"),i=t.n(r),s=t("./node_modules/styled-components/dist/styled-components.es.js"),l=t("./node_modules/react-intl/lib/index.es.js"),p=t("./app/components/LogoText/messages.js"),c=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(n,t,o,a){var r=n&&n.defaultProps,i=arguments.length-3;if(t||0===i||(t={}),t&&r)for(var s in r)void 0===t[s]&&(t[s]=r[s]);else t||(t=r||{});if(1===i)t.children=a;else if(i>1){for(var l=Array(i),p=0;p<i;p++)l[p]=arguments[p+3];t.children=l}return{$$typeof:e,type:n,key:void 0===o?null:""+o,ref:null,props:t,_owner:null}}}(),u=o(["\n  background-color: #ffffff;\n  color: ",";\n  text-align: center;\n  padding: 0 18px;\n  display: block;\n\n  @media all and (max-width: 2000px) { /* screen size until 1200px */\n    font-size: 3.3rem; /* 1.5x default size */\n  }\n  @media all and (max-width: 1000px) { /* screen size until 1000px */\n    font-size: 2.0em; /* 1.2x default size */\n  }\n  @media all and (max-width: 750px) { /* screen size until 500px */\n    font-size: 1.5rem; /* 0.8x default size */\n  }\n"],["\n  background-color: #ffffff;\n  color: ",";\n  text-align: center;\n  padding: 0 18px;\n  display: block;\n\n  @media all and (max-width: 2000px) { /* screen size until 1200px */\n    font-size: 3.3rem; /* 1.5x default size */\n  }\n  @media all and (max-width: 1000px) { /* screen size until 1000px */\n    font-size: 2.0em; /* 1.2x default size */\n  }\n  @media all and (max-width: 750px) { /* screen size until 500px */\n    font-size: 1.5rem; /* 0.8x default size */\n  }\n"]),d=s.a.div(u,function(e){return e.theme.main_blue});n.a=a},"./app/components/LogoText/messages.js":function(e,n,t){"use strict";var o=t("./node_modules/react-intl/lib/index.es.js");n.a=t.i(o.d)({header:{id:"app.components.LogoText.header",defaultMessage:"This is the LogoText component !",logoText:"Postcards for Change is the easiest wat to send a postcard to your political representatives and get your voice heard."},logoText:{id:"boilerplate.containers.LogoText.logoText",defaultMessage:"Postcards for Change is the easiest way to send a postcard to your political representatives and get your voice heard."}})},"./app/components/SignupForm/Text.js":function(e,n,t){"use strict";function o(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var a=t("./node_modules/styled-components/dist/styled-components.es.js"),r=o(["\n  margin: auto;\n  padding: auto;\n  width: 50%;\n  color: #ffffff;\n  padding: 5%;\n  text-align: center;\n  font-size: 2rem;\n  @media all and (max-width: 1000px) {\n    padding: 2%;\n    margin: -2rem auto 0rem auto;\n    width: 100%;\n    font-size: 2rem;\n  }\n  @media all and (max-width: 600px) {\n    padding: 2%;\n    margin: -2rem auto 0rem auto;\n    width: 100%;\n    font-size: 1.7rem;\n  }\n  @media all and (max-width: 500px) {\n    font-size: 1.4rem;\n  }\n"],["\n  margin: auto;\n  padding: auto;\n  width: 50%;\n  color: #ffffff;\n  padding: 5%;\n  text-align: center;\n  font-size: 2rem;\n  @media all and (max-width: 1000px) {\n    padding: 2%;\n    margin: -2rem auto 0rem auto;\n    width: 100%;\n    font-size: 2rem;\n  }\n  @media all and (max-width: 600px) {\n    padding: 2%;\n    margin: -2rem auto 0rem auto;\n    width: 100%;\n    font-size: 1.7rem;\n  }\n  @media all and (max-width: 500px) {\n    font-size: 1.4rem;\n  }\n"]),i=a.a.div(r);n.a=i},"./app/components/SignupForm/index.js":function(e,n,t){"use strict";function o(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function a(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function r(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}function i(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var s=t("./node_modules/react/react.js"),l=t.n(s),p=t("./node_modules/styled-components/dist/styled-components.es.js"),c=t("./app/components/SignupForm/Text.js"),u=t("./app/components/SignupForm/input.js"),d=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(n,t,o,a){var r=n&&n.defaultProps,i=arguments.length-3;if(t||0===i||(t={}),t&&r)for(var s in r)void 0===t[s]&&(t[s]=r[s]);else t||(t=r||{});if(1===i)t.children=a;else if(i>1){for(var l=Array(i),p=0;p<i;p++)l[p]=arguments[p+3];t.children=l}return{$$typeof:e,type:n,key:void 0===o?null:""+o,ref:null,props:t,_owner:null}}}(),m=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}(),f=i(["\n  background-color: ",";\n  display: block;\n  height: 100%;\n  padding: auto;\n  text-align: center;\n  margin: auto;\n  form {\n    margin: auto;\n    width: 100%;\n    padding: 10%;\n    text-align: center;\n  }\n  \n  @media all and (max-width: 1000px) { /* screen size until 500px */\n    form {\n      padding: 2%;\n    }\n  }\n"],["\n  background-color: ",";\n  display: block;\n  height: 100%;\n  padding: auto;\n  text-align: center;\n  margin: auto;\n  form {\n    margin: auto;\n    width: 100%;\n    padding: 10%;\n    text-align: center;\n  }\n  \n  @media all and (max-width: 1000px) { /* screen size until 500px */\n    form {\n      padding: 2%;\n    }\n  }\n"]),g=i(["\n  background-color: ",";\n  margin: 1rem 1rem;\n  width: 15rem;\n  height: 33%;\n  :focus {\n    outline: 0 !important;\n  }\n  \n  @media all and (max-width: 450px) { /* screen size until 500px */\n    width: 10rem;\n  }\n  \n"],["\n  background-color: ",";\n  margin: 1rem 1rem;\n  width: 15rem;\n  height: 33%;\n  :focus {\n    outline: 0 !important;\n  }\n  \n  @media all and (max-width: 450px) { /* screen size until 500px */\n    width: 10rem;\n  }\n  \n"]),h=p.a.div(f,function(e){return e.theme.main_blue}),x=p.a.button(g,function(e){return e.theme.main_turqouise}),b=d(x,{class:"btn btn-info form-control"},void 0,d("input",{type:"submit"})),y=function(e){function n(){return o(this,n),a(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return r(n,e),m(n,[{key:"render",value:function(){return d(h,{className:"row"},void 0,d("div",{className:"col-sm-12 col-md-6"},void 0,d("form",{onSubmit:this.props.onSubmitForm},void 0,d("label",{htmlFor:"email"},void 0,d(u.a,{id:"email",type:"text",placeholder:"your_email@example.com",value:this.props.email,onChange:this.props.onChange})),b)),d(c.a,{className:"col-sm-12 col-md-6"},void 0,this.props.emailText))}}]),n}(l.a.Component);n.a=y},"./app/components/SignupForm/input.js":function(e,n,t){"use strict";function o(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var a=t("./node_modules/styled-components/dist/styled-components.es.js"),r=o(["\n  border: 3px solid ",";\n  background-color: #ffffff;\n  margin: auto;\n  padding: auto;\n  width: 30rem;\n  @media all and (max-width: 1000px) { /* screen size until 500px */\n    width: 20rem;\n  }\n\n  @media all and (max-width: 750px) { /* screen size until 500px */\n    width: 15rem;\n  }\n"],["\n  border: 3px solid ",";\n  background-color: #ffffff;\n  margin: auto;\n  padding: auto;\n  width: 30rem;\n  @media all and (max-width: 1000px) { /* screen size until 500px */\n    width: 20rem;\n  }\n\n  @media all and (max-width: 750px) { /* screen size until 500px */\n    width: 15rem;\n  }\n"]),i=a.a.input(r,function(e){return e.theme.main_turqouise});n.a=i},"./app/components/Social/components.js":function(e,n,t){"use strict";var o=t("./app/components/Social/twitter.jpg"),a=t.n(o),r=t("./app/components/Social/facebook.jpg"),i=t.n(r),s=t("./app/components/Social/instagram.jpg"),l=t.n(s),p={twitter:{img:a.a,url:"https://twitter.com/PstCards4Change"},facebook:{img:i.a,url:"https://www.facebook.com/Postcards4Change/"},instagram:{img:l.a,url:"https://www.instagram.com/postcardsforchange/"}};n.a=p},"./app/components/Social/facebook.jpg":function(e,n,t){e.exports=t.p+"339d1ea41b5a6025d7f61e379e0eff22.jpg"},"./app/components/Social/index.js":function(e,n,t){"use strict";function o(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function a(e){return p(u,{small:e.small},void 0,p("a",{href:i.a[e.type].url},void 0,p(s.a,{src:i.a[e.type].img,alt:e.type,className:"social_image"})))}var r=t("./node_modules/react/react.js"),i=(t.n(r),t("./app/components/Social/components.js")),s=t("./app/components/Img/index.js"),l=t("./node_modules/styled-components/dist/styled-components.es.js"),p=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(n,t,o,a){var r=n&&n.defaultProps,i=arguments.length-3;if(t||0===i||(t={}),t&&r)for(var s in r)void 0===t[s]&&(t[s]=r[s]);else t||(t=r||{});if(1===i)t.children=a;else if(i>1){for(var l=Array(i),p=0;p<i;p++)l[p]=arguments[p+3];t.children=l}return{$$typeof:e,type:n,key:void 0===o?null:""+o,ref:null,props:t,_owner:null}}}(),c=o(["\n  background-colour: #ffffff;\n  margin: 0 ","rem;\n  @media all and (max-width: 2000px) { /* screen size until 1200px */\n    .social_image {\n      height: ","rem;\n    }\n  }\n  @media all and (max-width: 1000px) { /* screen size until 1000px */\n    .social_image {\n      height: ","rem;\n    }\n  }\n  @media all and (max-width: 750px) { /* screen size until 500px */\n    .social_image {\n      height: ","rem;\n      margin: 0;\n    }\n  }\n"],["\n  background-colour: #ffffff;\n  margin: 0 ","rem;\n  @media all and (max-width: 2000px) { /* screen size until 1200px */\n    .social_image {\n      height: ","rem;\n    }\n  }\n  @media all and (max-width: 1000px) { /* screen size until 1000px */\n    .social_image {\n      height: ","rem;\n    }\n  }\n  @media all and (max-width: 750px) { /* screen size until 500px */\n    .social_image {\n      height: ","rem;\n      margin: 0;\n    }\n  }\n"]),u=l.a.span(c,function(e){return e.small?.5:1},function(e){return e.small?6:11},function(e){return e.small?4:7},function(e){return e.small?2.5:3.5});n.a=a},"./app/components/Social/instagram.jpg":function(e,n,t){e.exports=t.p+"dd7594f674a5b2a897571dd267f47b5d.jpg"},"./app/components/Social/twitter.jpg":function(e,n,t){e.exports=t.p+"38d2a3f6a340d3fb4847e6906e2335c6.jpg"},"./app/containers/Splash/index.js":function(e,n,t){"use strict";function o(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function a(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function r(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}function i(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}Object.defineProperty(n,"__esModule",{value:!0});var s=t("./node_modules/react/react.js"),l=t.n(s),p=t("./node_modules/axios/index.js"),c=t.n(p),u=t("./node_modules/react-helmet/lib/Helmet.js"),d=t.n(u),m=t("./node_modules/styled-components/dist/styled-components.es.js"),f=t("./app/utils/constants.js"),g=t("./app/components/Logo/index.js"),h=t("./app/components/SignupForm/index.js"),x=t("./app/components/Explanation/index.js"),b=t("./app/components/Social/index.js");t.d(n,"Splash",function(){return S});var y=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(n,t,o,a){var r=n&&n.defaultProps,i=arguments.length-3;if(t||0===i||(t={}),t&&r)for(var s in r)void 0===t[s]&&(t[s]=r[s]);else t||(t=r||{});if(1===i)t.children=a;else if(i>1){for(var l=Array(i),p=0;p<i;p++)l[p]=arguments[p+3];t.children=l}return{$$typeof:e,type:n,key:void 0===o?null:""+o,ref:null,props:t,_owner:null}}}(),v=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}(),j=i(["\n  text-align: center;\n  margin-top: 0rem;\n"],["\n  text-align: center;\n  margin-top: 0rem;\n"]),w=m.a.div(j),_=y(g.a,{large:!0}),z=y(w,{},void 0,y(b.a,{type:"instagram"}),y(b.a,{type:"twitter"}),y(b.a,{type:"facebook"})),O=y(x.a,{}),S=function(e){function n(e){o(this,n);var t=a(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.state={email:"",emailText:"Get active! Sign up to get notified when we launch!"},t.onSubmitForm=t.onSubmitForm.bind(t),t.onChange=t.onChange.bind(t),t}return r(n,e),v(n,[{key:"onSubmitForm",value:function(e){e.preventDefault();var n=this;return c.a.post(f.a+"api/users",{email:this.state.email}).then(function(e){n.setState({email:"",emailText:"Thanks! We will notify you when we launch."})}).catch(function(e){console.error("error",e),n.setState({emailText:"There was an error with your request. Please try again using a valid email address"})})}},{key:"onChange",value:function(e){this.setState({email:e.target.value})}},{key:"render",value:function(){return y("div",{},void 0,y(d.a,{title:"Postcards For Change",meta:[{name:"description",content:"Postcardsfor Change - an app to send postcards to your representatives about issues your care about."}]}),_,z,y(h.a,{email:this.state.email,onChange:this.onChange,onSubmitForm:this.onSubmitForm,emailText:this.state.emailText}),O)}}]),n}(l.a.Component);n.default=S},"./app/utils/constants.js":function(e,n,t){"use strict";t.d(n,"a",function(){return a});var o=void 0;o="https://postcards4change.herokuapp.com/";var a=o}});