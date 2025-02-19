/*! For license information please see components-modal-ContentScrolling-stories.fa43419d.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_ncds_ui=self.webpackChunk_ncds_ui||[]).push([[276],{"./src/components/modal/ContentScrolling.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ContentScrolling2:()=>ContentScrolling2,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_Modal__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/modal/Modal.tsx"),_ContentScrolling__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/modal/ContentScrolling.tsx"),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t};const __WEBPACK_DEFAULT_EXPORT__={title:"Component/Modal/ContentScrolling2",parameters:{layout:"centered"},argTypes:{}};var tooltipIcon={icon:"helpCircle",size:16,color:"gray300",strokeWidth:"1.3333"},icon={icon:"check",color:"gray300"},ContentScrolling2={render:function(_a){var open=_a.open,props=__rest(_a,["open"]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Modal__WEBPACK_IMPORTED_MODULE_1__.a,{open,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ContentScrolling__WEBPACK_IMPORTED_MODULE_2__.g,__assign({},props))})},args:{open:!0,header:{text:"Select plan",hasPaddingBottom:!0,hasDivider:!0,showCloseButton:!0},itemsList:[{header:{left:{value:"서비스 비용",tooltipIcon,tooltipText:"최초 1회 지불 후 쇼핑몰 오픈 시점까지 서비스 제공"},right:{value:"오른쪽 해딩",tooltipIcon}},items:[{left:{value:"Analytics"},right:{value:"Basic",icon}},{left:{value:"Export reports",tooltipIcon},right:{value:"Up to 10 users",icon}},{left:{value:"Scheduled reports",tooltipIcon},right:{value:"Up to 10 users",icon}},{left:{value:"API accesss",tooltipIcon},right:{value:"Up to 10 users",icon}},{left:{value:"Advanced reports",tooltipIcon},right:{value:"Up to 10 users",icon}},{left:{value:"Saved reports",tooltipIcon},right:{value:"Up to 10 users",icon}},{left:{value:"Customer properties",tooltipIcon},right:{value:"Up to 10 users",icon}},{left:{value:"Custom fields",tooltipIcon},right:{value:"Up to 10 users",icon}}]}],actions:[{label:"닫기",hierarchy:"secondary-gray"},{label:"무료로 시작",hierarchy:"primary-red"}]}};ContentScrolling2.parameters={...ContentScrolling2.parameters,docs:{...ContentScrolling2.parameters?.docs,source:{originalSource:"{\n  render: ContentScrolling2Template,\n  args: {\n    open: true,\n    header: {\n      text: 'Select plan',\n      hasPaddingBottom: true,\n      hasDivider: true,\n      showCloseButton: true\n    },\n    itemsList: [{\n      header: {\n        left: {\n          value: '서비스 비용',\n          tooltipIcon,\n          tooltipText: '최초 1회 지불 후 쇼핑몰 오픈 시점까지 서비스 제공'\n        },\n        right: {\n          value: '오른쪽 해딩',\n          tooltipIcon\n        }\n      },\n      items: [{\n        left: {\n          value: 'Analytics'\n        },\n        right: {\n          value: 'Basic',\n          icon\n        }\n      }, {\n        left: {\n          value: 'Export reports',\n          tooltipIcon\n        },\n        right: {\n          value: 'Up to 10 users',\n          icon\n        }\n      }, {\n        left: {\n          value: 'Scheduled reports',\n          tooltipIcon\n        },\n        right: {\n          value: 'Up to 10 users',\n          icon\n        }\n      }, {\n        left: {\n          value: 'API accesss',\n          tooltipIcon\n        },\n        right: {\n          value: 'Up to 10 users',\n          icon\n        }\n      }, {\n        left: {\n          value: 'Advanced reports',\n          tooltipIcon\n        },\n        right: {\n          value: 'Up to 10 users',\n          icon\n        }\n      }, {\n        left: {\n          value: 'Saved reports',\n          tooltipIcon\n        },\n        right: {\n          value: 'Up to 10 users',\n          icon\n        }\n      }, {\n        left: {\n          value: 'Customer properties',\n          tooltipIcon\n        },\n        right: {\n          value: 'Up to 10 users',\n          icon\n        }\n      }, {\n        left: {\n          value: 'Custom fields',\n          tooltipIcon\n        },\n        right: {\n          value: 'Up to 10 users',\n          icon\n        }\n      }]\n    }],\n    actions: [{\n      label: '닫기',\n      hierarchy: 'secondary-gray'\n    }, {\n      label: '무료로 시작',\n      hierarchy: 'primary-red'\n    }]\n  }\n}",...ContentScrolling2.parameters?.docs?.source}}};const __namedExportsOrder=["ContentScrolling2"]},"../../node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes="",i=0;i<arguments.length;i++){var arg=arguments[i];arg&&(classes=appendClass(classes,parseValue(arg)))}return classes}function parseValue(arg){if("string"==typeof arg||"number"==typeof arg)return arg;if("object"!=typeof arg)return"";if(Array.isArray(arg))return classNames.apply(null,arg);if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]"))return arg.toString();var classes="";for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&(classes=appendClass(classes,key));return classes}function appendClass(value,newClass){return newClass?value?value+" "+newClass:value+newClass:value}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"../../node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("../../node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../../node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("../../node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./src/components/button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{$n:()=>Button,G:()=>svgSize,u4:()=>ButtonBase});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/react/index.js"),_svg_SvgIcon__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/svg/SvgIcon.tsx"),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},ButtonBase=(0,react__WEBPACK_IMPORTED_MODULE_2__.forwardRef)((function(_a,ref){var href=_a.href,children=_a.children,props=__rest(_a,["href","children"]),BaseComponent=href?"a":"button";return(0,react__WEBPACK_IMPORTED_MODULE_2__.createElement)(BaseComponent,__assign({href,ref},props),children)})),svgSize={xxs:12,xs:16,sm:20,md:20,lg:20,xl:20,"2xl":24},Button=(0,react__WEBPACK_IMPORTED_MODULE_2__.forwardRef)((function(_a,ref){var _b=_a.useSpan,useSpan=void 0!==_b&&_b,leadingIcon=_a.leadingIcon,trailingIcon=_a.trailingIcon,_c=_a.onlyIcon,onlyIcon=void 0!==_c&&_c,_d=_a.href,href=void 0===_d?"":_d,label=_a.label,hierarchy=_a.hierarchy,disabled=_a.disabled,_e=_a.className,className=void 0===_e?"":_e,fullSized=_a.fullSized,_f=_a.size,size=void 0===_f?"lg":_f,iconColor=_a.iconColor,_g=_a.hasUnderline,hasUnderline=void 0!==_g&&_g,children=_a.children,target=_a.target,_j=(_a.visible,_a.iconStrokeWidth),iconStrokeWidth=void 0===_j?"2":_j,_k=_a.iconFill,iconFill=void 0===_k?"none":_k,props=__rest(_a,["useSpan","leadingIcon","trailingIcon","onlyIcon","href","label","hierarchy","disabled","className","fullSized","size","iconColor","hasUnderline","children","target","visible","iconStrokeWidth","iconFill"]),_l=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),queryParams=_l[0],setQueryParams=_l[1],stateClassName={"is-full":fullSized,"is-disable":disabled,"has-underline":hasUnderline};return(0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)((function(){var _a;setQueryParams(new URLSearchParams((null===(_a=null===window||void 0===window?void 0:window.location)||void 0===_a?void 0:_a.search)||""))}),[]),useSpan?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("cds-btn","cds-btn--".concat(size),{"only-icon":onlyIcon,"is-disable":disabled},className,stateClassName,hierarchy&&"cds-btn--".concat(hierarchy)),ref,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[leadingIcon&&("string"==typeof leadingIcon?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_svg_SvgIcon__WEBPACK_IMPORTED_MODULE_3__.A,{icon:leadingIcon,size:svgSize[size],color:iconColor,strokeWidth:iconStrokeWidth,fill:iconFill}):{leadingIcon}),!onlyIcon&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"cds-btn__label",children:label}),trailingIcon&&("string"==typeof trailingIcon?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_svg_SvgIcon__WEBPACK_IMPORTED_MODULE_3__.A,{icon:trailingIcon,size:svgSize[size],color:iconColor,strokeWidth:iconStrokeWidth,fill:iconFill}):{trailingIcon}),children]})}):href?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ButtonBase,__assign({href,className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("cds-btn","cds-btn--".concat(size),{"only-icon":onlyIcon},className,stateClassName,hierarchy&&"cds-btn--".concat(hierarchy)),disabled,onClick:function(e){e.preventDefault(),"true"!==(null==queryParams?void 0:queryParams.get("isRemote"))&&"_blank"!==target&&window.top?window.top.location.href=href:window.open(href)},target},props,{ref,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[leadingIcon&&("string"==typeof leadingIcon?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_svg_SvgIcon__WEBPACK_IMPORTED_MODULE_3__.A,{icon:leadingIcon,size:svgSize[size],color:iconColor,strokeWidth:iconStrokeWidth,fill:iconFill}):{leadingIcon}),!onlyIcon&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"cds-btn__label",children:label}),trailingIcon&&("string"==typeof trailingIcon?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_svg_SvgIcon__WEBPACK_IMPORTED_MODULE_3__.A,{icon:trailingIcon,size:svgSize[size],color:iconColor,strokeWidth:iconStrokeWidth,fill:iconFill}):{trailingIcon}),children]})})):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ButtonBase,__assign({className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("cds-btn","cds-btn--".concat(size),{"only-icon":onlyIcon},className,stateClassName,hierarchy&&"cds-btn--".concat(hierarchy)),disabled},props,{ref,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[leadingIcon&&("string"==typeof leadingIcon?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_svg_SvgIcon__WEBPACK_IMPORTED_MODULE_3__.A,{icon:leadingIcon,size:svgSize[size],color:iconColor,strokeWidth:iconStrokeWidth,fill:iconFill}):leadingIcon),!onlyIcon&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"cds-btn__label",children:label}),trailingIcon&&("string"==typeof trailingIcon?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_svg_SvgIcon__WEBPACK_IMPORTED_MODULE_3__.A,{icon:trailingIcon,size:svgSize[size],color:iconColor,strokeWidth:iconStrokeWidth,fill:iconFill}):trailingIcon),children]})}))}));try{ButtonBase.displayName="ButtonBase",ButtonBase.__docgenInfo={description:"",displayName:"ButtonBase",props:{href:{defaultValue:{value:""},description:"",name:"href",required:!1,type:{name:"string"}},target:{defaultValue:null,description:"",name:"target",required:!1,type:{name:"enum",value:[{value:'"_self"'},{value:'"_blank"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/button/Button.tsx#ButtonBase"]={docgenInfo:ButtonBase.__docgenInfo,name:"ButtonBase",path:"src/components/button/Button.tsx#ButtonBase"})}catch(__react_docgen_typescript_loader_error){}try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{useSpan:{defaultValue:{value:"false"},description:"",name:"useSpan",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},fullSized:{defaultValue:null,description:"",name:"fullSized",required:!1,type:{name:"boolean"}},hierarchy:{defaultValue:null,description:"",name:"hierarchy",required:!1,type:{name:"enum",value:[{value:'"primary-red"'},{value:'"primary-blue"'},{value:'"tertiary-gray"'},{value:'"secondary-color"'},{value:'"secondary-gray"'},{value:'"tertiary-color"'},{value:'"link-gray"'},{value:'"link-color"'}]}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},leadingIcon:{defaultValue:null,description:"",name:"leadingIcon",required:!1,type:{name:"ReactNode"}},trailingIcon:{defaultValue:null,description:"",name:"trailingIcon",required:!1,type:{name:"ReactNode"}},onlyIcon:{defaultValue:{value:"false"},description:"",name:"onlyIcon",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"lg"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"lg"'},{value:'"md"'},{value:'"xxs"'},{value:'"xs"'},{value:'"sm"'},{value:'"xl"'},{value:'"2xl"'}]}},hasUnderline:{defaultValue:{value:"false"},description:"",name:"hasUnderline",required:!1,type:{name:"boolean"}},iconColor:{defaultValue:null,description:"",name:"iconColor",required:!1,type:{name:"enum",value:[{value:'"secondary-gray-blue-300"'},{value:'"white"'},{value:'"black"'},{value:'"secondary-gray-blue-50"'},{value:'"currentColor"'},{value:'"gray200"'},{value:'"gray300"'},{value:'"gray400"'},{value:'"gray500"'},{value:'"gray600"'},{value:'"gray700"'},{value:'"blue500"'},{value:'"blue600"'},{value:'"red500"'},{value:'"red600"'},{value:'"orange500"'},{value:'"orange600"'},{value:'"green500"'},{value:'"green600"'},{value:'"pink100"'},{value:'"pink600"'},{value:'"yellow600"'},{value:'"violet600"'},{value:'"secondary-gray-blue-100"'},{value:'"secondary-gray-blue-200"'},{value:'"secondary-gray-blue-400"'},{value:'"secondary-gray-blue-450"'},{value:'"secondary-gray-blue-500"'},{value:'"secondary-gray-blue-600"'},{value:'"secondary-gray-blue-700"'}]}},visible:{defaultValue:{value:"true"},description:"",name:"visible",required:!1,type:{name:"boolean"}},iconFill:{defaultValue:{value:"none"},description:"",name:"iconFill",required:!1,type:{name:"string"}},iconStrokeWidth:{defaultValue:{value:"2"},description:"",name:"iconStrokeWidth",required:!1,type:{name:"string"}},href:{defaultValue:{value:""},description:"",name:"href",required:!1,type:{name:"string"}},target:{defaultValue:null,description:"",name:"target",required:!1,type:{name:"enum",value:[{value:'"_self"'},{value:'"_blank"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/modal/ContentScrolling.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{g:()=>ModalContentScrolling2});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),SvgIcon=__webpack_require__("./src/components/svg/SvgIcon.tsx"),Tooltip2=__webpack_require__("./src/components/tooltip/Tooltip2.tsx"),HorizontalFillContainer=__webpack_require__("./src/components/modal/action/HorizontalFillContainer.tsx"),classnames=__webpack_require__("../../node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),Button=__webpack_require__("./src/components/button/Button.tsx"),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},HorizontalLeftAligned=function(_a){var text=_a.text,supportingText=_a.supportingText,showIcon=_a.showIcon,showCloseButton=_a.showCloseButton,icon=_a.icon,hasPaddingBottom=_a.hasPaddingBottom,hasDivider=_a.hasDivider,onClose=_a.onClose;return(0,jsx_runtime.jsxs)("header",{className:classnames_default()("cds-modal__header","cds-horizontal-left-aligned",{"cds-modal__header-divider":hasDivider}),children:[showIcon&&(0,jsx_runtime.jsx)(SvgIcon.A,__assign({},icon,{icon:"alertCircle"})),text&&(0,jsx_runtime.jsx)("h2",{className:"cds-modal__header-text",children:text}),supportingText&&(0,jsx_runtime.jsx)("p",{className:"cds-modal__header-supporting-text",children:supportingText}),hasPaddingBottom&&(0,jsx_runtime.jsx)("div",{className:"cds-horizontal-left-aligned__padding-bottom"}),showCloseButton&&(0,jsx_runtime.jsx)(Button.$n,{className:"cds-modal__header-close",label:"닫기",onClick:onClose,leadingIcon:"xClose",onlyIcon:!0})]})};try{HorizontalLeftAligned.displayName="HorizontalLeftAligned",HorizontalLeftAligned.__docgenInfo={description:"",displayName:"HorizontalLeftAligned",props:{text:{defaultValue:null,description:"",name:"text",required:!1,type:{name:"string"}},supportingText:{defaultValue:null,description:"",name:"supportingText",required:!1,type:{name:"string"}},showIcon:{defaultValue:null,description:"",name:"showIcon",required:!1,type:{name:"boolean"}},showCloseButton:{defaultValue:null,description:"",name:"showCloseButton",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"IconProps"}},hasPaddingBottom:{defaultValue:null,description:"",name:"hasPaddingBottom",required:!1,type:{name:"boolean"}},hasDivider:{defaultValue:null,description:"",name:"hasDivider",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/modal/header/HorizontalLeftAligned.tsx#HorizontalLeftAligned"]={docgenInfo:HorizontalLeftAligned.__docgenInfo,name:"HorizontalLeftAligned",path:"src/components/modal/header/HorizontalLeftAligned.tsx#HorizontalLeftAligned"})}catch(__react_docgen_typescript_loader_error){}var ModalHeader=Object.assign((function(){return null}),{HorizontalLeftAligned}),ContentScrolling_assign=function(){return ContentScrolling_assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},ContentScrolling_assign.apply(this,arguments)},ModalContentScrolling2=function(_a){var modalHeader=_a.header,itemsList=_a.itemsList,_b=_a.actions,actions=void 0===_b?[]:_b;return(0,jsx_runtime.jsxs)("div",{className:"cds-content-scrolling",children:[(0,jsx_runtime.jsx)(ModalHeader.HorizontalLeftAligned,ContentScrolling_assign({},modalHeader)),(0,jsx_runtime.jsx)("div",{className:"cds-content-scrolling__content",children:null==itemsList?void 0:itemsList.map((function(_a,idx){var _b,_c,header=_a.header,items=_a.items,leftHeader=null==header?void 0:header.left,rightHeader=null==header?void 0:header.right,hasLeftHeader=!!(null==leftHeader?void 0:leftHeader.value),hasRightHeader=!!(null==rightHeader?void 0:rightHeader.value),hasHeader=hasLeftHeader||hasRightHeader;return(0,jsx_runtime.jsxs)("ul",{className:"cds-content-scrolling__items-list-wrap",children:[hasHeader&&(0,jsx_runtime.jsxs)("li",{className:"cds-content-scrolling__items-header-wrap",children:[hasLeftHeader&&(0,jsx_runtime.jsxs)("div",{className:"cds-content-scrolling__items-header",children:[(0,jsx_runtime.jsx)("em",{children:leftHeader.value}),(null===(_b=leftHeader.tooltipIcon)||void 0===_b?void 0:_b.icon)&&leftHeader.tooltipText&&(0,jsx_runtime.jsx)(Tooltip2.s,{className:"cds-content-scrolling__tooltip-icon",arrow:"bottom-left",icon:leftHeader.tooltipIcon,children:leftHeader.tooltipText})]}),hasRightHeader&&(0,jsx_runtime.jsxs)("div",{className:"cds-content-scrolling__items-header",children:[(0,jsx_runtime.jsx)("em",{children:rightHeader.value}),(null===(_c=rightHeader.tooltipIcon)||void 0===_c?void 0:_c.icon)&&rightHeader.tooltipText&&(0,jsx_runtime.jsx)(Tooltip2.s,{className:"cds-content-scrolling__tooltip-icon",arrow:"bottom-left",icon:rightHeader.tooltipIcon,children:rightHeader.tooltipText})]})]}),null==items?void 0:items.map((function(_a,itemIdx){var _b,_c,left=_a.left,right=_a.right,hasLeftItem=null==left?void 0:left.value,hasRightItem=(null==right?void 0:right.value)||(null==right?void 0:right.icon);return(0,jsx_runtime.jsxs)("li",{className:"cds-content-scrolling__item-wrap",children:[hasLeftItem&&(0,jsx_runtime.jsxs)("div",{className:"cds-content-scrolling__item left",children:[(0,jsx_runtime.jsx)("em",{children:null==left?void 0:left.value}),(null===(_b=left.tooltipIcon)||void 0===_b?void 0:_b.icon)&&left.tooltipText&&(0,jsx_runtime.jsx)(Tooltip2.s,{className:"cds-content-scrolling__tooltip-icon",arrow:"bottom-left",icon:left.tooltipIcon,children:left.tooltipText})]}),hasRightItem&&(0,jsx_runtime.jsxs)("div",{className:"cds-content-scrolling__item right",children:[(null===(_c=right.icon)||void 0===_c?void 0:_c.icon)&&(0,jsx_runtime.jsx)(SvgIcon.A,ContentScrolling_assign({},right.icon)),(0,jsx_runtime.jsx)("em",{children:right.value})]})]},"".concat(idx,"-").concat(itemIdx))}))]},idx)}))}),(0,jsx_runtime.jsx)(HorizontalFillContainer.F,{hasDivider:!0,actions})]})};try{ModalContentScrolling2.displayName="ModalContentScrolling2",ModalContentScrolling2.__docgenInfo={description:"",displayName:"ModalContentScrolling2",props:{header:{defaultValue:null,description:"",name:"header",required:!1,type:{name:"ModalContentScrolling2Header"}},itemsList:{defaultValue:null,description:"",name:"itemsList",required:!1,type:{name:"Items[]"}},actions:{defaultValue:{value:"[]"},description:"",name:"actions",required:!1,type:{name:"ActionProps[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/modal/ContentScrolling.tsx#ModalContentScrolling2"]={docgenInfo:ModalContentScrolling2.__docgenInfo,name:"ModalContentScrolling2",path:"src/components/modal/ContentScrolling.tsx#ModalContentScrolling2"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/modal/Modal.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{a:()=>Modal});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),react_dom__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/react-dom/index.js"),Modal=function(_a){var open=_a.open,children=_a.children,className=_a.className;return open?(0,react_dom__WEBPACK_IMPORTED_MODULE_2__.createPortal)((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("cds-modal",className),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"cds-modal-backdrop"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"cds-section-wrap cds-modal-box",children})]}),document.body):null};try{Modal.displayName="Modal",Modal.__docgenInfo={description:"",displayName:"Modal",props:{open:{defaultValue:null,description:"",name:"open",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/modal/Modal.tsx#Modal"]={docgenInfo:Modal.__docgenInfo,name:"Modal",path:"src/components/modal/Modal.tsx#Modal"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/modal/action/HorizontalFillContainer.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{F:()=>HorizontalFillContainer});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_button_Button__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/button/Button.tsx"),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},HorizontalFillContainer=function(_a){var hasDivider=_a.hasDivider,actions=_a.actions;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"cds-horizontal-fill-container",children:[hasDivider&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"cds-modal__actions-divider"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"cds-modal__actions-btn-wrap",children:null==actions?void 0:actions.map((function(_a){var label=_a.label,hierarchy=_a.hierarchy,_b=_a.size,size=void 0===_b?"lg":_b,onClick=_a.onClick,props=__rest(_a,["label","hierarchy","size","onClick"]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_button_Button__WEBPACK_IMPORTED_MODULE_1__.$n,__assign({label,hierarchy,size,onClick},props))}))})]})};try{HorizontalFillContainer.displayName="HorizontalFillContainer",HorizontalFillContainer.__docgenInfo={description:"",displayName:"HorizontalFillContainer",props:{actions:{defaultValue:null,description:"",name:"actions",required:!0,type:{name:"ButtonProps[]"}},hasDivider:{defaultValue:null,description:"",name:"hasDivider",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/modal/action/HorizontalFillContainer.tsx#HorizontalFillContainer"]={docgenInfo:HorizontalFillContainer.__docgenInfo,name:"HorizontalFillContainer",path:"src/components/modal/action/HorizontalFillContainer.tsx#HorizontalFillContainer"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/tooltip/Tooltip2.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{s:()=>Tooltip2});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_svg_SvgIcon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/svg/SvgIcon.tsx"),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},Tooltip2=function(_a){var _b,className=_a.className,_c=_a.arrow,arrow=void 0===_c?"bottom-center":_c,icon=_a.icon,children=_a.children;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("cds-tooltip2","cds-tooltip2--".concat(arrow),"cds-tooltip2--size-".concat(null!==(_b=icon.size)&&void 0!==_b?_b:24),className),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{type:"button",className:"cds-tooltip2__btn",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_svg_SvgIcon__WEBPACK_IMPORTED_MODULE_2__.A,__assign({className:"cds-tooltip2__icon"},icon))}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"cds-tooltip2__content",children:[" ",children]})]})};try{Tooltip2.displayName="Tooltip2",Tooltip2.__docgenInfo={description:"",displayName:"Tooltip2",props:{icon:{defaultValue:null,description:"",name:"icon",required:!0,type:{name:"IconProps"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},supportingText:{defaultValue:null,description:"",name:"supportingText",required:!1,type:{name:"string"}},arrow:{defaultValue:{value:"bottom-center"},description:"",name:"arrow",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"bottom-center"'},{value:'"bottom-left"'},{value:'"bottom-right"'},{value:'"top-center"'},{value:'"right"'}]}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"dark"'},{value:'"light"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/tooltip/Tooltip2.tsx#Tooltip2"]={docgenInfo:Tooltip2.__docgenInfo,name:"Tooltip2",path:"src/components/tooltip/Tooltip2.tsx#Tooltip2"})}catch(__react_docgen_typescript_loader_error){}}}]);