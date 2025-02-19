/*! For license information please see components-media-Media-stories.3c7c4586.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_ncds_ui=self.webpackChunk_ncds_ui||[]).push([[8015],{"./src/components/media/Media.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Media_stories});var Media=__webpack_require__("./src/components/media/Media.tsx");const media_img_namespaceObject=__webpack_require__.p+"fdcc2e00bfe1c8eb982d.png";const Media_stories={title:"Component/Media",component:Media.A,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{}};var Default={args:{reverse:!1,title:"타이틀을 20자 내로 입력해 주세요.",contents:"고객이 행복해지는 데 필요한 모든 것의 균형을 맞추는 데 도움이 되는 올인원 고객 서비스 플랫폼입니다.",icon:"messageChatCircle",image:media_img_namespaceObject}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    reverse: false,\n    title: '타이틀을 20자 내로 입력해 주세요.',\n    contents: '고객이 행복해지는 데 필요한 모든 것의 균형을 맞추는 데 도움이 되는 올인원 고객 서비스 플랫폼입니다.',\n    icon: 'messageChatCircle',\n    image: Img\n  }\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"../../node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes="",i=0;i<arguments.length;i++){var arg=arguments[i];arg&&(classes=appendClass(classes,parseValue(arg)))}return classes}function parseValue(arg){if("string"==typeof arg||"number"==typeof arg)return arg;if("object"!=typeof arg)return"";if(Array.isArray(arg))return classNames.apply(null,arg);if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]"))return arg.toString();var classes="";for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&(classes=appendClass(classes,key));return classes}function appendClass(value,newClass){return newClass?value?value+" "+newClass:value+newClass:value}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"../../node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("../../node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../../node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("../../node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./src/components/button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{$n:()=>Button,G:()=>svgSize,u4:()=>ButtonBase});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/react/index.js"),_svg_SvgIcon__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/svg/SvgIcon.tsx"),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},ButtonBase=(0,react__WEBPACK_IMPORTED_MODULE_2__.forwardRef)((function(_a,ref){var href=_a.href,children=_a.children,props=__rest(_a,["href","children"]),BaseComponent=href?"a":"button";return(0,react__WEBPACK_IMPORTED_MODULE_2__.createElement)(BaseComponent,__assign({href,ref},props),children)})),svgSize={xxs:12,xs:16,sm:20,md:20,lg:20,xl:20,"2xl":24},Button=(0,react__WEBPACK_IMPORTED_MODULE_2__.forwardRef)((function(_a,ref){var _b=_a.useSpan,useSpan=void 0!==_b&&_b,leadingIcon=_a.leadingIcon,trailingIcon=_a.trailingIcon,_c=_a.onlyIcon,onlyIcon=void 0!==_c&&_c,_d=_a.href,href=void 0===_d?"":_d,label=_a.label,hierarchy=_a.hierarchy,disabled=_a.disabled,_e=_a.className,className=void 0===_e?"":_e,fullSized=_a.fullSized,_f=_a.size,size=void 0===_f?"lg":_f,iconColor=_a.iconColor,_g=_a.hasUnderline,hasUnderline=void 0!==_g&&_g,children=_a.children,target=_a.target,_j=(_a.visible,_a.iconStrokeWidth),iconStrokeWidth=void 0===_j?"2":_j,_k=_a.iconFill,iconFill=void 0===_k?"none":_k,props=__rest(_a,["useSpan","leadingIcon","trailingIcon","onlyIcon","href","label","hierarchy","disabled","className","fullSized","size","iconColor","hasUnderline","children","target","visible","iconStrokeWidth","iconFill"]),_l=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),queryParams=_l[0],setQueryParams=_l[1],stateClassName={"is-full":fullSized,"is-disable":disabled,"has-underline":hasUnderline};return(0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)((function(){var _a;setQueryParams(new URLSearchParams((null===(_a=null===window||void 0===window?void 0:window.location)||void 0===_a?void 0:_a.search)||""))}),[]),useSpan?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("cds-btn","cds-btn--".concat(size),{"only-icon":onlyIcon,"is-disable":disabled},className,stateClassName,hierarchy&&"cds-btn--".concat(hierarchy)),ref,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[leadingIcon&&("string"==typeof leadingIcon?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_svg_SvgIcon__WEBPACK_IMPORTED_MODULE_3__.A,{icon:leadingIcon,size:svgSize[size],color:iconColor,strokeWidth:iconStrokeWidth,fill:iconFill}):{leadingIcon}),!onlyIcon&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"cds-btn__label",children:label}),trailingIcon&&("string"==typeof trailingIcon?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_svg_SvgIcon__WEBPACK_IMPORTED_MODULE_3__.A,{icon:trailingIcon,size:svgSize[size],color:iconColor,strokeWidth:iconStrokeWidth,fill:iconFill}):{trailingIcon}),children]})}):href?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ButtonBase,__assign({href,className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("cds-btn","cds-btn--".concat(size),{"only-icon":onlyIcon},className,stateClassName,hierarchy&&"cds-btn--".concat(hierarchy)),disabled,onClick:function(e){e.preventDefault(),"true"!==(null==queryParams?void 0:queryParams.get("isRemote"))&&"_blank"!==target&&window.top?window.top.location.href=href:window.open(href)},target},props,{ref,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[leadingIcon&&("string"==typeof leadingIcon?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_svg_SvgIcon__WEBPACK_IMPORTED_MODULE_3__.A,{icon:leadingIcon,size:svgSize[size],color:iconColor,strokeWidth:iconStrokeWidth,fill:iconFill}):{leadingIcon}),!onlyIcon&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"cds-btn__label",children:label}),trailingIcon&&("string"==typeof trailingIcon?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_svg_SvgIcon__WEBPACK_IMPORTED_MODULE_3__.A,{icon:trailingIcon,size:svgSize[size],color:iconColor,strokeWidth:iconStrokeWidth,fill:iconFill}):{trailingIcon}),children]})})):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ButtonBase,__assign({className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("cds-btn","cds-btn--".concat(size),{"only-icon":onlyIcon},className,stateClassName,hierarchy&&"cds-btn--".concat(hierarchy)),disabled},props,{ref,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[leadingIcon&&("string"==typeof leadingIcon?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_svg_SvgIcon__WEBPACK_IMPORTED_MODULE_3__.A,{icon:leadingIcon,size:svgSize[size],color:iconColor,strokeWidth:iconStrokeWidth,fill:iconFill}):leadingIcon),!onlyIcon&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"cds-btn__label",children:label}),trailingIcon&&("string"==typeof trailingIcon?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_svg_SvgIcon__WEBPACK_IMPORTED_MODULE_3__.A,{icon:trailingIcon,size:svgSize[size],color:iconColor,strokeWidth:iconStrokeWidth,fill:iconFill}):trailingIcon),children]})}))}));try{ButtonBase.displayName="ButtonBase",ButtonBase.__docgenInfo={description:"",displayName:"ButtonBase",props:{href:{defaultValue:{value:""},description:"",name:"href",required:!1,type:{name:"string"}},target:{defaultValue:null,description:"",name:"target",required:!1,type:{name:"enum",value:[{value:'"_self"'},{value:'"_blank"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/button/Button.tsx#ButtonBase"]={docgenInfo:ButtonBase.__docgenInfo,name:"ButtonBase",path:"src/components/button/Button.tsx#ButtonBase"})}catch(__react_docgen_typescript_loader_error){}try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{useSpan:{defaultValue:{value:"false"},description:"",name:"useSpan",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},fullSized:{defaultValue:null,description:"",name:"fullSized",required:!1,type:{name:"boolean"}},hierarchy:{defaultValue:null,description:"",name:"hierarchy",required:!1,type:{name:"enum",value:[{value:'"primary-red"'},{value:'"primary-blue"'},{value:'"tertiary-gray"'},{value:'"secondary-color"'},{value:'"secondary-gray"'},{value:'"tertiary-color"'},{value:'"link-gray"'},{value:'"link-color"'}]}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},leadingIcon:{defaultValue:null,description:"",name:"leadingIcon",required:!1,type:{name:"ReactNode"}},trailingIcon:{defaultValue:null,description:"",name:"trailingIcon",required:!1,type:{name:"ReactNode"}},onlyIcon:{defaultValue:{value:"false"},description:"",name:"onlyIcon",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"lg"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"lg"'},{value:'"md"'},{value:'"xxs"'},{value:'"xs"'},{value:'"sm"'},{value:'"xl"'},{value:'"2xl"'}]}},hasUnderline:{defaultValue:{value:"false"},description:"",name:"hasUnderline",required:!1,type:{name:"boolean"}},iconColor:{defaultValue:null,description:"",name:"iconColor",required:!1,type:{name:"enum",value:[{value:'"secondary-gray-blue-300"'},{value:'"white"'},{value:'"black"'},{value:'"secondary-gray-blue-50"'},{value:'"currentColor"'},{value:'"gray200"'},{value:'"gray300"'},{value:'"gray400"'},{value:'"gray500"'},{value:'"gray600"'},{value:'"gray700"'},{value:'"blue500"'},{value:'"blue600"'},{value:'"red500"'},{value:'"red600"'},{value:'"orange500"'},{value:'"orange600"'},{value:'"green500"'},{value:'"green600"'},{value:'"pink100"'},{value:'"pink600"'},{value:'"yellow600"'},{value:'"violet600"'},{value:'"secondary-gray-blue-100"'},{value:'"secondary-gray-blue-200"'},{value:'"secondary-gray-blue-400"'},{value:'"secondary-gray-blue-450"'},{value:'"secondary-gray-blue-500"'},{value:'"secondary-gray-blue-600"'},{value:'"secondary-gray-blue-700"'}]}},visible:{defaultValue:{value:"true"},description:"",name:"visible",required:!1,type:{name:"boolean"}},iconFill:{defaultValue:{value:"none"},description:"",name:"iconFill",required:!1,type:{name:"string"}},iconStrokeWidth:{defaultValue:{value:"2"},description:"",name:"iconStrokeWidth",required:!1,type:{name:"string"}},href:{defaultValue:{value:""},description:"",name:"href",required:!1,type:{name:"string"}},target:{defaultValue:null,description:"",name:"target",required:!1,type:{name:"enum",value:[{value:'"_self"'},{value:'"_blank"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/icon/FeatureIcon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{a:()=>FeatureIcon});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_svg_SvgIcon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/svg/SvgIcon.tsx"),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},SVG_SIZE_MAP={sm:16,md:20,lg:24,xl:28},FeatureIcon=function(_a){var _b=_a.size,size=void 0===_b?"lg":_b,_c=_a.icon,icon=void 0===_c?"user01":_c,color=_a.color,_d=_a.isDark,isDark=void 0!==_d&&_d,_e=_a.theme,theme=void 0===_e?"modern":_e,_f=_a.strokeWidth,strokeWidth=void 0===_f?"2":_f,_g=_a.className,className=void 0===_g?"":_g,props=__rest(_a,["size","icon","color","isDark","theme","strokeWidth","className"]),isCircle=color&&"primary"!==color||(null==theme?void 0:theme.includes("circle")),visibleColor=color&&"primary"!==color||isCircle,neutral=!color&&"light-circle"===theme&&"neutral",hasOutline="outline-circle"===theme;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",__assign({className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("cds-feature-icon","cds-feature-icon--".concat(size),Boolean(!visibleColor||hasOutline||isCircle)&&"cds-feature-icon--".concat(theme),visibleColor&&"cds-feature-icon--".concat(color||neutral),isCircle&&"is-circle",isDark&&"is-dark",className)},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"cds-feature-icon__svg-wrap",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_svg_SvgIcon__WEBPACK_IMPORTED_MODULE_2__.A,{icon,size:SVG_SIZE_MAP[size],color:"currentColor",strokeWidth})})}))};try{FeatureIcon.displayName="FeatureIcon",FeatureIcon.__docgenInfo={description:"",displayName:"FeatureIcon",props:{size:{defaultValue:{value:"lg"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"lg"'},{value:'"md"'},{value:'"sm"'},{value:'"xl"'}]}},icon:{defaultValue:{value:"user01"},description:"",name:"icon",required:!1,type:{name:"string"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"neutral"'},{value:'"error"'},{value:'"warning"'},{value:'"success"'},{value:'"primary"'},{value:'"info"'}]}},theme:{defaultValue:{value:"modern"},description:"",name:"theme",required:!1,type:{name:"FeatureIconTheme | null"}},isDark:{defaultValue:{value:"false"},description:"",name:"isDark",required:!1,type:{name:"boolean"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},strokeWidth:{defaultValue:{value:"2"},description:"",name:"strokeWidth",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/icon/FeatureIcon.tsx#FeatureIcon"]={docgenInfo:FeatureIcon.__docgenInfo,name:"FeatureIcon",path:"src/components/icon/FeatureIcon.tsx#FeatureIcon"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/media/Media.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_button_Button__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/button/Button.tsx"),_icon_FeatureIcon__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/icon/FeatureIcon.tsx"),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},Media=function(_a){var _b=_a.reverse,reverse=void 0!==_b&&_b,title=_a.title,contents=_a.contents,icon=_a.icon,image=_a.image,children=_a.children,buttons=_a.buttons;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("cds-media",{"cds-media--reverse":reverse}),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"cds-media__content",children:[icon&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_icon_FeatureIcon__WEBPACK_IMPORTED_MODULE_3__.a,{theme:"light-circle",color:"neutral",icon,className:"cds-media__icon"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{className:"cds-media__title",children:title}),contents&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{className:"cds-media__text",children:contents}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"button-wrap",children:!!(null==buttons?void 0:buttons.length)&&buttons.map((function(button){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_button_Button__WEBPACK_IMPORTED_MODULE_2__.$n,__assign({className:""},button),button.label)}))}),children]}),image&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"cds-media__img",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img",{src:image,alt:""})})]})};const __WEBPACK_DEFAULT_EXPORT__=Media;try{Media.displayName="Media",Media.__docgenInfo={description:"",displayName:"Media",props:{reverse:{defaultValue:{value:"false"},description:"",name:"reverse",required:!1,type:{name:"boolean"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},contents:{defaultValue:null,description:"",name:"contents",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"string"}},image:{defaultValue:null,description:"",name:"image",required:!1,type:{name:"string"}},buttons:{defaultValue:null,description:"",name:"buttons",required:!1,type:{name:"ButtonType[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/media/Media.tsx#Media"]={docgenInfo:Media.__docgenInfo,name:"Media",path:"src/components/media/Media.tsx#Media"})}catch(__react_docgen_typescript_loader_error){}}}]);