function Ky(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var Xy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Mi(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Og={exports:{}},Qs={},Ig={exports:{}},te={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qo=Symbol.for("react.element"),Qy=Symbol.for("react.portal"),Zy=Symbol.for("react.fragment"),Jy=Symbol.for("react.strict_mode"),ew=Symbol.for("react.profiler"),tw=Symbol.for("react.provider"),nw=Symbol.for("react.context"),rw=Symbol.for("react.forward_ref"),iw=Symbol.for("react.suspense"),ow=Symbol.for("react.memo"),aw=Symbol.for("react.lazy"),of=Symbol.iterator;function sw(e){return e===null||typeof e!="object"?null:(e=of&&e[of]||e["@@iterator"],typeof e=="function"?e:null)}var Rg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Vg=Object.assign,Dg={};function Li(e,t,n){this.props=e,this.context=t,this.refs=Dg,this.updater=n||Rg}Li.prototype.isReactComponent={};Li.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Li.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ng(){}Ng.prototype=Li.prototype;function ud(e,t,n){this.props=e,this.context=t,this.refs=Dg,this.updater=n||Rg}var dd=ud.prototype=new Ng;dd.constructor=ud;Vg(dd,Li.prototype);dd.isPureReactComponent=!0;var af=Array.isArray,Bg=Object.prototype.hasOwnProperty,pd={current:null},Fg={key:!0,ref:!0,__self:!0,__source:!0};function $g(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)Bg.call(t,r)&&!Fg.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:Qo,type:e,key:o,ref:a,props:i,_owner:pd.current}}function lw(e,t){return{$$typeof:Qo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function fd(e){return typeof e=="object"&&e!==null&&e.$$typeof===Qo}function cw(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var sf=/\/+/g;function Il(e,t){return typeof e=="object"&&e!==null&&e.key!=null?cw(""+e.key):t.toString(36)}function Ia(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Qo:case Qy:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+Il(a,0):r,af(i)?(n="",e!=null&&(n=e.replace(sf,"$&/")+"/"),Ia(i,t,n,"",function(u){return u})):i!=null&&(fd(i)&&(i=lw(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(sf,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",af(e))for(var s=0;s<e.length;s++){o=e[s];var l=r+Il(o,s);a+=Ia(o,t,n,l,i)}else if(l=sw(e),typeof l=="function")for(e=l.call(e),s=0;!(o=e.next()).done;)o=o.value,l=r+Il(o,s++),a+=Ia(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function la(e,t,n){if(e==null)return e;var r=[],i=0;return Ia(e,r,"","",function(o){return t.call(n,o,i++)}),r}function uw(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ze={current:null},Ra={transition:null},dw={ReactCurrentDispatcher:Ze,ReactCurrentBatchConfig:Ra,ReactCurrentOwner:pd};function Hg(){throw Error("act(...) is not supported in production builds of React.")}te.Children={map:la,forEach:function(e,t,n){la(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return la(e,function(){t++}),t},toArray:function(e){return la(e,function(t){return t})||[]},only:function(e){if(!fd(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};te.Component=Li;te.Fragment=Zy;te.Profiler=ew;te.PureComponent=ud;te.StrictMode=Jy;te.Suspense=iw;te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=dw;te.act=Hg;te.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Vg({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=pd.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)Bg.call(t,l)&&!Fg.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){s=Array(l);for(var u=0;u<l;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:Qo,type:e.type,key:i,ref:o,props:r,_owner:a}};te.createContext=function(e){return e={$$typeof:nw,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:tw,_context:e},e.Consumer=e};te.createElement=$g;te.createFactory=function(e){var t=$g.bind(null,e);return t.type=e,t};te.createRef=function(){return{current:null}};te.forwardRef=function(e){return{$$typeof:rw,render:e}};te.isValidElement=fd;te.lazy=function(e){return{$$typeof:aw,_payload:{_status:-1,_result:e},_init:uw}};te.memo=function(e,t){return{$$typeof:ow,type:e,compare:t===void 0?null:t}};te.startTransition=function(e){var t=Ra.transition;Ra.transition={};try{e()}finally{Ra.transition=t}};te.unstable_act=Hg;te.useCallback=function(e,t){return Ze.current.useCallback(e,t)};te.useContext=function(e){return Ze.current.useContext(e)};te.useDebugValue=function(){};te.useDeferredValue=function(e){return Ze.current.useDeferredValue(e)};te.useEffect=function(e,t){return Ze.current.useEffect(e,t)};te.useId=function(){return Ze.current.useId()};te.useImperativeHandle=function(e,t,n){return Ze.current.useImperativeHandle(e,t,n)};te.useInsertionEffect=function(e,t){return Ze.current.useInsertionEffect(e,t)};te.useLayoutEffect=function(e,t){return Ze.current.useLayoutEffect(e,t)};te.useMemo=function(e,t){return Ze.current.useMemo(e,t)};te.useReducer=function(e,t,n){return Ze.current.useReducer(e,t,n)};te.useRef=function(e){return Ze.current.useRef(e)};te.useState=function(e){return Ze.current.useState(e)};te.useSyncExternalStore=function(e,t,n){return Ze.current.useSyncExternalStore(e,t,n)};te.useTransition=function(){return Ze.current.useTransition()};te.version="18.3.1";Ig.exports=te;var T=Ig.exports;const K=Mi(T),pw=Ky({__proto__:null,default:K},[T]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fw=T,hw=Symbol.for("react.element"),mw=Symbol.for("react.fragment"),gw=Object.prototype.hasOwnProperty,vw=fw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,xw={key:!0,ref:!0,__self:!0,__source:!0};function Ug(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)gw.call(t,r)&&!xw.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:hw,type:e,key:o,ref:a,props:i,_owner:vw.current}}Qs.Fragment=mw;Qs.jsx=Ug;Qs.jsxs=Ug;Og.exports=Qs;var c=Og.exports,Wg={exports:{}},yt={},Gg={exports:{}},qg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(L,N){var B=L.length;L.push(N);e:for(;0<B;){var Z=B-1>>>1,re=L[Z];if(0<i(re,N))L[Z]=N,L[B]=re,B=Z;else break e}}function n(L){return L.length===0?null:L[0]}function r(L){if(L.length===0)return null;var N=L[0],B=L.pop();if(B!==N){L[0]=B;e:for(var Z=0,re=L.length,st=re>>>1;Z<st;){var lt=2*(Z+1)-1,St=L[lt],De=lt+1,jt=L[De];if(0>i(St,B))De<re&&0>i(jt,St)?(L[Z]=jt,L[De]=B,Z=De):(L[Z]=St,L[lt]=B,Z=lt);else if(De<re&&0>i(jt,B))L[Z]=jt,L[De]=B,Z=De;else break e}}return N}function i(L,N){var B=L.sortIndex-N.sortIndex;return B!==0?B:L.id-N.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var l=[],u=[],d=1,p=null,f=3,v=!1,x=!1,y=!1,b=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(L){for(var N=n(u);N!==null;){if(N.callback===null)r(u);else if(N.startTime<=L)r(u),N.sortIndex=N.expirationTime,t(l,N);else break;N=n(u)}}function w(L){if(y=!1,m(L),!x)if(n(l)!==null)x=!0,ae(S);else{var N=n(u);N!==null&&ne(w,N.startTime-L)}}function S(L,N){x=!1,y&&(y=!1,g(k),k=-1),v=!0;var B=f;try{for(m(N),p=n(l);p!==null&&(!(p.expirationTime>N)||L&&!I());){var Z=p.callback;if(typeof Z=="function"){p.callback=null,f=p.priorityLevel;var re=Z(p.expirationTime<=N);N=e.unstable_now(),typeof re=="function"?p.callback=re:p===n(l)&&r(l),m(N)}else r(l);p=n(l)}if(p!==null)var st=!0;else{var lt=n(u);lt!==null&&ne(w,lt.startTime-N),st=!1}return st}finally{p=null,f=B,v=!1}}var C=!1,E=null,k=-1,A=5,z=-1;function I(){return!(e.unstable_now()-z<A)}function F(){if(E!==null){var L=e.unstable_now();z=L;var N=!0;try{N=E(!0,L)}finally{N?D():(C=!1,E=null)}}else C=!1}var D;if(typeof h=="function")D=function(){h(F)};else if(typeof MessageChannel<"u"){var W=new MessageChannel,q=W.port2;W.port1.onmessage=F,D=function(){q.postMessage(null)}}else D=function(){b(F,0)};function ae(L){E=L,C||(C=!0,D())}function ne(L,N){k=b(function(){L(e.unstable_now())},N)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(L){L.callback=null},e.unstable_continueExecution=function(){x||v||(x=!0,ae(S))},e.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<L?Math.floor(1e3/L):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(L){switch(f){case 1:case 2:case 3:var N=3;break;default:N=f}var B=f;f=N;try{return L()}finally{f=B}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(L,N){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var B=f;f=L;try{return N()}finally{f=B}},e.unstable_scheduleCallback=function(L,N,B){var Z=e.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?Z+B:Z):B=Z,L){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=B+re,L={id:d++,callback:N,priorityLevel:L,startTime:B,expirationTime:re,sortIndex:-1},B>Z?(L.sortIndex=B,t(u,L),n(l)===null&&L===n(u)&&(y?(g(k),k=-1):y=!0,ne(w,B-Z))):(L.sortIndex=re,t(l,L),x||v||(x=!0,ae(S))),L},e.unstable_shouldYield=I,e.unstable_wrapCallback=function(L){var N=f;return function(){var B=f;f=N;try{return L.apply(this,arguments)}finally{f=B}}}})(qg);Gg.exports=qg;var yw=Gg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ww=T,mt=yw;function R(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Yg=new Set,To={};function Mr(e,t){gi(e,t),gi(e+"Capture",t)}function gi(e,t){for(To[e]=t,e=0;e<t.length;e++)Yg.add(t[e])}var wn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Vc=Object.prototype.hasOwnProperty,bw=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,lf={},cf={};function Sw(e){return Vc.call(cf,e)?!0:Vc.call(lf,e)?!1:bw.test(e)?cf[e]=!0:(lf[e]=!0,!1)}function jw(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Cw(e,t,n,r){if(t===null||typeof t>"u"||jw(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Je(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var $e={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){$e[e]=new Je(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];$e[t]=new Je(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){$e[e]=new Je(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){$e[e]=new Je(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){$e[e]=new Je(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){$e[e]=new Je(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){$e[e]=new Je(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){$e[e]=new Je(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){$e[e]=new Je(e,5,!1,e.toLowerCase(),null,!1,!1)});var hd=/[\-:]([a-z])/g;function md(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(hd,md);$e[t]=new Je(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(hd,md);$e[t]=new Je(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(hd,md);$e[t]=new Je(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){$e[e]=new Je(e,1,!1,e.toLowerCase(),null,!1,!1)});$e.xlinkHref=new Je("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){$e[e]=new Je(e,1,!1,e.toLowerCase(),null,!0,!0)});function gd(e,t,n,r){var i=$e.hasOwnProperty(t)?$e[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Cw(t,n,i,r)&&(n=null),r||i===null?Sw(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Tn=ww.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ca=Symbol.for("react.element"),Hr=Symbol.for("react.portal"),Ur=Symbol.for("react.fragment"),vd=Symbol.for("react.strict_mode"),Dc=Symbol.for("react.profiler"),Kg=Symbol.for("react.provider"),Xg=Symbol.for("react.context"),xd=Symbol.for("react.forward_ref"),Nc=Symbol.for("react.suspense"),Bc=Symbol.for("react.suspense_list"),yd=Symbol.for("react.memo"),_n=Symbol.for("react.lazy"),Qg=Symbol.for("react.offscreen"),uf=Symbol.iterator;function Fi(e){return e===null||typeof e!="object"?null:(e=uf&&e[uf]||e["@@iterator"],typeof e=="function"?e:null)}var Se=Object.assign,Rl;function to(e){if(Rl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Rl=t&&t[1]||""}return`
`+Rl+e}var Vl=!1;function Dl(e,t){if(!e||Vl)return"";Vl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,s=o.length-1;1<=a&&0<=s&&i[a]!==o[s];)s--;for(;1<=a&&0<=s;a--,s--)if(i[a]!==o[s]){if(a!==1||s!==1)do if(a--,s--,0>s||i[a]!==o[s]){var l=`
`+i[a].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=a&&0<=s);break}}}finally{Vl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?to(e):""}function Tw(e){switch(e.tag){case 5:return to(e.type);case 16:return to("Lazy");case 13:return to("Suspense");case 19:return to("SuspenseList");case 0:case 2:case 15:return e=Dl(e.type,!1),e;case 11:return e=Dl(e.type.render,!1),e;case 1:return e=Dl(e.type,!0),e;default:return""}}function Fc(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ur:return"Fragment";case Hr:return"Portal";case Dc:return"Profiler";case vd:return"StrictMode";case Nc:return"Suspense";case Bc:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Xg:return(e.displayName||"Context")+".Consumer";case Kg:return(e._context.displayName||"Context")+".Provider";case xd:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case yd:return t=e.displayName||null,t!==null?t:Fc(e.type)||"Memo";case _n:t=e._payload,e=e._init;try{return Fc(e(t))}catch{}}return null}function Pw(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Fc(t);case 8:return t===vd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Zn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Zg(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ew(e){var t=Zg(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ua(e){e._valueTracker||(e._valueTracker=Ew(e))}function Jg(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Zg(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function os(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function $c(e,t){var n=t.checked;return Se({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function df(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Zn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function e0(e,t){t=t.checked,t!=null&&gd(e,"checked",t,!1)}function Hc(e,t){e0(e,t);var n=Zn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Uc(e,t.type,n):t.hasOwnProperty("defaultValue")&&Uc(e,t.type,Zn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function pf(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Uc(e,t,n){(t!=="number"||os(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var no=Array.isArray;function si(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Zn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Wc(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(R(91));return Se({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ff(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(R(92));if(no(n)){if(1<n.length)throw Error(R(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Zn(n)}}function t0(e,t){var n=Zn(t.value),r=Zn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function hf(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function n0(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Gc(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?n0(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var da,r0=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(da=da||document.createElement("div"),da.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=da.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Po(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var lo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},kw=["Webkit","ms","Moz","O"];Object.keys(lo).forEach(function(e){kw.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),lo[t]=lo[e]})});function i0(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||lo.hasOwnProperty(e)&&lo[e]?(""+t).trim():t+"px"}function o0(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=i0(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var zw=Se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function qc(e,t){if(t){if(zw[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(R(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(R(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(R(61))}if(t.style!=null&&typeof t.style!="object")throw Error(R(62))}}function Yc(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Kc=null;function wd(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Xc=null,li=null,ci=null;function mf(e){if(e=ea(e)){if(typeof Xc!="function")throw Error(R(280));var t=e.stateNode;t&&(t=nl(t),Xc(e.stateNode,e.type,t))}}function a0(e){li?ci?ci.push(e):ci=[e]:li=e}function s0(){if(li){var e=li,t=ci;if(ci=li=null,mf(e),t)for(e=0;e<t.length;e++)mf(t[e])}}function l0(e,t){return e(t)}function c0(){}var Nl=!1;function u0(e,t,n){if(Nl)return e(t,n);Nl=!0;try{return l0(e,t,n)}finally{Nl=!1,(li!==null||ci!==null)&&(c0(),s0())}}function Eo(e,t){var n=e.stateNode;if(n===null)return null;var r=nl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(R(231,t,typeof n));return n}var Qc=!1;if(wn)try{var $i={};Object.defineProperty($i,"passive",{get:function(){Qc=!0}}),window.addEventListener("test",$i,$i),window.removeEventListener("test",$i,$i)}catch{Qc=!1}function Aw(e,t,n,r,i,o,a,s,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var co=!1,as=null,ss=!1,Zc=null,Mw={onError:function(e){co=!0,as=e}};function Lw(e,t,n,r,i,o,a,s,l){co=!1,as=null,Aw.apply(Mw,arguments)}function _w(e,t,n,r,i,o,a,s,l){if(Lw.apply(this,arguments),co){if(co){var u=as;co=!1,as=null}else throw Error(R(198));ss||(ss=!0,Zc=u)}}function Lr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function d0(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function gf(e){if(Lr(e)!==e)throw Error(R(188))}function Ow(e){var t=e.alternate;if(!t){if(t=Lr(e),t===null)throw Error(R(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return gf(i),e;if(o===r)return gf(i),t;o=o.sibling}throw Error(R(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,s=i.child;s;){if(s===n){a=!0,n=i,r=o;break}if(s===r){a=!0,r=i,n=o;break}s=s.sibling}if(!a){for(s=o.child;s;){if(s===n){a=!0,n=o,r=i;break}if(s===r){a=!0,r=o,n=i;break}s=s.sibling}if(!a)throw Error(R(189))}}if(n.alternate!==r)throw Error(R(190))}if(n.tag!==3)throw Error(R(188));return n.stateNode.current===n?e:t}function p0(e){return e=Ow(e),e!==null?f0(e):null}function f0(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=f0(e);if(t!==null)return t;e=e.sibling}return null}var h0=mt.unstable_scheduleCallback,vf=mt.unstable_cancelCallback,Iw=mt.unstable_shouldYield,Rw=mt.unstable_requestPaint,Pe=mt.unstable_now,Vw=mt.unstable_getCurrentPriorityLevel,bd=mt.unstable_ImmediatePriority,m0=mt.unstable_UserBlockingPriority,ls=mt.unstable_NormalPriority,Dw=mt.unstable_LowPriority,g0=mt.unstable_IdlePriority,Zs=null,Zt=null;function Nw(e){if(Zt&&typeof Zt.onCommitFiberRoot=="function")try{Zt.onCommitFiberRoot(Zs,e,void 0,(e.current.flags&128)===128)}catch{}}var Ft=Math.clz32?Math.clz32:$w,Bw=Math.log,Fw=Math.LN2;function $w(e){return e>>>=0,e===0?32:31-(Bw(e)/Fw|0)|0}var pa=64,fa=4194304;function ro(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function cs(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var s=a&~i;s!==0?r=ro(s):(o&=a,o!==0&&(r=ro(o)))}else a=n&~i,a!==0?r=ro(a):o!==0&&(r=ro(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ft(t),i=1<<n,r|=e[n],t&=~i;return r}function Hw(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Uw(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-Ft(o),s=1<<a,l=i[a];l===-1?(!(s&n)||s&r)&&(i[a]=Hw(s,t)):l<=t&&(e.expiredLanes|=s),o&=~s}}function Jc(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function v0(){var e=pa;return pa<<=1,!(pa&4194240)&&(pa=64),e}function Bl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Zo(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ft(t),e[t]=n}function Ww(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ft(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Sd(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ft(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var ce=0;function x0(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var y0,jd,w0,b0,S0,eu=!1,ha=[],$n=null,Hn=null,Un=null,ko=new Map,zo=new Map,In=[],Gw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function xf(e,t){switch(e){case"focusin":case"focusout":$n=null;break;case"dragenter":case"dragleave":Hn=null;break;case"mouseover":case"mouseout":Un=null;break;case"pointerover":case"pointerout":ko.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":zo.delete(t.pointerId)}}function Hi(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=ea(t),t!==null&&jd(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function qw(e,t,n,r,i){switch(t){case"focusin":return $n=Hi($n,e,t,n,r,i),!0;case"dragenter":return Hn=Hi(Hn,e,t,n,r,i),!0;case"mouseover":return Un=Hi(Un,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return ko.set(o,Hi(ko.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,zo.set(o,Hi(zo.get(o)||null,e,t,n,r,i)),!0}return!1}function j0(e){var t=fr(e.target);if(t!==null){var n=Lr(t);if(n!==null){if(t=n.tag,t===13){if(t=d0(n),t!==null){e.blockedOn=t,S0(e.priority,function(){w0(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Va(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=tu(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Kc=r,n.target.dispatchEvent(r),Kc=null}else return t=ea(n),t!==null&&jd(t),e.blockedOn=n,!1;t.shift()}return!0}function yf(e,t,n){Va(e)&&n.delete(t)}function Yw(){eu=!1,$n!==null&&Va($n)&&($n=null),Hn!==null&&Va(Hn)&&(Hn=null),Un!==null&&Va(Un)&&(Un=null),ko.forEach(yf),zo.forEach(yf)}function Ui(e,t){e.blockedOn===t&&(e.blockedOn=null,eu||(eu=!0,mt.unstable_scheduleCallback(mt.unstable_NormalPriority,Yw)))}function Ao(e){function t(i){return Ui(i,e)}if(0<ha.length){Ui(ha[0],e);for(var n=1;n<ha.length;n++){var r=ha[n];r.blockedOn===e&&(r.blockedOn=null)}}for($n!==null&&Ui($n,e),Hn!==null&&Ui(Hn,e),Un!==null&&Ui(Un,e),ko.forEach(t),zo.forEach(t),n=0;n<In.length;n++)r=In[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<In.length&&(n=In[0],n.blockedOn===null);)j0(n),n.blockedOn===null&&In.shift()}var ui=Tn.ReactCurrentBatchConfig,us=!0;function Kw(e,t,n,r){var i=ce,o=ui.transition;ui.transition=null;try{ce=1,Cd(e,t,n,r)}finally{ce=i,ui.transition=o}}function Xw(e,t,n,r){var i=ce,o=ui.transition;ui.transition=null;try{ce=4,Cd(e,t,n,r)}finally{ce=i,ui.transition=o}}function Cd(e,t,n,r){if(us){var i=tu(e,t,n,r);if(i===null)Xl(e,t,r,ds,n),xf(e,r);else if(qw(i,e,t,n,r))r.stopPropagation();else if(xf(e,r),t&4&&-1<Gw.indexOf(e)){for(;i!==null;){var o=ea(i);if(o!==null&&y0(o),o=tu(e,t,n,r),o===null&&Xl(e,t,r,ds,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Xl(e,t,r,null,n)}}var ds=null;function tu(e,t,n,r){if(ds=null,e=wd(r),e=fr(e),e!==null)if(t=Lr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=d0(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ds=e,null}function C0(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Vw()){case bd:return 1;case m0:return 4;case ls:case Dw:return 16;case g0:return 536870912;default:return 16}default:return 16}}var Dn=null,Td=null,Da=null;function T0(){if(Da)return Da;var e,t=Td,n=t.length,r,i="value"in Dn?Dn.value:Dn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return Da=i.slice(e,1<r?1-r:void 0)}function Na(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ma(){return!0}function wf(){return!1}function wt(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ma:wf,this.isPropagationStopped=wf,this}return Se(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ma)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ma)},persist:function(){},isPersistent:ma}),t}var _i={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Pd=wt(_i),Jo=Se({},_i,{view:0,detail:0}),Qw=wt(Jo),Fl,$l,Wi,Js=Se({},Jo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ed,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Wi&&(Wi&&e.type==="mousemove"?(Fl=e.screenX-Wi.screenX,$l=e.screenY-Wi.screenY):$l=Fl=0,Wi=e),Fl)},movementY:function(e){return"movementY"in e?e.movementY:$l}}),bf=wt(Js),Zw=Se({},Js,{dataTransfer:0}),Jw=wt(Zw),e2=Se({},Jo,{relatedTarget:0}),Hl=wt(e2),t2=Se({},_i,{animationName:0,elapsedTime:0,pseudoElement:0}),n2=wt(t2),r2=Se({},_i,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),i2=wt(r2),o2=Se({},_i,{data:0}),Sf=wt(o2),a2={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},s2={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},l2={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function c2(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=l2[e])?!!t[e]:!1}function Ed(){return c2}var u2=Se({},Jo,{key:function(e){if(e.key){var t=a2[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Na(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?s2[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ed,charCode:function(e){return e.type==="keypress"?Na(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Na(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),d2=wt(u2),p2=Se({},Js,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),jf=wt(p2),f2=Se({},Jo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ed}),h2=wt(f2),m2=Se({},_i,{propertyName:0,elapsedTime:0,pseudoElement:0}),g2=wt(m2),v2=Se({},Js,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),x2=wt(v2),y2=[9,13,27,32],kd=wn&&"CompositionEvent"in window,uo=null;wn&&"documentMode"in document&&(uo=document.documentMode);var w2=wn&&"TextEvent"in window&&!uo,P0=wn&&(!kd||uo&&8<uo&&11>=uo),Cf=" ",Tf=!1;function E0(e,t){switch(e){case"keyup":return y2.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function k0(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Wr=!1;function b2(e,t){switch(e){case"compositionend":return k0(t);case"keypress":return t.which!==32?null:(Tf=!0,Cf);case"textInput":return e=t.data,e===Cf&&Tf?null:e;default:return null}}function S2(e,t){if(Wr)return e==="compositionend"||!kd&&E0(e,t)?(e=T0(),Da=Td=Dn=null,Wr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return P0&&t.locale!=="ko"?null:t.data;default:return null}}var j2={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!j2[e.type]:t==="textarea"}function z0(e,t,n,r){a0(r),t=ps(t,"onChange"),0<t.length&&(n=new Pd("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var po=null,Mo=null;function C2(e){B0(e,0)}function el(e){var t=Yr(e);if(Jg(t))return e}function T2(e,t){if(e==="change")return t}var A0=!1;if(wn){var Ul;if(wn){var Wl="oninput"in document;if(!Wl){var Ef=document.createElement("div");Ef.setAttribute("oninput","return;"),Wl=typeof Ef.oninput=="function"}Ul=Wl}else Ul=!1;A0=Ul&&(!document.documentMode||9<document.documentMode)}function kf(){po&&(po.detachEvent("onpropertychange",M0),Mo=po=null)}function M0(e){if(e.propertyName==="value"&&el(Mo)){var t=[];z0(t,Mo,e,wd(e)),u0(C2,t)}}function P2(e,t,n){e==="focusin"?(kf(),po=t,Mo=n,po.attachEvent("onpropertychange",M0)):e==="focusout"&&kf()}function E2(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return el(Mo)}function k2(e,t){if(e==="click")return el(t)}function z2(e,t){if(e==="input"||e==="change")return el(t)}function A2(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ut=typeof Object.is=="function"?Object.is:A2;function Lo(e,t){if(Ut(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Vc.call(t,i)||!Ut(e[i],t[i]))return!1}return!0}function zf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Af(e,t){var n=zf(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=zf(n)}}function L0(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?L0(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function _0(){for(var e=window,t=os();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=os(e.document)}return t}function zd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function M2(e){var t=_0(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&L0(n.ownerDocument.documentElement,n)){if(r!==null&&zd(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Af(n,o);var a=Af(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var L2=wn&&"documentMode"in document&&11>=document.documentMode,Gr=null,nu=null,fo=null,ru=!1;function Mf(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ru||Gr==null||Gr!==os(r)||(r=Gr,"selectionStart"in r&&zd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),fo&&Lo(fo,r)||(fo=r,r=ps(nu,"onSelect"),0<r.length&&(t=new Pd("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Gr)))}function ga(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var qr={animationend:ga("Animation","AnimationEnd"),animationiteration:ga("Animation","AnimationIteration"),animationstart:ga("Animation","AnimationStart"),transitionend:ga("Transition","TransitionEnd")},Gl={},O0={};wn&&(O0=document.createElement("div").style,"AnimationEvent"in window||(delete qr.animationend.animation,delete qr.animationiteration.animation,delete qr.animationstart.animation),"TransitionEvent"in window||delete qr.transitionend.transition);function tl(e){if(Gl[e])return Gl[e];if(!qr[e])return e;var t=qr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in O0)return Gl[e]=t[n];return e}var I0=tl("animationend"),R0=tl("animationiteration"),V0=tl("animationstart"),D0=tl("transitionend"),N0=new Map,Lf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function nr(e,t){N0.set(e,t),Mr(t,[e])}for(var ql=0;ql<Lf.length;ql++){var Yl=Lf[ql],_2=Yl.toLowerCase(),O2=Yl[0].toUpperCase()+Yl.slice(1);nr(_2,"on"+O2)}nr(I0,"onAnimationEnd");nr(R0,"onAnimationIteration");nr(V0,"onAnimationStart");nr("dblclick","onDoubleClick");nr("focusin","onFocus");nr("focusout","onBlur");nr(D0,"onTransitionEnd");gi("onMouseEnter",["mouseout","mouseover"]);gi("onMouseLeave",["mouseout","mouseover"]);gi("onPointerEnter",["pointerout","pointerover"]);gi("onPointerLeave",["pointerout","pointerover"]);Mr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Mr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Mr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Mr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Mr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Mr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var io="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),I2=new Set("cancel close invalid load scroll toggle".split(" ").concat(io));function _f(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,_w(r,t,void 0,e),e.currentTarget=null}function B0(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==o&&i.isPropagationStopped())break e;_f(i,s,u),o=l}else for(a=0;a<r.length;a++){if(s=r[a],l=s.instance,u=s.currentTarget,s=s.listener,l!==o&&i.isPropagationStopped())break e;_f(i,s,u),o=l}}}if(ss)throw e=Zc,ss=!1,Zc=null,e}function fe(e,t){var n=t[lu];n===void 0&&(n=t[lu]=new Set);var r=e+"__bubble";n.has(r)||(F0(t,e,2,!1),n.add(r))}function Kl(e,t,n){var r=0;t&&(r|=4),F0(n,e,r,t)}var va="_reactListening"+Math.random().toString(36).slice(2);function _o(e){if(!e[va]){e[va]=!0,Yg.forEach(function(n){n!=="selectionchange"&&(I2.has(n)||Kl(n,!1,e),Kl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[va]||(t[va]=!0,Kl("selectionchange",!1,t))}}function F0(e,t,n,r){switch(C0(t)){case 1:var i=Kw;break;case 4:i=Xw;break;default:i=Cd}n=i.bind(null,t,n,e),i=void 0,!Qc||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Xl(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;a=a.return}for(;s!==null;){if(a=fr(s),a===null)return;if(l=a.tag,l===5||l===6){r=o=a;continue e}s=s.parentNode}}r=r.return}u0(function(){var u=o,d=wd(n),p=[];e:{var f=N0.get(e);if(f!==void 0){var v=Pd,x=e;switch(e){case"keypress":if(Na(n)===0)break e;case"keydown":case"keyup":v=d2;break;case"focusin":x="focus",v=Hl;break;case"focusout":x="blur",v=Hl;break;case"beforeblur":case"afterblur":v=Hl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=bf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Jw;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=h2;break;case I0:case R0:case V0:v=n2;break;case D0:v=g2;break;case"scroll":v=Qw;break;case"wheel":v=x2;break;case"copy":case"cut":case"paste":v=i2;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=jf}var y=(t&4)!==0,b=!y&&e==="scroll",g=y?f!==null?f+"Capture":null:f;y=[];for(var h=u,m;h!==null;){m=h;var w=m.stateNode;if(m.tag===5&&w!==null&&(m=w,g!==null&&(w=Eo(h,g),w!=null&&y.push(Oo(h,w,m)))),b)break;h=h.return}0<y.length&&(f=new v(f,x,null,n,d),p.push({event:f,listeners:y}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",f&&n!==Kc&&(x=n.relatedTarget||n.fromElement)&&(fr(x)||x[bn]))break e;if((v||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,v?(x=n.relatedTarget||n.toElement,v=u,x=x?fr(x):null,x!==null&&(b=Lr(x),x!==b||x.tag!==5&&x.tag!==6)&&(x=null)):(v=null,x=u),v!==x)){if(y=bf,w="onMouseLeave",g="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(y=jf,w="onPointerLeave",g="onPointerEnter",h="pointer"),b=v==null?f:Yr(v),m=x==null?f:Yr(x),f=new y(w,h+"leave",v,n,d),f.target=b,f.relatedTarget=m,w=null,fr(d)===u&&(y=new y(g,h+"enter",x,n,d),y.target=m,y.relatedTarget=b,w=y),b=w,v&&x)t:{for(y=v,g=x,h=0,m=y;m;m=Vr(m))h++;for(m=0,w=g;w;w=Vr(w))m++;for(;0<h-m;)y=Vr(y),h--;for(;0<m-h;)g=Vr(g),m--;for(;h--;){if(y===g||g!==null&&y===g.alternate)break t;y=Vr(y),g=Vr(g)}y=null}else y=null;v!==null&&Of(p,f,v,y,!1),x!==null&&b!==null&&Of(p,b,x,y,!0)}}e:{if(f=u?Yr(u):window,v=f.nodeName&&f.nodeName.toLowerCase(),v==="select"||v==="input"&&f.type==="file")var S=T2;else if(Pf(f))if(A0)S=z2;else{S=E2;var C=P2}else(v=f.nodeName)&&v.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(S=k2);if(S&&(S=S(e,u))){z0(p,S,n,d);break e}C&&C(e,f,u),e==="focusout"&&(C=f._wrapperState)&&C.controlled&&f.type==="number"&&Uc(f,"number",f.value)}switch(C=u?Yr(u):window,e){case"focusin":(Pf(C)||C.contentEditable==="true")&&(Gr=C,nu=u,fo=null);break;case"focusout":fo=nu=Gr=null;break;case"mousedown":ru=!0;break;case"contextmenu":case"mouseup":case"dragend":ru=!1,Mf(p,n,d);break;case"selectionchange":if(L2)break;case"keydown":case"keyup":Mf(p,n,d)}var E;if(kd)e:{switch(e){case"compositionstart":var k="onCompositionStart";break e;case"compositionend":k="onCompositionEnd";break e;case"compositionupdate":k="onCompositionUpdate";break e}k=void 0}else Wr?E0(e,n)&&(k="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(k="onCompositionStart");k&&(P0&&n.locale!=="ko"&&(Wr||k!=="onCompositionStart"?k==="onCompositionEnd"&&Wr&&(E=T0()):(Dn=d,Td="value"in Dn?Dn.value:Dn.textContent,Wr=!0)),C=ps(u,k),0<C.length&&(k=new Sf(k,e,null,n,d),p.push({event:k,listeners:C}),E?k.data=E:(E=k0(n),E!==null&&(k.data=E)))),(E=w2?b2(e,n):S2(e,n))&&(u=ps(u,"onBeforeInput"),0<u.length&&(d=new Sf("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:u}),d.data=E))}B0(p,t)})}function Oo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ps(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Eo(e,n),o!=null&&r.unshift(Oo(e,o,i)),o=Eo(e,t),o!=null&&r.push(Oo(e,o,i))),e=e.return}return r}function Vr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Of(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var s=n,l=s.alternate,u=s.stateNode;if(l!==null&&l===r)break;s.tag===5&&u!==null&&(s=u,i?(l=Eo(n,o),l!=null&&a.unshift(Oo(n,l,s))):i||(l=Eo(n,o),l!=null&&a.push(Oo(n,l,s)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var R2=/\r\n?/g,V2=/\u0000|\uFFFD/g;function If(e){return(typeof e=="string"?e:""+e).replace(R2,`
`).replace(V2,"")}function xa(e,t,n){if(t=If(t),If(e)!==t&&n)throw Error(R(425))}function fs(){}var iu=null,ou=null;function au(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var su=typeof setTimeout=="function"?setTimeout:void 0,D2=typeof clearTimeout=="function"?clearTimeout:void 0,Rf=typeof Promise=="function"?Promise:void 0,N2=typeof queueMicrotask=="function"?queueMicrotask:typeof Rf<"u"?function(e){return Rf.resolve(null).then(e).catch(B2)}:su;function B2(e){setTimeout(function(){throw e})}function Ql(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Ao(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ao(t)}function Wn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Vf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Oi=Math.random().toString(36).slice(2),Kt="__reactFiber$"+Oi,Io="__reactProps$"+Oi,bn="__reactContainer$"+Oi,lu="__reactEvents$"+Oi,F2="__reactListeners$"+Oi,$2="__reactHandles$"+Oi;function fr(e){var t=e[Kt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[bn]||n[Kt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Vf(e);e!==null;){if(n=e[Kt])return n;e=Vf(e)}return t}e=n,n=e.parentNode}return null}function ea(e){return e=e[Kt]||e[bn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Yr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(R(33))}function nl(e){return e[Io]||null}var cu=[],Kr=-1;function rr(e){return{current:e}}function me(e){0>Kr||(e.current=cu[Kr],cu[Kr]=null,Kr--)}function ue(e,t){Kr++,cu[Kr]=e.current,e.current=t}var Jn={},Ke=rr(Jn),it=rr(!1),Cr=Jn;function vi(e,t){var n=e.type.contextTypes;if(!n)return Jn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ot(e){return e=e.childContextTypes,e!=null}function hs(){me(it),me(Ke)}function Df(e,t,n){if(Ke.current!==Jn)throw Error(R(168));ue(Ke,t),ue(it,n)}function $0(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(R(108,Pw(e)||"Unknown",i));return Se({},n,r)}function ms(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Jn,Cr=Ke.current,ue(Ke,e),ue(it,it.current),!0}function Nf(e,t,n){var r=e.stateNode;if(!r)throw Error(R(169));n?(e=$0(e,t,Cr),r.__reactInternalMemoizedMergedChildContext=e,me(it),me(Ke),ue(Ke,e)):me(it),ue(it,n)}var cn=null,rl=!1,Zl=!1;function H0(e){cn===null?cn=[e]:cn.push(e)}function H2(e){rl=!0,H0(e)}function ir(){if(!Zl&&cn!==null){Zl=!0;var e=0,t=ce;try{var n=cn;for(ce=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}cn=null,rl=!1}catch(i){throw cn!==null&&(cn=cn.slice(e+1)),h0(bd,ir),i}finally{ce=t,Zl=!1}}return null}var Xr=[],Qr=0,gs=null,vs=0,Et=[],kt=0,Tr=null,dn=1,pn="";function lr(e,t){Xr[Qr++]=vs,Xr[Qr++]=gs,gs=e,vs=t}function U0(e,t,n){Et[kt++]=dn,Et[kt++]=pn,Et[kt++]=Tr,Tr=e;var r=dn;e=pn;var i=32-Ft(r)-1;r&=~(1<<i),n+=1;var o=32-Ft(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,dn=1<<32-Ft(t)+i|n<<i|r,pn=o+e}else dn=1<<o|n<<i|r,pn=e}function Ad(e){e.return!==null&&(lr(e,1),U0(e,1,0))}function Md(e){for(;e===gs;)gs=Xr[--Qr],Xr[Qr]=null,vs=Xr[--Qr],Xr[Qr]=null;for(;e===Tr;)Tr=Et[--kt],Et[kt]=null,pn=Et[--kt],Et[kt]=null,dn=Et[--kt],Et[kt]=null}var ht=null,ft=null,xe=!1,Nt=null;function W0(e,t){var n=zt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Bf(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ht=e,ft=Wn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ht=e,ft=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Tr!==null?{id:dn,overflow:pn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=zt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ht=e,ft=null,!0):!1;default:return!1}}function uu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function du(e){if(xe){var t=ft;if(t){var n=t;if(!Bf(e,t)){if(uu(e))throw Error(R(418));t=Wn(n.nextSibling);var r=ht;t&&Bf(e,t)?W0(r,n):(e.flags=e.flags&-4097|2,xe=!1,ht=e)}}else{if(uu(e))throw Error(R(418));e.flags=e.flags&-4097|2,xe=!1,ht=e}}}function Ff(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ht=e}function ya(e){if(e!==ht)return!1;if(!xe)return Ff(e),xe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!au(e.type,e.memoizedProps)),t&&(t=ft)){if(uu(e))throw G0(),Error(R(418));for(;t;)W0(e,t),t=Wn(t.nextSibling)}if(Ff(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(R(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ft=Wn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ft=null}}else ft=ht?Wn(e.stateNode.nextSibling):null;return!0}function G0(){for(var e=ft;e;)e=Wn(e.nextSibling)}function xi(){ft=ht=null,xe=!1}function Ld(e){Nt===null?Nt=[e]:Nt.push(e)}var U2=Tn.ReactCurrentBatchConfig;function Gi(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(R(309));var r=n.stateNode}if(!r)throw Error(R(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var s=i.refs;a===null?delete s[o]:s[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(R(284));if(!n._owner)throw Error(R(290,e))}return e}function wa(e,t){throw e=Object.prototype.toString.call(t),Error(R(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function $f(e){var t=e._init;return t(e._payload)}function q0(e){function t(g,h){if(e){var m=g.deletions;m===null?(g.deletions=[h],g.flags|=16):m.push(h)}}function n(g,h){if(!e)return null;for(;h!==null;)t(g,h),h=h.sibling;return null}function r(g,h){for(g=new Map;h!==null;)h.key!==null?g.set(h.key,h):g.set(h.index,h),h=h.sibling;return g}function i(g,h){return g=Kn(g,h),g.index=0,g.sibling=null,g}function o(g,h,m){return g.index=m,e?(m=g.alternate,m!==null?(m=m.index,m<h?(g.flags|=2,h):m):(g.flags|=2,h)):(g.flags|=1048576,h)}function a(g){return e&&g.alternate===null&&(g.flags|=2),g}function s(g,h,m,w){return h===null||h.tag!==6?(h=oc(m,g.mode,w),h.return=g,h):(h=i(h,m),h.return=g,h)}function l(g,h,m,w){var S=m.type;return S===Ur?d(g,h,m.props.children,w,m.key):h!==null&&(h.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===_n&&$f(S)===h.type)?(w=i(h,m.props),w.ref=Gi(g,h,m),w.return=g,w):(w=Ga(m.type,m.key,m.props,null,g.mode,w),w.ref=Gi(g,h,m),w.return=g,w)}function u(g,h,m,w){return h===null||h.tag!==4||h.stateNode.containerInfo!==m.containerInfo||h.stateNode.implementation!==m.implementation?(h=ac(m,g.mode,w),h.return=g,h):(h=i(h,m.children||[]),h.return=g,h)}function d(g,h,m,w,S){return h===null||h.tag!==7?(h=wr(m,g.mode,w,S),h.return=g,h):(h=i(h,m),h.return=g,h)}function p(g,h,m){if(typeof h=="string"&&h!==""||typeof h=="number")return h=oc(""+h,g.mode,m),h.return=g,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case ca:return m=Ga(h.type,h.key,h.props,null,g.mode,m),m.ref=Gi(g,null,h),m.return=g,m;case Hr:return h=ac(h,g.mode,m),h.return=g,h;case _n:var w=h._init;return p(g,w(h._payload),m)}if(no(h)||Fi(h))return h=wr(h,g.mode,m,null),h.return=g,h;wa(g,h)}return null}function f(g,h,m,w){var S=h!==null?h.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return S!==null?null:s(g,h,""+m,w);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case ca:return m.key===S?l(g,h,m,w):null;case Hr:return m.key===S?u(g,h,m,w):null;case _n:return S=m._init,f(g,h,S(m._payload),w)}if(no(m)||Fi(m))return S!==null?null:d(g,h,m,w,null);wa(g,m)}return null}function v(g,h,m,w,S){if(typeof w=="string"&&w!==""||typeof w=="number")return g=g.get(m)||null,s(h,g,""+w,S);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case ca:return g=g.get(w.key===null?m:w.key)||null,l(h,g,w,S);case Hr:return g=g.get(w.key===null?m:w.key)||null,u(h,g,w,S);case _n:var C=w._init;return v(g,h,m,C(w._payload),S)}if(no(w)||Fi(w))return g=g.get(m)||null,d(h,g,w,S,null);wa(h,w)}return null}function x(g,h,m,w){for(var S=null,C=null,E=h,k=h=0,A=null;E!==null&&k<m.length;k++){E.index>k?(A=E,E=null):A=E.sibling;var z=f(g,E,m[k],w);if(z===null){E===null&&(E=A);break}e&&E&&z.alternate===null&&t(g,E),h=o(z,h,k),C===null?S=z:C.sibling=z,C=z,E=A}if(k===m.length)return n(g,E),xe&&lr(g,k),S;if(E===null){for(;k<m.length;k++)E=p(g,m[k],w),E!==null&&(h=o(E,h,k),C===null?S=E:C.sibling=E,C=E);return xe&&lr(g,k),S}for(E=r(g,E);k<m.length;k++)A=v(E,g,k,m[k],w),A!==null&&(e&&A.alternate!==null&&E.delete(A.key===null?k:A.key),h=o(A,h,k),C===null?S=A:C.sibling=A,C=A);return e&&E.forEach(function(I){return t(g,I)}),xe&&lr(g,k),S}function y(g,h,m,w){var S=Fi(m);if(typeof S!="function")throw Error(R(150));if(m=S.call(m),m==null)throw Error(R(151));for(var C=S=null,E=h,k=h=0,A=null,z=m.next();E!==null&&!z.done;k++,z=m.next()){E.index>k?(A=E,E=null):A=E.sibling;var I=f(g,E,z.value,w);if(I===null){E===null&&(E=A);break}e&&E&&I.alternate===null&&t(g,E),h=o(I,h,k),C===null?S=I:C.sibling=I,C=I,E=A}if(z.done)return n(g,E),xe&&lr(g,k),S;if(E===null){for(;!z.done;k++,z=m.next())z=p(g,z.value,w),z!==null&&(h=o(z,h,k),C===null?S=z:C.sibling=z,C=z);return xe&&lr(g,k),S}for(E=r(g,E);!z.done;k++,z=m.next())z=v(E,g,k,z.value,w),z!==null&&(e&&z.alternate!==null&&E.delete(z.key===null?k:z.key),h=o(z,h,k),C===null?S=z:C.sibling=z,C=z);return e&&E.forEach(function(F){return t(g,F)}),xe&&lr(g,k),S}function b(g,h,m,w){if(typeof m=="object"&&m!==null&&m.type===Ur&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case ca:e:{for(var S=m.key,C=h;C!==null;){if(C.key===S){if(S=m.type,S===Ur){if(C.tag===7){n(g,C.sibling),h=i(C,m.props.children),h.return=g,g=h;break e}}else if(C.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===_n&&$f(S)===C.type){n(g,C.sibling),h=i(C,m.props),h.ref=Gi(g,C,m),h.return=g,g=h;break e}n(g,C);break}else t(g,C);C=C.sibling}m.type===Ur?(h=wr(m.props.children,g.mode,w,m.key),h.return=g,g=h):(w=Ga(m.type,m.key,m.props,null,g.mode,w),w.ref=Gi(g,h,m),w.return=g,g=w)}return a(g);case Hr:e:{for(C=m.key;h!==null;){if(h.key===C)if(h.tag===4&&h.stateNode.containerInfo===m.containerInfo&&h.stateNode.implementation===m.implementation){n(g,h.sibling),h=i(h,m.children||[]),h.return=g,g=h;break e}else{n(g,h);break}else t(g,h);h=h.sibling}h=ac(m,g.mode,w),h.return=g,g=h}return a(g);case _n:return C=m._init,b(g,h,C(m._payload),w)}if(no(m))return x(g,h,m,w);if(Fi(m))return y(g,h,m,w);wa(g,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,h!==null&&h.tag===6?(n(g,h.sibling),h=i(h,m),h.return=g,g=h):(n(g,h),h=oc(m,g.mode,w),h.return=g,g=h),a(g)):n(g,h)}return b}var yi=q0(!0),Y0=q0(!1),xs=rr(null),ys=null,Zr=null,_d=null;function Od(){_d=Zr=ys=null}function Id(e){var t=xs.current;me(xs),e._currentValue=t}function pu(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function di(e,t){ys=e,_d=Zr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(rt=!0),e.firstContext=null)}function Mt(e){var t=e._currentValue;if(_d!==e)if(e={context:e,memoizedValue:t,next:null},Zr===null){if(ys===null)throw Error(R(308));Zr=e,ys.dependencies={lanes:0,firstContext:e}}else Zr=Zr.next=e;return t}var hr=null;function Rd(e){hr===null?hr=[e]:hr.push(e)}function K0(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Rd(t)):(n.next=i.next,i.next=n),t.interleaved=n,Sn(e,r)}function Sn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var On=!1;function Vd(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function X0(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function hn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Gn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,oe&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Sn(e,n)}return i=r.interleaved,i===null?(t.next=t,Rd(r)):(t.next=i.next,i.next=t),r.interleaved=t,Sn(e,n)}function Ba(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Sd(e,n)}}function Hf(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ws(e,t,n,r){var i=e.updateQueue;On=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var l=s,u=l.next;l.next=null,a===null?o=u:a.next=u,a=l;var d=e.alternate;d!==null&&(d=d.updateQueue,s=d.lastBaseUpdate,s!==a&&(s===null?d.firstBaseUpdate=u:s.next=u,d.lastBaseUpdate=l))}if(o!==null){var p=i.baseState;a=0,d=u=l=null,s=o;do{var f=s.lane,v=s.eventTime;if((r&f)===f){d!==null&&(d=d.next={eventTime:v,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var x=e,y=s;switch(f=t,v=n,y.tag){case 1:if(x=y.payload,typeof x=="function"){p=x.call(v,p,f);break e}p=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=y.payload,f=typeof x=="function"?x.call(v,p,f):x,f==null)break e;p=Se({},p,f);break e;case 2:On=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[s]:f.push(s))}else v={eventTime:v,lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},d===null?(u=d=v,l=p):d=d.next=v,a|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;f=s,s=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(d===null&&(l=p),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Er|=a,e.lanes=a,e.memoizedState=p}}function Uf(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(R(191,i));i.call(r)}}}var ta={},Jt=rr(ta),Ro=rr(ta),Vo=rr(ta);function mr(e){if(e===ta)throw Error(R(174));return e}function Dd(e,t){switch(ue(Vo,t),ue(Ro,e),ue(Jt,ta),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Gc(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Gc(t,e)}me(Jt),ue(Jt,t)}function wi(){me(Jt),me(Ro),me(Vo)}function Q0(e){mr(Vo.current);var t=mr(Jt.current),n=Gc(t,e.type);t!==n&&(ue(Ro,e),ue(Jt,n))}function Nd(e){Ro.current===e&&(me(Jt),me(Ro))}var ye=rr(0);function bs(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Jl=[];function Bd(){for(var e=0;e<Jl.length;e++)Jl[e]._workInProgressVersionPrimary=null;Jl.length=0}var Fa=Tn.ReactCurrentDispatcher,ec=Tn.ReactCurrentBatchConfig,Pr=0,be=null,Ae=null,Ie=null,Ss=!1,ho=!1,Do=0,W2=0;function He(){throw Error(R(321))}function Fd(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ut(e[n],t[n]))return!1;return!0}function $d(e,t,n,r,i,o){if(Pr=o,be=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Fa.current=e===null||e.memoizedState===null?K2:X2,e=n(r,i),ho){o=0;do{if(ho=!1,Do=0,25<=o)throw Error(R(301));o+=1,Ie=Ae=null,t.updateQueue=null,Fa.current=Q2,e=n(r,i)}while(ho)}if(Fa.current=js,t=Ae!==null&&Ae.next!==null,Pr=0,Ie=Ae=be=null,Ss=!1,t)throw Error(R(300));return e}function Hd(){var e=Do!==0;return Do=0,e}function qt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ie===null?be.memoizedState=Ie=e:Ie=Ie.next=e,Ie}function Lt(){if(Ae===null){var e=be.alternate;e=e!==null?e.memoizedState:null}else e=Ae.next;var t=Ie===null?be.memoizedState:Ie.next;if(t!==null)Ie=t,Ae=e;else{if(e===null)throw Error(R(310));Ae=e,e={memoizedState:Ae.memoizedState,baseState:Ae.baseState,baseQueue:Ae.baseQueue,queue:Ae.queue,next:null},Ie===null?be.memoizedState=Ie=e:Ie=Ie.next=e}return Ie}function No(e,t){return typeof t=="function"?t(e):t}function tc(e){var t=Lt(),n=t.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=e;var r=Ae,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var s=a=null,l=null,u=o;do{var d=u.lane;if((Pr&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var p={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(s=l=p,a=r):l=l.next=p,be.lanes|=d,Er|=d}u=u.next}while(u!==null&&u!==o);l===null?a=r:l.next=s,Ut(r,t.memoizedState)||(rt=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,be.lanes|=o,Er|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function nc(e){var t=Lt(),n=t.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);Ut(o,t.memoizedState)||(rt=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Z0(){}function J0(e,t){var n=be,r=Lt(),i=t(),o=!Ut(r.memoizedState,i);if(o&&(r.memoizedState=i,rt=!0),r=r.queue,Ud(nv.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Ie!==null&&Ie.memoizedState.tag&1){if(n.flags|=2048,Bo(9,tv.bind(null,n,r,i,t),void 0,null),Ve===null)throw Error(R(349));Pr&30||ev(n,t,i)}return i}function ev(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=be.updateQueue,t===null?(t={lastEffect:null,stores:null},be.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function tv(e,t,n,r){t.value=n,t.getSnapshot=r,rv(t)&&iv(e)}function nv(e,t,n){return n(function(){rv(t)&&iv(e)})}function rv(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ut(e,n)}catch{return!0}}function iv(e){var t=Sn(e,1);t!==null&&$t(t,e,1,-1)}function Wf(e){var t=qt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:No,lastRenderedState:e},t.queue=e,e=e.dispatch=Y2.bind(null,be,e),[t.memoizedState,e]}function Bo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=be.updateQueue,t===null?(t={lastEffect:null,stores:null},be.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function ov(){return Lt().memoizedState}function $a(e,t,n,r){var i=qt();be.flags|=e,i.memoizedState=Bo(1|t,n,void 0,r===void 0?null:r)}function il(e,t,n,r){var i=Lt();r=r===void 0?null:r;var o=void 0;if(Ae!==null){var a=Ae.memoizedState;if(o=a.destroy,r!==null&&Fd(r,a.deps)){i.memoizedState=Bo(t,n,o,r);return}}be.flags|=e,i.memoizedState=Bo(1|t,n,o,r)}function Gf(e,t){return $a(8390656,8,e,t)}function Ud(e,t){return il(2048,8,e,t)}function av(e,t){return il(4,2,e,t)}function sv(e,t){return il(4,4,e,t)}function lv(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function cv(e,t,n){return n=n!=null?n.concat([e]):null,il(4,4,lv.bind(null,t,e),n)}function Wd(){}function uv(e,t){var n=Lt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Fd(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function dv(e,t){var n=Lt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Fd(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function pv(e,t,n){return Pr&21?(Ut(n,t)||(n=v0(),be.lanes|=n,Er|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,rt=!0),e.memoizedState=n)}function G2(e,t){var n=ce;ce=n!==0&&4>n?n:4,e(!0);var r=ec.transition;ec.transition={};try{e(!1),t()}finally{ce=n,ec.transition=r}}function fv(){return Lt().memoizedState}function q2(e,t,n){var r=Yn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},hv(e))mv(t,n);else if(n=K0(e,t,n,r),n!==null){var i=Qe();$t(n,e,r,i),gv(n,t,r)}}function Y2(e,t,n){var r=Yn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(hv(e))mv(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,s=o(a,n);if(i.hasEagerState=!0,i.eagerState=s,Ut(s,a)){var l=t.interleaved;l===null?(i.next=i,Rd(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=K0(e,t,i,r),n!==null&&(i=Qe(),$t(n,e,r,i),gv(n,t,r))}}function hv(e){var t=e.alternate;return e===be||t!==null&&t===be}function mv(e,t){ho=Ss=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function gv(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Sd(e,n)}}var js={readContext:Mt,useCallback:He,useContext:He,useEffect:He,useImperativeHandle:He,useInsertionEffect:He,useLayoutEffect:He,useMemo:He,useReducer:He,useRef:He,useState:He,useDebugValue:He,useDeferredValue:He,useTransition:He,useMutableSource:He,useSyncExternalStore:He,useId:He,unstable_isNewReconciler:!1},K2={readContext:Mt,useCallback:function(e,t){return qt().memoizedState=[e,t===void 0?null:t],e},useContext:Mt,useEffect:Gf,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,$a(4194308,4,lv.bind(null,t,e),n)},useLayoutEffect:function(e,t){return $a(4194308,4,e,t)},useInsertionEffect:function(e,t){return $a(4,2,e,t)},useMemo:function(e,t){var n=qt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=qt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=q2.bind(null,be,e),[r.memoizedState,e]},useRef:function(e){var t=qt();return e={current:e},t.memoizedState=e},useState:Wf,useDebugValue:Wd,useDeferredValue:function(e){return qt().memoizedState=e},useTransition:function(){var e=Wf(!1),t=e[0];return e=G2.bind(null,e[1]),qt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=be,i=qt();if(xe){if(n===void 0)throw Error(R(407));n=n()}else{if(n=t(),Ve===null)throw Error(R(349));Pr&30||ev(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Gf(nv.bind(null,r,o,e),[e]),r.flags|=2048,Bo(9,tv.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=qt(),t=Ve.identifierPrefix;if(xe){var n=pn,r=dn;n=(r&~(1<<32-Ft(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Do++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=W2++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},X2={readContext:Mt,useCallback:uv,useContext:Mt,useEffect:Ud,useImperativeHandle:cv,useInsertionEffect:av,useLayoutEffect:sv,useMemo:dv,useReducer:tc,useRef:ov,useState:function(){return tc(No)},useDebugValue:Wd,useDeferredValue:function(e){var t=Lt();return pv(t,Ae.memoizedState,e)},useTransition:function(){var e=tc(No)[0],t=Lt().memoizedState;return[e,t]},useMutableSource:Z0,useSyncExternalStore:J0,useId:fv,unstable_isNewReconciler:!1},Q2={readContext:Mt,useCallback:uv,useContext:Mt,useEffect:Ud,useImperativeHandle:cv,useInsertionEffect:av,useLayoutEffect:sv,useMemo:dv,useReducer:nc,useRef:ov,useState:function(){return nc(No)},useDebugValue:Wd,useDeferredValue:function(e){var t=Lt();return Ae===null?t.memoizedState=e:pv(t,Ae.memoizedState,e)},useTransition:function(){var e=nc(No)[0],t=Lt().memoizedState;return[e,t]},useMutableSource:Z0,useSyncExternalStore:J0,useId:fv,unstable_isNewReconciler:!1};function Vt(e,t){if(e&&e.defaultProps){t=Se({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function fu(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Se({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ol={isMounted:function(e){return(e=e._reactInternals)?Lr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Qe(),i=Yn(e),o=hn(r,i);o.payload=t,n!=null&&(o.callback=n),t=Gn(e,o,i),t!==null&&($t(t,e,i,r),Ba(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Qe(),i=Yn(e),o=hn(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Gn(e,o,i),t!==null&&($t(t,e,i,r),Ba(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Qe(),r=Yn(e),i=hn(n,r);i.tag=2,t!=null&&(i.callback=t),t=Gn(e,i,r),t!==null&&($t(t,e,r,n),Ba(t,e,r))}};function qf(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!Lo(n,r)||!Lo(i,o):!0}function vv(e,t,n){var r=!1,i=Jn,o=t.contextType;return typeof o=="object"&&o!==null?o=Mt(o):(i=ot(t)?Cr:Ke.current,r=t.contextTypes,o=(r=r!=null)?vi(e,i):Jn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ol,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Yf(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ol.enqueueReplaceState(t,t.state,null)}function hu(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Vd(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Mt(o):(o=ot(t)?Cr:Ke.current,i.context=vi(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(fu(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&ol.enqueueReplaceState(i,i.state,null),ws(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function bi(e,t){try{var n="",r=t;do n+=Tw(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function rc(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function mu(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Z2=typeof WeakMap=="function"?WeakMap:Map;function xv(e,t,n){n=hn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ts||(Ts=!0,Tu=r),mu(e,t)},n}function yv(e,t,n){n=hn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){mu(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){mu(e,t),typeof r!="function"&&(qn===null?qn=new Set([this]):qn.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Kf(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Z2;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=pb.bind(null,e,t,n),t.then(e,e))}function Xf(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Qf(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=hn(-1,1),t.tag=2,Gn(n,t,1))),n.lanes|=1),e)}var J2=Tn.ReactCurrentOwner,rt=!1;function Xe(e,t,n,r){t.child=e===null?Y0(t,null,n,r):yi(t,e.child,n,r)}function Zf(e,t,n,r,i){n=n.render;var o=t.ref;return di(t,i),r=$d(e,t,n,r,o,i),n=Hd(),e!==null&&!rt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,jn(e,t,i)):(xe&&n&&Ad(t),t.flags|=1,Xe(e,t,r,i),t.child)}function Jf(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Jd(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,wv(e,t,o,r,i)):(e=Ga(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:Lo,n(a,r)&&e.ref===t.ref)return jn(e,t,i)}return t.flags|=1,e=Kn(o,r),e.ref=t.ref,e.return=t,t.child=e}function wv(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Lo(o,r)&&e.ref===t.ref)if(rt=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(rt=!0);else return t.lanes=e.lanes,jn(e,t,i)}return gu(e,t,n,r,i)}function bv(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ue(ei,dt),dt|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ue(ei,dt),dt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,ue(ei,dt),dt|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,ue(ei,dt),dt|=r;return Xe(e,t,i,n),t.child}function Sv(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function gu(e,t,n,r,i){var o=ot(n)?Cr:Ke.current;return o=vi(t,o),di(t,i),n=$d(e,t,n,r,o,i),r=Hd(),e!==null&&!rt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,jn(e,t,i)):(xe&&r&&Ad(t),t.flags|=1,Xe(e,t,n,i),t.child)}function eh(e,t,n,r,i){if(ot(n)){var o=!0;ms(t)}else o=!1;if(di(t,i),t.stateNode===null)Ha(e,t),vv(t,n,r),hu(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,s=t.memoizedProps;a.props=s;var l=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=Mt(u):(u=ot(n)?Cr:Ke.current,u=vi(t,u));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";p||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==r||l!==u)&&Yf(t,a,r,u),On=!1;var f=t.memoizedState;a.state=f,ws(t,r,a,i),l=t.memoizedState,s!==r||f!==l||it.current||On?(typeof d=="function"&&(fu(t,n,d,r),l=t.memoizedState),(s=On||qf(t,n,s,r,f,l,u))?(p||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=u,r=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,X0(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:Vt(t.type,s),a.props=u,p=t.pendingProps,f=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=Mt(l):(l=ot(n)?Cr:Ke.current,l=vi(t,l));var v=n.getDerivedStateFromProps;(d=typeof v=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==p||f!==l)&&Yf(t,a,r,l),On=!1,f=t.memoizedState,a.state=f,ws(t,r,a,i);var x=t.memoizedState;s!==p||f!==x||it.current||On?(typeof v=="function"&&(fu(t,n,v,r),x=t.memoizedState),(u=On||qf(t,n,u,r,f,x,l)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,x,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,x,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),a.props=r,a.state=x,a.context=l,r=u):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return vu(e,t,n,r,o,i)}function vu(e,t,n,r,i,o){Sv(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&Nf(t,n,!1),jn(e,t,o);r=t.stateNode,J2.current=t;var s=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=yi(t,e.child,null,o),t.child=yi(t,null,s,o)):Xe(e,t,s,o),t.memoizedState=r.state,i&&Nf(t,n,!0),t.child}function jv(e){var t=e.stateNode;t.pendingContext?Df(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Df(e,t.context,!1),Dd(e,t.containerInfo)}function th(e,t,n,r,i){return xi(),Ld(i),t.flags|=256,Xe(e,t,n,r),t.child}var xu={dehydrated:null,treeContext:null,retryLane:0};function yu(e){return{baseLanes:e,cachePool:null,transitions:null}}function Cv(e,t,n){var r=t.pendingProps,i=ye.current,o=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ue(ye,i&1),e===null)return du(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=ll(a,r,0,null),e=wr(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=yu(n),t.memoizedState=xu,e):Gd(t,a));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return eb(e,t,a,r,s,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,s=i.sibling;var l={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Kn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?o=Kn(s,o):(o=wr(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?yu(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=xu,r}return o=e.child,e=o.sibling,r=Kn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Gd(e,t){return t=ll({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ba(e,t,n,r){return r!==null&&Ld(r),yi(t,e.child,null,n),e=Gd(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function eb(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=rc(Error(R(422))),ba(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=ll({mode:"visible",children:r.children},i,0,null),o=wr(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&yi(t,e.child,null,a),t.child.memoizedState=yu(a),t.memoizedState=xu,o);if(!(t.mode&1))return ba(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(R(419)),r=rc(o,r,void 0),ba(e,t,a,r)}if(s=(a&e.childLanes)!==0,rt||s){if(r=Ve,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Sn(e,i),$t(r,e,i,-1))}return Zd(),r=rc(Error(R(421))),ba(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=fb.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,ft=Wn(i.nextSibling),ht=t,xe=!0,Nt=null,e!==null&&(Et[kt++]=dn,Et[kt++]=pn,Et[kt++]=Tr,dn=e.id,pn=e.overflow,Tr=t),t=Gd(t,r.children),t.flags|=4096,t)}function nh(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),pu(e.return,t,n)}function ic(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Tv(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Xe(e,t,r.children,n),r=ye.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&nh(e,n,t);else if(e.tag===19)nh(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ue(ye,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&bs(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),ic(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&bs(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ic(t,!0,n,null,o);break;case"together":ic(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ha(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function jn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Er|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(R(153));if(t.child!==null){for(e=t.child,n=Kn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Kn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function tb(e,t,n){switch(t.tag){case 3:jv(t),xi();break;case 5:Q0(t);break;case 1:ot(t.type)&&ms(t);break;case 4:Dd(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ue(xs,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ue(ye,ye.current&1),t.flags|=128,null):n&t.child.childLanes?Cv(e,t,n):(ue(ye,ye.current&1),e=jn(e,t,n),e!==null?e.sibling:null);ue(ye,ye.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Tv(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ue(ye,ye.current),r)break;return null;case 22:case 23:return t.lanes=0,bv(e,t,n)}return jn(e,t,n)}var Pv,wu,Ev,kv;Pv=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};wu=function(){};Ev=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,mr(Jt.current);var o=null;switch(n){case"input":i=$c(e,i),r=$c(e,r),o=[];break;case"select":i=Se({},i,{value:void 0}),r=Se({},r,{value:void 0}),o=[];break;case"textarea":i=Wc(e,i),r=Wc(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=fs)}qc(n,r);var a;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var s=i[u];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(To.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(s=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==s&&(l!=null||s!=null))if(u==="style")if(s){for(a in s)!s.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&s[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(To.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&fe("scroll",e),o||s===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};kv=function(e,t,n,r){n!==r&&(t.flags|=4)};function qi(e,t){if(!xe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ue(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function nb(e,t,n){var r=t.pendingProps;switch(Md(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ue(t),null;case 1:return ot(t.type)&&hs(),Ue(t),null;case 3:return r=t.stateNode,wi(),me(it),me(Ke),Bd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ya(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Nt!==null&&(ku(Nt),Nt=null))),wu(e,t),Ue(t),null;case 5:Nd(t);var i=mr(Vo.current);if(n=t.type,e!==null&&t.stateNode!=null)Ev(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(R(166));return Ue(t),null}if(e=mr(Jt.current),ya(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Kt]=t,r[Io]=o,e=(t.mode&1)!==0,n){case"dialog":fe("cancel",r),fe("close",r);break;case"iframe":case"object":case"embed":fe("load",r);break;case"video":case"audio":for(i=0;i<io.length;i++)fe(io[i],r);break;case"source":fe("error",r);break;case"img":case"image":case"link":fe("error",r),fe("load",r);break;case"details":fe("toggle",r);break;case"input":df(r,o),fe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},fe("invalid",r);break;case"textarea":ff(r,o),fe("invalid",r)}qc(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var s=o[a];a==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&xa(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&xa(r.textContent,s,e),i=["children",""+s]):To.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&fe("scroll",r)}switch(n){case"input":ua(r),pf(r,o,!0);break;case"textarea":ua(r),hf(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=fs)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=n0(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Kt]=t,e[Io]=r,Pv(e,t,!1,!1),t.stateNode=e;e:{switch(a=Yc(n,r),n){case"dialog":fe("cancel",e),fe("close",e),i=r;break;case"iframe":case"object":case"embed":fe("load",e),i=r;break;case"video":case"audio":for(i=0;i<io.length;i++)fe(io[i],e);i=r;break;case"source":fe("error",e),i=r;break;case"img":case"image":case"link":fe("error",e),fe("load",e),i=r;break;case"details":fe("toggle",e),i=r;break;case"input":df(e,r),i=$c(e,r),fe("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Se({},r,{value:void 0}),fe("invalid",e);break;case"textarea":ff(e,r),i=Wc(e,r),fe("invalid",e);break;default:i=r}qc(n,i),s=i;for(o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="style"?o0(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&r0(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Po(e,l):typeof l=="number"&&Po(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(To.hasOwnProperty(o)?l!=null&&o==="onScroll"&&fe("scroll",e):l!=null&&gd(e,o,l,a))}switch(n){case"input":ua(e),pf(e,r,!1);break;case"textarea":ua(e),hf(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Zn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?si(e,!!r.multiple,o,!1):r.defaultValue!=null&&si(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=fs)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ue(t),null;case 6:if(e&&t.stateNode!=null)kv(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(R(166));if(n=mr(Vo.current),mr(Jt.current),ya(t)){if(r=t.stateNode,n=t.memoizedProps,r[Kt]=t,(o=r.nodeValue!==n)&&(e=ht,e!==null))switch(e.tag){case 3:xa(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&xa(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Kt]=t,t.stateNode=r}return Ue(t),null;case 13:if(me(ye),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(xe&&ft!==null&&t.mode&1&&!(t.flags&128))G0(),xi(),t.flags|=98560,o=!1;else if(o=ya(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(R(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(R(317));o[Kt]=t}else xi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ue(t),o=!1}else Nt!==null&&(ku(Nt),Nt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ye.current&1?Me===0&&(Me=3):Zd())),t.updateQueue!==null&&(t.flags|=4),Ue(t),null);case 4:return wi(),wu(e,t),e===null&&_o(t.stateNode.containerInfo),Ue(t),null;case 10:return Id(t.type._context),Ue(t),null;case 17:return ot(t.type)&&hs(),Ue(t),null;case 19:if(me(ye),o=t.memoizedState,o===null)return Ue(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)qi(o,!1);else{if(Me!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=bs(e),a!==null){for(t.flags|=128,qi(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ue(ye,ye.current&1|2),t.child}e=e.sibling}o.tail!==null&&Pe()>Si&&(t.flags|=128,r=!0,qi(o,!1),t.lanes=4194304)}else{if(!r)if(e=bs(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),qi(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!xe)return Ue(t),null}else 2*Pe()-o.renderingStartTime>Si&&n!==1073741824&&(t.flags|=128,r=!0,qi(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Pe(),t.sibling=null,n=ye.current,ue(ye,r?n&1|2:n&1),t):(Ue(t),null);case 22:case 23:return Qd(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?dt&1073741824&&(Ue(t),t.subtreeFlags&6&&(t.flags|=8192)):Ue(t),null;case 24:return null;case 25:return null}throw Error(R(156,t.tag))}function rb(e,t){switch(Md(t),t.tag){case 1:return ot(t.type)&&hs(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return wi(),me(it),me(Ke),Bd(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Nd(t),null;case 13:if(me(ye),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(R(340));xi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return me(ye),null;case 4:return wi(),null;case 10:return Id(t.type._context),null;case 22:case 23:return Qd(),null;case 24:return null;default:return null}}var Sa=!1,Ge=!1,ib=typeof WeakSet=="function"?WeakSet:Set,$=null;function Jr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ce(e,t,r)}else n.current=null}function bu(e,t,n){try{n()}catch(r){Ce(e,t,r)}}var rh=!1;function ob(e,t){if(iu=us,e=_0(),zd(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,s=-1,l=-1,u=0,d=0,p=e,f=null;t:for(;;){for(var v;p!==n||i!==0&&p.nodeType!==3||(s=a+i),p!==o||r!==0&&p.nodeType!==3||(l=a+r),p.nodeType===3&&(a+=p.nodeValue.length),(v=p.firstChild)!==null;)f=p,p=v;for(;;){if(p===e)break t;if(f===n&&++u===i&&(s=a),f===o&&++d===r&&(l=a),(v=p.nextSibling)!==null)break;p=f,f=p.parentNode}p=v}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(ou={focusedElem:e,selectionRange:n},us=!1,$=t;$!==null;)if(t=$,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,$=e;else for(;$!==null;){t=$;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var y=x.memoizedProps,b=x.memoizedState,g=t.stateNode,h=g.getSnapshotBeforeUpdate(t.elementType===t.type?y:Vt(t.type,y),b);g.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(R(163))}}catch(w){Ce(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,$=e;break}$=t.return}return x=rh,rh=!1,x}function mo(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&bu(t,n,o)}i=i.next}while(i!==r)}}function al(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Su(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function zv(e){var t=e.alternate;t!==null&&(e.alternate=null,zv(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Kt],delete t[Io],delete t[lu],delete t[F2],delete t[$2])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Av(e){return e.tag===5||e.tag===3||e.tag===4}function ih(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Av(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ju(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=fs));else if(r!==4&&(e=e.child,e!==null))for(ju(e,t,n),e=e.sibling;e!==null;)ju(e,t,n),e=e.sibling}function Cu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Cu(e,t,n),e=e.sibling;e!==null;)Cu(e,t,n),e=e.sibling}var Ne=null,Dt=!1;function zn(e,t,n){for(n=n.child;n!==null;)Mv(e,t,n),n=n.sibling}function Mv(e,t,n){if(Zt&&typeof Zt.onCommitFiberUnmount=="function")try{Zt.onCommitFiberUnmount(Zs,n)}catch{}switch(n.tag){case 5:Ge||Jr(n,t);case 6:var r=Ne,i=Dt;Ne=null,zn(e,t,n),Ne=r,Dt=i,Ne!==null&&(Dt?(e=Ne,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ne.removeChild(n.stateNode));break;case 18:Ne!==null&&(Dt?(e=Ne,n=n.stateNode,e.nodeType===8?Ql(e.parentNode,n):e.nodeType===1&&Ql(e,n),Ao(e)):Ql(Ne,n.stateNode));break;case 4:r=Ne,i=Dt,Ne=n.stateNode.containerInfo,Dt=!0,zn(e,t,n),Ne=r,Dt=i;break;case 0:case 11:case 14:case 15:if(!Ge&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&bu(n,t,a),i=i.next}while(i!==r)}zn(e,t,n);break;case 1:if(!Ge&&(Jr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){Ce(n,t,s)}zn(e,t,n);break;case 21:zn(e,t,n);break;case 22:n.mode&1?(Ge=(r=Ge)||n.memoizedState!==null,zn(e,t,n),Ge=r):zn(e,t,n);break;default:zn(e,t,n)}}function oh(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new ib),t.forEach(function(r){var i=hb.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Rt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,s=a;e:for(;s!==null;){switch(s.tag){case 5:Ne=s.stateNode,Dt=!1;break e;case 3:Ne=s.stateNode.containerInfo,Dt=!0;break e;case 4:Ne=s.stateNode.containerInfo,Dt=!0;break e}s=s.return}if(Ne===null)throw Error(R(160));Mv(o,a,i),Ne=null,Dt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Ce(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Lv(t,e),t=t.sibling}function Lv(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Rt(t,e),Gt(e),r&4){try{mo(3,e,e.return),al(3,e)}catch(y){Ce(e,e.return,y)}try{mo(5,e,e.return)}catch(y){Ce(e,e.return,y)}}break;case 1:Rt(t,e),Gt(e),r&512&&n!==null&&Jr(n,n.return);break;case 5:if(Rt(t,e),Gt(e),r&512&&n!==null&&Jr(n,n.return),e.flags&32){var i=e.stateNode;try{Po(i,"")}catch(y){Ce(e,e.return,y)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&e0(i,o),Yc(s,a);var u=Yc(s,o);for(a=0;a<l.length;a+=2){var d=l[a],p=l[a+1];d==="style"?o0(i,p):d==="dangerouslySetInnerHTML"?r0(i,p):d==="children"?Po(i,p):gd(i,d,p,u)}switch(s){case"input":Hc(i,o);break;case"textarea":t0(i,o);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var v=o.value;v!=null?si(i,!!o.multiple,v,!1):f!==!!o.multiple&&(o.defaultValue!=null?si(i,!!o.multiple,o.defaultValue,!0):si(i,!!o.multiple,o.multiple?[]:"",!1))}i[Io]=o}catch(y){Ce(e,e.return,y)}}break;case 6:if(Rt(t,e),Gt(e),r&4){if(e.stateNode===null)throw Error(R(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(y){Ce(e,e.return,y)}}break;case 3:if(Rt(t,e),Gt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ao(t.containerInfo)}catch(y){Ce(e,e.return,y)}break;case 4:Rt(t,e),Gt(e);break;case 13:Rt(t,e),Gt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Kd=Pe())),r&4&&oh(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(Ge=(u=Ge)||d,Rt(t,e),Ge=u):Rt(t,e),Gt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for($=e,d=e.child;d!==null;){for(p=$=d;$!==null;){switch(f=$,v=f.child,f.tag){case 0:case 11:case 14:case 15:mo(4,f,f.return);break;case 1:Jr(f,f.return);var x=f.stateNode;if(typeof x.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(y){Ce(r,n,y)}}break;case 5:Jr(f,f.return);break;case 22:if(f.memoizedState!==null){sh(p);continue}}v!==null?(v.return=f,$=v):sh(p)}d=d.sibling}e:for(d=null,p=e;;){if(p.tag===5){if(d===null){d=p;try{i=p.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=p.stateNode,l=p.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=i0("display",a))}catch(y){Ce(e,e.return,y)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(y){Ce(e,e.return,y)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Rt(t,e),Gt(e),r&4&&oh(e);break;case 21:break;default:Rt(t,e),Gt(e)}}function Gt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Av(n)){var r=n;break e}n=n.return}throw Error(R(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Po(i,""),r.flags&=-33);var o=ih(e);Cu(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,s=ih(e);ju(e,s,a);break;default:throw Error(R(161))}}catch(l){Ce(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function ab(e,t,n){$=e,_v(e)}function _v(e,t,n){for(var r=(e.mode&1)!==0;$!==null;){var i=$,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||Sa;if(!a){var s=i.alternate,l=s!==null&&s.memoizedState!==null||Ge;s=Sa;var u=Ge;if(Sa=a,(Ge=l)&&!u)for($=i;$!==null;)a=$,l=a.child,a.tag===22&&a.memoizedState!==null?lh(i):l!==null?(l.return=a,$=l):lh(i);for(;o!==null;)$=o,_v(o),o=o.sibling;$=i,Sa=s,Ge=u}ah(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,$=o):ah(e)}}function ah(e){for(;$!==null;){var t=$;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ge||al(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ge)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Vt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Uf(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Uf(t,a,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&Ao(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(R(163))}Ge||t.flags&512&&Su(t)}catch(f){Ce(t,t.return,f)}}if(t===e){$=null;break}if(n=t.sibling,n!==null){n.return=t.return,$=n;break}$=t.return}}function sh(e){for(;$!==null;){var t=$;if(t===e){$=null;break}var n=t.sibling;if(n!==null){n.return=t.return,$=n;break}$=t.return}}function lh(e){for(;$!==null;){var t=$;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{al(4,t)}catch(l){Ce(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){Ce(t,i,l)}}var o=t.return;try{Su(t)}catch(l){Ce(t,o,l)}break;case 5:var a=t.return;try{Su(t)}catch(l){Ce(t,a,l)}}}catch(l){Ce(t,t.return,l)}if(t===e){$=null;break}var s=t.sibling;if(s!==null){s.return=t.return,$=s;break}$=t.return}}var sb=Math.ceil,Cs=Tn.ReactCurrentDispatcher,qd=Tn.ReactCurrentOwner,At=Tn.ReactCurrentBatchConfig,oe=0,Ve=null,ke=null,Be=0,dt=0,ei=rr(0),Me=0,Fo=null,Er=0,sl=0,Yd=0,go=null,nt=null,Kd=0,Si=1/0,sn=null,Ts=!1,Tu=null,qn=null,ja=!1,Nn=null,Ps=0,vo=0,Pu=null,Ua=-1,Wa=0;function Qe(){return oe&6?Pe():Ua!==-1?Ua:Ua=Pe()}function Yn(e){return e.mode&1?oe&2&&Be!==0?Be&-Be:U2.transition!==null?(Wa===0&&(Wa=v0()),Wa):(e=ce,e!==0||(e=window.event,e=e===void 0?16:C0(e.type)),e):1}function $t(e,t,n,r){if(50<vo)throw vo=0,Pu=null,Error(R(185));Zo(e,n,r),(!(oe&2)||e!==Ve)&&(e===Ve&&(!(oe&2)&&(sl|=n),Me===4&&Rn(e,Be)),at(e,r),n===1&&oe===0&&!(t.mode&1)&&(Si=Pe()+500,rl&&ir()))}function at(e,t){var n=e.callbackNode;Uw(e,t);var r=cs(e,e===Ve?Be:0);if(r===0)n!==null&&vf(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&vf(n),t===1)e.tag===0?H2(ch.bind(null,e)):H0(ch.bind(null,e)),N2(function(){!(oe&6)&&ir()}),n=null;else{switch(x0(r)){case 1:n=bd;break;case 4:n=m0;break;case 16:n=ls;break;case 536870912:n=g0;break;default:n=ls}n=Fv(n,Ov.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Ov(e,t){if(Ua=-1,Wa=0,oe&6)throw Error(R(327));var n=e.callbackNode;if(pi()&&e.callbackNode!==n)return null;var r=cs(e,e===Ve?Be:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Es(e,r);else{t=r;var i=oe;oe|=2;var o=Rv();(Ve!==e||Be!==t)&&(sn=null,Si=Pe()+500,yr(e,t));do try{ub();break}catch(s){Iv(e,s)}while(!0);Od(),Cs.current=o,oe=i,ke!==null?t=0:(Ve=null,Be=0,t=Me)}if(t!==0){if(t===2&&(i=Jc(e),i!==0&&(r=i,t=Eu(e,i))),t===1)throw n=Fo,yr(e,0),Rn(e,r),at(e,Pe()),n;if(t===6)Rn(e,r);else{if(i=e.current.alternate,!(r&30)&&!lb(i)&&(t=Es(e,r),t===2&&(o=Jc(e),o!==0&&(r=o,t=Eu(e,o))),t===1))throw n=Fo,yr(e,0),Rn(e,r),at(e,Pe()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(R(345));case 2:cr(e,nt,sn);break;case 3:if(Rn(e,r),(r&130023424)===r&&(t=Kd+500-Pe(),10<t)){if(cs(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Qe(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=su(cr.bind(null,e,nt,sn),t);break}cr(e,nt,sn);break;case 4:if(Rn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-Ft(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=Pe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*sb(r/1960))-r,10<r){e.timeoutHandle=su(cr.bind(null,e,nt,sn),r);break}cr(e,nt,sn);break;case 5:cr(e,nt,sn);break;default:throw Error(R(329))}}}return at(e,Pe()),e.callbackNode===n?Ov.bind(null,e):null}function Eu(e,t){var n=go;return e.current.memoizedState.isDehydrated&&(yr(e,t).flags|=256),e=Es(e,t),e!==2&&(t=nt,nt=n,t!==null&&ku(t)),e}function ku(e){nt===null?nt=e:nt.push.apply(nt,e)}function lb(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Ut(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Rn(e,t){for(t&=~Yd,t&=~sl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ft(t),r=1<<n;e[n]=-1,t&=~r}}function ch(e){if(oe&6)throw Error(R(327));pi();var t=cs(e,0);if(!(t&1))return at(e,Pe()),null;var n=Es(e,t);if(e.tag!==0&&n===2){var r=Jc(e);r!==0&&(t=r,n=Eu(e,r))}if(n===1)throw n=Fo,yr(e,0),Rn(e,t),at(e,Pe()),n;if(n===6)throw Error(R(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,cr(e,nt,sn),at(e,Pe()),null}function Xd(e,t){var n=oe;oe|=1;try{return e(t)}finally{oe=n,oe===0&&(Si=Pe()+500,rl&&ir())}}function kr(e){Nn!==null&&Nn.tag===0&&!(oe&6)&&pi();var t=oe;oe|=1;var n=At.transition,r=ce;try{if(At.transition=null,ce=1,e)return e()}finally{ce=r,At.transition=n,oe=t,!(oe&6)&&ir()}}function Qd(){dt=ei.current,me(ei)}function yr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,D2(n)),ke!==null)for(n=ke.return;n!==null;){var r=n;switch(Md(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&hs();break;case 3:wi(),me(it),me(Ke),Bd();break;case 5:Nd(r);break;case 4:wi();break;case 13:me(ye);break;case 19:me(ye);break;case 10:Id(r.type._context);break;case 22:case 23:Qd()}n=n.return}if(Ve=e,ke=e=Kn(e.current,null),Be=dt=t,Me=0,Fo=null,Yd=sl=Er=0,nt=go=null,hr!==null){for(t=0;t<hr.length;t++)if(n=hr[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}hr=null}return e}function Iv(e,t){do{var n=ke;try{if(Od(),Fa.current=js,Ss){for(var r=be.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ss=!1}if(Pr=0,Ie=Ae=be=null,ho=!1,Do=0,qd.current=null,n===null||n.return===null){Me=1,Fo=t,ke=null;break}e:{var o=e,a=n.return,s=n,l=t;if(t=Be,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=s,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var v=Xf(a);if(v!==null){v.flags&=-257,Qf(v,a,s,o,t),v.mode&1&&Kf(o,u,t),t=v,l=u;var x=t.updateQueue;if(x===null){var y=new Set;y.add(l),t.updateQueue=y}else x.add(l);break e}else{if(!(t&1)){Kf(o,u,t),Zd();break e}l=Error(R(426))}}else if(xe&&s.mode&1){var b=Xf(a);if(b!==null){!(b.flags&65536)&&(b.flags|=256),Qf(b,a,s,o,t),Ld(bi(l,s));break e}}o=l=bi(l,s),Me!==4&&(Me=2),go===null?go=[o]:go.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var g=xv(o,l,t);Hf(o,g);break e;case 1:s=l;var h=o.type,m=o.stateNode;if(!(o.flags&128)&&(typeof h.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(qn===null||!qn.has(m)))){o.flags|=65536,t&=-t,o.lanes|=t;var w=yv(o,s,t);Hf(o,w);break e}}o=o.return}while(o!==null)}Dv(n)}catch(S){t=S,ke===n&&n!==null&&(ke=n=n.return);continue}break}while(!0)}function Rv(){var e=Cs.current;return Cs.current=js,e===null?js:e}function Zd(){(Me===0||Me===3||Me===2)&&(Me=4),Ve===null||!(Er&268435455)&&!(sl&268435455)||Rn(Ve,Be)}function Es(e,t){var n=oe;oe|=2;var r=Rv();(Ve!==e||Be!==t)&&(sn=null,yr(e,t));do try{cb();break}catch(i){Iv(e,i)}while(!0);if(Od(),oe=n,Cs.current=r,ke!==null)throw Error(R(261));return Ve=null,Be=0,Me}function cb(){for(;ke!==null;)Vv(ke)}function ub(){for(;ke!==null&&!Iw();)Vv(ke)}function Vv(e){var t=Bv(e.alternate,e,dt);e.memoizedProps=e.pendingProps,t===null?Dv(e):ke=t,qd.current=null}function Dv(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=rb(n,t),n!==null){n.flags&=32767,ke=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Me=6,ke=null;return}}else if(n=nb(n,t,dt),n!==null){ke=n;return}if(t=t.sibling,t!==null){ke=t;return}ke=t=e}while(t!==null);Me===0&&(Me=5)}function cr(e,t,n){var r=ce,i=At.transition;try{At.transition=null,ce=1,db(e,t,n,r)}finally{At.transition=i,ce=r}return null}function db(e,t,n,r){do pi();while(Nn!==null);if(oe&6)throw Error(R(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(R(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Ww(e,o),e===Ve&&(ke=Ve=null,Be=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ja||(ja=!0,Fv(ls,function(){return pi(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=At.transition,At.transition=null;var a=ce;ce=1;var s=oe;oe|=4,qd.current=null,ob(e,n),Lv(n,e),M2(ou),us=!!iu,ou=iu=null,e.current=n,ab(n),Rw(),oe=s,ce=a,At.transition=o}else e.current=n;if(ja&&(ja=!1,Nn=e,Ps=i),o=e.pendingLanes,o===0&&(qn=null),Nw(n.stateNode),at(e,Pe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ts)throw Ts=!1,e=Tu,Tu=null,e;return Ps&1&&e.tag!==0&&pi(),o=e.pendingLanes,o&1?e===Pu?vo++:(vo=0,Pu=e):vo=0,ir(),null}function pi(){if(Nn!==null){var e=x0(Ps),t=At.transition,n=ce;try{if(At.transition=null,ce=16>e?16:e,Nn===null)var r=!1;else{if(e=Nn,Nn=null,Ps=0,oe&6)throw Error(R(331));var i=oe;for(oe|=4,$=e.current;$!==null;){var o=$,a=o.child;if($.flags&16){var s=o.deletions;if(s!==null){for(var l=0;l<s.length;l++){var u=s[l];for($=u;$!==null;){var d=$;switch(d.tag){case 0:case 11:case 15:mo(8,d,o)}var p=d.child;if(p!==null)p.return=d,$=p;else for(;$!==null;){d=$;var f=d.sibling,v=d.return;if(zv(d),d===u){$=null;break}if(f!==null){f.return=v,$=f;break}$=v}}}var x=o.alternate;if(x!==null){var y=x.child;if(y!==null){x.child=null;do{var b=y.sibling;y.sibling=null,y=b}while(y!==null)}}$=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,$=a;else e:for(;$!==null;){if(o=$,o.flags&2048)switch(o.tag){case 0:case 11:case 15:mo(9,o,o.return)}var g=o.sibling;if(g!==null){g.return=o.return,$=g;break e}$=o.return}}var h=e.current;for($=h;$!==null;){a=$;var m=a.child;if(a.subtreeFlags&2064&&m!==null)m.return=a,$=m;else e:for(a=h;$!==null;){if(s=$,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:al(9,s)}}catch(S){Ce(s,s.return,S)}if(s===a){$=null;break e}var w=s.sibling;if(w!==null){w.return=s.return,$=w;break e}$=s.return}}if(oe=i,ir(),Zt&&typeof Zt.onPostCommitFiberRoot=="function")try{Zt.onPostCommitFiberRoot(Zs,e)}catch{}r=!0}return r}finally{ce=n,At.transition=t}}return!1}function uh(e,t,n){t=bi(n,t),t=xv(e,t,1),e=Gn(e,t,1),t=Qe(),e!==null&&(Zo(e,1,t),at(e,t))}function Ce(e,t,n){if(e.tag===3)uh(e,e,n);else for(;t!==null;){if(t.tag===3){uh(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(qn===null||!qn.has(r))){e=bi(n,e),e=yv(t,e,1),t=Gn(t,e,1),e=Qe(),t!==null&&(Zo(t,1,e),at(t,e));break}}t=t.return}}function pb(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Qe(),e.pingedLanes|=e.suspendedLanes&n,Ve===e&&(Be&n)===n&&(Me===4||Me===3&&(Be&130023424)===Be&&500>Pe()-Kd?yr(e,0):Yd|=n),at(e,t)}function Nv(e,t){t===0&&(e.mode&1?(t=fa,fa<<=1,!(fa&130023424)&&(fa=4194304)):t=1);var n=Qe();e=Sn(e,t),e!==null&&(Zo(e,t,n),at(e,n))}function fb(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Nv(e,n)}function hb(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(R(314))}r!==null&&r.delete(t),Nv(e,n)}var Bv;Bv=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||it.current)rt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return rt=!1,tb(e,t,n);rt=!!(e.flags&131072)}else rt=!1,xe&&t.flags&1048576&&U0(t,vs,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ha(e,t),e=t.pendingProps;var i=vi(t,Ke.current);di(t,n),i=$d(null,t,r,e,i,n);var o=Hd();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ot(r)?(o=!0,ms(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Vd(t),i.updater=ol,t.stateNode=i,i._reactInternals=t,hu(t,r,e,n),t=vu(null,t,r,!0,o,n)):(t.tag=0,xe&&o&&Ad(t),Xe(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ha(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=gb(r),e=Vt(r,e),i){case 0:t=gu(null,t,r,e,n);break e;case 1:t=eh(null,t,r,e,n);break e;case 11:t=Zf(null,t,r,e,n);break e;case 14:t=Jf(null,t,r,Vt(r.type,e),n);break e}throw Error(R(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Vt(r,i),gu(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Vt(r,i),eh(e,t,r,i,n);case 3:e:{if(jv(t),e===null)throw Error(R(387));r=t.pendingProps,o=t.memoizedState,i=o.element,X0(e,t),ws(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=bi(Error(R(423)),t),t=th(e,t,r,n,i);break e}else if(r!==i){i=bi(Error(R(424)),t),t=th(e,t,r,n,i);break e}else for(ft=Wn(t.stateNode.containerInfo.firstChild),ht=t,xe=!0,Nt=null,n=Y0(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(xi(),r===i){t=jn(e,t,n);break e}Xe(e,t,r,n)}t=t.child}return t;case 5:return Q0(t),e===null&&du(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,au(r,i)?a=null:o!==null&&au(r,o)&&(t.flags|=32),Sv(e,t),Xe(e,t,a,n),t.child;case 6:return e===null&&du(t),null;case 13:return Cv(e,t,n);case 4:return Dd(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=yi(t,null,r,n):Xe(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Vt(r,i),Zf(e,t,r,i,n);case 7:return Xe(e,t,t.pendingProps,n),t.child;case 8:return Xe(e,t,t.pendingProps.children,n),t.child;case 12:return Xe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,ue(xs,r._currentValue),r._currentValue=a,o!==null)if(Ut(o.value,a)){if(o.children===i.children&&!it.current){t=jn(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){a=o.child;for(var l=s.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=hn(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),pu(o.return,n,t),s.lanes|=n;break}l=l.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(R(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),pu(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}Xe(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,di(t,n),i=Mt(i),r=r(i),t.flags|=1,Xe(e,t,r,n),t.child;case 14:return r=t.type,i=Vt(r,t.pendingProps),i=Vt(r.type,i),Jf(e,t,r,i,n);case 15:return wv(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Vt(r,i),Ha(e,t),t.tag=1,ot(r)?(e=!0,ms(t)):e=!1,di(t,n),vv(t,r,i),hu(t,r,i,n),vu(null,t,r,!0,e,n);case 19:return Tv(e,t,n);case 22:return bv(e,t,n)}throw Error(R(156,t.tag))};function Fv(e,t){return h0(e,t)}function mb(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function zt(e,t,n,r){return new mb(e,t,n,r)}function Jd(e){return e=e.prototype,!(!e||!e.isReactComponent)}function gb(e){if(typeof e=="function")return Jd(e)?1:0;if(e!=null){if(e=e.$$typeof,e===xd)return 11;if(e===yd)return 14}return 2}function Kn(e,t){var n=e.alternate;return n===null?(n=zt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ga(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")Jd(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Ur:return wr(n.children,i,o,t);case vd:a=8,i|=8;break;case Dc:return e=zt(12,n,t,i|2),e.elementType=Dc,e.lanes=o,e;case Nc:return e=zt(13,n,t,i),e.elementType=Nc,e.lanes=o,e;case Bc:return e=zt(19,n,t,i),e.elementType=Bc,e.lanes=o,e;case Qg:return ll(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Kg:a=10;break e;case Xg:a=9;break e;case xd:a=11;break e;case yd:a=14;break e;case _n:a=16,r=null;break e}throw Error(R(130,e==null?e:typeof e,""))}return t=zt(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function wr(e,t,n,r){return e=zt(7,e,r,t),e.lanes=n,e}function ll(e,t,n,r){return e=zt(22,e,r,t),e.elementType=Qg,e.lanes=n,e.stateNode={isHidden:!1},e}function oc(e,t,n){return e=zt(6,e,null,t),e.lanes=n,e}function ac(e,t,n){return t=zt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function vb(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Bl(0),this.expirationTimes=Bl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Bl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ep(e,t,n,r,i,o,a,s,l){return e=new vb(e,t,n,s,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=zt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Vd(o),e}function xb(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Hr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function $v(e){if(!e)return Jn;e=e._reactInternals;e:{if(Lr(e)!==e||e.tag!==1)throw Error(R(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ot(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(R(171))}if(e.tag===1){var n=e.type;if(ot(n))return $0(e,n,t)}return t}function Hv(e,t,n,r,i,o,a,s,l){return e=ep(n,r,!0,e,i,o,a,s,l),e.context=$v(null),n=e.current,r=Qe(),i=Yn(n),o=hn(r,i),o.callback=t??null,Gn(n,o,i),e.current.lanes=i,Zo(e,i,r),at(e,r),e}function cl(e,t,n,r){var i=t.current,o=Qe(),a=Yn(i);return n=$v(n),t.context===null?t.context=n:t.pendingContext=n,t=hn(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Gn(i,t,a),e!==null&&($t(e,i,a,o),Ba(e,i,a)),a}function ks(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function dh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function tp(e,t){dh(e,t),(e=e.alternate)&&dh(e,t)}function yb(){return null}var Uv=typeof reportError=="function"?reportError:function(e){console.error(e)};function np(e){this._internalRoot=e}ul.prototype.render=np.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(R(409));cl(e,t,null,null)};ul.prototype.unmount=np.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;kr(function(){cl(null,e,null,null)}),t[bn]=null}};function ul(e){this._internalRoot=e}ul.prototype.unstable_scheduleHydration=function(e){if(e){var t=b0();e={blockedOn:null,target:e,priority:t};for(var n=0;n<In.length&&t!==0&&t<In[n].priority;n++);In.splice(n,0,e),n===0&&j0(e)}};function rp(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function dl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ph(){}function wb(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=ks(a);o.call(u)}}var a=Hv(t,r,e,0,null,!1,!1,"",ph);return e._reactRootContainer=a,e[bn]=a.current,_o(e.nodeType===8?e.parentNode:e),kr(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var u=ks(l);s.call(u)}}var l=ep(e,0,!1,null,null,!1,!1,"",ph);return e._reactRootContainer=l,e[bn]=l.current,_o(e.nodeType===8?e.parentNode:e),kr(function(){cl(t,l,n,r)}),l}function pl(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var s=i;i=function(){var l=ks(a);s.call(l)}}cl(t,a,e,i)}else a=wb(n,t,e,i,r);return ks(a)}y0=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ro(t.pendingLanes);n!==0&&(Sd(t,n|1),at(t,Pe()),!(oe&6)&&(Si=Pe()+500,ir()))}break;case 13:kr(function(){var r=Sn(e,1);if(r!==null){var i=Qe();$t(r,e,1,i)}}),tp(e,1)}};jd=function(e){if(e.tag===13){var t=Sn(e,134217728);if(t!==null){var n=Qe();$t(t,e,134217728,n)}tp(e,134217728)}};w0=function(e){if(e.tag===13){var t=Yn(e),n=Sn(e,t);if(n!==null){var r=Qe();$t(n,e,t,r)}tp(e,t)}};b0=function(){return ce};S0=function(e,t){var n=ce;try{return ce=e,t()}finally{ce=n}};Xc=function(e,t,n){switch(t){case"input":if(Hc(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=nl(r);if(!i)throw Error(R(90));Jg(r),Hc(r,i)}}}break;case"textarea":t0(e,n);break;case"select":t=n.value,t!=null&&si(e,!!n.multiple,t,!1)}};l0=Xd;c0=kr;var bb={usingClientEntryPoint:!1,Events:[ea,Yr,nl,a0,s0,Xd]},Yi={findFiberByHostInstance:fr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Sb={bundleType:Yi.bundleType,version:Yi.version,rendererPackageName:Yi.rendererPackageName,rendererConfig:Yi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Tn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=p0(e),e===null?null:e.stateNode},findFiberByHostInstance:Yi.findFiberByHostInstance||yb,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ca=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ca.isDisabled&&Ca.supportsFiber)try{Zs=Ca.inject(Sb),Zt=Ca}catch{}}yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=bb;yt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!rp(t))throw Error(R(200));return xb(e,t,null,n)};yt.createRoot=function(e,t){if(!rp(e))throw Error(R(299));var n=!1,r="",i=Uv;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,!1,r,i),e[bn]=t.current,_o(e.nodeType===8?e.parentNode:e),new np(t)};yt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(R(188)):(e=Object.keys(e).join(","),Error(R(268,e)));return e=p0(t),e=e===null?null:e.stateNode,e};yt.flushSync=function(e){return kr(e)};yt.hydrate=function(e,t,n){if(!dl(t))throw Error(R(200));return pl(null,e,t,!0,n)};yt.hydrateRoot=function(e,t,n){if(!rp(e))throw Error(R(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=Uv;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=Hv(t,null,e,1,n??null,i,!1,o,a),e[bn]=t.current,_o(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new ul(t)};yt.render=function(e,t,n){if(!dl(t))throw Error(R(200));return pl(null,e,t,!1,n)};yt.unmountComponentAtNode=function(e){if(!dl(e))throw Error(R(40));return e._reactRootContainer?(kr(function(){pl(null,null,e,!1,function(){e._reactRootContainer=null,e[bn]=null})}),!0):!1};yt.unstable_batchedUpdates=Xd;yt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!dl(n))throw Error(R(200));if(e==null||e._reactInternals===void 0)throw Error(R(38));return pl(e,t,n,!1,r)};yt.version="18.3.1-next-f1338f8080-20240426";function Wv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Wv)}catch(e){console.error(e)}}Wv(),Wg.exports=yt;var jb=Wg.exports,Gv,fh=jb;Gv=fh.createRoot,fh.hydrateRoot;/**
 * @remix-run/router v1.19.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function $o(){return $o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},$o.apply(this,arguments)}var Bn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Bn||(Bn={}));const hh="popstate";function Cb(e){e===void 0&&(e={});function t(i,o){let{pathname:a="/",search:s="",hash:l=""}=_r(i.location.hash.substr(1));return!a.startsWith("/")&&!a.startsWith(".")&&(a="/"+a),zu("",{pathname:a,search:s,hash:l},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(i,o){let a=i.document.querySelector("base"),s="";if(a&&a.getAttribute("href")){let l=i.location.href,u=l.indexOf("#");s=u===-1?l:l.slice(0,u)}return s+"#"+(typeof o=="string"?o:zs(o))}function r(i,o){ip(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(o)+")")}return Pb(t,n,r,e)}function ze(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function ip(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Tb(){return Math.random().toString(36).substr(2,8)}function mh(e,t){return{usr:e.state,key:e.key,idx:t}}function zu(e,t,n,r){return n===void 0&&(n=null),$o({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?_r(t):t,{state:n,key:t&&t.key||r||Tb()})}function zs(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function _r(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Pb(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,a=i.history,s=Bn.Pop,l=null,u=d();u==null&&(u=0,a.replaceState($o({},a.state,{idx:u}),""));function d(){return(a.state||{idx:null}).idx}function p(){s=Bn.Pop;let b=d(),g=b==null?null:b-u;u=b,l&&l({action:s,location:y.location,delta:g})}function f(b,g){s=Bn.Push;let h=zu(y.location,b,g);n&&n(h,b),u=d()+1;let m=mh(h,u),w=y.createHref(h);try{a.pushState(m,"",w)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;i.location.assign(w)}o&&l&&l({action:s,location:y.location,delta:1})}function v(b,g){s=Bn.Replace;let h=zu(y.location,b,g);n&&n(h,b),u=d();let m=mh(h,u),w=y.createHref(h);a.replaceState(m,"",w),o&&l&&l({action:s,location:y.location,delta:0})}function x(b){let g=i.location.origin!=="null"?i.location.origin:i.location.href,h=typeof b=="string"?b:zs(b);return h=h.replace(/ $/,"%20"),ze(g,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,g)}let y={get action(){return s},get location(){return e(i,a)},listen(b){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(hh,p),l=b,()=>{i.removeEventListener(hh,p),l=null}},createHref(b){return t(i,b)},createURL:x,encodeLocation(b){let g=x(b);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:f,replace:v,go(b){return a.go(b)}};return y}var gh;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(gh||(gh={}));function Eb(e,t,n){return n===void 0&&(n="/"),kb(e,t,n,!1)}function kb(e,t,n,r){let i=typeof t=="string"?_r(t):t,o=op(i.pathname||"/",n);if(o==null)return null;let a=qv(e);zb(a);let s=null;for(let l=0;s==null&&l<a.length;++l){let u=Bb(o);s=Db(a[l],u,r)}return s}function qv(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,a,s)=>{let l={relativePath:s===void 0?o.path||"":s,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};l.relativePath.startsWith("/")&&(ze(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Xn([r,l.relativePath]),d=n.concat(l);o.children&&o.children.length>0&&(ze(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),qv(o.children,t,d,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:Rb(u,o.index),routesMeta:d})};return e.forEach((o,a)=>{var s;if(o.path===""||!((s=o.path)!=null&&s.includes("?")))i(o,a);else for(let l of Yv(o.path))i(o,a,l)}),t}function Yv(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let a=Yv(r.join("/")),s=[];return s.push(...a.map(l=>l===""?o:[o,l].join("/"))),i&&s.push(...a),s.map(l=>e.startsWith("/")&&l===""?"/":l)}function zb(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Vb(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Ab=/^:[\w-]+$/,Mb=3,Lb=2,_b=1,Ob=10,Ib=-2,vh=e=>e==="*";function Rb(e,t){let n=e.split("/"),r=n.length;return n.some(vh)&&(r+=Ib),t&&(r+=Lb),n.filter(i=>!vh(i)).reduce((i,o)=>i+(Ab.test(o)?Mb:o===""?_b:Ob),r)}function Vb(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function Db(e,t,n){let{routesMeta:r}=e,i={},o="/",a=[];for(let s=0;s<r.length;++s){let l=r[s],u=s===r.length-1,d=o==="/"?t:t.slice(o.length)||"/",p=xh({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},d),f=l.route;if(!p&&u&&n&&!r[r.length-1].route.index&&(p=xh({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},d)),!p)return null;Object.assign(i,p.params),a.push({params:i,pathname:Xn([o,p.pathname]),pathnameBase:Ub(Xn([o,p.pathnameBase])),route:f}),p.pathnameBase!=="/"&&(o=Xn([o,p.pathnameBase]))}return a}function xh(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Nb(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce((u,d,p)=>{let{paramName:f,isOptional:v}=d;if(f==="*"){let y=s[p]||"";a=o.slice(0,o.length-y.length).replace(/(.)\/+$/,"$1")}const x=s[p];return v&&!x?u[f]=void 0:u[f]=(x||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:a,pattern:e}}function Nb(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),ip(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,s,l)=>(r.push({paramName:s,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function Bb(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return ip(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function op(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Fb(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?_r(e):e;return{pathname:n?n.startsWith("/")?n:$b(n,t):t,search:Wb(r),hash:Gb(i)}}function $b(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function sc(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Hb(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Kv(e,t){let n=Hb(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Xv(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=_r(e):(i=$o({},e),ze(!i.pathname||!i.pathname.includes("?"),sc("?","pathname","search",i)),ze(!i.pathname||!i.pathname.includes("#"),sc("#","pathname","hash",i)),ze(!i.search||!i.search.includes("#"),sc("#","search","hash",i)));let o=e===""||i.pathname==="",a=o?"/":i.pathname,s;if(a==null)s=n;else{let p=t.length-1;if(!r&&a.startsWith("..")){let f=a.split("/");for(;f[0]==="..";)f.shift(),p-=1;i.pathname=f.join("/")}s=p>=0?t[p]:"/"}let l=Fb(i,s),u=a&&a!=="/"&&a.endsWith("/"),d=(o||a===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||d)&&(l.pathname+="/"),l}const Xn=e=>e.join("/").replace(/\/\/+/g,"/"),Ub=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Wb=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Gb=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function qb(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Qv=["post","put","patch","delete"];new Set(Qv);const Yb=["get",...Qv];new Set(Yb);/**
 * React Router v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ho(){return Ho=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ho.apply(this,arguments)}const ap=T.createContext(null),Kb=T.createContext(null),Or=T.createContext(null),fl=T.createContext(null),Ir=T.createContext({outlet:null,matches:[],isDataRoute:!1}),Zv=T.createContext(null);function Xb(e,t){let{relative:n}=t===void 0?{}:t;na()||ze(!1);let{basename:r,navigator:i}=T.useContext(Or),{hash:o,pathname:a,search:s}=e1(e,{relative:n}),l=a;return r!=="/"&&(l=a==="/"?r:Xn([r,a])),i.createHref({pathname:l,search:s,hash:o})}function na(){return T.useContext(fl)!=null}function Rr(){return na()||ze(!1),T.useContext(fl).location}function Jv(e){T.useContext(Or).static||T.useLayoutEffect(e)}function Qb(){let{isDataRoute:e}=T.useContext(Ir);return e?uS():Zb()}function Zb(){na()||ze(!1);let e=T.useContext(ap),{basename:t,future:n,navigator:r}=T.useContext(Or),{matches:i}=T.useContext(Ir),{pathname:o}=Rr(),a=JSON.stringify(Kv(i,n.v7_relativeSplatPath)),s=T.useRef(!1);return Jv(()=>{s.current=!0}),T.useCallback(function(u,d){if(d===void 0&&(d={}),!s.current)return;if(typeof u=="number"){r.go(u);return}let p=Xv(u,JSON.parse(a),o,d.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:Xn([t,p.pathname])),(d.replace?r.replace:r.push)(p,d.state,d)},[t,r,a,o,e])}function e1(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=T.useContext(Or),{matches:i}=T.useContext(Ir),{pathname:o}=Rr(),a=JSON.stringify(Kv(i,r.v7_relativeSplatPath));return T.useMemo(()=>Xv(e,JSON.parse(a),o,n==="path"),[e,a,o,n])}function Jb(e,t){return eS(e,t)}function eS(e,t,n,r){na()||ze(!1);let{navigator:i}=T.useContext(Or),{matches:o}=T.useContext(Ir),a=o[o.length-1],s=a?a.params:{};a&&a.pathname;let l=a?a.pathnameBase:"/";a&&a.route;let u=Rr(),d;if(t){var p;let b=typeof t=="string"?_r(t):t;l==="/"||(p=b.pathname)!=null&&p.startsWith(l)||ze(!1),d=b}else d=u;let f=d.pathname||"/",v=f;if(l!=="/"){let b=l.replace(/^\//,"").split("/");v="/"+f.replace(/^\//,"").split("/").slice(b.length).join("/")}let x=Eb(e,{pathname:v}),y=oS(x&&x.map(b=>Object.assign({},b,{params:Object.assign({},s,b.params),pathname:Xn([l,i.encodeLocation?i.encodeLocation(b.pathname).pathname:b.pathname]),pathnameBase:b.pathnameBase==="/"?l:Xn([l,i.encodeLocation?i.encodeLocation(b.pathnameBase).pathname:b.pathnameBase])})),o,n,r);return t&&y?T.createElement(fl.Provider,{value:{location:Ho({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Bn.Pop}},y):y}function tS(){let e=cS(),t=qb(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return T.createElement(T.Fragment,null,T.createElement("h2",null,"Unexpected Application Error!"),T.createElement("h3",{style:{fontStyle:"italic"}},t),n?T.createElement("pre",{style:i},n):null,null)}const nS=T.createElement(tS,null);class rS extends T.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?T.createElement(Ir.Provider,{value:this.props.routeContext},T.createElement(Zv.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function iS(e){let{routeContext:t,match:n,children:r}=e,i=T.useContext(ap);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),T.createElement(Ir.Provider,{value:t},r)}function oS(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if(!n)return null;if(n.errors)e=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let a=e,s=(i=n)==null?void 0:i.errors;if(s!=null){let d=a.findIndex(p=>p.route.id&&(s==null?void 0:s[p.route.id])!==void 0);d>=0||ze(!1),a=a.slice(0,Math.min(a.length,d+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<a.length;d++){let p=a[d];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(u=d),p.route.id){let{loaderData:f,errors:v}=n,x=p.route.loader&&f[p.route.id]===void 0&&(!v||v[p.route.id]===void 0);if(p.route.lazy||x){l=!0,u>=0?a=a.slice(0,u+1):a=[a[0]];break}}}return a.reduceRight((d,p,f)=>{let v,x=!1,y=null,b=null;n&&(v=s&&p.route.id?s[p.route.id]:void 0,y=p.route.errorElement||nS,l&&(u<0&&f===0?(x=!0,b=null):u===f&&(x=!0,b=p.route.hydrateFallbackElement||null)));let g=t.concat(a.slice(0,f+1)),h=()=>{let m;return v?m=y:x?m=b:p.route.Component?m=T.createElement(p.route.Component,null):p.route.element?m=p.route.element:m=d,T.createElement(iS,{match:p,routeContext:{outlet:d,matches:g,isDataRoute:n!=null},children:m})};return n&&(p.route.ErrorBoundary||p.route.errorElement||f===0)?T.createElement(rS,{location:n.location,revalidation:n.revalidation,component:y,error:v,children:h(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):h()},null)}var t1=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(t1||{}),As=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(As||{});function aS(e){let t=T.useContext(ap);return t||ze(!1),t}function sS(e){let t=T.useContext(Kb);return t||ze(!1),t}function lS(e){let t=T.useContext(Ir);return t||ze(!1),t}function n1(e){let t=lS(),n=t.matches[t.matches.length-1];return n.route.id||ze(!1),n.route.id}function cS(){var e;let t=T.useContext(Zv),n=sS(As.UseRouteError),r=n1(As.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function uS(){let{router:e}=aS(t1.UseNavigateStable),t=n1(As.UseNavigateStable),n=T.useRef(!1);return Jv(()=>{n.current=!0}),T.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Ho({fromRouteId:t},o)))},[e,t])}function ur(e){ze(!1)}function dS(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Bn.Pop,navigator:o,static:a=!1,future:s}=e;na()&&ze(!1);let l=t.replace(/^\/*/,"/"),u=T.useMemo(()=>({basename:l,navigator:o,static:a,future:Ho({v7_relativeSplatPath:!1},s)}),[l,s,o,a]);typeof r=="string"&&(r=_r(r));let{pathname:d="/",search:p="",hash:f="",state:v=null,key:x="default"}=r,y=T.useMemo(()=>{let b=op(d,l);return b==null?null:{location:{pathname:b,search:p,hash:f,state:v,key:x},navigationType:i}},[l,d,p,f,v,x,i]);return y==null?null:T.createElement(Or.Provider,{value:u},T.createElement(fl.Provider,{children:n,value:y}))}function pS(e){let{children:t,location:n}=e;return Jb(Au(t),n)}new Promise(()=>{});function Au(e,t){t===void 0&&(t=[]);let n=[];return T.Children.forEach(e,(r,i)=>{if(!T.isValidElement(r))return;let o=[...t,i];if(r.type===T.Fragment){n.push.apply(n,Au(r.props.children,o));return}r.type!==ur&&ze(!1),!r.props.index||!r.props.children||ze(!1);let a={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=Au(r.props.children,o)),n.push(a)}),n}/**
 * React Router DOM v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Mu(){return Mu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Mu.apply(this,arguments)}function fS(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function hS(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function mS(e,t){return e.button===0&&(!t||t==="_self")&&!hS(e)}const gS=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],vS="6";try{window.__reactRouterVersion=vS}catch{}const xS="startTransition",yh=pw[xS];function yS(e){let{basename:t,children:n,future:r,window:i}=e,o=T.useRef();o.current==null&&(o.current=Cb({window:i,v5Compat:!0}));let a=o.current,[s,l]=T.useState({action:a.action,location:a.location}),{v7_startTransition:u}=r||{},d=T.useCallback(p=>{u&&yh?yh(()=>l(p)):l(p)},[l,u]);return T.useLayoutEffect(()=>a.listen(d),[a,d]),T.createElement(dS,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:a,future:r})}const wS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",bS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,r1=T.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:a,state:s,target:l,to:u,preventScrollReset:d,unstable_viewTransition:p}=t,f=fS(t,gS),{basename:v}=T.useContext(Or),x,y=!1;if(typeof u=="string"&&bS.test(u)&&(x=u,wS))try{let m=new URL(window.location.href),w=u.startsWith("//")?new URL(m.protocol+u):new URL(u),S=op(w.pathname,v);w.origin===m.origin&&S!=null?u=S+w.search+w.hash:y=!0}catch{}let b=Xb(u,{relative:i}),g=SS(u,{replace:a,state:s,target:l,preventScrollReset:d,relative:i,unstable_viewTransition:p});function h(m){r&&r(m),m.defaultPrevented||g(m)}return T.createElement("a",Mu({},f,{href:x||b,onClick:y||o?r:h,ref:n,target:l}))});var wh;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(wh||(wh={}));var bh;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(bh||(bh={}));function SS(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:a,unstable_viewTransition:s}=t===void 0?{}:t,l=Qb(),u=Rr(),d=e1(e,{relative:a});return T.useCallback(p=>{if(mS(p,n)){p.preventDefault();let f=r!==void 0?r:zs(u)===zs(d);l(e,{replace:f,state:i,preventScrollReset:o,relative:a,unstable_viewTransition:s})}},[u,l,d,r,i,n,e,o,a,s])}function jS(e){if(typeof Proxy>"u")return e;const t=new Map,n=(...r)=>e(...r);return new Proxy(n,{get:(r,i)=>i==="create"?e:(t.has(i)||t.set(i,e(i)),t.get(i))})}function Uo(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}const Lu=e=>Array.isArray(e);function i1(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}function Wo(e){return typeof e=="string"||Array.isArray(e)}function Sh(e){const t=[{},{}];return e==null||e.values.forEach((n,r)=>{t[0][r]=n.get(),t[1][r]=n.getVelocity()}),t}function sp(e,t,n,r){if(typeof t=="function"){const[i,o]=Sh(r);t=t(n!==void 0?n:e.custom,i,o)}if(typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"){const[i,o]=Sh(r);t=t(n!==void 0?n:e.custom,i,o)}return t}function hl(e,t,n){const r=e.getProps();return sp(r,t,n!==void 0?n:r.custom,e)}const lp=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],cp=["initial",...lp],ra=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],or=new Set(ra),mn=e=>e*1e3,gn=e=>e/1e3,CS={type:"spring",stiffness:500,damping:25,restSpeed:10},TS=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),PS={type:"keyframes",duration:.8},ES={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},kS=(e,{keyframes:t})=>t.length>2?PS:or.has(e)?e.startsWith("scale")?TS(t[1]):CS:ES;function up(e,t){return e?e[t]||e.default||e:void 0}const zS={skipAnimations:!1,useManualTiming:!1},AS=e=>e!==null;function ml(e,{repeat:t,repeatType:n="loop"},r){const i=e.filter(AS),o=t&&n!=="loop"&&t%2===1?0:i.length-1;return!o||r===void 0?i[o]:r}const Fe=e=>e;function MS(e){let t=new Set,n=new Set,r=!1,i=!1;const o=new WeakSet;let a={delta:0,timestamp:0,isProcessing:!1};function s(u){o.has(u)&&(l.schedule(u),e()),u(a)}const l={schedule:(u,d=!1,p=!1)=>{const v=p&&r?t:n;return d&&o.add(u),v.has(u)||v.add(u),u},cancel:u=>{n.delete(u),o.delete(u)},process:u=>{if(a=u,r){i=!0;return}r=!0,[t,n]=[n,t],n.clear(),t.forEach(s),r=!1,i&&(i=!1,l.process(u))}};return l}const Ta=["read","resolveKeyframes","update","preRender","render","postRender"],LS=40;function o1(e,t){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},o=()=>n=!0,a=Ta.reduce((g,h)=>(g[h]=MS(o),g),{}),{read:s,resolveKeyframes:l,update:u,preRender:d,render:p,postRender:f}=a,v=()=>{const g=performance.now();n=!1,i.delta=r?1e3/60:Math.max(Math.min(g-i.timestamp,LS),1),i.timestamp=g,i.isProcessing=!0,s.process(i),l.process(i),u.process(i),d.process(i),p.process(i),f.process(i),i.isProcessing=!1,n&&t&&(r=!1,e(v))},x=()=>{n=!0,r=!0,i.isProcessing||e(v)};return{schedule:Ta.reduce((g,h)=>{const m=a[h];return g[h]=(w,S=!1,C=!1)=>(n||x(),m.schedule(w,S,C)),g},{}),cancel:g=>{for(let h=0;h<Ta.length;h++)a[Ta[h]].cancel(g)},state:i,steps:a}}const{schedule:ie,cancel:Wt,state:_e,steps:lc}=o1(typeof requestAnimationFrame<"u"?requestAnimationFrame:Fe,!0),a1=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,_S=1e-7,OS=12;function IS(e,t,n,r,i){let o,a,s=0;do a=t+(n-t)/2,o=a1(a,r,i)-e,o>0?n=a:t=a;while(Math.abs(o)>_S&&++s<OS);return a}function ia(e,t,n,r){if(e===t&&n===r)return Fe;const i=o=>IS(o,0,1,e,n);return o=>o===0||o===1?o:a1(i(o),t,r)}const s1=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,l1=e=>t=>1-e(1-t),c1=ia(.33,1.53,.69,.99),dp=l1(c1),u1=s1(dp),d1=e=>(e*=2)<1?.5*dp(e):.5*(2-Math.pow(2,-10*(e-1))),pp=e=>1-Math.sin(Math.acos(e)),p1=l1(pp),f1=s1(pp),h1=e=>/^0[^.\s]+$/u.test(e);function RS(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||h1(e):!0}let VS=Fe,_u=Fe;const m1=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),g1=e=>t=>typeof t=="string"&&t.startsWith(e),v1=g1("--"),DS=g1("var(--"),fp=e=>DS(e)?NS.test(e.split("/*")[0].trim()):!1,NS=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,BS=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function FS(e){const t=BS.exec(e);if(!t)return[,];const[,n,r,i]=t;return[`--${n??r}`,i]}function x1(e,t,n=1){const[r,i]=FS(e);if(!r)return;const o=window.getComputedStyle(t).getPropertyValue(r);if(o){const a=o.trim();return m1(a)?parseFloat(a):a}return fp(i)?x1(i,t,n+1):i}const er=(e,t,n)=>n>t?t:n<e?e:n,Ii={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},Go={...Ii,transform:e=>er(0,1,e)},Pa={...Ii,default:1},oa=e=>({test:t=>typeof t=="string"&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),An=oa("deg"),en=oa("%"),G=oa("px"),$S=oa("vh"),HS=oa("vw"),jh={...en,parse:e=>en.parse(e)/100,transform:e=>en.transform(e*100)},US=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),Ch=e=>e===Ii||e===G,Th=(e,t)=>parseFloat(e.split(", ")[t]),Ph=(e,t)=>(n,{transform:r})=>{if(r==="none"||!r)return 0;const i=r.match(/^matrix3d\((.+)\)$/u);if(i)return Th(i[1],t);{const o=r.match(/^matrix\((.+)\)$/u);return o?Th(o[1],e):0}},WS=new Set(["x","y","z"]),GS=ra.filter(e=>!WS.has(e));function qS(e){const t=[];return GS.forEach(n=>{const r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t}const ji={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:Ph(4,13),y:Ph(5,14)};ji.translateX=ji.x;ji.translateY=ji.y;const y1=e=>t=>t.test(e),YS={test:e=>e==="auto",parse:e=>e},w1=[Ii,G,en,An,HS,$S,YS],Eh=e=>w1.find(y1(e)),br=new Set;let Ou=!1,Iu=!1;function b1(){if(Iu){const e=Array.from(br).filter(r=>r.needsMeasurement),t=new Set(e.map(r=>r.element)),n=new Map;t.forEach(r=>{const i=qS(r);i.length&&(n.set(r,i),r.render())}),e.forEach(r=>r.measureInitialState()),t.forEach(r=>{r.render();const i=n.get(r);i&&i.forEach(([o,a])=>{var s;(s=r.getValue(o))===null||s===void 0||s.set(a)})}),e.forEach(r=>r.measureEndState()),e.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}Iu=!1,Ou=!1,br.forEach(e=>e.complete()),br.clear()}function S1(){br.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(Iu=!0)})}function KS(){S1(),b1()}class hp{constructor(t,n,r,i,o,a=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...t],this.onComplete=n,this.name=r,this.motionValue=i,this.element=o,this.isAsync=a}scheduleResolve(){this.isScheduled=!0,this.isAsync?(br.add(this),Ou||(Ou=!0,ie.read(S1),ie.resolveKeyframes(b1))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:n,element:r,motionValue:i}=this;for(let o=0;o<t.length;o++)if(t[o]===null)if(o===0){const a=i==null?void 0:i.get(),s=t[t.length-1];if(a!==void 0)t[0]=a;else if(r&&n){const l=r.readValue(n,s);l!=null&&(t[0]=l)}t[0]===void 0&&(t[0]=s),i&&a===void 0&&i.set(t[0])}else t[o]=t[o-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),br.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,br.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const xo=e=>Math.round(e*1e5)/1e5,mp=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function XS(e){return e==null}const QS=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,gp=(e,t)=>n=>!!(typeof n=="string"&&QS.test(n)&&n.startsWith(e)||t&&!XS(n)&&Object.prototype.hasOwnProperty.call(n,t)),j1=(e,t,n)=>r=>{if(typeof r!="string")return r;const[i,o,a,s]=r.match(mp);return{[e]:parseFloat(i),[t]:parseFloat(o),[n]:parseFloat(a),alpha:s!==void 0?parseFloat(s):1}},ZS=e=>er(0,255,e),cc={...Ii,transform:e=>Math.round(ZS(e))},gr={test:gp("rgb","red"),parse:j1("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+cc.transform(e)+", "+cc.transform(t)+", "+cc.transform(n)+", "+xo(Go.transform(r))+")"};function JS(e){let t="",n="",r="",i="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}const Ru={test:gp("#"),parse:JS,transform:gr.transform},ti={test:gp("hsl","hue"),parse:j1("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+en.transform(xo(t))+", "+en.transform(xo(n))+", "+xo(Go.transform(r))+")"},We={test:e=>gr.test(e)||Ru.test(e)||ti.test(e),parse:e=>gr.test(e)?gr.parse(e):ti.test(e)?ti.parse(e):Ru.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?gr.transform(e):ti.transform(e)},e5=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function t5(e){var t,n;return isNaN(e)&&typeof e=="string"&&(((t=e.match(mp))===null||t===void 0?void 0:t.length)||0)+(((n=e.match(e5))===null||n===void 0?void 0:n.length)||0)>0}const C1="number",T1="color",n5="var",r5="var(",kh="${}",i5=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function qo(e){const t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[];let o=0;const s=t.replace(i5,l=>(We.test(l)?(r.color.push(o),i.push(T1),n.push(We.parse(l))):l.startsWith(r5)?(r.var.push(o),i.push(n5),n.push(l)):(r.number.push(o),i.push(C1),n.push(parseFloat(l))),++o,kh)).split(kh);return{values:n,split:s,indexes:r,types:i}}function P1(e){return qo(e).values}function E1(e){const{split:t,types:n}=qo(e),r=t.length;return i=>{let o="";for(let a=0;a<r;a++)if(o+=t[a],i[a]!==void 0){const s=n[a];s===C1?o+=xo(i[a]):s===T1?o+=We.transform(i[a]):o+=i[a]}return o}}const o5=e=>typeof e=="number"?0:e;function a5(e){const t=P1(e);return E1(e)(t.map(o5))}const tr={test:t5,parse:P1,createTransformer:E1,getAnimatableNone:a5},s5=new Set(["brightness","contrast","saturate","opacity"]);function l5(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(mp)||[];if(!r)return e;const i=n.replace(r,"");let o=s5.has(t)?1:0;return r!==n&&(o*=100),t+"("+o+i+")"}const c5=/\b([a-z-]*)\(.*?\)/gu,Vu={...tr,getAnimatableNone:e=>{const t=e.match(c5);return t?t.map(l5).join(" "):e}},u5={borderWidth:G,borderTopWidth:G,borderRightWidth:G,borderBottomWidth:G,borderLeftWidth:G,borderRadius:G,radius:G,borderTopLeftRadius:G,borderTopRightRadius:G,borderBottomRightRadius:G,borderBottomLeftRadius:G,width:G,maxWidth:G,height:G,maxHeight:G,top:G,right:G,bottom:G,left:G,padding:G,paddingTop:G,paddingRight:G,paddingBottom:G,paddingLeft:G,margin:G,marginTop:G,marginRight:G,marginBottom:G,marginLeft:G,backgroundPositionX:G,backgroundPositionY:G},d5={rotate:An,rotateX:An,rotateY:An,rotateZ:An,scale:Pa,scaleX:Pa,scaleY:Pa,scaleZ:Pa,skew:An,skewX:An,skewY:An,distance:G,translateX:G,translateY:G,translateZ:G,x:G,y:G,z:G,perspective:G,transformPerspective:G,opacity:Go,originX:jh,originY:jh,originZ:G},zh={...Ii,transform:Math.round},vp={...u5,...d5,zIndex:zh,size:G,fillOpacity:Go,strokeOpacity:Go,numOctaves:zh},p5={...vp,color:We,backgroundColor:We,outlineColor:We,fill:We,stroke:We,borderColor:We,borderTopColor:We,borderRightColor:We,borderBottomColor:We,borderLeftColor:We,filter:Vu,WebkitFilter:Vu},xp=e=>p5[e];function k1(e,t){let n=xp(e);return n!==Vu&&(n=tr),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const f5=new Set(["auto","none","0"]);function h5(e,t,n){let r=0,i;for(;r<e.length&&!i;){const o=e[r];typeof o=="string"&&!f5.has(o)&&qo(o).values.length&&(i=e[r]),r++}if(i&&n)for(const o of t)e[o]=k1(n,i)}class z1 extends hp{constructor(t,n,r,i,o){super(t,n,r,i,o,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:n,name:r}=this;if(!n||!n.current)return;super.readKeyframes();for(let l=0;l<t.length;l++){let u=t[l];if(typeof u=="string"&&(u=u.trim(),fp(u))){const d=x1(u,n.current);d!==void 0&&(t[l]=d),l===t.length-1&&(this.finalKeyframe=u)}}if(this.resolveNoneKeyframes(),!US.has(r)||t.length!==2)return;const[i,o]=t,a=Eh(i),s=Eh(o);if(a!==s)if(Ch(a)&&Ch(s))for(let l=0;l<t.length;l++){const u=t[l];typeof u=="string"&&(t[l]=parseFloat(u))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:n}=this,r=[];for(let i=0;i<t.length;i++)RS(t[i])&&r.push(i);r.length&&h5(t,r,n)}measureInitialState(){const{element:t,unresolvedKeyframes:n,name:r}=this;if(!t||!t.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=ji[r](t.measureViewportBox(),window.getComputedStyle(t.current)),n[0]=this.measuredOrigin;const i=n[n.length-1];i!==void 0&&t.getValue(r,i).jump(i,!1)}measureEndState(){var t;const{element:n,name:r,unresolvedKeyframes:i}=this;if(!n||!n.current)return;const o=n.getValue(r);o&&o.jump(this.measuredOrigin,!1);const a=i.length-1,s=i[a];i[a]=ji[r](n.measureViewportBox(),window.getComputedStyle(n.current)),s!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=s),!((t=this.removedTransforms)===null||t===void 0)&&t.length&&this.removedTransforms.forEach(([l,u])=>{n.getValue(l).set(u)}),this.resolveNoneKeyframes()}}function yp(e){return typeof e=="function"}let qa;function m5(){qa=void 0}const tn={now:()=>(qa===void 0&&tn.set(_e.isProcessing||zS.useManualTiming?_e.timestamp:performance.now()),qa),set:e=>{qa=e,queueMicrotask(m5)}},Ah=(e,t)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(tr.test(e)||e==="0")&&!e.startsWith("url("));function g5(e){const t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function v5(e,t,n,r){const i=e[0];if(i===null)return!1;if(t==="display"||t==="visibility")return!0;const o=e[e.length-1],a=Ah(i,t),s=Ah(o,t);return!a||!s?!1:g5(e)||(n==="spring"||yp(n))&&r}const x5=40;class A1{constructor({autoplay:t=!0,delay:n=0,type:r="keyframes",repeat:i=0,repeatDelay:o=0,repeatType:a="loop",...s}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=tn.now(),this.options={autoplay:t,delay:n,type:r,repeat:i,repeatDelay:o,repeatType:a,...s},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>x5?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&KS(),this._resolved}onKeyframesResolved(t,n){this.resolvedAt=tn.now(),this.hasAttemptedResolve=!0;const{name:r,type:i,velocity:o,delay:a,onComplete:s,onUpdate:l,isGenerator:u}=this.options;if(!u&&!v5(t,r,i,o))if(a)this.options.duration=0;else{l==null||l(ml(t,this.options,n)),s==null||s(),this.resolveFinishedPromise();return}const d=this.initPlayback(t,n);d!==!1&&(this._resolved={keyframes:t,finalKeyframe:n,...d},this.onPostResolved())}onPostResolved(){}then(t,n){return this.currentFinishedPromise.then(t,n)}updateFinishedPromise(){this.currentFinishedPromise=new Promise(t=>{this.resolveFinishedPromise=t})}}function wp(e,t){return t?e*(1e3/t):0}const y5=5;function M1(e,t,n){const r=Math.max(t-y5,0);return wp(n-e(r),t-r)}const uc=.001,w5=.01,b5=10,S5=.05,j5=1;function C5({duration:e=800,bounce:t=.25,velocity:n=0,mass:r=1}){let i,o,a=1-t;a=er(S5,j5,a),e=er(w5,b5,gn(e)),a<1?(i=u=>{const d=u*a,p=d*e,f=d-n,v=Du(u,a),x=Math.exp(-p);return uc-f/v*x},o=u=>{const p=u*a*e,f=p*n+n,v=Math.pow(a,2)*Math.pow(u,2)*e,x=Math.exp(-p),y=Du(Math.pow(u,2),a);return(-i(u)+uc>0?-1:1)*((f-v)*x)/y}):(i=u=>{const d=Math.exp(-u*e),p=(u-n)*e+1;return-uc+d*p},o=u=>{const d=Math.exp(-u*e),p=(n-u)*(e*e);return d*p});const s=5/e,l=P5(i,o,s);if(e=mn(e),isNaN(l))return{stiffness:100,damping:10,duration:e};{const u=Math.pow(l,2)*r;return{stiffness:u,damping:a*2*Math.sqrt(r*u),duration:e}}}const T5=12;function P5(e,t,n){let r=n;for(let i=1;i<T5;i++)r=r-e(r)/t(r);return r}function Du(e,t){return e*Math.sqrt(1-t*t)}const E5=["duration","bounce"],k5=["stiffness","damping","mass"];function Mh(e,t){return t.some(n=>e[n]!==void 0)}function z5(e){let t={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...e};if(!Mh(e,k5)&&Mh(e,E5)){const n=C5(e);t={...t,...n,mass:1},t.isResolvedFromDuration=!0}return t}function L1({keyframes:e,restDelta:t,restSpeed:n,...r}){const i=e[0],o=e[e.length-1],a={done:!1,value:i},{stiffness:s,damping:l,mass:u,duration:d,velocity:p,isResolvedFromDuration:f}=z5({...r,velocity:-gn(r.velocity||0)}),v=p||0,x=l/(2*Math.sqrt(s*u)),y=o-i,b=gn(Math.sqrt(s/u)),g=Math.abs(y)<5;n||(n=g?.01:2),t||(t=g?.005:.5);let h;if(x<1){const m=Du(b,x);h=w=>{const S=Math.exp(-x*b*w);return o-S*((v+x*b*y)/m*Math.sin(m*w)+y*Math.cos(m*w))}}else if(x===1)h=m=>o-Math.exp(-b*m)*(y+(v+b*y)*m);else{const m=b*Math.sqrt(x*x-1);h=w=>{const S=Math.exp(-x*b*w),C=Math.min(m*w,300);return o-S*((v+x*b*y)*Math.sinh(C)+m*y*Math.cosh(C))/m}}return{calculatedDuration:f&&d||null,next:m=>{const w=h(m);if(f)a.done=m>=d;else{let S=0;x<1&&(S=m===0?mn(v):M1(h,m,w));const C=Math.abs(S)<=n,E=Math.abs(o-w)<=t;a.done=C&&E}return a.value=a.done?o:w,a}}}function Lh({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:o=500,modifyTarget:a,min:s,max:l,restDelta:u=.5,restSpeed:d}){const p=e[0],f={done:!1,value:p},v=k=>s!==void 0&&k<s||l!==void 0&&k>l,x=k=>s===void 0?l:l===void 0||Math.abs(s-k)<Math.abs(l-k)?s:l;let y=n*t;const b=p+y,g=a===void 0?b:a(b);g!==b&&(y=g-p);const h=k=>-y*Math.exp(-k/r),m=k=>g+h(k),w=k=>{const A=h(k),z=m(k);f.done=Math.abs(A)<=u,f.value=f.done?g:z};let S,C;const E=k=>{v(f.value)&&(S=k,C=L1({keyframes:[f.value,x(f.value)],velocity:M1(m,k,f.value),damping:i,stiffness:o,restDelta:u,restSpeed:d}))};return E(0),{calculatedDuration:null,next:k=>{let A=!1;return!C&&S===void 0&&(A=!0,w(k),E(k)),S!==void 0&&k>=S?C.next(k-S):(!A&&w(k),f)}}}const A5=ia(.42,0,1,1),M5=ia(0,0,.58,1),_1=ia(.42,0,.58,1),L5=e=>Array.isArray(e)&&typeof e[0]!="number",bp=e=>Array.isArray(e)&&typeof e[0]=="number",_h={linear:Fe,easeIn:A5,easeInOut:_1,easeOut:M5,circIn:pp,circInOut:f1,circOut:p1,backIn:dp,backInOut:u1,backOut:c1,anticipate:d1},Oh=e=>{if(bp(e)){_u(e.length===4);const[t,n,r,i]=e;return ia(t,n,r,i)}else if(typeof e=="string")return _u(_h[e]!==void 0),_h[e];return e},_5=(e,t)=>n=>t(e(n)),vn=(...e)=>e.reduce(_5),zr=(e,t,n)=>{const r=t-e;return r===0?1:(n-e)/r},we=(e,t,n)=>e+(t-e)*n;function dc(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function O5({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,o=0,a=0;if(!t)i=o=a=n;else{const s=n<.5?n*(1+t):n+t-n*t,l=2*n-s;i=dc(l,s,e+1/3),o=dc(l,s,e),a=dc(l,s,e-1/3)}return{red:Math.round(i*255),green:Math.round(o*255),blue:Math.round(a*255),alpha:r}}function Ms(e,t){return n=>n>0?t:e}const pc=(e,t,n)=>{const r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},I5=[Ru,gr,ti],R5=e=>I5.find(t=>t.test(e));function Ih(e){const t=R5(e);if(!t)return!1;let n=t.parse(e);return t===ti&&(n=O5(n)),n}const Rh=(e,t)=>{const n=Ih(e),r=Ih(t);if(!n||!r)return Ms(e,t);const i={...n};return o=>(i.red=pc(n.red,r.red,o),i.green=pc(n.green,r.green,o),i.blue=pc(n.blue,r.blue,o),i.alpha=we(n.alpha,r.alpha,o),gr.transform(i))},Nu=new Set(["none","hidden"]);function V5(e,t){return Nu.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function D5(e,t){return n=>we(e,t,n)}function Sp(e){return typeof e=="number"?D5:typeof e=="string"?fp(e)?Ms:We.test(e)?Rh:F5:Array.isArray(e)?O1:typeof e=="object"?We.test(e)?Rh:N5:Ms}function O1(e,t){const n=[...e],r=n.length,i=e.map((o,a)=>Sp(o)(o,t[a]));return o=>{for(let a=0;a<r;a++)n[a]=i[a](o);return n}}function N5(e,t){const n={...e,...t},r={};for(const i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=Sp(e[i])(e[i],t[i]));return i=>{for(const o in r)n[o]=r[o](i);return n}}function B5(e,t){var n;const r=[],i={color:0,var:0,number:0};for(let o=0;o<t.values.length;o++){const a=t.types[o],s=e.indexes[a][i[a]],l=(n=e.values[s])!==null&&n!==void 0?n:0;r[o]=l,i[a]++}return r}const F5=(e,t)=>{const n=tr.createTransformer(t),r=qo(e),i=qo(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?Nu.has(e)&&!i.values.length||Nu.has(t)&&!r.values.length?V5(e,t):vn(O1(B5(r,i),i.values),n):Ms(e,t)};function I1(e,t,n){return typeof e=="number"&&typeof t=="number"&&typeof n=="number"?we(e,t,n):Sp(e)(e,t)}function $5(e,t,n){const r=[],i=n||I1,o=e.length-1;for(let a=0;a<o;a++){let s=i(e[a],e[a+1]);if(t){const l=Array.isArray(t)?t[a]||Fe:t;s=vn(l,s)}r.push(s)}return r}function jp(e,t,{clamp:n=!0,ease:r,mixer:i}={}){const o=e.length;if(_u(o===t.length),o===1)return()=>t[0];if(o===2&&e[0]===e[1])return()=>t[1];e[0]>e[o-1]&&(e=[...e].reverse(),t=[...t].reverse());const a=$5(t,r,i),s=a.length,l=u=>{let d=0;if(s>1)for(;d<e.length-2&&!(u<e[d+1]);d++);const p=zr(e[d],e[d+1],u);return a[d](p)};return n?u=>l(er(e[0],e[o-1],u)):l}function H5(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const i=zr(0,t,r);e.push(we(n,1,i))}}function R1(e){const t=[0];return H5(t,e.length-1),t}function U5(e,t){return e.map(n=>n*t)}function W5(e,t){return e.map(()=>t||_1).splice(0,e.length-1)}function Ls({duration:e=300,keyframes:t,times:n,ease:r="easeInOut"}){const i=L5(r)?r.map(Oh):Oh(r),o={done:!1,value:t[0]},a=U5(n&&n.length===t.length?n:R1(t),e),s=jp(a,t,{ease:Array.isArray(i)?i:W5(t,i)});return{calculatedDuration:e,next:l=>(o.value=s(l),o.done=l>=e,o)}}const Vh=2e4;function G5(e){let t=0;const n=50;let r=e.next(t);for(;!r.done&&t<Vh;)t+=n,r=e.next(t);return t>=Vh?1/0:t}const q5=e=>{const t=({timestamp:n})=>e(n);return{start:()=>ie.update(t,!0),stop:()=>Wt(t),now:()=>_e.isProcessing?_e.timestamp:tn.now()}},Y5={decay:Lh,inertia:Lh,tween:Ls,keyframes:Ls,spring:L1},K5=e=>e/100;class Cp extends A1{constructor(t){super(t),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:l}=this.options;l&&l()};const{name:n,motionValue:r,element:i,keyframes:o}=this.options,a=(i==null?void 0:i.KeyframeResolver)||hp,s=(l,u)=>this.onKeyframesResolved(l,u);this.resolver=new a(o,s,n,r,i),this.resolver.scheduleResolve()}initPlayback(t){const{type:n="keyframes",repeat:r=0,repeatDelay:i=0,repeatType:o,velocity:a=0}=this.options,s=yp(n)?n:Y5[n]||Ls;let l,u;s!==Ls&&typeof t[0]!="number"&&(l=vn(K5,I1(t[0],t[1])),t=[0,100]);const d=s({...this.options,keyframes:t});o==="mirror"&&(u=s({...this.options,keyframes:[...t].reverse(),velocity:-a})),d.calculatedDuration===null&&(d.calculatedDuration=G5(d));const{calculatedDuration:p}=d,f=p+i,v=f*(r+1)-i;return{generator:d,mirroredGenerator:u,mapPercentToKeyframes:l,calculatedDuration:p,resolvedDuration:f,totalDuration:v}}onPostResolved(){const{autoplay:t=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!t?this.pause():this.state=this.pendingPlayState}tick(t,n=!1){const{resolved:r}=this;if(!r){const{keyframes:k}=this.options;return{done:!0,value:k[k.length-1]}}const{finalKeyframe:i,generator:o,mirroredGenerator:a,mapPercentToKeyframes:s,keyframes:l,calculatedDuration:u,totalDuration:d,resolvedDuration:p}=r;if(this.startTime===null)return o.next(0);const{delay:f,repeat:v,repeatType:x,repeatDelay:y,onUpdate:b}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-d/this.speed,this.startTime)),n?this.currentTime=t:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(t-this.startTime)*this.speed;const g=this.currentTime-f*(this.speed>=0?1:-1),h=this.speed>=0?g<0:g>d;this.currentTime=Math.max(g,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=d);let m=this.currentTime,w=o;if(v){const k=Math.min(this.currentTime,d)/p;let A=Math.floor(k),z=k%1;!z&&k>=1&&(z=1),z===1&&A--,A=Math.min(A,v+1),!!(A%2)&&(x==="reverse"?(z=1-z,y&&(z-=y/p)):x==="mirror"&&(w=a)),m=er(0,1,z)*p}const S=h?{done:!1,value:l[0]}:w.next(m);s&&(S.value=s(S.value));let{done:C}=S;!h&&u!==null&&(C=this.speed>=0?this.currentTime>=d:this.currentTime<=0);const E=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&C);return E&&i!==void 0&&(S.value=ml(l,this.options,i)),b&&b(S.value),E&&this.finish(),S}get duration(){const{resolved:t}=this;return t?gn(t.calculatedDuration):0}get time(){return gn(this.currentTime)}set time(t){t=mn(t),this.currentTime=t,this.holdTime!==null||this.speed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.speed)}get speed(){return this.playbackSpeed}set speed(t){const n=this.playbackSpeed!==t;this.playbackSpeed=t,n&&(this.time=gn(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:t=q5,onPlay:n,startTime:r}=this.options;this.driver||(this.driver=t(o=>this.tick(o))),n&&n();const i=this.driver.now();this.holdTime!==null?this.startTime=i-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=i):this.startTime=r??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var t;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(t=this.currentTime)!==null&&t!==void 0?t:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:t}=this.options;t&&t()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}}const V1=new Set(["opacity","clipPath","filter","transform"]),X5=10,Q5=(e,t)=>{let n="";const r=Math.max(Math.round(t/X5),2);for(let i=0;i<r;i++)n+=e(zr(0,r-1,i))+", ";return`linear(${n.substring(0,n.length-2)})`};function Tp(e){let t;return()=>(t===void 0&&(t=e()),t)}const Z5={linearEasing:void 0};function J5(e,t){const n=Tp(e);return()=>{var r;return(r=Z5[t])!==null&&r!==void 0?r:n()}}const _s=J5(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing");function D1(e){return!!(typeof e=="function"&&_s()||!e||typeof e=="string"&&(e in Bu||_s())||bp(e)||Array.isArray(e)&&e.every(D1))}const oo=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,Bu={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:oo([0,.65,.55,1]),circOut:oo([.55,0,1,.45]),backIn:oo([.31,.01,.66,-.59]),backOut:oo([.33,1.53,.69,.99])};function N1(e,t){if(e)return typeof e=="function"&&_s()?Q5(e,t):bp(e)?oo(e):Array.isArray(e)?e.map(n=>N1(n,t)||Bu.easeOut):Bu[e]}function e3(e,t,n,{delay:r=0,duration:i=300,repeat:o=0,repeatType:a="loop",ease:s,times:l}={}){const u={[t]:n};l&&(u.offset=l);const d=N1(s,i);return Array.isArray(d)&&(u.easing=d),e.animate(u,{delay:r,duration:i,easing:Array.isArray(d)?"linear":d,fill:"both",iterations:o+1,direction:a==="reverse"?"alternate":"normal"})}function Dh(e,t){e.timeline=t,e.onfinish=null}const t3=Tp(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),Os=10,n3=2e4;function r3(e){return yp(e.type)||e.type==="spring"||!D1(e.ease)}function i3(e,t){const n=new Cp({...t,keyframes:e,repeat:0,delay:0,isGenerator:!0});let r={done:!1,value:e[0]};const i=[];let o=0;for(;!r.done&&o<n3;)r=n.sample(o),i.push(r.value),o+=Os;return{times:void 0,keyframes:i,duration:o-Os,ease:"linear"}}const B1={anticipate:d1,backInOut:u1,circInOut:f1};function o3(e){return e in B1}class Nh extends A1{constructor(t){super(t);const{name:n,motionValue:r,element:i,keyframes:o}=this.options;this.resolver=new z1(o,(a,s)=>this.onKeyframesResolved(a,s),n,r,i),this.resolver.scheduleResolve()}initPlayback(t,n){var r;let{duration:i=300,times:o,ease:a,type:s,motionValue:l,name:u,startTime:d}=this.options;if(!(!((r=l.owner)===null||r===void 0)&&r.current))return!1;if(typeof a=="string"&&_s()&&o3(a)&&(a=B1[a]),r3(this.options)){const{onComplete:f,onUpdate:v,motionValue:x,element:y,...b}=this.options,g=i3(t,b);t=g.keyframes,t.length===1&&(t[1]=t[0]),i=g.duration,o=g.times,a=g.ease,s="keyframes"}const p=e3(l.owner.current,u,t,{...this.options,duration:i,times:o,ease:a});return p.startTime=d??this.calcStartTime(),this.pendingTimeline?(Dh(p,this.pendingTimeline),this.pendingTimeline=void 0):p.onfinish=()=>{const{onComplete:f}=this.options;l.set(ml(t,this.options,n)),f&&f(),this.cancel(),this.resolveFinishedPromise()},{animation:p,duration:i,times:o,type:s,ease:a,keyframes:t}}get duration(){const{resolved:t}=this;if(!t)return 0;const{duration:n}=t;return gn(n)}get time(){const{resolved:t}=this;if(!t)return 0;const{animation:n}=t;return gn(n.currentTime||0)}set time(t){const{resolved:n}=this;if(!n)return;const{animation:r}=n;r.currentTime=mn(t)}get speed(){const{resolved:t}=this;if(!t)return 1;const{animation:n}=t;return n.playbackRate}set speed(t){const{resolved:n}=this;if(!n)return;const{animation:r}=n;r.playbackRate=t}get state(){const{resolved:t}=this;if(!t)return"idle";const{animation:n}=t;return n.playState}get startTime(){const{resolved:t}=this;if(!t)return null;const{animation:n}=t;return n.startTime}attachTimeline(t){if(!this._resolved)this.pendingTimeline=t;else{const{resolved:n}=this;if(!n)return Fe;const{animation:r}=n;Dh(r,t)}return Fe}play(){if(this.isStopped)return;const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.playState==="finished"&&this.updateFinishedPromise(),n.play()}pause(){const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:t}=this;if(!t)return;const{animation:n,keyframes:r,duration:i,type:o,ease:a,times:s}=t;if(n.playState==="idle"||n.playState==="finished")return;if(this.time){const{motionValue:u,onUpdate:d,onComplete:p,element:f,...v}=this.options,x=new Cp({...v,keyframes:r,duration:i,type:o,ease:a,times:s,isGenerator:!0}),y=mn(this.time);u.setWithVelocity(x.sample(y-Os).value,x.sample(y).value,Os)}const{onStop:l}=this.options;l&&l(),this.cancel()}complete(){const{resolved:t}=this;t&&t.animation.finish()}cancel(){const{resolved:t}=this;t&&t.animation.cancel()}static supports(t){const{motionValue:n,name:r,repeatDelay:i,repeatType:o,damping:a,type:s}=t;return t3()&&r&&V1.has(r)&&n&&n.owner&&n.owner.current instanceof HTMLElement&&!n.owner.getProps().onUpdate&&!i&&o!=="mirror"&&a!==0&&s!=="inertia"}}const F1=Tp(()=>window.ScrollTimeline!==void 0);class a3{constructor(t){this.stop=()=>this.runAll("stop"),this.animations=t.filter(Boolean)}then(t,n){return Promise.all(this.animations).then(t).catch(n)}getAll(t){return this.animations[0][t]}setAll(t,n){for(let r=0;r<this.animations.length;r++)this.animations[r][t]=n}attachTimeline(t,n){const r=this.animations.map(i=>F1()&&i.attachTimeline?i.attachTimeline(t):n(i));return()=>{r.forEach((i,o)=>{i&&i(),this.animations[o].stop()})}}get time(){return this.getAll("time")}set time(t){this.setAll("time",t)}get speed(){return this.getAll("speed")}set speed(t){this.setAll("speed",t)}get startTime(){return this.getAll("startTime")}get duration(){let t=0;for(let n=0;n<this.animations.length;n++)t=Math.max(t,this.animations[n].duration);return t}runAll(t){this.animations.forEach(n=>n[t]())}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}function s3({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:i,repeat:o,repeatType:a,repeatDelay:s,from:l,elapsed:u,...d}){return!!Object.keys(d).length}const Pp=(e,t,n,r={},i,o)=>a=>{const s=up(r,e)||{},l=s.delay||r.delay||0;let{elapsed:u=0}=r;u=u-mn(l);let d={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:t.getVelocity(),...s,delay:-u,onUpdate:f=>{t.set(f),s.onUpdate&&s.onUpdate(f)},onComplete:()=>{a(),s.onComplete&&s.onComplete()},name:e,motionValue:t,element:o?void 0:i};s3(s)||(d={...d,...kS(e,d)}),d.duration&&(d.duration=mn(d.duration)),d.repeatDelay&&(d.repeatDelay=mn(d.repeatDelay)),d.from!==void 0&&(d.keyframes[0]=d.from);let p=!1;if((d.type===!1||d.duration===0&&!d.repeatDelay)&&(d.duration=0,d.delay===0&&(p=!0)),p&&!o&&t.get()!==void 0){const f=ml(d.keyframes,s);if(f!==void 0)return ie.update(()=>{d.onUpdate(f),d.onComplete()}),new a3([])}return!o&&Nh.supports(d)?new Nh(d):new Cp(d)},l3=e=>!!(e&&typeof e=="object"&&e.mix&&e.toValue),c3=e=>Lu(e)?e[e.length-1]||0:e;function Ep(e,t){e.indexOf(t)===-1&&e.push(t)}function kp(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class zp{constructor(){this.subscriptions=[]}add(t){return Ep(this.subscriptions,t),()=>kp(this.subscriptions,t)}notify(t,n,r){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](t,n,r);else for(let o=0;o<i;o++){const a=this.subscriptions[o];a&&a(t,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Bh=30,u3=e=>!isNaN(parseFloat(e)),yo={current:void 0};class d3{constructor(t,n={}){this.version="11.11.7",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(r,i=!0)=>{const o=tn.now();this.updatedAt!==o&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),i&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(t),this.owner=n.owner}setCurrent(t){this.current=t,this.updatedAt=tn.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=u3(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new zp);const r=this.events[t].add(n);return t==="change"?()=>{r(),ie.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t,n=!0){!n||!this.passiveEffect?this.updateAndNotify(t,n):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,n,r){this.set(n),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-r}jump(t,n=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return yo.current&&yo.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const t=tn.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>Bh)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,Bh);return wp(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Xt(e,t){return new d3(e,t)}function p3(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,Xt(n))}function f3(e,t){const n=hl(e,t);let{transitionEnd:r={},transition:i={},...o}=n||{};o={...o,...r};for(const a in o){const s=c3(o[a]);p3(e,a,s)}}const gl=e=>e.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),h3="framerAppearId",$1="data-"+gl(h3);function H1(e){return e.props[$1]}const qe=e=>!!(e&&e.getVelocity);function m3(e){return!!(qe(e)&&e.add)}function U1(e){if(or.has(e))return"transform";if(V1.has(e))return gl(e)}function Fu(e,t){var n;if(!e.applyWillChange)return;const r=e.getValue("willChange");if(m3(r))return r.add(t);!(!((n=e.props.style)===null||n===void 0)&&n.willChange)&&U1(t)&&e.setStaticValue("willChange","transform")}function g3({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function W1(e,t,{delay:n=0,transitionOverride:r,type:i}={}){var o;let{transition:a=e.getDefaultTransition(),transitionEnd:s,...l}=t;r&&(a=r);const u=[],d=i&&e.animationState&&e.animationState.getState()[i];for(const p in l){const f=e.getValue(p,(o=e.latestValues[p])!==null&&o!==void 0?o:null),v=l[p];if(v===void 0||d&&g3(d,p))continue;const x={delay:n,...up(a||{},p)};let y=!1;if(window.MotionHandoffAnimation){const g=H1(e);if(g){const h=window.MotionHandoffAnimation(g,p,ie);h!==null&&(x.startTime=h,y=!0)}}Fu(e,p),f.start(Pp(p,f,v,e.shouldReduceMotion&&or.has(p)?{type:!1}:x,e,y));const b=f.animation;b&&u.push(b)}return s&&Promise.all(u).then(()=>{ie.update(()=>{s&&f3(e,s)})}),u}function $u(e,t,n={}){var r;const i=hl(e,t,n.type==="exit"?(r=e.presenceContext)===null||r===void 0?void 0:r.custom:void 0);let{transition:o=e.getDefaultTransition()||{}}=i||{};n.transitionOverride&&(o=n.transitionOverride);const a=i?()=>Promise.all(W1(e,i,n)):()=>Promise.resolve(),s=e.variantChildren&&e.variantChildren.size?(u=0)=>{const{delayChildren:d=0,staggerChildren:p,staggerDirection:f}=o;return v3(e,t,d+u,p,f,n)}:()=>Promise.resolve(),{when:l}=o;if(l){const[u,d]=l==="beforeChildren"?[a,s]:[s,a];return u().then(()=>d())}else return Promise.all([a(),s(n.delay)])}function v3(e,t,n=0,r=0,i=1,o){const a=[],s=(e.variantChildren.size-1)*r,l=i===1?(u=0)=>u*r:(u=0)=>s-u*r;return Array.from(e.variantChildren).sort(x3).forEach((u,d)=>{u.notify("AnimationStart",t),a.push($u(u,t,{...o,delay:n+l(d)}).then(()=>u.notify("AnimationComplete",t)))}),Promise.all(a)}function x3(e,t){return e.sortNodePosition(t)}function y3(e,t,n={}){e.notify("AnimationStart",t);let r;if(Array.isArray(t)){const i=t.map(o=>$u(e,o,n));r=Promise.all(i)}else if(typeof t=="string")r=$u(e,t,n);else{const i=typeof t=="function"?hl(e,t,n.custom):t;r=Promise.all(W1(e,i,n))}return r.then(()=>{e.notify("AnimationComplete",t)})}const w3=cp.length;function G1(e){if(!e)return;if(!e.isControllingVariants){const n=e.parent?G1(e.parent)||{}:{};return e.props.initial!==void 0&&(n.initial=e.props.initial),n}const t={};for(let n=0;n<w3;n++){const r=cp[n],i=e.props[r];(Wo(i)||i===!1)&&(t[r]=i)}return t}const b3=[...lp].reverse(),S3=lp.length;function j3(e){return t=>Promise.all(t.map(({animation:n,options:r})=>y3(e,n,r)))}function C3(e){let t=j3(e),n=Fh(),r=!0;const i=l=>(u,d)=>{var p;const f=hl(e,d,l==="exit"?(p=e.presenceContext)===null||p===void 0?void 0:p.custom:void 0);if(f){const{transition:v,transitionEnd:x,...y}=f;u={...u,...y,...x}}return u};function o(l){t=l(e)}function a(l){const{props:u}=e,d=G1(e.parent)||{},p=[],f=new Set;let v={},x=1/0;for(let b=0;b<S3;b++){const g=b3[b],h=n[g],m=u[g]!==void 0?u[g]:d[g],w=Wo(m),S=g===l?h.isActive:null;S===!1&&(x=b);let C=m===d[g]&&m!==u[g]&&w;if(C&&r&&e.manuallyAnimateOnMount&&(C=!1),h.protectedKeys={...v},!h.isActive&&S===null||!m&&!h.prevProp||Uo(m)||typeof m=="boolean")continue;const E=T3(h.prevProp,m);let k=E||g===l&&h.isActive&&!C&&w||b>x&&w,A=!1;const z=Array.isArray(m)?m:[m];let I=z.reduce(i(g),{});S===!1&&(I={});const{prevResolvedValues:F={}}=h,D={...F,...I},W=ne=>{k=!0,f.has(ne)&&(A=!0,f.delete(ne)),h.needsAnimating[ne]=!0;const L=e.getValue(ne);L&&(L.liveStyle=!1)};for(const ne in D){const L=I[ne],N=F[ne];if(v.hasOwnProperty(ne))continue;let B=!1;Lu(L)&&Lu(N)?B=!i1(L,N):B=L!==N,B?L!=null?W(ne):f.add(ne):L!==void 0&&f.has(ne)?W(ne):h.protectedKeys[ne]=!0}h.prevProp=m,h.prevResolvedValues=I,h.isActive&&(v={...v,...I}),r&&e.blockInitialAnimation&&(k=!1),k&&(!(C&&E)||A)&&p.push(...z.map(ne=>({animation:ne,options:{type:g}})))}if(f.size){const b={};f.forEach(g=>{const h=e.getBaseTarget(g),m=e.getValue(g);m&&(m.liveStyle=!0),b[g]=h??null}),p.push({animation:b})}let y=!!p.length;return r&&(u.initial===!1||u.initial===u.animate)&&!e.manuallyAnimateOnMount&&(y=!1),r=!1,y?t(p):Promise.resolve()}function s(l,u){var d;if(n[l].isActive===u)return Promise.resolve();(d=e.variantChildren)===null||d===void 0||d.forEach(f=>{var v;return(v=f.animationState)===null||v===void 0?void 0:v.setActive(l,u)}),n[l].isActive=u;const p=a(l);for(const f in n)n[f].protectedKeys={};return p}return{animateChanges:a,setActive:s,setAnimateFunction:o,getState:()=>n,reset:()=>{n=Fh(),r=!0}}}function T3(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!i1(t,e):!1}function sr(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Fh(){return{animate:sr(!0),whileInView:sr(),whileHover:sr(),whileTap:sr(),whileDrag:sr(),whileFocus:sr(),exit:sr()}}class ar{constructor(t){this.isMounted=!1,this.node=t}update(){}}class P3 extends ar{constructor(t){super(t),t.animationState||(t.animationState=C3(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();Uo(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){var t;this.node.animationState.reset(),(t=this.unmountControls)===null||t===void 0||t.call(this)}}let E3=0;class k3 extends ar{constructor(){super(...arguments),this.id=E3++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===r)return;const i=this.node.animationState.setActive("exit",!t);n&&!t&&i.then(()=>n(this.id))}mount(){const{register:t}=this.node.presenceContext||{};t&&(this.unmount=t(this.id))}unmount(){}}const z3={animation:{Feature:P3},exit:{Feature:k3}},q1=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1;function vl(e,t="page"){return{point:{x:e[`${t}X`],y:e[`${t}Y`]}}}const A3=e=>t=>q1(t)&&e(t,vl(t));function fn(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}function xn(e,t,n,r){return fn(e,t,A3(n),r)}const $h=(e,t)=>Math.abs(e-t);function M3(e,t){const n=$h(e.x,t.x),r=$h(e.y,t.y);return Math.sqrt(n**2+r**2)}class Y1{constructor(t,n,{transformPagePoint:r,contextWindow:i,dragSnapToOrigin:o=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const p=hc(this.lastMoveEventInfo,this.history),f=this.startEvent!==null,v=M3(p.offset,{x:0,y:0})>=3;if(!f&&!v)return;const{point:x}=p,{timestamp:y}=_e;this.history.push({...x,timestamp:y});const{onStart:b,onMove:g}=this.handlers;f||(b&&b(this.lastMoveEvent,p),this.startEvent=this.lastMoveEvent),g&&g(this.lastMoveEvent,p)},this.handlePointerMove=(p,f)=>{this.lastMoveEvent=p,this.lastMoveEventInfo=fc(f,this.transformPagePoint),ie.update(this.updatePoint,!0)},this.handlePointerUp=(p,f)=>{this.end();const{onEnd:v,onSessionEnd:x,resumeAnimation:y}=this.handlers;if(this.dragSnapToOrigin&&y&&y(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const b=hc(p.type==="pointercancel"?this.lastMoveEventInfo:fc(f,this.transformPagePoint),this.history);this.startEvent&&v&&v(p,b),x&&x(p,b)},!q1(t))return;this.dragSnapToOrigin=o,this.handlers=n,this.transformPagePoint=r,this.contextWindow=i||window;const a=vl(t),s=fc(a,this.transformPagePoint),{point:l}=s,{timestamp:u}=_e;this.history=[{...l,timestamp:u}];const{onSessionStart:d}=n;d&&d(t,hc(s,this.history)),this.removeListeners=vn(xn(this.contextWindow,"pointermove",this.handlePointerMove),xn(this.contextWindow,"pointerup",this.handlePointerUp),xn(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),Wt(this.updatePoint)}}function fc(e,t){return t?{point:t(e.point)}:e}function Hh(e,t){return{x:e.x-t.x,y:e.y-t.y}}function hc({point:e},t){return{point:e,delta:Hh(e,K1(t)),offset:Hh(e,L3(t)),velocity:_3(t,.1)}}function L3(e){return e[0]}function K1(e){return e[e.length-1]}function _3(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const i=K1(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>mn(t)));)n--;if(!r)return{x:0,y:0};const o=gn(i.timestamp-r.timestamp);if(o===0)return{x:0,y:0};const a={x:(i.x-r.x)/o,y:(i.y-r.y)/o};return a.x===1/0&&(a.x=0),a.y===1/0&&(a.y=0),a}function X1(e){let t=null;return()=>{const n=()=>{t=null};return t===null?(t=e,n):!1}}const Uh=X1("dragHorizontal"),Wh=X1("dragVertical");function Q1(e){let t=!1;if(e==="y")t=Wh();else if(e==="x")t=Uh();else{const n=Uh(),r=Wh();n&&r?t=()=>{n(),r()}:(n&&n(),r&&r())}return t}function Z1(){const e=Q1(!0);return e?(e(),!1):!0}function ni(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}const J1=1e-4,O3=1-J1,I3=1+J1,ex=.01,R3=0-ex,V3=0+ex;function gt(e){return e.max-e.min}function D3(e,t,n){return Math.abs(e-t)<=n}function Gh(e,t,n,r=.5){e.origin=r,e.originPoint=we(t.min,t.max,e.origin),e.scale=gt(n)/gt(t),e.translate=we(n.min,n.max,e.origin)-e.originPoint,(e.scale>=O3&&e.scale<=I3||isNaN(e.scale))&&(e.scale=1),(e.translate>=R3&&e.translate<=V3||isNaN(e.translate))&&(e.translate=0)}function wo(e,t,n,r){Gh(e.x,t.x,n.x,r?r.originX:void 0),Gh(e.y,t.y,n.y,r?r.originY:void 0)}function qh(e,t,n){e.min=n.min+t.min,e.max=e.min+gt(t)}function N3(e,t,n){qh(e.x,t.x,n.x),qh(e.y,t.y,n.y)}function Yh(e,t,n){e.min=t.min-n.min,e.max=e.min+gt(t)}function bo(e,t,n){Yh(e.x,t.x,n.x),Yh(e.y,t.y,n.y)}function B3(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?we(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?we(n,e,r.max):Math.min(e,n)),e}function Kh(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function F3(e,{top:t,left:n,bottom:r,right:i}){return{x:Kh(e.x,n,i),y:Kh(e.y,t,r)}}function Xh(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function $3(e,t){return{x:Xh(e.x,t.x),y:Xh(e.y,t.y)}}function H3(e,t){let n=.5;const r=gt(e),i=gt(t);return i>r?n=zr(t.min,t.max-r,e.min):r>i&&(n=zr(e.min,e.max-i,t.min)),er(0,1,n)}function U3(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const Hu=.35;function W3(e=Hu){return e===!1?e=0:e===!0&&(e=Hu),{x:Qh(e,"left","right"),y:Qh(e,"top","bottom")}}function Qh(e,t,n){return{min:Zh(e,t),max:Zh(e,n)}}function Zh(e,t){return typeof e=="number"?e:e[t]||0}const Jh=()=>({translate:0,scale:1,origin:0,originPoint:0}),ri=()=>({x:Jh(),y:Jh()}),em=()=>({min:0,max:0}),Te=()=>({x:em(),y:em()});function Pt(e){return[e("x"),e("y")]}function tx({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function G3({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function q3(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function mc(e){return e===void 0||e===1}function Uu({scale:e,scaleX:t,scaleY:n}){return!mc(e)||!mc(t)||!mc(n)}function dr(e){return Uu(e)||nx(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function nx(e){return tm(e.x)||tm(e.y)}function tm(e){return e&&e!=="0%"}function Is(e,t,n){const r=e-n,i=t*r;return n+i}function nm(e,t,n,r,i){return i!==void 0&&(e=Is(e,i,r)),Is(e,n,r)+t}function Wu(e,t=0,n=1,r,i){e.min=nm(e.min,t,n,r,i),e.max=nm(e.max,t,n,r,i)}function rx(e,{x:t,y:n}){Wu(e.x,t.translate,t.scale,t.originPoint),Wu(e.y,n.translate,n.scale,n.originPoint)}const rm=.999999999999,im=1.0000000000001;function Y3(e,t,n,r=!1){const i=n.length;if(!i)return;t.x=t.y=1;let o,a;for(let s=0;s<i;s++){o=n[s],a=o.projectionDelta;const{visualElement:l}=o.options;l&&l.props.style&&l.props.style.display==="contents"||(r&&o.options.layoutScroll&&o.scroll&&o!==o.root&&oi(e,{x:-o.scroll.offset.x,y:-o.scroll.offset.y}),a&&(t.x*=a.x.scale,t.y*=a.y.scale,rx(e,a)),r&&dr(o.latestValues)&&oi(e,o.latestValues))}t.x<im&&t.x>rm&&(t.x=1),t.y<im&&t.y>rm&&(t.y=1)}function ii(e,t){e.min=e.min+t,e.max=e.max+t}function om(e,t,n,r,i=.5){const o=we(e.min,e.max,i);Wu(e,t,n,o,r)}function oi(e,t){om(e.x,t.x,t.scaleX,t.scale,t.originX),om(e.y,t.y,t.scaleY,t.scale,t.originY)}function ix(e,t){return tx(q3(e.getBoundingClientRect(),t))}function K3(e,t,n){const r=ix(e,n),{scroll:i}=t;return i&&(ii(r.x,i.offset.x),ii(r.y,i.offset.y)),r}const ox=({current:e})=>e?e.ownerDocument.defaultView:null,X3=new WeakMap;class Q3{constructor(t){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Te(),this.visualElement=t}start(t,{snapToCursor:n=!1}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const i=d=>{const{dragSnapToOrigin:p}=this.getProps();p?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(vl(d,"page").point)},o=(d,p)=>{const{drag:f,dragPropagation:v,onDragStart:x}=this.getProps();if(f&&!v&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=Q1(f),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Pt(b=>{let g=this.getAxisMotionValue(b).get()||0;if(en.test(g)){const{projection:h}=this.visualElement;if(h&&h.layout){const m=h.layout.layoutBox[b];m&&(g=gt(m)*(parseFloat(g)/100))}}this.originPoint[b]=g}),x&&ie.postRender(()=>x(d,p)),Fu(this.visualElement,"transform");const{animationState:y}=this.visualElement;y&&y.setActive("whileDrag",!0)},a=(d,p)=>{const{dragPropagation:f,dragDirectionLock:v,onDirectionLock:x,onDrag:y}=this.getProps();if(!f&&!this.openGlobalLock)return;const{offset:b}=p;if(v&&this.currentDirection===null){this.currentDirection=Z3(b),this.currentDirection!==null&&x&&x(this.currentDirection);return}this.updateAxis("x",p.point,b),this.updateAxis("y",p.point,b),this.visualElement.render(),y&&y(d,p)},s=(d,p)=>this.stop(d,p),l=()=>Pt(d=>{var p;return this.getAnimationState(d)==="paused"&&((p=this.getAxisMotionValue(d).animation)===null||p===void 0?void 0:p.play())}),{dragSnapToOrigin:u}=this.getProps();this.panSession=new Y1(t,{onSessionStart:i,onStart:o,onMove:a,onSessionEnd:s,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:u,contextWindow:ox(this.visualElement)})}stop(t,n){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:i}=n;this.startAnimation(i);const{onDragEnd:o}=this.getProps();o&&ie.postRender(()=>o(t,n))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(t,n,r){const{drag:i}=this.getProps();if(!r||!Ea(t,i,this.currentDirection))return;const o=this.getAxisMotionValue(t);let a=this.originPoint[t]+r[t];this.constraints&&this.constraints[t]&&(a=B3(a,this.constraints[t],this.elastic[t])),o.set(a)}resolveConstraints(){var t;const{dragConstraints:n,dragElastic:r}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(t=this.visualElement.projection)===null||t===void 0?void 0:t.layout,o=this.constraints;n&&ni(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&i?this.constraints=F3(i.layoutBox,n):this.constraints=!1,this.elastic=W3(r),o!==this.constraints&&i&&this.constraints&&!this.hasMutatedConstraints&&Pt(a=>{this.constraints!==!1&&this.getAxisMotionValue(a)&&(this.constraints[a]=U3(i.layoutBox[a],this.constraints[a]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!ni(t))return!1;const r=t.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const o=K3(r,i.root,this.visualElement.getTransformPagePoint());let a=$3(i.layout.layoutBox,o);if(n){const s=n(G3(a));this.hasMutatedConstraints=!!s,s&&(a=tx(s))}return a}startAnimation(t){const{drag:n,dragMomentum:r,dragElastic:i,dragTransition:o,dragSnapToOrigin:a,onDragTransitionEnd:s}=this.getProps(),l=this.constraints||{},u=Pt(d=>{if(!Ea(d,n,this.currentDirection))return;let p=l&&l[d]||{};a&&(p={min:0,max:0});const f=i?200:1e6,v=i?40:1e7,x={type:"inertia",velocity:r?t[d]:0,bounceStiffness:f,bounceDamping:v,timeConstant:750,restDelta:1,restSpeed:10,...o,...p};return this.startAxisValueAnimation(d,x)});return Promise.all(u).then(s)}startAxisValueAnimation(t,n){const r=this.getAxisMotionValue(t);return Fu(this.visualElement,t),r.start(Pp(t,r,0,n,this.visualElement,!1))}stopAnimation(){Pt(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){Pt(t=>{var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(t){var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(t){const n=`_drag${t.toUpperCase()}`,r=this.visualElement.getProps(),i=r[n];return i||this.visualElement.getValue(t,(r.initial?r.initial[t]:void 0)||0)}snapToCursor(t){Pt(n=>{const{drag:r}=this.getProps();if(!Ea(n,r,this.currentDirection))return;const{projection:i}=this.visualElement,o=this.getAxisMotionValue(n);if(i&&i.layout){const{min:a,max:s}=i.layout.layoutBox[n];o.set(t[n]-we(a,s,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!ni(n)||!r||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};Pt(a=>{const s=this.getAxisMotionValue(a);if(s&&this.constraints!==!1){const l=s.get();i[a]=H3({min:l,max:l},this.constraints[a])}});const{transformTemplate:o}=this.visualElement.getProps();this.visualElement.current.style.transform=o?o({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),Pt(a=>{if(!Ea(a,t,null))return;const s=this.getAxisMotionValue(a),{min:l,max:u}=this.constraints[a];s.set(we(l,u,i[a]))})}addListeners(){if(!this.visualElement.current)return;X3.set(this.visualElement,this);const t=this.visualElement.current,n=xn(t,"pointerdown",l=>{const{drag:u,dragListener:d=!0}=this.getProps();u&&d&&this.start(l)}),r=()=>{const{dragConstraints:l}=this.getProps();ni(l)&&l.current&&(this.constraints=this.resolveRefConstraints())},{projection:i}=this.visualElement,o=i.addEventListener("measure",r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),ie.read(r);const a=fn(window,"resize",()=>this.scalePositionWithinConstraints()),s=i.addEventListener("didUpdate",({delta:l,hasLayoutChanged:u})=>{this.isDragging&&u&&(Pt(d=>{const p=this.getAxisMotionValue(d);p&&(this.originPoint[d]+=l[d].translate,p.set(p.get()+l[d].translate))}),this.visualElement.render())});return()=>{a(),n(),o(),s&&s()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:i=!1,dragConstraints:o=!1,dragElastic:a=Hu,dragMomentum:s=!0}=t;return{...t,drag:n,dragDirectionLock:r,dragPropagation:i,dragConstraints:o,dragElastic:a,dragMomentum:s}}}function Ea(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function Z3(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class J3 extends ar{constructor(t){super(t),this.removeGroupControls=Fe,this.removeListeners=Fe,this.controls=new Q3(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Fe}unmount(){this.removeGroupControls(),this.removeListeners()}}const am=e=>(t,n)=>{e&&ie.postRender(()=>e(t,n))};class ej extends ar{constructor(){super(...arguments),this.removePointerDownListener=Fe}onPointerDown(t){this.session=new Y1(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:ox(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:r,onPanEnd:i}=this.node.getProps();return{onSessionStart:am(t),onStart:am(n),onMove:r,onEnd:(o,a)=>{delete this.session,i&&ie.postRender(()=>i(o,a))}}}mount(){this.removePointerDownListener=xn(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const xl=T.createContext(null);function tj(){const e=T.useContext(xl);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:n,register:r}=e,i=T.useId();T.useEffect(()=>r(i),[]);const o=T.useCallback(()=>n&&n(i),[i,n]);return!t&&n?[!1,o]:[!0]}const Ap=T.createContext({}),ax=T.createContext({}),Ya={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function sm(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const Ki={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(G.test(e))e=parseFloat(e);else return e;const n=sm(e,t.target.x),r=sm(e,t.target.y);return`${n}% ${r}%`}},nj={correct:(e,{treeScale:t,projectionDelta:n})=>{const r=e,i=tr.parse(e);if(i.length>5)return r;const o=tr.createTransformer(e),a=typeof i[0]!="number"?1:0,s=n.x.scale*t.x,l=n.y.scale*t.y;i[0+a]/=s,i[1+a]/=l;const u=we(s,l,.5);return typeof i[2+a]=="number"&&(i[2+a]/=u),typeof i[3+a]=="number"&&(i[3+a]/=u),o(i)}},Rs={};function rj(e){Object.assign(Rs,e)}const{schedule:Mp,cancel:Wk}=o1(queueMicrotask,!1);class ij extends T.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r,layoutId:i}=this.props,{projection:o}=t;rj(oj),o&&(n.group&&n.group.add(o),r&&r.register&&i&&r.register(o),o.root.didUpdate(),o.addEventListener("animationComplete",()=>{this.safeToRemove()}),o.setOptions({...o.options,onExitComplete:()=>this.safeToRemove()})),Ya.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:r,drag:i,isPresent:o}=this.props,a=r.projection;return a&&(a.isPresent=o,i||t.layoutDependency!==n||n===void 0?a.willUpdate():this.safeToRemove(),t.isPresent!==o&&(o?a.promote():a.relegate()||ie.postRender(()=>{const s=a.getStack();(!s||!s.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),Mp.postRender(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:i}=t;i&&(i.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(i),r&&r.deregister&&r.deregister(i))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function sx(e){const[t,n]=tj(),r=T.useContext(Ap);return c.jsx(ij,{...e,layoutGroup:r,switchLayoutGroup:T.useContext(ax),isPresent:t,safeToRemove:n})}const oj={borderRadius:{...Ki,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Ki,borderTopRightRadius:Ki,borderBottomLeftRadius:Ki,borderBottomRightRadius:Ki,boxShadow:nj},lx=["TopLeft","TopRight","BottomLeft","BottomRight"],aj=lx.length,lm=e=>typeof e=="string"?parseFloat(e):e,cm=e=>typeof e=="number"||G.test(e);function sj(e,t,n,r,i,o){i?(e.opacity=we(0,n.opacity!==void 0?n.opacity:1,lj(r)),e.opacityExit=we(t.opacity!==void 0?t.opacity:1,0,cj(r))):o&&(e.opacity=we(t.opacity!==void 0?t.opacity:1,n.opacity!==void 0?n.opacity:1,r));for(let a=0;a<aj;a++){const s=`border${lx[a]}Radius`;let l=um(t,s),u=um(n,s);if(l===void 0&&u===void 0)continue;l||(l=0),u||(u=0),l===0||u===0||cm(l)===cm(u)?(e[s]=Math.max(we(lm(l),lm(u),r),0),(en.test(u)||en.test(l))&&(e[s]+="%")):e[s]=u}(t.rotate||n.rotate)&&(e.rotate=we(t.rotate||0,n.rotate||0,r))}function um(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const lj=cx(0,.5,p1),cj=cx(.5,.95,Fe);function cx(e,t,n){return r=>r<e?0:r>t?1:n(zr(e,t,r))}function dm(e,t){e.min=t.min,e.max=t.max}function Ct(e,t){dm(e.x,t.x),dm(e.y,t.y)}function pm(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}function fm(e,t,n,r,i){return e-=t,e=Is(e,1/n,r),i!==void 0&&(e=Is(e,1/i,r)),e}function uj(e,t=0,n=1,r=.5,i,o=e,a=e){if(en.test(t)&&(t=parseFloat(t),t=we(a.min,a.max,t/100)-a.min),typeof t!="number")return;let s=we(o.min,o.max,r);e===o&&(s-=t),e.min=fm(e.min,t,n,s,i),e.max=fm(e.max,t,n,s,i)}function hm(e,t,[n,r,i],o,a){uj(e,t[n],t[r],t[i],t.scale,o,a)}const dj=["x","scaleX","originX"],pj=["y","scaleY","originY"];function mm(e,t,n,r){hm(e.x,t,dj,n?n.x:void 0,r?r.x:void 0),hm(e.y,t,pj,n?n.y:void 0,r?r.y:void 0)}function gm(e){return e.translate===0&&e.scale===1}function ux(e){return gm(e.x)&&gm(e.y)}function vm(e,t){return e.min===t.min&&e.max===t.max}function fj(e,t){return vm(e.x,t.x)&&vm(e.y,t.y)}function xm(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function dx(e,t){return xm(e.x,t.x)&&xm(e.y,t.y)}function ym(e){return gt(e.x)/gt(e.y)}function wm(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}class hj{constructor(){this.members=[]}add(t){Ep(this.members,t),t.scheduleRender()}remove(t){if(kp(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(i=>t===i);if(n===0)return!1;let r;for(let i=n;i>=0;i--){const o=this.members[i];if(o.isPresent!==!1){r=o;break}}return r?(this.promote(r),!0):!1}promote(t,n){const r=this.lead;if(t!==r&&(this.prevLead=r,this.lead=t,t.show(),r)){r.instance&&r.scheduleRender(),t.scheduleRender(),t.resumeFrom=r,n&&(t.resumeFrom.preserveOpacity=!0),r.snapshot&&(t.snapshot=r.snapshot,t.snapshot.latestValues=r.animationValues||r.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:i}=t.options;i===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:r}=t;n.onExitComplete&&n.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function mj(e,t,n){let r="";const i=e.x.translate/t.x,o=e.y.translate/t.y,a=(n==null?void 0:n.z)||0;if((i||o||a)&&(r=`translate3d(${i}px, ${o}px, ${a}px) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{transformPerspective:u,rotate:d,rotateX:p,rotateY:f,skewX:v,skewY:x}=n;u&&(r=`perspective(${u}px) ${r}`),d&&(r+=`rotate(${d}deg) `),p&&(r+=`rotateX(${p}deg) `),f&&(r+=`rotateY(${f}deg) `),v&&(r+=`skewX(${v}deg) `),x&&(r+=`skewY(${x}deg) `)}const s=e.x.scale*t.x,l=e.y.scale*t.y;return(s!==1||l!==1)&&(r+=`scale(${s}, ${l})`),r||"none"}const gj=(e,t)=>e.depth-t.depth;class vj{constructor(){this.children=[],this.isDirty=!1}add(t){Ep(this.children,t),this.isDirty=!0}remove(t){kp(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(gj),this.isDirty=!1,this.children.forEach(t)}}function Ka(e){const t=qe(e)?e.get():e;return l3(t)?t.toValue():t}function xj(e,t){const n=tn.now(),r=({timestamp:i})=>{const o=i-n;o>=t&&(Wt(r),e(o-t))};return ie.read(r,!0),()=>Wt(r)}function yj(e){return e instanceof SVGElement&&e.tagName!=="svg"}function wj(e,t,n){const r=qe(e)?e:Xt(e);return r.start(Pp("",r,t,n)),r.animation}const pr={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},ao=typeof window<"u"&&window.MotionDebug!==void 0,gc=["","X","Y","Z"],bj={visibility:"hidden"},bm=1e3;let Sj=0;function vc(e,t,n,r){const{latestValues:i}=t;i[e]&&(n[e]=i[e],t.setStaticValue(e,0),r&&(r[e]=0))}function px(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:t}=e.options;if(!t)return;const n=H1(t);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:i,layoutId:o}=e.options;window.MotionCancelOptimisedAnimation(n,"transform",ie,!(i||o))}const{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&px(r)}function fx({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(a={},s=t==null?void 0:t()){this.id=Sj++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,ao&&(pr.totalNodes=pr.resolvedTargetDeltas=pr.recalculatedProjection=0),this.nodes.forEach(Tj),this.nodes.forEach(Aj),this.nodes.forEach(Mj),this.nodes.forEach(Pj),ao&&window.MotionDebug.record(pr)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=a,this.root=s?s.root||s:this,this.path=s?[...s.path,s]:[],this.parent=s,this.depth=s?s.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new vj)}addEventListener(a,s){return this.eventHandlers.has(a)||this.eventHandlers.set(a,new zp),this.eventHandlers.get(a).add(s)}notifyListeners(a,...s){const l=this.eventHandlers.get(a);l&&l.notify(...s)}hasListeners(a){return this.eventHandlers.has(a)}mount(a,s=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=yj(a),this.instance=a;const{layoutId:l,layout:u,visualElement:d}=this.options;if(d&&!d.current&&d.mount(a),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),s&&(u||l)&&(this.isLayoutDirty=!0),e){let p;const f=()=>this.root.updateBlockedByResize=!1;e(a,()=>{this.root.updateBlockedByResize=!0,p&&p(),p=xj(f,250),Ya.hasAnimatedSinceResize&&(Ya.hasAnimatedSinceResize=!1,this.nodes.forEach(jm))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&d&&(l||u)&&this.addEventListener("didUpdate",({delta:p,hasLayoutChanged:f,hasRelativeTargetChanged:v,layout:x})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const y=this.options.transition||d.getDefaultTransition()||Rj,{onLayoutAnimationStart:b,onLayoutAnimationComplete:g}=d.getProps(),h=!this.targetLayout||!dx(this.targetLayout,x)||v,m=!f&&v;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||m||f&&(h||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(p,m);const w={...up(y,"layout"),onPlay:b,onComplete:g};(d.shouldReduceMotion||this.options.layoutRoot)&&(w.delay=0,w.type=!1),this.startAnimation(w)}else f||jm(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=x})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const a=this.getStack();a&&a.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Wt(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(Lj),this.animationId++)}getTransformTemplate(){const{visualElement:a}=this.options;return a&&a.getProps().transformTemplate}willUpdate(a=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&px(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let d=0;d<this.path.length;d++){const p=this.path[d];p.shouldResetTransform=!0,p.updateScroll("snapshot"),p.options.layoutRoot&&p.willUpdate(!1)}const{layoutId:s,layout:l}=this.options;if(s===void 0&&!l)return;const u=this.getTransformTemplate();this.prevTransformTemplateValue=u?u(this.latestValues,""):void 0,this.updateSnapshot(),a&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Sm);return}this.isUpdating||this.nodes.forEach(kj),this.isUpdating=!1,this.nodes.forEach(zj),this.nodes.forEach(jj),this.nodes.forEach(Cj),this.clearAllSnapshots();const s=tn.now();_e.delta=er(0,1e3/60,s-_e.timestamp),_e.timestamp=s,_e.isProcessing=!0,lc.update.process(_e),lc.preRender.process(_e),lc.render.process(_e),_e.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Mp.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(Ej),this.sharedNodes.forEach(_j)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,ie.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){ie.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const a=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Te(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:s}=this.options;s&&s.notify("LayoutMeasure",this.layout.layoutBox,a?a.layoutBox:void 0)}updateScroll(a="measure"){let s=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===a&&(s=!1),s){const l=r(this.instance);this.scroll={animationId:this.root.animationId,phase:a,isRoot:l,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!i)return;const a=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,s=this.projectionDelta&&!ux(this.projectionDelta),l=this.getTransformTemplate(),u=l?l(this.latestValues,""):void 0,d=u!==this.prevTransformTemplateValue;a&&(s||dr(this.latestValues)||d)&&(i(this.instance,u),this.shouldResetTransform=!1,this.scheduleRender())}measure(a=!0){const s=this.measurePageBox();let l=this.removeElementScroll(s);return a&&(l=this.removeTransform(l)),Vj(l),{animationId:this.root.animationId,measuredBox:s,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){var a;const{visualElement:s}=this.options;if(!s)return Te();const l=s.measureViewportBox();if(!(((a=this.scroll)===null||a===void 0?void 0:a.wasRoot)||this.path.some(Dj))){const{scroll:d}=this.root;d&&(ii(l.x,d.offset.x),ii(l.y,d.offset.y))}return l}removeElementScroll(a){var s;const l=Te();if(Ct(l,a),!((s=this.scroll)===null||s===void 0)&&s.wasRoot)return l;for(let u=0;u<this.path.length;u++){const d=this.path[u],{scroll:p,options:f}=d;d!==this.root&&p&&f.layoutScroll&&(p.wasRoot&&Ct(l,a),ii(l.x,p.offset.x),ii(l.y,p.offset.y))}return l}applyTransform(a,s=!1){const l=Te();Ct(l,a);for(let u=0;u<this.path.length;u++){const d=this.path[u];!s&&d.options.layoutScroll&&d.scroll&&d!==d.root&&oi(l,{x:-d.scroll.offset.x,y:-d.scroll.offset.y}),dr(d.latestValues)&&oi(l,d.latestValues)}return dr(this.latestValues)&&oi(l,this.latestValues),l}removeTransform(a){const s=Te();Ct(s,a);for(let l=0;l<this.path.length;l++){const u=this.path[l];if(!u.instance||!dr(u.latestValues))continue;Uu(u.latestValues)&&u.updateSnapshot();const d=Te(),p=u.measurePageBox();Ct(d,p),mm(s,u.latestValues,u.snapshot?u.snapshot.layoutBox:void 0,d)}return dr(this.latestValues)&&mm(s,this.latestValues),s}setTargetDelta(a){this.targetDelta=a,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(a){this.options={...this.options,...a,crossfade:a.crossfade!==void 0?a.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==_e.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(a=!1){var s;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const u=!!this.resumingFrom||this!==l;if(!(a||u&&this.isSharedProjectionDirty||this.isProjectionDirty||!((s=this.parent)===null||s===void 0)&&s.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:p,layoutId:f}=this.options;if(!(!this.layout||!(p||f))){if(this.resolvedRelativeTargetAt=_e.timestamp,!this.targetDelta&&!this.relativeTarget){const v=this.getClosestProjectingParent();v&&v.layout&&this.animationProgress!==1?(this.relativeParent=v,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Te(),this.relativeTargetOrigin=Te(),bo(this.relativeTargetOrigin,this.layout.layoutBox,v.layout.layoutBox),Ct(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=Te(),this.targetWithTransforms=Te()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),N3(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Ct(this.target,this.layout.layoutBox),rx(this.target,this.targetDelta)):Ct(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const v=this.getClosestProjectingParent();v&&!!v.resumingFrom==!!this.resumingFrom&&!v.options.layoutScroll&&v.target&&this.animationProgress!==1?(this.relativeParent=v,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Te(),this.relativeTargetOrigin=Te(),bo(this.relativeTargetOrigin,this.target,v.target),Ct(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}ao&&pr.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||Uu(this.parent.latestValues)||nx(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var a;const s=this.getLead(),l=!!this.resumingFrom||this!==s;let u=!0;if((this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty)&&(u=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(u=!1),this.resolvedRelativeTargetAt===_e.timestamp&&(u=!1),u)return;const{layout:d,layoutId:p}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(d||p))return;Ct(this.layoutCorrected,this.layout.layoutBox);const f=this.treeScale.x,v=this.treeScale.y;Y3(this.layoutCorrected,this.treeScale,this.path,l),s.layout&&!s.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(s.target=s.layout.layoutBox,s.targetWithTransforms=Te());const{target:x}=s;if(!x){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(pm(this.prevProjectionDelta.x,this.projectionDelta.x),pm(this.prevProjectionDelta.y,this.projectionDelta.y)),wo(this.projectionDelta,this.layoutCorrected,x,this.latestValues),(this.treeScale.x!==f||this.treeScale.y!==v||!wm(this.projectionDelta.x,this.prevProjectionDelta.x)||!wm(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",x)),ao&&pr.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(a=!0){var s;if((s=this.options.visualElement)===null||s===void 0||s.scheduleRender(),a){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=ri(),this.projectionDelta=ri(),this.projectionDeltaWithTransform=ri()}setAnimationOrigin(a,s=!1){const l=this.snapshot,u=l?l.latestValues:{},d={...this.latestValues},p=ri();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!s;const f=Te(),v=l?l.source:void 0,x=this.layout?this.layout.source:void 0,y=v!==x,b=this.getStack(),g=!b||b.members.length<=1,h=!!(y&&!g&&this.options.crossfade===!0&&!this.path.some(Ij));this.animationProgress=0;let m;this.mixTargetDelta=w=>{const S=w/1e3;Cm(p.x,a.x,S),Cm(p.y,a.y,S),this.setTargetDelta(p),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(bo(f,this.layout.layoutBox,this.relativeParent.layout.layoutBox),Oj(this.relativeTarget,this.relativeTargetOrigin,f,S),m&&fj(this.relativeTarget,m)&&(this.isProjectionDirty=!1),m||(m=Te()),Ct(m,this.relativeTarget)),y&&(this.animationValues=d,sj(d,u,this.latestValues,S,h,g)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=S},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(a){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Wt(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=ie.update(()=>{Ya.hasAnimatedSinceResize=!0,this.currentAnimation=wj(0,bm,{...a,onUpdate:s=>{this.mixTargetDelta(s),a.onUpdate&&a.onUpdate(s)},onComplete:()=>{a.onComplete&&a.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const a=this.getStack();a&&a.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(bm),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const a=this.getLead();let{targetWithTransforms:s,target:l,layout:u,latestValues:d}=a;if(!(!s||!l||!u)){if(this!==a&&this.layout&&u&&hx(this.options.animationType,this.layout.layoutBox,u.layoutBox)){l=this.target||Te();const p=gt(this.layout.layoutBox.x);l.x.min=a.target.x.min,l.x.max=l.x.min+p;const f=gt(this.layout.layoutBox.y);l.y.min=a.target.y.min,l.y.max=l.y.min+f}Ct(s,l),oi(s,d),wo(this.projectionDeltaWithTransform,this.layoutCorrected,s,d)}}registerSharedNode(a,s){this.sharedNodes.has(a)||this.sharedNodes.set(a,new hj),this.sharedNodes.get(a).add(s);const u=s.options.initialPromotionConfig;s.promote({transition:u?u.transition:void 0,preserveFollowOpacity:u&&u.shouldPreserveFollowOpacity?u.shouldPreserveFollowOpacity(s):void 0})}isLead(){const a=this.getStack();return a?a.lead===this:!0}getLead(){var a;const{layoutId:s}=this.options;return s?((a=this.getStack())===null||a===void 0?void 0:a.lead)||this:this}getPrevLead(){var a;const{layoutId:s}=this.options;return s?(a=this.getStack())===null||a===void 0?void 0:a.prevLead:void 0}getStack(){const{layoutId:a}=this.options;if(a)return this.root.sharedNodes.get(a)}promote({needsReset:a,transition:s,preserveFollowOpacity:l}={}){const u=this.getStack();u&&u.promote(this,l),a&&(this.projectionDelta=void 0,this.needsReset=!0),s&&this.setOptions({transition:s})}relegate(){const a=this.getStack();return a?a.relegate(this):!1}resetSkewAndRotation(){const{visualElement:a}=this.options;if(!a)return;let s=!1;const{latestValues:l}=a;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(s=!0),!s)return;const u={};l.z&&vc("z",a,u,this.animationValues);for(let d=0;d<gc.length;d++)vc(`rotate${gc[d]}`,a,u,this.animationValues),vc(`skew${gc[d]}`,a,u,this.animationValues);a.render();for(const d in u)a.setStaticValue(d,u[d]),this.animationValues&&(this.animationValues[d]=u[d]);a.scheduleRender()}getProjectionStyles(a){var s,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return bj;const u={visibility:""},d=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,u.opacity="",u.pointerEvents=Ka(a==null?void 0:a.pointerEvents)||"",u.transform=d?d(this.latestValues,""):"none",u;const p=this.getLead();if(!this.projectionDelta||!this.layout||!p.target){const y={};return this.options.layoutId&&(y.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,y.pointerEvents=Ka(a==null?void 0:a.pointerEvents)||""),this.hasProjected&&!dr(this.latestValues)&&(y.transform=d?d({},""):"none",this.hasProjected=!1),y}const f=p.animationValues||p.latestValues;this.applyTransformsToTarget(),u.transform=mj(this.projectionDeltaWithTransform,this.treeScale,f),d&&(u.transform=d(f,u.transform));const{x:v,y:x}=this.projectionDelta;u.transformOrigin=`${v.origin*100}% ${x.origin*100}% 0`,p.animationValues?u.opacity=p===this?(l=(s=f.opacity)!==null&&s!==void 0?s:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:f.opacityExit:u.opacity=p===this?f.opacity!==void 0?f.opacity:"":f.opacityExit!==void 0?f.opacityExit:0;for(const y in Rs){if(f[y]===void 0)continue;const{correct:b,applyTo:g}=Rs[y],h=u.transform==="none"?f[y]:b(f[y],p);if(g){const m=g.length;for(let w=0;w<m;w++)u[g[w]]=h}else u[y]=h}return this.options.layoutId&&(u.pointerEvents=p===this?Ka(a==null?void 0:a.pointerEvents)||"":"none"),u}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(a=>{var s;return(s=a.currentAnimation)===null||s===void 0?void 0:s.stop()}),this.root.nodes.forEach(Sm),this.root.sharedNodes.clear()}}}function jj(e){e.updateLayout()}function Cj(e){var t;const n=((t=e.resumeFrom)===null||t===void 0?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:i}=e.layout,{animationType:o}=e.options,a=n.source!==e.layout.source;o==="size"?Pt(p=>{const f=a?n.measuredBox[p]:n.layoutBox[p],v=gt(f);f.min=r[p].min,f.max=f.min+v}):hx(o,n.layoutBox,r)&&Pt(p=>{const f=a?n.measuredBox[p]:n.layoutBox[p],v=gt(r[p]);f.max=f.min+v,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[p].max=e.relativeTarget[p].min+v)});const s=ri();wo(s,r,n.layoutBox);const l=ri();a?wo(l,e.applyTransform(i,!0),n.measuredBox):wo(l,r,n.layoutBox);const u=!ux(s);let d=!1;if(!e.resumeFrom){const p=e.getClosestProjectingParent();if(p&&!p.resumeFrom){const{snapshot:f,layout:v}=p;if(f&&v){const x=Te();bo(x,n.layoutBox,f.layoutBox);const y=Te();bo(y,r,v.layoutBox),dx(x,y)||(d=!0),p.options.layoutRoot&&(e.relativeTarget=y,e.relativeTargetOrigin=x,e.relativeParent=p)}}}e.notifyListeners("didUpdate",{layout:r,snapshot:n,delta:l,layoutDelta:s,hasLayoutChanged:u,hasRelativeTargetChanged:d})}else if(e.isLead()){const{onExitComplete:r}=e.options;r&&r()}e.options.transition=void 0}function Tj(e){ao&&pr.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function Pj(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function Ej(e){e.clearSnapshot()}function Sm(e){e.clearMeasurements()}function kj(e){e.isLayoutDirty=!1}function zj(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function jm(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function Aj(e){e.resolveTargetDelta()}function Mj(e){e.calcProjection()}function Lj(e){e.resetSkewAndRotation()}function _j(e){e.removeLeadSnapshot()}function Cm(e,t,n){e.translate=we(t.translate,0,n),e.scale=we(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function Tm(e,t,n,r){e.min=we(t.min,n.min,r),e.max=we(t.max,n.max,r)}function Oj(e,t,n,r){Tm(e.x,t.x,n.x,r),Tm(e.y,t.y,n.y,r)}function Ij(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const Rj={duration:.45,ease:[.4,0,.1,1]},Pm=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),Em=Pm("applewebkit/")&&!Pm("chrome/")?Math.round:Fe;function km(e){e.min=Em(e.min),e.max=Em(e.max)}function Vj(e){km(e.x),km(e.y)}function hx(e,t,n){return e==="position"||e==="preserve-aspect"&&!D3(ym(t),ym(n),.2)}function Dj(e){var t;return e!==e.root&&((t=e.scroll)===null||t===void 0?void 0:t.wasRoot)}const Nj=fx({attachResizeListener:(e,t)=>fn(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),xc={current:void 0},mx=fx({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!xc.current){const e=new Nj({});e.mount(window),e.setOptions({layoutScroll:!0}),xc.current=e}return xc.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),Bj={pan:{Feature:ej},drag:{Feature:J3,ProjectionNode:mx,MeasureLayout:sx}};function zm(e,t){const n=t?"pointerenter":"pointerleave",r=t?"onHoverStart":"onHoverEnd",i=(o,a)=>{if(o.pointerType==="touch"||Z1())return;const s=e.getProps();e.animationState&&s.whileHover&&e.animationState.setActive("whileHover",t);const l=s[r];l&&ie.postRender(()=>l(o,a))};return xn(e.current,n,i,{passive:!e.getProps()[r]})}class Fj extends ar{mount(){this.unmount=vn(zm(this.node,!0),zm(this.node,!1))}unmount(){}}class $j extends ar{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=vn(fn(this.node.current,"focus",()=>this.onFocus()),fn(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}const gx=(e,t)=>t?e===t?!0:gx(e,t.parentElement):!1;function yc(e,t){if(!t)return;const n=new PointerEvent("pointer"+e);t(n,vl(n))}class Hj extends ar{constructor(){super(...arguments),this.removeStartListeners=Fe,this.removeEndListeners=Fe,this.removeAccessibleListeners=Fe,this.startPointerPress=(t,n)=>{if(this.isPressing)return;this.removeEndListeners();const r=this.node.getProps(),o=xn(window,"pointerup",(s,l)=>{if(!this.checkPressEnd())return;const{onTap:u,onTapCancel:d,globalTapTarget:p}=this.node.getProps(),f=!p&&!gx(this.node.current,s.target)?d:u;f&&ie.update(()=>f(s,l))},{passive:!(r.onTap||r.onPointerUp)}),a=xn(window,"pointercancel",(s,l)=>this.cancelPress(s,l),{passive:!(r.onTapCancel||r.onPointerCancel)});this.removeEndListeners=vn(o,a),this.startPress(t,n)},this.startAccessiblePress=()=>{const t=o=>{if(o.key!=="Enter"||this.isPressing)return;const a=s=>{s.key!=="Enter"||!this.checkPressEnd()||yc("up",(l,u)=>{const{onTap:d}=this.node.getProps();d&&ie.postRender(()=>d(l,u))})};this.removeEndListeners(),this.removeEndListeners=fn(this.node.current,"keyup",a),yc("down",(s,l)=>{this.startPress(s,l)})},n=fn(this.node.current,"keydown",t),r=()=>{this.isPressing&&yc("cancel",(o,a)=>this.cancelPress(o,a))},i=fn(this.node.current,"blur",r);this.removeAccessibleListeners=vn(n,i)}}startPress(t,n){this.isPressing=!0;const{onTapStart:r,whileTap:i}=this.node.getProps();i&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),r&&ie.postRender(()=>r(t,n))}checkPressEnd(){return this.removeEndListeners(),this.isPressing=!1,this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!Z1()}cancelPress(t,n){if(!this.checkPressEnd())return;const{onTapCancel:r}=this.node.getProps();r&&ie.postRender(()=>r(t,n))}mount(){const t=this.node.getProps(),n=xn(t.globalTapTarget?window:this.node.current,"pointerdown",this.startPointerPress,{passive:!(t.onTapStart||t.onPointerStart)}),r=fn(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=vn(n,r)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}const Gu=new WeakMap,wc=new WeakMap,Uj=e=>{const t=Gu.get(e.target);t&&t(e)},Wj=e=>{e.forEach(Uj)};function Gj({root:e,...t}){const n=e||document;wc.has(n)||wc.set(n,{});const r=wc.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(Wj,{root:e,...t})),r[i]}function qj(e,t,n){const r=Gj(t);return Gu.set(e,n),r.observe(e),()=>{Gu.delete(e),r.unobserve(e)}}const Yj={some:0,all:1};class Kj extends ar{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:r,amount:i="some",once:o}=t,a={root:n?n.current:void 0,rootMargin:r,threshold:typeof i=="number"?i:Yj[i]},s=l=>{const{isIntersecting:u}=l;if(this.isInView===u||(this.isInView=u,o&&!u&&this.hasEnteredView))return;u&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",u);const{onViewportEnter:d,onViewportLeave:p}=this.node.getProps(),f=u?d:p;f&&f(l)};return qj(this.node.current,a,s)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(Xj(t,n))&&this.startObserver()}unmount(){}}function Xj({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const Qj={inView:{Feature:Kj},tap:{Feature:Hj},focus:{Feature:$j},hover:{Feature:Fj}},Zj={layout:{ProjectionNode:mx,MeasureLayout:sx}},yl=T.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"}),wl=T.createContext({}),Lp=typeof window<"u",bl=Lp?T.useLayoutEffect:T.useEffect,vx=T.createContext({strict:!1});function Jj(e,t,n,r,i){var o,a;const{visualElement:s}=T.useContext(wl),l=T.useContext(vx),u=T.useContext(xl),d=T.useContext(yl).reducedMotion,p=T.useRef();r=r||l.renderer,!p.current&&r&&(p.current=r(e,{visualState:t,parent:s,props:n,presenceContext:u,blockInitialAnimation:u?u.initial===!1:!1,reducedMotionConfig:d}));const f=p.current,v=T.useContext(ax);f&&!f.projection&&i&&(f.type==="html"||f.type==="svg")&&e4(p.current,n,i,v),T.useInsertionEffect(()=>{f&&f.update(n,u)});const x=n[$1],y=T.useRef(!!x&&!(!((o=window.MotionHandoffIsComplete)===null||o===void 0)&&o.call(window,x))&&((a=window.MotionHasOptimisedAnimation)===null||a===void 0?void 0:a.call(window,x)));return bl(()=>{f&&(window.MotionIsMounted=!0,f.updateFeatures(),Mp.render(f.render),y.current&&f.animationState&&f.animationState.animateChanges())}),T.useEffect(()=>{f&&(!y.current&&f.animationState&&f.animationState.animateChanges(),y.current&&(queueMicrotask(()=>{var b;(b=window.MotionHandoffMarkAsComplete)===null||b===void 0||b.call(window,x)}),y.current=!1))}),f}function e4(e,t,n,r){const{layoutId:i,layout:o,drag:a,dragConstraints:s,layoutScroll:l,layoutRoot:u}=t;e.projection=new n(e.latestValues,t["data-framer-portal-id"]?void 0:xx(e.parent)),e.projection.setOptions({layoutId:i,layout:o,alwaysMeasureLayout:!!a||s&&ni(s),visualElement:e,animationType:typeof o=="string"?o:"both",initialPromotionConfig:r,layoutScroll:l,layoutRoot:u})}function xx(e){if(e)return e.options.allowProjection!==!1?e.projection:xx(e.parent)}function t4(e,t,n){return T.useCallback(r=>{r&&e.mount&&e.mount(r),t&&(r?t.mount(r):t.unmount()),n&&(typeof n=="function"?n(r):ni(n)&&(n.current=r))},[t])}function Sl(e){return Uo(e.animate)||cp.some(t=>Wo(e[t]))}function yx(e){return!!(Sl(e)||e.variants)}function n4(e,t){if(Sl(e)){const{initial:n,animate:r}=e;return{initial:n===!1||Wo(n)?n:void 0,animate:Wo(r)?r:void 0}}return e.inherit!==!1?t:{}}function r4(e){const{initial:t,animate:n}=n4(e,T.useContext(wl));return T.useMemo(()=>({initial:t,animate:n}),[Am(t),Am(n)])}function Am(e){return Array.isArray(e)?e.join(" "):e}const Mm={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Ci={};for(const e in Mm)Ci[e]={isEnabled:t=>Mm[e].some(n=>!!t[n])};function i4(e){for(const t in e)Ci[t]={...Ci[t],...e[t]}}const o4=Symbol.for("motionComponentSymbol");function a4({preloadedFeatures:e,createVisualElement:t,useRender:n,useVisualState:r,Component:i}){e&&i4(e);function o(s,l){let u;const d={...T.useContext(yl),...s,layoutId:s4(s)},{isStatic:p}=d,f=r4(s),v=r(s,p);if(!p&&Lp){l4();const x=c4(d);u=x.MeasureLayout,f.visualElement=Jj(i,v,d,t,x.ProjectionNode)}return c.jsxs(wl.Provider,{value:f,children:[u&&f.visualElement?c.jsx(u,{visualElement:f.visualElement,...d}):null,n(i,s,t4(v,f.visualElement,l),v,p,f.visualElement)]})}const a=T.forwardRef(o);return a[o4]=i,a}function s4({layoutId:e}){const t=T.useContext(Ap).id;return t&&e!==void 0?t+"-"+e:e}function l4(e,t){T.useContext(vx).strict}function c4(e){const{drag:t,layout:n}=Ci;if(!t&&!n)return{};const r={...t,...n};return{MeasureLayout:t!=null&&t.isEnabled(e)||n!=null&&n.isEnabled(e)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}const u4=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function _p(e){return typeof e!="string"||e.includes("-")?!1:!!(u4.indexOf(e)>-1||/[A-Z]/u.test(e))}function wx(e,{style:t,vars:n},r,i){Object.assign(e.style,t,i&&i.getProjectionStyles(r));for(const o in n)e.style.setProperty(o,n[o])}const bx=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function Sx(e,t,n,r){wx(e,t,void 0,r);for(const i in t.attrs)e.setAttribute(bx.has(i)?i:gl(i),t.attrs[i])}function jx(e,{layout:t,layoutId:n}){return or.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!Rs[e]||e==="opacity")}function Op(e,t,n){var r;const{style:i}=e,o={};for(const a in i)(qe(i[a])||t.style&&qe(t.style[a])||jx(a,e)||((r=n==null?void 0:n.getValue(a))===null||r===void 0?void 0:r.liveStyle)!==void 0)&&(o[a]=i[a]);return n&&i&&typeof i.willChange=="string"&&(n.applyWillChange=!1),o}function Cx(e,t,n){const r=Op(e,t,n);for(const i in e)if(qe(e[i])||qe(t[i])){const o=ra.indexOf(i)!==-1?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i;r[o]=e[i]}return r}function Ri(e){const t=T.useRef(null);return t.current===null&&(t.current=e()),t.current}function d4({applyWillChange:e=!1,scrapeMotionValuesFromProps:t,createRenderState:n,onMount:r},i,o,a,s){const l={latestValues:p4(i,o,a,s?!1:e,t),renderState:n()};return r&&(l.mount=u=>r(i,u,l)),l}const Tx=e=>(t,n)=>{const r=T.useContext(wl),i=T.useContext(xl),o=()=>d4(e,t,r,i,n);return n?o():Ri(o)};function Lm(e,t,n){const r=Array.isArray(t)?t:[t];for(let i=0;i<r.length;i++){const o=sp(e,r[i]);if(o){const{transitionEnd:a,transition:s,...l}=o;n(l,a)}}}function p4(e,t,n,r,i){var o;const a={};let s=r&&((o=e.style)===null||o===void 0?void 0:o.willChange)===void 0;const l=i(e,{});for(const y in l)a[y]=Ka(l[y]);let{initial:u,animate:d}=e;const p=Sl(e),f=yx(e);t&&f&&!p&&e.inherit!==!1&&(u===void 0&&(u=t.initial),d===void 0&&(d=t.animate));let v=n?n.initial===!1:!1;v=v||u===!1;const x=v?d:u;return x&&typeof x!="boolean"&&!Uo(x)&&Lm(e,x,(y,b)=>{for(const g in y){let h=y[g];if(Array.isArray(h)){const m=v?h.length-1:0;h=h[m]}h!==null&&(a[g]=h)}for(const g in b)a[g]=b[g]}),s&&d&&u!==!1&&!Uo(d)&&Lm(e,d,y=>{for(const b in y)if(U1(b)){a.willChange="transform";return}}),a}const Ip=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),Px=()=>({...Ip(),attrs:{}}),Ex=(e,t)=>t&&typeof e=="number"?t.transform(e):e,f4={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},h4=ra.length;function m4(e,t,n){let r="",i=!0;for(let o=0;o<h4;o++){const a=ra[o],s=e[a];if(s===void 0)continue;let l=!0;if(typeof s=="number"?l=s===(a.startsWith("scale")?1:0):l=parseFloat(s)===0,!l||n){const u=Ex(s,vp[a]);if(!l){i=!1;const d=f4[a]||a;r+=`${d}(${u}) `}n&&(t[a]=u)}}return r=r.trim(),n?r=n(t,i?"":r):i&&(r="none"),r}function Rp(e,t,n){const{style:r,vars:i,transformOrigin:o}=e;let a=!1,s=!1;for(const l in t){const u=t[l];if(or.has(l)){a=!0;continue}else if(v1(l)){i[l]=u;continue}else{const d=Ex(u,vp[l]);l.startsWith("origin")?(s=!0,o[l]=d):r[l]=d}}if(t.transform||(a||n?r.transform=m4(t,e.transform,n):r.transform&&(r.transform="none")),s){const{originX:l="50%",originY:u="50%",originZ:d=0}=o;r.transformOrigin=`${l} ${u} ${d}`}}function _m(e,t,n){return typeof e=="string"?e:G.transform(t+n*e)}function g4(e,t,n){const r=_m(t,e.x,e.width),i=_m(n,e.y,e.height);return`${r} ${i}`}const v4={offset:"stroke-dashoffset",array:"stroke-dasharray"},x4={offset:"strokeDashoffset",array:"strokeDasharray"};function y4(e,t,n=1,r=0,i=!0){e.pathLength=1;const o=i?v4:x4;e[o.offset]=G.transform(-r);const a=G.transform(t),s=G.transform(n);e[o.array]=`${a} ${s}`}function Vp(e,{attrX:t,attrY:n,attrScale:r,originX:i,originY:o,pathLength:a,pathSpacing:s=1,pathOffset:l=0,...u},d,p){if(Rp(e,u,p),d){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:f,style:v,dimensions:x}=e;f.transform&&(x&&(v.transform=f.transform),delete f.transform),x&&(i!==void 0||o!==void 0||v.transform)&&(v.transformOrigin=g4(x,i!==void 0?i:.5,o!==void 0?o:.5)),t!==void 0&&(f.x=t),n!==void 0&&(f.y=n),r!==void 0&&(f.scale=r),a!==void 0&&y4(f,a,s,l,!1)}const Dp=e=>typeof e=="string"&&e.toLowerCase()==="svg",w4={useVisualState:Tx({scrapeMotionValuesFromProps:Cx,createRenderState:Px,onMount:(e,t,{renderState:n,latestValues:r})=>{ie.read(()=>{try{n.dimensions=typeof t.getBBox=="function"?t.getBBox():t.getBoundingClientRect()}catch{n.dimensions={x:0,y:0,width:0,height:0}}}),ie.render(()=>{Vp(n,r,Dp(t.tagName),e.transformTemplate),Sx(t,n)})}})},b4={useVisualState:Tx({applyWillChange:!0,scrapeMotionValuesFromProps:Op,createRenderState:Ip})};function kx(e,t,n){for(const r in t)!qe(t[r])&&!jx(r,n)&&(e[r]=t[r])}function S4({transformTemplate:e},t){return T.useMemo(()=>{const n=Ip();return Rp(n,t,e),Object.assign({},n.vars,n.style)},[t])}function j4(e,t){const n=e.style||{},r={};return kx(r,n,e),Object.assign(r,S4(e,t)),r}function C4(e,t){const n={},r=j4(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}const T4=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Vs(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||T4.has(e)}let zx=e=>!Vs(e);function P4(e){e&&(zx=t=>t.startsWith("on")?!Vs(t):e(t))}try{P4(require("@emotion/is-prop-valid").default)}catch{}function E4(e,t,n){const r={};for(const i in e)i==="values"&&typeof e.values=="object"||(zx(i)||n===!0&&Vs(i)||!t&&!Vs(i)||e.draggable&&i.startsWith("onDrag"))&&(r[i]=e[i]);return r}function k4(e,t,n,r){const i=T.useMemo(()=>{const o=Px();return Vp(o,t,Dp(r),e.transformTemplate),{...o.attrs,style:{...o.style}}},[t]);if(e.style){const o={};kx(o,e.style,e),i.style={...o,...i.style}}return i}function z4(e=!1){return(n,r,i,{latestValues:o},a)=>{const l=(_p(n)?k4:C4)(r,o,a,n),u=E4(r,typeof n=="string",e),d=n!==T.Fragment?{...u,...l,ref:i}:{},{children:p}=r,f=T.useMemo(()=>qe(p)?p.get():p,[p]);return T.createElement(n,{...d,children:f})}}function A4(e,t){return function(r,{forwardMotionProps:i}={forwardMotionProps:!1}){const a={..._p(r)?w4:b4,preloadedFeatures:e,useRender:z4(i),createVisualElement:t,Component:r};return a4(a)}}const qu={current:null},Ax={current:!1};function M4(){if(Ax.current=!0,!!Lp)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>qu.current=e.matches;e.addListener(t),t()}else qu.current=!1}function L4(e,t,n){for(const r in t){const i=t[r],o=n[r];if(qe(i))e.addValue(r,i);else if(qe(o))e.addValue(r,Xt(i,{owner:e}));else if(o!==i)if(e.hasValue(r)){const a=e.getValue(r);a.liveStyle===!0?a.jump(i):a.hasAnimated||a.set(i)}else{const a=e.getStaticValue(r);e.addValue(r,Xt(a!==void 0?a:i,{owner:e}))}}for(const r in n)t[r]===void 0&&e.removeValue(r);return t}const Om=new WeakMap,_4=[...w1,We,tr],O4=e=>_4.find(y1(e)),Im=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class I4{scrapeMotionValuesFromProps(t,n,r){return{}}constructor({parent:t,props:n,presenceContext:r,reducedMotionConfig:i,blockInitialAnimation:o,visualState:a},s={}){this.applyWillChange=!1,this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=hp,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const f=tn.now();this.renderScheduledAt<f&&(this.renderScheduledAt=f,ie.render(this.render,!1,!0))};const{latestValues:l,renderState:u}=a;this.latestValues=l,this.baseTarget={...l},this.initialValues=n.initial?{...l}:{},this.renderState=u,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.options=s,this.blockInitialAnimation=!!o,this.isControllingVariants=Sl(n),this.isVariantNode=yx(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:d,...p}=this.scrapeMotionValuesFromProps(n,{},this);for(const f in p){const v=p[f];l[f]!==void 0&&qe(v)&&v.set(l[f],!1)}}mount(t){this.current=t,Om.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,r)=>this.bindToMotionValue(r,n)),Ax.current||M4(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:qu.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){Om.delete(this.current),this.projection&&this.projection.unmount(),Wt(this.notifyUpdate),Wt(this.render),this.valueSubscriptions.forEach(t=>t()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const t in this.events)this.events[t].clear();for(const t in this.features){const n=this.features[t];n&&(n.unmount(),n.isMounted=!1)}this.current=null}bindToMotionValue(t,n){this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)();const r=or.has(t),i=n.on("change",s=>{this.latestValues[t]=s,this.props.onUpdate&&ie.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0)}),o=n.on("renderRequest",this.scheduleRender);let a;window.MotionCheckAppearSync&&(a=window.MotionCheckAppearSync(this,t,n)),this.valueSubscriptions.set(t,()=>{i(),o(),a&&a(),n.owner&&n.stop()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in Ci){const n=Ci[t];if(!n)continue;const{isEnabled:r,Feature:i}=n;if(!this.features[t]&&i&&r(this.props)&&(this.features[t]=new i(this)),this.features[t]){const o=this.features[t];o.isMounted?o.update():(o.mount(),o.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Te()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<Im.length;r++){const i=Im[r];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const o="on"+i,a=t[o];a&&(this.propEventSubscriptions[i]=this.on(i,a))}this.prevMotionValues=L4(this,this.scrapeMotionValuesFromProps(t,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){const r=this.values.get(t);n!==r&&(r&&this.removeValue(t),this.bindToMotionValue(t,n),this.values.set(t,n),this.latestValues[t]=n.get())}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let r=this.values.get(t);return r===void 0&&n!==void 0&&(r=Xt(n===null?void 0:n,{owner:this}),this.addValue(t,r)),r}readValue(t,n){var r;let i=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:(r=this.getBaseTargetFromProps(this.props,t))!==null&&r!==void 0?r:this.readValueFromInstance(this.current,t,this.options);return i!=null&&(typeof i=="string"&&(m1(i)||h1(i))?i=parseFloat(i):!O4(i)&&tr.test(n)&&(i=k1(t,n)),this.setBaseTarget(t,qe(i)?i.get():i)),qe(i)?i.get():i}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var n;const{initial:r}=this.props;let i;if(typeof r=="string"||typeof r=="object"){const a=sp(this.props,r,(n=this.presenceContext)===null||n===void 0?void 0:n.custom);a&&(i=a[t])}if(r&&i!==void 0)return i;const o=this.getBaseTargetFromProps(this.props,t);return o!==void 0&&!qe(o)?o:this.initialValues[t]!==void 0&&i===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new zp),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}}class Mx extends I4{constructor(){super(...arguments),this.KeyframeResolver=z1}sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){return t.style?t.style[n]:void 0}removeValueFromRenderState(t,{vars:n,style:r}){delete n[t],delete r[t]}}function R4(e){return window.getComputedStyle(e)}class V4 extends Mx{constructor(){super(...arguments),this.type="html",this.applyWillChange=!0,this.renderInstance=wx}readValueFromInstance(t,n){if(or.has(n)){const r=xp(n);return r&&r.default||0}else{const r=R4(t),i=(v1(n)?r.getPropertyValue(n):r[n])||0;return typeof i=="string"?i.trim():i}}measureInstanceViewportBox(t,{transformPagePoint:n}){return ix(t,n)}build(t,n,r){Rp(t,n,r.transformTemplate)}scrapeMotionValuesFromProps(t,n,r){return Op(t,n,r)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;qe(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}class D4 extends Mx{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Te}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(or.has(n)){const r=xp(n);return r&&r.default||0}return n=bx.has(n)?n:gl(n),t.getAttribute(n)}scrapeMotionValuesFromProps(t,n,r){return Cx(t,n,r)}build(t,n,r){Vp(t,n,this.isSVGTag,r.transformTemplate)}renderInstance(t,n,r,i){Sx(t,n,r,i)}mount(t){this.isSVGTag=Dp(t.tagName),super.mount(t)}}const N4=(e,t)=>_p(e)?new D4(t):new V4(t,{allowProjection:e!==T.Fragment}),B4=A4({...z3,...Qj,...Bj,...Zj},N4),U=jS(B4);class F4 extends T.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent){const r=this.props.sizeRef.current;r.height=n.offsetHeight||0,r.width=n.offsetWidth||0,r.top=n.offsetTop,r.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function $4({children:e,isPresent:t}){const n=T.useId(),r=T.useRef(null),i=T.useRef({width:0,height:0,top:0,left:0}),{nonce:o}=T.useContext(yl);return T.useInsertionEffect(()=>{const{width:a,height:s,top:l,left:u}=i.current;if(t||!r.current||!a||!s)return;r.current.dataset.motionPopId=n;const d=document.createElement("style");return o&&(d.nonce=o),document.head.appendChild(d),d.sheet&&d.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${a}px !important;
            height: ${s}px !important;
            top: ${l}px !important;
            left: ${u}px !important;
          }
        `),()=>{document.head.removeChild(d)}},[t]),c.jsx(F4,{isPresent:t,childRef:r,sizeRef:i,children:T.cloneElement(e,{ref:r})})}const H4=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:o,mode:a})=>{const s=Ri(U4),l=T.useId(),u=T.useCallback(p=>{s.set(p,!0);for(const f of s.values())if(!f)return;r&&r()},[s,r]),d=T.useMemo(()=>({id:l,initial:t,isPresent:n,custom:i,onExitComplete:u,register:p=>(s.set(p,!1),()=>s.delete(p))}),o?[Math.random(),u]:[n,u]);return T.useMemo(()=>{s.forEach((p,f)=>s.set(f,!1))},[n]),T.useEffect(()=>{!n&&!s.size&&r&&r()},[n]),a==="popLayout"&&(e=c.jsx($4,{isPresent:n,children:e})),c.jsx(xl.Provider,{value:d,children:e})};function U4(){return new Map}const ka=e=>e.key||"";function Rm(e){const t=[];return T.Children.forEach(e,n=>{T.isValidElement(n)&&t.push(n)}),t}const W4=({children:e,exitBeforeEnter:t,custom:n,initial:r=!0,onExitComplete:i,presenceAffectsLayout:o=!0,mode:a="sync"})=>{const s=T.useMemo(()=>Rm(e),[e]),l=s.map(ka),u=T.useRef(!0),d=T.useRef(s),p=Ri(()=>new Map),[f,v]=T.useState(s),[x,y]=T.useState(s);bl(()=>{u.current=!1,d.current=s;for(let h=0;h<x.length;h++){const m=ka(x[h]);l.includes(m)?p.delete(m):p.get(m)!==!0&&p.set(m,!1)}},[x,l.length,l.join("-")]);const b=[];if(s!==f){let h=[...s];for(let m=0;m<x.length;m++){const w=x[m],S=ka(w);l.includes(S)||(h.splice(m,0,w),b.push(w))}a==="wait"&&b.length&&(h=b),y(Rm(h)),v(s);return}const{forceRender:g}=T.useContext(Ap);return c.jsx(c.Fragment,{children:x.map(h=>{const m=ka(h),w=s===x||l.includes(m),S=()=>{if(p.has(m))p.set(m,!0);else return;let C=!0;p.forEach(E=>{E||(C=!1)}),C&&(g==null||g(),y(d.current),i&&i())};return c.jsx(H4,{isPresent:w,initial:!u.current||r?void 0:!1,custom:w?void 0:n,presenceAffectsLayout:o,mode:a,onExitComplete:w?void 0:S,children:h},m)})})};function G4(e){const t=Ri(()=>Xt(e)),{isStatic:n}=T.useContext(yl);if(n){const[,r]=T.useState(e);T.useEffect(()=>t.on("change",r),[])}return t}function Lx(e,t){const n=G4(t()),r=()=>n.set(t());return r(),bl(()=>{const i=()=>ie.preRender(r,!1,!0),o=e.map(a=>a.on("change",i));return()=>{o.forEach(a=>a()),Wt(r)}}),n}const q4=e=>e&&typeof e=="object"&&e.mix,Y4=e=>q4(e)?e.mix:void 0;function K4(...e){const t=!Array.isArray(e[0]),n=t?0:-1,r=e[0+n],i=e[1+n],o=e[2+n],a=e[3+n],s=jp(i,o,{mixer:Y4(o[0]),...a});return t?s(r):s}function X4(e){yo.current=[],e();const t=Lx(yo.current,e);return yo.current=void 0,t}function vr(e,t,n,r){if(typeof e=="function")return X4(e);const i=typeof t=="function"?t:K4(t,n,r);return Array.isArray(e)?Vm(e,i):Vm([e],([o])=>i(o))}function Vm(e,t){const n=Ri(()=>[]);return Lx(e,()=>{n.length=0;const r=e.length;for(let i=0;i<r;i++)n[i]=e[i].get();return t(n)})}function _x(e,t,n){return typeof e=="string"?e=document.querySelectorAll(e):e instanceof Element&&(e=[e]),Array.from(e||[])}const Xa=new WeakMap;let Mn;function Q4(e,t){if(t){const{inlineSize:n,blockSize:r}=t[0];return{width:n,height:r}}else return e instanceof SVGElement&&"getBBox"in e?e.getBBox():{width:e.offsetWidth,height:e.offsetHeight}}function Z4({target:e,contentRect:t,borderBoxSize:n}){var r;(r=Xa.get(e))===null||r===void 0||r.forEach(i=>{i({target:e,contentSize:t,get size(){return Q4(e,n)}})})}function J4(e){e.forEach(Z4)}function eC(){typeof ResizeObserver>"u"||(Mn=new ResizeObserver(J4))}function tC(e,t){Mn||eC();const n=_x(e);return n.forEach(r=>{let i=Xa.get(r);i||(i=new Set,Xa.set(r,i)),i.add(t),Mn==null||Mn.observe(r)}),()=>{n.forEach(r=>{const i=Xa.get(r);i==null||i.delete(t),i!=null&&i.size||Mn==null||Mn.unobserve(r)})}}const Qa=new Set;let So;function nC(){So=()=>{const e={width:window.innerWidth,height:window.innerHeight},t={target:window,size:e,contentSize:e};Qa.forEach(n=>n(t))},window.addEventListener("resize",So)}function rC(e){return Qa.add(e),So||nC(),()=>{Qa.delete(e),!Qa.size&&So&&(So=void 0)}}function iC(e,t){return typeof e=="function"?rC(e):tC(e,t)}const oC=50,Dm=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),aC=()=>({time:0,x:Dm(),y:Dm()}),sC={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function Nm(e,t,n,r){const i=n[t],{length:o,position:a}=sC[t],s=i.current,l=n.time;i.current=e[`scroll${a}`],i.scrollLength=e[`scroll${o}`]-e[`client${o}`],i.offset.length=0,i.offset[0]=0,i.offset[1]=i.scrollLength,i.progress=zr(0,i.scrollLength,i.current);const u=r-l;i.velocity=u>oC?0:wp(i.current-s,u)}function lC(e,t,n){Nm(e,"x",t,n),Nm(e,"y",t,n),t.time=n}function cC(e,t){const n={x:0,y:0};let r=e;for(;r&&r!==t;)if(r instanceof HTMLElement)n.x+=r.offsetLeft,n.y+=r.offsetTop,r=r.offsetParent;else if(r.tagName==="svg"){const i=r.getBoundingClientRect();r=r.parentElement;const o=r.getBoundingClientRect();n.x+=i.left-o.left,n.y+=i.top-o.top}else if(r instanceof SVGGraphicsElement){const{x:i,y:o}=r.getBBox();n.x+=i,n.y+=o;let a=null,s=r.parentNode;for(;!a;)s.tagName==="svg"&&(a=s),s=r.parentNode;r=a}else break;return n}const uC={Enter:[[0,1],[1,1]],Exit:[[0,0],[1,0]],Any:[[1,0],[0,1]],All:[[0,0],[1,1]]},Yu={start:0,center:.5,end:1};function Bm(e,t,n=0){let r=0;if(e in Yu&&(e=Yu[e]),typeof e=="string"){const i=parseFloat(e);e.endsWith("px")?r=i:e.endsWith("%")?e=i/100:e.endsWith("vw")?r=i/100*document.documentElement.clientWidth:e.endsWith("vh")?r=i/100*document.documentElement.clientHeight:e=i}return typeof e=="number"&&(r=t*e),n+r}const dC=[0,0];function pC(e,t,n,r){let i=Array.isArray(e)?e:dC,o=0,a=0;return typeof e=="number"?i=[e,e]:typeof e=="string"&&(e=e.trim(),e.includes(" ")?i=e.split(" "):i=[e,Yu[e]?e:"0"]),o=Bm(i[0],n,r),a=Bm(i[1],t),o-a}const fC={x:0,y:0};function hC(e){return"getBBox"in e&&e.tagName!=="svg"?e.getBBox():{width:e.clientWidth,height:e.clientHeight}}function mC(e,t,n){const{offset:r=uC.All}=n,{target:i=e,axis:o="y"}=n,a=o==="y"?"height":"width",s=i!==e?cC(i,e):fC,l=i===e?{width:e.scrollWidth,height:e.scrollHeight}:hC(i),u={width:e.clientWidth,height:e.clientHeight};t[o].offset.length=0;let d=!t[o].interpolate;const p=r.length;for(let f=0;f<p;f++){const v=pC(r[f],u[a],l[a],s[o]);!d&&v!==t[o].interpolatorOffsets[f]&&(d=!0),t[o].offset[f]=v}d&&(t[o].interpolate=jp(t[o].offset,R1(r)),t[o].interpolatorOffsets=[...t[o].offset]),t[o].progress=t[o].interpolate(t[o].current)}function gC(e,t=e,n){if(n.x.targetOffset=0,n.y.targetOffset=0,t!==e){let r=t;for(;r&&r!==e;)n.x.targetOffset+=r.offsetLeft,n.y.targetOffset+=r.offsetTop,r=r.offsetParent}n.x.targetLength=t===e?t.scrollWidth:t.clientWidth,n.y.targetLength=t===e?t.scrollHeight:t.clientHeight,n.x.containerLength=e.clientWidth,n.y.containerLength=e.clientHeight}function vC(e,t,n,r={}){return{measure:()=>gC(e,r.target,n),update:i=>{lC(e,n,i),(r.offset||r.target)&&mC(e,n,r)},notify:()=>t(n)}}const Xi=new WeakMap,Fm=new WeakMap,bc=new WeakMap,$m=e=>e===document.documentElement?window:e;function Np(e,{container:t=document.documentElement,...n}={}){let r=bc.get(t);r||(r=new Set,bc.set(t,r));const i=aC(),o=vC(t,e,i,n);if(r.add(o),!Xi.has(t)){const s=()=>{for(const f of r)f.measure()},l=()=>{for(const f of r)f.update(_e.timestamp)},u=()=>{for(const f of r)f.notify()},d=()=>{ie.read(s,!1,!0),ie.read(l,!1,!0),ie.update(u,!1,!0)};Xi.set(t,d);const p=$m(t);window.addEventListener("resize",d,{passive:!0}),t!==document.documentElement&&Fm.set(t,iC(t,d)),p.addEventListener("scroll",d,{passive:!0})}const a=Xi.get(t);return ie.read(a,!1,!0),()=>{var s;Wt(a);const l=bc.get(t);if(!l||(l.delete(o),l.size))return;const u=Xi.get(t);Xi.delete(t),u&&($m(t).removeEventListener("scroll",u),(s=Fm.get(t))===null||s===void 0||s(),window.removeEventListener("resize",u))}}function Ox(e,t){let n;const r=()=>{const{currentTime:i}=t,a=(i===null?0:i.value)/100;n!==a&&e(a),n=a};return ie.update(r,!0),()=>Wt(r)}function xC({source:e,container:t,axis:n="y"}){e&&(t=e);const r={value:0},i=Np(o=>{r.value=o[n].progress*100},{container:t,axis:n});return{currentTime:r,cancel:i}}const Sc=new Map;function Ix({source:e,container:t=document.documentElement,axis:n="y"}={}){e&&(t=e),Sc.has(t)||Sc.set(t,{});const r=Sc.get(t);return r[n]||(r[n]=F1()?new ScrollTimeline({source:t,axis:n}):xC({source:t,axis:n})),r[n]}function yC(e){return e.length===2}function Rx(e){return e&&(e.target||e.offset)}function wC(e,t){return yC(e)||Rx(t)?Np(n=>{e(n[t.axis].progress,n)},t):Ox(e,Ix(t))}function bC(e,t){if(Rx(t))return e.pause(),Np(n=>{e.time=e.duration*n[t.axis].progress},t);{const n=Ix(t);return e.attachTimeline(n,r=>(r.pause(),Ox(i=>{r.time=r.duration*i},n)))}}function SC(e,{axis:t="y",...n}={}){const r={axis:t,...n};return typeof e=="function"?wC(e,r):bC(e,r)}function Hm(e,t){VS(!!(!t||t.current))}const jC=()=>({scrollX:Xt(0),scrollY:Xt(0),scrollXProgress:Xt(0),scrollYProgress:Xt(0)});function Vx({container:e,target:t,layoutEffect:n=!0,...r}={}){const i=Ri(jC);return(n?bl:T.useEffect)(()=>(Hm("target",t),Hm("container",e),SC((a,{x:s,y:l})=>{i.scrollX.set(s.current),i.scrollXProgress.set(s.progress),i.scrollY.set(l.current),i.scrollYProgress.set(l.progress)},{...r,container:(e==null?void 0:e.current)||void 0,target:(t==null?void 0:t.current)||void 0})),[e,t,JSON.stringify(r.offset)]),i}const CC={some:0,all:1};function TC(e,t,{root:n,margin:r,amount:i="some"}={}){const o=_x(e),a=new WeakMap,s=u=>{u.forEach(d=>{const p=a.get(d.target);if(d.isIntersecting!==!!p)if(d.isIntersecting){const f=t(d);typeof f=="function"?a.set(d.target,f):l.unobserve(d.target)}else p&&(p(d),a.delete(d.target))})},l=new IntersectionObserver(s,{root:n,rootMargin:r,threshold:typeof i=="number"?i:CC[i]});return o.forEach(u=>l.observe(u)),()=>l.disconnect()}function Dx(e,{root:t,margin:n,amount:r,once:i=!1}={}){const[o,a]=T.useState(!1);return T.useEffect(()=>{if(!e.current||i&&o)return;const s=()=>(a(!0),i?void 0:()=>a(!1)),l={root:t&&t.current||void 0,margin:n,amount:r};return TC(e.current,s,l)},[t,e,n,i,r]),o}var Nx={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Um=K.createContext&&K.createContext(Nx),PC=["attr","size","title"];function EC(e,t){if(e==null)return{};var n=kC(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function kC(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function Ds(){return Ds=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ds.apply(this,arguments)}function Wm(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Ns(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Wm(Object(n),!0).forEach(function(r){zC(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Wm(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function zC(e,t,n){return t=AC(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function AC(e){var t=MC(e,"string");return typeof t=="symbol"?t:t+""}function MC(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Bx(e){return e&&e.map((t,n)=>K.createElement(t.tag,Ns({key:n},t.attr),Bx(t.child)))}function le(e){return t=>K.createElement(LC,Ds({attr:Ns({},e.attr)},t),Bx(e.child))}function LC(e){var t=n=>{var{attr:r,size:i,title:o}=e,a=EC(e,PC),s=i||n.size||"1em",l;return n.className&&(l=n.className),e.className&&(l=(l?l+" ":"")+e.className),K.createElement("svg",Ds({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,a,{className:l,style:Ns(Ns({color:e.color||n.color},n.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),o&&K.createElement("title",null,o),e.children)};return Um!==void 0?K.createElement(Um.Consumer,null,n=>t(n)):t(Nx)}function Gm(e){return le({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M12.971 352h32.394C67.172 454.735 181.944 512 288 512c106.229 0 220.853-57.38 242.635-160h32.394c10.691 0 16.045-12.926 8.485-20.485l-67.029-67.029c-4.686-4.686-12.284-4.686-16.971 0l-67.029 67.029c-7.56 7.56-2.206 20.485 8.485 20.485h35.146c-20.29 54.317-84.963 86.588-144.117 94.015V256h52c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-52v-5.47c37.281-13.178 63.995-48.725 64-90.518C384.005 43.772 341.605.738 289.37.01 235.723-.739 192 42.525 192 96c0 41.798 26.716 77.35 64 90.53V192h-52c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h52v190.015c-58.936-7.399-123.82-39.679-144.117-94.015h35.146c10.691 0 16.045-12.926 8.485-20.485l-67.029-67.029c-4.686-4.686-12.284-4.686-16.971 0L4.485 331.515C-3.074 339.074 2.28 352 12.971 352zM288 64c17.645 0 32 14.355 32 32s-14.355 32-32 32-32-14.355-32-32 14.355-32 32-32z"},child:[]}]})(e)}function Bp(e){return le({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"},child:[]}]})(e)}function Qi(e){return le({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M32,384a95.4,95.4,0,0,0,32,71.09V496a16,16,0,0,0,16,16h32a16,16,0,0,0,16-16V480H384v16a16,16,0,0,0,16,16h32a16,16,0,0,0,16-16V455.09A95.4,95.4,0,0,0,480,384V336H32ZM496,256H80V69.25a21.26,21.26,0,0,1,36.28-15l19.27,19.26c-13.13,29.88-7.61,59.11,8.62,79.73l-.17.17A16,16,0,0,0,144,176l11.31,11.31a16,16,0,0,0,22.63,0L283.31,81.94a16,16,0,0,0,0-22.63L272,48a16,16,0,0,0-22.62,0l-.17.17c-20.62-16.23-49.83-21.75-79.73-8.62L150.22,20.28A69.25,69.25,0,0,0,32,69.25V256H16A16,16,0,0,0,0,272v16a16,16,0,0,0,16,16H496a16,16,0,0,0,16-16V272A16,16,0,0,0,496,256Z"},child:[]}]})(e)}function un(e){return le({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M176 256c44.11 0 80-35.89 80-80s-35.89-80-80-80-80 35.89-80 80 35.89 80 80 80zm352-128H304c-8.84 0-16 7.16-16 16v144H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v352c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16v-48h512v48c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V240c0-61.86-50.14-112-112-112z"},child:[]}]})(e)}function qm(e){return le({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M12 192h424c6.6 0 12 5.4 12 12v260c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V204c0-6.6 5.4-12 12-12zm436-44v-36c0-26.5-21.5-48-48-48h-48V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H160V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v36c0 6.6 5.4 12 12 12h424c6.6 0 12-5.4 12-12z"},child:[]}]})(e)}function _C(e){return le({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"},child:[]}]})(e)}function Ym(e){return le({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"},child:[]}]})(e)}function Km(e){return le({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"},child:[]}]})(e)}function Xm(e){return le({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M634.92 462.7l-288-448C341.03 5.54 330.89 0 320 0s-21.03 5.54-26.92 14.7l-288 448a32.001 32.001 0 0 0-1.17 32.64A32.004 32.004 0 0 0 32 512h576c11.71 0 22.48-6.39 28.09-16.67a31.983 31.983 0 0 0-1.17-32.63zM320 91.18L405.39 224H320l-64 64-38.06-38.06L320 91.18z"},child:[]}]})(e)}function Dr(e){return le({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M470.38 1.51L150.41 96A32 32 0 0 0 128 126.51v261.41A139 139 0 0 0 96 384c-53 0-96 28.66-96 64s43 64 96 64 96-28.66 96-64V214.32l256-75v184.61a138.4 138.4 0 0 0-32-3.93c-53 0-96 28.66-96 64s43 64 96 64 96-28.65 96-64V32a32 32 0 0 0-41.62-30.49z"},child:[]}]})(e)}function j(e){return le({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 224c-79.41 0-192 122.76-192 200.25 0 34.9 26.81 55.75 71.74 55.75 48.84 0 81.09-25.08 120.26-25.08 39.51 0 71.85 25.08 120.26 25.08 44.93 0 71.74-20.85 71.74-55.75C448 346.76 335.41 224 256 224zm-147.28-12.61c-10.4-34.65-42.44-57.09-71.56-50.13-29.12 6.96-44.29 40.69-33.89 75.34 10.4 34.65 42.44 57.09 71.56 50.13 29.12-6.96 44.29-40.69 33.89-75.34zm84.72-20.78c30.94-8.14 46.42-49.94 34.58-93.36s-46.52-72.01-77.46-63.87-46.42 49.94-34.58 93.36c11.84 43.42 46.53 72.02 77.46 63.87zm281.39-29.34c-29.12-6.96-61.15 15.48-71.56 50.13-10.4 34.65 4.77 68.38 33.89 75.34 29.12 6.96 61.15-15.48 71.56-50.13 10.4-34.65-4.77-68.38-33.89-75.34zm-156.27 29.34c30.94 8.14 65.62-20.45 77.46-63.87 11.84-43.42-3.64-85.21-34.58-93.36s-65.62 20.45-77.46 63.87c-11.84 43.42 3.64 85.22 34.58 93.36z"},child:[]}]})(e)}function OC(e){return le({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"},child:[]}]})(e)}function Le(e){return le({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M440.3 345.2l-33.8-19.5 26-7c8.2-2.2 13.1-10.7 10.9-18.9l-4-14.9c-2.2-8.2-10.7-13.1-18.9-10.9l-70.8 19-63.9-37 63.8-36.9 70.8 19c8.2 2.2 16.7-2.7 18.9-10.9l4-14.9c2.2-8.2-2.7-16.7-10.9-18.9l-26-7 33.8-19.5c7.4-4.3 9.9-13.7 5.7-21.1L430.4 119c-4.3-7.4-13.7-9.9-21.1-5.7l-33.8 19.5 7-26c2.2-8.2-2.7-16.7-10.9-18.9l-14.9-4c-8.2-2.2-16.7 2.7-18.9 10.9l-19 70.8-62.8 36.2v-77.5l53.7-53.7c6.2-6.2 6.2-16.4 0-22.6l-11.3-11.3c-6.2-6.2-16.4-6.2-22.6 0L256 56.4V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v40.4l-19.7-19.7c-6.2-6.2-16.4-6.2-22.6 0L138.3 48c-6.3 6.2-6.3 16.4 0 22.6l53.7 53.7v77.5l-62.8-36.2-19-70.8c-2.2-8.2-10.7-13.1-18.9-10.9l-14.9 4c-8.2 2.2-13.1 10.7-10.9 18.9l7 26-33.8-19.5c-7.4-4.3-16.8-1.7-21.1 5.7L2.1 145.7c-4.3 7.4-1.7 16.8 5.7 21.1l33.8 19.5-26 7c-8.3 2.2-13.2 10.7-11 19l4 14.9c2.2 8.2 10.7 13.1 18.9 10.9l70.8-19 63.8 36.9-63.8 36.9-70.8-19c-8.2-2.2-16.7 2.7-18.9 10.9l-4 14.9c-2.2 8.2 2.7 16.7 10.9 18.9l26 7-33.8 19.6c-7.4 4.3-9.9 13.7-5.7 21.1l15.5 26.8c4.3 7.4 13.7 9.9 21.1 5.7l33.8-19.5-7 26c-2.2 8.2 2.7 16.7 10.9 18.9l14.9 4c8.2 2.2 16.7-2.7 18.9-10.9l19-70.8 62.8-36.2v77.5l-53.7 53.7c-6.3 6.2-6.3 16.4 0 22.6l11.3 11.3c6.2 6.2 16.4 6.2 22.6 0l19.7-19.7V496c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-40.4l19.7 19.7c6.2 6.2 16.4 6.2 22.6 0l11.3-11.3c6.2-6.2 6.2-16.4 0-22.6L256 387.7v-77.5l62.8 36.2 19 70.8c2.2 8.2 10.7 13.1 18.9 10.9l14.9-4c8.2-2.2 13.1-10.7 10.9-18.9l-7-26 33.8 19.5c7.4 4.3 16.8 1.7 21.1-5.7l15.5-26.8c4.3-7.3 1.8-16.8-5.6-21z"},child:[]}]})(e)}function X(e){return le({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M592 0H48A48 48 0 0 0 0 48v320a48 48 0 0 0 48 48h240v32H112a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16H352v-32h240a48 48 0 0 0 48-48V48a48 48 0 0 0-48-48zm-16 352H64V64h512z"},child:[]}]})(e)}function Nr(e){return le({tag:"svg",attr:{viewBox:"0 0 416 512"},child:[{tag:"path",attr:{d:"M207.9 15.2c.8 4.7 16.1 94.5 16.1 128.8 0 52.3-27.8 89.6-68.9 104.6L168 486.7c.7 13.7-10.2 25.3-24 25.3H80c-13.7 0-24.7-11.5-24-25.3l12.9-238.1C27.7 233.6 0 196.2 0 144 0 109.6 15.3 19.9 16.1 15.2 19.3-5.1 61.4-5.4 64 16.3v141.2c1.3 3.4 15.1 3.2 16 0 1.4-25.3 7.9-139.2 8-141.8 3.3-20.8 44.7-20.8 47.9 0 .2 2.7 6.6 116.5 8 141.8.9 3.2 14.8 3.4 16 0V16.3c2.6-21.6 44.8-21.4 48-1.1zm119.2 285.7l-15 185.1c-1.2 14 9.9 26 23.9 26h56c13.3 0 24-10.7 24-24V24c0-13.2-10.7-24-24-24-82.5 0-221.4 178.5-64.9 300.9z"},child:[]}]})(e)}var Fx={exports:{}},IC="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",RC=IC,VC=RC;function $x(){}function Hx(){}Hx.resetWarningCache=$x;var DC=function(){function e(r,i,o,a,s,l){if(l!==VC){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Hx,resetWarningCache:$x};return n.PropTypes=n,n};Fx.exports=DC();var NC=Fx.exports;const ge=Mi(NC);function BC(e){return e&&typeof e=="object"&&"default"in e?e.default:e}var Ux=T,FC=BC(Ux);function Qm(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function $C(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var HC=!!(typeof window<"u"&&window.document&&window.document.createElement);function UC(e,t,n){if(typeof e!="function")throw new Error("Expected reducePropsToState to be a function.");if(typeof t!="function")throw new Error("Expected handleStateChangeOnClient to be a function.");if(typeof n<"u"&&typeof n!="function")throw new Error("Expected mapStateOnServer to either be undefined or a function.");function r(i){return i.displayName||i.name||"Component"}return function(o){if(typeof o!="function")throw new Error("Expected WrappedComponent to be a React component.");var a=[],s;function l(){s=e(a.map(function(d){return d.props})),u.canUseDOM?t(s):n&&(s=n(s))}var u=function(d){$C(p,d);function p(){return d.apply(this,arguments)||this}p.peek=function(){return s},p.rewind=function(){if(p.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var x=s;return s=void 0,a=[],x};var f=p.prototype;return f.UNSAFE_componentWillMount=function(){a.push(this),l()},f.componentDidUpdate=function(){l()},f.componentWillUnmount=function(){var x=a.indexOf(this);a.splice(x,1),l()},f.render=function(){return FC.createElement(o,this.props)},p}(Ux.PureComponent);return Qm(u,"displayName","SideEffect("+r(o)+")"),Qm(u,"canUseDOM",HC),u}}var WC=UC;const GC=Mi(WC);var qC=typeof Element<"u",YC=typeof Map=="function",KC=typeof Set=="function",XC=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function Za(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var n,r,i;if(Array.isArray(e)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!==0;)if(!Za(e[r],t[r]))return!1;return!0}var o;if(YC&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(o=e.entries();!(r=o.next()).done;)if(!t.has(r.value[0]))return!1;for(o=e.entries();!(r=o.next()).done;)if(!Za(r.value[1],t.get(r.value[0])))return!1;return!0}if(KC&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(o=e.entries();!(r=o.next()).done;)if(!t.has(r.value[0]))return!1;return!0}if(XC&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!==0;)if(e[r]!==t[r])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf&&typeof e.valueOf=="function"&&typeof t.valueOf=="function")return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString&&typeof e.toString=="function"&&typeof t.toString=="function")return e.toString()===t.toString();if(i=Object.keys(e),n=i.length,n!==Object.keys(t).length)return!1;for(r=n;r--!==0;)if(!Object.prototype.hasOwnProperty.call(t,i[r]))return!1;if(qC&&e instanceof Element)return!1;for(r=n;r--!==0;)if(!((i[r]==="_owner"||i[r]==="__v"||i[r]==="__o")&&e.$$typeof)&&!Za(e[i[r]],t[i[r]]))return!1;return!0}return e!==e&&t!==t}var QC=function(t,n){try{return Za(t,n)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}};const ZC=Mi(QC);/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var Zm=Object.getOwnPropertySymbols,JC=Object.prototype.hasOwnProperty,e6=Object.prototype.propertyIsEnumerable;function t6(e){if(e==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function n6(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de",Object.getOwnPropertyNames(e)[0]==="5")return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map(function(o){return t[o]});if(r.join("")!=="0123456789")return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach(function(o){i[o]=o}),Object.keys(Object.assign({},i)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var r6=n6()?Object.assign:function(e,t){for(var n,r=t6(e),i,o=1;o<arguments.length;o++){n=Object(arguments[o]);for(var a in n)JC.call(n,a)&&(r[a]=n[a]);if(Zm){i=Zm(n);for(var s=0;s<i.length;s++)e6.call(n,i[s])&&(r[i[s]]=n[i[s]])}}return r};const i6=Mi(r6);var Sr={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},Y={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"};Object.keys(Y).map(function(e){return Y[e]});var ve={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src",TARGET:"target"},Bs={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},Yo={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},o6=Object.keys(Bs).reduce(function(e,t){return e[Bs[t]]=t,e},{}),a6=[Y.NOSCRIPT,Y.SCRIPT,Y.STYLE],Bt="data-react-helmet",s6=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l6=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},c6=function(){function e(t,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),tt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u6=function(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},Jm=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},d6=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e},Ku=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return n===!1?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},p6=function(t){var n=fi(t,Y.TITLE),r=fi(t,Yo.TITLE_TEMPLATE);if(r&&n)return r.replace(/%s/g,function(){return Array.isArray(n)?n.join(""):n});var i=fi(t,Yo.DEFAULT_TITLE);return n||i||void 0},f6=function(t){return fi(t,Yo.ON_CHANGE_CLIENT_STATE)||function(){}},jc=function(t,n){return n.filter(function(r){return typeof r[t]<"u"}).map(function(r){return r[t]}).reduce(function(r,i){return tt({},r,i)},{})},h6=function(t,n){return n.filter(function(r){return typeof r[Y.BASE]<"u"}).map(function(r){return r[Y.BASE]}).reverse().reduce(function(r,i){if(!r.length)for(var o=Object.keys(i),a=0;a<o.length;a++){var s=o[a],l=s.toLowerCase();if(t.indexOf(l)!==-1&&i[l])return r.concat(i)}return r},[])},Zi=function(t,n,r){var i={};return r.filter(function(o){return Array.isArray(o[t])?!0:(typeof o[t]<"u"&&x6("Helmet: "+t+' should be of type "Array". Instead found type "'+s6(o[t])+'"'),!1)}).map(function(o){return o[t]}).reverse().reduce(function(o,a){var s={};a.filter(function(f){for(var v=void 0,x=Object.keys(f),y=0;y<x.length;y++){var b=x[y],g=b.toLowerCase();n.indexOf(g)!==-1&&!(v===ve.REL&&f[v].toLowerCase()==="canonical")&&!(g===ve.REL&&f[g].toLowerCase()==="stylesheet")&&(v=g),n.indexOf(b)!==-1&&(b===ve.INNER_HTML||b===ve.CSS_TEXT||b===ve.ITEM_PROP)&&(v=b)}if(!v||!f[v])return!1;var h=f[v].toLowerCase();return i[v]||(i[v]={}),s[v]||(s[v]={}),i[v][h]?!1:(s[v][h]=!0,!0)}).reverse().forEach(function(f){return o.push(f)});for(var l=Object.keys(s),u=0;u<l.length;u++){var d=l[u],p=i6({},i[d],s[d]);i[d]=p}return o},[]).reverse()},fi=function(t,n){for(var r=t.length-1;r>=0;r--){var i=t[r];if(i.hasOwnProperty(n))return i[n]}return null},m6=function(t){return{baseTag:h6([ve.HREF,ve.TARGET],t),bodyAttributes:jc(Sr.BODY,t),defer:fi(t,Yo.DEFER),encode:fi(t,Yo.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:jc(Sr.HTML,t),linkTags:Zi(Y.LINK,[ve.REL,ve.HREF],t),metaTags:Zi(Y.META,[ve.NAME,ve.CHARSET,ve.HTTPEQUIV,ve.PROPERTY,ve.ITEM_PROP],t),noscriptTags:Zi(Y.NOSCRIPT,[ve.INNER_HTML],t),onChangeClientState:f6(t),scriptTags:Zi(Y.SCRIPT,[ve.SRC,ve.INNER_HTML],t),styleTags:Zi(Y.STYLE,[ve.CSS_TEXT],t),title:p6(t),titleAttributes:jc(Sr.TITLE,t)}},Xu=function(){var e=Date.now();return function(t){var n=Date.now();n-e>16?(e=n,t(n)):setTimeout(function(){Xu(t)},0)}}(),eg=function(t){return clearTimeout(t)},g6=typeof window<"u"?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||Xu:global.requestAnimationFrame||Xu,v6=typeof window<"u"?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||eg:global.cancelAnimationFrame||eg,x6=function(t){return console&&typeof console.warn=="function"&&console.warn(t)},Ji=null,y6=function(t){Ji&&v6(Ji),t.defer?Ji=g6(function(){tg(t,function(){Ji=null})}):(tg(t),Ji=null)},tg=function(t,n){var r=t.baseTag,i=t.bodyAttributes,o=t.htmlAttributes,a=t.linkTags,s=t.metaTags,l=t.noscriptTags,u=t.onChangeClientState,d=t.scriptTags,p=t.styleTags,f=t.title,v=t.titleAttributes;Qu(Y.BODY,i),Qu(Y.HTML,o),w6(f,v);var x={baseTag:Br(Y.BASE,r),linkTags:Br(Y.LINK,a),metaTags:Br(Y.META,s),noscriptTags:Br(Y.NOSCRIPT,l),scriptTags:Br(Y.SCRIPT,d),styleTags:Br(Y.STYLE,p)},y={},b={};Object.keys(x).forEach(function(g){var h=x[g],m=h.newTags,w=h.oldTags;m.length&&(y[g]=m),w.length&&(b[g]=x[g].oldTags)}),n&&n(),u(t,y,b)},Wx=function(t){return Array.isArray(t)?t.join(""):t},w6=function(t,n){typeof t<"u"&&document.title!==t&&(document.title=Wx(t)),Qu(Y.TITLE,n)},Qu=function(t,n){var r=document.getElementsByTagName(t)[0];if(r){for(var i=r.getAttribute(Bt),o=i?i.split(","):[],a=[].concat(o),s=Object.keys(n),l=0;l<s.length;l++){var u=s[l],d=n[u]||"";r.getAttribute(u)!==d&&r.setAttribute(u,d),o.indexOf(u)===-1&&o.push(u);var p=a.indexOf(u);p!==-1&&a.splice(p,1)}for(var f=a.length-1;f>=0;f--)r.removeAttribute(a[f]);o.length===a.length?r.removeAttribute(Bt):r.getAttribute(Bt)!==s.join(",")&&r.setAttribute(Bt,s.join(","))}},Br=function(t,n){var r=document.head||document.querySelector(Y.HEAD),i=r.querySelectorAll(t+"["+Bt+"]"),o=Array.prototype.slice.call(i),a=[],s=void 0;return n&&n.length&&n.forEach(function(l){var u=document.createElement(t);for(var d in l)if(l.hasOwnProperty(d))if(d===ve.INNER_HTML)u.innerHTML=l.innerHTML;else if(d===ve.CSS_TEXT)u.styleSheet?u.styleSheet.cssText=l.cssText:u.appendChild(document.createTextNode(l.cssText));else{var p=typeof l[d]>"u"?"":l[d];u.setAttribute(d,p)}u.setAttribute(Bt,"true"),o.some(function(f,v){return s=v,u.isEqualNode(f)})?o.splice(s,1):a.push(u)}),o.forEach(function(l){return l.parentNode.removeChild(l)}),a.forEach(function(l){return r.appendChild(l)}),{oldTags:o,newTags:a}},Gx=function(t){return Object.keys(t).reduce(function(n,r){var i=typeof t[r]<"u"?r+'="'+t[r]+'"':""+r;return n?n+" "+i:i},"")},b6=function(t,n,r,i){var o=Gx(r),a=Wx(n);return o?"<"+t+" "+Bt+'="true" '+o+">"+Ku(a,i)+"</"+t+">":"<"+t+" "+Bt+'="true">'+Ku(a,i)+"</"+t+">"},S6=function(t,n,r){return n.reduce(function(i,o){var a=Object.keys(o).filter(function(u){return!(u===ve.INNER_HTML||u===ve.CSS_TEXT)}).reduce(function(u,d){var p=typeof o[d]>"u"?d:d+'="'+Ku(o[d],r)+'"';return u?u+" "+p:p},""),s=o.innerHTML||o.cssText||"",l=a6.indexOf(t)===-1;return i+"<"+t+" "+Bt+'="true" '+a+(l?"/>":">"+s+"</"+t+">")},"")},qx=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Object.keys(t).reduce(function(r,i){return r[Bs[i]||i]=t[i],r},n)},j6=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Object.keys(t).reduce(function(r,i){return r[o6[i]||i]=t[i],r},n)},C6=function(t,n,r){var i,o=(i={key:n},i[Bt]=!0,i),a=qx(r,o);return[K.createElement(Y.TITLE,a,n)]},T6=function(t,n){return n.map(function(r,i){var o,a=(o={key:i},o[Bt]=!0,o);return Object.keys(r).forEach(function(s){var l=Bs[s]||s;if(l===ve.INNER_HTML||l===ve.CSS_TEXT){var u=r.innerHTML||r.cssText;a.dangerouslySetInnerHTML={__html:u}}else a[l]=r[s]}),K.createElement(t,a)})},on=function(t,n,r){switch(t){case Y.TITLE:return{toComponent:function(){return C6(t,n.title,n.titleAttributes)},toString:function(){return b6(t,n.title,n.titleAttributes,r)}};case Sr.BODY:case Sr.HTML:return{toComponent:function(){return qx(n)},toString:function(){return Gx(n)}};default:return{toComponent:function(){return T6(t,n)},toString:function(){return S6(t,n,r)}}}},Yx=function(t){var n=t.baseTag,r=t.bodyAttributes,i=t.encode,o=t.htmlAttributes,a=t.linkTags,s=t.metaTags,l=t.noscriptTags,u=t.scriptTags,d=t.styleTags,p=t.title,f=p===void 0?"":p,v=t.titleAttributes;return{base:on(Y.BASE,n,i),bodyAttributes:on(Sr.BODY,r,i),htmlAttributes:on(Sr.HTML,o,i),link:on(Y.LINK,a,i),meta:on(Y.META,s,i),noscript:on(Y.NOSCRIPT,l,i),script:on(Y.SCRIPT,u,i),style:on(Y.STYLE,d,i),title:on(Y.TITLE,{title:f,titleAttributes:v},i)}},P6=function(t){var n,r;return r=n=function(i){u6(o,i);function o(){return l6(this,o),d6(this,i.apply(this,arguments))}return o.prototype.shouldComponentUpdate=function(s){return!ZC(this.props,s)},o.prototype.mapNestedChildrenToProps=function(s,l){if(!l)return null;switch(s.type){case Y.SCRIPT:case Y.NOSCRIPT:return{innerHTML:l};case Y.STYLE:return{cssText:l}}throw new Error("<"+s.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},o.prototype.flattenArrayTypeChildren=function(s){var l,u=s.child,d=s.arrayTypeChildren,p=s.newChildProps,f=s.nestedChildren;return tt({},d,(l={},l[u.type]=[].concat(d[u.type]||[],[tt({},p,this.mapNestedChildrenToProps(u,f))]),l))},o.prototype.mapObjectTypeChildren=function(s){var l,u,d=s.child,p=s.newProps,f=s.newChildProps,v=s.nestedChildren;switch(d.type){case Y.TITLE:return tt({},p,(l={},l[d.type]=v,l.titleAttributes=tt({},f),l));case Y.BODY:return tt({},p,{bodyAttributes:tt({},f)});case Y.HTML:return tt({},p,{htmlAttributes:tt({},f)})}return tt({},p,(u={},u[d.type]=tt({},f),u))},o.prototype.mapArrayTypeChildrenToProps=function(s,l){var u=tt({},l);return Object.keys(s).forEach(function(d){var p;u=tt({},u,(p={},p[d]=s[d],p))}),u},o.prototype.warnOnInvalidChildren=function(s,l){return!0},o.prototype.mapChildrenToProps=function(s,l){var u=this,d={};return K.Children.forEach(s,function(p){if(!(!p||!p.props)){var f=p.props,v=f.children,x=Jm(f,["children"]),y=j6(x);switch(u.warnOnInvalidChildren(p,v),p.type){case Y.LINK:case Y.META:case Y.NOSCRIPT:case Y.SCRIPT:case Y.STYLE:d=u.flattenArrayTypeChildren({child:p,arrayTypeChildren:d,newChildProps:y,nestedChildren:v});break;default:l=u.mapObjectTypeChildren({child:p,newProps:l,newChildProps:y,nestedChildren:v});break}}}),l=this.mapArrayTypeChildrenToProps(d,l),l},o.prototype.render=function(){var s=this.props,l=s.children,u=Jm(s,["children"]),d=tt({},u);return l&&(d=this.mapChildrenToProps(l,d)),K.createElement(t,d)},c6(o,null,[{key:"canUseDOM",set:function(s){t.canUseDOM=s}}]),o}(K.Component),n.propTypes={base:ge.object,bodyAttributes:ge.object,children:ge.oneOfType([ge.arrayOf(ge.node),ge.node]),defaultTitle:ge.string,defer:ge.bool,encodeSpecialCharacters:ge.bool,htmlAttributes:ge.object,link:ge.arrayOf(ge.object),meta:ge.arrayOf(ge.object),noscript:ge.arrayOf(ge.object),onChangeClientState:ge.func,script:ge.arrayOf(ge.object),style:ge.arrayOf(ge.object),title:ge.string,titleAttributes:ge.object,titleTemplate:ge.string},n.defaultProps={defer:!0,encodeSpecialCharacters:!0},n.peek=t.peek,n.rewind=function(){var i=t.rewind();return i||(i=Yx({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),i},r},E6=function(){return null},k6=GC(m6,y6,Yx)(E6),Cn=P6(k6);Cn.renderStatic=Cn.rewind;var Ye=function(){return Ye=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},Ye.apply(this,arguments)};function Ti(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var he="-ms-",jo="-moz-",se="-webkit-",Kx="comm",jl="rule",Fp="decl",z6="@import",Xx="@keyframes",A6="@layer",Qx=Math.abs,$p=String.fromCharCode,Zu=Object.assign;function M6(e,t){return Re(e,0)^45?(((t<<2^Re(e,0))<<2^Re(e,1))<<2^Re(e,2))<<2^Re(e,3):0}function Zx(e){return e.trim()}function ln(e,t){return(e=t.exec(e))?e[0]:e}function Q(e,t,n){return e.replace(t,n)}function Ja(e,t,n){return e.indexOf(t,n)}function Re(e,t){return e.charCodeAt(t)|0}function Pi(e,t,n){return e.slice(t,n)}function Yt(e){return e.length}function Jx(e){return e.length}function so(e,t){return t.push(e),e}function L6(e,t){return e.map(t).join("")}function ng(e,t){return e.filter(function(n){return!ln(n,t)})}var Cl=1,Ei=1,ey=0,_t=0,Ee=0,Vi="";function Tl(e,t,n,r,i,o,a,s){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Cl,column:Ei,length:a,return:"",siblings:s}}function Ln(e,t){return Zu(Tl("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Fr(e){for(;e.root;)e=Ln(e.root,{children:[e]});so(e,e.siblings)}function _6(){return Ee}function O6(){return Ee=_t>0?Re(Vi,--_t):0,Ei--,Ee===10&&(Ei=1,Cl--),Ee}function Ht(){return Ee=_t<ey?Re(Vi,_t++):0,Ei++,Ee===10&&(Ei=1,Cl++),Ee}function jr(){return Re(Vi,_t)}function es(){return _t}function Pl(e,t){return Pi(Vi,e,t)}function Ju(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function I6(e){return Cl=Ei=1,ey=Yt(Vi=e),_t=0,[]}function R6(e){return Vi="",e}function Cc(e){return Zx(Pl(_t-1,ed(e===91?e+2:e===40?e+1:e)))}function V6(e){for(;(Ee=jr())&&Ee<33;)Ht();return Ju(e)>2||Ju(Ee)>3?"":" "}function D6(e,t){for(;--t&&Ht()&&!(Ee<48||Ee>102||Ee>57&&Ee<65||Ee>70&&Ee<97););return Pl(e,es()+(t<6&&jr()==32&&Ht()==32))}function ed(e){for(;Ht();)switch(Ee){case e:return _t;case 34:case 39:e!==34&&e!==39&&ed(Ee);break;case 40:e===41&&ed(e);break;case 92:Ht();break}return _t}function N6(e,t){for(;Ht()&&e+Ee!==57;)if(e+Ee===84&&jr()===47)break;return"/*"+Pl(t,_t-1)+"*"+$p(e===47?e:Ht())}function B6(e){for(;!Ju(jr());)Ht();return Pl(e,_t)}function F6(e){return R6(ts("",null,null,null,[""],e=I6(e),0,[0],e))}function ts(e,t,n,r,i,o,a,s,l){for(var u=0,d=0,p=a,f=0,v=0,x=0,y=1,b=1,g=1,h=0,m="",w=i,S=o,C=r,E=m;b;)switch(x=h,h=Ht()){case 40:if(x!=108&&Re(E,p-1)==58){Ja(E+=Q(Cc(h),"&","&\f"),"&\f",Qx(u?s[u-1]:0))!=-1&&(g=-1);break}case 34:case 39:case 91:E+=Cc(h);break;case 9:case 10:case 13:case 32:E+=V6(x);break;case 92:E+=D6(es()-1,7);continue;case 47:switch(jr()){case 42:case 47:so($6(N6(Ht(),es()),t,n,l),l);break;default:E+="/"}break;case 123*y:s[u++]=Yt(E)*g;case 125*y:case 59:case 0:switch(h){case 0:case 125:b=0;case 59+d:g==-1&&(E=Q(E,/\f/g,"")),v>0&&Yt(E)-p&&so(v>32?ig(E+";",r,n,p-1,l):ig(Q(E," ","")+";",r,n,p-2,l),l);break;case 59:E+=";";default:if(so(C=rg(E,t,n,u,d,i,s,m,w=[],S=[],p,o),o),h===123)if(d===0)ts(E,t,C,C,w,o,p,s,S);else switch(f===99&&Re(E,3)===110?100:f){case 100:case 108:case 109:case 115:ts(e,C,C,r&&so(rg(e,C,C,0,0,i,s,m,i,w=[],p,S),S),i,S,p,s,r?w:S);break;default:ts(E,C,C,C,[""],S,0,s,S)}}u=d=v=0,y=g=1,m=E="",p=a;break;case 58:p=1+Yt(E),v=x;default:if(y<1){if(h==123)--y;else if(h==125&&y++==0&&O6()==125)continue}switch(E+=$p(h),h*y){case 38:g=d>0?1:(E+="\f",-1);break;case 44:s[u++]=(Yt(E)-1)*g,g=1;break;case 64:jr()===45&&(E+=Cc(Ht())),f=jr(),d=p=Yt(m=E+=B6(es())),h++;break;case 45:x===45&&Yt(E)==2&&(y=0)}}return o}function rg(e,t,n,r,i,o,a,s,l,u,d,p){for(var f=i-1,v=i===0?o:[""],x=Jx(v),y=0,b=0,g=0;y<r;++y)for(var h=0,m=Pi(e,f+1,f=Qx(b=a[y])),w=e;h<x;++h)(w=Zx(b>0?v[h]+" "+m:Q(m,/&\f/g,v[h])))&&(l[g++]=w);return Tl(e,t,n,i===0?jl:s,l,u,d,p)}function $6(e,t,n,r){return Tl(e,t,n,Kx,$p(_6()),Pi(e,2,-2),0,r)}function ig(e,t,n,r,i){return Tl(e,t,n,Fp,Pi(e,0,r),Pi(e,r+1,-1),r,i)}function ty(e,t,n){switch(M6(e,t)){case 5103:return se+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return se+e+e;case 4789:return jo+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return se+e+jo+e+he+e+e;case 5936:switch(Re(e,t+11)){case 114:return se+e+he+Q(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return se+e+he+Q(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return se+e+he+Q(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return se+e+he+e+e;case 6165:return se+e+he+"flex-"+e+e;case 5187:return se+e+Q(e,/(\w+).+(:[^]+)/,se+"box-$1$2"+he+"flex-$1$2")+e;case 5443:return se+e+he+"flex-item-"+Q(e,/flex-|-self/g,"")+(ln(e,/flex-|baseline/)?"":he+"grid-row-"+Q(e,/flex-|-self/g,""))+e;case 4675:return se+e+he+"flex-line-pack"+Q(e,/align-content|flex-|-self/g,"")+e;case 5548:return se+e+he+Q(e,"shrink","negative")+e;case 5292:return se+e+he+Q(e,"basis","preferred-size")+e;case 6060:return se+"box-"+Q(e,"-grow","")+se+e+he+Q(e,"grow","positive")+e;case 4554:return se+Q(e,/([^-])(transform)/g,"$1"+se+"$2")+e;case 6187:return Q(Q(Q(e,/(zoom-|grab)/,se+"$1"),/(image-set)/,se+"$1"),e,"")+e;case 5495:case 3959:return Q(e,/(image-set\([^]*)/,se+"$1$`$1");case 4968:return Q(Q(e,/(.+:)(flex-)?(.*)/,se+"box-pack:$3"+he+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+se+e+e;case 4200:if(!ln(e,/flex-|baseline/))return he+"grid-column-align"+Pi(e,t)+e;break;case 2592:case 3360:return he+Q(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,ln(r.props,/grid-\w+-end/)})?~Ja(e+(n=n[t].value),"span",0)?e:he+Q(e,"-start","")+e+he+"grid-row-span:"+(~Ja(n,"span",0)?ln(n,/\d+/):+ln(n,/\d+/)-+ln(e,/\d+/))+";":he+Q(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return ln(r.props,/grid-\w+-start/)})?e:he+Q(Q(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return Q(e,/(.+)-inline(.+)/,se+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Yt(e)-1-t>6)switch(Re(e,t+1)){case 109:if(Re(e,t+4)!==45)break;case 102:return Q(e,/(.+:)(.+)-([^]+)/,"$1"+se+"$2-$3$1"+jo+(Re(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Ja(e,"stretch",0)?ty(Q(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return Q(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,a,s,l,u){return he+i+":"+o+u+(a?he+i+"-span:"+(s?l:+l-+o)+u:"")+e});case 4949:if(Re(e,t+6)===121)return Q(e,":",":"+se)+e;break;case 6444:switch(Re(e,Re(e,14)===45?18:11)){case 120:return Q(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+se+(Re(e,14)===45?"inline-":"")+"box$3$1"+se+"$2$3$1"+he+"$2box$3")+e;case 100:return Q(e,":",":"+he)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Q(e,"scroll-","scroll-snap-")+e}return e}function Fs(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function H6(e,t,n,r){switch(e.type){case A6:if(e.children.length)break;case z6:case Fp:return e.return=e.return||e.value;case Kx:return"";case Xx:return e.return=e.value+"{"+Fs(e.children,r)+"}";case jl:if(!Yt(e.value=e.props.join(",")))return""}return Yt(n=Fs(e.children,r))?e.return=e.value+"{"+n+"}":""}function U6(e){var t=Jx(e);return function(n,r,i,o){for(var a="",s=0;s<t;s++)a+=e[s](n,r,i,o)||"";return a}}function W6(e){return function(t){t.root||(t=t.return)&&e(t)}}function G6(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Fp:e.return=ty(e.value,e.length,n);return;case Xx:return Fs([Ln(e,{value:Q(e.value,"@","@"+se)})],r);case jl:if(e.length)return L6(n=e.props,function(i){switch(ln(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Fr(Ln(e,{props:[Q(i,/:(read-\w+)/,":"+jo+"$1")]})),Fr(Ln(e,{props:[i]})),Zu(e,{props:ng(n,r)});break;case"::placeholder":Fr(Ln(e,{props:[Q(i,/:(plac\w+)/,":"+se+"input-$1")]})),Fr(Ln(e,{props:[Q(i,/:(plac\w+)/,":"+jo+"$1")]})),Fr(Ln(e,{props:[Q(i,/:(plac\w+)/,he+"input-$1")]})),Fr(Ln(e,{props:[i]})),Zu(e,{props:ng(n,r)});break}return""})}}var q6={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ut={},ki=typeof process<"u"&&ut!==void 0&&(ut.REACT_APP_SC_ATTR||ut.SC_ATTR)||"data-styled",ny="active",ry="data-styled-version",El="6.1.13",Hp=`/*!sc*/
`,$s=typeof window<"u"&&"HTMLElement"in window,Y6=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&ut!==void 0&&ut.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&ut.REACT_APP_SC_DISABLE_SPEEDY!==""?ut.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&ut.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&ut!==void 0&&ut.SC_DISABLE_SPEEDY!==void 0&&ut.SC_DISABLE_SPEEDY!==""&&ut.SC_DISABLE_SPEEDY!=="false"&&ut.SC_DISABLE_SPEEDY),K6={},kl=Object.freeze([]),zi=Object.freeze({});function iy(e,t,n){return n===void 0&&(n=zi),e.theme!==n.theme&&e.theme||t||n.theme}var oy=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),X6=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Q6=/(^-|-$)/g;function og(e){return e.replace(X6,"-").replace(Q6,"")}var Z6=/(a)(d)/gi,za=52,ag=function(e){return String.fromCharCode(e+(e>25?39:97))};function td(e){var t,n="";for(t=Math.abs(e);t>za;t=t/za|0)n=ag(t%za)+n;return(ag(t%za)+n).replace(Z6,"$1-$2")}var Tc,ay=5381,ai=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},sy=function(e){return ai(ay,e)};function Up(e){return td(sy(e)>>>0)}function J6(e){return e.displayName||e.name||"Component"}function Pc(e){return typeof e=="string"&&!0}var ly=typeof Symbol=="function"&&Symbol.for,cy=ly?Symbol.for("react.memo"):60115,e7=ly?Symbol.for("react.forward_ref"):60112,t7={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},n7={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},uy={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},r7=((Tc={})[e7]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Tc[cy]=uy,Tc);function sg(e){return("type"in(t=e)&&t.type.$$typeof)===cy?uy:"$$typeof"in e?r7[e.$$typeof]:t7;var t}var i7=Object.defineProperty,o7=Object.getOwnPropertyNames,lg=Object.getOwnPropertySymbols,a7=Object.getOwnPropertyDescriptor,s7=Object.getPrototypeOf,cg=Object.prototype;function dy(e,t,n){if(typeof t!="string"){if(cg){var r=s7(t);r&&r!==cg&&dy(e,r,n)}var i=o7(t);lg&&(i=i.concat(lg(t)));for(var o=sg(e),a=sg(t),s=0;s<i.length;++s){var l=i[s];if(!(l in n7||n&&n[l]||a&&l in a||o&&l in o)){var u=a7(t,l);try{i7(e,l,u)}catch{}}}}return e}function Ai(e){return typeof e=="function"}function Wp(e){return typeof e=="object"&&"styledComponentId"in e}function xr(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Hs(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function Ko(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function nd(e,t,n){if(n===void 0&&(n=!1),!n&&!Ko(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=nd(e[r],t[r]);else if(Ko(t))for(var r in t)e[r]=nd(e[r],t[r]);return e}function Gp(e,t){Object.defineProperty(e,"toString",{value:t})}function aa(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var l7=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw aa(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var a=i;a<o;a++)this.groupSizes[a]=0}for(var s=this.indexOfGroup(t+1),l=(a=0,n.length);a<l;a++)this.tag.insertRule(s,n[a])&&(this.groupSizes[t]++,s++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,a=i;a<o;a++)n+="".concat(this.tag.getRule(a)).concat(Hp);return n},e}(),ns=new Map,Us=new Map,rs=1,Aa=function(e){if(ns.has(e))return ns.get(e);for(;Us.has(rs);)rs++;var t=rs++;return ns.set(e,t),Us.set(t,e),t},c7=function(e,t){rs=t+1,ns.set(e,t),Us.set(t,e)},u7="style[".concat(ki,"][").concat(ry,'="').concat(El,'"]'),d7=new RegExp("^".concat(ki,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),p7=function(e,t,n){for(var r,i=n.split(","),o=0,a=i.length;o<a;o++)(r=i[o])&&e.registerName(t,r)},f7=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(Hp),i=[],o=0,a=r.length;o<a;o++){var s=r[o].trim();if(s){var l=s.match(d7);if(l){var u=0|parseInt(l[1],10),d=l[2];u!==0&&(c7(d,u),p7(e,d,l[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(s)}}},ug=function(e){for(var t=document.querySelectorAll(u7),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(ki)!==ny&&(f7(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function h7(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var py=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(s){var l=Array.from(s.querySelectorAll("style[".concat(ki,"]")));return l[l.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(ki,ny),r.setAttribute(ry,El);var a=h7();return a&&r.setAttribute("nonce",a),n.insertBefore(r,o),r},m7=function(){function e(t){this.element=py(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var a=r[i];if(a.ownerNode===n)return a}throw aa(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),g7=function(){function e(t){this.element=py(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),v7=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),dg=$s,x7={isServer:!$s,useCSSOMInjection:!Y6},Ws=function(){function e(t,n,r){t===void 0&&(t=zi),n===void 0&&(n={});var i=this;this.options=Ye(Ye({},x7),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&$s&&dg&&(dg=!1,ug(this)),Gp(this,function(){return function(o){for(var a=o.getTag(),s=a.length,l="",u=function(p){var f=function(g){return Us.get(g)}(p);if(f===void 0)return"continue";var v=o.names.get(f),x=a.getGroup(p);if(v===void 0||!v.size||x.length===0)return"continue";var y="".concat(ki,".g").concat(p,'[id="').concat(f,'"]'),b="";v!==void 0&&v.forEach(function(g){g.length>0&&(b+="".concat(g,","))}),l+="".concat(x).concat(y,'{content:"').concat(b,'"}').concat(Hp)},d=0;d<s;d++)u(d);return l}(i)})}return e.registerId=function(t){return Aa(t)},e.prototype.rehydrate=function(){!this.server&&$s&&ug(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Ye(Ye({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new v7(i):r?new m7(i):new g7(i)}(this.options),new l7(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Aa(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Aa(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Aa(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),y7=/&/g,w7=/^\s*\/\/.*$/gm;function fy(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=fy(n.children,t)),n})}function b7(e){var t,n,r,i=zi,o=i.options,a=o===void 0?zi:o,s=i.plugins,l=s===void 0?kl:s,u=function(f,v,x){return x.startsWith(n)&&x.endsWith(n)&&x.replaceAll(n,"").length>0?".".concat(t):f},d=l.slice();d.push(function(f){f.type===jl&&f.value.includes("&")&&(f.props[0]=f.props[0].replace(y7,n).replace(r,u))}),a.prefix&&d.push(G6),d.push(H6);var p=function(f,v,x,y){v===void 0&&(v=""),x===void 0&&(x=""),y===void 0&&(y="&"),t=y,n=v,r=new RegExp("\\".concat(n,"\\b"),"g");var b=f.replace(w7,""),g=F6(x||v?"".concat(x," ").concat(v," { ").concat(b," }"):b);a.namespace&&(g=fy(g,a.namespace));var h=[];return Fs(g,U6(d.concat(W6(function(m){return h.push(m)})))),h};return p.hash=l.length?l.reduce(function(f,v){return v.name||aa(15),ai(f,v.name)},ay).toString():"",p}var S7=new Ws,rd=b7(),hy=K.createContext({shouldForwardProp:void 0,styleSheet:S7,stylis:rd});hy.Consumer;K.createContext(void 0);function id(){return T.useContext(hy)}var my=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=rd);var a=r.name+o.hash;i.hasNameForId(r.id,a)||i.insertRules(r.id,a,o(r.rules,a,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Gp(this,function(){throw aa(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=rd),this.name+t.hash},e}(),j7=function(e){return e>="A"&&e<="Z"};function pg(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;j7(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var gy=function(e){return e==null||e===!1||e===""},vy=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!gy(o)&&(Array.isArray(o)&&o.isCss||Ai(o)?r.push("".concat(pg(i),":"),o,";"):Ko(o)?r.push.apply(r,Ti(Ti(["".concat(i," {")],vy(o),!1),["}"],!1)):r.push("".concat(pg(i),": ").concat((t=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in q6||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Qn(e,t,n,r){if(gy(e))return[];if(Wp(e))return[".".concat(e.styledComponentId)];if(Ai(e)){if(!Ai(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return Qn(i,t,n,r)}var o;return e instanceof my?n?(e.inject(n,r),[e.getName(r)]):[e]:Ko(e)?vy(e):Array.isArray(e)?Array.prototype.concat.apply(kl,e.map(function(a){return Qn(a,t,n,r)})):[e.toString()]}function xy(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Ai(n)&&!Wp(n))return!1}return!0}var C7=sy(El),T7=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&xy(t),this.componentId=n,this.baseHash=ai(C7,n),this.baseStyle=r,Ws.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=xr(i,this.staticRulesId);else{var o=Hs(Qn(this.rules,t,n,r)),a=td(ai(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,a)){var s=r(o,".".concat(a),void 0,this.componentId);n.insertRules(this.componentId,a,s)}i=xr(i,a),this.staticRulesId=a}else{for(var l=ai(this.baseHash,r.hash),u="",d=0;d<this.rules.length;d++){var p=this.rules[d];if(typeof p=="string")u+=p;else if(p){var f=Hs(Qn(p,t,n,r));l=ai(l,f+d),u+=f}}if(u){var v=td(l>>>0);n.hasNameForId(this.componentId,v)||n.insertRules(this.componentId,v,r(u,".".concat(v),void 0,this.componentId)),i=xr(i,v)}}return i},e}(),qp=K.createContext(void 0);qp.Consumer;var Ec={};function P7(e,t,n){var r=Wp(e),i=e,o=!Pc(e),a=t.attrs,s=a===void 0?kl:a,l=t.componentId,u=l===void 0?function(w,S){var C=typeof w!="string"?"sc":og(w);Ec[C]=(Ec[C]||0)+1;var E="".concat(C,"-").concat(Up(El+C+Ec[C]));return S?"".concat(S,"-").concat(E):E}(t.displayName,t.parentComponentId):l,d=t.displayName,p=d===void 0?function(w){return Pc(w)?"styled.".concat(w):"Styled(".concat(J6(w),")")}(e):d,f=t.displayName&&t.componentId?"".concat(og(t.displayName),"-").concat(t.componentId):t.componentId||u,v=r&&i.attrs?i.attrs.concat(s).filter(Boolean):s,x=t.shouldForwardProp;if(r&&i.shouldForwardProp){var y=i.shouldForwardProp;if(t.shouldForwardProp){var b=t.shouldForwardProp;x=function(w,S){return y(w,S)&&b(w,S)}}else x=y}var g=new T7(n,f,r?i.componentStyle:void 0);function h(w,S){return function(C,E,k){var A=C.attrs,z=C.componentStyle,I=C.defaultProps,F=C.foldedComponentIds,D=C.styledComponentId,W=C.target,q=K.useContext(qp),ae=id(),ne=C.shouldForwardProp||ae.shouldForwardProp,L=iy(E,q,I)||zi,N=function(St,De,jt){for(var M,O=Ye(Ye({},De),{className:void 0,theme:jt}),V=0;V<St.length;V+=1){var _=Ai(M=St[V])?M(O):M;for(var J in _)O[J]=J==="className"?xr(O[J],_[J]):J==="style"?Ye(Ye({},O[J]),_[J]):_[J]}return De.className&&(O.className=xr(O.className,De.className)),O}(A,E,L),B=N.as||W,Z={};for(var re in N)N[re]===void 0||re[0]==="$"||re==="as"||re==="theme"&&N.theme===L||(re==="forwardedAs"?Z.as=N.forwardedAs:ne&&!ne(re,B)||(Z[re]=N[re]));var st=function(St,De){var jt=id(),M=St.generateAndInjectStyles(De,jt.styleSheet,jt.stylis);return M}(z,N),lt=xr(F,D);return st&&(lt+=" "+st),N.className&&(lt+=" "+N.className),Z[Pc(B)&&!oy.has(B)?"class":"className"]=lt,Z.ref=k,T.createElement(B,Z)}(m,w,S)}h.displayName=p;var m=K.forwardRef(h);return m.attrs=v,m.componentStyle=g,m.displayName=p,m.shouldForwardProp=x,m.foldedComponentIds=r?xr(i.foldedComponentIds,i.styledComponentId):"",m.styledComponentId=f,m.target=r?i.target:e,Object.defineProperty(m,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(w){this._foldedDefaultProps=r?function(S){for(var C=[],E=1;E<arguments.length;E++)C[E-1]=arguments[E];for(var k=0,A=C;k<A.length;k++)nd(S,A[k],!0);return S}({},i.defaultProps,w):w}}),Gp(m,function(){return".".concat(m.styledComponentId)}),o&&dy(m,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),m}function fg(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var hg=function(e){return Object.assign(e,{isCss:!0})};function Yp(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Ai(e)||Ko(e))return hg(Qn(fg(kl,Ti([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?Qn(r):hg(Qn(fg(r,t)))}function od(e,t,n){if(n===void 0&&(n=zi),!t)throw aa(1,t);var r=function(i){for(var o=[],a=1;a<arguments.length;a++)o[a-1]=arguments[a];return e(t,n,Yp.apply(void 0,Ti([i],o,!1)))};return r.attrs=function(i){return od(e,t,Ye(Ye({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return od(e,t,Ye(Ye({},n),i))},r}var yy=function(e){return od(P7,e)},P=yy;oy.forEach(function(e){P[e]=yy(e)});var E7=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=xy(t),Ws.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var o=i(Hs(Qn(this.rules,n,r,i)),""),a=this.componentId+t;r.insertRules(a,a,o)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&Ws.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,i)},e}();function Kp(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Yp.apply(void 0,Ti([e],t,!1)),i="sc-global-".concat(Up(JSON.stringify(r))),o=new E7(r,i),a=function(l){var u=id(),d=K.useContext(qp),p=K.useRef(u.styleSheet.allocateGSInstance(i)).current;return u.styleSheet.server&&s(p,l,u.styleSheet,d,u.stylis),K.useLayoutEffect(function(){if(!u.styleSheet.server)return s(p,l,u.styleSheet,d,u.stylis),function(){return o.removeStyles(p,u.styleSheet)}},[p,l,u.styleSheet,d,u.stylis]),null};function s(l,u,d,p,f){if(o.isStatic)o.renderStyles(l,K6,d,f);else{var v=Ye(Ye({},u),{theme:iy(u,p,a.defaultProps)});o.renderStyles(l,v,d,f)}}return K.memo(a)}function Di(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Hs(Yp.apply(void 0,Ti([e],t,!1))),i=Up(r);return new my(i,r)}const k7=P(U.video)`
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
        height: 95dvh ;
        border-radius: 0 0 500px 500px / 50px 50px;
    }
`,z7=()=>c.jsxs(k7,{autoPlay:!0,loop:!0,muted:!0,initial:{clipPath:"circle(0% at 50% 50%)"},animate:{clipPath:"circle(100% at 50% 50%)"},transition:{duration:1,ease:"easeInOut"},children:[c.jsx("source",{src:"https://res.cloudinary.com/dupg7clzc/video/upload/f_auto,q_auto/v1729513957/home_play_gfetmo.mp4",type:"video/mp4"}),"Seu navegador não suporta o elemento de vídeo."]});function mg(e){return e!==null&&typeof e=="object"&&"constructor"in e&&e.constructor===Object}function Xp(e,t){e===void 0&&(e={}),t===void 0&&(t={}),Object.keys(t).forEach(n=>{typeof e[n]>"u"?e[n]=t[n]:mg(t[n])&&mg(e[n])&&Object.keys(t[n]).length>0&&Xp(e[n],t[n])})}const wy={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function yn(){const e=typeof document<"u"?document:{};return Xp(e,wy),e}const A7={document:wy,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(e){return typeof setTimeout>"u"?(e(),null):setTimeout(e,0)},cancelAnimationFrame(e){typeof setTimeout>"u"||clearTimeout(e)}};function bt(){const e=typeof window<"u"?window:{};return Xp(e,A7),e}function M7(e){return e===void 0&&(e=""),e.trim().split(" ").filter(t=>!!t.trim())}function L7(e){const t=e;Object.keys(t).forEach(n=>{try{t[n]=null}catch{}try{delete t[n]}catch{}})}function ad(e,t){return t===void 0&&(t=0),setTimeout(e,t)}function Gs(){return Date.now()}function _7(e){const t=bt();let n;return t.getComputedStyle&&(n=t.getComputedStyle(e,null)),!n&&e.currentStyle&&(n=e.currentStyle),n||(n=e.style),n}function O7(e,t){t===void 0&&(t="x");const n=bt();let r,i,o;const a=_7(e);return n.WebKitCSSMatrix?(i=a.transform||a.webkitTransform,i.split(",").length>6&&(i=i.split(", ").map(s=>s.replace(",",".")).join(", ")),o=new n.WebKitCSSMatrix(i==="none"?"":i)):(o=a.MozTransform||a.OTransform||a.MsTransform||a.msTransform||a.transform||a.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),r=o.toString().split(",")),t==="x"&&(n.WebKitCSSMatrix?i=o.m41:r.length===16?i=parseFloat(r[12]):i=parseFloat(r[4])),t==="y"&&(n.WebKitCSSMatrix?i=o.m42:r.length===16?i=parseFloat(r[13]):i=parseFloat(r[5])),i||0}function Ma(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"}function I7(e){return typeof window<"u"&&typeof window.HTMLElement<"u"?e instanceof HTMLElement:e&&(e.nodeType===1||e.nodeType===11)}function pt(){const e=Object(arguments.length<=0?void 0:arguments[0]),t=["__proto__","constructor","prototype"];for(let n=1;n<arguments.length;n+=1){const r=n<0||arguments.length<=n?void 0:arguments[n];if(r!=null&&!I7(r)){const i=Object.keys(Object(r)).filter(o=>t.indexOf(o)<0);for(let o=0,a=i.length;o<a;o+=1){const s=i[o],l=Object.getOwnPropertyDescriptor(r,s);l!==void 0&&l.enumerable&&(Ma(e[s])&&Ma(r[s])?r[s].__swiper__?e[s]=r[s]:pt(e[s],r[s]):!Ma(e[s])&&Ma(r[s])?(e[s]={},r[s].__swiper__?e[s]=r[s]:pt(e[s],r[s])):e[s]=r[s])}}}return e}function La(e,t,n){e.style.setProperty(t,n)}function by(e){let{swiper:t,targetPosition:n,side:r}=e;const i=bt(),o=-t.translate;let a=null,s;const l=t.params.speed;t.wrapperEl.style.scrollSnapType="none",i.cancelAnimationFrame(t.cssModeFrameID);const u=n>o?"next":"prev",d=(f,v)=>u==="next"&&f>=v||u==="prev"&&f<=v,p=()=>{s=new Date().getTime(),a===null&&(a=s);const f=Math.max(Math.min((s-a)/l,1),0),v=.5-Math.cos(f*Math.PI)/2;let x=o+v*(n-o);if(d(x,n)&&(x=n),t.wrapperEl.scrollTo({[r]:x}),d(x,n)){t.wrapperEl.style.overflow="hidden",t.wrapperEl.style.scrollSnapType="",setTimeout(()=>{t.wrapperEl.style.overflow="",t.wrapperEl.scrollTo({[r]:x})}),i.cancelAnimationFrame(t.cssModeFrameID);return}t.cssModeFrameID=i.requestAnimationFrame(p)};p()}function Qp(e){return e.querySelector(".swiper-slide-transform")||e.shadowRoot&&e.shadowRoot.querySelector(".swiper-slide-transform")||e}function Qt(e,t){t===void 0&&(t="");const n=[...e.children];return e instanceof HTMLSlotElement&&n.push(...e.assignedElements()),t?n.filter(r=>r.matches(t)):n}function R7(e,t){const n=t.contains(e);return!n&&t instanceof HTMLSlotElement?[...t.assignedElements()].includes(e):n}function qs(e){try{console.warn(e);return}catch{}}function Xo(e,t){t===void 0&&(t=[]);const n=document.createElement(e);return n.classList.add(...Array.isArray(t)?t:M7(t)),n}function V7(e,t){const n=[];for(;e.previousElementSibling;){const r=e.previousElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function D7(e,t){const n=[];for(;e.nextElementSibling;){const r=e.nextElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function Fn(e,t){return bt().getComputedStyle(e,null).getPropertyValue(t)}function Ys(e){let t=e,n;if(t){for(n=0;(t=t.previousSibling)!==null;)t.nodeType===1&&(n+=1);return n}}function Sy(e,t){const n=[];let r=e.parentElement;for(;r;)t?r.matches(t)&&n.push(r):n.push(r),r=r.parentElement;return n}function sd(e,t,n){const r=bt();return e[t==="width"?"offsetWidth":"offsetHeight"]+parseFloat(r.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-right":"margin-top"))+parseFloat(r.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-left":"margin-bottom"))}function Oe(e){return(Array.isArray(e)?e:[e]).filter(t=>!!t)}function N7(e){return t=>Math.abs(t)>0&&e.browser&&e.browser.need3dFix&&Math.abs(t)%90===0?t+.001:t}let kc;function B7(){const e=bt(),t=yn();return{smoothScroll:t.documentElement&&t.documentElement.style&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch)}}function jy(){return kc||(kc=B7()),kc}let zc;function F7(e){let{userAgent:t}=e===void 0?{}:e;const n=jy(),r=bt(),i=r.navigator.platform,o=t||r.navigator.userAgent,a={ios:!1,android:!1},s=r.screen.width,l=r.screen.height,u=o.match(/(Android);?[\s\/]+([\d.]+)?/);let d=o.match(/(iPad).*OS\s([\d_]+)/);const p=o.match(/(iPod)(.*OS\s([\d_]+))?/),f=!d&&o.match(/(iPhone\sOS|iOS)\s([\d_]+)/),v=i==="Win32";let x=i==="MacIntel";const y=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!d&&x&&n.touch&&y.indexOf(`${s}x${l}`)>=0&&(d=o.match(/(Version)\/([\d.]+)/),d||(d=[0,1,"13_0_0"]),x=!1),u&&!v&&(a.os="android",a.android=!0),(d||f||p)&&(a.os="ios",a.ios=!0),a}function Cy(e){return e===void 0&&(e={}),zc||(zc=F7(e)),zc}let Ac;function $7(){const e=bt(),t=Cy();let n=!1;function r(){const s=e.navigator.userAgent.toLowerCase();return s.indexOf("safari")>=0&&s.indexOf("chrome")<0&&s.indexOf("android")<0}if(r()){const s=String(e.navigator.userAgent);if(s.includes("Version/")){const[l,u]=s.split("Version/")[1].split(" ")[0].split(".").map(d=>Number(d));n=l<16||l===16&&u<2}}const i=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),o=r(),a=o||i&&t.ios;return{isSafari:n||o,needPerspectiveFix:n,need3dFix:a,isWebView:i}}function H7(){return Ac||(Ac=$7()),Ac}function U7(e){let{swiper:t,on:n,emit:r}=e;const i=bt();let o=null,a=null;const s=()=>{!t||t.destroyed||!t.initialized||(r("beforeResize"),r("resize"))},l=()=>{!t||t.destroyed||!t.initialized||(o=new ResizeObserver(p=>{a=i.requestAnimationFrame(()=>{const{width:f,height:v}=t;let x=f,y=v;p.forEach(b=>{let{contentBoxSize:g,contentRect:h,target:m}=b;m&&m!==t.el||(x=h?h.width:(g[0]||g).inlineSize,y=h?h.height:(g[0]||g).blockSize)}),(x!==f||y!==v)&&s()})}),o.observe(t.el))},u=()=>{a&&i.cancelAnimationFrame(a),o&&o.unobserve&&t.el&&(o.unobserve(t.el),o=null)},d=()=>{!t||t.destroyed||!t.initialized||r("orientationchange")};n("init",()=>{if(t.params.resizeObserver&&typeof i.ResizeObserver<"u"){l();return}i.addEventListener("resize",s),i.addEventListener("orientationchange",d)}),n("destroy",()=>{u(),i.removeEventListener("resize",s),i.removeEventListener("orientationchange",d)})}function W7(e){let{swiper:t,extendParams:n,on:r,emit:i}=e;const o=[],a=bt(),s=function(d,p){p===void 0&&(p={});const f=a.MutationObserver||a.WebkitMutationObserver,v=new f(x=>{if(t.__preventObserver__)return;if(x.length===1){i("observerUpdate",x[0]);return}const y=function(){i("observerUpdate",x[0])};a.requestAnimationFrame?a.requestAnimationFrame(y):a.setTimeout(y,0)});v.observe(d,{attributes:typeof p.attributes>"u"?!0:p.attributes,childList:t.isElement||(typeof p.childList>"u"?!0:p).childList,characterData:typeof p.characterData>"u"?!0:p.characterData}),o.push(v)},l=()=>{if(t.params.observer){if(t.params.observeParents){const d=Sy(t.hostEl);for(let p=0;p<d.length;p+=1)s(d[p])}s(t.hostEl,{childList:t.params.observeSlideChildren}),s(t.wrapperEl,{attributes:!1})}},u=()=>{o.forEach(d=>{d.disconnect()}),o.splice(0,o.length)};n({observer:!1,observeParents:!1,observeSlideChildren:!1}),r("init",l),r("destroy",u)}var G7={on(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof t!="function")return r;const i=n?"unshift":"push";return e.split(" ").forEach(o=>{r.eventsListeners[o]||(r.eventsListeners[o]=[]),r.eventsListeners[o][i](t)}),r},once(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof t!="function")return r;function i(){r.off(e,i),i.__emitterProxy&&delete i.__emitterProxy;for(var o=arguments.length,a=new Array(o),s=0;s<o;s++)a[s]=arguments[s];t.apply(r,a)}return i.__emitterProxy=t,r.on(e,i,n)},onAny(e,t){const n=this;if(!n.eventsListeners||n.destroyed||typeof e!="function")return n;const r=t?"unshift":"push";return n.eventsAnyListeners.indexOf(e)<0&&n.eventsAnyListeners[r](e),n},offAny(e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsAnyListeners)return t;const n=t.eventsAnyListeners.indexOf(e);return n>=0&&t.eventsAnyListeners.splice(n,1),t},off(e,t){const n=this;return!n.eventsListeners||n.destroyed||!n.eventsListeners||e.split(" ").forEach(r=>{typeof t>"u"?n.eventsListeners[r]=[]:n.eventsListeners[r]&&n.eventsListeners[r].forEach((i,o)=>{(i===t||i.__emitterProxy&&i.__emitterProxy===t)&&n.eventsListeners[r].splice(o,1)})}),n},emit(){const e=this;if(!e.eventsListeners||e.destroyed||!e.eventsListeners)return e;let t,n,r;for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return typeof o[0]=="string"||Array.isArray(o[0])?(t=o[0],n=o.slice(1,o.length),r=e):(t=o[0].events,n=o[0].data,r=o[0].context||e),n.unshift(r),(Array.isArray(t)?t:t.split(" ")).forEach(l=>{e.eventsAnyListeners&&e.eventsAnyListeners.length&&e.eventsAnyListeners.forEach(u=>{u.apply(r,[l,...n])}),e.eventsListeners&&e.eventsListeners[l]&&e.eventsListeners[l].forEach(u=>{u.apply(r,n)})}),e}};function q7(){const e=this;let t,n;const r=e.el;typeof e.params.width<"u"&&e.params.width!==null?t=e.params.width:t=r.clientWidth,typeof e.params.height<"u"&&e.params.height!==null?n=e.params.height:n=r.clientHeight,!(t===0&&e.isHorizontal()||n===0&&e.isVertical())&&(t=t-parseInt(Fn(r,"padding-left")||0,10)-parseInt(Fn(r,"padding-right")||0,10),n=n-parseInt(Fn(r,"padding-top")||0,10)-parseInt(Fn(r,"padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(n)&&(n=0),Object.assign(e,{width:t,height:n,size:e.isHorizontal()?t:n}))}function Y7(){const e=this;function t(z,I){return parseFloat(z.getPropertyValue(e.getDirectionLabel(I))||0)}const n=e.params,{wrapperEl:r,slidesEl:i,size:o,rtlTranslate:a,wrongRTL:s}=e,l=e.virtual&&n.virtual.enabled,u=l?e.virtual.slides.length:e.slides.length,d=Qt(i,`.${e.params.slideClass}, swiper-slide`),p=l?e.virtual.slides.length:d.length;let f=[];const v=[],x=[];let y=n.slidesOffsetBefore;typeof y=="function"&&(y=n.slidesOffsetBefore.call(e));let b=n.slidesOffsetAfter;typeof b=="function"&&(b=n.slidesOffsetAfter.call(e));const g=e.snapGrid.length,h=e.slidesGrid.length;let m=n.spaceBetween,w=-y,S=0,C=0;if(typeof o>"u")return;typeof m=="string"&&m.indexOf("%")>=0?m=parseFloat(m.replace("%",""))/100*o:typeof m=="string"&&(m=parseFloat(m)),e.virtualSize=-m,d.forEach(z=>{a?z.style.marginLeft="":z.style.marginRight="",z.style.marginBottom="",z.style.marginTop=""}),n.centeredSlides&&n.cssMode&&(La(r,"--swiper-centered-offset-before",""),La(r,"--swiper-centered-offset-after",""));const E=n.grid&&n.grid.rows>1&&e.grid;E?e.grid.initSlides(d):e.grid&&e.grid.unsetSlides();let k;const A=n.slidesPerView==="auto"&&n.breakpoints&&Object.keys(n.breakpoints).filter(z=>typeof n.breakpoints[z].slidesPerView<"u").length>0;for(let z=0;z<p;z+=1){k=0;let I;if(d[z]&&(I=d[z]),E&&e.grid.updateSlide(z,I,d),!(d[z]&&Fn(I,"display")==="none")){if(n.slidesPerView==="auto"){A&&(d[z].style[e.getDirectionLabel("width")]="");const F=getComputedStyle(I),D=I.style.transform,W=I.style.webkitTransform;if(D&&(I.style.transform="none"),W&&(I.style.webkitTransform="none"),n.roundLengths)k=e.isHorizontal()?sd(I,"width"):sd(I,"height");else{const q=t(F,"width"),ae=t(F,"padding-left"),ne=t(F,"padding-right"),L=t(F,"margin-left"),N=t(F,"margin-right"),B=F.getPropertyValue("box-sizing");if(B&&B==="border-box")k=q+L+N;else{const{clientWidth:Z,offsetWidth:re}=I;k=q+ae+ne+L+N+(re-Z)}}D&&(I.style.transform=D),W&&(I.style.webkitTransform=W),n.roundLengths&&(k=Math.floor(k))}else k=(o-(n.slidesPerView-1)*m)/n.slidesPerView,n.roundLengths&&(k=Math.floor(k)),d[z]&&(d[z].style[e.getDirectionLabel("width")]=`${k}px`);d[z]&&(d[z].swiperSlideSize=k),x.push(k),n.centeredSlides?(w=w+k/2+S/2+m,S===0&&z!==0&&(w=w-o/2-m),z===0&&(w=w-o/2-m),Math.abs(w)<1/1e3&&(w=0),n.roundLengths&&(w=Math.floor(w)),C%n.slidesPerGroup===0&&f.push(w),v.push(w)):(n.roundLengths&&(w=Math.floor(w)),(C-Math.min(e.params.slidesPerGroupSkip,C))%e.params.slidesPerGroup===0&&f.push(w),v.push(w),w=w+k+m),e.virtualSize+=k+m,S=k,C+=1}}if(e.virtualSize=Math.max(e.virtualSize,o)+b,a&&s&&(n.effect==="slide"||n.effect==="coverflow")&&(r.style.width=`${e.virtualSize+m}px`),n.setWrapperSize&&(r.style[e.getDirectionLabel("width")]=`${e.virtualSize+m}px`),E&&e.grid.updateWrapperSize(k,f),!n.centeredSlides){const z=[];for(let I=0;I<f.length;I+=1){let F=f[I];n.roundLengths&&(F=Math.floor(F)),f[I]<=e.virtualSize-o&&z.push(F)}f=z,Math.floor(e.virtualSize-o)-Math.floor(f[f.length-1])>1&&f.push(e.virtualSize-o)}if(l&&n.loop){const z=x[0]+m;if(n.slidesPerGroup>1){const I=Math.ceil((e.virtual.slidesBefore+e.virtual.slidesAfter)/n.slidesPerGroup),F=z*n.slidesPerGroup;for(let D=0;D<I;D+=1)f.push(f[f.length-1]+F)}for(let I=0;I<e.virtual.slidesBefore+e.virtual.slidesAfter;I+=1)n.slidesPerGroup===1&&f.push(f[f.length-1]+z),v.push(v[v.length-1]+z),e.virtualSize+=z}if(f.length===0&&(f=[0]),m!==0){const z=e.isHorizontal()&&a?"marginLeft":e.getDirectionLabel("marginRight");d.filter((I,F)=>!n.cssMode||n.loop?!0:F!==d.length-1).forEach(I=>{I.style[z]=`${m}px`})}if(n.centeredSlides&&n.centeredSlidesBounds){let z=0;x.forEach(F=>{z+=F+(m||0)}),z-=m;const I=z>o?z-o:0;f=f.map(F=>F<=0?-y:F>I?I+b:F)}if(n.centerInsufficientSlides){let z=0;x.forEach(F=>{z+=F+(m||0)}),z-=m;const I=(n.slidesOffsetBefore||0)+(n.slidesOffsetAfter||0);if(z+I<o){const F=(o-z-I)/2;f.forEach((D,W)=>{f[W]=D-F}),v.forEach((D,W)=>{v[W]=D+F})}}if(Object.assign(e,{slides:d,snapGrid:f,slidesGrid:v,slidesSizesGrid:x}),n.centeredSlides&&n.cssMode&&!n.centeredSlidesBounds){La(r,"--swiper-centered-offset-before",`${-f[0]}px`),La(r,"--swiper-centered-offset-after",`${e.size/2-x[x.length-1]/2}px`);const z=-e.snapGrid[0],I=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map(F=>F+z),e.slidesGrid=e.slidesGrid.map(F=>F+I)}if(p!==u&&e.emit("slidesLengthChange"),f.length!==g&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),v.length!==h&&e.emit("slidesGridLengthChange"),n.watchSlidesProgress&&e.updateSlidesOffset(),e.emit("slidesUpdated"),!l&&!n.cssMode&&(n.effect==="slide"||n.effect==="fade")){const z=`${n.containerModifierClass}backface-hidden`,I=e.el.classList.contains(z);p<=n.maxBackfaceHiddenSlides?I||e.el.classList.add(z):I&&e.el.classList.remove(z)}}function K7(e){const t=this,n=[],r=t.virtual&&t.params.virtual.enabled;let i=0,o;typeof e=="number"?t.setTransition(e):e===!0&&t.setTransition(t.params.speed);const a=s=>r?t.slides[t.getSlideIndexByData(s)]:t.slides[s];if(t.params.slidesPerView!=="auto"&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||[]).forEach(s=>{n.push(s)});else for(o=0;o<Math.ceil(t.params.slidesPerView);o+=1){const s=t.activeIndex+o;if(s>t.slides.length&&!r)break;n.push(a(s))}else n.push(a(t.activeIndex));for(o=0;o<n.length;o+=1)if(typeof n[o]<"u"){const s=n[o].offsetHeight;i=s>i?s:i}(i||i===0)&&(t.wrapperEl.style.height=`${i}px`)}function X7(){const e=this,t=e.slides,n=e.isElement?e.isHorizontal()?e.wrapperEl.offsetLeft:e.wrapperEl.offsetTop:0;for(let r=0;r<t.length;r+=1)t[r].swiperSlideOffset=(e.isHorizontal()?t[r].offsetLeft:t[r].offsetTop)-n-e.cssOverflowAdjustment()}const gg=(e,t,n)=>{t&&!e.classList.contains(n)?e.classList.add(n):!t&&e.classList.contains(n)&&e.classList.remove(n)};function Q7(e){e===void 0&&(e=this&&this.translate||0);const t=this,n=t.params,{slides:r,rtlTranslate:i,snapGrid:o}=t;if(r.length===0)return;typeof r[0].swiperSlideOffset>"u"&&t.updateSlidesOffset();let a=-e;i&&(a=e),t.visibleSlidesIndexes=[],t.visibleSlides=[];let s=n.spaceBetween;typeof s=="string"&&s.indexOf("%")>=0?s=parseFloat(s.replace("%",""))/100*t.size:typeof s=="string"&&(s=parseFloat(s));for(let l=0;l<r.length;l+=1){const u=r[l];let d=u.swiperSlideOffset;n.cssMode&&n.centeredSlides&&(d-=r[0].swiperSlideOffset);const p=(a+(n.centeredSlides?t.minTranslate():0)-d)/(u.swiperSlideSize+s),f=(a-o[0]+(n.centeredSlides?t.minTranslate():0)-d)/(u.swiperSlideSize+s),v=-(a-d),x=v+t.slidesSizesGrid[l],y=v>=0&&v<=t.size-t.slidesSizesGrid[l],b=v>=0&&v<t.size-1||x>1&&x<=t.size||v<=0&&x>=t.size;b&&(t.visibleSlides.push(u),t.visibleSlidesIndexes.push(l)),gg(u,b,n.slideVisibleClass),gg(u,y,n.slideFullyVisibleClass),u.progress=i?-p:p,u.originalProgress=i?-f:f}}function Z7(e){const t=this;if(typeof e>"u"){const d=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*d||0}const n=t.params,r=t.maxTranslate()-t.minTranslate();let{progress:i,isBeginning:o,isEnd:a,progressLoop:s}=t;const l=o,u=a;if(r===0)i=0,o=!0,a=!0;else{i=(e-t.minTranslate())/r;const d=Math.abs(e-t.minTranslate())<1,p=Math.abs(e-t.maxTranslate())<1;o=d||i<=0,a=p||i>=1,d&&(i=0),p&&(i=1)}if(n.loop){const d=t.getSlideIndexByData(0),p=t.getSlideIndexByData(t.slides.length-1),f=t.slidesGrid[d],v=t.slidesGrid[p],x=t.slidesGrid[t.slidesGrid.length-1],y=Math.abs(e);y>=f?s=(y-f)/x:s=(y+x-v)/x,s>1&&(s-=1)}Object.assign(t,{progress:i,progressLoop:s,isBeginning:o,isEnd:a}),(n.watchSlidesProgress||n.centeredSlides&&n.autoHeight)&&t.updateSlidesProgress(e),o&&!l&&t.emit("reachBeginning toEdge"),a&&!u&&t.emit("reachEnd toEdge"),(l&&!o||u&&!a)&&t.emit("fromEdge"),t.emit("progress",i)}const Mc=(e,t,n)=>{t&&!e.classList.contains(n)?e.classList.add(n):!t&&e.classList.contains(n)&&e.classList.remove(n)};function J7(){const e=this,{slides:t,params:n,slidesEl:r,activeIndex:i}=e,o=e.virtual&&n.virtual.enabled,a=e.grid&&n.grid&&n.grid.rows>1,s=p=>Qt(r,`.${n.slideClass}${p}, swiper-slide${p}`)[0];let l,u,d;if(o)if(n.loop){let p=i-e.virtual.slidesBefore;p<0&&(p=e.virtual.slides.length+p),p>=e.virtual.slides.length&&(p-=e.virtual.slides.length),l=s(`[data-swiper-slide-index="${p}"]`)}else l=s(`[data-swiper-slide-index="${i}"]`);else a?(l=t.filter(p=>p.column===i)[0],d=t.filter(p=>p.column===i+1)[0],u=t.filter(p=>p.column===i-1)[0]):l=t[i];l&&(a||(d=D7(l,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!d&&(d=t[0]),u=V7(l,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!u===0&&(u=t[t.length-1]))),t.forEach(p=>{Mc(p,p===l,n.slideActiveClass),Mc(p,p===d,n.slideNextClass),Mc(p,p===u,n.slidePrevClass)}),e.emitSlidesClasses()}const is=(e,t)=>{if(!e||e.destroyed||!e.params)return;const n=()=>e.isElement?"swiper-slide":`.${e.params.slideClass}`,r=t.closest(n());if(r){let i=r.querySelector(`.${e.params.lazyPreloaderClass}`);!i&&e.isElement&&(r.shadowRoot?i=r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{r.shadowRoot&&(i=r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`),i&&i.remove())})),i&&i.remove()}},Lc=(e,t)=>{if(!e.slides[t])return;const n=e.slides[t].querySelector('[loading="lazy"]');n&&n.removeAttribute("loading")},ld=e=>{if(!e||e.destroyed||!e.params)return;let t=e.params.lazyPreloadPrevNext;const n=e.slides.length;if(!n||!t||t<0)return;t=Math.min(t,n);const r=e.params.slidesPerView==="auto"?e.slidesPerViewDynamic():Math.ceil(e.params.slidesPerView),i=e.activeIndex;if(e.params.grid&&e.params.grid.rows>1){const a=i,s=[a-t];s.push(...Array.from({length:t}).map((l,u)=>a+r+u)),e.slides.forEach((l,u)=>{s.includes(l.column)&&Lc(e,u)});return}const o=i+r-1;if(e.params.rewind||e.params.loop)for(let a=i-t;a<=o+t;a+=1){const s=(a%n+n)%n;(s<i||s>o)&&Lc(e,s)}else for(let a=Math.max(i-t,0);a<=Math.min(o+t,n-1);a+=1)a!==i&&(a>o||a<i)&&Lc(e,a)};function eT(e){const{slidesGrid:t,params:n}=e,r=e.rtlTranslate?e.translate:-e.translate;let i;for(let o=0;o<t.length;o+=1)typeof t[o+1]<"u"?r>=t[o]&&r<t[o+1]-(t[o+1]-t[o])/2?i=o:r>=t[o]&&r<t[o+1]&&(i=o+1):r>=t[o]&&(i=o);return n.normalizeSlideIndex&&(i<0||typeof i>"u")&&(i=0),i}function tT(e){const t=this,n=t.rtlTranslate?t.translate:-t.translate,{snapGrid:r,params:i,activeIndex:o,realIndex:a,snapIndex:s}=t;let l=e,u;const d=v=>{let x=v-t.virtual.slidesBefore;return x<0&&(x=t.virtual.slides.length+x),x>=t.virtual.slides.length&&(x-=t.virtual.slides.length),x};if(typeof l>"u"&&(l=eT(t)),r.indexOf(n)>=0)u=r.indexOf(n);else{const v=Math.min(i.slidesPerGroupSkip,l);u=v+Math.floor((l-v)/i.slidesPerGroup)}if(u>=r.length&&(u=r.length-1),l===o&&!t.params.loop){u!==s&&(t.snapIndex=u,t.emit("snapIndexChange"));return}if(l===o&&t.params.loop&&t.virtual&&t.params.virtual.enabled){t.realIndex=d(l);return}const p=t.grid&&i.grid&&i.grid.rows>1;let f;if(t.virtual&&i.virtual.enabled&&i.loop)f=d(l);else if(p){const v=t.slides.filter(y=>y.column===l)[0];let x=parseInt(v.getAttribute("data-swiper-slide-index"),10);Number.isNaN(x)&&(x=Math.max(t.slides.indexOf(v),0)),f=Math.floor(x/i.grid.rows)}else if(t.slides[l]){const v=t.slides[l].getAttribute("data-swiper-slide-index");v?f=parseInt(v,10):f=l}else f=l;Object.assign(t,{previousSnapIndex:s,snapIndex:u,previousRealIndex:a,realIndex:f,previousIndex:o,activeIndex:l}),t.initialized&&ld(t),t.emit("activeIndexChange"),t.emit("snapIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&(a!==f&&t.emit("realIndexChange"),t.emit("slideChange"))}function nT(e,t){const n=this,r=n.params;let i=e.closest(`.${r.slideClass}, swiper-slide`);!i&&n.isElement&&t&&t.length>1&&t.includes(e)&&[...t.slice(t.indexOf(e)+1,t.length)].forEach(s=>{!i&&s.matches&&s.matches(`.${r.slideClass}, swiper-slide`)&&(i=s)});let o=!1,a;if(i){for(let s=0;s<n.slides.length;s+=1)if(n.slides[s]===i){o=!0,a=s;break}}if(i&&o)n.clickedSlide=i,n.virtual&&n.params.virtual.enabled?n.clickedIndex=parseInt(i.getAttribute("data-swiper-slide-index"),10):n.clickedIndex=a;else{n.clickedSlide=void 0,n.clickedIndex=void 0;return}r.slideToClickedSlide&&n.clickedIndex!==void 0&&n.clickedIndex!==n.activeIndex&&n.slideToClickedSlide()}var rT={updateSize:q7,updateSlides:Y7,updateAutoHeight:K7,updateSlidesOffset:X7,updateSlidesProgress:Q7,updateProgress:Z7,updateSlidesClasses:J7,updateActiveIndex:tT,updateClickedSlide:nT};function iT(e){e===void 0&&(e=this.isHorizontal()?"x":"y");const t=this,{params:n,rtlTranslate:r,translate:i,wrapperEl:o}=t;if(n.virtualTranslate)return r?-i:i;if(n.cssMode)return i;let a=O7(o,e);return a+=t.cssOverflowAdjustment(),r&&(a=-a),a||0}function oT(e,t){const n=this,{rtlTranslate:r,params:i,wrapperEl:o,progress:a}=n;let s=0,l=0;const u=0;n.isHorizontal()?s=r?-e:e:l=e,i.roundLengths&&(s=Math.floor(s),l=Math.floor(l)),n.previousTranslate=n.translate,n.translate=n.isHorizontal()?s:l,i.cssMode?o[n.isHorizontal()?"scrollLeft":"scrollTop"]=n.isHorizontal()?-s:-l:i.virtualTranslate||(n.isHorizontal()?s-=n.cssOverflowAdjustment():l-=n.cssOverflowAdjustment(),o.style.transform=`translate3d(${s}px, ${l}px, ${u}px)`);let d;const p=n.maxTranslate()-n.minTranslate();p===0?d=0:d=(e-n.minTranslate())/p,d!==a&&n.updateProgress(e),n.emit("setTranslate",n.translate,t)}function aT(){return-this.snapGrid[0]}function sT(){return-this.snapGrid[this.snapGrid.length-1]}function lT(e,t,n,r,i){e===void 0&&(e=0),t===void 0&&(t=this.params.speed),n===void 0&&(n=!0),r===void 0&&(r=!0);const o=this,{params:a,wrapperEl:s}=o;if(o.animating&&a.preventInteractionOnTransition)return!1;const l=o.minTranslate(),u=o.maxTranslate();let d;if(r&&e>l?d=l:r&&e<u?d=u:d=e,o.updateProgress(d),a.cssMode){const p=o.isHorizontal();if(t===0)s[p?"scrollLeft":"scrollTop"]=-d;else{if(!o.support.smoothScroll)return by({swiper:o,targetPosition:-d,side:p?"left":"top"}),!0;s.scrollTo({[p?"left":"top"]:-d,behavior:"smooth"})}return!0}return t===0?(o.setTransition(0),o.setTranslate(d),n&&(o.emit("beforeTransitionStart",t,i),o.emit("transitionEnd"))):(o.setTransition(t),o.setTranslate(d),n&&(o.emit("beforeTransitionStart",t,i),o.emit("transitionStart")),o.animating||(o.animating=!0,o.onTranslateToWrapperTransitionEnd||(o.onTranslateToWrapperTransitionEnd=function(f){!o||o.destroyed||f.target===this&&(o.wrapperEl.removeEventListener("transitionend",o.onTranslateToWrapperTransitionEnd),o.onTranslateToWrapperTransitionEnd=null,delete o.onTranslateToWrapperTransitionEnd,o.animating=!1,n&&o.emit("transitionEnd"))}),o.wrapperEl.addEventListener("transitionend",o.onTranslateToWrapperTransitionEnd))),!0}var cT={getTranslate:iT,setTranslate:oT,minTranslate:aT,maxTranslate:sT,translateTo:lT};function uT(e,t){const n=this;n.params.cssMode||(n.wrapperEl.style.transitionDuration=`${e}ms`,n.wrapperEl.style.transitionDelay=e===0?"0ms":""),n.emit("setTransition",e,t)}function Ty(e){let{swiper:t,runCallbacks:n,direction:r,step:i}=e;const{activeIndex:o,previousIndex:a}=t;let s=r;if(s||(o>a?s="next":o<a?s="prev":s="reset"),t.emit(`transition${i}`),n&&o!==a){if(s==="reset"){t.emit(`slideResetTransition${i}`);return}t.emit(`slideChangeTransition${i}`),s==="next"?t.emit(`slideNextTransition${i}`):t.emit(`slidePrevTransition${i}`)}}function dT(e,t){e===void 0&&(e=!0);const n=this,{params:r}=n;r.cssMode||(r.autoHeight&&n.updateAutoHeight(),Ty({swiper:n,runCallbacks:e,direction:t,step:"Start"}))}function pT(e,t){e===void 0&&(e=!0);const n=this,{params:r}=n;n.animating=!1,!r.cssMode&&(n.setTransition(0),Ty({swiper:n,runCallbacks:e,direction:t,step:"End"}))}var fT={setTransition:uT,transitionStart:dT,transitionEnd:pT};function hT(e,t,n,r,i){e===void 0&&(e=0),n===void 0&&(n=!0),typeof e=="string"&&(e=parseInt(e,10));const o=this;let a=e;a<0&&(a=0);const{params:s,snapGrid:l,slidesGrid:u,previousIndex:d,activeIndex:p,rtlTranslate:f,wrapperEl:v,enabled:x}=o;if(!x&&!r&&!i||o.destroyed||o.animating&&s.preventInteractionOnTransition)return!1;typeof t>"u"&&(t=o.params.speed);const y=Math.min(o.params.slidesPerGroupSkip,a);let b=y+Math.floor((a-y)/o.params.slidesPerGroup);b>=l.length&&(b=l.length-1);const g=-l[b];if(s.normalizeSlideIndex)for(let S=0;S<u.length;S+=1){const C=-Math.floor(g*100),E=Math.floor(u[S]*100),k=Math.floor(u[S+1]*100);typeof u[S+1]<"u"?C>=E&&C<k-(k-E)/2?a=S:C>=E&&C<k&&(a=S+1):C>=E&&(a=S)}if(o.initialized&&a!==p&&(!o.allowSlideNext&&(f?g>o.translate&&g>o.minTranslate():g<o.translate&&g<o.minTranslate())||!o.allowSlidePrev&&g>o.translate&&g>o.maxTranslate()&&(p||0)!==a))return!1;a!==(d||0)&&n&&o.emit("beforeSlideChangeStart"),o.updateProgress(g);let h;a>p?h="next":a<p?h="prev":h="reset";const m=o.virtual&&o.params.virtual.enabled;if(!(m&&i)&&(f&&-g===o.translate||!f&&g===o.translate))return o.updateActiveIndex(a),s.autoHeight&&o.updateAutoHeight(),o.updateSlidesClasses(),s.effect!=="slide"&&o.setTranslate(g),h!=="reset"&&(o.transitionStart(n,h),o.transitionEnd(n,h)),!1;if(s.cssMode){const S=o.isHorizontal(),C=f?g:-g;if(t===0)m&&(o.wrapperEl.style.scrollSnapType="none",o._immediateVirtual=!0),m&&!o._cssModeVirtualInitialSet&&o.params.initialSlide>0?(o._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{v[S?"scrollLeft":"scrollTop"]=C})):v[S?"scrollLeft":"scrollTop"]=C,m&&requestAnimationFrame(()=>{o.wrapperEl.style.scrollSnapType="",o._immediateVirtual=!1});else{if(!o.support.smoothScroll)return by({swiper:o,targetPosition:C,side:S?"left":"top"}),!0;v.scrollTo({[S?"left":"top"]:C,behavior:"smooth"})}return!0}return o.setTransition(t),o.setTranslate(g),o.updateActiveIndex(a),o.updateSlidesClasses(),o.emit("beforeTransitionStart",t,r),o.transitionStart(n,h),t===0?o.transitionEnd(n,h):o.animating||(o.animating=!0,o.onSlideToWrapperTransitionEnd||(o.onSlideToWrapperTransitionEnd=function(C){!o||o.destroyed||C.target===this&&(o.wrapperEl.removeEventListener("transitionend",o.onSlideToWrapperTransitionEnd),o.onSlideToWrapperTransitionEnd=null,delete o.onSlideToWrapperTransitionEnd,o.transitionEnd(n,h))}),o.wrapperEl.addEventListener("transitionend",o.onSlideToWrapperTransitionEnd)),!0}function mT(e,t,n,r){e===void 0&&(e=0),n===void 0&&(n=!0),typeof e=="string"&&(e=parseInt(e,10));const i=this;if(i.destroyed)return;typeof t>"u"&&(t=i.params.speed);const o=i.grid&&i.params.grid&&i.params.grid.rows>1;let a=e;if(i.params.loop)if(i.virtual&&i.params.virtual.enabled)a=a+i.virtual.slidesBefore;else{let s;if(o){const f=a*i.params.grid.rows;s=i.slides.filter(v=>v.getAttribute("data-swiper-slide-index")*1===f)[0].column}else s=i.getSlideIndexByData(a);const l=o?Math.ceil(i.slides.length/i.params.grid.rows):i.slides.length,{centeredSlides:u}=i.params;let d=i.params.slidesPerView;d==="auto"?d=i.slidesPerViewDynamic():(d=Math.ceil(parseFloat(i.params.slidesPerView,10)),u&&d%2===0&&(d=d+1));let p=l-s<d;if(u&&(p=p||s<Math.ceil(d/2)),r&&u&&i.params.slidesPerView!=="auto"&&!o&&(p=!1),p){const f=u?s<i.activeIndex?"prev":"next":s-i.activeIndex-1<i.params.slidesPerView?"next":"prev";i.loopFix({direction:f,slideTo:!0,activeSlideIndex:f==="next"?s+1:s-l+1,slideRealIndex:f==="next"?i.realIndex:void 0})}if(o){const f=a*i.params.grid.rows;a=i.slides.filter(v=>v.getAttribute("data-swiper-slide-index")*1===f)[0].column}else a=i.getSlideIndexByData(a)}return requestAnimationFrame(()=>{i.slideTo(a,t,n,r)}),i}function gT(e,t,n){t===void 0&&(t=!0);const r=this,{enabled:i,params:o,animating:a}=r;if(!i||r.destroyed)return r;typeof e>"u"&&(e=r.params.speed);let s=o.slidesPerGroup;o.slidesPerView==="auto"&&o.slidesPerGroup===1&&o.slidesPerGroupAuto&&(s=Math.max(r.slidesPerViewDynamic("current",!0),1));const l=r.activeIndex<o.slidesPerGroupSkip?1:s,u=r.virtual&&o.virtual.enabled;if(o.loop){if(a&&!u&&o.loopPreventsSliding)return!1;if(r.loopFix({direction:"next"}),r._clientLeft=r.wrapperEl.clientLeft,r.activeIndex===r.slides.length-1&&o.cssMode)return requestAnimationFrame(()=>{r.slideTo(r.activeIndex+l,e,t,n)}),!0}return o.rewind&&r.isEnd?r.slideTo(0,e,t,n):r.slideTo(r.activeIndex+l,e,t,n)}function vT(e,t,n){t===void 0&&(t=!0);const r=this,{params:i,snapGrid:o,slidesGrid:a,rtlTranslate:s,enabled:l,animating:u}=r;if(!l||r.destroyed)return r;typeof e>"u"&&(e=r.params.speed);const d=r.virtual&&i.virtual.enabled;if(i.loop){if(u&&!d&&i.loopPreventsSliding)return!1;r.loopFix({direction:"prev"}),r._clientLeft=r.wrapperEl.clientLeft}const p=s?r.translate:-r.translate;function f(g){return g<0?-Math.floor(Math.abs(g)):Math.floor(g)}const v=f(p),x=o.map(g=>f(g));let y=o[x.indexOf(v)-1];if(typeof y>"u"&&i.cssMode){let g;o.forEach((h,m)=>{v>=h&&(g=m)}),typeof g<"u"&&(y=o[g>0?g-1:g])}let b=0;if(typeof y<"u"&&(b=a.indexOf(y),b<0&&(b=r.activeIndex-1),i.slidesPerView==="auto"&&i.slidesPerGroup===1&&i.slidesPerGroupAuto&&(b=b-r.slidesPerViewDynamic("previous",!0)+1,b=Math.max(b,0))),i.rewind&&r.isBeginning){const g=r.params.virtual&&r.params.virtual.enabled&&r.virtual?r.virtual.slides.length-1:r.slides.length-1;return r.slideTo(g,e,t,n)}else if(i.loop&&r.activeIndex===0&&i.cssMode)return requestAnimationFrame(()=>{r.slideTo(b,e,t,n)}),!0;return r.slideTo(b,e,t,n)}function xT(e,t,n){t===void 0&&(t=!0);const r=this;if(!r.destroyed)return typeof e>"u"&&(e=r.params.speed),r.slideTo(r.activeIndex,e,t,n)}function yT(e,t,n,r){t===void 0&&(t=!0),r===void 0&&(r=.5);const i=this;if(i.destroyed)return;typeof e>"u"&&(e=i.params.speed);let o=i.activeIndex;const a=Math.min(i.params.slidesPerGroupSkip,o),s=a+Math.floor((o-a)/i.params.slidesPerGroup),l=i.rtlTranslate?i.translate:-i.translate;if(l>=i.snapGrid[s]){const u=i.snapGrid[s],d=i.snapGrid[s+1];l-u>(d-u)*r&&(o+=i.params.slidesPerGroup)}else{const u=i.snapGrid[s-1],d=i.snapGrid[s];l-u<=(d-u)*r&&(o-=i.params.slidesPerGroup)}return o=Math.max(o,0),o=Math.min(o,i.slidesGrid.length-1),i.slideTo(o,e,t,n)}function wT(){const e=this;if(e.destroyed)return;const{params:t,slidesEl:n}=e,r=t.slidesPerView==="auto"?e.slidesPerViewDynamic():t.slidesPerView;let i=e.clickedIndex,o;const a=e.isElement?"swiper-slide":`.${t.slideClass}`;if(t.loop){if(e.animating)return;o=parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"),10),t.centeredSlides?i<e.loopedSlides-r/2||i>e.slides.length-e.loopedSlides+r/2?(e.loopFix(),i=e.getSlideIndex(Qt(n,`${a}[data-swiper-slide-index="${o}"]`)[0]),ad(()=>{e.slideTo(i)})):e.slideTo(i):i>e.slides.length-r?(e.loopFix(),i=e.getSlideIndex(Qt(n,`${a}[data-swiper-slide-index="${o}"]`)[0]),ad(()=>{e.slideTo(i)})):e.slideTo(i)}else e.slideTo(i)}var bT={slideTo:hT,slideToLoop:mT,slideNext:gT,slidePrev:vT,slideReset:xT,slideToClosest:yT,slideToClickedSlide:wT};function ST(e){const t=this,{params:n,slidesEl:r}=t;if(!n.loop||t.virtual&&t.params.virtual.enabled)return;const i=()=>{Qt(r,`.${n.slideClass}, swiper-slide`).forEach((p,f)=>{p.setAttribute("data-swiper-slide-index",f)})},o=t.grid&&n.grid&&n.grid.rows>1,a=n.slidesPerGroup*(o?n.grid.rows:1),s=t.slides.length%a!==0,l=o&&t.slides.length%n.grid.rows!==0,u=d=>{for(let p=0;p<d;p+=1){const f=t.isElement?Xo("swiper-slide",[n.slideBlankClass]):Xo("div",[n.slideClass,n.slideBlankClass]);t.slidesEl.append(f)}};if(s){if(n.loopAddBlankSlides){const d=a-t.slides.length%a;u(d),t.recalcSlides(),t.updateSlides()}else qs("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");i()}else if(l){if(n.loopAddBlankSlides){const d=n.grid.rows-t.slides.length%n.grid.rows;u(d),t.recalcSlides(),t.updateSlides()}else qs("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");i()}else i();t.loopFix({slideRealIndex:e,direction:n.centeredSlides?void 0:"next"})}function jT(e){let{slideRealIndex:t,slideTo:n=!0,direction:r,setTranslate:i,activeSlideIndex:o,byController:a,byMousewheel:s}=e===void 0?{}:e;const l=this;if(!l.params.loop)return;l.emit("beforeLoopFix");const{slides:u,allowSlidePrev:d,allowSlideNext:p,slidesEl:f,params:v}=l,{centeredSlides:x}=v;if(l.allowSlidePrev=!0,l.allowSlideNext=!0,l.virtual&&v.virtual.enabled){n&&(!v.centeredSlides&&l.snapIndex===0?l.slideTo(l.virtual.slides.length,0,!1,!0):v.centeredSlides&&l.snapIndex<v.slidesPerView?l.slideTo(l.virtual.slides.length+l.snapIndex,0,!1,!0):l.snapIndex===l.snapGrid.length-1&&l.slideTo(l.virtual.slidesBefore,0,!1,!0)),l.allowSlidePrev=d,l.allowSlideNext=p,l.emit("loopFix");return}let y=v.slidesPerView;y==="auto"?y=l.slidesPerViewDynamic():(y=Math.ceil(parseFloat(v.slidesPerView,10)),x&&y%2===0&&(y=y+1));const b=v.slidesPerGroupAuto?y:v.slidesPerGroup;let g=b;g%b!==0&&(g+=b-g%b),g+=v.loopAdditionalSlides,l.loopedSlides=g;const h=l.grid&&v.grid&&v.grid.rows>1;u.length<y+g?qs("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):h&&v.grid.fill==="row"&&qs("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const m=[],w=[];let S=l.activeIndex;typeof o>"u"?o=l.getSlideIndex(u.filter(D=>D.classList.contains(v.slideActiveClass))[0]):S=o;const C=r==="next"||!r,E=r==="prev"||!r;let k=0,A=0;const z=h?Math.ceil(u.length/v.grid.rows):u.length,F=(h?u[o].column:o)+(x&&typeof i>"u"?-y/2+.5:0);if(F<g){k=Math.max(g-F,b);for(let D=0;D<g-F;D+=1){const W=D-Math.floor(D/z)*z;if(h){const q=z-W-1;for(let ae=u.length-1;ae>=0;ae-=1)u[ae].column===q&&m.push(ae)}else m.push(z-W-1)}}else if(F+y>z-g){A=Math.max(F-(z-g*2),b);for(let D=0;D<A;D+=1){const W=D-Math.floor(D/z)*z;h?u.forEach((q,ae)=>{q.column===W&&w.push(ae)}):w.push(W)}}if(l.__preventObserver__=!0,requestAnimationFrame(()=>{l.__preventObserver__=!1}),E&&m.forEach(D=>{u[D].swiperLoopMoveDOM=!0,f.prepend(u[D]),u[D].swiperLoopMoveDOM=!1}),C&&w.forEach(D=>{u[D].swiperLoopMoveDOM=!0,f.append(u[D]),u[D].swiperLoopMoveDOM=!1}),l.recalcSlides(),v.slidesPerView==="auto"?l.updateSlides():h&&(m.length>0&&E||w.length>0&&C)&&l.slides.forEach((D,W)=>{l.grid.updateSlide(W,D,l.slides)}),v.watchSlidesProgress&&l.updateSlidesOffset(),n){if(m.length>0&&E){if(typeof t>"u"){const D=l.slidesGrid[S],q=l.slidesGrid[S+k]-D;s?l.setTranslate(l.translate-q):(l.slideTo(S+Math.ceil(k),0,!1,!0),i&&(l.touchEventsData.startTranslate=l.touchEventsData.startTranslate-q,l.touchEventsData.currentTranslate=l.touchEventsData.currentTranslate-q))}else if(i){const D=h?m.length/v.grid.rows:m.length;l.slideTo(l.activeIndex+D,0,!1,!0),l.touchEventsData.currentTranslate=l.translate}}else if(w.length>0&&C)if(typeof t>"u"){const D=l.slidesGrid[S],q=l.slidesGrid[S-A]-D;s?l.setTranslate(l.translate-q):(l.slideTo(S-A,0,!1,!0),i&&(l.touchEventsData.startTranslate=l.touchEventsData.startTranslate-q,l.touchEventsData.currentTranslate=l.touchEventsData.currentTranslate-q))}else{const D=h?w.length/v.grid.rows:w.length;l.slideTo(l.activeIndex-D,0,!1,!0)}}if(l.allowSlidePrev=d,l.allowSlideNext=p,l.controller&&l.controller.control&&!a){const D={slideRealIndex:t,direction:r,setTranslate:i,activeSlideIndex:o,byController:!0};Array.isArray(l.controller.control)?l.controller.control.forEach(W=>{!W.destroyed&&W.params.loop&&W.loopFix({...D,slideTo:W.params.slidesPerView===v.slidesPerView?n:!1})}):l.controller.control instanceof l.constructor&&l.controller.control.params.loop&&l.controller.control.loopFix({...D,slideTo:l.controller.control.params.slidesPerView===v.slidesPerView?n:!1})}l.emit("loopFix")}function CT(){const e=this,{params:t,slidesEl:n}=e;if(!t.loop||e.virtual&&e.params.virtual.enabled)return;e.recalcSlides();const r=[];e.slides.forEach(i=>{const o=typeof i.swiperSlideIndex>"u"?i.getAttribute("data-swiper-slide-index")*1:i.swiperSlideIndex;r[o]=i}),e.slides.forEach(i=>{i.removeAttribute("data-swiper-slide-index")}),r.forEach(i=>{n.append(i)}),e.recalcSlides(),e.slideTo(e.realIndex,0)}var TT={loopCreate:ST,loopFix:jT,loopDestroy:CT};function PT(e){const t=this;if(!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const n=t.params.touchEventsTarget==="container"?t.el:t.wrapperEl;t.isElement&&(t.__preventObserver__=!0),n.style.cursor="move",n.style.cursor=e?"grabbing":"grab",t.isElement&&requestAnimationFrame(()=>{t.__preventObserver__=!1})}function ET(){const e=this;e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.isElement&&(e.__preventObserver__=!0),e[e.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1}))}var kT={setGrabCursor:PT,unsetGrabCursor:ET};function zT(e,t){t===void 0&&(t=this);function n(r){if(!r||r===yn()||r===bt())return null;r.assignedSlot&&(r=r.assignedSlot);const i=r.closest(e);return!i&&!r.getRootNode?null:i||n(r.getRootNode().host)}return n(t)}function vg(e,t,n){const r=bt(),{params:i}=e,o=i.edgeSwipeDetection,a=i.edgeSwipeThreshold;return o&&(n<=a||n>=r.innerWidth-a)?o==="prevent"?(t.preventDefault(),!0):!1:!0}function AT(e){const t=this,n=yn();let r=e;r.originalEvent&&(r=r.originalEvent);const i=t.touchEventsData;if(r.type==="pointerdown"){if(i.pointerId!==null&&i.pointerId!==r.pointerId)return;i.pointerId=r.pointerId}else r.type==="touchstart"&&r.targetTouches.length===1&&(i.touchId=r.targetTouches[0].identifier);if(r.type==="touchstart"){vg(t,r,r.targetTouches[0].pageX);return}const{params:o,touches:a,enabled:s}=t;if(!s||!o.simulateTouch&&r.pointerType==="mouse"||t.animating&&o.preventInteractionOnTransition)return;!t.animating&&o.cssMode&&o.loop&&t.loopFix();let l=r.target;if(o.touchEventsTarget==="wrapper"&&!R7(l,t.wrapperEl)||"which"in r&&r.which===3||"button"in r&&r.button>0||i.isTouched&&i.isMoved)return;const u=!!o.noSwipingClass&&o.noSwipingClass!=="",d=r.composedPath?r.composedPath():r.path;u&&r.target&&r.target.shadowRoot&&d&&(l=d[0]);const p=o.noSwipingSelector?o.noSwipingSelector:`.${o.noSwipingClass}`,f=!!(r.target&&r.target.shadowRoot);if(o.noSwiping&&(f?zT(p,l):l.closest(p))){t.allowClick=!0;return}if(o.swipeHandler&&!l.closest(o.swipeHandler))return;a.currentX=r.pageX,a.currentY=r.pageY;const v=a.currentX,x=a.currentY;if(!vg(t,r,v))return;Object.assign(i,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),a.startX=v,a.startY=x,i.touchStartTime=Gs(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,o.threshold>0&&(i.allowThresholdMove=!1);let y=!0;l.matches(i.focusableElements)&&(y=!1,l.nodeName==="SELECT"&&(i.isTouched=!1)),n.activeElement&&n.activeElement.matches(i.focusableElements)&&n.activeElement!==l&&(r.pointerType==="mouse"||r.pointerType!=="mouse"&&!l.matches(i.focusableElements))&&n.activeElement.blur();const b=y&&t.allowTouchMove&&o.touchStartPreventDefault;(o.touchStartForcePreventDefault||b)&&!l.isContentEditable&&r.preventDefault(),o.freeMode&&o.freeMode.enabled&&t.freeMode&&t.animating&&!o.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",r)}function MT(e){const t=yn(),n=this,r=n.touchEventsData,{params:i,touches:o,rtlTranslate:a,enabled:s}=n;if(!s||!i.simulateTouch&&e.pointerType==="mouse")return;let l=e;if(l.originalEvent&&(l=l.originalEvent),l.type==="pointermove"&&(r.touchId!==null||l.pointerId!==r.pointerId))return;let u;if(l.type==="touchmove"){if(u=[...l.changedTouches].filter(C=>C.identifier===r.touchId)[0],!u||u.identifier!==r.touchId)return}else u=l;if(!r.isTouched){r.startMoving&&r.isScrolling&&n.emit("touchMoveOpposite",l);return}const d=u.pageX,p=u.pageY;if(l.preventedByNestedSwiper){o.startX=d,o.startY=p;return}if(!n.allowTouchMove){l.target.matches(r.focusableElements)||(n.allowClick=!1),r.isTouched&&(Object.assign(o,{startX:d,startY:p,currentX:d,currentY:p}),r.touchStartTime=Gs());return}if(i.touchReleaseOnEdges&&!i.loop){if(n.isVertical()){if(p<o.startY&&n.translate<=n.maxTranslate()||p>o.startY&&n.translate>=n.minTranslate()){r.isTouched=!1,r.isMoved=!1;return}}else if(d<o.startX&&n.translate<=n.maxTranslate()||d>o.startX&&n.translate>=n.minTranslate())return}if(t.activeElement&&t.activeElement.matches(r.focusableElements)&&t.activeElement!==l.target&&l.pointerType!=="mouse"&&t.activeElement.blur(),t.activeElement&&l.target===t.activeElement&&l.target.matches(r.focusableElements)){r.isMoved=!0,n.allowClick=!1;return}r.allowTouchCallbacks&&n.emit("touchMove",l),o.previousX=o.currentX,o.previousY=o.currentY,o.currentX=d,o.currentY=p;const f=o.currentX-o.startX,v=o.currentY-o.startY;if(n.params.threshold&&Math.sqrt(f**2+v**2)<n.params.threshold)return;if(typeof r.isScrolling>"u"){let C;n.isHorizontal()&&o.currentY===o.startY||n.isVertical()&&o.currentX===o.startX?r.isScrolling=!1:f*f+v*v>=25&&(C=Math.atan2(Math.abs(v),Math.abs(f))*180/Math.PI,r.isScrolling=n.isHorizontal()?C>i.touchAngle:90-C>i.touchAngle)}if(r.isScrolling&&n.emit("touchMoveOpposite",l),typeof r.startMoving>"u"&&(o.currentX!==o.startX||o.currentY!==o.startY)&&(r.startMoving=!0),r.isScrolling||l.type==="touchmove"&&r.preventTouchMoveFromPointerMove){r.isTouched=!1;return}if(!r.startMoving)return;n.allowClick=!1,!i.cssMode&&l.cancelable&&l.preventDefault(),i.touchMoveStopPropagation&&!i.nested&&l.stopPropagation();let x=n.isHorizontal()?f:v,y=n.isHorizontal()?o.currentX-o.previousX:o.currentY-o.previousY;i.oneWayMovement&&(x=Math.abs(x)*(a?1:-1),y=Math.abs(y)*(a?1:-1)),o.diff=x,x*=i.touchRatio,a&&(x=-x,y=-y);const b=n.touchesDirection;n.swipeDirection=x>0?"prev":"next",n.touchesDirection=y>0?"prev":"next";const g=n.params.loop&&!i.cssMode,h=n.touchesDirection==="next"&&n.allowSlideNext||n.touchesDirection==="prev"&&n.allowSlidePrev;if(!r.isMoved){if(g&&h&&n.loopFix({direction:n.swipeDirection}),r.startTranslate=n.getTranslate(),n.setTransition(0),n.animating){const C=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});n.wrapperEl.dispatchEvent(C)}r.allowMomentumBounce=!1,i.grabCursor&&(n.allowSlideNext===!0||n.allowSlidePrev===!0)&&n.setGrabCursor(!0),n.emit("sliderFirstMove",l)}let m;if(new Date().getTime(),r.isMoved&&r.allowThresholdMove&&b!==n.touchesDirection&&g&&h&&Math.abs(x)>=1){Object.assign(o,{startX:d,startY:p,currentX:d,currentY:p,startTranslate:r.currentTranslate}),r.loopSwapReset=!0,r.startTranslate=r.currentTranslate;return}n.emit("sliderMove",l),r.isMoved=!0,r.currentTranslate=x+r.startTranslate;let w=!0,S=i.resistanceRatio;if(i.touchReleaseOnEdges&&(S=0),x>0?(g&&h&&!m&&r.allowThresholdMove&&r.currentTranslate>(i.centeredSlides?n.minTranslate()-n.slidesSizesGrid[n.activeIndex+1]-(i.slidesPerView!=="auto"&&n.slides.length-i.slidesPerView>=2?n.slidesSizesGrid[n.activeIndex+1]+n.params.spaceBetween:0)-n.params.spaceBetween:n.minTranslate())&&n.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),r.currentTranslate>n.minTranslate()&&(w=!1,i.resistance&&(r.currentTranslate=n.minTranslate()-1+(-n.minTranslate()+r.startTranslate+x)**S))):x<0&&(g&&h&&!m&&r.allowThresholdMove&&r.currentTranslate<(i.centeredSlides?n.maxTranslate()+n.slidesSizesGrid[n.slidesSizesGrid.length-1]+n.params.spaceBetween+(i.slidesPerView!=="auto"&&n.slides.length-i.slidesPerView>=2?n.slidesSizesGrid[n.slidesSizesGrid.length-1]+n.params.spaceBetween:0):n.maxTranslate())&&n.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:n.slides.length-(i.slidesPerView==="auto"?n.slidesPerViewDynamic():Math.ceil(parseFloat(i.slidesPerView,10)))}),r.currentTranslate<n.maxTranslate()&&(w=!1,i.resistance&&(r.currentTranslate=n.maxTranslate()+1-(n.maxTranslate()-r.startTranslate-x)**S))),w&&(l.preventedByNestedSwiper=!0),!n.allowSlideNext&&n.swipeDirection==="next"&&r.currentTranslate<r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&n.swipeDirection==="prev"&&r.currentTranslate>r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&!n.allowSlideNext&&(r.currentTranslate=r.startTranslate),i.threshold>0)if(Math.abs(x)>i.threshold||r.allowThresholdMove){if(!r.allowThresholdMove){r.allowThresholdMove=!0,o.startX=o.currentX,o.startY=o.currentY,r.currentTranslate=r.startTranslate,o.diff=n.isHorizontal()?o.currentX-o.startX:o.currentY-o.startY;return}}else{r.currentTranslate=r.startTranslate;return}!i.followFinger||i.cssMode||((i.freeMode&&i.freeMode.enabled&&n.freeMode||i.watchSlidesProgress)&&(n.updateActiveIndex(),n.updateSlidesClasses()),i.freeMode&&i.freeMode.enabled&&n.freeMode&&n.freeMode.onTouchMove(),n.updateProgress(r.currentTranslate),n.setTranslate(r.currentTranslate))}function LT(e){const t=this,n=t.touchEventsData;let r=e;r.originalEvent&&(r=r.originalEvent);let i;if(r.type==="touchend"||r.type==="touchcancel"){if(i=[...r.changedTouches].filter(S=>S.identifier===n.touchId)[0],!i||i.identifier!==n.touchId)return}else{if(n.touchId!==null||r.pointerId!==n.pointerId)return;i=r}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(r.type)&&!(["pointercancel","contextmenu"].includes(r.type)&&(t.browser.isSafari||t.browser.isWebView)))return;n.pointerId=null,n.touchId=null;const{params:a,touches:s,rtlTranslate:l,slidesGrid:u,enabled:d}=t;if(!d||!a.simulateTouch&&r.pointerType==="mouse")return;if(n.allowTouchCallbacks&&t.emit("touchEnd",r),n.allowTouchCallbacks=!1,!n.isTouched){n.isMoved&&a.grabCursor&&t.setGrabCursor(!1),n.isMoved=!1,n.startMoving=!1;return}a.grabCursor&&n.isMoved&&n.isTouched&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!1);const p=Gs(),f=p-n.touchStartTime;if(t.allowClick){const S=r.path||r.composedPath&&r.composedPath();t.updateClickedSlide(S&&S[0]||r.target,S),t.emit("tap click",r),f<300&&p-n.lastClickTime<300&&t.emit("doubleTap doubleClick",r)}if(n.lastClickTime=Gs(),ad(()=>{t.destroyed||(t.allowClick=!0)}),!n.isTouched||!n.isMoved||!t.swipeDirection||s.diff===0&&!n.loopSwapReset||n.currentTranslate===n.startTranslate&&!n.loopSwapReset){n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;return}n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;let v;if(a.followFinger?v=l?t.translate:-t.translate:v=-n.currentTranslate,a.cssMode)return;if(a.freeMode&&a.freeMode.enabled){t.freeMode.onTouchEnd({currentPos:v});return}const x=v>=-t.maxTranslate()&&!t.params.loop;let y=0,b=t.slidesSizesGrid[0];for(let S=0;S<u.length;S+=S<a.slidesPerGroupSkip?1:a.slidesPerGroup){const C=S<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;typeof u[S+C]<"u"?(x||v>=u[S]&&v<u[S+C])&&(y=S,b=u[S+C]-u[S]):(x||v>=u[S])&&(y=S,b=u[u.length-1]-u[u.length-2])}let g=null,h=null;a.rewind&&(t.isBeginning?h=a.virtual&&a.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(g=0));const m=(v-u[y])/b,w=y<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;if(f>a.longSwipesMs){if(!a.longSwipes){t.slideTo(t.activeIndex);return}t.swipeDirection==="next"&&(m>=a.longSwipesRatio?t.slideTo(a.rewind&&t.isEnd?g:y+w):t.slideTo(y)),t.swipeDirection==="prev"&&(m>1-a.longSwipesRatio?t.slideTo(y+w):h!==null&&m<0&&Math.abs(m)>a.longSwipesRatio?t.slideTo(h):t.slideTo(y))}else{if(!a.shortSwipes){t.slideTo(t.activeIndex);return}t.navigation&&(r.target===t.navigation.nextEl||r.target===t.navigation.prevEl)?r.target===t.navigation.nextEl?t.slideTo(y+w):t.slideTo(y):(t.swipeDirection==="next"&&t.slideTo(g!==null?g:y+w),t.swipeDirection==="prev"&&t.slideTo(h!==null?h:y))}}function xg(){const e=this,{params:t,el:n}=e;if(n&&n.offsetWidth===0)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:r,allowSlidePrev:i,snapGrid:o}=e,a=e.virtual&&e.params.virtual.enabled;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses();const s=a&&t.loop;(t.slidesPerView==="auto"||t.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides&&!s?e.slideTo(e.slides.length-1,0,!1,!0):e.params.loop&&!a?e.slideToLoop(e.realIndex,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&(clearTimeout(e.autoplay.resizeTimeout),e.autoplay.resizeTimeout=setTimeout(()=>{e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.resume()},500)),e.allowSlidePrev=i,e.allowSlideNext=r,e.params.watchOverflow&&o!==e.snapGrid&&e.checkOverflow()}function _T(e){const t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function OT(){const e=this,{wrapperEl:t,rtlTranslate:n,enabled:r}=e;if(!r)return;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,e.translate===0&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();let i;const o=e.maxTranslate()-e.minTranslate();o===0?i=0:i=(e.translate-e.minTranslate())/o,i!==e.progress&&e.updateProgress(n?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}function IT(e){const t=this;is(t,e.target),!(t.params.cssMode||t.params.slidesPerView!=="auto"&&!t.params.autoHeight)&&t.update()}function RT(){const e=this;e.documentTouchHandlerProceeded||(e.documentTouchHandlerProceeded=!0,e.params.touchReleaseOnEdges&&(e.el.style.touchAction="auto"))}const Py=(e,t)=>{const n=yn(),{params:r,el:i,wrapperEl:o,device:a}=e,s=!!r.nested,l=t==="on"?"addEventListener":"removeEventListener",u=t;!i||typeof i=="string"||(n[l]("touchstart",e.onDocumentTouchStart,{passive:!1,capture:s}),i[l]("touchstart",e.onTouchStart,{passive:!1}),i[l]("pointerdown",e.onTouchStart,{passive:!1}),n[l]("touchmove",e.onTouchMove,{passive:!1,capture:s}),n[l]("pointermove",e.onTouchMove,{passive:!1,capture:s}),n[l]("touchend",e.onTouchEnd,{passive:!0}),n[l]("pointerup",e.onTouchEnd,{passive:!0}),n[l]("pointercancel",e.onTouchEnd,{passive:!0}),n[l]("touchcancel",e.onTouchEnd,{passive:!0}),n[l]("pointerout",e.onTouchEnd,{passive:!0}),n[l]("pointerleave",e.onTouchEnd,{passive:!0}),n[l]("contextmenu",e.onTouchEnd,{passive:!0}),(r.preventClicks||r.preventClicksPropagation)&&i[l]("click",e.onClick,!0),r.cssMode&&o[l]("scroll",e.onScroll),r.updateOnWindowResize?e[u](a.ios||a.android?"resize orientationchange observerUpdate":"resize observerUpdate",xg,!0):e[u]("observerUpdate",xg,!0),i[l]("load",e.onLoad,{capture:!0}))};function VT(){const e=this,{params:t}=e;e.onTouchStart=AT.bind(e),e.onTouchMove=MT.bind(e),e.onTouchEnd=LT.bind(e),e.onDocumentTouchStart=RT.bind(e),t.cssMode&&(e.onScroll=OT.bind(e)),e.onClick=_T.bind(e),e.onLoad=IT.bind(e),Py(e,"on")}function DT(){Py(this,"off")}var NT={attachEvents:VT,detachEvents:DT};const yg=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;function BT(){const e=this,{realIndex:t,initialized:n,params:r,el:i}=e,o=r.breakpoints;if(!o||o&&Object.keys(o).length===0)return;const a=e.getBreakpoint(o,e.params.breakpointsBase,e.el);if(!a||e.currentBreakpoint===a)return;const l=(a in o?o[a]:void 0)||e.originalParams,u=yg(e,r),d=yg(e,l),p=e.params.grabCursor,f=l.grabCursor,v=r.enabled;u&&!d?(i.classList.remove(`${r.containerModifierClass}grid`,`${r.containerModifierClass}grid-column`),e.emitContainerClasses()):!u&&d&&(i.classList.add(`${r.containerModifierClass}grid`),(l.grid.fill&&l.grid.fill==="column"||!l.grid.fill&&r.grid.fill==="column")&&i.classList.add(`${r.containerModifierClass}grid-column`),e.emitContainerClasses()),p&&!f?e.unsetGrabCursor():!p&&f&&e.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(m=>{if(typeof l[m]>"u")return;const w=r[m]&&r[m].enabled,S=l[m]&&l[m].enabled;w&&!S&&e[m].disable(),!w&&S&&e[m].enable()});const x=l.direction&&l.direction!==r.direction,y=r.loop&&(l.slidesPerView!==r.slidesPerView||x),b=r.loop;x&&n&&e.changeDirection(),pt(e.params,l);const g=e.params.enabled,h=e.params.loop;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),v&&!g?e.disable():!v&&g&&e.enable(),e.currentBreakpoint=a,e.emit("_beforeBreakpoint",l),n&&(y?(e.loopDestroy(),e.loopCreate(t),e.updateSlides()):!b&&h?(e.loopCreate(t),e.updateSlides()):b&&!h&&e.loopDestroy()),e.emit("breakpoint",l)}function FT(e,t,n){if(t===void 0&&(t="window"),!e||t==="container"&&!n)return;let r=!1;const i=bt(),o=t==="window"?i.innerHeight:n.clientHeight,a=Object.keys(e).map(s=>{if(typeof s=="string"&&s.indexOf("@")===0){const l=parseFloat(s.substr(1));return{value:o*l,point:s}}return{value:s,point:s}});a.sort((s,l)=>parseInt(s.value,10)-parseInt(l.value,10));for(let s=0;s<a.length;s+=1){const{point:l,value:u}=a[s];t==="window"?i.matchMedia(`(min-width: ${u}px)`).matches&&(r=l):u<=n.clientWidth&&(r=l)}return r||"max"}var $T={setBreakpoint:BT,getBreakpoint:FT};function HT(e,t){const n=[];return e.forEach(r=>{typeof r=="object"?Object.keys(r).forEach(i=>{r[i]&&n.push(t+i)}):typeof r=="string"&&n.push(t+r)}),n}function UT(){const e=this,{classNames:t,params:n,rtl:r,el:i,device:o}=e,a=HT(["initialized",n.direction,{"free-mode":e.params.freeMode&&n.freeMode.enabled},{autoheight:n.autoHeight},{rtl:r},{grid:n.grid&&n.grid.rows>1},{"grid-column":n.grid&&n.grid.rows>1&&n.grid.fill==="column"},{android:o.android},{ios:o.ios},{"css-mode":n.cssMode},{centered:n.cssMode&&n.centeredSlides},{"watch-progress":n.watchSlidesProgress}],n.containerModifierClass);t.push(...a),i.classList.add(...t),e.emitContainerClasses()}function WT(){const e=this,{el:t,classNames:n}=e;!t||typeof t=="string"||(t.classList.remove(...n),e.emitContainerClasses())}var GT={addClasses:UT,removeClasses:WT};function qT(){const e=this,{isLocked:t,params:n}=e,{slidesOffsetBefore:r}=n;if(r){const i=e.slides.length-1,o=e.slidesGrid[i]+e.slidesSizesGrid[i]+r*2;e.isLocked=e.size>o}else e.isLocked=e.snapGrid.length===1;n.allowSlideNext===!0&&(e.allowSlideNext=!e.isLocked),n.allowSlidePrev===!0&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}var YT={checkOverflow:qT},cd={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function KT(e,t){return function(r){r===void 0&&(r={});const i=Object.keys(r)[0],o=r[i];if(typeof o!="object"||o===null){pt(t,r);return}if(e[i]===!0&&(e[i]={enabled:!0}),i==="navigation"&&e[i]&&e[i].enabled&&!e[i].prevEl&&!e[i].nextEl&&(e[i].auto=!0),["pagination","scrollbar"].indexOf(i)>=0&&e[i]&&e[i].enabled&&!e[i].el&&(e[i].auto=!0),!(i in e&&"enabled"in o)){pt(t,r);return}typeof e[i]=="object"&&!("enabled"in e[i])&&(e[i].enabled=!0),e[i]||(e[i]={enabled:!1}),pt(t,r)}}const _c={eventsEmitter:G7,update:rT,translate:cT,transition:fT,slide:bT,loop:TT,grabCursor:kT,events:NT,breakpoints:$T,checkOverflow:YT,classes:GT},Oc={};let Zp=class an{constructor(){let t,n;for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];i.length===1&&i[0].constructor&&Object.prototype.toString.call(i[0]).slice(8,-1)==="Object"?n=i[0]:[t,n]=i,n||(n={}),n=pt({},n),t&&!n.el&&(n.el=t);const a=yn();if(n.el&&typeof n.el=="string"&&a.querySelectorAll(n.el).length>1){const d=[];return a.querySelectorAll(n.el).forEach(p=>{const f=pt({},n,{el:p});d.push(new an(f))}),d}const s=this;s.__swiper__=!0,s.support=jy(),s.device=Cy({userAgent:n.userAgent}),s.browser=H7(),s.eventsListeners={},s.eventsAnyListeners=[],s.modules=[...s.__modules__],n.modules&&Array.isArray(n.modules)&&s.modules.push(...n.modules);const l={};s.modules.forEach(d=>{d({params:n,swiper:s,extendParams:KT(n,l),on:s.on.bind(s),once:s.once.bind(s),off:s.off.bind(s),emit:s.emit.bind(s)})});const u=pt({},cd,l);return s.params=pt({},u,Oc,n),s.originalParams=pt({},s.params),s.passedParams=pt({},n),s.params&&s.params.on&&Object.keys(s.params.on).forEach(d=>{s.on(d,s.params.on[d])}),s.params&&s.params.onAny&&s.onAny(s.params.onAny),Object.assign(s,{enabled:s.params.enabled,el:t,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return s.params.direction==="horizontal"},isVertical(){return s.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:s.params.allowSlideNext,allowSlidePrev:s.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:s.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:s.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),s.emit("_swiper"),s.params.init&&s.init(),s}getDirectionLabel(t){return this.isHorizontal()?t:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[t]}getSlideIndex(t){const{slidesEl:n,params:r}=this,i=Qt(n,`.${r.slideClass}, swiper-slide`),o=Ys(i[0]);return Ys(t)-o}getSlideIndexByData(t){return this.getSlideIndex(this.slides.filter(n=>n.getAttribute("data-swiper-slide-index")*1===t)[0])}recalcSlides(){const t=this,{slidesEl:n,params:r}=t;t.slides=Qt(n,`.${r.slideClass}, swiper-slide`)}enable(){const t=this;t.enabled||(t.enabled=!0,t.params.grabCursor&&t.setGrabCursor(),t.emit("enable"))}disable(){const t=this;t.enabled&&(t.enabled=!1,t.params.grabCursor&&t.unsetGrabCursor(),t.emit("disable"))}setProgress(t,n){const r=this;t=Math.min(Math.max(t,0),1);const i=r.minTranslate(),a=(r.maxTranslate()-i)*t+i;r.translateTo(a,typeof n>"u"?0:n),r.updateActiveIndex(),r.updateSlidesClasses()}emitContainerClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=t.el.className.split(" ").filter(r=>r.indexOf("swiper")===0||r.indexOf(t.params.containerModifierClass)===0);t.emit("_containerClasses",n.join(" "))}getSlideClasses(t){const n=this;return n.destroyed?"":t.className.split(" ").filter(r=>r.indexOf("swiper-slide")===0||r.indexOf(n.params.slideClass)===0).join(" ")}emitSlidesClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=[];t.slides.forEach(r=>{const i=t.getSlideClasses(r);n.push({slideEl:r,classNames:i}),t.emit("_slideClass",r,i)}),t.emit("_slideClasses",n)}slidesPerViewDynamic(t,n){t===void 0&&(t="current"),n===void 0&&(n=!1);const r=this,{params:i,slides:o,slidesGrid:a,slidesSizesGrid:s,size:l,activeIndex:u}=r;let d=1;if(typeof i.slidesPerView=="number")return i.slidesPerView;if(i.centeredSlides){let p=o[u]?Math.ceil(o[u].swiperSlideSize):0,f;for(let v=u+1;v<o.length;v+=1)o[v]&&!f&&(p+=Math.ceil(o[v].swiperSlideSize),d+=1,p>l&&(f=!0));for(let v=u-1;v>=0;v-=1)o[v]&&!f&&(p+=o[v].swiperSlideSize,d+=1,p>l&&(f=!0))}else if(t==="current")for(let p=u+1;p<o.length;p+=1)(n?a[p]+s[p]-a[u]<l:a[p]-a[u]<l)&&(d+=1);else for(let p=u-1;p>=0;p-=1)a[u]-a[p]<l&&(d+=1);return d}update(){const t=this;if(!t||t.destroyed)return;const{snapGrid:n,params:r}=t;r.breakpoints&&t.setBreakpoint(),[...t.el.querySelectorAll('[loading="lazy"]')].forEach(a=>{a.complete&&is(t,a)}),t.updateSize(),t.updateSlides(),t.updateProgress(),t.updateSlidesClasses();function i(){const a=t.rtlTranslate?t.translate*-1:t.translate,s=Math.min(Math.max(a,t.maxTranslate()),t.minTranslate());t.setTranslate(s),t.updateActiveIndex(),t.updateSlidesClasses()}let o;if(r.freeMode&&r.freeMode.enabled&&!r.cssMode)i(),r.autoHeight&&t.updateAutoHeight();else{if((r.slidesPerView==="auto"||r.slidesPerView>1)&&t.isEnd&&!r.centeredSlides){const a=t.virtual&&r.virtual.enabled?t.virtual.slides:t.slides;o=t.slideTo(a.length-1,0,!1,!0)}else o=t.slideTo(t.activeIndex,0,!1,!0);o||i()}r.watchOverflow&&n!==t.snapGrid&&t.checkOverflow(),t.emit("update")}changeDirection(t,n){n===void 0&&(n=!0);const r=this,i=r.params.direction;return t||(t=i==="horizontal"?"vertical":"horizontal"),t===i||t!=="horizontal"&&t!=="vertical"||(r.el.classList.remove(`${r.params.containerModifierClass}${i}`),r.el.classList.add(`${r.params.containerModifierClass}${t}`),r.emitContainerClasses(),r.params.direction=t,r.slides.forEach(o=>{t==="vertical"?o.style.width="":o.style.height=""}),r.emit("changeDirection"),n&&r.update()),r}changeLanguageDirection(t){const n=this;n.rtl&&t==="rtl"||!n.rtl&&t==="ltr"||(n.rtl=t==="rtl",n.rtlTranslate=n.params.direction==="horizontal"&&n.rtl,n.rtl?(n.el.classList.add(`${n.params.containerModifierClass}rtl`),n.el.dir="rtl"):(n.el.classList.remove(`${n.params.containerModifierClass}rtl`),n.el.dir="ltr"),n.update())}mount(t){const n=this;if(n.mounted)return!0;let r=t||n.params.el;if(typeof r=="string"&&(r=document.querySelector(r)),!r)return!1;r.swiper=n,r.parentNode&&r.parentNode.host&&r.parentNode.host.nodeName===n.params.swiperElementNodeName.toUpperCase()&&(n.isElement=!0);const i=()=>`.${(n.params.wrapperClass||"").trim().split(" ").join(".")}`;let a=r&&r.shadowRoot&&r.shadowRoot.querySelector?r.shadowRoot.querySelector(i()):Qt(r,i())[0];return!a&&n.params.createElements&&(a=Xo("div",n.params.wrapperClass),r.append(a),Qt(r,`.${n.params.slideClass}`).forEach(s=>{a.append(s)})),Object.assign(n,{el:r,wrapperEl:a,slidesEl:n.isElement&&!r.parentNode.host.slideSlots?r.parentNode.host:a,hostEl:n.isElement?r.parentNode.host:r,mounted:!0,rtl:r.dir.toLowerCase()==="rtl"||Fn(r,"direction")==="rtl",rtlTranslate:n.params.direction==="horizontal"&&(r.dir.toLowerCase()==="rtl"||Fn(r,"direction")==="rtl"),wrongRTL:Fn(a,"display")==="-webkit-box"}),!0}init(t){const n=this;if(n.initialized||n.mount(t)===!1)return n;n.emit("beforeInit"),n.params.breakpoints&&n.setBreakpoint(),n.addClasses(),n.updateSize(),n.updateSlides(),n.params.watchOverflow&&n.checkOverflow(),n.params.grabCursor&&n.enabled&&n.setGrabCursor(),n.params.loop&&n.virtual&&n.params.virtual.enabled?n.slideTo(n.params.initialSlide+n.virtual.slidesBefore,0,n.params.runCallbacksOnInit,!1,!0):n.slideTo(n.params.initialSlide,0,n.params.runCallbacksOnInit,!1,!0),n.params.loop&&n.loopCreate(),n.attachEvents();const i=[...n.el.querySelectorAll('[loading="lazy"]')];return n.isElement&&i.push(...n.hostEl.querySelectorAll('[loading="lazy"]')),i.forEach(o=>{o.complete?is(n,o):o.addEventListener("load",a=>{is(n,a.target)})}),ld(n),n.initialized=!0,ld(n),n.emit("init"),n.emit("afterInit"),n}destroy(t,n){t===void 0&&(t=!0),n===void 0&&(n=!0);const r=this,{params:i,el:o,wrapperEl:a,slides:s}=r;return typeof r.params>"u"||r.destroyed||(r.emit("beforeDestroy"),r.initialized=!1,r.detachEvents(),i.loop&&r.loopDestroy(),n&&(r.removeClasses(),o&&typeof o!="string"&&o.removeAttribute("style"),a&&a.removeAttribute("style"),s&&s.length&&s.forEach(l=>{l.classList.remove(i.slideVisibleClass,i.slideFullyVisibleClass,i.slideActiveClass,i.slideNextClass,i.slidePrevClass),l.removeAttribute("style"),l.removeAttribute("data-swiper-slide-index")})),r.emit("destroy"),Object.keys(r.eventsListeners).forEach(l=>{r.off(l)}),t!==!1&&(r.el&&typeof r.el!="string"&&(r.el.swiper=null),L7(r)),r.destroyed=!0),null}static extendDefaults(t){pt(Oc,t)}static get extendedDefaults(){return Oc}static get defaults(){return cd}static installModule(t){an.prototype.__modules__||(an.prototype.__modules__=[]);const n=an.prototype.__modules__;typeof t=="function"&&n.indexOf(t)<0&&n.push(t)}static use(t){return Array.isArray(t)?(t.forEach(n=>an.installModule(n)),an):(an.installModule(t),an)}};Object.keys(_c).forEach(e=>{Object.keys(_c[e]).forEach(t=>{Zp.prototype[t]=_c[e][t]})});Zp.use([U7,W7]);const Ey=["eventsPrefix","injectStyles","injectStylesUrls","modules","init","_direction","oneWayMovement","swiperElementNodeName","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","breakpointsBase","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_loop","loopAdditionalSlides","loopAddBlankSlides","loopPreventsSliding","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideActiveClass","slideVisibleClass","slideFullyVisibleClass","slideNextClass","slidePrevClass","slideBlankClass","wrapperClass","lazyPreloaderClass","lazyPreloadPrevNext","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom","control"];function Ar(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"&&!e.__swiper__}function hi(e,t){const n=["__proto__","constructor","prototype"];Object.keys(t).filter(r=>n.indexOf(r)<0).forEach(r=>{typeof e[r]>"u"?e[r]=t[r]:Ar(t[r])&&Ar(e[r])&&Object.keys(t[r]).length>0?t[r].__swiper__?e[r]=t[r]:hi(e[r],t[r]):e[r]=t[r]})}function ky(e){return e===void 0&&(e={}),e.navigation&&typeof e.navigation.nextEl>"u"&&typeof e.navigation.prevEl>"u"}function zy(e){return e===void 0&&(e={}),e.pagination&&typeof e.pagination.el>"u"}function Ay(e){return e===void 0&&(e={}),e.scrollbar&&typeof e.scrollbar.el>"u"}function My(e){e===void 0&&(e="");const t=e.split(" ").map(r=>r.trim()).filter(r=>!!r),n=[];return t.forEach(r=>{n.indexOf(r)<0&&n.push(r)}),n.join(" ")}function XT(e){return e===void 0&&(e=""),e?e.includes("swiper-wrapper")?e:`swiper-wrapper ${e}`:"swiper-wrapper"}function QT(e){let{swiper:t,slides:n,passedParams:r,changedParams:i,nextEl:o,prevEl:a,scrollbarEl:s,paginationEl:l}=e;const u=i.filter(A=>A!=="children"&&A!=="direction"&&A!=="wrapperClass"),{params:d,pagination:p,navigation:f,scrollbar:v,virtual:x,thumbs:y}=t;let b,g,h,m,w,S,C,E;i.includes("thumbs")&&r.thumbs&&r.thumbs.swiper&&d.thumbs&&!d.thumbs.swiper&&(b=!0),i.includes("controller")&&r.controller&&r.controller.control&&d.controller&&!d.controller.control&&(g=!0),i.includes("pagination")&&r.pagination&&(r.pagination.el||l)&&(d.pagination||d.pagination===!1)&&p&&!p.el&&(h=!0),i.includes("scrollbar")&&r.scrollbar&&(r.scrollbar.el||s)&&(d.scrollbar||d.scrollbar===!1)&&v&&!v.el&&(m=!0),i.includes("navigation")&&r.navigation&&(r.navigation.prevEl||a)&&(r.navigation.nextEl||o)&&(d.navigation||d.navigation===!1)&&f&&!f.prevEl&&!f.nextEl&&(w=!0);const k=A=>{t[A]&&(t[A].destroy(),A==="navigation"?(t.isElement&&(t[A].prevEl.remove(),t[A].nextEl.remove()),d[A].prevEl=void 0,d[A].nextEl=void 0,t[A].prevEl=void 0,t[A].nextEl=void 0):(t.isElement&&t[A].el.remove(),d[A].el=void 0,t[A].el=void 0))};i.includes("loop")&&t.isElement&&(d.loop&&!r.loop?S=!0:!d.loop&&r.loop?C=!0:E=!0),u.forEach(A=>{if(Ar(d[A])&&Ar(r[A]))Object.assign(d[A],r[A]),(A==="navigation"||A==="pagination"||A==="scrollbar")&&"enabled"in r[A]&&!r[A].enabled&&k(A);else{const z=r[A];(z===!0||z===!1)&&(A==="navigation"||A==="pagination"||A==="scrollbar")?z===!1&&k(A):d[A]=r[A]}}),u.includes("controller")&&!g&&t.controller&&t.controller.control&&d.controller&&d.controller.control&&(t.controller.control=d.controller.control),i.includes("children")&&n&&x&&d.virtual.enabled?(x.slides=n,x.update(!0)):i.includes("virtual")&&x&&d.virtual.enabled&&(n&&(x.slides=n),x.update(!0)),i.includes("children")&&n&&d.loop&&(E=!0),b&&y.init()&&y.update(!0),g&&(t.controller.control=d.controller.control),h&&(t.isElement&&(!l||typeof l=="string")&&(l=document.createElement("div"),l.classList.add("swiper-pagination"),l.part.add("pagination"),t.el.appendChild(l)),l&&(d.pagination.el=l),p.init(),p.render(),p.update()),m&&(t.isElement&&(!s||typeof s=="string")&&(s=document.createElement("div"),s.classList.add("swiper-scrollbar"),s.part.add("scrollbar"),t.el.appendChild(s)),s&&(d.scrollbar.el=s),v.init(),v.updateSize(),v.setTranslate()),w&&(t.isElement&&((!o||typeof o=="string")&&(o=document.createElement("div"),o.classList.add("swiper-button-next"),o.innerHTML=t.hostEl.constructor.nextButtonSvg,o.part.add("button-next"),t.el.appendChild(o)),(!a||typeof a=="string")&&(a=document.createElement("div"),a.classList.add("swiper-button-prev"),a.innerHTML=t.hostEl.constructor.prevButtonSvg,a.part.add("button-prev"),t.el.appendChild(a))),o&&(d.navigation.nextEl=o),a&&(d.navigation.prevEl=a),f.init(),f.update()),i.includes("allowSlideNext")&&(t.allowSlideNext=r.allowSlideNext),i.includes("allowSlidePrev")&&(t.allowSlidePrev=r.allowSlidePrev),i.includes("direction")&&t.changeDirection(r.direction,!1),(S||E)&&t.loopDestroy(),(C||E)&&t.loopCreate(),t.update()}function ZT(e,t){e===void 0&&(e={}),t===void 0&&(t=!0);const n={on:{}},r={},i={};hi(n,cd),n._emitClasses=!0,n.init=!1;const o={},a=Ey.map(l=>l.replace(/_/,"")),s=Object.assign({},e);return Object.keys(s).forEach(l=>{typeof e[l]>"u"||(a.indexOf(l)>=0?Ar(e[l])?(n[l]={},i[l]={},hi(n[l],e[l]),hi(i[l],e[l])):(n[l]=e[l],i[l]=e[l]):l.search(/on[A-Z]/)===0&&typeof e[l]=="function"?t?r[`${l[2].toLowerCase()}${l.substr(3)}`]=e[l]:n.on[`${l[2].toLowerCase()}${l.substr(3)}`]=e[l]:o[l]=e[l])}),["navigation","pagination","scrollbar"].forEach(l=>{n[l]===!0&&(n[l]={}),n[l]===!1&&delete n[l]}),{params:n,passedParams:i,rest:o,events:r}}function JT(e,t){let{el:n,nextEl:r,prevEl:i,paginationEl:o,scrollbarEl:a,swiper:s}=e;ky(t)&&r&&i&&(s.params.navigation.nextEl=r,s.originalParams.navigation.nextEl=r,s.params.navigation.prevEl=i,s.originalParams.navigation.prevEl=i),zy(t)&&o&&(s.params.pagination.el=o,s.originalParams.pagination.el=o),Ay(t)&&a&&(s.params.scrollbar.el=a,s.originalParams.scrollbar.el=a),s.init(n)}function eP(e,t,n,r,i){const o=[];if(!t)return o;const a=l=>{o.indexOf(l)<0&&o.push(l)};if(n&&r){const l=r.map(i),u=n.map(i);l.join("")!==u.join("")&&a("children"),r.length!==n.length&&a("children")}return Ey.filter(l=>l[0]==="_").map(l=>l.replace(/_/,"")).forEach(l=>{if(l in e&&l in t)if(Ar(e[l])&&Ar(t[l])){const u=Object.keys(e[l]),d=Object.keys(t[l]);u.length!==d.length?a(l):(u.forEach(p=>{e[l][p]!==t[l][p]&&a(l)}),d.forEach(p=>{e[l][p]!==t[l][p]&&a(l)}))}else e[l]!==t[l]&&a(l)}),o}const tP=e=>{!e||e.destroyed||!e.params.virtual||e.params.virtual&&!e.params.virtual.enabled||(e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.parallax&&e.params.parallax&&e.params.parallax.enabled&&e.parallax.setTranslate())};function Ks(){return Ks=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ks.apply(this,arguments)}function Ly(e){return e.type&&e.type.displayName&&e.type.displayName.includes("SwiperSlide")}function _y(e){const t=[];return K.Children.toArray(e).forEach(n=>{Ly(n)?t.push(n):n.props&&n.props.children&&_y(n.props.children).forEach(r=>t.push(r))}),t}function nP(e){const t=[],n={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]};return K.Children.toArray(e).forEach(r=>{if(Ly(r))t.push(r);else if(r.props&&r.props.slot&&n[r.props.slot])n[r.props.slot].push(r);else if(r.props&&r.props.children){const i=_y(r.props.children);i.length>0?i.forEach(o=>t.push(o)):n["container-end"].push(r)}else n["container-end"].push(r)}),{slides:t,slots:n}}function rP(e,t,n){if(!n)return null;const r=d=>{let p=d;return d<0?p=t.length+d:p>=t.length&&(p=p-t.length),p},i=e.isHorizontal()?{[e.rtlTranslate?"right":"left"]:`${n.offset}px`}:{top:`${n.offset}px`},{from:o,to:a}=n,s=e.params.loop?-t.length:0,l=e.params.loop?t.length*2:t.length,u=[];for(let d=s;d<l;d+=1)d>=o&&d<=a&&u.push(t[r(d)]);return u.map((d,p)=>K.cloneElement(d,{swiper:e,style:i,key:d.props.virtualIndex||d.key||`slide-${p}`}))}function Co(e,t){return typeof window>"u"?T.useEffect(e,t):T.useLayoutEffect(e,t)}const wg=T.createContext(null),iP=T.createContext(null),vt=T.forwardRef(function(e,t){let{className:n,tag:r="div",wrapperTag:i="div",children:o,onSwiper:a,...s}=e===void 0?{}:e,l=!1;const[u,d]=T.useState("swiper"),[p,f]=T.useState(null),[v,x]=T.useState(!1),y=T.useRef(!1),b=T.useRef(null),g=T.useRef(null),h=T.useRef(null),m=T.useRef(null),w=T.useRef(null),S=T.useRef(null),C=T.useRef(null),E=T.useRef(null),{params:k,passedParams:A,rest:z,events:I}=ZT(s),{slides:F,slots:D}=nP(o),W=()=>{x(!v)};Object.assign(k.on,{_containerClasses(N,B){d(B)}});const q=()=>{Object.assign(k.on,I),l=!0;const N={...k};if(delete N.wrapperClass,g.current=new Zp(N),g.current.virtual&&g.current.params.virtual.enabled){g.current.virtual.slides=F;const B={cache:!1,slides:F,renderExternal:f,renderExternalUpdate:!1};hi(g.current.params.virtual,B),hi(g.current.originalParams.virtual,B)}};b.current||q(),g.current&&g.current.on("_beforeBreakpoint",W);const ae=()=>{l||!I||!g.current||Object.keys(I).forEach(N=>{g.current.on(N,I[N])})},ne=()=>{!I||!g.current||Object.keys(I).forEach(N=>{g.current.off(N,I[N])})};T.useEffect(()=>()=>{g.current&&g.current.off("_beforeBreakpoint",W)}),T.useEffect(()=>{!y.current&&g.current&&(g.current.emitSlidesClasses(),y.current=!0)}),Co(()=>{if(t&&(t.current=b.current),!!b.current)return g.current.destroyed&&q(),JT({el:b.current,nextEl:w.current,prevEl:S.current,paginationEl:C.current,scrollbarEl:E.current,swiper:g.current},k),a&&!g.current.destroyed&&a(g.current),()=>{g.current&&!g.current.destroyed&&g.current.destroy(!0,!1)}},[]),Co(()=>{ae();const N=eP(A,h.current,F,m.current,B=>B.key);return h.current=A,m.current=F,N.length&&g.current&&!g.current.destroyed&&QT({swiper:g.current,slides:F,passedParams:A,changedParams:N,nextEl:w.current,prevEl:S.current,scrollbarEl:E.current,paginationEl:C.current}),()=>{ne()}}),Co(()=>{tP(g.current)},[p]);function L(){return k.virtual?rP(g.current,F,p):F.map((N,B)=>K.cloneElement(N,{swiper:g.current,swiperSlideIndex:B}))}return K.createElement(r,Ks({ref:b,className:My(`${u}${n?` ${n}`:""}`)},z),K.createElement(iP.Provider,{value:g.current},D["container-start"],K.createElement(i,{className:XT(k.wrapperClass)},D["wrapper-start"],L(),D["wrapper-end"]),ky(k)&&K.createElement(K.Fragment,null,K.createElement("div",{ref:S,className:"swiper-button-prev"}),K.createElement("div",{ref:w,className:"swiper-button-next"})),Ay(k)&&K.createElement("div",{ref:E,className:"swiper-scrollbar"}),zy(k)&&K.createElement("div",{ref:C,className:"swiper-pagination"}),D["container-end"]))});vt.displayName="Swiper";const xt=T.forwardRef(function(e,t){let{tag:n="div",children:r,className:i="",swiper:o,zoom:a,lazy:s,virtualIndex:l,swiperSlideIndex:u,...d}=e===void 0?{}:e;const p=T.useRef(null),[f,v]=T.useState("swiper-slide"),[x,y]=T.useState(!1);function b(w,S,C){S===p.current&&v(C)}Co(()=>{if(typeof u<"u"&&(p.current.swiperSlideIndex=u),t&&(t.current=p.current),!(!p.current||!o)){if(o.destroyed){f!=="swiper-slide"&&v("swiper-slide");return}return o.on("_slideClass",b),()=>{o&&o.off("_slideClass",b)}}}),Co(()=>{o&&p.current&&!o.destroyed&&v(o.getSlideClasses(p.current))},[o]);const g={isActive:f.indexOf("swiper-slide-active")>=0,isVisible:f.indexOf("swiper-slide-visible")>=0,isPrev:f.indexOf("swiper-slide-prev")>=0,isNext:f.indexOf("swiper-slide-next")>=0},h=()=>typeof r=="function"?r(g):r,m=()=>{y(!0)};return K.createElement(n,Ks({ref:p,className:My(`${f}${i?` ${i}`:""}`),"data-swiper-slide-index":l,onLoad:m},d),a&&K.createElement(wg.Provider,{value:g},K.createElement("div",{className:"swiper-zoom-container","data-swiper-zoom":typeof a=="number"?a:void 0},h(),s&&!x&&K.createElement("div",{className:"swiper-lazy-preloader"}))),!a&&K.createElement(wg.Provider,{value:g},h(),s&&!x&&K.createElement("div",{className:"swiper-lazy-preloader"})))});xt.displayName="SwiperSlide";function Oy(e,t,n,r){return e.params.createElements&&Object.keys(r).forEach(i=>{if(!n[i]&&n.auto===!0){let o=Qt(e.el,`.${r[i]}`)[0];o||(o=Xo("div",r[i]),o.className=r[i],e.el.append(o)),n[i]=o,t[i]=o}}),n}function Pn(e){let{swiper:t,extendParams:n,on:r,emit:i}=e;n({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),t.navigation={nextEl:null,prevEl:null};function o(x){let y;return x&&typeof x=="string"&&t.isElement&&(y=t.el.querySelector(x)||t.hostEl.querySelector(x),y)?y:(x&&(typeof x=="string"&&(y=[...document.querySelectorAll(x)]),t.params.uniqueNavElements&&typeof x=="string"&&y&&y.length>1&&t.el.querySelectorAll(x).length===1?y=t.el.querySelector(x):y&&y.length===1&&(y=y[0])),x&&!y?x:y)}function a(x,y){const b=t.params.navigation;x=Oe(x),x.forEach(g=>{g&&(g.classList[y?"add":"remove"](...b.disabledClass.split(" ")),g.tagName==="BUTTON"&&(g.disabled=y),t.params.watchOverflow&&t.enabled&&g.classList[t.isLocked?"add":"remove"](b.lockClass))})}function s(){const{nextEl:x,prevEl:y}=t.navigation;if(t.params.loop){a(y,!1),a(x,!1);return}a(y,t.isBeginning&&!t.params.rewind),a(x,t.isEnd&&!t.params.rewind)}function l(x){x.preventDefault(),!(t.isBeginning&&!t.params.loop&&!t.params.rewind)&&(t.slidePrev(),i("navigationPrev"))}function u(x){x.preventDefault(),!(t.isEnd&&!t.params.loop&&!t.params.rewind)&&(t.slideNext(),i("navigationNext"))}function d(){const x=t.params.navigation;if(t.params.navigation=Oy(t,t.originalParams.navigation,t.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(x.nextEl||x.prevEl))return;let y=o(x.nextEl),b=o(x.prevEl);Object.assign(t.navigation,{nextEl:y,prevEl:b}),y=Oe(y),b=Oe(b);const g=(h,m)=>{h&&h.addEventListener("click",m==="next"?u:l),!t.enabled&&h&&h.classList.add(...x.lockClass.split(" "))};y.forEach(h=>g(h,"next")),b.forEach(h=>g(h,"prev"))}function p(){let{nextEl:x,prevEl:y}=t.navigation;x=Oe(x),y=Oe(y);const b=(g,h)=>{g.removeEventListener("click",h==="next"?u:l),g.classList.remove(...t.params.navigation.disabledClass.split(" "))};x.forEach(g=>b(g,"next")),y.forEach(g=>b(g,"prev"))}r("init",()=>{t.params.navigation.enabled===!1?v():(d(),s())}),r("toEdge fromEdge lock unlock",()=>{s()}),r("destroy",()=>{p()}),r("enable disable",()=>{let{nextEl:x,prevEl:y}=t.navigation;if(x=Oe(x),y=Oe(y),t.enabled){s();return}[...x,...y].filter(b=>!!b).forEach(b=>b.classList.add(t.params.navigation.lockClass))}),r("click",(x,y)=>{let{nextEl:b,prevEl:g}=t.navigation;b=Oe(b),g=Oe(g);const h=y.target;let m=g.includes(h)||b.includes(h);if(t.isElement&&!m){const w=y.path||y.composedPath&&y.composedPath();w&&(m=w.find(S=>b.includes(S)||g.includes(S)))}if(t.params.navigation.hideOnClick&&!m){if(t.pagination&&t.params.pagination&&t.params.pagination.clickable&&(t.pagination.el===h||t.pagination.el.contains(h)))return;let w;b.length?w=b[0].classList.contains(t.params.navigation.hiddenClass):g.length&&(w=g[0].classList.contains(t.params.navigation.hiddenClass)),i(w===!0?"navigationShow":"navigationHide"),[...b,...g].filter(S=>!!S).forEach(S=>S.classList.toggle(t.params.navigation.hiddenClass))}});const f=()=>{t.el.classList.remove(...t.params.navigation.navigationDisabledClass.split(" ")),d(),s()},v=()=>{t.el.classList.add(...t.params.navigation.navigationDisabledClass.split(" ")),p()};Object.assign(t.navigation,{enable:f,disable:v,update:s,init:d,destroy:p})}function eo(e){return e===void 0&&(e=""),`.${e.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`}function En(e){let{swiper:t,extendParams:n,on:r,emit:i}=e;const o="swiper-pagination";n({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:h=>h,formatFractionTotal:h=>h,bulletClass:`${o}-bullet`,bulletActiveClass:`${o}-bullet-active`,modifierClass:`${o}-`,currentClass:`${o}-current`,totalClass:`${o}-total`,hiddenClass:`${o}-hidden`,progressbarFillClass:`${o}-progressbar-fill`,progressbarOppositeClass:`${o}-progressbar-opposite`,clickableClass:`${o}-clickable`,lockClass:`${o}-lock`,horizontalClass:`${o}-horizontal`,verticalClass:`${o}-vertical`,paginationDisabledClass:`${o}-disabled`}}),t.pagination={el:null,bullets:[]};let a,s=0;function l(){return!t.params.pagination.el||!t.pagination.el||Array.isArray(t.pagination.el)&&t.pagination.el.length===0}function u(h,m){const{bulletActiveClass:w}=t.params.pagination;h&&(h=h[`${m==="prev"?"previous":"next"}ElementSibling`],h&&(h.classList.add(`${w}-${m}`),h=h[`${m==="prev"?"previous":"next"}ElementSibling`],h&&h.classList.add(`${w}-${m}-${m}`)))}function d(h,m,w){if(h=h%w,m=m%w,m===h+1)return"next";if(m===h-1)return"previous"}function p(h){const m=h.target.closest(eo(t.params.pagination.bulletClass));if(!m)return;h.preventDefault();const w=Ys(m)*t.params.slidesPerGroup;if(t.params.loop){if(t.realIndex===w)return;const S=d(t.realIndex,w,t.slides.length);S==="next"?t.slideNext():S==="previous"?t.slidePrev():t.slideToLoop(w)}else t.slideTo(w)}function f(){const h=t.rtl,m=t.params.pagination;if(l())return;let w=t.pagination.el;w=Oe(w);let S,C;const E=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.slides.length,k=t.params.loop?Math.ceil(E/t.params.slidesPerGroup):t.snapGrid.length;if(t.params.loop?(C=t.previousRealIndex||0,S=t.params.slidesPerGroup>1?Math.floor(t.realIndex/t.params.slidesPerGroup):t.realIndex):typeof t.snapIndex<"u"?(S=t.snapIndex,C=t.previousSnapIndex):(C=t.previousIndex||0,S=t.activeIndex||0),m.type==="bullets"&&t.pagination.bullets&&t.pagination.bullets.length>0){const A=t.pagination.bullets;let z,I,F;if(m.dynamicBullets&&(a=sd(A[0],t.isHorizontal()?"width":"height"),w.forEach(D=>{D.style[t.isHorizontal()?"width":"height"]=`${a*(m.dynamicMainBullets+4)}px`}),m.dynamicMainBullets>1&&C!==void 0&&(s+=S-(C||0),s>m.dynamicMainBullets-1?s=m.dynamicMainBullets-1:s<0&&(s=0)),z=Math.max(S-s,0),I=z+(Math.min(A.length,m.dynamicMainBullets)-1),F=(I+z)/2),A.forEach(D=>{const W=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(q=>`${m.bulletActiveClass}${q}`)].map(q=>typeof q=="string"&&q.includes(" ")?q.split(" "):q).flat();D.classList.remove(...W)}),w.length>1)A.forEach(D=>{const W=Ys(D);W===S?D.classList.add(...m.bulletActiveClass.split(" ")):t.isElement&&D.setAttribute("part","bullet"),m.dynamicBullets&&(W>=z&&W<=I&&D.classList.add(...`${m.bulletActiveClass}-main`.split(" ")),W===z&&u(D,"prev"),W===I&&u(D,"next"))});else{const D=A[S];if(D&&D.classList.add(...m.bulletActiveClass.split(" ")),t.isElement&&A.forEach((W,q)=>{W.setAttribute("part",q===S?"bullet-active":"bullet")}),m.dynamicBullets){const W=A[z],q=A[I];for(let ae=z;ae<=I;ae+=1)A[ae]&&A[ae].classList.add(...`${m.bulletActiveClass}-main`.split(" "));u(W,"prev"),u(q,"next")}}if(m.dynamicBullets){const D=Math.min(A.length,m.dynamicMainBullets+4),W=(a*D-a)/2-F*a,q=h?"right":"left";A.forEach(ae=>{ae.style[t.isHorizontal()?q:"top"]=`${W}px`})}}w.forEach((A,z)=>{if(m.type==="fraction"&&(A.querySelectorAll(eo(m.currentClass)).forEach(I=>{I.textContent=m.formatFractionCurrent(S+1)}),A.querySelectorAll(eo(m.totalClass)).forEach(I=>{I.textContent=m.formatFractionTotal(k)})),m.type==="progressbar"){let I;m.progressbarOpposite?I=t.isHorizontal()?"vertical":"horizontal":I=t.isHorizontal()?"horizontal":"vertical";const F=(S+1)/k;let D=1,W=1;I==="horizontal"?D=F:W=F,A.querySelectorAll(eo(m.progressbarFillClass)).forEach(q=>{q.style.transform=`translate3d(0,0,0) scaleX(${D}) scaleY(${W})`,q.style.transitionDuration=`${t.params.speed}ms`})}m.type==="custom"&&m.renderCustom?(A.innerHTML=m.renderCustom(t,S+1,k),z===0&&i("paginationRender",A)):(z===0&&i("paginationRender",A),i("paginationUpdate",A)),t.params.watchOverflow&&t.enabled&&A.classList[t.isLocked?"add":"remove"](m.lockClass)})}function v(){const h=t.params.pagination;if(l())return;const m=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.grid&&t.params.grid.rows>1?t.slides.length/Math.ceil(t.params.grid.rows):t.slides.length;let w=t.pagination.el;w=Oe(w);let S="";if(h.type==="bullets"){let C=t.params.loop?Math.ceil(m/t.params.slidesPerGroup):t.snapGrid.length;t.params.freeMode&&t.params.freeMode.enabled&&C>m&&(C=m);for(let E=0;E<C;E+=1)h.renderBullet?S+=h.renderBullet.call(t,E,h.bulletClass):S+=`<${h.bulletElement} ${t.isElement?'part="bullet"':""} class="${h.bulletClass}"></${h.bulletElement}>`}h.type==="fraction"&&(h.renderFraction?S=h.renderFraction.call(t,h.currentClass,h.totalClass):S=`<span class="${h.currentClass}"></span> / <span class="${h.totalClass}"></span>`),h.type==="progressbar"&&(h.renderProgressbar?S=h.renderProgressbar.call(t,h.progressbarFillClass):S=`<span class="${h.progressbarFillClass}"></span>`),t.pagination.bullets=[],w.forEach(C=>{h.type!=="custom"&&(C.innerHTML=S||""),h.type==="bullets"&&t.pagination.bullets.push(...C.querySelectorAll(eo(h.bulletClass)))}),h.type!=="custom"&&i("paginationRender",w[0])}function x(){t.params.pagination=Oy(t,t.originalParams.pagination,t.params.pagination,{el:"swiper-pagination"});const h=t.params.pagination;if(!h.el)return;let m;typeof h.el=="string"&&t.isElement&&(m=t.el.querySelector(h.el)),!m&&typeof h.el=="string"&&(m=[...document.querySelectorAll(h.el)]),m||(m=h.el),!(!m||m.length===0)&&(t.params.uniqueNavElements&&typeof h.el=="string"&&Array.isArray(m)&&m.length>1&&(m=[...t.el.querySelectorAll(h.el)],m.length>1&&(m=m.filter(w=>Sy(w,".swiper")[0]===t.el)[0])),Array.isArray(m)&&m.length===1&&(m=m[0]),Object.assign(t.pagination,{el:m}),m=Oe(m),m.forEach(w=>{h.type==="bullets"&&h.clickable&&w.classList.add(...(h.clickableClass||"").split(" ")),w.classList.add(h.modifierClass+h.type),w.classList.add(t.isHorizontal()?h.horizontalClass:h.verticalClass),h.type==="bullets"&&h.dynamicBullets&&(w.classList.add(`${h.modifierClass}${h.type}-dynamic`),s=0,h.dynamicMainBullets<1&&(h.dynamicMainBullets=1)),h.type==="progressbar"&&h.progressbarOpposite&&w.classList.add(h.progressbarOppositeClass),h.clickable&&w.addEventListener("click",p),t.enabled||w.classList.add(h.lockClass)}))}function y(){const h=t.params.pagination;if(l())return;let m=t.pagination.el;m&&(m=Oe(m),m.forEach(w=>{w.classList.remove(h.hiddenClass),w.classList.remove(h.modifierClass+h.type),w.classList.remove(t.isHorizontal()?h.horizontalClass:h.verticalClass),h.clickable&&(w.classList.remove(...(h.clickableClass||"").split(" ")),w.removeEventListener("click",p))})),t.pagination.bullets&&t.pagination.bullets.forEach(w=>w.classList.remove(...h.bulletActiveClass.split(" ")))}r("changeDirection",()=>{if(!t.pagination||!t.pagination.el)return;const h=t.params.pagination;let{el:m}=t.pagination;m=Oe(m),m.forEach(w=>{w.classList.remove(h.horizontalClass,h.verticalClass),w.classList.add(t.isHorizontal()?h.horizontalClass:h.verticalClass)})}),r("init",()=>{t.params.pagination.enabled===!1?g():(x(),v(),f())}),r("activeIndexChange",()=>{typeof t.snapIndex>"u"&&f()}),r("snapIndexChange",()=>{f()}),r("snapGridLengthChange",()=>{v(),f()}),r("destroy",()=>{y()}),r("enable disable",()=>{let{el:h}=t.pagination;h&&(h=Oe(h),h.forEach(m=>m.classList[t.enabled?"remove":"add"](t.params.pagination.lockClass)))}),r("lock unlock",()=>{f()}),r("click",(h,m)=>{const w=m.target,S=Oe(t.pagination.el);if(t.params.pagination.el&&t.params.pagination.hideOnClick&&S&&S.length>0&&!w.classList.contains(t.params.pagination.bulletClass)){if(t.navigation&&(t.navigation.nextEl&&w===t.navigation.nextEl||t.navigation.prevEl&&w===t.navigation.prevEl))return;const C=S[0].classList.contains(t.params.pagination.hiddenClass);i(C===!0?"paginationShow":"paginationHide"),S.forEach(E=>E.classList.toggle(t.params.pagination.hiddenClass))}});const b=()=>{t.el.classList.remove(t.params.pagination.paginationDisabledClass);let{el:h}=t.pagination;h&&(h=Oe(h),h.forEach(m=>m.classList.remove(t.params.pagination.paginationDisabledClass))),x(),v(),f()},g=()=>{t.el.classList.add(t.params.pagination.paginationDisabledClass);let{el:h}=t.pagination;h&&(h=Oe(h),h.forEach(m=>m.classList.add(t.params.pagination.paginationDisabledClass))),y()};Object.assign(t.pagination,{enable:b,disable:g,render:v,update:f,init:x,destroy:y})}function kn(e){let{swiper:t,extendParams:n,on:r,emit:i,params:o}=e;t.autoplay={running:!1,paused:!1,timeLeft:0},n({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let a,s,l=o&&o.autoplay?o.autoplay.delay:3e3,u=o&&o.autoplay?o.autoplay.delay:3e3,d,p=new Date().getTime(),f,v,x,y,b,g,h;function m(L){!t||t.destroyed||!t.wrapperEl||L.target===t.wrapperEl&&(t.wrapperEl.removeEventListener("transitionend",m),!(h||L.detail&&L.detail.bySwiperTouchMove)&&z())}const w=()=>{if(t.destroyed||!t.autoplay.running)return;t.autoplay.paused?f=!0:f&&(u=d,f=!1);const L=t.autoplay.paused?d:p+u-new Date().getTime();t.autoplay.timeLeft=L,i("autoplayTimeLeft",L,L/l),s=requestAnimationFrame(()=>{w()})},S=()=>{let L;return t.virtual&&t.params.virtual.enabled?L=t.slides.filter(B=>B.classList.contains("swiper-slide-active"))[0]:L=t.slides[t.activeIndex],L?parseInt(L.getAttribute("data-swiper-autoplay"),10):void 0},C=L=>{if(t.destroyed||!t.autoplay.running)return;cancelAnimationFrame(s),w();let N=typeof L>"u"?t.params.autoplay.delay:L;l=t.params.autoplay.delay,u=t.params.autoplay.delay;const B=S();!Number.isNaN(B)&&B>0&&typeof L>"u"&&(N=B,l=B,u=B),d=N;const Z=t.params.speed,re=()=>{!t||t.destroyed||(t.params.autoplay.reverseDirection?!t.isBeginning||t.params.loop||t.params.rewind?(t.slidePrev(Z,!0,!0),i("autoplay")):t.params.autoplay.stopOnLastSlide||(t.slideTo(t.slides.length-1,Z,!0,!0),i("autoplay")):!t.isEnd||t.params.loop||t.params.rewind?(t.slideNext(Z,!0,!0),i("autoplay")):t.params.autoplay.stopOnLastSlide||(t.slideTo(0,Z,!0,!0),i("autoplay")),t.params.cssMode&&(p=new Date().getTime(),requestAnimationFrame(()=>{C()})))};return N>0?(clearTimeout(a),a=setTimeout(()=>{re()},N)):requestAnimationFrame(()=>{re()}),N},E=()=>{p=new Date().getTime(),t.autoplay.running=!0,C(),i("autoplayStart")},k=()=>{t.autoplay.running=!1,clearTimeout(a),cancelAnimationFrame(s),i("autoplayStop")},A=(L,N)=>{if(t.destroyed||!t.autoplay.running)return;clearTimeout(a),L||(g=!0);const B=()=>{i("autoplayPause"),t.params.autoplay.waitForTransition?t.wrapperEl.addEventListener("transitionend",m):z()};if(t.autoplay.paused=!0,N){b&&(d=t.params.autoplay.delay),b=!1,B();return}d=(d||t.params.autoplay.delay)-(new Date().getTime()-p),!(t.isEnd&&d<0&&!t.params.loop)&&(d<0&&(d=0),B())},z=()=>{t.isEnd&&d<0&&!t.params.loop||t.destroyed||!t.autoplay.running||(p=new Date().getTime(),g?(g=!1,C(d)):C(),t.autoplay.paused=!1,i("autoplayResume"))},I=()=>{if(t.destroyed||!t.autoplay.running)return;const L=yn();L.visibilityState==="hidden"&&(g=!0,A(!0)),L.visibilityState==="visible"&&z()},F=L=>{L.pointerType==="mouse"&&(g=!0,h=!0,!(t.animating||t.autoplay.paused)&&A(!0))},D=L=>{L.pointerType==="mouse"&&(h=!1,t.autoplay.paused&&z())},W=()=>{t.params.autoplay.pauseOnMouseEnter&&(t.el.addEventListener("pointerenter",F),t.el.addEventListener("pointerleave",D))},q=()=>{t.el&&typeof t.el!="string"&&(t.el.removeEventListener("pointerenter",F),t.el.removeEventListener("pointerleave",D))},ae=()=>{yn().addEventListener("visibilitychange",I)},ne=()=>{yn().removeEventListener("visibilitychange",I)};r("init",()=>{t.params.autoplay.enabled&&(W(),ae(),E())}),r("destroy",()=>{q(),ne(),t.autoplay.running&&k()}),r("_freeModeStaticRelease",()=>{(x||g)&&z()}),r("_freeModeNoMomentumRelease",()=>{t.params.autoplay.disableOnInteraction?k():A(!0,!0)}),r("beforeTransitionStart",(L,N,B)=>{t.destroyed||!t.autoplay.running||(B||!t.params.autoplay.disableOnInteraction?A(!0,!0):k())}),r("sliderFirstMove",()=>{if(!(t.destroyed||!t.autoplay.running)){if(t.params.autoplay.disableOnInteraction){k();return}v=!0,x=!1,g=!1,y=setTimeout(()=>{g=!0,x=!0,A(!0)},200)}}),r("touchEnd",()=>{if(!(t.destroyed||!t.autoplay.running||!v)){if(clearTimeout(y),clearTimeout(a),t.params.autoplay.disableOnInteraction){x=!1,v=!1;return}x&&t.params.cssMode&&z(),x=!1,v=!1}}),r("slideChange",()=>{t.destroyed||!t.autoplay.running||(b=!0)}),Object.assign(t.autoplay,{start:E,stop:k,pause:A,resume:z})}function oP(e){const{effect:t,swiper:n,on:r,setTranslate:i,setTransition:o,overwriteParams:a,perspective:s,recreateShadows:l,getEffectParams:u}=e;r("beforeInit",()=>{if(n.params.effect!==t)return;n.classNames.push(`${n.params.containerModifierClass}${t}`),s&&s()&&n.classNames.push(`${n.params.containerModifierClass}3d`);const p=a?a():{};Object.assign(n.params,p),Object.assign(n.originalParams,p)}),r("setTranslate",()=>{n.params.effect===t&&i()}),r("setTransition",(p,f)=>{n.params.effect===t&&o(f)}),r("transitionEnd",()=>{if(n.params.effect===t&&l){if(!u||!u().slideShadows)return;n.slides.forEach(p=>{p.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(f=>f.remove())}),l()}});let d;r("virtualUpdate",()=>{n.params.effect===t&&(n.slides.length||(d=!0),requestAnimationFrame(()=>{d&&n.slides&&n.slides.length&&(i(),d=!1)}))})}function aP(e,t){const n=Qp(t);return n!==t&&(n.style.backfaceVisibility="hidden",n.style["-webkit-backface-visibility"]="hidden"),n}function bg(e,t,n){const r=`swiper-slide-shadow${n?`-${n}`:""}${` swiper-slide-shadow-${e}`}`,i=Qp(t);let o=i.querySelector(`.${r.split(" ").join(".")}`);return o||(o=Xo("div",r.split(" ")),i.append(o)),o}function sP(e){let{swiper:t,extendParams:n,on:r}=e;n({coverflowEffect:{rotate:50,stretch:0,depth:100,scale:1,modifier:1,slideShadows:!0}}),oP({effect:"coverflow",swiper:t,on:r,setTranslate:()=>{const{width:a,height:s,slides:l,slidesSizesGrid:u}=t,d=t.params.coverflowEffect,p=t.isHorizontal(),f=t.translate,v=p?-f+a/2:-f+s/2,x=p?d.rotate:-d.rotate,y=d.depth,b=N7(t);for(let g=0,h=l.length;g<h;g+=1){const m=l[g],w=u[g],S=m.swiperSlideOffset,C=(v-S-w/2)/w,E=typeof d.modifier=="function"?d.modifier(C):C*d.modifier;let k=p?x*E:0,A=p?0:x*E,z=-y*Math.abs(E),I=d.stretch;typeof I=="string"&&I.indexOf("%")!==-1&&(I=parseFloat(d.stretch)/100*w);let F=p?0:I*E,D=p?I*E:0,W=1-(1-d.scale)*Math.abs(E);Math.abs(D)<.001&&(D=0),Math.abs(F)<.001&&(F=0),Math.abs(z)<.001&&(z=0),Math.abs(k)<.001&&(k=0),Math.abs(A)<.001&&(A=0),Math.abs(W)<.001&&(W=0);const q=`translate3d(${D}px,${F}px,${z}px)  rotateX(${b(A)}deg) rotateY(${b(k)}deg) scale(${W})`,ae=aP(d,m);if(ae.style.transform=q,m.style.zIndex=-Math.abs(Math.round(E))+1,d.slideShadows){let ne=p?m.querySelector(".swiper-slide-shadow-left"):m.querySelector(".swiper-slide-shadow-top"),L=p?m.querySelector(".swiper-slide-shadow-right"):m.querySelector(".swiper-slide-shadow-bottom");ne||(ne=bg("coverflow",m,p?"left":"top")),L||(L=bg("coverflow",m,p?"right":"bottom")),ne&&(ne.style.opacity=E>0?E:0),L&&(L.style.opacity=-E>0?-E:0)}}},setTransition:a=>{t.slides.map(l=>Qp(l)).forEach(l=>{l.style.transitionDuration=`${a}ms`,l.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(u=>{u.style.transitionDuration=`${a}ms`})})},perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0})})}const lP=P.button`
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
`,zl=({text:e,backDefine:t,colorDefine:n})=>c.jsxs(lP,{backDefine:t,colorDefine:n,children:[e,c.jsx(Bp,{className:"icon"})]}),cP=Kp`
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
            display: none;
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
`,uP=Di`
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
`,dP=P(U.img)`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;

    @media (max-width: 768px){
        border: 1px solid red;
        filter: brightness(70%);
    }
`,pP=P(U.div)`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  border-radius: 0 20px 20px 0;
  animation: ${uP} 5s ease-in-out infinite;
  background-image: ${({backgroundImage:e})=>`url(${e})`};
  background-size: cover;
  background-position: center;

  @media (max-width: 768px){
    border: 1px solid red;
  }

  &:hover {
    transform: rotate(45deg) scale(1.2);
  }
`,fP=P(U.div)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 4px; /* Define a espessura da borda */
    border-radius: inherit;
    background: linear-gradient(45deg, #00000080, #0001);
    -webkit-mask-image: linear-gradient(#fff, #fff); /* Cria a borda */
    mask-image: linear-gradient(#fff, #fff);
    pointer-events: none; /* Faz com que a borda seja apenas decorativa */
`,hP=P(U.div)`
    position: absolute;
    bottom: 20px;
    left: 20px;
    color: var(--color--white);
    font-family: Arial, sans-serif;

    @media (max-width: 768px){
        border: 1px solid red;
    }
`,mP=P(U.h2)`
    font-size: 24px;
    font-weight: bold;
    font-family: var(--font--comfortaa);

    @media (max-width: 768px){
        border: 1px solid red;
    }
`,gP=P(U.p)`
    font-size: 16px;
    margin: 5px 0;
    font-family: var(--font--avenir);
`,vP=P(U.div)`
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
`,xP=P.div`
    width: 100%; // Largura total em dispositivos móveis
    max-width: 60%; // Limite de 60% em telas maiores
    margin: 0 auto; // Centraliza o slider

    @media (max-width: 640px) {
        max-width: 100%; // 100% em dispositivos móveis
    }
`,Xs=({content:e=[],contentType:t="image",spaceBetween:n=10,slidesPerView:r=1,height:i="300px",autoplayDelay:o=3e3,showPagination:a=!0,showNavigation:s=!0})=>{const{scrollY:l}=Vx(),u=vr(l,[0,300],[0,-30]),d=vr(l,[0,300],[0,-20]),p=vr(l,[0,300],[0,-10]),f=vr(l,[0,300],[0,-5]);return c.jsxs(xP,{children:[c.jsx(cP,{}),c.jsx(vt,{modules:[Pn,En,kn],navigation:s,pagination:a?{clickable:!0}:!1,spaceBetween:n,loop:!0,slidesPerView:r,autoplay:{delay:o,disableOnInteraction:!1},style:{height:i},breakpoints:{640:{slidesPerView:1,spaceBetween:10,height:"200px"},768:{slidesPerView:1,spaceBetween:20,height:"250px"},1024:{slidesPerView:1,spaceBetween:30,height:"300px"}},children:e.map((v,x)=>c.jsx(xt,{children:t==="image"?c.jsx(dP,{src:v.src,alt:v.alt||`Slide ${x+1}`,initial:{scale:.8,rotate:10,opacity:0},whileInView:{scale:1,rotate:0,opacity:1},viewport:{once:!0},transition:{duration:.7,ease:"easeOut"}}):c.jsxs(pP,{backgroundImage:v.backgroundImage,initial:{opacity:0,scale:.8,rotate:5},whileInView:{opacity:1,scale:1,rotate:0},viewport:{once:!0},transition:{duration:.8,ease:"easeOut"},children:[c.jsx(fP,{}),c.jsxs(hP,{initial:{opacity:0,y:50},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.8,delay:.3,ease:"easeOut"},children:[c.jsx(mP,{style:{y:u},children:v.title}),c.jsx(gP,{style:{y:d},children:v.subtitle}),c.jsx(vP,{style:{y:p},children:v.features.map((y,b)=>c.jsxs("span",{children:[y.icon," ",y.text]},b))}),c.jsx(zl,{text:"Conhecer todas as acomodações",style:{y:f}})]})]})},x))})]})},mi=P.button`
    position: relative;
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 8px 36px;
    font-size: 12px;
    font-weight: 600;
    color: var(--color--black);
    background-color: inherit;
    border: 4px solid transparent;
    border-radius: 100px;
    box-shadow: 0 0 0 2px var(--color--black);
    cursor: pointer;
    overflow: hidden;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
    font-family: var(--font--comfortaa);

    &:hover {
        box-shadow: 0 0 0 12px transparent;
        color: var(--color--black);
        border-radius: 40px;
    }

    &:active {
        scale: 0.95;
        box-shadow: 0 0 0 4px var(--color--black);
    }

    // Muda a cor do botão em telas menores
    @media (max-width: 640px) {
        color: var(--color--white); // Cor do texto
        background-color: var(--color--black); // Cor de fundo
        border: 4px solid var(--color--white); // Borda
    }
`,Sg=P.svg`
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

    ${mi}:hover &.arr-1 {
        right: -25%;
    }

    ${mi}:hover &.arr-2 {
        left: 16px;
    }

    ${mi}:hover & {
        fill: var(--color--white);
    }
`,yP=P.span`
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

    ${mi}:hover & {
        width: 220px;
        height: 220px;
        opacity: 1;
        color: var(--color--white);
    }
`,wP=P.span`
    position: relative;
    z-index: 1;
    transform: translateX(-12px);
    transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);

    ${mi}:hover & {
        transform: translateX(12px);
        color: var(--color--white);
    }
`,Vn=({text:e,onClick:t})=>c.jsxs(mi,{onClick:t,children:[c.jsx(Sg,{className:"arr-2",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:c.jsx("path",{d:"M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"})}),c.jsx(wP,{children:e}),c.jsx(yP,{}),c.jsx(Sg,{className:"arr-1",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:c.jsx("path",{d:"M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"})})]}),bP=Di`
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
`,SP=P(U.div)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 10px;
    width: 40%;
    height: 60vh;
    padding: 50px;

    @media (max-width: 768px){
        width: 100%; 
        position: absolute;
        align-items: center;
        gap: 15px;
        z-index: 2;
        border: 1px solid red;
    }

    &::before{
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        opacity: 0.1;
        left: 0;
        top: 0;
        border: 1px solid var(--color--black);
        background-image: url('../../public/background/background_black.webp');
        background-position: center;
        background-size: contain;
        animation: ${bP} 8s ease-in-out infinite;
    }
`,jP=P(U.h1)`
    width: 100%;
    text-align: left;
    font-family: var(--font--comfortaa);
    font-weight: 400;
    font-size: 1.8rem;

    @media (max-width: 768px){
        text-align: center;
        color: var(--color--white);
        border: 1px solid red;
        font-size: 1.5rem;
    }
`,CP=P(U.p)`
    width: 80%;
    font-family: var(--font--avenir);

    @media (max-width: 768px){
        text-align: justify;
        color: var(--color--white);
        width: 100%;
        margin-top: 5px;
        border: 1px solid red;
        font-size: 1rem;
        line-height: 140%;
    }
`,jg=({text:e,title:t,borderColor:n,containerAnimation:r={opacity:0,y:50},titleAnimation:i={opacity:0,y:-20},textAnimation:o={opacity:0,x:-20},buttonAnimation:a={opacity:0,scale:.8},animationDuration:s=.5})=>c.jsxs(SP,{borderColor:n,initial:r,whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:s},children:[c.jsx(jP,{initial:i,whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:s,delay:.2},children:t}),c.jsx(CP,{initial:o,whileInView:{opacity:1,x:0},viewport:{once:!0,amount:.3},transition:{duration:s,delay:.4},children:e}),c.jsx(U.div,{initial:a,whileInView:{opacity:1,scale:1},viewport:{once:!0,amount:.3},transition:{duration:s,delay:.6},children:c.jsx(Vn,{text:"Fazer minha reserva",backgroundColor:"transparent",border:"1px solid var(--color--black)",color:"var(--color--black)"})})]}),TP=Kp`
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
`,PP=P.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 15px;
    overflow: hidden;
    background-image: ${({backgroundImage:e})=>`url(${e})`};
    background-size: cover;
    background-position: center;

    @media (max-width: 768px){
        width: 90%;
        margin-left: 5%;
        border: 1px solid red;
        border-image: fill 0 linear-gradient(#0001, #00000080)
        }
`,EP=P.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 15px; /* Mantém o mesmo border-radius */
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0)); /* Gradiente */
    pointer-events: none; /* Apenas decorativa */
    z-index: 1;
`,kP=P.div`
    position: absolute;
    bottom: 15px;
    left: 15px;
    color: white;
    padding: 10px;
    border-radius: 8px;
    gap: 20px;
    z-index: 2;

    @media (max-width: 768px){
        gap: 30px;
        border: 1px solid red;
    }
`,zP=P.h2`
    font-size: 24px;
    font-weight: bold;
    font-family: var(--font--comfortaa);
    margin: 0;

    @media (max-width: 768px){
        border: 1px solid red;
        font-weight: 100;
        font-size: 28px;
    }
`,AP=P.p`
    font-size: 14px;
    width: 80%;
    margin: 2px 0 10px;
    font-family: var(--font--avenir);

    @media (max-width: 768px){
        width: 100%;
        text-align: left!important;
        font-size: 13px!important;
    }
`,Jp=({content:e=[],height:t="300px",width:n="100%",autoplayDelay:r=3e3,showPagination:i=!0,showNavigation:o=!0})=>c.jsxs(c.Fragment,{children:[c.jsx(TP,{}),c.jsx(vt,{modules:[Pn,En,kn,sP],effect:"coverflow",grabCursor:!0,centeredSlides:!0,loop:!0,slidesPerView:"auto",coverflowEffect:{rotate:50,stretch:50,depth:200,modifier:1,slideShadows:!0},navigation:o,pagination:i?{clickable:!0}:!1,autoplay:{delay:r,disableOnInteraction:!1},breakpoints:{1024:{slidesPerView:2},768:{slidesPerView:2},0:{slidesPerView:1}},style:{width:n,height:t},children:e.map((a,s)=>c.jsx(xt,{style:{width:"60%"},children:c.jsxs(PP,{backgroundImage:a.backgroundImage,children:[c.jsx(EP,{}),c.jsxs(kP,{children:[c.jsx(zP,{children:a.title}),c.jsx(AP,{children:a.description}),c.jsx(zl,{text:"Fazer minha reserva agora"})]})]})},s))})]}),MP=P(U.div)`
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
`,LP=P(U.img)`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;


    &:hover {
        transform: scale(1.2) rotate(3deg); // Zoom e rotação ao passar o mouse
    }
`,_P=P(U.div)`
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
`,Cg=({images:e=[],reverse:t=!1})=>c.jsx(vt,{modules:[kn],spaceBetween:0,loop:!0,autoplay:{delay:0,disableOnInteraction:!1,reverseDirection:t},speed:2500,freeMode:!0,freeModeMomentum:!1,breakpoints:{320:{slidesPerView:3},768:{slidesPerView:4},1024:{slidesPerView:5}},children:e.map((n,r)=>c.jsx(xt,{children:c.jsxs(MP,{initial:{scale:.8,rotate:-5,opacity:0},animate:{scale:1,rotate:0,opacity:1},transition:{duration:.6,ease:"easeOut"},children:[c.jsx(LP,{src:n.src,alt:n.alt||`Imagem ${r+1}`,initial:{scale:1},whileHover:{scale:1.2,rotate:3},transition:{duration:.3}}),c.jsx(_P,{initial:{y:30,opacity:0},animate:{y:0,opacity:1},transition:{duration:.7,delay:.4,ease:"backOut"},children:n.label})]})},r))}),OP=Di`
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
`,IP=P(U.div)`
    display: flex;
    flex-direction: column;
    height: auto;
    padding: 10px;
    background: var(--color--white);
    border-radius: 12px;
    overflow: hidden;
    width: 100%;
    border: 1px solid var(--color--black);
    animation: ${OP} 5s ease-in-out infinite;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`,RP=P.img`
    width: 100%;
    height: 220px;
    object-fit: cover;
    border-radius: 10px;
`,VP=P.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: #333;
`,DP=P.h3`
    font-size: 22px;
    font-weight: bold;
    font-family: var(--font--comfortaa);
    margin: 0;
`,NP=P.p`
    font-size: 14px;
    color: #777;
    font-family: var(--font--avenir);
    margin: 0;
`,BP=P.div`
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    font-size: 12px;
    color: #555;

    span {
        display: flex;
        align-items: center;
        gap: 5px;
        background: #e0e0e0;
        font-family: var(--font--comfortaa);
        padding: 5px 8px;
        border-radius: 8px;
        font-size: 10px;
    }
`,FP=P.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
    font-size: 16px;
`,$P=P.p`
    font-size: 18px;
    font-family: var(--font--comfortaa);
    font-weight: bold;
    margin: 0;
    color: #333;

    & > span{
        font-size: 10px;
    }
`,HP=({events:e=[]})=>c.jsx(vt,{modules:[Pn,En,kn],autoplay:!0,spaceBetween:20,navigation:!0,pagination:!1,loop:!0,breakpoints:{1024:{slidesPerView:3},768:{slidesPerView:2},0:{slidesPerView:1}},children:e.map((t,n)=>c.jsx(xt,{children:c.jsx(UP,{event:t,delay:n*.1})},n))}),UP=({event:e,delay:t})=>{const n=K.useRef(null),r=Dx(n,{once:!0});return c.jsxs(IP,{ref:n,initial:{opacity:0,y:50},animate:r?{opacity:1,y:0}:{},transition:{duration:.5,delay:t},children:[c.jsx(RP,{src:e.image,alt:e.title}),c.jsxs(VP,{children:[c.jsx(DP,{children:e.title}),c.jsx(NP,{children:e.dateRange}),c.jsx(BP,{children:e.features.map((i,o)=>c.jsxs("span",{children:[i.icon," ",i.text]},o))}),c.jsx(FP,{children:c.jsxs($P,{children:["A partir de: ",c.jsx("span",{children:"10x"}),"R$",e.price]})}),c.jsx(zl,{text:"Quero fechar minha reserva agora",backDefine:"var(--color--black)",colorDefine:"var(--color--white)"})]})]})};function WP(e){return le({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5"},child:[]},{tag:"path",attr:{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"},child:[]},{tag:"line",attr:{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5"},child:[]}]})(e)}function Iy(e){return le({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 0 0 0 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"},child:[]}]})(e)}function Ry(e){return le({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 0 0 0-48.4z"},child:[]}]})(e)}function GP(e){return le({tag:"svg",attr:{viewBox:"0 0 1024 1024",fill:"currentColor",fillRule:"evenodd"},child:[{tag:"path",attr:{d:"M448 0C200.807 0 0 200.807 0 448s200.807 448 448 448 448-200.807 448-448S695.193 0 448 0m0 38.957c226.14 0 409.043 182.904 409.043 409.043 0 226.14-182.904 409.043-409.043 409.043-41.365 0-81.269-6.19-118.886-17.576 16.756-28.014 38.39-68.058 46.984-101.12 5.106-19.601 26.098-99.559 26.098-99.559 13.642 26.045 53.503 48.087 95.945 48.087 126.295 0 217.343-116.149 217.343-260.484 0-138.375-112.916-241.88-258.201-241.88-180.753 0-276.69 121.314-276.69 253.407 0 61.433 32.673 137.902 84.989 162.256 7.924 3.688 12.18 2.09 14-5.592 1.4-5.831 8.468-34.255 11.64-47.479 1.016-4.22.524-7.866-2.89-12.021-17.316-21.004-31.196-59.583-31.196-95.566 0-92.374 69.932-181.771 189.076-181.771 102.875 0 174.924 70.13 174.924 170.396 0 113.281-57.2 191.777-131.63 191.777-41.106 0-71.885-34.005-62.011-75.706 11.838-49.77 34.695-103.478 34.695-139.43 0-32.149-17.253-58.967-52.994-58.967-42.024 0-75.783 43.447-75.783 101.69 0 37.063 12.554 62.163 12.554 62.163s-41.511 175.51-49.114 208.174c-7.619 32.642-5.578 76.605-2.435 109.337C144.551 766.518 38.957 619.785 38.957 448 38.957 221.86 221.86 38.957 448 38.957",transform:"translate(64 64)"},child:[]}]})(e)}function qP(e){return le({tag:"svg",attr:{viewBox:"0 0 1024 1024",fill:"currentColor",fillRule:"evenodd"},child:[{tag:"path",attr:{d:"M365.014.667C408.68 0 452.011.333 495.342 0c2.667 51 21 102.999 58.33 138.998 37.332 37 89.997 54 141.328 59.666v134.332c-47.998-1.667-96.33-11.667-139.994-32.333-19-8.667-36.665-19.667-53.998-31-.333 97.332.334 194.665-.666 291.663-2.667 46.666-18 93-44.998 131.332-43.665 64-119.328 105.665-196.992 106.999-47.664 2.666-95.329-10.334-135.994-34.333C55.028 725.658 7.696 652.992.697 574.993c-.667-16.667-1-33.333-.334-49.666 6-63.333 37.332-123.999 85.997-165.332 55.33-47.999 132.66-70.999 204.99-57.332.667 49.333-1.332 98.665-1.332 147.998-33-10.667-71.664-7.667-100.663 12.333-20.999 13.667-36.998 34.666-45.331 58.333-7 17-5 35.666-4.667 53.666 8 54.666 60.664 100.665 116.662 95.665 37.332-.333 72.997-22 92.33-53.666 6.332-11 13.332-22.333 13.665-35.333 3.334-59.666 2-118.998 2.334-178.664.333-134.332-.334-268.33.666-402.328",transform:"translate(165 112)"},child:[]}]})(e)}function YP(e){return le({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"},child:[]}]})(e)}function KP(e){return le({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M12 3 4 9v12h16V9l-8-6zm.5 9.5c0 .83-.67 1.5-1.5 1.5v4h-1v-4c-.83 0-1.5-.67-1.5-1.5v-3h1v3h.5v-3h1v3h.5v-3h1v3zM15 18h-1v-3.5h-1v-3c0-1.1.9-2 2-2V18z"},child:[]}]})(e)}function XP(e){return le({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M16.5 12h-9c-.55 0-1 .45-1 1v1h11v-1c0-.55-.45-1-1-1zM7.25 8.5h4v2h-4zM12.75 8.5h4v2h-4z"},child:[]},{tag:"path",attr:{d:"M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 15h-1.5v-1.5h-11V17H5v-3.83c0-.66.25-1.26.65-1.72V9c0-1.1.9-2 2-2H11c.37 0 .72.12 1 .32.28-.2.63-.32 1-.32h3.35c1.1 0 2 .9 2 2v2.45c.4.46.65 1.06.65 1.72V17z"},child:[]}]})(e)}function QP(e){return le({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"circle",attr:{cx:"4.5",cy:"9.5",r:"2.5"},child:[]},{tag:"circle",attr:{cx:"9",cy:"5.5",r:"2.5"},child:[]},{tag:"circle",attr:{cx:"15",cy:"5.5",r:"2.5"},child:[]},{tag:"circle",attr:{cx:"19.5",cy:"9.5",r:"2.5"},child:[]},{tag:"path",attr:{d:"M17.34 14.86c-.87-1.02-1.6-1.89-2.48-2.91-.46-.54-1.05-1.08-1.75-1.32-.11-.04-.22-.07-.33-.09-.25-.04-.52-.04-.78-.04s-.53 0-.79.05c-.11.02-.22.05-.33.09-.7.24-1.28.78-1.75 1.32-.87 1.02-1.6 1.89-2.48 2.91-1.31 1.31-2.92 2.76-2.62 4.79.29 1.02 1.02 2.03 2.33 2.32.73.15 3.06-.44 5.54-.44h.18c2.48 0 4.81.58 5.54.44 1.31-.29 2.04-1.31 2.33-2.32.31-2.04-1.3-3.49-2.61-4.8z"},child:[]}]})(e)}function Tt(e){return le({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"m10 17 5-5-5-5v10z"},child:[]}]})(e)}const ZP=P(U.button)`
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
`,JP=P(U.footer)`
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
`,eE=P.div`
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
`,tE=P.div`
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

        @media (max-width: 768px){
            width: 100%;
        }
    }
`,nE=P.section`
    display: flex;
    width: 100%;
    height: 35vh;

    @media (max-width: 768px){
        height: auto;
        flex-direction: column;
        gap: 25px;
    }
`,rE=P.section`
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
`,iE=P.section`
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
`,oE=P.div`
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
`,aE=P.hr`
    width: 100%;
    margin-bottom: -50px;
`,sa=()=>{const e=T.useRef(null),t=Dx(e,{once:!0}),n={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.6}}};return c.jsx(c.Fragment,{children:c.jsxs(JP,{ref:e,initial:"hidden",animate:t?"visible":"hidden",children:[c.jsxs(nE,{as:U.div,children:[c.jsxs(eE,{children:[c.jsx(U.h1,{variants:n,initial:"hidden",animate:t?"visible":"hidden",transition:{delay:.2},children:"Fale agora com a nossa central de reservas"}),c.jsxs(U.p,{variants:n,initial:"hidden",animate:t?"visible":"hidden",transition:{delay:.3},children:["Todas as informações são usadas apenas para entrar em contato. Entenda melhor sobre o uso das suas informações pela nossa",c.jsx("a",{href:"https://exemplo.com/politica-de-privacidade",children:"política de privacidade"}),"."]}),c.jsx(U.hr,{variants:n,initial:"hidden",animate:t?"visible":"hidden",transition:{delay:.4}}),c.jsxs("div",{children:[c.jsx(U.h4,{variants:n,initial:"hidden",animate:t?"visible":"hidden",transition:{delay:.5},children:"Siga-nos"}),c.jsxs("div",{children:[c.jsx(U.a,{href:"https://instagram.com",target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.1},variants:n,initial:"hidden",animate:t?"visible":"hidden",transition:{delay:.6},children:c.jsx(WP,{})}),c.jsx(U.a,{href:"https://tiktok.com",target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.1},variants:n,initial:"hidden",animate:t?"visible":"hidden",transition:{delay:.7},children:c.jsx(qP,{})}),c.jsx(U.a,{href:"https://pinterest.com",target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.1},variants:n,initial:"hidden",animate:t?"visible":"hidden",transition:{delay:.8},children:c.jsx(GP,{})})]})]})]}),c.jsx(tE,{children:c.jsxs("form",{id:"contactForm",children:[c.jsx(U.input,{type:"text",id:"name",placeholder:"Me diga seu nome",variants:n,initial:"hidden",animate:t?"visible":"hidden",transition:{delay:.9}}),c.jsx(U.input,{type:"email",id:"email",placeholder:"Preciso saber seu e-mail também!",variants:n,initial:"hidden",animate:t?"visible":"hidden",transition:{delay:1}}),c.jsx(U.input,{type:"tel",id:"tel",placeholder:"Me diga seu número de WhatsApp",variants:n,initial:"hidden",animate:t?"visible":"hidden",transition:{delay:1.1}}),c.jsxs(ZP,{whileHover:{scale:1.05,backgroundColor:"var(--color--blue)"},whileTap:{scale:.95},children:[c.jsx(YP,{size:20}),c.jsx("span",{children:"Enviar meu dados para contato"})]})]})})]}),c.jsxs(iE,{as:U.div,children:[c.jsxs(U.div,{variants:n,initial:"hidden",animate:t?"visible":"hidden",transition:{delay:1.2},children:[c.jsx("img",{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1729513421/white_sevdgn.png",alt:"Descrição da imagem",loading:"lazy"}),c.jsx("p",{children:"A pousada mais Pet Friendly, venha conhecer!"})]}),c.jsxs(U.div,{variants:n,initial:"hidden",animate:t?"visible":"hidden",transition:{delay:1.3},children:[c.jsx("h2",{children:"Âncoras"}),c.jsxs("a",{href:"#",children:[" ",c.jsx(Tt,{})," Início "]}),c.jsxs("a",{href:"#",children:[" ",c.jsx(Tt,{})," Acomodações "]}),c.jsxs("a",{href:"#",children:[" ",c.jsx(Tt,{})," Estrutura "]}),c.jsxs("a",{href:"#",children:[" ",c.jsx(Tt,{})," Pet Friendly "]}),c.jsxs("a",{href:"#",children:[" ",c.jsx(Tt,{})," Pacotes "]}),c.jsxs("a",{href:"#",children:[" ",c.jsx(Tt,{})," Atrações "]})]}),c.jsxs(U.div,{variants:n,initial:"hidden",animate:t?"visible":"hidden",transition:{delay:1.4},children:[c.jsx("h2",{children:"Ajuda"}),c.jsxs("a",{href:"#",children:[" ",c.jsx(Tt,{})," WhatsApp "]}),c.jsxs("a",{href:"#",children:[" ",c.jsx(Tt,{})," +55 (24) 98109-0909 "]}),c.jsxs("a",{href:"#",children:[" ",c.jsx(Tt,{})," pousadaleange@gmail.com "]})]}),c.jsxs(U.div,{variants:n,initial:"hidden",animate:t?"visible":"hidden",transition:{delay:1.5},children:[c.jsx("h2",{children:"Fique por dentro de tudo"}),c.jsxs("a",{href:"#",children:[" ",c.jsx(Tt,{})," Instagram "]}),c.jsxs("a",{href:"#",children:[" ",c.jsx(Tt,{})," TikTok "]}),c.jsxs("a",{href:"#",children:[" ",c.jsx(Tt,{})," Pinterest "]})]})]}),c.jsxs(rE,{as:U.div,variants:n,initial:"hidden",animate:t?"visible":"hidden",transition:{delay:1.6},children:[c.jsx("h1",{children:"Saiba onde estamos localizados"}),c.jsx("div",{children:c.jsx("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235239.22077211382!2d-43.355636!3d-22.461517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x99106a0d4d634d%3A0x5a069366075bf207!2sPousada%20Le%20Ange!5e0!3m2!1spt-BR!2sbr!4v1697101366468!5m2!1spt-BR!2sbr",width:"300",height:"150",style:{border:0,borderRadius:15},allowFullScreen:"",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade",title:"Mapa da Unidade Serra"})}),c.jsx("div",{children:c.jsx("iframe",{src:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14718.952062952678!2d-41.958707!3d-22.737977!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x97ab01cac79615%3A0x6b404b4741597da1!2sLeAnge%20Mar!5e0!3m2!1spt-BR!2sus!4v1728577984633!5m2!1spt-BR!2sus",width:"300",height:"150",style:{border:0,borderRadius:15},allowFullScreen:"",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade",title:"Mapa da Unidade Mar"})})]}),c.jsx(aE,{as:U.hr,variants:n,initial:"hidden",animate:t?"visible":"hidden",transition:{delay:1.7}}),c.jsxs(oE,{as:U.div,variants:n,initial:"hidden",animate:t?"visible":"hidden",transition:{delay:1.8},children:[c.jsx("p",{children:"Todos os direitos reservados | &copy 2024"}),c.jsx("a",{href:"#",children:"Termos de condições"}),c.jsxs("p",{children:["Desenvolvido por ",c.jsx("b",{children:c.jsx("a",{href:"#",children:"Aleph"})})]})]})]})})};function sE(e){return le({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M3 14h2v7a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-7h2a.998.998 0 0 0 .913-.593.998.998 0 0 0-.17-1.076l-9-10c-.379-.422-1.107-.422-1.486 0l-9 10A1 1 0 0 0 3 14zm5.653-2.359a2.224 2.224 0 0 1 3.125 0l.224.22.223-.22a2.225 2.225 0 0 1 3.126 0 2.13 2.13 0 0 1 0 3.07L12.002 18l-3.349-3.289a2.13 2.13 0 0 1 0-3.07z"},child:[]}]})(e)}function lE(e){return le({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4zm-2 4v-1c0-.276.244-.5.545-.5h10.91c.3 0 .545.224.545.5v1c0 .276-.244.5-.546.5H2.545C2.245 5 2 4.776 2 4.5m6 3.493c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132"},child:[]}]})(e)}const cE=Kp`
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
`,uE=Di`
  0% { border-radius: 0 60px 20px 0; }
  25% { border-radius: 20px 0 60px 20px; }
  50% { border-radius: 60px 20px 0 60px; }
  75% { border-radius: 60px 60px 20px 0; }
  100% { border-radius: 0 20px 60px 0; }
`,dE=P(U.div)`
  position: relative;
  width: 100%;
  height: 80vh;
  display: flex;
  align-items: flex-end;
  background-size: cover;
  background-position: center;
  animation: ${uE} 5s ease-in-out infinite;

  @media (max-width: 768px){
    animation: none;
    border: 1px solid red;
    border-radius: 0;
    border-image: fill 0 linear-gradient(#0001, #00000080);
  }
`,pE=P(U.div)`
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: white;

  @media (max-width: 768px){
    border: 1px solid red;
  }
`,fE=P(U.h2)`
  font-size: 24px;
  font-weight: bold;

  @media (max-width: 768px){
    border: 1px solid red;
    font-family: var(--font--comfortaa);
  }
`,hE=P(U.p)`
  font-size: 16px;
  margin: 5px 0;

  @media (max-width: 768px){
    border: 1px solid red;
    font-size: 12px;
    width: 80%;
    line-height: 100%;
    font-family: var(--font--comfortaa);
  }
`,mE=P(U.div)`
  display: flex;
  gap: 8px;
  margin-top: 10px;
  flex-wrap: wrap;

  @media (max-width: 768px){
    border: 1px solid red;
    gap: 6px;
  }

  span {
      display: flex;
      align-items: center;
      gap: 5px;
      background: rgba(0, 0, 0, 0.5);
      padding: 5px 10px;
      border-radius: 12px;
      font-size: 12px;

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
      font-size: 16px;

      @media (max-width: 768px){
        font-size: 12px;
      }
  }
`,gE=P.div`
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
`,vE=({content:e=[],spaceBetween:t=10,autoplayDelay:n=3e3,showPagination:r=!0,showNavigation:i=!0})=>{const{scrollY:o}=Vx(),a=vr(o,[0,300],[0,-30]),s=vr(o,[0,300],[0,-20]),l=vr(o,[0,300],[0,-10]);return c.jsxs(gE,{children:[c.jsx(cE,{}),c.jsx(vt,{modules:[Pn,En,kn],navigation:i,pagination:!1,spaceBetween:t,loop:!0,slidesPerView:1,autoplay:{delay:n,disableOnInteraction:!1},breakpoints:{640:{slidesPerView:1},1024:{slidesPerView:2}},children:e.map((u,d)=>c.jsx(xt,{children:c.jsx(dE,{style:{backgroundImage:`url(${u.backgroundImage})`},children:c.jsxs(pE,{children:[c.jsx(fE,{style:{y:a},children:u.title}),c.jsx(hE,{style:{y:s},children:u.subtitle}),c.jsx(mE,{style:{y:l},children:u.features.map((p,f)=>c.jsxs("span",{children:[p.icon," ",p.text]},f))}),c.jsx(zl,{text:"Conferir todas as acomodações"})]})})},d))})]})},xE=[{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1729513693/9_hyv1zq.jpg",alt:"Imagem 1",loading:"lazy"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730121054/3_d2soci.png",alt:"Imagem 1",loading:"lazy"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730121054/5_duax05.png",alt:"Imagem 1",loading:"lazy"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730121054/4_ouknmz.png",alt:"Imagem 1",loading:"lazy"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730121054/2_bwzqa4.png",alt:"Imagem 1",loading:"lazy"}],yE=[{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730121191/mar1_lhebdi.webp",alt:"Imagem 1",loading:"lazy"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730121191/mar4_hexj9u.webp",alt:"Imagem 3",loading:"lazy"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730121191/mar5_k8fzcv.webp",alt:"Imagem 1",loading:"lazy"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730121191/mar3_sxa0i2.webp",alt:"Imagem 2",loading:"lazy"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730121191/mar2_d3y4tv.webp",alt:"Imagem 3",loading:"lazy"}],wE=[{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730121054/2_bwzqa4.png",label:"Le Ange Serra"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730121054/3_d2soci.png",label:"Le Ange Serra"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730126866/aconchego_y0rxho.jpg",label:"Le Ange Serra"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730126873/sossego_dutvww.png",label:"Le Ange Serra"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730130097/IMG_0885_pou52r.jpg",label:"Le Ange Mar"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730130097/IMG_0478_eymtmg.jpg",label:"Le Ange Mar"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730130098/IMG_0041_zv7w3d.jpg",label:"Le Ange Mar"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730130886/IMG_6320_jovvjl.webp",label:"Le Ange Serra"}],bE=[{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730130887/IMG_7854_zetqsr.webp",label:"Le Ange Mar"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730130887/fotoMar1_wotf3h.webp",label:"Le Ange Mar"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730130105/fotoSerra3_zqwbav.jpg",label:"Le Ange Serra"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730130104/fotoSerra4_zgia0i.jpg",label:"Le Ange Serra"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730130106/fotoMar6_lfgi4u.jpg",label:"Le Ange Mar"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730130111/fotoSerra1_pa28ry.jpg",label:"Le Ange Serra"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730130112/fotoMar3_ywfvig.jpg",label:"Le Ange Serra"}],Tg=P.section`
    width: 100%;
    height: 60vh;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 0 5%;

    @media (max-width: 768px){
        flex-direction: column;
        position: relative;
        z-index: -1;
        border: 1px solid red;
        height: auto;

        .slider{
            width: 100%;    
        }
    }


`,SE=P.div`
    width: 100%;
    height: 160vh;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    justify-content: center;
    padding: 0;

    @media (max-width: 768px){
        border: 1px solid red;
        height: auto;
        padding: 10% 0;
    }
`,jE=P.aside`
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
            border: 1px solid red;
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
            border: 1px solid red;
        }
    }
`,CE=[{title:"Suíte Superior 1",subtitle:"Pousada Le Ange Serra | Miguel Pereira - RJ",backgroundImage:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730124671/suiteSerra1_u0olej.jpg",features:[{icon:c.jsx(Le,{}),text:"52m²"},{icon:c.jsx(Le,{}),text:"Ar condicionado"},{icon:c.jsx(un,{}),text:"Cama king size"},{icon:c.jsx(Qi,{}),text:"Banheira"},{icon:c.jsx(X,{}),text:"Smart TV com canais a cabo"},{icon:c.jsx(X,{}),text:"Lareira"},{icon:c.jsx(X,{}),text:"Frigobar"},{icon:c.jsx(X,{}),text:"Chaleira elétrica"},{icon:c.jsx(X,{}),text:"Chuveiro"},{icon:c.jsx(X,{}),text:"Aquecedor de Toalhas"},{icon:c.jsx(X,{}),text:"Cuba única"},{icon:c.jsx(X,{}),text:"Varanda privada"}]},{title:"Suíte Master 6",subtitle:"Pousada Le Ange Serra | Miguel Pereira - RJ",backgroundImage:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730124671/suiteSerra2_lhgcj2.jpg",features:[{icon:c.jsx(Le,{}),text:"77m²"},{icon:c.jsx(Le,{}),text:"Ar condicionado"},{icon:c.jsx(Le,{}),text:"Chaise lounge"},{icon:c.jsx(Le,{}),text:"Bay Window"},{icon:c.jsx(un,{}),text:"Cama king size"},{icon:c.jsx(Qi,{}),text:"Banheira"},{icon:c.jsx(X,{}),text:"Smart TV com canais a cabo"},{icon:c.jsx(X,{}),text:"Lareira"},{icon:c.jsx(X,{}),text:"Frigobar"},{icon:c.jsx(X,{}),text:"Chaleira elétrica"},{icon:c.jsx(X,{}),text:"Chuveiro"},{icon:c.jsx(X,{}),text:"Aquecedor de Toalhas"},{icon:c.jsx(X,{}),text:"Cuba para casal (dupla)"},{icon:c.jsx(X,{}),text:"Ampla varanda privativa"}]},{title:"Nome da suite",subtitle:"Pousada Le Ange Mar | Búzios - RJ",backgroundImage:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730125876/suiteMar2_yb1nqi.jpg",features:[{icon:c.jsx(Le,{}),text:"77m²"},{icon:c.jsx(Le,{}),text:"Ar condicionado"},{icon:c.jsx(Le,{}),text:"Chaise lounge"},{icon:c.jsx(Le,{}),text:"Recamier e poltrona de leitura"},{icon:c.jsx(un,{}),text:"Cama king size"},{icon:c.jsx(Qi,{}),text:"Banheira"},{icon:c.jsx(X,{}),text:"Smart TV com canais a cabo"},{icon:c.jsx(X,{}),text:"Lareira"},{icon:c.jsx(X,{}),text:"Frigobar"},{icon:c.jsx(X,{}),text:"Chaleira elétrica"},{icon:c.jsx(X,{}),text:"Chuveiro"},{icon:c.jsx(X,{}),text:"Aquecedor de Toalhas"},{icon:c.jsx(X,{}),text:"Cuba para casal (dupla)"},{icon:c.jsx(X,{}),text:"Ampla varanda privativa"}]},{title:"Nome da suite",subtitle:"Pousada Le Ange Mar | Búzios - RJ",backgroundImage:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730125876/suiteMar1_pmcoje.jpg",features:[{icon:c.jsx(Le,{}),text:"77m²"},{icon:c.jsx(Le,{}),text:"Ar condicionado"},{icon:c.jsx(Le,{}),text:"Chaise lounge"},{icon:c.jsx(Le,{}),text:"Recamier e poltrona de leitura"},{icon:c.jsx(un,{}),text:"Cama king size"},{icon:c.jsx(Qi,{}),text:"Banheira"},{icon:c.jsx(X,{}),text:"Smart TV com canais a cabo"},{icon:c.jsx(X,{}),text:"Lareira"},{icon:c.jsx(X,{}),text:"Frigobar"},{icon:c.jsx(X,{}),text:"Chaleira elétrica"},{icon:c.jsx(X,{}),text:"Chuveiro"},{icon:c.jsx(X,{}),text:"Aquecedor de Toalhas"},{icon:c.jsx(X,{}),text:"Cuba para casal (dupla)"},{icon:c.jsx(X,{}),text:"Ampla varanda privativa"}]},{title:"Suíte Master 10",subtitle:"Pousada Le Ange Serra | Miguel Pereira - RJ",backgroundImage:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730125194/suiteSerra3_ayqtcj.jpg",features:[{icon:c.jsx(Le,{}),text:"77m²"},{icon:c.jsx(Le,{}),text:"Ar condicionado"},{icon:c.jsx(Le,{}),text:"Chaise lounge"},{icon:c.jsx(Le,{}),text:"Recamier e poltrona de leitura"},{icon:c.jsx(un,{}),text:"Cama king size"},{icon:c.jsx(Qi,{}),text:"Banheira"},{icon:c.jsx(X,{}),text:"Smart TV com canais a cabo"},{icon:c.jsx(X,{}),text:"Lareira"},{icon:c.jsx(X,{}),text:"Frigobar"},{icon:c.jsx(X,{}),text:"Chaleira elétrica"},{icon:c.jsx(X,{}),text:"Chuveiro"},{icon:c.jsx(X,{}),text:"Aquecedor de Toalhas"},{icon:c.jsx(X,{}),text:"Cuba para casal (dupla)"},{icon:c.jsx(X,{}),text:"Ampla varanda privativa"}]}],TE=P.section`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
    padding: 0 5%;

    @media (max-width: 768px){
        border: 1px solid red;
        height: auto;
        gap: 25px;
    }
`,PE=[{backgroundImage:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730126866/aconchego_y0rxho.jpg",title:"Aconchego",description:"Nossas áreas internas, contam com três salas superequipadas e aconchegantes, sendo elas: sala de TV, sala de estar, sala de jogos com mesa de bilhar, carteado, jogos de tabuleiro e biblioteca.",buttonText:"Viver minha experiência agora"},{backgroundImage:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730126391/cozinha_qvars1.jpg",title:"Cozinha",description:"Na nossa diária, todas as refeições estão incluídas: café da manhã, almoço, chá da tarde e jantar! Todas preparadas com muito tempero, amor e afeto.",buttonText:"Viver minha experiência agora"},{backgroundImage:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730126866/suites_gmhdsf.jpg",title:"Suites",description:"Nossas suítes são incríveis e cada uma possui o seu charme. Todas contam com banheira com vista para a natureza, lareira para aquecer no friozinho, camas king size, ar condicionado, frigobar e varanda.",buttonText:"Viver minha experiência agora"},{backgroundImage:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730126865/conforto_oebwyu.webp",title:"Relaxar",description:"Relaxe em nosso SPA com uma vista de frente para mata! Você pode escolher contratar nossos serviços de massoterapia, manicure, pedicure.",buttonText:"Viver minha experiência agora"},{backgroundImage:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730126869/refrescar_id0f4o.png",title:"Refrescar",description:"Nossa maravilhosa piscina de borda infinita possui aquecimento solar e tratamento especial por ozônio, com níveis baixíssimos de cloro, além de contar com o ofurô aquecido, perfeito para aproveitar no final de tarde em que temos um pôr do sol incrível para acompanhar. Ah! E claro que seu Dog pode nadar junto com você!",buttonText:"Viver minha experiência agora"},{backgroundImage:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730126869/aventura_waih8i.png",title:"Aventura",description:"Na propriedade, temos trilhas dentro da natureza, beirando o rio! Em diversos pontos você pode escolher dar uma paradinha para tomar um banho e renovar as energias!",buttonText:"Viver minha experiência agora"},{backgroundImage:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730126866/diversao_jpykdy.jpg",title:"Divercão",description:"Espaço de sobra para seu PET se divertir! Espaço agility na beira do lago, com muita grama, para seu pet, correr, pular e nadar!",buttonText:"Viver minha experiência agora"},{backgroundImage:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730126865/adega_n0cszf.jpg",title:"Adega",description:"Para completar ainda mais sua experiência, contamos com uma adega subterrânea para climatização perfeita dos vinhos, bar com carta variada de drinks, cervejas e destilados.",buttonText:"Viver minha experiência agora"},{backgroundImage:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730126873/sossego_dutvww.png",title:"Sossego",description:"A área da sauna fica localizada ao lado da mata, com barulho do rio que passa e conta com um HotTub abastecido por água natural e aquecido à lenha, o combo completo para você relaxar.",buttonText:"Viver minha experiência agora"},{backgroundImage:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730126872/petfriendly_xxpntj.png",title:"Pet Friendly",description:"Não temos restrições quanto ao porte ou raça do seu pet, também não cobramos taxas adicionais para a vinda deles. Seu pet tem liberdade total para acessar todas as nossas comodidades!",buttonText:"Viver minha experiência agora"}],EE=P.div`
    height: 110vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
    position: relative;

    @media (max-width: 768px){
        border: 1px solid red;
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

`,_a=P.h1`
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    font-family: var(--font--comfortaa);

    @media (max-width: 768px){
        border: 1px solid red;
        display: inline-block;
        font-size: 1.3rem;
        line-height: 110%;
        width: 95%;
        margin-left: 2.5%;
    }

`,Oa=P.p`
    width: 100%;
    text-align: center;
    font-family: var(--font--avenir);
    opacity: 0.7;

    @media (max-width: 768px){
        border: 1px solid red;
        font-size: 0.9rem;
        margin-top: 5px;
    }
`,kE=[{image:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730131262/frutosdomar_xqfm5b.jpg",title:"Frutos do mar",dateRange:"20/09/2024 até 22/09/2024 (2 diárias)",features:[{icon:c.jsx(Nr,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(Dr,{}),text:"Música ao vivo"},{icon:c.jsx(j,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"354,20",discount:25},{image:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730131254/buteco_ck7tmg.jpg",title:"Noite do Boteco",dateRange:"20/09/2024 até 22/09/2024 (2 diárias)",features:[{icon:c.jsx(Nr,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(Dr,{}),text:"Música ao vivo"},{icon:c.jsx(j,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"354,20",discount:25},{image:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730126391/cozinha_qvars1.jpg",title:"Noite das pizzas",dateRange:"20/09/2024 até 22/09/2024 (2 diárias)",features:[{icon:c.jsx(Nr,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(Dr,{}),text:"Música ao vivo"},{icon:c.jsx(j,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"354,20",discount:25},{image:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730131253/arabe_orkglt.png",title:"Noite Árabe",dateRange:"20/09/2024 até 22/09/2024 (2 diárias)",features:[{icon:c.jsx(Nr,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(Dr,{}),text:"Música ao vivo"},{icon:c.jsx(j,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"354,20",discount:25},{image:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730131254/massas_geg7x7.jpg",title:"Noite de Massas",dateRange:"20/09/2024 até 22/09/2024 (2 diárias)",features:[{icon:c.jsx(Nr,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(Dr,{}),text:"Música ao vivo"},{icon:c.jsx(j,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"354,20",discount:25},{image:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730131256/hamburguer_jbi1rv.jpg",title:"Noite de Hámburguer",dateRange:"20/09/2024 até 22/09/2024 (2 diárias)",features:[{icon:c.jsx(Nr,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(Dr,{}),text:"Música ao vivo"},{icon:c.jsx(j,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"354,20",discount:25}],zE=P.section`
    height: 80vh;
    margin-bottom: 10vh;
    margin-top: 2.5vh;

    @media (max-width: 768px){
        height: auto;
        border: 1px solid red;
        margin-bottom: 5vh;
        margin-top: 5vh;
    }
    
`,AE=P.section`
    width: 100%;
    height: 80vh;
    padding: 0 5%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px){
        border: 1px solid red;
        height: auto;
        padding: 5% 2.5%;
    }
`,Pg=P.b`
    color: var(--color--green);
`,Ic=P.b`
    color: var(--color--blue);
`,ME=()=>c.jsxs(c.Fragment,{children:[c.jsx(Cn,{children:c.jsx("title",{children:"Início - Pousada Le Ange"})}),c.jsx(z7,{}),c.jsxs(SE,{containerAnimation:{opacity:0,scale:.8},titleAnimation:{opacity:0,y:-50},textAnimation:{opacity:0,x:50},buttonAnimation:{opacity:0,scale:.5},animationDuration:.7,children:[c.jsxs(jE,{children:[c.jsxs("h1",{children:["Conheça o ",c.jsx(Ic,{children:"melhor de cada cantinho nosso"})]}),c.jsx("p",{children:"Pousada mais Pet Friendly"})]}),c.jsxs(Tg,{children:[c.jsx(Xs,{content:xE,spaceBetween:20,slidesPerView:1,height:"60vh",contentType:"image",showPagination:!1}),c.jsx(jg,{title:"Pousada Le Ange Serra",text:"Aqui na LeAnge, costumamos dizer que a hospedagem é muito mais do que um final de semana para relaxar. É uma EXPERIÊNCIA ÚNICA ao lado do seu PET, para que você colecione os melhores momentos ao lado dele!",borderColor:"var(--color--green)",borderRadius:"30px"})]}),c.jsxs(Tg,{children:[c.jsx(jg,{title:"Pousada Le Ange Mar",text:"Situada no coração do Arpoador da Praia Rasa, na Le Ange Mar, oferecemos uma experiência memorável, onde a praia está a poucos passos da propriedade e o seu pet é calorosamente recebido para momentos especiais.",borderColor:"var(--color--blue)",borderRadius:"30px"}),c.jsx(Xs,{content:yE,spaceBetween:20,slidesPerView:1,width:"60%",height:"60vh",contentType:"image",showPagination:!1})]})]}),c.jsxs(TE,{children:[c.jsxs("div",{children:[c.jsxs(_a,{children:["Nossos quartos ",c.jsx(Pg,{children:"mais buscados"})," ",c.jsx(XP,{})," "]}),c.jsx(Oa,{children:"Já consegue se imaginar dormindo?"})]}),c.jsx(vE,{content:CE})]}),c.jsxs(EE,{children:[c.jsxs("div",{children:[c.jsxs(_a,{children:["Estrutura que te ",c.jsx(Ic,{children:"convida"})," ",c.jsx(sE,{})," "]}),c.jsx(Oa,{children:"Venha ter essa experiência"})]}),c.jsx(Jp,{content:PE,spaceBetween:20,width:"100%",height:"70vh",showPagination:!1,showNavigation:!0})]}),c.jsxs("div",{children:[c.jsxs(_a,{children:[" ",c.jsx(Pg,{children:"Sinta-se"})," mais próximo da gente ",c.jsx(lE,{})," "]}),c.jsx(Oa,{children:"Alguns dos nossos momentos"})]}),c.jsxs(zE,{children:[c.jsx(Cg,{images:wE}),c.jsx(Cg,{images:bE,reverse:!0})]}),c.jsxs("div",{children:[c.jsxs(_a,{children:["Qual deles você ",c.jsx(Ic,{children:"mais gostou?"})," ",c.jsx(KP,{})," "]}),c.jsx(Oa,{children:"Estamos te esperando!"})]}),c.jsx(AE,{children:c.jsx(HP,{events:kE})}),c.jsx(sa,{})]}),LE=P.div`
    height: 15vh;
`,_E=P.section`
    width: 100%;
    height: 85vh;
    padding: 0 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    & > div:nth-child(1){
        width: 45%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 50px;
        align-items: flex-start;

        & > h1{
            font-size: 3.5rem;
            width: 100%;
            line-height: 120%;
            font-family: var(--font--comfortaa);
            font-weight: 200;

            & > b{
                font-weight: 400;
            }

            & > b > a{
                text-decoration: none;
                transition: all .2 ease-in-out;
            }

            & > b > a:hover{
                opacity: 0.8;
            }

            & > b:nth-child(1) > a{
                color: var(--color--green);
            }

            & > b:nth-child(n + 2) > a{
                color: var(--color--blue);
            }
        }

        & > p{
            font-family: var(--font--avenir);
            font-size: 1.2rem;
            color: var(--color--black);
            width: 70%;
            line-height: 100%;
        }
    }

    & > div:nth-child(2){
        width: 55%;
        height: 90%;

        & > img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
            border-radius: 100px 20px 50px 20px;
        }
    }
`,Eg=P.section`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`,OE=P.section`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 0 5%;
    align-items: center;
    justify-content: center;

    & > div:nth-child(1){
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        & > h1 {
            font-family: var(--font--comfortaa);
            font-size: 2rem;
            color: var(--color--black);
            font-weight: 400;
        }
        
    }

    & > div:nth-child(2){
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 80vh;
        gap: 50px;

        & > div{
            width: 50%;
            height: 100%;
            padding: 50px;
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            flex-direction: column;

            & > span{
                width: 100%;
                font-family: var(--font--comfortaa);
                font-size: 1.5em;
                font-weight: 600;
                color: var(--color--white);
            }

            & > div{
                display: flex;
                align-items: flex-start;
                justify-items: center;
                flex-direction: column;
                gap: 30px;

                & > p{
                    color: var(--color--white);
                    font-family: var(--font--avenir);
                    line-height: 100%;
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
`,kg=[{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730219568/5_ixs7te.jpg",alt:"Imagem 1"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730219564/1_ocvsg5.jpg",alt:"Imagem 1"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730219563/8_bo21xo.jpg",alt:"Imagem 1"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730219563/3_mytnsf.jpg",alt:"Imagem 1"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730219562/6_ju1e1x.jpg",alt:"Imagem 1"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730219563/2_ydykif.jpg",alt:"Imagem 1"}],IE=P.section`
    width: 100%;
    height: 100vh;
    padding: 0 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;

    & > div{
        width: 50%;
        height: 80%;

        & > img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 40px 0 40px 0;
        }

        & > div {
            width: 100%;
            height: 25%;
            display: flex;
            align-items: center;
            justify-content: space-between;


            & > img {
                width: 32%;
                height: 100%;
                object-fit: cover;
                border-radius: 30px 0 30px 0;
            }
        }
    }

    & > div:nth-child(2){
        padding: 15px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;

        & > h1{
            font-size: 2.2rem;
            font-family: var(--font--comfortaa);
        }

        & > p{
            font-size: 1.2rem;
            font-family: var(--font--avenir);
            width: 70%;
            line-height: 100%;
        }

        & > ol{
            margin-left: 30px;
            list-style-image: url('/leange/public/icon/correto.png');

            & > li{
                font-family: var(--font--avenir);
                color: var(--color--black);
                font-size: 1rem;
            }
        }
        
    }
`,RE=P.section`
    width: 100%;
    height: 100vh;
    padding: 0 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;

    & > div{
        width: 50%;
        height: 80%;

        & > img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 40px 0 40px 0;
        }

        & > div {
            width: 100%;
            height: 25%;
            display: flex;
            align-items: center;
            justify-content: space-between;


            & > img {
                width: 32%;
                height: 100%;
                object-fit: cover;
                border-radius: 30px 0 30px 0;
            }
        }
    }

    & > div:nth-child(1){
        padding: 15px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;

        & > h1{
            font-size: 2.2rem;
            font-family: var(--font--comfortaa);
        }

        & > p{
            font-size: 1.2rem;
            font-family: var(--font--avenir);
            width: 70%;
            line-height: 100%;
        }

        & > ol{
            margin-left: 30px;
            list-style-image: url('/leange/public/icon/correto.png');

            & > li{
                font-family: var(--font--avenir);
                color: var(--color--black);
                font-size: 1rem;
            }
        }
        
    }
`,VE=()=>c.jsxs(c.Fragment,{children:[c.jsx(Cn,{children:c.jsx("title",{children:"Eventos - Pousada Le Ange"})}),c.jsx(LE,{}),c.jsxs(_E,{children:[c.jsxs("div",{children:[c.jsxs("h1",{children:["Do alto da ",c.jsx("b",{children:c.jsx("a",{href:"#",children:"Serra"})}),",",c.jsx("br",{})," às ondas do ",c.jsx("b",{children:c.jsx("a",{href:"#",children:"Mar"})})]}),c.jsx("p",{children:"Venha celebrar na LeAnge, onde o amor pelos pets encontra o cenário perfeito para os seus eventos."}),c.jsx(Vn,{text:"Fazer meu evento"})]}),c.jsx("div",{children:c.jsx("img",{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730219093/home_df8ub0.jpg",alt:"foto da home da página de eventos"})})]}),c.jsx(Eg,{children:c.jsx(Xs,{content:kg,spaceBetween:20,slidesPerView:1,width:"100%",height:"80vh",contentType:"image",showPagination:!0})}),c.jsxs(OE,{children:[c.jsx("div",{children:c.jsx("h1",{children:"Sobre nós"})}),c.jsxs("div",{children:[c.jsxs("div",{children:[c.jsx("span",{children:"Le Ange Serra - Miguel Pereira/RJ"}),c.jsxs("div",{children:[c.jsx("p",{children:"Fundada em 2018, a Pousada LeAnge nasceu da paixão dos seus fundadores pelo amor aos pets, bem-estar e hospitalidade. Localizada em Miguel Pereira, a LeAnge Serra proporciona uma experiência única na região serrana do Rio de Janeiro, sendo um verdadeiro refúgio entre as belezas naturais da Mata Atlântica."}),c.jsx(Vn,{text:"Fazer reserva"})]})]}),c.jsxs("div",{children:[c.jsx("span",{children:"Le Ange Serra - Miguel Pereira/RJ"}),c.jsxs("div",{children:[c.jsx("p",{children:"Fundada em 2018, a Pousada LeAnge nasceu da paixão dos seus fundadores pelo amor aos pets, bem-estar e hospitalidade. Localizada em Miguel Pereira, a LeAnge Serra proporciona uma experiência única na região serrana do Rio de Janeiro, sendo um verdadeiro refúgio entre as belezas naturais da Mata Atlântica."}),c.jsx(Vn,{text:"Fazer reserva"})]})]})]})]}),c.jsxs(IE,{children:[c.jsx("div",{children:c.jsx("img",{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730219562/11_gzr6ei.jpg",alt:"foto do casamento"})}),c.jsxs("div",{children:[c.jsx("h1",{children:"Pré-Wedding"}),c.jsx("p",{children:"Coração palpitando, emoções à flor da pele e a certeza de dias inesquecíveis."}),c.jsxs("ol",{children:[c.jsx("li",{children:"Coquetel na Chegada (Sexta-feira)"}),c.jsx("li",{children:"Noite Especial no Sábado"}),c.jsx("li",{children:"Ensaio Fotográfico dos Noivos"}),c.jsx("li",{children:"Decoração Romântica na Suíte dos Noivos"}),c.jsx("li",{children:"Massagem Relaxante para os noivos na LeAnge Serra"}),c.jsx("li",{children:"Passeio de Bugre para os noivos na LeAnge Mar"}),c.jsx("li",{children:"Piquenique para os Noivos"}),c.jsx("li",{children:"Late Checkout no Domingo"})]}),c.jsx(Vn,{text:"Fazer reserva"}),c.jsxs("div",{children:[c.jsx("img",{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730219562/7_sgewp5.jpg",alt:"foto do casamento"}),c.jsx("img",{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730219562/10_deybdj.jpg",alt:"foto do casamento"}),c.jsx("img",{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730219562/9_eavaty.jpg",alt:"foto do casamento"})]})]})]}),c.jsxs(RE,{children:[c.jsxs("div",{children:[c.jsx("h1",{children:"Aniversário"}),c.jsx("p",{children:"Comemore os momentos doces da vida."}),c.jsxs("ol",{children:[c.jsx("li",{children:"Coquetel na Chegada (Sexta-feira)"}),c.jsx("li",{children:"Noite Especial no Sábado"}),c.jsx("li",{children:"Massagem Relaxante para o aniversariante na LeAnge Serra"}),c.jsx("li",{children:"Passeio de Bugre para o aniversariante na LeAnge Mar"}),c.jsx("li",{children:"Piquenique"}),c.jsx("li",{children:"Late Checkout no Domingo"})]}),c.jsx(Vn,{text:"Fazer reserva"}),c.jsxs("div",{children:[c.jsx("img",{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730202199/home_cmvjd9.png",alt:"foto do casamento"}),c.jsx("img",{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730202199/home_cmvjd9.png",alt:"foto do casamento"}),c.jsx("img",{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730202199/home_cmvjd9.png",alt:"foto do casamento"})]})]}),c.jsx("div",{children:c.jsx("img",{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730202199/home_cmvjd9.png",alt:"foto do casamento"})})]}),c.jsx(Eg,{children:c.jsx(Xs,{content:kg,spaceBetween:20,slidesPerView:1,width:"90%",height:"100vh",contentType:"image",showPagination:!0})}),c.jsx(sa,{})]}),Vy=P.button`
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
`,DE=P(QP)`
  color: ${e=>e.iconColor||"currentColor"};
  height: 20px;
  width: 20px;
  transition: color 0.3s ease;

  ${Vy}:hover & {
    color: ${e=>e.hoverIconColor||e.iconColor||"currentColor"};
  }
`,NE=P.span`
  margin: 10px;
`,nn=({text:e="Fazer reserva agora!",textColor:t,backgroundColor:n,borderColor:r,iconColor:i,hoverIconColor:o,hoverBackgroundColor:a,hoverBorderColor:s,hoverColor:l,onClick:u})=>c.jsxs(Vy,{onClick:u,textColor:t,backgroundColor:n,borderColor:r,hoverBackgroundColor:a,hoverBorderColor:s,hoverColor:l,children:[c.jsx(DE,{iconColor:i,hoverIconColor:o}),c.jsx(NE,{children:e})]}),BE=P.section`
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
        padding: 0 0 0 10%;

        @media (max-width: 768px){
            width: 100%;
            gap: 50px;
            padding: 0 5%;
        }

        & > h1{
            font-size: 3rem;
            font-family: var(--font--comfortaa);
            color: var(--color--blue);

            @media (max-width: 768px){
                font-size: 30px;
                text-align: center;
                width: 100%;
            }
        }

        & > h4 {
            font-family: var(--font--avenir);
            color: var(--color--black);
            font-weight: 100;
            margin-top: -30px;
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
            font-family: var(--font--avenir);

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
            filter: drop-shadow(5px 5px 2px rgba(0, 0, 0, 0.2));
            object-fit: contain;

            @media (max-width: 768px){
                filter: drop-shadow(5px 0px 2px rgba(0, 0, 0, 0.2));
            }
        }
    }
`,FE=P.div`
    height: 15vh;
`,$E=P.section`
    width: 100%;
    height: 80vh;
    margin-top: 10vh;
    padding: 0% 10%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 60px;

    @media (max-width: 768px){
        flex-direction: column;
        height: auto;
        gap: 30px;
        padding: 0 5%;
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
            border-radius: 20px;
            object-fit: cover;

            @media (max-width: 768px){
                width: 48%;
                height: 100%;
                border-radius: 10px;
            }
        }

        & > img:nth-child(2){
            width: 40%;
            height: 100%;
            border-radius: 20px;
            object-fit: cover;

            @media (max-width: 768px){
                width: 48%;
                height: 100%!important;
                object-fit: cover;
                border-radius: 10px;
    
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

            @media (max-width: 768px){
                width: 100%;
                font-size: 28px;
                text-align: center;
            }

        }

        & > h4 {
            font-family: var(--font--avenir);
            font-weight: 100;
            margin-top: -30px;
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
            font-family: var(--font--avenir);

            @media (max-width: 768px){
                width: 100%;
                text-align: justify;
            }
        }
    }
`,HE=P.section`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 10%;

    @media (max-width: 768px){
        height: auto;
        flex-direction: column-reverse;
        gap: 25px;
        margin-top: 35px;
        padding: 10% 5%;
        border-top: 2px dashed;
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

            @media (max-width: 768px){
    
                font-size: 28px;
                width: 100%;
                text-align: center;
                margin-bottom: 10px;
            }
        }

        & > p {
            width: 80%;
            font-family: var(--font--avenir);

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
        gap: 10px;
        display: flex;
        align-items: center;
        justify-content: center;

        @media (max-width: 768px){
            width: 100%;

            justify-content: space-between;
        }

       & > img{
        width: 45%;
        border-radius: 30px 0 30px 0; 
        height: 48%;
        object-fit: cover;

        @media (max-width: 768px){
            width: 48%;
            height: 20vh;
        }

       }

       & > img:nth-child(n +3){
        border-radius: 0 30px 0 30px;
       }

    }
`,UE=P.section`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 0 10%;

    @media (max-width: 768px){
        height: auto;
        flex-direction: column;
        gap: 25px;
        margin-top: 50px;
        padding: 10% 5%;
        border-top: 2px dashed;
    }

    & > div:nth-child(1){
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 40%;
        
        @media (max-width: 768px){
            width: 100%;
            flex-direction: column;
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
            font-size: 3rem;
            font-family: var(--font--comfortaa);
            color: var(--color--green);
                
                @media (max-width: 768px){
        
                    font-size: 28px;
                    margin-bottom: 10px;
                    width: 100%;
                    text-align: center;
                }
            }

            & > p {
            width: 80%;
            font-family: var(--font--avenir);

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
                margin-top: 25px;
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
                border-radius: 30px 0 30px 0;
            }

            & > img:nth-child(2){
                position: relative;
                top: 20px;
                right: 10px;
                border-radius: 0 30px 0 30px;
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
                margin-top: 40px;
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
                border-radius: 30px 0 30px 0;
            }

            & > img:nth-child(2){
                position: relative;
                top: 20px;
                right: 10px;
                border-radius: 0 30px 0 30px;
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
            font-size: 3rem;
            font-family: var(--font--comfortaa);
            color: var(--color--blue);
                
                @media (max-width: 768px){
        
                    margin-top: 50px;
                    font-size: 28px;
                    margin-bottom: 10px;
                    width: 100%;
                    text-align: center;
                }
            }

            & > p {
            width: 80%;
            font-family: var(--font--avenir);

                @media (max-width: 768px){
        
                    width: 100%;
                    text-align: justify;
                }
            }
        }

    }
`,WE=P.section`

    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 10%;

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

                @media (max-width: 768px){
        
                    margin-top: 50px;
                    margin-bottom: 15px;
                    width: 100%;
                    text-align: center;
                    font-size: 24px;
                }
            }

            & > p {
            width: 80%;
            font-family: var(--font--avenir);

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

                @media (max-width: 768px){
        
                    margin-top: 25px;
                    margin-bottom: 15px;
                    width: 100%;
                    text-align: center;
                    font-size: 24px;
                }
            }

            & > p {
            width: 80%;
            font-family: var(--font--avenir);

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
            border-radius: 80px 0 80px 0;
        }
    }
`,GE=P.section`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url('https://res.cloudinary.com/dupg7clzc/image/upload/v1730121054/1_fhinom.png');
    background-position: center;
    background-size: cover;
    background-attachment: fixed;

    @media (max-width: 768px){
        flex-direction: column;
    }

    & > div {
        height: 100%;
        width: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 25px;

        @media (max-width: 768px){
            width: 100%;
            height: auto;
        }

        & > h1{
            font-size: 2.5em;
            font-family: var(--font--comfortaa);
            color: var(--color--white);

            @media (max-width: 768px){
                font-size: 24px;
                width: 100%;
                text-align: center;
            }
        }

        & > h1 b{
            color: var(--color--green);
        }

        & > p {
            width: 80%;
            font-family: var(--font--avenir);
            color: var(--color--white);
            text-align: justify;

            @media (max-width: 768px){
                font-size: 14px;
                text-align: justify;
            }
        }
    }
`,qE=P.div`
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

        @media (max-width: 768px){
            width: 90%;
            margin-left: 5%;
            text-align: center;
            font-size: 24px;
        }
    }
`,YE=()=>c.jsxs(c.Fragment,{children:[c.jsx(Cn,{children:c.jsx("title",{children:"Sobre Nós - Pousada Le Ange"})}),c.jsx(FE,{}),c.jsxs(BE,{children:[c.jsxs("div",{children:[c.jsx("h1",{children:"Pousada Le Ange"}),c.jsx("h4",{children:"A pousada mais Pet Friendly do Brasil"}),c.jsx("p",{children:"Um empreendimento familiar fundado em 2018, a Pousada LeAnge Serra surgiu da paixão dos fundadores pelo amor por quatro patas, bem-estar e hospitalidade, situando-se em Miguel Pereira, Rio de Janeiro. Com o sucesso da primeira unidade, expandimos para Búzios em 2023, criando a Pousada LeAnge Mar. A filosofia por trás das nossas pousadas é oferecer um refúgio acolhedor e luxuoso, em que cada detalhe é cuidadosamente pensado para proporcionar conforto e satisfação."})]}),c.jsx("div",{children:c.jsx("img",{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1729516968/cachorro_rlsw5a.png",alt:"foto do cachorro",loading:"lazy"})})]}),c.jsxs($E,{children:[c.jsxs("div",{children:[c.jsx("img",{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1729529831/7_w7mvfk.jpg",alt:"foto da le ande da serra",loading:"lazy"}),c.jsx("img",{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1729529820/7_s8lgut.jpg",alt:"foto da le ande da serra",loading:"lazy"})]}),c.jsxs("div",{children:[c.jsx("h1",{children:"Duas unidades,"}),c.jsx("h4",{children:"dois cenários incomparáveis"}),c.jsx("p",{children:"A Pousada LeAnge Serra oferece 10 suítes deslumbrantes em meio à natureza exuberante de Miguel Pereira. Já a Pousada LeAnge Mar, com suas 8 suítes exclusivas, proporciona uma experiência costeira em Búzios, com vista direta para o mar."})]})]}),c.jsxs(HE,{children:[c.jsxs("div",{children:[c.jsx("h1",{children:"Diferenciais"}),c.jsx("p",{children:"Somos Pet Lovers, aqui não temos limite de porte, quantidade ou raça. Nosso conceito permite que os pets frequentem o restaurente, a piscina e qualquer outro espaço. Nos tornando assim ÚNICOS com este tipo de experiência."})]}),c.jsxs("div",{children:[c.jsx("img",{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1729530455/6_ezddyi.jpg",loading:"lazy",alt:"foto do diferencial"}),c.jsx("img",{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1729530449/8_n7asdv.jpg",loading:"lazy",alt:"foto do diferencial"}),c.jsx("img",{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1729530446/5_lx3fxd.jpg",loading:"lazy",alt:"foto do diferencial"}),c.jsx("img",{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1729530444/1_nhk8wd.jpg",loading:"lazy",alt:"foto do diferencial"})]})]}),c.jsxs(UE,{children:[c.jsxs("div",{children:[c.jsxs("div",{children:[c.jsx("h1",{children:"Gastronomias"}),c.jsx("p",{children:"Oferecemos um serviço all inclusive que abrange todas as refeições, atendendo todas as restrições alimentares de nossos hóspedes. Nosso compromisso é proporcionar uma experiência gastronômica diversificada e de alta qualidade, utilizando produtos frescos e locais."})]}),c.jsxs("div",{children:[c.jsx("img",{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1729530841/pizza_apuref.jpg",loading:"lazy",alt:"foto de gastronomia"}),c.jsx("img",{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1729530957/sushi_g7sbq9.jpg",loading:"lazy",alt:"foto de gastronomia"})]})]}),c.jsxs("div",{children:[c.jsxs("div",{children:[c.jsx("img",{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1729531441/espaco_bvmt8g.jpg",loading:"lazy",alt:"foto de gastronomia"}),c.jsx("img",{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1729531444/espaco2_i3ieau.png",loading:"lazy",alt:"foto de gastronomia"})]}),c.jsxs("div",{children:[c.jsx("h1",{children:"Espaços compartilhados"}),c.jsx("p",{children:"Nossos espaços compartilhados incluem bibliotecas aconchegantes, sala de jogos e áreas de lazer diversificadas. Na Serra, temos piscinas, ofurô, hot tub, spa e acesso às cachoeiras, enquanto em Búzios, nossos hóspedes desfrutam de piscinas e ofurôs com vistas incríveis do mar aberto, além disso, estamos localizados próximo ao Mirante do Pai Vitório."})]})]})]}),c.jsxs(WE,{children:[c.jsxs("div",{children:[c.jsxs("div",{children:[c.jsx("h1",{children:"Suítes"}),c.jsx("p",{children:"Ambas as unidades dispõem de suítes luxuosas, equipadas com banheiras de imersão, camas king-size e roupas de cama de 400 fios; na Serra, cada suíte conta com uma lareira aconchegante, enquanto em Búzios, a vista para o mar é um espetáculo à parte, garantindo uma experiência de tranquilidade incomparável."})]}),c.jsxs("div",{children:[c.jsx("h1",{children:"Público de alto padrão"}),c.jsx("p",{children:"Nosso público é de classe A, buscando experiências de alto padrão e exclusividade. Para manter a tranquilidade e a exclusividade, a idade mínima para hospedagem é de 13 anos."})]})]}),c.jsx("div",{children:c.jsx("img",{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730130112/fotoMar3_ywfvig.jpg",alt:"foto da pousada"})})]}),c.jsx(GE,{children:c.jsxs("div",{children:[c.jsxs("h1",{children:["Compromisso com o ",c.jsx("b",{children:"Meio Ambiente"})]}),c.jsx("p",{children:"Estamos, profundamente, comprometidos com a sustentabilidade. Utilizamos produtos de produtores rurais locais, promovendo a economia regional e minimizando nosso impacto ambiental. Implementamos práticas ecológicas em todas as nossas operações, desde o uso de energia solar até a gestão eficiente de recursos."})]})}),c.jsxs(qE,{children:[c.jsx("h1",{children:"Venha viver essa experiência com a gente!"}),c.jsx(nn,{text:"Reservar agora!",textColor:"var(--color--white)",backgroundColor:"transparent",borderColor:"var(--color--white)",iconColor:"var(--color--white)",hoverBackgroundColor:"var(--color--white)",hoverBorderColor:"var(--color--white)",hoverColor:"var(--color--white)",hoverIconColor:"var(--color--white)",onClick:()=>alert("Reservado!")})]})]}),KE=P.div`
  display: flex;
  padding: 20px;
  align-items: center;
  border-radius: 20px;
  height: 80vh;
  gap: 50px;
  padding: 0 5%;
  flex-direction: ${({imagePosition:e})=>e==="right"?"row-reverse":"row"};

  @media (max-width: 768px){
    border: 1px solid var(--color--black);
    border-radius: 10px;
    height: auto;
    flex-direction: column;
    width: 95%;
    margin-left: 2.5%;
    padding: 20px;
  }
`,XE=P.div`
  flex: 1;
  height: 100%;

  @media (max-width: 768px){
    border: 1px solid red;
    width: 100%;
  }
`,QE=P.h2`
  font-size: 3.5em;
  line-height: 100%;
  margin-bottom: 0.5em;
  font-family: var(--font--comfortaa);
  color: ${({$colorDefined:e})=>e||"var(--color--green)"}; // Prefixo $ adicionado

  @media (max-width: 768px){
    border: 1px solid red;
    display: inline-block;
    font-size: 1.7rem;
  }
`,ZE=P.p`
  margin-bottom: 1.5em;
  font-size: 1.2rem;
  width: 80%;
  color: var(--color--black);
  font-family: var(--font--comfortaa);

  @media (max-width: 768px){
    width: 100%;
    font-size: 1rem;
    border: 1px solid red;
    height: 10vh;
  }
`,JE=P.div`
  flex: 2;
  height: 100%;

  @media (max-width: 768px){
    border: 1px solid red;
  }
`,e8=P.img`
  width: 100%;
  border-radius: 15px;
  height: 100%;
  object-fit: cover;
`,t8=P(vt)`
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
    bottom: 10px !important;
    top: 90% !important;

    @media (max-width: 768px){
      border: 1px solid red;
      left: 50%!important;
    }
  }

  .swiper-button-prev {
    left: 100px;
    margin-right: 5px; /* Espaço entre os botões */

    @media (max-width: 768px){
      left: 40px!important;
    }
  }

  .swiper-button-next {
    left: 150px; /* Coloca o botão "next" próximo ao botão "prev" */

    @media (max-width: 768px){
      left: 90px!important;
    }
  }
`,Dy=({slides:e,titleColor:t,buttonBgColor:n,imagePosition:r="left"})=>c.jsx(t8,{navigation:!0,autoplay:{delay:3e3,disableOnInteraction:!1},loop:!0,modules:[Pn,En,kn],className:"mySwiper",$bgColor:n,children:e.map((i,o)=>c.jsx(xt,{children:c.jsxs(KE,{imagePosition:r,children:[c.jsxs(XE,{children:[c.jsx(QE,{$colorDefined:t,children:i.title})," ",c.jsx(ZE,{children:i.description}),c.jsx(nn,{text:"Reservar agora!",textColor:"var(--color--black)",borderColor:"var(--color--black)",iconColor:"var(--color--black)",hoverBackgroundColor:"var(--color--black)",hoverBorderColor:"var(--color--black)",hoverColor:"var(--color--white)",hoverIconColor:"var(--color--white)",onClick:()=>alert("Reservado!")})]}),c.jsx(JE,{children:c.jsx(e8,{src:i.imageUrl,alt:i.title})})]})},o))}),n8=Di`
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
`,r8=P.section`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 5%;
    position: relative;

    @media (max-width: 768px){
        border: 1px solid red;
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
        height: 65%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        align-items: center;

        @media (max-width: 768px){
            border: 1px solid red;
            height: auto;
        }
    }

    & > main div {
        position: relative;
        width: 18%;
        height: 45%;
        margin: 10px 0;

        @media (max-width: 768px){
            border: 1px solid red;
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
        animation: ${n8} 5s ease-in-out infinite;
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
        background-color: rgba(255, 255, 255, 0.2);
        backdrop-filter: blur(10px);
        color: white;
        padding: 3px 7px;
        font-size: 0.6rem;
        border-radius: 5px 0 5px 0;
        transition: all 0.5s ease-in-out;
        font-family: var(--font--comfortaa);
        cursor: pointer;

        @media (max-width: 768px){
            border: 1px solid red;
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
`,i8=P.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 25%;

    @media (max-width: 768px){
        border: 1px solid red;
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
        font-size: 3rem;
        color: var(--color--black);
        font-family: var(--font--comfortaa);

        @media (max-width: 768px){
            font-size: 1.6rem;
            text-align: center;
            border: 1px solid red;
            margin-bottom: 10px;
        }
    }

    & > div p {
        width: 80%;
        font-family: var(--font--avenir);
        color: var(--color--black);
        line-height: 100%;
        font-size: 1rem;

        @media (max-width: 768px){
            width: 100%;
            border: 1px solid red;
            text-align: justify;
            margin-bottom: 15px;
        }
    }
`,o8=({images:e})=>{const[t,n]=T.useState(null);return c.jsxs(r8,{children:[c.jsxs(i8,{children:[c.jsxs("div",{children:[c.jsx("h1",{children:"Suítes"}),c.jsx("p",{children:"Nossas suítes são incríveis e cada uma possui o seu charme. Todas contam com banheira excepcional com vista deliciosa para a natureza, lareira para aquecer no friozinho, camas king size, ar condicionado, frigobar e varanda."})]}),c.jsx("div",{children:c.jsx(nn,{text:"Reservar agora!",textColor:"var(--color--black)",backgroundColor:"transparent",borderColor:"var(--color--black)",iconColor:"var(--color--black)",hoverBackgroundColor:"var(--color--black)",hoverBorderColor:"var(--color--white)",hoverColor:"var(--color--white)",hoverIconColor:"var(--color--white)",onClick:()=>alert("Reservado!")})})]}),c.jsx("main",{children:e.map((r,i)=>c.jsxs("div",{onMouseEnter:()=>n(i),onMouseLeave:()=>n(null),children:[c.jsx("img",{src:r.src,alt:`Imagem ${i+1}`}),c.jsxs("span",{onClick:()=>alert("Conhecendo suíte completa!"),children:[t===i?"Conhecer Suíte Completa":r.text,t===i&&c.jsx(Bp,{})]})]},i))})]})},a8=P.section`
    width: 100%;
    height: 80vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 5%;
    gap: 50px;

    @media (max-width: 768px){
        border: 1px solid red;
        flex-direction: column;
        height: auto;
        padding: 5% 2.5%;
    }
`,s8=P.div`
    width: 50%;
    height: 90%;
    display: flex;
    justify-content: center;
    overflow: hidden;

    @media (max-width: 768px){
        border: 1px solid red;
        width: 100%;
        height: 50vh;
    }
`,l8=P.div`
    width: 100%;
    height: 100%;
    display: flex;
    gap: 15px;

    @media (max-width: 768px){
        border: 1px solid red;
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
            border: 1px solid red;
            text-align: center;
        }

        & > img:nth-child(1) {
            width: 100%;
            height: 60%;
            object-fit: cover;
            border-radius: 20px;
        }

        & > img:nth-child(2) {
            width: 100%;
            height: 40%;
            object-fit: cover;
            border-radius: 20px;
        }
    }

    & > div:nth-child(2) > img:nth-child(1) {
        width: 100%;
        height: 40%;
        object-fit: cover;
        border-radius: 20px;
    }

    & > div:nth-child(2) > img:nth-child(2) {
        width: 100%;
        height: 60%;
        object-fit: cover;
        border-radius: 20px;
    }
`,c8=P.div`
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
`,u8=P.h1`
    font-size: 2.5rem;
    color: var(--color--black);
    font-family: var(--font--comfortaa);

    @media (max-width: 768px){
        font-size: 1.6rem;
    }

    & > b {
        color: ${({colorDefinedBold:e})=>e||"var(--color--green)"};
    }
`,d8=P.p`
    color: var(--color--black);
    font-size: 1.2rem;
    line-height: 100%;
    width: 80%;
    font-family: var(--font--avenir);

    @media (max-width: 768px){
        width: 100%;
        font-size: 1rem;
        text-align: justify;
        padding: 0 2.5%;
    }
`,p8=P(nn)`
    margin-top: auto; // Alinha o botão para o fundo
`,Ny=({colorDefinedBold:e})=>c.jsxs(a8,{children:[c.jsx(s8,{children:c.jsxs(l8,{children:[c.jsxs("div",{children:[c.jsx("img",{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1729530957/sushi_g7sbq9.jpg",alt:"Imagem 1"}),c.jsx("img",{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730131254/buteco_ck7tmg.jpg",alt:"Imagem 2"})]}),c.jsxs("div",{children:[c.jsx("img",{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730131262/frutosdomar_xqfm5b.jpg",alt:"Imagem 3"}),c.jsx("img",{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730126865/adega_n0cszf.jpg",alt:"Imagem 4"})]})]})}),c.jsxs(c8,{children:[c.jsxs(u8,{colorDefinedBold:e,children:["Pensão ",c.jsx("b",{children:"Completa"})]}),c.jsxs(d8,{children:["Sabe aquela comida com sabor, tempero e afeto que te abraça?",c.jsx("br",{}),c.jsx("br",{}),"Essa é a gastronomia registrada da LeAnge!",c.jsx("br",{}),c.jsx("br",{}),"Nossa estadia dispõe de um restaurante, onde são oferecidas todas as refeições do dia – café da manhã, almoço, chá da tarde e jantar, incluindo nossas deliciosas sobremesas. Adaptamos nosso cardápio para atender a diferentes estilos alimentares, incluindo opções tradicionais, veganas, vegetarianas, diabéticos, low carb e outras preferências individuais."]}),c.jsx(p8,{text:"Reservar agora!",textColor:"var(--color--black)",backgroundColor:"transparent",borderColor:"var(--color--black)",iconColor:"var(--color--black)",hoverBackgroundColor:"var(--color--black)",hoverBorderColor:"var(--color--black)",hoverColor:"var(--color--white)",hoverIconColor:"var(--color--white)",onClick:()=>alert("Reservado!")})]})]}),Rc=["https://res.cloudinary.com/dupg7clzc/image/upload/v1730142186/pet10_yvsbk7.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730142192/pet9_vighbx.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730142194/pet7_q7qi0y.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730142193/pet8_vdoyh2.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730142195/pet6_tuwm6x.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730142204/pet5_lrhzej.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730142204/pet4_zw9sc2.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730142218/pet3_g6dhdo.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730142219/pet2_aztjoa.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730142220/pet1_krkmac.jpg"],f8=P.div`
    height: 80vh;

    @media (max-width: 768px){
        border: 1px solid red;
        height: auto;
    }
`,h8=P.div`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    height: 100%;
    gap: 10px;

    @media (max-width: 768px){
        border: 1px solid red;
    }
`,m8=P(xt)`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    @media (max-width: 768px){
        border: 1px solid red;
    }
`,zg=P.img`
    width: 100%;
    height: ${e=>e.index%2===0?"40vh":"30vh"};
    object-fit: cover;
    border-radius: 15px;

    @media (max-width: 768px){
        border: 1px solid red;
        width: 95%;
        margin-left: 2.5%;
    }
`,g8=P.section`
    width: 100%;
    display: flex;
    padding: 0 5%;
    justify-content: space-between;
    height: 15vh;
    align-items: center;

    @media (max-width: 768px){
        border: 3px solid red;
        flex-direction: column-reverse;
        justify-content: center;
        gap: 10px;
        position: absolute;
        z-index: 2;
        top: 50%;
        margin-top: 25vh;
        height: 15vh;
    }

    & > h1 {
        font-size: 2rem;
        font-family: var(--font--comfortaa);

        @media (max-width: 768px){
            font-size: 1rem;
            color: var(--color--black);
            background-color: rgba(255, 255, 255, 0.4);
            padding: 10px 20px;
            border-radius: 10px;
            backdrop-filter: blur(10px);
        }
    }
`,By=()=>c.jsxs(c.Fragment,{children:[c.jsxs(g8,{children:[c.jsx(nn,{text:"Reservar agora!",textColor:"var(--color--black)",backgroundColor:"transparent",borderColor:"var(--color--black)",iconColor:"var(--color--black)",hoverBackgroundColor:"var(--color--black)",hoverBorderColor:"var(--color--black)",hoverColor:"var(--color--white)",hoverIconColor:"var(--color--white)",onClick:()=>alert("Reservado!")}),c.jsx("h1",{children:"Pet Friendly"})]}),c.jsx(f8,{children:c.jsx(vt,{loop:!0,modules:[kn,Pn,En],autoplay:{delay:1e3,disableOnInteraction:!1},spaceBetween:10,breakpoints:{1024:{slidesPerView:5},768:{slidesPerView:4},480:{slidesPerView:3}},children:Rc.map((t,n)=>c.jsx(m8,{children:c.jsxs(h8,{children:[c.jsx(zg,{src:t,alt:`Pet ${n}`,index:n}),n+1<Rc.length&&c.jsx(zg,{src:Rc[n+1],alt:`Pet ${n+1}`,index:n+1})]})},n))})})]}),v8=P.img`
    width: 90%;
    margin-left: 5%;
    height: 70vh;
    border-radius: 30px;
    object-fit: cover; // Para garantir que a imagem cubra o espaço do slide

    @media (max-width: 768px){
        border-radius: 15px;
    }
`,x8=P.div`
    position: absolute;
    top: 5%;
    left: 7%;
    color: white;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    padding: 10px 30px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
    border-radius: 5px;
    font-family: var(--font--comfortaa);
    font-size: 0.7rem;

    @media (max-width: 768px){
        left: 40px;
        top: 20px;
        background-color: var(--color--white);
        color: var(--color--black);
        border-radius: 10px;
        box-shadow: none;
    }
`,y8=({images:e})=>c.jsx(vt,{spaceBetween:10,slidesPerView:1,modules:[Pn,En,kn],autoplay:{delay:3e3,disableOnInteraction:!1},children:e.map((n,r)=>c.jsxs(xt,{style:{position:"relative"},children:[c.jsx(v8,{src:n.src,alt:`Atração ${r+1}`}),c.jsx(x8,{children:c.jsx("h3",{children:n.text})})]},r))}),w8=[{src:"../../public/serra/1.JPG",text:"Passeio de bugre"},{src:"../../public/serra/2.JPG",text:"Atração Atração 1: Descrição da Atração 12: Descrição da Atração 2"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730142544/atracao2_knquxz.jpg",text:"Hot Tube"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730142186/pet10_yvsbk7.jpg",text:"Piscina"},{src:"../../public/serra/5.JPG",text:"Atração 5: Descrição da Atração 5"}],b8=P.section`
    width: 100%;
    display: flex;
    padding: 0 5%;
    justify-content: space-between;
    height: 15vh;
    align-items: center;

    @media (max-width: 768px){
        border: 1px solid red;
        flex-direction: column;
        justify-content: center;
        gap: 15px;  
        height: 20vh;
        position: absolute;
        z-index: 4;
        margin-top: 300px;
    }

    & > h1 {
        font-size: 1.6rem;
        font-family: var(--font--comfortaa);
        border: 1px solid red;
        color: var(--color--white);
    }
`,S8=P.div`
    width: 100%;
    height: 70vh;
    position: relative; // Para garantir que o texto fique sobre as imagens

    @media (max-width: 768px){
        border: 1px solid red;
        padding: 10% 0;
        margin-bottom: 10vh;
    }
`,Fy=()=>c.jsxs(c.Fragment,{children:[c.jsxs(b8,{children:[c.jsx("h1",{children:"Nossas atrações"}),c.jsx(nn,{text:"Reservar agora!",textColor:"var(--color--black)",backgroundColor:"transparent",borderColor:"var(--color--black)",iconColor:"var(--color--black)",hoverBackgroundColor:"var(--color--black)",hoverBorderColor:"var(--color--black)",hoverColor:"var(--color--white)",hoverIconColor:"var(--color--white)",onClick:()=>alert("Reservado!")})]}),c.jsx(S8,{children:c.jsx(y8,{images:w8})})]}),Ag=P.section`
    width: 100%;
    margin-top: 10vh;
    display: flex;
    padding: 0 5%;
    justify-content: center;
    height: 15vh;
    
    @media (max-width: 768px){
        border: 1px solid red;
        height: 10vh;
        align-items: center;
        margin-top: 2.5vh;
    }

    & > h1 {
        font-size: 2rem;
        font-family: var(--font--comfortaa);
        text-align: center;
        width: 100%;
        
        @media (max-width: 768px){
            border: 1px solid red;
            font-size: 1.6rem;
        }
    }
`,j8=P.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    height: 70vh;
    padding: 0 5%;

    @media (max-width: 768px){
        border: 2px solid red;
        height: auto;
    }
`,C8=P.div`
    width: 95%; 
    height: 70vh; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 10px;
    border-radius: 10px; /* Bordas arredondadas */
    position: relative; /* Para posicionar o texto em cima da imagem */
    overflow: hidden; /* Para esconder qualquer conteúdo que extrapole o container */

    @media (max-width: 768px){
        border: 1px solid red;
        height: 65vh;
    }
`,T8=P.h2`
    font-size: 1rem;
    border-radius: 10px;
    position: absolute;
    top: 20px;
    left: 20px;
    padding: 5px 20px;
    margin: 10px 0; /* Espaço entre o nome e o depoimento */
    color: var(--color--white);
    background-color: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(20px);
    z-index: 1; /* Para garantir que o texto fique acima da imagem */
    font-family: var(--font--comfortaa);

    @media (max-width: 768px){
        border: 1px solid red;
        padding: 6px 20px;
        border-radius: 5px;
        top: 5px;
        left: 10px;
        font-size: .9rem;
    }
`,P8=P.p`
    font-size: 1rem;
    border-radius: 10px;
    position: absolute;
    bottom: 20px;
    left: 20px;
    padding: 5px 20px;
    margin: 10px 0; /* Espaço entre o nome e o depoimento */
    color: var(--color--white);
    background-color: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(20px);
    z-index: 1; /* Para garantir que o texto fique acima da imagem */
    font-family: var(--font--comfortaa);

    @media (max-width: 768px){
        font-size: .9rem;
        border: 1px solid red;
        width: 90%;
    }
`,E8=[{id:1,name:"João Silva",text:"Ótima experiência!",bgImages:["https://res.cloudinary.com/dupg7clzc/image/upload/v1730142220/pet1_krkmac.jpg","/public/serra/2.JPG","/public/serra/3.JPG"]},{id:2,name:"Maria Oliveira",text:"Atendimento excepcional.",bgImages:["https://res.cloudinary.com/dupg7clzc/image/upload/v1730142220/pet1_krkmac.jpg","/public/serra/5.JPG","/public/serra/6.JPG"]},{id:3,name:"Carlos Pereira",text:"Recomendo a todos!",bgImages:["https://res.cloudinary.com/dupg7clzc/image/upload/v1730142220/pet1_krkmac.jpg","/public/serra/8.JPG","/public/serra/9.JPG"]},{id:4,name:"Ana Santos",text:"Fiquei encantado!",bgImages:["https://res.cloudinary.com/dupg7clzc/image/upload/v1730142220/pet1_krkmac.jpg","/public/serra/11.JPG","/public/serra/12.JPG"]},{id:5,name:"Pedro Lima",text:"Voltarei com certeza.",bgImages:["https://res.cloudinary.com/dupg7clzc/image/upload/v1730142220/pet1_krkmac.jpg","/public/serra/14.JPG","/public/serra/15.JPG"]},{id:6,name:"Fernanda Costa",text:"Uma experiência inesquecível!",bgImages:["https://res.cloudinary.com/dupg7clzc/image/upload/v1730142220/pet1_krkmac.jpg","/public/serra/17.JPG","/public/serra/18.JPG"]}],$y=()=>c.jsxs(c.Fragment,{children:[c.jsx(Ag,{children:c.jsx("h1",{children:"Palavra do Hóspede"})}),c.jsx(j8,{children:c.jsx(vt,{slidesPerView:1,spaceBetween:10,modules:[kn],grabCursor:!0,autoplay:{delay:5e3,disableOnInteraction:!1},breakpoints:{1024:{slidesPerView:3},768:{slidesPerView:2},480:{slidesPerView:1}},children:E8.map(e=>c.jsx(xt,{children:c.jsxs(C8,{children:[c.jsx(vt,{slidesPerView:1,spaceBetween:10,loop:!0,style:{width:"100%",height:"100%"},onTouchStart:t=>{t.stopPropagation()},onMouseEnter:t=>{t.stopPropagation()},children:e.bgImages.map((t,n)=>c.jsx(xt,{children:c.jsx("div",{style:{backgroundImage:`url(${t})`,backgroundSize:"cover",backgroundPosition:"center",width:"100%",height:"100%",borderRadius:"10px"}})},n))}),c.jsx(T8,{children:e.name}),c.jsx(P8,{children:e.text})]})},e.id))})}),c.jsx(Ag,{children:c.jsx(nn,{text:"Reservar agora!",textColor:"var(--color--black)",backgroundColor:"transparent",borderColor:"var(--color--black)",iconColor:"var(--color--black)",hoverBackgroundColor:"var(--color--black)",hoverBorderColor:"var(--color--black)",hoverColor:"var(--color--white)",hoverIconColor:"var(--color--white)",onClick:()=>alert("Reservado!")})})]}),k8=P.div`
    height: 5vh;

    @media (max-width: 768px){
        border: 1px solid red;
        height: 0vh;
    }
`,z8=P(U.section)`
    width: 100%;
    display: flex;
    padding: 5% 5% 2.5% 10%;
    align-items: center;
    justify-content: space-between;
    height: 95vh;

    @media (max-width: 768px){
        border: 1px solid red;
        padding: 10% 2.5%;
        flex-direction: column-reverse;
    }
`,A8=P(U.div)`
    width: 45%;
    height: 100%;
    background-image: url('https://res.cloudinary.com/dupg7clzc/image/upload/v1730130104/fotoSerra4_zgia0i.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 0px 100px 0 100px;

    @media (max-width: 768px){
        width: 100%;
        border-radius: 0px;
        border-image: fill 0 linear-gradient(#0001, #ffffff);
        position: absolute;
        height: 50%;
        top: 0;
        z-index: -1;
    }
`,M8=P(U.div)`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: 20px;
    flex-direction: column;

    @media (max-width: 768px){
        border: 1px solid red;
        width: 100%;
        align-items: center;
        height: 70%;
    }

    & > h4 {
        font-family: var(--font--comfortaa);
        font-size: 22px;
        font-weight: 200;
        color: var(--color--black);

        @media (max-width: 768px){
            border: 1px solid red;
            color: var(--color--black);
            font-size: 14px;
            text-align: center;
            font-weight: 800;
        }
    }

    & > h1 {
        font-family: var(--font--comfortaa);
        font-size: 65px;
        width: 80%;
        line-height: 100%;
        color: var(--color--black);
        margin-top: -15px;

        @media (max-width: 768px){
            border: 1px solid red; 
            display: inline-block;
            width: 100%;
            font-size: 35px;
            text-align: center;
            margin-top: -5px;
        }
    }

    & > h1 b {
        color: var(--color--green);
    }

    & > p {
        font-family: var(--font--avenir);
        color: var(--color--black);
        font-size: 18px;
        line-height: 100%;
        width: 50%;

        @media (max-width: 768px){
            border: 1px solid red;
            width: 80%;
            font-size: 1rem;
            text-align: center;
            padding-bottom: 100px;
        }
    }
`,L8=[{backgroundImage:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730126866/aconchego_y0rxho.jpg",title:"Aconchego",description:"Nossas áreas internas, contam com três salas superequipadas e aconchegantes, sendo elas: sala de TV, sala de estar, sala de jogos com mesa de bilhar, carteado, jogos de tabuleiro e biblioteca.",buttonText:"Viver minha experiência agora"},{backgroundImage:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730126391/cozinha_qvars1.jpg",title:"Cozinha",description:"Na nossa diária, todas as refeições estão incluídas: café da manhã, almoço, chá da tarde e jantar! Todas preparadas com muito tempero, amor e afeto.",buttonText:"Viver minha experiência agora"},{backgroundImage:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730126866/suites_gmhdsf.jpg",title:"Suites",description:"Nossas suítes são incríveis e cada uma possui o seu charme. Todas contam com banheira com vista para a natureza, lareira para aquecer no friozinho, camas king size, ar condicionado, frigobar e varanda.",buttonText:"Viver minha experiência agora"},{backgroundImage:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730126865/conforto_oebwyu.webp",title:"Relaxar",description:"Relaxe em nosso SPA com uma vista de frente para mata! Você pode escolher contratar nossos serviços de massoterapia, manicure, pedicure.",buttonText:"Viver minha experiência agora"},{backgroundImage:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730126869/refrescar_id0f4o.png",title:"Refrescar",description:"Nossa maravilhosa piscina de borda infinita possui aquecimento solar e tratamento especial por ozônio, com níveis baixíssimos de cloro, além de contar com o ofurô aquecido, perfeito para aproveitar no final de tarde em que temos um pôr do sol incrível para acompanhar. Ah! E claro que seu Dog pode nadar junto com você!",buttonText:"Viver minha experiência agora"},{backgroundImage:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730126869/aventura_waih8i.png",title:"Aventura",description:"Na propriedade, temos trilhas dentro da natureza, beirando o rio! Em diversos pontos você pode escolher dar uma paradinha para tomar um banho e renovar as energias!",buttonText:"Viver minha experiência agora"},{backgroundImage:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730126866/diversao_jpykdy.jpg",title:"Divercão",description:"Espaço de sobra para seu PET se divertir! Espaço agility na beira do lago, com muita grama, para seu pet, correr, pular e nadar!",buttonText:"Viver minha experiência agora"},{backgroundImage:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730126865/adega_n0cszf.jpg",title:"Adega",description:"Para completar ainda mais sua experiência, contamos com uma adega subterrânea para climatização perfeita dos vinhos, bar com carta variada de drinks, cervejas e destilados.",buttonText:"Viver minha experiência agora"},{backgroundImage:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730126873/sossego_dutvww.png",title:"Sossego",description:"A área da sauna fica localizada ao lado da mata, com barulho do rio que passa e conta com um HotTub abastecido por água natural e aquecido à lenha, o combo completo para você relaxar.",buttonText:"Viver minha experiência agora"},{backgroundImage:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730126872/petfriendly_xxpntj.png",title:"Pet Friendly",description:"Não temos restrições quanto ao porte ou raça do seu pet, também não cobramos taxas adicionais para a vinda deles. Seu pet tem liberdade total para acessar todas as nossas comodidades!",buttonText:"Viver minha experiência agora"}],_8=P.section`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
    flex-direction: column;

    @media (max-width: 768px){
        border: 1px solid red;
        height: auto;
        padding: 5% 0;
        gap: 30px;
    }
    

    & > div h1{
        font-size: 2rem;
        font-family: var(--font--comfortaa);
        text-align: center;

        @media (max-width: 768px){
            border: 1px solid red;
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
            border: 1px solid red;  
        }
    }
    

`,O8=[{title:"Tranquilidade",description:"A área da sauna fica localizada ao lado da mata, A área da sauna fica localizada ao lado da mat, A área da sauna fica localizada ao lado da mata",imageUrl:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730126873/sossego_dutvww.png"},{title:"Conforto",description:"Desfrute de acomodações de luxo...",buttonText:"Reserve já seu lugar",imageUrl:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730124671/suiteSerra2_lhgcj2.jpg"},{title:"Tranquilidade",description:"A área da sauna fica localizada ao lado da mata, A área da sauna fica localizada ao lado da mat, A área da sauna fica localizada ao lado da mata",imageUrl:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730126873/sossego_dutvww.png"},{title:"Conforto",description:"Desfrute de acomodações de luxo...",buttonText:"Reserve já seu lugar",imageUrl:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730124671/suiteSerra2_lhgcj2.jpg"}],I8=P.section`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px){
        border: 1px solid red;
        height: auto;
        padding: 10% 0;
    }
`,R8=[{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730133147/suiteSuperior1_gpjls0.jpg",text:"Suíte Superior 1"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730133146/suiteSuperior2_cqduas.jpg",text:"Suíte Superior 2"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730133142/suiteSuperior3_pgr53r.jpg",text:"Suíte Superior 3"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730133142/suiteStandard4_mrtwhq.jpg",text:"Suíte Standard 4"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730133138/suiteStandard5_j9oyln.jpg",text:"Suíte Standard 5"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730133137/suiteMaster6_id3iqs.jpg",text:"Suíte Master 6"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730133133/suiteMaster7_bqdek7.jpg",text:"Suíte Master 7"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730133111/suiteStandard8_lpyi22.jpg",text:"Suíte Standard 8"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730133110/suiteSuperior9_v1mxwb.jpg",text:"Suíte Superior 9"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730133110/suiteMaster10_gqoxfm.jpg",text:"Suíte Superior 10"}],V8=()=>c.jsxs(c.Fragment,{children:[c.jsx(Cn,{children:c.jsx("title",{children:"Le Ange Serra - Pousada Le Ange"})}),c.jsx(k8,{}),c.jsxs(z8,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.5},children:[c.jsx(A8,{initial:{scale:.8,x:"-100vw"},animate:{scale:1,x:0},transition:{duration:.8,ease:"easeOut"}}),c.jsxs(M8,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8,ease:"easeOut"},children:[c.jsx(U.h4,{initial:{x:-100,opacity:0},animate:{x:0,opacity:1},transition:{duration:.6},children:"FALAR SEMPRE SOBRE A LEANGE SERRA"}),c.jsxs(U.h1,{initial:{x:-100,opacity:0},animate:{x:0,opacity:1},transition:{duration:.6},children:["PET FRIENDLY DO ",c.jsx("b",{children:"BRASIL"})]}),c.jsx(U.p,{initial:{x:-100,opacity:0},animate:{x:0,opacity:1},transition:{duration:.6},children:"Aqui você e seu pet, são mais do que bem-vindos!"}),c.jsx(U.div,{initial:{scale:0},animate:{scale:1},transition:{duration:.6,ease:"backOut"},children:c.jsx(nn,{text:"Reservar agora!",textColor:"var(--color--black)",backgroundColor:"transparent",borderColor:"var(--color--black)",iconColor:"var(--color--black)",hoverBackgroundColor:"var(--color--black)",hoverBorderColor:"var(--color--black)",hoverColor:"var(--color--white)",hoverIconColor:"var(--color--white)",onClick:()=>alert("Reservado!")})})]})]}),c.jsxs(_8,{children:[c.jsxs("div",{children:[c.jsx("h1",{children:"Veja um pouco sobre nosso espaço"}),c.jsx("p",{children:"Estamos ansisosos por você!"})]}),c.jsx(Jp,{content:L8,spaceBetween:20,width:"100%",height:"70vh",showPagination:!1,showNavigation:!0})]}),c.jsx(I8,{children:c.jsx(Dy,{slides:O8})}),c.jsx(o8,{images:R8}),c.jsx(Ny,{}),c.jsx(By,{}),c.jsx(Fy,{}),c.jsx($y,{}),c.jsx(sa,{})]}),D8=Di`
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
`,N8=P.section`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 5%;
    position: relative;

    @media (max-width: 768px){
        border: 1px solid red;
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
        height: 65%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        align-items: center;

        @media (max-width: 768px){
            border: 1px solid red;
            height: auto;
        }
    }

    & > main div {
        position: relative;
        width: 23%;
        height: 45%;
        margin: 10px 0;

        @media (max-width: 768px){
            border: 1px solid red;
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
        animation: ${D8} 5s ease-in-out infinite;
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
        background-color: rgba(255, 255, 255, 0.2);
        backdrop-filter: blur(10px);
        color: white;
        padding: 3px 7px;
        font-size: 0.6rem;
        border-radius: 5px 0 5px 0;
        transition: all 0.5s ease-in-out;
        font-family: var(--font--comfortaa);
        cursor: pointer;

        @media (max-width: 768px){
            border: 1px solid red;
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
`,B8=P.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 25%;

    @media (max-width: 768px){
        border: 1px solid red;
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
        font-size: 3rem;
        color: var(--color--black);
        font-family: var(--font--comfortaa);

        @media (max-width: 768px){
            font-size: 1.6rem;
            text-align: center;
            border: 1px solid red;
            margin-bottom: 10px;
        }
    }

    & > div p {
        width: 80%;
        font-family: var(--font--avenir);
        color: var(--color--black);
        line-height: 100%;
        font-size: 1rem;

        @media (max-width: 768px){
            width: 100%;
            border: 1px solid red;
            text-align: justify;
            margin-bottom: 15px;
        }
    }
`,F8=({images:e})=>{const[t,n]=T.useState(null);return c.jsxs(N8,{children:[c.jsxs(B8,{children:[c.jsxs("div",{children:[c.jsx("h1",{children:"Suítes"}),c.jsx("p",{children:"Nossas suítes são incríveis e cada uma possui o seu charme. Todas contam com banheira excepcional com vista deliciosa para a natureza, lareira para aquecer no friozinho, camas king size, ar condicionado, frigobar e varanda."})]}),c.jsx("div",{children:c.jsx(nn,{text:"Reservar agora!",textColor:"var(--color--black)",backgroundColor:"transparent",borderColor:"var(--color--black)",iconColor:"var(--color--black)",hoverBackgroundColor:"var(--color--black)",hoverBorderColor:"var(--color--white)",hoverColor:"var(--color--white)",hoverIconColor:"var(--color--white)",onClick:()=>alert("Reservado!")})})]}),c.jsx("main",{children:e.map((r,i)=>c.jsxs("div",{onMouseEnter:()=>n(i),onMouseLeave:()=>n(null),children:[c.jsx("img",{src:r.src,alt:`Imagem ${i+1}`}),c.jsxs("span",{onClick:()=>alert("Conhecendo suíte completa!"),children:[t===i?"Conhecer Suíte Completa":r.text,t===i&&c.jsx(Bp,{})]})]},i))})]})},$8=P.div`
    height: 5vh;

    @media (max-width: 768px){
        border: 1px solid red;
        height: 0vh;
    }
`,H8=P(U.section)`
    width: 100%;
    display: flex;
    padding: 5% 10% 2.5% 5%;
    align-items: center;
    justify-content: space-between;
    height: 95vh;

    @media (max-width: 768px){
        border: 1px solid red;
        padding: 10% 2.5%;
        flex-direction: column-reverse;
    }
`,U8=P(U.div)`
    width: 45%;
    height: 100%;
    background-image: url('https://res.cloudinary.com/dupg7clzc/image/upload/v1730142186/pet10_yvsbk7.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 100px 0px 100px 0px;

    @media (max-width: 768px){
        width: 100%;
        border-radius: 0px;
        border-image: fill 0 linear-gradient(#0001, #ffffff);
        position: absolute;
        height: 50%;
        top: 0;
        z-index: -1;
    }
`,W8=P(U.div)`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    gap: 20px;
    flex-direction: column;

    @media (max-width: 768px){
        border: 1px solid red;
        width: 100%;
        align-items: center;
        height: 70%;
    }

    & > h4 {
        font-family: var(--font--comfortaa);
        font-size: 22px;
        font-weight: 200;
        color: var(--color--black);

        @media (max-width: 768px){
            border: 1px solid red;
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
        width: 80%;
        line-height: 100%;
        color: var(--color--black);
        margin-top: -15px;

        @media (max-width: 768px){
            border: 1px solid red; 
            display: inline-block;
            width: 100%;
            font-size: 35px;
            text-align: center;
            margin-top: -5px;
        }
    }

    & > h1 b {
        color: var(--color--blue);
    }

    & > p {
        font-family: var(--font--avenir);
        color: var(--color--black);
        text-align: right;
        font-size: 18px;
        line-height: 100%;
        width: 50%;

        @media (max-width: 768px){
            border: 1px solid red;
            width: 80%;
            font-size: 1rem;
            text-align: center;
            padding-bottom: 100px;
        }
    }
`,G8=[{backgroundImage:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730126866/aconchego_y0rxho.jpg",title:"Aconchego",description:"Nossas áreas internas, contam com três salas superequipadas e aconchegantes, sendo elas: sala de TV, sala de estar, sala de jogos com mesa de bilhar, carteado, jogos de tabuleiro e biblioteca.",buttonText:"Viver minha experiência agora"},{backgroundImage:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730126391/cozinha_qvars1.jpg",title:"Cozinha",description:"Na nossa diária, todas as refeições estão incluídas: café da manhã, almoço, chá da tarde e jantar! Todas preparadas com muito tempero, amor e afeto.",buttonText:"Viver minha experiência agora"},{backgroundImage:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730126866/suites_gmhdsf.jpg",title:"Suites",description:"Nossas suítes são incríveis e cada uma possui o seu charme. Todas contam com banheira com vista para a natureza, lareira para aquecer no friozinho, camas king size, ar condicionado, frigobar e varanda.",buttonText:"Viver minha experiência agora"},{backgroundImage:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730126865/conforto_oebwyu.webp",title:"Relaxar",description:"Relaxe em nosso SPA com uma vista de frente para mata! Você pode escolher contratar nossos serviços de massoterapia, manicure, pedicure.",buttonText:"Viver minha experiência agora"},{backgroundImage:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730126869/refrescar_id0f4o.png",title:"Refrescar",description:"Nossa maravilhosa piscina de borda infinita possui aquecimento solar e tratamento especial por ozônio, com níveis baixíssimos de cloro, além de contar com o ofurô aquecido, perfeito para aproveitar no final de tarde em que temos um pôr do sol incrível para acompanhar. Ah! E claro que seu Dog pode nadar junto com você!",buttonText:"Viver minha experiência agora"},{backgroundImage:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730126869/aventura_waih8i.png",title:"Aventura",description:"Na propriedade, temos trilhas dentro da natureza, beirando o rio! Em diversos pontos você pode escolher dar uma paradinha para tomar um banho e renovar as energias!",buttonText:"Viver minha experiência agora"},{backgroundImage:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730126866/diversao_jpykdy.jpg",title:"Divercão",description:"Espaço de sobra para seu PET se divertir! Espaço agility na beira do lago, com muita grama, para seu pet, correr, pular e nadar!",buttonText:"Viver minha experiência agora"},{backgroundImage:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730126865/adega_n0cszf.jpg",title:"Adega",description:"Para completar ainda mais sua experiência, contamos com uma adega subterrânea para climatização perfeita dos vinhos, bar com carta variada de drinks, cervejas e destilados.",buttonText:"Viver minha experiência agora"},{backgroundImage:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730126873/sossego_dutvww.png",title:"Sossego",description:"A área da sauna fica localizada ao lado da mata, com barulho do rio que passa e conta com um HotTub abastecido por água natural e aquecido à lenha, o combo completo para você relaxar.",buttonText:"Viver minha experiência agora"},{backgroundImage:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730126872/petfriendly_xxpntj.png",title:"Pet Friendly",description:"Não temos restrições quanto ao porte ou raça do seu pet, também não cobramos taxas adicionais para a vinda deles. Seu pet tem liberdade total para acessar todas as nossas comodidades!",buttonText:"Viver minha experiência agora"}],q8=P.section`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
    flex-direction: column;

    @media (max-width: 768px){
        border: 1px solid red;
        height: auto;
        padding: 5% 0;
        gap: 30px;
    }
    

    & > div h1{
        font-size: 2rem;
        font-family: var(--font--comfortaa);
        text-align: center;

        @media (max-width: 768px){
            border: 1px solid red;
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
            border: 1px solid red;  
        }
    }
    

`,Y8=[{title:"Tranquilidade",description:"A área da sauna fica localizada ao lado da mata, A área da sauna fica localizada ao lado da mat, A área da sauna fica localizada ao lado da mata",imageUrl:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730126873/sossego_dutvww.png"},{title:"Conforto",description:"Desfrute de acomodações de luxo...",buttonText:"Reserve já seu lugar",imageUrl:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730124671/suiteSerra2_lhgcj2.jpg"},{title:"Tranquilidade",description:"A área da sauna fica localizada ao lado da mata, A área da sauna fica localizada ao lado da mat, A área da sauna fica localizada ao lado da mata",imageUrl:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730126873/sossego_dutvww.png"},{title:"Conforto",description:"Desfrute de acomodações de luxo...",buttonText:"Reserve já seu lugar",imageUrl:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730124671/suiteSerra2_lhgcj2.jpg"}],K8=P.section`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px){
        border: 1px solid red;
        height: auto;
        padding: 10% 0;
    }
`,X8=[{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730144220/suiteMar01_p6bfoi.jpg",text:"Suíte Superior 1"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730144220/suiteMar02_pzxjim.jpg",text:"Suíte Standard 2"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730144223/suiteMar07_dgfxzq.jpg",text:"Suíte Superior 3"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730144223/suiteMar05_oid9as.jpg",text:"Suíte Superior 4"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730144223/suiteMar08_g1gmt0.jpg",text:"Suíte Superior 5"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730144224/suiteMar03_o9sxbf.jpg",text:"Suíte Standard 6"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730144224/suiteMar04_jcaps2.jpg",text:"Suíte Master 7"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730144226/suiteMar06_jywv1q.jpg",text:"Suíte Master 8"}],Q8=()=>c.jsxs(c.Fragment,{children:[c.jsx(Cn,{children:c.jsx("title",{children:"Le Ange Serra - Pousada Le Ange"})}),c.jsx($8,{}),c.jsxs(H8,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.5},children:[c.jsxs(W8,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8,ease:"easeOut"},children:[c.jsx(U.h4,{initial:{x:-100,opacity:0},animate:{x:0,opacity:1},transition:{duration:.6},children:"FALAR SEMPRE SOBRE A LEANGE MAR"}),c.jsxs(U.h1,{initial:{x:-100,opacity:0},animate:{x:0,opacity:1},transition:{duration:.6},children:["PET FRIENDLY DO ",c.jsx("b",{children:"BRASIL"})]}),c.jsx(U.p,{initial:{x:-100,opacity:0},animate:{x:0,opacity:1},transition:{duration:.6},children:"Aqui você e seu pet, são mais do que bem-vindos!"}),c.jsx(U.div,{initial:{scale:0},animate:{scale:1},transition:{duration:.6,ease:"backOut"},children:c.jsx(nn,{text:"Reservar agora!",textColor:"var(--color--black)",backgroundColor:"transparent",borderColor:"var(--color--black)",iconColor:"var(--color--black)",hoverBackgroundColor:"var(--color--black)",hoverBorderColor:"var(--color--black)",hoverColor:"var(--color--white)",hoverIconColor:"var(--color--white)",onClick:()=>alert("Reservado!")})})]}),c.jsx(U8,{initial:{scale:.8,x:"-100vw"},animate:{scale:1,x:0},transition:{duration:.8,ease:"easeOut"}})]}),c.jsxs(q8,{children:[c.jsxs("div",{children:[c.jsx("h1",{children:"Veja um pouco sobre nosso espaço"}),c.jsx("p",{children:"Estamos ansisosos por você!"})]}),c.jsx(Jp,{content:G8,spaceBetween:20,width:"100%",height:"70vh",showPagination:!1,showNavigation:!0})]}),c.jsx(K8,{children:c.jsx(Dy,{slides:Y8,titleColor:"var(--color--blue)",buttonBgColor:"var(--color--blue)",imagePosition:"left"})}),c.jsx(F8,{images:X8}),c.jsx(Ny,{colorDefinedBold:"var(--color--blue)"}),c.jsx(By,{}),c.jsx(Fy,{}),c.jsx($y,{}),c.jsx(sa,{})]}),$r="/leange/assets/black-BUrso9Bn.png";function Z8(e){return le({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm8.25 5.25a.75.75 0 0 1 .75-.75h8.25a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75Z",clipRule:"evenodd"},child:[]}]})(e)}var Hy={exports:{}};(function(e,t){(function(n,r){e.exports=r(T)})(typeof self<"u"?self:Xy,function(n){return function(r){var i={};function o(a){if(i[a])return i[a].exports;var s=i[a]={i:a,l:!1,exports:{}};return r[a].call(s.exports,s,s.exports,o),s.l=!0,s.exports}return o.m=r,o.c=i,o.d=function(a,s,l){o.o(a,s)||Object.defineProperty(a,s,{enumerable:!0,get:l})},o.r=function(a){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},o.t=function(a,s){if(1&s&&(a=o(a)),8&s||4&s&&typeof a=="object"&&a&&a.__esModule)return a;var l=Object.create(null);if(o.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:a}),2&s&&typeof a!="string")for(var u in a)o.d(l,u,(function(d){return a[d]}).bind(null,u));return l},o.n=function(a){var s=a&&a.__esModule?function(){return a.default}:function(){return a};return o.d(s,"a",s),s},o.o=function(a,s){return Object.prototype.hasOwnProperty.call(a,s)},o.p="",o(o.s=2)}([function(r,i){r.exports=n},function(r,i,o){var a={linear:function(s,l,u,d){return(u-l)*s/d+l},easeInQuad:function(s,l,u,d){return(u-l)*(s/=d)*s+l},easeOutQuad:function(s,l,u,d){return-(u-l)*(s/=d)*(s-2)+l},easeInOutQuad:function(s,l,u,d){var p=u-l;return(s/=d/2)<1?p/2*s*s+l:-p/2*(--s*(s-2)-1)+l},easeInCubic:function(s,l,u,d){return(u-l)*(s/=d)*s*s+l},easeOutCubic:function(s,l,u,d){return(u-l)*((s=s/d-1)*s*s+1)+l},easeInOutCubic:function(s,l,u,d){var p=u-l;return(s/=d/2)<1?p/2*s*s*s+l:p/2*((s-=2)*s*s+2)+l},easeInQuart:function(s,l,u,d){return(u-l)*(s/=d)*s*s*s+l},easeOutQuart:function(s,l,u,d){return-(u-l)*((s=s/d-1)*s*s*s-1)+l},easeInOutQuart:function(s,l,u,d){var p=u-l;return(s/=d/2)<1?p/2*s*s*s*s+l:-p/2*((s-=2)*s*s*s-2)+l},easeInQuint:function(s,l,u,d){return(u-l)*(s/=d)*s*s*s*s+l},easeOutQuint:function(s,l,u,d){return(u-l)*((s=s/d-1)*s*s*s*s+1)+l},easeInOutQuint:function(s,l,u,d){var p=u-l;return(s/=d/2)<1?p/2*s*s*s*s*s+l:p/2*((s-=2)*s*s*s*s+2)+l},easeInSine:function(s,l,u,d){var p=u-l;return-p*Math.cos(s/d*(Math.PI/2))+p+l},easeOutSine:function(s,l,u,d){return(u-l)*Math.sin(s/d*(Math.PI/2))+l},easeInOutSine:function(s,l,u,d){return-(u-l)/2*(Math.cos(Math.PI*s/d)-1)+l},easeInExpo:function(s,l,u,d){return s==0?l:(u-l)*Math.pow(2,10*(s/d-1))+l},easeOutExpo:function(s,l,u,d){var p=u-l;return s==d?l+p:p*(1-Math.pow(2,-10*s/d))+l},easeInOutExpo:function(s,l,u,d){var p=u-l;return s===0?l:s===d?l+p:(s/=d/2)<1?p/2*Math.pow(2,10*(s-1))+l:p/2*(2-Math.pow(2,-10*--s))+l},easeInCirc:function(s,l,u,d){return-(u-l)*(Math.sqrt(1-(s/=d)*s)-1)+l},easeOutCirc:function(s,l,u,d){return(u-l)*Math.sqrt(1-(s=s/d-1)*s)+l},easeInOutCirc:function(s,l,u,d){var p=u-l;return(s/=d/2)<1?-p/2*(Math.sqrt(1-s*s)-1)+l:p/2*(Math.sqrt(1-(s-=2)*s)+1)+l},easeInElastic:function(s,l,u,d){var p,f,v,x=u-l;return v=1.70158,s===0?l:(s/=d)==1?l+x:((f=0)||(f=.3*d),(p=x)<Math.abs(x)?(p=x,v=f/4):v=f/(2*Math.PI)*Math.asin(x/p),-p*Math.pow(2,10*(s-=1))*Math.sin((s*d-v)*(2*Math.PI)/f)+l)},easeOutElastic:function(s,l,u,d){var p,f,v,x=u-l;return v=1.70158,s===0?l:(s/=d)==1?l+x:((f=0)||(f=.3*d),(p=x)<Math.abs(x)?(p=x,v=f/4):v=f/(2*Math.PI)*Math.asin(x/p),p*Math.pow(2,-10*s)*Math.sin((s*d-v)*(2*Math.PI)/f)+x+l)},easeInOutElastic:function(s,l,u,d){var p,f,v,x=u-l;return v=1.70158,s===0?l:(s/=d/2)==2?l+x:((f=0)||(f=d*.44999999999999996),(p=x)<Math.abs(x)?(p=x,v=f/4):v=f/(2*Math.PI)*Math.asin(x/p),s<1?p*Math.pow(2,10*(s-=1))*Math.sin((s*d-v)*(2*Math.PI)/f)*-.5+l:p*Math.pow(2,-10*(s-=1))*Math.sin((s*d-v)*(2*Math.PI)/f)*.5+x+l)},easeInBack:function(s,l,u,d,p){return p===void 0&&(p=1.70158),(u-l)*(s/=d)*s*((p+1)*s-p)+l},easeOutBack:function(s,l,u,d,p){return p===void 0&&(p=1.70158),(u-l)*((s=s/d-1)*s*((p+1)*s+p)+1)+l},easeInOutBack:function(s,l,u,d,p){var f=u-l;return p===void 0&&(p=1.70158),(s/=d/2)<1?f/2*(s*s*((1+(p*=1.525))*s-p))+l:f/2*((s-=2)*s*((1+(p*=1.525))*s+p)+2)+l},easeInBounce:function(s,l,u,d){var p=u-l;return p-a.easeOutBounce(d-s,0,p,d)+l},easeOutBounce:function(s,l,u,d){var p=u-l;return(s/=d)<.36363636363636365?p*(7.5625*s*s)+l:s<.7272727272727273?p*(7.5625*(s-=.5454545454545454)*s+.75)+l:s<.9090909090909091?p*(7.5625*(s-=.8181818181818182)*s+.9375)+l:p*(7.5625*(s-=.9545454545454546)*s+.984375)+l},easeInOutBounce:function(s,l,u,d){var p=u-l;return s<d/2?.5*a.easeInBounce(2*s,0,p,d)+l:.5*a.easeOutBounce(2*s-d,0,p,d)+.5*p+l}};r.exports=a},function(r,i,o){r.exports=o(3)},function(r,i,o){o.r(i),o.d(i,"ReactConfetti",function(){return jt});var a,s,l=o(0),u=o.n(l),d=o(1),p=o.n(d);function f(M,O){return M+Math.random()*(O-M)}function v(M,O){for(var V=0;V<O.length;V++){var _=O[V];_.enumerable=_.enumerable||!1,_.configurable=!0,"value"in _&&(_.writable=!0),Object.defineProperty(M,_.key,_)}}function x(M,O,V){return O in M?Object.defineProperty(M,O,{value:V,enumerable:!0,configurable:!0,writable:!0}):M[O]=V,M}(function(M){M[M.Circle=0]="Circle",M[M.Square=1]="Square",M[M.Strip=2]="Strip"})(a||(a={})),function(M){M[M.Positive=1]="Positive",M[M.Negative=-1]="Negative"}(s||(s={}));var y=function(){function M(_,J,H,ee){(function(Al,Ml){if(!(Al instanceof Ml))throw new TypeError("Cannot call a class as a function")})(this,M),x(this,"context",void 0),x(this,"radius",void 0),x(this,"x",void 0),x(this,"y",void 0),x(this,"w",void 0),x(this,"h",void 0),x(this,"vx",void 0),x(this,"vy",void 0),x(this,"shape",void 0),x(this,"angle",void 0),x(this,"angularSpin",void 0),x(this,"color",void 0),x(this,"rotateY",void 0),x(this,"rotationDirection",void 0),x(this,"getOptions",void 0),this.getOptions=J;var de,je,pe=this.getOptions(),rn=pe.colors,Ot=pe.initialVelocityX,It=pe.initialVelocityY;this.context=_,this.x=H,this.y=ee,this.w=f(5,20),this.h=f(5,20),this.radius=f(5,10),this.vx=typeof Ot=="number"?f(-Ot,Ot):f(Ot.min,Ot.max),this.vy=typeof It=="number"?f(-It,0):f(It.min,It.max),this.shape=(de=0,je=2,Math.floor(de+Math.random()*(je-de+1))),this.angle=f(0,360)*Math.PI/180,this.angularSpin=f(-.2,.2),this.color=rn[Math.floor(Math.random()*rn.length)],this.rotateY=f(0,1),this.rotationDirection=f(0,1)?s.Positive:s.Negative}var O,V;return O=M,(V=[{key:"update",value:function(){var _=this.getOptions(),J=_.gravity,H=_.wind,ee=_.friction,de=_.opacity,je=_.drawShape;this.x+=this.vx,this.y+=this.vy,this.vy+=J,this.vx+=H,this.vx*=ee,this.vy*=ee,this.rotateY>=1&&this.rotationDirection===s.Positive?this.rotationDirection=s.Negative:this.rotateY<=-1&&this.rotationDirection===s.Negative&&(this.rotationDirection=s.Positive);var pe=.1*this.rotationDirection;if(this.rotateY+=pe,this.angle+=this.angularSpin,this.context.save(),this.context.translate(this.x,this.y),this.context.rotate(this.angle),this.context.scale(1,this.rotateY),this.context.rotate(this.angle),this.context.beginPath(),this.context.fillStyle=this.color,this.context.strokeStyle=this.color,this.context.globalAlpha=de,this.context.lineCap="round",this.context.lineWidth=2,je&&typeof je=="function")je.call(this,this.context);else switch(this.shape){case a.Circle:this.context.beginPath(),this.context.arc(0,0,this.radius,0,2*Math.PI),this.context.fill();break;case a.Square:this.context.fillRect(-this.w/2,-this.h/2,this.w,this.h);break;case a.Strip:this.context.fillRect(-this.w/6,-this.h/2,this.w/3,this.h)}this.context.closePath(),this.context.restore()}}])&&v(O.prototype,V),M}();function b(M,O,V){return O in M?Object.defineProperty(M,O,{value:V,enumerable:!0,configurable:!0,writable:!0}):M[O]=V,M}var g=function M(O,V){var _=this;(function(H,ee){if(!(H instanceof ee))throw new TypeError("Cannot call a class as a function")})(this,M),b(this,"canvas",void 0),b(this,"context",void 0),b(this,"getOptions",void 0),b(this,"x",0),b(this,"y",0),b(this,"w",0),b(this,"h",0),b(this,"lastNumberOfPieces",0),b(this,"tweenInitTime",Date.now()),b(this,"particles",[]),b(this,"particlesGenerated",0),b(this,"removeParticleAt",function(H){_.particles.splice(H,1)}),b(this,"getParticle",function(){var H=f(_.x,_.w+_.x),ee=f(_.y,_.h+_.y);return new y(_.context,_.getOptions,H,ee)}),b(this,"animate",function(){var H=_.canvas,ee=_.context,de=_.particlesGenerated,je=_.lastNumberOfPieces,pe=_.getOptions(),rn=pe.run,Ot=pe.recycle,It=pe.numberOfPieces,Al=pe.debug,Ml=pe.tweenFunction,Ll=pe.tweenDuration;if(!rn)return!1;var _l=_.particles.length,Ni=Ot?_l:de,Ol=Date.now();if(Ni<It){je!==It&&(_.tweenInitTime=Ol,_.lastNumberOfPieces=It);for(var ef=_.tweenInitTime,Yy=Ml(Ol-ef>Ll?Ll:Math.max(0,Ol-ef),Ni,It,Ll),tf=Math.round(Yy-Ni),nf=0;nf<tf;nf++)_.particles.push(_.getParticle());_.particlesGenerated+=tf}return Al&&(ee.font="12px sans-serif",ee.fillStyle="#333",ee.textAlign="right",ee.fillText("Particles: ".concat(_l),H.width-10,H.height-20)),_.particles.forEach(function(Bi,rf){Bi.update(),(Bi.y>H.height||Bi.y<-100||Bi.x>H.width+100||Bi.x<-100)&&(Ot&&Ni<=It?_.particles[rf]=_.getParticle():_.removeParticleAt(rf))}),_l>0||Ni<It}),this.canvas=O;var J=this.canvas.getContext("2d");if(!J)throw new Error("Could not get canvas context");this.context=J,this.getOptions=V};function h(M,O){var V=Object.keys(M);if(Object.getOwnPropertySymbols){var _=Object.getOwnPropertySymbols(M);O&&(_=_.filter(function(J){return Object.getOwnPropertyDescriptor(M,J).enumerable})),V.push.apply(V,_)}return V}function m(M){for(var O=1;O<arguments.length;O++){var V=arguments[O]!=null?arguments[O]:{};O%2?h(Object(V),!0).forEach(function(_){S(M,_,V[_])}):Object.getOwnPropertyDescriptors?Object.defineProperties(M,Object.getOwnPropertyDescriptors(V)):h(Object(V)).forEach(function(_){Object.defineProperty(M,_,Object.getOwnPropertyDescriptor(V,_))})}return M}function w(M,O){for(var V=0;V<O.length;V++){var _=O[V];_.enumerable=_.enumerable||!1,_.configurable=!0,"value"in _&&(_.writable=!0),Object.defineProperty(M,_.key,_)}}function S(M,O,V){return O in M?Object.defineProperty(M,O,{value:V,enumerable:!0,configurable:!0,writable:!0}):M[O]=V,M}var C={width:typeof window<"u"?window.innerWidth:300,height:typeof window<"u"?window.innerHeight:200,numberOfPieces:200,friction:.99,wind:0,gravity:.1,initialVelocityX:4,initialVelocityY:10,colors:["#f44336","#e91e63","#9c27b0","#673ab7","#3f51b5","#2196f3","#03a9f4","#00bcd4","#009688","#4CAF50","#8BC34A","#CDDC39","#FFEB3B","#FFC107","#FF9800","#FF5722","#795548"],opacity:1,debug:!1,tweenFunction:p.a.easeInOutQuad,tweenDuration:5e3,recycle:!0,run:!0},E=function(){function M(_,J){var H=this;(function(de,je){if(!(de instanceof je))throw new TypeError("Cannot call a class as a function")})(this,M),S(this,"canvas",void 0),S(this,"context",void 0),S(this,"_options",void 0),S(this,"generator",void 0),S(this,"rafId",void 0),S(this,"setOptionsWithDefaults",function(de){var je={confettiSource:{x:0,y:0,w:H.canvas.width,h:0}};H._options=m(m(m({},je),C),de),Object.assign(H,de.confettiSource)}),S(this,"update",function(){var de=H.options,je=de.run,pe=de.onConfettiComplete,rn=H.canvas,Ot=H.context;je&&(Ot.fillStyle="white",Ot.clearRect(0,0,rn.width,rn.height)),H.generator.animate()?H.rafId=requestAnimationFrame(H.update):(pe&&typeof pe=="function"&&H.generator.particlesGenerated>0&&pe.call(H,H),H._options.run=!1)}),S(this,"reset",function(){H.generator&&H.generator.particlesGenerated>0&&(H.generator.particlesGenerated=0,H.generator.particles=[],H.generator.lastNumberOfPieces=0)}),S(this,"stop",function(){H.options={run:!1},H.rafId&&(cancelAnimationFrame(H.rafId),H.rafId=void 0)}),this.canvas=_;var ee=this.canvas.getContext("2d");if(!ee)throw new Error("Could not get canvas context");this.context=ee,this.generator=new g(this.canvas,function(){return H.options}),this.options=J,this.update()}var O,V;return O=M,(V=[{key:"options",get:function(){return this._options},set:function(_){var J=this._options&&this._options.run,H=this._options&&this._options.recycle;this.setOptionsWithDefaults(_),this.generator&&(Object.assign(this.generator,this.options.confettiSource),typeof _.recycle=="boolean"&&_.recycle&&H===!1&&(this.generator.lastNumberOfPieces=this.generator.particles.length)),typeof _.run=="boolean"&&_.run&&J===!1&&this.update()}}])&&w(O.prototype,V),M}();function k(M){return function(O){if(Array.isArray(O))return q(O)}(M)||function(O){if(typeof Symbol<"u"&&Symbol.iterator in Object(O))return Array.from(O)}(M)||W(M)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function A(M){return(A=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(O){return typeof O}:function(O){return O&&typeof Symbol=="function"&&O.constructor===Symbol&&O!==Symbol.prototype?"symbol":typeof O})(M)}function z(){return(z=Object.assign||function(M){for(var O=1;O<arguments.length;O++){var V=arguments[O];for(var _ in V)Object.prototype.hasOwnProperty.call(V,_)&&(M[_]=V[_])}return M}).apply(this,arguments)}function I(M,O){var V=Object.keys(M);if(Object.getOwnPropertySymbols){var _=Object.getOwnPropertySymbols(M);O&&(_=_.filter(function(J){return Object.getOwnPropertyDescriptor(M,J).enumerable})),V.push.apply(V,_)}return V}function F(M){for(var O=1;O<arguments.length;O++){var V=arguments[O]!=null?arguments[O]:{};O%2?I(Object(V),!0).forEach(function(_){st(M,_,V[_])}):Object.getOwnPropertyDescriptors?Object.defineProperties(M,Object.getOwnPropertyDescriptors(V)):I(Object(V)).forEach(function(_){Object.defineProperty(M,_,Object.getOwnPropertyDescriptor(V,_))})}return M}function D(M,O){return function(V){if(Array.isArray(V))return V}(M)||function(V,_){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(V)))){var J=[],H=!0,ee=!1,de=void 0;try{for(var je,pe=V[Symbol.iterator]();!(H=(je=pe.next()).done)&&(J.push(je.value),!_||J.length!==_);H=!0);}catch(rn){ee=!0,de=rn}finally{try{H||pe.return==null||pe.return()}finally{if(ee)throw de}}return J}}(M,O)||W(M,O)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function W(M,O){if(M){if(typeof M=="string")return q(M,O);var V=Object.prototype.toString.call(M).slice(8,-1);return V==="Object"&&M.constructor&&(V=M.constructor.name),V==="Map"||V==="Set"?Array.from(M):V==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(V)?q(M,O):void 0}}function q(M,O){(O==null||O>M.length)&&(O=M.length);for(var V=0,_=new Array(O);V<O;V++)_[V]=M[V];return _}function ae(M,O){if(!(M instanceof O))throw new TypeError("Cannot call a class as a function")}function ne(M,O){for(var V=0;V<O.length;V++){var _=O[V];_.enumerable=_.enumerable||!1,_.configurable=!0,"value"in _&&(_.writable=!0),Object.defineProperty(M,_.key,_)}}function L(M,O){return(L=Object.setPrototypeOf||function(V,_){return V.__proto__=_,V})(M,O)}function N(M){var O=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}();return function(){var V,_=re(M);if(O){var J=re(this).constructor;V=Reflect.construct(_,arguments,J)}else V=_.apply(this,arguments);return B(this,V)}}function B(M,O){return!O||A(O)!=="object"&&typeof O!="function"?Z(M):O}function Z(M){if(M===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return M}function re(M){return(re=Object.setPrototypeOf?Object.getPrototypeOf:function(O){return O.__proto__||Object.getPrototypeOf(O)})(M)}function st(M,O,V){return O in M?Object.defineProperty(M,O,{value:V,enumerable:!0,configurable:!0,writable:!0}):M[O]=V,M}var lt=u.a.createRef(),St=function(M){(function(H,ee){if(typeof ee!="function"&&ee!==null)throw new TypeError("Super expression must either be null or a function");H.prototype=Object.create(ee&&ee.prototype,{constructor:{value:H,writable:!0,configurable:!0}}),ee&&L(H,ee)})(J,M);var O,V,_=N(J);function J(H){var ee;ae(this,J);for(var de=arguments.length,je=new Array(de>1?de-1:0),pe=1;pe<de;pe++)je[pe-1]=arguments[pe];return st(Z(ee=_.call.apply(_,[this,H].concat(je))),"canvas",u.a.createRef()),st(Z(ee),"confetti",void 0),ee.canvas=H.canvasRef||lt,ee}return O=J,(V=[{key:"componentDidMount",value:function(){if(this.canvas.current){var H=De(this.props)[0];this.confetti=new E(this.canvas.current,H)}}},{key:"componentDidUpdate",value:function(){var H=De(this.props)[0];this.confetti&&(this.confetti.options=H)}},{key:"componentWillUnmount",value:function(){this.confetti&&this.confetti.stop(),this.confetti=void 0}},{key:"render",value:function(){var H=D(De(this.props),2),ee=H[0],de=H[1],je=F({zIndex:2,position:"absolute",pointerEvents:"none",top:0,left:0,bottom:0,right:0},de.style);return u.a.createElement("canvas",z({width:ee.width,height:ee.height,ref:this.canvas},de,{style:je}))}}])&&ne(O.prototype,V),J}(l.Component);function De(M){var O={},V={},_=[].concat(k(Object.keys(C)),["confettiSource","drawShape","onConfettiComplete"]),J=["canvasRef"];for(var H in M){var ee=M[H];_.includes(H)?O[H]=ee:J.includes(H)?J[H]=ee:V[H]=ee}return[O,V,{}]}st(St,"defaultProps",F({},C)),st(St,"displayName","ReactConfetti");var jt=u.a.forwardRef(function(M,O){return u.a.createElement(St,z({canvasRef:O},M))});i.default=jt}]).default})})(Hy);var J8=Hy.exports;const ek=Mi(J8),tk=P.div`
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
`,nk=P.header`
    display: flex;
    gap: 5px;
`,ct=P(({isActive:e,...t})=>c.jsx(r1,{...t}))`
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
    border-radius: var(--border--radius--btn);
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
`,et=P.span`
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
`,rk=P.div`
    opacity: ${({isVisible:e})=>e?1:0};
    transition: opacity 1s ease-out;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
`,Mg=P(ct)`
    background: ${({isActive:e})=>e?"linear-gradient(45deg, #ff6b6b, #f06595, #eeafaf)":"transparent"};
    color: ${({isActive:e})=>e?"white":"var(--color--black)"};

    &:hover {
        background: linear-gradient(45deg, #f06595, #ff6b6b, #eeafaf);
        color: white;
    }
`,ik=P.div`
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
        border-radius: 10px;

        & > img {
            width: 25%;
            height: 100%;
            object-fit: contain;
        }

        & > button {
            display: flex;
            width: 30%;
            border-radius: 5px;
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
`,ok=P.div`
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
`,ak=()=>{const e=Rr(),[t,n]=T.useState(!1),[r,i]=T.useState(!1),[o,a]=T.useState(!1),[s,l]=T.useState(!1),[u,d]=T.useState(!1);let p;const f=()=>{l(y=>!y),d(y=>!y)},v=()=>{l(!1),d(!1)},x=()=>{a(!0),clearTimeout(p),p=setTimeout(()=>{a(!1)},3e3)};return T.useEffect(()=>(window.addEventListener("scroll",x),()=>{window.removeEventListener("scroll",x),clearTimeout(p)}),[]),T.useEffect(()=>{if(e.pathname==="/event"){n(!0),i(!0);const y=setTimeout(()=>{i(!1),setTimeout(()=>n(!1),1e3)},5e3);return()=>clearTimeout(y)}else i(!1),setTimeout(()=>n(!1),1e3)},[e.pathname]),c.jsxs(c.Fragment,{children:[c.jsxs(tk,{isScrolled:o,children:[t&&c.jsx(rk,{isVisible:r,children:c.jsx(ek,{})}),c.jsx(r1,{to:"/","aria-label":"Home",children:c.jsxs("picture",{children:[c.jsx("source",{media:"(max-width: 480px)",srcSet:$r}),c.jsx("source",{media:"(max-width: 768px)",srcSet:$r}),c.jsx("source",{media:"(min-width: 769px)",srcSet:$r}),c.jsx("img",{src:$r,alt:"Logo da Empresa",style:{maxHeight:"40px"}})]})}),c.jsxs(nk,{children:[c.jsxs(ct,{to:"/",isActive:e.pathname==="/",children:[c.jsx(et,{isVisible:e.pathname==="/",children:c.jsx(Ym,{})}),"Início"]}),c.jsxs(ct,{to:"/sobre",isActive:e.pathname==="/sobre",children:[c.jsx(et,{isVisible:e.pathname==="/sobre",children:c.jsx(Km,{})}),"Sobre nós"]}),c.jsxs(ct,{to:"/mar",variant:"mar",isActive:e.pathname==="/mar",children:[c.jsx(et,{isVisible:e.pathname==="/mar",children:c.jsx(Gm,{})}),"Le Ange Mar"]}),c.jsxs(ct,{to:"/serra",variant:"serra",isActive:e.pathname==="/serra",children:[c.jsx(et,{isVisible:e.pathname==="/serra",children:c.jsx(Xm,{})}),"Le Ange Serra"]}),c.jsxs(ct,{to:"/home/#pacotes",isActive:e.pathname==="/home/#pacotes",children:[c.jsx(et,{isVisible:e.pathname==="/home/#pacotes",children:c.jsx(un,{})}),"Pacotes"]}),c.jsxs(Mg,{to:"/event",isActive:e.pathname==="/event",children:[c.jsx(et,{isVisible:e.pathname==="/event",children:c.jsx(qm,{})}),"Eventos"]}),c.jsxs(ct,{to:"/acomoda",isActive:e.pathname==="/acomoda",children:[c.jsx(et,{isVisible:e.pathname==="/acomoda",children:c.jsx(un,{})}),"Acomodações"]})]}),c.jsx(Vn,{text:"Fazer minha reserva"})]}),c.jsxs(ik,{isScrolled:o,children:[c.jsx("img",{src:$r,alt:"logo da le ange"}),c.jsxs("button",{onClick:f,isClicked:u,children:["Menu",c.jsx(Z8,{})]})]}),c.jsxs(ok,{isOpen:s,children:[c.jsx("button",{onClick:v,children:"X"}),c.jsx("img",{src:$r,alt:"logo da le ange"}),c.jsxs("div",{children:[c.jsxs(ct,{to:"/",isActive:e.pathname==="/",onClick:v,children:[c.jsx(et,{isVisible:e.pathname==="/",children:c.jsx(Ym,{})}),"Início"]}),c.jsxs(ct,{to:"/sobre",isActive:e.pathname==="/sobre",onClick:v,children:[c.jsx(et,{isVisible:e.pathname==="/sobre",children:c.jsx(Km,{})}),"Sobre nós"]}),c.jsxs(ct,{to:"/mar",variant:"mar",isActive:e.pathname==="/mar",onClick:v,children:[c.jsx(et,{isVisible:e.pathname==="/mar",children:c.jsx(Gm,{})}),"Le Ange Mar"]}),c.jsxs(ct,{to:"/serra",variant:"serra",isActive:e.pathname==="/serra",onClick:v,children:[c.jsx(et,{isVisible:e.pathname==="/serra",children:c.jsx(Xm,{})}),"Le Ange Serra"]}),c.jsxs(ct,{to:"/home/#pacotes",isActive:e.pathname==="/home/#pacotes",onClick:v,children:[c.jsx(et,{isVisible:e.pathname==="/home/#pacotes",children:c.jsx(un,{})}),"Pacotes"]}),c.jsxs(Mg,{to:"/event",isActive:e.pathname==="/event",onClick:v,children:[c.jsx(et,{isVisible:e.pathname==="/event",children:c.jsx(qm,{})}),"Eventos"]}),c.jsxs(ct,{to:"/acomoda",isActive:e.pathname==="/acomoda",onClick:v,children:[c.jsx(et,{isVisible:e.pathname==="/acomoda",children:c.jsx(un,{})}),"Acomodações"]})]}),c.jsx(Vn,{text:"Fazer minha reserva"})]})]})},sk=P.button`
  position: relative;
  overflow: hidden;
  outline: none;
  cursor: pointer;
  border-radius: 50px;
  background-color: transparent;
  border: solid 4px var(--color--black);
  color: var(--color--black);
  font-family: inherit;

  &:hover .default-btn {
    transform: translate(0%, -100%);
  }

  &:hover .hover-btn {
    transform: translate(0%, 0%);
  }
`,Uy=P.div`
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  gap: 10px;
  padding: 10px 40px;
  border-radius: 50px;
  font-size: 15px;
  font-weight: 500;
  transition: transform 0.3s ease; /* Adicionei a transição para o transform */
`,lk=P(Uy)`
  position: absolute;
  inset: 0;
  background-color: var(--color--blue);
  transform: translate(0%, 100%);
`,ck=P.span`
color: var(--color--black);
`,uk=P.span`
  color: var(--color--white);
`,Wy=({text:e="Quick View",text2:t="Shop Now"})=>c.jsxs(sk,{children:[c.jsxs(Uy,{className:"default-btn",children:[c.jsx(_C,{size:15,color:"var(--color--black)"}),c.jsx(ck,{children:e})]}),c.jsxs(lk,{className:"hover-btn",children:[c.jsx(OC,{size:15,color:"var(--color--white)"}),c.jsx(uk,{children:t})]})]});function Gy(e){return le({tag:"svg",attr:{viewBox:"0 0 15 15",fill:"none"},child:[{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M0.5 0C0.223858 0 0 0.223858 0 0.5V14.5C0 14.7761 0.223858 15 0.5 15H4.5C4.77614 15 5 14.7761 5 14.5V5H14.5C14.7761 5 15 4.77614 15 4.5V0.5C15 0.223858 14.7761 0 14.5 0H0.5ZM1 4.07505L1 1H4.07502C4.07502 1 4.07502 1 4.07502 1L4.07505 4.07507L1 4.07505ZM0.999997 4.92505L1 14H4V12.925H2.75002C2.5153 12.925 2.32502 12.7348 2.32502 12.5C2.32502 12.2653 2.5153 12.075 2.75002 12.075H4V10.925H2.25002C2.0153 10.925 1.82502 10.7347 1.82502 10.5C1.82502 10.2653 2.0153 10.075 2.25002 10.075H4V8.92504L2.75002 8.92502C2.5153 8.92502 2.32502 8.73474 2.32502 8.50002C2.32503 8.26529 2.51531 8.07502 2.75003 8.07502L4 8.07504V6.92502L2.74999 6.925C2.51527 6.925 2.325 6.73472 2.325 6.5C2.325 6.26528 2.51529 6.075 2.75001 6.075L4 6.07502V4.92507L0.999997 4.92505ZM4.92505 4H6.075V2.75006C6.075 2.51534 6.26528 2.32506 6.5 2.32506C6.73472 2.32506 6.925 2.51534 6.925 2.75006V4H8.07502V2.75005C8.07502 2.51533 8.2653 2.32505 8.50002 2.32505C8.73474 2.32505 8.92502 2.51533 8.92502 2.75005V4H10.0751V2.25005C10.0751 2.01533 10.2653 1.82505 10.5001 1.82505C10.7348 1.82505 10.9251 2.01533 10.9251 2.25005V4H12.0751V2.75005C12.0751 2.51533 12.2654 2.32505 12.5001 2.32505C12.7348 2.32505 12.9251 2.51533 12.9251 2.75005V4H14V1H4.92502L4.92505 4Z",fill:"currentColor"},child:[]}]})(e)}function qy(e){return le({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",strokeWidth:"2",d:"M12,13 C14.209139,13 16,11.209139 16,9 C16,6.790861 14.209139,5 12,5 C9.790861,5 8,6.790861 8,9 C8,11.209139 9.790861,13 12,13 Z M6,22 L6,19 C6,15.6862915 8.6862915,13 12,13 C15.3137085,13 18,15.6862915 18,19 L18,22 M13,5 C13.4037285,3.33566165 15.0151447,2 17,2 C19.172216,2 20.98052,3.790861 21,6 C20.98052,8.209139 19.172216,10 17,10 L16,10 L17,10 C20.287544,10 23,12.6862915 23,16 L23,18 M11,5 C10.5962715,3.33566165 8.98485529,2 7,2 C4.82778404,2 3.01948003,3.790861 3,6 C3.01948003,8.209139 4.82778404,10 7,10 L8,10 L7,10 C3.71245602,10 1,12.6862915 1,16 L1,18"},child:[]}]})(e)}const dk=P.section`
    width: 100%;
    padding: 0 5%;
    display: flex;
    align-items: center;
    justify-content: center;
`,pk=P.section`
    width: 100%;
    height: 85vh;
    display: flex;
    align-items: center;
    gap: 20px;
    justify-content: space-between;

    @media (max-width: 768px){
        height: 125vh;
        justify-content: center;
        flex-direction: column-reverse;
    }
`,fk=P.div`
    width: 50%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 5px;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px){
        width: 100%;
        height: 50vh;
    }
`,hk=P.img`
    width: 100%;
    height: 80%;
    border-radius: 0px 10px 0 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    object-fit: cover;

    @media (max-width: 768px){
        height: 70%;        
    }
`,mk=P.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    height: 20%;

    @media (max-width: 768px){
        height: 30%;
    }
`,gk=P.img`
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
`,vk=P.main`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;
    gap: 50px;
    padding: 20px;
    border: 2px solid var(--color--black);
    border-radius: 0px 30px 0px 30px;
    
    @media (max-width: 768px){
        width: 100%;
        border: 1px solid var(--color--black);
        padding: 30px 20px;
        height: 70vh;
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
            font-family: var(--font--avenir);
            font-size: 1.2em;
            color: var(--color--black);

            @media (max-width: 768px){
                font-size: 1rem;

                width: 100%;
                text-align: center;
            }
        }
    }

    & > section > div:nth-child(2){
        width: 100%;
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
`,xk=P.h2`
    font-size: 2rem;
    color: var(--color--black);
    font-family: var(--font--comfortaa);

    @media (max-width: 768px){
        display: none;
    }
`,yk=P.p`
    font-size: 1rem;
    color: var(--color--black); 
    
    @media (max-width: 768px){
        font-size: 0.8rem;
    }
`,wk=P.div`
    display: flex;
    align-items: center;
    gap: 15px; 
    width: 50%;

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
`,bk=P.div`
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
        font-size: 12px;
        transition: all .2s ease;

        @media (max-width: 768px){
            font-size: 10px;
            font-weight: 300;
            padding: 6px 10px;
        }
        
        &:hover {
            color: var(--color--white);
            background-color: var(--color--black);
            cursor: default;
        }
    }

    svg {
        font-size: 16px;

        @media (max-width: 768px){
            font-size: 12px;
        }
    }
`,Sk=P.div`
    position: absolute;
    bottom: 50px; /* Distância do fundo */
    right: 25px; /* Distância da direita */
    display: flex;
    width: 10%;
    gap: 5px; /* Espaçamento entre os botões */

    @media (max-width: 768px){
        right: 15px;
        width: 25%;
        bottom: 40px;
    }
`,Lg=P.div`
    background-color: var(--color--black);
    color: white;
    padding: 15px; /* Tamanho do botão */
    border-radius: 50%;
    cursor: pointer;
    transition: background-color 0.3s;
    display: flex; /* Flexbox para centralizar o ícone */
    align-items: center; /* Centraliza verticalmente */
    justify-content: center; /* Centraliza horizontalmente */
    width: 50px; /* Largura do botão */
    height: 50px; /* Altura do botão */

    @media (max-width: 768px){
        width: 30px;
        height: 30px;
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
`,jk=P.div`
    height: 12vh;

    @media (max-width: 768px){
        height: 4vh;
    }
`,Ck=({suites:e})=>c.jsxs(c.Fragment,{children:[c.jsx(Cn,{children:c.jsx("title",{children:"Acomodações - Pousada Le Ange"})}),c.jsx(jk,{}),c.jsx(dk,{children:c.jsxs(vt,{navigation:{nextEl:".swiper-button-next.custom",prevEl:".swiper-button-prev.custom"},pagination:!1,spaceBetween:20,modules:[Pn,En],children:[e.map((t,n)=>{const[r,i]=T.useState(t.images[0]);return c.jsx(xt,{children:c.jsxs(pk,{children:[c.jsxs(fk,{children:[c.jsx(hk,{src:r,alt:t.NomedaSuite}),c.jsx(mk,{children:t.images.map((o,a)=>c.jsx(gk,{src:o,alt:`Thumbnail ${a+1}`,onClick:()=>i(o),className:r===o?"active":""},a))})]}),c.jsxs(vk,{children:[c.jsxs("section",{children:[c.jsxs("div",{children:[c.jsx(xk,{children:t.NomedaPousada}),c.jsxs("p",{children:["Suíte: ",t.NomedaSuite]})]}),c.jsx("div",{children:c.jsx("hr",{})})]}),c.jsx(bk,{children:t.features.map((o,a)=>c.jsxs("span",{children:[o.icon," ",o.text]},a))}),c.jsxs(wk,{children:[c.jsxs("div",{children:[c.jsx(Gy,{size:30})," ",t.medida]}),c.jsxs("div",{children:[c.jsx(qy,{size:30})," ",t.adultos]})]}),c.jsx(yk,{children:t.Description}),c.jsx(Wy,{text:"Fazer reserva!",text2:"Vamos lá!"})]})]})},n)}),c.jsxs(Sk,{children:[c.jsx(Lg,{className:"swiper-button-prev custom",children:c.jsx(Iy,{})}),c.jsx(Lg,{className:"swiper-button-next custom",children:c.jsx(Ry,{})})]})]})})]}),Tk=P.section`
    width: 100%;
    padding: 0 5%;
    display: flex;
    align-items: center;
    justify-content: center;
`,Pk=P.section`
    width: 100%;
    height: 85vh;
    display: flex;
    align-items: center;
    gap: 20px;
    justify-content: space-between;

    @media (max-width: 768px){
        height: 125vh;
        justify-content: center;
        flex-direction: column-reverse;
    }
`,Ek=P.div`
    width: 50%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 5px;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px){
        width: 100%;
        height: 50vh;
    }
`,kk=P.img`
    width: 100%;
    height: 80%;
    border-radius: 0px 10px 0 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    object-fit: cover;

    @media (max-width: 768px){
        height: 70%;        
    }
`,zk=P.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    height: 20%;

    @media (max-width: 768px){
        height: 30%;
    }
`,Ak=P.img`
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
`,Mk=P.main`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;
    gap: 50px;
    padding: 20px;
    border: 2px solid var(--color--black);
    border-radius: 0px 30px 0px 30px;

    @media (max-width: 768px){
        width: 100%;
        border: 1px solid var(--color--black);
        padding: 30px 20px;
        height: 70vh;
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
            font-family: var(--font--avenir);
            font-size: 1.2em;
            color: var(--color--black);

            @media (max-width: 768px){
                font-size: 1rem;

                width: 100%;
                text-align: center;
            }
        }
    }

    & > section > div:nth-child(2){
        width: 100%;
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
`,Lk=P.h2`
    font-size: 2rem;
    color: var(--color--black);
    font-family: var(--font--comfortaa);

    @media (max-width: 768px){
        display: none;
    }
`,_k=P.p`
    font-size: 1rem;
    color: var(--color--black); 

    @media (max-width: 768px){
        font-size: 0.8rem;
    }
`,Ok=P.div`
    display: flex;
    align-items: center;
    gap: 15px; 
    width: 50%;

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
`,Ik=P.div`
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
        font-size: 12px;
        transition: all .2s ease;

        @media (max-width: 768px){
            font-size: 10px;
            font-weight: 300;
            padding: 6px 10px;
        }
        
        &:hover {
            color: var(--color--white);
            background-color: var(--color--black);
            cursor: default;
        }
    }

    svg {
        font-size: 16px;

        @media (max-width: 768px){
            font-size: 12px;
        }
    }
`,Rk=P.div`
    position: absolute;
    bottom: 50px; /* Distância do fundo */
    right: 25px; /* Distância da direita */
    display: flex;
    width: 10%;
    gap: 5px; /* Espaçamento entre os botões */

    @media (max-width: 768px){
        right: 15px;
        width: 25%;
        bottom: 40px;
    }
`,_g=P.div`
    background-color: var(--color--black);
    color: white;
    padding: 15px; /* Tamanho do botão */
    border-radius: 50%;
    cursor: pointer;
    transition: background-color 0.3s;
    display: flex; /* Flexbox para centralizar o ícone */
    align-items: center; /* Centraliza verticalmente */
    justify-content: center; /* Centraliza horizontalmente */
    width: 50px; /* Largura do botão */
    height: 50px; /* Altura do botão */

    @media (max-width: 768px){
        width: 30px;
        height: 30px;
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
`,Vk=P.div`
    height: 5vh;

    @media (max-width: 768px){
        height: 4vh;
    }
`,Dk=({suites:e})=>c.jsxs(c.Fragment,{children:[c.jsx(Cn,{children:c.jsx("title",{children:"Acomodações - Pousada Le Ange"})}),c.jsx(Vk,{}),c.jsx(Tk,{children:c.jsxs(vt,{navigation:{nextEl:".swiper-button-next.custom",prevEl:".swiper-button-prev.custom"},pagination:!1,spaceBetween:20,modules:[Pn,En],children:[e.map((t,n)=>{const[r,i]=T.useState(t.images[0]);return c.jsx(xt,{children:c.jsxs(Pk,{children:[c.jsxs(Mk,{children:[c.jsxs("section",{children:[c.jsxs("div",{children:[c.jsx(Lk,{children:t.NomedaPousada}),c.jsxs("p",{children:["Suíte: ",t.NomedaSuite]})]}),c.jsx("div",{children:c.jsx("hr",{})})]}),c.jsx(Ik,{children:t.features.map((o,a)=>c.jsxs("span",{children:[o.icon," ",o.text]},a))}),c.jsxs(Ok,{children:[c.jsxs("div",{children:[c.jsx(Gy,{size:30})," ",t.medida]}),c.jsxs("div",{children:[c.jsx(qy,{size:30})," ",t.adultos]})]}),c.jsx(_k,{children:t.Description}),c.jsx(Wy,{text:"Fazer reserva!",text2:"Vamos lá!"})]}),c.jsxs(Ek,{children:[c.jsx(kk,{src:r,alt:t.NomedaSuite}),c.jsx(zk,{children:t.images.map((o,a)=>c.jsx(Ak,{src:o,alt:`Thumbnail ${a+1}`,onClick:()=>i(o),className:r===o?"active":""},a))})]})]})},n)}),c.jsxs(Rk,{children:[c.jsx(_g,{className:"swiper-button-prev custom",children:c.jsx(Iy,{})}),c.jsx(_g,{className:"swiper-button-next custom",children:c.jsx(Ry,{})})]})]})}),c.jsx(sa,{})]}),Nk=[{NomedaSuite:"Suíte Superior 1",NomedaPousada:"Le Ange Serra",medida:"52m²",adultos:"Até 3 adultos",Description:"Desfrute de uma suíte ampla de 52m² com cama King Size, ar-condicionado e lareira para momentos de aconchego. A varanda privativa oferece vista para a natureza, e o banheiro conta com banheira relaxante e aquecedor de toalhas para maior conforto.",features:[{icon:c.jsx(j,{}),text:"Ar condicionado"},{icon:c.jsx(j,{}),text:"Frigobar"},{icon:c.jsx(j,{}),text:"Lareira"},{icon:c.jsx(j,{}),text:"Chaleira elétrica"},{icon:c.jsx(j,{}),text:"Smart TV"},{icon:c.jsx(j,{}),text:"Cama king size"},{icon:c.jsx(j,{}),text:"Banheira relaxante"},{icon:c.jsx(j,{}),text:"Chuveiro"},{icon:c.jsx(j,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(j,{}),text:"Cuba única"},{icon:c.jsx(j,{}),text:"Varanda privativa"}],images:["https://res.cloudinary.com/dupg7clzc/image/upload/v1730133147/suiteSuperior1_gpjls0.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730145067/1_o5yez9.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730145067/3_aiyrqa.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730145067/4_ywuuuc.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730145067/5_onjzk1.jpg"]},{NomedaSuite:"Suíte Superior 2",NomedaPousada:"Le Ange Serra",medida:"52m²",adultos:"Até 3 adultos",Description:"Descubra o conforto em 52m² de pura exclusividade: cama King Size, ar-condicionado e lareira para dias de descanso perfeitos. Aproveite a varanda privativa com vista para a mata e o relaxamento de uma banheira especial no banheiro equipado com aquecedor de toalhas. Além disso, a suíte oferece conveniências como frigobar, chaleira elétrica e Smart TV com canais a cabo para uma estadia completa.",features:[{icon:c.jsx(j,{}),text:"Cama king size"},{icon:c.jsx(j,{}),text:"Ar condicionado"},{icon:c.jsx(j,{}),text:"Lareira"},{icon:c.jsx(j,{}),text:"Frigobar"},{icon:c.jsx(j,{}),text:"Chaleira elétrica"},{icon:c.jsx(j,{}),text:"Smart TV"},{icon:c.jsx(j,{}),text:"Banheira relaxante"},{icon:c.jsx(j,{}),text:"Chuveiro"},{icon:c.jsx(j,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(j,{}),text:"Cuba única"},{icon:c.jsx(j,{}),text:"Varanda privativa"}],images:["https://res.cloudinary.com/dupg7clzc/image/upload/v1730145605/1_x3uulk.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730145605/2_o7w1df.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730145605/3_u2ikyj.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730145605/4_wte9h1.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730145605/5_olm5xn.jpg"]},{NomedaSuite:"Suíte Superior 3",NomedaPousada:"Le Ange Serra",medida:"52m²",adultos:"Até 3 adultos",Description:"Aproveite 52m² de puro conforto com uma cama King Size e o aconchego de uma lareira. A varanda privativa revela uma vista deslumbrante para a mata, enquanto o banheiro oferece uma banheira relaxante e aquecedor de toalhas. Equipado com frigobar, chaleira elétrica e Smart TV com canais a cabo, este espaço foi projetado para momentos de tranquilidade e comodidade.",features:[{icon:c.jsx(j,{}),text:"Ar condicionado"},{icon:c.jsx(j,{}),text:"Lareira"},{icon:c.jsx(j,{}),text:"Frigobar"},{icon:c.jsx(j,{}),text:"Chaleira elétrica"},{icon:c.jsx(j,{}),text:"Smart TV"},{icon:c.jsx(j,{}),text:"Banheira relaxante"},{icon:c.jsx(j,{}),text:"Chuveiro"},{icon:c.jsx(j,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(j,{}),text:"Cuba única"},{icon:c.jsx(j,{}),text:"Varanda privativa"}],images:["https://res.cloudinary.com/dupg7clzc/image/upload/v1730145754/1_ylximp.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730145754/3_drrdp6.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730145754/2_naq3yx.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730145753/4_lpovtm.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730145753/5_tsqexf.jpg"]},{NomedaSuite:"Suíte Standard 4",NomedaPousada:"Le Ange Serra",medida:"52m²",adultos:"Até 3 adultos",Description:"Mergulhe no conforto de uma suíte de 52m² com cama King Size, ar-condicionado e lareira para dias de descanso. Relaxe na banheira com vista para a mata e aproveite o banheiro com chuveiro e aquecedor de toalhas. Com frigobar e Smart TV a cabo, além de uma varanda com vista compartilhada, esta acomodação combina praticidade e tranquilidade em cada detalhe.",features:[{icon:c.jsx(j,{}),text:"Ar condicionado"},{icon:c.jsx(j,{}),text:"Lareira"},{icon:c.jsx(j,{}),text:"Frigobar"},{icon:c.jsx(j,{}),text:"Chaleira elétrica"},{icon:c.jsx(j,{}),text:"Smart TV"},{icon:c.jsx(j,{}),text:"Banheira relaxante"},{icon:c.jsx(j,{}),text:"Chuveiro"},{icon:c.jsx(j,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(j,{}),text:"Cuba única"},{icon:c.jsx(j,{}),text:"Varanda privativa"}],images:["https://res.cloudinary.com/dupg7clzc/image/upload/v1730145996/1_s9b5nq.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730145996/2_hyhg8t.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730145971/3_s0ig5c.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730145971/4_oppeg3.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730145971/5_kb5ean.jpg"]},{NomedaSuite:"Suíte Standard 5",NomedaPousada:"Le Ange Serra",medida:"52m²",adultos:"Até 4 adultos",Description:"Descrição da suíte 2.",features:[{icon:c.jsx(j,{}),text:"Ar condicionado"},{icon:c.jsx(j,{}),text:"Lareira"},{icon:c.jsx(j,{}),text:"Frigobar"},{icon:c.jsx(j,{}),text:"Chaleira elétrica"},{icon:c.jsx(j,{}),text:"Smart TV"},{icon:c.jsx(j,{}),text:"Banheira relaxante"},{icon:c.jsx(j,{}),text:"Chuveiro"},{icon:c.jsx(j,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(j,{}),text:"Cuba única"},{icon:c.jsx(j,{}),text:"Varanda privativa"}],images:["https://res.cloudinary.com/dupg7clzc/image/upload/v1730146196/1_rnbhj2.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730146195/2_msj4wh.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730146193/4_rdcxvu.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730146194/3_b8v99f.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730146193/5_cwrlxp.jpg"]},{NomedaSuite:"Suíte Master 6",NomedaPousada:"Le Ange Serra",medida:"77m²",adultos:"Até 4 adultos",Description:"Experimente o luxo em uma suíte de 77m² com cama King Size, ar-condicionado e uma lareira acolhedora. Descanse na chaise lounge junto à Bay Window, aproveite o frigobar e a Smart TV com canais a cabo, ou relaxe na banheira com vista para a mata. O banheiro sofisticado conta com chuveiro, aquecedor de toalhas e dupla cuba, enquanto a ampla varanda privativa é perfeita para apreciar a paisagem em total privacidade.",features:[{icon:c.jsx(j,{}),text:"Ar condicionado"},{icon:c.jsx(j,{}),text:"Lareira"},{icon:c.jsx(j,{}),text:"Chaise lounge"},{icon:c.jsx(j,{}),text:"Bay window"},{icon:c.jsx(j,{}),text:"Frigobar"},{icon:c.jsx(j,{}),text:"Chaleira elétrica"},{icon:c.jsx(j,{}),text:"Smart TV"},{icon:c.jsx(j,{}),text:"Banheira relaxante"},{icon:c.jsx(j,{}),text:"Chuveiro"},{icon:c.jsx(j,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(j,{}),text:"Cuba única"},{icon:c.jsx(j,{}),text:"Ampla varanda privativa"}],images:["https://res.cloudinary.com/dupg7clzc/image/upload/v1730146446/1_ytelar.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730146445/2_y07hp1.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730146444/3_ennrfl.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730146443/4_nmnmdm.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730146443/5_zjbujo.jpg"]},{NomedaSuite:"Suíte Standard 7",NomedaPousada:"Le Ange Serra",medida:"52m²",adultos:"Até 4 adultos",Description:"Relaxe em uma suíte de 52m² projetada para o seu conforto: cama King Size, ar-condicionado e lareira que criam o ambiente perfeito. Desfrute de momentos únicos na banheira com vista para a mata e aproveite o frigobar e a Smart TV com canais a cabo. Com chuveiro e aquecedor de toalhas, além de uma varanda com vista compartilhada, esta acomodação combina charme e comodidade para sua estadia.",features:[{icon:c.jsx(j,{}),text:"Ar condicionado"},{icon:c.jsx(j,{}),text:"Cama king size"},{icon:c.jsx(j,{}),text:"Lareira"},{icon:c.jsx(j,{}),text:"Frigobar"},{icon:c.jsx(j,{}),text:"Smart TV"},{icon:c.jsx(j,{}),text:"Banheira relaxante"},{icon:c.jsx(j,{}),text:"Chuveiro"},{icon:c.jsx(j,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(j,{}),text:"Cuba única"},{icon:c.jsx(j,{}),text:"Varanda NÃO privativa"}],images:["https://res.cloudinary.com/dupg7clzc/image/upload/v1730146635/1_r9brij.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730146632/2_lp3nwj.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730146632/3_hahgqj.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730146193/4_rdcxvu.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730146631/4_hstjdq.jpg"]},{NomedaSuite:"Suíte Standard 8",NomedaPousada:"Le Ange Serra",medida:"52m²",adultos:"Até 4 adultos",Description:"Relaxe em uma suíte de 52m² projetada para o seu conforto: cama King Size, ar-condicionado e lareira que criam o ambiente perfeito. Desfrute de momentos únicos na banheira com vista para a mata e aproveite o frigobar e a Smart TV com canais a cabo. Com chuveiro e aquecedor de toalhas, além de uma varanda com vista compartilhada, esta acomodação combina charme e comodidade para sua estadia.",features:[{icon:c.jsx(j,{}),text:"Ar condicionado"},{icon:c.jsx(j,{}),text:"Cama king size"},{icon:c.jsx(j,{}),text:"Lareira"},{icon:c.jsx(j,{}),text:"Frigobar"},{icon:c.jsx(j,{}),text:"Smart TV"},{icon:c.jsx(j,{}),text:"Banheira relaxante"},{icon:c.jsx(j,{}),text:"Chuveiro"},{icon:c.jsx(j,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(j,{}),text:"Cuba única"},{icon:c.jsx(j,{}),text:"Varanda NÃO privativa"}],images:["https://res.cloudinary.com/dupg7clzc/image/upload/v1730146991/1_deflqw.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730146989/3_apyt83.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730146989/2_vtsru4.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730146988/4_a4uhie.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730146988/5_s3imtf.jpg"]},{NomedaSuite:"Suíte Superior 9",NomedaPousada:"Le Ange Serra",medida:"52m²",adultos:"Até 4 adultos",Description:"Relaxe em uma suíte de 52m² projetada para o seu conforto: cama King Size, ar-condicionado e lareira que criam o ambiente perfeito. Desfrute de momentos únicos na banheira com vista para a mata e aproveite o frigobar e a Smart TV com canais a cabo. Com chuveiro e aquecedor de toalhas, além de uma varanda com vista compartilhada, esta acomodação combina charme e comodidade para sua estadia.",features:[{icon:c.jsx(j,{}),text:"Ar condicionado"},{icon:c.jsx(j,{}),text:"Cama king size"},{icon:c.jsx(j,{}),text:"Lareira"},{icon:c.jsx(j,{}),text:"Frigobar"},{icon:c.jsx(j,{}),text:"Smart TV"},{icon:c.jsx(j,{}),text:"Chaleira elétrica"},{icon:c.jsx(j,{}),text:"Banheira relaxante"},{icon:c.jsx(j,{}),text:"Chuveiro"},{icon:c.jsx(j,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(j,{}),text:"Cuba única"},{icon:c.jsx(j,{}),text:"Varanda privativa"}],images:["https://res.cloudinary.com/dupg7clzc/image/upload/v1730147149/1_ougeas.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730147149/2_qiphp1.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730147149/3_x7jhml.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730147146/4_ams1oh.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730147147/5_texuuu.jpg"]},{NomedaSuite:"Suíte Master 10",NomedaPousada:"Le Ange Serra",medida:"77m²",adultos:"Até 4 adultos",Description:"Viva o conforto em uma suíte de 77m² equipada com cama King Size, ar-condicionado e lareira para momentos de puro relaxamento. Desfrute de um recamier, poltrona de leitura e um confortável couch lounge, ideais para descanso e lazer. A banheira relaxante oferece uma vista única para a mata, enquanto o banheiro conta com chuveiro, aquecedor de toalhas e dupla cuba. Para completar, uma ampla varanda privativa permite que você aprecie a paisagem com total exclusividade.",features:[{icon:c.jsx(j,{}),text:"Ar condicionado"},{icon:c.jsx(j,{}),text:"Cama king size"},{icon:c.jsx(j,{}),text:"Recamier e poltrona de leitura"},{icon:c.jsx(j,{}),text:"Lareira"},{icon:c.jsx(j,{}),text:"Couch lounge"},{icon:c.jsx(j,{}),text:"Frigobar"},{icon:c.jsx(j,{}),text:"Smart TV"},{icon:c.jsx(j,{}),text:"Chaleira elétrica"},{icon:c.jsx(j,{}),text:"Banheira relaxante"},{icon:c.jsx(j,{}),text:"Chuveiro"},{icon:c.jsx(j,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(j,{}),text:"Cuba para casal (dupla)"},{icon:c.jsx(j,{}),text:"Ampla varanda privativa"}],images:["https://res.cloudinary.com/dupg7clzc/image/upload/v1730147346/1_lj4tav.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730147345/2_rwd1oh.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730147344/3_hybfzc.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730147342/4_p052an.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730147342/5_aqbze0.jpg"]}],Bk=[{NomedaSuite:"Suíte Superior 1",NomedaPousada:"Le Ange Mar",medida:"28m²",adultos:"Até 3 adultos",Description:"Descrição da suíte 1.",features:[{icon:c.jsx(j,{}),text:"Ar condicionado"},{icon:c.jsx(j,{}),text:"Frigobar"},{icon:c.jsx(j,{}),text:"Lareira"},{icon:c.jsx(j,{}),text:"Chaleira elétrica"},{icon:c.jsx(j,{}),text:"Smart TV"},{icon:c.jsx(j,{}),text:"Cama king size"},{icon:c.jsx(j,{}),text:"Banheira relaxante"},{icon:c.jsx(j,{}),text:"Chuveiro"},{icon:c.jsx(j,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(j,{}),text:"Cuba única"},{icon:c.jsx(j,{}),text:"Varanda privativa"}],images:["https://res.cloudinary.com/dupg7clzc/image/upload/v1730149632/1_jbfcfw.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730149631/2_avh1mm.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730149632/4_j3c1yo.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730149634/3_kplwmw.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730149633/5_bw0qou.jpg"]},{NomedaSuite:"Suíte Standard 2",NomedaPousada:"Le Ange Mar",medida:"30m²",adultos:"Até 4 adultos",Description:"Descrição da suíte 2.",features:[{icon:c.jsx(j,{}),text:"Ar condicionado"},{icon:c.jsx(j,{}),text:"Frigobar"},{icon:c.jsx(j,{}),text:"Lareira"},{icon:c.jsx(j,{}),text:"Chaleira elétrica"},{icon:c.jsx(j,{}),text:"Smart TV"},{icon:c.jsx(j,{}),text:"Cama king size"},{icon:c.jsx(j,{}),text:"Banheira relaxante"},{icon:c.jsx(j,{}),text:"Chuveiro"},{icon:c.jsx(j,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(j,{}),text:"Cuba única"},{icon:c.jsx(j,{}),text:"Varanda privativa"}],images:["https://res.cloudinary.com/dupg7clzc/image/upload/v1730149728/2_uonrhf.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730149729/3_ysfzuk.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730149732/5_dub0pj.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730149708/1_ofu5mj.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730149729/4_ulr721.jpg"]},{NomedaSuite:"Suíte Superior 3",NomedaPousada:"Le Ange Mar",medida:"32m²",adultos:"Até 2 adultos",Description:"Descrição da suíte 3.",features:[{icon:c.jsx(j,{}),text:"Ar condicionado"},{icon:c.jsx(j,{}),text:"Frigobar"},{icon:c.jsx(j,{}),text:"Lareira"},{icon:c.jsx(j,{}),text:"Chaleira elétrica"},{icon:c.jsx(j,{}),text:"Smart TV"},{icon:c.jsx(j,{}),text:"Cama king size"},{icon:c.jsx(j,{}),text:"Banheira relaxante"},{icon:c.jsx(j,{}),text:"Chuveiro"},{icon:c.jsx(j,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(j,{}),text:"Cuba única"},{icon:c.jsx(j,{}),text:"Varanda privativa"}],images:["https://res.cloudinary.com/dupg7clzc/image/upload/v1730149783/1_mkvfcp.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730149785/2_ciuk0m.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730149786/3_njizit.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730149785/5_mjfm3k.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730149786/4_d5kp62.jpg"]},{NomedaSuite:"Suíte Superior 4",NomedaPousada:"Le Ange Mar",medida:"32m²",adultos:"Até 2 adultos",Description:"Descrição da suíte 3.",features:[{icon:c.jsx(j,{}),text:"Ar condicionado"},{icon:c.jsx(j,{}),text:"Frigobar"},{icon:c.jsx(j,{}),text:"Lareira"},{icon:c.jsx(j,{}),text:"Chaleira elétrica"},{icon:c.jsx(j,{}),text:"Smart TV"},{icon:c.jsx(j,{}),text:"Cama king size"},{icon:c.jsx(j,{}),text:"Banheira relaxante"},{icon:c.jsx(j,{}),text:"Chuveiro"},{icon:c.jsx(j,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(j,{}),text:"Cuba única"},{icon:c.jsx(j,{}),text:"Varanda privativa"}],images:["https://res.cloudinary.com/dupg7clzc/image/upload/v1730149834/1_znboil.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730149834/2_edqaq4.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730149836/3_srrc1g.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730149837/4_k1afap.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730149838/5_lxdgp4.jpg"]},{NomedaSuite:"Suíte Superior 5",NomedaPousada:"Le Ange Mar",medida:"32m²",adultos:"Até 2 adultos",Description:"Descrição da suíte 3.",features:[{icon:c.jsx(j,{}),text:"Ar condicionado"},{icon:c.jsx(j,{}),text:"Frigobar"},{icon:c.jsx(j,{}),text:"Lareira"},{icon:c.jsx(j,{}),text:"Chaleira elétrica"},{icon:c.jsx(j,{}),text:"Smart TV"},{icon:c.jsx(j,{}),text:"Cama king size"},{icon:c.jsx(j,{}),text:"Banheira relaxante"},{icon:c.jsx(j,{}),text:"Chuveiro"},{icon:c.jsx(j,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(j,{}),text:"Cuba única"},{icon:c.jsx(j,{}),text:"Varanda privativa"}],images:["https://res.cloudinary.com/dupg7clzc/image/upload/v1730149916/1_ztjmyc.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730149922/5_dkyssi.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730149916/2_djdgbx.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730149921/4_rg0jvi.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730149917/3_hkxuyr.jpg"]},{NomedaSuite:"Suíte Standard 6",NomedaPousada:"Le Ange Mar",medida:"32m²",adultos:"Até 2 adultos",Description:"Descrição da suíte 3.",features:[{icon:c.jsx(j,{}),text:"Ar condicionado"},{icon:c.jsx(j,{}),text:"Frigobar"},{icon:c.jsx(j,{}),text:"Lareira"},{icon:c.jsx(j,{}),text:"Chaleira elétrica"},{icon:c.jsx(j,{}),text:"Smart TV"},{icon:c.jsx(j,{}),text:"Cama king size"},{icon:c.jsx(j,{}),text:"Banheira relaxante"},{icon:c.jsx(j,{}),text:"Chuveiro"},{icon:c.jsx(j,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(j,{}),text:"Cuba única"},{icon:c.jsx(j,{}),text:"Varanda privativa"}],images:["https://res.cloudinary.com/dupg7clzc/image/upload/v1730149976/1_tywkpb.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730149977/2_yvfwhn.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730149982/5_b7dida.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730149980/4_p22p1t.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730149978/3_zpt6tw.jpg"]},{NomedaSuite:"Suíte Master 7",NomedaPousada:"Le Ange Mar",medida:"32m²",adultos:"Até 2 adultos",Description:"Descrição da suíte 3.",features:[{icon:c.jsx(j,{}),text:"Ar condicionado"},{icon:c.jsx(j,{}),text:"Frigobar"},{icon:c.jsx(j,{}),text:"Lareira"},{icon:c.jsx(j,{}),text:"Chaleira elétrica"},{icon:c.jsx(j,{}),text:"Smart TV"},{icon:c.jsx(j,{}),text:"Cama king size"},{icon:c.jsx(j,{}),text:"Banheira relaxante"},{icon:c.jsx(j,{}),text:"Chuveiro"},{icon:c.jsx(j,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(j,{}),text:"Cuba única"},{icon:c.jsx(j,{}),text:"Varanda privativa"}],images:["https://res.cloudinary.com/dupg7clzc/image/upload/v1730150026/1_usupcb.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730150032/5_v3dnrs.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730150032/4_n9wkv0.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730150029/3_pjp0sr.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730150027/2_egxqmp.jpg"]},{NomedaSuite:"Suíte Master 8",NomedaPousada:"Le Ange Mar",medida:"32m²",adultos:"Até 2 adultos",Description:"Descrição da suíte 3.",features:[{icon:c.jsx(j,{}),text:"Ar condicionado"},{icon:c.jsx(j,{}),text:"Frigobar"},{icon:c.jsx(j,{}),text:"Lareira"},{icon:c.jsx(j,{}),text:"Chaleira elétrica"},{icon:c.jsx(j,{}),text:"Smart TV"},{icon:c.jsx(j,{}),text:"Cama king size"},{icon:c.jsx(j,{}),text:"Banheira relaxante"},{icon:c.jsx(j,{}),text:"Chuveiro"},{icon:c.jsx(j,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(j,{}),text:"Cuba única"},{icon:c.jsx(j,{}),text:"Varanda privativa"}],images:["https://res.cloudinary.com/dupg7clzc/image/upload/v1730150383/1_pcudqj.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730150385/2_itizcf.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730150388/4_netqeh.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730150389/5_ntad9j.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730150385/3_bzklvq.jpg"]}],Fk=()=>c.jsxs(c.Fragment,{children:[c.jsx(Ck,{suites:Nk}),c.jsx(Dk,{suites:Bk})]});function $k(){const{pathname:e}=Rr();return T.useEffect(()=>{window.scrollTo(0,0)},[e]),null}function Hk(){const e=Rr();return c.jsxs(c.Fragment,{children:[c.jsx($k,{}),c.jsx(W4,{children:c.jsxs(pS,{location:e,children:[c.jsx(ur,{path:"/",element:c.jsx(U.div,{initial:{opacity:0,scale:.8,rotateY:90},animate:{opacity:1,scale:1,rotateY:0},exit:{opacity:0,scale:.8,rotateY:-90},transition:{duration:.2,ease:"easeInOut"},children:c.jsx(ME,{})})}),c.jsx(ur,{path:"/sobre",element:c.jsx(U.div,{initial:{opacity:0,scale:.8,rotateY:90},animate:{opacity:1,scale:1,rotateY:0},exit:{opacity:0,scale:.8,rotateY:-90},transition:{duration:.2,ease:"easeInOut"},children:c.jsx(YE,{})})}),c.jsx(ur,{path:"/mar",element:c.jsx(U.div,{initial:{opacity:0,scale:.8,rotateY:90},animate:{opacity:1,scale:1,rotateY:0},exit:{opacity:0,scale:.8,rotateY:-90},transition:{duration:.2,ease:"easeInOut"},children:c.jsx(Q8,{})})}),c.jsx(ur,{path:"/serra",element:c.jsx(U.div,{initial:{opacity:0,scale:.8,rotateY:90},animate:{opacity:1,scale:1,rotateY:0},exit:{opacity:0,scale:.8,rotateY:-90},transition:{duration:.2,ease:"easeInOut"},children:c.jsx(V8,{})})}),c.jsx(ur,{path:"/event",element:c.jsx(U.div,{initial:{opacity:0,scale:.8,rotateY:90},animate:{opacity:1,scale:1,rotateY:0},exit:{opacity:0,scale:.8,rotateY:-90},transition:{duration:.2,ease:"easeInOut"},children:c.jsx(VE,{})})}),c.jsx(ur,{path:"/acomoda",element:c.jsx(U.div,{initial:{opacity:0,scale:.8,rotateY:90},animate:{opacity:1,scale:1,rotateY:0},exit:{opacity:0,scale:.8,rotateY:-90},transition:{duration:.2,ease:"easeInOut"},children:c.jsx(Fk,{})})})]},e.pathname)})]})}function Uk(){return c.jsxs(yS,{children:[c.jsx(ak,{}),c.jsx(Hk,{})]})}Gv(document.getElementById("root")).render(c.jsx(T.StrictMode,{children:c.jsx(Uk,{})}));
