/*! For license information please see components-badge-Badge-stories.df39394d.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_ncds_ui=self.webpackChunk_ncds_ui||[]).push([[7731],{"./src/components/badge/Badge.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,HasDot:()=>HasDot,HasIcon:()=>HasIcon,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_Badge__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/badge/Badge.tsx"),_Dot__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/badge/Dot.tsx"),_svg_SvgIcon__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/svg/SvgIcon.tsx"),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)};const __WEBPACK_DEFAULT_EXPORT__={title:"Component/Badge",component:_Badge__WEBPACK_IMPORTED_MODULE_1__.E,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"radio",options:["sm","md","lg"]},className:{table:{disable:!0}},icon:{table:{disable:!0}}}};var args={label:"배지",type:"pill",color:"neutral",size:"md",icon:"",className:""},Default={args:__assign({},args)},HasDot={render:function(_a){var _b=_a.size,size=void 0===_b?"md":_b,_c=_a.type,type=void 0===_c?"pill":_c,_d=_a.isOutline,isOutline=void 0!==_d&&_d,_e=_a.color,color=void 0===_e?"violet":_e,label=_a.label;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Badge__WEBPACK_IMPORTED_MODULE_1__.E,{type,icon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Dot__WEBPACK_IMPORTED_MODULE_2__.c,{size:"sm",color}),size,isOutline,color,label})})},args:__assign({},args)},HasIcon={render:function(_a){var _b=_a.size,size=void 0===_b?"md":_b,_c=_a.type,type=void 0===_c?"pill":_c,_d=_a.isOutline,isOutline=void 0!==_d&&_d,_e=_a.color,color=void 0===_e?"violet":_e,label=_a.label;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Badge__WEBPACK_IMPORTED_MODULE_1__.E,{type,icon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_svg_SvgIcon__WEBPACK_IMPORTED_MODULE_3__.A,{icon:"check",color:"currentColor",size:12}),size,isOutline,color,label})})},args:__assign({},args)};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...args\n  } as BadgeProps\n}",...Default.parameters?.docs?.source}}},HasDot.parameters={...HasDot.parameters,docs:{...HasDot.parameters?.docs,source:{originalSource:"{\n  render: Template,\n  args: {\n    ...args\n  } as BadgeProps\n}",...HasDot.parameters?.docs?.source},description:{story:"- Badge에 사용되는 Dot size는 sm 고정",...HasDot.parameters?.docs?.description}}},HasIcon.parameters={...HasIcon.parameters,docs:{...HasIcon.parameters?.docs,source:{originalSource:"{\n  render: TemplateIcon,\n  args: {\n    ...args\n  } as BadgeProps\n}",...HasIcon.parameters?.docs?.source},description:{story:"- Badge에 사용되는 icon size는 12 고정",...HasIcon.parameters?.docs?.description}}};const __namedExportsOrder=["Default","HasDot","HasIcon"];try{HasDot.displayName="HasDot",HasDot.__docgenInfo={description:"\n- Badge에 사용되는 Dot size는 sm 고정",displayName:"HasDot",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/badge/Badge.stories.tsx#HasDot"]={docgenInfo:HasDot.__docgenInfo,name:"HasDot",path:"src/components/badge/Badge.stories.tsx#HasDot"})}catch(__react_docgen_typescript_loader_error){}try{HasIcon.displayName="HasIcon",HasIcon.__docgenInfo={description:"\n- Badge에 사용되는 icon size는 12 고정",displayName:"HasIcon",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/badge/Badge.stories.tsx#HasIcon"]={docgenInfo:HasIcon.__docgenInfo,name:"HasIcon",path:"src/components/badge/Badge.stories.tsx#HasIcon"})}catch(__react_docgen_typescript_loader_error){}},"../../node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes="",i=0;i<arguments.length;i++){var arg=arguments[i];arg&&(classes=appendClass(classes,parseValue(arg)))}return classes}function parseValue(arg){if("string"==typeof arg||"number"==typeof arg)return arg;if("object"!=typeof arg)return"";if(Array.isArray(arg))return classNames.apply(null,arg);if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]"))return arg.toString();var classes="";for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&(classes=appendClass(classes,key));return classes}function appendClass(value,newClass){return newClass?value?value+" "+newClass:value+newClass:value}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"../../node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("../../node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../../node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("../../node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./src/components/badge/Badge.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{E:()=>Badge});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),Badge=function(_a){var icon=_a.icon,_b=_a.size,size=void 0===_b?"md":_b,_c=_a.type,type=void 0===_c?"pill":_c,_d=_a.isOutline,isOutline=void 0!==_d&&_d,className=_a.className,_e=_a.color,color=void 0===_e?"violet":_e,label=_a.label,_f=_a.isDark,isDark=void 0!==_f&&_f;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("cds-badge",{"cds-badge--dark":isDark},"cds-badge--".concat(size),"cds-badge--".concat(type),"cds-badge--".concat(isDark?"dark-":"").concat(color),{"cds-badge--outline":!isDark&&isOutline},{"has-icon":icon},className),children:[icon&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("cds-badge__icon cds-badge__icon--".concat(color)),children:icon}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"cds-badge__label",children:label})]})};try{Badge.displayName="Badge",Badge.__docgenInfo={description:"",displayName:"Badge",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},color:{defaultValue:{value:"violet"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"neutral"'},{value:'"error"'},{value:'"warning"'},{value:'"success"'},{value:'"violet"'},{value:'"blue"'},{value:'"pink"'},{value:'"disabled"'},{value:'"secondary-gray-blue-300"'},{value:'"primary-red-300"'}]}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},type:{defaultValue:{value:"pill"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"square"'},{value:'"pill"'}]}},isOutline:{defaultValue:{value:"false"},description:"",name:"isOutline",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:'Omit<Size, "xl" | "2xl">'}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},isDark:{defaultValue:{value:"false"},description:"",name:"isDark",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/badge/Badge.tsx#Badge"]={docgenInfo:Badge.__docgenInfo,name:"Badge",path:"src/components/badge/Badge.tsx#Badge"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/badge/Dot.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{c:()=>Dot});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),Dot=function(_a){var color=_a.color,_b=_a.size,size=void 0===_b?"md":_b,className=_a.className;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("cds-dot","cds-dot--".concat(size),"cds-dot--".concat(color),className)})};try{Dot.displayName="Dot",Dot.__docgenInfo={description:"",displayName:"Dot",props:{color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:'Omit<BadgeColor, "pink" | "disable">'}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:'Omit<Size, "xl" | "2xl">'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/badge/Dot.tsx#Dot"]={docgenInfo:Dot.__docgenInfo,name:"Dot",path:"src/components/badge/Dot.tsx#Dot"})}catch(__react_docgen_typescript_loader_error){}}}]);