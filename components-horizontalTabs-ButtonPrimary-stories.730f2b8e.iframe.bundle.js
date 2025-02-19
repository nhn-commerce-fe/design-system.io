/*! For license information please see components-horizontalTabs-ButtonPrimary-stories.730f2b8e.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_ncds_ui=self.webpackChunk_ncds_ui||[]).push([[8913],{"./src/components/horizontalTabs/ButtonPrimary.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ButtonPrimary:()=>ButtonPrimary_stories_ButtonPrimary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ButtonPrimary_stories});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),external_STORYBOOK_MODULE_CLIENT_API_=__webpack_require__("@storybook/client-api"),_mockData=__webpack_require__("./src/sections/pricingPageHeader/__mockData.ts"),HorizontalTabs={ButtonPrimary:__webpack_require__("./src/components/horizontalTabs/ButtonPrimary.tsx").$};const ButtonPrimary_stories={title:"Component/HorizontalTabs",component:HorizontalTabs.ButtonPrimary,parameters:{layout:"centered"},tags:["autodocs"]};var ButtonPrimary_stories_ButtonPrimary={render:function(){var _a=(0,external_STORYBOOK_MODULE_CLIENT_API_.useArgs)(),_b=_a[0],activeTabIndex=_b.activeTabIndex,items=_b.items,updateArgs=_a[1];return(0,jsx_runtime.jsx)(HorizontalTabs.ButtonPrimary,{activeTabIndex,items,onClick:function(idx){updateArgs({activeTabIndex:idx})}})},args:{items:_mockData.Ar,activeTabIndex:0},argTypes:{activeTabIndex:{control:"inline-radio",options:[0,1,2,3]},items:{control:"object"},onClick:{type:"function"}}};ButtonPrimary_stories_ButtonPrimary.parameters={...ButtonPrimary_stories_ButtonPrimary.parameters,docs:{...ButtonPrimary_stories_ButtonPrimary.parameters?.docs,source:{originalSource:"{\n  render: ButtonPrimaryTemplate,\n  args: {\n    items: __pricingMockBadgeItems,\n    activeTabIndex: 0\n  },\n  argTypes: {\n    activeTabIndex: {\n      control: 'inline-radio',\n      options: [0, 1, 2, 3]\n    },\n    items: {\n      control: 'object'\n    },\n    onClick: {\n      type: 'function'\n    }\n  }\n}",...ButtonPrimary_stories_ButtonPrimary.parameters?.docs?.source}}};const __namedExportsOrder=["ButtonPrimary"]},"../../node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes="",i=0;i<arguments.length;i++){var arg=arguments[i];arg&&(classes=appendClass(classes,parseValue(arg)))}return classes}function parseValue(arg){if("string"==typeof arg||"number"==typeof arg)return arg;if("object"!=typeof arg)return"";if(Array.isArray(arg))return classNames.apply(null,arg);if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]"))return arg.toString();var classes="";for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&(classes=appendClass(classes,key));return classes}function appendClass(value,newClass){return newClass?value?value+" "+newClass:value+newClass:value}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"../../node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("../../node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../../node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("../../node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./src/components/badge/Badge.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{E:()=>Badge});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),Badge=function(_a){var icon=_a.icon,_b=_a.size,size=void 0===_b?"md":_b,_c=_a.type,type=void 0===_c?"pill":_c,_d=_a.isOutline,isOutline=void 0!==_d&&_d,className=_a.className,_e=_a.color,color=void 0===_e?"violet":_e,label=_a.label,_f=_a.isDark,isDark=void 0!==_f&&_f;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("cds-badge",{"cds-badge--dark":isDark},"cds-badge--".concat(size),"cds-badge--".concat(type),"cds-badge--".concat(isDark?"dark-":"").concat(color),{"cds-badge--outline":!isDark&&isOutline},{"has-icon":icon},className),children:[icon&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("cds-badge__icon cds-badge__icon--".concat(color)),children:icon}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"cds-badge__label",children:label})]})};try{Badge.displayName="Badge",Badge.__docgenInfo={description:"",displayName:"Badge",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},color:{defaultValue:{value:"violet"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"neutral"'},{value:'"error"'},{value:'"warning"'},{value:'"success"'},{value:'"violet"'},{value:'"blue"'},{value:'"pink"'},{value:'"disabled"'},{value:'"secondary-gray-blue-300"'},{value:'"primary-red-300"'}]}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},type:{defaultValue:{value:"pill"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"square"'},{value:'"pill"'}]}},isOutline:{defaultValue:{value:"false"},description:"",name:"isOutline",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:'Omit<Size, "xl" | "2xl">'}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},isDark:{defaultValue:{value:"false"},description:"",name:"isDark",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/badge/Badge.tsx#Badge"]={docgenInfo:Badge.__docgenInfo,name:"Badge",path:"src/components/badge/Badge.tsx#Badge"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/horizontalTabs/ButtonPrimary.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{$:()=>ButtonPrimary});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_badge_Badge__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/badge/Badge.tsx"),ButtonPrimary=function(_a){var _b=void 0===_a?{}:_a,_c=_b.activeTabIndex,activeTabIndex=void 0===_c?0:_c,_d=_b.onClick,onClick=void 0===_d?function(){}:_d,_e=_b.items,items=void 0===_e?[]:_e;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("ul",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("cds-button-primary"),children:items.map((function(item,idx){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("cds-button-primary__btn",{active:activeTabIndex===idx}),onClick:function(){return onClick(idx)},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"cds-button-primary__btn-label",children:item.label}),item.discountAmt&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_badge_Badge__WEBPACK_IMPORTED_MODULE_2__.E,{label:"".concat(item.discountAmt,"%")})]})},"".concat(item.label,"-").concat(idx))}))})};try{ButtonPrimary.displayName="ButtonPrimary",ButtonPrimary.__docgenInfo={description:"",displayName:"ButtonPrimary",props:{onClick:{defaultValue:{value:"() => {}"},description:"",name:"onClick",required:!1,type:{name:"((idx: number) => void)"}},activeTabIndex:{defaultValue:{value:"0"},description:"",name:"activeTabIndex",required:!1,type:{name:"number"}},items:{defaultValue:{value:"[]"},description:"",name:"items",required:!1,type:{name:"PricingButtonItem[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/horizontalTabs/ButtonPrimary.tsx#ButtonPrimary"]={docgenInfo:ButtonPrimary.__docgenInfo,name:"ButtonPrimary",path:"src/components/horizontalTabs/ButtonPrimary.tsx#ButtonPrimary"})}catch(__react_docgen_typescript_loader_error){}},"./src/sections/pricingPageHeader/__mockData.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Nn:()=>__grayCardBadgeMockProps,jU:()=>__largeTable01MockProps,Ar:()=>__pricingMockBadgeItems,xs:()=>__pricingTierCardMockItems});var __mockPricingTierCardCommonSupportingItems=[{iconOptions:{color:"gray500",icon:"check"},text:"클라우드 서버"},{iconOptions:{color:"gray500",icon:"check"},text:"스토리지 무제한"},{iconOptions:{color:"gray500",icon:"check"},text:"트래픽 무제한"},{iconOptions:{color:"gray500",icon:"check"},text:"API 호출 무제한"},{iconOptions:{color:"gray500",icon:"check"},text:"전자결제(PG) 초기 등록비 무료"}],__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__pricingMockBadgeItems=[{label:"1개월"},{label:"3개월",discountAmt:5},{label:"6개월",discountAmt:10},{label:"12개월",discountAmt:20}],__pricingTierCardMockItems=[{headerOptions:{headingText:"basic",price:"무료",pricePerText:"/월"},contentOptions:{checkItems:[{title:"공통지원",items:__mockPricingTierCardCommonSupportingItems},{title:"지원",items:[{iconOptions:{color:"gray500",icon:"check"},text:"상품 등록 50건"},{iconOptions:{color:"gray500",icon:"check"},text:"디자인 스킨 추가"},{iconOptions:{color:"gray500",icon:"check"},text:"앱/디자인 스토어"},{iconOptions:{color:"gray500",icon:"check"},text:"모바일 관리자 앱"},{iconOptions:{color:"gray500",icon:"users01"},text:"운영자 계정 3개"}]}],ctaBtnOptions:{label:"무료로 시작하기",hierarchy:"secondary-color",href:"https://alpha-www.nhn-commerce.com/z/shopby/register2?solutionType=SHOPBY_PREMIUM&goodsType=NEW"},mobilePricingTableBtnOptions:{label:"자세히 보기",hierarchy:"secondary-gray"}}},{headerOptions:{headingText:"pro",headingBadgeLabel:"한달무료",price:33e3,pricePerText:"/월"},contentOptions:{checkItems:[{title:"공통지원",items:__mockPricingTierCardCommonSupportingItems},{title:"지원",items:[{iconOptions:{color:"gray500",icon:"plus"},text:"Basic 지원 기능"},{iconOptions:{color:"gray500",icon:"check"},text:"상품 등록 3만 건"},{iconOptions:{color:"gray500",icon:"check"},text:"쇼핑몰 추가"},{iconOptions:{color:"gray500",icon:"check"},text:"파트너 관리"},{iconOptions:{color:"gray500",icon:"user01"},text:"운영자 계정 10개"}]}],ctaBtnOptions:{label:"무료로 시작하기",hierarchy:"primary-red",href:"https://alpha-www.nhn-commerce.com/z/shopby/register2?solutionType=SHOPBY_PREMIUM&goodsType=NEW"},mobilePricingTableBtnOptions:{label:"자세히 보기",hierarchy:"secondary-gray"}}},{headerOptions:{headingText:"premium",headingBadgeLabel:"한달무료",price:99e3,pricePerText:"/월"},contentOptions:{checkItems:[{title:"공통지원",items:__mockPricingTierCardCommonSupportingItems},{title:"지원",items:[{iconOptions:{color:"gray500",icon:"plus"},text:"Pro 지원 기능"},{iconOptions:{color:"gray500",icon:"check"},text:"상품 등록 무제한"},{iconOptions:{color:"gray500",icon:"check"},text:"헤드리스"},{iconOptions:{color:"gray500",icon:"check"},text:"회원/적립금 연동 지원"},{iconOptions:{color:"gray500",icon:"check"},text:"전담 전문가 지원a"},{iconOptions:{color:"gray500",icon:"users01"},text:"운영자 계정 무제한"}]}],ctaBtnOptions:{label:"무료로 시작하기",hierarchy:"secondary-color",href:"https://alpha-www.nhn-commerce.com/z/shopby/register2?solutionType=SHOPBY_PREMIUM&goodsType=NEW"},mobilePricingTableBtnOptions:{label:"자세히 보기",hierarchy:"secondary-gray"}}},{headerOptions:{headingText:"이미 쇼핑몰이\n있으신가요?",counselingText:"상담부터 오픈까지\n1:1 맞춤으로 가이드 해드려요."},contentOptions:{checkItems:[{title:"이전 항목",items:[{iconOptions:{color:"gray500",icon:"check"},text:"상품 데이터"},{iconOptions:{color:"gray500",icon:"check"},text:"회원 데이터"},{iconOptions:{color:"gray500",icon:"check"},text:"게시판 데이터"},{iconOptions:{color:"gray500",icon:"check"},text:"주문 데이터"}]},{title:"이렇게 진행되요!",items:[{iconOptions:{color:"gray500",icon:"check"},text:"상담 신청"},{iconOptions:{color:"gray500",icon:"check"},text:"데이터 검수"},{iconOptions:{color:"gray500",icon:"check"},text:"데이터 이전 작업"},{iconOptions:{color:"gray500",icon:"check"},text:"데이터 검수와 오픈"}]}],ctaBtnOptions:{label:"shop by로 이전 상담하기",hierarchy:"secondary-gray",href:"https://alpha-www.nhn-commerce.com/echost/tech/third-party-intro.gd#open"}}}],__grayCardBadgeMockProps={headerOptions:{heading:"요금안내",description:"비즈니스 규모에 맞는 shop by를 선택하세요",items:__pricingMockBadgeItems},contentOptions:__pricingTierCardMockItems.map((function(item){return __assign(__assign({},item),{mobilePricingTable:{headerTitle:"shop by basic",actions:[{label:"무료로 시작하기",hierarchy:"secondary-color",href:"https://google.com",target:"_blank"}],listItems:[{items:[{item:"상품등록",valueType:"string",value:"50건"},{item:"디자인 구현",valueType:"string",value:"디자인 스킨"},{item:"쇼핑몰추가",valueType:"icon",valueIcon:"minus"},{item:"관리자 계정",valueType:"string",value:"3개"},{item:"파트너 등록",valueType:"icon",valueIcon:"minus"},{item:"도메인 연결",valueType:"string",value:"3개"},{item:"오픈 API 호출",valueType:"string",value:"3개"},{item:"파트너 관리",valueType:"icon",valueIcon:"minus"},{item:"회원/적립금 연동",valueType:"icon",valueIcon:"minus"}]},{headerTitle:"서버",items:[{item:"스토리지",valueType:"string",value:"무제한"},{item:"트래픽",valueType:"string",value:"무제한"}]},{headerTitle:"결제 서비스",items:[{item:"전자결제(PG)",valueType:"string",value:"KCP - 토스페이먼츠 - KG이니시스"},{item:"간편결제",valueType:"string",value:"네이버페이-페이코"},{item:"카드수수료(VAT별도)",valueType:"string",value:"1.9 ~ 3.4%"},{item:"해외결제",valueType:"string",value:"추후 지원"}]},{headerTitle:"스토어",items:[{item:"SNS 간편 로그인",valueType:"string",value:"네이버 - 카카오 - 페이코 - 페이스북"},{item:"SNS 문자발송",valueType:"icon",valueIcon:"check"},{item:"080 수신거부",valueType:"icon",valueIcon:"check"},{item:"카카오톡 알림톡",valueType:"icon",valueIcon:"check"}]},{headerTitle:"고객 지원",items:[{item:"업데이트(자동 패치)",valueType:"icon",valueIcon:"check"},{item:"24시간 관제 운영",valueType:"icon",valueIcon:"check"},{item:"동영상 가이드",valueType:"icon",valueIcon:"check"},{item:"기능-운영 노하우 가이드",valueType:"icon",valueIcon:"check"},{item:"해드림(쇼핑몰 제작 전담 매니저)",valueType:"icon",valueIcon:"check"},{item:"구축 컨설팅",valueType:"icon",valueIcon:"minus"}]}]}})})),isMobilePricingTableModalShowing:!1,activeTab:1},__largeTable01MockProps={bannerOptions:{text:"자세한 기능 안내가 필요하다면, 해드림 전문가를 만나보세요!",buttonOptions:{label:"바로가기",hierarchy:"secondary-gray",href:"https://alpha-www.nhn-commerce.com/promotion/hae-dream.gd"},iconOptions:{icon:"messageChatCircle",color:"neutral"}},columnHeaders:[{text:"shop by basic"},{text:"shop by pro"},{text:"shop by premium"}],tables:[{rows:[{header:{text:"상품등록"},items:[{text:"50 건"},{text:"3만 건"},{text:"무제한"}]},{header:{text:"디자인 구현"},items:[{text:"디자인 스킨"},{text:"디자인 스킨"},{text:"디자인 스킨 / 헤드리스"}]},{header:{text:"쇼핑몰 추가"},items:[{iconOptions:{icon:"minus",color:"gray300"}},{text:"기본 1개(추가몰 개당 33,000원/월)"},{text:"기본 1개(추가몰 개당 99,000원/월)"}]},{header:{text:"관리자 계정"},items:[{text:"3개"},{text:"10개"},{text:"무제한"}]},{header:{text:"파트너 등록"},items:[{iconOptions:{icon:"minus",color:"gray300"}},{text:"50개"},{text:"무제한"}]},{header:{text:"도메인 연결"},items:[{text:"5개"},{text:"5개"},{text:"5개"}]},{header:{text:"오픈 API 호출",tooltipText:"API를 통해 맞춤형 기능 확장과 자유로운 디자인 변형 가능"},items:[{text:"무제한"},{text:"무제한"},{text:"무제한"}]},{header:{text:"파트너 관리",tooltipText:"공급사별로 수수료와 할인 쿠폰 금액을 다르게 설정하여 편리한 자동 정산 가능"},items:[{iconOptions:{icon:"minus",color:"gray300"}},{iconOptions:{icon:"check",color:"gray300"}},{iconOptions:{icon:"check",color:"gray300"}}]},{header:{text:"회원/적립금 연동",tooltipText:"번거로운 회원 이전없이 API 기반의 회원 연동으로 기존 회원/적립금을 활용한 인앱 쇼핑몰 구현 가능"},items:[{iconOptions:{icon:"minus",color:"gray300"}},{iconOptions:{icon:"minus",color:"gray300"}},{iconOptions:{icon:"check",color:"gray300"}}]}]},{titleOption:{title:"서버"},rows:[{header:{text:"스토리지"},items:[{text:"무제한"},{text:"무제한"},{text:"무제한"}]},{header:{text:"트래픽"},items:[{text:"무제한"},{text:"무제한"},{text:"무제한"}]}]},{titleOption:{title:"결제 서비스"},rows:[{header:{text:"전자결제 (PG)",badgeText:"EVENT"},items:[{text:"KCP · 토스페이먼츠· KG이니시스\t"},{text:"KCP · 토스페이먼츠· KG이니시스"},{text:"KCP · 토스페이먼츠· KG이니시스· 나이스페이먼츠"}]},{header:{text:"간편결제"},items:[{text:"네이버페이 · 페이코"},{text:"네이버페이 · 페이코"},{text:"네이버페이 · 카카오페이 · 페이코"}]},{header:{text:"카드 수수료(VAT별도)"},items:[{text:"1.9~3.4%"},{text:"1.9~3.4%"},{text:"2.0~3.5%"}]},{header:{text:"해외결제"},items:[{text:"추후 지원"},{text:"추후 지원"},{text:"추후 지원"}]}]},{titleOption:{title:"스토어",linkLabel:"자세히보기",linkHref:"https://alpha-apps.nhn-commerce.com/?_gl=1*1krpve9*_ga*NTA5OTc1NDI5LjE2OTU2MDQyMTU.*_ga_Z1WW9QB68M*MTY5NzE4MTY3Ni4zMi4xLjE2OTcxODE3MDMuMzMuMC4w"},rows:[{header:{text:"SNS 간편 로그인"},items:[{text:"네이버 · 카카오 · 페이코 · 페이스북"},{text:"네이버 · 카카오 · 페이코 · 페이스북"},{text:"네이버 · 카카오 · 페이코 · 페이스북· 라인"}]},{header:{text:"SMS 문자발송"},items:[{iconOptions:{icon:"check",color:"gray300"}},{iconOptions:{icon:"check",color:"gray300"}},{iconOptions:{icon:"check",color:"gray300"}}]},{header:{text:"080 수신거부"},items:[{iconOptions:{icon:"check",color:"gray300"}},{iconOptions:{icon:"check",color:"gray300"}},{iconOptions:{icon:"check",color:"gray300"}}]},{header:{text:"카카오톡 알림톡"},items:[{iconOptions:{icon:"check",color:"gray300"}},{iconOptions:{icon:"check",color:"gray300"}},{iconOptions:{icon:"check",color:"gray300"}}]}]},{titleOption:{title:"고객 지원"},rows:[{header:{text:"업데이트(자동 패치)",tooltipText:"최신 업데이트 되는 기능의 자동 적용 가능"},items:[{iconOptions:{icon:"check",color:"gray300"}},{iconOptions:{icon:"check",color:"gray300"}},{iconOptions:{icon:"check",color:"gray300"}}]},{header:{text:"24시간 관제 운영"},items:[{iconOptions:{icon:"check",color:"gray300"}},{iconOptions:{icon:"check",color:"gray300"}},{iconOptions:{icon:"check",color:"gray300"}}]},{header:{text:"동영상 가이드"},items:[{iconOptions:{icon:"check",color:"gray300"}},{iconOptions:{icon:"check",color:"gray300"}},{iconOptions:{icon:"check",color:"gray300"}}]},{header:{text:"기능ㆍ운영 노하우 가이드"},items:[{iconOptions:{icon:"check",color:"gray300"}},{iconOptions:{icon:"check",color:"gray300"}},{iconOptions:{icon:"check",color:"gray300"}}]},{header:{text:"해드림(쇼핑몰 제작 전담 매니저)",tooltipText:"해드림 서비스"},items:[{iconOptions:{icon:"check",color:"gray300"}},{iconOptions:{icon:"check",color:"gray300"}},{iconOptions:{icon:"check",color:"gray300"}}]},{header:{text:"구축 컨설팅"},items:[{iconOptions:{icon:"minus",color:"gray300"}},{iconOptions:{icon:"minus",color:"gray300"}},{text:"구축 맞춤 컨설팅 + 전용 핫라인"}]}]}],ctaButtons:[{label:"무료로 시작하기",hierarchy:"secondary-color",href:"https://alpha-www.nhn-commerce.com/z/shopby/register2?solutionType=SHOPBY_PREMIUM&goodsType=NEW"},{label:"무료로 시작하기",hierarchy:"primary-red",href:"https://alpha-www.nhn-commerce.com/z/shopby/register2?solutionType=SHOPBY_PREMIUM&goodsType=NEW"},{label:"무료로 시작하기",hierarchy:"secondary-color",href:"https://alpha-www.nhn-commerce.com/z/shopby/register2?solutionType=SHOPBY_PREMIUM&goodsType=NEW"}]}}}]);