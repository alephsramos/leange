function r2(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const a=Object.getOwnPropertyDescriptor(r,i);a&&Object.defineProperty(e,i,a.get?a:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();var Km=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Hr(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Xm={exports:{}},ol={},Qm={exports:{}},ie={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oo=Symbol.for("react.element"),i2=Symbol.for("react.portal"),a2=Symbol.for("react.fragment"),o2=Symbol.for("react.strict_mode"),s2=Symbol.for("react.profiler"),l2=Symbol.for("react.provider"),c2=Symbol.for("react.context"),d2=Symbol.for("react.forward_ref"),u2=Symbol.for("react.suspense"),f2=Symbol.for("react.memo"),p2=Symbol.for("react.lazy"),bp=Symbol.iterator;function h2(e){return e===null||typeof e!="object"?null:(e=bp&&e[bp]||e["@@iterator"],typeof e=="function"?e:null)}var Zm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Jm=Object.assign,eg={};function Bi(e,t,n){this.props=e,this.context=t,this.refs=eg,this.updater=n||Zm}Bi.prototype.isReactComponent={};Bi.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Bi.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function tg(){}tg.prototype=Bi.prototype;function ku(e,t,n){this.props=e,this.context=t,this.refs=eg,this.updater=n||Zm}var Tu=ku.prototype=new tg;Tu.constructor=ku;Jm(Tu,Bi.prototype);Tu.isPureReactComponent=!0;var Sp=Array.isArray,ng=Object.prototype.hasOwnProperty,Au={current:null},rg={key:!0,ref:!0,__self:!0,__source:!0};function ig(e,t,n){var r,i={},a=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(a=""+t.key),t)ng.call(t,r)&&!rg.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var l=Array(s),d=0;d<s;d++)l[d]=arguments[d+2];i.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:oo,type:e,key:a,ref:o,props:i,_owner:Au.current}}function m2(e,t){return{$$typeof:oo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Eu(e){return typeof e=="object"&&e!==null&&e.$$typeof===oo}function g2(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var jp=/\/+/g;function Yl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?g2(""+e.key):t.toString(36)}function Uo(e,t,n,r,i){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(a){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case oo:case i2:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+Yl(o,0):r,Sp(i)?(n="",e!=null&&(n=e.replace(jp,"$&/")+"/"),Uo(i,t,n,"",function(d){return d})):i!=null&&(Eu(i)&&(i=m2(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(jp,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",Sp(e))for(var s=0;s<e.length;s++){a=e[s];var l=r+Yl(a,s);o+=Uo(a,t,n,l,i)}else if(l=h2(e),typeof l=="function")for(e=l.call(e),s=0;!(a=e.next()).done;)a=a.value,l=r+Yl(a,s++),o+=Uo(a,t,n,l,i);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function xo(e,t,n){if(e==null)return e;var r=[],i=0;return Uo(e,r,"","",function(a){return t.call(n,a,i++)}),r}function v2(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ft={current:null},Wo={transition:null},x2={ReactCurrentDispatcher:ft,ReactCurrentBatchConfig:Wo,ReactCurrentOwner:Au};function ag(){throw Error("act(...) is not supported in production builds of React.")}ie.Children={map:xo,forEach:function(e,t,n){xo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return xo(e,function(){t++}),t},toArray:function(e){return xo(e,function(t){return t})||[]},only:function(e){if(!Eu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ie.Component=Bi;ie.Fragment=a2;ie.Profiler=s2;ie.PureComponent=ku;ie.StrictMode=o2;ie.Suspense=u2;ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=x2;ie.act=ag;ie.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Jm({},e.props),i=e.key,a=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,o=Au.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)ng.call(t,l)&&!rg.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){s=Array(l);for(var d=0;d<l;d++)s[d]=arguments[d+2];r.children=s}return{$$typeof:oo,type:e.type,key:i,ref:a,props:r,_owner:o}};ie.createContext=function(e){return e={$$typeof:c2,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:l2,_context:e},e.Consumer=e};ie.createElement=ig;ie.createFactory=function(e){var t=ig.bind(null,e);return t.type=e,t};ie.createRef=function(){return{current:null}};ie.forwardRef=function(e){return{$$typeof:d2,render:e}};ie.isValidElement=Eu;ie.lazy=function(e){return{$$typeof:p2,_payload:{_status:-1,_result:e},_init:v2}};ie.memo=function(e,t){return{$$typeof:f2,type:e,compare:t===void 0?null:t}};ie.startTransition=function(e){var t=Wo.transition;Wo.transition={};try{e()}finally{Wo.transition=t}};ie.unstable_act=ag;ie.useCallback=function(e,t){return ft.current.useCallback(e,t)};ie.useContext=function(e){return ft.current.useContext(e)};ie.useDebugValue=function(){};ie.useDeferredValue=function(e){return ft.current.useDeferredValue(e)};ie.useEffect=function(e,t){return ft.current.useEffect(e,t)};ie.useId=function(){return ft.current.useId()};ie.useImperativeHandle=function(e,t,n){return ft.current.useImperativeHandle(e,t,n)};ie.useInsertionEffect=function(e,t){return ft.current.useInsertionEffect(e,t)};ie.useLayoutEffect=function(e,t){return ft.current.useLayoutEffect(e,t)};ie.useMemo=function(e,t){return ft.current.useMemo(e,t)};ie.useReducer=function(e,t,n){return ft.current.useReducer(e,t,n)};ie.useRef=function(e){return ft.current.useRef(e)};ie.useState=function(e){return ft.current.useState(e)};ie.useSyncExternalStore=function(e,t,n){return ft.current.useSyncExternalStore(e,t,n)};ie.useTransition=function(){return ft.current.useTransition()};ie.version="18.3.1";Qm.exports=ie;var j=Qm.exports;const J=Hr(j),y2=r2({__proto__:null,default:J},[j]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var w2=j,b2=Symbol.for("react.element"),S2=Symbol.for("react.fragment"),j2=Object.prototype.hasOwnProperty,C2=w2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,k2={key:!0,ref:!0,__self:!0,__source:!0};function og(e,t,n){var r,i={},a=null,o=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)j2.call(t,r)&&!k2.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:b2,type:e,key:a,ref:o,props:i,_owner:C2.current}}ol.Fragment=S2;ol.jsx=og;ol.jsxs=og;Xm.exports=ol;var c=Xm.exports,sg={exports:{}},Et={},lg={exports:{}},cg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(M,V){var $=M.length;M.push(V);e:for(;0<$;){var K=$-1>>>1,Z=M[K];if(0<i(Z,V))M[K]=V,M[$]=Z,$=K;else break e}}function n(M){return M.length===0?null:M[0]}function r(M){if(M.length===0)return null;var V=M[0],$=M.pop();if($!==V){M[0]=$;e:for(var K=0,Z=M.length,we=Z>>>1;K<we;){var he=2*(K+1)-1,ke=M[he],fe=he+1,ce=M[fe];if(0>i(ke,$))fe<Z&&0>i(ce,ke)?(M[K]=ce,M[fe]=$,K=fe):(M[K]=ke,M[he]=$,K=he);else if(fe<Z&&0>i(ce,$))M[K]=ce,M[fe]=$,K=fe;else break e}}return V}function i(M,V){var $=M.sortIndex-V.sortIndex;return $!==0?$:M.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var l=[],d=[],u=1,f=null,p=3,g=!1,x=!1,y=!1,b=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(M){for(var V=n(d);V!==null;){if(V.callback===null)r(d);else if(V.startTime<=M)r(d),V.sortIndex=V.expirationTime,t(l,V);else break;V=n(d)}}function w(M){if(y=!1,m(M),!x)if(n(l)!==null)x=!0,Q(S);else{var V=n(d);V!==null&&Y(w,V.startTime-M)}}function S(M,V){x=!1,y&&(y=!1,v(T),T=-1),g=!0;var $=p;try{for(m(V),f=n(l);f!==null&&(!(f.expirationTime>V)||M&&!P());){var K=f.callback;if(typeof K=="function"){f.callback=null,p=f.priorityLevel;var Z=K(f.expirationTime<=V);V=e.unstable_now(),typeof Z=="function"?f.callback=Z:f===n(l)&&r(l),m(V)}else r(l);f=n(l)}if(f!==null)var we=!0;else{var he=n(d);he!==null&&Y(w,he.startTime-V),we=!1}return we}finally{f=null,p=$,g=!1}}var C=!1,A=null,T=-1,z=5,E=-1;function P(){return!(e.unstable_now()-E<z)}function _(){if(A!==null){var M=e.unstable_now();E=M;var V=!0;try{V=A(!0,M)}finally{V?I():(C=!1,A=null)}}else C=!1}var I;if(typeof h=="function")I=function(){h(_)};else if(typeof MessageChannel<"u"){var R=new MessageChannel,U=R.port2;R.port1.onmessage=_,I=function(){U.postMessage(null)}}else I=function(){b(_,0)};function Q(M){A=M,C||(C=!0,I())}function Y(M,V){T=b(function(){M(e.unstable_now())},V)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(M){M.callback=null},e.unstable_continueExecution=function(){x||g||(x=!0,Q(S))},e.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<M?Math.floor(1e3/M):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(M){switch(p){case 1:case 2:case 3:var V=3;break;default:V=p}var $=p;p=V;try{return M()}finally{p=$}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(M,V){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var $=p;p=M;try{return V()}finally{p=$}},e.unstable_scheduleCallback=function(M,V,$){var K=e.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?K+$:K):$=K,M){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=$+Z,M={id:u++,callback:V,priorityLevel:M,startTime:$,expirationTime:Z,sortIndex:-1},$>K?(M.sortIndex=$,t(d,M),n(l)===null&&M===n(d)&&(y?(v(T),T=-1):y=!0,Y(w,$-K))):(M.sortIndex=Z,t(l,M),x||g||(x=!0,Q(S))),M},e.unstable_shouldYield=P,e.unstable_wrapCallback=function(M){var V=p;return function(){var $=p;p=V;try{return M.apply(this,arguments)}finally{p=$}}}})(cg);lg.exports=cg;var T2=lg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var A2=j,Tt=T2;function N(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var dg=new Set,Oa={};function Ur(e,t){Ei(e,t),Ei(e+"Capture",t)}function Ei(e,t){for(Oa[e]=t,e=0;e<t.length;e++)dg.add(t[e])}var _n=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xc=Object.prototype.hasOwnProperty,E2=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Cp={},kp={};function P2(e){return Xc.call(kp,e)?!0:Xc.call(Cp,e)?!1:E2.test(e)?kp[e]=!0:(Cp[e]=!0,!1)}function G2(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function z2(e,t,n,r){if(t===null||typeof t>"u"||G2(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function pt(e,t,n,r,i,a,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var et={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){et[e]=new pt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];et[t]=new pt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){et[e]=new pt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){et[e]=new pt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){et[e]=new pt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){et[e]=new pt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){et[e]=new pt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){et[e]=new pt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){et[e]=new pt(e,5,!1,e.toLowerCase(),null,!1,!1)});var Pu=/[\-:]([a-z])/g;function Gu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Pu,Gu);et[t]=new pt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Pu,Gu);et[t]=new pt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Pu,Gu);et[t]=new pt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){et[e]=new pt(e,1,!1,e.toLowerCase(),null,!1,!1)});et.xlinkHref=new pt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){et[e]=new pt(e,1,!1,e.toLowerCase(),null,!0,!0)});function zu(e,t,n,r){var i=et.hasOwnProperty(t)?et[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(z2(t,n,i,r)&&(n=null),r||i===null?P2(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Rn=A2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,yo=Symbol.for("react.element"),ti=Symbol.for("react.portal"),ni=Symbol.for("react.fragment"),_u=Symbol.for("react.strict_mode"),Qc=Symbol.for("react.profiler"),ug=Symbol.for("react.provider"),fg=Symbol.for("react.context"),Mu=Symbol.for("react.forward_ref"),Zc=Symbol.for("react.suspense"),Jc=Symbol.for("react.suspense_list"),Lu=Symbol.for("react.memo"),Un=Symbol.for("react.lazy"),pg=Symbol.for("react.offscreen"),Tp=Symbol.iterator;function Ji(e){return e===null||typeof e!="object"?null:(e=Tp&&e[Tp]||e["@@iterator"],typeof e=="function"?e:null)}var Ge=Object.assign,Kl;function fa(e){if(Kl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Kl=t&&t[1]||""}return`
`+Kl+e}var Xl=!1;function Ql(e,t){if(!e||Xl)return"";Xl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),a=r.stack.split(`
`),o=i.length-1,s=a.length-1;1<=o&&0<=s&&i[o]!==a[s];)s--;for(;1<=o&&0<=s;o--,s--)if(i[o]!==a[s]){if(o!==1||s!==1)do if(o--,s--,0>s||i[o]!==a[s]){var l=`
`+i[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=o&&0<=s);break}}}finally{Xl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?fa(e):""}function _2(e){switch(e.tag){case 5:return fa(e.type);case 16:return fa("Lazy");case 13:return fa("Suspense");case 19:return fa("SuspenseList");case 0:case 2:case 15:return e=Ql(e.type,!1),e;case 11:return e=Ql(e.type.render,!1),e;case 1:return e=Ql(e.type,!0),e;default:return""}}function ed(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ni:return"Fragment";case ti:return"Portal";case Qc:return"Profiler";case _u:return"StrictMode";case Zc:return"Suspense";case Jc:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case fg:return(e.displayName||"Context")+".Consumer";case ug:return(e._context.displayName||"Context")+".Provider";case Mu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Lu:return t=e.displayName||null,t!==null?t:ed(e.type)||"Memo";case Un:t=e._payload,e=e._init;try{return ed(e(t))}catch{}}return null}function M2(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ed(t);case 8:return t===_u?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function cr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function hg(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function L2(e){var t=hg(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,a.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function wo(e){e._valueTracker||(e._valueTracker=L2(e))}function mg(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=hg(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ms(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function td(e,t){var n=t.checked;return Ge({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ap(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=cr(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function gg(e,t){t=t.checked,t!=null&&zu(e,"checked",t,!1)}function nd(e,t){gg(e,t);var n=cr(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?rd(e,t.type,n):t.hasOwnProperty("defaultValue")&&rd(e,t.type,cr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ep(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function rd(e,t,n){(t!=="number"||ms(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var pa=Array.isArray;function yi(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+cr(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function id(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(N(91));return Ge({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Pp(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(N(92));if(pa(n)){if(1<n.length)throw Error(N(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:cr(n)}}function vg(e,t){var n=cr(t.value),r=cr(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Gp(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function xg(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ad(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?xg(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var bo,yg=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(bo=bo||document.createElement("div"),bo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=bo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ia(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ya={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},O2=["Webkit","ms","Moz","O"];Object.keys(ya).forEach(function(e){O2.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ya[t]=ya[e]})});function wg(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ya.hasOwnProperty(e)&&ya[e]?(""+t).trim():t+"px"}function bg(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=wg(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var I2=Ge({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function od(e,t){if(t){if(I2[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(N(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(N(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(N(61))}if(t.style!=null&&typeof t.style!="object")throw Error(N(62))}}function sd(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ld=null;function Ou(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var cd=null,wi=null,bi=null;function zp(e){if(e=co(e)){if(typeof cd!="function")throw Error(N(280));var t=e.stateNode;t&&(t=ul(t),cd(e.stateNode,e.type,t))}}function Sg(e){wi?bi?bi.push(e):bi=[e]:wi=e}function jg(){if(wi){var e=wi,t=bi;if(bi=wi=null,zp(e),t)for(e=0;e<t.length;e++)zp(t[e])}}function Cg(e,t){return e(t)}function kg(){}var Zl=!1;function Tg(e,t,n){if(Zl)return e(t,n);Zl=!0;try{return Cg(e,t,n)}finally{Zl=!1,(wi!==null||bi!==null)&&(kg(),jg())}}function Ra(e,t){var n=e.stateNode;if(n===null)return null;var r=ul(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(N(231,t,typeof n));return n}var dd=!1;if(_n)try{var ea={};Object.defineProperty(ea,"passive",{get:function(){dd=!0}}),window.addEventListener("test",ea,ea),window.removeEventListener("test",ea,ea)}catch{dd=!1}function R2(e,t,n,r,i,a,o,s,l){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(u){this.onError(u)}}var wa=!1,gs=null,vs=!1,ud=null,D2={onError:function(e){wa=!0,gs=e}};function V2(e,t,n,r,i,a,o,s,l){wa=!1,gs=null,R2.apply(D2,arguments)}function N2(e,t,n,r,i,a,o,s,l){if(V2.apply(this,arguments),wa){if(wa){var d=gs;wa=!1,gs=null}else throw Error(N(198));vs||(vs=!0,ud=d)}}function Wr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ag(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function _p(e){if(Wr(e)!==e)throw Error(N(188))}function F2(e){var t=e.alternate;if(!t){if(t=Wr(e),t===null)throw Error(N(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return _p(i),e;if(a===r)return _p(i),t;a=a.sibling}throw Error(N(188))}if(n.return!==r.return)n=i,r=a;else{for(var o=!1,s=i.child;s;){if(s===n){o=!0,n=i,r=a;break}if(s===r){o=!0,r=i,n=a;break}s=s.sibling}if(!o){for(s=a.child;s;){if(s===n){o=!0,n=a,r=i;break}if(s===r){o=!0,r=a,n=i;break}s=s.sibling}if(!o)throw Error(N(189))}}if(n.alternate!==r)throw Error(N(190))}if(n.tag!==3)throw Error(N(188));return n.stateNode.current===n?e:t}function Eg(e){return e=F2(e),e!==null?Pg(e):null}function Pg(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Pg(e);if(t!==null)return t;e=e.sibling}return null}var Gg=Tt.unstable_scheduleCallback,Mp=Tt.unstable_cancelCallback,$2=Tt.unstable_shouldYield,B2=Tt.unstable_requestPaint,Oe=Tt.unstable_now,H2=Tt.unstable_getCurrentPriorityLevel,Iu=Tt.unstable_ImmediatePriority,zg=Tt.unstable_UserBlockingPriority,xs=Tt.unstable_NormalPriority,U2=Tt.unstable_LowPriority,_g=Tt.unstable_IdlePriority,sl=null,dn=null;function W2(e){if(dn&&typeof dn.onCommitFiberRoot=="function")try{dn.onCommitFiberRoot(sl,e,void 0,(e.current.flags&128)===128)}catch{}}var Yt=Math.clz32?Math.clz32:K2,q2=Math.log,Y2=Math.LN2;function K2(e){return e>>>=0,e===0?32:31-(q2(e)/Y2|0)|0}var So=64,jo=4194304;function ha(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ys(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,o=n&268435455;if(o!==0){var s=o&~i;s!==0?r=ha(s):(a&=o,a!==0&&(r=ha(a)))}else o=n&~i,o!==0?r=ha(o):a!==0&&(r=ha(a));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,a=t&-t,i>=a||i===16&&(a&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Yt(t),i=1<<n,r|=e[n],t&=~i;return r}function X2(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Q2(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-Yt(a),s=1<<o,l=i[o];l===-1?(!(s&n)||s&r)&&(i[o]=X2(s,t)):l<=t&&(e.expiredLanes|=s),a&=~s}}function fd(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Mg(){var e=So;return So<<=1,!(So&4194240)&&(So=64),e}function Jl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function so(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Yt(t),e[t]=n}function Z2(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Yt(n),a=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~a}}function Ru(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Yt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var ue=0;function Lg(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Og,Du,Ig,Rg,Dg,pd=!1,Co=[],Jn=null,er=null,tr=null,Da=new Map,Va=new Map,qn=[],J2="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Lp(e,t){switch(e){case"focusin":case"focusout":Jn=null;break;case"dragenter":case"dragleave":er=null;break;case"mouseover":case"mouseout":tr=null;break;case"pointerover":case"pointerout":Da.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Va.delete(t.pointerId)}}function ta(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=co(t),t!==null&&Du(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function ew(e,t,n,r,i){switch(t){case"focusin":return Jn=ta(Jn,e,t,n,r,i),!0;case"dragenter":return er=ta(er,e,t,n,r,i),!0;case"mouseover":return tr=ta(tr,e,t,n,r,i),!0;case"pointerover":var a=i.pointerId;return Da.set(a,ta(Da.get(a)||null,e,t,n,r,i)),!0;case"gotpointercapture":return a=i.pointerId,Va.set(a,ta(Va.get(a)||null,e,t,n,r,i)),!0}return!1}function Vg(e){var t=Ar(e.target);if(t!==null){var n=Wr(t);if(n!==null){if(t=n.tag,t===13){if(t=Ag(n),t!==null){e.blockedOn=t,Dg(e.priority,function(){Ig(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function qo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=hd(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ld=r,n.target.dispatchEvent(r),ld=null}else return t=co(n),t!==null&&Du(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){qo(e)&&n.delete(t)}function tw(){pd=!1,Jn!==null&&qo(Jn)&&(Jn=null),er!==null&&qo(er)&&(er=null),tr!==null&&qo(tr)&&(tr=null),Da.forEach(Op),Va.forEach(Op)}function na(e,t){e.blockedOn===t&&(e.blockedOn=null,pd||(pd=!0,Tt.unstable_scheduleCallback(Tt.unstable_NormalPriority,tw)))}function Na(e){function t(i){return na(i,e)}if(0<Co.length){na(Co[0],e);for(var n=1;n<Co.length;n++){var r=Co[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Jn!==null&&na(Jn,e),er!==null&&na(er,e),tr!==null&&na(tr,e),Da.forEach(t),Va.forEach(t),n=0;n<qn.length;n++)r=qn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<qn.length&&(n=qn[0],n.blockedOn===null);)Vg(n),n.blockedOn===null&&qn.shift()}var Si=Rn.ReactCurrentBatchConfig,ws=!0;function nw(e,t,n,r){var i=ue,a=Si.transition;Si.transition=null;try{ue=1,Vu(e,t,n,r)}finally{ue=i,Si.transition=a}}function rw(e,t,n,r){var i=ue,a=Si.transition;Si.transition=null;try{ue=4,Vu(e,t,n,r)}finally{ue=i,Si.transition=a}}function Vu(e,t,n,r){if(ws){var i=hd(e,t,n,r);if(i===null)cc(e,t,r,bs,n),Lp(e,r);else if(ew(i,e,t,n,r))r.stopPropagation();else if(Lp(e,r),t&4&&-1<J2.indexOf(e)){for(;i!==null;){var a=co(i);if(a!==null&&Og(a),a=hd(e,t,n,r),a===null&&cc(e,t,r,bs,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else cc(e,t,r,null,n)}}var bs=null;function hd(e,t,n,r){if(bs=null,e=Ou(r),e=Ar(e),e!==null)if(t=Wr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ag(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return bs=e,null}function Ng(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(H2()){case Iu:return 1;case zg:return 4;case xs:case U2:return 16;case _g:return 536870912;default:return 16}default:return 16}}var Kn=null,Nu=null,Yo=null;function Fg(){if(Yo)return Yo;var e,t=Nu,n=t.length,r,i="value"in Kn?Kn.value:Kn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return Yo=i.slice(e,1<r?1-r:void 0)}function Ko(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ko(){return!0}function Ip(){return!1}function Pt(e){function t(n,r,i,a,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=a,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(a):a[s]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?ko:Ip,this.isPropagationStopped=Ip,this}return Ge(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ko)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ko)},persist:function(){},isPersistent:ko}),t}var Hi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fu=Pt(Hi),lo=Ge({},Hi,{view:0,detail:0}),iw=Pt(lo),ec,tc,ra,ll=Ge({},lo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$u,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ra&&(ra&&e.type==="mousemove"?(ec=e.screenX-ra.screenX,tc=e.screenY-ra.screenY):tc=ec=0,ra=e),ec)},movementY:function(e){return"movementY"in e?e.movementY:tc}}),Rp=Pt(ll),aw=Ge({},ll,{dataTransfer:0}),ow=Pt(aw),sw=Ge({},lo,{relatedTarget:0}),nc=Pt(sw),lw=Ge({},Hi,{animationName:0,elapsedTime:0,pseudoElement:0}),cw=Pt(lw),dw=Ge({},Hi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),uw=Pt(dw),fw=Ge({},Hi,{data:0}),Dp=Pt(fw),pw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},hw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},mw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gw(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=mw[e])?!!t[e]:!1}function $u(){return gw}var vw=Ge({},lo,{key:function(e){if(e.key){var t=pw[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ko(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?hw[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$u,charCode:function(e){return e.type==="keypress"?Ko(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ko(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),xw=Pt(vw),yw=Ge({},ll,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vp=Pt(yw),ww=Ge({},lo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$u}),bw=Pt(ww),Sw=Ge({},Hi,{propertyName:0,elapsedTime:0,pseudoElement:0}),jw=Pt(Sw),Cw=Ge({},ll,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),kw=Pt(Cw),Tw=[9,13,27,32],Bu=_n&&"CompositionEvent"in window,ba=null;_n&&"documentMode"in document&&(ba=document.documentMode);var Aw=_n&&"TextEvent"in window&&!ba,$g=_n&&(!Bu||ba&&8<ba&&11>=ba),Np=" ",Fp=!1;function Bg(e,t){switch(e){case"keyup":return Tw.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hg(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ri=!1;function Ew(e,t){switch(e){case"compositionend":return Hg(t);case"keypress":return t.which!==32?null:(Fp=!0,Np);case"textInput":return e=t.data,e===Np&&Fp?null:e;default:return null}}function Pw(e,t){if(ri)return e==="compositionend"||!Bu&&Bg(e,t)?(e=Fg(),Yo=Nu=Kn=null,ri=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return $g&&t.locale!=="ko"?null:t.data;default:return null}}var Gw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $p(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Gw[e.type]:t==="textarea"}function Ug(e,t,n,r){Sg(r),t=Ss(t,"onChange"),0<t.length&&(n=new Fu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Sa=null,Fa=null;function zw(e){n1(e,0)}function cl(e){var t=oi(e);if(mg(t))return e}function _w(e,t){if(e==="change")return t}var Wg=!1;if(_n){var rc;if(_n){var ic="oninput"in document;if(!ic){var Bp=document.createElement("div");Bp.setAttribute("oninput","return;"),ic=typeof Bp.oninput=="function"}rc=ic}else rc=!1;Wg=rc&&(!document.documentMode||9<document.documentMode)}function Hp(){Sa&&(Sa.detachEvent("onpropertychange",qg),Fa=Sa=null)}function qg(e){if(e.propertyName==="value"&&cl(Fa)){var t=[];Ug(t,Fa,e,Ou(e)),Tg(zw,t)}}function Mw(e,t,n){e==="focusin"?(Hp(),Sa=t,Fa=n,Sa.attachEvent("onpropertychange",qg)):e==="focusout"&&Hp()}function Lw(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return cl(Fa)}function Ow(e,t){if(e==="click")return cl(t)}function Iw(e,t){if(e==="input"||e==="change")return cl(t)}function Rw(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Qt=typeof Object.is=="function"?Object.is:Rw;function $a(e,t){if(Qt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Xc.call(t,i)||!Qt(e[i],t[i]))return!1}return!0}function Up(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Wp(e,t){var n=Up(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Up(n)}}function Yg(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Yg(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Kg(){for(var e=window,t=ms();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ms(e.document)}return t}function Hu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Dw(e){var t=Kg(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Yg(n.ownerDocument.documentElement,n)){if(r!==null&&Hu(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=r.end===void 0?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=Wp(n,a);var o=Wp(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Vw=_n&&"documentMode"in document&&11>=document.documentMode,ii=null,md=null,ja=null,gd=!1;function qp(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;gd||ii==null||ii!==ms(r)||(r=ii,"selectionStart"in r&&Hu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ja&&$a(ja,r)||(ja=r,r=Ss(md,"onSelect"),0<r.length&&(t=new Fu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=ii)))}function To(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ai={animationend:To("Animation","AnimationEnd"),animationiteration:To("Animation","AnimationIteration"),animationstart:To("Animation","AnimationStart"),transitionend:To("Transition","TransitionEnd")},ac={},Xg={};_n&&(Xg=document.createElement("div").style,"AnimationEvent"in window||(delete ai.animationend.animation,delete ai.animationiteration.animation,delete ai.animationstart.animation),"TransitionEvent"in window||delete ai.transitionend.transition);function dl(e){if(ac[e])return ac[e];if(!ai[e])return e;var t=ai[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Xg)return ac[e]=t[n];return e}var Qg=dl("animationend"),Zg=dl("animationiteration"),Jg=dl("animationstart"),e1=dl("transitionend"),t1=new Map,Yp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function pr(e,t){t1.set(e,t),Ur(t,[e])}for(var oc=0;oc<Yp.length;oc++){var sc=Yp[oc],Nw=sc.toLowerCase(),Fw=sc[0].toUpperCase()+sc.slice(1);pr(Nw,"on"+Fw)}pr(Qg,"onAnimationEnd");pr(Zg,"onAnimationIteration");pr(Jg,"onAnimationStart");pr("dblclick","onDoubleClick");pr("focusin","onFocus");pr("focusout","onBlur");pr(e1,"onTransitionEnd");Ei("onMouseEnter",["mouseout","mouseover"]);Ei("onMouseLeave",["mouseout","mouseover"]);Ei("onPointerEnter",["pointerout","pointerover"]);Ei("onPointerLeave",["pointerout","pointerover"]);Ur("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ur("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ur("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ur("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ur("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ur("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ma="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$w=new Set("cancel close invalid load scroll toggle".split(" ").concat(ma));function Kp(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,N2(r,t,void 0,e),e.currentTarget=null}function n1(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],l=s.instance,d=s.currentTarget;if(s=s.listener,l!==a&&i.isPropagationStopped())break e;Kp(i,s,d),a=l}else for(o=0;o<r.length;o++){if(s=r[o],l=s.instance,d=s.currentTarget,s=s.listener,l!==a&&i.isPropagationStopped())break e;Kp(i,s,d),a=l}}}if(vs)throw e=ud,vs=!1,ud=null,e}function ge(e,t){var n=t[bd];n===void 0&&(n=t[bd]=new Set);var r=e+"__bubble";n.has(r)||(r1(t,e,2,!1),n.add(r))}function lc(e,t,n){var r=0;t&&(r|=4),r1(n,e,r,t)}var Ao="_reactListening"+Math.random().toString(36).slice(2);function Ba(e){if(!e[Ao]){e[Ao]=!0,dg.forEach(function(n){n!=="selectionchange"&&($w.has(n)||lc(n,!1,e),lc(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ao]||(t[Ao]=!0,lc("selectionchange",!1,t))}}function r1(e,t,n,r){switch(Ng(t)){case 1:var i=nw;break;case 4:i=rw;break;default:i=Vu}n=i.bind(null,t,n,e),i=void 0,!dd||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function cc(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;s!==null;){if(o=Ar(s),o===null)return;if(l=o.tag,l===5||l===6){r=a=o;continue e}s=s.parentNode}}r=r.return}Tg(function(){var d=a,u=Ou(n),f=[];e:{var p=t1.get(e);if(p!==void 0){var g=Fu,x=e;switch(e){case"keypress":if(Ko(n)===0)break e;case"keydown":case"keyup":g=xw;break;case"focusin":x="focus",g=nc;break;case"focusout":x="blur",g=nc;break;case"beforeblur":case"afterblur":g=nc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Rp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=ow;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=bw;break;case Qg:case Zg:case Jg:g=cw;break;case e1:g=jw;break;case"scroll":g=iw;break;case"wheel":g=kw;break;case"copy":case"cut":case"paste":g=uw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Vp}var y=(t&4)!==0,b=!y&&e==="scroll",v=y?p!==null?p+"Capture":null:p;y=[];for(var h=d,m;h!==null;){m=h;var w=m.stateNode;if(m.tag===5&&w!==null&&(m=w,v!==null&&(w=Ra(h,v),w!=null&&y.push(Ha(h,w,m)))),b)break;h=h.return}0<y.length&&(p=new g(p,x,null,n,u),f.push({event:p,listeners:y}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",p&&n!==ld&&(x=n.relatedTarget||n.fromElement)&&(Ar(x)||x[Mn]))break e;if((g||p)&&(p=u.window===u?u:(p=u.ownerDocument)?p.defaultView||p.parentWindow:window,g?(x=n.relatedTarget||n.toElement,g=d,x=x?Ar(x):null,x!==null&&(b=Wr(x),x!==b||x.tag!==5&&x.tag!==6)&&(x=null)):(g=null,x=d),g!==x)){if(y=Rp,w="onMouseLeave",v="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(y=Vp,w="onPointerLeave",v="onPointerEnter",h="pointer"),b=g==null?p:oi(g),m=x==null?p:oi(x),p=new y(w,h+"leave",g,n,u),p.target=b,p.relatedTarget=m,w=null,Ar(u)===d&&(y=new y(v,h+"enter",x,n,u),y.target=m,y.relatedTarget=b,w=y),b=w,g&&x)t:{for(y=g,v=x,h=0,m=y;m;m=Qr(m))h++;for(m=0,w=v;w;w=Qr(w))m++;for(;0<h-m;)y=Qr(y),h--;for(;0<m-h;)v=Qr(v),m--;for(;h--;){if(y===v||v!==null&&y===v.alternate)break t;y=Qr(y),v=Qr(v)}y=null}else y=null;g!==null&&Xp(f,p,g,y,!1),x!==null&&b!==null&&Xp(f,b,x,y,!0)}}e:{if(p=d?oi(d):window,g=p.nodeName&&p.nodeName.toLowerCase(),g==="select"||g==="input"&&p.type==="file")var S=_w;else if($p(p))if(Wg)S=Iw;else{S=Lw;var C=Mw}else(g=p.nodeName)&&g.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(S=Ow);if(S&&(S=S(e,d))){Ug(f,S,n,u);break e}C&&C(e,p,d),e==="focusout"&&(C=p._wrapperState)&&C.controlled&&p.type==="number"&&rd(p,"number",p.value)}switch(C=d?oi(d):window,e){case"focusin":($p(C)||C.contentEditable==="true")&&(ii=C,md=d,ja=null);break;case"focusout":ja=md=ii=null;break;case"mousedown":gd=!0;break;case"contextmenu":case"mouseup":case"dragend":gd=!1,qp(f,n,u);break;case"selectionchange":if(Vw)break;case"keydown":case"keyup":qp(f,n,u)}var A;if(Bu)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else ri?Bg(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&($g&&n.locale!=="ko"&&(ri||T!=="onCompositionStart"?T==="onCompositionEnd"&&ri&&(A=Fg()):(Kn=u,Nu="value"in Kn?Kn.value:Kn.textContent,ri=!0)),C=Ss(d,T),0<C.length&&(T=new Dp(T,e,null,n,u),f.push({event:T,listeners:C}),A?T.data=A:(A=Hg(n),A!==null&&(T.data=A)))),(A=Aw?Ew(e,n):Pw(e,n))&&(d=Ss(d,"onBeforeInput"),0<d.length&&(u=new Dp("onBeforeInput","beforeinput",null,n,u),f.push({event:u,listeners:d}),u.data=A))}n1(f,t)})}function Ha(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ss(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=Ra(e,n),a!=null&&r.unshift(Ha(e,a,i)),a=Ra(e,t),a!=null&&r.push(Ha(e,a,i))),e=e.return}return r}function Qr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Xp(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,l=s.alternate,d=s.stateNode;if(l!==null&&l===r)break;s.tag===5&&d!==null&&(s=d,i?(l=Ra(n,a),l!=null&&o.unshift(Ha(n,l,s))):i||(l=Ra(n,a),l!=null&&o.push(Ha(n,l,s)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Bw=/\r\n?/g,Hw=/\u0000|\uFFFD/g;function Qp(e){return(typeof e=="string"?e:""+e).replace(Bw,`
`).replace(Hw,"")}function Eo(e,t,n){if(t=Qp(t),Qp(e)!==t&&n)throw Error(N(425))}function js(){}var vd=null,xd=null;function yd(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var wd=typeof setTimeout=="function"?setTimeout:void 0,Uw=typeof clearTimeout=="function"?clearTimeout:void 0,Zp=typeof Promise=="function"?Promise:void 0,Ww=typeof queueMicrotask=="function"?queueMicrotask:typeof Zp<"u"?function(e){return Zp.resolve(null).then(e).catch(qw)}:wd;function qw(e){setTimeout(function(){throw e})}function dc(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Na(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Na(t)}function nr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Jp(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Ui=Math.random().toString(36).slice(2),sn="__reactFiber$"+Ui,Ua="__reactProps$"+Ui,Mn="__reactContainer$"+Ui,bd="__reactEvents$"+Ui,Yw="__reactListeners$"+Ui,Kw="__reactHandles$"+Ui;function Ar(e){var t=e[sn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Mn]||n[sn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Jp(e);e!==null;){if(n=e[sn])return n;e=Jp(e)}return t}e=n,n=e.parentNode}return null}function co(e){return e=e[sn]||e[Mn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function oi(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(N(33))}function ul(e){return e[Ua]||null}var Sd=[],si=-1;function hr(e){return{current:e}}function ye(e){0>si||(e.current=Sd[si],Sd[si]=null,si--)}function me(e,t){si++,Sd[si]=e.current,e.current=t}var dr={},st=hr(dr),vt=hr(!1),Rr=dr;function Pi(e,t){var n=e.type.contextTypes;if(!n)return dr;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function xt(e){return e=e.childContextTypes,e!=null}function Cs(){ye(vt),ye(st)}function eh(e,t,n){if(st.current!==dr)throw Error(N(168));me(st,t),me(vt,n)}function i1(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(N(108,M2(e)||"Unknown",i));return Ge({},n,r)}function ks(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||dr,Rr=st.current,me(st,e),me(vt,vt.current),!0}function th(e,t,n){var r=e.stateNode;if(!r)throw Error(N(169));n?(e=i1(e,t,Rr),r.__reactInternalMemoizedMergedChildContext=e,ye(vt),ye(st),me(st,e)):ye(vt),me(vt,n)}var Sn=null,fl=!1,uc=!1;function a1(e){Sn===null?Sn=[e]:Sn.push(e)}function Xw(e){fl=!0,a1(e)}function mr(){if(!uc&&Sn!==null){uc=!0;var e=0,t=ue;try{var n=Sn;for(ue=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Sn=null,fl=!1}catch(i){throw Sn!==null&&(Sn=Sn.slice(e+1)),Gg(Iu,mr),i}finally{ue=t,uc=!1}}return null}var li=[],ci=0,Ts=null,As=0,Mt=[],Lt=0,Dr=null,jn=1,Cn="";function jr(e,t){li[ci++]=As,li[ci++]=Ts,Ts=e,As=t}function o1(e,t,n){Mt[Lt++]=jn,Mt[Lt++]=Cn,Mt[Lt++]=Dr,Dr=e;var r=jn;e=Cn;var i=32-Yt(r)-1;r&=~(1<<i),n+=1;var a=32-Yt(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,jn=1<<32-Yt(t)+i|n<<i|r,Cn=a+e}else jn=1<<a|n<<i|r,Cn=e}function Uu(e){e.return!==null&&(jr(e,1),o1(e,1,0))}function Wu(e){for(;e===Ts;)Ts=li[--ci],li[ci]=null,As=li[--ci],li[ci]=null;for(;e===Dr;)Dr=Mt[--Lt],Mt[Lt]=null,Cn=Mt[--Lt],Mt[Lt]=null,jn=Mt[--Lt],Mt[Lt]=null}var kt=null,Ct=null,je=!1,Wt=null;function s1(e,t){var n=Ot(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function nh(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,kt=e,Ct=nr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,kt=e,Ct=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Dr!==null?{id:jn,overflow:Cn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ot(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,kt=e,Ct=null,!0):!1;default:return!1}}function jd(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Cd(e){if(je){var t=Ct;if(t){var n=t;if(!nh(e,t)){if(jd(e))throw Error(N(418));t=nr(n.nextSibling);var r=kt;t&&nh(e,t)?s1(r,n):(e.flags=e.flags&-4097|2,je=!1,kt=e)}}else{if(jd(e))throw Error(N(418));e.flags=e.flags&-4097|2,je=!1,kt=e}}}function rh(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;kt=e}function Po(e){if(e!==kt)return!1;if(!je)return rh(e),je=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!yd(e.type,e.memoizedProps)),t&&(t=Ct)){if(jd(e))throw l1(),Error(N(418));for(;t;)s1(e,t),t=nr(t.nextSibling)}if(rh(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(N(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ct=nr(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ct=null}}else Ct=kt?nr(e.stateNode.nextSibling):null;return!0}function l1(){for(var e=Ct;e;)e=nr(e.nextSibling)}function Gi(){Ct=kt=null,je=!1}function qu(e){Wt===null?Wt=[e]:Wt.push(e)}var Qw=Rn.ReactCurrentBatchConfig;function ia(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(N(309));var r=n.stateNode}if(!r)throw Error(N(147,e));var i=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(o){var s=i.refs;o===null?delete s[a]:s[a]=o},t._stringRef=a,t)}if(typeof e!="string")throw Error(N(284));if(!n._owner)throw Error(N(290,e))}return e}function Go(e,t){throw e=Object.prototype.toString.call(t),Error(N(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ih(e){var t=e._init;return t(e._payload)}function c1(e){function t(v,h){if(e){var m=v.deletions;m===null?(v.deletions=[h],v.flags|=16):m.push(h)}}function n(v,h){if(!e)return null;for(;h!==null;)t(v,h),h=h.sibling;return null}function r(v,h){for(v=new Map;h!==null;)h.key!==null?v.set(h.key,h):v.set(h.index,h),h=h.sibling;return v}function i(v,h){return v=or(v,h),v.index=0,v.sibling=null,v}function a(v,h,m){return v.index=m,e?(m=v.alternate,m!==null?(m=m.index,m<h?(v.flags|=2,h):m):(v.flags|=2,h)):(v.flags|=1048576,h)}function o(v){return e&&v.alternate===null&&(v.flags|=2),v}function s(v,h,m,w){return h===null||h.tag!==6?(h=xc(m,v.mode,w),h.return=v,h):(h=i(h,m),h.return=v,h)}function l(v,h,m,w){var S=m.type;return S===ni?u(v,h,m.props.children,w,m.key):h!==null&&(h.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Un&&ih(S)===h.type)?(w=i(h,m.props),w.ref=ia(v,h,m),w.return=v,w):(w=ns(m.type,m.key,m.props,null,v.mode,w),w.ref=ia(v,h,m),w.return=v,w)}function d(v,h,m,w){return h===null||h.tag!==4||h.stateNode.containerInfo!==m.containerInfo||h.stateNode.implementation!==m.implementation?(h=yc(m,v.mode,w),h.return=v,h):(h=i(h,m.children||[]),h.return=v,h)}function u(v,h,m,w,S){return h===null||h.tag!==7?(h=Mr(m,v.mode,w,S),h.return=v,h):(h=i(h,m),h.return=v,h)}function f(v,h,m){if(typeof h=="string"&&h!==""||typeof h=="number")return h=xc(""+h,v.mode,m),h.return=v,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case yo:return m=ns(h.type,h.key,h.props,null,v.mode,m),m.ref=ia(v,null,h),m.return=v,m;case ti:return h=yc(h,v.mode,m),h.return=v,h;case Un:var w=h._init;return f(v,w(h._payload),m)}if(pa(h)||Ji(h))return h=Mr(h,v.mode,m,null),h.return=v,h;Go(v,h)}return null}function p(v,h,m,w){var S=h!==null?h.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return S!==null?null:s(v,h,""+m,w);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case yo:return m.key===S?l(v,h,m,w):null;case ti:return m.key===S?d(v,h,m,w):null;case Un:return S=m._init,p(v,h,S(m._payload),w)}if(pa(m)||Ji(m))return S!==null?null:u(v,h,m,w,null);Go(v,m)}return null}function g(v,h,m,w,S){if(typeof w=="string"&&w!==""||typeof w=="number")return v=v.get(m)||null,s(h,v,""+w,S);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case yo:return v=v.get(w.key===null?m:w.key)||null,l(h,v,w,S);case ti:return v=v.get(w.key===null?m:w.key)||null,d(h,v,w,S);case Un:var C=w._init;return g(v,h,m,C(w._payload),S)}if(pa(w)||Ji(w))return v=v.get(m)||null,u(h,v,w,S,null);Go(h,w)}return null}function x(v,h,m,w){for(var S=null,C=null,A=h,T=h=0,z=null;A!==null&&T<m.length;T++){A.index>T?(z=A,A=null):z=A.sibling;var E=p(v,A,m[T],w);if(E===null){A===null&&(A=z);break}e&&A&&E.alternate===null&&t(v,A),h=a(E,h,T),C===null?S=E:C.sibling=E,C=E,A=z}if(T===m.length)return n(v,A),je&&jr(v,T),S;if(A===null){for(;T<m.length;T++)A=f(v,m[T],w),A!==null&&(h=a(A,h,T),C===null?S=A:C.sibling=A,C=A);return je&&jr(v,T),S}for(A=r(v,A);T<m.length;T++)z=g(A,v,T,m[T],w),z!==null&&(e&&z.alternate!==null&&A.delete(z.key===null?T:z.key),h=a(z,h,T),C===null?S=z:C.sibling=z,C=z);return e&&A.forEach(function(P){return t(v,P)}),je&&jr(v,T),S}function y(v,h,m,w){var S=Ji(m);if(typeof S!="function")throw Error(N(150));if(m=S.call(m),m==null)throw Error(N(151));for(var C=S=null,A=h,T=h=0,z=null,E=m.next();A!==null&&!E.done;T++,E=m.next()){A.index>T?(z=A,A=null):z=A.sibling;var P=p(v,A,E.value,w);if(P===null){A===null&&(A=z);break}e&&A&&P.alternate===null&&t(v,A),h=a(P,h,T),C===null?S=P:C.sibling=P,C=P,A=z}if(E.done)return n(v,A),je&&jr(v,T),S;if(A===null){for(;!E.done;T++,E=m.next())E=f(v,E.value,w),E!==null&&(h=a(E,h,T),C===null?S=E:C.sibling=E,C=E);return je&&jr(v,T),S}for(A=r(v,A);!E.done;T++,E=m.next())E=g(A,v,T,E.value,w),E!==null&&(e&&E.alternate!==null&&A.delete(E.key===null?T:E.key),h=a(E,h,T),C===null?S=E:C.sibling=E,C=E);return e&&A.forEach(function(_){return t(v,_)}),je&&jr(v,T),S}function b(v,h,m,w){if(typeof m=="object"&&m!==null&&m.type===ni&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case yo:e:{for(var S=m.key,C=h;C!==null;){if(C.key===S){if(S=m.type,S===ni){if(C.tag===7){n(v,C.sibling),h=i(C,m.props.children),h.return=v,v=h;break e}}else if(C.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Un&&ih(S)===C.type){n(v,C.sibling),h=i(C,m.props),h.ref=ia(v,C,m),h.return=v,v=h;break e}n(v,C);break}else t(v,C);C=C.sibling}m.type===ni?(h=Mr(m.props.children,v.mode,w,m.key),h.return=v,v=h):(w=ns(m.type,m.key,m.props,null,v.mode,w),w.ref=ia(v,h,m),w.return=v,v=w)}return o(v);case ti:e:{for(C=m.key;h!==null;){if(h.key===C)if(h.tag===4&&h.stateNode.containerInfo===m.containerInfo&&h.stateNode.implementation===m.implementation){n(v,h.sibling),h=i(h,m.children||[]),h.return=v,v=h;break e}else{n(v,h);break}else t(v,h);h=h.sibling}h=yc(m,v.mode,w),h.return=v,v=h}return o(v);case Un:return C=m._init,b(v,h,C(m._payload),w)}if(pa(m))return x(v,h,m,w);if(Ji(m))return y(v,h,m,w);Go(v,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,h!==null&&h.tag===6?(n(v,h.sibling),h=i(h,m),h.return=v,v=h):(n(v,h),h=xc(m,v.mode,w),h.return=v,v=h),o(v)):n(v,h)}return b}var zi=c1(!0),d1=c1(!1),Es=hr(null),Ps=null,di=null,Yu=null;function Ku(){Yu=di=Ps=null}function Xu(e){var t=Es.current;ye(Es),e._currentValue=t}function kd(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function ji(e,t){Ps=e,Yu=di=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(gt=!0),e.firstContext=null)}function Rt(e){var t=e._currentValue;if(Yu!==e)if(e={context:e,memoizedValue:t,next:null},di===null){if(Ps===null)throw Error(N(308));di=e,Ps.dependencies={lanes:0,firstContext:e}}else di=di.next=e;return t}var Er=null;function Qu(e){Er===null?Er=[e]:Er.push(e)}function u1(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Qu(t)):(n.next=i.next,i.next=n),t.interleaved=n,Ln(e,r)}function Ln(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Wn=!1;function Zu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function f1(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Tn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function rr(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,se&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Ln(e,n)}return i=r.interleaved,i===null?(t.next=t,Qu(r)):(t.next=i.next,i.next=t),r.interleaved=t,Ln(e,n)}function Xo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ru(e,n)}}function ah(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Gs(e,t,n,r){var i=e.updateQueue;Wn=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var l=s,d=l.next;l.next=null,o===null?a=d:o.next=d,o=l;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=d:s.next=d,u.lastBaseUpdate=l))}if(a!==null){var f=i.baseState;o=0,u=d=l=null,s=a;do{var p=s.lane,g=s.eventTime;if((r&p)===p){u!==null&&(u=u.next={eventTime:g,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var x=e,y=s;switch(p=t,g=n,y.tag){case 1:if(x=y.payload,typeof x=="function"){f=x.call(g,f,p);break e}f=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=y.payload,p=typeof x=="function"?x.call(g,f,p):x,p==null)break e;f=Ge({},f,p);break e;case 2:Wn=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[s]:p.push(s))}else g={eventTime:g,lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(d=u=g,l=f):u=u.next=g,o|=p;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(u===null&&(l=f),i.baseState=l,i.firstBaseUpdate=d,i.lastBaseUpdate=u,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);Nr|=o,e.lanes=o,e.memoizedState=f}}function oh(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(N(191,i));i.call(r)}}}var uo={},un=hr(uo),Wa=hr(uo),qa=hr(uo);function Pr(e){if(e===uo)throw Error(N(174));return e}function Ju(e,t){switch(me(qa,t),me(Wa,e),me(un,uo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ad(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ad(t,e)}ye(un),me(un,t)}function _i(){ye(un),ye(Wa),ye(qa)}function p1(e){Pr(qa.current);var t=Pr(un.current),n=ad(t,e.type);t!==n&&(me(Wa,e),me(un,n))}function ef(e){Wa.current===e&&(ye(un),ye(Wa))}var Te=hr(0);function zs(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var fc=[];function tf(){for(var e=0;e<fc.length;e++)fc[e]._workInProgressVersionPrimary=null;fc.length=0}var Qo=Rn.ReactCurrentDispatcher,pc=Rn.ReactCurrentBatchConfig,Vr=0,Pe=null,Fe=null,We=null,_s=!1,Ca=!1,Ya=0,Zw=0;function tt(){throw Error(N(321))}function nf(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Qt(e[n],t[n]))return!1;return!0}function rf(e,t,n,r,i,a){if(Vr=a,Pe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Qo.current=e===null||e.memoizedState===null?nb:rb,e=n(r,i),Ca){a=0;do{if(Ca=!1,Ya=0,25<=a)throw Error(N(301));a+=1,We=Fe=null,t.updateQueue=null,Qo.current=ib,e=n(r,i)}while(Ca)}if(Qo.current=Ms,t=Fe!==null&&Fe.next!==null,Vr=0,We=Fe=Pe=null,_s=!1,t)throw Error(N(300));return e}function af(){var e=Ya!==0;return Ya=0,e}function an(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return We===null?Pe.memoizedState=We=e:We=We.next=e,We}function Dt(){if(Fe===null){var e=Pe.alternate;e=e!==null?e.memoizedState:null}else e=Fe.next;var t=We===null?Pe.memoizedState:We.next;if(t!==null)We=t,Fe=e;else{if(e===null)throw Error(N(310));Fe=e,e={memoizedState:Fe.memoizedState,baseState:Fe.baseState,baseQueue:Fe.baseQueue,queue:Fe.queue,next:null},We===null?Pe.memoizedState=We=e:We=We.next=e}return We}function Ka(e,t){return typeof t=="function"?t(e):t}function hc(e){var t=Dt(),n=t.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=e;var r=Fe,i=r.baseQueue,a=n.pending;if(a!==null){if(i!==null){var o=i.next;i.next=a.next,a.next=o}r.baseQueue=i=a,n.pending=null}if(i!==null){a=i.next,r=r.baseState;var s=o=null,l=null,d=a;do{var u=d.lane;if((Vr&u)===u)l!==null&&(l=l.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var f={lane:u,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};l===null?(s=l=f,o=r):l=l.next=f,Pe.lanes|=u,Nr|=u}d=d.next}while(d!==null&&d!==a);l===null?o=r:l.next=s,Qt(r,t.memoizedState)||(gt=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do a=i.lane,Pe.lanes|=a,Nr|=a,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function mc(e){var t=Dt(),n=t.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do a=e(a,o.action),o=o.next;while(o!==i);Qt(a,t.memoizedState)||(gt=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function h1(){}function m1(e,t){var n=Pe,r=Dt(),i=t(),a=!Qt(r.memoizedState,i);if(a&&(r.memoizedState=i,gt=!0),r=r.queue,of(x1.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||We!==null&&We.memoizedState.tag&1){if(n.flags|=2048,Xa(9,v1.bind(null,n,r,i,t),void 0,null),Ye===null)throw Error(N(349));Vr&30||g1(n,t,i)}return i}function g1(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Pe.updateQueue,t===null?(t={lastEffect:null,stores:null},Pe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function v1(e,t,n,r){t.value=n,t.getSnapshot=r,y1(t)&&w1(e)}function x1(e,t,n){return n(function(){y1(t)&&w1(e)})}function y1(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Qt(e,n)}catch{return!0}}function w1(e){var t=Ln(e,1);t!==null&&Kt(t,e,1,-1)}function sh(e){var t=an();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ka,lastRenderedState:e},t.queue=e,e=e.dispatch=tb.bind(null,Pe,e),[t.memoizedState,e]}function Xa(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Pe.updateQueue,t===null?(t={lastEffect:null,stores:null},Pe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function b1(){return Dt().memoizedState}function Zo(e,t,n,r){var i=an();Pe.flags|=e,i.memoizedState=Xa(1|t,n,void 0,r===void 0?null:r)}function pl(e,t,n,r){var i=Dt();r=r===void 0?null:r;var a=void 0;if(Fe!==null){var o=Fe.memoizedState;if(a=o.destroy,r!==null&&nf(r,o.deps)){i.memoizedState=Xa(t,n,a,r);return}}Pe.flags|=e,i.memoizedState=Xa(1|t,n,a,r)}function lh(e,t){return Zo(8390656,8,e,t)}function of(e,t){return pl(2048,8,e,t)}function S1(e,t){return pl(4,2,e,t)}function j1(e,t){return pl(4,4,e,t)}function C1(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function k1(e,t,n){return n=n!=null?n.concat([e]):null,pl(4,4,C1.bind(null,t,e),n)}function sf(){}function T1(e,t){var n=Dt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&nf(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function A1(e,t){var n=Dt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&nf(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function E1(e,t,n){return Vr&21?(Qt(n,t)||(n=Mg(),Pe.lanes|=n,Nr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,gt=!0),e.memoizedState=n)}function Jw(e,t){var n=ue;ue=n!==0&&4>n?n:4,e(!0);var r=pc.transition;pc.transition={};try{e(!1),t()}finally{ue=n,pc.transition=r}}function P1(){return Dt().memoizedState}function eb(e,t,n){var r=ar(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},G1(e))z1(t,n);else if(n=u1(e,t,n,r),n!==null){var i=ut();Kt(n,e,r,i),_1(n,t,r)}}function tb(e,t,n){var r=ar(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(G1(e))z1(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Qt(s,o)){var l=t.interleaved;l===null?(i.next=i,Qu(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=u1(e,t,i,r),n!==null&&(i=ut(),Kt(n,e,r,i),_1(n,t,r))}}function G1(e){var t=e.alternate;return e===Pe||t!==null&&t===Pe}function z1(e,t){Ca=_s=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function _1(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ru(e,n)}}var Ms={readContext:Rt,useCallback:tt,useContext:tt,useEffect:tt,useImperativeHandle:tt,useInsertionEffect:tt,useLayoutEffect:tt,useMemo:tt,useReducer:tt,useRef:tt,useState:tt,useDebugValue:tt,useDeferredValue:tt,useTransition:tt,useMutableSource:tt,useSyncExternalStore:tt,useId:tt,unstable_isNewReconciler:!1},nb={readContext:Rt,useCallback:function(e,t){return an().memoizedState=[e,t===void 0?null:t],e},useContext:Rt,useEffect:lh,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Zo(4194308,4,C1.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Zo(4194308,4,e,t)},useInsertionEffect:function(e,t){return Zo(4,2,e,t)},useMemo:function(e,t){var n=an();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=an();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=eb.bind(null,Pe,e),[r.memoizedState,e]},useRef:function(e){var t=an();return e={current:e},t.memoizedState=e},useState:sh,useDebugValue:sf,useDeferredValue:function(e){return an().memoizedState=e},useTransition:function(){var e=sh(!1),t=e[0];return e=Jw.bind(null,e[1]),an().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Pe,i=an();if(je){if(n===void 0)throw Error(N(407));n=n()}else{if(n=t(),Ye===null)throw Error(N(349));Vr&30||g1(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,lh(x1.bind(null,r,a,e),[e]),r.flags|=2048,Xa(9,v1.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=an(),t=Ye.identifierPrefix;if(je){var n=Cn,r=jn;n=(r&~(1<<32-Yt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ya++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Zw++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},rb={readContext:Rt,useCallback:T1,useContext:Rt,useEffect:of,useImperativeHandle:k1,useInsertionEffect:S1,useLayoutEffect:j1,useMemo:A1,useReducer:hc,useRef:b1,useState:function(){return hc(Ka)},useDebugValue:sf,useDeferredValue:function(e){var t=Dt();return E1(t,Fe.memoizedState,e)},useTransition:function(){var e=hc(Ka)[0],t=Dt().memoizedState;return[e,t]},useMutableSource:h1,useSyncExternalStore:m1,useId:P1,unstable_isNewReconciler:!1},ib={readContext:Rt,useCallback:T1,useContext:Rt,useEffect:of,useImperativeHandle:k1,useInsertionEffect:S1,useLayoutEffect:j1,useMemo:A1,useReducer:mc,useRef:b1,useState:function(){return mc(Ka)},useDebugValue:sf,useDeferredValue:function(e){var t=Dt();return Fe===null?t.memoizedState=e:E1(t,Fe.memoizedState,e)},useTransition:function(){var e=mc(Ka)[0],t=Dt().memoizedState;return[e,t]},useMutableSource:h1,useSyncExternalStore:m1,useId:P1,unstable_isNewReconciler:!1};function Ht(e,t){if(e&&e.defaultProps){t=Ge({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Td(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Ge({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var hl={isMounted:function(e){return(e=e._reactInternals)?Wr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ut(),i=ar(e),a=Tn(r,i);a.payload=t,n!=null&&(a.callback=n),t=rr(e,a,i),t!==null&&(Kt(t,e,i,r),Xo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ut(),i=ar(e),a=Tn(r,i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=rr(e,a,i),t!==null&&(Kt(t,e,i,r),Xo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ut(),r=ar(e),i=Tn(n,r);i.tag=2,t!=null&&(i.callback=t),t=rr(e,i,r),t!==null&&(Kt(t,e,r,n),Xo(t,e,r))}};function ch(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!$a(n,r)||!$a(i,a):!0}function M1(e,t,n){var r=!1,i=dr,a=t.contextType;return typeof a=="object"&&a!==null?a=Rt(a):(i=xt(t)?Rr:st.current,r=t.contextTypes,a=(r=r!=null)?Pi(e,i):dr),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=hl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function dh(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&hl.enqueueReplaceState(t,t.state,null)}function Ad(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Zu(e);var a=t.contextType;typeof a=="object"&&a!==null?i.context=Rt(a):(a=xt(t)?Rr:st.current,i.context=Pi(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(Td(e,t,a,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&hl.enqueueReplaceState(i,i.state,null),Gs(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Mi(e,t){try{var n="",r=t;do n+=_2(r),r=r.return;while(r);var i=n}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:i,digest:null}}function gc(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ed(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var ab=typeof WeakMap=="function"?WeakMap:Map;function L1(e,t,n){n=Tn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Os||(Os=!0,Dd=r),Ed(e,t)},n}function O1(e,t,n){n=Tn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Ed(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){Ed(e,t),typeof r!="function"&&(ir===null?ir=new Set([this]):ir.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function uh(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new ab;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=yb.bind(null,e,t,n),t.then(e,e))}function fh(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ph(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Tn(-1,1),t.tag=2,rr(n,t,1))),n.lanes|=1),e)}var ob=Rn.ReactCurrentOwner,gt=!1;function lt(e,t,n,r){t.child=e===null?d1(t,null,n,r):zi(t,e.child,n,r)}function hh(e,t,n,r,i){n=n.render;var a=t.ref;return ji(t,i),r=rf(e,t,n,r,a,i),n=af(),e!==null&&!gt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,On(e,t,i)):(je&&n&&Uu(t),t.flags|=1,lt(e,t,r,i),t.child)}function mh(e,t,n,r,i){if(e===null){var a=n.type;return typeof a=="function"&&!mf(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,I1(e,t,a,r,i)):(e=ns(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&i)){var o=a.memoizedProps;if(n=n.compare,n=n!==null?n:$a,n(o,r)&&e.ref===t.ref)return On(e,t,i)}return t.flags|=1,e=or(a,r),e.ref=t.ref,e.return=t,t.child=e}function I1(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if($a(a,r)&&e.ref===t.ref)if(gt=!1,t.pendingProps=r=a,(e.lanes&i)!==0)e.flags&131072&&(gt=!0);else return t.lanes=e.lanes,On(e,t,i)}return Pd(e,t,n,r,i)}function R1(e,t,n){var r=t.pendingProps,i=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},me(fi,St),St|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,me(fi,St),St|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,me(fi,St),St|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,me(fi,St),St|=r;return lt(e,t,i,n),t.child}function D1(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Pd(e,t,n,r,i){var a=xt(n)?Rr:st.current;return a=Pi(t,a),ji(t,i),n=rf(e,t,n,r,a,i),r=af(),e!==null&&!gt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,On(e,t,i)):(je&&r&&Uu(t),t.flags|=1,lt(e,t,n,i),t.child)}function gh(e,t,n,r,i){if(xt(n)){var a=!0;ks(t)}else a=!1;if(ji(t,i),t.stateNode===null)Jo(e,t),M1(t,n,r),Ad(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var l=o.context,d=n.contextType;typeof d=="object"&&d!==null?d=Rt(d):(d=xt(n)?Rr:st.current,d=Pi(t,d));var u=n.getDerivedStateFromProps,f=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==r||l!==d)&&dh(t,o,r,d),Wn=!1;var p=t.memoizedState;o.state=p,Gs(t,r,o,i),l=t.memoizedState,s!==r||p!==l||vt.current||Wn?(typeof u=="function"&&(Td(t,n,u,r),l=t.memoizedState),(s=Wn||ch(t,n,s,r,p,l,d))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),o.props=r,o.state=l,o.context=d,r=s):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,f1(e,t),s=t.memoizedProps,d=t.type===t.elementType?s:Ht(t.type,s),o.props=d,f=t.pendingProps,p=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Rt(l):(l=xt(n)?Rr:st.current,l=Pi(t,l));var g=n.getDerivedStateFromProps;(u=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==f||p!==l)&&dh(t,o,r,l),Wn=!1,p=t.memoizedState,o.state=p,Gs(t,r,o,i);var x=t.memoizedState;s!==f||p!==x||vt.current||Wn?(typeof g=="function"&&(Td(t,n,g,r),x=t.memoizedState),(d=Wn||ch(t,n,d,r,p,x,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,x,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,x,l)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),o.props=r,o.state=x,o.context=l,r=d):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return Gd(e,t,n,r,a,i)}function Gd(e,t,n,r,i,a){D1(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&th(t,n,!1),On(e,t,a);r=t.stateNode,ob.current=t;var s=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=zi(t,e.child,null,a),t.child=zi(t,null,s,a)):lt(e,t,s,a),t.memoizedState=r.state,i&&th(t,n,!0),t.child}function V1(e){var t=e.stateNode;t.pendingContext?eh(e,t.pendingContext,t.pendingContext!==t.context):t.context&&eh(e,t.context,!1),Ju(e,t.containerInfo)}function vh(e,t,n,r,i){return Gi(),qu(i),t.flags|=256,lt(e,t,n,r),t.child}var zd={dehydrated:null,treeContext:null,retryLane:0};function _d(e){return{baseLanes:e,cachePool:null,transitions:null}}function N1(e,t,n){var r=t.pendingProps,i=Te.current,a=!1,o=(t.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),me(Te,i&1),e===null)return Cd(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,a?(r=t.mode,a=t.child,o={mode:"hidden",children:o},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=vl(o,r,0,null),e=Mr(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=_d(n),t.memoizedState=zd,e):lf(t,o));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return sb(e,t,o,r,s,i,n);if(a){a=r.fallback,o=t.mode,i=e.child,s=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=or(i,l),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?a=or(s,a):(a=Mr(a,o,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,o=e.child.memoizedState,o=o===null?_d(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~n,t.memoizedState=zd,r}return a=e.child,e=a.sibling,r=or(a,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function lf(e,t){return t=vl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function zo(e,t,n,r){return r!==null&&qu(r),zi(t,e.child,null,n),e=lf(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function sb(e,t,n,r,i,a,o){if(n)return t.flags&256?(t.flags&=-257,r=gc(Error(N(422))),zo(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,i=t.mode,r=vl({mode:"visible",children:r.children},i,0,null),a=Mr(a,i,o,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,t.mode&1&&zi(t,e.child,null,o),t.child.memoizedState=_d(o),t.memoizedState=zd,a);if(!(t.mode&1))return zo(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,a=Error(N(419)),r=gc(a,r,void 0),zo(e,t,o,r)}if(s=(o&e.childLanes)!==0,gt||s){if(r=Ye,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,Ln(e,i),Kt(r,e,i,-1))}return hf(),r=gc(Error(N(421))),zo(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=wb.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,Ct=nr(i.nextSibling),kt=t,je=!0,Wt=null,e!==null&&(Mt[Lt++]=jn,Mt[Lt++]=Cn,Mt[Lt++]=Dr,jn=e.id,Cn=e.overflow,Dr=t),t=lf(t,r.children),t.flags|=4096,t)}function xh(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),kd(e.return,t,n)}function vc(e,t,n,r,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function F1(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(lt(e,t,r.children,n),r=Te.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&xh(e,n,t);else if(e.tag===19)xh(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(me(Te,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&zs(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),vc(t,!1,i,n,a);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&zs(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}vc(t,!0,n,null,a);break;case"together":vc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Jo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function On(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Nr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(N(153));if(t.child!==null){for(e=t.child,n=or(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=or(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function lb(e,t,n){switch(t.tag){case 3:V1(t),Gi();break;case 5:p1(t);break;case 1:xt(t.type)&&ks(t);break;case 4:Ju(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;me(Es,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(me(Te,Te.current&1),t.flags|=128,null):n&t.child.childLanes?N1(e,t,n):(me(Te,Te.current&1),e=On(e,t,n),e!==null?e.sibling:null);me(Te,Te.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return F1(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),me(Te,Te.current),r)break;return null;case 22:case 23:return t.lanes=0,R1(e,t,n)}return On(e,t,n)}var $1,Md,B1,H1;$1=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Md=function(){};B1=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Pr(un.current);var a=null;switch(n){case"input":i=td(e,i),r=td(e,r),a=[];break;case"select":i=Ge({},i,{value:void 0}),r=Ge({},r,{value:void 0}),a=[];break;case"textarea":i=id(e,i),r=id(e,r),a=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=js)}od(n,r);var o;n=null;for(d in i)if(!r.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var s=i[d];for(o in s)s.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Oa.hasOwnProperty(d)?a||(a=[]):(a=a||[]).push(d,null));for(d in r){var l=r[d];if(s=i!=null?i[d]:void 0,r.hasOwnProperty(d)&&l!==s&&(l!=null||s!=null))if(d==="style")if(s){for(o in s)!s.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&s[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(a||(a=[]),a.push(d,n)),n=l;else d==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(a=a||[]).push(d,l)):d==="children"?typeof l!="string"&&typeof l!="number"||(a=a||[]).push(d,""+l):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Oa.hasOwnProperty(d)?(l!=null&&d==="onScroll"&&ge("scroll",e),a||s===l||(a=[])):(a=a||[]).push(d,l))}n&&(a=a||[]).push("style",n);var d=a;(t.updateQueue=d)&&(t.flags|=4)}};H1=function(e,t,n,r){n!==r&&(t.flags|=4)};function aa(e,t){if(!je)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function nt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function cb(e,t,n){var r=t.pendingProps;switch(Wu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return nt(t),null;case 1:return xt(t.type)&&Cs(),nt(t),null;case 3:return r=t.stateNode,_i(),ye(vt),ye(st),tf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Po(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Wt!==null&&(Fd(Wt),Wt=null))),Md(e,t),nt(t),null;case 5:ef(t);var i=Pr(qa.current);if(n=t.type,e!==null&&t.stateNode!=null)B1(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(N(166));return nt(t),null}if(e=Pr(un.current),Po(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[sn]=t,r[Ua]=a,e=(t.mode&1)!==0,n){case"dialog":ge("cancel",r),ge("close",r);break;case"iframe":case"object":case"embed":ge("load",r);break;case"video":case"audio":for(i=0;i<ma.length;i++)ge(ma[i],r);break;case"source":ge("error",r);break;case"img":case"image":case"link":ge("error",r),ge("load",r);break;case"details":ge("toggle",r);break;case"input":Ap(r,a),ge("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},ge("invalid",r);break;case"textarea":Pp(r,a),ge("invalid",r)}od(n,a),i=null;for(var o in a)if(a.hasOwnProperty(o)){var s=a[o];o==="children"?typeof s=="string"?r.textContent!==s&&(a.suppressHydrationWarning!==!0&&Eo(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(a.suppressHydrationWarning!==!0&&Eo(r.textContent,s,e),i=["children",""+s]):Oa.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&ge("scroll",r)}switch(n){case"input":wo(r),Ep(r,a,!0);break;case"textarea":wo(r),Gp(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=js)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=xg(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[sn]=t,e[Ua]=r,$1(e,t,!1,!1),t.stateNode=e;e:{switch(o=sd(n,r),n){case"dialog":ge("cancel",e),ge("close",e),i=r;break;case"iframe":case"object":case"embed":ge("load",e),i=r;break;case"video":case"audio":for(i=0;i<ma.length;i++)ge(ma[i],e);i=r;break;case"source":ge("error",e),i=r;break;case"img":case"image":case"link":ge("error",e),ge("load",e),i=r;break;case"details":ge("toggle",e),i=r;break;case"input":Ap(e,r),i=td(e,r),ge("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Ge({},r,{value:void 0}),ge("invalid",e);break;case"textarea":Pp(e,r),i=id(e,r),ge("invalid",e);break;default:i=r}od(n,i),s=i;for(a in s)if(s.hasOwnProperty(a)){var l=s[a];a==="style"?bg(e,l):a==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&yg(e,l)):a==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ia(e,l):typeof l=="number"&&Ia(e,""+l):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Oa.hasOwnProperty(a)?l!=null&&a==="onScroll"&&ge("scroll",e):l!=null&&zu(e,a,l,o))}switch(n){case"input":wo(e),Ep(e,r,!1);break;case"textarea":wo(e),Gp(e);break;case"option":r.value!=null&&e.setAttribute("value",""+cr(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?yi(e,!!r.multiple,a,!1):r.defaultValue!=null&&yi(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=js)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return nt(t),null;case 6:if(e&&t.stateNode!=null)H1(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(N(166));if(n=Pr(qa.current),Pr(un.current),Po(t)){if(r=t.stateNode,n=t.memoizedProps,r[sn]=t,(a=r.nodeValue!==n)&&(e=kt,e!==null))switch(e.tag){case 3:Eo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Eo(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[sn]=t,t.stateNode=r}return nt(t),null;case 13:if(ye(Te),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(je&&Ct!==null&&t.mode&1&&!(t.flags&128))l1(),Gi(),t.flags|=98560,a=!1;else if(a=Po(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(N(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(N(317));a[sn]=t}else Gi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;nt(t),a=!1}else Wt!==null&&(Fd(Wt),Wt=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Te.current&1?$e===0&&($e=3):hf())),t.updateQueue!==null&&(t.flags|=4),nt(t),null);case 4:return _i(),Md(e,t),e===null&&Ba(t.stateNode.containerInfo),nt(t),null;case 10:return Xu(t.type._context),nt(t),null;case 17:return xt(t.type)&&Cs(),nt(t),null;case 19:if(ye(Te),a=t.memoizedState,a===null)return nt(t),null;if(r=(t.flags&128)!==0,o=a.rendering,o===null)if(r)aa(a,!1);else{if($e!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=zs(e),o!==null){for(t.flags|=128,aa(a,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,o=a.alternate,o===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=o.childLanes,a.lanes=o.lanes,a.child=o.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=o.memoizedProps,a.memoizedState=o.memoizedState,a.updateQueue=o.updateQueue,a.type=o.type,e=o.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return me(Te,Te.current&1|2),t.child}e=e.sibling}a.tail!==null&&Oe()>Li&&(t.flags|=128,r=!0,aa(a,!1),t.lanes=4194304)}else{if(!r)if(e=zs(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),aa(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!je)return nt(t),null}else 2*Oe()-a.renderingStartTime>Li&&n!==1073741824&&(t.flags|=128,r=!0,aa(a,!1),t.lanes=4194304);a.isBackwards?(o.sibling=t.child,t.child=o):(n=a.last,n!==null?n.sibling=o:t.child=o,a.last=o)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=Oe(),t.sibling=null,n=Te.current,me(Te,r?n&1|2:n&1),t):(nt(t),null);case 22:case 23:return pf(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?St&1073741824&&(nt(t),t.subtreeFlags&6&&(t.flags|=8192)):nt(t),null;case 24:return null;case 25:return null}throw Error(N(156,t.tag))}function db(e,t){switch(Wu(t),t.tag){case 1:return xt(t.type)&&Cs(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return _i(),ye(vt),ye(st),tf(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ef(t),null;case 13:if(ye(Te),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(N(340));Gi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ye(Te),null;case 4:return _i(),null;case 10:return Xu(t.type._context),null;case 22:case 23:return pf(),null;case 24:return null;default:return null}}var _o=!1,it=!1,ub=typeof WeakSet=="function"?WeakSet:Set,H=null;function ui(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ze(e,t,r)}else n.current=null}function Ld(e,t,n){try{n()}catch(r){ze(e,t,r)}}var yh=!1;function fb(e,t){if(vd=ws,e=Kg(),Hu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var o=0,s=-1,l=-1,d=0,u=0,f=e,p=null;t:for(;;){for(var g;f!==n||i!==0&&f.nodeType!==3||(s=o+i),f!==a||r!==0&&f.nodeType!==3||(l=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(g=f.firstChild)!==null;)p=f,f=g;for(;;){if(f===e)break t;if(p===n&&++d===i&&(s=o),p===a&&++u===r&&(l=o),(g=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=g}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(xd={focusedElem:e,selectionRange:n},ws=!1,H=t;H!==null;)if(t=H,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,H=e;else for(;H!==null;){t=H;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var y=x.memoizedProps,b=x.memoizedState,v=t.stateNode,h=v.getSnapshotBeforeUpdate(t.elementType===t.type?y:Ht(t.type,y),b);v.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(N(163))}}catch(w){ze(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,H=e;break}H=t.return}return x=yh,yh=!1,x}function ka(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&Ld(t,n,a)}i=i.next}while(i!==r)}}function ml(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Od(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function U1(e){var t=e.alternate;t!==null&&(e.alternate=null,U1(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[sn],delete t[Ua],delete t[bd],delete t[Yw],delete t[Kw])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function W1(e){return e.tag===5||e.tag===3||e.tag===4}function wh(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||W1(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Id(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=js));else if(r!==4&&(e=e.child,e!==null))for(Id(e,t,n),e=e.sibling;e!==null;)Id(e,t,n),e=e.sibling}function Rd(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Rd(e,t,n),e=e.sibling;e!==null;)Rd(e,t,n),e=e.sibling}var Qe=null,Ut=!1;function Fn(e,t,n){for(n=n.child;n!==null;)q1(e,t,n),n=n.sibling}function q1(e,t,n){if(dn&&typeof dn.onCommitFiberUnmount=="function")try{dn.onCommitFiberUnmount(sl,n)}catch{}switch(n.tag){case 5:it||ui(n,t);case 6:var r=Qe,i=Ut;Qe=null,Fn(e,t,n),Qe=r,Ut=i,Qe!==null&&(Ut?(e=Qe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Qe.removeChild(n.stateNode));break;case 18:Qe!==null&&(Ut?(e=Qe,n=n.stateNode,e.nodeType===8?dc(e.parentNode,n):e.nodeType===1&&dc(e,n),Na(e)):dc(Qe,n.stateNode));break;case 4:r=Qe,i=Ut,Qe=n.stateNode.containerInfo,Ut=!0,Fn(e,t,n),Qe=r,Ut=i;break;case 0:case 11:case 14:case 15:if(!it&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var a=i,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&Ld(n,t,o),i=i.next}while(i!==r)}Fn(e,t,n);break;case 1:if(!it&&(ui(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){ze(n,t,s)}Fn(e,t,n);break;case 21:Fn(e,t,n);break;case 22:n.mode&1?(it=(r=it)||n.memoizedState!==null,Fn(e,t,n),it=r):Fn(e,t,n);break;default:Fn(e,t,n)}}function bh(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new ub),t.forEach(function(r){var i=bb.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function $t(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var a=e,o=t,s=o;e:for(;s!==null;){switch(s.tag){case 5:Qe=s.stateNode,Ut=!1;break e;case 3:Qe=s.stateNode.containerInfo,Ut=!0;break e;case 4:Qe=s.stateNode.containerInfo,Ut=!0;break e}s=s.return}if(Qe===null)throw Error(N(160));q1(a,o,i),Qe=null,Ut=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(d){ze(i,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Y1(t,e),t=t.sibling}function Y1(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if($t(t,e),tn(e),r&4){try{ka(3,e,e.return),ml(3,e)}catch(y){ze(e,e.return,y)}try{ka(5,e,e.return)}catch(y){ze(e,e.return,y)}}break;case 1:$t(t,e),tn(e),r&512&&n!==null&&ui(n,n.return);break;case 5:if($t(t,e),tn(e),r&512&&n!==null&&ui(n,n.return),e.flags&32){var i=e.stateNode;try{Ia(i,"")}catch(y){ze(e,e.return,y)}}if(r&4&&(i=e.stateNode,i!=null)){var a=e.memoizedProps,o=n!==null?n.memoizedProps:a,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&a.type==="radio"&&a.name!=null&&gg(i,a),sd(s,o);var d=sd(s,a);for(o=0;o<l.length;o+=2){var u=l[o],f=l[o+1];u==="style"?bg(i,f):u==="dangerouslySetInnerHTML"?yg(i,f):u==="children"?Ia(i,f):zu(i,u,f,d)}switch(s){case"input":nd(i,a);break;case"textarea":vg(i,a);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var g=a.value;g!=null?yi(i,!!a.multiple,g,!1):p!==!!a.multiple&&(a.defaultValue!=null?yi(i,!!a.multiple,a.defaultValue,!0):yi(i,!!a.multiple,a.multiple?[]:"",!1))}i[Ua]=a}catch(y){ze(e,e.return,y)}}break;case 6:if($t(t,e),tn(e),r&4){if(e.stateNode===null)throw Error(N(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(y){ze(e,e.return,y)}}break;case 3:if($t(t,e),tn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Na(t.containerInfo)}catch(y){ze(e,e.return,y)}break;case 4:$t(t,e),tn(e);break;case 13:$t(t,e),tn(e),i=e.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(uf=Oe())),r&4&&bh(e);break;case 22:if(u=n!==null&&n.memoizedState!==null,e.mode&1?(it=(d=it)||u,$t(t,e),it=d):$t(t,e),tn(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!u&&e.mode&1)for(H=e,u=e.child;u!==null;){for(f=H=u;H!==null;){switch(p=H,g=p.child,p.tag){case 0:case 11:case 14:case 15:ka(4,p,p.return);break;case 1:ui(p,p.return);var x=p.stateNode;if(typeof x.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(y){ze(r,n,y)}}break;case 5:ui(p,p.return);break;case 22:if(p.memoizedState!==null){jh(f);continue}}g!==null?(g.return=p,H=g):jh(f)}u=u.sibling}e:for(u=null,f=e;;){if(f.tag===5){if(u===null){u=f;try{i=f.stateNode,d?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(s=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=wg("display",o))}catch(y){ze(e,e.return,y)}}}else if(f.tag===6){if(u===null)try{f.stateNode.nodeValue=d?"":f.memoizedProps}catch(y){ze(e,e.return,y)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;u===f&&(u=null),f=f.return}u===f&&(u=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:$t(t,e),tn(e),r&4&&bh(e);break;case 21:break;default:$t(t,e),tn(e)}}function tn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(W1(n)){var r=n;break e}n=n.return}throw Error(N(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ia(i,""),r.flags&=-33);var a=wh(e);Rd(e,a,i);break;case 3:case 4:var o=r.stateNode.containerInfo,s=wh(e);Id(e,s,o);break;default:throw Error(N(161))}}catch(l){ze(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function pb(e,t,n){H=e,K1(e)}function K1(e,t,n){for(var r=(e.mode&1)!==0;H!==null;){var i=H,a=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||_o;if(!o){var s=i.alternate,l=s!==null&&s.memoizedState!==null||it;s=_o;var d=it;if(_o=o,(it=l)&&!d)for(H=i;H!==null;)o=H,l=o.child,o.tag===22&&o.memoizedState!==null?Ch(i):l!==null?(l.return=o,H=l):Ch(i);for(;a!==null;)H=a,K1(a),a=a.sibling;H=i,_o=s,it=d}Sh(e)}else i.subtreeFlags&8772&&a!==null?(a.return=i,H=a):Sh(e)}}function Sh(e){for(;H!==null;){var t=H;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:it||ml(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!it)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Ht(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&oh(t,a,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}oh(t,o,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var u=d.memoizedState;if(u!==null){var f=u.dehydrated;f!==null&&Na(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(N(163))}it||t.flags&512&&Od(t)}catch(p){ze(t,t.return,p)}}if(t===e){H=null;break}if(n=t.sibling,n!==null){n.return=t.return,H=n;break}H=t.return}}function jh(e){for(;H!==null;){var t=H;if(t===e){H=null;break}var n=t.sibling;if(n!==null){n.return=t.return,H=n;break}H=t.return}}function Ch(e){for(;H!==null;){var t=H;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ml(4,t)}catch(l){ze(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){ze(t,i,l)}}var a=t.return;try{Od(t)}catch(l){ze(t,a,l)}break;case 5:var o=t.return;try{Od(t)}catch(l){ze(t,o,l)}}}catch(l){ze(t,t.return,l)}if(t===e){H=null;break}var s=t.sibling;if(s!==null){s.return=t.return,H=s;break}H=t.return}}var hb=Math.ceil,Ls=Rn.ReactCurrentDispatcher,cf=Rn.ReactCurrentOwner,It=Rn.ReactCurrentBatchConfig,se=0,Ye=null,Ve=null,Ze=0,St=0,fi=hr(0),$e=0,Qa=null,Nr=0,gl=0,df=0,Ta=null,mt=null,uf=0,Li=1/0,wn=null,Os=!1,Dd=null,ir=null,Mo=!1,Xn=null,Is=0,Aa=0,Vd=null,es=-1,ts=0;function ut(){return se&6?Oe():es!==-1?es:es=Oe()}function ar(e){return e.mode&1?se&2&&Ze!==0?Ze&-Ze:Qw.transition!==null?(ts===0&&(ts=Mg()),ts):(e=ue,e!==0||(e=window.event,e=e===void 0?16:Ng(e.type)),e):1}function Kt(e,t,n,r){if(50<Aa)throw Aa=0,Vd=null,Error(N(185));so(e,n,r),(!(se&2)||e!==Ye)&&(e===Ye&&(!(se&2)&&(gl|=n),$e===4&&Yn(e,Ze)),yt(e,r),n===1&&se===0&&!(t.mode&1)&&(Li=Oe()+500,fl&&mr()))}function yt(e,t){var n=e.callbackNode;Q2(e,t);var r=ys(e,e===Ye?Ze:0);if(r===0)n!==null&&Mp(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Mp(n),t===1)e.tag===0?Xw(kh.bind(null,e)):a1(kh.bind(null,e)),Ww(function(){!(se&6)&&mr()}),n=null;else{switch(Lg(r)){case 1:n=Iu;break;case 4:n=zg;break;case 16:n=xs;break;case 536870912:n=_g;break;default:n=xs}n=rv(n,X1.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function X1(e,t){if(es=-1,ts=0,se&6)throw Error(N(327));var n=e.callbackNode;if(Ci()&&e.callbackNode!==n)return null;var r=ys(e,e===Ye?Ze:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Rs(e,r);else{t=r;var i=se;se|=2;var a=Z1();(Ye!==e||Ze!==t)&&(wn=null,Li=Oe()+500,_r(e,t));do try{vb();break}catch(s){Q1(e,s)}while(!0);Ku(),Ls.current=a,se=i,Ve!==null?t=0:(Ye=null,Ze=0,t=$e)}if(t!==0){if(t===2&&(i=fd(e),i!==0&&(r=i,t=Nd(e,i))),t===1)throw n=Qa,_r(e,0),Yn(e,r),yt(e,Oe()),n;if(t===6)Yn(e,r);else{if(i=e.current.alternate,!(r&30)&&!mb(i)&&(t=Rs(e,r),t===2&&(a=fd(e),a!==0&&(r=a,t=Nd(e,a))),t===1))throw n=Qa,_r(e,0),Yn(e,r),yt(e,Oe()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(N(345));case 2:Cr(e,mt,wn);break;case 3:if(Yn(e,r),(r&130023424)===r&&(t=uf+500-Oe(),10<t)){if(ys(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ut(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=wd(Cr.bind(null,e,mt,wn),t);break}Cr(e,mt,wn);break;case 4:if(Yn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-Yt(r);a=1<<o,o=t[o],o>i&&(i=o),r&=~a}if(r=i,r=Oe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*hb(r/1960))-r,10<r){e.timeoutHandle=wd(Cr.bind(null,e,mt,wn),r);break}Cr(e,mt,wn);break;case 5:Cr(e,mt,wn);break;default:throw Error(N(329))}}}return yt(e,Oe()),e.callbackNode===n?X1.bind(null,e):null}function Nd(e,t){var n=Ta;return e.current.memoizedState.isDehydrated&&(_r(e,t).flags|=256),e=Rs(e,t),e!==2&&(t=mt,mt=n,t!==null&&Fd(t)),e}function Fd(e){mt===null?mt=e:mt.push.apply(mt,e)}function mb(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Qt(a(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Yn(e,t){for(t&=~df,t&=~gl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Yt(t),r=1<<n;e[n]=-1,t&=~r}}function kh(e){if(se&6)throw Error(N(327));Ci();var t=ys(e,0);if(!(t&1))return yt(e,Oe()),null;var n=Rs(e,t);if(e.tag!==0&&n===2){var r=fd(e);r!==0&&(t=r,n=Nd(e,r))}if(n===1)throw n=Qa,_r(e,0),Yn(e,t),yt(e,Oe()),n;if(n===6)throw Error(N(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Cr(e,mt,wn),yt(e,Oe()),null}function ff(e,t){var n=se;se|=1;try{return e(t)}finally{se=n,se===0&&(Li=Oe()+500,fl&&mr())}}function Fr(e){Xn!==null&&Xn.tag===0&&!(se&6)&&Ci();var t=se;se|=1;var n=It.transition,r=ue;try{if(It.transition=null,ue=1,e)return e()}finally{ue=r,It.transition=n,se=t,!(se&6)&&mr()}}function pf(){St=fi.current,ye(fi)}function _r(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Uw(n)),Ve!==null)for(n=Ve.return;n!==null;){var r=n;switch(Wu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Cs();break;case 3:_i(),ye(vt),ye(st),tf();break;case 5:ef(r);break;case 4:_i();break;case 13:ye(Te);break;case 19:ye(Te);break;case 10:Xu(r.type._context);break;case 22:case 23:pf()}n=n.return}if(Ye=e,Ve=e=or(e.current,null),Ze=St=t,$e=0,Qa=null,df=gl=Nr=0,mt=Ta=null,Er!==null){for(t=0;t<Er.length;t++)if(n=Er[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,a=n.pending;if(a!==null){var o=a.next;a.next=i,r.next=o}n.pending=r}Er=null}return e}function Q1(e,t){do{var n=Ve;try{if(Ku(),Qo.current=Ms,_s){for(var r=Pe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}_s=!1}if(Vr=0,We=Fe=Pe=null,Ca=!1,Ya=0,cf.current=null,n===null||n.return===null){$e=1,Qa=t,Ve=null;break}e:{var a=e,o=n.return,s=n,l=t;if(t=Ze,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var d=l,u=s,f=u.tag;if(!(u.mode&1)&&(f===0||f===11||f===15)){var p=u.alternate;p?(u.updateQueue=p.updateQueue,u.memoizedState=p.memoizedState,u.lanes=p.lanes):(u.updateQueue=null,u.memoizedState=null)}var g=fh(o);if(g!==null){g.flags&=-257,ph(g,o,s,a,t),g.mode&1&&uh(a,d,t),t=g,l=d;var x=t.updateQueue;if(x===null){var y=new Set;y.add(l),t.updateQueue=y}else x.add(l);break e}else{if(!(t&1)){uh(a,d,t),hf();break e}l=Error(N(426))}}else if(je&&s.mode&1){var b=fh(o);if(b!==null){!(b.flags&65536)&&(b.flags|=256),ph(b,o,s,a,t),qu(Mi(l,s));break e}}a=l=Mi(l,s),$e!==4&&($e=2),Ta===null?Ta=[a]:Ta.push(a),a=o;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var v=L1(a,l,t);ah(a,v);break e;case 1:s=l;var h=a.type,m=a.stateNode;if(!(a.flags&128)&&(typeof h.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(ir===null||!ir.has(m)))){a.flags|=65536,t&=-t,a.lanes|=t;var w=O1(a,s,t);ah(a,w);break e}}a=a.return}while(a!==null)}ev(n)}catch(S){t=S,Ve===n&&n!==null&&(Ve=n=n.return);continue}break}while(!0)}function Z1(){var e=Ls.current;return Ls.current=Ms,e===null?Ms:e}function hf(){($e===0||$e===3||$e===2)&&($e=4),Ye===null||!(Nr&268435455)&&!(gl&268435455)||Yn(Ye,Ze)}function Rs(e,t){var n=se;se|=2;var r=Z1();(Ye!==e||Ze!==t)&&(wn=null,_r(e,t));do try{gb();break}catch(i){Q1(e,i)}while(!0);if(Ku(),se=n,Ls.current=r,Ve!==null)throw Error(N(261));return Ye=null,Ze=0,$e}function gb(){for(;Ve!==null;)J1(Ve)}function vb(){for(;Ve!==null&&!$2();)J1(Ve)}function J1(e){var t=nv(e.alternate,e,St);e.memoizedProps=e.pendingProps,t===null?ev(e):Ve=t,cf.current=null}function ev(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=db(n,t),n!==null){n.flags&=32767,Ve=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{$e=6,Ve=null;return}}else if(n=cb(n,t,St),n!==null){Ve=n;return}if(t=t.sibling,t!==null){Ve=t;return}Ve=t=e}while(t!==null);$e===0&&($e=5)}function Cr(e,t,n){var r=ue,i=It.transition;try{It.transition=null,ue=1,xb(e,t,n,r)}finally{It.transition=i,ue=r}return null}function xb(e,t,n,r){do Ci();while(Xn!==null);if(se&6)throw Error(N(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(N(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(Z2(e,a),e===Ye&&(Ve=Ye=null,Ze=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Mo||(Mo=!0,rv(xs,function(){return Ci(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=It.transition,It.transition=null;var o=ue;ue=1;var s=se;se|=4,cf.current=null,fb(e,n),Y1(n,e),Dw(xd),ws=!!vd,xd=vd=null,e.current=n,pb(n),B2(),se=s,ue=o,It.transition=a}else e.current=n;if(Mo&&(Mo=!1,Xn=e,Is=i),a=e.pendingLanes,a===0&&(ir=null),W2(n.stateNode),yt(e,Oe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Os)throw Os=!1,e=Dd,Dd=null,e;return Is&1&&e.tag!==0&&Ci(),a=e.pendingLanes,a&1?e===Vd?Aa++:(Aa=0,Vd=e):Aa=0,mr(),null}function Ci(){if(Xn!==null){var e=Lg(Is),t=It.transition,n=ue;try{if(It.transition=null,ue=16>e?16:e,Xn===null)var r=!1;else{if(e=Xn,Xn=null,Is=0,se&6)throw Error(N(331));var i=se;for(se|=4,H=e.current;H!==null;){var a=H,o=a.child;if(H.flags&16){var s=a.deletions;if(s!==null){for(var l=0;l<s.length;l++){var d=s[l];for(H=d;H!==null;){var u=H;switch(u.tag){case 0:case 11:case 15:ka(8,u,a)}var f=u.child;if(f!==null)f.return=u,H=f;else for(;H!==null;){u=H;var p=u.sibling,g=u.return;if(U1(u),u===d){H=null;break}if(p!==null){p.return=g,H=p;break}H=g}}}var x=a.alternate;if(x!==null){var y=x.child;if(y!==null){x.child=null;do{var b=y.sibling;y.sibling=null,y=b}while(y!==null)}}H=a}}if(a.subtreeFlags&2064&&o!==null)o.return=a,H=o;else e:for(;H!==null;){if(a=H,a.flags&2048)switch(a.tag){case 0:case 11:case 15:ka(9,a,a.return)}var v=a.sibling;if(v!==null){v.return=a.return,H=v;break e}H=a.return}}var h=e.current;for(H=h;H!==null;){o=H;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,H=m;else e:for(o=h;H!==null;){if(s=H,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:ml(9,s)}}catch(S){ze(s,s.return,S)}if(s===o){H=null;break e}var w=s.sibling;if(w!==null){w.return=s.return,H=w;break e}H=s.return}}if(se=i,mr(),dn&&typeof dn.onPostCommitFiberRoot=="function")try{dn.onPostCommitFiberRoot(sl,e)}catch{}r=!0}return r}finally{ue=n,It.transition=t}}return!1}function Th(e,t,n){t=Mi(n,t),t=L1(e,t,1),e=rr(e,t,1),t=ut(),e!==null&&(so(e,1,t),yt(e,t))}function ze(e,t,n){if(e.tag===3)Th(e,e,n);else for(;t!==null;){if(t.tag===3){Th(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ir===null||!ir.has(r))){e=Mi(n,e),e=O1(t,e,1),t=rr(t,e,1),e=ut(),t!==null&&(so(t,1,e),yt(t,e));break}}t=t.return}}function yb(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ut(),e.pingedLanes|=e.suspendedLanes&n,Ye===e&&(Ze&n)===n&&($e===4||$e===3&&(Ze&130023424)===Ze&&500>Oe()-uf?_r(e,0):df|=n),yt(e,t)}function tv(e,t){t===0&&(e.mode&1?(t=jo,jo<<=1,!(jo&130023424)&&(jo=4194304)):t=1);var n=ut();e=Ln(e,t),e!==null&&(so(e,t,n),yt(e,n))}function wb(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),tv(e,n)}function bb(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(N(314))}r!==null&&r.delete(t),tv(e,n)}var nv;nv=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||vt.current)gt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return gt=!1,lb(e,t,n);gt=!!(e.flags&131072)}else gt=!1,je&&t.flags&1048576&&o1(t,As,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Jo(e,t),e=t.pendingProps;var i=Pi(t,st.current);ji(t,n),i=rf(null,t,r,e,i,n);var a=af();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,xt(r)?(a=!0,ks(t)):a=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Zu(t),i.updater=hl,t.stateNode=i,i._reactInternals=t,Ad(t,r,e,n),t=Gd(null,t,r,!0,a,n)):(t.tag=0,je&&a&&Uu(t),lt(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Jo(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=jb(r),e=Ht(r,e),i){case 0:t=Pd(null,t,r,e,n);break e;case 1:t=gh(null,t,r,e,n);break e;case 11:t=hh(null,t,r,e,n);break e;case 14:t=mh(null,t,r,Ht(r.type,e),n);break e}throw Error(N(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ht(r,i),Pd(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ht(r,i),gh(e,t,r,i,n);case 3:e:{if(V1(t),e===null)throw Error(N(387));r=t.pendingProps,a=t.memoizedState,i=a.element,f1(e,t),Gs(t,r,null,n);var o=t.memoizedState;if(r=o.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){i=Mi(Error(N(423)),t),t=vh(e,t,r,n,i);break e}else if(r!==i){i=Mi(Error(N(424)),t),t=vh(e,t,r,n,i);break e}else for(Ct=nr(t.stateNode.containerInfo.firstChild),kt=t,je=!0,Wt=null,n=d1(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Gi(),r===i){t=On(e,t,n);break e}lt(e,t,r,n)}t=t.child}return t;case 5:return p1(t),e===null&&Cd(t),r=t.type,i=t.pendingProps,a=e!==null?e.memoizedProps:null,o=i.children,yd(r,i)?o=null:a!==null&&yd(r,a)&&(t.flags|=32),D1(e,t),lt(e,t,o,n),t.child;case 6:return e===null&&Cd(t),null;case 13:return N1(e,t,n);case 4:return Ju(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=zi(t,null,r,n):lt(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ht(r,i),hh(e,t,r,i,n);case 7:return lt(e,t,t.pendingProps,n),t.child;case 8:return lt(e,t,t.pendingProps.children,n),t.child;case 12:return lt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,a=t.memoizedProps,o=i.value,me(Es,r._currentValue),r._currentValue=o,a!==null)if(Qt(a.value,o)){if(a.children===i.children&&!vt.current){t=On(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var s=a.dependencies;if(s!==null){o=a.child;for(var l=s.firstContext;l!==null;){if(l.context===r){if(a.tag===1){l=Tn(-1,n&-n),l.tag=2;var d=a.updateQueue;if(d!==null){d=d.shared;var u=d.pending;u===null?l.next=l:(l.next=u.next,u.next=l),d.pending=l}}a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),kd(a.return,n,t),s.lanes|=n;break}l=l.next}}else if(a.tag===10)o=a.type===t.type?null:a.child;else if(a.tag===18){if(o=a.return,o===null)throw Error(N(341));o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),kd(o,n,t),o=a.sibling}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===t){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}lt(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,ji(t,n),i=Rt(i),r=r(i),t.flags|=1,lt(e,t,r,n),t.child;case 14:return r=t.type,i=Ht(r,t.pendingProps),i=Ht(r.type,i),mh(e,t,r,i,n);case 15:return I1(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ht(r,i),Jo(e,t),t.tag=1,xt(r)?(e=!0,ks(t)):e=!1,ji(t,n),M1(t,r,i),Ad(t,r,i,n),Gd(null,t,r,!0,e,n);case 19:return F1(e,t,n);case 22:return R1(e,t,n)}throw Error(N(156,t.tag))};function rv(e,t){return Gg(e,t)}function Sb(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ot(e,t,n,r){return new Sb(e,t,n,r)}function mf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function jb(e){if(typeof e=="function")return mf(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Mu)return 11;if(e===Lu)return 14}return 2}function or(e,t){var n=e.alternate;return n===null?(n=Ot(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ns(e,t,n,r,i,a){var o=2;if(r=e,typeof e=="function")mf(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case ni:return Mr(n.children,i,a,t);case _u:o=8,i|=8;break;case Qc:return e=Ot(12,n,t,i|2),e.elementType=Qc,e.lanes=a,e;case Zc:return e=Ot(13,n,t,i),e.elementType=Zc,e.lanes=a,e;case Jc:return e=Ot(19,n,t,i),e.elementType=Jc,e.lanes=a,e;case pg:return vl(n,i,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ug:o=10;break e;case fg:o=9;break e;case Mu:o=11;break e;case Lu:o=14;break e;case Un:o=16,r=null;break e}throw Error(N(130,e==null?e:typeof e,""))}return t=Ot(o,n,t,i),t.elementType=e,t.type=r,t.lanes=a,t}function Mr(e,t,n,r){return e=Ot(7,e,r,t),e.lanes=n,e}function vl(e,t,n,r){return e=Ot(22,e,r,t),e.elementType=pg,e.lanes=n,e.stateNode={isHidden:!1},e}function xc(e,t,n){return e=Ot(6,e,null,t),e.lanes=n,e}function yc(e,t,n){return t=Ot(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Cb(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Jl(0),this.expirationTimes=Jl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Jl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function gf(e,t,n,r,i,a,o,s,l){return e=new Cb(e,t,n,s,l),t===1?(t=1,a===!0&&(t|=8)):t=0,a=Ot(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Zu(a),e}function kb(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ti,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function iv(e){if(!e)return dr;e=e._reactInternals;e:{if(Wr(e)!==e||e.tag!==1)throw Error(N(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(xt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(N(171))}if(e.tag===1){var n=e.type;if(xt(n))return i1(e,n,t)}return t}function av(e,t,n,r,i,a,o,s,l){return e=gf(n,r,!0,e,i,a,o,s,l),e.context=iv(null),n=e.current,r=ut(),i=ar(n),a=Tn(r,i),a.callback=t??null,rr(n,a,i),e.current.lanes=i,so(e,i,r),yt(e,r),e}function xl(e,t,n,r){var i=t.current,a=ut(),o=ar(i);return n=iv(n),t.context===null?t.context=n:t.pendingContext=n,t=Tn(a,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=rr(i,t,o),e!==null&&(Kt(e,i,o,a),Xo(e,i,o)),o}function Ds(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ah(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function vf(e,t){Ah(e,t),(e=e.alternate)&&Ah(e,t)}function Tb(){return null}var ov=typeof reportError=="function"?reportError:function(e){console.error(e)};function xf(e){this._internalRoot=e}yl.prototype.render=xf.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(N(409));xl(e,t,null,null)};yl.prototype.unmount=xf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Fr(function(){xl(null,e,null,null)}),t[Mn]=null}};function yl(e){this._internalRoot=e}yl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Rg();e={blockedOn:null,target:e,priority:t};for(var n=0;n<qn.length&&t!==0&&t<qn[n].priority;n++);qn.splice(n,0,e),n===0&&Vg(e)}};function yf(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function wl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Eh(){}function Ab(e,t,n,r,i){if(i){if(typeof r=="function"){var a=r;r=function(){var d=Ds(o);a.call(d)}}var o=av(t,r,e,0,null,!1,!1,"",Eh);return e._reactRootContainer=o,e[Mn]=o.current,Ba(e.nodeType===8?e.parentNode:e),Fr(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var d=Ds(l);s.call(d)}}var l=gf(e,0,!1,null,null,!1,!1,"",Eh);return e._reactRootContainer=l,e[Mn]=l.current,Ba(e.nodeType===8?e.parentNode:e),Fr(function(){xl(t,l,n,r)}),l}function bl(e,t,n,r,i){var a=n._reactRootContainer;if(a){var o=a;if(typeof i=="function"){var s=i;i=function(){var l=Ds(o);s.call(l)}}xl(t,o,e,i)}else o=Ab(n,t,e,i,r);return Ds(o)}Og=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ha(t.pendingLanes);n!==0&&(Ru(t,n|1),yt(t,Oe()),!(se&6)&&(Li=Oe()+500,mr()))}break;case 13:Fr(function(){var r=Ln(e,1);if(r!==null){var i=ut();Kt(r,e,1,i)}}),vf(e,1)}};Du=function(e){if(e.tag===13){var t=Ln(e,134217728);if(t!==null){var n=ut();Kt(t,e,134217728,n)}vf(e,134217728)}};Ig=function(e){if(e.tag===13){var t=ar(e),n=Ln(e,t);if(n!==null){var r=ut();Kt(n,e,t,r)}vf(e,t)}};Rg=function(){return ue};Dg=function(e,t){var n=ue;try{return ue=e,t()}finally{ue=n}};cd=function(e,t,n){switch(t){case"input":if(nd(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=ul(r);if(!i)throw Error(N(90));mg(r),nd(r,i)}}}break;case"textarea":vg(e,n);break;case"select":t=n.value,t!=null&&yi(e,!!n.multiple,t,!1)}};Cg=ff;kg=Fr;var Eb={usingClientEntryPoint:!1,Events:[co,oi,ul,Sg,jg,ff]},oa={findFiberByHostInstance:Ar,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Pb={bundleType:oa.bundleType,version:oa.version,rendererPackageName:oa.rendererPackageName,rendererConfig:oa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Rn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Eg(e),e===null?null:e.stateNode},findFiberByHostInstance:oa.findFiberByHostInstance||Tb,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Lo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Lo.isDisabled&&Lo.supportsFiber)try{sl=Lo.inject(Pb),dn=Lo}catch{}}Et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Eb;Et.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!yf(t))throw Error(N(200));return kb(e,t,null,n)};Et.createRoot=function(e,t){if(!yf(e))throw Error(N(299));var n=!1,r="",i=ov;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=gf(e,1,!1,null,null,n,!1,r,i),e[Mn]=t.current,Ba(e.nodeType===8?e.parentNode:e),new xf(t)};Et.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(N(188)):(e=Object.keys(e).join(","),Error(N(268,e)));return e=Eg(t),e=e===null?null:e.stateNode,e};Et.flushSync=function(e){return Fr(e)};Et.hydrate=function(e,t,n){if(!wl(t))throw Error(N(200));return bl(null,e,t,!0,n)};Et.hydrateRoot=function(e,t,n){if(!yf(e))throw Error(N(405));var r=n!=null&&n.hydratedSources||null,i=!1,a="",o=ov;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=av(t,null,e,1,n??null,i,!1,a,o),e[Mn]=t.current,Ba(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new yl(t)};Et.render=function(e,t,n){if(!wl(t))throw Error(N(200));return bl(null,e,t,!1,n)};Et.unmountComponentAtNode=function(e){if(!wl(e))throw Error(N(40));return e._reactRootContainer?(Fr(function(){bl(null,null,e,!1,function(){e._reactRootContainer=null,e[Mn]=null})}),!0):!1};Et.unstable_batchedUpdates=ff;Et.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!wl(n))throw Error(N(200));if(e==null||e._reactInternals===void 0)throw Error(N(38));return bl(e,t,n,!1,r)};Et.version="18.3.1-next-f1338f8080-20240426";function sv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(sv)}catch(e){console.error(e)}}sv(),sg.exports=Et;var Gb=sg.exports,lv,Ph=Gb;lv=Ph.createRoot,Ph.hydrateRoot;/**
 * @remix-run/router v1.20.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Za(){return Za=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Za.apply(this,arguments)}var Qn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Qn||(Qn={}));const Gh="popstate";function zb(e){e===void 0&&(e={});function t(i,a){let{pathname:o="/",search:s="",hash:l=""}=qr(i.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),$d("",{pathname:o,search:s,hash:l},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function n(i,a){let o=i.document.querySelector("base"),s="";if(o&&o.getAttribute("href")){let l=i.location.href,d=l.indexOf("#");s=d===-1?l:l.slice(0,d)}return s+"#"+(typeof a=="string"?a:Vs(a))}function r(i,a){wf(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(a)+")")}return Mb(t,n,r,e)}function Ne(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function wf(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function _b(){return Math.random().toString(36).substr(2,8)}function zh(e,t){return{usr:e.state,key:e.key,idx:t}}function $d(e,t,n,r){return n===void 0&&(n=null),Za({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?qr(t):t,{state:n,key:t&&t.key||r||_b()})}function Vs(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function qr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Mb(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,s=Qn.Pop,l=null,d=u();d==null&&(d=0,o.replaceState(Za({},o.state,{idx:d}),""));function u(){return(o.state||{idx:null}).idx}function f(){s=Qn.Pop;let b=u(),v=b==null?null:b-d;d=b,l&&l({action:s,location:y.location,delta:v})}function p(b,v){s=Qn.Push;let h=$d(y.location,b,v);n&&n(h,b),d=u()+1;let m=zh(h,d),w=y.createHref(h);try{o.pushState(m,"",w)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;i.location.assign(w)}a&&l&&l({action:s,location:y.location,delta:1})}function g(b,v){s=Qn.Replace;let h=$d(y.location,b,v);n&&n(h,b),d=u();let m=zh(h,d),w=y.createHref(h);o.replaceState(m,"",w),a&&l&&l({action:s,location:y.location,delta:0})}function x(b){let v=i.location.origin!=="null"?i.location.origin:i.location.href,h=typeof b=="string"?b:Vs(b);return h=h.replace(/ $/,"%20"),Ne(v,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,v)}let y={get action(){return s},get location(){return e(i,o)},listen(b){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Gh,f),l=b,()=>{i.removeEventListener(Gh,f),l=null}},createHref(b){return t(i,b)},createURL:x,encodeLocation(b){let v=x(b);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:p,replace:g,go(b){return o.go(b)}};return y}var _h;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(_h||(_h={}));function Lb(e,t,n){return n===void 0&&(n="/"),Ob(e,t,n,!1)}function Ob(e,t,n,r){let i=typeof t=="string"?qr(t):t,a=bf(i.pathname||"/",n);if(a==null)return null;let o=cv(e);Ib(o);let s=null;for(let l=0;s==null&&l<o.length;++l){let d=qb(a);s=Ub(o[l],d,r)}return s}function cv(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(a,o,s)=>{let l={relativePath:s===void 0?a.path||"":s,caseSensitive:a.caseSensitive===!0,childrenIndex:o,route:a};l.relativePath.startsWith("/")&&(Ne(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let d=sr([r,l.relativePath]),u=n.concat(l);a.children&&a.children.length>0&&(Ne(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),cv(a.children,t,u,d)),!(a.path==null&&!a.index)&&t.push({path:d,score:Bb(d,a.index),routesMeta:u})};return e.forEach((a,o)=>{var s;if(a.path===""||!((s=a.path)!=null&&s.includes("?")))i(a,o);else for(let l of dv(a.path))i(a,o,l)}),t}function dv(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),a=n.replace(/\?$/,"");if(r.length===0)return i?[a,""]:[a];let o=dv(r.join("/")),s=[];return s.push(...o.map(l=>l===""?a:[a,l].join("/"))),i&&s.push(...o),s.map(l=>e.startsWith("/")&&l===""?"/":l)}function Ib(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Hb(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Rb=/^:[\w-]+$/,Db=3,Vb=2,Nb=1,Fb=10,$b=-2,Mh=e=>e==="*";function Bb(e,t){let n=e.split("/"),r=n.length;return n.some(Mh)&&(r+=$b),t&&(r+=Vb),n.filter(i=>!Mh(i)).reduce((i,a)=>i+(Rb.test(a)?Db:a===""?Nb:Fb),r)}function Hb(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function Ub(e,t,n){let{routesMeta:r}=e,i={},a="/",o=[];for(let s=0;s<r.length;++s){let l=r[s],d=s===r.length-1,u=a==="/"?t:t.slice(a.length)||"/",f=Lh({path:l.relativePath,caseSensitive:l.caseSensitive,end:d},u),p=l.route;if(!f&&d&&n&&!r[r.length-1].route.index&&(f=Lh({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},u)),!f)return null;Object.assign(i,f.params),o.push({params:i,pathname:sr([a,f.pathname]),pathnameBase:Qb(sr([a,f.pathnameBase])),route:p}),f.pathnameBase!=="/"&&(a=sr([a,f.pathnameBase]))}return o}function Lh(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Wb(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce((d,u,f)=>{let{paramName:p,isOptional:g}=u;if(p==="*"){let y=s[f]||"";o=a.slice(0,a.length-y.length).replace(/(.)\/+$/,"$1")}const x=s[f];return g&&!x?d[p]=void 0:d[p]=(x||"").replace(/%2F/g,"/"),d},{}),pathname:a,pathnameBase:o,pattern:e}}function Wb(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),wf(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,s,l)=>(r.push({paramName:s,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function qb(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return wf(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function bf(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Yb(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?qr(e):e;return{pathname:n?n.startsWith("/")?n:Kb(n,t):t,search:Zb(r),hash:Jb(i)}}function Kb(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function wc(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Xb(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function uv(e,t){let n=Xb(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function fv(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=qr(e):(i=Za({},e),Ne(!i.pathname||!i.pathname.includes("?"),wc("?","pathname","search",i)),Ne(!i.pathname||!i.pathname.includes("#"),wc("#","pathname","hash",i)),Ne(!i.search||!i.search.includes("#"),wc("#","search","hash",i)));let a=e===""||i.pathname==="",o=a?"/":i.pathname,s;if(o==null)s=n;else{let f=t.length-1;if(!r&&o.startsWith("..")){let p=o.split("/");for(;p[0]==="..";)p.shift(),f-=1;i.pathname=p.join("/")}s=f>=0?t[f]:"/"}let l=Yb(i,s),d=o&&o!=="/"&&o.endsWith("/"),u=(a||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(d||u)&&(l.pathname+="/"),l}const sr=e=>e.join("/").replace(/\/\/+/g,"/"),Qb=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Zb=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Jb=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function e4(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const pv=["post","put","patch","delete"];new Set(pv);const t4=["get",...pv];new Set(t4);/**
 * React Router v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ja(){return Ja=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ja.apply(this,arguments)}const Sf=j.createContext(null),n4=j.createContext(null),Yr=j.createContext(null),Sl=j.createContext(null),Kr=j.createContext({outlet:null,matches:[],isDataRoute:!1}),hv=j.createContext(null);function r4(e,t){let{relative:n}=t===void 0?{}:t;fo()||Ne(!1);let{basename:r,navigator:i}=j.useContext(Yr),{hash:a,pathname:o,search:s}=gv(e,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:sr([r,o])),i.createHref({pathname:l,search:s,hash:a})}function fo(){return j.useContext(Sl)!=null}function mn(){return fo()||Ne(!1),j.useContext(Sl).location}function mv(e){j.useContext(Yr).static||j.useLayoutEffect(e)}function jl(){let{isDataRoute:e}=j.useContext(Kr);return e?g4():i4()}function i4(){fo()||Ne(!1);let e=j.useContext(Sf),{basename:t,future:n,navigator:r}=j.useContext(Yr),{matches:i}=j.useContext(Kr),{pathname:a}=mn(),o=JSON.stringify(uv(i,n.v7_relativeSplatPath)),s=j.useRef(!1);return mv(()=>{s.current=!0}),j.useCallback(function(d,u){if(u===void 0&&(u={}),!s.current)return;if(typeof d=="number"){r.go(d);return}let f=fv(d,JSON.parse(o),a,u.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:sr([t,f.pathname])),(u.replace?r.replace:r.push)(f,u.state,u)},[t,r,o,a,e])}function gv(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=j.useContext(Yr),{matches:i}=j.useContext(Kr),{pathname:a}=mn(),o=JSON.stringify(uv(i,r.v7_relativeSplatPath));return j.useMemo(()=>fv(e,JSON.parse(o),a,n==="path"),[e,o,a,n])}function a4(e,t){return o4(e,t)}function o4(e,t,n,r){fo()||Ne(!1);let{navigator:i}=j.useContext(Yr),{matches:a}=j.useContext(Kr),o=a[a.length-1],s=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let d=mn(),u;if(t){var f;let b=typeof t=="string"?qr(t):t;l==="/"||(f=b.pathname)!=null&&f.startsWith(l)||Ne(!1),u=b}else u=d;let p=u.pathname||"/",g=p;if(l!=="/"){let b=l.replace(/^\//,"").split("/");g="/"+p.replace(/^\//,"").split("/").slice(b.length).join("/")}let x=Lb(e,{pathname:g}),y=u4(x&&x.map(b=>Object.assign({},b,{params:Object.assign({},s,b.params),pathname:sr([l,i.encodeLocation?i.encodeLocation(b.pathname).pathname:b.pathname]),pathnameBase:b.pathnameBase==="/"?l:sr([l,i.encodeLocation?i.encodeLocation(b.pathnameBase).pathname:b.pathnameBase])})),a,n,r);return t&&y?j.createElement(Sl.Provider,{value:{location:Ja({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Qn.Pop}},y):y}function s4(){let e=m4(),t=e4(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},t),n?j.createElement("pre",{style:i},n):null,null)}const l4=j.createElement(s4,null);class c4 extends j.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?j.createElement(Kr.Provider,{value:this.props.routeContext},j.createElement(hv.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function d4(e){let{routeContext:t,match:n,children:r}=e,i=j.useContext(Sf);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),j.createElement(Kr.Provider,{value:t},r)}function u4(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var a;if(!n)return null;if(n.errors)e=n.matches;else if((a=r)!=null&&a.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let o=e,s=(i=n)==null?void 0:i.errors;if(s!=null){let u=o.findIndex(f=>f.route.id&&(s==null?void 0:s[f.route.id])!==void 0);u>=0||Ne(!1),o=o.slice(0,Math.min(o.length,u+1))}let l=!1,d=-1;if(n&&r&&r.v7_partialHydration)for(let u=0;u<o.length;u++){let f=o[u];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(d=u),f.route.id){let{loaderData:p,errors:g}=n,x=f.route.loader&&p[f.route.id]===void 0&&(!g||g[f.route.id]===void 0);if(f.route.lazy||x){l=!0,d>=0?o=o.slice(0,d+1):o=[o[0]];break}}}return o.reduceRight((u,f,p)=>{let g,x=!1,y=null,b=null;n&&(g=s&&f.route.id?s[f.route.id]:void 0,y=f.route.errorElement||l4,l&&(d<0&&p===0?(x=!0,b=null):d===p&&(x=!0,b=f.route.hydrateFallbackElement||null)));let v=t.concat(o.slice(0,p+1)),h=()=>{let m;return g?m=y:x?m=b:f.route.Component?m=j.createElement(f.route.Component,null):f.route.element?m=f.route.element:m=u,j.createElement(d4,{match:f,routeContext:{outlet:u,matches:v,isDataRoute:n!=null},children:m})};return n&&(f.route.ErrorBoundary||f.route.errorElement||p===0)?j.createElement(c4,{location:n.location,revalidation:n.revalidation,component:y,error:g,children:h(),routeContext:{outlet:null,matches:v,isDataRoute:!0}}):h()},null)}var vv=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(vv||{}),Ns=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Ns||{});function f4(e){let t=j.useContext(Sf);return t||Ne(!1),t}function p4(e){let t=j.useContext(n4);return t||Ne(!1),t}function h4(e){let t=j.useContext(Kr);return t||Ne(!1),t}function xv(e){let t=h4(),n=t.matches[t.matches.length-1];return n.route.id||Ne(!1),n.route.id}function m4(){var e;let t=j.useContext(hv),n=p4(Ns.UseRouteError),r=xv(Ns.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function g4(){let{router:e}=f4(vv.UseNavigateStable),t=xv(Ns.UseNavigateStable),n=j.useRef(!1);return mv(()=>{n.current=!0}),j.useCallback(function(i,a){a===void 0&&(a={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Ja({fromRouteId:t},a)))},[e,t])}function rn(e){Ne(!1)}function v4(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Qn.Pop,navigator:a,static:o=!1,future:s}=e;fo()&&Ne(!1);let l=t.replace(/^\/*/,"/"),d=j.useMemo(()=>({basename:l,navigator:a,static:o,future:Ja({v7_relativeSplatPath:!1},s)}),[l,s,a,o]);typeof r=="string"&&(r=qr(r));let{pathname:u="/",search:f="",hash:p="",state:g=null,key:x="default"}=r,y=j.useMemo(()=>{let b=bf(u,l);return b==null?null:{location:{pathname:b,search:f,hash:p,state:g,key:x},navigationType:i}},[l,u,f,p,g,x,i]);return y==null?null:j.createElement(Yr.Provider,{value:d},j.createElement(Sl.Provider,{children:n,value:y}))}function x4(e){let{children:t,location:n}=e;return a4(Bd(t),n)}new Promise(()=>{});function Bd(e,t){t===void 0&&(t=[]);let n=[];return j.Children.forEach(e,(r,i)=>{if(!j.isValidElement(r))return;let a=[...t,i];if(r.type===j.Fragment){n.push.apply(n,Bd(r.props.children,a));return}r.type!==rn&&Ne(!1),!r.props.index||!r.props.children||Ne(!1);let o={id:r.props.id||a.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Bd(r.props.children,a)),n.push(o)}),n}/**
 * React Router DOM v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Hd(){return Hd=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Hd.apply(this,arguments)}function y4(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,a;for(a=0;a<r.length;a++)i=r[a],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function w4(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function b4(e,t){return e.button===0&&(!t||t==="_self")&&!w4(e)}const S4=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],j4="6";try{window.__reactRouterVersion=j4}catch{}const C4="startTransition",Oh=y2[C4];function k4(e){let{basename:t,children:n,future:r,window:i}=e,a=j.useRef();a.current==null&&(a.current=zb({window:i,v5Compat:!0}));let o=a.current,[s,l]=j.useState({action:o.action,location:o.location}),{v7_startTransition:d}=r||{},u=j.useCallback(f=>{d&&Oh?Oh(()=>l(f)):l(f)},[l,d]);return j.useLayoutEffect(()=>o.listen(u),[o,u]),j.createElement(v4,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:o,future:r})}const T4=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",A4=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,yv=j.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:a,replace:o,state:s,target:l,to:d,preventScrollReset:u,viewTransition:f}=t,p=y4(t,S4),{basename:g}=j.useContext(Yr),x,y=!1;if(typeof d=="string"&&A4.test(d)&&(x=d,T4))try{let m=new URL(window.location.href),w=d.startsWith("//")?new URL(m.protocol+d):new URL(d),S=bf(w.pathname,g);w.origin===m.origin&&S!=null?d=S+w.search+w.hash:y=!0}catch{}let b=r4(d,{relative:i}),v=E4(d,{replace:o,state:s,target:l,preventScrollReset:u,relative:i,viewTransition:f});function h(m){r&&r(m),m.defaultPrevented||v(m)}return j.createElement("a",Hd({},p,{href:x||b,onClick:y||a?r:h,ref:n,target:l}))});var Ih;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Ih||(Ih={}));var Rh;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Rh||(Rh={}));function E4(e,t){let{target:n,replace:r,state:i,preventScrollReset:a,relative:o,viewTransition:s}=t===void 0?{}:t,l=jl(),d=mn(),u=gv(e,{relative:o});return j.useCallback(f=>{if(b4(f,n)){f.preventDefault();let p=r!==void 0?r:Vs(d)===Vs(u);l(e,{replace:p,state:i,preventScrollReset:a,relative:o,viewTransition:s})}},[d,l,u,r,i,n,e,a,o,s])}function P4(e){if(typeof Proxy>"u")return e;const t=new Map,n=(...r)=>e(...r);return new Proxy(n,{get:(r,i)=>i==="create"?e:(t.has(i)||t.set(i,e(i)),t.get(i))})}function Cl(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}const Ud=e=>Array.isArray(e);function wv(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}function eo(e){return typeof e=="string"||Array.isArray(e)}function Dh(e){const t=[{},{}];return e==null||e.values.forEach((n,r)=>{t[0][r]=n.get(),t[1][r]=n.getVelocity()}),t}function jf(e,t,n,r){if(typeof t=="function"){const[i,a]=Dh(r);t=t(n!==void 0?n:e.custom,i,a)}if(typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"){const[i,a]=Dh(r);t=t(n!==void 0?n:e.custom,i,a)}return t}function kl(e,t,n){const r=e.getProps();return jf(r,t,n!==void 0?n:r.custom,e)}const Cf=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],kf=["initial",...Cf],po=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Xr=new Set(po),An=e=>e*1e3,En=e=>e/1e3,G4={type:"spring",stiffness:500,damping:25,restSpeed:10},z4=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),_4={type:"keyframes",duration:.8},M4={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},L4=(e,{keyframes:t})=>t.length>2?_4:Xr.has(e)?e.startsWith("scale")?z4(t[1]):G4:M4;function Tf(e,t){return e?e[t]||e.default||e:void 0}const O4={skipAnimations:!1,useManualTiming:!1},I4=e=>e!==null;function Tl(e,{repeat:t,repeatType:n="loop"},r){const i=e.filter(I4),a=t&&n!=="loop"&&t%2===1?0:i.length-1;return!a||r===void 0?i[a]:r}const Je=e=>e;function R4(e){let t=new Set,n=new Set,r=!1,i=!1;const a=new WeakSet;let o={delta:0,timestamp:0,isProcessing:!1};function s(d){a.has(d)&&(l.schedule(d),e()),d(o)}const l={schedule:(d,u=!1,f=!1)=>{const g=f&&r?t:n;return u&&a.add(d),g.has(d)||g.add(d),d},cancel:d=>{n.delete(d),a.delete(d)},process:d=>{if(o=d,r){i=!0;return}r=!0,[t,n]=[n,t],n.clear(),t.forEach(s),r=!1,i&&(i=!1,l.process(d))}};return l}const Oo=["read","resolveKeyframes","update","preRender","render","postRender"],D4=40;function bv(e,t){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},a=()=>n=!0,o=Oo.reduce((v,h)=>(v[h]=R4(a),v),{}),{read:s,resolveKeyframes:l,update:d,preRender:u,render:f,postRender:p}=o,g=()=>{const v=performance.now();n=!1,i.delta=r?1e3/60:Math.max(Math.min(v-i.timestamp,D4),1),i.timestamp=v,i.isProcessing=!0,s.process(i),l.process(i),d.process(i),u.process(i),f.process(i),p.process(i),i.isProcessing=!1,n&&t&&(r=!1,e(g))},x=()=>{n=!0,r=!0,i.isProcessing||e(g)};return{schedule:Oo.reduce((v,h)=>{const m=o[h];return v[h]=(w,S=!1,C=!1)=>(n||x(),m.schedule(w,S,C)),v},{}),cancel:v=>{for(let h=0;h<Oo.length;h++)o[Oo[h]].cancel(v)},state:i,steps:o}}const{schedule:oe,cancel:Zt,state:Be,steps:bc}=bv(typeof requestAnimationFrame<"u"?requestAnimationFrame:Je,!0),Sv=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,V4=1e-7,N4=12;function F4(e,t,n,r,i){let a,o,s=0;do o=t+(n-t)/2,a=Sv(o,r,i)-e,a>0?n=o:t=o;while(Math.abs(a)>V4&&++s<N4);return o}function ho(e,t,n,r){if(e===t&&n===r)return Je;const i=a=>F4(a,0,1,e,n);return a=>a===0||a===1?a:Sv(i(a),t,r)}const jv=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,Cv=e=>t=>1-e(1-t),kv=ho(.33,1.53,.69,.99),Af=Cv(kv),Tv=jv(Af),Av=e=>(e*=2)<1?.5*Af(e):.5*(2-Math.pow(2,-10*(e-1))),Ef=e=>1-Math.sin(Math.acos(e)),Ev=Cv(Ef),Pv=jv(Ef),Gv=e=>/^0[^.\s]+$/u.test(e);function $4(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||Gv(e):!0}let B4=Je,Wd=Je;const zv=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),_v=e=>t=>typeof t=="string"&&t.startsWith(e),Mv=_v("--"),H4=_v("var(--"),Pf=e=>H4(e)?U4.test(e.split("/*")[0].trim()):!1,U4=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,W4=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function q4(e){const t=W4.exec(e);if(!t)return[,];const[,n,r,i]=t;return[`--${n??r}`,i]}function Lv(e,t,n=1){const[r,i]=q4(e);if(!r)return;const a=window.getComputedStyle(t).getPropertyValue(r);if(a){const o=a.trim();return zv(o)?parseFloat(o):o}return Pf(i)?Lv(i,t,n+1):i}const ur=(e,t,n)=>n>t?t:n<e?e:n,Wi={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},to={...Wi,transform:e=>ur(0,1,e)},Io={...Wi,default:1},mo=e=>({test:t=>typeof t=="string"&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),$n=mo("deg"),fn=mo("%"),W=mo("px"),Y4=mo("vh"),K4=mo("vw"),Vh={...fn,parse:e=>fn.parse(e)/100,transform:e=>fn.transform(e*100)},X4=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),Nh=e=>e===Wi||e===W,Fh=(e,t)=>parseFloat(e.split(", ")[t]),$h=(e,t)=>(n,{transform:r})=>{if(r==="none"||!r)return 0;const i=r.match(/^matrix3d\((.+)\)$/u);if(i)return Fh(i[1],t);{const a=r.match(/^matrix\((.+)\)$/u);return a?Fh(a[1],e):0}},Q4=new Set(["x","y","z"]),Z4=po.filter(e=>!Q4.has(e));function J4(e){const t=[];return Z4.forEach(n=>{const r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t}const Oi={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:$h(4,13),y:$h(5,14)};Oi.translateX=Oi.x;Oi.translateY=Oi.y;const Ov=e=>t=>t.test(e),e5={test:e=>e==="auto",parse:e=>e},Iv=[Wi,W,fn,$n,K4,Y4,e5],Bh=e=>Iv.find(Ov(e)),Lr=new Set;let qd=!1,Yd=!1;function Rv(){if(Yd){const e=Array.from(Lr).filter(r=>r.needsMeasurement),t=new Set(e.map(r=>r.element)),n=new Map;t.forEach(r=>{const i=J4(r);i.length&&(n.set(r,i),r.render())}),e.forEach(r=>r.measureInitialState()),t.forEach(r=>{r.render();const i=n.get(r);i&&i.forEach(([a,o])=>{var s;(s=r.getValue(a))===null||s===void 0||s.set(o)})}),e.forEach(r=>r.measureEndState()),e.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}Yd=!1,qd=!1,Lr.forEach(e=>e.complete()),Lr.clear()}function Dv(){Lr.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(Yd=!0)})}function t5(){Dv(),Rv()}class Gf{constructor(t,n,r,i,a,o=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...t],this.onComplete=n,this.name=r,this.motionValue=i,this.element=a,this.isAsync=o}scheduleResolve(){this.isScheduled=!0,this.isAsync?(Lr.add(this),qd||(qd=!0,oe.read(Dv),oe.resolveKeyframes(Rv))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:n,element:r,motionValue:i}=this;for(let a=0;a<t.length;a++)if(t[a]===null)if(a===0){const o=i==null?void 0:i.get(),s=t[t.length-1];if(o!==void 0)t[0]=o;else if(r&&n){const l=r.readValue(n,s);l!=null&&(t[0]=l)}t[0]===void 0&&(t[0]=s),i&&o===void 0&&i.set(t[0])}else t[a]=t[a-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),Lr.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,Lr.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const Ea=e=>Math.round(e*1e5)/1e5,zf=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function n5(e){return e==null}const r5=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,_f=(e,t)=>n=>!!(typeof n=="string"&&r5.test(n)&&n.startsWith(e)||t&&!n5(n)&&Object.prototype.hasOwnProperty.call(n,t)),Vv=(e,t,n)=>r=>{if(typeof r!="string")return r;const[i,a,o,s]=r.match(zf);return{[e]:parseFloat(i),[t]:parseFloat(a),[n]:parseFloat(o),alpha:s!==void 0?parseFloat(s):1}},i5=e=>ur(0,255,e),Sc={...Wi,transform:e=>Math.round(i5(e))},Gr={test:_f("rgb","red"),parse:Vv("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+Sc.transform(e)+", "+Sc.transform(t)+", "+Sc.transform(n)+", "+Ea(to.transform(r))+")"};function a5(e){let t="",n="",r="",i="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}const Kd={test:_f("#"),parse:a5,transform:Gr.transform},pi={test:_f("hsl","hue"),parse:Vv("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+fn.transform(Ea(t))+", "+fn.transform(Ea(n))+", "+Ea(to.transform(r))+")"},rt={test:e=>Gr.test(e)||Kd.test(e)||pi.test(e),parse:e=>Gr.test(e)?Gr.parse(e):pi.test(e)?pi.parse(e):Kd.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?Gr.transform(e):pi.transform(e)},o5=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function s5(e){var t,n;return isNaN(e)&&typeof e=="string"&&(((t=e.match(zf))===null||t===void 0?void 0:t.length)||0)+(((n=e.match(o5))===null||n===void 0?void 0:n.length)||0)>0}const Nv="number",Fv="color",l5="var",c5="var(",Hh="${}",d5=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function no(e){const t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[];let a=0;const s=t.replace(d5,l=>(rt.test(l)?(r.color.push(a),i.push(Fv),n.push(rt.parse(l))):l.startsWith(c5)?(r.var.push(a),i.push(l5),n.push(l)):(r.number.push(a),i.push(Nv),n.push(parseFloat(l))),++a,Hh)).split(Hh);return{values:n,split:s,indexes:r,types:i}}function $v(e){return no(e).values}function Bv(e){const{split:t,types:n}=no(e),r=t.length;return i=>{let a="";for(let o=0;o<r;o++)if(a+=t[o],i[o]!==void 0){const s=n[o];s===Nv?a+=Ea(i[o]):s===Fv?a+=rt.transform(i[o]):a+=i[o]}return a}}const u5=e=>typeof e=="number"?0:e;function f5(e){const t=$v(e);return Bv(e)(t.map(u5))}const fr={test:s5,parse:$v,createTransformer:Bv,getAnimatableNone:f5},p5=new Set(["brightness","contrast","saturate","opacity"]);function h5(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(zf)||[];if(!r)return e;const i=n.replace(r,"");let a=p5.has(t)?1:0;return r!==n&&(a*=100),t+"("+a+i+")"}const m5=/\b([a-z-]*)\(.*?\)/gu,Xd={...fr,getAnimatableNone:e=>{const t=e.match(m5);return t?t.map(h5).join(" "):e}},g5={borderWidth:W,borderTopWidth:W,borderRightWidth:W,borderBottomWidth:W,borderLeftWidth:W,borderRadius:W,radius:W,borderTopLeftRadius:W,borderTopRightRadius:W,borderBottomRightRadius:W,borderBottomLeftRadius:W,width:W,maxWidth:W,height:W,maxHeight:W,top:W,right:W,bottom:W,left:W,padding:W,paddingTop:W,paddingRight:W,paddingBottom:W,paddingLeft:W,margin:W,marginTop:W,marginRight:W,marginBottom:W,marginLeft:W,backgroundPositionX:W,backgroundPositionY:W},v5={rotate:$n,rotateX:$n,rotateY:$n,rotateZ:$n,scale:Io,scaleX:Io,scaleY:Io,scaleZ:Io,skew:$n,skewX:$n,skewY:$n,distance:W,translateX:W,translateY:W,translateZ:W,x:W,y:W,z:W,perspective:W,transformPerspective:W,opacity:to,originX:Vh,originY:Vh,originZ:W},Uh={...Wi,transform:Math.round},Mf={...g5,...v5,zIndex:Uh,size:W,fillOpacity:to,strokeOpacity:to,numOctaves:Uh},x5={...Mf,color:rt,backgroundColor:rt,outlineColor:rt,fill:rt,stroke:rt,borderColor:rt,borderTopColor:rt,borderRightColor:rt,borderBottomColor:rt,borderLeftColor:rt,filter:Xd,WebkitFilter:Xd},Lf=e=>x5[e];function Hv(e,t){let n=Lf(e);return n!==Xd&&(n=fr),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const y5=new Set(["auto","none","0"]);function w5(e,t,n){let r=0,i;for(;r<e.length&&!i;){const a=e[r];typeof a=="string"&&!y5.has(a)&&no(a).values.length&&(i=e[r]),r++}if(i&&n)for(const a of t)e[a]=Hv(n,i)}class Uv extends Gf{constructor(t,n,r,i,a){super(t,n,r,i,a,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:n,name:r}=this;if(!n||!n.current)return;super.readKeyframes();for(let l=0;l<t.length;l++){let d=t[l];if(typeof d=="string"&&(d=d.trim(),Pf(d))){const u=Lv(d,n.current);u!==void 0&&(t[l]=u),l===t.length-1&&(this.finalKeyframe=d)}}if(this.resolveNoneKeyframes(),!X4.has(r)||t.length!==2)return;const[i,a]=t,o=Bh(i),s=Bh(a);if(o!==s)if(Nh(o)&&Nh(s))for(let l=0;l<t.length;l++){const d=t[l];typeof d=="string"&&(t[l]=parseFloat(d))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:n}=this,r=[];for(let i=0;i<t.length;i++)$4(t[i])&&r.push(i);r.length&&w5(t,r,n)}measureInitialState(){const{element:t,unresolvedKeyframes:n,name:r}=this;if(!t||!t.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Oi[r](t.measureViewportBox(),window.getComputedStyle(t.current)),n[0]=this.measuredOrigin;const i=n[n.length-1];i!==void 0&&t.getValue(r,i).jump(i,!1)}measureEndState(){var t;const{element:n,name:r,unresolvedKeyframes:i}=this;if(!n||!n.current)return;const a=n.getValue(r);a&&a.jump(this.measuredOrigin,!1);const o=i.length-1,s=i[o];i[o]=Oi[r](n.measureViewportBox(),window.getComputedStyle(n.current)),s!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=s),!((t=this.removedTransforms)===null||t===void 0)&&t.length&&this.removedTransforms.forEach(([l,d])=>{n.getValue(l).set(d)}),this.resolveNoneKeyframes()}}function Of(e){return typeof e=="function"}let rs;function b5(){rs=void 0}const pn={now:()=>(rs===void 0&&pn.set(Be.isProcessing||O4.useManualTiming?Be.timestamp:performance.now()),rs),set:e=>{rs=e,queueMicrotask(b5)}},Wh=(e,t)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(fr.test(e)||e==="0")&&!e.startsWith("url("));function S5(e){const t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function j5(e,t,n,r){const i=e[0];if(i===null)return!1;if(t==="display"||t==="visibility")return!0;const a=e[e.length-1],o=Wh(i,t),s=Wh(a,t);return!o||!s?!1:S5(e)||(n==="spring"||Of(n))&&r}const C5=40;class Wv{constructor({autoplay:t=!0,delay:n=0,type:r="keyframes",repeat:i=0,repeatDelay:a=0,repeatType:o="loop",...s}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=pn.now(),this.options={autoplay:t,delay:n,type:r,repeat:i,repeatDelay:a,repeatType:o,...s},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>C5?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&t5(),this._resolved}onKeyframesResolved(t,n){this.resolvedAt=pn.now(),this.hasAttemptedResolve=!0;const{name:r,type:i,velocity:a,delay:o,onComplete:s,onUpdate:l,isGenerator:d}=this.options;if(!d&&!j5(t,r,i,a))if(o)this.options.duration=0;else{l==null||l(Tl(t,this.options,n)),s==null||s(),this.resolveFinishedPromise();return}const u=this.initPlayback(t,n);u!==!1&&(this._resolved={keyframes:t,finalKeyframe:n,...u},this.onPostResolved())}onPostResolved(){}then(t,n){return this.currentFinishedPromise.then(t,n)}updateFinishedPromise(){this.currentFinishedPromise=new Promise(t=>{this.resolveFinishedPromise=t})}}function If(e,t){return t?e*(1e3/t):0}const k5=5;function qv(e,t,n){const r=Math.max(t-k5,0);return If(n-e(r),t-r)}const jc=.001,T5=.01,A5=10,E5=.05,P5=1;function G5({duration:e=800,bounce:t=.25,velocity:n=0,mass:r=1}){let i,a,o=1-t;o=ur(E5,P5,o),e=ur(T5,A5,En(e)),o<1?(i=d=>{const u=d*o,f=u*e,p=u-n,g=Qd(d,o),x=Math.exp(-f);return jc-p/g*x},a=d=>{const f=d*o*e,p=f*n+n,g=Math.pow(o,2)*Math.pow(d,2)*e,x=Math.exp(-f),y=Qd(Math.pow(d,2),o);return(-i(d)+jc>0?-1:1)*((p-g)*x)/y}):(i=d=>{const u=Math.exp(-d*e),f=(d-n)*e+1;return-jc+u*f},a=d=>{const u=Math.exp(-d*e),f=(n-d)*(e*e);return u*f});const s=5/e,l=_5(i,a,s);if(e=An(e),isNaN(l))return{stiffness:100,damping:10,duration:e};{const d=Math.pow(l,2)*r;return{stiffness:d,damping:o*2*Math.sqrt(r*d),duration:e}}}const z5=12;function _5(e,t,n){let r=n;for(let i=1;i<z5;i++)r=r-e(r)/t(r);return r}function Qd(e,t){return e*Math.sqrt(1-t*t)}const M5=["duration","bounce"],L5=["stiffness","damping","mass"];function qh(e,t){return t.some(n=>e[n]!==void 0)}function O5(e){let t={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...e};if(!qh(e,L5)&&qh(e,M5)){const n=G5(e);t={...t,...n,mass:1},t.isResolvedFromDuration=!0}return t}function Yv({keyframes:e,restDelta:t,restSpeed:n,...r}){const i=e[0],a=e[e.length-1],o={done:!1,value:i},{stiffness:s,damping:l,mass:d,duration:u,velocity:f,isResolvedFromDuration:p}=O5({...r,velocity:-En(r.velocity||0)}),g=f||0,x=l/(2*Math.sqrt(s*d)),y=a-i,b=En(Math.sqrt(s/d)),v=Math.abs(y)<5;n||(n=v?.01:2),t||(t=v?.005:.5);let h;if(x<1){const m=Qd(b,x);h=w=>{const S=Math.exp(-x*b*w);return a-S*((g+x*b*y)/m*Math.sin(m*w)+y*Math.cos(m*w))}}else if(x===1)h=m=>a-Math.exp(-b*m)*(y+(g+b*y)*m);else{const m=b*Math.sqrt(x*x-1);h=w=>{const S=Math.exp(-x*b*w),C=Math.min(m*w,300);return a-S*((g+x*b*y)*Math.sinh(C)+m*y*Math.cosh(C))/m}}return{calculatedDuration:p&&u||null,next:m=>{const w=h(m);if(p)o.done=m>=u;else{let S=0;x<1&&(S=m===0?An(g):qv(h,m,w));const C=Math.abs(S)<=n,A=Math.abs(a-w)<=t;o.done=C&&A}return o.value=o.done?a:w,o}}}function Yh({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:a=500,modifyTarget:o,min:s,max:l,restDelta:d=.5,restSpeed:u}){const f=e[0],p={done:!1,value:f},g=T=>s!==void 0&&T<s||l!==void 0&&T>l,x=T=>s===void 0?l:l===void 0||Math.abs(s-T)<Math.abs(l-T)?s:l;let y=n*t;const b=f+y,v=o===void 0?b:o(b);v!==b&&(y=v-f);const h=T=>-y*Math.exp(-T/r),m=T=>v+h(T),w=T=>{const z=h(T),E=m(T);p.done=Math.abs(z)<=d,p.value=p.done?v:E};let S,C;const A=T=>{g(p.value)&&(S=T,C=Yv({keyframes:[p.value,x(p.value)],velocity:qv(m,T,p.value),damping:i,stiffness:a,restDelta:d,restSpeed:u}))};return A(0),{calculatedDuration:null,next:T=>{let z=!1;return!C&&S===void 0&&(z=!0,w(T),A(T)),S!==void 0&&T>=S?C.next(T-S):(!z&&w(T),p)}}}const I5=ho(.42,0,1,1),R5=ho(0,0,.58,1),Kv=ho(.42,0,.58,1),D5=e=>Array.isArray(e)&&typeof e[0]!="number",Rf=e=>Array.isArray(e)&&typeof e[0]=="number",Kh={linear:Je,easeIn:I5,easeInOut:Kv,easeOut:R5,circIn:Ef,circInOut:Pv,circOut:Ev,backIn:Af,backInOut:Tv,backOut:kv,anticipate:Av},Xh=e=>{if(Rf(e)){Wd(e.length===4);const[t,n,r,i]=e;return ho(t,n,r,i)}else if(typeof e=="string")return Wd(Kh[e]!==void 0),Kh[e];return e},V5=(e,t)=>n=>t(e(n)),Pn=(...e)=>e.reduce(V5),$r=(e,t,n)=>{const r=t-e;return r===0?1:(n-e)/r},Ae=(e,t,n)=>e+(t-e)*n;function Cc(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function N5({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,a=0,o=0;if(!t)i=a=o=n;else{const s=n<.5?n*(1+t):n+t-n*t,l=2*n-s;i=Cc(l,s,e+1/3),a=Cc(l,s,e),o=Cc(l,s,e-1/3)}return{red:Math.round(i*255),green:Math.round(a*255),blue:Math.round(o*255),alpha:r}}function Fs(e,t){return n=>n>0?t:e}const kc=(e,t,n)=>{const r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},F5=[Kd,Gr,pi],$5=e=>F5.find(t=>t.test(e));function Qh(e){const t=$5(e);if(!t)return!1;let n=t.parse(e);return t===pi&&(n=N5(n)),n}const Zh=(e,t)=>{const n=Qh(e),r=Qh(t);if(!n||!r)return Fs(e,t);const i={...n};return a=>(i.red=kc(n.red,r.red,a),i.green=kc(n.green,r.green,a),i.blue=kc(n.blue,r.blue,a),i.alpha=Ae(n.alpha,r.alpha,a),Gr.transform(i))},Zd=new Set(["none","hidden"]);function B5(e,t){return Zd.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function H5(e,t){return n=>Ae(e,t,n)}function Df(e){return typeof e=="number"?H5:typeof e=="string"?Pf(e)?Fs:rt.test(e)?Zh:q5:Array.isArray(e)?Xv:typeof e=="object"?rt.test(e)?Zh:U5:Fs}function Xv(e,t){const n=[...e],r=n.length,i=e.map((a,o)=>Df(a)(a,t[o]));return a=>{for(let o=0;o<r;o++)n[o]=i[o](a);return n}}function U5(e,t){const n={...e,...t},r={};for(const i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=Df(e[i])(e[i],t[i]));return i=>{for(const a in r)n[a]=r[a](i);return n}}function W5(e,t){var n;const r=[],i={color:0,var:0,number:0};for(let a=0;a<t.values.length;a++){const o=t.types[a],s=e.indexes[o][i[o]],l=(n=e.values[s])!==null&&n!==void 0?n:0;r[a]=l,i[o]++}return r}const q5=(e,t)=>{const n=fr.createTransformer(t),r=no(e),i=no(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?Zd.has(e)&&!i.values.length||Zd.has(t)&&!r.values.length?B5(e,t):Pn(Xv(W5(r,i),i.values),n):Fs(e,t)};function Qv(e,t,n){return typeof e=="number"&&typeof t=="number"&&typeof n=="number"?Ae(e,t,n):Df(e)(e,t)}function Y5(e,t,n){const r=[],i=n||Qv,a=e.length-1;for(let o=0;o<a;o++){let s=i(e[o],e[o+1]);if(t){const l=Array.isArray(t)?t[o]||Je:t;s=Pn(l,s)}r.push(s)}return r}function Vf(e,t,{clamp:n=!0,ease:r,mixer:i}={}){const a=e.length;if(Wd(a===t.length),a===1)return()=>t[0];if(a===2&&e[0]===e[1])return()=>t[1];e[0]>e[a-1]&&(e=[...e].reverse(),t=[...t].reverse());const o=Y5(t,r,i),s=o.length,l=d=>{let u=0;if(s>1)for(;u<e.length-2&&!(d<e[u+1]);u++);const f=$r(e[u],e[u+1],d);return o[u](f)};return n?d=>l(ur(e[0],e[a-1],d)):l}function K5(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const i=$r(0,t,r);e.push(Ae(n,1,i))}}function Zv(e){const t=[0];return K5(t,e.length-1),t}function X5(e,t){return e.map(n=>n*t)}function Q5(e,t){return e.map(()=>t||Kv).splice(0,e.length-1)}function $s({duration:e=300,keyframes:t,times:n,ease:r="easeInOut"}){const i=D5(r)?r.map(Xh):Xh(r),a={done:!1,value:t[0]},o=X5(n&&n.length===t.length?n:Zv(t),e),s=Vf(o,t,{ease:Array.isArray(i)?i:Q5(t,i)});return{calculatedDuration:e,next:l=>(a.value=s(l),a.done=l>=e,a)}}const Jh=2e4;function Z5(e){let t=0;const n=50;let r=e.next(t);for(;!r.done&&t<Jh;)t+=n,r=e.next(t);return t>=Jh?1/0:t}const J5=e=>{const t=({timestamp:n})=>e(n);return{start:()=>oe.update(t,!0),stop:()=>Zt(t),now:()=>Be.isProcessing?Be.timestamp:pn.now()}},e9={decay:Yh,inertia:Yh,tween:$s,keyframes:$s,spring:Yv},t9=e=>e/100;class Nf extends Wv{constructor(t){super(t),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:l}=this.options;l&&l()};const{name:n,motionValue:r,element:i,keyframes:a}=this.options,o=(i==null?void 0:i.KeyframeResolver)||Gf,s=(l,d)=>this.onKeyframesResolved(l,d);this.resolver=new o(a,s,n,r,i),this.resolver.scheduleResolve()}initPlayback(t){const{type:n="keyframes",repeat:r=0,repeatDelay:i=0,repeatType:a,velocity:o=0}=this.options,s=Of(n)?n:e9[n]||$s;let l,d;s!==$s&&typeof t[0]!="number"&&(l=Pn(t9,Qv(t[0],t[1])),t=[0,100]);const u=s({...this.options,keyframes:t});a==="mirror"&&(d=s({...this.options,keyframes:[...t].reverse(),velocity:-o})),u.calculatedDuration===null&&(u.calculatedDuration=Z5(u));const{calculatedDuration:f}=u,p=f+i,g=p*(r+1)-i;return{generator:u,mirroredGenerator:d,mapPercentToKeyframes:l,calculatedDuration:f,resolvedDuration:p,totalDuration:g}}onPostResolved(){const{autoplay:t=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!t?this.pause():this.state=this.pendingPlayState}tick(t,n=!1){const{resolved:r}=this;if(!r){const{keyframes:T}=this.options;return{done:!0,value:T[T.length-1]}}const{finalKeyframe:i,generator:a,mirroredGenerator:o,mapPercentToKeyframes:s,keyframes:l,calculatedDuration:d,totalDuration:u,resolvedDuration:f}=r;if(this.startTime===null)return a.next(0);const{delay:p,repeat:g,repeatType:x,repeatDelay:y,onUpdate:b}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-u/this.speed,this.startTime)),n?this.currentTime=t:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(t-this.startTime)*this.speed;const v=this.currentTime-p*(this.speed>=0?1:-1),h=this.speed>=0?v<0:v>u;this.currentTime=Math.max(v,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=u);let m=this.currentTime,w=a;if(g){const T=Math.min(this.currentTime,u)/f;let z=Math.floor(T),E=T%1;!E&&T>=1&&(E=1),E===1&&z--,z=Math.min(z,g+1),!!(z%2)&&(x==="reverse"?(E=1-E,y&&(E-=y/f)):x==="mirror"&&(w=o)),m=ur(0,1,E)*f}const S=h?{done:!1,value:l[0]}:w.next(m);s&&(S.value=s(S.value));let{done:C}=S;!h&&d!==null&&(C=this.speed>=0?this.currentTime>=u:this.currentTime<=0);const A=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&C);return A&&i!==void 0&&(S.value=Tl(l,this.options,i)),b&&b(S.value),A&&this.finish(),S}get duration(){const{resolved:t}=this;return t?En(t.calculatedDuration):0}get time(){return En(this.currentTime)}set time(t){t=An(t),this.currentTime=t,this.holdTime!==null||this.speed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.speed)}get speed(){return this.playbackSpeed}set speed(t){const n=this.playbackSpeed!==t;this.playbackSpeed=t,n&&(this.time=En(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:t=J5,onPlay:n,startTime:r}=this.options;this.driver||(this.driver=t(a=>this.tick(a))),n&&n();const i=this.driver.now();this.holdTime!==null?this.startTime=i-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=i):this.startTime=r??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var t;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(t=this.currentTime)!==null&&t!==void 0?t:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:t}=this.options;t&&t()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}}const n9=new Set(["opacity","clipPath","filter","transform"]),r9=10,i9=(e,t)=>{let n="";const r=Math.max(Math.round(t/r9),2);for(let i=0;i<r;i++)n+=e($r(0,r-1,i))+", ";return`linear(${n.substring(0,n.length-2)})`};function Ff(e){let t;return()=>(t===void 0&&(t=e()),t)}const a9={linearEasing:void 0};function o9(e,t){const n=Ff(e);return()=>{var r;return(r=a9[t])!==null&&r!==void 0?r:n()}}const Bs=o9(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing");function Jv(e){return!!(typeof e=="function"&&Bs()||!e||typeof e=="string"&&(e in Jd||Bs())||Rf(e)||Array.isArray(e)&&e.every(Jv))}const ga=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,Jd={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:ga([0,.65,.55,1]),circOut:ga([.55,0,1,.45]),backIn:ga([.31,.01,.66,-.59]),backOut:ga([.33,1.53,.69,.99])};function ex(e,t){if(e)return typeof e=="function"&&Bs()?i9(e,t):Rf(e)?ga(e):Array.isArray(e)?e.map(n=>ex(n,t)||Jd.easeOut):Jd[e]}function s9(e,t,n,{delay:r=0,duration:i=300,repeat:a=0,repeatType:o="loop",ease:s,times:l}={}){const d={[t]:n};l&&(d.offset=l);const u=ex(s,i);return Array.isArray(u)&&(d.easing=u),e.animate(d,{delay:r,duration:i,easing:Array.isArray(u)?"linear":u,fill:"both",iterations:a+1,direction:o==="reverse"?"alternate":"normal"})}function e0(e,t){e.timeline=t,e.onfinish=null}const l9=Ff(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),Hs=10,c9=2e4;function d9(e){return Of(e.type)||e.type==="spring"||!Jv(e.ease)}function u9(e,t){const n=new Nf({...t,keyframes:e,repeat:0,delay:0,isGenerator:!0});let r={done:!1,value:e[0]};const i=[];let a=0;for(;!r.done&&a<c9;)r=n.sample(a),i.push(r.value),a+=Hs;return{times:void 0,keyframes:i,duration:a-Hs,ease:"linear"}}const tx={anticipate:Av,backInOut:Tv,circInOut:Pv};function f9(e){return e in tx}class t0 extends Wv{constructor(t){super(t);const{name:n,motionValue:r,element:i,keyframes:a}=this.options;this.resolver=new Uv(a,(o,s)=>this.onKeyframesResolved(o,s),n,r,i),this.resolver.scheduleResolve()}initPlayback(t,n){var r;let{duration:i=300,times:a,ease:o,type:s,motionValue:l,name:d,startTime:u}=this.options;if(!(!((r=l.owner)===null||r===void 0)&&r.current))return!1;if(typeof o=="string"&&Bs()&&f9(o)&&(o=tx[o]),d9(this.options)){const{onComplete:p,onUpdate:g,motionValue:x,element:y,...b}=this.options,v=u9(t,b);t=v.keyframes,t.length===1&&(t[1]=t[0]),i=v.duration,a=v.times,o=v.ease,s="keyframes"}const f=s9(l.owner.current,d,t,{...this.options,duration:i,times:a,ease:o});return f.startTime=u??this.calcStartTime(),this.pendingTimeline?(e0(f,this.pendingTimeline),this.pendingTimeline=void 0):f.onfinish=()=>{const{onComplete:p}=this.options;l.set(Tl(t,this.options,n)),p&&p(),this.cancel(),this.resolveFinishedPromise()},{animation:f,duration:i,times:a,type:s,ease:o,keyframes:t}}get duration(){const{resolved:t}=this;if(!t)return 0;const{duration:n}=t;return En(n)}get time(){const{resolved:t}=this;if(!t)return 0;const{animation:n}=t;return En(n.currentTime||0)}set time(t){const{resolved:n}=this;if(!n)return;const{animation:r}=n;r.currentTime=An(t)}get speed(){const{resolved:t}=this;if(!t)return 1;const{animation:n}=t;return n.playbackRate}set speed(t){const{resolved:n}=this;if(!n)return;const{animation:r}=n;r.playbackRate=t}get state(){const{resolved:t}=this;if(!t)return"idle";const{animation:n}=t;return n.playState}get startTime(){const{resolved:t}=this;if(!t)return null;const{animation:n}=t;return n.startTime}attachTimeline(t){if(!this._resolved)this.pendingTimeline=t;else{const{resolved:n}=this;if(!n)return Je;const{animation:r}=n;e0(r,t)}return Je}play(){if(this.isStopped)return;const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.playState==="finished"&&this.updateFinishedPromise(),n.play()}pause(){const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:t}=this;if(!t)return;const{animation:n,keyframes:r,duration:i,type:a,ease:o,times:s}=t;if(n.playState==="idle"||n.playState==="finished")return;if(this.time){const{motionValue:d,onUpdate:u,onComplete:f,element:p,...g}=this.options,x=new Nf({...g,keyframes:r,duration:i,type:a,ease:o,times:s,isGenerator:!0}),y=An(this.time);d.setWithVelocity(x.sample(y-Hs).value,x.sample(y).value,Hs)}const{onStop:l}=this.options;l&&l(),this.cancel()}complete(){const{resolved:t}=this;t&&t.animation.finish()}cancel(){const{resolved:t}=this;t&&t.animation.cancel()}static supports(t){const{motionValue:n,name:r,repeatDelay:i,repeatType:a,damping:o,type:s}=t;return l9()&&r&&n9.has(r)&&n&&n.owner&&n.owner.current instanceof HTMLElement&&!n.owner.getProps().onUpdate&&!i&&a!=="mirror"&&o!==0&&s!=="inertia"}}const nx=Ff(()=>window.ScrollTimeline!==void 0);class p9{constructor(t){this.stop=()=>this.runAll("stop"),this.animations=t.filter(Boolean)}then(t,n){return Promise.all(this.animations).then(t).catch(n)}getAll(t){return this.animations[0][t]}setAll(t,n){for(let r=0;r<this.animations.length;r++)this.animations[r][t]=n}attachTimeline(t,n){const r=this.animations.map(i=>nx()&&i.attachTimeline?i.attachTimeline(t):n(i));return()=>{r.forEach((i,a)=>{i&&i(),this.animations[a].stop()})}}get time(){return this.getAll("time")}set time(t){this.setAll("time",t)}get speed(){return this.getAll("speed")}set speed(t){this.setAll("speed",t)}get startTime(){return this.getAll("startTime")}get duration(){let t=0;for(let n=0;n<this.animations.length;n++)t=Math.max(t,this.animations[n].duration);return t}runAll(t){this.animations.forEach(n=>n[t]())}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}function h9({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:i,repeat:a,repeatType:o,repeatDelay:s,from:l,elapsed:d,...u}){return!!Object.keys(u).length}const $f=(e,t,n,r={},i,a)=>o=>{const s=Tf(r,e)||{},l=s.delay||r.delay||0;let{elapsed:d=0}=r;d=d-An(l);let u={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:t.getVelocity(),...s,delay:-d,onUpdate:p=>{t.set(p),s.onUpdate&&s.onUpdate(p)},onComplete:()=>{o(),s.onComplete&&s.onComplete()},name:e,motionValue:t,element:a?void 0:i};h9(s)||(u={...u,...L4(e,u)}),u.duration&&(u.duration=An(u.duration)),u.repeatDelay&&(u.repeatDelay=An(u.repeatDelay)),u.from!==void 0&&(u.keyframes[0]=u.from);let f=!1;if((u.type===!1||u.duration===0&&!u.repeatDelay)&&(u.duration=0,u.delay===0&&(f=!0)),f&&!a&&t.get()!==void 0){const p=Tl(u.keyframes,s);if(p!==void 0)return oe.update(()=>{u.onUpdate(p),u.onComplete()}),new p9([])}return!a&&t0.supports(u)?new t0(u):new Nf(u)},m9=e=>!!(e&&typeof e=="object"&&e.mix&&e.toValue),g9=e=>Ud(e)?e[e.length-1]||0:e;function Bf(e,t){e.indexOf(t)===-1&&e.push(t)}function Hf(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class Uf{constructor(){this.subscriptions=[]}add(t){return Bf(this.subscriptions,t),()=>Hf(this.subscriptions,t)}notify(t,n,r){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](t,n,r);else for(let a=0;a<i;a++){const o=this.subscriptions[a];o&&o(t,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const n0=30,v9=e=>!isNaN(parseFloat(e)),Pa={current:void 0};class x9{constructor(t,n={}){this.version="11.11.11",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(r,i=!0)=>{const a=pn.now();this.updatedAt!==a&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),i&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(t),this.owner=n.owner}setCurrent(t){this.current=t,this.updatedAt=pn.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=v9(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new Uf);const r=this.events[t].add(n);return t==="change"?()=>{r(),oe.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t,n=!0){!n||!this.passiveEffect?this.updateAndNotify(t,n):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,n,r){this.set(n),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-r}jump(t,n=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return Pa.current&&Pa.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const t=pn.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>n0)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,n0);return If(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function ln(e,t){return new x9(e,t)}function y9(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,ln(n))}function w9(e,t){const n=kl(e,t);let{transitionEnd:r={},transition:i={},...a}=n||{};a={...a,...r};for(const o in a){const s=g9(a[o]);y9(e,o,s)}}const Wf=e=>e.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),b9="framerAppearId",rx="data-"+Wf(b9);function ix(e){return e.props[rx]}const at=e=>!!(e&&e.getVelocity);function S9(e){return!!(at(e)&&e.add)}function eu(e,t){const n=e.getValue("willChange");if(S9(n))return n.add(t)}function j9({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function ax(e,t,{delay:n=0,transitionOverride:r,type:i}={}){var a;let{transition:o=e.getDefaultTransition(),transitionEnd:s,...l}=t;r&&(o=r);const d=[],u=i&&e.animationState&&e.animationState.getState()[i];for(const f in l){const p=e.getValue(f,(a=e.latestValues[f])!==null&&a!==void 0?a:null),g=l[f];if(g===void 0||u&&j9(u,f))continue;const x={delay:n,...Tf(o||{},f)};let y=!1;if(window.MotionHandoffAnimation){const v=ix(e);if(v){const h=window.MotionHandoffAnimation(v,f,oe);h!==null&&(x.startTime=h,y=!0)}}eu(e,f),p.start($f(f,p,g,e.shouldReduceMotion&&Xr.has(f)?{type:!1}:x,e,y));const b=p.animation;b&&d.push(b)}return s&&Promise.all(d).then(()=>{oe.update(()=>{s&&w9(e,s)})}),d}function tu(e,t,n={}){var r;const i=kl(e,t,n.type==="exit"?(r=e.presenceContext)===null||r===void 0?void 0:r.custom:void 0);let{transition:a=e.getDefaultTransition()||{}}=i||{};n.transitionOverride&&(a=n.transitionOverride);const o=i?()=>Promise.all(ax(e,i,n)):()=>Promise.resolve(),s=e.variantChildren&&e.variantChildren.size?(d=0)=>{const{delayChildren:u=0,staggerChildren:f,staggerDirection:p}=a;return C9(e,t,u+d,f,p,n)}:()=>Promise.resolve(),{when:l}=a;if(l){const[d,u]=l==="beforeChildren"?[o,s]:[s,o];return d().then(()=>u())}else return Promise.all([o(),s(n.delay)])}function C9(e,t,n=0,r=0,i=1,a){const o=[],s=(e.variantChildren.size-1)*r,l=i===1?(d=0)=>d*r:(d=0)=>s-d*r;return Array.from(e.variantChildren).sort(k9).forEach((d,u)=>{d.notify("AnimationStart",t),o.push(tu(d,t,{...a,delay:n+l(u)}).then(()=>d.notify("AnimationComplete",t)))}),Promise.all(o)}function k9(e,t){return e.sortNodePosition(t)}function T9(e,t,n={}){e.notify("AnimationStart",t);let r;if(Array.isArray(t)){const i=t.map(a=>tu(e,a,n));r=Promise.all(i)}else if(typeof t=="string")r=tu(e,t,n);else{const i=typeof t=="function"?kl(e,t,n.custom):t;r=Promise.all(ax(e,i,n))}return r.then(()=>{e.notify("AnimationComplete",t)})}const A9=kf.length;function ox(e){if(!e)return;if(!e.isControllingVariants){const n=e.parent?ox(e.parent)||{}:{};return e.props.initial!==void 0&&(n.initial=e.props.initial),n}const t={};for(let n=0;n<A9;n++){const r=kf[n],i=e.props[r];(eo(i)||i===!1)&&(t[r]=i)}return t}const E9=[...Cf].reverse(),P9=Cf.length;function G9(e){return t=>Promise.all(t.map(({animation:n,options:r})=>T9(e,n,r)))}function z9(e){let t=G9(e),n=r0(),r=!0;const i=l=>(d,u)=>{var f;const p=kl(e,u,l==="exit"?(f=e.presenceContext)===null||f===void 0?void 0:f.custom:void 0);if(p){const{transition:g,transitionEnd:x,...y}=p;d={...d,...y,...x}}return d};function a(l){t=l(e)}function o(l){const{props:d}=e,u=ox(e.parent)||{},f=[],p=new Set;let g={},x=1/0;for(let b=0;b<P9;b++){const v=E9[b],h=n[v],m=d[v]!==void 0?d[v]:u[v],w=eo(m),S=v===l?h.isActive:null;S===!1&&(x=b);let C=m===u[v]&&m!==d[v]&&w;if(C&&r&&e.manuallyAnimateOnMount&&(C=!1),h.protectedKeys={...g},!h.isActive&&S===null||!m&&!h.prevProp||Cl(m)||typeof m=="boolean")continue;const A=_9(h.prevProp,m);let T=A||v===l&&h.isActive&&!C&&w||b>x&&w,z=!1;const E=Array.isArray(m)?m:[m];let P=E.reduce(i(v),{});S===!1&&(P={});const{prevResolvedValues:_={}}=h,I={..._,...P},R=Y=>{T=!0,p.has(Y)&&(z=!0,p.delete(Y)),h.needsAnimating[Y]=!0;const M=e.getValue(Y);M&&(M.liveStyle=!1)};for(const Y in I){const M=P[Y],V=_[Y];if(g.hasOwnProperty(Y))continue;let $=!1;Ud(M)&&Ud(V)?$=!wv(M,V):$=M!==V,$?M!=null?R(Y):p.add(Y):M!==void 0&&p.has(Y)?R(Y):h.protectedKeys[Y]=!0}h.prevProp=m,h.prevResolvedValues=P,h.isActive&&(g={...g,...P}),r&&e.blockInitialAnimation&&(T=!1),T&&(!(C&&A)||z)&&f.push(...E.map(Y=>({animation:Y,options:{type:v}})))}if(p.size){const b={};p.forEach(v=>{const h=e.getBaseTarget(v),m=e.getValue(v);m&&(m.liveStyle=!0),b[v]=h??null}),f.push({animation:b})}let y=!!f.length;return r&&(d.initial===!1||d.initial===d.animate)&&!e.manuallyAnimateOnMount&&(y=!1),r=!1,y?t(f):Promise.resolve()}function s(l,d){var u;if(n[l].isActive===d)return Promise.resolve();(u=e.variantChildren)===null||u===void 0||u.forEach(p=>{var g;return(g=p.animationState)===null||g===void 0?void 0:g.setActive(l,d)}),n[l].isActive=d;const f=o(l);for(const p in n)n[p].protectedKeys={};return f}return{animateChanges:o,setActive:s,setAnimateFunction:a,getState:()=>n,reset:()=>{n=r0(),r=!0}}}function _9(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!wv(t,e):!1}function Sr(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function r0(){return{animate:Sr(!0),whileInView:Sr(),whileHover:Sr(),whileTap:Sr(),whileDrag:Sr(),whileFocus:Sr(),exit:Sr()}}class gr{constructor(t){this.isMounted=!1,this.node=t}update(){}}class M9 extends gr{constructor(t){super(t),t.animationState||(t.animationState=z9(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();Cl(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){var t;this.node.animationState.reset(),(t=this.unmountControls)===null||t===void 0||t.call(this)}}let L9=0;class O9 extends gr{constructor(){super(...arguments),this.id=L9++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===r)return;const i=this.node.animationState.setActive("exit",!t);n&&!t&&i.then(()=>n(this.id))}mount(){const{register:t}=this.node.presenceContext||{};t&&(this.unmount=t(this.id))}unmount(){}}const I9={animation:{Feature:M9},exit:{Feature:O9}},sx=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1;function Al(e,t="page"){return{point:{x:e[`${t}X`],y:e[`${t}Y`]}}}const R9=e=>t=>sx(t)&&e(t,Al(t));function kn(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}function Gn(e,t,n,r){return kn(e,t,R9(n),r)}const i0=(e,t)=>Math.abs(e-t);function D9(e,t){const n=i0(e.x,t.x),r=i0(e.y,t.y);return Math.sqrt(n**2+r**2)}class lx{constructor(t,n,{transformPagePoint:r,contextWindow:i,dragSnapToOrigin:a=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const f=Ac(this.lastMoveEventInfo,this.history),p=this.startEvent!==null,g=D9(f.offset,{x:0,y:0})>=3;if(!p&&!g)return;const{point:x}=f,{timestamp:y}=Be;this.history.push({...x,timestamp:y});const{onStart:b,onMove:v}=this.handlers;p||(b&&b(this.lastMoveEvent,f),this.startEvent=this.lastMoveEvent),v&&v(this.lastMoveEvent,f)},this.handlePointerMove=(f,p)=>{this.lastMoveEvent=f,this.lastMoveEventInfo=Tc(p,this.transformPagePoint),oe.update(this.updatePoint,!0)},this.handlePointerUp=(f,p)=>{this.end();const{onEnd:g,onSessionEnd:x,resumeAnimation:y}=this.handlers;if(this.dragSnapToOrigin&&y&&y(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const b=Ac(f.type==="pointercancel"?this.lastMoveEventInfo:Tc(p,this.transformPagePoint),this.history);this.startEvent&&g&&g(f,b),x&&x(f,b)},!sx(t))return;this.dragSnapToOrigin=a,this.handlers=n,this.transformPagePoint=r,this.contextWindow=i||window;const o=Al(t),s=Tc(o,this.transformPagePoint),{point:l}=s,{timestamp:d}=Be;this.history=[{...l,timestamp:d}];const{onSessionStart:u}=n;u&&u(t,Ac(s,this.history)),this.removeListeners=Pn(Gn(this.contextWindow,"pointermove",this.handlePointerMove),Gn(this.contextWindow,"pointerup",this.handlePointerUp),Gn(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),Zt(this.updatePoint)}}function Tc(e,t){return t?{point:t(e.point)}:e}function a0(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Ac({point:e},t){return{point:e,delta:a0(e,cx(t)),offset:a0(e,V9(t)),velocity:N9(t,.1)}}function V9(e){return e[0]}function cx(e){return e[e.length-1]}function N9(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const i=cx(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>An(t)));)n--;if(!r)return{x:0,y:0};const a=En(i.timestamp-r.timestamp);if(a===0)return{x:0,y:0};const o={x:(i.x-r.x)/a,y:(i.y-r.y)/a};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function dx(e){let t=null;return()=>{const n=()=>{t=null};return t===null?(t=e,n):!1}}const o0=dx("dragHorizontal"),s0=dx("dragVertical");function ux(e){let t=!1;if(e==="y")t=s0();else if(e==="x")t=o0();else{const n=o0(),r=s0();n&&r?t=()=>{n(),r()}:(n&&n(),r&&r())}return t}function fx(){const e=ux(!0);return e?(e(),!1):!0}function hi(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}const px=1e-4,F9=1-px,$9=1+px,hx=.01,B9=0-hx,H9=0+hx;function At(e){return e.max-e.min}function U9(e,t,n){return Math.abs(e-t)<=n}function l0(e,t,n,r=.5){e.origin=r,e.originPoint=Ae(t.min,t.max,e.origin),e.scale=At(n)/At(t),e.translate=Ae(n.min,n.max,e.origin)-e.originPoint,(e.scale>=F9&&e.scale<=$9||isNaN(e.scale))&&(e.scale=1),(e.translate>=B9&&e.translate<=H9||isNaN(e.translate))&&(e.translate=0)}function Ga(e,t,n,r){l0(e.x,t.x,n.x,r?r.originX:void 0),l0(e.y,t.y,n.y,r?r.originY:void 0)}function c0(e,t,n){e.min=n.min+t.min,e.max=e.min+At(t)}function W9(e,t,n){c0(e.x,t.x,n.x),c0(e.y,t.y,n.y)}function d0(e,t,n){e.min=t.min-n.min,e.max=e.min+At(t)}function za(e,t,n){d0(e.x,t.x,n.x),d0(e.y,t.y,n.y)}function q9(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?Ae(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?Ae(n,e,r.max):Math.min(e,n)),e}function u0(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function Y9(e,{top:t,left:n,bottom:r,right:i}){return{x:u0(e.x,n,i),y:u0(e.y,t,r)}}function f0(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function K9(e,t){return{x:f0(e.x,t.x),y:f0(e.y,t.y)}}function X9(e,t){let n=.5;const r=At(e),i=At(t);return i>r?n=$r(t.min,t.max-r,e.min):r>i&&(n=$r(e.min,e.max-i,t.min)),ur(0,1,n)}function Q9(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const nu=.35;function Z9(e=nu){return e===!1?e=0:e===!0&&(e=nu),{x:p0(e,"left","right"),y:p0(e,"top","bottom")}}function p0(e,t,n){return{min:h0(e,t),max:h0(e,n)}}function h0(e,t){return typeof e=="number"?e:e[t]||0}const m0=()=>({translate:0,scale:1,origin:0,originPoint:0}),mi=()=>({x:m0(),y:m0()}),g0=()=>({min:0,max:0}),Me=()=>({x:g0(),y:g0()});function _t(e){return[e("x"),e("y")]}function mx({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function J9({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function e8(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function Ec(e){return e===void 0||e===1}function ru({scale:e,scaleX:t,scaleY:n}){return!Ec(e)||!Ec(t)||!Ec(n)}function kr(e){return ru(e)||gx(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function gx(e){return v0(e.x)||v0(e.y)}function v0(e){return e&&e!=="0%"}function Us(e,t,n){const r=e-n,i=t*r;return n+i}function x0(e,t,n,r,i){return i!==void 0&&(e=Us(e,i,r)),Us(e,n,r)+t}function iu(e,t=0,n=1,r,i){e.min=x0(e.min,t,n,r,i),e.max=x0(e.max,t,n,r,i)}function vx(e,{x:t,y:n}){iu(e.x,t.translate,t.scale,t.originPoint),iu(e.y,n.translate,n.scale,n.originPoint)}const y0=.999999999999,w0=1.0000000000001;function t8(e,t,n,r=!1){const i=n.length;if(!i)return;t.x=t.y=1;let a,o;for(let s=0;s<i;s++){a=n[s],o=a.projectionDelta;const{visualElement:l}=a.options;l&&l.props.style&&l.props.style.display==="contents"||(r&&a.options.layoutScroll&&a.scroll&&a!==a.root&&vi(e,{x:-a.scroll.offset.x,y:-a.scroll.offset.y}),o&&(t.x*=o.x.scale,t.y*=o.y.scale,vx(e,o)),r&&kr(a.latestValues)&&vi(e,a.latestValues))}t.x<w0&&t.x>y0&&(t.x=1),t.y<w0&&t.y>y0&&(t.y=1)}function gi(e,t){e.min=e.min+t,e.max=e.max+t}function b0(e,t,n,r,i=.5){const a=Ae(e.min,e.max,i);iu(e,t,n,a,r)}function vi(e,t){b0(e.x,t.x,t.scaleX,t.scale,t.originX),b0(e.y,t.y,t.scaleY,t.scale,t.originY)}function xx(e,t){return mx(e8(e.getBoundingClientRect(),t))}function n8(e,t,n){const r=xx(e,n),{scroll:i}=t;return i&&(gi(r.x,i.offset.x),gi(r.y,i.offset.y)),r}const yx=({current:e})=>e?e.ownerDocument.defaultView:null,r8=new WeakMap;class i8{constructor(t){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Me(),this.visualElement=t}start(t,{snapToCursor:n=!1}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const i=u=>{const{dragSnapToOrigin:f}=this.getProps();f?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(Al(u,"page").point)},a=(u,f)=>{const{drag:p,dragPropagation:g,onDragStart:x}=this.getProps();if(p&&!g&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=ux(p),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),_t(b=>{let v=this.getAxisMotionValue(b).get()||0;if(fn.test(v)){const{projection:h}=this.visualElement;if(h&&h.layout){const m=h.layout.layoutBox[b];m&&(v=At(m)*(parseFloat(v)/100))}}this.originPoint[b]=v}),x&&oe.postRender(()=>x(u,f)),eu(this.visualElement,"transform");const{animationState:y}=this.visualElement;y&&y.setActive("whileDrag",!0)},o=(u,f)=>{const{dragPropagation:p,dragDirectionLock:g,onDirectionLock:x,onDrag:y}=this.getProps();if(!p&&!this.openGlobalLock)return;const{offset:b}=f;if(g&&this.currentDirection===null){this.currentDirection=a8(b),this.currentDirection!==null&&x&&x(this.currentDirection);return}this.updateAxis("x",f.point,b),this.updateAxis("y",f.point,b),this.visualElement.render(),y&&y(u,f)},s=(u,f)=>this.stop(u,f),l=()=>_t(u=>{var f;return this.getAnimationState(u)==="paused"&&((f=this.getAxisMotionValue(u).animation)===null||f===void 0?void 0:f.play())}),{dragSnapToOrigin:d}=this.getProps();this.panSession=new lx(t,{onSessionStart:i,onStart:a,onMove:o,onSessionEnd:s,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:d,contextWindow:yx(this.visualElement)})}stop(t,n){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:i}=n;this.startAnimation(i);const{onDragEnd:a}=this.getProps();a&&oe.postRender(()=>a(t,n))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(t,n,r){const{drag:i}=this.getProps();if(!r||!Ro(t,i,this.currentDirection))return;const a=this.getAxisMotionValue(t);let o=this.originPoint[t]+r[t];this.constraints&&this.constraints[t]&&(o=q9(o,this.constraints[t],this.elastic[t])),a.set(o)}resolveConstraints(){var t;const{dragConstraints:n,dragElastic:r}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(t=this.visualElement.projection)===null||t===void 0?void 0:t.layout,a=this.constraints;n&&hi(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&i?this.constraints=Y9(i.layoutBox,n):this.constraints=!1,this.elastic=Z9(r),a!==this.constraints&&i&&this.constraints&&!this.hasMutatedConstraints&&_t(o=>{this.constraints!==!1&&this.getAxisMotionValue(o)&&(this.constraints[o]=Q9(i.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!hi(t))return!1;const r=t.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const a=n8(r,i.root,this.visualElement.getTransformPagePoint());let o=K9(i.layout.layoutBox,a);if(n){const s=n(J9(o));this.hasMutatedConstraints=!!s,s&&(o=mx(s))}return o}startAnimation(t){const{drag:n,dragMomentum:r,dragElastic:i,dragTransition:a,dragSnapToOrigin:o,onDragTransitionEnd:s}=this.getProps(),l=this.constraints||{},d=_t(u=>{if(!Ro(u,n,this.currentDirection))return;let f=l&&l[u]||{};o&&(f={min:0,max:0});const p=i?200:1e6,g=i?40:1e7,x={type:"inertia",velocity:r?t[u]:0,bounceStiffness:p,bounceDamping:g,timeConstant:750,restDelta:1,restSpeed:10,...a,...f};return this.startAxisValueAnimation(u,x)});return Promise.all(d).then(s)}startAxisValueAnimation(t,n){const r=this.getAxisMotionValue(t);return eu(this.visualElement,t),r.start($f(t,r,0,n,this.visualElement,!1))}stopAnimation(){_t(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){_t(t=>{var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(t){var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(t){const n=`_drag${t.toUpperCase()}`,r=this.visualElement.getProps(),i=r[n];return i||this.visualElement.getValue(t,(r.initial?r.initial[t]:void 0)||0)}snapToCursor(t){_t(n=>{const{drag:r}=this.getProps();if(!Ro(n,r,this.currentDirection))return;const{projection:i}=this.visualElement,a=this.getAxisMotionValue(n);if(i&&i.layout){const{min:o,max:s}=i.layout.layoutBox[n];a.set(t[n]-Ae(o,s,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!hi(n)||!r||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};_t(o=>{const s=this.getAxisMotionValue(o);if(s&&this.constraints!==!1){const l=s.get();i[o]=X9({min:l,max:l},this.constraints[o])}});const{transformTemplate:a}=this.visualElement.getProps();this.visualElement.current.style.transform=a?a({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),_t(o=>{if(!Ro(o,t,null))return;const s=this.getAxisMotionValue(o),{min:l,max:d}=this.constraints[o];s.set(Ae(l,d,i[o]))})}addListeners(){if(!this.visualElement.current)return;r8.set(this.visualElement,this);const t=this.visualElement.current,n=Gn(t,"pointerdown",l=>{const{drag:d,dragListener:u=!0}=this.getProps();d&&u&&this.start(l)}),r=()=>{const{dragConstraints:l}=this.getProps();hi(l)&&l.current&&(this.constraints=this.resolveRefConstraints())},{projection:i}=this.visualElement,a=i.addEventListener("measure",r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),oe.read(r);const o=kn(window,"resize",()=>this.scalePositionWithinConstraints()),s=i.addEventListener("didUpdate",({delta:l,hasLayoutChanged:d})=>{this.isDragging&&d&&(_t(u=>{const f=this.getAxisMotionValue(u);f&&(this.originPoint[u]+=l[u].translate,f.set(f.get()+l[u].translate))}),this.visualElement.render())});return()=>{o(),n(),a(),s&&s()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:i=!1,dragConstraints:a=!1,dragElastic:o=nu,dragMomentum:s=!0}=t;return{...t,drag:n,dragDirectionLock:r,dragPropagation:i,dragConstraints:a,dragElastic:o,dragMomentum:s}}}function Ro(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function a8(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class o8 extends gr{constructor(t){super(t),this.removeGroupControls=Je,this.removeListeners=Je,this.controls=new i8(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Je}unmount(){this.removeGroupControls(),this.removeListeners()}}const S0=e=>(t,n)=>{e&&oe.postRender(()=>e(t,n))};class s8 extends gr{constructor(){super(...arguments),this.removePointerDownListener=Je}onPointerDown(t){this.session=new lx(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:yx(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:r,onPanEnd:i}=this.node.getProps();return{onSessionStart:S0(t),onStart:S0(n),onMove:r,onEnd:(a,o)=>{delete this.session,i&&oe.postRender(()=>i(a,o))}}}mount(){this.removePointerDownListener=Gn(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const El=j.createContext(null);function l8(){const e=j.useContext(El);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:n,register:r}=e,i=j.useId();j.useEffect(()=>r(i),[]);const a=j.useCallback(()=>n&&n(i),[i,n]);return!t&&n?[!1,a]:[!0]}const qf=j.createContext({}),wx=j.createContext({}),is={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function j0(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const sa={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(W.test(e))e=parseFloat(e);else return e;const n=j0(e,t.target.x),r=j0(e,t.target.y);return`${n}% ${r}%`}},c8={correct:(e,{treeScale:t,projectionDelta:n})=>{const r=e,i=fr.parse(e);if(i.length>5)return r;const a=fr.createTransformer(e),o=typeof i[0]!="number"?1:0,s=n.x.scale*t.x,l=n.y.scale*t.y;i[0+o]/=s,i[1+o]/=l;const d=Ae(s,l,.5);return typeof i[2+o]=="number"&&(i[2+o]/=d),typeof i[3+o]=="number"&&(i[3+o]/=d),a(i)}},Ws={};function d8(e){Object.assign(Ws,e)}const{schedule:Yf,cancel:sP}=bv(queueMicrotask,!1);class u8 extends j.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r,layoutId:i}=this.props,{projection:a}=t;d8(f8),a&&(n.group&&n.group.add(a),r&&r.register&&i&&r.register(a),a.root.didUpdate(),a.addEventListener("animationComplete",()=>{this.safeToRemove()}),a.setOptions({...a.options,onExitComplete:()=>this.safeToRemove()})),is.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:r,drag:i,isPresent:a}=this.props,o=r.projection;return o&&(o.isPresent=a,i||t.layoutDependency!==n||n===void 0?o.willUpdate():this.safeToRemove(),t.isPresent!==a&&(a?o.promote():o.relegate()||oe.postRender(()=>{const s=o.getStack();(!s||!s.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),Yf.postRender(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:i}=t;i&&(i.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(i),r&&r.deregister&&r.deregister(i))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function bx(e){const[t,n]=l8(),r=j.useContext(qf);return c.jsx(u8,{...e,layoutGroup:r,switchLayoutGroup:j.useContext(wx),isPresent:t,safeToRemove:n})}const f8={borderRadius:{...sa,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:sa,borderTopRightRadius:sa,borderBottomLeftRadius:sa,borderBottomRightRadius:sa,boxShadow:c8},Sx=["TopLeft","TopRight","BottomLeft","BottomRight"],p8=Sx.length,C0=e=>typeof e=="string"?parseFloat(e):e,k0=e=>typeof e=="number"||W.test(e);function h8(e,t,n,r,i,a){i?(e.opacity=Ae(0,n.opacity!==void 0?n.opacity:1,m8(r)),e.opacityExit=Ae(t.opacity!==void 0?t.opacity:1,0,g8(r))):a&&(e.opacity=Ae(t.opacity!==void 0?t.opacity:1,n.opacity!==void 0?n.opacity:1,r));for(let o=0;o<p8;o++){const s=`border${Sx[o]}Radius`;let l=T0(t,s),d=T0(n,s);if(l===void 0&&d===void 0)continue;l||(l=0),d||(d=0),l===0||d===0||k0(l)===k0(d)?(e[s]=Math.max(Ae(C0(l),C0(d),r),0),(fn.test(d)||fn.test(l))&&(e[s]+="%")):e[s]=d}(t.rotate||n.rotate)&&(e.rotate=Ae(t.rotate||0,n.rotate||0,r))}function T0(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const m8=jx(0,.5,Ev),g8=jx(.5,.95,Je);function jx(e,t,n){return r=>r<e?0:r>t?1:n($r(e,t,r))}function A0(e,t){e.min=t.min,e.max=t.max}function zt(e,t){A0(e.x,t.x),A0(e.y,t.y)}function E0(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}function P0(e,t,n,r,i){return e-=t,e=Us(e,1/n,r),i!==void 0&&(e=Us(e,1/i,r)),e}function v8(e,t=0,n=1,r=.5,i,a=e,o=e){if(fn.test(t)&&(t=parseFloat(t),t=Ae(o.min,o.max,t/100)-o.min),typeof t!="number")return;let s=Ae(a.min,a.max,r);e===a&&(s-=t),e.min=P0(e.min,t,n,s,i),e.max=P0(e.max,t,n,s,i)}function G0(e,t,[n,r,i],a,o){v8(e,t[n],t[r],t[i],t.scale,a,o)}const x8=["x","scaleX","originX"],y8=["y","scaleY","originY"];function z0(e,t,n,r){G0(e.x,t,x8,n?n.x:void 0,r?r.x:void 0),G0(e.y,t,y8,n?n.y:void 0,r?r.y:void 0)}function _0(e){return e.translate===0&&e.scale===1}function Cx(e){return _0(e.x)&&_0(e.y)}function M0(e,t){return e.min===t.min&&e.max===t.max}function w8(e,t){return M0(e.x,t.x)&&M0(e.y,t.y)}function L0(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function kx(e,t){return L0(e.x,t.x)&&L0(e.y,t.y)}function O0(e){return At(e.x)/At(e.y)}function I0(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}class b8{constructor(){this.members=[]}add(t){Bf(this.members,t),t.scheduleRender()}remove(t){if(Hf(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(i=>t===i);if(n===0)return!1;let r;for(let i=n;i>=0;i--){const a=this.members[i];if(a.isPresent!==!1){r=a;break}}return r?(this.promote(r),!0):!1}promote(t,n){const r=this.lead;if(t!==r&&(this.prevLead=r,this.lead=t,t.show(),r)){r.instance&&r.scheduleRender(),t.scheduleRender(),t.resumeFrom=r,n&&(t.resumeFrom.preserveOpacity=!0),r.snapshot&&(t.snapshot=r.snapshot,t.snapshot.latestValues=r.animationValues||r.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:i}=t.options;i===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:r}=t;n.onExitComplete&&n.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function S8(e,t,n){let r="";const i=e.x.translate/t.x,a=e.y.translate/t.y,o=(n==null?void 0:n.z)||0;if((i||a||o)&&(r=`translate3d(${i}px, ${a}px, ${o}px) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{transformPerspective:d,rotate:u,rotateX:f,rotateY:p,skewX:g,skewY:x}=n;d&&(r=`perspective(${d}px) ${r}`),u&&(r+=`rotate(${u}deg) `),f&&(r+=`rotateX(${f}deg) `),p&&(r+=`rotateY(${p}deg) `),g&&(r+=`skewX(${g}deg) `),x&&(r+=`skewY(${x}deg) `)}const s=e.x.scale*t.x,l=e.y.scale*t.y;return(s!==1||l!==1)&&(r+=`scale(${s}, ${l})`),r||"none"}const j8=(e,t)=>e.depth-t.depth;class C8{constructor(){this.children=[],this.isDirty=!1}add(t){Bf(this.children,t),this.isDirty=!0}remove(t){Hf(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(j8),this.isDirty=!1,this.children.forEach(t)}}function as(e){const t=at(e)?e.get():e;return m9(t)?t.toValue():t}function k8(e,t){const n=pn.now(),r=({timestamp:i})=>{const a=i-n;a>=t&&(Zt(r),e(a-t))};return oe.read(r,!0),()=>Zt(r)}function T8(e){return e instanceof SVGElement&&e.tagName!=="svg"}function A8(e,t,n){const r=at(e)?e:ln(e);return r.start($f("",r,t,n)),r.animation}const Tr={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},va=typeof window<"u"&&window.MotionDebug!==void 0,Pc=["","X","Y","Z"],E8={visibility:"hidden"},R0=1e3;let P8=0;function Gc(e,t,n,r){const{latestValues:i}=t;i[e]&&(n[e]=i[e],t.setStaticValue(e,0),r&&(r[e]=0))}function Tx(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:t}=e.options;if(!t)return;const n=ix(t);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:i,layoutId:a}=e.options;window.MotionCancelOptimisedAnimation(n,"transform",oe,!(i||a))}const{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&Tx(r)}function Ax({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(o={},s=t==null?void 0:t()){this.id=P8++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,va&&(Tr.totalNodes=Tr.resolvedTargetDeltas=Tr.recalculatedProjection=0),this.nodes.forEach(_8),this.nodes.forEach(R8),this.nodes.forEach(D8),this.nodes.forEach(M8),va&&window.MotionDebug.record(Tr)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=s?s.root||s:this,this.path=s?[...s.path,s]:[],this.parent=s,this.depth=s?s.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new C8)}addEventListener(o,s){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new Uf),this.eventHandlers.get(o).add(s)}notifyListeners(o,...s){const l=this.eventHandlers.get(o);l&&l.notify(...s)}hasListeners(o){return this.eventHandlers.has(o)}mount(o,s=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=T8(o),this.instance=o;const{layoutId:l,layout:d,visualElement:u}=this.options;if(u&&!u.current&&u.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),s&&(d||l)&&(this.isLayoutDirty=!0),e){let f;const p=()=>this.root.updateBlockedByResize=!1;e(o,()=>{this.root.updateBlockedByResize=!0,f&&f(),f=k8(p,250),is.hasAnimatedSinceResize&&(is.hasAnimatedSinceResize=!1,this.nodes.forEach(V0))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&u&&(l||d)&&this.addEventListener("didUpdate",({delta:f,hasLayoutChanged:p,hasRelativeTargetChanged:g,layout:x})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const y=this.options.transition||u.getDefaultTransition()||B8,{onLayoutAnimationStart:b,onLayoutAnimationComplete:v}=u.getProps(),h=!this.targetLayout||!kx(this.targetLayout,x)||g,m=!p&&g;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||m||p&&(h||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(f,m);const w={...Tf(y,"layout"),onPlay:b,onComplete:v};(u.shouldReduceMotion||this.options.layoutRoot)&&(w.delay=0,w.type=!1),this.startAnimation(w)}else p||V0(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=x})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Zt(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(V8),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Tx(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let u=0;u<this.path.length;u++){const f=this.path[u];f.shouldResetTransform=!0,f.updateScroll("snapshot"),f.options.layoutRoot&&f.willUpdate(!1)}const{layoutId:s,layout:l}=this.options;if(s===void 0&&!l)return;const d=this.getTransformTemplate();this.prevTransformTemplateValue=d?d(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(D0);return}this.isUpdating||this.nodes.forEach(O8),this.isUpdating=!1,this.nodes.forEach(I8),this.nodes.forEach(G8),this.nodes.forEach(z8),this.clearAllSnapshots();const s=pn.now();Be.delta=ur(0,1e3/60,s-Be.timestamp),Be.timestamp=s,Be.isProcessing=!0,bc.update.process(Be),bc.preRender.process(Be),bc.render.process(Be),Be.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Yf.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(L8),this.sharedNodes.forEach(N8)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,oe.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){oe.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Me(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:s}=this.options;s&&s.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let s=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(s=!1),s){const l=r(this.instance);this.scroll={animationId:this.root.animationId,phase:o,isRoot:l,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!i)return;const o=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,s=this.projectionDelta&&!Cx(this.projectionDelta),l=this.getTransformTemplate(),d=l?l(this.latestValues,""):void 0,u=d!==this.prevTransformTemplateValue;o&&(s||kr(this.latestValues)||u)&&(i(this.instance,d),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const s=this.measurePageBox();let l=this.removeElementScroll(s);return o&&(l=this.removeTransform(l)),H8(l),{animationId:this.root.animationId,measuredBox:s,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){var o;const{visualElement:s}=this.options;if(!s)return Me();const l=s.measureViewportBox();if(!(((o=this.scroll)===null||o===void 0?void 0:o.wasRoot)||this.path.some(U8))){const{scroll:u}=this.root;u&&(gi(l.x,u.offset.x),gi(l.y,u.offset.y))}return l}removeElementScroll(o){var s;const l=Me();if(zt(l,o),!((s=this.scroll)===null||s===void 0)&&s.wasRoot)return l;for(let d=0;d<this.path.length;d++){const u=this.path[d],{scroll:f,options:p}=u;u!==this.root&&f&&p.layoutScroll&&(f.wasRoot&&zt(l,o),gi(l.x,f.offset.x),gi(l.y,f.offset.y))}return l}applyTransform(o,s=!1){const l=Me();zt(l,o);for(let d=0;d<this.path.length;d++){const u=this.path[d];!s&&u.options.layoutScroll&&u.scroll&&u!==u.root&&vi(l,{x:-u.scroll.offset.x,y:-u.scroll.offset.y}),kr(u.latestValues)&&vi(l,u.latestValues)}return kr(this.latestValues)&&vi(l,this.latestValues),l}removeTransform(o){const s=Me();zt(s,o);for(let l=0;l<this.path.length;l++){const d=this.path[l];if(!d.instance||!kr(d.latestValues))continue;ru(d.latestValues)&&d.updateSnapshot();const u=Me(),f=d.measurePageBox();zt(u,f),z0(s,d.latestValues,d.snapshot?d.snapshot.layoutBox:void 0,u)}return kr(this.latestValues)&&z0(s,this.latestValues),s}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Be.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var s;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const d=!!this.resumingFrom||this!==l;if(!(o||d&&this.isSharedProjectionDirty||this.isProjectionDirty||!((s=this.parent)===null||s===void 0)&&s.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:f,layoutId:p}=this.options;if(!(!this.layout||!(f||p))){if(this.resolvedRelativeTargetAt=Be.timestamp,!this.targetDelta&&!this.relativeTarget){const g=this.getClosestProjectingParent();g&&g.layout&&this.animationProgress!==1?(this.relativeParent=g,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Me(),this.relativeTargetOrigin=Me(),za(this.relativeTargetOrigin,this.layout.layoutBox,g.layout.layoutBox),zt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=Me(),this.targetWithTransforms=Me()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),W9(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):zt(this.target,this.layout.layoutBox),vx(this.target,this.targetDelta)):zt(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const g=this.getClosestProjectingParent();g&&!!g.resumingFrom==!!this.resumingFrom&&!g.options.layoutScroll&&g.target&&this.animationProgress!==1?(this.relativeParent=g,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Me(),this.relativeTargetOrigin=Me(),za(this.relativeTargetOrigin,this.target,g.target),zt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}va&&Tr.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||ru(this.parent.latestValues)||gx(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var o;const s=this.getLead(),l=!!this.resumingFrom||this!==s;let d=!0;if((this.isProjectionDirty||!((o=this.parent)===null||o===void 0)&&o.isProjectionDirty)&&(d=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(d=!1),this.resolvedRelativeTargetAt===Be.timestamp&&(d=!1),d)return;const{layout:u,layoutId:f}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(u||f))return;zt(this.layoutCorrected,this.layout.layoutBox);const p=this.treeScale.x,g=this.treeScale.y;t8(this.layoutCorrected,this.treeScale,this.path,l),s.layout&&!s.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(s.target=s.layout.layoutBox,s.targetWithTransforms=Me());const{target:x}=s;if(!x){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(E0(this.prevProjectionDelta.x,this.projectionDelta.x),E0(this.prevProjectionDelta.y,this.projectionDelta.y)),Ga(this.projectionDelta,this.layoutCorrected,x,this.latestValues),(this.treeScale.x!==p||this.treeScale.y!==g||!I0(this.projectionDelta.x,this.prevProjectionDelta.x)||!I0(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",x)),va&&Tr.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){var s;if((s=this.options.visualElement)===null||s===void 0||s.scheduleRender(),o){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=mi(),this.projectionDelta=mi(),this.projectionDeltaWithTransform=mi()}setAnimationOrigin(o,s=!1){const l=this.snapshot,d=l?l.latestValues:{},u={...this.latestValues},f=mi();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!s;const p=Me(),g=l?l.source:void 0,x=this.layout?this.layout.source:void 0,y=g!==x,b=this.getStack(),v=!b||b.members.length<=1,h=!!(y&&!v&&this.options.crossfade===!0&&!this.path.some($8));this.animationProgress=0;let m;this.mixTargetDelta=w=>{const S=w/1e3;N0(f.x,o.x,S),N0(f.y,o.y,S),this.setTargetDelta(f),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(za(p,this.layout.layoutBox,this.relativeParent.layout.layoutBox),F8(this.relativeTarget,this.relativeTargetOrigin,p,S),m&&w8(this.relativeTarget,m)&&(this.isProjectionDirty=!1),m||(m=Me()),zt(m,this.relativeTarget)),y&&(this.animationValues=u,h8(u,d,this.latestValues,S,h,v)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=S},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Zt(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=oe.update(()=>{is.hasAnimatedSinceResize=!0,this.currentAnimation=A8(0,R0,{...o,onUpdate:s=>{this.mixTargetDelta(s),o.onUpdate&&o.onUpdate(s)},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(R0),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:s,target:l,layout:d,latestValues:u}=o;if(!(!s||!l||!d)){if(this!==o&&this.layout&&d&&Ex(this.options.animationType,this.layout.layoutBox,d.layoutBox)){l=this.target||Me();const f=At(this.layout.layoutBox.x);l.x.min=o.target.x.min,l.x.max=l.x.min+f;const p=At(this.layout.layoutBox.y);l.y.min=o.target.y.min,l.y.max=l.y.min+p}zt(s,l),vi(s,u),Ga(this.projectionDeltaWithTransform,this.layoutCorrected,s,u)}}registerSharedNode(o,s){this.sharedNodes.has(o)||this.sharedNodes.set(o,new b8),this.sharedNodes.get(o).add(s);const d=s.options.initialPromotionConfig;s.promote({transition:d?d.transition:void 0,preserveFollowOpacity:d&&d.shouldPreserveFollowOpacity?d.shouldPreserveFollowOpacity(s):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var o;const{layoutId:s}=this.options;return s?((o=this.getStack())===null||o===void 0?void 0:o.lead)||this:this}getPrevLead(){var o;const{layoutId:s}=this.options;return s?(o=this.getStack())===null||o===void 0?void 0:o.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:s,preserveFollowOpacity:l}={}){const d=this.getStack();d&&d.promote(this,l),o&&(this.projectionDelta=void 0,this.needsReset=!0),s&&this.setOptions({transition:s})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetSkewAndRotation(){const{visualElement:o}=this.options;if(!o)return;let s=!1;const{latestValues:l}=o;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(s=!0),!s)return;const d={};l.z&&Gc("z",o,d,this.animationValues);for(let u=0;u<Pc.length;u++)Gc(`rotate${Pc[u]}`,o,d,this.animationValues),Gc(`skew${Pc[u]}`,o,d,this.animationValues);o.render();for(const u in d)o.setStaticValue(u,d[u]),this.animationValues&&(this.animationValues[u]=d[u]);o.scheduleRender()}getProjectionStyles(o){var s,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return E8;const d={visibility:""},u=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,d.opacity="",d.pointerEvents=as(o==null?void 0:o.pointerEvents)||"",d.transform=u?u(this.latestValues,""):"none",d;const f=this.getLead();if(!this.projectionDelta||!this.layout||!f.target){const y={};return this.options.layoutId&&(y.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,y.pointerEvents=as(o==null?void 0:o.pointerEvents)||""),this.hasProjected&&!kr(this.latestValues)&&(y.transform=u?u({},""):"none",this.hasProjected=!1),y}const p=f.animationValues||f.latestValues;this.applyTransformsToTarget(),d.transform=S8(this.projectionDeltaWithTransform,this.treeScale,p),u&&(d.transform=u(p,d.transform));const{x:g,y:x}=this.projectionDelta;d.transformOrigin=`${g.origin*100}% ${x.origin*100}% 0`,f.animationValues?d.opacity=f===this?(l=(s=p.opacity)!==null&&s!==void 0?s:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:p.opacityExit:d.opacity=f===this?p.opacity!==void 0?p.opacity:"":p.opacityExit!==void 0?p.opacityExit:0;for(const y in Ws){if(p[y]===void 0)continue;const{correct:b,applyTo:v}=Ws[y],h=d.transform==="none"?p[y]:b(p[y],f);if(v){const m=v.length;for(let w=0;w<m;w++)d[v[w]]=h}else d[y]=h}return this.options.layoutId&&(d.pointerEvents=f===this?as(o==null?void 0:o.pointerEvents)||"":"none"),d}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var s;return(s=o.currentAnimation)===null||s===void 0?void 0:s.stop()}),this.root.nodes.forEach(D0),this.root.sharedNodes.clear()}}}function G8(e){e.updateLayout()}function z8(e){var t;const n=((t=e.resumeFrom)===null||t===void 0?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:i}=e.layout,{animationType:a}=e.options,o=n.source!==e.layout.source;a==="size"?_t(f=>{const p=o?n.measuredBox[f]:n.layoutBox[f],g=At(p);p.min=r[f].min,p.max=p.min+g}):Ex(a,n.layoutBox,r)&&_t(f=>{const p=o?n.measuredBox[f]:n.layoutBox[f],g=At(r[f]);p.max=p.min+g,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[f].max=e.relativeTarget[f].min+g)});const s=mi();Ga(s,r,n.layoutBox);const l=mi();o?Ga(l,e.applyTransform(i,!0),n.measuredBox):Ga(l,r,n.layoutBox);const d=!Cx(s);let u=!1;if(!e.resumeFrom){const f=e.getClosestProjectingParent();if(f&&!f.resumeFrom){const{snapshot:p,layout:g}=f;if(p&&g){const x=Me();za(x,n.layoutBox,p.layoutBox);const y=Me();za(y,r,g.layoutBox),kx(x,y)||(u=!0),f.options.layoutRoot&&(e.relativeTarget=y,e.relativeTargetOrigin=x,e.relativeParent=f)}}}e.notifyListeners("didUpdate",{layout:r,snapshot:n,delta:l,layoutDelta:s,hasLayoutChanged:d,hasRelativeTargetChanged:u})}else if(e.isLead()){const{onExitComplete:r}=e.options;r&&r()}e.options.transition=void 0}function _8(e){va&&Tr.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function M8(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function L8(e){e.clearSnapshot()}function D0(e){e.clearMeasurements()}function O8(e){e.isLayoutDirty=!1}function I8(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function V0(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function R8(e){e.resolveTargetDelta()}function D8(e){e.calcProjection()}function V8(e){e.resetSkewAndRotation()}function N8(e){e.removeLeadSnapshot()}function N0(e,t,n){e.translate=Ae(t.translate,0,n),e.scale=Ae(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function F0(e,t,n,r){e.min=Ae(t.min,n.min,r),e.max=Ae(t.max,n.max,r)}function F8(e,t,n,r){F0(e.x,t.x,n.x,r),F0(e.y,t.y,n.y,r)}function $8(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const B8={duration:.45,ease:[.4,0,.1,1]},$0=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),B0=$0("applewebkit/")&&!$0("chrome/")?Math.round:Je;function H0(e){e.min=B0(e.min),e.max=B0(e.max)}function H8(e){H0(e.x),H0(e.y)}function Ex(e,t,n){return e==="position"||e==="preserve-aspect"&&!U9(O0(t),O0(n),.2)}function U8(e){var t;return e!==e.root&&((t=e.scroll)===null||t===void 0?void 0:t.wasRoot)}const W8=Ax({attachResizeListener:(e,t)=>kn(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),zc={current:void 0},Px=Ax({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!zc.current){const e=new W8({});e.mount(window),e.setOptions({layoutScroll:!0}),zc.current=e}return zc.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),q8={pan:{Feature:s8},drag:{Feature:o8,ProjectionNode:Px,MeasureLayout:bx}};function U0(e,t){const n=t?"pointerenter":"pointerleave",r=t?"onHoverStart":"onHoverEnd",i=(a,o)=>{if(a.pointerType==="touch"||fx())return;const s=e.getProps();e.animationState&&s.whileHover&&e.animationState.setActive("whileHover",t);const l=s[r];l&&oe.postRender(()=>l(a,o))};return Gn(e.current,n,i,{passive:!e.getProps()[r]})}class Y8 extends gr{mount(){this.unmount=Pn(U0(this.node,!0),U0(this.node,!1))}unmount(){}}class K8 extends gr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Pn(kn(this.node.current,"focus",()=>this.onFocus()),kn(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}const Gx=(e,t)=>t?e===t?!0:Gx(e,t.parentElement):!1;function _c(e,t){if(!t)return;const n=new PointerEvent("pointer"+e);t(n,Al(n))}class X8 extends gr{constructor(){super(...arguments),this.removeStartListeners=Je,this.removeEndListeners=Je,this.removeAccessibleListeners=Je,this.startPointerPress=(t,n)=>{if(this.isPressing)return;this.removeEndListeners();const r=this.node.getProps(),a=Gn(window,"pointerup",(s,l)=>{if(!this.checkPressEnd())return;const{onTap:d,onTapCancel:u,globalTapTarget:f}=this.node.getProps(),p=!f&&!Gx(this.node.current,s.target)?u:d;p&&oe.update(()=>p(s,l))},{passive:!(r.onTap||r.onPointerUp)}),o=Gn(window,"pointercancel",(s,l)=>this.cancelPress(s,l),{passive:!(r.onTapCancel||r.onPointerCancel)});this.removeEndListeners=Pn(a,o),this.startPress(t,n)},this.startAccessiblePress=()=>{const t=a=>{if(a.key!=="Enter"||this.isPressing)return;const o=s=>{s.key!=="Enter"||!this.checkPressEnd()||_c("up",(l,d)=>{const{onTap:u}=this.node.getProps();u&&oe.postRender(()=>u(l,d))})};this.removeEndListeners(),this.removeEndListeners=kn(this.node.current,"keyup",o),_c("down",(s,l)=>{this.startPress(s,l)})},n=kn(this.node.current,"keydown",t),r=()=>{this.isPressing&&_c("cancel",(a,o)=>this.cancelPress(a,o))},i=kn(this.node.current,"blur",r);this.removeAccessibleListeners=Pn(n,i)}}startPress(t,n){this.isPressing=!0;const{onTapStart:r,whileTap:i}=this.node.getProps();i&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),r&&oe.postRender(()=>r(t,n))}checkPressEnd(){return this.removeEndListeners(),this.isPressing=!1,this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!fx()}cancelPress(t,n){if(!this.checkPressEnd())return;const{onTapCancel:r}=this.node.getProps();r&&oe.postRender(()=>r(t,n))}mount(){const t=this.node.getProps(),n=Gn(t.globalTapTarget?window:this.node.current,"pointerdown",this.startPointerPress,{passive:!(t.onTapStart||t.onPointerStart)}),r=kn(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=Pn(n,r)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}const au=new WeakMap,Mc=new WeakMap,Q8=e=>{const t=au.get(e.target);t&&t(e)},Z8=e=>{e.forEach(Q8)};function J8({root:e,...t}){const n=e||document;Mc.has(n)||Mc.set(n,{});const r=Mc.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(Z8,{root:e,...t})),r[i]}function e3(e,t,n){const r=J8(t);return au.set(e,n),r.observe(e),()=>{au.delete(e),r.unobserve(e)}}const t3={some:0,all:1};class n3 extends gr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:r,amount:i="some",once:a}=t,o={root:n?n.current:void 0,rootMargin:r,threshold:typeof i=="number"?i:t3[i]},s=l=>{const{isIntersecting:d}=l;if(this.isInView===d||(this.isInView=d,a&&!d&&this.hasEnteredView))return;d&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",d);const{onViewportEnter:u,onViewportLeave:f}=this.node.getProps(),p=d?u:f;p&&p(l)};return e3(this.node.current,o,s)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(r3(t,n))&&this.startObserver()}unmount(){}}function r3({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const i3={inView:{Feature:n3},tap:{Feature:X8},focus:{Feature:K8},hover:{Feature:Y8}},a3={layout:{ProjectionNode:Px,MeasureLayout:bx}},Pl=j.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"}),Gl=j.createContext({}),Kf=typeof window<"u",zl=Kf?j.useLayoutEffect:j.useEffect,zx=j.createContext({strict:!1});function o3(e,t,n,r,i){var a,o;const{visualElement:s}=j.useContext(Gl),l=j.useContext(zx),d=j.useContext(El),u=j.useContext(Pl).reducedMotion,f=j.useRef();r=r||l.renderer,!f.current&&r&&(f.current=r(e,{visualState:t,parent:s,props:n,presenceContext:d,blockInitialAnimation:d?d.initial===!1:!1,reducedMotionConfig:u}));const p=f.current,g=j.useContext(wx);p&&!p.projection&&i&&(p.type==="html"||p.type==="svg")&&s3(f.current,n,i,g);const x=j.useRef(!1);j.useInsertionEffect(()=>{p&&x.current&&p.update(n,d)});const y=n[rx],b=j.useRef(!!y&&!(!((a=window.MotionHandoffIsComplete)===null||a===void 0)&&a.call(window,y))&&((o=window.MotionHasOptimisedAnimation)===null||o===void 0?void 0:o.call(window,y)));return zl(()=>{p&&(x.current=!0,window.MotionIsMounted=!0,p.updateFeatures(),Yf.render(p.render),b.current&&p.animationState&&p.animationState.animateChanges())}),j.useEffect(()=>{p&&(!b.current&&p.animationState&&p.animationState.animateChanges(),b.current&&(queueMicrotask(()=>{var v;(v=window.MotionHandoffMarkAsComplete)===null||v===void 0||v.call(window,y)}),b.current=!1))}),p}function s3(e,t,n,r){const{layoutId:i,layout:a,drag:o,dragConstraints:s,layoutScroll:l,layoutRoot:d}=t;e.projection=new n(e.latestValues,t["data-framer-portal-id"]?void 0:_x(e.parent)),e.projection.setOptions({layoutId:i,layout:a,alwaysMeasureLayout:!!o||s&&hi(s),visualElement:e,animationType:typeof a=="string"?a:"both",initialPromotionConfig:r,layoutScroll:l,layoutRoot:d})}function _x(e){if(e)return e.options.allowProjection!==!1?e.projection:_x(e.parent)}function l3(e,t,n){return j.useCallback(r=>{r&&e.mount&&e.mount(r),t&&(r?t.mount(r):t.unmount()),n&&(typeof n=="function"?n(r):hi(n)&&(n.current=r))},[t])}function _l(e){return Cl(e.animate)||kf.some(t=>eo(e[t]))}function Mx(e){return!!(_l(e)||e.variants)}function c3(e,t){if(_l(e)){const{initial:n,animate:r}=e;return{initial:n===!1||eo(n)?n:void 0,animate:eo(r)?r:void 0}}return e.inherit!==!1?t:{}}function d3(e){const{initial:t,animate:n}=c3(e,j.useContext(Gl));return j.useMemo(()=>({initial:t,animate:n}),[W0(t),W0(n)])}function W0(e){return Array.isArray(e)?e.join(" "):e}const q0={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Ii={};for(const e in q0)Ii[e]={isEnabled:t=>q0[e].some(n=>!!t[n])};function u3(e){for(const t in e)Ii[t]={...Ii[t],...e[t]}}const f3=Symbol.for("motionComponentSymbol");function p3({preloadedFeatures:e,createVisualElement:t,useRender:n,useVisualState:r,Component:i}){e&&u3(e);function a(s,l){let d;const u={...j.useContext(Pl),...s,layoutId:h3(s)},{isStatic:f}=u,p=d3(s),g=r(s,f);if(!f&&Kf){m3();const x=g3(u);d=x.MeasureLayout,p.visualElement=o3(i,g,u,t,x.ProjectionNode)}return c.jsxs(Gl.Provider,{value:p,children:[d&&p.visualElement?c.jsx(d,{visualElement:p.visualElement,...u}):null,n(i,s,l3(g,p.visualElement,l),g,f,p.visualElement)]})}const o=j.forwardRef(a);return o[f3]=i,o}function h3({layoutId:e}){const t=j.useContext(qf).id;return t&&e!==void 0?t+"-"+e:e}function m3(e,t){j.useContext(zx).strict}function g3(e){const{drag:t,layout:n}=Ii;if(!t&&!n)return{};const r={...t,...n};return{MeasureLayout:t!=null&&t.isEnabled(e)||n!=null&&n.isEnabled(e)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}const v3=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Xf(e){return typeof e!="string"||e.includes("-")?!1:!!(v3.indexOf(e)>-1||/[A-Z]/u.test(e))}function Lx(e,{style:t,vars:n},r,i){Object.assign(e.style,t,i&&i.getProjectionStyles(r));for(const a in n)e.style.setProperty(a,n[a])}const Ox=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function Ix(e,t,n,r){Lx(e,t,void 0,r);for(const i in t.attrs)e.setAttribute(Ox.has(i)?i:Wf(i),t.attrs[i])}function Rx(e,{layout:t,layoutId:n}){return Xr.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!Ws[e]||e==="opacity")}function Qf(e,t,n){var r;const{style:i}=e,a={};for(const o in i)(at(i[o])||t.style&&at(t.style[o])||Rx(o,e)||((r=n==null?void 0:n.getValue(o))===null||r===void 0?void 0:r.liveStyle)!==void 0)&&(a[o]=i[o]);return a}function Dx(e,t,n){const r=Qf(e,t,n);for(const i in e)if(at(e[i])||at(t[i])){const a=po.indexOf(i)!==-1?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i;r[a]=e[i]}return r}function qi(e){const t=j.useRef(null);return t.current===null&&(t.current=e()),t.current}function x3({scrapeMotionValuesFromProps:e,createRenderState:t,onMount:n},r,i,a){const o={latestValues:y3(r,i,a,e),renderState:t()};return n&&(o.mount=s=>n(r,s,o)),o}const Vx=e=>(t,n)=>{const r=j.useContext(Gl),i=j.useContext(El),a=()=>x3(e,t,r,i);return n?a():qi(a)};function y3(e,t,n,r){const i={},a=r(e,{});for(const p in a)i[p]=as(a[p]);let{initial:o,animate:s}=e;const l=_l(e),d=Mx(e);t&&d&&!l&&e.inherit!==!1&&(o===void 0&&(o=t.initial),s===void 0&&(s=t.animate));let u=n?n.initial===!1:!1;u=u||o===!1;const f=u?s:o;if(f&&typeof f!="boolean"&&!Cl(f)){const p=Array.isArray(f)?f:[f];for(let g=0;g<p.length;g++){const x=jf(e,p[g]);if(x){const{transitionEnd:y,transition:b,...v}=x;for(const h in v){let m=v[h];if(Array.isArray(m)){const w=u?m.length-1:0;m=m[w]}m!==null&&(i[h]=m)}for(const h in y)i[h]=y[h]}}}return i}const Zf=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),Nx=()=>({...Zf(),attrs:{}}),Fx=(e,t)=>t&&typeof e=="number"?t.transform(e):e,w3={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},b3=po.length;function S3(e,t,n){let r="",i=!0;for(let a=0;a<b3;a++){const o=po[a],s=e[o];if(s===void 0)continue;let l=!0;if(typeof s=="number"?l=s===(o.startsWith("scale")?1:0):l=parseFloat(s)===0,!l||n){const d=Fx(s,Mf[o]);if(!l){i=!1;const u=w3[o]||o;r+=`${u}(${d}) `}n&&(t[o]=d)}}return r=r.trim(),n?r=n(t,i?"":r):i&&(r="none"),r}function Jf(e,t,n){const{style:r,vars:i,transformOrigin:a}=e;let o=!1,s=!1;for(const l in t){const d=t[l];if(Xr.has(l)){o=!0;continue}else if(Mv(l)){i[l]=d;continue}else{const u=Fx(d,Mf[l]);l.startsWith("origin")?(s=!0,a[l]=u):r[l]=u}}if(t.transform||(o||n?r.transform=S3(t,e.transform,n):r.transform&&(r.transform="none")),s){const{originX:l="50%",originY:d="50%",originZ:u=0}=a;r.transformOrigin=`${l} ${d} ${u}`}}function Y0(e,t,n){return typeof e=="string"?e:W.transform(t+n*e)}function j3(e,t,n){const r=Y0(t,e.x,e.width),i=Y0(n,e.y,e.height);return`${r} ${i}`}const C3={offset:"stroke-dashoffset",array:"stroke-dasharray"},k3={offset:"strokeDashoffset",array:"strokeDasharray"};function T3(e,t,n=1,r=0,i=!0){e.pathLength=1;const a=i?C3:k3;e[a.offset]=W.transform(-r);const o=W.transform(t),s=W.transform(n);e[a.array]=`${o} ${s}`}function ep(e,{attrX:t,attrY:n,attrScale:r,originX:i,originY:a,pathLength:o,pathSpacing:s=1,pathOffset:l=0,...d},u,f){if(Jf(e,d,f),u){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:p,style:g,dimensions:x}=e;p.transform&&(x&&(g.transform=p.transform),delete p.transform),x&&(i!==void 0||a!==void 0||g.transform)&&(g.transformOrigin=j3(x,i!==void 0?i:.5,a!==void 0?a:.5)),t!==void 0&&(p.x=t),n!==void 0&&(p.y=n),r!==void 0&&(p.scale=r),o!==void 0&&T3(p,o,s,l,!1)}const tp=e=>typeof e=="string"&&e.toLowerCase()==="svg",A3={useVisualState:Vx({scrapeMotionValuesFromProps:Dx,createRenderState:Nx,onMount:(e,t,{renderState:n,latestValues:r})=>{oe.read(()=>{try{n.dimensions=typeof t.getBBox=="function"?t.getBBox():t.getBoundingClientRect()}catch{n.dimensions={x:0,y:0,width:0,height:0}}}),oe.render(()=>{ep(n,r,tp(t.tagName),e.transformTemplate),Ix(t,n)})}})},E3={useVisualState:Vx({scrapeMotionValuesFromProps:Qf,createRenderState:Zf})};function $x(e,t,n){for(const r in t)!at(t[r])&&!Rx(r,n)&&(e[r]=t[r])}function P3({transformTemplate:e},t){return j.useMemo(()=>{const n=Zf();return Jf(n,t,e),Object.assign({},n.vars,n.style)},[t])}function G3(e,t){const n=e.style||{},r={};return $x(r,n,e),Object.assign(r,P3(e,t)),r}function z3(e,t){const n={},r=G3(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}const _3=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function qs(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||_3.has(e)}let Bx=e=>!qs(e);function M3(e){e&&(Bx=t=>t.startsWith("on")?!qs(t):e(t))}try{M3(require("@emotion/is-prop-valid").default)}catch{}function L3(e,t,n){const r={};for(const i in e)i==="values"&&typeof e.values=="object"||(Bx(i)||n===!0&&qs(i)||!t&&!qs(i)||e.draggable&&i.startsWith("onDrag"))&&(r[i]=e[i]);return r}function O3(e,t,n,r){const i=j.useMemo(()=>{const a=Nx();return ep(a,t,tp(r),e.transformTemplate),{...a.attrs,style:{...a.style}}},[t]);if(e.style){const a={};$x(a,e.style,e),i.style={...a,...i.style}}return i}function I3(e=!1){return(n,r,i,{latestValues:a},o)=>{const l=(Xf(n)?O3:z3)(r,a,o,n),d=L3(r,typeof n=="string",e),u=n!==j.Fragment?{...d,...l,ref:i}:{},{children:f}=r,p=j.useMemo(()=>at(f)?f.get():f,[f]);return j.createElement(n,{...u,children:p})}}function R3(e,t){return function(r,{forwardMotionProps:i}={forwardMotionProps:!1}){const o={...Xf(r)?A3:E3,preloadedFeatures:e,useRender:I3(i),createVisualElement:t,Component:r};return p3(o)}}const ou={current:null},Hx={current:!1};function D3(){if(Hx.current=!0,!!Kf)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>ou.current=e.matches;e.addListener(t),t()}else ou.current=!1}function V3(e,t,n){for(const r in t){const i=t[r],a=n[r];if(at(i))e.addValue(r,i);else if(at(a))e.addValue(r,ln(i,{owner:e}));else if(a!==i)if(e.hasValue(r)){const o=e.getValue(r);o.liveStyle===!0?o.jump(i):o.hasAnimated||o.set(i)}else{const o=e.getStaticValue(r);e.addValue(r,ln(o!==void 0?o:i,{owner:e}))}}for(const r in n)t[r]===void 0&&e.removeValue(r);return t}const K0=new WeakMap,N3=[...Iv,rt,fr],F3=e=>N3.find(Ov(e)),X0=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class $3{scrapeMotionValuesFromProps(t,n,r){return{}}constructor({parent:t,props:n,presenceContext:r,reducedMotionConfig:i,blockInitialAnimation:a,visualState:o},s={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Gf,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const p=pn.now();this.renderScheduledAt<p&&(this.renderScheduledAt=p,oe.render(this.render,!1,!0))};const{latestValues:l,renderState:d}=o;this.latestValues=l,this.baseTarget={...l},this.initialValues=n.initial?{...l}:{},this.renderState=d,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.options=s,this.blockInitialAnimation=!!a,this.isControllingVariants=_l(n),this.isVariantNode=Mx(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:u,...f}=this.scrapeMotionValuesFromProps(n,{},this);for(const p in f){const g=f[p];l[p]!==void 0&&at(g)&&g.set(l[p],!1)}}mount(t){this.current=t,K0.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,r)=>this.bindToMotionValue(r,n)),Hx.current||D3(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:ou.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){K0.delete(this.current),this.projection&&this.projection.unmount(),Zt(this.notifyUpdate),Zt(this.render),this.valueSubscriptions.forEach(t=>t()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const t in this.events)this.events[t].clear();for(const t in this.features){const n=this.features[t];n&&(n.unmount(),n.isMounted=!1)}this.current=null}bindToMotionValue(t,n){this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)();const r=Xr.has(t),i=n.on("change",s=>{this.latestValues[t]=s,this.props.onUpdate&&oe.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0)}),a=n.on("renderRequest",this.scheduleRender);let o;window.MotionCheckAppearSync&&(o=window.MotionCheckAppearSync(this,t,n)),this.valueSubscriptions.set(t,()=>{i(),a(),o&&o(),n.owner&&n.stop()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in Ii){const n=Ii[t];if(!n)continue;const{isEnabled:r,Feature:i}=n;if(!this.features[t]&&i&&r(this.props)&&(this.features[t]=new i(this)),this.features[t]){const a=this.features[t];a.isMounted?a.update():(a.mount(),a.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Me()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<X0.length;r++){const i=X0[r];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const a="on"+i,o=t[a];o&&(this.propEventSubscriptions[i]=this.on(i,o))}this.prevMotionValues=V3(this,this.scrapeMotionValuesFromProps(t,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){const r=this.values.get(t);n!==r&&(r&&this.removeValue(t),this.bindToMotionValue(t,n),this.values.set(t,n),this.latestValues[t]=n.get())}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let r=this.values.get(t);return r===void 0&&n!==void 0&&(r=ln(n===null?void 0:n,{owner:this}),this.addValue(t,r)),r}readValue(t,n){var r;let i=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:(r=this.getBaseTargetFromProps(this.props,t))!==null&&r!==void 0?r:this.readValueFromInstance(this.current,t,this.options);return i!=null&&(typeof i=="string"&&(zv(i)||Gv(i))?i=parseFloat(i):!F3(i)&&fr.test(n)&&(i=Hv(t,n)),this.setBaseTarget(t,at(i)?i.get():i)),at(i)?i.get():i}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var n;const{initial:r}=this.props;let i;if(typeof r=="string"||typeof r=="object"){const o=jf(this.props,r,(n=this.presenceContext)===null||n===void 0?void 0:n.custom);o&&(i=o[t])}if(r&&i!==void 0)return i;const a=this.getBaseTargetFromProps(this.props,t);return a!==void 0&&!at(a)?a:this.initialValues[t]!==void 0&&i===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new Uf),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}}class Ux extends $3{constructor(){super(...arguments),this.KeyframeResolver=Uv}sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){return t.style?t.style[n]:void 0}removeValueFromRenderState(t,{vars:n,style:r}){delete n[t],delete r[t]}}function B3(e){return window.getComputedStyle(e)}class H3 extends Ux{constructor(){super(...arguments),this.type="html",this.renderInstance=Lx}readValueFromInstance(t,n){if(Xr.has(n)){const r=Lf(n);return r&&r.default||0}else{const r=B3(t),i=(Mv(n)?r.getPropertyValue(n):r[n])||0;return typeof i=="string"?i.trim():i}}measureInstanceViewportBox(t,{transformPagePoint:n}){return xx(t,n)}build(t,n,r){Jf(t,n,r.transformTemplate)}scrapeMotionValuesFromProps(t,n,r){return Qf(t,n,r)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;at(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}class U3 extends Ux{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Me}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(Xr.has(n)){const r=Lf(n);return r&&r.default||0}return n=Ox.has(n)?n:Wf(n),t.getAttribute(n)}scrapeMotionValuesFromProps(t,n,r){return Dx(t,n,r)}build(t,n,r){ep(t,n,this.isSVGTag,r.transformTemplate)}renderInstance(t,n,r,i){Ix(t,n,r,i)}mount(t){this.isSVGTag=tp(t.tagName),super.mount(t)}}const W3=(e,t)=>Xf(e)?new U3(t):new H3(t,{allowProjection:e!==j.Fragment}),q3=R3({...I9,...i3,...q8,...a3},W3),Le=P4(q3);class Y3 extends j.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent){const r=this.props.sizeRef.current;r.height=n.offsetHeight||0,r.width=n.offsetWidth||0,r.top=n.offsetTop,r.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function K3({children:e,isPresent:t}){const n=j.useId(),r=j.useRef(null),i=j.useRef({width:0,height:0,top:0,left:0}),{nonce:a}=j.useContext(Pl);return j.useInsertionEffect(()=>{const{width:o,height:s,top:l,left:d}=i.current;if(t||!r.current||!o||!s)return;r.current.dataset.motionPopId=n;const u=document.createElement("style");return a&&(u.nonce=a),document.head.appendChild(u),u.sheet&&u.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${s}px !important;
            top: ${l}px !important;
            left: ${d}px !important;
          }
        `),()=>{document.head.removeChild(u)}},[t]),c.jsx(Y3,{isPresent:t,childRef:r,sizeRef:i,children:j.cloneElement(e,{ref:r})})}const X3=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:a,mode:o})=>{const s=qi(Q3),l=j.useId(),d=j.useCallback(f=>{s.set(f,!0);for(const p of s.values())if(!p)return;r&&r()},[s,r]),u=j.useMemo(()=>({id:l,initial:t,isPresent:n,custom:i,onExitComplete:d,register:f=>(s.set(f,!1),()=>s.delete(f))}),a?[Math.random(),d]:[n,d]);return j.useMemo(()=>{s.forEach((f,p)=>s.set(p,!1))},[n]),j.useEffect(()=>{!n&&!s.size&&r&&r()},[n]),o==="popLayout"&&(e=c.jsx(K3,{isPresent:n,children:e})),c.jsx(El.Provider,{value:u,children:e})};function Q3(){return new Map}const Do=e=>e.key||"";function Q0(e){const t=[];return j.Children.forEach(e,n=>{j.isValidElement(n)&&t.push(n)}),t}const Z3=({children:e,exitBeforeEnter:t,custom:n,initial:r=!0,onExitComplete:i,presenceAffectsLayout:a=!0,mode:o="sync"})=>{const s=j.useMemo(()=>Q0(e),[e]),l=s.map(Do),d=j.useRef(!0),u=j.useRef(s),f=qi(()=>new Map),[p,g]=j.useState(s),[x,y]=j.useState(s);zl(()=>{d.current=!1,u.current=s;for(let h=0;h<x.length;h++){const m=Do(x[h]);l.includes(m)?f.delete(m):f.get(m)!==!0&&f.set(m,!1)}},[x,l.length,l.join("-")]);const b=[];if(s!==p){let h=[...s];for(let m=0;m<x.length;m++){const w=x[m],S=Do(w);l.includes(S)||(h.splice(m,0,w),b.push(w))}o==="wait"&&b.length&&(h=b),y(Q0(h)),g(s);return}const{forceRender:v}=j.useContext(qf);return c.jsx(c.Fragment,{children:x.map(h=>{const m=Do(h),w=s===x||l.includes(m),S=()=>{if(f.has(m))f.set(m,!0);else return;let C=!0;f.forEach(A=>{A||(C=!1)}),C&&(v==null||v(),y(u.current),i&&i())};return c.jsx(X3,{isPresent:w,initial:!d.current||r?void 0:!1,custom:w?void 0:n,presenceAffectsLayout:a,mode:o,onExitComplete:w?void 0:S,children:h},m)})})};function J3(e){const t=qi(()=>ln(e)),{isStatic:n}=j.useContext(Pl);if(n){const[,r]=j.useState(e);j.useEffect(()=>t.on("change",r),[])}return t}function Wx(e,t){const n=J3(t()),r=()=>n.set(t());return r(),zl(()=>{const i=()=>oe.preRender(r,!1,!0),a=e.map(o=>o.on("change",i));return()=>{a.forEach(o=>o()),Zt(r)}}),n}const e6=e=>e&&typeof e=="object"&&e.mix,t6=e=>e6(e)?e.mix:void 0;function n6(...e){const t=!Array.isArray(e[0]),n=t?0:-1,r=e[0+n],i=e[1+n],a=e[2+n],o=e[3+n],s=Vf(i,a,{mixer:t6(a[0]),...o});return t?s(r):s}function r6(e){Pa.current=[],e();const t=Wx(Pa.current,e);return Pa.current=void 0,t}function Vo(e,t,n,r){if(typeof e=="function")return r6(e);const i=typeof t=="function"?t:n6(t,n,r);return Array.isArray(e)?Z0(e,i):Z0([e],([a])=>i(a))}function Z0(e,t){const n=qi(()=>[]);return Wx(e,()=>{n.length=0;const r=e.length;for(let i=0;i<r;i++)n[i]=e[i].get();return t(n)})}function qx(e,t,n){return typeof e=="string"?e=document.querySelectorAll(e):e instanceof Element&&(e=[e]),Array.from(e||[])}const os=new WeakMap;let Bn;function i6(e,t){if(t){const{inlineSize:n,blockSize:r}=t[0];return{width:n,height:r}}else return e instanceof SVGElement&&"getBBox"in e?e.getBBox():{width:e.offsetWidth,height:e.offsetHeight}}function a6({target:e,contentRect:t,borderBoxSize:n}){var r;(r=os.get(e))===null||r===void 0||r.forEach(i=>{i({target:e,contentSize:t,get size(){return i6(e,n)}})})}function o6(e){e.forEach(a6)}function s6(){typeof ResizeObserver>"u"||(Bn=new ResizeObserver(o6))}function l6(e,t){Bn||s6();const n=qx(e);return n.forEach(r=>{let i=os.get(r);i||(i=new Set,os.set(r,i)),i.add(t),Bn==null||Bn.observe(r)}),()=>{n.forEach(r=>{const i=os.get(r);i==null||i.delete(t),i!=null&&i.size||Bn==null||Bn.unobserve(r)})}}const ss=new Set;let _a;function c6(){_a=()=>{const e={width:window.innerWidth,height:window.innerHeight},t={target:window,size:e,contentSize:e};ss.forEach(n=>n(t))},window.addEventListener("resize",_a)}function d6(e){return ss.add(e),_a||c6(),()=>{ss.delete(e),!ss.size&&_a&&(_a=void 0)}}function u6(e,t){return typeof e=="function"?d6(e):l6(e,t)}const f6=50,J0=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),p6=()=>({time:0,x:J0(),y:J0()}),h6={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function em(e,t,n,r){const i=n[t],{length:a,position:o}=h6[t],s=i.current,l=n.time;i.current=e[`scroll${o}`],i.scrollLength=e[`scroll${a}`]-e[`client${a}`],i.offset.length=0,i.offset[0]=0,i.offset[1]=i.scrollLength,i.progress=$r(0,i.scrollLength,i.current);const d=r-l;i.velocity=d>f6?0:If(i.current-s,d)}function m6(e,t,n){em(e,"x",t,n),em(e,"y",t,n),t.time=n}function g6(e,t){const n={x:0,y:0};let r=e;for(;r&&r!==t;)if(r instanceof HTMLElement)n.x+=r.offsetLeft,n.y+=r.offsetTop,r=r.offsetParent;else if(r.tagName==="svg"){const i=r.getBoundingClientRect();r=r.parentElement;const a=r.getBoundingClientRect();n.x+=i.left-a.left,n.y+=i.top-a.top}else if(r instanceof SVGGraphicsElement){const{x:i,y:a}=r.getBBox();n.x+=i,n.y+=a;let o=null,s=r.parentNode;for(;!o;)s.tagName==="svg"&&(o=s),s=r.parentNode;r=o}else break;return n}const v6={Enter:[[0,1],[1,1]],Exit:[[0,0],[1,0]],Any:[[1,0],[0,1]],All:[[0,0],[1,1]]},su={start:0,center:.5,end:1};function tm(e,t,n=0){let r=0;if(e in su&&(e=su[e]),typeof e=="string"){const i=parseFloat(e);e.endsWith("px")?r=i:e.endsWith("%")?e=i/100:e.endsWith("vw")?r=i/100*document.documentElement.clientWidth:e.endsWith("vh")?r=i/100*document.documentElement.clientHeight:e=i}return typeof e=="number"&&(r=t*e),n+r}const x6=[0,0];function y6(e,t,n,r){let i=Array.isArray(e)?e:x6,a=0,o=0;return typeof e=="number"?i=[e,e]:typeof e=="string"&&(e=e.trim(),e.includes(" ")?i=e.split(" "):i=[e,su[e]?e:"0"]),a=tm(i[0],n,r),o=tm(i[1],t),a-o}const w6={x:0,y:0};function b6(e){return"getBBox"in e&&e.tagName!=="svg"?e.getBBox():{width:e.clientWidth,height:e.clientHeight}}function S6(e,t,n){const{offset:r=v6.All}=n,{target:i=e,axis:a="y"}=n,o=a==="y"?"height":"width",s=i!==e?g6(i,e):w6,l=i===e?{width:e.scrollWidth,height:e.scrollHeight}:b6(i),d={width:e.clientWidth,height:e.clientHeight};t[a].offset.length=0;let u=!t[a].interpolate;const f=r.length;for(let p=0;p<f;p++){const g=y6(r[p],d[o],l[o],s[a]);!u&&g!==t[a].interpolatorOffsets[p]&&(u=!0),t[a].offset[p]=g}u&&(t[a].interpolate=Vf(t[a].offset,Zv(r)),t[a].interpolatorOffsets=[...t[a].offset]),t[a].progress=t[a].interpolate(t[a].current)}function j6(e,t=e,n){if(n.x.targetOffset=0,n.y.targetOffset=0,t!==e){let r=t;for(;r&&r!==e;)n.x.targetOffset+=r.offsetLeft,n.y.targetOffset+=r.offsetTop,r=r.offsetParent}n.x.targetLength=t===e?t.scrollWidth:t.clientWidth,n.y.targetLength=t===e?t.scrollHeight:t.clientHeight,n.x.containerLength=e.clientWidth,n.y.containerLength=e.clientHeight}function C6(e,t,n,r={}){return{measure:()=>j6(e,r.target,n),update:i=>{m6(e,n,i),(r.offset||r.target)&&S6(e,n,r)},notify:()=>t(n)}}const la=new WeakMap,nm=new WeakMap,Lc=new WeakMap,rm=e=>e===document.documentElement?window:e;function np(e,{container:t=document.documentElement,...n}={}){let r=Lc.get(t);r||(r=new Set,Lc.set(t,r));const i=p6(),a=C6(t,e,i,n);if(r.add(a),!la.has(t)){const s=()=>{for(const p of r)p.measure()},l=()=>{for(const p of r)p.update(Be.timestamp)},d=()=>{for(const p of r)p.notify()},u=()=>{oe.read(s,!1,!0),oe.read(l,!1,!0),oe.update(d,!1,!0)};la.set(t,u);const f=rm(t);window.addEventListener("resize",u,{passive:!0}),t!==document.documentElement&&nm.set(t,u6(t,u)),f.addEventListener("scroll",u,{passive:!0})}const o=la.get(t);return oe.read(o,!1,!0),()=>{var s;Zt(o);const l=Lc.get(t);if(!l||(l.delete(a),l.size))return;const d=la.get(t);la.delete(t),d&&(rm(t).removeEventListener("scroll",d),(s=nm.get(t))===null||s===void 0||s(),window.removeEventListener("resize",d))}}function Yx(e,t){let n;const r=()=>{const{currentTime:i}=t,o=(i===null?0:i.value)/100;n!==o&&e(o),n=o};return oe.update(r,!0),()=>Zt(r)}function k6({source:e,container:t,axis:n="y"}){e&&(t=e);const r={value:0},i=np(a=>{r.value=a[n].progress*100},{container:t,axis:n});return{currentTime:r,cancel:i}}const Oc=new Map;function Kx({source:e,container:t=document.documentElement,axis:n="y"}={}){e&&(t=e),Oc.has(t)||Oc.set(t,{});const r=Oc.get(t);return r[n]||(r[n]=nx()?new ScrollTimeline({source:t,axis:n}):k6({source:t,axis:n})),r[n]}function T6(e){return e.length===2}function Xx(e){return e&&(e.target||e.offset)}function A6(e,t){return T6(e)||Xx(t)?np(n=>{e(n[t.axis].progress,n)},t):Yx(e,Kx(t))}function E6(e,t){if(Xx(t))return e.pause(),np(n=>{e.time=e.duration*n[t.axis].progress},t);{const n=Kx(t);return e.attachTimeline(n,r=>(r.pause(),Yx(i=>{r.time=r.duration*i},n)))}}function P6(e,{axis:t="y",...n}={}){const r={axis:t,...n};return typeof e=="function"?A6(e,r):E6(e,r)}function im(e,t){B4(!!(!t||t.current))}const G6=()=>({scrollX:ln(0),scrollY:ln(0),scrollXProgress:ln(0),scrollYProgress:ln(0)});function z6({container:e,target:t,layoutEffect:n=!0,...r}={}){const i=qi(G6);return(n?zl:j.useEffect)(()=>(im("target",t),im("container",e),P6((o,{x:s,y:l})=>{i.scrollX.set(s.current),i.scrollXProgress.set(s.progress),i.scrollY.set(l.current),i.scrollYProgress.set(l.progress)},{...r,container:(e==null?void 0:e.current)||void 0,target:(t==null?void 0:t.current)||void 0})),[e,t,JSON.stringify(r.offset)]),i}const _6={some:0,all:1};function M6(e,t,{root:n,margin:r,amount:i="some"}={}){const a=qx(e),o=new WeakMap,s=d=>{d.forEach(u=>{const f=o.get(u.target);if(u.isIntersecting!==!!f)if(u.isIntersecting){const p=t(u);typeof p=="function"?o.set(u.target,p):l.unobserve(u.target)}else f&&(f(u),o.delete(u.target))})},l=new IntersectionObserver(s,{root:n,rootMargin:r,threshold:typeof i=="number"?i:_6[i]});return a.forEach(d=>l.observe(d)),()=>l.disconnect()}function L6(e,{root:t,margin:n,amount:r,once:i=!1}={}){const[a,o]=j.useState(!1);return j.useEffect(()=>{if(!e.current||i&&a)return;const s=()=>(o(!0),i?void 0:()=>o(!1)),l={root:t&&t.current||void 0,margin:n,amount:r};return M6(e.current,s,l)},[t,e,n,i,r]),a}var Qx={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},am=J.createContext&&J.createContext(Qx),O6=["attr","size","title"];function I6(e,t){if(e==null)return{};var n=R6(e,t),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function R6(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function Ys(){return Ys=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ys.apply(this,arguments)}function om(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Ks(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?om(Object(n),!0).forEach(function(r){D6(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):om(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function D6(e,t,n){return t=V6(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function V6(e){var t=N6(e,"string");return typeof t=="symbol"?t:t+""}function N6(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Zx(e){return e&&e.map((t,n)=>J.createElement(t.tag,Ks({key:n},t.attr),Zx(t.child)))}function ee(e){return t=>J.createElement(F6,Ys({attr:Ks({},e.attr)},t),Zx(e.child))}function F6(e){var t=n=>{var{attr:r,size:i,title:a}=e,o=I6(e,O6),s=i||n.size||"1em",l;return n.className&&(l=n.className),e.className&&(l=(l?l+" ":"")+e.className),J.createElement("svg",Ys({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:l,style:Ks(Ks({color:e.color||n.color},n.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),a&&J.createElement("title",null,a),e.children)};return am!==void 0?J.createElement(am.Consumer,null,n=>t(n)):t(Qx)}function $6(e){return ee({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"},child:[]}]})(e)}function sm(e){return ee({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M12.971 352h32.394C67.172 454.735 181.944 512 288 512c106.229 0 220.853-57.38 242.635-160h32.394c10.691 0 16.045-12.926 8.485-20.485l-67.029-67.029c-4.686-4.686-12.284-4.686-16.971 0l-67.029 67.029c-7.56 7.56-2.206 20.485 8.485 20.485h35.146c-20.29 54.317-84.963 86.588-144.117 94.015V256h52c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-52v-5.47c37.281-13.178 63.995-48.725 64-90.518C384.005 43.772 341.605.738 289.37.01 235.723-.739 192 42.525 192 96c0 41.798 26.716 77.35 64 90.53V192h-52c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h52v190.015c-58.936-7.399-123.82-39.679-144.117-94.015h35.146c10.691 0 16.045-12.926 8.485-20.485l-67.029-67.029c-4.686-4.686-12.284-4.686-16.971 0L4.485 331.515C-3.074 339.074 2.28 352 12.971 352zM288 64c17.645 0 32 14.355 32 32s-14.355 32-32 32-32-14.355-32-32 14.355-32 32-32z"},child:[]}]})(e)}function rp(e){return ee({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"},child:[]}]})(e)}function Ee(e){return ee({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M32,384a95.4,95.4,0,0,0,32,71.09V496a16,16,0,0,0,16,16h32a16,16,0,0,0,16-16V480H384v16a16,16,0,0,0,16,16h32a16,16,0,0,0,16-16V455.09A95.4,95.4,0,0,0,480,384V336H32ZM496,256H80V69.25a21.26,21.26,0,0,1,36.28-15l19.27,19.26c-13.13,29.88-7.61,59.11,8.62,79.73l-.17.17A16,16,0,0,0,144,176l11.31,11.31a16,16,0,0,0,22.63,0L283.31,81.94a16,16,0,0,0,0-22.63L272,48a16,16,0,0,0-22.62,0l-.17.17c-20.62-16.23-49.83-21.75-79.73-8.62L150.22,20.28A69.25,69.25,0,0,0,32,69.25V256H16A16,16,0,0,0,0,272v16a16,16,0,0,0,16,16H496a16,16,0,0,0,16-16V272A16,16,0,0,0,496,256Z"},child:[]}]})(e)}function Re(e){return ee({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M176 256c44.11 0 80-35.89 80-80s-35.89-80-80-80-80 35.89-80 80 35.89 80 80 80zm352-128H304c-8.84 0-16 7.16-16 16v144H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v352c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16v-48h512v48c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V240c0-61.86-50.14-112-112-112z"},child:[]}]})(e)}function B6(e){return ee({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M448 384c-28.02 0-31.26-32-74.5-32-43.43 0-46.825 32-74.75 32-27.695 0-31.454-32-74.75-32-42.842 0-47.218 32-74.5 32-28.148 0-31.202-32-74.75-32-43.547 0-46.653 32-74.75 32v-80c0-26.5 21.5-48 48-48h16V112h64v144h64V112h64v144h64V112h64v144h16c26.5 0 48 21.5 48 48v80zm0 128H0v-96c43.356 0 46.767-32 74.75-32 27.951 0 31.253 32 74.75 32 42.843 0 47.217-32 74.5-32 28.148 0 31.201 32 74.75 32 43.357 0 46.767-32 74.75-32 27.488 0 31.252 32 74.5 32v96zM96 96c-17.75 0-32-14.25-32-32 0-31 32-23 32-64 12 0 32 29.5 32 56s-14.25 40-32 40zm128 0c-17.75 0-32-14.25-32-32 0-31 32-23 32-64 12 0 32 29.5 32 56s-14.25 40-32 40zm128 0c-17.75 0-32-14.25-32-32 0-31 32-23 32-64 12 0 32 29.5 32 56s-14.25 40-32 40z"},child:[]}]})(e)}function lm(e){return ee({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M12 192h424c6.6 0 12 5.4 12 12v260c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V204c0-6.6 5.4-12 12-12zm436-44v-36c0-26.5-21.5-48-48-48h-48V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H160V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v36c0 6.6 5.4 12 12 12h424c6.6 0 12-5.4 12-12z"},child:[]}]})(e)}function cm(e){return ee({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"},child:[]}]})(e)}function ae(e){return ee({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M510.5 225.5c-6.9-37.2-39.3-65.5-78.5-65.5-12.3 0-23.9 3-34.3 8-17.4-24.1-45.6-40-77.7-40-53 0-96 43-96 96 0 .5.2 1.1.2 1.6C187.6 233 160 265.2 160 304c0 44.2 35.8 80 80 80h256c44.2 0 80-35.8 80-80 0-39.2-28.2-71.7-65.5-78.5zm-386.4 34.4c-37.4-37.4-37.4-98.3 0-135.8 34.6-34.6 89.1-36.8 126.7-7.4 20-12.9 43.6-20.7 69.2-20.7.7 0 1.3.2 2 .2l8.9-26.7c3.4-10.2-6.3-19.8-16.5-16.4l-75.3 25.1-35.5-71c-4.8-9.6-18.5-9.6-23.3 0l-35.5 71-75.3-25.1c-10.2-3.4-19.8 6.3-16.4 16.5l25.1 75.3-71 35.5c-9.6 4.8-9.6 18.5 0 23.3l71 35.5-25.1 75.3c-3.4 10.2 6.3 19.8 16.5 16.5l59.2-19.7c-.2-2.4-.7-4.7-.7-7.2 0-12.5 2.3-24.5 6.2-35.9-3.6-2.7-7.1-5.2-10.2-8.3zm69.8-58c4.3-24.5 15.8-46.4 31.9-64-9.8-6.2-21.4-9.9-33.8-9.9-35.3 0-64 28.7-64 64 0 18.7 8.2 35.4 21.1 47.1 11.3-15.9 26.6-28.9 44.8-37.2zm330.6 216.2c-7.6-4.3-17.4-1.8-21.8 6l-36.6 64c-4.4 7.7-1.7 17.4 6 21.8 2.5 1.4 5.2 2.1 7.9 2.1 5.5 0 10.9-2.9 13.9-8.1l36.6-64c4.3-7.7 1.7-17.4-6-21.8zm-96 0c-7.6-4.3-17.4-1.8-21.8 6l-36.6 64c-4.4 7.7-1.7 17.4 6 21.8 2.5 1.4 5.2 2.1 7.9 2.1 5.5 0 10.9-2.9 13.9-8.1l36.6-64c4.3-7.7 1.7-17.4-6-21.8zm-96 0c-7.6-4.3-17.4-1.8-21.8 6l-36.6 64c-4.4 7.7-1.7 17.4 6 21.8 2.5 1.4 5.2 2.1 7.9 2.1 5.5 0 10.9-2.9 13.9-8.1l36.6-64c4.3-7.7 1.7-17.4-6-21.8zm-96 0c-7.6-4.3-17.4-1.8-21.8 6l-36.6 64c-4.4 7.7-1.7 17.4 6 21.8 2.5 1.4 5.2 2.1 7.9 2.1 5.5 0 10.9-2.9 13.9-8.1l36.6-64c4.3-7.7 1.7-17.4-6-21.8z"},child:[]}]})(e)}function ct(e){return ee({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M216 23.86c0-23.8-30.65-32.77-44.15-13.04C48 191.85 224 200 224 288c0 35.63-29.11 64.46-64.85 63.99-35.17-.45-63.15-29.77-63.15-64.94v-85.51c0-21.7-26.47-32.23-41.43-16.5C27.8 213.16 0 261.33 0 320c0 105.87 86.13 192 192 192s192-86.13 192-192c0-170.29-168-193-168-296.14z"},child:[]}]})(e)}function dm(e){return ee({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"},child:[]}]})(e)}function um(e){return ee({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"},child:[]}]})(e)}function H6(e){return ee({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M634.92 462.7l-288-448C341.03 5.54 330.89 0 320 0s-21.03 5.54-26.92 14.7l-288 448a32.001 32.001 0 0 0-1.17 32.64A32.004 32.004 0 0 0 32 512h576c11.71 0 22.48-6.39 28.09-16.67a31.983 31.983 0 0 0-1.17-32.63zM320 91.18L405.39 224H320l-64 64-38.06-38.06L320 91.18z"},child:[]}]})(e)}function hn(e){return ee({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M470.38 1.51L150.41 96A32 32 0 0 0 128 126.51v261.41A139 139 0 0 0 96 384c-53 0-96 28.66-96 64s43 64 96 64 96-28.66 96-64V214.32l256-75v184.61a138.4 138.4 0 0 0-32-3.93c-53 0-96 28.66-96 64s43 64 96 64 96-28.65 96-64V32a32 32 0 0 0-41.62-30.49z"},child:[]}]})(e)}function xe(e){return ee({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 224c-79.41 0-192 122.76-192 200.25 0 34.9 26.81 55.75 71.74 55.75 48.84 0 81.09-25.08 120.26-25.08 39.51 0 71.85 25.08 120.26 25.08 44.93 0 71.74-20.85 71.74-55.75C448 346.76 335.41 224 256 224zm-147.28-12.61c-10.4-34.65-42.44-57.09-71.56-50.13-29.12 6.96-44.29 40.69-33.89 75.34 10.4 34.65 42.44 57.09 71.56 50.13 29.12-6.96 44.29-40.69 33.89-75.34zm84.72-20.78c30.94-8.14 46.42-49.94 34.58-93.36s-46.52-72.01-77.46-63.87-46.42 49.94-34.58 93.36c11.84 43.42 46.53 72.02 77.46 63.87zm281.39-29.34c-29.12-6.96-61.15 15.48-71.56 50.13-10.4 34.65 4.77 68.38 33.89 75.34 29.12 6.96 61.15-15.48 71.56-50.13 10.4-34.65-4.77-68.38-33.89-75.34zm-156.27 29.34c30.94 8.14 65.62-20.45 77.46-63.87 11.84-43.42-3.64-85.21-34.58-93.36s-65.62 20.45-77.46 63.87c-11.84 43.42 3.64 85.22 34.58 93.36z"},child:[]}]})(e)}function Ce(e){return ee({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M160 288h-56c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h56v-64h-56c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h56V96h-56c-4.42 0-8-3.58-8-8V72c0-4.42 3.58-8 8-8h56V32c0-17.67-14.33-32-32-32H32C14.33 0 0 14.33 0 32v448c0 2.77.91 5.24 1.57 7.8L160 329.38V288zm320 64h-32v56c0 4.42-3.58 8-8 8h-16c-4.42 0-8-3.58-8-8v-56h-64v56c0 4.42-3.58 8-8 8h-16c-4.42 0-8-3.58-8-8v-56h-64v56c0 4.42-3.58 8-8 8h-16c-4.42 0-8-3.58-8-8v-56h-41.37L24.2 510.43c2.56.66 5.04 1.57 7.8 1.57h448c17.67 0 32-14.33 32-32v-96c0-17.67-14.33-32-32-32z"},child:[]}]})(e)}function Zr(e){return ee({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M440.3 345.2l-33.8-19.5 26-7c8.2-2.2 13.1-10.7 10.9-18.9l-4-14.9c-2.2-8.2-10.7-13.1-18.9-10.9l-70.8 19-63.9-37 63.8-36.9 70.8 19c8.2 2.2 16.7-2.7 18.9-10.9l4-14.9c2.2-8.2-2.7-16.7-10.9-18.9l-26-7 33.8-19.5c7.4-4.3 9.9-13.7 5.7-21.1L430.4 119c-4.3-7.4-13.7-9.9-21.1-5.7l-33.8 19.5 7-26c2.2-8.2-2.7-16.7-10.9-18.9l-14.9-4c-8.2-2.2-16.7 2.7-18.9 10.9l-19 70.8-62.8 36.2v-77.5l53.7-53.7c6.2-6.2 6.2-16.4 0-22.6l-11.3-11.3c-6.2-6.2-16.4-6.2-22.6 0L256 56.4V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v40.4l-19.7-19.7c-6.2-6.2-16.4-6.2-22.6 0L138.3 48c-6.3 6.2-6.3 16.4 0 22.6l53.7 53.7v77.5l-62.8-36.2-19-70.8c-2.2-8.2-10.7-13.1-18.9-10.9l-14.9 4c-8.2 2.2-13.1 10.7-10.9 18.9l7 26-33.8-19.5c-7.4-4.3-16.8-1.7-21.1 5.7L2.1 145.7c-4.3 7.4-1.7 16.8 5.7 21.1l33.8 19.5-26 7c-8.3 2.2-13.2 10.7-11 19l4 14.9c2.2 8.2 10.7 13.1 18.9 10.9l70.8-19 63.8 36.9-63.8 36.9-70.8-19c-8.2-2.2-16.7 2.7-18.9 10.9l-4 14.9c-2.2 8.2 2.7 16.7 10.9 18.9l26 7-33.8 19.6c-7.4 4.3-9.9 13.7-5.7 21.1l15.5 26.8c4.3 7.4 13.7 9.9 21.1 5.7l33.8-19.5-7 26c-2.2 8.2 2.7 16.7 10.9 18.9l14.9 4c8.2 2.2 16.7-2.7 18.9-10.9l19-70.8 62.8-36.2v77.5l-53.7 53.7c-6.3 6.2-6.3 16.4 0 22.6l11.3 11.3c6.2 6.2 16.4 6.2 22.6 0l19.7-19.7V496c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-40.4l19.7 19.7c6.2 6.2 16.4 6.2 22.6 0l11.3-11.3c6.2-6.2 6.2-16.4 0-22.6L256 387.7v-77.5l62.8 36.2 19 70.8c2.2 8.2 10.7 13.1 18.9 10.9l14.9-4c8.2-2.2 13.1-10.7 10.9-18.9l-7-26 33.8 19.5c7.4 4.3 16.8 1.7 21.1-5.7l15.5-26.8c4.3-7.3 1.8-16.8-5.6-21z"},child:[]}]})(e)}function _e(e){return ee({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M592 0H48A48 48 0 0 0 0 48v320a48 48 0 0 0 48 48h240v32H112a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16H352v-32h240a48 48 0 0 0 48-48V48a48 48 0 0 0-48-48zm-16 352H64V64h512z"},child:[]}]})(e)}function re(e){return ee({tag:"svg",attr:{viewBox:"0 0 416 512"},child:[{tag:"path",attr:{d:"M207.9 15.2c.8 4.7 16.1 94.5 16.1 128.8 0 52.3-27.8 89.6-68.9 104.6L168 486.7c.7 13.7-10.2 25.3-24 25.3H80c-13.7 0-24.7-11.5-24-25.3l12.9-238.1C27.7 233.6 0 196.2 0 144 0 109.6 15.3 19.9 16.1 15.2 19.3-5.1 61.4-5.4 64 16.3v141.2c1.3 3.4 15.1 3.2 16 0 1.4-25.3 7.9-139.2 8-141.8 3.3-20.8 44.7-20.8 47.9 0 .2 2.7 6.6 116.5 8 141.8.9 3.2 14.8 3.4 16 0V16.3c2.6-21.6 44.8-21.4 48-1.1zm119.2 285.7l-15 185.1c-1.2 14 9.9 26 23.9 26h56c13.3 0 24-10.7 24-24V24c0-13.2-10.7-24-24-24-82.5 0-221.4 178.5-64.9 300.9z"},child:[]}]})(e)}var Jx={exports:{}},U6="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",W6=U6,q6=W6;function ey(){}function ty(){}ty.resetWarningCache=ey;var Y6=function(){function e(r,i,a,o,s,l){if(l!==q6){var d=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw d.name="Invariant Violation",d}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:ty,resetWarningCache:ey};return n.PropTypes=n,n};Jx.exports=Y6();var K6=Jx.exports;const be=Hr(K6);function X6(e){return e&&typeof e=="object"&&"default"in e?e.default:e}var ny=j,Q6=X6(ny);function fm(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Z6(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var J6=!!(typeof window<"u"&&window.document&&window.document.createElement);function eS(e,t,n){if(typeof e!="function")throw new Error("Expected reducePropsToState to be a function.");if(typeof t!="function")throw new Error("Expected handleStateChangeOnClient to be a function.");if(typeof n<"u"&&typeof n!="function")throw new Error("Expected mapStateOnServer to either be undefined or a function.");function r(i){return i.displayName||i.name||"Component"}return function(a){if(typeof a!="function")throw new Error("Expected WrappedComponent to be a React component.");var o=[],s;function l(){s=e(o.map(function(u){return u.props})),d.canUseDOM?t(s):n&&(s=n(s))}var d=function(u){Z6(f,u);function f(){return u.apply(this,arguments)||this}f.peek=function(){return s},f.rewind=function(){if(f.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var x=s;return s=void 0,o=[],x};var p=f.prototype;return p.UNSAFE_componentWillMount=function(){o.push(this),l()},p.componentDidUpdate=function(){l()},p.componentWillUnmount=function(){var x=o.indexOf(this);o.splice(x,1),l()},p.render=function(){return Q6.createElement(a,this.props)},f}(ny.PureComponent);return fm(d,"displayName","SideEffect("+r(a)+")"),fm(d,"canUseDOM",J6),d}}var tS=eS;const nS=Hr(tS);var rS=typeof Element<"u",iS=typeof Map=="function",aS=typeof Set=="function",oS=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function ls(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var n,r,i;if(Array.isArray(e)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!==0;)if(!ls(e[r],t[r]))return!1;return!0}var a;if(iS&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(a=e.entries();!(r=a.next()).done;)if(!t.has(r.value[0]))return!1;for(a=e.entries();!(r=a.next()).done;)if(!ls(r.value[1],t.get(r.value[0])))return!1;return!0}if(aS&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(a=e.entries();!(r=a.next()).done;)if(!t.has(r.value[0]))return!1;return!0}if(oS&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!==0;)if(e[r]!==t[r])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf&&typeof e.valueOf=="function"&&typeof t.valueOf=="function")return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString&&typeof e.toString=="function"&&typeof t.toString=="function")return e.toString()===t.toString();if(i=Object.keys(e),n=i.length,n!==Object.keys(t).length)return!1;for(r=n;r--!==0;)if(!Object.prototype.hasOwnProperty.call(t,i[r]))return!1;if(rS&&e instanceof Element)return!1;for(r=n;r--!==0;)if(!((i[r]==="_owner"||i[r]==="__v"||i[r]==="__o")&&e.$$typeof)&&!ls(e[i[r]],t[i[r]]))return!1;return!0}return e!==e&&t!==t}var sS=function(t,n){try{return ls(t,n)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}};const lS=Hr(sS);/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var pm=Object.getOwnPropertySymbols,cS=Object.prototype.hasOwnProperty,dS=Object.prototype.propertyIsEnumerable;function uS(e){if(e==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function fS(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de",Object.getOwnPropertyNames(e)[0]==="5")return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map(function(a){return t[a]});if(r.join("")!=="0123456789")return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach(function(a){i[a]=a}),Object.keys(Object.assign({},i)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var pS=fS()?Object.assign:function(e,t){for(var n,r=uS(e),i,a=1;a<arguments.length;a++){n=Object(arguments[a]);for(var o in n)cS.call(n,o)&&(r[o]=n[o]);if(pm){i=pm(n);for(var s=0;s<i.length;s++)dS.call(n,i[s])&&(r[i[s]]=n[i[s]])}}return r};const hS=Hr(pS);var Or={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},X={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"};Object.keys(X).map(function(e){return X[e]});var Se={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src",TARGET:"target"},Xs={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},ro={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},mS=Object.keys(Xs).reduce(function(e,t){return e[Xs[t]]=t,e},{}),gS=[X.NOSCRIPT,X.SCRIPT,X.STYLE],qt="data-react-helmet",vS=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},xS=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},yS=function(){function e(t,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),ht=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},wS=function(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},hm=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},bS=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e},lu=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return n===!1?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},SS=function(t){var n=ki(t,X.TITLE),r=ki(t,ro.TITLE_TEMPLATE);if(r&&n)return r.replace(/%s/g,function(){return Array.isArray(n)?n.join(""):n});var i=ki(t,ro.DEFAULT_TITLE);return n||i||void 0},jS=function(t){return ki(t,ro.ON_CHANGE_CLIENT_STATE)||function(){}},Ic=function(t,n){return n.filter(function(r){return typeof r[t]<"u"}).map(function(r){return r[t]}).reduce(function(r,i){return ht({},r,i)},{})},CS=function(t,n){return n.filter(function(r){return typeof r[X.BASE]<"u"}).map(function(r){return r[X.BASE]}).reverse().reduce(function(r,i){if(!r.length)for(var a=Object.keys(i),o=0;o<a.length;o++){var s=a[o],l=s.toLowerCase();if(t.indexOf(l)!==-1&&i[l])return r.concat(i)}return r},[])},ca=function(t,n,r){var i={};return r.filter(function(a){return Array.isArray(a[t])?!0:(typeof a[t]<"u"&&ES("Helmet: "+t+' should be of type "Array". Instead found type "'+vS(a[t])+'"'),!1)}).map(function(a){return a[t]}).reverse().reduce(function(a,o){var s={};o.filter(function(p){for(var g=void 0,x=Object.keys(p),y=0;y<x.length;y++){var b=x[y],v=b.toLowerCase();n.indexOf(v)!==-1&&!(g===Se.REL&&p[g].toLowerCase()==="canonical")&&!(v===Se.REL&&p[v].toLowerCase()==="stylesheet")&&(g=v),n.indexOf(b)!==-1&&(b===Se.INNER_HTML||b===Se.CSS_TEXT||b===Se.ITEM_PROP)&&(g=b)}if(!g||!p[g])return!1;var h=p[g].toLowerCase();return i[g]||(i[g]={}),s[g]||(s[g]={}),i[g][h]?!1:(s[g][h]=!0,!0)}).reverse().forEach(function(p){return a.push(p)});for(var l=Object.keys(s),d=0;d<l.length;d++){var u=l[d],f=hS({},i[u],s[u]);i[u]=f}return a},[]).reverse()},ki=function(t,n){for(var r=t.length-1;r>=0;r--){var i=t[r];if(i.hasOwnProperty(n))return i[n]}return null},kS=function(t){return{baseTag:CS([Se.HREF,Se.TARGET],t),bodyAttributes:Ic(Or.BODY,t),defer:ki(t,ro.DEFER),encode:ki(t,ro.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:Ic(Or.HTML,t),linkTags:ca(X.LINK,[Se.REL,Se.HREF],t),metaTags:ca(X.META,[Se.NAME,Se.CHARSET,Se.HTTPEQUIV,Se.PROPERTY,Se.ITEM_PROP],t),noscriptTags:ca(X.NOSCRIPT,[Se.INNER_HTML],t),onChangeClientState:jS(t),scriptTags:ca(X.SCRIPT,[Se.SRC,Se.INNER_HTML],t),styleTags:ca(X.STYLE,[Se.CSS_TEXT],t),title:SS(t),titleAttributes:Ic(Or.TITLE,t)}},cu=function(){var e=Date.now();return function(t){var n=Date.now();n-e>16?(e=n,t(n)):setTimeout(function(){cu(t)},0)}}(),mm=function(t){return clearTimeout(t)},TS=typeof window<"u"?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||cu:global.requestAnimationFrame||cu,AS=typeof window<"u"?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||mm:global.cancelAnimationFrame||mm,ES=function(t){return console&&typeof console.warn=="function"&&console.warn(t)},da=null,PS=function(t){da&&AS(da),t.defer?da=TS(function(){gm(t,function(){da=null})}):(gm(t),da=null)},gm=function(t,n){var r=t.baseTag,i=t.bodyAttributes,a=t.htmlAttributes,o=t.linkTags,s=t.metaTags,l=t.noscriptTags,d=t.onChangeClientState,u=t.scriptTags,f=t.styleTags,p=t.title,g=t.titleAttributes;du(X.BODY,i),du(X.HTML,a),GS(p,g);var x={baseTag:Jr(X.BASE,r),linkTags:Jr(X.LINK,o),metaTags:Jr(X.META,s),noscriptTags:Jr(X.NOSCRIPT,l),scriptTags:Jr(X.SCRIPT,u),styleTags:Jr(X.STYLE,f)},y={},b={};Object.keys(x).forEach(function(v){var h=x[v],m=h.newTags,w=h.oldTags;m.length&&(y[v]=m),w.length&&(b[v]=x[v].oldTags)}),n&&n(),d(t,y,b)},ry=function(t){return Array.isArray(t)?t.join(""):t},GS=function(t,n){typeof t<"u"&&document.title!==t&&(document.title=ry(t)),du(X.TITLE,n)},du=function(t,n){var r=document.getElementsByTagName(t)[0];if(r){for(var i=r.getAttribute(qt),a=i?i.split(","):[],o=[].concat(a),s=Object.keys(n),l=0;l<s.length;l++){var d=s[l],u=n[d]||"";r.getAttribute(d)!==u&&r.setAttribute(d,u),a.indexOf(d)===-1&&a.push(d);var f=o.indexOf(d);f!==-1&&o.splice(f,1)}for(var p=o.length-1;p>=0;p--)r.removeAttribute(o[p]);a.length===o.length?r.removeAttribute(qt):r.getAttribute(qt)!==s.join(",")&&r.setAttribute(qt,s.join(","))}},Jr=function(t,n){var r=document.head||document.querySelector(X.HEAD),i=r.querySelectorAll(t+"["+qt+"]"),a=Array.prototype.slice.call(i),o=[],s=void 0;return n&&n.length&&n.forEach(function(l){var d=document.createElement(t);for(var u in l)if(l.hasOwnProperty(u))if(u===Se.INNER_HTML)d.innerHTML=l.innerHTML;else if(u===Se.CSS_TEXT)d.styleSheet?d.styleSheet.cssText=l.cssText:d.appendChild(document.createTextNode(l.cssText));else{var f=typeof l[u]>"u"?"":l[u];d.setAttribute(u,f)}d.setAttribute(qt,"true"),a.some(function(p,g){return s=g,d.isEqualNode(p)})?a.splice(s,1):o.push(d)}),a.forEach(function(l){return l.parentNode.removeChild(l)}),o.forEach(function(l){return r.appendChild(l)}),{oldTags:a,newTags:o}},iy=function(t){return Object.keys(t).reduce(function(n,r){var i=typeof t[r]<"u"?r+'="'+t[r]+'"':""+r;return n?n+" "+i:i},"")},zS=function(t,n,r,i){var a=iy(r),o=ry(n);return a?"<"+t+" "+qt+'="true" '+a+">"+lu(o,i)+"</"+t+">":"<"+t+" "+qt+'="true">'+lu(o,i)+"</"+t+">"},_S=function(t,n,r){return n.reduce(function(i,a){var o=Object.keys(a).filter(function(d){return!(d===Se.INNER_HTML||d===Se.CSS_TEXT)}).reduce(function(d,u){var f=typeof a[u]>"u"?u:u+'="'+lu(a[u],r)+'"';return d?d+" "+f:f},""),s=a.innerHTML||a.cssText||"",l=gS.indexOf(t)===-1;return i+"<"+t+" "+qt+'="true" '+o+(l?"/>":">"+s+"</"+t+">")},"")},ay=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Object.keys(t).reduce(function(r,i){return r[Xs[i]||i]=t[i],r},n)},MS=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Object.keys(t).reduce(function(r,i){return r[mS[i]||i]=t[i],r},n)},LS=function(t,n,r){var i,a=(i={key:n},i[qt]=!0,i),o=ay(r,a);return[J.createElement(X.TITLE,o,n)]},OS=function(t,n){return n.map(function(r,i){var a,o=(a={key:i},a[qt]=!0,a);return Object.keys(r).forEach(function(s){var l=Xs[s]||s;if(l===Se.INNER_HTML||l===Se.CSS_TEXT){var d=r.innerHTML||r.cssText;o.dangerouslySetInnerHTML={__html:d}}else o[l]=r[s]}),J.createElement(t,o)})},vn=function(t,n,r){switch(t){case X.TITLE:return{toComponent:function(){return LS(t,n.title,n.titleAttributes)},toString:function(){return zS(t,n.title,n.titleAttributes,r)}};case Or.BODY:case Or.HTML:return{toComponent:function(){return ay(n)},toString:function(){return iy(n)}};default:return{toComponent:function(){return OS(t,n)},toString:function(){return _S(t,n,r)}}}},oy=function(t){var n=t.baseTag,r=t.bodyAttributes,i=t.encode,a=t.htmlAttributes,o=t.linkTags,s=t.metaTags,l=t.noscriptTags,d=t.scriptTags,u=t.styleTags,f=t.title,p=f===void 0?"":f,g=t.titleAttributes;return{base:vn(X.BASE,n,i),bodyAttributes:vn(Or.BODY,r,i),htmlAttributes:vn(Or.HTML,a,i),link:vn(X.LINK,o,i),meta:vn(X.META,s,i),noscript:vn(X.NOSCRIPT,l,i),script:vn(X.SCRIPT,d,i),style:vn(X.STYLE,u,i),title:vn(X.TITLE,{title:p,titleAttributes:g},i)}},IS=function(t){var n,r;return r=n=function(i){wS(a,i);function a(){return xS(this,a),bS(this,i.apply(this,arguments))}return a.prototype.shouldComponentUpdate=function(s){return!lS(this.props,s)},a.prototype.mapNestedChildrenToProps=function(s,l){if(!l)return null;switch(s.type){case X.SCRIPT:case X.NOSCRIPT:return{innerHTML:l};case X.STYLE:return{cssText:l}}throw new Error("<"+s.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},a.prototype.flattenArrayTypeChildren=function(s){var l,d=s.child,u=s.arrayTypeChildren,f=s.newChildProps,p=s.nestedChildren;return ht({},u,(l={},l[d.type]=[].concat(u[d.type]||[],[ht({},f,this.mapNestedChildrenToProps(d,p))]),l))},a.prototype.mapObjectTypeChildren=function(s){var l,d,u=s.child,f=s.newProps,p=s.newChildProps,g=s.nestedChildren;switch(u.type){case X.TITLE:return ht({},f,(l={},l[u.type]=g,l.titleAttributes=ht({},p),l));case X.BODY:return ht({},f,{bodyAttributes:ht({},p)});case X.HTML:return ht({},f,{htmlAttributes:ht({},p)})}return ht({},f,(d={},d[u.type]=ht({},p),d))},a.prototype.mapArrayTypeChildrenToProps=function(s,l){var d=ht({},l);return Object.keys(s).forEach(function(u){var f;d=ht({},d,(f={},f[u]=s[u],f))}),d},a.prototype.warnOnInvalidChildren=function(s,l){return!0},a.prototype.mapChildrenToProps=function(s,l){var d=this,u={};return J.Children.forEach(s,function(f){if(!(!f||!f.props)){var p=f.props,g=p.children,x=hm(p,["children"]),y=MS(x);switch(d.warnOnInvalidChildren(f,g),f.type){case X.LINK:case X.META:case X.NOSCRIPT:case X.SCRIPT:case X.STYLE:u=d.flattenArrayTypeChildren({child:f,arrayTypeChildren:u,newChildProps:y,nestedChildren:g});break;default:l=d.mapObjectTypeChildren({child:f,newProps:l,newChildProps:y,nestedChildren:g});break}}}),l=this.mapArrayTypeChildrenToProps(u,l),l},a.prototype.render=function(){var s=this.props,l=s.children,d=hm(s,["children"]),u=ht({},d);return l&&(u=this.mapChildrenToProps(l,u)),J.createElement(t,u)},yS(a,null,[{key:"canUseDOM",set:function(s){t.canUseDOM=s}}]),a}(J.Component),n.propTypes={base:be.object,bodyAttributes:be.object,children:be.oneOfType([be.arrayOf(be.node),be.node]),defaultTitle:be.string,defer:be.bool,encodeSpecialCharacters:be.bool,htmlAttributes:be.object,link:be.arrayOf(be.object),meta:be.arrayOf(be.object),noscript:be.arrayOf(be.object),onChangeClientState:be.func,script:be.arrayOf(be.object),style:be.arrayOf(be.object),title:be.string,titleAttributes:be.object,titleTemplate:be.string},n.defaultProps={defer:!0,encodeSpecialCharacters:!0},n.peek=t.peek,n.rewind=function(){var i=t.rewind();return i||(i=oy({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),i},r},RS=function(){return null},DS=nS(kS,PS,oy)(RS),In=IS(DS);In.renderStatic=In.rewind;var ot=function(){return ot=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},ot.apply(this,arguments)};function Ri(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,a;r<i;r++)(a||!(r in t))&&(a||(a=Array.prototype.slice.call(t,0,r)),a[r]=t[r]);return e.concat(a||Array.prototype.slice.call(t))}var ve="-ms-",Ma="-moz-",de="-webkit-",sy="comm",Ml="rule",ip="decl",VS="@import",ly="@keyframes",NS="@layer",cy=Math.abs,ap=String.fromCharCode,uu=Object.assign;function FS(e,t){return qe(e,0)^45?(((t<<2^qe(e,0))<<2^qe(e,1))<<2^qe(e,2))<<2^qe(e,3):0}function dy(e){return e.trim()}function bn(e,t){return(e=t.exec(e))?e[0]:e}function ne(e,t,n){return e.replace(t,n)}function cs(e,t,n){return e.indexOf(t,n)}function qe(e,t){return e.charCodeAt(t)|0}function Di(e,t,n){return e.slice(t,n)}function on(e){return e.length}function uy(e){return e.length}function xa(e,t){return t.push(e),e}function $S(e,t){return e.map(t).join("")}function vm(e,t){return e.filter(function(n){return!bn(n,t)})}var Ll=1,Vi=1,fy=0,Vt=0,De=0,Yi="";function Ol(e,t,n,r,i,a,o,s){return{value:e,root:t,parent:n,type:r,props:i,children:a,line:Ll,column:Vi,length:o,return:"",siblings:s}}function Hn(e,t){return uu(Ol("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function ei(e){for(;e.root;)e=Hn(e.root,{children:[e]});xa(e,e.siblings)}function BS(){return De}function HS(){return De=Vt>0?qe(Yi,--Vt):0,Vi--,De===10&&(Vi=1,Ll--),De}function Xt(){return De=Vt<fy?qe(Yi,Vt++):0,Vi++,De===10&&(Vi=1,Ll++),De}function Ir(){return qe(Yi,Vt)}function ds(){return Vt}function Il(e,t){return Di(Yi,e,t)}function fu(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function US(e){return Ll=Vi=1,fy=on(Yi=e),Vt=0,[]}function WS(e){return Yi="",e}function Rc(e){return dy(Il(Vt-1,pu(e===91?e+2:e===40?e+1:e)))}function qS(e){for(;(De=Ir())&&De<33;)Xt();return fu(e)>2||fu(De)>3?"":" "}function YS(e,t){for(;--t&&Xt()&&!(De<48||De>102||De>57&&De<65||De>70&&De<97););return Il(e,ds()+(t<6&&Ir()==32&&Xt()==32))}function pu(e){for(;Xt();)switch(De){case e:return Vt;case 34:case 39:e!==34&&e!==39&&pu(De);break;case 40:e===41&&pu(e);break;case 92:Xt();break}return Vt}function KS(e,t){for(;Xt()&&e+De!==57;)if(e+De===84&&Ir()===47)break;return"/*"+Il(t,Vt-1)+"*"+ap(e===47?e:Xt())}function XS(e){for(;!fu(Ir());)Xt();return Il(e,Vt)}function QS(e){return WS(us("",null,null,null,[""],e=US(e),0,[0],e))}function us(e,t,n,r,i,a,o,s,l){for(var d=0,u=0,f=o,p=0,g=0,x=0,y=1,b=1,v=1,h=0,m="",w=i,S=a,C=r,A=m;b;)switch(x=h,h=Xt()){case 40:if(x!=108&&qe(A,f-1)==58){cs(A+=ne(Rc(h),"&","&\f"),"&\f",cy(d?s[d-1]:0))!=-1&&(v=-1);break}case 34:case 39:case 91:A+=Rc(h);break;case 9:case 10:case 13:case 32:A+=qS(x);break;case 92:A+=YS(ds()-1,7);continue;case 47:switch(Ir()){case 42:case 47:xa(ZS(KS(Xt(),ds()),t,n,l),l);break;default:A+="/"}break;case 123*y:s[d++]=on(A)*v;case 125*y:case 59:case 0:switch(h){case 0:case 125:b=0;case 59+u:v==-1&&(A=ne(A,/\f/g,"")),g>0&&on(A)-f&&xa(g>32?ym(A+";",r,n,f-1,l):ym(ne(A," ","")+";",r,n,f-2,l),l);break;case 59:A+=";";default:if(xa(C=xm(A,t,n,d,u,i,s,m,w=[],S=[],f,a),a),h===123)if(u===0)us(A,t,C,C,w,a,f,s,S);else switch(p===99&&qe(A,3)===110?100:p){case 100:case 108:case 109:case 115:us(e,C,C,r&&xa(xm(e,C,C,0,0,i,s,m,i,w=[],f,S),S),i,S,f,s,r?w:S);break;default:us(A,C,C,C,[""],S,0,s,S)}}d=u=g=0,y=v=1,m=A="",f=o;break;case 58:f=1+on(A),g=x;default:if(y<1){if(h==123)--y;else if(h==125&&y++==0&&HS()==125)continue}switch(A+=ap(h),h*y){case 38:v=u>0?1:(A+="\f",-1);break;case 44:s[d++]=(on(A)-1)*v,v=1;break;case 64:Ir()===45&&(A+=Rc(Xt())),p=Ir(),u=f=on(m=A+=XS(ds())),h++;break;case 45:x===45&&on(A)==2&&(y=0)}}return a}function xm(e,t,n,r,i,a,o,s,l,d,u,f){for(var p=i-1,g=i===0?a:[""],x=uy(g),y=0,b=0,v=0;y<r;++y)for(var h=0,m=Di(e,p+1,p=cy(b=o[y])),w=e;h<x;++h)(w=dy(b>0?g[h]+" "+m:ne(m,/&\f/g,g[h])))&&(l[v++]=w);return Ol(e,t,n,i===0?Ml:s,l,d,u,f)}function ZS(e,t,n,r){return Ol(e,t,n,sy,ap(BS()),Di(e,2,-2),0,r)}function ym(e,t,n,r,i){return Ol(e,t,n,ip,Di(e,0,r),Di(e,r+1,-1),r,i)}function py(e,t,n){switch(FS(e,t)){case 5103:return de+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return de+e+e;case 4789:return Ma+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return de+e+Ma+e+ve+e+e;case 5936:switch(qe(e,t+11)){case 114:return de+e+ve+ne(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return de+e+ve+ne(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return de+e+ve+ne(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return de+e+ve+e+e;case 6165:return de+e+ve+"flex-"+e+e;case 5187:return de+e+ne(e,/(\w+).+(:[^]+)/,de+"box-$1$2"+ve+"flex-$1$2")+e;case 5443:return de+e+ve+"flex-item-"+ne(e,/flex-|-self/g,"")+(bn(e,/flex-|baseline/)?"":ve+"grid-row-"+ne(e,/flex-|-self/g,""))+e;case 4675:return de+e+ve+"flex-line-pack"+ne(e,/align-content|flex-|-self/g,"")+e;case 5548:return de+e+ve+ne(e,"shrink","negative")+e;case 5292:return de+e+ve+ne(e,"basis","preferred-size")+e;case 6060:return de+"box-"+ne(e,"-grow","")+de+e+ve+ne(e,"grow","positive")+e;case 4554:return de+ne(e,/([^-])(transform)/g,"$1"+de+"$2")+e;case 6187:return ne(ne(ne(e,/(zoom-|grab)/,de+"$1"),/(image-set)/,de+"$1"),e,"")+e;case 5495:case 3959:return ne(e,/(image-set\([^]*)/,de+"$1$`$1");case 4968:return ne(ne(e,/(.+:)(flex-)?(.*)/,de+"box-pack:$3"+ve+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+de+e+e;case 4200:if(!bn(e,/flex-|baseline/))return ve+"grid-column-align"+Di(e,t)+e;break;case 2592:case 3360:return ve+ne(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,bn(r.props,/grid-\w+-end/)})?~cs(e+(n=n[t].value),"span",0)?e:ve+ne(e,"-start","")+e+ve+"grid-row-span:"+(~cs(n,"span",0)?bn(n,/\d+/):+bn(n,/\d+/)-+bn(e,/\d+/))+";":ve+ne(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return bn(r.props,/grid-\w+-start/)})?e:ve+ne(ne(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return ne(e,/(.+)-inline(.+)/,de+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(on(e)-1-t>6)switch(qe(e,t+1)){case 109:if(qe(e,t+4)!==45)break;case 102:return ne(e,/(.+:)(.+)-([^]+)/,"$1"+de+"$2-$3$1"+Ma+(qe(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~cs(e,"stretch",0)?py(ne(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return ne(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,a,o,s,l,d){return ve+i+":"+a+d+(o?ve+i+"-span:"+(s?l:+l-+a)+d:"")+e});case 4949:if(qe(e,t+6)===121)return ne(e,":",":"+de)+e;break;case 6444:switch(qe(e,qe(e,14)===45?18:11)){case 120:return ne(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+de+(qe(e,14)===45?"inline-":"")+"box$3$1"+de+"$2$3$1"+ve+"$2box$3")+e;case 100:return ne(e,":",":"+ve)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ne(e,"scroll-","scroll-snap-")+e}return e}function Qs(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function JS(e,t,n,r){switch(e.type){case NS:if(e.children.length)break;case VS:case ip:return e.return=e.return||e.value;case sy:return"";case ly:return e.return=e.value+"{"+Qs(e.children,r)+"}";case Ml:if(!on(e.value=e.props.join(",")))return""}return on(n=Qs(e.children,r))?e.return=e.value+"{"+n+"}":""}function e7(e){var t=uy(e);return function(n,r,i,a){for(var o="",s=0;s<t;s++)o+=e[s](n,r,i,a)||"";return o}}function t7(e){return function(t){t.root||(t=t.return)&&e(t)}}function n7(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case ip:e.return=py(e.value,e.length,n);return;case ly:return Qs([Hn(e,{value:ne(e.value,"@","@"+de)})],r);case Ml:if(e.length)return $S(n=e.props,function(i){switch(bn(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":ei(Hn(e,{props:[ne(i,/:(read-\w+)/,":"+Ma+"$1")]})),ei(Hn(e,{props:[i]})),uu(e,{props:vm(n,r)});break;case"::placeholder":ei(Hn(e,{props:[ne(i,/:(plac\w+)/,":"+de+"input-$1")]})),ei(Hn(e,{props:[ne(i,/:(plac\w+)/,":"+Ma+"$1")]})),ei(Hn(e,{props:[ne(i,/:(plac\w+)/,ve+"input-$1")]})),ei(Hn(e,{props:[i]})),uu(e,{props:vm(n,r)});break}return""})}}var r7={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},bt={},Ni=typeof process<"u"&&bt!==void 0&&(bt.REACT_APP_SC_ATTR||bt.SC_ATTR)||"data-styled",hy="active",my="data-styled-version",Rl="6.1.13",op=`/*!sc*/
`,Zs=typeof window<"u"&&"HTMLElement"in window,i7=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&bt!==void 0&&bt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&bt.REACT_APP_SC_DISABLE_SPEEDY!==""?bt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&bt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&bt!==void 0&&bt.SC_DISABLE_SPEEDY!==void 0&&bt.SC_DISABLE_SPEEDY!==""&&bt.SC_DISABLE_SPEEDY!=="false"&&bt.SC_DISABLE_SPEEDY),a7={},Dl=Object.freeze([]),Fi=Object.freeze({});function gy(e,t,n){return n===void 0&&(n=Fi),e.theme!==n.theme&&e.theme||t||n.theme}var vy=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),o7=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,s7=/(^-|-$)/g;function wm(e){return e.replace(o7,"-").replace(s7,"")}var l7=/(a)(d)/gi,No=52,bm=function(e){return String.fromCharCode(e+(e>25?39:97))};function hu(e){var t,n="";for(t=Math.abs(e);t>No;t=t/No|0)n=bm(t%No)+n;return(bm(t%No)+n).replace(l7,"$1-$2")}var Dc,xy=5381,xi=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},yy=function(e){return xi(xy,e)};function sp(e){return hu(yy(e)>>>0)}function c7(e){return e.displayName||e.name||"Component"}function Vc(e){return typeof e=="string"&&!0}var wy=typeof Symbol=="function"&&Symbol.for,by=wy?Symbol.for("react.memo"):60115,d7=wy?Symbol.for("react.forward_ref"):60112,u7={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},f7={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Sy={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},p7=((Dc={})[d7]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Dc[by]=Sy,Dc);function Sm(e){return("type"in(t=e)&&t.type.$$typeof)===by?Sy:"$$typeof"in e?p7[e.$$typeof]:u7;var t}var h7=Object.defineProperty,m7=Object.getOwnPropertyNames,jm=Object.getOwnPropertySymbols,g7=Object.getOwnPropertyDescriptor,v7=Object.getPrototypeOf,Cm=Object.prototype;function jy(e,t,n){if(typeof t!="string"){if(Cm){var r=v7(t);r&&r!==Cm&&jy(e,r,n)}var i=m7(t);jm&&(i=i.concat(jm(t)));for(var a=Sm(e),o=Sm(t),s=0;s<i.length;++s){var l=i[s];if(!(l in f7||n&&n[l]||o&&l in o||a&&l in a)){var d=g7(t,l);try{h7(e,l,d)}catch{}}}}return e}function $i(e){return typeof e=="function"}function lp(e){return typeof e=="object"&&"styledComponentId"in e}function zr(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Js(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function io(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function mu(e,t,n){if(n===void 0&&(n=!1),!n&&!io(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=mu(e[r],t[r]);else if(io(t))for(var r in t)e[r]=mu(e[r],t[r]);return e}function cp(e,t){Object.defineProperty(e,"toString",{value:t})}function go(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var x7=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,a=i;t>=a;)if((a<<=1)<0)throw go(16,"".concat(t));this.groupSizes=new Uint32Array(a),this.groupSizes.set(r),this.length=a;for(var o=i;o<a;o++)this.groupSizes[o]=0}for(var s=this.indexOfGroup(t+1),l=(o=0,n.length);o<l;o++)this.tag.insertRule(s,n[o])&&(this.groupSizes[t]++,s++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var a=r;a<i;a++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),a=i+r,o=i;o<a;o++)n+="".concat(this.tag.getRule(o)).concat(op);return n},e}(),fs=new Map,el=new Map,ps=1,Fo=function(e){if(fs.has(e))return fs.get(e);for(;el.has(ps);)ps++;var t=ps++;return fs.set(e,t),el.set(t,e),t},y7=function(e,t){ps=t+1,fs.set(e,t),el.set(t,e)},w7="style[".concat(Ni,"][").concat(my,'="').concat(Rl,'"]'),b7=new RegExp("^".concat(Ni,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),S7=function(e,t,n){for(var r,i=n.split(","),a=0,o=i.length;a<o;a++)(r=i[a])&&e.registerName(t,r)},j7=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(op),i=[],a=0,o=r.length;a<o;a++){var s=r[a].trim();if(s){var l=s.match(b7);if(l){var d=0|parseInt(l[1],10),u=l[2];d!==0&&(y7(u,d),S7(e,u,l[3]),e.getTag().insertRules(d,i)),i.length=0}else i.push(s)}}},km=function(e){for(var t=document.querySelectorAll(w7),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(Ni)!==hy&&(j7(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function C7(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Cy=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(s){var l=Array.from(s.querySelectorAll("style[".concat(Ni,"]")));return l[l.length-1]}(n),a=i!==void 0?i.nextSibling:null;r.setAttribute(Ni,hy),r.setAttribute(my,Rl);var o=C7();return o&&r.setAttribute("nonce",o),n.insertBefore(r,a),r},k7=function(){function e(t){this.element=Cy(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,a=r.length;i<a;i++){var o=r[i];if(o.ownerNode===n)return o}throw go(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),T7=function(){function e(t){this.element=Cy(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),A7=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Tm=Zs,E7={isServer:!Zs,useCSSOMInjection:!i7},tl=function(){function e(t,n,r){t===void 0&&(t=Fi),n===void 0&&(n={});var i=this;this.options=ot(ot({},E7),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Zs&&Tm&&(Tm=!1,km(this)),cp(this,function(){return function(a){for(var o=a.getTag(),s=o.length,l="",d=function(f){var p=function(v){return el.get(v)}(f);if(p===void 0)return"continue";var g=a.names.get(p),x=o.getGroup(f);if(g===void 0||!g.size||x.length===0)return"continue";var y="".concat(Ni,".g").concat(f,'[id="').concat(p,'"]'),b="";g!==void 0&&g.forEach(function(v){v.length>0&&(b+="".concat(v,","))}),l+="".concat(x).concat(y,'{content:"').concat(b,'"}').concat(op)},u=0;u<s;u++)d(u);return l}(i)})}return e.registerId=function(t){return Fo(t)},e.prototype.rehydrate=function(){!this.server&&Zs&&km(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(ot(ot({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new A7(i):r?new k7(i):new T7(i)}(this.options),new x7(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Fo(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Fo(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Fo(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),P7=/&/g,G7=/^\s*\/\/.*$/gm;function ky(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=ky(n.children,t)),n})}function z7(e){var t,n,r,i=Fi,a=i.options,o=a===void 0?Fi:a,s=i.plugins,l=s===void 0?Dl:s,d=function(p,g,x){return x.startsWith(n)&&x.endsWith(n)&&x.replaceAll(n,"").length>0?".".concat(t):p},u=l.slice();u.push(function(p){p.type===Ml&&p.value.includes("&")&&(p.props[0]=p.props[0].replace(P7,n).replace(r,d))}),o.prefix&&u.push(n7),u.push(JS);var f=function(p,g,x,y){g===void 0&&(g=""),x===void 0&&(x=""),y===void 0&&(y="&"),t=y,n=g,r=new RegExp("\\".concat(n,"\\b"),"g");var b=p.replace(G7,""),v=QS(x||g?"".concat(x," ").concat(g," { ").concat(b," }"):b);o.namespace&&(v=ky(v,o.namespace));var h=[];return Qs(v,e7(u.concat(t7(function(m){return h.push(m)})))),h};return f.hash=l.length?l.reduce(function(p,g){return g.name||go(15),xi(p,g.name)},xy).toString():"",f}var _7=new tl,gu=z7(),Ty=J.createContext({shouldForwardProp:void 0,styleSheet:_7,stylis:gu});Ty.Consumer;J.createContext(void 0);function vu(){return j.useContext(Ty)}var Ay=function(){function e(t,n){var r=this;this.inject=function(i,a){a===void 0&&(a=gu);var o=r.name+a.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,a(r.rules,o,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,cp(this,function(){throw go(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=gu),this.name+t.hash},e}(),M7=function(e){return e>="A"&&e<="Z"};function Am(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;M7(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Ey=function(e){return e==null||e===!1||e===""},Py=function(e){var t,n,r=[];for(var i in e){var a=e[i];e.hasOwnProperty(i)&&!Ey(a)&&(Array.isArray(a)&&a.isCss||$i(a)?r.push("".concat(Am(i),":"),a,";"):io(a)?r.push.apply(r,Ri(Ri(["".concat(i," {")],Py(a),!1),["}"],!1)):r.push("".concat(Am(i),": ").concat((t=i,(n=a)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in r7||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function lr(e,t,n,r){if(Ey(e))return[];if(lp(e))return[".".concat(e.styledComponentId)];if($i(e)){if(!$i(a=e)||a.prototype&&a.prototype.isReactComponent||!t)return[e];var i=e(t);return lr(i,t,n,r)}var a;return e instanceof Ay?n?(e.inject(n,r),[e.getName(r)]):[e]:io(e)?Py(e):Array.isArray(e)?Array.prototype.concat.apply(Dl,e.map(function(o){return lr(o,t,n,r)})):[e.toString()]}function Gy(e){for(var t=0;t<e.length;t+=1){var n=e[t];if($i(n)&&!lp(n))return!1}return!0}var L7=yy(Rl),O7=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Gy(t),this.componentId=n,this.baseHash=xi(L7,n),this.baseStyle=r,tl.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=zr(i,this.staticRulesId);else{var a=Js(lr(this.rules,t,n,r)),o=hu(xi(this.baseHash,a)>>>0);if(!n.hasNameForId(this.componentId,o)){var s=r(a,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,s)}i=zr(i,o),this.staticRulesId=o}else{for(var l=xi(this.baseHash,r.hash),d="",u=0;u<this.rules.length;u++){var f=this.rules[u];if(typeof f=="string")d+=f;else if(f){var p=Js(lr(f,t,n,r));l=xi(l,p+u),d+=p}}if(d){var g=hu(l>>>0);n.hasNameForId(this.componentId,g)||n.insertRules(this.componentId,g,r(d,".".concat(g),void 0,this.componentId)),i=zr(i,g)}}return i},e}(),dp=J.createContext(void 0);dp.Consumer;var Nc={};function I7(e,t,n){var r=lp(e),i=e,a=!Vc(e),o=t.attrs,s=o===void 0?Dl:o,l=t.componentId,d=l===void 0?function(w,S){var C=typeof w!="string"?"sc":wm(w);Nc[C]=(Nc[C]||0)+1;var A="".concat(C,"-").concat(sp(Rl+C+Nc[C]));return S?"".concat(S,"-").concat(A):A}(t.displayName,t.parentComponentId):l,u=t.displayName,f=u===void 0?function(w){return Vc(w)?"styled.".concat(w):"Styled(".concat(c7(w),")")}(e):u,p=t.displayName&&t.componentId?"".concat(wm(t.displayName),"-").concat(t.componentId):t.componentId||d,g=r&&i.attrs?i.attrs.concat(s).filter(Boolean):s,x=t.shouldForwardProp;if(r&&i.shouldForwardProp){var y=i.shouldForwardProp;if(t.shouldForwardProp){var b=t.shouldForwardProp;x=function(w,S){return y(w,S)&&b(w,S)}}else x=y}var v=new O7(n,p,r?i.componentStyle:void 0);function h(w,S){return function(C,A,T){var z=C.attrs,E=C.componentStyle,P=C.defaultProps,_=C.foldedComponentIds,I=C.styledComponentId,R=C.target,U=J.useContext(dp),Q=vu(),Y=C.shouldForwardProp||Q.shouldForwardProp,M=gy(A,U,P)||Fi,V=function(ke,fe,ce){for(var G,L=ot(ot({},fe),{className:void 0,theme:ce}),D=0;D<ke.length;D+=1){var O=$i(G=ke[D])?G(L):G;for(var q in O)L[q]=q==="className"?zr(L[q],O[q]):q==="style"?ot(ot({},L[q]),O[q]):O[q]}return fe.className&&(L.className=zr(L.className,fe.className)),L}(z,A,M),$=V.as||R,K={};for(var Z in V)V[Z]===void 0||Z[0]==="$"||Z==="as"||Z==="theme"&&V.theme===M||(Z==="forwardedAs"?K.as=V.forwardedAs:Y&&!Y(Z,$)||(K[Z]=V[Z]));var we=function(ke,fe){var ce=vu(),G=ke.generateAndInjectStyles(fe,ce.styleSheet,ce.stylis);return G}(E,V),he=zr(_,I);return we&&(he+=" "+we),V.className&&(he+=" "+V.className),K[Vc($)&&!vy.has($)?"class":"className"]=he,K.ref=T,j.createElement($,K)}(m,w,S)}h.displayName=f;var m=J.forwardRef(h);return m.attrs=g,m.componentStyle=v,m.displayName=f,m.shouldForwardProp=x,m.foldedComponentIds=r?zr(i.foldedComponentIds,i.styledComponentId):"",m.styledComponentId=p,m.target=r?i.target:e,Object.defineProperty(m,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(w){this._foldedDefaultProps=r?function(S){for(var C=[],A=1;A<arguments.length;A++)C[A-1]=arguments[A];for(var T=0,z=C;T<z.length;T++)mu(S,z[T],!0);return S}({},i.defaultProps,w):w}}),cp(m,function(){return".".concat(m.styledComponentId)}),a&&jy(m,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),m}function Em(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var Pm=function(e){return Object.assign(e,{isCss:!0})};function up(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if($i(e)||io(e))return Pm(lr(Em(Dl,Ri([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?lr(r):Pm(lr(Em(r,t)))}function xu(e,t,n){if(n===void 0&&(n=Fi),!t)throw go(1,t);var r=function(i){for(var a=[],o=1;o<arguments.length;o++)a[o-1]=arguments[o];return e(t,n,up.apply(void 0,Ri([i],a,!1)))};return r.attrs=function(i){return xu(e,t,ot(ot({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return xu(e,t,ot(ot({},n),i))},r}var zy=function(e){return xu(I7,e)},k=zy;vy.forEach(function(e){k[e]=zy(e)});var R7=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=Gy(t),tl.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var a=i(Js(lr(this.rules,n,r,i)),""),o=this.componentId+t;r.insertRules(o,o,a)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&tl.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,i)},e}();function Ki(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=up.apply(void 0,Ri([e],t,!1)),i="sc-global-".concat(sp(JSON.stringify(r))),a=new R7(r,i),o=function(l){var d=vu(),u=J.useContext(dp),f=J.useRef(d.styleSheet.allocateGSInstance(i)).current;return d.styleSheet.server&&s(f,l,d.styleSheet,u,d.stylis),J.useLayoutEffect(function(){if(!d.styleSheet.server)return s(f,l,d.styleSheet,u,d.stylis),function(){return a.removeStyles(f,d.styleSheet)}},[f,l,d.styleSheet,u,d.stylis]),null};function s(l,d,u,f,p){if(a.isStatic)a.renderStyles(l,a7,u,p);else{var g=ot(ot({},d),{theme:gy(d,f,o.defaultProps)});a.renderStyles(l,g,u,p)}}return J.memo(o)}function Dn(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Js(up.apply(void 0,Ri([e],t,!1))),i=sp(r);return new Ay(i,r)}function Gm(e){return e!==null&&typeof e=="object"&&"constructor"in e&&e.constructor===Object}function fp(e,t){e===void 0&&(e={}),t===void 0&&(t={}),Object.keys(t).forEach(n=>{typeof e[n]>"u"?e[n]=t[n]:Gm(t[n])&&Gm(e[n])&&Object.keys(t[n]).length>0&&fp(e[n],t[n])})}const _y={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function zn(){const e=typeof document<"u"?document:{};return fp(e,_y),e}const D7={document:_y,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(e){return typeof setTimeout>"u"?(e(),null):setTimeout(e,0)},cancelAnimationFrame(e){typeof setTimeout>"u"||clearTimeout(e)}};function Gt(){const e=typeof window<"u"?window:{};return fp(e,D7),e}function V7(e){return e===void 0&&(e=""),e.trim().split(" ").filter(t=>!!t.trim())}function N7(e){const t=e;Object.keys(t).forEach(n=>{try{t[n]=null}catch{}try{delete t[n]}catch{}})}function yu(e,t){return t===void 0&&(t=0),setTimeout(e,t)}function nl(){return Date.now()}function F7(e){const t=Gt();let n;return t.getComputedStyle&&(n=t.getComputedStyle(e,null)),!n&&e.currentStyle&&(n=e.currentStyle),n||(n=e.style),n}function $7(e,t){t===void 0&&(t="x");const n=Gt();let r,i,a;const o=F7(e);return n.WebKitCSSMatrix?(i=o.transform||o.webkitTransform,i.split(",").length>6&&(i=i.split(", ").map(s=>s.replace(",",".")).join(", ")),a=new n.WebKitCSSMatrix(i==="none"?"":i)):(a=o.MozTransform||o.OTransform||o.MsTransform||o.msTransform||o.transform||o.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),r=a.toString().split(",")),t==="x"&&(n.WebKitCSSMatrix?i=a.m41:r.length===16?i=parseFloat(r[12]):i=parseFloat(r[4])),t==="y"&&(n.WebKitCSSMatrix?i=a.m42:r.length===16?i=parseFloat(r[13]):i=parseFloat(r[5])),i||0}function $o(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"}function B7(e){return typeof window<"u"&&typeof window.HTMLElement<"u"?e instanceof HTMLElement:e&&(e.nodeType===1||e.nodeType===11)}function jt(){const e=Object(arguments.length<=0?void 0:arguments[0]),t=["__proto__","constructor","prototype"];for(let n=1;n<arguments.length;n+=1){const r=n<0||arguments.length<=n?void 0:arguments[n];if(r!=null&&!B7(r)){const i=Object.keys(Object(r)).filter(a=>t.indexOf(a)<0);for(let a=0,o=i.length;a<o;a+=1){const s=i[a],l=Object.getOwnPropertyDescriptor(r,s);l!==void 0&&l.enumerable&&($o(e[s])&&$o(r[s])?r[s].__swiper__?e[s]=r[s]:jt(e[s],r[s]):!$o(e[s])&&$o(r[s])?(e[s]={},r[s].__swiper__?e[s]=r[s]:jt(e[s],r[s])):e[s]=r[s])}}}return e}function Bo(e,t,n){e.style.setProperty(t,n)}function My(e){let{swiper:t,targetPosition:n,side:r}=e;const i=Gt(),a=-t.translate;let o=null,s;const l=t.params.speed;t.wrapperEl.style.scrollSnapType="none",i.cancelAnimationFrame(t.cssModeFrameID);const d=n>a?"next":"prev",u=(p,g)=>d==="next"&&p>=g||d==="prev"&&p<=g,f=()=>{s=new Date().getTime(),o===null&&(o=s);const p=Math.max(Math.min((s-o)/l,1),0),g=.5-Math.cos(p*Math.PI)/2;let x=a+g*(n-a);if(u(x,n)&&(x=n),t.wrapperEl.scrollTo({[r]:x}),u(x,n)){t.wrapperEl.style.overflow="hidden",t.wrapperEl.style.scrollSnapType="",setTimeout(()=>{t.wrapperEl.style.overflow="",t.wrapperEl.scrollTo({[r]:x})}),i.cancelAnimationFrame(t.cssModeFrameID);return}t.cssModeFrameID=i.requestAnimationFrame(f)};f()}function pp(e){return e.querySelector(".swiper-slide-transform")||e.shadowRoot&&e.shadowRoot.querySelector(".swiper-slide-transform")||e}function cn(e,t){t===void 0&&(t="");const n=[...e.children];return e instanceof HTMLSlotElement&&n.push(...e.assignedElements()),t?n.filter(r=>r.matches(t)):n}function H7(e,t){const n=t.contains(e);return!n&&t instanceof HTMLSlotElement?[...t.assignedElements()].includes(e):n}function rl(e){try{console.warn(e);return}catch{}}function ao(e,t){t===void 0&&(t=[]);const n=document.createElement(e);return n.classList.add(...Array.isArray(t)?t:V7(t)),n}function U7(e,t){const n=[];for(;e.previousElementSibling;){const r=e.previousElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function W7(e,t){const n=[];for(;e.nextElementSibling;){const r=e.nextElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function Zn(e,t){return Gt().getComputedStyle(e,null).getPropertyValue(t)}function il(e){let t=e,n;if(t){for(n=0;(t=t.previousSibling)!==null;)t.nodeType===1&&(n+=1);return n}}function Ly(e,t){const n=[];let r=e.parentElement;for(;r;)t?r.matches(t)&&n.push(r):n.push(r),r=r.parentElement;return n}function wu(e,t,n){const r=Gt();return e[t==="width"?"offsetWidth":"offsetHeight"]+parseFloat(r.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-right":"margin-top"))+parseFloat(r.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-left":"margin-bottom"))}function Ue(e){return(Array.isArray(e)?e:[e]).filter(t=>!!t)}function q7(e){return t=>Math.abs(t)>0&&e.browser&&e.browser.need3dFix&&Math.abs(t)%90===0?t+.001:t}let Fc;function Y7(){const e=Gt(),t=zn();return{smoothScroll:t.documentElement&&t.documentElement.style&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch)}}function Oy(){return Fc||(Fc=Y7()),Fc}let $c;function K7(e){let{userAgent:t}=e===void 0?{}:e;const n=Oy(),r=Gt(),i=r.navigator.platform,a=t||r.navigator.userAgent,o={ios:!1,android:!1},s=r.screen.width,l=r.screen.height,d=a.match(/(Android);?[\s\/]+([\d.]+)?/);let u=a.match(/(iPad).*OS\s([\d_]+)/);const f=a.match(/(iPod)(.*OS\s([\d_]+))?/),p=!u&&a.match(/(iPhone\sOS|iOS)\s([\d_]+)/),g=i==="Win32";let x=i==="MacIntel";const y=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!u&&x&&n.touch&&y.indexOf(`${s}x${l}`)>=0&&(u=a.match(/(Version)\/([\d.]+)/),u||(u=[0,1,"13_0_0"]),x=!1),d&&!g&&(o.os="android",o.android=!0),(u||p||f)&&(o.os="ios",o.ios=!0),o}function Iy(e){return e===void 0&&(e={}),$c||($c=K7(e)),$c}let Bc;function X7(){const e=Gt(),t=Iy();let n=!1;function r(){const s=e.navigator.userAgent.toLowerCase();return s.indexOf("safari")>=0&&s.indexOf("chrome")<0&&s.indexOf("android")<0}if(r()){const s=String(e.navigator.userAgent);if(s.includes("Version/")){const[l,d]=s.split("Version/")[1].split(" ")[0].split(".").map(u=>Number(u));n=l<16||l===16&&d<2}}const i=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),a=r(),o=a||i&&t.ios;return{isSafari:n||a,needPerspectiveFix:n,need3dFix:o,isWebView:i}}function Q7(){return Bc||(Bc=X7()),Bc}function Z7(e){let{swiper:t,on:n,emit:r}=e;const i=Gt();let a=null,o=null;const s=()=>{!t||t.destroyed||!t.initialized||(r("beforeResize"),r("resize"))},l=()=>{!t||t.destroyed||!t.initialized||(a=new ResizeObserver(f=>{o=i.requestAnimationFrame(()=>{const{width:p,height:g}=t;let x=p,y=g;f.forEach(b=>{let{contentBoxSize:v,contentRect:h,target:m}=b;m&&m!==t.el||(x=h?h.width:(v[0]||v).inlineSize,y=h?h.height:(v[0]||v).blockSize)}),(x!==p||y!==g)&&s()})}),a.observe(t.el))},d=()=>{o&&i.cancelAnimationFrame(o),a&&a.unobserve&&t.el&&(a.unobserve(t.el),a=null)},u=()=>{!t||t.destroyed||!t.initialized||r("orientationchange")};n("init",()=>{if(t.params.resizeObserver&&typeof i.ResizeObserver<"u"){l();return}i.addEventListener("resize",s),i.addEventListener("orientationchange",u)}),n("destroy",()=>{d(),i.removeEventListener("resize",s),i.removeEventListener("orientationchange",u)})}function J7(e){let{swiper:t,extendParams:n,on:r,emit:i}=e;const a=[],o=Gt(),s=function(u,f){f===void 0&&(f={});const p=o.MutationObserver||o.WebkitMutationObserver,g=new p(x=>{if(t.__preventObserver__)return;if(x.length===1){i("observerUpdate",x[0]);return}const y=function(){i("observerUpdate",x[0])};o.requestAnimationFrame?o.requestAnimationFrame(y):o.setTimeout(y,0)});g.observe(u,{attributes:typeof f.attributes>"u"?!0:f.attributes,childList:t.isElement||(typeof f.childList>"u"?!0:f).childList,characterData:typeof f.characterData>"u"?!0:f.characterData}),a.push(g)},l=()=>{if(t.params.observer){if(t.params.observeParents){const u=Ly(t.hostEl);for(let f=0;f<u.length;f+=1)s(u[f])}s(t.hostEl,{childList:t.params.observeSlideChildren}),s(t.wrapperEl,{attributes:!1})}},d=()=>{a.forEach(u=>{u.disconnect()}),a.splice(0,a.length)};n({observer:!1,observeParents:!1,observeSlideChildren:!1}),r("init",l),r("destroy",d)}var ej={on(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof t!="function")return r;const i=n?"unshift":"push";return e.split(" ").forEach(a=>{r.eventsListeners[a]||(r.eventsListeners[a]=[]),r.eventsListeners[a][i](t)}),r},once(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof t!="function")return r;function i(){r.off(e,i),i.__emitterProxy&&delete i.__emitterProxy;for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];t.apply(r,o)}return i.__emitterProxy=t,r.on(e,i,n)},onAny(e,t){const n=this;if(!n.eventsListeners||n.destroyed||typeof e!="function")return n;const r=t?"unshift":"push";return n.eventsAnyListeners.indexOf(e)<0&&n.eventsAnyListeners[r](e),n},offAny(e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsAnyListeners)return t;const n=t.eventsAnyListeners.indexOf(e);return n>=0&&t.eventsAnyListeners.splice(n,1),t},off(e,t){const n=this;return!n.eventsListeners||n.destroyed||!n.eventsListeners||e.split(" ").forEach(r=>{typeof t>"u"?n.eventsListeners[r]=[]:n.eventsListeners[r]&&n.eventsListeners[r].forEach((i,a)=>{(i===t||i.__emitterProxy&&i.__emitterProxy===t)&&n.eventsListeners[r].splice(a,1)})}),n},emit(){const e=this;if(!e.eventsListeners||e.destroyed||!e.eventsListeners)return e;let t,n,r;for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return typeof a[0]=="string"||Array.isArray(a[0])?(t=a[0],n=a.slice(1,a.length),r=e):(t=a[0].events,n=a[0].data,r=a[0].context||e),n.unshift(r),(Array.isArray(t)?t:t.split(" ")).forEach(l=>{e.eventsAnyListeners&&e.eventsAnyListeners.length&&e.eventsAnyListeners.forEach(d=>{d.apply(r,[l,...n])}),e.eventsListeners&&e.eventsListeners[l]&&e.eventsListeners[l].forEach(d=>{d.apply(r,n)})}),e}};function tj(){const e=this;let t,n;const r=e.el;typeof e.params.width<"u"&&e.params.width!==null?t=e.params.width:t=r.clientWidth,typeof e.params.height<"u"&&e.params.height!==null?n=e.params.height:n=r.clientHeight,!(t===0&&e.isHorizontal()||n===0&&e.isVertical())&&(t=t-parseInt(Zn(r,"padding-left")||0,10)-parseInt(Zn(r,"padding-right")||0,10),n=n-parseInt(Zn(r,"padding-top")||0,10)-parseInt(Zn(r,"padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(n)&&(n=0),Object.assign(e,{width:t,height:n,size:e.isHorizontal()?t:n}))}function nj(){const e=this;function t(E,P){return parseFloat(E.getPropertyValue(e.getDirectionLabel(P))||0)}const n=e.params,{wrapperEl:r,slidesEl:i,size:a,rtlTranslate:o,wrongRTL:s}=e,l=e.virtual&&n.virtual.enabled,d=l?e.virtual.slides.length:e.slides.length,u=cn(i,`.${e.params.slideClass}, swiper-slide`),f=l?e.virtual.slides.length:u.length;let p=[];const g=[],x=[];let y=n.slidesOffsetBefore;typeof y=="function"&&(y=n.slidesOffsetBefore.call(e));let b=n.slidesOffsetAfter;typeof b=="function"&&(b=n.slidesOffsetAfter.call(e));const v=e.snapGrid.length,h=e.slidesGrid.length;let m=n.spaceBetween,w=-y,S=0,C=0;if(typeof a>"u")return;typeof m=="string"&&m.indexOf("%")>=0?m=parseFloat(m.replace("%",""))/100*a:typeof m=="string"&&(m=parseFloat(m)),e.virtualSize=-m,u.forEach(E=>{o?E.style.marginLeft="":E.style.marginRight="",E.style.marginBottom="",E.style.marginTop=""}),n.centeredSlides&&n.cssMode&&(Bo(r,"--swiper-centered-offset-before",""),Bo(r,"--swiper-centered-offset-after",""));const A=n.grid&&n.grid.rows>1&&e.grid;A?e.grid.initSlides(u):e.grid&&e.grid.unsetSlides();let T;const z=n.slidesPerView==="auto"&&n.breakpoints&&Object.keys(n.breakpoints).filter(E=>typeof n.breakpoints[E].slidesPerView<"u").length>0;for(let E=0;E<f;E+=1){T=0;let P;if(u[E]&&(P=u[E]),A&&e.grid.updateSlide(E,P,u),!(u[E]&&Zn(P,"display")==="none")){if(n.slidesPerView==="auto"){z&&(u[E].style[e.getDirectionLabel("width")]="");const _=getComputedStyle(P),I=P.style.transform,R=P.style.webkitTransform;if(I&&(P.style.transform="none"),R&&(P.style.webkitTransform="none"),n.roundLengths)T=e.isHorizontal()?wu(P,"width"):wu(P,"height");else{const U=t(_,"width"),Q=t(_,"padding-left"),Y=t(_,"padding-right"),M=t(_,"margin-left"),V=t(_,"margin-right"),$=_.getPropertyValue("box-sizing");if($&&$==="border-box")T=U+M+V;else{const{clientWidth:K,offsetWidth:Z}=P;T=U+Q+Y+M+V+(Z-K)}}I&&(P.style.transform=I),R&&(P.style.webkitTransform=R),n.roundLengths&&(T=Math.floor(T))}else T=(a-(n.slidesPerView-1)*m)/n.slidesPerView,n.roundLengths&&(T=Math.floor(T)),u[E]&&(u[E].style[e.getDirectionLabel("width")]=`${T}px`);u[E]&&(u[E].swiperSlideSize=T),x.push(T),n.centeredSlides?(w=w+T/2+S/2+m,S===0&&E!==0&&(w=w-a/2-m),E===0&&(w=w-a/2-m),Math.abs(w)<1/1e3&&(w=0),n.roundLengths&&(w=Math.floor(w)),C%n.slidesPerGroup===0&&p.push(w),g.push(w)):(n.roundLengths&&(w=Math.floor(w)),(C-Math.min(e.params.slidesPerGroupSkip,C))%e.params.slidesPerGroup===0&&p.push(w),g.push(w),w=w+T+m),e.virtualSize+=T+m,S=T,C+=1}}if(e.virtualSize=Math.max(e.virtualSize,a)+b,o&&s&&(n.effect==="slide"||n.effect==="coverflow")&&(r.style.width=`${e.virtualSize+m}px`),n.setWrapperSize&&(r.style[e.getDirectionLabel("width")]=`${e.virtualSize+m}px`),A&&e.grid.updateWrapperSize(T,p),!n.centeredSlides){const E=[];for(let P=0;P<p.length;P+=1){let _=p[P];n.roundLengths&&(_=Math.floor(_)),p[P]<=e.virtualSize-a&&E.push(_)}p=E,Math.floor(e.virtualSize-a)-Math.floor(p[p.length-1])>1&&p.push(e.virtualSize-a)}if(l&&n.loop){const E=x[0]+m;if(n.slidesPerGroup>1){const P=Math.ceil((e.virtual.slidesBefore+e.virtual.slidesAfter)/n.slidesPerGroup),_=E*n.slidesPerGroup;for(let I=0;I<P;I+=1)p.push(p[p.length-1]+_)}for(let P=0;P<e.virtual.slidesBefore+e.virtual.slidesAfter;P+=1)n.slidesPerGroup===1&&p.push(p[p.length-1]+E),g.push(g[g.length-1]+E),e.virtualSize+=E}if(p.length===0&&(p=[0]),m!==0){const E=e.isHorizontal()&&o?"marginLeft":e.getDirectionLabel("marginRight");u.filter((P,_)=>!n.cssMode||n.loop?!0:_!==u.length-1).forEach(P=>{P.style[E]=`${m}px`})}if(n.centeredSlides&&n.centeredSlidesBounds){let E=0;x.forEach(_=>{E+=_+(m||0)}),E-=m;const P=E>a?E-a:0;p=p.map(_=>_<=0?-y:_>P?P+b:_)}if(n.centerInsufficientSlides){let E=0;x.forEach(_=>{E+=_+(m||0)}),E-=m;const P=(n.slidesOffsetBefore||0)+(n.slidesOffsetAfter||0);if(E+P<a){const _=(a-E-P)/2;p.forEach((I,R)=>{p[R]=I-_}),g.forEach((I,R)=>{g[R]=I+_})}}if(Object.assign(e,{slides:u,snapGrid:p,slidesGrid:g,slidesSizesGrid:x}),n.centeredSlides&&n.cssMode&&!n.centeredSlidesBounds){Bo(r,"--swiper-centered-offset-before",`${-p[0]}px`),Bo(r,"--swiper-centered-offset-after",`${e.size/2-x[x.length-1]/2}px`);const E=-e.snapGrid[0],P=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map(_=>_+E),e.slidesGrid=e.slidesGrid.map(_=>_+P)}if(f!==d&&e.emit("slidesLengthChange"),p.length!==v&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),g.length!==h&&e.emit("slidesGridLengthChange"),n.watchSlidesProgress&&e.updateSlidesOffset(),e.emit("slidesUpdated"),!l&&!n.cssMode&&(n.effect==="slide"||n.effect==="fade")){const E=`${n.containerModifierClass}backface-hidden`,P=e.el.classList.contains(E);f<=n.maxBackfaceHiddenSlides?P||e.el.classList.add(E):P&&e.el.classList.remove(E)}}function rj(e){const t=this,n=[],r=t.virtual&&t.params.virtual.enabled;let i=0,a;typeof e=="number"?t.setTransition(e):e===!0&&t.setTransition(t.params.speed);const o=s=>r?t.slides[t.getSlideIndexByData(s)]:t.slides[s];if(t.params.slidesPerView!=="auto"&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||[]).forEach(s=>{n.push(s)});else for(a=0;a<Math.ceil(t.params.slidesPerView);a+=1){const s=t.activeIndex+a;if(s>t.slides.length&&!r)break;n.push(o(s))}else n.push(o(t.activeIndex));for(a=0;a<n.length;a+=1)if(typeof n[a]<"u"){const s=n[a].offsetHeight;i=s>i?s:i}(i||i===0)&&(t.wrapperEl.style.height=`${i}px`)}function ij(){const e=this,t=e.slides,n=e.isElement?e.isHorizontal()?e.wrapperEl.offsetLeft:e.wrapperEl.offsetTop:0;for(let r=0;r<t.length;r+=1)t[r].swiperSlideOffset=(e.isHorizontal()?t[r].offsetLeft:t[r].offsetTop)-n-e.cssOverflowAdjustment()}const zm=(e,t,n)=>{t&&!e.classList.contains(n)?e.classList.add(n):!t&&e.classList.contains(n)&&e.classList.remove(n)};function aj(e){e===void 0&&(e=this&&this.translate||0);const t=this,n=t.params,{slides:r,rtlTranslate:i,snapGrid:a}=t;if(r.length===0)return;typeof r[0].swiperSlideOffset>"u"&&t.updateSlidesOffset();let o=-e;i&&(o=e),t.visibleSlidesIndexes=[],t.visibleSlides=[];let s=n.spaceBetween;typeof s=="string"&&s.indexOf("%")>=0?s=parseFloat(s.replace("%",""))/100*t.size:typeof s=="string"&&(s=parseFloat(s));for(let l=0;l<r.length;l+=1){const d=r[l];let u=d.swiperSlideOffset;n.cssMode&&n.centeredSlides&&(u-=r[0].swiperSlideOffset);const f=(o+(n.centeredSlides?t.minTranslate():0)-u)/(d.swiperSlideSize+s),p=(o-a[0]+(n.centeredSlides?t.minTranslate():0)-u)/(d.swiperSlideSize+s),g=-(o-u),x=g+t.slidesSizesGrid[l],y=g>=0&&g<=t.size-t.slidesSizesGrid[l],b=g>=0&&g<t.size-1||x>1&&x<=t.size||g<=0&&x>=t.size;b&&(t.visibleSlides.push(d),t.visibleSlidesIndexes.push(l)),zm(d,b,n.slideVisibleClass),zm(d,y,n.slideFullyVisibleClass),d.progress=i?-f:f,d.originalProgress=i?-p:p}}function oj(e){const t=this;if(typeof e>"u"){const u=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*u||0}const n=t.params,r=t.maxTranslate()-t.minTranslate();let{progress:i,isBeginning:a,isEnd:o,progressLoop:s}=t;const l=a,d=o;if(r===0)i=0,a=!0,o=!0;else{i=(e-t.minTranslate())/r;const u=Math.abs(e-t.minTranslate())<1,f=Math.abs(e-t.maxTranslate())<1;a=u||i<=0,o=f||i>=1,u&&(i=0),f&&(i=1)}if(n.loop){const u=t.getSlideIndexByData(0),f=t.getSlideIndexByData(t.slides.length-1),p=t.slidesGrid[u],g=t.slidesGrid[f],x=t.slidesGrid[t.slidesGrid.length-1],y=Math.abs(e);y>=p?s=(y-p)/x:s=(y+x-g)/x,s>1&&(s-=1)}Object.assign(t,{progress:i,progressLoop:s,isBeginning:a,isEnd:o}),(n.watchSlidesProgress||n.centeredSlides&&n.autoHeight)&&t.updateSlidesProgress(e),a&&!l&&t.emit("reachBeginning toEdge"),o&&!d&&t.emit("reachEnd toEdge"),(l&&!a||d&&!o)&&t.emit("fromEdge"),t.emit("progress",i)}const Hc=(e,t,n)=>{t&&!e.classList.contains(n)?e.classList.add(n):!t&&e.classList.contains(n)&&e.classList.remove(n)};function sj(){const e=this,{slides:t,params:n,slidesEl:r,activeIndex:i}=e,a=e.virtual&&n.virtual.enabled,o=e.grid&&n.grid&&n.grid.rows>1,s=f=>cn(r,`.${n.slideClass}${f}, swiper-slide${f}`)[0];let l,d,u;if(a)if(n.loop){let f=i-e.virtual.slidesBefore;f<0&&(f=e.virtual.slides.length+f),f>=e.virtual.slides.length&&(f-=e.virtual.slides.length),l=s(`[data-swiper-slide-index="${f}"]`)}else l=s(`[data-swiper-slide-index="${i}"]`);else o?(l=t.filter(f=>f.column===i)[0],u=t.filter(f=>f.column===i+1)[0],d=t.filter(f=>f.column===i-1)[0]):l=t[i];l&&(o||(u=W7(l,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!u&&(u=t[0]),d=U7(l,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!d===0&&(d=t[t.length-1]))),t.forEach(f=>{Hc(f,f===l,n.slideActiveClass),Hc(f,f===u,n.slideNextClass),Hc(f,f===d,n.slidePrevClass)}),e.emitSlidesClasses()}const hs=(e,t)=>{if(!e||e.destroyed||!e.params)return;const n=()=>e.isElement?"swiper-slide":`.${e.params.slideClass}`,r=t.closest(n());if(r){let i=r.querySelector(`.${e.params.lazyPreloaderClass}`);!i&&e.isElement&&(r.shadowRoot?i=r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{r.shadowRoot&&(i=r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`),i&&i.remove())})),i&&i.remove()}},Uc=(e,t)=>{if(!e.slides[t])return;const n=e.slides[t].querySelector('[loading="lazy"]');n&&n.removeAttribute("loading")},bu=e=>{if(!e||e.destroyed||!e.params)return;let t=e.params.lazyPreloadPrevNext;const n=e.slides.length;if(!n||!t||t<0)return;t=Math.min(t,n);const r=e.params.slidesPerView==="auto"?e.slidesPerViewDynamic():Math.ceil(e.params.slidesPerView),i=e.activeIndex;if(e.params.grid&&e.params.grid.rows>1){const o=i,s=[o-t];s.push(...Array.from({length:t}).map((l,d)=>o+r+d)),e.slides.forEach((l,d)=>{s.includes(l.column)&&Uc(e,d)});return}const a=i+r-1;if(e.params.rewind||e.params.loop)for(let o=i-t;o<=a+t;o+=1){const s=(o%n+n)%n;(s<i||s>a)&&Uc(e,s)}else for(let o=Math.max(i-t,0);o<=Math.min(a+t,n-1);o+=1)o!==i&&(o>a||o<i)&&Uc(e,o)};function lj(e){const{slidesGrid:t,params:n}=e,r=e.rtlTranslate?e.translate:-e.translate;let i;for(let a=0;a<t.length;a+=1)typeof t[a+1]<"u"?r>=t[a]&&r<t[a+1]-(t[a+1]-t[a])/2?i=a:r>=t[a]&&r<t[a+1]&&(i=a+1):r>=t[a]&&(i=a);return n.normalizeSlideIndex&&(i<0||typeof i>"u")&&(i=0),i}function cj(e){const t=this,n=t.rtlTranslate?t.translate:-t.translate,{snapGrid:r,params:i,activeIndex:a,realIndex:o,snapIndex:s}=t;let l=e,d;const u=g=>{let x=g-t.virtual.slidesBefore;return x<0&&(x=t.virtual.slides.length+x),x>=t.virtual.slides.length&&(x-=t.virtual.slides.length),x};if(typeof l>"u"&&(l=lj(t)),r.indexOf(n)>=0)d=r.indexOf(n);else{const g=Math.min(i.slidesPerGroupSkip,l);d=g+Math.floor((l-g)/i.slidesPerGroup)}if(d>=r.length&&(d=r.length-1),l===a&&!t.params.loop){d!==s&&(t.snapIndex=d,t.emit("snapIndexChange"));return}if(l===a&&t.params.loop&&t.virtual&&t.params.virtual.enabled){t.realIndex=u(l);return}const f=t.grid&&i.grid&&i.grid.rows>1;let p;if(t.virtual&&i.virtual.enabled&&i.loop)p=u(l);else if(f){const g=t.slides.filter(y=>y.column===l)[0];let x=parseInt(g.getAttribute("data-swiper-slide-index"),10);Number.isNaN(x)&&(x=Math.max(t.slides.indexOf(g),0)),p=Math.floor(x/i.grid.rows)}else if(t.slides[l]){const g=t.slides[l].getAttribute("data-swiper-slide-index");g?p=parseInt(g,10):p=l}else p=l;Object.assign(t,{previousSnapIndex:s,snapIndex:d,previousRealIndex:o,realIndex:p,previousIndex:a,activeIndex:l}),t.initialized&&bu(t),t.emit("activeIndexChange"),t.emit("snapIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&(o!==p&&t.emit("realIndexChange"),t.emit("slideChange"))}function dj(e,t){const n=this,r=n.params;let i=e.closest(`.${r.slideClass}, swiper-slide`);!i&&n.isElement&&t&&t.length>1&&t.includes(e)&&[...t.slice(t.indexOf(e)+1,t.length)].forEach(s=>{!i&&s.matches&&s.matches(`.${r.slideClass}, swiper-slide`)&&(i=s)});let a=!1,o;if(i){for(let s=0;s<n.slides.length;s+=1)if(n.slides[s]===i){a=!0,o=s;break}}if(i&&a)n.clickedSlide=i,n.virtual&&n.params.virtual.enabled?n.clickedIndex=parseInt(i.getAttribute("data-swiper-slide-index"),10):n.clickedIndex=o;else{n.clickedSlide=void 0,n.clickedIndex=void 0;return}r.slideToClickedSlide&&n.clickedIndex!==void 0&&n.clickedIndex!==n.activeIndex&&n.slideToClickedSlide()}var uj={updateSize:tj,updateSlides:nj,updateAutoHeight:rj,updateSlidesOffset:ij,updateSlidesProgress:aj,updateProgress:oj,updateSlidesClasses:sj,updateActiveIndex:cj,updateClickedSlide:dj};function fj(e){e===void 0&&(e=this.isHorizontal()?"x":"y");const t=this,{params:n,rtlTranslate:r,translate:i,wrapperEl:a}=t;if(n.virtualTranslate)return r?-i:i;if(n.cssMode)return i;let o=$7(a,e);return o+=t.cssOverflowAdjustment(),r&&(o=-o),o||0}function pj(e,t){const n=this,{rtlTranslate:r,params:i,wrapperEl:a,progress:o}=n;let s=0,l=0;const d=0;n.isHorizontal()?s=r?-e:e:l=e,i.roundLengths&&(s=Math.floor(s),l=Math.floor(l)),n.previousTranslate=n.translate,n.translate=n.isHorizontal()?s:l,i.cssMode?a[n.isHorizontal()?"scrollLeft":"scrollTop"]=n.isHorizontal()?-s:-l:i.virtualTranslate||(n.isHorizontal()?s-=n.cssOverflowAdjustment():l-=n.cssOverflowAdjustment(),a.style.transform=`translate3d(${s}px, ${l}px, ${d}px)`);let u;const f=n.maxTranslate()-n.minTranslate();f===0?u=0:u=(e-n.minTranslate())/f,u!==o&&n.updateProgress(e),n.emit("setTranslate",n.translate,t)}function hj(){return-this.snapGrid[0]}function mj(){return-this.snapGrid[this.snapGrid.length-1]}function gj(e,t,n,r,i){e===void 0&&(e=0),t===void 0&&(t=this.params.speed),n===void 0&&(n=!0),r===void 0&&(r=!0);const a=this,{params:o,wrapperEl:s}=a;if(a.animating&&o.preventInteractionOnTransition)return!1;const l=a.minTranslate(),d=a.maxTranslate();let u;if(r&&e>l?u=l:r&&e<d?u=d:u=e,a.updateProgress(u),o.cssMode){const f=a.isHorizontal();if(t===0)s[f?"scrollLeft":"scrollTop"]=-u;else{if(!a.support.smoothScroll)return My({swiper:a,targetPosition:-u,side:f?"left":"top"}),!0;s.scrollTo({[f?"left":"top"]:-u,behavior:"smooth"})}return!0}return t===0?(a.setTransition(0),a.setTranslate(u),n&&(a.emit("beforeTransitionStart",t,i),a.emit("transitionEnd"))):(a.setTransition(t),a.setTranslate(u),n&&(a.emit("beforeTransitionStart",t,i),a.emit("transitionStart")),a.animating||(a.animating=!0,a.onTranslateToWrapperTransitionEnd||(a.onTranslateToWrapperTransitionEnd=function(p){!a||a.destroyed||p.target===this&&(a.wrapperEl.removeEventListener("transitionend",a.onTranslateToWrapperTransitionEnd),a.onTranslateToWrapperTransitionEnd=null,delete a.onTranslateToWrapperTransitionEnd,a.animating=!1,n&&a.emit("transitionEnd"))}),a.wrapperEl.addEventListener("transitionend",a.onTranslateToWrapperTransitionEnd))),!0}var vj={getTranslate:fj,setTranslate:pj,minTranslate:hj,maxTranslate:mj,translateTo:gj};function xj(e,t){const n=this;n.params.cssMode||(n.wrapperEl.style.transitionDuration=`${e}ms`,n.wrapperEl.style.transitionDelay=e===0?"0ms":""),n.emit("setTransition",e,t)}function Ry(e){let{swiper:t,runCallbacks:n,direction:r,step:i}=e;const{activeIndex:a,previousIndex:o}=t;let s=r;if(s||(a>o?s="next":a<o?s="prev":s="reset"),t.emit(`transition${i}`),n&&a!==o){if(s==="reset"){t.emit(`slideResetTransition${i}`);return}t.emit(`slideChangeTransition${i}`),s==="next"?t.emit(`slideNextTransition${i}`):t.emit(`slidePrevTransition${i}`)}}function yj(e,t){e===void 0&&(e=!0);const n=this,{params:r}=n;r.cssMode||(r.autoHeight&&n.updateAutoHeight(),Ry({swiper:n,runCallbacks:e,direction:t,step:"Start"}))}function wj(e,t){e===void 0&&(e=!0);const n=this,{params:r}=n;n.animating=!1,!r.cssMode&&(n.setTransition(0),Ry({swiper:n,runCallbacks:e,direction:t,step:"End"}))}var bj={setTransition:xj,transitionStart:yj,transitionEnd:wj};function Sj(e,t,n,r,i){e===void 0&&(e=0),n===void 0&&(n=!0),typeof e=="string"&&(e=parseInt(e,10));const a=this;let o=e;o<0&&(o=0);const{params:s,snapGrid:l,slidesGrid:d,previousIndex:u,activeIndex:f,rtlTranslate:p,wrapperEl:g,enabled:x}=a;if(!x&&!r&&!i||a.destroyed||a.animating&&s.preventInteractionOnTransition)return!1;typeof t>"u"&&(t=a.params.speed);const y=Math.min(a.params.slidesPerGroupSkip,o);let b=y+Math.floor((o-y)/a.params.slidesPerGroup);b>=l.length&&(b=l.length-1);const v=-l[b];if(s.normalizeSlideIndex)for(let S=0;S<d.length;S+=1){const C=-Math.floor(v*100),A=Math.floor(d[S]*100),T=Math.floor(d[S+1]*100);typeof d[S+1]<"u"?C>=A&&C<T-(T-A)/2?o=S:C>=A&&C<T&&(o=S+1):C>=A&&(o=S)}if(a.initialized&&o!==f&&(!a.allowSlideNext&&(p?v>a.translate&&v>a.minTranslate():v<a.translate&&v<a.minTranslate())||!a.allowSlidePrev&&v>a.translate&&v>a.maxTranslate()&&(f||0)!==o))return!1;o!==(u||0)&&n&&a.emit("beforeSlideChangeStart"),a.updateProgress(v);let h;o>f?h="next":o<f?h="prev":h="reset";const m=a.virtual&&a.params.virtual.enabled;if(!(m&&i)&&(p&&-v===a.translate||!p&&v===a.translate))return a.updateActiveIndex(o),s.autoHeight&&a.updateAutoHeight(),a.updateSlidesClasses(),s.effect!=="slide"&&a.setTranslate(v),h!=="reset"&&(a.transitionStart(n,h),a.transitionEnd(n,h)),!1;if(s.cssMode){const S=a.isHorizontal(),C=p?v:-v;if(t===0)m&&(a.wrapperEl.style.scrollSnapType="none",a._immediateVirtual=!0),m&&!a._cssModeVirtualInitialSet&&a.params.initialSlide>0?(a._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{g[S?"scrollLeft":"scrollTop"]=C})):g[S?"scrollLeft":"scrollTop"]=C,m&&requestAnimationFrame(()=>{a.wrapperEl.style.scrollSnapType="",a._immediateVirtual=!1});else{if(!a.support.smoothScroll)return My({swiper:a,targetPosition:C,side:S?"left":"top"}),!0;g.scrollTo({[S?"left":"top"]:C,behavior:"smooth"})}return!0}return a.setTransition(t),a.setTranslate(v),a.updateActiveIndex(o),a.updateSlidesClasses(),a.emit("beforeTransitionStart",t,r),a.transitionStart(n,h),t===0?a.transitionEnd(n,h):a.animating||(a.animating=!0,a.onSlideToWrapperTransitionEnd||(a.onSlideToWrapperTransitionEnd=function(C){!a||a.destroyed||C.target===this&&(a.wrapperEl.removeEventListener("transitionend",a.onSlideToWrapperTransitionEnd),a.onSlideToWrapperTransitionEnd=null,delete a.onSlideToWrapperTransitionEnd,a.transitionEnd(n,h))}),a.wrapperEl.addEventListener("transitionend",a.onSlideToWrapperTransitionEnd)),!0}function jj(e,t,n,r){e===void 0&&(e=0),n===void 0&&(n=!0),typeof e=="string"&&(e=parseInt(e,10));const i=this;if(i.destroyed)return;typeof t>"u"&&(t=i.params.speed);const a=i.grid&&i.params.grid&&i.params.grid.rows>1;let o=e;if(i.params.loop)if(i.virtual&&i.params.virtual.enabled)o=o+i.virtual.slidesBefore;else{let s;if(a){const p=o*i.params.grid.rows;s=i.slides.filter(g=>g.getAttribute("data-swiper-slide-index")*1===p)[0].column}else s=i.getSlideIndexByData(o);const l=a?Math.ceil(i.slides.length/i.params.grid.rows):i.slides.length,{centeredSlides:d}=i.params;let u=i.params.slidesPerView;u==="auto"?u=i.slidesPerViewDynamic():(u=Math.ceil(parseFloat(i.params.slidesPerView,10)),d&&u%2===0&&(u=u+1));let f=l-s<u;if(d&&(f=f||s<Math.ceil(u/2)),r&&d&&i.params.slidesPerView!=="auto"&&!a&&(f=!1),f){const p=d?s<i.activeIndex?"prev":"next":s-i.activeIndex-1<i.params.slidesPerView?"next":"prev";i.loopFix({direction:p,slideTo:!0,activeSlideIndex:p==="next"?s+1:s-l+1,slideRealIndex:p==="next"?i.realIndex:void 0})}if(a){const p=o*i.params.grid.rows;o=i.slides.filter(g=>g.getAttribute("data-swiper-slide-index")*1===p)[0].column}else o=i.getSlideIndexByData(o)}return requestAnimationFrame(()=>{i.slideTo(o,t,n,r)}),i}function Cj(e,t,n){t===void 0&&(t=!0);const r=this,{enabled:i,params:a,animating:o}=r;if(!i||r.destroyed)return r;typeof e>"u"&&(e=r.params.speed);let s=a.slidesPerGroup;a.slidesPerView==="auto"&&a.slidesPerGroup===1&&a.slidesPerGroupAuto&&(s=Math.max(r.slidesPerViewDynamic("current",!0),1));const l=r.activeIndex<a.slidesPerGroupSkip?1:s,d=r.virtual&&a.virtual.enabled;if(a.loop){if(o&&!d&&a.loopPreventsSliding)return!1;if(r.loopFix({direction:"next"}),r._clientLeft=r.wrapperEl.clientLeft,r.activeIndex===r.slides.length-1&&a.cssMode)return requestAnimationFrame(()=>{r.slideTo(r.activeIndex+l,e,t,n)}),!0}return a.rewind&&r.isEnd?r.slideTo(0,e,t,n):r.slideTo(r.activeIndex+l,e,t,n)}function kj(e,t,n){t===void 0&&(t=!0);const r=this,{params:i,snapGrid:a,slidesGrid:o,rtlTranslate:s,enabled:l,animating:d}=r;if(!l||r.destroyed)return r;typeof e>"u"&&(e=r.params.speed);const u=r.virtual&&i.virtual.enabled;if(i.loop){if(d&&!u&&i.loopPreventsSliding)return!1;r.loopFix({direction:"prev"}),r._clientLeft=r.wrapperEl.clientLeft}const f=s?r.translate:-r.translate;function p(v){return v<0?-Math.floor(Math.abs(v)):Math.floor(v)}const g=p(f),x=a.map(v=>p(v));let y=a[x.indexOf(g)-1];if(typeof y>"u"&&i.cssMode){let v;a.forEach((h,m)=>{g>=h&&(v=m)}),typeof v<"u"&&(y=a[v>0?v-1:v])}let b=0;if(typeof y<"u"&&(b=o.indexOf(y),b<0&&(b=r.activeIndex-1),i.slidesPerView==="auto"&&i.slidesPerGroup===1&&i.slidesPerGroupAuto&&(b=b-r.slidesPerViewDynamic("previous",!0)+1,b=Math.max(b,0))),i.rewind&&r.isBeginning){const v=r.params.virtual&&r.params.virtual.enabled&&r.virtual?r.virtual.slides.length-1:r.slides.length-1;return r.slideTo(v,e,t,n)}else if(i.loop&&r.activeIndex===0&&i.cssMode)return requestAnimationFrame(()=>{r.slideTo(b,e,t,n)}),!0;return r.slideTo(b,e,t,n)}function Tj(e,t,n){t===void 0&&(t=!0);const r=this;if(!r.destroyed)return typeof e>"u"&&(e=r.params.speed),r.slideTo(r.activeIndex,e,t,n)}function Aj(e,t,n,r){t===void 0&&(t=!0),r===void 0&&(r=.5);const i=this;if(i.destroyed)return;typeof e>"u"&&(e=i.params.speed);let a=i.activeIndex;const o=Math.min(i.params.slidesPerGroupSkip,a),s=o+Math.floor((a-o)/i.params.slidesPerGroup),l=i.rtlTranslate?i.translate:-i.translate;if(l>=i.snapGrid[s]){const d=i.snapGrid[s],u=i.snapGrid[s+1];l-d>(u-d)*r&&(a+=i.params.slidesPerGroup)}else{const d=i.snapGrid[s-1],u=i.snapGrid[s];l-d<=(u-d)*r&&(a-=i.params.slidesPerGroup)}return a=Math.max(a,0),a=Math.min(a,i.slidesGrid.length-1),i.slideTo(a,e,t,n)}function Ej(){const e=this;if(e.destroyed)return;const{params:t,slidesEl:n}=e,r=t.slidesPerView==="auto"?e.slidesPerViewDynamic():t.slidesPerView;let i=e.clickedIndex,a;const o=e.isElement?"swiper-slide":`.${t.slideClass}`;if(t.loop){if(e.animating)return;a=parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"),10),t.centeredSlides?i<e.loopedSlides-r/2||i>e.slides.length-e.loopedSlides+r/2?(e.loopFix(),i=e.getSlideIndex(cn(n,`${o}[data-swiper-slide-index="${a}"]`)[0]),yu(()=>{e.slideTo(i)})):e.slideTo(i):i>e.slides.length-r?(e.loopFix(),i=e.getSlideIndex(cn(n,`${o}[data-swiper-slide-index="${a}"]`)[0]),yu(()=>{e.slideTo(i)})):e.slideTo(i)}else e.slideTo(i)}var Pj={slideTo:Sj,slideToLoop:jj,slideNext:Cj,slidePrev:kj,slideReset:Tj,slideToClosest:Aj,slideToClickedSlide:Ej};function Gj(e){const t=this,{params:n,slidesEl:r}=t;if(!n.loop||t.virtual&&t.params.virtual.enabled)return;const i=()=>{cn(r,`.${n.slideClass}, swiper-slide`).forEach((f,p)=>{f.setAttribute("data-swiper-slide-index",p)})},a=t.grid&&n.grid&&n.grid.rows>1,o=n.slidesPerGroup*(a?n.grid.rows:1),s=t.slides.length%o!==0,l=a&&t.slides.length%n.grid.rows!==0,d=u=>{for(let f=0;f<u;f+=1){const p=t.isElement?ao("swiper-slide",[n.slideBlankClass]):ao("div",[n.slideClass,n.slideBlankClass]);t.slidesEl.append(p)}};if(s){if(n.loopAddBlankSlides){const u=o-t.slides.length%o;d(u),t.recalcSlides(),t.updateSlides()}else rl("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");i()}else if(l){if(n.loopAddBlankSlides){const u=n.grid.rows-t.slides.length%n.grid.rows;d(u),t.recalcSlides(),t.updateSlides()}else rl("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");i()}else i();t.loopFix({slideRealIndex:e,direction:n.centeredSlides?void 0:"next"})}function zj(e){let{slideRealIndex:t,slideTo:n=!0,direction:r,setTranslate:i,activeSlideIndex:a,byController:o,byMousewheel:s}=e===void 0?{}:e;const l=this;if(!l.params.loop)return;l.emit("beforeLoopFix");const{slides:d,allowSlidePrev:u,allowSlideNext:f,slidesEl:p,params:g}=l,{centeredSlides:x}=g;if(l.allowSlidePrev=!0,l.allowSlideNext=!0,l.virtual&&g.virtual.enabled){n&&(!g.centeredSlides&&l.snapIndex===0?l.slideTo(l.virtual.slides.length,0,!1,!0):g.centeredSlides&&l.snapIndex<g.slidesPerView?l.slideTo(l.virtual.slides.length+l.snapIndex,0,!1,!0):l.snapIndex===l.snapGrid.length-1&&l.slideTo(l.virtual.slidesBefore,0,!1,!0)),l.allowSlidePrev=u,l.allowSlideNext=f,l.emit("loopFix");return}let y=g.slidesPerView;y==="auto"?y=l.slidesPerViewDynamic():(y=Math.ceil(parseFloat(g.slidesPerView,10)),x&&y%2===0&&(y=y+1));const b=g.slidesPerGroupAuto?y:g.slidesPerGroup;let v=b;v%b!==0&&(v+=b-v%b),v+=g.loopAdditionalSlides,l.loopedSlides=v;const h=l.grid&&g.grid&&g.grid.rows>1;d.length<y+v?rl("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):h&&g.grid.fill==="row"&&rl("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const m=[],w=[];let S=l.activeIndex;typeof a>"u"?a=l.getSlideIndex(d.filter(I=>I.classList.contains(g.slideActiveClass))[0]):S=a;const C=r==="next"||!r,A=r==="prev"||!r;let T=0,z=0;const E=h?Math.ceil(d.length/g.grid.rows):d.length,_=(h?d[a].column:a)+(x&&typeof i>"u"?-y/2+.5:0);if(_<v){T=Math.max(v-_,b);for(let I=0;I<v-_;I+=1){const R=I-Math.floor(I/E)*E;if(h){const U=E-R-1;for(let Q=d.length-1;Q>=0;Q-=1)d[Q].column===U&&m.push(Q)}else m.push(E-R-1)}}else if(_+y>E-v){z=Math.max(_-(E-v*2),b);for(let I=0;I<z;I+=1){const R=I-Math.floor(I/E)*E;h?d.forEach((U,Q)=>{U.column===R&&w.push(Q)}):w.push(R)}}if(l.__preventObserver__=!0,requestAnimationFrame(()=>{l.__preventObserver__=!1}),A&&m.forEach(I=>{d[I].swiperLoopMoveDOM=!0,p.prepend(d[I]),d[I].swiperLoopMoveDOM=!1}),C&&w.forEach(I=>{d[I].swiperLoopMoveDOM=!0,p.append(d[I]),d[I].swiperLoopMoveDOM=!1}),l.recalcSlides(),g.slidesPerView==="auto"?l.updateSlides():h&&(m.length>0&&A||w.length>0&&C)&&l.slides.forEach((I,R)=>{l.grid.updateSlide(R,I,l.slides)}),g.watchSlidesProgress&&l.updateSlidesOffset(),n){if(m.length>0&&A){if(typeof t>"u"){const I=l.slidesGrid[S],U=l.slidesGrid[S+T]-I;s?l.setTranslate(l.translate-U):(l.slideTo(S+Math.ceil(T),0,!1,!0),i&&(l.touchEventsData.startTranslate=l.touchEventsData.startTranslate-U,l.touchEventsData.currentTranslate=l.touchEventsData.currentTranslate-U))}else if(i){const I=h?m.length/g.grid.rows:m.length;l.slideTo(l.activeIndex+I,0,!1,!0),l.touchEventsData.currentTranslate=l.translate}}else if(w.length>0&&C)if(typeof t>"u"){const I=l.slidesGrid[S],U=l.slidesGrid[S-z]-I;s?l.setTranslate(l.translate-U):(l.slideTo(S-z,0,!1,!0),i&&(l.touchEventsData.startTranslate=l.touchEventsData.startTranslate-U,l.touchEventsData.currentTranslate=l.touchEventsData.currentTranslate-U))}else{const I=h?w.length/g.grid.rows:w.length;l.slideTo(l.activeIndex-I,0,!1,!0)}}if(l.allowSlidePrev=u,l.allowSlideNext=f,l.controller&&l.controller.control&&!o){const I={slideRealIndex:t,direction:r,setTranslate:i,activeSlideIndex:a,byController:!0};Array.isArray(l.controller.control)?l.controller.control.forEach(R=>{!R.destroyed&&R.params.loop&&R.loopFix({...I,slideTo:R.params.slidesPerView===g.slidesPerView?n:!1})}):l.controller.control instanceof l.constructor&&l.controller.control.params.loop&&l.controller.control.loopFix({...I,slideTo:l.controller.control.params.slidesPerView===g.slidesPerView?n:!1})}l.emit("loopFix")}function _j(){const e=this,{params:t,slidesEl:n}=e;if(!t.loop||e.virtual&&e.params.virtual.enabled)return;e.recalcSlides();const r=[];e.slides.forEach(i=>{const a=typeof i.swiperSlideIndex>"u"?i.getAttribute("data-swiper-slide-index")*1:i.swiperSlideIndex;r[a]=i}),e.slides.forEach(i=>{i.removeAttribute("data-swiper-slide-index")}),r.forEach(i=>{n.append(i)}),e.recalcSlides(),e.slideTo(e.realIndex,0)}var Mj={loopCreate:Gj,loopFix:zj,loopDestroy:_j};function Lj(e){const t=this;if(!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const n=t.params.touchEventsTarget==="container"?t.el:t.wrapperEl;t.isElement&&(t.__preventObserver__=!0),n.style.cursor="move",n.style.cursor=e?"grabbing":"grab",t.isElement&&requestAnimationFrame(()=>{t.__preventObserver__=!1})}function Oj(){const e=this;e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.isElement&&(e.__preventObserver__=!0),e[e.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1}))}var Ij={setGrabCursor:Lj,unsetGrabCursor:Oj};function Rj(e,t){t===void 0&&(t=this);function n(r){if(!r||r===zn()||r===Gt())return null;r.assignedSlot&&(r=r.assignedSlot);const i=r.closest(e);return!i&&!r.getRootNode?null:i||n(r.getRootNode().host)}return n(t)}function _m(e,t,n){const r=Gt(),{params:i}=e,a=i.edgeSwipeDetection,o=i.edgeSwipeThreshold;return a&&(n<=o||n>=r.innerWidth-o)?a==="prevent"?(t.preventDefault(),!0):!1:!0}function Dj(e){const t=this,n=zn();let r=e;r.originalEvent&&(r=r.originalEvent);const i=t.touchEventsData;if(r.type==="pointerdown"){if(i.pointerId!==null&&i.pointerId!==r.pointerId)return;i.pointerId=r.pointerId}else r.type==="touchstart"&&r.targetTouches.length===1&&(i.touchId=r.targetTouches[0].identifier);if(r.type==="touchstart"){_m(t,r,r.targetTouches[0].pageX);return}const{params:a,touches:o,enabled:s}=t;if(!s||!a.simulateTouch&&r.pointerType==="mouse"||t.animating&&a.preventInteractionOnTransition)return;!t.animating&&a.cssMode&&a.loop&&t.loopFix();let l=r.target;if(a.touchEventsTarget==="wrapper"&&!H7(l,t.wrapperEl)||"which"in r&&r.which===3||"button"in r&&r.button>0||i.isTouched&&i.isMoved)return;const d=!!a.noSwipingClass&&a.noSwipingClass!=="",u=r.composedPath?r.composedPath():r.path;d&&r.target&&r.target.shadowRoot&&u&&(l=u[0]);const f=a.noSwipingSelector?a.noSwipingSelector:`.${a.noSwipingClass}`,p=!!(r.target&&r.target.shadowRoot);if(a.noSwiping&&(p?Rj(f,l):l.closest(f))){t.allowClick=!0;return}if(a.swipeHandler&&!l.closest(a.swipeHandler))return;o.currentX=r.pageX,o.currentY=r.pageY;const g=o.currentX,x=o.currentY;if(!_m(t,r,g))return;Object.assign(i,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),o.startX=g,o.startY=x,i.touchStartTime=nl(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,a.threshold>0&&(i.allowThresholdMove=!1);let y=!0;l.matches(i.focusableElements)&&(y=!1,l.nodeName==="SELECT"&&(i.isTouched=!1)),n.activeElement&&n.activeElement.matches(i.focusableElements)&&n.activeElement!==l&&(r.pointerType==="mouse"||r.pointerType!=="mouse"&&!l.matches(i.focusableElements))&&n.activeElement.blur();const b=y&&t.allowTouchMove&&a.touchStartPreventDefault;(a.touchStartForcePreventDefault||b)&&!l.isContentEditable&&r.preventDefault(),a.freeMode&&a.freeMode.enabled&&t.freeMode&&t.animating&&!a.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",r)}function Vj(e){const t=zn(),n=this,r=n.touchEventsData,{params:i,touches:a,rtlTranslate:o,enabled:s}=n;if(!s||!i.simulateTouch&&e.pointerType==="mouse")return;let l=e;if(l.originalEvent&&(l=l.originalEvent),l.type==="pointermove"&&(r.touchId!==null||l.pointerId!==r.pointerId))return;let d;if(l.type==="touchmove"){if(d=[...l.changedTouches].filter(C=>C.identifier===r.touchId)[0],!d||d.identifier!==r.touchId)return}else d=l;if(!r.isTouched){r.startMoving&&r.isScrolling&&n.emit("touchMoveOpposite",l);return}const u=d.pageX,f=d.pageY;if(l.preventedByNestedSwiper){a.startX=u,a.startY=f;return}if(!n.allowTouchMove){l.target.matches(r.focusableElements)||(n.allowClick=!1),r.isTouched&&(Object.assign(a,{startX:u,startY:f,currentX:u,currentY:f}),r.touchStartTime=nl());return}if(i.touchReleaseOnEdges&&!i.loop){if(n.isVertical()){if(f<a.startY&&n.translate<=n.maxTranslate()||f>a.startY&&n.translate>=n.minTranslate()){r.isTouched=!1,r.isMoved=!1;return}}else if(u<a.startX&&n.translate<=n.maxTranslate()||u>a.startX&&n.translate>=n.minTranslate())return}if(t.activeElement&&t.activeElement.matches(r.focusableElements)&&t.activeElement!==l.target&&l.pointerType!=="mouse"&&t.activeElement.blur(),t.activeElement&&l.target===t.activeElement&&l.target.matches(r.focusableElements)){r.isMoved=!0,n.allowClick=!1;return}r.allowTouchCallbacks&&n.emit("touchMove",l),a.previousX=a.currentX,a.previousY=a.currentY,a.currentX=u,a.currentY=f;const p=a.currentX-a.startX,g=a.currentY-a.startY;if(n.params.threshold&&Math.sqrt(p**2+g**2)<n.params.threshold)return;if(typeof r.isScrolling>"u"){let C;n.isHorizontal()&&a.currentY===a.startY||n.isVertical()&&a.currentX===a.startX?r.isScrolling=!1:p*p+g*g>=25&&(C=Math.atan2(Math.abs(g),Math.abs(p))*180/Math.PI,r.isScrolling=n.isHorizontal()?C>i.touchAngle:90-C>i.touchAngle)}if(r.isScrolling&&n.emit("touchMoveOpposite",l),typeof r.startMoving>"u"&&(a.currentX!==a.startX||a.currentY!==a.startY)&&(r.startMoving=!0),r.isScrolling||l.type==="touchmove"&&r.preventTouchMoveFromPointerMove){r.isTouched=!1;return}if(!r.startMoving)return;n.allowClick=!1,!i.cssMode&&l.cancelable&&l.preventDefault(),i.touchMoveStopPropagation&&!i.nested&&l.stopPropagation();let x=n.isHorizontal()?p:g,y=n.isHorizontal()?a.currentX-a.previousX:a.currentY-a.previousY;i.oneWayMovement&&(x=Math.abs(x)*(o?1:-1),y=Math.abs(y)*(o?1:-1)),a.diff=x,x*=i.touchRatio,o&&(x=-x,y=-y);const b=n.touchesDirection;n.swipeDirection=x>0?"prev":"next",n.touchesDirection=y>0?"prev":"next";const v=n.params.loop&&!i.cssMode,h=n.touchesDirection==="next"&&n.allowSlideNext||n.touchesDirection==="prev"&&n.allowSlidePrev;if(!r.isMoved){if(v&&h&&n.loopFix({direction:n.swipeDirection}),r.startTranslate=n.getTranslate(),n.setTransition(0),n.animating){const C=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});n.wrapperEl.dispatchEvent(C)}r.allowMomentumBounce=!1,i.grabCursor&&(n.allowSlideNext===!0||n.allowSlidePrev===!0)&&n.setGrabCursor(!0),n.emit("sliderFirstMove",l)}let m;if(new Date().getTime(),r.isMoved&&r.allowThresholdMove&&b!==n.touchesDirection&&v&&h&&Math.abs(x)>=1){Object.assign(a,{startX:u,startY:f,currentX:u,currentY:f,startTranslate:r.currentTranslate}),r.loopSwapReset=!0,r.startTranslate=r.currentTranslate;return}n.emit("sliderMove",l),r.isMoved=!0,r.currentTranslate=x+r.startTranslate;let w=!0,S=i.resistanceRatio;if(i.touchReleaseOnEdges&&(S=0),x>0?(v&&h&&!m&&r.allowThresholdMove&&r.currentTranslate>(i.centeredSlides?n.minTranslate()-n.slidesSizesGrid[n.activeIndex+1]-(i.slidesPerView!=="auto"&&n.slides.length-i.slidesPerView>=2?n.slidesSizesGrid[n.activeIndex+1]+n.params.spaceBetween:0)-n.params.spaceBetween:n.minTranslate())&&n.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),r.currentTranslate>n.minTranslate()&&(w=!1,i.resistance&&(r.currentTranslate=n.minTranslate()-1+(-n.minTranslate()+r.startTranslate+x)**S))):x<0&&(v&&h&&!m&&r.allowThresholdMove&&r.currentTranslate<(i.centeredSlides?n.maxTranslate()+n.slidesSizesGrid[n.slidesSizesGrid.length-1]+n.params.spaceBetween+(i.slidesPerView!=="auto"&&n.slides.length-i.slidesPerView>=2?n.slidesSizesGrid[n.slidesSizesGrid.length-1]+n.params.spaceBetween:0):n.maxTranslate())&&n.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:n.slides.length-(i.slidesPerView==="auto"?n.slidesPerViewDynamic():Math.ceil(parseFloat(i.slidesPerView,10)))}),r.currentTranslate<n.maxTranslate()&&(w=!1,i.resistance&&(r.currentTranslate=n.maxTranslate()+1-(n.maxTranslate()-r.startTranslate-x)**S))),w&&(l.preventedByNestedSwiper=!0),!n.allowSlideNext&&n.swipeDirection==="next"&&r.currentTranslate<r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&n.swipeDirection==="prev"&&r.currentTranslate>r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&!n.allowSlideNext&&(r.currentTranslate=r.startTranslate),i.threshold>0)if(Math.abs(x)>i.threshold||r.allowThresholdMove){if(!r.allowThresholdMove){r.allowThresholdMove=!0,a.startX=a.currentX,a.startY=a.currentY,r.currentTranslate=r.startTranslate,a.diff=n.isHorizontal()?a.currentX-a.startX:a.currentY-a.startY;return}}else{r.currentTranslate=r.startTranslate;return}!i.followFinger||i.cssMode||((i.freeMode&&i.freeMode.enabled&&n.freeMode||i.watchSlidesProgress)&&(n.updateActiveIndex(),n.updateSlidesClasses()),i.freeMode&&i.freeMode.enabled&&n.freeMode&&n.freeMode.onTouchMove(),n.updateProgress(r.currentTranslate),n.setTranslate(r.currentTranslate))}function Nj(e){const t=this,n=t.touchEventsData;let r=e;r.originalEvent&&(r=r.originalEvent);let i;if(r.type==="touchend"||r.type==="touchcancel"){if(i=[...r.changedTouches].filter(S=>S.identifier===n.touchId)[0],!i||i.identifier!==n.touchId)return}else{if(n.touchId!==null||r.pointerId!==n.pointerId)return;i=r}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(r.type)&&!(["pointercancel","contextmenu"].includes(r.type)&&(t.browser.isSafari||t.browser.isWebView)))return;n.pointerId=null,n.touchId=null;const{params:o,touches:s,rtlTranslate:l,slidesGrid:d,enabled:u}=t;if(!u||!o.simulateTouch&&r.pointerType==="mouse")return;if(n.allowTouchCallbacks&&t.emit("touchEnd",r),n.allowTouchCallbacks=!1,!n.isTouched){n.isMoved&&o.grabCursor&&t.setGrabCursor(!1),n.isMoved=!1,n.startMoving=!1;return}o.grabCursor&&n.isMoved&&n.isTouched&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!1);const f=nl(),p=f-n.touchStartTime;if(t.allowClick){const S=r.path||r.composedPath&&r.composedPath();t.updateClickedSlide(S&&S[0]||r.target,S),t.emit("tap click",r),p<300&&f-n.lastClickTime<300&&t.emit("doubleTap doubleClick",r)}if(n.lastClickTime=nl(),yu(()=>{t.destroyed||(t.allowClick=!0)}),!n.isTouched||!n.isMoved||!t.swipeDirection||s.diff===0&&!n.loopSwapReset||n.currentTranslate===n.startTranslate&&!n.loopSwapReset){n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;return}n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;let g;if(o.followFinger?g=l?t.translate:-t.translate:g=-n.currentTranslate,o.cssMode)return;if(o.freeMode&&o.freeMode.enabled){t.freeMode.onTouchEnd({currentPos:g});return}const x=g>=-t.maxTranslate()&&!t.params.loop;let y=0,b=t.slidesSizesGrid[0];for(let S=0;S<d.length;S+=S<o.slidesPerGroupSkip?1:o.slidesPerGroup){const C=S<o.slidesPerGroupSkip-1?1:o.slidesPerGroup;typeof d[S+C]<"u"?(x||g>=d[S]&&g<d[S+C])&&(y=S,b=d[S+C]-d[S]):(x||g>=d[S])&&(y=S,b=d[d.length-1]-d[d.length-2])}let v=null,h=null;o.rewind&&(t.isBeginning?h=o.virtual&&o.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(v=0));const m=(g-d[y])/b,w=y<o.slidesPerGroupSkip-1?1:o.slidesPerGroup;if(p>o.longSwipesMs){if(!o.longSwipes){t.slideTo(t.activeIndex);return}t.swipeDirection==="next"&&(m>=o.longSwipesRatio?t.slideTo(o.rewind&&t.isEnd?v:y+w):t.slideTo(y)),t.swipeDirection==="prev"&&(m>1-o.longSwipesRatio?t.slideTo(y+w):h!==null&&m<0&&Math.abs(m)>o.longSwipesRatio?t.slideTo(h):t.slideTo(y))}else{if(!o.shortSwipes){t.slideTo(t.activeIndex);return}t.navigation&&(r.target===t.navigation.nextEl||r.target===t.navigation.prevEl)?r.target===t.navigation.nextEl?t.slideTo(y+w):t.slideTo(y):(t.swipeDirection==="next"&&t.slideTo(v!==null?v:y+w),t.swipeDirection==="prev"&&t.slideTo(h!==null?h:y))}}function Mm(){const e=this,{params:t,el:n}=e;if(n&&n.offsetWidth===0)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:r,allowSlidePrev:i,snapGrid:a}=e,o=e.virtual&&e.params.virtual.enabled;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses();const s=o&&t.loop;(t.slidesPerView==="auto"||t.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides&&!s?e.slideTo(e.slides.length-1,0,!1,!0):e.params.loop&&!o?e.slideToLoop(e.realIndex,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&(clearTimeout(e.autoplay.resizeTimeout),e.autoplay.resizeTimeout=setTimeout(()=>{e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.resume()},500)),e.allowSlidePrev=i,e.allowSlideNext=r,e.params.watchOverflow&&a!==e.snapGrid&&e.checkOverflow()}function Fj(e){const t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function $j(){const e=this,{wrapperEl:t,rtlTranslate:n,enabled:r}=e;if(!r)return;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,e.translate===0&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();let i;const a=e.maxTranslate()-e.minTranslate();a===0?i=0:i=(e.translate-e.minTranslate())/a,i!==e.progress&&e.updateProgress(n?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}function Bj(e){const t=this;hs(t,e.target),!(t.params.cssMode||t.params.slidesPerView!=="auto"&&!t.params.autoHeight)&&t.update()}function Hj(){const e=this;e.documentTouchHandlerProceeded||(e.documentTouchHandlerProceeded=!0,e.params.touchReleaseOnEdges&&(e.el.style.touchAction="auto"))}const Dy=(e,t)=>{const n=zn(),{params:r,el:i,wrapperEl:a,device:o}=e,s=!!r.nested,l=t==="on"?"addEventListener":"removeEventListener",d=t;!i||typeof i=="string"||(n[l]("touchstart",e.onDocumentTouchStart,{passive:!1,capture:s}),i[l]("touchstart",e.onTouchStart,{passive:!1}),i[l]("pointerdown",e.onTouchStart,{passive:!1}),n[l]("touchmove",e.onTouchMove,{passive:!1,capture:s}),n[l]("pointermove",e.onTouchMove,{passive:!1,capture:s}),n[l]("touchend",e.onTouchEnd,{passive:!0}),n[l]("pointerup",e.onTouchEnd,{passive:!0}),n[l]("pointercancel",e.onTouchEnd,{passive:!0}),n[l]("touchcancel",e.onTouchEnd,{passive:!0}),n[l]("pointerout",e.onTouchEnd,{passive:!0}),n[l]("pointerleave",e.onTouchEnd,{passive:!0}),n[l]("contextmenu",e.onTouchEnd,{passive:!0}),(r.preventClicks||r.preventClicksPropagation)&&i[l]("click",e.onClick,!0),r.cssMode&&a[l]("scroll",e.onScroll),r.updateOnWindowResize?e[d](o.ios||o.android?"resize orientationchange observerUpdate":"resize observerUpdate",Mm,!0):e[d]("observerUpdate",Mm,!0),i[l]("load",e.onLoad,{capture:!0}))};function Uj(){const e=this,{params:t}=e;e.onTouchStart=Dj.bind(e),e.onTouchMove=Vj.bind(e),e.onTouchEnd=Nj.bind(e),e.onDocumentTouchStart=Hj.bind(e),t.cssMode&&(e.onScroll=$j.bind(e)),e.onClick=Fj.bind(e),e.onLoad=Bj.bind(e),Dy(e,"on")}function Wj(){Dy(this,"off")}var qj={attachEvents:Uj,detachEvents:Wj};const Lm=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;function Yj(){const e=this,{realIndex:t,initialized:n,params:r,el:i}=e,a=r.breakpoints;if(!a||a&&Object.keys(a).length===0)return;const o=e.getBreakpoint(a,e.params.breakpointsBase,e.el);if(!o||e.currentBreakpoint===o)return;const l=(o in a?a[o]:void 0)||e.originalParams,d=Lm(e,r),u=Lm(e,l),f=e.params.grabCursor,p=l.grabCursor,g=r.enabled;d&&!u?(i.classList.remove(`${r.containerModifierClass}grid`,`${r.containerModifierClass}grid-column`),e.emitContainerClasses()):!d&&u&&(i.classList.add(`${r.containerModifierClass}grid`),(l.grid.fill&&l.grid.fill==="column"||!l.grid.fill&&r.grid.fill==="column")&&i.classList.add(`${r.containerModifierClass}grid-column`),e.emitContainerClasses()),f&&!p?e.unsetGrabCursor():!f&&p&&e.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(m=>{if(typeof l[m]>"u")return;const w=r[m]&&r[m].enabled,S=l[m]&&l[m].enabled;w&&!S&&e[m].disable(),!w&&S&&e[m].enable()});const x=l.direction&&l.direction!==r.direction,y=r.loop&&(l.slidesPerView!==r.slidesPerView||x),b=r.loop;x&&n&&e.changeDirection(),jt(e.params,l);const v=e.params.enabled,h=e.params.loop;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),g&&!v?e.disable():!g&&v&&e.enable(),e.currentBreakpoint=o,e.emit("_beforeBreakpoint",l),n&&(y?(e.loopDestroy(),e.loopCreate(t),e.updateSlides()):!b&&h?(e.loopCreate(t),e.updateSlides()):b&&!h&&e.loopDestroy()),e.emit("breakpoint",l)}function Kj(e,t,n){if(t===void 0&&(t="window"),!e||t==="container"&&!n)return;let r=!1;const i=Gt(),a=t==="window"?i.innerHeight:n.clientHeight,o=Object.keys(e).map(s=>{if(typeof s=="string"&&s.indexOf("@")===0){const l=parseFloat(s.substr(1));return{value:a*l,point:s}}return{value:s,point:s}});o.sort((s,l)=>parseInt(s.value,10)-parseInt(l.value,10));for(let s=0;s<o.length;s+=1){const{point:l,value:d}=o[s];t==="window"?i.matchMedia(`(min-width: ${d}px)`).matches&&(r=l):d<=n.clientWidth&&(r=l)}return r||"max"}var Xj={setBreakpoint:Yj,getBreakpoint:Kj};function Qj(e,t){const n=[];return e.forEach(r=>{typeof r=="object"?Object.keys(r).forEach(i=>{r[i]&&n.push(t+i)}):typeof r=="string"&&n.push(t+r)}),n}function Zj(){const e=this,{classNames:t,params:n,rtl:r,el:i,device:a}=e,o=Qj(["initialized",n.direction,{"free-mode":e.params.freeMode&&n.freeMode.enabled},{autoheight:n.autoHeight},{rtl:r},{grid:n.grid&&n.grid.rows>1},{"grid-column":n.grid&&n.grid.rows>1&&n.grid.fill==="column"},{android:a.android},{ios:a.ios},{"css-mode":n.cssMode},{centered:n.cssMode&&n.centeredSlides},{"watch-progress":n.watchSlidesProgress}],n.containerModifierClass);t.push(...o),i.classList.add(...t),e.emitContainerClasses()}function Jj(){const e=this,{el:t,classNames:n}=e;!t||typeof t=="string"||(t.classList.remove(...n),e.emitContainerClasses())}var eC={addClasses:Zj,removeClasses:Jj};function tC(){const e=this,{isLocked:t,params:n}=e,{slidesOffsetBefore:r}=n;if(r){const i=e.slides.length-1,a=e.slidesGrid[i]+e.slidesSizesGrid[i]+r*2;e.isLocked=e.size>a}else e.isLocked=e.snapGrid.length===1;n.allowSlideNext===!0&&(e.allowSlideNext=!e.isLocked),n.allowSlidePrev===!0&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}var nC={checkOverflow:tC},Su={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function rC(e,t){return function(r){r===void 0&&(r={});const i=Object.keys(r)[0],a=r[i];if(typeof a!="object"||a===null){jt(t,r);return}if(e[i]===!0&&(e[i]={enabled:!0}),i==="navigation"&&e[i]&&e[i].enabled&&!e[i].prevEl&&!e[i].nextEl&&(e[i].auto=!0),["pagination","scrollbar"].indexOf(i)>=0&&e[i]&&e[i].enabled&&!e[i].el&&(e[i].auto=!0),!(i in e&&"enabled"in a)){jt(t,r);return}typeof e[i]=="object"&&!("enabled"in e[i])&&(e[i].enabled=!0),e[i]||(e[i]={enabled:!1}),jt(t,r)}}const Wc={eventsEmitter:ej,update:uj,translate:vj,transition:bj,slide:Pj,loop:Mj,grabCursor:Ij,events:qj,breakpoints:Xj,checkOverflow:nC,classes:eC},qc={};let hp=class xn{constructor(){let t,n;for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];i.length===1&&i[0].constructor&&Object.prototype.toString.call(i[0]).slice(8,-1)==="Object"?n=i[0]:[t,n]=i,n||(n={}),n=jt({},n),t&&!n.el&&(n.el=t);const o=zn();if(n.el&&typeof n.el=="string"&&o.querySelectorAll(n.el).length>1){const u=[];return o.querySelectorAll(n.el).forEach(f=>{const p=jt({},n,{el:f});u.push(new xn(p))}),u}const s=this;s.__swiper__=!0,s.support=Oy(),s.device=Iy({userAgent:n.userAgent}),s.browser=Q7(),s.eventsListeners={},s.eventsAnyListeners=[],s.modules=[...s.__modules__],n.modules&&Array.isArray(n.modules)&&s.modules.push(...n.modules);const l={};s.modules.forEach(u=>{u({params:n,swiper:s,extendParams:rC(n,l),on:s.on.bind(s),once:s.once.bind(s),off:s.off.bind(s),emit:s.emit.bind(s)})});const d=jt({},Su,l);return s.params=jt({},d,qc,n),s.originalParams=jt({},s.params),s.passedParams=jt({},n),s.params&&s.params.on&&Object.keys(s.params.on).forEach(u=>{s.on(u,s.params.on[u])}),s.params&&s.params.onAny&&s.onAny(s.params.onAny),Object.assign(s,{enabled:s.params.enabled,el:t,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return s.params.direction==="horizontal"},isVertical(){return s.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:s.params.allowSlideNext,allowSlidePrev:s.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:s.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:s.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),s.emit("_swiper"),s.params.init&&s.init(),s}getDirectionLabel(t){return this.isHorizontal()?t:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[t]}getSlideIndex(t){const{slidesEl:n,params:r}=this,i=cn(n,`.${r.slideClass}, swiper-slide`),a=il(i[0]);return il(t)-a}getSlideIndexByData(t){return this.getSlideIndex(this.slides.filter(n=>n.getAttribute("data-swiper-slide-index")*1===t)[0])}recalcSlides(){const t=this,{slidesEl:n,params:r}=t;t.slides=cn(n,`.${r.slideClass}, swiper-slide`)}enable(){const t=this;t.enabled||(t.enabled=!0,t.params.grabCursor&&t.setGrabCursor(),t.emit("enable"))}disable(){const t=this;t.enabled&&(t.enabled=!1,t.params.grabCursor&&t.unsetGrabCursor(),t.emit("disable"))}setProgress(t,n){const r=this;t=Math.min(Math.max(t,0),1);const i=r.minTranslate(),o=(r.maxTranslate()-i)*t+i;r.translateTo(o,typeof n>"u"?0:n),r.updateActiveIndex(),r.updateSlidesClasses()}emitContainerClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=t.el.className.split(" ").filter(r=>r.indexOf("swiper")===0||r.indexOf(t.params.containerModifierClass)===0);t.emit("_containerClasses",n.join(" "))}getSlideClasses(t){const n=this;return n.destroyed?"":t.className.split(" ").filter(r=>r.indexOf("swiper-slide")===0||r.indexOf(n.params.slideClass)===0).join(" ")}emitSlidesClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=[];t.slides.forEach(r=>{const i=t.getSlideClasses(r);n.push({slideEl:r,classNames:i}),t.emit("_slideClass",r,i)}),t.emit("_slideClasses",n)}slidesPerViewDynamic(t,n){t===void 0&&(t="current"),n===void 0&&(n=!1);const r=this,{params:i,slides:a,slidesGrid:o,slidesSizesGrid:s,size:l,activeIndex:d}=r;let u=1;if(typeof i.slidesPerView=="number")return i.slidesPerView;if(i.centeredSlides){let f=a[d]?Math.ceil(a[d].swiperSlideSize):0,p;for(let g=d+1;g<a.length;g+=1)a[g]&&!p&&(f+=Math.ceil(a[g].swiperSlideSize),u+=1,f>l&&(p=!0));for(let g=d-1;g>=0;g-=1)a[g]&&!p&&(f+=a[g].swiperSlideSize,u+=1,f>l&&(p=!0))}else if(t==="current")for(let f=d+1;f<a.length;f+=1)(n?o[f]+s[f]-o[d]<l:o[f]-o[d]<l)&&(u+=1);else for(let f=d-1;f>=0;f-=1)o[d]-o[f]<l&&(u+=1);return u}update(){const t=this;if(!t||t.destroyed)return;const{snapGrid:n,params:r}=t;r.breakpoints&&t.setBreakpoint(),[...t.el.querySelectorAll('[loading="lazy"]')].forEach(o=>{o.complete&&hs(t,o)}),t.updateSize(),t.updateSlides(),t.updateProgress(),t.updateSlidesClasses();function i(){const o=t.rtlTranslate?t.translate*-1:t.translate,s=Math.min(Math.max(o,t.maxTranslate()),t.minTranslate());t.setTranslate(s),t.updateActiveIndex(),t.updateSlidesClasses()}let a;if(r.freeMode&&r.freeMode.enabled&&!r.cssMode)i(),r.autoHeight&&t.updateAutoHeight();else{if((r.slidesPerView==="auto"||r.slidesPerView>1)&&t.isEnd&&!r.centeredSlides){const o=t.virtual&&r.virtual.enabled?t.virtual.slides:t.slides;a=t.slideTo(o.length-1,0,!1,!0)}else a=t.slideTo(t.activeIndex,0,!1,!0);a||i()}r.watchOverflow&&n!==t.snapGrid&&t.checkOverflow(),t.emit("update")}changeDirection(t,n){n===void 0&&(n=!0);const r=this,i=r.params.direction;return t||(t=i==="horizontal"?"vertical":"horizontal"),t===i||t!=="horizontal"&&t!=="vertical"||(r.el.classList.remove(`${r.params.containerModifierClass}${i}`),r.el.classList.add(`${r.params.containerModifierClass}${t}`),r.emitContainerClasses(),r.params.direction=t,r.slides.forEach(a=>{t==="vertical"?a.style.width="":a.style.height=""}),r.emit("changeDirection"),n&&r.update()),r}changeLanguageDirection(t){const n=this;n.rtl&&t==="rtl"||!n.rtl&&t==="ltr"||(n.rtl=t==="rtl",n.rtlTranslate=n.params.direction==="horizontal"&&n.rtl,n.rtl?(n.el.classList.add(`${n.params.containerModifierClass}rtl`),n.el.dir="rtl"):(n.el.classList.remove(`${n.params.containerModifierClass}rtl`),n.el.dir="ltr"),n.update())}mount(t){const n=this;if(n.mounted)return!0;let r=t||n.params.el;if(typeof r=="string"&&(r=document.querySelector(r)),!r)return!1;r.swiper=n,r.parentNode&&r.parentNode.host&&r.parentNode.host.nodeName===n.params.swiperElementNodeName.toUpperCase()&&(n.isElement=!0);const i=()=>`.${(n.params.wrapperClass||"").trim().split(" ").join(".")}`;let o=r&&r.shadowRoot&&r.shadowRoot.querySelector?r.shadowRoot.querySelector(i()):cn(r,i())[0];return!o&&n.params.createElements&&(o=ao("div",n.params.wrapperClass),r.append(o),cn(r,`.${n.params.slideClass}`).forEach(s=>{o.append(s)})),Object.assign(n,{el:r,wrapperEl:o,slidesEl:n.isElement&&!r.parentNode.host.slideSlots?r.parentNode.host:o,hostEl:n.isElement?r.parentNode.host:r,mounted:!0,rtl:r.dir.toLowerCase()==="rtl"||Zn(r,"direction")==="rtl",rtlTranslate:n.params.direction==="horizontal"&&(r.dir.toLowerCase()==="rtl"||Zn(r,"direction")==="rtl"),wrongRTL:Zn(o,"display")==="-webkit-box"}),!0}init(t){const n=this;if(n.initialized||n.mount(t)===!1)return n;n.emit("beforeInit"),n.params.breakpoints&&n.setBreakpoint(),n.addClasses(),n.updateSize(),n.updateSlides(),n.params.watchOverflow&&n.checkOverflow(),n.params.grabCursor&&n.enabled&&n.setGrabCursor(),n.params.loop&&n.virtual&&n.params.virtual.enabled?n.slideTo(n.params.initialSlide+n.virtual.slidesBefore,0,n.params.runCallbacksOnInit,!1,!0):n.slideTo(n.params.initialSlide,0,n.params.runCallbacksOnInit,!1,!0),n.params.loop&&n.loopCreate(),n.attachEvents();const i=[...n.el.querySelectorAll('[loading="lazy"]')];return n.isElement&&i.push(...n.hostEl.querySelectorAll('[loading="lazy"]')),i.forEach(a=>{a.complete?hs(n,a):a.addEventListener("load",o=>{hs(n,o.target)})}),bu(n),n.initialized=!0,bu(n),n.emit("init"),n.emit("afterInit"),n}destroy(t,n){t===void 0&&(t=!0),n===void 0&&(n=!0);const r=this,{params:i,el:a,wrapperEl:o,slides:s}=r;return typeof r.params>"u"||r.destroyed||(r.emit("beforeDestroy"),r.initialized=!1,r.detachEvents(),i.loop&&r.loopDestroy(),n&&(r.removeClasses(),a&&typeof a!="string"&&a.removeAttribute("style"),o&&o.removeAttribute("style"),s&&s.length&&s.forEach(l=>{l.classList.remove(i.slideVisibleClass,i.slideFullyVisibleClass,i.slideActiveClass,i.slideNextClass,i.slidePrevClass),l.removeAttribute("style"),l.removeAttribute("data-swiper-slide-index")})),r.emit("destroy"),Object.keys(r.eventsListeners).forEach(l=>{r.off(l)}),t!==!1&&(r.el&&typeof r.el!="string"&&(r.el.swiper=null),N7(r)),r.destroyed=!0),null}static extendDefaults(t){jt(qc,t)}static get extendedDefaults(){return qc}static get defaults(){return Su}static installModule(t){xn.prototype.__modules__||(xn.prototype.__modules__=[]);const n=xn.prototype.__modules__;typeof t=="function"&&n.indexOf(t)<0&&n.push(t)}static use(t){return Array.isArray(t)?(t.forEach(n=>xn.installModule(n)),xn):(xn.installModule(t),xn)}};Object.keys(Wc).forEach(e=>{Object.keys(Wc[e]).forEach(t=>{hp.prototype[t]=Wc[e][t]})});hp.use([Z7,J7]);const Vy=["eventsPrefix","injectStyles","injectStylesUrls","modules","init","_direction","oneWayMovement","swiperElementNodeName","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","breakpointsBase","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_loop","loopAdditionalSlides","loopAddBlankSlides","loopPreventsSliding","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideActiveClass","slideVisibleClass","slideFullyVisibleClass","slideNextClass","slidePrevClass","slideBlankClass","wrapperClass","lazyPreloaderClass","lazyPreloadPrevNext","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom","control"];function Br(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"&&!e.__swiper__}function Ti(e,t){const n=["__proto__","constructor","prototype"];Object.keys(t).filter(r=>n.indexOf(r)<0).forEach(r=>{typeof e[r]>"u"?e[r]=t[r]:Br(t[r])&&Br(e[r])&&Object.keys(t[r]).length>0?t[r].__swiper__?e[r]=t[r]:Ti(e[r],t[r]):e[r]=t[r]})}function Ny(e){return e===void 0&&(e={}),e.navigation&&typeof e.navigation.nextEl>"u"&&typeof e.navigation.prevEl>"u"}function Fy(e){return e===void 0&&(e={}),e.pagination&&typeof e.pagination.el>"u"}function $y(e){return e===void 0&&(e={}),e.scrollbar&&typeof e.scrollbar.el>"u"}function By(e){e===void 0&&(e="");const t=e.split(" ").map(r=>r.trim()).filter(r=>!!r),n=[];return t.forEach(r=>{n.indexOf(r)<0&&n.push(r)}),n.join(" ")}function iC(e){return e===void 0&&(e=""),e?e.includes("swiper-wrapper")?e:`swiper-wrapper ${e}`:"swiper-wrapper"}function aC(e){let{swiper:t,slides:n,passedParams:r,changedParams:i,nextEl:a,prevEl:o,scrollbarEl:s,paginationEl:l}=e;const d=i.filter(z=>z!=="children"&&z!=="direction"&&z!=="wrapperClass"),{params:u,pagination:f,navigation:p,scrollbar:g,virtual:x,thumbs:y}=t;let b,v,h,m,w,S,C,A;i.includes("thumbs")&&r.thumbs&&r.thumbs.swiper&&u.thumbs&&!u.thumbs.swiper&&(b=!0),i.includes("controller")&&r.controller&&r.controller.control&&u.controller&&!u.controller.control&&(v=!0),i.includes("pagination")&&r.pagination&&(r.pagination.el||l)&&(u.pagination||u.pagination===!1)&&f&&!f.el&&(h=!0),i.includes("scrollbar")&&r.scrollbar&&(r.scrollbar.el||s)&&(u.scrollbar||u.scrollbar===!1)&&g&&!g.el&&(m=!0),i.includes("navigation")&&r.navigation&&(r.navigation.prevEl||o)&&(r.navigation.nextEl||a)&&(u.navigation||u.navigation===!1)&&p&&!p.prevEl&&!p.nextEl&&(w=!0);const T=z=>{t[z]&&(t[z].destroy(),z==="navigation"?(t.isElement&&(t[z].prevEl.remove(),t[z].nextEl.remove()),u[z].prevEl=void 0,u[z].nextEl=void 0,t[z].prevEl=void 0,t[z].nextEl=void 0):(t.isElement&&t[z].el.remove(),u[z].el=void 0,t[z].el=void 0))};i.includes("loop")&&t.isElement&&(u.loop&&!r.loop?S=!0:!u.loop&&r.loop?C=!0:A=!0),d.forEach(z=>{if(Br(u[z])&&Br(r[z]))Object.assign(u[z],r[z]),(z==="navigation"||z==="pagination"||z==="scrollbar")&&"enabled"in r[z]&&!r[z].enabled&&T(z);else{const E=r[z];(E===!0||E===!1)&&(z==="navigation"||z==="pagination"||z==="scrollbar")?E===!1&&T(z):u[z]=r[z]}}),d.includes("controller")&&!v&&t.controller&&t.controller.control&&u.controller&&u.controller.control&&(t.controller.control=u.controller.control),i.includes("children")&&n&&x&&u.virtual.enabled?(x.slides=n,x.update(!0)):i.includes("virtual")&&x&&u.virtual.enabled&&(n&&(x.slides=n),x.update(!0)),i.includes("children")&&n&&u.loop&&(A=!0),b&&y.init()&&y.update(!0),v&&(t.controller.control=u.controller.control),h&&(t.isElement&&(!l||typeof l=="string")&&(l=document.createElement("div"),l.classList.add("swiper-pagination"),l.part.add("pagination"),t.el.appendChild(l)),l&&(u.pagination.el=l),f.init(),f.render(),f.update()),m&&(t.isElement&&(!s||typeof s=="string")&&(s=document.createElement("div"),s.classList.add("swiper-scrollbar"),s.part.add("scrollbar"),t.el.appendChild(s)),s&&(u.scrollbar.el=s),g.init(),g.updateSize(),g.setTranslate()),w&&(t.isElement&&((!a||typeof a=="string")&&(a=document.createElement("div"),a.classList.add("swiper-button-next"),a.innerHTML=t.hostEl.constructor.nextButtonSvg,a.part.add("button-next"),t.el.appendChild(a)),(!o||typeof o=="string")&&(o=document.createElement("div"),o.classList.add("swiper-button-prev"),o.innerHTML=t.hostEl.constructor.prevButtonSvg,o.part.add("button-prev"),t.el.appendChild(o))),a&&(u.navigation.nextEl=a),o&&(u.navigation.prevEl=o),p.init(),p.update()),i.includes("allowSlideNext")&&(t.allowSlideNext=r.allowSlideNext),i.includes("allowSlidePrev")&&(t.allowSlidePrev=r.allowSlidePrev),i.includes("direction")&&t.changeDirection(r.direction,!1),(S||A)&&t.loopDestroy(),(C||A)&&t.loopCreate(),t.update()}function oC(e,t){e===void 0&&(e={}),t===void 0&&(t=!0);const n={on:{}},r={},i={};Ti(n,Su),n._emitClasses=!0,n.init=!1;const a={},o=Vy.map(l=>l.replace(/_/,"")),s=Object.assign({},e);return Object.keys(s).forEach(l=>{typeof e[l]>"u"||(o.indexOf(l)>=0?Br(e[l])?(n[l]={},i[l]={},Ti(n[l],e[l]),Ti(i[l],e[l])):(n[l]=e[l],i[l]=e[l]):l.search(/on[A-Z]/)===0&&typeof e[l]=="function"?t?r[`${l[2].toLowerCase()}${l.substr(3)}`]=e[l]:n.on[`${l[2].toLowerCase()}${l.substr(3)}`]=e[l]:a[l]=e[l])}),["navigation","pagination","scrollbar"].forEach(l=>{n[l]===!0&&(n[l]={}),n[l]===!1&&delete n[l]}),{params:n,passedParams:i,rest:a,events:r}}function sC(e,t){let{el:n,nextEl:r,prevEl:i,paginationEl:a,scrollbarEl:o,swiper:s}=e;Ny(t)&&r&&i&&(s.params.navigation.nextEl=r,s.originalParams.navigation.nextEl=r,s.params.navigation.prevEl=i,s.originalParams.navigation.prevEl=i),Fy(t)&&a&&(s.params.pagination.el=a,s.originalParams.pagination.el=a),$y(t)&&o&&(s.params.scrollbar.el=o,s.originalParams.scrollbar.el=o),s.init(n)}function lC(e,t,n,r,i){const a=[];if(!t)return a;const o=l=>{a.indexOf(l)<0&&a.push(l)};if(n&&r){const l=r.map(i),d=n.map(i);l.join("")!==d.join("")&&o("children"),r.length!==n.length&&o("children")}return Vy.filter(l=>l[0]==="_").map(l=>l.replace(/_/,"")).forEach(l=>{if(l in e&&l in t)if(Br(e[l])&&Br(t[l])){const d=Object.keys(e[l]),u=Object.keys(t[l]);d.length!==u.length?o(l):(d.forEach(f=>{e[l][f]!==t[l][f]&&o(l)}),u.forEach(f=>{e[l][f]!==t[l][f]&&o(l)}))}else e[l]!==t[l]&&o(l)}),a}const cC=e=>{!e||e.destroyed||!e.params.virtual||e.params.virtual&&!e.params.virtual.enabled||(e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.parallax&&e.params.parallax&&e.params.parallax.enabled&&e.parallax.setTranslate())};function al(){return al=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},al.apply(this,arguments)}function Hy(e){return e.type&&e.type.displayName&&e.type.displayName.includes("SwiperSlide")}function Uy(e){const t=[];return J.Children.toArray(e).forEach(n=>{Hy(n)?t.push(n):n.props&&n.props.children&&Uy(n.props.children).forEach(r=>t.push(r))}),t}function dC(e){const t=[],n={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]};return J.Children.toArray(e).forEach(r=>{if(Hy(r))t.push(r);else if(r.props&&r.props.slot&&n[r.props.slot])n[r.props.slot].push(r);else if(r.props&&r.props.children){const i=Uy(r.props.children);i.length>0?i.forEach(a=>t.push(a)):n["container-end"].push(r)}else n["container-end"].push(r)}),{slides:t,slots:n}}function uC(e,t,n){if(!n)return null;const r=u=>{let f=u;return u<0?f=t.length+u:f>=t.length&&(f=f-t.length),f},i=e.isHorizontal()?{[e.rtlTranslate?"right":"left"]:`${n.offset}px`}:{top:`${n.offset}px`},{from:a,to:o}=n,s=e.params.loop?-t.length:0,l=e.params.loop?t.length*2:t.length,d=[];for(let u=s;u<l;u+=1)u>=a&&u<=o&&d.push(t[r(u)]);return d.map((u,f)=>J.cloneElement(u,{swiper:e,style:i,key:u.props.virtualIndex||u.key||`slide-${f}`}))}function La(e,t){return typeof window>"u"?j.useEffect(e,t):j.useLayoutEffect(e,t)}const Om=j.createContext(null),fC=j.createContext(null),Jt=j.forwardRef(function(e,t){let{className:n,tag:r="div",wrapperTag:i="div",children:a,onSwiper:o,...s}=e===void 0?{}:e,l=!1;const[d,u]=j.useState("swiper"),[f,p]=j.useState(null),[g,x]=j.useState(!1),y=j.useRef(!1),b=j.useRef(null),v=j.useRef(null),h=j.useRef(null),m=j.useRef(null),w=j.useRef(null),S=j.useRef(null),C=j.useRef(null),A=j.useRef(null),{params:T,passedParams:z,rest:E,events:P}=oC(s),{slides:_,slots:I}=dC(a),R=()=>{x(!g)};Object.assign(T.on,{_containerClasses(V,$){u($)}});const U=()=>{Object.assign(T.on,P),l=!0;const V={...T};if(delete V.wrapperClass,v.current=new hp(V),v.current.virtual&&v.current.params.virtual.enabled){v.current.virtual.slides=_;const $={cache:!1,slides:_,renderExternal:p,renderExternalUpdate:!1};Ti(v.current.params.virtual,$),Ti(v.current.originalParams.virtual,$)}};b.current||U(),v.current&&v.current.on("_beforeBreakpoint",R);const Q=()=>{l||!P||!v.current||Object.keys(P).forEach(V=>{v.current.on(V,P[V])})},Y=()=>{!P||!v.current||Object.keys(P).forEach(V=>{v.current.off(V,P[V])})};j.useEffect(()=>()=>{v.current&&v.current.off("_beforeBreakpoint",R)}),j.useEffect(()=>{!y.current&&v.current&&(v.current.emitSlidesClasses(),y.current=!0)}),La(()=>{if(t&&(t.current=b.current),!!b.current)return v.current.destroyed&&U(),sC({el:b.current,nextEl:w.current,prevEl:S.current,paginationEl:C.current,scrollbarEl:A.current,swiper:v.current},T),o&&!v.current.destroyed&&o(v.current),()=>{v.current&&!v.current.destroyed&&v.current.destroy(!0,!1)}},[]),La(()=>{Q();const V=lC(z,h.current,_,m.current,$=>$.key);return h.current=z,m.current=_,V.length&&v.current&&!v.current.destroyed&&aC({swiper:v.current,slides:_,passedParams:z,changedParams:V,nextEl:w.current,prevEl:S.current,scrollbarEl:A.current,paginationEl:C.current}),()=>{Y()}}),La(()=>{cC(v.current)},[f]);function M(){return T.virtual?uC(v.current,_,f):_.map((V,$)=>J.cloneElement(V,{swiper:v.current,swiperSlideIndex:$}))}return J.createElement(r,al({ref:b,className:By(`${d}${n?` ${n}`:""}`)},E),J.createElement(fC.Provider,{value:v.current},I["container-start"],J.createElement(i,{className:iC(T.wrapperClass)},I["wrapper-start"],M(),I["wrapper-end"]),Ny(T)&&J.createElement(J.Fragment,null,J.createElement("div",{ref:S,className:"swiper-button-prev"}),J.createElement("div",{ref:w,className:"swiper-button-next"})),$y(T)&&J.createElement("div",{ref:A,className:"swiper-scrollbar"}),Fy(T)&&J.createElement("div",{ref:C,className:"swiper-pagination"}),I["container-end"]))});Jt.displayName="Swiper";const en=j.forwardRef(function(e,t){let{tag:n="div",children:r,className:i="",swiper:a,zoom:o,lazy:s,virtualIndex:l,swiperSlideIndex:d,...u}=e===void 0?{}:e;const f=j.useRef(null),[p,g]=j.useState("swiper-slide"),[x,y]=j.useState(!1);function b(w,S,C){S===f.current&&g(C)}La(()=>{if(typeof d<"u"&&(f.current.swiperSlideIndex=d),t&&(t.current=f.current),!(!f.current||!a)){if(a.destroyed){p!=="swiper-slide"&&g("swiper-slide");return}return a.on("_slideClass",b),()=>{a&&a.off("_slideClass",b)}}}),La(()=>{a&&f.current&&!a.destroyed&&g(a.getSlideClasses(f.current))},[a]);const v={isActive:p.indexOf("swiper-slide-active")>=0,isVisible:p.indexOf("swiper-slide-visible")>=0,isPrev:p.indexOf("swiper-slide-prev")>=0,isNext:p.indexOf("swiper-slide-next")>=0},h=()=>typeof r=="function"?r(v):r,m=()=>{y(!0)};return J.createElement(n,al({ref:f,className:By(`${p}${i?` ${i}`:""}`),"data-swiper-slide-index":l,onLoad:m},u),o&&J.createElement(Om.Provider,{value:v},J.createElement("div",{className:"swiper-zoom-container","data-swiper-zoom":typeof o=="number"?o:void 0},h(),s&&!x&&J.createElement("div",{className:"swiper-lazy-preloader"}))),!o&&J.createElement(Om.Provider,{value:v},h(),s&&!x&&J.createElement("div",{className:"swiper-lazy-preloader"})))});en.displayName="SwiperSlide";function Wy(e,t,n,r){return e.params.createElements&&Object.keys(r).forEach(i=>{if(!n[i]&&n.auto===!0){let a=cn(e.el,`.${r[i]}`)[0];a||(a=ao("div",r[i]),a.className=r[i],e.el.append(a)),n[i]=a,t[i]=a}}),n}function vr(e){let{swiper:t,extendParams:n,on:r,emit:i}=e;n({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),t.navigation={nextEl:null,prevEl:null};function a(x){let y;return x&&typeof x=="string"&&t.isElement&&(y=t.el.querySelector(x)||t.hostEl.querySelector(x),y)?y:(x&&(typeof x=="string"&&(y=[...document.querySelectorAll(x)]),t.params.uniqueNavElements&&typeof x=="string"&&y&&y.length>1&&t.el.querySelectorAll(x).length===1?y=t.el.querySelector(x):y&&y.length===1&&(y=y[0])),x&&!y?x:y)}function o(x,y){const b=t.params.navigation;x=Ue(x),x.forEach(v=>{v&&(v.classList[y?"add":"remove"](...b.disabledClass.split(" ")),v.tagName==="BUTTON"&&(v.disabled=y),t.params.watchOverflow&&t.enabled&&v.classList[t.isLocked?"add":"remove"](b.lockClass))})}function s(){const{nextEl:x,prevEl:y}=t.navigation;if(t.params.loop){o(y,!1),o(x,!1);return}o(y,t.isBeginning&&!t.params.rewind),o(x,t.isEnd&&!t.params.rewind)}function l(x){x.preventDefault(),!(t.isBeginning&&!t.params.loop&&!t.params.rewind)&&(t.slidePrev(),i("navigationPrev"))}function d(x){x.preventDefault(),!(t.isEnd&&!t.params.loop&&!t.params.rewind)&&(t.slideNext(),i("navigationNext"))}function u(){const x=t.params.navigation;if(t.params.navigation=Wy(t,t.originalParams.navigation,t.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(x.nextEl||x.prevEl))return;let y=a(x.nextEl),b=a(x.prevEl);Object.assign(t.navigation,{nextEl:y,prevEl:b}),y=Ue(y),b=Ue(b);const v=(h,m)=>{h&&h.addEventListener("click",m==="next"?d:l),!t.enabled&&h&&h.classList.add(...x.lockClass.split(" "))};y.forEach(h=>v(h,"next")),b.forEach(h=>v(h,"prev"))}function f(){let{nextEl:x,prevEl:y}=t.navigation;x=Ue(x),y=Ue(y);const b=(v,h)=>{v.removeEventListener("click",h==="next"?d:l),v.classList.remove(...t.params.navigation.disabledClass.split(" "))};x.forEach(v=>b(v,"next")),y.forEach(v=>b(v,"prev"))}r("init",()=>{t.params.navigation.enabled===!1?g():(u(),s())}),r("toEdge fromEdge lock unlock",()=>{s()}),r("destroy",()=>{f()}),r("enable disable",()=>{let{nextEl:x,prevEl:y}=t.navigation;if(x=Ue(x),y=Ue(y),t.enabled){s();return}[...x,...y].filter(b=>!!b).forEach(b=>b.classList.add(t.params.navigation.lockClass))}),r("click",(x,y)=>{let{nextEl:b,prevEl:v}=t.navigation;b=Ue(b),v=Ue(v);const h=y.target;let m=v.includes(h)||b.includes(h);if(t.isElement&&!m){const w=y.path||y.composedPath&&y.composedPath();w&&(m=w.find(S=>b.includes(S)||v.includes(S)))}if(t.params.navigation.hideOnClick&&!m){if(t.pagination&&t.params.pagination&&t.params.pagination.clickable&&(t.pagination.el===h||t.pagination.el.contains(h)))return;let w;b.length?w=b[0].classList.contains(t.params.navigation.hiddenClass):v.length&&(w=v[0].classList.contains(t.params.navigation.hiddenClass)),i(w===!0?"navigationShow":"navigationHide"),[...b,...v].filter(S=>!!S).forEach(S=>S.classList.toggle(t.params.navigation.hiddenClass))}});const p=()=>{t.el.classList.remove(...t.params.navigation.navigationDisabledClass.split(" ")),u(),s()},g=()=>{t.el.classList.add(...t.params.navigation.navigationDisabledClass.split(" ")),f()};Object.assign(t.navigation,{enable:p,disable:g,update:s,init:u,destroy:f})}function ua(e){return e===void 0&&(e=""),`.${e.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`}function xr(e){let{swiper:t,extendParams:n,on:r,emit:i}=e;const a="swiper-pagination";n({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:h=>h,formatFractionTotal:h=>h,bulletClass:`${a}-bullet`,bulletActiveClass:`${a}-bullet-active`,modifierClass:`${a}-`,currentClass:`${a}-current`,totalClass:`${a}-total`,hiddenClass:`${a}-hidden`,progressbarFillClass:`${a}-progressbar-fill`,progressbarOppositeClass:`${a}-progressbar-opposite`,clickableClass:`${a}-clickable`,lockClass:`${a}-lock`,horizontalClass:`${a}-horizontal`,verticalClass:`${a}-vertical`,paginationDisabledClass:`${a}-disabled`}}),t.pagination={el:null,bullets:[]};let o,s=0;function l(){return!t.params.pagination.el||!t.pagination.el||Array.isArray(t.pagination.el)&&t.pagination.el.length===0}function d(h,m){const{bulletActiveClass:w}=t.params.pagination;h&&(h=h[`${m==="prev"?"previous":"next"}ElementSibling`],h&&(h.classList.add(`${w}-${m}`),h=h[`${m==="prev"?"previous":"next"}ElementSibling`],h&&h.classList.add(`${w}-${m}-${m}`)))}function u(h,m,w){if(h=h%w,m=m%w,m===h+1)return"next";if(m===h-1)return"previous"}function f(h){const m=h.target.closest(ua(t.params.pagination.bulletClass));if(!m)return;h.preventDefault();const w=il(m)*t.params.slidesPerGroup;if(t.params.loop){if(t.realIndex===w)return;const S=u(t.realIndex,w,t.slides.length);S==="next"?t.slideNext():S==="previous"?t.slidePrev():t.slideToLoop(w)}else t.slideTo(w)}function p(){const h=t.rtl,m=t.params.pagination;if(l())return;let w=t.pagination.el;w=Ue(w);let S,C;const A=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.slides.length,T=t.params.loop?Math.ceil(A/t.params.slidesPerGroup):t.snapGrid.length;if(t.params.loop?(C=t.previousRealIndex||0,S=t.params.slidesPerGroup>1?Math.floor(t.realIndex/t.params.slidesPerGroup):t.realIndex):typeof t.snapIndex<"u"?(S=t.snapIndex,C=t.previousSnapIndex):(C=t.previousIndex||0,S=t.activeIndex||0),m.type==="bullets"&&t.pagination.bullets&&t.pagination.bullets.length>0){const z=t.pagination.bullets;let E,P,_;if(m.dynamicBullets&&(o=wu(z[0],t.isHorizontal()?"width":"height"),w.forEach(I=>{I.style[t.isHorizontal()?"width":"height"]=`${o*(m.dynamicMainBullets+4)}px`}),m.dynamicMainBullets>1&&C!==void 0&&(s+=S-(C||0),s>m.dynamicMainBullets-1?s=m.dynamicMainBullets-1:s<0&&(s=0)),E=Math.max(S-s,0),P=E+(Math.min(z.length,m.dynamicMainBullets)-1),_=(P+E)/2),z.forEach(I=>{const R=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(U=>`${m.bulletActiveClass}${U}`)].map(U=>typeof U=="string"&&U.includes(" ")?U.split(" "):U).flat();I.classList.remove(...R)}),w.length>1)z.forEach(I=>{const R=il(I);R===S?I.classList.add(...m.bulletActiveClass.split(" ")):t.isElement&&I.setAttribute("part","bullet"),m.dynamicBullets&&(R>=E&&R<=P&&I.classList.add(...`${m.bulletActiveClass}-main`.split(" ")),R===E&&d(I,"prev"),R===P&&d(I,"next"))});else{const I=z[S];if(I&&I.classList.add(...m.bulletActiveClass.split(" ")),t.isElement&&z.forEach((R,U)=>{R.setAttribute("part",U===S?"bullet-active":"bullet")}),m.dynamicBullets){const R=z[E],U=z[P];for(let Q=E;Q<=P;Q+=1)z[Q]&&z[Q].classList.add(...`${m.bulletActiveClass}-main`.split(" "));d(R,"prev"),d(U,"next")}}if(m.dynamicBullets){const I=Math.min(z.length,m.dynamicMainBullets+4),R=(o*I-o)/2-_*o,U=h?"right":"left";z.forEach(Q=>{Q.style[t.isHorizontal()?U:"top"]=`${R}px`})}}w.forEach((z,E)=>{if(m.type==="fraction"&&(z.querySelectorAll(ua(m.currentClass)).forEach(P=>{P.textContent=m.formatFractionCurrent(S+1)}),z.querySelectorAll(ua(m.totalClass)).forEach(P=>{P.textContent=m.formatFractionTotal(T)})),m.type==="progressbar"){let P;m.progressbarOpposite?P=t.isHorizontal()?"vertical":"horizontal":P=t.isHorizontal()?"horizontal":"vertical";const _=(S+1)/T;let I=1,R=1;P==="horizontal"?I=_:R=_,z.querySelectorAll(ua(m.progressbarFillClass)).forEach(U=>{U.style.transform=`translate3d(0,0,0) scaleX(${I}) scaleY(${R})`,U.style.transitionDuration=`${t.params.speed}ms`})}m.type==="custom"&&m.renderCustom?(z.innerHTML=m.renderCustom(t,S+1,T),E===0&&i("paginationRender",z)):(E===0&&i("paginationRender",z),i("paginationUpdate",z)),t.params.watchOverflow&&t.enabled&&z.classList[t.isLocked?"add":"remove"](m.lockClass)})}function g(){const h=t.params.pagination;if(l())return;const m=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.grid&&t.params.grid.rows>1?t.slides.length/Math.ceil(t.params.grid.rows):t.slides.length;let w=t.pagination.el;w=Ue(w);let S="";if(h.type==="bullets"){let C=t.params.loop?Math.ceil(m/t.params.slidesPerGroup):t.snapGrid.length;t.params.freeMode&&t.params.freeMode.enabled&&C>m&&(C=m);for(let A=0;A<C;A+=1)h.renderBullet?S+=h.renderBullet.call(t,A,h.bulletClass):S+=`<${h.bulletElement} ${t.isElement?'part="bullet"':""} class="${h.bulletClass}"></${h.bulletElement}>`}h.type==="fraction"&&(h.renderFraction?S=h.renderFraction.call(t,h.currentClass,h.totalClass):S=`<span class="${h.currentClass}"></span> / <span class="${h.totalClass}"></span>`),h.type==="progressbar"&&(h.renderProgressbar?S=h.renderProgressbar.call(t,h.progressbarFillClass):S=`<span class="${h.progressbarFillClass}"></span>`),t.pagination.bullets=[],w.forEach(C=>{h.type!=="custom"&&(C.innerHTML=S||""),h.type==="bullets"&&t.pagination.bullets.push(...C.querySelectorAll(ua(h.bulletClass)))}),h.type!=="custom"&&i("paginationRender",w[0])}function x(){t.params.pagination=Wy(t,t.originalParams.pagination,t.params.pagination,{el:"swiper-pagination"});const h=t.params.pagination;if(!h.el)return;let m;typeof h.el=="string"&&t.isElement&&(m=t.el.querySelector(h.el)),!m&&typeof h.el=="string"&&(m=[...document.querySelectorAll(h.el)]),m||(m=h.el),!(!m||m.length===0)&&(t.params.uniqueNavElements&&typeof h.el=="string"&&Array.isArray(m)&&m.length>1&&(m=[...t.el.querySelectorAll(h.el)],m.length>1&&(m=m.filter(w=>Ly(w,".swiper")[0]===t.el)[0])),Array.isArray(m)&&m.length===1&&(m=m[0]),Object.assign(t.pagination,{el:m}),m=Ue(m),m.forEach(w=>{h.type==="bullets"&&h.clickable&&w.classList.add(...(h.clickableClass||"").split(" ")),w.classList.add(h.modifierClass+h.type),w.classList.add(t.isHorizontal()?h.horizontalClass:h.verticalClass),h.type==="bullets"&&h.dynamicBullets&&(w.classList.add(`${h.modifierClass}${h.type}-dynamic`),s=0,h.dynamicMainBullets<1&&(h.dynamicMainBullets=1)),h.type==="progressbar"&&h.progressbarOpposite&&w.classList.add(h.progressbarOppositeClass),h.clickable&&w.addEventListener("click",f),t.enabled||w.classList.add(h.lockClass)}))}function y(){const h=t.params.pagination;if(l())return;let m=t.pagination.el;m&&(m=Ue(m),m.forEach(w=>{w.classList.remove(h.hiddenClass),w.classList.remove(h.modifierClass+h.type),w.classList.remove(t.isHorizontal()?h.horizontalClass:h.verticalClass),h.clickable&&(w.classList.remove(...(h.clickableClass||"").split(" ")),w.removeEventListener("click",f))})),t.pagination.bullets&&t.pagination.bullets.forEach(w=>w.classList.remove(...h.bulletActiveClass.split(" ")))}r("changeDirection",()=>{if(!t.pagination||!t.pagination.el)return;const h=t.params.pagination;let{el:m}=t.pagination;m=Ue(m),m.forEach(w=>{w.classList.remove(h.horizontalClass,h.verticalClass),w.classList.add(t.isHorizontal()?h.horizontalClass:h.verticalClass)})}),r("init",()=>{t.params.pagination.enabled===!1?v():(x(),g(),p())}),r("activeIndexChange",()=>{typeof t.snapIndex>"u"&&p()}),r("snapIndexChange",()=>{p()}),r("snapGridLengthChange",()=>{g(),p()}),r("destroy",()=>{y()}),r("enable disable",()=>{let{el:h}=t.pagination;h&&(h=Ue(h),h.forEach(m=>m.classList[t.enabled?"remove":"add"](t.params.pagination.lockClass)))}),r("lock unlock",()=>{p()}),r("click",(h,m)=>{const w=m.target,S=Ue(t.pagination.el);if(t.params.pagination.el&&t.params.pagination.hideOnClick&&S&&S.length>0&&!w.classList.contains(t.params.pagination.bulletClass)){if(t.navigation&&(t.navigation.nextEl&&w===t.navigation.nextEl||t.navigation.prevEl&&w===t.navigation.prevEl))return;const C=S[0].classList.contains(t.params.pagination.hiddenClass);i(C===!0?"paginationShow":"paginationHide"),S.forEach(A=>A.classList.toggle(t.params.pagination.hiddenClass))}});const b=()=>{t.el.classList.remove(t.params.pagination.paginationDisabledClass);let{el:h}=t.pagination;h&&(h=Ue(h),h.forEach(m=>m.classList.remove(t.params.pagination.paginationDisabledClass))),x(),g(),p()},v=()=>{t.el.classList.add(t.params.pagination.paginationDisabledClass);let{el:h}=t.pagination;h&&(h=Ue(h),h.forEach(m=>m.classList.add(t.params.pagination.paginationDisabledClass))),y()};Object.assign(t.pagination,{enable:b,disable:v,render:g,update:p,init:x,destroy:y})}function Vn(e){let{swiper:t,extendParams:n,on:r,emit:i,params:a}=e;t.autoplay={running:!1,paused:!1,timeLeft:0},n({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let o,s,l=a&&a.autoplay?a.autoplay.delay:3e3,d=a&&a.autoplay?a.autoplay.delay:3e3,u,f=new Date().getTime(),p,g,x,y,b,v,h;function m(M){!t||t.destroyed||!t.wrapperEl||M.target===t.wrapperEl&&(t.wrapperEl.removeEventListener("transitionend",m),!(h||M.detail&&M.detail.bySwiperTouchMove)&&E())}const w=()=>{if(t.destroyed||!t.autoplay.running)return;t.autoplay.paused?p=!0:p&&(d=u,p=!1);const M=t.autoplay.paused?u:f+d-new Date().getTime();t.autoplay.timeLeft=M,i("autoplayTimeLeft",M,M/l),s=requestAnimationFrame(()=>{w()})},S=()=>{let M;return t.virtual&&t.params.virtual.enabled?M=t.slides.filter($=>$.classList.contains("swiper-slide-active"))[0]:M=t.slides[t.activeIndex],M?parseInt(M.getAttribute("data-swiper-autoplay"),10):void 0},C=M=>{if(t.destroyed||!t.autoplay.running)return;cancelAnimationFrame(s),w();let V=typeof M>"u"?t.params.autoplay.delay:M;l=t.params.autoplay.delay,d=t.params.autoplay.delay;const $=S();!Number.isNaN($)&&$>0&&typeof M>"u"&&(V=$,l=$,d=$),u=V;const K=t.params.speed,Z=()=>{!t||t.destroyed||(t.params.autoplay.reverseDirection?!t.isBeginning||t.params.loop||t.params.rewind?(t.slidePrev(K,!0,!0),i("autoplay")):t.params.autoplay.stopOnLastSlide||(t.slideTo(t.slides.length-1,K,!0,!0),i("autoplay")):!t.isEnd||t.params.loop||t.params.rewind?(t.slideNext(K,!0,!0),i("autoplay")):t.params.autoplay.stopOnLastSlide||(t.slideTo(0,K,!0,!0),i("autoplay")),t.params.cssMode&&(f=new Date().getTime(),requestAnimationFrame(()=>{C()})))};return V>0?(clearTimeout(o),o=setTimeout(()=>{Z()},V)):requestAnimationFrame(()=>{Z()}),V},A=()=>{f=new Date().getTime(),t.autoplay.running=!0,C(),i("autoplayStart")},T=()=>{t.autoplay.running=!1,clearTimeout(o),cancelAnimationFrame(s),i("autoplayStop")},z=(M,V)=>{if(t.destroyed||!t.autoplay.running)return;clearTimeout(o),M||(v=!0);const $=()=>{i("autoplayPause"),t.params.autoplay.waitForTransition?t.wrapperEl.addEventListener("transitionend",m):E()};if(t.autoplay.paused=!0,V){b&&(u=t.params.autoplay.delay),b=!1,$();return}u=(u||t.params.autoplay.delay)-(new Date().getTime()-f),!(t.isEnd&&u<0&&!t.params.loop)&&(u<0&&(u=0),$())},E=()=>{t.isEnd&&u<0&&!t.params.loop||t.destroyed||!t.autoplay.running||(f=new Date().getTime(),v?(v=!1,C(u)):C(),t.autoplay.paused=!1,i("autoplayResume"))},P=()=>{if(t.destroyed||!t.autoplay.running)return;const M=zn();M.visibilityState==="hidden"&&(v=!0,z(!0)),M.visibilityState==="visible"&&E()},_=M=>{M.pointerType==="mouse"&&(v=!0,h=!0,!(t.animating||t.autoplay.paused)&&z(!0))},I=M=>{M.pointerType==="mouse"&&(h=!1,t.autoplay.paused&&E())},R=()=>{t.params.autoplay.pauseOnMouseEnter&&(t.el.addEventListener("pointerenter",_),t.el.addEventListener("pointerleave",I))},U=()=>{t.el&&typeof t.el!="string"&&(t.el.removeEventListener("pointerenter",_),t.el.removeEventListener("pointerleave",I))},Q=()=>{zn().addEventListener("visibilitychange",P)},Y=()=>{zn().removeEventListener("visibilitychange",P)};r("init",()=>{t.params.autoplay.enabled&&(R(),Q(),A())}),r("destroy",()=>{U(),Y(),t.autoplay.running&&T()}),r("_freeModeStaticRelease",()=>{(x||v)&&E()}),r("_freeModeNoMomentumRelease",()=>{t.params.autoplay.disableOnInteraction?T():z(!0,!0)}),r("beforeTransitionStart",(M,V,$)=>{t.destroyed||!t.autoplay.running||($||!t.params.autoplay.disableOnInteraction?z(!0,!0):T())}),r("sliderFirstMove",()=>{if(!(t.destroyed||!t.autoplay.running)){if(t.params.autoplay.disableOnInteraction){T();return}g=!0,x=!1,v=!1,y=setTimeout(()=>{v=!0,x=!0,z(!0)},200)}}),r("touchEnd",()=>{if(!(t.destroyed||!t.autoplay.running||!g)){if(clearTimeout(y),clearTimeout(o),t.params.autoplay.disableOnInteraction){x=!1,g=!1;return}x&&t.params.cssMode&&E(),x=!1,g=!1}}),r("slideChange",()=>{t.destroyed||!t.autoplay.running||(b=!0)}),Object.assign(t.autoplay,{start:A,stop:T,pause:z,resume:E})}function pC(e){const{effect:t,swiper:n,on:r,setTranslate:i,setTransition:a,overwriteParams:o,perspective:s,recreateShadows:l,getEffectParams:d}=e;r("beforeInit",()=>{if(n.params.effect!==t)return;n.classNames.push(`${n.params.containerModifierClass}${t}`),s&&s()&&n.classNames.push(`${n.params.containerModifierClass}3d`);const f=o?o():{};Object.assign(n.params,f),Object.assign(n.originalParams,f)}),r("setTranslate",()=>{n.params.effect===t&&i()}),r("setTransition",(f,p)=>{n.params.effect===t&&a(p)}),r("transitionEnd",()=>{if(n.params.effect===t&&l){if(!d||!d().slideShadows)return;n.slides.forEach(f=>{f.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(p=>p.remove())}),l()}});let u;r("virtualUpdate",()=>{n.params.effect===t&&(n.slides.length||(u=!0),requestAnimationFrame(()=>{u&&n.slides&&n.slides.length&&(i(),u=!1)}))})}function hC(e,t){const n=pp(t);return n!==t&&(n.style.backfaceVisibility="hidden",n.style["-webkit-backface-visibility"]="hidden"),n}function Im(e,t,n){const r=`swiper-slide-shadow${n?`-${n}`:""}${` swiper-slide-shadow-${e}`}`,i=pp(t);let a=i.querySelector(`.${r.split(" ").join(".")}`);return a||(a=ao("div",r.split(" ")),i.append(a)),a}function mC(e){let{swiper:t,extendParams:n,on:r}=e;n({coverflowEffect:{rotate:50,stretch:0,depth:100,scale:1,modifier:1,slideShadows:!0}}),pC({effect:"coverflow",swiper:t,on:r,setTranslate:()=>{const{width:o,height:s,slides:l,slidesSizesGrid:d}=t,u=t.params.coverflowEffect,f=t.isHorizontal(),p=t.translate,g=f?-p+o/2:-p+s/2,x=f?u.rotate:-u.rotate,y=u.depth,b=q7(t);for(let v=0,h=l.length;v<h;v+=1){const m=l[v],w=d[v],S=m.swiperSlideOffset,C=(g-S-w/2)/w,A=typeof u.modifier=="function"?u.modifier(C):C*u.modifier;let T=f?x*A:0,z=f?0:x*A,E=-y*Math.abs(A),P=u.stretch;typeof P=="string"&&P.indexOf("%")!==-1&&(P=parseFloat(u.stretch)/100*w);let _=f?0:P*A,I=f?P*A:0,R=1-(1-u.scale)*Math.abs(A);Math.abs(I)<.001&&(I=0),Math.abs(_)<.001&&(_=0),Math.abs(E)<.001&&(E=0),Math.abs(T)<.001&&(T=0),Math.abs(z)<.001&&(z=0),Math.abs(R)<.001&&(R=0);const U=`translate3d(${I}px,${_}px,${E}px)  rotateX(${b(z)}deg) rotateY(${b(T)}deg) scale(${R})`,Q=hC(u,m);if(Q.style.transform=U,m.style.zIndex=-Math.abs(Math.round(A))+1,u.slideShadows){let Y=f?m.querySelector(".swiper-slide-shadow-left"):m.querySelector(".swiper-slide-shadow-top"),M=f?m.querySelector(".swiper-slide-shadow-right"):m.querySelector(".swiper-slide-shadow-bottom");Y||(Y=Im("coverflow",m,f?"left":"top")),M||(M=Im("coverflow",m,f?"right":"bottom")),Y&&(Y.style.opacity=A>0?A:0),M&&(M.style.opacity=-A>0?-A:0)}}},setTransition:o=>{t.slides.map(l=>pp(l)).forEach(l=>{l.style.transitionDuration=`${o}ms`,l.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(d=>{d.style.transitionDuration=`${o}ms`})})},perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0})})}const gC=k.button`
  width: auto;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 5px; 
  padding: 0px 20px;
  font-size: 12px;
  background-color: ${({backDefine:e})=>e||"var(--color--white)"};
  border-radius: 10px;
  color: ${({colorDefine:e})=>e||"var(--color--black)"};
  border: none;
  position: relative;
  cursor: pointer;
  transition-duration: 0.2s;
  font-family: var(--font--comfortaa);
  font-weight: 600;
  left: 0;
  bottom: 0;

  .icon {
    font-size: 18px;
    color: var(--color--black);
    margin-left: 8px;
  }

  &:hover {
    background-color: var(--color--black);
    color: var(--color--white);
  }

  &:hover .icon {
    transform: translateX(5px); 
    transition: transform 0.3s ease;
    color: var(--color--white);
  }

  &:active {
    transform: translate(1px, 1px);
    transition-duration: 0.2s;
  }
`,mp=({text:e,onClick:t,backDefine:n,colorDefine:r})=>c.jsxs(gC,{id:"clickwpp",backDefine:n,colorDefine:r,onClick:t,children:[e,c.jsx(rp,{className:"icon"})]}),vC=Ki`
.swiper-button-next, .swiper-button-prev {
        color: var(--color--white); 
        background-color: var(--color--black);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
        transition: all .2s;

        @media (max-width: 768px){
            z-index: 1000;
        }

        &:hover {
            background-color: var(--color--white);
            color: var(--color--black);
            transform: scale(1.05);
        }

        &:after {
            font-size: 20px;
        }
    }
    .swiper-pagination-bullet {
        background: var(--color--black);
        opacity: 0.7;
        width: 12px;
        height: 12px;
        margin: 0 5px;
        &.swiper-pagination-bullet-active {
            background: #A5C933;
            opacity: 1;
        }
    }
`,xC=Dn`
  0% {
    border-radius: 0 60px 20px 0;
  }
  25% {
    border-radius: 20px 0 60px 20px;
  }
  50% {
    border-radius: 60px 20px 0 60px;
  }
  75% {
    border-radius: 60px 60px 20px 0;
  }
  100% {
    border-radius: 0 20px 60px 0;
  }
`,yC=k.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px 0 20px 0;

    @media (max-width: 768px){
        border-radius: 0 15px 0 20px;
    }
`,wC=k.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  border-radius: 0 20px 20px 0;
  animation: ${xC} 5s ease-in-out infinite;
  background-image: ${({backgroundImage:e})=>`url(${e})`};
  background-size: cover;
  background-position: center;
`,bC=k.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 4px;
    border-radius: inherit;
    background: linear-gradient(45deg, #00000080, #0001);
    -webkit-mask-image: linear-gradient(#fff, #fff);
    mask-image: linear-gradient(#fff, #fff);
    pointer-events: none;
`,SC=k.div`
    position: absolute;
    bottom: 20px;
    left: 20px;
    color: var(--color--white);
    font-family: Arial, sans-serif;
`,jC=k.h2`
    font-size: 24px;
    font-weight: bold;
    font-family: var(--font--comfortaa);
`,CC=k.p`
    font-size: 16px;
    margin: 5px 0;
    font-family: var(--font--avenir);
`,kC=k.div`
    display: flex;
    gap: 8px;
    margin-top: 10px;
    flex-wrap: wrap;

    span {
        display: flex;
        align-items: center;
        gap: 5px;
        background: rgba(0, 0, 0, 0.5);
        padding: 5px 10px;
        border-radius: 12px;
        font-size: 12px;
        transition: all .2s ease;
        
        &:hover {
            color: var(--color--black);
            background-color: var(--color--white);
            cursor: default;
        }
    }

    svg {
        font-size: 16px;
    }
`,TC=k.div`
    width: 100%;
    max-width: 60%;
    margin: 0 auto;

    @media (max-width: 640px) {
        max-width: 100%;
    }
`,Rm=({content:e=[],contentType:t="image",spaceBetween:n=10,slidesPerView:r=1,height:i="300px",autoplayDelay:a=3e3,showPagination:o=!0,showNavigation:s=!0})=>c.jsxs(TC,{children:[c.jsx(vC,{}),c.jsx(Jt,{modules:[vr,xr,Vn],navigation:s,pagination:o?{clickable:!0}:!1,spaceBetween:n,loop:!0,slidesPerView:r,autoplay:{delay:a,disableOnInteraction:!1,pauseOnMouseEnter:!0},style:{height:i},breakpoints:{640:{slidesPerView:1,spaceBetween:10,height:"200px"},768:{slidesPerView:1,spaceBetween:20,height:"250px"},1024:{slidesPerView:1,spaceBetween:30,height:"300px"}},children:e.map((l,d)=>c.jsx(en,{children:t==="image"?c.jsx(yC,{src:l.src,loading:"lazy",alt:l.alt||`Slide ${d+1}`}):c.jsxs(wC,{backgroundImage:l.backgroundImage,children:[c.jsx(bC,{}),c.jsxs(SC,{children:[c.jsx(jC,{children:l.title}),c.jsx(CC,{children:l.subtitle}),c.jsx(kC,{children:l.features.map((u,f)=>c.jsxs("span",{children:[u.icon," ",u.text]},f))}),c.jsx(mp,{text:"Conhecer todas as acomodações"})]})]})},d))})]}),Ai=k.button`
    position: relative;
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 8px 36px;
    font-size: 12px;
    font-weight: 600;
    color: ${({color:e})=>e||"var(--color--black)"};
    background-color: ${({background:e})=>e||"inherit"};
    border: 2px solid ${({borderColor:e})=>e||"transparent"};
    border-radius: 100px;
    box-shadow: 0 0 0 2px var(--color--black);
    cursor: pointer;
    overflow: hidden;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
    font-family: var(--font--comfortaa);

    @media(max-width: 768px){
        font-size: 10px;    
    }

    &:hover {
        box-shadow: 0 0 0 12px transparent;
        color: ${({hoverColor:e})=>e||"var(--color--black)"};
        border-radius: 40px;
    }

    &:active {
        scale: 0.95;
        box-shadow: 0 0 0 4px var(--color--black);
    }
`,Dm=k.svg`
    position: absolute;
    width: 24px;
    fill: var(--color--black);
    z-index: 9;
    transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);

    &.arr-1 {
        right: 16px;
    }

    &.arr-2 {
        left: -25%;
    }

    ${Ai}:hover &.arr-1 {
        right: -25%;
    }

    ${Ai}:hover &.arr-2 {
        left: 16px;
    }

    ${Ai}:hover & {
        fill: var(--color--white);
    }
`,AC=k.span`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 20px;
    height: 20px;
    background-color: var(--color--black);
    border-radius: 50%;
    opacity: 0;
    transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);

    ${Ai}:hover & {
        width: 220px;
        height: 220px;
        opacity: 1;
        color: var(--color--white);
    }
`,EC=k.span`
    position: relative;
    z-index: 1;
    transform: translateX(-12px);
    transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);

    ${Ai}:hover & {
        transform: translateX(12px);
        color: var(--color--white);
    }
`,dt=({text:e,onClick:t,color:n,backgroundColor:r,borderColor:i,hoverColor:a})=>c.jsxs(Ai,{id:"clickwpp",onClick:t,color:n,background:r,borderColor:i,hoverColor:a,children:[c.jsx(Dm,{className:"arr-2",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:c.jsx("path",{d:"M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"})}),c.jsx(EC,{id:"clickwpp",children:e}),c.jsx(AC,{}),c.jsx(Dm,{className:"arr-1",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:c.jsx("path",{d:"M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"})})]}),PC=Dn`
  0% {
    border-radius: 80px 20px 50px 80px;
  }
  25% {
    border-radius: 50px 80px 30px 60px;
  }
  50% {
    border-radius: 100px 50px 80px 30px;
  }
  75% {
    border-radius: 60px 30px 100px 50px;
  }
  100% {
    border-radius: 80px 20px 50px 80px;
  }
`,GC=k.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;
  width: 40%;
  height: 60vh;
  padding: 50px;

  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
    top: 25%;
    height: auto;
    padding: 5% 5%;
    gap: 30px;
    position: relative;
    z-index: 10;
    top: -80px;
    margin-bottom: -80px;
  }

  &::before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    opacity: 0.1;
    left: 0;
    top: 0;
    background-image: url('../../public/background/background_black.webp');
    background-position: center;
    background-size: contain;
    animation: ${PC} 8s ease-in-out infinite;
    pointer-events: none;

    @media (max-width: 768px) {
      animation: none;
      border-top: none;
      border-radius: 0 0 35px 0;
      border: 1px solid var(--color--black);
    }
  }
`,zC=k.h1`
  width: 100%;
  text-align: left;
  font-family: var(--font--comfortaa);
  font-weight: 100;
  font-size: 1.3rem;
  line-height: 100%;

  @media (max-width: 768px) {
    text-align: center;
    color: var(--color--black);
    width: auto;
    padding: 7px 15px;
    border-radius: 0px 10px 0px 10px;
    font-size: .9rem;
    font-weight: 800;
    background-color: rgba(255, 255, 255, 1);
    backdrop-filter: blur(40px);
    box-shadow: 0 0 5px rgba(255, 255, 255, 1);
  }
`,_C=k.p`
  width: 100%;
  font-size: .90rem;
  color: var(--color--black);
  font-family: var(--font--comfortaa);

  @media (max-width: 768px) {
    text-align: justify;
    color: var(--color--black);
    width: 100%;
    margin-top: 5px;
    font-weight: 200;
    font-size: .8rem;
    line-height: 130%;
  }
`,MC=k.div`
  display: flex;
  width: 100%;
  gap: 25px;

  @media (max-width:768px){
    gap: 15px;
  }
`,Vm=({text:e,title:t,borderColor:n,buttonColor:r,buttonHover:i,buttonBorder:a,targetPage:o})=>{const s=jl(),l=()=>{s(o)},d=()=>{window.open("https://wa.link/dojlwi","_blank")};return c.jsxs(GC,{borderColor:n,children:[c.jsx(zC,{children:t}),c.jsx(_C,{children:e}),c.jsxs(MC,{children:[c.jsx(dt,{onClick:l,text:"Saber mais",backgroundColor:r,borderColor:a,hoverColor:i,border:"1px solid",color:"var(--color--black)"}),c.jsx(dt,{onClick:d,text:"Fazer reserva!",backgroundColor:"transparent",borderColor:a,hoverColor:i,border:"1px solid",color:"var(--color--black)"})]})]})};function LC(e){return ee({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z"},child:[]}]})(e)}function gp(e){return ee({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M7 11v2h10v-2c0-1.86 1.28-3.41 3-3.86V6c0-1.65-1.35-3-3-3H7C5.35 3 4 4.35 4 6v1.14c1.72.45 3 2 3 3.86z"},child:[]},{tag:"path",attr:{d:"M21 9c-1.1 0-2 .9-2 2v4H5v-4c0-1.1-.9-2-2-2s-2 .9-2 2v5c0 1.65 1.35 3 3 3v1c0 .55.45 1 1 1s1-.45 1-1v-1h12v1c0 .55.45 1 1 1s1-.45 1-1v-1c1.65 0 3-1.35 3-3v-5c0-1.1-.9-2-2-2z"},child:[]}]})(e)}function Ke(e){return ee({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M22 9 12 2 2 9h9v13h2V9z"},child:[]},{tag:"path",attr:{d:"m4.14 12-1.96.37.82 4.37V22h2l.02-4H7v4h2v-6H4.9zM19.1 16H15v6h2v-4h1.98l.02 4h2v-5.26l.82-4.37-1.96-.37z"},child:[]}]})(e)}function OC(e){return ee({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"circle",attr:{cx:"4.5",cy:"9.5",r:"2.5"},child:[]},{tag:"circle",attr:{cx:"9",cy:"5.5",r:"2.5"},child:[]},{tag:"circle",attr:{cx:"15",cy:"5.5",r:"2.5"},child:[]},{tag:"circle",attr:{cx:"19.5",cy:"9.5",r:"2.5"},child:[]},{tag:"path",attr:{d:"M17.34 14.86c-.87-1.02-1.6-1.89-2.48-2.91-.46-.54-1.05-1.08-1.75-1.32-.11-.04-.22-.07-.33-.09-.25-.04-.52-.04-.78-.04s-.53 0-.79.05c-.11.02-.22.05-.33.09-.7.24-1.28.78-1.75 1.32-.87 1.02-1.6 1.89-2.48 2.91-1.31 1.31-2.92 2.76-2.62 4.79.29 1.02 1.02 2.03 2.33 2.32.73.15 3.06-.44 5.54-.44h.18c2.48 0 4.81.58 5.54.44 1.31-.29 2.04-1.31 2.33-2.32.31-2.04-1.3-3.49-2.61-4.8z"},child:[]}]})(e)}function wt(e){return ee({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"m10 17 5-5-5-5v10z"},child:[]}]})(e)}function IC(e){return ee({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5"},child:[]},{tag:"path",attr:{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"},child:[]},{tag:"line",attr:{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5"},child:[]}]})(e)}function RC(e){return ee({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m9 9 5 12 1.774-5.226L21 14 9 9z"},child:[]},{tag:"path",attr:{d:"m16.071 16.071 4.243 4.243"},child:[]},{tag:"path",attr:{d:"m7.188 2.239.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656-2.12 2.122"},child:[]}]})(e)}const DC=k.button`
  position: relative;
  overflow: hidden;
  outline: none;
  cursor: pointer;
  border-radius: 50px;
  background-color: transparent;
  border: solid 2px ${({borderColor:e})=>e||"var(--color--black)"};
  color: ${({textColor:e})=>e||"var(--color--black)"};
  font-family: inherit;

  &:hover .default-btn {
    transform: translate(0%, -100%);
  }

  &:hover .hover-btn {
    transform: translate(0%, 0%);
  }
`,qy=k.div`
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  font-family: var(--font--comfortaa);
  gap: 10px;
  padding: 10px 30px;
  border-radius: 50px;
  font-size: 13px;
  font-weight: 500;
  transition: transform 0.3s ease;

  @media (max-width: 768px) {
    padding: 7px 30px;
    font-size: 12px;
  }
`,VC=k(qy)`
  position: absolute;
  inset: 0;
  background-color: ${({hoverColor:e})=>e||"var(--color--blue)"};
  transform: translate(0%, 100%);
`,NC=k.span`
  color: ${({textColor:e})=>e||"var(--color--black)"};
`,FC=k.span`
  color: ${({hoverTextColor:e})=>e||"var(--color--white)"};
`,Xi=({text:e="Quick View",text2:t="Clique e reserve",borderColor:n,textColor:r,hoverColor:i,hoverTextColor:a})=>{const o=()=>{window.open("https://wa.link/dojlwi","_blank")};return c.jsxs(DC,{borderColor:n,textColor:r,onClick:o,id:"clickwpp",children:[c.jsxs(qy,{className:"default-btn",children:[c.jsx(LC,{size:15,color:r||"var(--color--black)"}),c.jsx(NC,{textColor:r,children:e})]}),c.jsxs(VC,{className:"hover-btn",hoverColor:i,id:"clickwpp",children:[c.jsx(RC,{size:15,color:a||"var(--color--white)"}),c.jsx(FC,{hoverTextColor:a,children:t})]})]})};var Yy={exports:{}};(function(e,t){(function(n,r){e.exports=r()})(Km,function(){return function(n){function r(a){if(i[a])return i[a].exports;var o=i[a]={exports:{},id:a,loaded:!1};return n[a].call(o.exports,o,o.exports,r),o.loaded=!0,o.exports}var i={};return r.m=n,r.c=i,r.p="dist/",r(0)}([function(n,r,i){function a(R){return R&&R.__esModule?R:{default:R}}var o=Object.assign||function(R){for(var U=1;U<arguments.length;U++){var Q=arguments[U];for(var Y in Q)Object.prototype.hasOwnProperty.call(Q,Y)&&(R[Y]=Q[Y])}return R},s=i(1),l=(a(s),i(6)),d=a(l),u=i(7),f=a(u),p=i(8),g=a(p),x=i(9),y=a(x),b=i(10),v=a(b),h=i(11),m=a(h),w=i(14),S=a(w),C=[],A=!1,T={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},z=function(){var R=arguments.length>0&&arguments[0]!==void 0&&arguments[0];if(R&&(A=!0),A)return C=(0,m.default)(C,T),(0,v.default)(C,T.once),C},E=function(){C=(0,S.default)(),z()},P=function(){C.forEach(function(R,U){R.node.removeAttribute("data-aos"),R.node.removeAttribute("data-aos-easing"),R.node.removeAttribute("data-aos-duration"),R.node.removeAttribute("data-aos-delay")})},_=function(R){return R===!0||R==="mobile"&&y.default.mobile()||R==="phone"&&y.default.phone()||R==="tablet"&&y.default.tablet()||typeof R=="function"&&R()===!0},I=function(R){T=o(T,R),C=(0,S.default)();var U=document.all&&!window.atob;return _(T.disable)||U?P():(T.disableMutationObserver||g.default.isSupported()||(console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),T.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",T.easing),document.querySelector("body").setAttribute("data-aos-duration",T.duration),document.querySelector("body").setAttribute("data-aos-delay",T.delay),T.startEvent==="DOMContentLoaded"&&["complete","interactive"].indexOf(document.readyState)>-1?z(!0):T.startEvent==="load"?window.addEventListener(T.startEvent,function(){z(!0)}):document.addEventListener(T.startEvent,function(){z(!0)}),window.addEventListener("resize",(0,f.default)(z,T.debounceDelay,!0)),window.addEventListener("orientationchange",(0,f.default)(z,T.debounceDelay,!0)),window.addEventListener("scroll",(0,d.default)(function(){(0,v.default)(C,T.once)},T.throttleDelay)),T.disableMutationObserver||g.default.ready("[data-aos]",E),C)};n.exports={init:I,refresh:z,refreshHard:E}},function(n,r){},,,,,function(n,r){(function(i){function a(_,I,R){function U(B){var te=he,le=ke;return he=ke=void 0,D=B,ce=_.apply(le,te)}function Q(B){return D=B,G=setTimeout(V,I),O?U(B):ce}function Y(B){var te=B-L,le=B-D,pe=I-te;return q?E(pe,fe-le):pe}function M(B){var te=B-L,le=B-D;return L===void 0||te>=I||te<0||q&&le>=fe}function V(){var B=P();return M(B)?$(B):void(G=setTimeout(V,Y(B)))}function $(B){return G=void 0,F&&he?U(B):(he=ke=void 0,ce)}function K(){G!==void 0&&clearTimeout(G),D=0,he=L=ke=G=void 0}function Z(){return G===void 0?ce:$(P())}function we(){var B=P(),te=M(B);if(he=arguments,ke=this,L=B,te){if(G===void 0)return Q(L);if(q)return G=setTimeout(V,I),U(L)}return G===void 0&&(G=setTimeout(V,I)),ce}var he,ke,fe,ce,G,L,D=0,O=!1,q=!1,F=!0;if(typeof _!="function")throw new TypeError(p);return I=u(I)||0,s(R)&&(O=!!R.leading,q="maxWait"in R,fe=q?z(u(R.maxWait)||0,I):fe,F="trailing"in R?!!R.trailing:F),we.cancel=K,we.flush=Z,we}function o(_,I,R){var U=!0,Q=!0;if(typeof _!="function")throw new TypeError(p);return s(R)&&(U="leading"in R?!!R.leading:U,Q="trailing"in R?!!R.trailing:Q),a(_,I,{leading:U,maxWait:I,trailing:Q})}function s(_){var I=typeof _>"u"?"undefined":f(_);return!!_&&(I=="object"||I=="function")}function l(_){return!!_&&(typeof _>"u"?"undefined":f(_))=="object"}function d(_){return(typeof _>"u"?"undefined":f(_))=="symbol"||l(_)&&T.call(_)==x}function u(_){if(typeof _=="number")return _;if(d(_))return g;if(s(_)){var I=typeof _.valueOf=="function"?_.valueOf():_;_=s(I)?I+"":I}if(typeof _!="string")return _===0?_:+_;_=_.replace(y,"");var R=v.test(_);return R||h.test(_)?m(_.slice(2),R?2:8):b.test(_)?g:+_}var f=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(_){return typeof _}:function(_){return _&&typeof Symbol=="function"&&_.constructor===Symbol&&_!==Symbol.prototype?"symbol":typeof _},p="Expected a function",g=NaN,x="[object Symbol]",y=/^\s+|\s+$/g,b=/^[-+]0x[0-9a-f]+$/i,v=/^0b[01]+$/i,h=/^0o[0-7]+$/i,m=parseInt,w=(typeof i>"u"?"undefined":f(i))=="object"&&i&&i.Object===Object&&i,S=(typeof self>"u"?"undefined":f(self))=="object"&&self&&self.Object===Object&&self,C=w||S||Function("return this")(),A=Object.prototype,T=A.toString,z=Math.max,E=Math.min,P=function(){return C.Date.now()};n.exports=o}).call(r,function(){return this}())},function(n,r){(function(i){function a(P,_,I){function R(F){var B=we,te=he;return we=he=void 0,L=F,fe=P.apply(te,B)}function U(F){return L=F,ce=setTimeout(M,_),D?R(F):fe}function Q(F){var B=F-G,te=F-L,le=_-B;return O?z(le,ke-te):le}function Y(F){var B=F-G,te=F-L;return G===void 0||B>=_||B<0||O&&te>=ke}function M(){var F=E();return Y(F)?V(F):void(ce=setTimeout(M,Q(F)))}function V(F){return ce=void 0,q&&we?R(F):(we=he=void 0,fe)}function $(){ce!==void 0&&clearTimeout(ce),L=0,we=G=he=ce=void 0}function K(){return ce===void 0?fe:V(E())}function Z(){var F=E(),B=Y(F);if(we=arguments,he=this,G=F,B){if(ce===void 0)return U(G);if(O)return ce=setTimeout(M,_),R(G)}return ce===void 0&&(ce=setTimeout(M,_)),fe}var we,he,ke,fe,ce,G,L=0,D=!1,O=!1,q=!0;if(typeof P!="function")throw new TypeError(f);return _=d(_)||0,o(I)&&(D=!!I.leading,O="maxWait"in I,ke=O?T(d(I.maxWait)||0,_):ke,q="trailing"in I?!!I.trailing:q),Z.cancel=$,Z.flush=K,Z}function o(P){var _=typeof P>"u"?"undefined":u(P);return!!P&&(_=="object"||_=="function")}function s(P){return!!P&&(typeof P>"u"?"undefined":u(P))=="object"}function l(P){return(typeof P>"u"?"undefined":u(P))=="symbol"||s(P)&&A.call(P)==g}function d(P){if(typeof P=="number")return P;if(l(P))return p;if(o(P)){var _=typeof P.valueOf=="function"?P.valueOf():P;P=o(_)?_+"":_}if(typeof P!="string")return P===0?P:+P;P=P.replace(x,"");var I=b.test(P);return I||v.test(P)?h(P.slice(2),I?2:8):y.test(P)?p:+P}var u=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(P){return typeof P}:function(P){return P&&typeof Symbol=="function"&&P.constructor===Symbol&&P!==Symbol.prototype?"symbol":typeof P},f="Expected a function",p=NaN,g="[object Symbol]",x=/^\s+|\s+$/g,y=/^[-+]0x[0-9a-f]+$/i,b=/^0b[01]+$/i,v=/^0o[0-7]+$/i,h=parseInt,m=(typeof i>"u"?"undefined":u(i))=="object"&&i&&i.Object===Object&&i,w=(typeof self>"u"?"undefined":u(self))=="object"&&self&&self.Object===Object&&self,S=m||w||Function("return this")(),C=Object.prototype,A=C.toString,T=Math.max,z=Math.min,E=function(){return S.Date.now()};n.exports=a}).call(r,function(){return this}())},function(n,r){function i(u){var f=void 0,p=void 0;for(f=0;f<u.length;f+=1)if(p=u[f],p.dataset&&p.dataset.aos||p.children&&i(p.children))return!0;return!1}function a(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function o(){return!!a()}function s(u,f){var p=window.document,g=a(),x=new g(l);d=f,x.observe(p.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function l(u){u&&u.forEach(function(f){var p=Array.prototype.slice.call(f.addedNodes),g=Array.prototype.slice.call(f.removedNodes),x=p.concat(g);if(i(x))return d()})}Object.defineProperty(r,"__esModule",{value:!0});var d=function(){};r.default={isSupported:o,ready:s}},function(n,r){function i(p,g){if(!(p instanceof g))throw new TypeError("Cannot call a class as a function")}function a(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(r,"__esModule",{value:!0});var o=function(){function p(g,x){for(var y=0;y<x.length;y++){var b=x[y];b.enumerable=b.enumerable||!1,b.configurable=!0,"value"in b&&(b.writable=!0),Object.defineProperty(g,b.key,b)}}return function(g,x,y){return x&&p(g.prototype,x),y&&p(g,y),g}}(),s=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,l=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,d=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,u=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,f=function(){function p(){i(this,p)}return o(p,[{key:"phone",value:function(){var g=a();return!(!s.test(g)&&!l.test(g.substr(0,4)))}},{key:"mobile",value:function(){var g=a();return!(!d.test(g)&&!u.test(g.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),p}();r.default=new f},function(n,r){Object.defineProperty(r,"__esModule",{value:!0});var i=function(o,s,l){var d=o.node.getAttribute("data-aos-once");s>o.position?o.node.classList.add("aos-animate"):typeof d<"u"&&(d==="false"||!l&&d!=="true")&&o.node.classList.remove("aos-animate")},a=function(o,s){var l=window.pageYOffset,d=window.innerHeight;o.forEach(function(u,f){i(u,d+l,s)})};r.default=a},function(n,r,i){function a(d){return d&&d.__esModule?d:{default:d}}Object.defineProperty(r,"__esModule",{value:!0});var o=i(12),s=a(o),l=function(d,u){return d.forEach(function(f,p){f.node.classList.add("aos-init"),f.position=(0,s.default)(f.node,u.offset)}),d};r.default=l},function(n,r,i){function a(d){return d&&d.__esModule?d:{default:d}}Object.defineProperty(r,"__esModule",{value:!0});var o=i(13),s=a(o),l=function(d,u){var f=0,p=0,g=window.innerHeight,x={offset:d.getAttribute("data-aos-offset"),anchor:d.getAttribute("data-aos-anchor"),anchorPlacement:d.getAttribute("data-aos-anchor-placement")};switch(x.offset&&!isNaN(x.offset)&&(p=parseInt(x.offset)),x.anchor&&document.querySelectorAll(x.anchor)&&(d=document.querySelectorAll(x.anchor)[0]),f=(0,s.default)(d).top,x.anchorPlacement){case"top-bottom":break;case"center-bottom":f+=d.offsetHeight/2;break;case"bottom-bottom":f+=d.offsetHeight;break;case"top-center":f+=g/2;break;case"bottom-center":f+=g/2+d.offsetHeight;break;case"center-center":f+=g/2+d.offsetHeight/2;break;case"top-top":f+=g;break;case"bottom-top":f+=d.offsetHeight+g;break;case"center-top":f+=d.offsetHeight/2+g}return x.anchorPlacement||x.offset||isNaN(u)||(p=u),f+p};r.default=l},function(n,r){Object.defineProperty(r,"__esModule",{value:!0});var i=function(a){for(var o=0,s=0;a&&!isNaN(a.offsetLeft)&&!isNaN(a.offsetTop);)o+=a.offsetLeft-(a.tagName!="BODY"?a.scrollLeft:0),s+=a.offsetTop-(a.tagName!="BODY"?a.scrollTop:0),a=a.offsetParent;return{top:s,left:o}};r.default=i},function(n,r){Object.defineProperty(r,"__esModule",{value:!0});var i=function(a){return a=a||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(a,function(o){return{node:o}})};r.default=i}])})})(Yy);var $C=Yy.exports;const Ie=Hr($C),BC=Ki`
    .swiper-button-next, .swiper-button-prev {
        color: var(--color--white); 
        background-color: rgba(0, 0, 0, 0.5);
        border-radius: 50%;
        width: 40px;
        height: 40px;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
        &:after {
            font-size: 20px;
        }
    }
    .swiper-pagination-bullet {
        background: rgba(0, 0, 0, 0.3);
        opacity: 0.7;
        width: 10px;
        height: 10px;
        margin: 0 5px;
        &.swiper-pagination-bullet-active {
            background: #A5C933;
            opacity: 1;
        }
    }
`,HC=k.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 25px 0 25px 0;
    overflow: hidden;
    background-image: ${({backgroundImage:e})=>`url(${e})`};
    background-size: cover;
    background-position: center;
    transform-style: preserve-3d;

    @media (max-width: 768px) {
        width: 90%;
        margin-left: 5%;
        border-radius: 20px 0 20px 0;
    }
`,UC=k.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50%;
    border-radius: 25px 0 25px 0;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0));
    pointer-events: none;
    z-index: 1;

    @media (max-width: 768px) {
        border-radius: 20px 0 20px 0;
    }
`,WC=k.div`
    position: absolute;
    bottom: 15px;
    left: 15px;
    color: white;
    padding: 10px;
    border-radius: 8px;
    z-index: 2;

    @media (max-width: 768px) {
        left: 10px;
        display: flex;
        flex-direction: column;
        gap: 15px;
    }
`,qC=k.div`
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 12px;
    font-weight: bold;
    padding: 5px 15px;
    color: var(--color--black);
    z-index: 3;
    font-family: var(--font--comfortaa);
    font-weight: 800;
    background-color: var(--color--white);
    border-radius: 10px 0 10px 0;
    backdrop-filter: blur(10px);
    box-shadow: 0 0 5px rgba(255, 255, 255, 1);

    @media (max-width: 768px) {
        left: 0;
        top: 10px;
        padding: 7px 10px;
        width: 50%;
        transform: translateX(50%);
        font-weight: 200;
        font-size: 0.7rem;
        text-align: center;
    }
`,YC=k.h2`
    font-size: 24px;
    font-weight: bold;
    font-family: var(--font--comfortaa);
    margin: 0;
    margin-bottom: 15px;

    @media (max-width: 768px) {
        font-size: 26px;
        margin-bottom: 0;
    }
`,KC=k.p`
    font-size: 13px;
    width: 80%;
    margin-bottom: 15px;
    font-family: var(--font--comfortaa)!important;
    font-weight: 300;
    text-align: left!important;

    @media (max-width: 768px) {
        width: 100%;
        font-size: 13px!important;
        margin-bottom: 0;
    }
`,XC=({content:e=[],height:t="300px",width:n="100%",autoplayDelay:r=1500,showPagination:i=!0,showNavigation:a=!0})=>{const o=j.useRef([]);return j.useEffect(()=>{o.current&&o.current.forEach(s=>{s&&window.VanillaTilt.init(s,{max:2,speed:400,glare:!1})})},[]),c.jsxs(c.Fragment,{children:[c.jsx(BC,{}),c.jsx(Jt,{modules:[vr,xr,Vn,mC],effect:"coverflow",grabCursor:!0,centeredSlides:!0,loop:!0,slidesPerView:"auto",coverflowEffect:{rotate:50,stretch:50,depth:300,modifier:1,slideShadows:!0},navigation:a,pagination:i?{clickable:!0}:!1,autoplay:{delay:r,disableOnInteraction:!1,pauseOnMouseEnter:!0},breakpoints:{1024:{slidesPerView:2},768:{slidesPerView:2},0:{slidesPerView:1}},style:{width:n,height:t},children:e.map((s,l)=>c.jsx(en,{style:{width:"60%"},children:c.jsxs(HC,{ref:d=>o.current[l]=d,backgroundImage:s.backgroundImage,children:[c.jsx(qC,{children:s.topLeftText}),c.jsx(UC,{}),c.jsxs(WC,{"data-aos":"fade-up","data-aos-delay":"100",children:[c.jsx(YC,{children:s.title}),c.jsx(KC,{children:s.description}),c.jsx(Xi,{text:"Reservar agora",text2:"Clique e reserve agora",borderColor:"var(--color--white)",textColor:"var(--color--white)",hoverColor:"var(--color--green)",hoverTextColor:"var(--color--black)"})]})]})},l))})]})},QC=k(Le.div)`
    width: 100%;
    height: 40vh;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
        height: 25vh;
    }
`,ZC=k(Le.img)`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;

    &:hover {
        transform: scale(1.2) rotate(3deg); // Zoom e rotação ao passar o mouse
    }
`,JC=k(Le.div)`
    position: absolute;
    bottom: 10px;
    left: 10px;
    color: var(--color--black);
    padding: 3px 10px;
    font-family: var(--font--comfortaa);
    background-color: var(--color--white);
    cursor: default;
    font-size: 8px;
    font-weight: bold;
    border-radius: 4px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.5); // Sombra para destacar o texto
`,ju=({images:e=[],reverse:t=!1})=>c.jsx(Jt,{modules:[Vn],spaceBetween:0,loop:!0,autoplay:{delay:0,disableOnInteraction:!1,reverseDirection:t,stopOnLastSlide:!1,pauseOnMouseEnter:!0},speed:2e3,freeMode:!0,freeModeMomentum:!1,breakpoints:{320:{slidesPerView:3},768:{slidesPerView:4},1024:{slidesPerView:5}},children:e.map((n,r)=>c.jsx(en,{children:c.jsxs(QC,{initial:{scale:.8,rotate:-5,opacity:0},animate:{scale:1,rotate:0,opacity:1},transition:{duration:.6,ease:"easeOut"},children:[c.jsx(ZC,{src:n.src,alt:n.alt||`Imagem ${r+1}`,initial:{scale:1},whileHover:{scale:1.2,rotate:3},transition:{duration:.3}}),c.jsx(JC,{initial:{y:30,opacity:0},animate:{y:0,opacity:1},transition:{duration:.7,delay:.4,ease:"backOut"},children:n.label})]})},r))}),ek=Dn`
  0% {
    border-radius: 0 20px 20px 0;
  }
  25% {
    border-radius: 20px 0 20px 20px;
  }
  50% {
    border-radius: 20px 20px 0 20px;
  }
  75% {
    border-radius: 20px 20px 20px 0;
  }
  100% {
    border-radius: 0 20px 20px 0;
  }
`,tk=k.div`
    display: flex;
    flex-direction: column;
    height: auto;
    padding: 10px;
    background: var(--color--white);
    border-radius: 12px;
    overflow: hidden;
    width: 100%;
    animation: ${ek} 5s ease-in-out infinite;
    background-color: rgba(0, 0, 0, 0.1);

    @media (max-width: 768px){
        border: none;
        padding: 5px;
        background-color: rgba(0, 0, 0, 0.1);
        animation: none;
        border-radius: 15px 15px 5px 5px;
    }
`,nk=k.img`
    width: 100%;
    height: 220px;
    object-fit: cover;
    border-radius: 10px;

    @media (max-width: 768px){
        border: 2px solid var(--color--black);
        height: 320px;
    }
`,rk=k.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: #333;
`,ik=k.h3`
    font-size: 22px;
    font-weight: bold;
    font-family: var(--font--comfortaa);
    margin: 0;
`,ak=k.p`
    font-size: 14px;
    color: #777;
    font-family: var(--font--avenir);
    margin: 0;
`,ok=k.div`
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    font-size: 12px;
    color: var(--color--black);

    span {
        display: flex;
        align-items: center;
        gap: 5px;
        background: var(--color--white);
        font-family: var(--font--comfortaa);
        padding: 5px 8px;
        border-radius: 8px;
        font-size: 10px;

        @media (max-width: 768px){
            background-color: var(--color--white);
        }
    }
`,sk=k.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
    font-size: 16px;
`,lk=k.p`
    font-size: 18px;
    font-family: var(--font--comfortaa);
    font-weight: bold;
    margin: 0;
    color: #333;

    & > span{
        font-size: 10px;
    }
`,vo=({events:e=[]})=>c.jsx(Jt,{modules:[vr,xr,Vn],autoplay:{delay:7e3,disableOnInteraction:!1,pauseOnMouseEnter:!0},spaceBetween:20,navigation:!0,pagination:!1,loop:!0,breakpoints:{1024:{slidesPerView:3},768:{slidesPerView:2},0:{slidesPerView:1}},children:e.map((t,n)=>c.jsx(en,{children:c.jsxs(tk,{"data-aos":"fade-up","data-aos-delay":"0",children:[c.jsx(nk,{src:t.image,alt:t.title,"data-aos":"fade-up","data-aos-delay":"100"}),c.jsxs(rk,{children:[c.jsx(ik,{"data-aos":"fade-up","data-aos-delay":"200",children:t.title}),c.jsx(ak,{"data-aos":"fade-down","data-aos-delay":"250",children:t.dateRange}),c.jsx(ok,{"data-aos":"fade-up","data-aos-delay":"300",children:t.features.map((r,i)=>c.jsxs("span",{"data-aos":"fade-up","data-aos-delay":"400",children:[r.icon," ",r.text]},i))}),c.jsx(sk,{children:c.jsxs(lk,{"data-aos":"fade-in","data-aos-delay":"500",children:["A partir de: ",c.jsx("span",{children:"10x"}),"R$",t.price]})}),c.jsx(Xi,{text:"Quero fazer minha reserva agora",text2:"Clique e reserve!",borderColor:"var(--color--black)",textColor:"var(--color--black)",hoverColor:"var(--color--black)",hoverTextColor:"var(--color--white)",onClick:()=>window.open("https://wa.link/dojlwi","_blank")})]})]})},n))});function ck(e){return ee({tag:"svg",attr:{viewBox:"0 0 1024 1024",fill:"currentColor",fillRule:"evenodd"},child:[{tag:"path",attr:{d:"M448 0C200.807 0 0 200.807 0 448s200.807 448 448 448 448-200.807 448-448S695.193 0 448 0m0 38.957c226.14 0 409.043 182.904 409.043 409.043 0 226.14-182.904 409.043-409.043 409.043-41.365 0-81.269-6.19-118.886-17.576 16.756-28.014 38.39-68.058 46.984-101.12 5.106-19.601 26.098-99.559 26.098-99.559 13.642 26.045 53.503 48.087 95.945 48.087 126.295 0 217.343-116.149 217.343-260.484 0-138.375-112.916-241.88-258.201-241.88-180.753 0-276.69 121.314-276.69 253.407 0 61.433 32.673 137.902 84.989 162.256 7.924 3.688 12.18 2.09 14-5.592 1.4-5.831 8.468-34.255 11.64-47.479 1.016-4.22.524-7.866-2.89-12.021-17.316-21.004-31.196-59.583-31.196-95.566 0-92.374 69.932-181.771 189.076-181.771 102.875 0 174.924 70.13 174.924 170.396 0 113.281-57.2 191.777-131.63 191.777-41.106 0-71.885-34.005-62.011-75.706 11.838-49.77 34.695-103.478 34.695-139.43 0-32.149-17.253-58.967-52.994-58.967-42.024 0-75.783 43.447-75.783 101.69 0 37.063 12.554 62.163 12.554 62.163s-41.511 175.51-49.114 208.174c-7.619 32.642-5.578 76.605-2.435 109.337C144.551 766.518 38.957 619.785 38.957 448 38.957 221.86 221.86 38.957 448 38.957",transform:"translate(64 64)"},child:[]}]})(e)}function dk(e){return ee({tag:"svg",attr:{viewBox:"0 0 1024 1024",fill:"currentColor",fillRule:"evenodd"},child:[{tag:"path",attr:{d:"M365.014.667C408.68 0 452.011.333 495.342 0c2.667 51 21 102.999 58.33 138.998 37.332 37 89.997 54 141.328 59.666v134.332c-47.998-1.667-96.33-11.667-139.994-32.333-19-8.667-36.665-19.667-53.998-31-.333 97.332.334 194.665-.666 291.663-2.667 46.666-18 93-44.998 131.332-43.665 64-119.328 105.665-196.992 106.999-47.664 2.666-95.329-10.334-135.994-34.333C55.028 725.658 7.696 652.992.697 574.993c-.667-16.667-1-33.333-.334-49.666 6-63.333 37.332-123.999 85.997-165.332 55.33-47.999 132.66-70.999 204.99-57.332.667 49.333-1.332 98.665-1.332 147.998-33-10.667-71.664-7.667-100.663 12.333-20.999 13.667-36.998 34.666-45.331 58.333-7 17-5 35.666-4.667 53.666 8 54.666 60.664 100.665 116.662 95.665 37.332-.333 72.997-22 92.33-53.666 6.332-11 13.332-22.333 13.665-35.333 3.334-59.666 2-118.998 2.334-178.664.333-134.332-.334-268.33.666-402.328",transform:"translate(165 112)"},child:[]}]})(e)}function uk(e){return ee({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"},child:[]}]})(e)}function fk(e){return ee({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M560 160A80 80 0 1 0 560 0a80 80 0 1 0 0 160zM55.9 512H381.1h75H578.9c33.8 0 61.1-27.4 61.1-61.1c0-11.2-3.1-22.2-8.9-31.8l-132-216.3C495 196.1 487.8 192 480 192s-15 4.1-19.1 10.7l-48.2 79L286.8 81c-6.6-10.6-18.3-17-30.8-17s-24.1 6.4-30.8 17L8.6 426.4C3 435.3 0 445.6 0 456.1C0 487 25 512 55.9 512z"},child:[]}]})(e)}function pk(e){return ee({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M16.2877 9.42773C15.413 7.97351 13.8195 7 12 7 9.23999 7 7 9.23999 7 12 7 14.76 9.23999 17 12 17 13.8195 17 15.413 16.0265 16.2877 14.5723L14.5729 13.5442C14.0483 14.4166 13.0927 15 12 15 10.3425 15 9 13.6575 9 12 9 10.3425 10.3425 9 12 9 13.093 9 14.0491 9.58386 14.5735 10.4568L16.2877 9.42773ZM22 12C22 6.47998 17.52 2 12 2 6.47998 2 2 6.47998 2 12 2 17.52 6.47998 22 12 22 17.52 22 22 17.52 22 12ZM4 12C4 7.57996 7.57996 4 12 4 16.42 4 20 7.57996 20 12 20 16.42 16.42 20 12 20 7.57996 20 4 16.42 4 12Z"},child:[]}]})(e)}const hk=k(Le.button)`
    font-family: inherit;
    width: 80%;
    border-radius: 20px 0 20px 0;
    font-size: 20px;
    background: #212121;
    color: white;
    padding: 0.5em 1em;
    display: flex;
    align-items: center;
    cursor: pointer;
    border: none;
    font-weight: 1000;

    @media (max-width: 768px){
        width: 100%;
        font-size: 10px;
        padding: 1em;
    }

    & > span {
        margin-left: 20px;
        transition: opacity 0.3s ease-in-out;
        font-family: var(--font--comfortaa);
        font-size: 15px;
    }

    & > svg {
        transition: transform 0.3s ease-in-out, color 0.3s ease-in-out;
        max-width: 100%;
    }

    &:hover {
        background: var(--color--blue);
    }

    &:hover > svg {
        transform: translateX(5px) scale(1.2);
        color: #fff;
    }

    &:active {
        transform: scale(0.95);
    }
`,mk=k(Le.footer)`
    height: auto;
    margin-top: 5vh;
    padding: 5% 5%;
    width: 96%;
    margin-left: 2%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--color--black);
    border-radius: 70px 70px 0 0;
    gap: 60px;

    @media (max-width: 768px){
        margin-top: 5vh;
        border-radius: 25px 25px 0 0;
        padding: 10% 5%;
    }
`,gk=k.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    gap: 30px;

    @media (max-width: 768px){
        width: 100%;
        align-items: center;
    }

    & > h1{
        font-family: var(--font--comfortaa);
        width: 70%;
        font-size: 28px;
        line-height: 100%;
        color: var(--color--white);
        font-weight: 400;

        @media (max-width: 768px){
            width: 80%;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            font-size: 20px;
        }
    }

    & > p {
        width: 80%;
        line-height: 110%;
        color: var(--color--white);
        font-family: var(--font--comfortaa);
        font-size: .9rem;

        @media (max-width: 768px){
            width: 90%;
            text-align: center;
            font-size: 12px;
        }
    }

    & > p > a{
        margin-left: 1ch;
        color: var(--color--blue);
    }

    & > hr{
        width: 85%;

        @media (max-width: 768px){
            display: none;
        }
    }

    & > div{
        width: 85%;
        display: flex;
        justify-content: space-between;
        margin-top: -25px;
        color: var(--color--white);
        font-family: var(--font--comfortaa);
        font-weight: 200;

        @media (max-width: 768px){
            display: none;
        }
    }

    & > div > div{
        display: flex;
        gap: 10px;
    }

    & > div > div > a {
        color: var(--color--white);
    }
`,vk=k.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;

    @media (max-width: 768px){
        width: 100%;
    }

    & > form{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 100%;
        gap: 10px;
    }

    & > form > input{
        width: 80%;
        height: 30px;
        border-radius: 0 20px 0 20px;
        border: none;
        padding: 20px;
        background-color: var(--color--white);
        font-family: var(--font--comfortaa);

        @media (max-width: 768px){
            width: 100%;
        }
    }
`,xk=k.section`
    display: flex;
    width: 100%;
    height: 35vh;

    @media (max-width: 768px){
        height: auto;
        flex-direction: column;
        gap: 25px;
    }
`,yk=k.section`
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    height: 30vh;

    @media (max-width: 768px){
        width: 100%;
        height: auto;
        flex-direction: column;
        gap: 50px;
    }

    & > div {
        width: 25%;
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 2px;

        @media (max-width: 768px){
         width: 100%;
        }
    }

    & > div p{
        color: var(--color--white);
        width: 80%;
        line-height: 100%;
        font-family: var(--font--comfortaa);
        margin-top: 10px;
        font-size: .9rem;

        @media (max-width: 768px){
            font-size: 16px;
        }
    }

    & > div h2{
        color: var(--color--white);
        font-family: var(--font--comfortaa);
        font-size: 18px;
        font-weight: 100;
        margin-bottom: 10px;

        @media (max-width: 768px){
            font-size: 20px;
        }
    }

    & > div a{
        color: var(--color--white);
        text-decoration: none;
        font-family: var(--font--comfortaa);
        display: flex;
        align-items: center;
        justify-content: flex-start;
        font-size: .9rem;
        font-weight: 200;
        gap: 2px;
        transition: all .2s ease!important;
        border-radius: 5px;
        width: 80%;
    }

    & > div a:hover{
        background-color: var(--color--white);
        transform: translateX(20px)!important;
        color: var(--color--black);
        width: 80%;
    }

    & > div > img {
        width: 40%;
        object-fit: contain;
    }
`,wk=k.section`
    width: 100%;
    height: 30vh;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    @media (max-width: 768px){
        height: auto;
        flex-direction: column;
    }

    & > h1{
        color: var(--color--white);
        font-family: var(--font--comfortaa);
        font-weight: 200;
        width: 30%;
        line-height: 100%;

        @media (max-width: 768px){
            width: 100%;
            font-size: 20px;
            text-align: center;
        }
    }
`,bk=k.hr`
    width: 100%;
    margin-bottom: -50px;
`,Sk=k.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 2vh;
    font-family: var(--font--comfortaa);

    @media (max-width: 768px){
        height: auto;
        flex-direction: column;
        gap: 15px;
    }

    & > p{
        color: var(--color--white);
        font-family: var(--font--comfortaa);
        font-size: 12px;
    }

    & > a{
        color: var(--color--blue);
        font-size: 12px;
    }

    & > p > b > a{
        color: var(--color--blue);
    }
`,yr=()=>{const e=j.useRef(null);L6(e,{once:!0});const[t,n]=j.useState(""),[r,i]=j.useState(""),[a,o]=j.useState(""),s=()=>`user_${Math.random().toString(36).substr(2,9)}_${Date.now()}`,l=()=>{const u=new URLSearchParams(window.location.search);return{utm_source:u.get("utm_source")||"organico",utm_medium:u.get("utm_medium")||"",utm_campaign:u.get("utm_campaign")||"",utm_term:u.get("utm_term")||"",utm_content:u.get("utm_content")||""}},d=async u=>{if(u.preventDefault(),!t||!r||!a){alert("Por favor, preencha todos os campos.");return}const p={id:s(),name:String(t).trim(),email:String(r).trim(),tel:String(a).trim(),conversion_url:window.location.href,...l()};try{const g=await fetch("https://hook.us1.make.com/e79ttwjdwv9soeppgqnu5rbnpk9l828e",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(p)}),x=await g.text();g.ok?(alert("Dados enviados com sucesso!"),n(""),i(""),o("")):(console.error("Erro de resposta:",x),alert("Erro ao enviar os dados: "+x))}catch(g){console.error("Erro:",g),alert("Erro ao enviar os dados. Tente novamente.")}};return c.jsx(c.Fragment,{children:c.jsxs(mk,{ref:e,children:[c.jsxs(xk,{children:[c.jsxs(gk,{children:[c.jsx("h1",{"data-aos":"fade-up",children:"Fale agora com a nossa Central de Reservas"}),c.jsxs("p",{"data-aos":"fade-up","data-aos-delay":"100",children:["As suas informações são mantidas em segurança e utilizadas apenas para entrar em contato. Entenda melhor como tratamos os seus dados pela nossa",c.jsx("a",{href:"https://drive.google.com/file/d/1hcfO5CfNmczgpg2h943ytwg9j0SR9Fas/view",target:"_blank",children:"política de privacidade"}),"."]}),c.jsx("hr",{"data-aos":"fade-right","data-aos-delay":"200"}),c.jsxs("div",{children:[c.jsx("h4",{"data-aos":"fade-up","data-aos-delay":"300",children:"Siga-nos"}),c.jsxs("div",{children:[c.jsx("a",{href:"https://instagram.com/pousadaleange",target:"_blank",rel:"noopener noreferrer","data-aos":"fade-up","data-aos-delay":"400",children:c.jsx(IC,{})}),c.jsx("a",{href:"https://tiktok.com/@pousadaleange",target:"_blank",rel:"noopener noreferrer","data-aos":"fade-up","data-aos-delay":"450",children:c.jsx(dk,{})}),c.jsx("a",{href:"https://pinterest.com/pousadaleange",target:"_blank",rel:"noopener noreferrer","data-aos":"fade-up","data-aos-delay":"500",children:c.jsx(ck,{})})]})]})]}),c.jsx(vk,{"data-aos":"fade-down","data-aos-delay":"500",children:c.jsxs("form",{id:"contactForm",onSubmit:d,children:[c.jsx("input",{type:"text",id:"name",placeholder:"Digite o seu nome",value:t,onChange:u=>n(u.target.value),"data-aos":"fade-up","data-aos-delay":"600"}),c.jsx("input",{type:"email",id:"email",placeholder:"Preciso saber o seu e-mail também",value:r,onChange:u=>i(u.target.value),"data-aos":"fade-up","data-aos-delay":"700"}),c.jsx("input",{type:"tel",id:"tel",placeholder:"Por fim, o seu número de WhatsApp",value:a,onChange:u=>o(u.target.value),"data-aos":"fade-up","data-aos-delay":"800"}),c.jsxs(hk,{type:"submit","data-aos":"fade-up","data-aos-delay":"1000",children:[c.jsx(uk,{size:20}),c.jsx("span",{children:"Enviar dados para contato"})]})]})})]}),c.jsxs(yk,{children:[c.jsxs("div",{children:[c.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/0b4e1dd7-194d-4d4c-da16-c16c77281000/public",alt:"Descrição da imagem",loading:"lazy","data-aos":"fade-up","data-aos-delay":"200"}),c.jsx("p",{"data-aos":"fade-down","data-aos-delay":"400",children:"A pousada mais Pet Friendly, venha conhecer!"})]}),c.jsxs("div",{children:[c.jsx("h2",{"data-aos":"fade-up","data-aos-delay":"50",children:"Mapa do site"}),c.jsxs("a",{href:"#","data-aos":"fade-down","data-aos-delay":"100",children:[" ",c.jsx(wt,{})," Início "]}),c.jsxs("a",{href:"#/sobre","data-aos":"fade-up","data-aos-delay":"150",children:[" ",c.jsx(wt,{})," Sobre nós "]}),c.jsxs("a",{href:"#/serra","data-aos":"fade-down","data-aos-delay":"200",children:[" ",c.jsx(wt,{})," Le Ange Serra "]}),c.jsxs("a",{href:"#/mar","data-aos":"fade-up","data-aos-delay":"250",children:[" ",c.jsx(wt,{})," Le Ange Mar "]}),c.jsxs("a",{href:"#/event","data-aos":"fade-down","data-aos-delay":"300",children:[" ",c.jsx(wt,{})," Eventos "]}),c.jsxs("a",{href:"#/acomodaSerra","data-aos":"fade-up","data-aos-delay":"350",children:[" ",c.jsx(wt,{})," Acomodações Serra "]}),c.jsxs("a",{href:"#/acomodaMar","data-aos":"fade-up","data-aos-delay":"400",children:[" ",c.jsx(wt,{})," Acomodações Mar "]})]}),c.jsxs("div",{children:[c.jsx("h2",{"data-aos":"fade-up","data-aos-delay":"400",children:"Central de reserva"}),c.jsxs("a",{href:"https://wa.link/dojlwi",target:"_blank","data-aos":"fade-up","data-aos-delay":"100",children:[" ",c.jsx(wt,{})," WhatsApp "]}),c.jsxs("a",{href:"https://wa.link/dojlwi",target:"_blank","data-aos":"fade-down","data-aos-delay":"150",children:[" ",c.jsx(wt,{})," +55 (21) 99423-0871 "]}),c.jsxs("a",{href:"mailto:pousadaleange@gmail.com",target:"_blank","data-aos":"fade-up","data-aos-delay":"200",children:[" ",c.jsx(wt,{})," pousadaleange@gmail.com "]})]}),c.jsxs("div",{children:[c.jsx("h2",{"data-aos":"fade-up","data-aos-delay":"600",children:"Fique por dentro de tudo"}),c.jsxs("a",{href:"https://www.instagram.com/pousadaleange/",target:"_blank","data-aos":"fade-down","data-aos-delay":"100",children:[" ",c.jsx(wt,{})," Instagram "]}),c.jsxs("a",{href:"https://www.tiktok.com/@pousadaleange",target:"_blank","data-aos":"fade-up","data-aos-delay":"150",children:[" ",c.jsx(wt,{})," TikTok "]}),c.jsxs("a",{href:"https://br.pinterest.com/pousadaleange/",target:"_blank","data-aos":"fade-down","data-aos-delay":"200",children:[" ",c.jsx(wt,{})," Pinterest "]})]})]}),c.jsxs(wk,{children:[c.jsx("h1",{"data-aos":"fade-down","data-aos-delay":"200",children:"Saiba onde estamos localizados"}),c.jsx("div",{children:c.jsx("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235239.22077211382!2d-43.355636!3d-22.461517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x99106a0d4d634d%3A0x5a069366075bf207!2sPousada%20Le%20Ange!5e0!3m2!1spt-BR!2sbr!4v1697101366468!5m2!1spt-BR!2sbr",width:"300",height:"150",style:{border:0,borderRadius:"15px 0px 15px 0px"},allowFullScreen:"",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade",title:"Mapa da Unidade Serra","data-aos":"fade-left","data-aos-delay":"300"})}),c.jsx("div",{children:c.jsx("iframe",{src:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14718.952062952678!2d-41.958707!3d-22.737977!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x97ab01cac79615%3A0x6b404b4741597da1!2sLeAnge%20Mar!5e0!3m2!1spt-BR!2sus!4v1728577984633!5m2!1spt-BR!2sus",width:"300",height:"150",style:{border:0,borderRadius:"0px 15px 0px 15px"},allowFullScreen:"",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade",title:"Mapa da Unidade Mar","data-aos":"fade-right","data-aos-delay":"400"})})]}),c.jsx(bk,{}),c.jsxs(Sk,{children:[c.jsxs("p",{children:["Todos os direitos reservados | ",c.jsx(pk,{})," 2024"]}),c.jsx("a",{href:"https://drive.google.com/file/d/1hcfO5CfNmczgpg2h943ytwg9j0SR9Fas/view",target:"_blank",children:"Termos de condições"}),c.jsxs("p",{children:["Desenvolvido por ",c.jsx("b",{children:c.jsx("a",{href:"https://www.linkedin.com/in/aleph-ramos",target:"_blank",children:"Aleph"})})]})]})]})})};function Cu(e){return ee({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M19.5 14.625c0 .995-.524 1.482-1.5 1.5H6c-.976-.018-1.5-.505-1.5-1.5s.524-1.482 1.5-1.5h12c.976.018 1.5.505 1.5 1.5m-1.5 2.25H6c-.976.018-1.5.505-1.5 1.5s.524 1.482 1.5 1.5h12c.976-.018 1.5-.505 1.5-1.5s-.524-1.482-1.5-1.5m3.75-8.248v-.001c-.976.017-1.5.504-1.5 1.499v8.25c0 .995.524 1.482 1.5 1.5v-.002c1.464-.052 2.25-1.514 2.25-4.498v-3.75c0-1.99-.786-2.964-2.25-2.998m-19.5-.001C.786 8.662 0 9.637 0 11.626v3.75c0 2.984.786 4.446 2.25 4.498v.001c.976-.017 1.5-.504 1.5-1.499v-8.25c0-.995-.524-1.482-1.5-1.5m19.5-.75c0-2.486-1.31-3.705-3.75-3.748v-.002H6v.002c-2.44.043-3.75 1.262-3.75 3.748v.001c1.464.026 2.25.757 2.25 2.249s.786 2.223 2.25 2.249v.001h10.5v-.001c1.464-.026 2.25-.757 2.25-2.249s.786-2.223 2.25-2.249z"},child:[]}]})(e)}function Ky(e){return ee({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17.8 20l-12 -1.5c-1 -.1 -1.8 -.9 -1.8 -1.9v-9.2c0 -1 .8 -1.8 1.8 -1.9l12 -1.5c1.2 -.1 2.2 .8 2.2 1.9v12.1c0 1.2 -1.1 2.1 -2.2 1.9z"},child:[]},{tag:"path",attr:{d:"M12 5l0 14"},child:[]},{tag:"path",attr:{d:"M4 12l16 0"},child:[]}]})(e)}const jk=Ki`
  .swiper-button-next, .swiper-button-prev {
      color: white; 
      background-color: black;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
      
      &:hover {
          background-color: white;
          color: black;
          transform: scale(1.05);
      }
  }
  .swiper-pagination-bullet {
      background: black;
      opacity: 0.7;
      &.swiper-pagination-bullet-active {
          background: #A5C933;
      }
  }
`,Xy=Dn`
  0% { border-radius: 0 30px 20px 0; }
  25% { border-radius: 20px 0 30px 20px; }
  50% { border-radius: 30px 20px 0 30px; }
  75% { border-radius: 30px 30px 20px 0; }
  100% { border-radius: 0 20px 30px 0; }
`,Ck=k.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 30%;
    border-radius: 25px 0 25px 0;
    background: linear-gradient(0deg, rgba(255, 255, 255, 1 ), rgba(0, 0, 0, 0)); 
    pointer-events: none;
    animation: ${Xy} 5s ease-in-out infinite;
    z-index: 1;

    @media (max-width: 768px){
        border-radius: 20px 0 20px 0;
        animation: none;
    }
`,kk=k.div`
  position: relative;
  width: 100%;
  height: 95vh;
  display: flex;
  align-items: flex-end;
  background-size: cover;
  background-position: center;
  animation: ${Xy} 5s ease-in-out infinite;

  @media (max-width: 768px){
    animation: none!important;
    border-radius: 20px 0 20px 0;
    height: 80vh;
  }
`,Tk=k.div`
  position: absolute;
  bottom: 30px;
  left: 20px;
  color: white;
  z-index: 10;
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 90%;

  @media (max-width: 768px){
    display: flex;
    flex-direction: column;
    gap: 7px;
    width: 90%;
  }
`,Ak=k.h2`
  font-size: 20px;
  font-weight: bold;
  font-family: var(--font--comfortaa);

  @media (max-width: 768px){
    font-family: var(--font--comfortaa);
    font-size: 1.4rem;
    font-weight: 800;
  }
`,Ek=k.p`
  font-size: 13px;
  margin: 0px 0;
  font-family: var(--font--comfortaa);

  @media (max-width: 768px){
    font-size: 12px;
    font-weight: 200;
    width: 80%;
    line-height: 100%;
    font-family: var(--font--comfortaa);
    margin: 0;
  }
`,Pk=k.div`
  display: flex;
  gap: 5px;
  margin-top: 5px;
  flex-wrap: wrap;
  margin-bottom: 10px;

  @media (max-width: 768px){
    gap: 6px;
  }

  span {
      display: flex;
      align-items: center;
      gap: 5px;
      background: rgba(0, 0, 0, 0.5);
      padding: 4px 8px;
      border-radius: 5px 0 5px 0;
      font-size: 10px;
      font-family: var(--font--comfortaa);

      @media (max-width: 768px){
        font-size: 10px;
        padding: 5px 8px;
        border-radius: 6px;
      }

      &:hover {
          color: black;
          background-color: white;
      }
  }

  svg {
      font-size: 12px;

      @media (max-width: 768px){
        font-size: 12px;
      }
  }
`,Gk=k.div`
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
`,zk=({content:e=[],spaceBetween:t=10,autoplayDelay:n=3e3,showPagination:r=!0,showNavigation:i=!0})=>(jl(),c.jsxs(Gk,{children:[c.jsx(jk,{}),c.jsx(Jt,{modules:[vr,xr,Vn],navigation:i,pagination:!1,spaceBetween:t,loop:!0,slidesPerView:1,autoplay:{delay:n,disableOnInteraction:!1,pauseOnMouseEnter:!0},breakpoints:{640:{slidesPerView:1},1024:{slidesPerView:3}},children:e.map((a,o)=>c.jsxs(en,{children:[c.jsx(Ck,{}),c.jsx(kk,{style:{backgroundImage:`url(${a.backgroundImage})`},children:c.jsxs(Tk,{"data-aos":"fade-down","data-aos-delay":"100",children:[c.jsx(Ak,{children:a.title}),c.jsx(Ek,{children:a.subtitle}),c.jsx(Pk,{children:a.features.map((s,l)=>c.jsxs("span",{children:[s.icon," ",s.text]},l))}),c.jsx(mp,{onClick:()=>{const s=`/leange/#/acomoda${a.id}`;window.location.href=s},text:"Conhecer essa acomodação",suiteId:a.id})]})})]},o))})]})),_k=Dn`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`,Qy=k.button`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  position: fixed;
  bottom: 15px;
  left: 15px;
  overflow: hidden;
  transition: width 0.3s ease-in-out, border-radius 0.3s ease-in-out;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.199);
  background-color: #00d757;
  z-index: 1000;
  animation: ${_k} .5s infinite;

  &:hover {
    width: 325px;
    border-radius: 40px;
  }

  &:active {
    transform: translate(2px, 2px);
  }
`,Mk=k.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;  
  transition: width 0.3s ease-in-out;
`,Lk=k.div`
  position: absolute;
  left: 0;  
  width: 0;
  opacity: 0;
  color: white;
  font-size: 1rem;
  font-weight: 300;
  transition: opacity 0.3s ease-in-out, width 0.3s ease-in-out;
  padding-left: 125px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font--comfortaa)!important;
  white-space: nowrap;

  ${Qy}:hover & {
    width: 70%;
    opacity: 1;
  }
`,Nn=()=>{const e="https://wa.link/dojlwi";return c.jsxs(Qy,{onClick:()=>window.open(e,"_blank"),children:[c.jsx(Mk,{children:c.jsx($6,{color:"white",size:"30px"})}),c.jsx(Lk,{children:"Fale com a central de reservas"})]})},Ok=[{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a4f0a292-2de1-4a0a-9c78-b40450f19a00/public",alt:"Mulher na rede",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/74bff9be-8742-4468-e032-4cf79abe5300/public",alt:"Foto da pousada le ange vista de cima",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/0f8625da-9e5c-4a5a-e289-7351383ead00/public",alt:"2 cachorros na piscina",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/f4a1515f-dd60-47ad-f799-1a1813af9300/public",alt:"Foto da pousada vista de baixo",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/7c086b71-3c6b-442b-584c-dcdabe1be700/public",alt:"Foto da sala de estar da pousada le ange serra",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a310fb24-c12e-431f-e5d1-6a12b8ff7500/public",alt:"2 cachorros na cama no meio do quintal",loading:"lazy"}],Ik=[{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/2edd1026-cdea-4ac6-f501-713bba86d600/public",alt:"Foto da pousada le ange mar",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/c15257b6-956b-4f1d-ee81-9870ce695d00/public",alt:"2 pessoas na rede na pousada le ange mar",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/ff1e37f5-c2ef-407f-b2fe-e3af31bc2900/public",alt:"Foto de churrasco",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/0d4896d4-5675-4739-7cb3-30fc1c6dec00/public",alt:"Cachorro olhando para a câmera",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/09da9d76-57b8-4d44-02b2-3c4c2380c800/public",alt:"Pousada le ange mar vista de cima",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/8565ac88-9f3c-4932-ef3a-cfff9c543600/public",alt:"Sala de estar na le ange mar com o quadro na parede",loading:"lazy"}],Rk=[{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a4f0a292-2de1-4a0a-9c78-b40450f19a00/public",alt:"Pessoa na rede",label:"Le Ange Serra",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/0f8625da-9e5c-4a5a-e289-7351383ead00/public",alt:"2 cachorros na piscina",label:"Le Ange Serra",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/7c086b71-3c6b-442b-584c-dcdabe1be700/public",alt:"Sala de estar na le ange serra",label:"Le Ange Serra",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/902b9f7b-b521-4545-08ee-f5386e777400/public",alt:"Hot Tube na le ange serra",label:"Le Ange Serra",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/81b9f4b9-48ac-4aeb-76be-57b13ddd7300/public",alt:"2 pessoas bebendo na le ange mar",label:"Le Ange Mar",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/fabb090f-5470-4b80-d24e-212cea38ef00/public",alt:"2 pessoas na le ange mar",label:"Le Ange Mar",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/aee972d8-1698-4318-7f15-6ecd607c8f00/public",alt:"Sala de estar da le ange mar",label:"Le Ange Mar",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/345b0279-69a3-47ee-31f9-a018b8459000/public",alt:"Por do sol na le ange",label:"Le Ange Serra",loading:"lazy"}],Dk=[{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/e6da9939-7a24-41a2-9002-2f3da2707f00/public",alt:"Foto do quarto na le ange",label:"Le Ange Mar",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/ff1e37f5-c2ef-407f-b2fe-e3af31bc2900/public",alt:"Foto de churrasqueira na le ange mar",label:"Le Ange Mar",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/d9be2586-3341-4990-f3c8-685edcad8900/public",alt:"Cachorro com a cabeça recostada na mão do tutor",label:"Le Ange Serra",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/ca87e74f-2193-4308-4ce7-737e3d878f00/public",alt:"Uma pessoa e um cachorro na piscina",label:"Le Ange Serra",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/c7b74408-cebf-4bb7-dc9a-36170887c100/public",alt:"2 taças com um fundo de por do sol",label:"Le Ange Mar",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a310fb24-c12e-431f-e5d1-6a12b8ff7500/public",alt:"2 cachorros em uma cama no meio do jardim",label:"Le Ange Serra",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/8565ac88-9f3c-4932-ef3a-cfff9c543600/public",alt:"Foto do quadro de cachorro na le ange mar",label:"Le Ange Serra",loading:"lazy"}],Nm=k.section`
    width: 100%;
    height: 60vh;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 0 5%;

    &:nth-child(2){
        @media (max-width: 768px){
            flex-direction: column;
            position: relative!important;
            z-index: -100!important;
        
        }
    }

    @media (max-width: 768px){
        flex-direction: column-reverse;
        position: relative;
        z-index: -100!important;
    
        height: auto;

        .slider{
            width: 100%;    
        }
    }


`,Vk=k.div`
    width: 100%;
    height: 160vh;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    justify-content: center;
    padding: 0;

    @media (max-width: 768px){
        height: auto;
        padding: 10% 0;
        position: relative!important;
        z-index: 10!important; /* Isso aqui resolve o erro do botão e o carrossel não funcionar */
    
    }
`,Nk=k.aside`
    & > h1 {
        font-family: var(--font--comfortaa);
        width: 100%;
        text-align: center;
        color: var(--color--black);
        font-weight: 200;

        & > b{
            font-weight: 300;
        }

        @media (max-width: 768px){
            font-size: 22px;
            width: 100%;
            margin-top: 0vh;
            height: auto;

        }
    }

    & > p {
        font-family: var(--font--comfortaa);
        width: 100%;
        text-align: center;
        color: var(--color--black);
        font-weight: 200;
        
        @media (max-width: 768px){
            font-size: 12px;
            margin-top: 10px;

        }
    }
`,Fk=[{id:"Serra#suite1",title:"Suíte Superior 1",subtitle:"Pousada Le Ange Serra | Miguel Pereira - RJ",backgroundImage:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/c21ef88c-f22b-497e-1e70-5c5b4c4cf500/public",features:[{icon:c.jsx(Ce,{}),text:"52m²"},{icon:c.jsx(Zr,{}),text:"Ar condicionado"},{icon:c.jsx(Re,{}),text:"Cama king size"},{icon:c.jsx(Ee,{}),text:"Banheira"},{icon:c.jsx(_e,{}),text:"Smart TV com canais a cabo"},{icon:c.jsx(ct,{}),text:"Lareira"}]},{id:"Serra#suite2",title:"Suíte Standard 2",subtitle:"Pousada Le Ange Serra | Miguel Pereira - RJ",backgroundImage:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/23d18593-f941-4c65-0349-6b23e6ea2800/public",features:[{icon:c.jsx(Ce,{}),text:"52m²"},{icon:c.jsx(Zr,{}),text:"Ar condicionado"},{icon:c.jsx(Re,{}),text:"Cama king size"},{icon:c.jsx(Ee,{}),text:"Banheira"},{icon:c.jsx(_e,{}),text:"Smart TV com canais a cabo"},{icon:c.jsx(ct,{}),text:"Lareira"}]},{id:"Serra#suite6",title:"Suíte Master 6",subtitle:"Pousada Le Ange Serra | Miguel Pereira - RJ",backgroundImage:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/48a11406-659c-4d98-f2d8-6fc518ef6600/public",features:[{icon:c.jsx(Ce,{}),text:"93m²"},{icon:c.jsx(Zr,{}),text:"Ar condicionado"},{icon:c.jsx(Re,{}),text:"Cama king size"},{icon:c.jsx(Ee,{}),text:"Banheira"},{icon:c.jsx(Cu,{}),text:"Couch lounge"},{icon:c.jsx(Ky,{}),text:"Bay window"}]},{id:"Mar#suite6",title:"Suíte Standard 6",subtitle:"Pousada Le Ange Mar | Búzios - RJ",backgroundImage:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/4d6afdaf-1cfe-4860-8099-818abedfdd00/public",features:[{icon:c.jsx(Ce,{}),text:"45m²"},{icon:c.jsx(Zr,{}),text:"Ar condicionado"},{icon:c.jsx(Re,{}),text:"Cama king size"},{icon:c.jsx(Ee,{}),text:"Banheira"},{icon:c.jsx(_e,{}),text:"Smart TV com canais a cabo"},{icon:c.jsx(ct,{}),text:"Lareira"}]},{id:"Mar#suite2",title:"Suíte Standard 2",subtitle:"Pousada Le Ange Mar | Búzios - RJ",backgroundImage:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/2c65f24d-c113-4ea7-def4-783519605e00/public",features:[{icon:c.jsx(Ce,{}),text:"45m²"},{icon:c.jsx(Zr,{}),text:"Ar condicionado"},{icon:c.jsx(Re,{}),text:"Cama king size"},{icon:c.jsx(Ee,{}),text:"Banheira"},{icon:c.jsx(_e,{}),text:"Smart TV com canais a cabo"},{icon:c.jsx(ct,{}),text:"Lareira"}]},{id:"Serra#suite10",title:"Suíte Master 10",subtitle:"Pousada Le Ange Serra | Miguel Pereira - RJ",backgroundImage:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/5b3e8e3c-57ba-4e47-dd41-7b4a32d25f00/public",features:[{icon:c.jsx(Ce,{}),text:"80m²"},{icon:c.jsx(Zr,{}),text:"Ar condicionado"},{icon:c.jsx(Re,{}),text:"Cama king size"},{icon:c.jsx(gp,{}),text:"Recamier e poltrona de leitura"},{icon:c.jsx(Cu,{}),text:"Couch lounge"},{icon:c.jsx(ct,{}),text:"Lareira"}]}],$k=k.section`
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
    padding: 2.5% 5%;
    position: relative;
    
    &::before{
        content: '';
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        position: absolute;
        background-color: rgba(0, 0, 0, 0.1);
        clip-path: polygon(1% 1%, 99% 1%, 99% 85%, 1% 85%);
    }

    @media (max-width: 768px){
        height: auto;
        padding: 10% 5%;
        gap: 25px;
        clip-path: polygon(2% 2%, 98% 2%, 98% 98%, 2% 98%);
    }
`,Bk=[{backgroundImage:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/0f8625da-9e5c-4a5a-e289-7351383ead00/public",title:"100% Pet Friendly",description:"Não temos restrições quanto ao porte ou à raça do seu pet, nem cobramos taxas adicionais para a vinda deles. Na Le Ange, o seu pet tem total liberdade para acessar todas as nossas comodidades!",buttonText:"Viver minha experiência agora",topLeftText:"Le Ange Serra e Mar"},{backgroundImage:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/da4810e5-6e85-45f5-1fcf-f6a74754bd00/public",title:"Praia",description:"Para os amantes da praia, estamos localizados a apenas 150 metros da Praia Rasa, onde você e o seu pet podem aproveitar juntinhos e dar um mergulho delicioso no mar.",buttonText:"Viver minha experiência agora",topLeftText:"Le Ange Mar"},{backgroundImage:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/902b9f7b-b521-4545-08ee-f5386e777400/public",title:"Sossego",description:"A área da sauna fica situada ao lado da mata, envolvida pelo som relaxante do rio que passa. Aqui, você pode desfrutar de um HotTub abastecido por água natural e aquecido à lenha, o combo perfeito para você relaxar.",buttonText:"Viver minha experiência agora",topLeftText:"Le Ange Serra"},{backgroundImage:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/09da9d76-57b8-4d44-02b2-3c4c2380c800/public",title:"Piscinas",description:"Nossa piscina aquecida possui um tratamento especial por ozônio com níveis baixíssimos de cloro - aqui, tudo é pensando para o bem-estar da sua pele a do seu pet também!",buttonText:"Viver minha experiência agora",topLeftText:"Le Ange Mar e Serra"},{backgroundImage:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/179ab52c-353f-442a-ffe5-0a71f6922f00/public",title:"Cozinha",description:"Na sua hospedagem, todas as refeições estão incluídas: café da manhã, almoço, chá da tarde e jantar! Também, aceitamos todas as restrições alimentares para garantir que todos desfrutem da nossa gastronomia.",buttonText:"Viver minha experiência agora",topLeftText:"Le Ange Serra e Mar"},{backgroundImage:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/0d1d1a6a-5935-4c57-6b12-d1f028604400/public",title:"Ofurôs",description:"São dois ofurôs acoplados na piscina, para você relaxar na água quentinha, apreciando a vista exuberante do mar.",buttonText:"Viver minha experiência agora",topLeftText:"Le Ange Mar"},{backgroundImage:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/c57174c4-9b12-4842-e8ff-6cfb4867a200/public",title:"Diversão",description:"Espaço de sobra para o seu pet se divertir! Espaço agility à beira do lago, com muita grama, para o seu pet, correr, pular, brincar e, claro, nadar!",buttonText:"Viver minha experiência agora",topLeftText:"Le Ange Serra"},{backgroundImage:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/67318553-8e4b-4d4c-b914-3ea76fc7be00/public",title:"Bar",description:"Para completar ainda mais a sua experiência, contamos com uma carta variada de vinhos, destilados, drinks e cervejas!",buttonText:"Viver minha experiência agora",topLeftText:"Le Ange Mar"},{backgroundImage:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/1a66d627-7861-4124-638d-d21ddef05100/public",title:"Adega",description:"Para tornar a sua experiência ainda mais especial, contamos com uma adega subterrânea para a climatização perfeita dos vinhos, bar com carta variada de drinks, cervejas e destilados.",buttonText:"Viver minha experiência agora",topLeftText:"Le Ange Serra"},{backgroundImage:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/939f40ce-048b-4746-7ce7-83fc2f4bbc00/public",title:"Suítes",description:"Nossas suítes são, elegantemente, decoradas. Todas com vistas maravilhosas, banheira de imersão, cama king-size, varanda, ar-condicionado e frigobar.",buttonText:"Viver minha experiência agora",topLeftText:"Le Ange Mar e Serra"}],Hk=k.div`
    height: 110vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
    position: relative;

    @media (max-width: 768px){
        height: auto;
        padding: 10% 0;
    }

    &::before {
        background-position: center;
        background-size: contain;
        opacity: 0.1;
        width: 100%;
        margin-top: 10vh;
        border-radius: 0 0 100px 100px / 100px 100px;
        height: 90%;
        content: '';
        top: 0;
        left: 0;
        position: absolute;
    }

`,Uk=k.h1`
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    font-family: var(--font--comfortaa);
    color: var(--color--black);
    font-weight: 200;

    & > b{
        font-weight: 400;
    }

    @media (max-width: 768px){
        display: inline-block;
        font-size: 1.3rem;
        line-height: 110%;
        width: 95%;
        margin-left: 2.5%;
    }
`,Yc=k.h1`
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    font-family: var(--font--comfortaa);
    color: var(--color--black);
    font-size: 1.5rem;
    font-weight: 200;

    & > b{
        font-weight: 400;
    }

    @media (max-width: 768px){
        display: inline-block;
        font-size: 1.3rem;
        line-height: 110%;
        width: 100%;
        margin-left: 0%;
    }

`,Ho=k.p`
    width: 100%;
    text-align: center;
    font-family: var(--font--comfortaa);
    color: var(--color--black);
    opacity: 0.7;
    font-family: 200;
    font-size: .9rem;

    @media (max-width: 768px){
        font-size: 0.9rem;
        margin-top: 5px;
    }
`,Wk=[{image:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/bbca820c-502b-48cf-a6d6-8a4d4da25900/public",title:"Noite das pizzas",dateRange:"06/12/2024 até 08/12/2024 (3 diárias)",features:[{icon:c.jsx(re,{}),text:"07/12 - Noite das pizzas"},{icon:c.jsx(re,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(xe,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"359,20",discount:25},{image:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/79fdce4b-cea9-43ec-5c67-2235d2319a00/public",title:"Frutos do Mar",dateRange:"13/12/2024 até 15/12/2024 (2 diárias)",features:[{icon:c.jsx(re,{}),text:"14/12 - Frutos do Mar"},{icon:c.jsx(re,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(xe,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"359,20",discount:25},{image:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/58c77a3d-d9fb-422f-c84b-ad4798b74600/public",title:"Fique 4 pague 3",dateRange:"Segunda-feira a Sexta-feira",features:[{icon:c.jsx(re,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(hn,{}),text:"Até 12X SEM JUROS"},{icon:c.jsx(xe,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"538,90",discount:25},{image:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/1e2853af-cbe7-48ba-a6cc-7e36642f0f00/public",title:"Pacote de Natal",dateRange:"21/12/2024 até 25/12/2024 (4 diárias)",features:[{icon:c.jsx(re,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(hn,{}),text:"Até 12X SEM JUROS"},{icon:c.jsx(xe,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"918,40",discount:25},{image:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/70044ef4-2814-404f-5465-3e5acefd8600/public",title:"Pacoto Ano Novo",dateRange:"28/12/2024 até 01/01/2025 (4 diárias)",features:[{icon:c.jsx(re,{}),text:"31/12 - Ceia maravilhosa"},{icon:c.jsx(re,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(xe,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"1171,50",discount:25}],qk=k.section`
    height: 80vh;
    margin-bottom: 10vh;
    margin-top: 2.5vh;

    @media (max-width: 768px){
        height: auto;
        margin-bottom: 5vh;
        margin-top: 5vh;
    }
    
`,Yk=k.section`
    width: 100%;
    height: 80vh;
    padding: 0 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2.5%;

    @media (max-width: 768px){
        height: auto;
        padding: 5% 2.5%;
    }
`,Fm=k.b`
    color: var(--color--green);
`,Kc=k.b`
    color: var(--color--blue);
`,Kk=k.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 15vh;
    margin-top: -10vh;
    margin-bottom: 5vh;

    @media (max-width: 768px){
        margin-bottom: 5vh;
        margin-top: -5vh;
        height: 10vh;
    }
`,Xk=k.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 0 0 1000px 1000px / 100px 100px;
    overflow: hidden;

    @media (max-width:768px){
        flex-direction: column;
    }

    & > img{
        width: 50%;
        height: 100%;
        object-fit: cover;

        @media (max-width:768px){
            width: 100%;
            height: 50%;
            object-position: center;
        }
        
    }
`,Qk=()=>(j.useEffect(()=>{Ie.init({duration:1e3,once:!0})},[]),c.jsxs(c.Fragment,{children:[c.jsx(In,{children:c.jsx("title",{children:"Início - Pousada Le Ange"})}),c.jsxs(Xk,{children:[c.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732728790/foto_de_mulher_com_dois_cachorros_bwwkmi_pyqnx0.jpg"}),c.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732728789/FOTO-MAR_qssync_ei8mel.webp"})]}),c.jsx(Nn,{}),c.jsxs(Vk,{containerAnimation:{opacity:0,scale:.8},titleAnimation:{opacity:0,y:-50},textAnimation:{opacity:0,x:50},buttonAnimation:{opacity:0,scale:.5},animationDuration:.7,children:[c.jsxs(Nk,{children:[c.jsxs("h1",{"data-aos":"fade-up",children:["Pousada",c.jsx(Kc,{children:" 100% Pet Friendly"})," que aceita humanos de estimação"]}),c.jsx("p",{"data-aos":"fade-up","data-aos-delay":"200",children:"2 unidades, 2 cenários incomparáveis"})]}),c.jsxs(Nm,{"data-aos":"fade-up",children:[c.jsx(Rm,{content:Ok,spaceBetween:20,slidesPerView:1,height:"60vh",contentType:"image",showPagination:!1}),c.jsx(Vm,{title:"Le Ange Serra - Miguel Pereira RJ",text:"Na Le Ange Serra, costumamos dizer que a hospedagem é muito mais do que um final de semana para relaxar. É uma experiência única ao lado do seu pet entre as belezas naturais da Mata Atlântica, para que você colecione os melhores momentos ao lado dele!",borderColor:"var(--color--green)",borderRadius:"30px",buttonColor:"var(--color--green)",buttonBorder:"1px solid var(--color--black)",targetPage:"/serra"})]}),c.jsxs(Nm,{"data-aos":"fade-up","data-aos-delay":"200",children:[c.jsx(Vm,{title:"Le Ange Mar - Búzios RJ",text:"Situada no coração do Arpoador da Praia Rasa, na Le Ange Mar, oferecemos uma experiência memorável, onde a praia está a poucos passos da pousada e o seu pet é, calorosamente, recebido para momentos especiais à beira-mar.",borderColor:"var(--color--blue)",borderRadius:"30px",buttonColor:"var(--color--blue)",buttonBorder:"1px solid var(--color--black)",targetPage:"/mar"}),c.jsx(Rm,{content:Ik,spaceBetween:20,slidesPerView:1,width:"60%",height:"60vh",contentType:"image",showPagination:!1})]})]}),c.jsxs($k,{children:[c.jsxs("div",{children:[c.jsxs(Uk,{"data-aos":"fade-up",children:["Nossas suítes ",c.jsx(Fm,{children:"mais procuradas"})," "]}),c.jsx(Ho,{"data-aos":"fade-up","data-aos-delay":"200",children:"Já consegue se imaginar dormindo aqui ao lado do seu pet?"})]}),c.jsx(zk,{content:Fk})]}),c.jsxs(Hk,{children:[c.jsxs("div",{children:[c.jsxs(Yc,{"data-aos":"fade-up",children:["Mais que Pet Friendly, ",c.jsx(Kc,{children:"Pet Lovers"})]}),c.jsx(Ho,{"data-aos":"fade-up","data-aos-delay":"200",children:"Venha viver essa experiência"})]}),c.jsx(XC,{content:Bk,spaceBetween:20,width:"100%",height:"70vh",showPagination:!1,showNavigation:!0})]}),c.jsxs("div",{children:[c.jsxs(Yc,{"data-aos":"fade-up",children:[" ",c.jsx(Fm,{children:"Viva"})," essa experiência "]}),c.jsx(Ho,{"data-aos":"fade-up","data-aos-delay":"200",children:"Alguns dos nossos momentos"})]}),c.jsxs(qk,{"data-aos":"fade-in",children:[c.jsx(ju,{images:Rk}),c.jsx(ju,{images:Dk,reverse:!0})]}),c.jsx(Kk,{children:c.jsx(dt,{text:"Fazer minha reserva!"})}),c.jsxs("div",{children:[c.jsxs(Yc,{"data-aos":"fade-up",children:["Conheça nossos pacotes e ",c.jsx(Kc,{children:"noites especiais"})," "]}),c.jsx(Ho,{"data-aos":"fade-up","data-aos-delay":"200",children:"Estamos te esperando!"})]}),c.jsx(Yk,{"data-aos":"fade-in","data-aos-delay":"250",children:c.jsx(vo,{events:Wk})}),c.jsx(yr,{})]}));function Zk(e){return ee({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 8c-2.168 0-4 1.832-4 4s1.832 4 4 4 4-1.832 4-4-1.832-4-4-4zm0 6c-1.065 0-2-.935-2-2s.935-2 2-2 2 .935 2 2-.935 2-2 2z"},child:[]},{tag:"path",attr:{d:"M20 5h-2.586l-2.707-2.707A.996.996 0 0 0 14 2h-4a.996.996 0 0 0-.707.293L6.586 5H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V7c0-1.103-.897-2-2-2zM4 18V7h3c.266 0 .52-.105.707-.293L10.414 4h3.172l2.707 2.707A.996.996 0 0 0 17 7h3l.002 11H4z"},child:[]}]})(e)}function Jk(e){return ee({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412l7.332 7.332c.17.299.498.492.875.492a.99.99 0 0 0 .792-.409l7.415-7.415c2.354-2.354 2.354-6.049-.002-8.416a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595zm6.791 1.61c1.563 1.571 1.564 4.025.002 5.588L12 18.586l-6.793-6.793c-1.562-1.563-1.561-4.017-.002-5.584.76-.756 1.754-1.172 2.799-1.172s2.035.416 2.789 1.17l.5.5a.999.999 0 0 0 1.414 0l.5-.5c1.512-1.509 4.074-1.505 5.584-.002z"},child:[]}]})(e)}function eT(e){return ee({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M20.787 9.023c-.125.027-1.803.418-3.953 1.774-.323-1.567-1.279-4.501-4.108-7.485L12 2.546l-.726.767C8.435 6.308 7.483 9.25 7.163 10.827 5.005 9.448 3.34 9.052 3.218 9.024L2 8.752V10c0 7.29 3.925 12 10 12 5.981 0 10-4.822 10-12V8.758l-1.213.265zM8.999 12.038c.002-.033.152-3.1 3.001-6.532C14.814 8.906 14.999 12 15 12v.125a18.933 18.933 0 0 0-3.01 3.154 19.877 19.877 0 0 0-2.991-3.113v-.128zM12 20c-5.316 0-7.549-4.196-7.937-8.564 1.655.718 4.616 2.426 7.107 6.123l.841 1.249.825-1.26c2.426-3.708 5.425-5.411 7.096-6.122C19.534 15.654 17.304 20 12 20z"},child:[]}]})(e)}function $m(e){return ee({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M20.832 4.555A1 1 0 0 0 20 3H4a1 1 0 0 0-.832 1.554L11 16.303V20H8v2h8v-2h-3v-3.697l7.832-11.748zm-2.7.445-2 3H7.868l-2-3h12.264z"},child:[]}]})(e)}function Xe(e){return ee({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M18 2H6c-1.103 0-2 .897-2 2v5h4V6h2v3h10V4c0-1.103-.897-2-2-2zm-8 13H8v-5H4v10c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V10H10v5z"},child:[]}]})(e)}function Bm(e){return ee({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"},child:[]}]})(e)}const tT=Ki`
.swiper-button-next, .swiper-button-prev {
        color: var(--color--white); 
        background-color: var(--color--black);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
        transition: all .2s;

        @media (max-width: 768px){
            z-index: 1000;
        }

        &:hover {
            background-color: var(--color--white);
            color: var(--color--black);
            transform: scale(1.05);
        }

        &:after {
            font-size: 20px;
        }
    }
    .swiper-pagination-bullet {
        background: var(--color--black);
        opacity: 0.7;
        width: 12px;
        height: 12px;
        margin: 0 5px;
        &.swiper-pagination-bullet-active {
            background: #A5C933;
            opacity: 1;
        }
    }
`,nT=Dn`
  0% {
    border-radius: 0 60px 20px 0;
  }
  25% {
    border-radius: 20px 0 60px 20px;
  }
  50% {
    border-radius: 60px 20px 0 60px;
  }
  75% {
    border-radius: 60px 60px 20px 0;
  }
  100% {
    border-radius: 0 20px 60px 0;
  }
`,rT=k(Le.img)`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50px 0 30px 0;

    @media (max-width: 768px){
        border-radius: 0 15px 0 20px;
    }
`,iT=k(Le.div)`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  border-radius: 0 20px 20px 0;
  animation: ${nT} 5s ease-in-out infinite;
  background-image: ${({backgroundImage:e})=>`url(${e})`};
  background-size: cover;
  background-position: center;
`,aT=k(Le.div)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 4px;
    border-radius: inherit;
    background: linear-gradient(45deg, #00000080, #0001);
    -webkit-mask-image: linear-gradient(#fff, #fff);
    mask-image: linear-gradient(#fff, #fff);
    pointer-events: none;
`,oT=k(Le.div)`
    position: absolute;
    bottom: 20px;
    left: 20px;
    color: var(--color--white);
    font-family: Arial, sans-serif;
`,sT=k(Le.h2)`
    font-size: 24px;
    font-weight: bold;
    font-family: var(--font--comfortaa);
`,lT=k(Le.p)`
    font-size: 16px;
    margin: 5px 0;
    font-family: var(--font--avenir);
`,cT=k(Le.div)`
    display: flex;
    gap: 8px;
    margin-top: 10px;
    flex-wrap: wrap;

    span {
        display: flex;
        align-items: center;
        gap: 5px;
        background: rgba(0, 0, 0, 0.5);
        padding: 5px 10px;
        border-radius: 12px;
        font-size: 12px;
        transition: all .2s ease;
        
        &:hover {
            color: var(--color--black);
            background-color: var(--color--white);
            cursor: default;
        }
    }

    svg {
        font-size: 16px;
    }
`,dT=k.div`
    width: 100%;
    max-width: 100%;
    margin: 0 auto;

    @media (max-width: 640px) {
        max-width: 100%;
    }
`,Hm=({content:e=[],contentType:t="image",spaceBetween:n=10,slidesPerView:r=1,height:i="300px",autoplayDelay:a=3e3,showPagination:o=!0,showNavigation:s=!0})=>{const{scrollY:l}=z6(),d=Vo(l,[0,300],[0,-30]),u=Vo(l,[0,300],[0,-20]),f=Vo(l,[0,300],[0,-10]),p=Vo(l,[0,300],[0,-5]);return c.jsxs(dT,{children:[c.jsx(tT,{}),c.jsx(Jt,{modules:[vr,xr,Vn],navigation:s,pagination:o?{clickable:!0}:!1,spaceBetween:n,loop:!0,slidesPerView:r,autoplay:{delay:a,disableOnInteraction:!1,pauseOnMouseEnter:!0},style:{height:i},breakpoints:{640:{slidesPerView:1,spaceBetween:10,height:"200px"},768:{slidesPerView:1,spaceBetween:20,height:"250px"},1024:{slidesPerView:1,spaceBetween:30,height:"300px"}},children:e.map((g,x)=>c.jsx(en,{children:t==="image"?c.jsx(rT,{src:g.src,alt:g.alt||`Slide ${x+1}`,initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},transition:{duration:.7,ease:"easeOut"}}):c.jsxs(iT,{backgroundImage:g.backgroundImage,initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},transition:{duration:.8,ease:"easeOut"},children:[c.jsx(aT,{}),c.jsxs(oT,{initial:{opacity:0,y:50},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.8,delay:.3,ease:"easeOut"},children:[c.jsx(sT,{style:{y:d},children:g.title}),c.jsx(lT,{style:{y:u},children:g.subtitle}),c.jsx(cT,{style:{y:f},children:g.features.map((y,b)=>c.jsxs("span",{children:[y.icon," ",y.text]},b))}),c.jsx(mp,{text:"Conhecer todas as acomodações",style:{y:p}})]})]})},x))})]})};function uT(e){return ee({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M239.22,59.44l-45.63,95.82a3.54,3.54,0,0,1-.16.34l-34.21,71.84a8,8,0,1,1-14.44-6.88L173.62,160H40a8,8,0,0,1-5.66-13.66L76.69,104,34.34,61.66A8,8,0,0,1,40,48H232a8,8,0,0,1,7.22,11.44Z"},child:[]}]})(e)}const fT=k.div`
    height: 15vh;

    @media (max-width: 768px){
        height: 0;
    }
`,pT=k.section`
    width: 100%;
    height: 85vh;
    padding: 0 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    @media (max-width: 768px){
        flex-direction: column-reverse;
        height: auto;
    }

    & > div:nth-child(1){
        width: 45%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 50px;
        align-items: flex-start;

        @media (max-width: 768px){
            width: 100%;
            gap: 30px;
            align-items: center;
            height: auto;
            position: relative;
        }

        & > h1{
            font-size: 3.5rem;
            width: 100%;
            line-height: 100%;
            font-family: var(--font--comfortaa);
            color: var(--color--black);
            font-weight: 100;

            @media (max-width: 768px){
                font-size: 1.8rem;
                text-align: center;
                margin-top: 55vh;
            }

            & > b{
                font-weight: 100;
            }

            & > b > a{
                text-decoration: none;
                transition: all .2 ease-in-out;
            }

            & > b > a:hover{
                opacity: 0.8;
                border: 1px solid;
                padding: 0 5px;
            }

            & > b:nth-child(1) > a{
                color: var(--color--green);
            }

            & > b:nth-child(n + 2) > a{
                color: var(--color--blue);
            }
        }

        & > p{
            font-family: var(--font--comfortaa);
            font-size: 1rem;
            color: var(--color--black);
            width: 80%;
            line-height: 120%;
            font-weight: 100;

            @media (max-width: 768px){
                font-size: 1rem;
                text-align: center;
                width: 90%;
            }
        }
    }

    & > div:nth-child(2){
        width: 55%;
        height: 90%;

        @media (max-width: 768px){
            width: 100%;
            position: absolute;
            top: 0;
            height: 50vh;
            z-index: -1;
        }

        & > img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
            border-radius: 100px 20px 50px 20px;

            @media (max-width: 768px){
                border-radius: 0 0 50px 50px;
                border-image: fill 0 linear-gradient(#0001, #ffffff);
            }
        }
    }
`,Um=k.section`
    width: 90%;
    margin-left: 5%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;


    @media (max-width: 768px){
        height: auto;
        padding: 7% 2.5%;
        margin-left: 0;
        width: 100%;
    }
`,hT=k.section`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 0 5%;
    align-items: center;
    justify-content: center;
    display: none;

    @media (max-width: 768px){
        height: auto;
        padding: 5% 5%;
    }

    & > div:nth-child(1){
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        @media (max-width: 768px){

        }

        & > h1 {
            font-family: var(--font--comfortaa);
            font-size: 2rem;
            color: var(--color--black);
            font-weight: 400;

            @media (max-width: 768px){
                font-size: 1.6rem;
            }
        }
        
    }

    & > div:nth-child(2){
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 80vh;
        gap: 50px;

        @media (max-width: 768px){

            flex-direction: column;
            height: auto;   
        }

        & > div{
            width: 50%;
            height: 100%;
            padding: 50px;
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            flex-direction: column;

            @media (max-width: 768px){
                width: 100%;
                align-items: center;
                padding: 40px;
                gap: 20px;
                border-radius: 25px 0 25px 0!important;
                border-image: fill 0 linear-gradient(#0001, #ffffff80);
            }

            & > span{
                width: 100%;
                font-family: var(--font--comfortaa);
                font-size: 1.5em;
                font-weight: 600;
                color: var(--color--white);

                @media (max-width: 768px){
                    font-size: 1.3rem;
                    text-align: center;
                    width: 100%;
    
                }
            }

            & > div{
                display: flex;
                align-items: flex-start;
                justify-items: center;
                flex-direction: column;
                gap: 30px;

                @media (max-width: 768px){
                    align-items: center;
    
                }

                & > p{
                    color: var(--color--white);
                    font-family: var(--font--comfortaa);
                    line-height: 100%;

                    @media (max-width: 768px){
                        text-align: justify;
                        font-size: .9rem;
                    }
                }
            }

        }

        & > div:nth-child(1){
            border-radius: 0px 50px 0px 40px;
            background-image: url('https://res.cloudinary.com/dupg7clzc/image/upload/v1730121191/mar1_lhebdi.webp');
            background-size: cover;
            background-position: center;
            
        }

        & > div:nth-child(2){
            border-radius: 40px 0px 50px 0px;
            background-image: url('https://res.cloudinary.com/dupg7clzc/image/upload/v1729513693/9_hyv1zq.jpg');
            background-size: cover;
            background-position: center;
        }
    }
`,mT=[{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/29ccc6ec-9001-47af-4c90-36bc2a2ba300/public",alt:"Cadeira customizada para casamento na le ange",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a5bfa9ba-2a81-4ff5-1bda-74a4993f2500/public",alt:"Foto do bolo de casamento na pousada le ange",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/e2ee18a4-384c-49ed-c38c-d15f243f5700/public",alt:"Foto de uma fogueira na pousada le ange",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/d887cc1d-1cb7-47c1-06cf-ce55fcb0f400/public",alt:"Espaço de comer na pousada le ange em casamentos",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/94f6e656-dcb6-477a-23d0-79cc3f816e00/public",alt:"Champagne na pousada le ange",loading:"lazy"}],gT=[{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a7da5629-c2cc-411d-3167-702f3a09f300/public",alt:"Cadeiras para casamento na pousada le ange",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/08af42b1-ad7c-4d07-8fb5-20e740b9b900/public",alt:"Noivos se casando na pousada le ange",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/9ce391b0-09af-4d6b-d2b5-c38fb17b4000/public",alt:"Comida do casamento na pousada le ange",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/977a5b2b-eea7-45c3-8f86-55a821264800/public",alt:"Imagem do bar no casamento da pousada le ange",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/6d4feba5-fa91-4d86-be6d-ed01beefb800/public",alt:"Casamento fotos pousada le ange",loading:"lazy"}],vT=k.section`
    width: 100%;
    height: 100vh;
    padding: 0 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 25px;
    background-color: rgba(0, 0, 0, 0.1);

    @media (max-width: 768px){
        height: auto;
        flex-direction: column;
        padding: 5% 2.5%;
    }

    & > div{
        width: 45%;
        height: 90%;
    

        @media (max-width: 768px){
            width: 100%;
            height: 40vh;
        }

        & > img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 70px 20px 40px 10px;
            box-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
            border: 1px solid rgba(255, 255, 255, 0.3);

            @media (max-width: 768px){
                border-radius: 25px 0 25px 0; 
                position: absolute;
                height: 50vh;
                width: 95%;
                z-index: 1;
            }
        }

        & > div {
            width: 100%;
            height: 35%;
            display: flex;
            align-items: center;
            justify-content: space-between;
        

            & > img {
                width: 32%;
                height: 100%;
                object-fit: cover;
                border-radius: 20px 0 20px 0;
                box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);

                @media (max-width: 768px){
                    height: 15vh;
                    margin-top: 15px;
                    border-radius: 10px 0 10px 0;
                }
            }
        }
    }

    & > div:nth-child(2){
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 55%;
        align-items: flex-start;
        border: 1px solid rgba(0, 0, 0, 0.1);
        border-radius: 20px 30px 20px 0px;
        background-color: var(--color--white);
        box-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
        border: 1px solid rgba(255, 255, 255, 0.3);
    

        @media (max-width: 768px){
            align-items: center;
            width: 100%;
            margin-top: -20px;
            height: auto;
            gap: 15px;
        }

        & > h1{
            font-size: 2.2rem;
            font-family: var(--font--comfortaa);
            font-weight: 100;
            color: var(--color--black);

            @media (max-width: 768px){
                background-color: var(--color--white);
                margin-top: 12px;
                padding: 5px 15px;
                color: var(--color--black);
                border-radius: 5px 15px 0 0;
                font-size: 1.6rem;
                position: relative;
                z-index: 2;
            }
        }

        & > p{
            font-size: 1rem;
            font-family: var(--font--comfortaa);
            width: 70%;
            line-height: 120%;
            font-weight: 100;

            @media (max-width: 768px){
                font-family: var(--font--comfortaa);
                width: 100%;
                font-size: 1rem;
                margin-top: 5px;
                margin-bottom: 10px;
                color: var(--color--black);
                text-align: center;
                font-weight: 800;
            }
        }

        & > ol{
            display: flex;
            flex-wrap: wrap;
            width: 100%;
            gap: 5px;
            
            @media(max-width: 768px){
                margin-bottom: 10px;
            }
        
        }
        
    }
`,Bt=k.div`
    border: 1px solid rgba(0, 0, 0, 0.2);
    display: inline-flex;
    padding: 4px 8px;
    align-items: center;
    justify-content: flex-start;
    width: auto;
    gap: 10px;
    border-radius: 0 10px 0 10px;
    font-size: .75rem;
    transition: all .2s ease;
    background-color: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(20px);
    font-family: var(--font--comfortaa);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0.6);

    @media (max-width: 768px){
        font-size: .8rem;
        padding: 7px 10px;
        gap: 10px;
    }

    &:hover{
        padding: 5px 9px;
        background-color: var(--color--black);
        color: var(--color--white);
        cursor: default;
    }
`,xT=k.section`
    width: 100%;
    height: 100vh;
    padding: 0 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 25px;
    background-color: var(--color--white);


    @media (max-width: 768px){
        height: auto;
        flex-direction: column-reverse;
        padding: 5% 2.5%;
    }

    & > div{
        width: 45%;
        height: 90%;
    

        @media (max-width: 768px){
            width: 100%;
            height: 40vh;
        }

        & > img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 20px 80px 40px 60px;
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);

            @media (max-width: 768px){
                border-radius: 25px 0 25px 0; 
                position: absolute;
                height: 50vh;
                width: 95%;
                z-index: 1;
            }
        }

        & > div {
            width: 100%;
            height: 35%;
            display: flex;
            align-items: center;
            justify-content: space-between;


            & > img {
                width: 32%;
                height: 100%;
                object-fit: cover;
                border-radius: 30px 0 30px 0;
            
                box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);

                @media (max-width: 768px){
                    height: 15vh;
                    margin-top: 15px;
                    border-radius: 10px 0 10px 0;
                }
            }
        }
    }

    & > div:nth-child(1){
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        border: 1px solid rgba(0, 0, 0, 0.1);
        border-radius: 30px 10px 40px 0px;
        width: 55%;
    

        @media (max-width: 768px){
            align-items: center;
            width: 100%;
            margin-top: -25px;
            height: auto;
            gap: 15px;
        }

        & > h1{
            font-size: 2.2rem;
            font-family: var(--font--comfortaa);
            font-weight: 100;
            color: var(--color--black);

            @media (max-width: 768px){
    
                background-color: var(--color--white);
                margin-top: 20px;
                padding: 5px 15px;
                color: var(--color--black);
                border-radius: 5px 15px 0 0;
                font-size: 1.6rem;
                position: relative;
                z-index: 2;
            }
        }

        & > p{
            font-size: 1.1rem;
            font-family: var(--font--comfortaa);
            width: 70%;
            line-height: 100%;
        
            font-weight: 100;

            @media (max-width: 768px){
                font-family: var(--font--comfortaa);
                width: 100%;
                font-size: 1rem;
                margin-top: 5px;
                margin-bottom: 10px;
                color: var(--color--black);
                text-align: center;
                font-weight: 800;
            }
        }

        & > ol{
            display: flex;
            flex-wrap: wrap;
            width: 100%;
            gap: 5px;

            @media(max-width: 768px){
                margin-bottom: 10px;
            }
        
        }

        
    }
`,yT=()=>(j.useEffect(()=>{Ie.init({duration:1e3,once:!1}),Ie.refresh()},[]),c.jsxs(c.Fragment,{children:[c.jsx(In,{children:c.jsx("title",{children:"Eventos - Pousada Le Ange"})}),c.jsx(fT,{}),c.jsx(Nn,{}),c.jsxs(pT,{children:[c.jsxs("div",{children:[c.jsxs("h1",{"data-aos":"fade-up","data-aos-delay":"100",children:["Do alto da ",c.jsx("b",{children:c.jsx("a",{href:"#/serra",children:"Serra"})}),",",c.jsx("br",{})," às ondas do ",c.jsx("b",{children:c.jsx("a",{href:"#/mar",children:"Mar"})})]}),c.jsx("p",{"data-aos":"fade-up","data-aos-delay":"200",children:"Venha celebrar na Le Ange, onde o amor pelos pets encontra o cenário ideal para tornar os seus eventos ainda mais especiais."}),c.jsx(dt,{"data-aos":"fade-up","data-aos-delay":"300",onClick:()=>window.open("https://wa.link/dojlwi","_blank"),text:"Fazer meu evento"})]}),c.jsx("div",{children:c.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/4129a834-fd9a-42db-4770-46bcaae2c200/public",alt:"foto da home da página de eventos","data-aos":"fade-left","data-aos-delay":"150"})})]}),c.jsx(Um,{"data-aos":"fade-up","data-aos-delay":"100",children:c.jsx(Hm,{content:mT,spaceBetween:20,slidesPerView:1,width:"100%",height:"90vh",contentType:"image",showPagination:!0})}),c.jsxs(hT,{children:[c.jsx("div",{children:c.jsx("h1",{"data-aos":"fade-up","data-aos-delay":"100",children:"Sobre nós"})}),c.jsxs("div",{children:[c.jsxs("div",{children:[c.jsx("span",{children:"Le Ange Serra - Miguel Pereira/RJ"}),c.jsxs("div",{children:[c.jsx("p",{children:"Fundada em 2018, a Pousada LeAnge nasceu da paixão dos seus fundadores pelo amor aos pets, bem-estar e hospitalidade. Localizada em Miguel Pereira, a LeAnge Serra proporciona uma experiência única na região serrana do Rio de Janeiro, sendo um verdadeiro refúgio entre as belezas naturais da Mata Atlântica."}),c.jsx(dt,{onClick:()=>window.open("https://wa.link/dojlwi","_blank"),text:"Fazer reserva"})]})]}),c.jsxs("div",{children:[c.jsx("span",{children:"Le Ange Serra - Miguel Pereira/RJ"}),c.jsxs("div",{children:[c.jsx("p",{children:"Fundada em 2018, a Pousada LeAnge nasceu da paixão dos seus fundadores pelo amor aos pets, bem-estar e hospitalidade. Localizada em Miguel Pereira, a LeAnge Serra proporciona uma experiência única na região serrana do Rio de Janeiro, sendo um verdadeiro refúgio entre as belezas naturais da Mata Atlântica."}),c.jsx(dt,{onClick:()=>window.open("https://wa.link/dojlwi","_blank"),text:"Fazer reserva"})]})]})]})]}),c.jsxs(vT,{children:[c.jsx("div",{children:c.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/59f2aa9f-b14c-4a77-d44d-19d04bbfad00/public",alt:"foto do casamento","data-aos":"zoom-in","data-aos-delay":"100"})}),c.jsxs("div",{children:[c.jsx("h1",{"data-aos":"fade-up","data-aos-delay":"200",children:"Casamento"}),c.jsx("p",{"data-aos":"fade-down","data-aos-delay":"200",children:"Coração palpitando, emoções à flor da pele e a certeza de dias inesquecíveis."}),c.jsxs("ol",{children:[c.jsxs(Bt,{"data-aos":"fade-up","data-aos-delay":"50",children:[c.jsx($m,{}),"Coquetel na Chegada (Sexta-feira)"]}),c.jsxs(Bt,{"data-aos":"fade-up","data-aos-delay":"100",children:[c.jsx(Bm,{}),"Noite Especial no Sábado"]}),c.jsxs(Bt,{"data-aos":"fade-up","data-aos-delay":"150",children:[c.jsx(Zk,{}),"Ensaio Fotográfico dos Noivos"]}),c.jsxs(Bt,{"data-aos":"fade-up","data-aos-delay":"200",children:[c.jsx(Jk,{}),"Decoração Romântica na Suíte"]}),c.jsxs(Bt,{"data-aos":"fade-up","data-aos-delay":"300",children:[c.jsx(cm,{}),"Late Checkout no Domingo"]})]}),c.jsx(dt,{text:"Fazer reserva"}),c.jsxs("div",{children:[c.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/4129a834-fd9a-42db-4770-46bcaae2c200/public",alt:"foto do casamento","data-aos":"fade-up","data-aos-delay":"100"}),c.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/fdcd50a3-60fa-409c-8e77-2d1ccef2ec00/public",alt:"foto do casamento","data-aos":"fade-up","data-aos-delay":"200"}),c.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/c5657ad4-000d-4c21-0570-1de76bd8c700/public",alt:"foto do casamento","data-aos":"fade-up","data-aos-delay":"300"})]})]})]}),c.jsxs(xT,{children:[c.jsxs("div",{children:[c.jsx("h1",{"data-aos":"fade-up","data-aos-delay":"100",children:"Aniversário"}),c.jsx("p",{"data-aos":"fade-down","data-aos-delay":"200",children:"Comemore os momentos doces da vida."}),c.jsxs("ol",{children:[c.jsxs(Bt,{"data-aos":"fade-up","data-aos-delay":"50",children:[c.jsx($m,{}),"Coquetel na Chegada (Sexta-feira)"]}),c.jsxs(Bt,{"data-aos":"fade-up","data-aos-delay":"100",children:[c.jsx(Bm,{}),"Noite Especial no Sábado"]}),c.jsxs(Bt,{"data-aos":"fade-up","data-aos-delay":"150",children:[c.jsx(eT,{}),"Massagem Relaxante"]}),c.jsxs(Bt,{"data-aos":"fade-up","data-aos-delay":"200",children:[c.jsx(cm,{}),"Late Checkout no Domingo"]}),c.jsxs(Bt,{"data-aos":"fade-up","data-aos-delay":"250",children:[c.jsx(uT,{}),"Painéis Temáticos"]}),c.jsxs(Bt,{"data-aos":"fade-up","data-aos-delay":"300",children:[c.jsx(B6,{}),"Bolo para o Pet"]})]}),c.jsx(dt,{text:"Fazer reserva"}),c.jsxs("div",{children:[c.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/e2fda94b-3aeb-4561-b4ad-688ff898ee00/public",alt:"foto do casamento","data-aos":"fade-up","data-aos-delay":"100"}),c.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/f8c3dd3f-c32b-4c9d-2496-dcdc601a7e00/public",alt:"foto do casamento","data-aos":"fade-up","data-aos-delay":"200"}),c.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/980e5da2-7a6b-4d04-8e10-389d3ee83000/public",alt:"foto do casamento","data-aos":"fade-up","data-aos-delay":"300"})]})]}),c.jsx("div",{children:c.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/5361ac8b-1299-4fc6-7cbb-7e71c171e300/public",alt:"foto de aniversário","data-aos":"zoom-in","data-aos-delay":"200"})})]}),c.jsx(Um,{"data-aos":"fade-up","data-aos-delay":"100",children:c.jsx(Hm,{content:gT,spaceBetween:20,slidesPerView:1,width:"100%",height:"90vh",contentType:"image",showPagination:!0})}),c.jsx(yr,{})]})),Zy=k.button`
  background: ${e=>e.backgroundColor||"transparent"};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  font-family: var(--font--comfortaa);
  padding: 2px 15px;
  display: flex;
  align-items: center;
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  border-radius: 25px;
  outline: none;
  overflow: hidden;
  color: ${e=>e.textColor||"#000"};
  border: 1px solid ${e=>e.borderColor||"#000"};
  transition: color 0.1s ease-out;
  text-align: center;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    content: "";
    border-radius: 50%;
    display: block;
    width: 20em;
    height: 20em;
    left: -5em;
    transition: box-shadow 0.5s ease-out;
    z-index: -1;
  }

  &:hover {
    color: ${({hoverColor:e})=>e||""};
    border: 1px solid ${e=>e.hoverBorderColor||e.borderColor||"#000"};
  }

  &:hover::before {
    box-shadow: inset 0 0 0 10em ${e=>e.hoverBackgroundColor||e.borderColor||"#000"};
  }
`,wT=k(OC)`
  color: ${e=>e.iconColor||"currentColor"};
  height: 20px;
  width: 20px;
  transition: color 0.3s ease;

  ${Zy}:hover & {
    color: ${e=>e.hoverIconColor||e.iconColor||"currentColor"};
  }
`,bT=k.span`
  margin: 10px;
`,wr=({text:e="Fazer reserva agora!",textColor:t,backgroundColor:n,borderColor:r,iconColor:i,hoverIconColor:a,hoverBackgroundColor:o,hoverBorderColor:s,hoverColor:l,onClick:d})=>c.jsxs(Zy,{id:"clickwpp",onClick:d,textColor:t,backgroundColor:n,borderColor:r,hoverBackgroundColor:o,hoverBorderColor:s,hoverColor:l,children:[c.jsx(wT,{iconColor:i,hoverIconColor:a}),c.jsx(bT,{children:e})]}),ST=k.section`
    width: 100%;
    height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 25px;

    @media (max-width: 768px){
        height: auto;
        flex-direction: column;
    }

    & > div:nth-child(1){
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        gap: 20px;
        padding: 0 0 0 5%;


        @media (max-width: 768px){
            width: 100%;
            gap: 50px;
            padding: 0 5%;

        }

        & > h1{
            font-size: 3rem;
            font-family: var(--font--comfortaa);
            color: var(--color--blue);
    
            font-weight: 100;

            @media (max-width: 768px){
                font-size: 30px;
                text-align: center;
                width: 100%;
                font-size: 1.6rem;
                margin-top: 12vh;
            }
        }

        & > h4 {
            font-family: var(--font--comfortaa);
            color: var(--color--black);
            font-weight: 100;
            margin-top: -20px;
            font-size: 1.2rem;
    

            @media (max-width: 768px){
                margin-top: -50px;
                font-size: 12px;
                text-align: center;
                width: 100%;
            }
        }

        & > h4 b{
            font-weight: 400;
        }

        & > p {
            width: 80%;
            font-family: var(--font--comfortaa);
            font-size: .9rem;
            font-weight: 100;
            line-height: 120%;

            @media (max-width: 768px){
                width: 100%;
                text-align: justify;
                margin-top: -25px;
                font-size: 14px;
            }
        }
    }

    & > div:nth-child(2){
        width: 50%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        z-index: 1;


        @media (max-width: 768px){
            width: 100%;
            height: auto;

            display: none;
        }

        &::before {
            width: 100%;
            height: 40%;
            content: '';
            bottom: 0;
            right: 0;
            position: absolute;
            background-color: var(--color--blue);
            border-radius: 100px 0 0 50px;
            z-index: -1;
    

            @media (max-width: 768px){
                border-radius: 70px 0 0 25px;
                width: 95%;
            }
        }

        & > img {
            width: 100%;
            height: 100%;
            filter: drop-shadow(5px 0px 2px rgba(0, 0, 0, 0.2));
            object-fit: contain;
    

            @media (max-width: 768px){
                filter: drop-shadow(5px 0px 2px rgba(0, 0, 0, 0.2));
            }
        }
    }
`,jT=k.div`
    height: 15vh;

    @media (max-width: 768px){
        height: 0;
    }
`,CT=k.section`
    width: 100%;
    height: 80vh;
    margin-top: 10vh;
    padding: 0% 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 60px;

    @media (max-width: 768px){
        flex-direction: column;
        height: auto;
        gap: 30px;
        padding: 0 5%;
        margin-top: 5vh;
    }

    & > div:nth-child(1){
        max-width: 50%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;


        @media (max-width: 768px){
            max-width: 100%;
            height: 30vh;
            gap: 10px;
        }

        & > img:nth-child(1){
            width: 60%;
            height: 100%;
            border-radius: 20px 0 20px 0;
            object-fit: cover;
    

            @media (max-width: 768px){
                width: 48%;
                height: 100%;
                border-radius: 10px 0 10px 0;
            }
        }

        & > img:nth-child(2){
            width: 40%;
            height: 100%;
            border-radius: 0px 20px 0px 20px;
            object-fit: cover;

            @media (max-width: 768px){
                width: 48%;
                height: 100%!important;
                object-fit: cover;
                border-radius: 0px 10px 0 10px;
    
            }
        }
    }

    & > div:nth-child(2){
        width: 50%;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
        gap: 20px;


        @media (max-width: 768px){
            width: 100%;
            height: 50%;
            gap: 40px;
        }

        & > h1{
            font-size: 3rem;
            font-family: var(--font--comfortaa);
            color: var(--color--green);
    
            font-weight: 100;

            @media (max-width: 768px){
                width: 100%;
                font-size: 28px;
                text-align: center;
            }

        }

        & > h4 {
            font-family: var(--font--comfortaa);
            font-weight: 100;
            margin-top: -20px;
            font-size: 1.2rem;
    

            @media (max-width: 768px){
                width: 100%;
                margin-top: -40px;
                font-size: 14px;
                text-align: center;
            }
        }

        & > p {
            width: 80%;
            font-family: var(--font--comfortaa);
    
            font-weight: 100;
            line-height: 130%;
            font-size: .9rem;

            @media (max-width: 768px){
                width: 100%;
                text-align: justify;
            }
        }
    }
`,kT=k.section`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 5%;

    @media (max-width: 768px){
        height: auto;
        flex-direction: column-reverse;
        gap: 25px;
        margin-top: 35px;
        padding: 0% 5%;
    }

    & > div:nth-child(1){
        width: 50%;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;


        @media (max-width: 768px){
            width: 100%;
        }

        & > h1{
            font-size: 3rem;
            font-family: var(--font--comfortaa);
            color: var(--color--blue);
            font-weight: 100;
            margin-bottom: 15px;

            @media (max-width: 768px){
                font-size: 28px;
                width: 100%;
                text-align: center;
                margin-bottom: 10px;
            }
        }

        & > p {
            width: 80%;
            font-family: var(--font--comfortaa);
            font-size: .9rem;
            font-weight: 100;
            line-height: 130%;

            @media (max-width: 768px){
                width: 100%;
                text-align: justify;
            }
        }
    }

    & > div:nth-child(2){
        width: 50%;
        height: 80%;
        flex-wrap: wrap;
        gap: 5px;
        display: flex;
        align-items: center;
        justify-content: center;


        @media (max-width: 768px){
            width: 100%;
            justify-content: space-between;
        }

       & > img{
        width: 45%;
        border-radius: 20px 0 20px 0; 
        height: 50%;
        object-fit: cover;

        &:nth-child(2){
            border-radius: 0 20px 0 20px;
        }

        &:nth-child(4){
            border-radius: 20px 0px 20px 0px!important;
        }

        @media (max-width: 768px){
            width: 49%;
            height: 20vh;

        }

       }

       & > img:nth-child(n +3){
        border-radius: 0 20px 0 20px;
       }

    }
`,TT=k.section`
    width: 100%;
    height: 150vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 0 5%;


    @media (max-width: 768px){
        height: auto;
        flex-direction: column;
        gap: 25px;
        margin-top: 50px;
        padding: 5% 5%;
    }

    & > div:nth-child(1){
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 45%;
    

        
        @media (max-width: 768px){
            width: 100%;
            flex-direction: column-reverse;
            height: auto;
        }

        & > div:nth-child(1){
            width: 50%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: center;
            flex-direction: column;
    

            @media (max-width: 768px){
                width: 100%;
    
            }

            & > h1{
            font-size: 2.5rem;
            font-family: var(--font--comfortaa);
            color: var(--color--green);
            font-weight: 100;
            margin-bottom: 15px;
                
                @media (max-width: 768px){
                    font-size: 28px;
                    margin-bottom: 10px;
                    width: 100%;
                    text-align: center;
                }
            }

            & > p {
            width: 80%;
            font-family: var(--font--comfortaa);
            font-weight: 100;
            line-height: 130%;
            font-size: .9rem;

                @media (max-width: 768px){
        
                    width: 100%;
                    text-align: justify;
                }
            }
            
        }

        & > div:nth-child(2){
            width: 50%;
            height: 100%;
    

            @media (max-width: 768px){
                width: 100%;
                height: 35vh;
                margin-top: -20px;
                margin-bottom: 50px;
            }

            & > img {
                width: 50%;
                height: 80%;
                object-fit: cover;

                @media (max-width: 768px){
                    height: 100%;
                    width: 50%;
                }
            }

            & > img:nth-child(1){
                position: relative;
                left: 10px;
                border-radius: 20px 0 20px 0;
            }

            & > img:nth-child(2){
                position: relative;
                top: 40px;
                right: 20px;
                border-radius: 0 20px 0 20px;
            }
        }
    }

    & > div:nth-child(2){
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 45%;
    


        @media (max-width: 768px){
            flex-direction: column-reverse;
            height: auto;
        }

        & > div:nth-child(1){
            width: 50%;
            height: 100%;
    

            @media (max-width: 768px){
                width: 100%;
                margin-top: 15px;
                height: 35vh;
            }

            & > img {
                width: 50%;
                height: 80%;
                object-fit: cover;
        


                @media (max-width: 768px){
                    height: 100%;
                    width: 50%;
                }
            }

            & > img:nth-child(1){
                position: relative;
                left: 10px;
                border-radius: 20px 0 20px 0;
            }

            & > img:nth-child(2){
                position: relative;
                top: 20px;
                right: 10px;
                border-radius: 0 20px 0 20px;
            }
        }

        & > div:nth-child(2){
            width: 50%;
            height: 100%;
            display: flex;
            align-items: flex-end;
            justify-content: center;
            flex-direction: column;
    

            @media (max-width: 768px){
                width: 100%;
            }

            & > h1{
            font-size: 2.5rem;
            font-family: var(--font--comfortaa);
            color: var(--color--blue);
            line-height: 100%;
            text-align: right;
            font-weight: 100;
            margin-bottom: 15px;
                
                @media (max-width: 768px){
        
                    margin-top: 0px;
                    font-size: 28px;
                    margin-bottom: 10px;
                    width: 100%;
                    text-align: center;
                }
            }

            & > p {
            width: 90%;
            font-family: var(--font--comfortaa);
            text-align: right;
            font-weight: 100;
            font-size: .9rem;
            line-height: 130%;

                @media (max-width: 768px){

                    width: 100%;
                    text-align: justify;
                }
            }
        }

    }
`,AT=k.section`

    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 5%;

        @media (max-width: 768px){
            height: auto;
            flex-direction: column;
        }

    & > div:nth-child(1){
        width: 50%;
        height: 80%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 10px;


        @media (max-width: 768px){
            width: 100%;
            height: auto;
            gap: 10px;
        }

        & > div:nth-child(1){

            & > h1{
            font-size: 2.5em;
            font-family: var(--font--comfortaa);
            color: var(--color--green);
            font-weight: 100;
            margin-bottom: 15px;

                @media (max-width: 768px){
        
                    margin-top: 20px;
                    margin-bottom: 15px;
                    width: 100%;
                    text-align: center;
                    font-size: 24px;
                }
            }

            & > p {
            width: 80%;
            font-family: var(--font--comfortaa);
            font-size: 0.9rem;
            font-weight: 100;
            line-height: 130%;
            margin-bottom: 20px;

            @media (max-width: 768px){
                width: 100%;
                text-align: justify;
            }

            }
        }

        & > div:nth-child(2){

            & > h1{
            font-size: 2.5em;
            font-family: var(--font--comfortaa);
            color: var(--color--blue);
            font-weight: 100;
            margin-bottom: 15px;

                @media (max-width: 768px){
        
                    margin-top: 5px;
                    margin-bottom: 15px;
                    width: 100%;
                    text-align: center;
                    font-size: 24px;
                }
            }

            & > p {
            width: 80%;
            font-family: var(--font--comfortaa);
            font-size: 0.9rem;
            font-weight: 100;
            line-height: 130%;

            @media (max-width: 768px){
    
                width: 100%;
                text-align: justify;
            }

            }
        }
    }
    
    & > div:nth-child(2){
        width: 50%;
        height: 80%;

        @media (max-width: 768px){

            width: 100%;
            height: auto;
            margin-top: 25px;
            margin-bottom: 25px;
        }

        & > img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
            border-radius: 30px 0 30px 0;
        }
    }
`,ET=k.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-image: url('https://res.cloudinary.com/dupg7clzc/image/upload/v1730130105/fotoSerra3_zqwbav.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    gap: 25px;

    & h1 {
        font-family: var(--font--comfortaa);
        color: var(--color--white);
        width: 35%;
        text-align: center;
        line-height: 100%;
        font-weight: 100;

        @media (max-width: 768px){
            width: 90%;
            margin-left: 5%;
            text-align: center;
            font-size: 24px;
        }
    }
`,PT=()=>(j.useEffect(()=>{Ie.init({duration:1e3,once:!1}),Ie.refresh()},[]),c.jsxs(c.Fragment,{children:[c.jsx(In,{children:c.jsx("title",{children:"Sobre Nós - Pousada Le Ange"})}),c.jsx(jT,{}),c.jsx(Nn,{}),c.jsxs(ST,{children:[c.jsxs("div",{children:[c.jsx("h1",{"data-aos":"fade-up","data-aos-delay":"100",children:"Pousada Le Ange"}),c.jsxs("h4",{"data-aos":"fade-down","data-aos-delay":"200",children:["A pousada mais ",c.jsx("b",{children:"Pet Friendly"})," do Brasil"]}),c.jsx("p",{"data-aos":"fade-up","data-aos-delay":"300",children:"Fundada em 2018 em Miguel Pereira, Rio de Janeiro, a Pousada Le Ange Serra nasceu da nossa paixão por quatro patas, bem-estar e hospitalidade. Com o sucesso da primeira unidade, expandimos para Búzios, em 2023, criando a Pousada Le Ange Mar. A filosofia por trás é oferecer mais do que uma pousada, um refúgio acolhedor."})]}),c.jsx("div",{"data-aos":"fade-left","data-aos-delay":"400",children:c.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/3e74beb7-77f8-4598-ec38-1e6f6e4d9300/public",alt:"foto da gaia, cachorra da pousada le ange",loading:"lazy","data-aos":"fade-right","data-aos-delay":"500"})})]}),c.jsxs(CT,{children:[c.jsxs("div",{children:[c.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/2edd1026-cdea-4ac6-f501-713bba86d600/public",alt:"foto da le ande da mar",loading:"lazy","data-aos":"fade-up","data-aos-delay":"100"}),c.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/74bff9be-8742-4468-e032-4cf79abe5300/public",alt:"foto da le ande da serra",loading:"lazy","data-aos":"fade-down","data-aos-delay":"100"})]}),c.jsxs("div",{children:[c.jsx("h1",{"data-aos":"fade-up","data-aos-delay":"100",children:"2 unidades,"}),c.jsx("h4",{"data-aos":"fade-down","data-aos-delay":"200",children:"2 refúgios únicos"}),c.jsx("p",{"data-aos":"fade-up","data-aos-delay":"300",children:"A Pousada LeAnge Serra oferece 10 suítes aconchegantes em meio à região serrana de Miguel Pereira. Já a Pousada LeAnge Mar, com suas 8 suítes exclusivas, proporciona uma experiência costeira em Búzios, com vista direta para o mar."})]})]}),c.jsxs(kT,{children:[c.jsxs("div",{children:[c.jsx("h1",{"data-aos":"fade-up","data-aos-delay":"100",children:"Diferenciais"}),c.jsxs("p",{"data-aos":"fade-down","data-aos-delay":"200",children:["Somos mais que Pet Friendly, somos ",c.jsx("b",{children:"Pet Lovers!"})," Por aqui não temos limite de porte, quantidade ou raça. Nosso conceito permite que os pets frequentem o restaurente, a piscina e qualquer outro espaço. Assim, tornando-nos ÚNICOS a oferecer este tipo de experiência."]})]}),c.jsxs("div",{children:[c.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/d476f2e3-90fe-4291-137c-bc9f9e7f4000/public",loading:"lazy",alt:"rede na le ange mar","data-aos":"fade-up","data-aos-delay":"100"}),c.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/902b9f7b-b521-4545-08ee-f5386e777400/public",loading:"lazy",alt:"hot tube na le ange serra","data-aos":"fade-down","data-aos-delay":"200"}),c.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/db3f6942-0de2-433d-1235-33bfa547e500/public",loading:"lazy",alt:"casal se divertindo na le ange serra","data-aos":"fade-up","data-aos-delay":"300"}),c.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/920ca71e-b200-4a6c-5c7e-cc605234d700/public",loading:"lazy",alt:"foto da le ange com tema de natal","data-aos":"fade-down","data-aos-delay":"400"})]})]}),c.jsxs(TT,{children:[c.jsxs("div",{children:[c.jsxs("div",{children:[c.jsx("h1",{"data-aos":"fade-down","data-aos-delay":"100",children:"Gastronomia"}),c.jsxs("p",{"data-aos":"fade-up","data-aos-delay":"200",children:["Oferecemos um serviço ",c.jsx("i",{children:"all inclusive"})," que abrange todas as refeições, atendendo todas as restrições alimentares dos nossos hóspedes. Nosso compromisso é proporcionar uma experiência gastronômica diversificada e de alta qualidade, utilizando produtos frescos e locais."]})]}),c.jsxs("div",{children:[c.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/bbca820c-502b-48cf-a6d6-8a4d4da25900/public",loading:"lazy",alt:"foto da noite de pizzas na pousada le ange","data-aos":"fade-up","data-aos-delay":"300"}),c.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/9c2d46b5-4488-4382-1bf4-865c6f914100/public",loading:"lazy",alt:"foto da noite de risotos na pousada le ange","data-aos":"fade-down","data-aos-delay":"400"})]})]}),c.jsxs("div",{children:[c.jsxs("div",{children:[c.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/415e2adb-0537-4ce0-23cb-124869c06c00/public",loading:"lazy",alt:"foto do cachorro sorrindo para camera","data-aos":"fade-up","data-aos-delay":"100"}),c.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/f9af3c90-2ae9-4250-2ac9-afedce182000/public",loading:"lazy",alt:"uma mulher e dois cachorros na pousada le ange","data-aos":"fade-down","data-aos-delay":"200"})]}),c.jsxs("div",{children:[c.jsx("h1",{"data-aos":"fade-up","data-aos-delay":"300",children:"Espaços compartilhados"}),c.jsx("p",{"data-aos":"fade-down","data-aos-delay":"400",children:"Nossos espaços compartilhados incluem bibliotecas aconchegantes, sala de jogos e áreas de lazer diversificadas. Na Serra, temos piscinas, ofurô, hot tub, SPA e acesso às cachoeiras. Já em Búzios, nossos hóspedes desfrutam da piscina e dos ofurôs com vista incrível do mar aberto, além disso, estamos localizados próximo ao Mirante do Pai Vitório."})]})]})]}),c.jsxs(AT,{children:[c.jsxs("div",{children:[c.jsxs("div",{children:[c.jsx("h1",{"data-aos":"fade-up","data-aos-delay":"150",children:"Suítes"}),c.jsx("p",{"data-aos":"fade-down","data-aos-delay":"300",children:"Ambas as unidades dispõem de suítes luxuosas, equipadas com banheiras de imersão, camas king-size e roupas de cama de 400 fios. Na Serra, cada suíte conta com uma lareira aconchegante, enquanto em Búzios, a vista para o mar é um espetáculo à parte, garantindo uma experiência de tranquilidade incomparável."})]}),c.jsxs("div",{children:[c.jsx("h1",{"data-aos":"fade-up","data-aos-delay":"400",children:"Convivência"}),c.jsx("p",{"data-aos":"fade-down","data-aos-delay":"500",children:"Pedimos que considere se o seu pet é amigável, pois a pousada recebe vários outros pets. Além disso, aceitamos apenas humanos acompanhados por pets, e a idade mínima para hospedagem é 13 anos."})]})]}),c.jsx("div",{children:c.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/cc7ff3b2-c267-4a5b-140b-cfae14d7f900/public",alt:"foto do quadro de cachorro na pousada le ange mar","data-aos":"flip-left","data-aos-delay":"600"})})]}),c.jsxs(ET,{children:[c.jsx("h1",{"data-aos":"fade-up","data-aos-delay":"200",children:"Venha viver essa experiência com a gente!"}),c.jsx(wr,{text:"Reservar agora!",textColor:"var(--color--white)",backgroundColor:"transparent",borderColor:"var(--color--white)",iconColor:"var(--color--white)",hoverBackgroundColor:"var(--color--white)",hoverBorderColor:"var(--color--white)",hoverColor:"var(--color--white)",hoverIconColor:"var(--color--white)",onClick:()=>window.open("https://wa.link/dojlwi","_blank"),"data-aos":"fade-in","data-aos-delay":"500"})]})]})),GT=Ki`
    .swiper-button-next, .swiper-button-prev {
        color: var(--color--white); 
        background-color: rgba(0, 0, 0, 0.5);
        border-radius: 50%;
        width: 40px;
        height: 40px;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
        &:after {
            font-size: 20px;
        }
    }
    .swiper-pagination-bullet {
        background: rgba(0, 0, 0, 0.3);
        opacity: 0.7;
        width: 10px;
        height: 10px;
        margin: 0 5px;
        &.swiper-pagination-bullet-active {
            background: #A5C933;
            opacity: 1;
        }
    }
`,zT=k.div`
  display: flex;
  padding: 20px;
  align-items: center;
  height: 90vh;
  gap: 20px;
  padding: 5vh 5%;
  flex-direction: ${({imagePosition:e})=>e==="right"?"row-reverse":"row"};

  @media (max-width: 768px){
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 15px 0 15px 0;
    height: 75vh;
    flex-direction: column;
    width: 95%;
    margin-left: 2.5%;
    padding: 15px;
    background: none;
  
  }
`,_T=k.div`
  flex: 1;
  height: 100%;
  padding: 20px;
  border-radius: 0px 40px 0px 40px;
  background-color: var(--color--white);
  border: 1px solid rgba(0, 0, 0, 0.2);

  @media (max-width: 768px){
    width: 100%;
    border: none;
    padding: 0;
    background: none;
    height: 40vh;
  
  }
`,MT=k.h2`
  font-size: 2.5em;
  line-height: 100%;
  margin-bottom: 0.5em;
  font-family: var(--font--comfortaa);
  color: ${({$colorDefined:e})=>e||"var(--color--green)"}; 
  font-weight: 100;

  @media (max-width: 768px){
    display: inline-block;
    font-size: 1.7rem;
    height: auto;
  }
`,LT=k.p`
  margin-bottom: 1.2em;
  font-size: 1rem;
  width: 80%;
  color: var(--color--black);
  font-family: var(--font--comfortaa);
  font-weight: 100;

  @media (max-width: 768px){
    width: 100%;
    font-size: .9rem;
    height: auto;
  }
`,OT=k.div`
  flex: 2;
  height: 100%;

  @media (max-width: 768px){
    height: 30vh;
  }
`,IT=k.img`
  width: 100%;
  border-radius: 25px 0 25px 0;
  height: 100%;
  object-fit: cover;
  filter: contrast(120%);
`,RT=k(Jt)`
  position: relative;

  .swiper-button-prev,
  .swiper-button-next {
    color: #fff;
    background-color: ${({$bgColor:e})=>e||"var(--color--green)"};
    box-shadow: none;
    border-radius: 50%;
    padding: 10px;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
    position: absolute;
    bottom: 20px!important;
    top: 95% !important;

    @media (max-width: 768px){
      left: 50%!important;
    }
  }

  .swiper-button-prev {
    left: 100px;
    margin-top: -80px!important;
    margin-right: 5px; 

    @media (max-width: 768px){
      left: 40px!important;
      margin-top: -50px!important;
    }
  }

  .swiper-button-next {
    left: 150px;
    margin-top: -80px!important;

    @media (max-width: 768px){
      left: 90px!important;
      margin-top: -50px!important;
    }
  }
`,Vl=({slides:e,titleColor:t,buttonBgColor:n,imagePosition:r="left"})=>c.jsxs(c.Fragment,{children:[c.jsx(GT,{}),c.jsx(RT,{navigation:!0,autoplay:{delay:5e3,disableOnInteraction:!1,pauseOnMouseEnter:!0},loop:!0,modules:[vr,xr,Vn],className:"mySwiper",$bgColor:n,onMouseEnter:()=>{},onMouseLeave:()=>{},children:e.map((i,a)=>c.jsx(en,{children:c.jsxs(zT,{imagePosition:r,children:[c.jsxs(_T,{children:[c.jsx(MT,{$colorDefined:t,"data-aos":"fade-up","data-aos-delay":"100",children:i.title}),c.jsx(LT,{"data-aos":"fade-down","data-aos-delay":"250",children:i.description}),c.jsx(Xi,{"data-aos":"fade-up","data-aos-delay":"200",text:"Fazer reserva!",text2:"Clique e reserve",borderColor:"var(--color--black)",textColor:"var(--color--black)",hoverColor:"var(--color--black)",hoverTextColor:"var(--color--white)"})]}),c.jsx(OT,{"data-aos":"fade-left","data-aos-delay":"400",children:c.jsx(IT,{src:i.imageUrl,alt:i.title})})]})},a))})]}),DT=Dn`
  0% {
    border-radius: 0 10px 20px 0;
  }
  25% {
    border-radius: 20px 0 10px 20px;
  }
  50% {
    border-radius: 10px 20px 0 10px;
  }
  75% {
    border-radius: 10px 10px 20px 0;
  }
  100% {
    border-radius: 0 20px 10px 0;
  }
`,VT=k.section`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0% 5% 2.5% 5%;
    background-image: url('https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731334823/serraFoto_k1rwb0.webp');
    background-size: cover;
    background-position: center;
    position: relative;

    @media (max-width: 768px){
        height: auto;
        padding: 5% 2.5%;
        margin-bottom: 0;
    }

    &::before{
        background-image: url('../../public/background/background_black.webp');
        position: absolute;
        width: 100%;
        height: 100%;
        content: '';
        background-size: contain;
        opacity: 0.1;
    }

    & > main {
        width: 100%;
        height: 80%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        align-items: center;

        @media (max-width: 768px){

            height: auto;
        }
    }

    & > main div {
        position: relative;
        width: 18%;
        height: 45%;
        margin: 10px 0;

        @media (max-width: 768px){

            width: 48%;
            height: 20vh;
            margin: 5px 0;
        }
    }

    & > main img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: all .1s ease-in-out;
        animation: ${DT} 5s ease-in-out infinite;
        box-shadow: 0 0 5px rgba(255, 255, 255, 0.2);
        border: 1px solid rgba(255, 255, 255, 0.2);
    }

    & > main img:nth-child(-n + 5) {
        border-radius: 0 30px 0 30px;
    }

    & > main img:nth-child(-n + 5):hover {
        border-radius: 30px 0 30px 0;
    }

    & > main img:nth-child(n + 6) {
        border-radius: 30px 0 30px 0;
    }

    & > main img:nth-child(n + 6):hover {
        border-radius: 0px 30px 0px 30px;
    }

    & > main span {
        position: absolute;
        top: 15px;
        right: 20px;
        background-color: rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(10px);
        color: var(--color--white);
        padding: 3px 7px;
        font-size: 0.6rem;
        border-radius: 5px 0 5px 0;
        transition: all 0.3s ease-in-out;
        font-family: var(--font--comfortaa);
        cursor: pointer;

        @media (max-width: 768px){

            font-size: .8rem;
            top: 5px;
            right: 10px;
        }
    }

    & > main div:hover span {
        top: 50%;
        left: 50%;
        width: 80%;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        transform: translate(-50%, -50%);
        padding: 5px 10px;
        background-color: var(--color--white);
        color: var(--color--black);
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        font-size: 0.7em;
        border-radius: 8px;
        
        @media (max-width: 768px){
            font-size: .6rem;
            padding: 5px 7px;
        }
    }
`,NT=k.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 25%;

    @media (max-width: 768px){
        flex-direction: column;
    }

    & > div:nth-child(1) {
        width: 60%;

        @media (max-width: 768px){
            width: 100%;
        }
    }

    & > div:nth-child(2) {
        width: 40%;
        display: flex;
        align-items: center;
        justify-content: flex-end;

        @media (max-width: 768px){
            width: 100%;
            justify-content: center;
            margin-bottom: 15px;
        }
    }

    & > div h1 {
        font-size: 2rem;
        color: var(--color--white);
        font-weight: 100;
        font-family: var(--font--comfortaa);

        @media (max-width: 768px){
            font-size: 1.3rem;
            text-align: center;
            margin-bottom: 30px;
            margin-top: 15px;
        }
    }
`,Jy=({images:e})=>{const[t,n]=j.useState(null);return c.jsxs(VT,{children:[c.jsxs(NT,{children:[c.jsx("div",{children:c.jsx("h1",{"data-aos":"fade-up","data-aos-delay":"100",children:"Conheça as suítes da Le Ange Serra"})}),c.jsx("div",{"data-aos":"fade-down","data-aos-delay":"200",children:c.jsx(Xi,{text:"Fazer reserva!",text2:"Clique e reserve",borderColor:"var(--color--white)",textColor:"var(--color--white)",hoverColor:"var(--color--black)",hoverTextColor:"var(--color--white)"})})]}),c.jsx("main",{"data-aos":"zoom-in","data-aos-delay":"200",children:e.map((r,i)=>c.jsxs("div",{onMouseEnter:()=>n(i),onMouseLeave:()=>n(null),children:[c.jsx("img",{src:r.src,alt:`Imagem ${i+1}`}),c.jsxs("span",{onClick:()=>window.location.href=`/leange/#/acomodaSerra#suite${i+1}`,children:[t===i?"Conhecer Suítes":r.text,t===i&&c.jsx(rp,{})]})]},i))})]})},FT=k.section`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2.5% 5%;
    gap: 50px;
    background-color: var(--color--white);

    @media (max-width: 768px){
        flex-direction: column-reverse;
        height: auto;
        padding: 10% 2.5%;
        margin-bottom: 50px;
    }
`,$T=k.div`
    width: 50%;
    height: 90%;
    display: flex;
    justify-content: center;
    overflow: hidden;

    @media (max-width: 768px){
        width: 100%;
        height: 50vh;
    }
`,BT=k.div`
    width: 100%;
    height: 100%;
    display: flex;
    gap: 15px;

    @media (max-width: 768px){
    }

    & > div {
        width: 50%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 15px;

        @media (max-width: 768px){
            width: 100%!important;

            text-align: center;
        }

        & > img:nth-child(1) {
            width: 100%;
            height: 60%;
            object-fit: cover;
            border-radius: 20px 0 20px 0;
        }

        & > img:nth-child(2) {
            width: 100%;
            height: 40%;
            object-fit: cover;
            border-radius: 0px 20px 0 20px;
        }
    }

    & > div:nth-child(2) > img:nth-child(1) {
        width: 100%;
        height: 40%;
        object-fit: cover;
        border-radius: 20px 0 20px 0;
    }

    & > div:nth-child(2) > img:nth-child(2) {
        width: 100%;
        height: 60%;
        object-fit: cover;
        border-radius: 20px 0 0 20px;
    }
`,HT=k.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    gap: 25px;

    @media (max-width: 768px){
        width: 100%;
        align-items: center;
        margin-top: -10px;
    }
`,UT=k.h1`
    font-size: 2.5rem;
    color: var(--color--black);
    font-family: var(--font--comfortaa);
    font-weight: 100;

    @media (max-width: 768px){
        font-size: 1.6rem;
    }

    & > b {
        font-weight: 100;
        color: ${({colorDefinedBold:e})=>e||"var(--color--green)"};
    }
`,WT=k.p`
    color: var(--color--black);
    font-size: 1rem;
    line-height: 100%;
    width: 80%;
    font-family: var(--font--comfortaa);
    font-weight: 100;

    & > ol {
        margin-left: 20px;
        list-style-type: disc;
        line-height: 140%;
    }

    @media (max-width: 768px){
        width: 100%;
        font-size: 1rem;
        text-align: justify;
        padding: 0 2.5%;
    }
`;k(wr)`
    margin-top: auto; 
`;const Nl=({colorDefinedBold:e})=>c.jsxs(FT,{children:[c.jsx($T,{children:c.jsxs(BT,{children:[c.jsxs("div",{children:[c.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/ff1e37f5-c2ef-407f-b2fe-e3af31bc2900/public",alt:"Homem fazendo churrasco na le ange",loading:"lazy","data-aos":"fade-up","data-aos-delay":"100"}),c.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/58565dfa-b512-4cb6-661c-044db3e48b00/public",alt:"Risoto no prato na le ange",loading:"lazy","data-aos":"fade-up","data-aos-delay":"200"})]}),c.jsxs("div",{children:[c.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/ca15c837-1a56-47c9-8b78-ec68f1cfa200/public",alt:"Foto do hamburguer da le ange com batata frita e saladas",loading:"lazy","data-aos":"fade-down","data-aos-delay":"100"}),c.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/c1c7acdf-aba7-443b-b1e5-3bdc237b3b00/public",alt:"Risoto no prato na le ange",loading:"lazy","data-aos":"fade-down","data-aos-delay":"200"})]})]})}),c.jsxs(HT,{children:[c.jsxs(UT,{colorDefinedBold:e,"data-aos":"fade-up","data-aos-delay":"400",children:["Alimentação ",c.jsx("b",{children:"Inclusa"})]}),c.jsxs(WT,{"data-aos":"fade-down","data-aos-delay":"500",children:["Na ",c.jsx("b",{children:"Le Ange"}),", tudo é pensado para oferecer uma experiência gastronômica diversificada, atendendo todo tipo de restrição alimentar e valorizando ingredientes locais e frescos.  ",c.jsx("br",{})," ",c.jsx("br",{}),"Nossa estadia dispõe de um restaurante, onde são oferecidas todas as refeições do dia:",c.jsx("br",{}),c.jsx("br",{}),c.jsxs("ol",{type:"disc",children:[c.jsx("li",{children:"Café da manhã;"}),c.jsx("li",{children:"Almoço;"}),c.jsx("li",{children:"Chá da tarde;"}),c.jsx("li",{children:"Jantar."}),c.jsx("br",{})]}),"Incluindo as nossas deliciosas sobremesas."]}),c.jsx(Xi,{"data-aos":"fade-up","data-aos-delay":"200",text:"Fazer reserva!",text2:"Clique e reserve",borderColor:"var(--color--black)",textColor:"var(--color--black)",hoverColor:"var(--color--black)",hoverTextColor:"var(--color--white)"})]})]}),Wm=k.section`
    width: 100%;
    margin-top: 5vh;
    display: flex;
    padding: 0 5%;
    justify-content: center;
    align-items: center;
    height: 12vh;
    
    @media (max-width: 768px){
        height: 10vh;
        align-items: center;
        margin-top: 2.5vh;
    }

    & > h1 {
        font-size: 2rem;
        font-family: var(--font--comfortaa);
        font-weight: 100;
        text-align: center;
        width: 100%;
        
        @media (max-width: 768px){
            font-size: 1.6rem;
        }
    }
`,qT=k.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    height: 80vh;
    padding: 0 5%;

    @media (max-width: 768px){
        height: auto;
    }
`,YT=k.div`
    width: 95%; 
    height: 70vh; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 10px;
    border-radius: 15px 0 15px 0; 
    position: relative; 
    overflow: hidden; 

    @media (max-width: 768px){
        width: 100%;
        margin: 0;
        height: 65vh;
        border: 1px solid transparent;
    }
`,KT=k.p`
    font-size: .6rem;
    border-radius: 0 10px 0 10px;
    position: absolute;
    bottom: 72%;
    left: -60px;
    transform: rotate(270deg);
    padding: 5px 25px;
    margin: 10px 0; 
    color: var(--color--white);
    background-color: rgba(0, 0, 0, 0.4);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(20px);
    z-index: 1; 
    font-family: var(--font--comfortaa);
    font-weight: 100;

    @media (max-width: 768px){
        font-size: .7rem;
        text-align: center;
        width: 60%;
        display: inline-block;
        left: -75px;
        bottom: 72.5%;
        width: 55%;
    }
`,XT=[{id:1,text:"Pousada Le Ange Mar",bgImages:["https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/6f192299-26a5-4cba-0d3d-f042f7cc4100/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/96048cf4-e533-42ef-631c-17c79f758300/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/53ddb117-9d86-42b5-0188-2733003a8400/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/95f365f9-0cf7-4a99-de39-71618b26a300/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/86f7d35e-3494-439d-483c-48e036d31a00/public"]},{id:2,text:"Pousada Le Ange Serra",bgImages:["https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/7e872f9c-0035-4872-cf50-e7eac0bf1600/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/532a9b10-7c75-4668-65bc-97a13ace5600/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/abd1748a-6b4f-4c8d-4dfa-af0a83aaaf00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/5f04125f-47d3-4abd-c359-9e3c129f6500/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/e6c7bed9-f486-4be9-db47-7087f6943500/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/122827e6-c434-44a2-0546-d37d2ffeaf00/public"]},{id:3,text:"Pousada Le Ange Mar",bgImages:["https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/cac55f28-555d-4ce5-6e3b-457af8476c00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a38d49ef-f498-4f03-cecd-d4ac8c69ac00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/ffcf23fa-d075-4682-9bda-844c527d7f00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/d0f29504-829a-4c8f-8720-4c8ae3d27f00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/3f1ccf0e-8406-4164-0955-29087e5a0f00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/480b1655-49d4-4323-86c1-345224294000/public"]},{id:4,text:"Pousada Le Ange Serra",bgImages:["https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/3908ea8d-5d8e-4a13-ac75-dc312f545100/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/66aa3be9-dd1d-460a-2a0d-4da92e68dc00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/bf5974c4-3129-43bb-db61-23404c00d600/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/def5ad59-dc78-4e9a-320b-28d28ec6c500/public"]},{id:5,text:"Pousada Le Ange Mar",bgImages:["https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/0afec340-71f1-42f3-3ffe-5af2438d7500/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/2603ac07-7df2-43eb-697f-99e79942c200/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/b2c446cd-cffd-49f1-cb59-65ace1b57a00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/ca778cf7-62d4-48fb-6e1c-1e6d1fc29400/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/67bb7d62-0ff9-490f-160a-1335e4800200/public"]},{id:6,text:"Pousada Le Ange Serra",bgImages:["https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/5abab547-8a8a-408f-013d-0ec1ce1b7a00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/faa5f682-d069-4b1c-c022-6d7f99612700/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a78d689b-9028-473c-6edd-b0d0c4912400/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/2e5748ca-ff68-4da1-bff2-e852fa441a00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a2ac9fb3-1ba9-422f-ccee-9aea2852df00/public"]},{id:7,text:"Pousada Le Ange Mar",bgImages:["https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/695f6ec1-0347-4549-4f16-663780080f00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/1ddb51ed-4ba4-44ed-06a2-7d6c21838700/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/cb252e21-68b5-495b-d8fc-3a1dbe454600/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a2e35092-b9d0-49c7-701a-082307a62400/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/be407d5c-724c-4ebd-9873-a4057f301100/public"]}],Fl=()=>c.jsxs(c.Fragment,{children:[c.jsx(Wm,{children:c.jsx("h1",{children:"Palavra do Hóspede"})}),c.jsx(qT,{children:c.jsx(Jt,{slidesPerView:1,spaceBetween:10,modules:[vr,xr,Vn],pagination:!1,navigation:!0,loop:!0,grabCursor:!0,autoplay:{delay:7e3,disableOnInteraction:!1,pauseOnMouseEnter:!0},breakpoints:{1024:{slidesPerView:3},768:{slidesPerView:2},480:{slidesPerView:1}},children:XT.map(e=>c.jsx(en,{children:c.jsxs(YT,{"data-aos":"fade-up","data-aos-delay":"200",children:[c.jsx(Jt,{slidesPerView:1,spaceBetween:10,loop:!0,style:{width:"100%",height:"100%"},autoplay:{delay:5e3,disableOnInteraction:!1,pauseOnMouseEnter:!0},onTouchStart:t=>{t.stopPropagation()},onMouseEnter:t=>{t.stopPropagation()},children:e.bgImages.map((t,n)=>c.jsx(en,{children:c.jsx("div",{style:{backgroundImage:`url(${t})`,backgroundSize:"cover",backgroundPosition:"center",width:"100%",height:"100%",borderRadius:"25px 0 25px 0"},loading:"lazy"})},n))}),c.jsx(KT,{children:e.text})]})},e.id))})}),c.jsx(Wm,{children:c.jsx(wr,{text:"Reservar agora!",textColor:"var(--color--black)",backgroundColor:"transparent",borderColor:"var(--color--black)",iconColor:"var(--color--black)",hoverBackgroundColor:"var(--color--black)",hoverBorderColor:"var(--color--black)",hoverColor:"var(--color--white)",hoverIconColor:"var(--color--white)",onClick:()=>window.open("https://wa.link/dojlwi","_blank")})})]});k.div`
    height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center; 

    @media (max-width: 768px){
        height: auto;
    }
`;const QT=k.section`
    width: 100%;
    display: flex;
    padding: 0 5%;
    justify-content: space-between;
    height: 15vh;
    align-items: center;
    margin-top: 5vh;

    @media (max-width: 768px){
        flex-direction: column;
        justify-content: center;
        gap: 10px;
        margin-top: -5vh;
        margin-bottom: 20px;
        height: 15vh;
    }

    & > h1 {
        font-size: 2rem;
        font-family: var(--font--comfortaa);
        font-weight: 100;

        @media (max-width: 768px){
            font-size: 1.6rem;
            color: var(--color--black);
            background-color: rgba(255, 255, 255, 0.4);
            padding: 10px 20px;
            border-radius: 10px;
            backdrop-filter: blur(10px);
        }
    }

    & > h1 b{
        font-weight: 500;
    }
`,$l=({carousels:e})=>c.jsxs(c.Fragment,{children:[c.jsxs(QT,{children:[c.jsxs("h1",{"data-aos":"fade-up","data-aos-delay":"200",children:[c.jsx("b",{children:"100%"})," Pet Friendly"]}),c.jsx(wr,{text:"Reservar agora!",textColor:"var(--color--black)",backgroundColor:"transparent",borderColor:"var(--color--black)",iconColor:"var(--color--black)",hoverBackgroundColor:"var(--color--black)",hoverBorderColor:"var(--color--black)",hoverColor:"var(--color--white)",hoverIconColor:"var(--color--white)",onClick:()=>window.open("https://wa.link/dojlwi","_blank")})]}),e.map((t,n)=>c.jsx(ju,{images:t.images,reverse:t.reverse||!1},n))]}),ZT=k.div`
    height: 5vh;

    @media (max-width: 768px){
        height: 0vh;
    }
`,JT=k.section`
    width: 100%;
    display: flex;
    padding: 5% 5% 2.5% 10%;
    align-items: center;
    justify-content: space-between;
    height: 95vh;
    background: #fff;
    position: relative;
    

    &::before{
        content: '';
        width: 100%;
        height: 100vh;
        left: 0;
        top: -5vh;
        position: absolute;
        z-index: 1;
        opacity: .05;
        background-image: url('https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/f9af3c90-2ae9-4250-2ac9-afedce182000/public');
        background-position: center;
        background-size: cover;

        @media (max-width:1080px){
            display: none!important;
        }
    }

    @media (max-width: 768px){
        padding: 10% 2.5%;
        flex-direction: column-reverse;
        position: relative;
        z-index: 2;
    }
`,eA=k.div`
    width: 45%;
    height: 100%;
    background-image: url('https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/f9af3c90-2ae9-4250-2ac9-afedce182000/public');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 40px 10px 30px 20px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    filter: contrast(110%);

    @media (max-width: 768px){
        width: 100%;
        border-radius: 0px;
        border-image: fill 0 linear-gradient(#0001, #ffffff);
        position: absolute;
        box-shadow: none!important;
        height: 100%;
        top: 0;
        z-index: -3;

    }
`,tA=k.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: 20px;
    flex-direction: column;
    position: relative;
    z-index: 3;
    

    @media (max-width: 768px){
        width: 100%;
        align-items: center;
        height: 35%;
    }

    & > h4 {
        font-family: var(--font--comfortaa);
        font-size: 18px;
        font-weight: 200;
        color: var(--color--black);
        font-weight: 100;
        

        @media (max-width: 768px){
            color: var(--color--black);
            font-size: 14px;
            text-align: center;
            font-weight: 800;
        }
    }

    & > h1 {
        font-family: var(--font--comfortaa);
        font-size: 65px;
        margin-left: -5px;
        width: 100%;
        line-height: 100%;
        color: var(--color--black);
        margin-top: -15px;
        font-weight: 100;
        

        @media (max-width: 768px){
            display: inline-block;
            width: 100%;
            font-size: 35px;
            text-align: center;
            margin-left: 0;
            margin-top: -5px;
            font-weight: 100;
        }
    }

    & > h1 b {
        color: var(--color--green);
        font-weight: 100;
        
        @media(max-width: 768px){
            font-weight: 100;
        }
    }

    & > p {
        font-family: var(--font--comfortaa);
        color: var(--color--black);
        font-size: 18px;
        line-height: 120%;
        width: 80%;
        font-weight: 100;
        position: relative;
        z-index: 2;
        

        @media (max-width: 768px){
            width: 80%;
            font-size: 1rem;
            text-align: center;
            padding-bottom: 0px;
        }
    }
`,nA=[{title:"Pet Friendly",description:"Não temos restrições quanto ao porte ou raça do seu pet, também não cobramos taxas adicionais para a vinda deles. Aqui, o seu pet tem liberdade total para acessar todas as nossas comodidades!",buttonText:"Viver minha experiência agora",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/db3f6942-0de2-433d-1235-33bfa547e500/public"},{title:"Aventura",description:"Na propriedade, há trilhas que percorrem a natureza, beirando o rio! Em diversos pontos, você pode dar uma paradinha para tomar um banho nas águas frescas e renovar as energias!",buttonText:"Viver minha experiência agora",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/b324ce14-d3d8-4fc3-fccf-b4b4a9806d00/public"},{title:"Refrescar",description:"Nossa maravilhosa piscina de borda infinita possui aquecimento solar e tratamento especial por ozônio, com níveis baixíssimos de cloro, além de contar com um ofurô acoplado, perfeito para aproveitar o final de tarde.",buttonText:"Viver minha experiência agora",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/8b7eae12-574b-40fd-5e6f-7f341c81a600/public"},{title:"Sossego",description:"A área da sauna fica situada ao lado da mata, envolvida pelo som relaxante do rio que passa. Aqui, você pode desfrutar de um hot tub abastecido por água natural e aquecido à lenha, o combo perfeito para você relaxar.",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/da7c577a-832a-4a84-d5fd-162e11915b00/public"},{title:"Lazer",description:"Nossas áreas internas contam com três salas superequipadas e aconchegantes, sendo elas: sala de TV, sala de estar, sala de jogos com mesa de bilhar, carteado, jogos de tabuleiro e biblioteca.",buttonText:"Viver minha experiência agora",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/7c086b71-3c6b-442b-584c-dcdabe1be700/public"},{title:"Cozinha",description:"Todas as refeições estão incluídas: café da manhã, almoço, chá da tarde e jantar! Todas preparadas com muito tempero, amor e afeto.",buttonText:"Viver minha experiência agora",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/c1c7acdf-aba7-443b-b1e5-3bdc237b3b00/public"},{title:"Diversão",description:"Espaço de sobra para o seu pet se divertir! Espaço agility à beira do lago, com muita grama, para o seu pet, correr, pular, brincar e, claro, nadar!",buttonText:"Viver minha experiência agora",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/c57174c4-9b12-4842-e8ff-6cfb4867a200/public"},{title:"Adega",description:"Para tornar a sua experiência ainda mais especial, contamos com uma adega subterrânea para a climatização perfeita dos vinhos, bar com carta variada de drinks, cervejas e destilados.",buttonText:"Viver minha experiência agora",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/1a66d627-7861-4124-638d-d21ddef05100/public"},{title:"Suítes",description:"São 10 suítes encatadoras e cada uma possui o seu charme. Todas dispõem de uma banheira com vista para a natureza, lareira, cama king-size, ar-condicionado, frigobar e varanda.",buttonText:"Viver minha experiência agora",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/48a11406-659c-4d98-f2d8-6fc518ef6600/public"},{title:"Relaxar",description:"Relaxe no nosso SPA com uma vista de frente para a mata! Você pode escolher contratar os nossos serviços de massoterapia, manicure e pedicure.",buttonText:"Viver minha experiência agora",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/ece77d44-3478-4c00-cb8f-073b002ed400/public"}],rA=[{images:[{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/c3cd47cc-01fa-43c8-ef2d-e57d8ba50d00/public",alt:"Cachorro surfando na piscina",loading:"lazy",label:"Le Ange Serra"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/5bdb3546-6085-40a1-059b-b977978f2800/public",alt:"Cachorro andando na borda da piscina",loading:"lazy",label:"Le Ange Serra"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/e69c27cf-cc71-4a1a-c859-7604db2ec700/public",alt:"Cachorro sentado tomando sol e sorrindo para a foto",loading:"lazy",label:"Le Ange Serra"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/f9af3c90-2ae9-4250-2ac9-afedce182000/public",alt:"2 cachorros e uma mulher no meio",loading:"lazy",label:"Le Ange Serra"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/4fe90a96-3e1a-475e-bf6c-b2f68430b400/public",alt:"Cachorro mordendo uma bolinha",loading:"lazy",label:"Le Ange Serra"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/fa931507-db19-427a-91a0-c30d8fb81800/public",alt:"Casal com um casal de cachorro sentado na beira da piscina",loading:"lazy",label:"Le Ange Serra"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/f0b0ec5f-6bd1-427d-7bc9-93253779d000/public",alt:"Mulher na cachoeira com cachorros brincando",loading:"lazy",label:"Le Ange Serra"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/82fb4467-00bc-422b-be3f-d13d0847d900/public",alt:"Mulher e cachorro na piscina sorrindo",loading:"lazy",label:"Le Ange Serra"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/3f981b12-4550-4d26-bdc6-1e3050abf600/public",alt:"3 cachorros tirando uma selfie",loading:"lazy",label:"Le Ange Serra"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/eff6d8ef-159a-46da-6fe7-0a826541f000/public",alt:"Cachorro dormindo na rede em cima da cachoeira",loading:"lazy",label:"Le Ange Serra"}]},{images:[{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/23c08875-4c8e-470d-3635-56f4cdfc1000/public",alt:"Cachorro dormindo no sofá",loading:"lazy",label:"Le Ange Serra"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a7910dc1-2d38-46fe-c997-734005e71600/public",alt:"Cachorro papai noel",loading:"lazy",label:"Le Ange Serra"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/0ba1de25-a892-4ee8-7165-584f54f0b600/public",alt:"Um cachorro no cola de um humano sorrindo",loading:"lazy",label:"Le Ange Serra"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/6da69e80-1cff-41e2-5434-318840221800/public",alt:"2 cachorros e uma mulher no meio",loading:"lazy",label:"Le Ange Serra"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/d9be2586-3341-4990-f3c8-685edcad8900/public",alt:"Cachorro na mão do tutor",loading:"lazy",label:"Le Ange Serra"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/dce2d881-18d3-4a3d-5b7e-ad7e364be300/public",alt:"2 cachorros sorrindo na rede",loading:"lazy",label:"Le Ange Serra"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/fab67883-96b6-4f10-9c94-c5622ee8b000/public",alt:"Uma mulher e um cachorro do lado dela",loading:"lazy",label:"Le Ange Serra"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/56af4858-5fbf-438f-fac3-ee527c3a4600/public",alt:"3 cachorros brincando na praia",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/db285e3c-87b7-40db-b04b-cfd384d06200/public",alt:"Cachorro andando na cachoeira",loading:"lazy",label:"Le Ange Serra"}],reverse:!0}],iA=k.section`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px){
        height: auto;
        padding: 0% 0 5% 0 ;
    }
`,aA=k.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 7vh;
    background-color: var(--color--green);
    font-family: var(--font--comfortaa);

    @media (max-width: 768px){
        height: 8vh;
        margin-bottom: 25px;
    }

    & > h1{
        font-weight: 200;
        width: 80%;
        text-align: center;
        font-size: 1.1rem;
        color: var(--color--white);

        @media (max-width: 768px){
            font-size: 1rem;
            font-weight: 400;
        }
    }
`,oA=k.section`
    width: 100%;
    height: 80vh;
    padding: 10% 5%;
    margin-top: 10vh;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px){
        height: auto;
        padding: 10% 2.5% 0 2.5%;
        margin-top: 0;
    }
`,sA=[{image:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/bbca820c-502b-48cf-a6d6-8a4d4da25900/public",title:"Noite das pizzas",dateRange:"06/12/2024 até 08/12/2024 (3 diárias)",features:[{icon:c.jsx(re,{}),text:"07/12 - Noite das pizzas"},{icon:c.jsx(re,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(xe,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"359,20",discount:25},{image:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/79fdce4b-cea9-43ec-5c67-2235d2319a00/public",title:"Frutos do Mar",dateRange:"13/12/2024 até 15/12/2024 (2 diárias)",features:[{icon:c.jsx(re,{}),text:"14/12 - Frutos do Mar"},{icon:c.jsx(re,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(xe,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"359,20",discount:25},{image:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/58c77a3d-d9fb-422f-c84b-ad4798b74600/public",title:"Fique 4 pague 3",dateRange:"Segunda-feira a Sexta-feira",features:[{icon:c.jsx(re,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(hn,{}),text:"Até 12X SEM JUROS"},{icon:c.jsx(xe,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"538,90",discount:25},{image:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/1e2853af-cbe7-48ba-a6cc-7e36642f0f00/public",title:"Pacote de Natal",dateRange:"21/12/2024 até 25/12/2024 (4 diárias)",features:[{icon:c.jsx(re,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(hn,{}),text:"Até 12X SEM JUROS"},{icon:c.jsx(xe,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"918,40",discount:25},{image:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/70044ef4-2814-404f-5465-3e5acefd8600/public",title:"Pacoto Ano Novo",dateRange:"28/12/2024 até 01/01/2025 (4 diárias)",features:[{icon:c.jsx(re,{}),text:"31/12 - Ceia maravilhosa"},{icon:c.jsx(re,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(xe,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"1171,50",discount:25}],lA=k.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 15vh;
    margin-bottom: -10vh;

    @media (max-width: 768px){
        display: none;
    }
`,cA=[{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/c21ef88c-f22b-497e-1e70-5c5b4c4cf500/public",text:"Suíte Superior 1",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/23d18593-f941-4c65-0349-6b23e6ea2800/public",text:"Suíte Superior 2",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/99db9a7b-dafd-4b04-36ce-c4eac6880600/public",text:"Suíte Superior 3",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/d07d16a0-e7f4-4104-7d5e-f7e4c2dfa500/public",text:"Suíte Standard 4",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/fd429f81-a091-4ca3-9f54-d4a1b730e200/public",text:"Suíte Standard 5",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a22d76b9-b7d4-4174-0cc1-4cfdfd57d500/public",text:"Suíte Master 6",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a7ae1bee-6f60-4584-d03c-0aebd06a2600/public",text:"Suíte Superior 7",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/4c448474-8a7b-489b-ac5f-7b11c4dfad00/public",text:"Suíte Standard 8",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/509535a4-9291-44a8-c250-5e8be0b28e00/public",text:"Suíte Superior 9",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/853f4009-5ddc-49ad-717f-3d49d3ad4900/public",text:"Suíte Master 10",loading:"lazy"}],dA=()=>(j.useEffect(()=>{Ie.init({duration:1e3,once:!1}),Ie.refresh()},[]),c.jsxs(c.Fragment,{children:[c.jsx(In,{children:c.jsx("title",{children:"Le Ange Serra - Pousada Le Ange"})}),c.jsx(ZT,{}),c.jsx(Nn,{}),c.jsxs(JT,{children:[c.jsx(eA,{"data-aos":"zoom-in","data-aos-delay":"100"}),c.jsxs(tA,{children:[c.jsx("h4",{"data-aos":"fade-up","data-aos-delay":"100",children:"Conheça a Le Ange Serra, a pousada mais"}),c.jsxs("h1",{"data-aos":"fade-down","data-aos-delay":"200",children:["PET FRIENDLY",c.jsx("br",{})," DO ",c.jsx("b",{children:"BRASIL"})]}),c.jsx("p",{children:"Aqui você e o seu pet, são mais do que bem-vindos!"}),c.jsx(wr,{text:"Reservar agora!",textColor:"var(--color--black)",backgroundColor:"transparent",borderColor:"var(--color--black)",hoverBackgroundColor:"var(--color--green)",hoverBorderColor:"var(--color--green)",hoverColor:"var(--color--white)",hoverIconColor:"var(--color--white)",onClick:()=>window.open("https://wa.link/dojlwi","_blank")})]})]}),c.jsx(aA,{"data-aos":"fade-up","data-aos-delay":"200",children:c.jsx("h1",{"data-aos":"fade-in","data-aos-delay":"400",children:"LeAnge Serra | Miguel Pereira RJ"})}),c.jsx(iA,{children:c.jsx(Vl,{slides:nA})}),c.jsx(Jy,{images:cA,"data-aos":"fade-up","data-aos-delay":"200"}),c.jsx(Nl,{}),c.jsx($l,{carousels:rA}),c.jsx(lA,{children:c.jsx(dt,{text:"Fazer minha reserva!",onClick:()=>window.open("https://wa.link/dojlwi","_blank")})}),c.jsx(oA,{children:c.jsx(vo,{events:sA})}),c.jsx(Fl,{}),c.jsx(yr,{})]})),uA=Dn`
  0% {
    border-radius: 0 10px 20px 0;
  }
  25% {
    border-radius: 20px 0 10px 20px;
  }
  50% {
    border-radius: 10px 20px 0 10px;
  }
  75% {
    border-radius: 10px 10px 20px 0;
  }
  100% {
    border-radius: 0 20px 10px 0;
  }
`,fA=k.section`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0% 5% 2.5% 5%;
    position: relative;
    background-image: url('https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731334824/marFoto_oxc2py.webp');
    background-size: cover;
    background-position: center;

    @media (max-width: 768px){
        height: auto;
        padding: 5% 2.5%;
    }

    &::before{
        background-image: url('../../public/background/background_black.webp');
        position: absolute;
        width: 100%;
        height: 100%;
        content: '';
        background-size: contain;
        opacity: 0.1;
    }

    & > main {
        width: 100%;
        height: 80%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        align-items: center;

        @media (max-width: 768px){

            height: auto;
        }
    }

    & > main div {
        position: relative;
        width: 23%;
        height: 45%;
        margin: 10px 0;

        @media (max-width: 768px){

            width: 48%;
            height: 20vh;
            margin: 5px 0;
        }
    }

    & > main img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: all .1s ease-in-out;
        animation: ${uA} 5s ease-in-out infinite;
        box-shadow: 0 0 5px rgba(255, 255, 255, 0.2);
        border: 1px solid rgba(255, 255, 255, 0.2);
    }

    & > main img:nth-child(-n + 5) {
        border-radius: 0 30px 0 30px;
    }

    & > main img:nth-child(-n + 5):hover {
        border-radius: 30px 0 30px 0;
    }

    & > main img:nth-child(n + 6) {
        border-radius: 30px 0 30px 0;
    }

    & > main img:nth-child(n + 6):hover {
        border-radius: 0px 30px 0px 30px;
    }

    & > main span {
        position: absolute;
        top: 15px;
        right: 20px;
        background-color: rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(10px);
        color: var(--color--white);
        padding: 3px 7px;
        font-size: 0.6rem;
        border-radius: 5px 0 5px 0;
        transition: all 0.3s ease-in-out;
        font-family: var(--font--comfortaa);
        cursor: pointer;

        @media (max-width: 768px){

            font-size: .8rem;
            top: 5px;
            right: 10px;
        }
    }

    & > main div:hover span {
        top: 50%;
        left: 50%;
        width: 80%;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        transform: translate(-50%, -50%);
        padding: 5px 10px;
        background-color: var(--color--white);
        color: var(--color--black);
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        font-size: 0.7em;
        border-radius: 8px;

        @media (max-width: 768px){
            font-size: .6rem;
            padding: 5px 7px;
        }
    }
`,pA=k.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 25%;

    @media (max-width: 768px){
        flex-direction: column;
    }

    & > div:nth-child(1) {
        width: 60%;

        @media (max-width: 768px){
            width: 100%;
        }
    }

    & > div:nth-child(2) {
        width: 40%;
        display: flex;
        align-items: center;
        justify-content: flex-end;

        @media (max-width: 768px){
            width: 100%;
            justify-content: center;
            margin-bottom: 35px;
        }
    }

    & > div h1 {
        font-size: 2rem;
        color: var(--color--white);
        font-family: var(--font--comfortaa);
        font-weight: 100;

        @media (max-width: 768px){
            font-size: 1.3rem;
            text-align: center;
            margin-bottom: 30px;
            margin-top: 15px;
        }
    }
`,e2=({images:e})=>{const[t,n]=j.useState(null);return j.useEffect(()=>{Ie.init({duration:1e3,once:!1}),Ie.refresh()},[]),c.jsxs(fA,{children:[c.jsxs(pA,{children:[c.jsx("div",{children:c.jsx("h1",{"data-aos":"fade-up","data-aos-delay":"100",children:"Conheça as suítes da Le Ange Mar"})}),c.jsx("div",{"data-aos":"fade-down","data-aos-delay":"250",children:c.jsx(Xi,{text:"Fazer reserva!",text2:"Clique e reserve",borderColor:"var(--color--white)",textColor:"var(--color--white)",hoverColor:"var(--color--black)",hoverTextColor:"var(--color--white)"})})]}),c.jsx("main",{"data-aos":"zoom-in-up","data-aos-delay":"400",children:e.map((r,i)=>c.jsxs("div",{onMouseEnter:()=>n(i),onMouseLeave:()=>n(null),children:[c.jsx("img",{src:r.src,alt:`Imagem ${i+1}`}),c.jsxs("span",{onClick:()=>window.location.href=`/leange/#/acomodaMar#suite${i+1}`,children:[t===i?"Conhecer Suítes":r.text,t===i&&c.jsx(rp,{})]})]},i))})]})},hA=k.div`
    height: 5vh;

    @media (max-width: 768px) {
        height: 0vh;
    }
`,mA=k.section`
    width: 100%;
    display: flex;
    padding: 5% 10% 2.5% 5%;
    align-items: center;
    justify-content: space-between;
    height: 95vh;
    background: #fff;
    position: relative;

    &::before {
        content: '';
        width: 100%;
        height: 100vh;
        left: 0;
        top: -5vh;
        position: absolute;
        z-index: 1;
        opacity: 0.05;
        background-image: url('https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/ddb82947-e348-414c-3db1-f51552701b00/public');
        background-position: center;
        background-size: cover;

        @media (max-width:1080px){
            display: none!important;
        }
    }

    @media (max-width: 768px) {
        padding: 10% 2.5%;
        flex-direction: column-reverse;
        position: relative;
        z-index: 2;
    }
`,gA=k.div`
    width: 45%;
    height: 100%;
    background-image: url('https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/ddb82947-e348-414c-3db1-f51552701b00/public');
    background-position: bottom;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 20px 10px 30px 20px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    filter: contrast(110%);

    @media (max-width: 768px) {
        width: 100%;
        border-radius: 0px;
        border-image: fill 0 linear-gradient(#0001, #ffffff);
        box-shadow: none!important;
        position: absolute;
        height: 100%;
        top: 0;
        z-index: -3;
    }
`,vA=k.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    gap: 20px;
    flex-direction: column;
    position: relative;
    z-index: 3;

    @media (max-width: 768px) {
        width: 100%;
        align-items: center;
        height: 35%;
        z-index: 10!important;
    }

    & > h4 {
        font-family: var(--font--comfortaa);
        font-size: 18px;
        font-weight: 200;
        color: var(--color--black);

        @media (max-width: 768px) {
            color: var(--color--black);
            font-size: 14px;
            text-align: center;
            font-weight: 800;
        }
        
    }

    & > h4 b{
        color: var(--color--blue);
        font-weight: 300;
    }

    & > h1 {
        font-family: var(--font--comfortaa);
        text-align: right;
        font-size: 65px;
        width: 100%;
        line-height: 100%;
        font-weight: 100;
        color: var(--color--black);
        margin-top: -15px;

        @media (max-width: 768px) {
            display: inline-block;
            width: 100%;
            font-size: 35px;
            text-align: center;
            margin-top: -5px;
            font-weight: 100;
        }
    }

    & > h1 b {
        color: var(--color--blue);
        font-weight: 100;

        @media (max-width: 768px) {
            font-weight: 100;
        }
    }

    & > p {
        font-family: var(--font--comfortaa);
        color: var(--color--black);
        text-align: right;
        font-size: 18px;
        line-height: 100%;
        width: 50%;
        position: relative;
        z-index: 2;
        font-weight: 100;

        @media (max-width: 768px) {
            width: 80%;
            font-size: 1rem;
            text-align: center;
            padding-bottom: 10px;
        }
    }
`,xA=[{title:"Pet Friendly",description:"Não temos restrições quanto ao porte ou raça do seu pet, também não cobramos taxas adicionais para a vinda deles. Aqui, o seu pet tem liberdade total para acessar todas as nossas comodidades!",buttonText:"Viver minha experiência agora",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/42a70d06-97d1-4f5c-5df8-36c30f21c100/public"},{title:"Praia",description:"Para os amantes da praia, estamos localizados a apenas 150 metros da Praia Rasa, onde você e o seu pet podem aproveitar juntinhos e dar um mergulho delicioso no mar.",buttonText:"Viver minha experiência agora",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/da4810e5-6e85-45f5-1fcf-f6a74754bd00/public"},{title:"Piscina",description:"Nossa piscina aquecida com vista panorâmica para o oceano é de surpreender! Possui tratamento especial por ozônio com níveis baixíssimos de cloro, pensando no bem-estar da sua pele e a do seu pet também!",buttonText:"Viver minha experiência agora",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/09da9d76-57b8-4d44-02b2-3c4c2380c800/public"},{title:"Ofurôs",description:"São dois ofurôs acoplados na piscina, para você relaxar na água quentinha, apreciando a vista exuberante do mar.",buttonText:"Viver minha experiência agora",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/0d1d1a6a-5935-4c57-6b12-d1f028604400/public"},{title:"Sala de estar",description:"A sala de estar é aquela que abraça e aconchega. Cheia de sofás, você pode se acomodar e assistir à televisão, ou até mesmo ler um livro, sempre na companhia do seu pet.",buttonText:"Viver minha experiência agora",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/939f40ce-048b-4746-7ce7-83fc2f4bbc00/public"},{title:"Cozinha",description:"Todas as refeições estão incluídas: café da manhã, almoço, chá da tarde e jantar! Todas preparadas com muito tempero, amor e afeto.",buttonText:"Viver minha experiência agora",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/bec96bcc-f2d6-431c-a7d5-31e1c5b7d000/public"},{title:"Bar",description:"Para completar ainda mais a sua experiência, contamos com uma carta variada de vinhos, destilados, drinks e cervejas!",buttonText:"Viver minha experiência agora",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/67318553-8e4b-4d4c-b914-3ea76fc7be00/public"},{title:"Suítes",description:"São 8 suítes, elegantemente, decoradas, todas com vista para o mar, banheira de imersão, varanda, cama king-size, ar-condicionado e frigobar.",buttonText:"Viver minha experiência agora",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/4d6afdaf-1cfe-4860-8099-818abedfdd00/public"}],yA=k.section`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -5vh;

    @media (max-width: 768px) {
        height: auto;
        padding: 0% 0 5% 0;
        margin-top: 0;
    }
`,wA=[{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/04491c1f-dc99-499a-4e92-13037b3eab00/public",text:"Suíte Superior 1",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/4551d99f-d7fa-440f-bdb1-9126c3a82100/public",text:"Suíte Standard 2",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a81bc75d-a475-4dc9-6101-2f7dbb4e4b00/public",text:"Suíte Superior 3",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/e0b4c640-813a-4586-bdf9-91b0be3f7300/public",text:"Suíte Superior 4",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/912f5f6c-6f94-4dae-30b3-85c460f0f700/public",text:"Suíte Superior 5",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/70b133ff-56ab-44b4-76b3-ef1638c79000/public",text:"Suíte Superior 6",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/e9d95c2b-081d-4808-6bf6-431e89183c00/public",text:"Suíte Master 7",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/baf68f87-5db9-47ec-0fb5-dc4b5e1f4b00/public",text:"Suíte Master 8",loading:"lazy"}],bA=k.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 8vh;
    background-color: var(--color--blue);
    font-family: var(--font--comfortaa);

    @media (max-width: 768px) {
        height: 8vh;
        margin-bottom: 25px;
    }

    & > h1 {
        font-weight: 200;
        width: 80%;
        text-align: center;
        font-size: 1.1rem;
        color: var(--color--white);

        @media (max-width: 768px) {
            font-size: 1rem;
            font-weight: 400;
        }
    }
`,SA=k.section`
    width: 100%;
    height: 80vh;
    padding: 10% 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10vh;

    @media (max-width: 768px) {
        height: auto;
        margin-top: 0;
        padding: 10% 2.5% 0 2.5%;
    }
`,jA=[{image:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/bbca820c-502b-48cf-a6d6-8a4d4da25900/public",title:"Noite das pizzas",dateRange:"06/12/2024 até 08/12/2024 (3 diárias)",features:[{icon:c.jsx(re,{}),text:"07/12 - Noite das pizzas"},{icon:c.jsx(re,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(xe,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"359,20",discount:25},{image:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/79fdce4b-cea9-43ec-5c67-2235d2319a00/public",title:"Frutos do Mar",dateRange:"13/12/2024 até 15/12/2024 (2 diárias)",features:[{icon:c.jsx(re,{}),text:"14/12 - Frutos do Mar"},{icon:c.jsx(re,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(xe,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"359,20",discount:25},{image:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/58c77a3d-d9fb-422f-c84b-ad4798b74600/public",title:"Fique 4 pague 3",dateRange:"Segunda-feira a Sexta-feira",features:[{icon:c.jsx(re,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(hn,{}),text:"Até 12X SEM JUROS"},{icon:c.jsx(xe,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"538,90",discount:25},{image:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/1e2853af-cbe7-48ba-a6cc-7e36642f0f00/public",title:"Pacote de Natal",dateRange:"21/12/2024 até 25/12/2024 (4 diárias)",features:[{icon:c.jsx(re,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(hn,{}),text:"Até 12X SEM JUROS"},{icon:c.jsx(xe,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"918,40",discount:25},{image:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/70044ef4-2814-404f-5465-3e5acefd8600/public",title:"Pacoto Ano Novo",dateRange:"28/12/2024 até 01/01/2025 (4 diárias)",features:[{icon:c.jsx(re,{}),text:"31/12 - Ceia maravilhosa"},{icon:c.jsx(re,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(xe,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"1171,50",discount:25}],CA=k.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 15vh;
    margin-bottom: -10vh;

    @media (max-width: 768px) {
        display: none;
    }
`,kA=[{images:[{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/c9f443a0-365f-4341-67c4-dc3b15d8d200/public",alt:"Foto de cachorro com uma bola na boca",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/f381312d-98e6-4e3a-2267-b72775b77800/public",alt:"Foto do cachorro sentado tomando sol",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/ebe09a3c-386f-4683-b025-9734976d0b00/public",alt:"Cachorro na piscina sorrindo",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/2ea4864a-bc1c-4b0f-c720-4f4db60d6600/public",alt:"Cachorro tirando uma selfie com outros 3 cachorros",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/0d4896d4-5675-4739-7cb3-30fc1c6dec00/public",alt:"Foto do cachorro olhando para a câmera",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/6a09554d-7f59-42f4-603b-bf2a3bf24600/public",alt:"Cachorro com a lingua para fora",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/6f6a0274-479c-4c48-e1ce-23fa90998500/public",alt:"Cachorro na borda da piscina",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/b784a222-c8bc-4a35-ac3a-a6056d717300/public",alt:"Cachorro em uma prancha de surf na onda",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/d826fa54-7c2b-47b9-9cb6-4e0540d8dd00/public",alt:"Cachorro com óculos escuros",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/00e287de-9719-47ee-0fb1-3ef507b3a800/public",alt:"Cachorro e um cachorro pequeno",loading:"lazy",label:"Le Ange Mar"}]},{images:[{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/b4ddd8c3-b6c1-4c00-d54b-06a44c074900/public",alt:"Foto de um cachorro com uma taça do lado",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a6b63bf4-92e1-43d5-9a86-ed900bdc4800/public",alt:"3 cachorros e um homem na piscina",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/1cd65a71-7f00-4f13-5a67-c4ff922d8f00/public",alt:"Cachorro marrom",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/366f42cc-6fe9-4fc0-5ef6-15ea8e420b00/public",alt:"Cachorro marrom na piscina",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/5b19b1f4-fd46-4dc9-5faa-96995d69b400/public",alt:"Cachorro branco olhando para a camera",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/252ec971-e6a4-4b55-3e1b-2069f4570800/public",alt:"Cachorro dormindo no sofá",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/9ca851c2-347a-4f8c-752e-b90080865800/public",alt:"Cachorro em cima do morro olhando para o lado",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/7a0ae482-3436-4db1-9ed3-c1c7b1b02b00/public",alt:"3 cachorros brincando na praia",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/d9be2586-3341-4990-f3c8-685edcad8900/public",alt:"Foto do cachorro olhando para a câmera",loading:"lazy",label:"Le Ange Mar"}],reverse:!0}],TA=()=>(j.useEffect(()=>{Ie.init({duration:1e3,once:!1}),Ie.refresh()},[]),c.jsxs(c.Fragment,{children:[c.jsx(In,{children:c.jsx("title",{children:"Le Ange Serra - Pousada Le Ange"})}),c.jsx(hA,{}),c.jsx(Nn,{}),c.jsxs(mA,{children:[c.jsxs(vA,{children:[c.jsxs("h4",{"data-aos":"fade-up","data-aos-delay":"100",children:["Conheça a ",c.jsx("b",{children:"Le Ange Mar"}),", a pousada mais"]}),c.jsxs("h1",{"data-aos":"fade-down","data-aos-delay":"200",children:["PET FRIENDLY",c.jsx("br",{})," DO ",c.jsx("b",{children:"BRASIL"})]}),c.jsx("p",{children:"Aqui, você e o seu pet são mais do que bem-vindos!"}),c.jsx("div",{children:c.jsx(wr,{text:"Reservar agora!",textColor:"var(--color--black)",backgroundColor:"transparent",borderColor:"var(--color--black)",iconColor:"var(--color--black)",hoverBackgroundColor:"var(--color--blue)",hoverBorderColor:"var(--color--blue)",hoverColor:"var(--color--white)",hoverIconColor:"var(--color--white)",onClick:()=>window.open("https://wa.link/dojlwi","_blank")})})]}),c.jsx(gA,{"data-aos":"fade-left","data-aos-delay":"200"})]}),c.jsx(bA,{"data-aos":"fade-in","data-aos-delay":"100",children:c.jsx("h1",{"data-aos":"fade-up","data-aos-delay":"300",children:"LeAnge Mar | Armação dos Búzios RJ"})}),c.jsx(yA,{"data-aos":"fade-up","data-aos-delay":"50",children:c.jsx(Vl,{slides:xA,titleColor:"var(--color--blue)",buttonBgColor:"var(--color--blue)",imagePosition:"left"})}),c.jsx(e2,{images:wA}),c.jsx(Nl,{colorDefinedBold:"var(--color--blue)","data-aos":"fade-up","data-aos-delay":"400"}),c.jsx($l,{carousels:kA,"data-aos":"fade-in","data-aos-delay":"400"}),c.jsx(CA,{children:c.jsx(dt,{text:"Fazer minha reserva!",onClick:()=>window.open("https://wa.link/dojlwi","_blank")})}),c.jsx(SA,{"data-aos":"fade-up","data-aos-delay":"400",children:c.jsx(vo,{events:jA})}),c.jsx(Fl,{}),c.jsx(yr,{})]}));function AA(e){return ee({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm8.25 5.25a.75.75 0 0 1 .75-.75h8.25a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75Z",clipRule:"evenodd"},child:[]}]})(e)}var t2={exports:{}};(function(e,t){(function(n,r){e.exports=r(j)})(typeof self<"u"?self:Km,function(n){return function(r){var i={};function a(o){if(i[o])return i[o].exports;var s=i[o]={i:o,l:!1,exports:{}};return r[o].call(s.exports,s,s.exports,a),s.l=!0,s.exports}return a.m=r,a.c=i,a.d=function(o,s,l){a.o(o,s)||Object.defineProperty(o,s,{enumerable:!0,get:l})},a.r=function(o){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})},a.t=function(o,s){if(1&s&&(o=a(o)),8&s||4&s&&typeof o=="object"&&o&&o.__esModule)return o;var l=Object.create(null);if(a.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:o}),2&s&&typeof o!="string")for(var d in o)a.d(l,d,(function(u){return o[u]}).bind(null,d));return l},a.n=function(o){var s=o&&o.__esModule?function(){return o.default}:function(){return o};return a.d(s,"a",s),s},a.o=function(o,s){return Object.prototype.hasOwnProperty.call(o,s)},a.p="",a(a.s=2)}([function(r,i){r.exports=n},function(r,i,a){var o={linear:function(s,l,d,u){return(d-l)*s/u+l},easeInQuad:function(s,l,d,u){return(d-l)*(s/=u)*s+l},easeOutQuad:function(s,l,d,u){return-(d-l)*(s/=u)*(s-2)+l},easeInOutQuad:function(s,l,d,u){var f=d-l;return(s/=u/2)<1?f/2*s*s+l:-f/2*(--s*(s-2)-1)+l},easeInCubic:function(s,l,d,u){return(d-l)*(s/=u)*s*s+l},easeOutCubic:function(s,l,d,u){return(d-l)*((s=s/u-1)*s*s+1)+l},easeInOutCubic:function(s,l,d,u){var f=d-l;return(s/=u/2)<1?f/2*s*s*s+l:f/2*((s-=2)*s*s+2)+l},easeInQuart:function(s,l,d,u){return(d-l)*(s/=u)*s*s*s+l},easeOutQuart:function(s,l,d,u){return-(d-l)*((s=s/u-1)*s*s*s-1)+l},easeInOutQuart:function(s,l,d,u){var f=d-l;return(s/=u/2)<1?f/2*s*s*s*s+l:-f/2*((s-=2)*s*s*s-2)+l},easeInQuint:function(s,l,d,u){return(d-l)*(s/=u)*s*s*s*s+l},easeOutQuint:function(s,l,d,u){return(d-l)*((s=s/u-1)*s*s*s*s+1)+l},easeInOutQuint:function(s,l,d,u){var f=d-l;return(s/=u/2)<1?f/2*s*s*s*s*s+l:f/2*((s-=2)*s*s*s*s+2)+l},easeInSine:function(s,l,d,u){var f=d-l;return-f*Math.cos(s/u*(Math.PI/2))+f+l},easeOutSine:function(s,l,d,u){return(d-l)*Math.sin(s/u*(Math.PI/2))+l},easeInOutSine:function(s,l,d,u){return-(d-l)/2*(Math.cos(Math.PI*s/u)-1)+l},easeInExpo:function(s,l,d,u){return s==0?l:(d-l)*Math.pow(2,10*(s/u-1))+l},easeOutExpo:function(s,l,d,u){var f=d-l;return s==u?l+f:f*(1-Math.pow(2,-10*s/u))+l},easeInOutExpo:function(s,l,d,u){var f=d-l;return s===0?l:s===u?l+f:(s/=u/2)<1?f/2*Math.pow(2,10*(s-1))+l:f/2*(2-Math.pow(2,-10*--s))+l},easeInCirc:function(s,l,d,u){return-(d-l)*(Math.sqrt(1-(s/=u)*s)-1)+l},easeOutCirc:function(s,l,d,u){return(d-l)*Math.sqrt(1-(s=s/u-1)*s)+l},easeInOutCirc:function(s,l,d,u){var f=d-l;return(s/=u/2)<1?-f/2*(Math.sqrt(1-s*s)-1)+l:f/2*(Math.sqrt(1-(s-=2)*s)+1)+l},easeInElastic:function(s,l,d,u){var f,p,g,x=d-l;return g=1.70158,s===0?l:(s/=u)==1?l+x:((p=0)||(p=.3*u),(f=x)<Math.abs(x)?(f=x,g=p/4):g=p/(2*Math.PI)*Math.asin(x/f),-f*Math.pow(2,10*(s-=1))*Math.sin((s*u-g)*(2*Math.PI)/p)+l)},easeOutElastic:function(s,l,d,u){var f,p,g,x=d-l;return g=1.70158,s===0?l:(s/=u)==1?l+x:((p=0)||(p=.3*u),(f=x)<Math.abs(x)?(f=x,g=p/4):g=p/(2*Math.PI)*Math.asin(x/f),f*Math.pow(2,-10*s)*Math.sin((s*u-g)*(2*Math.PI)/p)+x+l)},easeInOutElastic:function(s,l,d,u){var f,p,g,x=d-l;return g=1.70158,s===0?l:(s/=u/2)==2?l+x:((p=0)||(p=u*.44999999999999996),(f=x)<Math.abs(x)?(f=x,g=p/4):g=p/(2*Math.PI)*Math.asin(x/f),s<1?f*Math.pow(2,10*(s-=1))*Math.sin((s*u-g)*(2*Math.PI)/p)*-.5+l:f*Math.pow(2,-10*(s-=1))*Math.sin((s*u-g)*(2*Math.PI)/p)*.5+x+l)},easeInBack:function(s,l,d,u,f){return f===void 0&&(f=1.70158),(d-l)*(s/=u)*s*((f+1)*s-f)+l},easeOutBack:function(s,l,d,u,f){return f===void 0&&(f=1.70158),(d-l)*((s=s/u-1)*s*((f+1)*s+f)+1)+l},easeInOutBack:function(s,l,d,u,f){var p=d-l;return f===void 0&&(f=1.70158),(s/=u/2)<1?p/2*(s*s*((1+(f*=1.525))*s-f))+l:p/2*((s-=2)*s*((1+(f*=1.525))*s+f)+2)+l},easeInBounce:function(s,l,d,u){var f=d-l;return f-o.easeOutBounce(u-s,0,f,u)+l},easeOutBounce:function(s,l,d,u){var f=d-l;return(s/=u)<.36363636363636365?f*(7.5625*s*s)+l:s<.7272727272727273?f*(7.5625*(s-=.5454545454545454)*s+.75)+l:s<.9090909090909091?f*(7.5625*(s-=.8181818181818182)*s+.9375)+l:f*(7.5625*(s-=.9545454545454546)*s+.984375)+l},easeInOutBounce:function(s,l,d,u){var f=d-l;return s<u/2?.5*o.easeInBounce(2*s,0,f,u)+l:.5*o.easeOutBounce(2*s-u,0,f,u)+.5*f+l}};r.exports=o},function(r,i,a){r.exports=a(3)},function(r,i,a){a.r(i),a.d(i,"ReactConfetti",function(){return ce});var o,s,l=a(0),d=a.n(l),u=a(1),f=a.n(u);function p(G,L){return G+Math.random()*(L-G)}function g(G,L){for(var D=0;D<L.length;D++){var O=L[D];O.enumerable=O.enumerable||!1,O.configurable=!0,"value"in O&&(O.writable=!0),Object.defineProperty(G,O.key,O)}}function x(G,L,D){return L in G?Object.defineProperty(G,L,{value:D,enumerable:!0,configurable:!0,writable:!0}):G[L]=D,G}(function(G){G[G.Circle=0]="Circle",G[G.Square=1]="Square",G[G.Strip=2]="Strip"})(o||(o={})),function(G){G[G.Positive=1]="Positive",G[G.Negative=-1]="Negative"}(s||(s={}));var y=function(){function G(O,q,F,B){(function(Bl,Hl){if(!(Bl instanceof Hl))throw new TypeError("Cannot call a class as a function")})(this,G),x(this,"context",void 0),x(this,"radius",void 0),x(this,"x",void 0),x(this,"y",void 0),x(this,"w",void 0),x(this,"h",void 0),x(this,"vx",void 0),x(this,"vy",void 0),x(this,"shape",void 0),x(this,"angle",void 0),x(this,"angularSpin",void 0),x(this,"color",void 0),x(this,"rotateY",void 0),x(this,"rotationDirection",void 0),x(this,"getOptions",void 0),this.getOptions=q;var te,le,pe=this.getOptions(),gn=pe.colors,Nt=pe.initialVelocityX,Ft=pe.initialVelocityY;this.context=O,this.x=F,this.y=B,this.w=p(5,20),this.h=p(5,20),this.radius=p(5,10),this.vx=typeof Nt=="number"?p(-Nt,Nt):p(Nt.min,Nt.max),this.vy=typeof Ft=="number"?p(-Ft,0):p(Ft.min,Ft.max),this.shape=(te=0,le=2,Math.floor(te+Math.random()*(le-te+1))),this.angle=p(0,360)*Math.PI/180,this.angularSpin=p(-.2,.2),this.color=gn[Math.floor(Math.random()*gn.length)],this.rotateY=p(0,1),this.rotationDirection=p(0,1)?s.Positive:s.Negative}var L,D;return L=G,(D=[{key:"update",value:function(){var O=this.getOptions(),q=O.gravity,F=O.wind,B=O.friction,te=O.opacity,le=O.drawShape;this.x+=this.vx,this.y+=this.vy,this.vy+=q,this.vx+=F,this.vx*=B,this.vy*=B,this.rotateY>=1&&this.rotationDirection===s.Positive?this.rotationDirection=s.Negative:this.rotateY<=-1&&this.rotationDirection===s.Negative&&(this.rotationDirection=s.Positive);var pe=.1*this.rotationDirection;if(this.rotateY+=pe,this.angle+=this.angularSpin,this.context.save(),this.context.translate(this.x,this.y),this.context.rotate(this.angle),this.context.scale(1,this.rotateY),this.context.rotate(this.angle),this.context.beginPath(),this.context.fillStyle=this.color,this.context.strokeStyle=this.color,this.context.globalAlpha=te,this.context.lineCap="round",this.context.lineWidth=2,le&&typeof le=="function")le.call(this,this.context);else switch(this.shape){case o.Circle:this.context.beginPath(),this.context.arc(0,0,this.radius,0,2*Math.PI),this.context.fill();break;case o.Square:this.context.fillRect(-this.w/2,-this.h/2,this.w,this.h);break;case o.Strip:this.context.fillRect(-this.w/6,-this.h/2,this.w/3,this.h)}this.context.closePath(),this.context.restore()}}])&&g(L.prototype,D),G}();function b(G,L,D){return L in G?Object.defineProperty(G,L,{value:D,enumerable:!0,configurable:!0,writable:!0}):G[L]=D,G}var v=function G(L,D){var O=this;(function(F,B){if(!(F instanceof B))throw new TypeError("Cannot call a class as a function")})(this,G),b(this,"canvas",void 0),b(this,"context",void 0),b(this,"getOptions",void 0),b(this,"x",0),b(this,"y",0),b(this,"w",0),b(this,"h",0),b(this,"lastNumberOfPieces",0),b(this,"tweenInitTime",Date.now()),b(this,"particles",[]),b(this,"particlesGenerated",0),b(this,"removeParticleAt",function(F){O.particles.splice(F,1)}),b(this,"getParticle",function(){var F=p(O.x,O.w+O.x),B=p(O.y,O.h+O.y);return new y(O.context,O.getOptions,F,B)}),b(this,"animate",function(){var F=O.canvas,B=O.context,te=O.particlesGenerated,le=O.lastNumberOfPieces,pe=O.getOptions(),gn=pe.run,Nt=pe.recycle,Ft=pe.numberOfPieces,Bl=pe.debug,Hl=pe.tweenFunction,Ul=pe.tweenDuration;if(!gn)return!1;var Wl=O.particles.length,Qi=Nt?Wl:te,ql=Date.now();if(Qi<Ft){le!==Ft&&(O.tweenInitTime=ql,O.lastNumberOfPieces=Ft);for(var vp=O.tweenInitTime,n2=Hl(ql-vp>Ul?Ul:Math.max(0,ql-vp),Qi,Ft,Ul),xp=Math.round(n2-Qi),yp=0;yp<xp;yp++)O.particles.push(O.getParticle());O.particlesGenerated+=xp}return Bl&&(B.font="12px sans-serif",B.fillStyle="#333",B.textAlign="right",B.fillText("Particles: ".concat(Wl),F.width-10,F.height-20)),O.particles.forEach(function(Zi,wp){Zi.update(),(Zi.y>F.height||Zi.y<-100||Zi.x>F.width+100||Zi.x<-100)&&(Nt&&Qi<=Ft?O.particles[wp]=O.getParticle():O.removeParticleAt(wp))}),Wl>0||Qi<Ft}),this.canvas=L;var q=this.canvas.getContext("2d");if(!q)throw new Error("Could not get canvas context");this.context=q,this.getOptions=D};function h(G,L){var D=Object.keys(G);if(Object.getOwnPropertySymbols){var O=Object.getOwnPropertySymbols(G);L&&(O=O.filter(function(q){return Object.getOwnPropertyDescriptor(G,q).enumerable})),D.push.apply(D,O)}return D}function m(G){for(var L=1;L<arguments.length;L++){var D=arguments[L]!=null?arguments[L]:{};L%2?h(Object(D),!0).forEach(function(O){S(G,O,D[O])}):Object.getOwnPropertyDescriptors?Object.defineProperties(G,Object.getOwnPropertyDescriptors(D)):h(Object(D)).forEach(function(O){Object.defineProperty(G,O,Object.getOwnPropertyDescriptor(D,O))})}return G}function w(G,L){for(var D=0;D<L.length;D++){var O=L[D];O.enumerable=O.enumerable||!1,O.configurable=!0,"value"in O&&(O.writable=!0),Object.defineProperty(G,O.key,O)}}function S(G,L,D){return L in G?Object.defineProperty(G,L,{value:D,enumerable:!0,configurable:!0,writable:!0}):G[L]=D,G}var C={width:typeof window<"u"?window.innerWidth:300,height:typeof window<"u"?window.innerHeight:200,numberOfPieces:200,friction:.99,wind:0,gravity:.1,initialVelocityX:4,initialVelocityY:10,colors:["#f44336","#e91e63","#9c27b0","#673ab7","#3f51b5","#2196f3","#03a9f4","#00bcd4","#009688","#4CAF50","#8BC34A","#CDDC39","#FFEB3B","#FFC107","#FF9800","#FF5722","#795548"],opacity:1,debug:!1,tweenFunction:f.a.easeInOutQuad,tweenDuration:5e3,recycle:!0,run:!0},A=function(){function G(O,q){var F=this;(function(te,le){if(!(te instanceof le))throw new TypeError("Cannot call a class as a function")})(this,G),S(this,"canvas",void 0),S(this,"context",void 0),S(this,"_options",void 0),S(this,"generator",void 0),S(this,"rafId",void 0),S(this,"setOptionsWithDefaults",function(te){var le={confettiSource:{x:0,y:0,w:F.canvas.width,h:0}};F._options=m(m(m({},le),C),te),Object.assign(F,te.confettiSource)}),S(this,"update",function(){var te=F.options,le=te.run,pe=te.onConfettiComplete,gn=F.canvas,Nt=F.context;le&&(Nt.fillStyle="white",Nt.clearRect(0,0,gn.width,gn.height)),F.generator.animate()?F.rafId=requestAnimationFrame(F.update):(pe&&typeof pe=="function"&&F.generator.particlesGenerated>0&&pe.call(F,F),F._options.run=!1)}),S(this,"reset",function(){F.generator&&F.generator.particlesGenerated>0&&(F.generator.particlesGenerated=0,F.generator.particles=[],F.generator.lastNumberOfPieces=0)}),S(this,"stop",function(){F.options={run:!1},F.rafId&&(cancelAnimationFrame(F.rafId),F.rafId=void 0)}),this.canvas=O;var B=this.canvas.getContext("2d");if(!B)throw new Error("Could not get canvas context");this.context=B,this.generator=new v(this.canvas,function(){return F.options}),this.options=q,this.update()}var L,D;return L=G,(D=[{key:"options",get:function(){return this._options},set:function(O){var q=this._options&&this._options.run,F=this._options&&this._options.recycle;this.setOptionsWithDefaults(O),this.generator&&(Object.assign(this.generator,this.options.confettiSource),typeof O.recycle=="boolean"&&O.recycle&&F===!1&&(this.generator.lastNumberOfPieces=this.generator.particles.length)),typeof O.run=="boolean"&&O.run&&q===!1&&this.update()}}])&&w(L.prototype,D),G}();function T(G){return function(L){if(Array.isArray(L))return U(L)}(G)||function(L){if(typeof Symbol<"u"&&Symbol.iterator in Object(L))return Array.from(L)}(G)||R(G)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function z(G){return(z=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(L){return typeof L}:function(L){return L&&typeof Symbol=="function"&&L.constructor===Symbol&&L!==Symbol.prototype?"symbol":typeof L})(G)}function E(){return(E=Object.assign||function(G){for(var L=1;L<arguments.length;L++){var D=arguments[L];for(var O in D)Object.prototype.hasOwnProperty.call(D,O)&&(G[O]=D[O])}return G}).apply(this,arguments)}function P(G,L){var D=Object.keys(G);if(Object.getOwnPropertySymbols){var O=Object.getOwnPropertySymbols(G);L&&(O=O.filter(function(q){return Object.getOwnPropertyDescriptor(G,q).enumerable})),D.push.apply(D,O)}return D}function _(G){for(var L=1;L<arguments.length;L++){var D=arguments[L]!=null?arguments[L]:{};L%2?P(Object(D),!0).forEach(function(O){we(G,O,D[O])}):Object.getOwnPropertyDescriptors?Object.defineProperties(G,Object.getOwnPropertyDescriptors(D)):P(Object(D)).forEach(function(O){Object.defineProperty(G,O,Object.getOwnPropertyDescriptor(D,O))})}return G}function I(G,L){return function(D){if(Array.isArray(D))return D}(G)||function(D,O){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(D)))){var q=[],F=!0,B=!1,te=void 0;try{for(var le,pe=D[Symbol.iterator]();!(F=(le=pe.next()).done)&&(q.push(le.value),!O||q.length!==O);F=!0);}catch(gn){B=!0,te=gn}finally{try{F||pe.return==null||pe.return()}finally{if(B)throw te}}return q}}(G,L)||R(G,L)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function R(G,L){if(G){if(typeof G=="string")return U(G,L);var D=Object.prototype.toString.call(G).slice(8,-1);return D==="Object"&&G.constructor&&(D=G.constructor.name),D==="Map"||D==="Set"?Array.from(G):D==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(D)?U(G,L):void 0}}function U(G,L){(L==null||L>G.length)&&(L=G.length);for(var D=0,O=new Array(L);D<L;D++)O[D]=G[D];return O}function Q(G,L){if(!(G instanceof L))throw new TypeError("Cannot call a class as a function")}function Y(G,L){for(var D=0;D<L.length;D++){var O=L[D];O.enumerable=O.enumerable||!1,O.configurable=!0,"value"in O&&(O.writable=!0),Object.defineProperty(G,O.key,O)}}function M(G,L){return(M=Object.setPrototypeOf||function(D,O){return D.__proto__=O,D})(G,L)}function V(G){var L=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}();return function(){var D,O=Z(G);if(L){var q=Z(this).constructor;D=Reflect.construct(O,arguments,q)}else D=O.apply(this,arguments);return $(this,D)}}function $(G,L){return!L||z(L)!=="object"&&typeof L!="function"?K(G):L}function K(G){if(G===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return G}function Z(G){return(Z=Object.setPrototypeOf?Object.getPrototypeOf:function(L){return L.__proto__||Object.getPrototypeOf(L)})(G)}function we(G,L,D){return L in G?Object.defineProperty(G,L,{value:D,enumerable:!0,configurable:!0,writable:!0}):G[L]=D,G}var he=d.a.createRef(),ke=function(G){(function(F,B){if(typeof B!="function"&&B!==null)throw new TypeError("Super expression must either be null or a function");F.prototype=Object.create(B&&B.prototype,{constructor:{value:F,writable:!0,configurable:!0}}),B&&M(F,B)})(q,G);var L,D,O=V(q);function q(F){var B;Q(this,q);for(var te=arguments.length,le=new Array(te>1?te-1:0),pe=1;pe<te;pe++)le[pe-1]=arguments[pe];return we(K(B=O.call.apply(O,[this,F].concat(le))),"canvas",d.a.createRef()),we(K(B),"confetti",void 0),B.canvas=F.canvasRef||he,B}return L=q,(D=[{key:"componentDidMount",value:function(){if(this.canvas.current){var F=fe(this.props)[0];this.confetti=new A(this.canvas.current,F)}}},{key:"componentDidUpdate",value:function(){var F=fe(this.props)[0];this.confetti&&(this.confetti.options=F)}},{key:"componentWillUnmount",value:function(){this.confetti&&this.confetti.stop(),this.confetti=void 0}},{key:"render",value:function(){var F=I(fe(this.props),2),B=F[0],te=F[1],le=_({zIndex:2,position:"absolute",pointerEvents:"none",top:0,left:0,bottom:0,right:0},te.style);return d.a.createElement("canvas",E({width:B.width,height:B.height,ref:this.canvas},te,{style:le}))}}])&&Y(L.prototype,D),q}(l.Component);function fe(G){var L={},D={},O=[].concat(T(Object.keys(C)),["confettiSource","drawShape","onConfettiComplete"]),q=["canvasRef"];for(var F in G){var B=G[F];O.includes(F)?L[F]=B:q.includes(F)?q[F]=B:D[F]=B}return[L,D,{}]}we(ke,"defaultProps",_({},C)),we(ke,"displayName","ReactConfetti");var ce=d.a.forwardRef(function(G,L){return d.a.createElement(ke,E({canvasRef:L},G))});i.default=ce}]).default})})(t2);var EA=t2.exports;const PA=Hr(EA);Dn`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;const qm=k.select`
  padding: 10px;
  border: 1px solid transparent;
  border-radius: 10px 10px 0 10px;
  background: linear-gradient(135deg, var(--color--light-gray), var(--color--white));
  color: var(--color--black);
  appearance: none;
  cursor: pointer;
  font-family: var(--font--comfortaa);
  font-size: 0.8rem;
  transition: all .2s ease, border .2s ease;

  &:hover {
    background-color: transparent;
    color: var(--color--black);
    border: 1px solid rgba(0, 0, 0, 0.4);
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 768px) {
    text-align: center;
    font-size: 0.8rem;
    margin-top: -6px;
  }

  option {
    padding: 8px;
    margin: 4px 0;
    background: linear-gradient(135deg, var(--color--blue), var(--color--green));
    color: var(--color--black);
  }

  option:hover {
    background-color: var(--color--green);
    color: var(--color--hover-text);
    font-style: italic;
  }

  option:nth-child(even) {
    background: transparent!important;
    border: none;
  }

  option:nth-child(odd) {
    background-color: var(--color--white);
  }

  option:checked {
    background-color: var(--color--black);
    color: var(--color--white);
    font-weight: bold;
  }

  option:nth-child(1) {
    @media (max-width: 768px) {
      font-size: 0.6rem !important;
      padding: 10px !important;
      color: transparent !important;
      background-color: transparent !important;
    }
  }

  option:nth-child(2) {
    color: var(--color--green);
    font-weight: 800;

    @media (max-width: 768px) {
      font-size: 0.6rem !important;
      padding: 10px !important;
      text-align: left;
    }
  }

  option:nth-child(3) {
    color: var(--color--blue);
    font-weight: 800;

    @media (max-width: 768px) {
      font-size: 0.6rem !important;
      padding: 10px !important;
      text-align: left;
    }
  }
`,GA=k.div`
  display: ${({isLoading:e})=>e?"flex":"none"};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: white;
  align-items: center;
  justify-content: center;
  z-index: 9999; /* Garantir que fique acima de outros elementos */

  & img {
    width: 350px; /* Ajuste o tamanho do GIF aqui */
    height: auto;
  }
`,zA=k.div`
    display: none;

    @media (min-width: 1080px) {
        display: flex;
        background-color: ${({isScrolled:e})=>e?"rgba(251, 251, 251, 0.5)":"#fbfbfb"};
        backdrop-filter: ${({isScrolled:e})=>e?"blur(10px)":"none"}; 
        position: fixed;
        align-items: center;
        justify-content: space-between;
        width: 85%;
        max-width: 1440px;
        left: 50%;
        transform: translateX(-50%);
        margin-top: 10px;
        padding: 0 2.5%;
        height: 10vh;
        box-shadow: 0 0 5px #4d4d4d50;
        border-radius: 16px 8px 16px 8px;
        z-index: 999;
        transition: background-color 0.3s ease, backdrop-filter 0.3s ease;
    }
`,_A=k.header`
    display: flex;
    gap: 5px;
`,yn=k(({isActive:e,...t})=>c.jsx(yv,{...t}))`
    position: relative;
    color: var(--color--black);
    text-decoration: none;
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--font--comfortaa);
    font-weight: 400;
    padding: 5px 15px;
    transition: all 0.3s ease;
    border-radius: 10px 10px 0 10px;
    background-color: ${({isActive:e,variant:t})=>e?t==="serra"?"var(--color--green)":t==="mar"?"var(--color--blue)":"var(--color--black)":"transparent"};
    color: ${({isActive:e})=>e?"var(--color--white)":"var(--color--black)"};

    &::before {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        right: 100%;
        left: 0;
        background: rgb(20, 20, 20);
        opacity: 0;
        z-index: -1;
        transition: all 0.5s;
        border-radius: 10px 10px 0 10px;
    }

    &:hover {
        color: var(--color--white);
        background-color: ${({variant:e})=>e==="serra"?"var(--color--green)":e==="mar"?"var(--color--blue)":"var(--color--black)"};
    }

    &:hover::before {
        left: 0;
        right: 0;
        opacity: 1;
    }
`,nn=k.span`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 0;
    height: 0;
    opacity: 0;
    transform: scale(0);
    transition: opacity 0.3s ease, transform 0.3s ease, width 0.3s ease, height 0.3s ease;
    overflow: hidden;

    ${({isVisible:e})=>e&&` 
        width: 13px;
        height: 13px;
        opacity: 1;
        transform: scale(1);
        margin-right: 7.5px;
    `}
`,MA=k.div`
    opacity: ${({isVisible:e})=>e?1:0};
    transition: opacity 1s ease-out;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
`,Ym=k(yn)`
    background: ${({isActive:e})=>e?"linear-gradient(45deg, #ff6b6b, #f06595, #eeafaf)":"transparent"};
    color: ${({isActive:e})=>e?"white":"var(--color--black)"};

    &:hover {
        background: linear-gradient(45deg, #f06595, #ff6b6b, #eeafaf);
        color: white;
    }
`,LA=k.div`
    display: none;

    @media (max-width: 768px) {
        display: flex;
        background-color: ${({isScrolled:e})=>e?"rgba(251, 251, 251, 0.4)":"#fbfbfb"};
        backdrop-filter: ${({isScrolled:e})=>e?"blur(10px)":"none"}; 
        position: fixed;
        z-index: 999;
        align-items: center;
        justify-content: space-between;
        width: 85%;
        margin-left: 7.5%;
        margin-top: 10px;
        padding: 0 5%;
        height: 8vh;
        box-shadow: 0 0 5px #4d4d4d80;
        border-radius: 10px 0 10px 0;

        & > img {
            width: 25%;
            height: 100%;
            object-fit: contain;
        }

        & > button {
            display: flex;
            width: 30%;
            border-radius: 5px 0 5px 0;
            font-family: var(--font--comfortaa);
            border: none;
            font-size: 12px;
            padding: 7.5px;
            gap: 2.5px;
            background-color: transparent;
            color: var(--color--black);
            align-items: center;
            justify-content: space-evenly;
            transition: all 0.2s ease;
            border: 1px solid var(--color--black);
            background-color: ${({isClicked:e})=>e?"var(--color--black)":"transparent"};
            color: ${({isClicked:e})=>e?"var(--color--white)":"var(--color--black)"};

            &:hover {
                background-color: var(--color--black);
                color: var(--color--white);
                border: 1px solid var(--color--black);
                transform: scale(0.95);
            }
        }
    }
`,OA=k.div`
    display: flex;
    position: fixed;
    z-index: 999;
    background-color: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(10px);
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border-radius: 0 20px 20px 0;
    padding: 20px;
    width: 250px;
    height: 95dvh;
    margin-top: 2.5vh;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

    transform: translateX(-100%);
    transition: transform 0.3s ease;

    ${({isOpen:e})=>e&&` 
        transform: translateX(0);
    `}

    & > button:nth-child(1) {
        position: absolute;
        right: 10px;
        top: 10px;
        font-size: 12px;
        border: none;
        width: 25px;
        height: 25px;
        border-radius: 50%;
        background-color: var(--color--black);
        color: var(--color--white);
        font-family: var(--font--comfortaa);
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all .2s ease-in-out;

        &:hover{
            transform: rotate(180deg) scale(0.95);
            border: 2px solid var(--color--black);
            background-color: red;
        }
    }

    & > img {
        width: 65%;
        margin-top: 50px;
    }

    & > div {
        display: flex;
        flex-direction: column;
        gap: 5px;
    }
`,IA=()=>{const e=mn(),[t,n]=j.useState(!1),[r,i]=j.useState(!1),[a,o]=j.useState(!1),[s,l]=j.useState(!1),[d,u]=j.useState(!1),[f,p]=j.useState(!1);let g;const x=()=>{l(S=>!S),u(S=>!S)},y=()=>{l(!1),u(!1)},b=()=>{o(!0),clearTimeout(g),g=setTimeout(()=>{o(!1)},3e3)},v=jl(),[h,m]=j.useState(""),w=S=>{const C=S.target.value;C&&(m(C),v(C))};return j.useEffect(()=>(window.addEventListener("scroll",b),()=>{window.removeEventListener("scroll",b),clearTimeout(g)}),[]),j.useEffect(()=>{if(e.pathname!=="/"){p(!0);const S=setTimeout(()=>{p(!1)},1e3);return()=>clearTimeout(S)}else p(!1)},[e.pathname]),j.useEffect(()=>{if(e.pathname==="/event"){n(!0),i(!0);const S=setTimeout(()=>{i(!1),setTimeout(()=>n(!1),1e3)},8e3);return()=>clearTimeout(S)}else i(!1),setTimeout(()=>n(!1),1e3)},[e.pathname]),j.useEffect(()=>{s&&y()},[e.pathname]),c.jsxs(c.Fragment,{children:[c.jsx(GA,{isLoading:f,children:c.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/59746ba9-5d6e-4873-dad6-26930b03a900/public",alt:"Loading..."})}),c.jsxs(zA,{isScrolled:a,children:[t&&c.jsx(MA,{isVisible:r,children:c.jsx(PA,{})}),c.jsx(yv,{to:"/","aria-label":"Home",children:c.jsxs("picture",{children:[c.jsx("source",{media:"(max-width: 480px)",srcSet:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/d3fbafba-3dfe-4924-e857-b45059def500/public"}),c.jsx("source",{media:"(max-width: 768px)",srcSet:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/d3fbafba-3dfe-4924-e857-b45059def500/public"}),c.jsx("source",{media:"(min-width: 769px)",srcSet:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/d3fbafba-3dfe-4924-e857-b45059def500/public"}),c.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/d3fbafba-3dfe-4924-e857-b45059def500/public",alt:"Logo da Empresa",style:{maxHeight:"40px"}})]})}),c.jsxs(_A,{children:[c.jsxs(yn,{to:"/",isActive:e.pathname==="/",children:[c.jsx(nn,{isVisible:e.pathname==="/",children:c.jsx(dm,{})}),"Início"]}),c.jsxs(yn,{to:"/sobre",isActive:e.pathname==="/sobre",children:[c.jsx(nn,{isVisible:e.pathname==="/sobre",children:c.jsx(um,{})}),"Sobre nós"]}),c.jsxs(yn,{to:"/mar",variant:"mar",isActive:e.pathname==="/mar",children:[c.jsx(nn,{isVisible:e.pathname==="/mar",children:c.jsx(sm,{})}),"Le Ange Mar"]}),c.jsxs(yn,{to:"/serra",variant:"serra",isActive:e.pathname==="/serra",children:[c.jsx(nn,{isVisible:e.pathname==="/serra",children:c.jsx(fk,{})}),"Le Ange Serra"]}),c.jsxs(Ym,{to:"/event",isActive:e.pathname==="/event",children:[c.jsx(nn,{isVisible:e.pathname==="/event",children:c.jsx(lm,{})}),"Eventos"]}),c.jsxs(qm,{onChange:w,value:h,children:[c.jsx("option",{disabled:!0,value:"",children:"Acomodações"}),c.jsx("option",{value:"/acomodaSerra",children:"Suítes Serra"}),c.jsx("option",{value:"/acomodaMar",children:"Suítes Mar"})]})]}),c.jsx(dt,{onClick:()=>window.open("https://wa.link/dojlwi","_blank"),text:"Fazer minha reserva"})]}),c.jsxs(LA,{isScrolled:a,children:[c.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/d3fbafba-3dfe-4924-e857-b45059def500/public",alt:"logo da le ange"}),c.jsxs("button",{onClick:x,isClicked:d,children:["Menu",c.jsx(AA,{})]})]}),c.jsxs(OA,{isOpen:s,children:[c.jsx("button",{onClick:y,children:"X"}),c.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/d3fbafba-3dfe-4924-e857-b45059def500/public",alt:"logo da le ange"}),c.jsxs("div",{children:[c.jsxs(yn,{to:"/",isActive:e.pathname==="/",onClick:y,children:[c.jsx(nn,{isVisible:e.pathname==="/",children:c.jsx(dm,{})}),"Início"]}),c.jsxs(yn,{to:"/sobre",isActive:e.pathname==="/sobre",onClick:y,children:[c.jsx(nn,{isVisible:e.pathname==="/sobre",children:c.jsx(um,{})}),"Sobre nós"]}),c.jsxs(yn,{to:"/mar",variant:"mar",isActive:e.pathname==="/mar",onClick:y,children:[c.jsx(nn,{isVisible:e.pathname==="/mar",children:c.jsx(sm,{})}),"Le Ange Mar"]}),c.jsxs(yn,{to:"/serra",variant:"serra",isActive:e.pathname==="/serra",onClick:y,children:[c.jsx(nn,{isVisible:e.pathname==="/serra",children:c.jsx(H6,{})}),"Le Ange Serra"]}),c.jsxs(Ym,{to:"/event",isActive:e.pathname==="/event",onClick:y,children:[c.jsx(nn,{isVisible:e.pathname==="/event",children:c.jsx(lm,{})}),"Eventos"]}),c.jsxs(qm,{onChange:w,value:h,children:[c.jsx("option",{disabled:!0,value:"",children:"Acomodações"}),c.jsx("option",{value:"/acomodaSerra",children:"Suítes Serra"}),c.jsx("option",{value:"/acomodaMar",children:"Suítes Mar"})]})]}),c.jsx(dt,{text:"Fazer minha reserva",onClick:()=>window.open("https://wa.link/dojlwi","_blank")})]})]})},RA=Ki`
  .swiper-button-next, .swiper-button-prev {
      color: white; 
      border-radius: 50%;
      width: 45px;
      height: 45px;
      background-color: rgba(0, 0, 0, 0.6);
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.5)!important;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all .2s ease;

      &:hover {
          background-color: rgba(255, 255, 255, .7);
          color: black;
          transform: scale(1.05);
      }

      &::after {
          font-size: 25px; /* Ajuste aqui o tamanho do ícone */
      }
  }

  .swiper-pagination-bullet {
      background: black;
      opacity: 0.7;
      &.swiper-pagination-bullet-active {
          background: #A5C933;
      }
  }
`,DA=k.section`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80vh;
    padding: 0 5%;
    gap: 15px;
    flex-direction: ${({reverse:e})=>e?"row-reverse":"row"};

    @media (max-width: 768px){
        flex-direction: column;
        height: auto;
        padding: 5% 2.5%;
    }
`,VA=k.div`
    width: 50%;
    height: 95%;
    border-radius: 15px 10px 25px 5px;

    @media (max-width: 768px){
        width: 100%;
        height: 50vh;
    }
`,NA=k.div`
    width: 50%;
    height: 95%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
    padding: 25px;
    background-color: ${({background:e})=>e||"rgba(0, 0, 0, 0.1)"};
    border-radius: 0px 30px 0px 10px;

    @media (max-width: 768px){
        width: 100%;
        height: 55vh;
        padding: 15px;
        gap: 50px;
    }

    & > div{
        height: 80%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;

        & > section{
            width: 100%;
            display: flex;

            & > div{
                width: 100%;
                display: flex;
                justify-content: space-between;

                & > p{
                    font-size: 1.5rem;
                    font-weight: 300;
                    font-family: var(--font--comfortaa);
                    color: var(--color--black);

                    @media (max-width: 768px){
                        font-size: 1.2rem;
                    }
                }
            }
        }
    }
`,FA=k.h2`
    font-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color--black);
    font-family: var(--font--comfortaa);
    font-weight: 400;
    padding: 3px 12px;
    border-radius: 0 10px 0 10px;
    background-color: transparent;
    cursor: default;


    @media (max-width: 768px){
        font-size: .7rem;
        padding: 5px 15px;
        display: inline;
        white-space: nowrap;
    }
`,$A=k.p`
    font-size: .9rem;
    line-height: 120%;
    color: var(--color--black); 
    font-family: var(--font--comfortaa)!important;
    
    @media (max-width: 768px){
        font-size: 0.75rem;
    }
`,BA=k.div`
    display: flex;
    gap: 8px;
    flex-wrap: wrap;

    span {
        display: flex;
        align-items: center;
        gap: 5px;
        background: var(--color--white);
        backdrop-filter: blur(10px);
        justify-content: center;
        gap: 10px;
        padding: 5px 10px;
        border-radius: 12px 0 12px 0;
        font-size: 10px;
        transition: all .2s ease;
        font-family: var(--font--comfortaa);

        @media (max-width: 768px){
            font-size: 10px;
            font-weight: 300;
            padding: 5px 10px;
        }
        
        &:hover {
            color: var(--color--white);
            background-color: var(--color--black);
            cursor: default;
        }
    }

    svg {
        font-size: 14px;

        @media (max-width: 768px){
            font-size: 12px;
        }
    }
`,HA=k.img`
    width: 100%;
    height: 75.8vh;
    object-fit: cover;
    border-radius: 15px 10px 25px 5px;

    @media (max-width: 768px){
        height: 50vh;
    }
`,He=J.forwardRef(({images:e=[],suites:t=[],reverse:n=!1,background:r="rgba(0, 0, 0, 0.1)"},i)=>(j.useEffect(()=>{Ie.init({duration:1e3,once:!1}),Ie.refresh()},[]),c.jsxs(DA,{reverse:n,ref:i,children:[c.jsxs(VA,{"data-aos":"zoom-in","data-aos-delay":"50",children:[c.jsx(RA,{}),c.jsx(Jt,{modules:[Vn,xr,vr],autoplay:{delay:2e5,disableOnInteraction:!1,pauseOnMouseEnter:!0},navigation:!0,pagination:!0,loop:!0,spaceBetween:10,slidesPerView:1,children:e.map((a,o)=>c.jsx(en,{children:c.jsx(HA,{src:a,alt:`Slide ${o+1}`})},o))})]}),c.jsx(NA,{background:r,"data-aos":"fade-up","data-aos-delay":"100",children:t.map((a,o)=>{var s;return c.jsxs("div",{children:[c.jsx("section",{children:c.jsxs("div",{children:[c.jsx("p",{"data-aos":"fade-up","data-aos-delay":"150",children:a.NomedaSuite}),c.jsx(FA,{"data-aos":"fade-up","data-aos-delay":"200",children:a.NomedaPousada})]})}),c.jsx(BA,{"data-aos":"fade-up","data-aos-delay":"250",children:(s=a.features)==null?void 0:s.map((l,d)=>c.jsxs("span",{children:[l.icon," ",l.text]},d))}),c.jsx($A,{"data-aos":"fade-in","data-aos-delay":"400",children:a.Description}),c.jsx(dt,{onClick:()=>window.open("https://wa.link/dojlwi","_blank"),text:"Fazer reserva agora!"})]},o)})})]}))),UA=k.div`
    width: 100%;
    height: 20vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    line-height: 100%;
    padding: 22vh 0 10vh 0;
    font-size: 1.7rem;
    font-family: var(--font--comfortaa);
    gap: 5px;
    font-weight: 200;

    @media (max-width: 768px){
        height: 15vh;
        padding: 20vh 0 6vh 0 ;
    }

    & > b{
        color: var(--color--green);
        font-weight: 400;
    }

`,WA=["https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/7d1df8a5-0905-4ac0-5a2d-621e8a48dd00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/27861ce8-6beb-438a-6ff4-3cee719fe500/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/c22957a6-e82d-46ab-01f2-336a3d84ec00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/26d9fcee-7e13-4b45-4d95-6248723ddc00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/7336810d-d00e-4445-529b-f16b72cc7700/public"],qA=[{NomedaSuite:"Suíte Superior 1",NomedaPousada:"Le Ange Serra",features:[{icon:c.jsx(Ce,{}),text:"52m²"},{icon:c.jsx(ae,{}),text:"Ar-condicionado"},{icon:c.jsx(Xe,{}),text:"Frigobar"},{icon:c.jsx(ct,{}),text:"Lareira"},{icon:c.jsx(_e,{}),text:"Smart TV"},{icon:c.jsx(Re,{}),text:"Cama king-size"},{icon:c.jsx(Ee,{}),text:"Banheira relaxante"},{icon:c.jsx(ae,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(Ke,{}),text:"Varanda privativa"}],Description:"Uma suíte de 52m² que une conforto e sofisticação. Equipada com cama king-size, ar-condicionado e lareira, também dispõe de uma varanda privativa com vista para a natureza, banheira relaxante e aquecedor de toalhas."}],YA=["https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/fab53301-9865-467b-5746-7d359f21fe00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a27173c0-d56c-4c22-ea55-7f23cba7a800/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/beb843cb-3ae0-4ea0-348c-5af6f79b9600/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/c22c1ab9-1c7a-47e4-3642-0024f2b24700/public"],KA=[{NomedaSuite:"Suíte Superior 2",NomedaPousada:"Le Ange Serra",features:[{icon:c.jsx(Ce,{}),text:"52m²"},{icon:c.jsx(Re,{}),text:"Cama king-size"},{icon:c.jsx(ae,{}),text:"Ar-condicionado"},{icon:c.jsx(ct,{}),text:"Lareira"},{icon:c.jsx(Xe,{}),text:"Frigobar"},{icon:c.jsx(_e,{}),text:"Smart TV"},{icon:c.jsx(Ee,{}),text:"Banheira relaxante"},{icon:c.jsx(ae,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(Ke,{}),text:"Varanda privativa"}],Description:"Com 52m², esta suíte oferece uma experiência completa: cama king-size, ar-condicionado, lareira, e uma varanda privativa com vista para a natureza. Para relaxar ainda mais, desfrute de uma banheira e do aquecedor de toalhas, garantindo máximo conforto."}],XA=["https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/eaddb3bf-35e7-4bff-09ff-0c5a80525800/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/711abf2e-87c0-4568-ffa3-71f98954af00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/58b29f7d-d13e-4c97-06d7-c23613222d00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/e01a043d-e7ca-4edc-d4ad-103e63e79600/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a297c1da-191f-4479-7de3-3403c90a8400/public"],QA=[{NomedaSuite:"Suíte Superior 3",NomedaPousada:"Le Ange Serra",features:[{icon:c.jsx(Ce,{}),text:"52m²"},{icon:c.jsx(ae,{}),text:"Ar-condicionado"},{icon:c.jsx(ct,{}),text:"Lareira"},{icon:c.jsx(Xe,{}),text:"Frigobar"},{icon:c.jsx(_e,{}),text:"Smart TV"},{icon:c.jsx(Ee,{}),text:"Banheira relaxante"},{icon:c.jsx(ae,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(Ke,{}),text:"Varanda privativa"}],Description:"Esta suíte de 52m² é perfeita para momentos inesquecíveis, com cama king-size, ar-condicionado e lareira. A varanda privativa proporciona uma vista espetacular da natureza, enquanto a banheira relaxante e o aquecedor de toalhas completam o ambiente para maior comodidade."}],ZA=["https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a0c090c6-7dcb-4886-8dae-e439370b2a00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/932de633-2aa1-41b9-a3ff-3a99f4cb5e00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/e5f64afd-bc17-4cf3-b790-453e90545200/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/18dc1fbd-cbbe-4ccf-d204-c47841cdc900/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/1ceb5e56-07d1-44cf-b194-9a5ed2265b00/public"],JA=[{NomedaSuite:"Suíte Standard 4",NomedaPousada:"Le Ange Serra",features:[{icon:c.jsx(Ce,{}),text:"52m²"},{icon:c.jsx(ae,{}),text:"Ar-condicionado"},{icon:c.jsx(ct,{}),text:"Lareira"},{icon:c.jsx(Xe,{}),text:"Frigobar"},{icon:c.jsx(_e,{}),text:"Smart TV"},{icon:c.jsx(Ee,{}),text:"Banheira relaxante"},{icon:c.jsx(ae,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(Ke,{}),text:"Varanda privativa"}],Description:"Uma suíte de 52m², equipada com cama king-size, ar-condicionado e lareira. A varanda privativa oferece uma vista deslumbrante da natureza, enquanto a banheira relaxante e o aquecedor de toalhas adicionam um toque a mais de conforto e elegância para a sua estadia."}],eE=["https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/9cb4ce2c-7d70-4a5d-fa18-7615aa389d00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/ae1efc69-3fed-4143-0162-fa6659f85000/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/e3c9ebb8-4dc0-42f0-7c77-efb7b307ef00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/c2a76285-c7ca-4cfc-3194-567e7e193000/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/3e9c2e45-b349-403a-3d09-93b6a0661c00/public"],tE=[{NomedaSuite:"Suíte Standard 5",NomedaPousada:"Le Ange Serra",features:[{icon:c.jsx(Ce,{}),text:"52m²"},{icon:c.jsx(ae,{}),text:"Ar-condicionado"},{icon:c.jsx(ct,{}),text:"Lareira"},{icon:c.jsx(Xe,{}),text:"Frigobar"},{icon:c.jsx(_e,{}),text:"Smart TV"},{icon:c.jsx(Ee,{}),text:"Banheira relaxante"},{icon:c.jsx(ae,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(Ke,{}),text:"Varanda privativa"}],Description:"Com 52m², esta suíte oferece cama king-size, ar-condicionado e lareira para momentos acolhedores. A varanda privativa revela uma vista incrível da natureza e, para o máximo de conforto, a suíte ainda conta com uma banheira relaxante e aquecer de toalhas."}],nE=["https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/d24e6cd4-c8e9-437d-afdb-dadebbcb4000/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/ef9ef222-11b1-4689-435b-290edb163900/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/178e93c6-234b-45a2-7fa1-167362cae400/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/5e9145f7-431e-49be-10c3-861a9289cc00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/fcae768c-1514-4874-e9eb-1dde99a62b00/public"],rE=[{NomedaSuite:"Suíte Master 6",NomedaPousada:"Le Ange Serra",features:[{icon:c.jsx(Ce,{}),text:"93m²"},{icon:c.jsx(ae,{}),text:"Ar-condicionado"},{icon:c.jsx(ct,{}),text:"Lareira"},{icon:c.jsx(gp,{}),text:"Chaise lounge"},{icon:c.jsx(Ky,{}),text:"Bay window"},{icon:c.jsx(Xe,{}),text:"Frigobar"},{icon:c.jsx(_e,{}),text:"Smart TV"},{icon:c.jsx(Ee,{}),text:"Banheira relaxante"},{icon:c.jsx(ae,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(Ke,{}),text:"Ampla varanda privativa"}],Description:"Desfrute de 93m² de luxo com cama king-size, ar-condicionado e lareira. A suíte conta com uma chaise lounge ao lado da bay window, banheira relaxante com vista para a natureza, aquecedor de toalhas e, ainda, uma varanda privativa, perfeita para aqueles momentos de tranquilidade."}],iE=["https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/f3d777cf-17c2-4055-75a9-4be9fcc33800/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/0860b499-9c8c-4e99-192a-3ebe36229d00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/9dd5297d-5fba-438f-555c-8cb19bb82a00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/e8184c4c-b550-4166-7448-7492a7477f00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/421cea52-70a2-477b-0331-b21666a29c00/public"],aE=[{NomedaSuite:"Suíte Standard 7",NomedaPousada:"Le Ange Serra",features:[{icon:c.jsx(Ce,{}),text:"52m²"},{icon:c.jsx(ae,{}),text:"Ar-condicionado"},{icon:c.jsx(Re,{}),text:"Cama king-size"},{icon:c.jsx(ct,{}),text:"Lareira"},{icon:c.jsx(Xe,{}),text:"Frigobar"},{icon:c.jsx(_e,{}),text:"Smart TV"},{icon:c.jsx(Ee,{}),text:"Banheira relaxante"},{icon:c.jsx(ae,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(Ke,{}),text:"Varanda NÃO privativa"}],Description:"Uma suíte confortável de 52m², equipada com cama king-size, ar-condicionado e lareira. A varanda oferece uma vista encantadora da natureza, e o espaço é complementado por uma banheira relaxante e aquecedor de toalhas, garantindo uma estadia única."}],oE=["https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/7fd53b58-4a7e-428b-ff6f-73a485a99f00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/46aeb5ba-8400-4a23-f4e4-df0d97083b00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/b151e809-9f33-4e2c-6f87-0903cb86db00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/5651b927-c41d-4f77-f187-3796426ae300/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/af920b8e-ebfe-482c-c876-683601310500/public"],sE=[{NomedaSuite:"Suíte Standard 8",NomedaPousada:"Le Ange Serra",features:[{icon:c.jsx(Ce,{}),text:"52m²"},{icon:c.jsx(ae,{}),text:"Ar-condicionado"},{icon:c.jsx(Re,{}),text:"Cama king-size"},{icon:c.jsx(ct,{}),text:"Lareira"},{icon:c.jsx(Xe,{}),text:"Frigobar"},{icon:c.jsx(_e,{}),text:"Smart TV"},{icon:c.jsx(Ee,{}),text:"Banheira relaxante"},{icon:c.jsx(ae,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(Ke,{}),text:"Varanda NÃO privativa"}],Description:"Uma suíte de 52m² que conta com cama king-size, ar-condicionado e lareira para momentos relaxantes. A varanda, ainda, exibe uma vista de tirar o fôlego da natureza, e a banheira relaxante com aquecedor de toalhas traz um toque de luxo e conforto."}],lE=["https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/40cb4a09-1c14-43cb-e17a-bf61a96c6300/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/cd1824ad-8a82-49bf-ecdb-292e6a0e3500/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/05d8b494-9ae3-429f-ed5c-8b192bf3e500/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/b70f4c55-c0c6-4356-0098-f6318c8ce600/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/c51dc547-138b-434c-dd48-60ae2ae95900/public"],cE=[{NomedaSuite:"Suíte Superior 9",NomedaPousada:"Le Ange Serra",features:[{icon:c.jsx(Ce,{}),text:"52m²"},{icon:c.jsx(ae,{}),text:"Ar-condicionado"},{icon:c.jsx(Re,{}),text:"Cama king-size"},{icon:c.jsx(ct,{}),text:"Lareira"},{icon:c.jsx(Xe,{}),text:"Frigobar"},{icon:c.jsx(_e,{}),text:"Smart TV"},{icon:c.jsx(Ee,{}),text:"Banheira relaxante"},{icon:c.jsx(ae,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(Ke,{}),text:"Varanda privativa"}],Description:"Esta suíte ampla, com 52m², dispõe de cama king-size, ar-condicionado e lareira, perfeita para aqueles momentos de aconchego. Enquanto a banheira relaxante e o aquecedor de toalhas garantem maior comodidade, a varanda privativa promove uma vista única da natureza."}],dE=["https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/b04be4b1-aa90-4228-6dad-507f08379500/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/8caf9f13-0f6c-48cf-5606-6b2b0ce5d000/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/85e23a34-3058-43dc-a035-61fd0e65c700/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/79feb4e3-78e2-4c90-92e3-b0acbe649300/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/63467d9f-7285-43e0-ce5e-e5a83e158300/public"],uE=[{NomedaSuite:"Suíte Master 10",NomedaPousada:"Le Ange Serra",features:[{icon:c.jsx(Ce,{}),text:"80m²"},{icon:c.jsx(ae,{}),text:"Ar-condicionado"},{icon:c.jsx(Re,{}),text:"Cama king-size"},{icon:c.jsx(Cu,{}),text:"Recamier e poltrona de leitura"},{icon:c.jsx(ct,{}),text:"Lareira"},{icon:c.jsx(gp,{}),text:"Couch lounge"},{icon:c.jsx(Xe,{}),text:"Frigobar"},{icon:c.jsx(_e,{}),text:"Smart TV"},{icon:c.jsx(Ee,{}),text:"Banheira relaxante"},{icon:c.jsx(ae,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(Ke,{}),text:"Ampla varanda privativa"}],Description:"Experimente o máximo de conforto em 80m², com cama king-size, ar-condicionado e lareira. Aproveite a chaise lounge ao lado da bay window, a banheira com vista para a natureza, aquecedor de toalhas e, ainda, a varanda privativa, onde você pode relaxar ao som da mata."}],fE=()=>{const e=mn(),t={suite1:j.useRef(null),suite2:j.useRef(null),suite3:j.useRef(null),suite4:j.useRef(null),suite5:j.useRef(null),suite6:j.useRef(null),suite7:j.useRef(null),suite8:j.useRef(null),suite9:j.useRef(null),suite10:j.useRef(null)};return j.useEffect(()=>{Ie.init({duration:1e3,once:!1}),Ie.refresh()},[]),j.useEffect(()=>{const n=()=>{var a;const i=e.hash.replace("#","");if(console.log("Hash atual:",i),i&&((a=t[i])!=null&&a.current)){const o=t[i].current;if(o){const s=o.offsetTop-100;console.log(`Elemento encontrado: ${i}, rolando para: ${s}px`),window.scrollTo({top:s,behavior:"smooth"})}else console.log(`Elemento com ID ${i} não encontrado no DOM.`)}else console.log(`Hash ${i} não está associado a um ref válido.`)},r=()=>{console.log("Página carregada, verificando hash..."),n()};return window.addEventListener("load",r),window.addEventListener("hashchange",n),n(),()=>{window.removeEventListener("load",r),window.removeEventListener("hashchange",n)}},[e,t]),c.jsxs(c.Fragment,{children:[c.jsx(Nn,{}),c.jsxs(UA,{children:["Acomodações da",c.jsx("b",{children:"Pousada Le Ange Serra"})]}),c.jsx(He,{id:"suite1",ref:t.suite1,images:WA,suites:qA,reverse:!0,background:"#CAD76680"}),c.jsx(He,{id:"suite2",ref:t.suite2,images:YA,suites:KA,reverse:!1,background:"#CAD76680"}),c.jsx(He,{id:"suite3",ref:t.suite3,images:XA,suites:QA,reverse:!0,background:"#CAD76680"}),c.jsx(He,{id:"suite4",ref:t.suite4,images:ZA,suites:JA,reverse:!1,background:"#CAD76680"}),c.jsx(He,{id:"suite5",ref:t.suite5,images:eE,suites:tE,reverse:!0,background:"#CAD76680"}),c.jsx(He,{id:"suite6",ref:t.suite6,images:nE,suites:rE,reverse:!1,background:"#CAD76680"}),c.jsx(He,{id:"suite7",ref:t.suite7,images:iE,suites:aE,reverse:!0,background:"#CAD76680"}),c.jsx(He,{id:"suite8",ref:t.suite8,images:oE,suites:sE,reverse:!1,background:"#CAD76680"}),c.jsx(He,{id:"suite9",ref:t.suite9,images:lE,suites:cE,reverse:!0,background:"#CAD76680"}),c.jsx(He,{id:"suite10",ref:t.suite10,images:dE,suites:uE,reverse:!1,background:"#CAD76680"}),c.jsx(yr,{})]})};function br(e){return ee({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M.5 6a.5.5 0 0 0-.488.608l1.652 7.434A2.5 2.5 0 0 0 4.104 16h5.792a2.5 2.5 0 0 0 2.44-1.958l.131-.59a3 3 0 0 0 1.3-5.854l.221-.99A.5.5 0 0 0 13.5 6zM13 12.5a2 2 0 0 1-.316-.025l.867-3.898A2.001 2.001 0 0 1 13 12.5"},child:[]},{tag:"path",attr:{d:"m4.4.8-.003.004-.014.019a4 4 0 0 0-.204.31 2 2 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.6.6 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3 3 0 0 1-.202.388 5 5 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 3.6 4.2l.003-.004.014-.019a4 4 0 0 0 .204-.31 2 2 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.6.6 0 0 0-.09-.252A4 4 0 0 0 3.6 2.8l-.01-.012a5 5 0 0 1-.37-.543A1.53 1.53 0 0 1 3 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a6 6 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 4.4.8m3 0-.003.004-.014.019a4 4 0 0 0-.204.31 2 2 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.6.6 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3 3 0 0 1-.202.388 5 5 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 6.6 4.2l.003-.004.014-.019a4 4 0 0 0 .204-.31 2 2 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.6.6 0 0 0-.09-.252A4 4 0 0 0 6.6 2.8l-.01-.012a5 5 0 0 1-.37-.543A1.53 1.53 0 0 1 6 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a6 6 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 7.4.8m3 0-.003.004-.014.019a4 4 0 0 0-.204.31 2 2 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.6.6 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3 3 0 0 1-.202.388 5 5 0 0 1-.252.382l-.019.025-.005.008-.002.002A.5.5 0 0 1 9.6 4.2l.003-.004.014-.019a4 4 0 0 0 .204-.31 2 2 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.6.6 0 0 0-.09-.252A4 4 0 0 0 9.6 2.8l-.01-.012a5 5 0 0 1-.37-.543A1.53 1.53 0 0 1 9 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a6 6 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 10.4.8"},child:[]}]})(e)}const pE=k.div`
    width: 100%;
    height: 20vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    line-height: 100%;
    padding: 22vh 0 10vh 0;
    font-size: 1.7rem;
    font-family: var(--font--comfortaa);
    gap: 5px;
    font-weight: 200;

    @media (max-width: 768px){
        height: 15vh;
        padding: 20vh 0 6vh 0 ;
    }

    & > b{
        color: var(--color--blue);
        font-weight: 400;
    }

`,hE=["https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/224faac1-7f2b-4e14-8d75-e9190e813b00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/353c8221-e9bf-49c5-6c43-103a69ae6800/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/7dd92106-fe04-4e01-01f5-f174bef81a00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/84dce2f1-97a8-466a-8d53-d20540b75a00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/f0200d43-3f83-438c-49ab-338849f8c100/public"],mE=[{NomedaSuite:"Suíte Superior 1",NomedaPousada:"Le Ange Mar",features:[{icon:c.jsx(Ce,{}),text:"50m²"},{icon:c.jsx(ae,{}),text:"Ar-condicionado"},{icon:c.jsx(Xe,{}),text:"Frigobar"},{icon:c.jsx(br,{}),text:"Cafeteira 3 corações"},{icon:c.jsx(_e,{}),text:"Smart TV"},{icon:c.jsx(Re,{}),text:"Cama king-size"},{icon:c.jsx(Ee,{}),text:"Banheira relaxante"},{icon:c.jsx(ae,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(Ke,{}),text:"Varanda privativa"}],Description:"A suíte oferece 50m² de conforto e sofisticação. Com cama king-size, a suíte garante uma estadia relaxante com ar-condicionado, lareira e frigobar. Desfrute de momentos de bem-estar na banheira relaxante ou no chuveiro."}],gE=["https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/11429c23-8024-4e73-d834-7af88bede500/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/719761c8-54d7-4dba-e631-6557a1464600/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/1254a3f5-bae5-4110-5100-d17bf5602600/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/541ebf7c-5343-4545-3d62-7862ea0c5b00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/60c29539-7e27-476a-cec5-aa929f036100/public"],vE=[{NomedaSuite:"Suíte Standard 2",NomedaPousada:"Le Ange Mar",features:[{icon:c.jsx(Ce,{}),text:"45m²"},{icon:c.jsx(ae,{}),text:"Ar-condicionado"},{icon:c.jsx(Xe,{}),text:"Frigobar"},{icon:c.jsx(br,{}),text:"Cafeteira 3 corações"},{icon:c.jsx(_e,{}),text:"Smart TV"},{icon:c.jsx(Re,{}),text:"Cama king-size"},{icon:c.jsx(Ee,{}),text:"Banheira relaxante"},{icon:c.jsx(ae,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(Ke,{}),text:"Varanda privativa"}],Description:"Esta suíte de 45m² é ideal para quem busca conforto e tranquilidade. Com cama king-size, ar-condicionado, cafeteira 3 Corações e frigobar, você desfrutará de cada momento ao lado do seu pet. Recarregue as energias na banheira relaxante, aproveite a vista deslumbrante para o mar e sinta a brisa suave da maresia, tornando sua estadia ainda mais especial."}],xE=["https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/89368e85-889e-41fc-eafe-e6a23b278600/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/fca9fbcb-04a7-48b0-af5d-125a7da7a500/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/01b5c7ac-d7a0-4647-a472-af2755980d00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/c11df969-92ac-4b82-5923-72add6d2a400/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/ab284cc9-797e-4de3-706f-a8e3c9958300/public"],yE=[{NomedaSuite:"Suíte Superior 3",NomedaPousada:"Le Ange Mar",features:[{icon:c.jsx(Ce,{}),text:"45m²"},{icon:c.jsx(ae,{}),text:"Ar-condicionado"},{icon:c.jsx(Xe,{}),text:"Frigobar"},{icon:c.jsx(br,{}),text:"Cafeteira 3 corações"},{icon:c.jsx(_e,{}),text:"Smart TV"},{icon:c.jsx(Re,{}),text:"Cama king-size"},{icon:c.jsx(Ee,{}),text:"Banheira relaxante"},{icon:c.jsx(ae,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(Ke,{}),text:"Varanda privativa"}],Description:"Com 45m², esta suíte conta com uma cama king-size, ar-condicionado, cafeteira 3 Corações e frigobar, oferecendo o necessário para uma estadia repleta de tranquilidade. A vista incrível para o mar, junto à suave maresia, proporciona momentos de relaxamento para aproveitar ao lado do seu pet."}],wE=["https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/609d4224-77e9-4993-093c-7e6b6f53cd00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/bf696df0-ff89-4aa5-b5ab-b42477dfc400/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/ece7a36a-7989-4a77-c69e-963b7c41e500/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/7fd252cd-2c0a-420d-55e6-7ddb05319200/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/3bed0eb8-a9a7-4a71-48d5-7be1528fa400/public"],bE=[{NomedaSuite:"Suíte Superior 4",NomedaPousada:"Le Ange Mar",features:[{icon:c.jsx(Ce,{}),text:"45m²"},{icon:c.jsx(ae,{}),text:"Ar-condicionado"},{icon:c.jsx(Xe,{}),text:"Frigobar"},{icon:c.jsx(br,{}),text:"Cafeteira 3 corações"},{icon:c.jsx(_e,{}),text:"Smart TV"},{icon:c.jsx(Re,{}),text:"Cama king-size"},{icon:c.jsx(Ee,{}),text:"Banheira relaxante"},{icon:c.jsx(ae,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(Ke,{}),text:"Varanda privativa"}],Description:"Desfrute de 45m² de conforto e tranquilidade nesta suíte aconchegante. Equipada com cama king-size, ar-condicionado, cafeteira 3 Corações e frigobar, é o ambiente perfeito para relaxar. Conta, ainda, com uma vista espetacular para o mar, combinada com a brisa fresca da maresia."}],SE=["https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/d47d93cd-1d83-4684-b2cd-23067ba58b00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/4d214206-6623-468f-7d4e-40db9793d700/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/2671e476-3ba9-402c-5864-0b3c4f2f6c00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/f1a7a38f-4371-441a-2492-e7e0f97eee00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/be3dccd2-e019-4d93-9c6c-3b930d519c00/public"],jE=[{NomedaSuite:"Suíte Superior 5",NomedaPousada:"Le Ange Mar",features:[{icon:c.jsx(Ce,{}),text:"45m²"},{icon:c.jsx(ae,{}),text:"Ar-condicionado"},{icon:c.jsx(Xe,{}),text:"Frigobar"},{icon:c.jsx(br,{}),text:"Cafeteira 3 corações"},{icon:c.jsx(_e,{}),text:"Smart TV"},{icon:c.jsx(Re,{}),text:"Cama king-size"},{icon:c.jsx(Ee,{}),text:"Banheira relaxante"},{icon:c.jsx(ae,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(Ke,{}),text:"Varanda privativa"}],Description:"Uma suíte de 45m² que une conforto e tranquilidade. Com cama king-size, ar-condicionado, cafeteira 3 Corações e frigobar, é ideal para vivenciar aqueles momentos de preguiça ao lado do seu pet. Relaxe ao som das ondas do mar e aproveite a banheira relaxante."}],CE=["https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/9891374e-4514-480c-bc7c-5e1af0ef7b00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/6747ab9c-105d-4e37-5be7-d14b63c6d100/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/4ee59c14-ad1f-409b-db20-e49298d49400/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/8d46666c-530f-42d4-9223-bdd74e4a7900/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/31a78bcb-34a0-4254-b51e-3f6ff4dbe600/public"],kE=[{NomedaSuite:"Suíte Superior 6",NomedaPousada:"Le Ange Mar",features:[{icon:c.jsx(Ce,{}),text:"45m²"},{icon:c.jsx(ae,{}),text:"Ar-condicionado"},{icon:c.jsx(Xe,{}),text:"Frigobar"},{icon:c.jsx(br,{}),text:"Cafeteira 3 corações"},{icon:c.jsx(_e,{}),text:"Smart TV"},{icon:c.jsx(Re,{}),text:"Cama king-size"},{icon:c.jsx(Ee,{}),text:"Banheira relaxante"},{icon:c.jsx(ae,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(Ke,{}),text:"Varanda privativa"}],Description:"Com 45m² de puro conforto, esta suíte oferece cama king-size, ar-condicionado, cafeteira 3 Corações e frigobar, proporcionando um ambiente mais do que acolhedor, tranquilo. Sem contar que a vista encantadora para o mar e a banheira de imersão tornam a suíte ainda mais relaxante."}],TE=["https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/9b174ce2-2966-4c9e-9faf-185da8d1d200/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/b0924d25-dd2e-4a7b-5db4-558748300f00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/0c0b3f28-0981-477e-a77a-ee606e941f00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/252537ee-171f-4f70-3bda-8479e0c1be00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/b90bd076-582a-4fe6-3fb1-95a0ceadc700/public"],AE=[{NomedaSuite:"Suíte Master 7",NomedaPousada:"Le Ange Mar",features:[{icon:c.jsx(Ce,{}),text:"45m²"},{icon:c.jsx(ae,{}),text:"Ar-condicionado"},{icon:c.jsx(Xe,{}),text:"Frigobar"},{icon:c.jsx(br,{}),text:"Cafeteira 3 corações"},{icon:c.jsx(_e,{}),text:"Smart TV"},{icon:c.jsx(Re,{}),text:"Cama king-size"},{icon:c.jsx(Ee,{}),text:"Banheira relaxante"},{icon:c.jsx(ae,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(Ke,{}),text:"Varanda privativa"}],Description:"Esta suíte de 45m² oferece cama king-size, ar-condicionado, cafeteira 3 Corações e frigobar, criando um espaço aconchegante e tranquilo. Aproveite a vista cativante para o mar e relaxe na banheira de imersão, transformando sua estadia em um verdadeiro paraíso."}],EE=["https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/6280f6c6-f008-4f18-fe45-fe16d6d76000/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/eea5797e-34bc-4138-8ab7-9e4bd9fcd500/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/c112a2dd-d613-4801-d4a0-8d30b5121a00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/90902690-7a42-4cad-b8aa-4099c8b58000/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/c967f3cc-5ae6-4ea1-4e3e-2041f83cb600/public"],PE=[{NomedaSuite:"Suíte Master 8",NomedaPousada:"Le Ange Mar",features:[{icon:c.jsx(Ce,{}),text:"45m²"},{icon:c.jsx(ae,{}),text:"Ar-condicionado"},{icon:c.jsx(Xe,{}),text:"Frigobar"},{icon:c.jsx(br,{}),text:"Cafeteira 3 corações"},{icon:c.jsx(_e,{}),text:"Smart TV"},{icon:c.jsx(Re,{}),text:"Cama king-size"},{icon:c.jsx(Ee,{}),text:"Banheira relaxante"},{icon:c.jsx(ae,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(Ke,{}),text:"Varanda privativa"}],Description:"A suíte de 45m² oferece o melhor em conforto, com cama king-size, ar-condicionado, cafeteira 3 Corações e frigobar. A vista deslumbrante para o mar e a banheira de imersão garantem momentos de total descanso e relaxamento."}],GE=()=>{const e=mn(),t={suite1:j.useRef(null),suite2:j.useRef(null),suite3:j.useRef(null),suite4:j.useRef(null),suite5:j.useRef(null),suite6:j.useRef(null),suite7:j.useRef(null),suite8:j.useRef(null),suite9:j.useRef(null),suite10:j.useRef(null)};return j.useEffect(()=>{const n=()=>{var a;const i=e.hash.replace("#","");if(console.log("Hash atual:",i),i&&((a=t[i])!=null&&a.current)){const o=t[i].current;if(o){const s=o.offsetTop-100;console.log(`Elemento encontrado: ${i}, rolando para: ${s}px`),window.scrollTo({top:s,behavior:"smooth"})}else console.log(`Elemento com ID ${i} não encontrado no DOM.`)}else console.log(`Hash ${i} não está associado a um ref válido.`)},r=()=>{console.log("Página carregada, verificando hash..."),n()};return window.addEventListener("load",r),window.addEventListener("hashchange",n),n(),()=>{window.removeEventListener("load",r),window.removeEventListener("hashchange",n)}},[e,t]),j.useEffect(()=>{Ie.init({duration:1e3,once:!1}),Ie.refresh()},[]),c.jsxs(c.Fragment,{children:[c.jsx(Nn,{}),c.jsxs(pE,{children:["Acomodações da",c.jsx("b",{children:"Pousada Le Ange Mar"})]}),c.jsx(He,{id:"suite1",ref:t.suite1,images:hE,suites:mE,reverse:!0,background:"#7AC4F350"}),c.jsx(He,{id:"suite2",ref:t.suite2,images:gE,suites:vE,reverse:!1,background:"#7AC4F350"}),c.jsx(He,{id:"suite3",ref:t.suite3,images:xE,suites:yE,reverse:!0,background:"#7AC4F350"}),c.jsx(He,{id:"suite4",ref:t.suite4,images:wE,suites:bE,reverse:!1,background:"#7AC4F350"}),c.jsx(He,{id:"suite5",ref:t.suite5,images:SE,suites:jE,reverse:!0,background:"#7AC4F350"}),c.jsx(He,{id:"suite6",ref:t.suite6,images:CE,suites:kE,reverse:!1,background:"#7AC4F350"}),c.jsx(He,{id:"suite7",ref:t.suite7,images:TE,suites:AE,reverse:!0,background:"#7AC4F350"}),c.jsx(He,{id:"suite8",ref:t.suite8,images:EE,suites:PE,reverse:!1,background:"#7AC4F350"}),c.jsx(yr,{})]})},zE=k.div`
    height: 5vh;

    @media (max-width: 768px) {
        height: 0vh;
    }
`,_E=k.section`
    width: 100%;
    display: flex;
    padding: 5% 10% 2.5% 5%;
    align-items: center;
    justify-content: space-between;
    height: 95vh;
    background: #fff;
    position: relative;

    &::before {
        content: '';
        width: 100%;
        height: 100vh;
        left: 0;
        top: -5vh;
        position: absolute;
        z-index: 1;
        opacity: 0.05;
        background-image: url('https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/ddb82947-e348-414c-3db1-f51552701b00/public');
        background-position: center;
        background-size: cover;

        @media (max-width:1080px){
            display: none!important;
        }
    }

    @media (max-width: 768px) {
        padding: 10% 2.5%;
        flex-direction: column-reverse;
        position: relative;
        z-index: 2;
    }
`,ME=k.div`
    width: 45%;
    height: 100%;
    background-image: url('https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/ddb82947-e348-414c-3db1-f51552701b00/public');
    background-position: bottom;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 20px 10px 30px 20px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    filter: contrast(110%);

    @media (max-width: 768px) {
        width: 100%;
        border-radius: 0px;
        border-image: fill 0 linear-gradient(#0001, #ffffff);
        box-shadow: none!important;
        position: absolute;
        height: 100%;
        top: 0;
        z-index: -3;
    }
`,LE=k.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    gap: 20px;
    flex-direction: column;
    position: relative;
    z-index: 3;

    @media (max-width: 768px) {
        width: 100%;
        align-items: center;
        height: 35%;
        z-index: 10!important;
    }

    & > h4 {
        font-family: var(--font--comfortaa);
        font-size: 18px;
        font-weight: 200;
        color: var(--color--black);

        @media (max-width: 768px) {
            color: var(--color--black);
            font-size: 14px;
            text-align: center;
            font-weight: 800;
        }
        
    }

    & > h4 b{
        color: var(--color--blue);
        font-weight: 300;
    }

    & > h1 {
        font-family: var(--font--comfortaa);
        text-align: right;
        font-size: 65px;
        width: 100%;
        line-height: 100%;
        font-weight: 100;
        color: var(--color--black);
        margin-top: -15px;

        @media (max-width: 768px) {
            display: inline-block;
            width: 100%;
            font-size: 35px;
            text-align: center;
            margin-top: -5px;
            font-weight: 100;
        }
    }

    & > h1 b {
        color: var(--color--blue);
        font-weight: 100;

        @media (max-width: 768px) {
            font-weight: 100;
        }
    }

    & > p {
        font-family: var(--font--comfortaa);
        color: var(--color--black);
        text-align: right;
        font-size: 18px;
        line-height: 100%;
        width: 50%;
        position: relative;
        z-index: 2;
        font-weight: 100;

        @media (max-width: 768px) {
            width: 80%;
            font-size: 1rem;
            text-align: center;
            padding-bottom: 10px;
        }
    }
`,OE=[{title:"Pet Friendly",description:"Não temos restrições quanto ao porte ou raça do seu pet, também não cobramos taxas adicionais para a vinda deles. Aqui, o seu pet tem liberdade total para acessar todas as nossas comodidades!",buttonText:"Viver minha experiência agora",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/42a70d06-97d1-4f5c-5df8-36c30f21c100/public"},{title:"Praia",description:"Para os amantes da praia, estamos localizados a apenas 150 metros da Praia Rasa, onde você e o seu pet podem aproveitar juntinhos e dar um mergulho delicioso no mar.",buttonText:"Viver minha experiência agora",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/da4810e5-6e85-45f5-1fcf-f6a74754bd00/public"},{title:"Piscina",description:"Nossa piscina aquecida com vista panorâmica para o oceano é de surpreender! Possui tratamento especial por ozônio com níveis baixíssimos de cloro, pensando no bem-estar da sua pele e a do seu pet também!",buttonText:"Viver minha experiência agora",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/09da9d76-57b8-4d44-02b2-3c4c2380c800/public"},{title:"Ofurôs",description:"São dois ofurôs acoplados na piscina, para você relaxar na água quentinha, apreciando a vista exuberante do mar.",buttonText:"Viver minha experiência agora",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/0d1d1a6a-5935-4c57-6b12-d1f028604400/public"},{title:"Sala de estar",description:"A sala de estar é aquela que abraça e aconchega. Cheia de sofás, você pode se acomodar e assistir à televisão, ou até mesmo ler um livro, sempre na companhia do seu pet.",buttonText:"Viver minha experiência agora",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/939f40ce-048b-4746-7ce7-83fc2f4bbc00/public"},{title:"Cozinha",description:"Todas as refeições estão incluídas: café da manhã, almoço, chá da tarde e jantar! Todas preparadas com muito tempero, amor e afeto.",buttonText:"Viver minha experiência agora",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/bec96bcc-f2d6-431c-a7d5-31e1c5b7d000/public"},{title:"Bar",description:"Para completar ainda mais a sua experiência, contamos com uma carta variada de vinhos, destilados, drinks e cervejas!",buttonText:"Viver minha experiência agora",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/67318553-8e4b-4d4c-b914-3ea76fc7be00/public"},{title:"Suítes",description:"São 8 suítes, elegantemente, decoradas, todas com vista para o mar, banheira de imersão, varanda, cama king-size, ar-condicionado e frigobar.",buttonText:"Viver minha experiência agora",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/4d6afdaf-1cfe-4860-8099-818abedfdd00/public"}],IE=k.section`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -5vh;

    @media (max-width: 768px) {
        height: auto;
        padding: 0% 0 5% 0;
        margin-top: 0;
    }
`,RE=[{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/04491c1f-dc99-499a-4e92-13037b3eab00/public",text:"Suíte Superior 1",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/4551d99f-d7fa-440f-bdb1-9126c3a82100/public",text:"Suíte Standard 2",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a81bc75d-a475-4dc9-6101-2f7dbb4e4b00/public",text:"Suíte Superior 3",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/e0b4c640-813a-4586-bdf9-91b0be3f7300/public",text:"Suíte Superior 4",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/912f5f6c-6f94-4dae-30b3-85c460f0f700/public",text:"Suíte Superior 5",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/70b133ff-56ab-44b4-76b3-ef1638c79000/public",text:"Suíte Superior 6",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/e9d95c2b-081d-4808-6bf6-431e89183c00/public",text:"Suíte Master 7",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/baf68f87-5db9-47ec-0fb5-dc4b5e1f4b00/public",text:"Suíte Master 8",loading:"lazy"}],DE=k.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 8vh;
    background-color: var(--color--blue);
    font-family: var(--font--comfortaa);

    @media (max-width: 768px) {
        height: 8vh;
        margin-bottom: 25px;
    }

    & > h1 {
        font-weight: 200;
        width: 80%;
        text-align: center;
        font-size: 1.1rem;
        color: var(--color--white);

        @media (max-width: 768px) {
            font-size: 1rem;
            font-weight: 400;
        }
    }
`,VE=k.section`
    width: 100%;
    height: 80vh;
    padding: 10% 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10vh;

    @media (max-width: 768px) {
        height: auto;
        margin-top: 0;
        padding: 10% 2.5% 0 2.5%;
    }
`,NE=[{image:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/bbca820c-502b-48cf-a6d6-8a4d4da25900/public",title:"Noite das pizzas",dateRange:"06/12/2024 até 08/12/2024 (3 diárias)",features:[{icon:c.jsx(re,{}),text:"07/12 - Noite das pizzas"},{icon:c.jsx(re,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(xe,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"359,20",discount:25},{image:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/79fdce4b-cea9-43ec-5c67-2235d2319a00/public",title:"Frutos do Mar",dateRange:"13/12/2024 até 15/12/2024 (2 diárias)",features:[{icon:c.jsx(re,{}),text:"14/12 - Frutos do Mar"},{icon:c.jsx(re,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(xe,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"359,20",discount:25},{image:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/58c77a3d-d9fb-422f-c84b-ad4798b74600/public",title:"Fique 4 pague 3",dateRange:"Segunda-feira a Sexta-feira",features:[{icon:c.jsx(re,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(hn,{}),text:"Até 12X SEM JUROS"},{icon:c.jsx(xe,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"538,90",discount:25},{image:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/1e2853af-cbe7-48ba-a6cc-7e36642f0f00/public",title:"Pacote de Natal",dateRange:"21/12/2024 até 25/12/2024 (4 diárias)",features:[{icon:c.jsx(re,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(hn,{}),text:"Até 12X SEM JUROS"},{icon:c.jsx(xe,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"918,40",discount:25},{image:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/70044ef4-2814-404f-5465-3e5acefd8600/public",title:"Pacoto Ano Novo",dateRange:"28/12/2024 até 01/01/2025 (4 diárias)",features:[{icon:c.jsx(re,{}),text:"31/12 - Ceia maravilhosa"},{icon:c.jsx(re,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(xe,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"1171,50",discount:25}],FE=k.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 15vh;
    margin-bottom: -10vh;

    @media (max-width: 768px) {
        display: none;
    }
`,$E=[{images:[{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/c9f443a0-365f-4341-67c4-dc3b15d8d200/public",alt:"Foto de cachorro com uma bola na boca",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/f381312d-98e6-4e3a-2267-b72775b77800/public",alt:"Foto do cachorro sentado tomando sol",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/ebe09a3c-386f-4683-b025-9734976d0b00/public",alt:"Cachorro na piscina sorrindo",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/2ea4864a-bc1c-4b0f-c720-4f4db60d6600/public",alt:"Cachorro tirando uma selfie com outros 3 cachorros",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/0d4896d4-5675-4739-7cb3-30fc1c6dec00/public",alt:"Foto do cachorro olhando para a câmera",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/6a09554d-7f59-42f4-603b-bf2a3bf24600/public",alt:"Cachorro com a lingua para fora",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/6f6a0274-479c-4c48-e1ce-23fa90998500/public",alt:"Cachorro na borda da piscina",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/b784a222-c8bc-4a35-ac3a-a6056d717300/public",alt:"Cachorro em uma prancha de surf na onda",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/d826fa54-7c2b-47b9-9cb6-4e0540d8dd00/public",alt:"Cachorro com óculos escuros",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/00e287de-9719-47ee-0fb1-3ef507b3a800/public",alt:"Cachorro e um cachorro pequeno",loading:"lazy",label:"Le Ange Mar"}]},{images:[{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/b4ddd8c3-b6c1-4c00-d54b-06a44c074900/public",alt:"Foto de um cachorro com uma taça do lado",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a6b63bf4-92e1-43d5-9a86-ed900bdc4800/public",alt:"3 cachorros e um homem na piscina",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/1cd65a71-7f00-4f13-5a67-c4ff922d8f00/public",alt:"Cachorro marrom",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/366f42cc-6fe9-4fc0-5ef6-15ea8e420b00/public",alt:"Cachorro marrom na piscina",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/5b19b1f4-fd46-4dc9-5faa-96995d69b400/public",alt:"Cachorro branco olhando para a camera",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/252ec971-e6a4-4b55-3e1b-2069f4570800/public",alt:"Cachorro dormindo no sofá",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/9ca851c2-347a-4f8c-752e-b90080865800/public",alt:"Cachorro em cima do morro olhando para o lado",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/7a0ae482-3436-4db1-9ed3-c1c7b1b02b00/public",alt:"3 cachorros brincando na praia",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/d9be2586-3341-4990-f3c8-685edcad8900/public",alt:"Foto do cachorro olhando para a câmera",loading:"lazy",label:"Le Ange Mar"}],reverse:!0}],BE=()=>(j.useEffect(()=>{Ie.init({duration:1e3,once:!1}),Ie.refresh()},[]),c.jsxs(c.Fragment,{children:[c.jsx(In,{children:c.jsx("title",{children:"Le Ange Serra - Pousada Le Ange"})}),c.jsx(zE,{}),c.jsx(Nn,{}),c.jsxs(_E,{children:[c.jsxs(LE,{children:[c.jsxs("h4",{"data-aos":"fade-up","data-aos-delay":"100",children:["Conheça a ",c.jsx("b",{children:"Le Ange Mar"}),", a pousada mais"]}),c.jsxs("h1",{"data-aos":"fade-down","data-aos-delay":"200",children:["PET FRIENDLY",c.jsx("br",{})," DO ",c.jsx("b",{children:"BRASIL"})]}),c.jsx("p",{children:"Aqui, você e o seu pet são mais do que bem-vindos!"}),c.jsx("div",{children:c.jsx(wr,{text:"Reservar agora!",textColor:"var(--color--black)",backgroundColor:"transparent",borderColor:"var(--color--black)",iconColor:"var(--color--black)",hoverBackgroundColor:"var(--color--blue)",hoverBorderColor:"var(--color--blue)",hoverColor:"var(--color--white)",hoverIconColor:"var(--color--white)",onClick:()=>window.open("https://wa.link/dojlwi","_blank")})})]}),c.jsx(ME,{"data-aos":"fade-left","data-aos-delay":"200"})]}),c.jsx(DE,{"data-aos":"fade-in","data-aos-delay":"100",children:c.jsx("h1",{"data-aos":"fade-up","data-aos-delay":"300",children:"LeAnge Mar | Armação dos Búzios RJ"})}),c.jsx(IE,{"data-aos":"fade-up","data-aos-delay":"50",children:c.jsx(Vl,{slides:OE,titleColor:"var(--color--blue)",buttonBgColor:"var(--color--blue)",imagePosition:"left"})}),c.jsx(e2,{images:RE}),c.jsx(Nl,{colorDefinedBold:"var(--color--blue)","data-aos":"fade-up","data-aos-delay":"400"}),c.jsx($l,{carousels:$E,"data-aos":"fade-in","data-aos-delay":"400"}),c.jsx(FE,{children:c.jsx(dt,{text:"Fazer minha reserva!",onClick:()=>window.open("https://wa.link/dojlwi","_blank")})}),c.jsx(VE,{"data-aos":"fade-up","data-aos-delay":"400",children:c.jsx(vo,{events:NE})}),c.jsx(Fl,{}),c.jsx(yr,{})]})),HE=k.div`
    height: 5vh;

    @media (max-width: 768px){
        height: 0vh;
    }
`,UE=k.section`
    width: 100%;
    display: flex;
    padding: 5% 5% 2.5% 10%;
    align-items: center;
    justify-content: space-between;
    height: 95vh;
    background: #fff;
    position: relative;
    

    &::before{
        content: '';
        width: 100%;
        height: 100vh;
        left: 0;
        top: -5vh;
        position: absolute;
        z-index: 1;
        opacity: .05;
        background-image: url('https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/f9af3c90-2ae9-4250-2ac9-afedce182000/public');
        background-position: center;
        background-size: cover;

        @media (max-width:1080px){
            display: none!important;
        }
    }

    @media (max-width: 768px){
        padding: 10% 2.5%;
        flex-direction: column-reverse;
        position: relative;
        z-index: 2;
    }
`,WE=k.div`
    width: 45%;
    height: 100%;
    background-image: url('https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/f9af3c90-2ae9-4250-2ac9-afedce182000/public');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 40px 10px 30px 20px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    filter: contrast(110%);

    @media (max-width: 768px){
        width: 100%;
        border-radius: 0px;
        border-image: fill 0 linear-gradient(#0001, #ffffff);
        position: absolute;
        box-shadow: none!important;
        height: 100%;
        top: 0;
        z-index: -3;

    }
`,qE=k.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: 20px;
    flex-direction: column;
    position: relative;
    z-index: 3;
    

    @media (max-width: 768px){
        width: 100%;
        align-items: center;
        height: 35%;
    }

    & > h4 {
        font-family: var(--font--comfortaa);
        font-size: 18px;
        font-weight: 200;
        color: var(--color--black);
        font-weight: 100;
        

        @media (max-width: 768px){
            color: var(--color--black);
            font-size: 14px;
            text-align: center;
            font-weight: 800;
        }
    }

    & > h1 {
        font-family: var(--font--comfortaa);
        font-size: 65px;
        margin-left: -5px;
        width: 100%;
        line-height: 100%;
        color: var(--color--black);
        margin-top: -15px;
        font-weight: 100;
        

        @media (max-width: 768px){
            display: inline-block;
            width: 100%;
            font-size: 35px;
            text-align: center;
            margin-left: 0;
            margin-top: -5px;
            font-weight: 100;
        }
    }

    & > h1 b {
        color: var(--color--green);
        font-weight: 100;
        
        @media(max-width: 768px){
            font-weight: 100;
        }
    }

    & > p {
        font-family: var(--font--comfortaa);
        color: var(--color--black);
        font-size: 18px;
        line-height: 120%;
        width: 80%;
        font-weight: 100;
        position: relative;
        z-index: 2;
        

        @media (max-width: 768px){
            width: 80%;
            font-size: 1rem;
            text-align: center;
            padding-bottom: 0px;
        }
    }
`,YE=[{title:"Pet Friendly",description:"Não temos restrições quanto ao porte ou raça do seu pet, também não cobramos taxas adicionais para a vinda deles. Aqui, o seu pet tem liberdade total para acessar todas as nossas comodidades!",buttonText:"Viver minha experiência agora",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/db3f6942-0de2-433d-1235-33bfa547e500/public"},{title:"Aventura",description:"Na propriedade, há trilhas que percorrem a natureza, beirando o rio! Em diversos pontos, você pode dar uma paradinha para tomar um banho nas águas frescas e renovar as energias!",buttonText:"Viver minha experiência agora",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/b324ce14-d3d8-4fc3-fccf-b4b4a9806d00/public"},{title:"Refrescar",description:"Nossa maravilhosa piscina de borda infinita possui aquecimento solar e tratamento especial por ozônio, com níveis baixíssimos de cloro, além de contar com um ofurô acoplado, perfeito para aproveitar o final de tarde.",buttonText:"Viver minha experiência agora",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/8b7eae12-574b-40fd-5e6f-7f341c81a600/public"},{title:"Sossego",description:"A área da sauna fica situada ao lado da mata, envolvida pelo som relaxante do rio que passa. Aqui, você pode desfrutar de um hot tub abastecido por água natural e aquecido à lenha, o combo perfeito para você relaxar.",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/da7c577a-832a-4a84-d5fd-162e11915b00/public"},{title:"Lazer",description:"Nossas áreas internas contam com três salas superequipadas e aconchegantes, sendo elas: sala de TV, sala de estar, sala de jogos com mesa de bilhar, carteado, jogos de tabuleiro e biblioteca.",buttonText:"Viver minha experiência agora",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/7c086b71-3c6b-442b-584c-dcdabe1be700/public"},{title:"Cozinha",description:"Todas as refeições estão incluídas: café da manhã, almoço, chá da tarde e jantar! Todas preparadas com muito tempero, amor e afeto.",buttonText:"Viver minha experiência agora",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/c1c7acdf-aba7-443b-b1e5-3bdc237b3b00/public"},{title:"Diversão",description:"Espaço de sobra para o seu pet se divertir! Espaço agility à beira do lago, com muita grama, para o seu pet, correr, pular, brincar e, claro, nadar!",buttonText:"Viver minha experiência agora",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/c57174c4-9b12-4842-e8ff-6cfb4867a200/public"},{title:"Adega",description:"Para tornar a sua experiência ainda mais especial, contamos com uma adega subterrânea para a climatização perfeita dos vinhos, bar com carta variada de drinks, cervejas e destilados.",buttonText:"Viver minha experiência agora",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/1a66d627-7861-4124-638d-d21ddef05100/public"},{title:"Suítes",description:"São 10 suítes encatadoras e cada uma possui o seu charme. Todas dispõem de uma banheira com vista para a natureza, lareira, cama king-size, ar-condicionado, frigobar e varanda.",buttonText:"Viver minha experiência agora",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/48a11406-659c-4d98-f2d8-6fc518ef6600/public"},{title:"Relaxar",description:"Relaxe no nosso SPA com uma vista de frente para a mata! Você pode escolher contratar os nossos serviços de massoterapia, manicure e pedicure.",buttonText:"Viver minha experiência agora",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/ece77d44-3478-4c00-cb8f-073b002ed400/public"}],KE=[{images:[{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/c3cd47cc-01fa-43c8-ef2d-e57d8ba50d00/public",alt:"Cachorro surfando na piscina",loading:"lazy",label:"Le Ange Serra"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/5bdb3546-6085-40a1-059b-b977978f2800/public",alt:"Cachorro andando na borda da piscina",loading:"lazy",label:"Le Ange Serra"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/e69c27cf-cc71-4a1a-c859-7604db2ec700/public",alt:"Cachorro sentado tomando sol e sorrindo para a foto",loading:"lazy",label:"Le Ange Serra"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/f9af3c90-2ae9-4250-2ac9-afedce182000/public",alt:"2 cachorros e uma mulher no meio",loading:"lazy",label:"Le Ange Serra"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/4fe90a96-3e1a-475e-bf6c-b2f68430b400/public",alt:"Cachorro mordendo uma bolinha",loading:"lazy",label:"Le Ange Serra"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/fa931507-db19-427a-91a0-c30d8fb81800/public",alt:"Casal com um casal de cachorro sentado na beira da piscina",loading:"lazy",label:"Le Ange Serra"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/f0b0ec5f-6bd1-427d-7bc9-93253779d000/public",alt:"Mulher na cachoeira com cachorros brincando",loading:"lazy",label:"Le Ange Serra"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/82fb4467-00bc-422b-be3f-d13d0847d900/public",alt:"Mulher e cachorro na piscina sorrindo",loading:"lazy",label:"Le Ange Serra"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/3f981b12-4550-4d26-bdc6-1e3050abf600/public",alt:"3 cachorros tirando uma selfie",loading:"lazy",label:"Le Ange Serra"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/eff6d8ef-159a-46da-6fe7-0a826541f000/public",alt:"Cachorro dormindo na rede em cima da cachoeira",loading:"lazy",label:"Le Ange Serra"}]},{images:[{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/23c08875-4c8e-470d-3635-56f4cdfc1000/public",alt:"Cachorro dormindo no sofá",loading:"lazy",label:"Le Ange Serra"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a7910dc1-2d38-46fe-c997-734005e71600/public",alt:"Cachorro papai noel",loading:"lazy",label:"Le Ange Serra"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/0ba1de25-a892-4ee8-7165-584f54f0b600/public",alt:"Um cachorro no cola de um humano sorrindo",loading:"lazy",label:"Le Ange Serra"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/6da69e80-1cff-41e2-5434-318840221800/public",alt:"2 cachorros e uma mulher no meio",loading:"lazy",label:"Le Ange Serra"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/d9be2586-3341-4990-f3c8-685edcad8900/public",alt:"Cachorro na mão do tutor",loading:"lazy",label:"Le Ange Serra"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/dce2d881-18d3-4a3d-5b7e-ad7e364be300/public",alt:"2 cachorros sorrindo na rede",loading:"lazy",label:"Le Ange Serra"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/fab67883-96b6-4f10-9c94-c5622ee8b000/public",alt:"Uma mulher e um cachorro do lado dela",loading:"lazy",label:"Le Ange Serra"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/56af4858-5fbf-438f-fac3-ee527c3a4600/public",alt:"3 cachorros brincando na praia",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/db285e3c-87b7-40db-b04b-cfd384d06200/public",alt:"Cachorro andando na cachoeira",loading:"lazy",label:"Le Ange Serra"}],reverse:!0}],XE=k.section`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px){
        height: auto;
        padding: 0% 0 5% 0 ;
    }
`,QE=k.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 7vh;
    background-color: var(--color--green);
    font-family: var(--font--comfortaa);

    @media (max-width: 768px){
        height: 8vh;
        margin-bottom: 25px;
    }

    & > h1{
        font-weight: 200;
        width: 80%;
        text-align: center;
        font-size: 1.1rem;
        color: var(--color--white);

        @media (max-width: 768px){
            font-size: 1rem;
            font-weight: 400;
        }
    }
`,ZE=k.section`
    width: 100%;
    height: 80vh;
    padding: 10% 5%;
    margin-top: 10vh;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px){
        height: auto;
        padding: 10% 2.5% 0 2.5%;
        margin-top: 0;
    }
`,JE=[{image:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/bbca820c-502b-48cf-a6d6-8a4d4da25900/public",title:"Noite das pizzas",dateRange:"06/12/2024 até 08/12/2024 (3 diárias)",features:[{icon:c.jsx(re,{}),text:"07/12 - Noite das pizzas"},{icon:c.jsx(re,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(xe,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"359,20",discount:25},{image:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/79fdce4b-cea9-43ec-5c67-2235d2319a00/public",title:"Frutos do Mar",dateRange:"13/12/2024 até 15/12/2024 (2 diárias)",features:[{icon:c.jsx(re,{}),text:"14/12 - Frutos do Mar"},{icon:c.jsx(re,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(xe,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"359,20",discount:25},{image:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/58c77a3d-d9fb-422f-c84b-ad4798b74600/public",title:"Fique 4 pague 3",dateRange:"Segunda-feira a Sexta-feira",features:[{icon:c.jsx(re,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(hn,{}),text:"Até 12X SEM JUROS"},{icon:c.jsx(xe,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"538,90",discount:25},{image:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/1e2853af-cbe7-48ba-a6cc-7e36642f0f00/public",title:"Pacote de Natal",dateRange:"21/12/2024 até 25/12/2024 (4 diárias)",features:[{icon:c.jsx(re,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(hn,{}),text:"Até 12X SEM JUROS"},{icon:c.jsx(xe,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"918,40",discount:25},{image:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/70044ef4-2814-404f-5465-3e5acefd8600/public",title:"Pacoto Ano Novo",dateRange:"28/12/2024 até 01/01/2025 (4 diárias)",features:[{icon:c.jsx(re,{}),text:"31/12 - Ceia maravilhosa"},{icon:c.jsx(re,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(xe,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"1171,50",discount:25}],eP=k.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 15vh;
    margin-bottom: -10vh;

    @media (max-width: 768px){
        display: none;
    }
`,tP=[{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/c21ef88c-f22b-497e-1e70-5c5b4c4cf500/public",text:"Suíte Superior 1",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/23d18593-f941-4c65-0349-6b23e6ea2800/public",text:"Suíte Superior 2",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/99db9a7b-dafd-4b04-36ce-c4eac6880600/public",text:"Suíte Superior 3",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/d07d16a0-e7f4-4104-7d5e-f7e4c2dfa500/public",text:"Suíte Standard 4",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/fd429f81-a091-4ca3-9f54-d4a1b730e200/public",text:"Suíte Standard 5",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a22d76b9-b7d4-4174-0cc1-4cfdfd57d500/public",text:"Suíte Master 6",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a7ae1bee-6f60-4584-d03c-0aebd06a2600/public",text:"Suíte Superior 7",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/4c448474-8a7b-489b-ac5f-7b11c4dfad00/public",text:"Suíte Standard 8",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/509535a4-9291-44a8-c250-5e8be0b28e00/public",text:"Suíte Superior 9",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/853f4009-5ddc-49ad-717f-3d49d3ad4900/public",text:"Suíte Master 10",loading:"lazy"}],nP=()=>(j.useEffect(()=>{Ie.init({duration:1e3,once:!1}),Ie.refresh()},[]),c.jsxs(c.Fragment,{children:[c.jsx(In,{children:c.jsx("title",{children:"Le Ange Serra - Pousada Le Ange"})}),c.jsx(HE,{}),c.jsx(Nn,{}),c.jsxs(UE,{children:[c.jsx(WE,{"data-aos":"zoom-in","data-aos-delay":"100"}),c.jsxs(qE,{children:[c.jsx("h4",{"data-aos":"fade-up","data-aos-delay":"100",children:"Conheça a Le Ange Serra, a pousada mais"}),c.jsxs("h1",{"data-aos":"fade-down","data-aos-delay":"200",children:["PET FRIENDLY",c.jsx("br",{})," DO ",c.jsx("b",{children:"BRASIL"})]}),c.jsx("p",{children:"Aqui você e o seu pet, são mais do que bem-vindos!"}),c.jsx(wr,{text:"Reservar agora!",textColor:"var(--color--black)",backgroundColor:"transparent",borderColor:"var(--color--black)",hoverBackgroundColor:"var(--color--green)",hoverBorderColor:"var(--color--green)",hoverColor:"var(--color--white)",hoverIconColor:"var(--color--white)",onClick:()=>window.open("https://wa.link/dojlwi","_blank")})]})]}),c.jsx(QE,{"data-aos":"fade-up","data-aos-delay":"200",children:c.jsx("h1",{"data-aos":"fade-in","data-aos-delay":"400",children:"LeAnge Serra | Miguel Pereira RJ"})}),c.jsx(XE,{children:c.jsx(Vl,{slides:YE})}),c.jsx(Jy,{images:tP,"data-aos":"fade-up","data-aos-delay":"200"}),c.jsx(Nl,{}),c.jsx($l,{carousels:KE}),c.jsx(eP,{children:c.jsx(dt,{text:"Fazer minha reserva!",onClick:()=>window.open("https://wa.link/dojlwi","_blank")})}),c.jsx(ZE,{children:c.jsx(vo,{events:JE})}),c.jsx(Fl,{}),c.jsx(yr,{})]}));function rP(){const{pathname:e}=mn();return j.useEffect(()=>{window.scrollTo(0,0)},[e]),null}function iP(){const e=mn();return c.jsxs(c.Fragment,{children:[c.jsx(rP,{}),c.jsx(Z3,{children:c.jsxs(x4,{location:e,children:[c.jsx(rn,{path:"/",element:c.jsx(Le.div,{initial:{opacity:0,scale:.8,rotateY:90},animate:{opacity:1,scale:1,rotateY:0},exit:{opacity:0,scale:.8,rotateY:-90},transition:{duration:.2,ease:"easeInOut"},children:c.jsx(Qk,{})})}),c.jsx(rn,{path:"/sobre",element:c.jsx(Le.div,{initial:{opacity:0,scale:.8,rotateY:90},animate:{opacity:1,scale:1,rotateY:0},exit:{opacity:0,scale:.8,rotateY:-90},transition:{duration:.2,ease:"easeInOut"},children:c.jsx(PT,{})})}),c.jsx(rn,{path:"/mar",element:c.jsx(Le.div,{initial:{opacity:0,scale:.8,rotateY:90},animate:{opacity:1,scale:1,rotateY:0},exit:{opacity:0,scale:.8,rotateY:-90},transition:{duration:.2,ease:"easeInOut"},children:c.jsx(TA,{})})}),c.jsx(rn,{path:"/serra",element:c.jsx(Le.div,{initial:{opacity:0,scale:.8,rotateY:90},animate:{opacity:1,scale:1,rotateY:0},exit:{opacity:0,scale:.8,rotateY:-90},transition:{duration:.2,ease:"easeInOut"},children:c.jsx(dA,{})})}),c.jsx(rn,{path:"/event",element:c.jsx(Le.div,{initial:{opacity:0,scale:.8,rotateY:90},animate:{opacity:1,scale:1,rotateY:0},exit:{opacity:0,scale:.8,rotateY:-90},transition:{duration:.2,ease:"easeInOut"},children:c.jsx(yT,{})})}),c.jsx(rn,{path:"/acomodaMar",element:c.jsx(Le.div,{initial:{opacity:0,scale:.8,rotateY:90},animate:{opacity:1,scale:1,rotateY:0},exit:{opacity:0,scale:.8,rotateY:-90},transition:{duration:.2,ease:"easeInOut"},children:c.jsx(GE,{})})}),c.jsx(rn,{path:"/acomodaSerra",element:c.jsx(Le.div,{initial:{opacity:0,scale:.8,rotateY:90},animate:{opacity:1,scale:1,rotateY:0},exit:{opacity:0,scale:.8,rotateY:-90},transition:{duration:.2,ease:"easeInOut"},children:c.jsx(fE,{})})}),c.jsx(rn,{path:"/lpSerra",element:c.jsx(Le.div,{initial:{opacity:0,scale:.8,rotateY:90},animate:{opacity:1,scale:1,rotateY:0},exit:{opacity:0,scale:.8,rotateY:-90},transition:{duration:.2,ease:"easeInOut"},children:c.jsx(nP,{})})}),c.jsx(rn,{path:"/lpMar",element:c.jsx(Le.div,{initial:{opacity:0,scale:.8,rotateY:90},animate:{opacity:1,scale:1,rotateY:0},exit:{opacity:0,scale:.8,rotateY:-90},transition:{duration:.2,ease:"easeInOut"},children:c.jsx(BE,{})})})]},e.pathname)})]})}function aP(){const e=mn(),n=["/lpMar","/lpSerra"].includes(e.pathname);return c.jsxs(c.Fragment,{children:[!n&&c.jsx(IA,{}),c.jsx(iP,{})]})}function oP(){return c.jsx(k4,{children:c.jsx(aP,{})})}lv(document.getElementById("root")).render(c.jsx(j.StrictMode,{children:c.jsx(oP,{})}));
