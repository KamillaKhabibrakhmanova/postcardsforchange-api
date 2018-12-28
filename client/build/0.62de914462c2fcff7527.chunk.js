webpackJsonp([0],{"./app/components/Explanation/Box.js":function(e,n,t){"use strict";function a(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function o(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function i(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}function r(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var s=t("./node_modules/react/react.js"),c=t.n(s),l=t("./node_modules/styled-components/dist/styled-components.es.js"),p=t("./node_modules/react-intl/lib/index.es.js"),m=(t("./app/components/Explanation/messages.js"),t("./app/components/Img/index.js")),d=function(){function e(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(n,t,a){return t&&e(n.prototype,t),a&&e(n,a),n}}(),u=r(["\n  margin: 0 auto;\n  background-color: #ffffff;\n  text-align: center;\n  font-size: 1.9rem;\n  padding-bottom: 1rem;\n  .title {\n    color: ","\n  }\n  .message {\n    color: ","\n    padding: 0 0.3rem;\n  }\n\n  @media all and (max-width: 2000px) { /* screen size until 1200px */\n    img {\n      height: 20rem;\n    }\n  }\n  @media all and (max-width: 1000px) { /* screen size until 1000px */\n    img {\n      height: 15rem;\n    }\n  }\n  @media all and (max-width: 450px) { /* screen size until 500px */\n    img {\n      height: 11rem;\n    }\n    .message {\n      font-size: 1.5rem;\n    }\n  }\n"],["\n  margin: 0 auto;\n  background-color: #ffffff;\n  text-align: center;\n  font-size: 1.9rem;\n  padding-bottom: 1rem;\n  .title {\n    color: ","\n  }\n  .message {\n    color: ","\n    padding: 0 0.3rem;\n  }\n\n  @media all and (max-width: 2000px) { /* screen size until 1200px */\n    img {\n      height: 20rem;\n    }\n  }\n  @media all and (max-width: 1000px) { /* screen size until 1000px */\n    img {\n      height: 15rem;\n    }\n  }\n  @media all and (max-width: 450px) { /* screen size until 500px */\n    img {\n      height: 11rem;\n    }\n    .message {\n      font-size: 1.5rem;\n    }\n  }\n"]),f=l.a.div(u,function(e){return e.theme.main_red},function(e){return e.theme.main_blue}),g=function(e){function n(e){a(this,n);var i=o(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return i.messages=t.i(p.d)({title:{id:e.component.id+"_title",defaultMessage:e.component.title},text:{id:e.component.id+"_text",defaultMessage:e.component.text}}),i}return i(n,e),d(n,[{key:"render",value:function(){return c.a.createElement(f,{className:"col-sm-12 col-md-4"},c.a.createElement(m.a,{src:this.props.component.img,alt:""}),c.a.createElement("p",{className:"title"},c.a.createElement("strong",null,c.a.createElement(p.c,this.messages.title))),c.a.createElement("p",{className:"message"},c.a.createElement(p.c,this.messages.text)))}}]),n}(c.a.Component);g.propTypes={},n.a=g},"./app/components/Explanation/components.js":function(e,n,t){"use strict";var a=t("./app/components/Explanation/envelope.jpg"),o=t.n(a),i=t("./app/components/Explanation/map.jpg"),r=t.n(i),s=t("./app/components/Explanation/stamp.jpg"),c=t.n(s),l=[{id:"choose",title:"Choose your postcard",text:"Select an issue that matters to you.",img:o.a},{id:"find",title:"Find your representative",text:"Choose from your representatives.",img:r.a},{id:"send",title:"Send the message",text:"Skip the post office. We send the postcard for you!",img:c.a}];n.a=l},"./app/components/Explanation/envelope.jpg":function(e,n,t){e.exports=t.p+"4ef49fc87ac88682cccb27679215bfd8.jpg"},"./app/components/Explanation/index.js":function(e,n,t){"use strict";function a(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function o(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function i(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}function r(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var s=t("./node_modules/react/react.js"),c=t.n(s),l=t("./node_modules/styled-components/dist/styled-components.es.js"),p=(t("./node_modules/react-intl/lib/index.es.js"),t("./app/components/Explanation/messages.js"),t("./app/components/Explanation/components.js")),m=t("./app/components/Explanation/Box.js"),d=(t("./app/components/H2/index.js"),function(){function e(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(n,t,a){return t&&e(n.prototype,t),a&&e(n,a),n}}()),u=r(["\n  text-align: center;\n  background-color: ",";\n  color: ",";\n  font-size: 2em;\n  width:100%;\n  padding: 10px;\n  \n  h2 {\n    margin: 0;\n  }\n"],["\n  text-align: center;\n  background-color: ",";\n  color: ",";\n  font-size: 2em;\n  width:100%;\n  padding: 10px;\n  \n  h2 {\n    margin: 0;\n  }\n"]),f=l.a.div(u,function(e){return e.theme.main_blue},function(e){return e.theme.main_white}),g=function(e){function n(){return a(this,n),o(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return i(n,e),d(n,[{key:"render",value:function(){return c.a.createElement("div",{className:"row"},c.a.createElement(f,null,c.a.createElement("h2",null,"How it works:")),p.a.map(function(e){return c.a.createElement(m.a,{component:e,key:e.id})}))}}]),n}(c.a.Component);g.propTypes={},n.a=g},"./app/components/Explanation/map.jpg":function(e,n,t){e.exports=t.p+"b92c2751ad51facb5b12e3241acb89f0.jpg"},"./app/components/Explanation/messages.js":function(e,n,t){"use strict";var a=t("./node_modules/react-intl/lib/index.es.js"),o={};t("./app/components/Explanation/components.js").a.forEach(function(e){o[e.id+"_message"]={id:"app.components.Explanation."+e.id,defaultMessage:""+e.text}});t.i(a.d)({header:{id:"app.components.Explanation.header",defaultMessage:"This is the Explanation component !"}})},"./app/components/Explanation/stamp.jpg":function(e,n,t){e.exports=t.p+"d87c6e9fe291774afe54d657ada645c3.jpg"},"./app/components/H2/index.js":function(e,n,t){"use strict";function a(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var o=t("./node_modules/styled-components/dist/styled-components.es.js"),i=a(["\n  font-size: 1.5em;\n"],["\n  font-size: 1.5em;\n"]);o.a.h2(i)},"./app/components/Logo/index.js":function(e,n,t){"use strict";function a(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function o(e){return r.a.createElement("div",null,r.a.createElement(d,{large:e.large},e.large&&r.a.createElement(p.a,null)))}var i=t("./node_modules/react/react.js"),r=t.n(i),s=(t("./app/components/Img/index.js"),t("./app/components/Logo/logo.jpg")),c=t.n(s),l=t("./node_modules/styled-components/dist/styled-components.es.js"),p=t("./app/components/LogoText/index.js"),m=a(["\n  background-image: url(",");\n  background-size: contain;\n  background-repeat: no-repeat;\n  width: ","%\n  padding-top: 25%;\n  padding-bottom: 0%;\n  margin-bottom: ",";\n  display: block;\n  background-color: #ffffff;\n\n  @media all and (max-width: 2000px) { /* screen size until 1200px */\n    margin-bottom: ",";\n  }\n  @media all and (max-width: 1000px) { /* screen size until 1000px */\n    margin-bottom: ",";\n  }\n  @media all and (max-width: 750px) { /* screen size until 500px */\n    margin-bottom: ",";\n  }\n"],["\n  background-image: url(",");\n  background-size: contain;\n  background-repeat: no-repeat;\n  width: ","%\n  padding-top: 25%;\n  padding-bottom: 0%;\n  margin-bottom: ",";\n  display: block;\n  background-color: #ffffff;\n\n  @media all and (max-width: 2000px) { /* screen size until 1200px */\n    margin-bottom: ",";\n  }\n  @media all and (max-width: 1000px) { /* screen size until 1000px */\n    margin-bottom: ",";\n  }\n  @media all and (max-width: 750px) { /* screen size until 500px */\n    margin-bottom: ",";\n  }\n"]),d=l.a.div(m,c.a,function(e){return e.large?85:30},function(e){return e.large?"auto":"-6rem"},function(e){return e.large?"auto":"-6rem"},function(e){return e.large?"auto":"-4rem"},function(e){return e.large?"auto":"-2rem"});o.propTypes={},n.a=o},"./app/components/Logo/logo.jpg":function(e,n,t){e.exports=t.p+"eec9296d82758b6452f4ef35faf5355f.jpg"},"./app/components/LogoText/index.js":function(e,n,t){"use strict";function a(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function o(){return r.a.createElement(m,{className:"row"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement("strong",null,r.a.createElement("em",null,r.a.createElement(c.c,l.a.logoText)))))}var i=t("./node_modules/react/react.js"),r=t.n(i),s=t("./node_modules/styled-components/dist/styled-components.es.js"),c=t("./node_modules/react-intl/lib/index.es.js"),l=t("./app/components/LogoText/messages.js"),p=a(["\n  background-color: #ffffff;\n  color: ",";\n  text-align: center;\n  padding: 0 18px;\n  display: block;\n\n  @media all and (max-width: 2000px) { /* screen size until 1200px */\n    font-size: 3.3rem; /* 1.5x default size */\n  }\n  @media all and (max-width: 1000px) { /* screen size until 1000px */\n    font-size: 2.0em; /* 1.2x default size */\n  }\n  @media all and (max-width: 750px) { /* screen size until 500px */\n    font-size: 1.5rem; /* 0.8x default size */\n  }\n"],["\n  background-color: #ffffff;\n  color: ",";\n  text-align: center;\n  padding: 0 18px;\n  display: block;\n\n  @media all and (max-width: 2000px) { /* screen size until 1200px */\n    font-size: 3.3rem; /* 1.5x default size */\n  }\n  @media all and (max-width: 1000px) { /* screen size until 1000px */\n    font-size: 2.0em; /* 1.2x default size */\n  }\n  @media all and (max-width: 750px) { /* screen size until 500px */\n    font-size: 1.5rem; /* 0.8x default size */\n  }\n"]),m=s.a.div(p,function(e){return e.theme.main_blue});o.propTypes={},n.a=o},"./app/components/LogoText/messages.js":function(e,n,t){"use strict";var a=t("./node_modules/react-intl/lib/index.es.js");n.a=t.i(a.d)({header:{id:"app.components.LogoText.header",defaultMessage:"This is the LogoText component !",logoText:"Postcards for Change is the easiest wat to send a postcard to your political representatives and get your voice heard."},logoText:{id:"boilerplate.containers.LogoText.logoText",defaultMessage:"Postcards for Change is the easiest way to send a postcard to your political representatives and get your voice heard."}})},"./app/components/SignupForm/Text.js":function(e,n,t){"use strict";function a(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var o=t("./node_modules/styled-components/dist/styled-components.es.js"),i=a(["\n  margin: auto;\n  padding: auto;\n  width: 50%;\n  color: #ffffff;\n  padding: 5%;\n  text-align: center;\n  font-size: 2rem;\n  @media all and (max-width: 1000px) {\n    padding: 2%;\n    margin: -2rem auto 0rem auto;\n    width: 100%;\n    font-size: 2rem;\n  }\n  @media all and (max-width: 600px) {\n    padding: 2%;\n    margin: -2rem auto 0rem auto;\n    width: 100%;\n    font-size: 1.7rem;\n  }\n  @media all and (max-width: 500px) {\n    font-size: 1.4rem;\n  }\n"],["\n  margin: auto;\n  padding: auto;\n  width: 50%;\n  color: #ffffff;\n  padding: 5%;\n  text-align: center;\n  font-size: 2rem;\n  @media all and (max-width: 1000px) {\n    padding: 2%;\n    margin: -2rem auto 0rem auto;\n    width: 100%;\n    font-size: 2rem;\n  }\n  @media all and (max-width: 600px) {\n    padding: 2%;\n    margin: -2rem auto 0rem auto;\n    width: 100%;\n    font-size: 1.7rem;\n  }\n  @media all and (max-width: 500px) {\n    font-size: 1.4rem;\n  }\n"]),r=o.a.div(i);n.a=r},"./app/components/SignupForm/index.js":function(e,n,t){"use strict";function a(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function o(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function i(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}function r(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var s=t("./node_modules/react/react.js"),c=t.n(s),l=t("./node_modules/styled-components/dist/styled-components.es.js"),p=t("./app/components/SignupForm/Text.js"),m=t("./app/components/SignupForm/input.js"),d=function(){function e(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(n,t,a){return t&&e(n.prototype,t),a&&e(n,a),n}}(),u=r(["\n  background-color: ",";\n  display: block;\n  height: 100%;\n  padding: auto;\n  text-align: center;\n  margin: auto;\n  form {\n    margin: auto;\n    width: 100%;\n    padding: 10%;\n    text-align: center;\n  }\n  \n  @media all and (max-width: 1000px) { /* screen size until 500px */\n    form {\n      padding: 2%;\n    }\n  }\n"],["\n  background-color: ",";\n  display: block;\n  height: 100%;\n  padding: auto;\n  text-align: center;\n  margin: auto;\n  form {\n    margin: auto;\n    width: 100%;\n    padding: 10%;\n    text-align: center;\n  }\n  \n  @media all and (max-width: 1000px) { /* screen size until 500px */\n    form {\n      padding: 2%;\n    }\n  }\n"]),f=r(["\n  background-color: ",";\n  margin: 1rem 1rem;\n  width: 15rem;\n  height: 33%;\n  :focus {\n    outline: 0 !important;\n  }\n  \n  @media all and (max-width: 450px) { /* screen size until 500px */\n    width: 10rem;\n  }\n  \n"],["\n  background-color: ",";\n  margin: 1rem 1rem;\n  width: 15rem;\n  height: 33%;\n  :focus {\n    outline: 0 !important;\n  }\n  \n  @media all and (max-width: 450px) { /* screen size until 500px */\n    width: 10rem;\n  }\n  \n"]),g=l.a.div(u,function(e){return e.theme.main_blue}),h=l.a.button(f,function(e){return e.theme.main_turqouise}),x=function(e){function n(){return a(this,n),o(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return i(n,e),d(n,[{key:"render",value:function(){return c.a.createElement(g,{className:"row"},c.a.createElement("div",{className:"col-sm-12 col-md-6"},c.a.createElement("form",{onSubmit:this.props.onSubmitForm},c.a.createElement("label",{htmlFor:"email"},c.a.createElement(m.a,{id:"email",type:"text",placeholder:"your_email@example.com",value:this.props.email,onChange:this.props.onChange})),c.a.createElement(h,{class:"btn btn-info form-control"},c.a.createElement("input",{type:"submit"})))),c.a.createElement(p.a,{className:"col-sm-12 col-md-6"},this.props.emailText))}}]),n}(c.a.Component);n.a=x},"./app/components/SignupForm/input.js":function(e,n,t){"use strict";function a(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var o=t("./node_modules/styled-components/dist/styled-components.es.js"),i=a(["\n  border: 3px solid ",";\n  background-color: #ffffff;\n  margin: auto;\n  padding: auto;\n  width: 30rem;\n  @media all and (max-width: 1000px) { /* screen size until 500px */\n    width: 20rem;\n  }\n\n  @media all and (max-width: 750px) { /* screen size until 500px */\n    width: 15rem;\n  }\n"],["\n  border: 3px solid ",";\n  background-color: #ffffff;\n  margin: auto;\n  padding: auto;\n  width: 30rem;\n  @media all and (max-width: 1000px) { /* screen size until 500px */\n    width: 20rem;\n  }\n\n  @media all and (max-width: 750px) { /* screen size until 500px */\n    width: 15rem;\n  }\n"]),r=o.a.input(i,function(e){return e.theme.main_turqouise});n.a=r},"./app/components/Social/components.js":function(e,n,t){"use strict";var a=t("./app/components/Social/twitter.jpg"),o=t.n(a),i=t("./app/components/Social/facebook.jpg"),r=t.n(i),s=t("./app/components/Social/instagram.jpg"),c=t.n(s),l={twitter:{img:o.a,url:"https://twitter.com/PstCards4Change"},facebook:{img:r.a,url:"https://www.facebook.com/Postcards4Change/"},instagram:{img:c.a,url:"https://www.instagram.com/postcardsforchange/"}};n.a=l},"./app/components/Social/facebook.jpg":function(e,n,t){e.exports=t.p+"339d1ea41b5a6025d7f61e379e0eff22.jpg"},"./app/components/Social/index.js":function(e,n,t){"use strict";function a(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function o(e){return r.a.createElement(m,{small:e.small},r.a.createElement("a",{href:s.a[e.type].url},r.a.createElement(c.a,{src:s.a[e.type].img,alt:e.type,className:"social_image"})))}var i=t("./node_modules/react/react.js"),r=t.n(i),s=t("./app/components/Social/components.js"),c=t("./app/components/Img/index.js"),l=t("./node_modules/styled-components/dist/styled-components.es.js"),p=a(["\n  background-colour: #ffffff;\n  margin: 0 ","rem;\n  @media all and (max-width: 2000px) { /* screen size until 1200px */\n    .social_image {\n      height: ","rem;\n    }\n  }\n  @media all and (max-width: 1000px) { /* screen size until 1000px */\n    .social_image {\n      height: ","rem;\n    }\n  }\n  @media all and (max-width: 750px) { /* screen size until 500px */\n    .social_image {\n      height: ","rem;\n      margin: 0;\n    }\n  }\n"],["\n  background-colour: #ffffff;\n  margin: 0 ","rem;\n  @media all and (max-width: 2000px) { /* screen size until 1200px */\n    .social_image {\n      height: ","rem;\n    }\n  }\n  @media all and (max-width: 1000px) { /* screen size until 1000px */\n    .social_image {\n      height: ","rem;\n    }\n  }\n  @media all and (max-width: 750px) { /* screen size until 500px */\n    .social_image {\n      height: ","rem;\n      margin: 0;\n    }\n  }\n"]),m=l.a.span(p,function(e){return e.small?.5:1},function(e){return e.small?6:11},function(e){return e.small?4:7},function(e){return e.small?2.5:3.5});n.a=o},"./app/components/Social/instagram.jpg":function(e,n,t){e.exports=t.p+"dd7594f674a5b2a897571dd267f47b5d.jpg"},"./app/components/Social/twitter.jpg":function(e,n,t){e.exports=t.p+"38d2a3f6a340d3fb4847e6906e2335c6.jpg"},"./app/containers/Splash/index.js":function(e,n,t){"use strict";function a(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function o(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function i(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}function r(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}Object.defineProperty(n,"__esModule",{value:!0});var s=t("./node_modules/react/react.js"),c=t.n(s),l=t("./node_modules/axios/index.js"),p=t.n(l),m=t("./node_modules/react-helmet/lib/Helmet.js"),d=t.n(m),u=t("./node_modules/styled-components/dist/styled-components.es.js"),f=t("./app/utils/constants.js"),g=t("./app/components/Logo/index.js"),h=t("./app/components/SignupForm/index.js"),x=t("./app/components/Explanation/index.js"),b=t("./app/components/Social/index.js");t.d(n,"Splash",function(){return z});var j=function(){function e(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(n,t,a){return t&&e(n.prototype,t),a&&e(n,a),n}}(),w=r(["\n  text-align: center;\n  margin-top: 0rem;\n"],["\n  text-align: center;\n  margin-top: 0rem;\n"]),y=u.a.div(w),z=function(e){function n(e){a(this,n);var t=o(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.state={email:"",emailText:"Get active! Sign up to get notified when we launch!"},t.onSubmitForm=t.onSubmitForm.bind(t),t.onChange=t.onChange.bind(t),t}return i(n,e),j(n,[{key:"onSubmitForm",value:function(e){e.preventDefault();var n=this;return p.a.post(f.b+"api/users",{email:this.state.email}).then(function(e){n.setState({email:"",emailText:"Thanks! We will notify you when we launch."})}).catch(function(e){console.error("error",e),n.setState({emailText:"There was an error with your request. Please try again using a valid email address"})})}},{key:"onChange",value:function(e){this.setState({email:e.target.value})}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(d.a,{title:"Postcards For Change",meta:[{name:"description",content:"Postcardsfor Change - an app to send postcards to your representatives about issues your care about."}]}),c.a.createElement(g.a,{large:!0}),c.a.createElement(y,null,c.a.createElement(b.a,{type:"instagram"}),c.a.createElement(b.a,{type:"twitter"}),c.a.createElement(b.a,{type:"facebook"})),c.a.createElement(h.a,{email:this.state.email,onChange:this.onChange,onSubmitForm:this.onSubmitForm,emailText:this.state.emailText}),c.a.createElement(x.a,null))}}]),n}(c.a.Component);n.default=z},"./app/utils/constants.js":function(e,n,t){"use strict";t.d(n,"b",function(){return i}),t.d(n,"a",function(){return r});var a=void 0,o=void 0;console.log("NODE_ENV","staging"),a="https://postcards4change-staging.herokuapp.com/",o="staging";var i=a,r=o}});