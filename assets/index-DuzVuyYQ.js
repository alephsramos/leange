function a2(e,t){for(var n=0;n<t.length;n++){const i=t[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in e)){const a=Object.getOwnPropertyDescriptor(i,r);a&&Object.defineProperty(e,r,a.get?a:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=n(r);fetch(r.href,a)}})();var Zm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Bi(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Jm={exports:{}},sl={},eg={exports:{}},ie={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ao=Symbol.for("react.element"),o2=Symbol.for("react.portal"),s2=Symbol.for("react.fragment"),l2=Symbol.for("react.strict_mode"),c2=Symbol.for("react.profiler"),d2=Symbol.for("react.provider"),u2=Symbol.for("react.context"),f2=Symbol.for("react.forward_ref"),p2=Symbol.for("react.suspense"),h2=Symbol.for("react.memo"),m2=Symbol.for("react.lazy"),jp=Symbol.iterator;function g2(e){return e===null||typeof e!="object"?null:(e=jp&&e[jp]||e["@@iterator"],typeof e=="function"?e:null)}var tg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ng=Object.assign,ig={};function $r(e,t,n){this.props=e,this.context=t,this.refs=ig,this.updater=n||tg}$r.prototype.isReactComponent={};$r.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};$r.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function rg(){}rg.prototype=$r.prototype;function Tu(e,t,n){this.props=e,this.context=t,this.refs=ig,this.updater=n||tg}var Au=Tu.prototype=new rg;Au.constructor=Tu;ng(Au,$r.prototype);Au.isPureReactComponent=!0;var Cp=Array.isArray,ag=Object.prototype.hasOwnProperty,Eu={current:null},og={key:!0,ref:!0,__self:!0,__source:!0};function sg(e,t,n){var i,r={},a=null,o=null;if(t!=null)for(i in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(a=""+t.key),t)ag.call(t,i)&&!og.hasOwnProperty(i)&&(r[i]=t[i]);var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){for(var l=Array(s),d=0;d<s;d++)l[d]=arguments[d+2];r.children=l}if(e&&e.defaultProps)for(i in s=e.defaultProps,s)r[i]===void 0&&(r[i]=s[i]);return{$$typeof:ao,type:e,key:a,ref:o,props:r,_owner:Eu.current}}function v2(e,t){return{$$typeof:ao,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Pu(e){return typeof e=="object"&&e!==null&&e.$$typeof===ao}function x2(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var kp=/\/+/g;function Kl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?x2(""+e.key):t.toString(36)}function Wo(e,t,n,i,r){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(a){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case ao:case o2:o=!0}}if(o)return o=e,r=r(o),e=i===""?"."+Kl(o,0):i,Cp(r)?(n="",e!=null&&(n=e.replace(kp,"$&/")+"/"),Wo(r,t,n,"",function(d){return d})):r!=null&&(Pu(r)&&(r=v2(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(kp,"$&/")+"/")+e)),t.push(r)),1;if(o=0,i=i===""?".":i+":",Cp(e))for(var s=0;s<e.length;s++){a=e[s];var l=i+Kl(a,s);o+=Wo(a,t,n,l,r)}else if(l=g2(e),typeof l=="function")for(e=l.call(e),s=0;!(a=e.next()).done;)a=a.value,l=i+Kl(a,s++),o+=Wo(a,t,n,l,r);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function yo(e,t,n){if(e==null)return e;var i=[],r=0;return Wo(e,i,"","",function(a){return t.call(n,a,r++)}),i}function y2(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ft={current:null},qo={transition:null},w2={ReactCurrentDispatcher:ft,ReactCurrentBatchConfig:qo,ReactCurrentOwner:Eu};function lg(){throw Error("act(...) is not supported in production builds of React.")}ie.Children={map:yo,forEach:function(e,t,n){yo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return yo(e,function(){t++}),t},toArray:function(e){return yo(e,function(t){return t})||[]},only:function(e){if(!Pu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ie.Component=$r;ie.Fragment=s2;ie.Profiler=c2;ie.PureComponent=Tu;ie.StrictMode=l2;ie.Suspense=p2;ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=w2;ie.act=lg;ie.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var i=ng({},e.props),r=e.key,a=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,o=Eu.current),t.key!==void 0&&(r=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)ag.call(t,l)&&!og.hasOwnProperty(l)&&(i[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){s=Array(l);for(var d=0;d<l;d++)s[d]=arguments[d+2];i.children=s}return{$$typeof:ao,type:e.type,key:r,ref:a,props:i,_owner:o}};ie.createContext=function(e){return e={$$typeof:u2,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:d2,_context:e},e.Consumer=e};ie.createElement=sg;ie.createFactory=function(e){var t=sg.bind(null,e);return t.type=e,t};ie.createRef=function(){return{current:null}};ie.forwardRef=function(e){return{$$typeof:f2,render:e}};ie.isValidElement=Pu;ie.lazy=function(e){return{$$typeof:m2,_payload:{_status:-1,_result:e},_init:y2}};ie.memo=function(e,t){return{$$typeof:h2,type:e,compare:t===void 0?null:t}};ie.startTransition=function(e){var t=qo.transition;qo.transition={};try{e()}finally{qo.transition=t}};ie.unstable_act=lg;ie.useCallback=function(e,t){return ft.current.useCallback(e,t)};ie.useContext=function(e){return ft.current.useContext(e)};ie.useDebugValue=function(){};ie.useDeferredValue=function(e){return ft.current.useDeferredValue(e)};ie.useEffect=function(e,t){return ft.current.useEffect(e,t)};ie.useId=function(){return ft.current.useId()};ie.useImperativeHandle=function(e,t,n){return ft.current.useImperativeHandle(e,t,n)};ie.useInsertionEffect=function(e,t){return ft.current.useInsertionEffect(e,t)};ie.useLayoutEffect=function(e,t){return ft.current.useLayoutEffect(e,t)};ie.useMemo=function(e,t){return ft.current.useMemo(e,t)};ie.useReducer=function(e,t,n){return ft.current.useReducer(e,t,n)};ie.useRef=function(e){return ft.current.useRef(e)};ie.useState=function(e){return ft.current.useState(e)};ie.useSyncExternalStore=function(e,t,n){return ft.current.useSyncExternalStore(e,t,n)};ie.useTransition=function(){return ft.current.useTransition()};ie.version="18.3.1";eg.exports=ie;var j=eg.exports;const ee=Bi(j),b2=a2({__proto__:null,default:ee},[j]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var S2=j,j2=Symbol.for("react.element"),C2=Symbol.for("react.fragment"),k2=Object.prototype.hasOwnProperty,T2=S2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,A2={key:!0,ref:!0,__self:!0,__source:!0};function cg(e,t,n){var i,r={},a=null,o=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(o=t.ref);for(i in t)k2.call(t,i)&&!A2.hasOwnProperty(i)&&(r[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps,t)r[i]===void 0&&(r[i]=t[i]);return{$$typeof:j2,type:e,key:a,ref:o,props:r,_owner:T2.current}}sl.Fragment=C2;sl.jsx=cg;sl.jsxs=cg;Jm.exports=sl;var c=Jm.exports,dg={exports:{}},Et={},ug={exports:{}},fg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(M,V){var $=M.length;M.push(V);e:for(;0<$;){var K=$-1>>>1,J=M[K];if(0<r(J,V))M[K]=V,M[$]=J,$=K;else break e}}function n(M){return M.length===0?null:M[0]}function i(M){if(M.length===0)return null;var V=M[0],$=M.pop();if($!==V){M[0]=$;e:for(var K=0,J=M.length,ye=J>>>1;K<ye;){var pe=2*(K+1)-1,Ce=M[pe],ue=pe+1,le=M[ue];if(0>r(Ce,$))ue<J&&0>r(le,Ce)?(M[K]=le,M[ue]=$,K=ue):(M[K]=Ce,M[pe]=$,K=pe);else if(ue<J&&0>r(le,$))M[K]=le,M[ue]=$,K=ue;else break e}}return V}function r(M,V){var $=M.sortIndex-V.sortIndex;return $!==0?$:M.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var l=[],d=[],u=1,f=null,p=3,g=!1,x=!1,y=!1,b=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(M){for(var V=n(d);V!==null;){if(V.callback===null)i(d);else if(V.startTime<=M)i(d),V.sortIndex=V.expirationTime,t(l,V);else break;V=n(d)}}function w(M){if(y=!1,m(M),!x)if(n(l)!==null)x=!0,Z(S);else{var V=n(d);V!==null&&Y(w,V.startTime-M)}}function S(M,V){x=!1,y&&(y=!1,v(T),T=-1),g=!0;var $=p;try{for(m(V),f=n(l);f!==null&&(!(f.expirationTime>V)||M&&!P());){var K=f.callback;if(typeof K=="function"){f.callback=null,p=f.priorityLevel;var J=K(f.expirationTime<=V);V=e.unstable_now(),typeof J=="function"?f.callback=J:f===n(l)&&i(l),m(V)}else i(l);f=n(l)}if(f!==null)var ye=!0;else{var pe=n(d);pe!==null&&Y(w,pe.startTime-V),ye=!1}return ye}finally{f=null,p=$,g=!1}}var C=!1,A=null,T=-1,z=5,E=-1;function P(){return!(e.unstable_now()-E<z)}function _(){if(A!==null){var M=e.unstable_now();E=M;var V=!0;try{V=A(!0,M)}finally{V?I():(C=!1,A=null)}}else C=!1}var I;if(typeof h=="function")I=function(){h(_)};else if(typeof MessageChannel<"u"){var R=new MessageChannel,U=R.port2;R.port1.onmessage=_,I=function(){U.postMessage(null)}}else I=function(){b(_,0)};function Z(M){A=M,C||(C=!0,I())}function Y(M,V){T=b(function(){M(e.unstable_now())},V)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(M){M.callback=null},e.unstable_continueExecution=function(){x||g||(x=!0,Z(S))},e.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<M?Math.floor(1e3/M):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(M){switch(p){case 1:case 2:case 3:var V=3;break;default:V=p}var $=p;p=V;try{return M()}finally{p=$}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(M,V){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var $=p;p=M;try{return V()}finally{p=$}},e.unstable_scheduleCallback=function(M,V,$){var K=e.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?K+$:K):$=K,M){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=$+J,M={id:u++,callback:V,priorityLevel:M,startTime:$,expirationTime:J,sortIndex:-1},$>K?(M.sortIndex=$,t(d,M),n(l)===null&&M===n(d)&&(y?(v(T),T=-1):y=!0,Y(w,$-K))):(M.sortIndex=J,t(l,M),x||g||(x=!0,Z(S))),M},e.unstable_shouldYield=P,e.unstable_wrapCallback=function(M){var V=p;return function(){var $=p;p=V;try{return M.apply(this,arguments)}finally{p=$}}}})(fg);ug.exports=fg;var E2=ug.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var P2=j,Tt=E2;function N(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var pg=new Set,La={};function Hi(e,t){Ar(e,t),Ar(e+"Capture",t)}function Ar(e,t){for(La[e]=t,e=0;e<t.length;e++)pg.add(t[e])}var Mn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Qc=Object.prototype.hasOwnProperty,G2=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Tp={},Ap={};function z2(e){return Qc.call(Ap,e)?!0:Qc.call(Tp,e)?!1:G2.test(e)?Ap[e]=!0:(Tp[e]=!0,!1)}function _2(e,t,n,i){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function M2(e,t,n,i){if(t===null||typeof t>"u"||_2(e,t,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function pt(e,t,n,i,r,a,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var et={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){et[e]=new pt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];et[t]=new pt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){et[e]=new pt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){et[e]=new pt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){et[e]=new pt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){et[e]=new pt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){et[e]=new pt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){et[e]=new pt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){et[e]=new pt(e,5,!1,e.toLowerCase(),null,!1,!1)});var Gu=/[\-:]([a-z])/g;function zu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Gu,zu);et[t]=new pt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Gu,zu);et[t]=new pt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Gu,zu);et[t]=new pt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){et[e]=new pt(e,1,!1,e.toLowerCase(),null,!1,!1)});et.xlinkHref=new pt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){et[e]=new pt(e,1,!1,e.toLowerCase(),null,!0,!0)});function _u(e,t,n,i){var r=et.hasOwnProperty(t)?et[t]:null;(r!==null?r.type!==0:i||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(M2(t,n,r,i)&&(n=null),i||r===null?z2(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):r.mustUseProperty?e[r.propertyName]=n===null?r.type===3?!1:"":n:(t=r.attributeName,i=r.attributeNamespace,n===null?e.removeAttribute(t):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?e.setAttributeNS(i,t,n):e.setAttribute(t,n))))}var Dn=P2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,wo=Symbol.for("react.element"),er=Symbol.for("react.portal"),tr=Symbol.for("react.fragment"),Mu=Symbol.for("react.strict_mode"),Zc=Symbol.for("react.profiler"),hg=Symbol.for("react.provider"),mg=Symbol.for("react.context"),Lu=Symbol.for("react.forward_ref"),Jc=Symbol.for("react.suspense"),ed=Symbol.for("react.suspense_list"),Ou=Symbol.for("react.memo"),Hn=Symbol.for("react.lazy"),gg=Symbol.for("react.offscreen"),Ep=Symbol.iterator;function Zr(e){return e===null||typeof e!="object"?null:(e=Ep&&e[Ep]||e["@@iterator"],typeof e=="function"?e:null)}var Pe=Object.assign,Xl;function ua(e){if(Xl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Xl=t&&t[1]||""}return`
`+Xl+e}var Ql=!1;function Zl(e,t){if(!e||Ql)return"";Ql=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var i=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){i=d}e.call(t.prototype)}else{try{throw Error()}catch(d){i=d}e()}}catch(d){if(d&&i&&typeof d.stack=="string"){for(var r=d.stack.split(`
`),a=i.stack.split(`
`),o=r.length-1,s=a.length-1;1<=o&&0<=s&&r[o]!==a[s];)s--;for(;1<=o&&0<=s;o--,s--)if(r[o]!==a[s]){if(o!==1||s!==1)do if(o--,s--,0>s||r[o]!==a[s]){var l=`
`+r[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=o&&0<=s);break}}}finally{Ql=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ua(e):""}function L2(e){switch(e.tag){case 5:return ua(e.type);case 16:return ua("Lazy");case 13:return ua("Suspense");case 19:return ua("SuspenseList");case 0:case 2:case 15:return e=Zl(e.type,!1),e;case 11:return e=Zl(e.type.render,!1),e;case 1:return e=Zl(e.type,!0),e;default:return""}}function td(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case tr:return"Fragment";case er:return"Portal";case Zc:return"Profiler";case Mu:return"StrictMode";case Jc:return"Suspense";case ed:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case mg:return(e.displayName||"Context")+".Consumer";case hg:return(e._context.displayName||"Context")+".Provider";case Lu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ou:return t=e.displayName||null,t!==null?t:td(e.type)||"Memo";case Hn:t=e._payload,e=e._init;try{return td(e(t))}catch{}}return null}function O2(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return td(t);case 8:return t===Mu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function li(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function vg(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function I2(e){var t=vg(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),i=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,a.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function bo(e){e._valueTracker||(e._valueTracker=I2(e))}function xg(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=vg(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function gs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function nd(e,t){var n=t.checked;return Pe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Pp(e,t){var n=t.defaultValue==null?"":t.defaultValue,i=t.checked!=null?t.checked:t.defaultChecked;n=li(t.value!=null?t.value:n),e._wrapperState={initialChecked:i,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function yg(e,t){t=t.checked,t!=null&&_u(e,"checked",t,!1)}function id(e,t){yg(e,t);var n=li(t.value),i=t.type;if(n!=null)i==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(i==="submit"||i==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?rd(e,t.type,n):t.hasOwnProperty("defaultValue")&&rd(e,t.type,li(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Gp(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var i=t.type;if(!(i!=="submit"&&i!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function rd(e,t,n){(t!=="number"||gs(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var fa=Array.isArray;function xr(e,t,n,i){if(e=e.options,t){t={};for(var r=0;r<n.length;r++)t["$"+n[r]]=!0;for(n=0;n<e.length;n++)r=t.hasOwnProperty("$"+e[n].value),e[n].selected!==r&&(e[n].selected=r),r&&i&&(e[n].defaultSelected=!0)}else{for(n=""+li(n),t=null,r=0;r<e.length;r++){if(e[r].value===n){e[r].selected=!0,i&&(e[r].defaultSelected=!0);return}t!==null||e[r].disabled||(t=e[r])}t!==null&&(t.selected=!0)}}function ad(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(N(91));return Pe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function zp(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(N(92));if(fa(n)){if(1<n.length)throw Error(N(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:li(n)}}function wg(e,t){var n=li(t.value),i=li(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),i!=null&&(e.defaultValue=""+i)}function _p(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function bg(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function od(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?bg(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var So,Sg=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,i,r){MSApp.execUnsafeLocalFunction(function(){return e(t,n,i,r)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(So=So||document.createElement("div"),So.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=So.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Oa(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var xa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},R2=["Webkit","ms","Moz","O"];Object.keys(xa).forEach(function(e){R2.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),xa[t]=xa[e]})});function jg(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||xa.hasOwnProperty(e)&&xa[e]?(""+t).trim():t+"px"}function Cg(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=jg(n,t[n],i);n==="float"&&(n="cssFloat"),i?e.setProperty(n,r):e[n]=r}}var D2=Pe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function sd(e,t){if(t){if(D2[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(N(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(N(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(N(61))}if(t.style!=null&&typeof t.style!="object")throw Error(N(62))}}function ld(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var cd=null;function Iu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var dd=null,yr=null,wr=null;function Mp(e){if(e=lo(e)){if(typeof dd!="function")throw Error(N(280));var t=e.stateNode;t&&(t=fl(t),dd(e.stateNode,e.type,t))}}function kg(e){yr?wr?wr.push(e):wr=[e]:yr=e}function Tg(){if(yr){var e=yr,t=wr;if(wr=yr=null,Mp(e),t)for(e=0;e<t.length;e++)Mp(t[e])}}function Ag(e,t){return e(t)}function Eg(){}var Jl=!1;function Pg(e,t,n){if(Jl)return e(t,n);Jl=!0;try{return Ag(e,t,n)}finally{Jl=!1,(yr!==null||wr!==null)&&(Eg(),Tg())}}function Ia(e,t){var n=e.stateNode;if(n===null)return null;var i=fl(n);if(i===null)return null;n=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(N(231,t,typeof n));return n}var ud=!1;if(Mn)try{var Jr={};Object.defineProperty(Jr,"passive",{get:function(){ud=!0}}),window.addEventListener("test",Jr,Jr),window.removeEventListener("test",Jr,Jr)}catch{ud=!1}function V2(e,t,n,i,r,a,o,s,l){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(u){this.onError(u)}}var ya=!1,vs=null,xs=!1,fd=null,N2={onError:function(e){ya=!0,vs=e}};function F2(e,t,n,i,r,a,o,s,l){ya=!1,vs=null,V2.apply(N2,arguments)}function $2(e,t,n,i,r,a,o,s,l){if(F2.apply(this,arguments),ya){if(ya){var d=vs;ya=!1,vs=null}else throw Error(N(198));xs||(xs=!0,fd=d)}}function Ui(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Gg(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Lp(e){if(Ui(e)!==e)throw Error(N(188))}function B2(e){var t=e.alternate;if(!t){if(t=Ui(e),t===null)throw Error(N(188));return t!==e?null:e}for(var n=e,i=t;;){var r=n.return;if(r===null)break;var a=r.alternate;if(a===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===a.child){for(a=r.child;a;){if(a===n)return Lp(r),e;if(a===i)return Lp(r),t;a=a.sibling}throw Error(N(188))}if(n.return!==i.return)n=r,i=a;else{for(var o=!1,s=r.child;s;){if(s===n){o=!0,n=r,i=a;break}if(s===i){o=!0,i=r,n=a;break}s=s.sibling}if(!o){for(s=a.child;s;){if(s===n){o=!0,n=a,i=r;break}if(s===i){o=!0,i=a,n=r;break}s=s.sibling}if(!o)throw Error(N(189))}}if(n.alternate!==i)throw Error(N(190))}if(n.tag!==3)throw Error(N(188));return n.stateNode.current===n?e:t}function zg(e){return e=B2(e),e!==null?_g(e):null}function _g(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=_g(e);if(t!==null)return t;e=e.sibling}return null}var Mg=Tt.unstable_scheduleCallback,Op=Tt.unstable_cancelCallback,H2=Tt.unstable_shouldYield,U2=Tt.unstable_requestPaint,Le=Tt.unstable_now,W2=Tt.unstable_getCurrentPriorityLevel,Ru=Tt.unstable_ImmediatePriority,Lg=Tt.unstable_UserBlockingPriority,ys=Tt.unstable_NormalPriority,q2=Tt.unstable_LowPriority,Og=Tt.unstable_IdlePriority,ll=null,dn=null;function Y2(e){if(dn&&typeof dn.onCommitFiberRoot=="function")try{dn.onCommitFiberRoot(ll,e,void 0,(e.current.flags&128)===128)}catch{}}var Yt=Math.clz32?Math.clz32:Q2,K2=Math.log,X2=Math.LN2;function Q2(e){return e>>>=0,e===0?32:31-(K2(e)/X2|0)|0}var jo=64,Co=4194304;function pa(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ws(e,t){var n=e.pendingLanes;if(n===0)return 0;var i=0,r=e.suspendedLanes,a=e.pingedLanes,o=n&268435455;if(o!==0){var s=o&~r;s!==0?i=pa(s):(a&=o,a!==0&&(i=pa(a)))}else o=n&~r,o!==0?i=pa(o):a!==0&&(i=pa(a));if(i===0)return 0;if(t!==0&&t!==i&&!(t&r)&&(r=i&-i,a=t&-t,r>=a||r===16&&(a&4194240)!==0))return t;if(i&4&&(i|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=i;0<t;)n=31-Yt(t),r=1<<n,i|=e[n],t&=~r;return i}function Z2(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function J2(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,r=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-Yt(a),s=1<<o,l=r[o];l===-1?(!(s&n)||s&i)&&(r[o]=Z2(s,t)):l<=t&&(e.expiredLanes|=s),a&=~s}}function pd(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ig(){var e=jo;return jo<<=1,!(jo&4194240)&&(jo=64),e}function ec(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function oo(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Yt(t),e[t]=n}function ew(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var i=e.eventTimes;for(e=e.expirationTimes;0<n;){var r=31-Yt(n),a=1<<r;t[r]=0,i[r]=-1,e[r]=-1,n&=~a}}function Du(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-Yt(n),r=1<<i;r&t|e[i]&t&&(e[i]|=t),n&=~r}}var de=0;function Rg(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Dg,Vu,Vg,Ng,Fg,hd=!1,ko=[],Zn=null,Jn=null,ei=null,Ra=new Map,Da=new Map,Wn=[],tw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ip(e,t){switch(e){case"focusin":case"focusout":Zn=null;break;case"dragenter":case"dragleave":Jn=null;break;case"mouseover":case"mouseout":ei=null;break;case"pointerover":case"pointerout":Ra.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Da.delete(t.pointerId)}}function ea(e,t,n,i,r,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:a,targetContainers:[r]},t!==null&&(t=lo(t),t!==null&&Vu(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,r!==null&&t.indexOf(r)===-1&&t.push(r),e)}function nw(e,t,n,i,r){switch(t){case"focusin":return Zn=ea(Zn,e,t,n,i,r),!0;case"dragenter":return Jn=ea(Jn,e,t,n,i,r),!0;case"mouseover":return ei=ea(ei,e,t,n,i,r),!0;case"pointerover":var a=r.pointerId;return Ra.set(a,ea(Ra.get(a)||null,e,t,n,i,r)),!0;case"gotpointercapture":return a=r.pointerId,Da.set(a,ea(Da.get(a)||null,e,t,n,i,r)),!0}return!1}function $g(e){var t=Ti(e.target);if(t!==null){var n=Ui(t);if(n!==null){if(t=n.tag,t===13){if(t=Gg(n),t!==null){e.blockedOn=t,Fg(e.priority,function(){Vg(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Yo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=md(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);cd=i,n.target.dispatchEvent(i),cd=null}else return t=lo(n),t!==null&&Vu(t),e.blockedOn=n,!1;t.shift()}return!0}function Rp(e,t,n){Yo(e)&&n.delete(t)}function iw(){hd=!1,Zn!==null&&Yo(Zn)&&(Zn=null),Jn!==null&&Yo(Jn)&&(Jn=null),ei!==null&&Yo(ei)&&(ei=null),Ra.forEach(Rp),Da.forEach(Rp)}function ta(e,t){e.blockedOn===t&&(e.blockedOn=null,hd||(hd=!0,Tt.unstable_scheduleCallback(Tt.unstable_NormalPriority,iw)))}function Va(e){function t(r){return ta(r,e)}if(0<ko.length){ta(ko[0],e);for(var n=1;n<ko.length;n++){var i=ko[n];i.blockedOn===e&&(i.blockedOn=null)}}for(Zn!==null&&ta(Zn,e),Jn!==null&&ta(Jn,e),ei!==null&&ta(ei,e),Ra.forEach(t),Da.forEach(t),n=0;n<Wn.length;n++)i=Wn[n],i.blockedOn===e&&(i.blockedOn=null);for(;0<Wn.length&&(n=Wn[0],n.blockedOn===null);)$g(n),n.blockedOn===null&&Wn.shift()}var br=Dn.ReactCurrentBatchConfig,bs=!0;function rw(e,t,n,i){var r=de,a=br.transition;br.transition=null;try{de=1,Nu(e,t,n,i)}finally{de=r,br.transition=a}}function aw(e,t,n,i){var r=de,a=br.transition;br.transition=null;try{de=4,Nu(e,t,n,i)}finally{de=r,br.transition=a}}function Nu(e,t,n,i){if(bs){var r=md(e,t,n,i);if(r===null)dc(e,t,i,Ss,n),Ip(e,i);else if(nw(r,e,t,n,i))i.stopPropagation();else if(Ip(e,i),t&4&&-1<tw.indexOf(e)){for(;r!==null;){var a=lo(r);if(a!==null&&Dg(a),a=md(e,t,n,i),a===null&&dc(e,t,i,Ss,n),a===r)break;r=a}r!==null&&i.stopPropagation()}else dc(e,t,i,null,n)}}var Ss=null;function md(e,t,n,i){if(Ss=null,e=Iu(i),e=Ti(e),e!==null)if(t=Ui(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Gg(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ss=e,null}function Bg(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(W2()){case Ru:return 1;case Lg:return 4;case ys:case q2:return 16;case Og:return 536870912;default:return 16}default:return 16}}var Yn=null,Fu=null,Ko=null;function Hg(){if(Ko)return Ko;var e,t=Fu,n=t.length,i,r="value"in Yn?Yn.value:Yn.textContent,a=r.length;for(e=0;e<n&&t[e]===r[e];e++);var o=n-e;for(i=1;i<=o&&t[n-i]===r[a-i];i++);return Ko=r.slice(e,1<i?1-i:void 0)}function Xo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function To(){return!0}function Dp(){return!1}function Pt(e){function t(n,i,r,a,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=a,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(a):a[s]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?To:Dp,this.isPropagationStopped=Dp,this}return Pe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=To)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=To)},persist:function(){},isPersistent:To}),t}var Br={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$u=Pt(Br),so=Pe({},Br,{view:0,detail:0}),ow=Pt(so),tc,nc,na,cl=Pe({},so,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==na&&(na&&e.type==="mousemove"?(tc=e.screenX-na.screenX,nc=e.screenY-na.screenY):nc=tc=0,na=e),tc)},movementY:function(e){return"movementY"in e?e.movementY:nc}}),Vp=Pt(cl),sw=Pe({},cl,{dataTransfer:0}),lw=Pt(sw),cw=Pe({},so,{relatedTarget:0}),ic=Pt(cw),dw=Pe({},Br,{animationName:0,elapsedTime:0,pseudoElement:0}),uw=Pt(dw),fw=Pe({},Br,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),pw=Pt(fw),hw=Pe({},Br,{data:0}),Np=Pt(hw),mw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},gw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},vw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function xw(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=vw[e])?!!t[e]:!1}function Bu(){return xw}var yw=Pe({},so,{key:function(e){if(e.key){var t=mw[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Xo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?gw[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bu,charCode:function(e){return e.type==="keypress"?Xo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Xo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ww=Pt(yw),bw=Pe({},cl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Fp=Pt(bw),Sw=Pe({},so,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bu}),jw=Pt(Sw),Cw=Pe({},Br,{propertyName:0,elapsedTime:0,pseudoElement:0}),kw=Pt(Cw),Tw=Pe({},cl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Aw=Pt(Tw),Ew=[9,13,27,32],Hu=Mn&&"CompositionEvent"in window,wa=null;Mn&&"documentMode"in document&&(wa=document.documentMode);var Pw=Mn&&"TextEvent"in window&&!wa,Ug=Mn&&(!Hu||wa&&8<wa&&11>=wa),$p=" ",Bp=!1;function Wg(e,t){switch(e){case"keyup":return Ew.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function qg(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var nr=!1;function Gw(e,t){switch(e){case"compositionend":return qg(t);case"keypress":return t.which!==32?null:(Bp=!0,$p);case"textInput":return e=t.data,e===$p&&Bp?null:e;default:return null}}function zw(e,t){if(nr)return e==="compositionend"||!Hu&&Wg(e,t)?(e=Hg(),Ko=Fu=Yn=null,nr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ug&&t.locale!=="ko"?null:t.data;default:return null}}var _w={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!_w[e.type]:t==="textarea"}function Yg(e,t,n,i){kg(i),t=js(t,"onChange"),0<t.length&&(n=new $u("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var ba=null,Na=null;function Mw(e){a1(e,0)}function dl(e){var t=ar(e);if(xg(t))return e}function Lw(e,t){if(e==="change")return t}var Kg=!1;if(Mn){var rc;if(Mn){var ac="oninput"in document;if(!ac){var Up=document.createElement("div");Up.setAttribute("oninput","return;"),ac=typeof Up.oninput=="function"}rc=ac}else rc=!1;Kg=rc&&(!document.documentMode||9<document.documentMode)}function Wp(){ba&&(ba.detachEvent("onpropertychange",Xg),Na=ba=null)}function Xg(e){if(e.propertyName==="value"&&dl(Na)){var t=[];Yg(t,Na,e,Iu(e)),Pg(Mw,t)}}function Ow(e,t,n){e==="focusin"?(Wp(),ba=t,Na=n,ba.attachEvent("onpropertychange",Xg)):e==="focusout"&&Wp()}function Iw(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return dl(Na)}function Rw(e,t){if(e==="click")return dl(t)}function Dw(e,t){if(e==="input"||e==="change")return dl(t)}function Vw(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Qt=typeof Object.is=="function"?Object.is:Vw;function Fa(e,t){if(Qt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Qc.call(t,r)||!Qt(e[r],t[r]))return!1}return!0}function qp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Yp(e,t){var n=qp(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=qp(n)}}function Qg(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Qg(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Zg(){for(var e=window,t=gs();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=gs(e.document)}return t}function Uu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Nw(e){var t=Zg(),n=e.focusedElem,i=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Qg(n.ownerDocument.documentElement,n)){if(i!==null&&Uu(n)){if(t=i.start,e=i.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var r=n.textContent.length,a=Math.min(i.start,r);i=i.end===void 0?a:Math.min(i.end,r),!e.extend&&a>i&&(r=i,i=a,a=r),r=Yp(n,a);var o=Yp(n,i);r&&o&&(e.rangeCount!==1||e.anchorNode!==r.node||e.anchorOffset!==r.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(r.node,r.offset),e.removeAllRanges(),a>i?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Fw=Mn&&"documentMode"in document&&11>=document.documentMode,ir=null,gd=null,Sa=null,vd=!1;function Kp(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;vd||ir==null||ir!==gs(i)||(i=ir,"selectionStart"in i&&Uu(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Sa&&Fa(Sa,i)||(Sa=i,i=js(gd,"onSelect"),0<i.length&&(t=new $u("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=ir)))}function Ao(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var rr={animationend:Ao("Animation","AnimationEnd"),animationiteration:Ao("Animation","AnimationIteration"),animationstart:Ao("Animation","AnimationStart"),transitionend:Ao("Transition","TransitionEnd")},oc={},Jg={};Mn&&(Jg=document.createElement("div").style,"AnimationEvent"in window||(delete rr.animationend.animation,delete rr.animationiteration.animation,delete rr.animationstart.animation),"TransitionEvent"in window||delete rr.transitionend.transition);function ul(e){if(oc[e])return oc[e];if(!rr[e])return e;var t=rr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Jg)return oc[e]=t[n];return e}var e1=ul("animationend"),t1=ul("animationiteration"),n1=ul("animationstart"),i1=ul("transitionend"),r1=new Map,Xp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function fi(e,t){r1.set(e,t),Hi(t,[e])}for(var sc=0;sc<Xp.length;sc++){var lc=Xp[sc],$w=lc.toLowerCase(),Bw=lc[0].toUpperCase()+lc.slice(1);fi($w,"on"+Bw)}fi(e1,"onAnimationEnd");fi(t1,"onAnimationIteration");fi(n1,"onAnimationStart");fi("dblclick","onDoubleClick");fi("focusin","onFocus");fi("focusout","onBlur");fi(i1,"onTransitionEnd");Ar("onMouseEnter",["mouseout","mouseover"]);Ar("onMouseLeave",["mouseout","mouseover"]);Ar("onPointerEnter",["pointerout","pointerover"]);Ar("onPointerLeave",["pointerout","pointerover"]);Hi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Hi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Hi("onBeforeInput",["compositionend","keypress","textInput","paste"]);Hi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Hi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Hi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ha="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Hw=new Set("cancel close invalid load scroll toggle".split(" ").concat(ha));function Qp(e,t,n){var i=e.type||"unknown-event";e.currentTarget=n,$2(i,t,void 0,e),e.currentTarget=null}function a1(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],r=i.event;i=i.listeners;e:{var a=void 0;if(t)for(var o=i.length-1;0<=o;o--){var s=i[o],l=s.instance,d=s.currentTarget;if(s=s.listener,l!==a&&r.isPropagationStopped())break e;Qp(r,s,d),a=l}else for(o=0;o<i.length;o++){if(s=i[o],l=s.instance,d=s.currentTarget,s=s.listener,l!==a&&r.isPropagationStopped())break e;Qp(r,s,d),a=l}}}if(xs)throw e=fd,xs=!1,fd=null,e}function me(e,t){var n=t[Sd];n===void 0&&(n=t[Sd]=new Set);var i=e+"__bubble";n.has(i)||(o1(t,e,2,!1),n.add(i))}function cc(e,t,n){var i=0;t&&(i|=4),o1(n,e,i,t)}var Eo="_reactListening"+Math.random().toString(36).slice(2);function $a(e){if(!e[Eo]){e[Eo]=!0,pg.forEach(function(n){n!=="selectionchange"&&(Hw.has(n)||cc(n,!1,e),cc(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Eo]||(t[Eo]=!0,cc("selectionchange",!1,t))}}function o1(e,t,n,i){switch(Bg(t)){case 1:var r=rw;break;case 4:r=aw;break;default:r=Nu}n=r.bind(null,t,n,e),r=void 0,!ud||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(r=!0),i?r!==void 0?e.addEventListener(t,n,{capture:!0,passive:r}):e.addEventListener(t,n,!0):r!==void 0?e.addEventListener(t,n,{passive:r}):e.addEventListener(t,n,!1)}function dc(e,t,n,i,r){var a=i;if(!(t&1)&&!(t&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var s=i.stateNode.containerInfo;if(s===r||s.nodeType===8&&s.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;s!==null;){if(o=Ti(s),o===null)return;if(l=o.tag,l===5||l===6){i=a=o;continue e}s=s.parentNode}}i=i.return}Pg(function(){var d=a,u=Iu(n),f=[];e:{var p=r1.get(e);if(p!==void 0){var g=$u,x=e;switch(e){case"keypress":if(Xo(n)===0)break e;case"keydown":case"keyup":g=ww;break;case"focusin":x="focus",g=ic;break;case"focusout":x="blur",g=ic;break;case"beforeblur":case"afterblur":g=ic;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Vp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=lw;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=jw;break;case e1:case t1:case n1:g=uw;break;case i1:g=kw;break;case"scroll":g=ow;break;case"wheel":g=Aw;break;case"copy":case"cut":case"paste":g=pw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Fp}var y=(t&4)!==0,b=!y&&e==="scroll",v=y?p!==null?p+"Capture":null:p;y=[];for(var h=d,m;h!==null;){m=h;var w=m.stateNode;if(m.tag===5&&w!==null&&(m=w,v!==null&&(w=Ia(h,v),w!=null&&y.push(Ba(h,w,m)))),b)break;h=h.return}0<y.length&&(p=new g(p,x,null,n,u),f.push({event:p,listeners:y}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",p&&n!==cd&&(x=n.relatedTarget||n.fromElement)&&(Ti(x)||x[Ln]))break e;if((g||p)&&(p=u.window===u?u:(p=u.ownerDocument)?p.defaultView||p.parentWindow:window,g?(x=n.relatedTarget||n.toElement,g=d,x=x?Ti(x):null,x!==null&&(b=Ui(x),x!==b||x.tag!==5&&x.tag!==6)&&(x=null)):(g=null,x=d),g!==x)){if(y=Vp,w="onMouseLeave",v="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(y=Fp,w="onPointerLeave",v="onPointerEnter",h="pointer"),b=g==null?p:ar(g),m=x==null?p:ar(x),p=new y(w,h+"leave",g,n,u),p.target=b,p.relatedTarget=m,w=null,Ti(u)===d&&(y=new y(v,h+"enter",x,n,u),y.target=m,y.relatedTarget=b,w=y),b=w,g&&x)t:{for(y=g,v=x,h=0,m=y;m;m=Xi(m))h++;for(m=0,w=v;w;w=Xi(w))m++;for(;0<h-m;)y=Xi(y),h--;for(;0<m-h;)v=Xi(v),m--;for(;h--;){if(y===v||v!==null&&y===v.alternate)break t;y=Xi(y),v=Xi(v)}y=null}else y=null;g!==null&&Zp(f,p,g,y,!1),x!==null&&b!==null&&Zp(f,b,x,y,!0)}}e:{if(p=d?ar(d):window,g=p.nodeName&&p.nodeName.toLowerCase(),g==="select"||g==="input"&&p.type==="file")var S=Lw;else if(Hp(p))if(Kg)S=Dw;else{S=Iw;var C=Ow}else(g=p.nodeName)&&g.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(S=Rw);if(S&&(S=S(e,d))){Yg(f,S,n,u);break e}C&&C(e,p,d),e==="focusout"&&(C=p._wrapperState)&&C.controlled&&p.type==="number"&&rd(p,"number",p.value)}switch(C=d?ar(d):window,e){case"focusin":(Hp(C)||C.contentEditable==="true")&&(ir=C,gd=d,Sa=null);break;case"focusout":Sa=gd=ir=null;break;case"mousedown":vd=!0;break;case"contextmenu":case"mouseup":case"dragend":vd=!1,Kp(f,n,u);break;case"selectionchange":if(Fw)break;case"keydown":case"keyup":Kp(f,n,u)}var A;if(Hu)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else nr?Wg(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(Ug&&n.locale!=="ko"&&(nr||T!=="onCompositionStart"?T==="onCompositionEnd"&&nr&&(A=Hg()):(Yn=u,Fu="value"in Yn?Yn.value:Yn.textContent,nr=!0)),C=js(d,T),0<C.length&&(T=new Np(T,e,null,n,u),f.push({event:T,listeners:C}),A?T.data=A:(A=qg(n),A!==null&&(T.data=A)))),(A=Pw?Gw(e,n):zw(e,n))&&(d=js(d,"onBeforeInput"),0<d.length&&(u=new Np("onBeforeInput","beforeinput",null,n,u),f.push({event:u,listeners:d}),u.data=A))}a1(f,t)})}function Ba(e,t,n){return{instance:e,listener:t,currentTarget:n}}function js(e,t){for(var n=t+"Capture",i=[];e!==null;){var r=e,a=r.stateNode;r.tag===5&&a!==null&&(r=a,a=Ia(e,n),a!=null&&i.unshift(Ba(e,a,r)),a=Ia(e,t),a!=null&&i.push(Ba(e,a,r))),e=e.return}return i}function Xi(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Zp(e,t,n,i,r){for(var a=t._reactName,o=[];n!==null&&n!==i;){var s=n,l=s.alternate,d=s.stateNode;if(l!==null&&l===i)break;s.tag===5&&d!==null&&(s=d,r?(l=Ia(n,a),l!=null&&o.unshift(Ba(n,l,s))):r||(l=Ia(n,a),l!=null&&o.push(Ba(n,l,s)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Uw=/\r\n?/g,Ww=/\u0000|\uFFFD/g;function Jp(e){return(typeof e=="string"?e:""+e).replace(Uw,`
`).replace(Ww,"")}function Po(e,t,n){if(t=Jp(t),Jp(e)!==t&&n)throw Error(N(425))}function Cs(){}var xd=null,yd=null;function wd(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var bd=typeof setTimeout=="function"?setTimeout:void 0,qw=typeof clearTimeout=="function"?clearTimeout:void 0,eh=typeof Promise=="function"?Promise:void 0,Yw=typeof queueMicrotask=="function"?queueMicrotask:typeof eh<"u"?function(e){return eh.resolve(null).then(e).catch(Kw)}:bd;function Kw(e){setTimeout(function(){throw e})}function uc(e,t){var n=t,i=0;do{var r=n.nextSibling;if(e.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){e.removeChild(r),Va(t);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Va(t)}function ti(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function th(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Hr=Math.random().toString(36).slice(2),sn="__reactFiber$"+Hr,Ha="__reactProps$"+Hr,Ln="__reactContainer$"+Hr,Sd="__reactEvents$"+Hr,Xw="__reactListeners$"+Hr,Qw="__reactHandles$"+Hr;function Ti(e){var t=e[sn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ln]||n[sn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=th(e);e!==null;){if(n=e[sn])return n;e=th(e)}return t}e=n,n=e.parentNode}return null}function lo(e){return e=e[sn]||e[Ln],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ar(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(N(33))}function fl(e){return e[Ha]||null}var jd=[],or=-1;function pi(e){return{current:e}}function xe(e){0>or||(e.current=jd[or],jd[or]=null,or--)}function he(e,t){or++,jd[or]=e.current,e.current=t}var ci={},st=pi(ci),vt=pi(!1),Ii=ci;function Er(e,t){var n=e.type.contextTypes;if(!n)return ci;var i=e.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===t)return i.__reactInternalMemoizedMaskedChildContext;var r={},a;for(a in n)r[a]=t[a];return i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=r),r}function xt(e){return e=e.childContextTypes,e!=null}function ks(){xe(vt),xe(st)}function nh(e,t,n){if(st.current!==ci)throw Error(N(168));he(st,t),he(vt,n)}function s1(e,t,n){var i=e.stateNode;if(t=t.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in t))throw Error(N(108,O2(e)||"Unknown",r));return Pe({},n,i)}function Ts(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ci,Ii=st.current,he(st,e),he(vt,vt.current),!0}function ih(e,t,n){var i=e.stateNode;if(!i)throw Error(N(169));n?(e=s1(e,t,Ii),i.__reactInternalMemoizedMergedChildContext=e,xe(vt),xe(st),he(st,e)):xe(vt),he(vt,n)}var jn=null,pl=!1,fc=!1;function l1(e){jn===null?jn=[e]:jn.push(e)}function Zw(e){pl=!0,l1(e)}function hi(){if(!fc&&jn!==null){fc=!0;var e=0,t=de;try{var n=jn;for(de=1;e<n.length;e++){var i=n[e];do i=i(!0);while(i!==null)}jn=null,pl=!1}catch(r){throw jn!==null&&(jn=jn.slice(e+1)),Mg(Ru,hi),r}finally{de=t,fc=!1}}return null}var sr=[],lr=0,As=null,Es=0,Mt=[],Lt=0,Ri=null,Cn=1,kn="";function Si(e,t){sr[lr++]=Es,sr[lr++]=As,As=e,Es=t}function c1(e,t,n){Mt[Lt++]=Cn,Mt[Lt++]=kn,Mt[Lt++]=Ri,Ri=e;var i=Cn;e=kn;var r=32-Yt(i)-1;i&=~(1<<r),n+=1;var a=32-Yt(t)+r;if(30<a){var o=r-r%5;a=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Cn=1<<32-Yt(t)+r|n<<r|i,kn=a+e}else Cn=1<<a|n<<r|i,kn=e}function Wu(e){e.return!==null&&(Si(e,1),c1(e,1,0))}function qu(e){for(;e===As;)As=sr[--lr],sr[lr]=null,Es=sr[--lr],sr[lr]=null;for(;e===Ri;)Ri=Mt[--Lt],Mt[Lt]=null,kn=Mt[--Lt],Mt[Lt]=null,Cn=Mt[--Lt],Mt[Lt]=null}var kt=null,Ct=null,Se=!1,Wt=null;function d1(e,t){var n=Ot(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function rh(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,kt=e,Ct=ti(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,kt=e,Ct=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Ri!==null?{id:Cn,overflow:kn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ot(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,kt=e,Ct=null,!0):!1;default:return!1}}function Cd(e){return(e.mode&1)!==0&&(e.flags&128)===0}function kd(e){if(Se){var t=Ct;if(t){var n=t;if(!rh(e,t)){if(Cd(e))throw Error(N(418));t=ti(n.nextSibling);var i=kt;t&&rh(e,t)?d1(i,n):(e.flags=e.flags&-4097|2,Se=!1,kt=e)}}else{if(Cd(e))throw Error(N(418));e.flags=e.flags&-4097|2,Se=!1,kt=e}}}function ah(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;kt=e}function Go(e){if(e!==kt)return!1;if(!Se)return ah(e),Se=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!wd(e.type,e.memoizedProps)),t&&(t=Ct)){if(Cd(e))throw u1(),Error(N(418));for(;t;)d1(e,t),t=ti(t.nextSibling)}if(ah(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(N(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ct=ti(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ct=null}}else Ct=kt?ti(e.stateNode.nextSibling):null;return!0}function u1(){for(var e=Ct;e;)e=ti(e.nextSibling)}function Pr(){Ct=kt=null,Se=!1}function Yu(e){Wt===null?Wt=[e]:Wt.push(e)}var Jw=Dn.ReactCurrentBatchConfig;function ia(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(N(309));var i=n.stateNode}if(!i)throw Error(N(147,e));var r=i,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(o){var s=r.refs;o===null?delete s[a]:s[a]=o},t._stringRef=a,t)}if(typeof e!="string")throw Error(N(284));if(!n._owner)throw Error(N(290,e))}return e}function zo(e,t){throw e=Object.prototype.toString.call(t),Error(N(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function oh(e){var t=e._init;return t(e._payload)}function f1(e){function t(v,h){if(e){var m=v.deletions;m===null?(v.deletions=[h],v.flags|=16):m.push(h)}}function n(v,h){if(!e)return null;for(;h!==null;)t(v,h),h=h.sibling;return null}function i(v,h){for(v=new Map;h!==null;)h.key!==null?v.set(h.key,h):v.set(h.index,h),h=h.sibling;return v}function r(v,h){return v=ai(v,h),v.index=0,v.sibling=null,v}function a(v,h,m){return v.index=m,e?(m=v.alternate,m!==null?(m=m.index,m<h?(v.flags|=2,h):m):(v.flags|=2,h)):(v.flags|=1048576,h)}function o(v){return e&&v.alternate===null&&(v.flags|=2),v}function s(v,h,m,w){return h===null||h.tag!==6?(h=yc(m,v.mode,w),h.return=v,h):(h=r(h,m),h.return=v,h)}function l(v,h,m,w){var S=m.type;return S===tr?u(v,h,m.props.children,w,m.key):h!==null&&(h.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Hn&&oh(S)===h.type)?(w=r(h,m.props),w.ref=ia(v,h,m),w.return=v,w):(w=is(m.type,m.key,m.props,null,v.mode,w),w.ref=ia(v,h,m),w.return=v,w)}function d(v,h,m,w){return h===null||h.tag!==4||h.stateNode.containerInfo!==m.containerInfo||h.stateNode.implementation!==m.implementation?(h=wc(m,v.mode,w),h.return=v,h):(h=r(h,m.children||[]),h.return=v,h)}function u(v,h,m,w,S){return h===null||h.tag!==7?(h=_i(m,v.mode,w,S),h.return=v,h):(h=r(h,m),h.return=v,h)}function f(v,h,m){if(typeof h=="string"&&h!==""||typeof h=="number")return h=yc(""+h,v.mode,m),h.return=v,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case wo:return m=is(h.type,h.key,h.props,null,v.mode,m),m.ref=ia(v,null,h),m.return=v,m;case er:return h=wc(h,v.mode,m),h.return=v,h;case Hn:var w=h._init;return f(v,w(h._payload),m)}if(fa(h)||Zr(h))return h=_i(h,v.mode,m,null),h.return=v,h;zo(v,h)}return null}function p(v,h,m,w){var S=h!==null?h.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return S!==null?null:s(v,h,""+m,w);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case wo:return m.key===S?l(v,h,m,w):null;case er:return m.key===S?d(v,h,m,w):null;case Hn:return S=m._init,p(v,h,S(m._payload),w)}if(fa(m)||Zr(m))return S!==null?null:u(v,h,m,w,null);zo(v,m)}return null}function g(v,h,m,w,S){if(typeof w=="string"&&w!==""||typeof w=="number")return v=v.get(m)||null,s(h,v,""+w,S);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case wo:return v=v.get(w.key===null?m:w.key)||null,l(h,v,w,S);case er:return v=v.get(w.key===null?m:w.key)||null,d(h,v,w,S);case Hn:var C=w._init;return g(v,h,m,C(w._payload),S)}if(fa(w)||Zr(w))return v=v.get(m)||null,u(h,v,w,S,null);zo(h,w)}return null}function x(v,h,m,w){for(var S=null,C=null,A=h,T=h=0,z=null;A!==null&&T<m.length;T++){A.index>T?(z=A,A=null):z=A.sibling;var E=p(v,A,m[T],w);if(E===null){A===null&&(A=z);break}e&&A&&E.alternate===null&&t(v,A),h=a(E,h,T),C===null?S=E:C.sibling=E,C=E,A=z}if(T===m.length)return n(v,A),Se&&Si(v,T),S;if(A===null){for(;T<m.length;T++)A=f(v,m[T],w),A!==null&&(h=a(A,h,T),C===null?S=A:C.sibling=A,C=A);return Se&&Si(v,T),S}for(A=i(v,A);T<m.length;T++)z=g(A,v,T,m[T],w),z!==null&&(e&&z.alternate!==null&&A.delete(z.key===null?T:z.key),h=a(z,h,T),C===null?S=z:C.sibling=z,C=z);return e&&A.forEach(function(P){return t(v,P)}),Se&&Si(v,T),S}function y(v,h,m,w){var S=Zr(m);if(typeof S!="function")throw Error(N(150));if(m=S.call(m),m==null)throw Error(N(151));for(var C=S=null,A=h,T=h=0,z=null,E=m.next();A!==null&&!E.done;T++,E=m.next()){A.index>T?(z=A,A=null):z=A.sibling;var P=p(v,A,E.value,w);if(P===null){A===null&&(A=z);break}e&&A&&P.alternate===null&&t(v,A),h=a(P,h,T),C===null?S=P:C.sibling=P,C=P,A=z}if(E.done)return n(v,A),Se&&Si(v,T),S;if(A===null){for(;!E.done;T++,E=m.next())E=f(v,E.value,w),E!==null&&(h=a(E,h,T),C===null?S=E:C.sibling=E,C=E);return Se&&Si(v,T),S}for(A=i(v,A);!E.done;T++,E=m.next())E=g(A,v,T,E.value,w),E!==null&&(e&&E.alternate!==null&&A.delete(E.key===null?T:E.key),h=a(E,h,T),C===null?S=E:C.sibling=E,C=E);return e&&A.forEach(function(_){return t(v,_)}),Se&&Si(v,T),S}function b(v,h,m,w){if(typeof m=="object"&&m!==null&&m.type===tr&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case wo:e:{for(var S=m.key,C=h;C!==null;){if(C.key===S){if(S=m.type,S===tr){if(C.tag===7){n(v,C.sibling),h=r(C,m.props.children),h.return=v,v=h;break e}}else if(C.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Hn&&oh(S)===C.type){n(v,C.sibling),h=r(C,m.props),h.ref=ia(v,C,m),h.return=v,v=h;break e}n(v,C);break}else t(v,C);C=C.sibling}m.type===tr?(h=_i(m.props.children,v.mode,w,m.key),h.return=v,v=h):(w=is(m.type,m.key,m.props,null,v.mode,w),w.ref=ia(v,h,m),w.return=v,v=w)}return o(v);case er:e:{for(C=m.key;h!==null;){if(h.key===C)if(h.tag===4&&h.stateNode.containerInfo===m.containerInfo&&h.stateNode.implementation===m.implementation){n(v,h.sibling),h=r(h,m.children||[]),h.return=v,v=h;break e}else{n(v,h);break}else t(v,h);h=h.sibling}h=wc(m,v.mode,w),h.return=v,v=h}return o(v);case Hn:return C=m._init,b(v,h,C(m._payload),w)}if(fa(m))return x(v,h,m,w);if(Zr(m))return y(v,h,m,w);zo(v,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,h!==null&&h.tag===6?(n(v,h.sibling),h=r(h,m),h.return=v,v=h):(n(v,h),h=yc(m,v.mode,w),h.return=v,v=h),o(v)):n(v,h)}return b}var Gr=f1(!0),p1=f1(!1),Ps=pi(null),Gs=null,cr=null,Ku=null;function Xu(){Ku=cr=Gs=null}function Qu(e){var t=Ps.current;xe(Ps),e._currentValue=t}function Td(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function Sr(e,t){Gs=e,Ku=cr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(gt=!0),e.firstContext=null)}function Rt(e){var t=e._currentValue;if(Ku!==e)if(e={context:e,memoizedValue:t,next:null},cr===null){if(Gs===null)throw Error(N(308));cr=e,Gs.dependencies={lanes:0,firstContext:e}}else cr=cr.next=e;return t}var Ai=null;function Zu(e){Ai===null?Ai=[e]:Ai.push(e)}function h1(e,t,n,i){var r=t.interleaved;return r===null?(n.next=n,Zu(t)):(n.next=r.next,r.next=n),t.interleaved=n,On(e,i)}function On(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Un=!1;function Ju(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function m1(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function An(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ni(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,oe&2){var r=i.pending;return r===null?t.next=t:(t.next=r.next,r.next=t),i.pending=t,On(e,n)}return r=i.interleaved,r===null?(t.next=t,Zu(i)):(t.next=r.next,r.next=t),i.interleaved=t,On(e,n)}function Qo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,Du(e,n)}}function sh(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?r=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?r=a=t:a=a.next=t}else r=a=t;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:a,shared:i.shared,effects:i.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function zs(e,t,n,i){var r=e.updateQueue;Un=!1;var a=r.firstBaseUpdate,o=r.lastBaseUpdate,s=r.shared.pending;if(s!==null){r.shared.pending=null;var l=s,d=l.next;l.next=null,o===null?a=d:o.next=d,o=l;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=d:s.next=d,u.lastBaseUpdate=l))}if(a!==null){var f=r.baseState;o=0,u=d=l=null,s=a;do{var p=s.lane,g=s.eventTime;if((i&p)===p){u!==null&&(u=u.next={eventTime:g,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var x=e,y=s;switch(p=t,g=n,y.tag){case 1:if(x=y.payload,typeof x=="function"){f=x.call(g,f,p);break e}f=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=y.payload,p=typeof x=="function"?x.call(g,f,p):x,p==null)break e;f=Pe({},f,p);break e;case 2:Un=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,p=r.effects,p===null?r.effects=[s]:p.push(s))}else g={eventTime:g,lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(d=u=g,l=f):u=u.next=g,o|=p;if(s=s.next,s===null){if(s=r.shared.pending,s===null)break;p=s,s=p.next,p.next=null,r.lastBaseUpdate=p,r.shared.pending=null}}while(!0);if(u===null&&(l=f),r.baseState=l,r.firstBaseUpdate=d,r.lastBaseUpdate=u,t=r.shared.interleaved,t!==null){r=t;do o|=r.lane,r=r.next;while(r!==t)}else a===null&&(r.shared.lanes=0);Vi|=o,e.lanes=o,e.memoizedState=f}}function lh(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var i=e[t],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(N(191,r));r.call(i)}}}var co={},un=pi(co),Ua=pi(co),Wa=pi(co);function Ei(e){if(e===co)throw Error(N(174));return e}function ef(e,t){switch(he(Wa,t),he(Ua,e),he(un,co),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:od(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=od(t,e)}xe(un),he(un,t)}function zr(){xe(un),xe(Ua),xe(Wa)}function g1(e){Ei(Wa.current);var t=Ei(un.current),n=od(t,e.type);t!==n&&(he(Ua,e),he(un,n))}function tf(e){Ua.current===e&&(xe(un),xe(Ua))}var ke=pi(0);function _s(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var pc=[];function nf(){for(var e=0;e<pc.length;e++)pc[e]._workInProgressVersionPrimary=null;pc.length=0}var Zo=Dn.ReactCurrentDispatcher,hc=Dn.ReactCurrentBatchConfig,Di=0,Ee=null,Ne=null,We=null,Ms=!1,ja=!1,qa=0,eb=0;function tt(){throw Error(N(321))}function rf(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Qt(e[n],t[n]))return!1;return!0}function af(e,t,n,i,r,a){if(Di=a,Ee=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Zo.current=e===null||e.memoizedState===null?rb:ab,e=n(i,r),ja){a=0;do{if(ja=!1,qa=0,25<=a)throw Error(N(301));a+=1,We=Ne=null,t.updateQueue=null,Zo.current=ob,e=n(i,r)}while(ja)}if(Zo.current=Ls,t=Ne!==null&&Ne.next!==null,Di=0,We=Ne=Ee=null,Ms=!1,t)throw Error(N(300));return e}function of(){var e=qa!==0;return qa=0,e}function an(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return We===null?Ee.memoizedState=We=e:We=We.next=e,We}function Dt(){if(Ne===null){var e=Ee.alternate;e=e!==null?e.memoizedState:null}else e=Ne.next;var t=We===null?Ee.memoizedState:We.next;if(t!==null)We=t,Ne=e;else{if(e===null)throw Error(N(310));Ne=e,e={memoizedState:Ne.memoizedState,baseState:Ne.baseState,baseQueue:Ne.baseQueue,queue:Ne.queue,next:null},We===null?Ee.memoizedState=We=e:We=We.next=e}return We}function Ya(e,t){return typeof t=="function"?t(e):t}function mc(e){var t=Dt(),n=t.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=e;var i=Ne,r=i.baseQueue,a=n.pending;if(a!==null){if(r!==null){var o=r.next;r.next=a.next,a.next=o}i.baseQueue=r=a,n.pending=null}if(r!==null){a=r.next,i=i.baseState;var s=o=null,l=null,d=a;do{var u=d.lane;if((Di&u)===u)l!==null&&(l=l.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),i=d.hasEagerState?d.eagerState:e(i,d.action);else{var f={lane:u,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};l===null?(s=l=f,o=i):l=l.next=f,Ee.lanes|=u,Vi|=u}d=d.next}while(d!==null&&d!==a);l===null?o=i:l.next=s,Qt(i,t.memoizedState)||(gt=!0),t.memoizedState=i,t.baseState=o,t.baseQueue=l,n.lastRenderedState=i}if(e=n.interleaved,e!==null){r=e;do a=r.lane,Ee.lanes|=a,Vi|=a,r=r.next;while(r!==e)}else r===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function gc(e){var t=Dt(),n=t.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=e;var i=n.dispatch,r=n.pending,a=t.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do a=e(a,o.action),o=o.next;while(o!==r);Qt(a,t.memoizedState)||(gt=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,i]}function v1(){}function x1(e,t){var n=Ee,i=Dt(),r=t(),a=!Qt(i.memoizedState,r);if(a&&(i.memoizedState=r,gt=!0),i=i.queue,sf(b1.bind(null,n,i,e),[e]),i.getSnapshot!==t||a||We!==null&&We.memoizedState.tag&1){if(n.flags|=2048,Ka(9,w1.bind(null,n,i,r,t),void 0,null),Ye===null)throw Error(N(349));Di&30||y1(n,t,r)}return r}function y1(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ee.updateQueue,t===null?(t={lastEffect:null,stores:null},Ee.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function w1(e,t,n,i){t.value=n,t.getSnapshot=i,S1(t)&&j1(e)}function b1(e,t,n){return n(function(){S1(t)&&j1(e)})}function S1(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Qt(e,n)}catch{return!0}}function j1(e){var t=On(e,1);t!==null&&Kt(t,e,1,-1)}function ch(e){var t=an();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ya,lastRenderedState:e},t.queue=e,e=e.dispatch=ib.bind(null,Ee,e),[t.memoizedState,e]}function Ka(e,t,n,i){return e={tag:e,create:t,destroy:n,deps:i,next:null},t=Ee.updateQueue,t===null?(t={lastEffect:null,stores:null},Ee.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e)),e}function C1(){return Dt().memoizedState}function Jo(e,t,n,i){var r=an();Ee.flags|=e,r.memoizedState=Ka(1|t,n,void 0,i===void 0?null:i)}function hl(e,t,n,i){var r=Dt();i=i===void 0?null:i;var a=void 0;if(Ne!==null){var o=Ne.memoizedState;if(a=o.destroy,i!==null&&rf(i,o.deps)){r.memoizedState=Ka(t,n,a,i);return}}Ee.flags|=e,r.memoizedState=Ka(1|t,n,a,i)}function dh(e,t){return Jo(8390656,8,e,t)}function sf(e,t){return hl(2048,8,e,t)}function k1(e,t){return hl(4,2,e,t)}function T1(e,t){return hl(4,4,e,t)}function A1(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function E1(e,t,n){return n=n!=null?n.concat([e]):null,hl(4,4,A1.bind(null,t,e),n)}function lf(){}function P1(e,t){var n=Dt();t=t===void 0?null:t;var i=n.memoizedState;return i!==null&&t!==null&&rf(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function G1(e,t){var n=Dt();t=t===void 0?null:t;var i=n.memoizedState;return i!==null&&t!==null&&rf(t,i[1])?i[0]:(e=e(),n.memoizedState=[e,t],e)}function z1(e,t,n){return Di&21?(Qt(n,t)||(n=Ig(),Ee.lanes|=n,Vi|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,gt=!0),e.memoizedState=n)}function tb(e,t){var n=de;de=n!==0&&4>n?n:4,e(!0);var i=hc.transition;hc.transition={};try{e(!1),t()}finally{de=n,hc.transition=i}}function _1(){return Dt().memoizedState}function nb(e,t,n){var i=ri(e);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},M1(e))L1(t,n);else if(n=h1(e,t,n,i),n!==null){var r=dt();Kt(n,e,i,r),O1(n,t,i)}}function ib(e,t,n){var i=ri(e),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(M1(e))L1(t,r);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(r.hasEagerState=!0,r.eagerState=s,Qt(s,o)){var l=t.interleaved;l===null?(r.next=r,Zu(t)):(r.next=l.next,l.next=r),t.interleaved=r;return}}catch{}finally{}n=h1(e,t,r,i),n!==null&&(r=dt(),Kt(n,e,i,r),O1(n,t,i))}}function M1(e){var t=e.alternate;return e===Ee||t!==null&&t===Ee}function L1(e,t){ja=Ms=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function O1(e,t,n){if(n&4194240){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,Du(e,n)}}var Ls={readContext:Rt,useCallback:tt,useContext:tt,useEffect:tt,useImperativeHandle:tt,useInsertionEffect:tt,useLayoutEffect:tt,useMemo:tt,useReducer:tt,useRef:tt,useState:tt,useDebugValue:tt,useDeferredValue:tt,useTransition:tt,useMutableSource:tt,useSyncExternalStore:tt,useId:tt,unstable_isNewReconciler:!1},rb={readContext:Rt,useCallback:function(e,t){return an().memoizedState=[e,t===void 0?null:t],e},useContext:Rt,useEffect:dh,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Jo(4194308,4,A1.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Jo(4194308,4,e,t)},useInsertionEffect:function(e,t){return Jo(4,2,e,t)},useMemo:function(e,t){var n=an();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var i=an();return t=n!==void 0?n(t):t,i.memoizedState=i.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},i.queue=e,e=e.dispatch=nb.bind(null,Ee,e),[i.memoizedState,e]},useRef:function(e){var t=an();return e={current:e},t.memoizedState=e},useState:ch,useDebugValue:lf,useDeferredValue:function(e){return an().memoizedState=e},useTransition:function(){var e=ch(!1),t=e[0];return e=tb.bind(null,e[1]),an().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var i=Ee,r=an();if(Se){if(n===void 0)throw Error(N(407));n=n()}else{if(n=t(),Ye===null)throw Error(N(349));Di&30||y1(i,t,n)}r.memoizedState=n;var a={value:n,getSnapshot:t};return r.queue=a,dh(b1.bind(null,i,a,e),[e]),i.flags|=2048,Ka(9,w1.bind(null,i,a,n,t),void 0,null),n},useId:function(){var e=an(),t=Ye.identifierPrefix;if(Se){var n=kn,i=Cn;n=(i&~(1<<32-Yt(i)-1)).toString(32)+n,t=":"+t+"R"+n,n=qa++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=eb++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},ab={readContext:Rt,useCallback:P1,useContext:Rt,useEffect:sf,useImperativeHandle:E1,useInsertionEffect:k1,useLayoutEffect:T1,useMemo:G1,useReducer:mc,useRef:C1,useState:function(){return mc(Ya)},useDebugValue:lf,useDeferredValue:function(e){var t=Dt();return z1(t,Ne.memoizedState,e)},useTransition:function(){var e=mc(Ya)[0],t=Dt().memoizedState;return[e,t]},useMutableSource:v1,useSyncExternalStore:x1,useId:_1,unstable_isNewReconciler:!1},ob={readContext:Rt,useCallback:P1,useContext:Rt,useEffect:sf,useImperativeHandle:E1,useInsertionEffect:k1,useLayoutEffect:T1,useMemo:G1,useReducer:gc,useRef:C1,useState:function(){return gc(Ya)},useDebugValue:lf,useDeferredValue:function(e){var t=Dt();return Ne===null?t.memoizedState=e:z1(t,Ne.memoizedState,e)},useTransition:function(){var e=gc(Ya)[0],t=Dt().memoizedState;return[e,t]},useMutableSource:v1,useSyncExternalStore:x1,useId:_1,unstable_isNewReconciler:!1};function Ht(e,t){if(e&&e.defaultProps){t=Pe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ad(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:Pe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ml={isMounted:function(e){return(e=e._reactInternals)?Ui(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var i=dt(),r=ri(e),a=An(i,r);a.payload=t,n!=null&&(a.callback=n),t=ni(e,a,r),t!==null&&(Kt(t,e,r,i),Qo(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=dt(),r=ri(e),a=An(i,r);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=ni(e,a,r),t!==null&&(Kt(t,e,r,i),Qo(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=dt(),i=ri(e),r=An(n,i);r.tag=2,t!=null&&(r.callback=t),t=ni(e,r,i),t!==null&&(Kt(t,e,i,n),Qo(t,e,i))}};function uh(e,t,n,i,r,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,a,o):t.prototype&&t.prototype.isPureReactComponent?!Fa(n,i)||!Fa(r,a):!0}function I1(e,t,n){var i=!1,r=ci,a=t.contextType;return typeof a=="object"&&a!==null?a=Rt(a):(r=xt(t)?Ii:st.current,i=t.contextTypes,a=(i=i!=null)?Er(e,r):ci),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ml,e.stateNode=t,t._reactInternals=e,i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=a),t}function fh(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&ml.enqueueReplaceState(t,t.state,null)}function Ed(e,t,n,i){var r=e.stateNode;r.props=n,r.state=e.memoizedState,r.refs={},Ju(e);var a=t.contextType;typeof a=="object"&&a!==null?r.context=Rt(a):(a=xt(t)?Ii:st.current,r.context=Er(e,a)),r.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(Ad(e,t,a,n),r.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(t=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),t!==r.state&&ml.enqueueReplaceState(r,r.state,null),zs(e,n,r,i),r.state=e.memoizedState),typeof r.componentDidMount=="function"&&(e.flags|=4194308)}function _r(e,t){try{var n="",i=t;do n+=L2(i),i=i.return;while(i);var r=n}catch(a){r=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:r,digest:null}}function vc(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Pd(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var sb=typeof WeakMap=="function"?WeakMap:Map;function R1(e,t,n){n=An(-1,n),n.tag=3,n.payload={element:null};var i=t.value;return n.callback=function(){Is||(Is=!0,Vd=i),Pd(e,t)},n}function D1(e,t,n){n=An(-1,n),n.tag=3;var i=e.type.getDerivedStateFromError;if(typeof i=="function"){var r=t.value;n.payload=function(){return i(r)},n.callback=function(){Pd(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){Pd(e,t),typeof i!="function"&&(ii===null?ii=new Set([this]):ii.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function ph(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new sb;var r=new Set;i.set(t,r)}else r=i.get(t),r===void 0&&(r=new Set,i.set(t,r));r.has(n)||(r.add(n),e=bb.bind(null,e,t,n),t.then(e,e))}function hh(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function mh(e,t,n,i,r){return e.mode&1?(e.flags|=65536,e.lanes=r,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=An(-1,1),t.tag=2,ni(n,t,1))),n.lanes|=1),e)}var lb=Dn.ReactCurrentOwner,gt=!1;function lt(e,t,n,i){t.child=e===null?p1(t,null,n,i):Gr(t,e.child,n,i)}function gh(e,t,n,i,r){n=n.render;var a=t.ref;return Sr(t,r),i=af(e,t,n,i,a,r),n=of(),e!==null&&!gt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~r,In(e,t,r)):(Se&&n&&Wu(t),t.flags|=1,lt(e,t,i,r),t.child)}function vh(e,t,n,i,r){if(e===null){var a=n.type;return typeof a=="function"&&!gf(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,V1(e,t,a,i,r)):(e=is(n.type,null,i,t,t.mode,r),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&r)){var o=a.memoizedProps;if(n=n.compare,n=n!==null?n:Fa,n(o,i)&&e.ref===t.ref)return In(e,t,r)}return t.flags|=1,e=ai(a,i),e.ref=t.ref,e.return=t,t.child=e}function V1(e,t,n,i,r){if(e!==null){var a=e.memoizedProps;if(Fa(a,i)&&e.ref===t.ref)if(gt=!1,t.pendingProps=i=a,(e.lanes&r)!==0)e.flags&131072&&(gt=!0);else return t.lanes=e.lanes,In(e,t,r)}return Gd(e,t,n,i,r)}function N1(e,t,n){var i=t.pendingProps,r=i.children,a=e!==null?e.memoizedState:null;if(i.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},he(ur,St),St|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,he(ur,St),St|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=a!==null?a.baseLanes:n,he(ur,St),St|=i}else a!==null?(i=a.baseLanes|n,t.memoizedState=null):i=n,he(ur,St),St|=i;return lt(e,t,r,n),t.child}function F1(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Gd(e,t,n,i,r){var a=xt(n)?Ii:st.current;return a=Er(t,a),Sr(t,r),n=af(e,t,n,i,a,r),i=of(),e!==null&&!gt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~r,In(e,t,r)):(Se&&i&&Wu(t),t.flags|=1,lt(e,t,n,r),t.child)}function xh(e,t,n,i,r){if(xt(n)){var a=!0;Ts(t)}else a=!1;if(Sr(t,r),t.stateNode===null)es(e,t),I1(t,n,i),Ed(t,n,i,r),i=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var l=o.context,d=n.contextType;typeof d=="object"&&d!==null?d=Rt(d):(d=xt(n)?Ii:st.current,d=Er(t,d));var u=n.getDerivedStateFromProps,f=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==i||l!==d)&&fh(t,o,i,d),Un=!1;var p=t.memoizedState;o.state=p,zs(t,i,o,r),l=t.memoizedState,s!==i||p!==l||vt.current||Un?(typeof u=="function"&&(Ad(t,n,u,i),l=t.memoizedState),(s=Un||uh(t,n,s,i,p,l,d))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=l),o.props=i,o.state=l,o.context=d,i=s):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{o=t.stateNode,m1(e,t),s=t.memoizedProps,d=t.type===t.elementType?s:Ht(t.type,s),o.props=d,f=t.pendingProps,p=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Rt(l):(l=xt(n)?Ii:st.current,l=Er(t,l));var g=n.getDerivedStateFromProps;(u=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==f||p!==l)&&fh(t,o,i,l),Un=!1,p=t.memoizedState,o.state=p,zs(t,i,o,r);var x=t.memoizedState;s!==f||p!==x||vt.current||Un?(typeof g=="function"&&(Ad(t,n,g,i),x=t.memoizedState),(d=Un||uh(t,n,d,i,p,x,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,x,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,x,l)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=x),o.props=i,o.state=x,o.context=l,i=d):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),i=!1)}return zd(e,t,n,i,a,r)}function zd(e,t,n,i,r,a){F1(e,t);var o=(t.flags&128)!==0;if(!i&&!o)return r&&ih(t,n,!1),In(e,t,a);i=t.stateNode,lb.current=t;var s=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return t.flags|=1,e!==null&&o?(t.child=Gr(t,e.child,null,a),t.child=Gr(t,null,s,a)):lt(e,t,s,a),t.memoizedState=i.state,r&&ih(t,n,!0),t.child}function $1(e){var t=e.stateNode;t.pendingContext?nh(e,t.pendingContext,t.pendingContext!==t.context):t.context&&nh(e,t.context,!1),ef(e,t.containerInfo)}function yh(e,t,n,i,r){return Pr(),Yu(r),t.flags|=256,lt(e,t,n,i),t.child}var _d={dehydrated:null,treeContext:null,retryLane:0};function Md(e){return{baseLanes:e,cachePool:null,transitions:null}}function B1(e,t,n){var i=t.pendingProps,r=ke.current,a=!1,o=(t.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(r&2)!==0),s?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(r|=1),he(ke,r&1),e===null)return kd(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=i.children,e=i.fallback,a?(i=t.mode,a=t.child,o={mode:"hidden",children:o},!(i&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=xl(o,i,0,null),e=_i(e,i,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=Md(n),t.memoizedState=_d,e):cf(t,o));if(r=e.memoizedState,r!==null&&(s=r.dehydrated,s!==null))return cb(e,t,o,i,s,r,n);if(a){a=i.fallback,o=t.mode,r=e.child,s=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&t.child!==r?(i=t.child,i.childLanes=0,i.pendingProps=l,t.deletions=null):(i=ai(r,l),i.subtreeFlags=r.subtreeFlags&14680064),s!==null?a=ai(s,a):(a=_i(a,o,n,null),a.flags|=2),a.return=t,i.return=t,i.sibling=a,t.child=i,i=a,a=t.child,o=e.child.memoizedState,o=o===null?Md(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~n,t.memoizedState=_d,i}return a=e.child,e=a.sibling,i=ai(a,{mode:"visible",children:i.children}),!(t.mode&1)&&(i.lanes=n),i.return=t,i.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=i,t.memoizedState=null,i}function cf(e,t){return t=xl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function _o(e,t,n,i){return i!==null&&Yu(i),Gr(t,e.child,null,n),e=cf(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function cb(e,t,n,i,r,a,o){if(n)return t.flags&256?(t.flags&=-257,i=vc(Error(N(422))),_o(e,t,o,i)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=i.fallback,r=t.mode,i=xl({mode:"visible",children:i.children},r,0,null),a=_i(a,r,o,null),a.flags|=2,i.return=t,a.return=t,i.sibling=a,t.child=i,t.mode&1&&Gr(t,e.child,null,o),t.child.memoizedState=Md(o),t.memoizedState=_d,a);if(!(t.mode&1))return _o(e,t,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var s=i.dgst;return i=s,a=Error(N(419)),i=vc(a,i,void 0),_o(e,t,o,i)}if(s=(o&e.childLanes)!==0,gt||s){if(i=Ye,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==a.retryLane&&(a.retryLane=r,On(e,r),Kt(i,e,r,-1))}return mf(),i=vc(Error(N(421))),_o(e,t,o,i)}return r.data==="$?"?(t.flags|=128,t.child=e.child,t=Sb.bind(null,e),r._reactRetry=t,null):(e=a.treeContext,Ct=ti(r.nextSibling),kt=t,Se=!0,Wt=null,e!==null&&(Mt[Lt++]=Cn,Mt[Lt++]=kn,Mt[Lt++]=Ri,Cn=e.id,kn=e.overflow,Ri=t),t=cf(t,i.children),t.flags|=4096,t)}function wh(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),Td(e.return,t,n)}function xc(e,t,n,i,r){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=i,a.tail=n,a.tailMode=r)}function H1(e,t,n){var i=t.pendingProps,r=i.revealOrder,a=i.tail;if(lt(e,t,i.children,n),i=ke.current,i&2)i=i&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&wh(e,n,t);else if(e.tag===19)wh(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}if(he(ke,i),!(t.mode&1))t.memoizedState=null;else switch(r){case"forwards":for(n=t.child,r=null;n!==null;)e=n.alternate,e!==null&&_s(e)===null&&(r=n),n=n.sibling;n=r,n===null?(r=t.child,t.child=null):(r=n.sibling,n.sibling=null),xc(t,!1,r,n,a);break;case"backwards":for(n=null,r=t.child,t.child=null;r!==null;){if(e=r.alternate,e!==null&&_s(e)===null){t.child=r;break}e=r.sibling,r.sibling=n,n=r,r=e}xc(t,!0,n,null,a);break;case"together":xc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function es(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function In(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Vi|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(N(153));if(t.child!==null){for(e=t.child,n=ai(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ai(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function db(e,t,n){switch(t.tag){case 3:$1(t),Pr();break;case 5:g1(t);break;case 1:xt(t.type)&&Ts(t);break;case 4:ef(t,t.stateNode.containerInfo);break;case 10:var i=t.type._context,r=t.memoizedProps.value;he(Ps,i._currentValue),i._currentValue=r;break;case 13:if(i=t.memoizedState,i!==null)return i.dehydrated!==null?(he(ke,ke.current&1),t.flags|=128,null):n&t.child.childLanes?B1(e,t,n):(he(ke,ke.current&1),e=In(e,t,n),e!==null?e.sibling:null);he(ke,ke.current&1);break;case 19:if(i=(n&t.childLanes)!==0,e.flags&128){if(i)return H1(e,t,n);t.flags|=128}if(r=t.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),he(ke,ke.current),i)break;return null;case 22:case 23:return t.lanes=0,N1(e,t,n)}return In(e,t,n)}var U1,Ld,W1,q1;U1=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ld=function(){};W1=function(e,t,n,i){var r=e.memoizedProps;if(r!==i){e=t.stateNode,Ei(un.current);var a=null;switch(n){case"input":r=nd(e,r),i=nd(e,i),a=[];break;case"select":r=Pe({},r,{value:void 0}),i=Pe({},i,{value:void 0}),a=[];break;case"textarea":r=ad(e,r),i=ad(e,i),a=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(e.onclick=Cs)}sd(n,i);var o;n=null;for(d in r)if(!i.hasOwnProperty(d)&&r.hasOwnProperty(d)&&r[d]!=null)if(d==="style"){var s=r[d];for(o in s)s.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(La.hasOwnProperty(d)?a||(a=[]):(a=a||[]).push(d,null));for(d in i){var l=i[d];if(s=r!=null?r[d]:void 0,i.hasOwnProperty(d)&&l!==s&&(l!=null||s!=null))if(d==="style")if(s){for(o in s)!s.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&s[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(a||(a=[]),a.push(d,n)),n=l;else d==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(a=a||[]).push(d,l)):d==="children"?typeof l!="string"&&typeof l!="number"||(a=a||[]).push(d,""+l):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(La.hasOwnProperty(d)?(l!=null&&d==="onScroll"&&me("scroll",e),a||s===l||(a=[])):(a=a||[]).push(d,l))}n&&(a=a||[]).push("style",n);var d=a;(t.updateQueue=d)&&(t.flags|=4)}};q1=function(e,t,n,i){n!==i&&(t.flags|=4)};function ra(e,t){if(!Se)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function nt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var r=e.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function ub(e,t,n){var i=t.pendingProps;switch(qu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return nt(t),null;case 1:return xt(t.type)&&ks(),nt(t),null;case 3:return i=t.stateNode,zr(),xe(vt),xe(st),nf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(Go(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Wt!==null&&($d(Wt),Wt=null))),Ld(e,t),nt(t),null;case 5:tf(t);var r=Ei(Wa.current);if(n=t.type,e!==null&&t.stateNode!=null)W1(e,t,n,i,r),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!i){if(t.stateNode===null)throw Error(N(166));return nt(t),null}if(e=Ei(un.current),Go(t)){i=t.stateNode,n=t.type;var a=t.memoizedProps;switch(i[sn]=t,i[Ha]=a,e=(t.mode&1)!==0,n){case"dialog":me("cancel",i),me("close",i);break;case"iframe":case"object":case"embed":me("load",i);break;case"video":case"audio":for(r=0;r<ha.length;r++)me(ha[r],i);break;case"source":me("error",i);break;case"img":case"image":case"link":me("error",i),me("load",i);break;case"details":me("toggle",i);break;case"input":Pp(i,a),me("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!a.multiple},me("invalid",i);break;case"textarea":zp(i,a),me("invalid",i)}sd(n,a),r=null;for(var o in a)if(a.hasOwnProperty(o)){var s=a[o];o==="children"?typeof s=="string"?i.textContent!==s&&(a.suppressHydrationWarning!==!0&&Po(i.textContent,s,e),r=["children",s]):typeof s=="number"&&i.textContent!==""+s&&(a.suppressHydrationWarning!==!0&&Po(i.textContent,s,e),r=["children",""+s]):La.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&me("scroll",i)}switch(n){case"input":bo(i),Gp(i,a,!0);break;case"textarea":bo(i),_p(i);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(i.onclick=Cs)}i=r,t.updateQueue=i,i!==null&&(t.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=bg(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof i.is=="string"?e=o.createElement(n,{is:i.is}):(e=o.createElement(n),n==="select"&&(o=e,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):e=o.createElementNS(e,n),e[sn]=t,e[Ha]=i,U1(e,t,!1,!1),t.stateNode=e;e:{switch(o=ld(n,i),n){case"dialog":me("cancel",e),me("close",e),r=i;break;case"iframe":case"object":case"embed":me("load",e),r=i;break;case"video":case"audio":for(r=0;r<ha.length;r++)me(ha[r],e);r=i;break;case"source":me("error",e),r=i;break;case"img":case"image":case"link":me("error",e),me("load",e),r=i;break;case"details":me("toggle",e),r=i;break;case"input":Pp(e,i),r=nd(e,i),me("invalid",e);break;case"option":r=i;break;case"select":e._wrapperState={wasMultiple:!!i.multiple},r=Pe({},i,{value:void 0}),me("invalid",e);break;case"textarea":zp(e,i),r=ad(e,i),me("invalid",e);break;default:r=i}sd(n,r),s=r;for(a in s)if(s.hasOwnProperty(a)){var l=s[a];a==="style"?Cg(e,l):a==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Sg(e,l)):a==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Oa(e,l):typeof l=="number"&&Oa(e,""+l):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(La.hasOwnProperty(a)?l!=null&&a==="onScroll"&&me("scroll",e):l!=null&&_u(e,a,l,o))}switch(n){case"input":bo(e),Gp(e,i,!1);break;case"textarea":bo(e),_p(e);break;case"option":i.value!=null&&e.setAttribute("value",""+li(i.value));break;case"select":e.multiple=!!i.multiple,a=i.value,a!=null?xr(e,!!i.multiple,a,!1):i.defaultValue!=null&&xr(e,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(e.onclick=Cs)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return nt(t),null;case 6:if(e&&t.stateNode!=null)q1(e,t,e.memoizedProps,i);else{if(typeof i!="string"&&t.stateNode===null)throw Error(N(166));if(n=Ei(Wa.current),Ei(un.current),Go(t)){if(i=t.stateNode,n=t.memoizedProps,i[sn]=t,(a=i.nodeValue!==n)&&(e=kt,e!==null))switch(e.tag){case 3:Po(i.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Po(i.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[sn]=t,t.stateNode=i}return nt(t),null;case 13:if(xe(ke),i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Se&&Ct!==null&&t.mode&1&&!(t.flags&128))u1(),Pr(),t.flags|=98560,a=!1;else if(a=Go(t),i!==null&&i.dehydrated!==null){if(e===null){if(!a)throw Error(N(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(N(317));a[sn]=t}else Pr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;nt(t),a=!1}else Wt!==null&&($d(Wt),Wt=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(i=i!==null,i!==(e!==null&&e.memoizedState!==null)&&i&&(t.child.flags|=8192,t.mode&1&&(e===null||ke.current&1?$e===0&&($e=3):mf())),t.updateQueue!==null&&(t.flags|=4),nt(t),null);case 4:return zr(),Ld(e,t),e===null&&$a(t.stateNode.containerInfo),nt(t),null;case 10:return Qu(t.type._context),nt(t),null;case 17:return xt(t.type)&&ks(),nt(t),null;case 19:if(xe(ke),a=t.memoizedState,a===null)return nt(t),null;if(i=(t.flags&128)!==0,o=a.rendering,o===null)if(i)ra(a,!1);else{if($e!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=_s(e),o!==null){for(t.flags|=128,ra(a,!1),i=o.updateQueue,i!==null&&(t.updateQueue=i,t.flags|=4),t.subtreeFlags=0,i=n,n=t.child;n!==null;)a=n,e=i,a.flags&=14680066,o=a.alternate,o===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=o.childLanes,a.lanes=o.lanes,a.child=o.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=o.memoizedProps,a.memoizedState=o.memoizedState,a.updateQueue=o.updateQueue,a.type=o.type,e=o.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return he(ke,ke.current&1|2),t.child}e=e.sibling}a.tail!==null&&Le()>Mr&&(t.flags|=128,i=!0,ra(a,!1),t.lanes=4194304)}else{if(!i)if(e=_s(o),e!==null){if(t.flags|=128,i=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ra(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!Se)return nt(t),null}else 2*Le()-a.renderingStartTime>Mr&&n!==1073741824&&(t.flags|=128,i=!0,ra(a,!1),t.lanes=4194304);a.isBackwards?(o.sibling=t.child,t.child=o):(n=a.last,n!==null?n.sibling=o:t.child=o,a.last=o)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=Le(),t.sibling=null,n=ke.current,he(ke,i?n&1|2:n&1),t):(nt(t),null);case 22:case 23:return hf(),i=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==i&&(t.flags|=8192),i&&t.mode&1?St&1073741824&&(nt(t),t.subtreeFlags&6&&(t.flags|=8192)):nt(t),null;case 24:return null;case 25:return null}throw Error(N(156,t.tag))}function fb(e,t){switch(qu(t),t.tag){case 1:return xt(t.type)&&ks(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return zr(),xe(vt),xe(st),nf(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return tf(t),null;case 13:if(xe(ke),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(N(340));Pr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return xe(ke),null;case 4:return zr(),null;case 10:return Qu(t.type._context),null;case 22:case 23:return hf(),null;case 24:return null;default:return null}}var Mo=!1,rt=!1,pb=typeof WeakSet=="function"?WeakSet:Set,H=null;function dr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Ge(e,t,i)}else n.current=null}function Od(e,t,n){try{n()}catch(i){Ge(e,t,i)}}var bh=!1;function hb(e,t){if(xd=bs,e=Zg(),Uu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,a=i.focusNode;i=i.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var o=0,s=-1,l=-1,d=0,u=0,f=e,p=null;t:for(;;){for(var g;f!==n||r!==0&&f.nodeType!==3||(s=o+r),f!==a||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(g=f.firstChild)!==null;)p=f,f=g;for(;;){if(f===e)break t;if(p===n&&++d===r&&(s=o),p===a&&++u===i&&(l=o),(g=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=g}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(yd={focusedElem:e,selectionRange:n},bs=!1,H=t;H!==null;)if(t=H,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,H=e;else for(;H!==null;){t=H;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var y=x.memoizedProps,b=x.memoizedState,v=t.stateNode,h=v.getSnapshotBeforeUpdate(t.elementType===t.type?y:Ht(t.type,y),b);v.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(N(163))}}catch(w){Ge(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,H=e;break}H=t.return}return x=bh,bh=!1,x}function Ca(e,t,n){var i=t.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&e)===e){var a=r.destroy;r.destroy=void 0,a!==void 0&&Od(t,n,a)}r=r.next}while(r!==i)}}function gl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var i=n.create;n.destroy=i()}n=n.next}while(n!==t)}}function Id(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Y1(e){var t=e.alternate;t!==null&&(e.alternate=null,Y1(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[sn],delete t[Ha],delete t[Sd],delete t[Xw],delete t[Qw])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function K1(e){return e.tag===5||e.tag===3||e.tag===4}function Sh(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||K1(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Rd(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Cs));else if(i!==4&&(e=e.child,e!==null))for(Rd(e,t,n),e=e.sibling;e!==null;)Rd(e,t,n),e=e.sibling}function Dd(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(e=e.child,e!==null))for(Dd(e,t,n),e=e.sibling;e!==null;)Dd(e,t,n),e=e.sibling}var Qe=null,Ut=!1;function Nn(e,t,n){for(n=n.child;n!==null;)X1(e,t,n),n=n.sibling}function X1(e,t,n){if(dn&&typeof dn.onCommitFiberUnmount=="function")try{dn.onCommitFiberUnmount(ll,n)}catch{}switch(n.tag){case 5:rt||dr(n,t);case 6:var i=Qe,r=Ut;Qe=null,Nn(e,t,n),Qe=i,Ut=r,Qe!==null&&(Ut?(e=Qe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Qe.removeChild(n.stateNode));break;case 18:Qe!==null&&(Ut?(e=Qe,n=n.stateNode,e.nodeType===8?uc(e.parentNode,n):e.nodeType===1&&uc(e,n),Va(e)):uc(Qe,n.stateNode));break;case 4:i=Qe,r=Ut,Qe=n.stateNode.containerInfo,Ut=!0,Nn(e,t,n),Qe=i,Ut=r;break;case 0:case 11:case 14:case 15:if(!rt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var a=r,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&Od(n,t,o),r=r.next}while(r!==i)}Nn(e,t,n);break;case 1:if(!rt&&(dr(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(s){Ge(n,t,s)}Nn(e,t,n);break;case 21:Nn(e,t,n);break;case 22:n.mode&1?(rt=(i=rt)||n.memoizedState!==null,Nn(e,t,n),rt=i):Nn(e,t,n);break;default:Nn(e,t,n)}}function jh(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new pb),t.forEach(function(i){var r=jb.bind(null,e,i);n.has(i)||(n.add(i),i.then(r,r))})}}function $t(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var a=e,o=t,s=o;e:for(;s!==null;){switch(s.tag){case 5:Qe=s.stateNode,Ut=!1;break e;case 3:Qe=s.stateNode.containerInfo,Ut=!0;break e;case 4:Qe=s.stateNode.containerInfo,Ut=!0;break e}s=s.return}if(Qe===null)throw Error(N(160));X1(a,o,r),Qe=null,Ut=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(d){Ge(r,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Q1(t,e),t=t.sibling}function Q1(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if($t(t,e),tn(e),i&4){try{Ca(3,e,e.return),gl(3,e)}catch(y){Ge(e,e.return,y)}try{Ca(5,e,e.return)}catch(y){Ge(e,e.return,y)}}break;case 1:$t(t,e),tn(e),i&512&&n!==null&&dr(n,n.return);break;case 5:if($t(t,e),tn(e),i&512&&n!==null&&dr(n,n.return),e.flags&32){var r=e.stateNode;try{Oa(r,"")}catch(y){Ge(e,e.return,y)}}if(i&4&&(r=e.stateNode,r!=null)){var a=e.memoizedProps,o=n!==null?n.memoizedProps:a,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&a.type==="radio"&&a.name!=null&&yg(r,a),ld(s,o);var d=ld(s,a);for(o=0;o<l.length;o+=2){var u=l[o],f=l[o+1];u==="style"?Cg(r,f):u==="dangerouslySetInnerHTML"?Sg(r,f):u==="children"?Oa(r,f):_u(r,u,f,d)}switch(s){case"input":id(r,a);break;case"textarea":wg(r,a);break;case"select":var p=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!a.multiple;var g=a.value;g!=null?xr(r,!!a.multiple,g,!1):p!==!!a.multiple&&(a.defaultValue!=null?xr(r,!!a.multiple,a.defaultValue,!0):xr(r,!!a.multiple,a.multiple?[]:"",!1))}r[Ha]=a}catch(y){Ge(e,e.return,y)}}break;case 6:if($t(t,e),tn(e),i&4){if(e.stateNode===null)throw Error(N(162));r=e.stateNode,a=e.memoizedProps;try{r.nodeValue=a}catch(y){Ge(e,e.return,y)}}break;case 3:if($t(t,e),tn(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Va(t.containerInfo)}catch(y){Ge(e,e.return,y)}break;case 4:$t(t,e),tn(e);break;case 13:$t(t,e),tn(e),r=e.child,r.flags&8192&&(a=r.memoizedState!==null,r.stateNode.isHidden=a,!a||r.alternate!==null&&r.alternate.memoizedState!==null||(ff=Le())),i&4&&jh(e);break;case 22:if(u=n!==null&&n.memoizedState!==null,e.mode&1?(rt=(d=rt)||u,$t(t,e),rt=d):$t(t,e),tn(e),i&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!u&&e.mode&1)for(H=e,u=e.child;u!==null;){for(f=H=u;H!==null;){switch(p=H,g=p.child,p.tag){case 0:case 11:case 14:case 15:Ca(4,p,p.return);break;case 1:dr(p,p.return);var x=p.stateNode;if(typeof x.componentWillUnmount=="function"){i=p,n=p.return;try{t=i,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(y){Ge(i,n,y)}}break;case 5:dr(p,p.return);break;case 22:if(p.memoizedState!==null){kh(f);continue}}g!==null?(g.return=p,H=g):kh(f)}u=u.sibling}e:for(u=null,f=e;;){if(f.tag===5){if(u===null){u=f;try{r=f.stateNode,d?(a=r.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(s=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=jg("display",o))}catch(y){Ge(e,e.return,y)}}}else if(f.tag===6){if(u===null)try{f.stateNode.nodeValue=d?"":f.memoizedProps}catch(y){Ge(e,e.return,y)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;u===f&&(u=null),f=f.return}u===f&&(u=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:$t(t,e),tn(e),i&4&&jh(e);break;case 21:break;default:$t(t,e),tn(e)}}function tn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(K1(n)){var i=n;break e}n=n.return}throw Error(N(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Oa(r,""),i.flags&=-33);var a=Sh(e);Dd(e,a,r);break;case 3:case 4:var o=i.stateNode.containerInfo,s=Sh(e);Rd(e,s,o);break;default:throw Error(N(161))}}catch(l){Ge(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function mb(e,t,n){H=e,Z1(e)}function Z1(e,t,n){for(var i=(e.mode&1)!==0;H!==null;){var r=H,a=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Mo;if(!o){var s=r.alternate,l=s!==null&&s.memoizedState!==null||rt;s=Mo;var d=rt;if(Mo=o,(rt=l)&&!d)for(H=r;H!==null;)o=H,l=o.child,o.tag===22&&o.memoizedState!==null?Th(r):l!==null?(l.return=o,H=l):Th(r);for(;a!==null;)H=a,Z1(a),a=a.sibling;H=r,Mo=s,rt=d}Ch(e)}else r.subtreeFlags&8772&&a!==null?(a.return=r,H=a):Ch(e)}}function Ch(e){for(;H!==null;){var t=H;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:rt||gl(5,t);break;case 1:var i=t.stateNode;if(t.flags&4&&!rt)if(n===null)i.componentDidMount();else{var r=t.elementType===t.type?n.memoizedProps:Ht(t.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&lh(t,a,i);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}lh(t,o,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var u=d.memoizedState;if(u!==null){var f=u.dehydrated;f!==null&&Va(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(N(163))}rt||t.flags&512&&Id(t)}catch(p){Ge(t,t.return,p)}}if(t===e){H=null;break}if(n=t.sibling,n!==null){n.return=t.return,H=n;break}H=t.return}}function kh(e){for(;H!==null;){var t=H;if(t===e){H=null;break}var n=t.sibling;if(n!==null){n.return=t.return,H=n;break}H=t.return}}function Th(e){for(;H!==null;){var t=H;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{gl(4,t)}catch(l){Ge(t,n,l)}break;case 1:var i=t.stateNode;if(typeof i.componentDidMount=="function"){var r=t.return;try{i.componentDidMount()}catch(l){Ge(t,r,l)}}var a=t.return;try{Id(t)}catch(l){Ge(t,a,l)}break;case 5:var o=t.return;try{Id(t)}catch(l){Ge(t,o,l)}}}catch(l){Ge(t,t.return,l)}if(t===e){H=null;break}var s=t.sibling;if(s!==null){s.return=t.return,H=s;break}H=t.return}}var gb=Math.ceil,Os=Dn.ReactCurrentDispatcher,df=Dn.ReactCurrentOwner,It=Dn.ReactCurrentBatchConfig,oe=0,Ye=null,De=null,Ze=0,St=0,ur=pi(0),$e=0,Xa=null,Vi=0,vl=0,uf=0,ka=null,mt=null,ff=0,Mr=1/0,bn=null,Is=!1,Vd=null,ii=null,Lo=!1,Kn=null,Rs=0,Ta=0,Nd=null,ts=-1,ns=0;function dt(){return oe&6?Le():ts!==-1?ts:ts=Le()}function ri(e){return e.mode&1?oe&2&&Ze!==0?Ze&-Ze:Jw.transition!==null?(ns===0&&(ns=Ig()),ns):(e=de,e!==0||(e=window.event,e=e===void 0?16:Bg(e.type)),e):1}function Kt(e,t,n,i){if(50<Ta)throw Ta=0,Nd=null,Error(N(185));oo(e,n,i),(!(oe&2)||e!==Ye)&&(e===Ye&&(!(oe&2)&&(vl|=n),$e===4&&qn(e,Ze)),yt(e,i),n===1&&oe===0&&!(t.mode&1)&&(Mr=Le()+500,pl&&hi()))}function yt(e,t){var n=e.callbackNode;J2(e,t);var i=ws(e,e===Ye?Ze:0);if(i===0)n!==null&&Op(n),e.callbackNode=null,e.callbackPriority=0;else if(t=i&-i,e.callbackPriority!==t){if(n!=null&&Op(n),t===1)e.tag===0?Zw(Ah.bind(null,e)):l1(Ah.bind(null,e)),Yw(function(){!(oe&6)&&hi()}),n=null;else{switch(Rg(i)){case 1:n=Ru;break;case 4:n=Lg;break;case 16:n=ys;break;case 536870912:n=Og;break;default:n=ys}n=ov(n,J1.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function J1(e,t){if(ts=-1,ns=0,oe&6)throw Error(N(327));var n=e.callbackNode;if(jr()&&e.callbackNode!==n)return null;var i=ws(e,e===Ye?Ze:0);if(i===0)return null;if(i&30||i&e.expiredLanes||t)t=Ds(e,i);else{t=i;var r=oe;oe|=2;var a=tv();(Ye!==e||Ze!==t)&&(bn=null,Mr=Le()+500,zi(e,t));do try{yb();break}catch(s){ev(e,s)}while(!0);Xu(),Os.current=a,oe=r,De!==null?t=0:(Ye=null,Ze=0,t=$e)}if(t!==0){if(t===2&&(r=pd(e),r!==0&&(i=r,t=Fd(e,r))),t===1)throw n=Xa,zi(e,0),qn(e,i),yt(e,Le()),n;if(t===6)qn(e,i);else{if(r=e.current.alternate,!(i&30)&&!vb(r)&&(t=Ds(e,i),t===2&&(a=pd(e),a!==0&&(i=a,t=Fd(e,a))),t===1))throw n=Xa,zi(e,0),qn(e,i),yt(e,Le()),n;switch(e.finishedWork=r,e.finishedLanes=i,t){case 0:case 1:throw Error(N(345));case 2:ji(e,mt,bn);break;case 3:if(qn(e,i),(i&130023424)===i&&(t=ff+500-Le(),10<t)){if(ws(e,0)!==0)break;if(r=e.suspendedLanes,(r&i)!==i){dt(),e.pingedLanes|=e.suspendedLanes&r;break}e.timeoutHandle=bd(ji.bind(null,e,mt,bn),t);break}ji(e,mt,bn);break;case 4:if(qn(e,i),(i&4194240)===i)break;for(t=e.eventTimes,r=-1;0<i;){var o=31-Yt(i);a=1<<o,o=t[o],o>r&&(r=o),i&=~a}if(i=r,i=Le()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*gb(i/1960))-i,10<i){e.timeoutHandle=bd(ji.bind(null,e,mt,bn),i);break}ji(e,mt,bn);break;case 5:ji(e,mt,bn);break;default:throw Error(N(329))}}}return yt(e,Le()),e.callbackNode===n?J1.bind(null,e):null}function Fd(e,t){var n=ka;return e.current.memoizedState.isDehydrated&&(zi(e,t).flags|=256),e=Ds(e,t),e!==2&&(t=mt,mt=n,t!==null&&$d(t)),e}function $d(e){mt===null?mt=e:mt.push.apply(mt,e)}function vb(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],a=r.getSnapshot;r=r.value;try{if(!Qt(a(),r))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function qn(e,t){for(t&=~uf,t&=~vl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Yt(t),i=1<<n;e[n]=-1,t&=~i}}function Ah(e){if(oe&6)throw Error(N(327));jr();var t=ws(e,0);if(!(t&1))return yt(e,Le()),null;var n=Ds(e,t);if(e.tag!==0&&n===2){var i=pd(e);i!==0&&(t=i,n=Fd(e,i))}if(n===1)throw n=Xa,zi(e,0),qn(e,t),yt(e,Le()),n;if(n===6)throw Error(N(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,ji(e,mt,bn),yt(e,Le()),null}function pf(e,t){var n=oe;oe|=1;try{return e(t)}finally{oe=n,oe===0&&(Mr=Le()+500,pl&&hi())}}function Ni(e){Kn!==null&&Kn.tag===0&&!(oe&6)&&jr();var t=oe;oe|=1;var n=It.transition,i=de;try{if(It.transition=null,de=1,e)return e()}finally{de=i,It.transition=n,oe=t,!(oe&6)&&hi()}}function hf(){St=ur.current,xe(ur)}function zi(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,qw(n)),De!==null)for(n=De.return;n!==null;){var i=n;switch(qu(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&ks();break;case 3:zr(),xe(vt),xe(st),nf();break;case 5:tf(i);break;case 4:zr();break;case 13:xe(ke);break;case 19:xe(ke);break;case 10:Qu(i.type._context);break;case 22:case 23:hf()}n=n.return}if(Ye=e,De=e=ai(e.current,null),Ze=St=t,$e=0,Xa=null,uf=vl=Vi=0,mt=ka=null,Ai!==null){for(t=0;t<Ai.length;t++)if(n=Ai[t],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,a=n.pending;if(a!==null){var o=a.next;a.next=r,i.next=o}n.pending=i}Ai=null}return e}function ev(e,t){do{var n=De;try{if(Xu(),Zo.current=Ls,Ms){for(var i=Ee.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Ms=!1}if(Di=0,We=Ne=Ee=null,ja=!1,qa=0,df.current=null,n===null||n.return===null){$e=1,Xa=t,De=null;break}e:{var a=e,o=n.return,s=n,l=t;if(t=Ze,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var d=l,u=s,f=u.tag;if(!(u.mode&1)&&(f===0||f===11||f===15)){var p=u.alternate;p?(u.updateQueue=p.updateQueue,u.memoizedState=p.memoizedState,u.lanes=p.lanes):(u.updateQueue=null,u.memoizedState=null)}var g=hh(o);if(g!==null){g.flags&=-257,mh(g,o,s,a,t),g.mode&1&&ph(a,d,t),t=g,l=d;var x=t.updateQueue;if(x===null){var y=new Set;y.add(l),t.updateQueue=y}else x.add(l);break e}else{if(!(t&1)){ph(a,d,t),mf();break e}l=Error(N(426))}}else if(Se&&s.mode&1){var b=hh(o);if(b!==null){!(b.flags&65536)&&(b.flags|=256),mh(b,o,s,a,t),Yu(_r(l,s));break e}}a=l=_r(l,s),$e!==4&&($e=2),ka===null?ka=[a]:ka.push(a),a=o;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var v=R1(a,l,t);sh(a,v);break e;case 1:s=l;var h=a.type,m=a.stateNode;if(!(a.flags&128)&&(typeof h.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(ii===null||!ii.has(m)))){a.flags|=65536,t&=-t,a.lanes|=t;var w=D1(a,s,t);sh(a,w);break e}}a=a.return}while(a!==null)}iv(n)}catch(S){t=S,De===n&&n!==null&&(De=n=n.return);continue}break}while(!0)}function tv(){var e=Os.current;return Os.current=Ls,e===null?Ls:e}function mf(){($e===0||$e===3||$e===2)&&($e=4),Ye===null||!(Vi&268435455)&&!(vl&268435455)||qn(Ye,Ze)}function Ds(e,t){var n=oe;oe|=2;var i=tv();(Ye!==e||Ze!==t)&&(bn=null,zi(e,t));do try{xb();break}catch(r){ev(e,r)}while(!0);if(Xu(),oe=n,Os.current=i,De!==null)throw Error(N(261));return Ye=null,Ze=0,$e}function xb(){for(;De!==null;)nv(De)}function yb(){for(;De!==null&&!H2();)nv(De)}function nv(e){var t=av(e.alternate,e,St);e.memoizedProps=e.pendingProps,t===null?iv(e):De=t,df.current=null}function iv(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=fb(n,t),n!==null){n.flags&=32767,De=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{$e=6,De=null;return}}else if(n=ub(n,t,St),n!==null){De=n;return}if(t=t.sibling,t!==null){De=t;return}De=t=e}while(t!==null);$e===0&&($e=5)}function ji(e,t,n){var i=de,r=It.transition;try{It.transition=null,de=1,wb(e,t,n,i)}finally{It.transition=r,de=i}return null}function wb(e,t,n,i){do jr();while(Kn!==null);if(oe&6)throw Error(N(327));n=e.finishedWork;var r=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(N(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(ew(e,a),e===Ye&&(De=Ye=null,Ze=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Lo||(Lo=!0,ov(ys,function(){return jr(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=It.transition,It.transition=null;var o=de;de=1;var s=oe;oe|=4,df.current=null,hb(e,n),Q1(n,e),Nw(yd),bs=!!xd,yd=xd=null,e.current=n,mb(n),U2(),oe=s,de=o,It.transition=a}else e.current=n;if(Lo&&(Lo=!1,Kn=e,Rs=r),a=e.pendingLanes,a===0&&(ii=null),Y2(n.stateNode),yt(e,Le()),t!==null)for(i=e.onRecoverableError,n=0;n<t.length;n++)r=t[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Is)throw Is=!1,e=Vd,Vd=null,e;return Rs&1&&e.tag!==0&&jr(),a=e.pendingLanes,a&1?e===Nd?Ta++:(Ta=0,Nd=e):Ta=0,hi(),null}function jr(){if(Kn!==null){var e=Rg(Rs),t=It.transition,n=de;try{if(It.transition=null,de=16>e?16:e,Kn===null)var i=!1;else{if(e=Kn,Kn=null,Rs=0,oe&6)throw Error(N(331));var r=oe;for(oe|=4,H=e.current;H!==null;){var a=H,o=a.child;if(H.flags&16){var s=a.deletions;if(s!==null){for(var l=0;l<s.length;l++){var d=s[l];for(H=d;H!==null;){var u=H;switch(u.tag){case 0:case 11:case 15:Ca(8,u,a)}var f=u.child;if(f!==null)f.return=u,H=f;else for(;H!==null;){u=H;var p=u.sibling,g=u.return;if(Y1(u),u===d){H=null;break}if(p!==null){p.return=g,H=p;break}H=g}}}var x=a.alternate;if(x!==null){var y=x.child;if(y!==null){x.child=null;do{var b=y.sibling;y.sibling=null,y=b}while(y!==null)}}H=a}}if(a.subtreeFlags&2064&&o!==null)o.return=a,H=o;else e:for(;H!==null;){if(a=H,a.flags&2048)switch(a.tag){case 0:case 11:case 15:Ca(9,a,a.return)}var v=a.sibling;if(v!==null){v.return=a.return,H=v;break e}H=a.return}}var h=e.current;for(H=h;H!==null;){o=H;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,H=m;else e:for(o=h;H!==null;){if(s=H,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:gl(9,s)}}catch(S){Ge(s,s.return,S)}if(s===o){H=null;break e}var w=s.sibling;if(w!==null){w.return=s.return,H=w;break e}H=s.return}}if(oe=r,hi(),dn&&typeof dn.onPostCommitFiberRoot=="function")try{dn.onPostCommitFiberRoot(ll,e)}catch{}i=!0}return i}finally{de=n,It.transition=t}}return!1}function Eh(e,t,n){t=_r(n,t),t=R1(e,t,1),e=ni(e,t,1),t=dt(),e!==null&&(oo(e,1,t),yt(e,t))}function Ge(e,t,n){if(e.tag===3)Eh(e,e,n);else for(;t!==null;){if(t.tag===3){Eh(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ii===null||!ii.has(i))){e=_r(n,e),e=D1(t,e,1),t=ni(t,e,1),e=dt(),t!==null&&(oo(t,1,e),yt(t,e));break}}t=t.return}}function bb(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),t=dt(),e.pingedLanes|=e.suspendedLanes&n,Ye===e&&(Ze&n)===n&&($e===4||$e===3&&(Ze&130023424)===Ze&&500>Le()-ff?zi(e,0):uf|=n),yt(e,t)}function rv(e,t){t===0&&(e.mode&1?(t=Co,Co<<=1,!(Co&130023424)&&(Co=4194304)):t=1);var n=dt();e=On(e,t),e!==null&&(oo(e,t,n),yt(e,n))}function Sb(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),rv(e,n)}function jb(e,t){var n=0;switch(e.tag){case 13:var i=e.stateNode,r=e.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=e.stateNode;break;default:throw Error(N(314))}i!==null&&i.delete(t),rv(e,n)}var av;av=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||vt.current)gt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return gt=!1,db(e,t,n);gt=!!(e.flags&131072)}else gt=!1,Se&&t.flags&1048576&&c1(t,Es,t.index);switch(t.lanes=0,t.tag){case 2:var i=t.type;es(e,t),e=t.pendingProps;var r=Er(t,st.current);Sr(t,n),r=af(null,t,i,e,r,n);var a=of();return t.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,xt(i)?(a=!0,Ts(t)):a=!1,t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Ju(t),r.updater=ml,t.stateNode=r,r._reactInternals=t,Ed(t,i,e,n),t=zd(null,t,i,!0,a,n)):(t.tag=0,Se&&a&&Wu(t),lt(null,t,r,n),t=t.child),t;case 16:i=t.elementType;e:{switch(es(e,t),e=t.pendingProps,r=i._init,i=r(i._payload),t.type=i,r=t.tag=kb(i),e=Ht(i,e),r){case 0:t=Gd(null,t,i,e,n);break e;case 1:t=xh(null,t,i,e,n);break e;case 11:t=gh(null,t,i,e,n);break e;case 14:t=vh(null,t,i,Ht(i.type,e),n);break e}throw Error(N(306,i,""))}return t;case 0:return i=t.type,r=t.pendingProps,r=t.elementType===i?r:Ht(i,r),Gd(e,t,i,r,n);case 1:return i=t.type,r=t.pendingProps,r=t.elementType===i?r:Ht(i,r),xh(e,t,i,r,n);case 3:e:{if($1(t),e===null)throw Error(N(387));i=t.pendingProps,a=t.memoizedState,r=a.element,m1(e,t),zs(t,i,null,n);var o=t.memoizedState;if(i=o.element,a.isDehydrated)if(a={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){r=_r(Error(N(423)),t),t=yh(e,t,i,n,r);break e}else if(i!==r){r=_r(Error(N(424)),t),t=yh(e,t,i,n,r);break e}else for(Ct=ti(t.stateNode.containerInfo.firstChild),kt=t,Se=!0,Wt=null,n=p1(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Pr(),i===r){t=In(e,t,n);break e}lt(e,t,i,n)}t=t.child}return t;case 5:return g1(t),e===null&&kd(t),i=t.type,r=t.pendingProps,a=e!==null?e.memoizedProps:null,o=r.children,wd(i,r)?o=null:a!==null&&wd(i,a)&&(t.flags|=32),F1(e,t),lt(e,t,o,n),t.child;case 6:return e===null&&kd(t),null;case 13:return B1(e,t,n);case 4:return ef(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=Gr(t,null,i,n):lt(e,t,i,n),t.child;case 11:return i=t.type,r=t.pendingProps,r=t.elementType===i?r:Ht(i,r),gh(e,t,i,r,n);case 7:return lt(e,t,t.pendingProps,n),t.child;case 8:return lt(e,t,t.pendingProps.children,n),t.child;case 12:return lt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(i=t.type._context,r=t.pendingProps,a=t.memoizedProps,o=r.value,he(Ps,i._currentValue),i._currentValue=o,a!==null)if(Qt(a.value,o)){if(a.children===r.children&&!vt.current){t=In(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var s=a.dependencies;if(s!==null){o=a.child;for(var l=s.firstContext;l!==null;){if(l.context===i){if(a.tag===1){l=An(-1,n&-n),l.tag=2;var d=a.updateQueue;if(d!==null){d=d.shared;var u=d.pending;u===null?l.next=l:(l.next=u.next,u.next=l),d.pending=l}}a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),Td(a.return,n,t),s.lanes|=n;break}l=l.next}}else if(a.tag===10)o=a.type===t.type?null:a.child;else if(a.tag===18){if(o=a.return,o===null)throw Error(N(341));o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),Td(o,n,t),o=a.sibling}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===t){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}lt(e,t,r.children,n),t=t.child}return t;case 9:return r=t.type,i=t.pendingProps.children,Sr(t,n),r=Rt(r),i=i(r),t.flags|=1,lt(e,t,i,n),t.child;case 14:return i=t.type,r=Ht(i,t.pendingProps),r=Ht(i.type,r),vh(e,t,i,r,n);case 15:return V1(e,t,t.type,t.pendingProps,n);case 17:return i=t.type,r=t.pendingProps,r=t.elementType===i?r:Ht(i,r),es(e,t),t.tag=1,xt(i)?(e=!0,Ts(t)):e=!1,Sr(t,n),I1(t,i,r),Ed(t,i,r,n),zd(null,t,i,!0,e,n);case 19:return H1(e,t,n);case 22:return N1(e,t,n)}throw Error(N(156,t.tag))};function ov(e,t){return Mg(e,t)}function Cb(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ot(e,t,n,i){return new Cb(e,t,n,i)}function gf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function kb(e){if(typeof e=="function")return gf(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Lu)return 11;if(e===Ou)return 14}return 2}function ai(e,t){var n=e.alternate;return n===null?(n=Ot(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function is(e,t,n,i,r,a){var o=2;if(i=e,typeof e=="function")gf(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case tr:return _i(n.children,r,a,t);case Mu:o=8,r|=8;break;case Zc:return e=Ot(12,n,t,r|2),e.elementType=Zc,e.lanes=a,e;case Jc:return e=Ot(13,n,t,r),e.elementType=Jc,e.lanes=a,e;case ed:return e=Ot(19,n,t,r),e.elementType=ed,e.lanes=a,e;case gg:return xl(n,r,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case hg:o=10;break e;case mg:o=9;break e;case Lu:o=11;break e;case Ou:o=14;break e;case Hn:o=16,i=null;break e}throw Error(N(130,e==null?e:typeof e,""))}return t=Ot(o,n,t,r),t.elementType=e,t.type=i,t.lanes=a,t}function _i(e,t,n,i){return e=Ot(7,e,i,t),e.lanes=n,e}function xl(e,t,n,i){return e=Ot(22,e,i,t),e.elementType=gg,e.lanes=n,e.stateNode={isHidden:!1},e}function yc(e,t,n){return e=Ot(6,e,null,t),e.lanes=n,e}function wc(e,t,n){return t=Ot(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Tb(e,t,n,i,r){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ec(0),this.expirationTimes=ec(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ec(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function vf(e,t,n,i,r,a,o,s,l){return e=new Tb(e,t,n,s,l),t===1?(t=1,a===!0&&(t|=8)):t=0,a=Ot(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ju(a),e}function Ab(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:er,key:i==null?null:""+i,children:e,containerInfo:t,implementation:n}}function sv(e){if(!e)return ci;e=e._reactInternals;e:{if(Ui(e)!==e||e.tag!==1)throw Error(N(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(xt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(N(171))}if(e.tag===1){var n=e.type;if(xt(n))return s1(e,n,t)}return t}function lv(e,t,n,i,r,a,o,s,l){return e=vf(n,i,!0,e,r,a,o,s,l),e.context=sv(null),n=e.current,i=dt(),r=ri(n),a=An(i,r),a.callback=t??null,ni(n,a,r),e.current.lanes=r,oo(e,r,i),yt(e,i),e}function yl(e,t,n,i){var r=t.current,a=dt(),o=ri(r);return n=sv(n),t.context===null?t.context=n:t.pendingContext=n,t=An(a,o),t.payload={element:e},i=i===void 0?null:i,i!==null&&(t.callback=i),e=ni(r,t,o),e!==null&&(Kt(e,r,o,a),Qo(e,r,o)),o}function Vs(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ph(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function xf(e,t){Ph(e,t),(e=e.alternate)&&Ph(e,t)}function Eb(){return null}var cv=typeof reportError=="function"?reportError:function(e){console.error(e)};function yf(e){this._internalRoot=e}wl.prototype.render=yf.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(N(409));yl(e,t,null,null)};wl.prototype.unmount=yf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ni(function(){yl(null,e,null,null)}),t[Ln]=null}};function wl(e){this._internalRoot=e}wl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ng();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Wn.length&&t!==0&&t<Wn[n].priority;n++);Wn.splice(n,0,e),n===0&&$g(e)}};function wf(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function bl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Gh(){}function Pb(e,t,n,i,r){if(r){if(typeof i=="function"){var a=i;i=function(){var d=Vs(o);a.call(d)}}var o=lv(t,i,e,0,null,!1,!1,"",Gh);return e._reactRootContainer=o,e[Ln]=o.current,$a(e.nodeType===8?e.parentNode:e),Ni(),o}for(;r=e.lastChild;)e.removeChild(r);if(typeof i=="function"){var s=i;i=function(){var d=Vs(l);s.call(d)}}var l=vf(e,0,!1,null,null,!1,!1,"",Gh);return e._reactRootContainer=l,e[Ln]=l.current,$a(e.nodeType===8?e.parentNode:e),Ni(function(){yl(t,l,n,i)}),l}function Sl(e,t,n,i,r){var a=n._reactRootContainer;if(a){var o=a;if(typeof r=="function"){var s=r;r=function(){var l=Vs(o);s.call(l)}}yl(t,o,e,r)}else o=Pb(n,t,e,r,i);return Vs(o)}Dg=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=pa(t.pendingLanes);n!==0&&(Du(t,n|1),yt(t,Le()),!(oe&6)&&(Mr=Le()+500,hi()))}break;case 13:Ni(function(){var i=On(e,1);if(i!==null){var r=dt();Kt(i,e,1,r)}}),xf(e,1)}};Vu=function(e){if(e.tag===13){var t=On(e,134217728);if(t!==null){var n=dt();Kt(t,e,134217728,n)}xf(e,134217728)}};Vg=function(e){if(e.tag===13){var t=ri(e),n=On(e,t);if(n!==null){var i=dt();Kt(n,e,t,i)}xf(e,t)}};Ng=function(){return de};Fg=function(e,t){var n=de;try{return de=e,t()}finally{de=n}};dd=function(e,t,n){switch(t){case"input":if(id(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var r=fl(i);if(!r)throw Error(N(90));xg(i),id(i,r)}}}break;case"textarea":wg(e,n);break;case"select":t=n.value,t!=null&&xr(e,!!n.multiple,t,!1)}};Ag=pf;Eg=Ni;var Gb={usingClientEntryPoint:!1,Events:[lo,ar,fl,kg,Tg,pf]},aa={findFiberByHostInstance:Ti,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},zb={bundleType:aa.bundleType,version:aa.version,rendererPackageName:aa.rendererPackageName,rendererConfig:aa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Dn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=zg(e),e===null?null:e.stateNode},findFiberByHostInstance:aa.findFiberByHostInstance||Eb,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Oo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Oo.isDisabled&&Oo.supportsFiber)try{ll=Oo.inject(zb),dn=Oo}catch{}}Et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Gb;Et.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!wf(t))throw Error(N(200));return Ab(e,t,null,n)};Et.createRoot=function(e,t){if(!wf(e))throw Error(N(299));var n=!1,i="",r=cv;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=vf(e,1,!1,null,null,n,!1,i,r),e[Ln]=t.current,$a(e.nodeType===8?e.parentNode:e),new yf(t)};Et.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(N(188)):(e=Object.keys(e).join(","),Error(N(268,e)));return e=zg(t),e=e===null?null:e.stateNode,e};Et.flushSync=function(e){return Ni(e)};Et.hydrate=function(e,t,n){if(!bl(t))throw Error(N(200));return Sl(null,e,t,!0,n)};Et.hydrateRoot=function(e,t,n){if(!wf(e))throw Error(N(405));var i=n!=null&&n.hydratedSources||null,r=!1,a="",o=cv;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=lv(t,null,e,1,n??null,r,!1,a,o),e[Ln]=t.current,$a(e),i)for(e=0;e<i.length;e++)n=i[e],r=n._getVersion,r=r(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,r]:t.mutableSourceEagerHydrationData.push(n,r);return new wl(t)};Et.render=function(e,t,n){if(!bl(t))throw Error(N(200));return Sl(null,e,t,!1,n)};Et.unmountComponentAtNode=function(e){if(!bl(e))throw Error(N(40));return e._reactRootContainer?(Ni(function(){Sl(null,null,e,!1,function(){e._reactRootContainer=null,e[Ln]=null})}),!0):!1};Et.unstable_batchedUpdates=pf;Et.unstable_renderSubtreeIntoContainer=function(e,t,n,i){if(!bl(n))throw Error(N(200));if(e==null||e._reactInternals===void 0)throw Error(N(38));return Sl(e,t,n,!1,i)};Et.version="18.3.1-next-f1338f8080-20240426";function dv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(dv)}catch(e){console.error(e)}}dv(),dg.exports=Et;var _b=dg.exports,uv,zh=_b;uv=zh.createRoot,zh.hydrateRoot;/**
 * @remix-run/router v1.20.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Qa(){return Qa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},Qa.apply(this,arguments)}var Xn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Xn||(Xn={}));const _h="popstate";function Mb(e){e===void 0&&(e={});function t(r,a){let{pathname:o="/",search:s="",hash:l=""}=Wi(r.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),Bd("",{pathname:o,search:s,hash:l},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function n(r,a){let o=r.document.querySelector("base"),s="";if(o&&o.getAttribute("href")){let l=r.location.href,d=l.indexOf("#");s=d===-1?l:l.slice(0,d)}return s+"#"+(typeof a=="string"?a:Ns(a))}function i(r,a){bf(r.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(a)+")")}return Ob(t,n,i,e)}function Ve(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function bf(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Lb(){return Math.random().toString(36).substr(2,8)}function Mh(e,t){return{usr:e.state,key:e.key,idx:t}}function Bd(e,t,n,i){return n===void 0&&(n=null),Qa({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Wi(t):t,{state:n,key:t&&t.key||i||Lb()})}function Ns(e){let{pathname:t="/",search:n="",hash:i=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(t+=i.charAt(0)==="#"?i:"#"+i),t}function Wi(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let i=e.indexOf("?");i>=0&&(t.search=e.substr(i),e=e.substr(0,i)),e&&(t.pathname=e)}return t}function Ob(e,t,n,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:a=!1}=i,o=r.history,s=Xn.Pop,l=null,d=u();d==null&&(d=0,o.replaceState(Qa({},o.state,{idx:d}),""));function u(){return(o.state||{idx:null}).idx}function f(){s=Xn.Pop;let b=u(),v=b==null?null:b-d;d=b,l&&l({action:s,location:y.location,delta:v})}function p(b,v){s=Xn.Push;let h=Bd(y.location,b,v);n&&n(h,b),d=u()+1;let m=Mh(h,d),w=y.createHref(h);try{o.pushState(m,"",w)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;r.location.assign(w)}a&&l&&l({action:s,location:y.location,delta:1})}function g(b,v){s=Xn.Replace;let h=Bd(y.location,b,v);n&&n(h,b),d=u();let m=Mh(h,d),w=y.createHref(h);o.replaceState(m,"",w),a&&l&&l({action:s,location:y.location,delta:0})}function x(b){let v=r.location.origin!=="null"?r.location.origin:r.location.href,h=typeof b=="string"?b:Ns(b);return h=h.replace(/ $/,"%20"),Ve(v,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,v)}let y={get action(){return s},get location(){return e(r,o)},listen(b){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(_h,f),l=b,()=>{r.removeEventListener(_h,f),l=null}},createHref(b){return t(r,b)},createURL:x,encodeLocation(b){let v=x(b);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:p,replace:g,go(b){return o.go(b)}};return y}var Lh;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Lh||(Lh={}));function Ib(e,t,n){return n===void 0&&(n="/"),Rb(e,t,n,!1)}function Rb(e,t,n,i){let r=typeof t=="string"?Wi(t):t,a=Sf(r.pathname||"/",n);if(a==null)return null;let o=fv(e);Db(o);let s=null;for(let l=0;s==null&&l<o.length;++l){let d=Kb(a);s=qb(o[l],d,i)}return s}function fv(e,t,n,i){t===void 0&&(t=[]),n===void 0&&(n=[]),i===void 0&&(i="");let r=(a,o,s)=>{let l={relativePath:s===void 0?a.path||"":s,caseSensitive:a.caseSensitive===!0,childrenIndex:o,route:a};l.relativePath.startsWith("/")&&(Ve(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let d=oi([i,l.relativePath]),u=n.concat(l);a.children&&a.children.length>0&&(Ve(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),fv(a.children,t,u,d)),!(a.path==null&&!a.index)&&t.push({path:d,score:Ub(d,a.index),routesMeta:u})};return e.forEach((a,o)=>{var s;if(a.path===""||!((s=a.path)!=null&&s.includes("?")))r(a,o);else for(let l of pv(a.path))r(a,o,l)}),t}function pv(e){let t=e.split("/");if(t.length===0)return[];let[n,...i]=t,r=n.endsWith("?"),a=n.replace(/\?$/,"");if(i.length===0)return r?[a,""]:[a];let o=pv(i.join("/")),s=[];return s.push(...o.map(l=>l===""?a:[a,l].join("/"))),r&&s.push(...o),s.map(l=>e.startsWith("/")&&l===""?"/":l)}function Db(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Wb(t.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const Vb=/^:[\w-]+$/,Nb=3,Fb=2,$b=1,Bb=10,Hb=-2,Oh=e=>e==="*";function Ub(e,t){let n=e.split("/"),i=n.length;return n.some(Oh)&&(i+=Hb),t&&(i+=Fb),n.filter(r=>!Oh(r)).reduce((r,a)=>r+(Vb.test(a)?Nb:a===""?$b:Bb),i)}function Wb(e,t){return e.length===t.length&&e.slice(0,-1).every((i,r)=>i===t[r])?e[e.length-1]-t[t.length-1]:0}function qb(e,t,n){let{routesMeta:i}=e,r={},a="/",o=[];for(let s=0;s<i.length;++s){let l=i[s],d=s===i.length-1,u=a==="/"?t:t.slice(a.length)||"/",f=Ih({path:l.relativePath,caseSensitive:l.caseSensitive,end:d},u),p=l.route;if(!f&&d&&n&&!i[i.length-1].route.index&&(f=Ih({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},u)),!f)return null;Object.assign(r,f.params),o.push({params:r,pathname:oi([a,f.pathname]),pathnameBase:Jb(oi([a,f.pathnameBase])),route:p}),f.pathnameBase!=="/"&&(a=oi([a,f.pathnameBase]))}return o}function Ih(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,i]=Yb(e.path,e.caseSensitive,e.end),r=t.match(n);if(!r)return null;let a=r[0],o=a.replace(/(.)\/+$/,"$1"),s=r.slice(1);return{params:i.reduce((d,u,f)=>{let{paramName:p,isOptional:g}=u;if(p==="*"){let y=s[f]||"";o=a.slice(0,a.length-y.length).replace(/(.)\/+$/,"$1")}const x=s[f];return g&&!x?d[p]=void 0:d[p]=(x||"").replace(/%2F/g,"/"),d},{}),pathname:a,pathnameBase:o,pattern:e}}function Yb(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),bf(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let i=[],r="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,s,l)=>(i.push({paramName:s,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(i.push({paramName:"*"}),r+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":e!==""&&e!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,t?void 0:"i"),i]}function Kb(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return bf(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Sf(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,i=e.charAt(n);return i&&i!=="/"?null:e.slice(n)||"/"}function Xb(e,t){t===void 0&&(t="/");let{pathname:n,search:i="",hash:r=""}=typeof e=="string"?Wi(e):e;return{pathname:n?n.startsWith("/")?n:Qb(n,t):t,search:e4(i),hash:t4(r)}}function Qb(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function bc(e,t,n,i){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Zb(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function hv(e,t){let n=Zb(e);return t?n.map((i,r)=>r===n.length-1?i.pathname:i.pathnameBase):n.map(i=>i.pathnameBase)}function mv(e,t,n,i){i===void 0&&(i=!1);let r;typeof e=="string"?r=Wi(e):(r=Qa({},e),Ve(!r.pathname||!r.pathname.includes("?"),bc("?","pathname","search",r)),Ve(!r.pathname||!r.pathname.includes("#"),bc("#","pathname","hash",r)),Ve(!r.search||!r.search.includes("#"),bc("#","search","hash",r)));let a=e===""||r.pathname==="",o=a?"/":r.pathname,s;if(o==null)s=n;else{let f=t.length-1;if(!i&&o.startsWith("..")){let p=o.split("/");for(;p[0]==="..";)p.shift(),f-=1;r.pathname=p.join("/")}s=f>=0?t[f]:"/"}let l=Xb(r,s),d=o&&o!=="/"&&o.endsWith("/"),u=(a||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(d||u)&&(l.pathname+="/"),l}const oi=e=>e.join("/").replace(/\/\/+/g,"/"),Jb=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),e4=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,t4=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function n4(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const gv=["post","put","patch","delete"];new Set(gv);const i4=["get",...gv];new Set(i4);/**
 * React Router v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Za(){return Za=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},Za.apply(this,arguments)}const jf=j.createContext(null),r4=j.createContext(null),qi=j.createContext(null),jl=j.createContext(null),Yi=j.createContext({outlet:null,matches:[],isDataRoute:!1}),vv=j.createContext(null);function a4(e,t){let{relative:n}=t===void 0?{}:t;uo()||Ve(!1);let{basename:i,navigator:r}=j.useContext(qi),{hash:a,pathname:o,search:s}=yv(e,{relative:n}),l=o;return i!=="/"&&(l=o==="/"?i:oi([i,o])),r.createHref({pathname:l,search:s,hash:a})}function uo(){return j.useContext(jl)!=null}function hn(){return uo()||Ve(!1),j.useContext(jl).location}function xv(e){j.useContext(qi).static||j.useLayoutEffect(e)}function Cl(){let{isDataRoute:e}=j.useContext(Yi);return e?x4():o4()}function o4(){uo()||Ve(!1);let e=j.useContext(jf),{basename:t,future:n,navigator:i}=j.useContext(qi),{matches:r}=j.useContext(Yi),{pathname:a}=hn(),o=JSON.stringify(hv(r,n.v7_relativeSplatPath)),s=j.useRef(!1);return xv(()=>{s.current=!0}),j.useCallback(function(d,u){if(u===void 0&&(u={}),!s.current)return;if(typeof d=="number"){i.go(d);return}let f=mv(d,JSON.parse(o),a,u.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:oi([t,f.pathname])),(u.replace?i.replace:i.push)(f,u.state,u)},[t,i,o,a,e])}function yv(e,t){let{relative:n}=t===void 0?{}:t,{future:i}=j.useContext(qi),{matches:r}=j.useContext(Yi),{pathname:a}=hn(),o=JSON.stringify(hv(r,i.v7_relativeSplatPath));return j.useMemo(()=>mv(e,JSON.parse(o),a,n==="path"),[e,o,a,n])}function s4(e,t){return l4(e,t)}function l4(e,t,n,i){uo()||Ve(!1);let{navigator:r}=j.useContext(qi),{matches:a}=j.useContext(Yi),o=a[a.length-1],s=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let d=hn(),u;if(t){var f;let b=typeof t=="string"?Wi(t):t;l==="/"||(f=b.pathname)!=null&&f.startsWith(l)||Ve(!1),u=b}else u=d;let p=u.pathname||"/",g=p;if(l!=="/"){let b=l.replace(/^\//,"").split("/");g="/"+p.replace(/^\//,"").split("/").slice(b.length).join("/")}let x=Ib(e,{pathname:g}),y=p4(x&&x.map(b=>Object.assign({},b,{params:Object.assign({},s,b.params),pathname:oi([l,r.encodeLocation?r.encodeLocation(b.pathname).pathname:b.pathname]),pathnameBase:b.pathnameBase==="/"?l:oi([l,r.encodeLocation?r.encodeLocation(b.pathnameBase).pathname:b.pathnameBase])})),a,n,i);return t&&y?j.createElement(jl.Provider,{value:{location:Za({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Xn.Pop}},y):y}function c4(){let e=v4(),t=n4(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},t),n?j.createElement("pre",{style:r},n):null,null)}const d4=j.createElement(c4,null);class u4 extends j.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?j.createElement(Yi.Provider,{value:this.props.routeContext},j.createElement(vv.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function f4(e){let{routeContext:t,match:n,children:i}=e,r=j.useContext(jf);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),j.createElement(Yi.Provider,{value:t},i)}function p4(e,t,n,i){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),i===void 0&&(i=null),e==null){var a;if(!n)return null;if(n.errors)e=n.matches;else if((a=i)!=null&&a.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let o=e,s=(r=n)==null?void 0:r.errors;if(s!=null){let u=o.findIndex(f=>f.route.id&&(s==null?void 0:s[f.route.id])!==void 0);u>=0||Ve(!1),o=o.slice(0,Math.min(o.length,u+1))}let l=!1,d=-1;if(n&&i&&i.v7_partialHydration)for(let u=0;u<o.length;u++){let f=o[u];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(d=u),f.route.id){let{loaderData:p,errors:g}=n,x=f.route.loader&&p[f.route.id]===void 0&&(!g||g[f.route.id]===void 0);if(f.route.lazy||x){l=!0,d>=0?o=o.slice(0,d+1):o=[o[0]];break}}}return o.reduceRight((u,f,p)=>{let g,x=!1,y=null,b=null;n&&(g=s&&f.route.id?s[f.route.id]:void 0,y=f.route.errorElement||d4,l&&(d<0&&p===0?(x=!0,b=null):d===p&&(x=!0,b=f.route.hydrateFallbackElement||null)));let v=t.concat(o.slice(0,p+1)),h=()=>{let m;return g?m=y:x?m=b:f.route.Component?m=j.createElement(f.route.Component,null):f.route.element?m=f.route.element:m=u,j.createElement(f4,{match:f,routeContext:{outlet:u,matches:v,isDataRoute:n!=null},children:m})};return n&&(f.route.ErrorBoundary||f.route.errorElement||p===0)?j.createElement(u4,{location:n.location,revalidation:n.revalidation,component:y,error:g,children:h(),routeContext:{outlet:null,matches:v,isDataRoute:!0}}):h()},null)}var wv=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(wv||{}),Fs=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Fs||{});function h4(e){let t=j.useContext(jf);return t||Ve(!1),t}function m4(e){let t=j.useContext(r4);return t||Ve(!1),t}function g4(e){let t=j.useContext(Yi);return t||Ve(!1),t}function bv(e){let t=g4(),n=t.matches[t.matches.length-1];return n.route.id||Ve(!1),n.route.id}function v4(){var e;let t=j.useContext(vv),n=m4(Fs.UseRouteError),i=bv(Fs.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[i]}function x4(){let{router:e}=h4(wv.UseNavigateStable),t=bv(Fs.UseNavigateStable),n=j.useRef(!1);return xv(()=>{n.current=!0}),j.useCallback(function(r,a){a===void 0&&(a={}),n.current&&(typeof r=="number"?e.navigate(r):e.navigate(r,Za({fromRouteId:t},a)))},[e,t])}function rn(e){Ve(!1)}function y4(e){let{basename:t="/",children:n=null,location:i,navigationType:r=Xn.Pop,navigator:a,static:o=!1,future:s}=e;uo()&&Ve(!1);let l=t.replace(/^\/*/,"/"),d=j.useMemo(()=>({basename:l,navigator:a,static:o,future:Za({v7_relativeSplatPath:!1},s)}),[l,s,a,o]);typeof i=="string"&&(i=Wi(i));let{pathname:u="/",search:f="",hash:p="",state:g=null,key:x="default"}=i,y=j.useMemo(()=>{let b=Sf(u,l);return b==null?null:{location:{pathname:b,search:f,hash:p,state:g,key:x},navigationType:r}},[l,u,f,p,g,x,r]);return y==null?null:j.createElement(qi.Provider,{value:d},j.createElement(jl.Provider,{children:n,value:y}))}function w4(e){let{children:t,location:n}=e;return s4(Hd(t),n)}new Promise(()=>{});function Hd(e,t){t===void 0&&(t=[]);let n=[];return j.Children.forEach(e,(i,r)=>{if(!j.isValidElement(i))return;let a=[...t,r];if(i.type===j.Fragment){n.push.apply(n,Hd(i.props.children,a));return}i.type!==rn&&Ve(!1),!i.props.index||!i.props.children||Ve(!1);let o={id:i.props.id||a.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(o.children=Hd(i.props.children,a)),n.push(o)}),n}/**
 * React Router DOM v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ud(){return Ud=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},Ud.apply(this,arguments)}function b4(e,t){if(e==null)return{};var n={},i=Object.keys(e),r,a;for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&(n[r]=e[r]);return n}function S4(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function j4(e,t){return e.button===0&&(!t||t==="_self")&&!S4(e)}const C4=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],k4="6";try{window.__reactRouterVersion=k4}catch{}const T4="startTransition",Rh=b2[T4];function A4(e){let{basename:t,children:n,future:i,window:r}=e,a=j.useRef();a.current==null&&(a.current=Mb({window:r,v5Compat:!0}));let o=a.current,[s,l]=j.useState({action:o.action,location:o.location}),{v7_startTransition:d}=i||{},u=j.useCallback(f=>{d&&Rh?Rh(()=>l(f)):l(f)},[l,d]);return j.useLayoutEffect(()=>o.listen(u),[o,u]),j.createElement(y4,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:o,future:i})}const E4=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",P4=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Sv=j.forwardRef(function(t,n){let{onClick:i,relative:r,reloadDocument:a,replace:o,state:s,target:l,to:d,preventScrollReset:u,viewTransition:f}=t,p=b4(t,C4),{basename:g}=j.useContext(qi),x,y=!1;if(typeof d=="string"&&P4.test(d)&&(x=d,E4))try{let m=new URL(window.location.href),w=d.startsWith("//")?new URL(m.protocol+d):new URL(d),S=Sf(w.pathname,g);w.origin===m.origin&&S!=null?d=S+w.search+w.hash:y=!0}catch{}let b=a4(d,{relative:r}),v=G4(d,{replace:o,state:s,target:l,preventScrollReset:u,relative:r,viewTransition:f});function h(m){i&&i(m),m.defaultPrevented||v(m)}return j.createElement("a",Ud({},p,{href:x||b,onClick:y||a?i:h,ref:n,target:l}))});var Dh;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Dh||(Dh={}));var Vh;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Vh||(Vh={}));function G4(e,t){let{target:n,replace:i,state:r,preventScrollReset:a,relative:o,viewTransition:s}=t===void 0?{}:t,l=Cl(),d=hn(),u=yv(e,{relative:o});return j.useCallback(f=>{if(j4(f,n)){f.preventDefault();let p=i!==void 0?i:Ns(d)===Ns(u);l(e,{replace:p,state:r,preventScrollReset:a,relative:o,viewTransition:s})}},[d,l,u,i,r,n,e,a,o,s])}function z4(e){if(typeof Proxy>"u")return e;const t=new Map,n=(...i)=>e(...i);return new Proxy(n,{get:(i,r)=>r==="create"?e:(t.has(r)||t.set(r,e(r)),t.get(r))})}function kl(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}const Wd=e=>Array.isArray(e);function jv(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let i=0;i<n;i++)if(t[i]!==e[i])return!1;return!0}function Ja(e){return typeof e=="string"||Array.isArray(e)}function Nh(e){const t=[{},{}];return e==null||e.values.forEach((n,i)=>{t[0][i]=n.get(),t[1][i]=n.getVelocity()}),t}function Cf(e,t,n,i){if(typeof t=="function"){const[r,a]=Nh(i);t=t(n!==void 0?n:e.custom,r,a)}if(typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"){const[r,a]=Nh(i);t=t(n!==void 0?n:e.custom,r,a)}return t}function Tl(e,t,n){const i=e.getProps();return Cf(i,t,n!==void 0?n:i.custom,e)}const kf=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Tf=["initial",...kf],fo=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Ki=new Set(fo),En=e=>e*1e3,Pn=e=>e/1e3,_4={type:"spring",stiffness:500,damping:25,restSpeed:10},M4=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),L4={type:"keyframes",duration:.8},O4={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},I4=(e,{keyframes:t})=>t.length>2?L4:Ki.has(e)?e.startsWith("scale")?M4(t[1]):_4:O4;function Af(e,t){return e?e[t]||e.default||e:void 0}const R4={skipAnimations:!1,useManualTiming:!1},D4=e=>e!==null;function Al(e,{repeat:t,repeatType:n="loop"},i){const r=e.filter(D4),a=t&&n!=="loop"&&t%2===1?0:r.length-1;return!a||i===void 0?r[a]:i}const Je=e=>e;function V4(e){let t=new Set,n=new Set,i=!1,r=!1;const a=new WeakSet;let o={delta:0,timestamp:0,isProcessing:!1};function s(d){a.has(d)&&(l.schedule(d),e()),d(o)}const l={schedule:(d,u=!1,f=!1)=>{const g=f&&i?t:n;return u&&a.add(d),g.has(d)||g.add(d),d},cancel:d=>{n.delete(d),a.delete(d)},process:d=>{if(o=d,i){r=!0;return}i=!0,[t,n]=[n,t],n.clear(),t.forEach(s),i=!1,r&&(r=!1,l.process(d))}};return l}const Io=["read","resolveKeyframes","update","preRender","render","postRender"],N4=40;function Cv(e,t){let n=!1,i=!0;const r={delta:0,timestamp:0,isProcessing:!1},a=()=>n=!0,o=Io.reduce((v,h)=>(v[h]=V4(a),v),{}),{read:s,resolveKeyframes:l,update:d,preRender:u,render:f,postRender:p}=o,g=()=>{const v=performance.now();n=!1,r.delta=i?1e3/60:Math.max(Math.min(v-r.timestamp,N4),1),r.timestamp=v,r.isProcessing=!0,s.process(r),l.process(r),d.process(r),u.process(r),f.process(r),p.process(r),r.isProcessing=!1,n&&t&&(i=!1,e(g))},x=()=>{n=!0,i=!0,r.isProcessing||e(g)};return{schedule:Io.reduce((v,h)=>{const m=o[h];return v[h]=(w,S=!1,C=!1)=>(n||x(),m.schedule(w,S,C)),v},{}),cancel:v=>{for(let h=0;h<Io.length;h++)o[Io[h]].cancel(v)},state:r,steps:o}}const{schedule:ae,cancel:Zt,state:Be,steps:Sc}=Cv(typeof requestAnimationFrame<"u"?requestAnimationFrame:Je,!0),kv=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,F4=1e-7,$4=12;function B4(e,t,n,i,r){let a,o,s=0;do o=t+(n-t)/2,a=kv(o,i,r)-e,a>0?n=o:t=o;while(Math.abs(a)>F4&&++s<$4);return o}function po(e,t,n,i){if(e===t&&n===i)return Je;const r=a=>B4(a,0,1,e,n);return a=>a===0||a===1?a:kv(r(a),t,i)}const Tv=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,Av=e=>t=>1-e(1-t),Ev=po(.33,1.53,.69,.99),Ef=Av(Ev),Pv=Tv(Ef),Gv=e=>(e*=2)<1?.5*Ef(e):.5*(2-Math.pow(2,-10*(e-1))),Pf=e=>1-Math.sin(Math.acos(e)),zv=Av(Pf),_v=Tv(Pf),Mv=e=>/^0[^.\s]+$/u.test(e);function H4(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||Mv(e):!0}let U4=Je,qd=Je;const Lv=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),Ov=e=>t=>typeof t=="string"&&t.startsWith(e),Iv=Ov("--"),W4=Ov("var(--"),Gf=e=>W4(e)?q4.test(e.split("/*")[0].trim()):!1,q4=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,Y4=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function K4(e){const t=Y4.exec(e);if(!t)return[,];const[,n,i,r]=t;return[`--${n??i}`,r]}function Rv(e,t,n=1){const[i,r]=K4(e);if(!i)return;const a=window.getComputedStyle(t).getPropertyValue(i);if(a){const o=a.trim();return Lv(o)?parseFloat(o):o}return Gf(r)?Rv(r,t,n+1):r}const di=(e,t,n)=>n>t?t:n<e?e:n,Ur={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},eo={...Ur,transform:e=>di(0,1,e)},Ro={...Ur,default:1},ho=e=>({test:t=>typeof t=="string"&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),Fn=ho("deg"),fn=ho("%"),W=ho("px"),X4=ho("vh"),Q4=ho("vw"),Fh={...fn,parse:e=>fn.parse(e)/100,transform:e=>fn.transform(e*100)},Z4=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),$h=e=>e===Ur||e===W,Bh=(e,t)=>parseFloat(e.split(", ")[t]),Hh=(e,t)=>(n,{transform:i})=>{if(i==="none"||!i)return 0;const r=i.match(/^matrix3d\((.+)\)$/u);if(r)return Bh(r[1],t);{const a=i.match(/^matrix\((.+)\)$/u);return a?Bh(a[1],e):0}},J4=new Set(["x","y","z"]),e5=fo.filter(e=>!J4.has(e));function t5(e){const t=[];return e5.forEach(n=>{const i=e.getValue(n);i!==void 0&&(t.push([n,i.get()]),i.set(n.startsWith("scale")?1:0))}),t}const Lr={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:Hh(4,13),y:Hh(5,14)};Lr.translateX=Lr.x;Lr.translateY=Lr.y;const Dv=e=>t=>t.test(e),n5={test:e=>e==="auto",parse:e=>e},Vv=[Ur,W,fn,Fn,Q4,X4,n5],Uh=e=>Vv.find(Dv(e)),Mi=new Set;let Yd=!1,Kd=!1;function Nv(){if(Kd){const e=Array.from(Mi).filter(i=>i.needsMeasurement),t=new Set(e.map(i=>i.element)),n=new Map;t.forEach(i=>{const r=t5(i);r.length&&(n.set(i,r),i.render())}),e.forEach(i=>i.measureInitialState()),t.forEach(i=>{i.render();const r=n.get(i);r&&r.forEach(([a,o])=>{var s;(s=i.getValue(a))===null||s===void 0||s.set(o)})}),e.forEach(i=>i.measureEndState()),e.forEach(i=>{i.suspendedScrollY!==void 0&&window.scrollTo(0,i.suspendedScrollY)})}Kd=!1,Yd=!1,Mi.forEach(e=>e.complete()),Mi.clear()}function Fv(){Mi.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(Kd=!0)})}function i5(){Fv(),Nv()}class zf{constructor(t,n,i,r,a,o=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...t],this.onComplete=n,this.name=i,this.motionValue=r,this.element=a,this.isAsync=o}scheduleResolve(){this.isScheduled=!0,this.isAsync?(Mi.add(this),Yd||(Yd=!0,ae.read(Fv),ae.resolveKeyframes(Nv))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:n,element:i,motionValue:r}=this;for(let a=0;a<t.length;a++)if(t[a]===null)if(a===0){const o=r==null?void 0:r.get(),s=t[t.length-1];if(o!==void 0)t[0]=o;else if(i&&n){const l=i.readValue(n,s);l!=null&&(t[0]=l)}t[0]===void 0&&(t[0]=s),r&&o===void 0&&r.set(t[0])}else t[a]=t[a-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),Mi.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,Mi.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const Aa=e=>Math.round(e*1e5)/1e5,_f=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function r5(e){return e==null}const a5=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Mf=(e,t)=>n=>!!(typeof n=="string"&&a5.test(n)&&n.startsWith(e)||t&&!r5(n)&&Object.prototype.hasOwnProperty.call(n,t)),$v=(e,t,n)=>i=>{if(typeof i!="string")return i;const[r,a,o,s]=i.match(_f);return{[e]:parseFloat(r),[t]:parseFloat(a),[n]:parseFloat(o),alpha:s!==void 0?parseFloat(s):1}},o5=e=>di(0,255,e),jc={...Ur,transform:e=>Math.round(o5(e))},Pi={test:Mf("rgb","red"),parse:$v("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:i=1})=>"rgba("+jc.transform(e)+", "+jc.transform(t)+", "+jc.transform(n)+", "+Aa(eo.transform(i))+")"};function s5(e){let t="",n="",i="",r="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),i=e.substring(5,7),r=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),i=e.substring(3,4),r=e.substring(4,5),t+=t,n+=n,i+=i,r+=r),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(i,16),alpha:r?parseInt(r,16)/255:1}}const Xd={test:Mf("#"),parse:s5,transform:Pi.transform},fr={test:Mf("hsl","hue"),parse:$v("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:i=1})=>"hsla("+Math.round(e)+", "+fn.transform(Aa(t))+", "+fn.transform(Aa(n))+", "+Aa(eo.transform(i))+")"},it={test:e=>Pi.test(e)||Xd.test(e)||fr.test(e),parse:e=>Pi.test(e)?Pi.parse(e):fr.test(e)?fr.parse(e):Xd.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?Pi.transform(e):fr.transform(e)},l5=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function c5(e){var t,n;return isNaN(e)&&typeof e=="string"&&(((t=e.match(_f))===null||t===void 0?void 0:t.length)||0)+(((n=e.match(l5))===null||n===void 0?void 0:n.length)||0)>0}const Bv="number",Hv="color",d5="var",u5="var(",Wh="${}",f5=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function to(e){const t=e.toString(),n=[],i={color:[],number:[],var:[]},r=[];let a=0;const s=t.replace(f5,l=>(it.test(l)?(i.color.push(a),r.push(Hv),n.push(it.parse(l))):l.startsWith(u5)?(i.var.push(a),r.push(d5),n.push(l)):(i.number.push(a),r.push(Bv),n.push(parseFloat(l))),++a,Wh)).split(Wh);return{values:n,split:s,indexes:i,types:r}}function Uv(e){return to(e).values}function Wv(e){const{split:t,types:n}=to(e),i=t.length;return r=>{let a="";for(let o=0;o<i;o++)if(a+=t[o],r[o]!==void 0){const s=n[o];s===Bv?a+=Aa(r[o]):s===Hv?a+=it.transform(r[o]):a+=r[o]}return a}}const p5=e=>typeof e=="number"?0:e;function h5(e){const t=Uv(e);return Wv(e)(t.map(p5))}const ui={test:c5,parse:Uv,createTransformer:Wv,getAnimatableNone:h5},m5=new Set(["brightness","contrast","saturate","opacity"]);function g5(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[i]=n.match(_f)||[];if(!i)return e;const r=n.replace(i,"");let a=m5.has(t)?1:0;return i!==n&&(a*=100),t+"("+a+r+")"}const v5=/\b([a-z-]*)\(.*?\)/gu,Qd={...ui,getAnimatableNone:e=>{const t=e.match(v5);return t?t.map(g5).join(" "):e}},x5={borderWidth:W,borderTopWidth:W,borderRightWidth:W,borderBottomWidth:W,borderLeftWidth:W,borderRadius:W,radius:W,borderTopLeftRadius:W,borderTopRightRadius:W,borderBottomRightRadius:W,borderBottomLeftRadius:W,width:W,maxWidth:W,height:W,maxHeight:W,top:W,right:W,bottom:W,left:W,padding:W,paddingTop:W,paddingRight:W,paddingBottom:W,paddingLeft:W,margin:W,marginTop:W,marginRight:W,marginBottom:W,marginLeft:W,backgroundPositionX:W,backgroundPositionY:W},y5={rotate:Fn,rotateX:Fn,rotateY:Fn,rotateZ:Fn,scale:Ro,scaleX:Ro,scaleY:Ro,scaleZ:Ro,skew:Fn,skewX:Fn,skewY:Fn,distance:W,translateX:W,translateY:W,translateZ:W,x:W,y:W,z:W,perspective:W,transformPerspective:W,opacity:eo,originX:Fh,originY:Fh,originZ:W},qh={...Ur,transform:Math.round},Lf={...x5,...y5,zIndex:qh,size:W,fillOpacity:eo,strokeOpacity:eo,numOctaves:qh},w5={...Lf,color:it,backgroundColor:it,outlineColor:it,fill:it,stroke:it,borderColor:it,borderTopColor:it,borderRightColor:it,borderBottomColor:it,borderLeftColor:it,filter:Qd,WebkitFilter:Qd},Of=e=>w5[e];function qv(e,t){let n=Of(e);return n!==Qd&&(n=ui),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const b5=new Set(["auto","none","0"]);function S5(e,t,n){let i=0,r;for(;i<e.length&&!r;){const a=e[i];typeof a=="string"&&!b5.has(a)&&to(a).values.length&&(r=e[i]),i++}if(r&&n)for(const a of t)e[a]=qv(n,r)}class Yv extends zf{constructor(t,n,i,r,a){super(t,n,i,r,a,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:n,name:i}=this;if(!n||!n.current)return;super.readKeyframes();for(let l=0;l<t.length;l++){let d=t[l];if(typeof d=="string"&&(d=d.trim(),Gf(d))){const u=Rv(d,n.current);u!==void 0&&(t[l]=u),l===t.length-1&&(this.finalKeyframe=d)}}if(this.resolveNoneKeyframes(),!Z4.has(i)||t.length!==2)return;const[r,a]=t,o=Uh(r),s=Uh(a);if(o!==s)if($h(o)&&$h(s))for(let l=0;l<t.length;l++){const d=t[l];typeof d=="string"&&(t[l]=parseFloat(d))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:n}=this,i=[];for(let r=0;r<t.length;r++)H4(t[r])&&i.push(r);i.length&&S5(t,i,n)}measureInitialState(){const{element:t,unresolvedKeyframes:n,name:i}=this;if(!t||!t.current)return;i==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Lr[i](t.measureViewportBox(),window.getComputedStyle(t.current)),n[0]=this.measuredOrigin;const r=n[n.length-1];r!==void 0&&t.getValue(i,r).jump(r,!1)}measureEndState(){var t;const{element:n,name:i,unresolvedKeyframes:r}=this;if(!n||!n.current)return;const a=n.getValue(i);a&&a.jump(this.measuredOrigin,!1);const o=r.length-1,s=r[o];r[o]=Lr[i](n.measureViewportBox(),window.getComputedStyle(n.current)),s!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=s),!((t=this.removedTransforms)===null||t===void 0)&&t.length&&this.removedTransforms.forEach(([l,d])=>{n.getValue(l).set(d)}),this.resolveNoneKeyframes()}}function If(e){return typeof e=="function"}let rs;function j5(){rs=void 0}const pn={now:()=>(rs===void 0&&pn.set(Be.isProcessing||R4.useManualTiming?Be.timestamp:performance.now()),rs),set:e=>{rs=e,queueMicrotask(j5)}},Yh=(e,t)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(ui.test(e)||e==="0")&&!e.startsWith("url("));function C5(e){const t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function k5(e,t,n,i){const r=e[0];if(r===null)return!1;if(t==="display"||t==="visibility")return!0;const a=e[e.length-1],o=Yh(r,t),s=Yh(a,t);return!o||!s?!1:C5(e)||(n==="spring"||If(n))&&i}const T5=40;class Kv{constructor({autoplay:t=!0,delay:n=0,type:i="keyframes",repeat:r=0,repeatDelay:a=0,repeatType:o="loop",...s}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=pn.now(),this.options={autoplay:t,delay:n,type:i,repeat:r,repeatDelay:a,repeatType:o,...s},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>T5?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&i5(),this._resolved}onKeyframesResolved(t,n){this.resolvedAt=pn.now(),this.hasAttemptedResolve=!0;const{name:i,type:r,velocity:a,delay:o,onComplete:s,onUpdate:l,isGenerator:d}=this.options;if(!d&&!k5(t,i,r,a))if(o)this.options.duration=0;else{l==null||l(Al(t,this.options,n)),s==null||s(),this.resolveFinishedPromise();return}const u=this.initPlayback(t,n);u!==!1&&(this._resolved={keyframes:t,finalKeyframe:n,...u},this.onPostResolved())}onPostResolved(){}then(t,n){return this.currentFinishedPromise.then(t,n)}updateFinishedPromise(){this.currentFinishedPromise=new Promise(t=>{this.resolveFinishedPromise=t})}}function Rf(e,t){return t?e*(1e3/t):0}const A5=5;function Xv(e,t,n){const i=Math.max(t-A5,0);return Rf(n-e(i),t-i)}const Cc=.001,E5=.01,P5=10,G5=.05,z5=1;function _5({duration:e=800,bounce:t=.25,velocity:n=0,mass:i=1}){let r,a,o=1-t;o=di(G5,z5,o),e=di(E5,P5,Pn(e)),o<1?(r=d=>{const u=d*o,f=u*e,p=u-n,g=Zd(d,o),x=Math.exp(-f);return Cc-p/g*x},a=d=>{const f=d*o*e,p=f*n+n,g=Math.pow(o,2)*Math.pow(d,2)*e,x=Math.exp(-f),y=Zd(Math.pow(d,2),o);return(-r(d)+Cc>0?-1:1)*((p-g)*x)/y}):(r=d=>{const u=Math.exp(-d*e),f=(d-n)*e+1;return-Cc+u*f},a=d=>{const u=Math.exp(-d*e),f=(n-d)*(e*e);return u*f});const s=5/e,l=L5(r,a,s);if(e=En(e),isNaN(l))return{stiffness:100,damping:10,duration:e};{const d=Math.pow(l,2)*i;return{stiffness:d,damping:o*2*Math.sqrt(i*d),duration:e}}}const M5=12;function L5(e,t,n){let i=n;for(let r=1;r<M5;r++)i=i-e(i)/t(i);return i}function Zd(e,t){return e*Math.sqrt(1-t*t)}const O5=["duration","bounce"],I5=["stiffness","damping","mass"];function Kh(e,t){return t.some(n=>e[n]!==void 0)}function R5(e){let t={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...e};if(!Kh(e,I5)&&Kh(e,O5)){const n=_5(e);t={...t,...n,mass:1},t.isResolvedFromDuration=!0}return t}function Qv({keyframes:e,restDelta:t,restSpeed:n,...i}){const r=e[0],a=e[e.length-1],o={done:!1,value:r},{stiffness:s,damping:l,mass:d,duration:u,velocity:f,isResolvedFromDuration:p}=R5({...i,velocity:-Pn(i.velocity||0)}),g=f||0,x=l/(2*Math.sqrt(s*d)),y=a-r,b=Pn(Math.sqrt(s/d)),v=Math.abs(y)<5;n||(n=v?.01:2),t||(t=v?.005:.5);let h;if(x<1){const m=Zd(b,x);h=w=>{const S=Math.exp(-x*b*w);return a-S*((g+x*b*y)/m*Math.sin(m*w)+y*Math.cos(m*w))}}else if(x===1)h=m=>a-Math.exp(-b*m)*(y+(g+b*y)*m);else{const m=b*Math.sqrt(x*x-1);h=w=>{const S=Math.exp(-x*b*w),C=Math.min(m*w,300);return a-S*((g+x*b*y)*Math.sinh(C)+m*y*Math.cosh(C))/m}}return{calculatedDuration:p&&u||null,next:m=>{const w=h(m);if(p)o.done=m>=u;else{let S=0;x<1&&(S=m===0?En(g):Xv(h,m,w));const C=Math.abs(S)<=n,A=Math.abs(a-w)<=t;o.done=C&&A}return o.value=o.done?a:w,o}}}function Xh({keyframes:e,velocity:t=0,power:n=.8,timeConstant:i=325,bounceDamping:r=10,bounceStiffness:a=500,modifyTarget:o,min:s,max:l,restDelta:d=.5,restSpeed:u}){const f=e[0],p={done:!1,value:f},g=T=>s!==void 0&&T<s||l!==void 0&&T>l,x=T=>s===void 0?l:l===void 0||Math.abs(s-T)<Math.abs(l-T)?s:l;let y=n*t;const b=f+y,v=o===void 0?b:o(b);v!==b&&(y=v-f);const h=T=>-y*Math.exp(-T/i),m=T=>v+h(T),w=T=>{const z=h(T),E=m(T);p.done=Math.abs(z)<=d,p.value=p.done?v:E};let S,C;const A=T=>{g(p.value)&&(S=T,C=Qv({keyframes:[p.value,x(p.value)],velocity:Xv(m,T,p.value),damping:r,stiffness:a,restDelta:d,restSpeed:u}))};return A(0),{calculatedDuration:null,next:T=>{let z=!1;return!C&&S===void 0&&(z=!0,w(T),A(T)),S!==void 0&&T>=S?C.next(T-S):(!z&&w(T),p)}}}const D5=po(.42,0,1,1),V5=po(0,0,.58,1),Zv=po(.42,0,.58,1),N5=e=>Array.isArray(e)&&typeof e[0]!="number",Df=e=>Array.isArray(e)&&typeof e[0]=="number",Qh={linear:Je,easeIn:D5,easeInOut:Zv,easeOut:V5,circIn:Pf,circInOut:_v,circOut:zv,backIn:Ef,backInOut:Pv,backOut:Ev,anticipate:Gv},Zh=e=>{if(Df(e)){qd(e.length===4);const[t,n,i,r]=e;return po(t,n,i,r)}else if(typeof e=="string")return qd(Qh[e]!==void 0),Qh[e];return e},F5=(e,t)=>n=>t(e(n)),Gn=(...e)=>e.reduce(F5),Fi=(e,t,n)=>{const i=t-e;return i===0?1:(n-e)/i},Te=(e,t,n)=>e+(t-e)*n;function kc(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function $5({hue:e,saturation:t,lightness:n,alpha:i}){e/=360,t/=100,n/=100;let r=0,a=0,o=0;if(!t)r=a=o=n;else{const s=n<.5?n*(1+t):n+t-n*t,l=2*n-s;r=kc(l,s,e+1/3),a=kc(l,s,e),o=kc(l,s,e-1/3)}return{red:Math.round(r*255),green:Math.round(a*255),blue:Math.round(o*255),alpha:i}}function $s(e,t){return n=>n>0?t:e}const Tc=(e,t,n)=>{const i=e*e,r=n*(t*t-i)+i;return r<0?0:Math.sqrt(r)},B5=[Xd,Pi,fr],H5=e=>B5.find(t=>t.test(e));function Jh(e){const t=H5(e);if(!t)return!1;let n=t.parse(e);return t===fr&&(n=$5(n)),n}const e0=(e,t)=>{const n=Jh(e),i=Jh(t);if(!n||!i)return $s(e,t);const r={...n};return a=>(r.red=Tc(n.red,i.red,a),r.green=Tc(n.green,i.green,a),r.blue=Tc(n.blue,i.blue,a),r.alpha=Te(n.alpha,i.alpha,a),Pi.transform(r))},Jd=new Set(["none","hidden"]);function U5(e,t){return Jd.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function W5(e,t){return n=>Te(e,t,n)}function Vf(e){return typeof e=="number"?W5:typeof e=="string"?Gf(e)?$s:it.test(e)?e0:K5:Array.isArray(e)?Jv:typeof e=="object"?it.test(e)?e0:q5:$s}function Jv(e,t){const n=[...e],i=n.length,r=e.map((a,o)=>Vf(a)(a,t[o]));return a=>{for(let o=0;o<i;o++)n[o]=r[o](a);return n}}function q5(e,t){const n={...e,...t},i={};for(const r in n)e[r]!==void 0&&t[r]!==void 0&&(i[r]=Vf(e[r])(e[r],t[r]));return r=>{for(const a in i)n[a]=i[a](r);return n}}function Y5(e,t){var n;const i=[],r={color:0,var:0,number:0};for(let a=0;a<t.values.length;a++){const o=t.types[a],s=e.indexes[o][r[o]],l=(n=e.values[s])!==null&&n!==void 0?n:0;i[a]=l,r[o]++}return i}const K5=(e,t)=>{const n=ui.createTransformer(t),i=to(e),r=to(t);return i.indexes.var.length===r.indexes.var.length&&i.indexes.color.length===r.indexes.color.length&&i.indexes.number.length>=r.indexes.number.length?Jd.has(e)&&!r.values.length||Jd.has(t)&&!i.values.length?U5(e,t):Gn(Jv(Y5(i,r),r.values),n):$s(e,t)};function ex(e,t,n){return typeof e=="number"&&typeof t=="number"&&typeof n=="number"?Te(e,t,n):Vf(e)(e,t)}function X5(e,t,n){const i=[],r=n||ex,a=e.length-1;for(let o=0;o<a;o++){let s=r(e[o],e[o+1]);if(t){const l=Array.isArray(t)?t[o]||Je:t;s=Gn(l,s)}i.push(s)}return i}function Nf(e,t,{clamp:n=!0,ease:i,mixer:r}={}){const a=e.length;if(qd(a===t.length),a===1)return()=>t[0];if(a===2&&e[0]===e[1])return()=>t[1];e[0]>e[a-1]&&(e=[...e].reverse(),t=[...t].reverse());const o=X5(t,i,r),s=o.length,l=d=>{let u=0;if(s>1)for(;u<e.length-2&&!(d<e[u+1]);u++);const f=Fi(e[u],e[u+1],d);return o[u](f)};return n?d=>l(di(e[0],e[a-1],d)):l}function Q5(e,t){const n=e[e.length-1];for(let i=1;i<=t;i++){const r=Fi(0,t,i);e.push(Te(n,1,r))}}function tx(e){const t=[0];return Q5(t,e.length-1),t}function Z5(e,t){return e.map(n=>n*t)}function J5(e,t){return e.map(()=>t||Zv).splice(0,e.length-1)}function Bs({duration:e=300,keyframes:t,times:n,ease:i="easeInOut"}){const r=N5(i)?i.map(Zh):Zh(i),a={done:!1,value:t[0]},o=Z5(n&&n.length===t.length?n:tx(t),e),s=Nf(o,t,{ease:Array.isArray(r)?r:J5(t,r)});return{calculatedDuration:e,next:l=>(a.value=s(l),a.done=l>=e,a)}}const t0=2e4;function e9(e){let t=0;const n=50;let i=e.next(t);for(;!i.done&&t<t0;)t+=n,i=e.next(t);return t>=t0?1/0:t}const t9=e=>{const t=({timestamp:n})=>e(n);return{start:()=>ae.update(t,!0),stop:()=>Zt(t),now:()=>Be.isProcessing?Be.timestamp:pn.now()}},n9={decay:Xh,inertia:Xh,tween:Bs,keyframes:Bs,spring:Qv},i9=e=>e/100;class Ff extends Kv{constructor(t){super(t),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:l}=this.options;l&&l()};const{name:n,motionValue:i,element:r,keyframes:a}=this.options,o=(r==null?void 0:r.KeyframeResolver)||zf,s=(l,d)=>this.onKeyframesResolved(l,d);this.resolver=new o(a,s,n,i,r),this.resolver.scheduleResolve()}initPlayback(t){const{type:n="keyframes",repeat:i=0,repeatDelay:r=0,repeatType:a,velocity:o=0}=this.options,s=If(n)?n:n9[n]||Bs;let l,d;s!==Bs&&typeof t[0]!="number"&&(l=Gn(i9,ex(t[0],t[1])),t=[0,100]);const u=s({...this.options,keyframes:t});a==="mirror"&&(d=s({...this.options,keyframes:[...t].reverse(),velocity:-o})),u.calculatedDuration===null&&(u.calculatedDuration=e9(u));const{calculatedDuration:f}=u,p=f+r,g=p*(i+1)-r;return{generator:u,mirroredGenerator:d,mapPercentToKeyframes:l,calculatedDuration:f,resolvedDuration:p,totalDuration:g}}onPostResolved(){const{autoplay:t=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!t?this.pause():this.state=this.pendingPlayState}tick(t,n=!1){const{resolved:i}=this;if(!i){const{keyframes:T}=this.options;return{done:!0,value:T[T.length-1]}}const{finalKeyframe:r,generator:a,mirroredGenerator:o,mapPercentToKeyframes:s,keyframes:l,calculatedDuration:d,totalDuration:u,resolvedDuration:f}=i;if(this.startTime===null)return a.next(0);const{delay:p,repeat:g,repeatType:x,repeatDelay:y,onUpdate:b}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-u/this.speed,this.startTime)),n?this.currentTime=t:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(t-this.startTime)*this.speed;const v=this.currentTime-p*(this.speed>=0?1:-1),h=this.speed>=0?v<0:v>u;this.currentTime=Math.max(v,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=u);let m=this.currentTime,w=a;if(g){const T=Math.min(this.currentTime,u)/f;let z=Math.floor(T),E=T%1;!E&&T>=1&&(E=1),E===1&&z--,z=Math.min(z,g+1),!!(z%2)&&(x==="reverse"?(E=1-E,y&&(E-=y/f)):x==="mirror"&&(w=o)),m=di(0,1,E)*f}const S=h?{done:!1,value:l[0]}:w.next(m);s&&(S.value=s(S.value));let{done:C}=S;!h&&d!==null&&(C=this.speed>=0?this.currentTime>=u:this.currentTime<=0);const A=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&C);return A&&r!==void 0&&(S.value=Al(l,this.options,r)),b&&b(S.value),A&&this.finish(),S}get duration(){const{resolved:t}=this;return t?Pn(t.calculatedDuration):0}get time(){return Pn(this.currentTime)}set time(t){t=En(t),this.currentTime=t,this.holdTime!==null||this.speed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.speed)}get speed(){return this.playbackSpeed}set speed(t){const n=this.playbackSpeed!==t;this.playbackSpeed=t,n&&(this.time=Pn(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:t=t9,onPlay:n,startTime:i}=this.options;this.driver||(this.driver=t(a=>this.tick(a))),n&&n();const r=this.driver.now();this.holdTime!==null?this.startTime=r-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=r):this.startTime=i??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var t;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(t=this.currentTime)!==null&&t!==void 0?t:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:t}=this.options;t&&t()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}}const r9=new Set(["opacity","clipPath","filter","transform"]),a9=10,o9=(e,t)=>{let n="";const i=Math.max(Math.round(t/a9),2);for(let r=0;r<i;r++)n+=e(Fi(0,i-1,r))+", ";return`linear(${n.substring(0,n.length-2)})`};function $f(e){let t;return()=>(t===void 0&&(t=e()),t)}const s9={linearEasing:void 0};function l9(e,t){const n=$f(e);return()=>{var i;return(i=s9[t])!==null&&i!==void 0?i:n()}}const Hs=l9(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing");function nx(e){return!!(typeof e=="function"&&Hs()||!e||typeof e=="string"&&(e in eu||Hs())||Df(e)||Array.isArray(e)&&e.every(nx))}const ma=([e,t,n,i])=>`cubic-bezier(${e}, ${t}, ${n}, ${i})`,eu={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:ma([0,.65,.55,1]),circOut:ma([.55,0,1,.45]),backIn:ma([.31,.01,.66,-.59]),backOut:ma([.33,1.53,.69,.99])};function ix(e,t){if(e)return typeof e=="function"&&Hs()?o9(e,t):Df(e)?ma(e):Array.isArray(e)?e.map(n=>ix(n,t)||eu.easeOut):eu[e]}function c9(e,t,n,{delay:i=0,duration:r=300,repeat:a=0,repeatType:o="loop",ease:s,times:l}={}){const d={[t]:n};l&&(d.offset=l);const u=ix(s,r);return Array.isArray(u)&&(d.easing=u),e.animate(d,{delay:i,duration:r,easing:Array.isArray(u)?"linear":u,fill:"both",iterations:a+1,direction:o==="reverse"?"alternate":"normal"})}function n0(e,t){e.timeline=t,e.onfinish=null}const d9=$f(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),Us=10,u9=2e4;function f9(e){return If(e.type)||e.type==="spring"||!nx(e.ease)}function p9(e,t){const n=new Ff({...t,keyframes:e,repeat:0,delay:0,isGenerator:!0});let i={done:!1,value:e[0]};const r=[];let a=0;for(;!i.done&&a<u9;)i=n.sample(a),r.push(i.value),a+=Us;return{times:void 0,keyframes:r,duration:a-Us,ease:"linear"}}const rx={anticipate:Gv,backInOut:Pv,circInOut:_v};function h9(e){return e in rx}class i0 extends Kv{constructor(t){super(t);const{name:n,motionValue:i,element:r,keyframes:a}=this.options;this.resolver=new Yv(a,(o,s)=>this.onKeyframesResolved(o,s),n,i,r),this.resolver.scheduleResolve()}initPlayback(t,n){var i;let{duration:r=300,times:a,ease:o,type:s,motionValue:l,name:d,startTime:u}=this.options;if(!(!((i=l.owner)===null||i===void 0)&&i.current))return!1;if(typeof o=="string"&&Hs()&&h9(o)&&(o=rx[o]),f9(this.options)){const{onComplete:p,onUpdate:g,motionValue:x,element:y,...b}=this.options,v=p9(t,b);t=v.keyframes,t.length===1&&(t[1]=t[0]),r=v.duration,a=v.times,o=v.ease,s="keyframes"}const f=c9(l.owner.current,d,t,{...this.options,duration:r,times:a,ease:o});return f.startTime=u??this.calcStartTime(),this.pendingTimeline?(n0(f,this.pendingTimeline),this.pendingTimeline=void 0):f.onfinish=()=>{const{onComplete:p}=this.options;l.set(Al(t,this.options,n)),p&&p(),this.cancel(),this.resolveFinishedPromise()},{animation:f,duration:r,times:a,type:s,ease:o,keyframes:t}}get duration(){const{resolved:t}=this;if(!t)return 0;const{duration:n}=t;return Pn(n)}get time(){const{resolved:t}=this;if(!t)return 0;const{animation:n}=t;return Pn(n.currentTime||0)}set time(t){const{resolved:n}=this;if(!n)return;const{animation:i}=n;i.currentTime=En(t)}get speed(){const{resolved:t}=this;if(!t)return 1;const{animation:n}=t;return n.playbackRate}set speed(t){const{resolved:n}=this;if(!n)return;const{animation:i}=n;i.playbackRate=t}get state(){const{resolved:t}=this;if(!t)return"idle";const{animation:n}=t;return n.playState}get startTime(){const{resolved:t}=this;if(!t)return null;const{animation:n}=t;return n.startTime}attachTimeline(t){if(!this._resolved)this.pendingTimeline=t;else{const{resolved:n}=this;if(!n)return Je;const{animation:i}=n;n0(i,t)}return Je}play(){if(this.isStopped)return;const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.playState==="finished"&&this.updateFinishedPromise(),n.play()}pause(){const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:t}=this;if(!t)return;const{animation:n,keyframes:i,duration:r,type:a,ease:o,times:s}=t;if(n.playState==="idle"||n.playState==="finished")return;if(this.time){const{motionValue:d,onUpdate:u,onComplete:f,element:p,...g}=this.options,x=new Ff({...g,keyframes:i,duration:r,type:a,ease:o,times:s,isGenerator:!0}),y=En(this.time);d.setWithVelocity(x.sample(y-Us).value,x.sample(y).value,Us)}const{onStop:l}=this.options;l&&l(),this.cancel()}complete(){const{resolved:t}=this;t&&t.animation.finish()}cancel(){const{resolved:t}=this;t&&t.animation.cancel()}static supports(t){const{motionValue:n,name:i,repeatDelay:r,repeatType:a,damping:o,type:s}=t;return d9()&&i&&r9.has(i)&&n&&n.owner&&n.owner.current instanceof HTMLElement&&!n.owner.getProps().onUpdate&&!r&&a!=="mirror"&&o!==0&&s!=="inertia"}}const ax=$f(()=>window.ScrollTimeline!==void 0);class m9{constructor(t){this.stop=()=>this.runAll("stop"),this.animations=t.filter(Boolean)}then(t,n){return Promise.all(this.animations).then(t).catch(n)}getAll(t){return this.animations[0][t]}setAll(t,n){for(let i=0;i<this.animations.length;i++)this.animations[i][t]=n}attachTimeline(t,n){const i=this.animations.map(r=>ax()&&r.attachTimeline?r.attachTimeline(t):n(r));return()=>{i.forEach((r,a)=>{r&&r(),this.animations[a].stop()})}}get time(){return this.getAll("time")}set time(t){this.setAll("time",t)}get speed(){return this.getAll("speed")}set speed(t){this.setAll("speed",t)}get startTime(){return this.getAll("startTime")}get duration(){let t=0;for(let n=0;n<this.animations.length;n++)t=Math.max(t,this.animations[n].duration);return t}runAll(t){this.animations.forEach(n=>n[t]())}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}function g9({when:e,delay:t,delayChildren:n,staggerChildren:i,staggerDirection:r,repeat:a,repeatType:o,repeatDelay:s,from:l,elapsed:d,...u}){return!!Object.keys(u).length}const Bf=(e,t,n,i={},r,a)=>o=>{const s=Af(i,e)||{},l=s.delay||i.delay||0;let{elapsed:d=0}=i;d=d-En(l);let u={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:t.getVelocity(),...s,delay:-d,onUpdate:p=>{t.set(p),s.onUpdate&&s.onUpdate(p)},onComplete:()=>{o(),s.onComplete&&s.onComplete()},name:e,motionValue:t,element:a?void 0:r};g9(s)||(u={...u,...I4(e,u)}),u.duration&&(u.duration=En(u.duration)),u.repeatDelay&&(u.repeatDelay=En(u.repeatDelay)),u.from!==void 0&&(u.keyframes[0]=u.from);let f=!1;if((u.type===!1||u.duration===0&&!u.repeatDelay)&&(u.duration=0,u.delay===0&&(f=!0)),f&&!a&&t.get()!==void 0){const p=Al(u.keyframes,s);if(p!==void 0)return ae.update(()=>{u.onUpdate(p),u.onComplete()}),new m9([])}return!a&&i0.supports(u)?new i0(u):new Ff(u)},v9=e=>!!(e&&typeof e=="object"&&e.mix&&e.toValue),x9=e=>Wd(e)?e[e.length-1]||0:e;function Hf(e,t){e.indexOf(t)===-1&&e.push(t)}function Uf(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class Wf{constructor(){this.subscriptions=[]}add(t){return Hf(this.subscriptions,t),()=>Uf(this.subscriptions,t)}notify(t,n,i){const r=this.subscriptions.length;if(r)if(r===1)this.subscriptions[0](t,n,i);else for(let a=0;a<r;a++){const o=this.subscriptions[a];o&&o(t,n,i)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const r0=30,y9=e=>!isNaN(parseFloat(e)),Ea={current:void 0};class w9{constructor(t,n={}){this.version="11.11.11",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(i,r=!0)=>{const a=pn.now();this.updatedAt!==a&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(i),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),r&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(t),this.owner=n.owner}setCurrent(t){this.current=t,this.updatedAt=pn.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=y9(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new Wf);const i=this.events[t].add(n);return t==="change"?()=>{i(),ae.read(()=>{this.events.change.getSize()||this.stop()})}:i}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t,n=!0){!n||!this.passiveEffect?this.updateAndNotify(t,n):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,n,i){this.set(n),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-i}jump(t,n=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return Ea.current&&Ea.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const t=pn.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>r0)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,r0);return Rf(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function ln(e,t){return new w9(e,t)}function b9(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,ln(n))}function S9(e,t){const n=Tl(e,t);let{transitionEnd:i={},transition:r={},...a}=n||{};a={...a,...i};for(const o in a){const s=x9(a[o]);b9(e,o,s)}}const qf=e=>e.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),j9="framerAppearId",ox="data-"+qf(j9);function sx(e){return e.props[ox]}const at=e=>!!(e&&e.getVelocity);function C9(e){return!!(at(e)&&e.add)}function tu(e,t){const n=e.getValue("willChange");if(C9(n))return n.add(t)}function k9({protectedKeys:e,needsAnimating:t},n){const i=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,i}function lx(e,t,{delay:n=0,transitionOverride:i,type:r}={}){var a;let{transition:o=e.getDefaultTransition(),transitionEnd:s,...l}=t;i&&(o=i);const d=[],u=r&&e.animationState&&e.animationState.getState()[r];for(const f in l){const p=e.getValue(f,(a=e.latestValues[f])!==null&&a!==void 0?a:null),g=l[f];if(g===void 0||u&&k9(u,f))continue;const x={delay:n,...Af(o||{},f)};let y=!1;if(window.MotionHandoffAnimation){const v=sx(e);if(v){const h=window.MotionHandoffAnimation(v,f,ae);h!==null&&(x.startTime=h,y=!0)}}tu(e,f),p.start(Bf(f,p,g,e.shouldReduceMotion&&Ki.has(f)?{type:!1}:x,e,y));const b=p.animation;b&&d.push(b)}return s&&Promise.all(d).then(()=>{ae.update(()=>{s&&S9(e,s)})}),d}function nu(e,t,n={}){var i;const r=Tl(e,t,n.type==="exit"?(i=e.presenceContext)===null||i===void 0?void 0:i.custom:void 0);let{transition:a=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(a=n.transitionOverride);const o=r?()=>Promise.all(lx(e,r,n)):()=>Promise.resolve(),s=e.variantChildren&&e.variantChildren.size?(d=0)=>{const{delayChildren:u=0,staggerChildren:f,staggerDirection:p}=a;return T9(e,t,u+d,f,p,n)}:()=>Promise.resolve(),{when:l}=a;if(l){const[d,u]=l==="beforeChildren"?[o,s]:[s,o];return d().then(()=>u())}else return Promise.all([o(),s(n.delay)])}function T9(e,t,n=0,i=0,r=1,a){const o=[],s=(e.variantChildren.size-1)*i,l=r===1?(d=0)=>d*i:(d=0)=>s-d*i;return Array.from(e.variantChildren).sort(A9).forEach((d,u)=>{d.notify("AnimationStart",t),o.push(nu(d,t,{...a,delay:n+l(u)}).then(()=>d.notify("AnimationComplete",t)))}),Promise.all(o)}function A9(e,t){return e.sortNodePosition(t)}function E9(e,t,n={}){e.notify("AnimationStart",t);let i;if(Array.isArray(t)){const r=t.map(a=>nu(e,a,n));i=Promise.all(r)}else if(typeof t=="string")i=nu(e,t,n);else{const r=typeof t=="function"?Tl(e,t,n.custom):t;i=Promise.all(lx(e,r,n))}return i.then(()=>{e.notify("AnimationComplete",t)})}const P9=Tf.length;function cx(e){if(!e)return;if(!e.isControllingVariants){const n=e.parent?cx(e.parent)||{}:{};return e.props.initial!==void 0&&(n.initial=e.props.initial),n}const t={};for(let n=0;n<P9;n++){const i=Tf[n],r=e.props[i];(Ja(r)||r===!1)&&(t[i]=r)}return t}const G9=[...kf].reverse(),z9=kf.length;function _9(e){return t=>Promise.all(t.map(({animation:n,options:i})=>E9(e,n,i)))}function M9(e){let t=_9(e),n=a0(),i=!0;const r=l=>(d,u)=>{var f;const p=Tl(e,u,l==="exit"?(f=e.presenceContext)===null||f===void 0?void 0:f.custom:void 0);if(p){const{transition:g,transitionEnd:x,...y}=p;d={...d,...y,...x}}return d};function a(l){t=l(e)}function o(l){const{props:d}=e,u=cx(e.parent)||{},f=[],p=new Set;let g={},x=1/0;for(let b=0;b<z9;b++){const v=G9[b],h=n[v],m=d[v]!==void 0?d[v]:u[v],w=Ja(m),S=v===l?h.isActive:null;S===!1&&(x=b);let C=m===u[v]&&m!==d[v]&&w;if(C&&i&&e.manuallyAnimateOnMount&&(C=!1),h.protectedKeys={...g},!h.isActive&&S===null||!m&&!h.prevProp||kl(m)||typeof m=="boolean")continue;const A=L9(h.prevProp,m);let T=A||v===l&&h.isActive&&!C&&w||b>x&&w,z=!1;const E=Array.isArray(m)?m:[m];let P=E.reduce(r(v),{});S===!1&&(P={});const{prevResolvedValues:_={}}=h,I={..._,...P},R=Y=>{T=!0,p.has(Y)&&(z=!0,p.delete(Y)),h.needsAnimating[Y]=!0;const M=e.getValue(Y);M&&(M.liveStyle=!1)};for(const Y in I){const M=P[Y],V=_[Y];if(g.hasOwnProperty(Y))continue;let $=!1;Wd(M)&&Wd(V)?$=!jv(M,V):$=M!==V,$?M!=null?R(Y):p.add(Y):M!==void 0&&p.has(Y)?R(Y):h.protectedKeys[Y]=!0}h.prevProp=m,h.prevResolvedValues=P,h.isActive&&(g={...g,...P}),i&&e.blockInitialAnimation&&(T=!1),T&&(!(C&&A)||z)&&f.push(...E.map(Y=>({animation:Y,options:{type:v}})))}if(p.size){const b={};p.forEach(v=>{const h=e.getBaseTarget(v),m=e.getValue(v);m&&(m.liveStyle=!0),b[v]=h??null}),f.push({animation:b})}let y=!!f.length;return i&&(d.initial===!1||d.initial===d.animate)&&!e.manuallyAnimateOnMount&&(y=!1),i=!1,y?t(f):Promise.resolve()}function s(l,d){var u;if(n[l].isActive===d)return Promise.resolve();(u=e.variantChildren)===null||u===void 0||u.forEach(p=>{var g;return(g=p.animationState)===null||g===void 0?void 0:g.setActive(l,d)}),n[l].isActive=d;const f=o(l);for(const p in n)n[p].protectedKeys={};return f}return{animateChanges:o,setActive:s,setAnimateFunction:a,getState:()=>n,reset:()=>{n=a0(),i=!0}}}function L9(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!jv(t,e):!1}function bi(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function a0(){return{animate:bi(!0),whileInView:bi(),whileHover:bi(),whileTap:bi(),whileDrag:bi(),whileFocus:bi(),exit:bi()}}class mi{constructor(t){this.isMounted=!1,this.node=t}update(){}}class O9 extends mi{constructor(t){super(t),t.animationState||(t.animationState=M9(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();kl(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){var t;this.node.animationState.reset(),(t=this.unmountControls)===null||t===void 0||t.call(this)}}let I9=0;class R9 extends mi{constructor(){super(...arguments),this.id=I9++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===i)return;const r=this.node.animationState.setActive("exit",!t);n&&!t&&r.then(()=>n(this.id))}mount(){const{register:t}=this.node.presenceContext||{};t&&(this.unmount=t(this.id))}unmount(){}}const D9={animation:{Feature:O9},exit:{Feature:R9}},dx=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1;function El(e,t="page"){return{point:{x:e[`${t}X`],y:e[`${t}Y`]}}}const V9=e=>t=>dx(t)&&e(t,El(t));function Tn(e,t,n,i={passive:!0}){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n)}function zn(e,t,n,i){return Tn(e,t,V9(n),i)}const o0=(e,t)=>Math.abs(e-t);function N9(e,t){const n=o0(e.x,t.x),i=o0(e.y,t.y);return Math.sqrt(n**2+i**2)}class ux{constructor(t,n,{transformPagePoint:i,contextWindow:r,dragSnapToOrigin:a=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const f=Ec(this.lastMoveEventInfo,this.history),p=this.startEvent!==null,g=N9(f.offset,{x:0,y:0})>=3;if(!p&&!g)return;const{point:x}=f,{timestamp:y}=Be;this.history.push({...x,timestamp:y});const{onStart:b,onMove:v}=this.handlers;p||(b&&b(this.lastMoveEvent,f),this.startEvent=this.lastMoveEvent),v&&v(this.lastMoveEvent,f)},this.handlePointerMove=(f,p)=>{this.lastMoveEvent=f,this.lastMoveEventInfo=Ac(p,this.transformPagePoint),ae.update(this.updatePoint,!0)},this.handlePointerUp=(f,p)=>{this.end();const{onEnd:g,onSessionEnd:x,resumeAnimation:y}=this.handlers;if(this.dragSnapToOrigin&&y&&y(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const b=Ec(f.type==="pointercancel"?this.lastMoveEventInfo:Ac(p,this.transformPagePoint),this.history);this.startEvent&&g&&g(f,b),x&&x(f,b)},!dx(t))return;this.dragSnapToOrigin=a,this.handlers=n,this.transformPagePoint=i,this.contextWindow=r||window;const o=El(t),s=Ac(o,this.transformPagePoint),{point:l}=s,{timestamp:d}=Be;this.history=[{...l,timestamp:d}];const{onSessionStart:u}=n;u&&u(t,Ec(s,this.history)),this.removeListeners=Gn(zn(this.contextWindow,"pointermove",this.handlePointerMove),zn(this.contextWindow,"pointerup",this.handlePointerUp),zn(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),Zt(this.updatePoint)}}function Ac(e,t){return t?{point:t(e.point)}:e}function s0(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Ec({point:e},t){return{point:e,delta:s0(e,fx(t)),offset:s0(e,F9(t)),velocity:$9(t,.1)}}function F9(e){return e[0]}function fx(e){return e[e.length-1]}function $9(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,i=null;const r=fx(e);for(;n>=0&&(i=e[n],!(r.timestamp-i.timestamp>En(t)));)n--;if(!i)return{x:0,y:0};const a=Pn(r.timestamp-i.timestamp);if(a===0)return{x:0,y:0};const o={x:(r.x-i.x)/a,y:(r.y-i.y)/a};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function px(e){let t=null;return()=>{const n=()=>{t=null};return t===null?(t=e,n):!1}}const l0=px("dragHorizontal"),c0=px("dragVertical");function hx(e){let t=!1;if(e==="y")t=c0();else if(e==="x")t=l0();else{const n=l0(),i=c0();n&&i?t=()=>{n(),i()}:(n&&n(),i&&i())}return t}function mx(){const e=hx(!0);return e?(e(),!1):!0}function pr(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}const gx=1e-4,B9=1-gx,H9=1+gx,vx=.01,U9=0-vx,W9=0+vx;function At(e){return e.max-e.min}function q9(e,t,n){return Math.abs(e-t)<=n}function d0(e,t,n,i=.5){e.origin=i,e.originPoint=Te(t.min,t.max,e.origin),e.scale=At(n)/At(t),e.translate=Te(n.min,n.max,e.origin)-e.originPoint,(e.scale>=B9&&e.scale<=H9||isNaN(e.scale))&&(e.scale=1),(e.translate>=U9&&e.translate<=W9||isNaN(e.translate))&&(e.translate=0)}function Pa(e,t,n,i){d0(e.x,t.x,n.x,i?i.originX:void 0),d0(e.y,t.y,n.y,i?i.originY:void 0)}function u0(e,t,n){e.min=n.min+t.min,e.max=e.min+At(t)}function Y9(e,t,n){u0(e.x,t.x,n.x),u0(e.y,t.y,n.y)}function f0(e,t,n){e.min=t.min-n.min,e.max=e.min+At(t)}function Ga(e,t,n){f0(e.x,t.x,n.x),f0(e.y,t.y,n.y)}function K9(e,{min:t,max:n},i){return t!==void 0&&e<t?e=i?Te(t,e,i.min):Math.max(e,t):n!==void 0&&e>n&&(e=i?Te(n,e,i.max):Math.min(e,n)),e}function p0(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function X9(e,{top:t,left:n,bottom:i,right:r}){return{x:p0(e.x,n,r),y:p0(e.y,t,i)}}function h0(e,t){let n=t.min-e.min,i=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,i]=[i,n]),{min:n,max:i}}function Q9(e,t){return{x:h0(e.x,t.x),y:h0(e.y,t.y)}}function Z9(e,t){let n=.5;const i=At(e),r=At(t);return r>i?n=Fi(t.min,t.max-i,e.min):i>r&&(n=Fi(e.min,e.max-r,t.min)),di(0,1,n)}function J9(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const iu=.35;function e8(e=iu){return e===!1?e=0:e===!0&&(e=iu),{x:m0(e,"left","right"),y:m0(e,"top","bottom")}}function m0(e,t,n){return{min:g0(e,t),max:g0(e,n)}}function g0(e,t){return typeof e=="number"?e:e[t]||0}const v0=()=>({translate:0,scale:1,origin:0,originPoint:0}),hr=()=>({x:v0(),y:v0()}),x0=()=>({min:0,max:0}),_e=()=>({x:x0(),y:x0()});function _t(e){return[e("x"),e("y")]}function xx({top:e,left:t,right:n,bottom:i}){return{x:{min:t,max:n},y:{min:e,max:i}}}function t8({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function n8(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),i=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:i.y,right:i.x}}function Pc(e){return e===void 0||e===1}function ru({scale:e,scaleX:t,scaleY:n}){return!Pc(e)||!Pc(t)||!Pc(n)}function Ci(e){return ru(e)||yx(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function yx(e){return y0(e.x)||y0(e.y)}function y0(e){return e&&e!=="0%"}function Ws(e,t,n){const i=e-n,r=t*i;return n+r}function w0(e,t,n,i,r){return r!==void 0&&(e=Ws(e,r,i)),Ws(e,n,i)+t}function au(e,t=0,n=1,i,r){e.min=w0(e.min,t,n,i,r),e.max=w0(e.max,t,n,i,r)}function wx(e,{x:t,y:n}){au(e.x,t.translate,t.scale,t.originPoint),au(e.y,n.translate,n.scale,n.originPoint)}const b0=.999999999999,S0=1.0000000000001;function i8(e,t,n,i=!1){const r=n.length;if(!r)return;t.x=t.y=1;let a,o;for(let s=0;s<r;s++){a=n[s],o=a.projectionDelta;const{visualElement:l}=a.options;l&&l.props.style&&l.props.style.display==="contents"||(i&&a.options.layoutScroll&&a.scroll&&a!==a.root&&gr(e,{x:-a.scroll.offset.x,y:-a.scroll.offset.y}),o&&(t.x*=o.x.scale,t.y*=o.y.scale,wx(e,o)),i&&Ci(a.latestValues)&&gr(e,a.latestValues))}t.x<S0&&t.x>b0&&(t.x=1),t.y<S0&&t.y>b0&&(t.y=1)}function mr(e,t){e.min=e.min+t,e.max=e.max+t}function j0(e,t,n,i,r=.5){const a=Te(e.min,e.max,r);au(e,t,n,a,i)}function gr(e,t){j0(e.x,t.x,t.scaleX,t.scale,t.originX),j0(e.y,t.y,t.scaleY,t.scale,t.originY)}function bx(e,t){return xx(n8(e.getBoundingClientRect(),t))}function r8(e,t,n){const i=bx(e,n),{scroll:r}=t;return r&&(mr(i.x,r.offset.x),mr(i.y,r.offset.y)),i}const Sx=({current:e})=>e?e.ownerDocument.defaultView:null,a8=new WeakMap;class o8{constructor(t){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=_e(),this.visualElement=t}start(t,{snapToCursor:n=!1}={}){const{presenceContext:i}=this.visualElement;if(i&&i.isPresent===!1)return;const r=u=>{const{dragSnapToOrigin:f}=this.getProps();f?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(El(u,"page").point)},a=(u,f)=>{const{drag:p,dragPropagation:g,onDragStart:x}=this.getProps();if(p&&!g&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=hx(p),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),_t(b=>{let v=this.getAxisMotionValue(b).get()||0;if(fn.test(v)){const{projection:h}=this.visualElement;if(h&&h.layout){const m=h.layout.layoutBox[b];m&&(v=At(m)*(parseFloat(v)/100))}}this.originPoint[b]=v}),x&&ae.postRender(()=>x(u,f)),tu(this.visualElement,"transform");const{animationState:y}=this.visualElement;y&&y.setActive("whileDrag",!0)},o=(u,f)=>{const{dragPropagation:p,dragDirectionLock:g,onDirectionLock:x,onDrag:y}=this.getProps();if(!p&&!this.openGlobalLock)return;const{offset:b}=f;if(g&&this.currentDirection===null){this.currentDirection=s8(b),this.currentDirection!==null&&x&&x(this.currentDirection);return}this.updateAxis("x",f.point,b),this.updateAxis("y",f.point,b),this.visualElement.render(),y&&y(u,f)},s=(u,f)=>this.stop(u,f),l=()=>_t(u=>{var f;return this.getAnimationState(u)==="paused"&&((f=this.getAxisMotionValue(u).animation)===null||f===void 0?void 0:f.play())}),{dragSnapToOrigin:d}=this.getProps();this.panSession=new ux(t,{onSessionStart:r,onStart:a,onMove:o,onSessionEnd:s,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:d,contextWindow:Sx(this.visualElement)})}stop(t,n){const i=this.isDragging;if(this.cancel(),!i)return;const{velocity:r}=n;this.startAnimation(r);const{onDragEnd:a}=this.getProps();a&&ae.postRender(()=>a(t,n))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:i}=this.getProps();!i&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(t,n,i){const{drag:r}=this.getProps();if(!i||!Do(t,r,this.currentDirection))return;const a=this.getAxisMotionValue(t);let o=this.originPoint[t]+i[t];this.constraints&&this.constraints[t]&&(o=K9(o,this.constraints[t],this.elastic[t])),a.set(o)}resolveConstraints(){var t;const{dragConstraints:n,dragElastic:i}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(t=this.visualElement.projection)===null||t===void 0?void 0:t.layout,a=this.constraints;n&&pr(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&r?this.constraints=X9(r.layoutBox,n):this.constraints=!1,this.elastic=e8(i),a!==this.constraints&&r&&this.constraints&&!this.hasMutatedConstraints&&_t(o=>{this.constraints!==!1&&this.getAxisMotionValue(o)&&(this.constraints[o]=J9(r.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!pr(t))return!1;const i=t.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;const a=r8(i,r.root,this.visualElement.getTransformPagePoint());let o=Q9(r.layout.layoutBox,a);if(n){const s=n(t8(o));this.hasMutatedConstraints=!!s,s&&(o=xx(s))}return o}startAnimation(t){const{drag:n,dragMomentum:i,dragElastic:r,dragTransition:a,dragSnapToOrigin:o,onDragTransitionEnd:s}=this.getProps(),l=this.constraints||{},d=_t(u=>{if(!Do(u,n,this.currentDirection))return;let f=l&&l[u]||{};o&&(f={min:0,max:0});const p=r?200:1e6,g=r?40:1e7,x={type:"inertia",velocity:i?t[u]:0,bounceStiffness:p,bounceDamping:g,timeConstant:750,restDelta:1,restSpeed:10,...a,...f};return this.startAxisValueAnimation(u,x)});return Promise.all(d).then(s)}startAxisValueAnimation(t,n){const i=this.getAxisMotionValue(t);return tu(this.visualElement,t),i.start(Bf(t,i,0,n,this.visualElement,!1))}stopAnimation(){_t(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){_t(t=>{var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(t){var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(t){const n=`_drag${t.toUpperCase()}`,i=this.visualElement.getProps(),r=i[n];return r||this.visualElement.getValue(t,(i.initial?i.initial[t]:void 0)||0)}snapToCursor(t){_t(n=>{const{drag:i}=this.getProps();if(!Do(n,i,this.currentDirection))return;const{projection:r}=this.visualElement,a=this.getAxisMotionValue(n);if(r&&r.layout){const{min:o,max:s}=r.layout.layoutBox[n];a.set(t[n]-Te(o,s,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:i}=this.visualElement;if(!pr(n)||!i||!this.constraints)return;this.stopAnimation();const r={x:0,y:0};_t(o=>{const s=this.getAxisMotionValue(o);if(s&&this.constraints!==!1){const l=s.get();r[o]=Z9({min:l,max:l},this.constraints[o])}});const{transformTemplate:a}=this.visualElement.getProps();this.visualElement.current.style.transform=a?a({},""):"none",i.root&&i.root.updateScroll(),i.updateLayout(),this.resolveConstraints(),_t(o=>{if(!Do(o,t,null))return;const s=this.getAxisMotionValue(o),{min:l,max:d}=this.constraints[o];s.set(Te(l,d,r[o]))})}addListeners(){if(!this.visualElement.current)return;a8.set(this.visualElement,this);const t=this.visualElement.current,n=zn(t,"pointerdown",l=>{const{drag:d,dragListener:u=!0}=this.getProps();d&&u&&this.start(l)}),i=()=>{const{dragConstraints:l}=this.getProps();pr(l)&&l.current&&(this.constraints=this.resolveRefConstraints())},{projection:r}=this.visualElement,a=r.addEventListener("measure",i);r&&!r.layout&&(r.root&&r.root.updateScroll(),r.updateLayout()),ae.read(i);const o=Tn(window,"resize",()=>this.scalePositionWithinConstraints()),s=r.addEventListener("didUpdate",({delta:l,hasLayoutChanged:d})=>{this.isDragging&&d&&(_t(u=>{const f=this.getAxisMotionValue(u);f&&(this.originPoint[u]+=l[u].translate,f.set(f.get()+l[u].translate))}),this.visualElement.render())});return()=>{o(),n(),a(),s&&s()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:i=!1,dragPropagation:r=!1,dragConstraints:a=!1,dragElastic:o=iu,dragMomentum:s=!0}=t;return{...t,drag:n,dragDirectionLock:i,dragPropagation:r,dragConstraints:a,dragElastic:o,dragMomentum:s}}}function Do(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function s8(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class l8 extends mi{constructor(t){super(t),this.removeGroupControls=Je,this.removeListeners=Je,this.controls=new o8(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Je}unmount(){this.removeGroupControls(),this.removeListeners()}}const C0=e=>(t,n)=>{e&&ae.postRender(()=>e(t,n))};class c8 extends mi{constructor(){super(...arguments),this.removePointerDownListener=Je}onPointerDown(t){this.session=new ux(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Sx(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:i,onPanEnd:r}=this.node.getProps();return{onSessionStart:C0(t),onStart:C0(n),onMove:i,onEnd:(a,o)=>{delete this.session,r&&ae.postRender(()=>r(a,o))}}}mount(){this.removePointerDownListener=zn(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const Pl=j.createContext(null);function d8(){const e=j.useContext(Pl);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:n,register:i}=e,r=j.useId();j.useEffect(()=>i(r),[]);const a=j.useCallback(()=>n&&n(r),[r,n]);return!t&&n?[!1,a]:[!0]}const Yf=j.createContext({}),jx=j.createContext({}),as={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function k0(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const oa={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(W.test(e))e=parseFloat(e);else return e;const n=k0(e,t.target.x),i=k0(e,t.target.y);return`${n}% ${i}%`}},u8={correct:(e,{treeScale:t,projectionDelta:n})=>{const i=e,r=ui.parse(e);if(r.length>5)return i;const a=ui.createTransformer(e),o=typeof r[0]!="number"?1:0,s=n.x.scale*t.x,l=n.y.scale*t.y;r[0+o]/=s,r[1+o]/=l;const d=Te(s,l,.5);return typeof r[2+o]=="number"&&(r[2+o]/=d),typeof r[3+o]=="number"&&(r[3+o]/=d),a(r)}},qs={};function f8(e){Object.assign(qs,e)}const{schedule:Kf,cancel:_P}=Cv(queueMicrotask,!1);class p8 extends j.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:i,layoutId:r}=this.props,{projection:a}=t;f8(h8),a&&(n.group&&n.group.add(a),i&&i.register&&r&&i.register(a),a.root.didUpdate(),a.addEventListener("animationComplete",()=>{this.safeToRemove()}),a.setOptions({...a.options,onExitComplete:()=>this.safeToRemove()})),as.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:i,drag:r,isPresent:a}=this.props,o=i.projection;return o&&(o.isPresent=a,r||t.layoutDependency!==n||n===void 0?o.willUpdate():this.safeToRemove(),t.isPresent!==a&&(a?o.promote():o.relegate()||ae.postRender(()=>{const s=o.getStack();(!s||!s.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),Kf.postRender(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:i}=this.props,{projection:r}=t;r&&(r.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(r),i&&i.deregister&&i.deregister(r))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function Cx(e){const[t,n]=d8(),i=j.useContext(Yf);return c.jsx(p8,{...e,layoutGroup:i,switchLayoutGroup:j.useContext(jx),isPresent:t,safeToRemove:n})}const h8={borderRadius:{...oa,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:oa,borderTopRightRadius:oa,borderBottomLeftRadius:oa,borderBottomRightRadius:oa,boxShadow:u8},kx=["TopLeft","TopRight","BottomLeft","BottomRight"],m8=kx.length,T0=e=>typeof e=="string"?parseFloat(e):e,A0=e=>typeof e=="number"||W.test(e);function g8(e,t,n,i,r,a){r?(e.opacity=Te(0,n.opacity!==void 0?n.opacity:1,v8(i)),e.opacityExit=Te(t.opacity!==void 0?t.opacity:1,0,x8(i))):a&&(e.opacity=Te(t.opacity!==void 0?t.opacity:1,n.opacity!==void 0?n.opacity:1,i));for(let o=0;o<m8;o++){const s=`border${kx[o]}Radius`;let l=E0(t,s),d=E0(n,s);if(l===void 0&&d===void 0)continue;l||(l=0),d||(d=0),l===0||d===0||A0(l)===A0(d)?(e[s]=Math.max(Te(T0(l),T0(d),i),0),(fn.test(d)||fn.test(l))&&(e[s]+="%")):e[s]=d}(t.rotate||n.rotate)&&(e.rotate=Te(t.rotate||0,n.rotate||0,i))}function E0(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const v8=Tx(0,.5,zv),x8=Tx(.5,.95,Je);function Tx(e,t,n){return i=>i<e?0:i>t?1:n(Fi(e,t,i))}function P0(e,t){e.min=t.min,e.max=t.max}function zt(e,t){P0(e.x,t.x),P0(e.y,t.y)}function G0(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}function z0(e,t,n,i,r){return e-=t,e=Ws(e,1/n,i),r!==void 0&&(e=Ws(e,1/r,i)),e}function y8(e,t=0,n=1,i=.5,r,a=e,o=e){if(fn.test(t)&&(t=parseFloat(t),t=Te(o.min,o.max,t/100)-o.min),typeof t!="number")return;let s=Te(a.min,a.max,i);e===a&&(s-=t),e.min=z0(e.min,t,n,s,r),e.max=z0(e.max,t,n,s,r)}function _0(e,t,[n,i,r],a,o){y8(e,t[n],t[i],t[r],t.scale,a,o)}const w8=["x","scaleX","originX"],b8=["y","scaleY","originY"];function M0(e,t,n,i){_0(e.x,t,w8,n?n.x:void 0,i?i.x:void 0),_0(e.y,t,b8,n?n.y:void 0,i?i.y:void 0)}function L0(e){return e.translate===0&&e.scale===1}function Ax(e){return L0(e.x)&&L0(e.y)}function O0(e,t){return e.min===t.min&&e.max===t.max}function S8(e,t){return O0(e.x,t.x)&&O0(e.y,t.y)}function I0(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function Ex(e,t){return I0(e.x,t.x)&&I0(e.y,t.y)}function R0(e){return At(e.x)/At(e.y)}function D0(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}class j8{constructor(){this.members=[]}add(t){Hf(this.members,t),t.scheduleRender()}remove(t){if(Uf(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(r=>t===r);if(n===0)return!1;let i;for(let r=n;r>=0;r--){const a=this.members[r];if(a.isPresent!==!1){i=a;break}}return i?(this.promote(i),!0):!1}promote(t,n){const i=this.lead;if(t!==i&&(this.prevLead=i,this.lead=t,t.show(),i)){i.instance&&i.scheduleRender(),t.scheduleRender(),t.resumeFrom=i,n&&(t.resumeFrom.preserveOpacity=!0),i.snapshot&&(t.snapshot=i.snapshot,t.snapshot.latestValues=i.animationValues||i.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:r}=t.options;r===!1&&i.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:i}=t;n.onExitComplete&&n.onExitComplete(),i&&i.options.onExitComplete&&i.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function C8(e,t,n){let i="";const r=e.x.translate/t.x,a=e.y.translate/t.y,o=(n==null?void 0:n.z)||0;if((r||a||o)&&(i=`translate3d(${r}px, ${a}px, ${o}px) `),(t.x!==1||t.y!==1)&&(i+=`scale(${1/t.x}, ${1/t.y}) `),n){const{transformPerspective:d,rotate:u,rotateX:f,rotateY:p,skewX:g,skewY:x}=n;d&&(i=`perspective(${d}px) ${i}`),u&&(i+=`rotate(${u}deg) `),f&&(i+=`rotateX(${f}deg) `),p&&(i+=`rotateY(${p}deg) `),g&&(i+=`skewX(${g}deg) `),x&&(i+=`skewY(${x}deg) `)}const s=e.x.scale*t.x,l=e.y.scale*t.y;return(s!==1||l!==1)&&(i+=`scale(${s}, ${l})`),i||"none"}const k8=(e,t)=>e.depth-t.depth;class T8{constructor(){this.children=[],this.isDirty=!1}add(t){Hf(this.children,t),this.isDirty=!0}remove(t){Uf(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(k8),this.isDirty=!1,this.children.forEach(t)}}function os(e){const t=at(e)?e.get():e;return v9(t)?t.toValue():t}function A8(e,t){const n=pn.now(),i=({timestamp:r})=>{const a=r-n;a>=t&&(Zt(i),e(a-t))};return ae.read(i,!0),()=>Zt(i)}function E8(e){return e instanceof SVGElement&&e.tagName!=="svg"}function P8(e,t,n){const i=at(e)?e:ln(e);return i.start(Bf("",i,t,n)),i.animation}const ki={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},ga=typeof window<"u"&&window.MotionDebug!==void 0,Gc=["","X","Y","Z"],G8={visibility:"hidden"},V0=1e3;let z8=0;function zc(e,t,n,i){const{latestValues:r}=t;r[e]&&(n[e]=r[e],t.setStaticValue(e,0),i&&(i[e]=0))}function Px(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:t}=e.options;if(!t)return;const n=sx(t);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:r,layoutId:a}=e.options;window.MotionCancelOptimisedAnimation(n,"transform",ae,!(r||a))}const{parent:i}=e;i&&!i.hasCheckedOptimisedAppear&&Px(i)}function Gx({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:i,resetTransform:r}){return class{constructor(o={},s=t==null?void 0:t()){this.id=z8++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,ga&&(ki.totalNodes=ki.resolvedTargetDeltas=ki.recalculatedProjection=0),this.nodes.forEach(L8),this.nodes.forEach(V8),this.nodes.forEach(N8),this.nodes.forEach(O8),ga&&window.MotionDebug.record(ki)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=s?s.root||s:this,this.path=s?[...s.path,s]:[],this.parent=s,this.depth=s?s.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new T8)}addEventListener(o,s){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new Wf),this.eventHandlers.get(o).add(s)}notifyListeners(o,...s){const l=this.eventHandlers.get(o);l&&l.notify(...s)}hasListeners(o){return this.eventHandlers.has(o)}mount(o,s=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=E8(o),this.instance=o;const{layoutId:l,layout:d,visualElement:u}=this.options;if(u&&!u.current&&u.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),s&&(d||l)&&(this.isLayoutDirty=!0),e){let f;const p=()=>this.root.updateBlockedByResize=!1;e(o,()=>{this.root.updateBlockedByResize=!0,f&&f(),f=A8(p,250),as.hasAnimatedSinceResize&&(as.hasAnimatedSinceResize=!1,this.nodes.forEach(F0))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&u&&(l||d)&&this.addEventListener("didUpdate",({delta:f,hasLayoutChanged:p,hasRelativeTargetChanged:g,layout:x})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const y=this.options.transition||u.getDefaultTransition()||U8,{onLayoutAnimationStart:b,onLayoutAnimationComplete:v}=u.getProps(),h=!this.targetLayout||!Ex(this.targetLayout,x)||g,m=!p&&g;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||m||p&&(h||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(f,m);const w={...Af(y,"layout"),onPlay:b,onComplete:v};(u.shouldReduceMotion||this.options.layoutRoot)&&(w.delay=0,w.type=!1),this.startAnimation(w)}else p||F0(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=x})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Zt(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(F8),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Px(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let u=0;u<this.path.length;u++){const f=this.path[u];f.shouldResetTransform=!0,f.updateScroll("snapshot"),f.options.layoutRoot&&f.willUpdate(!1)}const{layoutId:s,layout:l}=this.options;if(s===void 0&&!l)return;const d=this.getTransformTemplate();this.prevTransformTemplateValue=d?d(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(N0);return}this.isUpdating||this.nodes.forEach(R8),this.isUpdating=!1,this.nodes.forEach(D8),this.nodes.forEach(_8),this.nodes.forEach(M8),this.clearAllSnapshots();const s=pn.now();Be.delta=di(0,1e3/60,s-Be.timestamp),Be.timestamp=s,Be.isProcessing=!0,Sc.update.process(Be),Sc.preRender.process(Be),Sc.render.process(Be),Be.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Kf.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(I8),this.sharedNodes.forEach($8)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,ae.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){ae.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutCorrected=_e(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:s}=this.options;s&&s.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let s=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(s=!1),s){const l=i(this.instance);this.scroll={animationId:this.root.animationId,phase:o,isRoot:l,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!r)return;const o=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,s=this.projectionDelta&&!Ax(this.projectionDelta),l=this.getTransformTemplate(),d=l?l(this.latestValues,""):void 0,u=d!==this.prevTransformTemplateValue;o&&(s||Ci(this.latestValues)||u)&&(r(this.instance,d),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const s=this.measurePageBox();let l=this.removeElementScroll(s);return o&&(l=this.removeTransform(l)),W8(l),{animationId:this.root.animationId,measuredBox:s,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){var o;const{visualElement:s}=this.options;if(!s)return _e();const l=s.measureViewportBox();if(!(((o=this.scroll)===null||o===void 0?void 0:o.wasRoot)||this.path.some(q8))){const{scroll:u}=this.root;u&&(mr(l.x,u.offset.x),mr(l.y,u.offset.y))}return l}removeElementScroll(o){var s;const l=_e();if(zt(l,o),!((s=this.scroll)===null||s===void 0)&&s.wasRoot)return l;for(let d=0;d<this.path.length;d++){const u=this.path[d],{scroll:f,options:p}=u;u!==this.root&&f&&p.layoutScroll&&(f.wasRoot&&zt(l,o),mr(l.x,f.offset.x),mr(l.y,f.offset.y))}return l}applyTransform(o,s=!1){const l=_e();zt(l,o);for(let d=0;d<this.path.length;d++){const u=this.path[d];!s&&u.options.layoutScroll&&u.scroll&&u!==u.root&&gr(l,{x:-u.scroll.offset.x,y:-u.scroll.offset.y}),Ci(u.latestValues)&&gr(l,u.latestValues)}return Ci(this.latestValues)&&gr(l,this.latestValues),l}removeTransform(o){const s=_e();zt(s,o);for(let l=0;l<this.path.length;l++){const d=this.path[l];if(!d.instance||!Ci(d.latestValues))continue;ru(d.latestValues)&&d.updateSnapshot();const u=_e(),f=d.measurePageBox();zt(u,f),M0(s,d.latestValues,d.snapshot?d.snapshot.layoutBox:void 0,u)}return Ci(this.latestValues)&&M0(s,this.latestValues),s}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Be.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var s;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const d=!!this.resumingFrom||this!==l;if(!(o||d&&this.isSharedProjectionDirty||this.isProjectionDirty||!((s=this.parent)===null||s===void 0)&&s.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:f,layoutId:p}=this.options;if(!(!this.layout||!(f||p))){if(this.resolvedRelativeTargetAt=Be.timestamp,!this.targetDelta&&!this.relativeTarget){const g=this.getClosestProjectingParent();g&&g.layout&&this.animationProgress!==1?(this.relativeParent=g,this.forceRelativeParentToResolveTarget(),this.relativeTarget=_e(),this.relativeTargetOrigin=_e(),Ga(this.relativeTargetOrigin,this.layout.layoutBox,g.layout.layoutBox),zt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=_e(),this.targetWithTransforms=_e()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),Y9(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):zt(this.target,this.layout.layoutBox),wx(this.target,this.targetDelta)):zt(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const g=this.getClosestProjectingParent();g&&!!g.resumingFrom==!!this.resumingFrom&&!g.options.layoutScroll&&g.target&&this.animationProgress!==1?(this.relativeParent=g,this.forceRelativeParentToResolveTarget(),this.relativeTarget=_e(),this.relativeTargetOrigin=_e(),Ga(this.relativeTargetOrigin,this.target,g.target),zt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}ga&&ki.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||ru(this.parent.latestValues)||yx(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var o;const s=this.getLead(),l=!!this.resumingFrom||this!==s;let d=!0;if((this.isProjectionDirty||!((o=this.parent)===null||o===void 0)&&o.isProjectionDirty)&&(d=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(d=!1),this.resolvedRelativeTargetAt===Be.timestamp&&(d=!1),d)return;const{layout:u,layoutId:f}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(u||f))return;zt(this.layoutCorrected,this.layout.layoutBox);const p=this.treeScale.x,g=this.treeScale.y;i8(this.layoutCorrected,this.treeScale,this.path,l),s.layout&&!s.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(s.target=s.layout.layoutBox,s.targetWithTransforms=_e());const{target:x}=s;if(!x){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(G0(this.prevProjectionDelta.x,this.projectionDelta.x),G0(this.prevProjectionDelta.y,this.projectionDelta.y)),Pa(this.projectionDelta,this.layoutCorrected,x,this.latestValues),(this.treeScale.x!==p||this.treeScale.y!==g||!D0(this.projectionDelta.x,this.prevProjectionDelta.x)||!D0(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",x)),ga&&ki.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){var s;if((s=this.options.visualElement)===null||s===void 0||s.scheduleRender(),o){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=hr(),this.projectionDelta=hr(),this.projectionDeltaWithTransform=hr()}setAnimationOrigin(o,s=!1){const l=this.snapshot,d=l?l.latestValues:{},u={...this.latestValues},f=hr();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!s;const p=_e(),g=l?l.source:void 0,x=this.layout?this.layout.source:void 0,y=g!==x,b=this.getStack(),v=!b||b.members.length<=1,h=!!(y&&!v&&this.options.crossfade===!0&&!this.path.some(H8));this.animationProgress=0;let m;this.mixTargetDelta=w=>{const S=w/1e3;$0(f.x,o.x,S),$0(f.y,o.y,S),this.setTargetDelta(f),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Ga(p,this.layout.layoutBox,this.relativeParent.layout.layoutBox),B8(this.relativeTarget,this.relativeTargetOrigin,p,S),m&&S8(this.relativeTarget,m)&&(this.isProjectionDirty=!1),m||(m=_e()),zt(m,this.relativeTarget)),y&&(this.animationValues=u,g8(u,d,this.latestValues,S,h,v)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=S},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Zt(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=ae.update(()=>{as.hasAnimatedSinceResize=!0,this.currentAnimation=P8(0,V0,{...o,onUpdate:s=>{this.mixTargetDelta(s),o.onUpdate&&o.onUpdate(s)},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(V0),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:s,target:l,layout:d,latestValues:u}=o;if(!(!s||!l||!d)){if(this!==o&&this.layout&&d&&zx(this.options.animationType,this.layout.layoutBox,d.layoutBox)){l=this.target||_e();const f=At(this.layout.layoutBox.x);l.x.min=o.target.x.min,l.x.max=l.x.min+f;const p=At(this.layout.layoutBox.y);l.y.min=o.target.y.min,l.y.max=l.y.min+p}zt(s,l),gr(s,u),Pa(this.projectionDeltaWithTransform,this.layoutCorrected,s,u)}}registerSharedNode(o,s){this.sharedNodes.has(o)||this.sharedNodes.set(o,new j8),this.sharedNodes.get(o).add(s);const d=s.options.initialPromotionConfig;s.promote({transition:d?d.transition:void 0,preserveFollowOpacity:d&&d.shouldPreserveFollowOpacity?d.shouldPreserveFollowOpacity(s):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var o;const{layoutId:s}=this.options;return s?((o=this.getStack())===null||o===void 0?void 0:o.lead)||this:this}getPrevLead(){var o;const{layoutId:s}=this.options;return s?(o=this.getStack())===null||o===void 0?void 0:o.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:s,preserveFollowOpacity:l}={}){const d=this.getStack();d&&d.promote(this,l),o&&(this.projectionDelta=void 0,this.needsReset=!0),s&&this.setOptions({transition:s})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetSkewAndRotation(){const{visualElement:o}=this.options;if(!o)return;let s=!1;const{latestValues:l}=o;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(s=!0),!s)return;const d={};l.z&&zc("z",o,d,this.animationValues);for(let u=0;u<Gc.length;u++)zc(`rotate${Gc[u]}`,o,d,this.animationValues),zc(`skew${Gc[u]}`,o,d,this.animationValues);o.render();for(const u in d)o.setStaticValue(u,d[u]),this.animationValues&&(this.animationValues[u]=d[u]);o.scheduleRender()}getProjectionStyles(o){var s,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return G8;const d={visibility:""},u=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,d.opacity="",d.pointerEvents=os(o==null?void 0:o.pointerEvents)||"",d.transform=u?u(this.latestValues,""):"none",d;const f=this.getLead();if(!this.projectionDelta||!this.layout||!f.target){const y={};return this.options.layoutId&&(y.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,y.pointerEvents=os(o==null?void 0:o.pointerEvents)||""),this.hasProjected&&!Ci(this.latestValues)&&(y.transform=u?u({},""):"none",this.hasProjected=!1),y}const p=f.animationValues||f.latestValues;this.applyTransformsToTarget(),d.transform=C8(this.projectionDeltaWithTransform,this.treeScale,p),u&&(d.transform=u(p,d.transform));const{x:g,y:x}=this.projectionDelta;d.transformOrigin=`${g.origin*100}% ${x.origin*100}% 0`,f.animationValues?d.opacity=f===this?(l=(s=p.opacity)!==null&&s!==void 0?s:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:p.opacityExit:d.opacity=f===this?p.opacity!==void 0?p.opacity:"":p.opacityExit!==void 0?p.opacityExit:0;for(const y in qs){if(p[y]===void 0)continue;const{correct:b,applyTo:v}=qs[y],h=d.transform==="none"?p[y]:b(p[y],f);if(v){const m=v.length;for(let w=0;w<m;w++)d[v[w]]=h}else d[y]=h}return this.options.layoutId&&(d.pointerEvents=f===this?os(o==null?void 0:o.pointerEvents)||"":"none"),d}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var s;return(s=o.currentAnimation)===null||s===void 0?void 0:s.stop()}),this.root.nodes.forEach(N0),this.root.sharedNodes.clear()}}}function _8(e){e.updateLayout()}function M8(e){var t;const n=((t=e.resumeFrom)===null||t===void 0?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){const{layoutBox:i,measuredBox:r}=e.layout,{animationType:a}=e.options,o=n.source!==e.layout.source;a==="size"?_t(f=>{const p=o?n.measuredBox[f]:n.layoutBox[f],g=At(p);p.min=i[f].min,p.max=p.min+g}):zx(a,n.layoutBox,i)&&_t(f=>{const p=o?n.measuredBox[f]:n.layoutBox[f],g=At(i[f]);p.max=p.min+g,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[f].max=e.relativeTarget[f].min+g)});const s=hr();Pa(s,i,n.layoutBox);const l=hr();o?Pa(l,e.applyTransform(r,!0),n.measuredBox):Pa(l,i,n.layoutBox);const d=!Ax(s);let u=!1;if(!e.resumeFrom){const f=e.getClosestProjectingParent();if(f&&!f.resumeFrom){const{snapshot:p,layout:g}=f;if(p&&g){const x=_e();Ga(x,n.layoutBox,p.layoutBox);const y=_e();Ga(y,i,g.layoutBox),Ex(x,y)||(u=!0),f.options.layoutRoot&&(e.relativeTarget=y,e.relativeTargetOrigin=x,e.relativeParent=f)}}}e.notifyListeners("didUpdate",{layout:i,snapshot:n,delta:l,layoutDelta:s,hasLayoutChanged:d,hasRelativeTargetChanged:u})}else if(e.isLead()){const{onExitComplete:i}=e.options;i&&i()}e.options.transition=void 0}function L8(e){ga&&ki.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function O8(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function I8(e){e.clearSnapshot()}function N0(e){e.clearMeasurements()}function R8(e){e.isLayoutDirty=!1}function D8(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function F0(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function V8(e){e.resolveTargetDelta()}function N8(e){e.calcProjection()}function F8(e){e.resetSkewAndRotation()}function $8(e){e.removeLeadSnapshot()}function $0(e,t,n){e.translate=Te(t.translate,0,n),e.scale=Te(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function B0(e,t,n,i){e.min=Te(t.min,n.min,i),e.max=Te(t.max,n.max,i)}function B8(e,t,n,i){B0(e.x,t.x,n.x,i),B0(e.y,t.y,n.y,i)}function H8(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const U8={duration:.45,ease:[.4,0,.1,1]},H0=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),U0=H0("applewebkit/")&&!H0("chrome/")?Math.round:Je;function W0(e){e.min=U0(e.min),e.max=U0(e.max)}function W8(e){W0(e.x),W0(e.y)}function zx(e,t,n){return e==="position"||e==="preserve-aspect"&&!q9(R0(t),R0(n),.2)}function q8(e){var t;return e!==e.root&&((t=e.scroll)===null||t===void 0?void 0:t.wasRoot)}const Y8=Gx({attachResizeListener:(e,t)=>Tn(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),_c={current:void 0},_x=Gx({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!_c.current){const e=new Y8({});e.mount(window),e.setOptions({layoutScroll:!0}),_c.current=e}return _c.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),K8={pan:{Feature:c8},drag:{Feature:l8,ProjectionNode:_x,MeasureLayout:Cx}};function q0(e,t){const n=t?"pointerenter":"pointerleave",i=t?"onHoverStart":"onHoverEnd",r=(a,o)=>{if(a.pointerType==="touch"||mx())return;const s=e.getProps();e.animationState&&s.whileHover&&e.animationState.setActive("whileHover",t);const l=s[i];l&&ae.postRender(()=>l(a,o))};return zn(e.current,n,r,{passive:!e.getProps()[i]})}class X8 extends mi{mount(){this.unmount=Gn(q0(this.node,!0),q0(this.node,!1))}unmount(){}}class Q8 extends mi{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Gn(Tn(this.node.current,"focus",()=>this.onFocus()),Tn(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}const Mx=(e,t)=>t?e===t?!0:Mx(e,t.parentElement):!1;function Mc(e,t){if(!t)return;const n=new PointerEvent("pointer"+e);t(n,El(n))}class Z8 extends mi{constructor(){super(...arguments),this.removeStartListeners=Je,this.removeEndListeners=Je,this.removeAccessibleListeners=Je,this.startPointerPress=(t,n)=>{if(this.isPressing)return;this.removeEndListeners();const i=this.node.getProps(),a=zn(window,"pointerup",(s,l)=>{if(!this.checkPressEnd())return;const{onTap:d,onTapCancel:u,globalTapTarget:f}=this.node.getProps(),p=!f&&!Mx(this.node.current,s.target)?u:d;p&&ae.update(()=>p(s,l))},{passive:!(i.onTap||i.onPointerUp)}),o=zn(window,"pointercancel",(s,l)=>this.cancelPress(s,l),{passive:!(i.onTapCancel||i.onPointerCancel)});this.removeEndListeners=Gn(a,o),this.startPress(t,n)},this.startAccessiblePress=()=>{const t=a=>{if(a.key!=="Enter"||this.isPressing)return;const o=s=>{s.key!=="Enter"||!this.checkPressEnd()||Mc("up",(l,d)=>{const{onTap:u}=this.node.getProps();u&&ae.postRender(()=>u(l,d))})};this.removeEndListeners(),this.removeEndListeners=Tn(this.node.current,"keyup",o),Mc("down",(s,l)=>{this.startPress(s,l)})},n=Tn(this.node.current,"keydown",t),i=()=>{this.isPressing&&Mc("cancel",(a,o)=>this.cancelPress(a,o))},r=Tn(this.node.current,"blur",i);this.removeAccessibleListeners=Gn(n,r)}}startPress(t,n){this.isPressing=!0;const{onTapStart:i,whileTap:r}=this.node.getProps();r&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),i&&ae.postRender(()=>i(t,n))}checkPressEnd(){return this.removeEndListeners(),this.isPressing=!1,this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!mx()}cancelPress(t,n){if(!this.checkPressEnd())return;const{onTapCancel:i}=this.node.getProps();i&&ae.postRender(()=>i(t,n))}mount(){const t=this.node.getProps(),n=zn(t.globalTapTarget?window:this.node.current,"pointerdown",this.startPointerPress,{passive:!(t.onTapStart||t.onPointerStart)}),i=Tn(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=Gn(n,i)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}const ou=new WeakMap,Lc=new WeakMap,J8=e=>{const t=ou.get(e.target);t&&t(e)},e3=e=>{e.forEach(J8)};function t3({root:e,...t}){const n=e||document;Lc.has(n)||Lc.set(n,{});const i=Lc.get(n),r=JSON.stringify(t);return i[r]||(i[r]=new IntersectionObserver(e3,{root:e,...t})),i[r]}function n3(e,t,n){const i=t3(t);return ou.set(e,n),i.observe(e),()=>{ou.delete(e),i.unobserve(e)}}const i3={some:0,all:1};class r3 extends mi{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:i,amount:r="some",once:a}=t,o={root:n?n.current:void 0,rootMargin:i,threshold:typeof r=="number"?r:i3[r]},s=l=>{const{isIntersecting:d}=l;if(this.isInView===d||(this.isInView=d,a&&!d&&this.hasEnteredView))return;d&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",d);const{onViewportEnter:u,onViewportLeave:f}=this.node.getProps(),p=d?u:f;p&&p(l)};return n3(this.node.current,o,s)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(a3(t,n))&&this.startObserver()}unmount(){}}function a3({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const o3={inView:{Feature:r3},tap:{Feature:Z8},focus:{Feature:Q8},hover:{Feature:X8}},s3={layout:{ProjectionNode:_x,MeasureLayout:Cx}},Gl=j.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"}),zl=j.createContext({}),Xf=typeof window<"u",_l=Xf?j.useLayoutEffect:j.useEffect,Lx=j.createContext({strict:!1});function l3(e,t,n,i,r){var a,o;const{visualElement:s}=j.useContext(zl),l=j.useContext(Lx),d=j.useContext(Pl),u=j.useContext(Gl).reducedMotion,f=j.useRef();i=i||l.renderer,!f.current&&i&&(f.current=i(e,{visualState:t,parent:s,props:n,presenceContext:d,blockInitialAnimation:d?d.initial===!1:!1,reducedMotionConfig:u}));const p=f.current,g=j.useContext(jx);p&&!p.projection&&r&&(p.type==="html"||p.type==="svg")&&c3(f.current,n,r,g);const x=j.useRef(!1);j.useInsertionEffect(()=>{p&&x.current&&p.update(n,d)});const y=n[ox],b=j.useRef(!!y&&!(!((a=window.MotionHandoffIsComplete)===null||a===void 0)&&a.call(window,y))&&((o=window.MotionHasOptimisedAnimation)===null||o===void 0?void 0:o.call(window,y)));return _l(()=>{p&&(x.current=!0,window.MotionIsMounted=!0,p.updateFeatures(),Kf.render(p.render),b.current&&p.animationState&&p.animationState.animateChanges())}),j.useEffect(()=>{p&&(!b.current&&p.animationState&&p.animationState.animateChanges(),b.current&&(queueMicrotask(()=>{var v;(v=window.MotionHandoffMarkAsComplete)===null||v===void 0||v.call(window,y)}),b.current=!1))}),p}function c3(e,t,n,i){const{layoutId:r,layout:a,drag:o,dragConstraints:s,layoutScroll:l,layoutRoot:d}=t;e.projection=new n(e.latestValues,t["data-framer-portal-id"]?void 0:Ox(e.parent)),e.projection.setOptions({layoutId:r,layout:a,alwaysMeasureLayout:!!o||s&&pr(s),visualElement:e,animationType:typeof a=="string"?a:"both",initialPromotionConfig:i,layoutScroll:l,layoutRoot:d})}function Ox(e){if(e)return e.options.allowProjection!==!1?e.projection:Ox(e.parent)}function d3(e,t,n){return j.useCallback(i=>{i&&e.mount&&e.mount(i),t&&(i?t.mount(i):t.unmount()),n&&(typeof n=="function"?n(i):pr(n)&&(n.current=i))},[t])}function Ml(e){return kl(e.animate)||Tf.some(t=>Ja(e[t]))}function Ix(e){return!!(Ml(e)||e.variants)}function u3(e,t){if(Ml(e)){const{initial:n,animate:i}=e;return{initial:n===!1||Ja(n)?n:void 0,animate:Ja(i)?i:void 0}}return e.inherit!==!1?t:{}}function f3(e){const{initial:t,animate:n}=u3(e,j.useContext(zl));return j.useMemo(()=>({initial:t,animate:n}),[Y0(t),Y0(n)])}function Y0(e){return Array.isArray(e)?e.join(" "):e}const K0={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Or={};for(const e in K0)Or[e]={isEnabled:t=>K0[e].some(n=>!!t[n])};function p3(e){for(const t in e)Or[t]={...Or[t],...e[t]}}const h3=Symbol.for("motionComponentSymbol");function m3({preloadedFeatures:e,createVisualElement:t,useRender:n,useVisualState:i,Component:r}){e&&p3(e);function a(s,l){let d;const u={...j.useContext(Gl),...s,layoutId:g3(s)},{isStatic:f}=u,p=f3(s),g=i(s,f);if(!f&&Xf){v3();const x=x3(u);d=x.MeasureLayout,p.visualElement=l3(r,g,u,t,x.ProjectionNode)}return c.jsxs(zl.Provider,{value:p,children:[d&&p.visualElement?c.jsx(d,{visualElement:p.visualElement,...u}):null,n(r,s,d3(g,p.visualElement,l),g,f,p.visualElement)]})}const o=j.forwardRef(a);return o[h3]=r,o}function g3({layoutId:e}){const t=j.useContext(Yf).id;return t&&e!==void 0?t+"-"+e:e}function v3(e,t){j.useContext(Lx).strict}function x3(e){const{drag:t,layout:n}=Or;if(!t&&!n)return{};const i={...t,...n};return{MeasureLayout:t!=null&&t.isEnabled(e)||n!=null&&n.isEnabled(e)?i.MeasureLayout:void 0,ProjectionNode:i.ProjectionNode}}const y3=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Qf(e){return typeof e!="string"||e.includes("-")?!1:!!(y3.indexOf(e)>-1||/[A-Z]/u.test(e))}function Rx(e,{style:t,vars:n},i,r){Object.assign(e.style,t,r&&r.getProjectionStyles(i));for(const a in n)e.style.setProperty(a,n[a])}const Dx=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function Vx(e,t,n,i){Rx(e,t,void 0,i);for(const r in t.attrs)e.setAttribute(Dx.has(r)?r:qf(r),t.attrs[r])}function Nx(e,{layout:t,layoutId:n}){return Ki.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!qs[e]||e==="opacity")}function Zf(e,t,n){var i;const{style:r}=e,a={};for(const o in r)(at(r[o])||t.style&&at(t.style[o])||Nx(o,e)||((i=n==null?void 0:n.getValue(o))===null||i===void 0?void 0:i.liveStyle)!==void 0)&&(a[o]=r[o]);return a}function Fx(e,t,n){const i=Zf(e,t,n);for(const r in e)if(at(e[r])||at(t[r])){const a=fo.indexOf(r)!==-1?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r;i[a]=e[r]}return i}function Wr(e){const t=j.useRef(null);return t.current===null&&(t.current=e()),t.current}function w3({scrapeMotionValuesFromProps:e,createRenderState:t,onMount:n},i,r,a){const o={latestValues:b3(i,r,a,e),renderState:t()};return n&&(o.mount=s=>n(i,s,o)),o}const $x=e=>(t,n)=>{const i=j.useContext(zl),r=j.useContext(Pl),a=()=>w3(e,t,i,r);return n?a():Wr(a)};function b3(e,t,n,i){const r={},a=i(e,{});for(const p in a)r[p]=os(a[p]);let{initial:o,animate:s}=e;const l=Ml(e),d=Ix(e);t&&d&&!l&&e.inherit!==!1&&(o===void 0&&(o=t.initial),s===void 0&&(s=t.animate));let u=n?n.initial===!1:!1;u=u||o===!1;const f=u?s:o;if(f&&typeof f!="boolean"&&!kl(f)){const p=Array.isArray(f)?f:[f];for(let g=0;g<p.length;g++){const x=Cf(e,p[g]);if(x){const{transitionEnd:y,transition:b,...v}=x;for(const h in v){let m=v[h];if(Array.isArray(m)){const w=u?m.length-1:0;m=m[w]}m!==null&&(r[h]=m)}for(const h in y)r[h]=y[h]}}}return r}const Jf=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),Bx=()=>({...Jf(),attrs:{}}),Hx=(e,t)=>t&&typeof e=="number"?t.transform(e):e,S3={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},j3=fo.length;function C3(e,t,n){let i="",r=!0;for(let a=0;a<j3;a++){const o=fo[a],s=e[o];if(s===void 0)continue;let l=!0;if(typeof s=="number"?l=s===(o.startsWith("scale")?1:0):l=parseFloat(s)===0,!l||n){const d=Hx(s,Lf[o]);if(!l){r=!1;const u=S3[o]||o;i+=`${u}(${d}) `}n&&(t[o]=d)}}return i=i.trim(),n?i=n(t,r?"":i):r&&(i="none"),i}function ep(e,t,n){const{style:i,vars:r,transformOrigin:a}=e;let o=!1,s=!1;for(const l in t){const d=t[l];if(Ki.has(l)){o=!0;continue}else if(Iv(l)){r[l]=d;continue}else{const u=Hx(d,Lf[l]);l.startsWith("origin")?(s=!0,a[l]=u):i[l]=u}}if(t.transform||(o||n?i.transform=C3(t,e.transform,n):i.transform&&(i.transform="none")),s){const{originX:l="50%",originY:d="50%",originZ:u=0}=a;i.transformOrigin=`${l} ${d} ${u}`}}function X0(e,t,n){return typeof e=="string"?e:W.transform(t+n*e)}function k3(e,t,n){const i=X0(t,e.x,e.width),r=X0(n,e.y,e.height);return`${i} ${r}`}const T3={offset:"stroke-dashoffset",array:"stroke-dasharray"},A3={offset:"strokeDashoffset",array:"strokeDasharray"};function E3(e,t,n=1,i=0,r=!0){e.pathLength=1;const a=r?T3:A3;e[a.offset]=W.transform(-i);const o=W.transform(t),s=W.transform(n);e[a.array]=`${o} ${s}`}function tp(e,{attrX:t,attrY:n,attrScale:i,originX:r,originY:a,pathLength:o,pathSpacing:s=1,pathOffset:l=0,...d},u,f){if(ep(e,d,f),u){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:p,style:g,dimensions:x}=e;p.transform&&(x&&(g.transform=p.transform),delete p.transform),x&&(r!==void 0||a!==void 0||g.transform)&&(g.transformOrigin=k3(x,r!==void 0?r:.5,a!==void 0?a:.5)),t!==void 0&&(p.x=t),n!==void 0&&(p.y=n),i!==void 0&&(p.scale=i),o!==void 0&&E3(p,o,s,l,!1)}const np=e=>typeof e=="string"&&e.toLowerCase()==="svg",P3={useVisualState:$x({scrapeMotionValuesFromProps:Fx,createRenderState:Bx,onMount:(e,t,{renderState:n,latestValues:i})=>{ae.read(()=>{try{n.dimensions=typeof t.getBBox=="function"?t.getBBox():t.getBoundingClientRect()}catch{n.dimensions={x:0,y:0,width:0,height:0}}}),ae.render(()=>{tp(n,i,np(t.tagName),e.transformTemplate),Vx(t,n)})}})},G3={useVisualState:$x({scrapeMotionValuesFromProps:Zf,createRenderState:Jf})};function Ux(e,t,n){for(const i in t)!at(t[i])&&!Nx(i,n)&&(e[i]=t[i])}function z3({transformTemplate:e},t){return j.useMemo(()=>{const n=Jf();return ep(n,t,e),Object.assign({},n.vars,n.style)},[t])}function _3(e,t){const n=e.style||{},i={};return Ux(i,n,e),Object.assign(i,z3(e,t)),i}function M3(e,t){const n={},i=_3(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=i,n}const L3=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Ys(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||L3.has(e)}let Wx=e=>!Ys(e);function O3(e){e&&(Wx=t=>t.startsWith("on")?!Ys(t):e(t))}try{O3(require("@emotion/is-prop-valid").default)}catch{}function I3(e,t,n){const i={};for(const r in e)r==="values"&&typeof e.values=="object"||(Wx(r)||n===!0&&Ys(r)||!t&&!Ys(r)||e.draggable&&r.startsWith("onDrag"))&&(i[r]=e[r]);return i}function R3(e,t,n,i){const r=j.useMemo(()=>{const a=Bx();return tp(a,t,np(i),e.transformTemplate),{...a.attrs,style:{...a.style}}},[t]);if(e.style){const a={};Ux(a,e.style,e),r.style={...a,...r.style}}return r}function D3(e=!1){return(n,i,r,{latestValues:a},o)=>{const l=(Qf(n)?R3:M3)(i,a,o,n),d=I3(i,typeof n=="string",e),u=n!==j.Fragment?{...d,...l,ref:r}:{},{children:f}=i,p=j.useMemo(()=>at(f)?f.get():f,[f]);return j.createElement(n,{...u,children:p})}}function V3(e,t){return function(i,{forwardMotionProps:r}={forwardMotionProps:!1}){const o={...Qf(i)?P3:G3,preloadedFeatures:e,useRender:D3(r),createVisualElement:t,Component:i};return m3(o)}}const su={current:null},qx={current:!1};function N3(){if(qx.current=!0,!!Xf)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>su.current=e.matches;e.addListener(t),t()}else su.current=!1}function F3(e,t,n){for(const i in t){const r=t[i],a=n[i];if(at(r))e.addValue(i,r);else if(at(a))e.addValue(i,ln(r,{owner:e}));else if(a!==r)if(e.hasValue(i)){const o=e.getValue(i);o.liveStyle===!0?o.jump(r):o.hasAnimated||o.set(r)}else{const o=e.getStaticValue(i);e.addValue(i,ln(o!==void 0?o:r,{owner:e}))}}for(const i in n)t[i]===void 0&&e.removeValue(i);return t}const Q0=new WeakMap,$3=[...Vv,it,ui],B3=e=>$3.find(Dv(e)),Z0=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class H3{scrapeMotionValuesFromProps(t,n,i){return{}}constructor({parent:t,props:n,presenceContext:i,reducedMotionConfig:r,blockInitialAnimation:a,visualState:o},s={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=zf,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const p=pn.now();this.renderScheduledAt<p&&(this.renderScheduledAt=p,ae.render(this.render,!1,!0))};const{latestValues:l,renderState:d}=o;this.latestValues=l,this.baseTarget={...l},this.initialValues=n.initial?{...l}:{},this.renderState=d,this.parent=t,this.props=n,this.presenceContext=i,this.depth=t?t.depth+1:0,this.reducedMotionConfig=r,this.options=s,this.blockInitialAnimation=!!a,this.isControllingVariants=Ml(n),this.isVariantNode=Ix(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:u,...f}=this.scrapeMotionValuesFromProps(n,{},this);for(const p in f){const g=f[p];l[p]!==void 0&&at(g)&&g.set(l[p],!1)}}mount(t){this.current=t,Q0.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,i)=>this.bindToMotionValue(i,n)),qx.current||N3(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:su.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){Q0.delete(this.current),this.projection&&this.projection.unmount(),Zt(this.notifyUpdate),Zt(this.render),this.valueSubscriptions.forEach(t=>t()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const t in this.events)this.events[t].clear();for(const t in this.features){const n=this.features[t];n&&(n.unmount(),n.isMounted=!1)}this.current=null}bindToMotionValue(t,n){this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)();const i=Ki.has(t),r=n.on("change",s=>{this.latestValues[t]=s,this.props.onUpdate&&ae.preRender(this.notifyUpdate),i&&this.projection&&(this.projection.isTransformDirty=!0)}),a=n.on("renderRequest",this.scheduleRender);let o;window.MotionCheckAppearSync&&(o=window.MotionCheckAppearSync(this,t,n)),this.valueSubscriptions.set(t,()=>{r(),a(),o&&o(),n.owner&&n.stop()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in Or){const n=Or[t];if(!n)continue;const{isEnabled:i,Feature:r}=n;if(!this.features[t]&&r&&i(this.props)&&(this.features[t]=new r(this)),this.features[t]){const a=this.features[t];a.isMounted?a.update():(a.mount(),a.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):_e()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let i=0;i<Z0.length;i++){const r=Z0[i];this.propEventSubscriptions[r]&&(this.propEventSubscriptions[r](),delete this.propEventSubscriptions[r]);const a="on"+r,o=t[a];o&&(this.propEventSubscriptions[r]=this.on(r,o))}this.prevMotionValues=F3(this,this.scrapeMotionValuesFromProps(t,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){const i=this.values.get(t);n!==i&&(i&&this.removeValue(t),this.bindToMotionValue(t,n),this.values.set(t,n),this.latestValues[t]=n.get())}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let i=this.values.get(t);return i===void 0&&n!==void 0&&(i=ln(n===null?void 0:n,{owner:this}),this.addValue(t,i)),i}readValue(t,n){var i;let r=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:(i=this.getBaseTargetFromProps(this.props,t))!==null&&i!==void 0?i:this.readValueFromInstance(this.current,t,this.options);return r!=null&&(typeof r=="string"&&(Lv(r)||Mv(r))?r=parseFloat(r):!B3(r)&&ui.test(n)&&(r=qv(t,n)),this.setBaseTarget(t,at(r)?r.get():r)),at(r)?r.get():r}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var n;const{initial:i}=this.props;let r;if(typeof i=="string"||typeof i=="object"){const o=Cf(this.props,i,(n=this.presenceContext)===null||n===void 0?void 0:n.custom);o&&(r=o[t])}if(i&&r!==void 0)return r;const a=this.getBaseTargetFromProps(this.props,t);return a!==void 0&&!at(a)?a:this.initialValues[t]!==void 0&&r===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new Wf),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}}class Yx extends H3{constructor(){super(...arguments),this.KeyframeResolver=Yv}sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){return t.style?t.style[n]:void 0}removeValueFromRenderState(t,{vars:n,style:i}){delete n[t],delete i[t]}}function U3(e){return window.getComputedStyle(e)}class W3 extends Yx{constructor(){super(...arguments),this.type="html",this.renderInstance=Rx}readValueFromInstance(t,n){if(Ki.has(n)){const i=Of(n);return i&&i.default||0}else{const i=U3(t),r=(Iv(n)?i.getPropertyValue(n):i[n])||0;return typeof r=="string"?r.trim():r}}measureInstanceViewportBox(t,{transformPagePoint:n}){return bx(t,n)}build(t,n,i){ep(t,n,i.transformTemplate)}scrapeMotionValuesFromProps(t,n,i){return Zf(t,n,i)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;at(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}class q3 extends Yx{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=_e}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(Ki.has(n)){const i=Of(n);return i&&i.default||0}return n=Dx.has(n)?n:qf(n),t.getAttribute(n)}scrapeMotionValuesFromProps(t,n,i){return Fx(t,n,i)}build(t,n,i){tp(t,n,this.isSVGTag,i.transformTemplate)}renderInstance(t,n,i,r){Vx(t,n,i,r)}mount(t){this.isSVGTag=np(t.tagName),super.mount(t)}}const Y3=(e,t)=>Qf(e)?new q3(t):new W3(t,{allowProjection:e!==j.Fragment}),K3=V3({...D9,...o3,...K8,...s3},Y3),Me=z4(K3);class X3 extends j.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent){const i=this.props.sizeRef.current;i.height=n.offsetHeight||0,i.width=n.offsetWidth||0,i.top=n.offsetTop,i.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function Q3({children:e,isPresent:t}){const n=j.useId(),i=j.useRef(null),r=j.useRef({width:0,height:0,top:0,left:0}),{nonce:a}=j.useContext(Gl);return j.useInsertionEffect(()=>{const{width:o,height:s,top:l,left:d}=r.current;if(t||!i.current||!o||!s)return;i.current.dataset.motionPopId=n;const u=document.createElement("style");return a&&(u.nonce=a),document.head.appendChild(u),u.sheet&&u.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${s}px !important;
            top: ${l}px !important;
            left: ${d}px !important;
          }
        `),()=>{document.head.removeChild(u)}},[t]),c.jsx(X3,{isPresent:t,childRef:i,sizeRef:r,children:j.cloneElement(e,{ref:i})})}const Z3=({children:e,initial:t,isPresent:n,onExitComplete:i,custom:r,presenceAffectsLayout:a,mode:o})=>{const s=Wr(J3),l=j.useId(),d=j.useCallback(f=>{s.set(f,!0);for(const p of s.values())if(!p)return;i&&i()},[s,i]),u=j.useMemo(()=>({id:l,initial:t,isPresent:n,custom:r,onExitComplete:d,register:f=>(s.set(f,!1),()=>s.delete(f))}),a?[Math.random(),d]:[n,d]);return j.useMemo(()=>{s.forEach((f,p)=>s.set(p,!1))},[n]),j.useEffect(()=>{!n&&!s.size&&i&&i()},[n]),o==="popLayout"&&(e=c.jsx(Q3,{isPresent:n,children:e})),c.jsx(Pl.Provider,{value:u,children:e})};function J3(){return new Map}const Vo=e=>e.key||"";function J0(e){const t=[];return j.Children.forEach(e,n=>{j.isValidElement(n)&&t.push(n)}),t}const e6=({children:e,exitBeforeEnter:t,custom:n,initial:i=!0,onExitComplete:r,presenceAffectsLayout:a=!0,mode:o="sync"})=>{const s=j.useMemo(()=>J0(e),[e]),l=s.map(Vo),d=j.useRef(!0),u=j.useRef(s),f=Wr(()=>new Map),[p,g]=j.useState(s),[x,y]=j.useState(s);_l(()=>{d.current=!1,u.current=s;for(let h=0;h<x.length;h++){const m=Vo(x[h]);l.includes(m)?f.delete(m):f.get(m)!==!0&&f.set(m,!1)}},[x,l.length,l.join("-")]);const b=[];if(s!==p){let h=[...s];for(let m=0;m<x.length;m++){const w=x[m],S=Vo(w);l.includes(S)||(h.splice(m,0,w),b.push(w))}o==="wait"&&b.length&&(h=b),y(J0(h)),g(s);return}const{forceRender:v}=j.useContext(Yf);return c.jsx(c.Fragment,{children:x.map(h=>{const m=Vo(h),w=s===x||l.includes(m),S=()=>{if(f.has(m))f.set(m,!0);else return;let C=!0;f.forEach(A=>{A||(C=!1)}),C&&(v==null||v(),y(u.current),r&&r())};return c.jsx(Z3,{isPresent:w,initial:!d.current||i?void 0:!1,custom:w?void 0:n,presenceAffectsLayout:a,mode:o,onExitComplete:w?void 0:S,children:h},m)})})};function t6(e){const t=Wr(()=>ln(e)),{isStatic:n}=j.useContext(Gl);if(n){const[,i]=j.useState(e);j.useEffect(()=>t.on("change",i),[])}return t}function Kx(e,t){const n=t6(t()),i=()=>n.set(t());return i(),_l(()=>{const r=()=>ae.preRender(i,!1,!0),a=e.map(o=>o.on("change",r));return()=>{a.forEach(o=>o()),Zt(i)}}),n}const n6=e=>e&&typeof e=="object"&&e.mix,i6=e=>n6(e)?e.mix:void 0;function r6(...e){const t=!Array.isArray(e[0]),n=t?0:-1,i=e[0+n],r=e[1+n],a=e[2+n],o=e[3+n],s=Nf(r,a,{mixer:i6(a[0]),...o});return t?s(i):s}function a6(e){Ea.current=[],e();const t=Kx(Ea.current,e);return Ea.current=void 0,t}function No(e,t,n,i){if(typeof e=="function")return a6(e);const r=typeof t=="function"?t:r6(t,n,i);return Array.isArray(e)?em(e,r):em([e],([a])=>r(a))}function em(e,t){const n=Wr(()=>[]);return Kx(e,()=>{n.length=0;const i=e.length;for(let r=0;r<i;r++)n[r]=e[r].get();return t(n)})}function Xx(e,t,n){return typeof e=="string"?e=document.querySelectorAll(e):e instanceof Element&&(e=[e]),Array.from(e||[])}const ss=new WeakMap;let $n;function o6(e,t){if(t){const{inlineSize:n,blockSize:i}=t[0];return{width:n,height:i}}else return e instanceof SVGElement&&"getBBox"in e?e.getBBox():{width:e.offsetWidth,height:e.offsetHeight}}function s6({target:e,contentRect:t,borderBoxSize:n}){var i;(i=ss.get(e))===null||i===void 0||i.forEach(r=>{r({target:e,contentSize:t,get size(){return o6(e,n)}})})}function l6(e){e.forEach(s6)}function c6(){typeof ResizeObserver>"u"||($n=new ResizeObserver(l6))}function d6(e,t){$n||c6();const n=Xx(e);return n.forEach(i=>{let r=ss.get(i);r||(r=new Set,ss.set(i,r)),r.add(t),$n==null||$n.observe(i)}),()=>{n.forEach(i=>{const r=ss.get(i);r==null||r.delete(t),r!=null&&r.size||$n==null||$n.unobserve(i)})}}const ls=new Set;let za;function u6(){za=()=>{const e={width:window.innerWidth,height:window.innerHeight},t={target:window,size:e,contentSize:e};ls.forEach(n=>n(t))},window.addEventListener("resize",za)}function f6(e){return ls.add(e),za||u6(),()=>{ls.delete(e),!ls.size&&za&&(za=void 0)}}function p6(e,t){return typeof e=="function"?f6(e):d6(e,t)}const h6=50,tm=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),m6=()=>({time:0,x:tm(),y:tm()}),g6={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function nm(e,t,n,i){const r=n[t],{length:a,position:o}=g6[t],s=r.current,l=n.time;r.current=e[`scroll${o}`],r.scrollLength=e[`scroll${a}`]-e[`client${a}`],r.offset.length=0,r.offset[0]=0,r.offset[1]=r.scrollLength,r.progress=Fi(0,r.scrollLength,r.current);const d=i-l;r.velocity=d>h6?0:Rf(r.current-s,d)}function v6(e,t,n){nm(e,"x",t,n),nm(e,"y",t,n),t.time=n}function x6(e,t){const n={x:0,y:0};let i=e;for(;i&&i!==t;)if(i instanceof HTMLElement)n.x+=i.offsetLeft,n.y+=i.offsetTop,i=i.offsetParent;else if(i.tagName==="svg"){const r=i.getBoundingClientRect();i=i.parentElement;const a=i.getBoundingClientRect();n.x+=r.left-a.left,n.y+=r.top-a.top}else if(i instanceof SVGGraphicsElement){const{x:r,y:a}=i.getBBox();n.x+=r,n.y+=a;let o=null,s=i.parentNode;for(;!o;)s.tagName==="svg"&&(o=s),s=i.parentNode;i=o}else break;return n}const y6={Enter:[[0,1],[1,1]],Exit:[[0,0],[1,0]],Any:[[1,0],[0,1]],All:[[0,0],[1,1]]},lu={start:0,center:.5,end:1};function im(e,t,n=0){let i=0;if(e in lu&&(e=lu[e]),typeof e=="string"){const r=parseFloat(e);e.endsWith("px")?i=r:e.endsWith("%")?e=r/100:e.endsWith("vw")?i=r/100*document.documentElement.clientWidth:e.endsWith("vh")?i=r/100*document.documentElement.clientHeight:e=r}return typeof e=="number"&&(i=t*e),n+i}const w6=[0,0];function b6(e,t,n,i){let r=Array.isArray(e)?e:w6,a=0,o=0;return typeof e=="number"?r=[e,e]:typeof e=="string"&&(e=e.trim(),e.includes(" ")?r=e.split(" "):r=[e,lu[e]?e:"0"]),a=im(r[0],n,i),o=im(r[1],t),a-o}const S6={x:0,y:0};function j6(e){return"getBBox"in e&&e.tagName!=="svg"?e.getBBox():{width:e.clientWidth,height:e.clientHeight}}function C6(e,t,n){const{offset:i=y6.All}=n,{target:r=e,axis:a="y"}=n,o=a==="y"?"height":"width",s=r!==e?x6(r,e):S6,l=r===e?{width:e.scrollWidth,height:e.scrollHeight}:j6(r),d={width:e.clientWidth,height:e.clientHeight};t[a].offset.length=0;let u=!t[a].interpolate;const f=i.length;for(let p=0;p<f;p++){const g=b6(i[p],d[o],l[o],s[a]);!u&&g!==t[a].interpolatorOffsets[p]&&(u=!0),t[a].offset[p]=g}u&&(t[a].interpolate=Nf(t[a].offset,tx(i)),t[a].interpolatorOffsets=[...t[a].offset]),t[a].progress=t[a].interpolate(t[a].current)}function k6(e,t=e,n){if(n.x.targetOffset=0,n.y.targetOffset=0,t!==e){let i=t;for(;i&&i!==e;)n.x.targetOffset+=i.offsetLeft,n.y.targetOffset+=i.offsetTop,i=i.offsetParent}n.x.targetLength=t===e?t.scrollWidth:t.clientWidth,n.y.targetLength=t===e?t.scrollHeight:t.clientHeight,n.x.containerLength=e.clientWidth,n.y.containerLength=e.clientHeight}function T6(e,t,n,i={}){return{measure:()=>k6(e,i.target,n),update:r=>{v6(e,n,r),(i.offset||i.target)&&C6(e,n,i)},notify:()=>t(n)}}const sa=new WeakMap,rm=new WeakMap,Oc=new WeakMap,am=e=>e===document.documentElement?window:e;function ip(e,{container:t=document.documentElement,...n}={}){let i=Oc.get(t);i||(i=new Set,Oc.set(t,i));const r=m6(),a=T6(t,e,r,n);if(i.add(a),!sa.has(t)){const s=()=>{for(const p of i)p.measure()},l=()=>{for(const p of i)p.update(Be.timestamp)},d=()=>{for(const p of i)p.notify()},u=()=>{ae.read(s,!1,!0),ae.read(l,!1,!0),ae.update(d,!1,!0)};sa.set(t,u);const f=am(t);window.addEventListener("resize",u,{passive:!0}),t!==document.documentElement&&rm.set(t,p6(t,u)),f.addEventListener("scroll",u,{passive:!0})}const o=sa.get(t);return ae.read(o,!1,!0),()=>{var s;Zt(o);const l=Oc.get(t);if(!l||(l.delete(a),l.size))return;const d=sa.get(t);sa.delete(t),d&&(am(t).removeEventListener("scroll",d),(s=rm.get(t))===null||s===void 0||s(),window.removeEventListener("resize",d))}}function Qx(e,t){let n;const i=()=>{const{currentTime:r}=t,o=(r===null?0:r.value)/100;n!==o&&e(o),n=o};return ae.update(i,!0),()=>Zt(i)}function A6({source:e,container:t,axis:n="y"}){e&&(t=e);const i={value:0},r=ip(a=>{i.value=a[n].progress*100},{container:t,axis:n});return{currentTime:i,cancel:r}}const Ic=new Map;function Zx({source:e,container:t=document.documentElement,axis:n="y"}={}){e&&(t=e),Ic.has(t)||Ic.set(t,{});const i=Ic.get(t);return i[n]||(i[n]=ax()?new ScrollTimeline({source:t,axis:n}):A6({source:t,axis:n})),i[n]}function E6(e){return e.length===2}function Jx(e){return e&&(e.target||e.offset)}function P6(e,t){return E6(e)||Jx(t)?ip(n=>{e(n[t.axis].progress,n)},t):Qx(e,Zx(t))}function G6(e,t){if(Jx(t))return e.pause(),ip(n=>{e.time=e.duration*n[t.axis].progress},t);{const n=Zx(t);return e.attachTimeline(n,i=>(i.pause(),Qx(r=>{i.time=i.duration*r},n)))}}function z6(e,{axis:t="y",...n}={}){const i={axis:t,...n};return typeof e=="function"?P6(e,i):G6(e,i)}function om(e,t){U4(!!(!t||t.current))}const _6=()=>({scrollX:ln(0),scrollY:ln(0),scrollXProgress:ln(0),scrollYProgress:ln(0)});function M6({container:e,target:t,layoutEffect:n=!0,...i}={}){const r=Wr(_6);return(n?_l:j.useEffect)(()=>(om("target",t),om("container",e),z6((o,{x:s,y:l})=>{r.scrollX.set(s.current),r.scrollXProgress.set(s.progress),r.scrollY.set(l.current),r.scrollYProgress.set(l.progress)},{...i,container:(e==null?void 0:e.current)||void 0,target:(t==null?void 0:t.current)||void 0})),[e,t,JSON.stringify(i.offset)]),r}const L6={some:0,all:1};function O6(e,t,{root:n,margin:i,amount:r="some"}={}){const a=Xx(e),o=new WeakMap,s=d=>{d.forEach(u=>{const f=o.get(u.target);if(u.isIntersecting!==!!f)if(u.isIntersecting){const p=t(u);typeof p=="function"?o.set(u.target,p):l.unobserve(u.target)}else f&&(f(u),o.delete(u.target))})},l=new IntersectionObserver(s,{root:n,rootMargin:i,threshold:typeof r=="number"?r:L6[r]});return a.forEach(d=>l.observe(d)),()=>l.disconnect()}function I6(e,{root:t,margin:n,amount:i,once:r=!1}={}){const[a,o]=j.useState(!1);return j.useEffect(()=>{if(!e.current||r&&a)return;const s=()=>(o(!0),r?void 0:()=>o(!1)),l={root:t&&t.current||void 0,margin:n,amount:i};return O6(e.current,s,l)},[t,e,n,r,i]),a}var ey={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},sm=ee.createContext&&ee.createContext(ey),R6=["attr","size","title"];function D6(e,t){if(e==null)return{};var n=V6(e,t),i,r;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)i=a[r],!(t.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}function V6(e,t){if(e==null)return{};var n={};for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){if(t.indexOf(i)>=0)continue;n[i]=e[i]}return n}function Ks(){return Ks=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},Ks.apply(this,arguments)}function lm(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,i)}return n}function Xs(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?lm(Object(n),!0).forEach(function(i){N6(e,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):lm(Object(n)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))})}return e}function N6(e,t,n){return t=F6(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function F6(e){var t=$6(e,"string");return typeof t=="symbol"?t:t+""}function $6(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var i=n.call(e,t||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function ty(e){return e&&e.map((t,n)=>ee.createElement(t.tag,Xs({key:n},t.attr),ty(t.child)))}function Q(e){return t=>ee.createElement(B6,Ks({attr:Xs({},e.attr)},t),ty(e.child))}function B6(e){var t=n=>{var{attr:i,size:r,title:a}=e,o=D6(e,R6),s=r||n.size||"1em",l;return n.className&&(l=n.className),e.className&&(l=(l?l+" ":"")+e.className),ee.createElement("svg",Ks({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,i,o,{className:l,style:Xs(Xs({color:e.color||n.color},n.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),a&&ee.createElement("title",null,a),e.children)};return sm!==void 0?ee.createElement(sm.Consumer,null,n=>t(n)):t(ey)}function H6(e){return Q({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"},child:[]}]})(e)}function cm(e){return Q({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M12.971 352h32.394C67.172 454.735 181.944 512 288 512c106.229 0 220.853-57.38 242.635-160h32.394c10.691 0 16.045-12.926 8.485-20.485l-67.029-67.029c-4.686-4.686-12.284-4.686-16.971 0l-67.029 67.029c-7.56 7.56-2.206 20.485 8.485 20.485h35.146c-20.29 54.317-84.963 86.588-144.117 94.015V256h52c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-52v-5.47c37.281-13.178 63.995-48.725 64-90.518C384.005 43.772 341.605.738 289.37.01 235.723-.739 192 42.525 192 96c0 41.798 26.716 77.35 64 90.53V192h-52c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h52v190.015c-58.936-7.399-123.82-39.679-144.117-94.015h35.146c10.691 0 16.045-12.926 8.485-20.485l-67.029-67.029c-4.686-4.686-12.284-4.686-16.971 0L4.485 331.515C-3.074 339.074 2.28 352 12.971 352zM288 64c17.645 0 32 14.355 32 32s-14.355 32-32 32-32-14.355-32-32 14.355-32 32-32z"},child:[]}]})(e)}function rp(e){return Q({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"},child:[]}]})(e)}function Ae(e){return Q({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M32,384a95.4,95.4,0,0,0,32,71.09V496a16,16,0,0,0,16,16h32a16,16,0,0,0,16-16V480H384v16a16,16,0,0,0,16,16h32a16,16,0,0,0,16-16V455.09A95.4,95.4,0,0,0,480,384V336H32ZM496,256H80V69.25a21.26,21.26,0,0,1,36.28-15l19.27,19.26c-13.13,29.88-7.61,59.11,8.62,79.73l-.17.17A16,16,0,0,0,144,176l11.31,11.31a16,16,0,0,0,22.63,0L283.31,81.94a16,16,0,0,0,0-22.63L272,48a16,16,0,0,0-22.62,0l-.17.17c-20.62-16.23-49.83-21.75-79.73-8.62L150.22,20.28A69.25,69.25,0,0,0,32,69.25V256H16A16,16,0,0,0,0,272v16a16,16,0,0,0,16,16H496a16,16,0,0,0,16-16V272A16,16,0,0,0,496,256Z"},child:[]}]})(e)}function Ie(e){return Q({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M176 256c44.11 0 80-35.89 80-80s-35.89-80-80-80-80 35.89-80 80 35.89 80 80 80zm352-128H304c-8.84 0-16 7.16-16 16v144H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v352c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16v-48h512v48c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V240c0-61.86-50.14-112-112-112z"},child:[]}]})(e)}function U6(e){return Q({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M448 384c-28.02 0-31.26-32-74.5-32-43.43 0-46.825 32-74.75 32-27.695 0-31.454-32-74.75-32-42.842 0-47.218 32-74.5 32-28.148 0-31.202-32-74.75-32-43.547 0-46.653 32-74.75 32v-80c0-26.5 21.5-48 48-48h16V112h64v144h64V112h64v144h64V112h64v144h16c26.5 0 48 21.5 48 48v80zm0 128H0v-96c43.356 0 46.767-32 74.75-32 27.951 0 31.253 32 74.75 32 42.843 0 47.217-32 74.5-32 28.148 0 31.201 32 74.75 32 43.357 0 46.767-32 74.75-32 27.488 0 31.252 32 74.5 32v96zM96 96c-17.75 0-32-14.25-32-32 0-31 32-23 32-64 12 0 32 29.5 32 56s-14.25 40-32 40zm128 0c-17.75 0-32-14.25-32-32 0-31 32-23 32-64 12 0 32 29.5 32 56s-14.25 40-32 40zm128 0c-17.75 0-32-14.25-32-32 0-31 32-23 32-64 12 0 32 29.5 32 56s-14.25 40-32 40z"},child:[]}]})(e)}function dm(e){return Q({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M12 192h424c6.6 0 12 5.4 12 12v260c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V204c0-6.6 5.4-12 12-12zm436-44v-36c0-26.5-21.5-48-48-48h-48V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H160V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v36c0 6.6 5.4 12 12 12h424c6.6 0 12-5.4 12-12z"},child:[]}]})(e)}function um(e){return Q({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"},child:[]}]})(e)}function re(e){return Q({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M510.5 225.5c-6.9-37.2-39.3-65.5-78.5-65.5-12.3 0-23.9 3-34.3 8-17.4-24.1-45.6-40-77.7-40-53 0-96 43-96 96 0 .5.2 1.1.2 1.6C187.6 233 160 265.2 160 304c0 44.2 35.8 80 80 80h256c44.2 0 80-35.8 80-80 0-39.2-28.2-71.7-65.5-78.5zm-386.4 34.4c-37.4-37.4-37.4-98.3 0-135.8 34.6-34.6 89.1-36.8 126.7-7.4 20-12.9 43.6-20.7 69.2-20.7.7 0 1.3.2 2 .2l8.9-26.7c3.4-10.2-6.3-19.8-16.5-16.4l-75.3 25.1-35.5-71c-4.8-9.6-18.5-9.6-23.3 0l-35.5 71-75.3-25.1c-10.2-3.4-19.8 6.3-16.4 16.5l25.1 75.3-71 35.5c-9.6 4.8-9.6 18.5 0 23.3l71 35.5-25.1 75.3c-3.4 10.2 6.3 19.8 16.5 16.5l59.2-19.7c-.2-2.4-.7-4.7-.7-7.2 0-12.5 2.3-24.5 6.2-35.9-3.6-2.7-7.1-5.2-10.2-8.3zm69.8-58c4.3-24.5 15.8-46.4 31.9-64-9.8-6.2-21.4-9.9-33.8-9.9-35.3 0-64 28.7-64 64 0 18.7 8.2 35.4 21.1 47.1 11.3-15.9 26.6-28.9 44.8-37.2zm330.6 216.2c-7.6-4.3-17.4-1.8-21.8 6l-36.6 64c-4.4 7.7-1.7 17.4 6 21.8 2.5 1.4 5.2 2.1 7.9 2.1 5.5 0 10.9-2.9 13.9-8.1l36.6-64c4.3-7.7 1.7-17.4-6-21.8zm-96 0c-7.6-4.3-17.4-1.8-21.8 6l-36.6 64c-4.4 7.7-1.7 17.4 6 21.8 2.5 1.4 5.2 2.1 7.9 2.1 5.5 0 10.9-2.9 13.9-8.1l36.6-64c4.3-7.7 1.7-17.4-6-21.8zm-96 0c-7.6-4.3-17.4-1.8-21.8 6l-36.6 64c-4.4 7.7-1.7 17.4 6 21.8 2.5 1.4 5.2 2.1 7.9 2.1 5.5 0 10.9-2.9 13.9-8.1l36.6-64c4.3-7.7 1.7-17.4-6-21.8zm-96 0c-7.6-4.3-17.4-1.8-21.8 6l-36.6 64c-4.4 7.7-1.7 17.4 6 21.8 2.5 1.4 5.2 2.1 7.9 2.1 5.5 0 10.9-2.9 13.9-8.1l36.6-64c4.3-7.7 1.7-17.4-6-21.8z"},child:[]}]})(e)}function ct(e){return Q({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M216 23.86c0-23.8-30.65-32.77-44.15-13.04C48 191.85 224 200 224 288c0 35.63-29.11 64.46-64.85 63.99-35.17-.45-63.15-29.77-63.15-64.94v-85.51c0-21.7-26.47-32.23-41.43-16.5C27.8 213.16 0 261.33 0 320c0 105.87 86.13 192 192 192s192-86.13 192-192c0-170.29-168-193-168-296.14z"},child:[]}]})(e)}function fm(e){return Q({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"},child:[]}]})(e)}function pm(e){return Q({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"},child:[]}]})(e)}function W6(e){return Q({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M634.92 462.7l-288-448C341.03 5.54 330.89 0 320 0s-21.03 5.54-26.92 14.7l-288 448a32.001 32.001 0 0 0-1.17 32.64A32.004 32.004 0 0 0 32 512h576c11.71 0 22.48-6.39 28.09-16.67a31.983 31.983 0 0 0-1.17-32.63zM320 91.18L405.39 224H320l-64 64-38.06-38.06L320 91.18z"},child:[]}]})(e)}function ut(e){return Q({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 224c-79.41 0-192 122.76-192 200.25 0 34.9 26.81 55.75 71.74 55.75 48.84 0 81.09-25.08 120.26-25.08 39.51 0 71.85 25.08 120.26 25.08 44.93 0 71.74-20.85 71.74-55.75C448 346.76 335.41 224 256 224zm-147.28-12.61c-10.4-34.65-42.44-57.09-71.56-50.13-29.12 6.96-44.29 40.69-33.89 75.34 10.4 34.65 42.44 57.09 71.56 50.13 29.12-6.96 44.29-40.69 33.89-75.34zm84.72-20.78c30.94-8.14 46.42-49.94 34.58-93.36s-46.52-72.01-77.46-63.87-46.42 49.94-34.58 93.36c11.84 43.42 46.53 72.02 77.46 63.87zm281.39-29.34c-29.12-6.96-61.15 15.48-71.56 50.13-10.4 34.65 4.77 68.38 33.89 75.34 29.12 6.96 61.15-15.48 71.56-50.13 10.4-34.65-4.77-68.38-33.89-75.34zm-156.27 29.34c30.94 8.14 65.62-20.45 77.46-63.87 11.84-43.42-3.64-85.21-34.58-93.36s-65.62 20.45-77.46 63.87c-11.84 43.42 3.64 85.22 34.58 93.36z"},child:[]}]})(e)}function je(e){return Q({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M160 288h-56c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h56v-64h-56c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h56V96h-56c-4.42 0-8-3.58-8-8V72c0-4.42 3.58-8 8-8h56V32c0-17.67-14.33-32-32-32H32C14.33 0 0 14.33 0 32v448c0 2.77.91 5.24 1.57 7.8L160 329.38V288zm320 64h-32v56c0 4.42-3.58 8-8 8h-16c-4.42 0-8-3.58-8-8v-56h-64v56c0 4.42-3.58 8-8 8h-16c-4.42 0-8-3.58-8-8v-56h-64v56c0 4.42-3.58 8-8 8h-16c-4.42 0-8-3.58-8-8v-56h-41.37L24.2 510.43c2.56.66 5.04 1.57 7.8 1.57h448c17.67 0 32-14.33 32-32v-96c0-17.67-14.33-32-32-32z"},child:[]}]})(e)}function Qi(e){return Q({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M440.3 345.2l-33.8-19.5 26-7c8.2-2.2 13.1-10.7 10.9-18.9l-4-14.9c-2.2-8.2-10.7-13.1-18.9-10.9l-70.8 19-63.9-37 63.8-36.9 70.8 19c8.2 2.2 16.7-2.7 18.9-10.9l4-14.9c2.2-8.2-2.7-16.7-10.9-18.9l-26-7 33.8-19.5c7.4-4.3 9.9-13.7 5.7-21.1L430.4 119c-4.3-7.4-13.7-9.9-21.1-5.7l-33.8 19.5 7-26c2.2-8.2-2.7-16.7-10.9-18.9l-14.9-4c-8.2-2.2-16.7 2.7-18.9 10.9l-19 70.8-62.8 36.2v-77.5l53.7-53.7c6.2-6.2 6.2-16.4 0-22.6l-11.3-11.3c-6.2-6.2-16.4-6.2-22.6 0L256 56.4V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v40.4l-19.7-19.7c-6.2-6.2-16.4-6.2-22.6 0L138.3 48c-6.3 6.2-6.3 16.4 0 22.6l53.7 53.7v77.5l-62.8-36.2-19-70.8c-2.2-8.2-10.7-13.1-18.9-10.9l-14.9 4c-8.2 2.2-13.1 10.7-10.9 18.9l7 26-33.8-19.5c-7.4-4.3-16.8-1.7-21.1 5.7L2.1 145.7c-4.3 7.4-1.7 16.8 5.7 21.1l33.8 19.5-26 7c-8.3 2.2-13.2 10.7-11 19l4 14.9c2.2 8.2 10.7 13.1 18.9 10.9l70.8-19 63.8 36.9-63.8 36.9-70.8-19c-8.2-2.2-16.7 2.7-18.9 10.9l-4 14.9c-2.2 8.2 2.7 16.7 10.9 18.9l26 7-33.8 19.6c-7.4 4.3-9.9 13.7-5.7 21.1l15.5 26.8c4.3 7.4 13.7 9.9 21.1 5.7l33.8-19.5-7 26c-2.2 8.2 2.7 16.7 10.9 18.9l14.9 4c8.2 2.2 16.7-2.7 18.9-10.9l19-70.8 62.8-36.2v77.5l-53.7 53.7c-6.3 6.2-6.3 16.4 0 22.6l11.3 11.3c6.2 6.2 16.4 6.2 22.6 0l19.7-19.7V496c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-40.4l19.7 19.7c6.2 6.2 16.4 6.2 22.6 0l11.3-11.3c6.2-6.2 6.2-16.4 0-22.6L256 387.7v-77.5l62.8 36.2 19 70.8c2.2 8.2 10.7 13.1 18.9 10.9l14.9-4c8.2-2.2 13.1-10.7 10.9-18.9l-7-26 33.8 19.5c7.4 4.3 16.8 1.7 21.1-5.7l15.5-26.8c4.3-7.3 1.8-16.8-5.6-21z"},child:[]}]})(e)}function ze(e){return Q({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M592 0H48A48 48 0 0 0 0 48v320a48 48 0 0 0 48 48h240v32H112a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16H352v-32h240a48 48 0 0 0 48-48V48a48 48 0 0 0-48-48zm-16 352H64V64h512z"},child:[]}]})(e)}function ve(e){return Q({tag:"svg",attr:{viewBox:"0 0 416 512"},child:[{tag:"path",attr:{d:"M207.9 15.2c.8 4.7 16.1 94.5 16.1 128.8 0 52.3-27.8 89.6-68.9 104.6L168 486.7c.7 13.7-10.2 25.3-24 25.3H80c-13.7 0-24.7-11.5-24-25.3l12.9-238.1C27.7 233.6 0 196.2 0 144 0 109.6 15.3 19.9 16.1 15.2 19.3-5.1 61.4-5.4 64 16.3v141.2c1.3 3.4 15.1 3.2 16 0 1.4-25.3 7.9-139.2 8-141.8 3.3-20.8 44.7-20.8 47.9 0 .2 2.7 6.6 116.5 8 141.8.9 3.2 14.8 3.4 16 0V16.3c2.6-21.6 44.8-21.4 48-1.1zm119.2 285.7l-15 185.1c-1.2 14 9.9 26 23.9 26h56c13.3 0 24-10.7 24-24V24c0-13.2-10.7-24-24-24-82.5 0-221.4 178.5-64.9 300.9z"},child:[]}]})(e)}function mo(e){return Q({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M527.9 32H48.1C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48.1 48h479.8c26.6 0 48.1-21.5 48.1-48V80c0-26.5-21.5-48-48.1-48zM54.1 80h467.8c3.3 0 6 2.7 6 6v42H48.1V86c0-3.3 2.7-6 6-6zm467.8 352H54.1c-3.3 0-6-2.7-6-6V256h479.8v170c0 3.3-2.7 6-6 6zM192 332v40c0 6.6-5.4 12-12 12h-72c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12zm192 0v40c0 6.6-5.4 12-12 12H236c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12z"},child:[]}]})(e)}var ny={exports:{}},q6="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Y6=q6,K6=Y6;function iy(){}function ry(){}ry.resetWarningCache=iy;var X6=function(){function e(i,r,a,o,s,l){if(l!==K6){var d=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw d.name="Invariant Violation",d}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:ry,resetWarningCache:iy};return n.PropTypes=n,n};ny.exports=X6();var Q6=ny.exports;const we=Bi(Q6);function Z6(e){return e&&typeof e=="object"&&"default"in e?e.default:e}var ay=j,J6=Z6(ay);function hm(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function eS(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var tS=!!(typeof window<"u"&&window.document&&window.document.createElement);function nS(e,t,n){if(typeof e!="function")throw new Error("Expected reducePropsToState to be a function.");if(typeof t!="function")throw new Error("Expected handleStateChangeOnClient to be a function.");if(typeof n<"u"&&typeof n!="function")throw new Error("Expected mapStateOnServer to either be undefined or a function.");function i(r){return r.displayName||r.name||"Component"}return function(a){if(typeof a!="function")throw new Error("Expected WrappedComponent to be a React component.");var o=[],s;function l(){s=e(o.map(function(u){return u.props})),d.canUseDOM?t(s):n&&(s=n(s))}var d=function(u){eS(f,u);function f(){return u.apply(this,arguments)||this}f.peek=function(){return s},f.rewind=function(){if(f.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var x=s;return s=void 0,o=[],x};var p=f.prototype;return p.UNSAFE_componentWillMount=function(){o.push(this),l()},p.componentDidUpdate=function(){l()},p.componentWillUnmount=function(){var x=o.indexOf(this);o.splice(x,1),l()},p.render=function(){return J6.createElement(a,this.props)},f}(ay.PureComponent);return hm(d,"displayName","SideEffect("+i(a)+")"),hm(d,"canUseDOM",tS),d}}var iS=nS;const rS=Bi(iS);var aS=typeof Element<"u",oS=typeof Map=="function",sS=typeof Set=="function",lS=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function cs(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var n,i,r;if(Array.isArray(e)){if(n=e.length,n!=t.length)return!1;for(i=n;i--!==0;)if(!cs(e[i],t[i]))return!1;return!0}var a;if(oS&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(a=e.entries();!(i=a.next()).done;)if(!t.has(i.value[0]))return!1;for(a=e.entries();!(i=a.next()).done;)if(!cs(i.value[1],t.get(i.value[0])))return!1;return!0}if(sS&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(a=e.entries();!(i=a.next()).done;)if(!t.has(i.value[0]))return!1;return!0}if(lS&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if(n=e.length,n!=t.length)return!1;for(i=n;i--!==0;)if(e[i]!==t[i])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf&&typeof e.valueOf=="function"&&typeof t.valueOf=="function")return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString&&typeof e.toString=="function"&&typeof t.toString=="function")return e.toString()===t.toString();if(r=Object.keys(e),n=r.length,n!==Object.keys(t).length)return!1;for(i=n;i--!==0;)if(!Object.prototype.hasOwnProperty.call(t,r[i]))return!1;if(aS&&e instanceof Element)return!1;for(i=n;i--!==0;)if(!((r[i]==="_owner"||r[i]==="__v"||r[i]==="__o")&&e.$$typeof)&&!cs(e[r[i]],t[r[i]]))return!1;return!0}return e!==e&&t!==t}var cS=function(t,n){try{return cs(t,n)}catch(i){if((i.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw i}};const dS=Bi(cS);/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var mm=Object.getOwnPropertySymbols,uS=Object.prototype.hasOwnProperty,fS=Object.prototype.propertyIsEnumerable;function pS(e){if(e==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function hS(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de",Object.getOwnPropertyNames(e)[0]==="5")return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var i=Object.getOwnPropertyNames(t).map(function(a){return t[a]});if(i.join("")!=="0123456789")return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(a){r[a]=a}),Object.keys(Object.assign({},r)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var mS=hS()?Object.assign:function(e,t){for(var n,i=pS(e),r,a=1;a<arguments.length;a++){n=Object(arguments[a]);for(var o in n)uS.call(n,o)&&(i[o]=n[o]);if(mm){r=mm(n);for(var s=0;s<r.length;s++)fS.call(n,r[s])&&(i[r[s]]=n[r[s]])}}return i};const gS=Bi(mS);var Li={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},X={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"};Object.keys(X).map(function(e){return X[e]});var be={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src",TARGET:"target"},Qs={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},no={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},vS=Object.keys(Qs).reduce(function(e,t){return e[Qs[t]]=t,e},{}),xS=[X.NOSCRIPT,X.SCRIPT,X.STYLE],qt="data-react-helmet",yS=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},wS=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},bS=function(){function e(t,n){for(var i=0;i<n.length;i++){var r=n[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),ht=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},SS=function(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},gm=function(e,t){var n={};for(var i in e)t.indexOf(i)>=0||Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i]);return n},jS=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e},cu=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return n===!1?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},CS=function(t){var n=Cr(t,X.TITLE),i=Cr(t,no.TITLE_TEMPLATE);if(i&&n)return i.replace(/%s/g,function(){return Array.isArray(n)?n.join(""):n});var r=Cr(t,no.DEFAULT_TITLE);return n||r||void 0},kS=function(t){return Cr(t,no.ON_CHANGE_CLIENT_STATE)||function(){}},Rc=function(t,n){return n.filter(function(i){return typeof i[t]<"u"}).map(function(i){return i[t]}).reduce(function(i,r){return ht({},i,r)},{})},TS=function(t,n){return n.filter(function(i){return typeof i[X.BASE]<"u"}).map(function(i){return i[X.BASE]}).reverse().reduce(function(i,r){if(!i.length)for(var a=Object.keys(r),o=0;o<a.length;o++){var s=a[o],l=s.toLowerCase();if(t.indexOf(l)!==-1&&r[l])return i.concat(r)}return i},[])},la=function(t,n,i){var r={};return i.filter(function(a){return Array.isArray(a[t])?!0:(typeof a[t]<"u"&&GS("Helmet: "+t+' should be of type "Array". Instead found type "'+yS(a[t])+'"'),!1)}).map(function(a){return a[t]}).reverse().reduce(function(a,o){var s={};o.filter(function(p){for(var g=void 0,x=Object.keys(p),y=0;y<x.length;y++){var b=x[y],v=b.toLowerCase();n.indexOf(v)!==-1&&!(g===be.REL&&p[g].toLowerCase()==="canonical")&&!(v===be.REL&&p[v].toLowerCase()==="stylesheet")&&(g=v),n.indexOf(b)!==-1&&(b===be.INNER_HTML||b===be.CSS_TEXT||b===be.ITEM_PROP)&&(g=b)}if(!g||!p[g])return!1;var h=p[g].toLowerCase();return r[g]||(r[g]={}),s[g]||(s[g]={}),r[g][h]?!1:(s[g][h]=!0,!0)}).reverse().forEach(function(p){return a.push(p)});for(var l=Object.keys(s),d=0;d<l.length;d++){var u=l[d],f=gS({},r[u],s[u]);r[u]=f}return a},[]).reverse()},Cr=function(t,n){for(var i=t.length-1;i>=0;i--){var r=t[i];if(r.hasOwnProperty(n))return r[n]}return null},AS=function(t){return{baseTag:TS([be.HREF,be.TARGET],t),bodyAttributes:Rc(Li.BODY,t),defer:Cr(t,no.DEFER),encode:Cr(t,no.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:Rc(Li.HTML,t),linkTags:la(X.LINK,[be.REL,be.HREF],t),metaTags:la(X.META,[be.NAME,be.CHARSET,be.HTTPEQUIV,be.PROPERTY,be.ITEM_PROP],t),noscriptTags:la(X.NOSCRIPT,[be.INNER_HTML],t),onChangeClientState:kS(t),scriptTags:la(X.SCRIPT,[be.SRC,be.INNER_HTML],t),styleTags:la(X.STYLE,[be.CSS_TEXT],t),title:CS(t),titleAttributes:Rc(Li.TITLE,t)}},du=function(){var e=Date.now();return function(t){var n=Date.now();n-e>16?(e=n,t(n)):setTimeout(function(){du(t)},0)}}(),vm=function(t){return clearTimeout(t)},ES=typeof window<"u"?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||du:global.requestAnimationFrame||du,PS=typeof window<"u"?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||vm:global.cancelAnimationFrame||vm,GS=function(t){return console&&typeof console.warn=="function"&&console.warn(t)},ca=null,zS=function(t){ca&&PS(ca),t.defer?ca=ES(function(){xm(t,function(){ca=null})}):(xm(t),ca=null)},xm=function(t,n){var i=t.baseTag,r=t.bodyAttributes,a=t.htmlAttributes,o=t.linkTags,s=t.metaTags,l=t.noscriptTags,d=t.onChangeClientState,u=t.scriptTags,f=t.styleTags,p=t.title,g=t.titleAttributes;uu(X.BODY,r),uu(X.HTML,a),_S(p,g);var x={baseTag:Zi(X.BASE,i),linkTags:Zi(X.LINK,o),metaTags:Zi(X.META,s),noscriptTags:Zi(X.NOSCRIPT,l),scriptTags:Zi(X.SCRIPT,u),styleTags:Zi(X.STYLE,f)},y={},b={};Object.keys(x).forEach(function(v){var h=x[v],m=h.newTags,w=h.oldTags;m.length&&(y[v]=m),w.length&&(b[v]=x[v].oldTags)}),n&&n(),d(t,y,b)},oy=function(t){return Array.isArray(t)?t.join(""):t},_S=function(t,n){typeof t<"u"&&document.title!==t&&(document.title=oy(t)),uu(X.TITLE,n)},uu=function(t,n){var i=document.getElementsByTagName(t)[0];if(i){for(var r=i.getAttribute(qt),a=r?r.split(","):[],o=[].concat(a),s=Object.keys(n),l=0;l<s.length;l++){var d=s[l],u=n[d]||"";i.getAttribute(d)!==u&&i.setAttribute(d,u),a.indexOf(d)===-1&&a.push(d);var f=o.indexOf(d);f!==-1&&o.splice(f,1)}for(var p=o.length-1;p>=0;p--)i.removeAttribute(o[p]);a.length===o.length?i.removeAttribute(qt):i.getAttribute(qt)!==s.join(",")&&i.setAttribute(qt,s.join(","))}},Zi=function(t,n){var i=document.head||document.querySelector(X.HEAD),r=i.querySelectorAll(t+"["+qt+"]"),a=Array.prototype.slice.call(r),o=[],s=void 0;return n&&n.length&&n.forEach(function(l){var d=document.createElement(t);for(var u in l)if(l.hasOwnProperty(u))if(u===be.INNER_HTML)d.innerHTML=l.innerHTML;else if(u===be.CSS_TEXT)d.styleSheet?d.styleSheet.cssText=l.cssText:d.appendChild(document.createTextNode(l.cssText));else{var f=typeof l[u]>"u"?"":l[u];d.setAttribute(u,f)}d.setAttribute(qt,"true"),a.some(function(p,g){return s=g,d.isEqualNode(p)})?a.splice(s,1):o.push(d)}),a.forEach(function(l){return l.parentNode.removeChild(l)}),o.forEach(function(l){return i.appendChild(l)}),{oldTags:a,newTags:o}},sy=function(t){return Object.keys(t).reduce(function(n,i){var r=typeof t[i]<"u"?i+'="'+t[i]+'"':""+i;return n?n+" "+r:r},"")},MS=function(t,n,i,r){var a=sy(i),o=oy(n);return a?"<"+t+" "+qt+'="true" '+a+">"+cu(o,r)+"</"+t+">":"<"+t+" "+qt+'="true">'+cu(o,r)+"</"+t+">"},LS=function(t,n,i){return n.reduce(function(r,a){var o=Object.keys(a).filter(function(d){return!(d===be.INNER_HTML||d===be.CSS_TEXT)}).reduce(function(d,u){var f=typeof a[u]>"u"?u:u+'="'+cu(a[u],i)+'"';return d?d+" "+f:f},""),s=a.innerHTML||a.cssText||"",l=xS.indexOf(t)===-1;return r+"<"+t+" "+qt+'="true" '+o+(l?"/>":">"+s+"</"+t+">")},"")},ly=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Object.keys(t).reduce(function(i,r){return i[Qs[r]||r]=t[r],i},n)},OS=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Object.keys(t).reduce(function(i,r){return i[vS[r]||r]=t[r],i},n)},IS=function(t,n,i){var r,a=(r={key:n},r[qt]=!0,r),o=ly(i,a);return[ee.createElement(X.TITLE,o,n)]},RS=function(t,n){return n.map(function(i,r){var a,o=(a={key:r},a[qt]=!0,a);return Object.keys(i).forEach(function(s){var l=Qs[s]||s;if(l===be.INNER_HTML||l===be.CSS_TEXT){var d=i.innerHTML||i.cssText;o.dangerouslySetInnerHTML={__html:d}}else o[l]=i[s]}),ee.createElement(t,o)})},xn=function(t,n,i){switch(t){case X.TITLE:return{toComponent:function(){return IS(t,n.title,n.titleAttributes)},toString:function(){return MS(t,n.title,n.titleAttributes,i)}};case Li.BODY:case Li.HTML:return{toComponent:function(){return ly(n)},toString:function(){return sy(n)}};default:return{toComponent:function(){return RS(t,n)},toString:function(){return LS(t,n,i)}}}},cy=function(t){var n=t.baseTag,i=t.bodyAttributes,r=t.encode,a=t.htmlAttributes,o=t.linkTags,s=t.metaTags,l=t.noscriptTags,d=t.scriptTags,u=t.styleTags,f=t.title,p=f===void 0?"":f,g=t.titleAttributes;return{base:xn(X.BASE,n,r),bodyAttributes:xn(Li.BODY,i,r),htmlAttributes:xn(Li.HTML,a,r),link:xn(X.LINK,o,r),meta:xn(X.META,s,r),noscript:xn(X.NOSCRIPT,l,r),script:xn(X.SCRIPT,d,r),style:xn(X.STYLE,u,r),title:xn(X.TITLE,{title:p,titleAttributes:g},r)}},DS=function(t){var n,i;return i=n=function(r){SS(a,r);function a(){return wS(this,a),jS(this,r.apply(this,arguments))}return a.prototype.shouldComponentUpdate=function(s){return!dS(this.props,s)},a.prototype.mapNestedChildrenToProps=function(s,l){if(!l)return null;switch(s.type){case X.SCRIPT:case X.NOSCRIPT:return{innerHTML:l};case X.STYLE:return{cssText:l}}throw new Error("<"+s.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},a.prototype.flattenArrayTypeChildren=function(s){var l,d=s.child,u=s.arrayTypeChildren,f=s.newChildProps,p=s.nestedChildren;return ht({},u,(l={},l[d.type]=[].concat(u[d.type]||[],[ht({},f,this.mapNestedChildrenToProps(d,p))]),l))},a.prototype.mapObjectTypeChildren=function(s){var l,d,u=s.child,f=s.newProps,p=s.newChildProps,g=s.nestedChildren;switch(u.type){case X.TITLE:return ht({},f,(l={},l[u.type]=g,l.titleAttributes=ht({},p),l));case X.BODY:return ht({},f,{bodyAttributes:ht({},p)});case X.HTML:return ht({},f,{htmlAttributes:ht({},p)})}return ht({},f,(d={},d[u.type]=ht({},p),d))},a.prototype.mapArrayTypeChildrenToProps=function(s,l){var d=ht({},l);return Object.keys(s).forEach(function(u){var f;d=ht({},d,(f={},f[u]=s[u],f))}),d},a.prototype.warnOnInvalidChildren=function(s,l){return!0},a.prototype.mapChildrenToProps=function(s,l){var d=this,u={};return ee.Children.forEach(s,function(f){if(!(!f||!f.props)){var p=f.props,g=p.children,x=gm(p,["children"]),y=OS(x);switch(d.warnOnInvalidChildren(f,g),f.type){case X.LINK:case X.META:case X.NOSCRIPT:case X.SCRIPT:case X.STYLE:u=d.flattenArrayTypeChildren({child:f,arrayTypeChildren:u,newChildProps:y,nestedChildren:g});break;default:l=d.mapObjectTypeChildren({child:f,newProps:l,newChildProps:y,nestedChildren:g});break}}}),l=this.mapArrayTypeChildrenToProps(u,l),l},a.prototype.render=function(){var s=this.props,l=s.children,d=gm(s,["children"]),u=ht({},d);return l&&(u=this.mapChildrenToProps(l,u)),ee.createElement(t,u)},bS(a,null,[{key:"canUseDOM",set:function(s){t.canUseDOM=s}}]),a}(ee.Component),n.propTypes={base:we.object,bodyAttributes:we.object,children:we.oneOfType([we.arrayOf(we.node),we.node]),defaultTitle:we.string,defer:we.bool,encodeSpecialCharacters:we.bool,htmlAttributes:we.object,link:we.arrayOf(we.object),meta:we.arrayOf(we.object),noscript:we.arrayOf(we.object),onChangeClientState:we.func,script:we.arrayOf(we.object),style:we.arrayOf(we.object),title:we.string,titleAttributes:we.object,titleTemplate:we.string},n.defaultProps={defer:!0,encodeSpecialCharacters:!0},n.peek=t.peek,n.rewind=function(){var r=t.rewind();return r||(r=cy({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),r},i},VS=function(){return null},NS=rS(AS,zS,cy)(VS),Rn=DS(NS);Rn.renderStatic=Rn.rewind;var ot=function(){return ot=Object.assign||function(t){for(var n,i=1,r=arguments.length;i<r;i++){n=arguments[i];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},ot.apply(this,arguments)};function Ir(e,t,n){if(n||arguments.length===2)for(var i=0,r=t.length,a;i<r;i++)(a||!(i in t))&&(a||(a=Array.prototype.slice.call(t,0,i)),a[i]=t[i]);return e.concat(a||Array.prototype.slice.call(t))}var ge="-ms-",_a="-moz-",ce="-webkit-",dy="comm",Ll="rule",ap="decl",FS="@import",uy="@keyframes",$S="@layer",fy=Math.abs,op=String.fromCharCode,fu=Object.assign;function BS(e,t){return qe(e,0)^45?(((t<<2^qe(e,0))<<2^qe(e,1))<<2^qe(e,2))<<2^qe(e,3):0}function py(e){return e.trim()}function Sn(e,t){return(e=t.exec(e))?e[0]:e}function ne(e,t,n){return e.replace(t,n)}function ds(e,t,n){return e.indexOf(t,n)}function qe(e,t){return e.charCodeAt(t)|0}function Rr(e,t,n){return e.slice(t,n)}function on(e){return e.length}function hy(e){return e.length}function va(e,t){return t.push(e),e}function HS(e,t){return e.map(t).join("")}function ym(e,t){return e.filter(function(n){return!Sn(n,t)})}var Ol=1,Dr=1,my=0,Vt=0,Re=0,qr="";function Il(e,t,n,i,r,a,o,s){return{value:e,root:t,parent:n,type:i,props:r,children:a,line:Ol,column:Dr,length:o,return:"",siblings:s}}function Bn(e,t){return fu(Il("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Ji(e){for(;e.root;)e=Bn(e.root,{children:[e]});va(e,e.siblings)}function US(){return Re}function WS(){return Re=Vt>0?qe(qr,--Vt):0,Dr--,Re===10&&(Dr=1,Ol--),Re}function Xt(){return Re=Vt<my?qe(qr,Vt++):0,Dr++,Re===10&&(Dr=1,Ol++),Re}function Oi(){return qe(qr,Vt)}function us(){return Vt}function Rl(e,t){return Rr(qr,e,t)}function pu(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function qS(e){return Ol=Dr=1,my=on(qr=e),Vt=0,[]}function YS(e){return qr="",e}function Dc(e){return py(Rl(Vt-1,hu(e===91?e+2:e===40?e+1:e)))}function KS(e){for(;(Re=Oi())&&Re<33;)Xt();return pu(e)>2||pu(Re)>3?"":" "}function XS(e,t){for(;--t&&Xt()&&!(Re<48||Re>102||Re>57&&Re<65||Re>70&&Re<97););return Rl(e,us()+(t<6&&Oi()==32&&Xt()==32))}function hu(e){for(;Xt();)switch(Re){case e:return Vt;case 34:case 39:e!==34&&e!==39&&hu(Re);break;case 40:e===41&&hu(e);break;case 92:Xt();break}return Vt}function QS(e,t){for(;Xt()&&e+Re!==57;)if(e+Re===84&&Oi()===47)break;return"/*"+Rl(t,Vt-1)+"*"+op(e===47?e:Xt())}function ZS(e){for(;!pu(Oi());)Xt();return Rl(e,Vt)}function JS(e){return YS(fs("",null,null,null,[""],e=qS(e),0,[0],e))}function fs(e,t,n,i,r,a,o,s,l){for(var d=0,u=0,f=o,p=0,g=0,x=0,y=1,b=1,v=1,h=0,m="",w=r,S=a,C=i,A=m;b;)switch(x=h,h=Xt()){case 40:if(x!=108&&qe(A,f-1)==58){ds(A+=ne(Dc(h),"&","&\f"),"&\f",fy(d?s[d-1]:0))!=-1&&(v=-1);break}case 34:case 39:case 91:A+=Dc(h);break;case 9:case 10:case 13:case 32:A+=KS(x);break;case 92:A+=XS(us()-1,7);continue;case 47:switch(Oi()){case 42:case 47:va(e7(QS(Xt(),us()),t,n,l),l);break;default:A+="/"}break;case 123*y:s[d++]=on(A)*v;case 125*y:case 59:case 0:switch(h){case 0:case 125:b=0;case 59+u:v==-1&&(A=ne(A,/\f/g,"")),g>0&&on(A)-f&&va(g>32?bm(A+";",i,n,f-1,l):bm(ne(A," ","")+";",i,n,f-2,l),l);break;case 59:A+=";";default:if(va(C=wm(A,t,n,d,u,r,s,m,w=[],S=[],f,a),a),h===123)if(u===0)fs(A,t,C,C,w,a,f,s,S);else switch(p===99&&qe(A,3)===110?100:p){case 100:case 108:case 109:case 115:fs(e,C,C,i&&va(wm(e,C,C,0,0,r,s,m,r,w=[],f,S),S),r,S,f,s,i?w:S);break;default:fs(A,C,C,C,[""],S,0,s,S)}}d=u=g=0,y=v=1,m=A="",f=o;break;case 58:f=1+on(A),g=x;default:if(y<1){if(h==123)--y;else if(h==125&&y++==0&&WS()==125)continue}switch(A+=op(h),h*y){case 38:v=u>0?1:(A+="\f",-1);break;case 44:s[d++]=(on(A)-1)*v,v=1;break;case 64:Oi()===45&&(A+=Dc(Xt())),p=Oi(),u=f=on(m=A+=ZS(us())),h++;break;case 45:x===45&&on(A)==2&&(y=0)}}return a}function wm(e,t,n,i,r,a,o,s,l,d,u,f){for(var p=r-1,g=r===0?a:[""],x=hy(g),y=0,b=0,v=0;y<i;++y)for(var h=0,m=Rr(e,p+1,p=fy(b=o[y])),w=e;h<x;++h)(w=py(b>0?g[h]+" "+m:ne(m,/&\f/g,g[h])))&&(l[v++]=w);return Il(e,t,n,r===0?Ll:s,l,d,u,f)}function e7(e,t,n,i){return Il(e,t,n,dy,op(US()),Rr(e,2,-2),0,i)}function bm(e,t,n,i,r){return Il(e,t,n,ap,Rr(e,0,i),Rr(e,i+1,-1),i,r)}function gy(e,t,n){switch(BS(e,t)){case 5103:return ce+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ce+e+e;case 4789:return _a+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ce+e+_a+e+ge+e+e;case 5936:switch(qe(e,t+11)){case 114:return ce+e+ge+ne(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ce+e+ge+ne(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ce+e+ge+ne(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return ce+e+ge+e+e;case 6165:return ce+e+ge+"flex-"+e+e;case 5187:return ce+e+ne(e,/(\w+).+(:[^]+)/,ce+"box-$1$2"+ge+"flex-$1$2")+e;case 5443:return ce+e+ge+"flex-item-"+ne(e,/flex-|-self/g,"")+(Sn(e,/flex-|baseline/)?"":ge+"grid-row-"+ne(e,/flex-|-self/g,""))+e;case 4675:return ce+e+ge+"flex-line-pack"+ne(e,/align-content|flex-|-self/g,"")+e;case 5548:return ce+e+ge+ne(e,"shrink","negative")+e;case 5292:return ce+e+ge+ne(e,"basis","preferred-size")+e;case 6060:return ce+"box-"+ne(e,"-grow","")+ce+e+ge+ne(e,"grow","positive")+e;case 4554:return ce+ne(e,/([^-])(transform)/g,"$1"+ce+"$2")+e;case 6187:return ne(ne(ne(e,/(zoom-|grab)/,ce+"$1"),/(image-set)/,ce+"$1"),e,"")+e;case 5495:case 3959:return ne(e,/(image-set\([^]*)/,ce+"$1$`$1");case 4968:return ne(ne(e,/(.+:)(flex-)?(.*)/,ce+"box-pack:$3"+ge+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ce+e+e;case 4200:if(!Sn(e,/flex-|baseline/))return ge+"grid-column-align"+Rr(e,t)+e;break;case 2592:case 3360:return ge+ne(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(i,r){return t=r,Sn(i.props,/grid-\w+-end/)})?~ds(e+(n=n[t].value),"span",0)?e:ge+ne(e,"-start","")+e+ge+"grid-row-span:"+(~ds(n,"span",0)?Sn(n,/\d+/):+Sn(n,/\d+/)-+Sn(e,/\d+/))+";":ge+ne(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(i){return Sn(i.props,/grid-\w+-start/)})?e:ge+ne(ne(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return ne(e,/(.+)-inline(.+)/,ce+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(on(e)-1-t>6)switch(qe(e,t+1)){case 109:if(qe(e,t+4)!==45)break;case 102:return ne(e,/(.+:)(.+)-([^]+)/,"$1"+ce+"$2-$3$1"+_a+(qe(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~ds(e,"stretch",0)?gy(ne(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return ne(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(i,r,a,o,s,l,d){return ge+r+":"+a+d+(o?ge+r+"-span:"+(s?l:+l-+a)+d:"")+e});case 4949:if(qe(e,t+6)===121)return ne(e,":",":"+ce)+e;break;case 6444:switch(qe(e,qe(e,14)===45?18:11)){case 120:return ne(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ce+(qe(e,14)===45?"inline-":"")+"box$3$1"+ce+"$2$3$1"+ge+"$2box$3")+e;case 100:return ne(e,":",":"+ge)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ne(e,"scroll-","scroll-snap-")+e}return e}function Zs(e,t){for(var n="",i=0;i<e.length;i++)n+=t(e[i],i,e,t)||"";return n}function t7(e,t,n,i){switch(e.type){case $S:if(e.children.length)break;case FS:case ap:return e.return=e.return||e.value;case dy:return"";case uy:return e.return=e.value+"{"+Zs(e.children,i)+"}";case Ll:if(!on(e.value=e.props.join(",")))return""}return on(n=Zs(e.children,i))?e.return=e.value+"{"+n+"}":""}function n7(e){var t=hy(e);return function(n,i,r,a){for(var o="",s=0;s<t;s++)o+=e[s](n,i,r,a)||"";return o}}function i7(e){return function(t){t.root||(t=t.return)&&e(t)}}function r7(e,t,n,i){if(e.length>-1&&!e.return)switch(e.type){case ap:e.return=gy(e.value,e.length,n);return;case uy:return Zs([Bn(e,{value:ne(e.value,"@","@"+ce)})],i);case Ll:if(e.length)return HS(n=e.props,function(r){switch(Sn(r,i=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Ji(Bn(e,{props:[ne(r,/:(read-\w+)/,":"+_a+"$1")]})),Ji(Bn(e,{props:[r]})),fu(e,{props:ym(n,i)});break;case"::placeholder":Ji(Bn(e,{props:[ne(r,/:(plac\w+)/,":"+ce+"input-$1")]})),Ji(Bn(e,{props:[ne(r,/:(plac\w+)/,":"+_a+"$1")]})),Ji(Bn(e,{props:[ne(r,/:(plac\w+)/,ge+"input-$1")]})),Ji(Bn(e,{props:[r]})),fu(e,{props:ym(n,i)});break}return""})}}var a7={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},bt={},Vr=typeof process<"u"&&bt!==void 0&&(bt.REACT_APP_SC_ATTR||bt.SC_ATTR)||"data-styled",vy="active",xy="data-styled-version",Dl="6.1.13",sp=`/*!sc*/
`,Js=typeof window<"u"&&"HTMLElement"in window,o7=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&bt!==void 0&&bt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&bt.REACT_APP_SC_DISABLE_SPEEDY!==""?bt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&bt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&bt!==void 0&&bt.SC_DISABLE_SPEEDY!==void 0&&bt.SC_DISABLE_SPEEDY!==""&&bt.SC_DISABLE_SPEEDY!=="false"&&bt.SC_DISABLE_SPEEDY),s7={},Vl=Object.freeze([]),Nr=Object.freeze({});function yy(e,t,n){return n===void 0&&(n=Nr),e.theme!==n.theme&&e.theme||t||n.theme}var wy=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),l7=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,c7=/(^-|-$)/g;function Sm(e){return e.replace(l7,"-").replace(c7,"")}var d7=/(a)(d)/gi,Fo=52,jm=function(e){return String.fromCharCode(e+(e>25?39:97))};function mu(e){var t,n="";for(t=Math.abs(e);t>Fo;t=t/Fo|0)n=jm(t%Fo)+n;return(jm(t%Fo)+n).replace(d7,"$1-$2")}var Vc,by=5381,vr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Sy=function(e){return vr(by,e)};function lp(e){return mu(Sy(e)>>>0)}function u7(e){return e.displayName||e.name||"Component"}function Nc(e){return typeof e=="string"&&!0}var jy=typeof Symbol=="function"&&Symbol.for,Cy=jy?Symbol.for("react.memo"):60115,f7=jy?Symbol.for("react.forward_ref"):60112,p7={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},h7={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},ky={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},m7=((Vc={})[f7]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Vc[Cy]=ky,Vc);function Cm(e){return("type"in(t=e)&&t.type.$$typeof)===Cy?ky:"$$typeof"in e?m7[e.$$typeof]:p7;var t}var g7=Object.defineProperty,v7=Object.getOwnPropertyNames,km=Object.getOwnPropertySymbols,x7=Object.getOwnPropertyDescriptor,y7=Object.getPrototypeOf,Tm=Object.prototype;function Ty(e,t,n){if(typeof t!="string"){if(Tm){var i=y7(t);i&&i!==Tm&&Ty(e,i,n)}var r=v7(t);km&&(r=r.concat(km(t)));for(var a=Cm(e),o=Cm(t),s=0;s<r.length;++s){var l=r[s];if(!(l in h7||n&&n[l]||o&&l in o||a&&l in a)){var d=x7(t,l);try{g7(e,l,d)}catch{}}}}return e}function Fr(e){return typeof e=="function"}function cp(e){return typeof e=="object"&&"styledComponentId"in e}function Gi(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function el(e,t){if(e.length===0)return"";for(var n=e[0],i=1;i<e.length;i++)n+=e[i];return n}function io(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function gu(e,t,n){if(n===void 0&&(n=!1),!n&&!io(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var i=0;i<t.length;i++)e[i]=gu(e[i],t[i]);else if(io(t))for(var i in t)e[i]=gu(e[i],t[i]);return e}function dp(e,t){Object.defineProperty(e,"toString",{value:t})}function go(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var w7=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,i=0;i<t;i++)n+=this.groupSizes[i];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var i=this.groupSizes,r=i.length,a=r;t>=a;)if((a<<=1)<0)throw go(16,"".concat(t));this.groupSizes=new Uint32Array(a),this.groupSizes.set(i),this.length=a;for(var o=r;o<a;o++)this.groupSizes[o]=0}for(var s=this.indexOfGroup(t+1),l=(o=0,n.length);o<l;o++)this.tag.insertRule(s,n[o])&&(this.groupSizes[t]++,s++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],i=this.indexOfGroup(t),r=i+n;this.groupSizes[t]=0;for(var a=i;a<r;a++)this.tag.deleteRule(i)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var i=this.groupSizes[t],r=this.indexOfGroup(t),a=r+i,o=r;o<a;o++)n+="".concat(this.tag.getRule(o)).concat(sp);return n},e}(),ps=new Map,tl=new Map,hs=1,$o=function(e){if(ps.has(e))return ps.get(e);for(;tl.has(hs);)hs++;var t=hs++;return ps.set(e,t),tl.set(t,e),t},b7=function(e,t){hs=t+1,ps.set(e,t),tl.set(t,e)},S7="style[".concat(Vr,"][").concat(xy,'="').concat(Dl,'"]'),j7=new RegExp("^".concat(Vr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),C7=function(e,t,n){for(var i,r=n.split(","),a=0,o=r.length;a<o;a++)(i=r[a])&&e.registerName(t,i)},k7=function(e,t){for(var n,i=((n=t.textContent)!==null&&n!==void 0?n:"").split(sp),r=[],a=0,o=i.length;a<o;a++){var s=i[a].trim();if(s){var l=s.match(j7);if(l){var d=0|parseInt(l[1],10),u=l[2];d!==0&&(b7(u,d),C7(e,u,l[3]),e.getTag().insertRules(d,r)),r.length=0}else r.push(s)}}},Am=function(e){for(var t=document.querySelectorAll(S7),n=0,i=t.length;n<i;n++){var r=t[n];r&&r.getAttribute(Vr)!==vy&&(k7(e,r),r.parentNode&&r.parentNode.removeChild(r))}};function T7(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Ay=function(e){var t=document.head,n=e||t,i=document.createElement("style"),r=function(s){var l=Array.from(s.querySelectorAll("style[".concat(Vr,"]")));return l[l.length-1]}(n),a=r!==void 0?r.nextSibling:null;i.setAttribute(Vr,vy),i.setAttribute(xy,Dl);var o=T7();return o&&i.setAttribute("nonce",o),n.insertBefore(i,a),i},A7=function(){function e(t){this.element=Ay(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var i=document.styleSheets,r=0,a=i.length;r<a;r++){var o=i[r];if(o.ownerNode===n)return o}throw go(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),E7=function(){function e(t){this.element=Ay(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var i=document.createTextNode(n);return this.element.insertBefore(i,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),P7=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Em=Js,G7={isServer:!Js,useCSSOMInjection:!o7},nl=function(){function e(t,n,i){t===void 0&&(t=Nr),n===void 0&&(n={});var r=this;this.options=ot(ot({},G7),t),this.gs=n,this.names=new Map(i),this.server=!!t.isServer,!this.server&&Js&&Em&&(Em=!1,Am(this)),dp(this,function(){return function(a){for(var o=a.getTag(),s=o.length,l="",d=function(f){var p=function(v){return tl.get(v)}(f);if(p===void 0)return"continue";var g=a.names.get(p),x=o.getGroup(f);if(g===void 0||!g.size||x.length===0)return"continue";var y="".concat(Vr,".g").concat(f,'[id="').concat(p,'"]'),b="";g!==void 0&&g.forEach(function(v){v.length>0&&(b+="".concat(v,","))}),l+="".concat(x).concat(y,'{content:"').concat(b,'"}').concat(sp)},u=0;u<s;u++)d(u);return l}(r)})}return e.registerId=function(t){return $o(t)},e.prototype.rehydrate=function(){!this.server&&Js&&Am(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(ot(ot({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var i=n.useCSSOMInjection,r=n.target;return n.isServer?new P7(r):i?new A7(r):new E7(r)}(this.options),new w7(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if($o(t),this.names.has(t))this.names.get(t).add(n);else{var i=new Set;i.add(n),this.names.set(t,i)}},e.prototype.insertRules=function(t,n,i){this.registerName(t,n),this.getTag().insertRules($o(t),i)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup($o(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),z7=/&/g,_7=/^\s*\/\/.*$/gm;function Ey(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(i){return"".concat(t," ").concat(i)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=Ey(n.children,t)),n})}function M7(e){var t,n,i,r=Nr,a=r.options,o=a===void 0?Nr:a,s=r.plugins,l=s===void 0?Vl:s,d=function(p,g,x){return x.startsWith(n)&&x.endsWith(n)&&x.replaceAll(n,"").length>0?".".concat(t):p},u=l.slice();u.push(function(p){p.type===Ll&&p.value.includes("&")&&(p.props[0]=p.props[0].replace(z7,n).replace(i,d))}),o.prefix&&u.push(r7),u.push(t7);var f=function(p,g,x,y){g===void 0&&(g=""),x===void 0&&(x=""),y===void 0&&(y="&"),t=y,n=g,i=new RegExp("\\".concat(n,"\\b"),"g");var b=p.replace(_7,""),v=JS(x||g?"".concat(x," ").concat(g," { ").concat(b," }"):b);o.namespace&&(v=Ey(v,o.namespace));var h=[];return Zs(v,n7(u.concat(i7(function(m){return h.push(m)})))),h};return f.hash=l.length?l.reduce(function(p,g){return g.name||go(15),vr(p,g.name)},by).toString():"",f}var L7=new nl,vu=M7(),Py=ee.createContext({shouldForwardProp:void 0,styleSheet:L7,stylis:vu});Py.Consumer;ee.createContext(void 0);function xu(){return j.useContext(Py)}var Gy=function(){function e(t,n){var i=this;this.inject=function(r,a){a===void 0&&(a=vu);var o=i.name+a.hash;r.hasNameForId(i.id,o)||r.insertRules(i.id,o,a(i.rules,o,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,dp(this,function(){throw go(12,String(i.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=vu),this.name+t.hash},e}(),O7=function(e){return e>="A"&&e<="Z"};function Pm(e){for(var t="",n=0;n<e.length;n++){var i=e[n];if(n===1&&i==="-"&&e[0]==="-")return e;O7(i)?t+="-"+i.toLowerCase():t+=i}return t.startsWith("ms-")?"-"+t:t}var zy=function(e){return e==null||e===!1||e===""},_y=function(e){var t,n,i=[];for(var r in e){var a=e[r];e.hasOwnProperty(r)&&!zy(a)&&(Array.isArray(a)&&a.isCss||Fr(a)?i.push("".concat(Pm(r),":"),a,";"):io(a)?i.push.apply(i,Ir(Ir(["".concat(r," {")],_y(a),!1),["}"],!1)):i.push("".concat(Pm(r),": ").concat((t=r,(n=a)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in a7||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return i};function si(e,t,n,i){if(zy(e))return[];if(cp(e))return[".".concat(e.styledComponentId)];if(Fr(e)){if(!Fr(a=e)||a.prototype&&a.prototype.isReactComponent||!t)return[e];var r=e(t);return si(r,t,n,i)}var a;return e instanceof Gy?n?(e.inject(n,i),[e.getName(i)]):[e]:io(e)?_y(e):Array.isArray(e)?Array.prototype.concat.apply(Vl,e.map(function(o){return si(o,t,n,i)})):[e.toString()]}function My(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Fr(n)&&!cp(n))return!1}return!0}var I7=Sy(Dl),R7=function(){function e(t,n,i){this.rules=t,this.staticRulesId="",this.isStatic=(i===void 0||i.isStatic)&&My(t),this.componentId=n,this.baseHash=vr(I7,n),this.baseStyle=i,nl.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,i){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,i):"";if(this.isStatic&&!i.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))r=Gi(r,this.staticRulesId);else{var a=el(si(this.rules,t,n,i)),o=mu(vr(this.baseHash,a)>>>0);if(!n.hasNameForId(this.componentId,o)){var s=i(a,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,s)}r=Gi(r,o),this.staticRulesId=o}else{for(var l=vr(this.baseHash,i.hash),d="",u=0;u<this.rules.length;u++){var f=this.rules[u];if(typeof f=="string")d+=f;else if(f){var p=el(si(f,t,n,i));l=vr(l,p+u),d+=p}}if(d){var g=mu(l>>>0);n.hasNameForId(this.componentId,g)||n.insertRules(this.componentId,g,i(d,".".concat(g),void 0,this.componentId)),r=Gi(r,g)}}return r},e}(),up=ee.createContext(void 0);up.Consumer;var Fc={};function D7(e,t,n){var i=cp(e),r=e,a=!Nc(e),o=t.attrs,s=o===void 0?Vl:o,l=t.componentId,d=l===void 0?function(w,S){var C=typeof w!="string"?"sc":Sm(w);Fc[C]=(Fc[C]||0)+1;var A="".concat(C,"-").concat(lp(Dl+C+Fc[C]));return S?"".concat(S,"-").concat(A):A}(t.displayName,t.parentComponentId):l,u=t.displayName,f=u===void 0?function(w){return Nc(w)?"styled.".concat(w):"Styled(".concat(u7(w),")")}(e):u,p=t.displayName&&t.componentId?"".concat(Sm(t.displayName),"-").concat(t.componentId):t.componentId||d,g=i&&r.attrs?r.attrs.concat(s).filter(Boolean):s,x=t.shouldForwardProp;if(i&&r.shouldForwardProp){var y=r.shouldForwardProp;if(t.shouldForwardProp){var b=t.shouldForwardProp;x=function(w,S){return y(w,S)&&b(w,S)}}else x=y}var v=new R7(n,p,i?r.componentStyle:void 0);function h(w,S){return function(C,A,T){var z=C.attrs,E=C.componentStyle,P=C.defaultProps,_=C.foldedComponentIds,I=C.styledComponentId,R=C.target,U=ee.useContext(up),Z=xu(),Y=C.shouldForwardProp||Z.shouldForwardProp,M=yy(A,U,P)||Nr,V=function(Ce,ue,le){for(var G,L=ot(ot({},ue),{className:void 0,theme:le}),D=0;D<Ce.length;D+=1){var O=Fr(G=Ce[D])?G(L):G;for(var q in O)L[q]=q==="className"?Gi(L[q],O[q]):q==="style"?ot(ot({},L[q]),O[q]):O[q]}return ue.className&&(L.className=Gi(L.className,ue.className)),L}(z,A,M),$=V.as||R,K={};for(var J in V)V[J]===void 0||J[0]==="$"||J==="as"||J==="theme"&&V.theme===M||(J==="forwardedAs"?K.as=V.forwardedAs:Y&&!Y(J,$)||(K[J]=V[J]));var ye=function(Ce,ue){var le=xu(),G=Ce.generateAndInjectStyles(ue,le.styleSheet,le.stylis);return G}(E,V),pe=Gi(_,I);return ye&&(pe+=" "+ye),V.className&&(pe+=" "+V.className),K[Nc($)&&!wy.has($)?"class":"className"]=pe,K.ref=T,j.createElement($,K)}(m,w,S)}h.displayName=f;var m=ee.forwardRef(h);return m.attrs=g,m.componentStyle=v,m.displayName=f,m.shouldForwardProp=x,m.foldedComponentIds=i?Gi(r.foldedComponentIds,r.styledComponentId):"",m.styledComponentId=p,m.target=i?r.target:e,Object.defineProperty(m,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(w){this._foldedDefaultProps=i?function(S){for(var C=[],A=1;A<arguments.length;A++)C[A-1]=arguments[A];for(var T=0,z=C;T<z.length;T++)gu(S,z[T],!0);return S}({},r.defaultProps,w):w}}),dp(m,function(){return".".concat(m.styledComponentId)}),a&&Ty(m,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),m}function Gm(e,t){for(var n=[e[0]],i=0,r=t.length;i<r;i+=1)n.push(t[i],e[i+1]);return n}var zm=function(e){return Object.assign(e,{isCss:!0})};function fp(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Fr(e)||io(e))return zm(si(Gm(Vl,Ir([e],t,!0))));var i=e;return t.length===0&&i.length===1&&typeof i[0]=="string"?si(i):zm(si(Gm(i,t)))}function yu(e,t,n){if(n===void 0&&(n=Nr),!t)throw go(1,t);var i=function(r){for(var a=[],o=1;o<arguments.length;o++)a[o-1]=arguments[o];return e(t,n,fp.apply(void 0,Ir([r],a,!1)))};return i.attrs=function(r){return yu(e,t,ot(ot({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)}))},i.withConfig=function(r){return yu(e,t,ot(ot({},n),r))},i}var Ly=function(e){return yu(D7,e)},k=Ly;wy.forEach(function(e){k[e]=Ly(e)});var V7=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=My(t),nl.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,i,r){var a=r(el(si(this.rules,n,i,r)),""),o=this.componentId+t;i.insertRules(o,o,a)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,i,r){t>2&&nl.registerId(this.componentId+t),this.removeStyles(t,i),this.createStyles(t,n,i,r)},e}();function Yr(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var i=fp.apply(void 0,Ir([e],t,!1)),r="sc-global-".concat(lp(JSON.stringify(i))),a=new V7(i,r),o=function(l){var d=xu(),u=ee.useContext(up),f=ee.useRef(d.styleSheet.allocateGSInstance(r)).current;return d.styleSheet.server&&s(f,l,d.styleSheet,u,d.stylis),ee.useLayoutEffect(function(){if(!d.styleSheet.server)return s(f,l,d.styleSheet,u,d.stylis),function(){return a.removeStyles(f,d.styleSheet)}},[f,l,d.styleSheet,u,d.stylis]),null};function s(l,d,u,f,p){if(a.isStatic)a.renderStyles(l,s7,u,p);else{var g=ot(ot({},d),{theme:yy(d,f,o.defaultProps)});a.renderStyles(l,g,u,p)}}return ee.memo(o)}function mn(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var i=el(fp.apply(void 0,Ir([e],t,!1))),r=lp(i);return new Gy(r,i)}function _m(e){return e!==null&&typeof e=="object"&&"constructor"in e&&e.constructor===Object}function pp(e,t){e===void 0&&(e={}),t===void 0&&(t={}),Object.keys(t).forEach(n=>{typeof e[n]>"u"?e[n]=t[n]:_m(t[n])&&_m(e[n])&&Object.keys(t[n]).length>0&&pp(e[n],t[n])})}const Oy={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function _n(){const e=typeof document<"u"?document:{};return pp(e,Oy),e}const N7={document:Oy,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(e){return typeof setTimeout>"u"?(e(),null):setTimeout(e,0)},cancelAnimationFrame(e){typeof setTimeout>"u"||clearTimeout(e)}};function Gt(){const e=typeof window<"u"?window:{};return pp(e,N7),e}function F7(e){return e===void 0&&(e=""),e.trim().split(" ").filter(t=>!!t.trim())}function $7(e){const t=e;Object.keys(t).forEach(n=>{try{t[n]=null}catch{}try{delete t[n]}catch{}})}function wu(e,t){return t===void 0&&(t=0),setTimeout(e,t)}function il(){return Date.now()}function B7(e){const t=Gt();let n;return t.getComputedStyle&&(n=t.getComputedStyle(e,null)),!n&&e.currentStyle&&(n=e.currentStyle),n||(n=e.style),n}function H7(e,t){t===void 0&&(t="x");const n=Gt();let i,r,a;const o=B7(e);return n.WebKitCSSMatrix?(r=o.transform||o.webkitTransform,r.split(",").length>6&&(r=r.split(", ").map(s=>s.replace(",",".")).join(", ")),a=new n.WebKitCSSMatrix(r==="none"?"":r)):(a=o.MozTransform||o.OTransform||o.MsTransform||o.msTransform||o.transform||o.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),i=a.toString().split(",")),t==="x"&&(n.WebKitCSSMatrix?r=a.m41:i.length===16?r=parseFloat(i[12]):r=parseFloat(i[4])),t==="y"&&(n.WebKitCSSMatrix?r=a.m42:i.length===16?r=parseFloat(i[13]):r=parseFloat(i[5])),r||0}function Bo(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"}function U7(e){return typeof window<"u"&&typeof window.HTMLElement<"u"?e instanceof HTMLElement:e&&(e.nodeType===1||e.nodeType===11)}function jt(){const e=Object(arguments.length<=0?void 0:arguments[0]),t=["__proto__","constructor","prototype"];for(let n=1;n<arguments.length;n+=1){const i=n<0||arguments.length<=n?void 0:arguments[n];if(i!=null&&!U7(i)){const r=Object.keys(Object(i)).filter(a=>t.indexOf(a)<0);for(let a=0,o=r.length;a<o;a+=1){const s=r[a],l=Object.getOwnPropertyDescriptor(i,s);l!==void 0&&l.enumerable&&(Bo(e[s])&&Bo(i[s])?i[s].__swiper__?e[s]=i[s]:jt(e[s],i[s]):!Bo(e[s])&&Bo(i[s])?(e[s]={},i[s].__swiper__?e[s]=i[s]:jt(e[s],i[s])):e[s]=i[s])}}}return e}function Ho(e,t,n){e.style.setProperty(t,n)}function Iy(e){let{swiper:t,targetPosition:n,side:i}=e;const r=Gt(),a=-t.translate;let o=null,s;const l=t.params.speed;t.wrapperEl.style.scrollSnapType="none",r.cancelAnimationFrame(t.cssModeFrameID);const d=n>a?"next":"prev",u=(p,g)=>d==="next"&&p>=g||d==="prev"&&p<=g,f=()=>{s=new Date().getTime(),o===null&&(o=s);const p=Math.max(Math.min((s-o)/l,1),0),g=.5-Math.cos(p*Math.PI)/2;let x=a+g*(n-a);if(u(x,n)&&(x=n),t.wrapperEl.scrollTo({[i]:x}),u(x,n)){t.wrapperEl.style.overflow="hidden",t.wrapperEl.style.scrollSnapType="",setTimeout(()=>{t.wrapperEl.style.overflow="",t.wrapperEl.scrollTo({[i]:x})}),r.cancelAnimationFrame(t.cssModeFrameID);return}t.cssModeFrameID=r.requestAnimationFrame(f)};f()}function hp(e){return e.querySelector(".swiper-slide-transform")||e.shadowRoot&&e.shadowRoot.querySelector(".swiper-slide-transform")||e}function cn(e,t){t===void 0&&(t="");const n=[...e.children];return e instanceof HTMLSlotElement&&n.push(...e.assignedElements()),t?n.filter(i=>i.matches(t)):n}function W7(e,t){const n=t.contains(e);return!n&&t instanceof HTMLSlotElement?[...t.assignedElements()].includes(e):n}function rl(e){try{console.warn(e);return}catch{}}function ro(e,t){t===void 0&&(t=[]);const n=document.createElement(e);return n.classList.add(...Array.isArray(t)?t:F7(t)),n}function q7(e,t){const n=[];for(;e.previousElementSibling;){const i=e.previousElementSibling;t?i.matches(t)&&n.push(i):n.push(i),e=i}return n}function Y7(e,t){const n=[];for(;e.nextElementSibling;){const i=e.nextElementSibling;t?i.matches(t)&&n.push(i):n.push(i),e=i}return n}function Qn(e,t){return Gt().getComputedStyle(e,null).getPropertyValue(t)}function al(e){let t=e,n;if(t){for(n=0;(t=t.previousSibling)!==null;)t.nodeType===1&&(n+=1);return n}}function Ry(e,t){const n=[];let i=e.parentElement;for(;i;)t?i.matches(t)&&n.push(i):n.push(i),i=i.parentElement;return n}function bu(e,t,n){const i=Gt();return e[t==="width"?"offsetWidth":"offsetHeight"]+parseFloat(i.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-right":"margin-top"))+parseFloat(i.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-left":"margin-bottom"))}function Ue(e){return(Array.isArray(e)?e:[e]).filter(t=>!!t)}function K7(e){return t=>Math.abs(t)>0&&e.browser&&e.browser.need3dFix&&Math.abs(t)%90===0?t+.001:t}let $c;function X7(){const e=Gt(),t=_n();return{smoothScroll:t.documentElement&&t.documentElement.style&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch)}}function Dy(){return $c||($c=X7()),$c}let Bc;function Q7(e){let{userAgent:t}=e===void 0?{}:e;const n=Dy(),i=Gt(),r=i.navigator.platform,a=t||i.navigator.userAgent,o={ios:!1,android:!1},s=i.screen.width,l=i.screen.height,d=a.match(/(Android);?[\s\/]+([\d.]+)?/);let u=a.match(/(iPad).*OS\s([\d_]+)/);const f=a.match(/(iPod)(.*OS\s([\d_]+))?/),p=!u&&a.match(/(iPhone\sOS|iOS)\s([\d_]+)/),g=r==="Win32";let x=r==="MacIntel";const y=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!u&&x&&n.touch&&y.indexOf(`${s}x${l}`)>=0&&(u=a.match(/(Version)\/([\d.]+)/),u||(u=[0,1,"13_0_0"]),x=!1),d&&!g&&(o.os="android",o.android=!0),(u||p||f)&&(o.os="ios",o.ios=!0),o}function Vy(e){return e===void 0&&(e={}),Bc||(Bc=Q7(e)),Bc}let Hc;function Z7(){const e=Gt(),t=Vy();let n=!1;function i(){const s=e.navigator.userAgent.toLowerCase();return s.indexOf("safari")>=0&&s.indexOf("chrome")<0&&s.indexOf("android")<0}if(i()){const s=String(e.navigator.userAgent);if(s.includes("Version/")){const[l,d]=s.split("Version/")[1].split(" ")[0].split(".").map(u=>Number(u));n=l<16||l===16&&d<2}}const r=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),a=i(),o=a||r&&t.ios;return{isSafari:n||a,needPerspectiveFix:n,need3dFix:o,isWebView:r}}function J7(){return Hc||(Hc=Z7()),Hc}function ej(e){let{swiper:t,on:n,emit:i}=e;const r=Gt();let a=null,o=null;const s=()=>{!t||t.destroyed||!t.initialized||(i("beforeResize"),i("resize"))},l=()=>{!t||t.destroyed||!t.initialized||(a=new ResizeObserver(f=>{o=r.requestAnimationFrame(()=>{const{width:p,height:g}=t;let x=p,y=g;f.forEach(b=>{let{contentBoxSize:v,contentRect:h,target:m}=b;m&&m!==t.el||(x=h?h.width:(v[0]||v).inlineSize,y=h?h.height:(v[0]||v).blockSize)}),(x!==p||y!==g)&&s()})}),a.observe(t.el))},d=()=>{o&&r.cancelAnimationFrame(o),a&&a.unobserve&&t.el&&(a.unobserve(t.el),a=null)},u=()=>{!t||t.destroyed||!t.initialized||i("orientationchange")};n("init",()=>{if(t.params.resizeObserver&&typeof r.ResizeObserver<"u"){l();return}r.addEventListener("resize",s),r.addEventListener("orientationchange",u)}),n("destroy",()=>{d(),r.removeEventListener("resize",s),r.removeEventListener("orientationchange",u)})}function tj(e){let{swiper:t,extendParams:n,on:i,emit:r}=e;const a=[],o=Gt(),s=function(u,f){f===void 0&&(f={});const p=o.MutationObserver||o.WebkitMutationObserver,g=new p(x=>{if(t.__preventObserver__)return;if(x.length===1){r("observerUpdate",x[0]);return}const y=function(){r("observerUpdate",x[0])};o.requestAnimationFrame?o.requestAnimationFrame(y):o.setTimeout(y,0)});g.observe(u,{attributes:typeof f.attributes>"u"?!0:f.attributes,childList:t.isElement||(typeof f.childList>"u"?!0:f).childList,characterData:typeof f.characterData>"u"?!0:f.characterData}),a.push(g)},l=()=>{if(t.params.observer){if(t.params.observeParents){const u=Ry(t.hostEl);for(let f=0;f<u.length;f+=1)s(u[f])}s(t.hostEl,{childList:t.params.observeSlideChildren}),s(t.wrapperEl,{attributes:!1})}},d=()=>{a.forEach(u=>{u.disconnect()}),a.splice(0,a.length)};n({observer:!1,observeParents:!1,observeSlideChildren:!1}),i("init",l),i("destroy",d)}var nj={on(e,t,n){const i=this;if(!i.eventsListeners||i.destroyed||typeof t!="function")return i;const r=n?"unshift":"push";return e.split(" ").forEach(a=>{i.eventsListeners[a]||(i.eventsListeners[a]=[]),i.eventsListeners[a][r](t)}),i},once(e,t,n){const i=this;if(!i.eventsListeners||i.destroyed||typeof t!="function")return i;function r(){i.off(e,r),r.__emitterProxy&&delete r.__emitterProxy;for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];t.apply(i,o)}return r.__emitterProxy=t,i.on(e,r,n)},onAny(e,t){const n=this;if(!n.eventsListeners||n.destroyed||typeof e!="function")return n;const i=t?"unshift":"push";return n.eventsAnyListeners.indexOf(e)<0&&n.eventsAnyListeners[i](e),n},offAny(e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsAnyListeners)return t;const n=t.eventsAnyListeners.indexOf(e);return n>=0&&t.eventsAnyListeners.splice(n,1),t},off(e,t){const n=this;return!n.eventsListeners||n.destroyed||!n.eventsListeners||e.split(" ").forEach(i=>{typeof t>"u"?n.eventsListeners[i]=[]:n.eventsListeners[i]&&n.eventsListeners[i].forEach((r,a)=>{(r===t||r.__emitterProxy&&r.__emitterProxy===t)&&n.eventsListeners[i].splice(a,1)})}),n},emit(){const e=this;if(!e.eventsListeners||e.destroyed||!e.eventsListeners)return e;let t,n,i;for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return typeof a[0]=="string"||Array.isArray(a[0])?(t=a[0],n=a.slice(1,a.length),i=e):(t=a[0].events,n=a[0].data,i=a[0].context||e),n.unshift(i),(Array.isArray(t)?t:t.split(" ")).forEach(l=>{e.eventsAnyListeners&&e.eventsAnyListeners.length&&e.eventsAnyListeners.forEach(d=>{d.apply(i,[l,...n])}),e.eventsListeners&&e.eventsListeners[l]&&e.eventsListeners[l].forEach(d=>{d.apply(i,n)})}),e}};function ij(){const e=this;let t,n;const i=e.el;typeof e.params.width<"u"&&e.params.width!==null?t=e.params.width:t=i.clientWidth,typeof e.params.height<"u"&&e.params.height!==null?n=e.params.height:n=i.clientHeight,!(t===0&&e.isHorizontal()||n===0&&e.isVertical())&&(t=t-parseInt(Qn(i,"padding-left")||0,10)-parseInt(Qn(i,"padding-right")||0,10),n=n-parseInt(Qn(i,"padding-top")||0,10)-parseInt(Qn(i,"padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(n)&&(n=0),Object.assign(e,{width:t,height:n,size:e.isHorizontal()?t:n}))}function rj(){const e=this;function t(E,P){return parseFloat(E.getPropertyValue(e.getDirectionLabel(P))||0)}const n=e.params,{wrapperEl:i,slidesEl:r,size:a,rtlTranslate:o,wrongRTL:s}=e,l=e.virtual&&n.virtual.enabled,d=l?e.virtual.slides.length:e.slides.length,u=cn(r,`.${e.params.slideClass}, swiper-slide`),f=l?e.virtual.slides.length:u.length;let p=[];const g=[],x=[];let y=n.slidesOffsetBefore;typeof y=="function"&&(y=n.slidesOffsetBefore.call(e));let b=n.slidesOffsetAfter;typeof b=="function"&&(b=n.slidesOffsetAfter.call(e));const v=e.snapGrid.length,h=e.slidesGrid.length;let m=n.spaceBetween,w=-y,S=0,C=0;if(typeof a>"u")return;typeof m=="string"&&m.indexOf("%")>=0?m=parseFloat(m.replace("%",""))/100*a:typeof m=="string"&&(m=parseFloat(m)),e.virtualSize=-m,u.forEach(E=>{o?E.style.marginLeft="":E.style.marginRight="",E.style.marginBottom="",E.style.marginTop=""}),n.centeredSlides&&n.cssMode&&(Ho(i,"--swiper-centered-offset-before",""),Ho(i,"--swiper-centered-offset-after",""));const A=n.grid&&n.grid.rows>1&&e.grid;A?e.grid.initSlides(u):e.grid&&e.grid.unsetSlides();let T;const z=n.slidesPerView==="auto"&&n.breakpoints&&Object.keys(n.breakpoints).filter(E=>typeof n.breakpoints[E].slidesPerView<"u").length>0;for(let E=0;E<f;E+=1){T=0;let P;if(u[E]&&(P=u[E]),A&&e.grid.updateSlide(E,P,u),!(u[E]&&Qn(P,"display")==="none")){if(n.slidesPerView==="auto"){z&&(u[E].style[e.getDirectionLabel("width")]="");const _=getComputedStyle(P),I=P.style.transform,R=P.style.webkitTransform;if(I&&(P.style.transform="none"),R&&(P.style.webkitTransform="none"),n.roundLengths)T=e.isHorizontal()?bu(P,"width"):bu(P,"height");else{const U=t(_,"width"),Z=t(_,"padding-left"),Y=t(_,"padding-right"),M=t(_,"margin-left"),V=t(_,"margin-right"),$=_.getPropertyValue("box-sizing");if($&&$==="border-box")T=U+M+V;else{const{clientWidth:K,offsetWidth:J}=P;T=U+Z+Y+M+V+(J-K)}}I&&(P.style.transform=I),R&&(P.style.webkitTransform=R),n.roundLengths&&(T=Math.floor(T))}else T=(a-(n.slidesPerView-1)*m)/n.slidesPerView,n.roundLengths&&(T=Math.floor(T)),u[E]&&(u[E].style[e.getDirectionLabel("width")]=`${T}px`);u[E]&&(u[E].swiperSlideSize=T),x.push(T),n.centeredSlides?(w=w+T/2+S/2+m,S===0&&E!==0&&(w=w-a/2-m),E===0&&(w=w-a/2-m),Math.abs(w)<1/1e3&&(w=0),n.roundLengths&&(w=Math.floor(w)),C%n.slidesPerGroup===0&&p.push(w),g.push(w)):(n.roundLengths&&(w=Math.floor(w)),(C-Math.min(e.params.slidesPerGroupSkip,C))%e.params.slidesPerGroup===0&&p.push(w),g.push(w),w=w+T+m),e.virtualSize+=T+m,S=T,C+=1}}if(e.virtualSize=Math.max(e.virtualSize,a)+b,o&&s&&(n.effect==="slide"||n.effect==="coverflow")&&(i.style.width=`${e.virtualSize+m}px`),n.setWrapperSize&&(i.style[e.getDirectionLabel("width")]=`${e.virtualSize+m}px`),A&&e.grid.updateWrapperSize(T,p),!n.centeredSlides){const E=[];for(let P=0;P<p.length;P+=1){let _=p[P];n.roundLengths&&(_=Math.floor(_)),p[P]<=e.virtualSize-a&&E.push(_)}p=E,Math.floor(e.virtualSize-a)-Math.floor(p[p.length-1])>1&&p.push(e.virtualSize-a)}if(l&&n.loop){const E=x[0]+m;if(n.slidesPerGroup>1){const P=Math.ceil((e.virtual.slidesBefore+e.virtual.slidesAfter)/n.slidesPerGroup),_=E*n.slidesPerGroup;for(let I=0;I<P;I+=1)p.push(p[p.length-1]+_)}for(let P=0;P<e.virtual.slidesBefore+e.virtual.slidesAfter;P+=1)n.slidesPerGroup===1&&p.push(p[p.length-1]+E),g.push(g[g.length-1]+E),e.virtualSize+=E}if(p.length===0&&(p=[0]),m!==0){const E=e.isHorizontal()&&o?"marginLeft":e.getDirectionLabel("marginRight");u.filter((P,_)=>!n.cssMode||n.loop?!0:_!==u.length-1).forEach(P=>{P.style[E]=`${m}px`})}if(n.centeredSlides&&n.centeredSlidesBounds){let E=0;x.forEach(_=>{E+=_+(m||0)}),E-=m;const P=E>a?E-a:0;p=p.map(_=>_<=0?-y:_>P?P+b:_)}if(n.centerInsufficientSlides){let E=0;x.forEach(_=>{E+=_+(m||0)}),E-=m;const P=(n.slidesOffsetBefore||0)+(n.slidesOffsetAfter||0);if(E+P<a){const _=(a-E-P)/2;p.forEach((I,R)=>{p[R]=I-_}),g.forEach((I,R)=>{g[R]=I+_})}}if(Object.assign(e,{slides:u,snapGrid:p,slidesGrid:g,slidesSizesGrid:x}),n.centeredSlides&&n.cssMode&&!n.centeredSlidesBounds){Ho(i,"--swiper-centered-offset-before",`${-p[0]}px`),Ho(i,"--swiper-centered-offset-after",`${e.size/2-x[x.length-1]/2}px`);const E=-e.snapGrid[0],P=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map(_=>_+E),e.slidesGrid=e.slidesGrid.map(_=>_+P)}if(f!==d&&e.emit("slidesLengthChange"),p.length!==v&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),g.length!==h&&e.emit("slidesGridLengthChange"),n.watchSlidesProgress&&e.updateSlidesOffset(),e.emit("slidesUpdated"),!l&&!n.cssMode&&(n.effect==="slide"||n.effect==="fade")){const E=`${n.containerModifierClass}backface-hidden`,P=e.el.classList.contains(E);f<=n.maxBackfaceHiddenSlides?P||e.el.classList.add(E):P&&e.el.classList.remove(E)}}function aj(e){const t=this,n=[],i=t.virtual&&t.params.virtual.enabled;let r=0,a;typeof e=="number"?t.setTransition(e):e===!0&&t.setTransition(t.params.speed);const o=s=>i?t.slides[t.getSlideIndexByData(s)]:t.slides[s];if(t.params.slidesPerView!=="auto"&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||[]).forEach(s=>{n.push(s)});else for(a=0;a<Math.ceil(t.params.slidesPerView);a+=1){const s=t.activeIndex+a;if(s>t.slides.length&&!i)break;n.push(o(s))}else n.push(o(t.activeIndex));for(a=0;a<n.length;a+=1)if(typeof n[a]<"u"){const s=n[a].offsetHeight;r=s>r?s:r}(r||r===0)&&(t.wrapperEl.style.height=`${r}px`)}function oj(){const e=this,t=e.slides,n=e.isElement?e.isHorizontal()?e.wrapperEl.offsetLeft:e.wrapperEl.offsetTop:0;for(let i=0;i<t.length;i+=1)t[i].swiperSlideOffset=(e.isHorizontal()?t[i].offsetLeft:t[i].offsetTop)-n-e.cssOverflowAdjustment()}const Mm=(e,t,n)=>{t&&!e.classList.contains(n)?e.classList.add(n):!t&&e.classList.contains(n)&&e.classList.remove(n)};function sj(e){e===void 0&&(e=this&&this.translate||0);const t=this,n=t.params,{slides:i,rtlTranslate:r,snapGrid:a}=t;if(i.length===0)return;typeof i[0].swiperSlideOffset>"u"&&t.updateSlidesOffset();let o=-e;r&&(o=e),t.visibleSlidesIndexes=[],t.visibleSlides=[];let s=n.spaceBetween;typeof s=="string"&&s.indexOf("%")>=0?s=parseFloat(s.replace("%",""))/100*t.size:typeof s=="string"&&(s=parseFloat(s));for(let l=0;l<i.length;l+=1){const d=i[l];let u=d.swiperSlideOffset;n.cssMode&&n.centeredSlides&&(u-=i[0].swiperSlideOffset);const f=(o+(n.centeredSlides?t.minTranslate():0)-u)/(d.swiperSlideSize+s),p=(o-a[0]+(n.centeredSlides?t.minTranslate():0)-u)/(d.swiperSlideSize+s),g=-(o-u),x=g+t.slidesSizesGrid[l],y=g>=0&&g<=t.size-t.slidesSizesGrid[l],b=g>=0&&g<t.size-1||x>1&&x<=t.size||g<=0&&x>=t.size;b&&(t.visibleSlides.push(d),t.visibleSlidesIndexes.push(l)),Mm(d,b,n.slideVisibleClass),Mm(d,y,n.slideFullyVisibleClass),d.progress=r?-f:f,d.originalProgress=r?-p:p}}function lj(e){const t=this;if(typeof e>"u"){const u=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*u||0}const n=t.params,i=t.maxTranslate()-t.minTranslate();let{progress:r,isBeginning:a,isEnd:o,progressLoop:s}=t;const l=a,d=o;if(i===0)r=0,a=!0,o=!0;else{r=(e-t.minTranslate())/i;const u=Math.abs(e-t.minTranslate())<1,f=Math.abs(e-t.maxTranslate())<1;a=u||r<=0,o=f||r>=1,u&&(r=0),f&&(r=1)}if(n.loop){const u=t.getSlideIndexByData(0),f=t.getSlideIndexByData(t.slides.length-1),p=t.slidesGrid[u],g=t.slidesGrid[f],x=t.slidesGrid[t.slidesGrid.length-1],y=Math.abs(e);y>=p?s=(y-p)/x:s=(y+x-g)/x,s>1&&(s-=1)}Object.assign(t,{progress:r,progressLoop:s,isBeginning:a,isEnd:o}),(n.watchSlidesProgress||n.centeredSlides&&n.autoHeight)&&t.updateSlidesProgress(e),a&&!l&&t.emit("reachBeginning toEdge"),o&&!d&&t.emit("reachEnd toEdge"),(l&&!a||d&&!o)&&t.emit("fromEdge"),t.emit("progress",r)}const Uc=(e,t,n)=>{t&&!e.classList.contains(n)?e.classList.add(n):!t&&e.classList.contains(n)&&e.classList.remove(n)};function cj(){const e=this,{slides:t,params:n,slidesEl:i,activeIndex:r}=e,a=e.virtual&&n.virtual.enabled,o=e.grid&&n.grid&&n.grid.rows>1,s=f=>cn(i,`.${n.slideClass}${f}, swiper-slide${f}`)[0];let l,d,u;if(a)if(n.loop){let f=r-e.virtual.slidesBefore;f<0&&(f=e.virtual.slides.length+f),f>=e.virtual.slides.length&&(f-=e.virtual.slides.length),l=s(`[data-swiper-slide-index="${f}"]`)}else l=s(`[data-swiper-slide-index="${r}"]`);else o?(l=t.filter(f=>f.column===r)[0],u=t.filter(f=>f.column===r+1)[0],d=t.filter(f=>f.column===r-1)[0]):l=t[r];l&&(o||(u=Y7(l,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!u&&(u=t[0]),d=q7(l,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!d===0&&(d=t[t.length-1]))),t.forEach(f=>{Uc(f,f===l,n.slideActiveClass),Uc(f,f===u,n.slideNextClass),Uc(f,f===d,n.slidePrevClass)}),e.emitSlidesClasses()}const ms=(e,t)=>{if(!e||e.destroyed||!e.params)return;const n=()=>e.isElement?"swiper-slide":`.${e.params.slideClass}`,i=t.closest(n());if(i){let r=i.querySelector(`.${e.params.lazyPreloaderClass}`);!r&&e.isElement&&(i.shadowRoot?r=i.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{i.shadowRoot&&(r=i.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`),r&&r.remove())})),r&&r.remove()}},Wc=(e,t)=>{if(!e.slides[t])return;const n=e.slides[t].querySelector('[loading="lazy"]');n&&n.removeAttribute("loading")},Su=e=>{if(!e||e.destroyed||!e.params)return;let t=e.params.lazyPreloadPrevNext;const n=e.slides.length;if(!n||!t||t<0)return;t=Math.min(t,n);const i=e.params.slidesPerView==="auto"?e.slidesPerViewDynamic():Math.ceil(e.params.slidesPerView),r=e.activeIndex;if(e.params.grid&&e.params.grid.rows>1){const o=r,s=[o-t];s.push(...Array.from({length:t}).map((l,d)=>o+i+d)),e.slides.forEach((l,d)=>{s.includes(l.column)&&Wc(e,d)});return}const a=r+i-1;if(e.params.rewind||e.params.loop)for(let o=r-t;o<=a+t;o+=1){const s=(o%n+n)%n;(s<r||s>a)&&Wc(e,s)}else for(let o=Math.max(r-t,0);o<=Math.min(a+t,n-1);o+=1)o!==r&&(o>a||o<r)&&Wc(e,o)};function dj(e){const{slidesGrid:t,params:n}=e,i=e.rtlTranslate?e.translate:-e.translate;let r;for(let a=0;a<t.length;a+=1)typeof t[a+1]<"u"?i>=t[a]&&i<t[a+1]-(t[a+1]-t[a])/2?r=a:i>=t[a]&&i<t[a+1]&&(r=a+1):i>=t[a]&&(r=a);return n.normalizeSlideIndex&&(r<0||typeof r>"u")&&(r=0),r}function uj(e){const t=this,n=t.rtlTranslate?t.translate:-t.translate,{snapGrid:i,params:r,activeIndex:a,realIndex:o,snapIndex:s}=t;let l=e,d;const u=g=>{let x=g-t.virtual.slidesBefore;return x<0&&(x=t.virtual.slides.length+x),x>=t.virtual.slides.length&&(x-=t.virtual.slides.length),x};if(typeof l>"u"&&(l=dj(t)),i.indexOf(n)>=0)d=i.indexOf(n);else{const g=Math.min(r.slidesPerGroupSkip,l);d=g+Math.floor((l-g)/r.slidesPerGroup)}if(d>=i.length&&(d=i.length-1),l===a&&!t.params.loop){d!==s&&(t.snapIndex=d,t.emit("snapIndexChange"));return}if(l===a&&t.params.loop&&t.virtual&&t.params.virtual.enabled){t.realIndex=u(l);return}const f=t.grid&&r.grid&&r.grid.rows>1;let p;if(t.virtual&&r.virtual.enabled&&r.loop)p=u(l);else if(f){const g=t.slides.filter(y=>y.column===l)[0];let x=parseInt(g.getAttribute("data-swiper-slide-index"),10);Number.isNaN(x)&&(x=Math.max(t.slides.indexOf(g),0)),p=Math.floor(x/r.grid.rows)}else if(t.slides[l]){const g=t.slides[l].getAttribute("data-swiper-slide-index");g?p=parseInt(g,10):p=l}else p=l;Object.assign(t,{previousSnapIndex:s,snapIndex:d,previousRealIndex:o,realIndex:p,previousIndex:a,activeIndex:l}),t.initialized&&Su(t),t.emit("activeIndexChange"),t.emit("snapIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&(o!==p&&t.emit("realIndexChange"),t.emit("slideChange"))}function fj(e,t){const n=this,i=n.params;let r=e.closest(`.${i.slideClass}, swiper-slide`);!r&&n.isElement&&t&&t.length>1&&t.includes(e)&&[...t.slice(t.indexOf(e)+1,t.length)].forEach(s=>{!r&&s.matches&&s.matches(`.${i.slideClass}, swiper-slide`)&&(r=s)});let a=!1,o;if(r){for(let s=0;s<n.slides.length;s+=1)if(n.slides[s]===r){a=!0,o=s;break}}if(r&&a)n.clickedSlide=r,n.virtual&&n.params.virtual.enabled?n.clickedIndex=parseInt(r.getAttribute("data-swiper-slide-index"),10):n.clickedIndex=o;else{n.clickedSlide=void 0,n.clickedIndex=void 0;return}i.slideToClickedSlide&&n.clickedIndex!==void 0&&n.clickedIndex!==n.activeIndex&&n.slideToClickedSlide()}var pj={updateSize:ij,updateSlides:rj,updateAutoHeight:aj,updateSlidesOffset:oj,updateSlidesProgress:sj,updateProgress:lj,updateSlidesClasses:cj,updateActiveIndex:uj,updateClickedSlide:fj};function hj(e){e===void 0&&(e=this.isHorizontal()?"x":"y");const t=this,{params:n,rtlTranslate:i,translate:r,wrapperEl:a}=t;if(n.virtualTranslate)return i?-r:r;if(n.cssMode)return r;let o=H7(a,e);return o+=t.cssOverflowAdjustment(),i&&(o=-o),o||0}function mj(e,t){const n=this,{rtlTranslate:i,params:r,wrapperEl:a,progress:o}=n;let s=0,l=0;const d=0;n.isHorizontal()?s=i?-e:e:l=e,r.roundLengths&&(s=Math.floor(s),l=Math.floor(l)),n.previousTranslate=n.translate,n.translate=n.isHorizontal()?s:l,r.cssMode?a[n.isHorizontal()?"scrollLeft":"scrollTop"]=n.isHorizontal()?-s:-l:r.virtualTranslate||(n.isHorizontal()?s-=n.cssOverflowAdjustment():l-=n.cssOverflowAdjustment(),a.style.transform=`translate3d(${s}px, ${l}px, ${d}px)`);let u;const f=n.maxTranslate()-n.minTranslate();f===0?u=0:u=(e-n.minTranslate())/f,u!==o&&n.updateProgress(e),n.emit("setTranslate",n.translate,t)}function gj(){return-this.snapGrid[0]}function vj(){return-this.snapGrid[this.snapGrid.length-1]}function xj(e,t,n,i,r){e===void 0&&(e=0),t===void 0&&(t=this.params.speed),n===void 0&&(n=!0),i===void 0&&(i=!0);const a=this,{params:o,wrapperEl:s}=a;if(a.animating&&o.preventInteractionOnTransition)return!1;const l=a.minTranslate(),d=a.maxTranslate();let u;if(i&&e>l?u=l:i&&e<d?u=d:u=e,a.updateProgress(u),o.cssMode){const f=a.isHorizontal();if(t===0)s[f?"scrollLeft":"scrollTop"]=-u;else{if(!a.support.smoothScroll)return Iy({swiper:a,targetPosition:-u,side:f?"left":"top"}),!0;s.scrollTo({[f?"left":"top"]:-u,behavior:"smooth"})}return!0}return t===0?(a.setTransition(0),a.setTranslate(u),n&&(a.emit("beforeTransitionStart",t,r),a.emit("transitionEnd"))):(a.setTransition(t),a.setTranslate(u),n&&(a.emit("beforeTransitionStart",t,r),a.emit("transitionStart")),a.animating||(a.animating=!0,a.onTranslateToWrapperTransitionEnd||(a.onTranslateToWrapperTransitionEnd=function(p){!a||a.destroyed||p.target===this&&(a.wrapperEl.removeEventListener("transitionend",a.onTranslateToWrapperTransitionEnd),a.onTranslateToWrapperTransitionEnd=null,delete a.onTranslateToWrapperTransitionEnd,a.animating=!1,n&&a.emit("transitionEnd"))}),a.wrapperEl.addEventListener("transitionend",a.onTranslateToWrapperTransitionEnd))),!0}var yj={getTranslate:hj,setTranslate:mj,minTranslate:gj,maxTranslate:vj,translateTo:xj};function wj(e,t){const n=this;n.params.cssMode||(n.wrapperEl.style.transitionDuration=`${e}ms`,n.wrapperEl.style.transitionDelay=e===0?"0ms":""),n.emit("setTransition",e,t)}function Ny(e){let{swiper:t,runCallbacks:n,direction:i,step:r}=e;const{activeIndex:a,previousIndex:o}=t;let s=i;if(s||(a>o?s="next":a<o?s="prev":s="reset"),t.emit(`transition${r}`),n&&a!==o){if(s==="reset"){t.emit(`slideResetTransition${r}`);return}t.emit(`slideChangeTransition${r}`),s==="next"?t.emit(`slideNextTransition${r}`):t.emit(`slidePrevTransition${r}`)}}function bj(e,t){e===void 0&&(e=!0);const n=this,{params:i}=n;i.cssMode||(i.autoHeight&&n.updateAutoHeight(),Ny({swiper:n,runCallbacks:e,direction:t,step:"Start"}))}function Sj(e,t){e===void 0&&(e=!0);const n=this,{params:i}=n;n.animating=!1,!i.cssMode&&(n.setTransition(0),Ny({swiper:n,runCallbacks:e,direction:t,step:"End"}))}var jj={setTransition:wj,transitionStart:bj,transitionEnd:Sj};function Cj(e,t,n,i,r){e===void 0&&(e=0),n===void 0&&(n=!0),typeof e=="string"&&(e=parseInt(e,10));const a=this;let o=e;o<0&&(o=0);const{params:s,snapGrid:l,slidesGrid:d,previousIndex:u,activeIndex:f,rtlTranslate:p,wrapperEl:g,enabled:x}=a;if(!x&&!i&&!r||a.destroyed||a.animating&&s.preventInteractionOnTransition)return!1;typeof t>"u"&&(t=a.params.speed);const y=Math.min(a.params.slidesPerGroupSkip,o);let b=y+Math.floor((o-y)/a.params.slidesPerGroup);b>=l.length&&(b=l.length-1);const v=-l[b];if(s.normalizeSlideIndex)for(let S=0;S<d.length;S+=1){const C=-Math.floor(v*100),A=Math.floor(d[S]*100),T=Math.floor(d[S+1]*100);typeof d[S+1]<"u"?C>=A&&C<T-(T-A)/2?o=S:C>=A&&C<T&&(o=S+1):C>=A&&(o=S)}if(a.initialized&&o!==f&&(!a.allowSlideNext&&(p?v>a.translate&&v>a.minTranslate():v<a.translate&&v<a.minTranslate())||!a.allowSlidePrev&&v>a.translate&&v>a.maxTranslate()&&(f||0)!==o))return!1;o!==(u||0)&&n&&a.emit("beforeSlideChangeStart"),a.updateProgress(v);let h;o>f?h="next":o<f?h="prev":h="reset";const m=a.virtual&&a.params.virtual.enabled;if(!(m&&r)&&(p&&-v===a.translate||!p&&v===a.translate))return a.updateActiveIndex(o),s.autoHeight&&a.updateAutoHeight(),a.updateSlidesClasses(),s.effect!=="slide"&&a.setTranslate(v),h!=="reset"&&(a.transitionStart(n,h),a.transitionEnd(n,h)),!1;if(s.cssMode){const S=a.isHorizontal(),C=p?v:-v;if(t===0)m&&(a.wrapperEl.style.scrollSnapType="none",a._immediateVirtual=!0),m&&!a._cssModeVirtualInitialSet&&a.params.initialSlide>0?(a._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{g[S?"scrollLeft":"scrollTop"]=C})):g[S?"scrollLeft":"scrollTop"]=C,m&&requestAnimationFrame(()=>{a.wrapperEl.style.scrollSnapType="",a._immediateVirtual=!1});else{if(!a.support.smoothScroll)return Iy({swiper:a,targetPosition:C,side:S?"left":"top"}),!0;g.scrollTo({[S?"left":"top"]:C,behavior:"smooth"})}return!0}return a.setTransition(t),a.setTranslate(v),a.updateActiveIndex(o),a.updateSlidesClasses(),a.emit("beforeTransitionStart",t,i),a.transitionStart(n,h),t===0?a.transitionEnd(n,h):a.animating||(a.animating=!0,a.onSlideToWrapperTransitionEnd||(a.onSlideToWrapperTransitionEnd=function(C){!a||a.destroyed||C.target===this&&(a.wrapperEl.removeEventListener("transitionend",a.onSlideToWrapperTransitionEnd),a.onSlideToWrapperTransitionEnd=null,delete a.onSlideToWrapperTransitionEnd,a.transitionEnd(n,h))}),a.wrapperEl.addEventListener("transitionend",a.onSlideToWrapperTransitionEnd)),!0}function kj(e,t,n,i){e===void 0&&(e=0),n===void 0&&(n=!0),typeof e=="string"&&(e=parseInt(e,10));const r=this;if(r.destroyed)return;typeof t>"u"&&(t=r.params.speed);const a=r.grid&&r.params.grid&&r.params.grid.rows>1;let o=e;if(r.params.loop)if(r.virtual&&r.params.virtual.enabled)o=o+r.virtual.slidesBefore;else{let s;if(a){const p=o*r.params.grid.rows;s=r.slides.filter(g=>g.getAttribute("data-swiper-slide-index")*1===p)[0].column}else s=r.getSlideIndexByData(o);const l=a?Math.ceil(r.slides.length/r.params.grid.rows):r.slides.length,{centeredSlides:d}=r.params;let u=r.params.slidesPerView;u==="auto"?u=r.slidesPerViewDynamic():(u=Math.ceil(parseFloat(r.params.slidesPerView,10)),d&&u%2===0&&(u=u+1));let f=l-s<u;if(d&&(f=f||s<Math.ceil(u/2)),i&&d&&r.params.slidesPerView!=="auto"&&!a&&(f=!1),f){const p=d?s<r.activeIndex?"prev":"next":s-r.activeIndex-1<r.params.slidesPerView?"next":"prev";r.loopFix({direction:p,slideTo:!0,activeSlideIndex:p==="next"?s+1:s-l+1,slideRealIndex:p==="next"?r.realIndex:void 0})}if(a){const p=o*r.params.grid.rows;o=r.slides.filter(g=>g.getAttribute("data-swiper-slide-index")*1===p)[0].column}else o=r.getSlideIndexByData(o)}return requestAnimationFrame(()=>{r.slideTo(o,t,n,i)}),r}function Tj(e,t,n){t===void 0&&(t=!0);const i=this,{enabled:r,params:a,animating:o}=i;if(!r||i.destroyed)return i;typeof e>"u"&&(e=i.params.speed);let s=a.slidesPerGroup;a.slidesPerView==="auto"&&a.slidesPerGroup===1&&a.slidesPerGroupAuto&&(s=Math.max(i.slidesPerViewDynamic("current",!0),1));const l=i.activeIndex<a.slidesPerGroupSkip?1:s,d=i.virtual&&a.virtual.enabled;if(a.loop){if(o&&!d&&a.loopPreventsSliding)return!1;if(i.loopFix({direction:"next"}),i._clientLeft=i.wrapperEl.clientLeft,i.activeIndex===i.slides.length-1&&a.cssMode)return requestAnimationFrame(()=>{i.slideTo(i.activeIndex+l,e,t,n)}),!0}return a.rewind&&i.isEnd?i.slideTo(0,e,t,n):i.slideTo(i.activeIndex+l,e,t,n)}function Aj(e,t,n){t===void 0&&(t=!0);const i=this,{params:r,snapGrid:a,slidesGrid:o,rtlTranslate:s,enabled:l,animating:d}=i;if(!l||i.destroyed)return i;typeof e>"u"&&(e=i.params.speed);const u=i.virtual&&r.virtual.enabled;if(r.loop){if(d&&!u&&r.loopPreventsSliding)return!1;i.loopFix({direction:"prev"}),i._clientLeft=i.wrapperEl.clientLeft}const f=s?i.translate:-i.translate;function p(v){return v<0?-Math.floor(Math.abs(v)):Math.floor(v)}const g=p(f),x=a.map(v=>p(v));let y=a[x.indexOf(g)-1];if(typeof y>"u"&&r.cssMode){let v;a.forEach((h,m)=>{g>=h&&(v=m)}),typeof v<"u"&&(y=a[v>0?v-1:v])}let b=0;if(typeof y<"u"&&(b=o.indexOf(y),b<0&&(b=i.activeIndex-1),r.slidesPerView==="auto"&&r.slidesPerGroup===1&&r.slidesPerGroupAuto&&(b=b-i.slidesPerViewDynamic("previous",!0)+1,b=Math.max(b,0))),r.rewind&&i.isBeginning){const v=i.params.virtual&&i.params.virtual.enabled&&i.virtual?i.virtual.slides.length-1:i.slides.length-1;return i.slideTo(v,e,t,n)}else if(r.loop&&i.activeIndex===0&&r.cssMode)return requestAnimationFrame(()=>{i.slideTo(b,e,t,n)}),!0;return i.slideTo(b,e,t,n)}function Ej(e,t,n){t===void 0&&(t=!0);const i=this;if(!i.destroyed)return typeof e>"u"&&(e=i.params.speed),i.slideTo(i.activeIndex,e,t,n)}function Pj(e,t,n,i){t===void 0&&(t=!0),i===void 0&&(i=.5);const r=this;if(r.destroyed)return;typeof e>"u"&&(e=r.params.speed);let a=r.activeIndex;const o=Math.min(r.params.slidesPerGroupSkip,a),s=o+Math.floor((a-o)/r.params.slidesPerGroup),l=r.rtlTranslate?r.translate:-r.translate;if(l>=r.snapGrid[s]){const d=r.snapGrid[s],u=r.snapGrid[s+1];l-d>(u-d)*i&&(a+=r.params.slidesPerGroup)}else{const d=r.snapGrid[s-1],u=r.snapGrid[s];l-d<=(u-d)*i&&(a-=r.params.slidesPerGroup)}return a=Math.max(a,0),a=Math.min(a,r.slidesGrid.length-1),r.slideTo(a,e,t,n)}function Gj(){const e=this;if(e.destroyed)return;const{params:t,slidesEl:n}=e,i=t.slidesPerView==="auto"?e.slidesPerViewDynamic():t.slidesPerView;let r=e.clickedIndex,a;const o=e.isElement?"swiper-slide":`.${t.slideClass}`;if(t.loop){if(e.animating)return;a=parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"),10),t.centeredSlides?r<e.loopedSlides-i/2||r>e.slides.length-e.loopedSlides+i/2?(e.loopFix(),r=e.getSlideIndex(cn(n,`${o}[data-swiper-slide-index="${a}"]`)[0]),wu(()=>{e.slideTo(r)})):e.slideTo(r):r>e.slides.length-i?(e.loopFix(),r=e.getSlideIndex(cn(n,`${o}[data-swiper-slide-index="${a}"]`)[0]),wu(()=>{e.slideTo(r)})):e.slideTo(r)}else e.slideTo(r)}var zj={slideTo:Cj,slideToLoop:kj,slideNext:Tj,slidePrev:Aj,slideReset:Ej,slideToClosest:Pj,slideToClickedSlide:Gj};function _j(e){const t=this,{params:n,slidesEl:i}=t;if(!n.loop||t.virtual&&t.params.virtual.enabled)return;const r=()=>{cn(i,`.${n.slideClass}, swiper-slide`).forEach((f,p)=>{f.setAttribute("data-swiper-slide-index",p)})},a=t.grid&&n.grid&&n.grid.rows>1,o=n.slidesPerGroup*(a?n.grid.rows:1),s=t.slides.length%o!==0,l=a&&t.slides.length%n.grid.rows!==0,d=u=>{for(let f=0;f<u;f+=1){const p=t.isElement?ro("swiper-slide",[n.slideBlankClass]):ro("div",[n.slideClass,n.slideBlankClass]);t.slidesEl.append(p)}};if(s){if(n.loopAddBlankSlides){const u=o-t.slides.length%o;d(u),t.recalcSlides(),t.updateSlides()}else rl("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");r()}else if(l){if(n.loopAddBlankSlides){const u=n.grid.rows-t.slides.length%n.grid.rows;d(u),t.recalcSlides(),t.updateSlides()}else rl("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");r()}else r();t.loopFix({slideRealIndex:e,direction:n.centeredSlides?void 0:"next"})}function Mj(e){let{slideRealIndex:t,slideTo:n=!0,direction:i,setTranslate:r,activeSlideIndex:a,byController:o,byMousewheel:s}=e===void 0?{}:e;const l=this;if(!l.params.loop)return;l.emit("beforeLoopFix");const{slides:d,allowSlidePrev:u,allowSlideNext:f,slidesEl:p,params:g}=l,{centeredSlides:x}=g;if(l.allowSlidePrev=!0,l.allowSlideNext=!0,l.virtual&&g.virtual.enabled){n&&(!g.centeredSlides&&l.snapIndex===0?l.slideTo(l.virtual.slides.length,0,!1,!0):g.centeredSlides&&l.snapIndex<g.slidesPerView?l.slideTo(l.virtual.slides.length+l.snapIndex,0,!1,!0):l.snapIndex===l.snapGrid.length-1&&l.slideTo(l.virtual.slidesBefore,0,!1,!0)),l.allowSlidePrev=u,l.allowSlideNext=f,l.emit("loopFix");return}let y=g.slidesPerView;y==="auto"?y=l.slidesPerViewDynamic():(y=Math.ceil(parseFloat(g.slidesPerView,10)),x&&y%2===0&&(y=y+1));const b=g.slidesPerGroupAuto?y:g.slidesPerGroup;let v=b;v%b!==0&&(v+=b-v%b),v+=g.loopAdditionalSlides,l.loopedSlides=v;const h=l.grid&&g.grid&&g.grid.rows>1;d.length<y+v?rl("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):h&&g.grid.fill==="row"&&rl("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const m=[],w=[];let S=l.activeIndex;typeof a>"u"?a=l.getSlideIndex(d.filter(I=>I.classList.contains(g.slideActiveClass))[0]):S=a;const C=i==="next"||!i,A=i==="prev"||!i;let T=0,z=0;const E=h?Math.ceil(d.length/g.grid.rows):d.length,_=(h?d[a].column:a)+(x&&typeof r>"u"?-y/2+.5:0);if(_<v){T=Math.max(v-_,b);for(let I=0;I<v-_;I+=1){const R=I-Math.floor(I/E)*E;if(h){const U=E-R-1;for(let Z=d.length-1;Z>=0;Z-=1)d[Z].column===U&&m.push(Z)}else m.push(E-R-1)}}else if(_+y>E-v){z=Math.max(_-(E-v*2),b);for(let I=0;I<z;I+=1){const R=I-Math.floor(I/E)*E;h?d.forEach((U,Z)=>{U.column===R&&w.push(Z)}):w.push(R)}}if(l.__preventObserver__=!0,requestAnimationFrame(()=>{l.__preventObserver__=!1}),A&&m.forEach(I=>{d[I].swiperLoopMoveDOM=!0,p.prepend(d[I]),d[I].swiperLoopMoveDOM=!1}),C&&w.forEach(I=>{d[I].swiperLoopMoveDOM=!0,p.append(d[I]),d[I].swiperLoopMoveDOM=!1}),l.recalcSlides(),g.slidesPerView==="auto"?l.updateSlides():h&&(m.length>0&&A||w.length>0&&C)&&l.slides.forEach((I,R)=>{l.grid.updateSlide(R,I,l.slides)}),g.watchSlidesProgress&&l.updateSlidesOffset(),n){if(m.length>0&&A){if(typeof t>"u"){const I=l.slidesGrid[S],U=l.slidesGrid[S+T]-I;s?l.setTranslate(l.translate-U):(l.slideTo(S+Math.ceil(T),0,!1,!0),r&&(l.touchEventsData.startTranslate=l.touchEventsData.startTranslate-U,l.touchEventsData.currentTranslate=l.touchEventsData.currentTranslate-U))}else if(r){const I=h?m.length/g.grid.rows:m.length;l.slideTo(l.activeIndex+I,0,!1,!0),l.touchEventsData.currentTranslate=l.translate}}else if(w.length>0&&C)if(typeof t>"u"){const I=l.slidesGrid[S],U=l.slidesGrid[S-z]-I;s?l.setTranslate(l.translate-U):(l.slideTo(S-z,0,!1,!0),r&&(l.touchEventsData.startTranslate=l.touchEventsData.startTranslate-U,l.touchEventsData.currentTranslate=l.touchEventsData.currentTranslate-U))}else{const I=h?w.length/g.grid.rows:w.length;l.slideTo(l.activeIndex-I,0,!1,!0)}}if(l.allowSlidePrev=u,l.allowSlideNext=f,l.controller&&l.controller.control&&!o){const I={slideRealIndex:t,direction:i,setTranslate:r,activeSlideIndex:a,byController:!0};Array.isArray(l.controller.control)?l.controller.control.forEach(R=>{!R.destroyed&&R.params.loop&&R.loopFix({...I,slideTo:R.params.slidesPerView===g.slidesPerView?n:!1})}):l.controller.control instanceof l.constructor&&l.controller.control.params.loop&&l.controller.control.loopFix({...I,slideTo:l.controller.control.params.slidesPerView===g.slidesPerView?n:!1})}l.emit("loopFix")}function Lj(){const e=this,{params:t,slidesEl:n}=e;if(!t.loop||e.virtual&&e.params.virtual.enabled)return;e.recalcSlides();const i=[];e.slides.forEach(r=>{const a=typeof r.swiperSlideIndex>"u"?r.getAttribute("data-swiper-slide-index")*1:r.swiperSlideIndex;i[a]=r}),e.slides.forEach(r=>{r.removeAttribute("data-swiper-slide-index")}),i.forEach(r=>{n.append(r)}),e.recalcSlides(),e.slideTo(e.realIndex,0)}var Oj={loopCreate:_j,loopFix:Mj,loopDestroy:Lj};function Ij(e){const t=this;if(!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const n=t.params.touchEventsTarget==="container"?t.el:t.wrapperEl;t.isElement&&(t.__preventObserver__=!0),n.style.cursor="move",n.style.cursor=e?"grabbing":"grab",t.isElement&&requestAnimationFrame(()=>{t.__preventObserver__=!1})}function Rj(){const e=this;e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.isElement&&(e.__preventObserver__=!0),e[e.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1}))}var Dj={setGrabCursor:Ij,unsetGrabCursor:Rj};function Vj(e,t){t===void 0&&(t=this);function n(i){if(!i||i===_n()||i===Gt())return null;i.assignedSlot&&(i=i.assignedSlot);const r=i.closest(e);return!r&&!i.getRootNode?null:r||n(i.getRootNode().host)}return n(t)}function Lm(e,t,n){const i=Gt(),{params:r}=e,a=r.edgeSwipeDetection,o=r.edgeSwipeThreshold;return a&&(n<=o||n>=i.innerWidth-o)?a==="prevent"?(t.preventDefault(),!0):!1:!0}function Nj(e){const t=this,n=_n();let i=e;i.originalEvent&&(i=i.originalEvent);const r=t.touchEventsData;if(i.type==="pointerdown"){if(r.pointerId!==null&&r.pointerId!==i.pointerId)return;r.pointerId=i.pointerId}else i.type==="touchstart"&&i.targetTouches.length===1&&(r.touchId=i.targetTouches[0].identifier);if(i.type==="touchstart"){Lm(t,i,i.targetTouches[0].pageX);return}const{params:a,touches:o,enabled:s}=t;if(!s||!a.simulateTouch&&i.pointerType==="mouse"||t.animating&&a.preventInteractionOnTransition)return;!t.animating&&a.cssMode&&a.loop&&t.loopFix();let l=i.target;if(a.touchEventsTarget==="wrapper"&&!W7(l,t.wrapperEl)||"which"in i&&i.which===3||"button"in i&&i.button>0||r.isTouched&&r.isMoved)return;const d=!!a.noSwipingClass&&a.noSwipingClass!=="",u=i.composedPath?i.composedPath():i.path;d&&i.target&&i.target.shadowRoot&&u&&(l=u[0]);const f=a.noSwipingSelector?a.noSwipingSelector:`.${a.noSwipingClass}`,p=!!(i.target&&i.target.shadowRoot);if(a.noSwiping&&(p?Vj(f,l):l.closest(f))){t.allowClick=!0;return}if(a.swipeHandler&&!l.closest(a.swipeHandler))return;o.currentX=i.pageX,o.currentY=i.pageY;const g=o.currentX,x=o.currentY;if(!Lm(t,i,g))return;Object.assign(r,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),o.startX=g,o.startY=x,r.touchStartTime=il(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,a.threshold>0&&(r.allowThresholdMove=!1);let y=!0;l.matches(r.focusableElements)&&(y=!1,l.nodeName==="SELECT"&&(r.isTouched=!1)),n.activeElement&&n.activeElement.matches(r.focusableElements)&&n.activeElement!==l&&(i.pointerType==="mouse"||i.pointerType!=="mouse"&&!l.matches(r.focusableElements))&&n.activeElement.blur();const b=y&&t.allowTouchMove&&a.touchStartPreventDefault;(a.touchStartForcePreventDefault||b)&&!l.isContentEditable&&i.preventDefault(),a.freeMode&&a.freeMode.enabled&&t.freeMode&&t.animating&&!a.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",i)}function Fj(e){const t=_n(),n=this,i=n.touchEventsData,{params:r,touches:a,rtlTranslate:o,enabled:s}=n;if(!s||!r.simulateTouch&&e.pointerType==="mouse")return;let l=e;if(l.originalEvent&&(l=l.originalEvent),l.type==="pointermove"&&(i.touchId!==null||l.pointerId!==i.pointerId))return;let d;if(l.type==="touchmove"){if(d=[...l.changedTouches].filter(C=>C.identifier===i.touchId)[0],!d||d.identifier!==i.touchId)return}else d=l;if(!i.isTouched){i.startMoving&&i.isScrolling&&n.emit("touchMoveOpposite",l);return}const u=d.pageX,f=d.pageY;if(l.preventedByNestedSwiper){a.startX=u,a.startY=f;return}if(!n.allowTouchMove){l.target.matches(i.focusableElements)||(n.allowClick=!1),i.isTouched&&(Object.assign(a,{startX:u,startY:f,currentX:u,currentY:f}),i.touchStartTime=il());return}if(r.touchReleaseOnEdges&&!r.loop){if(n.isVertical()){if(f<a.startY&&n.translate<=n.maxTranslate()||f>a.startY&&n.translate>=n.minTranslate()){i.isTouched=!1,i.isMoved=!1;return}}else if(u<a.startX&&n.translate<=n.maxTranslate()||u>a.startX&&n.translate>=n.minTranslate())return}if(t.activeElement&&t.activeElement.matches(i.focusableElements)&&t.activeElement!==l.target&&l.pointerType!=="mouse"&&t.activeElement.blur(),t.activeElement&&l.target===t.activeElement&&l.target.matches(i.focusableElements)){i.isMoved=!0,n.allowClick=!1;return}i.allowTouchCallbacks&&n.emit("touchMove",l),a.previousX=a.currentX,a.previousY=a.currentY,a.currentX=u,a.currentY=f;const p=a.currentX-a.startX,g=a.currentY-a.startY;if(n.params.threshold&&Math.sqrt(p**2+g**2)<n.params.threshold)return;if(typeof i.isScrolling>"u"){let C;n.isHorizontal()&&a.currentY===a.startY||n.isVertical()&&a.currentX===a.startX?i.isScrolling=!1:p*p+g*g>=25&&(C=Math.atan2(Math.abs(g),Math.abs(p))*180/Math.PI,i.isScrolling=n.isHorizontal()?C>r.touchAngle:90-C>r.touchAngle)}if(i.isScrolling&&n.emit("touchMoveOpposite",l),typeof i.startMoving>"u"&&(a.currentX!==a.startX||a.currentY!==a.startY)&&(i.startMoving=!0),i.isScrolling||l.type==="touchmove"&&i.preventTouchMoveFromPointerMove){i.isTouched=!1;return}if(!i.startMoving)return;n.allowClick=!1,!r.cssMode&&l.cancelable&&l.preventDefault(),r.touchMoveStopPropagation&&!r.nested&&l.stopPropagation();let x=n.isHorizontal()?p:g,y=n.isHorizontal()?a.currentX-a.previousX:a.currentY-a.previousY;r.oneWayMovement&&(x=Math.abs(x)*(o?1:-1),y=Math.abs(y)*(o?1:-1)),a.diff=x,x*=r.touchRatio,o&&(x=-x,y=-y);const b=n.touchesDirection;n.swipeDirection=x>0?"prev":"next",n.touchesDirection=y>0?"prev":"next";const v=n.params.loop&&!r.cssMode,h=n.touchesDirection==="next"&&n.allowSlideNext||n.touchesDirection==="prev"&&n.allowSlidePrev;if(!i.isMoved){if(v&&h&&n.loopFix({direction:n.swipeDirection}),i.startTranslate=n.getTranslate(),n.setTransition(0),n.animating){const C=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});n.wrapperEl.dispatchEvent(C)}i.allowMomentumBounce=!1,r.grabCursor&&(n.allowSlideNext===!0||n.allowSlidePrev===!0)&&n.setGrabCursor(!0),n.emit("sliderFirstMove",l)}let m;if(new Date().getTime(),i.isMoved&&i.allowThresholdMove&&b!==n.touchesDirection&&v&&h&&Math.abs(x)>=1){Object.assign(a,{startX:u,startY:f,currentX:u,currentY:f,startTranslate:i.currentTranslate}),i.loopSwapReset=!0,i.startTranslate=i.currentTranslate;return}n.emit("sliderMove",l),i.isMoved=!0,i.currentTranslate=x+i.startTranslate;let w=!0,S=r.resistanceRatio;if(r.touchReleaseOnEdges&&(S=0),x>0?(v&&h&&!m&&i.allowThresholdMove&&i.currentTranslate>(r.centeredSlides?n.minTranslate()-n.slidesSizesGrid[n.activeIndex+1]-(r.slidesPerView!=="auto"&&n.slides.length-r.slidesPerView>=2?n.slidesSizesGrid[n.activeIndex+1]+n.params.spaceBetween:0)-n.params.spaceBetween:n.minTranslate())&&n.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),i.currentTranslate>n.minTranslate()&&(w=!1,r.resistance&&(i.currentTranslate=n.minTranslate()-1+(-n.minTranslate()+i.startTranslate+x)**S))):x<0&&(v&&h&&!m&&i.allowThresholdMove&&i.currentTranslate<(r.centeredSlides?n.maxTranslate()+n.slidesSizesGrid[n.slidesSizesGrid.length-1]+n.params.spaceBetween+(r.slidesPerView!=="auto"&&n.slides.length-r.slidesPerView>=2?n.slidesSizesGrid[n.slidesSizesGrid.length-1]+n.params.spaceBetween:0):n.maxTranslate())&&n.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:n.slides.length-(r.slidesPerView==="auto"?n.slidesPerViewDynamic():Math.ceil(parseFloat(r.slidesPerView,10)))}),i.currentTranslate<n.maxTranslate()&&(w=!1,r.resistance&&(i.currentTranslate=n.maxTranslate()+1-(n.maxTranslate()-i.startTranslate-x)**S))),w&&(l.preventedByNestedSwiper=!0),!n.allowSlideNext&&n.swipeDirection==="next"&&i.currentTranslate<i.startTranslate&&(i.currentTranslate=i.startTranslate),!n.allowSlidePrev&&n.swipeDirection==="prev"&&i.currentTranslate>i.startTranslate&&(i.currentTranslate=i.startTranslate),!n.allowSlidePrev&&!n.allowSlideNext&&(i.currentTranslate=i.startTranslate),r.threshold>0)if(Math.abs(x)>r.threshold||i.allowThresholdMove){if(!i.allowThresholdMove){i.allowThresholdMove=!0,a.startX=a.currentX,a.startY=a.currentY,i.currentTranslate=i.startTranslate,a.diff=n.isHorizontal()?a.currentX-a.startX:a.currentY-a.startY;return}}else{i.currentTranslate=i.startTranslate;return}!r.followFinger||r.cssMode||((r.freeMode&&r.freeMode.enabled&&n.freeMode||r.watchSlidesProgress)&&(n.updateActiveIndex(),n.updateSlidesClasses()),r.freeMode&&r.freeMode.enabled&&n.freeMode&&n.freeMode.onTouchMove(),n.updateProgress(i.currentTranslate),n.setTranslate(i.currentTranslate))}function $j(e){const t=this,n=t.touchEventsData;let i=e;i.originalEvent&&(i=i.originalEvent);let r;if(i.type==="touchend"||i.type==="touchcancel"){if(r=[...i.changedTouches].filter(S=>S.identifier===n.touchId)[0],!r||r.identifier!==n.touchId)return}else{if(n.touchId!==null||i.pointerId!==n.pointerId)return;r=i}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(i.type)&&!(["pointercancel","contextmenu"].includes(i.type)&&(t.browser.isSafari||t.browser.isWebView)))return;n.pointerId=null,n.touchId=null;const{params:o,touches:s,rtlTranslate:l,slidesGrid:d,enabled:u}=t;if(!u||!o.simulateTouch&&i.pointerType==="mouse")return;if(n.allowTouchCallbacks&&t.emit("touchEnd",i),n.allowTouchCallbacks=!1,!n.isTouched){n.isMoved&&o.grabCursor&&t.setGrabCursor(!1),n.isMoved=!1,n.startMoving=!1;return}o.grabCursor&&n.isMoved&&n.isTouched&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!1);const f=il(),p=f-n.touchStartTime;if(t.allowClick){const S=i.path||i.composedPath&&i.composedPath();t.updateClickedSlide(S&&S[0]||i.target,S),t.emit("tap click",i),p<300&&f-n.lastClickTime<300&&t.emit("doubleTap doubleClick",i)}if(n.lastClickTime=il(),wu(()=>{t.destroyed||(t.allowClick=!0)}),!n.isTouched||!n.isMoved||!t.swipeDirection||s.diff===0&&!n.loopSwapReset||n.currentTranslate===n.startTranslate&&!n.loopSwapReset){n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;return}n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;let g;if(o.followFinger?g=l?t.translate:-t.translate:g=-n.currentTranslate,o.cssMode)return;if(o.freeMode&&o.freeMode.enabled){t.freeMode.onTouchEnd({currentPos:g});return}const x=g>=-t.maxTranslate()&&!t.params.loop;let y=0,b=t.slidesSizesGrid[0];for(let S=0;S<d.length;S+=S<o.slidesPerGroupSkip?1:o.slidesPerGroup){const C=S<o.slidesPerGroupSkip-1?1:o.slidesPerGroup;typeof d[S+C]<"u"?(x||g>=d[S]&&g<d[S+C])&&(y=S,b=d[S+C]-d[S]):(x||g>=d[S])&&(y=S,b=d[d.length-1]-d[d.length-2])}let v=null,h=null;o.rewind&&(t.isBeginning?h=o.virtual&&o.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(v=0));const m=(g-d[y])/b,w=y<o.slidesPerGroupSkip-1?1:o.slidesPerGroup;if(p>o.longSwipesMs){if(!o.longSwipes){t.slideTo(t.activeIndex);return}t.swipeDirection==="next"&&(m>=o.longSwipesRatio?t.slideTo(o.rewind&&t.isEnd?v:y+w):t.slideTo(y)),t.swipeDirection==="prev"&&(m>1-o.longSwipesRatio?t.slideTo(y+w):h!==null&&m<0&&Math.abs(m)>o.longSwipesRatio?t.slideTo(h):t.slideTo(y))}else{if(!o.shortSwipes){t.slideTo(t.activeIndex);return}t.navigation&&(i.target===t.navigation.nextEl||i.target===t.navigation.prevEl)?i.target===t.navigation.nextEl?t.slideTo(y+w):t.slideTo(y):(t.swipeDirection==="next"&&t.slideTo(v!==null?v:y+w),t.swipeDirection==="prev"&&t.slideTo(h!==null?h:y))}}function Om(){const e=this,{params:t,el:n}=e;if(n&&n.offsetWidth===0)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:i,allowSlidePrev:r,snapGrid:a}=e,o=e.virtual&&e.params.virtual.enabled;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses();const s=o&&t.loop;(t.slidesPerView==="auto"||t.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides&&!s?e.slideTo(e.slides.length-1,0,!1,!0):e.params.loop&&!o?e.slideToLoop(e.realIndex,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&(clearTimeout(e.autoplay.resizeTimeout),e.autoplay.resizeTimeout=setTimeout(()=>{e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.resume()},500)),e.allowSlidePrev=r,e.allowSlideNext=i,e.params.watchOverflow&&a!==e.snapGrid&&e.checkOverflow()}function Bj(e){const t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function Hj(){const e=this,{wrapperEl:t,rtlTranslate:n,enabled:i}=e;if(!i)return;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,e.translate===0&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();let r;const a=e.maxTranslate()-e.minTranslate();a===0?r=0:r=(e.translate-e.minTranslate())/a,r!==e.progress&&e.updateProgress(n?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}function Uj(e){const t=this;ms(t,e.target),!(t.params.cssMode||t.params.slidesPerView!=="auto"&&!t.params.autoHeight)&&t.update()}function Wj(){const e=this;e.documentTouchHandlerProceeded||(e.documentTouchHandlerProceeded=!0,e.params.touchReleaseOnEdges&&(e.el.style.touchAction="auto"))}const Fy=(e,t)=>{const n=_n(),{params:i,el:r,wrapperEl:a,device:o}=e,s=!!i.nested,l=t==="on"?"addEventListener":"removeEventListener",d=t;!r||typeof r=="string"||(n[l]("touchstart",e.onDocumentTouchStart,{passive:!1,capture:s}),r[l]("touchstart",e.onTouchStart,{passive:!1}),r[l]("pointerdown",e.onTouchStart,{passive:!1}),n[l]("touchmove",e.onTouchMove,{passive:!1,capture:s}),n[l]("pointermove",e.onTouchMove,{passive:!1,capture:s}),n[l]("touchend",e.onTouchEnd,{passive:!0}),n[l]("pointerup",e.onTouchEnd,{passive:!0}),n[l]("pointercancel",e.onTouchEnd,{passive:!0}),n[l]("touchcancel",e.onTouchEnd,{passive:!0}),n[l]("pointerout",e.onTouchEnd,{passive:!0}),n[l]("pointerleave",e.onTouchEnd,{passive:!0}),n[l]("contextmenu",e.onTouchEnd,{passive:!0}),(i.preventClicks||i.preventClicksPropagation)&&r[l]("click",e.onClick,!0),i.cssMode&&a[l]("scroll",e.onScroll),i.updateOnWindowResize?e[d](o.ios||o.android?"resize orientationchange observerUpdate":"resize observerUpdate",Om,!0):e[d]("observerUpdate",Om,!0),r[l]("load",e.onLoad,{capture:!0}))};function qj(){const e=this,{params:t}=e;e.onTouchStart=Nj.bind(e),e.onTouchMove=Fj.bind(e),e.onTouchEnd=$j.bind(e),e.onDocumentTouchStart=Wj.bind(e),t.cssMode&&(e.onScroll=Hj.bind(e)),e.onClick=Bj.bind(e),e.onLoad=Uj.bind(e),Fy(e,"on")}function Yj(){Fy(this,"off")}var Kj={attachEvents:qj,detachEvents:Yj};const Im=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;function Xj(){const e=this,{realIndex:t,initialized:n,params:i,el:r}=e,a=i.breakpoints;if(!a||a&&Object.keys(a).length===0)return;const o=e.getBreakpoint(a,e.params.breakpointsBase,e.el);if(!o||e.currentBreakpoint===o)return;const l=(o in a?a[o]:void 0)||e.originalParams,d=Im(e,i),u=Im(e,l),f=e.params.grabCursor,p=l.grabCursor,g=i.enabled;d&&!u?(r.classList.remove(`${i.containerModifierClass}grid`,`${i.containerModifierClass}grid-column`),e.emitContainerClasses()):!d&&u&&(r.classList.add(`${i.containerModifierClass}grid`),(l.grid.fill&&l.grid.fill==="column"||!l.grid.fill&&i.grid.fill==="column")&&r.classList.add(`${i.containerModifierClass}grid-column`),e.emitContainerClasses()),f&&!p?e.unsetGrabCursor():!f&&p&&e.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(m=>{if(typeof l[m]>"u")return;const w=i[m]&&i[m].enabled,S=l[m]&&l[m].enabled;w&&!S&&e[m].disable(),!w&&S&&e[m].enable()});const x=l.direction&&l.direction!==i.direction,y=i.loop&&(l.slidesPerView!==i.slidesPerView||x),b=i.loop;x&&n&&e.changeDirection(),jt(e.params,l);const v=e.params.enabled,h=e.params.loop;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),g&&!v?e.disable():!g&&v&&e.enable(),e.currentBreakpoint=o,e.emit("_beforeBreakpoint",l),n&&(y?(e.loopDestroy(),e.loopCreate(t),e.updateSlides()):!b&&h?(e.loopCreate(t),e.updateSlides()):b&&!h&&e.loopDestroy()),e.emit("breakpoint",l)}function Qj(e,t,n){if(t===void 0&&(t="window"),!e||t==="container"&&!n)return;let i=!1;const r=Gt(),a=t==="window"?r.innerHeight:n.clientHeight,o=Object.keys(e).map(s=>{if(typeof s=="string"&&s.indexOf("@")===0){const l=parseFloat(s.substr(1));return{value:a*l,point:s}}return{value:s,point:s}});o.sort((s,l)=>parseInt(s.value,10)-parseInt(l.value,10));for(let s=0;s<o.length;s+=1){const{point:l,value:d}=o[s];t==="window"?r.matchMedia(`(min-width: ${d}px)`).matches&&(i=l):d<=n.clientWidth&&(i=l)}return i||"max"}var Zj={setBreakpoint:Xj,getBreakpoint:Qj};function Jj(e,t){const n=[];return e.forEach(i=>{typeof i=="object"?Object.keys(i).forEach(r=>{i[r]&&n.push(t+r)}):typeof i=="string"&&n.push(t+i)}),n}function eC(){const e=this,{classNames:t,params:n,rtl:i,el:r,device:a}=e,o=Jj(["initialized",n.direction,{"free-mode":e.params.freeMode&&n.freeMode.enabled},{autoheight:n.autoHeight},{rtl:i},{grid:n.grid&&n.grid.rows>1},{"grid-column":n.grid&&n.grid.rows>1&&n.grid.fill==="column"},{android:a.android},{ios:a.ios},{"css-mode":n.cssMode},{centered:n.cssMode&&n.centeredSlides},{"watch-progress":n.watchSlidesProgress}],n.containerModifierClass);t.push(...o),r.classList.add(...t),e.emitContainerClasses()}function tC(){const e=this,{el:t,classNames:n}=e;!t||typeof t=="string"||(t.classList.remove(...n),e.emitContainerClasses())}var nC={addClasses:eC,removeClasses:tC};function iC(){const e=this,{isLocked:t,params:n}=e,{slidesOffsetBefore:i}=n;if(i){const r=e.slides.length-1,a=e.slidesGrid[r]+e.slidesSizesGrid[r]+i*2;e.isLocked=e.size>a}else e.isLocked=e.snapGrid.length===1;n.allowSlideNext===!0&&(e.allowSlideNext=!e.isLocked),n.allowSlidePrev===!0&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}var rC={checkOverflow:iC},ju={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function aC(e,t){return function(i){i===void 0&&(i={});const r=Object.keys(i)[0],a=i[r];if(typeof a!="object"||a===null){jt(t,i);return}if(e[r]===!0&&(e[r]={enabled:!0}),r==="navigation"&&e[r]&&e[r].enabled&&!e[r].prevEl&&!e[r].nextEl&&(e[r].auto=!0),["pagination","scrollbar"].indexOf(r)>=0&&e[r]&&e[r].enabled&&!e[r].el&&(e[r].auto=!0),!(r in e&&"enabled"in a)){jt(t,i);return}typeof e[r]=="object"&&!("enabled"in e[r])&&(e[r].enabled=!0),e[r]||(e[r]={enabled:!1}),jt(t,i)}}const qc={eventsEmitter:nj,update:pj,translate:yj,transition:jj,slide:zj,loop:Oj,grabCursor:Dj,events:Kj,breakpoints:Zj,checkOverflow:rC,classes:nC},Yc={};let mp=class yn{constructor(){let t,n;for(var i=arguments.length,r=new Array(i),a=0;a<i;a++)r[a]=arguments[a];r.length===1&&r[0].constructor&&Object.prototype.toString.call(r[0]).slice(8,-1)==="Object"?n=r[0]:[t,n]=r,n||(n={}),n=jt({},n),t&&!n.el&&(n.el=t);const o=_n();if(n.el&&typeof n.el=="string"&&o.querySelectorAll(n.el).length>1){const u=[];return o.querySelectorAll(n.el).forEach(f=>{const p=jt({},n,{el:f});u.push(new yn(p))}),u}const s=this;s.__swiper__=!0,s.support=Dy(),s.device=Vy({userAgent:n.userAgent}),s.browser=J7(),s.eventsListeners={},s.eventsAnyListeners=[],s.modules=[...s.__modules__],n.modules&&Array.isArray(n.modules)&&s.modules.push(...n.modules);const l={};s.modules.forEach(u=>{u({params:n,swiper:s,extendParams:aC(n,l),on:s.on.bind(s),once:s.once.bind(s),off:s.off.bind(s),emit:s.emit.bind(s)})});const d=jt({},ju,l);return s.params=jt({},d,Yc,n),s.originalParams=jt({},s.params),s.passedParams=jt({},n),s.params&&s.params.on&&Object.keys(s.params.on).forEach(u=>{s.on(u,s.params.on[u])}),s.params&&s.params.onAny&&s.onAny(s.params.onAny),Object.assign(s,{enabled:s.params.enabled,el:t,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return s.params.direction==="horizontal"},isVertical(){return s.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:s.params.allowSlideNext,allowSlidePrev:s.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:s.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:s.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),s.emit("_swiper"),s.params.init&&s.init(),s}getDirectionLabel(t){return this.isHorizontal()?t:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[t]}getSlideIndex(t){const{slidesEl:n,params:i}=this,r=cn(n,`.${i.slideClass}, swiper-slide`),a=al(r[0]);return al(t)-a}getSlideIndexByData(t){return this.getSlideIndex(this.slides.filter(n=>n.getAttribute("data-swiper-slide-index")*1===t)[0])}recalcSlides(){const t=this,{slidesEl:n,params:i}=t;t.slides=cn(n,`.${i.slideClass}, swiper-slide`)}enable(){const t=this;t.enabled||(t.enabled=!0,t.params.grabCursor&&t.setGrabCursor(),t.emit("enable"))}disable(){const t=this;t.enabled&&(t.enabled=!1,t.params.grabCursor&&t.unsetGrabCursor(),t.emit("disable"))}setProgress(t,n){const i=this;t=Math.min(Math.max(t,0),1);const r=i.minTranslate(),o=(i.maxTranslate()-r)*t+r;i.translateTo(o,typeof n>"u"?0:n),i.updateActiveIndex(),i.updateSlidesClasses()}emitContainerClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=t.el.className.split(" ").filter(i=>i.indexOf("swiper")===0||i.indexOf(t.params.containerModifierClass)===0);t.emit("_containerClasses",n.join(" "))}getSlideClasses(t){const n=this;return n.destroyed?"":t.className.split(" ").filter(i=>i.indexOf("swiper-slide")===0||i.indexOf(n.params.slideClass)===0).join(" ")}emitSlidesClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=[];t.slides.forEach(i=>{const r=t.getSlideClasses(i);n.push({slideEl:i,classNames:r}),t.emit("_slideClass",i,r)}),t.emit("_slideClasses",n)}slidesPerViewDynamic(t,n){t===void 0&&(t="current"),n===void 0&&(n=!1);const i=this,{params:r,slides:a,slidesGrid:o,slidesSizesGrid:s,size:l,activeIndex:d}=i;let u=1;if(typeof r.slidesPerView=="number")return r.slidesPerView;if(r.centeredSlides){let f=a[d]?Math.ceil(a[d].swiperSlideSize):0,p;for(let g=d+1;g<a.length;g+=1)a[g]&&!p&&(f+=Math.ceil(a[g].swiperSlideSize),u+=1,f>l&&(p=!0));for(let g=d-1;g>=0;g-=1)a[g]&&!p&&(f+=a[g].swiperSlideSize,u+=1,f>l&&(p=!0))}else if(t==="current")for(let f=d+1;f<a.length;f+=1)(n?o[f]+s[f]-o[d]<l:o[f]-o[d]<l)&&(u+=1);else for(let f=d-1;f>=0;f-=1)o[d]-o[f]<l&&(u+=1);return u}update(){const t=this;if(!t||t.destroyed)return;const{snapGrid:n,params:i}=t;i.breakpoints&&t.setBreakpoint(),[...t.el.querySelectorAll('[loading="lazy"]')].forEach(o=>{o.complete&&ms(t,o)}),t.updateSize(),t.updateSlides(),t.updateProgress(),t.updateSlidesClasses();function r(){const o=t.rtlTranslate?t.translate*-1:t.translate,s=Math.min(Math.max(o,t.maxTranslate()),t.minTranslate());t.setTranslate(s),t.updateActiveIndex(),t.updateSlidesClasses()}let a;if(i.freeMode&&i.freeMode.enabled&&!i.cssMode)r(),i.autoHeight&&t.updateAutoHeight();else{if((i.slidesPerView==="auto"||i.slidesPerView>1)&&t.isEnd&&!i.centeredSlides){const o=t.virtual&&i.virtual.enabled?t.virtual.slides:t.slides;a=t.slideTo(o.length-1,0,!1,!0)}else a=t.slideTo(t.activeIndex,0,!1,!0);a||r()}i.watchOverflow&&n!==t.snapGrid&&t.checkOverflow(),t.emit("update")}changeDirection(t,n){n===void 0&&(n=!0);const i=this,r=i.params.direction;return t||(t=r==="horizontal"?"vertical":"horizontal"),t===r||t!=="horizontal"&&t!=="vertical"||(i.el.classList.remove(`${i.params.containerModifierClass}${r}`),i.el.classList.add(`${i.params.containerModifierClass}${t}`),i.emitContainerClasses(),i.params.direction=t,i.slides.forEach(a=>{t==="vertical"?a.style.width="":a.style.height=""}),i.emit("changeDirection"),n&&i.update()),i}changeLanguageDirection(t){const n=this;n.rtl&&t==="rtl"||!n.rtl&&t==="ltr"||(n.rtl=t==="rtl",n.rtlTranslate=n.params.direction==="horizontal"&&n.rtl,n.rtl?(n.el.classList.add(`${n.params.containerModifierClass}rtl`),n.el.dir="rtl"):(n.el.classList.remove(`${n.params.containerModifierClass}rtl`),n.el.dir="ltr"),n.update())}mount(t){const n=this;if(n.mounted)return!0;let i=t||n.params.el;if(typeof i=="string"&&(i=document.querySelector(i)),!i)return!1;i.swiper=n,i.parentNode&&i.parentNode.host&&i.parentNode.host.nodeName===n.params.swiperElementNodeName.toUpperCase()&&(n.isElement=!0);const r=()=>`.${(n.params.wrapperClass||"").trim().split(" ").join(".")}`;let o=i&&i.shadowRoot&&i.shadowRoot.querySelector?i.shadowRoot.querySelector(r()):cn(i,r())[0];return!o&&n.params.createElements&&(o=ro("div",n.params.wrapperClass),i.append(o),cn(i,`.${n.params.slideClass}`).forEach(s=>{o.append(s)})),Object.assign(n,{el:i,wrapperEl:o,slidesEl:n.isElement&&!i.parentNode.host.slideSlots?i.parentNode.host:o,hostEl:n.isElement?i.parentNode.host:i,mounted:!0,rtl:i.dir.toLowerCase()==="rtl"||Qn(i,"direction")==="rtl",rtlTranslate:n.params.direction==="horizontal"&&(i.dir.toLowerCase()==="rtl"||Qn(i,"direction")==="rtl"),wrongRTL:Qn(o,"display")==="-webkit-box"}),!0}init(t){const n=this;if(n.initialized||n.mount(t)===!1)return n;n.emit("beforeInit"),n.params.breakpoints&&n.setBreakpoint(),n.addClasses(),n.updateSize(),n.updateSlides(),n.params.watchOverflow&&n.checkOverflow(),n.params.grabCursor&&n.enabled&&n.setGrabCursor(),n.params.loop&&n.virtual&&n.params.virtual.enabled?n.slideTo(n.params.initialSlide+n.virtual.slidesBefore,0,n.params.runCallbacksOnInit,!1,!0):n.slideTo(n.params.initialSlide,0,n.params.runCallbacksOnInit,!1,!0),n.params.loop&&n.loopCreate(),n.attachEvents();const r=[...n.el.querySelectorAll('[loading="lazy"]')];return n.isElement&&r.push(...n.hostEl.querySelectorAll('[loading="lazy"]')),r.forEach(a=>{a.complete?ms(n,a):a.addEventListener("load",o=>{ms(n,o.target)})}),Su(n),n.initialized=!0,Su(n),n.emit("init"),n.emit("afterInit"),n}destroy(t,n){t===void 0&&(t=!0),n===void 0&&(n=!0);const i=this,{params:r,el:a,wrapperEl:o,slides:s}=i;return typeof i.params>"u"||i.destroyed||(i.emit("beforeDestroy"),i.initialized=!1,i.detachEvents(),r.loop&&i.loopDestroy(),n&&(i.removeClasses(),a&&typeof a!="string"&&a.removeAttribute("style"),o&&o.removeAttribute("style"),s&&s.length&&s.forEach(l=>{l.classList.remove(r.slideVisibleClass,r.slideFullyVisibleClass,r.slideActiveClass,r.slideNextClass,r.slidePrevClass),l.removeAttribute("style"),l.removeAttribute("data-swiper-slide-index")})),i.emit("destroy"),Object.keys(i.eventsListeners).forEach(l=>{i.off(l)}),t!==!1&&(i.el&&typeof i.el!="string"&&(i.el.swiper=null),$7(i)),i.destroyed=!0),null}static extendDefaults(t){jt(Yc,t)}static get extendedDefaults(){return Yc}static get defaults(){return ju}static installModule(t){yn.prototype.__modules__||(yn.prototype.__modules__=[]);const n=yn.prototype.__modules__;typeof t=="function"&&n.indexOf(t)<0&&n.push(t)}static use(t){return Array.isArray(t)?(t.forEach(n=>yn.installModule(n)),yn):(yn.installModule(t),yn)}};Object.keys(qc).forEach(e=>{Object.keys(qc[e]).forEach(t=>{mp.prototype[t]=qc[e][t]})});mp.use([ej,tj]);const $y=["eventsPrefix","injectStyles","injectStylesUrls","modules","init","_direction","oneWayMovement","swiperElementNodeName","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","breakpointsBase","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_loop","loopAdditionalSlides","loopAddBlankSlides","loopPreventsSliding","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideActiveClass","slideVisibleClass","slideFullyVisibleClass","slideNextClass","slidePrevClass","slideBlankClass","wrapperClass","lazyPreloaderClass","lazyPreloadPrevNext","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom","control"];function $i(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"&&!e.__swiper__}function kr(e,t){const n=["__proto__","constructor","prototype"];Object.keys(t).filter(i=>n.indexOf(i)<0).forEach(i=>{typeof e[i]>"u"?e[i]=t[i]:$i(t[i])&&$i(e[i])&&Object.keys(t[i]).length>0?t[i].__swiper__?e[i]=t[i]:kr(e[i],t[i]):e[i]=t[i]})}function By(e){return e===void 0&&(e={}),e.navigation&&typeof e.navigation.nextEl>"u"&&typeof e.navigation.prevEl>"u"}function Hy(e){return e===void 0&&(e={}),e.pagination&&typeof e.pagination.el>"u"}function Uy(e){return e===void 0&&(e={}),e.scrollbar&&typeof e.scrollbar.el>"u"}function Wy(e){e===void 0&&(e="");const t=e.split(" ").map(i=>i.trim()).filter(i=>!!i),n=[];return t.forEach(i=>{n.indexOf(i)<0&&n.push(i)}),n.join(" ")}function oC(e){return e===void 0&&(e=""),e?e.includes("swiper-wrapper")?e:`swiper-wrapper ${e}`:"swiper-wrapper"}function sC(e){let{swiper:t,slides:n,passedParams:i,changedParams:r,nextEl:a,prevEl:o,scrollbarEl:s,paginationEl:l}=e;const d=r.filter(z=>z!=="children"&&z!=="direction"&&z!=="wrapperClass"),{params:u,pagination:f,navigation:p,scrollbar:g,virtual:x,thumbs:y}=t;let b,v,h,m,w,S,C,A;r.includes("thumbs")&&i.thumbs&&i.thumbs.swiper&&u.thumbs&&!u.thumbs.swiper&&(b=!0),r.includes("controller")&&i.controller&&i.controller.control&&u.controller&&!u.controller.control&&(v=!0),r.includes("pagination")&&i.pagination&&(i.pagination.el||l)&&(u.pagination||u.pagination===!1)&&f&&!f.el&&(h=!0),r.includes("scrollbar")&&i.scrollbar&&(i.scrollbar.el||s)&&(u.scrollbar||u.scrollbar===!1)&&g&&!g.el&&(m=!0),r.includes("navigation")&&i.navigation&&(i.navigation.prevEl||o)&&(i.navigation.nextEl||a)&&(u.navigation||u.navigation===!1)&&p&&!p.prevEl&&!p.nextEl&&(w=!0);const T=z=>{t[z]&&(t[z].destroy(),z==="navigation"?(t.isElement&&(t[z].prevEl.remove(),t[z].nextEl.remove()),u[z].prevEl=void 0,u[z].nextEl=void 0,t[z].prevEl=void 0,t[z].nextEl=void 0):(t.isElement&&t[z].el.remove(),u[z].el=void 0,t[z].el=void 0))};r.includes("loop")&&t.isElement&&(u.loop&&!i.loop?S=!0:!u.loop&&i.loop?C=!0:A=!0),d.forEach(z=>{if($i(u[z])&&$i(i[z]))Object.assign(u[z],i[z]),(z==="navigation"||z==="pagination"||z==="scrollbar")&&"enabled"in i[z]&&!i[z].enabled&&T(z);else{const E=i[z];(E===!0||E===!1)&&(z==="navigation"||z==="pagination"||z==="scrollbar")?E===!1&&T(z):u[z]=i[z]}}),d.includes("controller")&&!v&&t.controller&&t.controller.control&&u.controller&&u.controller.control&&(t.controller.control=u.controller.control),r.includes("children")&&n&&x&&u.virtual.enabled?(x.slides=n,x.update(!0)):r.includes("virtual")&&x&&u.virtual.enabled&&(n&&(x.slides=n),x.update(!0)),r.includes("children")&&n&&u.loop&&(A=!0),b&&y.init()&&y.update(!0),v&&(t.controller.control=u.controller.control),h&&(t.isElement&&(!l||typeof l=="string")&&(l=document.createElement("div"),l.classList.add("swiper-pagination"),l.part.add("pagination"),t.el.appendChild(l)),l&&(u.pagination.el=l),f.init(),f.render(),f.update()),m&&(t.isElement&&(!s||typeof s=="string")&&(s=document.createElement("div"),s.classList.add("swiper-scrollbar"),s.part.add("scrollbar"),t.el.appendChild(s)),s&&(u.scrollbar.el=s),g.init(),g.updateSize(),g.setTranslate()),w&&(t.isElement&&((!a||typeof a=="string")&&(a=document.createElement("div"),a.classList.add("swiper-button-next"),a.innerHTML=t.hostEl.constructor.nextButtonSvg,a.part.add("button-next"),t.el.appendChild(a)),(!o||typeof o=="string")&&(o=document.createElement("div"),o.classList.add("swiper-button-prev"),o.innerHTML=t.hostEl.constructor.prevButtonSvg,o.part.add("button-prev"),t.el.appendChild(o))),a&&(u.navigation.nextEl=a),o&&(u.navigation.prevEl=o),p.init(),p.update()),r.includes("allowSlideNext")&&(t.allowSlideNext=i.allowSlideNext),r.includes("allowSlidePrev")&&(t.allowSlidePrev=i.allowSlidePrev),r.includes("direction")&&t.changeDirection(i.direction,!1),(S||A)&&t.loopDestroy(),(C||A)&&t.loopCreate(),t.update()}function lC(e,t){e===void 0&&(e={}),t===void 0&&(t=!0);const n={on:{}},i={},r={};kr(n,ju),n._emitClasses=!0,n.init=!1;const a={},o=$y.map(l=>l.replace(/_/,"")),s=Object.assign({},e);return Object.keys(s).forEach(l=>{typeof e[l]>"u"||(o.indexOf(l)>=0?$i(e[l])?(n[l]={},r[l]={},kr(n[l],e[l]),kr(r[l],e[l])):(n[l]=e[l],r[l]=e[l]):l.search(/on[A-Z]/)===0&&typeof e[l]=="function"?t?i[`${l[2].toLowerCase()}${l.substr(3)}`]=e[l]:n.on[`${l[2].toLowerCase()}${l.substr(3)}`]=e[l]:a[l]=e[l])}),["navigation","pagination","scrollbar"].forEach(l=>{n[l]===!0&&(n[l]={}),n[l]===!1&&delete n[l]}),{params:n,passedParams:r,rest:a,events:i}}function cC(e,t){let{el:n,nextEl:i,prevEl:r,paginationEl:a,scrollbarEl:o,swiper:s}=e;By(t)&&i&&r&&(s.params.navigation.nextEl=i,s.originalParams.navigation.nextEl=i,s.params.navigation.prevEl=r,s.originalParams.navigation.prevEl=r),Hy(t)&&a&&(s.params.pagination.el=a,s.originalParams.pagination.el=a),Uy(t)&&o&&(s.params.scrollbar.el=o,s.originalParams.scrollbar.el=o),s.init(n)}function dC(e,t,n,i,r){const a=[];if(!t)return a;const o=l=>{a.indexOf(l)<0&&a.push(l)};if(n&&i){const l=i.map(r),d=n.map(r);l.join("")!==d.join("")&&o("children"),i.length!==n.length&&o("children")}return $y.filter(l=>l[0]==="_").map(l=>l.replace(/_/,"")).forEach(l=>{if(l in e&&l in t)if($i(e[l])&&$i(t[l])){const d=Object.keys(e[l]),u=Object.keys(t[l]);d.length!==u.length?o(l):(d.forEach(f=>{e[l][f]!==t[l][f]&&o(l)}),u.forEach(f=>{e[l][f]!==t[l][f]&&o(l)}))}else e[l]!==t[l]&&o(l)}),a}const uC=e=>{!e||e.destroyed||!e.params.virtual||e.params.virtual&&!e.params.virtual.enabled||(e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.parallax&&e.params.parallax&&e.params.parallax.enabled&&e.parallax.setTranslate())};function ol(){return ol=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},ol.apply(this,arguments)}function qy(e){return e.type&&e.type.displayName&&e.type.displayName.includes("SwiperSlide")}function Yy(e){const t=[];return ee.Children.toArray(e).forEach(n=>{qy(n)?t.push(n):n.props&&n.props.children&&Yy(n.props.children).forEach(i=>t.push(i))}),t}function fC(e){const t=[],n={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]};return ee.Children.toArray(e).forEach(i=>{if(qy(i))t.push(i);else if(i.props&&i.props.slot&&n[i.props.slot])n[i.props.slot].push(i);else if(i.props&&i.props.children){const r=Yy(i.props.children);r.length>0?r.forEach(a=>t.push(a)):n["container-end"].push(i)}else n["container-end"].push(i)}),{slides:t,slots:n}}function pC(e,t,n){if(!n)return null;const i=u=>{let f=u;return u<0?f=t.length+u:f>=t.length&&(f=f-t.length),f},r=e.isHorizontal()?{[e.rtlTranslate?"right":"left"]:`${n.offset}px`}:{top:`${n.offset}px`},{from:a,to:o}=n,s=e.params.loop?-t.length:0,l=e.params.loop?t.length*2:t.length,d=[];for(let u=s;u<l;u+=1)u>=a&&u<=o&&d.push(t[i(u)]);return d.map((u,f)=>ee.cloneElement(u,{swiper:e,style:r,key:u.props.virtualIndex||u.key||`slide-${f}`}))}function Ma(e,t){return typeof window>"u"?j.useEffect(e,t):j.useLayoutEffect(e,t)}const Rm=j.createContext(null),hC=j.createContext(null),Jt=j.forwardRef(function(e,t){let{className:n,tag:i="div",wrapperTag:r="div",children:a,onSwiper:o,...s}=e===void 0?{}:e,l=!1;const[d,u]=j.useState("swiper"),[f,p]=j.useState(null),[g,x]=j.useState(!1),y=j.useRef(!1),b=j.useRef(null),v=j.useRef(null),h=j.useRef(null),m=j.useRef(null),w=j.useRef(null),S=j.useRef(null),C=j.useRef(null),A=j.useRef(null),{params:T,passedParams:z,rest:E,events:P}=lC(s),{slides:_,slots:I}=fC(a),R=()=>{x(!g)};Object.assign(T.on,{_containerClasses(V,$){u($)}});const U=()=>{Object.assign(T.on,P),l=!0;const V={...T};if(delete V.wrapperClass,v.current=new mp(V),v.current.virtual&&v.current.params.virtual.enabled){v.current.virtual.slides=_;const $={cache:!1,slides:_,renderExternal:p,renderExternalUpdate:!1};kr(v.current.params.virtual,$),kr(v.current.originalParams.virtual,$)}};b.current||U(),v.current&&v.current.on("_beforeBreakpoint",R);const Z=()=>{l||!P||!v.current||Object.keys(P).forEach(V=>{v.current.on(V,P[V])})},Y=()=>{!P||!v.current||Object.keys(P).forEach(V=>{v.current.off(V,P[V])})};j.useEffect(()=>()=>{v.current&&v.current.off("_beforeBreakpoint",R)}),j.useEffect(()=>{!y.current&&v.current&&(v.current.emitSlidesClasses(),y.current=!0)}),Ma(()=>{if(t&&(t.current=b.current),!!b.current)return v.current.destroyed&&U(),cC({el:b.current,nextEl:w.current,prevEl:S.current,paginationEl:C.current,scrollbarEl:A.current,swiper:v.current},T),o&&!v.current.destroyed&&o(v.current),()=>{v.current&&!v.current.destroyed&&v.current.destroy(!0,!1)}},[]),Ma(()=>{Z();const V=dC(z,h.current,_,m.current,$=>$.key);return h.current=z,m.current=_,V.length&&v.current&&!v.current.destroyed&&sC({swiper:v.current,slides:_,passedParams:z,changedParams:V,nextEl:w.current,prevEl:S.current,scrollbarEl:A.current,paginationEl:C.current}),()=>{Y()}}),Ma(()=>{uC(v.current)},[f]);function M(){return T.virtual?pC(v.current,_,f):_.map((V,$)=>ee.cloneElement(V,{swiper:v.current,swiperSlideIndex:$}))}return ee.createElement(i,ol({ref:b,className:Wy(`${d}${n?` ${n}`:""}`)},E),ee.createElement(hC.Provider,{value:v.current},I["container-start"],ee.createElement(r,{className:oC(T.wrapperClass)},I["wrapper-start"],M(),I["wrapper-end"]),By(T)&&ee.createElement(ee.Fragment,null,ee.createElement("div",{ref:S,className:"swiper-button-prev"}),ee.createElement("div",{ref:w,className:"swiper-button-next"})),Uy(T)&&ee.createElement("div",{ref:A,className:"swiper-scrollbar"}),Hy(T)&&ee.createElement("div",{ref:C,className:"swiper-pagination"}),I["container-end"]))});Jt.displayName="Swiper";const en=j.forwardRef(function(e,t){let{tag:n="div",children:i,className:r="",swiper:a,zoom:o,lazy:s,virtualIndex:l,swiperSlideIndex:d,...u}=e===void 0?{}:e;const f=j.useRef(null),[p,g]=j.useState("swiper-slide"),[x,y]=j.useState(!1);function b(w,S,C){S===f.current&&g(C)}Ma(()=>{if(typeof d<"u"&&(f.current.swiperSlideIndex=d),t&&(t.current=f.current),!(!f.current||!a)){if(a.destroyed){p!=="swiper-slide"&&g("swiper-slide");return}return a.on("_slideClass",b),()=>{a&&a.off("_slideClass",b)}}}),Ma(()=>{a&&f.current&&!a.destroyed&&g(a.getSlideClasses(f.current))},[a]);const v={isActive:p.indexOf("swiper-slide-active")>=0,isVisible:p.indexOf("swiper-slide-visible")>=0,isPrev:p.indexOf("swiper-slide-prev")>=0,isNext:p.indexOf("swiper-slide-next")>=0},h=()=>typeof i=="function"?i(v):i,m=()=>{y(!0)};return ee.createElement(n,ol({ref:f,className:Wy(`${p}${r?` ${r}`:""}`),"data-swiper-slide-index":l,onLoad:m},u),o&&ee.createElement(Rm.Provider,{value:v},ee.createElement("div",{className:"swiper-zoom-container","data-swiper-zoom":typeof o=="number"?o:void 0},h(),s&&!x&&ee.createElement("div",{className:"swiper-lazy-preloader"}))),!o&&ee.createElement(Rm.Provider,{value:v},h(),s&&!x&&ee.createElement("div",{className:"swiper-lazy-preloader"})))});en.displayName="SwiperSlide";function Ky(e,t,n,i){return e.params.createElements&&Object.keys(i).forEach(r=>{if(!n[r]&&n.auto===!0){let a=cn(e.el,`.${i[r]}`)[0];a||(a=ro("div",i[r]),a.className=i[r],e.el.append(a)),n[r]=a,t[r]=a}}),n}function gi(e){let{swiper:t,extendParams:n,on:i,emit:r}=e;n({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),t.navigation={nextEl:null,prevEl:null};function a(x){let y;return x&&typeof x=="string"&&t.isElement&&(y=t.el.querySelector(x)||t.hostEl.querySelector(x),y)?y:(x&&(typeof x=="string"&&(y=[...document.querySelectorAll(x)]),t.params.uniqueNavElements&&typeof x=="string"&&y&&y.length>1&&t.el.querySelectorAll(x).length===1?y=t.el.querySelector(x):y&&y.length===1&&(y=y[0])),x&&!y?x:y)}function o(x,y){const b=t.params.navigation;x=Ue(x),x.forEach(v=>{v&&(v.classList[y?"add":"remove"](...b.disabledClass.split(" ")),v.tagName==="BUTTON"&&(v.disabled=y),t.params.watchOverflow&&t.enabled&&v.classList[t.isLocked?"add":"remove"](b.lockClass))})}function s(){const{nextEl:x,prevEl:y}=t.navigation;if(t.params.loop){o(y,!1),o(x,!1);return}o(y,t.isBeginning&&!t.params.rewind),o(x,t.isEnd&&!t.params.rewind)}function l(x){x.preventDefault(),!(t.isBeginning&&!t.params.loop&&!t.params.rewind)&&(t.slidePrev(),r("navigationPrev"))}function d(x){x.preventDefault(),!(t.isEnd&&!t.params.loop&&!t.params.rewind)&&(t.slideNext(),r("navigationNext"))}function u(){const x=t.params.navigation;if(t.params.navigation=Ky(t,t.originalParams.navigation,t.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(x.nextEl||x.prevEl))return;let y=a(x.nextEl),b=a(x.prevEl);Object.assign(t.navigation,{nextEl:y,prevEl:b}),y=Ue(y),b=Ue(b);const v=(h,m)=>{h&&h.addEventListener("click",m==="next"?d:l),!t.enabled&&h&&h.classList.add(...x.lockClass.split(" "))};y.forEach(h=>v(h,"next")),b.forEach(h=>v(h,"prev"))}function f(){let{nextEl:x,prevEl:y}=t.navigation;x=Ue(x),y=Ue(y);const b=(v,h)=>{v.removeEventListener("click",h==="next"?d:l),v.classList.remove(...t.params.navigation.disabledClass.split(" "))};x.forEach(v=>b(v,"next")),y.forEach(v=>b(v,"prev"))}i("init",()=>{t.params.navigation.enabled===!1?g():(u(),s())}),i("toEdge fromEdge lock unlock",()=>{s()}),i("destroy",()=>{f()}),i("enable disable",()=>{let{nextEl:x,prevEl:y}=t.navigation;if(x=Ue(x),y=Ue(y),t.enabled){s();return}[...x,...y].filter(b=>!!b).forEach(b=>b.classList.add(t.params.navigation.lockClass))}),i("click",(x,y)=>{let{nextEl:b,prevEl:v}=t.navigation;b=Ue(b),v=Ue(v);const h=y.target;let m=v.includes(h)||b.includes(h);if(t.isElement&&!m){const w=y.path||y.composedPath&&y.composedPath();w&&(m=w.find(S=>b.includes(S)||v.includes(S)))}if(t.params.navigation.hideOnClick&&!m){if(t.pagination&&t.params.pagination&&t.params.pagination.clickable&&(t.pagination.el===h||t.pagination.el.contains(h)))return;let w;b.length?w=b[0].classList.contains(t.params.navigation.hiddenClass):v.length&&(w=v[0].classList.contains(t.params.navigation.hiddenClass)),r(w===!0?"navigationShow":"navigationHide"),[...b,...v].filter(S=>!!S).forEach(S=>S.classList.toggle(t.params.navigation.hiddenClass))}});const p=()=>{t.el.classList.remove(...t.params.navigation.navigationDisabledClass.split(" ")),u(),s()},g=()=>{t.el.classList.add(...t.params.navigation.navigationDisabledClass.split(" ")),f()};Object.assign(t.navigation,{enable:p,disable:g,update:s,init:u,destroy:f})}function da(e){return e===void 0&&(e=""),`.${e.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`}function vi(e){let{swiper:t,extendParams:n,on:i,emit:r}=e;const a="swiper-pagination";n({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:h=>h,formatFractionTotal:h=>h,bulletClass:`${a}-bullet`,bulletActiveClass:`${a}-bullet-active`,modifierClass:`${a}-`,currentClass:`${a}-current`,totalClass:`${a}-total`,hiddenClass:`${a}-hidden`,progressbarFillClass:`${a}-progressbar-fill`,progressbarOppositeClass:`${a}-progressbar-opposite`,clickableClass:`${a}-clickable`,lockClass:`${a}-lock`,horizontalClass:`${a}-horizontal`,verticalClass:`${a}-vertical`,paginationDisabledClass:`${a}-disabled`}}),t.pagination={el:null,bullets:[]};let o,s=0;function l(){return!t.params.pagination.el||!t.pagination.el||Array.isArray(t.pagination.el)&&t.pagination.el.length===0}function d(h,m){const{bulletActiveClass:w}=t.params.pagination;h&&(h=h[`${m==="prev"?"previous":"next"}ElementSibling`],h&&(h.classList.add(`${w}-${m}`),h=h[`${m==="prev"?"previous":"next"}ElementSibling`],h&&h.classList.add(`${w}-${m}-${m}`)))}function u(h,m,w){if(h=h%w,m=m%w,m===h+1)return"next";if(m===h-1)return"previous"}function f(h){const m=h.target.closest(da(t.params.pagination.bulletClass));if(!m)return;h.preventDefault();const w=al(m)*t.params.slidesPerGroup;if(t.params.loop){if(t.realIndex===w)return;const S=u(t.realIndex,w,t.slides.length);S==="next"?t.slideNext():S==="previous"?t.slidePrev():t.slideToLoop(w)}else t.slideTo(w)}function p(){const h=t.rtl,m=t.params.pagination;if(l())return;let w=t.pagination.el;w=Ue(w);let S,C;const A=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.slides.length,T=t.params.loop?Math.ceil(A/t.params.slidesPerGroup):t.snapGrid.length;if(t.params.loop?(C=t.previousRealIndex||0,S=t.params.slidesPerGroup>1?Math.floor(t.realIndex/t.params.slidesPerGroup):t.realIndex):typeof t.snapIndex<"u"?(S=t.snapIndex,C=t.previousSnapIndex):(C=t.previousIndex||0,S=t.activeIndex||0),m.type==="bullets"&&t.pagination.bullets&&t.pagination.bullets.length>0){const z=t.pagination.bullets;let E,P,_;if(m.dynamicBullets&&(o=bu(z[0],t.isHorizontal()?"width":"height"),w.forEach(I=>{I.style[t.isHorizontal()?"width":"height"]=`${o*(m.dynamicMainBullets+4)}px`}),m.dynamicMainBullets>1&&C!==void 0&&(s+=S-(C||0),s>m.dynamicMainBullets-1?s=m.dynamicMainBullets-1:s<0&&(s=0)),E=Math.max(S-s,0),P=E+(Math.min(z.length,m.dynamicMainBullets)-1),_=(P+E)/2),z.forEach(I=>{const R=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(U=>`${m.bulletActiveClass}${U}`)].map(U=>typeof U=="string"&&U.includes(" ")?U.split(" "):U).flat();I.classList.remove(...R)}),w.length>1)z.forEach(I=>{const R=al(I);R===S?I.classList.add(...m.bulletActiveClass.split(" ")):t.isElement&&I.setAttribute("part","bullet"),m.dynamicBullets&&(R>=E&&R<=P&&I.classList.add(...`${m.bulletActiveClass}-main`.split(" ")),R===E&&d(I,"prev"),R===P&&d(I,"next"))});else{const I=z[S];if(I&&I.classList.add(...m.bulletActiveClass.split(" ")),t.isElement&&z.forEach((R,U)=>{R.setAttribute("part",U===S?"bullet-active":"bullet")}),m.dynamicBullets){const R=z[E],U=z[P];for(let Z=E;Z<=P;Z+=1)z[Z]&&z[Z].classList.add(...`${m.bulletActiveClass}-main`.split(" "));d(R,"prev"),d(U,"next")}}if(m.dynamicBullets){const I=Math.min(z.length,m.dynamicMainBullets+4),R=(o*I-o)/2-_*o,U=h?"right":"left";z.forEach(Z=>{Z.style[t.isHorizontal()?U:"top"]=`${R}px`})}}w.forEach((z,E)=>{if(m.type==="fraction"&&(z.querySelectorAll(da(m.currentClass)).forEach(P=>{P.textContent=m.formatFractionCurrent(S+1)}),z.querySelectorAll(da(m.totalClass)).forEach(P=>{P.textContent=m.formatFractionTotal(T)})),m.type==="progressbar"){let P;m.progressbarOpposite?P=t.isHorizontal()?"vertical":"horizontal":P=t.isHorizontal()?"horizontal":"vertical";const _=(S+1)/T;let I=1,R=1;P==="horizontal"?I=_:R=_,z.querySelectorAll(da(m.progressbarFillClass)).forEach(U=>{U.style.transform=`translate3d(0,0,0) scaleX(${I}) scaleY(${R})`,U.style.transitionDuration=`${t.params.speed}ms`})}m.type==="custom"&&m.renderCustom?(z.innerHTML=m.renderCustom(t,S+1,T),E===0&&r("paginationRender",z)):(E===0&&r("paginationRender",z),r("paginationUpdate",z)),t.params.watchOverflow&&t.enabled&&z.classList[t.isLocked?"add":"remove"](m.lockClass)})}function g(){const h=t.params.pagination;if(l())return;const m=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.grid&&t.params.grid.rows>1?t.slides.length/Math.ceil(t.params.grid.rows):t.slides.length;let w=t.pagination.el;w=Ue(w);let S="";if(h.type==="bullets"){let C=t.params.loop?Math.ceil(m/t.params.slidesPerGroup):t.snapGrid.length;t.params.freeMode&&t.params.freeMode.enabled&&C>m&&(C=m);for(let A=0;A<C;A+=1)h.renderBullet?S+=h.renderBullet.call(t,A,h.bulletClass):S+=`<${h.bulletElement} ${t.isElement?'part="bullet"':""} class="${h.bulletClass}"></${h.bulletElement}>`}h.type==="fraction"&&(h.renderFraction?S=h.renderFraction.call(t,h.currentClass,h.totalClass):S=`<span class="${h.currentClass}"></span> / <span class="${h.totalClass}"></span>`),h.type==="progressbar"&&(h.renderProgressbar?S=h.renderProgressbar.call(t,h.progressbarFillClass):S=`<span class="${h.progressbarFillClass}"></span>`),t.pagination.bullets=[],w.forEach(C=>{h.type!=="custom"&&(C.innerHTML=S||""),h.type==="bullets"&&t.pagination.bullets.push(...C.querySelectorAll(da(h.bulletClass)))}),h.type!=="custom"&&r("paginationRender",w[0])}function x(){t.params.pagination=Ky(t,t.originalParams.pagination,t.params.pagination,{el:"swiper-pagination"});const h=t.params.pagination;if(!h.el)return;let m;typeof h.el=="string"&&t.isElement&&(m=t.el.querySelector(h.el)),!m&&typeof h.el=="string"&&(m=[...document.querySelectorAll(h.el)]),m||(m=h.el),!(!m||m.length===0)&&(t.params.uniqueNavElements&&typeof h.el=="string"&&Array.isArray(m)&&m.length>1&&(m=[...t.el.querySelectorAll(h.el)],m.length>1&&(m=m.filter(w=>Ry(w,".swiper")[0]===t.el)[0])),Array.isArray(m)&&m.length===1&&(m=m[0]),Object.assign(t.pagination,{el:m}),m=Ue(m),m.forEach(w=>{h.type==="bullets"&&h.clickable&&w.classList.add(...(h.clickableClass||"").split(" ")),w.classList.add(h.modifierClass+h.type),w.classList.add(t.isHorizontal()?h.horizontalClass:h.verticalClass),h.type==="bullets"&&h.dynamicBullets&&(w.classList.add(`${h.modifierClass}${h.type}-dynamic`),s=0,h.dynamicMainBullets<1&&(h.dynamicMainBullets=1)),h.type==="progressbar"&&h.progressbarOpposite&&w.classList.add(h.progressbarOppositeClass),h.clickable&&w.addEventListener("click",f),t.enabled||w.classList.add(h.lockClass)}))}function y(){const h=t.params.pagination;if(l())return;let m=t.pagination.el;m&&(m=Ue(m),m.forEach(w=>{w.classList.remove(h.hiddenClass),w.classList.remove(h.modifierClass+h.type),w.classList.remove(t.isHorizontal()?h.horizontalClass:h.verticalClass),h.clickable&&(w.classList.remove(...(h.clickableClass||"").split(" ")),w.removeEventListener("click",f))})),t.pagination.bullets&&t.pagination.bullets.forEach(w=>w.classList.remove(...h.bulletActiveClass.split(" ")))}i("changeDirection",()=>{if(!t.pagination||!t.pagination.el)return;const h=t.params.pagination;let{el:m}=t.pagination;m=Ue(m),m.forEach(w=>{w.classList.remove(h.horizontalClass,h.verticalClass),w.classList.add(t.isHorizontal()?h.horizontalClass:h.verticalClass)})}),i("init",()=>{t.params.pagination.enabled===!1?v():(x(),g(),p())}),i("activeIndexChange",()=>{typeof t.snapIndex>"u"&&p()}),i("snapIndexChange",()=>{p()}),i("snapGridLengthChange",()=>{g(),p()}),i("destroy",()=>{y()}),i("enable disable",()=>{let{el:h}=t.pagination;h&&(h=Ue(h),h.forEach(m=>m.classList[t.enabled?"remove":"add"](t.params.pagination.lockClass)))}),i("lock unlock",()=>{p()}),i("click",(h,m)=>{const w=m.target,S=Ue(t.pagination.el);if(t.params.pagination.el&&t.params.pagination.hideOnClick&&S&&S.length>0&&!w.classList.contains(t.params.pagination.bulletClass)){if(t.navigation&&(t.navigation.nextEl&&w===t.navigation.nextEl||t.navigation.prevEl&&w===t.navigation.prevEl))return;const C=S[0].classList.contains(t.params.pagination.hiddenClass);r(C===!0?"paginationShow":"paginationHide"),S.forEach(A=>A.classList.toggle(t.params.pagination.hiddenClass))}});const b=()=>{t.el.classList.remove(t.params.pagination.paginationDisabledClass);let{el:h}=t.pagination;h&&(h=Ue(h),h.forEach(m=>m.classList.remove(t.params.pagination.paginationDisabledClass))),x(),g(),p()},v=()=>{t.el.classList.add(t.params.pagination.paginationDisabledClass);let{el:h}=t.pagination;h&&(h=Ue(h),h.forEach(m=>m.classList.add(t.params.pagination.paginationDisabledClass))),y()};Object.assign(t.pagination,{enable:b,disable:v,render:g,update:p,init:x,destroy:y})}function Vn(e){let{swiper:t,extendParams:n,on:i,emit:r,params:a}=e;t.autoplay={running:!1,paused:!1,timeLeft:0},n({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let o,s,l=a&&a.autoplay?a.autoplay.delay:3e3,d=a&&a.autoplay?a.autoplay.delay:3e3,u,f=new Date().getTime(),p,g,x,y,b,v,h;function m(M){!t||t.destroyed||!t.wrapperEl||M.target===t.wrapperEl&&(t.wrapperEl.removeEventListener("transitionend",m),!(h||M.detail&&M.detail.bySwiperTouchMove)&&E())}const w=()=>{if(t.destroyed||!t.autoplay.running)return;t.autoplay.paused?p=!0:p&&(d=u,p=!1);const M=t.autoplay.paused?u:f+d-new Date().getTime();t.autoplay.timeLeft=M,r("autoplayTimeLeft",M,M/l),s=requestAnimationFrame(()=>{w()})},S=()=>{let M;return t.virtual&&t.params.virtual.enabled?M=t.slides.filter($=>$.classList.contains("swiper-slide-active"))[0]:M=t.slides[t.activeIndex],M?parseInt(M.getAttribute("data-swiper-autoplay"),10):void 0},C=M=>{if(t.destroyed||!t.autoplay.running)return;cancelAnimationFrame(s),w();let V=typeof M>"u"?t.params.autoplay.delay:M;l=t.params.autoplay.delay,d=t.params.autoplay.delay;const $=S();!Number.isNaN($)&&$>0&&typeof M>"u"&&(V=$,l=$,d=$),u=V;const K=t.params.speed,J=()=>{!t||t.destroyed||(t.params.autoplay.reverseDirection?!t.isBeginning||t.params.loop||t.params.rewind?(t.slidePrev(K,!0,!0),r("autoplay")):t.params.autoplay.stopOnLastSlide||(t.slideTo(t.slides.length-1,K,!0,!0),r("autoplay")):!t.isEnd||t.params.loop||t.params.rewind?(t.slideNext(K,!0,!0),r("autoplay")):t.params.autoplay.stopOnLastSlide||(t.slideTo(0,K,!0,!0),r("autoplay")),t.params.cssMode&&(f=new Date().getTime(),requestAnimationFrame(()=>{C()})))};return V>0?(clearTimeout(o),o=setTimeout(()=>{J()},V)):requestAnimationFrame(()=>{J()}),V},A=()=>{f=new Date().getTime(),t.autoplay.running=!0,C(),r("autoplayStart")},T=()=>{t.autoplay.running=!1,clearTimeout(o),cancelAnimationFrame(s),r("autoplayStop")},z=(M,V)=>{if(t.destroyed||!t.autoplay.running)return;clearTimeout(o),M||(v=!0);const $=()=>{r("autoplayPause"),t.params.autoplay.waitForTransition?t.wrapperEl.addEventListener("transitionend",m):E()};if(t.autoplay.paused=!0,V){b&&(u=t.params.autoplay.delay),b=!1,$();return}u=(u||t.params.autoplay.delay)-(new Date().getTime()-f),!(t.isEnd&&u<0&&!t.params.loop)&&(u<0&&(u=0),$())},E=()=>{t.isEnd&&u<0&&!t.params.loop||t.destroyed||!t.autoplay.running||(f=new Date().getTime(),v?(v=!1,C(u)):C(),t.autoplay.paused=!1,r("autoplayResume"))},P=()=>{if(t.destroyed||!t.autoplay.running)return;const M=_n();M.visibilityState==="hidden"&&(v=!0,z(!0)),M.visibilityState==="visible"&&E()},_=M=>{M.pointerType==="mouse"&&(v=!0,h=!0,!(t.animating||t.autoplay.paused)&&z(!0))},I=M=>{M.pointerType==="mouse"&&(h=!1,t.autoplay.paused&&E())},R=()=>{t.params.autoplay.pauseOnMouseEnter&&(t.el.addEventListener("pointerenter",_),t.el.addEventListener("pointerleave",I))},U=()=>{t.el&&typeof t.el!="string"&&(t.el.removeEventListener("pointerenter",_),t.el.removeEventListener("pointerleave",I))},Z=()=>{_n().addEventListener("visibilitychange",P)},Y=()=>{_n().removeEventListener("visibilitychange",P)};i("init",()=>{t.params.autoplay.enabled&&(R(),Z(),A())}),i("destroy",()=>{U(),Y(),t.autoplay.running&&T()}),i("_freeModeStaticRelease",()=>{(x||v)&&E()}),i("_freeModeNoMomentumRelease",()=>{t.params.autoplay.disableOnInteraction?T():z(!0,!0)}),i("beforeTransitionStart",(M,V,$)=>{t.destroyed||!t.autoplay.running||($||!t.params.autoplay.disableOnInteraction?z(!0,!0):T())}),i("sliderFirstMove",()=>{if(!(t.destroyed||!t.autoplay.running)){if(t.params.autoplay.disableOnInteraction){T();return}g=!0,x=!1,v=!1,y=setTimeout(()=>{v=!0,x=!0,z(!0)},200)}}),i("touchEnd",()=>{if(!(t.destroyed||!t.autoplay.running||!g)){if(clearTimeout(y),clearTimeout(o),t.params.autoplay.disableOnInteraction){x=!1,g=!1;return}x&&t.params.cssMode&&E(),x=!1,g=!1}}),i("slideChange",()=>{t.destroyed||!t.autoplay.running||(b=!0)}),Object.assign(t.autoplay,{start:A,stop:T,pause:z,resume:E})}function mC(e){const{effect:t,swiper:n,on:i,setTranslate:r,setTransition:a,overwriteParams:o,perspective:s,recreateShadows:l,getEffectParams:d}=e;i("beforeInit",()=>{if(n.params.effect!==t)return;n.classNames.push(`${n.params.containerModifierClass}${t}`),s&&s()&&n.classNames.push(`${n.params.containerModifierClass}3d`);const f=o?o():{};Object.assign(n.params,f),Object.assign(n.originalParams,f)}),i("setTranslate",()=>{n.params.effect===t&&r()}),i("setTransition",(f,p)=>{n.params.effect===t&&a(p)}),i("transitionEnd",()=>{if(n.params.effect===t&&l){if(!d||!d().slideShadows)return;n.slides.forEach(f=>{f.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(p=>p.remove())}),l()}});let u;i("virtualUpdate",()=>{n.params.effect===t&&(n.slides.length||(u=!0),requestAnimationFrame(()=>{u&&n.slides&&n.slides.length&&(r(),u=!1)}))})}function gC(e,t){const n=hp(t);return n!==t&&(n.style.backfaceVisibility="hidden",n.style["-webkit-backface-visibility"]="hidden"),n}function Dm(e,t,n){const i=`swiper-slide-shadow${n?`-${n}`:""}${` swiper-slide-shadow-${e}`}`,r=hp(t);let a=r.querySelector(`.${i.split(" ").join(".")}`);return a||(a=ro("div",i.split(" ")),r.append(a)),a}function vC(e){let{swiper:t,extendParams:n,on:i}=e;n({coverflowEffect:{rotate:50,stretch:0,depth:100,scale:1,modifier:1,slideShadows:!0}}),mC({effect:"coverflow",swiper:t,on:i,setTranslate:()=>{const{width:o,height:s,slides:l,slidesSizesGrid:d}=t,u=t.params.coverflowEffect,f=t.isHorizontal(),p=t.translate,g=f?-p+o/2:-p+s/2,x=f?u.rotate:-u.rotate,y=u.depth,b=K7(t);for(let v=0,h=l.length;v<h;v+=1){const m=l[v],w=d[v],S=m.swiperSlideOffset,C=(g-S-w/2)/w,A=typeof u.modifier=="function"?u.modifier(C):C*u.modifier;let T=f?x*A:0,z=f?0:x*A,E=-y*Math.abs(A),P=u.stretch;typeof P=="string"&&P.indexOf("%")!==-1&&(P=parseFloat(u.stretch)/100*w);let _=f?0:P*A,I=f?P*A:0,R=1-(1-u.scale)*Math.abs(A);Math.abs(I)<.001&&(I=0),Math.abs(_)<.001&&(_=0),Math.abs(E)<.001&&(E=0),Math.abs(T)<.001&&(T=0),Math.abs(z)<.001&&(z=0),Math.abs(R)<.001&&(R=0);const U=`translate3d(${I}px,${_}px,${E}px)  rotateX(${b(z)}deg) rotateY(${b(T)}deg) scale(${R})`,Z=gC(u,m);if(Z.style.transform=U,m.style.zIndex=-Math.abs(Math.round(A))+1,u.slideShadows){let Y=f?m.querySelector(".swiper-slide-shadow-left"):m.querySelector(".swiper-slide-shadow-top"),M=f?m.querySelector(".swiper-slide-shadow-right"):m.querySelector(".swiper-slide-shadow-bottom");Y||(Y=Dm("coverflow",m,f?"left":"top")),M||(M=Dm("coverflow",m,f?"right":"bottom")),Y&&(Y.style.opacity=A>0?A:0),M&&(M.style.opacity=-A>0?-A:0)}}},setTransition:o=>{t.slides.map(l=>hp(l)).forEach(l=>{l.style.transitionDuration=`${o}ms`,l.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(d=>{d.style.transitionDuration=`${o}ms`})})},perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0})})}const xC=k.button`
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
`,gp=({text:e,onClick:t,backDefine:n,colorDefine:i})=>c.jsxs(xC,{id:"clickwpp",backDefine:n,colorDefine:i,onClick:t,children:[e,c.jsx(rp,{className:"icon"})]}),yC=Yr`
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
`,wC=mn`
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
`,bC=k.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px 0 20px 0;

    @media (max-width: 768px){
        border-radius: 0 15px 0 20px;
    }
`,SC=k.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  border-radius: 0 20px 20px 0;
  animation: ${wC} 5s ease-in-out infinite;
  background-image: ${({backgroundImage:e})=>`url(${e})`};
  background-size: cover;
  background-position: center;
`,jC=k.div`
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
`,CC=k.div`
    position: absolute;
    bottom: 20px;
    left: 20px;
    color: var(--color--white);
    font-family: Arial, sans-serif;
`,kC=k.h2`
    font-size: 24px;
    font-weight: bold;
    font-family: var(--font--comfortaa);
`,TC=k.p`
    font-size: 16px;
    margin: 5px 0;
    font-family: var(--font--avenir);
`,AC=k.div`
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
`,EC=k.div`
    width: 100%;
    max-width: 60%;
    margin: 0 auto;

    @media (max-width: 640px) {
        max-width: 100%;
    }
`,Vm=({content:e=[],contentType:t="image",spaceBetween:n=10,slidesPerView:i=1,height:r="300px",autoplayDelay:a=3e3,showPagination:o=!0,showNavigation:s=!0})=>c.jsxs(EC,{children:[c.jsx(yC,{}),c.jsx(Jt,{modules:[gi,vi,Vn],navigation:s,pagination:o?{clickable:!0}:!1,spaceBetween:n,loop:!0,slidesPerView:i,autoplay:{delay:a,disableOnInteraction:!1,pauseOnMouseEnter:!0},style:{height:r},breakpoints:{640:{slidesPerView:1,spaceBetween:10,height:"200px"},768:{slidesPerView:1,spaceBetween:20,height:"250px"},1024:{slidesPerView:1,spaceBetween:30,height:"300px"}},children:e.map((l,d)=>c.jsx(en,{children:t==="image"?c.jsx(bC,{src:l.src,loading:"lazy",alt:l.alt||`Slide ${d+1}`}):c.jsxs(SC,{backgroundImage:l.backgroundImage,children:[c.jsx(jC,{}),c.jsxs(CC,{children:[c.jsx(kC,{children:l.title}),c.jsx(TC,{children:l.subtitle}),c.jsx(AC,{children:l.features.map((u,f)=>c.jsxs("span",{children:[u.icon," ",u.text]},f))}),c.jsx(gp,{text:"Conhecer todas as acomodações"})]})]})},d))})]}),Tr=k.button`
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
`,Nm=k.svg`
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

    ${Tr}:hover &.arr-1 {
        right: -25%;
    }

    ${Tr}:hover &.arr-2 {
        left: 16px;
    }

    ${Tr}:hover & {
        fill: var(--color--white);
    }
`,PC=k.span`
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

    ${Tr}:hover & {
        width: 220px;
        height: 220px;
        opacity: 1;
        color: var(--color--white);
    }
`,GC=k.span`
    position: relative;
    z-index: 1;
    transform: translateX(-12px);
    transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);

    ${Tr}:hover & {
        transform: translateX(12px);
        color: var(--color--white);
    }
`,Fe=({text:e,onClick:t,color:n,backgroundColor:i,borderColor:r,hoverColor:a})=>c.jsxs(Tr,{id:"clickwpp",onClick:t,color:n,background:i,borderColor:r,hoverColor:a,children:[c.jsx(Nm,{className:"arr-2",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:c.jsx("path",{d:"M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"})}),c.jsx(GC,{id:"clickwpp",children:e}),c.jsx(PC,{}),c.jsx(Nm,{className:"arr-1",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:c.jsx("path",{d:"M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"})})]}),zC=mn`
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
`,_C=k.div`
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
    animation: ${zC} 8s ease-in-out infinite;
    pointer-events: none;

    @media (max-width: 768px) {
      animation: none;
      border-top: none;
      border-radius: 0 0 35px 0;
      border: 1px solid var(--color--black);
    }
  }
`,MC=k.h1`
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
`,LC=k.p`
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
`,OC=k.div`
  display: flex;
  width: 100%;
  gap: 25px;

  @media (max-width:768px){
    gap: 15px;
  }
`,IC=k.p`
  font-size: .6rem;
  opacity: .6;
  font-weight: 400;
  background-color: var(--color--green);
  padding: 5px 10px;
  color: #000;
  border-radius: 5px;
  transition: all .1s ease;
  font-family: var(--font--comfortaa);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: default;

  &:hover{
    transform: scale(1.05) translateX(5px);
    border: 1px solid red;
    font-weight: 600;
  }
`,Fm=({text:e,title:t,borderColor:n,buttonColor:i,buttonHover:r,buttonBorder:a,targetPage:o,idade:s})=>{const l=Cl(),d=()=>{l(o)},u=()=>{window.open("https://wa.link/dojlwi","_blank")};return c.jsxs(_C,{borderColor:n,children:[c.jsx(MC,{children:t}),c.jsx(LC,{children:e}),c.jsxs(OC,{children:[c.jsx(Fe,{onClick:u,text:"Fazer reserva!",backgroundColor:"transparent",borderColor:a,hoverColor:r,border:"1px solid",color:"var(--color--black)"}),c.jsx(Fe,{onClick:d,text:"Saber mais",backgroundColor:i,borderColor:a,hoverColor:r,border:"1px solid",color:"var(--color--black)"})]}),c.jsx(IC,{children:s})]})};function RC(e){return Q({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z"},child:[]}]})(e)}function vp(e){return Q({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M7 11v2h10v-2c0-1.86 1.28-3.41 3-3.86V6c0-1.65-1.35-3-3-3H7C5.35 3 4 4.35 4 6v1.14c1.72.45 3 2 3 3.86z"},child:[]},{tag:"path",attr:{d:"M21 9c-1.1 0-2 .9-2 2v4H5v-4c0-1.1-.9-2-2-2s-2 .9-2 2v5c0 1.65 1.35 3 3 3v1c0 .55.45 1 1 1s1-.45 1-1v-1h12v1c0 .55.45 1 1 1s1-.45 1-1v-1c1.65 0 3-1.35 3-3v-5c0-1.1-.9-2-2-2z"},child:[]}]})(e)}function Ke(e){return Q({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M22 9 12 2 2 9h9v13h2V9z"},child:[]},{tag:"path",attr:{d:"m4.14 12-1.96.37.82 4.37V22h2l.02-4H7v4h2v-6H4.9zM19.1 16H15v6h2v-4h1.98l.02 4h2v-5.26l.82-4.37-1.96-.37z"},child:[]}]})(e)}function DC(e){return Q({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"circle",attr:{cx:"4.5",cy:"9.5",r:"2.5"},child:[]},{tag:"circle",attr:{cx:"9",cy:"5.5",r:"2.5"},child:[]},{tag:"circle",attr:{cx:"15",cy:"5.5",r:"2.5"},child:[]},{tag:"circle",attr:{cx:"19.5",cy:"9.5",r:"2.5"},child:[]},{tag:"path",attr:{d:"M17.34 14.86c-.87-1.02-1.6-1.89-2.48-2.91-.46-.54-1.05-1.08-1.75-1.32-.11-.04-.22-.07-.33-.09-.25-.04-.52-.04-.78-.04s-.53 0-.79.05c-.11.02-.22.05-.33.09-.7.24-1.28.78-1.75 1.32-.87 1.02-1.6 1.89-2.48 2.91-1.31 1.31-2.92 2.76-2.62 4.79.29 1.02 1.02 2.03 2.33 2.32.73.15 3.06-.44 5.54-.44h.18c2.48 0 4.81.58 5.54.44 1.31-.29 2.04-1.31 2.33-2.32.31-2.04-1.3-3.49-2.61-4.8z"},child:[]}]})(e)}function wt(e){return Q({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"m10 17 5-5-5-5v10z"},child:[]}]})(e)}function VC(e){return Q({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5"},child:[]},{tag:"path",attr:{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"},child:[]},{tag:"line",attr:{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5"},child:[]}]})(e)}function NC(e){return Q({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m9 9 5 12 1.774-5.226L21 14 9 9z"},child:[]},{tag:"path",attr:{d:"m16.071 16.071 4.243 4.243"},child:[]},{tag:"path",attr:{d:"m7.188 2.239.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656-2.12 2.122"},child:[]}]})(e)}const FC=k.button`
  position: relative;
  overflow: hidden;
  outline: none;
  cursor: pointer;
  border-radius: 50px;
  background-color: var(--color--green);
  border: solid 2px ${({borderColor:e})=>e||"var(--color--black)"};
  color: ${({textColor:e})=>e||"var(--color--black)"};
  font-family: inherit;

  &:hover .default-btn {
    transform: translate(0%, -100%);
  }

  &:hover .hover-btn {
    transform: translate(0%, 0%);
  }
`,Xy=k.div`
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
`,$C=k(Xy)`
  position: absolute;
  inset: 0;
  background-color: ${({hoverColor:e})=>e||"var(--color--blue)"};
  transform: translate(0%, 100%);
`,BC=k.span`
  color: ${({textColor:e})=>e||"var(--color--black)"};
`,HC=k.span`
  color: ${({hoverTextColor:e})=>e||"var(--color--white)"};
`,xp=({text:e="Quick View",text2:t="Clique e reserve",borderColor:n,textColor:i,hoverColor:r,hoverTextColor:a})=>{const o=()=>{window.open("https://wa.link/dojlwi","_blank")};return c.jsxs(FC,{borderColor:n,textColor:i,onClick:o,id:"clickwpp",children:[c.jsxs(Xy,{className:"default-btn",children:[c.jsx(RC,{size:15,color:i||"var(--color--black)"}),c.jsx(BC,{textColor:i,children:e})]}),c.jsxs($C,{className:"hover-btn",hoverColor:r,id:"clickwpp",children:[c.jsx(NC,{size:15,color:a||"var(--color--white)"}),c.jsx(HC,{hoverTextColor:a,children:t})]})]})};var Qy={exports:{}};(function(e,t){(function(n,i){e.exports=i()})(Zm,function(){return function(n){function i(a){if(r[a])return r[a].exports;var o=r[a]={exports:{},id:a,loaded:!1};return n[a].call(o.exports,o,o.exports,i),o.loaded=!0,o.exports}var r={};return i.m=n,i.c=r,i.p="dist/",i(0)}([function(n,i,r){function a(R){return R&&R.__esModule?R:{default:R}}var o=Object.assign||function(R){for(var U=1;U<arguments.length;U++){var Z=arguments[U];for(var Y in Z)Object.prototype.hasOwnProperty.call(Z,Y)&&(R[Y]=Z[Y])}return R},s=r(1),l=(a(s),r(6)),d=a(l),u=r(7),f=a(u),p=r(8),g=a(p),x=r(9),y=a(x),b=r(10),v=a(b),h=r(11),m=a(h),w=r(14),S=a(w),C=[],A=!1,T={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},z=function(){var R=arguments.length>0&&arguments[0]!==void 0&&arguments[0];if(R&&(A=!0),A)return C=(0,m.default)(C,T),(0,v.default)(C,T.once),C},E=function(){C=(0,S.default)(),z()},P=function(){C.forEach(function(R,U){R.node.removeAttribute("data-aos"),R.node.removeAttribute("data-aos-easing"),R.node.removeAttribute("data-aos-duration"),R.node.removeAttribute("data-aos-delay")})},_=function(R){return R===!0||R==="mobile"&&y.default.mobile()||R==="phone"&&y.default.phone()||R==="tablet"&&y.default.tablet()||typeof R=="function"&&R()===!0},I=function(R){T=o(T,R),C=(0,S.default)();var U=document.all&&!window.atob;return _(T.disable)||U?P():(T.disableMutationObserver||g.default.isSupported()||(console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),T.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",T.easing),document.querySelector("body").setAttribute("data-aos-duration",T.duration),document.querySelector("body").setAttribute("data-aos-delay",T.delay),T.startEvent==="DOMContentLoaded"&&["complete","interactive"].indexOf(document.readyState)>-1?z(!0):T.startEvent==="load"?window.addEventListener(T.startEvent,function(){z(!0)}):document.addEventListener(T.startEvent,function(){z(!0)}),window.addEventListener("resize",(0,f.default)(z,T.debounceDelay,!0)),window.addEventListener("orientationchange",(0,f.default)(z,T.debounceDelay,!0)),window.addEventListener("scroll",(0,d.default)(function(){(0,v.default)(C,T.once)},T.throttleDelay)),T.disableMutationObserver||g.default.ready("[data-aos]",E),C)};n.exports={init:I,refresh:z,refreshHard:E}},function(n,i){},,,,,function(n,i){(function(r){function a(_,I,R){function U(B){var te=pe,se=Ce;return pe=Ce=void 0,D=B,le=_.apply(se,te)}function Z(B){return D=B,G=setTimeout(V,I),O?U(B):le}function Y(B){var te=B-L,se=B-D,fe=I-te;return q?E(fe,ue-se):fe}function M(B){var te=B-L,se=B-D;return L===void 0||te>=I||te<0||q&&se>=ue}function V(){var B=P();return M(B)?$(B):void(G=setTimeout(V,Y(B)))}function $(B){return G=void 0,F&&pe?U(B):(pe=Ce=void 0,le)}function K(){G!==void 0&&clearTimeout(G),D=0,pe=L=Ce=G=void 0}function J(){return G===void 0?le:$(P())}function ye(){var B=P(),te=M(B);if(pe=arguments,Ce=this,L=B,te){if(G===void 0)return Z(L);if(q)return G=setTimeout(V,I),U(L)}return G===void 0&&(G=setTimeout(V,I)),le}var pe,Ce,ue,le,G,L,D=0,O=!1,q=!1,F=!0;if(typeof _!="function")throw new TypeError(p);return I=u(I)||0,s(R)&&(O=!!R.leading,q="maxWait"in R,ue=q?z(u(R.maxWait)||0,I):ue,F="trailing"in R?!!R.trailing:F),ye.cancel=K,ye.flush=J,ye}function o(_,I,R){var U=!0,Z=!0;if(typeof _!="function")throw new TypeError(p);return s(R)&&(U="leading"in R?!!R.leading:U,Z="trailing"in R?!!R.trailing:Z),a(_,I,{leading:U,maxWait:I,trailing:Z})}function s(_){var I=typeof _>"u"?"undefined":f(_);return!!_&&(I=="object"||I=="function")}function l(_){return!!_&&(typeof _>"u"?"undefined":f(_))=="object"}function d(_){return(typeof _>"u"?"undefined":f(_))=="symbol"||l(_)&&T.call(_)==x}function u(_){if(typeof _=="number")return _;if(d(_))return g;if(s(_)){var I=typeof _.valueOf=="function"?_.valueOf():_;_=s(I)?I+"":I}if(typeof _!="string")return _===0?_:+_;_=_.replace(y,"");var R=v.test(_);return R||h.test(_)?m(_.slice(2),R?2:8):b.test(_)?g:+_}var f=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(_){return typeof _}:function(_){return _&&typeof Symbol=="function"&&_.constructor===Symbol&&_!==Symbol.prototype?"symbol":typeof _},p="Expected a function",g=NaN,x="[object Symbol]",y=/^\s+|\s+$/g,b=/^[-+]0x[0-9a-f]+$/i,v=/^0b[01]+$/i,h=/^0o[0-7]+$/i,m=parseInt,w=(typeof r>"u"?"undefined":f(r))=="object"&&r&&r.Object===Object&&r,S=(typeof self>"u"?"undefined":f(self))=="object"&&self&&self.Object===Object&&self,C=w||S||Function("return this")(),A=Object.prototype,T=A.toString,z=Math.max,E=Math.min,P=function(){return C.Date.now()};n.exports=o}).call(i,function(){return this}())},function(n,i){(function(r){function a(P,_,I){function R(F){var B=ye,te=pe;return ye=pe=void 0,L=F,ue=P.apply(te,B)}function U(F){return L=F,le=setTimeout(M,_),D?R(F):ue}function Z(F){var B=F-G,te=F-L,se=_-B;return O?z(se,Ce-te):se}function Y(F){var B=F-G,te=F-L;return G===void 0||B>=_||B<0||O&&te>=Ce}function M(){var F=E();return Y(F)?V(F):void(le=setTimeout(M,Z(F)))}function V(F){return le=void 0,q&&ye?R(F):(ye=pe=void 0,ue)}function $(){le!==void 0&&clearTimeout(le),L=0,ye=G=pe=le=void 0}function K(){return le===void 0?ue:V(E())}function J(){var F=E(),B=Y(F);if(ye=arguments,pe=this,G=F,B){if(le===void 0)return U(G);if(O)return le=setTimeout(M,_),R(G)}return le===void 0&&(le=setTimeout(M,_)),ue}var ye,pe,Ce,ue,le,G,L=0,D=!1,O=!1,q=!0;if(typeof P!="function")throw new TypeError(f);return _=d(_)||0,o(I)&&(D=!!I.leading,O="maxWait"in I,Ce=O?T(d(I.maxWait)||0,_):Ce,q="trailing"in I?!!I.trailing:q),J.cancel=$,J.flush=K,J}function o(P){var _=typeof P>"u"?"undefined":u(P);return!!P&&(_=="object"||_=="function")}function s(P){return!!P&&(typeof P>"u"?"undefined":u(P))=="object"}function l(P){return(typeof P>"u"?"undefined":u(P))=="symbol"||s(P)&&A.call(P)==g}function d(P){if(typeof P=="number")return P;if(l(P))return p;if(o(P)){var _=typeof P.valueOf=="function"?P.valueOf():P;P=o(_)?_+"":_}if(typeof P!="string")return P===0?P:+P;P=P.replace(x,"");var I=b.test(P);return I||v.test(P)?h(P.slice(2),I?2:8):y.test(P)?p:+P}var u=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(P){return typeof P}:function(P){return P&&typeof Symbol=="function"&&P.constructor===Symbol&&P!==Symbol.prototype?"symbol":typeof P},f="Expected a function",p=NaN,g="[object Symbol]",x=/^\s+|\s+$/g,y=/^[-+]0x[0-9a-f]+$/i,b=/^0b[01]+$/i,v=/^0o[0-7]+$/i,h=parseInt,m=(typeof r>"u"?"undefined":u(r))=="object"&&r&&r.Object===Object&&r,w=(typeof self>"u"?"undefined":u(self))=="object"&&self&&self.Object===Object&&self,S=m||w||Function("return this")(),C=Object.prototype,A=C.toString,T=Math.max,z=Math.min,E=function(){return S.Date.now()};n.exports=a}).call(i,function(){return this}())},function(n,i){function r(u){var f=void 0,p=void 0;for(f=0;f<u.length;f+=1)if(p=u[f],p.dataset&&p.dataset.aos||p.children&&r(p.children))return!0;return!1}function a(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function o(){return!!a()}function s(u,f){var p=window.document,g=a(),x=new g(l);d=f,x.observe(p.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function l(u){u&&u.forEach(function(f){var p=Array.prototype.slice.call(f.addedNodes),g=Array.prototype.slice.call(f.removedNodes),x=p.concat(g);if(r(x))return d()})}Object.defineProperty(i,"__esModule",{value:!0});var d=function(){};i.default={isSupported:o,ready:s}},function(n,i){function r(p,g){if(!(p instanceof g))throw new TypeError("Cannot call a class as a function")}function a(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(i,"__esModule",{value:!0});var o=function(){function p(g,x){for(var y=0;y<x.length;y++){var b=x[y];b.enumerable=b.enumerable||!1,b.configurable=!0,"value"in b&&(b.writable=!0),Object.defineProperty(g,b.key,b)}}return function(g,x,y){return x&&p(g.prototype,x),y&&p(g,y),g}}(),s=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,l=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,d=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,u=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,f=function(){function p(){r(this,p)}return o(p,[{key:"phone",value:function(){var g=a();return!(!s.test(g)&&!l.test(g.substr(0,4)))}},{key:"mobile",value:function(){var g=a();return!(!d.test(g)&&!u.test(g.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),p}();i.default=new f},function(n,i){Object.defineProperty(i,"__esModule",{value:!0});var r=function(o,s,l){var d=o.node.getAttribute("data-aos-once");s>o.position?o.node.classList.add("aos-animate"):typeof d<"u"&&(d==="false"||!l&&d!=="true")&&o.node.classList.remove("aos-animate")},a=function(o,s){var l=window.pageYOffset,d=window.innerHeight;o.forEach(function(u,f){r(u,d+l,s)})};i.default=a},function(n,i,r){function a(d){return d&&d.__esModule?d:{default:d}}Object.defineProperty(i,"__esModule",{value:!0});var o=r(12),s=a(o),l=function(d,u){return d.forEach(function(f,p){f.node.classList.add("aos-init"),f.position=(0,s.default)(f.node,u.offset)}),d};i.default=l},function(n,i,r){function a(d){return d&&d.__esModule?d:{default:d}}Object.defineProperty(i,"__esModule",{value:!0});var o=r(13),s=a(o),l=function(d,u){var f=0,p=0,g=window.innerHeight,x={offset:d.getAttribute("data-aos-offset"),anchor:d.getAttribute("data-aos-anchor"),anchorPlacement:d.getAttribute("data-aos-anchor-placement")};switch(x.offset&&!isNaN(x.offset)&&(p=parseInt(x.offset)),x.anchor&&document.querySelectorAll(x.anchor)&&(d=document.querySelectorAll(x.anchor)[0]),f=(0,s.default)(d).top,x.anchorPlacement){case"top-bottom":break;case"center-bottom":f+=d.offsetHeight/2;break;case"bottom-bottom":f+=d.offsetHeight;break;case"top-center":f+=g/2;break;case"bottom-center":f+=g/2+d.offsetHeight;break;case"center-center":f+=g/2+d.offsetHeight/2;break;case"top-top":f+=g;break;case"bottom-top":f+=d.offsetHeight+g;break;case"center-top":f+=d.offsetHeight/2+g}return x.anchorPlacement||x.offset||isNaN(u)||(p=u),f+p};i.default=l},function(n,i){Object.defineProperty(i,"__esModule",{value:!0});var r=function(a){for(var o=0,s=0;a&&!isNaN(a.offsetLeft)&&!isNaN(a.offsetTop);)o+=a.offsetLeft-(a.tagName!="BODY"?a.scrollLeft:0),s+=a.offsetTop-(a.tagName!="BODY"?a.scrollTop:0),a=a.offsetParent;return{top:s,left:o}};i.default=r},function(n,i){Object.defineProperty(i,"__esModule",{value:!0});var r=function(a){return a=a||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(a,function(o){return{node:o}})};i.default=r}])})})(Qy);var UC=Qy.exports;const Oe=Bi(UC),WC=Yr`
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
`,qC=k.div`
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
`,YC=k.div`
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
`,KC=k.div`
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
`,XC=k.div`
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
`,QC=k.h2`
    font-size: 24px;
    font-weight: bold;
    font-family: var(--font--comfortaa);
    margin: 0;
    margin-bottom: 15px;

    @media (max-width: 768px) {
        font-size: 26px;
        margin-bottom: 0;
    }
`,ZC=k.p`
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
`,JC=({content:e=[],height:t="300px",width:n="100%",autoplayDelay:i=1500,showPagination:r=!0,showNavigation:a=!0})=>{const o=j.useRef([]);return j.useEffect(()=>{o.current&&o.current.forEach(s=>{s&&window.VanillaTilt.init(s,{max:2,speed:400,glare:!1})})},[]),c.jsxs(c.Fragment,{children:[c.jsx(WC,{}),c.jsx(Jt,{modules:[gi,vi,Vn,vC],effect:"coverflow",grabCursor:!0,centeredSlides:!0,loop:!0,slidesPerView:"auto",coverflowEffect:{rotate:50,stretch:50,depth:300,modifier:1,slideShadows:!0},navigation:a,pagination:r?{clickable:!0}:!1,autoplay:{delay:i,disableOnInteraction:!1,pauseOnMouseEnter:!0},breakpoints:{1024:{slidesPerView:2},768:{slidesPerView:2},0:{slidesPerView:1}},style:{width:n,height:t},children:e.map((s,l)=>c.jsx(en,{style:{width:"60%"},children:c.jsxs(qC,{ref:d=>o.current[l]=d,backgroundImage:s.backgroundImage,children:[c.jsx(XC,{children:s.topLeftText}),c.jsx(YC,{}),c.jsxs(KC,{"data-aos":"fade-up","data-aos-delay":"100",children:[c.jsx(QC,{children:s.title}),c.jsx(ZC,{children:s.description}),c.jsx(xp,{text:"Reservar agora",text2:"Clique e reserve agora",borderColor:"var(--color--white)",textColor:"var(--color--black)",hoverColor:"var(--color--white)",hoverTextColor:"var(--color--black)"})]})]})},l))})]})},ek=k(Me.div)`
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
`,tk=k(Me.img)`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;

    &:hover {
        transform: scale(1.2) rotate(3deg); // Zoom e rotação ao passar o mouse
    }
`,nk=k(Me.div)`
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
`,Cu=({images:e=[],reverse:t=!1})=>c.jsx(Jt,{modules:[Vn],spaceBetween:0,loop:!0,autoplay:{delay:0,disableOnInteraction:!1,reverseDirection:t,stopOnLastSlide:!1,pauseOnMouseEnter:!0},speed:2e3,freeMode:!0,freeModeMomentum:!1,breakpoints:{320:{slidesPerView:3},768:{slidesPerView:4},1024:{slidesPerView:5}},children:e.map((n,i)=>c.jsx(en,{children:c.jsxs(ek,{initial:{scale:.8,rotate:-5,opacity:0},animate:{scale:1,rotate:0,opacity:1},transition:{duration:.6,ease:"easeOut"},children:[c.jsx(tk,{src:n.src,alt:n.alt||`Imagem ${i+1}`,initial:{scale:1},whileHover:{scale:1.2,rotate:3},transition:{duration:.3}}),c.jsx(nk,{initial:{y:30,opacity:0},animate:{y:0,opacity:1},transition:{duration:.7,delay:.4,ease:"backOut"},children:n.label})]})},i))}),ik=mn`
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
`,rk=k.div`
    display: flex;
    flex-direction: column;
    height: auto;
    padding: 10px;
    background: var(--color--white);
    border-radius: 12px;
    overflow: hidden;
    width: 100%;
    animation: ${ik} 5s ease-in-out infinite;
    background-color: rgba(0, 0, 0, 0.1);

    @media (max-width: 768px){
        border: none;
        padding: 5px;
        background-color: rgba(0, 0, 0, 0.1);
        animation: none;
        border-radius: 15px 15px 5px 5px;
    }
`,ak=k.img`
    width: 100%;
    height: 40vh!important;
    object-fit: cover;
    border-radius: 10px;

    @media (max-width: 768px){
        border: 2px solid var(--color--black);
        height: 320px;
    }
`,ok=k.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: #333;
`,sk=k.h3`
    font-size: 22px;
    font-weight: bold;
    font-family: var(--font--comfortaa);
    margin: 0;
`,lk=k.p`
    font-size: 14px;
    color: #777;
    font-family: var(--font--comfortaa);
    font-weight: 100;
    margin: 0;
`,ck=k.div`
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
`,dk=k.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
    font-size: 16px;
`,uk=k.p`
    font-size: 18px;
    font-family: var(--font--comfortaa);
    font-weight: bold;
    margin: 0;
    color: #333;

    & > span{
        font-size: 10px;
    }
`,vo=({events:e=[]})=>c.jsx(Jt,{modules:[gi,vi,Vn],autoplay:{delay:7e3,disableOnInteraction:!1,pauseOnMouseEnter:!0},spaceBetween:20,navigation:!0,pagination:!1,loop:!0,breakpoints:{1024:{slidesPerView:3},768:{slidesPerView:2},0:{slidesPerView:1}},children:e.map((t,n)=>c.jsx(en,{children:c.jsxs(rk,{"data-aos":"fade-up","data-aos-delay":"0",children:[c.jsx(ak,{src:t.image,alt:t.title,"data-aos":"fade-up","data-aos-delay":"100"}),c.jsxs(ok,{children:[c.jsx(sk,{"data-aos":"fade-up","data-aos-delay":"200",children:t.title}),c.jsx(lk,{"data-aos":"fade-down","data-aos-delay":"250",children:t.dateRange}),c.jsx(ck,{"data-aos":"fade-up","data-aos-delay":"300",children:t.features.map((i,r)=>c.jsxs("span",{"data-aos":"fade-up","data-aos-delay":"400",children:[i.icon," ",i.text]},r))}),c.jsx(dk,{children:c.jsxs(uk,{"data-aos":"fade-in","data-aos-delay":"500",children:["A partir de: ",c.jsx("span",{children:"12x"}),"R$",t.price]})}),c.jsx(xp,{text:"Quero fazer minha reserva agora",text2:"Clique e reserve!",borderColor:"var(--color--black)",textColor:"var(--color--black)",hoverColor:"var(--color--black)",hoverTextColor:"var(--color--white)",onClick:()=>window.open("https://wa.link/dojlwi","_blank")})]})]})},n))});function fk(e){return Q({tag:"svg",attr:{viewBox:"0 0 1024 1024",fill:"currentColor",fillRule:"evenodd"},child:[{tag:"path",attr:{d:"M448 0C200.807 0 0 200.807 0 448s200.807 448 448 448 448-200.807 448-448S695.193 0 448 0m0 38.957c226.14 0 409.043 182.904 409.043 409.043 0 226.14-182.904 409.043-409.043 409.043-41.365 0-81.269-6.19-118.886-17.576 16.756-28.014 38.39-68.058 46.984-101.12 5.106-19.601 26.098-99.559 26.098-99.559 13.642 26.045 53.503 48.087 95.945 48.087 126.295 0 217.343-116.149 217.343-260.484 0-138.375-112.916-241.88-258.201-241.88-180.753 0-276.69 121.314-276.69 253.407 0 61.433 32.673 137.902 84.989 162.256 7.924 3.688 12.18 2.09 14-5.592 1.4-5.831 8.468-34.255 11.64-47.479 1.016-4.22.524-7.866-2.89-12.021-17.316-21.004-31.196-59.583-31.196-95.566 0-92.374 69.932-181.771 189.076-181.771 102.875 0 174.924 70.13 174.924 170.396 0 113.281-57.2 191.777-131.63 191.777-41.106 0-71.885-34.005-62.011-75.706 11.838-49.77 34.695-103.478 34.695-139.43 0-32.149-17.253-58.967-52.994-58.967-42.024 0-75.783 43.447-75.783 101.69 0 37.063 12.554 62.163 12.554 62.163s-41.511 175.51-49.114 208.174c-7.619 32.642-5.578 76.605-2.435 109.337C144.551 766.518 38.957 619.785 38.957 448 38.957 221.86 221.86 38.957 448 38.957",transform:"translate(64 64)"},child:[]}]})(e)}function pk(e){return Q({tag:"svg",attr:{viewBox:"0 0 1024 1024",fill:"currentColor",fillRule:"evenodd"},child:[{tag:"path",attr:{d:"M365.014.667C408.68 0 452.011.333 495.342 0c2.667 51 21 102.999 58.33 138.998 37.332 37 89.997 54 141.328 59.666v134.332c-47.998-1.667-96.33-11.667-139.994-32.333-19-8.667-36.665-19.667-53.998-31-.333 97.332.334 194.665-.666 291.663-2.667 46.666-18 93-44.998 131.332-43.665 64-119.328 105.665-196.992 106.999-47.664 2.666-95.329-10.334-135.994-34.333C55.028 725.658 7.696 652.992.697 574.993c-.667-16.667-1-33.333-.334-49.666 6-63.333 37.332-123.999 85.997-165.332 55.33-47.999 132.66-70.999 204.99-57.332.667 49.333-1.332 98.665-1.332 147.998-33-10.667-71.664-7.667-100.663 12.333-20.999 13.667-36.998 34.666-45.331 58.333-7 17-5 35.666-4.667 53.666 8 54.666 60.664 100.665 116.662 95.665 37.332-.333 72.997-22 92.33-53.666 6.332-11 13.332-22.333 13.665-35.333 3.334-59.666 2-118.998 2.334-178.664.333-134.332-.334-268.33.666-402.328",transform:"translate(165 112)"},child:[]}]})(e)}function hk(e){return Q({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"},child:[]}]})(e)}function mk(e){return Q({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M560 160A80 80 0 1 0 560 0a80 80 0 1 0 0 160zM55.9 512H381.1h75H578.9c33.8 0 61.1-27.4 61.1-61.1c0-11.2-3.1-22.2-8.9-31.8l-132-216.3C495 196.1 487.8 192 480 192s-15 4.1-19.1 10.7l-48.2 79L286.8 81c-6.6-10.6-18.3-17-30.8-17s-24.1 6.4-30.8 17L8.6 426.4C3 435.3 0 445.6 0 456.1C0 487 25 512 55.9 512z"},child:[]}]})(e)}function gk(e){return Q({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M16.2877 9.42773C15.413 7.97351 13.8195 7 12 7 9.23999 7 7 9.23999 7 12 7 14.76 9.23999 17 12 17 13.8195 17 15.413 16.0265 16.2877 14.5723L14.5729 13.5442C14.0483 14.4166 13.0927 15 12 15 10.3425 15 9 13.6575 9 12 9 10.3425 10.3425 9 12 9 13.093 9 14.0491 9.58386 14.5735 10.4568L16.2877 9.42773ZM22 12C22 6.47998 17.52 2 12 2 6.47998 2 2 6.47998 2 12 2 17.52 6.47998 22 12 22 17.52 22 22 17.52 22 12ZM4 12C4 7.57996 7.57996 4 12 4 16.42 4 20 7.57996 20 12 20 16.42 16.42 20 12 20 7.57996 20 4 16.42 4 12Z"},child:[]}]})(e)}function vk(e){return Q({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"m289.94 256 95-95A24 24 0 0 0 351 127l-95 95-95-95a24 24 0 0 0-34 34l95 95-95 95a24 24 0 1 0 34 34l95-95 95 95a24 24 0 0 0 34-34z"},child:[]}]})(e)}const xk=mn`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,yk=k.div`
  position: fixed;
  bottom: 15px;
  right: 15px;
  z-index: 1000;
`,wk=k.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  background-color: #00d757;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
  color: white;
  font-size: 24px;
  transition: transform .2s ease;

  &:hover {
    transform: scale(1.1);
  }
`,bk=k.div`
  position: absolute;
  bottom: 50px;
  right: 50px;
  width: 300px;
  padding: 10px 20px 20px 20px ;
  background-color: #fbfbfb;
  border-radius: 25px 25px 0 25px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  animation: ${xk} 0.5s ease-in-out;
  display: flex;
  flex-direction: column;
  font-family: var(--font--comfortaa);
`,Sk=k.button`
  position: absolute;
  transform: translateX(-50%);
  top: -15px;
  left: 50%;
  background: transparent;
  border: none;
  font-size: 18px;
  cursor: pointer;
  color: #b10000;
  padding: 5px 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: var(--color--white);
  transition: all .2s ease;

  &:hover {
    color: #000;
    font-size: 22px;
  }
`,jk=k.div`
  background-image: url('https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/d8641711-b18b-4d15-33a0-110225c0cc00/public');
  border-radius: 20px;
  padding: 10px;
  max-height: 300px;
  overflow-y: auto;
  margin-bottom: 10px;
  margin-top: 20px;
  font-family: var(--font--comfortaa)!important;
`,$m=k.div`
  display: flex;
  align-items: flex-start;
  justify-content: ${e=>e.sent?"flex-end":"flex-start"};
  margin-bottom: 10px;
  font-weight: 200;
  font-size: 14px;
  font-family: var(--font--comfortaa)!important;
`,Ck=k.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: ${e=>e.sent?"0":"8px"};
  margin-left: ${e=>e.sent?"8px":"0"};
`,kk=k.div`
  display: flex;
  flex-direction: column;
  background-color: ${e=>e.sent?"#dcf8c6":"#ffffff"};
  border-radius: 10px;
  padding: 8px;
  max-width: 70%;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  white-space: pre-wrap; // Adicione esta linha
  font-family: var(--font--comfortaa)!important;
  font-size: 12px;
`,Tk=k.div`
  font-size: 10px;
  color: #b6b6b6;
  font-weight: 200;
  margin-bottom: 5px;
  font-family: var(--font--comfortaa)!important;
`,Ak=k.div`
  display: inline-block;
  font-size: 14px;
  font-style: italic;
  color: #b6b6b6;
  font-family: var(--font--comfortaa)!important;

  &::after {
    content: "";
    animation: typingDots 1s infinite;
  }

  @keyframes typingDots {
    0% {
      content: "";
    }
    33% {
      content: ".";
    }
    66% {
      content: "..";
    }
    100% {
      content: "...";
    }
  }
`,Ek=k.div`
  display: flex;
  gap: 10px;
  font-family: var(--font--comfortaa)!important;
`,Pk=k.input`
  flex: 1;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 15px;
  font-size: 12px;
  font-family: var(--font--comfortaa)!important;

  &::placeholder{
    font-size: 12px!important;
    font-weight: 200!important;
  }
`,Gk=k.button`
  padding: 8px 15px;
  background-color: #00d757;
  color: white;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  font-family: var(--font--comfortaa)!important;
  font-weight: 300;

  &:hover {
    background-color: #00b94a;
  }
`,gn=({footerRendered:e})=>{const[t,n]=j.useState(!1),[i,r]=j.useState(""),[a,o]=j.useState([]),[s,l]=j.useState(!1),[d,u]=j.useState("Número inválido"),[f,p]=j.useState(!1),[g,x]=j.useState(!1),y="https://wa.link/dojlwi",b="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/8c41f0fe-aedf-44cf-d36f-47c09d855d00/public";j.useEffect(()=>{if(e){const w=setTimeout(()=>{n(!0),o([{id:1,text:`Olá! Percebemos que você estava navegando pelo site. 🐶🐾

Como podemos te ajudar? 🤗`,sent:!1}])},2e3);return()=>clearTimeout(w)}},[e]);const v=async()=>{if(i.trim()==="")return;const w={id:Date.now(),text:i,sent:!0};o(C=>[...C,w]);const S=i.trim();if(r(""),l(!0),!f&&d==="Número inválido"){setTimeout(()=>{l(!1),o(C=>[...C,{id:Date.now(),text:`Entendo, estamos aqui para te ajudar da melhor forma possível! 😁

Para um atendimento mais rápido, poderia me informar o seu número de WhatsApp? 🙂‍↕`,sent:!1}]),p(!0)},1500);return}if(f&&d==="Número inválido"){const C=/^\d+$/.test(S),A=C?S:"Número inválido";u(A),window.dataLayer=window.dataLayer||[],window.dataLayer.push({event:"userPhoneCaptured",phoneNumber:A}),setTimeout(()=>{l(!1),o(T=>[...T,{id:Date.now(),text:C?c.jsxs("span",{children:["Muito obrigado, aumigo🐕!",c.jsx("br",{}),c.jsx("br",{}),"Vamos entrar em contato com você em breve."]}):"Você não informou um número válido.",sent:!1}]),setTimeout(()=>{x(!0)},500),p(!1)},1500);return}l(!1)},h=w=>{w.key==="Enter"&&v()},m=()=>{n(!1)};return c.jsxs(yk,{children:[c.jsx(wk,{onClick:()=>window.open(y,"_blank"),id:"clickwpp",children:c.jsx(H6,{id:"clickwpp"})}),t&&c.jsxs(bk,{children:[c.jsx(Sk,{onClick:m,children:c.jsx(vk,{})}),c.jsxs(jk,{children:[a.map(w=>c.jsxs($m,{sent:w.sent,children:[!w.sent&&c.jsx(Ck,{src:b,alt:"Bot"}),c.jsxs(kk,{sent:w.sent,children:[!w.sent&&c.jsx(Tk,{children:"Pousada Le Ange"}),c.jsx("div",{children:w.text})]})]},w.id)),s&&c.jsx($m,{children:c.jsx(Ak,{})})]}),!g&&c.jsxs(Ek,{children:[c.jsx(Pk,{id:"chat-iniciado",type:"text",placeholder:"Digite sua mensagem",value:i,onChange:w=>r(w.target.value),onKeyDown:h}),c.jsx(Gk,{onClick:v,children:"Enviar"})]})]})]})},zk=k(Me.button)`
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
`,_k=k(Me.footer)`
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
`,Mk=k.div`
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
`,Lk=k.div`
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
`,Ok=k.section`
    display: flex;
    width: 100%;
    height: 35vh;

    @media (max-width: 768px){
        height: auto;
        flex-direction: column;
        gap: 25px;
    }
`,Ik=k.section`
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
`,Rk=k.section`
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
`,Dk=k.hr`
    width: 100%;
    margin-bottom: -50px;
`,Vk=k.div`
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
`,xi=()=>{const e=j.useRef(null),t=I6(e,{once:!0}),[n,i]=j.useState(""),[r,a]=j.useState(""),[o,s]=j.useState(""),l=()=>`user_${Math.random().toString(36).substr(2,9)}_${Date.now()}`,d=()=>{const f=new URLSearchParams(window.location.search);return{utm_source:f.get("utm_source")||"organico",utm_medium:f.get("utm_medium")||"",utm_campaign:f.get("utm_campaign")||"",utm_term:f.get("utm_term")||"",utm_content:f.get("utm_content")||""}},u=async f=>{if(f.preventDefault(),!n||!r||!o){alert("Por favor, preencha todos os campos.");return}const g={id:l(),name:String(n).trim(),email:String(r).trim(),tel:String(o).trim(),conversion_url:window.location.href,...d()};try{const x=await fetch("https://hook.us1.make.com/e79ttwjdwv9soeppgqnu5rbnpk9l828e",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(g)}),y=await x.text();x.ok?(alert("Dados enviados com sucesso!"),i(""),a(""),s(""),window.open("https://wa.link/dojlwi","_blank")):(console.error("Erro de resposta:",y),alert("Erro ao enviar os dados: "+y))}catch(x){console.error("Erro:",x),alert("Erro ao enviar os dados. Tente novamente.")}};return c.jsxs(c.Fragment,{children:[c.jsxs(_k,{ref:e,children:[c.jsxs(Ok,{children:[c.jsxs(Mk,{children:[c.jsx("h1",{"data-aos":"fade-up",children:"Fale agora com a nossa Central de Reservas"}),c.jsxs("p",{"data-aos":"fade-up","data-aos-delay":"100",children:["As suas informações são mantidas em segurança e utilizadas apenas para entrar em contato. Entenda melhor como tratamos os seus dados pela nossa",c.jsx("a",{href:"https://drive.google.com/file/d/1hcfO5CfNmczgpg2h943ytwg9j0SR9Fas/view",target:"_blank",children:"política de privacidade"}),"."]}),c.jsx("hr",{"data-aos":"fade-right","data-aos-delay":"200"}),c.jsxs("div",{children:[c.jsx("h4",{"data-aos":"fade-up","data-aos-delay":"300",children:"Siga-nos"}),c.jsxs("div",{children:[c.jsx("a",{href:"https://instagram.com/pousadaleange",target:"_blank",rel:"noopener noreferrer","data-aos":"fade-up","data-aos-delay":"400",children:c.jsx(VC,{})}),c.jsx("a",{href:"https://tiktok.com/@pousadaleange",target:"_blank",rel:"noopener noreferrer","data-aos":"fade-up","data-aos-delay":"450",children:c.jsx(pk,{})}),c.jsx("a",{href:"https://pinterest.com/pousadaleange",target:"_blank",rel:"noopener noreferrer","data-aos":"fade-up","data-aos-delay":"500",children:c.jsx(fk,{})})]})]})]}),c.jsx(Lk,{"data-aos":"fade-down","data-aos-delay":"500",children:c.jsxs("form",{id:"contactForm",onSubmit:u,children:[c.jsx("input",{type:"text",id:"name",placeholder:"Digite o seu nome",value:n,onChange:f=>i(f.target.value),"data-aos":"fade-up","data-aos-delay":"600"}),c.jsx("input",{type:"email",id:"email",placeholder:"Preciso saber o seu e-mail também",value:r,onChange:f=>a(f.target.value),"data-aos":"fade-up","data-aos-delay":"700"}),c.jsx("input",{type:"tel",id:"tel",placeholder:"Por fim, o seu número de WhatsApp",value:o,onChange:f=>s(f.target.value),"data-aos":"fade-up","data-aos-delay":"800"}),c.jsxs(zk,{type:"submit","data-aos":"fade-up","data-aos-delay":"1000",children:[c.jsx(hk,{size:20}),c.jsx("span",{children:"Enviar dados para contato"})]})]})})]}),c.jsxs(Ik,{children:[c.jsxs("div",{children:[c.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/0b4e1dd7-194d-4d4c-da16-c16c77281000/public",alt:"Descrição da imagem",loading:"lazy","data-aos":"fade-up","data-aos-delay":"200"}),c.jsx("p",{"data-aos":"fade-down","data-aos-delay":"400",children:"A pousada mais Pet Friendly, venha conhecer!"})]}),c.jsxs("div",{children:[c.jsx("h2",{"data-aos":"fade-up","data-aos-delay":"50",children:"Mapa do site"}),c.jsxs("a",{href:"#","data-aos":"fade-down","data-aos-delay":"100",children:[" ",c.jsx(wt,{})," Início "]}),c.jsxs("a",{href:"#/sobre","data-aos":"fade-up","data-aos-delay":"150",children:[" ",c.jsx(wt,{})," Sobre nós "]}),c.jsxs("a",{href:"#/serra","data-aos":"fade-down","data-aos-delay":"200",children:[" ",c.jsx(wt,{})," Le Ange Serra "]}),c.jsxs("a",{href:"#/mar","data-aos":"fade-up","data-aos-delay":"250",children:[" ",c.jsx(wt,{})," Le Ange Mar "]}),c.jsxs("a",{href:"#/event","data-aos":"fade-down","data-aos-delay":"300",children:[" ",c.jsx(wt,{})," Eventos "]}),c.jsxs("a",{href:"#/acomodaSerra","data-aos":"fade-up","data-aos-delay":"350",children:[" ",c.jsx(wt,{})," Acomodações Serra "]}),c.jsxs("a",{href:"#/acomodaMar","data-aos":"fade-up","data-aos-delay":"400",children:[" ",c.jsx(wt,{})," Acomodações Mar "]})]}),c.jsxs("div",{children:[c.jsx("h2",{"data-aos":"fade-up","data-aos-delay":"400",children:"Central de reserva"}),c.jsxs("a",{href:"https://wa.link/dojlwi",target:"_blank","data-aos":"fade-up","data-aos-delay":"100",children:[" ",c.jsx(wt,{})," WhatsApp "]}),c.jsxs("a",{href:"https://wa.link/dojlwi",target:"_blank","data-aos":"fade-down","data-aos-delay":"150",children:[" ",c.jsx(wt,{})," +55 (21) 99423-0871 "]}),c.jsxs("a",{href:"mailto:pousadaleange@gmail.com",target:"_blank","data-aos":"fade-up","data-aos-delay":"200",children:[" ",c.jsx(wt,{})," pousadaleange@gmail.com "]})]}),c.jsxs("div",{children:[c.jsx("h2",{"data-aos":"fade-up","data-aos-delay":"600",children:"Fique por dentro de tudo"}),c.jsxs("a",{href:"https://www.instagram.com/pousadaleange/",target:"_blank","data-aos":"fade-down","data-aos-delay":"100",children:[" ",c.jsx(wt,{})," Instagram "]}),c.jsxs("a",{href:"https://www.tiktok.com/@pousadaleange",target:"_blank","data-aos":"fade-up","data-aos-delay":"150",children:[" ",c.jsx(wt,{})," TikTok "]}),c.jsxs("a",{href:"https://br.pinterest.com/pousadaleange/",target:"_blank","data-aos":"fade-down","data-aos-delay":"200",children:[" ",c.jsx(wt,{})," Pinterest "]})]})]}),c.jsxs(Rk,{children:[c.jsx("h1",{"data-aos":"fade-down","data-aos-delay":"200",children:"Saiba onde estamos localizados"}),c.jsx("div",{children:c.jsx("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235239.22077211382!2d-43.355636!3d-22.461517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x99106a0d4d634d%3A0x5a069366075bf207!2sPousada%20Le%20Ange!5e0!3m2!1spt-BR!2sbr!4v1697101366468!5m2!1spt-BR!2sbr",width:"300",height:"150",style:{border:0,borderRadius:"15px 0px 15px 0px"},allowFullScreen:"",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade",title:"Mapa da Unidade Serra","data-aos":"fade-left","data-aos-delay":"300"})}),c.jsx("div",{children:c.jsx("iframe",{src:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14718.952062952678!2d-41.958707!3d-22.737977!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x97ab01cac79615%3A0x6b404b4741597da1!2sLeAnge%20Mar!5e0!3m2!1spt-BR!2sus!4v1728577984633!5m2!1spt-BR!2sus",width:"300",height:"150",style:{border:0,borderRadius:"0px 15px 0px 15px"},allowFullScreen:"",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade",title:"Mapa da Unidade Mar","data-aos":"fade-right","data-aos-delay":"400"})})]}),c.jsx(Dk,{}),c.jsxs(Vk,{children:[c.jsxs("p",{children:["Todos os direitos reservados | ",c.jsx(gk,{})," 2024"]}),c.jsx("a",{href:"https://drive.google.com/file/d/1hcfO5CfNmczgpg2h943ytwg9j0SR9Fas/view",target:"_blank",children:"Termos de condições"}),c.jsxs("p",{children:["Desenvolvido por ",c.jsx("b",{children:c.jsx("a",{href:"https://www.linkedin.com/in/aleph-ramos",target:"_blank",children:"Aleph"})})]})]})]}),c.jsx(gn,{footerRendered:t})]})};function ku(e){return Q({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M19.5 14.625c0 .995-.524 1.482-1.5 1.5H6c-.976-.018-1.5-.505-1.5-1.5s.524-1.482 1.5-1.5h12c.976.018 1.5.505 1.5 1.5m-1.5 2.25H6c-.976.018-1.5.505-1.5 1.5s.524 1.482 1.5 1.5h12c.976-.018 1.5-.505 1.5-1.5s-.524-1.482-1.5-1.5m3.75-8.248v-.001c-.976.017-1.5.504-1.5 1.499v8.25c0 .995.524 1.482 1.5 1.5v-.002c1.464-.052 2.25-1.514 2.25-4.498v-3.75c0-1.99-.786-2.964-2.25-2.998m-19.5-.001C.786 8.662 0 9.637 0 11.626v3.75c0 2.984.786 4.446 2.25 4.498v.001c.976-.017 1.5-.504 1.5-1.499v-8.25c0-.995-.524-1.482-1.5-1.5m19.5-.75c0-2.486-1.31-3.705-3.75-3.748v-.002H6v.002c-2.44.043-3.75 1.262-3.75 3.748v.001c1.464.026 2.25.757 2.25 2.249s.786 2.223 2.25 2.249v.001h10.5v-.001c1.464-.026 2.25-.757 2.25-2.249s.786-2.223 2.25-2.249z"},child:[]}]})(e)}function Zy(e){return Q({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17.8 20l-12 -1.5c-1 -.1 -1.8 -.9 -1.8 -1.9v-9.2c0 -1 .8 -1.8 1.8 -1.9l12 -1.5c1.2 -.1 2.2 .8 2.2 1.9v12.1c0 1.2 -1.1 2.1 -2.2 1.9z"},child:[]},{tag:"path",attr:{d:"M12 5l0 14"},child:[]},{tag:"path",attr:{d:"M4 12l16 0"},child:[]}]})(e)}const Nk=Yr`
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
`,Jy=mn`
  0% { border-radius: 0 30px 20px 0; }
  25% { border-radius: 20px 0 30px 20px; }
  50% { border-radius: 30px 20px 0 30px; }
  75% { border-radius: 30px 30px 20px 0; }
  100% { border-radius: 0 20px 30px 0; }
`,Fk=k.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 30%;
    border-radius: 25px 0 25px 0;
    background: linear-gradient(0deg, rgba(255, 255, 255, 1 ), rgba(0, 0, 0, 0)); 
    pointer-events: none;
    animation: ${Jy} 5s ease-in-out infinite;
    z-index: 1;

    @media (max-width: 768px){
        border-radius: 20px 0 20px 0;
        animation: none;
    }
`,$k=k.div`
  position: relative;
  width: 100%;
  height: 95vh;
  display: flex;
  align-items: flex-end;
  background-size: cover;
  background-position: center;
  animation: ${Jy} 5s ease-in-out infinite;

  @media (max-width: 768px){
    animation: none!important;
    border-radius: 20px 0 20px 0;
    height: 80vh;
  }
`,Bk=k.div`
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
`,Hk=k.h2`
  font-size: 20px;
  font-weight: bold;
  font-family: var(--font--comfortaa);

  @media (max-width: 768px){
    font-family: var(--font--comfortaa);
    font-size: 1.4rem;
    font-weight: 800;
  }
`,Uk=k.p`
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
`,Wk=k.div`
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
`,qk=k.div`
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
`,Yk=({content:e=[],spaceBetween:t=10,autoplayDelay:n=3e3,showPagination:i=!0,showNavigation:r=!0})=>(Cl(),c.jsxs(qk,{children:[c.jsx(Nk,{}),c.jsx(Jt,{modules:[gi,vi,Vn],navigation:r,pagination:!1,spaceBetween:t,loop:!0,slidesPerView:1,autoplay:{delay:n,disableOnInteraction:!1,pauseOnMouseEnter:!0},breakpoints:{640:{slidesPerView:1},1024:{slidesPerView:3}},children:e.map((a,o)=>c.jsxs(en,{children:[c.jsx(Fk,{}),c.jsx($k,{style:{backgroundImage:`url(${a.backgroundImage})`},children:c.jsxs(Bk,{"data-aos":"fade-down","data-aos-delay":"100",children:[c.jsx(Hk,{children:a.title}),c.jsx(Uk,{children:a.subtitle}),c.jsx(Wk,{children:a.features.map((s,l)=>c.jsxs("span",{children:[s.icon," ",s.text]},l))}),c.jsx(gp,{onClick:()=>{const s=`/leange/#/acomoda${a.id}`;window.location.href=s},text:"Conhecer essa acomodação",suiteId:a.id})]})})]},o))})]})),Kk=k.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 5%;
    height: 80vh;
    gap: 50px;
    margin-top: -2.5%;
    font-family: var(--font--comfortaa)!important;

    @media (max-width: 768px){
        padding: 10% 5%;
        flex-direction: column;
        height: auto;
    }

    & > div{
        width: 50%;
        height: 80%;

        @media (max-width:768px){
            width: 100%;
        }
    }

    & > div:nth-child(1){
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
        gap: 25px;

        @media (max-width: 768px){
            align-items: center;
        }

        & > h1{
            line-height: 110%;
            font-weight: 300;
            font-family: var(--font--comfortaa);
            color: var(--color--black);
            font-size: 1.8rem;
            width: 70%;

            @media (max-width: 768px){
                font-size: 1.5rem;
                text-align: center;
                width: 100%;
            }

            & > b{
                color: var(--color--green);
                font-weight: 400!important;
            }
        }

        & > ol{
            margin-left: 25px;
            margin-top: 5px;
            display: flex;
            flex-direction: column;
            gap: 10px;
            align-items: flex-start;
            justify-content: center;
            list-style-image: url('https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/d2f0fa51-02b8-44c8-515f-fd49f86f0a00/public');

            & > li{
                padding-left: 5px;
                color: var(--color--black);
                font-size: 1rem;
                font-weight: 300;

                @media (max-width: 768px){
                    font-size: .9rem;
                    font-weight: 300!important;
                }

                & > b{
                    font-weight: 400;
                    color: var(--color--black);
                }
            }
        }

    & > ol:nth-child(3){
        list-style-image: url('https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/d16f0eed-98cb-4620-69ab-934a38db5e00/public');
    }
    }

    & > div:nth-child(2){
        display: flex;

        @media (max-width: 768px){
            width: 110%;
            display: none;
        }
    }

    & > div:nth-child(2) div{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 50%;
        margin: 2.5px;

        & > img:nth-child(1){
            height: 40%;
            width: 100%;
            object-fit: cover;
            margin: 2.5px;
            border-radius: 0px 20px 0px 20px;
            
            }

        & > img:nth-child(2){
            height: 60%;
            width: 100%;
            object-fit: cover;
            margin: 2.5px;
            border-radius: 20px 0px 20px 0px;
                    }
    }

    & > div:nth-child(2) div:nth-child(2){
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 50%;

        & > img:nth-child(1){
            height: 60%;
            width: 100%;
            object-fit: cover;
            margin: 2.5px;
            border-radius: 20px 0px 20px 0px;
                    }

        & > img:nth-child(2){
            height: 40%;
            width: 100%;
            object-fit: cover;
            margin: 2.5px;
            border-radius: 0px 20px 0px 20px;
                    }
    }
`,Kr=()=>c.jsx(c.Fragment,{children:c.jsxs(Kk,{children:[c.jsxs("div",{children:[c.jsxs("h1",{children:["A nossa pousada foi feita para ",c.jsx("b",{children:"você"})," e o ",c.jsx("b",{children:"seu pet!"})]}),c.jsxs("ol",{children:[c.jsxs("li",{children:["Para pessoas que vêem o ",c.jsx("b",{children:"pet como parte da família."})]}),c.jsxs("li",{children:["Para pessoas que querem proporcionar aos seus pets a ",c.jsx("b",{children:"liberdade"})," de estarem sempre soltos."]}),c.jsxs("li",{children:["Para garantir uma experiência segura, ",c.jsx("b",{children:"não aceitamos menores de 13 anos"}),", mesmo que acompanhado dos pais."]})]}),c.jsxs("ol",{children:[c.jsxs("li",{children:["Vale ressaltar que fêmeas ",c.jsx("b",{children:"NÃO"})," podem estar no cio;"]}),c.jsxs("li",{children:["O chachorro precisa ",c.jsx("b",{children:"ser socializado"}),", caso contrário será necessário mantê-lo na guia."]}),c.jsxs("li",{children:["Não trabalhamos com ",c.jsx("b",{children:"Day Use"}),"."]})]}),c.jsx(Fe,{onClick:()=>window.open("https://wa.link/dojlwi","_blank"),text:"Reservar agora",backgroundColor:"var(--color--green)",borderColor:"var(--color--white)",hoverColor:"var(--color--white)",border:"1px solid",color:"var(--color--black)"})]}),c.jsxs("div",{children:[c.jsxs("div",{children:[c.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/c9f443a0-365f-4341-67c4-dc3b15d8d200/public",alt:"IMAGE"}),c.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/9ca851c2-347a-4f8c-752e-b90080865800/public",alt:"IMAGE"})]}),c.jsxs("div",{children:[c.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/db3f6942-0de2-433d-1235-33bfa547e500/public",alt:"IMAGE"}),c.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/c57174c4-9b12-4842-e8ff-6cfb4867a200/public",alt:"IMAGE"})]})]})]})}),Xk=mn`
    0% {
        transform: scale(1);
        background-color: #00000000;
    }

    50% {
        transform: scale(1.02);
        background-color: #00000005;
    }
`,Qk=k.section`
    width: 100%;
    height: 10vh;
    margin-top: 5vh;
    margin-bottom: -5vh;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px){
        margin-bottom: 0;
        padding: 0 2.5%;
        height: auto;
    }

    & > div{
        width: 70%;
        height: 100%;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 2% 5%;
        border-radius: 0 25px 0 25px;
        background-color: #00000005;
        animation: ${Xk} 2.5s linear infinite alternate-reverse;

        @media (max-width: 768px){
            width: 100%;
            padding: 5% 2.5%;
        }

        & > h1{
            font-family: var(--font--comfortaa);
            font-weight: 200;
            font-size: 1rem;
            line-height: 140%;

            @media (max-width: 768px){
                font-size: .8rem;
                line-height: 160%;
            }

            & > b:nth-child(1){
                color: #e70000;
                font-weight: 600;
            }

            & > b:nth-child(2){
                color: var(--color--blue);
                font-weight: 200;
            }

            & > b:nth-child(3){
                color: var(--color--green);
                font-weight: 200;
            }

            & > a{
                color: var(--color--blue);
                font-weight: 200;
            }
        }
    }
`,xo=()=>c.jsx(c.Fragment,{children:c.jsx(Qk,{children:c.jsx("div",{children:c.jsxs("h1",{children:[c.jsx("b",{children:"ATENÇÃO!!!"})," Neste mês de Janeiro ( 01/2025 ) haverá ",c.jsx("b",{children:"Churrasco na beira da piscina"})," todos os ",c.jsx("b",{children:"Sábados"}),". Não perca tempo, ",c.jsx("a",{href:"https://wa.link/dojlwi",target:"_blank",children:"reserve agora!"})]})})})}),Zk=[{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a4f0a292-2de1-4a0a-9c78-b40450f19a00/public",alt:"Mulher na rede",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/74bff9be-8742-4468-e032-4cf79abe5300/public",alt:"Foto da pousada le ange vista de cima",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/0f8625da-9e5c-4a5a-e289-7351383ead00/public",alt:"2 cachorros na piscina",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/f4a1515f-dd60-47ad-f799-1a1813af9300/public",alt:"Foto da pousada vista de baixo",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/7c086b71-3c6b-442b-584c-dcdabe1be700/public",alt:"Foto da sala de estar da pousada le ange serra",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a310fb24-c12e-431f-e5d1-6a12b8ff7500/public",alt:"2 cachorros na cama no meio do quintal",loading:"lazy"}],Jk=[{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/2edd1026-cdea-4ac6-f501-713bba86d600/public",alt:"Foto da pousada le ange mar",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/c15257b6-956b-4f1d-ee81-9870ce695d00/public",alt:"2 pessoas na rede na pousada le ange mar",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/ff1e37f5-c2ef-407f-b2fe-e3af31bc2900/public",alt:"Foto de churrasco",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/0d4896d4-5675-4739-7cb3-30fc1c6dec00/public",alt:"Cachorro olhando para a câmera",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/09da9d76-57b8-4d44-02b2-3c4c2380c800/public",alt:"Pousada le ange mar vista de cima",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/8565ac88-9f3c-4932-ef3a-cfff9c543600/public",alt:"Sala de estar na le ange mar com o quadro na parede",loading:"lazy"}],eT=[{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a4f0a292-2de1-4a0a-9c78-b40450f19a00/public",alt:"Pessoa na rede",label:"Le Ange Serra",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/0f8625da-9e5c-4a5a-e289-7351383ead00/public",alt:"2 cachorros na piscina",label:"Le Ange Serra",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/7c086b71-3c6b-442b-584c-dcdabe1be700/public",alt:"Sala de estar na le ange serra",label:"Le Ange Serra",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/902b9f7b-b521-4545-08ee-f5386e777400/public",alt:"Hot Tube na le ange serra",label:"Le Ange Serra",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/81b9f4b9-48ac-4aeb-76be-57b13ddd7300/public",alt:"2 pessoas bebendo na le ange mar",label:"Le Ange Mar",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/fabb090f-5470-4b80-d24e-212cea38ef00/public",alt:"2 pessoas na le ange mar",label:"Le Ange Mar",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/aee972d8-1698-4318-7f15-6ecd607c8f00/public",alt:"Sala de estar da le ange mar",label:"Le Ange Mar",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/345b0279-69a3-47ee-31f9-a018b8459000/public",alt:"Por do sol na le ange",label:"Le Ange Serra",loading:"lazy"}],tT=[{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/e6da9939-7a24-41a2-9002-2f3da2707f00/public",alt:"Foto do quarto na le ange",label:"Le Ange Mar",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/ff1e37f5-c2ef-407f-b2fe-e3af31bc2900/public",alt:"Foto de churrasqueira na le ange mar",label:"Le Ange Mar",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/d9be2586-3341-4990-f3c8-685edcad8900/public",alt:"Cachorro com a cabeça recostada na mão do tutor",label:"Le Ange Serra",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/ca87e74f-2193-4308-4ce7-737e3d878f00/public",alt:"Uma pessoa e um cachorro na piscina",label:"Le Ange Serra",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/c7b74408-cebf-4bb7-dc9a-36170887c100/public",alt:"2 taças com um fundo de por do sol",label:"Le Ange Mar",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a310fb24-c12e-431f-e5d1-6a12b8ff7500/public",alt:"2 cachorros em uma cama no meio do jardim",label:"Le Ange Serra",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/8565ac88-9f3c-4932-ef3a-cfff9c543600/public",alt:"Foto do quadro de cachorro na le ange mar",label:"Le Ange Serra",loading:"lazy"}],Bm=k.section`
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


`,nT=k.div`
    width: 100%;
    height: 150vh;
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
`,iT=k.aside`
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
`,rT=[{id:"Serra#suite1",title:"Suíte Superior 1",subtitle:"Pousada Le Ange Serra | Miguel Pereira - RJ",backgroundImage:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/c21ef88c-f22b-497e-1e70-5c5b4c4cf500/public",features:[{icon:c.jsx(je,{}),text:"52m²"},{icon:c.jsx(Qi,{}),text:"Ar condicionado"},{icon:c.jsx(Ie,{}),text:"Cama king size"},{icon:c.jsx(Ae,{}),text:"Banheira"},{icon:c.jsx(ze,{}),text:"Smart TV com canais a cabo"},{icon:c.jsx(ct,{}),text:"Lareira"}]},{id:"Serra#suite2",title:"Suíte Standard 2",subtitle:"Pousada Le Ange Serra | Miguel Pereira - RJ",backgroundImage:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/23d18593-f941-4c65-0349-6b23e6ea2800/public",features:[{icon:c.jsx(je,{}),text:"52m²"},{icon:c.jsx(Qi,{}),text:"Ar condicionado"},{icon:c.jsx(Ie,{}),text:"Cama king size"},{icon:c.jsx(Ae,{}),text:"Banheira"},{icon:c.jsx(ze,{}),text:"Smart TV com canais a cabo"},{icon:c.jsx(ct,{}),text:"Lareira"}]},{id:"Serra#suite6",title:"Suíte Master 6",subtitle:"Pousada Le Ange Serra | Miguel Pereira - RJ",backgroundImage:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/48a11406-659c-4d98-f2d8-6fc518ef6600/public",features:[{icon:c.jsx(je,{}),text:"93m²"},{icon:c.jsx(Qi,{}),text:"Ar condicionado"},{icon:c.jsx(Ie,{}),text:"Cama king size"},{icon:c.jsx(Ae,{}),text:"Banheira"},{icon:c.jsx(ku,{}),text:"Couch lounge"},{icon:c.jsx(Zy,{}),text:"Bay window"}]},{id:"Mar#suite6",title:"Suíte Standard 6",subtitle:"Pousada Le Ange Mar | Búzios - RJ",backgroundImage:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/4d6afdaf-1cfe-4860-8099-818abedfdd00/public",features:[{icon:c.jsx(je,{}),text:"45m²"},{icon:c.jsx(Qi,{}),text:"Ar condicionado"},{icon:c.jsx(Ie,{}),text:"Cama king size"},{icon:c.jsx(Ae,{}),text:"Banheira"},{icon:c.jsx(ze,{}),text:"Smart TV com canais a cabo"},{icon:c.jsx(ct,{}),text:"Lareira"}]},{id:"Mar#suite2",title:"Suíte Standard 2",subtitle:"Pousada Le Ange Mar | Búzios - RJ",backgroundImage:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/2c65f24d-c113-4ea7-def4-783519605e00/public",features:[{icon:c.jsx(je,{}),text:"45m²"},{icon:c.jsx(Qi,{}),text:"Ar condicionado"},{icon:c.jsx(Ie,{}),text:"Cama king size"},{icon:c.jsx(Ae,{}),text:"Banheira"},{icon:c.jsx(ze,{}),text:"Smart TV com canais a cabo"},{icon:c.jsx(ct,{}),text:"Lareira"}]},{id:"Serra#suite10",title:"Suíte Master 10",subtitle:"Pousada Le Ange Serra | Miguel Pereira - RJ",backgroundImage:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/5b3e8e3c-57ba-4e47-dd41-7b4a32d25f00/public",features:[{icon:c.jsx(je,{}),text:"80m²"},{icon:c.jsx(Qi,{}),text:"Ar condicionado"},{icon:c.jsx(Ie,{}),text:"Cama king size"},{icon:c.jsx(vp,{}),text:"Recamier e poltrona de leitura"},{icon:c.jsx(ku,{}),text:"Couch lounge"},{icon:c.jsx(ct,{}),text:"Lareira"}]}],aT=k.section`
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
`,oT=[{backgroundImage:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/0f8625da-9e5c-4a5a-e289-7351383ead00/public",title:"100% Pet Friendly",description:"Não temos restrições quanto ao porte ou à raça do seu pet, nem cobramos taxas adicionais para a vinda deles. Na Le Ange, o seu pet tem total liberdade para acessar todas as nossas comodidades!",buttonText:"Viver minha experiência agora",topLeftText:"Le Ange Serra e Mar"},{backgroundImage:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/da4810e5-6e85-45f5-1fcf-f6a74754bd00/public",title:"Praia",description:"Para os amantes da praia, estamos localizados a apenas 150 metros da Praia Rasa, onde você e o seu pet podem aproveitar juntinhos e dar um mergulho delicioso no mar.",buttonText:"Viver minha experiência agora",topLeftText:"Le Ange Mar"},{backgroundImage:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/902b9f7b-b521-4545-08ee-f5386e777400/public",title:"Sossego",description:"A área da sauna fica situada ao lado da mata, envolvida pelo som relaxante do rio que passa. Aqui, você pode desfrutar de um HotTub abastecido por água natural e aquecido à lenha, o combo perfeito para você relaxar.",buttonText:"Viver minha experiência agora",topLeftText:"Le Ange Serra"},{backgroundImage:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/09da9d76-57b8-4d44-02b2-3c4c2380c800/public",title:"Piscinas",description:"Nossa piscina aquecida possui um tratamento especial por ozônio com níveis baixíssimos de cloro - aqui, tudo é pensando para o bem-estar da sua pele a do seu pet também!",buttonText:"Viver minha experiência agora",topLeftText:"Le Ange Mar e Serra"},{backgroundImage:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/179ab52c-353f-442a-ffe5-0a71f6922f00/public",title:"Cozinha",description:"Na sua hospedagem, todas as refeições estão incluídas: café da manhã, almoço, chá da tarde e jantar! Também, aceitamos todas as restrições alimentares para garantir que todos desfrutem da nossa gastronomia.",buttonText:"Viver minha experiência agora",topLeftText:"Le Ange Serra e Mar"},{backgroundImage:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/0d1d1a6a-5935-4c57-6b12-d1f028604400/public",title:"Ofurôs",description:"São dois ofurôs acoplados na piscina, para você relaxar na água quentinha, apreciando a vista exuberante do mar.",buttonText:"Viver minha experiência agora",topLeftText:"Le Ange Mar"},{backgroundImage:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/c57174c4-9b12-4842-e8ff-6cfb4867a200/public",title:"Diversão",description:"Espaço de sobra para o seu pet se divertir! Espaço agility à beira do lago, com muita grama, para o seu pet, correr, pular, brincar e, claro, nadar!",buttonText:"Viver minha experiência agora",topLeftText:"Le Ange Serra"},{backgroundImage:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/67318553-8e4b-4d4c-b914-3ea76fc7be00/public",title:"Bar",description:"Para completar ainda mais a sua experiência, contamos com uma carta variada de vinhos, destilados, drinks e cervejas!",buttonText:"Viver minha experiência agora",topLeftText:"Le Ange Mar"},{backgroundImage:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/1a66d627-7861-4124-638d-d21ddef05100/public",title:"Adega",description:"Para tornar a sua experiência ainda mais especial, contamos com uma adega subterrânea para a climatização perfeita dos vinhos, bar com carta variada de drinks, cervejas e destilados.",buttonText:"Viver minha experiência agora",topLeftText:"Le Ange Serra"},{backgroundImage:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/939f40ce-048b-4746-7ce7-83fc2f4bbc00/public",title:"Suítes",description:"Nossas suítes são, elegantemente, decoradas. Todas com vistas maravilhosas, banheira de imersão, cama king-size, varanda, ar-condicionado e frigobar.",buttonText:"Viver minha experiência agora",topLeftText:"Le Ange Mar e Serra"}],sT=k.div`
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

`,lT=k.h1`
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
`,Kc=k.h1`
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

`,Uo=k.p`
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
`,cT=[{image:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/58c77a3d-d9fb-422f-c84b-ad4798b74600/public",title:"Fique 4 pague 3",dateRange:"Segunda-feira a Sexta-feira",features:[{icon:c.jsx(ve,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(mo,{}),text:"Até 12X SEM JUROS"},{icon:c.jsx(ut,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"449,00",discount:25},{image:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/1ea7ed06-0da2-4123-00bf-c74543625600/public",title:"Pacote de Carnaval",dateRange:"28/02/2025 até 04/03/2025 (4 diárias)",features:[{icon:c.jsx(ve,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(ve,{}),text:"Churrasco no sábado"},{icon:c.jsx(ut,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"757,25",discount:25},{image:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/7e26f340-d751-4102-9259-3b9ec67e3600/public",title:"Pacote de Páscoa",dateRange:"17/04/2025 até 21/04/2025 (4 diárias)",features:[{icon:c.jsx(ve,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(ve,{}),text:"Almoço e noite especial"},{icon:c.jsx(ut,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"653,80",discount:25}],dT=k.section`
    height: 80vh;
    margin-bottom: 10vh;
    margin-top: 2.5vh;

    @media (max-width: 768px){
        height: auto;
        margin-bottom: 5vh;
        margin-top: 5vh;
    }
    
`,uT=k.section`
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
`,Hm=k.b`
    color: var(--color--green);
`,Xc=k.b`
    color: var(--color--blue);
`,fT=k.div`
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
`;k.div`
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
`;const pT=k.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 5px;
    overflow: hidden;

    @media (max-width:768px){
    }

    & > a{
        width: 50%;
        height: 100%;
        overflow: hidden;
        
        & > img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: all 1s ease-in-out;
        position: relative;
        filter: brightness(120%);

        &:hover{
            transform: scale(1.02) rotate(1deg);
        }

        @media (max-width:768px){
            width: 100%;
            height: 100%;
            object-position: center;
        }
        
    }
    }
`,hT=()=>(j.useEffect(()=>{Oe.init({duration:1e3,once:!0})},[]),c.jsxs(c.Fragment,{children:[c.jsx(Rn,{children:c.jsx("title",{children:"Início - Pousada Le Ange"})}),c.jsxs(pT,{children:[c.jsx("a",{href:"/#/mar",children:c.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/b3e6c25b-9ed6-4a84-5ee0-3ed539b29b00/public"})}),c.jsx("a",{href:"/#/serra",children:c.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/565f57fa-9f92-434e-7e76-192ec1299700/public"})})]}),c.jsx(gn,{}),c.jsxs(nT,{containerAnimation:{opacity:0,scale:.8},titleAnimation:{opacity:0,y:-50},textAnimation:{opacity:0,x:50},buttonAnimation:{opacity:0,scale:.5},animationDuration:.7,children:[c.jsxs(iT,{children:[c.jsxs("h1",{"data-aos":"fade-up",children:["Pousada",c.jsx(Xc,{children:" 100% Pet Friendly"})," que aceita humanos de estimação"]}),c.jsx("p",{"data-aos":"fade-up","data-aos-delay":"200",children:"2 unidades, 2 cenários incomparáveis"})]}),c.jsxs(Bm,{"data-aos":"fade-up",children:[c.jsx(Vm,{content:Zk,spaceBetween:20,slidesPerView:1,height:"60vh",contentType:"image",showPagination:!1}),c.jsx(Fm,{title:"Le Ange Serra - Miguel Pereira RJ",text:"Na Le Ange Serra, costumamos dizer que a hospedagem é muito mais do que um final de semana para relaxar. É uma experiência única ao lado do seu pet entre as belezas naturais da Mata Atlântica, para que você colecione os melhores momentos ao lado dele!",borderColor:"var(--color--green)",borderRadius:"30px",buttonColor:"var(--color--green)",buttonBorder:"1px solid var(--color--black)",targetPage:"/serra",idade:"*Só permitimos crianças acima de 13 anos!"})]}),c.jsxs(Bm,{"data-aos":"fade-up","data-aos-delay":"200",children:[c.jsx(Fm,{title:"Le Ange Mar - Búzios RJ",text:"Situada no coração do Arpoador da Praia Rasa, na Le Ange Mar, oferecemos uma experiência memorável, onde a praia está a poucos passos da pousada e o seu pet é, calorosamente, recebido para momentos especiais à beira-mar.",borderColor:"var(--color--blue)",borderRadius:"30px",buttonColor:"var(--color--blue)",buttonBorder:"1px solid var(--color--black)",targetPage:"/mar",idade:"*Só permitimos crianças acima de 13 anos!"}),c.jsx(Vm,{content:Jk,spaceBetween:20,slidesPerView:1,width:"60%",height:"60vh",contentType:"image",showPagination:!1})]})]}),c.jsx(Kr,{}),c.jsxs(aT,{children:[c.jsxs("div",{children:[c.jsxs(lT,{"data-aos":"fade-up",children:["Nossas suítes ",c.jsx(Hm,{children:"mais procuradas"})," "]}),c.jsx(Uo,{"data-aos":"fade-up","data-aos-delay":"200",children:"Já consegue se imaginar dormindo aqui ao lado do seu pet?"})]}),c.jsx(Yk,{content:rT})]}),c.jsxs(sT,{children:[c.jsxs("div",{children:[c.jsxs(Kc,{"data-aos":"fade-up",children:["Mais que Pet Friendly, ",c.jsx(Xc,{children:"Pet Lovers"})]}),c.jsx(Uo,{"data-aos":"fade-up","data-aos-delay":"200",children:"Venha viver essa experiência"})]}),c.jsx(JC,{content:oT,spaceBetween:20,width:"100%",height:"70vh",showPagination:!1,showNavigation:!0})]}),c.jsxs("div",{children:[c.jsxs(Kc,{"data-aos":"fade-up",children:[" ",c.jsx(Hm,{children:"Viva"})," essa experiência "]}),c.jsx(Uo,{"data-aos":"fade-up","data-aos-delay":"200",children:"Alguns dos nossos momentos"})]}),c.jsxs(dT,{"data-aos":"fade-in",children:[c.jsx(Cu,{images:eT}),c.jsx(Cu,{images:tT,reverse:!0})]}),c.jsx(fT,{children:c.jsx(Fe,{onClick:()=>window.open("https://wa.link/dojlwi","_blank"),text:"Fazer minha reserva!",backgroundColor:"var(--color--green)"})}),c.jsxs("div",{children:[c.jsxs(Kc,{"data-aos":"fade-up",children:["Conheça nossos pacotes e ",c.jsx(Xc,{children:"noites especiais"})," "]}),c.jsx(Uo,{"data-aos":"fade-up","data-aos-delay":"200",children:"Estamos te esperando!"})]}),c.jsx(xo,{}),c.jsx(uT,{"data-aos":"fade-in","data-aos-delay":"250",children:c.jsx(vo,{events:cT})}),c.jsx(xi,{})]}));function mT(e){return Q({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 8c-2.168 0-4 1.832-4 4s1.832 4 4 4 4-1.832 4-4-1.832-4-4-4zm0 6c-1.065 0-2-.935-2-2s.935-2 2-2 2 .935 2 2-.935 2-2 2z"},child:[]},{tag:"path",attr:{d:"M20 5h-2.586l-2.707-2.707A.996.996 0 0 0 14 2h-4a.996.996 0 0 0-.707.293L6.586 5H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V7c0-1.103-.897-2-2-2zM4 18V7h3c.266 0 .52-.105.707-.293L10.414 4h3.172l2.707 2.707A.996.996 0 0 0 17 7h3l.002 11H4z"},child:[]}]})(e)}function gT(e){return Q({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412l7.332 7.332c.17.299.498.492.875.492a.99.99 0 0 0 .792-.409l7.415-7.415c2.354-2.354 2.354-6.049-.002-8.416a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595zm6.791 1.61c1.563 1.571 1.564 4.025.002 5.588L12 18.586l-6.793-6.793c-1.562-1.563-1.561-4.017-.002-5.584.76-.756 1.754-1.172 2.799-1.172s2.035.416 2.789 1.17l.5.5a.999.999 0 0 0 1.414 0l.5-.5c1.512-1.509 4.074-1.505 5.584-.002z"},child:[]}]})(e)}function vT(e){return Q({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M20.787 9.023c-.125.027-1.803.418-3.953 1.774-.323-1.567-1.279-4.501-4.108-7.485L12 2.546l-.726.767C8.435 6.308 7.483 9.25 7.163 10.827 5.005 9.448 3.34 9.052 3.218 9.024L2 8.752V10c0 7.29 3.925 12 10 12 5.981 0 10-4.822 10-12V8.758l-1.213.265zM8.999 12.038c.002-.033.152-3.1 3.001-6.532C14.814 8.906 14.999 12 15 12v.125a18.933 18.933 0 0 0-3.01 3.154 19.877 19.877 0 0 0-2.991-3.113v-.128zM12 20c-5.316 0-7.549-4.196-7.937-8.564 1.655.718 4.616 2.426 7.107 6.123l.841 1.249.825-1.26c2.426-3.708 5.425-5.411 7.096-6.122C19.534 15.654 17.304 20 12 20z"},child:[]}]})(e)}function Um(e){return Q({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M20.832 4.555A1 1 0 0 0 20 3H4a1 1 0 0 0-.832 1.554L11 16.303V20H8v2h8v-2h-3v-3.697l7.832-11.748zm-2.7.445-2 3H7.868l-2-3h12.264z"},child:[]}]})(e)}function Xe(e){return Q({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M18 2H6c-1.103 0-2 .897-2 2v5h4V6h2v3h10V4c0-1.103-.897-2-2-2zm-8 13H8v-5H4v10c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V10H10v5z"},child:[]}]})(e)}function Wm(e){return Q({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"},child:[]}]})(e)}const xT=Yr`
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
`,yT=mn`
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
`,wT=k(Me.img)`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50px 0 30px 0;

    @media (max-width: 768px){
        border-radius: 0 15px 0 20px;
    }
`,bT=k(Me.div)`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  border-radius: 0 20px 20px 0;
  animation: ${yT} 5s ease-in-out infinite;
  background-image: ${({backgroundImage:e})=>`url(${e})`};
  background-size: cover;
  background-position: center;
`,ST=k(Me.div)`
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
`,jT=k(Me.div)`
    position: absolute;
    bottom: 20px;
    left: 20px;
    color: var(--color--white);
    font-family: Arial, sans-serif;
`,CT=k(Me.h2)`
    font-size: 24px;
    font-weight: bold;
    font-family: var(--font--comfortaa);
`,kT=k(Me.p)`
    font-size: 16px;
    margin: 5px 0;
    font-family: var(--font--avenir);
`,TT=k(Me.div)`
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
`,AT=k.div`
    width: 100%;
    max-width: 100%;
    margin: 0 auto;

    @media (max-width: 640px) {
        max-width: 100%;
    }
`,qm=({content:e=[],contentType:t="image",spaceBetween:n=10,slidesPerView:i=1,height:r="300px",autoplayDelay:a=3e3,showPagination:o=!0,showNavigation:s=!0})=>{const{scrollY:l}=M6(),d=No(l,[0,300],[0,-30]),u=No(l,[0,300],[0,-20]),f=No(l,[0,300],[0,-10]),p=No(l,[0,300],[0,-5]);return c.jsxs(AT,{children:[c.jsx(xT,{}),c.jsx(Jt,{modules:[gi,vi,Vn],navigation:s,pagination:o?{clickable:!0}:!1,spaceBetween:n,loop:!0,slidesPerView:i,autoplay:{delay:a,disableOnInteraction:!1,pauseOnMouseEnter:!0},style:{height:r},breakpoints:{640:{slidesPerView:1,spaceBetween:10,height:"200px"},768:{slidesPerView:1,spaceBetween:20,height:"250px"},1024:{slidesPerView:1,spaceBetween:30,height:"300px"}},children:e.map((g,x)=>c.jsx(en,{children:t==="image"?c.jsx(wT,{src:g.src,alt:g.alt||`Slide ${x+1}`,initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},transition:{duration:.7,ease:"easeOut"}}):c.jsxs(bT,{backgroundImage:g.backgroundImage,initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},transition:{duration:.8,ease:"easeOut"},children:[c.jsx(ST,{}),c.jsxs(jT,{initial:{opacity:0,y:50},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.8,delay:.3,ease:"easeOut"},children:[c.jsx(CT,{style:{y:d},children:g.title}),c.jsx(kT,{style:{y:u},children:g.subtitle}),c.jsx(TT,{style:{y:f},children:g.features.map((y,b)=>c.jsxs("span",{children:[y.icon," ",y.text]},b))}),c.jsx(gp,{text:"Conhecer todas as acomodações",style:{y:p}})]})]})},x))})]})};function ET(e){return Q({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M239.22,59.44l-45.63,95.82a3.54,3.54,0,0,1-.16.34l-34.21,71.84a8,8,0,1,1-14.44-6.88L173.62,160H40a8,8,0,0,1-5.66-13.66L76.69,104,34.34,61.66A8,8,0,0,1,40,48H232a8,8,0,0,1,7.22,11.44Z"},child:[]}]})(e)}const PT=k.div`
    height: 15vh;

    @media (max-width: 768px){
        height: 0;
    }
`,GT=k.section`
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
`,Ym=k.section`
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
`,zT=k.section`
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
`,_T=[{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/29ccc6ec-9001-47af-4c90-36bc2a2ba300/public",alt:"Cadeira customizada para casamento na le ange",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a5bfa9ba-2a81-4ff5-1bda-74a4993f2500/public",alt:"Foto do bolo de casamento na pousada le ange",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/e2ee18a4-384c-49ed-c38c-d15f243f5700/public",alt:"Foto de uma fogueira na pousada le ange",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/d887cc1d-1cb7-47c1-06cf-ce55fcb0f400/public",alt:"Espaço de comer na pousada le ange em casamentos",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/94f6e656-dcb6-477a-23d0-79cc3f816e00/public",alt:"Champagne na pousada le ange",loading:"lazy"}],MT=[{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a7da5629-c2cc-411d-3167-702f3a09f300/public",alt:"Cadeiras para casamento na pousada le ange",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/08af42b1-ad7c-4d07-8fb5-20e740b9b900/public",alt:"Noivos se casando na pousada le ange",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/9ce391b0-09af-4d6b-d2b5-c38fb17b4000/public",alt:"Comida do casamento na pousada le ange",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/977a5b2b-eea7-45c3-8f86-55a821264800/public",alt:"Imagem do bar no casamento da pousada le ange",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/6d4feba5-fa91-4d86-be6d-ed01beefb800/public",alt:"Casamento fotos pousada le ange",loading:"lazy"}],LT=k.section`
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
`,OT=k.section`
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
`,IT=()=>(j.useEffect(()=>{Oe.init({duration:1e3,once:!1}),Oe.refresh()},[]),c.jsxs(c.Fragment,{children:[c.jsx(Rn,{children:c.jsx("title",{children:"Eventos - Pousada Le Ange"})}),c.jsx(PT,{}),c.jsx(gn,{}),c.jsxs(GT,{children:[c.jsxs("div",{children:[c.jsxs("h1",{"data-aos":"fade-up","data-aos-delay":"100",children:["Do alto da ",c.jsx("b",{children:c.jsx("a",{href:"#/serra",children:"Serra"})}),",",c.jsx("br",{})," às ondas do ",c.jsx("b",{children:c.jsx("a",{href:"#/mar",children:"Mar"})})]}),c.jsx("p",{"data-aos":"fade-up","data-aos-delay":"200",children:"Venha celebrar na Le Ange, onde o amor pelos pets encontra o cenário ideal para tornar os seus eventos ainda mais especiais."}),c.jsx(Fe,{"data-aos":"fade-up","data-aos-delay":"300",onClick:()=>window.open("https://wa.link/dojlwi","_blank"),text:"Fazer meu evento",backgroundColor:"var(--color--green)"})]}),c.jsx("div",{children:c.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/4129a834-fd9a-42db-4770-46bcaae2c200/public",alt:"foto da home da página de eventos","data-aos":"fade-left","data-aos-delay":"150"})})]}),c.jsx(Ym,{"data-aos":"fade-up","data-aos-delay":"100",children:c.jsx(qm,{content:_T,spaceBetween:20,slidesPerView:1,width:"100%",height:"90vh",contentType:"image",showPagination:!0})}),c.jsxs(zT,{children:[c.jsx("div",{children:c.jsx("h1",{"data-aos":"fade-up","data-aos-delay":"100",children:"Sobre nós"})}),c.jsxs("div",{children:[c.jsxs("div",{children:[c.jsx("span",{children:"Le Ange Serra - Miguel Pereira/RJ"}),c.jsxs("div",{children:[c.jsx("p",{children:"Fundada em 2018, a Pousada LeAnge nasceu da paixão dos seus fundadores pelo amor aos pets, bem-estar e hospitalidade. Localizada em Miguel Pereira, a LeAnge Serra proporciona uma experiência única na região serrana do Rio de Janeiro, sendo um verdadeiro refúgio entre as belezas naturais da Mata Atlântica."}),c.jsx(Fe,{backgroundColor:"var(--color--green)",onClick:()=>window.open("https://wa.link/dojlwi","_blank"),text:"Fazer reserva"})]})]}),c.jsxs("div",{children:[c.jsx("span",{children:"Le Ange Serra - Miguel Pereira/RJ"}),c.jsxs("div",{children:[c.jsx("p",{children:"Fundada em 2018, a Pousada LeAnge nasceu da paixão dos seus fundadores pelo amor aos pets, bem-estar e hospitalidade. Localizada em Miguel Pereira, a LeAnge Serra proporciona uma experiência única na região serrana do Rio de Janeiro, sendo um verdadeiro refúgio entre as belezas naturais da Mata Atlântica."}),c.jsx(Fe,{onClick:()=>window.open("https://wa.link/dojlwi","_blank"),text:"Fazer reserva"})]})]})]})]}),c.jsxs(LT,{children:[c.jsx("div",{children:c.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/59f2aa9f-b14c-4a77-d44d-19d04bbfad00/public",alt:"foto do casamento","data-aos":"zoom-in","data-aos-delay":"100"})}),c.jsxs("div",{children:[c.jsx("h1",{"data-aos":"fade-up","data-aos-delay":"200",children:"Casamento"}),c.jsx("p",{"data-aos":"fade-down","data-aos-delay":"200",children:"Coração palpitando, emoções à flor da pele e a certeza de dias inesquecíveis."}),c.jsxs("ol",{children:[c.jsxs(Bt,{"data-aos":"fade-up","data-aos-delay":"50",children:[c.jsx(Um,{}),"Coquetel na Chegada (Sexta-feira)"]}),c.jsxs(Bt,{"data-aos":"fade-up","data-aos-delay":"100",children:[c.jsx(Wm,{}),"Noite Especial no Sábado"]}),c.jsxs(Bt,{"data-aos":"fade-up","data-aos-delay":"150",children:[c.jsx(mT,{}),"Ensaio Fotográfico dos Noivos"]}),c.jsxs(Bt,{"data-aos":"fade-up","data-aos-delay":"200",children:[c.jsx(gT,{}),"Decoração Romântica na Suíte"]}),c.jsxs(Bt,{"data-aos":"fade-up","data-aos-delay":"300",children:[c.jsx(um,{}),"Late Checkout no Domingo"]})]}),c.jsx(Fe,{text:"Fazer reserva",backgroundColor:"var(--color--green)",onClick:()=>window.open("https://wa.link/dojlwi","_blank")}),c.jsxs("div",{children:[c.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/4129a834-fd9a-42db-4770-46bcaae2c200/public",alt:"foto do casamento","data-aos":"fade-up","data-aos-delay":"100"}),c.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/fdcd50a3-60fa-409c-8e77-2d1ccef2ec00/public",alt:"foto do casamento","data-aos":"fade-up","data-aos-delay":"200"}),c.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/c5657ad4-000d-4c21-0570-1de76bd8c700/public",alt:"foto do casamento","data-aos":"fade-up","data-aos-delay":"300"})]})]})]}),c.jsxs(OT,{children:[c.jsxs("div",{children:[c.jsx("h1",{"data-aos":"fade-up","data-aos-delay":"100",children:"Aniversário"}),c.jsx("p",{"data-aos":"fade-down","data-aos-delay":"200",children:"Comemore os momentos doces da vida."}),c.jsxs("ol",{children:[c.jsxs(Bt,{"data-aos":"fade-up","data-aos-delay":"50",children:[c.jsx(Um,{}),"Coquetel na Chegada (Sexta-feira)"]}),c.jsxs(Bt,{"data-aos":"fade-up","data-aos-delay":"100",children:[c.jsx(Wm,{}),"Noite Especial no Sábado"]}),c.jsxs(Bt,{"data-aos":"fade-up","data-aos-delay":"150",children:[c.jsx(vT,{}),"Massagem Relaxante"]}),c.jsxs(Bt,{"data-aos":"fade-up","data-aos-delay":"200",children:[c.jsx(um,{}),"Late Checkout no Domingo"]}),c.jsxs(Bt,{"data-aos":"fade-up","data-aos-delay":"250",children:[c.jsx(ET,{}),"Painéis Temáticos"]}),c.jsxs(Bt,{"data-aos":"fade-up","data-aos-delay":"300",children:[c.jsx(U6,{}),"Bolo para o Pet"]})]}),c.jsx(Fe,{text:"Fazer reserva",backgroundColor:"var(--color--green)",onClick:()=>window.open("https://wa.link/dojlwi","_blank")}),c.jsxs("div",{children:[c.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/e2fda94b-3aeb-4561-b4ad-688ff898ee00/public",alt:"foto do casamento","data-aos":"fade-up","data-aos-delay":"100"}),c.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/f8c3dd3f-c32b-4c9d-2496-dcdc601a7e00/public",alt:"foto do casamento","data-aos":"fade-up","data-aos-delay":"200"}),c.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/980e5da2-7a6b-4d04-8e10-389d3ee83000/public",alt:"foto do casamento","data-aos":"fade-up","data-aos-delay":"300"})]})]}),c.jsx("div",{children:c.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/5361ac8b-1299-4fc6-7cbb-7e71c171e300/public",alt:"foto de aniversário","data-aos":"zoom-in","data-aos-delay":"200"})})]}),c.jsx(Ym,{"data-aos":"fade-up","data-aos-delay":"100",children:c.jsx(qm,{content:MT,spaceBetween:20,slidesPerView:1,width:"100%",height:"90vh",contentType:"image",showPagination:!0})}),c.jsx(xi,{})]})),e2=k.button`
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
`,RT=k(DC)`
  color: ${e=>e.iconColor||"currentColor"};
  height: 20px;
  width: 20px;
  transition: color 0.3s ease;

  ${e2}:hover & {
    color: ${e=>e.hoverIconColor||e.iconColor||"currentColor"};
  }
`,DT=k.span`
  margin: 10px;
`,yi=({text:e="Fazer reserva agora!",textColor:t,backgroundColor:n,borderColor:i,iconColor:r,hoverIconColor:a,hoverBackgroundColor:o,hoverBorderColor:s,hoverColor:l,onClick:d})=>c.jsxs(e2,{id:"clickwpp",onClick:d,textColor:t,backgroundColor:n,borderColor:i,hoverBackgroundColor:o,hoverBorderColor:s,hoverColor:l,children:[c.jsx(RT,{iconColor:r,hoverIconColor:a}),c.jsx(DT,{children:e})]}),VT=k.section`
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
`,NT=k.div`
    height: 15vh;

    @media (max-width: 768px){
        height: 0;
    }
`,FT=k.section`
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
`,$T=k.section`
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
`,BT=k.section`
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
`,HT=k.section`

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
`,UT=k.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-image: url('https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/d9be2586-3341-4990-f3c8-685edcad8900/public');
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
`,WT=()=>(j.useEffect(()=>{Oe.init({duration:1e3,once:!1}),Oe.refresh()},[]),c.jsxs(c.Fragment,{children:[c.jsx(Rn,{children:c.jsx("title",{children:"Sobre Nós - Pousada Le Ange"})}),c.jsx(NT,{}),c.jsx(gn,{}),c.jsxs(VT,{children:[c.jsxs("div",{children:[c.jsx("h1",{"data-aos":"fade-up","data-aos-delay":"100",children:"Pousada Le Ange"}),c.jsxs("h4",{"data-aos":"fade-down","data-aos-delay":"200",children:["A pousada mais ",c.jsx("b",{children:"Pet Friendly"})," do Brasil"]}),c.jsx("p",{"data-aos":"fade-up","data-aos-delay":"300",children:"Fundada em 2018 em Miguel Pereira, Rio de Janeiro, a Pousada Le Ange Serra nasceu da nossa paixão por quatro patas, bem-estar e hospitalidade. Com o sucesso da primeira unidade, expandimos para Búzios, em 2023, criando a Pousada Le Ange Mar. A filosofia por trás é oferecer mais do que uma pousada, um refúgio acolhedor."})]}),c.jsx("div",{"data-aos":"fade-left","data-aos-delay":"400",children:c.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/3e74beb7-77f8-4598-ec38-1e6f6e4d9300/public",alt:"foto da gaia, cachorra da pousada le ange",loading:"lazy","data-aos":"fade-right","data-aos-delay":"500"})})]}),c.jsxs(FT,{children:[c.jsxs("div",{children:[c.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/2edd1026-cdea-4ac6-f501-713bba86d600/public",alt:"foto da le ande da mar",loading:"lazy","data-aos":"fade-up","data-aos-delay":"100"}),c.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/74bff9be-8742-4468-e032-4cf79abe5300/public",alt:"foto da le ande da serra",loading:"lazy","data-aos":"fade-down","data-aos-delay":"100"})]}),c.jsxs("div",{children:[c.jsx("h1",{"data-aos":"fade-up","data-aos-delay":"100",children:"2 unidades,"}),c.jsx("h4",{"data-aos":"fade-down","data-aos-delay":"200",children:"2 refúgios únicos"}),c.jsx("p",{"data-aos":"fade-up","data-aos-delay":"300",children:"A Pousada LeAnge Serra oferece 10 suítes aconchegantes em meio à região serrana de Miguel Pereira. Já a Pousada LeAnge Mar, com suas 8 suítes exclusivas, proporciona uma experiência costeira em Búzios, com vista direta para o mar."})]})]}),c.jsxs($T,{children:[c.jsxs("div",{children:[c.jsx("h1",{"data-aos":"fade-up","data-aos-delay":"100",children:"Diferenciais"}),c.jsxs("p",{"data-aos":"fade-down","data-aos-delay":"200",children:["Somos mais que Pet Friendly, somos ",c.jsx("b",{children:"Pet Lovers!"})," Por aqui não temos limite de porte, quantidade ou raça. Nosso conceito permite que os pets frequentem o restaurente, a piscina e qualquer outro espaço. Assim, tornando-nos ÚNICOS a oferecer este tipo de experiência."]})]}),c.jsxs("div",{children:[c.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/d476f2e3-90fe-4291-137c-bc9f9e7f4000/public",loading:"lazy",alt:"rede na le ange mar","data-aos":"fade-up","data-aos-delay":"100"}),c.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/902b9f7b-b521-4545-08ee-f5386e777400/public",loading:"lazy",alt:"hot tube na le ange serra","data-aos":"fade-down","data-aos-delay":"200"}),c.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/db3f6942-0de2-433d-1235-33bfa547e500/public",loading:"lazy",alt:"casal se divertindo na le ange serra","data-aos":"fade-up","data-aos-delay":"300"}),c.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/920ca71e-b200-4a6c-5c7e-cc605234d700/public",loading:"lazy",alt:"foto da le ange com tema de natal","data-aos":"fade-down","data-aos-delay":"400"})]})]}),c.jsxs(BT,{children:[c.jsxs("div",{children:[c.jsxs("div",{children:[c.jsx("h1",{"data-aos":"fade-down","data-aos-delay":"100",children:"Gastronomia"}),c.jsxs("p",{"data-aos":"fade-up","data-aos-delay":"200",children:["Oferecemos um serviço ",c.jsx("i",{children:"all inclusive"})," que abrange todas as refeições, atendendo todas as restrições alimentares dos nossos hóspedes. Nosso compromisso é proporcionar uma experiência gastronômica diversificada e de alta qualidade, utilizando produtos frescos e locais."]})]}),c.jsxs("div",{children:[c.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/bbca820c-502b-48cf-a6d6-8a4d4da25900/public",loading:"lazy",alt:"foto da noite de pizzas na pousada le ange","data-aos":"fade-up","data-aos-delay":"300"}),c.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/9c2d46b5-4488-4382-1bf4-865c6f914100/public",loading:"lazy",alt:"foto da noite de risotos na pousada le ange","data-aos":"fade-down","data-aos-delay":"400"})]})]}),c.jsxs("div",{children:[c.jsxs("div",{children:[c.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/415e2adb-0537-4ce0-23cb-124869c06c00/public",loading:"lazy",alt:"foto do cachorro sorrindo para camera","data-aos":"fade-up","data-aos-delay":"100"}),c.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/f9af3c90-2ae9-4250-2ac9-afedce182000/public",loading:"lazy",alt:"uma mulher e dois cachorros na pousada le ange","data-aos":"fade-down","data-aos-delay":"200"})]}),c.jsxs("div",{children:[c.jsx("h1",{"data-aos":"fade-up","data-aos-delay":"300",children:"Espaços compartilhados"}),c.jsx("p",{"data-aos":"fade-down","data-aos-delay":"400",children:"Nossos espaços compartilhados incluem bibliotecas aconchegantes, sala de jogos e áreas de lazer diversificadas. Na Serra, temos piscinas, ofurô, hot tub, SPA e acesso às cachoeiras. Já em Búzios, nossos hóspedes desfrutam da piscina e dos ofurôs com vista incrível do mar aberto, além disso, estamos localizados próximo ao Mirante do Pai Vitório."})]})]})]}),c.jsxs(HT,{children:[c.jsxs("div",{children:[c.jsxs("div",{children:[c.jsx("h1",{"data-aos":"fade-up","data-aos-delay":"150",children:"Suítes"}),c.jsx("p",{"data-aos":"fade-down","data-aos-delay":"300",children:"Ambas as unidades dispõem de suítes luxuosas, equipadas com banheiras de imersão, camas king-size e roupas de cama de 400 fios. Na Serra, cada suíte conta com uma lareira aconchegante, enquanto em Búzios, a vista para o mar é um espetáculo à parte, garantindo uma experiência de tranquilidade incomparável."})]}),c.jsxs("div",{children:[c.jsx("h1",{"data-aos":"fade-up","data-aos-delay":"400",children:"Convivência"}),c.jsx("p",{"data-aos":"fade-down","data-aos-delay":"500",children:"Pedimos que considere se o seu pet é amigável, pois a pousada recebe vários outros pets. Além disso, aceitamos apenas humanos acompanhados por pets, e a idade mínima para hospedagem é 13 anos."})]})]}),c.jsx("div",{children:c.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/cc7ff3b2-c267-4a5b-140b-cfae14d7f900/public",alt:"foto do quadro de cachorro na pousada le ange mar","data-aos":"flip-left","data-aos-delay":"600"})})]}),c.jsx(Kr,{}),c.jsxs(UT,{children:[c.jsx("h1",{"data-aos":"fade-up","data-aos-delay":"200",children:"Venha viver essa experiência com a gente!"}),c.jsx(yi,{text:"Reservar agora!",textColor:"var(--color--white)",backgroundColor:"transparent",borderColor:"var(--color--white)",iconColor:"var(--color--white)",hoverBackgroundColor:"var(--color--white)",hoverBorderColor:"var(--color--white)",hoverColor:"var(--color--white)",hoverIconColor:"var(--color--white)",onClick:()=>window.open("https://wa.link/dojlwi","_blank"),"data-aos":"fade-in","data-aos-delay":"500"})]})]})),qT=Yr`
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
`,YT=k.div`
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
`,KT=k.div`
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
`,XT=k.h2`
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
`,QT=k.p`
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
`,ZT=k.div`
  flex: 2;
  height: 100%;

  @media (max-width: 768px){
    height: 30vh;
  }
`,JT=k.img`
  width: 100%;
  border-radius: 25px 0 25px 0;
  height: 100%;
  object-fit: cover;
  filter: contrast(120%);
`,eA=k(Jt)`
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
`,Nl=({slides:e,titleColor:t,backgroundColor:n,buttonBgColor:i,imagePosition:r="left"})=>c.jsxs(c.Fragment,{children:[c.jsx(qT,{}),c.jsx(eA,{navigation:!0,autoplay:{delay:5e3,disableOnInteraction:!1,pauseOnMouseEnter:!0},loop:!0,modules:[gi,vi,Vn],className:"mySwiper",$bgColor:i,onMouseEnter:()=>{},onMouseLeave:()=>{},children:e.map((a,o)=>c.jsx(en,{children:c.jsxs(YT,{imagePosition:r,children:[c.jsxs(KT,{children:[c.jsx(XT,{$colorDefined:t,"data-aos":"fade-up","data-aos-delay":"100",children:a.title}),c.jsx(QT,{"data-aos":"fade-down","data-aos-delay":"250",children:a.description}),c.jsx(Fe,{text:"Reservar agora!",backgroundColor:n,onClick:()=>window.open("https://wa.link/dojlwi","_blank")})]}),c.jsx(ZT,{"data-aos":"fade-left","data-aos-delay":"400",children:c.jsx(JT,{src:a.imageUrl,alt:a.title})})]})},o))})]}),tA=mn`
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
`,nA=k.section`
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
        animation: ${tA} 5s ease-in-out infinite;
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
        padding: 10px;
        font-size: 0.7rem;
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
        padding: 10px;
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
`,iA=k.div`
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
`,t2=({images:e})=>{const[t,n]=j.useState(null);return c.jsxs(nA,{children:[c.jsxs(iA,{children:[c.jsx("div",{children:c.jsx("h1",{"data-aos":"fade-up","data-aos-delay":"100",children:"Conheça as suítes da Le Ange Serra"})}),c.jsx("div",{"data-aos":"fade-down","data-aos-delay":"200",children:c.jsx(Fe,{text:"Reservar agora",backgroundColor:"var(--color--green)",borderColor:"var(--color--white)"})})]}),c.jsx("main",{"data-aos":"zoom-in","data-aos-delay":"200",children:e.map((i,r)=>c.jsxs("div",{onMouseEnter:()=>n(r),onMouseLeave:()=>n(null),children:[c.jsx("img",{src:i.src,alt:`Imagem ${r+1}`}),c.jsxs("span",{onClick:()=>window.location.href=`/leange/#/acomodaSerra#suite${r+1}`,children:[t===r?"Conhecer Suítes":i.text,t===r&&c.jsx(rp,{})]})]},r))})]})},rA=k.section`
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
`,aA=k.div`
    width: 50%;
    height: 90%;
    display: flex;
    justify-content: center;
    overflow: hidden;

    @media (max-width: 768px){
        width: 100%;
        height: 50vh;
    }
`,oA=k.div`
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
`,sA=k.div`
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
`,lA=k.h1`
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
`,cA=k.p`
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
`;k(yi)`
    margin-top: auto; 
`;const Fl=({colorDefinedBold:e})=>c.jsxs(rA,{children:[c.jsx(aA,{children:c.jsxs(oA,{children:[c.jsxs("div",{children:[c.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/ff1e37f5-c2ef-407f-b2fe-e3af31bc2900/public",alt:"Homem fazendo churrasco na le ange",loading:"lazy","data-aos":"fade-up","data-aos-delay":"100"}),c.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/58565dfa-b512-4cb6-661c-044db3e48b00/public",alt:"Risoto no prato na le ange",loading:"lazy","data-aos":"fade-up","data-aos-delay":"200"})]}),c.jsxs("div",{children:[c.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/ca15c837-1a56-47c9-8b78-ec68f1cfa200/public",alt:"Foto do hamburguer da le ange com batata frita e saladas",loading:"lazy","data-aos":"fade-down","data-aos-delay":"100"}),c.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/c1c7acdf-aba7-443b-b1e5-3bdc237b3b00/public",alt:"Risoto no prato na le ange",loading:"lazy","data-aos":"fade-down","data-aos-delay":"200"})]})]})}),c.jsxs(sA,{children:[c.jsxs(lA,{colorDefinedBold:e,"data-aos":"fade-up","data-aos-delay":"400",children:["Alimentação ",c.jsx("b",{children:"Inclusa"})]}),c.jsxs(cA,{"data-aos":"fade-down","data-aos-delay":"500",children:["Na ",c.jsx("b",{children:"Le Ange"}),", tudo é pensado para oferecer uma experiência gastronômica diversificada, atendendo todo tipo de restrição alimentar e valorizando ingredientes locais e frescos.  ",c.jsx("br",{})," ",c.jsx("br",{}),"Nossa estadia dispõe de um restaurante, onde são oferecidas todas as refeições do dia:",c.jsx("br",{}),c.jsx("br",{}),c.jsxs("ol",{type:"disc",children:[c.jsx("li",{children:"Café da manhã;"}),c.jsx("li",{children:"Almoço;"}),c.jsx("li",{children:"Chá da tarde;"}),c.jsx("li",{children:"Jantar."}),c.jsx("br",{})]}),"Incluindo as nossas deliciosas sobremesas."]}),c.jsx(xp,{"data-aos":"fade-up","data-aos-delay":"200",text:"Fazer reserva!",text2:"Clique e reserve",borderColor:"var(--color--black)",textColor:"var(--color--black)",hoverColor:"var(--color--black)",hoverTextColor:"var(--color--white)"})]})]}),Km=k.section`
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
`,dA=k.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    height: 80vh;
    padding: 0 5%;

    @media (max-width: 768px){
        height: auto;
    }
`,uA=k.div`
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
`,fA=k.p`
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
`,pA=[{id:1,text:"Pousada Le Ange Mar",bgImages:["https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/6f192299-26a5-4cba-0d3d-f042f7cc4100/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/96048cf4-e533-42ef-631c-17c79f758300/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/53ddb117-9d86-42b5-0188-2733003a8400/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/95f365f9-0cf7-4a99-de39-71618b26a300/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/86f7d35e-3494-439d-483c-48e036d31a00/public"]},{id:2,text:"Pousada Le Ange Serra",bgImages:["https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/7e872f9c-0035-4872-cf50-e7eac0bf1600/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/532a9b10-7c75-4668-65bc-97a13ace5600/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/abd1748a-6b4f-4c8d-4dfa-af0a83aaaf00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/5f04125f-47d3-4abd-c359-9e3c129f6500/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/e6c7bed9-f486-4be9-db47-7087f6943500/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/122827e6-c434-44a2-0546-d37d2ffeaf00/public"]},{id:3,text:"Pousada Le Ange Mar",bgImages:["https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/cac55f28-555d-4ce5-6e3b-457af8476c00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a38d49ef-f498-4f03-cecd-d4ac8c69ac00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/ffcf23fa-d075-4682-9bda-844c527d7f00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/d0f29504-829a-4c8f-8720-4c8ae3d27f00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/3f1ccf0e-8406-4164-0955-29087e5a0f00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/480b1655-49d4-4323-86c1-345224294000/public"]},{id:4,text:"Pousada Le Ange Serra",bgImages:["https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/3908ea8d-5d8e-4a13-ac75-dc312f545100/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/66aa3be9-dd1d-460a-2a0d-4da92e68dc00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/bf5974c4-3129-43bb-db61-23404c00d600/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/def5ad59-dc78-4e9a-320b-28d28ec6c500/public"]},{id:5,text:"Pousada Le Ange Mar",bgImages:["https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/0afec340-71f1-42f3-3ffe-5af2438d7500/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/2603ac07-7df2-43eb-697f-99e79942c200/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/b2c446cd-cffd-49f1-cb59-65ace1b57a00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/ca778cf7-62d4-48fb-6e1c-1e6d1fc29400/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/67bb7d62-0ff9-490f-160a-1335e4800200/public"]},{id:6,text:"Pousada Le Ange Serra",bgImages:["https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/5abab547-8a8a-408f-013d-0ec1ce1b7a00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/faa5f682-d069-4b1c-c022-6d7f99612700/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a78d689b-9028-473c-6edd-b0d0c4912400/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/2e5748ca-ff68-4da1-bff2-e852fa441a00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a2ac9fb3-1ba9-422f-ccee-9aea2852df00/public"]},{id:7,text:"Pousada Le Ange Mar",bgImages:["https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/695f6ec1-0347-4549-4f16-663780080f00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/1ddb51ed-4ba4-44ed-06a2-7d6c21838700/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/cb252e21-68b5-495b-d8fc-3a1dbe454600/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a2e35092-b9d0-49c7-701a-082307a62400/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/be407d5c-724c-4ebd-9873-a4057f301100/public"]}],$l=()=>c.jsxs(c.Fragment,{children:[c.jsx(Km,{children:c.jsx("h1",{children:"Palavra do Hóspede"})}),c.jsx(dA,{children:c.jsx(Jt,{slidesPerView:1,spaceBetween:10,modules:[gi,vi,Vn],pagination:!1,navigation:!0,loop:!0,grabCursor:!0,autoplay:{delay:7e3,disableOnInteraction:!1,pauseOnMouseEnter:!0},breakpoints:{1024:{slidesPerView:3},768:{slidesPerView:2},480:{slidesPerView:1}},children:pA.map(e=>c.jsx(en,{children:c.jsxs(uA,{"data-aos":"fade-up","data-aos-delay":"200",children:[c.jsx(Jt,{slidesPerView:1,spaceBetween:10,loop:!0,style:{width:"100%",height:"100%"},autoplay:{delay:5e3,disableOnInteraction:!1,pauseOnMouseEnter:!0},onTouchStart:t=>{t.stopPropagation()},onMouseEnter:t=>{t.stopPropagation()},children:e.bgImages.map((t,n)=>c.jsx(en,{children:c.jsx("div",{style:{backgroundImage:`url(${t})`,backgroundSize:"cover",backgroundPosition:"center",width:"100%",height:"100%",borderRadius:"25px 0 25px 0"},loading:"lazy"})},n))}),c.jsx(fA,{children:e.text})]})},e.id))})}),c.jsx(Km,{children:c.jsx(yi,{text:"Reservar agora!",textColor:"var(--color--black)",backgroundColor:"transparent",borderColor:"var(--color--black)",iconColor:"var(--color--black)",hoverBackgroundColor:"var(--color--black)",hoverBorderColor:"var(--color--black)",hoverColor:"var(--color--white)",hoverIconColor:"var(--color--white)",onClick:()=>window.open("https://wa.link/dojlwi","_blank")})})]});k.div`
    height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center; 

    @media (max-width: 768px){
        height: auto;
    }
`;const hA=k.section`
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
`,Bl=({carousels:e})=>c.jsxs(c.Fragment,{children:[c.jsxs(hA,{children:[c.jsxs("h1",{"data-aos":"fade-up","data-aos-delay":"200",children:[c.jsx("b",{children:"100%"})," Pet Friendly"]}),c.jsx(yi,{text:"Reservar agora!",textColor:"var(--color--black)",backgroundColor:"transparent",borderColor:"var(--color--black)",iconColor:"var(--color--black)",hoverBackgroundColor:"var(--color--black)",hoverBorderColor:"var(--color--black)",hoverColor:"var(--color--white)",hoverIconColor:"var(--color--white)",onClick:()=>window.open("https://wa.link/dojlwi","_blank")})]}),e.map((t,n)=>c.jsx(Cu,{images:t.images,reverse:t.reverse||!1},n))]}),mA=k.div`
    height: 0vh;

    @media (max-width: 768px){
        height: 0vh!important;
    }
`,gA=k.section`
    width: 100%;
    display: flex;
    padding: 5% 5% 2.5% 10%;
    align-items: center;
    justify-content: space-between;
    flex-direction: row-reverse;
    height: 100vh;
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
        opacity: .02;
        background-image: url('https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/f9af3c90-2ae9-4250-2ac9-afedce182000/public');
        background-position: center;
        background-size: cover;

        @media (max-width:1080px){
            display: none!important;
        }
    }

    @media (max-width: 768px){
        padding: 5% 2.5%;
        flex-direction: column-reverse;
        position: relative;
        z-index: 2;
        height: 100vh;
    }
`,vA=k.div`
    width: 55%;
    height: 100%;
    background-image: url('https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/f9af3c90-2ae9-4250-2ac9-afedce182000/public');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    filter: contrast(110%);
    position: absolute;
    left: 0;
    top: 0;

    &::before{
        content: '';
        width: 30%;
        height: 100%;
        position: absolute;
        top: 0;
        right: 0;
        z-index: 10;
        border-image: fill 0 linear-gradient(90deg, #0000, #ffffff);

        @media (max-width:768px){
            display: none;
        }
    }

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
`,xA=k.div`
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
        justify-content: flex-end;
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
            line-height: 100%;
        }
    }
`,yA=[{title:"Pet Friendly",description:"Não temos restrições quanto ao porte ou raça do seu pet, também não cobramos taxas adicionais para a vinda deles. Aqui, o seu pet tem liberdade total para acessar todas as nossas comodidades!",buttonText:"Viver minha experiência agora",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/db3f6942-0de2-433d-1235-33bfa547e500/public"},{title:"Aventura",description:"Na propriedade, há trilhas que percorrem a natureza, beirando o rio! Em diversos pontos, você pode dar uma paradinha para tomar um banho nas águas frescas e renovar as energias!",buttonText:"Viver minha experiência agora",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/b324ce14-d3d8-4fc3-fccf-b4b4a9806d00/public"},{title:"Refrescar",description:"Nossa maravilhosa piscina de borda infinita possui aquecimento solar e tratamento especial por ozônio, com níveis baixíssimos de cloro, além de contar com um ofurô acoplado, perfeito para aproveitar o final de tarde.",buttonText:"Viver minha experiência agora",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/8b7eae12-574b-40fd-5e6f-7f341c81a600/public"},{title:"Sossego",description:"A área da sauna fica situada ao lado da mata, envolvida pelo som relaxante do rio que passa. Aqui, você pode desfrutar de um hot tub abastecido por água natural e aquecido à lenha, o combo perfeito para você relaxar.",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/da7c577a-832a-4a84-d5fd-162e11915b00/public"},{title:"Lazer",description:"Nossas áreas internas contam com três salas superequipadas e aconchegantes, sendo elas: sala de TV, sala de estar, sala de jogos com mesa de bilhar, carteado, jogos de tabuleiro e biblioteca.",buttonText:"Viver minha experiência agora",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/7c086b71-3c6b-442b-584c-dcdabe1be700/public"},{title:"Cozinha",description:"Todas as refeições estão incluídas: café da manhã, almoço, chá da tarde e jantar! Todas preparadas com muito tempero, amor e afeto.",buttonText:"Viver minha experiência agora",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/c1c7acdf-aba7-443b-b1e5-3bdc237b3b00/public"},{title:"Diversão",description:"Espaço de sobra para o seu pet se divertir! Espaço agility à beira do lago, com muita grama, para o seu pet, correr, pular, brincar e, claro, nadar!",buttonText:"Viver minha experiência agora",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/c57174c4-9b12-4842-e8ff-6cfb4867a200/public"},{title:"Adega",description:"Para tornar a sua experiência ainda mais especial, contamos com uma adega subterrânea para a climatização perfeita dos vinhos, bar com carta variada de drinks, cervejas e destilados.",buttonText:"Viver minha experiência agora",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/1a66d627-7861-4124-638d-d21ddef05100/public"},{title:"Suítes",description:"São 10 suítes encatadoras e cada uma possui o seu charme. Todas dispõem de uma banheira com vista para a natureza, lareira, cama king-size, ar-condicionado, frigobar e varanda.",buttonText:"Viver minha experiência agora",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/48a11406-659c-4d98-f2d8-6fc518ef6600/public"},{title:"Relaxar",description:"Relaxe no nosso SPA com uma vista de frente para a mata! Você pode escolher contratar os nossos serviços de massoterapia, manicure e pedicure.",buttonText:"Viver minha experiência agora",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/ece77d44-3478-4c00-cb8f-073b002ed400/public"}],wA=[{images:[{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/c3cd47cc-01fa-43c8-ef2d-e57d8ba50d00/public",alt:"Cachorro surfando na piscina",loading:"lazy",label:"Le Ange Serra"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/5bdb3546-6085-40a1-059b-b977978f2800/public",alt:"Cachorro andando na borda da piscina",loading:"lazy",label:"Le Ange Serra"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/e69c27cf-cc71-4a1a-c859-7604db2ec700/public",alt:"Cachorro sentado tomando sol e sorrindo para a foto",loading:"lazy",label:"Le Ange Serra"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/f9af3c90-2ae9-4250-2ac9-afedce182000/public",alt:"2 cachorros e uma mulher no meio",loading:"lazy",label:"Le Ange Serra"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/4fe90a96-3e1a-475e-bf6c-b2f68430b400/public",alt:"Cachorro mordendo uma bolinha",loading:"lazy",label:"Le Ange Serra"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/fa931507-db19-427a-91a0-c30d8fb81800/public",alt:"Casal com um casal de cachorro sentado na beira da piscina",loading:"lazy",label:"Le Ange Serra"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/f0b0ec5f-6bd1-427d-7bc9-93253779d000/public",alt:"Mulher na cachoeira com cachorros brincando",loading:"lazy",label:"Le Ange Serra"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/82fb4467-00bc-422b-be3f-d13d0847d900/public",alt:"Mulher e cachorro na piscina sorrindo",loading:"lazy",label:"Le Ange Serra"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/3f981b12-4550-4d26-bdc6-1e3050abf600/public",alt:"3 cachorros tirando uma selfie",loading:"lazy",label:"Le Ange Serra"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/eff6d8ef-159a-46da-6fe7-0a826541f000/public",alt:"Cachorro dormindo na rede em cima da cachoeira",loading:"lazy",label:"Le Ange Serra"}]},{images:[{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/23c08875-4c8e-470d-3635-56f4cdfc1000/public",alt:"Cachorro dormindo no sofá",loading:"lazy",label:"Le Ange Serra"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a7910dc1-2d38-46fe-c997-734005e71600/public",alt:"Cachorro papai noel",loading:"lazy",label:"Le Ange Serra"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/0ba1de25-a892-4ee8-7165-584f54f0b600/public",alt:"Um cachorro no cola de um humano sorrindo",loading:"lazy",label:"Le Ange Serra"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/6da69e80-1cff-41e2-5434-318840221800/public",alt:"2 cachorros e uma mulher no meio",loading:"lazy",label:"Le Ange Serra"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/d9be2586-3341-4990-f3c8-685edcad8900/public",alt:"Cachorro na mão do tutor",loading:"lazy",label:"Le Ange Serra"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/dce2d881-18d3-4a3d-5b7e-ad7e364be300/public",alt:"2 cachorros sorrindo na rede",loading:"lazy",label:"Le Ange Serra"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/fab67883-96b6-4f10-9c94-c5622ee8b000/public",alt:"Uma mulher e um cachorro do lado dela",loading:"lazy",label:"Le Ange Serra"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/56af4858-5fbf-438f-fac3-ee527c3a4600/public",alt:"3 cachorros brincando na praia",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/db285e3c-87b7-40db-b04b-cfd384d06200/public",alt:"Cachorro andando na cachoeira",loading:"lazy",label:"Le Ange Serra"}],reverse:!0}],bA=k.section`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px){
        height: auto;
        padding: 0% 0 5% 0 ;
    }
`,SA=k.div`
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
`,jA=k.section`
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
`,CA=[{image:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/58c77a3d-d9fb-422f-c84b-ad4798b74600/public",title:"Fique 4 pague 3",dateRange:"Segunda-feira a Sexta-feira",features:[{icon:c.jsx(ve,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(mo,{}),text:"Até 12X SEM JUROS"},{icon:c.jsx(ut,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"449,00",discount:25},{image:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/1ea7ed06-0da2-4123-00bf-c74543625600/public",title:"Pacote de Carnaval",dateRange:"28/02/2025 até 04/03/2025 (4 diárias)",features:[{icon:c.jsx(ve,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(ve,{}),text:"Churrasco no sábado"},{icon:c.jsx(ut,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"757,25",discount:25},{image:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/7e26f340-d751-4102-9259-3b9ec67e3600/public",title:"Pacote de Páscoa",dateRange:"17/04/2025 até 21/04/2025 (4 diárias)",features:[{icon:c.jsx(ve,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(ve,{}),text:"Almoço e noite especial"},{icon:c.jsx(ut,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"653,80",discount:25}],kA=k.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 15vh;
    margin-bottom: -10vh;

    @media (max-width: 768px){
        display: none;
    }
`,TA=[{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/c21ef88c-f22b-497e-1e70-5c5b4c4cf500/public",text:"Suíte Superior 1",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/23d18593-f941-4c65-0349-6b23e6ea2800/public",text:"Suíte Superior 2",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/99db9a7b-dafd-4b04-36ce-c4eac6880600/public",text:"Suíte Superior 3",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/d07d16a0-e7f4-4104-7d5e-f7e4c2dfa500/public",text:"Suíte Standard 4",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/fd429f81-a091-4ca3-9f54-d4a1b730e200/public",text:"Suíte Standard 5",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a22d76b9-b7d4-4174-0cc1-4cfdfd57d500/public",text:"Suíte Master 6",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a7ae1bee-6f60-4584-d03c-0aebd06a2600/public",text:"Suíte Superior 7",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/4c448474-8a7b-489b-ac5f-7b11c4dfad00/public",text:"Suíte Standard 8",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/509535a4-9291-44a8-c250-5e8be0b28e00/public",text:"Suíte Superior 9",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/853f4009-5ddc-49ad-717f-3d49d3ad4900/public",text:"Suíte Master 10",loading:"lazy"}],AA=k.p`
  font-size: .9rem!important;
  opacity: .4;
  font-weight: 200;

  @media (max-width: 768px) {
    width: 100%!important;
  }
`,EA=k.div`
    width: 100%;
    margin-top: 5vh;
    margin-bottom: -5vh;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px){
        margin-top: 0;
        margin-bottom: 0;
    }
`,PA=()=>(j.useEffect(()=>{Oe.init({duration:1e3,once:!1}),Oe.refresh()},[]),c.jsxs(c.Fragment,{children:[c.jsx(Rn,{children:c.jsx("title",{children:"Le Ange Serra - Pousada Le Ange"})}),c.jsx(mA,{}),c.jsx(gn,{}),c.jsxs(gA,{children:[c.jsx(vA,{"data-aos":"zoom-in","data-aos-delay":"100"}),c.jsxs(xA,{children:[c.jsx("h4",{"data-aos":"fade-up","data-aos-delay":"100",children:"Conheça a Le Ange Serra, a pousada mais"}),c.jsxs("h1",{"data-aos":"fade-down","data-aos-delay":"200",children:["PET FRIENDLY",c.jsx("br",{})," DO ",c.jsx("b",{children:"BRASIL"})]}),c.jsx("p",{children:"Aqui você e o seu pet, são mais do que bem-vindos!"}),c.jsx(yi,{text:"Reservar agora!",textColor:"var(--color--black)",backgroundColor:"transparent",borderColor:"var(--color--black)",hoverBackgroundColor:"var(--color--green)",hoverBorderColor:"var(--color--green)",hoverColor:"var(--color--white)",hoverIconColor:"var(--color--white)",onClick:()=>window.open("https://wa.link/dojlwi","_blank")}),c.jsx(AA,{children:"*Só permitimos crianças acima de 13 anos!"})]})]}),c.jsx(SA,{"data-aos":"fade-up","data-aos-delay":"200",children:c.jsx("h1",{"data-aos":"fade-in","data-aos-delay":"400",children:"LeAnge Serra | Miguel Pereira RJ"})}),c.jsx(Kr,{}),c.jsx(bA,{children:c.jsx(Nl,{slides:yA,backgroundColor:"var(--color--green)"})}),c.jsx(t2,{images:TA,"data-aos":"fade-up","data-aos-delay":"200"}),c.jsx(Fl,{}),c.jsx(Bl,{carousels:wA}),c.jsx(kA,{children:c.jsx(Fe,{backgroundColor:"var(--color--green)",text:"Fazer minha reserva!",onClick:()=>window.open("https://wa.link/dojlwi","_blank")})}),c.jsx(EA,{children:c.jsx(xo,{})}),c.jsx(jA,{children:c.jsx(vo,{events:CA})}),c.jsx($l,{}),c.jsx(xi,{})]})),GA=mn`
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
`,zA=k.section`
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
        animation: ${GA} 5s ease-in-out infinite;
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
        padding: 10px;
        font-size: 0.7rem;
        font-weight: 100;
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
        padding: 10px;
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
`,_A=k.div`
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
`,n2=({images:e})=>{const[t,n]=j.useState(null);return j.useEffect(()=>{Oe.init({duration:1e3,once:!1}),Oe.refresh()},[]),c.jsxs(zA,{children:[c.jsxs(_A,{children:[c.jsx("div",{children:c.jsx("h1",{"data-aos":"fade-up","data-aos-delay":"100",children:"Conheça as suítes da Le Ange Mar"})}),c.jsx("div",{"data-aos":"fade-down","data-aos-delay":"250",children:c.jsx(Fe,{text:"Reservar agora",backgroundColor:"var(--color--blue)",borderColor:"var(--color--white)"})})]}),c.jsx("main",{"data-aos":"zoom-in-up","data-aos-delay":"400",children:e.map((i,r)=>c.jsxs("div",{onMouseEnter:()=>n(r),onMouseLeave:()=>n(null),children:[c.jsx("img",{src:i.src,alt:`Imagem ${r+1}`}),c.jsxs("span",{onClick:()=>window.location.href=`/leange/#/acomodaMar#suite${r+1}`,children:[t===r?"Conhecer Suítes":i.text,t===r&&c.jsx(rp,{})]})]},r))})]})},MA=k.div`
    height: 0vh;

    @media (max-width: 768px) {
        height: 0vh;
    }
`,LA=k.section`
    width: 100%;
    display: flex;
    padding: 5% 10% 2.5% 5%;
    align-items: center;
    justify-content: space-between;
    height: 100vh;
    background: #fff;
    position: relative;

    &::before {
        content: '';
        width: 100%;
        height: 100%;
        left: 0;
        position: absolute;
        z-index: 1;
        opacity: 0.02;
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
`,OA=k.div`
    width: 55%;
    height: 100%;
    background-image: url('https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/ddb82947-e348-414c-3db1-f51552701b00/public');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    filter: contrast(110%);
    position: absolute;
    right: 0;
    top: 0;

    &::before{
        content: '';
        width: 30%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 10;
        border-image: fill 0 linear-gradient(-90deg, #0000, #ffffff);

        @media (max-width:768px){
            display: none;
        }
    }

    @media (max-width: 768px) {
        width: 100%;
        border-radius: 0px;
        border-image: fill 0 linear-gradient(#0000, #ffffff);
        box-shadow: none!important;
        position: absolute;
        height: 100%;
        top: 0;
        z-index: -3;
    }
`,IA=k.div`
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

        @media (max-width: 768px){
            color: var(--color--white);
            font-weight: 600;
            background-color: #7AC4F390;
            padding: 5px;
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
`,RA=[{title:"Pet Friendly",description:"Não temos restrições quanto ao porte ou raça do seu pet, também não cobramos taxas adicionais para a vinda deles. Aqui, o seu pet tem liberdade total para acessar todas as nossas comodidades!",buttonText:"Viver minha experiência agora",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/42a70d06-97d1-4f5c-5df8-36c30f21c100/public"},{title:"Praia",description:"Para os amantes da praia, estamos localizados a apenas 150 metros da Praia Rasa, onde você e o seu pet podem aproveitar juntinhos e dar um mergulho delicioso no mar.",buttonText:"Viver minha experiência agora",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/da4810e5-6e85-45f5-1fcf-f6a74754bd00/public"},{title:"Piscina",description:"Nossa piscina aquecida com vista panorâmica para o oceano é de surpreender! Possui tratamento especial por ozônio com níveis baixíssimos de cloro, pensando no bem-estar da sua pele e a do seu pet também!",buttonText:"Viver minha experiência agora",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/09da9d76-57b8-4d44-02b2-3c4c2380c800/public"},{title:"Ofurôs",description:"São dois ofurôs acoplados na piscina, para você relaxar na água quentinha, apreciando a vista exuberante do mar.",buttonText:"Viver minha experiência agora",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/0d1d1a6a-5935-4c57-6b12-d1f028604400/public"},{title:"Sala de estar",description:"A sala de estar é aquela que abraça e aconchega. Cheia de sofás, você pode se acomodar e assistir à televisão, ou até mesmo ler um livro, sempre na companhia do seu pet.",buttonText:"Viver minha experiência agora",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/939f40ce-048b-4746-7ce7-83fc2f4bbc00/public"},{title:"Cozinha",description:"Todas as refeições estão incluídas: café da manhã, almoço, chá da tarde e jantar! Todas preparadas com muito tempero, amor e afeto.",buttonText:"Viver minha experiência agora",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/bec96bcc-f2d6-431c-a7d5-31e1c5b7d000/public"},{title:"Bar",description:"Para completar ainda mais a sua experiência, contamos com uma carta variada de vinhos, destilados, drinks e cervejas!",buttonText:"Viver minha experiência agora",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/67318553-8e4b-4d4c-b914-3ea76fc7be00/public"},{title:"Suítes",description:"São 8 suítes, elegantemente, decoradas, todas com vista para o mar, banheira de imersão, varanda, cama king-size, ar-condicionado e frigobar.",buttonText:"Viver minha experiência agora",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/4d6afdaf-1cfe-4860-8099-818abedfdd00/public"}],DA=k.section`
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
`,VA=[{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/04491c1f-dc99-499a-4e92-13037b3eab00/public",text:"Suíte Superior 1",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/4551d99f-d7fa-440f-bdb1-9126c3a82100/public",text:"Suíte Standard 2",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a81bc75d-a475-4dc9-6101-2f7dbb4e4b00/public",text:"Suíte Superior 3",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/e0b4c640-813a-4586-bdf9-91b0be3f7300/public",text:"Suíte Superior 4",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/912f5f6c-6f94-4dae-30b3-85c460f0f700/public",text:"Suíte Superior 5",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/70b133ff-56ab-44b4-76b3-ef1638c79000/public",text:"Suíte Superior 6",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/e9d95c2b-081d-4808-6bf6-431e89183c00/public",text:"Suíte Master 7",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/baf68f87-5db9-47ec-0fb5-dc4b5e1f4b00/public",text:"Suíte Master 8",loading:"lazy"}],NA=k.div`
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
`,FA=k.section`
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
`,$A=k.p`
  font-size: .9rem!important;
  opacity: .4;
  font-weight: 200;
  width: 100%!important;
`,BA=[{image:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/58c77a3d-d9fb-422f-c84b-ad4798b74600/public",title:"Fique 4 pague 3",dateRange:"Segunda-feira a Sexta-feira",features:[{icon:c.jsx(ve,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(mo,{}),text:"Até 12X SEM JUROS"},{icon:c.jsx(ut,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"449,00",discount:25},{image:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/1ea7ed06-0da2-4123-00bf-c74543625600/public",title:"Pacote de Carnaval",dateRange:"28/02/2025 até 04/03/2025 (4 diárias)",features:[{icon:c.jsx(ve,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(ve,{}),text:"Churrasco no sábado"},{icon:c.jsx(ut,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"757,25",discount:25},{image:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/7e26f340-d751-4102-9259-3b9ec67e3600/public",title:"Pacote de Páscoa",dateRange:"17/04/2025 até 21/04/2025 (4 diárias)",features:[{icon:c.jsx(ve,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(ve,{}),text:"Almoço e noite especial"},{icon:c.jsx(ut,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"653,80",discount:25}],HA=k.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 15vh;
    margin-bottom: -10vh;

    @media (max-width: 768px) {
        display: none;
    }
`,UA=[{images:[{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/c9f443a0-365f-4341-67c4-dc3b15d8d200/public",alt:"Foto de cachorro com uma bola na boca",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/f381312d-98e6-4e3a-2267-b72775b77800/public",alt:"Foto do cachorro sentado tomando sol",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/ebe09a3c-386f-4683-b025-9734976d0b00/public",alt:"Cachorro na piscina sorrindo",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/2ea4864a-bc1c-4b0f-c720-4f4db60d6600/public",alt:"Cachorro tirando uma selfie com outros 3 cachorros",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/0d4896d4-5675-4739-7cb3-30fc1c6dec00/public",alt:"Foto do cachorro olhando para a câmera",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/6a09554d-7f59-42f4-603b-bf2a3bf24600/public",alt:"Cachorro com a lingua para fora",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/6f6a0274-479c-4c48-e1ce-23fa90998500/public",alt:"Cachorro na borda da piscina",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/b784a222-c8bc-4a35-ac3a-a6056d717300/public",alt:"Cachorro em uma prancha de surf na onda",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/d826fa54-7c2b-47b9-9cb6-4e0540d8dd00/public",alt:"Cachorro com óculos escuros",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/00e287de-9719-47ee-0fb1-3ef507b3a800/public",alt:"Cachorro e um cachorro pequeno",loading:"lazy",label:"Le Ange Mar"}]},{images:[{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/b4ddd8c3-b6c1-4c00-d54b-06a44c074900/public",alt:"Foto de um cachorro com uma taça do lado",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a6b63bf4-92e1-43d5-9a86-ed900bdc4800/public",alt:"3 cachorros e um homem na piscina",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/1cd65a71-7f00-4f13-5a67-c4ff922d8f00/public",alt:"Cachorro marrom",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/366f42cc-6fe9-4fc0-5ef6-15ea8e420b00/public",alt:"Cachorro marrom na piscina",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/5b19b1f4-fd46-4dc9-5faa-96995d69b400/public",alt:"Cachorro branco olhando para a camera",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/252ec971-e6a4-4b55-3e1b-2069f4570800/public",alt:"Cachorro dormindo no sofá",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/9ca851c2-347a-4f8c-752e-b90080865800/public",alt:"Cachorro em cima do morro olhando para o lado",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/7a0ae482-3436-4db1-9ed3-c1c7b1b02b00/public",alt:"3 cachorros brincando na praia",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/d9be2586-3341-4990-f3c8-685edcad8900/public",alt:"Foto do cachorro olhando para a câmera",loading:"lazy",label:"Le Ange Mar"}],reverse:!0}],WA=k.div`
    width: 100%;
    margin-top: 5vh;
    margin-bottom: -5vh;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px){
        margin-top: 0;
        margin-bottom: 0;
    }
`,qA=()=>(j.useEffect(()=>{Oe.init({duration:1e3,once:!1}),Oe.refresh()},[]),c.jsxs(c.Fragment,{children:[c.jsx(Rn,{children:c.jsx("title",{children:"Le Ange Serra - Pousada Le Ange"})}),c.jsx(MA,{}),c.jsx(gn,{}),c.jsxs(LA,{children:[c.jsxs(IA,{children:[c.jsxs("h4",{"data-aos":"fade-up","data-aos-delay":"100",children:["Conheça a ",c.jsx("b",{children:"Le Ange Mar"}),", a pousada mais"]}),c.jsxs("h1",{"data-aos":"fade-down","data-aos-delay":"200",children:["PET FRIENDLY",c.jsx("br",{})," DO ",c.jsx("b",{children:"BRASIL"})]}),c.jsx("p",{children:"Aqui, você e o seu pet são mais do que bem-vindos!"}),c.jsx("div",{children:c.jsx(yi,{text:"Reservar agora!",textColor:"var(--color--black)",backgroundColor:"transparent",borderColor:"var(--color--black)",iconColor:"var(--color--black)",hoverBackgroundColor:"var(--color--blue)",hoverBorderColor:"var(--color--blue)",hoverColor:"var(--color--white)",hoverIconColor:"var(--color--white)",onClick:()=>window.open("https://wa.link/dojlwi","_blank")})}),c.jsx($A,{children:"*Só permitimos crianças acima de 13 anos!"})]}),c.jsx(OA,{"data-aos":"fade-left","data-aos-delay":"200"})]}),c.jsx(NA,{"data-aos":"fade-in","data-aos-delay":"100",children:c.jsx("h1",{"data-aos":"fade-up","data-aos-delay":"300",children:"LeAnge Mar | Armação dos Búzios RJ"})}),c.jsx(Kr,{}),c.jsx(DA,{"data-aos":"fade-up","data-aos-delay":"50",children:c.jsx(Nl,{slides:RA,titleColor:"var(--color--blue)",buttonBgColor:"var(--color--blue)",imagePosition:"left",backgroundColor:"var(--color--blue)"})}),c.jsx(n2,{images:VA}),c.jsx(Fl,{colorDefinedBold:"var(--color--blue)","data-aos":"fade-up","data-aos-delay":"400"}),c.jsx(Bl,{carousels:UA,"data-aos":"fade-in","data-aos-delay":"400"}),c.jsx(HA,{children:c.jsx(Fe,{text:"Fazer minha reserva!",backgroundColor:"var(--color--green)",onClick:()=>window.open("https://wa.link/dojlwi","_blank")})}),c.jsx(WA,{children:c.jsx(xo,{})}),c.jsx(FA,{"data-aos":"fade-up","data-aos-delay":"400",children:c.jsx(vo,{events:BA})}),c.jsx($l,{}),c.jsx(xi,{})]}));function YA(e){return Q({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm8.25 5.25a.75.75 0 0 1 .75-.75h8.25a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75Z",clipRule:"evenodd"},child:[]}]})(e)}var i2={exports:{}};(function(e,t){(function(n,i){e.exports=i(j)})(typeof self<"u"?self:Zm,function(n){return function(i){var r={};function a(o){if(r[o])return r[o].exports;var s=r[o]={i:o,l:!1,exports:{}};return i[o].call(s.exports,s,s.exports,a),s.l=!0,s.exports}return a.m=i,a.c=r,a.d=function(o,s,l){a.o(o,s)||Object.defineProperty(o,s,{enumerable:!0,get:l})},a.r=function(o){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})},a.t=function(o,s){if(1&s&&(o=a(o)),8&s||4&s&&typeof o=="object"&&o&&o.__esModule)return o;var l=Object.create(null);if(a.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:o}),2&s&&typeof o!="string")for(var d in o)a.d(l,d,(function(u){return o[u]}).bind(null,d));return l},a.n=function(o){var s=o&&o.__esModule?function(){return o.default}:function(){return o};return a.d(s,"a",s),s},a.o=function(o,s){return Object.prototype.hasOwnProperty.call(o,s)},a.p="",a(a.s=2)}([function(i,r){i.exports=n},function(i,r,a){var o={linear:function(s,l,d,u){return(d-l)*s/u+l},easeInQuad:function(s,l,d,u){return(d-l)*(s/=u)*s+l},easeOutQuad:function(s,l,d,u){return-(d-l)*(s/=u)*(s-2)+l},easeInOutQuad:function(s,l,d,u){var f=d-l;return(s/=u/2)<1?f/2*s*s+l:-f/2*(--s*(s-2)-1)+l},easeInCubic:function(s,l,d,u){return(d-l)*(s/=u)*s*s+l},easeOutCubic:function(s,l,d,u){return(d-l)*((s=s/u-1)*s*s+1)+l},easeInOutCubic:function(s,l,d,u){var f=d-l;return(s/=u/2)<1?f/2*s*s*s+l:f/2*((s-=2)*s*s+2)+l},easeInQuart:function(s,l,d,u){return(d-l)*(s/=u)*s*s*s+l},easeOutQuart:function(s,l,d,u){return-(d-l)*((s=s/u-1)*s*s*s-1)+l},easeInOutQuart:function(s,l,d,u){var f=d-l;return(s/=u/2)<1?f/2*s*s*s*s+l:-f/2*((s-=2)*s*s*s-2)+l},easeInQuint:function(s,l,d,u){return(d-l)*(s/=u)*s*s*s*s+l},easeOutQuint:function(s,l,d,u){return(d-l)*((s=s/u-1)*s*s*s*s+1)+l},easeInOutQuint:function(s,l,d,u){var f=d-l;return(s/=u/2)<1?f/2*s*s*s*s*s+l:f/2*((s-=2)*s*s*s*s+2)+l},easeInSine:function(s,l,d,u){var f=d-l;return-f*Math.cos(s/u*(Math.PI/2))+f+l},easeOutSine:function(s,l,d,u){return(d-l)*Math.sin(s/u*(Math.PI/2))+l},easeInOutSine:function(s,l,d,u){return-(d-l)/2*(Math.cos(Math.PI*s/u)-1)+l},easeInExpo:function(s,l,d,u){return s==0?l:(d-l)*Math.pow(2,10*(s/u-1))+l},easeOutExpo:function(s,l,d,u){var f=d-l;return s==u?l+f:f*(1-Math.pow(2,-10*s/u))+l},easeInOutExpo:function(s,l,d,u){var f=d-l;return s===0?l:s===u?l+f:(s/=u/2)<1?f/2*Math.pow(2,10*(s-1))+l:f/2*(2-Math.pow(2,-10*--s))+l},easeInCirc:function(s,l,d,u){return-(d-l)*(Math.sqrt(1-(s/=u)*s)-1)+l},easeOutCirc:function(s,l,d,u){return(d-l)*Math.sqrt(1-(s=s/u-1)*s)+l},easeInOutCirc:function(s,l,d,u){var f=d-l;return(s/=u/2)<1?-f/2*(Math.sqrt(1-s*s)-1)+l:f/2*(Math.sqrt(1-(s-=2)*s)+1)+l},easeInElastic:function(s,l,d,u){var f,p,g,x=d-l;return g=1.70158,s===0?l:(s/=u)==1?l+x:((p=0)||(p=.3*u),(f=x)<Math.abs(x)?(f=x,g=p/4):g=p/(2*Math.PI)*Math.asin(x/f),-f*Math.pow(2,10*(s-=1))*Math.sin((s*u-g)*(2*Math.PI)/p)+l)},easeOutElastic:function(s,l,d,u){var f,p,g,x=d-l;return g=1.70158,s===0?l:(s/=u)==1?l+x:((p=0)||(p=.3*u),(f=x)<Math.abs(x)?(f=x,g=p/4):g=p/(2*Math.PI)*Math.asin(x/f),f*Math.pow(2,-10*s)*Math.sin((s*u-g)*(2*Math.PI)/p)+x+l)},easeInOutElastic:function(s,l,d,u){var f,p,g,x=d-l;return g=1.70158,s===0?l:(s/=u/2)==2?l+x:((p=0)||(p=u*.44999999999999996),(f=x)<Math.abs(x)?(f=x,g=p/4):g=p/(2*Math.PI)*Math.asin(x/f),s<1?f*Math.pow(2,10*(s-=1))*Math.sin((s*u-g)*(2*Math.PI)/p)*-.5+l:f*Math.pow(2,-10*(s-=1))*Math.sin((s*u-g)*(2*Math.PI)/p)*.5+x+l)},easeInBack:function(s,l,d,u,f){return f===void 0&&(f=1.70158),(d-l)*(s/=u)*s*((f+1)*s-f)+l},easeOutBack:function(s,l,d,u,f){return f===void 0&&(f=1.70158),(d-l)*((s=s/u-1)*s*((f+1)*s+f)+1)+l},easeInOutBack:function(s,l,d,u,f){var p=d-l;return f===void 0&&(f=1.70158),(s/=u/2)<1?p/2*(s*s*((1+(f*=1.525))*s-f))+l:p/2*((s-=2)*s*((1+(f*=1.525))*s+f)+2)+l},easeInBounce:function(s,l,d,u){var f=d-l;return f-o.easeOutBounce(u-s,0,f,u)+l},easeOutBounce:function(s,l,d,u){var f=d-l;return(s/=u)<.36363636363636365?f*(7.5625*s*s)+l:s<.7272727272727273?f*(7.5625*(s-=.5454545454545454)*s+.75)+l:s<.9090909090909091?f*(7.5625*(s-=.8181818181818182)*s+.9375)+l:f*(7.5625*(s-=.9545454545454546)*s+.984375)+l},easeInOutBounce:function(s,l,d,u){var f=d-l;return s<u/2?.5*o.easeInBounce(2*s,0,f,u)+l:.5*o.easeOutBounce(2*s-u,0,f,u)+.5*f+l}};i.exports=o},function(i,r,a){i.exports=a(3)},function(i,r,a){a.r(r),a.d(r,"ReactConfetti",function(){return le});var o,s,l=a(0),d=a.n(l),u=a(1),f=a.n(u);function p(G,L){return G+Math.random()*(L-G)}function g(G,L){for(var D=0;D<L.length;D++){var O=L[D];O.enumerable=O.enumerable||!1,O.configurable=!0,"value"in O&&(O.writable=!0),Object.defineProperty(G,O.key,O)}}function x(G,L,D){return L in G?Object.defineProperty(G,L,{value:D,enumerable:!0,configurable:!0,writable:!0}):G[L]=D,G}(function(G){G[G.Circle=0]="Circle",G[G.Square=1]="Square",G[G.Strip=2]="Strip"})(o||(o={})),function(G){G[G.Positive=1]="Positive",G[G.Negative=-1]="Negative"}(s||(s={}));var y=function(){function G(O,q,F,B){(function(Hl,Ul){if(!(Hl instanceof Ul))throw new TypeError("Cannot call a class as a function")})(this,G),x(this,"context",void 0),x(this,"radius",void 0),x(this,"x",void 0),x(this,"y",void 0),x(this,"w",void 0),x(this,"h",void 0),x(this,"vx",void 0),x(this,"vy",void 0),x(this,"shape",void 0),x(this,"angle",void 0),x(this,"angularSpin",void 0),x(this,"color",void 0),x(this,"rotateY",void 0),x(this,"rotationDirection",void 0),x(this,"getOptions",void 0),this.getOptions=q;var te,se,fe=this.getOptions(),vn=fe.colors,Nt=fe.initialVelocityX,Ft=fe.initialVelocityY;this.context=O,this.x=F,this.y=B,this.w=p(5,20),this.h=p(5,20),this.radius=p(5,10),this.vx=typeof Nt=="number"?p(-Nt,Nt):p(Nt.min,Nt.max),this.vy=typeof Ft=="number"?p(-Ft,0):p(Ft.min,Ft.max),this.shape=(te=0,se=2,Math.floor(te+Math.random()*(se-te+1))),this.angle=p(0,360)*Math.PI/180,this.angularSpin=p(-.2,.2),this.color=vn[Math.floor(Math.random()*vn.length)],this.rotateY=p(0,1),this.rotationDirection=p(0,1)?s.Positive:s.Negative}var L,D;return L=G,(D=[{key:"update",value:function(){var O=this.getOptions(),q=O.gravity,F=O.wind,B=O.friction,te=O.opacity,se=O.drawShape;this.x+=this.vx,this.y+=this.vy,this.vy+=q,this.vx+=F,this.vx*=B,this.vy*=B,this.rotateY>=1&&this.rotationDirection===s.Positive?this.rotationDirection=s.Negative:this.rotateY<=-1&&this.rotationDirection===s.Negative&&(this.rotationDirection=s.Positive);var fe=.1*this.rotationDirection;if(this.rotateY+=fe,this.angle+=this.angularSpin,this.context.save(),this.context.translate(this.x,this.y),this.context.rotate(this.angle),this.context.scale(1,this.rotateY),this.context.rotate(this.angle),this.context.beginPath(),this.context.fillStyle=this.color,this.context.strokeStyle=this.color,this.context.globalAlpha=te,this.context.lineCap="round",this.context.lineWidth=2,se&&typeof se=="function")se.call(this,this.context);else switch(this.shape){case o.Circle:this.context.beginPath(),this.context.arc(0,0,this.radius,0,2*Math.PI),this.context.fill();break;case o.Square:this.context.fillRect(-this.w/2,-this.h/2,this.w,this.h);break;case o.Strip:this.context.fillRect(-this.w/6,-this.h/2,this.w/3,this.h)}this.context.closePath(),this.context.restore()}}])&&g(L.prototype,D),G}();function b(G,L,D){return L in G?Object.defineProperty(G,L,{value:D,enumerable:!0,configurable:!0,writable:!0}):G[L]=D,G}var v=function G(L,D){var O=this;(function(F,B){if(!(F instanceof B))throw new TypeError("Cannot call a class as a function")})(this,G),b(this,"canvas",void 0),b(this,"context",void 0),b(this,"getOptions",void 0),b(this,"x",0),b(this,"y",0),b(this,"w",0),b(this,"h",0),b(this,"lastNumberOfPieces",0),b(this,"tweenInitTime",Date.now()),b(this,"particles",[]),b(this,"particlesGenerated",0),b(this,"removeParticleAt",function(F){O.particles.splice(F,1)}),b(this,"getParticle",function(){var F=p(O.x,O.w+O.x),B=p(O.y,O.h+O.y);return new y(O.context,O.getOptions,F,B)}),b(this,"animate",function(){var F=O.canvas,B=O.context,te=O.particlesGenerated,se=O.lastNumberOfPieces,fe=O.getOptions(),vn=fe.run,Nt=fe.recycle,Ft=fe.numberOfPieces,Hl=fe.debug,Ul=fe.tweenFunction,Wl=fe.tweenDuration;if(!vn)return!1;var ql=O.particles.length,Xr=Nt?ql:te,Yl=Date.now();if(Xr<Ft){se!==Ft&&(O.tweenInitTime=Yl,O.lastNumberOfPieces=Ft);for(var yp=O.tweenInitTime,r2=Ul(Yl-yp>Wl?Wl:Math.max(0,Yl-yp),Xr,Ft,Wl),wp=Math.round(r2-Xr),bp=0;bp<wp;bp++)O.particles.push(O.getParticle());O.particlesGenerated+=wp}return Hl&&(B.font="12px sans-serif",B.fillStyle="#333",B.textAlign="right",B.fillText("Particles: ".concat(ql),F.width-10,F.height-20)),O.particles.forEach(function(Qr,Sp){Qr.update(),(Qr.y>F.height||Qr.y<-100||Qr.x>F.width+100||Qr.x<-100)&&(Nt&&Xr<=Ft?O.particles[Sp]=O.getParticle():O.removeParticleAt(Sp))}),ql>0||Xr<Ft}),this.canvas=L;var q=this.canvas.getContext("2d");if(!q)throw new Error("Could not get canvas context");this.context=q,this.getOptions=D};function h(G,L){var D=Object.keys(G);if(Object.getOwnPropertySymbols){var O=Object.getOwnPropertySymbols(G);L&&(O=O.filter(function(q){return Object.getOwnPropertyDescriptor(G,q).enumerable})),D.push.apply(D,O)}return D}function m(G){for(var L=1;L<arguments.length;L++){var D=arguments[L]!=null?arguments[L]:{};L%2?h(Object(D),!0).forEach(function(O){S(G,O,D[O])}):Object.getOwnPropertyDescriptors?Object.defineProperties(G,Object.getOwnPropertyDescriptors(D)):h(Object(D)).forEach(function(O){Object.defineProperty(G,O,Object.getOwnPropertyDescriptor(D,O))})}return G}function w(G,L){for(var D=0;D<L.length;D++){var O=L[D];O.enumerable=O.enumerable||!1,O.configurable=!0,"value"in O&&(O.writable=!0),Object.defineProperty(G,O.key,O)}}function S(G,L,D){return L in G?Object.defineProperty(G,L,{value:D,enumerable:!0,configurable:!0,writable:!0}):G[L]=D,G}var C={width:typeof window<"u"?window.innerWidth:300,height:typeof window<"u"?window.innerHeight:200,numberOfPieces:200,friction:.99,wind:0,gravity:.1,initialVelocityX:4,initialVelocityY:10,colors:["#f44336","#e91e63","#9c27b0","#673ab7","#3f51b5","#2196f3","#03a9f4","#00bcd4","#009688","#4CAF50","#8BC34A","#CDDC39","#FFEB3B","#FFC107","#FF9800","#FF5722","#795548"],opacity:1,debug:!1,tweenFunction:f.a.easeInOutQuad,tweenDuration:5e3,recycle:!0,run:!0},A=function(){function G(O,q){var F=this;(function(te,se){if(!(te instanceof se))throw new TypeError("Cannot call a class as a function")})(this,G),S(this,"canvas",void 0),S(this,"context",void 0),S(this,"_options",void 0),S(this,"generator",void 0),S(this,"rafId",void 0),S(this,"setOptionsWithDefaults",function(te){var se={confettiSource:{x:0,y:0,w:F.canvas.width,h:0}};F._options=m(m(m({},se),C),te),Object.assign(F,te.confettiSource)}),S(this,"update",function(){var te=F.options,se=te.run,fe=te.onConfettiComplete,vn=F.canvas,Nt=F.context;se&&(Nt.fillStyle="white",Nt.clearRect(0,0,vn.width,vn.height)),F.generator.animate()?F.rafId=requestAnimationFrame(F.update):(fe&&typeof fe=="function"&&F.generator.particlesGenerated>0&&fe.call(F,F),F._options.run=!1)}),S(this,"reset",function(){F.generator&&F.generator.particlesGenerated>0&&(F.generator.particlesGenerated=0,F.generator.particles=[],F.generator.lastNumberOfPieces=0)}),S(this,"stop",function(){F.options={run:!1},F.rafId&&(cancelAnimationFrame(F.rafId),F.rafId=void 0)}),this.canvas=O;var B=this.canvas.getContext("2d");if(!B)throw new Error("Could not get canvas context");this.context=B,this.generator=new v(this.canvas,function(){return F.options}),this.options=q,this.update()}var L,D;return L=G,(D=[{key:"options",get:function(){return this._options},set:function(O){var q=this._options&&this._options.run,F=this._options&&this._options.recycle;this.setOptionsWithDefaults(O),this.generator&&(Object.assign(this.generator,this.options.confettiSource),typeof O.recycle=="boolean"&&O.recycle&&F===!1&&(this.generator.lastNumberOfPieces=this.generator.particles.length)),typeof O.run=="boolean"&&O.run&&q===!1&&this.update()}}])&&w(L.prototype,D),G}();function T(G){return function(L){if(Array.isArray(L))return U(L)}(G)||function(L){if(typeof Symbol<"u"&&Symbol.iterator in Object(L))return Array.from(L)}(G)||R(G)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function z(G){return(z=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(L){return typeof L}:function(L){return L&&typeof Symbol=="function"&&L.constructor===Symbol&&L!==Symbol.prototype?"symbol":typeof L})(G)}function E(){return(E=Object.assign||function(G){for(var L=1;L<arguments.length;L++){var D=arguments[L];for(var O in D)Object.prototype.hasOwnProperty.call(D,O)&&(G[O]=D[O])}return G}).apply(this,arguments)}function P(G,L){var D=Object.keys(G);if(Object.getOwnPropertySymbols){var O=Object.getOwnPropertySymbols(G);L&&(O=O.filter(function(q){return Object.getOwnPropertyDescriptor(G,q).enumerable})),D.push.apply(D,O)}return D}function _(G){for(var L=1;L<arguments.length;L++){var D=arguments[L]!=null?arguments[L]:{};L%2?P(Object(D),!0).forEach(function(O){ye(G,O,D[O])}):Object.getOwnPropertyDescriptors?Object.defineProperties(G,Object.getOwnPropertyDescriptors(D)):P(Object(D)).forEach(function(O){Object.defineProperty(G,O,Object.getOwnPropertyDescriptor(D,O))})}return G}function I(G,L){return function(D){if(Array.isArray(D))return D}(G)||function(D,O){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(D)))){var q=[],F=!0,B=!1,te=void 0;try{for(var se,fe=D[Symbol.iterator]();!(F=(se=fe.next()).done)&&(q.push(se.value),!O||q.length!==O);F=!0);}catch(vn){B=!0,te=vn}finally{try{F||fe.return==null||fe.return()}finally{if(B)throw te}}return q}}(G,L)||R(G,L)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function R(G,L){if(G){if(typeof G=="string")return U(G,L);var D=Object.prototype.toString.call(G).slice(8,-1);return D==="Object"&&G.constructor&&(D=G.constructor.name),D==="Map"||D==="Set"?Array.from(G):D==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(D)?U(G,L):void 0}}function U(G,L){(L==null||L>G.length)&&(L=G.length);for(var D=0,O=new Array(L);D<L;D++)O[D]=G[D];return O}function Z(G,L){if(!(G instanceof L))throw new TypeError("Cannot call a class as a function")}function Y(G,L){for(var D=0;D<L.length;D++){var O=L[D];O.enumerable=O.enumerable||!1,O.configurable=!0,"value"in O&&(O.writable=!0),Object.defineProperty(G,O.key,O)}}function M(G,L){return(M=Object.setPrototypeOf||function(D,O){return D.__proto__=O,D})(G,L)}function V(G){var L=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}();return function(){var D,O=J(G);if(L){var q=J(this).constructor;D=Reflect.construct(O,arguments,q)}else D=O.apply(this,arguments);return $(this,D)}}function $(G,L){return!L||z(L)!=="object"&&typeof L!="function"?K(G):L}function K(G){if(G===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return G}function J(G){return(J=Object.setPrototypeOf?Object.getPrototypeOf:function(L){return L.__proto__||Object.getPrototypeOf(L)})(G)}function ye(G,L,D){return L in G?Object.defineProperty(G,L,{value:D,enumerable:!0,configurable:!0,writable:!0}):G[L]=D,G}var pe=d.a.createRef(),Ce=function(G){(function(F,B){if(typeof B!="function"&&B!==null)throw new TypeError("Super expression must either be null or a function");F.prototype=Object.create(B&&B.prototype,{constructor:{value:F,writable:!0,configurable:!0}}),B&&M(F,B)})(q,G);var L,D,O=V(q);function q(F){var B;Z(this,q);for(var te=arguments.length,se=new Array(te>1?te-1:0),fe=1;fe<te;fe++)se[fe-1]=arguments[fe];return ye(K(B=O.call.apply(O,[this,F].concat(se))),"canvas",d.a.createRef()),ye(K(B),"confetti",void 0),B.canvas=F.canvasRef||pe,B}return L=q,(D=[{key:"componentDidMount",value:function(){if(this.canvas.current){var F=ue(this.props)[0];this.confetti=new A(this.canvas.current,F)}}},{key:"componentDidUpdate",value:function(){var F=ue(this.props)[0];this.confetti&&(this.confetti.options=F)}},{key:"componentWillUnmount",value:function(){this.confetti&&this.confetti.stop(),this.confetti=void 0}},{key:"render",value:function(){var F=I(ue(this.props),2),B=F[0],te=F[1],se=_({zIndex:2,position:"absolute",pointerEvents:"none",top:0,left:0,bottom:0,right:0},te.style);return d.a.createElement("canvas",E({width:B.width,height:B.height,ref:this.canvas},te,{style:se}))}}])&&Y(L.prototype,D),q}(l.Component);function ue(G){var L={},D={},O=[].concat(T(Object.keys(C)),["confettiSource","drawShape","onConfettiComplete"]),q=["canvasRef"];for(var F in G){var B=G[F];O.includes(F)?L[F]=B:q.includes(F)?q[F]=B:D[F]=B}return[L,D,{}]}ye(Ce,"defaultProps",_({},C)),ye(Ce,"displayName","ReactConfetti");var le=d.a.forwardRef(function(G,L){return d.a.createElement(Ce,E({canvasRef:L},G))});r.default=le}]).default})})(i2);var KA=i2.exports;const XA=Bi(KA);mn`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;const Xm=k.select`
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
`,QA=k.div`
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
`,ZA=k.div`
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
`,JA=k.header`
    display: flex;
    gap: 5px;
`,wn=k(({isActive:e,...t})=>c.jsx(Sv,{...t}))`
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
`,eE=k.div`
    opacity: ${({isVisible:e})=>e?1:0};
    transition: opacity 1s ease-out;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
`,Qm=k(wn)`
    background: ${({isActive:e})=>e?"linear-gradient(45deg, #ff6b6b, #f06595, #eeafaf)":"transparent"};
    color: ${({isActive:e})=>e?"white":"var(--color--black)"};

    &:hover {
        background: linear-gradient(45deg, #f06595, #ff6b6b, #eeafaf);
        color: white;
    }
`,tE=k.div`
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
`,nE=k.div`
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
`,iE=()=>{const e=hn(),[t,n]=j.useState(!1),[i,r]=j.useState(!1),[a,o]=j.useState(!1),[s,l]=j.useState(!1),[d,u]=j.useState(!1),[f,p]=j.useState(!1),g=["/","/sobre","/mar","/serra","/event","/acomodaSerra","/acomodaMar","/lpMar","lpSerra"];let x;const y=()=>{l(C=>!C),u(C=>!C)},b=()=>{l(!1),u(!1)},v=()=>{o(!0),clearTimeout(x),x=setTimeout(()=>{o(!1)},3e3)},h=Cl(),[m,w]=j.useState(""),S=C=>{const A=C.target.value;A&&(w(A),h(A))};return j.useEffect(()=>{g.includes(e.pathname)||h("/",{replace:!1})},[e.pathname,h]),j.useEffect(()=>(window.addEventListener("scroll",v),()=>{window.removeEventListener("scroll",v),clearTimeout(x)}),[]),j.useEffect(()=>{if(e.pathname!=="/"){p(!0);const C=setTimeout(()=>{p(!1)},1e3);return()=>clearTimeout(C)}else p(!1)},[e.pathname]),j.useEffect(()=>{if(e.pathname==="/event"){n(!0),r(!0);const C=setTimeout(()=>{r(!1),setTimeout(()=>n(!1),1e3)},8e3);return()=>clearTimeout(C)}else r(!1),setTimeout(()=>n(!1),1e3)},[e.pathname]),j.useEffect(()=>{s&&b()},[e.pathname]),c.jsxs(c.Fragment,{children:[c.jsx(QA,{isLoading:f,children:c.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/59746ba9-5d6e-4873-dad6-26930b03a900/public",alt:"Loading..."})}),c.jsxs(ZA,{isScrolled:a,children:[t&&c.jsx(eE,{isVisible:i,children:c.jsx(XA,{})}),c.jsx(Sv,{to:"/","aria-label":"Home",children:c.jsxs("picture",{children:[c.jsx("source",{media:"(max-width: 480px)",srcSet:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/d3fbafba-3dfe-4924-e857-b45059def500/public"}),c.jsx("source",{media:"(max-width: 768px)",srcSet:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/d3fbafba-3dfe-4924-e857-b45059def500/public"}),c.jsx("source",{media:"(min-width: 769px)",srcSet:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/d3fbafba-3dfe-4924-e857-b45059def500/public"}),c.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/d3fbafba-3dfe-4924-e857-b45059def500/public",alt:"Logo da Empresa",style:{maxHeight:"40px"}})]})}),c.jsxs(JA,{children:[c.jsxs(wn,{to:"/",isActive:e.pathname==="/",children:[c.jsx(nn,{isVisible:e.pathname==="/",children:c.jsx(fm,{})}),"Início"]}),c.jsxs(wn,{to:"/sobre",isActive:e.pathname==="/sobre",children:[c.jsx(nn,{isVisible:e.pathname==="/sobre",children:c.jsx(pm,{})}),"Sobre nós"]}),c.jsxs(wn,{to:"/mar",variant:"mar",isActive:e.pathname==="/mar",children:[c.jsx(nn,{isVisible:e.pathname==="/mar",children:c.jsx(cm,{})}),"Le Ange Mar"]}),c.jsxs(wn,{to:"/serra",variant:"serra",isActive:e.pathname==="/serra",children:[c.jsx(nn,{isVisible:e.pathname==="/serra",children:c.jsx(mk,{})}),"Le Ange Serra"]}),c.jsxs(Qm,{to:"/event",isActive:e.pathname==="/event",children:[c.jsx(nn,{isVisible:e.pathname==="/event",children:c.jsx(dm,{})}),"Eventos"]}),c.jsxs(Xm,{onChange:S,value:m,children:[c.jsx("option",{disabled:!0,value:"",children:"Acomodações"}),c.jsx("option",{value:"/acomodaSerra",children:"Suítes Serra"}),c.jsx("option",{value:"/acomodaMar",children:"Suítes Mar"})]})]}),c.jsx(Fe,{onClick:()=>window.open("https://wa.link/dojlwi","_blank"),text:"Fazer minha reserva"})]}),c.jsxs(tE,{isScrolled:a,children:[c.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/d3fbafba-3dfe-4924-e857-b45059def500/public",alt:"logo da le ange"}),c.jsxs("button",{onClick:y,isClicked:d,children:["Menu",c.jsx(YA,{})]})]}),c.jsxs(nE,{isOpen:s,children:[c.jsx("button",{onClick:b,children:"X"}),c.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/d3fbafba-3dfe-4924-e857-b45059def500/public",alt:"logo da le ange"}),c.jsxs("div",{children:[c.jsxs(wn,{to:"/",isActive:e.pathname==="/",onClick:b,children:[c.jsx(nn,{isVisible:e.pathname==="/",children:c.jsx(fm,{})}),"Início"]}),c.jsxs(wn,{to:"/sobre",isActive:e.pathname==="/sobre",onClick:b,children:[c.jsx(nn,{isVisible:e.pathname==="/sobre",children:c.jsx(pm,{})}),"Sobre nós"]}),c.jsxs(wn,{to:"/mar",variant:"mar",isActive:e.pathname==="/mar",onClick:b,children:[c.jsx(nn,{isVisible:e.pathname==="/mar",children:c.jsx(cm,{})}),"Le Ange Mar"]}),c.jsxs(wn,{to:"/serra",variant:"serra",isActive:e.pathname==="/serra",onClick:b,children:[c.jsx(nn,{isVisible:e.pathname==="/serra",children:c.jsx(W6,{})}),"Le Ange Serra"]}),c.jsxs(Qm,{to:"/event",isActive:e.pathname==="/event",onClick:b,children:[c.jsx(nn,{isVisible:e.pathname==="/event",children:c.jsx(dm,{})}),"Eventos"]}),c.jsxs(Xm,{onChange:S,value:m,children:[c.jsx("option",{disabled:!0,value:"",children:"Acomodações"}),c.jsx("option",{value:"/acomodaSerra",children:"Suítes Serra"}),c.jsx("option",{value:"/acomodaMar",children:"Suítes Mar"})]})]}),c.jsx(Fe,{text:"Fazer minha reserva",onClick:()=>window.open("https://wa.link/dojlwi","_blank")})]})]})},rE=Yr`
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
`,aE=k.section`
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
`,oE=k.div`
    width: 50%;
    height: 95%;
    border-radius: 15px 10px 25px 5px;

    @media (max-width: 768px){
        width: 100%;
        height: 50vh;
    }
`,sE=k.div`
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
`,lE=k.h2`
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
`,cE=k.p`
    font-size: .9rem;
    line-height: 120%;
    color: var(--color--black); 
    font-family: var(--font--comfortaa)!important;
    
    @media (max-width: 768px){
        font-size: 0.75rem;
    }
`,dE=k.div`
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
`,uE=k.img`
    width: 100%;
    height: 75.8vh;
    object-fit: cover;
    border-radius: 15px 10px 25px 5px;

    @media (max-width: 768px){
        height: 50vh;
    }
`,He=ee.forwardRef(({images:e=[],suites:t=[],reverse:n=!1,background:i="rgba(0, 0, 0, 0.1)"},r)=>(j.useEffect(()=>{Oe.init({duration:1e3,once:!1}),Oe.refresh()},[]),c.jsxs(aE,{reverse:n,ref:r,children:[c.jsxs(oE,{"data-aos":"zoom-in","data-aos-delay":"50",children:[c.jsx(rE,{}),c.jsx(Jt,{modules:[Vn,vi,gi],autoplay:{delay:2e5,disableOnInteraction:!1,pauseOnMouseEnter:!0},navigation:!0,pagination:!0,loop:!0,spaceBetween:10,slidesPerView:1,children:e.map((a,o)=>c.jsx(en,{children:c.jsx(uE,{src:a,alt:`Slide ${o+1}`})},o))})]}),c.jsx(sE,{background:i,"data-aos":"fade-up","data-aos-delay":"100",children:t.map((a,o)=>{var s;return c.jsxs("div",{children:[c.jsx("section",{children:c.jsxs("div",{children:[c.jsx("p",{"data-aos":"fade-up","data-aos-delay":"150",children:a.NomedaSuite}),c.jsx(lE,{"data-aos":"fade-up","data-aos-delay":"200",children:a.NomedaPousada})]})}),c.jsx(dE,{"data-aos":"fade-up","data-aos-delay":"250",children:(s=a.features)==null?void 0:s.map((l,d)=>c.jsxs("span",{children:[l.icon," ",l.text]},d))}),c.jsx(cE,{"data-aos":"fade-in","data-aos-delay":"400",children:a.Description}),c.jsx(Fe,{onClick:()=>window.open("https://wa.link/dojlwi","_blank"),text:"Fazer reserva agora!"})]},o)})})]}))),fE=k.div`
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

`,pE=["https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/7d1df8a5-0905-4ac0-5a2d-621e8a48dd00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/27861ce8-6beb-438a-6ff4-3cee719fe500/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/c22957a6-e82d-46ab-01f2-336a3d84ec00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/26d9fcee-7e13-4b45-4d95-6248723ddc00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/7336810d-d00e-4445-529b-f16b72cc7700/public"],hE=[{NomedaSuite:"Suíte Superior 1",NomedaPousada:"Le Ange Serra",features:[{icon:c.jsx(je,{}),text:"52m²"},{icon:c.jsx(re,{}),text:"Ar-condicionado"},{icon:c.jsx(Xe,{}),text:"Frigobar"},{icon:c.jsx(ct,{}),text:"Lareira"},{icon:c.jsx(ze,{}),text:"Smart TV"},{icon:c.jsx(Ie,{}),text:"Cama king-size"},{icon:c.jsx(Ae,{}),text:"Banheira relaxante"},{icon:c.jsx(re,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(Ke,{}),text:"Varanda privativa"}],Description:"Uma suíte de 52m² que une conforto e sofisticação. Equipada com cama king-size, ar-condicionado e lareira, também dispõe de uma varanda privativa com vista para a natureza, banheira relaxante e aquecedor de toalhas."}],mE=["https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/fab53301-9865-467b-5746-7d359f21fe00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a27173c0-d56c-4c22-ea55-7f23cba7a800/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/beb843cb-3ae0-4ea0-348c-5af6f79b9600/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/c22c1ab9-1c7a-47e4-3642-0024f2b24700/public"],gE=[{NomedaSuite:"Suíte Superior 2",NomedaPousada:"Le Ange Serra",features:[{icon:c.jsx(je,{}),text:"52m²"},{icon:c.jsx(Ie,{}),text:"Cama king-size"},{icon:c.jsx(re,{}),text:"Ar-condicionado"},{icon:c.jsx(ct,{}),text:"Lareira"},{icon:c.jsx(Xe,{}),text:"Frigobar"},{icon:c.jsx(ze,{}),text:"Smart TV"},{icon:c.jsx(Ae,{}),text:"Banheira relaxante"},{icon:c.jsx(re,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(Ke,{}),text:"Varanda privativa"}],Description:"Com 52m², esta suíte oferece uma experiência completa: cama king-size, ar-condicionado, lareira, e uma varanda privativa com vista para a natureza. Para relaxar ainda mais, desfrute de uma banheira e do aquecedor de toalhas, garantindo máximo conforto."}],vE=["https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/eaddb3bf-35e7-4bff-09ff-0c5a80525800/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/711abf2e-87c0-4568-ffa3-71f98954af00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/58b29f7d-d13e-4c97-06d7-c23613222d00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/e01a043d-e7ca-4edc-d4ad-103e63e79600/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a297c1da-191f-4479-7de3-3403c90a8400/public"],xE=[{NomedaSuite:"Suíte Superior 3",NomedaPousada:"Le Ange Serra",features:[{icon:c.jsx(je,{}),text:"52m²"},{icon:c.jsx(re,{}),text:"Ar-condicionado"},{icon:c.jsx(ct,{}),text:"Lareira"},{icon:c.jsx(Xe,{}),text:"Frigobar"},{icon:c.jsx(ze,{}),text:"Smart TV"},{icon:c.jsx(Ae,{}),text:"Banheira relaxante"},{icon:c.jsx(re,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(Ke,{}),text:"Varanda privativa"}],Description:"Esta suíte de 52m² é perfeita para momentos inesquecíveis, com cama king-size, ar-condicionado e lareira. A varanda privativa proporciona uma vista espetacular da natureza, enquanto a banheira relaxante e o aquecedor de toalhas completam o ambiente para maior comodidade."}],yE=["https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a0c090c6-7dcb-4886-8dae-e439370b2a00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/932de633-2aa1-41b9-a3ff-3a99f4cb5e00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/e5f64afd-bc17-4cf3-b790-453e90545200/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/18dc1fbd-cbbe-4ccf-d204-c47841cdc900/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/1ceb5e56-07d1-44cf-b194-9a5ed2265b00/public"],wE=[{NomedaSuite:"Suíte Standard 4",NomedaPousada:"Le Ange Serra",features:[{icon:c.jsx(je,{}),text:"52m²"},{icon:c.jsx(re,{}),text:"Ar-condicionado"},{icon:c.jsx(ct,{}),text:"Lareira"},{icon:c.jsx(Xe,{}),text:"Frigobar"},{icon:c.jsx(ze,{}),text:"Smart TV"},{icon:c.jsx(Ae,{}),text:"Banheira relaxante"},{icon:c.jsx(re,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(Ke,{}),text:"Varanda privativa"}],Description:"Uma suíte de 52m², equipada com cama king-size, ar-condicionado e lareira. A varanda privativa oferece uma vista deslumbrante da natureza, enquanto a banheira relaxante e o aquecedor de toalhas adicionam um toque a mais de conforto e elegância para a sua estadia."}],bE=["https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/9cb4ce2c-7d70-4a5d-fa18-7615aa389d00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/ae1efc69-3fed-4143-0162-fa6659f85000/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/e3c9ebb8-4dc0-42f0-7c77-efb7b307ef00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/c2a76285-c7ca-4cfc-3194-567e7e193000/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/3e9c2e45-b349-403a-3d09-93b6a0661c00/public"],SE=[{NomedaSuite:"Suíte Standard 5",NomedaPousada:"Le Ange Serra",features:[{icon:c.jsx(je,{}),text:"52m²"},{icon:c.jsx(re,{}),text:"Ar-condicionado"},{icon:c.jsx(ct,{}),text:"Lareira"},{icon:c.jsx(Xe,{}),text:"Frigobar"},{icon:c.jsx(ze,{}),text:"Smart TV"},{icon:c.jsx(Ae,{}),text:"Banheira relaxante"},{icon:c.jsx(re,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(Ke,{}),text:"Varanda privativa"}],Description:"Com 52m², esta suíte oferece cama king-size, ar-condicionado e lareira para momentos acolhedores. A varanda privativa revela uma vista incrível da natureza e, para o máximo de conforto, a suíte ainda conta com uma banheira relaxante e aquecer de toalhas."}],jE=["https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/d24e6cd4-c8e9-437d-afdb-dadebbcb4000/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/ef9ef222-11b1-4689-435b-290edb163900/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/178e93c6-234b-45a2-7fa1-167362cae400/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/5e9145f7-431e-49be-10c3-861a9289cc00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/fcae768c-1514-4874-e9eb-1dde99a62b00/public"],CE=[{NomedaSuite:"Suíte Master 6",NomedaPousada:"Le Ange Serra",features:[{icon:c.jsx(je,{}),text:"93m²"},{icon:c.jsx(re,{}),text:"Ar-condicionado"},{icon:c.jsx(ct,{}),text:"Lareira"},{icon:c.jsx(vp,{}),text:"Chaise lounge"},{icon:c.jsx(Zy,{}),text:"Bay window"},{icon:c.jsx(Xe,{}),text:"Frigobar"},{icon:c.jsx(ze,{}),text:"Smart TV"},{icon:c.jsx(Ae,{}),text:"Banheira relaxante"},{icon:c.jsx(re,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(Ke,{}),text:"Ampla varanda privativa"}],Description:"Desfrute de 93m² de luxo com cama king-size, ar-condicionado e lareira. A suíte conta com uma chaise lounge ao lado da bay window, banheira relaxante com vista para a natureza, aquecedor de toalhas e, ainda, uma varanda privativa, perfeita para aqueles momentos de tranquilidade."}],kE=["https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/f3d777cf-17c2-4055-75a9-4be9fcc33800/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/0860b499-9c8c-4e99-192a-3ebe36229d00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/9dd5297d-5fba-438f-555c-8cb19bb82a00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/e8184c4c-b550-4166-7448-7492a7477f00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/421cea52-70a2-477b-0331-b21666a29c00/public"],TE=[{NomedaSuite:"Suíte Standard 7",NomedaPousada:"Le Ange Serra",features:[{icon:c.jsx(je,{}),text:"52m²"},{icon:c.jsx(re,{}),text:"Ar-condicionado"},{icon:c.jsx(Ie,{}),text:"Cama king-size"},{icon:c.jsx(ct,{}),text:"Lareira"},{icon:c.jsx(Xe,{}),text:"Frigobar"},{icon:c.jsx(ze,{}),text:"Smart TV"},{icon:c.jsx(Ae,{}),text:"Banheira relaxante"},{icon:c.jsx(re,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(Ke,{}),text:"Varanda NÃO privativa"}],Description:"Uma suíte confortável de 52m², equipada com cama king-size, ar-condicionado e lareira. A varanda oferece uma vista encantadora da natureza, e o espaço é complementado por uma banheira relaxante e aquecedor de toalhas, garantindo uma estadia única."}],AE=["https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/7fd53b58-4a7e-428b-ff6f-73a485a99f00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/46aeb5ba-8400-4a23-f4e4-df0d97083b00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/b151e809-9f33-4e2c-6f87-0903cb86db00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/5651b927-c41d-4f77-f187-3796426ae300/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/af920b8e-ebfe-482c-c876-683601310500/public"],EE=[{NomedaSuite:"Suíte Standard 8",NomedaPousada:"Le Ange Serra",features:[{icon:c.jsx(je,{}),text:"52m²"},{icon:c.jsx(re,{}),text:"Ar-condicionado"},{icon:c.jsx(Ie,{}),text:"Cama king-size"},{icon:c.jsx(ct,{}),text:"Lareira"},{icon:c.jsx(Xe,{}),text:"Frigobar"},{icon:c.jsx(ze,{}),text:"Smart TV"},{icon:c.jsx(Ae,{}),text:"Banheira relaxante"},{icon:c.jsx(re,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(Ke,{}),text:"Varanda NÃO privativa"}],Description:"Uma suíte de 52m² que conta com cama king-size, ar-condicionado e lareira para momentos relaxantes. A varanda, ainda, exibe uma vista de tirar o fôlego da natureza, e a banheira relaxante com aquecedor de toalhas traz um toque de luxo e conforto."}],PE=["https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/40cb4a09-1c14-43cb-e17a-bf61a96c6300/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/cd1824ad-8a82-49bf-ecdb-292e6a0e3500/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/05d8b494-9ae3-429f-ed5c-8b192bf3e500/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/b70f4c55-c0c6-4356-0098-f6318c8ce600/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/c51dc547-138b-434c-dd48-60ae2ae95900/public"],GE=[{NomedaSuite:"Suíte Superior 9",NomedaPousada:"Le Ange Serra",features:[{icon:c.jsx(je,{}),text:"52m²"},{icon:c.jsx(re,{}),text:"Ar-condicionado"},{icon:c.jsx(Ie,{}),text:"Cama king-size"},{icon:c.jsx(ct,{}),text:"Lareira"},{icon:c.jsx(Xe,{}),text:"Frigobar"},{icon:c.jsx(ze,{}),text:"Smart TV"},{icon:c.jsx(Ae,{}),text:"Banheira relaxante"},{icon:c.jsx(re,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(Ke,{}),text:"Varanda privativa"}],Description:"Esta suíte ampla, com 52m², dispõe de cama king-size, ar-condicionado e lareira, perfeita para aqueles momentos de aconchego. Enquanto a banheira relaxante e o aquecedor de toalhas garantem maior comodidade, a varanda privativa promove uma vista única da natureza."}],zE=["https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/b04be4b1-aa90-4228-6dad-507f08379500/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/8caf9f13-0f6c-48cf-5606-6b2b0ce5d000/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/85e23a34-3058-43dc-a035-61fd0e65c700/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/79feb4e3-78e2-4c90-92e3-b0acbe649300/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/63467d9f-7285-43e0-ce5e-e5a83e158300/public"],_E=[{NomedaSuite:"Suíte Master 10",NomedaPousada:"Le Ange Serra",features:[{icon:c.jsx(je,{}),text:"80m²"},{icon:c.jsx(re,{}),text:"Ar-condicionado"},{icon:c.jsx(Ie,{}),text:"Cama king-size"},{icon:c.jsx(ku,{}),text:"Recamier e poltrona de leitura"},{icon:c.jsx(ct,{}),text:"Lareira"},{icon:c.jsx(vp,{}),text:"Couch lounge"},{icon:c.jsx(Xe,{}),text:"Frigobar"},{icon:c.jsx(ze,{}),text:"Smart TV"},{icon:c.jsx(Ae,{}),text:"Banheira relaxante"},{icon:c.jsx(re,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(Ke,{}),text:"Ampla varanda privativa"}],Description:"Experimente o máximo de conforto em 80m², com cama king-size, ar-condicionado e lareira. Aproveite a chaise lounge ao lado da bay window, a banheira com vista para a natureza, aquecedor de toalhas e, ainda, a varanda privativa, onde você pode relaxar ao som da mata."}],ME=()=>{const e=hn(),t={suite1:j.useRef(null),suite2:j.useRef(null),suite3:j.useRef(null),suite4:j.useRef(null),suite5:j.useRef(null),suite6:j.useRef(null),suite7:j.useRef(null),suite8:j.useRef(null),suite9:j.useRef(null),suite10:j.useRef(null)};return j.useEffect(()=>{Oe.init({duration:1e3,once:!1}),Oe.refresh()},[]),j.useEffect(()=>{const n=()=>{var a;const r=e.hash.replace("#","");if(console.log("Hash atual:",r),r&&((a=t[r])!=null&&a.current)){const o=t[r].current;if(o){const s=o.offsetTop-100;console.log(`Elemento encontrado: ${r}, rolando para: ${s}px`),window.scrollTo({top:s,behavior:"smooth"})}else console.log(`Elemento com ID ${r} não encontrado no DOM.`)}else console.log(`Hash ${r} não está associado a um ref válido.`)},i=()=>{console.log("Página carregada, verificando hash..."),n()};return window.addEventListener("load",i),window.addEventListener("hashchange",n),n(),()=>{window.removeEventListener("load",i),window.removeEventListener("hashchange",n)}},[e,t]),c.jsxs(c.Fragment,{children:[c.jsx(gn,{}),c.jsxs(fE,{children:["Acomodações da",c.jsx("b",{children:"Pousada Le Ange Serra"})]}),c.jsx(He,{id:"suite1",ref:t.suite1,images:pE,suites:hE,reverse:!0,background:"#CAD76680"}),c.jsx(He,{id:"suite2",ref:t.suite2,images:mE,suites:gE,reverse:!1,background:"#CAD76680"}),c.jsx(He,{id:"suite3",ref:t.suite3,images:vE,suites:xE,reverse:!0,background:"#CAD76680"}),c.jsx(He,{id:"suite4",ref:t.suite4,images:yE,suites:wE,reverse:!1,background:"#CAD76680"}),c.jsx(He,{id:"suite5",ref:t.suite5,images:bE,suites:SE,reverse:!0,background:"#CAD76680"}),c.jsx(He,{id:"suite6",ref:t.suite6,images:jE,suites:CE,reverse:!1,background:"#CAD76680"}),c.jsx(He,{id:"suite7",ref:t.suite7,images:kE,suites:TE,reverse:!0,background:"#CAD76680"}),c.jsx(He,{id:"suite8",ref:t.suite8,images:AE,suites:EE,reverse:!1,background:"#CAD76680"}),c.jsx(He,{id:"suite9",ref:t.suite9,images:PE,suites:GE,reverse:!0,background:"#CAD76680"}),c.jsx(He,{id:"suite10",ref:t.suite10,images:zE,suites:_E,reverse:!1,background:"#CAD76680"}),c.jsx(xi,{})]})};function wi(e){return Q({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M.5 6a.5.5 0 0 0-.488.608l1.652 7.434A2.5 2.5 0 0 0 4.104 16h5.792a2.5 2.5 0 0 0 2.44-1.958l.131-.59a3 3 0 0 0 1.3-5.854l.221-.99A.5.5 0 0 0 13.5 6zM13 12.5a2 2 0 0 1-.316-.025l.867-3.898A2.001 2.001 0 0 1 13 12.5"},child:[]},{tag:"path",attr:{d:"m4.4.8-.003.004-.014.019a4 4 0 0 0-.204.31 2 2 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.6.6 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3 3 0 0 1-.202.388 5 5 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 3.6 4.2l.003-.004.014-.019a4 4 0 0 0 .204-.31 2 2 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.6.6 0 0 0-.09-.252A4 4 0 0 0 3.6 2.8l-.01-.012a5 5 0 0 1-.37-.543A1.53 1.53 0 0 1 3 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a6 6 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 4.4.8m3 0-.003.004-.014.019a4 4 0 0 0-.204.31 2 2 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.6.6 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3 3 0 0 1-.202.388 5 5 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 6.6 4.2l.003-.004.014-.019a4 4 0 0 0 .204-.31 2 2 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.6.6 0 0 0-.09-.252A4 4 0 0 0 6.6 2.8l-.01-.012a5 5 0 0 1-.37-.543A1.53 1.53 0 0 1 6 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a6 6 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 7.4.8m3 0-.003.004-.014.019a4 4 0 0 0-.204.31 2 2 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.6.6 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3 3 0 0 1-.202.388 5 5 0 0 1-.252.382l-.019.025-.005.008-.002.002A.5.5 0 0 1 9.6 4.2l.003-.004.014-.019a4 4 0 0 0 .204-.31 2 2 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.6.6 0 0 0-.09-.252A4 4 0 0 0 9.6 2.8l-.01-.012a5 5 0 0 1-.37-.543A1.53 1.53 0 0 1 9 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a6 6 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 10.4.8"},child:[]}]})(e)}const LE=k.div`
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

`,OE=["https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/224faac1-7f2b-4e14-8d75-e9190e813b00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/353c8221-e9bf-49c5-6c43-103a69ae6800/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/7dd92106-fe04-4e01-01f5-f174bef81a00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/84dce2f1-97a8-466a-8d53-d20540b75a00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/f0200d43-3f83-438c-49ab-338849f8c100/public"],IE=[{NomedaSuite:"Suíte Superior 1",NomedaPousada:"Le Ange Mar",features:[{icon:c.jsx(je,{}),text:"50m²"},{icon:c.jsx(re,{}),text:"Ar-condicionado"},{icon:c.jsx(Xe,{}),text:"Frigobar"},{icon:c.jsx(wi,{}),text:"Cafeteira 3 corações"},{icon:c.jsx(ze,{}),text:"Smart TV"},{icon:c.jsx(Ie,{}),text:"Cama king-size"},{icon:c.jsx(Ae,{}),text:"Banheira relaxante"},{icon:c.jsx(re,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(Ke,{}),text:"Varanda privativa"}],Description:"A suíte oferece 50m² de conforto e sofisticação. Com cama king-size, a suíte garante uma estadia relaxante com ar-condicionado, lareira e frigobar. Desfrute de momentos de bem-estar na banheira relaxante ou no chuveiro."}],RE=["https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/11429c23-8024-4e73-d834-7af88bede500/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/719761c8-54d7-4dba-e631-6557a1464600/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/1254a3f5-bae5-4110-5100-d17bf5602600/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/541ebf7c-5343-4545-3d62-7862ea0c5b00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/60c29539-7e27-476a-cec5-aa929f036100/public"],DE=[{NomedaSuite:"Suíte Standard 2",NomedaPousada:"Le Ange Mar",features:[{icon:c.jsx(je,{}),text:"45m²"},{icon:c.jsx(re,{}),text:"Ar-condicionado"},{icon:c.jsx(Xe,{}),text:"Frigobar"},{icon:c.jsx(wi,{}),text:"Cafeteira 3 corações"},{icon:c.jsx(ze,{}),text:"Smart TV"},{icon:c.jsx(Ie,{}),text:"Cama king-size"},{icon:c.jsx(Ae,{}),text:"Banheira relaxante"},{icon:c.jsx(re,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(Ke,{}),text:"Varanda privativa"}],Description:"Esta suíte de 45m² é ideal para quem busca conforto e tranquilidade. Com cama king-size, ar-condicionado, cafeteira 3 Corações e frigobar, você desfrutará de cada momento ao lado do seu pet. Recarregue as energias na banheira relaxante, aproveite a vista deslumbrante para o mar e sinta a brisa suave da maresia, tornando sua estadia ainda mais especial."}],VE=["https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/89368e85-889e-41fc-eafe-e6a23b278600/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/fca9fbcb-04a7-48b0-af5d-125a7da7a500/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/01b5c7ac-d7a0-4647-a472-af2755980d00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/c11df969-92ac-4b82-5923-72add6d2a400/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/ab284cc9-797e-4de3-706f-a8e3c9958300/public"],NE=[{NomedaSuite:"Suíte Superior 3",NomedaPousada:"Le Ange Mar",features:[{icon:c.jsx(je,{}),text:"45m²"},{icon:c.jsx(re,{}),text:"Ar-condicionado"},{icon:c.jsx(Xe,{}),text:"Frigobar"},{icon:c.jsx(wi,{}),text:"Cafeteira 3 corações"},{icon:c.jsx(ze,{}),text:"Smart TV"},{icon:c.jsx(Ie,{}),text:"Cama king-size"},{icon:c.jsx(Ae,{}),text:"Banheira relaxante"},{icon:c.jsx(re,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(Ke,{}),text:"Varanda privativa"}],Description:"Com 45m², esta suíte conta com uma cama king-size, ar-condicionado, cafeteira 3 Corações e frigobar, oferecendo o necessário para uma estadia repleta de tranquilidade. A vista incrível para o mar, junto à suave maresia, proporciona momentos de relaxamento para aproveitar ao lado do seu pet."}],FE=["https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/609d4224-77e9-4993-093c-7e6b6f53cd00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/bf696df0-ff89-4aa5-b5ab-b42477dfc400/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/ece7a36a-7989-4a77-c69e-963b7c41e500/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/7fd252cd-2c0a-420d-55e6-7ddb05319200/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/3bed0eb8-a9a7-4a71-48d5-7be1528fa400/public"],$E=[{NomedaSuite:"Suíte Superior 4",NomedaPousada:"Le Ange Mar",features:[{icon:c.jsx(je,{}),text:"45m²"},{icon:c.jsx(re,{}),text:"Ar-condicionado"},{icon:c.jsx(Xe,{}),text:"Frigobar"},{icon:c.jsx(wi,{}),text:"Cafeteira 3 corações"},{icon:c.jsx(ze,{}),text:"Smart TV"},{icon:c.jsx(Ie,{}),text:"Cama king-size"},{icon:c.jsx(Ae,{}),text:"Banheira relaxante"},{icon:c.jsx(re,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(Ke,{}),text:"Varanda privativa"}],Description:"Desfrute de 45m² de conforto e tranquilidade nesta suíte aconchegante. Equipada com cama king-size, ar-condicionado, cafeteira 3 Corações e frigobar, é o ambiente perfeito para relaxar. Conta, ainda, com uma vista espetacular para o mar, combinada com a brisa fresca da maresia."}],BE=["https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/d47d93cd-1d83-4684-b2cd-23067ba58b00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/4d214206-6623-468f-7d4e-40db9793d700/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/2671e476-3ba9-402c-5864-0b3c4f2f6c00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/f1a7a38f-4371-441a-2492-e7e0f97eee00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/be3dccd2-e019-4d93-9c6c-3b930d519c00/public"],HE=[{NomedaSuite:"Suíte Superior 5",NomedaPousada:"Le Ange Mar",features:[{icon:c.jsx(je,{}),text:"45m²"},{icon:c.jsx(re,{}),text:"Ar-condicionado"},{icon:c.jsx(Xe,{}),text:"Frigobar"},{icon:c.jsx(wi,{}),text:"Cafeteira 3 corações"},{icon:c.jsx(ze,{}),text:"Smart TV"},{icon:c.jsx(Ie,{}),text:"Cama king-size"},{icon:c.jsx(Ae,{}),text:"Banheira relaxante"},{icon:c.jsx(re,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(Ke,{}),text:"Varanda privativa"}],Description:"Uma suíte de 45m² que une conforto e tranquilidade. Com cama king-size, ar-condicionado, cafeteira 3 Corações e frigobar, é ideal para vivenciar aqueles momentos de preguiça ao lado do seu pet. Relaxe ao som das ondas do mar e aproveite a banheira relaxante."}],UE=["https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/9891374e-4514-480c-bc7c-5e1af0ef7b00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/6747ab9c-105d-4e37-5be7-d14b63c6d100/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/4ee59c14-ad1f-409b-db20-e49298d49400/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/8d46666c-530f-42d4-9223-bdd74e4a7900/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/31a78bcb-34a0-4254-b51e-3f6ff4dbe600/public"],WE=[{NomedaSuite:"Suíte Superior 6",NomedaPousada:"Le Ange Mar",features:[{icon:c.jsx(je,{}),text:"45m²"},{icon:c.jsx(re,{}),text:"Ar-condicionado"},{icon:c.jsx(Xe,{}),text:"Frigobar"},{icon:c.jsx(wi,{}),text:"Cafeteira 3 corações"},{icon:c.jsx(ze,{}),text:"Smart TV"},{icon:c.jsx(Ie,{}),text:"Cama king-size"},{icon:c.jsx(Ae,{}),text:"Banheira relaxante"},{icon:c.jsx(re,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(Ke,{}),text:"Varanda privativa"}],Description:"Com 45m² de puro conforto, esta suíte oferece cama king-size, ar-condicionado, cafeteira 3 Corações e frigobar, proporcionando um ambiente mais do que acolhedor, tranquilo. Sem contar que a vista encantadora para o mar e a banheira de imersão tornam a suíte ainda mais relaxante."}],qE=["https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/9b174ce2-2966-4c9e-9faf-185da8d1d200/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/b0924d25-dd2e-4a7b-5db4-558748300f00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/0c0b3f28-0981-477e-a77a-ee606e941f00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/252537ee-171f-4f70-3bda-8479e0c1be00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/b90bd076-582a-4fe6-3fb1-95a0ceadc700/public"],YE=[{NomedaSuite:"Suíte Master 7",NomedaPousada:"Le Ange Mar",features:[{icon:c.jsx(je,{}),text:"45m²"},{icon:c.jsx(re,{}),text:"Ar-condicionado"},{icon:c.jsx(Xe,{}),text:"Frigobar"},{icon:c.jsx(wi,{}),text:"Cafeteira 3 corações"},{icon:c.jsx(ze,{}),text:"Smart TV"},{icon:c.jsx(Ie,{}),text:"Cama king-size"},{icon:c.jsx(Ae,{}),text:"Banheira relaxante"},{icon:c.jsx(re,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(Ke,{}),text:"Varanda privativa"}],Description:"Esta suíte de 45m² oferece cama king-size, ar-condicionado, cafeteira 3 Corações e frigobar, criando um espaço aconchegante e tranquilo. Aproveite a vista cativante para o mar e relaxe na banheira de imersão, transformando sua estadia em um verdadeiro paraíso."}],KE=["https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/6280f6c6-f008-4f18-fe45-fe16d6d76000/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/eea5797e-34bc-4138-8ab7-9e4bd9fcd500/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/c112a2dd-d613-4801-d4a0-8d30b5121a00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/90902690-7a42-4cad-b8aa-4099c8b58000/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/c967f3cc-5ae6-4ea1-4e3e-2041f83cb600/public"],XE=[{NomedaSuite:"Suíte Master 8",NomedaPousada:"Le Ange Mar",features:[{icon:c.jsx(je,{}),text:"45m²"},{icon:c.jsx(re,{}),text:"Ar-condicionado"},{icon:c.jsx(Xe,{}),text:"Frigobar"},{icon:c.jsx(wi,{}),text:"Cafeteira 3 corações"},{icon:c.jsx(ze,{}),text:"Smart TV"},{icon:c.jsx(Ie,{}),text:"Cama king-size"},{icon:c.jsx(Ae,{}),text:"Banheira relaxante"},{icon:c.jsx(re,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(Ke,{}),text:"Varanda privativa"}],Description:"A suíte de 45m² oferece o melhor em conforto, com cama king-size, ar-condicionado, cafeteira 3 Corações e frigobar. A vista deslumbrante para o mar e a banheira de imersão garantem momentos de total descanso e relaxamento."}],QE=()=>{const e=hn(),t={suite1:j.useRef(null),suite2:j.useRef(null),suite3:j.useRef(null),suite4:j.useRef(null),suite5:j.useRef(null),suite6:j.useRef(null),suite7:j.useRef(null),suite8:j.useRef(null),suite9:j.useRef(null),suite10:j.useRef(null)};return j.useEffect(()=>{const n=()=>{var a;const r=e.hash.replace("#","");if(console.log("Hash atual:",r),r&&((a=t[r])!=null&&a.current)){const o=t[r].current;if(o){const s=o.offsetTop-100;console.log(`Elemento encontrado: ${r}, rolando para: ${s}px`),window.scrollTo({top:s,behavior:"smooth"})}else console.log(`Elemento com ID ${r} não encontrado no DOM.`)}else console.log(`Hash ${r} não está associado a um ref válido.`)},i=()=>{console.log("Página carregada, verificando hash..."),n()};return window.addEventListener("load",i),window.addEventListener("hashchange",n),n(),()=>{window.removeEventListener("load",i),window.removeEventListener("hashchange",n)}},[e,t]),j.useEffect(()=>{Oe.init({duration:1e3,once:!1}),Oe.refresh()},[]),c.jsxs(c.Fragment,{children:[c.jsx(gn,{}),c.jsxs(LE,{children:["Acomodações da",c.jsx("b",{children:"Pousada Le Ange Mar"})]}),c.jsx(He,{id:"suite1",ref:t.suite1,images:OE,suites:IE,reverse:!0,background:"#7AC4F350"}),c.jsx(He,{id:"suite2",ref:t.suite2,images:RE,suites:DE,reverse:!1,background:"#7AC4F350"}),c.jsx(He,{id:"suite3",ref:t.suite3,images:VE,suites:NE,reverse:!0,background:"#7AC4F350"}),c.jsx(He,{id:"suite4",ref:t.suite4,images:FE,suites:$E,reverse:!1,background:"#7AC4F350"}),c.jsx(He,{id:"suite5",ref:t.suite5,images:BE,suites:HE,reverse:!0,background:"#7AC4F350"}),c.jsx(He,{id:"suite6",ref:t.suite6,images:UE,suites:WE,reverse:!1,background:"#7AC4F350"}),c.jsx(He,{id:"suite7",ref:t.suite7,images:qE,suites:YE,reverse:!0,background:"#7AC4F350"}),c.jsx(He,{id:"suite8",ref:t.suite8,images:KE,suites:XE,reverse:!1,background:"#7AC4F350"}),c.jsx(xi,{})]})},ZE=k.div`
    height: 0vh;

    @media (max-width: 768px) {
        height: 0vh;
    }
`,JE=k.section`
    width: 100%;
    display: flex;
    padding: 5% 10% 2.5% 5%;
    align-items: center;
    justify-content: space-between;
    height: 100vh;
    background: #fff;
    position: relative;

    &::before {
        content: '';
        width: 100%;
        height: 100%;
        left: 0;
        position: absolute;
        z-index: 1;
        opacity: 0.02;
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
`,eP=k.div`
    width: 55%;
    height: 100%;
    background-image: url('https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/ddb82947-e348-414c-3db1-f51552701b00/public');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    filter: contrast(110%);
    position: absolute;
    right: 0;
    top: 0;

    &::before{
        content: '';
        width: 30%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 10;
        border-image: fill 0 linear-gradient(-90deg, #0000, #ffffff);

        @media (max-width:768px){
            display: none;
        }
    }

    @media (max-width: 768px) {
        width: 100%;
        border-radius: 0px;
        border-image: fill 0 linear-gradient(#0000, #ffffff);
        box-shadow: none!important;
        position: absolute;
        height: 100%;
        top: 0;
        z-index: -3;
    }
`,tP=k.div`
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
`,nP=[{title:"Pet Friendly",description:"Não temos restrições quanto ao porte ou raça do seu pet, também não cobramos taxas adicionais para a vinda deles. Aqui, o seu pet tem liberdade total para acessar todas as nossas comodidades!",buttonText:"Viver minha experiência agora",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/42a70d06-97d1-4f5c-5df8-36c30f21c100/public"},{title:"Praia",description:"Para os amantes da praia, estamos localizados a apenas 150 metros da Praia Rasa, onde você e o seu pet podem aproveitar juntinhos e dar um mergulho delicioso no mar.",buttonText:"Viver minha experiência agora",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/da4810e5-6e85-45f5-1fcf-f6a74754bd00/public"},{title:"Piscina",description:"Nossa piscina aquecida com vista panorâmica para o oceano é de surpreender! Possui tratamento especial por ozônio com níveis baixíssimos de cloro, pensando no bem-estar da sua pele e a do seu pet também!",buttonText:"Viver minha experiência agora",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/09da9d76-57b8-4d44-02b2-3c4c2380c800/public"},{title:"Ofurôs",description:"São dois ofurôs acoplados na piscina, para você relaxar na água quentinha, apreciando a vista exuberante do mar.",buttonText:"Viver minha experiência agora",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/0d1d1a6a-5935-4c57-6b12-d1f028604400/public"},{title:"Sala de estar",description:"A sala de estar é aquela que abraça e aconchega. Cheia de sofás, você pode se acomodar e assistir à televisão, ou até mesmo ler um livro, sempre na companhia do seu pet.",buttonText:"Viver minha experiência agora",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/939f40ce-048b-4746-7ce7-83fc2f4bbc00/public"},{title:"Cozinha",description:"Todas as refeições estão incluídas: café da manhã, almoço, chá da tarde e jantar! Todas preparadas com muito tempero, amor e afeto.",buttonText:"Viver minha experiência agora",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/bec96bcc-f2d6-431c-a7d5-31e1c5b7d000/public"},{title:"Bar",description:"Para completar ainda mais a sua experiência, contamos com uma carta variada de vinhos, destilados, drinks e cervejas!",buttonText:"Viver minha experiência agora",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/67318553-8e4b-4d4c-b914-3ea76fc7be00/public"},{title:"Suítes",description:"São 8 suítes, elegantemente, decoradas, todas com vista para o mar, banheira de imersão, varanda, cama king-size, ar-condicionado e frigobar.",buttonText:"Viver minha experiência agora",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/4d6afdaf-1cfe-4860-8099-818abedfdd00/public"}],iP=k.section`
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
`,rP=[{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/04491c1f-dc99-499a-4e92-13037b3eab00/public",text:"Suíte Superior 1",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/4551d99f-d7fa-440f-bdb1-9126c3a82100/public",text:"Suíte Standard 2",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a81bc75d-a475-4dc9-6101-2f7dbb4e4b00/public",text:"Suíte Superior 3",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/e0b4c640-813a-4586-bdf9-91b0be3f7300/public",text:"Suíte Superior 4",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/912f5f6c-6f94-4dae-30b3-85c460f0f700/public",text:"Suíte Superior 5",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/70b133ff-56ab-44b4-76b3-ef1638c79000/public",text:"Suíte Superior 6",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/e9d95c2b-081d-4808-6bf6-431e89183c00/public",text:"Suíte Master 7",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/baf68f87-5db9-47ec-0fb5-dc4b5e1f4b00/public",text:"Suíte Master 8",loading:"lazy"}],aP=k.div`
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
`,oP=k.section`
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
`,sP=[{image:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/58c77a3d-d9fb-422f-c84b-ad4798b74600/public",title:"Fique 4 pague 3",dateRange:"Segunda-feira a Sexta-feira",features:[{icon:c.jsx(ve,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(mo,{}),text:"Até 12X SEM JUROS"},{icon:c.jsx(ut,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"449,00",discount:25},{image:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/1ea7ed06-0da2-4123-00bf-c74543625600/public",title:"Pacote de Carnaval",dateRange:"28/02/2025 até 04/03/2025 (4 diárias)",features:[{icon:c.jsx(ve,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(ve,{}),text:"Churrasco no sábado"},{icon:c.jsx(ut,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"757,25",discount:25},{image:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/7e26f340-d751-4102-9259-3b9ec67e3600/public",title:"Pacote de Páscoa",dateRange:"17/04/2025 até 21/04/2025 (4 diárias)",features:[{icon:c.jsx(ve,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(ve,{}),text:"Almoço e noite especial"},{icon:c.jsx(ut,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"653,80",discount:25}],lP=k.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 15vh;
    margin-bottom: -10vh;

    @media (max-width: 768px) {
        display: none;
    }
`,cP=[{images:[{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/c9f443a0-365f-4341-67c4-dc3b15d8d200/public",alt:"Foto de cachorro com uma bola na boca",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/f381312d-98e6-4e3a-2267-b72775b77800/public",alt:"Foto do cachorro sentado tomando sol",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/ebe09a3c-386f-4683-b025-9734976d0b00/public",alt:"Cachorro na piscina sorrindo",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/2ea4864a-bc1c-4b0f-c720-4f4db60d6600/public",alt:"Cachorro tirando uma selfie com outros 3 cachorros",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/0d4896d4-5675-4739-7cb3-30fc1c6dec00/public",alt:"Foto do cachorro olhando para a câmera",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/6a09554d-7f59-42f4-603b-bf2a3bf24600/public",alt:"Cachorro com a lingua para fora",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/6f6a0274-479c-4c48-e1ce-23fa90998500/public",alt:"Cachorro na borda da piscina",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/b784a222-c8bc-4a35-ac3a-a6056d717300/public",alt:"Cachorro em uma prancha de surf na onda",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/d826fa54-7c2b-47b9-9cb6-4e0540d8dd00/public",alt:"Cachorro com óculos escuros",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/00e287de-9719-47ee-0fb1-3ef507b3a800/public",alt:"Cachorro e um cachorro pequeno",loading:"lazy",label:"Le Ange Mar"}]},{images:[{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/b4ddd8c3-b6c1-4c00-d54b-06a44c074900/public",alt:"Foto de um cachorro com uma taça do lado",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a6b63bf4-92e1-43d5-9a86-ed900bdc4800/public",alt:"3 cachorros e um homem na piscina",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/1cd65a71-7f00-4f13-5a67-c4ff922d8f00/public",alt:"Cachorro marrom",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/366f42cc-6fe9-4fc0-5ef6-15ea8e420b00/public",alt:"Cachorro marrom na piscina",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/5b19b1f4-fd46-4dc9-5faa-96995d69b400/public",alt:"Cachorro branco olhando para a camera",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/252ec971-e6a4-4b55-3e1b-2069f4570800/public",alt:"Cachorro dormindo no sofá",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/9ca851c2-347a-4f8c-752e-b90080865800/public",alt:"Cachorro em cima do morro olhando para o lado",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/7a0ae482-3436-4db1-9ed3-c1c7b1b02b00/public",alt:"3 cachorros brincando na praia",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/d9be2586-3341-4990-f3c8-685edcad8900/public",alt:"Foto do cachorro olhando para a câmera",loading:"lazy",label:"Le Ange Mar"}],reverse:!0}],dP=k.p`
  font-size: .9rem!important;
  opacity: .4;
  font-weight: 200;
`,uP=k.div`
    width: 100%;
    margin-top: 5vh;
    margin-bottom: -5vh;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px){
        margin-top: 0;
        margin-bottom: 0;
    }
`,fP=()=>(j.useEffect(()=>{Oe.init({duration:1e3,once:!1}),Oe.refresh()},[]),c.jsxs(c.Fragment,{children:[c.jsx(Rn,{children:c.jsx("title",{children:"Le Ange Serra - Pousada Le Ange"})}),c.jsx(ZE,{}),c.jsx(gn,{}),c.jsxs(JE,{children:[c.jsxs(tP,{children:[c.jsxs("h4",{"data-aos":"fade-up","data-aos-delay":"100",children:["Conheça a ",c.jsx("b",{children:"Le Ange Mar"}),", a pousada mais"]}),c.jsxs("h1",{"data-aos":"fade-down","data-aos-delay":"200",children:["PET FRIENDLY",c.jsx("br",{})," DO ",c.jsx("b",{children:"BRASIL"})]}),c.jsx("p",{children:"Aqui, você e o seu pet são mais do que bem-vindos!"}),c.jsx("div",{children:c.jsx(yi,{text:"Reservar agora!",textColor:"var(--color--black)",backgroundColor:"transparent",borderColor:"var(--color--black)",iconColor:"var(--color--black)",hoverBackgroundColor:"var(--color--blue)",hoverBorderColor:"var(--color--blue)",hoverColor:"var(--color--white)",hoverIconColor:"var(--color--white)",onClick:()=>window.open("https://wa.link/dojlwi","_blank")})}),c.jsx(dP,{children:"*Só permitimos crianças acima de 13 anos!"})]}),c.jsx(eP,{"data-aos":"fade-left","data-aos-delay":"200"})]}),c.jsx(aP,{"data-aos":"fade-in","data-aos-delay":"100",children:c.jsx("h1",{"data-aos":"fade-up","data-aos-delay":"300",children:"LeAnge Mar | Armação dos Búzios RJ"})}),c.jsx(Kr,{}),c.jsx(iP,{"data-aos":"fade-up","data-aos-delay":"50",children:c.jsx(Nl,{slides:nP,titleColor:"var(--color--blue)",buttonBgColor:"var(--color--blue)",imagePosition:"left",backgroundColor:"var(--color--blue)"})}),c.jsx(n2,{images:rP}),c.jsx(Fl,{colorDefinedBold:"var(--color--blue)","data-aos":"fade-up","data-aos-delay":"400"}),c.jsx(Bl,{carousels:cP,"data-aos":"fade-in","data-aos-delay":"400"}),c.jsx(lP,{children:c.jsx(Fe,{backgroundColor:"var(--color--green)",text:"Fazer minha reserva!",onClick:()=>window.open("https://wa.link/dojlwi","_blank")})}),c.jsx(uP,{children:c.jsx(xo,{})}),c.jsx(oP,{"data-aos":"fade-up","data-aos-delay":"400",children:c.jsx(vo,{events:sP})}),c.jsx($l,{}),c.jsx(xi,{})]})),pP=k.div`
    height: 0vh;

    @media (max-width: 768px){
        height: 0vh!important;
    }
`,hP=k.section`
    width: 100%;
    display: flex;
    padding: 5% 5% 2.5% 10%;
    align-items: center;
    justify-content: space-between;
    flex-direction: row-reverse;
    height: 100vh;
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
        opacity: .02;
        background-image: url('https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/f9af3c90-2ae9-4250-2ac9-afedce182000/public');
        background-position: center;
        background-size: cover;

        @media (max-width:1080px){
            display: none!important;
        }
    }

    @media (max-width: 768px){
        padding: 5% 2.5%;
        flex-direction: column-reverse;
        position: relative;
        z-index: 2;
        height: 100vh;
    }
`,mP=k.div`
    width: 55%;
    height: 100%;
    background-image: url('https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/f9af3c90-2ae9-4250-2ac9-afedce182000/public');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    filter: contrast(110%);
    position: absolute;
    left: 0;
    top: 0;

    &::before{
        content: '';
        width: 30%;
        height: 100%;
        position: absolute;
        top: 0;
        right: 0;
        z-index: 10;
        border-image: fill 0 linear-gradient(90deg, #0000, #ffffff);

        @media (max-width:768px){
            display: none;
        }
    }

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
`,gP=k.div`
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
        justify-content: flex-end;
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
            line-height: 100%;
        }
    }
`,vP=[{title:"Pet Friendly",description:"Não temos restrições quanto ao porte ou raça do seu pet, também não cobramos taxas adicionais para a vinda deles. Aqui, o seu pet tem liberdade total para acessar todas as nossas comodidades!",buttonText:"Viver minha experiência agora",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/db3f6942-0de2-433d-1235-33bfa547e500/public"},{title:"Aventura",description:"Na propriedade, há trilhas que percorrem a natureza, beirando o rio! Em diversos pontos, você pode dar uma paradinha para tomar um banho nas águas frescas e renovar as energias!",buttonText:"Viver minha experiência agora",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/b324ce14-d3d8-4fc3-fccf-b4b4a9806d00/public"},{title:"Refrescar",description:"Nossa maravilhosa piscina de borda infinita possui aquecimento solar e tratamento especial por ozônio, com níveis baixíssimos de cloro, além de contar com um ofurô acoplado, perfeito para aproveitar o final de tarde.",buttonText:"Viver minha experiência agora",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/8b7eae12-574b-40fd-5e6f-7f341c81a600/public"},{title:"Sossego",description:"A área da sauna fica situada ao lado da mata, envolvida pelo som relaxante do rio que passa. Aqui, você pode desfrutar de um hot tub abastecido por água natural e aquecido à lenha, o combo perfeito para você relaxar.",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/da7c577a-832a-4a84-d5fd-162e11915b00/public"},{title:"Lazer",description:"Nossas áreas internas contam com três salas superequipadas e aconchegantes, sendo elas: sala de TV, sala de estar, sala de jogos com mesa de bilhar, carteado, jogos de tabuleiro e biblioteca.",buttonText:"Viver minha experiência agora",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/7c086b71-3c6b-442b-584c-dcdabe1be700/public"},{title:"Cozinha",description:"Todas as refeições estão incluídas: café da manhã, almoço, chá da tarde e jantar! Todas preparadas com muito tempero, amor e afeto.",buttonText:"Viver minha experiência agora",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/c1c7acdf-aba7-443b-b1e5-3bdc237b3b00/public"},{title:"Diversão",description:"Espaço de sobra para o seu pet se divertir! Espaço agility à beira do lago, com muita grama, para o seu pet, correr, pular, brincar e, claro, nadar!",buttonText:"Viver minha experiência agora",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/c57174c4-9b12-4842-e8ff-6cfb4867a200/public"},{title:"Adega",description:"Para tornar a sua experiência ainda mais especial, contamos com uma adega subterrânea para a climatização perfeita dos vinhos, bar com carta variada de drinks, cervejas e destilados.",buttonText:"Viver minha experiência agora",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/1a66d627-7861-4124-638d-d21ddef05100/public"},{title:"Suítes",description:"São 10 suítes encatadoras e cada uma possui o seu charme. Todas dispõem de uma banheira com vista para a natureza, lareira, cama king-size, ar-condicionado, frigobar e varanda.",buttonText:"Viver minha experiência agora",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/48a11406-659c-4d98-f2d8-6fc518ef6600/public"},{title:"Relaxar",description:"Relaxe no nosso SPA com uma vista de frente para a mata! Você pode escolher contratar os nossos serviços de massoterapia, manicure e pedicure.",buttonText:"Viver minha experiência agora",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/ece77d44-3478-4c00-cb8f-073b002ed400/public"}],xP=[{images:[{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/c3cd47cc-01fa-43c8-ef2d-e57d8ba50d00/public",alt:"Cachorro surfando na piscina",loading:"lazy",label:"Le Ange Serra"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/5bdb3546-6085-40a1-059b-b977978f2800/public",alt:"Cachorro andando na borda da piscina",loading:"lazy",label:"Le Ange Serra"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/e69c27cf-cc71-4a1a-c859-7604db2ec700/public",alt:"Cachorro sentado tomando sol e sorrindo para a foto",loading:"lazy",label:"Le Ange Serra"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/f9af3c90-2ae9-4250-2ac9-afedce182000/public",alt:"2 cachorros e uma mulher no meio",loading:"lazy",label:"Le Ange Serra"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/4fe90a96-3e1a-475e-bf6c-b2f68430b400/public",alt:"Cachorro mordendo uma bolinha",loading:"lazy",label:"Le Ange Serra"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/fa931507-db19-427a-91a0-c30d8fb81800/public",alt:"Casal com um casal de cachorro sentado na beira da piscina",loading:"lazy",label:"Le Ange Serra"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/f0b0ec5f-6bd1-427d-7bc9-93253779d000/public",alt:"Mulher na cachoeira com cachorros brincando",loading:"lazy",label:"Le Ange Serra"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/82fb4467-00bc-422b-be3f-d13d0847d900/public",alt:"Mulher e cachorro na piscina sorrindo",loading:"lazy",label:"Le Ange Serra"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/3f981b12-4550-4d26-bdc6-1e3050abf600/public",alt:"3 cachorros tirando uma selfie",loading:"lazy",label:"Le Ange Serra"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/eff6d8ef-159a-46da-6fe7-0a826541f000/public",alt:"Cachorro dormindo na rede em cima da cachoeira",loading:"lazy",label:"Le Ange Serra"}]},{images:[{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/23c08875-4c8e-470d-3635-56f4cdfc1000/public",alt:"Cachorro dormindo no sofá",loading:"lazy",label:"Le Ange Serra"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a7910dc1-2d38-46fe-c997-734005e71600/public",alt:"Cachorro papai noel",loading:"lazy",label:"Le Ange Serra"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/0ba1de25-a892-4ee8-7165-584f54f0b600/public",alt:"Um cachorro no cola de um humano sorrindo",loading:"lazy",label:"Le Ange Serra"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/6da69e80-1cff-41e2-5434-318840221800/public",alt:"2 cachorros e uma mulher no meio",loading:"lazy",label:"Le Ange Serra"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/d9be2586-3341-4990-f3c8-685edcad8900/public",alt:"Cachorro na mão do tutor",loading:"lazy",label:"Le Ange Serra"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/dce2d881-18d3-4a3d-5b7e-ad7e364be300/public",alt:"2 cachorros sorrindo na rede",loading:"lazy",label:"Le Ange Serra"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/fab67883-96b6-4f10-9c94-c5622ee8b000/public",alt:"Uma mulher e um cachorro do lado dela",loading:"lazy",label:"Le Ange Serra"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/56af4858-5fbf-438f-fac3-ee527c3a4600/public",alt:"3 cachorros brincando na praia",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/db285e3c-87b7-40db-b04b-cfd384d06200/public",alt:"Cachorro andando na cachoeira",loading:"lazy",label:"Le Ange Serra"}],reverse:!0}],yP=k.section`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px){
        height: auto;
        padding: 0% 0 5% 0 ;
    }
`,wP=k.div`
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
`,bP=k.section`
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
`,SP=k.p`
  font-size: .9rem!important;
  opacity: .4;
  font-weight: 200;
`,jP=[{image:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/58c77a3d-d9fb-422f-c84b-ad4798b74600/public",title:"Fique 4 pague 3",dateRange:"Segunda-feira a Sexta-feira",features:[{icon:c.jsx(ve,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(mo,{}),text:"Até 12X SEM JUROS"},{icon:c.jsx(ut,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"449,00",discount:25},{image:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/1ea7ed06-0da2-4123-00bf-c74543625600/public",title:"Pacote de Carnaval",dateRange:"28/02/2025 até 04/03/2025 (4 diárias)",features:[{icon:c.jsx(ve,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(ve,{}),text:"Churrasco no sábado"},{icon:c.jsx(ut,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"757,25",discount:25},{image:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/7e26f340-d751-4102-9259-3b9ec67e3600/public",title:"Pacote de Páscoa",dateRange:"17/04/2025 até 21/04/2025 (4 diárias)",features:[{icon:c.jsx(ve,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(ve,{}),text:"Almoço e noite especial"},{icon:c.jsx(ut,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"653,80",discount:25}],CP=k.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 15vh;
    margin-bottom: -10vh;

    @media (max-width: 768px){
        display: none;
    }
`,kP=[{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/c21ef88c-f22b-497e-1e70-5c5b4c4cf500/public",text:"Suíte Superior 1",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/23d18593-f941-4c65-0349-6b23e6ea2800/public",text:"Suíte Superior 2",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/99db9a7b-dafd-4b04-36ce-c4eac6880600/public",text:"Suíte Superior 3",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/d07d16a0-e7f4-4104-7d5e-f7e4c2dfa500/public",text:"Suíte Standard 4",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/fd429f81-a091-4ca3-9f54-d4a1b730e200/public",text:"Suíte Standard 5",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a22d76b9-b7d4-4174-0cc1-4cfdfd57d500/public",text:"Suíte Master 6",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a7ae1bee-6f60-4584-d03c-0aebd06a2600/public",text:"Suíte Superior 7",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/4c448474-8a7b-489b-ac5f-7b11c4dfad00/public",text:"Suíte Standard 8",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/509535a4-9291-44a8-c250-5e8be0b28e00/public",text:"Suíte Superior 9",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/853f4009-5ddc-49ad-717f-3d49d3ad4900/public",text:"Suíte Master 10",loading:"lazy"}],TP=k.div`
    width: 100%;
    margin-top: 5vh;
    margin-bottom: -5vh;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px){
        margin-top: 0;
        margin-bottom: 0;
    }
`,AP=()=>(j.useEffect(()=>{Oe.init({duration:1e3,once:!1}),Oe.refresh()},[]),c.jsxs(c.Fragment,{children:[c.jsx(Rn,{children:c.jsx("title",{children:"Le Ange Serra - Pousada Le Ange"})}),c.jsx(pP,{}),c.jsx(gn,{}),c.jsxs(hP,{children:[c.jsx(mP,{"data-aos":"zoom-in","data-aos-delay":"100"}),c.jsxs(gP,{children:[c.jsx("h4",{"data-aos":"fade-up","data-aos-delay":"100",children:"Conheça a Le Ange Serra, a pousada mais"}),c.jsxs("h1",{"data-aos":"fade-down","data-aos-delay":"200",children:["PET FRIENDLY",c.jsx("br",{})," DO ",c.jsx("b",{children:"BRASIL"})]}),c.jsx("p",{children:"Aqui você e o seu pet, são mais do que bem-vindos!"}),c.jsx(yi,{text:"Reservar agora!",textColor:"var(--color--black)",backgroundColor:"transparent",borderColor:"var(--color--black)",hoverBackgroundColor:"var(--color--green)",hoverBorderColor:"var(--color--green)",hoverColor:"var(--color--white)",hoverIconColor:"var(--color--white)",onClick:()=>window.open("https://wa.link/dojlwi","_blank")}),c.jsx(SP,{children:"*Só permitimos crianças acima de 13 anos!"})]})]}),c.jsx(wP,{"data-aos":"fade-up","data-aos-delay":"200",children:c.jsx("h1",{"data-aos":"fade-in","data-aos-delay":"400",children:"LeAnge Serra | Miguel Pereira RJ"})}),c.jsx(Kr,{}),c.jsx(yP,{children:c.jsx(Nl,{slides:vP,backgroundColor:"var(--color--green)"})}),c.jsx(t2,{images:kP,"data-aos":"fade-up","data-aos-delay":"200"}),c.jsx(Fl,{}),c.jsx(Bl,{carousels:xP}),c.jsx(CP,{children:c.jsx(Fe,{backgroundColor:"var(--color--green)",text:"Fazer minha reserva!",onClick:()=>window.open("https://wa.link/dojlwi","_blank")})}),c.jsx(TP,{children:c.jsx(xo,{})}),c.jsx(bP,{children:c.jsx(vo,{events:jP})}),c.jsx($l,{}),c.jsx(xi,{})]}));function EP(){const{pathname:e}=hn();return j.useEffect(()=>{window.scrollTo(0,0)},[e]),null}function PP(){const e=hn();return c.jsxs(c.Fragment,{children:[c.jsx(EP,{}),c.jsx(e6,{children:c.jsxs(w4,{location:e,children:[c.jsx(rn,{path:"/",element:c.jsx(Me.div,{initial:{opacity:0,scale:.8,rotateY:90},animate:{opacity:1,scale:1,rotateY:0},exit:{opacity:0,scale:.8,rotateY:-90},transition:{duration:.2,ease:"easeInOut"},children:c.jsx(hT,{})})}),c.jsx(rn,{path:"/sobre",element:c.jsx(Me.div,{initial:{opacity:0,scale:.8,rotateY:90},animate:{opacity:1,scale:1,rotateY:0},exit:{opacity:0,scale:.8,rotateY:-90},transition:{duration:.2,ease:"easeInOut"},children:c.jsx(WT,{})})}),c.jsx(rn,{path:"/mar",element:c.jsx(Me.div,{initial:{opacity:0,scale:.8,rotateY:90},animate:{opacity:1,scale:1,rotateY:0},exit:{opacity:0,scale:.8,rotateY:-90},transition:{duration:.2,ease:"easeInOut"},children:c.jsx(qA,{})})}),c.jsx(rn,{path:"/serra",element:c.jsx(Me.div,{initial:{opacity:0,scale:.8,rotateY:90},animate:{opacity:1,scale:1,rotateY:0},exit:{opacity:0,scale:.8,rotateY:-90},transition:{duration:.2,ease:"easeInOut"},children:c.jsx(PA,{})})}),c.jsx(rn,{path:"/event",element:c.jsx(Me.div,{initial:{opacity:0,scale:.8,rotateY:90},animate:{opacity:1,scale:1,rotateY:0},exit:{opacity:0,scale:.8,rotateY:-90},transition:{duration:.2,ease:"easeInOut"},children:c.jsx(IT,{})})}),c.jsx(rn,{path:"/acomodaMar",element:c.jsx(Me.div,{initial:{opacity:0,scale:.8,rotateY:90},animate:{opacity:1,scale:1,rotateY:0},exit:{opacity:0,scale:.8,rotateY:-90},transition:{duration:.2,ease:"easeInOut"},children:c.jsx(QE,{})})}),c.jsx(rn,{path:"/acomodaSerra",element:c.jsx(Me.div,{initial:{opacity:0,scale:.8,rotateY:90},animate:{opacity:1,scale:1,rotateY:0},exit:{opacity:0,scale:.8,rotateY:-90},transition:{duration:.2,ease:"easeInOut"},children:c.jsx(ME,{})})}),c.jsx(rn,{path:"/lpSerra",element:c.jsx(Me.div,{initial:{opacity:0,scale:.8,rotateY:90},animate:{opacity:1,scale:1,rotateY:0},exit:{opacity:0,scale:.8,rotateY:-90},transition:{duration:.2,ease:"easeInOut"},children:c.jsx(AP,{})})}),c.jsx(rn,{path:"/lpMar",element:c.jsx(Me.div,{initial:{opacity:0,scale:.8,rotateY:90},animate:{opacity:1,scale:1,rotateY:0},exit:{opacity:0,scale:.8,rotateY:-90},transition:{duration:.2,ease:"easeInOut"},children:c.jsx(fP,{})})})]},e.pathname)})]})}function GP(){const e=hn(),n=["/lpMar","/lpSerra"].includes(e.pathname);return c.jsxs(c.Fragment,{children:[!n&&c.jsx(iE,{}),c.jsx(PP,{})]})}function zP(){return c.jsx(A4,{children:c.jsx(GP,{})})}uv(document.getElementById("root")).render(c.jsx(j.StrictMode,{children:c.jsx(zP,{})}));
