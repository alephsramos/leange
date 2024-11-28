function r2(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const a=Object.getOwnPropertyDescriptor(r,i);a&&Object.defineProperty(e,i,a.get?a:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();var K0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Hr(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var X0={exports:{}},ol={},Q0={exports:{}},ie={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oo=Symbol.for("react.element"),i2=Symbol.for("react.portal"),a2=Symbol.for("react.fragment"),o2=Symbol.for("react.strict_mode"),s2=Symbol.for("react.profiler"),l2=Symbol.for("react.provider"),c2=Symbol.for("react.context"),u2=Symbol.for("react.forward_ref"),d2=Symbol.for("react.suspense"),p2=Symbol.for("react.memo"),f2=Symbol.for("react.lazy"),bf=Symbol.iterator;function h2(e){return e===null||typeof e!="object"?null:(e=bf&&e[bf]||e["@@iterator"],typeof e=="function"?e:null)}var Z0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},J0=Object.assign,eg={};function qi(e,t,n){this.props=e,this.context=t,this.refs=eg,this.updater=n||Z0}qi.prototype.isReactComponent={};qi.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};qi.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function tg(){}tg.prototype=qi.prototype;function _d(e,t,n){this.props=e,this.context=t,this.refs=eg,this.updater=n||Z0}var Td=_d.prototype=new tg;Td.constructor=_d;J0(Td,qi.prototype);Td.isPureReactComponent=!0;var Sf=Array.isArray,ng=Object.prototype.hasOwnProperty,Cd={current:null},rg={key:!0,ref:!0,__self:!0,__source:!0};function ig(e,t,n){var r,i={},a=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(a=""+t.key),t)ng.call(t,r)&&!rg.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:oo,type:e,key:a,ref:o,props:i,_owner:Cd.current}}function m2(e,t){return{$$typeof:oo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ed(e){return typeof e=="object"&&e!==null&&e.$$typeof===oo}function g2(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var kf=/\/+/g;function Yl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?g2(""+e.key):t.toString(36)}function Uo(e,t,n,r,i){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(a){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case oo:case i2:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+Yl(o,0):r,Sf(i)?(n="",e!=null&&(n=e.replace(kf,"$&/")+"/"),Uo(i,t,n,"",function(u){return u})):i!=null&&(Ed(i)&&(i=m2(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(kf,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",Sf(e))for(var s=0;s<e.length;s++){a=e[s];var l=r+Yl(a,s);o+=Uo(a,t,n,l,i)}else if(l=h2(e),typeof l=="function")for(e=l.call(e),s=0;!(a=e.next()).done;)a=a.value,l=r+Yl(a,s++),o+=Uo(a,t,n,l,i);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function xo(e,t,n){if(e==null)return e;var r=[],i=0;return Uo(e,r,"","",function(a){return t.call(n,a,i++)}),r}function v2(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var pt={current:null},Wo={transition:null},x2={ReactCurrentDispatcher:pt,ReactCurrentBatchConfig:Wo,ReactCurrentOwner:Cd};function ag(){throw Error("act(...) is not supported in production builds of React.")}ie.Children={map:xo,forEach:function(e,t,n){xo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return xo(e,function(){t++}),t},toArray:function(e){return xo(e,function(t){return t})||[]},only:function(e){if(!Ed(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ie.Component=qi;ie.Fragment=a2;ie.Profiler=s2;ie.PureComponent=_d;ie.StrictMode=o2;ie.Suspense=d2;ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=x2;ie.act=ag;ie.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=J0({},e.props),i=e.key,a=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,o=Cd.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)ng.call(t,l)&&!rg.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){s=Array(l);for(var u=0;u<l;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:oo,type:e.type,key:i,ref:a,props:r,_owner:o}};ie.createContext=function(e){return e={$$typeof:c2,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:l2,_context:e},e.Consumer=e};ie.createElement=ig;ie.createFactory=function(e){var t=ig.bind(null,e);return t.type=e,t};ie.createRef=function(){return{current:null}};ie.forwardRef=function(e){return{$$typeof:u2,render:e}};ie.isValidElement=Ed;ie.lazy=function(e){return{$$typeof:f2,_payload:{_status:-1,_result:e},_init:v2}};ie.memo=function(e,t){return{$$typeof:p2,type:e,compare:t===void 0?null:t}};ie.startTransition=function(e){var t=Wo.transition;Wo.transition={};try{e()}finally{Wo.transition=t}};ie.unstable_act=ag;ie.useCallback=function(e,t){return pt.current.useCallback(e,t)};ie.useContext=function(e){return pt.current.useContext(e)};ie.useDebugValue=function(){};ie.useDeferredValue=function(e){return pt.current.useDeferredValue(e)};ie.useEffect=function(e,t){return pt.current.useEffect(e,t)};ie.useId=function(){return pt.current.useId()};ie.useImperativeHandle=function(e,t,n){return pt.current.useImperativeHandle(e,t,n)};ie.useInsertionEffect=function(e,t){return pt.current.useInsertionEffect(e,t)};ie.useLayoutEffect=function(e,t){return pt.current.useLayoutEffect(e,t)};ie.useMemo=function(e,t){return pt.current.useMemo(e,t)};ie.useReducer=function(e,t,n){return pt.current.useReducer(e,t,n)};ie.useRef=function(e){return pt.current.useRef(e)};ie.useState=function(e){return pt.current.useState(e)};ie.useSyncExternalStore=function(e,t,n){return pt.current.useSyncExternalStore(e,t,n)};ie.useTransition=function(){return pt.current.useTransition()};ie.version="18.3.1";Q0.exports=ie;var k=Q0.exports;const J=Hr(k),y2=r2({__proto__:null,default:J},[k]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var w2=k,b2=Symbol.for("react.element"),S2=Symbol.for("react.fragment"),k2=Object.prototype.hasOwnProperty,j2=w2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,_2={key:!0,ref:!0,__self:!0,__source:!0};function og(e,t,n){var r,i={},a=null,o=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)k2.call(t,r)&&!_2.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:b2,type:e,key:a,ref:o,props:i,_owner:j2.current}}ol.Fragment=S2;ol.jsx=og;ol.jsxs=og;X0.exports=ol;var c=X0.exports,sg={exports:{}},Et={},lg={exports:{}},cg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(L,N){var B=L.length;L.push(N);e:for(;0<B;){var K=B-1>>>1,Z=L[K];if(0<i(Z,N))L[K]=N,L[B]=Z,B=K;else break e}}function n(L){return L.length===0?null:L[0]}function r(L){if(L.length===0)return null;var N=L[0],B=L.pop();if(B!==N){L[0]=B;e:for(var K=0,Z=L.length,we=Z>>>1;K<we;){var he=2*(K+1)-1,_e=L[he],pe=he+1,ce=L[pe];if(0>i(_e,B))pe<Z&&0>i(ce,_e)?(L[K]=ce,L[pe]=B,K=pe):(L[K]=_e,L[he]=B,K=he);else if(pe<Z&&0>i(ce,B))L[K]=ce,L[pe]=B,K=pe;else break e}}return N}function i(L,N){var B=L.sortIndex-N.sortIndex;return B!==0?B:L.id-N.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var l=[],u=[],d=1,p=null,f=3,g=!1,x=!1,y=!1,b=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(L){for(var N=n(u);N!==null;){if(N.callback===null)r(u);else if(N.startTime<=L)r(u),N.sortIndex=N.expirationTime,t(l,N);else break;N=n(u)}}function w(L){if(y=!1,m(L),!x)if(n(l)!==null)x=!0,Q(S);else{var N=n(u);N!==null&&Y(w,N.startTime-L)}}function S(L,N){x=!1,y&&(y=!1,v(T),T=-1),g=!0;var B=f;try{for(m(N),p=n(l);p!==null&&(!(p.expirationTime>N)||L&&!P());){var K=p.callback;if(typeof K=="function"){p.callback=null,f=p.priorityLevel;var Z=K(p.expirationTime<=N);N=e.unstable_now(),typeof Z=="function"?p.callback=Z:p===n(l)&&r(l),m(N)}else r(l);p=n(l)}if(p!==null)var we=!0;else{var he=n(u);he!==null&&Y(w,he.startTime-N),we=!1}return we}finally{p=null,f=B,g=!1}}var j=!1,C=null,T=-1,A=5,E=-1;function P(){return!(e.unstable_now()-E<A)}function M(){if(C!==null){var L=e.unstable_now();E=L;var N=!0;try{N=C(!0,L)}finally{N?R():(j=!1,C=null)}}else j=!1}var R;if(typeof h=="function")R=function(){h(M)};else if(typeof MessageChannel<"u"){var D=new MessageChannel,U=D.port2;D.port1.onmessage=M,R=function(){U.postMessage(null)}}else R=function(){b(M,0)};function Q(L){C=L,j||(j=!0,R())}function Y(L,N){T=b(function(){L(e.unstable_now())},N)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(L){L.callback=null},e.unstable_continueExecution=function(){x||g||(x=!0,Q(S))},e.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<L?Math.floor(1e3/L):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(L){switch(f){case 1:case 2:case 3:var N=3;break;default:N=f}var B=f;f=N;try{return L()}finally{f=B}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(L,N){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var B=f;f=L;try{return N()}finally{f=B}},e.unstable_scheduleCallback=function(L,N,B){var K=e.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?K+B:K):B=K,L){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=B+Z,L={id:d++,callback:N,priorityLevel:L,startTime:B,expirationTime:Z,sortIndex:-1},B>K?(L.sortIndex=B,t(u,L),n(l)===null&&L===n(u)&&(y?(v(T),T=-1):y=!0,Y(w,B-K))):(L.sortIndex=Z,t(l,L),x||g||(x=!0,Q(S))),L},e.unstable_shouldYield=P,e.unstable_wrapCallback=function(L){var N=f;return function(){var B=f;f=N;try{return L.apply(this,arguments)}finally{f=B}}}})(cg);lg.exports=cg;var T2=lg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var C2=k,Tt=T2;function F(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ug=new Set,Ia={};function Ur(e,t){Ei(e,t),Ei(e+"Capture",t)}function Ei(e,t){for(Ia[e]=t,e=0;e<t.length;e++)ug.add(t[e])}var Mn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xc=Object.prototype.hasOwnProperty,E2=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,jf={},_f={};function P2(e){return Xc.call(_f,e)?!0:Xc.call(jf,e)?!1:E2.test(e)?_f[e]=!0:(jf[e]=!0,!1)}function z2(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function A2(e,t,n,r){if(t===null||typeof t>"u"||z2(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ft(e,t,n,r,i,a,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var et={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){et[e]=new ft(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];et[t]=new ft(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){et[e]=new ft(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){et[e]=new ft(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){et[e]=new ft(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){et[e]=new ft(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){et[e]=new ft(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){et[e]=new ft(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){et[e]=new ft(e,5,!1,e.toLowerCase(),null,!1,!1)});var Pd=/[\-:]([a-z])/g;function zd(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Pd,zd);et[t]=new ft(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Pd,zd);et[t]=new ft(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Pd,zd);et[t]=new ft(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){et[e]=new ft(e,1,!1,e.toLowerCase(),null,!1,!1)});et.xlinkHref=new ft("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){et[e]=new ft(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ad(e,t,n,r){var i=et.hasOwnProperty(t)?et[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(A2(t,n,i,r)&&(n=null),r||i===null?P2(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Dn=C2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,yo=Symbol.for("react.element"),ti=Symbol.for("react.portal"),ni=Symbol.for("react.fragment"),Md=Symbol.for("react.strict_mode"),Qc=Symbol.for("react.profiler"),dg=Symbol.for("react.provider"),pg=Symbol.for("react.context"),Ld=Symbol.for("react.forward_ref"),Zc=Symbol.for("react.suspense"),Jc=Symbol.for("react.suspense_list"),Od=Symbol.for("react.memo"),Un=Symbol.for("react.lazy"),fg=Symbol.for("react.offscreen"),Tf=Symbol.iterator;function Ji(e){return e===null||typeof e!="object"?null:(e=Tf&&e[Tf]||e["@@iterator"],typeof e=="function"?e:null)}var ze=Object.assign,Kl;function pa(e){if(Kl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Kl=t&&t[1]||""}return`
`+Kl+e}var Xl=!1;function Ql(e,t){if(!e||Xl)return"";Xl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),a=r.stack.split(`
`),o=i.length-1,s=a.length-1;1<=o&&0<=s&&i[o]!==a[s];)s--;for(;1<=o&&0<=s;o--,s--)if(i[o]!==a[s]){if(o!==1||s!==1)do if(o--,s--,0>s||i[o]!==a[s]){var l=`
`+i[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=o&&0<=s);break}}}finally{Xl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?pa(e):""}function M2(e){switch(e.tag){case 5:return pa(e.type);case 16:return pa("Lazy");case 13:return pa("Suspense");case 19:return pa("SuspenseList");case 0:case 2:case 15:return e=Ql(e.type,!1),e;case 11:return e=Ql(e.type.render,!1),e;case 1:return e=Ql(e.type,!0),e;default:return""}}function eu(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ni:return"Fragment";case ti:return"Portal";case Qc:return"Profiler";case Md:return"StrictMode";case Zc:return"Suspense";case Jc:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case pg:return(e.displayName||"Context")+".Consumer";case dg:return(e._context.displayName||"Context")+".Provider";case Ld:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Od:return t=e.displayName||null,t!==null?t:eu(e.type)||"Memo";case Un:t=e._payload,e=e._init;try{return eu(e(t))}catch{}}return null}function L2(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return eu(t);case 8:return t===Md?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function cr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function hg(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function O2(e){var t=hg(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,a.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function wo(e){e._valueTracker||(e._valueTracker=O2(e))}function mg(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=hg(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ms(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function tu(e,t){var n=t.checked;return ze({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Cf(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=cr(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function gg(e,t){t=t.checked,t!=null&&Ad(e,"checked",t,!1)}function nu(e,t){gg(e,t);var n=cr(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ru(e,t.type,n):t.hasOwnProperty("defaultValue")&&ru(e,t.type,cr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ef(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ru(e,t,n){(t!=="number"||ms(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var fa=Array.isArray;function yi(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+cr(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function iu(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(F(91));return ze({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Pf(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(F(92));if(fa(n)){if(1<n.length)throw Error(F(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:cr(n)}}function vg(e,t){var n=cr(t.value),r=cr(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function zf(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function xg(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function au(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?xg(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var bo,yg=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(bo=bo||document.createElement("div"),bo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=bo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ra(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ya={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},I2=["Webkit","ms","Moz","O"];Object.keys(ya).forEach(function(e){I2.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ya[t]=ya[e]})});function wg(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ya.hasOwnProperty(e)&&ya[e]?(""+t).trim():t+"px"}function bg(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=wg(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var R2=ze({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ou(e,t){if(t){if(R2[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(F(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(F(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(F(61))}if(t.style!=null&&typeof t.style!="object")throw Error(F(62))}}function su(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var lu=null;function Id(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var cu=null,wi=null,bi=null;function Af(e){if(e=co(e)){if(typeof cu!="function")throw Error(F(280));var t=e.stateNode;t&&(t=dl(t),cu(e.stateNode,e.type,t))}}function Sg(e){wi?bi?bi.push(e):bi=[e]:wi=e}function kg(){if(wi){var e=wi,t=bi;if(bi=wi=null,Af(e),t)for(e=0;e<t.length;e++)Af(t[e])}}function jg(e,t){return e(t)}function _g(){}var Zl=!1;function Tg(e,t,n){if(Zl)return e(t,n);Zl=!0;try{return jg(e,t,n)}finally{Zl=!1,(wi!==null||bi!==null)&&(_g(),kg())}}function Da(e,t){var n=e.stateNode;if(n===null)return null;var r=dl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(F(231,t,typeof n));return n}var uu=!1;if(Mn)try{var ea={};Object.defineProperty(ea,"passive",{get:function(){uu=!0}}),window.addEventListener("test",ea,ea),window.removeEventListener("test",ea,ea)}catch{uu=!1}function D2(e,t,n,r,i,a,o,s,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var wa=!1,gs=null,vs=!1,du=null,V2={onError:function(e){wa=!0,gs=e}};function N2(e,t,n,r,i,a,o,s,l){wa=!1,gs=null,D2.apply(V2,arguments)}function F2(e,t,n,r,i,a,o,s,l){if(N2.apply(this,arguments),wa){if(wa){var u=gs;wa=!1,gs=null}else throw Error(F(198));vs||(vs=!0,du=u)}}function Wr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Cg(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Mf(e){if(Wr(e)!==e)throw Error(F(188))}function $2(e){var t=e.alternate;if(!t){if(t=Wr(e),t===null)throw Error(F(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return Mf(i),e;if(a===r)return Mf(i),t;a=a.sibling}throw Error(F(188))}if(n.return!==r.return)n=i,r=a;else{for(var o=!1,s=i.child;s;){if(s===n){o=!0,n=i,r=a;break}if(s===r){o=!0,r=i,n=a;break}s=s.sibling}if(!o){for(s=a.child;s;){if(s===n){o=!0,n=a,r=i;break}if(s===r){o=!0,r=a,n=i;break}s=s.sibling}if(!o)throw Error(F(189))}}if(n.alternate!==r)throw Error(F(190))}if(n.tag!==3)throw Error(F(188));return n.stateNode.current===n?e:t}function Eg(e){return e=$2(e),e!==null?Pg(e):null}function Pg(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Pg(e);if(t!==null)return t;e=e.sibling}return null}var zg=Tt.unstable_scheduleCallback,Lf=Tt.unstable_cancelCallback,B2=Tt.unstable_shouldYield,q2=Tt.unstable_requestPaint,Ie=Tt.unstable_now,H2=Tt.unstable_getCurrentPriorityLevel,Rd=Tt.unstable_ImmediatePriority,Ag=Tt.unstable_UserBlockingPriority,xs=Tt.unstable_NormalPriority,U2=Tt.unstable_LowPriority,Mg=Tt.unstable_IdlePriority,sl=null,un=null;function W2(e){if(un&&typeof un.onCommitFiberRoot=="function")try{un.onCommitFiberRoot(sl,e,void 0,(e.current.flags&128)===128)}catch{}}var Yt=Math.clz32?Math.clz32:K2,G2=Math.log,Y2=Math.LN2;function K2(e){return e>>>=0,e===0?32:31-(G2(e)/Y2|0)|0}var So=64,ko=4194304;function ha(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ys(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,o=n&268435455;if(o!==0){var s=o&~i;s!==0?r=ha(s):(a&=o,a!==0&&(r=ha(a)))}else o=n&~i,o!==0?r=ha(o):a!==0&&(r=ha(a));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,a=t&-t,i>=a||i===16&&(a&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Yt(t),i=1<<n,r|=e[n],t&=~i;return r}function X2(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Q2(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-Yt(a),s=1<<o,l=i[o];l===-1?(!(s&n)||s&r)&&(i[o]=X2(s,t)):l<=t&&(e.expiredLanes|=s),a&=~s}}function pu(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Lg(){var e=So;return So<<=1,!(So&4194240)&&(So=64),e}function Jl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function so(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Yt(t),e[t]=n}function Z2(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Yt(n),a=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~a}}function Dd(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Yt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var de=0;function Og(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ig,Vd,Rg,Dg,Vg,fu=!1,jo=[],Jn=null,er=null,tr=null,Va=new Map,Na=new Map,Gn=[],J2="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Of(e,t){switch(e){case"focusin":case"focusout":Jn=null;break;case"dragenter":case"dragleave":er=null;break;case"mouseover":case"mouseout":tr=null;break;case"pointerover":case"pointerout":Va.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Na.delete(t.pointerId)}}function ta(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=co(t),t!==null&&Vd(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function ew(e,t,n,r,i){switch(t){case"focusin":return Jn=ta(Jn,e,t,n,r,i),!0;case"dragenter":return er=ta(er,e,t,n,r,i),!0;case"mouseover":return tr=ta(tr,e,t,n,r,i),!0;case"pointerover":var a=i.pointerId;return Va.set(a,ta(Va.get(a)||null,e,t,n,r,i)),!0;case"gotpointercapture":return a=i.pointerId,Na.set(a,ta(Na.get(a)||null,e,t,n,r,i)),!0}return!1}function Ng(e){var t=Cr(e.target);if(t!==null){var n=Wr(t);if(n!==null){if(t=n.tag,t===13){if(t=Cg(n),t!==null){e.blockedOn=t,Vg(e.priority,function(){Rg(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Go(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=hu(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);lu=r,n.target.dispatchEvent(r),lu=null}else return t=co(n),t!==null&&Vd(t),e.blockedOn=n,!1;t.shift()}return!0}function If(e,t,n){Go(e)&&n.delete(t)}function tw(){fu=!1,Jn!==null&&Go(Jn)&&(Jn=null),er!==null&&Go(er)&&(er=null),tr!==null&&Go(tr)&&(tr=null),Va.forEach(If),Na.forEach(If)}function na(e,t){e.blockedOn===t&&(e.blockedOn=null,fu||(fu=!0,Tt.unstable_scheduleCallback(Tt.unstable_NormalPriority,tw)))}function Fa(e){function t(i){return na(i,e)}if(0<jo.length){na(jo[0],e);for(var n=1;n<jo.length;n++){var r=jo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Jn!==null&&na(Jn,e),er!==null&&na(er,e),tr!==null&&na(tr,e),Va.forEach(t),Na.forEach(t),n=0;n<Gn.length;n++)r=Gn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Gn.length&&(n=Gn[0],n.blockedOn===null);)Ng(n),n.blockedOn===null&&Gn.shift()}var Si=Dn.ReactCurrentBatchConfig,ws=!0;function nw(e,t,n,r){var i=de,a=Si.transition;Si.transition=null;try{de=1,Nd(e,t,n,r)}finally{de=i,Si.transition=a}}function rw(e,t,n,r){var i=de,a=Si.transition;Si.transition=null;try{de=4,Nd(e,t,n,r)}finally{de=i,Si.transition=a}}function Nd(e,t,n,r){if(ws){var i=hu(e,t,n,r);if(i===null)cc(e,t,r,bs,n),Of(e,r);else if(ew(i,e,t,n,r))r.stopPropagation();else if(Of(e,r),t&4&&-1<J2.indexOf(e)){for(;i!==null;){var a=co(i);if(a!==null&&Ig(a),a=hu(e,t,n,r),a===null&&cc(e,t,r,bs,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else cc(e,t,r,null,n)}}var bs=null;function hu(e,t,n,r){if(bs=null,e=Id(r),e=Cr(e),e!==null)if(t=Wr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Cg(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return bs=e,null}function Fg(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(H2()){case Rd:return 1;case Ag:return 4;case xs:case U2:return 16;case Mg:return 536870912;default:return 16}default:return 16}}var Kn=null,Fd=null,Yo=null;function $g(){if(Yo)return Yo;var e,t=Fd,n=t.length,r,i="value"in Kn?Kn.value:Kn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return Yo=i.slice(e,1<r?1-r:void 0)}function Ko(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function _o(){return!0}function Rf(){return!1}function Pt(e){function t(n,r,i,a,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=a,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(a):a[s]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?_o:Rf,this.isPropagationStopped=Rf,this}return ze(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=_o)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=_o)},persist:function(){},isPersistent:_o}),t}var Hi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$d=Pt(Hi),lo=ze({},Hi,{view:0,detail:0}),iw=Pt(lo),ec,tc,ra,ll=ze({},lo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bd,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ra&&(ra&&e.type==="mousemove"?(ec=e.screenX-ra.screenX,tc=e.screenY-ra.screenY):tc=ec=0,ra=e),ec)},movementY:function(e){return"movementY"in e?e.movementY:tc}}),Df=Pt(ll),aw=ze({},ll,{dataTransfer:0}),ow=Pt(aw),sw=ze({},lo,{relatedTarget:0}),nc=Pt(sw),lw=ze({},Hi,{animationName:0,elapsedTime:0,pseudoElement:0}),cw=Pt(lw),uw=ze({},Hi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),dw=Pt(uw),pw=ze({},Hi,{data:0}),Vf=Pt(pw),fw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},hw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},mw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gw(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=mw[e])?!!t[e]:!1}function Bd(){return gw}var vw=ze({},lo,{key:function(e){if(e.key){var t=fw[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ko(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?hw[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bd,charCode:function(e){return e.type==="keypress"?Ko(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ko(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),xw=Pt(vw),yw=ze({},ll,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Nf=Pt(yw),ww=ze({},lo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bd}),bw=Pt(ww),Sw=ze({},Hi,{propertyName:0,elapsedTime:0,pseudoElement:0}),kw=Pt(Sw),jw=ze({},ll,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),_w=Pt(jw),Tw=[9,13,27,32],qd=Mn&&"CompositionEvent"in window,ba=null;Mn&&"documentMode"in document&&(ba=document.documentMode);var Cw=Mn&&"TextEvent"in window&&!ba,Bg=Mn&&(!qd||ba&&8<ba&&11>=ba),Ff=" ",$f=!1;function qg(e,t){switch(e){case"keyup":return Tw.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hg(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ri=!1;function Ew(e,t){switch(e){case"compositionend":return Hg(t);case"keypress":return t.which!==32?null:($f=!0,Ff);case"textInput":return e=t.data,e===Ff&&$f?null:e;default:return null}}function Pw(e,t){if(ri)return e==="compositionend"||!qd&&qg(e,t)?(e=$g(),Yo=Fd=Kn=null,ri=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Bg&&t.locale!=="ko"?null:t.data;default:return null}}var zw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!zw[e.type]:t==="textarea"}function Ug(e,t,n,r){Sg(r),t=Ss(t,"onChange"),0<t.length&&(n=new $d("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Sa=null,$a=null;function Aw(e){n1(e,0)}function cl(e){var t=oi(e);if(mg(t))return e}function Mw(e,t){if(e==="change")return t}var Wg=!1;if(Mn){var rc;if(Mn){var ic="oninput"in document;if(!ic){var qf=document.createElement("div");qf.setAttribute("oninput","return;"),ic=typeof qf.oninput=="function"}rc=ic}else rc=!1;Wg=rc&&(!document.documentMode||9<document.documentMode)}function Hf(){Sa&&(Sa.detachEvent("onpropertychange",Gg),$a=Sa=null)}function Gg(e){if(e.propertyName==="value"&&cl($a)){var t=[];Ug(t,$a,e,Id(e)),Tg(Aw,t)}}function Lw(e,t,n){e==="focusin"?(Hf(),Sa=t,$a=n,Sa.attachEvent("onpropertychange",Gg)):e==="focusout"&&Hf()}function Ow(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return cl($a)}function Iw(e,t){if(e==="click")return cl(t)}function Rw(e,t){if(e==="input"||e==="change")return cl(t)}function Dw(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Qt=typeof Object.is=="function"?Object.is:Dw;function Ba(e,t){if(Qt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Xc.call(t,i)||!Qt(e[i],t[i]))return!1}return!0}function Uf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Wf(e,t){var n=Uf(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Uf(n)}}function Yg(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Yg(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Kg(){for(var e=window,t=ms();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ms(e.document)}return t}function Hd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Vw(e){var t=Kg(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Yg(n.ownerDocument.documentElement,n)){if(r!==null&&Hd(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=r.end===void 0?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=Wf(n,a);var o=Wf(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Nw=Mn&&"documentMode"in document&&11>=document.documentMode,ii=null,mu=null,ka=null,gu=!1;function Gf(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;gu||ii==null||ii!==ms(r)||(r=ii,"selectionStart"in r&&Hd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ka&&Ba(ka,r)||(ka=r,r=Ss(mu,"onSelect"),0<r.length&&(t=new $d("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=ii)))}function To(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ai={animationend:To("Animation","AnimationEnd"),animationiteration:To("Animation","AnimationIteration"),animationstart:To("Animation","AnimationStart"),transitionend:To("Transition","TransitionEnd")},ac={},Xg={};Mn&&(Xg=document.createElement("div").style,"AnimationEvent"in window||(delete ai.animationend.animation,delete ai.animationiteration.animation,delete ai.animationstart.animation),"TransitionEvent"in window||delete ai.transitionend.transition);function ul(e){if(ac[e])return ac[e];if(!ai[e])return e;var t=ai[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Xg)return ac[e]=t[n];return e}var Qg=ul("animationend"),Zg=ul("animationiteration"),Jg=ul("animationstart"),e1=ul("transitionend"),t1=new Map,Yf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function fr(e,t){t1.set(e,t),Ur(t,[e])}for(var oc=0;oc<Yf.length;oc++){var sc=Yf[oc],Fw=sc.toLowerCase(),$w=sc[0].toUpperCase()+sc.slice(1);fr(Fw,"on"+$w)}fr(Qg,"onAnimationEnd");fr(Zg,"onAnimationIteration");fr(Jg,"onAnimationStart");fr("dblclick","onDoubleClick");fr("focusin","onFocus");fr("focusout","onBlur");fr(e1,"onTransitionEnd");Ei("onMouseEnter",["mouseout","mouseover"]);Ei("onMouseLeave",["mouseout","mouseover"]);Ei("onPointerEnter",["pointerout","pointerover"]);Ei("onPointerLeave",["pointerout","pointerover"]);Ur("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ur("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ur("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ur("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ur("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ur("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ma="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Bw=new Set("cancel close invalid load scroll toggle".split(" ").concat(ma));function Kf(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,F2(r,t,void 0,e),e.currentTarget=null}function n1(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==a&&i.isPropagationStopped())break e;Kf(i,s,u),a=l}else for(o=0;o<r.length;o++){if(s=r[o],l=s.instance,u=s.currentTarget,s=s.listener,l!==a&&i.isPropagationStopped())break e;Kf(i,s,u),a=l}}}if(vs)throw e=du,vs=!1,du=null,e}function ge(e,t){var n=t[bu];n===void 0&&(n=t[bu]=new Set);var r=e+"__bubble";n.has(r)||(r1(t,e,2,!1),n.add(r))}function lc(e,t,n){var r=0;t&&(r|=4),r1(n,e,r,t)}var Co="_reactListening"+Math.random().toString(36).slice(2);function qa(e){if(!e[Co]){e[Co]=!0,ug.forEach(function(n){n!=="selectionchange"&&(Bw.has(n)||lc(n,!1,e),lc(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Co]||(t[Co]=!0,lc("selectionchange",!1,t))}}function r1(e,t,n,r){switch(Fg(t)){case 1:var i=nw;break;case 4:i=rw;break;default:i=Nd}n=i.bind(null,t,n,e),i=void 0,!uu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function cc(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;s!==null;){if(o=Cr(s),o===null)return;if(l=o.tag,l===5||l===6){r=a=o;continue e}s=s.parentNode}}r=r.return}Tg(function(){var u=a,d=Id(n),p=[];e:{var f=t1.get(e);if(f!==void 0){var g=$d,x=e;switch(e){case"keypress":if(Ko(n)===0)break e;case"keydown":case"keyup":g=xw;break;case"focusin":x="focus",g=nc;break;case"focusout":x="blur",g=nc;break;case"beforeblur":case"afterblur":g=nc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Df;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=ow;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=bw;break;case Qg:case Zg:case Jg:g=cw;break;case e1:g=kw;break;case"scroll":g=iw;break;case"wheel":g=_w;break;case"copy":case"cut":case"paste":g=dw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Nf}var y=(t&4)!==0,b=!y&&e==="scroll",v=y?f!==null?f+"Capture":null:f;y=[];for(var h=u,m;h!==null;){m=h;var w=m.stateNode;if(m.tag===5&&w!==null&&(m=w,v!==null&&(w=Da(h,v),w!=null&&y.push(Ha(h,w,m)))),b)break;h=h.return}0<y.length&&(f=new g(f,x,null,n,d),p.push({event:f,listeners:y}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",f&&n!==lu&&(x=n.relatedTarget||n.fromElement)&&(Cr(x)||x[Ln]))break e;if((g||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,g?(x=n.relatedTarget||n.toElement,g=u,x=x?Cr(x):null,x!==null&&(b=Wr(x),x!==b||x.tag!==5&&x.tag!==6)&&(x=null)):(g=null,x=u),g!==x)){if(y=Df,w="onMouseLeave",v="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(y=Nf,w="onPointerLeave",v="onPointerEnter",h="pointer"),b=g==null?f:oi(g),m=x==null?f:oi(x),f=new y(w,h+"leave",g,n,d),f.target=b,f.relatedTarget=m,w=null,Cr(d)===u&&(y=new y(v,h+"enter",x,n,d),y.target=m,y.relatedTarget=b,w=y),b=w,g&&x)t:{for(y=g,v=x,h=0,m=y;m;m=Qr(m))h++;for(m=0,w=v;w;w=Qr(w))m++;for(;0<h-m;)y=Qr(y),h--;for(;0<m-h;)v=Qr(v),m--;for(;h--;){if(y===v||v!==null&&y===v.alternate)break t;y=Qr(y),v=Qr(v)}y=null}else y=null;g!==null&&Xf(p,f,g,y,!1),x!==null&&b!==null&&Xf(p,b,x,y,!0)}}e:{if(f=u?oi(u):window,g=f.nodeName&&f.nodeName.toLowerCase(),g==="select"||g==="input"&&f.type==="file")var S=Mw;else if(Bf(f))if(Wg)S=Rw;else{S=Ow;var j=Lw}else(g=f.nodeName)&&g.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(S=Iw);if(S&&(S=S(e,u))){Ug(p,S,n,d);break e}j&&j(e,f,u),e==="focusout"&&(j=f._wrapperState)&&j.controlled&&f.type==="number"&&ru(f,"number",f.value)}switch(j=u?oi(u):window,e){case"focusin":(Bf(j)||j.contentEditable==="true")&&(ii=j,mu=u,ka=null);break;case"focusout":ka=mu=ii=null;break;case"mousedown":gu=!0;break;case"contextmenu":case"mouseup":case"dragend":gu=!1,Gf(p,n,d);break;case"selectionchange":if(Nw)break;case"keydown":case"keyup":Gf(p,n,d)}var C;if(qd)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else ri?qg(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(Bg&&n.locale!=="ko"&&(ri||T!=="onCompositionStart"?T==="onCompositionEnd"&&ri&&(C=$g()):(Kn=d,Fd="value"in Kn?Kn.value:Kn.textContent,ri=!0)),j=Ss(u,T),0<j.length&&(T=new Vf(T,e,null,n,d),p.push({event:T,listeners:j}),C?T.data=C:(C=Hg(n),C!==null&&(T.data=C)))),(C=Cw?Ew(e,n):Pw(e,n))&&(u=Ss(u,"onBeforeInput"),0<u.length&&(d=new Vf("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:u}),d.data=C))}n1(p,t)})}function Ha(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ss(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=Da(e,n),a!=null&&r.unshift(Ha(e,a,i)),a=Da(e,t),a!=null&&r.push(Ha(e,a,i))),e=e.return}return r}function Qr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Xf(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,l=s.alternate,u=s.stateNode;if(l!==null&&l===r)break;s.tag===5&&u!==null&&(s=u,i?(l=Da(n,a),l!=null&&o.unshift(Ha(n,l,s))):i||(l=Da(n,a),l!=null&&o.push(Ha(n,l,s)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var qw=/\r\n?/g,Hw=/\u0000|\uFFFD/g;function Qf(e){return(typeof e=="string"?e:""+e).replace(qw,`
`).replace(Hw,"")}function Eo(e,t,n){if(t=Qf(t),Qf(e)!==t&&n)throw Error(F(425))}function ks(){}var vu=null,xu=null;function yu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var wu=typeof setTimeout=="function"?setTimeout:void 0,Uw=typeof clearTimeout=="function"?clearTimeout:void 0,Zf=typeof Promise=="function"?Promise:void 0,Ww=typeof queueMicrotask=="function"?queueMicrotask:typeof Zf<"u"?function(e){return Zf.resolve(null).then(e).catch(Gw)}:wu;function Gw(e){setTimeout(function(){throw e})}function uc(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Fa(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Fa(t)}function nr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Jf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Ui=Math.random().toString(36).slice(2),sn="__reactFiber$"+Ui,Ua="__reactProps$"+Ui,Ln="__reactContainer$"+Ui,bu="__reactEvents$"+Ui,Yw="__reactListeners$"+Ui,Kw="__reactHandles$"+Ui;function Cr(e){var t=e[sn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ln]||n[sn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Jf(e);e!==null;){if(n=e[sn])return n;e=Jf(e)}return t}e=n,n=e.parentNode}return null}function co(e){return e=e[sn]||e[Ln],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function oi(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(F(33))}function dl(e){return e[Ua]||null}var Su=[],si=-1;function hr(e){return{current:e}}function ye(e){0>si||(e.current=Su[si],Su[si]=null,si--)}function me(e,t){si++,Su[si]=e.current,e.current=t}var ur={},st=hr(ur),vt=hr(!1),Dr=ur;function Pi(e,t){var n=e.type.contextTypes;if(!n)return ur;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function xt(e){return e=e.childContextTypes,e!=null}function js(){ye(vt),ye(st)}function eh(e,t,n){if(st.current!==ur)throw Error(F(168));me(st,t),me(vt,n)}function i1(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(F(108,L2(e)||"Unknown",i));return ze({},n,r)}function _s(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ur,Dr=st.current,me(st,e),me(vt,vt.current),!0}function th(e,t,n){var r=e.stateNode;if(!r)throw Error(F(169));n?(e=i1(e,t,Dr),r.__reactInternalMemoizedMergedChildContext=e,ye(vt),ye(st),me(st,e)):ye(vt),me(vt,n)}var Sn=null,pl=!1,dc=!1;function a1(e){Sn===null?Sn=[e]:Sn.push(e)}function Xw(e){pl=!0,a1(e)}function mr(){if(!dc&&Sn!==null){dc=!0;var e=0,t=de;try{var n=Sn;for(de=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Sn=null,pl=!1}catch(i){throw Sn!==null&&(Sn=Sn.slice(e+1)),zg(Rd,mr),i}finally{de=t,dc=!1}}return null}var li=[],ci=0,Ts=null,Cs=0,Lt=[],Ot=0,Vr=null,kn=1,jn="";function kr(e,t){li[ci++]=Cs,li[ci++]=Ts,Ts=e,Cs=t}function o1(e,t,n){Lt[Ot++]=kn,Lt[Ot++]=jn,Lt[Ot++]=Vr,Vr=e;var r=kn;e=jn;var i=32-Yt(r)-1;r&=~(1<<i),n+=1;var a=32-Yt(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,kn=1<<32-Yt(t)+i|n<<i|r,jn=a+e}else kn=1<<a|n<<i|r,jn=e}function Ud(e){e.return!==null&&(kr(e,1),o1(e,1,0))}function Wd(e){for(;e===Ts;)Ts=li[--ci],li[ci]=null,Cs=li[--ci],li[ci]=null;for(;e===Vr;)Vr=Lt[--Ot],Lt[Ot]=null,jn=Lt[--Ot],Lt[Ot]=null,kn=Lt[--Ot],Lt[Ot]=null}var _t=null,jt=null,ke=!1,Wt=null;function s1(e,t){var n=It(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function nh(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,_t=e,jt=nr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,_t=e,jt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Vr!==null?{id:kn,overflow:jn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=It(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,_t=e,jt=null,!0):!1;default:return!1}}function ku(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ju(e){if(ke){var t=jt;if(t){var n=t;if(!nh(e,t)){if(ku(e))throw Error(F(418));t=nr(n.nextSibling);var r=_t;t&&nh(e,t)?s1(r,n):(e.flags=e.flags&-4097|2,ke=!1,_t=e)}}else{if(ku(e))throw Error(F(418));e.flags=e.flags&-4097|2,ke=!1,_t=e}}}function rh(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;_t=e}function Po(e){if(e!==_t)return!1;if(!ke)return rh(e),ke=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!yu(e.type,e.memoizedProps)),t&&(t=jt)){if(ku(e))throw l1(),Error(F(418));for(;t;)s1(e,t),t=nr(t.nextSibling)}if(rh(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(F(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){jt=nr(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}jt=null}}else jt=_t?nr(e.stateNode.nextSibling):null;return!0}function l1(){for(var e=jt;e;)e=nr(e.nextSibling)}function zi(){jt=_t=null,ke=!1}function Gd(e){Wt===null?Wt=[e]:Wt.push(e)}var Qw=Dn.ReactCurrentBatchConfig;function ia(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(F(309));var r=n.stateNode}if(!r)throw Error(F(147,e));var i=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(o){var s=i.refs;o===null?delete s[a]:s[a]=o},t._stringRef=a,t)}if(typeof e!="string")throw Error(F(284));if(!n._owner)throw Error(F(290,e))}return e}function zo(e,t){throw e=Object.prototype.toString.call(t),Error(F(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ih(e){var t=e._init;return t(e._payload)}function c1(e){function t(v,h){if(e){var m=v.deletions;m===null?(v.deletions=[h],v.flags|=16):m.push(h)}}function n(v,h){if(!e)return null;for(;h!==null;)t(v,h),h=h.sibling;return null}function r(v,h){for(v=new Map;h!==null;)h.key!==null?v.set(h.key,h):v.set(h.index,h),h=h.sibling;return v}function i(v,h){return v=or(v,h),v.index=0,v.sibling=null,v}function a(v,h,m){return v.index=m,e?(m=v.alternate,m!==null?(m=m.index,m<h?(v.flags|=2,h):m):(v.flags|=2,h)):(v.flags|=1048576,h)}function o(v){return e&&v.alternate===null&&(v.flags|=2),v}function s(v,h,m,w){return h===null||h.tag!==6?(h=xc(m,v.mode,w),h.return=v,h):(h=i(h,m),h.return=v,h)}function l(v,h,m,w){var S=m.type;return S===ni?d(v,h,m.props.children,w,m.key):h!==null&&(h.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Un&&ih(S)===h.type)?(w=i(h,m.props),w.ref=ia(v,h,m),w.return=v,w):(w=ns(m.type,m.key,m.props,null,v.mode,w),w.ref=ia(v,h,m),w.return=v,w)}function u(v,h,m,w){return h===null||h.tag!==4||h.stateNode.containerInfo!==m.containerInfo||h.stateNode.implementation!==m.implementation?(h=yc(m,v.mode,w),h.return=v,h):(h=i(h,m.children||[]),h.return=v,h)}function d(v,h,m,w,S){return h===null||h.tag!==7?(h=Lr(m,v.mode,w,S),h.return=v,h):(h=i(h,m),h.return=v,h)}function p(v,h,m){if(typeof h=="string"&&h!==""||typeof h=="number")return h=xc(""+h,v.mode,m),h.return=v,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case yo:return m=ns(h.type,h.key,h.props,null,v.mode,m),m.ref=ia(v,null,h),m.return=v,m;case ti:return h=yc(h,v.mode,m),h.return=v,h;case Un:var w=h._init;return p(v,w(h._payload),m)}if(fa(h)||Ji(h))return h=Lr(h,v.mode,m,null),h.return=v,h;zo(v,h)}return null}function f(v,h,m,w){var S=h!==null?h.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return S!==null?null:s(v,h,""+m,w);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case yo:return m.key===S?l(v,h,m,w):null;case ti:return m.key===S?u(v,h,m,w):null;case Un:return S=m._init,f(v,h,S(m._payload),w)}if(fa(m)||Ji(m))return S!==null?null:d(v,h,m,w,null);zo(v,m)}return null}function g(v,h,m,w,S){if(typeof w=="string"&&w!==""||typeof w=="number")return v=v.get(m)||null,s(h,v,""+w,S);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case yo:return v=v.get(w.key===null?m:w.key)||null,l(h,v,w,S);case ti:return v=v.get(w.key===null?m:w.key)||null,u(h,v,w,S);case Un:var j=w._init;return g(v,h,m,j(w._payload),S)}if(fa(w)||Ji(w))return v=v.get(m)||null,d(h,v,w,S,null);zo(h,w)}return null}function x(v,h,m,w){for(var S=null,j=null,C=h,T=h=0,A=null;C!==null&&T<m.length;T++){C.index>T?(A=C,C=null):A=C.sibling;var E=f(v,C,m[T],w);if(E===null){C===null&&(C=A);break}e&&C&&E.alternate===null&&t(v,C),h=a(E,h,T),j===null?S=E:j.sibling=E,j=E,C=A}if(T===m.length)return n(v,C),ke&&kr(v,T),S;if(C===null){for(;T<m.length;T++)C=p(v,m[T],w),C!==null&&(h=a(C,h,T),j===null?S=C:j.sibling=C,j=C);return ke&&kr(v,T),S}for(C=r(v,C);T<m.length;T++)A=g(C,v,T,m[T],w),A!==null&&(e&&A.alternate!==null&&C.delete(A.key===null?T:A.key),h=a(A,h,T),j===null?S=A:j.sibling=A,j=A);return e&&C.forEach(function(P){return t(v,P)}),ke&&kr(v,T),S}function y(v,h,m,w){var S=Ji(m);if(typeof S!="function")throw Error(F(150));if(m=S.call(m),m==null)throw Error(F(151));for(var j=S=null,C=h,T=h=0,A=null,E=m.next();C!==null&&!E.done;T++,E=m.next()){C.index>T?(A=C,C=null):A=C.sibling;var P=f(v,C,E.value,w);if(P===null){C===null&&(C=A);break}e&&C&&P.alternate===null&&t(v,C),h=a(P,h,T),j===null?S=P:j.sibling=P,j=P,C=A}if(E.done)return n(v,C),ke&&kr(v,T),S;if(C===null){for(;!E.done;T++,E=m.next())E=p(v,E.value,w),E!==null&&(h=a(E,h,T),j===null?S=E:j.sibling=E,j=E);return ke&&kr(v,T),S}for(C=r(v,C);!E.done;T++,E=m.next())E=g(C,v,T,E.value,w),E!==null&&(e&&E.alternate!==null&&C.delete(E.key===null?T:E.key),h=a(E,h,T),j===null?S=E:j.sibling=E,j=E);return e&&C.forEach(function(M){return t(v,M)}),ke&&kr(v,T),S}function b(v,h,m,w){if(typeof m=="object"&&m!==null&&m.type===ni&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case yo:e:{for(var S=m.key,j=h;j!==null;){if(j.key===S){if(S=m.type,S===ni){if(j.tag===7){n(v,j.sibling),h=i(j,m.props.children),h.return=v,v=h;break e}}else if(j.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Un&&ih(S)===j.type){n(v,j.sibling),h=i(j,m.props),h.ref=ia(v,j,m),h.return=v,v=h;break e}n(v,j);break}else t(v,j);j=j.sibling}m.type===ni?(h=Lr(m.props.children,v.mode,w,m.key),h.return=v,v=h):(w=ns(m.type,m.key,m.props,null,v.mode,w),w.ref=ia(v,h,m),w.return=v,v=w)}return o(v);case ti:e:{for(j=m.key;h!==null;){if(h.key===j)if(h.tag===4&&h.stateNode.containerInfo===m.containerInfo&&h.stateNode.implementation===m.implementation){n(v,h.sibling),h=i(h,m.children||[]),h.return=v,v=h;break e}else{n(v,h);break}else t(v,h);h=h.sibling}h=yc(m,v.mode,w),h.return=v,v=h}return o(v);case Un:return j=m._init,b(v,h,j(m._payload),w)}if(fa(m))return x(v,h,m,w);if(Ji(m))return y(v,h,m,w);zo(v,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,h!==null&&h.tag===6?(n(v,h.sibling),h=i(h,m),h.return=v,v=h):(n(v,h),h=xc(m,v.mode,w),h.return=v,v=h),o(v)):n(v,h)}return b}var Ai=c1(!0),u1=c1(!1),Es=hr(null),Ps=null,ui=null,Yd=null;function Kd(){Yd=ui=Ps=null}function Xd(e){var t=Es.current;ye(Es),e._currentValue=t}function _u(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function ki(e,t){Ps=e,Yd=ui=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(gt=!0),e.firstContext=null)}function Dt(e){var t=e._currentValue;if(Yd!==e)if(e={context:e,memoizedValue:t,next:null},ui===null){if(Ps===null)throw Error(F(308));ui=e,Ps.dependencies={lanes:0,firstContext:e}}else ui=ui.next=e;return t}var Er=null;function Qd(e){Er===null?Er=[e]:Er.push(e)}function d1(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Qd(t)):(n.next=i.next,i.next=n),t.interleaved=n,On(e,r)}function On(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Wn=!1;function Zd(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function p1(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Tn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function rr(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,se&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,On(e,n)}return i=r.interleaved,i===null?(t.next=t,Qd(r)):(t.next=i.next,i.next=t),r.interleaved=t,On(e,n)}function Xo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Dd(e,n)}}function ah(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function zs(e,t,n,r){var i=e.updateQueue;Wn=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var l=s,u=l.next;l.next=null,o===null?a=u:o.next=u,o=l;var d=e.alternate;d!==null&&(d=d.updateQueue,s=d.lastBaseUpdate,s!==o&&(s===null?d.firstBaseUpdate=u:s.next=u,d.lastBaseUpdate=l))}if(a!==null){var p=i.baseState;o=0,d=u=l=null,s=a;do{var f=s.lane,g=s.eventTime;if((r&f)===f){d!==null&&(d=d.next={eventTime:g,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var x=e,y=s;switch(f=t,g=n,y.tag){case 1:if(x=y.payload,typeof x=="function"){p=x.call(g,p,f);break e}p=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=y.payload,f=typeof x=="function"?x.call(g,p,f):x,f==null)break e;p=ze({},p,f);break e;case 2:Wn=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[s]:f.push(s))}else g={eventTime:g,lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},d===null?(u=d=g,l=p):d=d.next=g,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;f=s,s=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(d===null&&(l=p),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);Fr|=o,e.lanes=o,e.memoizedState=p}}function oh(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(F(191,i));i.call(r)}}}var uo={},dn=hr(uo),Wa=hr(uo),Ga=hr(uo);function Pr(e){if(e===uo)throw Error(F(174));return e}function Jd(e,t){switch(me(Ga,t),me(Wa,e),me(dn,uo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:au(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=au(t,e)}ye(dn),me(dn,t)}function Mi(){ye(dn),ye(Wa),ye(Ga)}function f1(e){Pr(Ga.current);var t=Pr(dn.current),n=au(t,e.type);t!==n&&(me(Wa,e),me(dn,n))}function ep(e){Wa.current===e&&(ye(dn),ye(Wa))}var Te=hr(0);function As(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var pc=[];function tp(){for(var e=0;e<pc.length;e++)pc[e]._workInProgressVersionPrimary=null;pc.length=0}var Qo=Dn.ReactCurrentDispatcher,fc=Dn.ReactCurrentBatchConfig,Nr=0,Pe=null,$e=null,We=null,Ms=!1,ja=!1,Ya=0,Zw=0;function tt(){throw Error(F(321))}function np(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Qt(e[n],t[n]))return!1;return!0}function rp(e,t,n,r,i,a){if(Nr=a,Pe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Qo.current=e===null||e.memoizedState===null?nb:rb,e=n(r,i),ja){a=0;do{if(ja=!1,Ya=0,25<=a)throw Error(F(301));a+=1,We=$e=null,t.updateQueue=null,Qo.current=ib,e=n(r,i)}while(ja)}if(Qo.current=Ls,t=$e!==null&&$e.next!==null,Nr=0,We=$e=Pe=null,Ms=!1,t)throw Error(F(300));return e}function ip(){var e=Ya!==0;return Ya=0,e}function an(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return We===null?Pe.memoizedState=We=e:We=We.next=e,We}function Vt(){if($e===null){var e=Pe.alternate;e=e!==null?e.memoizedState:null}else e=$e.next;var t=We===null?Pe.memoizedState:We.next;if(t!==null)We=t,$e=e;else{if(e===null)throw Error(F(310));$e=e,e={memoizedState:$e.memoizedState,baseState:$e.baseState,baseQueue:$e.baseQueue,queue:$e.queue,next:null},We===null?Pe.memoizedState=We=e:We=We.next=e}return We}function Ka(e,t){return typeof t=="function"?t(e):t}function hc(e){var t=Vt(),n=t.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=e;var r=$e,i=r.baseQueue,a=n.pending;if(a!==null){if(i!==null){var o=i.next;i.next=a.next,a.next=o}r.baseQueue=i=a,n.pending=null}if(i!==null){a=i.next,r=r.baseState;var s=o=null,l=null,u=a;do{var d=u.lane;if((Nr&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var p={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(s=l=p,o=r):l=l.next=p,Pe.lanes|=d,Fr|=d}u=u.next}while(u!==null&&u!==a);l===null?o=r:l.next=s,Qt(r,t.memoizedState)||(gt=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do a=i.lane,Pe.lanes|=a,Fr|=a,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function mc(e){var t=Vt(),n=t.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do a=e(a,o.action),o=o.next;while(o!==i);Qt(a,t.memoizedState)||(gt=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function h1(){}function m1(e,t){var n=Pe,r=Vt(),i=t(),a=!Qt(r.memoizedState,i);if(a&&(r.memoizedState=i,gt=!0),r=r.queue,ap(x1.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||We!==null&&We.memoizedState.tag&1){if(n.flags|=2048,Xa(9,v1.bind(null,n,r,i,t),void 0,null),Ye===null)throw Error(F(349));Nr&30||g1(n,t,i)}return i}function g1(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Pe.updateQueue,t===null?(t={lastEffect:null,stores:null},Pe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function v1(e,t,n,r){t.value=n,t.getSnapshot=r,y1(t)&&w1(e)}function x1(e,t,n){return n(function(){y1(t)&&w1(e)})}function y1(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Qt(e,n)}catch{return!0}}function w1(e){var t=On(e,1);t!==null&&Kt(t,e,1,-1)}function sh(e){var t=an();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ka,lastRenderedState:e},t.queue=e,e=e.dispatch=tb.bind(null,Pe,e),[t.memoizedState,e]}function Xa(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Pe.updateQueue,t===null?(t={lastEffect:null,stores:null},Pe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function b1(){return Vt().memoizedState}function Zo(e,t,n,r){var i=an();Pe.flags|=e,i.memoizedState=Xa(1|t,n,void 0,r===void 0?null:r)}function fl(e,t,n,r){var i=Vt();r=r===void 0?null:r;var a=void 0;if($e!==null){var o=$e.memoizedState;if(a=o.destroy,r!==null&&np(r,o.deps)){i.memoizedState=Xa(t,n,a,r);return}}Pe.flags|=e,i.memoizedState=Xa(1|t,n,a,r)}function lh(e,t){return Zo(8390656,8,e,t)}function ap(e,t){return fl(2048,8,e,t)}function S1(e,t){return fl(4,2,e,t)}function k1(e,t){return fl(4,4,e,t)}function j1(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function _1(e,t,n){return n=n!=null?n.concat([e]):null,fl(4,4,j1.bind(null,t,e),n)}function op(){}function T1(e,t){var n=Vt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&np(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function C1(e,t){var n=Vt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&np(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function E1(e,t,n){return Nr&21?(Qt(n,t)||(n=Lg(),Pe.lanes|=n,Fr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,gt=!0),e.memoizedState=n)}function Jw(e,t){var n=de;de=n!==0&&4>n?n:4,e(!0);var r=fc.transition;fc.transition={};try{e(!1),t()}finally{de=n,fc.transition=r}}function P1(){return Vt().memoizedState}function eb(e,t,n){var r=ar(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},z1(e))A1(t,n);else if(n=d1(e,t,n,r),n!==null){var i=dt();Kt(n,e,r,i),M1(n,t,r)}}function tb(e,t,n){var r=ar(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(z1(e))A1(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Qt(s,o)){var l=t.interleaved;l===null?(i.next=i,Qd(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=d1(e,t,i,r),n!==null&&(i=dt(),Kt(n,e,r,i),M1(n,t,r))}}function z1(e){var t=e.alternate;return e===Pe||t!==null&&t===Pe}function A1(e,t){ja=Ms=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function M1(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Dd(e,n)}}var Ls={readContext:Dt,useCallback:tt,useContext:tt,useEffect:tt,useImperativeHandle:tt,useInsertionEffect:tt,useLayoutEffect:tt,useMemo:tt,useReducer:tt,useRef:tt,useState:tt,useDebugValue:tt,useDeferredValue:tt,useTransition:tt,useMutableSource:tt,useSyncExternalStore:tt,useId:tt,unstable_isNewReconciler:!1},nb={readContext:Dt,useCallback:function(e,t){return an().memoizedState=[e,t===void 0?null:t],e},useContext:Dt,useEffect:lh,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Zo(4194308,4,j1.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Zo(4194308,4,e,t)},useInsertionEffect:function(e,t){return Zo(4,2,e,t)},useMemo:function(e,t){var n=an();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=an();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=eb.bind(null,Pe,e),[r.memoizedState,e]},useRef:function(e){var t=an();return e={current:e},t.memoizedState=e},useState:sh,useDebugValue:op,useDeferredValue:function(e){return an().memoizedState=e},useTransition:function(){var e=sh(!1),t=e[0];return e=Jw.bind(null,e[1]),an().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Pe,i=an();if(ke){if(n===void 0)throw Error(F(407));n=n()}else{if(n=t(),Ye===null)throw Error(F(349));Nr&30||g1(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,lh(x1.bind(null,r,a,e),[e]),r.flags|=2048,Xa(9,v1.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=an(),t=Ye.identifierPrefix;if(ke){var n=jn,r=kn;n=(r&~(1<<32-Yt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ya++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Zw++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},rb={readContext:Dt,useCallback:T1,useContext:Dt,useEffect:ap,useImperativeHandle:_1,useInsertionEffect:S1,useLayoutEffect:k1,useMemo:C1,useReducer:hc,useRef:b1,useState:function(){return hc(Ka)},useDebugValue:op,useDeferredValue:function(e){var t=Vt();return E1(t,$e.memoizedState,e)},useTransition:function(){var e=hc(Ka)[0],t=Vt().memoizedState;return[e,t]},useMutableSource:h1,useSyncExternalStore:m1,useId:P1,unstable_isNewReconciler:!1},ib={readContext:Dt,useCallback:T1,useContext:Dt,useEffect:ap,useImperativeHandle:_1,useInsertionEffect:S1,useLayoutEffect:k1,useMemo:C1,useReducer:mc,useRef:b1,useState:function(){return mc(Ka)},useDebugValue:op,useDeferredValue:function(e){var t=Vt();return $e===null?t.memoizedState=e:E1(t,$e.memoizedState,e)},useTransition:function(){var e=mc(Ka)[0],t=Vt().memoizedState;return[e,t]},useMutableSource:h1,useSyncExternalStore:m1,useId:P1,unstable_isNewReconciler:!1};function Ht(e,t){if(e&&e.defaultProps){t=ze({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Tu(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ze({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var hl={isMounted:function(e){return(e=e._reactInternals)?Wr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=dt(),i=ar(e),a=Tn(r,i);a.payload=t,n!=null&&(a.callback=n),t=rr(e,a,i),t!==null&&(Kt(t,e,i,r),Xo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=dt(),i=ar(e),a=Tn(r,i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=rr(e,a,i),t!==null&&(Kt(t,e,i,r),Xo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=dt(),r=ar(e),i=Tn(n,r);i.tag=2,t!=null&&(i.callback=t),t=rr(e,i,r),t!==null&&(Kt(t,e,r,n),Xo(t,e,r))}};function ch(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Ba(n,r)||!Ba(i,a):!0}function L1(e,t,n){var r=!1,i=ur,a=t.contextType;return typeof a=="object"&&a!==null?a=Dt(a):(i=xt(t)?Dr:st.current,r=t.contextTypes,a=(r=r!=null)?Pi(e,i):ur),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=hl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function uh(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&hl.enqueueReplaceState(t,t.state,null)}function Cu(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Zd(e);var a=t.contextType;typeof a=="object"&&a!==null?i.context=Dt(a):(a=xt(t)?Dr:st.current,i.context=Pi(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(Tu(e,t,a,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&hl.enqueueReplaceState(i,i.state,null),zs(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Li(e,t){try{var n="",r=t;do n+=M2(r),r=r.return;while(r);var i=n}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:i,digest:null}}function gc(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Eu(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var ab=typeof WeakMap=="function"?WeakMap:Map;function O1(e,t,n){n=Tn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Is||(Is=!0,Vu=r),Eu(e,t)},n}function I1(e,t,n){n=Tn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Eu(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){Eu(e,t),typeof r!="function"&&(ir===null?ir=new Set([this]):ir.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function dh(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new ab;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=yb.bind(null,e,t,n),t.then(e,e))}function ph(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function fh(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Tn(-1,1),t.tag=2,rr(n,t,1))),n.lanes|=1),e)}var ob=Dn.ReactCurrentOwner,gt=!1;function lt(e,t,n,r){t.child=e===null?u1(t,null,n,r):Ai(t,e.child,n,r)}function hh(e,t,n,r,i){n=n.render;var a=t.ref;return ki(t,i),r=rp(e,t,n,r,a,i),n=ip(),e!==null&&!gt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,In(e,t,i)):(ke&&n&&Ud(t),t.flags|=1,lt(e,t,r,i),t.child)}function mh(e,t,n,r,i){if(e===null){var a=n.type;return typeof a=="function"&&!hp(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,R1(e,t,a,r,i)):(e=ns(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&i)){var o=a.memoizedProps;if(n=n.compare,n=n!==null?n:Ba,n(o,r)&&e.ref===t.ref)return In(e,t,i)}return t.flags|=1,e=or(a,r),e.ref=t.ref,e.return=t,t.child=e}function R1(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Ba(a,r)&&e.ref===t.ref)if(gt=!1,t.pendingProps=r=a,(e.lanes&i)!==0)e.flags&131072&&(gt=!0);else return t.lanes=e.lanes,In(e,t,i)}return Pu(e,t,n,r,i)}function D1(e,t,n){var r=t.pendingProps,i=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},me(pi,St),St|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,me(pi,St),St|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,me(pi,St),St|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,me(pi,St),St|=r;return lt(e,t,i,n),t.child}function V1(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Pu(e,t,n,r,i){var a=xt(n)?Dr:st.current;return a=Pi(t,a),ki(t,i),n=rp(e,t,n,r,a,i),r=ip(),e!==null&&!gt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,In(e,t,i)):(ke&&r&&Ud(t),t.flags|=1,lt(e,t,n,i),t.child)}function gh(e,t,n,r,i){if(xt(n)){var a=!0;_s(t)}else a=!1;if(ki(t,i),t.stateNode===null)Jo(e,t),L1(t,n,r),Cu(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Dt(u):(u=xt(n)?Dr:st.current,u=Pi(t,u));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==r||l!==u)&&uh(t,o,r,u),Wn=!1;var f=t.memoizedState;o.state=f,zs(t,r,o,i),l=t.memoizedState,s!==r||f!==l||vt.current||Wn?(typeof d=="function"&&(Tu(t,n,d,r),l=t.memoizedState),(s=Wn||ch(t,n,s,r,f,l,u))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),o.props=r,o.state=l,o.context=u,r=s):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,p1(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:Ht(t.type,s),o.props=u,p=t.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Dt(l):(l=xt(n)?Dr:st.current,l=Pi(t,l));var g=n.getDerivedStateFromProps;(d=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==p||f!==l)&&uh(t,o,r,l),Wn=!1,f=t.memoizedState,o.state=f,zs(t,r,o,i);var x=t.memoizedState;s!==p||f!==x||vt.current||Wn?(typeof g=="function"&&(Tu(t,n,g,r),x=t.memoizedState),(u=Wn||ch(t,n,u,r,f,x,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,x,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,x,l)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),o.props=r,o.state=x,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return zu(e,t,n,r,a,i)}function zu(e,t,n,r,i,a){V1(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&th(t,n,!1),In(e,t,a);r=t.stateNode,ob.current=t;var s=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=Ai(t,e.child,null,a),t.child=Ai(t,null,s,a)):lt(e,t,s,a),t.memoizedState=r.state,i&&th(t,n,!0),t.child}function N1(e){var t=e.stateNode;t.pendingContext?eh(e,t.pendingContext,t.pendingContext!==t.context):t.context&&eh(e,t.context,!1),Jd(e,t.containerInfo)}function vh(e,t,n,r,i){return zi(),Gd(i),t.flags|=256,lt(e,t,n,r),t.child}var Au={dehydrated:null,treeContext:null,retryLane:0};function Mu(e){return{baseLanes:e,cachePool:null,transitions:null}}function F1(e,t,n){var r=t.pendingProps,i=Te.current,a=!1,o=(t.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),me(Te,i&1),e===null)return ju(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,a?(r=t.mode,a=t.child,o={mode:"hidden",children:o},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=vl(o,r,0,null),e=Lr(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=Mu(n),t.memoizedState=Au,e):sp(t,o));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return sb(e,t,o,r,s,i,n);if(a){a=r.fallback,o=t.mode,i=e.child,s=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=or(i,l),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?a=or(s,a):(a=Lr(a,o,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,o=e.child.memoizedState,o=o===null?Mu(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~n,t.memoizedState=Au,r}return a=e.child,e=a.sibling,r=or(a,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function sp(e,t){return t=vl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ao(e,t,n,r){return r!==null&&Gd(r),Ai(t,e.child,null,n),e=sp(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function sb(e,t,n,r,i,a,o){if(n)return t.flags&256?(t.flags&=-257,r=gc(Error(F(422))),Ao(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,i=t.mode,r=vl({mode:"visible",children:r.children},i,0,null),a=Lr(a,i,o,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,t.mode&1&&Ai(t,e.child,null,o),t.child.memoizedState=Mu(o),t.memoizedState=Au,a);if(!(t.mode&1))return Ao(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,a=Error(F(419)),r=gc(a,r,void 0),Ao(e,t,o,r)}if(s=(o&e.childLanes)!==0,gt||s){if(r=Ye,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,On(e,i),Kt(r,e,i,-1))}return fp(),r=gc(Error(F(421))),Ao(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=wb.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,jt=nr(i.nextSibling),_t=t,ke=!0,Wt=null,e!==null&&(Lt[Ot++]=kn,Lt[Ot++]=jn,Lt[Ot++]=Vr,kn=e.id,jn=e.overflow,Vr=t),t=sp(t,r.children),t.flags|=4096,t)}function xh(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),_u(e.return,t,n)}function vc(e,t,n,r,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function $1(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(lt(e,t,r.children,n),r=Te.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&xh(e,n,t);else if(e.tag===19)xh(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(me(Te,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&As(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),vc(t,!1,i,n,a);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&As(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}vc(t,!0,n,null,a);break;case"together":vc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Jo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function In(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Fr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(F(153));if(t.child!==null){for(e=t.child,n=or(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=or(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function lb(e,t,n){switch(t.tag){case 3:N1(t),zi();break;case 5:f1(t);break;case 1:xt(t.type)&&_s(t);break;case 4:Jd(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;me(Es,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(me(Te,Te.current&1),t.flags|=128,null):n&t.child.childLanes?F1(e,t,n):(me(Te,Te.current&1),e=In(e,t,n),e!==null?e.sibling:null);me(Te,Te.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return $1(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),me(Te,Te.current),r)break;return null;case 22:case 23:return t.lanes=0,D1(e,t,n)}return In(e,t,n)}var B1,Lu,q1,H1;B1=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Lu=function(){};q1=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Pr(dn.current);var a=null;switch(n){case"input":i=tu(e,i),r=tu(e,r),a=[];break;case"select":i=ze({},i,{value:void 0}),r=ze({},r,{value:void 0}),a=[];break;case"textarea":i=iu(e,i),r=iu(e,r),a=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ks)}ou(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var s=i[u];for(o in s)s.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ia.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in r){var l=r[u];if(s=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==s&&(l!=null||s!=null))if(u==="style")if(s){for(o in s)!s.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&s[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(a||(a=[]),a.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(a=a||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(a=a||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ia.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ge("scroll",e),a||s===l||(a=[])):(a=a||[]).push(u,l))}n&&(a=a||[]).push("style",n);var u=a;(t.updateQueue=u)&&(t.flags|=4)}};H1=function(e,t,n,r){n!==r&&(t.flags|=4)};function aa(e,t){if(!ke)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function nt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function cb(e,t,n){var r=t.pendingProps;switch(Wd(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return nt(t),null;case 1:return xt(t.type)&&js(),nt(t),null;case 3:return r=t.stateNode,Mi(),ye(vt),ye(st),tp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Po(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Wt!==null&&($u(Wt),Wt=null))),Lu(e,t),nt(t),null;case 5:ep(t);var i=Pr(Ga.current);if(n=t.type,e!==null&&t.stateNode!=null)q1(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(F(166));return nt(t),null}if(e=Pr(dn.current),Po(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[sn]=t,r[Ua]=a,e=(t.mode&1)!==0,n){case"dialog":ge("cancel",r),ge("close",r);break;case"iframe":case"object":case"embed":ge("load",r);break;case"video":case"audio":for(i=0;i<ma.length;i++)ge(ma[i],r);break;case"source":ge("error",r);break;case"img":case"image":case"link":ge("error",r),ge("load",r);break;case"details":ge("toggle",r);break;case"input":Cf(r,a),ge("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},ge("invalid",r);break;case"textarea":Pf(r,a),ge("invalid",r)}ou(n,a),i=null;for(var o in a)if(a.hasOwnProperty(o)){var s=a[o];o==="children"?typeof s=="string"?r.textContent!==s&&(a.suppressHydrationWarning!==!0&&Eo(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(a.suppressHydrationWarning!==!0&&Eo(r.textContent,s,e),i=["children",""+s]):Ia.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&ge("scroll",r)}switch(n){case"input":wo(r),Ef(r,a,!0);break;case"textarea":wo(r),zf(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=ks)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=xg(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[sn]=t,e[Ua]=r,B1(e,t,!1,!1),t.stateNode=e;e:{switch(o=su(n,r),n){case"dialog":ge("cancel",e),ge("close",e),i=r;break;case"iframe":case"object":case"embed":ge("load",e),i=r;break;case"video":case"audio":for(i=0;i<ma.length;i++)ge(ma[i],e);i=r;break;case"source":ge("error",e),i=r;break;case"img":case"image":case"link":ge("error",e),ge("load",e),i=r;break;case"details":ge("toggle",e),i=r;break;case"input":Cf(e,r),i=tu(e,r),ge("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ze({},r,{value:void 0}),ge("invalid",e);break;case"textarea":Pf(e,r),i=iu(e,r),ge("invalid",e);break;default:i=r}ou(n,i),s=i;for(a in s)if(s.hasOwnProperty(a)){var l=s[a];a==="style"?bg(e,l):a==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&yg(e,l)):a==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ra(e,l):typeof l=="number"&&Ra(e,""+l):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Ia.hasOwnProperty(a)?l!=null&&a==="onScroll"&&ge("scroll",e):l!=null&&Ad(e,a,l,o))}switch(n){case"input":wo(e),Ef(e,r,!1);break;case"textarea":wo(e),zf(e);break;case"option":r.value!=null&&e.setAttribute("value",""+cr(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?yi(e,!!r.multiple,a,!1):r.defaultValue!=null&&yi(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=ks)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return nt(t),null;case 6:if(e&&t.stateNode!=null)H1(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(F(166));if(n=Pr(Ga.current),Pr(dn.current),Po(t)){if(r=t.stateNode,n=t.memoizedProps,r[sn]=t,(a=r.nodeValue!==n)&&(e=_t,e!==null))switch(e.tag){case 3:Eo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Eo(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[sn]=t,t.stateNode=r}return nt(t),null;case 13:if(ye(Te),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ke&&jt!==null&&t.mode&1&&!(t.flags&128))l1(),zi(),t.flags|=98560,a=!1;else if(a=Po(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(F(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(F(317));a[sn]=t}else zi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;nt(t),a=!1}else Wt!==null&&($u(Wt),Wt=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Te.current&1?Be===0&&(Be=3):fp())),t.updateQueue!==null&&(t.flags|=4),nt(t),null);case 4:return Mi(),Lu(e,t),e===null&&qa(t.stateNode.containerInfo),nt(t),null;case 10:return Xd(t.type._context),nt(t),null;case 17:return xt(t.type)&&js(),nt(t),null;case 19:if(ye(Te),a=t.memoizedState,a===null)return nt(t),null;if(r=(t.flags&128)!==0,o=a.rendering,o===null)if(r)aa(a,!1);else{if(Be!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=As(e),o!==null){for(t.flags|=128,aa(a,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,o=a.alternate,o===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=o.childLanes,a.lanes=o.lanes,a.child=o.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=o.memoizedProps,a.memoizedState=o.memoizedState,a.updateQueue=o.updateQueue,a.type=o.type,e=o.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return me(Te,Te.current&1|2),t.child}e=e.sibling}a.tail!==null&&Ie()>Oi&&(t.flags|=128,r=!0,aa(a,!1),t.lanes=4194304)}else{if(!r)if(e=As(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),aa(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!ke)return nt(t),null}else 2*Ie()-a.renderingStartTime>Oi&&n!==1073741824&&(t.flags|=128,r=!0,aa(a,!1),t.lanes=4194304);a.isBackwards?(o.sibling=t.child,t.child=o):(n=a.last,n!==null?n.sibling=o:t.child=o,a.last=o)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=Ie(),t.sibling=null,n=Te.current,me(Te,r?n&1|2:n&1),t):(nt(t),null);case 22:case 23:return pp(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?St&1073741824&&(nt(t),t.subtreeFlags&6&&(t.flags|=8192)):nt(t),null;case 24:return null;case 25:return null}throw Error(F(156,t.tag))}function ub(e,t){switch(Wd(t),t.tag){case 1:return xt(t.type)&&js(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Mi(),ye(vt),ye(st),tp(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ep(t),null;case 13:if(ye(Te),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(F(340));zi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ye(Te),null;case 4:return Mi(),null;case 10:return Xd(t.type._context),null;case 22:case 23:return pp(),null;case 24:return null;default:return null}}var Mo=!1,it=!1,db=typeof WeakSet=="function"?WeakSet:Set,H=null;function di(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ae(e,t,r)}else n.current=null}function Ou(e,t,n){try{n()}catch(r){Ae(e,t,r)}}var yh=!1;function pb(e,t){if(vu=ws,e=Kg(),Hd(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var o=0,s=-1,l=-1,u=0,d=0,p=e,f=null;t:for(;;){for(var g;p!==n||i!==0&&p.nodeType!==3||(s=o+i),p!==a||r!==0&&p.nodeType!==3||(l=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(g=p.firstChild)!==null;)f=p,p=g;for(;;){if(p===e)break t;if(f===n&&++u===i&&(s=o),f===a&&++d===r&&(l=o),(g=p.nextSibling)!==null)break;p=f,f=p.parentNode}p=g}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(xu={focusedElem:e,selectionRange:n},ws=!1,H=t;H!==null;)if(t=H,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,H=e;else for(;H!==null;){t=H;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var y=x.memoizedProps,b=x.memoizedState,v=t.stateNode,h=v.getSnapshotBeforeUpdate(t.elementType===t.type?y:Ht(t.type,y),b);v.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(F(163))}}catch(w){Ae(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,H=e;break}H=t.return}return x=yh,yh=!1,x}function _a(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&Ou(t,n,a)}i=i.next}while(i!==r)}}function ml(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Iu(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function U1(e){var t=e.alternate;t!==null&&(e.alternate=null,U1(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[sn],delete t[Ua],delete t[bu],delete t[Yw],delete t[Kw])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function W1(e){return e.tag===5||e.tag===3||e.tag===4}function wh(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||W1(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ru(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ks));else if(r!==4&&(e=e.child,e!==null))for(Ru(e,t,n),e=e.sibling;e!==null;)Ru(e,t,n),e=e.sibling}function Du(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Du(e,t,n),e=e.sibling;e!==null;)Du(e,t,n),e=e.sibling}var Qe=null,Ut=!1;function $n(e,t,n){for(n=n.child;n!==null;)G1(e,t,n),n=n.sibling}function G1(e,t,n){if(un&&typeof un.onCommitFiberUnmount=="function")try{un.onCommitFiberUnmount(sl,n)}catch{}switch(n.tag){case 5:it||di(n,t);case 6:var r=Qe,i=Ut;Qe=null,$n(e,t,n),Qe=r,Ut=i,Qe!==null&&(Ut?(e=Qe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Qe.removeChild(n.stateNode));break;case 18:Qe!==null&&(Ut?(e=Qe,n=n.stateNode,e.nodeType===8?uc(e.parentNode,n):e.nodeType===1&&uc(e,n),Fa(e)):uc(Qe,n.stateNode));break;case 4:r=Qe,i=Ut,Qe=n.stateNode.containerInfo,Ut=!0,$n(e,t,n),Qe=r,Ut=i;break;case 0:case 11:case 14:case 15:if(!it&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var a=i,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&Ou(n,t,o),i=i.next}while(i!==r)}$n(e,t,n);break;case 1:if(!it&&(di(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){Ae(n,t,s)}$n(e,t,n);break;case 21:$n(e,t,n);break;case 22:n.mode&1?(it=(r=it)||n.memoizedState!==null,$n(e,t,n),it=r):$n(e,t,n);break;default:$n(e,t,n)}}function bh(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new db),t.forEach(function(r){var i=bb.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Bt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var a=e,o=t,s=o;e:for(;s!==null;){switch(s.tag){case 5:Qe=s.stateNode,Ut=!1;break e;case 3:Qe=s.stateNode.containerInfo,Ut=!0;break e;case 4:Qe=s.stateNode.containerInfo,Ut=!0;break e}s=s.return}if(Qe===null)throw Error(F(160));G1(a,o,i),Qe=null,Ut=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Ae(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Y1(t,e),t=t.sibling}function Y1(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Bt(t,e),tn(e),r&4){try{_a(3,e,e.return),ml(3,e)}catch(y){Ae(e,e.return,y)}try{_a(5,e,e.return)}catch(y){Ae(e,e.return,y)}}break;case 1:Bt(t,e),tn(e),r&512&&n!==null&&di(n,n.return);break;case 5:if(Bt(t,e),tn(e),r&512&&n!==null&&di(n,n.return),e.flags&32){var i=e.stateNode;try{Ra(i,"")}catch(y){Ae(e,e.return,y)}}if(r&4&&(i=e.stateNode,i!=null)){var a=e.memoizedProps,o=n!==null?n.memoizedProps:a,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&a.type==="radio"&&a.name!=null&&gg(i,a),su(s,o);var u=su(s,a);for(o=0;o<l.length;o+=2){var d=l[o],p=l[o+1];d==="style"?bg(i,p):d==="dangerouslySetInnerHTML"?yg(i,p):d==="children"?Ra(i,p):Ad(i,d,p,u)}switch(s){case"input":nu(i,a);break;case"textarea":vg(i,a);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var g=a.value;g!=null?yi(i,!!a.multiple,g,!1):f!==!!a.multiple&&(a.defaultValue!=null?yi(i,!!a.multiple,a.defaultValue,!0):yi(i,!!a.multiple,a.multiple?[]:"",!1))}i[Ua]=a}catch(y){Ae(e,e.return,y)}}break;case 6:if(Bt(t,e),tn(e),r&4){if(e.stateNode===null)throw Error(F(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(y){Ae(e,e.return,y)}}break;case 3:if(Bt(t,e),tn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Fa(t.containerInfo)}catch(y){Ae(e,e.return,y)}break;case 4:Bt(t,e),tn(e);break;case 13:Bt(t,e),tn(e),i=e.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(up=Ie())),r&4&&bh(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(it=(u=it)||d,Bt(t,e),it=u):Bt(t,e),tn(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(H=e,d=e.child;d!==null;){for(p=H=d;H!==null;){switch(f=H,g=f.child,f.tag){case 0:case 11:case 14:case 15:_a(4,f,f.return);break;case 1:di(f,f.return);var x=f.stateNode;if(typeof x.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(y){Ae(r,n,y)}}break;case 5:di(f,f.return);break;case 22:if(f.memoizedState!==null){kh(p);continue}}g!==null?(g.return=f,H=g):kh(p)}d=d.sibling}e:for(d=null,p=e;;){if(p.tag===5){if(d===null){d=p;try{i=p.stateNode,u?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(s=p.stateNode,l=p.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=wg("display",o))}catch(y){Ae(e,e.return,y)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(y){Ae(e,e.return,y)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Bt(t,e),tn(e),r&4&&bh(e);break;case 21:break;default:Bt(t,e),tn(e)}}function tn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(W1(n)){var r=n;break e}n=n.return}throw Error(F(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ra(i,""),r.flags&=-33);var a=wh(e);Du(e,a,i);break;case 3:case 4:var o=r.stateNode.containerInfo,s=wh(e);Ru(e,s,o);break;default:throw Error(F(161))}}catch(l){Ae(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function fb(e,t,n){H=e,K1(e)}function K1(e,t,n){for(var r=(e.mode&1)!==0;H!==null;){var i=H,a=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Mo;if(!o){var s=i.alternate,l=s!==null&&s.memoizedState!==null||it;s=Mo;var u=it;if(Mo=o,(it=l)&&!u)for(H=i;H!==null;)o=H,l=o.child,o.tag===22&&o.memoizedState!==null?jh(i):l!==null?(l.return=o,H=l):jh(i);for(;a!==null;)H=a,K1(a),a=a.sibling;H=i,Mo=s,it=u}Sh(e)}else i.subtreeFlags&8772&&a!==null?(a.return=i,H=a):Sh(e)}}function Sh(e){for(;H!==null;){var t=H;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:it||ml(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!it)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Ht(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&oh(t,a,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}oh(t,o,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&Fa(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(F(163))}it||t.flags&512&&Iu(t)}catch(f){Ae(t,t.return,f)}}if(t===e){H=null;break}if(n=t.sibling,n!==null){n.return=t.return,H=n;break}H=t.return}}function kh(e){for(;H!==null;){var t=H;if(t===e){H=null;break}var n=t.sibling;if(n!==null){n.return=t.return,H=n;break}H=t.return}}function jh(e){for(;H!==null;){var t=H;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ml(4,t)}catch(l){Ae(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){Ae(t,i,l)}}var a=t.return;try{Iu(t)}catch(l){Ae(t,a,l)}break;case 5:var o=t.return;try{Iu(t)}catch(l){Ae(t,o,l)}}}catch(l){Ae(t,t.return,l)}if(t===e){H=null;break}var s=t.sibling;if(s!==null){s.return=t.return,H=s;break}H=t.return}}var hb=Math.ceil,Os=Dn.ReactCurrentDispatcher,lp=Dn.ReactCurrentOwner,Rt=Dn.ReactCurrentBatchConfig,se=0,Ye=null,Ne=null,Ze=0,St=0,pi=hr(0),Be=0,Qa=null,Fr=0,gl=0,cp=0,Ta=null,mt=null,up=0,Oi=1/0,wn=null,Is=!1,Vu=null,ir=null,Lo=!1,Xn=null,Rs=0,Ca=0,Nu=null,es=-1,ts=0;function dt(){return se&6?Ie():es!==-1?es:es=Ie()}function ar(e){return e.mode&1?se&2&&Ze!==0?Ze&-Ze:Qw.transition!==null?(ts===0&&(ts=Lg()),ts):(e=de,e!==0||(e=window.event,e=e===void 0?16:Fg(e.type)),e):1}function Kt(e,t,n,r){if(50<Ca)throw Ca=0,Nu=null,Error(F(185));so(e,n,r),(!(se&2)||e!==Ye)&&(e===Ye&&(!(se&2)&&(gl|=n),Be===4&&Yn(e,Ze)),yt(e,r),n===1&&se===0&&!(t.mode&1)&&(Oi=Ie()+500,pl&&mr()))}function yt(e,t){var n=e.callbackNode;Q2(e,t);var r=ys(e,e===Ye?Ze:0);if(r===0)n!==null&&Lf(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Lf(n),t===1)e.tag===0?Xw(_h.bind(null,e)):a1(_h.bind(null,e)),Ww(function(){!(se&6)&&mr()}),n=null;else{switch(Og(r)){case 1:n=Rd;break;case 4:n=Ag;break;case 16:n=xs;break;case 536870912:n=Mg;break;default:n=xs}n=rv(n,X1.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function X1(e,t){if(es=-1,ts=0,se&6)throw Error(F(327));var n=e.callbackNode;if(ji()&&e.callbackNode!==n)return null;var r=ys(e,e===Ye?Ze:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Ds(e,r);else{t=r;var i=se;se|=2;var a=Z1();(Ye!==e||Ze!==t)&&(wn=null,Oi=Ie()+500,Mr(e,t));do try{vb();break}catch(s){Q1(e,s)}while(!0);Kd(),Os.current=a,se=i,Ne!==null?t=0:(Ye=null,Ze=0,t=Be)}if(t!==0){if(t===2&&(i=pu(e),i!==0&&(r=i,t=Fu(e,i))),t===1)throw n=Qa,Mr(e,0),Yn(e,r),yt(e,Ie()),n;if(t===6)Yn(e,r);else{if(i=e.current.alternate,!(r&30)&&!mb(i)&&(t=Ds(e,r),t===2&&(a=pu(e),a!==0&&(r=a,t=Fu(e,a))),t===1))throw n=Qa,Mr(e,0),Yn(e,r),yt(e,Ie()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(F(345));case 2:jr(e,mt,wn);break;case 3:if(Yn(e,r),(r&130023424)===r&&(t=up+500-Ie(),10<t)){if(ys(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){dt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=wu(jr.bind(null,e,mt,wn),t);break}jr(e,mt,wn);break;case 4:if(Yn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-Yt(r);a=1<<o,o=t[o],o>i&&(i=o),r&=~a}if(r=i,r=Ie()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*hb(r/1960))-r,10<r){e.timeoutHandle=wu(jr.bind(null,e,mt,wn),r);break}jr(e,mt,wn);break;case 5:jr(e,mt,wn);break;default:throw Error(F(329))}}}return yt(e,Ie()),e.callbackNode===n?X1.bind(null,e):null}function Fu(e,t){var n=Ta;return e.current.memoizedState.isDehydrated&&(Mr(e,t).flags|=256),e=Ds(e,t),e!==2&&(t=mt,mt=n,t!==null&&$u(t)),e}function $u(e){mt===null?mt=e:mt.push.apply(mt,e)}function mb(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Qt(a(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Yn(e,t){for(t&=~cp,t&=~gl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Yt(t),r=1<<n;e[n]=-1,t&=~r}}function _h(e){if(se&6)throw Error(F(327));ji();var t=ys(e,0);if(!(t&1))return yt(e,Ie()),null;var n=Ds(e,t);if(e.tag!==0&&n===2){var r=pu(e);r!==0&&(t=r,n=Fu(e,r))}if(n===1)throw n=Qa,Mr(e,0),Yn(e,t),yt(e,Ie()),n;if(n===6)throw Error(F(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,jr(e,mt,wn),yt(e,Ie()),null}function dp(e,t){var n=se;se|=1;try{return e(t)}finally{se=n,se===0&&(Oi=Ie()+500,pl&&mr())}}function $r(e){Xn!==null&&Xn.tag===0&&!(se&6)&&ji();var t=se;se|=1;var n=Rt.transition,r=de;try{if(Rt.transition=null,de=1,e)return e()}finally{de=r,Rt.transition=n,se=t,!(se&6)&&mr()}}function pp(){St=pi.current,ye(pi)}function Mr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Uw(n)),Ne!==null)for(n=Ne.return;n!==null;){var r=n;switch(Wd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&js();break;case 3:Mi(),ye(vt),ye(st),tp();break;case 5:ep(r);break;case 4:Mi();break;case 13:ye(Te);break;case 19:ye(Te);break;case 10:Xd(r.type._context);break;case 22:case 23:pp()}n=n.return}if(Ye=e,Ne=e=or(e.current,null),Ze=St=t,Be=0,Qa=null,cp=gl=Fr=0,mt=Ta=null,Er!==null){for(t=0;t<Er.length;t++)if(n=Er[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,a=n.pending;if(a!==null){var o=a.next;a.next=i,r.next=o}n.pending=r}Er=null}return e}function Q1(e,t){do{var n=Ne;try{if(Kd(),Qo.current=Ls,Ms){for(var r=Pe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ms=!1}if(Nr=0,We=$e=Pe=null,ja=!1,Ya=0,lp.current=null,n===null||n.return===null){Be=1,Qa=t,Ne=null;break}e:{var a=e,o=n.return,s=n,l=t;if(t=Ze,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=s,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var g=ph(o);if(g!==null){g.flags&=-257,fh(g,o,s,a,t),g.mode&1&&dh(a,u,t),t=g,l=u;var x=t.updateQueue;if(x===null){var y=new Set;y.add(l),t.updateQueue=y}else x.add(l);break e}else{if(!(t&1)){dh(a,u,t),fp();break e}l=Error(F(426))}}else if(ke&&s.mode&1){var b=ph(o);if(b!==null){!(b.flags&65536)&&(b.flags|=256),fh(b,o,s,a,t),Gd(Li(l,s));break e}}a=l=Li(l,s),Be!==4&&(Be=2),Ta===null?Ta=[a]:Ta.push(a),a=o;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var v=O1(a,l,t);ah(a,v);break e;case 1:s=l;var h=a.type,m=a.stateNode;if(!(a.flags&128)&&(typeof h.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(ir===null||!ir.has(m)))){a.flags|=65536,t&=-t,a.lanes|=t;var w=I1(a,s,t);ah(a,w);break e}}a=a.return}while(a!==null)}ev(n)}catch(S){t=S,Ne===n&&n!==null&&(Ne=n=n.return);continue}break}while(!0)}function Z1(){var e=Os.current;return Os.current=Ls,e===null?Ls:e}function fp(){(Be===0||Be===3||Be===2)&&(Be=4),Ye===null||!(Fr&268435455)&&!(gl&268435455)||Yn(Ye,Ze)}function Ds(e,t){var n=se;se|=2;var r=Z1();(Ye!==e||Ze!==t)&&(wn=null,Mr(e,t));do try{gb();break}catch(i){Q1(e,i)}while(!0);if(Kd(),se=n,Os.current=r,Ne!==null)throw Error(F(261));return Ye=null,Ze=0,Be}function gb(){for(;Ne!==null;)J1(Ne)}function vb(){for(;Ne!==null&&!B2();)J1(Ne)}function J1(e){var t=nv(e.alternate,e,St);e.memoizedProps=e.pendingProps,t===null?ev(e):Ne=t,lp.current=null}function ev(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=ub(n,t),n!==null){n.flags&=32767,Ne=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Be=6,Ne=null;return}}else if(n=cb(n,t,St),n!==null){Ne=n;return}if(t=t.sibling,t!==null){Ne=t;return}Ne=t=e}while(t!==null);Be===0&&(Be=5)}function jr(e,t,n){var r=de,i=Rt.transition;try{Rt.transition=null,de=1,xb(e,t,n,r)}finally{Rt.transition=i,de=r}return null}function xb(e,t,n,r){do ji();while(Xn!==null);if(se&6)throw Error(F(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(F(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(Z2(e,a),e===Ye&&(Ne=Ye=null,Ze=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Lo||(Lo=!0,rv(xs,function(){return ji(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=Rt.transition,Rt.transition=null;var o=de;de=1;var s=se;se|=4,lp.current=null,pb(e,n),Y1(n,e),Vw(xu),ws=!!vu,xu=vu=null,e.current=n,fb(n),q2(),se=s,de=o,Rt.transition=a}else e.current=n;if(Lo&&(Lo=!1,Xn=e,Rs=i),a=e.pendingLanes,a===0&&(ir=null),W2(n.stateNode),yt(e,Ie()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Is)throw Is=!1,e=Vu,Vu=null,e;return Rs&1&&e.tag!==0&&ji(),a=e.pendingLanes,a&1?e===Nu?Ca++:(Ca=0,Nu=e):Ca=0,mr(),null}function ji(){if(Xn!==null){var e=Og(Rs),t=Rt.transition,n=de;try{if(Rt.transition=null,de=16>e?16:e,Xn===null)var r=!1;else{if(e=Xn,Xn=null,Rs=0,se&6)throw Error(F(331));var i=se;for(se|=4,H=e.current;H!==null;){var a=H,o=a.child;if(H.flags&16){var s=a.deletions;if(s!==null){for(var l=0;l<s.length;l++){var u=s[l];for(H=u;H!==null;){var d=H;switch(d.tag){case 0:case 11:case 15:_a(8,d,a)}var p=d.child;if(p!==null)p.return=d,H=p;else for(;H!==null;){d=H;var f=d.sibling,g=d.return;if(U1(d),d===u){H=null;break}if(f!==null){f.return=g,H=f;break}H=g}}}var x=a.alternate;if(x!==null){var y=x.child;if(y!==null){x.child=null;do{var b=y.sibling;y.sibling=null,y=b}while(y!==null)}}H=a}}if(a.subtreeFlags&2064&&o!==null)o.return=a,H=o;else e:for(;H!==null;){if(a=H,a.flags&2048)switch(a.tag){case 0:case 11:case 15:_a(9,a,a.return)}var v=a.sibling;if(v!==null){v.return=a.return,H=v;break e}H=a.return}}var h=e.current;for(H=h;H!==null;){o=H;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,H=m;else e:for(o=h;H!==null;){if(s=H,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:ml(9,s)}}catch(S){Ae(s,s.return,S)}if(s===o){H=null;break e}var w=s.sibling;if(w!==null){w.return=s.return,H=w;break e}H=s.return}}if(se=i,mr(),un&&typeof un.onPostCommitFiberRoot=="function")try{un.onPostCommitFiberRoot(sl,e)}catch{}r=!0}return r}finally{de=n,Rt.transition=t}}return!1}function Th(e,t,n){t=Li(n,t),t=O1(e,t,1),e=rr(e,t,1),t=dt(),e!==null&&(so(e,1,t),yt(e,t))}function Ae(e,t,n){if(e.tag===3)Th(e,e,n);else for(;t!==null;){if(t.tag===3){Th(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ir===null||!ir.has(r))){e=Li(n,e),e=I1(t,e,1),t=rr(t,e,1),e=dt(),t!==null&&(so(t,1,e),yt(t,e));break}}t=t.return}}function yb(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=dt(),e.pingedLanes|=e.suspendedLanes&n,Ye===e&&(Ze&n)===n&&(Be===4||Be===3&&(Ze&130023424)===Ze&&500>Ie()-up?Mr(e,0):cp|=n),yt(e,t)}function tv(e,t){t===0&&(e.mode&1?(t=ko,ko<<=1,!(ko&130023424)&&(ko=4194304)):t=1);var n=dt();e=On(e,t),e!==null&&(so(e,t,n),yt(e,n))}function wb(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),tv(e,n)}function bb(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(F(314))}r!==null&&r.delete(t),tv(e,n)}var nv;nv=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||vt.current)gt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return gt=!1,lb(e,t,n);gt=!!(e.flags&131072)}else gt=!1,ke&&t.flags&1048576&&o1(t,Cs,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Jo(e,t),e=t.pendingProps;var i=Pi(t,st.current);ki(t,n),i=rp(null,t,r,e,i,n);var a=ip();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,xt(r)?(a=!0,_s(t)):a=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Zd(t),i.updater=hl,t.stateNode=i,i._reactInternals=t,Cu(t,r,e,n),t=zu(null,t,r,!0,a,n)):(t.tag=0,ke&&a&&Ud(t),lt(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Jo(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=kb(r),e=Ht(r,e),i){case 0:t=Pu(null,t,r,e,n);break e;case 1:t=gh(null,t,r,e,n);break e;case 11:t=hh(null,t,r,e,n);break e;case 14:t=mh(null,t,r,Ht(r.type,e),n);break e}throw Error(F(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ht(r,i),Pu(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ht(r,i),gh(e,t,r,i,n);case 3:e:{if(N1(t),e===null)throw Error(F(387));r=t.pendingProps,a=t.memoizedState,i=a.element,p1(e,t),zs(t,r,null,n);var o=t.memoizedState;if(r=o.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){i=Li(Error(F(423)),t),t=vh(e,t,r,n,i);break e}else if(r!==i){i=Li(Error(F(424)),t),t=vh(e,t,r,n,i);break e}else for(jt=nr(t.stateNode.containerInfo.firstChild),_t=t,ke=!0,Wt=null,n=u1(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(zi(),r===i){t=In(e,t,n);break e}lt(e,t,r,n)}t=t.child}return t;case 5:return f1(t),e===null&&ju(t),r=t.type,i=t.pendingProps,a=e!==null?e.memoizedProps:null,o=i.children,yu(r,i)?o=null:a!==null&&yu(r,a)&&(t.flags|=32),V1(e,t),lt(e,t,o,n),t.child;case 6:return e===null&&ju(t),null;case 13:return F1(e,t,n);case 4:return Jd(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ai(t,null,r,n):lt(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ht(r,i),hh(e,t,r,i,n);case 7:return lt(e,t,t.pendingProps,n),t.child;case 8:return lt(e,t,t.pendingProps.children,n),t.child;case 12:return lt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,a=t.memoizedProps,o=i.value,me(Es,r._currentValue),r._currentValue=o,a!==null)if(Qt(a.value,o)){if(a.children===i.children&&!vt.current){t=In(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var s=a.dependencies;if(s!==null){o=a.child;for(var l=s.firstContext;l!==null;){if(l.context===r){if(a.tag===1){l=Tn(-1,n&-n),l.tag=2;var u=a.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),_u(a.return,n,t),s.lanes|=n;break}l=l.next}}else if(a.tag===10)o=a.type===t.type?null:a.child;else if(a.tag===18){if(o=a.return,o===null)throw Error(F(341));o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),_u(o,n,t),o=a.sibling}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===t){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}lt(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,ki(t,n),i=Dt(i),r=r(i),t.flags|=1,lt(e,t,r,n),t.child;case 14:return r=t.type,i=Ht(r,t.pendingProps),i=Ht(r.type,i),mh(e,t,r,i,n);case 15:return R1(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ht(r,i),Jo(e,t),t.tag=1,xt(r)?(e=!0,_s(t)):e=!1,ki(t,n),L1(t,r,i),Cu(t,r,i,n),zu(null,t,r,!0,e,n);case 19:return $1(e,t,n);case 22:return D1(e,t,n)}throw Error(F(156,t.tag))};function rv(e,t){return zg(e,t)}function Sb(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function It(e,t,n,r){return new Sb(e,t,n,r)}function hp(e){return e=e.prototype,!(!e||!e.isReactComponent)}function kb(e){if(typeof e=="function")return hp(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ld)return 11;if(e===Od)return 14}return 2}function or(e,t){var n=e.alternate;return n===null?(n=It(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ns(e,t,n,r,i,a){var o=2;if(r=e,typeof e=="function")hp(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case ni:return Lr(n.children,i,a,t);case Md:o=8,i|=8;break;case Qc:return e=It(12,n,t,i|2),e.elementType=Qc,e.lanes=a,e;case Zc:return e=It(13,n,t,i),e.elementType=Zc,e.lanes=a,e;case Jc:return e=It(19,n,t,i),e.elementType=Jc,e.lanes=a,e;case fg:return vl(n,i,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case dg:o=10;break e;case pg:o=9;break e;case Ld:o=11;break e;case Od:o=14;break e;case Un:o=16,r=null;break e}throw Error(F(130,e==null?e:typeof e,""))}return t=It(o,n,t,i),t.elementType=e,t.type=r,t.lanes=a,t}function Lr(e,t,n,r){return e=It(7,e,r,t),e.lanes=n,e}function vl(e,t,n,r){return e=It(22,e,r,t),e.elementType=fg,e.lanes=n,e.stateNode={isHidden:!1},e}function xc(e,t,n){return e=It(6,e,null,t),e.lanes=n,e}function yc(e,t,n){return t=It(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function jb(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Jl(0),this.expirationTimes=Jl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Jl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function mp(e,t,n,r,i,a,o,s,l){return e=new jb(e,t,n,s,l),t===1?(t=1,a===!0&&(t|=8)):t=0,a=It(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Zd(a),e}function _b(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ti,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function iv(e){if(!e)return ur;e=e._reactInternals;e:{if(Wr(e)!==e||e.tag!==1)throw Error(F(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(xt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(F(171))}if(e.tag===1){var n=e.type;if(xt(n))return i1(e,n,t)}return t}function av(e,t,n,r,i,a,o,s,l){return e=mp(n,r,!0,e,i,a,o,s,l),e.context=iv(null),n=e.current,r=dt(),i=ar(n),a=Tn(r,i),a.callback=t??null,rr(n,a,i),e.current.lanes=i,so(e,i,r),yt(e,r),e}function xl(e,t,n,r){var i=t.current,a=dt(),o=ar(i);return n=iv(n),t.context===null?t.context=n:t.pendingContext=n,t=Tn(a,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=rr(i,t,o),e!==null&&(Kt(e,i,o,a),Xo(e,i,o)),o}function Vs(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ch(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function gp(e,t){Ch(e,t),(e=e.alternate)&&Ch(e,t)}function Tb(){return null}var ov=typeof reportError=="function"?reportError:function(e){console.error(e)};function vp(e){this._internalRoot=e}yl.prototype.render=vp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(F(409));xl(e,t,null,null)};yl.prototype.unmount=vp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;$r(function(){xl(null,e,null,null)}),t[Ln]=null}};function yl(e){this._internalRoot=e}yl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Dg();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Gn.length&&t!==0&&t<Gn[n].priority;n++);Gn.splice(n,0,e),n===0&&Ng(e)}};function xp(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function wl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Eh(){}function Cb(e,t,n,r,i){if(i){if(typeof r=="function"){var a=r;r=function(){var u=Vs(o);a.call(u)}}var o=av(t,r,e,0,null,!1,!1,"",Eh);return e._reactRootContainer=o,e[Ln]=o.current,qa(e.nodeType===8?e.parentNode:e),$r(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var u=Vs(l);s.call(u)}}var l=mp(e,0,!1,null,null,!1,!1,"",Eh);return e._reactRootContainer=l,e[Ln]=l.current,qa(e.nodeType===8?e.parentNode:e),$r(function(){xl(t,l,n,r)}),l}function bl(e,t,n,r,i){var a=n._reactRootContainer;if(a){var o=a;if(typeof i=="function"){var s=i;i=function(){var l=Vs(o);s.call(l)}}xl(t,o,e,i)}else o=Cb(n,t,e,i,r);return Vs(o)}Ig=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ha(t.pendingLanes);n!==0&&(Dd(t,n|1),yt(t,Ie()),!(se&6)&&(Oi=Ie()+500,mr()))}break;case 13:$r(function(){var r=On(e,1);if(r!==null){var i=dt();Kt(r,e,1,i)}}),gp(e,1)}};Vd=function(e){if(e.tag===13){var t=On(e,134217728);if(t!==null){var n=dt();Kt(t,e,134217728,n)}gp(e,134217728)}};Rg=function(e){if(e.tag===13){var t=ar(e),n=On(e,t);if(n!==null){var r=dt();Kt(n,e,t,r)}gp(e,t)}};Dg=function(){return de};Vg=function(e,t){var n=de;try{return de=e,t()}finally{de=n}};cu=function(e,t,n){switch(t){case"input":if(nu(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=dl(r);if(!i)throw Error(F(90));mg(r),nu(r,i)}}}break;case"textarea":vg(e,n);break;case"select":t=n.value,t!=null&&yi(e,!!n.multiple,t,!1)}};jg=dp;_g=$r;var Eb={usingClientEntryPoint:!1,Events:[co,oi,dl,Sg,kg,dp]},oa={findFiberByHostInstance:Cr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Pb={bundleType:oa.bundleType,version:oa.version,rendererPackageName:oa.rendererPackageName,rendererConfig:oa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Dn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Eg(e),e===null?null:e.stateNode},findFiberByHostInstance:oa.findFiberByHostInstance||Tb,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Oo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Oo.isDisabled&&Oo.supportsFiber)try{sl=Oo.inject(Pb),un=Oo}catch{}}Et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Eb;Et.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!xp(t))throw Error(F(200));return _b(e,t,null,n)};Et.createRoot=function(e,t){if(!xp(e))throw Error(F(299));var n=!1,r="",i=ov;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=mp(e,1,!1,null,null,n,!1,r,i),e[Ln]=t.current,qa(e.nodeType===8?e.parentNode:e),new vp(t)};Et.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(F(188)):(e=Object.keys(e).join(","),Error(F(268,e)));return e=Eg(t),e=e===null?null:e.stateNode,e};Et.flushSync=function(e){return $r(e)};Et.hydrate=function(e,t,n){if(!wl(t))throw Error(F(200));return bl(null,e,t,!0,n)};Et.hydrateRoot=function(e,t,n){if(!xp(e))throw Error(F(405));var r=n!=null&&n.hydratedSources||null,i=!1,a="",o=ov;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=av(t,null,e,1,n??null,i,!1,a,o),e[Ln]=t.current,qa(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new yl(t)};Et.render=function(e,t,n){if(!wl(t))throw Error(F(200));return bl(null,e,t,!1,n)};Et.unmountComponentAtNode=function(e){if(!wl(e))throw Error(F(40));return e._reactRootContainer?($r(function(){bl(null,null,e,!1,function(){e._reactRootContainer=null,e[Ln]=null})}),!0):!1};Et.unstable_batchedUpdates=dp;Et.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!wl(n))throw Error(F(200));if(e==null||e._reactInternals===void 0)throw Error(F(38));return bl(e,t,n,!1,r)};Et.version="18.3.1-next-f1338f8080-20240426";function sv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(sv)}catch(e){console.error(e)}}sv(),sg.exports=Et;var zb=sg.exports,lv,Ph=zb;lv=Ph.createRoot,Ph.hydrateRoot;/**
 * @remix-run/router v1.20.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Za(){return Za=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Za.apply(this,arguments)}var Qn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Qn||(Qn={}));const zh="popstate";function Ab(e){e===void 0&&(e={});function t(i,a){let{pathname:o="/",search:s="",hash:l=""}=Gr(i.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),Bu("",{pathname:o,search:s,hash:l},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function n(i,a){let o=i.document.querySelector("base"),s="";if(o&&o.getAttribute("href")){let l=i.location.href,u=l.indexOf("#");s=u===-1?l:l.slice(0,u)}return s+"#"+(typeof a=="string"?a:Ns(a))}function r(i,a){yp(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(a)+")")}return Lb(t,n,r,e)}function Fe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function yp(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Mb(){return Math.random().toString(36).substr(2,8)}function Ah(e,t){return{usr:e.state,key:e.key,idx:t}}function Bu(e,t,n,r){return n===void 0&&(n=null),Za({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Gr(t):t,{state:n,key:t&&t.key||r||Mb()})}function Ns(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Gr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Lb(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,s=Qn.Pop,l=null,u=d();u==null&&(u=0,o.replaceState(Za({},o.state,{idx:u}),""));function d(){return(o.state||{idx:null}).idx}function p(){s=Qn.Pop;let b=d(),v=b==null?null:b-u;u=b,l&&l({action:s,location:y.location,delta:v})}function f(b,v){s=Qn.Push;let h=Bu(y.location,b,v);n&&n(h,b),u=d()+1;let m=Ah(h,u),w=y.createHref(h);try{o.pushState(m,"",w)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;i.location.assign(w)}a&&l&&l({action:s,location:y.location,delta:1})}function g(b,v){s=Qn.Replace;let h=Bu(y.location,b,v);n&&n(h,b),u=d();let m=Ah(h,u),w=y.createHref(h);o.replaceState(m,"",w),a&&l&&l({action:s,location:y.location,delta:0})}function x(b){let v=i.location.origin!=="null"?i.location.origin:i.location.href,h=typeof b=="string"?b:Ns(b);return h=h.replace(/ $/,"%20"),Fe(v,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,v)}let y={get action(){return s},get location(){return e(i,o)},listen(b){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(zh,p),l=b,()=>{i.removeEventListener(zh,p),l=null}},createHref(b){return t(i,b)},createURL:x,encodeLocation(b){let v=x(b);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:f,replace:g,go(b){return o.go(b)}};return y}var Mh;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Mh||(Mh={}));function Ob(e,t,n){return n===void 0&&(n="/"),Ib(e,t,n,!1)}function Ib(e,t,n,r){let i=typeof t=="string"?Gr(t):t,a=wp(i.pathname||"/",n);if(a==null)return null;let o=cv(e);Rb(o);let s=null;for(let l=0;s==null&&l<o.length;++l){let u=Gb(a);s=Ub(o[l],u,r)}return s}function cv(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(a,o,s)=>{let l={relativePath:s===void 0?a.path||"":s,caseSensitive:a.caseSensitive===!0,childrenIndex:o,route:a};l.relativePath.startsWith("/")&&(Fe(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=sr([r,l.relativePath]),d=n.concat(l);a.children&&a.children.length>0&&(Fe(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),cv(a.children,t,d,u)),!(a.path==null&&!a.index)&&t.push({path:u,score:qb(u,a.index),routesMeta:d})};return e.forEach((a,o)=>{var s;if(a.path===""||!((s=a.path)!=null&&s.includes("?")))i(a,o);else for(let l of uv(a.path))i(a,o,l)}),t}function uv(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),a=n.replace(/\?$/,"");if(r.length===0)return i?[a,""]:[a];let o=uv(r.join("/")),s=[];return s.push(...o.map(l=>l===""?a:[a,l].join("/"))),i&&s.push(...o),s.map(l=>e.startsWith("/")&&l===""?"/":l)}function Rb(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Hb(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Db=/^:[\w-]+$/,Vb=3,Nb=2,Fb=1,$b=10,Bb=-2,Lh=e=>e==="*";function qb(e,t){let n=e.split("/"),r=n.length;return n.some(Lh)&&(r+=Bb),t&&(r+=Nb),n.filter(i=>!Lh(i)).reduce((i,a)=>i+(Db.test(a)?Vb:a===""?Fb:$b),r)}function Hb(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function Ub(e,t,n){let{routesMeta:r}=e,i={},a="/",o=[];for(let s=0;s<r.length;++s){let l=r[s],u=s===r.length-1,d=a==="/"?t:t.slice(a.length)||"/",p=Oh({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},d),f=l.route;if(!p&&u&&n&&!r[r.length-1].route.index&&(p=Oh({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},d)),!p)return null;Object.assign(i,p.params),o.push({params:i,pathname:sr([a,p.pathname]),pathnameBase:Qb(sr([a,p.pathnameBase])),route:f}),p.pathnameBase!=="/"&&(a=sr([a,p.pathnameBase]))}return o}function Oh(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Wb(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce((u,d,p)=>{let{paramName:f,isOptional:g}=d;if(f==="*"){let y=s[p]||"";o=a.slice(0,a.length-y.length).replace(/(.)\/+$/,"$1")}const x=s[p];return g&&!x?u[f]=void 0:u[f]=(x||"").replace(/%2F/g,"/"),u},{}),pathname:a,pathnameBase:o,pattern:e}}function Wb(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),yp(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,s,l)=>(r.push({paramName:s,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function Gb(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return yp(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function wp(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Yb(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Gr(e):e;return{pathname:n?n.startsWith("/")?n:Kb(n,t):t,search:Zb(r),hash:Jb(i)}}function Kb(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function wc(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Xb(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function dv(e,t){let n=Xb(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function pv(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Gr(e):(i=Za({},e),Fe(!i.pathname||!i.pathname.includes("?"),wc("?","pathname","search",i)),Fe(!i.pathname||!i.pathname.includes("#"),wc("#","pathname","hash",i)),Fe(!i.search||!i.search.includes("#"),wc("#","search","hash",i)));let a=e===""||i.pathname==="",o=a?"/":i.pathname,s;if(o==null)s=n;else{let p=t.length-1;if(!r&&o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),p-=1;i.pathname=f.join("/")}s=p>=0?t[p]:"/"}let l=Yb(i,s),u=o&&o!=="/"&&o.endsWith("/"),d=(a||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||d)&&(l.pathname+="/"),l}const sr=e=>e.join("/").replace(/\/\/+/g,"/"),Qb=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Zb=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Jb=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function e3(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const fv=["post","put","patch","delete"];new Set(fv);const t3=["get",...fv];new Set(t3);/**
 * React Router v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ja(){return Ja=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ja.apply(this,arguments)}const bp=k.createContext(null),n3=k.createContext(null),Yr=k.createContext(null),Sl=k.createContext(null),Kr=k.createContext({outlet:null,matches:[],isDataRoute:!1}),hv=k.createContext(null);function r3(e,t){let{relative:n}=t===void 0?{}:t;po()||Fe(!1);let{basename:r,navigator:i}=k.useContext(Yr),{hash:a,pathname:o,search:s}=gv(e,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:sr([r,o])),i.createHref({pathname:l,search:s,hash:a})}function po(){return k.useContext(Sl)!=null}function mn(){return po()||Fe(!1),k.useContext(Sl).location}function mv(e){k.useContext(Yr).static||k.useLayoutEffect(e)}function kl(){let{isDataRoute:e}=k.useContext(Kr);return e?g3():i3()}function i3(){po()||Fe(!1);let e=k.useContext(bp),{basename:t,future:n,navigator:r}=k.useContext(Yr),{matches:i}=k.useContext(Kr),{pathname:a}=mn(),o=JSON.stringify(dv(i,n.v7_relativeSplatPath)),s=k.useRef(!1);return mv(()=>{s.current=!0}),k.useCallback(function(u,d){if(d===void 0&&(d={}),!s.current)return;if(typeof u=="number"){r.go(u);return}let p=pv(u,JSON.parse(o),a,d.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:sr([t,p.pathname])),(d.replace?r.replace:r.push)(p,d.state,d)},[t,r,o,a,e])}function gv(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=k.useContext(Yr),{matches:i}=k.useContext(Kr),{pathname:a}=mn(),o=JSON.stringify(dv(i,r.v7_relativeSplatPath));return k.useMemo(()=>pv(e,JSON.parse(o),a,n==="path"),[e,o,a,n])}function a3(e,t){return o3(e,t)}function o3(e,t,n,r){po()||Fe(!1);let{navigator:i}=k.useContext(Yr),{matches:a}=k.useContext(Kr),o=a[a.length-1],s=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let u=mn(),d;if(t){var p;let b=typeof t=="string"?Gr(t):t;l==="/"||(p=b.pathname)!=null&&p.startsWith(l)||Fe(!1),d=b}else d=u;let f=d.pathname||"/",g=f;if(l!=="/"){let b=l.replace(/^\//,"").split("/");g="/"+f.replace(/^\//,"").split("/").slice(b.length).join("/")}let x=Ob(e,{pathname:g}),y=d3(x&&x.map(b=>Object.assign({},b,{params:Object.assign({},s,b.params),pathname:sr([l,i.encodeLocation?i.encodeLocation(b.pathname).pathname:b.pathname]),pathnameBase:b.pathnameBase==="/"?l:sr([l,i.encodeLocation?i.encodeLocation(b.pathnameBase).pathname:b.pathnameBase])})),a,n,r);return t&&y?k.createElement(Sl.Provider,{value:{location:Ja({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Qn.Pop}},y):y}function s3(){let e=m3(),t=e3(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},t),n?k.createElement("pre",{style:i},n):null,null)}const l3=k.createElement(s3,null);class c3 extends k.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?k.createElement(Kr.Provider,{value:this.props.routeContext},k.createElement(hv.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function u3(e){let{routeContext:t,match:n,children:r}=e,i=k.useContext(bp);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),k.createElement(Kr.Provider,{value:t},r)}function d3(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var a;if(!n)return null;if(n.errors)e=n.matches;else if((a=r)!=null&&a.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let o=e,s=(i=n)==null?void 0:i.errors;if(s!=null){let d=o.findIndex(p=>p.route.id&&(s==null?void 0:s[p.route.id])!==void 0);d>=0||Fe(!1),o=o.slice(0,Math.min(o.length,d+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let p=o[d];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(u=d),p.route.id){let{loaderData:f,errors:g}=n,x=p.route.loader&&f[p.route.id]===void 0&&(!g||g[p.route.id]===void 0);if(p.route.lazy||x){l=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((d,p,f)=>{let g,x=!1,y=null,b=null;n&&(g=s&&p.route.id?s[p.route.id]:void 0,y=p.route.errorElement||l3,l&&(u<0&&f===0?(x=!0,b=null):u===f&&(x=!0,b=p.route.hydrateFallbackElement||null)));let v=t.concat(o.slice(0,f+1)),h=()=>{let m;return g?m=y:x?m=b:p.route.Component?m=k.createElement(p.route.Component,null):p.route.element?m=p.route.element:m=d,k.createElement(u3,{match:p,routeContext:{outlet:d,matches:v,isDataRoute:n!=null},children:m})};return n&&(p.route.ErrorBoundary||p.route.errorElement||f===0)?k.createElement(c3,{location:n.location,revalidation:n.revalidation,component:y,error:g,children:h(),routeContext:{outlet:null,matches:v,isDataRoute:!0}}):h()},null)}var vv=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(vv||{}),Fs=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Fs||{});function p3(e){let t=k.useContext(bp);return t||Fe(!1),t}function f3(e){let t=k.useContext(n3);return t||Fe(!1),t}function h3(e){let t=k.useContext(Kr);return t||Fe(!1),t}function xv(e){let t=h3(),n=t.matches[t.matches.length-1];return n.route.id||Fe(!1),n.route.id}function m3(){var e;let t=k.useContext(hv),n=f3(Fs.UseRouteError),r=xv(Fs.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function g3(){let{router:e}=p3(vv.UseNavigateStable),t=xv(Fs.UseNavigateStable),n=k.useRef(!1);return mv(()=>{n.current=!0}),k.useCallback(function(i,a){a===void 0&&(a={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Ja({fromRouteId:t},a)))},[e,t])}function rn(e){Fe(!1)}function v3(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Qn.Pop,navigator:a,static:o=!1,future:s}=e;po()&&Fe(!1);let l=t.replace(/^\/*/,"/"),u=k.useMemo(()=>({basename:l,navigator:a,static:o,future:Ja({v7_relativeSplatPath:!1},s)}),[l,s,a,o]);typeof r=="string"&&(r=Gr(r));let{pathname:d="/",search:p="",hash:f="",state:g=null,key:x="default"}=r,y=k.useMemo(()=>{let b=wp(d,l);return b==null?null:{location:{pathname:b,search:p,hash:f,state:g,key:x},navigationType:i}},[l,d,p,f,g,x,i]);return y==null?null:k.createElement(Yr.Provider,{value:u},k.createElement(Sl.Provider,{children:n,value:y}))}function x3(e){let{children:t,location:n}=e;return a3(qu(t),n)}new Promise(()=>{});function qu(e,t){t===void 0&&(t=[]);let n=[];return k.Children.forEach(e,(r,i)=>{if(!k.isValidElement(r))return;let a=[...t,i];if(r.type===k.Fragment){n.push.apply(n,qu(r.props.children,a));return}r.type!==rn&&Fe(!1),!r.props.index||!r.props.children||Fe(!1);let o={id:r.props.id||a.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=qu(r.props.children,a)),n.push(o)}),n}/**
 * React Router DOM v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Hu(){return Hu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Hu.apply(this,arguments)}function y3(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,a;for(a=0;a<r.length;a++)i=r[a],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function w3(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function b3(e,t){return e.button===0&&(!t||t==="_self")&&!w3(e)}const S3=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],k3="6";try{window.__reactRouterVersion=k3}catch{}const j3="startTransition",Ih=y2[j3];function _3(e){let{basename:t,children:n,future:r,window:i}=e,a=k.useRef();a.current==null&&(a.current=Ab({window:i,v5Compat:!0}));let o=a.current,[s,l]=k.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},d=k.useCallback(p=>{u&&Ih?Ih(()=>l(p)):l(p)},[l,u]);return k.useLayoutEffect(()=>o.listen(d),[o,d]),k.createElement(v3,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:o,future:r})}const T3=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",C3=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,yv=k.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:a,replace:o,state:s,target:l,to:u,preventScrollReset:d,viewTransition:p}=t,f=y3(t,S3),{basename:g}=k.useContext(Yr),x,y=!1;if(typeof u=="string"&&C3.test(u)&&(x=u,T3))try{let m=new URL(window.location.href),w=u.startsWith("//")?new URL(m.protocol+u):new URL(u),S=wp(w.pathname,g);w.origin===m.origin&&S!=null?u=S+w.search+w.hash:y=!0}catch{}let b=r3(u,{relative:i}),v=E3(u,{replace:o,state:s,target:l,preventScrollReset:d,relative:i,viewTransition:p});function h(m){r&&r(m),m.defaultPrevented||v(m)}return k.createElement("a",Hu({},f,{href:x||b,onClick:y||a?r:h,ref:n,target:l}))});var Rh;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Rh||(Rh={}));var Dh;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Dh||(Dh={}));function E3(e,t){let{target:n,replace:r,state:i,preventScrollReset:a,relative:o,viewTransition:s}=t===void 0?{}:t,l=kl(),u=mn(),d=gv(e,{relative:o});return k.useCallback(p=>{if(b3(p,n)){p.preventDefault();let f=r!==void 0?r:Ns(u)===Ns(d);l(e,{replace:f,state:i,preventScrollReset:a,relative:o,viewTransition:s})}},[u,l,d,r,i,n,e,a,o,s])}function P3(e){if(typeof Proxy>"u")return e;const t=new Map,n=(...r)=>e(...r);return new Proxy(n,{get:(r,i)=>i==="create"?e:(t.has(i)||t.set(i,e(i)),t.get(i))})}function jl(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}const Uu=e=>Array.isArray(e);function wv(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}function eo(e){return typeof e=="string"||Array.isArray(e)}function Vh(e){const t=[{},{}];return e==null||e.values.forEach((n,r)=>{t[0][r]=n.get(),t[1][r]=n.getVelocity()}),t}function Sp(e,t,n,r){if(typeof t=="function"){const[i,a]=Vh(r);t=t(n!==void 0?n:e.custom,i,a)}if(typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"){const[i,a]=Vh(r);t=t(n!==void 0?n:e.custom,i,a)}return t}function _l(e,t,n){const r=e.getProps();return Sp(r,t,n!==void 0?n:r.custom,e)}const kp=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],jp=["initial",...kp],fo=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Xr=new Set(fo),Cn=e=>e*1e3,En=e=>e/1e3,z3={type:"spring",stiffness:500,damping:25,restSpeed:10},A3=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),M3={type:"keyframes",duration:.8},L3={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},O3=(e,{keyframes:t})=>t.length>2?M3:Xr.has(e)?e.startsWith("scale")?A3(t[1]):z3:L3;function _p(e,t){return e?e[t]||e.default||e:void 0}const I3={skipAnimations:!1,useManualTiming:!1},R3=e=>e!==null;function Tl(e,{repeat:t,repeatType:n="loop"},r){const i=e.filter(R3),a=t&&n!=="loop"&&t%2===1?0:i.length-1;return!a||r===void 0?i[a]:r}const Je=e=>e;function D3(e){let t=new Set,n=new Set,r=!1,i=!1;const a=new WeakSet;let o={delta:0,timestamp:0,isProcessing:!1};function s(u){a.has(u)&&(l.schedule(u),e()),u(o)}const l={schedule:(u,d=!1,p=!1)=>{const g=p&&r?t:n;return d&&a.add(u),g.has(u)||g.add(u),u},cancel:u=>{n.delete(u),a.delete(u)},process:u=>{if(o=u,r){i=!0;return}r=!0,[t,n]=[n,t],n.clear(),t.forEach(s),r=!1,i&&(i=!1,l.process(u))}};return l}const Io=["read","resolveKeyframes","update","preRender","render","postRender"],V3=40;function bv(e,t){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},a=()=>n=!0,o=Io.reduce((v,h)=>(v[h]=D3(a),v),{}),{read:s,resolveKeyframes:l,update:u,preRender:d,render:p,postRender:f}=o,g=()=>{const v=performance.now();n=!1,i.delta=r?1e3/60:Math.max(Math.min(v-i.timestamp,V3),1),i.timestamp=v,i.isProcessing=!0,s.process(i),l.process(i),u.process(i),d.process(i),p.process(i),f.process(i),i.isProcessing=!1,n&&t&&(r=!1,e(g))},x=()=>{n=!0,r=!0,i.isProcessing||e(g)};return{schedule:Io.reduce((v,h)=>{const m=o[h];return v[h]=(w,S=!1,j=!1)=>(n||x(),m.schedule(w,S,j)),v},{}),cancel:v=>{for(let h=0;h<Io.length;h++)o[Io[h]].cancel(v)},state:i,steps:o}}const{schedule:oe,cancel:Zt,state:qe,steps:bc}=bv(typeof requestAnimationFrame<"u"?requestAnimationFrame:Je,!0),Sv=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,N3=1e-7,F3=12;function $3(e,t,n,r,i){let a,o,s=0;do o=t+(n-t)/2,a=Sv(o,r,i)-e,a>0?n=o:t=o;while(Math.abs(a)>N3&&++s<F3);return o}function ho(e,t,n,r){if(e===t&&n===r)return Je;const i=a=>$3(a,0,1,e,n);return a=>a===0||a===1?a:Sv(i(a),t,r)}const kv=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,jv=e=>t=>1-e(1-t),_v=ho(.33,1.53,.69,.99),Tp=jv(_v),Tv=kv(Tp),Cv=e=>(e*=2)<1?.5*Tp(e):.5*(2-Math.pow(2,-10*(e-1))),Cp=e=>1-Math.sin(Math.acos(e)),Ev=jv(Cp),Pv=kv(Cp),zv=e=>/^0[^.\s]+$/u.test(e);function B3(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||zv(e):!0}let q3=Je,Wu=Je;const Av=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),Mv=e=>t=>typeof t=="string"&&t.startsWith(e),Lv=Mv("--"),H3=Mv("var(--"),Ep=e=>H3(e)?U3.test(e.split("/*")[0].trim()):!1,U3=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,W3=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function G3(e){const t=W3.exec(e);if(!t)return[,];const[,n,r,i]=t;return[`--${n??r}`,i]}function Ov(e,t,n=1){const[r,i]=G3(e);if(!r)return;const a=window.getComputedStyle(t).getPropertyValue(r);if(a){const o=a.trim();return Av(o)?parseFloat(o):o}return Ep(i)?Ov(i,t,n+1):i}const dr=(e,t,n)=>n>t?t:n<e?e:n,Wi={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},to={...Wi,transform:e=>dr(0,1,e)},Ro={...Wi,default:1},mo=e=>({test:t=>typeof t=="string"&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),Bn=mo("deg"),pn=mo("%"),W=mo("px"),Y3=mo("vh"),K3=mo("vw"),Nh={...pn,parse:e=>pn.parse(e)/100,transform:e=>pn.transform(e*100)},X3=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),Fh=e=>e===Wi||e===W,$h=(e,t)=>parseFloat(e.split(", ")[t]),Bh=(e,t)=>(n,{transform:r})=>{if(r==="none"||!r)return 0;const i=r.match(/^matrix3d\((.+)\)$/u);if(i)return $h(i[1],t);{const a=r.match(/^matrix\((.+)\)$/u);return a?$h(a[1],e):0}},Q3=new Set(["x","y","z"]),Z3=fo.filter(e=>!Q3.has(e));function J3(e){const t=[];return Z3.forEach(n=>{const r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t}const Ii={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:Bh(4,13),y:Bh(5,14)};Ii.translateX=Ii.x;Ii.translateY=Ii.y;const Iv=e=>t=>t.test(e),e5={test:e=>e==="auto",parse:e=>e},Rv=[Wi,W,pn,Bn,K3,Y3,e5],qh=e=>Rv.find(Iv(e)),Or=new Set;let Gu=!1,Yu=!1;function Dv(){if(Yu){const e=Array.from(Or).filter(r=>r.needsMeasurement),t=new Set(e.map(r=>r.element)),n=new Map;t.forEach(r=>{const i=J3(r);i.length&&(n.set(r,i),r.render())}),e.forEach(r=>r.measureInitialState()),t.forEach(r=>{r.render();const i=n.get(r);i&&i.forEach(([a,o])=>{var s;(s=r.getValue(a))===null||s===void 0||s.set(o)})}),e.forEach(r=>r.measureEndState()),e.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}Yu=!1,Gu=!1,Or.forEach(e=>e.complete()),Or.clear()}function Vv(){Or.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(Yu=!0)})}function t5(){Vv(),Dv()}class Pp{constructor(t,n,r,i,a,o=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...t],this.onComplete=n,this.name=r,this.motionValue=i,this.element=a,this.isAsync=o}scheduleResolve(){this.isScheduled=!0,this.isAsync?(Or.add(this),Gu||(Gu=!0,oe.read(Vv),oe.resolveKeyframes(Dv))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:n,element:r,motionValue:i}=this;for(let a=0;a<t.length;a++)if(t[a]===null)if(a===0){const o=i==null?void 0:i.get(),s=t[t.length-1];if(o!==void 0)t[0]=o;else if(r&&n){const l=r.readValue(n,s);l!=null&&(t[0]=l)}t[0]===void 0&&(t[0]=s),i&&o===void 0&&i.set(t[0])}else t[a]=t[a-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),Or.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,Or.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const Ea=e=>Math.round(e*1e5)/1e5,zp=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function n5(e){return e==null}const r5=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Ap=(e,t)=>n=>!!(typeof n=="string"&&r5.test(n)&&n.startsWith(e)||t&&!n5(n)&&Object.prototype.hasOwnProperty.call(n,t)),Nv=(e,t,n)=>r=>{if(typeof r!="string")return r;const[i,a,o,s]=r.match(zp);return{[e]:parseFloat(i),[t]:parseFloat(a),[n]:parseFloat(o),alpha:s!==void 0?parseFloat(s):1}},i5=e=>dr(0,255,e),Sc={...Wi,transform:e=>Math.round(i5(e))},zr={test:Ap("rgb","red"),parse:Nv("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+Sc.transform(e)+", "+Sc.transform(t)+", "+Sc.transform(n)+", "+Ea(to.transform(r))+")"};function a5(e){let t="",n="",r="",i="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}const Ku={test:Ap("#"),parse:a5,transform:zr.transform},fi={test:Ap("hsl","hue"),parse:Nv("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+pn.transform(Ea(t))+", "+pn.transform(Ea(n))+", "+Ea(to.transform(r))+")"},rt={test:e=>zr.test(e)||Ku.test(e)||fi.test(e),parse:e=>zr.test(e)?zr.parse(e):fi.test(e)?fi.parse(e):Ku.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?zr.transform(e):fi.transform(e)},o5=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function s5(e){var t,n;return isNaN(e)&&typeof e=="string"&&(((t=e.match(zp))===null||t===void 0?void 0:t.length)||0)+(((n=e.match(o5))===null||n===void 0?void 0:n.length)||0)>0}const Fv="number",$v="color",l5="var",c5="var(",Hh="${}",u5=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function no(e){const t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[];let a=0;const s=t.replace(u5,l=>(rt.test(l)?(r.color.push(a),i.push($v),n.push(rt.parse(l))):l.startsWith(c5)?(r.var.push(a),i.push(l5),n.push(l)):(r.number.push(a),i.push(Fv),n.push(parseFloat(l))),++a,Hh)).split(Hh);return{values:n,split:s,indexes:r,types:i}}function Bv(e){return no(e).values}function qv(e){const{split:t,types:n}=no(e),r=t.length;return i=>{let a="";for(let o=0;o<r;o++)if(a+=t[o],i[o]!==void 0){const s=n[o];s===Fv?a+=Ea(i[o]):s===$v?a+=rt.transform(i[o]):a+=i[o]}return a}}const d5=e=>typeof e=="number"?0:e;function p5(e){const t=Bv(e);return qv(e)(t.map(d5))}const pr={test:s5,parse:Bv,createTransformer:qv,getAnimatableNone:p5},f5=new Set(["brightness","contrast","saturate","opacity"]);function h5(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(zp)||[];if(!r)return e;const i=n.replace(r,"");let a=f5.has(t)?1:0;return r!==n&&(a*=100),t+"("+a+i+")"}const m5=/\b([a-z-]*)\(.*?\)/gu,Xu={...pr,getAnimatableNone:e=>{const t=e.match(m5);return t?t.map(h5).join(" "):e}},g5={borderWidth:W,borderTopWidth:W,borderRightWidth:W,borderBottomWidth:W,borderLeftWidth:W,borderRadius:W,radius:W,borderTopLeftRadius:W,borderTopRightRadius:W,borderBottomRightRadius:W,borderBottomLeftRadius:W,width:W,maxWidth:W,height:W,maxHeight:W,top:W,right:W,bottom:W,left:W,padding:W,paddingTop:W,paddingRight:W,paddingBottom:W,paddingLeft:W,margin:W,marginTop:W,marginRight:W,marginBottom:W,marginLeft:W,backgroundPositionX:W,backgroundPositionY:W},v5={rotate:Bn,rotateX:Bn,rotateY:Bn,rotateZ:Bn,scale:Ro,scaleX:Ro,scaleY:Ro,scaleZ:Ro,skew:Bn,skewX:Bn,skewY:Bn,distance:W,translateX:W,translateY:W,translateZ:W,x:W,y:W,z:W,perspective:W,transformPerspective:W,opacity:to,originX:Nh,originY:Nh,originZ:W},Uh={...Wi,transform:Math.round},Mp={...g5,...v5,zIndex:Uh,size:W,fillOpacity:to,strokeOpacity:to,numOctaves:Uh},x5={...Mp,color:rt,backgroundColor:rt,outlineColor:rt,fill:rt,stroke:rt,borderColor:rt,borderTopColor:rt,borderRightColor:rt,borderBottomColor:rt,borderLeftColor:rt,filter:Xu,WebkitFilter:Xu},Lp=e=>x5[e];function Hv(e,t){let n=Lp(e);return n!==Xu&&(n=pr),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const y5=new Set(["auto","none","0"]);function w5(e,t,n){let r=0,i;for(;r<e.length&&!i;){const a=e[r];typeof a=="string"&&!y5.has(a)&&no(a).values.length&&(i=e[r]),r++}if(i&&n)for(const a of t)e[a]=Hv(n,i)}class Uv extends Pp{constructor(t,n,r,i,a){super(t,n,r,i,a,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:n,name:r}=this;if(!n||!n.current)return;super.readKeyframes();for(let l=0;l<t.length;l++){let u=t[l];if(typeof u=="string"&&(u=u.trim(),Ep(u))){const d=Ov(u,n.current);d!==void 0&&(t[l]=d),l===t.length-1&&(this.finalKeyframe=u)}}if(this.resolveNoneKeyframes(),!X3.has(r)||t.length!==2)return;const[i,a]=t,o=qh(i),s=qh(a);if(o!==s)if(Fh(o)&&Fh(s))for(let l=0;l<t.length;l++){const u=t[l];typeof u=="string"&&(t[l]=parseFloat(u))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:n}=this,r=[];for(let i=0;i<t.length;i++)B3(t[i])&&r.push(i);r.length&&w5(t,r,n)}measureInitialState(){const{element:t,unresolvedKeyframes:n,name:r}=this;if(!t||!t.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Ii[r](t.measureViewportBox(),window.getComputedStyle(t.current)),n[0]=this.measuredOrigin;const i=n[n.length-1];i!==void 0&&t.getValue(r,i).jump(i,!1)}measureEndState(){var t;const{element:n,name:r,unresolvedKeyframes:i}=this;if(!n||!n.current)return;const a=n.getValue(r);a&&a.jump(this.measuredOrigin,!1);const o=i.length-1,s=i[o];i[o]=Ii[r](n.measureViewportBox(),window.getComputedStyle(n.current)),s!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=s),!((t=this.removedTransforms)===null||t===void 0)&&t.length&&this.removedTransforms.forEach(([l,u])=>{n.getValue(l).set(u)}),this.resolveNoneKeyframes()}}function Op(e){return typeof e=="function"}let rs;function b5(){rs=void 0}const fn={now:()=>(rs===void 0&&fn.set(qe.isProcessing||I3.useManualTiming?qe.timestamp:performance.now()),rs),set:e=>{rs=e,queueMicrotask(b5)}},Wh=(e,t)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(pr.test(e)||e==="0")&&!e.startsWith("url("));function S5(e){const t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function k5(e,t,n,r){const i=e[0];if(i===null)return!1;if(t==="display"||t==="visibility")return!0;const a=e[e.length-1],o=Wh(i,t),s=Wh(a,t);return!o||!s?!1:S5(e)||(n==="spring"||Op(n))&&r}const j5=40;class Wv{constructor({autoplay:t=!0,delay:n=0,type:r="keyframes",repeat:i=0,repeatDelay:a=0,repeatType:o="loop",...s}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=fn.now(),this.options={autoplay:t,delay:n,type:r,repeat:i,repeatDelay:a,repeatType:o,...s},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>j5?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&t5(),this._resolved}onKeyframesResolved(t,n){this.resolvedAt=fn.now(),this.hasAttemptedResolve=!0;const{name:r,type:i,velocity:a,delay:o,onComplete:s,onUpdate:l,isGenerator:u}=this.options;if(!u&&!k5(t,r,i,a))if(o)this.options.duration=0;else{l==null||l(Tl(t,this.options,n)),s==null||s(),this.resolveFinishedPromise();return}const d=this.initPlayback(t,n);d!==!1&&(this._resolved={keyframes:t,finalKeyframe:n,...d},this.onPostResolved())}onPostResolved(){}then(t,n){return this.currentFinishedPromise.then(t,n)}updateFinishedPromise(){this.currentFinishedPromise=new Promise(t=>{this.resolveFinishedPromise=t})}}function Ip(e,t){return t?e*(1e3/t):0}const _5=5;function Gv(e,t,n){const r=Math.max(t-_5,0);return Ip(n-e(r),t-r)}const kc=.001,T5=.01,C5=10,E5=.05,P5=1;function z5({duration:e=800,bounce:t=.25,velocity:n=0,mass:r=1}){let i,a,o=1-t;o=dr(E5,P5,o),e=dr(T5,C5,En(e)),o<1?(i=u=>{const d=u*o,p=d*e,f=d-n,g=Qu(u,o),x=Math.exp(-p);return kc-f/g*x},a=u=>{const p=u*o*e,f=p*n+n,g=Math.pow(o,2)*Math.pow(u,2)*e,x=Math.exp(-p),y=Qu(Math.pow(u,2),o);return(-i(u)+kc>0?-1:1)*((f-g)*x)/y}):(i=u=>{const d=Math.exp(-u*e),p=(u-n)*e+1;return-kc+d*p},a=u=>{const d=Math.exp(-u*e),p=(n-u)*(e*e);return d*p});const s=5/e,l=M5(i,a,s);if(e=Cn(e),isNaN(l))return{stiffness:100,damping:10,duration:e};{const u=Math.pow(l,2)*r;return{stiffness:u,damping:o*2*Math.sqrt(r*u),duration:e}}}const A5=12;function M5(e,t,n){let r=n;for(let i=1;i<A5;i++)r=r-e(r)/t(r);return r}function Qu(e,t){return e*Math.sqrt(1-t*t)}const L5=["duration","bounce"],O5=["stiffness","damping","mass"];function Gh(e,t){return t.some(n=>e[n]!==void 0)}function I5(e){let t={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...e};if(!Gh(e,O5)&&Gh(e,L5)){const n=z5(e);t={...t,...n,mass:1},t.isResolvedFromDuration=!0}return t}function Yv({keyframes:e,restDelta:t,restSpeed:n,...r}){const i=e[0],a=e[e.length-1],o={done:!1,value:i},{stiffness:s,damping:l,mass:u,duration:d,velocity:p,isResolvedFromDuration:f}=I5({...r,velocity:-En(r.velocity||0)}),g=p||0,x=l/(2*Math.sqrt(s*u)),y=a-i,b=En(Math.sqrt(s/u)),v=Math.abs(y)<5;n||(n=v?.01:2),t||(t=v?.005:.5);let h;if(x<1){const m=Qu(b,x);h=w=>{const S=Math.exp(-x*b*w);return a-S*((g+x*b*y)/m*Math.sin(m*w)+y*Math.cos(m*w))}}else if(x===1)h=m=>a-Math.exp(-b*m)*(y+(g+b*y)*m);else{const m=b*Math.sqrt(x*x-1);h=w=>{const S=Math.exp(-x*b*w),j=Math.min(m*w,300);return a-S*((g+x*b*y)*Math.sinh(j)+m*y*Math.cosh(j))/m}}return{calculatedDuration:f&&d||null,next:m=>{const w=h(m);if(f)o.done=m>=d;else{let S=0;x<1&&(S=m===0?Cn(g):Gv(h,m,w));const j=Math.abs(S)<=n,C=Math.abs(a-w)<=t;o.done=j&&C}return o.value=o.done?a:w,o}}}function Yh({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:a=500,modifyTarget:o,min:s,max:l,restDelta:u=.5,restSpeed:d}){const p=e[0],f={done:!1,value:p},g=T=>s!==void 0&&T<s||l!==void 0&&T>l,x=T=>s===void 0?l:l===void 0||Math.abs(s-T)<Math.abs(l-T)?s:l;let y=n*t;const b=p+y,v=o===void 0?b:o(b);v!==b&&(y=v-p);const h=T=>-y*Math.exp(-T/r),m=T=>v+h(T),w=T=>{const A=h(T),E=m(T);f.done=Math.abs(A)<=u,f.value=f.done?v:E};let S,j;const C=T=>{g(f.value)&&(S=T,j=Yv({keyframes:[f.value,x(f.value)],velocity:Gv(m,T,f.value),damping:i,stiffness:a,restDelta:u,restSpeed:d}))};return C(0),{calculatedDuration:null,next:T=>{let A=!1;return!j&&S===void 0&&(A=!0,w(T),C(T)),S!==void 0&&T>=S?j.next(T-S):(!A&&w(T),f)}}}const R5=ho(.42,0,1,1),D5=ho(0,0,.58,1),Kv=ho(.42,0,.58,1),V5=e=>Array.isArray(e)&&typeof e[0]!="number",Rp=e=>Array.isArray(e)&&typeof e[0]=="number",Kh={linear:Je,easeIn:R5,easeInOut:Kv,easeOut:D5,circIn:Cp,circInOut:Pv,circOut:Ev,backIn:Tp,backInOut:Tv,backOut:_v,anticipate:Cv},Xh=e=>{if(Rp(e)){Wu(e.length===4);const[t,n,r,i]=e;return ho(t,n,r,i)}else if(typeof e=="string")return Wu(Kh[e]!==void 0),Kh[e];return e},N5=(e,t)=>n=>t(e(n)),Pn=(...e)=>e.reduce(N5),Br=(e,t,n)=>{const r=t-e;return r===0?1:(n-e)/r},Ce=(e,t,n)=>e+(t-e)*n;function jc(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function F5({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,a=0,o=0;if(!t)i=a=o=n;else{const s=n<.5?n*(1+t):n+t-n*t,l=2*n-s;i=jc(l,s,e+1/3),a=jc(l,s,e),o=jc(l,s,e-1/3)}return{red:Math.round(i*255),green:Math.round(a*255),blue:Math.round(o*255),alpha:r}}function $s(e,t){return n=>n>0?t:e}const _c=(e,t,n)=>{const r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},$5=[Ku,zr,fi],B5=e=>$5.find(t=>t.test(e));function Qh(e){const t=B5(e);if(!t)return!1;let n=t.parse(e);return t===fi&&(n=F5(n)),n}const Zh=(e,t)=>{const n=Qh(e),r=Qh(t);if(!n||!r)return $s(e,t);const i={...n};return a=>(i.red=_c(n.red,r.red,a),i.green=_c(n.green,r.green,a),i.blue=_c(n.blue,r.blue,a),i.alpha=Ce(n.alpha,r.alpha,a),zr.transform(i))},Zu=new Set(["none","hidden"]);function q5(e,t){return Zu.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function H5(e,t){return n=>Ce(e,t,n)}function Dp(e){return typeof e=="number"?H5:typeof e=="string"?Ep(e)?$s:rt.test(e)?Zh:G5:Array.isArray(e)?Xv:typeof e=="object"?rt.test(e)?Zh:U5:$s}function Xv(e,t){const n=[...e],r=n.length,i=e.map((a,o)=>Dp(a)(a,t[o]));return a=>{for(let o=0;o<r;o++)n[o]=i[o](a);return n}}function U5(e,t){const n={...e,...t},r={};for(const i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=Dp(e[i])(e[i],t[i]));return i=>{for(const a in r)n[a]=r[a](i);return n}}function W5(e,t){var n;const r=[],i={color:0,var:0,number:0};for(let a=0;a<t.values.length;a++){const o=t.types[a],s=e.indexes[o][i[o]],l=(n=e.values[s])!==null&&n!==void 0?n:0;r[a]=l,i[o]++}return r}const G5=(e,t)=>{const n=pr.createTransformer(t),r=no(e),i=no(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?Zu.has(e)&&!i.values.length||Zu.has(t)&&!r.values.length?q5(e,t):Pn(Xv(W5(r,i),i.values),n):$s(e,t)};function Qv(e,t,n){return typeof e=="number"&&typeof t=="number"&&typeof n=="number"?Ce(e,t,n):Dp(e)(e,t)}function Y5(e,t,n){const r=[],i=n||Qv,a=e.length-1;for(let o=0;o<a;o++){let s=i(e[o],e[o+1]);if(t){const l=Array.isArray(t)?t[o]||Je:t;s=Pn(l,s)}r.push(s)}return r}function Vp(e,t,{clamp:n=!0,ease:r,mixer:i}={}){const a=e.length;if(Wu(a===t.length),a===1)return()=>t[0];if(a===2&&e[0]===e[1])return()=>t[1];e[0]>e[a-1]&&(e=[...e].reverse(),t=[...t].reverse());const o=Y5(t,r,i),s=o.length,l=u=>{let d=0;if(s>1)for(;d<e.length-2&&!(u<e[d+1]);d++);const p=Br(e[d],e[d+1],u);return o[d](p)};return n?u=>l(dr(e[0],e[a-1],u)):l}function K5(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const i=Br(0,t,r);e.push(Ce(n,1,i))}}function Zv(e){const t=[0];return K5(t,e.length-1),t}function X5(e,t){return e.map(n=>n*t)}function Q5(e,t){return e.map(()=>t||Kv).splice(0,e.length-1)}function Bs({duration:e=300,keyframes:t,times:n,ease:r="easeInOut"}){const i=V5(r)?r.map(Xh):Xh(r),a={done:!1,value:t[0]},o=X5(n&&n.length===t.length?n:Zv(t),e),s=Vp(o,t,{ease:Array.isArray(i)?i:Q5(t,i)});return{calculatedDuration:e,next:l=>(a.value=s(l),a.done=l>=e,a)}}const Jh=2e4;function Z5(e){let t=0;const n=50;let r=e.next(t);for(;!r.done&&t<Jh;)t+=n,r=e.next(t);return t>=Jh?1/0:t}const J5=e=>{const t=({timestamp:n})=>e(n);return{start:()=>oe.update(t,!0),stop:()=>Zt(t),now:()=>qe.isProcessing?qe.timestamp:fn.now()}},e7={decay:Yh,inertia:Yh,tween:Bs,keyframes:Bs,spring:Yv},t7=e=>e/100;class Np extends Wv{constructor(t){super(t),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:l}=this.options;l&&l()};const{name:n,motionValue:r,element:i,keyframes:a}=this.options,o=(i==null?void 0:i.KeyframeResolver)||Pp,s=(l,u)=>this.onKeyframesResolved(l,u);this.resolver=new o(a,s,n,r,i),this.resolver.scheduleResolve()}initPlayback(t){const{type:n="keyframes",repeat:r=0,repeatDelay:i=0,repeatType:a,velocity:o=0}=this.options,s=Op(n)?n:e7[n]||Bs;let l,u;s!==Bs&&typeof t[0]!="number"&&(l=Pn(t7,Qv(t[0],t[1])),t=[0,100]);const d=s({...this.options,keyframes:t});a==="mirror"&&(u=s({...this.options,keyframes:[...t].reverse(),velocity:-o})),d.calculatedDuration===null&&(d.calculatedDuration=Z5(d));const{calculatedDuration:p}=d,f=p+i,g=f*(r+1)-i;return{generator:d,mirroredGenerator:u,mapPercentToKeyframes:l,calculatedDuration:p,resolvedDuration:f,totalDuration:g}}onPostResolved(){const{autoplay:t=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!t?this.pause():this.state=this.pendingPlayState}tick(t,n=!1){const{resolved:r}=this;if(!r){const{keyframes:T}=this.options;return{done:!0,value:T[T.length-1]}}const{finalKeyframe:i,generator:a,mirroredGenerator:o,mapPercentToKeyframes:s,keyframes:l,calculatedDuration:u,totalDuration:d,resolvedDuration:p}=r;if(this.startTime===null)return a.next(0);const{delay:f,repeat:g,repeatType:x,repeatDelay:y,onUpdate:b}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-d/this.speed,this.startTime)),n?this.currentTime=t:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(t-this.startTime)*this.speed;const v=this.currentTime-f*(this.speed>=0?1:-1),h=this.speed>=0?v<0:v>d;this.currentTime=Math.max(v,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=d);let m=this.currentTime,w=a;if(g){const T=Math.min(this.currentTime,d)/p;let A=Math.floor(T),E=T%1;!E&&T>=1&&(E=1),E===1&&A--,A=Math.min(A,g+1),!!(A%2)&&(x==="reverse"?(E=1-E,y&&(E-=y/p)):x==="mirror"&&(w=o)),m=dr(0,1,E)*p}const S=h?{done:!1,value:l[0]}:w.next(m);s&&(S.value=s(S.value));let{done:j}=S;!h&&u!==null&&(j=this.speed>=0?this.currentTime>=d:this.currentTime<=0);const C=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&j);return C&&i!==void 0&&(S.value=Tl(l,this.options,i)),b&&b(S.value),C&&this.finish(),S}get duration(){const{resolved:t}=this;return t?En(t.calculatedDuration):0}get time(){return En(this.currentTime)}set time(t){t=Cn(t),this.currentTime=t,this.holdTime!==null||this.speed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.speed)}get speed(){return this.playbackSpeed}set speed(t){const n=this.playbackSpeed!==t;this.playbackSpeed=t,n&&(this.time=En(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:t=J5,onPlay:n,startTime:r}=this.options;this.driver||(this.driver=t(a=>this.tick(a))),n&&n();const i=this.driver.now();this.holdTime!==null?this.startTime=i-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=i):this.startTime=r??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var t;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(t=this.currentTime)!==null&&t!==void 0?t:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:t}=this.options;t&&t()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}}const n7=new Set(["opacity","clipPath","filter","transform"]),r7=10,i7=(e,t)=>{let n="";const r=Math.max(Math.round(t/r7),2);for(let i=0;i<r;i++)n+=e(Br(0,r-1,i))+", ";return`linear(${n.substring(0,n.length-2)})`};function Fp(e){let t;return()=>(t===void 0&&(t=e()),t)}const a7={linearEasing:void 0};function o7(e,t){const n=Fp(e);return()=>{var r;return(r=a7[t])!==null&&r!==void 0?r:n()}}const qs=o7(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing");function Jv(e){return!!(typeof e=="function"&&qs()||!e||typeof e=="string"&&(e in Ju||qs())||Rp(e)||Array.isArray(e)&&e.every(Jv))}const ga=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,Ju={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:ga([0,.65,.55,1]),circOut:ga([.55,0,1,.45]),backIn:ga([.31,.01,.66,-.59]),backOut:ga([.33,1.53,.69,.99])};function ex(e,t){if(e)return typeof e=="function"&&qs()?i7(e,t):Rp(e)?ga(e):Array.isArray(e)?e.map(n=>ex(n,t)||Ju.easeOut):Ju[e]}function s7(e,t,n,{delay:r=0,duration:i=300,repeat:a=0,repeatType:o="loop",ease:s,times:l}={}){const u={[t]:n};l&&(u.offset=l);const d=ex(s,i);return Array.isArray(d)&&(u.easing=d),e.animate(u,{delay:r,duration:i,easing:Array.isArray(d)?"linear":d,fill:"both",iterations:a+1,direction:o==="reverse"?"alternate":"normal"})}function em(e,t){e.timeline=t,e.onfinish=null}const l7=Fp(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),Hs=10,c7=2e4;function u7(e){return Op(e.type)||e.type==="spring"||!Jv(e.ease)}function d7(e,t){const n=new Np({...t,keyframes:e,repeat:0,delay:0,isGenerator:!0});let r={done:!1,value:e[0]};const i=[];let a=0;for(;!r.done&&a<c7;)r=n.sample(a),i.push(r.value),a+=Hs;return{times:void 0,keyframes:i,duration:a-Hs,ease:"linear"}}const tx={anticipate:Cv,backInOut:Tv,circInOut:Pv};function p7(e){return e in tx}class tm extends Wv{constructor(t){super(t);const{name:n,motionValue:r,element:i,keyframes:a}=this.options;this.resolver=new Uv(a,(o,s)=>this.onKeyframesResolved(o,s),n,r,i),this.resolver.scheduleResolve()}initPlayback(t,n){var r;let{duration:i=300,times:a,ease:o,type:s,motionValue:l,name:u,startTime:d}=this.options;if(!(!((r=l.owner)===null||r===void 0)&&r.current))return!1;if(typeof o=="string"&&qs()&&p7(o)&&(o=tx[o]),u7(this.options)){const{onComplete:f,onUpdate:g,motionValue:x,element:y,...b}=this.options,v=d7(t,b);t=v.keyframes,t.length===1&&(t[1]=t[0]),i=v.duration,a=v.times,o=v.ease,s="keyframes"}const p=s7(l.owner.current,u,t,{...this.options,duration:i,times:a,ease:o});return p.startTime=d??this.calcStartTime(),this.pendingTimeline?(em(p,this.pendingTimeline),this.pendingTimeline=void 0):p.onfinish=()=>{const{onComplete:f}=this.options;l.set(Tl(t,this.options,n)),f&&f(),this.cancel(),this.resolveFinishedPromise()},{animation:p,duration:i,times:a,type:s,ease:o,keyframes:t}}get duration(){const{resolved:t}=this;if(!t)return 0;const{duration:n}=t;return En(n)}get time(){const{resolved:t}=this;if(!t)return 0;const{animation:n}=t;return En(n.currentTime||0)}set time(t){const{resolved:n}=this;if(!n)return;const{animation:r}=n;r.currentTime=Cn(t)}get speed(){const{resolved:t}=this;if(!t)return 1;const{animation:n}=t;return n.playbackRate}set speed(t){const{resolved:n}=this;if(!n)return;const{animation:r}=n;r.playbackRate=t}get state(){const{resolved:t}=this;if(!t)return"idle";const{animation:n}=t;return n.playState}get startTime(){const{resolved:t}=this;if(!t)return null;const{animation:n}=t;return n.startTime}attachTimeline(t){if(!this._resolved)this.pendingTimeline=t;else{const{resolved:n}=this;if(!n)return Je;const{animation:r}=n;em(r,t)}return Je}play(){if(this.isStopped)return;const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.playState==="finished"&&this.updateFinishedPromise(),n.play()}pause(){const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:t}=this;if(!t)return;const{animation:n,keyframes:r,duration:i,type:a,ease:o,times:s}=t;if(n.playState==="idle"||n.playState==="finished")return;if(this.time){const{motionValue:u,onUpdate:d,onComplete:p,element:f,...g}=this.options,x=new Np({...g,keyframes:r,duration:i,type:a,ease:o,times:s,isGenerator:!0}),y=Cn(this.time);u.setWithVelocity(x.sample(y-Hs).value,x.sample(y).value,Hs)}const{onStop:l}=this.options;l&&l(),this.cancel()}complete(){const{resolved:t}=this;t&&t.animation.finish()}cancel(){const{resolved:t}=this;t&&t.animation.cancel()}static supports(t){const{motionValue:n,name:r,repeatDelay:i,repeatType:a,damping:o,type:s}=t;return l7()&&r&&n7.has(r)&&n&&n.owner&&n.owner.current instanceof HTMLElement&&!n.owner.getProps().onUpdate&&!i&&a!=="mirror"&&o!==0&&s!=="inertia"}}const nx=Fp(()=>window.ScrollTimeline!==void 0);class f7{constructor(t){this.stop=()=>this.runAll("stop"),this.animations=t.filter(Boolean)}then(t,n){return Promise.all(this.animations).then(t).catch(n)}getAll(t){return this.animations[0][t]}setAll(t,n){for(let r=0;r<this.animations.length;r++)this.animations[r][t]=n}attachTimeline(t,n){const r=this.animations.map(i=>nx()&&i.attachTimeline?i.attachTimeline(t):n(i));return()=>{r.forEach((i,a)=>{i&&i(),this.animations[a].stop()})}}get time(){return this.getAll("time")}set time(t){this.setAll("time",t)}get speed(){return this.getAll("speed")}set speed(t){this.setAll("speed",t)}get startTime(){return this.getAll("startTime")}get duration(){let t=0;for(let n=0;n<this.animations.length;n++)t=Math.max(t,this.animations[n].duration);return t}runAll(t){this.animations.forEach(n=>n[t]())}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}function h7({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:i,repeat:a,repeatType:o,repeatDelay:s,from:l,elapsed:u,...d}){return!!Object.keys(d).length}const $p=(e,t,n,r={},i,a)=>o=>{const s=_p(r,e)||{},l=s.delay||r.delay||0;let{elapsed:u=0}=r;u=u-Cn(l);let d={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:t.getVelocity(),...s,delay:-u,onUpdate:f=>{t.set(f),s.onUpdate&&s.onUpdate(f)},onComplete:()=>{o(),s.onComplete&&s.onComplete()},name:e,motionValue:t,element:a?void 0:i};h7(s)||(d={...d,...O3(e,d)}),d.duration&&(d.duration=Cn(d.duration)),d.repeatDelay&&(d.repeatDelay=Cn(d.repeatDelay)),d.from!==void 0&&(d.keyframes[0]=d.from);let p=!1;if((d.type===!1||d.duration===0&&!d.repeatDelay)&&(d.duration=0,d.delay===0&&(p=!0)),p&&!a&&t.get()!==void 0){const f=Tl(d.keyframes,s);if(f!==void 0)return oe.update(()=>{d.onUpdate(f),d.onComplete()}),new f7([])}return!a&&tm.supports(d)?new tm(d):new Np(d)},m7=e=>!!(e&&typeof e=="object"&&e.mix&&e.toValue),g7=e=>Uu(e)?e[e.length-1]||0:e;function Bp(e,t){e.indexOf(t)===-1&&e.push(t)}function qp(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class Hp{constructor(){this.subscriptions=[]}add(t){return Bp(this.subscriptions,t),()=>qp(this.subscriptions,t)}notify(t,n,r){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](t,n,r);else for(let a=0;a<i;a++){const o=this.subscriptions[a];o&&o(t,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const nm=30,v7=e=>!isNaN(parseFloat(e)),Pa={current:void 0};class x7{constructor(t,n={}){this.version="11.11.11",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(r,i=!0)=>{const a=fn.now();this.updatedAt!==a&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),i&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(t),this.owner=n.owner}setCurrent(t){this.current=t,this.updatedAt=fn.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=v7(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new Hp);const r=this.events[t].add(n);return t==="change"?()=>{r(),oe.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t,n=!0){!n||!this.passiveEffect?this.updateAndNotify(t,n):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,n,r){this.set(n),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-r}jump(t,n=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return Pa.current&&Pa.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const t=fn.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>nm)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,nm);return Ip(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function ln(e,t){return new x7(e,t)}function y7(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,ln(n))}function w7(e,t){const n=_l(e,t);let{transitionEnd:r={},transition:i={},...a}=n||{};a={...a,...r};for(const o in a){const s=g7(a[o]);y7(e,o,s)}}const Up=e=>e.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),b7="framerAppearId",rx="data-"+Up(b7);function ix(e){return e.props[rx]}const at=e=>!!(e&&e.getVelocity);function S7(e){return!!(at(e)&&e.add)}function ed(e,t){const n=e.getValue("willChange");if(S7(n))return n.add(t)}function k7({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function ax(e,t,{delay:n=0,transitionOverride:r,type:i}={}){var a;let{transition:o=e.getDefaultTransition(),transitionEnd:s,...l}=t;r&&(o=r);const u=[],d=i&&e.animationState&&e.animationState.getState()[i];for(const p in l){const f=e.getValue(p,(a=e.latestValues[p])!==null&&a!==void 0?a:null),g=l[p];if(g===void 0||d&&k7(d,p))continue;const x={delay:n,..._p(o||{},p)};let y=!1;if(window.MotionHandoffAnimation){const v=ix(e);if(v){const h=window.MotionHandoffAnimation(v,p,oe);h!==null&&(x.startTime=h,y=!0)}}ed(e,p),f.start($p(p,f,g,e.shouldReduceMotion&&Xr.has(p)?{type:!1}:x,e,y));const b=f.animation;b&&u.push(b)}return s&&Promise.all(u).then(()=>{oe.update(()=>{s&&w7(e,s)})}),u}function td(e,t,n={}){var r;const i=_l(e,t,n.type==="exit"?(r=e.presenceContext)===null||r===void 0?void 0:r.custom:void 0);let{transition:a=e.getDefaultTransition()||{}}=i||{};n.transitionOverride&&(a=n.transitionOverride);const o=i?()=>Promise.all(ax(e,i,n)):()=>Promise.resolve(),s=e.variantChildren&&e.variantChildren.size?(u=0)=>{const{delayChildren:d=0,staggerChildren:p,staggerDirection:f}=a;return j7(e,t,d+u,p,f,n)}:()=>Promise.resolve(),{when:l}=a;if(l){const[u,d]=l==="beforeChildren"?[o,s]:[s,o];return u().then(()=>d())}else return Promise.all([o(),s(n.delay)])}function j7(e,t,n=0,r=0,i=1,a){const o=[],s=(e.variantChildren.size-1)*r,l=i===1?(u=0)=>u*r:(u=0)=>s-u*r;return Array.from(e.variantChildren).sort(_7).forEach((u,d)=>{u.notify("AnimationStart",t),o.push(td(u,t,{...a,delay:n+l(d)}).then(()=>u.notify("AnimationComplete",t)))}),Promise.all(o)}function _7(e,t){return e.sortNodePosition(t)}function T7(e,t,n={}){e.notify("AnimationStart",t);let r;if(Array.isArray(t)){const i=t.map(a=>td(e,a,n));r=Promise.all(i)}else if(typeof t=="string")r=td(e,t,n);else{const i=typeof t=="function"?_l(e,t,n.custom):t;r=Promise.all(ax(e,i,n))}return r.then(()=>{e.notify("AnimationComplete",t)})}const C7=jp.length;function ox(e){if(!e)return;if(!e.isControllingVariants){const n=e.parent?ox(e.parent)||{}:{};return e.props.initial!==void 0&&(n.initial=e.props.initial),n}const t={};for(let n=0;n<C7;n++){const r=jp[n],i=e.props[r];(eo(i)||i===!1)&&(t[r]=i)}return t}const E7=[...kp].reverse(),P7=kp.length;function z7(e){return t=>Promise.all(t.map(({animation:n,options:r})=>T7(e,n,r)))}function A7(e){let t=z7(e),n=rm(),r=!0;const i=l=>(u,d)=>{var p;const f=_l(e,d,l==="exit"?(p=e.presenceContext)===null||p===void 0?void 0:p.custom:void 0);if(f){const{transition:g,transitionEnd:x,...y}=f;u={...u,...y,...x}}return u};function a(l){t=l(e)}function o(l){const{props:u}=e,d=ox(e.parent)||{},p=[],f=new Set;let g={},x=1/0;for(let b=0;b<P7;b++){const v=E7[b],h=n[v],m=u[v]!==void 0?u[v]:d[v],w=eo(m),S=v===l?h.isActive:null;S===!1&&(x=b);let j=m===d[v]&&m!==u[v]&&w;if(j&&r&&e.manuallyAnimateOnMount&&(j=!1),h.protectedKeys={...g},!h.isActive&&S===null||!m&&!h.prevProp||jl(m)||typeof m=="boolean")continue;const C=M7(h.prevProp,m);let T=C||v===l&&h.isActive&&!j&&w||b>x&&w,A=!1;const E=Array.isArray(m)?m:[m];let P=E.reduce(i(v),{});S===!1&&(P={});const{prevResolvedValues:M={}}=h,R={...M,...P},D=Y=>{T=!0,f.has(Y)&&(A=!0,f.delete(Y)),h.needsAnimating[Y]=!0;const L=e.getValue(Y);L&&(L.liveStyle=!1)};for(const Y in R){const L=P[Y],N=M[Y];if(g.hasOwnProperty(Y))continue;let B=!1;Uu(L)&&Uu(N)?B=!wv(L,N):B=L!==N,B?L!=null?D(Y):f.add(Y):L!==void 0&&f.has(Y)?D(Y):h.protectedKeys[Y]=!0}h.prevProp=m,h.prevResolvedValues=P,h.isActive&&(g={...g,...P}),r&&e.blockInitialAnimation&&(T=!1),T&&(!(j&&C)||A)&&p.push(...E.map(Y=>({animation:Y,options:{type:v}})))}if(f.size){const b={};f.forEach(v=>{const h=e.getBaseTarget(v),m=e.getValue(v);m&&(m.liveStyle=!0),b[v]=h??null}),p.push({animation:b})}let y=!!p.length;return r&&(u.initial===!1||u.initial===u.animate)&&!e.manuallyAnimateOnMount&&(y=!1),r=!1,y?t(p):Promise.resolve()}function s(l,u){var d;if(n[l].isActive===u)return Promise.resolve();(d=e.variantChildren)===null||d===void 0||d.forEach(f=>{var g;return(g=f.animationState)===null||g===void 0?void 0:g.setActive(l,u)}),n[l].isActive=u;const p=o(l);for(const f in n)n[f].protectedKeys={};return p}return{animateChanges:o,setActive:s,setAnimateFunction:a,getState:()=>n,reset:()=>{n=rm(),r=!0}}}function M7(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!wv(t,e):!1}function Sr(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function rm(){return{animate:Sr(!0),whileInView:Sr(),whileHover:Sr(),whileTap:Sr(),whileDrag:Sr(),whileFocus:Sr(),exit:Sr()}}class gr{constructor(t){this.isMounted=!1,this.node=t}update(){}}class L7 extends gr{constructor(t){super(t),t.animationState||(t.animationState=A7(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();jl(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){var t;this.node.animationState.reset(),(t=this.unmountControls)===null||t===void 0||t.call(this)}}let O7=0;class I7 extends gr{constructor(){super(...arguments),this.id=O7++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===r)return;const i=this.node.animationState.setActive("exit",!t);n&&!t&&i.then(()=>n(this.id))}mount(){const{register:t}=this.node.presenceContext||{};t&&(this.unmount=t(this.id))}unmount(){}}const R7={animation:{Feature:L7},exit:{Feature:I7}},sx=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1;function Cl(e,t="page"){return{point:{x:e[`${t}X`],y:e[`${t}Y`]}}}const D7=e=>t=>sx(t)&&e(t,Cl(t));function _n(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}function zn(e,t,n,r){return _n(e,t,D7(n),r)}const im=(e,t)=>Math.abs(e-t);function V7(e,t){const n=im(e.x,t.x),r=im(e.y,t.y);return Math.sqrt(n**2+r**2)}class lx{constructor(t,n,{transformPagePoint:r,contextWindow:i,dragSnapToOrigin:a=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const p=Cc(this.lastMoveEventInfo,this.history),f=this.startEvent!==null,g=V7(p.offset,{x:0,y:0})>=3;if(!f&&!g)return;const{point:x}=p,{timestamp:y}=qe;this.history.push({...x,timestamp:y});const{onStart:b,onMove:v}=this.handlers;f||(b&&b(this.lastMoveEvent,p),this.startEvent=this.lastMoveEvent),v&&v(this.lastMoveEvent,p)},this.handlePointerMove=(p,f)=>{this.lastMoveEvent=p,this.lastMoveEventInfo=Tc(f,this.transformPagePoint),oe.update(this.updatePoint,!0)},this.handlePointerUp=(p,f)=>{this.end();const{onEnd:g,onSessionEnd:x,resumeAnimation:y}=this.handlers;if(this.dragSnapToOrigin&&y&&y(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const b=Cc(p.type==="pointercancel"?this.lastMoveEventInfo:Tc(f,this.transformPagePoint),this.history);this.startEvent&&g&&g(p,b),x&&x(p,b)},!sx(t))return;this.dragSnapToOrigin=a,this.handlers=n,this.transformPagePoint=r,this.contextWindow=i||window;const o=Cl(t),s=Tc(o,this.transformPagePoint),{point:l}=s,{timestamp:u}=qe;this.history=[{...l,timestamp:u}];const{onSessionStart:d}=n;d&&d(t,Cc(s,this.history)),this.removeListeners=Pn(zn(this.contextWindow,"pointermove",this.handlePointerMove),zn(this.contextWindow,"pointerup",this.handlePointerUp),zn(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),Zt(this.updatePoint)}}function Tc(e,t){return t?{point:t(e.point)}:e}function am(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Cc({point:e},t){return{point:e,delta:am(e,cx(t)),offset:am(e,N7(t)),velocity:F7(t,.1)}}function N7(e){return e[0]}function cx(e){return e[e.length-1]}function F7(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const i=cx(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>Cn(t)));)n--;if(!r)return{x:0,y:0};const a=En(i.timestamp-r.timestamp);if(a===0)return{x:0,y:0};const o={x:(i.x-r.x)/a,y:(i.y-r.y)/a};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function ux(e){let t=null;return()=>{const n=()=>{t=null};return t===null?(t=e,n):!1}}const om=ux("dragHorizontal"),sm=ux("dragVertical");function dx(e){let t=!1;if(e==="y")t=sm();else if(e==="x")t=om();else{const n=om(),r=sm();n&&r?t=()=>{n(),r()}:(n&&n(),r&&r())}return t}function px(){const e=dx(!0);return e?(e(),!1):!0}function hi(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}const fx=1e-4,$7=1-fx,B7=1+fx,hx=.01,q7=0-hx,H7=0+hx;function Ct(e){return e.max-e.min}function U7(e,t,n){return Math.abs(e-t)<=n}function lm(e,t,n,r=.5){e.origin=r,e.originPoint=Ce(t.min,t.max,e.origin),e.scale=Ct(n)/Ct(t),e.translate=Ce(n.min,n.max,e.origin)-e.originPoint,(e.scale>=$7&&e.scale<=B7||isNaN(e.scale))&&(e.scale=1),(e.translate>=q7&&e.translate<=H7||isNaN(e.translate))&&(e.translate=0)}function za(e,t,n,r){lm(e.x,t.x,n.x,r?r.originX:void 0),lm(e.y,t.y,n.y,r?r.originY:void 0)}function cm(e,t,n){e.min=n.min+t.min,e.max=e.min+Ct(t)}function W7(e,t,n){cm(e.x,t.x,n.x),cm(e.y,t.y,n.y)}function um(e,t,n){e.min=t.min-n.min,e.max=e.min+Ct(t)}function Aa(e,t,n){um(e.x,t.x,n.x),um(e.y,t.y,n.y)}function G7(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?Ce(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?Ce(n,e,r.max):Math.min(e,n)),e}function dm(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function Y7(e,{top:t,left:n,bottom:r,right:i}){return{x:dm(e.x,n,i),y:dm(e.y,t,r)}}function pm(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function K7(e,t){return{x:pm(e.x,t.x),y:pm(e.y,t.y)}}function X7(e,t){let n=.5;const r=Ct(e),i=Ct(t);return i>r?n=Br(t.min,t.max-r,e.min):r>i&&(n=Br(e.min,e.max-i,t.min)),dr(0,1,n)}function Q7(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const nd=.35;function Z7(e=nd){return e===!1?e=0:e===!0&&(e=nd),{x:fm(e,"left","right"),y:fm(e,"top","bottom")}}function fm(e,t,n){return{min:hm(e,t),max:hm(e,n)}}function hm(e,t){return typeof e=="number"?e:e[t]||0}const mm=()=>({translate:0,scale:1,origin:0,originPoint:0}),mi=()=>({x:mm(),y:mm()}),gm=()=>({min:0,max:0}),Le=()=>({x:gm(),y:gm()});function Mt(e){return[e("x"),e("y")]}function mx({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function J7({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function eS(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function Ec(e){return e===void 0||e===1}function rd({scale:e,scaleX:t,scaleY:n}){return!Ec(e)||!Ec(t)||!Ec(n)}function _r(e){return rd(e)||gx(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function gx(e){return vm(e.x)||vm(e.y)}function vm(e){return e&&e!=="0%"}function Us(e,t,n){const r=e-n,i=t*r;return n+i}function xm(e,t,n,r,i){return i!==void 0&&(e=Us(e,i,r)),Us(e,n,r)+t}function id(e,t=0,n=1,r,i){e.min=xm(e.min,t,n,r,i),e.max=xm(e.max,t,n,r,i)}function vx(e,{x:t,y:n}){id(e.x,t.translate,t.scale,t.originPoint),id(e.y,n.translate,n.scale,n.originPoint)}const ym=.999999999999,wm=1.0000000000001;function tS(e,t,n,r=!1){const i=n.length;if(!i)return;t.x=t.y=1;let a,o;for(let s=0;s<i;s++){a=n[s],o=a.projectionDelta;const{visualElement:l}=a.options;l&&l.props.style&&l.props.style.display==="contents"||(r&&a.options.layoutScroll&&a.scroll&&a!==a.root&&vi(e,{x:-a.scroll.offset.x,y:-a.scroll.offset.y}),o&&(t.x*=o.x.scale,t.y*=o.y.scale,vx(e,o)),r&&_r(a.latestValues)&&vi(e,a.latestValues))}t.x<wm&&t.x>ym&&(t.x=1),t.y<wm&&t.y>ym&&(t.y=1)}function gi(e,t){e.min=e.min+t,e.max=e.max+t}function bm(e,t,n,r,i=.5){const a=Ce(e.min,e.max,i);id(e,t,n,a,r)}function vi(e,t){bm(e.x,t.x,t.scaleX,t.scale,t.originX),bm(e.y,t.y,t.scaleY,t.scale,t.originY)}function xx(e,t){return mx(eS(e.getBoundingClientRect(),t))}function nS(e,t,n){const r=xx(e,n),{scroll:i}=t;return i&&(gi(r.x,i.offset.x),gi(r.y,i.offset.y)),r}const yx=({current:e})=>e?e.ownerDocument.defaultView:null,rS=new WeakMap;class iS{constructor(t){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Le(),this.visualElement=t}start(t,{snapToCursor:n=!1}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const i=d=>{const{dragSnapToOrigin:p}=this.getProps();p?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(Cl(d,"page").point)},a=(d,p)=>{const{drag:f,dragPropagation:g,onDragStart:x}=this.getProps();if(f&&!g&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=dx(f),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Mt(b=>{let v=this.getAxisMotionValue(b).get()||0;if(pn.test(v)){const{projection:h}=this.visualElement;if(h&&h.layout){const m=h.layout.layoutBox[b];m&&(v=Ct(m)*(parseFloat(v)/100))}}this.originPoint[b]=v}),x&&oe.postRender(()=>x(d,p)),ed(this.visualElement,"transform");const{animationState:y}=this.visualElement;y&&y.setActive("whileDrag",!0)},o=(d,p)=>{const{dragPropagation:f,dragDirectionLock:g,onDirectionLock:x,onDrag:y}=this.getProps();if(!f&&!this.openGlobalLock)return;const{offset:b}=p;if(g&&this.currentDirection===null){this.currentDirection=aS(b),this.currentDirection!==null&&x&&x(this.currentDirection);return}this.updateAxis("x",p.point,b),this.updateAxis("y",p.point,b),this.visualElement.render(),y&&y(d,p)},s=(d,p)=>this.stop(d,p),l=()=>Mt(d=>{var p;return this.getAnimationState(d)==="paused"&&((p=this.getAxisMotionValue(d).animation)===null||p===void 0?void 0:p.play())}),{dragSnapToOrigin:u}=this.getProps();this.panSession=new lx(t,{onSessionStart:i,onStart:a,onMove:o,onSessionEnd:s,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:u,contextWindow:yx(this.visualElement)})}stop(t,n){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:i}=n;this.startAnimation(i);const{onDragEnd:a}=this.getProps();a&&oe.postRender(()=>a(t,n))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(t,n,r){const{drag:i}=this.getProps();if(!r||!Do(t,i,this.currentDirection))return;const a=this.getAxisMotionValue(t);let o=this.originPoint[t]+r[t];this.constraints&&this.constraints[t]&&(o=G7(o,this.constraints[t],this.elastic[t])),a.set(o)}resolveConstraints(){var t;const{dragConstraints:n,dragElastic:r}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(t=this.visualElement.projection)===null||t===void 0?void 0:t.layout,a=this.constraints;n&&hi(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&i?this.constraints=Y7(i.layoutBox,n):this.constraints=!1,this.elastic=Z7(r),a!==this.constraints&&i&&this.constraints&&!this.hasMutatedConstraints&&Mt(o=>{this.constraints!==!1&&this.getAxisMotionValue(o)&&(this.constraints[o]=Q7(i.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!hi(t))return!1;const r=t.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const a=nS(r,i.root,this.visualElement.getTransformPagePoint());let o=K7(i.layout.layoutBox,a);if(n){const s=n(J7(o));this.hasMutatedConstraints=!!s,s&&(o=mx(s))}return o}startAnimation(t){const{drag:n,dragMomentum:r,dragElastic:i,dragTransition:a,dragSnapToOrigin:o,onDragTransitionEnd:s}=this.getProps(),l=this.constraints||{},u=Mt(d=>{if(!Do(d,n,this.currentDirection))return;let p=l&&l[d]||{};o&&(p={min:0,max:0});const f=i?200:1e6,g=i?40:1e7,x={type:"inertia",velocity:r?t[d]:0,bounceStiffness:f,bounceDamping:g,timeConstant:750,restDelta:1,restSpeed:10,...a,...p};return this.startAxisValueAnimation(d,x)});return Promise.all(u).then(s)}startAxisValueAnimation(t,n){const r=this.getAxisMotionValue(t);return ed(this.visualElement,t),r.start($p(t,r,0,n,this.visualElement,!1))}stopAnimation(){Mt(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){Mt(t=>{var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(t){var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(t){const n=`_drag${t.toUpperCase()}`,r=this.visualElement.getProps(),i=r[n];return i||this.visualElement.getValue(t,(r.initial?r.initial[t]:void 0)||0)}snapToCursor(t){Mt(n=>{const{drag:r}=this.getProps();if(!Do(n,r,this.currentDirection))return;const{projection:i}=this.visualElement,a=this.getAxisMotionValue(n);if(i&&i.layout){const{min:o,max:s}=i.layout.layoutBox[n];a.set(t[n]-Ce(o,s,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!hi(n)||!r||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};Mt(o=>{const s=this.getAxisMotionValue(o);if(s&&this.constraints!==!1){const l=s.get();i[o]=X7({min:l,max:l},this.constraints[o])}});const{transformTemplate:a}=this.visualElement.getProps();this.visualElement.current.style.transform=a?a({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),Mt(o=>{if(!Do(o,t,null))return;const s=this.getAxisMotionValue(o),{min:l,max:u}=this.constraints[o];s.set(Ce(l,u,i[o]))})}addListeners(){if(!this.visualElement.current)return;rS.set(this.visualElement,this);const t=this.visualElement.current,n=zn(t,"pointerdown",l=>{const{drag:u,dragListener:d=!0}=this.getProps();u&&d&&this.start(l)}),r=()=>{const{dragConstraints:l}=this.getProps();hi(l)&&l.current&&(this.constraints=this.resolveRefConstraints())},{projection:i}=this.visualElement,a=i.addEventListener("measure",r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),oe.read(r);const o=_n(window,"resize",()=>this.scalePositionWithinConstraints()),s=i.addEventListener("didUpdate",({delta:l,hasLayoutChanged:u})=>{this.isDragging&&u&&(Mt(d=>{const p=this.getAxisMotionValue(d);p&&(this.originPoint[d]+=l[d].translate,p.set(p.get()+l[d].translate))}),this.visualElement.render())});return()=>{o(),n(),a(),s&&s()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:i=!1,dragConstraints:a=!1,dragElastic:o=nd,dragMomentum:s=!0}=t;return{...t,drag:n,dragDirectionLock:r,dragPropagation:i,dragConstraints:a,dragElastic:o,dragMomentum:s}}}function Do(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function aS(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class oS extends gr{constructor(t){super(t),this.removeGroupControls=Je,this.removeListeners=Je,this.controls=new iS(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Je}unmount(){this.removeGroupControls(),this.removeListeners()}}const Sm=e=>(t,n)=>{e&&oe.postRender(()=>e(t,n))};class sS extends gr{constructor(){super(...arguments),this.removePointerDownListener=Je}onPointerDown(t){this.session=new lx(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:yx(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:r,onPanEnd:i}=this.node.getProps();return{onSessionStart:Sm(t),onStart:Sm(n),onMove:r,onEnd:(a,o)=>{delete this.session,i&&oe.postRender(()=>i(a,o))}}}mount(){this.removePointerDownListener=zn(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const El=k.createContext(null);function lS(){const e=k.useContext(El);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:n,register:r}=e,i=k.useId();k.useEffect(()=>r(i),[]);const a=k.useCallback(()=>n&&n(i),[i,n]);return!t&&n?[!1,a]:[!0]}const Wp=k.createContext({}),wx=k.createContext({}),is={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function km(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const sa={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(W.test(e))e=parseFloat(e);else return e;const n=km(e,t.target.x),r=km(e,t.target.y);return`${n}% ${r}%`}},cS={correct:(e,{treeScale:t,projectionDelta:n})=>{const r=e,i=pr.parse(e);if(i.length>5)return r;const a=pr.createTransformer(e),o=typeof i[0]!="number"?1:0,s=n.x.scale*t.x,l=n.y.scale*t.y;i[0+o]/=s,i[1+o]/=l;const u=Ce(s,l,.5);return typeof i[2+o]=="number"&&(i[2+o]/=u),typeof i[3+o]=="number"&&(i[3+o]/=u),a(i)}},Ws={};function uS(e){Object.assign(Ws,e)}const{schedule:Gp,cancel:sP}=bv(queueMicrotask,!1);class dS extends k.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r,layoutId:i}=this.props,{projection:a}=t;uS(pS),a&&(n.group&&n.group.add(a),r&&r.register&&i&&r.register(a),a.root.didUpdate(),a.addEventListener("animationComplete",()=>{this.safeToRemove()}),a.setOptions({...a.options,onExitComplete:()=>this.safeToRemove()})),is.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:r,drag:i,isPresent:a}=this.props,o=r.projection;return o&&(o.isPresent=a,i||t.layoutDependency!==n||n===void 0?o.willUpdate():this.safeToRemove(),t.isPresent!==a&&(a?o.promote():o.relegate()||oe.postRender(()=>{const s=o.getStack();(!s||!s.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),Gp.postRender(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:i}=t;i&&(i.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(i),r&&r.deregister&&r.deregister(i))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function bx(e){const[t,n]=lS(),r=k.useContext(Wp);return c.jsx(dS,{...e,layoutGroup:r,switchLayoutGroup:k.useContext(wx),isPresent:t,safeToRemove:n})}const pS={borderRadius:{...sa,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:sa,borderTopRightRadius:sa,borderBottomLeftRadius:sa,borderBottomRightRadius:sa,boxShadow:cS},Sx=["TopLeft","TopRight","BottomLeft","BottomRight"],fS=Sx.length,jm=e=>typeof e=="string"?parseFloat(e):e,_m=e=>typeof e=="number"||W.test(e);function hS(e,t,n,r,i,a){i?(e.opacity=Ce(0,n.opacity!==void 0?n.opacity:1,mS(r)),e.opacityExit=Ce(t.opacity!==void 0?t.opacity:1,0,gS(r))):a&&(e.opacity=Ce(t.opacity!==void 0?t.opacity:1,n.opacity!==void 0?n.opacity:1,r));for(let o=0;o<fS;o++){const s=`border${Sx[o]}Radius`;let l=Tm(t,s),u=Tm(n,s);if(l===void 0&&u===void 0)continue;l||(l=0),u||(u=0),l===0||u===0||_m(l)===_m(u)?(e[s]=Math.max(Ce(jm(l),jm(u),r),0),(pn.test(u)||pn.test(l))&&(e[s]+="%")):e[s]=u}(t.rotate||n.rotate)&&(e.rotate=Ce(t.rotate||0,n.rotate||0,r))}function Tm(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const mS=kx(0,.5,Ev),gS=kx(.5,.95,Je);function kx(e,t,n){return r=>r<e?0:r>t?1:n(Br(e,t,r))}function Cm(e,t){e.min=t.min,e.max=t.max}function At(e,t){Cm(e.x,t.x),Cm(e.y,t.y)}function Em(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}function Pm(e,t,n,r,i){return e-=t,e=Us(e,1/n,r),i!==void 0&&(e=Us(e,1/i,r)),e}function vS(e,t=0,n=1,r=.5,i,a=e,o=e){if(pn.test(t)&&(t=parseFloat(t),t=Ce(o.min,o.max,t/100)-o.min),typeof t!="number")return;let s=Ce(a.min,a.max,r);e===a&&(s-=t),e.min=Pm(e.min,t,n,s,i),e.max=Pm(e.max,t,n,s,i)}function zm(e,t,[n,r,i],a,o){vS(e,t[n],t[r],t[i],t.scale,a,o)}const xS=["x","scaleX","originX"],yS=["y","scaleY","originY"];function Am(e,t,n,r){zm(e.x,t,xS,n?n.x:void 0,r?r.x:void 0),zm(e.y,t,yS,n?n.y:void 0,r?r.y:void 0)}function Mm(e){return e.translate===0&&e.scale===1}function jx(e){return Mm(e.x)&&Mm(e.y)}function Lm(e,t){return e.min===t.min&&e.max===t.max}function wS(e,t){return Lm(e.x,t.x)&&Lm(e.y,t.y)}function Om(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function _x(e,t){return Om(e.x,t.x)&&Om(e.y,t.y)}function Im(e){return Ct(e.x)/Ct(e.y)}function Rm(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}class bS{constructor(){this.members=[]}add(t){Bp(this.members,t),t.scheduleRender()}remove(t){if(qp(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(i=>t===i);if(n===0)return!1;let r;for(let i=n;i>=0;i--){const a=this.members[i];if(a.isPresent!==!1){r=a;break}}return r?(this.promote(r),!0):!1}promote(t,n){const r=this.lead;if(t!==r&&(this.prevLead=r,this.lead=t,t.show(),r)){r.instance&&r.scheduleRender(),t.scheduleRender(),t.resumeFrom=r,n&&(t.resumeFrom.preserveOpacity=!0),r.snapshot&&(t.snapshot=r.snapshot,t.snapshot.latestValues=r.animationValues||r.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:i}=t.options;i===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:r}=t;n.onExitComplete&&n.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function SS(e,t,n){let r="";const i=e.x.translate/t.x,a=e.y.translate/t.y,o=(n==null?void 0:n.z)||0;if((i||a||o)&&(r=`translate3d(${i}px, ${a}px, ${o}px) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{transformPerspective:u,rotate:d,rotateX:p,rotateY:f,skewX:g,skewY:x}=n;u&&(r=`perspective(${u}px) ${r}`),d&&(r+=`rotate(${d}deg) `),p&&(r+=`rotateX(${p}deg) `),f&&(r+=`rotateY(${f}deg) `),g&&(r+=`skewX(${g}deg) `),x&&(r+=`skewY(${x}deg) `)}const s=e.x.scale*t.x,l=e.y.scale*t.y;return(s!==1||l!==1)&&(r+=`scale(${s}, ${l})`),r||"none"}const kS=(e,t)=>e.depth-t.depth;class jS{constructor(){this.children=[],this.isDirty=!1}add(t){Bp(this.children,t),this.isDirty=!0}remove(t){qp(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(kS),this.isDirty=!1,this.children.forEach(t)}}function as(e){const t=at(e)?e.get():e;return m7(t)?t.toValue():t}function _S(e,t){const n=fn.now(),r=({timestamp:i})=>{const a=i-n;a>=t&&(Zt(r),e(a-t))};return oe.read(r,!0),()=>Zt(r)}function TS(e){return e instanceof SVGElement&&e.tagName!=="svg"}function CS(e,t,n){const r=at(e)?e:ln(e);return r.start($p("",r,t,n)),r.animation}const Tr={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},va=typeof window<"u"&&window.MotionDebug!==void 0,Pc=["","X","Y","Z"],ES={visibility:"hidden"},Dm=1e3;let PS=0;function zc(e,t,n,r){const{latestValues:i}=t;i[e]&&(n[e]=i[e],t.setStaticValue(e,0),r&&(r[e]=0))}function Tx(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:t}=e.options;if(!t)return;const n=ix(t);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:i,layoutId:a}=e.options;window.MotionCancelOptimisedAnimation(n,"transform",oe,!(i||a))}const{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&Tx(r)}function Cx({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(o={},s=t==null?void 0:t()){this.id=PS++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,va&&(Tr.totalNodes=Tr.resolvedTargetDeltas=Tr.recalculatedProjection=0),this.nodes.forEach(MS),this.nodes.forEach(DS),this.nodes.forEach(VS),this.nodes.forEach(LS),va&&window.MotionDebug.record(Tr)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=s?s.root||s:this,this.path=s?[...s.path,s]:[],this.parent=s,this.depth=s?s.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new jS)}addEventListener(o,s){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new Hp),this.eventHandlers.get(o).add(s)}notifyListeners(o,...s){const l=this.eventHandlers.get(o);l&&l.notify(...s)}hasListeners(o){return this.eventHandlers.has(o)}mount(o,s=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=TS(o),this.instance=o;const{layoutId:l,layout:u,visualElement:d}=this.options;if(d&&!d.current&&d.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),s&&(u||l)&&(this.isLayoutDirty=!0),e){let p;const f=()=>this.root.updateBlockedByResize=!1;e(o,()=>{this.root.updateBlockedByResize=!0,p&&p(),p=_S(f,250),is.hasAnimatedSinceResize&&(is.hasAnimatedSinceResize=!1,this.nodes.forEach(Nm))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&d&&(l||u)&&this.addEventListener("didUpdate",({delta:p,hasLayoutChanged:f,hasRelativeTargetChanged:g,layout:x})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const y=this.options.transition||d.getDefaultTransition()||qS,{onLayoutAnimationStart:b,onLayoutAnimationComplete:v}=d.getProps(),h=!this.targetLayout||!_x(this.targetLayout,x)||g,m=!f&&g;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||m||f&&(h||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(p,m);const w={..._p(y,"layout"),onPlay:b,onComplete:v};(d.shouldReduceMotion||this.options.layoutRoot)&&(w.delay=0,w.type=!1),this.startAnimation(w)}else f||Nm(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=x})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Zt(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(NS),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Tx(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let d=0;d<this.path.length;d++){const p=this.path[d];p.shouldResetTransform=!0,p.updateScroll("snapshot"),p.options.layoutRoot&&p.willUpdate(!1)}const{layoutId:s,layout:l}=this.options;if(s===void 0&&!l)return;const u=this.getTransformTemplate();this.prevTransformTemplateValue=u?u(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Vm);return}this.isUpdating||this.nodes.forEach(IS),this.isUpdating=!1,this.nodes.forEach(RS),this.nodes.forEach(zS),this.nodes.forEach(AS),this.clearAllSnapshots();const s=fn.now();qe.delta=dr(0,1e3/60,s-qe.timestamp),qe.timestamp=s,qe.isProcessing=!0,bc.update.process(qe),bc.preRender.process(qe),bc.render.process(qe),qe.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Gp.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(OS),this.sharedNodes.forEach(FS)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,oe.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){oe.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Le(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:s}=this.options;s&&s.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let s=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(s=!1),s){const l=r(this.instance);this.scroll={animationId:this.root.animationId,phase:o,isRoot:l,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!i)return;const o=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,s=this.projectionDelta&&!jx(this.projectionDelta),l=this.getTransformTemplate(),u=l?l(this.latestValues,""):void 0,d=u!==this.prevTransformTemplateValue;o&&(s||_r(this.latestValues)||d)&&(i(this.instance,u),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const s=this.measurePageBox();let l=this.removeElementScroll(s);return o&&(l=this.removeTransform(l)),HS(l),{animationId:this.root.animationId,measuredBox:s,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){var o;const{visualElement:s}=this.options;if(!s)return Le();const l=s.measureViewportBox();if(!(((o=this.scroll)===null||o===void 0?void 0:o.wasRoot)||this.path.some(US))){const{scroll:d}=this.root;d&&(gi(l.x,d.offset.x),gi(l.y,d.offset.y))}return l}removeElementScroll(o){var s;const l=Le();if(At(l,o),!((s=this.scroll)===null||s===void 0)&&s.wasRoot)return l;for(let u=0;u<this.path.length;u++){const d=this.path[u],{scroll:p,options:f}=d;d!==this.root&&p&&f.layoutScroll&&(p.wasRoot&&At(l,o),gi(l.x,p.offset.x),gi(l.y,p.offset.y))}return l}applyTransform(o,s=!1){const l=Le();At(l,o);for(let u=0;u<this.path.length;u++){const d=this.path[u];!s&&d.options.layoutScroll&&d.scroll&&d!==d.root&&vi(l,{x:-d.scroll.offset.x,y:-d.scroll.offset.y}),_r(d.latestValues)&&vi(l,d.latestValues)}return _r(this.latestValues)&&vi(l,this.latestValues),l}removeTransform(o){const s=Le();At(s,o);for(let l=0;l<this.path.length;l++){const u=this.path[l];if(!u.instance||!_r(u.latestValues))continue;rd(u.latestValues)&&u.updateSnapshot();const d=Le(),p=u.measurePageBox();At(d,p),Am(s,u.latestValues,u.snapshot?u.snapshot.layoutBox:void 0,d)}return _r(this.latestValues)&&Am(s,this.latestValues),s}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==qe.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var s;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const u=!!this.resumingFrom||this!==l;if(!(o||u&&this.isSharedProjectionDirty||this.isProjectionDirty||!((s=this.parent)===null||s===void 0)&&s.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:p,layoutId:f}=this.options;if(!(!this.layout||!(p||f))){if(this.resolvedRelativeTargetAt=qe.timestamp,!this.targetDelta&&!this.relativeTarget){const g=this.getClosestProjectingParent();g&&g.layout&&this.animationProgress!==1?(this.relativeParent=g,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Le(),this.relativeTargetOrigin=Le(),Aa(this.relativeTargetOrigin,this.layout.layoutBox,g.layout.layoutBox),At(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=Le(),this.targetWithTransforms=Le()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),W7(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):At(this.target,this.layout.layoutBox),vx(this.target,this.targetDelta)):At(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const g=this.getClosestProjectingParent();g&&!!g.resumingFrom==!!this.resumingFrom&&!g.options.layoutScroll&&g.target&&this.animationProgress!==1?(this.relativeParent=g,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Le(),this.relativeTargetOrigin=Le(),Aa(this.relativeTargetOrigin,this.target,g.target),At(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}va&&Tr.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||rd(this.parent.latestValues)||gx(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var o;const s=this.getLead(),l=!!this.resumingFrom||this!==s;let u=!0;if((this.isProjectionDirty||!((o=this.parent)===null||o===void 0)&&o.isProjectionDirty)&&(u=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(u=!1),this.resolvedRelativeTargetAt===qe.timestamp&&(u=!1),u)return;const{layout:d,layoutId:p}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(d||p))return;At(this.layoutCorrected,this.layout.layoutBox);const f=this.treeScale.x,g=this.treeScale.y;tS(this.layoutCorrected,this.treeScale,this.path,l),s.layout&&!s.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(s.target=s.layout.layoutBox,s.targetWithTransforms=Le());const{target:x}=s;if(!x){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Em(this.prevProjectionDelta.x,this.projectionDelta.x),Em(this.prevProjectionDelta.y,this.projectionDelta.y)),za(this.projectionDelta,this.layoutCorrected,x,this.latestValues),(this.treeScale.x!==f||this.treeScale.y!==g||!Rm(this.projectionDelta.x,this.prevProjectionDelta.x)||!Rm(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",x)),va&&Tr.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){var s;if((s=this.options.visualElement)===null||s===void 0||s.scheduleRender(),o){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=mi(),this.projectionDelta=mi(),this.projectionDeltaWithTransform=mi()}setAnimationOrigin(o,s=!1){const l=this.snapshot,u=l?l.latestValues:{},d={...this.latestValues},p=mi();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!s;const f=Le(),g=l?l.source:void 0,x=this.layout?this.layout.source:void 0,y=g!==x,b=this.getStack(),v=!b||b.members.length<=1,h=!!(y&&!v&&this.options.crossfade===!0&&!this.path.some(BS));this.animationProgress=0;let m;this.mixTargetDelta=w=>{const S=w/1e3;Fm(p.x,o.x,S),Fm(p.y,o.y,S),this.setTargetDelta(p),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Aa(f,this.layout.layoutBox,this.relativeParent.layout.layoutBox),$S(this.relativeTarget,this.relativeTargetOrigin,f,S),m&&wS(this.relativeTarget,m)&&(this.isProjectionDirty=!1),m||(m=Le()),At(m,this.relativeTarget)),y&&(this.animationValues=d,hS(d,u,this.latestValues,S,h,v)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=S},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Zt(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=oe.update(()=>{is.hasAnimatedSinceResize=!0,this.currentAnimation=CS(0,Dm,{...o,onUpdate:s=>{this.mixTargetDelta(s),o.onUpdate&&o.onUpdate(s)},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Dm),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:s,target:l,layout:u,latestValues:d}=o;if(!(!s||!l||!u)){if(this!==o&&this.layout&&u&&Ex(this.options.animationType,this.layout.layoutBox,u.layoutBox)){l=this.target||Le();const p=Ct(this.layout.layoutBox.x);l.x.min=o.target.x.min,l.x.max=l.x.min+p;const f=Ct(this.layout.layoutBox.y);l.y.min=o.target.y.min,l.y.max=l.y.min+f}At(s,l),vi(s,d),za(this.projectionDeltaWithTransform,this.layoutCorrected,s,d)}}registerSharedNode(o,s){this.sharedNodes.has(o)||this.sharedNodes.set(o,new bS),this.sharedNodes.get(o).add(s);const u=s.options.initialPromotionConfig;s.promote({transition:u?u.transition:void 0,preserveFollowOpacity:u&&u.shouldPreserveFollowOpacity?u.shouldPreserveFollowOpacity(s):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var o;const{layoutId:s}=this.options;return s?((o=this.getStack())===null||o===void 0?void 0:o.lead)||this:this}getPrevLead(){var o;const{layoutId:s}=this.options;return s?(o=this.getStack())===null||o===void 0?void 0:o.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:s,preserveFollowOpacity:l}={}){const u=this.getStack();u&&u.promote(this,l),o&&(this.projectionDelta=void 0,this.needsReset=!0),s&&this.setOptions({transition:s})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetSkewAndRotation(){const{visualElement:o}=this.options;if(!o)return;let s=!1;const{latestValues:l}=o;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(s=!0),!s)return;const u={};l.z&&zc("z",o,u,this.animationValues);for(let d=0;d<Pc.length;d++)zc(`rotate${Pc[d]}`,o,u,this.animationValues),zc(`skew${Pc[d]}`,o,u,this.animationValues);o.render();for(const d in u)o.setStaticValue(d,u[d]),this.animationValues&&(this.animationValues[d]=u[d]);o.scheduleRender()}getProjectionStyles(o){var s,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return ES;const u={visibility:""},d=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,u.opacity="",u.pointerEvents=as(o==null?void 0:o.pointerEvents)||"",u.transform=d?d(this.latestValues,""):"none",u;const p=this.getLead();if(!this.projectionDelta||!this.layout||!p.target){const y={};return this.options.layoutId&&(y.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,y.pointerEvents=as(o==null?void 0:o.pointerEvents)||""),this.hasProjected&&!_r(this.latestValues)&&(y.transform=d?d({},""):"none",this.hasProjected=!1),y}const f=p.animationValues||p.latestValues;this.applyTransformsToTarget(),u.transform=SS(this.projectionDeltaWithTransform,this.treeScale,f),d&&(u.transform=d(f,u.transform));const{x:g,y:x}=this.projectionDelta;u.transformOrigin=`${g.origin*100}% ${x.origin*100}% 0`,p.animationValues?u.opacity=p===this?(l=(s=f.opacity)!==null&&s!==void 0?s:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:f.opacityExit:u.opacity=p===this?f.opacity!==void 0?f.opacity:"":f.opacityExit!==void 0?f.opacityExit:0;for(const y in Ws){if(f[y]===void 0)continue;const{correct:b,applyTo:v}=Ws[y],h=u.transform==="none"?f[y]:b(f[y],p);if(v){const m=v.length;for(let w=0;w<m;w++)u[v[w]]=h}else u[y]=h}return this.options.layoutId&&(u.pointerEvents=p===this?as(o==null?void 0:o.pointerEvents)||"":"none"),u}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var s;return(s=o.currentAnimation)===null||s===void 0?void 0:s.stop()}),this.root.nodes.forEach(Vm),this.root.sharedNodes.clear()}}}function zS(e){e.updateLayout()}function AS(e){var t;const n=((t=e.resumeFrom)===null||t===void 0?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:i}=e.layout,{animationType:a}=e.options,o=n.source!==e.layout.source;a==="size"?Mt(p=>{const f=o?n.measuredBox[p]:n.layoutBox[p],g=Ct(f);f.min=r[p].min,f.max=f.min+g}):Ex(a,n.layoutBox,r)&&Mt(p=>{const f=o?n.measuredBox[p]:n.layoutBox[p],g=Ct(r[p]);f.max=f.min+g,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[p].max=e.relativeTarget[p].min+g)});const s=mi();za(s,r,n.layoutBox);const l=mi();o?za(l,e.applyTransform(i,!0),n.measuredBox):za(l,r,n.layoutBox);const u=!jx(s);let d=!1;if(!e.resumeFrom){const p=e.getClosestProjectingParent();if(p&&!p.resumeFrom){const{snapshot:f,layout:g}=p;if(f&&g){const x=Le();Aa(x,n.layoutBox,f.layoutBox);const y=Le();Aa(y,r,g.layoutBox),_x(x,y)||(d=!0),p.options.layoutRoot&&(e.relativeTarget=y,e.relativeTargetOrigin=x,e.relativeParent=p)}}}e.notifyListeners("didUpdate",{layout:r,snapshot:n,delta:l,layoutDelta:s,hasLayoutChanged:u,hasRelativeTargetChanged:d})}else if(e.isLead()){const{onExitComplete:r}=e.options;r&&r()}e.options.transition=void 0}function MS(e){va&&Tr.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function LS(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function OS(e){e.clearSnapshot()}function Vm(e){e.clearMeasurements()}function IS(e){e.isLayoutDirty=!1}function RS(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function Nm(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function DS(e){e.resolveTargetDelta()}function VS(e){e.calcProjection()}function NS(e){e.resetSkewAndRotation()}function FS(e){e.removeLeadSnapshot()}function Fm(e,t,n){e.translate=Ce(t.translate,0,n),e.scale=Ce(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function $m(e,t,n,r){e.min=Ce(t.min,n.min,r),e.max=Ce(t.max,n.max,r)}function $S(e,t,n,r){$m(e.x,t.x,n.x,r),$m(e.y,t.y,n.y,r)}function BS(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const qS={duration:.45,ease:[.4,0,.1,1]},Bm=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),qm=Bm("applewebkit/")&&!Bm("chrome/")?Math.round:Je;function Hm(e){e.min=qm(e.min),e.max=qm(e.max)}function HS(e){Hm(e.x),Hm(e.y)}function Ex(e,t,n){return e==="position"||e==="preserve-aspect"&&!U7(Im(t),Im(n),.2)}function US(e){var t;return e!==e.root&&((t=e.scroll)===null||t===void 0?void 0:t.wasRoot)}const WS=Cx({attachResizeListener:(e,t)=>_n(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Ac={current:void 0},Px=Cx({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Ac.current){const e=new WS({});e.mount(window),e.setOptions({layoutScroll:!0}),Ac.current=e}return Ac.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),GS={pan:{Feature:sS},drag:{Feature:oS,ProjectionNode:Px,MeasureLayout:bx}};function Um(e,t){const n=t?"pointerenter":"pointerleave",r=t?"onHoverStart":"onHoverEnd",i=(a,o)=>{if(a.pointerType==="touch"||px())return;const s=e.getProps();e.animationState&&s.whileHover&&e.animationState.setActive("whileHover",t);const l=s[r];l&&oe.postRender(()=>l(a,o))};return zn(e.current,n,i,{passive:!e.getProps()[r]})}class YS extends gr{mount(){this.unmount=Pn(Um(this.node,!0),Um(this.node,!1))}unmount(){}}class KS extends gr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Pn(_n(this.node.current,"focus",()=>this.onFocus()),_n(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}const zx=(e,t)=>t?e===t?!0:zx(e,t.parentElement):!1;function Mc(e,t){if(!t)return;const n=new PointerEvent("pointer"+e);t(n,Cl(n))}class XS extends gr{constructor(){super(...arguments),this.removeStartListeners=Je,this.removeEndListeners=Je,this.removeAccessibleListeners=Je,this.startPointerPress=(t,n)=>{if(this.isPressing)return;this.removeEndListeners();const r=this.node.getProps(),a=zn(window,"pointerup",(s,l)=>{if(!this.checkPressEnd())return;const{onTap:u,onTapCancel:d,globalTapTarget:p}=this.node.getProps(),f=!p&&!zx(this.node.current,s.target)?d:u;f&&oe.update(()=>f(s,l))},{passive:!(r.onTap||r.onPointerUp)}),o=zn(window,"pointercancel",(s,l)=>this.cancelPress(s,l),{passive:!(r.onTapCancel||r.onPointerCancel)});this.removeEndListeners=Pn(a,o),this.startPress(t,n)},this.startAccessiblePress=()=>{const t=a=>{if(a.key!=="Enter"||this.isPressing)return;const o=s=>{s.key!=="Enter"||!this.checkPressEnd()||Mc("up",(l,u)=>{const{onTap:d}=this.node.getProps();d&&oe.postRender(()=>d(l,u))})};this.removeEndListeners(),this.removeEndListeners=_n(this.node.current,"keyup",o),Mc("down",(s,l)=>{this.startPress(s,l)})},n=_n(this.node.current,"keydown",t),r=()=>{this.isPressing&&Mc("cancel",(a,o)=>this.cancelPress(a,o))},i=_n(this.node.current,"blur",r);this.removeAccessibleListeners=Pn(n,i)}}startPress(t,n){this.isPressing=!0;const{onTapStart:r,whileTap:i}=this.node.getProps();i&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),r&&oe.postRender(()=>r(t,n))}checkPressEnd(){return this.removeEndListeners(),this.isPressing=!1,this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!px()}cancelPress(t,n){if(!this.checkPressEnd())return;const{onTapCancel:r}=this.node.getProps();r&&oe.postRender(()=>r(t,n))}mount(){const t=this.node.getProps(),n=zn(t.globalTapTarget?window:this.node.current,"pointerdown",this.startPointerPress,{passive:!(t.onTapStart||t.onPointerStart)}),r=_n(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=Pn(n,r)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}const ad=new WeakMap,Lc=new WeakMap,QS=e=>{const t=ad.get(e.target);t&&t(e)},ZS=e=>{e.forEach(QS)};function JS({root:e,...t}){const n=e||document;Lc.has(n)||Lc.set(n,{});const r=Lc.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(ZS,{root:e,...t})),r[i]}function e4(e,t,n){const r=JS(t);return ad.set(e,n),r.observe(e),()=>{ad.delete(e),r.unobserve(e)}}const t4={some:0,all:1};class n4 extends gr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:r,amount:i="some",once:a}=t,o={root:n?n.current:void 0,rootMargin:r,threshold:typeof i=="number"?i:t4[i]},s=l=>{const{isIntersecting:u}=l;if(this.isInView===u||(this.isInView=u,a&&!u&&this.hasEnteredView))return;u&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",u);const{onViewportEnter:d,onViewportLeave:p}=this.node.getProps(),f=u?d:p;f&&f(l)};return e4(this.node.current,o,s)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(r4(t,n))&&this.startObserver()}unmount(){}}function r4({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const i4={inView:{Feature:n4},tap:{Feature:XS},focus:{Feature:KS},hover:{Feature:YS}},a4={layout:{ProjectionNode:Px,MeasureLayout:bx}},Pl=k.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"}),zl=k.createContext({}),Yp=typeof window<"u",Al=Yp?k.useLayoutEffect:k.useEffect,Ax=k.createContext({strict:!1});function o4(e,t,n,r,i){var a,o;const{visualElement:s}=k.useContext(zl),l=k.useContext(Ax),u=k.useContext(El),d=k.useContext(Pl).reducedMotion,p=k.useRef();r=r||l.renderer,!p.current&&r&&(p.current=r(e,{visualState:t,parent:s,props:n,presenceContext:u,blockInitialAnimation:u?u.initial===!1:!1,reducedMotionConfig:d}));const f=p.current,g=k.useContext(wx);f&&!f.projection&&i&&(f.type==="html"||f.type==="svg")&&s4(p.current,n,i,g);const x=k.useRef(!1);k.useInsertionEffect(()=>{f&&x.current&&f.update(n,u)});const y=n[rx],b=k.useRef(!!y&&!(!((a=window.MotionHandoffIsComplete)===null||a===void 0)&&a.call(window,y))&&((o=window.MotionHasOptimisedAnimation)===null||o===void 0?void 0:o.call(window,y)));return Al(()=>{f&&(x.current=!0,window.MotionIsMounted=!0,f.updateFeatures(),Gp.render(f.render),b.current&&f.animationState&&f.animationState.animateChanges())}),k.useEffect(()=>{f&&(!b.current&&f.animationState&&f.animationState.animateChanges(),b.current&&(queueMicrotask(()=>{var v;(v=window.MotionHandoffMarkAsComplete)===null||v===void 0||v.call(window,y)}),b.current=!1))}),f}function s4(e,t,n,r){const{layoutId:i,layout:a,drag:o,dragConstraints:s,layoutScroll:l,layoutRoot:u}=t;e.projection=new n(e.latestValues,t["data-framer-portal-id"]?void 0:Mx(e.parent)),e.projection.setOptions({layoutId:i,layout:a,alwaysMeasureLayout:!!o||s&&hi(s),visualElement:e,animationType:typeof a=="string"?a:"both",initialPromotionConfig:r,layoutScroll:l,layoutRoot:u})}function Mx(e){if(e)return e.options.allowProjection!==!1?e.projection:Mx(e.parent)}function l4(e,t,n){return k.useCallback(r=>{r&&e.mount&&e.mount(r),t&&(r?t.mount(r):t.unmount()),n&&(typeof n=="function"?n(r):hi(n)&&(n.current=r))},[t])}function Ml(e){return jl(e.animate)||jp.some(t=>eo(e[t]))}function Lx(e){return!!(Ml(e)||e.variants)}function c4(e,t){if(Ml(e)){const{initial:n,animate:r}=e;return{initial:n===!1||eo(n)?n:void 0,animate:eo(r)?r:void 0}}return e.inherit!==!1?t:{}}function u4(e){const{initial:t,animate:n}=c4(e,k.useContext(zl));return k.useMemo(()=>({initial:t,animate:n}),[Wm(t),Wm(n)])}function Wm(e){return Array.isArray(e)?e.join(" "):e}const Gm={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Ri={};for(const e in Gm)Ri[e]={isEnabled:t=>Gm[e].some(n=>!!t[n])};function d4(e){for(const t in e)Ri[t]={...Ri[t],...e[t]}}const p4=Symbol.for("motionComponentSymbol");function f4({preloadedFeatures:e,createVisualElement:t,useRender:n,useVisualState:r,Component:i}){e&&d4(e);function a(s,l){let u;const d={...k.useContext(Pl),...s,layoutId:h4(s)},{isStatic:p}=d,f=u4(s),g=r(s,p);if(!p&&Yp){m4();const x=g4(d);u=x.MeasureLayout,f.visualElement=o4(i,g,d,t,x.ProjectionNode)}return c.jsxs(zl.Provider,{value:f,children:[u&&f.visualElement?c.jsx(u,{visualElement:f.visualElement,...d}):null,n(i,s,l4(g,f.visualElement,l),g,p,f.visualElement)]})}const o=k.forwardRef(a);return o[p4]=i,o}function h4({layoutId:e}){const t=k.useContext(Wp).id;return t&&e!==void 0?t+"-"+e:e}function m4(e,t){k.useContext(Ax).strict}function g4(e){const{drag:t,layout:n}=Ri;if(!t&&!n)return{};const r={...t,...n};return{MeasureLayout:t!=null&&t.isEnabled(e)||n!=null&&n.isEnabled(e)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}const v4=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Kp(e){return typeof e!="string"||e.includes("-")?!1:!!(v4.indexOf(e)>-1||/[A-Z]/u.test(e))}function Ox(e,{style:t,vars:n},r,i){Object.assign(e.style,t,i&&i.getProjectionStyles(r));for(const a in n)e.style.setProperty(a,n[a])}const Ix=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function Rx(e,t,n,r){Ox(e,t,void 0,r);for(const i in t.attrs)e.setAttribute(Ix.has(i)?i:Up(i),t.attrs[i])}function Dx(e,{layout:t,layoutId:n}){return Xr.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!Ws[e]||e==="opacity")}function Xp(e,t,n){var r;const{style:i}=e,a={};for(const o in i)(at(i[o])||t.style&&at(t.style[o])||Dx(o,e)||((r=n==null?void 0:n.getValue(o))===null||r===void 0?void 0:r.liveStyle)!==void 0)&&(a[o]=i[o]);return a}function Vx(e,t,n){const r=Xp(e,t,n);for(const i in e)if(at(e[i])||at(t[i])){const a=fo.indexOf(i)!==-1?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i;r[a]=e[i]}return r}function Gi(e){const t=k.useRef(null);return t.current===null&&(t.current=e()),t.current}function x4({scrapeMotionValuesFromProps:e,createRenderState:t,onMount:n},r,i,a){const o={latestValues:y4(r,i,a,e),renderState:t()};return n&&(o.mount=s=>n(r,s,o)),o}const Nx=e=>(t,n)=>{const r=k.useContext(zl),i=k.useContext(El),a=()=>x4(e,t,r,i);return n?a():Gi(a)};function y4(e,t,n,r){const i={},a=r(e,{});for(const f in a)i[f]=as(a[f]);let{initial:o,animate:s}=e;const l=Ml(e),u=Lx(e);t&&u&&!l&&e.inherit!==!1&&(o===void 0&&(o=t.initial),s===void 0&&(s=t.animate));let d=n?n.initial===!1:!1;d=d||o===!1;const p=d?s:o;if(p&&typeof p!="boolean"&&!jl(p)){const f=Array.isArray(p)?p:[p];for(let g=0;g<f.length;g++){const x=Sp(e,f[g]);if(x){const{transitionEnd:y,transition:b,...v}=x;for(const h in v){let m=v[h];if(Array.isArray(m)){const w=d?m.length-1:0;m=m[w]}m!==null&&(i[h]=m)}for(const h in y)i[h]=y[h]}}}return i}const Qp=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),Fx=()=>({...Qp(),attrs:{}}),$x=(e,t)=>t&&typeof e=="number"?t.transform(e):e,w4={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},b4=fo.length;function S4(e,t,n){let r="",i=!0;for(let a=0;a<b4;a++){const o=fo[a],s=e[o];if(s===void 0)continue;let l=!0;if(typeof s=="number"?l=s===(o.startsWith("scale")?1:0):l=parseFloat(s)===0,!l||n){const u=$x(s,Mp[o]);if(!l){i=!1;const d=w4[o]||o;r+=`${d}(${u}) `}n&&(t[o]=u)}}return r=r.trim(),n?r=n(t,i?"":r):i&&(r="none"),r}function Zp(e,t,n){const{style:r,vars:i,transformOrigin:a}=e;let o=!1,s=!1;for(const l in t){const u=t[l];if(Xr.has(l)){o=!0;continue}else if(Lv(l)){i[l]=u;continue}else{const d=$x(u,Mp[l]);l.startsWith("origin")?(s=!0,a[l]=d):r[l]=d}}if(t.transform||(o||n?r.transform=S4(t,e.transform,n):r.transform&&(r.transform="none")),s){const{originX:l="50%",originY:u="50%",originZ:d=0}=a;r.transformOrigin=`${l} ${u} ${d}`}}function Ym(e,t,n){return typeof e=="string"?e:W.transform(t+n*e)}function k4(e,t,n){const r=Ym(t,e.x,e.width),i=Ym(n,e.y,e.height);return`${r} ${i}`}const j4={offset:"stroke-dashoffset",array:"stroke-dasharray"},_4={offset:"strokeDashoffset",array:"strokeDasharray"};function T4(e,t,n=1,r=0,i=!0){e.pathLength=1;const a=i?j4:_4;e[a.offset]=W.transform(-r);const o=W.transform(t),s=W.transform(n);e[a.array]=`${o} ${s}`}function Jp(e,{attrX:t,attrY:n,attrScale:r,originX:i,originY:a,pathLength:o,pathSpacing:s=1,pathOffset:l=0,...u},d,p){if(Zp(e,u,p),d){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:f,style:g,dimensions:x}=e;f.transform&&(x&&(g.transform=f.transform),delete f.transform),x&&(i!==void 0||a!==void 0||g.transform)&&(g.transformOrigin=k4(x,i!==void 0?i:.5,a!==void 0?a:.5)),t!==void 0&&(f.x=t),n!==void 0&&(f.y=n),r!==void 0&&(f.scale=r),o!==void 0&&T4(f,o,s,l,!1)}const ef=e=>typeof e=="string"&&e.toLowerCase()==="svg",C4={useVisualState:Nx({scrapeMotionValuesFromProps:Vx,createRenderState:Fx,onMount:(e,t,{renderState:n,latestValues:r})=>{oe.read(()=>{try{n.dimensions=typeof t.getBBox=="function"?t.getBBox():t.getBoundingClientRect()}catch{n.dimensions={x:0,y:0,width:0,height:0}}}),oe.render(()=>{Jp(n,r,ef(t.tagName),e.transformTemplate),Rx(t,n)})}})},E4={useVisualState:Nx({scrapeMotionValuesFromProps:Xp,createRenderState:Qp})};function Bx(e,t,n){for(const r in t)!at(t[r])&&!Dx(r,n)&&(e[r]=t[r])}function P4({transformTemplate:e},t){return k.useMemo(()=>{const n=Qp();return Zp(n,t,e),Object.assign({},n.vars,n.style)},[t])}function z4(e,t){const n=e.style||{},r={};return Bx(r,n,e),Object.assign(r,P4(e,t)),r}function A4(e,t){const n={},r=z4(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}const M4=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Gs(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||M4.has(e)}let qx=e=>!Gs(e);function L4(e){e&&(qx=t=>t.startsWith("on")?!Gs(t):e(t))}try{L4(require("@emotion/is-prop-valid").default)}catch{}function O4(e,t,n){const r={};for(const i in e)i==="values"&&typeof e.values=="object"||(qx(i)||n===!0&&Gs(i)||!t&&!Gs(i)||e.draggable&&i.startsWith("onDrag"))&&(r[i]=e[i]);return r}function I4(e,t,n,r){const i=k.useMemo(()=>{const a=Fx();return Jp(a,t,ef(r),e.transformTemplate),{...a.attrs,style:{...a.style}}},[t]);if(e.style){const a={};Bx(a,e.style,e),i.style={...a,...i.style}}return i}function R4(e=!1){return(n,r,i,{latestValues:a},o)=>{const l=(Kp(n)?I4:A4)(r,a,o,n),u=O4(r,typeof n=="string",e),d=n!==k.Fragment?{...u,...l,ref:i}:{},{children:p}=r,f=k.useMemo(()=>at(p)?p.get():p,[p]);return k.createElement(n,{...d,children:f})}}function D4(e,t){return function(r,{forwardMotionProps:i}={forwardMotionProps:!1}){const o={...Kp(r)?C4:E4,preloadedFeatures:e,useRender:R4(i),createVisualElement:t,Component:r};return f4(o)}}const od={current:null},Hx={current:!1};function V4(){if(Hx.current=!0,!!Yp)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>od.current=e.matches;e.addListener(t),t()}else od.current=!1}function N4(e,t,n){for(const r in t){const i=t[r],a=n[r];if(at(i))e.addValue(r,i);else if(at(a))e.addValue(r,ln(i,{owner:e}));else if(a!==i)if(e.hasValue(r)){const o=e.getValue(r);o.liveStyle===!0?o.jump(i):o.hasAnimated||o.set(i)}else{const o=e.getStaticValue(r);e.addValue(r,ln(o!==void 0?o:i,{owner:e}))}}for(const r in n)t[r]===void 0&&e.removeValue(r);return t}const Km=new WeakMap,F4=[...Rv,rt,pr],$4=e=>F4.find(Iv(e)),Xm=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class B4{scrapeMotionValuesFromProps(t,n,r){return{}}constructor({parent:t,props:n,presenceContext:r,reducedMotionConfig:i,blockInitialAnimation:a,visualState:o},s={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Pp,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const f=fn.now();this.renderScheduledAt<f&&(this.renderScheduledAt=f,oe.render(this.render,!1,!0))};const{latestValues:l,renderState:u}=o;this.latestValues=l,this.baseTarget={...l},this.initialValues=n.initial?{...l}:{},this.renderState=u,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.options=s,this.blockInitialAnimation=!!a,this.isControllingVariants=Ml(n),this.isVariantNode=Lx(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:d,...p}=this.scrapeMotionValuesFromProps(n,{},this);for(const f in p){const g=p[f];l[f]!==void 0&&at(g)&&g.set(l[f],!1)}}mount(t){this.current=t,Km.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,r)=>this.bindToMotionValue(r,n)),Hx.current||V4(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:od.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){Km.delete(this.current),this.projection&&this.projection.unmount(),Zt(this.notifyUpdate),Zt(this.render),this.valueSubscriptions.forEach(t=>t()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const t in this.events)this.events[t].clear();for(const t in this.features){const n=this.features[t];n&&(n.unmount(),n.isMounted=!1)}this.current=null}bindToMotionValue(t,n){this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)();const r=Xr.has(t),i=n.on("change",s=>{this.latestValues[t]=s,this.props.onUpdate&&oe.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0)}),a=n.on("renderRequest",this.scheduleRender);let o;window.MotionCheckAppearSync&&(o=window.MotionCheckAppearSync(this,t,n)),this.valueSubscriptions.set(t,()=>{i(),a(),o&&o(),n.owner&&n.stop()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in Ri){const n=Ri[t];if(!n)continue;const{isEnabled:r,Feature:i}=n;if(!this.features[t]&&i&&r(this.props)&&(this.features[t]=new i(this)),this.features[t]){const a=this.features[t];a.isMounted?a.update():(a.mount(),a.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Le()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<Xm.length;r++){const i=Xm[r];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const a="on"+i,o=t[a];o&&(this.propEventSubscriptions[i]=this.on(i,o))}this.prevMotionValues=N4(this,this.scrapeMotionValuesFromProps(t,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){const r=this.values.get(t);n!==r&&(r&&this.removeValue(t),this.bindToMotionValue(t,n),this.values.set(t,n),this.latestValues[t]=n.get())}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let r=this.values.get(t);return r===void 0&&n!==void 0&&(r=ln(n===null?void 0:n,{owner:this}),this.addValue(t,r)),r}readValue(t,n){var r;let i=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:(r=this.getBaseTargetFromProps(this.props,t))!==null&&r!==void 0?r:this.readValueFromInstance(this.current,t,this.options);return i!=null&&(typeof i=="string"&&(Av(i)||zv(i))?i=parseFloat(i):!$4(i)&&pr.test(n)&&(i=Hv(t,n)),this.setBaseTarget(t,at(i)?i.get():i)),at(i)?i.get():i}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var n;const{initial:r}=this.props;let i;if(typeof r=="string"||typeof r=="object"){const o=Sp(this.props,r,(n=this.presenceContext)===null||n===void 0?void 0:n.custom);o&&(i=o[t])}if(r&&i!==void 0)return i;const a=this.getBaseTargetFromProps(this.props,t);return a!==void 0&&!at(a)?a:this.initialValues[t]!==void 0&&i===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new Hp),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}}class Ux extends B4{constructor(){super(...arguments),this.KeyframeResolver=Uv}sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){return t.style?t.style[n]:void 0}removeValueFromRenderState(t,{vars:n,style:r}){delete n[t],delete r[t]}}function q4(e){return window.getComputedStyle(e)}class H4 extends Ux{constructor(){super(...arguments),this.type="html",this.renderInstance=Ox}readValueFromInstance(t,n){if(Xr.has(n)){const r=Lp(n);return r&&r.default||0}else{const r=q4(t),i=(Lv(n)?r.getPropertyValue(n):r[n])||0;return typeof i=="string"?i.trim():i}}measureInstanceViewportBox(t,{transformPagePoint:n}){return xx(t,n)}build(t,n,r){Zp(t,n,r.transformTemplate)}scrapeMotionValuesFromProps(t,n,r){return Xp(t,n,r)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;at(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}class U4 extends Ux{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Le}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(Xr.has(n)){const r=Lp(n);return r&&r.default||0}return n=Ix.has(n)?n:Up(n),t.getAttribute(n)}scrapeMotionValuesFromProps(t,n,r){return Vx(t,n,r)}build(t,n,r){Jp(t,n,this.isSVGTag,r.transformTemplate)}renderInstance(t,n,r,i){Rx(t,n,r,i)}mount(t){this.isSVGTag=ef(t.tagName),super.mount(t)}}const W4=(e,t)=>Kp(e)?new U4(t):new H4(t,{allowProjection:e!==k.Fragment}),G4=D4({...R7,...i4,...GS,...a4},W4),Oe=P3(G4);class Y4 extends k.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent){const r=this.props.sizeRef.current;r.height=n.offsetHeight||0,r.width=n.offsetWidth||0,r.top=n.offsetTop,r.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function K4({children:e,isPresent:t}){const n=k.useId(),r=k.useRef(null),i=k.useRef({width:0,height:0,top:0,left:0}),{nonce:a}=k.useContext(Pl);return k.useInsertionEffect(()=>{const{width:o,height:s,top:l,left:u}=i.current;if(t||!r.current||!o||!s)return;r.current.dataset.motionPopId=n;const d=document.createElement("style");return a&&(d.nonce=a),document.head.appendChild(d),d.sheet&&d.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${s}px !important;
            top: ${l}px !important;
            left: ${u}px !important;
          }
        `),()=>{document.head.removeChild(d)}},[t]),c.jsx(Y4,{isPresent:t,childRef:r,sizeRef:i,children:k.cloneElement(e,{ref:r})})}const X4=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:a,mode:o})=>{const s=Gi(Q4),l=k.useId(),u=k.useCallback(p=>{s.set(p,!0);for(const f of s.values())if(!f)return;r&&r()},[s,r]),d=k.useMemo(()=>({id:l,initial:t,isPresent:n,custom:i,onExitComplete:u,register:p=>(s.set(p,!1),()=>s.delete(p))}),a?[Math.random(),u]:[n,u]);return k.useMemo(()=>{s.forEach((p,f)=>s.set(f,!1))},[n]),k.useEffect(()=>{!n&&!s.size&&r&&r()},[n]),o==="popLayout"&&(e=c.jsx(K4,{isPresent:n,children:e})),c.jsx(El.Provider,{value:d,children:e})};function Q4(){return new Map}const Vo=e=>e.key||"";function Qm(e){const t=[];return k.Children.forEach(e,n=>{k.isValidElement(n)&&t.push(n)}),t}const Z4=({children:e,exitBeforeEnter:t,custom:n,initial:r=!0,onExitComplete:i,presenceAffectsLayout:a=!0,mode:o="sync"})=>{const s=k.useMemo(()=>Qm(e),[e]),l=s.map(Vo),u=k.useRef(!0),d=k.useRef(s),p=Gi(()=>new Map),[f,g]=k.useState(s),[x,y]=k.useState(s);Al(()=>{u.current=!1,d.current=s;for(let h=0;h<x.length;h++){const m=Vo(x[h]);l.includes(m)?p.delete(m):p.get(m)!==!0&&p.set(m,!1)}},[x,l.length,l.join("-")]);const b=[];if(s!==f){let h=[...s];for(let m=0;m<x.length;m++){const w=x[m],S=Vo(w);l.includes(S)||(h.splice(m,0,w),b.push(w))}o==="wait"&&b.length&&(h=b),y(Qm(h)),g(s);return}const{forceRender:v}=k.useContext(Wp);return c.jsx(c.Fragment,{children:x.map(h=>{const m=Vo(h),w=s===x||l.includes(m),S=()=>{if(p.has(m))p.set(m,!0);else return;let j=!0;p.forEach(C=>{C||(j=!1)}),j&&(v==null||v(),y(d.current),i&&i())};return c.jsx(X4,{isPresent:w,initial:!u.current||r?void 0:!1,custom:w?void 0:n,presenceAffectsLayout:a,mode:o,onExitComplete:w?void 0:S,children:h},m)})})};function J4(e){const t=Gi(()=>ln(e)),{isStatic:n}=k.useContext(Pl);if(n){const[,r]=k.useState(e);k.useEffect(()=>t.on("change",r),[])}return t}function Wx(e,t){const n=J4(t()),r=()=>n.set(t());return r(),Al(()=>{const i=()=>oe.preRender(r,!1,!0),a=e.map(o=>o.on("change",i));return()=>{a.forEach(o=>o()),Zt(r)}}),n}const e6=e=>e&&typeof e=="object"&&e.mix,t6=e=>e6(e)?e.mix:void 0;function n6(...e){const t=!Array.isArray(e[0]),n=t?0:-1,r=e[0+n],i=e[1+n],a=e[2+n],o=e[3+n],s=Vp(i,a,{mixer:t6(a[0]),...o});return t?s(r):s}function r6(e){Pa.current=[],e();const t=Wx(Pa.current,e);return Pa.current=void 0,t}function No(e,t,n,r){if(typeof e=="function")return r6(e);const i=typeof t=="function"?t:n6(t,n,r);return Array.isArray(e)?Zm(e,i):Zm([e],([a])=>i(a))}function Zm(e,t){const n=Gi(()=>[]);return Wx(e,()=>{n.length=0;const r=e.length;for(let i=0;i<r;i++)n[i]=e[i].get();return t(n)})}function Gx(e,t,n){return typeof e=="string"?e=document.querySelectorAll(e):e instanceof Element&&(e=[e]),Array.from(e||[])}const os=new WeakMap;let qn;function i6(e,t){if(t){const{inlineSize:n,blockSize:r}=t[0];return{width:n,height:r}}else return e instanceof SVGElement&&"getBBox"in e?e.getBBox():{width:e.offsetWidth,height:e.offsetHeight}}function a6({target:e,contentRect:t,borderBoxSize:n}){var r;(r=os.get(e))===null||r===void 0||r.forEach(i=>{i({target:e,contentSize:t,get size(){return i6(e,n)}})})}function o6(e){e.forEach(a6)}function s6(){typeof ResizeObserver>"u"||(qn=new ResizeObserver(o6))}function l6(e,t){qn||s6();const n=Gx(e);return n.forEach(r=>{let i=os.get(r);i||(i=new Set,os.set(r,i)),i.add(t),qn==null||qn.observe(r)}),()=>{n.forEach(r=>{const i=os.get(r);i==null||i.delete(t),i!=null&&i.size||qn==null||qn.unobserve(r)})}}const ss=new Set;let Ma;function c6(){Ma=()=>{const e={width:window.innerWidth,height:window.innerHeight},t={target:window,size:e,contentSize:e};ss.forEach(n=>n(t))},window.addEventListener("resize",Ma)}function u6(e){return ss.add(e),Ma||c6(),()=>{ss.delete(e),!ss.size&&Ma&&(Ma=void 0)}}function d6(e,t){return typeof e=="function"?u6(e):l6(e,t)}const p6=50,Jm=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),f6=()=>({time:0,x:Jm(),y:Jm()}),h6={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function e0(e,t,n,r){const i=n[t],{length:a,position:o}=h6[t],s=i.current,l=n.time;i.current=e[`scroll${o}`],i.scrollLength=e[`scroll${a}`]-e[`client${a}`],i.offset.length=0,i.offset[0]=0,i.offset[1]=i.scrollLength,i.progress=Br(0,i.scrollLength,i.current);const u=r-l;i.velocity=u>p6?0:Ip(i.current-s,u)}function m6(e,t,n){e0(e,"x",t,n),e0(e,"y",t,n),t.time=n}function g6(e,t){const n={x:0,y:0};let r=e;for(;r&&r!==t;)if(r instanceof HTMLElement)n.x+=r.offsetLeft,n.y+=r.offsetTop,r=r.offsetParent;else if(r.tagName==="svg"){const i=r.getBoundingClientRect();r=r.parentElement;const a=r.getBoundingClientRect();n.x+=i.left-a.left,n.y+=i.top-a.top}else if(r instanceof SVGGraphicsElement){const{x:i,y:a}=r.getBBox();n.x+=i,n.y+=a;let o=null,s=r.parentNode;for(;!o;)s.tagName==="svg"&&(o=s),s=r.parentNode;r=o}else break;return n}const v6={Enter:[[0,1],[1,1]],Exit:[[0,0],[1,0]],Any:[[1,0],[0,1]],All:[[0,0],[1,1]]},sd={start:0,center:.5,end:1};function t0(e,t,n=0){let r=0;if(e in sd&&(e=sd[e]),typeof e=="string"){const i=parseFloat(e);e.endsWith("px")?r=i:e.endsWith("%")?e=i/100:e.endsWith("vw")?r=i/100*document.documentElement.clientWidth:e.endsWith("vh")?r=i/100*document.documentElement.clientHeight:e=i}return typeof e=="number"&&(r=t*e),n+r}const x6=[0,0];function y6(e,t,n,r){let i=Array.isArray(e)?e:x6,a=0,o=0;return typeof e=="number"?i=[e,e]:typeof e=="string"&&(e=e.trim(),e.includes(" ")?i=e.split(" "):i=[e,sd[e]?e:"0"]),a=t0(i[0],n,r),o=t0(i[1],t),a-o}const w6={x:0,y:0};function b6(e){return"getBBox"in e&&e.tagName!=="svg"?e.getBBox():{width:e.clientWidth,height:e.clientHeight}}function S6(e,t,n){const{offset:r=v6.All}=n,{target:i=e,axis:a="y"}=n,o=a==="y"?"height":"width",s=i!==e?g6(i,e):w6,l=i===e?{width:e.scrollWidth,height:e.scrollHeight}:b6(i),u={width:e.clientWidth,height:e.clientHeight};t[a].offset.length=0;let d=!t[a].interpolate;const p=r.length;for(let f=0;f<p;f++){const g=y6(r[f],u[o],l[o],s[a]);!d&&g!==t[a].interpolatorOffsets[f]&&(d=!0),t[a].offset[f]=g}d&&(t[a].interpolate=Vp(t[a].offset,Zv(r)),t[a].interpolatorOffsets=[...t[a].offset]),t[a].progress=t[a].interpolate(t[a].current)}function k6(e,t=e,n){if(n.x.targetOffset=0,n.y.targetOffset=0,t!==e){let r=t;for(;r&&r!==e;)n.x.targetOffset+=r.offsetLeft,n.y.targetOffset+=r.offsetTop,r=r.offsetParent}n.x.targetLength=t===e?t.scrollWidth:t.clientWidth,n.y.targetLength=t===e?t.scrollHeight:t.clientHeight,n.x.containerLength=e.clientWidth,n.y.containerLength=e.clientHeight}function j6(e,t,n,r={}){return{measure:()=>k6(e,r.target,n),update:i=>{m6(e,n,i),(r.offset||r.target)&&S6(e,n,r)},notify:()=>t(n)}}const la=new WeakMap,n0=new WeakMap,Oc=new WeakMap,r0=e=>e===document.documentElement?window:e;function tf(e,{container:t=document.documentElement,...n}={}){let r=Oc.get(t);r||(r=new Set,Oc.set(t,r));const i=f6(),a=j6(t,e,i,n);if(r.add(a),!la.has(t)){const s=()=>{for(const f of r)f.measure()},l=()=>{for(const f of r)f.update(qe.timestamp)},u=()=>{for(const f of r)f.notify()},d=()=>{oe.read(s,!1,!0),oe.read(l,!1,!0),oe.update(u,!1,!0)};la.set(t,d);const p=r0(t);window.addEventListener("resize",d,{passive:!0}),t!==document.documentElement&&n0.set(t,d6(t,d)),p.addEventListener("scroll",d,{passive:!0})}const o=la.get(t);return oe.read(o,!1,!0),()=>{var s;Zt(o);const l=Oc.get(t);if(!l||(l.delete(a),l.size))return;const u=la.get(t);la.delete(t),u&&(r0(t).removeEventListener("scroll",u),(s=n0.get(t))===null||s===void 0||s(),window.removeEventListener("resize",u))}}function Yx(e,t){let n;const r=()=>{const{currentTime:i}=t,o=(i===null?0:i.value)/100;n!==o&&e(o),n=o};return oe.update(r,!0),()=>Zt(r)}function _6({source:e,container:t,axis:n="y"}){e&&(t=e);const r={value:0},i=tf(a=>{r.value=a[n].progress*100},{container:t,axis:n});return{currentTime:r,cancel:i}}const Ic=new Map;function Kx({source:e,container:t=document.documentElement,axis:n="y"}={}){e&&(t=e),Ic.has(t)||Ic.set(t,{});const r=Ic.get(t);return r[n]||(r[n]=nx()?new ScrollTimeline({source:t,axis:n}):_6({source:t,axis:n})),r[n]}function T6(e){return e.length===2}function Xx(e){return e&&(e.target||e.offset)}function C6(e,t){return T6(e)||Xx(t)?tf(n=>{e(n[t.axis].progress,n)},t):Yx(e,Kx(t))}function E6(e,t){if(Xx(t))return e.pause(),tf(n=>{e.time=e.duration*n[t.axis].progress},t);{const n=Kx(t);return e.attachTimeline(n,r=>(r.pause(),Yx(i=>{r.time=r.duration*i},n)))}}function P6(e,{axis:t="y",...n}={}){const r={axis:t,...n};return typeof e=="function"?C6(e,r):E6(e,r)}function i0(e,t){q3(!!(!t||t.current))}const z6=()=>({scrollX:ln(0),scrollY:ln(0),scrollXProgress:ln(0),scrollYProgress:ln(0)});function A6({container:e,target:t,layoutEffect:n=!0,...r}={}){const i=Gi(z6);return(n?Al:k.useEffect)(()=>(i0("target",t),i0("container",e),P6((o,{x:s,y:l})=>{i.scrollX.set(s.current),i.scrollXProgress.set(s.progress),i.scrollY.set(l.current),i.scrollYProgress.set(l.progress)},{...r,container:(e==null?void 0:e.current)||void 0,target:(t==null?void 0:t.current)||void 0})),[e,t,JSON.stringify(r.offset)]),i}const M6={some:0,all:1};function L6(e,t,{root:n,margin:r,amount:i="some"}={}){const a=Gx(e),o=new WeakMap,s=u=>{u.forEach(d=>{const p=o.get(d.target);if(d.isIntersecting!==!!p)if(d.isIntersecting){const f=t(d);typeof f=="function"?o.set(d.target,f):l.unobserve(d.target)}else p&&(p(d),o.delete(d.target))})},l=new IntersectionObserver(s,{root:n,rootMargin:r,threshold:typeof i=="number"?i:M6[i]});return a.forEach(u=>l.observe(u)),()=>l.disconnect()}function O6(e,{root:t,margin:n,amount:r,once:i=!1}={}){const[a,o]=k.useState(!1);return k.useEffect(()=>{if(!e.current||i&&a)return;const s=()=>(o(!0),i?void 0:()=>o(!1)),l={root:t&&t.current||void 0,margin:n,amount:r};return L6(e.current,s,l)},[t,e,n,i,r]),a}var Qx={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a0=J.createContext&&J.createContext(Qx),I6=["attr","size","title"];function R6(e,t){if(e==null)return{};var n=D6(e,t),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function D6(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function Ys(){return Ys=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ys.apply(this,arguments)}function o0(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Ks(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?o0(Object(n),!0).forEach(function(r){V6(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o0(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function V6(e,t,n){return t=N6(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function N6(e){var t=F6(e,"string");return typeof t=="symbol"?t:t+""}function F6(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Zx(e){return e&&e.map((t,n)=>J.createElement(t.tag,Ks({key:n},t.attr),Zx(t.child)))}function ee(e){return t=>J.createElement($6,Ys({attr:Ks({},e.attr)},t),Zx(e.child))}function $6(e){var t=n=>{var{attr:r,size:i,title:a}=e,o=R6(e,I6),s=i||n.size||"1em",l;return n.className&&(l=n.className),e.className&&(l=(l?l+" ":"")+e.className),J.createElement("svg",Ys({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:l,style:Ks(Ks({color:e.color||n.color},n.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),a&&J.createElement("title",null,a),e.children)};return a0!==void 0?J.createElement(a0.Consumer,null,n=>t(n)):t(Qx)}function B6(e){return ee({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"},child:[]}]})(e)}function s0(e){return ee({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M12.971 352h32.394C67.172 454.735 181.944 512 288 512c106.229 0 220.853-57.38 242.635-160h32.394c10.691 0 16.045-12.926 8.485-20.485l-67.029-67.029c-4.686-4.686-12.284-4.686-16.971 0l-67.029 67.029c-7.56 7.56-2.206 20.485 8.485 20.485h35.146c-20.29 54.317-84.963 86.588-144.117 94.015V256h52c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-52v-5.47c37.281-13.178 63.995-48.725 64-90.518C384.005 43.772 341.605.738 289.37.01 235.723-.739 192 42.525 192 96c0 41.798 26.716 77.35 64 90.53V192h-52c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h52v190.015c-58.936-7.399-123.82-39.679-144.117-94.015h35.146c10.691 0 16.045-12.926 8.485-20.485l-67.029-67.029c-4.686-4.686-12.284-4.686-16.971 0L4.485 331.515C-3.074 339.074 2.28 352 12.971 352zM288 64c17.645 0 32 14.355 32 32s-14.355 32-32 32-32-14.355-32-32 14.355-32 32-32z"},child:[]}]})(e)}function nf(e){return ee({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"},child:[]}]})(e)}function Ee(e){return ee({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M32,384a95.4,95.4,0,0,0,32,71.09V496a16,16,0,0,0,16,16h32a16,16,0,0,0,16-16V480H384v16a16,16,0,0,0,16,16h32a16,16,0,0,0,16-16V455.09A95.4,95.4,0,0,0,480,384V336H32ZM496,256H80V69.25a21.26,21.26,0,0,1,36.28-15l19.27,19.26c-13.13,29.88-7.61,59.11,8.62,79.73l-.17.17A16,16,0,0,0,144,176l11.31,11.31a16,16,0,0,0,22.63,0L283.31,81.94a16,16,0,0,0,0-22.63L272,48a16,16,0,0,0-22.62,0l-.17.17c-20.62-16.23-49.83-21.75-79.73-8.62L150.22,20.28A69.25,69.25,0,0,0,32,69.25V256H16A16,16,0,0,0,0,272v16a16,16,0,0,0,16,16H496a16,16,0,0,0,16-16V272A16,16,0,0,0,496,256Z"},child:[]}]})(e)}function De(e){return ee({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M176 256c44.11 0 80-35.89 80-80s-35.89-80-80-80-80 35.89-80 80 35.89 80 80 80zm352-128H304c-8.84 0-16 7.16-16 16v144H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v352c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16v-48h512v48c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V240c0-61.86-50.14-112-112-112z"},child:[]}]})(e)}function q6(e){return ee({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M448 384c-28.02 0-31.26-32-74.5-32-43.43 0-46.825 32-74.75 32-27.695 0-31.454-32-74.75-32-42.842 0-47.218 32-74.5 32-28.148 0-31.202-32-74.75-32-43.547 0-46.653 32-74.75 32v-80c0-26.5 21.5-48 48-48h16V112h64v144h64V112h64v144h64V112h64v144h16c26.5 0 48 21.5 48 48v80zm0 128H0v-96c43.356 0 46.767-32 74.75-32 27.951 0 31.253 32 74.75 32 42.843 0 47.217-32 74.5-32 28.148 0 31.201 32 74.75 32 43.357 0 46.767-32 74.75-32 27.488 0 31.252 32 74.5 32v96zM96 96c-17.75 0-32-14.25-32-32 0-31 32-23 32-64 12 0 32 29.5 32 56s-14.25 40-32 40zm128 0c-17.75 0-32-14.25-32-32 0-31 32-23 32-64 12 0 32 29.5 32 56s-14.25 40-32 40zm128 0c-17.75 0-32-14.25-32-32 0-31 32-23 32-64 12 0 32 29.5 32 56s-14.25 40-32 40z"},child:[]}]})(e)}function l0(e){return ee({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M12 192h424c6.6 0 12 5.4 12 12v260c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V204c0-6.6 5.4-12 12-12zm436-44v-36c0-26.5-21.5-48-48-48h-48V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H160V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v36c0 6.6 5.4 12 12 12h424c6.6 0 12-5.4 12-12z"},child:[]}]})(e)}function c0(e){return ee({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"},child:[]}]})(e)}function ae(e){return ee({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M510.5 225.5c-6.9-37.2-39.3-65.5-78.5-65.5-12.3 0-23.9 3-34.3 8-17.4-24.1-45.6-40-77.7-40-53 0-96 43-96 96 0 .5.2 1.1.2 1.6C187.6 233 160 265.2 160 304c0 44.2 35.8 80 80 80h256c44.2 0 80-35.8 80-80 0-39.2-28.2-71.7-65.5-78.5zm-386.4 34.4c-37.4-37.4-37.4-98.3 0-135.8 34.6-34.6 89.1-36.8 126.7-7.4 20-12.9 43.6-20.7 69.2-20.7.7 0 1.3.2 2 .2l8.9-26.7c3.4-10.2-6.3-19.8-16.5-16.4l-75.3 25.1-35.5-71c-4.8-9.6-18.5-9.6-23.3 0l-35.5 71-75.3-25.1c-10.2-3.4-19.8 6.3-16.4 16.5l25.1 75.3-71 35.5c-9.6 4.8-9.6 18.5 0 23.3l71 35.5-25.1 75.3c-3.4 10.2 6.3 19.8 16.5 16.5l59.2-19.7c-.2-2.4-.7-4.7-.7-7.2 0-12.5 2.3-24.5 6.2-35.9-3.6-2.7-7.1-5.2-10.2-8.3zm69.8-58c4.3-24.5 15.8-46.4 31.9-64-9.8-6.2-21.4-9.9-33.8-9.9-35.3 0-64 28.7-64 64 0 18.7 8.2 35.4 21.1 47.1 11.3-15.9 26.6-28.9 44.8-37.2zm330.6 216.2c-7.6-4.3-17.4-1.8-21.8 6l-36.6 64c-4.4 7.7-1.7 17.4 6 21.8 2.5 1.4 5.2 2.1 7.9 2.1 5.5 0 10.9-2.9 13.9-8.1l36.6-64c4.3-7.7 1.7-17.4-6-21.8zm-96 0c-7.6-4.3-17.4-1.8-21.8 6l-36.6 64c-4.4 7.7-1.7 17.4 6 21.8 2.5 1.4 5.2 2.1 7.9 2.1 5.5 0 10.9-2.9 13.9-8.1l36.6-64c4.3-7.7 1.7-17.4-6-21.8zm-96 0c-7.6-4.3-17.4-1.8-21.8 6l-36.6 64c-4.4 7.7-1.7 17.4 6 21.8 2.5 1.4 5.2 2.1 7.9 2.1 5.5 0 10.9-2.9 13.9-8.1l36.6-64c4.3-7.7 1.7-17.4-6-21.8zm-96 0c-7.6-4.3-17.4-1.8-21.8 6l-36.6 64c-4.4 7.7-1.7 17.4 6 21.8 2.5 1.4 5.2 2.1 7.9 2.1 5.5 0 10.9-2.9 13.9-8.1l36.6-64c4.3-7.7 1.7-17.4-6-21.8z"},child:[]}]})(e)}function ct(e){return ee({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M216 23.86c0-23.8-30.65-32.77-44.15-13.04C48 191.85 224 200 224 288c0 35.63-29.11 64.46-64.85 63.99-35.17-.45-63.15-29.77-63.15-64.94v-85.51c0-21.7-26.47-32.23-41.43-16.5C27.8 213.16 0 261.33 0 320c0 105.87 86.13 192 192 192s192-86.13 192-192c0-170.29-168-193-168-296.14z"},child:[]}]})(e)}function u0(e){return ee({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"},child:[]}]})(e)}function d0(e){return ee({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"},child:[]}]})(e)}function H6(e){return ee({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M634.92 462.7l-288-448C341.03 5.54 330.89 0 320 0s-21.03 5.54-26.92 14.7l-288 448a32.001 32.001 0 0 0-1.17 32.64A32.004 32.004 0 0 0 32 512h576c11.71 0 22.48-6.39 28.09-16.67a31.983 31.983 0 0 0-1.17-32.63zM320 91.18L405.39 224H320l-64 64-38.06-38.06L320 91.18z"},child:[]}]})(e)}function hn(e){return ee({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M470.38 1.51L150.41 96A32 32 0 0 0 128 126.51v261.41A139 139 0 0 0 96 384c-53 0-96 28.66-96 64s43 64 96 64 96-28.66 96-64V214.32l256-75v184.61a138.4 138.4 0 0 0-32-3.93c-53 0-96 28.66-96 64s43 64 96 64 96-28.65 96-64V32a32 32 0 0 0-41.62-30.49z"},child:[]}]})(e)}function xe(e){return ee({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 224c-79.41 0-192 122.76-192 200.25 0 34.9 26.81 55.75 71.74 55.75 48.84 0 81.09-25.08 120.26-25.08 39.51 0 71.85 25.08 120.26 25.08 44.93 0 71.74-20.85 71.74-55.75C448 346.76 335.41 224 256 224zm-147.28-12.61c-10.4-34.65-42.44-57.09-71.56-50.13-29.12 6.96-44.29 40.69-33.89 75.34 10.4 34.65 42.44 57.09 71.56 50.13 29.12-6.96 44.29-40.69 33.89-75.34zm84.72-20.78c30.94-8.14 46.42-49.94 34.58-93.36s-46.52-72.01-77.46-63.87-46.42 49.94-34.58 93.36c11.84 43.42 46.53 72.02 77.46 63.87zm281.39-29.34c-29.12-6.96-61.15 15.48-71.56 50.13-10.4 34.65 4.77 68.38 33.89 75.34 29.12 6.96 61.15-15.48 71.56-50.13 10.4-34.65-4.77-68.38-33.89-75.34zm-156.27 29.34c30.94 8.14 65.62-20.45 77.46-63.87 11.84-43.42-3.64-85.21-34.58-93.36s-65.62 20.45-77.46 63.87c-11.84 43.42 3.64 85.22 34.58 93.36z"},child:[]}]})(e)}function je(e){return ee({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M160 288h-56c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h56v-64h-56c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h56V96h-56c-4.42 0-8-3.58-8-8V72c0-4.42 3.58-8 8-8h56V32c0-17.67-14.33-32-32-32H32C14.33 0 0 14.33 0 32v448c0 2.77.91 5.24 1.57 7.8L160 329.38V288zm320 64h-32v56c0 4.42-3.58 8-8 8h-16c-4.42 0-8-3.58-8-8v-56h-64v56c0 4.42-3.58 8-8 8h-16c-4.42 0-8-3.58-8-8v-56h-64v56c0 4.42-3.58 8-8 8h-16c-4.42 0-8-3.58-8-8v-56h-41.37L24.2 510.43c2.56.66 5.04 1.57 7.8 1.57h448c17.67 0 32-14.33 32-32v-96c0-17.67-14.33-32-32-32z"},child:[]}]})(e)}function Zr(e){return ee({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M440.3 345.2l-33.8-19.5 26-7c8.2-2.2 13.1-10.7 10.9-18.9l-4-14.9c-2.2-8.2-10.7-13.1-18.9-10.9l-70.8 19-63.9-37 63.8-36.9 70.8 19c8.2 2.2 16.7-2.7 18.9-10.9l4-14.9c2.2-8.2-2.7-16.7-10.9-18.9l-26-7 33.8-19.5c7.4-4.3 9.9-13.7 5.7-21.1L430.4 119c-4.3-7.4-13.7-9.9-21.1-5.7l-33.8 19.5 7-26c2.2-8.2-2.7-16.7-10.9-18.9l-14.9-4c-8.2-2.2-16.7 2.7-18.9 10.9l-19 70.8-62.8 36.2v-77.5l53.7-53.7c6.2-6.2 6.2-16.4 0-22.6l-11.3-11.3c-6.2-6.2-16.4-6.2-22.6 0L256 56.4V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v40.4l-19.7-19.7c-6.2-6.2-16.4-6.2-22.6 0L138.3 48c-6.3 6.2-6.3 16.4 0 22.6l53.7 53.7v77.5l-62.8-36.2-19-70.8c-2.2-8.2-10.7-13.1-18.9-10.9l-14.9 4c-8.2 2.2-13.1 10.7-10.9 18.9l7 26-33.8-19.5c-7.4-4.3-16.8-1.7-21.1 5.7L2.1 145.7c-4.3 7.4-1.7 16.8 5.7 21.1l33.8 19.5-26 7c-8.3 2.2-13.2 10.7-11 19l4 14.9c2.2 8.2 10.7 13.1 18.9 10.9l70.8-19 63.8 36.9-63.8 36.9-70.8-19c-8.2-2.2-16.7 2.7-18.9 10.9l-4 14.9c-2.2 8.2 2.7 16.7 10.9 18.9l26 7-33.8 19.6c-7.4 4.3-9.9 13.7-5.7 21.1l15.5 26.8c4.3 7.4 13.7 9.9 21.1 5.7l33.8-19.5-7 26c-2.2 8.2 2.7 16.7 10.9 18.9l14.9 4c8.2 2.2 16.7-2.7 18.9-10.9l19-70.8 62.8-36.2v77.5l-53.7 53.7c-6.3 6.2-6.3 16.4 0 22.6l11.3 11.3c6.2 6.2 16.4 6.2 22.6 0l19.7-19.7V496c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-40.4l19.7 19.7c6.2 6.2 16.4 6.2 22.6 0l11.3-11.3c6.2-6.2 6.2-16.4 0-22.6L256 387.7v-77.5l62.8 36.2 19 70.8c2.2 8.2 10.7 13.1 18.9 10.9l14.9-4c8.2-2.2 13.1-10.7 10.9-18.9l-7-26 33.8 19.5c7.4 4.3 16.8 1.7 21.1-5.7l15.5-26.8c4.3-7.3 1.8-16.8-5.6-21z"},child:[]}]})(e)}function Me(e){return ee({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M592 0H48A48 48 0 0 0 0 48v320a48 48 0 0 0 48 48h240v32H112a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16H352v-32h240a48 48 0 0 0 48-48V48a48 48 0 0 0-48-48zm-16 352H64V64h512z"},child:[]}]})(e)}function re(e){return ee({tag:"svg",attr:{viewBox:"0 0 416 512"},child:[{tag:"path",attr:{d:"M207.9 15.2c.8 4.7 16.1 94.5 16.1 128.8 0 52.3-27.8 89.6-68.9 104.6L168 486.7c.7 13.7-10.2 25.3-24 25.3H80c-13.7 0-24.7-11.5-24-25.3l12.9-238.1C27.7 233.6 0 196.2 0 144 0 109.6 15.3 19.9 16.1 15.2 19.3-5.1 61.4-5.4 64 16.3v141.2c1.3 3.4 15.1 3.2 16 0 1.4-25.3 7.9-139.2 8-141.8 3.3-20.8 44.7-20.8 47.9 0 .2 2.7 6.6 116.5 8 141.8.9 3.2 14.8 3.4 16 0V16.3c2.6-21.6 44.8-21.4 48-1.1zm119.2 285.7l-15 185.1c-1.2 14 9.9 26 23.9 26h56c13.3 0 24-10.7 24-24V24c0-13.2-10.7-24-24-24-82.5 0-221.4 178.5-64.9 300.9z"},child:[]}]})(e)}var Jx={exports:{}},U6="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",W6=U6,G6=W6;function ey(){}function ty(){}ty.resetWarningCache=ey;var Y6=function(){function e(r,i,a,o,s,l){if(l!==G6){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:ty,resetWarningCache:ey};return n.PropTypes=n,n};Jx.exports=Y6();var K6=Jx.exports;const be=Hr(K6);function X6(e){return e&&typeof e=="object"&&"default"in e?e.default:e}var ny=k,Q6=X6(ny);function p0(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Z6(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var J6=!!(typeof window<"u"&&window.document&&window.document.createElement);function ek(e,t,n){if(typeof e!="function")throw new Error("Expected reducePropsToState to be a function.");if(typeof t!="function")throw new Error("Expected handleStateChangeOnClient to be a function.");if(typeof n<"u"&&typeof n!="function")throw new Error("Expected mapStateOnServer to either be undefined or a function.");function r(i){return i.displayName||i.name||"Component"}return function(a){if(typeof a!="function")throw new Error("Expected WrappedComponent to be a React component.");var o=[],s;function l(){s=e(o.map(function(d){return d.props})),u.canUseDOM?t(s):n&&(s=n(s))}var u=function(d){Z6(p,d);function p(){return d.apply(this,arguments)||this}p.peek=function(){return s},p.rewind=function(){if(p.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var x=s;return s=void 0,o=[],x};var f=p.prototype;return f.UNSAFE_componentWillMount=function(){o.push(this),l()},f.componentDidUpdate=function(){l()},f.componentWillUnmount=function(){var x=o.indexOf(this);o.splice(x,1),l()},f.render=function(){return Q6.createElement(a,this.props)},p}(ny.PureComponent);return p0(u,"displayName","SideEffect("+r(a)+")"),p0(u,"canUseDOM",J6),u}}var tk=ek;const nk=Hr(tk);var rk=typeof Element<"u",ik=typeof Map=="function",ak=typeof Set=="function",ok=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function ls(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var n,r,i;if(Array.isArray(e)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!==0;)if(!ls(e[r],t[r]))return!1;return!0}var a;if(ik&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(a=e.entries();!(r=a.next()).done;)if(!t.has(r.value[0]))return!1;for(a=e.entries();!(r=a.next()).done;)if(!ls(r.value[1],t.get(r.value[0])))return!1;return!0}if(ak&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(a=e.entries();!(r=a.next()).done;)if(!t.has(r.value[0]))return!1;return!0}if(ok&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!==0;)if(e[r]!==t[r])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf&&typeof e.valueOf=="function"&&typeof t.valueOf=="function")return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString&&typeof e.toString=="function"&&typeof t.toString=="function")return e.toString()===t.toString();if(i=Object.keys(e),n=i.length,n!==Object.keys(t).length)return!1;for(r=n;r--!==0;)if(!Object.prototype.hasOwnProperty.call(t,i[r]))return!1;if(rk&&e instanceof Element)return!1;for(r=n;r--!==0;)if(!((i[r]==="_owner"||i[r]==="__v"||i[r]==="__o")&&e.$$typeof)&&!ls(e[i[r]],t[i[r]]))return!1;return!0}return e!==e&&t!==t}var sk=function(t,n){try{return ls(t,n)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}};const lk=Hr(sk);/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var f0=Object.getOwnPropertySymbols,ck=Object.prototype.hasOwnProperty,uk=Object.prototype.propertyIsEnumerable;function dk(e){if(e==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function pk(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de",Object.getOwnPropertyNames(e)[0]==="5")return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map(function(a){return t[a]});if(r.join("")!=="0123456789")return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach(function(a){i[a]=a}),Object.keys(Object.assign({},i)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var fk=pk()?Object.assign:function(e,t){for(var n,r=dk(e),i,a=1;a<arguments.length;a++){n=Object(arguments[a]);for(var o in n)ck.call(n,o)&&(r[o]=n[o]);if(f0){i=f0(n);for(var s=0;s<i.length;s++)uk.call(n,i[s])&&(r[i[s]]=n[i[s]])}}return r};const hk=Hr(fk);var Ir={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},X={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"};Object.keys(X).map(function(e){return X[e]});var Se={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src",TARGET:"target"},Xs={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},ro={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},mk=Object.keys(Xs).reduce(function(e,t){return e[Xs[t]]=t,e},{}),gk=[X.NOSCRIPT,X.SCRIPT,X.STYLE],Gt="data-react-helmet",vk=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},xk=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},yk=function(){function e(t,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),ht=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},wk=function(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},h0=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},bk=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e},ld=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return n===!1?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},Sk=function(t){var n=_i(t,X.TITLE),r=_i(t,ro.TITLE_TEMPLATE);if(r&&n)return r.replace(/%s/g,function(){return Array.isArray(n)?n.join(""):n});var i=_i(t,ro.DEFAULT_TITLE);return n||i||void 0},kk=function(t){return _i(t,ro.ON_CHANGE_CLIENT_STATE)||function(){}},Rc=function(t,n){return n.filter(function(r){return typeof r[t]<"u"}).map(function(r){return r[t]}).reduce(function(r,i){return ht({},r,i)},{})},jk=function(t,n){return n.filter(function(r){return typeof r[X.BASE]<"u"}).map(function(r){return r[X.BASE]}).reverse().reduce(function(r,i){if(!r.length)for(var a=Object.keys(i),o=0;o<a.length;o++){var s=a[o],l=s.toLowerCase();if(t.indexOf(l)!==-1&&i[l])return r.concat(i)}return r},[])},ca=function(t,n,r){var i={};return r.filter(function(a){return Array.isArray(a[t])?!0:(typeof a[t]<"u"&&Ek("Helmet: "+t+' should be of type "Array". Instead found type "'+vk(a[t])+'"'),!1)}).map(function(a){return a[t]}).reverse().reduce(function(a,o){var s={};o.filter(function(f){for(var g=void 0,x=Object.keys(f),y=0;y<x.length;y++){var b=x[y],v=b.toLowerCase();n.indexOf(v)!==-1&&!(g===Se.REL&&f[g].toLowerCase()==="canonical")&&!(v===Se.REL&&f[v].toLowerCase()==="stylesheet")&&(g=v),n.indexOf(b)!==-1&&(b===Se.INNER_HTML||b===Se.CSS_TEXT||b===Se.ITEM_PROP)&&(g=b)}if(!g||!f[g])return!1;var h=f[g].toLowerCase();return i[g]||(i[g]={}),s[g]||(s[g]={}),i[g][h]?!1:(s[g][h]=!0,!0)}).reverse().forEach(function(f){return a.push(f)});for(var l=Object.keys(s),u=0;u<l.length;u++){var d=l[u],p=hk({},i[d],s[d]);i[d]=p}return a},[]).reverse()},_i=function(t,n){for(var r=t.length-1;r>=0;r--){var i=t[r];if(i.hasOwnProperty(n))return i[n]}return null},_k=function(t){return{baseTag:jk([Se.HREF,Se.TARGET],t),bodyAttributes:Rc(Ir.BODY,t),defer:_i(t,ro.DEFER),encode:_i(t,ro.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:Rc(Ir.HTML,t),linkTags:ca(X.LINK,[Se.REL,Se.HREF],t),metaTags:ca(X.META,[Se.NAME,Se.CHARSET,Se.HTTPEQUIV,Se.PROPERTY,Se.ITEM_PROP],t),noscriptTags:ca(X.NOSCRIPT,[Se.INNER_HTML],t),onChangeClientState:kk(t),scriptTags:ca(X.SCRIPT,[Se.SRC,Se.INNER_HTML],t),styleTags:ca(X.STYLE,[Se.CSS_TEXT],t),title:Sk(t),titleAttributes:Rc(Ir.TITLE,t)}},cd=function(){var e=Date.now();return function(t){var n=Date.now();n-e>16?(e=n,t(n)):setTimeout(function(){cd(t)},0)}}(),m0=function(t){return clearTimeout(t)},Tk=typeof window<"u"?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||cd:global.requestAnimationFrame||cd,Ck=typeof window<"u"?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||m0:global.cancelAnimationFrame||m0,Ek=function(t){return console&&typeof console.warn=="function"&&console.warn(t)},ua=null,Pk=function(t){ua&&Ck(ua),t.defer?ua=Tk(function(){g0(t,function(){ua=null})}):(g0(t),ua=null)},g0=function(t,n){var r=t.baseTag,i=t.bodyAttributes,a=t.htmlAttributes,o=t.linkTags,s=t.metaTags,l=t.noscriptTags,u=t.onChangeClientState,d=t.scriptTags,p=t.styleTags,f=t.title,g=t.titleAttributes;ud(X.BODY,i),ud(X.HTML,a),zk(f,g);var x={baseTag:Jr(X.BASE,r),linkTags:Jr(X.LINK,o),metaTags:Jr(X.META,s),noscriptTags:Jr(X.NOSCRIPT,l),scriptTags:Jr(X.SCRIPT,d),styleTags:Jr(X.STYLE,p)},y={},b={};Object.keys(x).forEach(function(v){var h=x[v],m=h.newTags,w=h.oldTags;m.length&&(y[v]=m),w.length&&(b[v]=x[v].oldTags)}),n&&n(),u(t,y,b)},ry=function(t){return Array.isArray(t)?t.join(""):t},zk=function(t,n){typeof t<"u"&&document.title!==t&&(document.title=ry(t)),ud(X.TITLE,n)},ud=function(t,n){var r=document.getElementsByTagName(t)[0];if(r){for(var i=r.getAttribute(Gt),a=i?i.split(","):[],o=[].concat(a),s=Object.keys(n),l=0;l<s.length;l++){var u=s[l],d=n[u]||"";r.getAttribute(u)!==d&&r.setAttribute(u,d),a.indexOf(u)===-1&&a.push(u);var p=o.indexOf(u);p!==-1&&o.splice(p,1)}for(var f=o.length-1;f>=0;f--)r.removeAttribute(o[f]);a.length===o.length?r.removeAttribute(Gt):r.getAttribute(Gt)!==s.join(",")&&r.setAttribute(Gt,s.join(","))}},Jr=function(t,n){var r=document.head||document.querySelector(X.HEAD),i=r.querySelectorAll(t+"["+Gt+"]"),a=Array.prototype.slice.call(i),o=[],s=void 0;return n&&n.length&&n.forEach(function(l){var u=document.createElement(t);for(var d in l)if(l.hasOwnProperty(d))if(d===Se.INNER_HTML)u.innerHTML=l.innerHTML;else if(d===Se.CSS_TEXT)u.styleSheet?u.styleSheet.cssText=l.cssText:u.appendChild(document.createTextNode(l.cssText));else{var p=typeof l[d]>"u"?"":l[d];u.setAttribute(d,p)}u.setAttribute(Gt,"true"),a.some(function(f,g){return s=g,u.isEqualNode(f)})?a.splice(s,1):o.push(u)}),a.forEach(function(l){return l.parentNode.removeChild(l)}),o.forEach(function(l){return r.appendChild(l)}),{oldTags:a,newTags:o}},iy=function(t){return Object.keys(t).reduce(function(n,r){var i=typeof t[r]<"u"?r+'="'+t[r]+'"':""+r;return n?n+" "+i:i},"")},Ak=function(t,n,r,i){var a=iy(r),o=ry(n);return a?"<"+t+" "+Gt+'="true" '+a+">"+ld(o,i)+"</"+t+">":"<"+t+" "+Gt+'="true">'+ld(o,i)+"</"+t+">"},Mk=function(t,n,r){return n.reduce(function(i,a){var o=Object.keys(a).filter(function(u){return!(u===Se.INNER_HTML||u===Se.CSS_TEXT)}).reduce(function(u,d){var p=typeof a[d]>"u"?d:d+'="'+ld(a[d],r)+'"';return u?u+" "+p:p},""),s=a.innerHTML||a.cssText||"",l=gk.indexOf(t)===-1;return i+"<"+t+" "+Gt+'="true" '+o+(l?"/>":">"+s+"</"+t+">")},"")},ay=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Object.keys(t).reduce(function(r,i){return r[Xs[i]||i]=t[i],r},n)},Lk=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Object.keys(t).reduce(function(r,i){return r[mk[i]||i]=t[i],r},n)},Ok=function(t,n,r){var i,a=(i={key:n},i[Gt]=!0,i),o=ay(r,a);return[J.createElement(X.TITLE,o,n)]},Ik=function(t,n){return n.map(function(r,i){var a,o=(a={key:i},a[Gt]=!0,a);return Object.keys(r).forEach(function(s){var l=Xs[s]||s;if(l===Se.INNER_HTML||l===Se.CSS_TEXT){var u=r.innerHTML||r.cssText;o.dangerouslySetInnerHTML={__html:u}}else o[l]=r[s]}),J.createElement(t,o)})},vn=function(t,n,r){switch(t){case X.TITLE:return{toComponent:function(){return Ok(t,n.title,n.titleAttributes)},toString:function(){return Ak(t,n.title,n.titleAttributes,r)}};case Ir.BODY:case Ir.HTML:return{toComponent:function(){return ay(n)},toString:function(){return iy(n)}};default:return{toComponent:function(){return Ik(t,n)},toString:function(){return Mk(t,n,r)}}}},oy=function(t){var n=t.baseTag,r=t.bodyAttributes,i=t.encode,a=t.htmlAttributes,o=t.linkTags,s=t.metaTags,l=t.noscriptTags,u=t.scriptTags,d=t.styleTags,p=t.title,f=p===void 0?"":p,g=t.titleAttributes;return{base:vn(X.BASE,n,i),bodyAttributes:vn(Ir.BODY,r,i),htmlAttributes:vn(Ir.HTML,a,i),link:vn(X.LINK,o,i),meta:vn(X.META,s,i),noscript:vn(X.NOSCRIPT,l,i),script:vn(X.SCRIPT,u,i),style:vn(X.STYLE,d,i),title:vn(X.TITLE,{title:f,titleAttributes:g},i)}},Rk=function(t){var n,r;return r=n=function(i){wk(a,i);function a(){return xk(this,a),bk(this,i.apply(this,arguments))}return a.prototype.shouldComponentUpdate=function(s){return!lk(this.props,s)},a.prototype.mapNestedChildrenToProps=function(s,l){if(!l)return null;switch(s.type){case X.SCRIPT:case X.NOSCRIPT:return{innerHTML:l};case X.STYLE:return{cssText:l}}throw new Error("<"+s.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},a.prototype.flattenArrayTypeChildren=function(s){var l,u=s.child,d=s.arrayTypeChildren,p=s.newChildProps,f=s.nestedChildren;return ht({},d,(l={},l[u.type]=[].concat(d[u.type]||[],[ht({},p,this.mapNestedChildrenToProps(u,f))]),l))},a.prototype.mapObjectTypeChildren=function(s){var l,u,d=s.child,p=s.newProps,f=s.newChildProps,g=s.nestedChildren;switch(d.type){case X.TITLE:return ht({},p,(l={},l[d.type]=g,l.titleAttributes=ht({},f),l));case X.BODY:return ht({},p,{bodyAttributes:ht({},f)});case X.HTML:return ht({},p,{htmlAttributes:ht({},f)})}return ht({},p,(u={},u[d.type]=ht({},f),u))},a.prototype.mapArrayTypeChildrenToProps=function(s,l){var u=ht({},l);return Object.keys(s).forEach(function(d){var p;u=ht({},u,(p={},p[d]=s[d],p))}),u},a.prototype.warnOnInvalidChildren=function(s,l){return!0},a.prototype.mapChildrenToProps=function(s,l){var u=this,d={};return J.Children.forEach(s,function(p){if(!(!p||!p.props)){var f=p.props,g=f.children,x=h0(f,["children"]),y=Lk(x);switch(u.warnOnInvalidChildren(p,g),p.type){case X.LINK:case X.META:case X.NOSCRIPT:case X.SCRIPT:case X.STYLE:d=u.flattenArrayTypeChildren({child:p,arrayTypeChildren:d,newChildProps:y,nestedChildren:g});break;default:l=u.mapObjectTypeChildren({child:p,newProps:l,newChildProps:y,nestedChildren:g});break}}}),l=this.mapArrayTypeChildrenToProps(d,l),l},a.prototype.render=function(){var s=this.props,l=s.children,u=h0(s,["children"]),d=ht({},u);return l&&(d=this.mapChildrenToProps(l,d)),J.createElement(t,d)},yk(a,null,[{key:"canUseDOM",set:function(s){t.canUseDOM=s}}]),a}(J.Component),n.propTypes={base:be.object,bodyAttributes:be.object,children:be.oneOfType([be.arrayOf(be.node),be.node]),defaultTitle:be.string,defer:be.bool,encodeSpecialCharacters:be.bool,htmlAttributes:be.object,link:be.arrayOf(be.object),meta:be.arrayOf(be.object),noscript:be.arrayOf(be.object),onChangeClientState:be.func,script:be.arrayOf(be.object),style:be.arrayOf(be.object),title:be.string,titleAttributes:be.object,titleTemplate:be.string},n.defaultProps={defer:!0,encodeSpecialCharacters:!0},n.peek=t.peek,n.rewind=function(){var i=t.rewind();return i||(i=oy({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),i},r},Dk=function(){return null},Vk=nk(_k,Pk,oy)(Dk),Rn=Rk(Vk);Rn.renderStatic=Rn.rewind;var ot=function(){return ot=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},ot.apply(this,arguments)};function Di(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,a;r<i;r++)(a||!(r in t))&&(a||(a=Array.prototype.slice.call(t,0,r)),a[r]=t[r]);return e.concat(a||Array.prototype.slice.call(t))}var ve="-ms-",La="-moz-",ue="-webkit-",sy="comm",Ll="rule",rf="decl",Nk="@import",ly="@keyframes",Fk="@layer",cy=Math.abs,af=String.fromCharCode,dd=Object.assign;function $k(e,t){return Ge(e,0)^45?(((t<<2^Ge(e,0))<<2^Ge(e,1))<<2^Ge(e,2))<<2^Ge(e,3):0}function uy(e){return e.trim()}function bn(e,t){return(e=t.exec(e))?e[0]:e}function ne(e,t,n){return e.replace(t,n)}function cs(e,t,n){return e.indexOf(t,n)}function Ge(e,t){return e.charCodeAt(t)|0}function Vi(e,t,n){return e.slice(t,n)}function on(e){return e.length}function dy(e){return e.length}function xa(e,t){return t.push(e),e}function Bk(e,t){return e.map(t).join("")}function v0(e,t){return e.filter(function(n){return!bn(n,t)})}var Ol=1,Ni=1,py=0,Nt=0,Ve=0,Yi="";function Il(e,t,n,r,i,a,o,s){return{value:e,root:t,parent:n,type:r,props:i,children:a,line:Ol,column:Ni,length:o,return:"",siblings:s}}function Hn(e,t){return dd(Il("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function ei(e){for(;e.root;)e=Hn(e.root,{children:[e]});xa(e,e.siblings)}function qk(){return Ve}function Hk(){return Ve=Nt>0?Ge(Yi,--Nt):0,Ni--,Ve===10&&(Ni=1,Ol--),Ve}function Xt(){return Ve=Nt<py?Ge(Yi,Nt++):0,Ni++,Ve===10&&(Ni=1,Ol++),Ve}function Rr(){return Ge(Yi,Nt)}function us(){return Nt}function Rl(e,t){return Vi(Yi,e,t)}function pd(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Uk(e){return Ol=Ni=1,py=on(Yi=e),Nt=0,[]}function Wk(e){return Yi="",e}function Dc(e){return uy(Rl(Nt-1,fd(e===91?e+2:e===40?e+1:e)))}function Gk(e){for(;(Ve=Rr())&&Ve<33;)Xt();return pd(e)>2||pd(Ve)>3?"":" "}function Yk(e,t){for(;--t&&Xt()&&!(Ve<48||Ve>102||Ve>57&&Ve<65||Ve>70&&Ve<97););return Rl(e,us()+(t<6&&Rr()==32&&Xt()==32))}function fd(e){for(;Xt();)switch(Ve){case e:return Nt;case 34:case 39:e!==34&&e!==39&&fd(Ve);break;case 40:e===41&&fd(e);break;case 92:Xt();break}return Nt}function Kk(e,t){for(;Xt()&&e+Ve!==57;)if(e+Ve===84&&Rr()===47)break;return"/*"+Rl(t,Nt-1)+"*"+af(e===47?e:Xt())}function Xk(e){for(;!pd(Rr());)Xt();return Rl(e,Nt)}function Qk(e){return Wk(ds("",null,null,null,[""],e=Uk(e),0,[0],e))}function ds(e,t,n,r,i,a,o,s,l){for(var u=0,d=0,p=o,f=0,g=0,x=0,y=1,b=1,v=1,h=0,m="",w=i,S=a,j=r,C=m;b;)switch(x=h,h=Xt()){case 40:if(x!=108&&Ge(C,p-1)==58){cs(C+=ne(Dc(h),"&","&\f"),"&\f",cy(u?s[u-1]:0))!=-1&&(v=-1);break}case 34:case 39:case 91:C+=Dc(h);break;case 9:case 10:case 13:case 32:C+=Gk(x);break;case 92:C+=Yk(us()-1,7);continue;case 47:switch(Rr()){case 42:case 47:xa(Zk(Kk(Xt(),us()),t,n,l),l);break;default:C+="/"}break;case 123*y:s[u++]=on(C)*v;case 125*y:case 59:case 0:switch(h){case 0:case 125:b=0;case 59+d:v==-1&&(C=ne(C,/\f/g,"")),g>0&&on(C)-p&&xa(g>32?y0(C+";",r,n,p-1,l):y0(ne(C," ","")+";",r,n,p-2,l),l);break;case 59:C+=";";default:if(xa(j=x0(C,t,n,u,d,i,s,m,w=[],S=[],p,a),a),h===123)if(d===0)ds(C,t,j,j,w,a,p,s,S);else switch(f===99&&Ge(C,3)===110?100:f){case 100:case 108:case 109:case 115:ds(e,j,j,r&&xa(x0(e,j,j,0,0,i,s,m,i,w=[],p,S),S),i,S,p,s,r?w:S);break;default:ds(C,j,j,j,[""],S,0,s,S)}}u=d=g=0,y=v=1,m=C="",p=o;break;case 58:p=1+on(C),g=x;default:if(y<1){if(h==123)--y;else if(h==125&&y++==0&&Hk()==125)continue}switch(C+=af(h),h*y){case 38:v=d>0?1:(C+="\f",-1);break;case 44:s[u++]=(on(C)-1)*v,v=1;break;case 64:Rr()===45&&(C+=Dc(Xt())),f=Rr(),d=p=on(m=C+=Xk(us())),h++;break;case 45:x===45&&on(C)==2&&(y=0)}}return a}function x0(e,t,n,r,i,a,o,s,l,u,d,p){for(var f=i-1,g=i===0?a:[""],x=dy(g),y=0,b=0,v=0;y<r;++y)for(var h=0,m=Vi(e,f+1,f=cy(b=o[y])),w=e;h<x;++h)(w=uy(b>0?g[h]+" "+m:ne(m,/&\f/g,g[h])))&&(l[v++]=w);return Il(e,t,n,i===0?Ll:s,l,u,d,p)}function Zk(e,t,n,r){return Il(e,t,n,sy,af(qk()),Vi(e,2,-2),0,r)}function y0(e,t,n,r,i){return Il(e,t,n,rf,Vi(e,0,r),Vi(e,r+1,-1),r,i)}function fy(e,t,n){switch($k(e,t)){case 5103:return ue+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ue+e+e;case 4789:return La+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ue+e+La+e+ve+e+e;case 5936:switch(Ge(e,t+11)){case 114:return ue+e+ve+ne(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ue+e+ve+ne(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ue+e+ve+ne(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return ue+e+ve+e+e;case 6165:return ue+e+ve+"flex-"+e+e;case 5187:return ue+e+ne(e,/(\w+).+(:[^]+)/,ue+"box-$1$2"+ve+"flex-$1$2")+e;case 5443:return ue+e+ve+"flex-item-"+ne(e,/flex-|-self/g,"")+(bn(e,/flex-|baseline/)?"":ve+"grid-row-"+ne(e,/flex-|-self/g,""))+e;case 4675:return ue+e+ve+"flex-line-pack"+ne(e,/align-content|flex-|-self/g,"")+e;case 5548:return ue+e+ve+ne(e,"shrink","negative")+e;case 5292:return ue+e+ve+ne(e,"basis","preferred-size")+e;case 6060:return ue+"box-"+ne(e,"-grow","")+ue+e+ve+ne(e,"grow","positive")+e;case 4554:return ue+ne(e,/([^-])(transform)/g,"$1"+ue+"$2")+e;case 6187:return ne(ne(ne(e,/(zoom-|grab)/,ue+"$1"),/(image-set)/,ue+"$1"),e,"")+e;case 5495:case 3959:return ne(e,/(image-set\([^]*)/,ue+"$1$`$1");case 4968:return ne(ne(e,/(.+:)(flex-)?(.*)/,ue+"box-pack:$3"+ve+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ue+e+e;case 4200:if(!bn(e,/flex-|baseline/))return ve+"grid-column-align"+Vi(e,t)+e;break;case 2592:case 3360:return ve+ne(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,bn(r.props,/grid-\w+-end/)})?~cs(e+(n=n[t].value),"span",0)?e:ve+ne(e,"-start","")+e+ve+"grid-row-span:"+(~cs(n,"span",0)?bn(n,/\d+/):+bn(n,/\d+/)-+bn(e,/\d+/))+";":ve+ne(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return bn(r.props,/grid-\w+-start/)})?e:ve+ne(ne(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return ne(e,/(.+)-inline(.+)/,ue+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(on(e)-1-t>6)switch(Ge(e,t+1)){case 109:if(Ge(e,t+4)!==45)break;case 102:return ne(e,/(.+:)(.+)-([^]+)/,"$1"+ue+"$2-$3$1"+La+(Ge(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~cs(e,"stretch",0)?fy(ne(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return ne(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,a,o,s,l,u){return ve+i+":"+a+u+(o?ve+i+"-span:"+(s?l:+l-+a)+u:"")+e});case 4949:if(Ge(e,t+6)===121)return ne(e,":",":"+ue)+e;break;case 6444:switch(Ge(e,Ge(e,14)===45?18:11)){case 120:return ne(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ue+(Ge(e,14)===45?"inline-":"")+"box$3$1"+ue+"$2$3$1"+ve+"$2box$3")+e;case 100:return ne(e,":",":"+ve)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ne(e,"scroll-","scroll-snap-")+e}return e}function Qs(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Jk(e,t,n,r){switch(e.type){case Fk:if(e.children.length)break;case Nk:case rf:return e.return=e.return||e.value;case sy:return"";case ly:return e.return=e.value+"{"+Qs(e.children,r)+"}";case Ll:if(!on(e.value=e.props.join(",")))return""}return on(n=Qs(e.children,r))?e.return=e.value+"{"+n+"}":""}function ej(e){var t=dy(e);return function(n,r,i,a){for(var o="",s=0;s<t;s++)o+=e[s](n,r,i,a)||"";return o}}function tj(e){return function(t){t.root||(t=t.return)&&e(t)}}function nj(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case rf:e.return=fy(e.value,e.length,n);return;case ly:return Qs([Hn(e,{value:ne(e.value,"@","@"+ue)})],r);case Ll:if(e.length)return Bk(n=e.props,function(i){switch(bn(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":ei(Hn(e,{props:[ne(i,/:(read-\w+)/,":"+La+"$1")]})),ei(Hn(e,{props:[i]})),dd(e,{props:v0(n,r)});break;case"::placeholder":ei(Hn(e,{props:[ne(i,/:(plac\w+)/,":"+ue+"input-$1")]})),ei(Hn(e,{props:[ne(i,/:(plac\w+)/,":"+La+"$1")]})),ei(Hn(e,{props:[ne(i,/:(plac\w+)/,ve+"input-$1")]})),ei(Hn(e,{props:[i]})),dd(e,{props:v0(n,r)});break}return""})}}var rj={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},bt={},Fi=typeof process<"u"&&bt!==void 0&&(bt.REACT_APP_SC_ATTR||bt.SC_ATTR)||"data-styled",hy="active",my="data-styled-version",Dl="6.1.13",of=`/*!sc*/
`,Zs=typeof window<"u"&&"HTMLElement"in window,ij=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&bt!==void 0&&bt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&bt.REACT_APP_SC_DISABLE_SPEEDY!==""?bt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&bt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&bt!==void 0&&bt.SC_DISABLE_SPEEDY!==void 0&&bt.SC_DISABLE_SPEEDY!==""&&bt.SC_DISABLE_SPEEDY!=="false"&&bt.SC_DISABLE_SPEEDY),aj={},Vl=Object.freeze([]),$i=Object.freeze({});function gy(e,t,n){return n===void 0&&(n=$i),e.theme!==n.theme&&e.theme||t||n.theme}var vy=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),oj=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,sj=/(^-|-$)/g;function w0(e){return e.replace(oj,"-").replace(sj,"")}var lj=/(a)(d)/gi,Fo=52,b0=function(e){return String.fromCharCode(e+(e>25?39:97))};function hd(e){var t,n="";for(t=Math.abs(e);t>Fo;t=t/Fo|0)n=b0(t%Fo)+n;return(b0(t%Fo)+n).replace(lj,"$1-$2")}var Vc,xy=5381,xi=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},yy=function(e){return xi(xy,e)};function sf(e){return hd(yy(e)>>>0)}function cj(e){return e.displayName||e.name||"Component"}function Nc(e){return typeof e=="string"&&!0}var wy=typeof Symbol=="function"&&Symbol.for,by=wy?Symbol.for("react.memo"):60115,uj=wy?Symbol.for("react.forward_ref"):60112,dj={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},pj={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Sy={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},fj=((Vc={})[uj]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Vc[by]=Sy,Vc);function S0(e){return("type"in(t=e)&&t.type.$$typeof)===by?Sy:"$$typeof"in e?fj[e.$$typeof]:dj;var t}var hj=Object.defineProperty,mj=Object.getOwnPropertyNames,k0=Object.getOwnPropertySymbols,gj=Object.getOwnPropertyDescriptor,vj=Object.getPrototypeOf,j0=Object.prototype;function ky(e,t,n){if(typeof t!="string"){if(j0){var r=vj(t);r&&r!==j0&&ky(e,r,n)}var i=mj(t);k0&&(i=i.concat(k0(t)));for(var a=S0(e),o=S0(t),s=0;s<i.length;++s){var l=i[s];if(!(l in pj||n&&n[l]||o&&l in o||a&&l in a)){var u=gj(t,l);try{hj(e,l,u)}catch{}}}}return e}function Bi(e){return typeof e=="function"}function lf(e){return typeof e=="object"&&"styledComponentId"in e}function Ar(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Js(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function io(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function md(e,t,n){if(n===void 0&&(n=!1),!n&&!io(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=md(e[r],t[r]);else if(io(t))for(var r in t)e[r]=md(e[r],t[r]);return e}function cf(e,t){Object.defineProperty(e,"toString",{value:t})}function go(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var xj=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,a=i;t>=a;)if((a<<=1)<0)throw go(16,"".concat(t));this.groupSizes=new Uint32Array(a),this.groupSizes.set(r),this.length=a;for(var o=i;o<a;o++)this.groupSizes[o]=0}for(var s=this.indexOfGroup(t+1),l=(o=0,n.length);o<l;o++)this.tag.insertRule(s,n[o])&&(this.groupSizes[t]++,s++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var a=r;a<i;a++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),a=i+r,o=i;o<a;o++)n+="".concat(this.tag.getRule(o)).concat(of);return n},e}(),ps=new Map,el=new Map,fs=1,$o=function(e){if(ps.has(e))return ps.get(e);for(;el.has(fs);)fs++;var t=fs++;return ps.set(e,t),el.set(t,e),t},yj=function(e,t){fs=t+1,ps.set(e,t),el.set(t,e)},wj="style[".concat(Fi,"][").concat(my,'="').concat(Dl,'"]'),bj=new RegExp("^".concat(Fi,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Sj=function(e,t,n){for(var r,i=n.split(","),a=0,o=i.length;a<o;a++)(r=i[a])&&e.registerName(t,r)},kj=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(of),i=[],a=0,o=r.length;a<o;a++){var s=r[a].trim();if(s){var l=s.match(bj);if(l){var u=0|parseInt(l[1],10),d=l[2];u!==0&&(yj(d,u),Sj(e,d,l[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(s)}}},_0=function(e){for(var t=document.querySelectorAll(wj),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(Fi)!==hy&&(kj(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function jj(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var jy=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(s){var l=Array.from(s.querySelectorAll("style[".concat(Fi,"]")));return l[l.length-1]}(n),a=i!==void 0?i.nextSibling:null;r.setAttribute(Fi,hy),r.setAttribute(my,Dl);var o=jj();return o&&r.setAttribute("nonce",o),n.insertBefore(r,a),r},_j=function(){function e(t){this.element=jy(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,a=r.length;i<a;i++){var o=r[i];if(o.ownerNode===n)return o}throw go(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),Tj=function(){function e(t){this.element=jy(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),Cj=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),T0=Zs,Ej={isServer:!Zs,useCSSOMInjection:!ij},tl=function(){function e(t,n,r){t===void 0&&(t=$i),n===void 0&&(n={});var i=this;this.options=ot(ot({},Ej),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Zs&&T0&&(T0=!1,_0(this)),cf(this,function(){return function(a){for(var o=a.getTag(),s=o.length,l="",u=function(p){var f=function(v){return el.get(v)}(p);if(f===void 0)return"continue";var g=a.names.get(f),x=o.getGroup(p);if(g===void 0||!g.size||x.length===0)return"continue";var y="".concat(Fi,".g").concat(p,'[id="').concat(f,'"]'),b="";g!==void 0&&g.forEach(function(v){v.length>0&&(b+="".concat(v,","))}),l+="".concat(x).concat(y,'{content:"').concat(b,'"}').concat(of)},d=0;d<s;d++)u(d);return l}(i)})}return e.registerId=function(t){return $o(t)},e.prototype.rehydrate=function(){!this.server&&Zs&&_0(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(ot(ot({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new Cj(i):r?new _j(i):new Tj(i)}(this.options),new xj(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if($o(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules($o(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup($o(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Pj=/&/g,zj=/^\s*\/\/.*$/gm;function _y(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=_y(n.children,t)),n})}function Aj(e){var t,n,r,i=$i,a=i.options,o=a===void 0?$i:a,s=i.plugins,l=s===void 0?Vl:s,u=function(f,g,x){return x.startsWith(n)&&x.endsWith(n)&&x.replaceAll(n,"").length>0?".".concat(t):f},d=l.slice();d.push(function(f){f.type===Ll&&f.value.includes("&")&&(f.props[0]=f.props[0].replace(Pj,n).replace(r,u))}),o.prefix&&d.push(nj),d.push(Jk);var p=function(f,g,x,y){g===void 0&&(g=""),x===void 0&&(x=""),y===void 0&&(y="&"),t=y,n=g,r=new RegExp("\\".concat(n,"\\b"),"g");var b=f.replace(zj,""),v=Qk(x||g?"".concat(x," ").concat(g," { ").concat(b," }"):b);o.namespace&&(v=_y(v,o.namespace));var h=[];return Qs(v,ej(d.concat(tj(function(m){return h.push(m)})))),h};return p.hash=l.length?l.reduce(function(f,g){return g.name||go(15),xi(f,g.name)},xy).toString():"",p}var Mj=new tl,gd=Aj(),Ty=J.createContext({shouldForwardProp:void 0,styleSheet:Mj,stylis:gd});Ty.Consumer;J.createContext(void 0);function vd(){return k.useContext(Ty)}var Cy=function(){function e(t,n){var r=this;this.inject=function(i,a){a===void 0&&(a=gd);var o=r.name+a.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,a(r.rules,o,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,cf(this,function(){throw go(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=gd),this.name+t.hash},e}(),Lj=function(e){return e>="A"&&e<="Z"};function C0(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;Lj(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Ey=function(e){return e==null||e===!1||e===""},Py=function(e){var t,n,r=[];for(var i in e){var a=e[i];e.hasOwnProperty(i)&&!Ey(a)&&(Array.isArray(a)&&a.isCss||Bi(a)?r.push("".concat(C0(i),":"),a,";"):io(a)?r.push.apply(r,Di(Di(["".concat(i," {")],Py(a),!1),["}"],!1)):r.push("".concat(C0(i),": ").concat((t=i,(n=a)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in rj||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function lr(e,t,n,r){if(Ey(e))return[];if(lf(e))return[".".concat(e.styledComponentId)];if(Bi(e)){if(!Bi(a=e)||a.prototype&&a.prototype.isReactComponent||!t)return[e];var i=e(t);return lr(i,t,n,r)}var a;return e instanceof Cy?n?(e.inject(n,r),[e.getName(r)]):[e]:io(e)?Py(e):Array.isArray(e)?Array.prototype.concat.apply(Vl,e.map(function(o){return lr(o,t,n,r)})):[e.toString()]}function zy(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Bi(n)&&!lf(n))return!1}return!0}var Oj=yy(Dl),Ij=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&zy(t),this.componentId=n,this.baseHash=xi(Oj,n),this.baseStyle=r,tl.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Ar(i,this.staticRulesId);else{var a=Js(lr(this.rules,t,n,r)),o=hd(xi(this.baseHash,a)>>>0);if(!n.hasNameForId(this.componentId,o)){var s=r(a,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,s)}i=Ar(i,o),this.staticRulesId=o}else{for(var l=xi(this.baseHash,r.hash),u="",d=0;d<this.rules.length;d++){var p=this.rules[d];if(typeof p=="string")u+=p;else if(p){var f=Js(lr(p,t,n,r));l=xi(l,f+d),u+=f}}if(u){var g=hd(l>>>0);n.hasNameForId(this.componentId,g)||n.insertRules(this.componentId,g,r(u,".".concat(g),void 0,this.componentId)),i=Ar(i,g)}}return i},e}(),uf=J.createContext(void 0);uf.Consumer;var Fc={};function Rj(e,t,n){var r=lf(e),i=e,a=!Nc(e),o=t.attrs,s=o===void 0?Vl:o,l=t.componentId,u=l===void 0?function(w,S){var j=typeof w!="string"?"sc":w0(w);Fc[j]=(Fc[j]||0)+1;var C="".concat(j,"-").concat(sf(Dl+j+Fc[j]));return S?"".concat(S,"-").concat(C):C}(t.displayName,t.parentComponentId):l,d=t.displayName,p=d===void 0?function(w){return Nc(w)?"styled.".concat(w):"Styled(".concat(cj(w),")")}(e):d,f=t.displayName&&t.componentId?"".concat(w0(t.displayName),"-").concat(t.componentId):t.componentId||u,g=r&&i.attrs?i.attrs.concat(s).filter(Boolean):s,x=t.shouldForwardProp;if(r&&i.shouldForwardProp){var y=i.shouldForwardProp;if(t.shouldForwardProp){var b=t.shouldForwardProp;x=function(w,S){return y(w,S)&&b(w,S)}}else x=y}var v=new Ij(n,f,r?i.componentStyle:void 0);function h(w,S){return function(j,C,T){var A=j.attrs,E=j.componentStyle,P=j.defaultProps,M=j.foldedComponentIds,R=j.styledComponentId,D=j.target,U=J.useContext(uf),Q=vd(),Y=j.shouldForwardProp||Q.shouldForwardProp,L=gy(C,U,P)||$i,N=function(_e,pe,ce){for(var z,O=ot(ot({},pe),{className:void 0,theme:ce}),V=0;V<_e.length;V+=1){var I=Bi(z=_e[V])?z(O):z;for(var G in I)O[G]=G==="className"?Ar(O[G],I[G]):G==="style"?ot(ot({},O[G]),I[G]):I[G]}return pe.className&&(O.className=Ar(O.className,pe.className)),O}(A,C,L),B=N.as||D,K={};for(var Z in N)N[Z]===void 0||Z[0]==="$"||Z==="as"||Z==="theme"&&N.theme===L||(Z==="forwardedAs"?K.as=N.forwardedAs:Y&&!Y(Z,B)||(K[Z]=N[Z]));var we=function(_e,pe){var ce=vd(),z=_e.generateAndInjectStyles(pe,ce.styleSheet,ce.stylis);return z}(E,N),he=Ar(M,R);return we&&(he+=" "+we),N.className&&(he+=" "+N.className),K[Nc(B)&&!vy.has(B)?"class":"className"]=he,K.ref=T,k.createElement(B,K)}(m,w,S)}h.displayName=p;var m=J.forwardRef(h);return m.attrs=g,m.componentStyle=v,m.displayName=p,m.shouldForwardProp=x,m.foldedComponentIds=r?Ar(i.foldedComponentIds,i.styledComponentId):"",m.styledComponentId=f,m.target=r?i.target:e,Object.defineProperty(m,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(w){this._foldedDefaultProps=r?function(S){for(var j=[],C=1;C<arguments.length;C++)j[C-1]=arguments[C];for(var T=0,A=j;T<A.length;T++)md(S,A[T],!0);return S}({},i.defaultProps,w):w}}),cf(m,function(){return".".concat(m.styledComponentId)}),a&&ky(m,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),m}function E0(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var P0=function(e){return Object.assign(e,{isCss:!0})};function df(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Bi(e)||io(e))return P0(lr(E0(Vl,Di([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?lr(r):P0(lr(E0(r,t)))}function xd(e,t,n){if(n===void 0&&(n=$i),!t)throw go(1,t);var r=function(i){for(var a=[],o=1;o<arguments.length;o++)a[o-1]=arguments[o];return e(t,n,df.apply(void 0,Di([i],a,!1)))};return r.attrs=function(i){return xd(e,t,ot(ot({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return xd(e,t,ot(ot({},n),i))},r}var Ay=function(e){return xd(Rj,e)},_=Ay;vy.forEach(function(e){_[e]=Ay(e)});var Dj=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=zy(t),tl.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var a=i(Js(lr(this.rules,n,r,i)),""),o=this.componentId+t;r.insertRules(o,o,a)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&tl.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,i)},e}();function Ki(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=df.apply(void 0,Di([e],t,!1)),i="sc-global-".concat(sf(JSON.stringify(r))),a=new Dj(r,i),o=function(l){var u=vd(),d=J.useContext(uf),p=J.useRef(u.styleSheet.allocateGSInstance(i)).current;return u.styleSheet.server&&s(p,l,u.styleSheet,d,u.stylis),J.useLayoutEffect(function(){if(!u.styleSheet.server)return s(p,l,u.styleSheet,d,u.stylis),function(){return a.removeStyles(p,u.styleSheet)}},[p,l,u.styleSheet,d,u.stylis]),null};function s(l,u,d,p,f){if(a.isStatic)a.renderStyles(l,aj,d,f);else{var g=ot(ot({},u),{theme:gy(u,p,o.defaultProps)});a.renderStyles(l,g,d,f)}}return J.memo(o)}function Vn(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Js(df.apply(void 0,Di([e],t,!1))),i=sf(r);return new Cy(i,r)}function z0(e){return e!==null&&typeof e=="object"&&"constructor"in e&&e.constructor===Object}function pf(e,t){e===void 0&&(e={}),t===void 0&&(t={}),Object.keys(t).forEach(n=>{typeof e[n]>"u"?e[n]=t[n]:z0(t[n])&&z0(e[n])&&Object.keys(t[n]).length>0&&pf(e[n],t[n])})}const My={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function An(){const e=typeof document<"u"?document:{};return pf(e,My),e}const Vj={document:My,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(e){return typeof setTimeout>"u"?(e(),null):setTimeout(e,0)},cancelAnimationFrame(e){typeof setTimeout>"u"||clearTimeout(e)}};function zt(){const e=typeof window<"u"?window:{};return pf(e,Vj),e}function Nj(e){return e===void 0&&(e=""),e.trim().split(" ").filter(t=>!!t.trim())}function Fj(e){const t=e;Object.keys(t).forEach(n=>{try{t[n]=null}catch{}try{delete t[n]}catch{}})}function yd(e,t){return t===void 0&&(t=0),setTimeout(e,t)}function nl(){return Date.now()}function $j(e){const t=zt();let n;return t.getComputedStyle&&(n=t.getComputedStyle(e,null)),!n&&e.currentStyle&&(n=e.currentStyle),n||(n=e.style),n}function Bj(e,t){t===void 0&&(t="x");const n=zt();let r,i,a;const o=$j(e);return n.WebKitCSSMatrix?(i=o.transform||o.webkitTransform,i.split(",").length>6&&(i=i.split(", ").map(s=>s.replace(",",".")).join(", ")),a=new n.WebKitCSSMatrix(i==="none"?"":i)):(a=o.MozTransform||o.OTransform||o.MsTransform||o.msTransform||o.transform||o.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),r=a.toString().split(",")),t==="x"&&(n.WebKitCSSMatrix?i=a.m41:r.length===16?i=parseFloat(r[12]):i=parseFloat(r[4])),t==="y"&&(n.WebKitCSSMatrix?i=a.m42:r.length===16?i=parseFloat(r[13]):i=parseFloat(r[5])),i||0}function Bo(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"}function qj(e){return typeof window<"u"&&typeof window.HTMLElement<"u"?e instanceof HTMLElement:e&&(e.nodeType===1||e.nodeType===11)}function kt(){const e=Object(arguments.length<=0?void 0:arguments[0]),t=["__proto__","constructor","prototype"];for(let n=1;n<arguments.length;n+=1){const r=n<0||arguments.length<=n?void 0:arguments[n];if(r!=null&&!qj(r)){const i=Object.keys(Object(r)).filter(a=>t.indexOf(a)<0);for(let a=0,o=i.length;a<o;a+=1){const s=i[a],l=Object.getOwnPropertyDescriptor(r,s);l!==void 0&&l.enumerable&&(Bo(e[s])&&Bo(r[s])?r[s].__swiper__?e[s]=r[s]:kt(e[s],r[s]):!Bo(e[s])&&Bo(r[s])?(e[s]={},r[s].__swiper__?e[s]=r[s]:kt(e[s],r[s])):e[s]=r[s])}}}return e}function qo(e,t,n){e.style.setProperty(t,n)}function Ly(e){let{swiper:t,targetPosition:n,side:r}=e;const i=zt(),a=-t.translate;let o=null,s;const l=t.params.speed;t.wrapperEl.style.scrollSnapType="none",i.cancelAnimationFrame(t.cssModeFrameID);const u=n>a?"next":"prev",d=(f,g)=>u==="next"&&f>=g||u==="prev"&&f<=g,p=()=>{s=new Date().getTime(),o===null&&(o=s);const f=Math.max(Math.min((s-o)/l,1),0),g=.5-Math.cos(f*Math.PI)/2;let x=a+g*(n-a);if(d(x,n)&&(x=n),t.wrapperEl.scrollTo({[r]:x}),d(x,n)){t.wrapperEl.style.overflow="hidden",t.wrapperEl.style.scrollSnapType="",setTimeout(()=>{t.wrapperEl.style.overflow="",t.wrapperEl.scrollTo({[r]:x})}),i.cancelAnimationFrame(t.cssModeFrameID);return}t.cssModeFrameID=i.requestAnimationFrame(p)};p()}function ff(e){return e.querySelector(".swiper-slide-transform")||e.shadowRoot&&e.shadowRoot.querySelector(".swiper-slide-transform")||e}function cn(e,t){t===void 0&&(t="");const n=[...e.children];return e instanceof HTMLSlotElement&&n.push(...e.assignedElements()),t?n.filter(r=>r.matches(t)):n}function Hj(e,t){const n=t.contains(e);return!n&&t instanceof HTMLSlotElement?[...t.assignedElements()].includes(e):n}function rl(e){try{console.warn(e);return}catch{}}function ao(e,t){t===void 0&&(t=[]);const n=document.createElement(e);return n.classList.add(...Array.isArray(t)?t:Nj(t)),n}function Uj(e,t){const n=[];for(;e.previousElementSibling;){const r=e.previousElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function Wj(e,t){const n=[];for(;e.nextElementSibling;){const r=e.nextElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function Zn(e,t){return zt().getComputedStyle(e,null).getPropertyValue(t)}function il(e){let t=e,n;if(t){for(n=0;(t=t.previousSibling)!==null;)t.nodeType===1&&(n+=1);return n}}function Oy(e,t){const n=[];let r=e.parentElement;for(;r;)t?r.matches(t)&&n.push(r):n.push(r),r=r.parentElement;return n}function wd(e,t,n){const r=zt();return e[t==="width"?"offsetWidth":"offsetHeight"]+parseFloat(r.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-right":"margin-top"))+parseFloat(r.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-left":"margin-bottom"))}function Ue(e){return(Array.isArray(e)?e:[e]).filter(t=>!!t)}function Gj(e){return t=>Math.abs(t)>0&&e.browser&&e.browser.need3dFix&&Math.abs(t)%90===0?t+.001:t}let $c;function Yj(){const e=zt(),t=An();return{smoothScroll:t.documentElement&&t.documentElement.style&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch)}}function Iy(){return $c||($c=Yj()),$c}let Bc;function Kj(e){let{userAgent:t}=e===void 0?{}:e;const n=Iy(),r=zt(),i=r.navigator.platform,a=t||r.navigator.userAgent,o={ios:!1,android:!1},s=r.screen.width,l=r.screen.height,u=a.match(/(Android);?[\s\/]+([\d.]+)?/);let d=a.match(/(iPad).*OS\s([\d_]+)/);const p=a.match(/(iPod)(.*OS\s([\d_]+))?/),f=!d&&a.match(/(iPhone\sOS|iOS)\s([\d_]+)/),g=i==="Win32";let x=i==="MacIntel";const y=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!d&&x&&n.touch&&y.indexOf(`${s}x${l}`)>=0&&(d=a.match(/(Version)\/([\d.]+)/),d||(d=[0,1,"13_0_0"]),x=!1),u&&!g&&(o.os="android",o.android=!0),(d||f||p)&&(o.os="ios",o.ios=!0),o}function Ry(e){return e===void 0&&(e={}),Bc||(Bc=Kj(e)),Bc}let qc;function Xj(){const e=zt(),t=Ry();let n=!1;function r(){const s=e.navigator.userAgent.toLowerCase();return s.indexOf("safari")>=0&&s.indexOf("chrome")<0&&s.indexOf("android")<0}if(r()){const s=String(e.navigator.userAgent);if(s.includes("Version/")){const[l,u]=s.split("Version/")[1].split(" ")[0].split(".").map(d=>Number(d));n=l<16||l===16&&u<2}}const i=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),a=r(),o=a||i&&t.ios;return{isSafari:n||a,needPerspectiveFix:n,need3dFix:o,isWebView:i}}function Qj(){return qc||(qc=Xj()),qc}function Zj(e){let{swiper:t,on:n,emit:r}=e;const i=zt();let a=null,o=null;const s=()=>{!t||t.destroyed||!t.initialized||(r("beforeResize"),r("resize"))},l=()=>{!t||t.destroyed||!t.initialized||(a=new ResizeObserver(p=>{o=i.requestAnimationFrame(()=>{const{width:f,height:g}=t;let x=f,y=g;p.forEach(b=>{let{contentBoxSize:v,contentRect:h,target:m}=b;m&&m!==t.el||(x=h?h.width:(v[0]||v).inlineSize,y=h?h.height:(v[0]||v).blockSize)}),(x!==f||y!==g)&&s()})}),a.observe(t.el))},u=()=>{o&&i.cancelAnimationFrame(o),a&&a.unobserve&&t.el&&(a.unobserve(t.el),a=null)},d=()=>{!t||t.destroyed||!t.initialized||r("orientationchange")};n("init",()=>{if(t.params.resizeObserver&&typeof i.ResizeObserver<"u"){l();return}i.addEventListener("resize",s),i.addEventListener("orientationchange",d)}),n("destroy",()=>{u(),i.removeEventListener("resize",s),i.removeEventListener("orientationchange",d)})}function Jj(e){let{swiper:t,extendParams:n,on:r,emit:i}=e;const a=[],o=zt(),s=function(d,p){p===void 0&&(p={});const f=o.MutationObserver||o.WebkitMutationObserver,g=new f(x=>{if(t.__preventObserver__)return;if(x.length===1){i("observerUpdate",x[0]);return}const y=function(){i("observerUpdate",x[0])};o.requestAnimationFrame?o.requestAnimationFrame(y):o.setTimeout(y,0)});g.observe(d,{attributes:typeof p.attributes>"u"?!0:p.attributes,childList:t.isElement||(typeof p.childList>"u"?!0:p).childList,characterData:typeof p.characterData>"u"?!0:p.characterData}),a.push(g)},l=()=>{if(t.params.observer){if(t.params.observeParents){const d=Oy(t.hostEl);for(let p=0;p<d.length;p+=1)s(d[p])}s(t.hostEl,{childList:t.params.observeSlideChildren}),s(t.wrapperEl,{attributes:!1})}},u=()=>{a.forEach(d=>{d.disconnect()}),a.splice(0,a.length)};n({observer:!1,observeParents:!1,observeSlideChildren:!1}),r("init",l),r("destroy",u)}var e8={on(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof t!="function")return r;const i=n?"unshift":"push";return e.split(" ").forEach(a=>{r.eventsListeners[a]||(r.eventsListeners[a]=[]),r.eventsListeners[a][i](t)}),r},once(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof t!="function")return r;function i(){r.off(e,i),i.__emitterProxy&&delete i.__emitterProxy;for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];t.apply(r,o)}return i.__emitterProxy=t,r.on(e,i,n)},onAny(e,t){const n=this;if(!n.eventsListeners||n.destroyed||typeof e!="function")return n;const r=t?"unshift":"push";return n.eventsAnyListeners.indexOf(e)<0&&n.eventsAnyListeners[r](e),n},offAny(e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsAnyListeners)return t;const n=t.eventsAnyListeners.indexOf(e);return n>=0&&t.eventsAnyListeners.splice(n,1),t},off(e,t){const n=this;return!n.eventsListeners||n.destroyed||!n.eventsListeners||e.split(" ").forEach(r=>{typeof t>"u"?n.eventsListeners[r]=[]:n.eventsListeners[r]&&n.eventsListeners[r].forEach((i,a)=>{(i===t||i.__emitterProxy&&i.__emitterProxy===t)&&n.eventsListeners[r].splice(a,1)})}),n},emit(){const e=this;if(!e.eventsListeners||e.destroyed||!e.eventsListeners)return e;let t,n,r;for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return typeof a[0]=="string"||Array.isArray(a[0])?(t=a[0],n=a.slice(1,a.length),r=e):(t=a[0].events,n=a[0].data,r=a[0].context||e),n.unshift(r),(Array.isArray(t)?t:t.split(" ")).forEach(l=>{e.eventsAnyListeners&&e.eventsAnyListeners.length&&e.eventsAnyListeners.forEach(u=>{u.apply(r,[l,...n])}),e.eventsListeners&&e.eventsListeners[l]&&e.eventsListeners[l].forEach(u=>{u.apply(r,n)})}),e}};function t8(){const e=this;let t,n;const r=e.el;typeof e.params.width<"u"&&e.params.width!==null?t=e.params.width:t=r.clientWidth,typeof e.params.height<"u"&&e.params.height!==null?n=e.params.height:n=r.clientHeight,!(t===0&&e.isHorizontal()||n===0&&e.isVertical())&&(t=t-parseInt(Zn(r,"padding-left")||0,10)-parseInt(Zn(r,"padding-right")||0,10),n=n-parseInt(Zn(r,"padding-top")||0,10)-parseInt(Zn(r,"padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(n)&&(n=0),Object.assign(e,{width:t,height:n,size:e.isHorizontal()?t:n}))}function n8(){const e=this;function t(E,P){return parseFloat(E.getPropertyValue(e.getDirectionLabel(P))||0)}const n=e.params,{wrapperEl:r,slidesEl:i,size:a,rtlTranslate:o,wrongRTL:s}=e,l=e.virtual&&n.virtual.enabled,u=l?e.virtual.slides.length:e.slides.length,d=cn(i,`.${e.params.slideClass}, swiper-slide`),p=l?e.virtual.slides.length:d.length;let f=[];const g=[],x=[];let y=n.slidesOffsetBefore;typeof y=="function"&&(y=n.slidesOffsetBefore.call(e));let b=n.slidesOffsetAfter;typeof b=="function"&&(b=n.slidesOffsetAfter.call(e));const v=e.snapGrid.length,h=e.slidesGrid.length;let m=n.spaceBetween,w=-y,S=0,j=0;if(typeof a>"u")return;typeof m=="string"&&m.indexOf("%")>=0?m=parseFloat(m.replace("%",""))/100*a:typeof m=="string"&&(m=parseFloat(m)),e.virtualSize=-m,d.forEach(E=>{o?E.style.marginLeft="":E.style.marginRight="",E.style.marginBottom="",E.style.marginTop=""}),n.centeredSlides&&n.cssMode&&(qo(r,"--swiper-centered-offset-before",""),qo(r,"--swiper-centered-offset-after",""));const C=n.grid&&n.grid.rows>1&&e.grid;C?e.grid.initSlides(d):e.grid&&e.grid.unsetSlides();let T;const A=n.slidesPerView==="auto"&&n.breakpoints&&Object.keys(n.breakpoints).filter(E=>typeof n.breakpoints[E].slidesPerView<"u").length>0;for(let E=0;E<p;E+=1){T=0;let P;if(d[E]&&(P=d[E]),C&&e.grid.updateSlide(E,P,d),!(d[E]&&Zn(P,"display")==="none")){if(n.slidesPerView==="auto"){A&&(d[E].style[e.getDirectionLabel("width")]="");const M=getComputedStyle(P),R=P.style.transform,D=P.style.webkitTransform;if(R&&(P.style.transform="none"),D&&(P.style.webkitTransform="none"),n.roundLengths)T=e.isHorizontal()?wd(P,"width"):wd(P,"height");else{const U=t(M,"width"),Q=t(M,"padding-left"),Y=t(M,"padding-right"),L=t(M,"margin-left"),N=t(M,"margin-right"),B=M.getPropertyValue("box-sizing");if(B&&B==="border-box")T=U+L+N;else{const{clientWidth:K,offsetWidth:Z}=P;T=U+Q+Y+L+N+(Z-K)}}R&&(P.style.transform=R),D&&(P.style.webkitTransform=D),n.roundLengths&&(T=Math.floor(T))}else T=(a-(n.slidesPerView-1)*m)/n.slidesPerView,n.roundLengths&&(T=Math.floor(T)),d[E]&&(d[E].style[e.getDirectionLabel("width")]=`${T}px`);d[E]&&(d[E].swiperSlideSize=T),x.push(T),n.centeredSlides?(w=w+T/2+S/2+m,S===0&&E!==0&&(w=w-a/2-m),E===0&&(w=w-a/2-m),Math.abs(w)<1/1e3&&(w=0),n.roundLengths&&(w=Math.floor(w)),j%n.slidesPerGroup===0&&f.push(w),g.push(w)):(n.roundLengths&&(w=Math.floor(w)),(j-Math.min(e.params.slidesPerGroupSkip,j))%e.params.slidesPerGroup===0&&f.push(w),g.push(w),w=w+T+m),e.virtualSize+=T+m,S=T,j+=1}}if(e.virtualSize=Math.max(e.virtualSize,a)+b,o&&s&&(n.effect==="slide"||n.effect==="coverflow")&&(r.style.width=`${e.virtualSize+m}px`),n.setWrapperSize&&(r.style[e.getDirectionLabel("width")]=`${e.virtualSize+m}px`),C&&e.grid.updateWrapperSize(T,f),!n.centeredSlides){const E=[];for(let P=0;P<f.length;P+=1){let M=f[P];n.roundLengths&&(M=Math.floor(M)),f[P]<=e.virtualSize-a&&E.push(M)}f=E,Math.floor(e.virtualSize-a)-Math.floor(f[f.length-1])>1&&f.push(e.virtualSize-a)}if(l&&n.loop){const E=x[0]+m;if(n.slidesPerGroup>1){const P=Math.ceil((e.virtual.slidesBefore+e.virtual.slidesAfter)/n.slidesPerGroup),M=E*n.slidesPerGroup;for(let R=0;R<P;R+=1)f.push(f[f.length-1]+M)}for(let P=0;P<e.virtual.slidesBefore+e.virtual.slidesAfter;P+=1)n.slidesPerGroup===1&&f.push(f[f.length-1]+E),g.push(g[g.length-1]+E),e.virtualSize+=E}if(f.length===0&&(f=[0]),m!==0){const E=e.isHorizontal()&&o?"marginLeft":e.getDirectionLabel("marginRight");d.filter((P,M)=>!n.cssMode||n.loop?!0:M!==d.length-1).forEach(P=>{P.style[E]=`${m}px`})}if(n.centeredSlides&&n.centeredSlidesBounds){let E=0;x.forEach(M=>{E+=M+(m||0)}),E-=m;const P=E>a?E-a:0;f=f.map(M=>M<=0?-y:M>P?P+b:M)}if(n.centerInsufficientSlides){let E=0;x.forEach(M=>{E+=M+(m||0)}),E-=m;const P=(n.slidesOffsetBefore||0)+(n.slidesOffsetAfter||0);if(E+P<a){const M=(a-E-P)/2;f.forEach((R,D)=>{f[D]=R-M}),g.forEach((R,D)=>{g[D]=R+M})}}if(Object.assign(e,{slides:d,snapGrid:f,slidesGrid:g,slidesSizesGrid:x}),n.centeredSlides&&n.cssMode&&!n.centeredSlidesBounds){qo(r,"--swiper-centered-offset-before",`${-f[0]}px`),qo(r,"--swiper-centered-offset-after",`${e.size/2-x[x.length-1]/2}px`);const E=-e.snapGrid[0],P=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map(M=>M+E),e.slidesGrid=e.slidesGrid.map(M=>M+P)}if(p!==u&&e.emit("slidesLengthChange"),f.length!==v&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),g.length!==h&&e.emit("slidesGridLengthChange"),n.watchSlidesProgress&&e.updateSlidesOffset(),e.emit("slidesUpdated"),!l&&!n.cssMode&&(n.effect==="slide"||n.effect==="fade")){const E=`${n.containerModifierClass}backface-hidden`,P=e.el.classList.contains(E);p<=n.maxBackfaceHiddenSlides?P||e.el.classList.add(E):P&&e.el.classList.remove(E)}}function r8(e){const t=this,n=[],r=t.virtual&&t.params.virtual.enabled;let i=0,a;typeof e=="number"?t.setTransition(e):e===!0&&t.setTransition(t.params.speed);const o=s=>r?t.slides[t.getSlideIndexByData(s)]:t.slides[s];if(t.params.slidesPerView!=="auto"&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||[]).forEach(s=>{n.push(s)});else for(a=0;a<Math.ceil(t.params.slidesPerView);a+=1){const s=t.activeIndex+a;if(s>t.slides.length&&!r)break;n.push(o(s))}else n.push(o(t.activeIndex));for(a=0;a<n.length;a+=1)if(typeof n[a]<"u"){const s=n[a].offsetHeight;i=s>i?s:i}(i||i===0)&&(t.wrapperEl.style.height=`${i}px`)}function i8(){const e=this,t=e.slides,n=e.isElement?e.isHorizontal()?e.wrapperEl.offsetLeft:e.wrapperEl.offsetTop:0;for(let r=0;r<t.length;r+=1)t[r].swiperSlideOffset=(e.isHorizontal()?t[r].offsetLeft:t[r].offsetTop)-n-e.cssOverflowAdjustment()}const A0=(e,t,n)=>{t&&!e.classList.contains(n)?e.classList.add(n):!t&&e.classList.contains(n)&&e.classList.remove(n)};function a8(e){e===void 0&&(e=this&&this.translate||0);const t=this,n=t.params,{slides:r,rtlTranslate:i,snapGrid:a}=t;if(r.length===0)return;typeof r[0].swiperSlideOffset>"u"&&t.updateSlidesOffset();let o=-e;i&&(o=e),t.visibleSlidesIndexes=[],t.visibleSlides=[];let s=n.spaceBetween;typeof s=="string"&&s.indexOf("%")>=0?s=parseFloat(s.replace("%",""))/100*t.size:typeof s=="string"&&(s=parseFloat(s));for(let l=0;l<r.length;l+=1){const u=r[l];let d=u.swiperSlideOffset;n.cssMode&&n.centeredSlides&&(d-=r[0].swiperSlideOffset);const p=(o+(n.centeredSlides?t.minTranslate():0)-d)/(u.swiperSlideSize+s),f=(o-a[0]+(n.centeredSlides?t.minTranslate():0)-d)/(u.swiperSlideSize+s),g=-(o-d),x=g+t.slidesSizesGrid[l],y=g>=0&&g<=t.size-t.slidesSizesGrid[l],b=g>=0&&g<t.size-1||x>1&&x<=t.size||g<=0&&x>=t.size;b&&(t.visibleSlides.push(u),t.visibleSlidesIndexes.push(l)),A0(u,b,n.slideVisibleClass),A0(u,y,n.slideFullyVisibleClass),u.progress=i?-p:p,u.originalProgress=i?-f:f}}function o8(e){const t=this;if(typeof e>"u"){const d=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*d||0}const n=t.params,r=t.maxTranslate()-t.minTranslate();let{progress:i,isBeginning:a,isEnd:o,progressLoop:s}=t;const l=a,u=o;if(r===0)i=0,a=!0,o=!0;else{i=(e-t.minTranslate())/r;const d=Math.abs(e-t.minTranslate())<1,p=Math.abs(e-t.maxTranslate())<1;a=d||i<=0,o=p||i>=1,d&&(i=0),p&&(i=1)}if(n.loop){const d=t.getSlideIndexByData(0),p=t.getSlideIndexByData(t.slides.length-1),f=t.slidesGrid[d],g=t.slidesGrid[p],x=t.slidesGrid[t.slidesGrid.length-1],y=Math.abs(e);y>=f?s=(y-f)/x:s=(y+x-g)/x,s>1&&(s-=1)}Object.assign(t,{progress:i,progressLoop:s,isBeginning:a,isEnd:o}),(n.watchSlidesProgress||n.centeredSlides&&n.autoHeight)&&t.updateSlidesProgress(e),a&&!l&&t.emit("reachBeginning toEdge"),o&&!u&&t.emit("reachEnd toEdge"),(l&&!a||u&&!o)&&t.emit("fromEdge"),t.emit("progress",i)}const Hc=(e,t,n)=>{t&&!e.classList.contains(n)?e.classList.add(n):!t&&e.classList.contains(n)&&e.classList.remove(n)};function s8(){const e=this,{slides:t,params:n,slidesEl:r,activeIndex:i}=e,a=e.virtual&&n.virtual.enabled,o=e.grid&&n.grid&&n.grid.rows>1,s=p=>cn(r,`.${n.slideClass}${p}, swiper-slide${p}`)[0];let l,u,d;if(a)if(n.loop){let p=i-e.virtual.slidesBefore;p<0&&(p=e.virtual.slides.length+p),p>=e.virtual.slides.length&&(p-=e.virtual.slides.length),l=s(`[data-swiper-slide-index="${p}"]`)}else l=s(`[data-swiper-slide-index="${i}"]`);else o?(l=t.filter(p=>p.column===i)[0],d=t.filter(p=>p.column===i+1)[0],u=t.filter(p=>p.column===i-1)[0]):l=t[i];l&&(o||(d=Wj(l,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!d&&(d=t[0]),u=Uj(l,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!u===0&&(u=t[t.length-1]))),t.forEach(p=>{Hc(p,p===l,n.slideActiveClass),Hc(p,p===d,n.slideNextClass),Hc(p,p===u,n.slidePrevClass)}),e.emitSlidesClasses()}const hs=(e,t)=>{if(!e||e.destroyed||!e.params)return;const n=()=>e.isElement?"swiper-slide":`.${e.params.slideClass}`,r=t.closest(n());if(r){let i=r.querySelector(`.${e.params.lazyPreloaderClass}`);!i&&e.isElement&&(r.shadowRoot?i=r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{r.shadowRoot&&(i=r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`),i&&i.remove())})),i&&i.remove()}},Uc=(e,t)=>{if(!e.slides[t])return;const n=e.slides[t].querySelector('[loading="lazy"]');n&&n.removeAttribute("loading")},bd=e=>{if(!e||e.destroyed||!e.params)return;let t=e.params.lazyPreloadPrevNext;const n=e.slides.length;if(!n||!t||t<0)return;t=Math.min(t,n);const r=e.params.slidesPerView==="auto"?e.slidesPerViewDynamic():Math.ceil(e.params.slidesPerView),i=e.activeIndex;if(e.params.grid&&e.params.grid.rows>1){const o=i,s=[o-t];s.push(...Array.from({length:t}).map((l,u)=>o+r+u)),e.slides.forEach((l,u)=>{s.includes(l.column)&&Uc(e,u)});return}const a=i+r-1;if(e.params.rewind||e.params.loop)for(let o=i-t;o<=a+t;o+=1){const s=(o%n+n)%n;(s<i||s>a)&&Uc(e,s)}else for(let o=Math.max(i-t,0);o<=Math.min(a+t,n-1);o+=1)o!==i&&(o>a||o<i)&&Uc(e,o)};function l8(e){const{slidesGrid:t,params:n}=e,r=e.rtlTranslate?e.translate:-e.translate;let i;for(let a=0;a<t.length;a+=1)typeof t[a+1]<"u"?r>=t[a]&&r<t[a+1]-(t[a+1]-t[a])/2?i=a:r>=t[a]&&r<t[a+1]&&(i=a+1):r>=t[a]&&(i=a);return n.normalizeSlideIndex&&(i<0||typeof i>"u")&&(i=0),i}function c8(e){const t=this,n=t.rtlTranslate?t.translate:-t.translate,{snapGrid:r,params:i,activeIndex:a,realIndex:o,snapIndex:s}=t;let l=e,u;const d=g=>{let x=g-t.virtual.slidesBefore;return x<0&&(x=t.virtual.slides.length+x),x>=t.virtual.slides.length&&(x-=t.virtual.slides.length),x};if(typeof l>"u"&&(l=l8(t)),r.indexOf(n)>=0)u=r.indexOf(n);else{const g=Math.min(i.slidesPerGroupSkip,l);u=g+Math.floor((l-g)/i.slidesPerGroup)}if(u>=r.length&&(u=r.length-1),l===a&&!t.params.loop){u!==s&&(t.snapIndex=u,t.emit("snapIndexChange"));return}if(l===a&&t.params.loop&&t.virtual&&t.params.virtual.enabled){t.realIndex=d(l);return}const p=t.grid&&i.grid&&i.grid.rows>1;let f;if(t.virtual&&i.virtual.enabled&&i.loop)f=d(l);else if(p){const g=t.slides.filter(y=>y.column===l)[0];let x=parseInt(g.getAttribute("data-swiper-slide-index"),10);Number.isNaN(x)&&(x=Math.max(t.slides.indexOf(g),0)),f=Math.floor(x/i.grid.rows)}else if(t.slides[l]){const g=t.slides[l].getAttribute("data-swiper-slide-index");g?f=parseInt(g,10):f=l}else f=l;Object.assign(t,{previousSnapIndex:s,snapIndex:u,previousRealIndex:o,realIndex:f,previousIndex:a,activeIndex:l}),t.initialized&&bd(t),t.emit("activeIndexChange"),t.emit("snapIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&(o!==f&&t.emit("realIndexChange"),t.emit("slideChange"))}function u8(e,t){const n=this,r=n.params;let i=e.closest(`.${r.slideClass}, swiper-slide`);!i&&n.isElement&&t&&t.length>1&&t.includes(e)&&[...t.slice(t.indexOf(e)+1,t.length)].forEach(s=>{!i&&s.matches&&s.matches(`.${r.slideClass}, swiper-slide`)&&(i=s)});let a=!1,o;if(i){for(let s=0;s<n.slides.length;s+=1)if(n.slides[s]===i){a=!0,o=s;break}}if(i&&a)n.clickedSlide=i,n.virtual&&n.params.virtual.enabled?n.clickedIndex=parseInt(i.getAttribute("data-swiper-slide-index"),10):n.clickedIndex=o;else{n.clickedSlide=void 0,n.clickedIndex=void 0;return}r.slideToClickedSlide&&n.clickedIndex!==void 0&&n.clickedIndex!==n.activeIndex&&n.slideToClickedSlide()}var d8={updateSize:t8,updateSlides:n8,updateAutoHeight:r8,updateSlidesOffset:i8,updateSlidesProgress:a8,updateProgress:o8,updateSlidesClasses:s8,updateActiveIndex:c8,updateClickedSlide:u8};function p8(e){e===void 0&&(e=this.isHorizontal()?"x":"y");const t=this,{params:n,rtlTranslate:r,translate:i,wrapperEl:a}=t;if(n.virtualTranslate)return r?-i:i;if(n.cssMode)return i;let o=Bj(a,e);return o+=t.cssOverflowAdjustment(),r&&(o=-o),o||0}function f8(e,t){const n=this,{rtlTranslate:r,params:i,wrapperEl:a,progress:o}=n;let s=0,l=0;const u=0;n.isHorizontal()?s=r?-e:e:l=e,i.roundLengths&&(s=Math.floor(s),l=Math.floor(l)),n.previousTranslate=n.translate,n.translate=n.isHorizontal()?s:l,i.cssMode?a[n.isHorizontal()?"scrollLeft":"scrollTop"]=n.isHorizontal()?-s:-l:i.virtualTranslate||(n.isHorizontal()?s-=n.cssOverflowAdjustment():l-=n.cssOverflowAdjustment(),a.style.transform=`translate3d(${s}px, ${l}px, ${u}px)`);let d;const p=n.maxTranslate()-n.minTranslate();p===0?d=0:d=(e-n.minTranslate())/p,d!==o&&n.updateProgress(e),n.emit("setTranslate",n.translate,t)}function h8(){return-this.snapGrid[0]}function m8(){return-this.snapGrid[this.snapGrid.length-1]}function g8(e,t,n,r,i){e===void 0&&(e=0),t===void 0&&(t=this.params.speed),n===void 0&&(n=!0),r===void 0&&(r=!0);const a=this,{params:o,wrapperEl:s}=a;if(a.animating&&o.preventInteractionOnTransition)return!1;const l=a.minTranslate(),u=a.maxTranslate();let d;if(r&&e>l?d=l:r&&e<u?d=u:d=e,a.updateProgress(d),o.cssMode){const p=a.isHorizontal();if(t===0)s[p?"scrollLeft":"scrollTop"]=-d;else{if(!a.support.smoothScroll)return Ly({swiper:a,targetPosition:-d,side:p?"left":"top"}),!0;s.scrollTo({[p?"left":"top"]:-d,behavior:"smooth"})}return!0}return t===0?(a.setTransition(0),a.setTranslate(d),n&&(a.emit("beforeTransitionStart",t,i),a.emit("transitionEnd"))):(a.setTransition(t),a.setTranslate(d),n&&(a.emit("beforeTransitionStart",t,i),a.emit("transitionStart")),a.animating||(a.animating=!0,a.onTranslateToWrapperTransitionEnd||(a.onTranslateToWrapperTransitionEnd=function(f){!a||a.destroyed||f.target===this&&(a.wrapperEl.removeEventListener("transitionend",a.onTranslateToWrapperTransitionEnd),a.onTranslateToWrapperTransitionEnd=null,delete a.onTranslateToWrapperTransitionEnd,a.animating=!1,n&&a.emit("transitionEnd"))}),a.wrapperEl.addEventListener("transitionend",a.onTranslateToWrapperTransitionEnd))),!0}var v8={getTranslate:p8,setTranslate:f8,minTranslate:h8,maxTranslate:m8,translateTo:g8};function x8(e,t){const n=this;n.params.cssMode||(n.wrapperEl.style.transitionDuration=`${e}ms`,n.wrapperEl.style.transitionDelay=e===0?"0ms":""),n.emit("setTransition",e,t)}function Dy(e){let{swiper:t,runCallbacks:n,direction:r,step:i}=e;const{activeIndex:a,previousIndex:o}=t;let s=r;if(s||(a>o?s="next":a<o?s="prev":s="reset"),t.emit(`transition${i}`),n&&a!==o){if(s==="reset"){t.emit(`slideResetTransition${i}`);return}t.emit(`slideChangeTransition${i}`),s==="next"?t.emit(`slideNextTransition${i}`):t.emit(`slidePrevTransition${i}`)}}function y8(e,t){e===void 0&&(e=!0);const n=this,{params:r}=n;r.cssMode||(r.autoHeight&&n.updateAutoHeight(),Dy({swiper:n,runCallbacks:e,direction:t,step:"Start"}))}function w8(e,t){e===void 0&&(e=!0);const n=this,{params:r}=n;n.animating=!1,!r.cssMode&&(n.setTransition(0),Dy({swiper:n,runCallbacks:e,direction:t,step:"End"}))}var b8={setTransition:x8,transitionStart:y8,transitionEnd:w8};function S8(e,t,n,r,i){e===void 0&&(e=0),n===void 0&&(n=!0),typeof e=="string"&&(e=parseInt(e,10));const a=this;let o=e;o<0&&(o=0);const{params:s,snapGrid:l,slidesGrid:u,previousIndex:d,activeIndex:p,rtlTranslate:f,wrapperEl:g,enabled:x}=a;if(!x&&!r&&!i||a.destroyed||a.animating&&s.preventInteractionOnTransition)return!1;typeof t>"u"&&(t=a.params.speed);const y=Math.min(a.params.slidesPerGroupSkip,o);let b=y+Math.floor((o-y)/a.params.slidesPerGroup);b>=l.length&&(b=l.length-1);const v=-l[b];if(s.normalizeSlideIndex)for(let S=0;S<u.length;S+=1){const j=-Math.floor(v*100),C=Math.floor(u[S]*100),T=Math.floor(u[S+1]*100);typeof u[S+1]<"u"?j>=C&&j<T-(T-C)/2?o=S:j>=C&&j<T&&(o=S+1):j>=C&&(o=S)}if(a.initialized&&o!==p&&(!a.allowSlideNext&&(f?v>a.translate&&v>a.minTranslate():v<a.translate&&v<a.minTranslate())||!a.allowSlidePrev&&v>a.translate&&v>a.maxTranslate()&&(p||0)!==o))return!1;o!==(d||0)&&n&&a.emit("beforeSlideChangeStart"),a.updateProgress(v);let h;o>p?h="next":o<p?h="prev":h="reset";const m=a.virtual&&a.params.virtual.enabled;if(!(m&&i)&&(f&&-v===a.translate||!f&&v===a.translate))return a.updateActiveIndex(o),s.autoHeight&&a.updateAutoHeight(),a.updateSlidesClasses(),s.effect!=="slide"&&a.setTranslate(v),h!=="reset"&&(a.transitionStart(n,h),a.transitionEnd(n,h)),!1;if(s.cssMode){const S=a.isHorizontal(),j=f?v:-v;if(t===0)m&&(a.wrapperEl.style.scrollSnapType="none",a._immediateVirtual=!0),m&&!a._cssModeVirtualInitialSet&&a.params.initialSlide>0?(a._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{g[S?"scrollLeft":"scrollTop"]=j})):g[S?"scrollLeft":"scrollTop"]=j,m&&requestAnimationFrame(()=>{a.wrapperEl.style.scrollSnapType="",a._immediateVirtual=!1});else{if(!a.support.smoothScroll)return Ly({swiper:a,targetPosition:j,side:S?"left":"top"}),!0;g.scrollTo({[S?"left":"top"]:j,behavior:"smooth"})}return!0}return a.setTransition(t),a.setTranslate(v),a.updateActiveIndex(o),a.updateSlidesClasses(),a.emit("beforeTransitionStart",t,r),a.transitionStart(n,h),t===0?a.transitionEnd(n,h):a.animating||(a.animating=!0,a.onSlideToWrapperTransitionEnd||(a.onSlideToWrapperTransitionEnd=function(j){!a||a.destroyed||j.target===this&&(a.wrapperEl.removeEventListener("transitionend",a.onSlideToWrapperTransitionEnd),a.onSlideToWrapperTransitionEnd=null,delete a.onSlideToWrapperTransitionEnd,a.transitionEnd(n,h))}),a.wrapperEl.addEventListener("transitionend",a.onSlideToWrapperTransitionEnd)),!0}function k8(e,t,n,r){e===void 0&&(e=0),n===void 0&&(n=!0),typeof e=="string"&&(e=parseInt(e,10));const i=this;if(i.destroyed)return;typeof t>"u"&&(t=i.params.speed);const a=i.grid&&i.params.grid&&i.params.grid.rows>1;let o=e;if(i.params.loop)if(i.virtual&&i.params.virtual.enabled)o=o+i.virtual.slidesBefore;else{let s;if(a){const f=o*i.params.grid.rows;s=i.slides.filter(g=>g.getAttribute("data-swiper-slide-index")*1===f)[0].column}else s=i.getSlideIndexByData(o);const l=a?Math.ceil(i.slides.length/i.params.grid.rows):i.slides.length,{centeredSlides:u}=i.params;let d=i.params.slidesPerView;d==="auto"?d=i.slidesPerViewDynamic():(d=Math.ceil(parseFloat(i.params.slidesPerView,10)),u&&d%2===0&&(d=d+1));let p=l-s<d;if(u&&(p=p||s<Math.ceil(d/2)),r&&u&&i.params.slidesPerView!=="auto"&&!a&&(p=!1),p){const f=u?s<i.activeIndex?"prev":"next":s-i.activeIndex-1<i.params.slidesPerView?"next":"prev";i.loopFix({direction:f,slideTo:!0,activeSlideIndex:f==="next"?s+1:s-l+1,slideRealIndex:f==="next"?i.realIndex:void 0})}if(a){const f=o*i.params.grid.rows;o=i.slides.filter(g=>g.getAttribute("data-swiper-slide-index")*1===f)[0].column}else o=i.getSlideIndexByData(o)}return requestAnimationFrame(()=>{i.slideTo(o,t,n,r)}),i}function j8(e,t,n){t===void 0&&(t=!0);const r=this,{enabled:i,params:a,animating:o}=r;if(!i||r.destroyed)return r;typeof e>"u"&&(e=r.params.speed);let s=a.slidesPerGroup;a.slidesPerView==="auto"&&a.slidesPerGroup===1&&a.slidesPerGroupAuto&&(s=Math.max(r.slidesPerViewDynamic("current",!0),1));const l=r.activeIndex<a.slidesPerGroupSkip?1:s,u=r.virtual&&a.virtual.enabled;if(a.loop){if(o&&!u&&a.loopPreventsSliding)return!1;if(r.loopFix({direction:"next"}),r._clientLeft=r.wrapperEl.clientLeft,r.activeIndex===r.slides.length-1&&a.cssMode)return requestAnimationFrame(()=>{r.slideTo(r.activeIndex+l,e,t,n)}),!0}return a.rewind&&r.isEnd?r.slideTo(0,e,t,n):r.slideTo(r.activeIndex+l,e,t,n)}function _8(e,t,n){t===void 0&&(t=!0);const r=this,{params:i,snapGrid:a,slidesGrid:o,rtlTranslate:s,enabled:l,animating:u}=r;if(!l||r.destroyed)return r;typeof e>"u"&&(e=r.params.speed);const d=r.virtual&&i.virtual.enabled;if(i.loop){if(u&&!d&&i.loopPreventsSliding)return!1;r.loopFix({direction:"prev"}),r._clientLeft=r.wrapperEl.clientLeft}const p=s?r.translate:-r.translate;function f(v){return v<0?-Math.floor(Math.abs(v)):Math.floor(v)}const g=f(p),x=a.map(v=>f(v));let y=a[x.indexOf(g)-1];if(typeof y>"u"&&i.cssMode){let v;a.forEach((h,m)=>{g>=h&&(v=m)}),typeof v<"u"&&(y=a[v>0?v-1:v])}let b=0;if(typeof y<"u"&&(b=o.indexOf(y),b<0&&(b=r.activeIndex-1),i.slidesPerView==="auto"&&i.slidesPerGroup===1&&i.slidesPerGroupAuto&&(b=b-r.slidesPerViewDynamic("previous",!0)+1,b=Math.max(b,0))),i.rewind&&r.isBeginning){const v=r.params.virtual&&r.params.virtual.enabled&&r.virtual?r.virtual.slides.length-1:r.slides.length-1;return r.slideTo(v,e,t,n)}else if(i.loop&&r.activeIndex===0&&i.cssMode)return requestAnimationFrame(()=>{r.slideTo(b,e,t,n)}),!0;return r.slideTo(b,e,t,n)}function T8(e,t,n){t===void 0&&(t=!0);const r=this;if(!r.destroyed)return typeof e>"u"&&(e=r.params.speed),r.slideTo(r.activeIndex,e,t,n)}function C8(e,t,n,r){t===void 0&&(t=!0),r===void 0&&(r=.5);const i=this;if(i.destroyed)return;typeof e>"u"&&(e=i.params.speed);let a=i.activeIndex;const o=Math.min(i.params.slidesPerGroupSkip,a),s=o+Math.floor((a-o)/i.params.slidesPerGroup),l=i.rtlTranslate?i.translate:-i.translate;if(l>=i.snapGrid[s]){const u=i.snapGrid[s],d=i.snapGrid[s+1];l-u>(d-u)*r&&(a+=i.params.slidesPerGroup)}else{const u=i.snapGrid[s-1],d=i.snapGrid[s];l-u<=(d-u)*r&&(a-=i.params.slidesPerGroup)}return a=Math.max(a,0),a=Math.min(a,i.slidesGrid.length-1),i.slideTo(a,e,t,n)}function E8(){const e=this;if(e.destroyed)return;const{params:t,slidesEl:n}=e,r=t.slidesPerView==="auto"?e.slidesPerViewDynamic():t.slidesPerView;let i=e.clickedIndex,a;const o=e.isElement?"swiper-slide":`.${t.slideClass}`;if(t.loop){if(e.animating)return;a=parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"),10),t.centeredSlides?i<e.loopedSlides-r/2||i>e.slides.length-e.loopedSlides+r/2?(e.loopFix(),i=e.getSlideIndex(cn(n,`${o}[data-swiper-slide-index="${a}"]`)[0]),yd(()=>{e.slideTo(i)})):e.slideTo(i):i>e.slides.length-r?(e.loopFix(),i=e.getSlideIndex(cn(n,`${o}[data-swiper-slide-index="${a}"]`)[0]),yd(()=>{e.slideTo(i)})):e.slideTo(i)}else e.slideTo(i)}var P8={slideTo:S8,slideToLoop:k8,slideNext:j8,slidePrev:_8,slideReset:T8,slideToClosest:C8,slideToClickedSlide:E8};function z8(e){const t=this,{params:n,slidesEl:r}=t;if(!n.loop||t.virtual&&t.params.virtual.enabled)return;const i=()=>{cn(r,`.${n.slideClass}, swiper-slide`).forEach((p,f)=>{p.setAttribute("data-swiper-slide-index",f)})},a=t.grid&&n.grid&&n.grid.rows>1,o=n.slidesPerGroup*(a?n.grid.rows:1),s=t.slides.length%o!==0,l=a&&t.slides.length%n.grid.rows!==0,u=d=>{for(let p=0;p<d;p+=1){const f=t.isElement?ao("swiper-slide",[n.slideBlankClass]):ao("div",[n.slideClass,n.slideBlankClass]);t.slidesEl.append(f)}};if(s){if(n.loopAddBlankSlides){const d=o-t.slides.length%o;u(d),t.recalcSlides(),t.updateSlides()}else rl("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");i()}else if(l){if(n.loopAddBlankSlides){const d=n.grid.rows-t.slides.length%n.grid.rows;u(d),t.recalcSlides(),t.updateSlides()}else rl("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");i()}else i();t.loopFix({slideRealIndex:e,direction:n.centeredSlides?void 0:"next"})}function A8(e){let{slideRealIndex:t,slideTo:n=!0,direction:r,setTranslate:i,activeSlideIndex:a,byController:o,byMousewheel:s}=e===void 0?{}:e;const l=this;if(!l.params.loop)return;l.emit("beforeLoopFix");const{slides:u,allowSlidePrev:d,allowSlideNext:p,slidesEl:f,params:g}=l,{centeredSlides:x}=g;if(l.allowSlidePrev=!0,l.allowSlideNext=!0,l.virtual&&g.virtual.enabled){n&&(!g.centeredSlides&&l.snapIndex===0?l.slideTo(l.virtual.slides.length,0,!1,!0):g.centeredSlides&&l.snapIndex<g.slidesPerView?l.slideTo(l.virtual.slides.length+l.snapIndex,0,!1,!0):l.snapIndex===l.snapGrid.length-1&&l.slideTo(l.virtual.slidesBefore,0,!1,!0)),l.allowSlidePrev=d,l.allowSlideNext=p,l.emit("loopFix");return}let y=g.slidesPerView;y==="auto"?y=l.slidesPerViewDynamic():(y=Math.ceil(parseFloat(g.slidesPerView,10)),x&&y%2===0&&(y=y+1));const b=g.slidesPerGroupAuto?y:g.slidesPerGroup;let v=b;v%b!==0&&(v+=b-v%b),v+=g.loopAdditionalSlides,l.loopedSlides=v;const h=l.grid&&g.grid&&g.grid.rows>1;u.length<y+v?rl("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):h&&g.grid.fill==="row"&&rl("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const m=[],w=[];let S=l.activeIndex;typeof a>"u"?a=l.getSlideIndex(u.filter(R=>R.classList.contains(g.slideActiveClass))[0]):S=a;const j=r==="next"||!r,C=r==="prev"||!r;let T=0,A=0;const E=h?Math.ceil(u.length/g.grid.rows):u.length,M=(h?u[a].column:a)+(x&&typeof i>"u"?-y/2+.5:0);if(M<v){T=Math.max(v-M,b);for(let R=0;R<v-M;R+=1){const D=R-Math.floor(R/E)*E;if(h){const U=E-D-1;for(let Q=u.length-1;Q>=0;Q-=1)u[Q].column===U&&m.push(Q)}else m.push(E-D-1)}}else if(M+y>E-v){A=Math.max(M-(E-v*2),b);for(let R=0;R<A;R+=1){const D=R-Math.floor(R/E)*E;h?u.forEach((U,Q)=>{U.column===D&&w.push(Q)}):w.push(D)}}if(l.__preventObserver__=!0,requestAnimationFrame(()=>{l.__preventObserver__=!1}),C&&m.forEach(R=>{u[R].swiperLoopMoveDOM=!0,f.prepend(u[R]),u[R].swiperLoopMoveDOM=!1}),j&&w.forEach(R=>{u[R].swiperLoopMoveDOM=!0,f.append(u[R]),u[R].swiperLoopMoveDOM=!1}),l.recalcSlides(),g.slidesPerView==="auto"?l.updateSlides():h&&(m.length>0&&C||w.length>0&&j)&&l.slides.forEach((R,D)=>{l.grid.updateSlide(D,R,l.slides)}),g.watchSlidesProgress&&l.updateSlidesOffset(),n){if(m.length>0&&C){if(typeof t>"u"){const R=l.slidesGrid[S],U=l.slidesGrid[S+T]-R;s?l.setTranslate(l.translate-U):(l.slideTo(S+Math.ceil(T),0,!1,!0),i&&(l.touchEventsData.startTranslate=l.touchEventsData.startTranslate-U,l.touchEventsData.currentTranslate=l.touchEventsData.currentTranslate-U))}else if(i){const R=h?m.length/g.grid.rows:m.length;l.slideTo(l.activeIndex+R,0,!1,!0),l.touchEventsData.currentTranslate=l.translate}}else if(w.length>0&&j)if(typeof t>"u"){const R=l.slidesGrid[S],U=l.slidesGrid[S-A]-R;s?l.setTranslate(l.translate-U):(l.slideTo(S-A,0,!1,!0),i&&(l.touchEventsData.startTranslate=l.touchEventsData.startTranslate-U,l.touchEventsData.currentTranslate=l.touchEventsData.currentTranslate-U))}else{const R=h?w.length/g.grid.rows:w.length;l.slideTo(l.activeIndex-R,0,!1,!0)}}if(l.allowSlidePrev=d,l.allowSlideNext=p,l.controller&&l.controller.control&&!o){const R={slideRealIndex:t,direction:r,setTranslate:i,activeSlideIndex:a,byController:!0};Array.isArray(l.controller.control)?l.controller.control.forEach(D=>{!D.destroyed&&D.params.loop&&D.loopFix({...R,slideTo:D.params.slidesPerView===g.slidesPerView?n:!1})}):l.controller.control instanceof l.constructor&&l.controller.control.params.loop&&l.controller.control.loopFix({...R,slideTo:l.controller.control.params.slidesPerView===g.slidesPerView?n:!1})}l.emit("loopFix")}function M8(){const e=this,{params:t,slidesEl:n}=e;if(!t.loop||e.virtual&&e.params.virtual.enabled)return;e.recalcSlides();const r=[];e.slides.forEach(i=>{const a=typeof i.swiperSlideIndex>"u"?i.getAttribute("data-swiper-slide-index")*1:i.swiperSlideIndex;r[a]=i}),e.slides.forEach(i=>{i.removeAttribute("data-swiper-slide-index")}),r.forEach(i=>{n.append(i)}),e.recalcSlides(),e.slideTo(e.realIndex,0)}var L8={loopCreate:z8,loopFix:A8,loopDestroy:M8};function O8(e){const t=this;if(!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const n=t.params.touchEventsTarget==="container"?t.el:t.wrapperEl;t.isElement&&(t.__preventObserver__=!0),n.style.cursor="move",n.style.cursor=e?"grabbing":"grab",t.isElement&&requestAnimationFrame(()=>{t.__preventObserver__=!1})}function I8(){const e=this;e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.isElement&&(e.__preventObserver__=!0),e[e.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1}))}var R8={setGrabCursor:O8,unsetGrabCursor:I8};function D8(e,t){t===void 0&&(t=this);function n(r){if(!r||r===An()||r===zt())return null;r.assignedSlot&&(r=r.assignedSlot);const i=r.closest(e);return!i&&!r.getRootNode?null:i||n(r.getRootNode().host)}return n(t)}function M0(e,t,n){const r=zt(),{params:i}=e,a=i.edgeSwipeDetection,o=i.edgeSwipeThreshold;return a&&(n<=o||n>=r.innerWidth-o)?a==="prevent"?(t.preventDefault(),!0):!1:!0}function V8(e){const t=this,n=An();let r=e;r.originalEvent&&(r=r.originalEvent);const i=t.touchEventsData;if(r.type==="pointerdown"){if(i.pointerId!==null&&i.pointerId!==r.pointerId)return;i.pointerId=r.pointerId}else r.type==="touchstart"&&r.targetTouches.length===1&&(i.touchId=r.targetTouches[0].identifier);if(r.type==="touchstart"){M0(t,r,r.targetTouches[0].pageX);return}const{params:a,touches:o,enabled:s}=t;if(!s||!a.simulateTouch&&r.pointerType==="mouse"||t.animating&&a.preventInteractionOnTransition)return;!t.animating&&a.cssMode&&a.loop&&t.loopFix();let l=r.target;if(a.touchEventsTarget==="wrapper"&&!Hj(l,t.wrapperEl)||"which"in r&&r.which===3||"button"in r&&r.button>0||i.isTouched&&i.isMoved)return;const u=!!a.noSwipingClass&&a.noSwipingClass!=="",d=r.composedPath?r.composedPath():r.path;u&&r.target&&r.target.shadowRoot&&d&&(l=d[0]);const p=a.noSwipingSelector?a.noSwipingSelector:`.${a.noSwipingClass}`,f=!!(r.target&&r.target.shadowRoot);if(a.noSwiping&&(f?D8(p,l):l.closest(p))){t.allowClick=!0;return}if(a.swipeHandler&&!l.closest(a.swipeHandler))return;o.currentX=r.pageX,o.currentY=r.pageY;const g=o.currentX,x=o.currentY;if(!M0(t,r,g))return;Object.assign(i,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),o.startX=g,o.startY=x,i.touchStartTime=nl(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,a.threshold>0&&(i.allowThresholdMove=!1);let y=!0;l.matches(i.focusableElements)&&(y=!1,l.nodeName==="SELECT"&&(i.isTouched=!1)),n.activeElement&&n.activeElement.matches(i.focusableElements)&&n.activeElement!==l&&(r.pointerType==="mouse"||r.pointerType!=="mouse"&&!l.matches(i.focusableElements))&&n.activeElement.blur();const b=y&&t.allowTouchMove&&a.touchStartPreventDefault;(a.touchStartForcePreventDefault||b)&&!l.isContentEditable&&r.preventDefault(),a.freeMode&&a.freeMode.enabled&&t.freeMode&&t.animating&&!a.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",r)}function N8(e){const t=An(),n=this,r=n.touchEventsData,{params:i,touches:a,rtlTranslate:o,enabled:s}=n;if(!s||!i.simulateTouch&&e.pointerType==="mouse")return;let l=e;if(l.originalEvent&&(l=l.originalEvent),l.type==="pointermove"&&(r.touchId!==null||l.pointerId!==r.pointerId))return;let u;if(l.type==="touchmove"){if(u=[...l.changedTouches].filter(j=>j.identifier===r.touchId)[0],!u||u.identifier!==r.touchId)return}else u=l;if(!r.isTouched){r.startMoving&&r.isScrolling&&n.emit("touchMoveOpposite",l);return}const d=u.pageX,p=u.pageY;if(l.preventedByNestedSwiper){a.startX=d,a.startY=p;return}if(!n.allowTouchMove){l.target.matches(r.focusableElements)||(n.allowClick=!1),r.isTouched&&(Object.assign(a,{startX:d,startY:p,currentX:d,currentY:p}),r.touchStartTime=nl());return}if(i.touchReleaseOnEdges&&!i.loop){if(n.isVertical()){if(p<a.startY&&n.translate<=n.maxTranslate()||p>a.startY&&n.translate>=n.minTranslate()){r.isTouched=!1,r.isMoved=!1;return}}else if(d<a.startX&&n.translate<=n.maxTranslate()||d>a.startX&&n.translate>=n.minTranslate())return}if(t.activeElement&&t.activeElement.matches(r.focusableElements)&&t.activeElement!==l.target&&l.pointerType!=="mouse"&&t.activeElement.blur(),t.activeElement&&l.target===t.activeElement&&l.target.matches(r.focusableElements)){r.isMoved=!0,n.allowClick=!1;return}r.allowTouchCallbacks&&n.emit("touchMove",l),a.previousX=a.currentX,a.previousY=a.currentY,a.currentX=d,a.currentY=p;const f=a.currentX-a.startX,g=a.currentY-a.startY;if(n.params.threshold&&Math.sqrt(f**2+g**2)<n.params.threshold)return;if(typeof r.isScrolling>"u"){let j;n.isHorizontal()&&a.currentY===a.startY||n.isVertical()&&a.currentX===a.startX?r.isScrolling=!1:f*f+g*g>=25&&(j=Math.atan2(Math.abs(g),Math.abs(f))*180/Math.PI,r.isScrolling=n.isHorizontal()?j>i.touchAngle:90-j>i.touchAngle)}if(r.isScrolling&&n.emit("touchMoveOpposite",l),typeof r.startMoving>"u"&&(a.currentX!==a.startX||a.currentY!==a.startY)&&(r.startMoving=!0),r.isScrolling||l.type==="touchmove"&&r.preventTouchMoveFromPointerMove){r.isTouched=!1;return}if(!r.startMoving)return;n.allowClick=!1,!i.cssMode&&l.cancelable&&l.preventDefault(),i.touchMoveStopPropagation&&!i.nested&&l.stopPropagation();let x=n.isHorizontal()?f:g,y=n.isHorizontal()?a.currentX-a.previousX:a.currentY-a.previousY;i.oneWayMovement&&(x=Math.abs(x)*(o?1:-1),y=Math.abs(y)*(o?1:-1)),a.diff=x,x*=i.touchRatio,o&&(x=-x,y=-y);const b=n.touchesDirection;n.swipeDirection=x>0?"prev":"next",n.touchesDirection=y>0?"prev":"next";const v=n.params.loop&&!i.cssMode,h=n.touchesDirection==="next"&&n.allowSlideNext||n.touchesDirection==="prev"&&n.allowSlidePrev;if(!r.isMoved){if(v&&h&&n.loopFix({direction:n.swipeDirection}),r.startTranslate=n.getTranslate(),n.setTransition(0),n.animating){const j=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});n.wrapperEl.dispatchEvent(j)}r.allowMomentumBounce=!1,i.grabCursor&&(n.allowSlideNext===!0||n.allowSlidePrev===!0)&&n.setGrabCursor(!0),n.emit("sliderFirstMove",l)}let m;if(new Date().getTime(),r.isMoved&&r.allowThresholdMove&&b!==n.touchesDirection&&v&&h&&Math.abs(x)>=1){Object.assign(a,{startX:d,startY:p,currentX:d,currentY:p,startTranslate:r.currentTranslate}),r.loopSwapReset=!0,r.startTranslate=r.currentTranslate;return}n.emit("sliderMove",l),r.isMoved=!0,r.currentTranslate=x+r.startTranslate;let w=!0,S=i.resistanceRatio;if(i.touchReleaseOnEdges&&(S=0),x>0?(v&&h&&!m&&r.allowThresholdMove&&r.currentTranslate>(i.centeredSlides?n.minTranslate()-n.slidesSizesGrid[n.activeIndex+1]-(i.slidesPerView!=="auto"&&n.slides.length-i.slidesPerView>=2?n.slidesSizesGrid[n.activeIndex+1]+n.params.spaceBetween:0)-n.params.spaceBetween:n.minTranslate())&&n.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),r.currentTranslate>n.minTranslate()&&(w=!1,i.resistance&&(r.currentTranslate=n.minTranslate()-1+(-n.minTranslate()+r.startTranslate+x)**S))):x<0&&(v&&h&&!m&&r.allowThresholdMove&&r.currentTranslate<(i.centeredSlides?n.maxTranslate()+n.slidesSizesGrid[n.slidesSizesGrid.length-1]+n.params.spaceBetween+(i.slidesPerView!=="auto"&&n.slides.length-i.slidesPerView>=2?n.slidesSizesGrid[n.slidesSizesGrid.length-1]+n.params.spaceBetween:0):n.maxTranslate())&&n.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:n.slides.length-(i.slidesPerView==="auto"?n.slidesPerViewDynamic():Math.ceil(parseFloat(i.slidesPerView,10)))}),r.currentTranslate<n.maxTranslate()&&(w=!1,i.resistance&&(r.currentTranslate=n.maxTranslate()+1-(n.maxTranslate()-r.startTranslate-x)**S))),w&&(l.preventedByNestedSwiper=!0),!n.allowSlideNext&&n.swipeDirection==="next"&&r.currentTranslate<r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&n.swipeDirection==="prev"&&r.currentTranslate>r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&!n.allowSlideNext&&(r.currentTranslate=r.startTranslate),i.threshold>0)if(Math.abs(x)>i.threshold||r.allowThresholdMove){if(!r.allowThresholdMove){r.allowThresholdMove=!0,a.startX=a.currentX,a.startY=a.currentY,r.currentTranslate=r.startTranslate,a.diff=n.isHorizontal()?a.currentX-a.startX:a.currentY-a.startY;return}}else{r.currentTranslate=r.startTranslate;return}!i.followFinger||i.cssMode||((i.freeMode&&i.freeMode.enabled&&n.freeMode||i.watchSlidesProgress)&&(n.updateActiveIndex(),n.updateSlidesClasses()),i.freeMode&&i.freeMode.enabled&&n.freeMode&&n.freeMode.onTouchMove(),n.updateProgress(r.currentTranslate),n.setTranslate(r.currentTranslate))}function F8(e){const t=this,n=t.touchEventsData;let r=e;r.originalEvent&&(r=r.originalEvent);let i;if(r.type==="touchend"||r.type==="touchcancel"){if(i=[...r.changedTouches].filter(S=>S.identifier===n.touchId)[0],!i||i.identifier!==n.touchId)return}else{if(n.touchId!==null||r.pointerId!==n.pointerId)return;i=r}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(r.type)&&!(["pointercancel","contextmenu"].includes(r.type)&&(t.browser.isSafari||t.browser.isWebView)))return;n.pointerId=null,n.touchId=null;const{params:o,touches:s,rtlTranslate:l,slidesGrid:u,enabled:d}=t;if(!d||!o.simulateTouch&&r.pointerType==="mouse")return;if(n.allowTouchCallbacks&&t.emit("touchEnd",r),n.allowTouchCallbacks=!1,!n.isTouched){n.isMoved&&o.grabCursor&&t.setGrabCursor(!1),n.isMoved=!1,n.startMoving=!1;return}o.grabCursor&&n.isMoved&&n.isTouched&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!1);const p=nl(),f=p-n.touchStartTime;if(t.allowClick){const S=r.path||r.composedPath&&r.composedPath();t.updateClickedSlide(S&&S[0]||r.target,S),t.emit("tap click",r),f<300&&p-n.lastClickTime<300&&t.emit("doubleTap doubleClick",r)}if(n.lastClickTime=nl(),yd(()=>{t.destroyed||(t.allowClick=!0)}),!n.isTouched||!n.isMoved||!t.swipeDirection||s.diff===0&&!n.loopSwapReset||n.currentTranslate===n.startTranslate&&!n.loopSwapReset){n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;return}n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;let g;if(o.followFinger?g=l?t.translate:-t.translate:g=-n.currentTranslate,o.cssMode)return;if(o.freeMode&&o.freeMode.enabled){t.freeMode.onTouchEnd({currentPos:g});return}const x=g>=-t.maxTranslate()&&!t.params.loop;let y=0,b=t.slidesSizesGrid[0];for(let S=0;S<u.length;S+=S<o.slidesPerGroupSkip?1:o.slidesPerGroup){const j=S<o.slidesPerGroupSkip-1?1:o.slidesPerGroup;typeof u[S+j]<"u"?(x||g>=u[S]&&g<u[S+j])&&(y=S,b=u[S+j]-u[S]):(x||g>=u[S])&&(y=S,b=u[u.length-1]-u[u.length-2])}let v=null,h=null;o.rewind&&(t.isBeginning?h=o.virtual&&o.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(v=0));const m=(g-u[y])/b,w=y<o.slidesPerGroupSkip-1?1:o.slidesPerGroup;if(f>o.longSwipesMs){if(!o.longSwipes){t.slideTo(t.activeIndex);return}t.swipeDirection==="next"&&(m>=o.longSwipesRatio?t.slideTo(o.rewind&&t.isEnd?v:y+w):t.slideTo(y)),t.swipeDirection==="prev"&&(m>1-o.longSwipesRatio?t.slideTo(y+w):h!==null&&m<0&&Math.abs(m)>o.longSwipesRatio?t.slideTo(h):t.slideTo(y))}else{if(!o.shortSwipes){t.slideTo(t.activeIndex);return}t.navigation&&(r.target===t.navigation.nextEl||r.target===t.navigation.prevEl)?r.target===t.navigation.nextEl?t.slideTo(y+w):t.slideTo(y):(t.swipeDirection==="next"&&t.slideTo(v!==null?v:y+w),t.swipeDirection==="prev"&&t.slideTo(h!==null?h:y))}}function L0(){const e=this,{params:t,el:n}=e;if(n&&n.offsetWidth===0)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:r,allowSlidePrev:i,snapGrid:a}=e,o=e.virtual&&e.params.virtual.enabled;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses();const s=o&&t.loop;(t.slidesPerView==="auto"||t.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides&&!s?e.slideTo(e.slides.length-1,0,!1,!0):e.params.loop&&!o?e.slideToLoop(e.realIndex,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&(clearTimeout(e.autoplay.resizeTimeout),e.autoplay.resizeTimeout=setTimeout(()=>{e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.resume()},500)),e.allowSlidePrev=i,e.allowSlideNext=r,e.params.watchOverflow&&a!==e.snapGrid&&e.checkOverflow()}function $8(e){const t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function B8(){const e=this,{wrapperEl:t,rtlTranslate:n,enabled:r}=e;if(!r)return;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,e.translate===0&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();let i;const a=e.maxTranslate()-e.minTranslate();a===0?i=0:i=(e.translate-e.minTranslate())/a,i!==e.progress&&e.updateProgress(n?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}function q8(e){const t=this;hs(t,e.target),!(t.params.cssMode||t.params.slidesPerView!=="auto"&&!t.params.autoHeight)&&t.update()}function H8(){const e=this;e.documentTouchHandlerProceeded||(e.documentTouchHandlerProceeded=!0,e.params.touchReleaseOnEdges&&(e.el.style.touchAction="auto"))}const Vy=(e,t)=>{const n=An(),{params:r,el:i,wrapperEl:a,device:o}=e,s=!!r.nested,l=t==="on"?"addEventListener":"removeEventListener",u=t;!i||typeof i=="string"||(n[l]("touchstart",e.onDocumentTouchStart,{passive:!1,capture:s}),i[l]("touchstart",e.onTouchStart,{passive:!1}),i[l]("pointerdown",e.onTouchStart,{passive:!1}),n[l]("touchmove",e.onTouchMove,{passive:!1,capture:s}),n[l]("pointermove",e.onTouchMove,{passive:!1,capture:s}),n[l]("touchend",e.onTouchEnd,{passive:!0}),n[l]("pointerup",e.onTouchEnd,{passive:!0}),n[l]("pointercancel",e.onTouchEnd,{passive:!0}),n[l]("touchcancel",e.onTouchEnd,{passive:!0}),n[l]("pointerout",e.onTouchEnd,{passive:!0}),n[l]("pointerleave",e.onTouchEnd,{passive:!0}),n[l]("contextmenu",e.onTouchEnd,{passive:!0}),(r.preventClicks||r.preventClicksPropagation)&&i[l]("click",e.onClick,!0),r.cssMode&&a[l]("scroll",e.onScroll),r.updateOnWindowResize?e[u](o.ios||o.android?"resize orientationchange observerUpdate":"resize observerUpdate",L0,!0):e[u]("observerUpdate",L0,!0),i[l]("load",e.onLoad,{capture:!0}))};function U8(){const e=this,{params:t}=e;e.onTouchStart=V8.bind(e),e.onTouchMove=N8.bind(e),e.onTouchEnd=F8.bind(e),e.onDocumentTouchStart=H8.bind(e),t.cssMode&&(e.onScroll=B8.bind(e)),e.onClick=$8.bind(e),e.onLoad=q8.bind(e),Vy(e,"on")}function W8(){Vy(this,"off")}var G8={attachEvents:U8,detachEvents:W8};const O0=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;function Y8(){const e=this,{realIndex:t,initialized:n,params:r,el:i}=e,a=r.breakpoints;if(!a||a&&Object.keys(a).length===0)return;const o=e.getBreakpoint(a,e.params.breakpointsBase,e.el);if(!o||e.currentBreakpoint===o)return;const l=(o in a?a[o]:void 0)||e.originalParams,u=O0(e,r),d=O0(e,l),p=e.params.grabCursor,f=l.grabCursor,g=r.enabled;u&&!d?(i.classList.remove(`${r.containerModifierClass}grid`,`${r.containerModifierClass}grid-column`),e.emitContainerClasses()):!u&&d&&(i.classList.add(`${r.containerModifierClass}grid`),(l.grid.fill&&l.grid.fill==="column"||!l.grid.fill&&r.grid.fill==="column")&&i.classList.add(`${r.containerModifierClass}grid-column`),e.emitContainerClasses()),p&&!f?e.unsetGrabCursor():!p&&f&&e.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(m=>{if(typeof l[m]>"u")return;const w=r[m]&&r[m].enabled,S=l[m]&&l[m].enabled;w&&!S&&e[m].disable(),!w&&S&&e[m].enable()});const x=l.direction&&l.direction!==r.direction,y=r.loop&&(l.slidesPerView!==r.slidesPerView||x),b=r.loop;x&&n&&e.changeDirection(),kt(e.params,l);const v=e.params.enabled,h=e.params.loop;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),g&&!v?e.disable():!g&&v&&e.enable(),e.currentBreakpoint=o,e.emit("_beforeBreakpoint",l),n&&(y?(e.loopDestroy(),e.loopCreate(t),e.updateSlides()):!b&&h?(e.loopCreate(t),e.updateSlides()):b&&!h&&e.loopDestroy()),e.emit("breakpoint",l)}function K8(e,t,n){if(t===void 0&&(t="window"),!e||t==="container"&&!n)return;let r=!1;const i=zt(),a=t==="window"?i.innerHeight:n.clientHeight,o=Object.keys(e).map(s=>{if(typeof s=="string"&&s.indexOf("@")===0){const l=parseFloat(s.substr(1));return{value:a*l,point:s}}return{value:s,point:s}});o.sort((s,l)=>parseInt(s.value,10)-parseInt(l.value,10));for(let s=0;s<o.length;s+=1){const{point:l,value:u}=o[s];t==="window"?i.matchMedia(`(min-width: ${u}px)`).matches&&(r=l):u<=n.clientWidth&&(r=l)}return r||"max"}var X8={setBreakpoint:Y8,getBreakpoint:K8};function Q8(e,t){const n=[];return e.forEach(r=>{typeof r=="object"?Object.keys(r).forEach(i=>{r[i]&&n.push(t+i)}):typeof r=="string"&&n.push(t+r)}),n}function Z8(){const e=this,{classNames:t,params:n,rtl:r,el:i,device:a}=e,o=Q8(["initialized",n.direction,{"free-mode":e.params.freeMode&&n.freeMode.enabled},{autoheight:n.autoHeight},{rtl:r},{grid:n.grid&&n.grid.rows>1},{"grid-column":n.grid&&n.grid.rows>1&&n.grid.fill==="column"},{android:a.android},{ios:a.ios},{"css-mode":n.cssMode},{centered:n.cssMode&&n.centeredSlides},{"watch-progress":n.watchSlidesProgress}],n.containerModifierClass);t.push(...o),i.classList.add(...t),e.emitContainerClasses()}function J8(){const e=this,{el:t,classNames:n}=e;!t||typeof t=="string"||(t.classList.remove(...n),e.emitContainerClasses())}var e_={addClasses:Z8,removeClasses:J8};function t_(){const e=this,{isLocked:t,params:n}=e,{slidesOffsetBefore:r}=n;if(r){const i=e.slides.length-1,a=e.slidesGrid[i]+e.slidesSizesGrid[i]+r*2;e.isLocked=e.size>a}else e.isLocked=e.snapGrid.length===1;n.allowSlideNext===!0&&(e.allowSlideNext=!e.isLocked),n.allowSlidePrev===!0&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}var n_={checkOverflow:t_},Sd={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function r_(e,t){return function(r){r===void 0&&(r={});const i=Object.keys(r)[0],a=r[i];if(typeof a!="object"||a===null){kt(t,r);return}if(e[i]===!0&&(e[i]={enabled:!0}),i==="navigation"&&e[i]&&e[i].enabled&&!e[i].prevEl&&!e[i].nextEl&&(e[i].auto=!0),["pagination","scrollbar"].indexOf(i)>=0&&e[i]&&e[i].enabled&&!e[i].el&&(e[i].auto=!0),!(i in e&&"enabled"in a)){kt(t,r);return}typeof e[i]=="object"&&!("enabled"in e[i])&&(e[i].enabled=!0),e[i]||(e[i]={enabled:!1}),kt(t,r)}}const Wc={eventsEmitter:e8,update:d8,translate:v8,transition:b8,slide:P8,loop:L8,grabCursor:R8,events:G8,breakpoints:X8,checkOverflow:n_,classes:e_},Gc={};let hf=class xn{constructor(){let t,n;for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];i.length===1&&i[0].constructor&&Object.prototype.toString.call(i[0]).slice(8,-1)==="Object"?n=i[0]:[t,n]=i,n||(n={}),n=kt({},n),t&&!n.el&&(n.el=t);const o=An();if(n.el&&typeof n.el=="string"&&o.querySelectorAll(n.el).length>1){const d=[];return o.querySelectorAll(n.el).forEach(p=>{const f=kt({},n,{el:p});d.push(new xn(f))}),d}const s=this;s.__swiper__=!0,s.support=Iy(),s.device=Ry({userAgent:n.userAgent}),s.browser=Qj(),s.eventsListeners={},s.eventsAnyListeners=[],s.modules=[...s.__modules__],n.modules&&Array.isArray(n.modules)&&s.modules.push(...n.modules);const l={};s.modules.forEach(d=>{d({params:n,swiper:s,extendParams:r_(n,l),on:s.on.bind(s),once:s.once.bind(s),off:s.off.bind(s),emit:s.emit.bind(s)})});const u=kt({},Sd,l);return s.params=kt({},u,Gc,n),s.originalParams=kt({},s.params),s.passedParams=kt({},n),s.params&&s.params.on&&Object.keys(s.params.on).forEach(d=>{s.on(d,s.params.on[d])}),s.params&&s.params.onAny&&s.onAny(s.params.onAny),Object.assign(s,{enabled:s.params.enabled,el:t,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return s.params.direction==="horizontal"},isVertical(){return s.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:s.params.allowSlideNext,allowSlidePrev:s.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:s.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:s.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),s.emit("_swiper"),s.params.init&&s.init(),s}getDirectionLabel(t){return this.isHorizontal()?t:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[t]}getSlideIndex(t){const{slidesEl:n,params:r}=this,i=cn(n,`.${r.slideClass}, swiper-slide`),a=il(i[0]);return il(t)-a}getSlideIndexByData(t){return this.getSlideIndex(this.slides.filter(n=>n.getAttribute("data-swiper-slide-index")*1===t)[0])}recalcSlides(){const t=this,{slidesEl:n,params:r}=t;t.slides=cn(n,`.${r.slideClass}, swiper-slide`)}enable(){const t=this;t.enabled||(t.enabled=!0,t.params.grabCursor&&t.setGrabCursor(),t.emit("enable"))}disable(){const t=this;t.enabled&&(t.enabled=!1,t.params.grabCursor&&t.unsetGrabCursor(),t.emit("disable"))}setProgress(t,n){const r=this;t=Math.min(Math.max(t,0),1);const i=r.minTranslate(),o=(r.maxTranslate()-i)*t+i;r.translateTo(o,typeof n>"u"?0:n),r.updateActiveIndex(),r.updateSlidesClasses()}emitContainerClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=t.el.className.split(" ").filter(r=>r.indexOf("swiper")===0||r.indexOf(t.params.containerModifierClass)===0);t.emit("_containerClasses",n.join(" "))}getSlideClasses(t){const n=this;return n.destroyed?"":t.className.split(" ").filter(r=>r.indexOf("swiper-slide")===0||r.indexOf(n.params.slideClass)===0).join(" ")}emitSlidesClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=[];t.slides.forEach(r=>{const i=t.getSlideClasses(r);n.push({slideEl:r,classNames:i}),t.emit("_slideClass",r,i)}),t.emit("_slideClasses",n)}slidesPerViewDynamic(t,n){t===void 0&&(t="current"),n===void 0&&(n=!1);const r=this,{params:i,slides:a,slidesGrid:o,slidesSizesGrid:s,size:l,activeIndex:u}=r;let d=1;if(typeof i.slidesPerView=="number")return i.slidesPerView;if(i.centeredSlides){let p=a[u]?Math.ceil(a[u].swiperSlideSize):0,f;for(let g=u+1;g<a.length;g+=1)a[g]&&!f&&(p+=Math.ceil(a[g].swiperSlideSize),d+=1,p>l&&(f=!0));for(let g=u-1;g>=0;g-=1)a[g]&&!f&&(p+=a[g].swiperSlideSize,d+=1,p>l&&(f=!0))}else if(t==="current")for(let p=u+1;p<a.length;p+=1)(n?o[p]+s[p]-o[u]<l:o[p]-o[u]<l)&&(d+=1);else for(let p=u-1;p>=0;p-=1)o[u]-o[p]<l&&(d+=1);return d}update(){const t=this;if(!t||t.destroyed)return;const{snapGrid:n,params:r}=t;r.breakpoints&&t.setBreakpoint(),[...t.el.querySelectorAll('[loading="lazy"]')].forEach(o=>{o.complete&&hs(t,o)}),t.updateSize(),t.updateSlides(),t.updateProgress(),t.updateSlidesClasses();function i(){const o=t.rtlTranslate?t.translate*-1:t.translate,s=Math.min(Math.max(o,t.maxTranslate()),t.minTranslate());t.setTranslate(s),t.updateActiveIndex(),t.updateSlidesClasses()}let a;if(r.freeMode&&r.freeMode.enabled&&!r.cssMode)i(),r.autoHeight&&t.updateAutoHeight();else{if((r.slidesPerView==="auto"||r.slidesPerView>1)&&t.isEnd&&!r.centeredSlides){const o=t.virtual&&r.virtual.enabled?t.virtual.slides:t.slides;a=t.slideTo(o.length-1,0,!1,!0)}else a=t.slideTo(t.activeIndex,0,!1,!0);a||i()}r.watchOverflow&&n!==t.snapGrid&&t.checkOverflow(),t.emit("update")}changeDirection(t,n){n===void 0&&(n=!0);const r=this,i=r.params.direction;return t||(t=i==="horizontal"?"vertical":"horizontal"),t===i||t!=="horizontal"&&t!=="vertical"||(r.el.classList.remove(`${r.params.containerModifierClass}${i}`),r.el.classList.add(`${r.params.containerModifierClass}${t}`),r.emitContainerClasses(),r.params.direction=t,r.slides.forEach(a=>{t==="vertical"?a.style.width="":a.style.height=""}),r.emit("changeDirection"),n&&r.update()),r}changeLanguageDirection(t){const n=this;n.rtl&&t==="rtl"||!n.rtl&&t==="ltr"||(n.rtl=t==="rtl",n.rtlTranslate=n.params.direction==="horizontal"&&n.rtl,n.rtl?(n.el.classList.add(`${n.params.containerModifierClass}rtl`),n.el.dir="rtl"):(n.el.classList.remove(`${n.params.containerModifierClass}rtl`),n.el.dir="ltr"),n.update())}mount(t){const n=this;if(n.mounted)return!0;let r=t||n.params.el;if(typeof r=="string"&&(r=document.querySelector(r)),!r)return!1;r.swiper=n,r.parentNode&&r.parentNode.host&&r.parentNode.host.nodeName===n.params.swiperElementNodeName.toUpperCase()&&(n.isElement=!0);const i=()=>`.${(n.params.wrapperClass||"").trim().split(" ").join(".")}`;let o=r&&r.shadowRoot&&r.shadowRoot.querySelector?r.shadowRoot.querySelector(i()):cn(r,i())[0];return!o&&n.params.createElements&&(o=ao("div",n.params.wrapperClass),r.append(o),cn(r,`.${n.params.slideClass}`).forEach(s=>{o.append(s)})),Object.assign(n,{el:r,wrapperEl:o,slidesEl:n.isElement&&!r.parentNode.host.slideSlots?r.parentNode.host:o,hostEl:n.isElement?r.parentNode.host:r,mounted:!0,rtl:r.dir.toLowerCase()==="rtl"||Zn(r,"direction")==="rtl",rtlTranslate:n.params.direction==="horizontal"&&(r.dir.toLowerCase()==="rtl"||Zn(r,"direction")==="rtl"),wrongRTL:Zn(o,"display")==="-webkit-box"}),!0}init(t){const n=this;if(n.initialized||n.mount(t)===!1)return n;n.emit("beforeInit"),n.params.breakpoints&&n.setBreakpoint(),n.addClasses(),n.updateSize(),n.updateSlides(),n.params.watchOverflow&&n.checkOverflow(),n.params.grabCursor&&n.enabled&&n.setGrabCursor(),n.params.loop&&n.virtual&&n.params.virtual.enabled?n.slideTo(n.params.initialSlide+n.virtual.slidesBefore,0,n.params.runCallbacksOnInit,!1,!0):n.slideTo(n.params.initialSlide,0,n.params.runCallbacksOnInit,!1,!0),n.params.loop&&n.loopCreate(),n.attachEvents();const i=[...n.el.querySelectorAll('[loading="lazy"]')];return n.isElement&&i.push(...n.hostEl.querySelectorAll('[loading="lazy"]')),i.forEach(a=>{a.complete?hs(n,a):a.addEventListener("load",o=>{hs(n,o.target)})}),bd(n),n.initialized=!0,bd(n),n.emit("init"),n.emit("afterInit"),n}destroy(t,n){t===void 0&&(t=!0),n===void 0&&(n=!0);const r=this,{params:i,el:a,wrapperEl:o,slides:s}=r;return typeof r.params>"u"||r.destroyed||(r.emit("beforeDestroy"),r.initialized=!1,r.detachEvents(),i.loop&&r.loopDestroy(),n&&(r.removeClasses(),a&&typeof a!="string"&&a.removeAttribute("style"),o&&o.removeAttribute("style"),s&&s.length&&s.forEach(l=>{l.classList.remove(i.slideVisibleClass,i.slideFullyVisibleClass,i.slideActiveClass,i.slideNextClass,i.slidePrevClass),l.removeAttribute("style"),l.removeAttribute("data-swiper-slide-index")})),r.emit("destroy"),Object.keys(r.eventsListeners).forEach(l=>{r.off(l)}),t!==!1&&(r.el&&typeof r.el!="string"&&(r.el.swiper=null),Fj(r)),r.destroyed=!0),null}static extendDefaults(t){kt(Gc,t)}static get extendedDefaults(){return Gc}static get defaults(){return Sd}static installModule(t){xn.prototype.__modules__||(xn.prototype.__modules__=[]);const n=xn.prototype.__modules__;typeof t=="function"&&n.indexOf(t)<0&&n.push(t)}static use(t){return Array.isArray(t)?(t.forEach(n=>xn.installModule(n)),xn):(xn.installModule(t),xn)}};Object.keys(Wc).forEach(e=>{Object.keys(Wc[e]).forEach(t=>{hf.prototype[t]=Wc[e][t]})});hf.use([Zj,Jj]);const Ny=["eventsPrefix","injectStyles","injectStylesUrls","modules","init","_direction","oneWayMovement","swiperElementNodeName","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","breakpointsBase","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_loop","loopAdditionalSlides","loopAddBlankSlides","loopPreventsSliding","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideActiveClass","slideVisibleClass","slideFullyVisibleClass","slideNextClass","slidePrevClass","slideBlankClass","wrapperClass","lazyPreloaderClass","lazyPreloadPrevNext","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom","control"];function qr(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"&&!e.__swiper__}function Ti(e,t){const n=["__proto__","constructor","prototype"];Object.keys(t).filter(r=>n.indexOf(r)<0).forEach(r=>{typeof e[r]>"u"?e[r]=t[r]:qr(t[r])&&qr(e[r])&&Object.keys(t[r]).length>0?t[r].__swiper__?e[r]=t[r]:Ti(e[r],t[r]):e[r]=t[r]})}function Fy(e){return e===void 0&&(e={}),e.navigation&&typeof e.navigation.nextEl>"u"&&typeof e.navigation.prevEl>"u"}function $y(e){return e===void 0&&(e={}),e.pagination&&typeof e.pagination.el>"u"}function By(e){return e===void 0&&(e={}),e.scrollbar&&typeof e.scrollbar.el>"u"}function qy(e){e===void 0&&(e="");const t=e.split(" ").map(r=>r.trim()).filter(r=>!!r),n=[];return t.forEach(r=>{n.indexOf(r)<0&&n.push(r)}),n.join(" ")}function i_(e){return e===void 0&&(e=""),e?e.includes("swiper-wrapper")?e:`swiper-wrapper ${e}`:"swiper-wrapper"}function a_(e){let{swiper:t,slides:n,passedParams:r,changedParams:i,nextEl:a,prevEl:o,scrollbarEl:s,paginationEl:l}=e;const u=i.filter(A=>A!=="children"&&A!=="direction"&&A!=="wrapperClass"),{params:d,pagination:p,navigation:f,scrollbar:g,virtual:x,thumbs:y}=t;let b,v,h,m,w,S,j,C;i.includes("thumbs")&&r.thumbs&&r.thumbs.swiper&&d.thumbs&&!d.thumbs.swiper&&(b=!0),i.includes("controller")&&r.controller&&r.controller.control&&d.controller&&!d.controller.control&&(v=!0),i.includes("pagination")&&r.pagination&&(r.pagination.el||l)&&(d.pagination||d.pagination===!1)&&p&&!p.el&&(h=!0),i.includes("scrollbar")&&r.scrollbar&&(r.scrollbar.el||s)&&(d.scrollbar||d.scrollbar===!1)&&g&&!g.el&&(m=!0),i.includes("navigation")&&r.navigation&&(r.navigation.prevEl||o)&&(r.navigation.nextEl||a)&&(d.navigation||d.navigation===!1)&&f&&!f.prevEl&&!f.nextEl&&(w=!0);const T=A=>{t[A]&&(t[A].destroy(),A==="navigation"?(t.isElement&&(t[A].prevEl.remove(),t[A].nextEl.remove()),d[A].prevEl=void 0,d[A].nextEl=void 0,t[A].prevEl=void 0,t[A].nextEl=void 0):(t.isElement&&t[A].el.remove(),d[A].el=void 0,t[A].el=void 0))};i.includes("loop")&&t.isElement&&(d.loop&&!r.loop?S=!0:!d.loop&&r.loop?j=!0:C=!0),u.forEach(A=>{if(qr(d[A])&&qr(r[A]))Object.assign(d[A],r[A]),(A==="navigation"||A==="pagination"||A==="scrollbar")&&"enabled"in r[A]&&!r[A].enabled&&T(A);else{const E=r[A];(E===!0||E===!1)&&(A==="navigation"||A==="pagination"||A==="scrollbar")?E===!1&&T(A):d[A]=r[A]}}),u.includes("controller")&&!v&&t.controller&&t.controller.control&&d.controller&&d.controller.control&&(t.controller.control=d.controller.control),i.includes("children")&&n&&x&&d.virtual.enabled?(x.slides=n,x.update(!0)):i.includes("virtual")&&x&&d.virtual.enabled&&(n&&(x.slides=n),x.update(!0)),i.includes("children")&&n&&d.loop&&(C=!0),b&&y.init()&&y.update(!0),v&&(t.controller.control=d.controller.control),h&&(t.isElement&&(!l||typeof l=="string")&&(l=document.createElement("div"),l.classList.add("swiper-pagination"),l.part.add("pagination"),t.el.appendChild(l)),l&&(d.pagination.el=l),p.init(),p.render(),p.update()),m&&(t.isElement&&(!s||typeof s=="string")&&(s=document.createElement("div"),s.classList.add("swiper-scrollbar"),s.part.add("scrollbar"),t.el.appendChild(s)),s&&(d.scrollbar.el=s),g.init(),g.updateSize(),g.setTranslate()),w&&(t.isElement&&((!a||typeof a=="string")&&(a=document.createElement("div"),a.classList.add("swiper-button-next"),a.innerHTML=t.hostEl.constructor.nextButtonSvg,a.part.add("button-next"),t.el.appendChild(a)),(!o||typeof o=="string")&&(o=document.createElement("div"),o.classList.add("swiper-button-prev"),o.innerHTML=t.hostEl.constructor.prevButtonSvg,o.part.add("button-prev"),t.el.appendChild(o))),a&&(d.navigation.nextEl=a),o&&(d.navigation.prevEl=o),f.init(),f.update()),i.includes("allowSlideNext")&&(t.allowSlideNext=r.allowSlideNext),i.includes("allowSlidePrev")&&(t.allowSlidePrev=r.allowSlidePrev),i.includes("direction")&&t.changeDirection(r.direction,!1),(S||C)&&t.loopDestroy(),(j||C)&&t.loopCreate(),t.update()}function o_(e,t){e===void 0&&(e={}),t===void 0&&(t=!0);const n={on:{}},r={},i={};Ti(n,Sd),n._emitClasses=!0,n.init=!1;const a={},o=Ny.map(l=>l.replace(/_/,"")),s=Object.assign({},e);return Object.keys(s).forEach(l=>{typeof e[l]>"u"||(o.indexOf(l)>=0?qr(e[l])?(n[l]={},i[l]={},Ti(n[l],e[l]),Ti(i[l],e[l])):(n[l]=e[l],i[l]=e[l]):l.search(/on[A-Z]/)===0&&typeof e[l]=="function"?t?r[`${l[2].toLowerCase()}${l.substr(3)}`]=e[l]:n.on[`${l[2].toLowerCase()}${l.substr(3)}`]=e[l]:a[l]=e[l])}),["navigation","pagination","scrollbar"].forEach(l=>{n[l]===!0&&(n[l]={}),n[l]===!1&&delete n[l]}),{params:n,passedParams:i,rest:a,events:r}}function s_(e,t){let{el:n,nextEl:r,prevEl:i,paginationEl:a,scrollbarEl:o,swiper:s}=e;Fy(t)&&r&&i&&(s.params.navigation.nextEl=r,s.originalParams.navigation.nextEl=r,s.params.navigation.prevEl=i,s.originalParams.navigation.prevEl=i),$y(t)&&a&&(s.params.pagination.el=a,s.originalParams.pagination.el=a),By(t)&&o&&(s.params.scrollbar.el=o,s.originalParams.scrollbar.el=o),s.init(n)}function l_(e,t,n,r,i){const a=[];if(!t)return a;const o=l=>{a.indexOf(l)<0&&a.push(l)};if(n&&r){const l=r.map(i),u=n.map(i);l.join("")!==u.join("")&&o("children"),r.length!==n.length&&o("children")}return Ny.filter(l=>l[0]==="_").map(l=>l.replace(/_/,"")).forEach(l=>{if(l in e&&l in t)if(qr(e[l])&&qr(t[l])){const u=Object.keys(e[l]),d=Object.keys(t[l]);u.length!==d.length?o(l):(u.forEach(p=>{e[l][p]!==t[l][p]&&o(l)}),d.forEach(p=>{e[l][p]!==t[l][p]&&o(l)}))}else e[l]!==t[l]&&o(l)}),a}const c_=e=>{!e||e.destroyed||!e.params.virtual||e.params.virtual&&!e.params.virtual.enabled||(e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.parallax&&e.params.parallax&&e.params.parallax.enabled&&e.parallax.setTranslate())};function al(){return al=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},al.apply(this,arguments)}function Hy(e){return e.type&&e.type.displayName&&e.type.displayName.includes("SwiperSlide")}function Uy(e){const t=[];return J.Children.toArray(e).forEach(n=>{Hy(n)?t.push(n):n.props&&n.props.children&&Uy(n.props.children).forEach(r=>t.push(r))}),t}function u_(e){const t=[],n={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]};return J.Children.toArray(e).forEach(r=>{if(Hy(r))t.push(r);else if(r.props&&r.props.slot&&n[r.props.slot])n[r.props.slot].push(r);else if(r.props&&r.props.children){const i=Uy(r.props.children);i.length>0?i.forEach(a=>t.push(a)):n["container-end"].push(r)}else n["container-end"].push(r)}),{slides:t,slots:n}}function d_(e,t,n){if(!n)return null;const r=d=>{let p=d;return d<0?p=t.length+d:p>=t.length&&(p=p-t.length),p},i=e.isHorizontal()?{[e.rtlTranslate?"right":"left"]:`${n.offset}px`}:{top:`${n.offset}px`},{from:a,to:o}=n,s=e.params.loop?-t.length:0,l=e.params.loop?t.length*2:t.length,u=[];for(let d=s;d<l;d+=1)d>=a&&d<=o&&u.push(t[r(d)]);return u.map((d,p)=>J.cloneElement(d,{swiper:e,style:i,key:d.props.virtualIndex||d.key||`slide-${p}`}))}function Oa(e,t){return typeof window>"u"?k.useEffect(e,t):k.useLayoutEffect(e,t)}const I0=k.createContext(null),p_=k.createContext(null),Jt=k.forwardRef(function(e,t){let{className:n,tag:r="div",wrapperTag:i="div",children:a,onSwiper:o,...s}=e===void 0?{}:e,l=!1;const[u,d]=k.useState("swiper"),[p,f]=k.useState(null),[g,x]=k.useState(!1),y=k.useRef(!1),b=k.useRef(null),v=k.useRef(null),h=k.useRef(null),m=k.useRef(null),w=k.useRef(null),S=k.useRef(null),j=k.useRef(null),C=k.useRef(null),{params:T,passedParams:A,rest:E,events:P}=o_(s),{slides:M,slots:R}=u_(a),D=()=>{x(!g)};Object.assign(T.on,{_containerClasses(N,B){d(B)}});const U=()=>{Object.assign(T.on,P),l=!0;const N={...T};if(delete N.wrapperClass,v.current=new hf(N),v.current.virtual&&v.current.params.virtual.enabled){v.current.virtual.slides=M;const B={cache:!1,slides:M,renderExternal:f,renderExternalUpdate:!1};Ti(v.current.params.virtual,B),Ti(v.current.originalParams.virtual,B)}};b.current||U(),v.current&&v.current.on("_beforeBreakpoint",D);const Q=()=>{l||!P||!v.current||Object.keys(P).forEach(N=>{v.current.on(N,P[N])})},Y=()=>{!P||!v.current||Object.keys(P).forEach(N=>{v.current.off(N,P[N])})};k.useEffect(()=>()=>{v.current&&v.current.off("_beforeBreakpoint",D)}),k.useEffect(()=>{!y.current&&v.current&&(v.current.emitSlidesClasses(),y.current=!0)}),Oa(()=>{if(t&&(t.current=b.current),!!b.current)return v.current.destroyed&&U(),s_({el:b.current,nextEl:w.current,prevEl:S.current,paginationEl:j.current,scrollbarEl:C.current,swiper:v.current},T),o&&!v.current.destroyed&&o(v.current),()=>{v.current&&!v.current.destroyed&&v.current.destroy(!0,!1)}},[]),Oa(()=>{Q();const N=l_(A,h.current,M,m.current,B=>B.key);return h.current=A,m.current=M,N.length&&v.current&&!v.current.destroyed&&a_({swiper:v.current,slides:M,passedParams:A,changedParams:N,nextEl:w.current,prevEl:S.current,scrollbarEl:C.current,paginationEl:j.current}),()=>{Y()}}),Oa(()=>{c_(v.current)},[p]);function L(){return T.virtual?d_(v.current,M,p):M.map((N,B)=>J.cloneElement(N,{swiper:v.current,swiperSlideIndex:B}))}return J.createElement(r,al({ref:b,className:qy(`${u}${n?` ${n}`:""}`)},E),J.createElement(p_.Provider,{value:v.current},R["container-start"],J.createElement(i,{className:i_(T.wrapperClass)},R["wrapper-start"],L(),R["wrapper-end"]),Fy(T)&&J.createElement(J.Fragment,null,J.createElement("div",{ref:S,className:"swiper-button-prev"}),J.createElement("div",{ref:w,className:"swiper-button-next"})),By(T)&&J.createElement("div",{ref:C,className:"swiper-scrollbar"}),$y(T)&&J.createElement("div",{ref:j,className:"swiper-pagination"}),R["container-end"]))});Jt.displayName="Swiper";const en=k.forwardRef(function(e,t){let{tag:n="div",children:r,className:i="",swiper:a,zoom:o,lazy:s,virtualIndex:l,swiperSlideIndex:u,...d}=e===void 0?{}:e;const p=k.useRef(null),[f,g]=k.useState("swiper-slide"),[x,y]=k.useState(!1);function b(w,S,j){S===p.current&&g(j)}Oa(()=>{if(typeof u<"u"&&(p.current.swiperSlideIndex=u),t&&(t.current=p.current),!(!p.current||!a)){if(a.destroyed){f!=="swiper-slide"&&g("swiper-slide");return}return a.on("_slideClass",b),()=>{a&&a.off("_slideClass",b)}}}),Oa(()=>{a&&p.current&&!a.destroyed&&g(a.getSlideClasses(p.current))},[a]);const v={isActive:f.indexOf("swiper-slide-active")>=0,isVisible:f.indexOf("swiper-slide-visible")>=0,isPrev:f.indexOf("swiper-slide-prev")>=0,isNext:f.indexOf("swiper-slide-next")>=0},h=()=>typeof r=="function"?r(v):r,m=()=>{y(!0)};return J.createElement(n,al({ref:p,className:qy(`${f}${i?` ${i}`:""}`),"data-swiper-slide-index":l,onLoad:m},d),o&&J.createElement(I0.Provider,{value:v},J.createElement("div",{className:"swiper-zoom-container","data-swiper-zoom":typeof o=="number"?o:void 0},h(),s&&!x&&J.createElement("div",{className:"swiper-lazy-preloader"}))),!o&&J.createElement(I0.Provider,{value:v},h(),s&&!x&&J.createElement("div",{className:"swiper-lazy-preloader"})))});en.displayName="SwiperSlide";function Wy(e,t,n,r){return e.params.createElements&&Object.keys(r).forEach(i=>{if(!n[i]&&n.auto===!0){let a=cn(e.el,`.${r[i]}`)[0];a||(a=ao("div",r[i]),a.className=r[i],e.el.append(a)),n[i]=a,t[i]=a}}),n}function vr(e){let{swiper:t,extendParams:n,on:r,emit:i}=e;n({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),t.navigation={nextEl:null,prevEl:null};function a(x){let y;return x&&typeof x=="string"&&t.isElement&&(y=t.el.querySelector(x)||t.hostEl.querySelector(x),y)?y:(x&&(typeof x=="string"&&(y=[...document.querySelectorAll(x)]),t.params.uniqueNavElements&&typeof x=="string"&&y&&y.length>1&&t.el.querySelectorAll(x).length===1?y=t.el.querySelector(x):y&&y.length===1&&(y=y[0])),x&&!y?x:y)}function o(x,y){const b=t.params.navigation;x=Ue(x),x.forEach(v=>{v&&(v.classList[y?"add":"remove"](...b.disabledClass.split(" ")),v.tagName==="BUTTON"&&(v.disabled=y),t.params.watchOverflow&&t.enabled&&v.classList[t.isLocked?"add":"remove"](b.lockClass))})}function s(){const{nextEl:x,prevEl:y}=t.navigation;if(t.params.loop){o(y,!1),o(x,!1);return}o(y,t.isBeginning&&!t.params.rewind),o(x,t.isEnd&&!t.params.rewind)}function l(x){x.preventDefault(),!(t.isBeginning&&!t.params.loop&&!t.params.rewind)&&(t.slidePrev(),i("navigationPrev"))}function u(x){x.preventDefault(),!(t.isEnd&&!t.params.loop&&!t.params.rewind)&&(t.slideNext(),i("navigationNext"))}function d(){const x=t.params.navigation;if(t.params.navigation=Wy(t,t.originalParams.navigation,t.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(x.nextEl||x.prevEl))return;let y=a(x.nextEl),b=a(x.prevEl);Object.assign(t.navigation,{nextEl:y,prevEl:b}),y=Ue(y),b=Ue(b);const v=(h,m)=>{h&&h.addEventListener("click",m==="next"?u:l),!t.enabled&&h&&h.classList.add(...x.lockClass.split(" "))};y.forEach(h=>v(h,"next")),b.forEach(h=>v(h,"prev"))}function p(){let{nextEl:x,prevEl:y}=t.navigation;x=Ue(x),y=Ue(y);const b=(v,h)=>{v.removeEventListener("click",h==="next"?u:l),v.classList.remove(...t.params.navigation.disabledClass.split(" "))};x.forEach(v=>b(v,"next")),y.forEach(v=>b(v,"prev"))}r("init",()=>{t.params.navigation.enabled===!1?g():(d(),s())}),r("toEdge fromEdge lock unlock",()=>{s()}),r("destroy",()=>{p()}),r("enable disable",()=>{let{nextEl:x,prevEl:y}=t.navigation;if(x=Ue(x),y=Ue(y),t.enabled){s();return}[...x,...y].filter(b=>!!b).forEach(b=>b.classList.add(t.params.navigation.lockClass))}),r("click",(x,y)=>{let{nextEl:b,prevEl:v}=t.navigation;b=Ue(b),v=Ue(v);const h=y.target;let m=v.includes(h)||b.includes(h);if(t.isElement&&!m){const w=y.path||y.composedPath&&y.composedPath();w&&(m=w.find(S=>b.includes(S)||v.includes(S)))}if(t.params.navigation.hideOnClick&&!m){if(t.pagination&&t.params.pagination&&t.params.pagination.clickable&&(t.pagination.el===h||t.pagination.el.contains(h)))return;let w;b.length?w=b[0].classList.contains(t.params.navigation.hiddenClass):v.length&&(w=v[0].classList.contains(t.params.navigation.hiddenClass)),i(w===!0?"navigationShow":"navigationHide"),[...b,...v].filter(S=>!!S).forEach(S=>S.classList.toggle(t.params.navigation.hiddenClass))}});const f=()=>{t.el.classList.remove(...t.params.navigation.navigationDisabledClass.split(" ")),d(),s()},g=()=>{t.el.classList.add(...t.params.navigation.navigationDisabledClass.split(" ")),p()};Object.assign(t.navigation,{enable:f,disable:g,update:s,init:d,destroy:p})}function da(e){return e===void 0&&(e=""),`.${e.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`}function xr(e){let{swiper:t,extendParams:n,on:r,emit:i}=e;const a="swiper-pagination";n({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:h=>h,formatFractionTotal:h=>h,bulletClass:`${a}-bullet`,bulletActiveClass:`${a}-bullet-active`,modifierClass:`${a}-`,currentClass:`${a}-current`,totalClass:`${a}-total`,hiddenClass:`${a}-hidden`,progressbarFillClass:`${a}-progressbar-fill`,progressbarOppositeClass:`${a}-progressbar-opposite`,clickableClass:`${a}-clickable`,lockClass:`${a}-lock`,horizontalClass:`${a}-horizontal`,verticalClass:`${a}-vertical`,paginationDisabledClass:`${a}-disabled`}}),t.pagination={el:null,bullets:[]};let o,s=0;function l(){return!t.params.pagination.el||!t.pagination.el||Array.isArray(t.pagination.el)&&t.pagination.el.length===0}function u(h,m){const{bulletActiveClass:w}=t.params.pagination;h&&(h=h[`${m==="prev"?"previous":"next"}ElementSibling`],h&&(h.classList.add(`${w}-${m}`),h=h[`${m==="prev"?"previous":"next"}ElementSibling`],h&&h.classList.add(`${w}-${m}-${m}`)))}function d(h,m,w){if(h=h%w,m=m%w,m===h+1)return"next";if(m===h-1)return"previous"}function p(h){const m=h.target.closest(da(t.params.pagination.bulletClass));if(!m)return;h.preventDefault();const w=il(m)*t.params.slidesPerGroup;if(t.params.loop){if(t.realIndex===w)return;const S=d(t.realIndex,w,t.slides.length);S==="next"?t.slideNext():S==="previous"?t.slidePrev():t.slideToLoop(w)}else t.slideTo(w)}function f(){const h=t.rtl,m=t.params.pagination;if(l())return;let w=t.pagination.el;w=Ue(w);let S,j;const C=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.slides.length,T=t.params.loop?Math.ceil(C/t.params.slidesPerGroup):t.snapGrid.length;if(t.params.loop?(j=t.previousRealIndex||0,S=t.params.slidesPerGroup>1?Math.floor(t.realIndex/t.params.slidesPerGroup):t.realIndex):typeof t.snapIndex<"u"?(S=t.snapIndex,j=t.previousSnapIndex):(j=t.previousIndex||0,S=t.activeIndex||0),m.type==="bullets"&&t.pagination.bullets&&t.pagination.bullets.length>0){const A=t.pagination.bullets;let E,P,M;if(m.dynamicBullets&&(o=wd(A[0],t.isHorizontal()?"width":"height"),w.forEach(R=>{R.style[t.isHorizontal()?"width":"height"]=`${o*(m.dynamicMainBullets+4)}px`}),m.dynamicMainBullets>1&&j!==void 0&&(s+=S-(j||0),s>m.dynamicMainBullets-1?s=m.dynamicMainBullets-1:s<0&&(s=0)),E=Math.max(S-s,0),P=E+(Math.min(A.length,m.dynamicMainBullets)-1),M=(P+E)/2),A.forEach(R=>{const D=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(U=>`${m.bulletActiveClass}${U}`)].map(U=>typeof U=="string"&&U.includes(" ")?U.split(" "):U).flat();R.classList.remove(...D)}),w.length>1)A.forEach(R=>{const D=il(R);D===S?R.classList.add(...m.bulletActiveClass.split(" ")):t.isElement&&R.setAttribute("part","bullet"),m.dynamicBullets&&(D>=E&&D<=P&&R.classList.add(...`${m.bulletActiveClass}-main`.split(" ")),D===E&&u(R,"prev"),D===P&&u(R,"next"))});else{const R=A[S];if(R&&R.classList.add(...m.bulletActiveClass.split(" ")),t.isElement&&A.forEach((D,U)=>{D.setAttribute("part",U===S?"bullet-active":"bullet")}),m.dynamicBullets){const D=A[E],U=A[P];for(let Q=E;Q<=P;Q+=1)A[Q]&&A[Q].classList.add(...`${m.bulletActiveClass}-main`.split(" "));u(D,"prev"),u(U,"next")}}if(m.dynamicBullets){const R=Math.min(A.length,m.dynamicMainBullets+4),D=(o*R-o)/2-M*o,U=h?"right":"left";A.forEach(Q=>{Q.style[t.isHorizontal()?U:"top"]=`${D}px`})}}w.forEach((A,E)=>{if(m.type==="fraction"&&(A.querySelectorAll(da(m.currentClass)).forEach(P=>{P.textContent=m.formatFractionCurrent(S+1)}),A.querySelectorAll(da(m.totalClass)).forEach(P=>{P.textContent=m.formatFractionTotal(T)})),m.type==="progressbar"){let P;m.progressbarOpposite?P=t.isHorizontal()?"vertical":"horizontal":P=t.isHorizontal()?"horizontal":"vertical";const M=(S+1)/T;let R=1,D=1;P==="horizontal"?R=M:D=M,A.querySelectorAll(da(m.progressbarFillClass)).forEach(U=>{U.style.transform=`translate3d(0,0,0) scaleX(${R}) scaleY(${D})`,U.style.transitionDuration=`${t.params.speed}ms`})}m.type==="custom"&&m.renderCustom?(A.innerHTML=m.renderCustom(t,S+1,T),E===0&&i("paginationRender",A)):(E===0&&i("paginationRender",A),i("paginationUpdate",A)),t.params.watchOverflow&&t.enabled&&A.classList[t.isLocked?"add":"remove"](m.lockClass)})}function g(){const h=t.params.pagination;if(l())return;const m=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.grid&&t.params.grid.rows>1?t.slides.length/Math.ceil(t.params.grid.rows):t.slides.length;let w=t.pagination.el;w=Ue(w);let S="";if(h.type==="bullets"){let j=t.params.loop?Math.ceil(m/t.params.slidesPerGroup):t.snapGrid.length;t.params.freeMode&&t.params.freeMode.enabled&&j>m&&(j=m);for(let C=0;C<j;C+=1)h.renderBullet?S+=h.renderBullet.call(t,C,h.bulletClass):S+=`<${h.bulletElement} ${t.isElement?'part="bullet"':""} class="${h.bulletClass}"></${h.bulletElement}>`}h.type==="fraction"&&(h.renderFraction?S=h.renderFraction.call(t,h.currentClass,h.totalClass):S=`<span class="${h.currentClass}"></span> / <span class="${h.totalClass}"></span>`),h.type==="progressbar"&&(h.renderProgressbar?S=h.renderProgressbar.call(t,h.progressbarFillClass):S=`<span class="${h.progressbarFillClass}"></span>`),t.pagination.bullets=[],w.forEach(j=>{h.type!=="custom"&&(j.innerHTML=S||""),h.type==="bullets"&&t.pagination.bullets.push(...j.querySelectorAll(da(h.bulletClass)))}),h.type!=="custom"&&i("paginationRender",w[0])}function x(){t.params.pagination=Wy(t,t.originalParams.pagination,t.params.pagination,{el:"swiper-pagination"});const h=t.params.pagination;if(!h.el)return;let m;typeof h.el=="string"&&t.isElement&&(m=t.el.querySelector(h.el)),!m&&typeof h.el=="string"&&(m=[...document.querySelectorAll(h.el)]),m||(m=h.el),!(!m||m.length===0)&&(t.params.uniqueNavElements&&typeof h.el=="string"&&Array.isArray(m)&&m.length>1&&(m=[...t.el.querySelectorAll(h.el)],m.length>1&&(m=m.filter(w=>Oy(w,".swiper")[0]===t.el)[0])),Array.isArray(m)&&m.length===1&&(m=m[0]),Object.assign(t.pagination,{el:m}),m=Ue(m),m.forEach(w=>{h.type==="bullets"&&h.clickable&&w.classList.add(...(h.clickableClass||"").split(" ")),w.classList.add(h.modifierClass+h.type),w.classList.add(t.isHorizontal()?h.horizontalClass:h.verticalClass),h.type==="bullets"&&h.dynamicBullets&&(w.classList.add(`${h.modifierClass}${h.type}-dynamic`),s=0,h.dynamicMainBullets<1&&(h.dynamicMainBullets=1)),h.type==="progressbar"&&h.progressbarOpposite&&w.classList.add(h.progressbarOppositeClass),h.clickable&&w.addEventListener("click",p),t.enabled||w.classList.add(h.lockClass)}))}function y(){const h=t.params.pagination;if(l())return;let m=t.pagination.el;m&&(m=Ue(m),m.forEach(w=>{w.classList.remove(h.hiddenClass),w.classList.remove(h.modifierClass+h.type),w.classList.remove(t.isHorizontal()?h.horizontalClass:h.verticalClass),h.clickable&&(w.classList.remove(...(h.clickableClass||"").split(" ")),w.removeEventListener("click",p))})),t.pagination.bullets&&t.pagination.bullets.forEach(w=>w.classList.remove(...h.bulletActiveClass.split(" ")))}r("changeDirection",()=>{if(!t.pagination||!t.pagination.el)return;const h=t.params.pagination;let{el:m}=t.pagination;m=Ue(m),m.forEach(w=>{w.classList.remove(h.horizontalClass,h.verticalClass),w.classList.add(t.isHorizontal()?h.horizontalClass:h.verticalClass)})}),r("init",()=>{t.params.pagination.enabled===!1?v():(x(),g(),f())}),r("activeIndexChange",()=>{typeof t.snapIndex>"u"&&f()}),r("snapIndexChange",()=>{f()}),r("snapGridLengthChange",()=>{g(),f()}),r("destroy",()=>{y()}),r("enable disable",()=>{let{el:h}=t.pagination;h&&(h=Ue(h),h.forEach(m=>m.classList[t.enabled?"remove":"add"](t.params.pagination.lockClass)))}),r("lock unlock",()=>{f()}),r("click",(h,m)=>{const w=m.target,S=Ue(t.pagination.el);if(t.params.pagination.el&&t.params.pagination.hideOnClick&&S&&S.length>0&&!w.classList.contains(t.params.pagination.bulletClass)){if(t.navigation&&(t.navigation.nextEl&&w===t.navigation.nextEl||t.navigation.prevEl&&w===t.navigation.prevEl))return;const j=S[0].classList.contains(t.params.pagination.hiddenClass);i(j===!0?"paginationShow":"paginationHide"),S.forEach(C=>C.classList.toggle(t.params.pagination.hiddenClass))}});const b=()=>{t.el.classList.remove(t.params.pagination.paginationDisabledClass);let{el:h}=t.pagination;h&&(h=Ue(h),h.forEach(m=>m.classList.remove(t.params.pagination.paginationDisabledClass))),x(),g(),f()},v=()=>{t.el.classList.add(t.params.pagination.paginationDisabledClass);let{el:h}=t.pagination;h&&(h=Ue(h),h.forEach(m=>m.classList.add(t.params.pagination.paginationDisabledClass))),y()};Object.assign(t.pagination,{enable:b,disable:v,render:g,update:f,init:x,destroy:y})}function Nn(e){let{swiper:t,extendParams:n,on:r,emit:i,params:a}=e;t.autoplay={running:!1,paused:!1,timeLeft:0},n({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let o,s,l=a&&a.autoplay?a.autoplay.delay:3e3,u=a&&a.autoplay?a.autoplay.delay:3e3,d,p=new Date().getTime(),f,g,x,y,b,v,h;function m(L){!t||t.destroyed||!t.wrapperEl||L.target===t.wrapperEl&&(t.wrapperEl.removeEventListener("transitionend",m),!(h||L.detail&&L.detail.bySwiperTouchMove)&&E())}const w=()=>{if(t.destroyed||!t.autoplay.running)return;t.autoplay.paused?f=!0:f&&(u=d,f=!1);const L=t.autoplay.paused?d:p+u-new Date().getTime();t.autoplay.timeLeft=L,i("autoplayTimeLeft",L,L/l),s=requestAnimationFrame(()=>{w()})},S=()=>{let L;return t.virtual&&t.params.virtual.enabled?L=t.slides.filter(B=>B.classList.contains("swiper-slide-active"))[0]:L=t.slides[t.activeIndex],L?parseInt(L.getAttribute("data-swiper-autoplay"),10):void 0},j=L=>{if(t.destroyed||!t.autoplay.running)return;cancelAnimationFrame(s),w();let N=typeof L>"u"?t.params.autoplay.delay:L;l=t.params.autoplay.delay,u=t.params.autoplay.delay;const B=S();!Number.isNaN(B)&&B>0&&typeof L>"u"&&(N=B,l=B,u=B),d=N;const K=t.params.speed,Z=()=>{!t||t.destroyed||(t.params.autoplay.reverseDirection?!t.isBeginning||t.params.loop||t.params.rewind?(t.slidePrev(K,!0,!0),i("autoplay")):t.params.autoplay.stopOnLastSlide||(t.slideTo(t.slides.length-1,K,!0,!0),i("autoplay")):!t.isEnd||t.params.loop||t.params.rewind?(t.slideNext(K,!0,!0),i("autoplay")):t.params.autoplay.stopOnLastSlide||(t.slideTo(0,K,!0,!0),i("autoplay")),t.params.cssMode&&(p=new Date().getTime(),requestAnimationFrame(()=>{j()})))};return N>0?(clearTimeout(o),o=setTimeout(()=>{Z()},N)):requestAnimationFrame(()=>{Z()}),N},C=()=>{p=new Date().getTime(),t.autoplay.running=!0,j(),i("autoplayStart")},T=()=>{t.autoplay.running=!1,clearTimeout(o),cancelAnimationFrame(s),i("autoplayStop")},A=(L,N)=>{if(t.destroyed||!t.autoplay.running)return;clearTimeout(o),L||(v=!0);const B=()=>{i("autoplayPause"),t.params.autoplay.waitForTransition?t.wrapperEl.addEventListener("transitionend",m):E()};if(t.autoplay.paused=!0,N){b&&(d=t.params.autoplay.delay),b=!1,B();return}d=(d||t.params.autoplay.delay)-(new Date().getTime()-p),!(t.isEnd&&d<0&&!t.params.loop)&&(d<0&&(d=0),B())},E=()=>{t.isEnd&&d<0&&!t.params.loop||t.destroyed||!t.autoplay.running||(p=new Date().getTime(),v?(v=!1,j(d)):j(),t.autoplay.paused=!1,i("autoplayResume"))},P=()=>{if(t.destroyed||!t.autoplay.running)return;const L=An();L.visibilityState==="hidden"&&(v=!0,A(!0)),L.visibilityState==="visible"&&E()},M=L=>{L.pointerType==="mouse"&&(v=!0,h=!0,!(t.animating||t.autoplay.paused)&&A(!0))},R=L=>{L.pointerType==="mouse"&&(h=!1,t.autoplay.paused&&E())},D=()=>{t.params.autoplay.pauseOnMouseEnter&&(t.el.addEventListener("pointerenter",M),t.el.addEventListener("pointerleave",R))},U=()=>{t.el&&typeof t.el!="string"&&(t.el.removeEventListener("pointerenter",M),t.el.removeEventListener("pointerleave",R))},Q=()=>{An().addEventListener("visibilitychange",P)},Y=()=>{An().removeEventListener("visibilitychange",P)};r("init",()=>{t.params.autoplay.enabled&&(D(),Q(),C())}),r("destroy",()=>{U(),Y(),t.autoplay.running&&T()}),r("_freeModeStaticRelease",()=>{(x||v)&&E()}),r("_freeModeNoMomentumRelease",()=>{t.params.autoplay.disableOnInteraction?T():A(!0,!0)}),r("beforeTransitionStart",(L,N,B)=>{t.destroyed||!t.autoplay.running||(B||!t.params.autoplay.disableOnInteraction?A(!0,!0):T())}),r("sliderFirstMove",()=>{if(!(t.destroyed||!t.autoplay.running)){if(t.params.autoplay.disableOnInteraction){T();return}g=!0,x=!1,v=!1,y=setTimeout(()=>{v=!0,x=!0,A(!0)},200)}}),r("touchEnd",()=>{if(!(t.destroyed||!t.autoplay.running||!g)){if(clearTimeout(y),clearTimeout(o),t.params.autoplay.disableOnInteraction){x=!1,g=!1;return}x&&t.params.cssMode&&E(),x=!1,g=!1}}),r("slideChange",()=>{t.destroyed||!t.autoplay.running||(b=!0)}),Object.assign(t.autoplay,{start:C,stop:T,pause:A,resume:E})}function f_(e){const{effect:t,swiper:n,on:r,setTranslate:i,setTransition:a,overwriteParams:o,perspective:s,recreateShadows:l,getEffectParams:u}=e;r("beforeInit",()=>{if(n.params.effect!==t)return;n.classNames.push(`${n.params.containerModifierClass}${t}`),s&&s()&&n.classNames.push(`${n.params.containerModifierClass}3d`);const p=o?o():{};Object.assign(n.params,p),Object.assign(n.originalParams,p)}),r("setTranslate",()=>{n.params.effect===t&&i()}),r("setTransition",(p,f)=>{n.params.effect===t&&a(f)}),r("transitionEnd",()=>{if(n.params.effect===t&&l){if(!u||!u().slideShadows)return;n.slides.forEach(p=>{p.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(f=>f.remove())}),l()}});let d;r("virtualUpdate",()=>{n.params.effect===t&&(n.slides.length||(d=!0),requestAnimationFrame(()=>{d&&n.slides&&n.slides.length&&(i(),d=!1)}))})}function h_(e,t){const n=ff(t);return n!==t&&(n.style.backfaceVisibility="hidden",n.style["-webkit-backface-visibility"]="hidden"),n}function R0(e,t,n){const r=`swiper-slide-shadow${n?`-${n}`:""}${` swiper-slide-shadow-${e}`}`,i=ff(t);let a=i.querySelector(`.${r.split(" ").join(".")}`);return a||(a=ao("div",r.split(" ")),i.append(a)),a}function m_(e){let{swiper:t,extendParams:n,on:r}=e;n({coverflowEffect:{rotate:50,stretch:0,depth:100,scale:1,modifier:1,slideShadows:!0}}),f_({effect:"coverflow",swiper:t,on:r,setTranslate:()=>{const{width:o,height:s,slides:l,slidesSizesGrid:u}=t,d=t.params.coverflowEffect,p=t.isHorizontal(),f=t.translate,g=p?-f+o/2:-f+s/2,x=p?d.rotate:-d.rotate,y=d.depth,b=Gj(t);for(let v=0,h=l.length;v<h;v+=1){const m=l[v],w=u[v],S=m.swiperSlideOffset,j=(g-S-w/2)/w,C=typeof d.modifier=="function"?d.modifier(j):j*d.modifier;let T=p?x*C:0,A=p?0:x*C,E=-y*Math.abs(C),P=d.stretch;typeof P=="string"&&P.indexOf("%")!==-1&&(P=parseFloat(d.stretch)/100*w);let M=p?0:P*C,R=p?P*C:0,D=1-(1-d.scale)*Math.abs(C);Math.abs(R)<.001&&(R=0),Math.abs(M)<.001&&(M=0),Math.abs(E)<.001&&(E=0),Math.abs(T)<.001&&(T=0),Math.abs(A)<.001&&(A=0),Math.abs(D)<.001&&(D=0);const U=`translate3d(${R}px,${M}px,${E}px)  rotateX(${b(A)}deg) rotateY(${b(T)}deg) scale(${D})`,Q=h_(d,m);if(Q.style.transform=U,m.style.zIndex=-Math.abs(Math.round(C))+1,d.slideShadows){let Y=p?m.querySelector(".swiper-slide-shadow-left"):m.querySelector(".swiper-slide-shadow-top"),L=p?m.querySelector(".swiper-slide-shadow-right"):m.querySelector(".swiper-slide-shadow-bottom");Y||(Y=R0("coverflow",m,p?"left":"top")),L||(L=R0("coverflow",m,p?"right":"bottom")),Y&&(Y.style.opacity=C>0?C:0),L&&(L.style.opacity=-C>0?-C:0)}}},setTransition:o=>{t.slides.map(l=>ff(l)).forEach(l=>{l.style.transitionDuration=`${o}ms`,l.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(u=>{u.style.transitionDuration=`${o}ms`})})},perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0})})}const g_=_.button`
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
`,mf=({text:e,onClick:t,backDefine:n,colorDefine:r})=>c.jsxs(g_,{id:"clickwpp",backDefine:n,colorDefine:r,onClick:t,children:[e,c.jsx(nf,{className:"icon"})]}),v_=Ki`
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
`,x_=Vn`
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
`,y_=_.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px 0 20px 0;

    @media (max-width: 768px){
        border-radius: 0 15px 0 20px;
    }
`,w_=_.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  border-radius: 0 20px 20px 0;
  animation: ${x_} 5s ease-in-out infinite;
  background-image: ${({backgroundImage:e})=>`url(${e})`};
  background-size: cover;
  background-position: center;
`,b_=_.div`
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
`,S_=_.div`
    position: absolute;
    bottom: 20px;
    left: 20px;
    color: var(--color--white);
    font-family: Arial, sans-serif;
`,k_=_.h2`
    font-size: 24px;
    font-weight: bold;
    font-family: var(--font--comfortaa);
`,j_=_.p`
    font-size: 16px;
    margin: 5px 0;
    font-family: var(--font--avenir);
`,__=_.div`
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
`,T_=_.div`
    width: 100%;
    max-width: 60%;
    margin: 0 auto;

    @media (max-width: 640px) {
        max-width: 100%;
    }
`,D0=({content:e=[],contentType:t="image",spaceBetween:n=10,slidesPerView:r=1,height:i="300px",autoplayDelay:a=3e3,showPagination:o=!0,showNavigation:s=!0})=>c.jsxs(T_,{children:[c.jsx(v_,{}),c.jsx(Jt,{modules:[vr,xr,Nn],navigation:s,pagination:o?{clickable:!0}:!1,spaceBetween:n,loop:!0,slidesPerView:r,autoplay:{delay:a,disableOnInteraction:!1,pauseOnMouseEnter:!0},style:{height:i},breakpoints:{640:{slidesPerView:1,spaceBetween:10,height:"200px"},768:{slidesPerView:1,spaceBetween:20,height:"250px"},1024:{slidesPerView:1,spaceBetween:30,height:"300px"}},children:e.map((l,u)=>c.jsx(en,{children:t==="image"?c.jsx(y_,{src:l.src,loading:"lazy",alt:l.alt||`Slide ${u+1}`}):c.jsxs(w_,{backgroundImage:l.backgroundImage,children:[c.jsx(b_,{}),c.jsxs(S_,{children:[c.jsx(k_,{children:l.title}),c.jsx(j_,{children:l.subtitle}),c.jsx(__,{children:l.features.map((d,p)=>c.jsxs("span",{children:[d.icon," ",d.text]},p))}),c.jsx(mf,{text:"Conhecer todas as acomodações"})]})]})},u))})]}),Ci=_.button`
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
`,V0=_.svg`
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

    ${Ci}:hover &.arr-1 {
        right: -25%;
    }

    ${Ci}:hover &.arr-2 {
        left: 16px;
    }

    ${Ci}:hover & {
        fill: var(--color--white);
    }
`,C_=_.span`
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

    ${Ci}:hover & {
        width: 220px;
        height: 220px;
        opacity: 1;
        color: var(--color--white);
    }
`,E_=_.span`
    position: relative;
    z-index: 1;
    transform: translateX(-12px);
    transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);

    ${Ci}:hover & {
        transform: translateX(12px);
        color: var(--color--white);
    }
`,ut=({text:e,onClick:t,color:n,backgroundColor:r,borderColor:i,hoverColor:a})=>c.jsxs(Ci,{id:"clickwpp",onClick:t,color:n,background:r,borderColor:i,hoverColor:a,children:[c.jsx(V0,{className:"arr-2",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:c.jsx("path",{d:"M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"})}),c.jsx(E_,{id:"clickwpp",children:e}),c.jsx(C_,{}),c.jsx(V0,{className:"arr-1",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:c.jsx("path",{d:"M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"})})]}),P_=Vn`
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
`,z_=_.div`
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
    animation: ${P_} 8s ease-in-out infinite;
    pointer-events: none;

    @media (max-width: 768px) {
      animation: none;
      border-top: none;
      border-radius: 0 0 35px 0;
      border: 1px solid var(--color--black);
    }
  }
`,A_=_.h1`
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
`,M_=_.p`
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
`,L_=_.div`
  display: flex;
  width: 100%;
  gap: 25px;

  @media (max-width:768px){
    gap: 15px;
  }
`,N0=({text:e,title:t,borderColor:n,buttonColor:r,buttonHover:i,buttonBorder:a,targetPage:o})=>{const s=kl(),l=()=>{s(o)},u=()=>{window.open("https://wa.link/dojlwi","_blank")};return c.jsxs(z_,{borderColor:n,children:[c.jsx(A_,{children:t}),c.jsx(M_,{children:e}),c.jsxs(L_,{children:[c.jsx(ut,{onClick:l,text:"Saber mais",backgroundColor:r,borderColor:a,hoverColor:i,border:"1px solid",color:"var(--color--black)"}),c.jsx(ut,{onClick:u,text:"Fazer reserva!",backgroundColor:"transparent",borderColor:a,hoverColor:i,border:"1px solid",color:"var(--color--black)"})]})]})};function O_(e){return ee({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z"},child:[]}]})(e)}function gf(e){return ee({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M7 11v2h10v-2c0-1.86 1.28-3.41 3-3.86V6c0-1.65-1.35-3-3-3H7C5.35 3 4 4.35 4 6v1.14c1.72.45 3 2 3 3.86z"},child:[]},{tag:"path",attr:{d:"M21 9c-1.1 0-2 .9-2 2v4H5v-4c0-1.1-.9-2-2-2s-2 .9-2 2v5c0 1.65 1.35 3 3 3v1c0 .55.45 1 1 1s1-.45 1-1v-1h12v1c0 .55.45 1 1 1s1-.45 1-1v-1c1.65 0 3-1.35 3-3v-5c0-1.1-.9-2-2-2z"},child:[]}]})(e)}function Ke(e){return ee({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M22 9 12 2 2 9h9v13h2V9z"},child:[]},{tag:"path",attr:{d:"m4.14 12-1.96.37.82 4.37V22h2l.02-4H7v4h2v-6H4.9zM19.1 16H15v6h2v-4h1.98l.02 4h2v-5.26l.82-4.37-1.96-.37z"},child:[]}]})(e)}function I_(e){return ee({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"circle",attr:{cx:"4.5",cy:"9.5",r:"2.5"},child:[]},{tag:"circle",attr:{cx:"9",cy:"5.5",r:"2.5"},child:[]},{tag:"circle",attr:{cx:"15",cy:"5.5",r:"2.5"},child:[]},{tag:"circle",attr:{cx:"19.5",cy:"9.5",r:"2.5"},child:[]},{tag:"path",attr:{d:"M17.34 14.86c-.87-1.02-1.6-1.89-2.48-2.91-.46-.54-1.05-1.08-1.75-1.32-.11-.04-.22-.07-.33-.09-.25-.04-.52-.04-.78-.04s-.53 0-.79.05c-.11.02-.22.05-.33.09-.7.24-1.28.78-1.75 1.32-.87 1.02-1.6 1.89-2.48 2.91-1.31 1.31-2.92 2.76-2.62 4.79.29 1.02 1.02 2.03 2.33 2.32.73.15 3.06-.44 5.54-.44h.18c2.48 0 4.81.58 5.54.44 1.31-.29 2.04-1.31 2.33-2.32.31-2.04-1.3-3.49-2.61-4.8z"},child:[]}]})(e)}function wt(e){return ee({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"m10 17 5-5-5-5v10z"},child:[]}]})(e)}function R_(e){return ee({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5"},child:[]},{tag:"path",attr:{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"},child:[]},{tag:"line",attr:{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5"},child:[]}]})(e)}function D_(e){return ee({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m9 9 5 12 1.774-5.226L21 14 9 9z"},child:[]},{tag:"path",attr:{d:"m16.071 16.071 4.243 4.243"},child:[]},{tag:"path",attr:{d:"m7.188 2.239.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656-2.12 2.122"},child:[]}]})(e)}const V_=_.button`
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
`,Gy=_.div`
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
`,N_=_(Gy)`
  position: absolute;
  inset: 0;
  background-color: ${({hoverColor:e})=>e||"var(--color--blue)"};
  transform: translate(0%, 100%);
`,F_=_.span`
  color: ${({textColor:e})=>e||"var(--color--black)"};
`,$_=_.span`
  color: ${({hoverTextColor:e})=>e||"var(--color--white)"};
`,Xi=({text:e="Quick View",text2:t="Clique e reserve",borderColor:n,textColor:r,hoverColor:i,hoverTextColor:a})=>{const o=()=>{window.open("https://wa.link/dojlwi","_blank")};return c.jsxs(V_,{borderColor:n,textColor:r,onClick:o,id:"clickwpp",children:[c.jsxs(Gy,{className:"default-btn",children:[c.jsx(O_,{size:15,color:r||"var(--color--black)"}),c.jsx(F_,{textColor:r,children:e})]}),c.jsxs(N_,{className:"hover-btn",hoverColor:i,id:"clickwpp",children:[c.jsx(D_,{size:15,color:a||"var(--color--white)"}),c.jsx($_,{hoverTextColor:a,children:t})]})]})};var Yy={exports:{}};(function(e,t){(function(n,r){e.exports=r()})(K0,function(){return function(n){function r(a){if(i[a])return i[a].exports;var o=i[a]={exports:{},id:a,loaded:!1};return n[a].call(o.exports,o,o.exports,r),o.loaded=!0,o.exports}var i={};return r.m=n,r.c=i,r.p="dist/",r(0)}([function(n,r,i){function a(D){return D&&D.__esModule?D:{default:D}}var o=Object.assign||function(D){for(var U=1;U<arguments.length;U++){var Q=arguments[U];for(var Y in Q)Object.prototype.hasOwnProperty.call(Q,Y)&&(D[Y]=Q[Y])}return D},s=i(1),l=(a(s),i(6)),u=a(l),d=i(7),p=a(d),f=i(8),g=a(f),x=i(9),y=a(x),b=i(10),v=a(b),h=i(11),m=a(h),w=i(14),S=a(w),j=[],C=!1,T={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},A=function(){var D=arguments.length>0&&arguments[0]!==void 0&&arguments[0];if(D&&(C=!0),C)return j=(0,m.default)(j,T),(0,v.default)(j,T.once),j},E=function(){j=(0,S.default)(),A()},P=function(){j.forEach(function(D,U){D.node.removeAttribute("data-aos"),D.node.removeAttribute("data-aos-easing"),D.node.removeAttribute("data-aos-duration"),D.node.removeAttribute("data-aos-delay")})},M=function(D){return D===!0||D==="mobile"&&y.default.mobile()||D==="phone"&&y.default.phone()||D==="tablet"&&y.default.tablet()||typeof D=="function"&&D()===!0},R=function(D){T=o(T,D),j=(0,S.default)();var U=document.all&&!window.atob;return M(T.disable)||U?P():(T.disableMutationObserver||g.default.isSupported()||(console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),T.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",T.easing),document.querySelector("body").setAttribute("data-aos-duration",T.duration),document.querySelector("body").setAttribute("data-aos-delay",T.delay),T.startEvent==="DOMContentLoaded"&&["complete","interactive"].indexOf(document.readyState)>-1?A(!0):T.startEvent==="load"?window.addEventListener(T.startEvent,function(){A(!0)}):document.addEventListener(T.startEvent,function(){A(!0)}),window.addEventListener("resize",(0,p.default)(A,T.debounceDelay,!0)),window.addEventListener("orientationchange",(0,p.default)(A,T.debounceDelay,!0)),window.addEventListener("scroll",(0,u.default)(function(){(0,v.default)(j,T.once)},T.throttleDelay)),T.disableMutationObserver||g.default.ready("[data-aos]",E),j)};n.exports={init:R,refresh:A,refreshHard:E}},function(n,r){},,,,,function(n,r){(function(i){function a(M,R,D){function U(q){var te=he,le=_e;return he=_e=void 0,V=q,ce=M.apply(le,te)}function Q(q){return V=q,z=setTimeout(N,R),I?U(q):ce}function Y(q){var te=q-O,le=q-V,fe=R-te;return G?E(fe,pe-le):fe}function L(q){var te=q-O,le=q-V;return O===void 0||te>=R||te<0||G&&le>=pe}function N(){var q=P();return L(q)?B(q):void(z=setTimeout(N,Y(q)))}function B(q){return z=void 0,$&&he?U(q):(he=_e=void 0,ce)}function K(){z!==void 0&&clearTimeout(z),V=0,he=O=_e=z=void 0}function Z(){return z===void 0?ce:B(P())}function we(){var q=P(),te=L(q);if(he=arguments,_e=this,O=q,te){if(z===void 0)return Q(O);if(G)return z=setTimeout(N,R),U(O)}return z===void 0&&(z=setTimeout(N,R)),ce}var he,_e,pe,ce,z,O,V=0,I=!1,G=!1,$=!0;if(typeof M!="function")throw new TypeError(f);return R=d(R)||0,s(D)&&(I=!!D.leading,G="maxWait"in D,pe=G?A(d(D.maxWait)||0,R):pe,$="trailing"in D?!!D.trailing:$),we.cancel=K,we.flush=Z,we}function o(M,R,D){var U=!0,Q=!0;if(typeof M!="function")throw new TypeError(f);return s(D)&&(U="leading"in D?!!D.leading:U,Q="trailing"in D?!!D.trailing:Q),a(M,R,{leading:U,maxWait:R,trailing:Q})}function s(M){var R=typeof M>"u"?"undefined":p(M);return!!M&&(R=="object"||R=="function")}function l(M){return!!M&&(typeof M>"u"?"undefined":p(M))=="object"}function u(M){return(typeof M>"u"?"undefined":p(M))=="symbol"||l(M)&&T.call(M)==x}function d(M){if(typeof M=="number")return M;if(u(M))return g;if(s(M)){var R=typeof M.valueOf=="function"?M.valueOf():M;M=s(R)?R+"":R}if(typeof M!="string")return M===0?M:+M;M=M.replace(y,"");var D=v.test(M);return D||h.test(M)?m(M.slice(2),D?2:8):b.test(M)?g:+M}var p=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(M){return typeof M}:function(M){return M&&typeof Symbol=="function"&&M.constructor===Symbol&&M!==Symbol.prototype?"symbol":typeof M},f="Expected a function",g=NaN,x="[object Symbol]",y=/^\s+|\s+$/g,b=/^[-+]0x[0-9a-f]+$/i,v=/^0b[01]+$/i,h=/^0o[0-7]+$/i,m=parseInt,w=(typeof i>"u"?"undefined":p(i))=="object"&&i&&i.Object===Object&&i,S=(typeof self>"u"?"undefined":p(self))=="object"&&self&&self.Object===Object&&self,j=w||S||Function("return this")(),C=Object.prototype,T=C.toString,A=Math.max,E=Math.min,P=function(){return j.Date.now()};n.exports=o}).call(r,function(){return this}())},function(n,r){(function(i){function a(P,M,R){function D($){var q=we,te=he;return we=he=void 0,O=$,pe=P.apply(te,q)}function U($){return O=$,ce=setTimeout(L,M),V?D($):pe}function Q($){var q=$-z,te=$-O,le=M-q;return I?A(le,_e-te):le}function Y($){var q=$-z,te=$-O;return z===void 0||q>=M||q<0||I&&te>=_e}function L(){var $=E();return Y($)?N($):void(ce=setTimeout(L,Q($)))}function N($){return ce=void 0,G&&we?D($):(we=he=void 0,pe)}function B(){ce!==void 0&&clearTimeout(ce),O=0,we=z=he=ce=void 0}function K(){return ce===void 0?pe:N(E())}function Z(){var $=E(),q=Y($);if(we=arguments,he=this,z=$,q){if(ce===void 0)return U(z);if(I)return ce=setTimeout(L,M),D(z)}return ce===void 0&&(ce=setTimeout(L,M)),pe}var we,he,_e,pe,ce,z,O=0,V=!1,I=!1,G=!0;if(typeof P!="function")throw new TypeError(p);return M=u(M)||0,o(R)&&(V=!!R.leading,I="maxWait"in R,_e=I?T(u(R.maxWait)||0,M):_e,G="trailing"in R?!!R.trailing:G),Z.cancel=B,Z.flush=K,Z}function o(P){var M=typeof P>"u"?"undefined":d(P);return!!P&&(M=="object"||M=="function")}function s(P){return!!P&&(typeof P>"u"?"undefined":d(P))=="object"}function l(P){return(typeof P>"u"?"undefined":d(P))=="symbol"||s(P)&&C.call(P)==g}function u(P){if(typeof P=="number")return P;if(l(P))return f;if(o(P)){var M=typeof P.valueOf=="function"?P.valueOf():P;P=o(M)?M+"":M}if(typeof P!="string")return P===0?P:+P;P=P.replace(x,"");var R=b.test(P);return R||v.test(P)?h(P.slice(2),R?2:8):y.test(P)?f:+P}var d=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(P){return typeof P}:function(P){return P&&typeof Symbol=="function"&&P.constructor===Symbol&&P!==Symbol.prototype?"symbol":typeof P},p="Expected a function",f=NaN,g="[object Symbol]",x=/^\s+|\s+$/g,y=/^[-+]0x[0-9a-f]+$/i,b=/^0b[01]+$/i,v=/^0o[0-7]+$/i,h=parseInt,m=(typeof i>"u"?"undefined":d(i))=="object"&&i&&i.Object===Object&&i,w=(typeof self>"u"?"undefined":d(self))=="object"&&self&&self.Object===Object&&self,S=m||w||Function("return this")(),j=Object.prototype,C=j.toString,T=Math.max,A=Math.min,E=function(){return S.Date.now()};n.exports=a}).call(r,function(){return this}())},function(n,r){function i(d){var p=void 0,f=void 0;for(p=0;p<d.length;p+=1)if(f=d[p],f.dataset&&f.dataset.aos||f.children&&i(f.children))return!0;return!1}function a(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function o(){return!!a()}function s(d,p){var f=window.document,g=a(),x=new g(l);u=p,x.observe(f.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function l(d){d&&d.forEach(function(p){var f=Array.prototype.slice.call(p.addedNodes),g=Array.prototype.slice.call(p.removedNodes),x=f.concat(g);if(i(x))return u()})}Object.defineProperty(r,"__esModule",{value:!0});var u=function(){};r.default={isSupported:o,ready:s}},function(n,r){function i(f,g){if(!(f instanceof g))throw new TypeError("Cannot call a class as a function")}function a(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(r,"__esModule",{value:!0});var o=function(){function f(g,x){for(var y=0;y<x.length;y++){var b=x[y];b.enumerable=b.enumerable||!1,b.configurable=!0,"value"in b&&(b.writable=!0),Object.defineProperty(g,b.key,b)}}return function(g,x,y){return x&&f(g.prototype,x),y&&f(g,y),g}}(),s=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,l=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,u=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,d=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,p=function(){function f(){i(this,f)}return o(f,[{key:"phone",value:function(){var g=a();return!(!s.test(g)&&!l.test(g.substr(0,4)))}},{key:"mobile",value:function(){var g=a();return!(!u.test(g)&&!d.test(g.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),f}();r.default=new p},function(n,r){Object.defineProperty(r,"__esModule",{value:!0});var i=function(o,s,l){var u=o.node.getAttribute("data-aos-once");s>o.position?o.node.classList.add("aos-animate"):typeof u<"u"&&(u==="false"||!l&&u!=="true")&&o.node.classList.remove("aos-animate")},a=function(o,s){var l=window.pageYOffset,u=window.innerHeight;o.forEach(function(d,p){i(d,u+l,s)})};r.default=a},function(n,r,i){function a(u){return u&&u.__esModule?u:{default:u}}Object.defineProperty(r,"__esModule",{value:!0});var o=i(12),s=a(o),l=function(u,d){return u.forEach(function(p,f){p.node.classList.add("aos-init"),p.position=(0,s.default)(p.node,d.offset)}),u};r.default=l},function(n,r,i){function a(u){return u&&u.__esModule?u:{default:u}}Object.defineProperty(r,"__esModule",{value:!0});var o=i(13),s=a(o),l=function(u,d){var p=0,f=0,g=window.innerHeight,x={offset:u.getAttribute("data-aos-offset"),anchor:u.getAttribute("data-aos-anchor"),anchorPlacement:u.getAttribute("data-aos-anchor-placement")};switch(x.offset&&!isNaN(x.offset)&&(f=parseInt(x.offset)),x.anchor&&document.querySelectorAll(x.anchor)&&(u=document.querySelectorAll(x.anchor)[0]),p=(0,s.default)(u).top,x.anchorPlacement){case"top-bottom":break;case"center-bottom":p+=u.offsetHeight/2;break;case"bottom-bottom":p+=u.offsetHeight;break;case"top-center":p+=g/2;break;case"bottom-center":p+=g/2+u.offsetHeight;break;case"center-center":p+=g/2+u.offsetHeight/2;break;case"top-top":p+=g;break;case"bottom-top":p+=u.offsetHeight+g;break;case"center-top":p+=u.offsetHeight/2+g}return x.anchorPlacement||x.offset||isNaN(d)||(f=d),p+f};r.default=l},function(n,r){Object.defineProperty(r,"__esModule",{value:!0});var i=function(a){for(var o=0,s=0;a&&!isNaN(a.offsetLeft)&&!isNaN(a.offsetTop);)o+=a.offsetLeft-(a.tagName!="BODY"?a.scrollLeft:0),s+=a.offsetTop-(a.tagName!="BODY"?a.scrollTop:0),a=a.offsetParent;return{top:s,left:o}};r.default=i},function(n,r){Object.defineProperty(r,"__esModule",{value:!0});var i=function(a){return a=a||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(a,function(o){return{node:o}})};r.default=i}])})})(Yy);var B_=Yy.exports;const Re=Hr(B_),q_=Ki`
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
`,H_=_.div`
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
`,U_=_.div`
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
`,W_=_.div`
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
`,G_=_.div`
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
`,Y_=_.h2`
    font-size: 24px;
    font-weight: bold;
    font-family: var(--font--comfortaa);
    margin: 0;
    margin-bottom: 15px;

    @media (max-width: 768px) {
        font-size: 26px;
        margin-bottom: 0;
    }
`,K_=_.p`
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
`,X_=({content:e=[],height:t="300px",width:n="100%",autoplayDelay:r=1500,showPagination:i=!0,showNavigation:a=!0})=>{const o=k.useRef([]);return k.useEffect(()=>{o.current&&o.current.forEach(s=>{s&&window.VanillaTilt.init(s,{max:2,speed:400,glare:!1})})},[]),c.jsxs(c.Fragment,{children:[c.jsx(q_,{}),c.jsx(Jt,{modules:[vr,xr,Nn,m_],effect:"coverflow",grabCursor:!0,centeredSlides:!0,loop:!0,slidesPerView:"auto",coverflowEffect:{rotate:50,stretch:50,depth:300,modifier:1,slideShadows:!0},navigation:a,pagination:i?{clickable:!0}:!1,autoplay:{delay:r,disableOnInteraction:!1,pauseOnMouseEnter:!0},breakpoints:{1024:{slidesPerView:2},768:{slidesPerView:2},0:{slidesPerView:1}},style:{width:n,height:t},children:e.map((s,l)=>c.jsx(en,{style:{width:"60%"},children:c.jsxs(H_,{ref:u=>o.current[l]=u,backgroundImage:s.backgroundImage,children:[c.jsx(G_,{children:s.topLeftText}),c.jsx(U_,{}),c.jsxs(W_,{"data-aos":"fade-up","data-aos-delay":"100",children:[c.jsx(Y_,{children:s.title}),c.jsx(K_,{children:s.description}),c.jsx(Xi,{text:"Reservar agora",text2:"Clique e reserve agora",borderColor:"var(--color--white)",textColor:"var(--color--white)",hoverColor:"var(--color--green)",hoverTextColor:"var(--color--black)"})]})]})},l))})]})},Q_=_(Oe.div)`
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
`,Z_=_(Oe.img)`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;

    &:hover {
        transform: scale(1.2) rotate(3deg); // Zoom e rotação ao passar o mouse
    }
`,J_=_(Oe.div)`
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
`,kd=({images:e=[],reverse:t=!1})=>c.jsx(Jt,{modules:[Nn],spaceBetween:0,loop:!0,autoplay:{delay:0,disableOnInteraction:!1,reverseDirection:t,stopOnLastSlide:!1,pauseOnMouseEnter:!0},speed:2e3,freeMode:!0,freeModeMomentum:!1,breakpoints:{320:{slidesPerView:3},768:{slidesPerView:4},1024:{slidesPerView:5}},children:e.map((n,r)=>c.jsx(en,{children:c.jsxs(Q_,{initial:{scale:.8,rotate:-5,opacity:0},animate:{scale:1,rotate:0,opacity:1},transition:{duration:.6,ease:"easeOut"},children:[c.jsx(Z_,{src:n.src,alt:n.alt||`Imagem ${r+1}`,initial:{scale:1},whileHover:{scale:1.2,rotate:3},transition:{duration:.3}}),c.jsx(J_,{initial:{y:30,opacity:0},animate:{y:0,opacity:1},transition:{duration:.7,delay:.4,ease:"backOut"},children:n.label})]})},r))}),eT=Vn`
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
`,tT=_.div`
    display: flex;
    flex-direction: column;
    height: auto;
    padding: 10px;
    background: var(--color--white);
    border-radius: 12px;
    overflow: hidden;
    width: 100%;
    animation: ${eT} 5s ease-in-out infinite;
    background-color: rgba(0, 0, 0, 0.1);

    @media (max-width: 768px){
        border: none;
        padding: 5px;
        background-color: rgba(0, 0, 0, 0.1);
        animation: none;
        border-radius: 15px 15px 5px 5px;
    }
`,nT=_.img`
    width: 100%;
    height: 220px;
    object-fit: cover;
    border-radius: 10px;

    @media (max-width: 768px){
        border: 2px solid var(--color--black);
        height: 320px;
    }
`,rT=_.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: #333;
`,iT=_.h3`
    font-size: 22px;
    font-weight: bold;
    font-family: var(--font--comfortaa);
    margin: 0;
`,aT=_.p`
    font-size: 14px;
    color: #777;
    font-family: var(--font--avenir);
    margin: 0;
`,oT=_.div`
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
`,sT=_.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
    font-size: 16px;
`,lT=_.p`
    font-size: 18px;
    font-family: var(--font--comfortaa);
    font-weight: bold;
    margin: 0;
    color: #333;

    & > span{
        font-size: 10px;
    }
`,vo=({events:e=[]})=>c.jsx(Jt,{modules:[vr,xr,Nn],autoplay:{delay:7e3,disableOnInteraction:!1,pauseOnMouseEnter:!0},spaceBetween:20,navigation:!0,pagination:!1,loop:!0,breakpoints:{1024:{slidesPerView:3},768:{slidesPerView:2},0:{slidesPerView:1}},children:e.map((t,n)=>c.jsx(en,{children:c.jsxs(tT,{"data-aos":"fade-up","data-aos-delay":"0",children:[c.jsx(nT,{src:t.image,alt:t.title,"data-aos":"fade-up","data-aos-delay":"100"}),c.jsxs(rT,{children:[c.jsx(iT,{"data-aos":"fade-up","data-aos-delay":"200",children:t.title}),c.jsx(aT,{"data-aos":"fade-down","data-aos-delay":"250",children:t.dateRange}),c.jsx(oT,{"data-aos":"fade-up","data-aos-delay":"300",children:t.features.map((r,i)=>c.jsxs("span",{"data-aos":"fade-up","data-aos-delay":"400",children:[r.icon," ",r.text]},i))}),c.jsx(sT,{children:c.jsxs(lT,{"data-aos":"fade-in","data-aos-delay":"500",children:["A partir de: ",c.jsx("span",{children:"10x"}),"R$",t.price]})}),c.jsx(Xi,{text:"Quero fazer minha reserva agora",text2:"Clique e reserve!",borderColor:"var(--color--black)",textColor:"var(--color--black)",hoverColor:"var(--color--black)",hoverTextColor:"var(--color--white)",onClick:()=>window.open("https://wa.link/dojlwi","_blank")})]})]})},n))});function cT(e){return ee({tag:"svg",attr:{viewBox:"0 0 1024 1024",fill:"currentColor",fillRule:"evenodd"},child:[{tag:"path",attr:{d:"M448 0C200.807 0 0 200.807 0 448s200.807 448 448 448 448-200.807 448-448S695.193 0 448 0m0 38.957c226.14 0 409.043 182.904 409.043 409.043 0 226.14-182.904 409.043-409.043 409.043-41.365 0-81.269-6.19-118.886-17.576 16.756-28.014 38.39-68.058 46.984-101.12 5.106-19.601 26.098-99.559 26.098-99.559 13.642 26.045 53.503 48.087 95.945 48.087 126.295 0 217.343-116.149 217.343-260.484 0-138.375-112.916-241.88-258.201-241.88-180.753 0-276.69 121.314-276.69 253.407 0 61.433 32.673 137.902 84.989 162.256 7.924 3.688 12.18 2.09 14-5.592 1.4-5.831 8.468-34.255 11.64-47.479 1.016-4.22.524-7.866-2.89-12.021-17.316-21.004-31.196-59.583-31.196-95.566 0-92.374 69.932-181.771 189.076-181.771 102.875 0 174.924 70.13 174.924 170.396 0 113.281-57.2 191.777-131.63 191.777-41.106 0-71.885-34.005-62.011-75.706 11.838-49.77 34.695-103.478 34.695-139.43 0-32.149-17.253-58.967-52.994-58.967-42.024 0-75.783 43.447-75.783 101.69 0 37.063 12.554 62.163 12.554 62.163s-41.511 175.51-49.114 208.174c-7.619 32.642-5.578 76.605-2.435 109.337C144.551 766.518 38.957 619.785 38.957 448 38.957 221.86 221.86 38.957 448 38.957",transform:"translate(64 64)"},child:[]}]})(e)}function uT(e){return ee({tag:"svg",attr:{viewBox:"0 0 1024 1024",fill:"currentColor",fillRule:"evenodd"},child:[{tag:"path",attr:{d:"M365.014.667C408.68 0 452.011.333 495.342 0c2.667 51 21 102.999 58.33 138.998 37.332 37 89.997 54 141.328 59.666v134.332c-47.998-1.667-96.33-11.667-139.994-32.333-19-8.667-36.665-19.667-53.998-31-.333 97.332.334 194.665-.666 291.663-2.667 46.666-18 93-44.998 131.332-43.665 64-119.328 105.665-196.992 106.999-47.664 2.666-95.329-10.334-135.994-34.333C55.028 725.658 7.696 652.992.697 574.993c-.667-16.667-1-33.333-.334-49.666 6-63.333 37.332-123.999 85.997-165.332 55.33-47.999 132.66-70.999 204.99-57.332.667 49.333-1.332 98.665-1.332 147.998-33-10.667-71.664-7.667-100.663 12.333-20.999 13.667-36.998 34.666-45.331 58.333-7 17-5 35.666-4.667 53.666 8 54.666 60.664 100.665 116.662 95.665 37.332-.333 72.997-22 92.33-53.666 6.332-11 13.332-22.333 13.665-35.333 3.334-59.666 2-118.998 2.334-178.664.333-134.332-.334-268.33.666-402.328",transform:"translate(165 112)"},child:[]}]})(e)}function dT(e){return ee({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"},child:[]}]})(e)}function pT(e){return ee({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M560 160A80 80 0 1 0 560 0a80 80 0 1 0 0 160zM55.9 512H381.1h75H578.9c33.8 0 61.1-27.4 61.1-61.1c0-11.2-3.1-22.2-8.9-31.8l-132-216.3C495 196.1 487.8 192 480 192s-15 4.1-19.1 10.7l-48.2 79L286.8 81c-6.6-10.6-18.3-17-30.8-17s-24.1 6.4-30.8 17L8.6 426.4C3 435.3 0 445.6 0 456.1C0 487 25 512 55.9 512z"},child:[]}]})(e)}function fT(e){return ee({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M16.2877 9.42773C15.413 7.97351 13.8195 7 12 7 9.23999 7 7 9.23999 7 12 7 14.76 9.23999 17 12 17 13.8195 17 15.413 16.0265 16.2877 14.5723L14.5729 13.5442C14.0483 14.4166 13.0927 15 12 15 10.3425 15 9 13.6575 9 12 9 10.3425 10.3425 9 12 9 13.093 9 14.0491 9.58386 14.5735 10.4568L16.2877 9.42773ZM22 12C22 6.47998 17.52 2 12 2 6.47998 2 2 6.47998 2 12 2 17.52 6.47998 22 12 22 17.52 22 22 17.52 22 12ZM4 12C4 7.57996 7.57996 4 12 4 16.42 4 20 7.57996 20 12 20 16.42 16.42 20 12 20 7.57996 20 4 16.42 4 12Z"},child:[]}]})(e)}const hT=_(Oe.button)`
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
`,mT=_(Oe.footer)`
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
`,gT=_.div`
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
`,vT=_.div`
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
`,xT=_.section`
    display: flex;
    width: 100%;
    height: 35vh;

    @media (max-width: 768px){
        height: auto;
        flex-direction: column;
        gap: 25px;
    }
`,yT=_.section`
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
`,wT=_.section`
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
`,bT=_.hr`
    width: 100%;
    margin-bottom: -50px;
`,ST=_.div`
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
`,yr=()=>{const e=k.useRef(null);O6(e,{once:!0});const[t,n]=k.useState(""),[r,i]=k.useState(""),[a,o]=k.useState(""),s=()=>`user_${Math.random().toString(36).substr(2,9)}_${Date.now()}`,l=()=>{const d=new URLSearchParams(window.location.search);return{utm_source:d.get("utm_source")||"organico",utm_medium:d.get("utm_medium")||"",utm_campaign:d.get("utm_campaign")||"",utm_term:d.get("utm_term")||"",utm_content:d.get("utm_content")||""}},u=async d=>{if(d.preventDefault(),!t||!r||!a){alert("Por favor, preencha todos os campos.");return}const f={id:s(),name:String(t).trim(),email:String(r).trim(),tel:String(a).trim(),conversion_url:window.location.href,...l()};try{const g=await fetch("https://hook.us1.make.com/e79ttwjdwv9soeppgqnu5rbnpk9l828e",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(f)}),x=await g.text();g.ok?(alert("Dados enviados com sucesso!"),n(""),i(""),o("")):(console.error("Erro de resposta:",x),alert("Erro ao enviar os dados: "+x))}catch(g){console.error("Erro:",g),alert("Erro ao enviar os dados. Tente novamente.")}};return c.jsx(c.Fragment,{children:c.jsxs(mT,{ref:e,children:[c.jsxs(xT,{children:[c.jsxs(gT,{children:[c.jsx("h1",{"data-aos":"fade-up",children:"Fale agora com a nossa Central de Reservas"}),c.jsxs("p",{"data-aos":"fade-up","data-aos-delay":"100",children:["As suas informações são mantidas em segurança e utilizadas apenas para entrar em contato. Entenda melhor como tratamos os seus dados pela nossa",c.jsx("a",{href:"https://drive.google.com/file/d/1hcfO5CfNmczgpg2h943ytwg9j0SR9Fas/view",target:"_blank",children:"política de privacidade"}),"."]}),c.jsx("hr",{"data-aos":"fade-right","data-aos-delay":"200"}),c.jsxs("div",{children:[c.jsx("h4",{"data-aos":"fade-up","data-aos-delay":"300",children:"Siga-nos"}),c.jsxs("div",{children:[c.jsx("a",{href:"https://instagram.com/pousadaleange",target:"_blank",rel:"noopener noreferrer","data-aos":"fade-up","data-aos-delay":"400",children:c.jsx(R_,{})}),c.jsx("a",{href:"https://tiktok.com/@pousadaleange",target:"_blank",rel:"noopener noreferrer","data-aos":"fade-up","data-aos-delay":"450",children:c.jsx(uT,{})}),c.jsx("a",{href:"https://pinterest.com/pousadaleange",target:"_blank",rel:"noopener noreferrer","data-aos":"fade-up","data-aos-delay":"500",children:c.jsx(cT,{})})]})]})]}),c.jsx(vT,{"data-aos":"fade-down","data-aos-delay":"500",children:c.jsxs("form",{id:"contactForm",onSubmit:u,children:[c.jsx("input",{type:"text",id:"name",placeholder:"Digite o seu nome",value:t,onChange:d=>n(d.target.value),"data-aos":"fade-up","data-aos-delay":"600"}),c.jsx("input",{type:"email",id:"email",placeholder:"Preciso saber o seu e-mail também",value:r,onChange:d=>i(d.target.value),"data-aos":"fade-up","data-aos-delay":"700"}),c.jsx("input",{type:"tel",id:"tel",placeholder:"Por fim, o seu número de WhatsApp",value:a,onChange:d=>o(d.target.value),"data-aos":"fade-up","data-aos-delay":"800"}),c.jsxs(hT,{type:"submit","data-aos":"fade-up","data-aos-delay":"1000",children:[c.jsx(dT,{size:20}),c.jsx("span",{children:"Enviar dados para contato"})]})]})})]}),c.jsxs(yT,{children:[c.jsxs("div",{children:[c.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732793434/white_sevdgn_xz8yuf.webp",alt:"Descrição da imagem",loading:"lazy","data-aos":"fade-up","data-aos-delay":"200"}),c.jsx("p",{"data-aos":"fade-down","data-aos-delay":"400",children:"A pousada mais Pet Friendly, venha conhecer!"})]}),c.jsxs("div",{children:[c.jsx("h2",{"data-aos":"fade-up","data-aos-delay":"50",children:"Mapa do site"}),c.jsxs("a",{href:"#","data-aos":"fade-down","data-aos-delay":"100",children:[" ",c.jsx(wt,{})," Início "]}),c.jsxs("a",{href:"#/sobre","data-aos":"fade-up","data-aos-delay":"150",children:[" ",c.jsx(wt,{})," Sobre nós "]}),c.jsxs("a",{href:"#/serra","data-aos":"fade-down","data-aos-delay":"200",children:[" ",c.jsx(wt,{})," Le Ange Serra "]}),c.jsxs("a",{href:"#/mar","data-aos":"fade-up","data-aos-delay":"250",children:[" ",c.jsx(wt,{})," Le Ange Mar "]}),c.jsxs("a",{href:"#/event","data-aos":"fade-down","data-aos-delay":"300",children:[" ",c.jsx(wt,{})," Eventos "]}),c.jsxs("a",{href:"#/acomodaSerra","data-aos":"fade-up","data-aos-delay":"350",children:[" ",c.jsx(wt,{})," Acomodações Serra "]}),c.jsxs("a",{href:"#/acomodaMar","data-aos":"fade-up","data-aos-delay":"400",children:[" ",c.jsx(wt,{})," Acomodações Mar "]})]}),c.jsxs("div",{children:[c.jsx("h2",{"data-aos":"fade-up","data-aos-delay":"400",children:"Central de reserva"}),c.jsxs("a",{href:"https://wa.link/dojlwi",target:"_blank","data-aos":"fade-up","data-aos-delay":"100",children:[" ",c.jsx(wt,{})," WhatsApp "]}),c.jsxs("a",{href:"https://wa.link/dojlwi",target:"_blank","data-aos":"fade-down","data-aos-delay":"150",children:[" ",c.jsx(wt,{})," +55 (21) 99423-0871 "]}),c.jsxs("a",{href:"mailto:pousadaleange@gmail.com",target:"_blank","data-aos":"fade-up","data-aos-delay":"200",children:[" ",c.jsx(wt,{})," pousadaleange@gmail.com "]})]}),c.jsxs("div",{children:[c.jsx("h2",{"data-aos":"fade-up","data-aos-delay":"600",children:"Fique por dentro de tudo"}),c.jsxs("a",{href:"https://www.instagram.com/pousadaleange/",target:"_blank","data-aos":"fade-down","data-aos-delay":"100",children:[" ",c.jsx(wt,{})," Instagram "]}),c.jsxs("a",{href:"https://www.tiktok.com/@pousadaleange",target:"_blank","data-aos":"fade-up","data-aos-delay":"150",children:[" ",c.jsx(wt,{})," TikTok "]}),c.jsxs("a",{href:"https://br.pinterest.com/pousadaleange/",target:"_blank","data-aos":"fade-down","data-aos-delay":"200",children:[" ",c.jsx(wt,{})," Pinterest "]})]})]}),c.jsxs(wT,{children:[c.jsx("h1",{"data-aos":"fade-down","data-aos-delay":"200",children:"Saiba onde estamos localizados"}),c.jsx("div",{children:c.jsx("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235239.22077211382!2d-43.355636!3d-22.461517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x99106a0d4d634d%3A0x5a069366075bf207!2sPousada%20Le%20Ange!5e0!3m2!1spt-BR!2sbr!4v1697101366468!5m2!1spt-BR!2sbr",width:"300",height:"150",style:{border:0,borderRadius:"15px 0px 15px 0px"},allowFullScreen:"",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade",title:"Mapa da Unidade Serra","data-aos":"fade-left","data-aos-delay":"300"})}),c.jsx("div",{children:c.jsx("iframe",{src:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14718.952062952678!2d-41.958707!3d-22.737977!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x97ab01cac79615%3A0x6b404b4741597da1!2sLeAnge%20Mar!5e0!3m2!1spt-BR!2sus!4v1728577984633!5m2!1spt-BR!2sus",width:"300",height:"150",style:{border:0,borderRadius:"0px 15px 0px 15px"},allowFullScreen:"",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade",title:"Mapa da Unidade Mar","data-aos":"fade-right","data-aos-delay":"400"})})]}),c.jsx(bT,{}),c.jsxs(ST,{children:[c.jsxs("p",{children:["Todos os direitos reservados | ",c.jsx(fT,{})," 2024"]}),c.jsx("a",{href:"https://drive.google.com/file/d/1hcfO5CfNmczgpg2h943ytwg9j0SR9Fas/view",target:"_blank",children:"Termos de condições"}),c.jsxs("p",{children:["Desenvolvido por ",c.jsx("b",{children:c.jsx("a",{href:"https://www.linkedin.com/in/aleph-ramos",target:"_blank",children:"Aleph"})})]})]})]})})};function jd(e){return ee({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M19.5 14.625c0 .995-.524 1.482-1.5 1.5H6c-.976-.018-1.5-.505-1.5-1.5s.524-1.482 1.5-1.5h12c.976.018 1.5.505 1.5 1.5m-1.5 2.25H6c-.976.018-1.5.505-1.5 1.5s.524 1.482 1.5 1.5h12c.976-.018 1.5-.505 1.5-1.5s-.524-1.482-1.5-1.5m3.75-8.248v-.001c-.976.017-1.5.504-1.5 1.499v8.25c0 .995.524 1.482 1.5 1.5v-.002c1.464-.052 2.25-1.514 2.25-4.498v-3.75c0-1.99-.786-2.964-2.25-2.998m-19.5-.001C.786 8.662 0 9.637 0 11.626v3.75c0 2.984.786 4.446 2.25 4.498v.001c.976-.017 1.5-.504 1.5-1.499v-8.25c0-.995-.524-1.482-1.5-1.5m19.5-.75c0-2.486-1.31-3.705-3.75-3.748v-.002H6v.002c-2.44.043-3.75 1.262-3.75 3.748v.001c1.464.026 2.25.757 2.25 2.249s.786 2.223 2.25 2.249v.001h10.5v-.001c1.464-.026 2.25-.757 2.25-2.249s.786-2.223 2.25-2.249z"},child:[]}]})(e)}function Ky(e){return ee({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17.8 20l-12 -1.5c-1 -.1 -1.8 -.9 -1.8 -1.9v-9.2c0 -1 .8 -1.8 1.8 -1.9l12 -1.5c1.2 -.1 2.2 .8 2.2 1.9v12.1c0 1.2 -1.1 2.1 -2.2 1.9z"},child:[]},{tag:"path",attr:{d:"M12 5l0 14"},child:[]},{tag:"path",attr:{d:"M4 12l16 0"},child:[]}]})(e)}const kT=Ki`
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
`,Xy=Vn`
  0% { border-radius: 0 30px 20px 0; }
  25% { border-radius: 20px 0 30px 20px; }
  50% { border-radius: 30px 20px 0 30px; }
  75% { border-radius: 30px 30px 20px 0; }
  100% { border-radius: 0 20px 30px 0; }
`,jT=_.div`
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
`,_T=_.div`
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
`,TT=_.div`
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
`,CT=_.h2`
  font-size: 20px;
  font-weight: bold;
  font-family: var(--font--comfortaa);

  @media (max-width: 768px){
    font-family: var(--font--comfortaa);
    font-size: 1.4rem;
    font-weight: 800;
  }
`,ET=_.p`
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
`,PT=_.div`
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
`,zT=_.div`
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
`,AT=({content:e=[],spaceBetween:t=10,autoplayDelay:n=3e3,showPagination:r=!0,showNavigation:i=!0})=>(kl(),c.jsxs(zT,{children:[c.jsx(kT,{}),c.jsx(Jt,{modules:[vr,xr,Nn],navigation:i,pagination:!1,spaceBetween:t,loop:!0,slidesPerView:1,autoplay:{delay:n,disableOnInteraction:!1,pauseOnMouseEnter:!0},breakpoints:{640:{slidesPerView:1},1024:{slidesPerView:3}},children:e.map((a,o)=>c.jsxs(en,{children:[c.jsx(jT,{}),c.jsx(_T,{style:{backgroundImage:`url(${a.backgroundImage})`},children:c.jsxs(TT,{"data-aos":"fade-down","data-aos-delay":"100",children:[c.jsx(CT,{children:a.title}),c.jsx(ET,{children:a.subtitle}),c.jsx(PT,{children:a.features.map((s,l)=>c.jsxs("span",{children:[s.icon," ",s.text]},l))}),c.jsx(mf,{onClick:()=>{const s=`/#/acomoda${a.id}`;window.location.href=s},text:"Conhecer essa acomodação",suiteId:a.id})]})})]},o))})]})),MT=Vn`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`,Qy=_.button`
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
  animation: ${MT} .5s infinite;

  &:hover {
    width: 325px;
    border-radius: 40px;
  }

  &:active {
    transform: translate(2px, 2px);
  }
`,LT=_.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;  
  transition: width 0.3s ease-in-out;
`,OT=_.div`
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
`,Fn=()=>{const e="https://wa.link/dojlwi";return c.jsxs(Qy,{onClick:()=>window.open(e,"_blank"),children:[c.jsx(LT,{children:c.jsx(B6,{color:"white",size:"30px"})}),c.jsx(OT,{children:"Fale com a central de reservas"})]})},IT=[{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732728791/mulher-na-rede_bj91d1_mbrq3e.jpg",alt:"Mulher na rede",loading:"lazy"},{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732728791/pousada-de-cima_hum4rw_iwrjbu.webp",alt:"Foto da pousada le ange vista de cima",loading:"lazy"},{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732728791/cachorro-na-piscina_mnkqrv_xjw9sw.jpg",alt:"2 cachorros na piscina",loading:"lazy"},{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732728791/foto_da_pousada_da_serra_lefdif_aikpna.jpg",alt:"Foto da pousada vista de baixo",loading:"lazy"},{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732728790/sala-de-estar_xuxiou_knlqok.webp",alt:"Foto da sala de estar da pousada le ange serra",loading:"lazy"},{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732728790/cachorro-na-cama-no-mato_pa3yt6_wvnvbj.webp",alt:"2 cachorros na cama no meio do quintal",loading:"lazy"}],RT=[{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732728789/foto_da_pousada_e3djry_jeikhd.jpg",alt:"Foto da pousada le ange mar",loading:"lazy"},{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732728790/casal_na_rede_watzjg_h8xs6x.webp",alt:"2 pessoas na rede na pousada le ange mar",loading:"lazy"},{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732728791/churrasqueira_w7akaf_x5xysl.jpg",alt:"Foto de churrasco",loading:"lazy"},{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732728790/cachorro-olhando-para-camera_wpovwv_tf4kfm.webp",alt:"Cachorro olhando para a câmera",loading:"lazy"},{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732728790/pousada_de_cima_vpzpdb_kssj6e.webp",alt:"Pousada le ange mar vista de cima",loading:"lazy"},{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732728790/Imagem-do-WhatsApp-de-2024-11-21-%C3%A0_s_-16.51.10_5fc34922_bexmr2_mtpf7p.webp",alt:"Sala de estar na le ange mar com o quadro na parede",loading:"lazy"}],DT=[{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732728791/mulher-na-rede_bj91d1_mbrq3e.jpg",alt:"Pessoa na rede",label:"Le Ange Serra",loading:"lazy"},{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732728791/cachorro-na-piscina_mnkqrv_xjw9sw.jpg",alt:"2 cachorros na piscina",label:"Le Ange Serra",loading:"lazy"},{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732728790/sala-de-estar_xuxiou_knlqok.webp",alt:"Sala de estar na le ange serra",label:"Le Ange Serra",loading:"lazy"},{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732729374/sossego_1_jsshhu_n8dumt.jpg",alt:"Hot Tube na le ange serra",label:"Le Ange Serra",loading:"lazy"},{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732729374/casal_comendo_no_mar_nkkwkl_qc1zsx.webp",alt:"2 pessoas bebendo na le ange mar",label:"Le Ange Mar",loading:"lazy"},{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732729374/sossego_d2asun_s2ndib.webp",alt:"2 pessoas na le ange mar",label:"Le Ange Mar",loading:"lazy"},{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732729374/sala-de-estar_blaa0x_e9onad.webp",alt:"Sala de estar da le ange mar",label:"Le Ange Mar",loading:"lazy"},{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732729373/por_do_sol_wmwzur_w1icoe.webp",alt:"Por do sol na le ange",label:"Le Ange Serra",loading:"lazy"}],VT=[{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732729373/suite_ajrwh0_jjeny1.webp",alt:"Foto do quarto na le ange",label:"Le Ange Mar",loading:"lazy"},{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732729373/churrasqueira_feg3jy_ggpgkg.webp",alt:"Foto de churrasqueira na le ange mar",label:"Le Ange Mar",loading:"lazy"},{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732729373/cachorro_na_m%C3%A3o_kil7xk_q6lqew.webp",alt:"Cachorro com a cabeça recostada na mão do tutor",label:"Le Ange Serra",loading:"lazy"},{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732729373/mulher_e_cachorro_na_piscina_wwgxkq_puak5i.webp",alt:"Uma pessoa e um cachorro na piscina",label:"Le Ange Serra",loading:"lazy"},{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732729373/2_ta%C3%A7as_ocgwdi_at3kbj.webp",alt:"2 taças com um fundo de por do sol",label:"Le Ange Mar",loading:"lazy"},{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732728790/cachorro-na-cama-no-mato_pa3yt6_wvnvbj.webp",alt:"2 cachorros em uma cama no meio do jardim",label:"Le Ange Serra",loading:"lazy"},{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732728790/Imagem-do-WhatsApp-de-2024-11-21-%C3%A0_s_-16.51.10_5fc34922_bexmr2_mtpf7p.webp",alt:"Foto do quadro de cachorro na le ange mar",label:"Le Ange Serra",loading:"lazy"}],F0=_.section`
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


`,NT=_.div`
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
`,FT=_.aside`
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
`,$T=[{id:"Serra#suite1",title:"Suíte Superior 1",subtitle:"Pousada Le Ange Serra | Miguel Pereira - RJ",backgroundImage:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732729616/suiteSerra1_wm28o4_pbmwec.webp",features:[{icon:c.jsx(je,{}),text:"52m²"},{icon:c.jsx(Zr,{}),text:"Ar condicionado"},{icon:c.jsx(De,{}),text:"Cama king size"},{icon:c.jsx(Ee,{}),text:"Banheira"},{icon:c.jsx(Me,{}),text:"Smart TV com canais a cabo"},{icon:c.jsx(ct,{}),text:"Lareira"}]},{id:"Serra#suite2",title:"Suíte Standard 2",subtitle:"Pousada Le Ange Serra | Miguel Pereira - RJ",backgroundImage:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732729616/foto2_pn8axc_qyclur.webp",features:[{icon:c.jsx(je,{}),text:"52m²"},{icon:c.jsx(Zr,{}),text:"Ar condicionado"},{icon:c.jsx(De,{}),text:"Cama king size"},{icon:c.jsx(Ee,{}),text:"Banheira"},{icon:c.jsx(Me,{}),text:"Smart TV com canais a cabo"},{icon:c.jsx(ct,{}),text:"Lareira"}]},{id:"Serra#suite6",title:"Suíte Master 6",subtitle:"Pousada Le Ange Serra | Miguel Pereira - RJ",backgroundImage:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732729616/suiteSerra2_aksiu9_feouvg.webp",features:[{icon:c.jsx(je,{}),text:"93m²"},{icon:c.jsx(Zr,{}),text:"Ar condicionado"},{icon:c.jsx(De,{}),text:"Cama king size"},{icon:c.jsx(Ee,{}),text:"Banheira"},{icon:c.jsx(jd,{}),text:"Couch lounge"},{icon:c.jsx(Ky,{}),text:"Bay window"}]},{id:"Mar#suite6",title:"Suíte Standard 6",subtitle:"Pousada Le Ange Mar | Búzios - RJ",backgroundImage:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732729616/suiteMar2_qlgel2_d11sun.webp",features:[{icon:c.jsx(je,{}),text:"45m²"},{icon:c.jsx(Zr,{}),text:"Ar condicionado"},{icon:c.jsx(De,{}),text:"Cama king size"},{icon:c.jsx(Ee,{}),text:"Banheira"},{icon:c.jsx(Me,{}),text:"Smart TV com canais a cabo"},{icon:c.jsx(ct,{}),text:"Lareira"}]},{id:"Mar#suite2",title:"Suíte Standard 2",subtitle:"Pousada Le Ange Mar | Búzios - RJ",backgroundImage:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732729617/suiteMar1_zu3lmc_gw01tc.webp",features:[{icon:c.jsx(je,{}),text:"45m²"},{icon:c.jsx(Zr,{}),text:"Ar condicionado"},{icon:c.jsx(De,{}),text:"Cama king size"},{icon:c.jsx(Ee,{}),text:"Banheira"},{icon:c.jsx(Me,{}),text:"Smart TV com canais a cabo"},{icon:c.jsx(ct,{}),text:"Lareira"}]},{id:"Serra#suite10",title:"Suíte Master 10",subtitle:"Pousada Le Ange Serra | Miguel Pereira - RJ",backgroundImage:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732729617/1_e6cnxy_wi4wpc.webp",features:[{icon:c.jsx(je,{}),text:"80m²"},{icon:c.jsx(Zr,{}),text:"Ar condicionado"},{icon:c.jsx(De,{}),text:"Cama king size"},{icon:c.jsx(gf,{}),text:"Recamier e poltrona de leitura"},{icon:c.jsx(jd,{}),text:"Couch lounge"},{icon:c.jsx(ct,{}),text:"Lareira"}]}],BT=_.section`
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
`,qT=[{backgroundImage:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732728791/cachorro-na-piscina_mnkqrv_xjw9sw.jpg",title:"100% Pet Friendly",description:"Não temos restrições quanto ao porte ou à raça do seu pet, nem cobramos taxas adicionais para a vinda deles. Na Le Ange, o seu pet tem total liberdade para acessar todas as nossas comodidades!",buttonText:"Viver minha experiência agora",topLeftText:"Le Ange Serra e Mar"},{backgroundImage:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732728790/pousada_de_cima_vpzpdb_kssj6e.webp",title:"Praia",description:"Para os amantes da praia, estamos localizados a apenas 150 metros da Praia Rasa, onde você e o seu pet podem aproveitar juntinhos e dar um mergulho delicioso no mar.",buttonText:"Viver minha experiência agora",topLeftText:"Le Ange Mar"},{backgroundImage:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732730257/sossego_1_jsshhu_1_pyjrgu.jpg",title:"Sossego",description:"A área da sauna fica situada ao lado da mata, envolvida pelo som relaxante do rio que passa. Aqui, você pode desfrutar de um HotTub abastecido por água natural e aquecido à lenha, o combo perfeito para você relaxar.",buttonText:"Viver minha experiência agora",topLeftText:"Le Ange Serra"},{backgroundImage:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732728790/pousada_de_cima_vpzpdb_kssj6e.webp",title:"Piscinas",description:"Nossa piscina aquecida possui um tratamento especial por ozônio com níveis baixíssimos de cloro - aqui, tudo é pensando para o bem-estar da sua pele a do seu pet também!",buttonText:"Viver minha experiência agora",topLeftText:"Le Ange Mar e Serra"},{backgroundImage:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732730257/caf%C3%A9_da_manh%C3%A3_vaxwlf_ulmkrt.jpg",title:"Cozinha",description:"Na sua hospedagem, todas as refeições estão incluídas: café da manhã, almoço, chá da tarde e jantar! Também, aceitamos todas as restrições alimentares para garantir que todos desfrutem da nossa gastronomia.",buttonText:"Viver minha experiência agora",topLeftText:"Le Ange Serra e Mar"},{backgroundImage:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732730257/ofuros_kyjddp_raquu4.webp",title:"Ofurôs",description:"São dois ofurôs acoplados na piscina, para você relaxar na água quentinha, apreciando a vista exuberante do mar.",buttonText:"Viver minha experiência agora",topLeftText:"Le Ange Mar"},{backgroundImage:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732730258/parc%C3%A3o_mdvo8p_sfazpp.webp",title:"Diversão",description:"Espaço de sobra para o seu pet se divertir! Espaço agility à beira do lago, com muita grama, para o seu pet, correr, pular, brincar e, claro, nadar!",buttonText:"Viver minha experiência agora",topLeftText:"Le Ange Serra"},{backgroundImage:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732730257/bar_xl6dvc_bkc9w5.webp",title:"Bar",description:"Para completar ainda mais a sua experiência, contamos com uma carta variada de vinhos, destilados, drinks e cervejas!",buttonText:"Viver minha experiência agora",topLeftText:"Le Ange Mar"},{backgroundImage:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732730261/adega_uje7gn_gdxn3g.webp",title:"Adega",description:"Para tornar a sua experiência ainda mais especial, contamos com uma adega subterrânea para a climatização perfeita dos vinhos, bar com carta variada de drinks, cervejas e destilados.",buttonText:"Viver minha experiência agora",topLeftText:"Le Ange Serra"},{backgroundImage:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731329811/suites_pzghlo.webp",title:"Suítes",description:"Nossas suítes são, elegantemente, decoradas. Todas com vistas maravilhosas, banheira de imersão, cama king-size, varanda, ar-condicionado e frigobar.",buttonText:"Viver minha experiência agora",topLeftText:"Le Ange Mar e Serra"}],HT=_.div`
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

`,UT=_.h1`
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
`,Yc=_.h1`
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

`,Ho=_.p`
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
`,WT=[{image:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732730393/risotos_oj42yf_nivhjz.webp",title:"Noite de Risotos",dateRange:"29/11/2024 até 01/12/2024 (2 diárias)",features:[{icon:c.jsx(re,{}),text:"30/11 - Noite de Risostos"},{icon:c.jsx(re,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(xe,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"359,20",discount:25},{image:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732730394/pizzas_lgsqcd_ekmh4f.webp",title:"Noite das pizzas",dateRange:"06/12/2024 até 08/12/2024 (3 diárias)",features:[{icon:c.jsx(re,{}),text:"07/12 - Noite das pizzas"},{icon:c.jsx(re,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(xe,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"359,20",discount:25},{image:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732730394/frutos_do_mar1_ly3hq1_ch6mr3.webp",title:"Frutos do Mar",dateRange:"13/12/2024 até 15/12/2024 (2 diárias)",features:[{icon:c.jsx(re,{}),text:"14/12 - Frutos do Mar"},{icon:c.jsx(re,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(xe,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"359,20",discount:25},{image:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732730394/fique3pague4_fiupcm_bgpy9c.webp",title:"Fique 4 pague 3",dateRange:"Segunda-feira a Sexta-feira",features:[{icon:c.jsx(re,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(hn,{}),text:"Até 12X SEM JUROS"},{icon:c.jsx(xe,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"538,90",discount:25},{image:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732730395/natal_wrunee_ceaifp.webp",title:"Pacote de Natal",dateRange:"21/12/2024 até 25/12/2024 (4 diárias)",features:[{icon:c.jsx(re,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(hn,{}),text:"Até 12X SEM JUROS"},{icon:c.jsx(xe,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"918,40",discount:25}],GT=_.section`
    height: 80vh;
    margin-bottom: 10vh;
    margin-top: 2.5vh;

    @media (max-width: 768px){
        height: auto;
        margin-bottom: 5vh;
        margin-top: 5vh;
    }
    
`,YT=_.section`
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
`,$0=_.b`
    color: var(--color--green);
`,Kc=_.b`
    color: var(--color--blue);
`,KT=_.div`
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
`,XT=_.div`
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
`,QT=()=>(k.useEffect(()=>{Re.init({duration:1e3,once:!0})},[]),c.jsxs(c.Fragment,{children:[c.jsx(Rn,{children:c.jsx("title",{children:"Início - Pousada Le Ange"})}),c.jsxs(XT,{children:[c.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732728790/foto_de_mulher_com_dois_cachorros_bwwkmi_pyqnx0.jpg"}),c.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732728789/FOTO-MAR_qssync_ei8mel.webp"})]}),c.jsx(Fn,{}),c.jsxs(NT,{containerAnimation:{opacity:0,scale:.8},titleAnimation:{opacity:0,y:-50},textAnimation:{opacity:0,x:50},buttonAnimation:{opacity:0,scale:.5},animationDuration:.7,children:[c.jsxs(FT,{children:[c.jsxs("h1",{"data-aos":"fade-up",children:["Pousada",c.jsx(Kc,{children:" 100% Pet Friendly"})," que aceita humanos de estimação"]}),c.jsx("p",{"data-aos":"fade-up","data-aos-delay":"200",children:"2 unidades, 2 cenários incomparáveis"})]}),c.jsxs(F0,{"data-aos":"fade-up",children:[c.jsx(D0,{content:IT,spaceBetween:20,slidesPerView:1,height:"60vh",contentType:"image",showPagination:!1}),c.jsx(N0,{title:"Le Ange Serra - Miguel Pereira RJ",text:"Na Le Ange Serra, costumamos dizer que a hospedagem é muito mais do que um final de semana para relaxar. É uma experiência única ao lado do seu pet entre as belezas naturais da Mata Atlântica, para que você colecione os melhores momentos ao lado dele!",borderColor:"var(--color--green)",borderRadius:"30px",buttonColor:"var(--color--green)",buttonBorder:"1px solid var(--color--black)",targetPage:"/serra"})]}),c.jsxs(F0,{"data-aos":"fade-up","data-aos-delay":"200",children:[c.jsx(N0,{title:"Le Ange Mar - Búzios RJ",text:"Situada no coração do Arpoador da Praia Rasa, na Le Ange Mar, oferecemos uma experiência memorável, onde a praia está a poucos passos da pousada e o seu pet é, calorosamente, recebido para momentos especiais à beira-mar.",borderColor:"var(--color--blue)",borderRadius:"30px",buttonColor:"var(--color--blue)",buttonBorder:"1px solid var(--color--black)",targetPage:"/mar"}),c.jsx(D0,{content:RT,spaceBetween:20,slidesPerView:1,width:"60%",height:"60vh",contentType:"image",showPagination:!1})]})]}),c.jsxs(BT,{children:[c.jsxs("div",{children:[c.jsxs(UT,{"data-aos":"fade-up",children:["Nossas suítes ",c.jsx($0,{children:"mais procuradas"})," "]}),c.jsx(Ho,{"data-aos":"fade-up","data-aos-delay":"200",children:"Já consegue se imaginar dormindo aqui ao lado do seu pet?"})]}),c.jsx(AT,{content:$T})]}),c.jsxs(HT,{children:[c.jsxs("div",{children:[c.jsxs(Yc,{"data-aos":"fade-up",children:["Mais que Pet Friendly, ",c.jsx(Kc,{children:"Pet Lovers"})]}),c.jsx(Ho,{"data-aos":"fade-up","data-aos-delay":"200",children:"Venha viver essa experiência"})]}),c.jsx(X_,{content:qT,spaceBetween:20,width:"100%",height:"70vh",showPagination:!1,showNavigation:!0})]}),c.jsxs("div",{children:[c.jsxs(Yc,{"data-aos":"fade-up",children:[" ",c.jsx($0,{children:"Viva"})," essa experiência "]}),c.jsx(Ho,{"data-aos":"fade-up","data-aos-delay":"200",children:"Alguns dos nossos momentos"})]}),c.jsxs(GT,{"data-aos":"fade-in",children:[c.jsx(kd,{images:DT}),c.jsx(kd,{images:VT,reverse:!0})]}),c.jsx(KT,{children:c.jsx(ut,{text:"Fazer minha reserva!"})}),c.jsxs("div",{children:[c.jsxs(Yc,{"data-aos":"fade-up",children:["Conheça nossos pacotes e ",c.jsx(Kc,{children:"noites especiais"})," "]}),c.jsx(Ho,{"data-aos":"fade-up","data-aos-delay":"200",children:"Estamos te esperando!"})]}),c.jsx(YT,{"data-aos":"fade-in","data-aos-delay":"250",children:c.jsx(vo,{events:WT})}),c.jsx(yr,{})]}));function ZT(e){return ee({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 8c-2.168 0-4 1.832-4 4s1.832 4 4 4 4-1.832 4-4-1.832-4-4-4zm0 6c-1.065 0-2-.935-2-2s.935-2 2-2 2 .935 2 2-.935 2-2 2z"},child:[]},{tag:"path",attr:{d:"M20 5h-2.586l-2.707-2.707A.996.996 0 0 0 14 2h-4a.996.996 0 0 0-.707.293L6.586 5H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V7c0-1.103-.897-2-2-2zM4 18V7h3c.266 0 .52-.105.707-.293L10.414 4h3.172l2.707 2.707A.996.996 0 0 0 17 7h3l.002 11H4z"},child:[]}]})(e)}function JT(e){return ee({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412l7.332 7.332c.17.299.498.492.875.492a.99.99 0 0 0 .792-.409l7.415-7.415c2.354-2.354 2.354-6.049-.002-8.416a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595zm6.791 1.61c1.563 1.571 1.564 4.025.002 5.588L12 18.586l-6.793-6.793c-1.562-1.563-1.561-4.017-.002-5.584.76-.756 1.754-1.172 2.799-1.172s2.035.416 2.789 1.17l.5.5a.999.999 0 0 0 1.414 0l.5-.5c1.512-1.509 4.074-1.505 5.584-.002z"},child:[]}]})(e)}function eC(e){return ee({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M20.787 9.023c-.125.027-1.803.418-3.953 1.774-.323-1.567-1.279-4.501-4.108-7.485L12 2.546l-.726.767C8.435 6.308 7.483 9.25 7.163 10.827 5.005 9.448 3.34 9.052 3.218 9.024L2 8.752V10c0 7.29 3.925 12 10 12 5.981 0 10-4.822 10-12V8.758l-1.213.265zM8.999 12.038c.002-.033.152-3.1 3.001-6.532C14.814 8.906 14.999 12 15 12v.125a18.933 18.933 0 0 0-3.01 3.154 19.877 19.877 0 0 0-2.991-3.113v-.128zM12 20c-5.316 0-7.549-4.196-7.937-8.564 1.655.718 4.616 2.426 7.107 6.123l.841 1.249.825-1.26c2.426-3.708 5.425-5.411 7.096-6.122C19.534 15.654 17.304 20 12 20z"},child:[]}]})(e)}function B0(e){return ee({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M20.832 4.555A1 1 0 0 0 20 3H4a1 1 0 0 0-.832 1.554L11 16.303V20H8v2h8v-2h-3v-3.697l7.832-11.748zm-2.7.445-2 3H7.868l-2-3h12.264z"},child:[]}]})(e)}function Xe(e){return ee({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M18 2H6c-1.103 0-2 .897-2 2v5h4V6h2v3h10V4c0-1.103-.897-2-2-2zm-8 13H8v-5H4v10c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V10H10v5z"},child:[]}]})(e)}function q0(e){return ee({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"},child:[]}]})(e)}const tC=Ki`
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
`,nC=Vn`
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
`,rC=_(Oe.img)`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50px 0 30px 0;

    @media (max-width: 768px){
        border-radius: 0 15px 0 20px;
    }
`,iC=_(Oe.div)`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  border-radius: 0 20px 20px 0;
  animation: ${nC} 5s ease-in-out infinite;
  background-image: ${({backgroundImage:e})=>`url(${e})`};
  background-size: cover;
  background-position: center;
`,aC=_(Oe.div)`
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
`,oC=_(Oe.div)`
    position: absolute;
    bottom: 20px;
    left: 20px;
    color: var(--color--white);
    font-family: Arial, sans-serif;
`,sC=_(Oe.h2)`
    font-size: 24px;
    font-weight: bold;
    font-family: var(--font--comfortaa);
`,lC=_(Oe.p)`
    font-size: 16px;
    margin: 5px 0;
    font-family: var(--font--avenir);
`,cC=_(Oe.div)`
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
`,uC=_.div`
    width: 100%;
    max-width: 100%;
    margin: 0 auto;

    @media (max-width: 640px) {
        max-width: 100%;
    }
`,H0=({content:e=[],contentType:t="image",spaceBetween:n=10,slidesPerView:r=1,height:i="300px",autoplayDelay:a=3e3,showPagination:o=!0,showNavigation:s=!0})=>{const{scrollY:l}=A6(),u=No(l,[0,300],[0,-30]),d=No(l,[0,300],[0,-20]),p=No(l,[0,300],[0,-10]),f=No(l,[0,300],[0,-5]);return c.jsxs(uC,{children:[c.jsx(tC,{}),c.jsx(Jt,{modules:[vr,xr,Nn],navigation:s,pagination:o?{clickable:!0}:!1,spaceBetween:n,loop:!0,slidesPerView:r,autoplay:{delay:a,disableOnInteraction:!1,pauseOnMouseEnter:!0},style:{height:i},breakpoints:{640:{slidesPerView:1,spaceBetween:10,height:"200px"},768:{slidesPerView:1,spaceBetween:20,height:"250px"},1024:{slidesPerView:1,spaceBetween:30,height:"300px"}},children:e.map((g,x)=>c.jsx(en,{children:t==="image"?c.jsx(rC,{src:g.src,alt:g.alt||`Slide ${x+1}`,initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},transition:{duration:.7,ease:"easeOut"}}):c.jsxs(iC,{backgroundImage:g.backgroundImage,initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},transition:{duration:.8,ease:"easeOut"},children:[c.jsx(aC,{}),c.jsxs(oC,{initial:{opacity:0,y:50},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.8,delay:.3,ease:"easeOut"},children:[c.jsx(sC,{style:{y:u},children:g.title}),c.jsx(lC,{style:{y:d},children:g.subtitle}),c.jsx(cC,{style:{y:p},children:g.features.map((y,b)=>c.jsxs("span",{children:[y.icon," ",y.text]},b))}),c.jsx(mf,{text:"Conhecer todas as acomodações",style:{y:f}})]})]})},x))})]})};function dC(e){return ee({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M239.22,59.44l-45.63,95.82a3.54,3.54,0,0,1-.16.34l-34.21,71.84a8,8,0,1,1-14.44-6.88L173.62,160H40a8,8,0,0,1-5.66-13.66L76.69,104,34.34,61.66A8,8,0,0,1,40,48H232a8,8,0,0,1,7.22,11.44Z"},child:[]}]})(e)}const pC=_.div`
    height: 15vh;

    @media (max-width: 768px){
        height: 0;
    }
`,fC=_.section`
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
`,U0=_.section`
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
`,hC=_.section`
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
`,mC=[{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732733235/espaco10_zbobfs_kgmqz5_oj3nwz.webp",alt:"Cadeira customizada para casamento na le ange",loading:"lazy"},{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732733238/espaco6_dfprnt-compressed_zrduvr_ngtoxi.webp",alt:"Foto do bolo de casamento na pousada le ange",loading:"lazy"},{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732733240/espaco1_e9bneq-compressed_ch0xzx_d51uau.webp",alt:"Foto de uma fogueira na pousada le ange",loading:"lazy"},{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732733246/espaco4_wmcp95-compressed_yv3qly_lfxlcy.webp",alt:"Espaço de comer na pousada le ange em casamentos",loading:"lazy"},{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732733249/espaco3_awfzgo-compressed_evyhwv_uf7iua.webp",alt:"Champagne na pousada le ange",loading:"lazy"}],gC=[{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732733507/espaco9_ldc1oy_uqmmwu_xcyujb.webp",alt:"Cadeiras para casamento na pousada le ange",loading:"lazy"},{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732733508/espaco8_pzjgiz_gittbv_mwfe2p.jpg",alt:"Noivos se casando na pousada le ange",loading:"lazy"},{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732733509/espaco2_twf5e1-compressed_itpmkk_o7idb4.webp",alt:"Comida do casamento na pousada le ange",loading:"lazy"},{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732733513/espaco5_gzy5ng-compressed_gjqaig_x84gfh.webp",alt:"Imagem do bar no casamento da pousada le ange",loading:"lazy"},{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732733515/espaco7_nlscx5-compressed_horerr_xsbdyl.webp",alt:"Casamento fotos pousada le ange",loading:"lazy"}],vC=_.section`
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
`,qt=_.div`
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
`,xC=_.section`
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
`,yC=()=>(k.useEffect(()=>{Re.init({duration:1e3,once:!1}),Re.refresh()},[]),c.jsxs(c.Fragment,{children:[c.jsx(Rn,{children:c.jsx("title",{children:"Eventos - Pousada Le Ange"})}),c.jsx(pC,{}),c.jsx(Fn,{}),c.jsxs(fC,{children:[c.jsxs("div",{children:[c.jsxs("h1",{"data-aos":"fade-up","data-aos-delay":"100",children:["Do alto da ",c.jsx("b",{children:c.jsx("a",{href:"#/serra",children:"Serra"})}),",",c.jsx("br",{})," às ondas do ",c.jsx("b",{children:c.jsx("a",{href:"#/mar",children:"Mar"})})]}),c.jsx("p",{"data-aos":"fade-up","data-aos-delay":"200",children:"Venha celebrar na Le Ange, onde o amor pelos pets encontra o cenário ideal para tornar os seus eventos ainda mais especiais."}),c.jsx(ut,{"data-aos":"fade-up","data-aos-delay":"300",onClick:()=>window.open("https://wa.link/dojlwi","_blank"),text:"Fazer meu evento"})]}),c.jsx("div",{children:c.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732733184/7_sgewp5_rx9vfw_r1rjc9.webp",alt:"foto da home da página de eventos","data-aos":"fade-left","data-aos-delay":"150"})})]}),c.jsx(U0,{"data-aos":"fade-up","data-aos-delay":"100",children:c.jsx(H0,{content:mC,spaceBetween:20,slidesPerView:1,width:"100%",height:"90vh",contentType:"image",showPagination:!0})}),c.jsxs(hC,{children:[c.jsx("div",{children:c.jsx("h1",{"data-aos":"fade-up","data-aos-delay":"100",children:"Sobre nós"})}),c.jsxs("div",{children:[c.jsxs("div",{children:[c.jsx("span",{children:"Le Ange Serra - Miguel Pereira/RJ"}),c.jsxs("div",{children:[c.jsx("p",{children:"Fundada em 2018, a Pousada LeAnge nasceu da paixão dos seus fundadores pelo amor aos pets, bem-estar e hospitalidade. Localizada em Miguel Pereira, a LeAnge Serra proporciona uma experiência única na região serrana do Rio de Janeiro, sendo um verdadeiro refúgio entre as belezas naturais da Mata Atlântica."}),c.jsx(ut,{onClick:()=>window.open("https://wa.link/dojlwi","_blank"),text:"Fazer reserva"})]})]}),c.jsxs("div",{children:[c.jsx("span",{children:"Le Ange Serra - Miguel Pereira/RJ"}),c.jsxs("div",{children:[c.jsx("p",{children:"Fundada em 2018, a Pousada LeAnge nasceu da paixão dos seus fundadores pelo amor aos pets, bem-estar e hospitalidade. Localizada em Miguel Pereira, a LeAnge Serra proporciona uma experiência única na região serrana do Rio de Janeiro, sendo um verdadeiro refúgio entre as belezas naturais da Mata Atlântica."}),c.jsx(ut,{onClick:()=>window.open("https://wa.link/dojlwi","_blank"),text:"Fazer reserva"})]})]})]})]}),c.jsxs(vC,{children:[c.jsx("div",{children:c.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732733185/11_gzr6ei_ikd2hm_siih9l.webp",alt:"foto do casamento","data-aos":"zoom-in","data-aos-delay":"100"})}),c.jsxs("div",{children:[c.jsx("h1",{"data-aos":"fade-up","data-aos-delay":"200",children:"Casamento"}),c.jsx("p",{"data-aos":"fade-down","data-aos-delay":"200",children:"Coração palpitando, emoções à flor da pele e a certeza de dias inesquecíveis."}),c.jsxs("ol",{children:[c.jsxs(qt,{"data-aos":"fade-up","data-aos-delay":"50",children:[c.jsx(B0,{}),"Coquetel na Chegada (Sexta-feira)"]}),c.jsxs(qt,{"data-aos":"fade-up","data-aos-delay":"100",children:[c.jsx(q0,{}),"Noite Especial no Sábado"]}),c.jsxs(qt,{"data-aos":"fade-up","data-aos-delay":"150",children:[c.jsx(ZT,{}),"Ensaio Fotográfico dos Noivos"]}),c.jsxs(qt,{"data-aos":"fade-up","data-aos-delay":"200",children:[c.jsx(JT,{}),"Decoração Romântica na Suíte"]}),c.jsxs(qt,{"data-aos":"fade-up","data-aos-delay":"300",children:[c.jsx(c0,{}),"Late Checkout no Domingo"]})]}),c.jsx(ut,{text:"Fazer reserva"}),c.jsxs("div",{children:[c.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732733184/7_sgewp5_rx9vfw_r1rjc9.webp",alt:"foto do casamento","data-aos":"fade-up","data-aos-delay":"100"}),c.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732733187/10_deybdj_khogtb_jtkr6b.webp",alt:"foto do casamento","data-aos":"fade-up","data-aos-delay":"200"}),c.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732733190/9_eavaty_zcw9bc_ef7srj.webp",alt:"foto do casamento","data-aos":"fade-up","data-aos-delay":"300"})]})]})]}),c.jsxs(xC,{children:[c.jsxs("div",{children:[c.jsx("h1",{"data-aos":"fade-up","data-aos-delay":"100",children:"Aniversário"}),c.jsx("p",{"data-aos":"fade-down","data-aos-delay":"200",children:"Comemore os momentos doces da vida."}),c.jsxs("ol",{children:[c.jsxs(qt,{"data-aos":"fade-up","data-aos-delay":"50",children:[c.jsx(B0,{}),"Coquetel na Chegada (Sexta-feira)"]}),c.jsxs(qt,{"data-aos":"fade-up","data-aos-delay":"100",children:[c.jsx(q0,{}),"Noite Especial no Sábado"]}),c.jsxs(qt,{"data-aos":"fade-up","data-aos-delay":"150",children:[c.jsx(eC,{}),"Massagem Relaxante"]}),c.jsxs(qt,{"data-aos":"fade-up","data-aos-delay":"200",children:[c.jsx(c0,{}),"Late Checkout no Domingo"]}),c.jsxs(qt,{"data-aos":"fade-up","data-aos-delay":"250",children:[c.jsx(dC,{}),"Painéis Temáticos"]}),c.jsxs(qt,{"data-aos":"fade-up","data-aos-delay":"300",children:[c.jsx(q6,{}),"Bolo para o Pet"]})]}),c.jsx(ut,{text:"Fazer reserva"}),c.jsxs("div",{children:[c.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732733203/niver5_vqhh94_pitqka_lam4cz.webp",alt:"foto do casamento","data-aos":"fade-up","data-aos-delay":"100"}),c.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732733204/niver3_katslf_fapku3_uateko.webp",alt:"foto do casamento","data-aos":"fade-up","data-aos-delay":"200"}),c.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732733229/niver2_rb3hvs_nofpdf_jgopfc.webp",alt:"foto do casamento","data-aos":"fade-up","data-aos-delay":"300"})]})]}),c.jsx("div",{children:c.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732733230/niver1_zyq8zi_gandzx_jxfo1i.webp",alt:"foto de aniversário","data-aos":"zoom-in","data-aos-delay":"200"})})]}),c.jsx(U0,{"data-aos":"fade-up","data-aos-delay":"100",children:c.jsx(H0,{content:gC,spaceBetween:20,slidesPerView:1,width:"100%",height:"90vh",contentType:"image",showPagination:!0})}),c.jsx(yr,{})]})),Zy=_.button`
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
`,wC=_(I_)`
  color: ${e=>e.iconColor||"currentColor"};
  height: 20px;
  width: 20px;
  transition: color 0.3s ease;

  ${Zy}:hover & {
    color: ${e=>e.hoverIconColor||e.iconColor||"currentColor"};
  }
`,bC=_.span`
  margin: 10px;
`,wr=({text:e="Fazer reserva agora!",textColor:t,backgroundColor:n,borderColor:r,iconColor:i,hoverIconColor:a,hoverBackgroundColor:o,hoverBorderColor:s,hoverColor:l,onClick:u})=>c.jsxs(Zy,{id:"clickwpp",onClick:u,textColor:t,backgroundColor:n,borderColor:r,hoverBackgroundColor:o,hoverBorderColor:s,hoverColor:l,children:[c.jsx(wC,{iconColor:i,hoverIconColor:a}),c.jsx(bC,{children:e})]}),SC=_.section`
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
`,kC=_.div`
    height: 15vh;

    @media (max-width: 768px){
        height: 0;
    }
`,jC=_.section`
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
`,_C=_.section`
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
`,TC=_.section`
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
`,CC=_.section`

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
`,EC=_.div`
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
`,PC=()=>(k.useEffect(()=>{Re.init({duration:1e3,once:!1}),Re.refresh()},[]),c.jsxs(c.Fragment,{children:[c.jsx(Rn,{children:c.jsx("title",{children:"Sobre Nós - Pousada Le Ange"})}),c.jsx(kC,{}),c.jsx(Fn,{}),c.jsxs(SC,{children:[c.jsxs("div",{children:[c.jsx("h1",{"data-aos":"fade-up","data-aos-delay":"100",children:"Pousada Le Ange"}),c.jsxs("h4",{"data-aos":"fade-down","data-aos-delay":"200",children:["A pousada mais ",c.jsx("b",{children:"Pet Friendly"})," do Brasil"]}),c.jsx("p",{"data-aos":"fade-up","data-aos-delay":"300",children:"Fundada em 2018 em Miguel Pereira, Rio de Janeiro, a Pousada Le Ange Serra nasceu da nossa paixão por quatro patas, bem-estar e hospitalidade. Com o sucesso da primeira unidade, expandimos para Búzios, em 2023, criando a Pousada Le Ange Mar. A filosofia por trás é oferecer mais do que uma pousada, um refúgio acolhedor."})]}),c.jsx("div",{"data-aos":"fade-left","data-aos-delay":"400",children:c.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732730866/cachorro_kcfx8n_meecoi.webp",alt:"foto da gaia, cachorra da pousada le ange",loading:"lazy","data-aos":"fade-right","data-aos-delay":"500"})})]}),c.jsxs(jC,{children:[c.jsxs("div",{children:[c.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732728790/pousada_de_cima_vpzpdb_kssj6e.webp",alt:"foto da le ande da mar",loading:"lazy","data-aos":"fade-up","data-aos-delay":"100"}),c.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732728791/foto_da_pousada_da_serra_lefdif_aikpna.jpg",alt:"foto da le ande da serra",loading:"lazy","data-aos":"fade-down","data-aos-delay":"100"})]}),c.jsxs("div",{children:[c.jsx("h1",{"data-aos":"fade-up","data-aos-delay":"100",children:"2 unidades,"}),c.jsx("h4",{"data-aos":"fade-down","data-aos-delay":"200",children:"2 refúgios únicos"}),c.jsx("p",{"data-aos":"fade-up","data-aos-delay":"300",children:"A Pousada LeAnge Serra oferece 10 suítes aconchegantes em meio à região serrana de Miguel Pereira. Já a Pousada LeAnge Mar, com suas 8 suítes exclusivas, proporciona uma experiência costeira em Búzios, com vista direta para o mar."})]})]}),c.jsxs(_C,{children:[c.jsxs("div",{children:[c.jsx("h1",{"data-aos":"fade-up","data-aos-delay":"100",children:"Diferenciais"}),c.jsxs("p",{"data-aos":"fade-down","data-aos-delay":"200",children:["Somos mais que Pet Friendly, somos ",c.jsx("b",{children:"Pet Lovers!"})," Por aqui não temos limite de porte, quantidade ou raça. Nosso conceito permite que os pets frequentem o restaurente, a piscina e qualquer outro espaço. Assim, tornando-nos ÚNICOS a oferecer este tipo de experiência."]})]}),c.jsxs("div",{children:[c.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732730866/rede_no_mar_ajtwwv_oz8zod.webp",loading:"lazy",alt:"rede na le ange mar","data-aos":"fade-up","data-aos-delay":"100"}),c.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732730257/sossego_1_jsshhu_1_pyjrgu.jpg",loading:"lazy",alt:"hot tube na le ange serra","data-aos":"fade-down","data-aos-delay":"200"}),c.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732730867/divers%C3%A3o_na_serra_fzhl7y_t91e9t.jpg",loading:"lazy",alt:"casal se divertindo na le ange serra","data-aos":"fade-up","data-aos-delay":"300"}),c.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732730867/natal_jwdzzh_atfzzu.webp",loading:"lazy",alt:"foto da le ange com tema de natal","data-aos":"fade-down","data-aos-delay":"400"})]})]}),c.jsxs(TC,{children:[c.jsxs("div",{children:[c.jsxs("div",{children:[c.jsx("h1",{"data-aos":"fade-down","data-aos-delay":"100",children:"Gastronomia"}),c.jsxs("p",{"data-aos":"fade-up","data-aos-delay":"200",children:["Oferecemos um serviço ",c.jsx("i",{children:"all inclusive"})," que abrange todas as refeições, atendendo todas as restrições alimentares dos nossos hóspedes. Nosso compromisso é proporcionar uma experiência gastronômica diversificada e de alta qualidade, utilizando produtos frescos e locais."]})]}),c.jsxs("div",{children:[c.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732730394/pizzas_lgsqcd_ekmh4f.webp",loading:"lazy",alt:"foto da noite de pizzas na pousada le ange","data-aos":"fade-up","data-aos-delay":"300"}),c.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732730393/risotos_oj42yf_nivhjz.webp",loading:"lazy",alt:"foto da noite de risotos na pousada le ange","data-aos":"fade-down","data-aos-delay":"400"})]})]}),c.jsxs("div",{children:[c.jsxs("div",{children:[c.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732730868/cachorro_olhando_pra_camera_ndannw_hvd1rf.webp",loading:"lazy",alt:"foto do cachorro sorrindo para camera","data-aos":"fade-up","data-aos-delay":"100"}),c.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732728790/foto_de_mulher_com_dois_cachorros_bwwkmi_pyqnx0.jpg",loading:"lazy",alt:"uma mulher e dois cachorros na pousada le ange","data-aos":"fade-down","data-aos-delay":"200"})]}),c.jsxs("div",{children:[c.jsx("h1",{"data-aos":"fade-up","data-aos-delay":"300",children:"Espaços compartilhados"}),c.jsx("p",{"data-aos":"fade-down","data-aos-delay":"400",children:"Nossos espaços compartilhados incluem bibliotecas aconchegantes, sala de jogos e áreas de lazer diversificadas. Na Serra, temos piscinas, ofurô, hot tub, SPA e acesso às cachoeiras. Já em Búzios, nossos hóspedes desfrutam da piscina e dos ofurôs com vista incrível do mar aberto, além disso, estamos localizados próximo ao Mirante do Pai Vitório."})]})]})]}),c.jsxs(CC,{children:[c.jsxs("div",{children:[c.jsxs("div",{children:[c.jsx("h1",{"data-aos":"fade-up","data-aos-delay":"150",children:"Suítes"}),c.jsx("p",{"data-aos":"fade-down","data-aos-delay":"300",children:"Ambas as unidades dispõem de suítes luxuosas, equipadas com banheiras de imersão, camas king-size e roupas de cama de 400 fios. Na Serra, cada suíte conta com uma lareira aconchegante, enquanto em Búzios, a vista para o mar é um espetáculo à parte, garantindo uma experiência de tranquilidade incomparável."})]}),c.jsxs("div",{children:[c.jsx("h1",{"data-aos":"fade-up","data-aos-delay":"400",children:"Convivência"}),c.jsx("p",{"data-aos":"fade-down","data-aos-delay":"500",children:"Pedimos que considere se o seu pet é amigável, pois a pousada recebe vários outros pets. Além disso, aceitamos apenas humanos acompanhados por pets, e a idade mínima para hospedagem é 13 anos."})]})]}),c.jsx("div",{children:c.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732730871/IMG_0254_wdrn4v_hghvvd.webp",alt:"foto do quadro de cachorro na pousada le ange mar","data-aos":"flip-left","data-aos-delay":"600"})})]}),c.jsxs(EC,{children:[c.jsx("h1",{"data-aos":"fade-up","data-aos-delay":"200",children:"Venha viver essa experiência com a gente!"}),c.jsx(wr,{text:"Reservar agora!",textColor:"var(--color--white)",backgroundColor:"transparent",borderColor:"var(--color--white)",iconColor:"var(--color--white)",hoverBackgroundColor:"var(--color--white)",hoverBorderColor:"var(--color--white)",hoverColor:"var(--color--white)",hoverIconColor:"var(--color--white)",onClick:()=>window.open("https://wa.link/dojlwi","_blank"),"data-aos":"fade-in","data-aos-delay":"500"})]})]})),zC=Ki`
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
`,AC=_.div`
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
`,MC=_.div`
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
`,LC=_.h2`
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
`,OC=_.p`
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
`,IC=_.div`
  flex: 2;
  height: 100%;

  @media (max-width: 768px){
    height: 30vh;
  }
`,RC=_.img`
  width: 100%;
  border-radius: 25px 0 25px 0;
  height: 100%;
  object-fit: cover;
  filter: contrast(120%);
`,DC=_(Jt)`
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
`,Nl=({slides:e,titleColor:t,buttonBgColor:n,imagePosition:r="left"})=>c.jsxs(c.Fragment,{children:[c.jsx(zC,{}),c.jsx(DC,{navigation:!0,autoplay:{delay:5e3,disableOnInteraction:!1,pauseOnMouseEnter:!0},loop:!0,modules:[vr,xr,Nn],className:"mySwiper",$bgColor:n,onMouseEnter:()=>{},onMouseLeave:()=>{},children:e.map((i,a)=>c.jsx(en,{children:c.jsxs(AC,{imagePosition:r,children:[c.jsxs(MC,{children:[c.jsx(LC,{$colorDefined:t,"data-aos":"fade-up","data-aos-delay":"100",children:i.title}),c.jsx(OC,{"data-aos":"fade-down","data-aos-delay":"250",children:i.description}),c.jsx(Xi,{"data-aos":"fade-up","data-aos-delay":"200",text:"Fazer reserva!",text2:"Clique e reserve",borderColor:"var(--color--black)",textColor:"var(--color--black)",hoverColor:"var(--color--black)",hoverTextColor:"var(--color--white)"})]}),c.jsx(IC,{"data-aos":"fade-left","data-aos-delay":"400",children:c.jsx(RC,{src:i.imageUrl,alt:i.title})})]})},a))})]}),VC=Vn`
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
`,NC=_.section`
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
        animation: ${VC} 5s ease-in-out infinite;
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
`,FC=_.div`
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
`,Jy=({images:e})=>{const[t,n]=k.useState(null);return c.jsxs(NC,{children:[c.jsxs(FC,{children:[c.jsx("div",{children:c.jsx("h1",{"data-aos":"fade-up","data-aos-delay":"100",children:"Conheça as suítes da Le Ange Serra"})}),c.jsx("div",{"data-aos":"fade-down","data-aos-delay":"200",children:c.jsx(Xi,{text:"Fazer reserva!",text2:"Clique e reserve",borderColor:"var(--color--white)",textColor:"var(--color--white)",hoverColor:"var(--color--black)",hoverTextColor:"var(--color--white)"})})]}),c.jsx("main",{"data-aos":"zoom-in","data-aos-delay":"200",children:e.map((r,i)=>c.jsxs("div",{onMouseEnter:()=>n(i),onMouseLeave:()=>n(null),children:[c.jsx("img",{src:r.src,alt:`Imagem ${i+1}`}),c.jsxs("span",{onClick:()=>window.location.href=`/#/acomodaSerra#suite${i+1}`,children:[t===i?"Conhecer Suítes":r.text,t===i&&c.jsx(nf,{})]})]},i))})]})},$C=_.section`
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
`,BC=_.div`
    width: 50%;
    height: 90%;
    display: flex;
    justify-content: center;
    overflow: hidden;

    @media (max-width: 768px){
        width: 100%;
        height: 50vh;
    }
`,qC=_.div`
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
`,HC=_.div`
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
`,UC=_.h1`
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
`,WC=_.p`
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
`;_(wr)`
    margin-top: auto; 
`;const Fl=({colorDefinedBold:e})=>c.jsxs($C,{children:[c.jsx(BC,{children:c.jsxs(qC,{children:[c.jsxs("div",{children:[c.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732728791/churrasqueira_w7akaf_x5xysl.jpg",alt:"Homem fazendo churrasco na le ange",loading:"lazy","data-aos":"fade-up","data-aos-delay":"100"}),c.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732731824/risoto-compressed_xqyhqx_pkztib.jpg",alt:"Risoto no prato na le ange",loading:"lazy","data-aos":"fade-up","data-aos-delay":"200"})]}),c.jsxs("div",{children:[c.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732731824/hamburguer-compressed_dhh0dx_bdo8iz.webp",alt:"Foto do hamburguer da le ange com batata frita e saladas",loading:"lazy","data-aos":"fade-down","data-aos-delay":"100"}),c.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732731824/buffetComprimido-compressed-_1__tjiacp_gv9frv.webp",alt:"Risoto no prato na le ange",loading:"lazy","data-aos":"fade-down","data-aos-delay":"200"})]})]})}),c.jsxs(HC,{children:[c.jsxs(UC,{colorDefinedBold:e,"data-aos":"fade-up","data-aos-delay":"400",children:["Alimentação ",c.jsx("b",{children:"Inclusa"})]}),c.jsxs(WC,{"data-aos":"fade-down","data-aos-delay":"500",children:["Na ",c.jsx("b",{children:"Le Ange"}),", tudo é pensado para oferecer uma experiência gastronômica diversificada, atendendo todo tipo de restrição alimentar e valorizando ingredientes locais e frescos.  ",c.jsx("br",{})," ",c.jsx("br",{}),"Nossa estadia dispõe de um restaurante, onde são oferecidas todas as refeições do dia:",c.jsx("br",{}),c.jsx("br",{}),c.jsxs("ol",{type:"disc",children:[c.jsx("li",{children:"Café da manhã;"}),c.jsx("li",{children:"Almoço;"}),c.jsx("li",{children:"Chá da tarde;"}),c.jsx("li",{children:"Jantar."}),c.jsx("br",{})]}),"Incluindo as nossas deliciosas sobremesas."]}),c.jsx(Xi,{"data-aos":"fade-up","data-aos-delay":"200",text:"Fazer reserva!",text2:"Clique e reserve",borderColor:"var(--color--black)",textColor:"var(--color--black)",hoverColor:"var(--color--black)",hoverTextColor:"var(--color--white)"})]})]}),W0=_.section`
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
`,GC=_.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    height: 80vh;
    padding: 0 5%;

    @media (max-width: 768px){
        height: auto;
    }
`,YC=_.div`
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
`,KC=_.p`
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
`,XC=[{id:1,text:"Pousada Le Ange Mar",bgImages:["https://res.cloudinary.com/dabucfkmg/image/upload/v1732793650/3_nxmzvb_uqceix_ecvuyx.webp","https://res.cloudinary.com/dabucfkmg/image/upload/v1732793650/4_zkfafk_oftuer_o9xslm.webp","https://res.cloudinary.com/dabucfkmg/image/upload/v1732793650/5_tb7gyj_m9gzdd_mrm1gl.jpg","https://res.cloudinary.com/dabucfkmg/image/upload/v1732793651/2_kck8ru_pps4we_seocfb.webp","https://res.cloudinary.com/dabucfkmg/image/upload/v1732793651/6_y0fjmz_u19wod_aosz5p.webp"]},{id:2,text:"Pousada Le Ange Serra",bgImages:["https://res.cloudinary.com/dabucfkmg/image/upload/v1732793814/1_ph73ii_ctm2dz.jpg","https://res.cloudinary.com/dabucfkmg/image/upload/v1732793814/2_v8reyz_vm3ce1_f54jky.jpg","https://res.cloudinary.com/dabucfkmg/image/upload/v1732793815/6_dovfum_tswv2e_h5v5it.jpg","https://res.cloudinary.com/dabucfkmg/image/upload/v1732793815/5_ty6zqr_q1l2mc_pkippf.jpg","https://res.cloudinary.com/dabucfkmg/image/upload/v1732793815/4_u1pvbr_zcx4gk_s0rsvb.webp","https://res.cloudinary.com/dabucfkmg/image/upload/v1732793815/3_ji6uzq_daetsl_atd9a5.jpg"]},{id:3,text:"Pousada Le Ange Mar",bgImages:["https://res.cloudinary.com/dabucfkmg/image/upload/v1732794079/1_fddk63_gm2m6g_zsmz72.webp","https://res.cloudinary.com/dabucfkmg/image/upload/v1732794080/3_islkto_wkjaco_rhlozj.webp","https://res.cloudinary.com/dabucfkmg/image/upload/v1732794079/2_eomyvd_nnnec7_eswd1j.webp","https://res.cloudinary.com/dabucfkmg/image/upload/v1732794080/4_tds2ap_sarfwc_hc9hcp.jpg","https://res.cloudinary.com/dabucfkmg/image/upload/v1732794080/6_cs2odp_vpnkmq_qh6coq.webp","https://res.cloudinary.com/dabucfkmg/image/upload/v1732794080/5_cvbsbp_vbx4jm_vzhrge.webp"]},{id:4,text:"Pousada Le Ange Serra",bgImages:["https://res.cloudinary.com/dabucfkmg/image/upload/v1732794343/1_vw8gku_jdpu1m_tbtbsi.jpg","https://res.cloudinary.com/dabucfkmg/image/upload/v1732794344/2_u9soep_axzzap_di3ov7.jpg","https://res.cloudinary.com/dabucfkmg/image/upload/v1732794344/4_g2prnk_ejavci_jbyp2i.jpg","https://res.cloudinary.com/dabucfkmg/image/upload/v1732794344/3_aryhje_lmyuui_kgbzi6.webp"]},{id:5,text:"Pousada Le Ange Mar",bgImages:["https://res.cloudinary.com/dabucfkmg/image/upload/v1732794449/1_urlgor_pasdht_nv4zgw.webp","https://res.cloudinary.com/dabucfkmg/image/upload/v1732794450/2_ij3lu8_hd6jwr.webp","https://res.cloudinary.com/dabucfkmg/image/upload/v1732794450/4_j7wxsn_d4icoi_kdvfuv.jpg","https://res.cloudinary.com/dabucfkmg/image/upload/v1732794450/3_scnvzz_z55ake_f6spei.jpg","https://res.cloudinary.com/dabucfkmg/image/upload/v1732794453/5_jn3xrs_bx73kp_on8czh.webp"]},{id:6,text:"Pousada Le Ange Serra",bgImages:["https://res.cloudinary.com/dabucfkmg/image/upload/v1732794515/1_zt1frt_tozga2_ncycjb.jpg","https://res.cloudinary.com/dabucfkmg/image/upload/v1732794515/2_m6a7pn_dljjpo_y0vvml.jpg","https://res.cloudinary.com/dabucfkmg/image/upload/v1732794515/3_f1nazk_rjbcys_yotipf.webp","https://res.cloudinary.com/dabucfkmg/image/upload/v1732794516/4_al1kde_fctxov_rekeo3.webp","https://res.cloudinary.com/dabucfkmg/image/upload/v1732794520/5_fz3g46_f4bfjz_qs5laa.webp"]},{id:7,text:"Pousada Le Ange Mar",bgImages:["https://res.cloudinary.com/dabucfkmg/image/upload/v1732794621/1_adshm2_k64nfp_uorp6c.webp","https://res.cloudinary.com/dabucfkmg/image/upload/v1732794622/2_gvo2bk_z3cakr_qgy2tg.webp","https://res.cloudinary.com/dabucfkmg/image/upload/v1732794622/3_eqkktf_gldizg_wu5png.webp","https://res.cloudinary.com/dabucfkmg/image/upload/v1732794625/4_pw8xsl_suk6of_mtx3s5.webp","https://res.cloudinary.com/dabucfkmg/image/upload/v1732794625/5_abwhg7_odyfrq_yini7c.webp"]}],$l=()=>c.jsxs(c.Fragment,{children:[c.jsx(W0,{children:c.jsx("h1",{children:"Palavra do Hóspede"})}),c.jsx(GC,{children:c.jsx(Jt,{slidesPerView:1,spaceBetween:10,modules:[vr,xr,Nn],pagination:!1,navigation:!0,loop:!0,grabCursor:!0,autoplay:{delay:7e3,disableOnInteraction:!1,pauseOnMouseEnter:!0},breakpoints:{1024:{slidesPerView:3},768:{slidesPerView:2},480:{slidesPerView:1}},children:XC.map(e=>c.jsx(en,{children:c.jsxs(YC,{"data-aos":"fade-up","data-aos-delay":"200",children:[c.jsx(Jt,{slidesPerView:1,spaceBetween:10,loop:!0,style:{width:"100%",height:"100%"},autoplay:{delay:5e3,disableOnInteraction:!1,pauseOnMouseEnter:!0},onTouchStart:t=>{t.stopPropagation()},onMouseEnter:t=>{t.stopPropagation()},children:e.bgImages.map((t,n)=>c.jsx(en,{children:c.jsx("div",{style:{backgroundImage:`url(${t})`,backgroundSize:"cover",backgroundPosition:"center",width:"100%",height:"100%",borderRadius:"25px 0 25px 0"},loading:"lazy"})},n))}),c.jsx(KC,{children:e.text})]})},e.id))})}),c.jsx(W0,{children:c.jsx(wr,{text:"Reservar agora!",textColor:"var(--color--black)",backgroundColor:"transparent",borderColor:"var(--color--black)",iconColor:"var(--color--black)",hoverBackgroundColor:"var(--color--black)",hoverBorderColor:"var(--color--black)",hoverColor:"var(--color--white)",hoverIconColor:"var(--color--white)",onClick:()=>window.open("https://wa.link/dojlwi","_blank")})})]});_.div`
    height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center; 

    @media (max-width: 768px){
        height: auto;
    }
`;const QC=_.section`
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
`,Bl=({carousels:e})=>c.jsxs(c.Fragment,{children:[c.jsxs(QC,{children:[c.jsxs("h1",{"data-aos":"fade-up","data-aos-delay":"200",children:[c.jsx("b",{children:"100%"})," Pet Friendly"]}),c.jsx(wr,{text:"Reservar agora!",textColor:"var(--color--black)",backgroundColor:"transparent",borderColor:"var(--color--black)",iconColor:"var(--color--black)",hoverBackgroundColor:"var(--color--black)",hoverBorderColor:"var(--color--black)",hoverColor:"var(--color--white)",hoverIconColor:"var(--color--white)",onClick:()=>window.open("https://wa.link/dojlwi","_blank")})]}),e.map((t,n)=>c.jsx(kd,{images:t.images,reverse:t.reverse||!1},n))]}),ZC=_.div`
    height: 5vh;

    @media (max-width: 768px){
        height: 0vh;
    }
`,JC=_.section`
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
        background-image: url('https://res.cloudinary.com/dabucfkmg/image/upload/v1732728790/foto_de_mulher_com_dois_cachorros_bwwkmi_pyqnx0.jpg');
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
`,e9=_.div`
    width: 45%;
    height: 100%;
    background-image: url('https://res.cloudinary.com/dabucfkmg/image/upload/v1732728790/foto_de_mulher_com_dois_cachorros_bwwkmi_pyqnx0.jpg');
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
`,t9=_.div`
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
`,n9=[{title:"Pet Friendly",description:"Não temos restrições quanto ao porte ou raça do seu pet, também não cobramos taxas adicionais para a vinda deles. Aqui, o seu pet tem liberdade total para acessar todas as nossas comodidades!",buttonText:"Viver minha experiência agora",imageUrl:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732730868/cachorro_olhando_pra_camera_ndannw_hvd1rf.webp"},{title:"Aventura",description:"Na propriedade, há trilhas que percorrem a natureza, beirando o rio! Em diversos pontos, você pode dar uma paradinha para tomar um banho nas águas frescas e renovar as energias!",buttonText:"Viver minha experiência agora",imageUrl:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732732523/aventura_odmky4_x0nryc.webp"},{title:"Refrescar",description:"Nossa maravilhosa piscina de borda infinita possui aquecimento solar e tratamento especial por ozônio, com níveis baixíssimos de cloro, além de contar com um ofurô acoplado, perfeito para aproveitar o final de tarde.",buttonText:"Viver minha experiência agora",imageUrl:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732732524/cachorro_pulando_na_piscina_lrhxpp_gyqrfv.jpg"},{title:"Sossego",description:"A área da sauna fica situada ao lado da mata, envolvida pelo som relaxante do rio que passa. Aqui, você pode desfrutar de um hot tub abastecido por água natural e aquecido à lenha, o combo perfeito para você relaxar.",imageUrl:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732730257/sossego_1_jsshhu_1_pyjrgu.jpg"},{title:"Lazer",description:"Nossas áreas internas contam com três salas superequipadas e aconchegantes, sendo elas: sala de TV, sala de estar, sala de jogos com mesa de bilhar, carteado, jogos de tabuleiro e biblioteca.",buttonText:"Viver minha experiência agora",imageUrl:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732728790/sala-de-estar_xuxiou_knlqok.webp"},{title:"Cozinha",description:"Todas as refeições estão incluídas: café da manhã, almoço, chá da tarde e jantar! Todas preparadas com muito tempero, amor e afeto.",buttonText:"Viver minha experiência agora",imageUrl:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732731824/buffetComprimido-compressed-_1__tjiacp_gv9frv.webp"},{title:"Diversão",description:"Espaço de sobra para o seu pet se divertir! Espaço agility à beira do lago, com muita grama, para o seu pet, correr, pular, brincar e, claro, nadar!",buttonText:"Viver minha experiência agora",imageUrl:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732730258/parc%C3%A3o_mdvo8p_sfazpp.webp"},{title:"Adega",description:"Para tornar a sua experiência ainda mais especial, contamos com uma adega subterrânea para a climatização perfeita dos vinhos, bar com carta variada de drinks, cervejas e destilados.",buttonText:"Viver minha experiência agora",imageUrl:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732730261/adega_uje7gn_gdxn3g.webp"},{title:"Suítes",description:"São 10 suítes encatadoras e cada uma possui o seu charme. Todas dispõem de uma banheira com vista para a natureza, lareira, cama king-size, ar-condicionado, frigobar e varanda.",buttonText:"Viver minha experiência agora",imageUrl:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732729616/suiteSerra2_aksiu9_feouvg.webp"},{title:"Relaxar",description:"Relaxe no nosso SPA com uma vista de frente para a mata! Você pode escolher contratar os nossos serviços de massoterapia, manicure e pedicure.",buttonText:"Viver minha experiência agora",imageUrl:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732732524/slide04_li94ks_oorjnr.webp"}],r9=[{images:[{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732732696/serra1_dlmpih_to7gwm.webp",alt:"Cachorro surfando na piscina",loading:"lazy",label:"Le Ange Serra"},{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732732698/serra2_h64lp3_dtgvyt.webp",alt:"Cachorro andando na borda da piscina",loading:"lazy",label:"Le Ange Serra"},{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732732700/serra3_hqphcd_xoguiy.webp",alt:"Cachorro sentado tomando sol e sorrindo para a foto",loading:"lazy",label:"Le Ange Serra"},{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732728790/foto_de_mulher_com_dois_cachorros_bwwkmi_pyqnx0.jpg",alt:"2 cachorros e uma mulher no meio",loading:"lazy",label:"Le Ange Serra"},{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732732701/serra5_liz2la_exkn5b.jpg",alt:"Cachorro mordendo uma bolinha",loading:"lazy",label:"Le Ange Serra"},{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732732704/serra4_anm8q9_zueh0h.webp",alt:"Casal com um casal de cachorro sentado na beira da piscina",loading:"lazy",label:"Le Ange Serra"},{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732732707/16_mwucoo_qw5inq_od6ein.jpg",alt:"Mulher na cachoeira com cachorros brincando",loading:"lazy",label:"Le Ange Serra"},{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732732708/15_epymcf_vqg5qs_ljexgt.webp",alt:"Mulher e cachorro na piscina sorrindo",loading:"lazy",label:"Le Ange Serra"},{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732732709/serra5_vgmvai_aa3uh5.jpg",alt:"3 cachorros tirando uma selfie",loading:"lazy",label:"Le Ange Serra"},{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732732713/serra3_abkfr4_abucit.webp",alt:"Cachorro dormindo na rede em cima da cachoeira",loading:"lazy",label:"Le Ange Serra"}]},{images:[{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732732714/serra2_qzxvpu_ttcjqm.webp",alt:"Cachorro dormindo no sofá",loading:"lazy",label:"Le Ange Serra"},{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732732717/11_wlyxbh_wxtele_kbbm8r.webp",alt:"Cachorro papai noel",loading:"lazy",label:"Le Ange Serra"},{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732732718/serra4_wdvsmr_z6jid2.webp",alt:"Um cachorro no cola de um humano sorrindo",loading:"lazy",label:"Le Ange Serra"},{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732732720/12_epl2gw_oc9uc0_w3jelm.jpg",alt:"2 cachorros e uma mulher no meio",loading:"lazy",label:"Le Ange Serra"},{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732729373/cachorro_na_m%C3%A3o_kil7xk_q6lqew.webp",alt:"Cachorro brincando na grama",loading:"lazy",label:"Le Ange Serra"},{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732732721/13_hhitda_hfolhl_ilbwmk.jpg",alt:"2 cachorros sorrindo na rede",loading:"lazy",label:"Le Ange Serra"},{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732732723/14_ybyv7y_wt3zn2_w8whu2.webp",alt:"Uma mulher e um cachorro do lado dela",loading:"lazy",label:"Le Ange Serra"},{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732732724/17_awkinq_ommg1k_1_vqdt6j.jpg",alt:"3 cachorros brincando na praia",loading:"lazy",label:"Le Ange Mar"},{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732732728/serra1_tohjvc_b6hpdg.jpgp",alt:"Cachorro andando na cachoeira",loading:"lazy",label:"Le Ange Serra"}],reverse:!0}],i9=_.section`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px){
        height: auto;
        padding: 0% 0 5% 0 ;
    }
`,a9=_.div`
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
`,o9=_.section`
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
`,s9=[{image:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732730393/risotos_oj42yf_nivhjz.webp",title:"Noite de Risotos",dateRange:"29/11/2024 até 01/12/2024 (2 diárias)",features:[{icon:c.jsx(re,{}),text:"30/11 - Noite de Risostos"},{icon:c.jsx(re,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(xe,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"359,20",discount:25},{image:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732730394/pizzas_lgsqcd_ekmh4f.webp",title:"Noite das pizzas",dateRange:"06/12/2024 até 08/12/2024 (3 diárias)",features:[{icon:c.jsx(re,{}),text:"07/12 - Noite das pizzas"},{icon:c.jsx(re,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(xe,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"359,20",discount:25},{image:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732730394/frutos_do_mar1_ly3hq1_ch6mr3.webp",title:"Frutos do Mar",dateRange:"13/12/2024 até 15/12/2024 (2 diárias)",features:[{icon:c.jsx(re,{}),text:"14/12 - Frutos do Mar"},{icon:c.jsx(re,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(xe,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"359,20",discount:25},{image:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732730394/fique3pague4_fiupcm_bgpy9c.webp",title:"Fique 4 pague 3",dateRange:"Segunda-feira a Sexta-feira",features:[{icon:c.jsx(re,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(hn,{}),text:"Até 12X SEM JUROS"},{icon:c.jsx(xe,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"538,90",discount:25},{image:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732730395/natal_wrunee_ceaifp.webp",title:"Pacote de Natal",dateRange:"21/12/2024 até 25/12/2024 (4 diárias)",features:[{icon:c.jsx(re,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(hn,{}),text:"Até 12X SEM JUROS"},{icon:c.jsx(xe,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"918,40",discount:25}],l9=_.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 15vh;
    margin-bottom: -10vh;

    @media (max-width: 768px){
        display: none;
    }
`,c9=[{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732729616/suiteSerra1_wm28o4_pbmwec.webp",text:"Suíte Superior 1",loading:"lazy"},{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732729616/foto2_pn8axc_qyclur.webp",text:"Suíte Superior 2",loading:"lazy"},{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732732956/suiteSuperior3_pgr53r_xengfh.webp",text:"Suíte Superior 3",loading:"lazy"},{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732732957/suiteStandard4_mrtwhq_vpx77n.webp",text:"Suíte Standard 4",loading:"lazy"},{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732732960/suiteStandard5_j9oyln_id3z9p.webp",text:"Suíte Standard 5",loading:"lazy"},{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732732963/suiteMaster6_id3iqs_gttw2r.webp",text:"Suíte Master 6",loading:"lazy"},{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732732964/suiteMaster7_bqdek7_gbhmfk.webp",text:"Suíte Superior 7",loading:"lazy"},{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732732967/suiteStandard8_lpyi22_yiiemz.webp",text:"Suíte Standard 8",loading:"lazy"},{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732732972/suiteSuperior9_v1mxwb_pfd3ww.webp",text:"Suíte Superior 9",loading:"lazy"},{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732732975/suiteMaster10_gqoxfm_kxxaso.webp",text:"Suíte Master 10",loading:"lazy"}],u9=()=>(k.useEffect(()=>{Re.init({duration:1e3,once:!1}),Re.refresh()},[]),c.jsxs(c.Fragment,{children:[c.jsx(Rn,{children:c.jsx("title",{children:"Le Ange Serra - Pousada Le Ange"})}),c.jsx(ZC,{}),c.jsx(Fn,{}),c.jsxs(JC,{children:[c.jsx(e9,{"data-aos":"zoom-in","data-aos-delay":"100"}),c.jsxs(t9,{children:[c.jsx("h4",{"data-aos":"fade-up","data-aos-delay":"100",children:"Conheça a Le Ange Serra, a pousada mais"}),c.jsxs("h1",{"data-aos":"fade-down","data-aos-delay":"200",children:["PET FRIENDLY",c.jsx("br",{})," DO ",c.jsx("b",{children:"BRASIL"})]}),c.jsx("p",{children:"Aqui você e o seu pet, são mais do que bem-vindos!"}),c.jsx(wr,{text:"Reservar agora!",textColor:"var(--color--black)",backgroundColor:"transparent",borderColor:"var(--color--black)",hoverBackgroundColor:"var(--color--green)",hoverBorderColor:"var(--color--green)",hoverColor:"var(--color--white)",hoverIconColor:"var(--color--white)",onClick:()=>window.open("https://wa.link/dojlwi","_blank")})]})]}),c.jsx(a9,{"data-aos":"fade-up","data-aos-delay":"200",children:c.jsx("h1",{"data-aos":"fade-in","data-aos-delay":"400",children:"LeAnge Serra | Miguel Pereira RJ"})}),c.jsx(i9,{children:c.jsx(Nl,{slides:n9})}),c.jsx(Jy,{images:c9,"data-aos":"fade-up","data-aos-delay":"200"}),c.jsx(Fl,{}),c.jsx(Bl,{carousels:r9}),c.jsx(l9,{children:c.jsx(ut,{text:"Fazer minha reserva!",onClick:()=>window.open("https://wa.link/dojlwi","_blank")})}),c.jsx(o9,{children:c.jsx(vo,{events:s9})}),c.jsx($l,{}),c.jsx(yr,{})]})),d9=Vn`
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
`,p9=_.section`
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
        animation: ${d9} 5s ease-in-out infinite;
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
`,f9=_.div`
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
`,e2=({images:e})=>{const[t,n]=k.useState(null);return k.useEffect(()=>{Re.init({duration:1e3,once:!1}),Re.refresh()},[]),c.jsxs(p9,{children:[c.jsxs(f9,{children:[c.jsx("div",{children:c.jsx("h1",{"data-aos":"fade-up","data-aos-delay":"100",children:"Conheça as suítes da Le Ange Mar"})}),c.jsx("div",{"data-aos":"fade-down","data-aos-delay":"250",children:c.jsx(Xi,{text:"Fazer reserva!",text2:"Clique e reserve",borderColor:"var(--color--white)",textColor:"var(--color--white)",hoverColor:"var(--color--black)",hoverTextColor:"var(--color--white)"})})]}),c.jsx("main",{"data-aos":"zoom-in-up","data-aos-delay":"400",children:e.map((r,i)=>c.jsxs("div",{onMouseEnter:()=>n(i),onMouseLeave:()=>n(null),children:[c.jsx("img",{src:r.src,alt:`Imagem ${i+1}`}),c.jsxs("span",{onClick:()=>window.location.href=`/leange/#/acomodaMar#suite${i+1}`,children:[t===i?"Conhecer Suítes":r.text,t===i&&c.jsx(nf,{})]})]},i))})]})},h9=_.div`
    height: 5vh;

    @media (max-width: 768px) {
        height: 0vh;
    }
`,m9=_.section`
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
        background-image: url('https://res.cloudinary.com/dabucfkmg/image/upload/v1732728789/FOTO-MAR_qssync_ei8mel.webp');
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
`,g9=_.div`
    width: 45%;
    height: 100%;
    background-image: url('https://res.cloudinary.com/dabucfkmg/image/upload/v1732728789/FOTO-MAR_qssync_ei8mel.webp');
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
`,v9=_.div`
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
`,x9=[{title:"Pet Friendly",description:"Não temos restrições quanto ao porte ou raça do seu pet, também não cobramos taxas adicionais para a vinda deles. Aqui, o seu pet tem liberdade total para acessar todas as nossas comodidades!",buttonText:"Viver minha experiência agora",imageUrl:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732731156/petfriendly-scaled_vsev2s_obkojq.webp"},{title:"Praia",description:"Para os amantes da praia, estamos localizados a apenas 150 metros da Praia Rasa, onde você e o seu pet podem aproveitar juntinhos e dar um mergulho delicioso no mar.",buttonText:"Viver minha experiência agora",imageUrl:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732730256/cachorro_na_praia_pmqyi4_p4nhwo.webp"},{title:"Piscina",description:"Nossa piscina aquecida com vista panorâmica para o oceano é de surpreender! Possui tratamento especial por ozônio com níveis baixíssimos de cloro, pensando no bem-estar da sua pele e a do seu pet também!",buttonText:"Viver minha experiência agora",imageUrl:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732728790/pousada_de_cima_vpzpdb_kssj6e.webp"},{title:"Ofurôs",description:"São dois ofurôs acoplados na piscina, para você relaxar na água quentinha, apreciando a vista exuberante do mar.",buttonText:"Viver minha experiência agora",imageUrl:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732730257/ofuros_kyjddp_raquu4.webp"},{title:"Sala de estar",description:"A sala de estar é aquela que abraça e aconchega. Cheia de sofás, você pode se acomodar e assistir à televisão, ou até mesmo ler um livro, sempre na companhia do seu pet.",buttonText:"Viver minha experiência agora",imageUrl:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732731157/saladeestar_yakcqy_dtbu48.webp"},{title:"Cozinha",description:"Todas as refeições estão incluídas: café da manhã, almoço, chá da tarde e jantar! Todas preparadas com muito tempero, amor e afeto.",buttonText:"Viver minha experiência agora",imageUrl:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732731157/risoto1-compressed_m583dd_ekltxk.webp"},{title:"Bar",description:"Para completar ainda mais a sua experiência, contamos com uma carta variada de vinhos, destilados, drinks e cervejas!",buttonText:"Viver minha experiência agora",imageUrl:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732730257/bar_xl6dvc_bkc9w5.webp"},{title:"Suítes",description:"São 8 suítes, elegantemente, decoradas, todas com vista para o mar, banheira de imersão, varanda, cama king-size, ar-condicionado e frigobar.",buttonText:"Viver minha experiência agora",imageUrl:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732729616/suiteMar2_qlgel2_d11sun.webp"}],y9=_.section`
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
`,w9=[{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732731480/suiteMar01_p6bfoi-compressed_kixsaa_kjg49l.webp",text:"Suíte Superior 1",loading:"lazy"},{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732731481/IMG_0142-compressed_lfijwu_h6x05q.webp",text:"Suíte Standard 2",loading:"lazy"},{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732731481/suiteMar03_o9sxbf-compressed_uw2hox_plhelj.webp",text:"Suíte Superior 3",loading:"lazy"},{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732731484/IMG_0143-compressed_fk4kgv_oxklv8.webp",text:"Suíte Superior 4",loading:"lazy"},{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732731487/suiteMar05_oid9as-compressed_al5vur_spz4rq.webp",text:"Suíte Superior 5",loading:"lazy"},{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732731489/mar_master_8_m1x38m_onrxki.webp",text:"Suíte Superior 6",loading:"lazy"},{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732731489/suiteMar07_dgfxzq-compressed_kody5f_uyjy7m.webp",text:"Suíte Master 7",loading:"lazy"},{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732731494/suiteMar08_g1gmt0-compressed_mymcv1_rtodwa.webp",text:"Suíte Master 8",loading:"lazy"}],b9=_.div`
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
`,S9=_.section`
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
`,k9=[{image:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732730393/risotos_oj42yf_nivhjz.webp",title:"Noite de Risotos",dateRange:"29/11/2024 até 01/12/2024 (2 diárias)",features:[{icon:c.jsx(re,{}),text:"30/11 - Noite de Risostos"},{icon:c.jsx(re,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(xe,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"359,20",discount:25},{image:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732730394/pizzas_lgsqcd_ekmh4f.webp",title:"Noite das pizzas",dateRange:"06/12/2024 até 08/12/2024 (3 diárias)",features:[{icon:c.jsx(re,{}),text:"07/12 - Noite das pizzas"},{icon:c.jsx(re,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(xe,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"359,20",discount:25},{image:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732730394/frutos_do_mar1_ly3hq1_ch6mr3.webp",title:"Frutos do Mar",dateRange:"13/12/2024 até 15/12/2024 (2 diárias)",features:[{icon:c.jsx(re,{}),text:"14/12 - Frutos do Mar"},{icon:c.jsx(re,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(xe,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"359,20",discount:25},{image:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732730394/fique3pague4_fiupcm_bgpy9c.webp",title:"Fique 4 pague 3",dateRange:"Segunda-feira a Sexta-feira",features:[{icon:c.jsx(re,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(hn,{}),text:"Até 12X SEM JUROS"},{icon:c.jsx(xe,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"538,90",discount:25},{image:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732730395/natal_wrunee_ceaifp.webp",title:"Pacote de Natal",dateRange:"21/12/2024 até 25/12/2024 (4 diárias)",features:[{icon:c.jsx(re,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(hn,{}),text:"Até 12X SEM JUROS"},{icon:c.jsx(xe,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"918,40",discount:25}],j9=_.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 15vh;
    margin-bottom: -10vh;

    @media (max-width: 768px) {
        display: none;
    }
`,_9=[{images:[{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732731907/1_sxf4fc_a9uljb_pbaml7.webp",alt:"Foto de cachorro com uma bola na boca",loading:"lazy",label:"Le Ange Mar"},{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732731908/2_cldel9_wnqquw_gnk0f4.webp",alt:"Foto do cachorro sentado tomando sol",loading:"lazy",label:"Le Ange Mar"},{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732731908/3_i0ctxp_megfsi_exu5hi.jpg",alt:"Cachorro na piscina sorrindo",loading:"lazy",label:"Le Ange Mar"},{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732731911/mar5_wwsqtk_dmwbdd.webp",alt:"Cachorro tirando uma selfie com outros 3 cachorros",loading:"lazy",label:"Le Ange Mar"},{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732731912/cachorro-olhando-para-camera_wpovwv_jhxkqd.webp",alt:"Foto do cachorro olhando para a câmera",loading:"lazy",label:"Le Ange Mar"},{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732732025/5_flrzdf_wyxn6v_h37kx5.jpg",alt:"Cachorro com a lingua para fora",loading:"lazy",label:"Le Ange Mar"},{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732732025/mar4_ilxhpl_buvyxu.webp",alt:"Cachorro na borda da piscina",loading:"lazy",label:"Le Ange Mar"},{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732732026/mar6_wcjggv_nheujx.webp",alt:"Cachorro em uma prancha de surf na onda",loading:"lazy",label:"Le Ange Mar"},{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732732029/6_b6jtbs_dfnbyu_m0dpfv.webp",alt:"Cachorro com óculos escuros",loading:"lazy",label:"Le Ange Mar"},{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732732029/8_zr7p3o_czbag1_jfqnsr.jpg",alt:"Cachorro e um cachorro pequeno",loading:"lazy",label:"Le Ange Mar"}]},{images:[{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732732032/7_gutmna_mncfkn_o93tly.webp",alt:"Foto de um cachorro com uma taça do lado",loading:"lazy",label:"Le Ange Mar"},{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732732033/10_olepft_mfx8nm_hxzfgu.webp",alt:"3 cachorros e um homem na piscina",loading:"lazy",label:"Le Ange Mar"},{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732732035/mar2_xvqf5o_skheep.webp",alt:"Cachorro marrom",loading:"lazy",label:"Le Ange Mar"},{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732732036/mar1_tsyxm8_ek8eoa.webp",alt:"Cachorro marrom na piscina",loading:"lazy",label:"Le Ange Mar"},{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732732038/mar3_jmdiw8_lyw4uq.webp",alt:"Cachorro branco olhando para a camera",loading:"lazy",label:"Le Ange Mar"},{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732732039/mar7_vyslpi_blujc7.webp",alt:"Cachorro dormindo no sofá",loading:"lazy",label:"Le Ange Mar"},{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732732041/mar8_ywe1hn_vulehv.jpg",alt:"Cachorro em cima do morro olhando para o lado",loading:"lazy",label:"Le Ange Mar"},{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732732042/17_awkinq_ommg1k_wuhbs8.jpg",alt:"3 cachorros brincando na praia",loading:"lazy",label:"Le Ange Mar"},{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732729373/cachorro_na_m%C3%A3o_kil7xk_q6lqew.webp",alt:"Foto do cachorro olhando para a câmera",loading:"lazy",label:"Le Ange Mar"}],reverse:!0}],T9=()=>(k.useEffect(()=>{Re.init({duration:1e3,once:!1}),Re.refresh()},[]),c.jsxs(c.Fragment,{children:[c.jsx(Rn,{children:c.jsx("title",{children:"Le Ange Serra - Pousada Le Ange"})}),c.jsx(h9,{}),c.jsx(Fn,{}),c.jsxs(m9,{children:[c.jsxs(v9,{children:[c.jsxs("h4",{"data-aos":"fade-up","data-aos-delay":"100",children:["Conheça a ",c.jsx("b",{children:"Le Ange Mar"}),", a pousada mais"]}),c.jsxs("h1",{"data-aos":"fade-down","data-aos-delay":"200",children:["PET FRIENDLY",c.jsx("br",{})," DO ",c.jsx("b",{children:"BRASIL"})]}),c.jsx("p",{children:"Aqui, você e o seu pet são mais do que bem-vindos!"}),c.jsx("div",{children:c.jsx(wr,{text:"Reservar agora!",textColor:"var(--color--black)",backgroundColor:"transparent",borderColor:"var(--color--black)",iconColor:"var(--color--black)",hoverBackgroundColor:"var(--color--blue)",hoverBorderColor:"var(--color--blue)",hoverColor:"var(--color--white)",hoverIconColor:"var(--color--white)",onClick:()=>window.open("https://wa.link/dojlwi","_blank")})})]}),c.jsx(g9,{"data-aos":"fade-left","data-aos-delay":"200"})]}),c.jsx(b9,{"data-aos":"fade-in","data-aos-delay":"100",children:c.jsx("h1",{"data-aos":"fade-up","data-aos-delay":"300",children:"LeAnge Mar | Armação dos Búzios RJ"})}),c.jsx(y9,{"data-aos":"fade-up","data-aos-delay":"50",children:c.jsx(Nl,{slides:x9,titleColor:"var(--color--blue)",buttonBgColor:"var(--color--blue)",imagePosition:"left"})}),c.jsx(e2,{images:w9}),c.jsx(Fl,{colorDefinedBold:"var(--color--blue)","data-aos":"fade-up","data-aos-delay":"400"}),c.jsx(Bl,{carousels:_9,"data-aos":"fade-in","data-aos-delay":"400"}),c.jsx(j9,{children:c.jsx(ut,{text:"Fazer minha reserva!",onClick:()=>window.open("https://wa.link/dojlwi","_blank")})}),c.jsx(S9,{"data-aos":"fade-up","data-aos-delay":"400",children:c.jsx(vo,{events:k9})}),c.jsx($l,{}),c.jsx(yr,{})]}));function C9(e){return ee({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm8.25 5.25a.75.75 0 0 1 .75-.75h8.25a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75Z",clipRule:"evenodd"},child:[]}]})(e)}var t2={exports:{}};(function(e,t){(function(n,r){e.exports=r(k)})(typeof self<"u"?self:K0,function(n){return function(r){var i={};function a(o){if(i[o])return i[o].exports;var s=i[o]={i:o,l:!1,exports:{}};return r[o].call(s.exports,s,s.exports,a),s.l=!0,s.exports}return a.m=r,a.c=i,a.d=function(o,s,l){a.o(o,s)||Object.defineProperty(o,s,{enumerable:!0,get:l})},a.r=function(o){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})},a.t=function(o,s){if(1&s&&(o=a(o)),8&s||4&s&&typeof o=="object"&&o&&o.__esModule)return o;var l=Object.create(null);if(a.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:o}),2&s&&typeof o!="string")for(var u in o)a.d(l,u,(function(d){return o[d]}).bind(null,u));return l},a.n=function(o){var s=o&&o.__esModule?function(){return o.default}:function(){return o};return a.d(s,"a",s),s},a.o=function(o,s){return Object.prototype.hasOwnProperty.call(o,s)},a.p="",a(a.s=2)}([function(r,i){r.exports=n},function(r,i,a){var o={linear:function(s,l,u,d){return(u-l)*s/d+l},easeInQuad:function(s,l,u,d){return(u-l)*(s/=d)*s+l},easeOutQuad:function(s,l,u,d){return-(u-l)*(s/=d)*(s-2)+l},easeInOutQuad:function(s,l,u,d){var p=u-l;return(s/=d/2)<1?p/2*s*s+l:-p/2*(--s*(s-2)-1)+l},easeInCubic:function(s,l,u,d){return(u-l)*(s/=d)*s*s+l},easeOutCubic:function(s,l,u,d){return(u-l)*((s=s/d-1)*s*s+1)+l},easeInOutCubic:function(s,l,u,d){var p=u-l;return(s/=d/2)<1?p/2*s*s*s+l:p/2*((s-=2)*s*s+2)+l},easeInQuart:function(s,l,u,d){return(u-l)*(s/=d)*s*s*s+l},easeOutQuart:function(s,l,u,d){return-(u-l)*((s=s/d-1)*s*s*s-1)+l},easeInOutQuart:function(s,l,u,d){var p=u-l;return(s/=d/2)<1?p/2*s*s*s*s+l:-p/2*((s-=2)*s*s*s-2)+l},easeInQuint:function(s,l,u,d){return(u-l)*(s/=d)*s*s*s*s+l},easeOutQuint:function(s,l,u,d){return(u-l)*((s=s/d-1)*s*s*s*s+1)+l},easeInOutQuint:function(s,l,u,d){var p=u-l;return(s/=d/2)<1?p/2*s*s*s*s*s+l:p/2*((s-=2)*s*s*s*s+2)+l},easeInSine:function(s,l,u,d){var p=u-l;return-p*Math.cos(s/d*(Math.PI/2))+p+l},easeOutSine:function(s,l,u,d){return(u-l)*Math.sin(s/d*(Math.PI/2))+l},easeInOutSine:function(s,l,u,d){return-(u-l)/2*(Math.cos(Math.PI*s/d)-1)+l},easeInExpo:function(s,l,u,d){return s==0?l:(u-l)*Math.pow(2,10*(s/d-1))+l},easeOutExpo:function(s,l,u,d){var p=u-l;return s==d?l+p:p*(1-Math.pow(2,-10*s/d))+l},easeInOutExpo:function(s,l,u,d){var p=u-l;return s===0?l:s===d?l+p:(s/=d/2)<1?p/2*Math.pow(2,10*(s-1))+l:p/2*(2-Math.pow(2,-10*--s))+l},easeInCirc:function(s,l,u,d){return-(u-l)*(Math.sqrt(1-(s/=d)*s)-1)+l},easeOutCirc:function(s,l,u,d){return(u-l)*Math.sqrt(1-(s=s/d-1)*s)+l},easeInOutCirc:function(s,l,u,d){var p=u-l;return(s/=d/2)<1?-p/2*(Math.sqrt(1-s*s)-1)+l:p/2*(Math.sqrt(1-(s-=2)*s)+1)+l},easeInElastic:function(s,l,u,d){var p,f,g,x=u-l;return g=1.70158,s===0?l:(s/=d)==1?l+x:((f=0)||(f=.3*d),(p=x)<Math.abs(x)?(p=x,g=f/4):g=f/(2*Math.PI)*Math.asin(x/p),-p*Math.pow(2,10*(s-=1))*Math.sin((s*d-g)*(2*Math.PI)/f)+l)},easeOutElastic:function(s,l,u,d){var p,f,g,x=u-l;return g=1.70158,s===0?l:(s/=d)==1?l+x:((f=0)||(f=.3*d),(p=x)<Math.abs(x)?(p=x,g=f/4):g=f/(2*Math.PI)*Math.asin(x/p),p*Math.pow(2,-10*s)*Math.sin((s*d-g)*(2*Math.PI)/f)+x+l)},easeInOutElastic:function(s,l,u,d){var p,f,g,x=u-l;return g=1.70158,s===0?l:(s/=d/2)==2?l+x:((f=0)||(f=d*.44999999999999996),(p=x)<Math.abs(x)?(p=x,g=f/4):g=f/(2*Math.PI)*Math.asin(x/p),s<1?p*Math.pow(2,10*(s-=1))*Math.sin((s*d-g)*(2*Math.PI)/f)*-.5+l:p*Math.pow(2,-10*(s-=1))*Math.sin((s*d-g)*(2*Math.PI)/f)*.5+x+l)},easeInBack:function(s,l,u,d,p){return p===void 0&&(p=1.70158),(u-l)*(s/=d)*s*((p+1)*s-p)+l},easeOutBack:function(s,l,u,d,p){return p===void 0&&(p=1.70158),(u-l)*((s=s/d-1)*s*((p+1)*s+p)+1)+l},easeInOutBack:function(s,l,u,d,p){var f=u-l;return p===void 0&&(p=1.70158),(s/=d/2)<1?f/2*(s*s*((1+(p*=1.525))*s-p))+l:f/2*((s-=2)*s*((1+(p*=1.525))*s+p)+2)+l},easeInBounce:function(s,l,u,d){var p=u-l;return p-o.easeOutBounce(d-s,0,p,d)+l},easeOutBounce:function(s,l,u,d){var p=u-l;return(s/=d)<.36363636363636365?p*(7.5625*s*s)+l:s<.7272727272727273?p*(7.5625*(s-=.5454545454545454)*s+.75)+l:s<.9090909090909091?p*(7.5625*(s-=.8181818181818182)*s+.9375)+l:p*(7.5625*(s-=.9545454545454546)*s+.984375)+l},easeInOutBounce:function(s,l,u,d){var p=u-l;return s<d/2?.5*o.easeInBounce(2*s,0,p,d)+l:.5*o.easeOutBounce(2*s-d,0,p,d)+.5*p+l}};r.exports=o},function(r,i,a){r.exports=a(3)},function(r,i,a){a.r(i),a.d(i,"ReactConfetti",function(){return ce});var o,s,l=a(0),u=a.n(l),d=a(1),p=a.n(d);function f(z,O){return z+Math.random()*(O-z)}function g(z,O){for(var V=0;V<O.length;V++){var I=O[V];I.enumerable=I.enumerable||!1,I.configurable=!0,"value"in I&&(I.writable=!0),Object.defineProperty(z,I.key,I)}}function x(z,O,V){return O in z?Object.defineProperty(z,O,{value:V,enumerable:!0,configurable:!0,writable:!0}):z[O]=V,z}(function(z){z[z.Circle=0]="Circle",z[z.Square=1]="Square",z[z.Strip=2]="Strip"})(o||(o={})),function(z){z[z.Positive=1]="Positive",z[z.Negative=-1]="Negative"}(s||(s={}));var y=function(){function z(I,G,$,q){(function(ql,Hl){if(!(ql instanceof Hl))throw new TypeError("Cannot call a class as a function")})(this,z),x(this,"context",void 0),x(this,"radius",void 0),x(this,"x",void 0),x(this,"y",void 0),x(this,"w",void 0),x(this,"h",void 0),x(this,"vx",void 0),x(this,"vy",void 0),x(this,"shape",void 0),x(this,"angle",void 0),x(this,"angularSpin",void 0),x(this,"color",void 0),x(this,"rotateY",void 0),x(this,"rotationDirection",void 0),x(this,"getOptions",void 0),this.getOptions=G;var te,le,fe=this.getOptions(),gn=fe.colors,Ft=fe.initialVelocityX,$t=fe.initialVelocityY;this.context=I,this.x=$,this.y=q,this.w=f(5,20),this.h=f(5,20),this.radius=f(5,10),this.vx=typeof Ft=="number"?f(-Ft,Ft):f(Ft.min,Ft.max),this.vy=typeof $t=="number"?f(-$t,0):f($t.min,$t.max),this.shape=(te=0,le=2,Math.floor(te+Math.random()*(le-te+1))),this.angle=f(0,360)*Math.PI/180,this.angularSpin=f(-.2,.2),this.color=gn[Math.floor(Math.random()*gn.length)],this.rotateY=f(0,1),this.rotationDirection=f(0,1)?s.Positive:s.Negative}var O,V;return O=z,(V=[{key:"update",value:function(){var I=this.getOptions(),G=I.gravity,$=I.wind,q=I.friction,te=I.opacity,le=I.drawShape;this.x+=this.vx,this.y+=this.vy,this.vy+=G,this.vx+=$,this.vx*=q,this.vy*=q,this.rotateY>=1&&this.rotationDirection===s.Positive?this.rotationDirection=s.Negative:this.rotateY<=-1&&this.rotationDirection===s.Negative&&(this.rotationDirection=s.Positive);var fe=.1*this.rotationDirection;if(this.rotateY+=fe,this.angle+=this.angularSpin,this.context.save(),this.context.translate(this.x,this.y),this.context.rotate(this.angle),this.context.scale(1,this.rotateY),this.context.rotate(this.angle),this.context.beginPath(),this.context.fillStyle=this.color,this.context.strokeStyle=this.color,this.context.globalAlpha=te,this.context.lineCap="round",this.context.lineWidth=2,le&&typeof le=="function")le.call(this,this.context);else switch(this.shape){case o.Circle:this.context.beginPath(),this.context.arc(0,0,this.radius,0,2*Math.PI),this.context.fill();break;case o.Square:this.context.fillRect(-this.w/2,-this.h/2,this.w,this.h);break;case o.Strip:this.context.fillRect(-this.w/6,-this.h/2,this.w/3,this.h)}this.context.closePath(),this.context.restore()}}])&&g(O.prototype,V),z}();function b(z,O,V){return O in z?Object.defineProperty(z,O,{value:V,enumerable:!0,configurable:!0,writable:!0}):z[O]=V,z}var v=function z(O,V){var I=this;(function($,q){if(!($ instanceof q))throw new TypeError("Cannot call a class as a function")})(this,z),b(this,"canvas",void 0),b(this,"context",void 0),b(this,"getOptions",void 0),b(this,"x",0),b(this,"y",0),b(this,"w",0),b(this,"h",0),b(this,"lastNumberOfPieces",0),b(this,"tweenInitTime",Date.now()),b(this,"particles",[]),b(this,"particlesGenerated",0),b(this,"removeParticleAt",function($){I.particles.splice($,1)}),b(this,"getParticle",function(){var $=f(I.x,I.w+I.x),q=f(I.y,I.h+I.y);return new y(I.context,I.getOptions,$,q)}),b(this,"animate",function(){var $=I.canvas,q=I.context,te=I.particlesGenerated,le=I.lastNumberOfPieces,fe=I.getOptions(),gn=fe.run,Ft=fe.recycle,$t=fe.numberOfPieces,ql=fe.debug,Hl=fe.tweenFunction,Ul=fe.tweenDuration;if(!gn)return!1;var Wl=I.particles.length,Qi=Ft?Wl:te,Gl=Date.now();if(Qi<$t){le!==$t&&(I.tweenInitTime=Gl,I.lastNumberOfPieces=$t);for(var vf=I.tweenInitTime,n2=Hl(Gl-vf>Ul?Ul:Math.max(0,Gl-vf),Qi,$t,Ul),xf=Math.round(n2-Qi),yf=0;yf<xf;yf++)I.particles.push(I.getParticle());I.particlesGenerated+=xf}return ql&&(q.font="12px sans-serif",q.fillStyle="#333",q.textAlign="right",q.fillText("Particles: ".concat(Wl),$.width-10,$.height-20)),I.particles.forEach(function(Zi,wf){Zi.update(),(Zi.y>$.height||Zi.y<-100||Zi.x>$.width+100||Zi.x<-100)&&(Ft&&Qi<=$t?I.particles[wf]=I.getParticle():I.removeParticleAt(wf))}),Wl>0||Qi<$t}),this.canvas=O;var G=this.canvas.getContext("2d");if(!G)throw new Error("Could not get canvas context");this.context=G,this.getOptions=V};function h(z,O){var V=Object.keys(z);if(Object.getOwnPropertySymbols){var I=Object.getOwnPropertySymbols(z);O&&(I=I.filter(function(G){return Object.getOwnPropertyDescriptor(z,G).enumerable})),V.push.apply(V,I)}return V}function m(z){for(var O=1;O<arguments.length;O++){var V=arguments[O]!=null?arguments[O]:{};O%2?h(Object(V),!0).forEach(function(I){S(z,I,V[I])}):Object.getOwnPropertyDescriptors?Object.defineProperties(z,Object.getOwnPropertyDescriptors(V)):h(Object(V)).forEach(function(I){Object.defineProperty(z,I,Object.getOwnPropertyDescriptor(V,I))})}return z}function w(z,O){for(var V=0;V<O.length;V++){var I=O[V];I.enumerable=I.enumerable||!1,I.configurable=!0,"value"in I&&(I.writable=!0),Object.defineProperty(z,I.key,I)}}function S(z,O,V){return O in z?Object.defineProperty(z,O,{value:V,enumerable:!0,configurable:!0,writable:!0}):z[O]=V,z}var j={width:typeof window<"u"?window.innerWidth:300,height:typeof window<"u"?window.innerHeight:200,numberOfPieces:200,friction:.99,wind:0,gravity:.1,initialVelocityX:4,initialVelocityY:10,colors:["#f44336","#e91e63","#9c27b0","#673ab7","#3f51b5","#2196f3","#03a9f4","#00bcd4","#009688","#4CAF50","#8BC34A","#CDDC39","#FFEB3B","#FFC107","#FF9800","#FF5722","#795548"],opacity:1,debug:!1,tweenFunction:p.a.easeInOutQuad,tweenDuration:5e3,recycle:!0,run:!0},C=function(){function z(I,G){var $=this;(function(te,le){if(!(te instanceof le))throw new TypeError("Cannot call a class as a function")})(this,z),S(this,"canvas",void 0),S(this,"context",void 0),S(this,"_options",void 0),S(this,"generator",void 0),S(this,"rafId",void 0),S(this,"setOptionsWithDefaults",function(te){var le={confettiSource:{x:0,y:0,w:$.canvas.width,h:0}};$._options=m(m(m({},le),j),te),Object.assign($,te.confettiSource)}),S(this,"update",function(){var te=$.options,le=te.run,fe=te.onConfettiComplete,gn=$.canvas,Ft=$.context;le&&(Ft.fillStyle="white",Ft.clearRect(0,0,gn.width,gn.height)),$.generator.animate()?$.rafId=requestAnimationFrame($.update):(fe&&typeof fe=="function"&&$.generator.particlesGenerated>0&&fe.call($,$),$._options.run=!1)}),S(this,"reset",function(){$.generator&&$.generator.particlesGenerated>0&&($.generator.particlesGenerated=0,$.generator.particles=[],$.generator.lastNumberOfPieces=0)}),S(this,"stop",function(){$.options={run:!1},$.rafId&&(cancelAnimationFrame($.rafId),$.rafId=void 0)}),this.canvas=I;var q=this.canvas.getContext("2d");if(!q)throw new Error("Could not get canvas context");this.context=q,this.generator=new v(this.canvas,function(){return $.options}),this.options=G,this.update()}var O,V;return O=z,(V=[{key:"options",get:function(){return this._options},set:function(I){var G=this._options&&this._options.run,$=this._options&&this._options.recycle;this.setOptionsWithDefaults(I),this.generator&&(Object.assign(this.generator,this.options.confettiSource),typeof I.recycle=="boolean"&&I.recycle&&$===!1&&(this.generator.lastNumberOfPieces=this.generator.particles.length)),typeof I.run=="boolean"&&I.run&&G===!1&&this.update()}}])&&w(O.prototype,V),z}();function T(z){return function(O){if(Array.isArray(O))return U(O)}(z)||function(O){if(typeof Symbol<"u"&&Symbol.iterator in Object(O))return Array.from(O)}(z)||D(z)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function A(z){return(A=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(O){return typeof O}:function(O){return O&&typeof Symbol=="function"&&O.constructor===Symbol&&O!==Symbol.prototype?"symbol":typeof O})(z)}function E(){return(E=Object.assign||function(z){for(var O=1;O<arguments.length;O++){var V=arguments[O];for(var I in V)Object.prototype.hasOwnProperty.call(V,I)&&(z[I]=V[I])}return z}).apply(this,arguments)}function P(z,O){var V=Object.keys(z);if(Object.getOwnPropertySymbols){var I=Object.getOwnPropertySymbols(z);O&&(I=I.filter(function(G){return Object.getOwnPropertyDescriptor(z,G).enumerable})),V.push.apply(V,I)}return V}function M(z){for(var O=1;O<arguments.length;O++){var V=arguments[O]!=null?arguments[O]:{};O%2?P(Object(V),!0).forEach(function(I){we(z,I,V[I])}):Object.getOwnPropertyDescriptors?Object.defineProperties(z,Object.getOwnPropertyDescriptors(V)):P(Object(V)).forEach(function(I){Object.defineProperty(z,I,Object.getOwnPropertyDescriptor(V,I))})}return z}function R(z,O){return function(V){if(Array.isArray(V))return V}(z)||function(V,I){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(V)))){var G=[],$=!0,q=!1,te=void 0;try{for(var le,fe=V[Symbol.iterator]();!($=(le=fe.next()).done)&&(G.push(le.value),!I||G.length!==I);$=!0);}catch(gn){q=!0,te=gn}finally{try{$||fe.return==null||fe.return()}finally{if(q)throw te}}return G}}(z,O)||D(z,O)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function D(z,O){if(z){if(typeof z=="string")return U(z,O);var V=Object.prototype.toString.call(z).slice(8,-1);return V==="Object"&&z.constructor&&(V=z.constructor.name),V==="Map"||V==="Set"?Array.from(z):V==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(V)?U(z,O):void 0}}function U(z,O){(O==null||O>z.length)&&(O=z.length);for(var V=0,I=new Array(O);V<O;V++)I[V]=z[V];return I}function Q(z,O){if(!(z instanceof O))throw new TypeError("Cannot call a class as a function")}function Y(z,O){for(var V=0;V<O.length;V++){var I=O[V];I.enumerable=I.enumerable||!1,I.configurable=!0,"value"in I&&(I.writable=!0),Object.defineProperty(z,I.key,I)}}function L(z,O){return(L=Object.setPrototypeOf||function(V,I){return V.__proto__=I,V})(z,O)}function N(z){var O=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}();return function(){var V,I=Z(z);if(O){var G=Z(this).constructor;V=Reflect.construct(I,arguments,G)}else V=I.apply(this,arguments);return B(this,V)}}function B(z,O){return!O||A(O)!=="object"&&typeof O!="function"?K(z):O}function K(z){if(z===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return z}function Z(z){return(Z=Object.setPrototypeOf?Object.getPrototypeOf:function(O){return O.__proto__||Object.getPrototypeOf(O)})(z)}function we(z,O,V){return O in z?Object.defineProperty(z,O,{value:V,enumerable:!0,configurable:!0,writable:!0}):z[O]=V,z}var he=u.a.createRef(),_e=function(z){(function($,q){if(typeof q!="function"&&q!==null)throw new TypeError("Super expression must either be null or a function");$.prototype=Object.create(q&&q.prototype,{constructor:{value:$,writable:!0,configurable:!0}}),q&&L($,q)})(G,z);var O,V,I=N(G);function G($){var q;Q(this,G);for(var te=arguments.length,le=new Array(te>1?te-1:0),fe=1;fe<te;fe++)le[fe-1]=arguments[fe];return we(K(q=I.call.apply(I,[this,$].concat(le))),"canvas",u.a.createRef()),we(K(q),"confetti",void 0),q.canvas=$.canvasRef||he,q}return O=G,(V=[{key:"componentDidMount",value:function(){if(this.canvas.current){var $=pe(this.props)[0];this.confetti=new C(this.canvas.current,$)}}},{key:"componentDidUpdate",value:function(){var $=pe(this.props)[0];this.confetti&&(this.confetti.options=$)}},{key:"componentWillUnmount",value:function(){this.confetti&&this.confetti.stop(),this.confetti=void 0}},{key:"render",value:function(){var $=R(pe(this.props),2),q=$[0],te=$[1],le=M({zIndex:2,position:"absolute",pointerEvents:"none",top:0,left:0,bottom:0,right:0},te.style);return u.a.createElement("canvas",E({width:q.width,height:q.height,ref:this.canvas},te,{style:le}))}}])&&Y(O.prototype,V),G}(l.Component);function pe(z){var O={},V={},I=[].concat(T(Object.keys(j)),["confettiSource","drawShape","onConfettiComplete"]),G=["canvasRef"];for(var $ in z){var q=z[$];I.includes($)?O[$]=q:G.includes($)?G[$]=q:V[$]=q}return[O,V,{}]}we(_e,"defaultProps",M({},j)),we(_e,"displayName","ReactConfetti");var ce=u.a.forwardRef(function(z,O){return u.a.createElement(_e,E({canvasRef:O},z))});i.default=ce}]).default})})(t2);var E9=t2.exports;const P9=Hr(E9);Vn`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;const G0=_.select`
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
`,z9=_.div`
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
`,A9=_.div`
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
`,M9=_.header`
    display: flex;
    gap: 5px;
`,yn=_(({isActive:e,...t})=>c.jsx(yv,{...t}))`
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
`,nn=_.span`
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
`,L9=_.div`
    opacity: ${({isVisible:e})=>e?1:0};
    transition: opacity 1s ease-out;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
`,Y0=_(yn)`
    background: ${({isActive:e})=>e?"linear-gradient(45deg, #ff6b6b, #f06595, #eeafaf)":"transparent"};
    color: ${({isActive:e})=>e?"white":"var(--color--black)"};

    &:hover {
        background: linear-gradient(45deg, #f06595, #ff6b6b, #eeafaf);
        color: white;
    }
`,O9=_.div`
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
`,I9=_.div`
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
`,R9=()=>{const e=mn(),[t,n]=k.useState(!1),[r,i]=k.useState(!1),[a,o]=k.useState(!1),[s,l]=k.useState(!1),[u,d]=k.useState(!1),[p,f]=k.useState(!1);let g;const x=()=>{l(S=>!S),d(S=>!S)},y=()=>{l(!1),d(!1)},b=()=>{o(!0),clearTimeout(g),g=setTimeout(()=>{o(!1)},3e3)},v=kl(),[h,m]=k.useState(""),w=S=>{const j=S.target.value;j&&(m(j),v(j))};return k.useEffect(()=>(window.addEventListener("scroll",b),()=>{window.removeEventListener("scroll",b),clearTimeout(g)}),[]),k.useEffect(()=>{if(e.pathname!=="/"){f(!0);const S=setTimeout(()=>{f(!1)},1e3);return()=>clearTimeout(S)}else f(!1)},[e.pathname]),k.useEffect(()=>{if(e.pathname==="/event"){n(!0),i(!0);const S=setTimeout(()=>{i(!1),setTimeout(()=>n(!1),1e3)},8e3);return()=>clearTimeout(S)}else i(!1),setTimeout(()=>n(!1),1e3)},[e.pathname]),k.useEffect(()=>{s&&y()},[e.pathname]),c.jsxs(c.Fragment,{children:[c.jsx(z9,{isLoading:p,children:c.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732793361/V1_kdjdkc_hl7uak.gif",alt:"Loading..."})}),c.jsxs(A9,{isScrolled:a,children:[t&&c.jsx(L9,{isVisible:r,children:c.jsx(P9,{})}),c.jsx(yv,{to:"/","aria-label":"Home",children:c.jsxs("picture",{children:[c.jsx("source",{media:"(max-width: 480px)",srcSet:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732793361/black_kteyv6_tywhc1.png"}),c.jsx("source",{media:"(max-width: 768px)",srcSet:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732793361/black_kteyv6_tywhc1.png"}),c.jsx("source",{media:"(min-width: 769px)",srcSet:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732793361/black_kteyv6_tywhc1.png"}),c.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732793361/black_kteyv6_tywhc1.png",alt:"Logo da Empresa",style:{maxHeight:"40px"}})]})}),c.jsxs(M9,{children:[c.jsxs(yn,{to:"/",isActive:e.pathname==="/",children:[c.jsx(nn,{isVisible:e.pathname==="/",children:c.jsx(u0,{})}),"Início"]}),c.jsxs(yn,{to:"/sobre",isActive:e.pathname==="/sobre",children:[c.jsx(nn,{isVisible:e.pathname==="/sobre",children:c.jsx(d0,{})}),"Sobre nós"]}),c.jsxs(yn,{to:"/mar",variant:"mar",isActive:e.pathname==="/mar",children:[c.jsx(nn,{isVisible:e.pathname==="/mar",children:c.jsx(s0,{})}),"Le Ange Mar"]}),c.jsxs(yn,{to:"/serra",variant:"serra",isActive:e.pathname==="/serra",children:[c.jsx(nn,{isVisible:e.pathname==="/serra",children:c.jsx(pT,{})}),"Le Ange Serra"]}),c.jsxs(Y0,{to:"/event",isActive:e.pathname==="/event",children:[c.jsx(nn,{isVisible:e.pathname==="/event",children:c.jsx(l0,{})}),"Eventos"]}),c.jsxs(G0,{onChange:w,value:h,children:[c.jsx("option",{disabled:!0,value:"",children:"Acomodações"}),c.jsx("option",{value:"/acomodaSerra",children:"Suítes Serra"}),c.jsx("option",{value:"/acomodaMar",children:"Suítes Mar"})]})]}),c.jsx(ut,{onClick:()=>window.open("https://wa.link/dojlwi","_blank"),text:"Fazer minha reserva"})]}),c.jsxs(O9,{isScrolled:a,children:[c.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732793361/black_kteyv6_tywhc1.png",alt:"logo da le ange"}),c.jsxs("button",{onClick:x,isClicked:u,children:["Menu",c.jsx(C9,{})]})]}),c.jsxs(I9,{isOpen:s,children:[c.jsx("button",{onClick:y,children:"X"}),c.jsx("img",{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732793361/black_kteyv6_tywhc1.png",alt:"logo da le ange"}),c.jsxs("div",{children:[c.jsxs(yn,{to:"/",isActive:e.pathname==="/",onClick:y,children:[c.jsx(nn,{isVisible:e.pathname==="/",children:c.jsx(u0,{})}),"Início"]}),c.jsxs(yn,{to:"/sobre",isActive:e.pathname==="/sobre",onClick:y,children:[c.jsx(nn,{isVisible:e.pathname==="/sobre",children:c.jsx(d0,{})}),"Sobre nós"]}),c.jsxs(yn,{to:"/mar",variant:"mar",isActive:e.pathname==="/mar",onClick:y,children:[c.jsx(nn,{isVisible:e.pathname==="/mar",children:c.jsx(s0,{})}),"Le Ange Mar"]}),c.jsxs(yn,{to:"/serra",variant:"serra",isActive:e.pathname==="/serra",onClick:y,children:[c.jsx(nn,{isVisible:e.pathname==="/serra",children:c.jsx(H6,{})}),"Le Ange Serra"]}),c.jsxs(Y0,{to:"/event",isActive:e.pathname==="/event",onClick:y,children:[c.jsx(nn,{isVisible:e.pathname==="/event",children:c.jsx(l0,{})}),"Eventos"]}),c.jsxs(G0,{onChange:w,value:h,children:[c.jsx("option",{disabled:!0,value:"",children:"Acomodações"}),c.jsx("option",{value:"/acomodaSerra",children:"Suítes Serra"}),c.jsx("option",{value:"/acomodaMar",children:"Suítes Mar"})]})]}),c.jsx(ut,{text:"Fazer minha reserva",onClick:()=>window.open("https://wa.link/dojlwi","_blank")})]})]})},D9=Ki`
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
`,V9=_.section`
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
`,N9=_.div`
    width: 50%;
    height: 95%;
    border-radius: 15px 10px 25px 5px;

    @media (max-width: 768px){
        width: 100%;
        height: 50vh;
    }
`,F9=_.div`
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
`,$9=_.h2`
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
`,B9=_.p`
    font-size: .9rem;
    line-height: 120%;
    color: var(--color--black); 
    font-family: var(--font--comfortaa)!important;
    
    @media (max-width: 768px){
        font-size: 0.75rem;
    }
`,q9=_.div`
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
`,H9=_.img`
    width: 100%;
    height: 75.8vh;
    object-fit: cover;
    border-radius: 15px 10px 25px 5px;

    @media (max-width: 768px){
        height: 50vh;
    }
`,He=J.forwardRef(({images:e=[],suites:t=[],reverse:n=!1,background:r="rgba(0, 0, 0, 0.1)"},i)=>(k.useEffect(()=>{Re.init({duration:1e3,once:!1}),Re.refresh()},[]),c.jsxs(V9,{reverse:n,ref:i,children:[c.jsxs(N9,{"data-aos":"zoom-in","data-aos-delay":"50",children:[c.jsx(D9,{}),c.jsx(Jt,{modules:[Nn,xr,vr],autoplay:{delay:2e5,disableOnInteraction:!1,pauseOnMouseEnter:!0},navigation:!0,pagination:!0,loop:!0,spaceBetween:10,slidesPerView:1,children:e.map((a,o)=>c.jsx(en,{children:c.jsx(H9,{src:a,alt:`Slide ${o+1}`})},o))})]}),c.jsx(F9,{background:r,"data-aos":"fade-up","data-aos-delay":"100",children:t.map((a,o)=>{var s;return c.jsxs("div",{children:[c.jsx("section",{children:c.jsxs("div",{children:[c.jsx("p",{"data-aos":"fade-up","data-aos-delay":"150",children:a.NomedaSuite}),c.jsx($9,{"data-aos":"fade-up","data-aos-delay":"200",children:a.NomedaPousada})]})}),c.jsx(q9,{"data-aos":"fade-up","data-aos-delay":"250",children:(s=a.features)==null?void 0:s.map((l,u)=>c.jsxs("span",{children:[l.icon," ",l.text]},u))}),c.jsx(B9,{"data-aos":"fade-in","data-aos-delay":"400",children:a.Description}),c.jsx(ut,{onClick:()=>window.open("https://wa.link/dojlwi","_blank"),text:"Fazer reserva agora!"})]},o)})})]}))),U9=_.div`
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

`,W9=["https://res.cloudinary.com/dabucfkmg/image/upload/v1732795659/suiteSuperior1_gpjls0_l6yhv9_umytyv.webp","https://res.cloudinary.com/dabucfkmg/image/upload/v1732795661/1_o5yez9_vrlet1_lfbo7c.webp","https://res.cloudinary.com/dabucfkmg/image/upload/v1732795663/3_aiyrqa_btekxc_hz3xhq.webp","https://res.cloudinary.com/dabucfkmg/image/upload/v1732795664/4_ywuuuc_b8t7x3_hw9wbm.webp","https://res.cloudinary.com/dabucfkmg/image/upload/v1732795667/5_onjzk1_ysyao3_ufxxs1.webp"],G9=[{NomedaSuite:"Suíte Superior 1",NomedaPousada:"Le Ange Serra",features:[{icon:c.jsx(je,{}),text:"52m²"},{icon:c.jsx(ae,{}),text:"Ar-condicionado"},{icon:c.jsx(Xe,{}),text:"Frigobar"},{icon:c.jsx(ct,{}),text:"Lareira"},{icon:c.jsx(Me,{}),text:"Smart TV"},{icon:c.jsx(De,{}),text:"Cama king-size"},{icon:c.jsx(Ee,{}),text:"Banheira relaxante"},{icon:c.jsx(ae,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(Ke,{}),text:"Varanda privativa"}],Description:"Uma suíte de 52m² que une conforto e sofisticação. Equipada com cama king-size, ar-condicionado e lareira, também dispõe de uma varanda privativa com vista para a natureza, banheira relaxante e aquecedor de toalhas."}],Y9=["https://res.cloudinary.com/dabucfkmg/image/upload/v1732795738/foto2_pn8axc_1_sh4eu9.webp","https://res.cloudinary.com/dabucfkmg/image/upload/v1732795739/3_u2ikyj_bbap70_x49zfi.webp","https://res.cloudinary.com/dabucfkmg/image/upload/v1732795742/4_wte9h1_nbgckn_gbc50n.webp","https://res.cloudinary.com/dabucfkmg/image/upload/v1732795744/5_olm5xn_up47by_xrfk9u.webp"],K9=[{NomedaSuite:"Suíte Superior 2",NomedaPousada:"Le Ange Serra",features:[{icon:c.jsx(je,{}),text:"52m²"},{icon:c.jsx(De,{}),text:"Cama king-size"},{icon:c.jsx(ae,{}),text:"Ar-condicionado"},{icon:c.jsx(ct,{}),text:"Lareira"},{icon:c.jsx(Xe,{}),text:"Frigobar"},{icon:c.jsx(Me,{}),text:"Smart TV"},{icon:c.jsx(Ee,{}),text:"Banheira relaxante"},{icon:c.jsx(ae,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(Ke,{}),text:"Varanda privativa"}],Description:"Com 52m², esta suíte oferece uma experiência completa: cama king-size, ar-condicionado, lareira, e uma varanda privativa com vista para a natureza. Para relaxar ainda mais, desfrute de uma banheira e do aquecedor de toalhas, garantindo máximo conforto."}],X9=["https://res.cloudinary.com/dabucfkmg/image/upload/v1732795919/1_ylximp_j7rlx6_ozwjw1.webp","https://res.cloudinary.com/dabucfkmg/image/upload/v1732795921/3_drrdp6_jeadzb_rmyxjj.webp","https://res.cloudinary.com/dabucfkmg/image/upload/v1732795923/2_naq3yx_r415zb_jqdqkf.webp","https://res.cloudinary.com/dabucfkmg/image/upload/v1732795925/4_lpovtm_pybn3y_lbykns.webp","https://res.cloudinary.com/dabucfkmg/image/upload/v1732795927/5_tsqexf_xy8tbc_dihhel.webp"],Q9=[{NomedaSuite:"Suíte Superior 3",NomedaPousada:"Le Ange Serra",features:[{icon:c.jsx(je,{}),text:"52m²"},{icon:c.jsx(ae,{}),text:"Ar-condicionado"},{icon:c.jsx(ct,{}),text:"Lareira"},{icon:c.jsx(Xe,{}),text:"Frigobar"},{icon:c.jsx(Me,{}),text:"Smart TV"},{icon:c.jsx(Ee,{}),text:"Banheira relaxante"},{icon:c.jsx(ae,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(Ke,{}),text:"Varanda privativa"}],Description:"Esta suíte de 52m² é perfeita para momentos inesquecíveis, com cama king-size, ar-condicionado e lareira. A varanda privativa proporciona uma vista espetacular da natureza, enquanto a banheira relaxante e o aquecedor de toalhas completam o ambiente para maior comodidade."}],Z9=["https://res.cloudinary.com/dabucfkmg/image/upload/v1732796005/1_s9b5nq_bkdxnp_gifcsy.webp","https://res.cloudinary.com/dabucfkmg/image/upload/v1732796002/2_hyhg8t_a7ameu_ngap78.webp","https://res.cloudinary.com/dabucfkmg/image/upload/v1732796000/3_s0ig5c_vrsvhv_gezgyc.webp","https://res.cloudinary.com/dabucfkmg/image/upload/v1732795998/4_oppeg3_o41fdi_zfcgfj.webp","https://res.cloudinary.com/dabucfkmg/image/upload/v1732795996/5_kb5ean_xhm0vu_qoxdsf.webp"],J9=[{NomedaSuite:"Suíte Standard 4",NomedaPousada:"Le Ange Serra",features:[{icon:c.jsx(je,{}),text:"52m²"},{icon:c.jsx(ae,{}),text:"Ar-condicionado"},{icon:c.jsx(ct,{}),text:"Lareira"},{icon:c.jsx(Xe,{}),text:"Frigobar"},{icon:c.jsx(Me,{}),text:"Smart TV"},{icon:c.jsx(Ee,{}),text:"Banheira relaxante"},{icon:c.jsx(ae,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(Ke,{}),text:"Varanda privativa"}],Description:"Uma suíte de 52m², equipada com cama king-size, ar-condicionado e lareira. A varanda privativa oferece uma vista deslumbrante da natureza, enquanto a banheira relaxante e o aquecedor de toalhas adicionam um toque a mais de conforto e elegância para a sua estadia."}],eE=["https://res.cloudinary.com/dabucfkmg/image/upload/v1732796079/1_rnbhj2_kghiue_nyeois.webp","https://res.cloudinary.com/dabucfkmg/image/upload/v1732796077/2_msj4wh_rrl3zt_wtuir0.webp","https://res.cloudinary.com/dabucfkmg/image/upload/v1732796075/3_b8v99f_aiaxqa_wz9bci.webp","https://res.cloudinary.com/dabucfkmg/image/upload/v1732796073/4_rdcxvu_sjgtje_zicxmh.webp","https://res.cloudinary.com/dabucfkmg/image/upload/v1732796071/5_cwrlxp_pjsznc_ozeyy6.webp"],tE=[{NomedaSuite:"Suíte Standard 5",NomedaPousada:"Le Ange Serra",features:[{icon:c.jsx(je,{}),text:"52m²"},{icon:c.jsx(ae,{}),text:"Ar-condicionado"},{icon:c.jsx(ct,{}),text:"Lareira"},{icon:c.jsx(Xe,{}),text:"Frigobar"},{icon:c.jsx(Me,{}),text:"Smart TV"},{icon:c.jsx(Ee,{}),text:"Banheira relaxante"},{icon:c.jsx(ae,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(Ke,{}),text:"Varanda privativa"}],Description:"Com 52m², esta suíte oferece cama king-size, ar-condicionado e lareira para momentos acolhedores. A varanda privativa revela uma vista incrível da natureza e, para o máximo de conforto, a suíte ainda conta com uma banheira relaxante e aquecer de toalhas."}],nE=["https://res.cloudinary.com/dabucfkmg/image/upload/v1732796147/1_ytelar_a4gkq4_g65wuj.webp","https://res.cloudinary.com/dabucfkmg/image/upload/v1732796145/2_y07hp1_gxkw0f_sytf1p.webp","https://res.cloudinary.com/dabucfkmg/image/upload/v1732796143/3_ennrfl_tsrdpf_bucyak.webp","https://res.cloudinary.com/dabucfkmg/image/upload/v1732796140/4_nmnmdm_pb6suc_ymxs3p.webp","https://res.cloudinary.com/dabucfkmg/image/upload/v1732796139/5_zjbujo_ojixkc_k2y5xz.webp"],rE=[{NomedaSuite:"Suíte Master 6",NomedaPousada:"Le Ange Serra",features:[{icon:c.jsx(je,{}),text:"93m²"},{icon:c.jsx(ae,{}),text:"Ar-condicionado"},{icon:c.jsx(ct,{}),text:"Lareira"},{icon:c.jsx(gf,{}),text:"Chaise lounge"},{icon:c.jsx(Ky,{}),text:"Bay window"},{icon:c.jsx(Xe,{}),text:"Frigobar"},{icon:c.jsx(Me,{}),text:"Smart TV"},{icon:c.jsx(Ee,{}),text:"Banheira relaxante"},{icon:c.jsx(ae,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(Ke,{}),text:"Ampla varanda privativa"}],Description:"Desfrute de 93m² de luxo com cama king-size, ar-condicionado e lareira. A suíte conta com uma chaise lounge ao lado da bay window, banheira relaxante com vista para a natureza, aquecedor de toalhas e, ainda, uma varanda privativa, perfeita para aqueles momentos de tranquilidade."}],iE=["https://res.cloudinary.com/dabucfkmg/image/upload/v1732796219/1_r9brij_gje5sv.webp","https://res.cloudinary.com/dabucfkmg/image/upload/v1732796216/2_lp3nwj_znqmoa.webp","https://res.cloudinary.com/dabucfkmg/image/upload/v1732796214/3_hahgqj_yqo9dp.webp","https://res.cloudinary.com/dabucfkmg/image/upload/v1732796212/4_rdcxvu_xhilch.webp","https://res.cloudinary.com/dabucfkmg/image/upload/v1732796210/4_hstjdq_tijeyz.webp"],aE=[{NomedaSuite:"Suíte Standard 7",NomedaPousada:"Le Ange Serra",features:[{icon:c.jsx(je,{}),text:"52m²"},{icon:c.jsx(ae,{}),text:"Ar-condicionado"},{icon:c.jsx(De,{}),text:"Cama king-size"},{icon:c.jsx(ct,{}),text:"Lareira"},{icon:c.jsx(Xe,{}),text:"Frigobar"},{icon:c.jsx(Me,{}),text:"Smart TV"},{icon:c.jsx(Ee,{}),text:"Banheira relaxante"},{icon:c.jsx(ae,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(Ke,{}),text:"Varanda NÃO privativa"}],Description:"Uma suíte confortável de 52m², equipada com cama king-size, ar-condicionado e lareira. A varanda oferece uma vista encantadora da natureza, e o espaço é complementado por uma banheira relaxante e aquecedor de toalhas, garantindo uma estadia única."}],oE=["https://res.cloudinary.com/dabucfkmg/image/upload/v1732796292/1_deflqw_o0h5op_fctmle.webp","https://res.cloudinary.com/dabucfkmg/image/upload/v1732796290/3_apyt83_m5wg8y_xtm3gb.webp","https://res.cloudinary.com/dabucfkmg/image/upload/v1732796287/2_vtsru4_j58fi3_btmslh.webp","https://res.cloudinary.com/dabucfkmg/image/upload/v1732796285/4_a4uhie_akrdkl_is73tk.webp","https://res.cloudinary.com/dabucfkmg/image/upload/v1732796283/5_s3imtf_jey5us_nwmnum.webp"],sE=[{NomedaSuite:"Suíte Standard 8",NomedaPousada:"Le Ange Serra",features:[{icon:c.jsx(je,{}),text:"52m²"},{icon:c.jsx(ae,{}),text:"Ar-condicionado"},{icon:c.jsx(De,{}),text:"Cama king-size"},{icon:c.jsx(ct,{}),text:"Lareira"},{icon:c.jsx(Xe,{}),text:"Frigobar"},{icon:c.jsx(Me,{}),text:"Smart TV"},{icon:c.jsx(Ee,{}),text:"Banheira relaxante"},{icon:c.jsx(ae,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(Ke,{}),text:"Varanda NÃO privativa"}],Description:"Uma suíte de 52m² que conta com cama king-size, ar-condicionado e lareira para momentos relaxantes. A varanda, ainda, exibe uma vista de tirar o fôlego da natureza, e a banheira relaxante com aquecedor de toalhas traz um toque de luxo e conforto."}],lE=["https://res.cloudinary.com/dabucfkmg/image/upload/v1732796371/1_ougeas_aj0kkp_jtjwra.webp","https://res.cloudinary.com/dabucfkmg/image/upload/v1732796369/2_qiphp1_zbes5m_teu7di.webp","https://res.cloudinary.com/dabucfkmg/image/upload/v1732796366/4_ams1oh_mxicwx_wsc66p.webp","https://res.cloudinary.com/dabucfkmg/image/upload/v1732796364/3_x7jhml_auko3f_lscb8k.webp","https://res.cloudinary.com/dabucfkmg/image/upload/v1732796363/5_texuuu_e0gps2_wfdia2.webp"],cE=[{NomedaSuite:"Suíte Superior 9",NomedaPousada:"Le Ange Serra",features:[{icon:c.jsx(je,{}),text:"52m²"},{icon:c.jsx(ae,{}),text:"Ar-condicionado"},{icon:c.jsx(De,{}),text:"Cama king-size"},{icon:c.jsx(ct,{}),text:"Lareira"},{icon:c.jsx(Xe,{}),text:"Frigobar"},{icon:c.jsx(Me,{}),text:"Smart TV"},{icon:c.jsx(Ee,{}),text:"Banheira relaxante"},{icon:c.jsx(ae,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(Ke,{}),text:"Varanda privativa"}],Description:"Esta suíte ampla, com 52m², dispõe de cama king-size, ar-condicionado e lareira, perfeita para aqueles momentos de aconchego. Enquanto a banheira relaxante e o aquecedor de toalhas garantem maior comodidade, a varanda privativa promove uma vista única da natureza."}],uE=["https://res.cloudinary.com/dabucfkmg/image/upload/v1732796451/2_rwd1oh_clvvnj_twtnlk.webp","https://res.cloudinary.com/dabucfkmg/image/upload/v1732796453/1_lj4tav_i26aev_wtffl7.webp","https://res.cloudinary.com/dabucfkmg/image/upload/v1732796449/3_hybfzc_rsrbwj_zqoyet.webp","https://res.cloudinary.com/dabucfkmg/image/upload/v1732796446/4_p052an_rslqub_uogcbj.webp","https://res.cloudinary.com/dabucfkmg/image/upload/v1732796444/5_aqbze0_ae2782_iikt6s.webp"],dE=[{NomedaSuite:"Suíte Master 10",NomedaPousada:"Le Ange Serra",features:[{icon:c.jsx(je,{}),text:"80m²"},{icon:c.jsx(ae,{}),text:"Ar-condicionado"},{icon:c.jsx(De,{}),text:"Cama king-size"},{icon:c.jsx(jd,{}),text:"Recamier e poltrona de leitura"},{icon:c.jsx(ct,{}),text:"Lareira"},{icon:c.jsx(gf,{}),text:"Couch lounge"},{icon:c.jsx(Xe,{}),text:"Frigobar"},{icon:c.jsx(Me,{}),text:"Smart TV"},{icon:c.jsx(Ee,{}),text:"Banheira relaxante"},{icon:c.jsx(ae,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(Ke,{}),text:"Ampla varanda privativa"}],Description:"Experimente o máximo de conforto em 80m², com cama king-size, ar-condicionado e lareira. Aproveite a chaise lounge ao lado da bay window, a banheira com vista para a natureza, aquecedor de toalhas e, ainda, a varanda privativa, onde você pode relaxar ao som da mata."}],pE=()=>{const e=mn(),t={suite1:k.useRef(null),suite2:k.useRef(null),suite3:k.useRef(null),suite4:k.useRef(null),suite5:k.useRef(null),suite6:k.useRef(null),suite7:k.useRef(null),suite8:k.useRef(null),suite9:k.useRef(null),suite10:k.useRef(null)};return k.useEffect(()=>{Re.init({duration:1e3,once:!1}),Re.refresh()},[]),k.useEffect(()=>{const n=()=>{var a;const i=e.hash.replace("#","");if(console.log("Hash atual:",i),i&&((a=t[i])!=null&&a.current)){const o=t[i].current;if(o){const s=o.offsetTop-100;console.log(`Elemento encontrado: ${i}, rolando para: ${s}px`),window.scrollTo({top:s,behavior:"smooth"})}else console.log(`Elemento com ID ${i} não encontrado no DOM.`)}else console.log(`Hash ${i} não está associado a um ref válido.`)},r=()=>{console.log("Página carregada, verificando hash..."),n()};return window.addEventListener("load",r),window.addEventListener("hashchange",n),n(),()=>{window.removeEventListener("load",r),window.removeEventListener("hashchange",n)}},[e,t]),c.jsxs(c.Fragment,{children:[c.jsx(Fn,{}),c.jsxs(U9,{children:["Acomodações da",c.jsx("b",{children:"Pousada Le Ange Serra"})]}),c.jsx(He,{id:"suite1",ref:t.suite1,images:W9,suites:G9,reverse:!0,background:"#CAD76680"}),c.jsx(He,{id:"suite2",ref:t.suite2,images:Y9,suites:K9,reverse:!1,background:"#CAD76680"}),c.jsx(He,{id:"suite3",ref:t.suite3,images:X9,suites:Q9,reverse:!0,background:"#CAD76680"}),c.jsx(He,{id:"suite4",ref:t.suite4,images:Z9,suites:J9,reverse:!1,background:"#CAD76680"}),c.jsx(He,{id:"suite5",ref:t.suite5,images:eE,suites:tE,reverse:!0,background:"#CAD76680"}),c.jsx(He,{id:"suite6",ref:t.suite6,images:nE,suites:rE,reverse:!1,background:"#CAD76680"}),c.jsx(He,{id:"suite7",ref:t.suite7,images:iE,suites:aE,reverse:!0,background:"#CAD76680"}),c.jsx(He,{id:"suite8",ref:t.suite8,images:oE,suites:sE,reverse:!1,background:"#CAD76680"}),c.jsx(He,{id:"suite9",ref:t.suite9,images:lE,suites:cE,reverse:!0,background:"#CAD76680"}),c.jsx(He,{id:"suite10",ref:t.suite10,images:uE,suites:dE,reverse:!1,background:"#CAD76680"}),c.jsx(yr,{})]})};function br(e){return ee({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M.5 6a.5.5 0 0 0-.488.608l1.652 7.434A2.5 2.5 0 0 0 4.104 16h5.792a2.5 2.5 0 0 0 2.44-1.958l.131-.59a3 3 0 0 0 1.3-5.854l.221-.99A.5.5 0 0 0 13.5 6zM13 12.5a2 2 0 0 1-.316-.025l.867-3.898A2.001 2.001 0 0 1 13 12.5"},child:[]},{tag:"path",attr:{d:"m4.4.8-.003.004-.014.019a4 4 0 0 0-.204.31 2 2 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.6.6 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3 3 0 0 1-.202.388 5 5 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 3.6 4.2l.003-.004.014-.019a4 4 0 0 0 .204-.31 2 2 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.6.6 0 0 0-.09-.252A4 4 0 0 0 3.6 2.8l-.01-.012a5 5 0 0 1-.37-.543A1.53 1.53 0 0 1 3 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a6 6 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 4.4.8m3 0-.003.004-.014.019a4 4 0 0 0-.204.31 2 2 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.6.6 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3 3 0 0 1-.202.388 5 5 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 6.6 4.2l.003-.004.014-.019a4 4 0 0 0 .204-.31 2 2 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.6.6 0 0 0-.09-.252A4 4 0 0 0 6.6 2.8l-.01-.012a5 5 0 0 1-.37-.543A1.53 1.53 0 0 1 6 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a6 6 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 7.4.8m3 0-.003.004-.014.019a4 4 0 0 0-.204.31 2 2 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.6.6 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3 3 0 0 1-.202.388 5 5 0 0 1-.252.382l-.019.025-.005.008-.002.002A.5.5 0 0 1 9.6 4.2l.003-.004.014-.019a4 4 0 0 0 .204-.31 2 2 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.6.6 0 0 0-.09-.252A4 4 0 0 0 9.6 2.8l-.01-.012a5 5 0 0 1-.37-.543A1.53 1.53 0 0 1 9 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a6 6 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 10.4.8"},child:[]}]})(e)}const fE=_.div`
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

`,hE=["https://res.cloudinary.com/dabucfkmg/image/upload/v1732794904/1_jbfcfw-compressed_fowhdw_pwhthv.webp","https://res.cloudinary.com/dabucfkmg/image/upload/v1732794904/2_avh1mm-compressed_jmpbxs_irwtgy.webp","https://res.cloudinary.com/dabucfkmg/image/upload/v1732794904/5_bw0qou-compressed_au8uhx_ceqilz.webp","https://res.cloudinary.com/dabucfkmg/image/upload/v1732794907/4_j3c1yo-compressed_fmuvak_yl6rif.webp","https://res.cloudinary.com/dabucfkmg/image/upload/v1732794908/3_kplwmw-compressed_ctw3wb_x0b8bl.webp"],mE=[{NomedaSuite:"Suíte Superior 1",NomedaPousada:"Le Ange Mar",features:[{icon:c.jsx(je,{}),text:"50m²"},{icon:c.jsx(ae,{}),text:"Ar-condicionado"},{icon:c.jsx(Xe,{}),text:"Frigobar"},{icon:c.jsx(br,{}),text:"Cafeteira 3 corações"},{icon:c.jsx(Me,{}),text:"Smart TV"},{icon:c.jsx(De,{}),text:"Cama king-size"},{icon:c.jsx(Ee,{}),text:"Banheira relaxante"},{icon:c.jsx(ae,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(Ke,{}),text:"Varanda privativa"}],Description:"A suíte oferece 50m² de conforto e sofisticação. Com cama king-size, a suíte garante uma estadia relaxante com ar-condicionado, lareira e frigobar. Desfrute de momentos de bem-estar na banheira relaxante ou no chuveiro."}],gE=["https://res.cloudinary.com/dabucfkmg/image/upload/v1732794983/2_uonrhf-compressed_vtj5ay_tnnd7t.webp","https://res.cloudinary.com/dabucfkmg/image/upload/v1732794983/3_ysfzuk-compressed_drqyfp_yfcgly.webp","https://res.cloudinary.com/dabucfkmg/image/upload/v1732794984/5_dub0pj-compressed_nycmvi_gci7lf.webp","https://res.cloudinary.com/dabucfkmg/image/upload/v1732794986/1_ofu5mj-compressed_ele8hy_comdxg.webp","https://res.cloudinary.com/dabucfkmg/image/upload/v1732794987/4_ulr721-compressed_njwzhs_jxppzm.webp"],vE=[{NomedaSuite:"Suíte Standard 2",NomedaPousada:"Le Ange Mar",features:[{icon:c.jsx(je,{}),text:"45m²"},{icon:c.jsx(ae,{}),text:"Ar-condicionado"},{icon:c.jsx(Xe,{}),text:"Frigobar"},{icon:c.jsx(br,{}),text:"Cafeteira 3 corações"},{icon:c.jsx(Me,{}),text:"Smart TV"},{icon:c.jsx(De,{}),text:"Cama king-size"},{icon:c.jsx(Ee,{}),text:"Banheira relaxante"},{icon:c.jsx(ae,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(Ke,{}),text:"Varanda privativa"}],Description:"Esta suíte de 45m² é ideal para quem busca conforto e tranquilidade. Com cama king-size, ar-condicionado, cafeteira 3 Corações e frigobar, você desfrutará de cada momento ao lado do seu pet. Recarregue as energias na banheira relaxante, aproveite a vista deslumbrante para o mar e sinta a brisa suave da maresia, tornando sua estadia ainda mais especial."}],xE=["https://res.cloudinary.com/dabucfkmg/image/upload/v1732795055/1_mkvfcp-compressed_gr43kj_jzkgrj.webp","https://res.cloudinary.com/dabucfkmg/image/upload/v1732795055/3_njizit-compressed_na7v2c_xq2bzu.webp","https://res.cloudinary.com/dabucfkmg/image/upload/v1732795055/2_ciuk0m-compressed_cehbai_vuqq0y.webp","https://res.cloudinary.com/dabucfkmg/image/upload/v1732795058/5_mjfm3k-compressed_tfneqy_eq3zvz.webp","https://res.cloudinary.com/dabucfkmg/image/upload/v1732795060/4_d5kp62-compressed_lcocv8_jc1p0u.webp"],yE=[{NomedaSuite:"Suíte Superior 3",NomedaPousada:"Le Ange Mar",features:[{icon:c.jsx(je,{}),text:"45m²"},{icon:c.jsx(ae,{}),text:"Ar-condicionado"},{icon:c.jsx(Xe,{}),text:"Frigobar"},{icon:c.jsx(br,{}),text:"Cafeteira 3 corações"},{icon:c.jsx(Me,{}),text:"Smart TV"},{icon:c.jsx(De,{}),text:"Cama king-size"},{icon:c.jsx(Ee,{}),text:"Banheira relaxante"},{icon:c.jsx(ae,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(Ke,{}),text:"Varanda privativa"}],Description:"Com 45m², esta suíte conta com uma cama king-size, ar-condicionado, cafeteira 3 Corações e frigobar, oferecendo o necessário para uma estadia repleta de tranquilidade. A vista incrível para o mar, junto à suave maresia, proporciona momentos de relaxamento para aproveitar ao lado do seu pet."}],wE=["https://res.cloudinary.com/dabucfkmg/image/upload/v1732795148/1_znboil-compressed_yri6qq_k7u1af.webp","https://res.cloudinary.com/dabucfkmg/image/upload/v1732795149/3_srrc1g-compressed_sxde4s_pn4jgn.webp","https://res.cloudinary.com/dabucfkmg/image/upload/v1732795149/5_lxdgp4-compressed_qaobnt_hjnfmh.webp","https://res.cloudinary.com/dabucfkmg/image/upload/v1732795152/2_edqaq4-compressed_hggyrj_b7saxa.webp","https://res.cloudinary.com/dabucfkmg/image/upload/v1732795153/4_k1afap-compressed_do1fjk_r0ktya.webp"],bE=[{NomedaSuite:"Suíte Superior 4",NomedaPousada:"Le Ange Mar",features:[{icon:c.jsx(je,{}),text:"45m²"},{icon:c.jsx(ae,{}),text:"Ar-condicionado"},{icon:c.jsx(Xe,{}),text:"Frigobar"},{icon:c.jsx(br,{}),text:"Cafeteira 3 corações"},{icon:c.jsx(Me,{}),text:"Smart TV"},{icon:c.jsx(De,{}),text:"Cama king-size"},{icon:c.jsx(Ee,{}),text:"Banheira relaxante"},{icon:c.jsx(ae,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(Ke,{}),text:"Varanda privativa"}],Description:"Desfrute de 45m² de conforto e tranquilidade nesta suíte aconchegante. Equipada com cama king-size, ar-condicionado, cafeteira 3 Corações e frigobar, é o ambiente perfeito para relaxar. Conta, ainda, com uma vista espetacular para o mar, combinada com a brisa fresca da maresia."}],SE=["https://res.cloudinary.com/dabucfkmg/image/upload/v1732795224/1_ztjmyc-compressed_qvus4l_pe1dnz.webp","https://res.cloudinary.com/dabucfkmg/image/upload/v1732795225/5_dkyssi-compressed_prm4wc_uzlbat.webp","https://res.cloudinary.com/dabucfkmg/image/upload/v1732795226/4_rg0jvi-compressed_pknmhg_nsm08m.webp","https://res.cloudinary.com/dabucfkmg/image/upload/v1732795229/2_djdgbx-compressed_zscwrg_cehaak.webp","https://res.cloudinary.com/dabucfkmg/image/upload/v1732795230/3_hkxuyr-compressed_fpwsiy_pg3fuf.webp"],kE=[{NomedaSuite:"Suíte Superior 5",NomedaPousada:"Le Ange Mar",features:[{icon:c.jsx(je,{}),text:"45m²"},{icon:c.jsx(ae,{}),text:"Ar-condicionado"},{icon:c.jsx(Xe,{}),text:"Frigobar"},{icon:c.jsx(br,{}),text:"Cafeteira 3 corações"},{icon:c.jsx(Me,{}),text:"Smart TV"},{icon:c.jsx(De,{}),text:"Cama king-size"},{icon:c.jsx(Ee,{}),text:"Banheira relaxante"},{icon:c.jsx(ae,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(Ke,{}),text:"Varanda privativa"}],Description:"Uma suíte de 45m² que une conforto e tranquilidade. Com cama king-size, ar-condicionado, cafeteira 3 Corações e frigobar, é ideal para vivenciar aqueles momentos de preguiça ao lado do seu pet. Relaxe ao som das ondas do mar e aproveite a banheira relaxante."}],jE=["https://res.cloudinary.com/dabucfkmg/image/upload/v1732795340/suiteMar06_jywv1q-compressed_u1tfqp_n26dhd.webp","https://res.cloudinary.com/dabucfkmg/image/upload/v1732795341/5_b7dida_zqibum.webp","https://res.cloudinary.com/dabucfkmg/image/upload/v1732795345/1_tywkpb_ncjczz.webp","https://res.cloudinary.com/dabucfkmg/image/upload/v1732795344/4_p22p1t_ppwnfc.webp","https://res.cloudinary.com/dabucfkmg/image/upload/v1732795346/3_zpt6tw_ervd5a.jpg"],_E=[{NomedaSuite:"Suíte Superior 6",NomedaPousada:"Le Ange Mar",features:[{icon:c.jsx(je,{}),text:"45m²"},{icon:c.jsx(ae,{}),text:"Ar-condicionado"},{icon:c.jsx(Xe,{}),text:"Frigobar"},{icon:c.jsx(br,{}),text:"Cafeteira 3 corações"},{icon:c.jsx(Me,{}),text:"Smart TV"},{icon:c.jsx(De,{}),text:"Cama king-size"},{icon:c.jsx(Ee,{}),text:"Banheira relaxante"},{icon:c.jsx(ae,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(Ke,{}),text:"Varanda privativa"}],Description:"Com 45m² de puro conforto, esta suíte oferece cama king-size, ar-condicionado, cafeteira 3 Corações e frigobar, proporcionando um ambiente mais do que acolhedor, tranquilo. Sem contar que a vista encantadora para o mar e a banheira de imersão tornam a suíte ainda mais relaxante."}],TE=["https://res.cloudinary.com/dabucfkmg/image/upload/v1732795416/1_usupcb-compressed_z7nnww_vuwzgw.webp","https://res.cloudinary.com/dabucfkmg/image/upload/v1732795418/5_v3dnrs-compressed_svhspj_jut4b7.webp","https://res.cloudinary.com/dabucfkmg/image/upload/v1732795420/4_n9wkv0-compressed_qqq4nw_ivgjgm.webp","https://res.cloudinary.com/dabucfkmg/image/upload/v1732795421/2_egxqmp-compressed_hnybrg_hrhxvm.webp","https://res.cloudinary.com/dabucfkmg/image/upload/v1732795424/3_pjp0sr-compressed_hnudyo_hez5id.webp"],CE=[{NomedaSuite:"Suíte Master 7",NomedaPousada:"Le Ange Mar",features:[{icon:c.jsx(je,{}),text:"45m²"},{icon:c.jsx(ae,{}),text:"Ar-condicionado"},{icon:c.jsx(Xe,{}),text:"Frigobar"},{icon:c.jsx(br,{}),text:"Cafeteira 3 corações"},{icon:c.jsx(Me,{}),text:"Smart TV"},{icon:c.jsx(De,{}),text:"Cama king-size"},{icon:c.jsx(Ee,{}),text:"Banheira relaxante"},{icon:c.jsx(ae,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(Ke,{}),text:"Varanda privativa"}],Description:"Esta suíte de 45m² oferece cama king-size, ar-condicionado, cafeteira 3 Corações e frigobar, criando um espaço aconchegante e tranquilo. Aproveite a vista cativante para o mar e relaxe na banheira de imersão, transformando sua estadia em um verdadeiro paraíso."}],EE=["https://res.cloudinary.com/dabucfkmg/image/upload/v1732795507/1_pcudqj-compressed_sbpmpu_oxzuox.webp","https://res.cloudinary.com/dabucfkmg/image/upload/v1732795509/2-compressed_rudncg_m5bfoq.webp","https://res.cloudinary.com/dabucfkmg/image/upload/v1732795510/3-compressed_tjw0xv_cf95eh.webp","https://res.cloudinary.com/dabucfkmg/image/upload/v1732795513/4-compressed_x5k7tn_enedcb.webp","https://res.cloudinary.com/dabucfkmg/image/upload/v1732795514/5-compressed_rxetai_hmhlu2.webp"],PE=[{NomedaSuite:"Suíte Master 8",NomedaPousada:"Le Ange Mar",features:[{icon:c.jsx(je,{}),text:"45m²"},{icon:c.jsx(ae,{}),text:"Ar-condicionado"},{icon:c.jsx(Xe,{}),text:"Frigobar"},{icon:c.jsx(br,{}),text:"Cafeteira 3 corações"},{icon:c.jsx(Me,{}),text:"Smart TV"},{icon:c.jsx(De,{}),text:"Cama king-size"},{icon:c.jsx(Ee,{}),text:"Banheira relaxante"},{icon:c.jsx(ae,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(Ke,{}),text:"Varanda privativa"}],Description:"A suíte de 45m² oferece o melhor em conforto, com cama king-size, ar-condicionado, cafeteira 3 Corações e frigobar. A vista deslumbrante para o mar e a banheira de imersão garantem momentos de total descanso e relaxamento."}],zE=()=>{const e=mn(),t={suite1:k.useRef(null),suite2:k.useRef(null),suite3:k.useRef(null),suite4:k.useRef(null),suite5:k.useRef(null),suite6:k.useRef(null),suite7:k.useRef(null),suite8:k.useRef(null),suite9:k.useRef(null),suite10:k.useRef(null)};return k.useEffect(()=>{const n=()=>{var a;const i=e.hash.replace("#","");if(console.log("Hash atual:",i),i&&((a=t[i])!=null&&a.current)){const o=t[i].current;if(o){const s=o.offsetTop-100;console.log(`Elemento encontrado: ${i}, rolando para: ${s}px`),window.scrollTo({top:s,behavior:"smooth"})}else console.log(`Elemento com ID ${i} não encontrado no DOM.`)}else console.log(`Hash ${i} não está associado a um ref válido.`)},r=()=>{console.log("Página carregada, verificando hash..."),n()};return window.addEventListener("load",r),window.addEventListener("hashchange",n),n(),()=>{window.removeEventListener("load",r),window.removeEventListener("hashchange",n)}},[e,t]),k.useEffect(()=>{Re.init({duration:1e3,once:!1}),Re.refresh()},[]),c.jsxs(c.Fragment,{children:[c.jsx(Fn,{}),c.jsxs(fE,{children:["Acomodações da",c.jsx("b",{children:"Pousada Le Ange Mar"})]}),c.jsx(He,{id:"suite1",ref:t.suite1,images:hE,suites:mE,reverse:!0,background:"#7AC4F350"}),c.jsx(He,{id:"suite2",ref:t.suite2,images:gE,suites:vE,reverse:!1,background:"#7AC4F350"}),c.jsx(He,{id:"suite3",ref:t.suite3,images:xE,suites:yE,reverse:!0,background:"#7AC4F350"}),c.jsx(He,{id:"suite4",ref:t.suite4,images:wE,suites:bE,reverse:!1,background:"#7AC4F350"}),c.jsx(He,{id:"suite5",ref:t.suite5,images:SE,suites:kE,reverse:!0,background:"#7AC4F350"}),c.jsx(He,{id:"suite6",ref:t.suite6,images:jE,suites:_E,reverse:!1,background:"#7AC4F350"}),c.jsx(He,{id:"suite7",ref:t.suite7,images:TE,suites:CE,reverse:!0,background:"#7AC4F350"}),c.jsx(He,{id:"suite8",ref:t.suite8,images:EE,suites:PE,reverse:!1,background:"#7AC4F350"}),c.jsx(yr,{})]})},AE=_.div`
    height: 5vh;

    @media (max-width: 768px) {
        height: 0vh;
    }
`,ME=_.section`
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
        background-image: url('https://res.cloudinary.com/dabucfkmg/image/upload/v1732728789/FOTO-MAR_qssync_ei8mel.webp');
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
`,LE=_.div`
    width: 45%;
    height: 100%;
    background-image: url('https://res.cloudinary.com/dabucfkmg/image/upload/v1732728789/FOTO-MAR_qssync_ei8mel.webp');
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
`,OE=_.div`
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
`,IE=[{title:"Pet Friendly",description:"Não temos restrições quanto ao porte ou raça do seu pet, também não cobramos taxas adicionais para a vinda deles. Aqui, o seu pet tem liberdade total para acessar todas as nossas comodidades!",buttonText:"Viver minha experiência agora",imageUrl:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732731156/petfriendly-scaled_vsev2s_obkojq.webp"},{title:"Praia",description:"Para os amantes da praia, estamos localizados a apenas 150 metros da Praia Rasa, onde você e o seu pet podem aproveitar juntinhos e dar um mergulho delicioso no mar.",buttonText:"Viver minha experiência agora",imageUrl:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732730256/cachorro_na_praia_pmqyi4_p4nhwo.webp"},{title:"Piscina",description:"Nossa piscina aquecida com vista panorâmica para o oceano é de surpreender! Possui tratamento especial por ozônio com níveis baixíssimos de cloro, pensando no bem-estar da sua pele e a do seu pet também!",buttonText:"Viver minha experiência agora",imageUrl:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732728790/pousada_de_cima_vpzpdb_kssj6e.webp"},{title:"Ofurôs",description:"São dois ofurôs acoplados na piscina, para você relaxar na água quentinha, apreciando a vista exuberante do mar.",buttonText:"Viver minha experiência agora",imageUrl:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732730257/ofuros_kyjddp_raquu4.webp"},{title:"Sala de estar",description:"A sala de estar é aquela que abraça e aconchega. Cheia de sofás, você pode se acomodar e assistir à televisão, ou até mesmo ler um livro, sempre na companhia do seu pet.",buttonText:"Viver minha experiência agora",imageUrl:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732731157/saladeestar_yakcqy_dtbu48.webp"},{title:"Cozinha",description:"Todas as refeições estão incluídas: café da manhã, almoço, chá da tarde e jantar! Todas preparadas com muito tempero, amor e afeto.",buttonText:"Viver minha experiência agora",imageUrl:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732731157/risoto1-compressed_m583dd_ekltxk.webp"},{title:"Bar",description:"Para completar ainda mais a sua experiência, contamos com uma carta variada de vinhos, destilados, drinks e cervejas!",buttonText:"Viver minha experiência agora",imageUrl:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732730257/bar_xl6dvc_bkc9w5.webp"},{title:"Suítes",description:"São 8 suítes, elegantemente, decoradas, todas com vista para o mar, banheira de imersão, varanda, cama king-size, ar-condicionado e frigobar.",buttonText:"Viver minha experiência agora",imageUrl:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732729616/suiteMar2_qlgel2_d11sun.webp"}],RE=_.section`
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
`,DE=[{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732731480/suiteMar01_p6bfoi-compressed_kixsaa_kjg49l.webp",text:"Suíte Superior 1",loading:"lazy"},{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732731481/IMG_0142-compressed_lfijwu_h6x05q.webp",text:"Suíte Standard 2",loading:"lazy"},{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732731481/suiteMar03_o9sxbf-compressed_uw2hox_plhelj.webp",text:"Suíte Superior 3",loading:"lazy"},{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732731484/IMG_0143-compressed_fk4kgv_oxklv8.webp",text:"Suíte Superior 4",loading:"lazy"},{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732731487/suiteMar05_oid9as-compressed_al5vur_spz4rq.webp",text:"Suíte Superior 5",loading:"lazy"},{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732731489/mar_master_8_m1x38m_onrxki.webp",text:"Suíte Superior 6",loading:"lazy"},{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732731489/suiteMar07_dgfxzq-compressed_kody5f_uyjy7m.webp",text:"Suíte Master 7",loading:"lazy"},{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732731494/suiteMar08_g1gmt0-compressed_mymcv1_rtodwa.webp",text:"Suíte Master 8",loading:"lazy"}],VE=_.div`
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
`,NE=_.section`
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
`,FE=[{image:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732730393/risotos_oj42yf_nivhjz.webp",title:"Noite de Risotos",dateRange:"29/11/2024 até 01/12/2024 (2 diárias)",features:[{icon:c.jsx(re,{}),text:"30/11 - Noite de Risostos"},{icon:c.jsx(re,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(xe,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"359,20",discount:25},{image:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732730394/pizzas_lgsqcd_ekmh4f.webp",title:"Noite das pizzas",dateRange:"06/12/2024 até 08/12/2024 (3 diárias)",features:[{icon:c.jsx(re,{}),text:"07/12 - Noite das pizzas"},{icon:c.jsx(re,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(xe,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"359,20",discount:25},{image:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732730394/frutos_do_mar1_ly3hq1_ch6mr3.webp",title:"Frutos do Mar",dateRange:"13/12/2024 até 15/12/2024 (2 diárias)",features:[{icon:c.jsx(re,{}),text:"14/12 - Frutos do Mar"},{icon:c.jsx(re,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(xe,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"359,20",discount:25},{image:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732730394/fique3pague4_fiupcm_bgpy9c.webp",title:"Fique 4 pague 3",dateRange:"Segunda-feira a Sexta-feira",features:[{icon:c.jsx(re,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(hn,{}),text:"Até 12X SEM JUROS"},{icon:c.jsx(xe,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"538,90",discount:25},{image:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732730395/natal_wrunee_ceaifp.webp",title:"Pacote de Natal",dateRange:"21/12/2024 até 25/12/2024 (4 diárias)",features:[{icon:c.jsx(re,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(hn,{}),text:"Até 12X SEM JUROS"},{icon:c.jsx(xe,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"918,40",discount:25}],$E=_.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 15vh;
    margin-bottom: -10vh;

    @media (max-width: 768px) {
        display: none;
    }
`,BE=[{images:[{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732731907/1_sxf4fc_a9uljb_pbaml7.webp",alt:"Foto de cachorro com uma bola na boca",loading:"lazy",label:"Le Ange Mar"},{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732731908/2_cldel9_wnqquw_gnk0f4.webp",alt:"Foto do cachorro sentado tomando sol",loading:"lazy",label:"Le Ange Mar"},{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732731908/3_i0ctxp_megfsi_exu5hi.jpg",alt:"Cachorro na piscina sorrindo",loading:"lazy",label:"Le Ange Mar"},{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732731911/mar5_wwsqtk_dmwbdd.webp",alt:"Cachorro tirando uma selfie com outros 3 cachorros",loading:"lazy",label:"Le Ange Mar"},{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732731912/cachorro-olhando-para-camera_wpovwv_jhxkqd.webp",alt:"Foto do cachorro olhando para a câmera",loading:"lazy",label:"Le Ange Mar"},{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732732025/5_flrzdf_wyxn6v_h37kx5.jpg",alt:"Cachorro com a lingua para fora",loading:"lazy",label:"Le Ange Mar"},{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732732025/mar4_ilxhpl_buvyxu.webp",alt:"Cachorro na borda da piscina",loading:"lazy",label:"Le Ange Mar"},{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732732026/mar6_wcjggv_nheujx.webp",alt:"Cachorro em uma prancha de surf na onda",loading:"lazy",label:"Le Ange Mar"},{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732732029/6_b6jtbs_dfnbyu_m0dpfv.webp",alt:"Cachorro com óculos escuros",loading:"lazy",label:"Le Ange Mar"},{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732732029/8_zr7p3o_czbag1_jfqnsr.jpg",alt:"Cachorro e um cachorro pequeno",loading:"lazy",label:"Le Ange Mar"}]},{images:[{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732732032/7_gutmna_mncfkn_o93tly.webp",alt:"Foto de um cachorro com uma taça do lado",loading:"lazy",label:"Le Ange Mar"},{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732732033/10_olepft_mfx8nm_hxzfgu.webp",alt:"3 cachorros e um homem na piscina",loading:"lazy",label:"Le Ange Mar"},{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732732035/mar2_xvqf5o_skheep.webp",alt:"Cachorro marrom",loading:"lazy",label:"Le Ange Mar"},{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732732036/mar1_tsyxm8_ek8eoa.webp",alt:"Cachorro marrom na piscina",loading:"lazy",label:"Le Ange Mar"},{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732732038/mar3_jmdiw8_lyw4uq.webp",alt:"Cachorro branco olhando para a camera",loading:"lazy",label:"Le Ange Mar"},{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732732039/mar7_vyslpi_blujc7.webp",alt:"Cachorro dormindo no sofá",loading:"lazy",label:"Le Ange Mar"},{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732732041/mar8_ywe1hn_vulehv.jpg",alt:"Cachorro em cima do morro olhando para o lado",loading:"lazy",label:"Le Ange Mar"},{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732732042/17_awkinq_ommg1k_wuhbs8.jpg",alt:"3 cachorros brincando na praia",loading:"lazy",label:"Le Ange Mar"},{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732729373/cachorro_na_m%C3%A3o_kil7xk_q6lqew.webp",alt:"Foto do cachorro olhando para a câmera",loading:"lazy",label:"Le Ange Mar"}],reverse:!0}],qE=()=>(k.useEffect(()=>{Re.init({duration:1e3,once:!1}),Re.refresh()},[]),c.jsxs(c.Fragment,{children:[c.jsx(Rn,{children:c.jsx("title",{children:"Le Ange Serra - Pousada Le Ange"})}),c.jsx(AE,{}),c.jsx(Fn,{}),c.jsxs(ME,{children:[c.jsxs(OE,{children:[c.jsxs("h4",{"data-aos":"fade-up","data-aos-delay":"100",children:["Conheça a ",c.jsx("b",{children:"Le Ange Mar"}),", a pousada mais"]}),c.jsxs("h1",{"data-aos":"fade-down","data-aos-delay":"200",children:["PET FRIENDLY",c.jsx("br",{})," DO ",c.jsx("b",{children:"BRASIL"})]}),c.jsx("p",{children:"Aqui, você e o seu pet são mais do que bem-vindos!"}),c.jsx("div",{children:c.jsx(wr,{text:"Reservar agora!",textColor:"var(--color--black)",backgroundColor:"transparent",borderColor:"var(--color--black)",iconColor:"var(--color--black)",hoverBackgroundColor:"var(--color--blue)",hoverBorderColor:"var(--color--blue)",hoverColor:"var(--color--white)",hoverIconColor:"var(--color--white)",onClick:()=>window.open("https://wa.link/dojlwi","_blank")})})]}),c.jsx(LE,{"data-aos":"fade-left","data-aos-delay":"200"})]}),c.jsx(VE,{"data-aos":"fade-in","data-aos-delay":"100",children:c.jsx("h1",{"data-aos":"fade-up","data-aos-delay":"300",children:"LeAnge Mar | Armação dos Búzios RJ"})}),c.jsx(RE,{"data-aos":"fade-up","data-aos-delay":"50",children:c.jsx(Nl,{slides:IE,titleColor:"var(--color--blue)",buttonBgColor:"var(--color--blue)",imagePosition:"left"})}),c.jsx(e2,{images:DE}),c.jsx(Fl,{colorDefinedBold:"var(--color--blue)","data-aos":"fade-up","data-aos-delay":"400"}),c.jsx(Bl,{carousels:BE,"data-aos":"fade-in","data-aos-delay":"400"}),c.jsx($E,{children:c.jsx(ut,{text:"Fazer minha reserva!",onClick:()=>window.open("https://wa.link/dojlwi","_blank")})}),c.jsx(NE,{"data-aos":"fade-up","data-aos-delay":"400",children:c.jsx(vo,{events:FE})}),c.jsx($l,{}),c.jsx(yr,{})]})),HE=_.div`
    height: 5vh;

    @media (max-width: 768px){
        height: 0vh;
    }
`,UE=_.section`
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
        background-image: url('https://res.cloudinary.com/dabucfkmg/image/upload/v1732728790/foto_de_mulher_com_dois_cachorros_bwwkmi_pyqnx0.jpg');
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
`,WE=_.div`
    width: 45%;
    height: 100%;
    background-image: url('https://res.cloudinary.com/dabucfkmg/image/upload/v1732728790/foto_de_mulher_com_dois_cachorros_bwwkmi_pyqnx0.jpg');
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
`,GE=_.div`
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
`,YE=[{title:"Pet Friendly",description:"Não temos restrições quanto ao porte ou raça do seu pet, também não cobramos taxas adicionais para a vinda deles. Aqui, o seu pet tem liberdade total para acessar todas as nossas comodidades!",buttonText:"Viver minha experiência agora",imageUrl:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732730868/cachorro_olhando_pra_camera_ndannw_hvd1rf.webp"},{title:"Aventura",description:"Na propriedade, há trilhas que percorrem a natureza, beirando o rio! Em diversos pontos, você pode dar uma paradinha para tomar um banho nas águas frescas e renovar as energias!",buttonText:"Viver minha experiência agora",imageUrl:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732732523/aventura_odmky4_x0nryc.webp"},{title:"Refrescar",description:"Nossa maravilhosa piscina de borda infinita possui aquecimento solar e tratamento especial por ozônio, com níveis baixíssimos de cloro, além de contar com um ofurô acoplado, perfeito para aproveitar o final de tarde.",buttonText:"Viver minha experiência agora",imageUrl:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732732524/cachorro_pulando_na_piscina_lrhxpp_gyqrfv.jpg"},{title:"Sossego",description:"A área da sauna fica situada ao lado da mata, envolvida pelo som relaxante do rio que passa. Aqui, você pode desfrutar de um hot tub abastecido por água natural e aquecido à lenha, o combo perfeito para você relaxar.",imageUrl:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732730257/sossego_1_jsshhu_1_pyjrgu.jpg"},{title:"Lazer",description:"Nossas áreas internas contam com três salas superequipadas e aconchegantes, sendo elas: sala de TV, sala de estar, sala de jogos com mesa de bilhar, carteado, jogos de tabuleiro e biblioteca.",buttonText:"Viver minha experiência agora",imageUrl:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732728790/sala-de-estar_xuxiou_knlqok.webp"},{title:"Cozinha",description:"Todas as refeições estão incluídas: café da manhã, almoço, chá da tarde e jantar! Todas preparadas com muito tempero, amor e afeto.",buttonText:"Viver minha experiência agora",imageUrl:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732731824/buffetComprimido-compressed-_1__tjiacp_gv9frv.webp"},{title:"Diversão",description:"Espaço de sobra para o seu pet se divertir! Espaço agility à beira do lago, com muita grama, para o seu pet, correr, pular, brincar e, claro, nadar!",buttonText:"Viver minha experiência agora",imageUrl:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732730258/parc%C3%A3o_mdvo8p_sfazpp.webp"},{title:"Adega",description:"Para tornar a sua experiência ainda mais especial, contamos com uma adega subterrânea para a climatização perfeita dos vinhos, bar com carta variada de drinks, cervejas e destilados.",buttonText:"Viver minha experiência agora",imageUrl:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732730261/adega_uje7gn_gdxn3g.webp"},{title:"Suítes",description:"São 10 suítes encatadoras e cada uma possui o seu charme. Todas dispõem de uma banheira com vista para a natureza, lareira, cama king-size, ar-condicionado, frigobar e varanda.",buttonText:"Viver minha experiência agora",imageUrl:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732729616/suiteSerra2_aksiu9_feouvg.webp"},{title:"Relaxar",description:"Relaxe no nosso SPA com uma vista de frente para a mata! Você pode escolher contratar os nossos serviços de massoterapia, manicure e pedicure.",buttonText:"Viver minha experiência agora",imageUrl:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732732524/slide04_li94ks_oorjnr.webp"}],KE=[{images:[{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732732696/serra1_dlmpih_to7gwm.webp",alt:"Cachorro surfando na piscina",loading:"lazy",label:"Le Ange Serra"},{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732732698/serra2_h64lp3_dtgvyt.webp",alt:"Cachorro andando na borda da piscina",loading:"lazy",label:"Le Ange Serra"},{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732732700/serra3_hqphcd_xoguiy.webp",alt:"Cachorro sentado tomando sol e sorrindo para a foto",loading:"lazy",label:"Le Ange Serra"},{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732728790/foto_de_mulher_com_dois_cachorros_bwwkmi_pyqnx0.jpg",alt:"2 cachorros e uma mulher no meio",loading:"lazy",label:"Le Ange Serra"},{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732732701/serra5_liz2la_exkn5b.jpg",alt:"Cachorro mordendo uma bolinha",loading:"lazy",label:"Le Ange Serra"},{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732732704/serra4_anm8q9_zueh0h.webp",alt:"Casal com um casal de cachorro sentado na beira da piscina",loading:"lazy",label:"Le Ange Serra"},{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732732707/16_mwucoo_qw5inq_od6ein.jpg",alt:"Mulher na cachoeira com cachorros brincando",loading:"lazy",label:"Le Ange Serra"},{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732732708/15_epymcf_vqg5qs_ljexgt.webp",alt:"Mulher e cachorro na piscina sorrindo",loading:"lazy",label:"Le Ange Serra"},{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732732709/serra5_vgmvai_aa3uh5.jpg",alt:"3 cachorros tirando uma selfie",loading:"lazy",label:"Le Ange Serra"},{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732732713/serra3_abkfr4_abucit.webp",alt:"Cachorro dormindo na rede em cima da cachoeira",loading:"lazy",label:"Le Ange Serra"}]},{images:[{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732732714/serra2_qzxvpu_ttcjqm.webp",alt:"Cachorro dormindo no sofá",loading:"lazy",label:"Le Ange Serra"},{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732732717/11_wlyxbh_wxtele_kbbm8r.webp",alt:"Cachorro papai noel",loading:"lazy",label:"Le Ange Serra"},{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732732718/serra4_wdvsmr_z6jid2.webp",alt:"Um cachorro no cola de um humano sorrindo",loading:"lazy",label:"Le Ange Serra"},{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732732720/12_epl2gw_oc9uc0_w3jelm.jpg",alt:"2 cachorros e uma mulher no meio",loading:"lazy",label:"Le Ange Serra"},{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732729373/cachorro_na_m%C3%A3o_kil7xk_q6lqew.webp",alt:"Cachorro brincando na grama",loading:"lazy",label:"Le Ange Serra"},{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732732721/13_hhitda_hfolhl_ilbwmk.jpg",alt:"2 cachorros sorrindo na rede",loading:"lazy",label:"Le Ange Serra"},{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732732723/14_ybyv7y_wt3zn2_w8whu2.webp",alt:"Uma mulher e um cachorro do lado dela",loading:"lazy",label:"Le Ange Serra"},{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732732724/17_awkinq_ommg1k_1_vqdt6j.jpg",alt:"3 cachorros brincando na praia",loading:"lazy",label:"Le Ange Mar"},{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732732728/serra1_tohjvc_b6hpdg.jpgp",alt:"Cachorro andando na cachoeira",loading:"lazy",label:"Le Ange Serra"}],reverse:!0}],XE=_.section`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px){
        height: auto;
        padding: 0% 0 5% 0 ;
    }
`,QE=_.div`
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
`,ZE=_.section`
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
`,JE=[{image:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732730393/risotos_oj42yf_nivhjz.webp",title:"Noite de Risotos",dateRange:"29/11/2024 até 01/12/2024 (2 diárias)",features:[{icon:c.jsx(re,{}),text:"30/11 - Noite de Risostos"},{icon:c.jsx(re,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(xe,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"359,20",discount:25},{image:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732730394/pizzas_lgsqcd_ekmh4f.webp",title:"Noite das pizzas",dateRange:"06/12/2024 até 08/12/2024 (3 diárias)",features:[{icon:c.jsx(re,{}),text:"07/12 - Noite das pizzas"},{icon:c.jsx(re,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(xe,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"359,20",discount:25},{image:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732730394/frutos_do_mar1_ly3hq1_ch6mr3.webp",title:"Frutos do Mar",dateRange:"13/12/2024 até 15/12/2024 (2 diárias)",features:[{icon:c.jsx(re,{}),text:"14/12 - Frutos do Mar"},{icon:c.jsx(re,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(xe,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"359,20",discount:25},{image:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732730394/fique3pague4_fiupcm_bgpy9c.webp",title:"Fique 4 pague 3",dateRange:"Segunda-feira a Sexta-feira",features:[{icon:c.jsx(re,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(hn,{}),text:"Até 12X SEM JUROS"},{icon:c.jsx(xe,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"538,90",discount:25},{image:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732730395/natal_wrunee_ceaifp.webp",title:"Pacote de Natal",dateRange:"21/12/2024 até 25/12/2024 (4 diárias)",features:[{icon:c.jsx(re,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(hn,{}),text:"Até 12X SEM JUROS"},{icon:c.jsx(xe,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"918,40",discount:25}],eP=_.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 15vh;
    margin-bottom: -10vh;

    @media (max-width: 768px){
        display: none;
    }
`,tP=[{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732729616/suiteSerra1_wm28o4_pbmwec.webp",text:"Suíte Superior 1",loading:"lazy"},{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732729616/foto2_pn8axc_qyclur.webp",text:"Suíte Superior 2",loading:"lazy"},{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732732956/suiteSuperior3_pgr53r_xengfh.webp",text:"Suíte Superior 3",loading:"lazy"},{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732732957/suiteStandard4_mrtwhq_vpx77n.webp",text:"Suíte Standard 4",loading:"lazy"},{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732732960/suiteStandard5_j9oyln_id3z9p.webp",text:"Suíte Standard 5",loading:"lazy"},{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732732963/suiteMaster6_id3iqs_gttw2r.webp",text:"Suíte Master 6",loading:"lazy"},{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732732964/suiteMaster7_bqdek7_gbhmfk.webp",text:"Suíte Superior 7",loading:"lazy"},{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732732967/suiteStandard8_lpyi22_yiiemz.webp",text:"Suíte Standard 8",loading:"lazy"},{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732732972/suiteSuperior9_v1mxwb_pfd3ww.webp",text:"Suíte Superior 9",loading:"lazy"},{src:"https://res.cloudinary.com/dabucfkmg/image/upload/v1732732975/suiteMaster10_gqoxfm_kxxaso.webp",text:"Suíte Master 10",loading:"lazy"}],nP=()=>(k.useEffect(()=>{Re.init({duration:1e3,once:!1}),Re.refresh()},[]),c.jsxs(c.Fragment,{children:[c.jsx(Rn,{children:c.jsx("title",{children:"Le Ange Serra - Pousada Le Ange"})}),c.jsx(HE,{}),c.jsx(Fn,{}),c.jsxs(UE,{children:[c.jsx(WE,{"data-aos":"zoom-in","data-aos-delay":"100"}),c.jsxs(GE,{children:[c.jsx("h4",{"data-aos":"fade-up","data-aos-delay":"100",children:"Conheça a Le Ange Serra, a pousada mais"}),c.jsxs("h1",{"data-aos":"fade-down","data-aos-delay":"200",children:["PET FRIENDLY",c.jsx("br",{})," DO ",c.jsx("b",{children:"BRASIL"})]}),c.jsx("p",{children:"Aqui você e o seu pet, são mais do que bem-vindos!"}),c.jsx(wr,{text:"Reservar agora!",textColor:"var(--color--black)",backgroundColor:"transparent",borderColor:"var(--color--black)",hoverBackgroundColor:"var(--color--green)",hoverBorderColor:"var(--color--green)",hoverColor:"var(--color--white)",hoverIconColor:"var(--color--white)",onClick:()=>window.open("https://wa.link/dojlwi","_blank")})]})]}),c.jsx(QE,{"data-aos":"fade-up","data-aos-delay":"200",children:c.jsx("h1",{"data-aos":"fade-in","data-aos-delay":"400",children:"LeAnge Serra | Miguel Pereira RJ"})}),c.jsx(XE,{children:c.jsx(Nl,{slides:YE})}),c.jsx(Jy,{images:tP,"data-aos":"fade-up","data-aos-delay":"200"}),c.jsx(Fl,{}),c.jsx(Bl,{carousels:KE}),c.jsx(eP,{children:c.jsx(ut,{text:"Fazer minha reserva!",onClick:()=>window.open("https://wa.link/dojlwi","_blank")})}),c.jsx(ZE,{children:c.jsx(vo,{events:JE})}),c.jsx($l,{}),c.jsx(yr,{})]}));function rP(){const{pathname:e}=mn();return k.useEffect(()=>{window.scrollTo(0,0)},[e]),null}function iP(){const e=mn();return c.jsxs(c.Fragment,{children:[c.jsx(rP,{}),c.jsx(Z4,{children:c.jsxs(x3,{location:e,children:[c.jsx(rn,{path:"/",element:c.jsx(Oe.div,{initial:{opacity:0,scale:.8,rotateY:90},animate:{opacity:1,scale:1,rotateY:0},exit:{opacity:0,scale:.8,rotateY:-90},transition:{duration:.2,ease:"easeInOut"},children:c.jsx(QT,{})})}),c.jsx(rn,{path:"/sobre",element:c.jsx(Oe.div,{initial:{opacity:0,scale:.8,rotateY:90},animate:{opacity:1,scale:1,rotateY:0},exit:{opacity:0,scale:.8,rotateY:-90},transition:{duration:.2,ease:"easeInOut"},children:c.jsx(PC,{})})}),c.jsx(rn,{path:"/mar",element:c.jsx(Oe.div,{initial:{opacity:0,scale:.8,rotateY:90},animate:{opacity:1,scale:1,rotateY:0},exit:{opacity:0,scale:.8,rotateY:-90},transition:{duration:.2,ease:"easeInOut"},children:c.jsx(T9,{})})}),c.jsx(rn,{path:"/serra",element:c.jsx(Oe.div,{initial:{opacity:0,scale:.8,rotateY:90},animate:{opacity:1,scale:1,rotateY:0},exit:{opacity:0,scale:.8,rotateY:-90},transition:{duration:.2,ease:"easeInOut"},children:c.jsx(u9,{})})}),c.jsx(rn,{path:"/event",element:c.jsx(Oe.div,{initial:{opacity:0,scale:.8,rotateY:90},animate:{opacity:1,scale:1,rotateY:0},exit:{opacity:0,scale:.8,rotateY:-90},transition:{duration:.2,ease:"easeInOut"},children:c.jsx(yC,{})})}),c.jsx(rn,{path:"/acomodaMar",element:c.jsx(Oe.div,{initial:{opacity:0,scale:.8,rotateY:90},animate:{opacity:1,scale:1,rotateY:0},exit:{opacity:0,scale:.8,rotateY:-90},transition:{duration:.2,ease:"easeInOut"},children:c.jsx(zE,{})})}),c.jsx(rn,{path:"/acomodaSerra",element:c.jsx(Oe.div,{initial:{opacity:0,scale:.8,rotateY:90},animate:{opacity:1,scale:1,rotateY:0},exit:{opacity:0,scale:.8,rotateY:-90},transition:{duration:.2,ease:"easeInOut"},children:c.jsx(pE,{})})}),c.jsx(rn,{path:"/lpSerra",element:c.jsx(Oe.div,{initial:{opacity:0,scale:.8,rotateY:90},animate:{opacity:1,scale:1,rotateY:0},exit:{opacity:0,scale:.8,rotateY:-90},transition:{duration:.2,ease:"easeInOut"},children:c.jsx(nP,{})})}),c.jsx(rn,{path:"/lpMar",element:c.jsx(Oe.div,{initial:{opacity:0,scale:.8,rotateY:90},animate:{opacity:1,scale:1,rotateY:0},exit:{opacity:0,scale:.8,rotateY:-90},transition:{duration:.2,ease:"easeInOut"},children:c.jsx(qE,{})})})]},e.pathname)})]})}function aP(){const e=mn(),n=["/lpMar","/lpSerra"].includes(e.pathname);return c.jsxs(c.Fragment,{children:[!n&&c.jsx(R9,{}),c.jsx(iP,{})]})}function oP(){return c.jsx(_3,{children:c.jsx(aP,{})})}lv(document.getElementById("root")).render(c.jsx(k.StrictMode,{children:c.jsx(oP,{})}));
