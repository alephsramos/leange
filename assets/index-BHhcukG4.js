function r2(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var i2=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ri(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var q0={exports:{}},el={},G0={exports:{}},te={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ta=Symbol.for("react.element"),o2=Symbol.for("react.portal"),a2=Symbol.for("react.fragment"),s2=Symbol.for("react.strict_mode"),l2=Symbol.for("react.profiler"),c2=Symbol.for("react.provider"),u2=Symbol.for("react.context"),d2=Symbol.for("react.forward_ref"),p2=Symbol.for("react.suspense"),f2=Symbol.for("react.memo"),h2=Symbol.for("react.lazy"),ff=Symbol.iterator;function m2(e){return e===null||typeof e!="object"?null:(e=ff&&e[ff]||e["@@iterator"],typeof e=="function"?e:null)}var Y0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},K0=Object.assign,X0={};function Vi(e,t,n){this.props=e,this.context=t,this.refs=X0,this.updater=n||Y0}Vi.prototype.isReactComponent={};Vi.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Vi.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Q0(){}Q0.prototype=Vi.prototype;function md(e,t,n){this.props=e,this.context=t,this.refs=X0,this.updater=n||Y0}var gd=md.prototype=new Q0;gd.constructor=md;K0(gd,Vi.prototype);gd.isPureReactComponent=!0;var hf=Array.isArray,Z0=Object.prototype.hasOwnProperty,vd={current:null},J0={key:!0,ref:!0,__self:!0,__source:!0};function eg(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)Z0.call(t,r)&&!J0.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:ta,type:e,key:o,ref:a,props:i,_owner:vd.current}}function g2(e,t){return{$$typeof:ta,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function xd(e){return typeof e=="object"&&e!==null&&e.$$typeof===ta}function v2(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var mf=/\/+/g;function Bl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?v2(""+e.key):t.toString(36)}function Da(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case ta:case o2:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+Bl(a,0):r,hf(i)?(n="",e!=null&&(n=e.replace(mf,"$&/")+"/"),Da(i,t,n,"",function(u){return u})):i!=null&&(xd(i)&&(i=g2(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(mf,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",hf(e))for(var s=0;s<e.length;s++){o=e[s];var l=r+Bl(o,s);a+=Da(o,t,n,l,i)}else if(l=m2(e),typeof l=="function")for(e=l.call(e),s=0;!(o=e.next()).done;)o=o.value,l=r+Bl(o,s++),a+=Da(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function pa(e,t,n){if(e==null)return e;var r=[],i=0;return Da(e,r,"","",function(o){return t.call(n,o,i++)}),r}function x2(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var rt={current:null},Na={transition:null},y2={ReactCurrentDispatcher:rt,ReactCurrentBatchConfig:Na,ReactCurrentOwner:vd};function tg(){throw Error("act(...) is not supported in production builds of React.")}te.Children={map:pa,forEach:function(e,t,n){pa(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return pa(e,function(){t++}),t},toArray:function(e){return pa(e,function(t){return t})||[]},only:function(e){if(!xd(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};te.Component=Vi;te.Fragment=a2;te.Profiler=l2;te.PureComponent=md;te.StrictMode=s2;te.Suspense=p2;te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=y2;te.act=tg;te.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=K0({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=vd.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)Z0.call(t,l)&&!J0.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){s=Array(l);for(var u=0;u<l;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:ta,type:e.type,key:i,ref:o,props:r,_owner:a}};te.createContext=function(e){return e={$$typeof:u2,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:c2,_context:e},e.Consumer=e};te.createElement=eg;te.createFactory=function(e){var t=eg.bind(null,e);return t.type=e,t};te.createRef=function(){return{current:null}};te.forwardRef=function(e){return{$$typeof:d2,render:e}};te.isValidElement=xd;te.lazy=function(e){return{$$typeof:h2,_payload:{_status:-1,_result:e},_init:x2}};te.memo=function(e,t){return{$$typeof:f2,type:e,compare:t===void 0?null:t}};te.startTransition=function(e){var t=Na.transition;Na.transition={};try{e()}finally{Na.transition=t}};te.unstable_act=tg;te.useCallback=function(e,t){return rt.current.useCallback(e,t)};te.useContext=function(e){return rt.current.useContext(e)};te.useDebugValue=function(){};te.useDeferredValue=function(e){return rt.current.useDeferredValue(e)};te.useEffect=function(e,t){return rt.current.useEffect(e,t)};te.useId=function(){return rt.current.useId()};te.useImperativeHandle=function(e,t,n){return rt.current.useImperativeHandle(e,t,n)};te.useInsertionEffect=function(e,t){return rt.current.useInsertionEffect(e,t)};te.useLayoutEffect=function(e,t){return rt.current.useLayoutEffect(e,t)};te.useMemo=function(e,t){return rt.current.useMemo(e,t)};te.useReducer=function(e,t,n){return rt.current.useReducer(e,t,n)};te.useRef=function(e){return rt.current.useRef(e)};te.useState=function(e){return rt.current.useState(e)};te.useSyncExternalStore=function(e,t,n){return rt.current.useSyncExternalStore(e,t,n)};te.useTransition=function(){return rt.current.useTransition()};te.version="18.3.1";G0.exports=te;var j=G0.exports;const K=Ri(j),w2=r2({__proto__:null,default:K},[j]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var b2=j,S2=Symbol.for("react.element"),j2=Symbol.for("react.fragment"),T2=Object.prototype.hasOwnProperty,C2=b2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,P2={key:!0,ref:!0,__self:!0,__source:!0};function ng(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)T2.call(t,r)&&!P2.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:S2,type:e,key:o,ref:a,props:i,_owner:C2.current}}el.Fragment=j2;el.jsx=ng;el.jsxs=ng;q0.exports=el;var c=q0.exports,rg={exports:{}},jt={},ig={exports:{}},og={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(L,N){var B=L.length;L.push(N);e:for(;0<B;){var Z=B-1>>>1,re=L[Z];if(0<i(re,N))L[Z]=N,L[B]=re,B=Z;else break e}}function n(L){return L.length===0?null:L[0]}function r(L){if(L.length===0)return null;var N=L[0],B=L.pop();if(B!==N){L[0]=B;e:for(var Z=0,re=L.length,pt=re>>>1;Z<pt;){var ft=2*(Z+1)-1,Pt=L[ft],He=ft+1,Et=L[He];if(0>i(Pt,B))He<re&&0>i(Et,Pt)?(L[Z]=Et,L[He]=B,Z=He):(L[Z]=Pt,L[ft]=B,Z=ft);else if(He<re&&0>i(Et,B))L[Z]=Et,L[He]=B,Z=He;else break e}}return N}function i(L,N){var B=L.sortIndex-N.sortIndex;return B!==0?B:L.id-N.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var l=[],u=[],d=1,p=null,f=3,v=!1,x=!1,y=!1,b=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(L){for(var N=n(u);N!==null;){if(N.callback===null)r(u);else if(N.startTime<=L)r(u),N.sortIndex=N.expirationTime,t(l,N);else break;N=n(u)}}function w(L){if(y=!1,m(L),!x)if(n(l)!==null)x=!0,se(S);else{var N=n(u);N!==null&&ne(w,N.startTime-L)}}function S(L,N){x=!1,y&&(y=!1,g(E),E=-1),v=!0;var B=f;try{for(m(N),p=n(l);p!==null&&(!(p.expirationTime>N)||L&&!I());){var Z=p.callback;if(typeof Z=="function"){p.callback=null,f=p.priorityLevel;var re=Z(p.expirationTime<=N);N=e.unstable_now(),typeof re=="function"?p.callback=re:p===n(l)&&r(l),m(N)}else r(l);p=n(l)}if(p!==null)var pt=!0;else{var ft=n(u);ft!==null&&ne(w,ft.startTime-N),pt=!1}return pt}finally{p=null,f=B,v=!1}}var T=!1,P=null,E=-1,z=5,k=-1;function I(){return!(e.unstable_now()-k<z)}function $(){if(P!==null){var L=e.unstable_now();k=L;var N=!0;try{N=P(!0,L)}finally{N?D():(T=!1,P=null)}}else T=!1}var D;if(typeof h=="function")D=function(){h($)};else if(typeof MessageChannel<"u"){var W=new MessageChannel,G=W.port2;W.port1.onmessage=$,D=function(){G.postMessage(null)}}else D=function(){b($,0)};function se(L){P=L,T||(T=!0,D())}function ne(L,N){E=b(function(){L(e.unstable_now())},N)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(L){L.callback=null},e.unstable_continueExecution=function(){x||v||(x=!0,se(S))},e.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<L?Math.floor(1e3/L):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(L){switch(f){case 1:case 2:case 3:var N=3;break;default:N=f}var B=f;f=N;try{return L()}finally{f=B}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(L,N){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var B=f;f=L;try{return N()}finally{f=B}},e.unstable_scheduleCallback=function(L,N,B){var Z=e.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?Z+B:Z):B=Z,L){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=B+re,L={id:d++,callback:N,priorityLevel:L,startTime:B,expirationTime:re,sortIndex:-1},B>Z?(L.sortIndex=B,t(u,L),n(l)===null&&L===n(u)&&(y?(g(E),E=-1):y=!0,ne(w,B-Z))):(L.sortIndex=re,t(l,L),x||v||(x=!0,se(S))),L},e.unstable_shouldYield=I,e.unstable_wrapCallback=function(L){var N=f;return function(){var B=f;f=N;try{return L.apply(this,arguments)}finally{f=B}}}})(og);ig.exports=og;var E2=ig.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var k2=j,yt=E2;function R(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ag=new Set,Ao={};function Dr(e,t){bi(e,t),bi(e+"Capture",t)}function bi(e,t){for(Ao[e]=t,e=0;e<t.length;e++)ag.add(t[e])}var Pn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),$c=Object.prototype.hasOwnProperty,z2=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,gf={},vf={};function A2(e){return $c.call(vf,e)?!0:$c.call(gf,e)?!1:z2.test(e)?vf[e]=!0:(gf[e]=!0,!1)}function L2(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function M2(e,t,n,r){if(t===null||typeof t>"u"||L2(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function it(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var Ge={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ge[e]=new it(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ge[t]=new it(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ge[e]=new it(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ge[e]=new it(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ge[e]=new it(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ge[e]=new it(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ge[e]=new it(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ge[e]=new it(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ge[e]=new it(e,5,!1,e.toLowerCase(),null,!1,!1)});var yd=/[\-:]([a-z])/g;function wd(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(yd,wd);Ge[t]=new it(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(yd,wd);Ge[t]=new it(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(yd,wd);Ge[t]=new it(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ge[e]=new it(e,1,!1,e.toLowerCase(),null,!1,!1)});Ge.xlinkHref=new it("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ge[e]=new it(e,1,!1,e.toLowerCase(),null,!0,!0)});function bd(e,t,n,r){var i=Ge.hasOwnProperty(t)?Ge[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(M2(t,n,i,r)&&(n=null),r||i===null?A2(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ln=k2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,fa=Symbol.for("react.element"),Yr=Symbol.for("react.portal"),Kr=Symbol.for("react.fragment"),Sd=Symbol.for("react.strict_mode"),Hc=Symbol.for("react.profiler"),sg=Symbol.for("react.provider"),lg=Symbol.for("react.context"),jd=Symbol.for("react.forward_ref"),Uc=Symbol.for("react.suspense"),Wc=Symbol.for("react.suspense_list"),Td=Symbol.for("react.memo"),Nn=Symbol.for("react.lazy"),cg=Symbol.for("react.offscreen"),xf=Symbol.iterator;function Wi(e){return e===null||typeof e!="object"?null:(e=xf&&e[xf]||e["@@iterator"],typeof e=="function"?e:null)}var je=Object.assign,Fl;function ao(e){if(Fl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Fl=t&&t[1]||""}return`
`+Fl+e}var $l=!1;function Hl(e,t){if(!e||$l)return"";$l=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,s=o.length-1;1<=a&&0<=s&&i[a]!==o[s];)s--;for(;1<=a&&0<=s;a--,s--)if(i[a]!==o[s]){if(a!==1||s!==1)do if(a--,s--,0>s||i[a]!==o[s]){var l=`
`+i[a].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=a&&0<=s);break}}}finally{$l=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ao(e):""}function _2(e){switch(e.tag){case 5:return ao(e.type);case 16:return ao("Lazy");case 13:return ao("Suspense");case 19:return ao("SuspenseList");case 0:case 2:case 15:return e=Hl(e.type,!1),e;case 11:return e=Hl(e.type.render,!1),e;case 1:return e=Hl(e.type,!0),e;default:return""}}function qc(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Kr:return"Fragment";case Yr:return"Portal";case Hc:return"Profiler";case Sd:return"StrictMode";case Uc:return"Suspense";case Wc:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case lg:return(e.displayName||"Context")+".Consumer";case sg:return(e._context.displayName||"Context")+".Provider";case jd:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Td:return t=e.displayName||null,t!==null?t:qc(e.type)||"Memo";case Nn:t=e._payload,e=e._init;try{return qc(e(t))}catch{}}return null}function O2(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return qc(t);case 8:return t===Sd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ir(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ug(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function I2(e){var t=ug(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ha(e){e._valueTracker||(e._valueTracker=I2(e))}function dg(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ug(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ls(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Gc(e,t){var n=t.checked;return je({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function yf(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=ir(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function pg(e,t){t=t.checked,t!=null&&bd(e,"checked",t,!1)}function Yc(e,t){pg(e,t);var n=ir(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Kc(e,t.type,n):t.hasOwnProperty("defaultValue")&&Kc(e,t.type,ir(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function wf(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Kc(e,t,n){(t!=="number"||ls(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var so=Array.isArray;function pi(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ir(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Xc(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(R(91));return je({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function bf(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(R(92));if(so(n)){if(1<n.length)throw Error(R(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:ir(n)}}function fg(e,t){var n=ir(t.value),r=ir(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Sf(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function hg(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Qc(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?hg(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ma,mg=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ma=ma||document.createElement("div"),ma.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ma.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Lo(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ho={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},R2=["Webkit","ms","Moz","O"];Object.keys(ho).forEach(function(e){R2.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ho[t]=ho[e]})});function gg(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ho.hasOwnProperty(e)&&ho[e]?(""+t).trim():t+"px"}function vg(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=gg(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var V2=je({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Zc(e,t){if(t){if(V2[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(R(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(R(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(R(61))}if(t.style!=null&&typeof t.style!="object")throw Error(R(62))}}function Jc(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var eu=null;function Cd(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var tu=null,fi=null,hi=null;function jf(e){if(e=ia(e)){if(typeof tu!="function")throw Error(R(280));var t=e.stateNode;t&&(t=ol(t),tu(e.stateNode,e.type,t))}}function xg(e){fi?hi?hi.push(e):hi=[e]:fi=e}function yg(){if(fi){var e=fi,t=hi;if(hi=fi=null,jf(e),t)for(e=0;e<t.length;e++)jf(t[e])}}function wg(e,t){return e(t)}function bg(){}var Ul=!1;function Sg(e,t,n){if(Ul)return e(t,n);Ul=!0;try{return wg(e,t,n)}finally{Ul=!1,(fi!==null||hi!==null)&&(bg(),yg())}}function Mo(e,t){var n=e.stateNode;if(n===null)return null;var r=ol(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(R(231,t,typeof n));return n}var nu=!1;if(Pn)try{var qi={};Object.defineProperty(qi,"passive",{get:function(){nu=!0}}),window.addEventListener("test",qi,qi),window.removeEventListener("test",qi,qi)}catch{nu=!1}function D2(e,t,n,r,i,o,a,s,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var mo=!1,cs=null,us=!1,ru=null,N2={onError:function(e){mo=!0,cs=e}};function B2(e,t,n,r,i,o,a,s,l){mo=!1,cs=null,D2.apply(N2,arguments)}function F2(e,t,n,r,i,o,a,s,l){if(B2.apply(this,arguments),mo){if(mo){var u=cs;mo=!1,cs=null}else throw Error(R(198));us||(us=!0,ru=u)}}function Nr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function jg(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Tf(e){if(Nr(e)!==e)throw Error(R(188))}function $2(e){var t=e.alternate;if(!t){if(t=Nr(e),t===null)throw Error(R(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Tf(i),e;if(o===r)return Tf(i),t;o=o.sibling}throw Error(R(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,s=i.child;s;){if(s===n){a=!0,n=i,r=o;break}if(s===r){a=!0,r=i,n=o;break}s=s.sibling}if(!a){for(s=o.child;s;){if(s===n){a=!0,n=o,r=i;break}if(s===r){a=!0,r=o,n=i;break}s=s.sibling}if(!a)throw Error(R(189))}}if(n.alternate!==r)throw Error(R(190))}if(n.tag!==3)throw Error(R(188));return n.stateNode.current===n?e:t}function Tg(e){return e=$2(e),e!==null?Cg(e):null}function Cg(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Cg(e);if(t!==null)return t;e=e.sibling}return null}var Pg=yt.unstable_scheduleCallback,Cf=yt.unstable_cancelCallback,H2=yt.unstable_shouldYield,U2=yt.unstable_requestPaint,Ae=yt.unstable_now,W2=yt.unstable_getCurrentPriorityLevel,Pd=yt.unstable_ImmediatePriority,Eg=yt.unstable_UserBlockingPriority,ds=yt.unstable_NormalPriority,q2=yt.unstable_LowPriority,kg=yt.unstable_IdlePriority,tl=null,an=null;function G2(e){if(an&&typeof an.onCommitFiberRoot=="function")try{an.onCommitFiberRoot(tl,e,void 0,(e.current.flags&128)===128)}catch{}}var Yt=Math.clz32?Math.clz32:X2,Y2=Math.log,K2=Math.LN2;function X2(e){return e>>>=0,e===0?32:31-(Y2(e)/K2|0)|0}var ga=64,va=4194304;function lo(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ps(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var s=a&~i;s!==0?r=lo(s):(o&=a,o!==0&&(r=lo(o)))}else a=n&~i,a!==0?r=lo(a):o!==0&&(r=lo(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Yt(t),i=1<<n,r|=e[n],t&=~i;return r}function Q2(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Z2(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-Yt(o),s=1<<a,l=i[a];l===-1?(!(s&n)||s&r)&&(i[a]=Q2(s,t)):l<=t&&(e.expiredLanes|=s),o&=~s}}function iu(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function zg(){var e=ga;return ga<<=1,!(ga&4194240)&&(ga=64),e}function Wl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function na(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Yt(t),e[t]=n}function J2(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Yt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Ed(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Yt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var ce=0;function Ag(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Lg,kd,Mg,_g,Og,ou=!1,xa=[],Yn=null,Kn=null,Xn=null,_o=new Map,Oo=new Map,Fn=[],ew="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Pf(e,t){switch(e){case"focusin":case"focusout":Yn=null;break;case"dragenter":case"dragleave":Kn=null;break;case"mouseover":case"mouseout":Xn=null;break;case"pointerover":case"pointerout":_o.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Oo.delete(t.pointerId)}}function Gi(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=ia(t),t!==null&&kd(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function tw(e,t,n,r,i){switch(t){case"focusin":return Yn=Gi(Yn,e,t,n,r,i),!0;case"dragenter":return Kn=Gi(Kn,e,t,n,r,i),!0;case"mouseover":return Xn=Gi(Xn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return _o.set(o,Gi(_o.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Oo.set(o,Gi(Oo.get(o)||null,e,t,n,r,i)),!0}return!1}function Ig(e){var t=br(e.target);if(t!==null){var n=Nr(t);if(n!==null){if(t=n.tag,t===13){if(t=jg(n),t!==null){e.blockedOn=t,Og(e.priority,function(){Mg(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ba(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=au(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);eu=r,n.target.dispatchEvent(r),eu=null}else return t=ia(n),t!==null&&kd(t),e.blockedOn=n,!1;t.shift()}return!0}function Ef(e,t,n){Ba(e)&&n.delete(t)}function nw(){ou=!1,Yn!==null&&Ba(Yn)&&(Yn=null),Kn!==null&&Ba(Kn)&&(Kn=null),Xn!==null&&Ba(Xn)&&(Xn=null),_o.forEach(Ef),Oo.forEach(Ef)}function Yi(e,t){e.blockedOn===t&&(e.blockedOn=null,ou||(ou=!0,yt.unstable_scheduleCallback(yt.unstable_NormalPriority,nw)))}function Io(e){function t(i){return Yi(i,e)}if(0<xa.length){Yi(xa[0],e);for(var n=1;n<xa.length;n++){var r=xa[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Yn!==null&&Yi(Yn,e),Kn!==null&&Yi(Kn,e),Xn!==null&&Yi(Xn,e),_o.forEach(t),Oo.forEach(t),n=0;n<Fn.length;n++)r=Fn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Fn.length&&(n=Fn[0],n.blockedOn===null);)Ig(n),n.blockedOn===null&&Fn.shift()}var mi=Ln.ReactCurrentBatchConfig,fs=!0;function rw(e,t,n,r){var i=ce,o=mi.transition;mi.transition=null;try{ce=1,zd(e,t,n,r)}finally{ce=i,mi.transition=o}}function iw(e,t,n,r){var i=ce,o=mi.transition;mi.transition=null;try{ce=4,zd(e,t,n,r)}finally{ce=i,mi.transition=o}}function zd(e,t,n,r){if(fs){var i=au(e,t,n,r);if(i===null)tc(e,t,r,hs,n),Pf(e,r);else if(tw(i,e,t,n,r))r.stopPropagation();else if(Pf(e,r),t&4&&-1<ew.indexOf(e)){for(;i!==null;){var o=ia(i);if(o!==null&&Lg(o),o=au(e,t,n,r),o===null&&tc(e,t,r,hs,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else tc(e,t,r,null,n)}}var hs=null;function au(e,t,n,r){if(hs=null,e=Cd(r),e=br(e),e!==null)if(t=Nr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=jg(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return hs=e,null}function Rg(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(W2()){case Pd:return 1;case Eg:return 4;case ds:case q2:return 16;case kg:return 536870912;default:return 16}default:return 16}}var Un=null,Ad=null,Fa=null;function Vg(){if(Fa)return Fa;var e,t=Ad,n=t.length,r,i="value"in Un?Un.value:Un.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return Fa=i.slice(e,1<r?1-r:void 0)}function $a(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ya(){return!0}function kf(){return!1}function Tt(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ya:kf,this.isPropagationStopped=kf,this}return je(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ya)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ya)},persist:function(){},isPersistent:ya}),t}var Di={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ld=Tt(Di),ra=je({},Di,{view:0,detail:0}),ow=Tt(ra),ql,Gl,Ki,nl=je({},ra,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Md,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ki&&(Ki&&e.type==="mousemove"?(ql=e.screenX-Ki.screenX,Gl=e.screenY-Ki.screenY):Gl=ql=0,Ki=e),ql)},movementY:function(e){return"movementY"in e?e.movementY:Gl}}),zf=Tt(nl),aw=je({},nl,{dataTransfer:0}),sw=Tt(aw),lw=je({},ra,{relatedTarget:0}),Yl=Tt(lw),cw=je({},Di,{animationName:0,elapsedTime:0,pseudoElement:0}),uw=Tt(cw),dw=je({},Di,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),pw=Tt(dw),fw=je({},Di,{data:0}),Af=Tt(fw),hw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},mw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},gw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vw(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=gw[e])?!!t[e]:!1}function Md(){return vw}var xw=je({},ra,{key:function(e){if(e.key){var t=hw[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=$a(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?mw[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Md,charCode:function(e){return e.type==="keypress"?$a(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?$a(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),yw=Tt(xw),ww=je({},nl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Lf=Tt(ww),bw=je({},ra,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Md}),Sw=Tt(bw),jw=je({},Di,{propertyName:0,elapsedTime:0,pseudoElement:0}),Tw=Tt(jw),Cw=je({},nl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Pw=Tt(Cw),Ew=[9,13,27,32],_d=Pn&&"CompositionEvent"in window,go=null;Pn&&"documentMode"in document&&(go=document.documentMode);var kw=Pn&&"TextEvent"in window&&!go,Dg=Pn&&(!_d||go&&8<go&&11>=go),Mf=" ",_f=!1;function Ng(e,t){switch(e){case"keyup":return Ew.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bg(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Xr=!1;function zw(e,t){switch(e){case"compositionend":return Bg(t);case"keypress":return t.which!==32?null:(_f=!0,Mf);case"textInput":return e=t.data,e===Mf&&_f?null:e;default:return null}}function Aw(e,t){if(Xr)return e==="compositionend"||!_d&&Ng(e,t)?(e=Vg(),Fa=Ad=Un=null,Xr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Dg&&t.locale!=="ko"?null:t.data;default:return null}}var Lw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Of(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Lw[e.type]:t==="textarea"}function Fg(e,t,n,r){xg(r),t=ms(t,"onChange"),0<t.length&&(n=new Ld("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var vo=null,Ro=null;function Mw(e){Zg(e,0)}function rl(e){var t=Jr(e);if(dg(t))return e}function _w(e,t){if(e==="change")return t}var $g=!1;if(Pn){var Kl;if(Pn){var Xl="oninput"in document;if(!Xl){var If=document.createElement("div");If.setAttribute("oninput","return;"),Xl=typeof If.oninput=="function"}Kl=Xl}else Kl=!1;$g=Kl&&(!document.documentMode||9<document.documentMode)}function Rf(){vo&&(vo.detachEvent("onpropertychange",Hg),Ro=vo=null)}function Hg(e){if(e.propertyName==="value"&&rl(Ro)){var t=[];Fg(t,Ro,e,Cd(e)),Sg(Mw,t)}}function Ow(e,t,n){e==="focusin"?(Rf(),vo=t,Ro=n,vo.attachEvent("onpropertychange",Hg)):e==="focusout"&&Rf()}function Iw(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return rl(Ro)}function Rw(e,t){if(e==="click")return rl(t)}function Vw(e,t){if(e==="input"||e==="change")return rl(t)}function Dw(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Qt=typeof Object.is=="function"?Object.is:Dw;function Vo(e,t){if(Qt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!$c.call(t,i)||!Qt(e[i],t[i]))return!1}return!0}function Vf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Df(e,t){var n=Vf(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Vf(n)}}function Ug(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ug(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Wg(){for(var e=window,t=ls();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ls(e.document)}return t}function Od(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Nw(e){var t=Wg(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Ug(n.ownerDocument.documentElement,n)){if(r!==null&&Od(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Df(n,o);var a=Df(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Bw=Pn&&"documentMode"in document&&11>=document.documentMode,Qr=null,su=null,xo=null,lu=!1;function Nf(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;lu||Qr==null||Qr!==ls(r)||(r=Qr,"selectionStart"in r&&Od(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),xo&&Vo(xo,r)||(xo=r,r=ms(su,"onSelect"),0<r.length&&(t=new Ld("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Qr)))}function wa(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Zr={animationend:wa("Animation","AnimationEnd"),animationiteration:wa("Animation","AnimationIteration"),animationstart:wa("Animation","AnimationStart"),transitionend:wa("Transition","TransitionEnd")},Ql={},qg={};Pn&&(qg=document.createElement("div").style,"AnimationEvent"in window||(delete Zr.animationend.animation,delete Zr.animationiteration.animation,delete Zr.animationstart.animation),"TransitionEvent"in window||delete Zr.transitionend.transition);function il(e){if(Ql[e])return Ql[e];if(!Zr[e])return e;var t=Zr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in qg)return Ql[e]=t[n];return e}var Gg=il("animationend"),Yg=il("animationiteration"),Kg=il("animationstart"),Xg=il("transitionend"),Qg=new Map,Bf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function lr(e,t){Qg.set(e,t),Dr(t,[e])}for(var Zl=0;Zl<Bf.length;Zl++){var Jl=Bf[Zl],Fw=Jl.toLowerCase(),$w=Jl[0].toUpperCase()+Jl.slice(1);lr(Fw,"on"+$w)}lr(Gg,"onAnimationEnd");lr(Yg,"onAnimationIteration");lr(Kg,"onAnimationStart");lr("dblclick","onDoubleClick");lr("focusin","onFocus");lr("focusout","onBlur");lr(Xg,"onTransitionEnd");bi("onMouseEnter",["mouseout","mouseover"]);bi("onMouseLeave",["mouseout","mouseover"]);bi("onPointerEnter",["pointerout","pointerover"]);bi("onPointerLeave",["pointerout","pointerover"]);Dr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Dr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Dr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Dr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Dr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Dr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var co="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Hw=new Set("cancel close invalid load scroll toggle".split(" ").concat(co));function Ff(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,F2(r,t,void 0,e),e.currentTarget=null}function Zg(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==o&&i.isPropagationStopped())break e;Ff(i,s,u),o=l}else for(a=0;a<r.length;a++){if(s=r[a],l=s.instance,u=s.currentTarget,s=s.listener,l!==o&&i.isPropagationStopped())break e;Ff(i,s,u),o=l}}}if(us)throw e=ru,us=!1,ru=null,e}function fe(e,t){var n=t[fu];n===void 0&&(n=t[fu]=new Set);var r=e+"__bubble";n.has(r)||(Jg(t,e,2,!1),n.add(r))}function ec(e,t,n){var r=0;t&&(r|=4),Jg(n,e,r,t)}var ba="_reactListening"+Math.random().toString(36).slice(2);function Do(e){if(!e[ba]){e[ba]=!0,ag.forEach(function(n){n!=="selectionchange"&&(Hw.has(n)||ec(n,!1,e),ec(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ba]||(t[ba]=!0,ec("selectionchange",!1,t))}}function Jg(e,t,n,r){switch(Rg(t)){case 1:var i=rw;break;case 4:i=iw;break;default:i=zd}n=i.bind(null,t,n,e),i=void 0,!nu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function tc(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;a=a.return}for(;s!==null;){if(a=br(s),a===null)return;if(l=a.tag,l===5||l===6){r=o=a;continue e}s=s.parentNode}}r=r.return}Sg(function(){var u=o,d=Cd(n),p=[];e:{var f=Qg.get(e);if(f!==void 0){var v=Ld,x=e;switch(e){case"keypress":if($a(n)===0)break e;case"keydown":case"keyup":v=yw;break;case"focusin":x="focus",v=Yl;break;case"focusout":x="blur",v=Yl;break;case"beforeblur":case"afterblur":v=Yl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=zf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=sw;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Sw;break;case Gg:case Yg:case Kg:v=uw;break;case Xg:v=Tw;break;case"scroll":v=ow;break;case"wheel":v=Pw;break;case"copy":case"cut":case"paste":v=pw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Lf}var y=(t&4)!==0,b=!y&&e==="scroll",g=y?f!==null?f+"Capture":null:f;y=[];for(var h=u,m;h!==null;){m=h;var w=m.stateNode;if(m.tag===5&&w!==null&&(m=w,g!==null&&(w=Mo(h,g),w!=null&&y.push(No(h,w,m)))),b)break;h=h.return}0<y.length&&(f=new v(f,x,null,n,d),p.push({event:f,listeners:y}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",f&&n!==eu&&(x=n.relatedTarget||n.fromElement)&&(br(x)||x[En]))break e;if((v||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,v?(x=n.relatedTarget||n.toElement,v=u,x=x?br(x):null,x!==null&&(b=Nr(x),x!==b||x.tag!==5&&x.tag!==6)&&(x=null)):(v=null,x=u),v!==x)){if(y=zf,w="onMouseLeave",g="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(y=Lf,w="onPointerLeave",g="onPointerEnter",h="pointer"),b=v==null?f:Jr(v),m=x==null?f:Jr(x),f=new y(w,h+"leave",v,n,d),f.target=b,f.relatedTarget=m,w=null,br(d)===u&&(y=new y(g,h+"enter",x,n,d),y.target=m,y.relatedTarget=b,w=y),b=w,v&&x)t:{for(y=v,g=x,h=0,m=y;m;m=Ur(m))h++;for(m=0,w=g;w;w=Ur(w))m++;for(;0<h-m;)y=Ur(y),h--;for(;0<m-h;)g=Ur(g),m--;for(;h--;){if(y===g||g!==null&&y===g.alternate)break t;y=Ur(y),g=Ur(g)}y=null}else y=null;v!==null&&$f(p,f,v,y,!1),x!==null&&b!==null&&$f(p,b,x,y,!0)}}e:{if(f=u?Jr(u):window,v=f.nodeName&&f.nodeName.toLowerCase(),v==="select"||v==="input"&&f.type==="file")var S=_w;else if(Of(f))if($g)S=Vw;else{S=Iw;var T=Ow}else(v=f.nodeName)&&v.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(S=Rw);if(S&&(S=S(e,u))){Fg(p,S,n,d);break e}T&&T(e,f,u),e==="focusout"&&(T=f._wrapperState)&&T.controlled&&f.type==="number"&&Kc(f,"number",f.value)}switch(T=u?Jr(u):window,e){case"focusin":(Of(T)||T.contentEditable==="true")&&(Qr=T,su=u,xo=null);break;case"focusout":xo=su=Qr=null;break;case"mousedown":lu=!0;break;case"contextmenu":case"mouseup":case"dragend":lu=!1,Nf(p,n,d);break;case"selectionchange":if(Bw)break;case"keydown":case"keyup":Nf(p,n,d)}var P;if(_d)e:{switch(e){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else Xr?Ng(e,n)&&(E="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(Dg&&n.locale!=="ko"&&(Xr||E!=="onCompositionStart"?E==="onCompositionEnd"&&Xr&&(P=Vg()):(Un=d,Ad="value"in Un?Un.value:Un.textContent,Xr=!0)),T=ms(u,E),0<T.length&&(E=new Af(E,e,null,n,d),p.push({event:E,listeners:T}),P?E.data=P:(P=Bg(n),P!==null&&(E.data=P)))),(P=kw?zw(e,n):Aw(e,n))&&(u=ms(u,"onBeforeInput"),0<u.length&&(d=new Af("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:u}),d.data=P))}Zg(p,t)})}function No(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ms(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Mo(e,n),o!=null&&r.unshift(No(e,o,i)),o=Mo(e,t),o!=null&&r.push(No(e,o,i))),e=e.return}return r}function Ur(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function $f(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var s=n,l=s.alternate,u=s.stateNode;if(l!==null&&l===r)break;s.tag===5&&u!==null&&(s=u,i?(l=Mo(n,o),l!=null&&a.unshift(No(n,l,s))):i||(l=Mo(n,o),l!=null&&a.push(No(n,l,s)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var Uw=/\r\n?/g,Ww=/\u0000|\uFFFD/g;function Hf(e){return(typeof e=="string"?e:""+e).replace(Uw,`
`).replace(Ww,"")}function Sa(e,t,n){if(t=Hf(t),Hf(e)!==t&&n)throw Error(R(425))}function gs(){}var cu=null,uu=null;function du(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var pu=typeof setTimeout=="function"?setTimeout:void 0,qw=typeof clearTimeout=="function"?clearTimeout:void 0,Uf=typeof Promise=="function"?Promise:void 0,Gw=typeof queueMicrotask=="function"?queueMicrotask:typeof Uf<"u"?function(e){return Uf.resolve(null).then(e).catch(Yw)}:pu;function Yw(e){setTimeout(function(){throw e})}function nc(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Io(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Io(t)}function Qn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Wf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Ni=Math.random().toString(36).slice(2),nn="__reactFiber$"+Ni,Bo="__reactProps$"+Ni,En="__reactContainer$"+Ni,fu="__reactEvents$"+Ni,Kw="__reactListeners$"+Ni,Xw="__reactHandles$"+Ni;function br(e){var t=e[nn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[En]||n[nn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Wf(e);e!==null;){if(n=e[nn])return n;e=Wf(e)}return t}e=n,n=e.parentNode}return null}function ia(e){return e=e[nn]||e[En],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Jr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(R(33))}function ol(e){return e[Bo]||null}var hu=[],ei=-1;function cr(e){return{current:e}}function me(e){0>ei||(e.current=hu[ei],hu[ei]=null,ei--)}function ue(e,t){ei++,hu[ei]=e.current,e.current=t}var or={},et=cr(or),ct=cr(!1),Lr=or;function Si(e,t){var n=e.type.contextTypes;if(!n)return or;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ut(e){return e=e.childContextTypes,e!=null}function vs(){me(ct),me(et)}function qf(e,t,n){if(et.current!==or)throw Error(R(168));ue(et,t),ue(ct,n)}function e1(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(R(108,O2(e)||"Unknown",i));return je({},n,r)}function xs(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||or,Lr=et.current,ue(et,e),ue(ct,ct.current),!0}function Gf(e,t,n){var r=e.stateNode;if(!r)throw Error(R(169));n?(e=e1(e,t,Lr),r.__reactInternalMemoizedMergedChildContext=e,me(ct),me(et),ue(et,e)):me(ct),ue(ct,n)}var mn=null,al=!1,rc=!1;function t1(e){mn===null?mn=[e]:mn.push(e)}function Qw(e){al=!0,t1(e)}function ur(){if(!rc&&mn!==null){rc=!0;var e=0,t=ce;try{var n=mn;for(ce=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}mn=null,al=!1}catch(i){throw mn!==null&&(mn=mn.slice(e+1)),Pg(Pd,ur),i}finally{ce=t,rc=!1}}return null}var ti=[],ni=0,ys=null,ws=0,Mt=[],_t=0,Mr=null,gn=1,vn="";function gr(e,t){ti[ni++]=ws,ti[ni++]=ys,ys=e,ws=t}function n1(e,t,n){Mt[_t++]=gn,Mt[_t++]=vn,Mt[_t++]=Mr,Mr=e;var r=gn;e=vn;var i=32-Yt(r)-1;r&=~(1<<i),n+=1;var o=32-Yt(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,gn=1<<32-Yt(t)+i|n<<i|r,vn=o+e}else gn=1<<o|n<<i|r,vn=e}function Id(e){e.return!==null&&(gr(e,1),n1(e,1,0))}function Rd(e){for(;e===ys;)ys=ti[--ni],ti[ni]=null,ws=ti[--ni],ti[ni]=null;for(;e===Mr;)Mr=Mt[--_t],Mt[_t]=null,vn=Mt[--_t],Mt[_t]=null,gn=Mt[--_t],Mt[_t]=null}var xt=null,vt=null,ye=!1,Wt=null;function r1(e,t){var n=Ot(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Yf(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,xt=e,vt=Qn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,xt=e,vt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Mr!==null?{id:gn,overflow:vn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ot(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,xt=e,vt=null,!0):!1;default:return!1}}function mu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function gu(e){if(ye){var t=vt;if(t){var n=t;if(!Yf(e,t)){if(mu(e))throw Error(R(418));t=Qn(n.nextSibling);var r=xt;t&&Yf(e,t)?r1(r,n):(e.flags=e.flags&-4097|2,ye=!1,xt=e)}}else{if(mu(e))throw Error(R(418));e.flags=e.flags&-4097|2,ye=!1,xt=e}}}function Kf(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;xt=e}function ja(e){if(e!==xt)return!1;if(!ye)return Kf(e),ye=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!du(e.type,e.memoizedProps)),t&&(t=vt)){if(mu(e))throw i1(),Error(R(418));for(;t;)r1(e,t),t=Qn(t.nextSibling)}if(Kf(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(R(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){vt=Qn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}vt=null}}else vt=xt?Qn(e.stateNode.nextSibling):null;return!0}function i1(){for(var e=vt;e;)e=Qn(e.nextSibling)}function ji(){vt=xt=null,ye=!1}function Vd(e){Wt===null?Wt=[e]:Wt.push(e)}var Zw=Ln.ReactCurrentBatchConfig;function Xi(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(R(309));var r=n.stateNode}if(!r)throw Error(R(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var s=i.refs;a===null?delete s[o]:s[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(R(284));if(!n._owner)throw Error(R(290,e))}return e}function Ta(e,t){throw e=Object.prototype.toString.call(t),Error(R(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Xf(e){var t=e._init;return t(e._payload)}function o1(e){function t(g,h){if(e){var m=g.deletions;m===null?(g.deletions=[h],g.flags|=16):m.push(h)}}function n(g,h){if(!e)return null;for(;h!==null;)t(g,h),h=h.sibling;return null}function r(g,h){for(g=new Map;h!==null;)h.key!==null?g.set(h.key,h):g.set(h.index,h),h=h.sibling;return g}function i(g,h){return g=tr(g,h),g.index=0,g.sibling=null,g}function o(g,h,m){return g.index=m,e?(m=g.alternate,m!==null?(m=m.index,m<h?(g.flags|=2,h):m):(g.flags|=2,h)):(g.flags|=1048576,h)}function a(g){return e&&g.alternate===null&&(g.flags|=2),g}function s(g,h,m,w){return h===null||h.tag!==6?(h=uc(m,g.mode,w),h.return=g,h):(h=i(h,m),h.return=g,h)}function l(g,h,m,w){var S=m.type;return S===Kr?d(g,h,m.props.children,w,m.key):h!==null&&(h.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Nn&&Xf(S)===h.type)?(w=i(h,m.props),w.ref=Xi(g,h,m),w.return=g,w):(w=Ka(m.type,m.key,m.props,null,g.mode,w),w.ref=Xi(g,h,m),w.return=g,w)}function u(g,h,m,w){return h===null||h.tag!==4||h.stateNode.containerInfo!==m.containerInfo||h.stateNode.implementation!==m.implementation?(h=dc(m,g.mode,w),h.return=g,h):(h=i(h,m.children||[]),h.return=g,h)}function d(g,h,m,w,S){return h===null||h.tag!==7?(h=Er(m,g.mode,w,S),h.return=g,h):(h=i(h,m),h.return=g,h)}function p(g,h,m){if(typeof h=="string"&&h!==""||typeof h=="number")return h=uc(""+h,g.mode,m),h.return=g,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case fa:return m=Ka(h.type,h.key,h.props,null,g.mode,m),m.ref=Xi(g,null,h),m.return=g,m;case Yr:return h=dc(h,g.mode,m),h.return=g,h;case Nn:var w=h._init;return p(g,w(h._payload),m)}if(so(h)||Wi(h))return h=Er(h,g.mode,m,null),h.return=g,h;Ta(g,h)}return null}function f(g,h,m,w){var S=h!==null?h.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return S!==null?null:s(g,h,""+m,w);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case fa:return m.key===S?l(g,h,m,w):null;case Yr:return m.key===S?u(g,h,m,w):null;case Nn:return S=m._init,f(g,h,S(m._payload),w)}if(so(m)||Wi(m))return S!==null?null:d(g,h,m,w,null);Ta(g,m)}return null}function v(g,h,m,w,S){if(typeof w=="string"&&w!==""||typeof w=="number")return g=g.get(m)||null,s(h,g,""+w,S);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case fa:return g=g.get(w.key===null?m:w.key)||null,l(h,g,w,S);case Yr:return g=g.get(w.key===null?m:w.key)||null,u(h,g,w,S);case Nn:var T=w._init;return v(g,h,m,T(w._payload),S)}if(so(w)||Wi(w))return g=g.get(m)||null,d(h,g,w,S,null);Ta(h,w)}return null}function x(g,h,m,w){for(var S=null,T=null,P=h,E=h=0,z=null;P!==null&&E<m.length;E++){P.index>E?(z=P,P=null):z=P.sibling;var k=f(g,P,m[E],w);if(k===null){P===null&&(P=z);break}e&&P&&k.alternate===null&&t(g,P),h=o(k,h,E),T===null?S=k:T.sibling=k,T=k,P=z}if(E===m.length)return n(g,P),ye&&gr(g,E),S;if(P===null){for(;E<m.length;E++)P=p(g,m[E],w),P!==null&&(h=o(P,h,E),T===null?S=P:T.sibling=P,T=P);return ye&&gr(g,E),S}for(P=r(g,P);E<m.length;E++)z=v(P,g,E,m[E],w),z!==null&&(e&&z.alternate!==null&&P.delete(z.key===null?E:z.key),h=o(z,h,E),T===null?S=z:T.sibling=z,T=z);return e&&P.forEach(function(I){return t(g,I)}),ye&&gr(g,E),S}function y(g,h,m,w){var S=Wi(m);if(typeof S!="function")throw Error(R(150));if(m=S.call(m),m==null)throw Error(R(151));for(var T=S=null,P=h,E=h=0,z=null,k=m.next();P!==null&&!k.done;E++,k=m.next()){P.index>E?(z=P,P=null):z=P.sibling;var I=f(g,P,k.value,w);if(I===null){P===null&&(P=z);break}e&&P&&I.alternate===null&&t(g,P),h=o(I,h,E),T===null?S=I:T.sibling=I,T=I,P=z}if(k.done)return n(g,P),ye&&gr(g,E),S;if(P===null){for(;!k.done;E++,k=m.next())k=p(g,k.value,w),k!==null&&(h=o(k,h,E),T===null?S=k:T.sibling=k,T=k);return ye&&gr(g,E),S}for(P=r(g,P);!k.done;E++,k=m.next())k=v(P,g,E,k.value,w),k!==null&&(e&&k.alternate!==null&&P.delete(k.key===null?E:k.key),h=o(k,h,E),T===null?S=k:T.sibling=k,T=k);return e&&P.forEach(function($){return t(g,$)}),ye&&gr(g,E),S}function b(g,h,m,w){if(typeof m=="object"&&m!==null&&m.type===Kr&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case fa:e:{for(var S=m.key,T=h;T!==null;){if(T.key===S){if(S=m.type,S===Kr){if(T.tag===7){n(g,T.sibling),h=i(T,m.props.children),h.return=g,g=h;break e}}else if(T.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Nn&&Xf(S)===T.type){n(g,T.sibling),h=i(T,m.props),h.ref=Xi(g,T,m),h.return=g,g=h;break e}n(g,T);break}else t(g,T);T=T.sibling}m.type===Kr?(h=Er(m.props.children,g.mode,w,m.key),h.return=g,g=h):(w=Ka(m.type,m.key,m.props,null,g.mode,w),w.ref=Xi(g,h,m),w.return=g,g=w)}return a(g);case Yr:e:{for(T=m.key;h!==null;){if(h.key===T)if(h.tag===4&&h.stateNode.containerInfo===m.containerInfo&&h.stateNode.implementation===m.implementation){n(g,h.sibling),h=i(h,m.children||[]),h.return=g,g=h;break e}else{n(g,h);break}else t(g,h);h=h.sibling}h=dc(m,g.mode,w),h.return=g,g=h}return a(g);case Nn:return T=m._init,b(g,h,T(m._payload),w)}if(so(m))return x(g,h,m,w);if(Wi(m))return y(g,h,m,w);Ta(g,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,h!==null&&h.tag===6?(n(g,h.sibling),h=i(h,m),h.return=g,g=h):(n(g,h),h=uc(m,g.mode,w),h.return=g,g=h),a(g)):n(g,h)}return b}var Ti=o1(!0),a1=o1(!1),bs=cr(null),Ss=null,ri=null,Dd=null;function Nd(){Dd=ri=Ss=null}function Bd(e){var t=bs.current;me(bs),e._currentValue=t}function vu(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function gi(e,t){Ss=e,Dd=ri=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(lt=!0),e.firstContext=null)}function Rt(e){var t=e._currentValue;if(Dd!==e)if(e={context:e,memoizedValue:t,next:null},ri===null){if(Ss===null)throw Error(R(308));ri=e,Ss.dependencies={lanes:0,firstContext:e}}else ri=ri.next=e;return t}var Sr=null;function Fd(e){Sr===null?Sr=[e]:Sr.push(e)}function s1(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Fd(t)):(n.next=i.next,i.next=n),t.interleaved=n,kn(e,r)}function kn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Bn=!1;function $d(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function l1(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function yn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Zn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,ae&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,kn(e,n)}return i=r.interleaved,i===null?(t.next=t,Fd(r)):(t.next=i.next,i.next=t),r.interleaved=t,kn(e,n)}function Ha(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ed(e,n)}}function Qf(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function js(e,t,n,r){var i=e.updateQueue;Bn=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var l=s,u=l.next;l.next=null,a===null?o=u:a.next=u,a=l;var d=e.alternate;d!==null&&(d=d.updateQueue,s=d.lastBaseUpdate,s!==a&&(s===null?d.firstBaseUpdate=u:s.next=u,d.lastBaseUpdate=l))}if(o!==null){var p=i.baseState;a=0,d=u=l=null,s=o;do{var f=s.lane,v=s.eventTime;if((r&f)===f){d!==null&&(d=d.next={eventTime:v,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var x=e,y=s;switch(f=t,v=n,y.tag){case 1:if(x=y.payload,typeof x=="function"){p=x.call(v,p,f);break e}p=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=y.payload,f=typeof x=="function"?x.call(v,p,f):x,f==null)break e;p=je({},p,f);break e;case 2:Bn=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[s]:f.push(s))}else v={eventTime:v,lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},d===null?(u=d=v,l=p):d=d.next=v,a|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;f=s,s=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(d===null&&(l=p),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Or|=a,e.lanes=a,e.memoizedState=p}}function Zf(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(R(191,i));i.call(r)}}}var oa={},sn=cr(oa),Fo=cr(oa),$o=cr(oa);function jr(e){if(e===oa)throw Error(R(174));return e}function Hd(e,t){switch(ue($o,t),ue(Fo,e),ue(sn,oa),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Qc(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Qc(t,e)}me(sn),ue(sn,t)}function Ci(){me(sn),me(Fo),me($o)}function c1(e){jr($o.current);var t=jr(sn.current),n=Qc(t,e.type);t!==n&&(ue(Fo,e),ue(sn,n))}function Ud(e){Fo.current===e&&(me(sn),me(Fo))}var we=cr(0);function Ts(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ic=[];function Wd(){for(var e=0;e<ic.length;e++)ic[e]._workInProgressVersionPrimary=null;ic.length=0}var Ua=Ln.ReactCurrentDispatcher,oc=Ln.ReactCurrentBatchConfig,_r=0,Se=null,Oe=null,Ne=null,Cs=!1,yo=!1,Ho=0,Jw=0;function Ye(){throw Error(R(321))}function qd(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Qt(e[n],t[n]))return!1;return!0}function Gd(e,t,n,r,i,o){if(_r=o,Se=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ua.current=e===null||e.memoizedState===null?r5:i5,e=n(r,i),yo){o=0;do{if(yo=!1,Ho=0,25<=o)throw Error(R(301));o+=1,Ne=Oe=null,t.updateQueue=null,Ua.current=o5,e=n(r,i)}while(yo)}if(Ua.current=Ps,t=Oe!==null&&Oe.next!==null,_r=0,Ne=Oe=Se=null,Cs=!1,t)throw Error(R(300));return e}function Yd(){var e=Ho!==0;return Ho=0,e}function en(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ne===null?Se.memoizedState=Ne=e:Ne=Ne.next=e,Ne}function Vt(){if(Oe===null){var e=Se.alternate;e=e!==null?e.memoizedState:null}else e=Oe.next;var t=Ne===null?Se.memoizedState:Ne.next;if(t!==null)Ne=t,Oe=e;else{if(e===null)throw Error(R(310));Oe=e,e={memoizedState:Oe.memoizedState,baseState:Oe.baseState,baseQueue:Oe.baseQueue,queue:Oe.queue,next:null},Ne===null?Se.memoizedState=Ne=e:Ne=Ne.next=e}return Ne}function Uo(e,t){return typeof t=="function"?t(e):t}function ac(e){var t=Vt(),n=t.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=e;var r=Oe,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var s=a=null,l=null,u=o;do{var d=u.lane;if((_r&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var p={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(s=l=p,a=r):l=l.next=p,Se.lanes|=d,Or|=d}u=u.next}while(u!==null&&u!==o);l===null?a=r:l.next=s,Qt(r,t.memoizedState)||(lt=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Se.lanes|=o,Or|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function sc(e){var t=Vt(),n=t.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);Qt(o,t.memoizedState)||(lt=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function u1(){}function d1(e,t){var n=Se,r=Vt(),i=t(),o=!Qt(r.memoizedState,i);if(o&&(r.memoizedState=i,lt=!0),r=r.queue,Kd(h1.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Ne!==null&&Ne.memoizedState.tag&1){if(n.flags|=2048,Wo(9,f1.bind(null,n,r,i,t),void 0,null),$e===null)throw Error(R(349));_r&30||p1(n,t,i)}return i}function p1(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Se.updateQueue,t===null?(t={lastEffect:null,stores:null},Se.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function f1(e,t,n,r){t.value=n,t.getSnapshot=r,m1(t)&&g1(e)}function h1(e,t,n){return n(function(){m1(t)&&g1(e)})}function m1(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Qt(e,n)}catch{return!0}}function g1(e){var t=kn(e,1);t!==null&&Kt(t,e,1,-1)}function Jf(e){var t=en();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Uo,lastRenderedState:e},t.queue=e,e=e.dispatch=n5.bind(null,Se,e),[t.memoizedState,e]}function Wo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Se.updateQueue,t===null?(t={lastEffect:null,stores:null},Se.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function v1(){return Vt().memoizedState}function Wa(e,t,n,r){var i=en();Se.flags|=e,i.memoizedState=Wo(1|t,n,void 0,r===void 0?null:r)}function sl(e,t,n,r){var i=Vt();r=r===void 0?null:r;var o=void 0;if(Oe!==null){var a=Oe.memoizedState;if(o=a.destroy,r!==null&&qd(r,a.deps)){i.memoizedState=Wo(t,n,o,r);return}}Se.flags|=e,i.memoizedState=Wo(1|t,n,o,r)}function eh(e,t){return Wa(8390656,8,e,t)}function Kd(e,t){return sl(2048,8,e,t)}function x1(e,t){return sl(4,2,e,t)}function y1(e,t){return sl(4,4,e,t)}function w1(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function b1(e,t,n){return n=n!=null?n.concat([e]):null,sl(4,4,w1.bind(null,t,e),n)}function Xd(){}function S1(e,t){var n=Vt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&qd(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function j1(e,t){var n=Vt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&qd(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function T1(e,t,n){return _r&21?(Qt(n,t)||(n=zg(),Se.lanes|=n,Or|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,lt=!0),e.memoizedState=n)}function e5(e,t){var n=ce;ce=n!==0&&4>n?n:4,e(!0);var r=oc.transition;oc.transition={};try{e(!1),t()}finally{ce=n,oc.transition=r}}function C1(){return Vt().memoizedState}function t5(e,t,n){var r=er(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},P1(e))E1(t,n);else if(n=s1(e,t,n,r),n!==null){var i=nt();Kt(n,e,r,i),k1(n,t,r)}}function n5(e,t,n){var r=er(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(P1(e))E1(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,s=o(a,n);if(i.hasEagerState=!0,i.eagerState=s,Qt(s,a)){var l=t.interleaved;l===null?(i.next=i,Fd(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=s1(e,t,i,r),n!==null&&(i=nt(),Kt(n,e,r,i),k1(n,t,r))}}function P1(e){var t=e.alternate;return e===Se||t!==null&&t===Se}function E1(e,t){yo=Cs=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function k1(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ed(e,n)}}var Ps={readContext:Rt,useCallback:Ye,useContext:Ye,useEffect:Ye,useImperativeHandle:Ye,useInsertionEffect:Ye,useLayoutEffect:Ye,useMemo:Ye,useReducer:Ye,useRef:Ye,useState:Ye,useDebugValue:Ye,useDeferredValue:Ye,useTransition:Ye,useMutableSource:Ye,useSyncExternalStore:Ye,useId:Ye,unstable_isNewReconciler:!1},r5={readContext:Rt,useCallback:function(e,t){return en().memoizedState=[e,t===void 0?null:t],e},useContext:Rt,useEffect:eh,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Wa(4194308,4,w1.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Wa(4194308,4,e,t)},useInsertionEffect:function(e,t){return Wa(4,2,e,t)},useMemo:function(e,t){var n=en();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=en();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=t5.bind(null,Se,e),[r.memoizedState,e]},useRef:function(e){var t=en();return e={current:e},t.memoizedState=e},useState:Jf,useDebugValue:Xd,useDeferredValue:function(e){return en().memoizedState=e},useTransition:function(){var e=Jf(!1),t=e[0];return e=e5.bind(null,e[1]),en().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Se,i=en();if(ye){if(n===void 0)throw Error(R(407));n=n()}else{if(n=t(),$e===null)throw Error(R(349));_r&30||p1(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,eh(h1.bind(null,r,o,e),[e]),r.flags|=2048,Wo(9,f1.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=en(),t=$e.identifierPrefix;if(ye){var n=vn,r=gn;n=(r&~(1<<32-Yt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ho++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Jw++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},i5={readContext:Rt,useCallback:S1,useContext:Rt,useEffect:Kd,useImperativeHandle:b1,useInsertionEffect:x1,useLayoutEffect:y1,useMemo:j1,useReducer:ac,useRef:v1,useState:function(){return ac(Uo)},useDebugValue:Xd,useDeferredValue:function(e){var t=Vt();return T1(t,Oe.memoizedState,e)},useTransition:function(){var e=ac(Uo)[0],t=Vt().memoizedState;return[e,t]},useMutableSource:u1,useSyncExternalStore:d1,useId:C1,unstable_isNewReconciler:!1},o5={readContext:Rt,useCallback:S1,useContext:Rt,useEffect:Kd,useImperativeHandle:b1,useInsertionEffect:x1,useLayoutEffect:y1,useMemo:j1,useReducer:sc,useRef:v1,useState:function(){return sc(Uo)},useDebugValue:Xd,useDeferredValue:function(e){var t=Vt();return Oe===null?t.memoizedState=e:T1(t,Oe.memoizedState,e)},useTransition:function(){var e=sc(Uo)[0],t=Vt().memoizedState;return[e,t]},useMutableSource:u1,useSyncExternalStore:d1,useId:C1,unstable_isNewReconciler:!1};function Ht(e,t){if(e&&e.defaultProps){t=je({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function xu(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:je({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ll={isMounted:function(e){return(e=e._reactInternals)?Nr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=nt(),i=er(e),o=yn(r,i);o.payload=t,n!=null&&(o.callback=n),t=Zn(e,o,i),t!==null&&(Kt(t,e,i,r),Ha(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=nt(),i=er(e),o=yn(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Zn(e,o,i),t!==null&&(Kt(t,e,i,r),Ha(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=nt(),r=er(e),i=yn(n,r);i.tag=2,t!=null&&(i.callback=t),t=Zn(e,i,r),t!==null&&(Kt(t,e,r,n),Ha(t,e,r))}};function th(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!Vo(n,r)||!Vo(i,o):!0}function z1(e,t,n){var r=!1,i=or,o=t.contextType;return typeof o=="object"&&o!==null?o=Rt(o):(i=ut(t)?Lr:et.current,r=t.contextTypes,o=(r=r!=null)?Si(e,i):or),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ll,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function nh(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ll.enqueueReplaceState(t,t.state,null)}function yu(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},$d(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Rt(o):(o=ut(t)?Lr:et.current,i.context=Si(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(xu(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&ll.enqueueReplaceState(i,i.state,null),js(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Pi(e,t){try{var n="",r=t;do n+=_2(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function lc(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function wu(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var a5=typeof WeakMap=="function"?WeakMap:Map;function A1(e,t,n){n=yn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ks||(ks=!0,Au=r),wu(e,t)},n}function L1(e,t,n){n=yn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){wu(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){wu(e,t),typeof r!="function"&&(Jn===null?Jn=new Set([this]):Jn.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function rh(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new a5;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=w5.bind(null,e,t,n),t.then(e,e))}function ih(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function oh(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=yn(-1,1),t.tag=2,Zn(n,t,1))),n.lanes|=1),e)}var s5=Ln.ReactCurrentOwner,lt=!1;function tt(e,t,n,r){t.child=e===null?a1(t,null,n,r):Ti(t,e.child,n,r)}function ah(e,t,n,r,i){n=n.render;var o=t.ref;return gi(t,i),r=Gd(e,t,n,r,o,i),n=Yd(),e!==null&&!lt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,zn(e,t,i)):(ye&&n&&Id(t),t.flags|=1,tt(e,t,r,i),t.child)}function sh(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!ip(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,M1(e,t,o,r,i)):(e=Ka(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:Vo,n(a,r)&&e.ref===t.ref)return zn(e,t,i)}return t.flags|=1,e=tr(o,r),e.ref=t.ref,e.return=t,t.child=e}function M1(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Vo(o,r)&&e.ref===t.ref)if(lt=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(lt=!0);else return t.lanes=e.lanes,zn(e,t,i)}return bu(e,t,n,r,i)}function _1(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ue(oi,mt),mt|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ue(oi,mt),mt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,ue(oi,mt),mt|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,ue(oi,mt),mt|=r;return tt(e,t,i,n),t.child}function O1(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function bu(e,t,n,r,i){var o=ut(n)?Lr:et.current;return o=Si(t,o),gi(t,i),n=Gd(e,t,n,r,o,i),r=Yd(),e!==null&&!lt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,zn(e,t,i)):(ye&&r&&Id(t),t.flags|=1,tt(e,t,n,i),t.child)}function lh(e,t,n,r,i){if(ut(n)){var o=!0;xs(t)}else o=!1;if(gi(t,i),t.stateNode===null)qa(e,t),z1(t,n,r),yu(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,s=t.memoizedProps;a.props=s;var l=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=Rt(u):(u=ut(n)?Lr:et.current,u=Si(t,u));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";p||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==r||l!==u)&&nh(t,a,r,u),Bn=!1;var f=t.memoizedState;a.state=f,js(t,r,a,i),l=t.memoizedState,s!==r||f!==l||ct.current||Bn?(typeof d=="function"&&(xu(t,n,d,r),l=t.memoizedState),(s=Bn||th(t,n,s,r,f,l,u))?(p||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=u,r=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,l1(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:Ht(t.type,s),a.props=u,p=t.pendingProps,f=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=Rt(l):(l=ut(n)?Lr:et.current,l=Si(t,l));var v=n.getDerivedStateFromProps;(d=typeof v=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==p||f!==l)&&nh(t,a,r,l),Bn=!1,f=t.memoizedState,a.state=f,js(t,r,a,i);var x=t.memoizedState;s!==p||f!==x||ct.current||Bn?(typeof v=="function"&&(xu(t,n,v,r),x=t.memoizedState),(u=Bn||th(t,n,u,r,f,x,l)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,x,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,x,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),a.props=r,a.state=x,a.context=l,r=u):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Su(e,t,n,r,o,i)}function Su(e,t,n,r,i,o){O1(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&Gf(t,n,!1),zn(e,t,o);r=t.stateNode,s5.current=t;var s=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Ti(t,e.child,null,o),t.child=Ti(t,null,s,o)):tt(e,t,s,o),t.memoizedState=r.state,i&&Gf(t,n,!0),t.child}function I1(e){var t=e.stateNode;t.pendingContext?qf(e,t.pendingContext,t.pendingContext!==t.context):t.context&&qf(e,t.context,!1),Hd(e,t.containerInfo)}function ch(e,t,n,r,i){return ji(),Vd(i),t.flags|=256,tt(e,t,n,r),t.child}var ju={dehydrated:null,treeContext:null,retryLane:0};function Tu(e){return{baseLanes:e,cachePool:null,transitions:null}}function R1(e,t,n){var r=t.pendingProps,i=we.current,o=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ue(we,i&1),e===null)return gu(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=dl(a,r,0,null),e=Er(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Tu(n),t.memoizedState=ju,e):Qd(t,a));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return l5(e,t,a,r,s,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,s=i.sibling;var l={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=tr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?o=tr(s,o):(o=Er(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?Tu(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=ju,r}return o=e.child,e=o.sibling,r=tr(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Qd(e,t){return t=dl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ca(e,t,n,r){return r!==null&&Vd(r),Ti(t,e.child,null,n),e=Qd(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function l5(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=lc(Error(R(422))),Ca(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=dl({mode:"visible",children:r.children},i,0,null),o=Er(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Ti(t,e.child,null,a),t.child.memoizedState=Tu(a),t.memoizedState=ju,o);if(!(t.mode&1))return Ca(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(R(419)),r=lc(o,r,void 0),Ca(e,t,a,r)}if(s=(a&e.childLanes)!==0,lt||s){if(r=$e,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,kn(e,i),Kt(r,e,i,-1))}return rp(),r=lc(Error(R(421))),Ca(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=b5.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,vt=Qn(i.nextSibling),xt=t,ye=!0,Wt=null,e!==null&&(Mt[_t++]=gn,Mt[_t++]=vn,Mt[_t++]=Mr,gn=e.id,vn=e.overflow,Mr=t),t=Qd(t,r.children),t.flags|=4096,t)}function uh(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),vu(e.return,t,n)}function cc(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function V1(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(tt(e,t,r.children,n),r=we.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&uh(e,n,t);else if(e.tag===19)uh(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ue(we,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Ts(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),cc(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Ts(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}cc(t,!0,n,null,o);break;case"together":cc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function qa(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function zn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Or|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(R(153));if(t.child!==null){for(e=t.child,n=tr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=tr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function c5(e,t,n){switch(t.tag){case 3:I1(t),ji();break;case 5:c1(t);break;case 1:ut(t.type)&&xs(t);break;case 4:Hd(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ue(bs,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ue(we,we.current&1),t.flags|=128,null):n&t.child.childLanes?R1(e,t,n):(ue(we,we.current&1),e=zn(e,t,n),e!==null?e.sibling:null);ue(we,we.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return V1(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ue(we,we.current),r)break;return null;case 22:case 23:return t.lanes=0,_1(e,t,n)}return zn(e,t,n)}var D1,Cu,N1,B1;D1=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Cu=function(){};N1=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,jr(sn.current);var o=null;switch(n){case"input":i=Gc(e,i),r=Gc(e,r),o=[];break;case"select":i=je({},i,{value:void 0}),r=je({},r,{value:void 0}),o=[];break;case"textarea":i=Xc(e,i),r=Xc(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=gs)}Zc(n,r);var a;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var s=i[u];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ao.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(s=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==s&&(l!=null||s!=null))if(u==="style")if(s){for(a in s)!s.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&s[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ao.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&fe("scroll",e),o||s===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};B1=function(e,t,n,r){n!==r&&(t.flags|=4)};function Qi(e,t){if(!ye)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ke(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function u5(e,t,n){var r=t.pendingProps;switch(Rd(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(t),null;case 1:return ut(t.type)&&vs(),Ke(t),null;case 3:return r=t.stateNode,Ci(),me(ct),me(et),Wd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ja(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Wt!==null&&(_u(Wt),Wt=null))),Cu(e,t),Ke(t),null;case 5:Ud(t);var i=jr($o.current);if(n=t.type,e!==null&&t.stateNode!=null)N1(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(R(166));return Ke(t),null}if(e=jr(sn.current),ja(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[nn]=t,r[Bo]=o,e=(t.mode&1)!==0,n){case"dialog":fe("cancel",r),fe("close",r);break;case"iframe":case"object":case"embed":fe("load",r);break;case"video":case"audio":for(i=0;i<co.length;i++)fe(co[i],r);break;case"source":fe("error",r);break;case"img":case"image":case"link":fe("error",r),fe("load",r);break;case"details":fe("toggle",r);break;case"input":yf(r,o),fe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},fe("invalid",r);break;case"textarea":bf(r,o),fe("invalid",r)}Zc(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var s=o[a];a==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&Sa(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&Sa(r.textContent,s,e),i=["children",""+s]):Ao.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&fe("scroll",r)}switch(n){case"input":ha(r),wf(r,o,!0);break;case"textarea":ha(r),Sf(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=gs)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=hg(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[nn]=t,e[Bo]=r,D1(e,t,!1,!1),t.stateNode=e;e:{switch(a=Jc(n,r),n){case"dialog":fe("cancel",e),fe("close",e),i=r;break;case"iframe":case"object":case"embed":fe("load",e),i=r;break;case"video":case"audio":for(i=0;i<co.length;i++)fe(co[i],e);i=r;break;case"source":fe("error",e),i=r;break;case"img":case"image":case"link":fe("error",e),fe("load",e),i=r;break;case"details":fe("toggle",e),i=r;break;case"input":yf(e,r),i=Gc(e,r),fe("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=je({},r,{value:void 0}),fe("invalid",e);break;case"textarea":bf(e,r),i=Xc(e,r),fe("invalid",e);break;default:i=r}Zc(n,i),s=i;for(o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="style"?vg(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&mg(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Lo(e,l):typeof l=="number"&&Lo(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Ao.hasOwnProperty(o)?l!=null&&o==="onScroll"&&fe("scroll",e):l!=null&&bd(e,o,l,a))}switch(n){case"input":ha(e),wf(e,r,!1);break;case"textarea":ha(e),Sf(e);break;case"option":r.value!=null&&e.setAttribute("value",""+ir(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?pi(e,!!r.multiple,o,!1):r.defaultValue!=null&&pi(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=gs)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ke(t),null;case 6:if(e&&t.stateNode!=null)B1(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(R(166));if(n=jr($o.current),jr(sn.current),ja(t)){if(r=t.stateNode,n=t.memoizedProps,r[nn]=t,(o=r.nodeValue!==n)&&(e=xt,e!==null))switch(e.tag){case 3:Sa(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Sa(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[nn]=t,t.stateNode=r}return Ke(t),null;case 13:if(me(we),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ye&&vt!==null&&t.mode&1&&!(t.flags&128))i1(),ji(),t.flags|=98560,o=!1;else if(o=ja(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(R(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(R(317));o[nn]=t}else ji(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ke(t),o=!1}else Wt!==null&&(_u(Wt),Wt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||we.current&1?Ie===0&&(Ie=3):rp())),t.updateQueue!==null&&(t.flags|=4),Ke(t),null);case 4:return Ci(),Cu(e,t),e===null&&Do(t.stateNode.containerInfo),Ke(t),null;case 10:return Bd(t.type._context),Ke(t),null;case 17:return ut(t.type)&&vs(),Ke(t),null;case 19:if(me(we),o=t.memoizedState,o===null)return Ke(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)Qi(o,!1);else{if(Ie!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Ts(e),a!==null){for(t.flags|=128,Qi(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ue(we,we.current&1|2),t.child}e=e.sibling}o.tail!==null&&Ae()>Ei&&(t.flags|=128,r=!0,Qi(o,!1),t.lanes=4194304)}else{if(!r)if(e=Ts(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Qi(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!ye)return Ke(t),null}else 2*Ae()-o.renderingStartTime>Ei&&n!==1073741824&&(t.flags|=128,r=!0,Qi(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Ae(),t.sibling=null,n=we.current,ue(we,r?n&1|2:n&1),t):(Ke(t),null);case 22:case 23:return np(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?mt&1073741824&&(Ke(t),t.subtreeFlags&6&&(t.flags|=8192)):Ke(t),null;case 24:return null;case 25:return null}throw Error(R(156,t.tag))}function d5(e,t){switch(Rd(t),t.tag){case 1:return ut(t.type)&&vs(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ci(),me(ct),me(et),Wd(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ud(t),null;case 13:if(me(we),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(R(340));ji()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return me(we),null;case 4:return Ci(),null;case 10:return Bd(t.type._context),null;case 22:case 23:return np(),null;case 24:return null;default:return null}}var Pa=!1,Qe=!1,p5=typeof WeakSet=="function"?WeakSet:Set,H=null;function ii(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Pe(e,t,r)}else n.current=null}function Pu(e,t,n){try{n()}catch(r){Pe(e,t,r)}}var dh=!1;function f5(e,t){if(cu=fs,e=Wg(),Od(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,s=-1,l=-1,u=0,d=0,p=e,f=null;t:for(;;){for(var v;p!==n||i!==0&&p.nodeType!==3||(s=a+i),p!==o||r!==0&&p.nodeType!==3||(l=a+r),p.nodeType===3&&(a+=p.nodeValue.length),(v=p.firstChild)!==null;)f=p,p=v;for(;;){if(p===e)break t;if(f===n&&++u===i&&(s=a),f===o&&++d===r&&(l=a),(v=p.nextSibling)!==null)break;p=f,f=p.parentNode}p=v}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(uu={focusedElem:e,selectionRange:n},fs=!1,H=t;H!==null;)if(t=H,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,H=e;else for(;H!==null;){t=H;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var y=x.memoizedProps,b=x.memoizedState,g=t.stateNode,h=g.getSnapshotBeforeUpdate(t.elementType===t.type?y:Ht(t.type,y),b);g.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(R(163))}}catch(w){Pe(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,H=e;break}H=t.return}return x=dh,dh=!1,x}function wo(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Pu(t,n,o)}i=i.next}while(i!==r)}}function cl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Eu(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function F1(e){var t=e.alternate;t!==null&&(e.alternate=null,F1(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[nn],delete t[Bo],delete t[fu],delete t[Kw],delete t[Xw])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function $1(e){return e.tag===5||e.tag===3||e.tag===4}function ph(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||$1(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ku(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=gs));else if(r!==4&&(e=e.child,e!==null))for(ku(e,t,n),e=e.sibling;e!==null;)ku(e,t,n),e=e.sibling}function zu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(zu(e,t,n),e=e.sibling;e!==null;)zu(e,t,n),e=e.sibling}var Ue=null,Ut=!1;function In(e,t,n){for(n=n.child;n!==null;)H1(e,t,n),n=n.sibling}function H1(e,t,n){if(an&&typeof an.onCommitFiberUnmount=="function")try{an.onCommitFiberUnmount(tl,n)}catch{}switch(n.tag){case 5:Qe||ii(n,t);case 6:var r=Ue,i=Ut;Ue=null,In(e,t,n),Ue=r,Ut=i,Ue!==null&&(Ut?(e=Ue,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ue.removeChild(n.stateNode));break;case 18:Ue!==null&&(Ut?(e=Ue,n=n.stateNode,e.nodeType===8?nc(e.parentNode,n):e.nodeType===1&&nc(e,n),Io(e)):nc(Ue,n.stateNode));break;case 4:r=Ue,i=Ut,Ue=n.stateNode.containerInfo,Ut=!0,In(e,t,n),Ue=r,Ut=i;break;case 0:case 11:case 14:case 15:if(!Qe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&Pu(n,t,a),i=i.next}while(i!==r)}In(e,t,n);break;case 1:if(!Qe&&(ii(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){Pe(n,t,s)}In(e,t,n);break;case 21:In(e,t,n);break;case 22:n.mode&1?(Qe=(r=Qe)||n.memoizedState!==null,In(e,t,n),Qe=r):In(e,t,n);break;default:In(e,t,n)}}function fh(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new p5),t.forEach(function(r){var i=S5.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ft(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,s=a;e:for(;s!==null;){switch(s.tag){case 5:Ue=s.stateNode,Ut=!1;break e;case 3:Ue=s.stateNode.containerInfo,Ut=!0;break e;case 4:Ue=s.stateNode.containerInfo,Ut=!0;break e}s=s.return}if(Ue===null)throw Error(R(160));H1(o,a,i),Ue=null,Ut=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Pe(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)U1(t,e),t=t.sibling}function U1(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ft(t,e),Jt(e),r&4){try{wo(3,e,e.return),cl(3,e)}catch(y){Pe(e,e.return,y)}try{wo(5,e,e.return)}catch(y){Pe(e,e.return,y)}}break;case 1:Ft(t,e),Jt(e),r&512&&n!==null&&ii(n,n.return);break;case 5:if(Ft(t,e),Jt(e),r&512&&n!==null&&ii(n,n.return),e.flags&32){var i=e.stateNode;try{Lo(i,"")}catch(y){Pe(e,e.return,y)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&pg(i,o),Jc(s,a);var u=Jc(s,o);for(a=0;a<l.length;a+=2){var d=l[a],p=l[a+1];d==="style"?vg(i,p):d==="dangerouslySetInnerHTML"?mg(i,p):d==="children"?Lo(i,p):bd(i,d,p,u)}switch(s){case"input":Yc(i,o);break;case"textarea":fg(i,o);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var v=o.value;v!=null?pi(i,!!o.multiple,v,!1):f!==!!o.multiple&&(o.defaultValue!=null?pi(i,!!o.multiple,o.defaultValue,!0):pi(i,!!o.multiple,o.multiple?[]:"",!1))}i[Bo]=o}catch(y){Pe(e,e.return,y)}}break;case 6:if(Ft(t,e),Jt(e),r&4){if(e.stateNode===null)throw Error(R(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(y){Pe(e,e.return,y)}}break;case 3:if(Ft(t,e),Jt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Io(t.containerInfo)}catch(y){Pe(e,e.return,y)}break;case 4:Ft(t,e),Jt(e);break;case 13:Ft(t,e),Jt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(ep=Ae())),r&4&&fh(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(Qe=(u=Qe)||d,Ft(t,e),Qe=u):Ft(t,e),Jt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(H=e,d=e.child;d!==null;){for(p=H=d;H!==null;){switch(f=H,v=f.child,f.tag){case 0:case 11:case 14:case 15:wo(4,f,f.return);break;case 1:ii(f,f.return);var x=f.stateNode;if(typeof x.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(y){Pe(r,n,y)}}break;case 5:ii(f,f.return);break;case 22:if(f.memoizedState!==null){mh(p);continue}}v!==null?(v.return=f,H=v):mh(p)}d=d.sibling}e:for(d=null,p=e;;){if(p.tag===5){if(d===null){d=p;try{i=p.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=p.stateNode,l=p.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=gg("display",a))}catch(y){Pe(e,e.return,y)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(y){Pe(e,e.return,y)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Ft(t,e),Jt(e),r&4&&fh(e);break;case 21:break;default:Ft(t,e),Jt(e)}}function Jt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if($1(n)){var r=n;break e}n=n.return}throw Error(R(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Lo(i,""),r.flags&=-33);var o=ph(e);zu(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,s=ph(e);ku(e,s,a);break;default:throw Error(R(161))}}catch(l){Pe(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function h5(e,t,n){H=e,W1(e)}function W1(e,t,n){for(var r=(e.mode&1)!==0;H!==null;){var i=H,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||Pa;if(!a){var s=i.alternate,l=s!==null&&s.memoizedState!==null||Qe;s=Pa;var u=Qe;if(Pa=a,(Qe=l)&&!u)for(H=i;H!==null;)a=H,l=a.child,a.tag===22&&a.memoizedState!==null?gh(i):l!==null?(l.return=a,H=l):gh(i);for(;o!==null;)H=o,W1(o),o=o.sibling;H=i,Pa=s,Qe=u}hh(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,H=o):hh(e)}}function hh(e){for(;H!==null;){var t=H;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Qe||cl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Qe)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Ht(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Zf(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Zf(t,a,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&Io(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(R(163))}Qe||t.flags&512&&Eu(t)}catch(f){Pe(t,t.return,f)}}if(t===e){H=null;break}if(n=t.sibling,n!==null){n.return=t.return,H=n;break}H=t.return}}function mh(e){for(;H!==null;){var t=H;if(t===e){H=null;break}var n=t.sibling;if(n!==null){n.return=t.return,H=n;break}H=t.return}}function gh(e){for(;H!==null;){var t=H;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{cl(4,t)}catch(l){Pe(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){Pe(t,i,l)}}var o=t.return;try{Eu(t)}catch(l){Pe(t,o,l)}break;case 5:var a=t.return;try{Eu(t)}catch(l){Pe(t,a,l)}}}catch(l){Pe(t,t.return,l)}if(t===e){H=null;break}var s=t.sibling;if(s!==null){s.return=t.return,H=s;break}H=t.return}}var m5=Math.ceil,Es=Ln.ReactCurrentDispatcher,Zd=Ln.ReactCurrentOwner,It=Ln.ReactCurrentBatchConfig,ae=0,$e=null,Me=null,We=0,mt=0,oi=cr(0),Ie=0,qo=null,Or=0,ul=0,Jd=0,bo=null,st=null,ep=0,Ei=1/0,fn=null,ks=!1,Au=null,Jn=null,Ea=!1,Wn=null,zs=0,So=0,Lu=null,Ga=-1,Ya=0;function nt(){return ae&6?Ae():Ga!==-1?Ga:Ga=Ae()}function er(e){return e.mode&1?ae&2&&We!==0?We&-We:Zw.transition!==null?(Ya===0&&(Ya=zg()),Ya):(e=ce,e!==0||(e=window.event,e=e===void 0?16:Rg(e.type)),e):1}function Kt(e,t,n,r){if(50<So)throw So=0,Lu=null,Error(R(185));na(e,n,r),(!(ae&2)||e!==$e)&&(e===$e&&(!(ae&2)&&(ul|=n),Ie===4&&$n(e,We)),dt(e,r),n===1&&ae===0&&!(t.mode&1)&&(Ei=Ae()+500,al&&ur()))}function dt(e,t){var n=e.callbackNode;Z2(e,t);var r=ps(e,e===$e?We:0);if(r===0)n!==null&&Cf(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Cf(n),t===1)e.tag===0?Qw(vh.bind(null,e)):t1(vh.bind(null,e)),Gw(function(){!(ae&6)&&ur()}),n=null;else{switch(Ag(r)){case 1:n=Pd;break;case 4:n=Eg;break;case 16:n=ds;break;case 536870912:n=kg;break;default:n=ds}n=J1(n,q1.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function q1(e,t){if(Ga=-1,Ya=0,ae&6)throw Error(R(327));var n=e.callbackNode;if(vi()&&e.callbackNode!==n)return null;var r=ps(e,e===$e?We:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=As(e,r);else{t=r;var i=ae;ae|=2;var o=Y1();($e!==e||We!==t)&&(fn=null,Ei=Ae()+500,Pr(e,t));do try{x5();break}catch(s){G1(e,s)}while(!0);Nd(),Es.current=o,ae=i,Me!==null?t=0:($e=null,We=0,t=Ie)}if(t!==0){if(t===2&&(i=iu(e),i!==0&&(r=i,t=Mu(e,i))),t===1)throw n=qo,Pr(e,0),$n(e,r),dt(e,Ae()),n;if(t===6)$n(e,r);else{if(i=e.current.alternate,!(r&30)&&!g5(i)&&(t=As(e,r),t===2&&(o=iu(e),o!==0&&(r=o,t=Mu(e,o))),t===1))throw n=qo,Pr(e,0),$n(e,r),dt(e,Ae()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(R(345));case 2:vr(e,st,fn);break;case 3:if($n(e,r),(r&130023424)===r&&(t=ep+500-Ae(),10<t)){if(ps(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){nt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=pu(vr.bind(null,e,st,fn),t);break}vr(e,st,fn);break;case 4:if($n(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-Yt(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=Ae()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*m5(r/1960))-r,10<r){e.timeoutHandle=pu(vr.bind(null,e,st,fn),r);break}vr(e,st,fn);break;case 5:vr(e,st,fn);break;default:throw Error(R(329))}}}return dt(e,Ae()),e.callbackNode===n?q1.bind(null,e):null}function Mu(e,t){var n=bo;return e.current.memoizedState.isDehydrated&&(Pr(e,t).flags|=256),e=As(e,t),e!==2&&(t=st,st=n,t!==null&&_u(t)),e}function _u(e){st===null?st=e:st.push.apply(st,e)}function g5(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Qt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function $n(e,t){for(t&=~Jd,t&=~ul,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Yt(t),r=1<<n;e[n]=-1,t&=~r}}function vh(e){if(ae&6)throw Error(R(327));vi();var t=ps(e,0);if(!(t&1))return dt(e,Ae()),null;var n=As(e,t);if(e.tag!==0&&n===2){var r=iu(e);r!==0&&(t=r,n=Mu(e,r))}if(n===1)throw n=qo,Pr(e,0),$n(e,t),dt(e,Ae()),n;if(n===6)throw Error(R(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,vr(e,st,fn),dt(e,Ae()),null}function tp(e,t){var n=ae;ae|=1;try{return e(t)}finally{ae=n,ae===0&&(Ei=Ae()+500,al&&ur())}}function Ir(e){Wn!==null&&Wn.tag===0&&!(ae&6)&&vi();var t=ae;ae|=1;var n=It.transition,r=ce;try{if(It.transition=null,ce=1,e)return e()}finally{ce=r,It.transition=n,ae=t,!(ae&6)&&ur()}}function np(){mt=oi.current,me(oi)}function Pr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,qw(n)),Me!==null)for(n=Me.return;n!==null;){var r=n;switch(Rd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&vs();break;case 3:Ci(),me(ct),me(et),Wd();break;case 5:Ud(r);break;case 4:Ci();break;case 13:me(we);break;case 19:me(we);break;case 10:Bd(r.type._context);break;case 22:case 23:np()}n=n.return}if($e=e,Me=e=tr(e.current,null),We=mt=t,Ie=0,qo=null,Jd=ul=Or=0,st=bo=null,Sr!==null){for(t=0;t<Sr.length;t++)if(n=Sr[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}Sr=null}return e}function G1(e,t){do{var n=Me;try{if(Nd(),Ua.current=Ps,Cs){for(var r=Se.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Cs=!1}if(_r=0,Ne=Oe=Se=null,yo=!1,Ho=0,Zd.current=null,n===null||n.return===null){Ie=1,qo=t,Me=null;break}e:{var o=e,a=n.return,s=n,l=t;if(t=We,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=s,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var v=ih(a);if(v!==null){v.flags&=-257,oh(v,a,s,o,t),v.mode&1&&rh(o,u,t),t=v,l=u;var x=t.updateQueue;if(x===null){var y=new Set;y.add(l),t.updateQueue=y}else x.add(l);break e}else{if(!(t&1)){rh(o,u,t),rp();break e}l=Error(R(426))}}else if(ye&&s.mode&1){var b=ih(a);if(b!==null){!(b.flags&65536)&&(b.flags|=256),oh(b,a,s,o,t),Vd(Pi(l,s));break e}}o=l=Pi(l,s),Ie!==4&&(Ie=2),bo===null?bo=[o]:bo.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var g=A1(o,l,t);Qf(o,g);break e;case 1:s=l;var h=o.type,m=o.stateNode;if(!(o.flags&128)&&(typeof h.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Jn===null||!Jn.has(m)))){o.flags|=65536,t&=-t,o.lanes|=t;var w=L1(o,s,t);Qf(o,w);break e}}o=o.return}while(o!==null)}X1(n)}catch(S){t=S,Me===n&&n!==null&&(Me=n=n.return);continue}break}while(!0)}function Y1(){var e=Es.current;return Es.current=Ps,e===null?Ps:e}function rp(){(Ie===0||Ie===3||Ie===2)&&(Ie=4),$e===null||!(Or&268435455)&&!(ul&268435455)||$n($e,We)}function As(e,t){var n=ae;ae|=2;var r=Y1();($e!==e||We!==t)&&(fn=null,Pr(e,t));do try{v5();break}catch(i){G1(e,i)}while(!0);if(Nd(),ae=n,Es.current=r,Me!==null)throw Error(R(261));return $e=null,We=0,Ie}function v5(){for(;Me!==null;)K1(Me)}function x5(){for(;Me!==null&&!H2();)K1(Me)}function K1(e){var t=Z1(e.alternate,e,mt);e.memoizedProps=e.pendingProps,t===null?X1(e):Me=t,Zd.current=null}function X1(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=d5(n,t),n!==null){n.flags&=32767,Me=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ie=6,Me=null;return}}else if(n=u5(n,t,mt),n!==null){Me=n;return}if(t=t.sibling,t!==null){Me=t;return}Me=t=e}while(t!==null);Ie===0&&(Ie=5)}function vr(e,t,n){var r=ce,i=It.transition;try{It.transition=null,ce=1,y5(e,t,n,r)}finally{It.transition=i,ce=r}return null}function y5(e,t,n,r){do vi();while(Wn!==null);if(ae&6)throw Error(R(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(R(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(J2(e,o),e===$e&&(Me=$e=null,We=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ea||(Ea=!0,J1(ds,function(){return vi(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=It.transition,It.transition=null;var a=ce;ce=1;var s=ae;ae|=4,Zd.current=null,f5(e,n),U1(n,e),Nw(uu),fs=!!cu,uu=cu=null,e.current=n,h5(n),U2(),ae=s,ce=a,It.transition=o}else e.current=n;if(Ea&&(Ea=!1,Wn=e,zs=i),o=e.pendingLanes,o===0&&(Jn=null),G2(n.stateNode),dt(e,Ae()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ks)throw ks=!1,e=Au,Au=null,e;return zs&1&&e.tag!==0&&vi(),o=e.pendingLanes,o&1?e===Lu?So++:(So=0,Lu=e):So=0,ur(),null}function vi(){if(Wn!==null){var e=Ag(zs),t=It.transition,n=ce;try{if(It.transition=null,ce=16>e?16:e,Wn===null)var r=!1;else{if(e=Wn,Wn=null,zs=0,ae&6)throw Error(R(331));var i=ae;for(ae|=4,H=e.current;H!==null;){var o=H,a=o.child;if(H.flags&16){var s=o.deletions;if(s!==null){for(var l=0;l<s.length;l++){var u=s[l];for(H=u;H!==null;){var d=H;switch(d.tag){case 0:case 11:case 15:wo(8,d,o)}var p=d.child;if(p!==null)p.return=d,H=p;else for(;H!==null;){d=H;var f=d.sibling,v=d.return;if(F1(d),d===u){H=null;break}if(f!==null){f.return=v,H=f;break}H=v}}}var x=o.alternate;if(x!==null){var y=x.child;if(y!==null){x.child=null;do{var b=y.sibling;y.sibling=null,y=b}while(y!==null)}}H=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,H=a;else e:for(;H!==null;){if(o=H,o.flags&2048)switch(o.tag){case 0:case 11:case 15:wo(9,o,o.return)}var g=o.sibling;if(g!==null){g.return=o.return,H=g;break e}H=o.return}}var h=e.current;for(H=h;H!==null;){a=H;var m=a.child;if(a.subtreeFlags&2064&&m!==null)m.return=a,H=m;else e:for(a=h;H!==null;){if(s=H,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:cl(9,s)}}catch(S){Pe(s,s.return,S)}if(s===a){H=null;break e}var w=s.sibling;if(w!==null){w.return=s.return,H=w;break e}H=s.return}}if(ae=i,ur(),an&&typeof an.onPostCommitFiberRoot=="function")try{an.onPostCommitFiberRoot(tl,e)}catch{}r=!0}return r}finally{ce=n,It.transition=t}}return!1}function xh(e,t,n){t=Pi(n,t),t=A1(e,t,1),e=Zn(e,t,1),t=nt(),e!==null&&(na(e,1,t),dt(e,t))}function Pe(e,t,n){if(e.tag===3)xh(e,e,n);else for(;t!==null;){if(t.tag===3){xh(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Jn===null||!Jn.has(r))){e=Pi(n,e),e=L1(t,e,1),t=Zn(t,e,1),e=nt(),t!==null&&(na(t,1,e),dt(t,e));break}}t=t.return}}function w5(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=nt(),e.pingedLanes|=e.suspendedLanes&n,$e===e&&(We&n)===n&&(Ie===4||Ie===3&&(We&130023424)===We&&500>Ae()-ep?Pr(e,0):Jd|=n),dt(e,t)}function Q1(e,t){t===0&&(e.mode&1?(t=va,va<<=1,!(va&130023424)&&(va=4194304)):t=1);var n=nt();e=kn(e,t),e!==null&&(na(e,t,n),dt(e,n))}function b5(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Q1(e,n)}function S5(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(R(314))}r!==null&&r.delete(t),Q1(e,n)}var Z1;Z1=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ct.current)lt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return lt=!1,c5(e,t,n);lt=!!(e.flags&131072)}else lt=!1,ye&&t.flags&1048576&&n1(t,ws,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;qa(e,t),e=t.pendingProps;var i=Si(t,et.current);gi(t,n),i=Gd(null,t,r,e,i,n);var o=Yd();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ut(r)?(o=!0,xs(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,$d(t),i.updater=ll,t.stateNode=i,i._reactInternals=t,yu(t,r,e,n),t=Su(null,t,r,!0,o,n)):(t.tag=0,ye&&o&&Id(t),tt(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(qa(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=T5(r),e=Ht(r,e),i){case 0:t=bu(null,t,r,e,n);break e;case 1:t=lh(null,t,r,e,n);break e;case 11:t=ah(null,t,r,e,n);break e;case 14:t=sh(null,t,r,Ht(r.type,e),n);break e}throw Error(R(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ht(r,i),bu(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ht(r,i),lh(e,t,r,i,n);case 3:e:{if(I1(t),e===null)throw Error(R(387));r=t.pendingProps,o=t.memoizedState,i=o.element,l1(e,t),js(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Pi(Error(R(423)),t),t=ch(e,t,r,n,i);break e}else if(r!==i){i=Pi(Error(R(424)),t),t=ch(e,t,r,n,i);break e}else for(vt=Qn(t.stateNode.containerInfo.firstChild),xt=t,ye=!0,Wt=null,n=a1(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ji(),r===i){t=zn(e,t,n);break e}tt(e,t,r,n)}t=t.child}return t;case 5:return c1(t),e===null&&gu(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,du(r,i)?a=null:o!==null&&du(r,o)&&(t.flags|=32),O1(e,t),tt(e,t,a,n),t.child;case 6:return e===null&&gu(t),null;case 13:return R1(e,t,n);case 4:return Hd(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ti(t,null,r,n):tt(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ht(r,i),ah(e,t,r,i,n);case 7:return tt(e,t,t.pendingProps,n),t.child;case 8:return tt(e,t,t.pendingProps.children,n),t.child;case 12:return tt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,ue(bs,r._currentValue),r._currentValue=a,o!==null)if(Qt(o.value,a)){if(o.children===i.children&&!ct.current){t=zn(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){a=o.child;for(var l=s.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=yn(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),vu(o.return,n,t),s.lanes|=n;break}l=l.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(R(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),vu(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}tt(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,gi(t,n),i=Rt(i),r=r(i),t.flags|=1,tt(e,t,r,n),t.child;case 14:return r=t.type,i=Ht(r,t.pendingProps),i=Ht(r.type,i),sh(e,t,r,i,n);case 15:return M1(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ht(r,i),qa(e,t),t.tag=1,ut(r)?(e=!0,xs(t)):e=!1,gi(t,n),z1(t,r,i),yu(t,r,i,n),Su(null,t,r,!0,e,n);case 19:return V1(e,t,n);case 22:return _1(e,t,n)}throw Error(R(156,t.tag))};function J1(e,t){return Pg(e,t)}function j5(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ot(e,t,n,r){return new j5(e,t,n,r)}function ip(e){return e=e.prototype,!(!e||!e.isReactComponent)}function T5(e){if(typeof e=="function")return ip(e)?1:0;if(e!=null){if(e=e.$$typeof,e===jd)return 11;if(e===Td)return 14}return 2}function tr(e,t){var n=e.alternate;return n===null?(n=Ot(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ka(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")ip(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Kr:return Er(n.children,i,o,t);case Sd:a=8,i|=8;break;case Hc:return e=Ot(12,n,t,i|2),e.elementType=Hc,e.lanes=o,e;case Uc:return e=Ot(13,n,t,i),e.elementType=Uc,e.lanes=o,e;case Wc:return e=Ot(19,n,t,i),e.elementType=Wc,e.lanes=o,e;case cg:return dl(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case sg:a=10;break e;case lg:a=9;break e;case jd:a=11;break e;case Td:a=14;break e;case Nn:a=16,r=null;break e}throw Error(R(130,e==null?e:typeof e,""))}return t=Ot(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Er(e,t,n,r){return e=Ot(7,e,r,t),e.lanes=n,e}function dl(e,t,n,r){return e=Ot(22,e,r,t),e.elementType=cg,e.lanes=n,e.stateNode={isHidden:!1},e}function uc(e,t,n){return e=Ot(6,e,null,t),e.lanes=n,e}function dc(e,t,n){return t=Ot(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function C5(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Wl(0),this.expirationTimes=Wl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function op(e,t,n,r,i,o,a,s,l){return e=new C5(e,t,n,s,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Ot(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},$d(o),e}function P5(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Yr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function ev(e){if(!e)return or;e=e._reactInternals;e:{if(Nr(e)!==e||e.tag!==1)throw Error(R(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ut(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(R(171))}if(e.tag===1){var n=e.type;if(ut(n))return e1(e,n,t)}return t}function tv(e,t,n,r,i,o,a,s,l){return e=op(n,r,!0,e,i,o,a,s,l),e.context=ev(null),n=e.current,r=nt(),i=er(n),o=yn(r,i),o.callback=t??null,Zn(n,o,i),e.current.lanes=i,na(e,i,r),dt(e,r),e}function pl(e,t,n,r){var i=t.current,o=nt(),a=er(i);return n=ev(n),t.context===null?t.context=n:t.pendingContext=n,t=yn(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Zn(i,t,a),e!==null&&(Kt(e,i,a,o),Ha(e,i,a)),a}function Ls(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function yh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ap(e,t){yh(e,t),(e=e.alternate)&&yh(e,t)}function E5(){return null}var nv=typeof reportError=="function"?reportError:function(e){console.error(e)};function sp(e){this._internalRoot=e}fl.prototype.render=sp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(R(409));pl(e,t,null,null)};fl.prototype.unmount=sp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ir(function(){pl(null,e,null,null)}),t[En]=null}};function fl(e){this._internalRoot=e}fl.prototype.unstable_scheduleHydration=function(e){if(e){var t=_g();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Fn.length&&t!==0&&t<Fn[n].priority;n++);Fn.splice(n,0,e),n===0&&Ig(e)}};function lp(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function hl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function wh(){}function k5(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=Ls(a);o.call(u)}}var a=tv(t,r,e,0,null,!1,!1,"",wh);return e._reactRootContainer=a,e[En]=a.current,Do(e.nodeType===8?e.parentNode:e),Ir(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var u=Ls(l);s.call(u)}}var l=op(e,0,!1,null,null,!1,!1,"",wh);return e._reactRootContainer=l,e[En]=l.current,Do(e.nodeType===8?e.parentNode:e),Ir(function(){pl(t,l,n,r)}),l}function ml(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var s=i;i=function(){var l=Ls(a);s.call(l)}}pl(t,a,e,i)}else a=k5(n,t,e,i,r);return Ls(a)}Lg=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=lo(t.pendingLanes);n!==0&&(Ed(t,n|1),dt(t,Ae()),!(ae&6)&&(Ei=Ae()+500,ur()))}break;case 13:Ir(function(){var r=kn(e,1);if(r!==null){var i=nt();Kt(r,e,1,i)}}),ap(e,1)}};kd=function(e){if(e.tag===13){var t=kn(e,134217728);if(t!==null){var n=nt();Kt(t,e,134217728,n)}ap(e,134217728)}};Mg=function(e){if(e.tag===13){var t=er(e),n=kn(e,t);if(n!==null){var r=nt();Kt(n,e,t,r)}ap(e,t)}};_g=function(){return ce};Og=function(e,t){var n=ce;try{return ce=e,t()}finally{ce=n}};tu=function(e,t,n){switch(t){case"input":if(Yc(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=ol(r);if(!i)throw Error(R(90));dg(r),Yc(r,i)}}}break;case"textarea":fg(e,n);break;case"select":t=n.value,t!=null&&pi(e,!!n.multiple,t,!1)}};wg=tp;bg=Ir;var z5={usingClientEntryPoint:!1,Events:[ia,Jr,ol,xg,yg,tp]},Zi={findFiberByHostInstance:br,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},A5={bundleType:Zi.bundleType,version:Zi.version,rendererPackageName:Zi.rendererPackageName,rendererConfig:Zi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ln.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Tg(e),e===null?null:e.stateNode},findFiberByHostInstance:Zi.findFiberByHostInstance||E5,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ka=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ka.isDisabled&&ka.supportsFiber)try{tl=ka.inject(A5),an=ka}catch{}}jt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=z5;jt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!lp(t))throw Error(R(200));return P5(e,t,null,n)};jt.createRoot=function(e,t){if(!lp(e))throw Error(R(299));var n=!1,r="",i=nv;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=op(e,1,!1,null,null,n,!1,r,i),e[En]=t.current,Do(e.nodeType===8?e.parentNode:e),new sp(t)};jt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(R(188)):(e=Object.keys(e).join(","),Error(R(268,e)));return e=Tg(t),e=e===null?null:e.stateNode,e};jt.flushSync=function(e){return Ir(e)};jt.hydrate=function(e,t,n){if(!hl(t))throw Error(R(200));return ml(null,e,t,!0,n)};jt.hydrateRoot=function(e,t,n){if(!lp(e))throw Error(R(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=nv;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=tv(t,null,e,1,n??null,i,!1,o,a),e[En]=t.current,Do(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new fl(t)};jt.render=function(e,t,n){if(!hl(t))throw Error(R(200));return ml(null,e,t,!1,n)};jt.unmountComponentAtNode=function(e){if(!hl(e))throw Error(R(40));return e._reactRootContainer?(Ir(function(){ml(null,null,e,!1,function(){e._reactRootContainer=null,e[En]=null})}),!0):!1};jt.unstable_batchedUpdates=tp;jt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!hl(n))throw Error(R(200));if(e==null||e._reactInternals===void 0)throw Error(R(38));return ml(e,t,n,!1,r)};jt.version="18.3.1-next-f1338f8080-20240426";function rv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(rv)}catch(e){console.error(e)}}rv(),rg.exports=jt;var L5=rg.exports,iv,bh=L5;iv=bh.createRoot,bh.hydrateRoot;/**
 * @remix-run/router v1.20.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Go(){return Go=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Go.apply(this,arguments)}var qn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(qn||(qn={}));const Sh="popstate";function M5(e){e===void 0&&(e={});function t(i,o){let{pathname:a="/",search:s="",hash:l=""}=Br(i.location.hash.substr(1));return!a.startsWith("/")&&!a.startsWith(".")&&(a="/"+a),Ou("",{pathname:a,search:s,hash:l},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(i,o){let a=i.document.querySelector("base"),s="";if(a&&a.getAttribute("href")){let l=i.location.href,u=l.indexOf("#");s=u===-1?l:l.slice(0,u)}return s+"#"+(typeof o=="string"?o:Ms(o))}function r(i,o){cp(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(o)+")")}return O5(t,n,r,e)}function _e(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function cp(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function _5(){return Math.random().toString(36).substr(2,8)}function jh(e,t){return{usr:e.state,key:e.key,idx:t}}function Ou(e,t,n,r){return n===void 0&&(n=null),Go({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Br(t):t,{state:n,key:t&&t.key||r||_5()})}function Ms(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Br(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function O5(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,a=i.history,s=qn.Pop,l=null,u=d();u==null&&(u=0,a.replaceState(Go({},a.state,{idx:u}),""));function d(){return(a.state||{idx:null}).idx}function p(){s=qn.Pop;let b=d(),g=b==null?null:b-u;u=b,l&&l({action:s,location:y.location,delta:g})}function f(b,g){s=qn.Push;let h=Ou(y.location,b,g);n&&n(h,b),u=d()+1;let m=jh(h,u),w=y.createHref(h);try{a.pushState(m,"",w)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;i.location.assign(w)}o&&l&&l({action:s,location:y.location,delta:1})}function v(b,g){s=qn.Replace;let h=Ou(y.location,b,g);n&&n(h,b),u=d();let m=jh(h,u),w=y.createHref(h);a.replaceState(m,"",w),o&&l&&l({action:s,location:y.location,delta:0})}function x(b){let g=i.location.origin!=="null"?i.location.origin:i.location.href,h=typeof b=="string"?b:Ms(b);return h=h.replace(/ $/,"%20"),_e(g,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,g)}let y={get action(){return s},get location(){return e(i,a)},listen(b){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Sh,p),l=b,()=>{i.removeEventListener(Sh,p),l=null}},createHref(b){return t(i,b)},createURL:x,encodeLocation(b){let g=x(b);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:f,replace:v,go(b){return a.go(b)}};return y}var Th;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Th||(Th={}));function I5(e,t,n){return n===void 0&&(n="/"),R5(e,t,n,!1)}function R5(e,t,n,r){let i=typeof t=="string"?Br(t):t,o=up(i.pathname||"/",n);if(o==null)return null;let a=ov(e);V5(a);let s=null;for(let l=0;s==null&&l<a.length;++l){let u=Y5(o);s=q5(a[l],u,r)}return s}function ov(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,a,s)=>{let l={relativePath:s===void 0?o.path||"":s,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};l.relativePath.startsWith("/")&&(_e(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=nr([r,l.relativePath]),d=n.concat(l);o.children&&o.children.length>0&&(_e(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),ov(o.children,t,d,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:U5(u,o.index),routesMeta:d})};return e.forEach((o,a)=>{var s;if(o.path===""||!((s=o.path)!=null&&s.includes("?")))i(o,a);else for(let l of av(o.path))i(o,a,l)}),t}function av(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let a=av(r.join("/")),s=[];return s.push(...a.map(l=>l===""?o:[o,l].join("/"))),i&&s.push(...a),s.map(l=>e.startsWith("/")&&l===""?"/":l)}function V5(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:W5(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const D5=/^:[\w-]+$/,N5=3,B5=2,F5=1,$5=10,H5=-2,Ch=e=>e==="*";function U5(e,t){let n=e.split("/"),r=n.length;return n.some(Ch)&&(r+=H5),t&&(r+=B5),n.filter(i=>!Ch(i)).reduce((i,o)=>i+(D5.test(o)?N5:o===""?F5:$5),r)}function W5(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function q5(e,t,n){let{routesMeta:r}=e,i={},o="/",a=[];for(let s=0;s<r.length;++s){let l=r[s],u=s===r.length-1,d=o==="/"?t:t.slice(o.length)||"/",p=Ph({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},d),f=l.route;if(!p&&u&&n&&!r[r.length-1].route.index&&(p=Ph({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},d)),!p)return null;Object.assign(i,p.params),a.push({params:i,pathname:nr([o,p.pathname]),pathnameBase:Z5(nr([o,p.pathnameBase])),route:f}),p.pathnameBase!=="/"&&(o=nr([o,p.pathnameBase]))}return a}function Ph(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=G5(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce((u,d,p)=>{let{paramName:f,isOptional:v}=d;if(f==="*"){let y=s[p]||"";a=o.slice(0,o.length-y.length).replace(/(.)\/+$/,"$1")}const x=s[p];return v&&!x?u[f]=void 0:u[f]=(x||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:a,pattern:e}}function G5(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),cp(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,s,l)=>(r.push({paramName:s,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function Y5(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return cp(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function up(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function K5(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Br(e):e;return{pathname:n?n.startsWith("/")?n:X5(n,t):t,search:J5(r),hash:e3(i)}}function X5(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function pc(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Q5(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function sv(e,t){let n=Q5(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function lv(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Br(e):(i=Go({},e),_e(!i.pathname||!i.pathname.includes("?"),pc("?","pathname","search",i)),_e(!i.pathname||!i.pathname.includes("#"),pc("#","pathname","hash",i)),_e(!i.search||!i.search.includes("#"),pc("#","search","hash",i)));let o=e===""||i.pathname==="",a=o?"/":i.pathname,s;if(a==null)s=n;else{let p=t.length-1;if(!r&&a.startsWith("..")){let f=a.split("/");for(;f[0]==="..";)f.shift(),p-=1;i.pathname=f.join("/")}s=p>=0?t[p]:"/"}let l=K5(i,s),u=a&&a!=="/"&&a.endsWith("/"),d=(o||a===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||d)&&(l.pathname+="/"),l}const nr=e=>e.join("/").replace(/\/\/+/g,"/"),Z5=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),J5=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,e3=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function t3(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const cv=["post","put","patch","delete"];new Set(cv);const n3=["get",...cv];new Set(n3);/**
 * React Router v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Yo(){return Yo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Yo.apply(this,arguments)}const dp=j.createContext(null),r3=j.createContext(null),Fr=j.createContext(null),gl=j.createContext(null),$r=j.createContext({outlet:null,matches:[],isDataRoute:!1}),uv=j.createContext(null);function i3(e,t){let{relative:n}=t===void 0?{}:t;aa()||_e(!1);let{basename:r,navigator:i}=j.useContext(Fr),{hash:o,pathname:a,search:s}=pv(e,{relative:n}),l=a;return r!=="/"&&(l=a==="/"?r:nr([r,a])),i.createHref({pathname:l,search:s,hash:o})}function aa(){return j.useContext(gl)!=null}function dr(){return aa()||_e(!1),j.useContext(gl).location}function dv(e){j.useContext(Fr).static||j.useLayoutEffect(e)}function vl(){let{isDataRoute:e}=j.useContext($r);return e?v3():o3()}function o3(){aa()||_e(!1);let e=j.useContext(dp),{basename:t,future:n,navigator:r}=j.useContext(Fr),{matches:i}=j.useContext($r),{pathname:o}=dr(),a=JSON.stringify(sv(i,n.v7_relativeSplatPath)),s=j.useRef(!1);return dv(()=>{s.current=!0}),j.useCallback(function(u,d){if(d===void 0&&(d={}),!s.current)return;if(typeof u=="number"){r.go(u);return}let p=lv(u,JSON.parse(a),o,d.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:nr([t,p.pathname])),(d.replace?r.replace:r.push)(p,d.state,d)},[t,r,a,o,e])}function pv(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=j.useContext(Fr),{matches:i}=j.useContext($r),{pathname:o}=dr(),a=JSON.stringify(sv(i,r.v7_relativeSplatPath));return j.useMemo(()=>lv(e,JSON.parse(a),o,n==="path"),[e,a,o,n])}function a3(e,t){return s3(e,t)}function s3(e,t,n,r){aa()||_e(!1);let{navigator:i}=j.useContext(Fr),{matches:o}=j.useContext($r),a=o[o.length-1],s=a?a.params:{};a&&a.pathname;let l=a?a.pathnameBase:"/";a&&a.route;let u=dr(),d;if(t){var p;let b=typeof t=="string"?Br(t):t;l==="/"||(p=b.pathname)!=null&&p.startsWith(l)||_e(!1),d=b}else d=u;let f=d.pathname||"/",v=f;if(l!=="/"){let b=l.replace(/^\//,"").split("/");v="/"+f.replace(/^\//,"").split("/").slice(b.length).join("/")}let x=I5(e,{pathname:v}),y=p3(x&&x.map(b=>Object.assign({},b,{params:Object.assign({},s,b.params),pathname:nr([l,i.encodeLocation?i.encodeLocation(b.pathname).pathname:b.pathname]),pathnameBase:b.pathnameBase==="/"?l:nr([l,i.encodeLocation?i.encodeLocation(b.pathnameBase).pathname:b.pathnameBase])})),o,n,r);return t&&y?j.createElement(gl.Provider,{value:{location:Yo({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:qn.Pop}},y):y}function l3(){let e=g3(),t=t3(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},t),n?j.createElement("pre",{style:i},n):null,null)}const c3=j.createElement(l3,null);class u3 extends j.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?j.createElement($r.Provider,{value:this.props.routeContext},j.createElement(uv.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function d3(e){let{routeContext:t,match:n,children:r}=e,i=j.useContext(dp);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),j.createElement($r.Provider,{value:t},r)}function p3(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if(!n)return null;if(n.errors)e=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let a=e,s=(i=n)==null?void 0:i.errors;if(s!=null){let d=a.findIndex(p=>p.route.id&&(s==null?void 0:s[p.route.id])!==void 0);d>=0||_e(!1),a=a.slice(0,Math.min(a.length,d+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<a.length;d++){let p=a[d];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(u=d),p.route.id){let{loaderData:f,errors:v}=n,x=p.route.loader&&f[p.route.id]===void 0&&(!v||v[p.route.id]===void 0);if(p.route.lazy||x){l=!0,u>=0?a=a.slice(0,u+1):a=[a[0]];break}}}return a.reduceRight((d,p,f)=>{let v,x=!1,y=null,b=null;n&&(v=s&&p.route.id?s[p.route.id]:void 0,y=p.route.errorElement||c3,l&&(u<0&&f===0?(x=!0,b=null):u===f&&(x=!0,b=p.route.hydrateFallbackElement||null)));let g=t.concat(a.slice(0,f+1)),h=()=>{let m;return v?m=y:x?m=b:p.route.Component?m=j.createElement(p.route.Component,null):p.route.element?m=p.route.element:m=d,j.createElement(d3,{match:p,routeContext:{outlet:d,matches:g,isDataRoute:n!=null},children:m})};return n&&(p.route.ErrorBoundary||p.route.errorElement||f===0)?j.createElement(u3,{location:n.location,revalidation:n.revalidation,component:y,error:v,children:h(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):h()},null)}var fv=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(fv||{}),_s=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(_s||{});function f3(e){let t=j.useContext(dp);return t||_e(!1),t}function h3(e){let t=j.useContext(r3);return t||_e(!1),t}function m3(e){let t=j.useContext($r);return t||_e(!1),t}function hv(e){let t=m3(),n=t.matches[t.matches.length-1];return n.route.id||_e(!1),n.route.id}function g3(){var e;let t=j.useContext(uv),n=h3(_s.UseRouteError),r=hv(_s.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function v3(){let{router:e}=f3(fv.UseNavigateStable),t=hv(_s.UseNavigateStable),n=j.useRef(!1);return dv(()=>{n.current=!0}),j.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Yo({fromRouteId:t},o)))},[e,t])}function xr(e){_e(!1)}function x3(e){let{basename:t="/",children:n=null,location:r,navigationType:i=qn.Pop,navigator:o,static:a=!1,future:s}=e;aa()&&_e(!1);let l=t.replace(/^\/*/,"/"),u=j.useMemo(()=>({basename:l,navigator:o,static:a,future:Yo({v7_relativeSplatPath:!1},s)}),[l,s,o,a]);typeof r=="string"&&(r=Br(r));let{pathname:d="/",search:p="",hash:f="",state:v=null,key:x="default"}=r,y=j.useMemo(()=>{let b=up(d,l);return b==null?null:{location:{pathname:b,search:p,hash:f,state:v,key:x},navigationType:i}},[l,d,p,f,v,x,i]);return y==null?null:j.createElement(Fr.Provider,{value:u},j.createElement(gl.Provider,{children:n,value:y}))}function y3(e){let{children:t,location:n}=e;return a3(Iu(t),n)}new Promise(()=>{});function Iu(e,t){t===void 0&&(t=[]);let n=[];return j.Children.forEach(e,(r,i)=>{if(!j.isValidElement(r))return;let o=[...t,i];if(r.type===j.Fragment){n.push.apply(n,Iu(r.props.children,o));return}r.type!==xr&&_e(!1),!r.props.index||!r.props.children||_e(!1);let a={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=Iu(r.props.children,o)),n.push(a)}),n}/**
 * React Router DOM v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ru(){return Ru=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ru.apply(this,arguments)}function w3(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function b3(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function S3(e,t){return e.button===0&&(!t||t==="_self")&&!b3(e)}const j3=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],T3="6";try{window.__reactRouterVersion=T3}catch{}const C3="startTransition",Eh=w2[C3];function P3(e){let{basename:t,children:n,future:r,window:i}=e,o=j.useRef();o.current==null&&(o.current=M5({window:i,v5Compat:!0}));let a=o.current,[s,l]=j.useState({action:a.action,location:a.location}),{v7_startTransition:u}=r||{},d=j.useCallback(p=>{u&&Eh?Eh(()=>l(p)):l(p)},[l,u]);return j.useLayoutEffect(()=>a.listen(d),[a,d]),j.createElement(x3,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:a,future:r})}const E3=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",k3=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,mv=j.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:a,state:s,target:l,to:u,preventScrollReset:d,viewTransition:p}=t,f=w3(t,j3),{basename:v}=j.useContext(Fr),x,y=!1;if(typeof u=="string"&&k3.test(u)&&(x=u,E3))try{let m=new URL(window.location.href),w=u.startsWith("//")?new URL(m.protocol+u):new URL(u),S=up(w.pathname,v);w.origin===m.origin&&S!=null?u=S+w.search+w.hash:y=!0}catch{}let b=i3(u,{relative:i}),g=z3(u,{replace:a,state:s,target:l,preventScrollReset:d,relative:i,viewTransition:p});function h(m){r&&r(m),m.defaultPrevented||g(m)}return j.createElement("a",Ru({},f,{href:x||b,onClick:y||o?r:h,ref:n,target:l}))});var kh;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(kh||(kh={}));var zh;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(zh||(zh={}));function z3(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:a,viewTransition:s}=t===void 0?{}:t,l=vl(),u=dr(),d=pv(e,{relative:a});return j.useCallback(p=>{if(S3(p,n)){p.preventDefault();let f=r!==void 0?r:Ms(u)===Ms(d);l(e,{replace:f,state:i,preventScrollReset:o,relative:a,viewTransition:s})}},[u,l,d,r,i,n,e,o,a,s])}function A3(e){if(typeof Proxy>"u")return e;const t=new Map,n=(...r)=>e(...r);return new Proxy(n,{get:(r,i)=>i==="create"?e:(t.has(i)||t.set(i,e(i)),t.get(i))})}function xl(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}const Vu=e=>Array.isArray(e);function gv(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}function Ko(e){return typeof e=="string"||Array.isArray(e)}function Ah(e){const t=[{},{}];return e==null||e.values.forEach((n,r)=>{t[0][r]=n.get(),t[1][r]=n.getVelocity()}),t}function pp(e,t,n,r){if(typeof t=="function"){const[i,o]=Ah(r);t=t(n!==void 0?n:e.custom,i,o)}if(typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"){const[i,o]=Ah(r);t=t(n!==void 0?n:e.custom,i,o)}return t}function yl(e,t,n){const r=e.getProps();return pp(r,t,n!==void 0?n:r.custom,e)}const fp=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],hp=["initial",...fp],sa=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Hr=new Set(sa),wn=e=>e*1e3,bn=e=>e/1e3,L3={type:"spring",stiffness:500,damping:25,restSpeed:10},M3=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),_3={type:"keyframes",duration:.8},O3={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},I3=(e,{keyframes:t})=>t.length>2?_3:Hr.has(e)?e.startsWith("scale")?M3(t[1]):L3:O3;function mp(e,t){return e?e[t]||e.default||e:void 0}const R3={skipAnimations:!1,useManualTiming:!1},V3=e=>e!==null;function wl(e,{repeat:t,repeatType:n="loop"},r){const i=e.filter(V3),o=t&&n!=="loop"&&t%2===1?0:i.length-1;return!o||r===void 0?i[o]:r}const qe=e=>e;function D3(e){let t=new Set,n=new Set,r=!1,i=!1;const o=new WeakSet;let a={delta:0,timestamp:0,isProcessing:!1};function s(u){o.has(u)&&(l.schedule(u),e()),u(a)}const l={schedule:(u,d=!1,p=!1)=>{const v=p&&r?t:n;return d&&o.add(u),v.has(u)||v.add(u),u},cancel:u=>{n.delete(u),o.delete(u)},process:u=>{if(a=u,r){i=!0;return}r=!0,[t,n]=[n,t],n.clear(),t.forEach(s),r=!1,i&&(i=!1,l.process(u))}};return l}const za=["read","resolveKeyframes","update","preRender","render","postRender"],N3=40;function vv(e,t){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},o=()=>n=!0,a=za.reduce((g,h)=>(g[h]=D3(o),g),{}),{read:s,resolveKeyframes:l,update:u,preRender:d,render:p,postRender:f}=a,v=()=>{const g=performance.now();n=!1,i.delta=r?1e3/60:Math.max(Math.min(g-i.timestamp,N3),1),i.timestamp=g,i.isProcessing=!0,s.process(i),l.process(i),u.process(i),d.process(i),p.process(i),f.process(i),i.isProcessing=!1,n&&t&&(r=!1,e(v))},x=()=>{n=!0,r=!0,i.isProcessing||e(v)};return{schedule:za.reduce((g,h)=>{const m=a[h];return g[h]=(w,S=!1,T=!1)=>(n||x(),m.schedule(w,S,T)),g},{}),cancel:g=>{for(let h=0;h<za.length;h++)a[za[h]].cancel(g)},state:i,steps:a}}const{schedule:oe,cancel:Zt,state:Re,steps:fc}=vv(typeof requestAnimationFrame<"u"?requestAnimationFrame:qe,!0),xv=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,B3=1e-7,F3=12;function $3(e,t,n,r,i){let o,a,s=0;do a=t+(n-t)/2,o=xv(a,r,i)-e,o>0?n=a:t=a;while(Math.abs(o)>B3&&++s<F3);return a}function la(e,t,n,r){if(e===t&&n===r)return qe;const i=o=>$3(o,0,1,e,n);return o=>o===0||o===1?o:xv(i(o),t,r)}const yv=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,wv=e=>t=>1-e(1-t),bv=la(.33,1.53,.69,.99),gp=wv(bv),Sv=yv(gp),jv=e=>(e*=2)<1?.5*gp(e):.5*(2-Math.pow(2,-10*(e-1))),vp=e=>1-Math.sin(Math.acos(e)),Tv=wv(vp),Cv=yv(vp),Pv=e=>/^0[^.\s]+$/u.test(e);function H3(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||Pv(e):!0}let U3=qe,Du=qe;const Ev=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),kv=e=>t=>typeof t=="string"&&t.startsWith(e),zv=kv("--"),W3=kv("var(--"),xp=e=>W3(e)?q3.test(e.split("/*")[0].trim()):!1,q3=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,G3=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function Y3(e){const t=G3.exec(e);if(!t)return[,];const[,n,r,i]=t;return[`--${n??r}`,i]}function Av(e,t,n=1){const[r,i]=Y3(e);if(!r)return;const o=window.getComputedStyle(t).getPropertyValue(r);if(o){const a=o.trim();return Ev(a)?parseFloat(a):a}return xp(i)?Av(i,t,n+1):i}const ar=(e,t,n)=>n>t?t:n<e?e:n,Bi={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},Xo={...Bi,transform:e=>ar(0,1,e)},Aa={...Bi,default:1},ca=e=>({test:t=>typeof t=="string"&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),Rn=ca("deg"),ln=ca("%"),q=ca("px"),K3=ca("vh"),X3=ca("vw"),Lh={...ln,parse:e=>ln.parse(e)/100,transform:e=>ln.transform(e*100)},Q3=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),Mh=e=>e===Bi||e===q,_h=(e,t)=>parseFloat(e.split(", ")[t]),Oh=(e,t)=>(n,{transform:r})=>{if(r==="none"||!r)return 0;const i=r.match(/^matrix3d\((.+)\)$/u);if(i)return _h(i[1],t);{const o=r.match(/^matrix\((.+)\)$/u);return o?_h(o[1],e):0}},Z3=new Set(["x","y","z"]),J3=sa.filter(e=>!Z3.has(e));function eb(e){const t=[];return J3.forEach(n=>{const r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t}const ki={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:Oh(4,13),y:Oh(5,14)};ki.translateX=ki.x;ki.translateY=ki.y;const Lv=e=>t=>t.test(e),tb={test:e=>e==="auto",parse:e=>e},Mv=[Bi,q,ln,Rn,X3,K3,tb],Ih=e=>Mv.find(Lv(e)),kr=new Set;let Nu=!1,Bu=!1;function _v(){if(Bu){const e=Array.from(kr).filter(r=>r.needsMeasurement),t=new Set(e.map(r=>r.element)),n=new Map;t.forEach(r=>{const i=eb(r);i.length&&(n.set(r,i),r.render())}),e.forEach(r=>r.measureInitialState()),t.forEach(r=>{r.render();const i=n.get(r);i&&i.forEach(([o,a])=>{var s;(s=r.getValue(o))===null||s===void 0||s.set(a)})}),e.forEach(r=>r.measureEndState()),e.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}Bu=!1,Nu=!1,kr.forEach(e=>e.complete()),kr.clear()}function Ov(){kr.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(Bu=!0)})}function nb(){Ov(),_v()}class yp{constructor(t,n,r,i,o,a=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...t],this.onComplete=n,this.name=r,this.motionValue=i,this.element=o,this.isAsync=a}scheduleResolve(){this.isScheduled=!0,this.isAsync?(kr.add(this),Nu||(Nu=!0,oe.read(Ov),oe.resolveKeyframes(_v))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:n,element:r,motionValue:i}=this;for(let o=0;o<t.length;o++)if(t[o]===null)if(o===0){const a=i==null?void 0:i.get(),s=t[t.length-1];if(a!==void 0)t[0]=a;else if(r&&n){const l=r.readValue(n,s);l!=null&&(t[0]=l)}t[0]===void 0&&(t[0]=s),i&&a===void 0&&i.set(t[0])}else t[o]=t[o-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),kr.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,kr.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const jo=e=>Math.round(e*1e5)/1e5,wp=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function rb(e){return e==null}const ib=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,bp=(e,t)=>n=>!!(typeof n=="string"&&ib.test(n)&&n.startsWith(e)||t&&!rb(n)&&Object.prototype.hasOwnProperty.call(n,t)),Iv=(e,t,n)=>r=>{if(typeof r!="string")return r;const[i,o,a,s]=r.match(wp);return{[e]:parseFloat(i),[t]:parseFloat(o),[n]:parseFloat(a),alpha:s!==void 0?parseFloat(s):1}},ob=e=>ar(0,255,e),hc={...Bi,transform:e=>Math.round(ob(e))},Tr={test:bp("rgb","red"),parse:Iv("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+hc.transform(e)+", "+hc.transform(t)+", "+hc.transform(n)+", "+jo(Xo.transform(r))+")"};function ab(e){let t="",n="",r="",i="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}const Fu={test:bp("#"),parse:ab,transform:Tr.transform},ai={test:bp("hsl","hue"),parse:Iv("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+ln.transform(jo(t))+", "+ln.transform(jo(n))+", "+jo(Xo.transform(r))+")"},Xe={test:e=>Tr.test(e)||Fu.test(e)||ai.test(e),parse:e=>Tr.test(e)?Tr.parse(e):ai.test(e)?ai.parse(e):Fu.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?Tr.transform(e):ai.transform(e)},sb=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function lb(e){var t,n;return isNaN(e)&&typeof e=="string"&&(((t=e.match(wp))===null||t===void 0?void 0:t.length)||0)+(((n=e.match(sb))===null||n===void 0?void 0:n.length)||0)>0}const Rv="number",Vv="color",cb="var",ub="var(",Rh="${}",db=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Qo(e){const t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[];let o=0;const s=t.replace(db,l=>(Xe.test(l)?(r.color.push(o),i.push(Vv),n.push(Xe.parse(l))):l.startsWith(ub)?(r.var.push(o),i.push(cb),n.push(l)):(r.number.push(o),i.push(Rv),n.push(parseFloat(l))),++o,Rh)).split(Rh);return{values:n,split:s,indexes:r,types:i}}function Dv(e){return Qo(e).values}function Nv(e){const{split:t,types:n}=Qo(e),r=t.length;return i=>{let o="";for(let a=0;a<r;a++)if(o+=t[a],i[a]!==void 0){const s=n[a];s===Rv?o+=jo(i[a]):s===Vv?o+=Xe.transform(i[a]):o+=i[a]}return o}}const pb=e=>typeof e=="number"?0:e;function fb(e){const t=Dv(e);return Nv(e)(t.map(pb))}const sr={test:lb,parse:Dv,createTransformer:Nv,getAnimatableNone:fb},hb=new Set(["brightness","contrast","saturate","opacity"]);function mb(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(wp)||[];if(!r)return e;const i=n.replace(r,"");let o=hb.has(t)?1:0;return r!==n&&(o*=100),t+"("+o+i+")"}const gb=/\b([a-z-]*)\(.*?\)/gu,$u={...sr,getAnimatableNone:e=>{const t=e.match(gb);return t?t.map(mb).join(" "):e}},vb={borderWidth:q,borderTopWidth:q,borderRightWidth:q,borderBottomWidth:q,borderLeftWidth:q,borderRadius:q,radius:q,borderTopLeftRadius:q,borderTopRightRadius:q,borderBottomRightRadius:q,borderBottomLeftRadius:q,width:q,maxWidth:q,height:q,maxHeight:q,top:q,right:q,bottom:q,left:q,padding:q,paddingTop:q,paddingRight:q,paddingBottom:q,paddingLeft:q,margin:q,marginTop:q,marginRight:q,marginBottom:q,marginLeft:q,backgroundPositionX:q,backgroundPositionY:q},xb={rotate:Rn,rotateX:Rn,rotateY:Rn,rotateZ:Rn,scale:Aa,scaleX:Aa,scaleY:Aa,scaleZ:Aa,skew:Rn,skewX:Rn,skewY:Rn,distance:q,translateX:q,translateY:q,translateZ:q,x:q,y:q,z:q,perspective:q,transformPerspective:q,opacity:Xo,originX:Lh,originY:Lh,originZ:q},Vh={...Bi,transform:Math.round},Sp={...vb,...xb,zIndex:Vh,size:q,fillOpacity:Xo,strokeOpacity:Xo,numOctaves:Vh},yb={...Sp,color:Xe,backgroundColor:Xe,outlineColor:Xe,fill:Xe,stroke:Xe,borderColor:Xe,borderTopColor:Xe,borderRightColor:Xe,borderBottomColor:Xe,borderLeftColor:Xe,filter:$u,WebkitFilter:$u},jp=e=>yb[e];function Bv(e,t){let n=jp(e);return n!==$u&&(n=sr),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const wb=new Set(["auto","none","0"]);function bb(e,t,n){let r=0,i;for(;r<e.length&&!i;){const o=e[r];typeof o=="string"&&!wb.has(o)&&Qo(o).values.length&&(i=e[r]),r++}if(i&&n)for(const o of t)e[o]=Bv(n,i)}class Fv extends yp{constructor(t,n,r,i,o){super(t,n,r,i,o,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:n,name:r}=this;if(!n||!n.current)return;super.readKeyframes();for(let l=0;l<t.length;l++){let u=t[l];if(typeof u=="string"&&(u=u.trim(),xp(u))){const d=Av(u,n.current);d!==void 0&&(t[l]=d),l===t.length-1&&(this.finalKeyframe=u)}}if(this.resolveNoneKeyframes(),!Q3.has(r)||t.length!==2)return;const[i,o]=t,a=Ih(i),s=Ih(o);if(a!==s)if(Mh(a)&&Mh(s))for(let l=0;l<t.length;l++){const u=t[l];typeof u=="string"&&(t[l]=parseFloat(u))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:n}=this,r=[];for(let i=0;i<t.length;i++)H3(t[i])&&r.push(i);r.length&&bb(t,r,n)}measureInitialState(){const{element:t,unresolvedKeyframes:n,name:r}=this;if(!t||!t.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=ki[r](t.measureViewportBox(),window.getComputedStyle(t.current)),n[0]=this.measuredOrigin;const i=n[n.length-1];i!==void 0&&t.getValue(r,i).jump(i,!1)}measureEndState(){var t;const{element:n,name:r,unresolvedKeyframes:i}=this;if(!n||!n.current)return;const o=n.getValue(r);o&&o.jump(this.measuredOrigin,!1);const a=i.length-1,s=i[a];i[a]=ki[r](n.measureViewportBox(),window.getComputedStyle(n.current)),s!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=s),!((t=this.removedTransforms)===null||t===void 0)&&t.length&&this.removedTransforms.forEach(([l,u])=>{n.getValue(l).set(u)}),this.resolveNoneKeyframes()}}function Tp(e){return typeof e=="function"}let Xa;function Sb(){Xa=void 0}const cn={now:()=>(Xa===void 0&&cn.set(Re.isProcessing||R3.useManualTiming?Re.timestamp:performance.now()),Xa),set:e=>{Xa=e,queueMicrotask(Sb)}},Dh=(e,t)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(sr.test(e)||e==="0")&&!e.startsWith("url("));function jb(e){const t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function Tb(e,t,n,r){const i=e[0];if(i===null)return!1;if(t==="display"||t==="visibility")return!0;const o=e[e.length-1],a=Dh(i,t),s=Dh(o,t);return!a||!s?!1:jb(e)||(n==="spring"||Tp(n))&&r}const Cb=40;class $v{constructor({autoplay:t=!0,delay:n=0,type:r="keyframes",repeat:i=0,repeatDelay:o=0,repeatType:a="loop",...s}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=cn.now(),this.options={autoplay:t,delay:n,type:r,repeat:i,repeatDelay:o,repeatType:a,...s},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>Cb?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&nb(),this._resolved}onKeyframesResolved(t,n){this.resolvedAt=cn.now(),this.hasAttemptedResolve=!0;const{name:r,type:i,velocity:o,delay:a,onComplete:s,onUpdate:l,isGenerator:u}=this.options;if(!u&&!Tb(t,r,i,o))if(a)this.options.duration=0;else{l==null||l(wl(t,this.options,n)),s==null||s(),this.resolveFinishedPromise();return}const d=this.initPlayback(t,n);d!==!1&&(this._resolved={keyframes:t,finalKeyframe:n,...d},this.onPostResolved())}onPostResolved(){}then(t,n){return this.currentFinishedPromise.then(t,n)}updateFinishedPromise(){this.currentFinishedPromise=new Promise(t=>{this.resolveFinishedPromise=t})}}function Cp(e,t){return t?e*(1e3/t):0}const Pb=5;function Hv(e,t,n){const r=Math.max(t-Pb,0);return Cp(n-e(r),t-r)}const mc=.001,Eb=.01,kb=10,zb=.05,Ab=1;function Lb({duration:e=800,bounce:t=.25,velocity:n=0,mass:r=1}){let i,o,a=1-t;a=ar(zb,Ab,a),e=ar(Eb,kb,bn(e)),a<1?(i=u=>{const d=u*a,p=d*e,f=d-n,v=Hu(u,a),x=Math.exp(-p);return mc-f/v*x},o=u=>{const p=u*a*e,f=p*n+n,v=Math.pow(a,2)*Math.pow(u,2)*e,x=Math.exp(-p),y=Hu(Math.pow(u,2),a);return(-i(u)+mc>0?-1:1)*((f-v)*x)/y}):(i=u=>{const d=Math.exp(-u*e),p=(u-n)*e+1;return-mc+d*p},o=u=>{const d=Math.exp(-u*e),p=(n-u)*(e*e);return d*p});const s=5/e,l=_b(i,o,s);if(e=wn(e),isNaN(l))return{stiffness:100,damping:10,duration:e};{const u=Math.pow(l,2)*r;return{stiffness:u,damping:a*2*Math.sqrt(r*u),duration:e}}}const Mb=12;function _b(e,t,n){let r=n;for(let i=1;i<Mb;i++)r=r-e(r)/t(r);return r}function Hu(e,t){return e*Math.sqrt(1-t*t)}const Ob=["duration","bounce"],Ib=["stiffness","damping","mass"];function Nh(e,t){return t.some(n=>e[n]!==void 0)}function Rb(e){let t={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...e};if(!Nh(e,Ib)&&Nh(e,Ob)){const n=Lb(e);t={...t,...n,mass:1},t.isResolvedFromDuration=!0}return t}function Uv({keyframes:e,restDelta:t,restSpeed:n,...r}){const i=e[0],o=e[e.length-1],a={done:!1,value:i},{stiffness:s,damping:l,mass:u,duration:d,velocity:p,isResolvedFromDuration:f}=Rb({...r,velocity:-bn(r.velocity||0)}),v=p||0,x=l/(2*Math.sqrt(s*u)),y=o-i,b=bn(Math.sqrt(s/u)),g=Math.abs(y)<5;n||(n=g?.01:2),t||(t=g?.005:.5);let h;if(x<1){const m=Hu(b,x);h=w=>{const S=Math.exp(-x*b*w);return o-S*((v+x*b*y)/m*Math.sin(m*w)+y*Math.cos(m*w))}}else if(x===1)h=m=>o-Math.exp(-b*m)*(y+(v+b*y)*m);else{const m=b*Math.sqrt(x*x-1);h=w=>{const S=Math.exp(-x*b*w),T=Math.min(m*w,300);return o-S*((v+x*b*y)*Math.sinh(T)+m*y*Math.cosh(T))/m}}return{calculatedDuration:f&&d||null,next:m=>{const w=h(m);if(f)a.done=m>=d;else{let S=0;x<1&&(S=m===0?wn(v):Hv(h,m,w));const T=Math.abs(S)<=n,P=Math.abs(o-w)<=t;a.done=T&&P}return a.value=a.done?o:w,a}}}function Bh({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:o=500,modifyTarget:a,min:s,max:l,restDelta:u=.5,restSpeed:d}){const p=e[0],f={done:!1,value:p},v=E=>s!==void 0&&E<s||l!==void 0&&E>l,x=E=>s===void 0?l:l===void 0||Math.abs(s-E)<Math.abs(l-E)?s:l;let y=n*t;const b=p+y,g=a===void 0?b:a(b);g!==b&&(y=g-p);const h=E=>-y*Math.exp(-E/r),m=E=>g+h(E),w=E=>{const z=h(E),k=m(E);f.done=Math.abs(z)<=u,f.value=f.done?g:k};let S,T;const P=E=>{v(f.value)&&(S=E,T=Uv({keyframes:[f.value,x(f.value)],velocity:Hv(m,E,f.value),damping:i,stiffness:o,restDelta:u,restSpeed:d}))};return P(0),{calculatedDuration:null,next:E=>{let z=!1;return!T&&S===void 0&&(z=!0,w(E),P(E)),S!==void 0&&E>=S?T.next(E-S):(!z&&w(E),f)}}}const Vb=la(.42,0,1,1),Db=la(0,0,.58,1),Wv=la(.42,0,.58,1),Nb=e=>Array.isArray(e)&&typeof e[0]!="number",Pp=e=>Array.isArray(e)&&typeof e[0]=="number",Fh={linear:qe,easeIn:Vb,easeInOut:Wv,easeOut:Db,circIn:vp,circInOut:Cv,circOut:Tv,backIn:gp,backInOut:Sv,backOut:bv,anticipate:jv},$h=e=>{if(Pp(e)){Du(e.length===4);const[t,n,r,i]=e;return la(t,n,r,i)}else if(typeof e=="string")return Du(Fh[e]!==void 0),Fh[e];return e},Bb=(e,t)=>n=>t(e(n)),Sn=(...e)=>e.reduce(Bb),Rr=(e,t,n)=>{const r=t-e;return r===0?1:(n-e)/r},be=(e,t,n)=>e+(t-e)*n;function gc(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function Fb({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,o=0,a=0;if(!t)i=o=a=n;else{const s=n<.5?n*(1+t):n+t-n*t,l=2*n-s;i=gc(l,s,e+1/3),o=gc(l,s,e),a=gc(l,s,e-1/3)}return{red:Math.round(i*255),green:Math.round(o*255),blue:Math.round(a*255),alpha:r}}function Os(e,t){return n=>n>0?t:e}const vc=(e,t,n)=>{const r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},$b=[Fu,Tr,ai],Hb=e=>$b.find(t=>t.test(e));function Hh(e){const t=Hb(e);if(!t)return!1;let n=t.parse(e);return t===ai&&(n=Fb(n)),n}const Uh=(e,t)=>{const n=Hh(e),r=Hh(t);if(!n||!r)return Os(e,t);const i={...n};return o=>(i.red=vc(n.red,r.red,o),i.green=vc(n.green,r.green,o),i.blue=vc(n.blue,r.blue,o),i.alpha=be(n.alpha,r.alpha,o),Tr.transform(i))},Uu=new Set(["none","hidden"]);function Ub(e,t){return Uu.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function Wb(e,t){return n=>be(e,t,n)}function Ep(e){return typeof e=="number"?Wb:typeof e=="string"?xp(e)?Os:Xe.test(e)?Uh:Yb:Array.isArray(e)?qv:typeof e=="object"?Xe.test(e)?Uh:qb:Os}function qv(e,t){const n=[...e],r=n.length,i=e.map((o,a)=>Ep(o)(o,t[a]));return o=>{for(let a=0;a<r;a++)n[a]=i[a](o);return n}}function qb(e,t){const n={...e,...t},r={};for(const i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=Ep(e[i])(e[i],t[i]));return i=>{for(const o in r)n[o]=r[o](i);return n}}function Gb(e,t){var n;const r=[],i={color:0,var:0,number:0};for(let o=0;o<t.values.length;o++){const a=t.types[o],s=e.indexes[a][i[a]],l=(n=e.values[s])!==null&&n!==void 0?n:0;r[o]=l,i[a]++}return r}const Yb=(e,t)=>{const n=sr.createTransformer(t),r=Qo(e),i=Qo(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?Uu.has(e)&&!i.values.length||Uu.has(t)&&!r.values.length?Ub(e,t):Sn(qv(Gb(r,i),i.values),n):Os(e,t)};function Gv(e,t,n){return typeof e=="number"&&typeof t=="number"&&typeof n=="number"?be(e,t,n):Ep(e)(e,t)}function Kb(e,t,n){const r=[],i=n||Gv,o=e.length-1;for(let a=0;a<o;a++){let s=i(e[a],e[a+1]);if(t){const l=Array.isArray(t)?t[a]||qe:t;s=Sn(l,s)}r.push(s)}return r}function kp(e,t,{clamp:n=!0,ease:r,mixer:i}={}){const o=e.length;if(Du(o===t.length),o===1)return()=>t[0];if(o===2&&e[0]===e[1])return()=>t[1];e[0]>e[o-1]&&(e=[...e].reverse(),t=[...t].reverse());const a=Kb(t,r,i),s=a.length,l=u=>{let d=0;if(s>1)for(;d<e.length-2&&!(u<e[d+1]);d++);const p=Rr(e[d],e[d+1],u);return a[d](p)};return n?u=>l(ar(e[0],e[o-1],u)):l}function Xb(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const i=Rr(0,t,r);e.push(be(n,1,i))}}function Yv(e){const t=[0];return Xb(t,e.length-1),t}function Qb(e,t){return e.map(n=>n*t)}function Zb(e,t){return e.map(()=>t||Wv).splice(0,e.length-1)}function Is({duration:e=300,keyframes:t,times:n,ease:r="easeInOut"}){const i=Nb(r)?r.map($h):$h(r),o={done:!1,value:t[0]},a=Qb(n&&n.length===t.length?n:Yv(t),e),s=kp(a,t,{ease:Array.isArray(i)?i:Zb(t,i)});return{calculatedDuration:e,next:l=>(o.value=s(l),o.done=l>=e,o)}}const Wh=2e4;function Jb(e){let t=0;const n=50;let r=e.next(t);for(;!r.done&&t<Wh;)t+=n,r=e.next(t);return t>=Wh?1/0:t}const eS=e=>{const t=({timestamp:n})=>e(n);return{start:()=>oe.update(t,!0),stop:()=>Zt(t),now:()=>Re.isProcessing?Re.timestamp:cn.now()}},tS={decay:Bh,inertia:Bh,tween:Is,keyframes:Is,spring:Uv},nS=e=>e/100;class zp extends $v{constructor(t){super(t),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:l}=this.options;l&&l()};const{name:n,motionValue:r,element:i,keyframes:o}=this.options,a=(i==null?void 0:i.KeyframeResolver)||yp,s=(l,u)=>this.onKeyframesResolved(l,u);this.resolver=new a(o,s,n,r,i),this.resolver.scheduleResolve()}initPlayback(t){const{type:n="keyframes",repeat:r=0,repeatDelay:i=0,repeatType:o,velocity:a=0}=this.options,s=Tp(n)?n:tS[n]||Is;let l,u;s!==Is&&typeof t[0]!="number"&&(l=Sn(nS,Gv(t[0],t[1])),t=[0,100]);const d=s({...this.options,keyframes:t});o==="mirror"&&(u=s({...this.options,keyframes:[...t].reverse(),velocity:-a})),d.calculatedDuration===null&&(d.calculatedDuration=Jb(d));const{calculatedDuration:p}=d,f=p+i,v=f*(r+1)-i;return{generator:d,mirroredGenerator:u,mapPercentToKeyframes:l,calculatedDuration:p,resolvedDuration:f,totalDuration:v}}onPostResolved(){const{autoplay:t=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!t?this.pause():this.state=this.pendingPlayState}tick(t,n=!1){const{resolved:r}=this;if(!r){const{keyframes:E}=this.options;return{done:!0,value:E[E.length-1]}}const{finalKeyframe:i,generator:o,mirroredGenerator:a,mapPercentToKeyframes:s,keyframes:l,calculatedDuration:u,totalDuration:d,resolvedDuration:p}=r;if(this.startTime===null)return o.next(0);const{delay:f,repeat:v,repeatType:x,repeatDelay:y,onUpdate:b}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-d/this.speed,this.startTime)),n?this.currentTime=t:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(t-this.startTime)*this.speed;const g=this.currentTime-f*(this.speed>=0?1:-1),h=this.speed>=0?g<0:g>d;this.currentTime=Math.max(g,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=d);let m=this.currentTime,w=o;if(v){const E=Math.min(this.currentTime,d)/p;let z=Math.floor(E),k=E%1;!k&&E>=1&&(k=1),k===1&&z--,z=Math.min(z,v+1),!!(z%2)&&(x==="reverse"?(k=1-k,y&&(k-=y/p)):x==="mirror"&&(w=a)),m=ar(0,1,k)*p}const S=h?{done:!1,value:l[0]}:w.next(m);s&&(S.value=s(S.value));let{done:T}=S;!h&&u!==null&&(T=this.speed>=0?this.currentTime>=d:this.currentTime<=0);const P=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&T);return P&&i!==void 0&&(S.value=wl(l,this.options,i)),b&&b(S.value),P&&this.finish(),S}get duration(){const{resolved:t}=this;return t?bn(t.calculatedDuration):0}get time(){return bn(this.currentTime)}set time(t){t=wn(t),this.currentTime=t,this.holdTime!==null||this.speed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.speed)}get speed(){return this.playbackSpeed}set speed(t){const n=this.playbackSpeed!==t;this.playbackSpeed=t,n&&(this.time=bn(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:t=eS,onPlay:n,startTime:r}=this.options;this.driver||(this.driver=t(o=>this.tick(o))),n&&n();const i=this.driver.now();this.holdTime!==null?this.startTime=i-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=i):this.startTime=r??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var t;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(t=this.currentTime)!==null&&t!==void 0?t:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:t}=this.options;t&&t()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}}const rS=new Set(["opacity","clipPath","filter","transform"]),iS=10,oS=(e,t)=>{let n="";const r=Math.max(Math.round(t/iS),2);for(let i=0;i<r;i++)n+=e(Rr(0,r-1,i))+", ";return`linear(${n.substring(0,n.length-2)})`};function Ap(e){let t;return()=>(t===void 0&&(t=e()),t)}const aS={linearEasing:void 0};function sS(e,t){const n=Ap(e);return()=>{var r;return(r=aS[t])!==null&&r!==void 0?r:n()}}const Rs=sS(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing");function Kv(e){return!!(typeof e=="function"&&Rs()||!e||typeof e=="string"&&(e in Wu||Rs())||Pp(e)||Array.isArray(e)&&e.every(Kv))}const uo=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,Wu={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:uo([0,.65,.55,1]),circOut:uo([.55,0,1,.45]),backIn:uo([.31,.01,.66,-.59]),backOut:uo([.33,1.53,.69,.99])};function Xv(e,t){if(e)return typeof e=="function"&&Rs()?oS(e,t):Pp(e)?uo(e):Array.isArray(e)?e.map(n=>Xv(n,t)||Wu.easeOut):Wu[e]}function lS(e,t,n,{delay:r=0,duration:i=300,repeat:o=0,repeatType:a="loop",ease:s,times:l}={}){const u={[t]:n};l&&(u.offset=l);const d=Xv(s,i);return Array.isArray(d)&&(u.easing=d),e.animate(u,{delay:r,duration:i,easing:Array.isArray(d)?"linear":d,fill:"both",iterations:o+1,direction:a==="reverse"?"alternate":"normal"})}function qh(e,t){e.timeline=t,e.onfinish=null}const cS=Ap(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),Vs=10,uS=2e4;function dS(e){return Tp(e.type)||e.type==="spring"||!Kv(e.ease)}function pS(e,t){const n=new zp({...t,keyframes:e,repeat:0,delay:0,isGenerator:!0});let r={done:!1,value:e[0]};const i=[];let o=0;for(;!r.done&&o<uS;)r=n.sample(o),i.push(r.value),o+=Vs;return{times:void 0,keyframes:i,duration:o-Vs,ease:"linear"}}const Qv={anticipate:jv,backInOut:Sv,circInOut:Cv};function fS(e){return e in Qv}class Gh extends $v{constructor(t){super(t);const{name:n,motionValue:r,element:i,keyframes:o}=this.options;this.resolver=new Fv(o,(a,s)=>this.onKeyframesResolved(a,s),n,r,i),this.resolver.scheduleResolve()}initPlayback(t,n){var r;let{duration:i=300,times:o,ease:a,type:s,motionValue:l,name:u,startTime:d}=this.options;if(!(!((r=l.owner)===null||r===void 0)&&r.current))return!1;if(typeof a=="string"&&Rs()&&fS(a)&&(a=Qv[a]),dS(this.options)){const{onComplete:f,onUpdate:v,motionValue:x,element:y,...b}=this.options,g=pS(t,b);t=g.keyframes,t.length===1&&(t[1]=t[0]),i=g.duration,o=g.times,a=g.ease,s="keyframes"}const p=lS(l.owner.current,u,t,{...this.options,duration:i,times:o,ease:a});return p.startTime=d??this.calcStartTime(),this.pendingTimeline?(qh(p,this.pendingTimeline),this.pendingTimeline=void 0):p.onfinish=()=>{const{onComplete:f}=this.options;l.set(wl(t,this.options,n)),f&&f(),this.cancel(),this.resolveFinishedPromise()},{animation:p,duration:i,times:o,type:s,ease:a,keyframes:t}}get duration(){const{resolved:t}=this;if(!t)return 0;const{duration:n}=t;return bn(n)}get time(){const{resolved:t}=this;if(!t)return 0;const{animation:n}=t;return bn(n.currentTime||0)}set time(t){const{resolved:n}=this;if(!n)return;const{animation:r}=n;r.currentTime=wn(t)}get speed(){const{resolved:t}=this;if(!t)return 1;const{animation:n}=t;return n.playbackRate}set speed(t){const{resolved:n}=this;if(!n)return;const{animation:r}=n;r.playbackRate=t}get state(){const{resolved:t}=this;if(!t)return"idle";const{animation:n}=t;return n.playState}get startTime(){const{resolved:t}=this;if(!t)return null;const{animation:n}=t;return n.startTime}attachTimeline(t){if(!this._resolved)this.pendingTimeline=t;else{const{resolved:n}=this;if(!n)return qe;const{animation:r}=n;qh(r,t)}return qe}play(){if(this.isStopped)return;const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.playState==="finished"&&this.updateFinishedPromise(),n.play()}pause(){const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:t}=this;if(!t)return;const{animation:n,keyframes:r,duration:i,type:o,ease:a,times:s}=t;if(n.playState==="idle"||n.playState==="finished")return;if(this.time){const{motionValue:u,onUpdate:d,onComplete:p,element:f,...v}=this.options,x=new zp({...v,keyframes:r,duration:i,type:o,ease:a,times:s,isGenerator:!0}),y=wn(this.time);u.setWithVelocity(x.sample(y-Vs).value,x.sample(y).value,Vs)}const{onStop:l}=this.options;l&&l(),this.cancel()}complete(){const{resolved:t}=this;t&&t.animation.finish()}cancel(){const{resolved:t}=this;t&&t.animation.cancel()}static supports(t){const{motionValue:n,name:r,repeatDelay:i,repeatType:o,damping:a,type:s}=t;return cS()&&r&&rS.has(r)&&n&&n.owner&&n.owner.current instanceof HTMLElement&&!n.owner.getProps().onUpdate&&!i&&o!=="mirror"&&a!==0&&s!=="inertia"}}const Zv=Ap(()=>window.ScrollTimeline!==void 0);class hS{constructor(t){this.stop=()=>this.runAll("stop"),this.animations=t.filter(Boolean)}then(t,n){return Promise.all(this.animations).then(t).catch(n)}getAll(t){return this.animations[0][t]}setAll(t,n){for(let r=0;r<this.animations.length;r++)this.animations[r][t]=n}attachTimeline(t,n){const r=this.animations.map(i=>Zv()&&i.attachTimeline?i.attachTimeline(t):n(i));return()=>{r.forEach((i,o)=>{i&&i(),this.animations[o].stop()})}}get time(){return this.getAll("time")}set time(t){this.setAll("time",t)}get speed(){return this.getAll("speed")}set speed(t){this.setAll("speed",t)}get startTime(){return this.getAll("startTime")}get duration(){let t=0;for(let n=0;n<this.animations.length;n++)t=Math.max(t,this.animations[n].duration);return t}runAll(t){this.animations.forEach(n=>n[t]())}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}function mS({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:i,repeat:o,repeatType:a,repeatDelay:s,from:l,elapsed:u,...d}){return!!Object.keys(d).length}const Lp=(e,t,n,r={},i,o)=>a=>{const s=mp(r,e)||{},l=s.delay||r.delay||0;let{elapsed:u=0}=r;u=u-wn(l);let d={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:t.getVelocity(),...s,delay:-u,onUpdate:f=>{t.set(f),s.onUpdate&&s.onUpdate(f)},onComplete:()=>{a(),s.onComplete&&s.onComplete()},name:e,motionValue:t,element:o?void 0:i};mS(s)||(d={...d,...I3(e,d)}),d.duration&&(d.duration=wn(d.duration)),d.repeatDelay&&(d.repeatDelay=wn(d.repeatDelay)),d.from!==void 0&&(d.keyframes[0]=d.from);let p=!1;if((d.type===!1||d.duration===0&&!d.repeatDelay)&&(d.duration=0,d.delay===0&&(p=!0)),p&&!o&&t.get()!==void 0){const f=wl(d.keyframes,s);if(f!==void 0)return oe.update(()=>{d.onUpdate(f),d.onComplete()}),new hS([])}return!o&&Gh.supports(d)?new Gh(d):new zp(d)},gS=e=>!!(e&&typeof e=="object"&&e.mix&&e.toValue),vS=e=>Vu(e)?e[e.length-1]||0:e;function Mp(e,t){e.indexOf(t)===-1&&e.push(t)}function _p(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class Op{constructor(){this.subscriptions=[]}add(t){return Mp(this.subscriptions,t),()=>_p(this.subscriptions,t)}notify(t,n,r){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](t,n,r);else for(let o=0;o<i;o++){const a=this.subscriptions[o];a&&a(t,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Yh=30,xS=e=>!isNaN(parseFloat(e)),To={current:void 0};class yS{constructor(t,n={}){this.version="11.11.11",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(r,i=!0)=>{const o=cn.now();this.updatedAt!==o&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),i&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(t),this.owner=n.owner}setCurrent(t){this.current=t,this.updatedAt=cn.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=xS(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new Op);const r=this.events[t].add(n);return t==="change"?()=>{r(),oe.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t,n=!0){!n||!this.passiveEffect?this.updateAndNotify(t,n):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,n,r){this.set(n),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-r}jump(t,n=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return To.current&&To.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const t=cn.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>Yh)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,Yh);return Cp(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function rn(e,t){return new yS(e,t)}function wS(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,rn(n))}function bS(e,t){const n=yl(e,t);let{transitionEnd:r={},transition:i={},...o}=n||{};o={...o,...r};for(const a in o){const s=vS(o[a]);wS(e,a,s)}}const Ip=e=>e.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),SS="framerAppearId",Jv="data-"+Ip(SS);function ex(e){return e.props[Jv]}const Ze=e=>!!(e&&e.getVelocity);function jS(e){return!!(Ze(e)&&e.add)}function qu(e,t){const n=e.getValue("willChange");if(jS(n))return n.add(t)}function TS({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function tx(e,t,{delay:n=0,transitionOverride:r,type:i}={}){var o;let{transition:a=e.getDefaultTransition(),transitionEnd:s,...l}=t;r&&(a=r);const u=[],d=i&&e.animationState&&e.animationState.getState()[i];for(const p in l){const f=e.getValue(p,(o=e.latestValues[p])!==null&&o!==void 0?o:null),v=l[p];if(v===void 0||d&&TS(d,p))continue;const x={delay:n,...mp(a||{},p)};let y=!1;if(window.MotionHandoffAnimation){const g=ex(e);if(g){const h=window.MotionHandoffAnimation(g,p,oe);h!==null&&(x.startTime=h,y=!0)}}qu(e,p),f.start(Lp(p,f,v,e.shouldReduceMotion&&Hr.has(p)?{type:!1}:x,e,y));const b=f.animation;b&&u.push(b)}return s&&Promise.all(u).then(()=>{oe.update(()=>{s&&bS(e,s)})}),u}function Gu(e,t,n={}){var r;const i=yl(e,t,n.type==="exit"?(r=e.presenceContext)===null||r===void 0?void 0:r.custom:void 0);let{transition:o=e.getDefaultTransition()||{}}=i||{};n.transitionOverride&&(o=n.transitionOverride);const a=i?()=>Promise.all(tx(e,i,n)):()=>Promise.resolve(),s=e.variantChildren&&e.variantChildren.size?(u=0)=>{const{delayChildren:d=0,staggerChildren:p,staggerDirection:f}=o;return CS(e,t,d+u,p,f,n)}:()=>Promise.resolve(),{when:l}=o;if(l){const[u,d]=l==="beforeChildren"?[a,s]:[s,a];return u().then(()=>d())}else return Promise.all([a(),s(n.delay)])}function CS(e,t,n=0,r=0,i=1,o){const a=[],s=(e.variantChildren.size-1)*r,l=i===1?(u=0)=>u*r:(u=0)=>s-u*r;return Array.from(e.variantChildren).sort(PS).forEach((u,d)=>{u.notify("AnimationStart",t),a.push(Gu(u,t,{...o,delay:n+l(d)}).then(()=>u.notify("AnimationComplete",t)))}),Promise.all(a)}function PS(e,t){return e.sortNodePosition(t)}function ES(e,t,n={}){e.notify("AnimationStart",t);let r;if(Array.isArray(t)){const i=t.map(o=>Gu(e,o,n));r=Promise.all(i)}else if(typeof t=="string")r=Gu(e,t,n);else{const i=typeof t=="function"?yl(e,t,n.custom):t;r=Promise.all(tx(e,i,n))}return r.then(()=>{e.notify("AnimationComplete",t)})}const kS=hp.length;function nx(e){if(!e)return;if(!e.isControllingVariants){const n=e.parent?nx(e.parent)||{}:{};return e.props.initial!==void 0&&(n.initial=e.props.initial),n}const t={};for(let n=0;n<kS;n++){const r=hp[n],i=e.props[r];(Ko(i)||i===!1)&&(t[r]=i)}return t}const zS=[...fp].reverse(),AS=fp.length;function LS(e){return t=>Promise.all(t.map(({animation:n,options:r})=>ES(e,n,r)))}function MS(e){let t=LS(e),n=Kh(),r=!0;const i=l=>(u,d)=>{var p;const f=yl(e,d,l==="exit"?(p=e.presenceContext)===null||p===void 0?void 0:p.custom:void 0);if(f){const{transition:v,transitionEnd:x,...y}=f;u={...u,...y,...x}}return u};function o(l){t=l(e)}function a(l){const{props:u}=e,d=nx(e.parent)||{},p=[],f=new Set;let v={},x=1/0;for(let b=0;b<AS;b++){const g=zS[b],h=n[g],m=u[g]!==void 0?u[g]:d[g],w=Ko(m),S=g===l?h.isActive:null;S===!1&&(x=b);let T=m===d[g]&&m!==u[g]&&w;if(T&&r&&e.manuallyAnimateOnMount&&(T=!1),h.protectedKeys={...v},!h.isActive&&S===null||!m&&!h.prevProp||xl(m)||typeof m=="boolean")continue;const P=_S(h.prevProp,m);let E=P||g===l&&h.isActive&&!T&&w||b>x&&w,z=!1;const k=Array.isArray(m)?m:[m];let I=k.reduce(i(g),{});S===!1&&(I={});const{prevResolvedValues:$={}}=h,D={...$,...I},W=ne=>{E=!0,f.has(ne)&&(z=!0,f.delete(ne)),h.needsAnimating[ne]=!0;const L=e.getValue(ne);L&&(L.liveStyle=!1)};for(const ne in D){const L=I[ne],N=$[ne];if(v.hasOwnProperty(ne))continue;let B=!1;Vu(L)&&Vu(N)?B=!gv(L,N):B=L!==N,B?L!=null?W(ne):f.add(ne):L!==void 0&&f.has(ne)?W(ne):h.protectedKeys[ne]=!0}h.prevProp=m,h.prevResolvedValues=I,h.isActive&&(v={...v,...I}),r&&e.blockInitialAnimation&&(E=!1),E&&(!(T&&P)||z)&&p.push(...k.map(ne=>({animation:ne,options:{type:g}})))}if(f.size){const b={};f.forEach(g=>{const h=e.getBaseTarget(g),m=e.getValue(g);m&&(m.liveStyle=!0),b[g]=h??null}),p.push({animation:b})}let y=!!p.length;return r&&(u.initial===!1||u.initial===u.animate)&&!e.manuallyAnimateOnMount&&(y=!1),r=!1,y?t(p):Promise.resolve()}function s(l,u){var d;if(n[l].isActive===u)return Promise.resolve();(d=e.variantChildren)===null||d===void 0||d.forEach(f=>{var v;return(v=f.animationState)===null||v===void 0?void 0:v.setActive(l,u)}),n[l].isActive=u;const p=a(l);for(const f in n)n[f].protectedKeys={};return p}return{animateChanges:a,setActive:s,setAnimateFunction:o,getState:()=>n,reset:()=>{n=Kh(),r=!0}}}function _S(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!gv(t,e):!1}function mr(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Kh(){return{animate:mr(!0),whileInView:mr(),whileHover:mr(),whileTap:mr(),whileDrag:mr(),whileFocus:mr(),exit:mr()}}class pr{constructor(t){this.isMounted=!1,this.node=t}update(){}}class OS extends pr{constructor(t){super(t),t.animationState||(t.animationState=MS(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();xl(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){var t;this.node.animationState.reset(),(t=this.unmountControls)===null||t===void 0||t.call(this)}}let IS=0;class RS extends pr{constructor(){super(...arguments),this.id=IS++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===r)return;const i=this.node.animationState.setActive("exit",!t);n&&!t&&i.then(()=>n(this.id))}mount(){const{register:t}=this.node.presenceContext||{};t&&(this.unmount=t(this.id))}unmount(){}}const VS={animation:{Feature:OS},exit:{Feature:RS}},rx=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1;function bl(e,t="page"){return{point:{x:e[`${t}X`],y:e[`${t}Y`]}}}const DS=e=>t=>rx(t)&&e(t,bl(t));function xn(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}function jn(e,t,n,r){return xn(e,t,DS(n),r)}const Xh=(e,t)=>Math.abs(e-t);function NS(e,t){const n=Xh(e.x,t.x),r=Xh(e.y,t.y);return Math.sqrt(n**2+r**2)}class ix{constructor(t,n,{transformPagePoint:r,contextWindow:i,dragSnapToOrigin:o=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const p=yc(this.lastMoveEventInfo,this.history),f=this.startEvent!==null,v=NS(p.offset,{x:0,y:0})>=3;if(!f&&!v)return;const{point:x}=p,{timestamp:y}=Re;this.history.push({...x,timestamp:y});const{onStart:b,onMove:g}=this.handlers;f||(b&&b(this.lastMoveEvent,p),this.startEvent=this.lastMoveEvent),g&&g(this.lastMoveEvent,p)},this.handlePointerMove=(p,f)=>{this.lastMoveEvent=p,this.lastMoveEventInfo=xc(f,this.transformPagePoint),oe.update(this.updatePoint,!0)},this.handlePointerUp=(p,f)=>{this.end();const{onEnd:v,onSessionEnd:x,resumeAnimation:y}=this.handlers;if(this.dragSnapToOrigin&&y&&y(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const b=yc(p.type==="pointercancel"?this.lastMoveEventInfo:xc(f,this.transformPagePoint),this.history);this.startEvent&&v&&v(p,b),x&&x(p,b)},!rx(t))return;this.dragSnapToOrigin=o,this.handlers=n,this.transformPagePoint=r,this.contextWindow=i||window;const a=bl(t),s=xc(a,this.transformPagePoint),{point:l}=s,{timestamp:u}=Re;this.history=[{...l,timestamp:u}];const{onSessionStart:d}=n;d&&d(t,yc(s,this.history)),this.removeListeners=Sn(jn(this.contextWindow,"pointermove",this.handlePointerMove),jn(this.contextWindow,"pointerup",this.handlePointerUp),jn(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),Zt(this.updatePoint)}}function xc(e,t){return t?{point:t(e.point)}:e}function Qh(e,t){return{x:e.x-t.x,y:e.y-t.y}}function yc({point:e},t){return{point:e,delta:Qh(e,ox(t)),offset:Qh(e,BS(t)),velocity:FS(t,.1)}}function BS(e){return e[0]}function ox(e){return e[e.length-1]}function FS(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const i=ox(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>wn(t)));)n--;if(!r)return{x:0,y:0};const o=bn(i.timestamp-r.timestamp);if(o===0)return{x:0,y:0};const a={x:(i.x-r.x)/o,y:(i.y-r.y)/o};return a.x===1/0&&(a.x=0),a.y===1/0&&(a.y=0),a}function ax(e){let t=null;return()=>{const n=()=>{t=null};return t===null?(t=e,n):!1}}const Zh=ax("dragHorizontal"),Jh=ax("dragVertical");function sx(e){let t=!1;if(e==="y")t=Jh();else if(e==="x")t=Zh();else{const n=Zh(),r=Jh();n&&r?t=()=>{n(),r()}:(n&&n(),r&&r())}return t}function lx(){const e=sx(!0);return e?(e(),!1):!0}function si(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}const cx=1e-4,$S=1-cx,HS=1+cx,ux=.01,US=0-ux,WS=0+ux;function wt(e){return e.max-e.min}function qS(e,t,n){return Math.abs(e-t)<=n}function em(e,t,n,r=.5){e.origin=r,e.originPoint=be(t.min,t.max,e.origin),e.scale=wt(n)/wt(t),e.translate=be(n.min,n.max,e.origin)-e.originPoint,(e.scale>=$S&&e.scale<=HS||isNaN(e.scale))&&(e.scale=1),(e.translate>=US&&e.translate<=WS||isNaN(e.translate))&&(e.translate=0)}function Co(e,t,n,r){em(e.x,t.x,n.x,r?r.originX:void 0),em(e.y,t.y,n.y,r?r.originY:void 0)}function tm(e,t,n){e.min=n.min+t.min,e.max=e.min+wt(t)}function GS(e,t,n){tm(e.x,t.x,n.x),tm(e.y,t.y,n.y)}function nm(e,t,n){e.min=t.min-n.min,e.max=e.min+wt(t)}function Po(e,t,n){nm(e.x,t.x,n.x),nm(e.y,t.y,n.y)}function YS(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?be(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?be(n,e,r.max):Math.min(e,n)),e}function rm(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function KS(e,{top:t,left:n,bottom:r,right:i}){return{x:rm(e.x,n,i),y:rm(e.y,t,r)}}function im(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function XS(e,t){return{x:im(e.x,t.x),y:im(e.y,t.y)}}function QS(e,t){let n=.5;const r=wt(e),i=wt(t);return i>r?n=Rr(t.min,t.max-r,e.min):r>i&&(n=Rr(e.min,e.max-i,t.min)),ar(0,1,n)}function ZS(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const Yu=.35;function JS(e=Yu){return e===!1?e=0:e===!0&&(e=Yu),{x:om(e,"left","right"),y:om(e,"top","bottom")}}function om(e,t,n){return{min:am(e,t),max:am(e,n)}}function am(e,t){return typeof e=="number"?e:e[t]||0}const sm=()=>({translate:0,scale:1,origin:0,originPoint:0}),li=()=>({x:sm(),y:sm()}),lm=()=>({min:0,max:0}),Ee=()=>({x:lm(),y:lm()});function Lt(e){return[e("x"),e("y")]}function dx({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function e7({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function t7(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function wc(e){return e===void 0||e===1}function Ku({scale:e,scaleX:t,scaleY:n}){return!wc(e)||!wc(t)||!wc(n)}function yr(e){return Ku(e)||px(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function px(e){return cm(e.x)||cm(e.y)}function cm(e){return e&&e!=="0%"}function Ds(e,t,n){const r=e-n,i=t*r;return n+i}function um(e,t,n,r,i){return i!==void 0&&(e=Ds(e,i,r)),Ds(e,n,r)+t}function Xu(e,t=0,n=1,r,i){e.min=um(e.min,t,n,r,i),e.max=um(e.max,t,n,r,i)}function fx(e,{x:t,y:n}){Xu(e.x,t.translate,t.scale,t.originPoint),Xu(e.y,n.translate,n.scale,n.originPoint)}const dm=.999999999999,pm=1.0000000000001;function n7(e,t,n,r=!1){const i=n.length;if(!i)return;t.x=t.y=1;let o,a;for(let s=0;s<i;s++){o=n[s],a=o.projectionDelta;const{visualElement:l}=o.options;l&&l.props.style&&l.props.style.display==="contents"||(r&&o.options.layoutScroll&&o.scroll&&o!==o.root&&ui(e,{x:-o.scroll.offset.x,y:-o.scroll.offset.y}),a&&(t.x*=a.x.scale,t.y*=a.y.scale,fx(e,a)),r&&yr(o.latestValues)&&ui(e,o.latestValues))}t.x<pm&&t.x>dm&&(t.x=1),t.y<pm&&t.y>dm&&(t.y=1)}function ci(e,t){e.min=e.min+t,e.max=e.max+t}function fm(e,t,n,r,i=.5){const o=be(e.min,e.max,i);Xu(e,t,n,o,r)}function ui(e,t){fm(e.x,t.x,t.scaleX,t.scale,t.originX),fm(e.y,t.y,t.scaleY,t.scale,t.originY)}function hx(e,t){return dx(t7(e.getBoundingClientRect(),t))}function r7(e,t,n){const r=hx(e,n),{scroll:i}=t;return i&&(ci(r.x,i.offset.x),ci(r.y,i.offset.y)),r}const mx=({current:e})=>e?e.ownerDocument.defaultView:null,i7=new WeakMap;class o7{constructor(t){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Ee(),this.visualElement=t}start(t,{snapToCursor:n=!1}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const i=d=>{const{dragSnapToOrigin:p}=this.getProps();p?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(bl(d,"page").point)},o=(d,p)=>{const{drag:f,dragPropagation:v,onDragStart:x}=this.getProps();if(f&&!v&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=sx(f),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Lt(b=>{let g=this.getAxisMotionValue(b).get()||0;if(ln.test(g)){const{projection:h}=this.visualElement;if(h&&h.layout){const m=h.layout.layoutBox[b];m&&(g=wt(m)*(parseFloat(g)/100))}}this.originPoint[b]=g}),x&&oe.postRender(()=>x(d,p)),qu(this.visualElement,"transform");const{animationState:y}=this.visualElement;y&&y.setActive("whileDrag",!0)},a=(d,p)=>{const{dragPropagation:f,dragDirectionLock:v,onDirectionLock:x,onDrag:y}=this.getProps();if(!f&&!this.openGlobalLock)return;const{offset:b}=p;if(v&&this.currentDirection===null){this.currentDirection=a7(b),this.currentDirection!==null&&x&&x(this.currentDirection);return}this.updateAxis("x",p.point,b),this.updateAxis("y",p.point,b),this.visualElement.render(),y&&y(d,p)},s=(d,p)=>this.stop(d,p),l=()=>Lt(d=>{var p;return this.getAnimationState(d)==="paused"&&((p=this.getAxisMotionValue(d).animation)===null||p===void 0?void 0:p.play())}),{dragSnapToOrigin:u}=this.getProps();this.panSession=new ix(t,{onSessionStart:i,onStart:o,onMove:a,onSessionEnd:s,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:u,contextWindow:mx(this.visualElement)})}stop(t,n){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:i}=n;this.startAnimation(i);const{onDragEnd:o}=this.getProps();o&&oe.postRender(()=>o(t,n))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(t,n,r){const{drag:i}=this.getProps();if(!r||!La(t,i,this.currentDirection))return;const o=this.getAxisMotionValue(t);let a=this.originPoint[t]+r[t];this.constraints&&this.constraints[t]&&(a=YS(a,this.constraints[t],this.elastic[t])),o.set(a)}resolveConstraints(){var t;const{dragConstraints:n,dragElastic:r}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(t=this.visualElement.projection)===null||t===void 0?void 0:t.layout,o=this.constraints;n&&si(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&i?this.constraints=KS(i.layoutBox,n):this.constraints=!1,this.elastic=JS(r),o!==this.constraints&&i&&this.constraints&&!this.hasMutatedConstraints&&Lt(a=>{this.constraints!==!1&&this.getAxisMotionValue(a)&&(this.constraints[a]=ZS(i.layoutBox[a],this.constraints[a]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!si(t))return!1;const r=t.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const o=r7(r,i.root,this.visualElement.getTransformPagePoint());let a=XS(i.layout.layoutBox,o);if(n){const s=n(e7(a));this.hasMutatedConstraints=!!s,s&&(a=dx(s))}return a}startAnimation(t){const{drag:n,dragMomentum:r,dragElastic:i,dragTransition:o,dragSnapToOrigin:a,onDragTransitionEnd:s}=this.getProps(),l=this.constraints||{},u=Lt(d=>{if(!La(d,n,this.currentDirection))return;let p=l&&l[d]||{};a&&(p={min:0,max:0});const f=i?200:1e6,v=i?40:1e7,x={type:"inertia",velocity:r?t[d]:0,bounceStiffness:f,bounceDamping:v,timeConstant:750,restDelta:1,restSpeed:10,...o,...p};return this.startAxisValueAnimation(d,x)});return Promise.all(u).then(s)}startAxisValueAnimation(t,n){const r=this.getAxisMotionValue(t);return qu(this.visualElement,t),r.start(Lp(t,r,0,n,this.visualElement,!1))}stopAnimation(){Lt(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){Lt(t=>{var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(t){var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(t){const n=`_drag${t.toUpperCase()}`,r=this.visualElement.getProps(),i=r[n];return i||this.visualElement.getValue(t,(r.initial?r.initial[t]:void 0)||0)}snapToCursor(t){Lt(n=>{const{drag:r}=this.getProps();if(!La(n,r,this.currentDirection))return;const{projection:i}=this.visualElement,o=this.getAxisMotionValue(n);if(i&&i.layout){const{min:a,max:s}=i.layout.layoutBox[n];o.set(t[n]-be(a,s,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!si(n)||!r||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};Lt(a=>{const s=this.getAxisMotionValue(a);if(s&&this.constraints!==!1){const l=s.get();i[a]=QS({min:l,max:l},this.constraints[a])}});const{transformTemplate:o}=this.visualElement.getProps();this.visualElement.current.style.transform=o?o({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),Lt(a=>{if(!La(a,t,null))return;const s=this.getAxisMotionValue(a),{min:l,max:u}=this.constraints[a];s.set(be(l,u,i[a]))})}addListeners(){if(!this.visualElement.current)return;i7.set(this.visualElement,this);const t=this.visualElement.current,n=jn(t,"pointerdown",l=>{const{drag:u,dragListener:d=!0}=this.getProps();u&&d&&this.start(l)}),r=()=>{const{dragConstraints:l}=this.getProps();si(l)&&l.current&&(this.constraints=this.resolveRefConstraints())},{projection:i}=this.visualElement,o=i.addEventListener("measure",r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),oe.read(r);const a=xn(window,"resize",()=>this.scalePositionWithinConstraints()),s=i.addEventListener("didUpdate",({delta:l,hasLayoutChanged:u})=>{this.isDragging&&u&&(Lt(d=>{const p=this.getAxisMotionValue(d);p&&(this.originPoint[d]+=l[d].translate,p.set(p.get()+l[d].translate))}),this.visualElement.render())});return()=>{a(),n(),o(),s&&s()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:i=!1,dragConstraints:o=!1,dragElastic:a=Yu,dragMomentum:s=!0}=t;return{...t,drag:n,dragDirectionLock:r,dragPropagation:i,dragConstraints:o,dragElastic:a,dragMomentum:s}}}function La(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function a7(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class s7 extends pr{constructor(t){super(t),this.removeGroupControls=qe,this.removeListeners=qe,this.controls=new o7(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||qe}unmount(){this.removeGroupControls(),this.removeListeners()}}const hm=e=>(t,n)=>{e&&oe.postRender(()=>e(t,n))};class l7 extends pr{constructor(){super(...arguments),this.removePointerDownListener=qe}onPointerDown(t){this.session=new ix(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:mx(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:r,onPanEnd:i}=this.node.getProps();return{onSessionStart:hm(t),onStart:hm(n),onMove:r,onEnd:(o,a)=>{delete this.session,i&&oe.postRender(()=>i(o,a))}}}mount(){this.removePointerDownListener=jn(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const Sl=j.createContext(null);function c7(){const e=j.useContext(Sl);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:n,register:r}=e,i=j.useId();j.useEffect(()=>r(i),[]);const o=j.useCallback(()=>n&&n(i),[i,n]);return!t&&n?[!1,o]:[!0]}const Rp=j.createContext({}),gx=j.createContext({}),Qa={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function mm(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const Ji={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(q.test(e))e=parseFloat(e);else return e;const n=mm(e,t.target.x),r=mm(e,t.target.y);return`${n}% ${r}%`}},u7={correct:(e,{treeScale:t,projectionDelta:n})=>{const r=e,i=sr.parse(e);if(i.length>5)return r;const o=sr.createTransformer(e),a=typeof i[0]!="number"?1:0,s=n.x.scale*t.x,l=n.y.scale*t.y;i[0+a]/=s,i[1+a]/=l;const u=be(s,l,.5);return typeof i[2+a]=="number"&&(i[2+a]/=u),typeof i[3+a]=="number"&&(i[3+a]/=u),o(i)}},Ns={};function d7(e){Object.assign(Ns,e)}const{schedule:Vp,cancel:xk}=vv(queueMicrotask,!1);class p7 extends j.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r,layoutId:i}=this.props,{projection:o}=t;d7(f7),o&&(n.group&&n.group.add(o),r&&r.register&&i&&r.register(o),o.root.didUpdate(),o.addEventListener("animationComplete",()=>{this.safeToRemove()}),o.setOptions({...o.options,onExitComplete:()=>this.safeToRemove()})),Qa.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:r,drag:i,isPresent:o}=this.props,a=r.projection;return a&&(a.isPresent=o,i||t.layoutDependency!==n||n===void 0?a.willUpdate():this.safeToRemove(),t.isPresent!==o&&(o?a.promote():a.relegate()||oe.postRender(()=>{const s=a.getStack();(!s||!s.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),Vp.postRender(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:i}=t;i&&(i.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(i),r&&r.deregister&&r.deregister(i))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function vx(e){const[t,n]=c7(),r=j.useContext(Rp);return c.jsx(p7,{...e,layoutGroup:r,switchLayoutGroup:j.useContext(gx),isPresent:t,safeToRemove:n})}const f7={borderRadius:{...Ji,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Ji,borderTopRightRadius:Ji,borderBottomLeftRadius:Ji,borderBottomRightRadius:Ji,boxShadow:u7},xx=["TopLeft","TopRight","BottomLeft","BottomRight"],h7=xx.length,gm=e=>typeof e=="string"?parseFloat(e):e,vm=e=>typeof e=="number"||q.test(e);function m7(e,t,n,r,i,o){i?(e.opacity=be(0,n.opacity!==void 0?n.opacity:1,g7(r)),e.opacityExit=be(t.opacity!==void 0?t.opacity:1,0,v7(r))):o&&(e.opacity=be(t.opacity!==void 0?t.opacity:1,n.opacity!==void 0?n.opacity:1,r));for(let a=0;a<h7;a++){const s=`border${xx[a]}Radius`;let l=xm(t,s),u=xm(n,s);if(l===void 0&&u===void 0)continue;l||(l=0),u||(u=0),l===0||u===0||vm(l)===vm(u)?(e[s]=Math.max(be(gm(l),gm(u),r),0),(ln.test(u)||ln.test(l))&&(e[s]+="%")):e[s]=u}(t.rotate||n.rotate)&&(e.rotate=be(t.rotate||0,n.rotate||0,r))}function xm(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const g7=yx(0,.5,Tv),v7=yx(.5,.95,qe);function yx(e,t,n){return r=>r<e?0:r>t?1:n(Rr(e,t,r))}function ym(e,t){e.min=t.min,e.max=t.max}function kt(e,t){ym(e.x,t.x),ym(e.y,t.y)}function wm(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}function bm(e,t,n,r,i){return e-=t,e=Ds(e,1/n,r),i!==void 0&&(e=Ds(e,1/i,r)),e}function x7(e,t=0,n=1,r=.5,i,o=e,a=e){if(ln.test(t)&&(t=parseFloat(t),t=be(a.min,a.max,t/100)-a.min),typeof t!="number")return;let s=be(o.min,o.max,r);e===o&&(s-=t),e.min=bm(e.min,t,n,s,i),e.max=bm(e.max,t,n,s,i)}function Sm(e,t,[n,r,i],o,a){x7(e,t[n],t[r],t[i],t.scale,o,a)}const y7=["x","scaleX","originX"],w7=["y","scaleY","originY"];function jm(e,t,n,r){Sm(e.x,t,y7,n?n.x:void 0,r?r.x:void 0),Sm(e.y,t,w7,n?n.y:void 0,r?r.y:void 0)}function Tm(e){return e.translate===0&&e.scale===1}function wx(e){return Tm(e.x)&&Tm(e.y)}function Cm(e,t){return e.min===t.min&&e.max===t.max}function b7(e,t){return Cm(e.x,t.x)&&Cm(e.y,t.y)}function Pm(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function bx(e,t){return Pm(e.x,t.x)&&Pm(e.y,t.y)}function Em(e){return wt(e.x)/wt(e.y)}function km(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}class S7{constructor(){this.members=[]}add(t){Mp(this.members,t),t.scheduleRender()}remove(t){if(_p(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(i=>t===i);if(n===0)return!1;let r;for(let i=n;i>=0;i--){const o=this.members[i];if(o.isPresent!==!1){r=o;break}}return r?(this.promote(r),!0):!1}promote(t,n){const r=this.lead;if(t!==r&&(this.prevLead=r,this.lead=t,t.show(),r)){r.instance&&r.scheduleRender(),t.scheduleRender(),t.resumeFrom=r,n&&(t.resumeFrom.preserveOpacity=!0),r.snapshot&&(t.snapshot=r.snapshot,t.snapshot.latestValues=r.animationValues||r.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:i}=t.options;i===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:r}=t;n.onExitComplete&&n.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function j7(e,t,n){let r="";const i=e.x.translate/t.x,o=e.y.translate/t.y,a=(n==null?void 0:n.z)||0;if((i||o||a)&&(r=`translate3d(${i}px, ${o}px, ${a}px) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{transformPerspective:u,rotate:d,rotateX:p,rotateY:f,skewX:v,skewY:x}=n;u&&(r=`perspective(${u}px) ${r}`),d&&(r+=`rotate(${d}deg) `),p&&(r+=`rotateX(${p}deg) `),f&&(r+=`rotateY(${f}deg) `),v&&(r+=`skewX(${v}deg) `),x&&(r+=`skewY(${x}deg) `)}const s=e.x.scale*t.x,l=e.y.scale*t.y;return(s!==1||l!==1)&&(r+=`scale(${s}, ${l})`),r||"none"}const T7=(e,t)=>e.depth-t.depth;class C7{constructor(){this.children=[],this.isDirty=!1}add(t){Mp(this.children,t),this.isDirty=!0}remove(t){_p(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(T7),this.isDirty=!1,this.children.forEach(t)}}function Za(e){const t=Ze(e)?e.get():e;return gS(t)?t.toValue():t}function P7(e,t){const n=cn.now(),r=({timestamp:i})=>{const o=i-n;o>=t&&(Zt(r),e(o-t))};return oe.read(r,!0),()=>Zt(r)}function E7(e){return e instanceof SVGElement&&e.tagName!=="svg"}function k7(e,t,n){const r=Ze(e)?e:rn(e);return r.start(Lp("",r,t,n)),r.animation}const wr={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},po=typeof window<"u"&&window.MotionDebug!==void 0,bc=["","X","Y","Z"],z7={visibility:"hidden"},zm=1e3;let A7=0;function Sc(e,t,n,r){const{latestValues:i}=t;i[e]&&(n[e]=i[e],t.setStaticValue(e,0),r&&(r[e]=0))}function Sx(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:t}=e.options;if(!t)return;const n=ex(t);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:i,layoutId:o}=e.options;window.MotionCancelOptimisedAnimation(n,"transform",oe,!(i||o))}const{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&Sx(r)}function jx({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(a={},s=t==null?void 0:t()){this.id=A7++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,po&&(wr.totalNodes=wr.resolvedTargetDeltas=wr.recalculatedProjection=0),this.nodes.forEach(_7),this.nodes.forEach(D7),this.nodes.forEach(N7),this.nodes.forEach(O7),po&&window.MotionDebug.record(wr)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=a,this.root=s?s.root||s:this,this.path=s?[...s.path,s]:[],this.parent=s,this.depth=s?s.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new C7)}addEventListener(a,s){return this.eventHandlers.has(a)||this.eventHandlers.set(a,new Op),this.eventHandlers.get(a).add(s)}notifyListeners(a,...s){const l=this.eventHandlers.get(a);l&&l.notify(...s)}hasListeners(a){return this.eventHandlers.has(a)}mount(a,s=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=E7(a),this.instance=a;const{layoutId:l,layout:u,visualElement:d}=this.options;if(d&&!d.current&&d.mount(a),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),s&&(u||l)&&(this.isLayoutDirty=!0),e){let p;const f=()=>this.root.updateBlockedByResize=!1;e(a,()=>{this.root.updateBlockedByResize=!0,p&&p(),p=P7(f,250),Qa.hasAnimatedSinceResize&&(Qa.hasAnimatedSinceResize=!1,this.nodes.forEach(Lm))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&d&&(l||u)&&this.addEventListener("didUpdate",({delta:p,hasLayoutChanged:f,hasRelativeTargetChanged:v,layout:x})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const y=this.options.transition||d.getDefaultTransition()||U7,{onLayoutAnimationStart:b,onLayoutAnimationComplete:g}=d.getProps(),h=!this.targetLayout||!bx(this.targetLayout,x)||v,m=!f&&v;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||m||f&&(h||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(p,m);const w={...mp(y,"layout"),onPlay:b,onComplete:g};(d.shouldReduceMotion||this.options.layoutRoot)&&(w.delay=0,w.type=!1),this.startAnimation(w)}else f||Lm(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=x})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const a=this.getStack();a&&a.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Zt(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(B7),this.animationId++)}getTransformTemplate(){const{visualElement:a}=this.options;return a&&a.getProps().transformTemplate}willUpdate(a=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Sx(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let d=0;d<this.path.length;d++){const p=this.path[d];p.shouldResetTransform=!0,p.updateScroll("snapshot"),p.options.layoutRoot&&p.willUpdate(!1)}const{layoutId:s,layout:l}=this.options;if(s===void 0&&!l)return;const u=this.getTransformTemplate();this.prevTransformTemplateValue=u?u(this.latestValues,""):void 0,this.updateSnapshot(),a&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Am);return}this.isUpdating||this.nodes.forEach(R7),this.isUpdating=!1,this.nodes.forEach(V7),this.nodes.forEach(L7),this.nodes.forEach(M7),this.clearAllSnapshots();const s=cn.now();Re.delta=ar(0,1e3/60,s-Re.timestamp),Re.timestamp=s,Re.isProcessing=!0,fc.update.process(Re),fc.preRender.process(Re),fc.render.process(Re),Re.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Vp.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(I7),this.sharedNodes.forEach(F7)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,oe.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){oe.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const a=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Ee(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:s}=this.options;s&&s.notify("LayoutMeasure",this.layout.layoutBox,a?a.layoutBox:void 0)}updateScroll(a="measure"){let s=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===a&&(s=!1),s){const l=r(this.instance);this.scroll={animationId:this.root.animationId,phase:a,isRoot:l,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!i)return;const a=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,s=this.projectionDelta&&!wx(this.projectionDelta),l=this.getTransformTemplate(),u=l?l(this.latestValues,""):void 0,d=u!==this.prevTransformTemplateValue;a&&(s||yr(this.latestValues)||d)&&(i(this.instance,u),this.shouldResetTransform=!1,this.scheduleRender())}measure(a=!0){const s=this.measurePageBox();let l=this.removeElementScroll(s);return a&&(l=this.removeTransform(l)),W7(l),{animationId:this.root.animationId,measuredBox:s,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){var a;const{visualElement:s}=this.options;if(!s)return Ee();const l=s.measureViewportBox();if(!(((a=this.scroll)===null||a===void 0?void 0:a.wasRoot)||this.path.some(q7))){const{scroll:d}=this.root;d&&(ci(l.x,d.offset.x),ci(l.y,d.offset.y))}return l}removeElementScroll(a){var s;const l=Ee();if(kt(l,a),!((s=this.scroll)===null||s===void 0)&&s.wasRoot)return l;for(let u=0;u<this.path.length;u++){const d=this.path[u],{scroll:p,options:f}=d;d!==this.root&&p&&f.layoutScroll&&(p.wasRoot&&kt(l,a),ci(l.x,p.offset.x),ci(l.y,p.offset.y))}return l}applyTransform(a,s=!1){const l=Ee();kt(l,a);for(let u=0;u<this.path.length;u++){const d=this.path[u];!s&&d.options.layoutScroll&&d.scroll&&d!==d.root&&ui(l,{x:-d.scroll.offset.x,y:-d.scroll.offset.y}),yr(d.latestValues)&&ui(l,d.latestValues)}return yr(this.latestValues)&&ui(l,this.latestValues),l}removeTransform(a){const s=Ee();kt(s,a);for(let l=0;l<this.path.length;l++){const u=this.path[l];if(!u.instance||!yr(u.latestValues))continue;Ku(u.latestValues)&&u.updateSnapshot();const d=Ee(),p=u.measurePageBox();kt(d,p),jm(s,u.latestValues,u.snapshot?u.snapshot.layoutBox:void 0,d)}return yr(this.latestValues)&&jm(s,this.latestValues),s}setTargetDelta(a){this.targetDelta=a,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(a){this.options={...this.options,...a,crossfade:a.crossfade!==void 0?a.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Re.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(a=!1){var s;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const u=!!this.resumingFrom||this!==l;if(!(a||u&&this.isSharedProjectionDirty||this.isProjectionDirty||!((s=this.parent)===null||s===void 0)&&s.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:p,layoutId:f}=this.options;if(!(!this.layout||!(p||f))){if(this.resolvedRelativeTargetAt=Re.timestamp,!this.targetDelta&&!this.relativeTarget){const v=this.getClosestProjectingParent();v&&v.layout&&this.animationProgress!==1?(this.relativeParent=v,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Ee(),this.relativeTargetOrigin=Ee(),Po(this.relativeTargetOrigin,this.layout.layoutBox,v.layout.layoutBox),kt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=Ee(),this.targetWithTransforms=Ee()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),GS(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):kt(this.target,this.layout.layoutBox),fx(this.target,this.targetDelta)):kt(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const v=this.getClosestProjectingParent();v&&!!v.resumingFrom==!!this.resumingFrom&&!v.options.layoutScroll&&v.target&&this.animationProgress!==1?(this.relativeParent=v,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Ee(),this.relativeTargetOrigin=Ee(),Po(this.relativeTargetOrigin,this.target,v.target),kt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}po&&wr.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||Ku(this.parent.latestValues)||px(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var a;const s=this.getLead(),l=!!this.resumingFrom||this!==s;let u=!0;if((this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty)&&(u=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(u=!1),this.resolvedRelativeTargetAt===Re.timestamp&&(u=!1),u)return;const{layout:d,layoutId:p}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(d||p))return;kt(this.layoutCorrected,this.layout.layoutBox);const f=this.treeScale.x,v=this.treeScale.y;n7(this.layoutCorrected,this.treeScale,this.path,l),s.layout&&!s.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(s.target=s.layout.layoutBox,s.targetWithTransforms=Ee());const{target:x}=s;if(!x){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(wm(this.prevProjectionDelta.x,this.projectionDelta.x),wm(this.prevProjectionDelta.y,this.projectionDelta.y)),Co(this.projectionDelta,this.layoutCorrected,x,this.latestValues),(this.treeScale.x!==f||this.treeScale.y!==v||!km(this.projectionDelta.x,this.prevProjectionDelta.x)||!km(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",x)),po&&wr.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(a=!0){var s;if((s=this.options.visualElement)===null||s===void 0||s.scheduleRender(),a){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=li(),this.projectionDelta=li(),this.projectionDeltaWithTransform=li()}setAnimationOrigin(a,s=!1){const l=this.snapshot,u=l?l.latestValues:{},d={...this.latestValues},p=li();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!s;const f=Ee(),v=l?l.source:void 0,x=this.layout?this.layout.source:void 0,y=v!==x,b=this.getStack(),g=!b||b.members.length<=1,h=!!(y&&!g&&this.options.crossfade===!0&&!this.path.some(H7));this.animationProgress=0;let m;this.mixTargetDelta=w=>{const S=w/1e3;Mm(p.x,a.x,S),Mm(p.y,a.y,S),this.setTargetDelta(p),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Po(f,this.layout.layoutBox,this.relativeParent.layout.layoutBox),$7(this.relativeTarget,this.relativeTargetOrigin,f,S),m&&b7(this.relativeTarget,m)&&(this.isProjectionDirty=!1),m||(m=Ee()),kt(m,this.relativeTarget)),y&&(this.animationValues=d,m7(d,u,this.latestValues,S,h,g)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=S},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(a){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Zt(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=oe.update(()=>{Qa.hasAnimatedSinceResize=!0,this.currentAnimation=k7(0,zm,{...a,onUpdate:s=>{this.mixTargetDelta(s),a.onUpdate&&a.onUpdate(s)},onComplete:()=>{a.onComplete&&a.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const a=this.getStack();a&&a.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(zm),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const a=this.getLead();let{targetWithTransforms:s,target:l,layout:u,latestValues:d}=a;if(!(!s||!l||!u)){if(this!==a&&this.layout&&u&&Tx(this.options.animationType,this.layout.layoutBox,u.layoutBox)){l=this.target||Ee();const p=wt(this.layout.layoutBox.x);l.x.min=a.target.x.min,l.x.max=l.x.min+p;const f=wt(this.layout.layoutBox.y);l.y.min=a.target.y.min,l.y.max=l.y.min+f}kt(s,l),ui(s,d),Co(this.projectionDeltaWithTransform,this.layoutCorrected,s,d)}}registerSharedNode(a,s){this.sharedNodes.has(a)||this.sharedNodes.set(a,new S7),this.sharedNodes.get(a).add(s);const u=s.options.initialPromotionConfig;s.promote({transition:u?u.transition:void 0,preserveFollowOpacity:u&&u.shouldPreserveFollowOpacity?u.shouldPreserveFollowOpacity(s):void 0})}isLead(){const a=this.getStack();return a?a.lead===this:!0}getLead(){var a;const{layoutId:s}=this.options;return s?((a=this.getStack())===null||a===void 0?void 0:a.lead)||this:this}getPrevLead(){var a;const{layoutId:s}=this.options;return s?(a=this.getStack())===null||a===void 0?void 0:a.prevLead:void 0}getStack(){const{layoutId:a}=this.options;if(a)return this.root.sharedNodes.get(a)}promote({needsReset:a,transition:s,preserveFollowOpacity:l}={}){const u=this.getStack();u&&u.promote(this,l),a&&(this.projectionDelta=void 0,this.needsReset=!0),s&&this.setOptions({transition:s})}relegate(){const a=this.getStack();return a?a.relegate(this):!1}resetSkewAndRotation(){const{visualElement:a}=this.options;if(!a)return;let s=!1;const{latestValues:l}=a;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(s=!0),!s)return;const u={};l.z&&Sc("z",a,u,this.animationValues);for(let d=0;d<bc.length;d++)Sc(`rotate${bc[d]}`,a,u,this.animationValues),Sc(`skew${bc[d]}`,a,u,this.animationValues);a.render();for(const d in u)a.setStaticValue(d,u[d]),this.animationValues&&(this.animationValues[d]=u[d]);a.scheduleRender()}getProjectionStyles(a){var s,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return z7;const u={visibility:""},d=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,u.opacity="",u.pointerEvents=Za(a==null?void 0:a.pointerEvents)||"",u.transform=d?d(this.latestValues,""):"none",u;const p=this.getLead();if(!this.projectionDelta||!this.layout||!p.target){const y={};return this.options.layoutId&&(y.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,y.pointerEvents=Za(a==null?void 0:a.pointerEvents)||""),this.hasProjected&&!yr(this.latestValues)&&(y.transform=d?d({},""):"none",this.hasProjected=!1),y}const f=p.animationValues||p.latestValues;this.applyTransformsToTarget(),u.transform=j7(this.projectionDeltaWithTransform,this.treeScale,f),d&&(u.transform=d(f,u.transform));const{x:v,y:x}=this.projectionDelta;u.transformOrigin=`${v.origin*100}% ${x.origin*100}% 0`,p.animationValues?u.opacity=p===this?(l=(s=f.opacity)!==null&&s!==void 0?s:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:f.opacityExit:u.opacity=p===this?f.opacity!==void 0?f.opacity:"":f.opacityExit!==void 0?f.opacityExit:0;for(const y in Ns){if(f[y]===void 0)continue;const{correct:b,applyTo:g}=Ns[y],h=u.transform==="none"?f[y]:b(f[y],p);if(g){const m=g.length;for(let w=0;w<m;w++)u[g[w]]=h}else u[y]=h}return this.options.layoutId&&(u.pointerEvents=p===this?Za(a==null?void 0:a.pointerEvents)||"":"none"),u}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(a=>{var s;return(s=a.currentAnimation)===null||s===void 0?void 0:s.stop()}),this.root.nodes.forEach(Am),this.root.sharedNodes.clear()}}}function L7(e){e.updateLayout()}function M7(e){var t;const n=((t=e.resumeFrom)===null||t===void 0?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:i}=e.layout,{animationType:o}=e.options,a=n.source!==e.layout.source;o==="size"?Lt(p=>{const f=a?n.measuredBox[p]:n.layoutBox[p],v=wt(f);f.min=r[p].min,f.max=f.min+v}):Tx(o,n.layoutBox,r)&&Lt(p=>{const f=a?n.measuredBox[p]:n.layoutBox[p],v=wt(r[p]);f.max=f.min+v,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[p].max=e.relativeTarget[p].min+v)});const s=li();Co(s,r,n.layoutBox);const l=li();a?Co(l,e.applyTransform(i,!0),n.measuredBox):Co(l,r,n.layoutBox);const u=!wx(s);let d=!1;if(!e.resumeFrom){const p=e.getClosestProjectingParent();if(p&&!p.resumeFrom){const{snapshot:f,layout:v}=p;if(f&&v){const x=Ee();Po(x,n.layoutBox,f.layoutBox);const y=Ee();Po(y,r,v.layoutBox),bx(x,y)||(d=!0),p.options.layoutRoot&&(e.relativeTarget=y,e.relativeTargetOrigin=x,e.relativeParent=p)}}}e.notifyListeners("didUpdate",{layout:r,snapshot:n,delta:l,layoutDelta:s,hasLayoutChanged:u,hasRelativeTargetChanged:d})}else if(e.isLead()){const{onExitComplete:r}=e.options;r&&r()}e.options.transition=void 0}function _7(e){po&&wr.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function O7(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function I7(e){e.clearSnapshot()}function Am(e){e.clearMeasurements()}function R7(e){e.isLayoutDirty=!1}function V7(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function Lm(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function D7(e){e.resolveTargetDelta()}function N7(e){e.calcProjection()}function B7(e){e.resetSkewAndRotation()}function F7(e){e.removeLeadSnapshot()}function Mm(e,t,n){e.translate=be(t.translate,0,n),e.scale=be(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function _m(e,t,n,r){e.min=be(t.min,n.min,r),e.max=be(t.max,n.max,r)}function $7(e,t,n,r){_m(e.x,t.x,n.x,r),_m(e.y,t.y,n.y,r)}function H7(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const U7={duration:.45,ease:[.4,0,.1,1]},Om=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),Im=Om("applewebkit/")&&!Om("chrome/")?Math.round:qe;function Rm(e){e.min=Im(e.min),e.max=Im(e.max)}function W7(e){Rm(e.x),Rm(e.y)}function Tx(e,t,n){return e==="position"||e==="preserve-aspect"&&!qS(Em(t),Em(n),.2)}function q7(e){var t;return e!==e.root&&((t=e.scroll)===null||t===void 0?void 0:t.wasRoot)}const G7=jx({attachResizeListener:(e,t)=>xn(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),jc={current:void 0},Cx=jx({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!jc.current){const e=new G7({});e.mount(window),e.setOptions({layoutScroll:!0}),jc.current=e}return jc.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),Y7={pan:{Feature:l7},drag:{Feature:s7,ProjectionNode:Cx,MeasureLayout:vx}};function Vm(e,t){const n=t?"pointerenter":"pointerleave",r=t?"onHoverStart":"onHoverEnd",i=(o,a)=>{if(o.pointerType==="touch"||lx())return;const s=e.getProps();e.animationState&&s.whileHover&&e.animationState.setActive("whileHover",t);const l=s[r];l&&oe.postRender(()=>l(o,a))};return jn(e.current,n,i,{passive:!e.getProps()[r]})}class K7 extends pr{mount(){this.unmount=Sn(Vm(this.node,!0),Vm(this.node,!1))}unmount(){}}class X7 extends pr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Sn(xn(this.node.current,"focus",()=>this.onFocus()),xn(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}const Px=(e,t)=>t?e===t?!0:Px(e,t.parentElement):!1;function Tc(e,t){if(!t)return;const n=new PointerEvent("pointer"+e);t(n,bl(n))}class Q7 extends pr{constructor(){super(...arguments),this.removeStartListeners=qe,this.removeEndListeners=qe,this.removeAccessibleListeners=qe,this.startPointerPress=(t,n)=>{if(this.isPressing)return;this.removeEndListeners();const r=this.node.getProps(),o=jn(window,"pointerup",(s,l)=>{if(!this.checkPressEnd())return;const{onTap:u,onTapCancel:d,globalTapTarget:p}=this.node.getProps(),f=!p&&!Px(this.node.current,s.target)?d:u;f&&oe.update(()=>f(s,l))},{passive:!(r.onTap||r.onPointerUp)}),a=jn(window,"pointercancel",(s,l)=>this.cancelPress(s,l),{passive:!(r.onTapCancel||r.onPointerCancel)});this.removeEndListeners=Sn(o,a),this.startPress(t,n)},this.startAccessiblePress=()=>{const t=o=>{if(o.key!=="Enter"||this.isPressing)return;const a=s=>{s.key!=="Enter"||!this.checkPressEnd()||Tc("up",(l,u)=>{const{onTap:d}=this.node.getProps();d&&oe.postRender(()=>d(l,u))})};this.removeEndListeners(),this.removeEndListeners=xn(this.node.current,"keyup",a),Tc("down",(s,l)=>{this.startPress(s,l)})},n=xn(this.node.current,"keydown",t),r=()=>{this.isPressing&&Tc("cancel",(o,a)=>this.cancelPress(o,a))},i=xn(this.node.current,"blur",r);this.removeAccessibleListeners=Sn(n,i)}}startPress(t,n){this.isPressing=!0;const{onTapStart:r,whileTap:i}=this.node.getProps();i&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),r&&oe.postRender(()=>r(t,n))}checkPressEnd(){return this.removeEndListeners(),this.isPressing=!1,this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!lx()}cancelPress(t,n){if(!this.checkPressEnd())return;const{onTapCancel:r}=this.node.getProps();r&&oe.postRender(()=>r(t,n))}mount(){const t=this.node.getProps(),n=jn(t.globalTapTarget?window:this.node.current,"pointerdown",this.startPointerPress,{passive:!(t.onTapStart||t.onPointerStart)}),r=xn(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=Sn(n,r)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}const Qu=new WeakMap,Cc=new WeakMap,Z7=e=>{const t=Qu.get(e.target);t&&t(e)},J7=e=>{e.forEach(Z7)};function e6({root:e,...t}){const n=e||document;Cc.has(n)||Cc.set(n,{});const r=Cc.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(J7,{root:e,...t})),r[i]}function t6(e,t,n){const r=e6(t);return Qu.set(e,n),r.observe(e),()=>{Qu.delete(e),r.unobserve(e)}}const n6={some:0,all:1};class r6 extends pr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:r,amount:i="some",once:o}=t,a={root:n?n.current:void 0,rootMargin:r,threshold:typeof i=="number"?i:n6[i]},s=l=>{const{isIntersecting:u}=l;if(this.isInView===u||(this.isInView=u,o&&!u&&this.hasEnteredView))return;u&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",u);const{onViewportEnter:d,onViewportLeave:p}=this.node.getProps(),f=u?d:p;f&&f(l)};return t6(this.node.current,a,s)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(i6(t,n))&&this.startObserver()}unmount(){}}function i6({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const o6={inView:{Feature:r6},tap:{Feature:Q7},focus:{Feature:X7},hover:{Feature:K7}},a6={layout:{ProjectionNode:Cx,MeasureLayout:vx}},jl=j.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"}),Tl=j.createContext({}),Dp=typeof window<"u",Cl=Dp?j.useLayoutEffect:j.useEffect,Ex=j.createContext({strict:!1});function s6(e,t,n,r,i){var o,a;const{visualElement:s}=j.useContext(Tl),l=j.useContext(Ex),u=j.useContext(Sl),d=j.useContext(jl).reducedMotion,p=j.useRef();r=r||l.renderer,!p.current&&r&&(p.current=r(e,{visualState:t,parent:s,props:n,presenceContext:u,blockInitialAnimation:u?u.initial===!1:!1,reducedMotionConfig:d}));const f=p.current,v=j.useContext(gx);f&&!f.projection&&i&&(f.type==="html"||f.type==="svg")&&l6(p.current,n,i,v);const x=j.useRef(!1);j.useInsertionEffect(()=>{f&&x.current&&f.update(n,u)});const y=n[Jv],b=j.useRef(!!y&&!(!((o=window.MotionHandoffIsComplete)===null||o===void 0)&&o.call(window,y))&&((a=window.MotionHasOptimisedAnimation)===null||a===void 0?void 0:a.call(window,y)));return Cl(()=>{f&&(x.current=!0,window.MotionIsMounted=!0,f.updateFeatures(),Vp.render(f.render),b.current&&f.animationState&&f.animationState.animateChanges())}),j.useEffect(()=>{f&&(!b.current&&f.animationState&&f.animationState.animateChanges(),b.current&&(queueMicrotask(()=>{var g;(g=window.MotionHandoffMarkAsComplete)===null||g===void 0||g.call(window,y)}),b.current=!1))}),f}function l6(e,t,n,r){const{layoutId:i,layout:o,drag:a,dragConstraints:s,layoutScroll:l,layoutRoot:u}=t;e.projection=new n(e.latestValues,t["data-framer-portal-id"]?void 0:kx(e.parent)),e.projection.setOptions({layoutId:i,layout:o,alwaysMeasureLayout:!!a||s&&si(s),visualElement:e,animationType:typeof o=="string"?o:"both",initialPromotionConfig:r,layoutScroll:l,layoutRoot:u})}function kx(e){if(e)return e.options.allowProjection!==!1?e.projection:kx(e.parent)}function c6(e,t,n){return j.useCallback(r=>{r&&e.mount&&e.mount(r),t&&(r?t.mount(r):t.unmount()),n&&(typeof n=="function"?n(r):si(n)&&(n.current=r))},[t])}function Pl(e){return xl(e.animate)||hp.some(t=>Ko(e[t]))}function zx(e){return!!(Pl(e)||e.variants)}function u6(e,t){if(Pl(e)){const{initial:n,animate:r}=e;return{initial:n===!1||Ko(n)?n:void 0,animate:Ko(r)?r:void 0}}return e.inherit!==!1?t:{}}function d6(e){const{initial:t,animate:n}=u6(e,j.useContext(Tl));return j.useMemo(()=>({initial:t,animate:n}),[Dm(t),Dm(n)])}function Dm(e){return Array.isArray(e)?e.join(" "):e}const Nm={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},zi={};for(const e in Nm)zi[e]={isEnabled:t=>Nm[e].some(n=>!!t[n])};function p6(e){for(const t in e)zi[t]={...zi[t],...e[t]}}const f6=Symbol.for("motionComponentSymbol");function h6({preloadedFeatures:e,createVisualElement:t,useRender:n,useVisualState:r,Component:i}){e&&p6(e);function o(s,l){let u;const d={...j.useContext(jl),...s,layoutId:m6(s)},{isStatic:p}=d,f=d6(s),v=r(s,p);if(!p&&Dp){g6();const x=v6(d);u=x.MeasureLayout,f.visualElement=s6(i,v,d,t,x.ProjectionNode)}return c.jsxs(Tl.Provider,{value:f,children:[u&&f.visualElement?c.jsx(u,{visualElement:f.visualElement,...d}):null,n(i,s,c6(v,f.visualElement,l),v,p,f.visualElement)]})}const a=j.forwardRef(o);return a[f6]=i,a}function m6({layoutId:e}){const t=j.useContext(Rp).id;return t&&e!==void 0?t+"-"+e:e}function g6(e,t){j.useContext(Ex).strict}function v6(e){const{drag:t,layout:n}=zi;if(!t&&!n)return{};const r={...t,...n};return{MeasureLayout:t!=null&&t.isEnabled(e)||n!=null&&n.isEnabled(e)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}const x6=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Np(e){return typeof e!="string"||e.includes("-")?!1:!!(x6.indexOf(e)>-1||/[A-Z]/u.test(e))}function Ax(e,{style:t,vars:n},r,i){Object.assign(e.style,t,i&&i.getProjectionStyles(r));for(const o in n)e.style.setProperty(o,n[o])}const Lx=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function Mx(e,t,n,r){Ax(e,t,void 0,r);for(const i in t.attrs)e.setAttribute(Lx.has(i)?i:Ip(i),t.attrs[i])}function _x(e,{layout:t,layoutId:n}){return Hr.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!Ns[e]||e==="opacity")}function Bp(e,t,n){var r;const{style:i}=e,o={};for(const a in i)(Ze(i[a])||t.style&&Ze(t.style[a])||_x(a,e)||((r=n==null?void 0:n.getValue(a))===null||r===void 0?void 0:r.liveStyle)!==void 0)&&(o[a]=i[a]);return o}function Ox(e,t,n){const r=Bp(e,t,n);for(const i in e)if(Ze(e[i])||Ze(t[i])){const o=sa.indexOf(i)!==-1?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i;r[o]=e[i]}return r}function Fi(e){const t=j.useRef(null);return t.current===null&&(t.current=e()),t.current}function y6({scrapeMotionValuesFromProps:e,createRenderState:t,onMount:n},r,i,o){const a={latestValues:w6(r,i,o,e),renderState:t()};return n&&(a.mount=s=>n(r,s,a)),a}const Ix=e=>(t,n)=>{const r=j.useContext(Tl),i=j.useContext(Sl),o=()=>y6(e,t,r,i);return n?o():Fi(o)};function w6(e,t,n,r){const i={},o=r(e,{});for(const f in o)i[f]=Za(o[f]);let{initial:a,animate:s}=e;const l=Pl(e),u=zx(e);t&&u&&!l&&e.inherit!==!1&&(a===void 0&&(a=t.initial),s===void 0&&(s=t.animate));let d=n?n.initial===!1:!1;d=d||a===!1;const p=d?s:a;if(p&&typeof p!="boolean"&&!xl(p)){const f=Array.isArray(p)?p:[p];for(let v=0;v<f.length;v++){const x=pp(e,f[v]);if(x){const{transitionEnd:y,transition:b,...g}=x;for(const h in g){let m=g[h];if(Array.isArray(m)){const w=d?m.length-1:0;m=m[w]}m!==null&&(i[h]=m)}for(const h in y)i[h]=y[h]}}}return i}const Fp=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),Rx=()=>({...Fp(),attrs:{}}),Vx=(e,t)=>t&&typeof e=="number"?t.transform(e):e,b6={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},S6=sa.length;function j6(e,t,n){let r="",i=!0;for(let o=0;o<S6;o++){const a=sa[o],s=e[a];if(s===void 0)continue;let l=!0;if(typeof s=="number"?l=s===(a.startsWith("scale")?1:0):l=parseFloat(s)===0,!l||n){const u=Vx(s,Sp[a]);if(!l){i=!1;const d=b6[a]||a;r+=`${d}(${u}) `}n&&(t[a]=u)}}return r=r.trim(),n?r=n(t,i?"":r):i&&(r="none"),r}function $p(e,t,n){const{style:r,vars:i,transformOrigin:o}=e;let a=!1,s=!1;for(const l in t){const u=t[l];if(Hr.has(l)){a=!0;continue}else if(zv(l)){i[l]=u;continue}else{const d=Vx(u,Sp[l]);l.startsWith("origin")?(s=!0,o[l]=d):r[l]=d}}if(t.transform||(a||n?r.transform=j6(t,e.transform,n):r.transform&&(r.transform="none")),s){const{originX:l="50%",originY:u="50%",originZ:d=0}=o;r.transformOrigin=`${l} ${u} ${d}`}}function Bm(e,t,n){return typeof e=="string"?e:q.transform(t+n*e)}function T6(e,t,n){const r=Bm(t,e.x,e.width),i=Bm(n,e.y,e.height);return`${r} ${i}`}const C6={offset:"stroke-dashoffset",array:"stroke-dasharray"},P6={offset:"strokeDashoffset",array:"strokeDasharray"};function E6(e,t,n=1,r=0,i=!0){e.pathLength=1;const o=i?C6:P6;e[o.offset]=q.transform(-r);const a=q.transform(t),s=q.transform(n);e[o.array]=`${a} ${s}`}function Hp(e,{attrX:t,attrY:n,attrScale:r,originX:i,originY:o,pathLength:a,pathSpacing:s=1,pathOffset:l=0,...u},d,p){if($p(e,u,p),d){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:f,style:v,dimensions:x}=e;f.transform&&(x&&(v.transform=f.transform),delete f.transform),x&&(i!==void 0||o!==void 0||v.transform)&&(v.transformOrigin=T6(x,i!==void 0?i:.5,o!==void 0?o:.5)),t!==void 0&&(f.x=t),n!==void 0&&(f.y=n),r!==void 0&&(f.scale=r),a!==void 0&&E6(f,a,s,l,!1)}const Up=e=>typeof e=="string"&&e.toLowerCase()==="svg",k6={useVisualState:Ix({scrapeMotionValuesFromProps:Ox,createRenderState:Rx,onMount:(e,t,{renderState:n,latestValues:r})=>{oe.read(()=>{try{n.dimensions=typeof t.getBBox=="function"?t.getBBox():t.getBoundingClientRect()}catch{n.dimensions={x:0,y:0,width:0,height:0}}}),oe.render(()=>{Hp(n,r,Up(t.tagName),e.transformTemplate),Mx(t,n)})}})},z6={useVisualState:Ix({scrapeMotionValuesFromProps:Bp,createRenderState:Fp})};function Dx(e,t,n){for(const r in t)!Ze(t[r])&&!_x(r,n)&&(e[r]=t[r])}function A6({transformTemplate:e},t){return j.useMemo(()=>{const n=Fp();return $p(n,t,e),Object.assign({},n.vars,n.style)},[t])}function L6(e,t){const n=e.style||{},r={};return Dx(r,n,e),Object.assign(r,A6(e,t)),r}function M6(e,t){const n={},r=L6(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}const _6=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Bs(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||_6.has(e)}let Nx=e=>!Bs(e);function O6(e){e&&(Nx=t=>t.startsWith("on")?!Bs(t):e(t))}try{O6(require("@emotion/is-prop-valid").default)}catch{}function I6(e,t,n){const r={};for(const i in e)i==="values"&&typeof e.values=="object"||(Nx(i)||n===!0&&Bs(i)||!t&&!Bs(i)||e.draggable&&i.startsWith("onDrag"))&&(r[i]=e[i]);return r}function R6(e,t,n,r){const i=j.useMemo(()=>{const o=Rx();return Hp(o,t,Up(r),e.transformTemplate),{...o.attrs,style:{...o.style}}},[t]);if(e.style){const o={};Dx(o,e.style,e),i.style={...o,...i.style}}return i}function V6(e=!1){return(n,r,i,{latestValues:o},a)=>{const l=(Np(n)?R6:M6)(r,o,a,n),u=I6(r,typeof n=="string",e),d=n!==j.Fragment?{...u,...l,ref:i}:{},{children:p}=r,f=j.useMemo(()=>Ze(p)?p.get():p,[p]);return j.createElement(n,{...d,children:f})}}function D6(e,t){return function(r,{forwardMotionProps:i}={forwardMotionProps:!1}){const a={...Np(r)?k6:z6,preloadedFeatures:e,useRender:V6(i),createVisualElement:t,Component:r};return h6(a)}}const Zu={current:null},Bx={current:!1};function N6(){if(Bx.current=!0,!!Dp)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>Zu.current=e.matches;e.addListener(t),t()}else Zu.current=!1}function B6(e,t,n){for(const r in t){const i=t[r],o=n[r];if(Ze(i))e.addValue(r,i);else if(Ze(o))e.addValue(r,rn(i,{owner:e}));else if(o!==i)if(e.hasValue(r)){const a=e.getValue(r);a.liveStyle===!0?a.jump(i):a.hasAnimated||a.set(i)}else{const a=e.getStaticValue(r);e.addValue(r,rn(a!==void 0?a:i,{owner:e}))}}for(const r in n)t[r]===void 0&&e.removeValue(r);return t}const Fm=new WeakMap,F6=[...Mv,Xe,sr],$6=e=>F6.find(Lv(e)),$m=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class H6{scrapeMotionValuesFromProps(t,n,r){return{}}constructor({parent:t,props:n,presenceContext:r,reducedMotionConfig:i,blockInitialAnimation:o,visualState:a},s={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=yp,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const f=cn.now();this.renderScheduledAt<f&&(this.renderScheduledAt=f,oe.render(this.render,!1,!0))};const{latestValues:l,renderState:u}=a;this.latestValues=l,this.baseTarget={...l},this.initialValues=n.initial?{...l}:{},this.renderState=u,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.options=s,this.blockInitialAnimation=!!o,this.isControllingVariants=Pl(n),this.isVariantNode=zx(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:d,...p}=this.scrapeMotionValuesFromProps(n,{},this);for(const f in p){const v=p[f];l[f]!==void 0&&Ze(v)&&v.set(l[f],!1)}}mount(t){this.current=t,Fm.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,r)=>this.bindToMotionValue(r,n)),Bx.current||N6(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Zu.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){Fm.delete(this.current),this.projection&&this.projection.unmount(),Zt(this.notifyUpdate),Zt(this.render),this.valueSubscriptions.forEach(t=>t()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const t in this.events)this.events[t].clear();for(const t in this.features){const n=this.features[t];n&&(n.unmount(),n.isMounted=!1)}this.current=null}bindToMotionValue(t,n){this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)();const r=Hr.has(t),i=n.on("change",s=>{this.latestValues[t]=s,this.props.onUpdate&&oe.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0)}),o=n.on("renderRequest",this.scheduleRender);let a;window.MotionCheckAppearSync&&(a=window.MotionCheckAppearSync(this,t,n)),this.valueSubscriptions.set(t,()=>{i(),o(),a&&a(),n.owner&&n.stop()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in zi){const n=zi[t];if(!n)continue;const{isEnabled:r,Feature:i}=n;if(!this.features[t]&&i&&r(this.props)&&(this.features[t]=new i(this)),this.features[t]){const o=this.features[t];o.isMounted?o.update():(o.mount(),o.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Ee()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<$m.length;r++){const i=$m[r];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const o="on"+i,a=t[o];a&&(this.propEventSubscriptions[i]=this.on(i,a))}this.prevMotionValues=B6(this,this.scrapeMotionValuesFromProps(t,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){const r=this.values.get(t);n!==r&&(r&&this.removeValue(t),this.bindToMotionValue(t,n),this.values.set(t,n),this.latestValues[t]=n.get())}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let r=this.values.get(t);return r===void 0&&n!==void 0&&(r=rn(n===null?void 0:n,{owner:this}),this.addValue(t,r)),r}readValue(t,n){var r;let i=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:(r=this.getBaseTargetFromProps(this.props,t))!==null&&r!==void 0?r:this.readValueFromInstance(this.current,t,this.options);return i!=null&&(typeof i=="string"&&(Ev(i)||Pv(i))?i=parseFloat(i):!$6(i)&&sr.test(n)&&(i=Bv(t,n)),this.setBaseTarget(t,Ze(i)?i.get():i)),Ze(i)?i.get():i}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var n;const{initial:r}=this.props;let i;if(typeof r=="string"||typeof r=="object"){const a=pp(this.props,r,(n=this.presenceContext)===null||n===void 0?void 0:n.custom);a&&(i=a[t])}if(r&&i!==void 0)return i;const o=this.getBaseTargetFromProps(this.props,t);return o!==void 0&&!Ze(o)?o:this.initialValues[t]!==void 0&&i===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new Op),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}}class Fx extends H6{constructor(){super(...arguments),this.KeyframeResolver=Fv}sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){return t.style?t.style[n]:void 0}removeValueFromRenderState(t,{vars:n,style:r}){delete n[t],delete r[t]}}function U6(e){return window.getComputedStyle(e)}class W6 extends Fx{constructor(){super(...arguments),this.type="html",this.renderInstance=Ax}readValueFromInstance(t,n){if(Hr.has(n)){const r=jp(n);return r&&r.default||0}else{const r=U6(t),i=(zv(n)?r.getPropertyValue(n):r[n])||0;return typeof i=="string"?i.trim():i}}measureInstanceViewportBox(t,{transformPagePoint:n}){return hx(t,n)}build(t,n,r){$p(t,n,r.transformTemplate)}scrapeMotionValuesFromProps(t,n,r){return Bp(t,n,r)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;Ze(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}class q6 extends Fx{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Ee}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(Hr.has(n)){const r=jp(n);return r&&r.default||0}return n=Lx.has(n)?n:Ip(n),t.getAttribute(n)}scrapeMotionValuesFromProps(t,n,r){return Ox(t,n,r)}build(t,n,r){Hp(t,n,this.isSVGTag,r.transformTemplate)}renderInstance(t,n,r,i){Mx(t,n,r,i)}mount(t){this.isSVGTag=Up(t.tagName),super.mount(t)}}const G6=(e,t)=>Np(e)?new q6(t):new W6(t,{allowProjection:e!==j.Fragment}),Y6=D6({...VS,...o6,...Y7,...a6},G6),F=A3(Y6);class K6 extends j.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent){const r=this.props.sizeRef.current;r.height=n.offsetHeight||0,r.width=n.offsetWidth||0,r.top=n.offsetTop,r.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function X6({children:e,isPresent:t}){const n=j.useId(),r=j.useRef(null),i=j.useRef({width:0,height:0,top:0,left:0}),{nonce:o}=j.useContext(jl);return j.useInsertionEffect(()=>{const{width:a,height:s,top:l,left:u}=i.current;if(t||!r.current||!a||!s)return;r.current.dataset.motionPopId=n;const d=document.createElement("style");return o&&(d.nonce=o),document.head.appendChild(d),d.sheet&&d.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${a}px !important;
            height: ${s}px !important;
            top: ${l}px !important;
            left: ${u}px !important;
          }
        `),()=>{document.head.removeChild(d)}},[t]),c.jsx(K6,{isPresent:t,childRef:r,sizeRef:i,children:j.cloneElement(e,{ref:r})})}const Q6=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:o,mode:a})=>{const s=Fi(Z6),l=j.useId(),u=j.useCallback(p=>{s.set(p,!0);for(const f of s.values())if(!f)return;r&&r()},[s,r]),d=j.useMemo(()=>({id:l,initial:t,isPresent:n,custom:i,onExitComplete:u,register:p=>(s.set(p,!1),()=>s.delete(p))}),o?[Math.random(),u]:[n,u]);return j.useMemo(()=>{s.forEach((p,f)=>s.set(f,!1))},[n]),j.useEffect(()=>{!n&&!s.size&&r&&r()},[n]),a==="popLayout"&&(e=c.jsx(X6,{isPresent:n,children:e})),c.jsx(Sl.Provider,{value:d,children:e})};function Z6(){return new Map}const Ma=e=>e.key||"";function Hm(e){const t=[];return j.Children.forEach(e,n=>{j.isValidElement(n)&&t.push(n)}),t}const J6=({children:e,exitBeforeEnter:t,custom:n,initial:r=!0,onExitComplete:i,presenceAffectsLayout:o=!0,mode:a="sync"})=>{const s=j.useMemo(()=>Hm(e),[e]),l=s.map(Ma),u=j.useRef(!0),d=j.useRef(s),p=Fi(()=>new Map),[f,v]=j.useState(s),[x,y]=j.useState(s);Cl(()=>{u.current=!1,d.current=s;for(let h=0;h<x.length;h++){const m=Ma(x[h]);l.includes(m)?p.delete(m):p.get(m)!==!0&&p.set(m,!1)}},[x,l.length,l.join("-")]);const b=[];if(s!==f){let h=[...s];for(let m=0;m<x.length;m++){const w=x[m],S=Ma(w);l.includes(S)||(h.splice(m,0,w),b.push(w))}a==="wait"&&b.length&&(h=b),y(Hm(h)),v(s);return}const{forceRender:g}=j.useContext(Rp);return c.jsx(c.Fragment,{children:x.map(h=>{const m=Ma(h),w=s===x||l.includes(m),S=()=>{if(p.has(m))p.set(m,!0);else return;let T=!0;p.forEach(P=>{P||(T=!1)}),T&&(g==null||g(),y(d.current),i&&i())};return c.jsx(Q6,{isPresent:w,initial:!u.current||r?void 0:!1,custom:w?void 0:n,presenceAffectsLayout:o,mode:a,onExitComplete:w?void 0:S,children:h},m)})})};function e4(e){const t=Fi(()=>rn(e)),{isStatic:n}=j.useContext(jl);if(n){const[,r]=j.useState(e);j.useEffect(()=>t.on("change",r),[])}return t}function $x(e,t){const n=e4(t()),r=()=>n.set(t());return r(),Cl(()=>{const i=()=>oe.preRender(r,!1,!0),o=e.map(a=>a.on("change",i));return()=>{o.forEach(a=>a()),Zt(r)}}),n}const t4=e=>e&&typeof e=="object"&&e.mix,n4=e=>t4(e)?e.mix:void 0;function r4(...e){const t=!Array.isArray(e[0]),n=t?0:-1,r=e[0+n],i=e[1+n],o=e[2+n],a=e[3+n],s=kp(i,o,{mixer:n4(o[0]),...a});return t?s(r):s}function i4(e){To.current=[],e();const t=$x(To.current,e);return To.current=void 0,t}function qt(e,t,n,r){if(typeof e=="function")return i4(e);const i=typeof t=="function"?t:r4(t,n,r);return Array.isArray(e)?Um(e,i):Um([e],([o])=>i(o))}function Um(e,t){const n=Fi(()=>[]);return $x(e,()=>{n.length=0;const r=e.length;for(let i=0;i<r;i++)n[i]=e[i].get();return t(n)})}function Hx(e,t,n){return typeof e=="string"?e=document.querySelectorAll(e):e instanceof Element&&(e=[e]),Array.from(e||[])}const Ja=new WeakMap;let Vn;function o4(e,t){if(t){const{inlineSize:n,blockSize:r}=t[0];return{width:n,height:r}}else return e instanceof SVGElement&&"getBBox"in e?e.getBBox():{width:e.offsetWidth,height:e.offsetHeight}}function a4({target:e,contentRect:t,borderBoxSize:n}){var r;(r=Ja.get(e))===null||r===void 0||r.forEach(i=>{i({target:e,contentSize:t,get size(){return o4(e,n)}})})}function s4(e){e.forEach(a4)}function l4(){typeof ResizeObserver>"u"||(Vn=new ResizeObserver(s4))}function c4(e,t){Vn||l4();const n=Hx(e);return n.forEach(r=>{let i=Ja.get(r);i||(i=new Set,Ja.set(r,i)),i.add(t),Vn==null||Vn.observe(r)}),()=>{n.forEach(r=>{const i=Ja.get(r);i==null||i.delete(t),i!=null&&i.size||Vn==null||Vn.unobserve(r)})}}const es=new Set;let Eo;function u4(){Eo=()=>{const e={width:window.innerWidth,height:window.innerHeight},t={target:window,size:e,contentSize:e};es.forEach(n=>n(t))},window.addEventListener("resize",Eo)}function d4(e){return es.add(e),Eo||u4(),()=>{es.delete(e),!es.size&&Eo&&(Eo=void 0)}}function p4(e,t){return typeof e=="function"?d4(e):c4(e,t)}const f4=50,Wm=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),h4=()=>({time:0,x:Wm(),y:Wm()}),m4={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function qm(e,t,n,r){const i=n[t],{length:o,position:a}=m4[t],s=i.current,l=n.time;i.current=e[`scroll${a}`],i.scrollLength=e[`scroll${o}`]-e[`client${o}`],i.offset.length=0,i.offset[0]=0,i.offset[1]=i.scrollLength,i.progress=Rr(0,i.scrollLength,i.current);const u=r-l;i.velocity=u>f4?0:Cp(i.current-s,u)}function g4(e,t,n){qm(e,"x",t,n),qm(e,"y",t,n),t.time=n}function v4(e,t){const n={x:0,y:0};let r=e;for(;r&&r!==t;)if(r instanceof HTMLElement)n.x+=r.offsetLeft,n.y+=r.offsetTop,r=r.offsetParent;else if(r.tagName==="svg"){const i=r.getBoundingClientRect();r=r.parentElement;const o=r.getBoundingClientRect();n.x+=i.left-o.left,n.y+=i.top-o.top}else if(r instanceof SVGGraphicsElement){const{x:i,y:o}=r.getBBox();n.x+=i,n.y+=o;let a=null,s=r.parentNode;for(;!a;)s.tagName==="svg"&&(a=s),s=r.parentNode;r=a}else break;return n}const x4={Enter:[[0,1],[1,1]],Exit:[[0,0],[1,0]],Any:[[1,0],[0,1]],All:[[0,0],[1,1]]},Ju={start:0,center:.5,end:1};function Gm(e,t,n=0){let r=0;if(e in Ju&&(e=Ju[e]),typeof e=="string"){const i=parseFloat(e);e.endsWith("px")?r=i:e.endsWith("%")?e=i/100:e.endsWith("vw")?r=i/100*document.documentElement.clientWidth:e.endsWith("vh")?r=i/100*document.documentElement.clientHeight:e=i}return typeof e=="number"&&(r=t*e),n+r}const y4=[0,0];function w4(e,t,n,r){let i=Array.isArray(e)?e:y4,o=0,a=0;return typeof e=="number"?i=[e,e]:typeof e=="string"&&(e=e.trim(),e.includes(" ")?i=e.split(" "):i=[e,Ju[e]?e:"0"]),o=Gm(i[0],n,r),a=Gm(i[1],t),o-a}const b4={x:0,y:0};function S4(e){return"getBBox"in e&&e.tagName!=="svg"?e.getBBox():{width:e.clientWidth,height:e.clientHeight}}function j4(e,t,n){const{offset:r=x4.All}=n,{target:i=e,axis:o="y"}=n,a=o==="y"?"height":"width",s=i!==e?v4(i,e):b4,l=i===e?{width:e.scrollWidth,height:e.scrollHeight}:S4(i),u={width:e.clientWidth,height:e.clientHeight};t[o].offset.length=0;let d=!t[o].interpolate;const p=r.length;for(let f=0;f<p;f++){const v=w4(r[f],u[a],l[a],s[o]);!d&&v!==t[o].interpolatorOffsets[f]&&(d=!0),t[o].offset[f]=v}d&&(t[o].interpolate=kp(t[o].offset,Yv(r)),t[o].interpolatorOffsets=[...t[o].offset]),t[o].progress=t[o].interpolate(t[o].current)}function T4(e,t=e,n){if(n.x.targetOffset=0,n.y.targetOffset=0,t!==e){let r=t;for(;r&&r!==e;)n.x.targetOffset+=r.offsetLeft,n.y.targetOffset+=r.offsetTop,r=r.offsetParent}n.x.targetLength=t===e?t.scrollWidth:t.clientWidth,n.y.targetLength=t===e?t.scrollHeight:t.clientHeight,n.x.containerLength=e.clientWidth,n.y.containerLength=e.clientHeight}function C4(e,t,n,r={}){return{measure:()=>T4(e,r.target,n),update:i=>{g4(e,n,i),(r.offset||r.target)&&j4(e,n,r)},notify:()=>t(n)}}const eo=new WeakMap,Ym=new WeakMap,Pc=new WeakMap,Km=e=>e===document.documentElement?window:e;function Wp(e,{container:t=document.documentElement,...n}={}){let r=Pc.get(t);r||(r=new Set,Pc.set(t,r));const i=h4(),o=C4(t,e,i,n);if(r.add(o),!eo.has(t)){const s=()=>{for(const f of r)f.measure()},l=()=>{for(const f of r)f.update(Re.timestamp)},u=()=>{for(const f of r)f.notify()},d=()=>{oe.read(s,!1,!0),oe.read(l,!1,!0),oe.update(u,!1,!0)};eo.set(t,d);const p=Km(t);window.addEventListener("resize",d,{passive:!0}),t!==document.documentElement&&Ym.set(t,p4(t,d)),p.addEventListener("scroll",d,{passive:!0})}const a=eo.get(t);return oe.read(a,!1,!0),()=>{var s;Zt(a);const l=Pc.get(t);if(!l||(l.delete(o),l.size))return;const u=eo.get(t);eo.delete(t),u&&(Km(t).removeEventListener("scroll",u),(s=Ym.get(t))===null||s===void 0||s(),window.removeEventListener("resize",u))}}function Ux(e,t){let n;const r=()=>{const{currentTime:i}=t,a=(i===null?0:i.value)/100;n!==a&&e(a),n=a};return oe.update(r,!0),()=>Zt(r)}function P4({source:e,container:t,axis:n="y"}){e&&(t=e);const r={value:0},i=Wp(o=>{r.value=o[n].progress*100},{container:t,axis:n});return{currentTime:r,cancel:i}}const Ec=new Map;function Wx({source:e,container:t=document.documentElement,axis:n="y"}={}){e&&(t=e),Ec.has(t)||Ec.set(t,{});const r=Ec.get(t);return r[n]||(r[n]=Zv()?new ScrollTimeline({source:t,axis:n}):P4({source:t,axis:n})),r[n]}function E4(e){return e.length===2}function qx(e){return e&&(e.target||e.offset)}function k4(e,t){return E4(e)||qx(t)?Wp(n=>{e(n[t.axis].progress,n)},t):Ux(e,Wx(t))}function z4(e,t){if(qx(t))return e.pause(),Wp(n=>{e.time=e.duration*n[t.axis].progress},t);{const n=Wx(t);return e.attachTimeline(n,r=>(r.pause(),Ux(i=>{r.time=r.duration*i},n)))}}function A4(e,{axis:t="y",...n}={}){const r={axis:t,...n};return typeof e=="function"?k4(e,r):z4(e,r)}function Xm(e,t){U3(!!(!t||t.current))}const L4=()=>({scrollX:rn(0),scrollY:rn(0),scrollXProgress:rn(0),scrollYProgress:rn(0)});function qp({container:e,target:t,layoutEffect:n=!0,...r}={}){const i=Fi(L4);return(n?Cl:j.useEffect)(()=>(Xm("target",t),Xm("container",e),A4((a,{x:s,y:l})=>{i.scrollX.set(s.current),i.scrollXProgress.set(s.progress),i.scrollY.set(l.current),i.scrollYProgress.set(l.progress)},{...r,container:(e==null?void 0:e.current)||void 0,target:(t==null?void 0:t.current)||void 0})),[e,t,JSON.stringify(r.offset)]),i}const M4={some:0,all:1};function _4(e,t,{root:n,margin:r,amount:i="some"}={}){const o=Hx(e),a=new WeakMap,s=u=>{u.forEach(d=>{const p=a.get(d.target);if(d.isIntersecting!==!!p)if(d.isIntersecting){const f=t(d);typeof f=="function"?a.set(d.target,f):l.unobserve(d.target)}else p&&(p(d),a.delete(d.target))})},l=new IntersectionObserver(s,{root:n,rootMargin:r,threshold:typeof i=="number"?i:M4[i]});return o.forEach(u=>l.observe(u)),()=>l.disconnect()}function Gx(e,{root:t,margin:n,amount:r,once:i=!1}={}){const[o,a]=j.useState(!1);return j.useEffect(()=>{if(!e.current||i&&o)return;const s=()=>(a(!0),i?void 0:()=>a(!1)),l={root:t&&t.current||void 0,margin:n,amount:r};return _4(e.current,s,l)},[t,e,n,i,r]),o}var Yx={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Qm=K.createContext&&K.createContext(Yx),O4=["attr","size","title"];function I4(e,t){if(e==null)return{};var n=R4(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function R4(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function Fs(){return Fs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Fs.apply(this,arguments)}function Zm(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function $s(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Zm(Object(n),!0).forEach(function(r){V4(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Zm(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function V4(e,t,n){return t=D4(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function D4(e){var t=N4(e,"string");return typeof t=="symbol"?t:t+""}function N4(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Kx(e){return e&&e.map((t,n)=>K.createElement(t.tag,$s({key:n},t.attr),Kx(t.child)))}function X(e){return t=>K.createElement(B4,Fs({attr:$s({},e.attr)},t),Kx(e.child))}function B4(e){var t=n=>{var{attr:r,size:i,title:o}=e,a=I4(e,O4),s=i||n.size||"1em",l;return n.className&&(l=n.className),e.className&&(l=(l?l+" ":"")+e.className),K.createElement("svg",Fs({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,a,{className:l,style:$s($s({color:e.color||n.color},n.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),o&&K.createElement("title",null,o),e.children)};return Qm!==void 0?K.createElement(Qm.Consumer,null,n=>t(n)):t(Yx)}function Jm(e){return X({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M12.971 352h32.394C67.172 454.735 181.944 512 288 512c106.229 0 220.853-57.38 242.635-160h32.394c10.691 0 16.045-12.926 8.485-20.485l-67.029-67.029c-4.686-4.686-12.284-4.686-16.971 0l-67.029 67.029c-7.56 7.56-2.206 20.485 8.485 20.485h35.146c-20.29 54.317-84.963 86.588-144.117 94.015V256h52c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-52v-5.47c37.281-13.178 63.995-48.725 64-90.518C384.005 43.772 341.605.738 289.37.01 235.723-.739 192 42.525 192 96c0 41.798 26.716 77.35 64 90.53V192h-52c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h52v190.015c-58.936-7.399-123.82-39.679-144.117-94.015h35.146c10.691 0 16.045-12.926 8.485-20.485l-67.029-67.029c-4.686-4.686-12.284-4.686-16.971 0L4.485 331.515C-3.074 339.074 2.28 352 12.971 352zM288 64c17.645 0 32 14.355 32 32s-14.355 32-32 32-32-14.355-32-32 14.355-32 32-32z"},child:[]}]})(e)}function Gp(e){return X({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"},child:[]}]})(e)}function Ce(e){return X({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M32,384a95.4,95.4,0,0,0,32,71.09V496a16,16,0,0,0,16,16h32a16,16,0,0,0,16-16V480H384v16a16,16,0,0,0,16,16h32a16,16,0,0,0,16-16V455.09A95.4,95.4,0,0,0,480,384V336H32ZM496,256H80V69.25a21.26,21.26,0,0,1,36.28-15l19.27,19.26c-13.13,29.88-7.61,59.11,8.62,79.73l-.17.17A16,16,0,0,0,144,176l11.31,11.31a16,16,0,0,0,22.63,0L283.31,81.94a16,16,0,0,0,0-22.63L272,48a16,16,0,0,0-22.62,0l-.17.17c-20.62-16.23-49.83-21.75-79.73-8.62L150.22,20.28A69.25,69.25,0,0,0,32,69.25V256H16A16,16,0,0,0,0,272v16a16,16,0,0,0,16,16H496a16,16,0,0,0,16-16V272A16,16,0,0,0,496,256Z"},child:[]}]})(e)}function ze(e){return X({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M176 256c44.11 0 80-35.89 80-80s-35.89-80-80-80-80 35.89-80 80 35.89 80 80 80zm352-128H304c-8.84 0-16 7.16-16 16v144H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v352c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16v-48h512v48c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V240c0-61.86-50.14-112-112-112z"},child:[]}]})(e)}function e0(e){return X({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M12 192h424c6.6 0 12 5.4 12 12v260c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V204c0-6.6 5.4-12 12-12zm436-44v-36c0-26.5-21.5-48-48-48h-48V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H160V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v36c0 6.6 5.4 12 12 12h424c6.6 0 12-5.4 12-12z"},child:[]}]})(e)}function t0(e){return X({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"},child:[]}]})(e)}function ie(e){return X({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M510.5 225.5c-6.9-37.2-39.3-65.5-78.5-65.5-12.3 0-23.9 3-34.3 8-17.4-24.1-45.6-40-77.7-40-53 0-96 43-96 96 0 .5.2 1.1.2 1.6C187.6 233 160 265.2 160 304c0 44.2 35.8 80 80 80h256c44.2 0 80-35.8 80-80 0-39.2-28.2-71.7-65.5-78.5zm-386.4 34.4c-37.4-37.4-37.4-98.3 0-135.8 34.6-34.6 89.1-36.8 126.7-7.4 20-12.9 43.6-20.7 69.2-20.7.7 0 1.3.2 2 .2l8.9-26.7c3.4-10.2-6.3-19.8-16.5-16.4l-75.3 25.1-35.5-71c-4.8-9.6-18.5-9.6-23.3 0l-35.5 71-75.3-25.1c-10.2-3.4-19.8 6.3-16.4 16.5l25.1 75.3-71 35.5c-9.6 4.8-9.6 18.5 0 23.3l71 35.5-25.1 75.3c-3.4 10.2 6.3 19.8 16.5 16.5l59.2-19.7c-.2-2.4-.7-4.7-.7-7.2 0-12.5 2.3-24.5 6.2-35.9-3.6-2.7-7.1-5.2-10.2-8.3zm69.8-58c4.3-24.5 15.8-46.4 31.9-64-9.8-6.2-21.4-9.9-33.8-9.9-35.3 0-64 28.7-64 64 0 18.7 8.2 35.4 21.1 47.1 11.3-15.9 26.6-28.9 44.8-37.2zm330.6 216.2c-7.6-4.3-17.4-1.8-21.8 6l-36.6 64c-4.4 7.7-1.7 17.4 6 21.8 2.5 1.4 5.2 2.1 7.9 2.1 5.5 0 10.9-2.9 13.9-8.1l36.6-64c4.3-7.7 1.7-17.4-6-21.8zm-96 0c-7.6-4.3-17.4-1.8-21.8 6l-36.6 64c-4.4 7.7-1.7 17.4 6 21.8 2.5 1.4 5.2 2.1 7.9 2.1 5.5 0 10.9-2.9 13.9-8.1l36.6-64c4.3-7.7 1.7-17.4-6-21.8zm-96 0c-7.6-4.3-17.4-1.8-21.8 6l-36.6 64c-4.4 7.7-1.7 17.4 6 21.8 2.5 1.4 5.2 2.1 7.9 2.1 5.5 0 10.9-2.9 13.9-8.1l36.6-64c4.3-7.7 1.7-17.4-6-21.8zm-96 0c-7.6-4.3-17.4-1.8-21.8 6l-36.6 64c-4.4 7.7-1.7 17.4 6 21.8 2.5 1.4 5.2 2.1 7.9 2.1 5.5 0 10.9-2.9 13.9-8.1l36.6-64c4.3-7.7 1.7-17.4-6-21.8z"},child:[]}]})(e)}function xe(e){return X({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M216 23.86c0-23.8-30.65-32.77-44.15-13.04C48 191.85 224 200 224 288c0 35.63-29.11 64.46-64.85 63.99-35.17-.45-63.15-29.77-63.15-64.94v-85.51c0-21.7-26.47-32.23-41.43-16.5C27.8 213.16 0 261.33 0 320c0 105.87 86.13 192 192 192s192-86.13 192-192c0-170.29-168-193-168-296.14z"},child:[]}]})(e)}function n0(e){return X({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"},child:[]}]})(e)}function r0(e){return X({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"},child:[]}]})(e)}function i0(e){return X({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M634.92 462.7l-288-448C341.03 5.54 330.89 0 320 0s-21.03 5.54-26.92 14.7l-288 448a32.001 32.001 0 0 0-1.17 32.64A32.004 32.004 0 0 0 32 512h576c11.71 0 22.48-6.39 28.09-16.67a31.983 31.983 0 0 0-1.17-32.63zM320 91.18L405.39 224H320l-64 64-38.06-38.06L320 91.18z"},child:[]}]})(e)}function Tn(e){return X({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M470.38 1.51L150.41 96A32 32 0 0 0 128 126.51v261.41A139 139 0 0 0 96 384c-53 0-96 28.66-96 64s43 64 96 64 96-28.66 96-64V214.32l256-75v184.61a138.4 138.4 0 0 0-32-3.93c-53 0-96 28.66-96 64s43 64 96 64 96-28.65 96-64V32a32 32 0 0 0-41.62-30.49z"},child:[]}]})(e)}function Fe(e){return X({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 224c-79.41 0-192 122.76-192 200.25 0 34.9 26.81 55.75 71.74 55.75 48.84 0 81.09-25.08 120.26-25.08 39.51 0 71.85 25.08 120.26 25.08 44.93 0 71.74-20.85 71.74-55.75C448 346.76 335.41 224 256 224zm-147.28-12.61c-10.4-34.65-42.44-57.09-71.56-50.13-29.12 6.96-44.29 40.69-33.89 75.34 10.4 34.65 42.44 57.09 71.56 50.13 29.12-6.96 44.29-40.69 33.89-75.34zm84.72-20.78c30.94-8.14 46.42-49.94 34.58-93.36s-46.52-72.01-77.46-63.87-46.42 49.94-34.58 93.36c11.84 43.42 46.53 72.02 77.46 63.87zm281.39-29.34c-29.12-6.96-61.15 15.48-71.56 50.13-10.4 34.65 4.77 68.38 33.89 75.34 29.12 6.96 61.15-15.48 71.56-50.13 10.4-34.65-4.77-68.38-33.89-75.34zm-156.27 29.34c30.94 8.14 65.62-20.45 77.46-63.87 11.84-43.42-3.64-85.21-34.58-93.36s-65.62 20.45-77.46 63.87c-11.84 43.42 3.64 85.22 34.58 93.36z"},child:[]}]})(e)}function to(e){return X({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M160 288h-56c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h56v-64h-56c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h56V96h-56c-4.42 0-8-3.58-8-8V72c0-4.42 3.58-8 8-8h56V32c0-17.67-14.33-32-32-32H32C14.33 0 0 14.33 0 32v448c0 2.77.91 5.24 1.57 7.8L160 329.38V288zm320 64h-32v56c0 4.42-3.58 8-8 8h-16c-4.42 0-8-3.58-8-8v-56h-64v56c0 4.42-3.58 8-8 8h-16c-4.42 0-8-3.58-8-8v-56h-64v56c0 4.42-3.58 8-8 8h-16c-4.42 0-8-3.58-8-8v-56h-41.37L24.2 510.43c2.56.66 5.04 1.57 7.8 1.57h448c17.67 0 32-14.33 32-32v-96c0-17.67-14.33-32-32-32z"},child:[]}]})(e)}function Ve(e){return X({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M304,320a16,16,0,1,0,16,16A16,16,0,0,0,304,320Zm32-96a16,16,0,1,0,16,16A16,16,0,0,0,336,224Zm32,64a16,16,0,1,0-16-16A16,16,0,0,0,368,288Zm-32,32a16,16,0,1,0-16-16A16,16,0,0,0,336,320Zm-32-64a16,16,0,1,0,16,16A16,16,0,0,0,304,256Zm128-32a16,16,0,1,0-16-16A16,16,0,0,0,432,224Zm-48,16a16,16,0,1,0,16-16A16,16,0,0,0,384,240Zm-16-48a16,16,0,1,0,16,16A16,16,0,0,0,368,192Zm96,32a16,16,0,1,0,16,16A16,16,0,0,0,464,224Zm32-32a16,16,0,1,0,16,16A16,16,0,0,0,496,192Zm-64,64a16,16,0,1,0,16,16A16,16,0,0,0,432,256Zm-32,32a16,16,0,1,0,16,16A16,16,0,0,0,400,288Zm-64,64a16,16,0,1,0,16,16A16,16,0,0,0,336,352Zm-32,32a16,16,0,1,0,16,16A16,16,0,0,0,304,384Zm64-64a16,16,0,1,0,16,16A16,16,0,0,0,368,320Zm21.65-218.35-11.3-11.31a16,16,0,0,0-22.63,0L350.05,96A111.19,111.19,0,0,0,272,64c-19.24,0-37.08,5.3-52.9,13.85l-10-10A121.72,121.72,0,0,0,123.44,32C55.49,31.5,0,92.91,0,160.85V464a16,16,0,0,0,16,16H48a16,16,0,0,0,16-16V158.4c0-30.15,21-58.2,51-61.93a58.38,58.38,0,0,1,48.93,16.67l10,10C165.3,138.92,160,156.76,160,176a111.23,111.23,0,0,0,32,78.05l-5.66,5.67a16,16,0,0,0,0,22.62l11.3,11.31a16,16,0,0,0,22.63,0L389.65,124.28A16,16,0,0,0,389.65,101.65Z"},child:[]}]})(e)}function no(e){return X({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M440.3 345.2l-33.8-19.5 26-7c8.2-2.2 13.1-10.7 10.9-18.9l-4-14.9c-2.2-8.2-10.7-13.1-18.9-10.9l-70.8 19-63.9-37 63.8-36.9 70.8 19c8.2 2.2 16.7-2.7 18.9-10.9l4-14.9c2.2-8.2-2.7-16.7-10.9-18.9l-26-7 33.8-19.5c7.4-4.3 9.9-13.7 5.7-21.1L430.4 119c-4.3-7.4-13.7-9.9-21.1-5.7l-33.8 19.5 7-26c2.2-8.2-2.7-16.7-10.9-18.9l-14.9-4c-8.2-2.2-16.7 2.7-18.9 10.9l-19 70.8-62.8 36.2v-77.5l53.7-53.7c6.2-6.2 6.2-16.4 0-22.6l-11.3-11.3c-6.2-6.2-16.4-6.2-22.6 0L256 56.4V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v40.4l-19.7-19.7c-6.2-6.2-16.4-6.2-22.6 0L138.3 48c-6.3 6.2-6.3 16.4 0 22.6l53.7 53.7v77.5l-62.8-36.2-19-70.8c-2.2-8.2-10.7-13.1-18.9-10.9l-14.9 4c-8.2 2.2-13.1 10.7-10.9 18.9l7 26-33.8-19.5c-7.4-4.3-16.8-1.7-21.1 5.7L2.1 145.7c-4.3 7.4-1.7 16.8 5.7 21.1l33.8 19.5-26 7c-8.3 2.2-13.2 10.7-11 19l4 14.9c2.2 8.2 10.7 13.1 18.9 10.9l70.8-19 63.8 36.9-63.8 36.9-70.8-19c-8.2-2.2-16.7 2.7-18.9 10.9l-4 14.9c-2.2 8.2 2.7 16.7 10.9 18.9l26 7-33.8 19.6c-7.4 4.3-9.9 13.7-5.7 21.1l15.5 26.8c4.3 7.4 13.7 9.9 21.1 5.7l33.8-19.5-7 26c-2.2 8.2 2.7 16.7 10.9 18.9l14.9 4c8.2 2.2 16.7-2.7 18.9-10.9l19-70.8 62.8-36.2v77.5l-53.7 53.7c-6.3 6.2-6.3 16.4 0 22.6l11.3 11.3c6.2 6.2 16.4 6.2 22.6 0l19.7-19.7V496c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-40.4l19.7 19.7c6.2 6.2 16.4 6.2 22.6 0l11.3-11.3c6.2-6.2 6.2-16.4 0-22.6L256 387.7v-77.5l62.8 36.2 19 70.8c2.2 8.2 10.7 13.1 18.9 10.9l14.9-4c8.2-2.2 13.1-10.7 10.9-18.9l-7-26 33.8 19.5c7.4 4.3 16.8 1.7 21.1-5.7l15.5-26.8c4.3-7.3 1.8-16.8-5.6-21z"},child:[]}]})(e)}function ke(e){return X({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M592 0H48A48 48 0 0 0 0 48v320a48 48 0 0 0 48 48h240v32H112a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16H352v-32h240a48 48 0 0 0 48-48V48a48 48 0 0 0-48-48zm-16 352H64V64h512z"},child:[]}]})(e)}function O(e){return X({tag:"svg",attr:{viewBox:"0 0 416 512"},child:[{tag:"path",attr:{d:"M207.9 15.2c.8 4.7 16.1 94.5 16.1 128.8 0 52.3-27.8 89.6-68.9 104.6L168 486.7c.7 13.7-10.2 25.3-24 25.3H80c-13.7 0-24.7-11.5-24-25.3l12.9-238.1C27.7 233.6 0 196.2 0 144 0 109.6 15.3 19.9 16.1 15.2 19.3-5.1 61.4-5.4 64 16.3v141.2c1.3 3.4 15.1 3.2 16 0 1.4-25.3 7.9-139.2 8-141.8 3.3-20.8 44.7-20.8 47.9 0 .2 2.7 6.6 116.5 8 141.8.9 3.2 14.8 3.4 16 0V16.3c2.6-21.6 44.8-21.4 48-1.1zm119.2 285.7l-15 185.1c-1.2 14 9.9 26 23.9 26h56c13.3 0 24-10.7 24-24V24c0-13.2-10.7-24-24-24-82.5 0-221.4 178.5-64.9 300.9z"},child:[]}]})(e)}var Xx={exports:{}},F4="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",$4=F4,H4=$4;function Qx(){}function Zx(){}Zx.resetWarningCache=Qx;var U4=function(){function e(r,i,o,a,s,l){if(l!==H4){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Zx,resetWarningCache:Qx};return n.PropTypes=n,n};Xx.exports=U4();var W4=Xx.exports;const ge=Ri(W4);function q4(e){return e&&typeof e=="object"&&"default"in e?e.default:e}var Jx=j,G4=q4(Jx);function o0(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Y4(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var K4=!!(typeof window<"u"&&window.document&&window.document.createElement);function X4(e,t,n){if(typeof e!="function")throw new Error("Expected reducePropsToState to be a function.");if(typeof t!="function")throw new Error("Expected handleStateChangeOnClient to be a function.");if(typeof n<"u"&&typeof n!="function")throw new Error("Expected mapStateOnServer to either be undefined or a function.");function r(i){return i.displayName||i.name||"Component"}return function(o){if(typeof o!="function")throw new Error("Expected WrappedComponent to be a React component.");var a=[],s;function l(){s=e(a.map(function(d){return d.props})),u.canUseDOM?t(s):n&&(s=n(s))}var u=function(d){Y4(p,d);function p(){return d.apply(this,arguments)||this}p.peek=function(){return s},p.rewind=function(){if(p.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var x=s;return s=void 0,a=[],x};var f=p.prototype;return f.UNSAFE_componentWillMount=function(){a.push(this),l()},f.componentDidUpdate=function(){l()},f.componentWillUnmount=function(){var x=a.indexOf(this);a.splice(x,1),l()},f.render=function(){return G4.createElement(o,this.props)},p}(Jx.PureComponent);return o0(u,"displayName","SideEffect("+r(o)+")"),o0(u,"canUseDOM",K4),u}}var Q4=X4;const Z4=Ri(Q4);var J4=typeof Element<"u",ej=typeof Map=="function",tj=typeof Set=="function",nj=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function ts(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var n,r,i;if(Array.isArray(e)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!==0;)if(!ts(e[r],t[r]))return!1;return!0}var o;if(ej&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(o=e.entries();!(r=o.next()).done;)if(!t.has(r.value[0]))return!1;for(o=e.entries();!(r=o.next()).done;)if(!ts(r.value[1],t.get(r.value[0])))return!1;return!0}if(tj&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(o=e.entries();!(r=o.next()).done;)if(!t.has(r.value[0]))return!1;return!0}if(nj&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!==0;)if(e[r]!==t[r])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf&&typeof e.valueOf=="function"&&typeof t.valueOf=="function")return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString&&typeof e.toString=="function"&&typeof t.toString=="function")return e.toString()===t.toString();if(i=Object.keys(e),n=i.length,n!==Object.keys(t).length)return!1;for(r=n;r--!==0;)if(!Object.prototype.hasOwnProperty.call(t,i[r]))return!1;if(J4&&e instanceof Element)return!1;for(r=n;r--!==0;)if(!((i[r]==="_owner"||i[r]==="__v"||i[r]==="__o")&&e.$$typeof)&&!ts(e[i[r]],t[i[r]]))return!1;return!0}return e!==e&&t!==t}var rj=function(t,n){try{return ts(t,n)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}};const ij=Ri(rj);/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var a0=Object.getOwnPropertySymbols,oj=Object.prototype.hasOwnProperty,aj=Object.prototype.propertyIsEnumerable;function sj(e){if(e==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function lj(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de",Object.getOwnPropertyNames(e)[0]==="5")return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map(function(o){return t[o]});if(r.join("")!=="0123456789")return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach(function(o){i[o]=o}),Object.keys(Object.assign({},i)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var cj=lj()?Object.assign:function(e,t){for(var n,r=sj(e),i,o=1;o<arguments.length;o++){n=Object(arguments[o]);for(var a in n)oj.call(n,a)&&(r[a]=n[a]);if(a0){i=a0(n);for(var s=0;s<i.length;s++)aj.call(n,i[s])&&(r[i[s]]=n[i[s]])}}return r};const uj=Ri(cj);var zr={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},Y={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"};Object.keys(Y).map(function(e){return Y[e]});var ve={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src",TARGET:"target"},Hs={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},Zo={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},dj=Object.keys(Hs).reduce(function(e,t){return e[Hs[t]]=t,e},{}),pj=[Y.NOSCRIPT,Y.SCRIPT,Y.STYLE],Gt="data-react-helmet",fj=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},hj=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},mj=function(){function e(t,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),at=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},gj=function(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},s0=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},vj=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e},ed=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return n===!1?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},xj=function(t){var n=xi(t,Y.TITLE),r=xi(t,Zo.TITLE_TEMPLATE);if(r&&n)return r.replace(/%s/g,function(){return Array.isArray(n)?n.join(""):n});var i=xi(t,Zo.DEFAULT_TITLE);return n||i||void 0},yj=function(t){return xi(t,Zo.ON_CHANGE_CLIENT_STATE)||function(){}},kc=function(t,n){return n.filter(function(r){return typeof r[t]<"u"}).map(function(r){return r[t]}).reduce(function(r,i){return at({},r,i)},{})},wj=function(t,n){return n.filter(function(r){return typeof r[Y.BASE]<"u"}).map(function(r){return r[Y.BASE]}).reverse().reduce(function(r,i){if(!r.length)for(var o=Object.keys(i),a=0;a<o.length;a++){var s=o[a],l=s.toLowerCase();if(t.indexOf(l)!==-1&&i[l])return r.concat(i)}return r},[])},ro=function(t,n,r){var i={};return r.filter(function(o){return Array.isArray(o[t])?!0:(typeof o[t]<"u"&&Tj("Helmet: "+t+' should be of type "Array". Instead found type "'+fj(o[t])+'"'),!1)}).map(function(o){return o[t]}).reverse().reduce(function(o,a){var s={};a.filter(function(f){for(var v=void 0,x=Object.keys(f),y=0;y<x.length;y++){var b=x[y],g=b.toLowerCase();n.indexOf(g)!==-1&&!(v===ve.REL&&f[v].toLowerCase()==="canonical")&&!(g===ve.REL&&f[g].toLowerCase()==="stylesheet")&&(v=g),n.indexOf(b)!==-1&&(b===ve.INNER_HTML||b===ve.CSS_TEXT||b===ve.ITEM_PROP)&&(v=b)}if(!v||!f[v])return!1;var h=f[v].toLowerCase();return i[v]||(i[v]={}),s[v]||(s[v]={}),i[v][h]?!1:(s[v][h]=!0,!0)}).reverse().forEach(function(f){return o.push(f)});for(var l=Object.keys(s),u=0;u<l.length;u++){var d=l[u],p=uj({},i[d],s[d]);i[d]=p}return o},[]).reverse()},xi=function(t,n){for(var r=t.length-1;r>=0;r--){var i=t[r];if(i.hasOwnProperty(n))return i[n]}return null},bj=function(t){return{baseTag:wj([ve.HREF,ve.TARGET],t),bodyAttributes:kc(zr.BODY,t),defer:xi(t,Zo.DEFER),encode:xi(t,Zo.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:kc(zr.HTML,t),linkTags:ro(Y.LINK,[ve.REL,ve.HREF],t),metaTags:ro(Y.META,[ve.NAME,ve.CHARSET,ve.HTTPEQUIV,ve.PROPERTY,ve.ITEM_PROP],t),noscriptTags:ro(Y.NOSCRIPT,[ve.INNER_HTML],t),onChangeClientState:yj(t),scriptTags:ro(Y.SCRIPT,[ve.SRC,ve.INNER_HTML],t),styleTags:ro(Y.STYLE,[ve.CSS_TEXT],t),title:xj(t),titleAttributes:kc(zr.TITLE,t)}},td=function(){var e=Date.now();return function(t){var n=Date.now();n-e>16?(e=n,t(n)):setTimeout(function(){td(t)},0)}}(),l0=function(t){return clearTimeout(t)},Sj=typeof window<"u"?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||td:global.requestAnimationFrame||td,jj=typeof window<"u"?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||l0:global.cancelAnimationFrame||l0,Tj=function(t){return console&&typeof console.warn=="function"&&console.warn(t)},io=null,Cj=function(t){io&&jj(io),t.defer?io=Sj(function(){c0(t,function(){io=null})}):(c0(t),io=null)},c0=function(t,n){var r=t.baseTag,i=t.bodyAttributes,o=t.htmlAttributes,a=t.linkTags,s=t.metaTags,l=t.noscriptTags,u=t.onChangeClientState,d=t.scriptTags,p=t.styleTags,f=t.title,v=t.titleAttributes;nd(Y.BODY,i),nd(Y.HTML,o),Pj(f,v);var x={baseTag:Wr(Y.BASE,r),linkTags:Wr(Y.LINK,a),metaTags:Wr(Y.META,s),noscriptTags:Wr(Y.NOSCRIPT,l),scriptTags:Wr(Y.SCRIPT,d),styleTags:Wr(Y.STYLE,p)},y={},b={};Object.keys(x).forEach(function(g){var h=x[g],m=h.newTags,w=h.oldTags;m.length&&(y[g]=m),w.length&&(b[g]=x[g].oldTags)}),n&&n(),u(t,y,b)},ey=function(t){return Array.isArray(t)?t.join(""):t},Pj=function(t,n){typeof t<"u"&&document.title!==t&&(document.title=ey(t)),nd(Y.TITLE,n)},nd=function(t,n){var r=document.getElementsByTagName(t)[0];if(r){for(var i=r.getAttribute(Gt),o=i?i.split(","):[],a=[].concat(o),s=Object.keys(n),l=0;l<s.length;l++){var u=s[l],d=n[u]||"";r.getAttribute(u)!==d&&r.setAttribute(u,d),o.indexOf(u)===-1&&o.push(u);var p=a.indexOf(u);p!==-1&&a.splice(p,1)}for(var f=a.length-1;f>=0;f--)r.removeAttribute(a[f]);o.length===a.length?r.removeAttribute(Gt):r.getAttribute(Gt)!==s.join(",")&&r.setAttribute(Gt,s.join(","))}},Wr=function(t,n){var r=document.head||document.querySelector(Y.HEAD),i=r.querySelectorAll(t+"["+Gt+"]"),o=Array.prototype.slice.call(i),a=[],s=void 0;return n&&n.length&&n.forEach(function(l){var u=document.createElement(t);for(var d in l)if(l.hasOwnProperty(d))if(d===ve.INNER_HTML)u.innerHTML=l.innerHTML;else if(d===ve.CSS_TEXT)u.styleSheet?u.styleSheet.cssText=l.cssText:u.appendChild(document.createTextNode(l.cssText));else{var p=typeof l[d]>"u"?"":l[d];u.setAttribute(d,p)}u.setAttribute(Gt,"true"),o.some(function(f,v){return s=v,u.isEqualNode(f)})?o.splice(s,1):a.push(u)}),o.forEach(function(l){return l.parentNode.removeChild(l)}),a.forEach(function(l){return r.appendChild(l)}),{oldTags:o,newTags:a}},ty=function(t){return Object.keys(t).reduce(function(n,r){var i=typeof t[r]<"u"?r+'="'+t[r]+'"':""+r;return n?n+" "+i:i},"")},Ej=function(t,n,r,i){var o=ty(r),a=ey(n);return o?"<"+t+" "+Gt+'="true" '+o+">"+ed(a,i)+"</"+t+">":"<"+t+" "+Gt+'="true">'+ed(a,i)+"</"+t+">"},kj=function(t,n,r){return n.reduce(function(i,o){var a=Object.keys(o).filter(function(u){return!(u===ve.INNER_HTML||u===ve.CSS_TEXT)}).reduce(function(u,d){var p=typeof o[d]>"u"?d:d+'="'+ed(o[d],r)+'"';return u?u+" "+p:p},""),s=o.innerHTML||o.cssText||"",l=pj.indexOf(t)===-1;return i+"<"+t+" "+Gt+'="true" '+a+(l?"/>":">"+s+"</"+t+">")},"")},ny=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Object.keys(t).reduce(function(r,i){return r[Hs[i]||i]=t[i],r},n)},zj=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Object.keys(t).reduce(function(r,i){return r[dj[i]||i]=t[i],r},n)},Aj=function(t,n,r){var i,o=(i={key:n},i[Gt]=!0,i),a=ny(r,o);return[K.createElement(Y.TITLE,a,n)]},Lj=function(t,n){return n.map(function(r,i){var o,a=(o={key:i},o[Gt]=!0,o);return Object.keys(r).forEach(function(s){var l=Hs[s]||s;if(l===ve.INNER_HTML||l===ve.CSS_TEXT){var u=r.innerHTML||r.cssText;a.dangerouslySetInnerHTML={__html:u}}else a[l]=r[s]}),K.createElement(t,a)})},dn=function(t,n,r){switch(t){case Y.TITLE:return{toComponent:function(){return Aj(t,n.title,n.titleAttributes)},toString:function(){return Ej(t,n.title,n.titleAttributes,r)}};case zr.BODY:case zr.HTML:return{toComponent:function(){return ny(n)},toString:function(){return ty(n)}};default:return{toComponent:function(){return Lj(t,n)},toString:function(){return kj(t,n,r)}}}},ry=function(t){var n=t.baseTag,r=t.bodyAttributes,i=t.encode,o=t.htmlAttributes,a=t.linkTags,s=t.metaTags,l=t.noscriptTags,u=t.scriptTags,d=t.styleTags,p=t.title,f=p===void 0?"":p,v=t.titleAttributes;return{base:dn(Y.BASE,n,i),bodyAttributes:dn(zr.BODY,r,i),htmlAttributes:dn(zr.HTML,o,i),link:dn(Y.LINK,a,i),meta:dn(Y.META,s,i),noscript:dn(Y.NOSCRIPT,l,i),script:dn(Y.SCRIPT,u,i),style:dn(Y.STYLE,d,i),title:dn(Y.TITLE,{title:f,titleAttributes:v},i)}},Mj=function(t){var n,r;return r=n=function(i){gj(o,i);function o(){return hj(this,o),vj(this,i.apply(this,arguments))}return o.prototype.shouldComponentUpdate=function(s){return!ij(this.props,s)},o.prototype.mapNestedChildrenToProps=function(s,l){if(!l)return null;switch(s.type){case Y.SCRIPT:case Y.NOSCRIPT:return{innerHTML:l};case Y.STYLE:return{cssText:l}}throw new Error("<"+s.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},o.prototype.flattenArrayTypeChildren=function(s){var l,u=s.child,d=s.arrayTypeChildren,p=s.newChildProps,f=s.nestedChildren;return at({},d,(l={},l[u.type]=[].concat(d[u.type]||[],[at({},p,this.mapNestedChildrenToProps(u,f))]),l))},o.prototype.mapObjectTypeChildren=function(s){var l,u,d=s.child,p=s.newProps,f=s.newChildProps,v=s.nestedChildren;switch(d.type){case Y.TITLE:return at({},p,(l={},l[d.type]=v,l.titleAttributes=at({},f),l));case Y.BODY:return at({},p,{bodyAttributes:at({},f)});case Y.HTML:return at({},p,{htmlAttributes:at({},f)})}return at({},p,(u={},u[d.type]=at({},f),u))},o.prototype.mapArrayTypeChildrenToProps=function(s,l){var u=at({},l);return Object.keys(s).forEach(function(d){var p;u=at({},u,(p={},p[d]=s[d],p))}),u},o.prototype.warnOnInvalidChildren=function(s,l){return!0},o.prototype.mapChildrenToProps=function(s,l){var u=this,d={};return K.Children.forEach(s,function(p){if(!(!p||!p.props)){var f=p.props,v=f.children,x=s0(f,["children"]),y=zj(x);switch(u.warnOnInvalidChildren(p,v),p.type){case Y.LINK:case Y.META:case Y.NOSCRIPT:case Y.SCRIPT:case Y.STYLE:d=u.flattenArrayTypeChildren({child:p,arrayTypeChildren:d,newChildProps:y,nestedChildren:v});break;default:l=u.mapObjectTypeChildren({child:p,newProps:l,newChildProps:y,nestedChildren:v});break}}}),l=this.mapArrayTypeChildrenToProps(d,l),l},o.prototype.render=function(){var s=this.props,l=s.children,u=s0(s,["children"]),d=at({},u);return l&&(d=this.mapChildrenToProps(l,d)),K.createElement(t,d)},mj(o,null,[{key:"canUseDOM",set:function(s){t.canUseDOM=s}}]),o}(K.Component),n.propTypes={base:ge.object,bodyAttributes:ge.object,children:ge.oneOfType([ge.arrayOf(ge.node),ge.node]),defaultTitle:ge.string,defer:ge.bool,encodeSpecialCharacters:ge.bool,htmlAttributes:ge.object,link:ge.arrayOf(ge.object),meta:ge.arrayOf(ge.object),noscript:ge.arrayOf(ge.object),onChangeClientState:ge.func,script:ge.arrayOf(ge.object),style:ge.arrayOf(ge.object),title:ge.string,titleAttributes:ge.object,titleTemplate:ge.string},n.defaultProps={defer:!0,encodeSpecialCharacters:!0},n.peek=t.peek,n.rewind=function(){var i=t.rewind();return i||(i=ry({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),i},r},_j=function(){return null},Oj=Z4(bj,Cj,ry)(_j),An=Mj(Oj);An.renderStatic=An.rewind;var Je=function(){return Je=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},Je.apply(this,arguments)};function Ai(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var he="-ms-",ko="-moz-",le="-webkit-",iy="comm",El="rule",Yp="decl",Ij="@import",oy="@keyframes",Rj="@layer",ay=Math.abs,Kp=String.fromCharCode,rd=Object.assign;function Vj(e,t){return Be(e,0)^45?(((t<<2^Be(e,0))<<2^Be(e,1))<<2^Be(e,2))<<2^Be(e,3):0}function sy(e){return e.trim()}function hn(e,t){return(e=t.exec(e))?e[0]:e}function Q(e,t,n){return e.replace(t,n)}function ns(e,t,n){return e.indexOf(t,n)}function Be(e,t){return e.charCodeAt(t)|0}function Li(e,t,n){return e.slice(t,n)}function tn(e){return e.length}function ly(e){return e.length}function fo(e,t){return t.push(e),e}function Dj(e,t){return e.map(t).join("")}function u0(e,t){return e.filter(function(n){return!hn(n,t)})}var kl=1,Mi=1,cy=0,Dt=0,Le=0,$i="";function zl(e,t,n,r,i,o,a,s){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:kl,column:Mi,length:a,return:"",siblings:s}}function Dn(e,t){return rd(zl("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function qr(e){for(;e.root;)e=Dn(e.root,{children:[e]});fo(e,e.siblings)}function Nj(){return Le}function Bj(){return Le=Dt>0?Be($i,--Dt):0,Mi--,Le===10&&(Mi=1,kl--),Le}function Xt(){return Le=Dt<cy?Be($i,Dt++):0,Mi++,Le===10&&(Mi=1,kl++),Le}function Ar(){return Be($i,Dt)}function rs(){return Dt}function Al(e,t){return Li($i,e,t)}function id(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Fj(e){return kl=Mi=1,cy=tn($i=e),Dt=0,[]}function $j(e){return $i="",e}function zc(e){return sy(Al(Dt-1,od(e===91?e+2:e===40?e+1:e)))}function Hj(e){for(;(Le=Ar())&&Le<33;)Xt();return id(e)>2||id(Le)>3?"":" "}function Uj(e,t){for(;--t&&Xt()&&!(Le<48||Le>102||Le>57&&Le<65||Le>70&&Le<97););return Al(e,rs()+(t<6&&Ar()==32&&Xt()==32))}function od(e){for(;Xt();)switch(Le){case e:return Dt;case 34:case 39:e!==34&&e!==39&&od(Le);break;case 40:e===41&&od(e);break;case 92:Xt();break}return Dt}function Wj(e,t){for(;Xt()&&e+Le!==57;)if(e+Le===84&&Ar()===47)break;return"/*"+Al(t,Dt-1)+"*"+Kp(e===47?e:Xt())}function qj(e){for(;!id(Ar());)Xt();return Al(e,Dt)}function Gj(e){return $j(is("",null,null,null,[""],e=Fj(e),0,[0],e))}function is(e,t,n,r,i,o,a,s,l){for(var u=0,d=0,p=a,f=0,v=0,x=0,y=1,b=1,g=1,h=0,m="",w=i,S=o,T=r,P=m;b;)switch(x=h,h=Xt()){case 40:if(x!=108&&Be(P,p-1)==58){ns(P+=Q(zc(h),"&","&\f"),"&\f",ay(u?s[u-1]:0))!=-1&&(g=-1);break}case 34:case 39:case 91:P+=zc(h);break;case 9:case 10:case 13:case 32:P+=Hj(x);break;case 92:P+=Uj(rs()-1,7);continue;case 47:switch(Ar()){case 42:case 47:fo(Yj(Wj(Xt(),rs()),t,n,l),l);break;default:P+="/"}break;case 123*y:s[u++]=tn(P)*g;case 125*y:case 59:case 0:switch(h){case 0:case 125:b=0;case 59+d:g==-1&&(P=Q(P,/\f/g,"")),v>0&&tn(P)-p&&fo(v>32?p0(P+";",r,n,p-1,l):p0(Q(P," ","")+";",r,n,p-2,l),l);break;case 59:P+=";";default:if(fo(T=d0(P,t,n,u,d,i,s,m,w=[],S=[],p,o),o),h===123)if(d===0)is(P,t,T,T,w,o,p,s,S);else switch(f===99&&Be(P,3)===110?100:f){case 100:case 108:case 109:case 115:is(e,T,T,r&&fo(d0(e,T,T,0,0,i,s,m,i,w=[],p,S),S),i,S,p,s,r?w:S);break;default:is(P,T,T,T,[""],S,0,s,S)}}u=d=v=0,y=g=1,m=P="",p=a;break;case 58:p=1+tn(P),v=x;default:if(y<1){if(h==123)--y;else if(h==125&&y++==0&&Bj()==125)continue}switch(P+=Kp(h),h*y){case 38:g=d>0?1:(P+="\f",-1);break;case 44:s[u++]=(tn(P)-1)*g,g=1;break;case 64:Ar()===45&&(P+=zc(Xt())),f=Ar(),d=p=tn(m=P+=qj(rs())),h++;break;case 45:x===45&&tn(P)==2&&(y=0)}}return o}function d0(e,t,n,r,i,o,a,s,l,u,d,p){for(var f=i-1,v=i===0?o:[""],x=ly(v),y=0,b=0,g=0;y<r;++y)for(var h=0,m=Li(e,f+1,f=ay(b=a[y])),w=e;h<x;++h)(w=sy(b>0?v[h]+" "+m:Q(m,/&\f/g,v[h])))&&(l[g++]=w);return zl(e,t,n,i===0?El:s,l,u,d,p)}function Yj(e,t,n,r){return zl(e,t,n,iy,Kp(Nj()),Li(e,2,-2),0,r)}function p0(e,t,n,r,i){return zl(e,t,n,Yp,Li(e,0,r),Li(e,r+1,-1),r,i)}function uy(e,t,n){switch(Vj(e,t)){case 5103:return le+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return le+e+e;case 4789:return ko+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return le+e+ko+e+he+e+e;case 5936:switch(Be(e,t+11)){case 114:return le+e+he+Q(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return le+e+he+Q(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return le+e+he+Q(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return le+e+he+e+e;case 6165:return le+e+he+"flex-"+e+e;case 5187:return le+e+Q(e,/(\w+).+(:[^]+)/,le+"box-$1$2"+he+"flex-$1$2")+e;case 5443:return le+e+he+"flex-item-"+Q(e,/flex-|-self/g,"")+(hn(e,/flex-|baseline/)?"":he+"grid-row-"+Q(e,/flex-|-self/g,""))+e;case 4675:return le+e+he+"flex-line-pack"+Q(e,/align-content|flex-|-self/g,"")+e;case 5548:return le+e+he+Q(e,"shrink","negative")+e;case 5292:return le+e+he+Q(e,"basis","preferred-size")+e;case 6060:return le+"box-"+Q(e,"-grow","")+le+e+he+Q(e,"grow","positive")+e;case 4554:return le+Q(e,/([^-])(transform)/g,"$1"+le+"$2")+e;case 6187:return Q(Q(Q(e,/(zoom-|grab)/,le+"$1"),/(image-set)/,le+"$1"),e,"")+e;case 5495:case 3959:return Q(e,/(image-set\([^]*)/,le+"$1$`$1");case 4968:return Q(Q(e,/(.+:)(flex-)?(.*)/,le+"box-pack:$3"+he+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+le+e+e;case 4200:if(!hn(e,/flex-|baseline/))return he+"grid-column-align"+Li(e,t)+e;break;case 2592:case 3360:return he+Q(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,hn(r.props,/grid-\w+-end/)})?~ns(e+(n=n[t].value),"span",0)?e:he+Q(e,"-start","")+e+he+"grid-row-span:"+(~ns(n,"span",0)?hn(n,/\d+/):+hn(n,/\d+/)-+hn(e,/\d+/))+";":he+Q(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return hn(r.props,/grid-\w+-start/)})?e:he+Q(Q(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return Q(e,/(.+)-inline(.+)/,le+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(tn(e)-1-t>6)switch(Be(e,t+1)){case 109:if(Be(e,t+4)!==45)break;case 102:return Q(e,/(.+:)(.+)-([^]+)/,"$1"+le+"$2-$3$1"+ko+(Be(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~ns(e,"stretch",0)?uy(Q(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return Q(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,a,s,l,u){return he+i+":"+o+u+(a?he+i+"-span:"+(s?l:+l-+o)+u:"")+e});case 4949:if(Be(e,t+6)===121)return Q(e,":",":"+le)+e;break;case 6444:switch(Be(e,Be(e,14)===45?18:11)){case 120:return Q(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+le+(Be(e,14)===45?"inline-":"")+"box$3$1"+le+"$2$3$1"+he+"$2box$3")+e;case 100:return Q(e,":",":"+he)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Q(e,"scroll-","scroll-snap-")+e}return e}function Us(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Kj(e,t,n,r){switch(e.type){case Rj:if(e.children.length)break;case Ij:case Yp:return e.return=e.return||e.value;case iy:return"";case oy:return e.return=e.value+"{"+Us(e.children,r)+"}";case El:if(!tn(e.value=e.props.join(",")))return""}return tn(n=Us(e.children,r))?e.return=e.value+"{"+n+"}":""}function Xj(e){var t=ly(e);return function(n,r,i,o){for(var a="",s=0;s<t;s++)a+=e[s](n,r,i,o)||"";return a}}function Qj(e){return function(t){t.root||(t=t.return)&&e(t)}}function Zj(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Yp:e.return=uy(e.value,e.length,n);return;case oy:return Us([Dn(e,{value:Q(e.value,"@","@"+le)})],r);case El:if(e.length)return Dj(n=e.props,function(i){switch(hn(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":qr(Dn(e,{props:[Q(i,/:(read-\w+)/,":"+ko+"$1")]})),qr(Dn(e,{props:[i]})),rd(e,{props:u0(n,r)});break;case"::placeholder":qr(Dn(e,{props:[Q(i,/:(plac\w+)/,":"+le+"input-$1")]})),qr(Dn(e,{props:[Q(i,/:(plac\w+)/,":"+ko+"$1")]})),qr(Dn(e,{props:[Q(i,/:(plac\w+)/,he+"input-$1")]})),qr(Dn(e,{props:[i]})),rd(e,{props:u0(n,r)});break}return""})}}var Jj={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ht={},_i=typeof process<"u"&&ht!==void 0&&(ht.REACT_APP_SC_ATTR||ht.SC_ATTR)||"data-styled",dy="active",py="data-styled-version",Ll="6.1.13",Xp=`/*!sc*/
`,Ws=typeof window<"u"&&"HTMLElement"in window,e8=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&ht!==void 0&&ht.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&ht.REACT_APP_SC_DISABLE_SPEEDY!==""?ht.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&ht.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&ht!==void 0&&ht.SC_DISABLE_SPEEDY!==void 0&&ht.SC_DISABLE_SPEEDY!==""&&ht.SC_DISABLE_SPEEDY!=="false"&&ht.SC_DISABLE_SPEEDY),t8={},Ml=Object.freeze([]),Oi=Object.freeze({});function fy(e,t,n){return n===void 0&&(n=Oi),e.theme!==n.theme&&e.theme||t||n.theme}var hy=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),n8=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,r8=/(^-|-$)/g;function f0(e){return e.replace(n8,"-").replace(r8,"")}var i8=/(a)(d)/gi,_a=52,h0=function(e){return String.fromCharCode(e+(e>25?39:97))};function ad(e){var t,n="";for(t=Math.abs(e);t>_a;t=t/_a|0)n=h0(t%_a)+n;return(h0(t%_a)+n).replace(i8,"$1-$2")}var Ac,my=5381,di=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},gy=function(e){return di(my,e)};function Qp(e){return ad(gy(e)>>>0)}function o8(e){return e.displayName||e.name||"Component"}function Lc(e){return typeof e=="string"&&!0}var vy=typeof Symbol=="function"&&Symbol.for,xy=vy?Symbol.for("react.memo"):60115,a8=vy?Symbol.for("react.forward_ref"):60112,s8={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},l8={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},yy={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},c8=((Ac={})[a8]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ac[xy]=yy,Ac);function m0(e){return("type"in(t=e)&&t.type.$$typeof)===xy?yy:"$$typeof"in e?c8[e.$$typeof]:s8;var t}var u8=Object.defineProperty,d8=Object.getOwnPropertyNames,g0=Object.getOwnPropertySymbols,p8=Object.getOwnPropertyDescriptor,f8=Object.getPrototypeOf,v0=Object.prototype;function wy(e,t,n){if(typeof t!="string"){if(v0){var r=f8(t);r&&r!==v0&&wy(e,r,n)}var i=d8(t);g0&&(i=i.concat(g0(t)));for(var o=m0(e),a=m0(t),s=0;s<i.length;++s){var l=i[s];if(!(l in l8||n&&n[l]||a&&l in a||o&&l in o)){var u=p8(t,l);try{u8(e,l,u)}catch{}}}}return e}function Ii(e){return typeof e=="function"}function Zp(e){return typeof e=="object"&&"styledComponentId"in e}function Cr(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function qs(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function Jo(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function sd(e,t,n){if(n===void 0&&(n=!1),!n&&!Jo(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=sd(e[r],t[r]);else if(Jo(t))for(var r in t)e[r]=sd(e[r],t[r]);return e}function Jp(e,t){Object.defineProperty(e,"toString",{value:t})}function ua(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var h8=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw ua(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var a=i;a<o;a++)this.groupSizes[a]=0}for(var s=this.indexOfGroup(t+1),l=(a=0,n.length);a<l;a++)this.tag.insertRule(s,n[a])&&(this.groupSizes[t]++,s++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,a=i;a<o;a++)n+="".concat(this.tag.getRule(a)).concat(Xp);return n},e}(),os=new Map,Gs=new Map,as=1,Oa=function(e){if(os.has(e))return os.get(e);for(;Gs.has(as);)as++;var t=as++;return os.set(e,t),Gs.set(t,e),t},m8=function(e,t){as=t+1,os.set(e,t),Gs.set(t,e)},g8="style[".concat(_i,"][").concat(py,'="').concat(Ll,'"]'),v8=new RegExp("^".concat(_i,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),x8=function(e,t,n){for(var r,i=n.split(","),o=0,a=i.length;o<a;o++)(r=i[o])&&e.registerName(t,r)},y8=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(Xp),i=[],o=0,a=r.length;o<a;o++){var s=r[o].trim();if(s){var l=s.match(v8);if(l){var u=0|parseInt(l[1],10),d=l[2];u!==0&&(m8(d,u),x8(e,d,l[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(s)}}},x0=function(e){for(var t=document.querySelectorAll(g8),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(_i)!==dy&&(y8(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function w8(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var by=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(s){var l=Array.from(s.querySelectorAll("style[".concat(_i,"]")));return l[l.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(_i,dy),r.setAttribute(py,Ll);var a=w8();return a&&r.setAttribute("nonce",a),n.insertBefore(r,o),r},b8=function(){function e(t){this.element=by(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var a=r[i];if(a.ownerNode===n)return a}throw ua(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),S8=function(){function e(t){this.element=by(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),j8=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),y0=Ws,T8={isServer:!Ws,useCSSOMInjection:!e8},Ys=function(){function e(t,n,r){t===void 0&&(t=Oi),n===void 0&&(n={});var i=this;this.options=Je(Je({},T8),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Ws&&y0&&(y0=!1,x0(this)),Jp(this,function(){return function(o){for(var a=o.getTag(),s=a.length,l="",u=function(p){var f=function(g){return Gs.get(g)}(p);if(f===void 0)return"continue";var v=o.names.get(f),x=a.getGroup(p);if(v===void 0||!v.size||x.length===0)return"continue";var y="".concat(_i,".g").concat(p,'[id="').concat(f,'"]'),b="";v!==void 0&&v.forEach(function(g){g.length>0&&(b+="".concat(g,","))}),l+="".concat(x).concat(y,'{content:"').concat(b,'"}').concat(Xp)},d=0;d<s;d++)u(d);return l}(i)})}return e.registerId=function(t){return Oa(t)},e.prototype.rehydrate=function(){!this.server&&Ws&&x0(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Je(Je({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new j8(i):r?new b8(i):new S8(i)}(this.options),new h8(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Oa(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Oa(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Oa(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),C8=/&/g,P8=/^\s*\/\/.*$/gm;function Sy(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=Sy(n.children,t)),n})}function E8(e){var t,n,r,i=Oi,o=i.options,a=o===void 0?Oi:o,s=i.plugins,l=s===void 0?Ml:s,u=function(f,v,x){return x.startsWith(n)&&x.endsWith(n)&&x.replaceAll(n,"").length>0?".".concat(t):f},d=l.slice();d.push(function(f){f.type===El&&f.value.includes("&")&&(f.props[0]=f.props[0].replace(C8,n).replace(r,u))}),a.prefix&&d.push(Zj),d.push(Kj);var p=function(f,v,x,y){v===void 0&&(v=""),x===void 0&&(x=""),y===void 0&&(y="&"),t=y,n=v,r=new RegExp("\\".concat(n,"\\b"),"g");var b=f.replace(P8,""),g=Gj(x||v?"".concat(x," ").concat(v," { ").concat(b," }"):b);a.namespace&&(g=Sy(g,a.namespace));var h=[];return Us(g,Xj(d.concat(Qj(function(m){return h.push(m)})))),h};return p.hash=l.length?l.reduce(function(f,v){return v.name||ua(15),di(f,v.name)},my).toString():"",p}var k8=new Ys,ld=E8(),jy=K.createContext({shouldForwardProp:void 0,styleSheet:k8,stylis:ld});jy.Consumer;K.createContext(void 0);function cd(){return j.useContext(jy)}var Ty=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=ld);var a=r.name+o.hash;i.hasNameForId(r.id,a)||i.insertRules(r.id,a,o(r.rules,a,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Jp(this,function(){throw ua(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=ld),this.name+t.hash},e}(),z8=function(e){return e>="A"&&e<="Z"};function w0(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;z8(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Cy=function(e){return e==null||e===!1||e===""},Py=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!Cy(o)&&(Array.isArray(o)&&o.isCss||Ii(o)?r.push("".concat(w0(i),":"),o,";"):Jo(o)?r.push.apply(r,Ai(Ai(["".concat(i," {")],Py(o),!1),["}"],!1)):r.push("".concat(w0(i),": ").concat((t=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in Jj||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function rr(e,t,n,r){if(Cy(e))return[];if(Zp(e))return[".".concat(e.styledComponentId)];if(Ii(e)){if(!Ii(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return rr(i,t,n,r)}var o;return e instanceof Ty?n?(e.inject(n,r),[e.getName(r)]):[e]:Jo(e)?Py(e):Array.isArray(e)?Array.prototype.concat.apply(Ml,e.map(function(a){return rr(a,t,n,r)})):[e.toString()]}function Ey(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Ii(n)&&!Zp(n))return!1}return!0}var A8=gy(Ll),L8=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Ey(t),this.componentId=n,this.baseHash=di(A8,n),this.baseStyle=r,Ys.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Cr(i,this.staticRulesId);else{var o=qs(rr(this.rules,t,n,r)),a=ad(di(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,a)){var s=r(o,".".concat(a),void 0,this.componentId);n.insertRules(this.componentId,a,s)}i=Cr(i,a),this.staticRulesId=a}else{for(var l=di(this.baseHash,r.hash),u="",d=0;d<this.rules.length;d++){var p=this.rules[d];if(typeof p=="string")u+=p;else if(p){var f=qs(rr(p,t,n,r));l=di(l,f+d),u+=f}}if(u){var v=ad(l>>>0);n.hasNameForId(this.componentId,v)||n.insertRules(this.componentId,v,r(u,".".concat(v),void 0,this.componentId)),i=Cr(i,v)}}return i},e}(),ef=K.createContext(void 0);ef.Consumer;var Mc={};function M8(e,t,n){var r=Zp(e),i=e,o=!Lc(e),a=t.attrs,s=a===void 0?Ml:a,l=t.componentId,u=l===void 0?function(w,S){var T=typeof w!="string"?"sc":f0(w);Mc[T]=(Mc[T]||0)+1;var P="".concat(T,"-").concat(Qp(Ll+T+Mc[T]));return S?"".concat(S,"-").concat(P):P}(t.displayName,t.parentComponentId):l,d=t.displayName,p=d===void 0?function(w){return Lc(w)?"styled.".concat(w):"Styled(".concat(o8(w),")")}(e):d,f=t.displayName&&t.componentId?"".concat(f0(t.displayName),"-").concat(t.componentId):t.componentId||u,v=r&&i.attrs?i.attrs.concat(s).filter(Boolean):s,x=t.shouldForwardProp;if(r&&i.shouldForwardProp){var y=i.shouldForwardProp;if(t.shouldForwardProp){var b=t.shouldForwardProp;x=function(w,S){return y(w,S)&&b(w,S)}}else x=y}var g=new L8(n,f,r?i.componentStyle:void 0);function h(w,S){return function(T,P,E){var z=T.attrs,k=T.componentStyle,I=T.defaultProps,$=T.foldedComponentIds,D=T.styledComponentId,W=T.target,G=K.useContext(ef),se=cd(),ne=T.shouldForwardProp||se.shouldForwardProp,L=fy(P,G,I)||Oi,N=function(Pt,He,Et){for(var A,_=Je(Je({},He),{className:void 0,theme:Et}),V=0;V<Pt.length;V+=1){var M=Ii(A=Pt[V])?A(_):A;for(var J in M)_[J]=J==="className"?Cr(_[J],M[J]):J==="style"?Je(Je({},_[J]),M[J]):M[J]}return He.className&&(_.className=Cr(_.className,He.className)),_}(z,P,L),B=N.as||W,Z={};for(var re in N)N[re]===void 0||re[0]==="$"||re==="as"||re==="theme"&&N.theme===L||(re==="forwardedAs"?Z.as=N.forwardedAs:ne&&!ne(re,B)||(Z[re]=N[re]));var pt=function(Pt,He){var Et=cd(),A=Pt.generateAndInjectStyles(He,Et.styleSheet,Et.stylis);return A}(k,N),ft=Cr($,D);return pt&&(ft+=" "+pt),N.className&&(ft+=" "+N.className),Z[Lc(B)&&!hy.has(B)?"class":"className"]=ft,Z.ref=E,j.createElement(B,Z)}(m,w,S)}h.displayName=p;var m=K.forwardRef(h);return m.attrs=v,m.componentStyle=g,m.displayName=p,m.shouldForwardProp=x,m.foldedComponentIds=r?Cr(i.foldedComponentIds,i.styledComponentId):"",m.styledComponentId=f,m.target=r?i.target:e,Object.defineProperty(m,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(w){this._foldedDefaultProps=r?function(S){for(var T=[],P=1;P<arguments.length;P++)T[P-1]=arguments[P];for(var E=0,z=T;E<z.length;E++)sd(S,z[E],!0);return S}({},i.defaultProps,w):w}}),Jp(m,function(){return".".concat(m.styledComponentId)}),o&&wy(m,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),m}function b0(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var S0=function(e){return Object.assign(e,{isCss:!0})};function tf(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Ii(e)||Jo(e))return S0(rr(b0(Ml,Ai([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?rr(r):S0(rr(b0(r,t)))}function ud(e,t,n){if(n===void 0&&(n=Oi),!t)throw ua(1,t);var r=function(i){for(var o=[],a=1;a<arguments.length;a++)o[a-1]=arguments[a];return e(t,n,tf.apply(void 0,Ai([i],o,!1)))};return r.attrs=function(i){return ud(e,t,Je(Je({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return ud(e,t,Je(Je({},n),i))},r}var ky=function(e){return ud(M8,e)},C=ky;hy.forEach(function(e){C[e]=ky(e)});var _8=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=Ey(t),Ys.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var o=i(qs(rr(this.rules,n,r,i)),""),a=this.componentId+t;r.insertRules(a,a,o)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&Ys.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,i)},e}();function _l(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=tf.apply(void 0,Ai([e],t,!1)),i="sc-global-".concat(Qp(JSON.stringify(r))),o=new _8(r,i),a=function(l){var u=cd(),d=K.useContext(ef),p=K.useRef(u.styleSheet.allocateGSInstance(i)).current;return u.styleSheet.server&&s(p,l,u.styleSheet,d,u.stylis),K.useLayoutEffect(function(){if(!u.styleSheet.server)return s(p,l,u.styleSheet,d,u.stylis),function(){return o.removeStyles(p,u.styleSheet)}},[p,l,u.styleSheet,d,u.stylis]),null};function s(l,u,d,p,f){if(o.isStatic)o.renderStyles(l,t8,d,f);else{var v=Je(Je({},u),{theme:fy(u,p,a.defaultProps)});o.renderStyles(l,v,d,f)}}return K.memo(a)}function fr(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=qs(tf.apply(void 0,Ai([e],t,!1))),i=Qp(r);return new Ty(i,r)}const O8=C(F.video)`
    width: 100%;
    object-fit: cover;
    height: 95vh;
    position: relative;
    z-index: -1;
    top: 0;
    left: 0;
    border-radius: 0 0 1000px 1000px / 100px 100px;
    clip-path: circle(0% at 50% 50%);
    
    @media (max-width: 768px){
        height: 95dvh;
        border-radius: 0 0 500px 500px / 50px 50px;
    }
`,I8=()=>{const e=j.useRef(null);return j.useEffect(()=>{const t=e.current;t&&!t.playing&&t.play().catch(n=>console.error("Falha ao iniciar o vídeo:",n))},[]),c.jsxs(O8,{ref:e,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,initial:{clipPath:"circle(0% at 50% 50%)"},animate:{clipPath:"circle(100% at 50% 50%)"},transition:{duration:1,ease:"easeInOut"},children:[c.jsx("source",{src:"https://res.cloudinary.com/dupg7clzc/video/upload/v1730836205/V%C3%8DDEO_SITE_xvpltm.mp4",type:"video/mp4"}),"Seu navegador não suporta o elemento de vídeo."]})};function j0(e){return e!==null&&typeof e=="object"&&"constructor"in e&&e.constructor===Object}function nf(e,t){e===void 0&&(e={}),t===void 0&&(t={}),Object.keys(t).forEach(n=>{typeof e[n]>"u"?e[n]=t[n]:j0(t[n])&&j0(e[n])&&Object.keys(t[n]).length>0&&nf(e[n],t[n])})}const zy={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function Cn(){const e=typeof document<"u"?document:{};return nf(e,zy),e}const R8={document:zy,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(e){return typeof setTimeout>"u"?(e(),null):setTimeout(e,0)},cancelAnimationFrame(e){typeof setTimeout>"u"||clearTimeout(e)}};function Ct(){const e=typeof window<"u"?window:{};return nf(e,R8),e}function V8(e){return e===void 0&&(e=""),e.trim().split(" ").filter(t=>!!t.trim())}function D8(e){const t=e;Object.keys(t).forEach(n=>{try{t[n]=null}catch{}try{delete t[n]}catch{}})}function dd(e,t){return t===void 0&&(t=0),setTimeout(e,t)}function Ks(){return Date.now()}function N8(e){const t=Ct();let n;return t.getComputedStyle&&(n=t.getComputedStyle(e,null)),!n&&e.currentStyle&&(n=e.currentStyle),n||(n=e.style),n}function B8(e,t){t===void 0&&(t="x");const n=Ct();let r,i,o;const a=N8(e);return n.WebKitCSSMatrix?(i=a.transform||a.webkitTransform,i.split(",").length>6&&(i=i.split(", ").map(s=>s.replace(",",".")).join(", ")),o=new n.WebKitCSSMatrix(i==="none"?"":i)):(o=a.MozTransform||a.OTransform||a.MsTransform||a.msTransform||a.transform||a.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),r=o.toString().split(",")),t==="x"&&(n.WebKitCSSMatrix?i=o.m41:r.length===16?i=parseFloat(r[12]):i=parseFloat(r[4])),t==="y"&&(n.WebKitCSSMatrix?i=o.m42:r.length===16?i=parseFloat(r[13]):i=parseFloat(r[5])),i||0}function Ia(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"}function F8(e){return typeof window<"u"&&typeof window.HTMLElement<"u"?e instanceof HTMLElement:e&&(e.nodeType===1||e.nodeType===11)}function gt(){const e=Object(arguments.length<=0?void 0:arguments[0]),t=["__proto__","constructor","prototype"];for(let n=1;n<arguments.length;n+=1){const r=n<0||arguments.length<=n?void 0:arguments[n];if(r!=null&&!F8(r)){const i=Object.keys(Object(r)).filter(o=>t.indexOf(o)<0);for(let o=0,a=i.length;o<a;o+=1){const s=i[o],l=Object.getOwnPropertyDescriptor(r,s);l!==void 0&&l.enumerable&&(Ia(e[s])&&Ia(r[s])?r[s].__swiper__?e[s]=r[s]:gt(e[s],r[s]):!Ia(e[s])&&Ia(r[s])?(e[s]={},r[s].__swiper__?e[s]=r[s]:gt(e[s],r[s])):e[s]=r[s])}}}return e}function Ra(e,t,n){e.style.setProperty(t,n)}function Ay(e){let{swiper:t,targetPosition:n,side:r}=e;const i=Ct(),o=-t.translate;let a=null,s;const l=t.params.speed;t.wrapperEl.style.scrollSnapType="none",i.cancelAnimationFrame(t.cssModeFrameID);const u=n>o?"next":"prev",d=(f,v)=>u==="next"&&f>=v||u==="prev"&&f<=v,p=()=>{s=new Date().getTime(),a===null&&(a=s);const f=Math.max(Math.min((s-a)/l,1),0),v=.5-Math.cos(f*Math.PI)/2;let x=o+v*(n-o);if(d(x,n)&&(x=n),t.wrapperEl.scrollTo({[r]:x}),d(x,n)){t.wrapperEl.style.overflow="hidden",t.wrapperEl.style.scrollSnapType="",setTimeout(()=>{t.wrapperEl.style.overflow="",t.wrapperEl.scrollTo({[r]:x})}),i.cancelAnimationFrame(t.cssModeFrameID);return}t.cssModeFrameID=i.requestAnimationFrame(p)};p()}function rf(e){return e.querySelector(".swiper-slide-transform")||e.shadowRoot&&e.shadowRoot.querySelector(".swiper-slide-transform")||e}function on(e,t){t===void 0&&(t="");const n=[...e.children];return e instanceof HTMLSlotElement&&n.push(...e.assignedElements()),t?n.filter(r=>r.matches(t)):n}function $8(e,t){const n=t.contains(e);return!n&&t instanceof HTMLSlotElement?[...t.assignedElements()].includes(e):n}function Xs(e){try{console.warn(e);return}catch{}}function ea(e,t){t===void 0&&(t=[]);const n=document.createElement(e);return n.classList.add(...Array.isArray(t)?t:V8(t)),n}function H8(e,t){const n=[];for(;e.previousElementSibling;){const r=e.previousElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function U8(e,t){const n=[];for(;e.nextElementSibling;){const r=e.nextElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function Gn(e,t){return Ct().getComputedStyle(e,null).getPropertyValue(t)}function Qs(e){let t=e,n;if(t){for(n=0;(t=t.previousSibling)!==null;)t.nodeType===1&&(n+=1);return n}}function Ly(e,t){const n=[];let r=e.parentElement;for(;r;)t?r.matches(t)&&n.push(r):n.push(r),r=r.parentElement;return n}function pd(e,t,n){const r=Ct();return e[t==="width"?"offsetWidth":"offsetHeight"]+parseFloat(r.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-right":"margin-top"))+parseFloat(r.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-left":"margin-bottom"))}function De(e){return(Array.isArray(e)?e:[e]).filter(t=>!!t)}function W8(e){return t=>Math.abs(t)>0&&e.browser&&e.browser.need3dFix&&Math.abs(t)%90===0?t+.001:t}let _c;function q8(){const e=Ct(),t=Cn();return{smoothScroll:t.documentElement&&t.documentElement.style&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch)}}function My(){return _c||(_c=q8()),_c}let Oc;function G8(e){let{userAgent:t}=e===void 0?{}:e;const n=My(),r=Ct(),i=r.navigator.platform,o=t||r.navigator.userAgent,a={ios:!1,android:!1},s=r.screen.width,l=r.screen.height,u=o.match(/(Android);?[\s\/]+([\d.]+)?/);let d=o.match(/(iPad).*OS\s([\d_]+)/);const p=o.match(/(iPod)(.*OS\s([\d_]+))?/),f=!d&&o.match(/(iPhone\sOS|iOS)\s([\d_]+)/),v=i==="Win32";let x=i==="MacIntel";const y=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!d&&x&&n.touch&&y.indexOf(`${s}x${l}`)>=0&&(d=o.match(/(Version)\/([\d.]+)/),d||(d=[0,1,"13_0_0"]),x=!1),u&&!v&&(a.os="android",a.android=!0),(d||f||p)&&(a.os="ios",a.ios=!0),a}function _y(e){return e===void 0&&(e={}),Oc||(Oc=G8(e)),Oc}let Ic;function Y8(){const e=Ct(),t=_y();let n=!1;function r(){const s=e.navigator.userAgent.toLowerCase();return s.indexOf("safari")>=0&&s.indexOf("chrome")<0&&s.indexOf("android")<0}if(r()){const s=String(e.navigator.userAgent);if(s.includes("Version/")){const[l,u]=s.split("Version/")[1].split(" ")[0].split(".").map(d=>Number(d));n=l<16||l===16&&u<2}}const i=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),o=r(),a=o||i&&t.ios;return{isSafari:n||o,needPerspectiveFix:n,need3dFix:a,isWebView:i}}function K8(){return Ic||(Ic=Y8()),Ic}function X8(e){let{swiper:t,on:n,emit:r}=e;const i=Ct();let o=null,a=null;const s=()=>{!t||t.destroyed||!t.initialized||(r("beforeResize"),r("resize"))},l=()=>{!t||t.destroyed||!t.initialized||(o=new ResizeObserver(p=>{a=i.requestAnimationFrame(()=>{const{width:f,height:v}=t;let x=f,y=v;p.forEach(b=>{let{contentBoxSize:g,contentRect:h,target:m}=b;m&&m!==t.el||(x=h?h.width:(g[0]||g).inlineSize,y=h?h.height:(g[0]||g).blockSize)}),(x!==f||y!==v)&&s()})}),o.observe(t.el))},u=()=>{a&&i.cancelAnimationFrame(a),o&&o.unobserve&&t.el&&(o.unobserve(t.el),o=null)},d=()=>{!t||t.destroyed||!t.initialized||r("orientationchange")};n("init",()=>{if(t.params.resizeObserver&&typeof i.ResizeObserver<"u"){l();return}i.addEventListener("resize",s),i.addEventListener("orientationchange",d)}),n("destroy",()=>{u(),i.removeEventListener("resize",s),i.removeEventListener("orientationchange",d)})}function Q8(e){let{swiper:t,extendParams:n,on:r,emit:i}=e;const o=[],a=Ct(),s=function(d,p){p===void 0&&(p={});const f=a.MutationObserver||a.WebkitMutationObserver,v=new f(x=>{if(t.__preventObserver__)return;if(x.length===1){i("observerUpdate",x[0]);return}const y=function(){i("observerUpdate",x[0])};a.requestAnimationFrame?a.requestAnimationFrame(y):a.setTimeout(y,0)});v.observe(d,{attributes:typeof p.attributes>"u"?!0:p.attributes,childList:t.isElement||(typeof p.childList>"u"?!0:p).childList,characterData:typeof p.characterData>"u"?!0:p.characterData}),o.push(v)},l=()=>{if(t.params.observer){if(t.params.observeParents){const d=Ly(t.hostEl);for(let p=0;p<d.length;p+=1)s(d[p])}s(t.hostEl,{childList:t.params.observeSlideChildren}),s(t.wrapperEl,{attributes:!1})}},u=()=>{o.forEach(d=>{d.disconnect()}),o.splice(0,o.length)};n({observer:!1,observeParents:!1,observeSlideChildren:!1}),r("init",l),r("destroy",u)}var Z8={on(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof t!="function")return r;const i=n?"unshift":"push";return e.split(" ").forEach(o=>{r.eventsListeners[o]||(r.eventsListeners[o]=[]),r.eventsListeners[o][i](t)}),r},once(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof t!="function")return r;function i(){r.off(e,i),i.__emitterProxy&&delete i.__emitterProxy;for(var o=arguments.length,a=new Array(o),s=0;s<o;s++)a[s]=arguments[s];t.apply(r,a)}return i.__emitterProxy=t,r.on(e,i,n)},onAny(e,t){const n=this;if(!n.eventsListeners||n.destroyed||typeof e!="function")return n;const r=t?"unshift":"push";return n.eventsAnyListeners.indexOf(e)<0&&n.eventsAnyListeners[r](e),n},offAny(e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsAnyListeners)return t;const n=t.eventsAnyListeners.indexOf(e);return n>=0&&t.eventsAnyListeners.splice(n,1),t},off(e,t){const n=this;return!n.eventsListeners||n.destroyed||!n.eventsListeners||e.split(" ").forEach(r=>{typeof t>"u"?n.eventsListeners[r]=[]:n.eventsListeners[r]&&n.eventsListeners[r].forEach((i,o)=>{(i===t||i.__emitterProxy&&i.__emitterProxy===t)&&n.eventsListeners[r].splice(o,1)})}),n},emit(){const e=this;if(!e.eventsListeners||e.destroyed||!e.eventsListeners)return e;let t,n,r;for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return typeof o[0]=="string"||Array.isArray(o[0])?(t=o[0],n=o.slice(1,o.length),r=e):(t=o[0].events,n=o[0].data,r=o[0].context||e),n.unshift(r),(Array.isArray(t)?t:t.split(" ")).forEach(l=>{e.eventsAnyListeners&&e.eventsAnyListeners.length&&e.eventsAnyListeners.forEach(u=>{u.apply(r,[l,...n])}),e.eventsListeners&&e.eventsListeners[l]&&e.eventsListeners[l].forEach(u=>{u.apply(r,n)})}),e}};function J8(){const e=this;let t,n;const r=e.el;typeof e.params.width<"u"&&e.params.width!==null?t=e.params.width:t=r.clientWidth,typeof e.params.height<"u"&&e.params.height!==null?n=e.params.height:n=r.clientHeight,!(t===0&&e.isHorizontal()||n===0&&e.isVertical())&&(t=t-parseInt(Gn(r,"padding-left")||0,10)-parseInt(Gn(r,"padding-right")||0,10),n=n-parseInt(Gn(r,"padding-top")||0,10)-parseInt(Gn(r,"padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(n)&&(n=0),Object.assign(e,{width:t,height:n,size:e.isHorizontal()?t:n}))}function eT(){const e=this;function t(k,I){return parseFloat(k.getPropertyValue(e.getDirectionLabel(I))||0)}const n=e.params,{wrapperEl:r,slidesEl:i,size:o,rtlTranslate:a,wrongRTL:s}=e,l=e.virtual&&n.virtual.enabled,u=l?e.virtual.slides.length:e.slides.length,d=on(i,`.${e.params.slideClass}, swiper-slide`),p=l?e.virtual.slides.length:d.length;let f=[];const v=[],x=[];let y=n.slidesOffsetBefore;typeof y=="function"&&(y=n.slidesOffsetBefore.call(e));let b=n.slidesOffsetAfter;typeof b=="function"&&(b=n.slidesOffsetAfter.call(e));const g=e.snapGrid.length,h=e.slidesGrid.length;let m=n.spaceBetween,w=-y,S=0,T=0;if(typeof o>"u")return;typeof m=="string"&&m.indexOf("%")>=0?m=parseFloat(m.replace("%",""))/100*o:typeof m=="string"&&(m=parseFloat(m)),e.virtualSize=-m,d.forEach(k=>{a?k.style.marginLeft="":k.style.marginRight="",k.style.marginBottom="",k.style.marginTop=""}),n.centeredSlides&&n.cssMode&&(Ra(r,"--swiper-centered-offset-before",""),Ra(r,"--swiper-centered-offset-after",""));const P=n.grid&&n.grid.rows>1&&e.grid;P?e.grid.initSlides(d):e.grid&&e.grid.unsetSlides();let E;const z=n.slidesPerView==="auto"&&n.breakpoints&&Object.keys(n.breakpoints).filter(k=>typeof n.breakpoints[k].slidesPerView<"u").length>0;for(let k=0;k<p;k+=1){E=0;let I;if(d[k]&&(I=d[k]),P&&e.grid.updateSlide(k,I,d),!(d[k]&&Gn(I,"display")==="none")){if(n.slidesPerView==="auto"){z&&(d[k].style[e.getDirectionLabel("width")]="");const $=getComputedStyle(I),D=I.style.transform,W=I.style.webkitTransform;if(D&&(I.style.transform="none"),W&&(I.style.webkitTransform="none"),n.roundLengths)E=e.isHorizontal()?pd(I,"width"):pd(I,"height");else{const G=t($,"width"),se=t($,"padding-left"),ne=t($,"padding-right"),L=t($,"margin-left"),N=t($,"margin-right"),B=$.getPropertyValue("box-sizing");if(B&&B==="border-box")E=G+L+N;else{const{clientWidth:Z,offsetWidth:re}=I;E=G+se+ne+L+N+(re-Z)}}D&&(I.style.transform=D),W&&(I.style.webkitTransform=W),n.roundLengths&&(E=Math.floor(E))}else E=(o-(n.slidesPerView-1)*m)/n.slidesPerView,n.roundLengths&&(E=Math.floor(E)),d[k]&&(d[k].style[e.getDirectionLabel("width")]=`${E}px`);d[k]&&(d[k].swiperSlideSize=E),x.push(E),n.centeredSlides?(w=w+E/2+S/2+m,S===0&&k!==0&&(w=w-o/2-m),k===0&&(w=w-o/2-m),Math.abs(w)<1/1e3&&(w=0),n.roundLengths&&(w=Math.floor(w)),T%n.slidesPerGroup===0&&f.push(w),v.push(w)):(n.roundLengths&&(w=Math.floor(w)),(T-Math.min(e.params.slidesPerGroupSkip,T))%e.params.slidesPerGroup===0&&f.push(w),v.push(w),w=w+E+m),e.virtualSize+=E+m,S=E,T+=1}}if(e.virtualSize=Math.max(e.virtualSize,o)+b,a&&s&&(n.effect==="slide"||n.effect==="coverflow")&&(r.style.width=`${e.virtualSize+m}px`),n.setWrapperSize&&(r.style[e.getDirectionLabel("width")]=`${e.virtualSize+m}px`),P&&e.grid.updateWrapperSize(E,f),!n.centeredSlides){const k=[];for(let I=0;I<f.length;I+=1){let $=f[I];n.roundLengths&&($=Math.floor($)),f[I]<=e.virtualSize-o&&k.push($)}f=k,Math.floor(e.virtualSize-o)-Math.floor(f[f.length-1])>1&&f.push(e.virtualSize-o)}if(l&&n.loop){const k=x[0]+m;if(n.slidesPerGroup>1){const I=Math.ceil((e.virtual.slidesBefore+e.virtual.slidesAfter)/n.slidesPerGroup),$=k*n.slidesPerGroup;for(let D=0;D<I;D+=1)f.push(f[f.length-1]+$)}for(let I=0;I<e.virtual.slidesBefore+e.virtual.slidesAfter;I+=1)n.slidesPerGroup===1&&f.push(f[f.length-1]+k),v.push(v[v.length-1]+k),e.virtualSize+=k}if(f.length===0&&(f=[0]),m!==0){const k=e.isHorizontal()&&a?"marginLeft":e.getDirectionLabel("marginRight");d.filter((I,$)=>!n.cssMode||n.loop?!0:$!==d.length-1).forEach(I=>{I.style[k]=`${m}px`})}if(n.centeredSlides&&n.centeredSlidesBounds){let k=0;x.forEach($=>{k+=$+(m||0)}),k-=m;const I=k>o?k-o:0;f=f.map($=>$<=0?-y:$>I?I+b:$)}if(n.centerInsufficientSlides){let k=0;x.forEach($=>{k+=$+(m||0)}),k-=m;const I=(n.slidesOffsetBefore||0)+(n.slidesOffsetAfter||0);if(k+I<o){const $=(o-k-I)/2;f.forEach((D,W)=>{f[W]=D-$}),v.forEach((D,W)=>{v[W]=D+$})}}if(Object.assign(e,{slides:d,snapGrid:f,slidesGrid:v,slidesSizesGrid:x}),n.centeredSlides&&n.cssMode&&!n.centeredSlidesBounds){Ra(r,"--swiper-centered-offset-before",`${-f[0]}px`),Ra(r,"--swiper-centered-offset-after",`${e.size/2-x[x.length-1]/2}px`);const k=-e.snapGrid[0],I=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map($=>$+k),e.slidesGrid=e.slidesGrid.map($=>$+I)}if(p!==u&&e.emit("slidesLengthChange"),f.length!==g&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),v.length!==h&&e.emit("slidesGridLengthChange"),n.watchSlidesProgress&&e.updateSlidesOffset(),e.emit("slidesUpdated"),!l&&!n.cssMode&&(n.effect==="slide"||n.effect==="fade")){const k=`${n.containerModifierClass}backface-hidden`,I=e.el.classList.contains(k);p<=n.maxBackfaceHiddenSlides?I||e.el.classList.add(k):I&&e.el.classList.remove(k)}}function tT(e){const t=this,n=[],r=t.virtual&&t.params.virtual.enabled;let i=0,o;typeof e=="number"?t.setTransition(e):e===!0&&t.setTransition(t.params.speed);const a=s=>r?t.slides[t.getSlideIndexByData(s)]:t.slides[s];if(t.params.slidesPerView!=="auto"&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||[]).forEach(s=>{n.push(s)});else for(o=0;o<Math.ceil(t.params.slidesPerView);o+=1){const s=t.activeIndex+o;if(s>t.slides.length&&!r)break;n.push(a(s))}else n.push(a(t.activeIndex));for(o=0;o<n.length;o+=1)if(typeof n[o]<"u"){const s=n[o].offsetHeight;i=s>i?s:i}(i||i===0)&&(t.wrapperEl.style.height=`${i}px`)}function nT(){const e=this,t=e.slides,n=e.isElement?e.isHorizontal()?e.wrapperEl.offsetLeft:e.wrapperEl.offsetTop:0;for(let r=0;r<t.length;r+=1)t[r].swiperSlideOffset=(e.isHorizontal()?t[r].offsetLeft:t[r].offsetTop)-n-e.cssOverflowAdjustment()}const T0=(e,t,n)=>{t&&!e.classList.contains(n)?e.classList.add(n):!t&&e.classList.contains(n)&&e.classList.remove(n)};function rT(e){e===void 0&&(e=this&&this.translate||0);const t=this,n=t.params,{slides:r,rtlTranslate:i,snapGrid:o}=t;if(r.length===0)return;typeof r[0].swiperSlideOffset>"u"&&t.updateSlidesOffset();let a=-e;i&&(a=e),t.visibleSlidesIndexes=[],t.visibleSlides=[];let s=n.spaceBetween;typeof s=="string"&&s.indexOf("%")>=0?s=parseFloat(s.replace("%",""))/100*t.size:typeof s=="string"&&(s=parseFloat(s));for(let l=0;l<r.length;l+=1){const u=r[l];let d=u.swiperSlideOffset;n.cssMode&&n.centeredSlides&&(d-=r[0].swiperSlideOffset);const p=(a+(n.centeredSlides?t.minTranslate():0)-d)/(u.swiperSlideSize+s),f=(a-o[0]+(n.centeredSlides?t.minTranslate():0)-d)/(u.swiperSlideSize+s),v=-(a-d),x=v+t.slidesSizesGrid[l],y=v>=0&&v<=t.size-t.slidesSizesGrid[l],b=v>=0&&v<t.size-1||x>1&&x<=t.size||v<=0&&x>=t.size;b&&(t.visibleSlides.push(u),t.visibleSlidesIndexes.push(l)),T0(u,b,n.slideVisibleClass),T0(u,y,n.slideFullyVisibleClass),u.progress=i?-p:p,u.originalProgress=i?-f:f}}function iT(e){const t=this;if(typeof e>"u"){const d=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*d||0}const n=t.params,r=t.maxTranslate()-t.minTranslate();let{progress:i,isBeginning:o,isEnd:a,progressLoop:s}=t;const l=o,u=a;if(r===0)i=0,o=!0,a=!0;else{i=(e-t.minTranslate())/r;const d=Math.abs(e-t.minTranslate())<1,p=Math.abs(e-t.maxTranslate())<1;o=d||i<=0,a=p||i>=1,d&&(i=0),p&&(i=1)}if(n.loop){const d=t.getSlideIndexByData(0),p=t.getSlideIndexByData(t.slides.length-1),f=t.slidesGrid[d],v=t.slidesGrid[p],x=t.slidesGrid[t.slidesGrid.length-1],y=Math.abs(e);y>=f?s=(y-f)/x:s=(y+x-v)/x,s>1&&(s-=1)}Object.assign(t,{progress:i,progressLoop:s,isBeginning:o,isEnd:a}),(n.watchSlidesProgress||n.centeredSlides&&n.autoHeight)&&t.updateSlidesProgress(e),o&&!l&&t.emit("reachBeginning toEdge"),a&&!u&&t.emit("reachEnd toEdge"),(l&&!o||u&&!a)&&t.emit("fromEdge"),t.emit("progress",i)}const Rc=(e,t,n)=>{t&&!e.classList.contains(n)?e.classList.add(n):!t&&e.classList.contains(n)&&e.classList.remove(n)};function oT(){const e=this,{slides:t,params:n,slidesEl:r,activeIndex:i}=e,o=e.virtual&&n.virtual.enabled,a=e.grid&&n.grid&&n.grid.rows>1,s=p=>on(r,`.${n.slideClass}${p}, swiper-slide${p}`)[0];let l,u,d;if(o)if(n.loop){let p=i-e.virtual.slidesBefore;p<0&&(p=e.virtual.slides.length+p),p>=e.virtual.slides.length&&(p-=e.virtual.slides.length),l=s(`[data-swiper-slide-index="${p}"]`)}else l=s(`[data-swiper-slide-index="${i}"]`);else a?(l=t.filter(p=>p.column===i)[0],d=t.filter(p=>p.column===i+1)[0],u=t.filter(p=>p.column===i-1)[0]):l=t[i];l&&(a||(d=U8(l,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!d&&(d=t[0]),u=H8(l,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!u===0&&(u=t[t.length-1]))),t.forEach(p=>{Rc(p,p===l,n.slideActiveClass),Rc(p,p===d,n.slideNextClass),Rc(p,p===u,n.slidePrevClass)}),e.emitSlidesClasses()}const ss=(e,t)=>{if(!e||e.destroyed||!e.params)return;const n=()=>e.isElement?"swiper-slide":`.${e.params.slideClass}`,r=t.closest(n());if(r){let i=r.querySelector(`.${e.params.lazyPreloaderClass}`);!i&&e.isElement&&(r.shadowRoot?i=r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{r.shadowRoot&&(i=r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`),i&&i.remove())})),i&&i.remove()}},Vc=(e,t)=>{if(!e.slides[t])return;const n=e.slides[t].querySelector('[loading="lazy"]');n&&n.removeAttribute("loading")},fd=e=>{if(!e||e.destroyed||!e.params)return;let t=e.params.lazyPreloadPrevNext;const n=e.slides.length;if(!n||!t||t<0)return;t=Math.min(t,n);const r=e.params.slidesPerView==="auto"?e.slidesPerViewDynamic():Math.ceil(e.params.slidesPerView),i=e.activeIndex;if(e.params.grid&&e.params.grid.rows>1){const a=i,s=[a-t];s.push(...Array.from({length:t}).map((l,u)=>a+r+u)),e.slides.forEach((l,u)=>{s.includes(l.column)&&Vc(e,u)});return}const o=i+r-1;if(e.params.rewind||e.params.loop)for(let a=i-t;a<=o+t;a+=1){const s=(a%n+n)%n;(s<i||s>o)&&Vc(e,s)}else for(let a=Math.max(i-t,0);a<=Math.min(o+t,n-1);a+=1)a!==i&&(a>o||a<i)&&Vc(e,a)};function aT(e){const{slidesGrid:t,params:n}=e,r=e.rtlTranslate?e.translate:-e.translate;let i;for(let o=0;o<t.length;o+=1)typeof t[o+1]<"u"?r>=t[o]&&r<t[o+1]-(t[o+1]-t[o])/2?i=o:r>=t[o]&&r<t[o+1]&&(i=o+1):r>=t[o]&&(i=o);return n.normalizeSlideIndex&&(i<0||typeof i>"u")&&(i=0),i}function sT(e){const t=this,n=t.rtlTranslate?t.translate:-t.translate,{snapGrid:r,params:i,activeIndex:o,realIndex:a,snapIndex:s}=t;let l=e,u;const d=v=>{let x=v-t.virtual.slidesBefore;return x<0&&(x=t.virtual.slides.length+x),x>=t.virtual.slides.length&&(x-=t.virtual.slides.length),x};if(typeof l>"u"&&(l=aT(t)),r.indexOf(n)>=0)u=r.indexOf(n);else{const v=Math.min(i.slidesPerGroupSkip,l);u=v+Math.floor((l-v)/i.slidesPerGroup)}if(u>=r.length&&(u=r.length-1),l===o&&!t.params.loop){u!==s&&(t.snapIndex=u,t.emit("snapIndexChange"));return}if(l===o&&t.params.loop&&t.virtual&&t.params.virtual.enabled){t.realIndex=d(l);return}const p=t.grid&&i.grid&&i.grid.rows>1;let f;if(t.virtual&&i.virtual.enabled&&i.loop)f=d(l);else if(p){const v=t.slides.filter(y=>y.column===l)[0];let x=parseInt(v.getAttribute("data-swiper-slide-index"),10);Number.isNaN(x)&&(x=Math.max(t.slides.indexOf(v),0)),f=Math.floor(x/i.grid.rows)}else if(t.slides[l]){const v=t.slides[l].getAttribute("data-swiper-slide-index");v?f=parseInt(v,10):f=l}else f=l;Object.assign(t,{previousSnapIndex:s,snapIndex:u,previousRealIndex:a,realIndex:f,previousIndex:o,activeIndex:l}),t.initialized&&fd(t),t.emit("activeIndexChange"),t.emit("snapIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&(a!==f&&t.emit("realIndexChange"),t.emit("slideChange"))}function lT(e,t){const n=this,r=n.params;let i=e.closest(`.${r.slideClass}, swiper-slide`);!i&&n.isElement&&t&&t.length>1&&t.includes(e)&&[...t.slice(t.indexOf(e)+1,t.length)].forEach(s=>{!i&&s.matches&&s.matches(`.${r.slideClass}, swiper-slide`)&&(i=s)});let o=!1,a;if(i){for(let s=0;s<n.slides.length;s+=1)if(n.slides[s]===i){o=!0,a=s;break}}if(i&&o)n.clickedSlide=i,n.virtual&&n.params.virtual.enabled?n.clickedIndex=parseInt(i.getAttribute("data-swiper-slide-index"),10):n.clickedIndex=a;else{n.clickedSlide=void 0,n.clickedIndex=void 0;return}r.slideToClickedSlide&&n.clickedIndex!==void 0&&n.clickedIndex!==n.activeIndex&&n.slideToClickedSlide()}var cT={updateSize:J8,updateSlides:eT,updateAutoHeight:tT,updateSlidesOffset:nT,updateSlidesProgress:rT,updateProgress:iT,updateSlidesClasses:oT,updateActiveIndex:sT,updateClickedSlide:lT};function uT(e){e===void 0&&(e=this.isHorizontal()?"x":"y");const t=this,{params:n,rtlTranslate:r,translate:i,wrapperEl:o}=t;if(n.virtualTranslate)return r?-i:i;if(n.cssMode)return i;let a=B8(o,e);return a+=t.cssOverflowAdjustment(),r&&(a=-a),a||0}function dT(e,t){const n=this,{rtlTranslate:r,params:i,wrapperEl:o,progress:a}=n;let s=0,l=0;const u=0;n.isHorizontal()?s=r?-e:e:l=e,i.roundLengths&&(s=Math.floor(s),l=Math.floor(l)),n.previousTranslate=n.translate,n.translate=n.isHorizontal()?s:l,i.cssMode?o[n.isHorizontal()?"scrollLeft":"scrollTop"]=n.isHorizontal()?-s:-l:i.virtualTranslate||(n.isHorizontal()?s-=n.cssOverflowAdjustment():l-=n.cssOverflowAdjustment(),o.style.transform=`translate3d(${s}px, ${l}px, ${u}px)`);let d;const p=n.maxTranslate()-n.minTranslate();p===0?d=0:d=(e-n.minTranslate())/p,d!==a&&n.updateProgress(e),n.emit("setTranslate",n.translate,t)}function pT(){return-this.snapGrid[0]}function fT(){return-this.snapGrid[this.snapGrid.length-1]}function hT(e,t,n,r,i){e===void 0&&(e=0),t===void 0&&(t=this.params.speed),n===void 0&&(n=!0),r===void 0&&(r=!0);const o=this,{params:a,wrapperEl:s}=o;if(o.animating&&a.preventInteractionOnTransition)return!1;const l=o.minTranslate(),u=o.maxTranslate();let d;if(r&&e>l?d=l:r&&e<u?d=u:d=e,o.updateProgress(d),a.cssMode){const p=o.isHorizontal();if(t===0)s[p?"scrollLeft":"scrollTop"]=-d;else{if(!o.support.smoothScroll)return Ay({swiper:o,targetPosition:-d,side:p?"left":"top"}),!0;s.scrollTo({[p?"left":"top"]:-d,behavior:"smooth"})}return!0}return t===0?(o.setTransition(0),o.setTranslate(d),n&&(o.emit("beforeTransitionStart",t,i),o.emit("transitionEnd"))):(o.setTransition(t),o.setTranslate(d),n&&(o.emit("beforeTransitionStart",t,i),o.emit("transitionStart")),o.animating||(o.animating=!0,o.onTranslateToWrapperTransitionEnd||(o.onTranslateToWrapperTransitionEnd=function(f){!o||o.destroyed||f.target===this&&(o.wrapperEl.removeEventListener("transitionend",o.onTranslateToWrapperTransitionEnd),o.onTranslateToWrapperTransitionEnd=null,delete o.onTranslateToWrapperTransitionEnd,o.animating=!1,n&&o.emit("transitionEnd"))}),o.wrapperEl.addEventListener("transitionend",o.onTranslateToWrapperTransitionEnd))),!0}var mT={getTranslate:uT,setTranslate:dT,minTranslate:pT,maxTranslate:fT,translateTo:hT};function gT(e,t){const n=this;n.params.cssMode||(n.wrapperEl.style.transitionDuration=`${e}ms`,n.wrapperEl.style.transitionDelay=e===0?"0ms":""),n.emit("setTransition",e,t)}function Oy(e){let{swiper:t,runCallbacks:n,direction:r,step:i}=e;const{activeIndex:o,previousIndex:a}=t;let s=r;if(s||(o>a?s="next":o<a?s="prev":s="reset"),t.emit(`transition${i}`),n&&o!==a){if(s==="reset"){t.emit(`slideResetTransition${i}`);return}t.emit(`slideChangeTransition${i}`),s==="next"?t.emit(`slideNextTransition${i}`):t.emit(`slidePrevTransition${i}`)}}function vT(e,t){e===void 0&&(e=!0);const n=this,{params:r}=n;r.cssMode||(r.autoHeight&&n.updateAutoHeight(),Oy({swiper:n,runCallbacks:e,direction:t,step:"Start"}))}function xT(e,t){e===void 0&&(e=!0);const n=this,{params:r}=n;n.animating=!1,!r.cssMode&&(n.setTransition(0),Oy({swiper:n,runCallbacks:e,direction:t,step:"End"}))}var yT={setTransition:gT,transitionStart:vT,transitionEnd:xT};function wT(e,t,n,r,i){e===void 0&&(e=0),n===void 0&&(n=!0),typeof e=="string"&&(e=parseInt(e,10));const o=this;let a=e;a<0&&(a=0);const{params:s,snapGrid:l,slidesGrid:u,previousIndex:d,activeIndex:p,rtlTranslate:f,wrapperEl:v,enabled:x}=o;if(!x&&!r&&!i||o.destroyed||o.animating&&s.preventInteractionOnTransition)return!1;typeof t>"u"&&(t=o.params.speed);const y=Math.min(o.params.slidesPerGroupSkip,a);let b=y+Math.floor((a-y)/o.params.slidesPerGroup);b>=l.length&&(b=l.length-1);const g=-l[b];if(s.normalizeSlideIndex)for(let S=0;S<u.length;S+=1){const T=-Math.floor(g*100),P=Math.floor(u[S]*100),E=Math.floor(u[S+1]*100);typeof u[S+1]<"u"?T>=P&&T<E-(E-P)/2?a=S:T>=P&&T<E&&(a=S+1):T>=P&&(a=S)}if(o.initialized&&a!==p&&(!o.allowSlideNext&&(f?g>o.translate&&g>o.minTranslate():g<o.translate&&g<o.minTranslate())||!o.allowSlidePrev&&g>o.translate&&g>o.maxTranslate()&&(p||0)!==a))return!1;a!==(d||0)&&n&&o.emit("beforeSlideChangeStart"),o.updateProgress(g);let h;a>p?h="next":a<p?h="prev":h="reset";const m=o.virtual&&o.params.virtual.enabled;if(!(m&&i)&&(f&&-g===o.translate||!f&&g===o.translate))return o.updateActiveIndex(a),s.autoHeight&&o.updateAutoHeight(),o.updateSlidesClasses(),s.effect!=="slide"&&o.setTranslate(g),h!=="reset"&&(o.transitionStart(n,h),o.transitionEnd(n,h)),!1;if(s.cssMode){const S=o.isHorizontal(),T=f?g:-g;if(t===0)m&&(o.wrapperEl.style.scrollSnapType="none",o._immediateVirtual=!0),m&&!o._cssModeVirtualInitialSet&&o.params.initialSlide>0?(o._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{v[S?"scrollLeft":"scrollTop"]=T})):v[S?"scrollLeft":"scrollTop"]=T,m&&requestAnimationFrame(()=>{o.wrapperEl.style.scrollSnapType="",o._immediateVirtual=!1});else{if(!o.support.smoothScroll)return Ay({swiper:o,targetPosition:T,side:S?"left":"top"}),!0;v.scrollTo({[S?"left":"top"]:T,behavior:"smooth"})}return!0}return o.setTransition(t),o.setTranslate(g),o.updateActiveIndex(a),o.updateSlidesClasses(),o.emit("beforeTransitionStart",t,r),o.transitionStart(n,h),t===0?o.transitionEnd(n,h):o.animating||(o.animating=!0,o.onSlideToWrapperTransitionEnd||(o.onSlideToWrapperTransitionEnd=function(T){!o||o.destroyed||T.target===this&&(o.wrapperEl.removeEventListener("transitionend",o.onSlideToWrapperTransitionEnd),o.onSlideToWrapperTransitionEnd=null,delete o.onSlideToWrapperTransitionEnd,o.transitionEnd(n,h))}),o.wrapperEl.addEventListener("transitionend",o.onSlideToWrapperTransitionEnd)),!0}function bT(e,t,n,r){e===void 0&&(e=0),n===void 0&&(n=!0),typeof e=="string"&&(e=parseInt(e,10));const i=this;if(i.destroyed)return;typeof t>"u"&&(t=i.params.speed);const o=i.grid&&i.params.grid&&i.params.grid.rows>1;let a=e;if(i.params.loop)if(i.virtual&&i.params.virtual.enabled)a=a+i.virtual.slidesBefore;else{let s;if(o){const f=a*i.params.grid.rows;s=i.slides.filter(v=>v.getAttribute("data-swiper-slide-index")*1===f)[0].column}else s=i.getSlideIndexByData(a);const l=o?Math.ceil(i.slides.length/i.params.grid.rows):i.slides.length,{centeredSlides:u}=i.params;let d=i.params.slidesPerView;d==="auto"?d=i.slidesPerViewDynamic():(d=Math.ceil(parseFloat(i.params.slidesPerView,10)),u&&d%2===0&&(d=d+1));let p=l-s<d;if(u&&(p=p||s<Math.ceil(d/2)),r&&u&&i.params.slidesPerView!=="auto"&&!o&&(p=!1),p){const f=u?s<i.activeIndex?"prev":"next":s-i.activeIndex-1<i.params.slidesPerView?"next":"prev";i.loopFix({direction:f,slideTo:!0,activeSlideIndex:f==="next"?s+1:s-l+1,slideRealIndex:f==="next"?i.realIndex:void 0})}if(o){const f=a*i.params.grid.rows;a=i.slides.filter(v=>v.getAttribute("data-swiper-slide-index")*1===f)[0].column}else a=i.getSlideIndexByData(a)}return requestAnimationFrame(()=>{i.slideTo(a,t,n,r)}),i}function ST(e,t,n){t===void 0&&(t=!0);const r=this,{enabled:i,params:o,animating:a}=r;if(!i||r.destroyed)return r;typeof e>"u"&&(e=r.params.speed);let s=o.slidesPerGroup;o.slidesPerView==="auto"&&o.slidesPerGroup===1&&o.slidesPerGroupAuto&&(s=Math.max(r.slidesPerViewDynamic("current",!0),1));const l=r.activeIndex<o.slidesPerGroupSkip?1:s,u=r.virtual&&o.virtual.enabled;if(o.loop){if(a&&!u&&o.loopPreventsSliding)return!1;if(r.loopFix({direction:"next"}),r._clientLeft=r.wrapperEl.clientLeft,r.activeIndex===r.slides.length-1&&o.cssMode)return requestAnimationFrame(()=>{r.slideTo(r.activeIndex+l,e,t,n)}),!0}return o.rewind&&r.isEnd?r.slideTo(0,e,t,n):r.slideTo(r.activeIndex+l,e,t,n)}function jT(e,t,n){t===void 0&&(t=!0);const r=this,{params:i,snapGrid:o,slidesGrid:a,rtlTranslate:s,enabled:l,animating:u}=r;if(!l||r.destroyed)return r;typeof e>"u"&&(e=r.params.speed);const d=r.virtual&&i.virtual.enabled;if(i.loop){if(u&&!d&&i.loopPreventsSliding)return!1;r.loopFix({direction:"prev"}),r._clientLeft=r.wrapperEl.clientLeft}const p=s?r.translate:-r.translate;function f(g){return g<0?-Math.floor(Math.abs(g)):Math.floor(g)}const v=f(p),x=o.map(g=>f(g));let y=o[x.indexOf(v)-1];if(typeof y>"u"&&i.cssMode){let g;o.forEach((h,m)=>{v>=h&&(g=m)}),typeof g<"u"&&(y=o[g>0?g-1:g])}let b=0;if(typeof y<"u"&&(b=a.indexOf(y),b<0&&(b=r.activeIndex-1),i.slidesPerView==="auto"&&i.slidesPerGroup===1&&i.slidesPerGroupAuto&&(b=b-r.slidesPerViewDynamic("previous",!0)+1,b=Math.max(b,0))),i.rewind&&r.isBeginning){const g=r.params.virtual&&r.params.virtual.enabled&&r.virtual?r.virtual.slides.length-1:r.slides.length-1;return r.slideTo(g,e,t,n)}else if(i.loop&&r.activeIndex===0&&i.cssMode)return requestAnimationFrame(()=>{r.slideTo(b,e,t,n)}),!0;return r.slideTo(b,e,t,n)}function TT(e,t,n){t===void 0&&(t=!0);const r=this;if(!r.destroyed)return typeof e>"u"&&(e=r.params.speed),r.slideTo(r.activeIndex,e,t,n)}function CT(e,t,n,r){t===void 0&&(t=!0),r===void 0&&(r=.5);const i=this;if(i.destroyed)return;typeof e>"u"&&(e=i.params.speed);let o=i.activeIndex;const a=Math.min(i.params.slidesPerGroupSkip,o),s=a+Math.floor((o-a)/i.params.slidesPerGroup),l=i.rtlTranslate?i.translate:-i.translate;if(l>=i.snapGrid[s]){const u=i.snapGrid[s],d=i.snapGrid[s+1];l-u>(d-u)*r&&(o+=i.params.slidesPerGroup)}else{const u=i.snapGrid[s-1],d=i.snapGrid[s];l-u<=(d-u)*r&&(o-=i.params.slidesPerGroup)}return o=Math.max(o,0),o=Math.min(o,i.slidesGrid.length-1),i.slideTo(o,e,t,n)}function PT(){const e=this;if(e.destroyed)return;const{params:t,slidesEl:n}=e,r=t.slidesPerView==="auto"?e.slidesPerViewDynamic():t.slidesPerView;let i=e.clickedIndex,o;const a=e.isElement?"swiper-slide":`.${t.slideClass}`;if(t.loop){if(e.animating)return;o=parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"),10),t.centeredSlides?i<e.loopedSlides-r/2||i>e.slides.length-e.loopedSlides+r/2?(e.loopFix(),i=e.getSlideIndex(on(n,`${a}[data-swiper-slide-index="${o}"]`)[0]),dd(()=>{e.slideTo(i)})):e.slideTo(i):i>e.slides.length-r?(e.loopFix(),i=e.getSlideIndex(on(n,`${a}[data-swiper-slide-index="${o}"]`)[0]),dd(()=>{e.slideTo(i)})):e.slideTo(i)}else e.slideTo(i)}var ET={slideTo:wT,slideToLoop:bT,slideNext:ST,slidePrev:jT,slideReset:TT,slideToClosest:CT,slideToClickedSlide:PT};function kT(e){const t=this,{params:n,slidesEl:r}=t;if(!n.loop||t.virtual&&t.params.virtual.enabled)return;const i=()=>{on(r,`.${n.slideClass}, swiper-slide`).forEach((p,f)=>{p.setAttribute("data-swiper-slide-index",f)})},o=t.grid&&n.grid&&n.grid.rows>1,a=n.slidesPerGroup*(o?n.grid.rows:1),s=t.slides.length%a!==0,l=o&&t.slides.length%n.grid.rows!==0,u=d=>{for(let p=0;p<d;p+=1){const f=t.isElement?ea("swiper-slide",[n.slideBlankClass]):ea("div",[n.slideClass,n.slideBlankClass]);t.slidesEl.append(f)}};if(s){if(n.loopAddBlankSlides){const d=a-t.slides.length%a;u(d),t.recalcSlides(),t.updateSlides()}else Xs("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");i()}else if(l){if(n.loopAddBlankSlides){const d=n.grid.rows-t.slides.length%n.grid.rows;u(d),t.recalcSlides(),t.updateSlides()}else Xs("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");i()}else i();t.loopFix({slideRealIndex:e,direction:n.centeredSlides?void 0:"next"})}function zT(e){let{slideRealIndex:t,slideTo:n=!0,direction:r,setTranslate:i,activeSlideIndex:o,byController:a,byMousewheel:s}=e===void 0?{}:e;const l=this;if(!l.params.loop)return;l.emit("beforeLoopFix");const{slides:u,allowSlidePrev:d,allowSlideNext:p,slidesEl:f,params:v}=l,{centeredSlides:x}=v;if(l.allowSlidePrev=!0,l.allowSlideNext=!0,l.virtual&&v.virtual.enabled){n&&(!v.centeredSlides&&l.snapIndex===0?l.slideTo(l.virtual.slides.length,0,!1,!0):v.centeredSlides&&l.snapIndex<v.slidesPerView?l.slideTo(l.virtual.slides.length+l.snapIndex,0,!1,!0):l.snapIndex===l.snapGrid.length-1&&l.slideTo(l.virtual.slidesBefore,0,!1,!0)),l.allowSlidePrev=d,l.allowSlideNext=p,l.emit("loopFix");return}let y=v.slidesPerView;y==="auto"?y=l.slidesPerViewDynamic():(y=Math.ceil(parseFloat(v.slidesPerView,10)),x&&y%2===0&&(y=y+1));const b=v.slidesPerGroupAuto?y:v.slidesPerGroup;let g=b;g%b!==0&&(g+=b-g%b),g+=v.loopAdditionalSlides,l.loopedSlides=g;const h=l.grid&&v.grid&&v.grid.rows>1;u.length<y+g?Xs("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):h&&v.grid.fill==="row"&&Xs("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const m=[],w=[];let S=l.activeIndex;typeof o>"u"?o=l.getSlideIndex(u.filter(D=>D.classList.contains(v.slideActiveClass))[0]):S=o;const T=r==="next"||!r,P=r==="prev"||!r;let E=0,z=0;const k=h?Math.ceil(u.length/v.grid.rows):u.length,$=(h?u[o].column:o)+(x&&typeof i>"u"?-y/2+.5:0);if($<g){E=Math.max(g-$,b);for(let D=0;D<g-$;D+=1){const W=D-Math.floor(D/k)*k;if(h){const G=k-W-1;for(let se=u.length-1;se>=0;se-=1)u[se].column===G&&m.push(se)}else m.push(k-W-1)}}else if($+y>k-g){z=Math.max($-(k-g*2),b);for(let D=0;D<z;D+=1){const W=D-Math.floor(D/k)*k;h?u.forEach((G,se)=>{G.column===W&&w.push(se)}):w.push(W)}}if(l.__preventObserver__=!0,requestAnimationFrame(()=>{l.__preventObserver__=!1}),P&&m.forEach(D=>{u[D].swiperLoopMoveDOM=!0,f.prepend(u[D]),u[D].swiperLoopMoveDOM=!1}),T&&w.forEach(D=>{u[D].swiperLoopMoveDOM=!0,f.append(u[D]),u[D].swiperLoopMoveDOM=!1}),l.recalcSlides(),v.slidesPerView==="auto"?l.updateSlides():h&&(m.length>0&&P||w.length>0&&T)&&l.slides.forEach((D,W)=>{l.grid.updateSlide(W,D,l.slides)}),v.watchSlidesProgress&&l.updateSlidesOffset(),n){if(m.length>0&&P){if(typeof t>"u"){const D=l.slidesGrid[S],G=l.slidesGrid[S+E]-D;s?l.setTranslate(l.translate-G):(l.slideTo(S+Math.ceil(E),0,!1,!0),i&&(l.touchEventsData.startTranslate=l.touchEventsData.startTranslate-G,l.touchEventsData.currentTranslate=l.touchEventsData.currentTranslate-G))}else if(i){const D=h?m.length/v.grid.rows:m.length;l.slideTo(l.activeIndex+D,0,!1,!0),l.touchEventsData.currentTranslate=l.translate}}else if(w.length>0&&T)if(typeof t>"u"){const D=l.slidesGrid[S],G=l.slidesGrid[S-z]-D;s?l.setTranslate(l.translate-G):(l.slideTo(S-z,0,!1,!0),i&&(l.touchEventsData.startTranslate=l.touchEventsData.startTranslate-G,l.touchEventsData.currentTranslate=l.touchEventsData.currentTranslate-G))}else{const D=h?w.length/v.grid.rows:w.length;l.slideTo(l.activeIndex-D,0,!1,!0)}}if(l.allowSlidePrev=d,l.allowSlideNext=p,l.controller&&l.controller.control&&!a){const D={slideRealIndex:t,direction:r,setTranslate:i,activeSlideIndex:o,byController:!0};Array.isArray(l.controller.control)?l.controller.control.forEach(W=>{!W.destroyed&&W.params.loop&&W.loopFix({...D,slideTo:W.params.slidesPerView===v.slidesPerView?n:!1})}):l.controller.control instanceof l.constructor&&l.controller.control.params.loop&&l.controller.control.loopFix({...D,slideTo:l.controller.control.params.slidesPerView===v.slidesPerView?n:!1})}l.emit("loopFix")}function AT(){const e=this,{params:t,slidesEl:n}=e;if(!t.loop||e.virtual&&e.params.virtual.enabled)return;e.recalcSlides();const r=[];e.slides.forEach(i=>{const o=typeof i.swiperSlideIndex>"u"?i.getAttribute("data-swiper-slide-index")*1:i.swiperSlideIndex;r[o]=i}),e.slides.forEach(i=>{i.removeAttribute("data-swiper-slide-index")}),r.forEach(i=>{n.append(i)}),e.recalcSlides(),e.slideTo(e.realIndex,0)}var LT={loopCreate:kT,loopFix:zT,loopDestroy:AT};function MT(e){const t=this;if(!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const n=t.params.touchEventsTarget==="container"?t.el:t.wrapperEl;t.isElement&&(t.__preventObserver__=!0),n.style.cursor="move",n.style.cursor=e?"grabbing":"grab",t.isElement&&requestAnimationFrame(()=>{t.__preventObserver__=!1})}function _T(){const e=this;e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.isElement&&(e.__preventObserver__=!0),e[e.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1}))}var OT={setGrabCursor:MT,unsetGrabCursor:_T};function IT(e,t){t===void 0&&(t=this);function n(r){if(!r||r===Cn()||r===Ct())return null;r.assignedSlot&&(r=r.assignedSlot);const i=r.closest(e);return!i&&!r.getRootNode?null:i||n(r.getRootNode().host)}return n(t)}function C0(e,t,n){const r=Ct(),{params:i}=e,o=i.edgeSwipeDetection,a=i.edgeSwipeThreshold;return o&&(n<=a||n>=r.innerWidth-a)?o==="prevent"?(t.preventDefault(),!0):!1:!0}function RT(e){const t=this,n=Cn();let r=e;r.originalEvent&&(r=r.originalEvent);const i=t.touchEventsData;if(r.type==="pointerdown"){if(i.pointerId!==null&&i.pointerId!==r.pointerId)return;i.pointerId=r.pointerId}else r.type==="touchstart"&&r.targetTouches.length===1&&(i.touchId=r.targetTouches[0].identifier);if(r.type==="touchstart"){C0(t,r,r.targetTouches[0].pageX);return}const{params:o,touches:a,enabled:s}=t;if(!s||!o.simulateTouch&&r.pointerType==="mouse"||t.animating&&o.preventInteractionOnTransition)return;!t.animating&&o.cssMode&&o.loop&&t.loopFix();let l=r.target;if(o.touchEventsTarget==="wrapper"&&!$8(l,t.wrapperEl)||"which"in r&&r.which===3||"button"in r&&r.button>0||i.isTouched&&i.isMoved)return;const u=!!o.noSwipingClass&&o.noSwipingClass!=="",d=r.composedPath?r.composedPath():r.path;u&&r.target&&r.target.shadowRoot&&d&&(l=d[0]);const p=o.noSwipingSelector?o.noSwipingSelector:`.${o.noSwipingClass}`,f=!!(r.target&&r.target.shadowRoot);if(o.noSwiping&&(f?IT(p,l):l.closest(p))){t.allowClick=!0;return}if(o.swipeHandler&&!l.closest(o.swipeHandler))return;a.currentX=r.pageX,a.currentY=r.pageY;const v=a.currentX,x=a.currentY;if(!C0(t,r,v))return;Object.assign(i,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),a.startX=v,a.startY=x,i.touchStartTime=Ks(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,o.threshold>0&&(i.allowThresholdMove=!1);let y=!0;l.matches(i.focusableElements)&&(y=!1,l.nodeName==="SELECT"&&(i.isTouched=!1)),n.activeElement&&n.activeElement.matches(i.focusableElements)&&n.activeElement!==l&&(r.pointerType==="mouse"||r.pointerType!=="mouse"&&!l.matches(i.focusableElements))&&n.activeElement.blur();const b=y&&t.allowTouchMove&&o.touchStartPreventDefault;(o.touchStartForcePreventDefault||b)&&!l.isContentEditable&&r.preventDefault(),o.freeMode&&o.freeMode.enabled&&t.freeMode&&t.animating&&!o.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",r)}function VT(e){const t=Cn(),n=this,r=n.touchEventsData,{params:i,touches:o,rtlTranslate:a,enabled:s}=n;if(!s||!i.simulateTouch&&e.pointerType==="mouse")return;let l=e;if(l.originalEvent&&(l=l.originalEvent),l.type==="pointermove"&&(r.touchId!==null||l.pointerId!==r.pointerId))return;let u;if(l.type==="touchmove"){if(u=[...l.changedTouches].filter(T=>T.identifier===r.touchId)[0],!u||u.identifier!==r.touchId)return}else u=l;if(!r.isTouched){r.startMoving&&r.isScrolling&&n.emit("touchMoveOpposite",l);return}const d=u.pageX,p=u.pageY;if(l.preventedByNestedSwiper){o.startX=d,o.startY=p;return}if(!n.allowTouchMove){l.target.matches(r.focusableElements)||(n.allowClick=!1),r.isTouched&&(Object.assign(o,{startX:d,startY:p,currentX:d,currentY:p}),r.touchStartTime=Ks());return}if(i.touchReleaseOnEdges&&!i.loop){if(n.isVertical()){if(p<o.startY&&n.translate<=n.maxTranslate()||p>o.startY&&n.translate>=n.minTranslate()){r.isTouched=!1,r.isMoved=!1;return}}else if(d<o.startX&&n.translate<=n.maxTranslate()||d>o.startX&&n.translate>=n.minTranslate())return}if(t.activeElement&&t.activeElement.matches(r.focusableElements)&&t.activeElement!==l.target&&l.pointerType!=="mouse"&&t.activeElement.blur(),t.activeElement&&l.target===t.activeElement&&l.target.matches(r.focusableElements)){r.isMoved=!0,n.allowClick=!1;return}r.allowTouchCallbacks&&n.emit("touchMove",l),o.previousX=o.currentX,o.previousY=o.currentY,o.currentX=d,o.currentY=p;const f=o.currentX-o.startX,v=o.currentY-o.startY;if(n.params.threshold&&Math.sqrt(f**2+v**2)<n.params.threshold)return;if(typeof r.isScrolling>"u"){let T;n.isHorizontal()&&o.currentY===o.startY||n.isVertical()&&o.currentX===o.startX?r.isScrolling=!1:f*f+v*v>=25&&(T=Math.atan2(Math.abs(v),Math.abs(f))*180/Math.PI,r.isScrolling=n.isHorizontal()?T>i.touchAngle:90-T>i.touchAngle)}if(r.isScrolling&&n.emit("touchMoveOpposite",l),typeof r.startMoving>"u"&&(o.currentX!==o.startX||o.currentY!==o.startY)&&(r.startMoving=!0),r.isScrolling||l.type==="touchmove"&&r.preventTouchMoveFromPointerMove){r.isTouched=!1;return}if(!r.startMoving)return;n.allowClick=!1,!i.cssMode&&l.cancelable&&l.preventDefault(),i.touchMoveStopPropagation&&!i.nested&&l.stopPropagation();let x=n.isHorizontal()?f:v,y=n.isHorizontal()?o.currentX-o.previousX:o.currentY-o.previousY;i.oneWayMovement&&(x=Math.abs(x)*(a?1:-1),y=Math.abs(y)*(a?1:-1)),o.diff=x,x*=i.touchRatio,a&&(x=-x,y=-y);const b=n.touchesDirection;n.swipeDirection=x>0?"prev":"next",n.touchesDirection=y>0?"prev":"next";const g=n.params.loop&&!i.cssMode,h=n.touchesDirection==="next"&&n.allowSlideNext||n.touchesDirection==="prev"&&n.allowSlidePrev;if(!r.isMoved){if(g&&h&&n.loopFix({direction:n.swipeDirection}),r.startTranslate=n.getTranslate(),n.setTransition(0),n.animating){const T=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});n.wrapperEl.dispatchEvent(T)}r.allowMomentumBounce=!1,i.grabCursor&&(n.allowSlideNext===!0||n.allowSlidePrev===!0)&&n.setGrabCursor(!0),n.emit("sliderFirstMove",l)}let m;if(new Date().getTime(),r.isMoved&&r.allowThresholdMove&&b!==n.touchesDirection&&g&&h&&Math.abs(x)>=1){Object.assign(o,{startX:d,startY:p,currentX:d,currentY:p,startTranslate:r.currentTranslate}),r.loopSwapReset=!0,r.startTranslate=r.currentTranslate;return}n.emit("sliderMove",l),r.isMoved=!0,r.currentTranslate=x+r.startTranslate;let w=!0,S=i.resistanceRatio;if(i.touchReleaseOnEdges&&(S=0),x>0?(g&&h&&!m&&r.allowThresholdMove&&r.currentTranslate>(i.centeredSlides?n.minTranslate()-n.slidesSizesGrid[n.activeIndex+1]-(i.slidesPerView!=="auto"&&n.slides.length-i.slidesPerView>=2?n.slidesSizesGrid[n.activeIndex+1]+n.params.spaceBetween:0)-n.params.spaceBetween:n.minTranslate())&&n.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),r.currentTranslate>n.minTranslate()&&(w=!1,i.resistance&&(r.currentTranslate=n.minTranslate()-1+(-n.minTranslate()+r.startTranslate+x)**S))):x<0&&(g&&h&&!m&&r.allowThresholdMove&&r.currentTranslate<(i.centeredSlides?n.maxTranslate()+n.slidesSizesGrid[n.slidesSizesGrid.length-1]+n.params.spaceBetween+(i.slidesPerView!=="auto"&&n.slides.length-i.slidesPerView>=2?n.slidesSizesGrid[n.slidesSizesGrid.length-1]+n.params.spaceBetween:0):n.maxTranslate())&&n.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:n.slides.length-(i.slidesPerView==="auto"?n.slidesPerViewDynamic():Math.ceil(parseFloat(i.slidesPerView,10)))}),r.currentTranslate<n.maxTranslate()&&(w=!1,i.resistance&&(r.currentTranslate=n.maxTranslate()+1-(n.maxTranslate()-r.startTranslate-x)**S))),w&&(l.preventedByNestedSwiper=!0),!n.allowSlideNext&&n.swipeDirection==="next"&&r.currentTranslate<r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&n.swipeDirection==="prev"&&r.currentTranslate>r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&!n.allowSlideNext&&(r.currentTranslate=r.startTranslate),i.threshold>0)if(Math.abs(x)>i.threshold||r.allowThresholdMove){if(!r.allowThresholdMove){r.allowThresholdMove=!0,o.startX=o.currentX,o.startY=o.currentY,r.currentTranslate=r.startTranslate,o.diff=n.isHorizontal()?o.currentX-o.startX:o.currentY-o.startY;return}}else{r.currentTranslate=r.startTranslate;return}!i.followFinger||i.cssMode||((i.freeMode&&i.freeMode.enabled&&n.freeMode||i.watchSlidesProgress)&&(n.updateActiveIndex(),n.updateSlidesClasses()),i.freeMode&&i.freeMode.enabled&&n.freeMode&&n.freeMode.onTouchMove(),n.updateProgress(r.currentTranslate),n.setTranslate(r.currentTranslate))}function DT(e){const t=this,n=t.touchEventsData;let r=e;r.originalEvent&&(r=r.originalEvent);let i;if(r.type==="touchend"||r.type==="touchcancel"){if(i=[...r.changedTouches].filter(S=>S.identifier===n.touchId)[0],!i||i.identifier!==n.touchId)return}else{if(n.touchId!==null||r.pointerId!==n.pointerId)return;i=r}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(r.type)&&!(["pointercancel","contextmenu"].includes(r.type)&&(t.browser.isSafari||t.browser.isWebView)))return;n.pointerId=null,n.touchId=null;const{params:a,touches:s,rtlTranslate:l,slidesGrid:u,enabled:d}=t;if(!d||!a.simulateTouch&&r.pointerType==="mouse")return;if(n.allowTouchCallbacks&&t.emit("touchEnd",r),n.allowTouchCallbacks=!1,!n.isTouched){n.isMoved&&a.grabCursor&&t.setGrabCursor(!1),n.isMoved=!1,n.startMoving=!1;return}a.grabCursor&&n.isMoved&&n.isTouched&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!1);const p=Ks(),f=p-n.touchStartTime;if(t.allowClick){const S=r.path||r.composedPath&&r.composedPath();t.updateClickedSlide(S&&S[0]||r.target,S),t.emit("tap click",r),f<300&&p-n.lastClickTime<300&&t.emit("doubleTap doubleClick",r)}if(n.lastClickTime=Ks(),dd(()=>{t.destroyed||(t.allowClick=!0)}),!n.isTouched||!n.isMoved||!t.swipeDirection||s.diff===0&&!n.loopSwapReset||n.currentTranslate===n.startTranslate&&!n.loopSwapReset){n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;return}n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;let v;if(a.followFinger?v=l?t.translate:-t.translate:v=-n.currentTranslate,a.cssMode)return;if(a.freeMode&&a.freeMode.enabled){t.freeMode.onTouchEnd({currentPos:v});return}const x=v>=-t.maxTranslate()&&!t.params.loop;let y=0,b=t.slidesSizesGrid[0];for(let S=0;S<u.length;S+=S<a.slidesPerGroupSkip?1:a.slidesPerGroup){const T=S<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;typeof u[S+T]<"u"?(x||v>=u[S]&&v<u[S+T])&&(y=S,b=u[S+T]-u[S]):(x||v>=u[S])&&(y=S,b=u[u.length-1]-u[u.length-2])}let g=null,h=null;a.rewind&&(t.isBeginning?h=a.virtual&&a.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(g=0));const m=(v-u[y])/b,w=y<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;if(f>a.longSwipesMs){if(!a.longSwipes){t.slideTo(t.activeIndex);return}t.swipeDirection==="next"&&(m>=a.longSwipesRatio?t.slideTo(a.rewind&&t.isEnd?g:y+w):t.slideTo(y)),t.swipeDirection==="prev"&&(m>1-a.longSwipesRatio?t.slideTo(y+w):h!==null&&m<0&&Math.abs(m)>a.longSwipesRatio?t.slideTo(h):t.slideTo(y))}else{if(!a.shortSwipes){t.slideTo(t.activeIndex);return}t.navigation&&(r.target===t.navigation.nextEl||r.target===t.navigation.prevEl)?r.target===t.navigation.nextEl?t.slideTo(y+w):t.slideTo(y):(t.swipeDirection==="next"&&t.slideTo(g!==null?g:y+w),t.swipeDirection==="prev"&&t.slideTo(h!==null?h:y))}}function P0(){const e=this,{params:t,el:n}=e;if(n&&n.offsetWidth===0)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:r,allowSlidePrev:i,snapGrid:o}=e,a=e.virtual&&e.params.virtual.enabled;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses();const s=a&&t.loop;(t.slidesPerView==="auto"||t.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides&&!s?e.slideTo(e.slides.length-1,0,!1,!0):e.params.loop&&!a?e.slideToLoop(e.realIndex,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&(clearTimeout(e.autoplay.resizeTimeout),e.autoplay.resizeTimeout=setTimeout(()=>{e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.resume()},500)),e.allowSlidePrev=i,e.allowSlideNext=r,e.params.watchOverflow&&o!==e.snapGrid&&e.checkOverflow()}function NT(e){const t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function BT(){const e=this,{wrapperEl:t,rtlTranslate:n,enabled:r}=e;if(!r)return;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,e.translate===0&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();let i;const o=e.maxTranslate()-e.minTranslate();o===0?i=0:i=(e.translate-e.minTranslate())/o,i!==e.progress&&e.updateProgress(n?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}function FT(e){const t=this;ss(t,e.target),!(t.params.cssMode||t.params.slidesPerView!=="auto"&&!t.params.autoHeight)&&t.update()}function $T(){const e=this;e.documentTouchHandlerProceeded||(e.documentTouchHandlerProceeded=!0,e.params.touchReleaseOnEdges&&(e.el.style.touchAction="auto"))}const Iy=(e,t)=>{const n=Cn(),{params:r,el:i,wrapperEl:o,device:a}=e,s=!!r.nested,l=t==="on"?"addEventListener":"removeEventListener",u=t;!i||typeof i=="string"||(n[l]("touchstart",e.onDocumentTouchStart,{passive:!1,capture:s}),i[l]("touchstart",e.onTouchStart,{passive:!1}),i[l]("pointerdown",e.onTouchStart,{passive:!1}),n[l]("touchmove",e.onTouchMove,{passive:!1,capture:s}),n[l]("pointermove",e.onTouchMove,{passive:!1,capture:s}),n[l]("touchend",e.onTouchEnd,{passive:!0}),n[l]("pointerup",e.onTouchEnd,{passive:!0}),n[l]("pointercancel",e.onTouchEnd,{passive:!0}),n[l]("touchcancel",e.onTouchEnd,{passive:!0}),n[l]("pointerout",e.onTouchEnd,{passive:!0}),n[l]("pointerleave",e.onTouchEnd,{passive:!0}),n[l]("contextmenu",e.onTouchEnd,{passive:!0}),(r.preventClicks||r.preventClicksPropagation)&&i[l]("click",e.onClick,!0),r.cssMode&&o[l]("scroll",e.onScroll),r.updateOnWindowResize?e[u](a.ios||a.android?"resize orientationchange observerUpdate":"resize observerUpdate",P0,!0):e[u]("observerUpdate",P0,!0),i[l]("load",e.onLoad,{capture:!0}))};function HT(){const e=this,{params:t}=e;e.onTouchStart=RT.bind(e),e.onTouchMove=VT.bind(e),e.onTouchEnd=DT.bind(e),e.onDocumentTouchStart=$T.bind(e),t.cssMode&&(e.onScroll=BT.bind(e)),e.onClick=NT.bind(e),e.onLoad=FT.bind(e),Iy(e,"on")}function UT(){Iy(this,"off")}var WT={attachEvents:HT,detachEvents:UT};const E0=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;function qT(){const e=this,{realIndex:t,initialized:n,params:r,el:i}=e,o=r.breakpoints;if(!o||o&&Object.keys(o).length===0)return;const a=e.getBreakpoint(o,e.params.breakpointsBase,e.el);if(!a||e.currentBreakpoint===a)return;const l=(a in o?o[a]:void 0)||e.originalParams,u=E0(e,r),d=E0(e,l),p=e.params.grabCursor,f=l.grabCursor,v=r.enabled;u&&!d?(i.classList.remove(`${r.containerModifierClass}grid`,`${r.containerModifierClass}grid-column`),e.emitContainerClasses()):!u&&d&&(i.classList.add(`${r.containerModifierClass}grid`),(l.grid.fill&&l.grid.fill==="column"||!l.grid.fill&&r.grid.fill==="column")&&i.classList.add(`${r.containerModifierClass}grid-column`),e.emitContainerClasses()),p&&!f?e.unsetGrabCursor():!p&&f&&e.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(m=>{if(typeof l[m]>"u")return;const w=r[m]&&r[m].enabled,S=l[m]&&l[m].enabled;w&&!S&&e[m].disable(),!w&&S&&e[m].enable()});const x=l.direction&&l.direction!==r.direction,y=r.loop&&(l.slidesPerView!==r.slidesPerView||x),b=r.loop;x&&n&&e.changeDirection(),gt(e.params,l);const g=e.params.enabled,h=e.params.loop;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),v&&!g?e.disable():!v&&g&&e.enable(),e.currentBreakpoint=a,e.emit("_beforeBreakpoint",l),n&&(y?(e.loopDestroy(),e.loopCreate(t),e.updateSlides()):!b&&h?(e.loopCreate(t),e.updateSlides()):b&&!h&&e.loopDestroy()),e.emit("breakpoint",l)}function GT(e,t,n){if(t===void 0&&(t="window"),!e||t==="container"&&!n)return;let r=!1;const i=Ct(),o=t==="window"?i.innerHeight:n.clientHeight,a=Object.keys(e).map(s=>{if(typeof s=="string"&&s.indexOf("@")===0){const l=parseFloat(s.substr(1));return{value:o*l,point:s}}return{value:s,point:s}});a.sort((s,l)=>parseInt(s.value,10)-parseInt(l.value,10));for(let s=0;s<a.length;s+=1){const{point:l,value:u}=a[s];t==="window"?i.matchMedia(`(min-width: ${u}px)`).matches&&(r=l):u<=n.clientWidth&&(r=l)}return r||"max"}var YT={setBreakpoint:qT,getBreakpoint:GT};function KT(e,t){const n=[];return e.forEach(r=>{typeof r=="object"?Object.keys(r).forEach(i=>{r[i]&&n.push(t+i)}):typeof r=="string"&&n.push(t+r)}),n}function XT(){const e=this,{classNames:t,params:n,rtl:r,el:i,device:o}=e,a=KT(["initialized",n.direction,{"free-mode":e.params.freeMode&&n.freeMode.enabled},{autoheight:n.autoHeight},{rtl:r},{grid:n.grid&&n.grid.rows>1},{"grid-column":n.grid&&n.grid.rows>1&&n.grid.fill==="column"},{android:o.android},{ios:o.ios},{"css-mode":n.cssMode},{centered:n.cssMode&&n.centeredSlides},{"watch-progress":n.watchSlidesProgress}],n.containerModifierClass);t.push(...a),i.classList.add(...t),e.emitContainerClasses()}function QT(){const e=this,{el:t,classNames:n}=e;!t||typeof t=="string"||(t.classList.remove(...n),e.emitContainerClasses())}var ZT={addClasses:XT,removeClasses:QT};function JT(){const e=this,{isLocked:t,params:n}=e,{slidesOffsetBefore:r}=n;if(r){const i=e.slides.length-1,o=e.slidesGrid[i]+e.slidesSizesGrid[i]+r*2;e.isLocked=e.size>o}else e.isLocked=e.snapGrid.length===1;n.allowSlideNext===!0&&(e.allowSlideNext=!e.isLocked),n.allowSlidePrev===!0&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}var eC={checkOverflow:JT},hd={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function tC(e,t){return function(r){r===void 0&&(r={});const i=Object.keys(r)[0],o=r[i];if(typeof o!="object"||o===null){gt(t,r);return}if(e[i]===!0&&(e[i]={enabled:!0}),i==="navigation"&&e[i]&&e[i].enabled&&!e[i].prevEl&&!e[i].nextEl&&(e[i].auto=!0),["pagination","scrollbar"].indexOf(i)>=0&&e[i]&&e[i].enabled&&!e[i].el&&(e[i].auto=!0),!(i in e&&"enabled"in o)){gt(t,r);return}typeof e[i]=="object"&&!("enabled"in e[i])&&(e[i].enabled=!0),e[i]||(e[i]={enabled:!1}),gt(t,r)}}const Dc={eventsEmitter:Z8,update:cT,translate:mT,transition:yT,slide:ET,loop:LT,grabCursor:OT,events:WT,breakpoints:YT,checkOverflow:eC,classes:ZT},Nc={};let of=class pn{constructor(){let t,n;for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];i.length===1&&i[0].constructor&&Object.prototype.toString.call(i[0]).slice(8,-1)==="Object"?n=i[0]:[t,n]=i,n||(n={}),n=gt({},n),t&&!n.el&&(n.el=t);const a=Cn();if(n.el&&typeof n.el=="string"&&a.querySelectorAll(n.el).length>1){const d=[];return a.querySelectorAll(n.el).forEach(p=>{const f=gt({},n,{el:p});d.push(new pn(f))}),d}const s=this;s.__swiper__=!0,s.support=My(),s.device=_y({userAgent:n.userAgent}),s.browser=K8(),s.eventsListeners={},s.eventsAnyListeners=[],s.modules=[...s.__modules__],n.modules&&Array.isArray(n.modules)&&s.modules.push(...n.modules);const l={};s.modules.forEach(d=>{d({params:n,swiper:s,extendParams:tC(n,l),on:s.on.bind(s),once:s.once.bind(s),off:s.off.bind(s),emit:s.emit.bind(s)})});const u=gt({},hd,l);return s.params=gt({},u,Nc,n),s.originalParams=gt({},s.params),s.passedParams=gt({},n),s.params&&s.params.on&&Object.keys(s.params.on).forEach(d=>{s.on(d,s.params.on[d])}),s.params&&s.params.onAny&&s.onAny(s.params.onAny),Object.assign(s,{enabled:s.params.enabled,el:t,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return s.params.direction==="horizontal"},isVertical(){return s.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:s.params.allowSlideNext,allowSlidePrev:s.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:s.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:s.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),s.emit("_swiper"),s.params.init&&s.init(),s}getDirectionLabel(t){return this.isHorizontal()?t:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[t]}getSlideIndex(t){const{slidesEl:n,params:r}=this,i=on(n,`.${r.slideClass}, swiper-slide`),o=Qs(i[0]);return Qs(t)-o}getSlideIndexByData(t){return this.getSlideIndex(this.slides.filter(n=>n.getAttribute("data-swiper-slide-index")*1===t)[0])}recalcSlides(){const t=this,{slidesEl:n,params:r}=t;t.slides=on(n,`.${r.slideClass}, swiper-slide`)}enable(){const t=this;t.enabled||(t.enabled=!0,t.params.grabCursor&&t.setGrabCursor(),t.emit("enable"))}disable(){const t=this;t.enabled&&(t.enabled=!1,t.params.grabCursor&&t.unsetGrabCursor(),t.emit("disable"))}setProgress(t,n){const r=this;t=Math.min(Math.max(t,0),1);const i=r.minTranslate(),a=(r.maxTranslate()-i)*t+i;r.translateTo(a,typeof n>"u"?0:n),r.updateActiveIndex(),r.updateSlidesClasses()}emitContainerClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=t.el.className.split(" ").filter(r=>r.indexOf("swiper")===0||r.indexOf(t.params.containerModifierClass)===0);t.emit("_containerClasses",n.join(" "))}getSlideClasses(t){const n=this;return n.destroyed?"":t.className.split(" ").filter(r=>r.indexOf("swiper-slide")===0||r.indexOf(n.params.slideClass)===0).join(" ")}emitSlidesClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=[];t.slides.forEach(r=>{const i=t.getSlideClasses(r);n.push({slideEl:r,classNames:i}),t.emit("_slideClass",r,i)}),t.emit("_slideClasses",n)}slidesPerViewDynamic(t,n){t===void 0&&(t="current"),n===void 0&&(n=!1);const r=this,{params:i,slides:o,slidesGrid:a,slidesSizesGrid:s,size:l,activeIndex:u}=r;let d=1;if(typeof i.slidesPerView=="number")return i.slidesPerView;if(i.centeredSlides){let p=o[u]?Math.ceil(o[u].swiperSlideSize):0,f;for(let v=u+1;v<o.length;v+=1)o[v]&&!f&&(p+=Math.ceil(o[v].swiperSlideSize),d+=1,p>l&&(f=!0));for(let v=u-1;v>=0;v-=1)o[v]&&!f&&(p+=o[v].swiperSlideSize,d+=1,p>l&&(f=!0))}else if(t==="current")for(let p=u+1;p<o.length;p+=1)(n?a[p]+s[p]-a[u]<l:a[p]-a[u]<l)&&(d+=1);else for(let p=u-1;p>=0;p-=1)a[u]-a[p]<l&&(d+=1);return d}update(){const t=this;if(!t||t.destroyed)return;const{snapGrid:n,params:r}=t;r.breakpoints&&t.setBreakpoint(),[...t.el.querySelectorAll('[loading="lazy"]')].forEach(a=>{a.complete&&ss(t,a)}),t.updateSize(),t.updateSlides(),t.updateProgress(),t.updateSlidesClasses();function i(){const a=t.rtlTranslate?t.translate*-1:t.translate,s=Math.min(Math.max(a,t.maxTranslate()),t.minTranslate());t.setTranslate(s),t.updateActiveIndex(),t.updateSlidesClasses()}let o;if(r.freeMode&&r.freeMode.enabled&&!r.cssMode)i(),r.autoHeight&&t.updateAutoHeight();else{if((r.slidesPerView==="auto"||r.slidesPerView>1)&&t.isEnd&&!r.centeredSlides){const a=t.virtual&&r.virtual.enabled?t.virtual.slides:t.slides;o=t.slideTo(a.length-1,0,!1,!0)}else o=t.slideTo(t.activeIndex,0,!1,!0);o||i()}r.watchOverflow&&n!==t.snapGrid&&t.checkOverflow(),t.emit("update")}changeDirection(t,n){n===void 0&&(n=!0);const r=this,i=r.params.direction;return t||(t=i==="horizontal"?"vertical":"horizontal"),t===i||t!=="horizontal"&&t!=="vertical"||(r.el.classList.remove(`${r.params.containerModifierClass}${i}`),r.el.classList.add(`${r.params.containerModifierClass}${t}`),r.emitContainerClasses(),r.params.direction=t,r.slides.forEach(o=>{t==="vertical"?o.style.width="":o.style.height=""}),r.emit("changeDirection"),n&&r.update()),r}changeLanguageDirection(t){const n=this;n.rtl&&t==="rtl"||!n.rtl&&t==="ltr"||(n.rtl=t==="rtl",n.rtlTranslate=n.params.direction==="horizontal"&&n.rtl,n.rtl?(n.el.classList.add(`${n.params.containerModifierClass}rtl`),n.el.dir="rtl"):(n.el.classList.remove(`${n.params.containerModifierClass}rtl`),n.el.dir="ltr"),n.update())}mount(t){const n=this;if(n.mounted)return!0;let r=t||n.params.el;if(typeof r=="string"&&(r=document.querySelector(r)),!r)return!1;r.swiper=n,r.parentNode&&r.parentNode.host&&r.parentNode.host.nodeName===n.params.swiperElementNodeName.toUpperCase()&&(n.isElement=!0);const i=()=>`.${(n.params.wrapperClass||"").trim().split(" ").join(".")}`;let a=r&&r.shadowRoot&&r.shadowRoot.querySelector?r.shadowRoot.querySelector(i()):on(r,i())[0];return!a&&n.params.createElements&&(a=ea("div",n.params.wrapperClass),r.append(a),on(r,`.${n.params.slideClass}`).forEach(s=>{a.append(s)})),Object.assign(n,{el:r,wrapperEl:a,slidesEl:n.isElement&&!r.parentNode.host.slideSlots?r.parentNode.host:a,hostEl:n.isElement?r.parentNode.host:r,mounted:!0,rtl:r.dir.toLowerCase()==="rtl"||Gn(r,"direction")==="rtl",rtlTranslate:n.params.direction==="horizontal"&&(r.dir.toLowerCase()==="rtl"||Gn(r,"direction")==="rtl"),wrongRTL:Gn(a,"display")==="-webkit-box"}),!0}init(t){const n=this;if(n.initialized||n.mount(t)===!1)return n;n.emit("beforeInit"),n.params.breakpoints&&n.setBreakpoint(),n.addClasses(),n.updateSize(),n.updateSlides(),n.params.watchOverflow&&n.checkOverflow(),n.params.grabCursor&&n.enabled&&n.setGrabCursor(),n.params.loop&&n.virtual&&n.params.virtual.enabled?n.slideTo(n.params.initialSlide+n.virtual.slidesBefore,0,n.params.runCallbacksOnInit,!1,!0):n.slideTo(n.params.initialSlide,0,n.params.runCallbacksOnInit,!1,!0),n.params.loop&&n.loopCreate(),n.attachEvents();const i=[...n.el.querySelectorAll('[loading="lazy"]')];return n.isElement&&i.push(...n.hostEl.querySelectorAll('[loading="lazy"]')),i.forEach(o=>{o.complete?ss(n,o):o.addEventListener("load",a=>{ss(n,a.target)})}),fd(n),n.initialized=!0,fd(n),n.emit("init"),n.emit("afterInit"),n}destroy(t,n){t===void 0&&(t=!0),n===void 0&&(n=!0);const r=this,{params:i,el:o,wrapperEl:a,slides:s}=r;return typeof r.params>"u"||r.destroyed||(r.emit("beforeDestroy"),r.initialized=!1,r.detachEvents(),i.loop&&r.loopDestroy(),n&&(r.removeClasses(),o&&typeof o!="string"&&o.removeAttribute("style"),a&&a.removeAttribute("style"),s&&s.length&&s.forEach(l=>{l.classList.remove(i.slideVisibleClass,i.slideFullyVisibleClass,i.slideActiveClass,i.slideNextClass,i.slidePrevClass),l.removeAttribute("style"),l.removeAttribute("data-swiper-slide-index")})),r.emit("destroy"),Object.keys(r.eventsListeners).forEach(l=>{r.off(l)}),t!==!1&&(r.el&&typeof r.el!="string"&&(r.el.swiper=null),D8(r)),r.destroyed=!0),null}static extendDefaults(t){gt(Nc,t)}static get extendedDefaults(){return Nc}static get defaults(){return hd}static installModule(t){pn.prototype.__modules__||(pn.prototype.__modules__=[]);const n=pn.prototype.__modules__;typeof t=="function"&&n.indexOf(t)<0&&n.push(t)}static use(t){return Array.isArray(t)?(t.forEach(n=>pn.installModule(n)),pn):(pn.installModule(t),pn)}};Object.keys(Dc).forEach(e=>{Object.keys(Dc[e]).forEach(t=>{of.prototype[t]=Dc[e][t]})});of.use([X8,Q8]);const Ry=["eventsPrefix","injectStyles","injectStylesUrls","modules","init","_direction","oneWayMovement","swiperElementNodeName","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","breakpointsBase","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_loop","loopAdditionalSlides","loopAddBlankSlides","loopPreventsSliding","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideActiveClass","slideVisibleClass","slideFullyVisibleClass","slideNextClass","slidePrevClass","slideBlankClass","wrapperClass","lazyPreloaderClass","lazyPreloadPrevNext","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom","control"];function Vr(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"&&!e.__swiper__}function yi(e,t){const n=["__proto__","constructor","prototype"];Object.keys(t).filter(r=>n.indexOf(r)<0).forEach(r=>{typeof e[r]>"u"?e[r]=t[r]:Vr(t[r])&&Vr(e[r])&&Object.keys(t[r]).length>0?t[r].__swiper__?e[r]=t[r]:yi(e[r],t[r]):e[r]=t[r]})}function Vy(e){return e===void 0&&(e={}),e.navigation&&typeof e.navigation.nextEl>"u"&&typeof e.navigation.prevEl>"u"}function Dy(e){return e===void 0&&(e={}),e.pagination&&typeof e.pagination.el>"u"}function Ny(e){return e===void 0&&(e={}),e.scrollbar&&typeof e.scrollbar.el>"u"}function By(e){e===void 0&&(e="");const t=e.split(" ").map(r=>r.trim()).filter(r=>!!r),n=[];return t.forEach(r=>{n.indexOf(r)<0&&n.push(r)}),n.join(" ")}function nC(e){return e===void 0&&(e=""),e?e.includes("swiper-wrapper")?e:`swiper-wrapper ${e}`:"swiper-wrapper"}function rC(e){let{swiper:t,slides:n,passedParams:r,changedParams:i,nextEl:o,prevEl:a,scrollbarEl:s,paginationEl:l}=e;const u=i.filter(z=>z!=="children"&&z!=="direction"&&z!=="wrapperClass"),{params:d,pagination:p,navigation:f,scrollbar:v,virtual:x,thumbs:y}=t;let b,g,h,m,w,S,T,P;i.includes("thumbs")&&r.thumbs&&r.thumbs.swiper&&d.thumbs&&!d.thumbs.swiper&&(b=!0),i.includes("controller")&&r.controller&&r.controller.control&&d.controller&&!d.controller.control&&(g=!0),i.includes("pagination")&&r.pagination&&(r.pagination.el||l)&&(d.pagination||d.pagination===!1)&&p&&!p.el&&(h=!0),i.includes("scrollbar")&&r.scrollbar&&(r.scrollbar.el||s)&&(d.scrollbar||d.scrollbar===!1)&&v&&!v.el&&(m=!0),i.includes("navigation")&&r.navigation&&(r.navigation.prevEl||a)&&(r.navigation.nextEl||o)&&(d.navigation||d.navigation===!1)&&f&&!f.prevEl&&!f.nextEl&&(w=!0);const E=z=>{t[z]&&(t[z].destroy(),z==="navigation"?(t.isElement&&(t[z].prevEl.remove(),t[z].nextEl.remove()),d[z].prevEl=void 0,d[z].nextEl=void 0,t[z].prevEl=void 0,t[z].nextEl=void 0):(t.isElement&&t[z].el.remove(),d[z].el=void 0,t[z].el=void 0))};i.includes("loop")&&t.isElement&&(d.loop&&!r.loop?S=!0:!d.loop&&r.loop?T=!0:P=!0),u.forEach(z=>{if(Vr(d[z])&&Vr(r[z]))Object.assign(d[z],r[z]),(z==="navigation"||z==="pagination"||z==="scrollbar")&&"enabled"in r[z]&&!r[z].enabled&&E(z);else{const k=r[z];(k===!0||k===!1)&&(z==="navigation"||z==="pagination"||z==="scrollbar")?k===!1&&E(z):d[z]=r[z]}}),u.includes("controller")&&!g&&t.controller&&t.controller.control&&d.controller&&d.controller.control&&(t.controller.control=d.controller.control),i.includes("children")&&n&&x&&d.virtual.enabled?(x.slides=n,x.update(!0)):i.includes("virtual")&&x&&d.virtual.enabled&&(n&&(x.slides=n),x.update(!0)),i.includes("children")&&n&&d.loop&&(P=!0),b&&y.init()&&y.update(!0),g&&(t.controller.control=d.controller.control),h&&(t.isElement&&(!l||typeof l=="string")&&(l=document.createElement("div"),l.classList.add("swiper-pagination"),l.part.add("pagination"),t.el.appendChild(l)),l&&(d.pagination.el=l),p.init(),p.render(),p.update()),m&&(t.isElement&&(!s||typeof s=="string")&&(s=document.createElement("div"),s.classList.add("swiper-scrollbar"),s.part.add("scrollbar"),t.el.appendChild(s)),s&&(d.scrollbar.el=s),v.init(),v.updateSize(),v.setTranslate()),w&&(t.isElement&&((!o||typeof o=="string")&&(o=document.createElement("div"),o.classList.add("swiper-button-next"),o.innerHTML=t.hostEl.constructor.nextButtonSvg,o.part.add("button-next"),t.el.appendChild(o)),(!a||typeof a=="string")&&(a=document.createElement("div"),a.classList.add("swiper-button-prev"),a.innerHTML=t.hostEl.constructor.prevButtonSvg,a.part.add("button-prev"),t.el.appendChild(a))),o&&(d.navigation.nextEl=o),a&&(d.navigation.prevEl=a),f.init(),f.update()),i.includes("allowSlideNext")&&(t.allowSlideNext=r.allowSlideNext),i.includes("allowSlidePrev")&&(t.allowSlidePrev=r.allowSlidePrev),i.includes("direction")&&t.changeDirection(r.direction,!1),(S||P)&&t.loopDestroy(),(T||P)&&t.loopCreate(),t.update()}function iC(e,t){e===void 0&&(e={}),t===void 0&&(t=!0);const n={on:{}},r={},i={};yi(n,hd),n._emitClasses=!0,n.init=!1;const o={},a=Ry.map(l=>l.replace(/_/,"")),s=Object.assign({},e);return Object.keys(s).forEach(l=>{typeof e[l]>"u"||(a.indexOf(l)>=0?Vr(e[l])?(n[l]={},i[l]={},yi(n[l],e[l]),yi(i[l],e[l])):(n[l]=e[l],i[l]=e[l]):l.search(/on[A-Z]/)===0&&typeof e[l]=="function"?t?r[`${l[2].toLowerCase()}${l.substr(3)}`]=e[l]:n.on[`${l[2].toLowerCase()}${l.substr(3)}`]=e[l]:o[l]=e[l])}),["navigation","pagination","scrollbar"].forEach(l=>{n[l]===!0&&(n[l]={}),n[l]===!1&&delete n[l]}),{params:n,passedParams:i,rest:o,events:r}}function oC(e,t){let{el:n,nextEl:r,prevEl:i,paginationEl:o,scrollbarEl:a,swiper:s}=e;Vy(t)&&r&&i&&(s.params.navigation.nextEl=r,s.originalParams.navigation.nextEl=r,s.params.navigation.prevEl=i,s.originalParams.navigation.prevEl=i),Dy(t)&&o&&(s.params.pagination.el=o,s.originalParams.pagination.el=o),Ny(t)&&a&&(s.params.scrollbar.el=a,s.originalParams.scrollbar.el=a),s.init(n)}function aC(e,t,n,r,i){const o=[];if(!t)return o;const a=l=>{o.indexOf(l)<0&&o.push(l)};if(n&&r){const l=r.map(i),u=n.map(i);l.join("")!==u.join("")&&a("children"),r.length!==n.length&&a("children")}return Ry.filter(l=>l[0]==="_").map(l=>l.replace(/_/,"")).forEach(l=>{if(l in e&&l in t)if(Vr(e[l])&&Vr(t[l])){const u=Object.keys(e[l]),d=Object.keys(t[l]);u.length!==d.length?a(l):(u.forEach(p=>{e[l][p]!==t[l][p]&&a(l)}),d.forEach(p=>{e[l][p]!==t[l][p]&&a(l)}))}else e[l]!==t[l]&&a(l)}),o}const sC=e=>{!e||e.destroyed||!e.params.virtual||e.params.virtual&&!e.params.virtual.enabled||(e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.parallax&&e.params.parallax&&e.params.parallax.enabled&&e.parallax.setTranslate())};function Zs(){return Zs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Zs.apply(this,arguments)}function Fy(e){return e.type&&e.type.displayName&&e.type.displayName.includes("SwiperSlide")}function $y(e){const t=[];return K.Children.toArray(e).forEach(n=>{Fy(n)?t.push(n):n.props&&n.props.children&&$y(n.props.children).forEach(r=>t.push(r))}),t}function lC(e){const t=[],n={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]};return K.Children.toArray(e).forEach(r=>{if(Fy(r))t.push(r);else if(r.props&&r.props.slot&&n[r.props.slot])n[r.props.slot].push(r);else if(r.props&&r.props.children){const i=$y(r.props.children);i.length>0?i.forEach(o=>t.push(o)):n["container-end"].push(r)}else n["container-end"].push(r)}),{slides:t,slots:n}}function cC(e,t,n){if(!n)return null;const r=d=>{let p=d;return d<0?p=t.length+d:p>=t.length&&(p=p-t.length),p},i=e.isHorizontal()?{[e.rtlTranslate?"right":"left"]:`${n.offset}px`}:{top:`${n.offset}px`},{from:o,to:a}=n,s=e.params.loop?-t.length:0,l=e.params.loop?t.length*2:t.length,u=[];for(let d=s;d<l;d+=1)d>=o&&d<=a&&u.push(t[r(d)]);return u.map((d,p)=>K.cloneElement(d,{swiper:e,style:i,key:d.props.virtualIndex||d.key||`slide-${p}`}))}function zo(e,t){return typeof window>"u"?j.useEffect(e,t):j.useLayoutEffect(e,t)}const k0=j.createContext(null),uC=j.createContext(null),bt=j.forwardRef(function(e,t){let{className:n,tag:r="div",wrapperTag:i="div",children:o,onSwiper:a,...s}=e===void 0?{}:e,l=!1;const[u,d]=j.useState("swiper"),[p,f]=j.useState(null),[v,x]=j.useState(!1),y=j.useRef(!1),b=j.useRef(null),g=j.useRef(null),h=j.useRef(null),m=j.useRef(null),w=j.useRef(null),S=j.useRef(null),T=j.useRef(null),P=j.useRef(null),{params:E,passedParams:z,rest:k,events:I}=iC(s),{slides:$,slots:D}=lC(o),W=()=>{x(!v)};Object.assign(E.on,{_containerClasses(N,B){d(B)}});const G=()=>{Object.assign(E.on,I),l=!0;const N={...E};if(delete N.wrapperClass,g.current=new of(N),g.current.virtual&&g.current.params.virtual.enabled){g.current.virtual.slides=$;const B={cache:!1,slides:$,renderExternal:f,renderExternalUpdate:!1};yi(g.current.params.virtual,B),yi(g.current.originalParams.virtual,B)}};b.current||G(),g.current&&g.current.on("_beforeBreakpoint",W);const se=()=>{l||!I||!g.current||Object.keys(I).forEach(N=>{g.current.on(N,I[N])})},ne=()=>{!I||!g.current||Object.keys(I).forEach(N=>{g.current.off(N,I[N])})};j.useEffect(()=>()=>{g.current&&g.current.off("_beforeBreakpoint",W)}),j.useEffect(()=>{!y.current&&g.current&&(g.current.emitSlidesClasses(),y.current=!0)}),zo(()=>{if(t&&(t.current=b.current),!!b.current)return g.current.destroyed&&G(),oC({el:b.current,nextEl:w.current,prevEl:S.current,paginationEl:T.current,scrollbarEl:P.current,swiper:g.current},E),a&&!g.current.destroyed&&a(g.current),()=>{g.current&&!g.current.destroyed&&g.current.destroy(!0,!1)}},[]),zo(()=>{se();const N=aC(z,h.current,$,m.current,B=>B.key);return h.current=z,m.current=$,N.length&&g.current&&!g.current.destroyed&&rC({swiper:g.current,slides:$,passedParams:z,changedParams:N,nextEl:w.current,prevEl:S.current,scrollbarEl:P.current,paginationEl:T.current}),()=>{ne()}}),zo(()=>{sC(g.current)},[p]);function L(){return E.virtual?cC(g.current,$,p):$.map((N,B)=>K.cloneElement(N,{swiper:g.current,swiperSlideIndex:B}))}return K.createElement(r,Zs({ref:b,className:By(`${u}${n?` ${n}`:""}`)},k),K.createElement(uC.Provider,{value:g.current},D["container-start"],K.createElement(i,{className:nC(E.wrapperClass)},D["wrapper-start"],L(),D["wrapper-end"]),Vy(E)&&K.createElement(K.Fragment,null,K.createElement("div",{ref:S,className:"swiper-button-prev"}),K.createElement("div",{ref:w,className:"swiper-button-next"})),Ny(E)&&K.createElement("div",{ref:P,className:"swiper-scrollbar"}),Dy(E)&&K.createElement("div",{ref:T,className:"swiper-pagination"}),D["container-end"]))});bt.displayName="Swiper";const St=j.forwardRef(function(e,t){let{tag:n="div",children:r,className:i="",swiper:o,zoom:a,lazy:s,virtualIndex:l,swiperSlideIndex:u,...d}=e===void 0?{}:e;const p=j.useRef(null),[f,v]=j.useState("swiper-slide"),[x,y]=j.useState(!1);function b(w,S,T){S===p.current&&v(T)}zo(()=>{if(typeof u<"u"&&(p.current.swiperSlideIndex=u),t&&(t.current=p.current),!(!p.current||!o)){if(o.destroyed){f!=="swiper-slide"&&v("swiper-slide");return}return o.on("_slideClass",b),()=>{o&&o.off("_slideClass",b)}}}),zo(()=>{o&&p.current&&!o.destroyed&&v(o.getSlideClasses(p.current))},[o]);const g={isActive:f.indexOf("swiper-slide-active")>=0,isVisible:f.indexOf("swiper-slide-visible")>=0,isPrev:f.indexOf("swiper-slide-prev")>=0,isNext:f.indexOf("swiper-slide-next")>=0},h=()=>typeof r=="function"?r(g):r,m=()=>{y(!0)};return K.createElement(n,Zs({ref:p,className:By(`${f}${i?` ${i}`:""}`),"data-swiper-slide-index":l,onLoad:m},d),a&&K.createElement(k0.Provider,{value:g},K.createElement("div",{className:"swiper-zoom-container","data-swiper-zoom":typeof a=="number"?a:void 0},h(),s&&!x&&K.createElement("div",{className:"swiper-lazy-preloader"}))),!a&&K.createElement(k0.Provider,{value:g},h(),s&&!x&&K.createElement("div",{className:"swiper-lazy-preloader"})))});St.displayName="SwiperSlide";function Hy(e,t,n,r){return e.params.createElements&&Object.keys(r).forEach(i=>{if(!n[i]&&n.auto===!0){let o=on(e.el,`.${r[i]}`)[0];o||(o=ea("div",r[i]),o.className=r[i],e.el.append(o)),n[i]=o,t[i]=o}}),n}function Mn(e){let{swiper:t,extendParams:n,on:r,emit:i}=e;n({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),t.navigation={nextEl:null,prevEl:null};function o(x){let y;return x&&typeof x=="string"&&t.isElement&&(y=t.el.querySelector(x)||t.hostEl.querySelector(x),y)?y:(x&&(typeof x=="string"&&(y=[...document.querySelectorAll(x)]),t.params.uniqueNavElements&&typeof x=="string"&&y&&y.length>1&&t.el.querySelectorAll(x).length===1?y=t.el.querySelector(x):y&&y.length===1&&(y=y[0])),x&&!y?x:y)}function a(x,y){const b=t.params.navigation;x=De(x),x.forEach(g=>{g&&(g.classList[y?"add":"remove"](...b.disabledClass.split(" ")),g.tagName==="BUTTON"&&(g.disabled=y),t.params.watchOverflow&&t.enabled&&g.classList[t.isLocked?"add":"remove"](b.lockClass))})}function s(){const{nextEl:x,prevEl:y}=t.navigation;if(t.params.loop){a(y,!1),a(x,!1);return}a(y,t.isBeginning&&!t.params.rewind),a(x,t.isEnd&&!t.params.rewind)}function l(x){x.preventDefault(),!(t.isBeginning&&!t.params.loop&&!t.params.rewind)&&(t.slidePrev(),i("navigationPrev"))}function u(x){x.preventDefault(),!(t.isEnd&&!t.params.loop&&!t.params.rewind)&&(t.slideNext(),i("navigationNext"))}function d(){const x=t.params.navigation;if(t.params.navigation=Hy(t,t.originalParams.navigation,t.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(x.nextEl||x.prevEl))return;let y=o(x.nextEl),b=o(x.prevEl);Object.assign(t.navigation,{nextEl:y,prevEl:b}),y=De(y),b=De(b);const g=(h,m)=>{h&&h.addEventListener("click",m==="next"?u:l),!t.enabled&&h&&h.classList.add(...x.lockClass.split(" "))};y.forEach(h=>g(h,"next")),b.forEach(h=>g(h,"prev"))}function p(){let{nextEl:x,prevEl:y}=t.navigation;x=De(x),y=De(y);const b=(g,h)=>{g.removeEventListener("click",h==="next"?u:l),g.classList.remove(...t.params.navigation.disabledClass.split(" "))};x.forEach(g=>b(g,"next")),y.forEach(g=>b(g,"prev"))}r("init",()=>{t.params.navigation.enabled===!1?v():(d(),s())}),r("toEdge fromEdge lock unlock",()=>{s()}),r("destroy",()=>{p()}),r("enable disable",()=>{let{nextEl:x,prevEl:y}=t.navigation;if(x=De(x),y=De(y),t.enabled){s();return}[...x,...y].filter(b=>!!b).forEach(b=>b.classList.add(t.params.navigation.lockClass))}),r("click",(x,y)=>{let{nextEl:b,prevEl:g}=t.navigation;b=De(b),g=De(g);const h=y.target;let m=g.includes(h)||b.includes(h);if(t.isElement&&!m){const w=y.path||y.composedPath&&y.composedPath();w&&(m=w.find(S=>b.includes(S)||g.includes(S)))}if(t.params.navigation.hideOnClick&&!m){if(t.pagination&&t.params.pagination&&t.params.pagination.clickable&&(t.pagination.el===h||t.pagination.el.contains(h)))return;let w;b.length?w=b[0].classList.contains(t.params.navigation.hiddenClass):g.length&&(w=g[0].classList.contains(t.params.navigation.hiddenClass)),i(w===!0?"navigationShow":"navigationHide"),[...b,...g].filter(S=>!!S).forEach(S=>S.classList.toggle(t.params.navigation.hiddenClass))}});const f=()=>{t.el.classList.remove(...t.params.navigation.navigationDisabledClass.split(" ")),d(),s()},v=()=>{t.el.classList.add(...t.params.navigation.navigationDisabledClass.split(" ")),p()};Object.assign(t.navigation,{enable:f,disable:v,update:s,init:d,destroy:p})}function oo(e){return e===void 0&&(e=""),`.${e.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`}function _n(e){let{swiper:t,extendParams:n,on:r,emit:i}=e;const o="swiper-pagination";n({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:h=>h,formatFractionTotal:h=>h,bulletClass:`${o}-bullet`,bulletActiveClass:`${o}-bullet-active`,modifierClass:`${o}-`,currentClass:`${o}-current`,totalClass:`${o}-total`,hiddenClass:`${o}-hidden`,progressbarFillClass:`${o}-progressbar-fill`,progressbarOppositeClass:`${o}-progressbar-opposite`,clickableClass:`${o}-clickable`,lockClass:`${o}-lock`,horizontalClass:`${o}-horizontal`,verticalClass:`${o}-vertical`,paginationDisabledClass:`${o}-disabled`}}),t.pagination={el:null,bullets:[]};let a,s=0;function l(){return!t.params.pagination.el||!t.pagination.el||Array.isArray(t.pagination.el)&&t.pagination.el.length===0}function u(h,m){const{bulletActiveClass:w}=t.params.pagination;h&&(h=h[`${m==="prev"?"previous":"next"}ElementSibling`],h&&(h.classList.add(`${w}-${m}`),h=h[`${m==="prev"?"previous":"next"}ElementSibling`],h&&h.classList.add(`${w}-${m}-${m}`)))}function d(h,m,w){if(h=h%w,m=m%w,m===h+1)return"next";if(m===h-1)return"previous"}function p(h){const m=h.target.closest(oo(t.params.pagination.bulletClass));if(!m)return;h.preventDefault();const w=Qs(m)*t.params.slidesPerGroup;if(t.params.loop){if(t.realIndex===w)return;const S=d(t.realIndex,w,t.slides.length);S==="next"?t.slideNext():S==="previous"?t.slidePrev():t.slideToLoop(w)}else t.slideTo(w)}function f(){const h=t.rtl,m=t.params.pagination;if(l())return;let w=t.pagination.el;w=De(w);let S,T;const P=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.slides.length,E=t.params.loop?Math.ceil(P/t.params.slidesPerGroup):t.snapGrid.length;if(t.params.loop?(T=t.previousRealIndex||0,S=t.params.slidesPerGroup>1?Math.floor(t.realIndex/t.params.slidesPerGroup):t.realIndex):typeof t.snapIndex<"u"?(S=t.snapIndex,T=t.previousSnapIndex):(T=t.previousIndex||0,S=t.activeIndex||0),m.type==="bullets"&&t.pagination.bullets&&t.pagination.bullets.length>0){const z=t.pagination.bullets;let k,I,$;if(m.dynamicBullets&&(a=pd(z[0],t.isHorizontal()?"width":"height"),w.forEach(D=>{D.style[t.isHorizontal()?"width":"height"]=`${a*(m.dynamicMainBullets+4)}px`}),m.dynamicMainBullets>1&&T!==void 0&&(s+=S-(T||0),s>m.dynamicMainBullets-1?s=m.dynamicMainBullets-1:s<0&&(s=0)),k=Math.max(S-s,0),I=k+(Math.min(z.length,m.dynamicMainBullets)-1),$=(I+k)/2),z.forEach(D=>{const W=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(G=>`${m.bulletActiveClass}${G}`)].map(G=>typeof G=="string"&&G.includes(" ")?G.split(" "):G).flat();D.classList.remove(...W)}),w.length>1)z.forEach(D=>{const W=Qs(D);W===S?D.classList.add(...m.bulletActiveClass.split(" ")):t.isElement&&D.setAttribute("part","bullet"),m.dynamicBullets&&(W>=k&&W<=I&&D.classList.add(...`${m.bulletActiveClass}-main`.split(" ")),W===k&&u(D,"prev"),W===I&&u(D,"next"))});else{const D=z[S];if(D&&D.classList.add(...m.bulletActiveClass.split(" ")),t.isElement&&z.forEach((W,G)=>{W.setAttribute("part",G===S?"bullet-active":"bullet")}),m.dynamicBullets){const W=z[k],G=z[I];for(let se=k;se<=I;se+=1)z[se]&&z[se].classList.add(...`${m.bulletActiveClass}-main`.split(" "));u(W,"prev"),u(G,"next")}}if(m.dynamicBullets){const D=Math.min(z.length,m.dynamicMainBullets+4),W=(a*D-a)/2-$*a,G=h?"right":"left";z.forEach(se=>{se.style[t.isHorizontal()?G:"top"]=`${W}px`})}}w.forEach((z,k)=>{if(m.type==="fraction"&&(z.querySelectorAll(oo(m.currentClass)).forEach(I=>{I.textContent=m.formatFractionCurrent(S+1)}),z.querySelectorAll(oo(m.totalClass)).forEach(I=>{I.textContent=m.formatFractionTotal(E)})),m.type==="progressbar"){let I;m.progressbarOpposite?I=t.isHorizontal()?"vertical":"horizontal":I=t.isHorizontal()?"horizontal":"vertical";const $=(S+1)/E;let D=1,W=1;I==="horizontal"?D=$:W=$,z.querySelectorAll(oo(m.progressbarFillClass)).forEach(G=>{G.style.transform=`translate3d(0,0,0) scaleX(${D}) scaleY(${W})`,G.style.transitionDuration=`${t.params.speed}ms`})}m.type==="custom"&&m.renderCustom?(z.innerHTML=m.renderCustom(t,S+1,E),k===0&&i("paginationRender",z)):(k===0&&i("paginationRender",z),i("paginationUpdate",z)),t.params.watchOverflow&&t.enabled&&z.classList[t.isLocked?"add":"remove"](m.lockClass)})}function v(){const h=t.params.pagination;if(l())return;const m=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.grid&&t.params.grid.rows>1?t.slides.length/Math.ceil(t.params.grid.rows):t.slides.length;let w=t.pagination.el;w=De(w);let S="";if(h.type==="bullets"){let T=t.params.loop?Math.ceil(m/t.params.slidesPerGroup):t.snapGrid.length;t.params.freeMode&&t.params.freeMode.enabled&&T>m&&(T=m);for(let P=0;P<T;P+=1)h.renderBullet?S+=h.renderBullet.call(t,P,h.bulletClass):S+=`<${h.bulletElement} ${t.isElement?'part="bullet"':""} class="${h.bulletClass}"></${h.bulletElement}>`}h.type==="fraction"&&(h.renderFraction?S=h.renderFraction.call(t,h.currentClass,h.totalClass):S=`<span class="${h.currentClass}"></span> / <span class="${h.totalClass}"></span>`),h.type==="progressbar"&&(h.renderProgressbar?S=h.renderProgressbar.call(t,h.progressbarFillClass):S=`<span class="${h.progressbarFillClass}"></span>`),t.pagination.bullets=[],w.forEach(T=>{h.type!=="custom"&&(T.innerHTML=S||""),h.type==="bullets"&&t.pagination.bullets.push(...T.querySelectorAll(oo(h.bulletClass)))}),h.type!=="custom"&&i("paginationRender",w[0])}function x(){t.params.pagination=Hy(t,t.originalParams.pagination,t.params.pagination,{el:"swiper-pagination"});const h=t.params.pagination;if(!h.el)return;let m;typeof h.el=="string"&&t.isElement&&(m=t.el.querySelector(h.el)),!m&&typeof h.el=="string"&&(m=[...document.querySelectorAll(h.el)]),m||(m=h.el),!(!m||m.length===0)&&(t.params.uniqueNavElements&&typeof h.el=="string"&&Array.isArray(m)&&m.length>1&&(m=[...t.el.querySelectorAll(h.el)],m.length>1&&(m=m.filter(w=>Ly(w,".swiper")[0]===t.el)[0])),Array.isArray(m)&&m.length===1&&(m=m[0]),Object.assign(t.pagination,{el:m}),m=De(m),m.forEach(w=>{h.type==="bullets"&&h.clickable&&w.classList.add(...(h.clickableClass||"").split(" ")),w.classList.add(h.modifierClass+h.type),w.classList.add(t.isHorizontal()?h.horizontalClass:h.verticalClass),h.type==="bullets"&&h.dynamicBullets&&(w.classList.add(`${h.modifierClass}${h.type}-dynamic`),s=0,h.dynamicMainBullets<1&&(h.dynamicMainBullets=1)),h.type==="progressbar"&&h.progressbarOpposite&&w.classList.add(h.progressbarOppositeClass),h.clickable&&w.addEventListener("click",p),t.enabled||w.classList.add(h.lockClass)}))}function y(){const h=t.params.pagination;if(l())return;let m=t.pagination.el;m&&(m=De(m),m.forEach(w=>{w.classList.remove(h.hiddenClass),w.classList.remove(h.modifierClass+h.type),w.classList.remove(t.isHorizontal()?h.horizontalClass:h.verticalClass),h.clickable&&(w.classList.remove(...(h.clickableClass||"").split(" ")),w.removeEventListener("click",p))})),t.pagination.bullets&&t.pagination.bullets.forEach(w=>w.classList.remove(...h.bulletActiveClass.split(" ")))}r("changeDirection",()=>{if(!t.pagination||!t.pagination.el)return;const h=t.params.pagination;let{el:m}=t.pagination;m=De(m),m.forEach(w=>{w.classList.remove(h.horizontalClass,h.verticalClass),w.classList.add(t.isHorizontal()?h.horizontalClass:h.verticalClass)})}),r("init",()=>{t.params.pagination.enabled===!1?g():(x(),v(),f())}),r("activeIndexChange",()=>{typeof t.snapIndex>"u"&&f()}),r("snapIndexChange",()=>{f()}),r("snapGridLengthChange",()=>{v(),f()}),r("destroy",()=>{y()}),r("enable disable",()=>{let{el:h}=t.pagination;h&&(h=De(h),h.forEach(m=>m.classList[t.enabled?"remove":"add"](t.params.pagination.lockClass)))}),r("lock unlock",()=>{f()}),r("click",(h,m)=>{const w=m.target,S=De(t.pagination.el);if(t.params.pagination.el&&t.params.pagination.hideOnClick&&S&&S.length>0&&!w.classList.contains(t.params.pagination.bulletClass)){if(t.navigation&&(t.navigation.nextEl&&w===t.navigation.nextEl||t.navigation.prevEl&&w===t.navigation.prevEl))return;const T=S[0].classList.contains(t.params.pagination.hiddenClass);i(T===!0?"paginationShow":"paginationHide"),S.forEach(P=>P.classList.toggle(t.params.pagination.hiddenClass))}});const b=()=>{t.el.classList.remove(t.params.pagination.paginationDisabledClass);let{el:h}=t.pagination;h&&(h=De(h),h.forEach(m=>m.classList.remove(t.params.pagination.paginationDisabledClass))),x(),v(),f()},g=()=>{t.el.classList.add(t.params.pagination.paginationDisabledClass);let{el:h}=t.pagination;h&&(h=De(h),h.forEach(m=>m.classList.add(t.params.pagination.paginationDisabledClass))),y()};Object.assign(t.pagination,{enable:b,disable:g,render:v,update:f,init:x,destroy:y})}function hr(e){let{swiper:t,extendParams:n,on:r,emit:i,params:o}=e;t.autoplay={running:!1,paused:!1,timeLeft:0},n({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let a,s,l=o&&o.autoplay?o.autoplay.delay:3e3,u=o&&o.autoplay?o.autoplay.delay:3e3,d,p=new Date().getTime(),f,v,x,y,b,g,h;function m(L){!t||t.destroyed||!t.wrapperEl||L.target===t.wrapperEl&&(t.wrapperEl.removeEventListener("transitionend",m),!(h||L.detail&&L.detail.bySwiperTouchMove)&&k())}const w=()=>{if(t.destroyed||!t.autoplay.running)return;t.autoplay.paused?f=!0:f&&(u=d,f=!1);const L=t.autoplay.paused?d:p+u-new Date().getTime();t.autoplay.timeLeft=L,i("autoplayTimeLeft",L,L/l),s=requestAnimationFrame(()=>{w()})},S=()=>{let L;return t.virtual&&t.params.virtual.enabled?L=t.slides.filter(B=>B.classList.contains("swiper-slide-active"))[0]:L=t.slides[t.activeIndex],L?parseInt(L.getAttribute("data-swiper-autoplay"),10):void 0},T=L=>{if(t.destroyed||!t.autoplay.running)return;cancelAnimationFrame(s),w();let N=typeof L>"u"?t.params.autoplay.delay:L;l=t.params.autoplay.delay,u=t.params.autoplay.delay;const B=S();!Number.isNaN(B)&&B>0&&typeof L>"u"&&(N=B,l=B,u=B),d=N;const Z=t.params.speed,re=()=>{!t||t.destroyed||(t.params.autoplay.reverseDirection?!t.isBeginning||t.params.loop||t.params.rewind?(t.slidePrev(Z,!0,!0),i("autoplay")):t.params.autoplay.stopOnLastSlide||(t.slideTo(t.slides.length-1,Z,!0,!0),i("autoplay")):!t.isEnd||t.params.loop||t.params.rewind?(t.slideNext(Z,!0,!0),i("autoplay")):t.params.autoplay.stopOnLastSlide||(t.slideTo(0,Z,!0,!0),i("autoplay")),t.params.cssMode&&(p=new Date().getTime(),requestAnimationFrame(()=>{T()})))};return N>0?(clearTimeout(a),a=setTimeout(()=>{re()},N)):requestAnimationFrame(()=>{re()}),N},P=()=>{p=new Date().getTime(),t.autoplay.running=!0,T(),i("autoplayStart")},E=()=>{t.autoplay.running=!1,clearTimeout(a),cancelAnimationFrame(s),i("autoplayStop")},z=(L,N)=>{if(t.destroyed||!t.autoplay.running)return;clearTimeout(a),L||(g=!0);const B=()=>{i("autoplayPause"),t.params.autoplay.waitForTransition?t.wrapperEl.addEventListener("transitionend",m):k()};if(t.autoplay.paused=!0,N){b&&(d=t.params.autoplay.delay),b=!1,B();return}d=(d||t.params.autoplay.delay)-(new Date().getTime()-p),!(t.isEnd&&d<0&&!t.params.loop)&&(d<0&&(d=0),B())},k=()=>{t.isEnd&&d<0&&!t.params.loop||t.destroyed||!t.autoplay.running||(p=new Date().getTime(),g?(g=!1,T(d)):T(),t.autoplay.paused=!1,i("autoplayResume"))},I=()=>{if(t.destroyed||!t.autoplay.running)return;const L=Cn();L.visibilityState==="hidden"&&(g=!0,z(!0)),L.visibilityState==="visible"&&k()},$=L=>{L.pointerType==="mouse"&&(g=!0,h=!0,!(t.animating||t.autoplay.paused)&&z(!0))},D=L=>{L.pointerType==="mouse"&&(h=!1,t.autoplay.paused&&k())},W=()=>{t.params.autoplay.pauseOnMouseEnter&&(t.el.addEventListener("pointerenter",$),t.el.addEventListener("pointerleave",D))},G=()=>{t.el&&typeof t.el!="string"&&(t.el.removeEventListener("pointerenter",$),t.el.removeEventListener("pointerleave",D))},se=()=>{Cn().addEventListener("visibilitychange",I)},ne=()=>{Cn().removeEventListener("visibilitychange",I)};r("init",()=>{t.params.autoplay.enabled&&(W(),se(),P())}),r("destroy",()=>{G(),ne(),t.autoplay.running&&E()}),r("_freeModeStaticRelease",()=>{(x||g)&&k()}),r("_freeModeNoMomentumRelease",()=>{t.params.autoplay.disableOnInteraction?E():z(!0,!0)}),r("beforeTransitionStart",(L,N,B)=>{t.destroyed||!t.autoplay.running||(B||!t.params.autoplay.disableOnInteraction?z(!0,!0):E())}),r("sliderFirstMove",()=>{if(!(t.destroyed||!t.autoplay.running)){if(t.params.autoplay.disableOnInteraction){E();return}v=!0,x=!1,g=!1,y=setTimeout(()=>{g=!0,x=!0,z(!0)},200)}}),r("touchEnd",()=>{if(!(t.destroyed||!t.autoplay.running||!v)){if(clearTimeout(y),clearTimeout(a),t.params.autoplay.disableOnInteraction){x=!1,v=!1;return}x&&t.params.cssMode&&k(),x=!1,v=!1}}),r("slideChange",()=>{t.destroyed||!t.autoplay.running||(b=!0)}),Object.assign(t.autoplay,{start:P,stop:E,pause:z,resume:k})}function dC(e){const{effect:t,swiper:n,on:r,setTranslate:i,setTransition:o,overwriteParams:a,perspective:s,recreateShadows:l,getEffectParams:u}=e;r("beforeInit",()=>{if(n.params.effect!==t)return;n.classNames.push(`${n.params.containerModifierClass}${t}`),s&&s()&&n.classNames.push(`${n.params.containerModifierClass}3d`);const p=a?a():{};Object.assign(n.params,p),Object.assign(n.originalParams,p)}),r("setTranslate",()=>{n.params.effect===t&&i()}),r("setTransition",(p,f)=>{n.params.effect===t&&o(f)}),r("transitionEnd",()=>{if(n.params.effect===t&&l){if(!u||!u().slideShadows)return;n.slides.forEach(p=>{p.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(f=>f.remove())}),l()}});let d;r("virtualUpdate",()=>{n.params.effect===t&&(n.slides.length||(d=!0),requestAnimationFrame(()=>{d&&n.slides&&n.slides.length&&(i(),d=!1)}))})}function pC(e,t){const n=rf(t);return n!==t&&(n.style.backfaceVisibility="hidden",n.style["-webkit-backface-visibility"]="hidden"),n}function z0(e,t,n){const r=`swiper-slide-shadow${n?`-${n}`:""}${` swiper-slide-shadow-${e}`}`,i=rf(t);let o=i.querySelector(`.${r.split(" ").join(".")}`);return o||(o=ea("div",r.split(" ")),i.append(o)),o}function fC(e){let{swiper:t,extendParams:n,on:r}=e;n({coverflowEffect:{rotate:50,stretch:0,depth:100,scale:1,modifier:1,slideShadows:!0}}),dC({effect:"coverflow",swiper:t,on:r,setTranslate:()=>{const{width:a,height:s,slides:l,slidesSizesGrid:u}=t,d=t.params.coverflowEffect,p=t.isHorizontal(),f=t.translate,v=p?-f+a/2:-f+s/2,x=p?d.rotate:-d.rotate,y=d.depth,b=W8(t);for(let g=0,h=l.length;g<h;g+=1){const m=l[g],w=u[g],S=m.swiperSlideOffset,T=(v-S-w/2)/w,P=typeof d.modifier=="function"?d.modifier(T):T*d.modifier;let E=p?x*P:0,z=p?0:x*P,k=-y*Math.abs(P),I=d.stretch;typeof I=="string"&&I.indexOf("%")!==-1&&(I=parseFloat(d.stretch)/100*w);let $=p?0:I*P,D=p?I*P:0,W=1-(1-d.scale)*Math.abs(P);Math.abs(D)<.001&&(D=0),Math.abs($)<.001&&($=0),Math.abs(k)<.001&&(k=0),Math.abs(E)<.001&&(E=0),Math.abs(z)<.001&&(z=0),Math.abs(W)<.001&&(W=0);const G=`translate3d(${D}px,${$}px,${k}px)  rotateX(${b(z)}deg) rotateY(${b(E)}deg) scale(${W})`,se=pC(d,m);if(se.style.transform=G,m.style.zIndex=-Math.abs(Math.round(P))+1,d.slideShadows){let ne=p?m.querySelector(".swiper-slide-shadow-left"):m.querySelector(".swiper-slide-shadow-top"),L=p?m.querySelector(".swiper-slide-shadow-right"):m.querySelector(".swiper-slide-shadow-bottom");ne||(ne=z0("coverflow",m,p?"left":"top")),L||(L=z0("coverflow",m,p?"right":"bottom")),ne&&(ne.style.opacity=P>0?P:0),L&&(L.style.opacity=-P>0?-P:0)}}},setTransition:a=>{t.slides.map(l=>rf(l)).forEach(l=>{l.style.transitionDuration=`${a}ms`,l.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(u=>{u.style.transitionDuration=`${a}ms`})})},perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0})})}const hC=C.button`
  width: auto;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 5px; /* Ajusta a distância entre o texto e o ícone */
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
    margin-left: 8px; /* Ajusta a margem à esquerda do ícone para maior separação */
  }

  &:hover {
    background-color: var(--color--black);
    color: var(--color--white);
  }

  &:hover .icon {
    transform: translateX(5px); /* Animação da seta movendo para a direita no hover */
    transition: transform 0.3s ease;
    color: var(--color--white);
  }

  &:active {
    transform: translate(1px, 1px);
    transition-duration: 0.2s;
  }
`,Ol=({text:e,suiteId:t,backDefine:n,colorDefine:r})=>{const i=vl(),o=()=>{const a=`/acomoda#${t}`;console.log("Navegando para:",a),i(a)};return c.jsxs(hC,{backDefine:n,colorDefine:r,onClick:o,children:[e,c.jsx(Gp,{className:"icon"})]})},mC=_l`

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
`,gC=fr`
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
`,vC=C(F.img)`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px 0 20px 0;

    @media (max-width: 768px){
        border-radius: 0 15px 0 20px;
    }
`,xC=C(F.div)`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  border-radius: 0 20px 20px 0;
  animation: ${gC} 5s ease-in-out infinite;
  background-image: ${({backgroundImage:e})=>`url(${e})`};
  background-size: cover;
  background-position: center;
`,yC=C(F.div)`
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
`,wC=C(F.div)`
    position: absolute;
    bottom: 20px;
    left: 20px;
    color: var(--color--white);
    font-family: Arial, sans-serif;
`,bC=C(F.h2)`
    font-size: 24px;
    font-weight: bold;
    font-family: var(--font--comfortaa);
`,SC=C(F.p)`
    font-size: 16px;
    margin: 5px 0;
    font-family: var(--font--avenir);
`,jC=C(F.div)`
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
`,TC=C.div`
    width: 100%;
    max-width: 60%;
    margin: 0 auto;

    @media (max-width: 640px) {
        max-width: 100%;
    }
`,A0=({content:e=[],contentType:t="image",spaceBetween:n=10,slidesPerView:r=1,height:i="300px",autoplayDelay:o=3e3,showPagination:a=!0,showNavigation:s=!0})=>{const{scrollY:l}=qp(),u=qt(l,[0,300],[0,-30]),d=qt(l,[0,300],[0,-20]),p=qt(l,[0,300],[0,-10]),f=qt(l,[0,300],[0,-5]);return c.jsxs(TC,{children:[c.jsx(mC,{}),c.jsx(bt,{modules:[Mn,_n,hr],navigation:s,pagination:a?{clickable:!0}:!1,spaceBetween:n,loop:!0,slidesPerView:r,autoplay:{delay:o,disableOnInteraction:!0},style:{height:i},breakpoints:{640:{slidesPerView:1,spaceBetween:10,height:"200px"},768:{slidesPerView:1,spaceBetween:20,height:"250px"},1024:{slidesPerView:1,spaceBetween:30,height:"300px"}},children:e.map((v,x)=>c.jsx(St,{children:t==="image"?c.jsx(vC,{src:v.src,alt:v.alt||`Slide ${x+1}`,initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},transition:{duration:.7,ease:"easeOut"}}):c.jsxs(xC,{backgroundImage:v.backgroundImage,initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},transition:{duration:.8,ease:"easeOut"},children:[c.jsx(yC,{}),c.jsxs(wC,{initial:{opacity:0,y:50},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.8,delay:.3,ease:"easeOut"},children:[c.jsx(bC,{style:{y:u},children:v.title}),c.jsx(SC,{style:{y:d},children:v.subtitle}),c.jsx(jC,{style:{y:p},children:v.features.map((y,b)=>c.jsxs("span",{children:[y.icon," ",y.text]},b))}),c.jsx(Ol,{text:"Conhecer todas as acomodações",style:{y:f}})]})]})},x))})]})},wi=C.button`
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

    &:hover {
        box-shadow: 0 0 0 12px transparent;
        color: ${({hoverColor:e})=>e||"var(--color--black)"};
        border-radius: 40px;
    }

    &:active {
        scale: 0.95;
        box-shadow: 0 0 0 4px var(--color--black);
    }

    /* @media (max-width: 640px) {
        color: var(--color--white); // Cor do texto em tela menor
        background-color: var(--color--black); // Cor de fundo em tela menor
        border: 4px solid var(--color--white); // Borda em tela menor
    } */
`,L0=C.svg`
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

    ${wi}:hover &.arr-1 {
        right: -25%;
    }

    ${wi}:hover &.arr-2 {
        left: 16px;
    }

    ${wi}:hover & {
        fill: var(--color--white);
    }
`,CC=C.span`
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

    ${wi}:hover & {
        width: 220px;
        height: 220px;
        opacity: 1;
        color: var(--color--white);
    }
`,PC=C.span`
    position: relative;
    z-index: 1;
    transform: translateX(-12px);
    transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);

    ${wi}:hover & {
        transform: translateX(12px);
        color: var(--color--white);
    }
`,Hn=({text:e,onClick:t,color:n,backgroundColor:r,borderColor:i,hoverColor:o})=>c.jsxs(wi,{onClick:t,color:n,background:r,borderColor:i,hoverColor:o,children:[c.jsx(L0,{className:"arr-2",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:c.jsx("path",{d:"M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"})}),c.jsx(PC,{children:e}),c.jsx(CC,{}),c.jsx(L0,{className:"arr-1",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:c.jsx("path",{d:"M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"})})]}),EC=fr`
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
`,kC=C(F.div)`
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
        animation: ${EC} 8s ease-in-out infinite;
        pointer-events: none; /* Impede que o ::before bloqueie cliques */

        @media (max-width: 768px) {
            animation: none;
            border-top: none;
            border-radius: 0 0 35px 0;
            border: 1px solid var(--color--black);
        }
    }
`,zC=C(F.h1)`
    width: 100%;
    text-align: left;
    font-family: var(--font--comfortaa);
    font-weight: 600;
    font-size: 1.3rem;

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
`,AC=C(F.p)`
    width: 100%;
    font-size: .95rem;
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
`,M0=({text:e,title:t,borderColor:n,containerAnimation:r={opacity:0,y:50},titleAnimation:i={opacity:0,y:-20},textAnimation:o={opacity:0,x:-20},buttonAnimation:a={opacity:0,scale:.8},animationDuration:s=.5,buttonColor:l,buttonHover:u,buttonBorder:d,targetPage:p})=>{const f=vl(),v=()=>{f(p)};return c.jsxs(kC,{borderColor:n,initial:r,whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:s},children:[c.jsx(zC,{initial:i,whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:s,delay:.2},children:t}),c.jsx(AC,{initial:o,whileInView:{opacity:1,x:0},viewport:{once:!0,amount:.3},transition:{duration:s,delay:.4},children:e}),c.jsx(F.div,{initial:a,whileInView:{opacity:1,scale:1},viewport:{once:!0,amount:.3},transition:{duration:s,delay:.6},style:{zIndex:3},children:c.jsx(Hn,{onClick:v,text:"Saber mais",backgroundColor:l,borderColor:d,hoverColor:u,border:"1px solid",color:"var(--color--black)"})})]})};function LC(e){return X({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z"},child:[]}]})(e)}function MC(e){return X({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M12 3 4 9v12h16V9l-8-6zm.5 9.5c0 .83-.67 1.5-1.5 1.5v4h-1v-4c-.83 0-1.5-.67-1.5-1.5v-3h1v3h.5v-3h1v3h.5v-3h1v3zM15 18h-1v-3.5h-1v-3c0-1.1.9-2 2-2V18z"},child:[]}]})(e)}function _C(e){return X({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M16.5 12h-9c-.55 0-1 .45-1 1v1h11v-1c0-.55-.45-1-1-1zM7.25 8.5h4v2h-4zM12.75 8.5h4v2h-4z"},child:[]},{tag:"path",attr:{d:"M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 15h-1.5v-1.5h-11V17H5v-3.83c0-.66.25-1.26.65-1.72V9c0-1.1.9-2 2-2H11c.37 0 .72.12 1 .32.28-.2.63-.32 1-.32h3.35c1.1 0 2 .9 2 2v2.45c.4.46.65 1.06.65 1.72V17z"},child:[]}]})(e)}function OC(e){return X({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"circle",attr:{cx:"4.5",cy:"9.5",r:"2.5"},child:[]},{tag:"circle",attr:{cx:"9",cy:"5.5",r:"2.5"},child:[]},{tag:"circle",attr:{cx:"15",cy:"5.5",r:"2.5"},child:[]},{tag:"circle",attr:{cx:"19.5",cy:"9.5",r:"2.5"},child:[]},{tag:"path",attr:{d:"M17.34 14.86c-.87-1.02-1.6-1.89-2.48-2.91-.46-.54-1.05-1.08-1.75-1.32-.11-.04-.22-.07-.33-.09-.25-.04-.52-.04-.78-.04s-.53 0-.79.05c-.11.02-.22.05-.33.09-.7.24-1.28.78-1.75 1.32-.87 1.02-1.6 1.89-2.48 2.91-1.31 1.31-2.92 2.76-2.62 4.79.29 1.02 1.02 2.03 2.33 2.32.73.15 3.06-.44 5.54-.44h.18c2.48 0 4.81.58 5.54.44 1.31-.29 2.04-1.31 2.33-2.32.31-2.04-1.3-3.49-2.61-4.8z"},child:[]}]})(e)}function zt(e){return X({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"m10 17 5-5-5-5v10z"},child:[]}]})(e)}function IC(e){return X({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5"},child:[]},{tag:"path",attr:{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"},child:[]},{tag:"line",attr:{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5"},child:[]}]})(e)}function RC(e){return X({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m9 9 5 12 1.774-5.226L21 14 9 9z"},child:[]},{tag:"path",attr:{d:"m16.071 16.071 4.243 4.243"},child:[]},{tag:"path",attr:{d:"m7.188 2.239.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656-2.12 2.122"},child:[]}]})(e)}const VC=C.button`
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
`,Uy=C.div`
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
`,DC=C(Uy)`
  position: absolute;
  inset: 0;
  background-color: ${({hoverColor:e})=>e||"var(--color--blue)"};
  transform: translate(0%, 100%);
`,NC=C.span`
  color: ${({textColor:e})=>e||"var(--color--black)"};
`,BC=C.span`
  color: ${({hoverTextColor:e})=>e||"var(--color--white)"};
`,af=({text:e="Quick View",text2:t="Clique e reserve",borderColor:n,textColor:r,hoverColor:i,hoverTextColor:o})=>{const a=()=>{window.open("https://wa.link/dojlwi","_blank")};return c.jsxs(VC,{borderColor:n,textColor:r,onClick:a,children:[c.jsxs(Uy,{className:"default-btn",children:[c.jsx(LC,{size:15,color:r||"var(--color--black)"}),c.jsx(NC,{textColor:r,children:e})]}),c.jsxs(DC,{className:"hover-btn",hoverColor:i,children:[c.jsx(RC,{size:15,color:o||"var(--color--white)"}),c.jsx(BC,{hoverTextColor:o,children:t})]})]})},FC=_l`
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
`,$C=C.div`
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

    @media (max-width: 768px){
        width: 90%;
        margin-left: 5%;
        border-radius: 20px 0px 20px 0px;
        }
`,HC=C.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 60%;
    border-radius: 25px 0 25px 0;/* Mantém o mesmo border-radius */
    background: linear-gradient(0deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)); /* Gradiente */
    pointer-events: none; /* Apenas decorativa */
    z-index: 1;

    @media (max-width: 768px){
        border-radius: 20px 0 20px 0;
    }
`,UC=C.div`
    position: absolute;
    bottom: 15px;
    left: 15px;
    color: white;
    padding: 10px;
    border-radius: 8px;
    z-index: 2;

    @media (max-width: 768px){
        left: 10px;
        display: flex;
        flex-direction: column;
        gap: 15px;
    }
`,WC=C.div`
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 12px;
    font-weight: bold;
    padding: 5px 15px;
    color: white;
    z-index: 3;
    font-family: var(--font--comfortaa);
    font-weight: 800;
    background-color: var(--color--white);
    border-radius: 10px 0 10px 0;
    backdrop-filter: blur(10px);
    color: var(--color--black);
    box-shadow: 0 0 5px rgba(255, 255, 255, 1);

    @media (max-width: 768px){
        left: 0;
        top: 10px;
        padding: 7px 10px;
        width: 50%;
        transform: translateX(50%);
        font-weight: 200;
        font-size: .7rem;
        background-color: var(--color--white);
        border-radius: 10px 0 10px 0;
        backdrop-filter: blur(10px);
        color: var(--color--black);
        box-shadow: 0 0 5px rgba(255, 255, 255, 1);
        text-align: center;
    }
`,qC=C.h2`
    font-size: 24px;
    font-weight: bold;
    font-family: var(--font--comfortaa);
    margin: 0;
    margin-bottom: 15px;
    font-weight: 100;

    @media (max-width: 768px){
        font-weight: 100;
        font-size: 26px;
        margin-bottom: 0px;
    }
`,GC=C.p`
    font-size: 13px;
    width: 80%;
    margin-bottom: 15px;
    font-family: var(--font--comfortaa)!important;
    text-align: left!important;

    @media (max-width: 768px){
        width: 100%;
        text-align: left!important;
        font-size: 13px!important;
        margin-bottom: 0px;
    }
`,sf=({content:e=[],height:t="300px",width:n="100%",autoplayDelay:r=3e3,showPagination:i=!0,showNavigation:o=!0})=>c.jsxs(c.Fragment,{children:[c.jsx(FC,{}),c.jsx(bt,{modules:[Mn,_n,hr,fC],effect:"coverflow",grabCursor:!0,centeredSlides:!0,loop:!0,slidesPerView:"auto",coverflowEffect:{rotate:50,stretch:50,depth:300,modifier:1,slideShadows:!0},navigation:o,pagination:i?{clickable:!0}:!1,autoplay:{delay:r,disableOnInteraction:!1},breakpoints:{1024:{slidesPerView:2},768:{slidesPerView:2},0:{slidesPerView:1}},style:{width:n,height:t},children:e.map((a,s)=>c.jsx(St,{style:{width:"60%"},children:c.jsxs($C,{backgroundImage:a.backgroundImage,children:[c.jsx(WC,{children:a.topLeftText}),c.jsx(HC,{}),c.jsxs(UC,{children:[c.jsx(qC,{children:a.title}),c.jsx(GC,{children:a.description}),c.jsx(af,{text:"Reservar agora",text2:"Clique e reserve agora",borderColor:"var(--color--white)",textColor:"var(--color--white)",hoverColor:"var(--color--green)",hoverTextColor:"var(--color--black)"})]})]})},s))})]}),YC=C(F.div)`
    width: 100%;
    height: 40vh;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px){
        height: 25vh;
    }
`,KC=C(F.img)`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;


    &:hover {
        transform: scale(1.2) rotate(3deg); // Zoom e rotação ao passar o mouse
    }
`,XC=C(F.div)`
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
`,Js=({images:e=[],reverse:t=!1})=>c.jsx(bt,{modules:[hr],spaceBetween:0,loop:!0,autoplay:{delay:0,disableOnInteraction:!1,reverseDirection:t},speed:2500,freeMode:!0,freeModeMomentum:!1,breakpoints:{320:{slidesPerView:3},768:{slidesPerView:4},1024:{slidesPerView:5}},children:e.map((n,r)=>c.jsx(St,{children:c.jsxs(YC,{initial:{scale:.8,rotate:-5,opacity:0},animate:{scale:1,rotate:0,opacity:1},transition:{duration:.6,ease:"easeOut"},children:[c.jsx(KC,{src:n.src,alt:n.alt||`Imagem ${r+1}`,initial:{scale:1},whileHover:{scale:1.2,rotate:3},transition:{duration:.3}}),c.jsx(XC,{initial:{y:30,opacity:0},animate:{y:0,opacity:1},transition:{duration:.7,delay:.4,ease:"backOut"},children:n.label})]})},r))}),QC=fr`
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
`,ZC=C(F.div)`
    display: flex;
    flex-direction: column;
    height: auto;
    padding: 10px;
    background: var(--color--white);
    border-radius: 12px;
    overflow: hidden;
    width: 100%;
    animation: ${QC} 5s ease-in-out infinite;
    background-color: rgba(0, 0, 0, 0.1);

    @media (max-width: 768px){
        border: none;
        padding: 5px;
        background-color: rgba(0, 0, 0, 0.1);
        animation: none;
        border-radius: 15px 15px 5px 5px;
    }
`,JC=C.img`
    width: 100%;
    height: 220px;
    object-fit: cover;
    border-radius: 10px;

    @media (max-width: 768px){
        border: 2px solid var(--color--black);
        height: 320px;
    }
`,e9=C.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: #333;
`,t9=C.h3`
    font-size: 22px;
    font-weight: bold;
    font-family: var(--font--comfortaa);
    margin: 0;
`,n9=C.p`
    font-size: 14px;
    color: #777;
    font-family: var(--font--avenir);
    margin: 0;
`,r9=C.div`
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
`,i9=C.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
    font-size: 16px;
`,o9=C.p`
    font-size: 18px;
    font-family: var(--font--comfortaa);
    font-weight: bold;
    margin: 0;
    color: #333;

    & > span{
        font-size: 10px;
    }
`,lf=({events:e=[]})=>c.jsx(bt,{modules:[Mn,_n,hr],autoplay:!0,spaceBetween:20,navigation:!0,pagination:!1,loop:!0,breakpoints:{1024:{slidesPerView:3},768:{slidesPerView:2},0:{slidesPerView:1}},children:e.map((t,n)=>c.jsx(St,{children:c.jsx(a9,{event:t,delay:n*.1})},n))}),a9=({event:e,delay:t})=>{const n=K.useRef(null),r=Gx(n,{once:!0}),i=()=>{window.open("https://wa.link/dojlwi","_blank")};return c.jsxs(ZC,{ref:n,initial:{opacity:0,y:50},animate:r?{opacity:1,y:0}:{},transition:{duration:.5,delay:t},children:[c.jsx(JC,{src:e.image,alt:e.title}),c.jsxs(e9,{children:[c.jsx(t9,{children:e.title}),c.jsx(n9,{children:e.dateRange}),c.jsx(r9,{children:e.features.map((o,a)=>c.jsxs("span",{children:[o.icon," ",o.text]},a))}),c.jsx(i9,{children:c.jsxs(o9,{children:["A partir de: ",c.jsx("span",{children:"10x"}),"R$",e.price]})}),c.jsx(Ol,{text:"Quero fechar minha reserva agora",backDefine:"var(--color--black)",colorDefine:"var(--color--white)",onClick:i})]})]})};function Wy(e){return X({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 0 0 0 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"},child:[]}]})(e)}function qy(e){return X({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 0 0 0-48.4z"},child:[]}]})(e)}function s9(e){return X({tag:"svg",attr:{viewBox:"0 0 1024 1024",fill:"currentColor",fillRule:"evenodd"},child:[{tag:"path",attr:{d:"M448 0C200.807 0 0 200.807 0 448s200.807 448 448 448 448-200.807 448-448S695.193 0 448 0m0 38.957c226.14 0 409.043 182.904 409.043 409.043 0 226.14-182.904 409.043-409.043 409.043-41.365 0-81.269-6.19-118.886-17.576 16.756-28.014 38.39-68.058 46.984-101.12 5.106-19.601 26.098-99.559 26.098-99.559 13.642 26.045 53.503 48.087 95.945 48.087 126.295 0 217.343-116.149 217.343-260.484 0-138.375-112.916-241.88-258.201-241.88-180.753 0-276.69 121.314-276.69 253.407 0 61.433 32.673 137.902 84.989 162.256 7.924 3.688 12.18 2.09 14-5.592 1.4-5.831 8.468-34.255 11.64-47.479 1.016-4.22.524-7.866-2.89-12.021-17.316-21.004-31.196-59.583-31.196-95.566 0-92.374 69.932-181.771 189.076-181.771 102.875 0 174.924 70.13 174.924 170.396 0 113.281-57.2 191.777-131.63 191.777-41.106 0-71.885-34.005-62.011-75.706 11.838-49.77 34.695-103.478 34.695-139.43 0-32.149-17.253-58.967-52.994-58.967-42.024 0-75.783 43.447-75.783 101.69 0 37.063 12.554 62.163 12.554 62.163s-41.511 175.51-49.114 208.174c-7.619 32.642-5.578 76.605-2.435 109.337C144.551 766.518 38.957 619.785 38.957 448 38.957 221.86 221.86 38.957 448 38.957",transform:"translate(64 64)"},child:[]}]})(e)}function l9(e){return X({tag:"svg",attr:{viewBox:"0 0 1024 1024",fill:"currentColor",fillRule:"evenodd"},child:[{tag:"path",attr:{d:"M365.014.667C408.68 0 452.011.333 495.342 0c2.667 51 21 102.999 58.33 138.998 37.332 37 89.997 54 141.328 59.666v134.332c-47.998-1.667-96.33-11.667-139.994-32.333-19-8.667-36.665-19.667-53.998-31-.333 97.332.334 194.665-.666 291.663-2.667 46.666-18 93-44.998 131.332-43.665 64-119.328 105.665-196.992 106.999-47.664 2.666-95.329-10.334-135.994-34.333C55.028 725.658 7.696 652.992.697 574.993c-.667-16.667-1-33.333-.334-49.666 6-63.333 37.332-123.999 85.997-165.332 55.33-47.999 132.66-70.999 204.99-57.332.667 49.333-1.332 98.665-1.332 147.998-33-10.667-71.664-7.667-100.663 12.333-20.999 13.667-36.998 34.666-45.331 58.333-7 17-5 35.666-4.667 53.666 8 54.666 60.664 100.665 116.662 95.665 37.332-.333 72.997-22 92.33-53.666 6.332-11 13.332-22.333 13.665-35.333 3.334-59.666 2-118.998 2.334-178.664.333-134.332-.334-268.33.666-402.328",transform:"translate(165 112)"},child:[]}]})(e)}function c9(e){return X({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"},child:[]}]})(e)}const u9=C(F.button)`
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
`,d9=C(F.footer)`
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
`,p9=C.div`
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
        font-family: var(--font--avenir);

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
`,f9=C.div`
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
`,h9=C.section`
    display: flex;
    width: 100%;
    height: 35vh;

    @media (max-width: 768px){
        height: auto;
        flex-direction: column;
        gap: 25px;
    }
`,m9=C.section`
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
        font-family: var(--font--avenir);
        margin-top: 10px;

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
        font-family: var(--font--avenir);
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 2px;
        transition: all .2s ease;
        border-radius: 5px;
        width: 80%;
    }

    & > div a:hover{
        background-color: var(--color--white);
        transform: translateX(20px);
        color: var(--color--black);
        width: 80%;
    }

    & > div > img {
        width: 40%;
        object-fit: contain;
    }
`,g9=C.section`
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
        width: 30%;
        line-height: 100%;

        @media (max-width: 768px){
            width: 100%;
            font-size: 20px;
            text-align: center;
        }
    }
`,v9=C.hr`
    width: 100%;
    margin-bottom: -50px;
`,x9=C.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 2vh;

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
        margin-left: 1ch;
    }
`,da=()=>{const e=j.useRef(null),t=Gx(e,{once:!0}),[n,r]=j.useState(""),[i,o]=j.useState(""),[a,s]=j.useState(""),l={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.6}}},u=async d=>{if(d.preventDefault(),!n||!i||!a){alert("Por favor, preencha todos os campos.");return}const p={name:String(n).trim(),email:String(i).trim(),tel:String(a).trim()};try{const f=await fetch("https://hook.us1.make.com/e79ttwjdwv9soeppgqnu5rbnpk9l828e",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(p)}),v=await f.text();f.ok?(alert("Dados enviados com sucesso!"),r(""),o(""),s("")):(console.error("Erro de resposta:",v),alert("Erro ao enviar os dados: "+v))}catch(f){console.error("Erro:",f),alert("Erro ao enviar os dados. Tente novamente.")}};return c.jsx(c.Fragment,{children:c.jsxs(d9,{ref:e,initial:"hidden",animate:t?"visible":"hidden",children:[c.jsxs(h9,{as:F.div,children:[c.jsxs(p9,{children:[c.jsx(F.h1,{variants:l,initial:"hidden",animate:t?"visible":"hidden",transition:{delay:.2},children:"Fale agora com a nossa central de reservas"}),c.jsxs(F.p,{variants:l,initial:"hidden",animate:t?"visible":"hidden",transition:{delay:.3},children:["Todas as informações são usadas apenas para entrar em contato. Entenda melhor sobre o uso das suas informações pela nossa",c.jsx("a",{href:"https://exemplo.com/politica-de-privacidade",children:"política de privacidade"}),"."]}),c.jsx(F.hr,{variants:l,initial:"hidden",animate:t?"visible":"hidden",transition:{delay:.4}}),c.jsxs("div",{children:[c.jsx(F.h4,{variants:l,initial:"hidden",animate:t?"visible":"hidden",transition:{delay:.5},children:"Siga-nos"}),c.jsxs("div",{children:[c.jsx(F.a,{href:"https://instagram.com",target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.1},variants:l,initial:"hidden",animate:t?"visible":"hidden",transition:{delay:.6},children:c.jsx(IC,{})}),c.jsx(F.a,{href:"https://tiktok.com",target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.1},variants:l,initial:"hidden",animate:t?"visible":"hidden",transition:{delay:.7},children:c.jsx(l9,{})}),c.jsx(F.a,{href:"https://pinterest.com",target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.1},variants:l,initial:"hidden",animate:t?"visible":"hidden",transition:{delay:.8},children:c.jsx(s9,{})})]})]})]}),c.jsx(f9,{children:c.jsxs("form",{id:"contactForm",onSubmit:u,children:[c.jsx(F.input,{type:"text",id:"name",placeholder:"Me diga seu nome",value:n,onChange:d=>r(d.target.value),variants:l,initial:"hidden",animate:t?"visible":"hidden",transition:{delay:.9}}),c.jsx(F.input,{type:"email",id:"email",placeholder:"Preciso saber seu e-mail também!",value:i,onChange:d=>o(d.target.value),variants:l,initial:"hidden",animate:t?"visible":"hidden",transition:{delay:1}}),c.jsx(F.input,{type:"tel",id:"tel",placeholder:"Me diga seu número de WhatsApp",value:a,onChange:d=>s(d.target.value),variants:l,initial:"hidden",animate:t?"visible":"hidden",transition:{delay:1.1}}),c.jsxs(u9,{type:"submit",whileHover:{scale:1.05,backgroundColor:"var(--color--blue)"},whileTap:{scale:.95},children:[c.jsx(c9,{size:20}),c.jsx("span",{children:"Enviar meus dados para contato"})]})]})})]}),c.jsxs(m9,{as:F.div,children:[c.jsxs(F.div,{variants:l,initial:"hidden",animate:t?"visible":"hidden",transition:{delay:1.2},children:[c.jsx("img",{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1729513421/white_sevdgn.png",alt:"Descrição da imagem",loading:"lazy"}),c.jsx("p",{children:"A pousada mais Pet Friendly, venha conhecer!"})]}),c.jsxs(F.div,{variants:l,initial:"hidden",animate:t?"visible":"hidden",transition:{delay:1.3},children:[c.jsx("h2",{children:"Âncoras"}),c.jsxs("a",{href:"#",children:[" ",c.jsx(zt,{})," Início "]}),c.jsxs("a",{href:"#/sobre",children:[" ",c.jsx(zt,{})," Sobre nós "]}),c.jsxs("a",{href:"#/serra",children:[" ",c.jsx(zt,{})," Le Ange Serra "]}),c.jsxs("a",{href:"#/mar",children:[" ",c.jsx(zt,{})," Le Ange Mar "]}),c.jsxs("a",{href:"#/eventos",children:[" ",c.jsx(zt,{})," Eventos "]}),c.jsxs("a",{href:"#/acomoda",children:[" ",c.jsx(zt,{})," Acomodações "]})]}),c.jsxs(F.div,{variants:l,initial:"hidden",animate:t?"visible":"hidden",transition:{delay:1.4},children:[c.jsx("h2",{children:"Ajuda"}),c.jsxs("a",{href:"https://wa.link/dojlwi",target:"_blank",children:[" ",c.jsx(zt,{})," WhatsApp "]}),c.jsxs("a",{href:"https://wa.link/dojlwi",target:"_blank",children:[" ",c.jsx(zt,{})," +55 (21) 99423-0871 "]}),c.jsxs("a",{href:"mailto:pousadaleange@gmail.com",target:"_blank",children:[" ",c.jsx(zt,{})," pousadaleange@gmail.com "]})]}),c.jsxs(F.div,{variants:l,initial:"hidden",animate:t?"visible":"hidden",transition:{delay:1.5},children:[c.jsx("h2",{children:"Fique por dentro de tudo"}),c.jsxs("a",{href:"https://www.instagram.com/pousadaleange/",target:"_blank",children:[" ",c.jsx(zt,{})," Instagram "]}),c.jsxs("a",{href:"https://www.tiktok.com/@pousadaleange",target:"_blank",children:[" ",c.jsx(zt,{})," TikTok "]}),c.jsxs("a",{href:"https://br.pinterest.com/pousadaleange/",target:"_blank",children:[" ",c.jsx(zt,{})," Pinterest "]})]})]}),c.jsxs(g9,{as:F.div,variants:l,initial:"hidden",animate:t?"visible":"hidden",transition:{delay:1.6},children:[c.jsx("h1",{children:"Saiba onde estamos localizados"}),c.jsx("div",{children:c.jsx("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235239.22077211382!2d-43.355636!3d-22.461517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x99106a0d4d634d%3A0x5a069366075bf207!2sPousada%20Le%20Ange!5e0!3m2!1spt-BR!2sbr!4v1697101366468!5m2!1spt-BR!2sbr",width:"300",height:"150",style:{border:0,borderRadius:15},allowFullScreen:"",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade",title:"Mapa da Unidade Serra"})}),c.jsx("div",{children:c.jsx("iframe",{src:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14718.952062952678!2d-41.958707!3d-22.737977!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x97ab01cac79615%3A0x6b404b4741597da1!2sLeAnge%20Mar!5e0!3m2!1spt-BR!2sus!4v1728577984633!5m2!1spt-BR!2sus",width:"300",height:"150",style:{border:0,borderRadius:15},allowFullScreen:"",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade",title:"Mapa da Unidade Mar"})})]}),c.jsx(v9,{as:F.hr,variants:l,initial:"hidden",animate:t?"visible":"hidden",transition:{delay:1.7}}),c.jsxs(x9,{as:F.div,variants:l,initial:"hidden",animate:t?"visible":"hidden",transition:{delay:1.8},children:[c.jsx("p",{children:"Todos os direitos reservados | &copy 2024"}),c.jsx("a",{href:"#",children:"Termos de condições"}),c.jsxs("p",{children:["Desenvolvido por ",c.jsx("b",{children:c.jsx("a",{href:"#",children:"Aleph"})})]})]})]})})};function _0(e){return X({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M21 9h-1.42l-3.712-6.496-1.736.992L17.277 9H6.723l3.146-5.504-1.737-.992L4.42 9H3a1.001 1.001 0 0 0-.965 1.263l2.799 10.264A2.005 2.005 0 0 0 6.764 22h10.473c.898 0 1.692-.605 1.93-1.475l2.799-10.263A.998.998 0 0 0 21 9zm-3.764 11v1-1H6.764L4.31 11h15.38l-2.454 9z"},child:[]},{tag:"path",attr:{d:"M9 13h2v5H9zm4 0h2v5h-2z"},child:[]}]})(e)}function y9(e){return X({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"m16.895 6.519 2.813-2.812-1.414-1.414-2.846 2.846a6.575 6.575 0 0 0-.723-.454 5.778 5.778 0 0 0-5.45 0c-.25.132-.488.287-.722.453L5.707 2.293 4.293 3.707l2.813 2.812A8.473 8.473 0 0 0 5.756 9H2v2h2.307c-.065.495-.107.997-.107 1.5 0 .507.042 1.013.107 1.511H2v2h2.753c.013.039.021.08.034.118.188.555.421 1.093.695 1.6.044.081.095.155.141.234l-2.33 2.33 1.414 1.414 2.11-2.111a7.477 7.477 0 0 0 2.068 1.619c.479.253.982.449 1.496.58a6.515 6.515 0 0 0 3.237.001 6.812 6.812 0 0 0 1.496-.58c.465-.246.914-.55 1.333-.904.258-.218.5-.462.734-.716l2.111 2.111 1.414-1.414-2.33-2.33c.047-.08.098-.155.142-.236.273-.505.507-1.043.694-1.599.013-.039.021-.079.034-.118H22v-2h-2.308c.065-.499.107-1.004.107-1.511 0-.503-.042-1.005-.106-1.5H22V9h-3.756a8.494 8.494 0 0 0-1.349-2.481zM8.681 7.748c.445-.558.96-.993 1.528-1.294a3.773 3.773 0 0 1 3.581 0 4.894 4.894 0 0 1 1.53 1.295c.299.373.54.8.753 1.251H7.927c.214-.451.454-.879.754-1.252zM17.8 12.5c0 .522-.042 1.044-.126 1.553-.079.49-.199.973-.355 1.436a8.28 8.28 0 0 1-.559 1.288 7.59 7.59 0 0 1-.733 1.11c-.267.333-.56.636-.869.898-.31.261-.639.484-.979.664s-.695.317-1.057.41c-.04.01-.082.014-.122.023V14h-2v5.881c-.04-.009-.082-.013-.122-.023-.361-.093-.717-.23-1.057-.41s-.669-.403-.978-.664a6.462 6.462 0 0 1-.871-.899 7.402 7.402 0 0 1-.731-1.108 8.337 8.337 0 0 1-.56-1.289 9.075 9.075 0 0 1-.356-1.438A9.61 9.61 0 0 1 6.319 11H17.68c.079.491.12.995.12 1.5z"},child:[]}]})(e)}function O0(e){return X({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M21.004 7.975V6c0-2.206-1.794-4-4-4h-10c-2.206 0-4 1.794-4 4v1.998l-.076.004A1 1 0 0 0 2 9v2a1 1 0 0 0 1 1h.004v6c0 .735.403 1.372.996 1.72V21a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1h10v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1.276A1.994 1.994 0 0 0 21.004 18v-6a1 1 0 0 0 1-1V9.062a1.006 1.006 0 0 0-.072-.455c-.203-.487-.635-.604-.928-.632zM19.006 18H5.004v-5h14.001l.001 5zM11.004 7v4h-6V7h6zm8 0v4h-6V7h6zm-12-3h10c.736 0 1.375.405 1.722 1H5.282c.347-.595.986-1 1.722-1z"},child:[]},{tag:"circle",attr:{cx:"7.5",cy:"15.5",r:"1.5"},child:[]},{tag:"circle",attr:{cx:"16.5",cy:"15.5",r:"1.5"},child:[]}]})(e)}function w9(e){return X({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 8c-2.168 0-4 1.832-4 4s1.832 4 4 4 4-1.832 4-4-1.832-4-4-4zm0 6c-1.065 0-2-.935-2-2s.935-2 2-2 2 .935 2 2-.935 2-2 2z"},child:[]},{tag:"path",attr:{d:"M20 5h-2.586l-2.707-2.707A.996.996 0 0 0 14 2h-4a.996.996 0 0 0-.707.293L6.586 5H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V7c0-1.103-.897-2-2-2zM4 18V7h3c.266 0 .52-.105.707-.293L10.414 4h3.172l2.707 2.707A.996.996 0 0 0 17 7h3l.002 11H4z"},child:[]}]})(e)}function b9(e){return X({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412l7.332 7.332c.17.299.498.492.875.492a.99.99 0 0 0 .792-.409l7.415-7.415c2.354-2.354 2.354-6.049-.002-8.416a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595zm6.791 1.61c1.563 1.571 1.564 4.025.002 5.588L12 18.586l-6.793-6.793c-1.562-1.563-1.561-4.017-.002-5.584.76-.756 1.754-1.172 2.799-1.172s2.035.416 2.789 1.17l.5.5a.999.999 0 0 0 1.414 0l.5-.5c1.512-1.509 4.074-1.505 5.584-.002z"},child:[]}]})(e)}function S9(e){return X({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M20.787 9.023c-.125.027-1.803.418-3.953 1.774-.323-1.567-1.279-4.501-4.108-7.485L12 2.546l-.726.767C8.435 6.308 7.483 9.25 7.163 10.827 5.005 9.448 3.34 9.052 3.218 9.024L2 8.752V10c0 7.29 3.925 12 10 12 5.981 0 10-4.822 10-12V8.758l-1.213.265zM8.999 12.038c.002-.033.152-3.1 3.001-6.532C14.814 8.906 14.999 12 15 12v.125a18.933 18.933 0 0 0-3.01 3.154 19.877 19.877 0 0 0-2.991-3.113v-.128zM12 20c-5.316 0-7.549-4.196-7.937-8.564 1.655.718 4.616 2.426 7.107 6.123l.841 1.249.825-1.26c2.426-3.708 5.425-5.411 7.096-6.122C19.534 15.654 17.304 20 12 20z"},child:[]}]})(e)}function I0(e){return X({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M20.832 4.555A1 1 0 0 0 20 3H4a1 1 0 0 0-.832 1.554L11 16.303V20H8v2h8v-2h-3v-3.697l7.832-11.748zm-2.7.445-2 3H7.868l-2-3h12.264z"},child:[]}]})(e)}function R0(e){return X({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"},child:[]}]})(e)}function j9(e){return X({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4zm-2 4v-1c0-.276.244-.5.545-.5h10.91c.3 0 .545.224.545.5v1c0 .276-.244.5-.546.5H2.545C2.245 5 2 4.776 2 4.5m6 3.493c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132"},child:[]}]})(e)}const T9=_l`
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
`,Gy=fr`
  0% { border-radius: 0 30px 20px 0; }
  25% { border-radius: 20px 0 30px 20px; }
  50% { border-radius: 30px 20px 0 30px; }
  75% { border-radius: 30px 30px 20px 0; }
  100% { border-radius: 0 20px 30px 0; }
`,C9=C.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 60%;
    border-radius: 25px 0 25px 0;/* Mantém o mesmo border-radius */
    background: linear-gradient(0deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)); /* Gradiente */
    pointer-events: none; /* Apenas decorativa */
    animation: ${Gy} 5s ease-in-out infinite;
    z-index: 1;

    @media (max-width: 768px){
        border-radius: 20px 0 20px 0;
    }
`,P9=C(F.div)`
  position: relative;
  width: 100%;
  height: 95vh;
  display: flex;
  align-items: flex-end;
  background-size: cover;
  background-position: center;
  animation: ${Gy} 5s ease-in-out infinite;

  @media (max-width: 768px){
    animation: none;
    border-radius: 25px 0 25px 0;
    height: 80vh;
  }
`,E9=C(F.div)`
  position: absolute;
  bottom: 30px;
  left: 20px;
  color: white;
  z-index: 10;
`,k9=C(F.h2)`
  font-size: 20px;
  font-weight: bold;
  font-family: var(--font--comfortaa);

  @media (max-width: 768px){
    font-family: var(--font--comfortaa);
    font-size: 1.4rem;
    font-weight: 800;
  }
`,z9=C(F.p)`
  font-size: 13px;
  margin: 0px 0;
  font-family: var(--font--comfortaa);

  @media (max-width: 768px){
    font-size: 13px;
    font-weight: 200;
    width: 80%;
    line-height: 100%;
    font-family: var(--font--comfortaa);
    margin: 0;
  }
`,A9=C(F.div)`
  display: flex;
  gap: 5px;
  margin-top: 5px;
  flex-wrap: wrap;

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
`,L9=C.div`
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
`,M9=({content:e=[],spaceBetween:t=10,autoplayDelay:n=3e3,showPagination:r=!0,showNavigation:i=!0})=>{const{scrollY:o}=qp(),a=qt(o,[0,300],[0,-30]),s=qt(o,[0,300],[0,-20]),l=qt(o,[0,300],[0,-10]),u=vl(),d=p=>{u("/acomoda",{state:{suiteId:p}})};return c.jsxs(L9,{children:[c.jsx(T9,{}),c.jsx(bt,{modules:[Mn,_n,hr],navigation:i,pagination:!1,spaceBetween:t,loop:!0,slidesPerView:1,autoplay:{delay:n,disableOnInteraction:!1},breakpoints:{640:{slidesPerView:1},1024:{slidesPerView:3}},children:e.map((p,f)=>c.jsxs(St,{children:[c.jsx(C9,{}),c.jsx(P9,{style:{backgroundImage:`url(${p.backgroundImage})`},children:c.jsxs(E9,{children:[c.jsx(k9,{style:{y:a},children:p.title}),c.jsx(z9,{style:{y:s},children:p.subtitle}),c.jsx(A9,{style:{y:l},children:p.features.map((v,x)=>c.jsxs("span",{children:[v.icon," ",v.text]},x))}),c.jsx(Ol,{onClick:()=>d(p.id),text:"Conhecer acomodações",suiteId:p.id})]})})]},f))})]})};function _9(e){return X({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 13m-8 0a8 8 0 1 0 16 0a8 8 0 1 0 -16 0"},child:[]},{tag:"path",attr:{d:"M11 5l1 -2l1 2"},child:[]},{tag:"path",attr:{d:"M4.512 10.161c2.496 -1.105 4.992 -.825 7.488 .839c2.627 1.752 5.255 1.97 7.882 .653"},child:[]},{tag:"path",attr:{d:"M4.315 15.252c2.561 -1.21 5.123 -.96 7.685 .748c2.293 1.528 4.585 1.889 6.878 1.081"},child:[]}]})(e)}const O9=C(F.div)` // Aplicando motion ao ModalContainer
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`,I9=C(F.div)` // Aplicando motion ao ModalCard
  background: white;
  border-radius: 60px 20px 35px 10px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 0px 20px rgba(0, 0, 0, 0.9);
  width: 50%;
  height: 70%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  gap: 5px;
  font-family: var(--font--comfortaa);
  background-image: url('https://res.cloudinary.com/dupg7clzc/image/upload/v1731008398/Untitled-31_gkzipm.png');
  background-size: cover;
  background-position: center;
  filter: contrast(120%);

  @media (max-width: 768px) {
    width: 85%;
    gap: 40px;
    background-image: url('https://res.cloudinary.com/dupg7clzc/image/upload/v1731008479/celular-1_02_ahubmo.png');
  }

  & > p {
    width: 60%;
    font-weight: 100;
    font-size: .9rem;
    line-height: 110%;
    color: var(--color--white);

    @media(max-width: 768px){
      line-height: 120%;
      width: 100%;
      margin-bottom: -25px;
    }
  }
`,R9=C(F.button)` 
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  font-size: 50px;
  position: absolute;
  top: 10px;
  right: 15px;
  cursor: pointer;
  color: var(--color--white);
  font-family: var(--font--comfortaa);
  font-weight: 100;
  background-color: rgba(0, 0, 0, 0.8);
  box-shadow: 0 0 5px rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 1);
  width: 50px;
  height: 50px;
  transition: all .2s ease;

  @media(max-width: 768px){
    width: 35px;
    height: 35px;
    font-size: 35px;
  }

  &:hover{
    background-color: var(--color--white);
    color: var(--color--black);
    box-shadow: 0 0 5px rgba(255, 255, 255, 1);
    border: 1px solid var(--color--white);
  }
`,V9=C(F.a)` // Aplicando motion ao WhatsAppButton
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  padding: 8px 20px;
  background-color: var(--color--white);
  border: 1px dashed #ff0a0a;
  font-weight: 600;
  color: var(--color--black);
  font-size: .9rem;
  border-radius: 10px 0 10px 0;
  text-decoration: none;
  font-weight: 100;
  margin-top: 15px;
  transition: all .2s ease;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.7);

  @media(max-width: 768px){
    font-size: .7rem;
  }

  &:hover {
    padding: 8px 25px;
    background-color: var(--color--black);
    color: var(--color--white);
  }
`,D9=C(F.div)` // Aplicando motion ao SuiteCountCircle
  position: absolute;
  top: -25px;
  left: -25px;
  background-color: rgba(173, 1, 1, 0.9);
  border: 1px solid var(--color--white);
  color: white;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  font-size: .8rem;
  line-height: 100%;
  font-family: var(--font--comfortaa);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);

  @media(max-width: 768px){
    width: 70px;
    height: 70px;
    font-size: .6rem;
    left: -10px;
    top: -10px;
  }
`,N9=()=>{const[e,t]=j.useState(!0),[n,r]=j.useState(7),[i,o]=j.useState("suítes disponíveis"),a=()=>{t(!1)};return e&&c.jsx(O9,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5},children:c.jsxs(I9,{initial:{scale:.8},animate:{scale:1},exit:{scale:0},transition:{duration:.5},children:[c.jsx(R9,{onClick:a,whileHover:{scale:1},transition:{duration:.2},children:"×"}),c.jsxs(D9,{initial:{y:-20,opacity:0},animate:{y:0,opacity:1},transition:{duration:.5},children:[n," ",i]}),c.jsx("p",{children:"Aproveite nossa promoção especial. Clique abaixo para mais informações."}),c.jsxs(V9,{href:"https://wa.link/dojlwi",target:"_blank",initial:{scale:.8},animate:{scale:1},transition:{duration:.5},children:["Fazer minha reserva agora!",c.jsx(_9,{})]})]})})},B9=[{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730121054/2_bwzqa4.png",alt:"Imagem 1",loading:"lazy"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1729513693/9_hyv1zq.jpg",alt:"Imagem 1",loading:"lazy"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730121054/3_d2soci.png",alt:"Imagem 1",loading:"lazy"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730126866/diversao_jpykdy.jpg",alt:"Imagem 1",loading:"lazy"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730126866/aconchego_y0rxho.jpg",alt:"Imagem 1",loading:"lazy"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730130111/fotoSerra1_pa28ry.jpg",alt:"Imagem 1",loading:"lazy"}],F9=[{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730121191/mar1_lhebdi.webp",alt:"imagem 1",loading:"lazy"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730926455/IMG_0454_o2cwol.jpg",alt:"Imagem 1",loading:"lazy"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730920611/1_z2nkyx.png",alt:"Imagem 3",loading:"lazy"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730901639/4_kuujqb.jpg",alt:"Imagem 1",loading:"lazy"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730832504/piscina_vw7plw.webp",alt:"Imagem 2",loading:"lazy"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730130098/IMG_0041_zv7w3d.jpg",alt:"Imagem 3",loading:"lazy"}],$9=[{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730121054/2_bwzqa4.png",label:"Le Ange Serra"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730121054/3_d2soci.png",label:"Le Ange Serra"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730126866/aconchego_y0rxho.jpg",label:"Le Ange Serra"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730126873/sossego_dutvww.png",label:"Le Ange Serra"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730130097/IMG_0885_pou52r.jpg",label:"Le Ange Mar"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730130097/IMG_0478_eymtmg.jpg",label:"Le Ange Mar"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730130098/IMG_0041_zv7w3d.jpg",label:"Le Ange Mar"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730130886/IMG_6320_jovvjl.webp",label:"Le Ange Serra"}],H9=[{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730130887/IMG_7854_zetqsr.webp",label:"Le Ange Mar"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730130887/fotoMar1_wotf3h.webp",label:"Le Ange Mar"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730130105/fotoSerra3_zqwbav.jpg",label:"Le Ange Serra"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730130104/fotoSerra4_zgia0i.jpg",label:"Le Ange Serra"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730130106/fotoMar6_lfgi4u.jpg",label:"Le Ange Mar"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730130111/fotoSerra1_pa28ry.jpg",label:"Le Ange Serra"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730130112/fotoMar3_ywfvig.jpg",label:"Le Ange Serra"}],V0=C.section`
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


`,U9=C.div`
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
`,W9=C.aside`
    & > h1 {
        font-family: var(--font--comfortaa);
        width: 100%;
        text-align: center;
        color: var(--color--black);

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
        
        @media (max-width: 768px){
            font-size: 12px;
            margin-top: 10px;

        }
    }
`,q9=[{id:"suite-1",title:"Suíte Superior 1",subtitle:"Pousada Le Ange Serra | Miguel Pereira - RJ",backgroundImage:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730124671/suiteSerra1_u0olej.jpg",features:[{icon:c.jsx(to,{}),text:"52m²"},{icon:c.jsx(no,{}),text:"Ar condicionado"},{icon:c.jsx(ze,{}),text:"Cama king size"},{icon:c.jsx(Ce,{}),text:"Banheira"},{icon:c.jsx(ke,{}),text:"Smart TV com canais a cabo"},{icon:c.jsx(xe,{}),text:"Lareira"}]},{id:"suite-master-6",title:"Suíte Master 6",subtitle:"Pousada Le Ange Serra | Miguel Pereira - RJ",backgroundImage:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730124671/suiteSerra2_lhgcj2.jpg",features:[{icon:c.jsx(to,{}),text:"77m²"},{icon:c.jsx(no,{}),text:"Ar condicionado"},{icon:c.jsx(ze,{}),text:"Cama king size"},{icon:c.jsx(Ce,{}),text:"Banheira"},{icon:c.jsx(O,{}),text:"Chaise lounge"},{icon:c.jsx(O,{}),text:"Bay window"}]},{id:"suite2-6",title:"Suíte Standard 6",subtitle:"Pousada Le Ange Mar | Búzios - RJ",backgroundImage:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730125876/suiteMar2_yb1nqi.jpg",features:[{icon:c.jsx(to,{}),text:"32m²"},{icon:c.jsx(no,{}),text:"Ar condicionado"},{icon:c.jsx(ze,{}),text:"Cama king size"},{icon:c.jsx(Ce,{}),text:"Banheira"},{icon:c.jsx(ke,{}),text:"Smart TV com canais a cabo"},{icon:c.jsx(xe,{}),text:"Lareira"}]},{id:"suite2-2",title:"Suíte Standard 2",subtitle:"Pousada Le Ange Mar | Búzios - RJ",backgroundImage:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730125876/suiteMar1_pmcoje.jpg",features:[{icon:c.jsx(to,{}),text:"30m²"},{icon:c.jsx(no,{}),text:"Ar condicionado"},{icon:c.jsx(ze,{}),text:"Cama king size"},{icon:c.jsx(Ce,{}),text:"Banheira"},{icon:c.jsx(ke,{}),text:"Smart TV com canais a cabo"},{icon:c.jsx(xe,{}),text:"Lareira"}]},{id:"suite-10",title:"Suíte Master 10",subtitle:"Pousada Le Ange Serra | Miguel Pereira - RJ",backgroundImage:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730147346/1_lj4tav.jpg",features:[{icon:c.jsx(to,{}),text:"77m²"},{icon:c.jsx(no,{}),text:"Ar condicionado"},{icon:c.jsx(ze,{}),text:"Cama king size"},{icon:c.jsx(xe,{}),text:"Recamier e poltrona de leitura"},{icon:c.jsx(O,{}),text:"Couch lounge"},{icon:c.jsx(xe,{}),text:"Lareira"}]}],G9=C.section`
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
    padding: 2.5% 5%;
    background-color: rgba(0, 0, 0, 0.1);
    clip-path: polygon(1% 1%, 99% 1%, 99% 99%, 1% 99%);

    @media (max-width: 768px){
        height: auto;
        padding: 10% 5%;
        gap: 25px;
        clip-path: polygon(2% 2%, 98% 2%, 98% 98%, 2% 98%);
    }
`,Y9=[{backgroundImage:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730833084/5_sfnitt.png",title:"Pet Friendly",description:"Não temos restrições quanto ao porte ou raça do seu pet, também não cobramos taxas adicionais para a vinda deles. Seu pet tem liberdade total para acessar todas as nossas comodidades!",buttonText:"Viver minha experiência agora",topLeftText:"Le Ange Serra e Mar"},{backgroundImage:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730832504/praia_flvqaf.webp",title:"Praia",description:"Para os amantes da praia, estamos a apenas 150 metros da areia da Praia Rasa, onde você e seu pet podem aproveitar juntinhos e dar um mergulho delicioso no mar.",buttonText:"Viver minha experiência agora",topLeftText:"Le Ange Mar"},{backgroundImage:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730833077/sauna-1_gmuhlq.webp",title:"Sossego",description:"A área da sauna fica localizada ao lado da mata, com barulho do rio que passa e conta com um HotTub abastecido por água natural e aquecido à lenha, o combo completo para você relaxar.",buttonText:"Viver minha experiência agora",topLeftText:"Le Ange Serra"},{backgroundImage:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730832504/piscina_vw7plw.webp",title:"Piscinas",description:"Nossa piscina aquecida com vista panorâmica para o oceano é de surpreender! Possui tratamento especial por ozônio com níveis baixíssimos de cloro, pensando no bem-estar da sua pele a do seu pet também!",buttonText:"Viver minha experiência agora",topLeftText:"Le Ange Mar e Serra"},{backgroundImage:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730833077/cafedamanha_n4vr9z.jpg",title:"Cozinha",description:"Na nossa diária, todas as refeições estão incluídas: café da manhã, almoço, chá da tarde e jantar! Todas preparadas com muito tempero, amor e afeto.",buttonText:"Viver minha experiência agora",topLeftText:"Le Ange Serra e Mar"},{backgroundImage:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730832504/ofuros_zeqb9x.webp",title:"Ofurôs",description:"São dois ofurôs acoplados na piscina, para você relaxar na água quentinha, apreciando a vista exuberante do mar.",buttonText:"Viver minha experiência agora",topLeftText:"Le Ange Mar"},{backgroundImage:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730833077/IMG_7134-scaled_stgkmc.jpg",title:"Divercão",description:"Espaço de sobra para seu PET se divertir! Espaço agility na beira do lago, com muita grama, para seu pet, correr, pular e nadar!",buttonText:"Viver minha experiência agora",topLeftText:"Le Ange Serra"},{backgroundImage:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730832503/bar_qgdbog.webp",title:"Bar",description:"Para completar ainda mais sua experiência, contamos com uma carta variada de vinhos, destilados, drinks e cervejas!",buttonText:"Viver minha experiência agora",topLeftText:"Le Ange Mar"},{backgroundImage:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730126865/adega_n0cszf.jpg",title:"Adega",description:"Para completar ainda mais sua experiência, contamos com uma adega subterrânea para climatização perfeita dos vinhos, bar com carta variada de drinks, cervejas e destilados.",buttonText:"Viver minha experiência agora",topLeftText:"Le Ange Serra"},{backgroundImage:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730832504/suites_px4fhy.webp",title:"Suítes",description:"São 8 suítes elegantemente decoradas, todas com vista para o mar, banheira de imersão, varanda, cama king size, ar condicionado e frigobar.",buttonText:"Viver minha experiência agora",topLeftText:"Le Ange Mar e Serra"}],K9=C.div`
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
        background-image: url('../../../public/background/background_white.webp');
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

`,X9=C.h1`
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    font-family: var(--font--comfortaa);
    color: var(--color--black);

    @media (max-width: 768px){
        display: inline-block;
        font-size: 1.3rem;
        line-height: 110%;
        width: 95%;
        margin-left: 2.5%;
    }
`,Bc=C.h1`
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    font-family: var(--font--comfortaa);
    color: var(--color--black);
    font-size: 1.5rem;

    @media (max-width: 768px){
        display: inline-block;
        font-size: 1.3rem;
        line-height: 110%;
        width: 100%;
        margin-left: 0%;
    }

`,Va=C.p`
    width: 100%;
    text-align: center;
    font-family: var(--font--avenir);
    color: var(--color--black);
    opacity: 0.7;

    @media (max-width: 768px){
        font-size: 0.9rem;
        margin-top: 5px;
    }
`,Q9=[{image:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730919563/frutos_do_mar_zmftbs.jpg",title:"Frutos do mar",dateRange:"22/11/2024 até 24/11/2024 (2 diárias)",features:[{icon:c.jsx(O,{}),text:"23/11 - Frutos do Mar"},{icon:c.jsx(Tn,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(Fe,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"354,20",discount:25},{image:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730919809/1_vdy0cc.jpg",title:"Noite de Risotos",dateRange:"29/11/2024 até 01/12/2024 (2 diárias)",features:[{icon:c.jsx(O,{}),text:"30/11 - Noite de Risostos"},{icon:c.jsx(O,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(Fe,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"359,20",discount:25},{image:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730126391/cozinha_qvars1.jpg",title:"Noite das pizzas",dateRange:"06/12/2024 até 08/12/2024 (3 diárias)",features:[{icon:c.jsx(O,{}),text:"07/12 - Noite das pizzas"},{icon:c.jsx(O,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(Fe,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"359,20",discount:25},{image:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730919952/2_blegej.jpg",title:"Frutos do Mar",dateRange:"13/12/2024 até 15/12/2024 (2 diárias)",features:[{icon:c.jsx(O,{}),text:"14/12 - Frutos do Mar"},{icon:c.jsx(O,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(Fe,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"359,20",discount:25},{image:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730920150/3_oxsk37.jpg",title:"Fique 3 pague 4",dateRange:"Segunda-feira a Sexta-feira",features:[{icon:c.jsx(O,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(Tn,{}),text:"Até 12X SEM JUROS"},{icon:c.jsx(Fe,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"538,90",discount:25},{image:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730920274/4_cl1vx0.jpg",title:"Pacote de Natal",dateRange:"21/12/2024 até 25/12/2024 (4 diárias)",features:[{icon:c.jsx(O,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(Tn,{}),text:"Até 12X SEM JUROS"},{icon:c.jsx(Fe,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"918,40",discount:25}],Z9=C.section`
    height: 80vh;
    margin-bottom: 10vh;
    margin-top: 2.5vh;

    @media (max-width: 768px){
        height: auto;
        margin-bottom: 5vh;
        margin-top: 5vh;
    }
    
`,J9=C.section`
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
`,D0=C.b`
    color: var(--color--green);
`,Fc=C.b`
    color: var(--color--blue);
`,eP=()=>c.jsxs(c.Fragment,{children:[c.jsx(An,{children:c.jsx("title",{children:"Início - Pousada Le Ange"})}),c.jsx(N9,{}),c.jsx(I8,{}),c.jsxs(U9,{containerAnimation:{opacity:0,scale:.8},titleAnimation:{opacity:0,y:-50},textAnimation:{opacity:0,x:50},buttonAnimation:{opacity:0,scale:.5},animationDuration:.7,children:[c.jsxs(W9,{children:[c.jsxs("h1",{children:["Conheça o ",c.jsx(Fc,{children:"melhor de cada cantinho nosso"})]}),c.jsx("p",{children:"Pousada mais Pet Friendly"})]}),c.jsxs(V0,{children:[c.jsx(A0,{content:B9,spaceBetween:20,slidesPerView:1,height:"60vh",contentType:"image",showPagination:!1}),c.jsx(M0,{title:"Le Ange Serra - Miguel Pereira RJ",text:"Aqui na LeAnge, costumamos dizer que a hospedagem é muito mais do que um final de semana para relaxar. É uma EXPERIÊNCIA ÚNICA ao lado do seu PET, para que você colecione os melhores momentos ao lado dele!",borderColor:"var(--color--green)",borderRadius:"30px",buttonColor:"var(--color--green)",buttonBorder:"1px solid var(--color--black)",targetPage:"/serra"})]}),c.jsxs(V0,{children:[c.jsx(M0,{title:"Pousada Le Ange Mar - Búzios RJ",text:"Situada no coração do Arpoador da Praia Rasa, na Le Ange Mar, oferecemos uma experiência memorável, onde a praia está a poucos passos da propriedade e o seu pet é calorosamente recebido para momentos especiais.",borderColor:"var(--color--blue)",borderRadius:"30px",buttonColor:"var(--color--blue)",buttonBorder:"1px solid var(--color--black)",targetPage:"/mar"}),c.jsx(A0,{content:F9,spaceBetween:20,slidesPerView:1,width:"60%",height:"60vh",contentType:"image",showPagination:!1})]})]}),c.jsxs(G9,{children:[c.jsxs("div",{children:[c.jsxs(X9,{children:["Nossos quartos ",c.jsx(D0,{children:"mais procurados"})," ",c.jsx(_C,{})," "]}),c.jsx(Va,{children:"Já consegue se imaginar dormindo aqui?"})]}),c.jsx(M9,{content:q9})]}),c.jsxs(K9,{children:[c.jsxs("div",{children:[c.jsxs(Bc,{children:["Carinho em cada ",c.jsx(Fc,{children:"detalhe"})]}),c.jsx(Va,{children:"Venha ter essa experiência"})]}),c.jsx(sf,{content:Y9,spaceBetween:20,width:"100%",height:"70vh",showPagination:!1,showNavigation:!0})]}),c.jsxs("div",{children:[c.jsxs(Bc,{children:[" ",c.jsx(D0,{children:"Viva"})," essa experiência ",c.jsx(j9,{})," "]}),c.jsx(Va,{children:"Alguns dos nossos momentos"})]}),c.jsxs(Z9,{children:[c.jsx(Js,{images:$9}),c.jsx(Js,{images:H9,reverse:!0})]}),c.jsxs("div",{children:[c.jsxs(Bc,{children:["Conheça nossos pacotes e ",c.jsx(Fc,{children:"noites especiais"})," ",c.jsx(MC,{})," "]}),c.jsx(Va,{children:"Estamos te esperando!"})]}),c.jsx(J9,{children:c.jsx(lf,{events:Q9})}),c.jsx(da,{})]}),tP=_l`

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
`,nP=fr`
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
`,rP=C(F.img)`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50px 0 30px 0;

    @media (max-width: 768px){
        border-radius: 0 15px 0 20px;
    }
`,iP=C(F.div)`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  border-radius: 0 20px 20px 0;
  animation: ${nP} 5s ease-in-out infinite;
  background-image: ${({backgroundImage:e})=>`url(${e})`};
  background-size: cover;
  background-position: center;
`,oP=C(F.div)`
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
`,aP=C(F.div)`
    position: absolute;
    bottom: 20px;
    left: 20px;
    color: var(--color--white);
    font-family: Arial, sans-serif;
`,sP=C(F.h2)`
    font-size: 24px;
    font-weight: bold;
    font-family: var(--font--comfortaa);
`,lP=C(F.p)`
    font-size: 16px;
    margin: 5px 0;
    font-family: var(--font--avenir);
`,cP=C(F.div)`
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
`,uP=C.div`
    width: 100%;
    max-width: 100%;
    margin: 0 auto;

    @media (max-width: 640px) {
        max-width: 100%;
    }
`,N0=({content:e=[],contentType:t="image",spaceBetween:n=10,slidesPerView:r=1,height:i="300px",autoplayDelay:o=3e3,showPagination:a=!0,showNavigation:s=!0})=>{const{scrollY:l}=qp(),u=qt(l,[0,300],[0,-30]),d=qt(l,[0,300],[0,-20]),p=qt(l,[0,300],[0,-10]),f=qt(l,[0,300],[0,-5]);return c.jsxs(uP,{children:[c.jsx(tP,{}),c.jsx(bt,{modules:[Mn,_n,hr],navigation:s,pagination:a?{clickable:!0}:!1,spaceBetween:n,loop:!0,slidesPerView:r,autoplay:{delay:o,disableOnInteraction:!0},style:{height:i},breakpoints:{640:{slidesPerView:1,spaceBetween:10,height:"200px"},768:{slidesPerView:1,spaceBetween:20,height:"250px"},1024:{slidesPerView:1,spaceBetween:30,height:"300px"}},children:e.map((v,x)=>c.jsx(St,{children:t==="image"?c.jsx(rP,{src:v.src,alt:v.alt||`Slide ${x+1}`,initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},transition:{duration:.7,ease:"easeOut"}}):c.jsxs(iP,{backgroundImage:v.backgroundImage,initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},transition:{duration:.8,ease:"easeOut"},children:[c.jsx(oP,{}),c.jsxs(aP,{initial:{opacity:0,y:50},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.8,delay:.3,ease:"easeOut"},children:[c.jsx(sP,{style:{y:u},children:v.title}),c.jsx(lP,{style:{y:d},children:v.subtitle}),c.jsx(cP,{style:{y:p},children:v.features.map((y,b)=>c.jsxs("span",{children:[y.icon," ",y.text]},b))}),c.jsx(Ol,{text:"Conhecer todas as acomodações",style:{y:f}})]})]})},x))})]})},dP=C.div`
    height: 15vh;

    @media (max-width: 768px){
        height: 0;
    }
`,pP=C.section`
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
`,B0=C.section`
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
`,fP=C.section`
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
`,hP=[{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730998910/espaco10_zbobfs.jpg",alt:"Imagem 1"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730998910/espaco6_dfprnt.jpg",alt:"Imagem 1"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730998905/espaco1_e9bneq.jpg",alt:"Imagem 1"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730998903/espaco4_wmcp95.jpg",alt:"Imagem 1"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730998906/espaco3_awfzgo.jpg",alt:"Imagem 1"}],mP=[{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730998908/espaco9_ldc1oy.jpg",alt:"Imagem 1"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730998907/espaco8_pzjgiz.jpg",alt:"Imagem 1"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730998907/espaco2_twf5e1.jpg",alt:"Imagem 1"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730998907/espaco5_gzy5ng.jpg",alt:"Imagem 1"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730998908/espaco7_nlscx5.jpg",alt:"Imagem 1"}],gP=C.section`
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
`,ot=C.div`
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
`,vP=C.section`
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
`,xP=()=>c.jsxs(c.Fragment,{children:[c.jsx(An,{children:c.jsx("title",{children:"Eventos - Pousada Le Ange"})}),c.jsx(dP,{}),c.jsxs(pP,{children:[c.jsxs("div",{children:[c.jsxs("h1",{children:["Do alto da ",c.jsx("b",{children:c.jsx("a",{href:"#/serra",children:"Serra"})}),",",c.jsx("br",{})," às ondas do ",c.jsx("b",{children:c.jsx("a",{href:"#/mar",children:"Mar"})})]}),c.jsx("p",{children:"Venha celebrar na LeAnge, onde o amor pelos pets encontra o cenário perfeito para os seus eventos."}),c.jsx(Hn,{onClick:()=>window.open("https://wa.link/dojlwi","_blank"),text:"Fazer meu evento"})]}),c.jsx("div",{children:c.jsx("img",{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730219093/home_df8ub0.jpg",alt:"foto da home da página de eventos"})})]}),c.jsx(B0,{children:c.jsx(N0,{content:hP,spaceBetween:20,slidesPerView:1,width:"100%",height:"90vh",contentType:"image",showPagination:!0})}),c.jsxs(fP,{children:[c.jsx("div",{children:c.jsx("h1",{children:"Sobre nós"})}),c.jsxs("div",{children:[c.jsxs("div",{children:[c.jsx("span",{children:"Le Ange Serra - Miguel Pereira/RJ"}),c.jsxs("div",{children:[c.jsx("p",{children:"Fundada em 2018, a Pousada LeAnge nasceu da paixão dos seus fundadores pelo amor aos pets, bem-estar e hospitalidade. Localizada em Miguel Pereira, a LeAnge Serra proporciona uma experiência única na região serrana do Rio de Janeiro, sendo um verdadeiro refúgio entre as belezas naturais da Mata Atlântica."}),c.jsx(Hn,{onClick:()=>window.open("https://wa.link/dojlwi","_blank"),text:"Fazer reserva"})]})]}),c.jsxs("div",{children:[c.jsx("span",{children:"Le Ange Serra - Miguel Pereira/RJ"}),c.jsxs("div",{children:[c.jsx("p",{children:"Fundada em 2018, a Pousada LeAnge nasceu da paixão dos seus fundadores pelo amor aos pets, bem-estar e hospitalidade. Localizada em Miguel Pereira, a LeAnge Serra proporciona uma experiência única na região serrana do Rio de Janeiro, sendo um verdadeiro refúgio entre as belezas naturais da Mata Atlântica."}),c.jsx(Hn,{onClick:()=>window.open("https://wa.link/dojlwi","_blank"),text:"Fazer reserva"})]})]})]})]}),c.jsxs(gP,{children:[c.jsx("div",{children:c.jsx("img",{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730219562/11_gzr6ei.jpg",alt:"foto do casamento"})}),c.jsxs("div",{children:[c.jsx("h1",{children:"Pré-Wedding"}),c.jsx("p",{children:"Coração palpitando, emoções à flor da pele e a certeza de dias inesquecíveis."}),c.jsxs("ol",{children:[c.jsxs(ot,{children:[c.jsx(I0,{}),"Coquetel na Chegada (Sexta-feira)"]}),c.jsxs(ot,{children:[c.jsx(R0,{}),"Noite Especial no Sábado"]}),c.jsxs(ot,{children:[c.jsx(w9,{}),"Ensaio Fotográfico dos Noivos"]}),c.jsxs(ot,{children:[c.jsx(b9,{}),"Decoração Romântica na Suíte"]}),c.jsxs(ot,{children:[c.jsx(O0,{}),"Massagem Relaxante"]}),c.jsxs(ot,{children:[c.jsx(y9,{}),"Passeio de Bugre"]}),c.jsxs(ot,{children:[c.jsx(_0,{}),"Piquenique para os Noivos"]}),c.jsxs(ot,{children:[c.jsx(t0,{}),"Late Checkout no Domingo"]})]}),c.jsx(Hn,{text:"Fazer reserva"}),c.jsxs("div",{children:[c.jsx("img",{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730219562/7_sgewp5.jpg",alt:"foto do casamento"}),c.jsx("img",{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730219562/10_deybdj.jpg",alt:"foto do casamento"}),c.jsx("img",{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730219562/9_eavaty.jpg",alt:"foto do casamento"})]})]})]}),c.jsxs(vP,{children:[c.jsxs("div",{children:[c.jsx("h1",{children:"Aniversário"}),c.jsx("p",{children:"Comemore os momentos doces da vida."}),c.jsxs("ol",{children:[c.jsxs(ot,{children:[c.jsx(I0,{}),"Coquetel na Chegada (Sexta-feira)"]}),c.jsxs(ot,{children:[c.jsx(R0,{}),"Noite Especial no Sábado"]}),c.jsxs(ot,{children:[c.jsx(S9,{}),"Massagem Relaxante"]}),c.jsxs(ot,{children:[c.jsx(O0,{}),"Passeio de Bugre"]}),c.jsxs(ot,{children:[c.jsx(_0,{}),"Piquenique"]}),c.jsxs(ot,{children:[c.jsx(t0,{}),"Late Checkout no Domingo"]})]}),c.jsx(Hn,{text:"Fazer reserva"}),c.jsxs("div",{children:[c.jsx("img",{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730986303/niver5_vqhh94.png",alt:"foto do casamento"}),c.jsx("img",{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730986303/niver3_katslf.jpg",alt:"foto do casamento"}),c.jsx("img",{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730986304/niver2_rb3hvs.png",alt:"foto do casamento"})]})]}),c.jsx("div",{children:c.jsx("img",{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730985907/niver1_zyq8zi.png",alt:"foto de aniversário"})})]}),c.jsx(B0,{children:c.jsx(N0,{content:mP,spaceBetween:20,slidesPerView:1,width:"100%",height:"90vh",contentType:"image",showPagination:!0})}),c.jsx(da,{})]}),Yy=C.button`
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
  transition: color 0.3s 0.1s ease-out;
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
`,yP=C(OC)`
  color: ${e=>e.iconColor||"currentColor"};
  height: 20px;
  width: 20px;
  transition: color 0.3s ease;

  ${Yy}:hover & {
    color: ${e=>e.hoverIconColor||e.iconColor||"currentColor"};
  }
`,wP=C.span`
  margin: 10px;
`,On=({text:e="Fazer reserva agora!",textColor:t,backgroundColor:n,borderColor:r,iconColor:i,hoverIconColor:o,hoverBackgroundColor:a,hoverBorderColor:s,hoverColor:l,onClick:u})=>c.jsxs(Yy,{onClick:u,textColor:t,backgroundColor:n,borderColor:r,hoverBackgroundColor:a,hoverBorderColor:s,hoverColor:l,children:[c.jsx(yP,{iconColor:i,hoverIconColor:o}),c.jsx(wP,{children:e})]}),bP=C.section`
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
`,SP=C.div`
    height: 15vh;

    @media (max-width: 768px){
        height: 0;
    }
`,jP=C.section`
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
`,TP=C.section`
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
`,CP=C.section`
    width: 100%;
    height: 100vh;
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
        height: 40%;

        
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
        height: 40%;


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
`,PP=C.section`

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
`,EP=C.div`
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
`,kP=()=>c.jsxs(c.Fragment,{children:[c.jsx(An,{children:c.jsx("title",{children:"Sobre Nós - Pousada Le Ange"})}),c.jsx(SP,{}),c.jsxs(bP,{children:[c.jsxs("div",{children:[c.jsx("h1",{children:"Pousada Le Ange"}),c.jsx("h4",{children:"A pousada mais Pet Friendly do Brasil"}),c.jsx("p",{children:"Um empreendimento familiar fundado em 2018, a Pousada LeAnge Serra surgiu da paixão dos fundadores pelo amor por quatro patas, bem-estar e hospitalidade, situando-se em Miguel Pereira, Rio de Janeiro. Com o sucesso da primeira unidade, expandimos para Búzios em 2023, criando a Pousada LeAnge Mar. A filosofia por trás das nossas pousadas é oferecer um refúgio acolhedor e luxuoso, em que cada detalhe é cuidadosamente pensado para proporcionar conforto e satisfação."})]}),c.jsx("div",{children:c.jsx("img",{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1729516968/cachorro_rlsw5a.png",alt:"foto do cachorro",loading:"lazy"})})]}),c.jsxs(jP,{children:[c.jsxs("div",{children:[c.jsx("img",{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1729529831/7_w7mvfk.jpg",alt:"foto da le ande da serra",loading:"lazy"}),c.jsx("img",{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1729529820/7_s8lgut.jpg",alt:"foto da le ande da serra",loading:"lazy"})]}),c.jsxs("div",{children:[c.jsx("h1",{children:"Duas unidades,"}),c.jsx("h4",{children:"dois cenários incomparáveis"}),c.jsx("p",{children:"A Pousada LeAnge Serra oferece 10 suítes deslumbrantes em meio à natureza exuberante de Miguel Pereira. Já a Pousada LeAnge Mar, com suas 8 suítes exclusivas, proporciona uma experiência costeira em Búzios, com vista direta para o mar."})]})]}),c.jsxs(TP,{children:[c.jsxs("div",{children:[c.jsx("h1",{children:"Diferenciais"}),c.jsx("p",{children:"Somos Pet Lovers, aqui não temos limite de porte, quantidade ou raça. Nosso conceito permite que os pets frequentem o restaurente, a piscina e qualquer outro espaço. Nos tornando assim ÚNICOS com este tipo de experiência."})]}),c.jsxs("div",{children:[c.jsx("img",{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1729530455/6_ezddyi.jpg",loading:"lazy",alt:"foto do diferencial"}),c.jsx("img",{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1729530449/8_n7asdv.jpg",loading:"lazy",alt:"foto do diferencial"}),c.jsx("img",{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1729530446/5_lx3fxd.jpg",loading:"lazy",alt:"foto do diferencial"}),c.jsx("img",{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1729530444/1_nhk8wd.jpg",loading:"lazy",alt:"foto do diferencial"})]})]}),c.jsxs(CP,{children:[c.jsxs("div",{children:[c.jsxs("div",{children:[c.jsx("h1",{children:"Gastronomias"}),c.jsx("p",{children:"Oferecemos um serviço all inclusive que abrange todas as refeições, atendendo todas as restrições alimentares de nossos hóspedes. Nosso compromisso é proporcionar uma experiência gastronômica diversificada e de alta qualidade, utilizando produtos frescos e locais."})]}),c.jsxs("div",{children:[c.jsx("img",{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1729530841/pizza_apuref.jpg",loading:"lazy",alt:"foto de gastronomia"}),c.jsx("img",{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1729530957/sushi_g7sbq9.jpg",loading:"lazy",alt:"foto de gastronomia"})]})]}),c.jsxs("div",{children:[c.jsxs("div",{children:[c.jsx("img",{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1729531441/espaco_bvmt8g.jpg",loading:"lazy",alt:"foto de gastronomia"}),c.jsx("img",{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1729531444/espaco2_i3ieau.png",loading:"lazy",alt:"foto de gastronomia"})]}),c.jsxs("div",{children:[c.jsx("h1",{children:"Espaços compartilhados"}),c.jsx("p",{children:"Nossos espaços compartilhados incluem bibliotecas aconchegantes, sala de jogos e áreas de lazer diversificadas. Na Serra, temos piscinas, ofurô, hot tub, spa e acesso às cachoeiras, enquanto em Búzios, nossos hóspedes desfrutam de piscinas e ofurôs com vistas incríveis do mar aberto, além disso, estamos localizados próximo ao Mirante do Pai Vitório."})]})]})]}),c.jsxs(PP,{children:[c.jsxs("div",{children:[c.jsxs("div",{children:[c.jsx("h1",{children:"Suítes"}),c.jsx("p",{children:"Ambas as unidades dispõem de suítes luxuosas, equipadas com banheiras de imersão, camas king-size e roupas de cama de 400 fios; na Serra, cada suíte conta com uma lareira aconchegante, enquanto em Búzios, a vista para o mar é um espetáculo à parte, garantindo uma experiência de tranquilidade incomparável."})]}),c.jsxs("div",{children:[c.jsx("h1",{children:"Público de alto padrão"}),c.jsx("p",{children:"Nosso público é de classe A, buscando experiências de alto padrão e exclusividade. Para manter a tranquilidade e a exclusividade, a idade mínima para hospedagem é de 13 anos."})]})]}),c.jsx("div",{children:c.jsx("img",{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730130112/fotoMar3_ywfvig.jpg",alt:"foto da pousada"})})]}),c.jsxs(EP,{children:[c.jsx("h1",{children:"Venha viver essa experiência com a gente!"}),c.jsx(On,{text:"Reservar agora!",textColor:"var(--color--white)",backgroundColor:"transparent",borderColor:"var(--color--white)",iconColor:"var(--color--white)",hoverBackgroundColor:"var(--color--white)",hoverBorderColor:"var(--color--white)",hoverColor:"var(--color--white)",hoverIconColor:"var(--color--white)",onClick:()=>window.open("https://wa.link/dojlwi","_blank")})]})]}),zP=C.div`
  display: flex;
  padding: 20px;
  align-items: center;
  height: 90vh;
  gap: 20px;
  padding: 5vh 5%;
  flex-direction: ${({imagePosition:e})=>e==="right"?"row-reverse":"row"};

  @media (max-width: 768px){
    border: 1px solid var(--color--black);
    border-radius: 15px 0 15px 0;
    height: 75vh;
    flex-direction: column;
    width: 95%;
    margin-left: 2.5%;
    padding: 15px;
    background: none;
  
  }
`,AP=C.div`
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
`,LP=C.h2`
  font-size: 2.5em;
  line-height: 100%;
  margin-bottom: 0.5em;
  font-family: var(--font--comfortaa);
  color: ${({$colorDefined:e})=>e||"var(--color--green)"}; // Prefixo $ adicionado
  font-weight: 100;

  @media (max-width: 768px){
    display: inline-block;
    font-size: 1.7rem;
    height: auto;
  }
`,MP=C.p`
  margin-bottom: 1.2em;
  font-size: .9rem;
  width: 80%;
  color: var(--color--black);
  font-family: var(--font--comfortaa);
  font-weight: 100;

  @media (max-width: 768px){
    width: 100%;
    font-size: .9rem;
    height: auto;
  }
`,_P=C.div`
  flex: 2;
  height: 100%;

  @media (max-width: 768px){
    height: 30vh;
  }
`,OP=C.img`
  width: 100%;
  border-radius: 25px 0 25px 0;
  height: 100%;
  object-fit: cover;
`,IP=C(bt)`
  position: relative;

  .swiper-button-prev,
  .swiper-button-next {
    color: #fff;
    background-color: ${({$bgColor:e})=>e||"var(--color--green)"}; // Prefixo $ adicionado
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
    margin-top: -40px!important;
    margin-right: 5px; /* Espaço entre os botões */

    @media (max-width: 768px){
      left: 40px!important;
      margin-top: 0;
    }
  }

  .swiper-button-next {
    left: 150px; /* Coloca o botão "next" próximo ao botão "prev" */
    margin-top: -40px!important;

    @media (max-width: 768px){
      left: 90px!important;
      margin-top: 0;
    }
  }
`,Ky=({slides:e,titleColor:t,buttonBgColor:n,imagePosition:r="left"})=>c.jsx(IP,{navigation:!0,autoplay:{delay:3e3,disableOnInteraction:!1},loop:!0,modules:[Mn,_n,hr],className:"mySwiper",$bgColor:n,children:e.map((i,o)=>c.jsx(St,{children:c.jsxs(zP,{imagePosition:r,children:[c.jsxs(AP,{children:[c.jsx(LP,{$colorDefined:t,children:i.title})," ",c.jsx(MP,{children:i.description}),c.jsx(On,{text:"Reservar agora!",textColor:"var(--color--black)",borderColor:"var(--color--black)",iconColor:"var(--color--black)",hoverBackgroundColor:"var(--color--black)",hoverBorderColor:"var(--color--black)",hoverColor:"var(--color--black)",hoverIconColor:"var(--color--black)",onClick:()=>window.open("https://wa.link/dojlwi","_blank")})]}),c.jsx(_P,{children:c.jsx(OP,{src:i.imageUrl,alt:i.title})})]})},o))}),RP=fr`
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
`,VP=C.section`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0% 5% 2.5% 5%;
    background-image: url('https://res.cloudinary.com/dupg7clzc/image/upload/v1730914828/serra_g9hccc.png');
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
        transition: all .2s ease-in-out;
        animation: ${RP} 5s ease-in-out infinite;
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
        transition: all 0.5s ease-in-out;
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
`,DP=C.div`
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

    & > div p {
        width: 80%;
        font-family: var(--font--avenir);
        font-weight: 200;
        color: var(--color--black);
        line-height: 100%;
        font-size: 1rem;

        @media (max-width: 768px){
            width: 100%;

            text-align: justify;
            margin-bottom: 15px;
        }
    }
`,NP=({images:e})=>{const[t,n]=j.useState(null);return c.jsxs(VP,{children:[c.jsxs(DP,{children:[c.jsx("div",{children:c.jsx("h1",{children:"Conheça as nossas suítes"})}),c.jsx("div",{children:c.jsx(On,{text:"Reservar agora!",textColor:"var(--color--white)",backgroundColor:"transparent",borderColor:"var(--color--white)",iconColor:"var(--color--white)",hoverBackgroundColor:"var(--color--white)",hoverBorderColor:"var(--color--white)",hoverColor:"var(--color--white)",hoverIconColor:"var(--color--white)",onClick:()=>window.open("https://wa.link/dojlwi","_blank")})})]}),c.jsx("main",{children:e.map((r,i)=>c.jsxs("div",{onMouseEnter:()=>n(i),onMouseLeave:()=>n(null),children:[c.jsx("img",{src:r.src,alt:`Imagem ${i+1}`}),c.jsxs("span",{onClick:()=>window.location.href="#/acomoda",children:[t===i?"Conhecer Suíte":r.text,t===i&&c.jsx(Gp,{})]})]},i))})]})},BP=C.section`
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
`,FP=C.div`
    width: 50%;
    height: 90%;
    display: flex;
    justify-content: center;
    overflow: hidden;

    @media (max-width: 768px){
        width: 100%;
        height: 50vh;
    }
`,$P=C.div`
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
`,HP=C.div`
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
`,UP=C.h1`
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
`,WP=C.p`
    color: var(--color--black);
    font-size: 1rem;
    line-height: 100%;
    width: 80%;
    font-family: var(--font--comfortaa);
    font-weight: 100;

    @media (max-width: 768px){
        width: 100%;
        font-size: 1rem;
        text-align: justify;
        padding: 0 2.5%;
    }
`,qP=C(On)`
    margin-top: auto; // Alinha o botão para o fundo
`,Xy=({colorDefinedBold:e})=>c.jsxs(BP,{children:[c.jsx(FP,{children:c.jsxs($P,{children:[c.jsxs("div",{children:[c.jsx("img",{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730920611/1_z2nkyx.png",alt:"Imagem 1"}),c.jsx("img",{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730920609/2_sxwyp9.png",alt:"Imagem 2"})]}),c.jsxs("div",{children:[c.jsx("img",{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730920606/5_utfvwq.png",alt:"Imagem 3"}),c.jsx("img",{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730920607/3_cijslx.png",alt:"Imagem 4"})]})]})}),c.jsxs(HP,{children:[c.jsxs(UP,{colorDefinedBold:e,children:["Pensão ",c.jsx("b",{children:"Completa"})]}),c.jsxs(WP,{children:["Sabe aquela comida com sabor, tempero e afeto que te abraça?",c.jsx("br",{}),c.jsx("br",{}),"Essa é a gastronomia registrada da LeAnge!",c.jsx("br",{}),c.jsx("br",{}),"Nossa estadia dispõe de um restaurante, onde são oferecidas todas as refeições do dia – café da manhã, almoço, chá da tarde e jantar, incluindo nossas deliciosas sobremesas."]}),c.jsx(qP,{text:"Reservar agora!",textColor:"var(--color--black)",backgroundColor:"transparent",borderColor:"var(--color--black)",iconColor:"var(--color--black)",hoverBackgroundColor:"var(--color--black)",hoverBorderColor:"var(--color--black)",hoverColor:"var(--color--black)",hoverIconColor:"var(--color--black)",onClick:()=>window.open("https://wa.link/dojlwi","_blank")})]})]});C.div`
    height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center; 

    @media (max-width: 768px){
        height: auto;
    }
`;C.div`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    height: 100%;
    gap: 10px;

    @media (max-width: 768px){
    }
`;C(St)`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    @media (max-width: 768px){
    }
`;C.img`
    width: 100%;
    height: ${e=>e.index%2===0?"50vh":"30vh"};
    object-fit: cover;
    border-radius: 15px;

    @media (max-width: 768px){
        width: 95%;
        margin-left: 2.5%;
    }
`;const GP=C.section`
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
`,YP=[{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730901643/1_sxf4fc.jpg",alt:"Pousada Le Ange Mar",loading:"lazy",label:"Le Ange Mar"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730901642/2_cldel9.jpg",alt:"Pousada Le Ange Mar",loading:"lazy",label:"Le Ange Mar"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730901641/3_i0ctxp.jpg",alt:"Pousada Le Ange Mar",loading:"lazy",label:"Le Ange Mar"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730901634/9_iinz0o.png",alt:"Pousada Le Ange Serra",loading:"lazy",label:"Le Ange Serra"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730901639/4_kuujqb.jpg",alt:"Pousada Le Ange Mar",loading:"lazy",label:"Le Ange Mar"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730901638/5_flrzdf.jpg",alt:"Pousada Le Ange Mar",loading:"lazy",label:"Le Ange Mar"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730901554/16_mwucoo.png",alt:"Pousada Le Ange Serra",loading:"lazy",label:"Le Ange Serra"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730901555/15_epymcf.jpg",alt:"Pousada Le Ange Serra",loading:"lazy",label:"Le Ange Serra"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730901637/6_b6jtbs.jpg",alt:"Pousada Le Ange Mar",loading:"lazy",label:"Le Ange Mar"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730901636/8_zr7p3o.jpg",alt:"Pousada Le Ange Mar",loading:"lazy",label:"Le Ange Mar"}],KP=[{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730901636/7_gutmna.jpg",alt:"Pousada Le Ange Mar",loading:"lazy",label:"Le Ange Mar"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730901633/10_olepft.png",alt:"Pousada Le Ange Mar",loading:"lazy",label:"Le Ange Mar"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730901631/11_wlyxbh.png",alt:"Pousada Le Ange Serra",loading:"lazy",label:"Le Ange Serra"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730901634/9_iinz0o.png",alt:"Pousada Le Ange Serra",loading:"lazy",label:"Le Ange Serra"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730901566/12_epl2gw.png",alt:"Pousada Le Ange Serra",loading:"lazy",label:"Le Ange Serra"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730901565/13_hhitda.png",alt:"Pousada Le Ange Serra",loading:"lazy",label:"Le Ange Serra"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730901556/14_ybyv7y.png",alt:"Pousada Le Ange Serra",loading:"lazy",label:"Le Ange Serra"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730901490/17_awkinq.png",alt:"Pousada Le Ange Mar",loading:"lazy",label:"Le Ange Mar"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730901639/4_kuujqb.jpg",alt:"Pousada Le Ange Mar",loading:"lazy",label:"Le Ange Mar"}],Qy=()=>c.jsxs(c.Fragment,{children:[c.jsxs(GP,{children:[c.jsx("h1",{children:"Pet Friendly"}),c.jsx(On,{text:"Reservar agora!",textColor:"var(--color--black)",backgroundColor:"transparent",borderColor:"var(--color--black)",iconColor:"var(--color--black)",hoverBackgroundColor:"var(--color--black)",hoverBorderColor:"var(--color--black)",hoverColor:"var(--color--white)",hoverIconColor:"var(--color--white)",onClick:()=>window.open("https://wa.link/dojlwi","_blank")})]}),c.jsx(Js,{images:YP}),c.jsx(Js,{images:KP,reverse:!0})]}),F0=C.section`
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
`,XP=C.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    height: 80vh;
    padding: 0 5%;

    @media (max-width: 768px){
        height: auto;
    }
`,QP=C.div`
    width: 95%; 
    height: 70vh; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 10px;
    border-radius: 15px 0 15px 0; /* Bordas arredondadas */
    position: relative; /* Para posicionar o texto em cima da imagem */
    overflow: hidden; /* Para esconder qualquer conteúdo que extrapole o container */

    @media (max-width: 768px){
        width: 100%;
        margin: 0;
        height: 65vh;
        border: 1px solid transparent;
    }
`,ZP=C.p`
    font-size: .6rem;
    border-radius: 0 10px 0 10px;
    position: absolute;
    bottom: 72%;
    left: -60px;
    transform: rotate(270deg);
    padding: 5px 25px;
    margin: 10px 0; /* Espaço entre o nome e o depoimento */
    color: var(--color--white);
    background-color: rgba(0, 0, 0, 0.4);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(20px);
    z-index: 1; /* Para garantir que o texto fique acima da imagem */
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
`,JP=[{id:1,text:"Pousada Le Ange Mar",bgImages:["https://res.cloudinary.com/dupg7clzc/image/upload/v1730899114/3_nxmzvb.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730899113/2_kck8ru.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730899113/5_tb7gyj.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730899113/4_zkfafk.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730899113/6_y0fjmz.jpg"]},{id:2,text:"Pousada Le Ange Serra",bgImages:["https://res.cloudinary.com/dupg7clzc/image/upload/v1730899371/1_yigwnv.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730899370/3_ji6uzq.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730899370/2_v8reyz.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730899370/4_u1pvbr.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730899370/5_ty6zqr.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730899369/6_dovfum.jpg"]},{id:3,text:"Pousada Le Ange Mar",bgImages:["https://res.cloudinary.com/dupg7clzc/image/upload/v1730899583/1_fddk63.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730899583/2_eomyvd.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730899581/3_islkto.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730899580/4_tds2ap.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730899580/5_cvbsbp.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730899579/6_cs2odp.jpg"]},{id:4,text:"Pousada Le Ange Serra",bgImages:["https://res.cloudinary.com/dupg7clzc/image/upload/v1730899737/1_vw8gku.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730899736/2_u9soep.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730899735/3_aryhje.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730899735/4_g2prnk.jpg"]},{id:5,text:"Pousada Le Ange Mar",bgImages:["https://res.cloudinary.com/dupg7clzc/image/upload/v1730899833/1_urlgor.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730899832/2_elrwj3.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730899831/3_scnvzz.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730899831/4_j7wxsn.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730899830/5_jn3xrs.jpg"]},{id:6,text:"Pousada Le Ange Serra",bgImages:["https://res.cloudinary.com/dupg7clzc/image/upload/v1730899980/1_zt1frt.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730899979/2_m6a7pn.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730899978/3_f1nazk.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730899977/4_al1kde.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730899976/5_fz3g46.jpg"]},{id:6,text:"Pousada Le Ange Mar",bgImages:["https://res.cloudinary.com/dupg7clzc/image/upload/v1730900129/1_adshm2.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730900127/2_gvo2bk.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730900126/3_eqkktf.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730900125/4_pw8xsl.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730900125/5_abwhg7.jpg"]}],Zy=()=>c.jsxs(c.Fragment,{children:[c.jsx(F0,{children:c.jsx("h1",{children:"Palavra do Hóspede"})}),c.jsx(XP,{children:c.jsx(bt,{slidesPerView:1,spaceBetween:10,modules:[Mn,_n,hr],pagination:!1,navigation:!0,loop:!0,grabCursor:!0,autoplay:{delay:7e3,disableOnInteraction:!1},breakpoints:{1024:{slidesPerView:3},768:{slidesPerView:2},480:{slidesPerView:1}},children:JP.map(e=>c.jsx(St,{children:c.jsxs(QP,{children:[c.jsx(bt,{slidesPerView:1,spaceBetween:10,loop:!0,style:{width:"100%",height:"100%"},onTouchStart:t=>{t.stopPropagation()},onMouseEnter:t=>{t.stopPropagation()},children:e.bgImages.map((t,n)=>c.jsx(St,{children:c.jsx("div",{style:{backgroundImage:`url(${t})`,backgroundSize:"cover",backgroundPosition:"center",width:"100%",height:"100%",borderRadius:"25px 0 25px 0"}})},n))}),c.jsx(ZP,{children:e.text})]})},e.id))})}),c.jsx(F0,{children:c.jsx(On,{text:"Reservar agora!",textColor:"var(--color--black)",backgroundColor:"transparent",borderColor:"var(--color--black)",iconColor:"var(--color--black)",hoverBackgroundColor:"var(--color--black)",hoverBorderColor:"var(--color--black)",hoverColor:"var(--color--white)",hoverIconColor:"var(--color--white)",onClick:()=>window.open("https://wa.link/dojlwi","_blank")})})]}),eE=C.div`
    height: 5vh;

    @media (max-width: 768px){
        height: 0vh;
    }
`,tE=C(F.section)`
    width: 100%;
    display: flex;
    padding: 5% 5% 2.5% 10%;
    align-items: center;
    justify-content: space-between;
    height: 95vh;

    &::before{
        content: '';
        width: 100%;
        height: 100vh;
        left: 0;
        top: 0vh;
        position: absolute;
        z-index: -1;
        opacity: .05;
        background-image: url('https://res.cloudinary.com/dupg7clzc/image/upload/v1730901634/9_iinz0o.png');
        background-position: center;
        background-size: cover;

        @media (max-width:768px){
            display: none;
        }
    }

    @media (max-width: 768px){
        padding: 10% 2.5%;
        flex-direction: column-reverse;
    }
`,nE=C(F.div)`
    width: 45%;
    height: 100%;
    background-image: url('https://res.cloudinary.com/dupg7clzc/image/upload/v1730901634/9_iinz0o.png');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 100px 10px 50px 20px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    filter: contrast(110%);

    @media (max-width: 768px){
        width: 100%;
        border-radius: 0px;
        border-image: fill 0 linear-gradient(#0001, #ffffff);
        position: absolute;
        box-shadow: none;
        height: 80%;
        top: 0;
        z-index: -1;
    }
`,rE=C(F.div)`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: 20px;
    flex-direction: column;

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
        line-height: 100%;
        width: 50%;
        font-weight: 100;

        @media (max-width: 768px){

            width: 80%;
            font-size: 1rem;
            text-align: center;
            padding-bottom: 10px;
        }
    }
`,iE=[{backgroundImage:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730833084/5_sfnitt.png",title:"Pet Friendly",description:"Não temos restrições quanto ao porte ou raça do seu pet, também não cobramos taxas adicionais para a vinda deles. Seu pet tem liberdade total para acessar todas as nossas comodidades!",buttonText:"Viver minha experiência agora",topLeftText:"Le Ange Serra"},{backgroundImage:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730833084/8_tk7djv.png",title:"Aventura",description:"Na propriedade, temos trilhas dentro da natureza, beirando o rio! Em diversos pontos você pode escolher dar uma paradinha para tomar um banho e renovar as energias!",buttonText:"Viver minha experiência agora",topLeftText:"Le Ange Serra"},{backgroundImage:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730833082/6_jwjaru.png",title:"Refrescar",description:"Nossa maravilhosa piscina de borda infinita possui aquecimento solar e tratamento especial por ozônio, com níveis baixíssimos de cloro, além de contar com o ofurô aquecido, perfeito para aproveitar no final de tarde.",buttonText:"Viver minha experiência agora",topLeftText:"Le Ange Serra"},{backgroundImage:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730833077/sauna-1_gmuhlq.webp",title:"Sossego",description:"A área da sauna fica localizada ao lado da mata, com barulho do rio que passa e conta com um HotTub abastecido por água natural e aquecido à lenha, o combo completo para você relaxar.",buttonText:"Viver minha experiência agora",topLeftText:"Le Ange Serra"},{backgroundImage:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730833077/biblioteca_l0ce1h.webp",title:"Aconchego",description:"Nossas áreas internas, contam com três salas superequipadas e aconchegantes, sendo elas: sala de TV, sala de estar, sala de jogos com mesa de bilhar, carteado, jogos de tabuleiro e biblioteca.",buttonText:"Viver minha experiência agora",topLeftText:"Le Ange Serra"},{backgroundImage:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730833077/cafedamanha_n4vr9z.jpg",title:"Cozinha",description:"Na nossa diária, todas as refeições estão incluídas: café da manhã, almoço, chá da tarde e jantar! Todas preparadas com muito tempero, amor e afeto.",buttonText:"Viver minha experiência agora",topLeftText:"Le Ange Serra"},{backgroundImage:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730833077/IMG_7134-scaled_stgkmc.jpg",title:"Divercão",description:"Espaço de sobra para seu PET se divertir! Espaço agility na beira do lago, com muita grama, para seu pet, correr, pular e nadar!",buttonText:"Viver minha experiência agora",topLeftText:"Le Ange Serra"},{backgroundImage:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730126865/adega_n0cszf.jpg",title:"Adega",description:"Para completar ainda mais sua experiência, contamos com uma adega subterrânea para climatização perfeita dos vinhos, bar com carta variada de drinks, cervejas e destilados.",buttonText:"Viver minha experiência agora",topLeftText:"Le Ange Serra"},{backgroundImage:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730833076/suites_hsgvxw.webp",title:"Suítes",description:"Nossas suítes são incríveis e cada uma possui o seu charme. Todas contam com banheira com vista para a natureza, lareira para aquecer no friozinho, camas king size, ar condicionado, frigobar e varanda.",buttonText:"Viver minha experiência agora",topLeftText:"Le Ange Serra"},{backgroundImage:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730833077/slide04_li94ks.webp",title:"Relaxar",description:"Relaxe em nosso SPA com uma vista de frente para mata! Você pode escolher contratar nossos serviços de massoterapia, manicure, pedicure.",buttonText:"Viver minha experiência agora",topLeftText:"Le Ange Serra"}],oE=C.section`
    width: 100%;
    height: 120vh;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
    flex-direction: column;
    display: none;

    @media (max-width: 768px){
        height: auto;
        padding: 5% 0;
        gap: 30px;
    }
    

    & > div h1{
        font-size: 2rem;
        font-family: var(--font--comfortaa);
        text-align: center;

        @media (max-width: 768px){

            font-size: 1.3rem;
            width: 95%;
            margin-left: 2.5%;
        }
    }

    & > div p{
        text-align: center;
        font-family: var(--font--avenir);

        @media (max-width: 768px){
            font-size: .9rem;
            margin-top: 10px;
  
        }
    }
    

`,aE=[{title:"Pet Friendly",description:"Não temos restrições quanto ao porte ou raça do seu pet, também não cobramos taxas adicionais para a vinda deles. Seu pet tem liberdade total para acessar todas as nossas comodidades!",buttonText:"Viver minha experiência agora",imageUrl:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730833084/5_sfnitt.png"},{title:"Aventura",description:"Na propriedade, temos trilhas dentro da natureza, beirando o rio! Em diversos pontos você pode escolher dar uma paradinha para tomar um banho e renovar as energias!",buttonText:"Viver minha experiência agora",imageUrl:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730833084/8_tk7djv.png"},{title:"Refrescar",description:"Nossa maravilhosa piscina de borda infinita possui aquecimento solar e tratamento especial por ozônio, com níveis baixíssimos de cloro, além de contar com o ofurô aquecido, perfeito para aproveitar no final de tarde.",buttonText:"Viver minha experiência agora",imageUrl:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730833082/6_jwjaru.png"},{title:"Sossego",description:"A área da sauna fica localizada ao lado da mata, com barulho do rio que passa e conta com um HotTub abastecido por água natural e aquecido à lenha, o combo completo para você relaxar.",buttonText:"Viver minha experiência agora",imageUrl:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730833077/sauna-1_gmuhlq.webp"},{title:"Aconchego",description:"Nossas áreas internas contam com três salas superequipadas e aconchegantes, sendo elas: sala de TV, sala de estar, sala de jogos com mesa de bilhar, carteado, jogos de tabuleiro e biblioteca.",buttonText:"Viver minha experiência agora",imageUrl:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730833077/biblioteca_l0ce1h.webp"},{title:"Cozinha",description:"Na nossa diária, todas as refeições estão incluídas: café da manhã, almoço, chá da tarde e jantar! Todas preparadas com muito tempero, amor e afeto.",buttonText:"Viver minha experiência agora",imageUrl:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730833077/cafedamanha_n4vr9z.jpg"},{title:"Diversão",description:"Espaço de sobra para seu PET se divertir! Espaço agility na beira do lago, com muita grama, para seu pet correr, pular e nadar!",buttonText:"Viver minha experiência agora",imageUrl:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730833077/IMG_7134-scaled_stgkmc.jpg"},{title:"Adega",description:"Para completar ainda mais sua experiência, contamos com uma adega subterrânea para climatização perfeita dos vinhos, bar com carta variada de drinks, cervejas e destilados.",buttonText:"Viver minha experiência agora",imageUrl:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730126865/adega_n0cszf.jpg"},{title:"Suítes",description:"Nossas suítes são incríveis e cada uma possui o seu charme. Todas contam com banheira com vista para a natureza, lareira para aquecer no friozinho, camas king size, ar condicionado, frigobar e varanda.",buttonText:"Viver minha experiência agora",imageUrl:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730833076/suites_hsgvxw.webp"},{title:"Relaxar",description:"Relaxe em nosso SPA com uma vista de frente para a mata! Você pode escolher contratar nossos serviços de massoterapia, manicure, pedicure.",buttonText:"Viver minha experiência agora",imageUrl:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730833077/slide04_li94ks.webp"}],sE=C.section`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px){
        height: auto;
        padding: 0% 0 5% 0 ;
    }
`,lE=[{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730133147/suiteSuperior1_gpjls0.jpg",text:"Suíte Superior 1"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730133146/suiteSuperior2_cqduas.jpg",text:"Suíte Superior 2"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730133142/suiteSuperior3_pgr53r.jpg",text:"Suíte Superior 3"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730133142/suiteStandard4_mrtwhq.jpg",text:"Suíte Standard 4"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730133138/suiteStandard5_j9oyln.jpg",text:"Suíte Standard 5"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730133137/suiteMaster6_id3iqs.jpg",text:"Suíte Master 6"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730133133/suiteMaster7_bqdek7.jpg",text:"Suíte Master 7"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730133111/suiteStandard8_lpyi22.jpg",text:"Suíte Standard 8"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730133110/suiteSuperior9_v1mxwb.jpg",text:"Suíte Superior 9"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730133110/suiteMaster10_gqoxfm.jpg",text:"Suíte Superior 10"}],cE=C.div`
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
`,uE=C.section`
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
`,dE=[{image:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730919563/frutos_do_mar_zmftbs.jpg",title:"Frutos do mar",dateRange:"22/11/2024 até 24/11/2024 (2 diárias)",features:[{icon:c.jsx(O,{}),text:"23/11 - Frutos do Mar"},{icon:c.jsx(Tn,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(Fe,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"354,20",discount:25},{image:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730919809/1_vdy0cc.jpg",title:"Noite de Risotos",dateRange:"29/11/2024 até 01/12/2024 (2 diárias)",features:[{icon:c.jsx(O,{}),text:"30/11 - Noite de Risostos"},{icon:c.jsx(O,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(Fe,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"359,20",discount:25},{image:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730126391/cozinha_qvars1.jpg",title:"Noite das pizzas",dateRange:"06/12/2024 até 08/12/2024 (3 diárias)",features:[{icon:c.jsx(O,{}),text:"07/12 - Noite das pizzas"},{icon:c.jsx(O,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(Fe,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"359,20",discount:25},{image:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730919952/2_blegej.jpg",title:"Frutos do Mar",dateRange:"13/12/2024 até 15/12/2024 (2 diárias)",features:[{icon:c.jsx(O,{}),text:"14/12 - Frutos do Mar"},{icon:c.jsx(O,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(Fe,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"359,20",discount:25},{image:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730920150/3_oxsk37.jpg",title:"Fique 3 pague 4",dateRange:"Segunda-feira a Sexta-feira",features:[{icon:c.jsx(O,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(Tn,{}),text:"Até 12X SEM JUROS"},{icon:c.jsx(Fe,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"538,90",discount:25},{image:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730920274/4_cl1vx0.jpg",title:"Pacote de Natal",dateRange:"21/12/2024 até 25/12/2024 (4 diárias)",features:[{icon:c.jsx(O,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(Tn,{}),text:"Até 12X SEM JUROS"},{icon:c.jsx(Fe,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"918,40",discount:25}],pE=()=>c.jsxs(c.Fragment,{children:[c.jsx(An,{children:c.jsx("title",{children:"Le Ange Serra - Pousada Le Ange"})}),c.jsx(eE,{}),c.jsxs(tE,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.5},children:[c.jsx(nE,{initial:{scale:.8,x:"-100vw"},animate:{scale:1,x:0},transition:{duration:.8,ease:"easeOut"}}),c.jsxs(rE,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8,ease:"easeOut"},children:[c.jsx(F.h4,{initial:{x:-100,opacity:0},animate:{x:0,opacity:1},transition:{duration:.6},children:"FALAR SEMPRE SOBRE A LEANGE SERRA"}),c.jsxs(F.h1,{initial:{x:-100,opacity:0},animate:{x:0,opacity:1},transition:{duration:.6},children:["PET FRIENDLY",c.jsx("br",{})," DO ",c.jsx("b",{children:"BRASIL"})]}),c.jsx(F.p,{initial:{x:-100,opacity:0},animate:{x:0,opacity:1},transition:{duration:.6},children:"Aqui você e seu pet, são mais do que bem-vindos!"}),c.jsx(F.div,{initial:{scale:0},animate:{scale:1},transition:{duration:.6,ease:"backOut"},children:c.jsx(On,{text:"Reservar agora!",textColor:"var(--color--black)",backgroundColor:"transparent",borderColor:"var(--color--black)",iconColor:"var(--color--black)",hoverBackgroundColor:"var(--color--black)",hoverBorderColor:"var(--color--black)",hoverColor:"var(--color--white)",hoverIconColor:"var(--color--white)",onClick:()=>window.open("https://wa.link/dojlwi","_blank")})})]})]}),c.jsx(cE,{children:c.jsx("h1",{children:"LeAnge Serra | Miguel Pereira RJ"})}),c.jsxs(oE,{children:[c.jsxs("div",{children:[c.jsx("h1",{children:"Veja um pouco sobre nosso espaço"}),c.jsx("p",{children:"Estamos ansisosos por você!"})]}),c.jsx(sf,{content:iE,spaceBetween:20,width:"100%",height:"70vh",showPagination:!1,showNavigation:!0})]}),c.jsx(sE,{children:c.jsx(Ky,{slides:aE})}),c.jsx(NP,{images:lE}),c.jsx(Xy,{}),c.jsx(Qy,{}),c.jsx(uE,{children:c.jsx(lf,{events:dE})}),c.jsx(Zy,{}),c.jsx(da,{})]}),fE=fr`
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
`,hE=C.section`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0% 5% 2.5% 5%;
    position: relative;
    background-image: url('https://res.cloudinary.com/dupg7clzc/image/upload/v1730914386/mar_vbkejw.png');
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
        transition: all .2s ease-in-out;
        animation: ${fE} 5s ease-in-out infinite;
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
        transition: all 0.5s ease-in-out;
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
`,mE=C.div`
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

    & > div p {
        width: 80%;
        font-family: var(--font--avenir);
        color: var(--color--white);
        line-height: 100%;
        font-size: 1rem;

        @media (max-width: 768px){
            width: 95%;
            margin-left: 2.5%;
            text-align: justify;
            margin-bottom: 15px;
        }
    }
`,gE=({images:e})=>{const[t,n]=j.useState(null);return c.jsxs(hE,{children:[c.jsxs(mE,{children:[c.jsx("div",{children:c.jsx("h1",{children:"Conheça as nossas suítes"})}),c.jsx("div",{children:c.jsx(On,{text:"Reservar agora!",textColor:"var(--color--white)",backgroundColor:"transparent",borderColor:"var(--color--white)",iconColor:"var(--color--white)",hoverBackgroundColor:"var(--color--white)",hoverBorderColor:"var(--color--white)",hoverColor:"var(--color--white)",hoverIconColor:"var(--color--white)",onClick:()=>window.open("https://wa.link/dojlwi","_blank")})})]}),c.jsx("main",{children:e.map((r,i)=>c.jsxs("div",{onMouseEnter:()=>n(i),onMouseLeave:()=>n(null),children:[c.jsx("img",{src:r.src,alt:`Imagem ${i+1}`}),c.jsxs("span",{onClick:()=>window.location.href="#/acomoda",children:[t===i?"Conhecer Suíte":r.text,t===i&&c.jsx(Gp,{})]})]},i))})]})},vE=C.div`
    height: 5vh;

    @media (max-width: 768px){
        height: 0vh;
    }
`,xE=C(F.section)`
    width: 100%;
    display: flex;
    padding: 5% 10% 2.5% 5%;
    align-items: center;
    justify-content: space-between;
    height: 95vh;

    &::before{
        content: '';
        width: 100%;
        height: 100vh;
        left: 0;
        top: 0vh;
        position: absolute;
        z-index: -1;
        opacity: .05;
        background-image: url('https://res.cloudinary.com/dupg7clzc/image/upload/v1730926399/IMG_0454_gpdc1l.jpg');
        background-position: center;
        background-size: cover;

        @media (max-width:768px){
            display: none;
        }

    }

    @media (max-width: 768px){
        padding: 10% 2.5%;
        flex-direction: column-reverse;
    }
`,yE=C(F.div)`
    width: 45%;
    height: 100%;
    background-image: url('https://res.cloudinary.com/dupg7clzc/image/upload/v1730926455/IMG_0454_o2cwol.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 50px 10px 100px 20px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    filter: contrast(110%);

    @media (max-width: 768px){
        width: 100%;
        border-radius: 0px;
        border-image: fill 0 linear-gradient(#0001, #ffffff);
        box-shadow: none;
        position: absolute;
        height: 80%;
        top: 0;
        z-index: -1;
    }
`,wE=C(F.div)`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    gap: 20px;
    flex-direction: column;

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


        @media (max-width: 768px){

            color: var(--color--black);
            font-size: 14px;
            text-align: center;
            font-weight: 800;
        }
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


        @media (max-width: 768px){
 
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

        @media (max-width: 768px){
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
        font-weight: 100;


        @media (max-width: 768px){
            width: 80%;
            font-size: 1rem;
            text-align: center;
            padding-bottom: 10px;
        }
    }
`,bE=[{backgroundImage:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730832504/petfriendly-scaled_vsev2s.webp",title:"Pet Friendly",description:"Não temos restrições quanto ao porte ou raça do seu pet, também não cobramos taxas adicionais para a vinda deles. Seu pet tem liberdade total para acessar todas as nossas comodidades!",buttonText:"Viver minha experiência agora",topLeftText:"Le Ange Mar"},{backgroundImage:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730832504/praia_flvqaf.webp",title:"Praia",description:"Para os amantes da praia, estamos a apenas 150 metros da areia da Praia Rasa, onde você e seu pet podem aproveitar juntinhos e dar um mergulho delicioso no mar.",buttonText:"Viver minha experiência agora",topLeftText:"Le Ange Mar"},{backgroundImage:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730832504/piscina_vw7plw.webp",title:"Piscinas",description:"Nossa piscina aquecida com vista panorâmica para o oceano é de surpreender! Possui tratamento especial por ozônio com níveis baixíssimos de cloro, pensando no bem-estar da sua pele a do seu pet também!",buttonText:"Viver minha experiência agora",topLeftText:"Le Ange Mar"},{backgroundImage:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730832504/ofuros_zeqb9x.webp",title:"Ofurôs",description:"São dois ofurôs acoplados na piscina, para você relaxar na água quentinha, apreciando a vista exuberante do mar.",buttonText:"Viver minha experiência agora",topLeftText:"Le Ange Mar"},{backgroundImage:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730832504/saladeestar_yakcqy.webp",title:"Sala de estar",description:"A sala de estar é aquela que abraça e aconchega. Cheia de sofás, você pode se acomodar e assistir uma televisão, ou até mesmo ler um livro, sempre na companhia do seu pet.",buttonText:"Viver minha experiência agora",topLeftText:"Le Ange Mar"},{backgroundImage:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730832504/cozinha_q3rrwr.webp",title:"Cozinha",description:"Na nossa diária, todas as refeições estão incluídas: café da manhã, almoço, chá da tarde e jantar! Todas preparadas com muito tempero, amor e afeto.",buttonText:"Viver minha experiência agora",topLeftText:"Le Ange Mar"},{backgroundImage:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730832503/bar_qgdbog.webp",title:"Bar",description:"Para completar ainda mais sua experiência, contamos com uma carta variada de vinhos, destilados, drinks e cervejas!",buttonText:"Viver minha experiência agora",topLeftText:"Le Ange Mar"},{backgroundImage:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730832504/suites_px4fhy.webp",title:"Suítes",description:"São 8 suítes elegantemente decoradas, todas com vista para o mar, banheira de imersão, varanda, cama king size, ar condicionado e frigobar.",buttonText:"Viver minha experiência agora",topLeftText:"Le Ange Mar"}],SE=C.section`
    width: 100%;
    height: 120vh;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
    flex-direction: column;
    display: none;

    @media (max-width: 768px){
        height: auto;
        padding: 5% 0;
        gap: 30px;
    }
    

    & > div h1{
        font-size: 2rem;
        font-family: var(--font--comfortaa);
        text-align: center;

        @media (max-width: 768px){

            font-size: 1.3rem;
            width: 95%;
            margin-left: 2.5%;
        }
    }

    & > div p{
        text-align: center;
        font-family: var(--font--avenir);

        @media (max-width: 768px){
            font-size: .9rem;
            margin-top: 10px;
  
        }
    }
    

`,jE=[{title:"Pet Friendly",description:"Não temos restrições quanto ao porte ou raça do seu pet, também não cobramos taxas adicionais para a vinda deles. Seu pet tem liberdade total para acessar todas as nossas comodidades!",buttonText:"Viver minha experiência agora",imageUrl:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730832504/petfriendly-scaled_vsev2s.webp"},{title:"Praia",description:"Para os amantes da praia, estamos a apenas 150 metros da areia da Praia Rasa, onde você e seu pet podem aproveitar juntinhos e dar um mergulho delicioso no mar.",buttonText:"Viver minha experiência agora",imageUrl:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730832504/praia_flvqaf.webp"},{title:"Piscinas",description:"Nossa piscina aquecida com vista panorâmica para o oceano é de surpreender! Possui tratamento especial por ozônio com níveis baixíssimos de cloro, pensando no bem-estar da sua pele a do seu pet também!",buttonText:"Viver minha experiência agora",imageUrl:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730832504/piscina_vw7plw.webp"},{title:"Ofurôs",description:"São dois ofurôs acoplados na piscina, para você relaxar na água quentinha, apreciando a vista exuberante do mar.",buttonText:"Viver minha experiência agora",imageUrl:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730832504/ofuros_zeqb9x.webp"},{title:"Sala de estar",description:"A sala de estar é aquela que abraça e aconchega. Cheia de sofás, você pode se acomodar e assistir uma televisão, ou até mesmo ler um livro, sempre na companhia do seu pet.",buttonText:"Viver minha experiência agora",imageUrl:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730832504/saladeestar_yakcqy.webp"},{title:"Cozinha",description:"Na nossa diária, todas as refeições estão incluídas: café da manhã, almoço, chá da tarde e jantar! Todas preparadas com muito tempero, amor e afeto.",buttonText:"Viver minha experiência agora",imageUrl:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730832504/cozinha_q3rrwr.webp"},{title:"Bar",description:"Para completar ainda mais sua experiência, contamos com uma carta variada de vinhos, destilados, drinks e cervejas!",buttonText:"Viver minha experiência agora",imageUrl:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730832503/bar_qgdbog.webp"},{title:"Suítes",description:"São 8 suítes elegantemente decoradas, todas com vista para o mar, banheira de imersão, varanda, cama king size, ar condicionado e frigobar.",buttonText:"Viver minha experiência agora",imageUrl:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730832504/suites_px4fhy.webp"}],TE=C.section`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -5vh;

    @media (max-width: 768px){
        height: auto;
        padding: 0% 0 5% 0;
        margin-top: 0;
    }
`,CE=[{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730144220/suiteMar01_p6bfoi.jpg",text:"Suíte Superior 1"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730144220/suiteMar02_pzxjim.jpg",text:"Suíte Standard 2"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730144223/suiteMar07_dgfxzq.jpg",text:"Suíte Superior 3"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730144223/suiteMar05_oid9as.jpg",text:"Suíte Superior 4"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730144223/suiteMar08_g1gmt0.jpg",text:"Suíte Superior 5"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730144224/suiteMar03_o9sxbf.jpg",text:"Suíte Standard 6"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730144224/suiteMar04_jcaps2.jpg",text:"Suíte Master 7"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730144226/suiteMar06_jywv1q.jpg",text:"Suíte Master 8"}],PE=C.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 8vh;
    background-color: var(--color--blue);
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
`,EE=C.section`
    width: 100%;
    height: 80vh;
    padding: 10% 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10vh;

    @media (max-width: 768px){
        height: auto;
        margin-top: 0;
        padding: 10% 2.5% 0 2.5%;
    }
`,kE=[{image:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730919563/frutos_do_mar_zmftbs.jpg",title:"Frutos do mar",dateRange:"22/11/2024 até 24/11/2024 (2 diárias)",features:[{icon:c.jsx(O,{}),text:"23/11 - Frutos do Mar"},{icon:c.jsx(Tn,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(Fe,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"354,20",discount:25},{image:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730919809/1_vdy0cc.jpg",title:"Noite de Risotos",dateRange:"29/11/2024 até 01/12/2024 (2 diárias)",features:[{icon:c.jsx(O,{}),text:"30/11 - Noite de Risostos"},{icon:c.jsx(O,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(Fe,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"359,20",discount:25},{image:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730126391/cozinha_qvars1.jpg",title:"Noite das pizzas",dateRange:"06/12/2024 até 08/12/2024 (3 diárias)",features:[{icon:c.jsx(O,{}),text:"07/12 - Noite das pizzas"},{icon:c.jsx(O,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(Fe,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"359,20",discount:25},{image:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730919952/2_blegej.jpg",title:"Frutos do Mar",dateRange:"13/12/2024 até 15/12/2024 (2 diárias)",features:[{icon:c.jsx(O,{}),text:"14/12 - Frutos do Mar"},{icon:c.jsx(O,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(Fe,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"359,20",discount:25},{image:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730920150/3_oxsk37.jpg",title:"Fique 3 pague 4",dateRange:"Segunda-feira a Sexta-feira",features:[{icon:c.jsx(O,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(Tn,{}),text:"Até 12X SEM JUROS"},{icon:c.jsx(Fe,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"538,90",discount:25},{image:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730920274/4_cl1vx0.jpg",title:"Pacote de Natal",dateRange:"21/12/2024 até 25/12/2024 (4 diárias)",features:[{icon:c.jsx(O,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(Tn,{}),text:"Até 12X SEM JUROS"},{icon:c.jsx(Fe,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"918,40",discount:25}],zE=()=>c.jsxs(c.Fragment,{children:[c.jsx(An,{children:c.jsx("title",{children:"Le Ange Serra - Pousada Le Ange"})}),c.jsx(vE,{}),c.jsxs(xE,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.5},children:[c.jsxs(wE,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8,ease:"easeOut"},children:[c.jsx(F.h4,{initial:{x:-100,opacity:0},animate:{x:0,opacity:1},transition:{duration:.6},children:"FALAR SEMPRE SOBRE A LEANGE MAR"}),c.jsxs(F.h1,{initial:{x:-100,opacity:0},animate:{x:0,opacity:1},transition:{duration:.6},children:["PET FRIENDLY",c.jsx("br",{})," DO ",c.jsx("b",{children:"BRASIL"})]}),c.jsx(F.p,{initial:{x:-100,opacity:0},animate:{x:0,opacity:1},transition:{duration:.6},children:"Aqui você e seu pet, são mais do que bem-vindos!"}),c.jsx(F.div,{initial:{scale:0},animate:{scale:1},transition:{duration:.6,ease:"backOut"},children:c.jsx(On,{text:"Reservar agora!",textColor:"var(--color--black)",backgroundColor:"transparent",borderColor:"var(--color--black)",iconColor:"var(--color--black)",hoverBackgroundColor:"var(--color--black)",hoverBorderColor:"var(--color--black)",hoverColor:"var(--color--white)",hoverIconColor:"var(--color--white)",onClick:()=>window.open("https://wa.link/dojlwi","_blank")})})]}),c.jsx(yE,{initial:{scale:.8,x:"-100vw"},animate:{scale:1,x:0},transition:{duration:.8,ease:"easeOut"}})]}),c.jsx(PE,{children:c.jsx("h1",{children:"LeAnge Mar | Armação dos Búzios RJ"})}),c.jsxs(SE,{children:[c.jsxs("div",{children:[c.jsx("h1",{children:"Veja um pouco sobre nosso espaço"}),c.jsx("p",{children:"Estamos ansisosos por você!"})]}),c.jsx(sf,{content:bE,spaceBetween:20,width:"100%",height:"70vh",showPagination:!1,showNavigation:!0})]}),c.jsx(TE,{children:c.jsx(Ky,{slides:jE,titleColor:"var(--color--blue)",buttonBgColor:"var(--color--blue)",imagePosition:"left"})}),c.jsx(gE,{images:CE}),c.jsx(Xy,{colorDefinedBold:"var(--color--blue)"}),c.jsx(Qy,{}),c.jsx(EE,{children:c.jsx(lf,{events:kE})}),c.jsx(Zy,{}),c.jsx(da,{})]}),Gr="/leange/assets/black-BUrso9Bn.png";function AE(e){return X({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm8.25 5.25a.75.75 0 0 1 .75-.75h8.25a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75Z",clipRule:"evenodd"},child:[]}]})(e)}var Jy={exports:{}};(function(e,t){(function(n,r){e.exports=r(j)})(typeof self<"u"?self:i2,function(n){return function(r){var i={};function o(a){if(i[a])return i[a].exports;var s=i[a]={i:a,l:!1,exports:{}};return r[a].call(s.exports,s,s.exports,o),s.l=!0,s.exports}return o.m=r,o.c=i,o.d=function(a,s,l){o.o(a,s)||Object.defineProperty(a,s,{enumerable:!0,get:l})},o.r=function(a){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},o.t=function(a,s){if(1&s&&(a=o(a)),8&s||4&s&&typeof a=="object"&&a&&a.__esModule)return a;var l=Object.create(null);if(o.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:a}),2&s&&typeof a!="string")for(var u in a)o.d(l,u,(function(d){return a[d]}).bind(null,u));return l},o.n=function(a){var s=a&&a.__esModule?function(){return a.default}:function(){return a};return o.d(s,"a",s),s},o.o=function(a,s){return Object.prototype.hasOwnProperty.call(a,s)},o.p="",o(o.s=2)}([function(r,i){r.exports=n},function(r,i,o){var a={linear:function(s,l,u,d){return(u-l)*s/d+l},easeInQuad:function(s,l,u,d){return(u-l)*(s/=d)*s+l},easeOutQuad:function(s,l,u,d){return-(u-l)*(s/=d)*(s-2)+l},easeInOutQuad:function(s,l,u,d){var p=u-l;return(s/=d/2)<1?p/2*s*s+l:-p/2*(--s*(s-2)-1)+l},easeInCubic:function(s,l,u,d){return(u-l)*(s/=d)*s*s+l},easeOutCubic:function(s,l,u,d){return(u-l)*((s=s/d-1)*s*s+1)+l},easeInOutCubic:function(s,l,u,d){var p=u-l;return(s/=d/2)<1?p/2*s*s*s+l:p/2*((s-=2)*s*s+2)+l},easeInQuart:function(s,l,u,d){return(u-l)*(s/=d)*s*s*s+l},easeOutQuart:function(s,l,u,d){return-(u-l)*((s=s/d-1)*s*s*s-1)+l},easeInOutQuart:function(s,l,u,d){var p=u-l;return(s/=d/2)<1?p/2*s*s*s*s+l:-p/2*((s-=2)*s*s*s-2)+l},easeInQuint:function(s,l,u,d){return(u-l)*(s/=d)*s*s*s*s+l},easeOutQuint:function(s,l,u,d){return(u-l)*((s=s/d-1)*s*s*s*s+1)+l},easeInOutQuint:function(s,l,u,d){var p=u-l;return(s/=d/2)<1?p/2*s*s*s*s*s+l:p/2*((s-=2)*s*s*s*s+2)+l},easeInSine:function(s,l,u,d){var p=u-l;return-p*Math.cos(s/d*(Math.PI/2))+p+l},easeOutSine:function(s,l,u,d){return(u-l)*Math.sin(s/d*(Math.PI/2))+l},easeInOutSine:function(s,l,u,d){return-(u-l)/2*(Math.cos(Math.PI*s/d)-1)+l},easeInExpo:function(s,l,u,d){return s==0?l:(u-l)*Math.pow(2,10*(s/d-1))+l},easeOutExpo:function(s,l,u,d){var p=u-l;return s==d?l+p:p*(1-Math.pow(2,-10*s/d))+l},easeInOutExpo:function(s,l,u,d){var p=u-l;return s===0?l:s===d?l+p:(s/=d/2)<1?p/2*Math.pow(2,10*(s-1))+l:p/2*(2-Math.pow(2,-10*--s))+l},easeInCirc:function(s,l,u,d){return-(u-l)*(Math.sqrt(1-(s/=d)*s)-1)+l},easeOutCirc:function(s,l,u,d){return(u-l)*Math.sqrt(1-(s=s/d-1)*s)+l},easeInOutCirc:function(s,l,u,d){var p=u-l;return(s/=d/2)<1?-p/2*(Math.sqrt(1-s*s)-1)+l:p/2*(Math.sqrt(1-(s-=2)*s)+1)+l},easeInElastic:function(s,l,u,d){var p,f,v,x=u-l;return v=1.70158,s===0?l:(s/=d)==1?l+x:((f=0)||(f=.3*d),(p=x)<Math.abs(x)?(p=x,v=f/4):v=f/(2*Math.PI)*Math.asin(x/p),-p*Math.pow(2,10*(s-=1))*Math.sin((s*d-v)*(2*Math.PI)/f)+l)},easeOutElastic:function(s,l,u,d){var p,f,v,x=u-l;return v=1.70158,s===0?l:(s/=d)==1?l+x:((f=0)||(f=.3*d),(p=x)<Math.abs(x)?(p=x,v=f/4):v=f/(2*Math.PI)*Math.asin(x/p),p*Math.pow(2,-10*s)*Math.sin((s*d-v)*(2*Math.PI)/f)+x+l)},easeInOutElastic:function(s,l,u,d){var p,f,v,x=u-l;return v=1.70158,s===0?l:(s/=d/2)==2?l+x:((f=0)||(f=d*.44999999999999996),(p=x)<Math.abs(x)?(p=x,v=f/4):v=f/(2*Math.PI)*Math.asin(x/p),s<1?p*Math.pow(2,10*(s-=1))*Math.sin((s*d-v)*(2*Math.PI)/f)*-.5+l:p*Math.pow(2,-10*(s-=1))*Math.sin((s*d-v)*(2*Math.PI)/f)*.5+x+l)},easeInBack:function(s,l,u,d,p){return p===void 0&&(p=1.70158),(u-l)*(s/=d)*s*((p+1)*s-p)+l},easeOutBack:function(s,l,u,d,p){return p===void 0&&(p=1.70158),(u-l)*((s=s/d-1)*s*((p+1)*s+p)+1)+l},easeInOutBack:function(s,l,u,d,p){var f=u-l;return p===void 0&&(p=1.70158),(s/=d/2)<1?f/2*(s*s*((1+(p*=1.525))*s-p))+l:f/2*((s-=2)*s*((1+(p*=1.525))*s+p)+2)+l},easeInBounce:function(s,l,u,d){var p=u-l;return p-a.easeOutBounce(d-s,0,p,d)+l},easeOutBounce:function(s,l,u,d){var p=u-l;return(s/=d)<.36363636363636365?p*(7.5625*s*s)+l:s<.7272727272727273?p*(7.5625*(s-=.5454545454545454)*s+.75)+l:s<.9090909090909091?p*(7.5625*(s-=.8181818181818182)*s+.9375)+l:p*(7.5625*(s-=.9545454545454546)*s+.984375)+l},easeInOutBounce:function(s,l,u,d){var p=u-l;return s<d/2?.5*a.easeInBounce(2*s,0,p,d)+l:.5*a.easeOutBounce(2*s-d,0,p,d)+.5*p+l}};r.exports=a},function(r,i,o){r.exports=o(3)},function(r,i,o){o.r(i),o.d(i,"ReactConfetti",function(){return Et});var a,s,l=o(0),u=o.n(l),d=o(1),p=o.n(d);function f(A,_){return A+Math.random()*(_-A)}function v(A,_){for(var V=0;V<_.length;V++){var M=_[V];M.enumerable=M.enumerable||!1,M.configurable=!0,"value"in M&&(M.writable=!0),Object.defineProperty(A,M.key,M)}}function x(A,_,V){return _ in A?Object.defineProperty(A,_,{value:V,enumerable:!0,configurable:!0,writable:!0}):A[_]=V,A}(function(A){A[A.Circle=0]="Circle",A[A.Square=1]="Square",A[A.Strip=2]="Strip"})(a||(a={})),function(A){A[A.Positive=1]="Positive",A[A.Negative=-1]="Negative"}(s||(s={}));var y=function(){function A(M,J,U,ee){(function(Il,Rl){if(!(Il instanceof Rl))throw new TypeError("Cannot call a class as a function")})(this,A),x(this,"context",void 0),x(this,"radius",void 0),x(this,"x",void 0),x(this,"y",void 0),x(this,"w",void 0),x(this,"h",void 0),x(this,"vx",void 0),x(this,"vy",void 0),x(this,"shape",void 0),x(this,"angle",void 0),x(this,"angularSpin",void 0),x(this,"color",void 0),x(this,"rotateY",void 0),x(this,"rotationDirection",void 0),x(this,"getOptions",void 0),this.getOptions=J;var de,Te,pe=this.getOptions(),un=pe.colors,Nt=pe.initialVelocityX,Bt=pe.initialVelocityY;this.context=M,this.x=U,this.y=ee,this.w=f(5,20),this.h=f(5,20),this.radius=f(5,10),this.vx=typeof Nt=="number"?f(-Nt,Nt):f(Nt.min,Nt.max),this.vy=typeof Bt=="number"?f(-Bt,0):f(Bt.min,Bt.max),this.shape=(de=0,Te=2,Math.floor(de+Math.random()*(Te-de+1))),this.angle=f(0,360)*Math.PI/180,this.angularSpin=f(-.2,.2),this.color=un[Math.floor(Math.random()*un.length)],this.rotateY=f(0,1),this.rotationDirection=f(0,1)?s.Positive:s.Negative}var _,V;return _=A,(V=[{key:"update",value:function(){var M=this.getOptions(),J=M.gravity,U=M.wind,ee=M.friction,de=M.opacity,Te=M.drawShape;this.x+=this.vx,this.y+=this.vy,this.vy+=J,this.vx+=U,this.vx*=ee,this.vy*=ee,this.rotateY>=1&&this.rotationDirection===s.Positive?this.rotationDirection=s.Negative:this.rotateY<=-1&&this.rotationDirection===s.Negative&&(this.rotationDirection=s.Positive);var pe=.1*this.rotationDirection;if(this.rotateY+=pe,this.angle+=this.angularSpin,this.context.save(),this.context.translate(this.x,this.y),this.context.rotate(this.angle),this.context.scale(1,this.rotateY),this.context.rotate(this.angle),this.context.beginPath(),this.context.fillStyle=this.color,this.context.strokeStyle=this.color,this.context.globalAlpha=de,this.context.lineCap="round",this.context.lineWidth=2,Te&&typeof Te=="function")Te.call(this,this.context);else switch(this.shape){case a.Circle:this.context.beginPath(),this.context.arc(0,0,this.radius,0,2*Math.PI),this.context.fill();break;case a.Square:this.context.fillRect(-this.w/2,-this.h/2,this.w,this.h);break;case a.Strip:this.context.fillRect(-this.w/6,-this.h/2,this.w/3,this.h)}this.context.closePath(),this.context.restore()}}])&&v(_.prototype,V),A}();function b(A,_,V){return _ in A?Object.defineProperty(A,_,{value:V,enumerable:!0,configurable:!0,writable:!0}):A[_]=V,A}var g=function A(_,V){var M=this;(function(U,ee){if(!(U instanceof ee))throw new TypeError("Cannot call a class as a function")})(this,A),b(this,"canvas",void 0),b(this,"context",void 0),b(this,"getOptions",void 0),b(this,"x",0),b(this,"y",0),b(this,"w",0),b(this,"h",0),b(this,"lastNumberOfPieces",0),b(this,"tweenInitTime",Date.now()),b(this,"particles",[]),b(this,"particlesGenerated",0),b(this,"removeParticleAt",function(U){M.particles.splice(U,1)}),b(this,"getParticle",function(){var U=f(M.x,M.w+M.x),ee=f(M.y,M.h+M.y);return new y(M.context,M.getOptions,U,ee)}),b(this,"animate",function(){var U=M.canvas,ee=M.context,de=M.particlesGenerated,Te=M.lastNumberOfPieces,pe=M.getOptions(),un=pe.run,Nt=pe.recycle,Bt=pe.numberOfPieces,Il=pe.debug,Rl=pe.tweenFunction,Vl=pe.tweenDuration;if(!un)return!1;var Dl=M.particles.length,Hi=Nt?Dl:de,Nl=Date.now();if(Hi<Bt){Te!==Bt&&(M.tweenInitTime=Nl,M.lastNumberOfPieces=Bt);for(var cf=M.tweenInitTime,n2=Rl(Nl-cf>Vl?Vl:Math.max(0,Nl-cf),Hi,Bt,Vl),uf=Math.round(n2-Hi),df=0;df<uf;df++)M.particles.push(M.getParticle());M.particlesGenerated+=uf}return Il&&(ee.font="12px sans-serif",ee.fillStyle="#333",ee.textAlign="right",ee.fillText("Particles: ".concat(Dl),U.width-10,U.height-20)),M.particles.forEach(function(Ui,pf){Ui.update(),(Ui.y>U.height||Ui.y<-100||Ui.x>U.width+100||Ui.x<-100)&&(Nt&&Hi<=Bt?M.particles[pf]=M.getParticle():M.removeParticleAt(pf))}),Dl>0||Hi<Bt}),this.canvas=_;var J=this.canvas.getContext("2d");if(!J)throw new Error("Could not get canvas context");this.context=J,this.getOptions=V};function h(A,_){var V=Object.keys(A);if(Object.getOwnPropertySymbols){var M=Object.getOwnPropertySymbols(A);_&&(M=M.filter(function(J){return Object.getOwnPropertyDescriptor(A,J).enumerable})),V.push.apply(V,M)}return V}function m(A){for(var _=1;_<arguments.length;_++){var V=arguments[_]!=null?arguments[_]:{};_%2?h(Object(V),!0).forEach(function(M){S(A,M,V[M])}):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(V)):h(Object(V)).forEach(function(M){Object.defineProperty(A,M,Object.getOwnPropertyDescriptor(V,M))})}return A}function w(A,_){for(var V=0;V<_.length;V++){var M=_[V];M.enumerable=M.enumerable||!1,M.configurable=!0,"value"in M&&(M.writable=!0),Object.defineProperty(A,M.key,M)}}function S(A,_,V){return _ in A?Object.defineProperty(A,_,{value:V,enumerable:!0,configurable:!0,writable:!0}):A[_]=V,A}var T={width:typeof window<"u"?window.innerWidth:300,height:typeof window<"u"?window.innerHeight:200,numberOfPieces:200,friction:.99,wind:0,gravity:.1,initialVelocityX:4,initialVelocityY:10,colors:["#f44336","#e91e63","#9c27b0","#673ab7","#3f51b5","#2196f3","#03a9f4","#00bcd4","#009688","#4CAF50","#8BC34A","#CDDC39","#FFEB3B","#FFC107","#FF9800","#FF5722","#795548"],opacity:1,debug:!1,tweenFunction:p.a.easeInOutQuad,tweenDuration:5e3,recycle:!0,run:!0},P=function(){function A(M,J){var U=this;(function(de,Te){if(!(de instanceof Te))throw new TypeError("Cannot call a class as a function")})(this,A),S(this,"canvas",void 0),S(this,"context",void 0),S(this,"_options",void 0),S(this,"generator",void 0),S(this,"rafId",void 0),S(this,"setOptionsWithDefaults",function(de){var Te={confettiSource:{x:0,y:0,w:U.canvas.width,h:0}};U._options=m(m(m({},Te),T),de),Object.assign(U,de.confettiSource)}),S(this,"update",function(){var de=U.options,Te=de.run,pe=de.onConfettiComplete,un=U.canvas,Nt=U.context;Te&&(Nt.fillStyle="white",Nt.clearRect(0,0,un.width,un.height)),U.generator.animate()?U.rafId=requestAnimationFrame(U.update):(pe&&typeof pe=="function"&&U.generator.particlesGenerated>0&&pe.call(U,U),U._options.run=!1)}),S(this,"reset",function(){U.generator&&U.generator.particlesGenerated>0&&(U.generator.particlesGenerated=0,U.generator.particles=[],U.generator.lastNumberOfPieces=0)}),S(this,"stop",function(){U.options={run:!1},U.rafId&&(cancelAnimationFrame(U.rafId),U.rafId=void 0)}),this.canvas=M;var ee=this.canvas.getContext("2d");if(!ee)throw new Error("Could not get canvas context");this.context=ee,this.generator=new g(this.canvas,function(){return U.options}),this.options=J,this.update()}var _,V;return _=A,(V=[{key:"options",get:function(){return this._options},set:function(M){var J=this._options&&this._options.run,U=this._options&&this._options.recycle;this.setOptionsWithDefaults(M),this.generator&&(Object.assign(this.generator,this.options.confettiSource),typeof M.recycle=="boolean"&&M.recycle&&U===!1&&(this.generator.lastNumberOfPieces=this.generator.particles.length)),typeof M.run=="boolean"&&M.run&&J===!1&&this.update()}}])&&w(_.prototype,V),A}();function E(A){return function(_){if(Array.isArray(_))return G(_)}(A)||function(_){if(typeof Symbol<"u"&&Symbol.iterator in Object(_))return Array.from(_)}(A)||W(A)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function z(A){return(z=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(_){return typeof _}:function(_){return _&&typeof Symbol=="function"&&_.constructor===Symbol&&_!==Symbol.prototype?"symbol":typeof _})(A)}function k(){return(k=Object.assign||function(A){for(var _=1;_<arguments.length;_++){var V=arguments[_];for(var M in V)Object.prototype.hasOwnProperty.call(V,M)&&(A[M]=V[M])}return A}).apply(this,arguments)}function I(A,_){var V=Object.keys(A);if(Object.getOwnPropertySymbols){var M=Object.getOwnPropertySymbols(A);_&&(M=M.filter(function(J){return Object.getOwnPropertyDescriptor(A,J).enumerable})),V.push.apply(V,M)}return V}function $(A){for(var _=1;_<arguments.length;_++){var V=arguments[_]!=null?arguments[_]:{};_%2?I(Object(V),!0).forEach(function(M){pt(A,M,V[M])}):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(V)):I(Object(V)).forEach(function(M){Object.defineProperty(A,M,Object.getOwnPropertyDescriptor(V,M))})}return A}function D(A,_){return function(V){if(Array.isArray(V))return V}(A)||function(V,M){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(V)))){var J=[],U=!0,ee=!1,de=void 0;try{for(var Te,pe=V[Symbol.iterator]();!(U=(Te=pe.next()).done)&&(J.push(Te.value),!M||J.length!==M);U=!0);}catch(un){ee=!0,de=un}finally{try{U||pe.return==null||pe.return()}finally{if(ee)throw de}}return J}}(A,_)||W(A,_)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function W(A,_){if(A){if(typeof A=="string")return G(A,_);var V=Object.prototype.toString.call(A).slice(8,-1);return V==="Object"&&A.constructor&&(V=A.constructor.name),V==="Map"||V==="Set"?Array.from(A):V==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(V)?G(A,_):void 0}}function G(A,_){(_==null||_>A.length)&&(_=A.length);for(var V=0,M=new Array(_);V<_;V++)M[V]=A[V];return M}function se(A,_){if(!(A instanceof _))throw new TypeError("Cannot call a class as a function")}function ne(A,_){for(var V=0;V<_.length;V++){var M=_[V];M.enumerable=M.enumerable||!1,M.configurable=!0,"value"in M&&(M.writable=!0),Object.defineProperty(A,M.key,M)}}function L(A,_){return(L=Object.setPrototypeOf||function(V,M){return V.__proto__=M,V})(A,_)}function N(A){var _=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}();return function(){var V,M=re(A);if(_){var J=re(this).constructor;V=Reflect.construct(M,arguments,J)}else V=M.apply(this,arguments);return B(this,V)}}function B(A,_){return!_||z(_)!=="object"&&typeof _!="function"?Z(A):_}function Z(A){if(A===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return A}function re(A){return(re=Object.setPrototypeOf?Object.getPrototypeOf:function(_){return _.__proto__||Object.getPrototypeOf(_)})(A)}function pt(A,_,V){return _ in A?Object.defineProperty(A,_,{value:V,enumerable:!0,configurable:!0,writable:!0}):A[_]=V,A}var ft=u.a.createRef(),Pt=function(A){(function(U,ee){if(typeof ee!="function"&&ee!==null)throw new TypeError("Super expression must either be null or a function");U.prototype=Object.create(ee&&ee.prototype,{constructor:{value:U,writable:!0,configurable:!0}}),ee&&L(U,ee)})(J,A);var _,V,M=N(J);function J(U){var ee;se(this,J);for(var de=arguments.length,Te=new Array(de>1?de-1:0),pe=1;pe<de;pe++)Te[pe-1]=arguments[pe];return pt(Z(ee=M.call.apply(M,[this,U].concat(Te))),"canvas",u.a.createRef()),pt(Z(ee),"confetti",void 0),ee.canvas=U.canvasRef||ft,ee}return _=J,(V=[{key:"componentDidMount",value:function(){if(this.canvas.current){var U=He(this.props)[0];this.confetti=new P(this.canvas.current,U)}}},{key:"componentDidUpdate",value:function(){var U=He(this.props)[0];this.confetti&&(this.confetti.options=U)}},{key:"componentWillUnmount",value:function(){this.confetti&&this.confetti.stop(),this.confetti=void 0}},{key:"render",value:function(){var U=D(He(this.props),2),ee=U[0],de=U[1],Te=$({zIndex:2,position:"absolute",pointerEvents:"none",top:0,left:0,bottom:0,right:0},de.style);return u.a.createElement("canvas",k({width:ee.width,height:ee.height,ref:this.canvas},de,{style:Te}))}}])&&ne(_.prototype,V),J}(l.Component);function He(A){var _={},V={},M=[].concat(E(Object.keys(T)),["confettiSource","drawShape","onConfettiComplete"]),J=["canvasRef"];for(var U in A){var ee=A[U];M.includes(U)?_[U]=ee:J.includes(U)?J[U]=ee:V[U]=ee}return[_,V,{}]}pt(Pt,"defaultProps",$({},T)),pt(Pt,"displayName","ReactConfetti");var Et=u.a.forwardRef(function(A,_){return u.a.createElement(Pt,k({canvasRef:_},A))});i.default=Et}]).default})})(Jy);var LE=Jy.exports;const ME=Ri(LE);fr`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;const _E=C.div`
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
`,OE=C.div`
    display: none;

    @media (min-width: 1080px) {
        display: flex;
        background-color: ${({isScrolled:e})=>e?"rgba(251, 251, 251, 0.4)":"#fbfbfb"};
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
        box-shadow: 0 0 5px #4d4d4d80;
        border-radius: 15px;
        z-index: 999;
        transition: background-color 0.3s ease, backdrop-filter 0.3s ease;
    }
`,IE=C.header`
    display: flex;
    gap: 5px;
`,$t=C(({isActive:e,...t})=>c.jsx(mv,{...t}))`
    position: relative;
    color: var(--color--black);
    text-decoration: none;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--font--avenir);
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
        border-radius: var(--border--radius--btn);
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
`,At=C.span`
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
`,RE=C.div`
    opacity: ${({isVisible:e})=>e?1:0};
    transition: opacity 1s ease-out;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
`,$0=C($t)`
    background: ${({isActive:e})=>e?"linear-gradient(45deg, #ff6b6b, #f06595, #eeafaf)":"transparent"};
    color: ${({isActive:e})=>e?"white":"var(--color--black)"};

    &:hover {
        background: linear-gradient(45deg, #f06595, #ff6b6b, #eeafaf);
        color: white;
    }
`,VE=C.div`
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
`,DE=C.div`
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
`,NE=()=>{const e=dr(),[t,n]=j.useState(!1),[r,i]=j.useState(!1),[o,a]=j.useState(!1),[s,l]=j.useState(!1),[u,d]=j.useState(!1),[p,f]=j.useState(!1);let v;const x=()=>{l(g=>!g),d(g=>!g)},y=()=>{l(!1),d(!1)},b=()=>{a(!0),clearTimeout(v),v=setTimeout(()=>{a(!1)},3e3)};return j.useEffect(()=>(window.addEventListener("scroll",b),()=>{window.removeEventListener("scroll",b),clearTimeout(v)}),[]),j.useEffect(()=>{if(e.pathname!=="/"){f(!0);const g=setTimeout(()=>{f(!1)},1e3);return()=>clearTimeout(g)}else f(!1)},[e.pathname]),j.useEffect(()=>{if(e.pathname==="/event"){n(!0),i(!0);const g=setTimeout(()=>{i(!1),setTimeout(()=>n(!1),1e3)},5e3);return()=>clearTimeout(g)}else i(!1),setTimeout(()=>n(!1),1e3)},[e.pathname]),c.jsxs(c.Fragment,{children:[c.jsx(_E,{isLoading:p,children:c.jsx("img",{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1731007469/V1_kdjdkc.gif",alt:"Loading..."})}),c.jsxs(OE,{isScrolled:o,children:[t&&c.jsx(RE,{isVisible:r,children:c.jsx(ME,{})}),c.jsx(mv,{to:"/","aria-label":"Home",children:c.jsxs("picture",{children:[c.jsx("source",{media:"(max-width: 480px)",srcSet:Gr}),c.jsx("source",{media:"(max-width: 768px)",srcSet:Gr}),c.jsx("source",{media:"(min-width: 769px)",srcSet:Gr}),c.jsx("img",{src:Gr,alt:"Logo da Empresa",style:{maxHeight:"40px"}})]})}),c.jsxs(IE,{children:[c.jsxs($t,{to:"/",isActive:e.pathname==="/",children:[c.jsx(At,{isVisible:e.pathname==="/",children:c.jsx(n0,{})}),"Início"]}),c.jsxs($t,{to:"/sobre",isActive:e.pathname==="/sobre",children:[c.jsx(At,{isVisible:e.pathname==="/sobre",children:c.jsx(r0,{})}),"Sobre nós"]}),c.jsxs($t,{to:"/mar",variant:"mar",isActive:e.pathname==="/mar",children:[c.jsx(At,{isVisible:e.pathname==="/mar",children:c.jsx(Jm,{})}),"Le Ange Mar"]}),c.jsxs($t,{to:"/serra",variant:"serra",isActive:e.pathname==="/serra",children:[c.jsx(At,{isVisible:e.pathname==="/serra",children:c.jsx(i0,{})}),"Le Ange Serra"]}),c.jsxs($0,{to:"/event",isActive:e.pathname==="/event",children:[c.jsx(At,{isVisible:e.pathname==="/event",children:c.jsx(e0,{})}),"Eventos"]}),c.jsxs($t,{to:"/acomoda",isActive:e.pathname==="/acomoda",children:[c.jsx(At,{isVisible:e.pathname==="/acomoda",children:c.jsx(ze,{})}),"Acomodações"]})]}),c.jsx(Hn,{onClick:()=>window.open("https://wa.link/dojlwi","_blank"),text:"Fazer minha reserva"})]}),c.jsxs(VE,{isScrolled:o,children:[c.jsx("img",{src:Gr,alt:"logo da le ange"}),c.jsxs("button",{onClick:x,isClicked:u,children:["Menu",c.jsx(AE,{})]})]}),c.jsxs(DE,{isOpen:s,children:[c.jsx("button",{onClick:y,children:"X"}),c.jsx("img",{src:Gr,alt:"logo da le ange"}),c.jsxs("div",{children:[c.jsxs($t,{to:"/",isActive:e.pathname==="/",onClick:y,children:[c.jsx(At,{isVisible:e.pathname==="/",children:c.jsx(n0,{})}),"Início"]}),c.jsxs($t,{to:"/sobre",isActive:e.pathname==="/sobre",onClick:y,children:[c.jsx(At,{isVisible:e.pathname==="/sobre",children:c.jsx(r0,{})}),"Sobre nós"]}),c.jsxs($t,{to:"/mar",variant:"mar",isActive:e.pathname==="/mar",onClick:y,children:[c.jsx(At,{isVisible:e.pathname==="/mar",children:c.jsx(Jm,{})}),"Le Ange Mar"]}),c.jsxs($t,{to:"/serra",variant:"serra",isActive:e.pathname==="/serra",onClick:y,children:[c.jsx(At,{isVisible:e.pathname==="/serra",children:c.jsx(i0,{})}),"Le Ange Serra"]}),c.jsxs($0,{to:"/event",isActive:e.pathname==="/event",onClick:y,children:[c.jsx(At,{isVisible:e.pathname==="/event",children:c.jsx(e0,{})}),"Eventos"]}),c.jsxs($t,{to:"/acomoda",isActive:e.pathname==="/acomoda",onClick:y,children:[c.jsx(At,{isVisible:e.pathname==="/acomoda",children:c.jsx(ze,{})}),"Acomodações"]})]}),c.jsx(Hn,{text:"Fazer minha reserva",onClick:()=>window.open("https://wa.link/dojlwi","_blank")})]})]})};function e2(e){return X({tag:"svg",attr:{viewBox:"0 0 15 15",fill:"none"},child:[{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M0.5 0C0.223858 0 0 0.223858 0 0.5V14.5C0 14.7761 0.223858 15 0.5 15H4.5C4.77614 15 5 14.7761 5 14.5V5H14.5C14.7761 5 15 4.77614 15 4.5V0.5C15 0.223858 14.7761 0 14.5 0H0.5ZM1 4.07505L1 1H4.07502C4.07502 1 4.07502 1 4.07502 1L4.07505 4.07507L1 4.07505ZM0.999997 4.92505L1 14H4V12.925H2.75002C2.5153 12.925 2.32502 12.7348 2.32502 12.5C2.32502 12.2653 2.5153 12.075 2.75002 12.075H4V10.925H2.25002C2.0153 10.925 1.82502 10.7347 1.82502 10.5C1.82502 10.2653 2.0153 10.075 2.25002 10.075H4V8.92504L2.75002 8.92502C2.5153 8.92502 2.32502 8.73474 2.32502 8.50002C2.32503 8.26529 2.51531 8.07502 2.75003 8.07502L4 8.07504V6.92502L2.74999 6.925C2.51527 6.925 2.325 6.73472 2.325 6.5C2.325 6.26528 2.51529 6.075 2.75001 6.075L4 6.07502V4.92507L0.999997 4.92505ZM4.92505 4H6.075V2.75006C6.075 2.51534 6.26528 2.32506 6.5 2.32506C6.73472 2.32506 6.925 2.51534 6.925 2.75006V4H8.07502V2.75005C8.07502 2.51533 8.2653 2.32505 8.50002 2.32505C8.73474 2.32505 8.92502 2.51533 8.92502 2.75005V4H10.0751V2.25005C10.0751 2.01533 10.2653 1.82505 10.5001 1.82505C10.7348 1.82505 10.9251 2.01533 10.9251 2.25005V4H12.0751V2.75005C12.0751 2.51533 12.2654 2.32505 12.5001 2.32505C12.7348 2.32505 12.9251 2.51533 12.9251 2.75005V4H14V1H4.92502L4.92505 4Z",fill:"currentColor"},child:[]}]})(e)}function t2(e){return X({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",strokeWidth:"2",d:"M12,13 C14.209139,13 16,11.209139 16,9 C16,6.790861 14.209139,5 12,5 C9.790861,5 8,6.790861 8,9 C8,11.209139 9.790861,13 12,13 Z M6,22 L6,19 C6,15.6862915 8.6862915,13 12,13 C15.3137085,13 18,15.6862915 18,19 L18,22 M13,5 C13.4037285,3.33566165 15.0151447,2 17,2 C19.172216,2 20.98052,3.790861 21,6 C20.98052,8.209139 19.172216,10 17,10 L16,10 L17,10 C20.287544,10 23,12.6862915 23,16 L23,18 M11,5 C10.5962715,3.33566165 8.98485529,2 7,2 C4.82778404,2 3.01948003,3.790861 3,6 C3.01948003,8.209139 4.82778404,10 7,10 L8,10 L7,10 C3.71245602,10 1,12.6862915 1,16 L1,18"},child:[]}]})(e)}const BE=C.section`
    width: 100%;
    padding: 0 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    
    @media(max-width: 768px){
        height: auto;
        padding: 5% 2.5%;
    }
`,FE=C.section`
    width: 100%;
    height: 80vh;
    margin-top: 10vh;
    display: flex;
    align-items: center;
    gap: 20px;
    justify-content: space-between;

    @media (max-width: 768px){
        height: auto;
        justify-content: center;
        flex-direction: column;
        gap: 10px;
    }
`,$E=C.div`
    width: 55%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 5px;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px){
        width: 100%;
        height: 45vh;
    }
`,HE=C.img`
    width: 100%;
    height: 80%;
    border-radius: 0px 30px 0 20px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    object-fit: cover;

    @media (max-width: 768px){
        height: 70%;        
    }
`,UE=C.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    height: 20%;

    @media (max-width: 768px){
        height: 30%;
    }
`,WE=C.img`
    width: 20%;
    height: 100%;
    object-fit: cover;
    cursor: pointer;
    border: 2px solid transparent;
    border-radius: 10px 0 10px 0;
    transition: border 0.3s;

    &.active {
        border: 3px solid var(--color--black);

        @media (max-width: 768px){
            border: 1.5px solid var(--color--black);
        }
    }

    &:hover {
        border: 2px solid var(--color--green);
    }
`,qE=C.main`
    width: 45%;
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
    padding: 25px;
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 0px 30px 0px 10px;
    
    @media (max-width: 768px){
        width: 100%;
        padding: 30px 20px;
        justify-content: space-around;
        height: 60vh;
    }

    & > section {
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: center;
        justify-content: center;

        @media (max-width: 768px){
            height: 10%;
        }
    }

    & > section > div:nth-child(1){
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        & > p {
            font-family: var(--font--comfortaa);
            font-size: 1.6em;
            color: var(--color--black);

            @media (max-width: 768px){
                font-size: 1.4rem;
                font-weight: 800;
                width: 100%;
                text-align: left;
            }
        }
    }

    & > section > div:nth-child(2){
        width: 100%;
        display: none;

        & > hr {
            width: 100%;
            height: 2px;
            background-color: var(--color--black);
            border-color: var(--color--black);

            @media (max-width: 768px){
                margin-top: 5px;
            }
        }
    }
`,GE=C.h2`
    font-size: 2rem;
    color: var(--color--black);
    font-family: var(--font--comfortaa);
    display: none;

    @media (max-width: 768px){
        display: none;
    }
`,YE=C.p`
    font-size: .9rem;
    line-height: 120%;
    color: var(--color--black); 
    font-family: var(--font--comfortaa)!important;
    
    @media (max-width: 768px){
        font-size: 0.8rem;
    }
`,KE=C.div`
    display: flex;
    align-items: center;
    gap: 15px; 
    width: 50%;
    display: none;

    @media (max-width: 768px){
        display: none;
    }

    & > div:nth-child(1), & > div:nth-child(2) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
        padding: 10px;

        @media (max-width: 768px){
            display: none;
        }
    }
`,XE=C.div`
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
`,QE=C.div`
    position: absolute;
    bottom: 50px; /* Distância do fundo */
    right: 25px; /* Distância da direita */
    display: flex;
    width: 10%;
    gap: 5px; /* Espaçamento entre os botões */

    @media (max-width: 768px){
        right: 15px;
        width: 27%;
        bottom: 40px;
    }
`,H0=C.div`
    background-color: var(--color--black);
    color: white;
    padding: 15px; /* Tamanho do botão */
    border-radius: 50%;
    cursor: pointer;
    transition: background-color 0.3s;
    display: flex; /* Flexbox para centralizar o ícone */
    align-items: center; /* Centraliza verticalmente */
    justify-content: center; /* Centraliza horizontalmente */
    width: 45px; /* Largura do botão */
    height: 45px; /* Altura do botão */

    @media (max-width: 768px){
        width: 35px;
        height: 35px;
        padding: 10px;
    }

    &:after {
        font-size: 0px;
    }

    &:hover {
        background-color: var(--color--white);
        color: var(--color--black);
        border: 1px solid var(--color--black);
    }
`;C.div`
    height: 0vh;

    @media (max-width: 768px){
        height: 0vh;
    }
`;const ZE=K.forwardRef(({suites:e},t)=>c.jsxs(c.Fragment,{children:[c.jsx(An,{children:c.jsx("title",{children:"Acomodações - Pousada Le Ange"})}),c.jsx(BE,{children:c.jsxs(bt,{ref:t,navigation:{nextEl:".swiper-button-next.custom",prevEl:".swiper-button-prev.custom"},pagination:!1,spaceBetween:20,modules:[Mn,_n],onInit:n=>{console.log("Swiper inicializado",n),console.log("Número de slides:",n.slides.length)},children:[e.map((n,r)=>{const[i,o]=j.useState(n.images[0]);return c.jsx(St,{children:c.jsxs(FE,{id:`suíte-${n.NomedaSuite.replace(/\s+/g,"-").toLowerCase()}`,children:[c.jsxs($E,{children:[c.jsx(HE,{src:i,alt:n.NomedaSuite}),c.jsx(UE,{children:n.images.map((a,s)=>c.jsx(WE,{src:a,alt:`Thumbnail ${s+1}`,onClick:()=>o(a),className:i===a?"active":""},s))})]}),c.jsxs(qE,{children:[c.jsxs("section",{children:[c.jsxs("div",{children:[c.jsx(GE,{children:n.NomedaPousada}),c.jsxs("p",{children:["Suíte: ",n.NomedaSuite]})]}),c.jsx("div",{children:c.jsx("hr",{})})]}),c.jsx(XE,{children:n.features.map((a,s)=>c.jsxs("span",{children:[a.icon," ",a.text]},s))}),c.jsxs(KE,{children:[c.jsxs("div",{children:[c.jsx(e2,{size:30})," ",n.medida]}),c.jsxs("div",{children:[c.jsx(t2,{size:30})," ",n.adultos]})]}),c.jsx(YE,{children:n.Description}),c.jsx(af,{text:"Fazer reserva!",text2:"Vamos lá!"})]})]})},r)}),c.jsxs(QE,{children:[c.jsx(H0,{className:"swiper-button-prev custom",children:c.jsx(Wy,{})}),c.jsx(H0,{className:"swiper-button-next custom",children:c.jsx(qy,{})})]})]})})]})),JE=C.section`
    width: 100%;
    padding: 0 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: rgba(0 ,0, 0 ,0.1);

    @media(max-width: 768px){
        height: auto;
        padding: 5% 2.5%;
    }
`,ek=C.section`
    width: 100%;
    height: 80vh;
    margin-top: 10vh;
    display: flex;
    align-items: center;
    gap: 20px;
    justify-content: space-between;

    @media (max-width: 768px){
        height: auto;
        justify-content: center;
        flex-direction: column-reverse;
        margin-top: 0vh;
        gap: 10px;
    }
`,tk=C.div`
    width: 55%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 5px;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px){
        width: 100%;
        height: 45vh;
    }
`,nk=C.img`
    width: 100%;
    height: 80%;
    border-radius: 0px 30px 0 20px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    object-fit: cover;

    @media (max-width: 768px){
        height: 70%;        
    }
`,rk=C.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    height: 20%;

    @media (max-width: 768px){
        height: 30%;
    }
`,ik=C.img`
    width: 20%;
    height: 100%;
    object-fit: cover;
    cursor: pointer;
    border: 2px solid transparent;
    border-radius: 10px 0 10px 0;
    transition: border 0.3s;

    &.active {
        border: 3px solid var(--color--black);

        @media (max-width: 768px){
            border: 1.5px solid var(--color--black);
        }
    }

    &:hover {
        border: 2px solid var(--color--green);
    }
`,ok=C.main`
    width: 45%;
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
    padding: 25px;
    background-color: var(--color--white);
    border-radius: 0px 30px 0px 10px;
    
    @media (max-width: 768px){
        width: 100%;
        justify-content: space-around;
        padding: 30px 20px;
        height: 60vh;
    }

    & > section {
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: center;
        justify-content: center;

        @media (max-width: 768px){
            height: 10%;
        }
    }

    & > section > div:nth-child(1){
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        & > p {
            font-family: var(--font--comfortaa);
            font-size: 1.6em;
            color: var(--color--black);

            @media (max-width: 768px){
                font-size: 1.4rem;
                font-weight: 800;

                width: 100%;
                text-align: left;
            }
        }
    }

    & > section > div:nth-child(2){
        width: 100%;
        display: none;

        & > hr {
            width: 100%;
            height: 2px;
            background-color: var(--color--black);
            border-color: var(--color--black);

            @media (max-width: 768px){
                margin-top: 5px;
            }
        }
    }
`,ak=C.h2`
    font-size: 2rem;
    color: var(--color--black);
    font-family: var(--font--comfortaa);
    display: none;

    @media (max-width: 768px){
        display: none;
    }
`,sk=C.p`
    font-size: .9rem;
    line-height: 120%;
    color: var(--color--black); 
    font-family: var(--font--comfortaa);
    
    @media (max-width: 768px){
        font-size: 0.8rem;
    }
`,lk=C.div`
    display: flex;
    align-items: center;
    gap: 15px; 
    width: 50%;
    display: none;

    @media (max-width: 768px){
        display: none;
    }

    & > div:nth-child(1), & > div:nth-child(2) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
        padding: 10px;

        @media (max-width: 768px){
            display: none;
        }
    }
`,ck=C.div`
    display: flex;
    gap: 8px;
    flex-wrap: wrap;

    span {
        display: flex;
        align-items: center;
        gap: 5px;
        background: rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(10px);
        justify-content: center;
        gap: 10px;
        padding: 5px 10px;
        border-radius: 12px;
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
`,uk=C.div`
    position: absolute;
    bottom: 50px; /* Distância do fundo */
    left: 25px; /* Distância da direita */
    display: flex;
    width: 10%;
    gap: 5px; /* Espaçamento entre os botões */

    @media (max-width: 768px){
        left: 70%;
        border: 1px solid red;
        width: 27%;
        bottom: 40px;
    }
`,U0=C.div`
    background-color: var(--color--black);
    color: white;
    padding: 15px; /* Tamanho do botão */
    border-radius: 50%;
    cursor: pointer;
    transition: background-color 0.3s;
    display: flex; /* Flexbox para centralizar o ícone */
    align-items: center; /* Centraliza verticalmente */
    justify-content: center; /* Centraliza horizontalmente */
    width: 45px; /* Largura do botão */
    height: 45px; /* Altura do botão */

    @media (max-width: 768px){
        width: 35px;
        height: 35px;
        padding: 10px;
    }

    &:after {
        font-size: 0px;
    }

    &:hover {
        background-color: var(--color--white);
        color: var(--color--black);
        border: 1px solid var(--color--black);
    }
`,dk=C.div`
    height: 0vh;

    @media (max-width: 768px){
        height: 0vh;
    }
`,pk=({suites:e})=>c.jsxs(c.Fragment,{children:[c.jsx(An,{children:c.jsx("title",{children:"Acomodações - Pousada Le Ange"})}),c.jsx(dk,{}),c.jsx(JE,{children:c.jsxs(bt,{navigation:{nextEl:".swiper-button-next.custom",prevEl:".swiper-button-prev.custom"},pagination:!1,spaceBetween:20,modules:[Mn,_n],children:[e.map((t,n)=>{const[r,i]=j.useState(t.images[0]);return c.jsx(St,{children:c.jsxs(ek,{children:[c.jsxs(ok,{children:[c.jsxs("section",{children:[c.jsxs("div",{children:[c.jsx(ak,{children:t.NomedaPousada}),c.jsxs("p",{children:["Suíte: ",t.NomedaSuite]})]}),c.jsx("div",{children:c.jsx("hr",{})})]}),c.jsx(ck,{children:t.features.map((o,a)=>c.jsxs("span",{children:[o.icon," ",o.text]},a))}),c.jsxs(lk,{children:[c.jsxs("div",{children:[c.jsx(e2,{size:30})," ",t.medida]}),c.jsxs("div",{children:[c.jsx(t2,{size:30})," ",t.adultos]})]}),c.jsx(sk,{children:t.Description}),c.jsx(af,{text:"Fazer reserva!",text2:"Vamos lá!"})]}),c.jsxs(tk,{children:[c.jsx(nk,{src:r,alt:t.NomedaSuite}),c.jsx(rk,{children:t.images.map((o,a)=>c.jsx(ik,{src:o,alt:`Thumbnail ${a+1}`,onClick:()=>i(o),className:r===o?"active":""},a))})]})]})},n)}),c.jsxs(uk,{children:[c.jsx(U0,{className:"swiper-button-prev custom",children:c.jsx(Wy,{})}),c.jsx(U0,{className:"swiper-button-next custom",children:c.jsx(qy,{})})]})]})})]}),W0=[{id:"suite-1",NomedaSuite:"Suíte Superior 1",NomedaPousada:"Le Ange Serra",medida:"52m²",adultos:"Até 3 adultos",Description:"Desfrute de uma suíte ampla de 52m² com cama King Size, ar-condicionado e lareira para momentos de aconchego. A varanda privativa oferece vista para a natureza, e o banheiro conta com banheira relaxante e aquecedor de toalhas para maior conforto.",features:[{icon:c.jsx(ie,{}),text:"Ar condicionado"},{icon:c.jsx(O,{}),text:"Frigobar"},{icon:c.jsx(xe,{}),text:"Lareira"},{icon:c.jsx(O,{}),text:"Chaleira elétrica"},{icon:c.jsx(ke,{}),text:"Smart TV"},{icon:c.jsx(ze,{}),text:"Cama king size"},{icon:c.jsx(Ce,{}),text:"Banheira relaxante"},{icon:c.jsx(Ve,{}),text:"Chuveiro"},{icon:c.jsx(ie,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(O,{}),text:"Cuba única"},{icon:c.jsx(O,{}),text:"Varanda privativa"}],images:["https://res.cloudinary.com/dupg7clzc/image/upload/v1730133147/suiteSuperior1_gpjls0.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730145067/1_o5yez9.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730145067/3_aiyrqa.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730145067/4_ywuuuc.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730145067/5_onjzk1.jpg"]},{id:"suite-2",NomedaSuite:"Suíte Superior 2",NomedaPousada:"Le Ange Serra",medida:"52m²",adultos:"Até 3 adultos",Description:"Descubra o conforto em 52m² de pura exclusividade: cama King Size, ar-condicionado e lareira para dias de descanso perfeitos. Aproveite a varanda privativa com vista para a mata e o relaxamento de uma banheira especial no banheiro equipado com aquecedor de toalhas. Além disso, a suíte oferece conveniências como frigobar, chaleira elétrica e Smart TV com canais a cabo para uma estadia completa.",features:[{icon:c.jsx(ze,{}),text:"Cama king size"},{icon:c.jsx(ie,{}),text:"Ar condicionado"},{icon:c.jsx(xe,{}),text:"Lareira"},{icon:c.jsx(O,{}),text:"Frigobar"},{icon:c.jsx(O,{}),text:"Chaleira elétrica"},{icon:c.jsx(ke,{}),text:"Smart TV"},{icon:c.jsx(Ce,{}),text:"Banheira relaxante"},{icon:c.jsx(Ve,{}),text:"Chuveiro"},{icon:c.jsx(ie,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(O,{}),text:"Cuba única"},{icon:c.jsx(O,{}),text:"Varanda privativa"}],images:["https://res.cloudinary.com/dupg7clzc/image/upload/v1730145605/1_x3uulk.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730145605/2_o7w1df.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730145605/3_u2ikyj.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730145605/4_wte9h1.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730145605/5_olm5xn.jpg"]},{id:"suite-3",NomedaSuite:"Suíte Superior 3",NomedaPousada:"Le Ange Serra",medida:"52m²",adultos:"Até 3 adultos",Description:"Aproveite 52m² de puro conforto com uma cama King Size e o aconchego de uma lareira. A varanda privativa revela uma vista deslumbrante para a mata, enquanto o banheiro oferece uma banheira relaxante e aquecedor de toalhas. Equipado com frigobar, chaleira elétrica e Smart TV com canais a cabo, este espaço foi projetado para momentos de tranquilidade e comodidade.",features:[{icon:c.jsx(ie,{}),text:"Ar condicionado"},{icon:c.jsx(xe,{}),text:"Lareira"},{icon:c.jsx(O,{}),text:"Frigobar"},{icon:c.jsx(O,{}),text:"Chaleira elétrica"},{icon:c.jsx(ke,{}),text:"Smart TV"},{icon:c.jsx(Ce,{}),text:"Banheira relaxante"},{icon:c.jsx(Ve,{}),text:"Chuveiro"},{icon:c.jsx(ie,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(O,{}),text:"Cuba única"},{icon:c.jsx(O,{}),text:"Varanda privativa"}],images:["https://res.cloudinary.com/dupg7clzc/image/upload/v1730145754/1_ylximp.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730145754/3_drrdp6.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730145754/2_naq3yx.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730145753/4_lpovtm.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730145753/5_tsqexf.jpg"]},{id:"suite-4",NomedaSuite:"Suíte Standard 4",NomedaPousada:"Le Ange Serra",medida:"52m²",adultos:"Até 3 adultos",Description:"Mergulhe no conforto de uma suíte de 52m² com cama King Size, ar-condicionado e lareira para dias de descanso. Relaxe na banheira com vista para a mata e aproveite o banheiro com chuveiro e aquecedor de toalhas. Com frigobar e Smart TV a cabo, além de uma varanda com vista compartilhada, esta acomodação combina praticidade e tranquilidade em cada detalhe.",features:[{icon:c.jsx(ie,{}),text:"Ar condicionado"},{icon:c.jsx(xe,{}),text:"Lareira"},{icon:c.jsx(O,{}),text:"Frigobar"},{icon:c.jsx(O,{}),text:"Chaleira elétrica"},{icon:c.jsx(ke,{}),text:"Smart TV"},{icon:c.jsx(Ce,{}),text:"Banheira relaxante"},{icon:c.jsx(Ve,{}),text:"Chuveiro"},{icon:c.jsx(ie,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(O,{}),text:"Cuba única"},{icon:c.jsx(O,{}),text:"Varanda privativa"}],images:["https://res.cloudinary.com/dupg7clzc/image/upload/v1730145996/1_s9b5nq.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730145996/2_hyhg8t.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730145971/3_s0ig5c.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730145971/4_oppeg3.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730145971/5_kb5ean.jpg"]},{id:"suite-5",NomedaSuite:"Suíte Standard 5",NomedaPousada:"Le Ange Serra",medida:"52m²",adultos:"Até 4 adultos",Description:"Descrição da suíte 2.",features:[{icon:c.jsx(ie,{}),text:"Ar condicionado"},{icon:c.jsx(xe,{}),text:"Lareira"},{icon:c.jsx(O,{}),text:"Frigobar"},{icon:c.jsx(O,{}),text:"Chaleira elétrica"},{icon:c.jsx(ke,{}),text:"Smart TV"},{icon:c.jsx(Ce,{}),text:"Banheira relaxante"},{icon:c.jsx(Ve,{}),text:"Chuveiro"},{icon:c.jsx(ie,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(O,{}),text:"Cuba única"},{icon:c.jsx(O,{}),text:"Varanda privativa"}],images:["https://res.cloudinary.com/dupg7clzc/image/upload/v1730146196/1_rnbhj2.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730146195/2_msj4wh.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730146193/4_rdcxvu.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730146194/3_b8v99f.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730146193/5_cwrlxp.jpg"]},{id:"suite-6",NomedaSuite:"Suíte Master 6",NomedaPousada:"Le Ange Serra",medida:"77m²",adultos:"Até 4 adultos",Description:"Experimente o luxo em uma suíte de 77m² com cama King Size, ar-condicionado e uma lareira acolhedora. Descanse na chaise lounge junto à Bay Window, aproveite o frigobar e a Smart TV com canais a cabo, ou relaxe na banheira com vista para a mata. O banheiro sofisticado conta com chuveiro, aquecedor de toalhas e dupla cuba, enquanto a ampla varanda privativa é perfeita para apreciar a paisagem em total privacidade.",features:[{icon:c.jsx(ie,{}),text:"Ar condicionado"},{icon:c.jsx(xe,{}),text:"Lareira"},{icon:c.jsx(O,{}),text:"Chaise lounge"},{icon:c.jsx(O,{}),text:"Bay window"},{icon:c.jsx(O,{}),text:"Frigobar"},{icon:c.jsx(O,{}),text:"Chaleira elétrica"},{icon:c.jsx(ke,{}),text:"Smart TV"},{icon:c.jsx(Ce,{}),text:"Banheira relaxante"},{icon:c.jsx(Ve,{}),text:"Chuveiro"},{icon:c.jsx(ie,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(O,{}),text:"Cuba única"},{icon:c.jsx(O,{}),text:"Ampla varanda privativa"}],images:["https://res.cloudinary.com/dupg7clzc/image/upload/v1730146446/1_ytelar.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730146445/2_y07hp1.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730146444/3_ennrfl.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730146443/4_nmnmdm.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730146443/5_zjbujo.jpg"]},{id:"suite-7",NomedaSuite:"Suíte Standard 7",NomedaPousada:"Le Ange Serra",medida:"52m²",adultos:"Até 4 adultos",Description:"Relaxe em uma suíte de 52m² projetada para o seu conforto: cama King Size, ar-condicionado e lareira que criam o ambiente perfeito. Desfrute de momentos únicos na banheira com vista para a mata e aproveite o frigobar e a Smart TV com canais a cabo. Com chuveiro e aquecedor de toalhas, além de uma varanda com vista compartilhada, esta acomodação combina charme e comodidade para sua estadia.",features:[{icon:c.jsx(ie,{}),text:"Ar condicionado"},{icon:c.jsx(ze,{}),text:"Cama king size"},{icon:c.jsx(xe,{}),text:"Lareira"},{icon:c.jsx(O,{}),text:"Frigobar"},{icon:c.jsx(ke,{}),text:"Smart TV"},{icon:c.jsx(Ce,{}),text:"Banheira relaxante"},{icon:c.jsx(Ve,{}),text:"Chuveiro"},{icon:c.jsx(ie,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(O,{}),text:"Cuba única"},{icon:c.jsx(O,{}),text:"Varanda NÃO privativa"}],images:["https://res.cloudinary.com/dupg7clzc/image/upload/v1730146635/1_r9brij.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730146632/2_lp3nwj.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730146632/3_hahgqj.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730146193/4_rdcxvu.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730146631/4_hstjdq.jpg"]},{id:"suite-8",NomedaSuite:"Suíte Standard 8",NomedaPousada:"Le Ange Serra",medida:"52m²",adultos:"Até 4 adultos",Description:"Relaxe em uma suíte de 52m² projetada para o seu conforto: cama King Size, ar-condicionado e lareira que criam o ambiente perfeito. Desfrute de momentos únicos na banheira com vista para a mata e aproveite o frigobar e a Smart TV com canais a cabo. Com chuveiro e aquecedor de toalhas, além de uma varanda com vista compartilhada, esta acomodação combina charme e comodidade para sua estadia.",features:[{icon:c.jsx(ie,{}),text:"Ar condicionado"},{icon:c.jsx(ze,{}),text:"Cama king size"},{icon:c.jsx(xe,{}),text:"Lareira"},{icon:c.jsx(O,{}),text:"Frigobar"},{icon:c.jsx(ke,{}),text:"Smart TV"},{icon:c.jsx(Ce,{}),text:"Banheira relaxante"},{icon:c.jsx(Ve,{}),text:"Chuveiro"},{icon:c.jsx(ie,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(O,{}),text:"Cuba única"},{icon:c.jsx(O,{}),text:"Varanda NÃO privativa"}],images:["https://res.cloudinary.com/dupg7clzc/image/upload/v1730146991/1_deflqw.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730146989/3_apyt83.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730146989/2_vtsru4.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730146988/4_a4uhie.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730146988/5_s3imtf.jpg"]},{id:"suite-9",NomedaSuite:"Suíte Superior 9",NomedaPousada:"Le Ange Serra",medida:"52m²",adultos:"Até 4 adultos",Description:"Relaxe em uma suíte de 52m² projetada para o seu conforto: cama King Size, ar-condicionado e lareira que criam o ambiente perfeito. Desfrute de momentos únicos na banheira com vista para a mata e aproveite o frigobar e a Smart TV com canais a cabo. Com chuveiro e aquecedor de toalhas, além de uma varanda com vista compartilhada, esta acomodação combina charme e comodidade para sua estadia.",features:[{icon:c.jsx(ie,{}),text:"Ar condicionado"},{icon:c.jsx(ze,{}),text:"Cama king size"},{icon:c.jsx(xe,{}),text:"Lareira"},{icon:c.jsx(O,{}),text:"Frigobar"},{icon:c.jsx(ke,{}),text:"Smart TV"},{icon:c.jsx(O,{}),text:"Chaleira elétrica"},{icon:c.jsx(Ce,{}),text:"Banheira relaxante"},{icon:c.jsx(Ve,{}),text:"Chuveiro"},{icon:c.jsx(ie,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(O,{}),text:"Cuba única"},{icon:c.jsx(O,{}),text:"Varanda privativa"}],images:["https://res.cloudinary.com/dupg7clzc/image/upload/v1730147149/1_ougeas.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730147149/2_qiphp1.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730147149/3_x7jhml.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730147146/4_ams1oh.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730147147/5_texuuu.jpg"]},{id:"suite-10",NomedaSuite:"Suíte Master 10",NomedaPousada:"Le Ange Serra",medida:"77m²",adultos:"Até 4 adultos",Description:"Viva o conforto em uma suíte de 77m² equipada com cama King Size, ar-condicionado e lareira para momentos de puro relaxamento. Desfrute de um recamier, poltrona de leitura e um confortável couch lounge, ideais para descanso e lazer. A banheira relaxante oferece uma vista única para a mata, enquanto o banheiro conta com chuveiro, aquecedor de toalhas e dupla cuba. Para completar, uma ampla varanda privativa permite que você aprecie a paisagem com total exclusividade.",features:[{icon:c.jsx(ie,{}),text:"Ar condicionado"},{icon:c.jsx(ze,{}),text:"Cama king size"},{icon:c.jsx(xe,{}),text:"Recamier e poltrona de leitura"},{icon:c.jsx(xe,{}),text:"Lareira"},{icon:c.jsx(O,{}),text:"Couch lounge"},{icon:c.jsx(O,{}),text:"Frigobar"},{icon:c.jsx(ke,{}),text:"Smart TV"},{icon:c.jsx(O,{}),text:"Chaleira elétrica"},{icon:c.jsx(Ce,{}),text:"Banheira relaxante"},{icon:c.jsx(Ve,{}),text:"Chuveiro"},{icon:c.jsx(ie,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(O,{}),text:"Cuba para casal (dupla)"},{icon:c.jsx(O,{}),text:"Ampla varanda privativa"}],images:["https://res.cloudinary.com/dupg7clzc/image/upload/v1730147346/1_lj4tav.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730147345/2_rwd1oh.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730147344/3_hybfzc.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730147342/4_p052an.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730147342/5_aqbze0.jpg"]}],fk=[{id:"suite2-1",NomedaSuite:"Suíte Superior 1",NomedaPousada:"Le Ange Mar",medida:"28m²",adultos:"Até 3 adultos",Description:"Descrição da suíte 1.",features:[{icon:c.jsx(ie,{}),text:"Ar condicionado"},{icon:c.jsx(O,{}),text:"Frigobar"},{icon:c.jsx(xe,{}),text:"Lareira"},{icon:c.jsx(O,{}),text:"Chaleira elétrica"},{icon:c.jsx(ke,{}),text:"Smart TV"},{icon:c.jsx(ze,{}),text:"Cama king size"},{icon:c.jsx(Ce,{}),text:"Banheira relaxante"},{icon:c.jsx(Ve,{}),text:"Chuveiro"},{icon:c.jsx(ie,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(O,{}),text:"Cuba única"},{icon:c.jsx(O,{}),text:"Varanda privativa"}],images:["https://res.cloudinary.com/dupg7clzc/image/upload/v1730149632/1_jbfcfw.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730149631/2_avh1mm.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730149632/4_j3c1yo.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730149634/3_kplwmw.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730149633/5_bw0qou.jpg"]},{id:"suite2-2",NomedaSuite:"Suíte Standard 2",NomedaPousada:"Le Ange Mar",medida:"30m²",adultos:"Até 4 adultos",Description:"Descrição da suíte 2.",features:[{icon:c.jsx(ie,{}),text:"Ar condicionado"},{icon:c.jsx(O,{}),text:"Frigobar"},{icon:c.jsx(xe,{}),text:"Lareira"},{icon:c.jsx(O,{}),text:"Chaleira elétrica"},{icon:c.jsx(ke,{}),text:"Smart TV"},{icon:c.jsx(ze,{}),text:"Cama king size"},{icon:c.jsx(Ce,{}),text:"Banheira relaxante"},{icon:c.jsx(Ve,{}),text:"Chuveiro"},{icon:c.jsx(ie,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(O,{}),text:"Cuba única"},{icon:c.jsx(O,{}),text:"Varanda privativa"}],images:["https://res.cloudinary.com/dupg7clzc/image/upload/v1730149728/2_uonrhf.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730149729/3_ysfzuk.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730149732/5_dub0pj.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730149708/1_ofu5mj.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730149729/4_ulr721.jpg"]},{id:"suite2-3",NomedaSuite:"Suíte Superior 3",NomedaPousada:"Le Ange Mar",medida:"32m²",adultos:"Até 2 adultos",Description:"Descrição da suíte 3.",features:[{icon:c.jsx(ie,{}),text:"Ar condicionado"},{icon:c.jsx(O,{}),text:"Frigobar"},{icon:c.jsx(xe,{}),text:"Lareira"},{icon:c.jsx(O,{}),text:"Chaleira elétrica"},{icon:c.jsx(ke,{}),text:"Smart TV"},{icon:c.jsx(ze,{}),text:"Cama king size"},{icon:c.jsx(Ce,{}),text:"Banheira relaxante"},{icon:c.jsx(Ve,{}),text:"Chuveiro"},{icon:c.jsx(ie,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(O,{}),text:"Cuba única"},{icon:c.jsx(O,{}),text:"Varanda privativa"}],images:["https://res.cloudinary.com/dupg7clzc/image/upload/v1730149783/1_mkvfcp.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730149785/2_ciuk0m.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730149786/3_njizit.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730149785/5_mjfm3k.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730149786/4_d5kp62.jpg"]},{id:"suite2-4",NomedaSuite:"Suíte Superior 4",NomedaPousada:"Le Ange Mar",medida:"32m²",adultos:"Até 2 adultos",Description:"Descrição da suíte 3.",features:[{icon:c.jsx(ie,{}),text:"Ar condicionado"},{icon:c.jsx(O,{}),text:"Frigobar"},{icon:c.jsx(xe,{}),text:"Lareira"},{icon:c.jsx(O,{}),text:"Chaleira elétrica"},{icon:c.jsx(ke,{}),text:"Smart TV"},{icon:c.jsx(ze,{}),text:"Cama king size"},{icon:c.jsx(Ce,{}),text:"Banheira relaxante"},{icon:c.jsx(Ve,{}),text:"Chuveiro"},{icon:c.jsx(ie,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(O,{}),text:"Cuba única"},{icon:c.jsx(O,{}),text:"Varanda privativa"}],images:["https://res.cloudinary.com/dupg7clzc/image/upload/v1730149834/1_znboil.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730149834/2_edqaq4.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730149836/3_srrc1g.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730149837/4_k1afap.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730149838/5_lxdgp4.jpg"]},{id:"suite2-5",NomedaSuite:"Suíte Superior 5",NomedaPousada:"Le Ange Mar",medida:"32m²",adultos:"Até 2 adultos",Description:"Descrição da suíte 3.",features:[{icon:c.jsx(ie,{}),text:"Ar condicionado"},{icon:c.jsx(O,{}),text:"Frigobar"},{icon:c.jsx(xe,{}),text:"Lareira"},{icon:c.jsx(O,{}),text:"Chaleira elétrica"},{icon:c.jsx(ke,{}),text:"Smart TV"},{icon:c.jsx(ze,{}),text:"Cama king size"},{icon:c.jsx(Ce,{}),text:"Banheira relaxante"},{icon:c.jsx(Ve,{}),text:"Chuveiro"},{icon:c.jsx(ie,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(O,{}),text:"Cuba única"},{icon:c.jsx(O,{}),text:"Varanda privativa"}],images:["https://res.cloudinary.com/dupg7clzc/image/upload/v1730149916/1_ztjmyc.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730149922/5_dkyssi.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730149916/2_djdgbx.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730149921/4_rg0jvi.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730149917/3_hkxuyr.jpg"]},{id:"suite2-6",NomedaSuite:"Suíte Superior 6",NomedaPousada:"Le Ange Mar",medida:"32m²",adultos:"Até 2 adultos",Description:"Descrição da suíte 3.",features:[{icon:c.jsx(ie,{}),text:"Ar condicionado"},{icon:c.jsx(O,{}),text:"Frigobar"},{icon:c.jsx(xe,{}),text:"Lareira"},{icon:c.jsx(O,{}),text:"Chaleira elétrica"},{icon:c.jsx(ke,{}),text:"Smart TV"},{icon:c.jsx(ze,{}),text:"Cama king size"},{icon:c.jsx(Ce,{}),text:"Banheira relaxante"},{icon:c.jsx(Ve,{}),text:"Chuveiro"},{icon:c.jsx(ie,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(O,{}),text:"Cuba única"},{icon:c.jsx(O,{}),text:"Varanda privativa"}],images:["https://res.cloudinary.com/dupg7clzc/image/upload/v1730150026/1_usupcb.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730150032/5_v3dnrs.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730150032/4_n9wkv0.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730150029/3_pjp0sr.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730150027/2_egxqmp.jpg"]},{id:"suite2-7",NomedaSuite:"Suíte Master 7",NomedaPousada:"Le Ange Mar",medida:"32m²",adultos:"Até 2 adultos",Description:"Descrição da suíte 3.",features:[{icon:c.jsx(ie,{}),text:"Ar condicionado"},{icon:c.jsx(O,{}),text:"Frigobar"},{icon:c.jsx(xe,{}),text:"Lareira"},{icon:c.jsx(O,{}),text:"Chaleira elétrica"},{icon:c.jsx(ke,{}),text:"Smart TV"},{icon:c.jsx(ze,{}),text:"Cama king size"},{icon:c.jsx(Ce,{}),text:"Banheira relaxante"},{icon:c.jsx(Ve,{}),text:"Chuveiro"},{icon:c.jsx(ie,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(O,{}),text:"Cuba única"},{icon:c.jsx(O,{}),text:"Varanda privativa"}],images:["https://res.cloudinary.com/dupg7clzc/image/upload/v1730150026/1_usupcb.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730150032/5_v3dnrs.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730150032/4_n9wkv0.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730150029/3_pjp0sr.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730150027/2_egxqmp.jpg"]},{id:"suite2-8",NomedaSuite:"Suíte Master 8",NomedaPousada:"Le Ange Mar",medida:"32m²",adultos:"Até 2 adultos",Description:"Descrição da suíte 3.",features:[{icon:c.jsx(ie,{}),text:"Ar condicionado"},{icon:c.jsx(O,{}),text:"Frigobar"},{icon:c.jsx(xe,{}),text:"Lareira"},{icon:c.jsx(O,{}),text:"Chaleira elétrica"},{icon:c.jsx(ke,{}),text:"Smart TV"},{icon:c.jsx(ze,{}),text:"Cama king size"},{icon:c.jsx(Ce,{}),text:"Banheira relaxante"},{icon:c.jsx(Ve,{}),text:"Chuveiro"},{icon:c.jsx(ie,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(O,{}),text:"Cuba única"},{icon:c.jsx(O,{}),text:"Varanda privativa"}],images:["https://res.cloudinary.com/dupg7clzc/image/upload/v1730150383/1_pcudqj.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730150385/2_itizcf.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730150388/4_netqeh.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730150389/5_ntad9j.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730150385/3_bzklvq.jpg"]}],hk=()=>{const e=dr(),t=j.useRef(null);return j.useEffect(()=>{const n=e.hash;if(console.log("Hash da URL:",n),n){const r=n.replace("#",""),i=W0.findIndex(o=>o.id===r);console.log("Índice da suíte:",i),i!==-1&&t.current?(console.log("swiperRef:",t.current),setTimeout(()=>{if(console.log("Swiper HTML:",t.current.outerHTML),console.log("Número de slides:",t.current.swiper.slides.length),t.current){console.log("Swiper está inicializado."),console.log("Métodos disponíveis no Swiper:",Object.keys(t.current.swiper));try{t.current.swiper.update(),t.current.swiper.slideTo(i),console.log("Deslocando para o slide:",i)}catch(o){console.error("Erro ao tentar deslizar:",o)}}else console.warn("Swiper não encontrado.")},500)):console.warn("Índice da suíte inválido ou Swiper não inicializado.")}},[e]),c.jsxs(c.Fragment,{children:[c.jsxs(bt,{ref:t,children:[c.jsx(ZE,{suites:W0}),c.jsx(pk,{suites:fk})]}),c.jsx(da,{})]})};function mk(){const{pathname:e}=dr();return j.useEffect(()=>{window.scrollTo(0,0)},[e]),null}function gk(){const e=dr();return c.jsxs(c.Fragment,{children:[c.jsx(mk,{}),c.jsx(J6,{children:c.jsxs(y3,{location:e,children:[c.jsx(xr,{path:"/",element:c.jsx(F.div,{initial:{opacity:0,scale:.8,rotateY:90},animate:{opacity:1,scale:1,rotateY:0},exit:{opacity:0,scale:.8,rotateY:-90},transition:{duration:.2,ease:"easeInOut"},children:c.jsx(eP,{})})}),c.jsx(xr,{path:"/sobre",element:c.jsx(F.div,{initial:{opacity:0,scale:.8,rotateY:90},animate:{opacity:1,scale:1,rotateY:0},exit:{opacity:0,scale:.8,rotateY:-90},transition:{duration:.2,ease:"easeInOut"},children:c.jsx(kP,{})})}),c.jsx(xr,{path:"/mar",element:c.jsx(F.div,{initial:{opacity:0,scale:.8,rotateY:90},animate:{opacity:1,scale:1,rotateY:0},exit:{opacity:0,scale:.8,rotateY:-90},transition:{duration:.2,ease:"easeInOut"},children:c.jsx(zE,{})})}),c.jsx(xr,{path:"/serra",element:c.jsx(F.div,{initial:{opacity:0,scale:.8,rotateY:90},animate:{opacity:1,scale:1,rotateY:0},exit:{opacity:0,scale:.8,rotateY:-90},transition:{duration:.2,ease:"easeInOut"},children:c.jsx(pE,{})})}),c.jsx(xr,{path:"/event",element:c.jsx(F.div,{initial:{opacity:0,scale:.8,rotateY:90},animate:{opacity:1,scale:1,rotateY:0},exit:{opacity:0,scale:.8,rotateY:-90},transition:{duration:.2,ease:"easeInOut"},children:c.jsx(xP,{})})}),c.jsx(xr,{path:"/acomoda",element:c.jsx(F.div,{initial:{opacity:0,scale:.8,rotateY:90},animate:{opacity:1,scale:1,rotateY:0},exit:{opacity:0,scale:.8,rotateY:-90},transition:{duration:.2,ease:"easeInOut"},children:c.jsx(hk,{})})})]},e.pathname)})]})}function vk(){return c.jsxs(P3,{children:[c.jsx(NE,{}),c.jsx(gk,{})]})}iv(document.getElementById("root")).render(c.jsx(j.StrictMode,{children:c.jsx(vk,{})}));
